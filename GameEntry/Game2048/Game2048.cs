#if CLIENT
#pragma warning disable CS1998

using Events;
using GameCore.Event;
using GameUI.Brush;
using GameUI.Control.Primitive;
using GameUI.Control.Struct;
using GameUI.Enum;
using GameUI.Struct;
using GameUI.TriggerEvent;
using GameUI.Graphics;
using System.Drawing;
using System.Numerics;

namespace GameEntry.Game2048;

public class Game2048 : IGameClass, IThinker
{
    // 游戏常量
    private const int GRID_SIZE = 4;
    private const float TILE_SIZE = 130f;
    private const float TILE_PADDING = 15f;
    private const float ANIMATION_SPEED = 8f;
    private const float MERGE_ANIMATION_SPEED = 12f;

    // UI组件
    private Panel? gamePanel;
    private Canvas? gameCanvas;
    private Label? scoreLabel;
    private Label? bestScoreLabel;
    private Label? gameOverLabel;
    private Label? winLabel;
    private Button? newGameButton;
    private Button? undoButton;

    // 游戏状态
    private int[,] grid = new int[GRID_SIZE, GRID_SIZE];
    private int[,] previousGrid = new int[GRID_SIZE, GRID_SIZE];
    private int score;
    private int bestScore;
    private int previousScore;
    private bool isGameOver;
    private bool hasWon;
    private bool isAnimating;

    // 动画相关
    private readonly List<TileAnimation> animations = [];
    private readonly List<MergeAnimation> mergeAnimations = [];
    private readonly List<Particle> particles = [];
    private float animationTimeoutCounter;
    private float delayedActionTimer;
    private Action? delayedAction;
    
    // 触发器引用 - 防止被GC回收
    private Trigger<EventGameKeyDown>? keyDownTrigger;

    // 游戏视觉参数
    private float gameWidth = 800f;
    private float gameHeight = 1000f;
    private float gridStartX = 80f;
    private float gridStartY = 300f;

    // 颜色主题 - 现代扁平化设计
    private readonly Dictionary<int, Color> tileColors = new()
    {
        { 0, Color.FromArgb(255, 205, 193, 180) },      // 空格子 - 浅灰
        { 2, Color.FromArgb(255, 238, 228, 218) },      // 2 - 米白色
        { 4, Color.FromArgb(255, 237, 224, 200) },      // 4 - 浅黄
        { 8, Color.FromArgb(255, 242, 177, 121) },      // 8 - 橙色
        { 16, Color.FromArgb(255, 245, 149, 99) },      // 16 - 深橙
        { 32, Color.FromArgb(255, 246, 124, 95) },      // 32 - 红橙
        { 64, Color.FromArgb(255, 246, 94, 59) },       // 64 - 红色
        { 128, Color.FromArgb(255, 237, 207, 114) },    // 128 - 金黄
        { 256, Color.FromArgb(255, 237, 204, 97) },     // 256 - 深金
        { 512, Color.FromArgb(255, 237, 200, 80) },     // 512 - 橙黄
        { 1024, Color.FromArgb(255, 237, 197, 63) },    // 1024 - 黄色
        { 2048, Color.FromArgb(255, 237, 194, 46) },    // 2048 - 目标金色
        { 4096, Color.FromArgb(255, 60, 58, 50) },      // 超级方块 - 深色
    };

    private readonly Dictionary<int, Color> textColors = new()
    {
        { 2, Color.FromArgb(255, 119, 110, 101) },      // 小数字 - 深灰
        { 4, Color.FromArgb(255, 119, 110, 101) },
        { 8, Color.White },                              // 大数字 - 白色
        { 16, Color.White },
        { 32, Color.White },
        { 64, Color.White },
        { 128, Color.White },
        { 256, Color.White },
        { 512, Color.White },
        { 1024, Color.White },
        { 2048, Color.White },
        { 4096, Color.White },
    };

    // 动画类
    private class TileAnimation
    {
        public int Value { get; set; }
        public float FromX { get; set; }
        public float FromY { get; set; }
        public float ToX { get; set; }
        public float ToY { get; set; }
        public float Progress { get; set; } = 0f;
        public bool IsCompleted => Progress >= 1f;
    }

    private class MergeAnimation
    {
        public float X { get; set; }
        public float Y { get; set; }
        public int Value { get; set; }
        public float Scale { get; set; } = 1f;
        public float Progress { get; set; } = 0f;
        public bool IsCompleted => Progress >= 1f;
    }

    private class Particle
    {
        public float X { get; set; }
        public float Y { get; set; }
        public float VelocityX { get; set; }
        public float VelocityY { get; set; }
        public float Life { get; set; }
        public float MaxLife { get; set; }
        public Color Color { get; set; }
        public float Size { get; set; }
    }

    public static void OnRegisterGameClass()
    {
        Game.OnGameTriggerInitialization += RegisterAll;
    }

    public static void RegisterAll()
    {
        // 如果游戏模式不是2048，则不注册触发器
        if (Game.GameModeLink != ScopeData.GameMode.Game2048)
        {
            return;
        }

        Trigger<EventGameStart> trigger = new(async (s, d) =>
        {
            var game = new Game2048();
            game.Initialize();
            return true;
        });
        trigger.Register(Game.Instance);
    }

    private void Initialize()
    {

        // 获取视口尺寸
        var viewportSize = GameUI.Device.ScreenViewport.Primary.Size;
        gameWidth = Math.Max(600f, viewportSize.Width);
        gameHeight = Math.Max(800f, viewportSize.Height);

        // 计算游戏区域位置 - 确保居中且留足够空间给UI
        var gridTotalSize = GRID_SIZE * TILE_SIZE + (GRID_SIZE - 1) * TILE_PADDING;
        gridStartX = (gameWidth - gridTotalSize) / 2;

        CreateUI();
        SetupEventHandlers();
        StartNewGame();
    }

    private void CreateUI()
    {
        // 主游戏面板
        gamePanel = new Panel()
        {
            Width = gameWidth,
            Height = gameHeight,
            Background = new SolidColorBrush(Color.FromArgb(255, 250, 248, 239)) // 温暖的背景色
        };

        // 游戏画布
        gameCanvas = new Canvas()
        {
            Width = gameWidth,
            Height = gameHeight,
            Parent = gamePanel
        };

        // 标题
        var titleLabel = new Label()
        {
            Text = "2048",
            FontSize = 84,
            TextColor = Color.FromArgb(255, 119, 110, 101),
            HorizontalAlignment = HorizontalAlignment.Center,
            VerticalAlignment = VerticalAlignment.Top,
            Margin = new Thickness(0, 30, 0, 0),
            Parent = gamePanel
        };

        // 分数面板
        var scorePanel = new Panel()
        {
            Width = 400,
            Height = 90,
            HorizontalAlignment = HorizontalAlignment.Center,
            VerticalAlignment = VerticalAlignment.Top,
            Margin = new Thickness(0, 150, 0, 0),
            Parent = gamePanel
        };

        // 当前分数
        var currentScorePanel = new Panel()
        {
            Width = 190,
            Height = 90,
            HorizontalAlignment = HorizontalAlignment.Left,
            Background = new SolidColorBrush(Color.FromArgb(255, 187, 173, 160)),
            Margin = new Thickness(0, 0, 10, 0),
            Parent = scorePanel
        };

        scoreLabel = new Label()
        {
            Text = "0",
            FontSize = 28,
            TextColor = Color.White,
            HorizontalAlignment = HorizontalAlignment.Center,
            VerticalAlignment = VerticalAlignment.Center,
            Margin = new Thickness(0, 5, 0, 0),
            Parent = currentScorePanel
        };

        var scoreTitle = new Label()
        {
            Text = "SCORE",
            FontSize = 16,
            TextColor = Color.FromArgb(255, 238, 228, 218),
            HorizontalAlignment = HorizontalAlignment.Center,
            VerticalAlignment = VerticalAlignment.Top,
            Margin = new Thickness(0, 8, 0, 0),
            Parent = currentScorePanel
        };

        // 最高分数
        var bestScorePanel = new Panel()
        {
            Width = 190,
            Height = 90,
            HorizontalAlignment = HorizontalAlignment.Right,
            Background = new SolidColorBrush(Color.FromArgb(255, 187, 173, 160)),
            Parent = scorePanel
        };

        bestScoreLabel = new Label()
        {
            Text = "0",
            FontSize = 28,
            TextColor = Color.White,
            HorizontalAlignment = HorizontalAlignment.Center,
            VerticalAlignment = VerticalAlignment.Center,
            Margin = new Thickness(0, 5, 0, 0),
            Parent = bestScorePanel
        };

        var bestTitle = new Label()
        {
            Text = "BEST",
            FontSize = 16,
            TextColor = Color.FromArgb(255, 238, 228, 218),
            HorizontalAlignment = HorizontalAlignment.Center,
            VerticalAlignment = VerticalAlignment.Top,
            Margin = new Thickness(0, 8, 0, 0),
            Parent = bestScorePanel
        };

        // 按钮面板 - 放在游戏区域下方
        var buttonPanel = new Panel()
        {
            Width = 400,
            Height = 60,
            HorizontalAlignment = HorizontalAlignment.Center,
            VerticalAlignment = VerticalAlignment.Top,
            Margin = new Thickness(0, 900, 0, 0), // 放在网格下方
            Parent = gamePanel
        };

        // 新游戏按钮
        newGameButton = new Button()
        {
            Width = 160,
            Height = 55,
            HorizontalAlignment = HorizontalAlignment.Left,
            Background = new SolidColorBrush(Color.FromArgb(255, 143, 122, 102)),
            Margin = new Thickness(0, 0, 10, 0),
            Parent = buttonPanel
        };

        var newGameLabel = new Label()
        {
            Text = "New Game",
            FontSize = 18,
            TextColor = Color.White,
            HorizontalAlignment = HorizontalAlignment.Center,
            VerticalAlignment = VerticalAlignment.Center,
            Parent = newGameButton
        };

        // 撤销按钮
        undoButton = new Button()
        {
            Width = 120,
            Height = 55,
            HorizontalAlignment = HorizontalAlignment.Right,
            Background = new SolidColorBrush(Color.FromArgb(255, 143, 122, 102)),
            Parent = buttonPanel
        };

        var undoLabel = new Label()
        {
            Text = "Undo",
            FontSize = 18,
            TextColor = Color.White,
            HorizontalAlignment = HorizontalAlignment.Center,
            VerticalAlignment = VerticalAlignment.Center,
            Parent = undoButton
        };

        // 游戏说明
        var instructionLabel = new Label()
        {
            Text = "WASD/方向键移动，R重开，U撤销，ESC紧急重置",
            FontSize = 16,
            TextColor = Color.FromArgb(255, 119, 110, 101),
            HorizontalAlignment = HorizontalAlignment.Center,
            VerticalAlignment = VerticalAlignment.Top,
            Margin = new Thickness(0, 970, 0, 0),
            Parent = gamePanel
        };

        // 游戏结束提示
        gameOverLabel = new Label()
        {
            Text = "Game Over!",
            FontSize = 48,
            TextColor = Color.FromArgb(255, 119, 110, 101),
            HorizontalAlignment = HorizontalAlignment.Center,
            VerticalAlignment = VerticalAlignment.Center,
            Visible = false,
            Parent = gamePanel
        };

        // 胜利提示
        winLabel = new Label()
        {
            Text = "You Win!",
            FontSize = 48,
            TextColor = Color.FromArgb(255, 237, 194, 46),
            HorizontalAlignment = HorizontalAlignment.Center,
            VerticalAlignment = VerticalAlignment.Center,
            Visible = false,
            Parent = gamePanel
        };

        // 添加到视觉树
        _ = gamePanel.AddToVisualTree();
    }

    private void SetupEventHandlers()
    {
        // 按钮事件
        newGameButton!.OnPointerPressed += OnNewGameClicked;
        undoButton!.OnPointerPressed += OnUndoClicked;

        // 键盘事件 - 保存为实例字段防止GC
        keyDownTrigger = new(async (s, d) =>
        {
            if (isAnimating) return true;

            switch (d.Key)
            {
                case GameCore.Platform.SDL.VirtualKey.Up:
                case GameCore.Platform.SDL.VirtualKey.W:
                    MoveUp();
                    break;
                case GameCore.Platform.SDL.VirtualKey.Down:
                case GameCore.Platform.SDL.VirtualKey.S:
                    MoveDown();
                    break;
                case GameCore.Platform.SDL.VirtualKey.Left:
                case GameCore.Platform.SDL.VirtualKey.A:
                    MoveLeft();
                    break;
                case GameCore.Platform.SDL.VirtualKey.Right:
                case GameCore.Platform.SDL.VirtualKey.D:
                    MoveRight();
                    break;
                case GameCore.Platform.SDL.VirtualKey.R:
                    StartNewGame();
                    break;
                case GameCore.Platform.SDL.VirtualKey.U:
                    UndoMove();
                    break;
                case GameCore.Platform.SDL.VirtualKey.Escape:
                    Game.Logger.LogWarning("Emergency reset triggered");
                    EmergencyReset();
                    break;
            }
            return true;
        });
        keyDownTrigger.Register(Game.Instance);

        // 触摸/鼠标点击事件 - 简化为点击跳转
        gameCanvas!.OnPointerPressed += OnCanvasClicked;

        // 启用思考器用于动画
        (this as IThinker).DoesThink = true;
    }

    private void OnCanvasClicked(object? sender, PointerEventArgs e)
    {
        // 简单的点击提示，实际游戏主要通过键盘控制
        // 可以在这里添加帮助信息显示等功能
    }

    public void Think(int deltaInMs)
    {
        var deltaTime = deltaInMs / 1000f;
        
        UpdateAnimations(deltaTime);
        UpdateParticles(deltaTime);
        UpdateDelayedActions(deltaTime);
        
        DrawGame();
        
        // 确保思考器保持激活状态
        (this as IThinker).DoesThink = true;
    }
    
    private void UpdateDelayedActions(float deltaTime)
    {
        if (delayedActionTimer > 0f)
        {
            delayedActionTimer -= deltaTime;
            
            if (delayedActionTimer <= 0f)
            {
                
                try
                {
                    delayedAction?.Invoke();
                }
                catch (Exception ex)
                {
                    Game.Logger.LogError(ex, "Error executing delayed action");
                }
                
                delayedAction = null;
                delayedActionTimer = 0f;
            }
        }
    }

    private void UpdateAnimations(float deltaTime)
    {
        // 更新移动动画
        for (var i = animations.Count - 1; i >= 0; i--)
        {
            var anim = animations[i];
            anim.Progress += ANIMATION_SPEED * deltaTime;
            if (anim.Progress >= 1f)
            {
                anim.Progress = 1f;
                animations.RemoveAt(i);
            }
        }

        // 更新合并动画
        for (var i = mergeAnimations.Count - 1; i >= 0; i--)
        {
            var anim = mergeAnimations[i];
            anim.Progress += MERGE_ANIMATION_SPEED * deltaTime;
            
            // 弹性缩放效果
            if (anim.Progress <= 0.5f)
            {
                anim.Scale = 1f + (anim.Progress * 0.4f); // 放大到1.2倍
            }
            else
            {
                anim.Scale = 1.2f - ((anim.Progress - 0.5f) * 0.4f); // 缩回到1倍
            }

            if (anim.Progress >= 1f)
            {
                anim.Progress = 1f;
                anim.Scale = 1f;
                mergeAnimations.RemoveAt(i);
            }
        }

        // 检查动画是否完成
        isAnimating = animations.Count > 0 || mergeAnimations.Count > 0;
        
        // 安全检查：如果动画状态卡住超过5秒，强制重置
        if (isAnimating)
        {
            animationTimeoutCounter += deltaTime;
            if (animationTimeoutCounter > 5f)
            {
                Game.Logger.LogWarning("Animation timeout detected, forcing reset");
                animations.Clear();
                mergeAnimations.Clear();
                isAnimating = false;
                animationTimeoutCounter = 0f;
            }
        }
        else
        {
            animationTimeoutCounter = 0f;
        }
    }

    private void UpdateParticles(float deltaTime)
    {
        for (var i = particles.Count - 1; i >= 0; i--)
        {
            var particle = particles[i];
            particle.X += particle.VelocityX * deltaTime;
            particle.Y += particle.VelocityY * deltaTime;
            particle.VelocityY += 150f * deltaTime; // 轻微重力
            particle.Life -= deltaTime;

            if (particle.Life <= 0)
            {
                particles.RemoveAt(i);
            }
        }
    }

    private void StartNewGame()
    {
        // 重置游戏状态
        Array.Clear(grid, 0, grid.Length);
        Array.Clear(previousGrid, 0, previousGrid.Length);
        score = 0;
        previousScore = 0;
        isGameOver = false;
        hasWon = false;
        isAnimating = false;
        
        animations.Clear();
        mergeAnimations.Clear();
        particles.Clear();

        // 添加初始方块
        AddRandomTile();
        AddRandomTile();

        UpdateUI();
        gameOverLabel!.Visible = false;
        winLabel!.Visible = false;

    }

    private void AddRandomTile()
    {
        var emptyCells = new List<(int, int)>();
        for (var i = 0; i < GRID_SIZE; i++)
        {
            for (var j = 0; j < GRID_SIZE; j++)
            {
                if (grid[i, j] == 0)
                    emptyCells.Add((i, j));
            }
        }

        if (emptyCells.Count > 0)
        {
            var randomIndex = Random.Shared.Next(emptyCells.Count);
            var (row, col) = emptyCells[randomIndex];
            grid[row, col] = Random.Shared.NextSingle() < 0.9f ? 2 : 4; // 90%概率生成2，10%概率生成4

            // 创建出现粒子效果
            var (x, y) = GetTilePosition(row, col);
            CreateSpawnParticles(x + TILE_SIZE / 2, y + TILE_SIZE / 2);
        }
    }

    private void SaveGameState()
    {
        Array.Copy(grid, previousGrid, grid.Length);
        previousScore = score;
    }

    private void UndoMove()
    {
        if (isAnimating) return;
        
        Array.Copy(previousGrid, grid, grid.Length);
        score = previousScore;
        UpdateUI();
        
    }

    // 移动逻辑
    private void MoveUp()
    {
        if (isAnimating) return;
        SaveGameState();
        
        var moved = false;
        animations.Clear();
        mergeAnimations.Clear();

        for (var col = 0; col < GRID_SIZE; col++)
        {
            var merged = new bool[GRID_SIZE];
            
            for (var row = 1; row < GRID_SIZE; row++)
            {
                if (grid[row, col] == 0) continue;

                var newRow = row;
                var value = grid[row, col];

                // 找到可以移动到的位置
                while (newRow > 0 && grid[newRow - 1, col] == 0)
                {
                    newRow--;
                }

                // 检查合并
                if (newRow > 0 && grid[newRow - 1, col] == value && !merged[newRow - 1])
                {
                    newRow--;
                    grid[newRow, col] *= 2;
                    score += grid[newRow, col];
                    merged[newRow] = true;
                    
                    // 检查是否达到2048
                    if (grid[newRow, col] == 2048 && !hasWon)
                    {
                        hasWon = true;
                        ShowWin();
                    }

                    // 创建合并动画
                    var (mergeX, mergeY) = GetTilePosition(newRow, col);
                    mergeAnimations.Add(new MergeAnimation
                    {
                        X = mergeX,
                        Y = mergeY,
                        Value = grid[newRow, col]
                    });

                    // 创建合并粒子效果
                    CreateMergeParticles(mergeX + TILE_SIZE / 2, mergeY + TILE_SIZE / 2, grid[newRow, col]);
                }
                else
                {
                    grid[newRow, col] = value;
                }

                if (newRow != row)
                {
                    grid[row, col] = 0;
                    moved = true;

                    // 创建移动动画
                    var (fromX, fromY) = GetTilePosition(row, col);
                    var (toX, toY) = GetTilePosition(newRow, col);
                    animations.Add(new TileAnimation
                    {
                        Value = value,
                        FromX = fromX,
                        FromY = fromY,
                        ToX = toX,
                        ToY = toY
                    });
                }
            }
        }

        if (moved)
        {
            isAnimating = true;
            
            // 使用定时器而不是异步延迟，确保可靠性
            delayedActionTimer = 0.3f;
            delayedAction = () => {
                AddRandomTile();
                CheckGameOver();
                UpdateUI();
            };
        }
    }

    private void MoveDown()
    {
        if (isAnimating) return;
        SaveGameState();
        
        var moved = false;
        animations.Clear();
        mergeAnimations.Clear();

        for (var col = 0; col < GRID_SIZE; col++)
        {
            var merged = new bool[GRID_SIZE];
            
            for (var row = GRID_SIZE - 2; row >= 0; row--)
            {
                if (grid[row, col] == 0) continue;

                var newRow = row;
                var value = grid[row, col];

                while (newRow < GRID_SIZE - 1 && grid[newRow + 1, col] == 0)
                {
                    newRow++;
                }

                if (newRow < GRID_SIZE - 1 && grid[newRow + 1, col] == value && !merged[newRow + 1])
                {
                    newRow++;
                    grid[newRow, col] *= 2;
                    score += grid[newRow, col];
                    merged[newRow] = true;
                    
                    if (grid[newRow, col] == 2048 && !hasWon)
                    {
                        hasWon = true;
                        ShowWin();
                    }

                    var (mergeX, mergeY) = GetTilePosition(newRow, col);
                    mergeAnimations.Add(new MergeAnimation
                    {
                        X = mergeX,
                        Y = mergeY,
                        Value = grid[newRow, col]
                    });

                    CreateMergeParticles(mergeX + TILE_SIZE / 2, mergeY + TILE_SIZE / 2, grid[newRow, col]);
                }
                else
                {
                    grid[newRow, col] = value;
                }

                if (newRow != row)
                {
                    grid[row, col] = 0;
                    moved = true;

                    var (fromX, fromY) = GetTilePosition(row, col);
                    var (toX, toY) = GetTilePosition(newRow, col);
                    animations.Add(new TileAnimation
                    {
                        Value = value,
                        FromX = fromX,
                        FromY = fromY,
                        ToX = toX,
                        ToY = toY
                    });
                }
            }
        }

        if (moved)
        {
            isAnimating = true;
            
            // 使用定时器而不是异步延迟，确保可靠性
            delayedActionTimer = 0.3f;
            delayedAction = () => {
                AddRandomTile();
                CheckGameOver();
                UpdateUI();
            };
            
        }
    }

    private void MoveLeft()
    {
        if (isAnimating) return;
        SaveGameState();
        
        var moved = false;
        animations.Clear();
        mergeAnimations.Clear();

        for (var row = 0; row < GRID_SIZE; row++)
        {
            var merged = new bool[GRID_SIZE];
            
            for (var col = 1; col < GRID_SIZE; col++)
            {
                if (grid[row, col] == 0) continue;

                var newCol = col;
                var value = grid[row, col];

                while (newCol > 0 && grid[row, newCol - 1] == 0)
                {
                    newCol--;
                }

                if (newCol > 0 && grid[row, newCol - 1] == value && !merged[newCol - 1])
                {
                    newCol--;
                    grid[row, newCol] *= 2;
                    score += grid[row, newCol];
                    merged[newCol] = true;
                    
                    if (grid[row, newCol] == 2048 && !hasWon)
                    {
                        hasWon = true;
                        ShowWin();
                    }

                    var (mergeX, mergeY) = GetTilePosition(row, newCol);
                    mergeAnimations.Add(new MergeAnimation
                    {
                        X = mergeX,
                        Y = mergeY,
                        Value = grid[row, newCol]
                    });

                    CreateMergeParticles(mergeX + TILE_SIZE / 2, mergeY + TILE_SIZE / 2, grid[row, newCol]);
                }
                else
                {
                    grid[row, newCol] = value;
                }

                if (newCol != col)
                {
                    grid[row, col] = 0;
                    moved = true;

                    var (fromX, fromY) = GetTilePosition(row, col);
                    var (toX, toY) = GetTilePosition(row, newCol);
                    animations.Add(new TileAnimation
                    {
                        Value = value,
                        FromX = fromX,
                        FromY = fromY,
                        ToX = toX,
                        ToY = toY
                    });
                }
            }
        }

        if (moved)
        {
            isAnimating = true;
            
            // 使用定时器而不是异步延迟，确保可靠性
            delayedActionTimer = 0.3f;
            delayedAction = () => {
                AddRandomTile();
                CheckGameOver();
                UpdateUI();
            };
            
        }
    }

    private void MoveRight()
    {
        if (isAnimating) return;
        SaveGameState();
        
        var moved = false;
        animations.Clear();
        mergeAnimations.Clear();

        for (var row = 0; row < GRID_SIZE; row++)
        {
            var merged = new bool[GRID_SIZE];
            
            for (var col = GRID_SIZE - 2; col >= 0; col--)
            {
                if (grid[row, col] == 0) continue;

                var newCol = col;
                var value = grid[row, col];

                while (newCol < GRID_SIZE - 1 && grid[row, newCol + 1] == 0)
                {
                    newCol++;
                }

                if (newCol < GRID_SIZE - 1 && grid[row, newCol + 1] == value && !merged[newCol + 1])
                {
                    newCol++;
                    grid[row, newCol] *= 2;
                    score += grid[row, newCol];
                    merged[newCol] = true;
                    
                    if (grid[row, newCol] == 2048 && !hasWon)
                    {
                        hasWon = true;
                        ShowWin();
                    }

                    var (mergeX, mergeY) = GetTilePosition(row, newCol);
                    mergeAnimations.Add(new MergeAnimation
                    {
                        X = mergeX,
                        Y = mergeY,
                        Value = grid[row, newCol]
                    });

                    CreateMergeParticles(mergeX + TILE_SIZE / 2, mergeY + TILE_SIZE / 2, grid[row, newCol]);
                }
                else
                {
                    grid[row, newCol] = value;
                }

                if (newCol != col)
                {
                    grid[row, col] = 0;
                    moved = true;

                    var (fromX, fromY) = GetTilePosition(row, col);
                    var (toX, toY) = GetTilePosition(row, newCol);
                    animations.Add(new TileAnimation
                    {
                        Value = value,
                        FromX = fromX,
                        FromY = fromY,
                        ToX = toX,
                        ToY = toY
                    });
                }
            }
        }

        if (moved)
        {
            isAnimating = true;
            
            // 使用定时器而不是异步延迟，确保可靠性
            delayedActionTimer = 0.3f;
            delayedAction = () => {
                AddRandomTile();
                CheckGameOver();
                UpdateUI();
            };
            
        }
    }

    private void CheckGameOver()
    {
        // 检查是否有空格
        for (var i = 0; i < GRID_SIZE; i++)
        {
            for (var j = 0; j < GRID_SIZE; j++)
            {
                if (grid[i, j] == 0) return;
            }
        }

        // 检查是否可以合并
        for (var i = 0; i < GRID_SIZE; i++)
        {
            for (var j = 0; j < GRID_SIZE; j++)
            {
                var current = grid[i, j];
                if ((i > 0 && grid[i - 1, j] == current) ||
                    (i < GRID_SIZE - 1 && grid[i + 1, j] == current) ||
                    (j > 0 && grid[i, j - 1] == current) ||
                    (j < GRID_SIZE - 1 && grid[i, j + 1] == current))
                {
                    return;
                }
            }
        }

        // 游戏结束
        isGameOver = true;
        gameOverLabel!.Visible = true;
        Game.Logger.LogInformation("Game Over! Final score: {score}", score);
    }

    private void ShowWin()
    {
        winLabel!.Visible = true;
        
        // 3秒后自动隐藏胜利提示
        delayedActionTimer = 3f;
        delayedAction = () => {
            winLabel!.Visible = false;
        };
    }

    private void CreateSpawnParticles(float centerX, float centerY)
    {
        for (var i = 0; i < 8; i++)
        {
            var angle = i * 45f * (float)Math.PI / 180f;
            var speed = 50f + Random.Shared.NextSingle() * 30f;
            
            particles.Add(new Particle
            {
                X = centerX + (Random.Shared.NextSingle() - 0.5f) * 10f,
                Y = centerY + (Random.Shared.NextSingle() - 0.5f) * 10f,
                VelocityX = (float)Math.Cos(angle) * speed,
                VelocityY = (float)Math.Sin(angle) * speed,
                Life = 0.8f + Random.Shared.NextSingle() * 0.4f,
                MaxLife = 1.2f,
                Color = Color.FromArgb(255, 238, 228, 218),
                Size = 3f + Random.Shared.NextSingle() * 3f
            });
        }
    }

    private void CreateMergeParticles(float centerX, float centerY, int value)
    {
        var color = tileColors.ContainsKey(value) ? tileColors[value] : tileColors[2048];
        
        for (var i = 0; i < 12; i++)
        {
            var angle = i * 30f * (float)Math.PI / 180f;
            var speed = 80f + Random.Shared.NextSingle() * 40f;
            
            particles.Add(new Particle
            {
                X = centerX + (Random.Shared.NextSingle() - 0.5f) * 15f,
                Y = centerY + (Random.Shared.NextSingle() - 0.5f) * 15f,
                VelocityX = (float)Math.Cos(angle) * speed,
                VelocityY = (float)Math.Sin(angle) * speed,
                Life = 1.0f + Random.Shared.NextSingle() * 0.5f,
                MaxLife = 1.5f,
                Color = color,
                Size = 4f + Random.Shared.NextSingle() * 4f
            });
        }
    }

    private (float, float) GetTilePosition(int row, int col)
    {
        var x = gridStartX + col * (TILE_SIZE + TILE_PADDING);
        var y = gridStartY + row * (TILE_SIZE + TILE_PADDING);
        return (x, y);
    }

    private void DrawGame()
    {
        if (gameCanvas == null) return;

        gameCanvas.ResetState();
        DrawBackground();
        DrawGrid();
        DrawTiles();
        DrawAnimations();
        DrawParticles();
    }

    private void DrawBackground()
    {
        if (gameCanvas == null) return;
        
        // 背景已在Panel中设置，保持简洁
        // 如需要装饰元素可在这里添加
    }

    private void DrawGrid()
    {
        if (gameCanvas == null) return;
        
        // 绘制网格背景
        gameCanvas.FillPaint = new SolidPaint(Color.FromArgb(255, 187, 173, 160));
        var gridSize = GRID_SIZE * TILE_SIZE + (GRID_SIZE - 1) * TILE_PADDING;
        gameCanvas.FillRectangle(gridStartX - TILE_PADDING, gridStartY - TILE_PADDING, 
            gridSize + 2 * TILE_PADDING, gridSize + 2 * TILE_PADDING);

        // 绘制空格子
        gameCanvas.FillPaint = new SolidPaint(tileColors[0]);
        for (var i = 0; i < GRID_SIZE; i++)
        {
            for (var j = 0; j < GRID_SIZE; j++)
            {
                var (x, y) = GetTilePosition(i, j);
                gameCanvas.FillRectangle(x, y, TILE_SIZE, TILE_SIZE);
            }
        }
    }

    private void DrawTiles()
    {
        if (gameCanvas == null) return;

        for (var i = 0; i < GRID_SIZE; i++)
        {
            for (var j = 0; j < GRID_SIZE; j++)
            {
                var value = grid[i, j];
                if (value == 0) continue;

                var (x, y) = GetTilePosition(i, j);
                DrawTile(x, y, value, 1f);
            }
        }
    }

    private void DrawAnimations()
    {
        if (gameCanvas == null) return;

        // 绘制移动动画
        foreach (var anim in animations)
        {
            // 使用缓动函数使动画更流畅
            var easedProgress = EaseOutCubic(anim.Progress);
            var x = anim.FromX + (anim.ToX - anim.FromX) * easedProgress;
            var y = anim.FromY + (anim.ToY - anim.FromY) * easedProgress;
            
            DrawTile(x, y, anim.Value, 1f);
        }

        // 绘制合并动画
        foreach (var anim in mergeAnimations)
        {
            DrawTile(anim.X, anim.Y, anim.Value, anim.Scale);
        }
    }

    private void DrawTile(float x, float y, int value, float scale)
    {
        if (gameCanvas == null) return;

        gameCanvas.SaveState();

        // 应用缩放变换
        if (scale != 1f)
        {
            var centerX = x + TILE_SIZE / 2;
            var centerY = y + TILE_SIZE / 2;
            gameCanvas.Translate(centerX, centerY);
            gameCanvas.Scale(scale, scale);
            gameCanvas.Translate(-TILE_SIZE / 2, -TILE_SIZE / 2);
        }
        else
        {
            gameCanvas.Translate(x, y);
        }

        // 获取颜色
        var bgColor = tileColors.ContainsKey(value) ? tileColors[value] : tileColors[2048];
        var textColor = textColors.ContainsKey(value) ? textColors[value] : textColors[2048];

        // 绘制方块阴影
        gameCanvas.FillPaint = new SolidPaint(Color.FromArgb(50, 0, 0, 0));
        gameCanvas.FillRectangle(2, 2, TILE_SIZE, TILE_SIZE);

        // 绘制方块背景
        gameCanvas.FillPaint = new SolidPaint(bgColor);
        gameCanvas.FillRectangle(0, 0, TILE_SIZE, TILE_SIZE);

        // 绘制渐变效果（使方块更立体）
        var gradientColor = Color.FromArgb(30, 255, 255, 255);
        gameCanvas.FillPaint = new LinearGradientPaint(
            new PointF(0, 0), new PointF(0, TILE_SIZE / 2),
            gradientColor, Color.Transparent);
        gameCanvas.FillRectangle(0, 0, TILE_SIZE, TILE_SIZE / 2);

        // 绘制数字 - 使用简单的矩形表示（真实项目中应使用文本渲染）
        var fontSize = GetFontSize(value);
        var textWidth = GetTextWidth(value, fontSize);
        var textHeight = fontSize;
        
        var textX = (TILE_SIZE - textWidth) / 2;
        var textY = (TILE_SIZE - textHeight) / 2;
        
        gameCanvas.FillPaint = new SolidPaint(textColor);
        
        // 绘制数字的简化表示 - 用填充矩形表示数字
        DrawNumber(value, textX, textY, fontSize);

        gameCanvas.RestoreState();
    }

    private void DrawNumber(int number, float x, float y, float size)
    {
        if (gameCanvas == null) return;

        // 简化的数字绘制 - 用几何形状表示
        var digitWidth = size * 0.6f;
        var digitHeight = size;
        
        var digits = number.ToString();
        var totalWidth = digits.Length * digitWidth + (digits.Length - 1) * (digitWidth * 0.2f);
        var startX = x + (TILE_SIZE * 0.6f - totalWidth) / 2;
        
        for (var i = 0; i < digits.Length; i++)
        {
            var digit = int.Parse(digits[i].ToString());
            var digitX = startX + i * (digitWidth + digitWidth * 0.2f);
            
            // 用简单的矩形组合表示数字
            DrawDigit(digit, digitX, y, digitWidth * 0.8f, digitHeight * 0.8f);
        }
    }

    private void DrawDigit(int digit, float x, float y, float width, float height)
    {
        if (gameCanvas == null) return;

        var segmentThickness = Math.Max(2f, width * 0.15f);
        
        // 完整的7段数码管显示
        switch (digit)
        {
            case 0:
                DrawHorizontalSegment(x, y, width, segmentThickness); // 顶部
                DrawVerticalSegment(x, y, height / 2, segmentThickness); // 左上
                DrawVerticalSegment(x + width - segmentThickness, y, height / 2, segmentThickness); // 右上
                DrawVerticalSegment(x, y + height / 2, height / 2, segmentThickness); // 左下
                DrawVerticalSegment(x + width - segmentThickness, y + height / 2, height / 2, segmentThickness); // 右下
                DrawHorizontalSegment(x, y + height - segmentThickness, width, segmentThickness); // 底部
                break;
            case 1:
                DrawVerticalSegment(x + width - segmentThickness, y, height / 2, segmentThickness); // 右上
                DrawVerticalSegment(x + width - segmentThickness, y + height / 2, height / 2, segmentThickness); // 右下
                break;
            case 2:
                DrawHorizontalSegment(x, y, width, segmentThickness); // 顶部
                DrawVerticalSegment(x + width - segmentThickness, y, height / 2, segmentThickness); // 右上
                DrawHorizontalSegment(x, y + height / 2 - segmentThickness / 2, width, segmentThickness); // 中间
                DrawVerticalSegment(x, y + height / 2, height / 2, segmentThickness); // 左下
                DrawHorizontalSegment(x, y + height - segmentThickness, width, segmentThickness); // 底部
                break;
            case 3:
                DrawHorizontalSegment(x, y, width, segmentThickness); // 顶部
                DrawVerticalSegment(x + width - segmentThickness, y, height / 2, segmentThickness); // 右上
                DrawHorizontalSegment(x, y + height / 2 - segmentThickness / 2, width, segmentThickness); // 中间
                DrawVerticalSegment(x + width - segmentThickness, y + height / 2, height / 2, segmentThickness); // 右下
                DrawHorizontalSegment(x, y + height - segmentThickness, width, segmentThickness); // 底部
                break;
            case 4:
                DrawVerticalSegment(x, y, height / 2, segmentThickness); // 左上
                DrawVerticalSegment(x + width - segmentThickness, y, height / 2, segmentThickness); // 右上
                DrawHorizontalSegment(x, y + height / 2 - segmentThickness / 2, width, segmentThickness); // 中间
                DrawVerticalSegment(x + width - segmentThickness, y + height / 2, height / 2, segmentThickness); // 右下
                break;
            case 5:
                DrawHorizontalSegment(x, y, width, segmentThickness); // 顶部
                DrawVerticalSegment(x, y, height / 2, segmentThickness); // 左上
                DrawHorizontalSegment(x, y + height / 2 - segmentThickness / 2, width, segmentThickness); // 中间
                DrawVerticalSegment(x + width - segmentThickness, y + height / 2, height / 2, segmentThickness); // 右下
                DrawHorizontalSegment(x, y + height - segmentThickness, width, segmentThickness); // 底部
                break;
            case 6:
                DrawHorizontalSegment(x, y, width, segmentThickness); // 顶部
                DrawVerticalSegment(x, y, height / 2, segmentThickness); // 左上
                DrawHorizontalSegment(x, y + height / 2 - segmentThickness / 2, width, segmentThickness); // 中间
                DrawVerticalSegment(x, y + height / 2, height / 2, segmentThickness); // 左下
                DrawVerticalSegment(x + width - segmentThickness, y + height / 2, height / 2, segmentThickness); // 右下
                DrawHorizontalSegment(x, y + height - segmentThickness, width, segmentThickness); // 底部
                break;
            case 7:
                DrawHorizontalSegment(x, y, width, segmentThickness); // 顶部
                DrawVerticalSegment(x + width - segmentThickness, y, height / 2, segmentThickness); // 右上
                DrawVerticalSegment(x + width - segmentThickness, y + height / 2, height / 2, segmentThickness); // 右下
                break;
            case 8:
                DrawHorizontalSegment(x, y, width, segmentThickness); // 顶部
                DrawVerticalSegment(x, y, height / 2, segmentThickness); // 左上
                DrawVerticalSegment(x + width - segmentThickness, y, height / 2, segmentThickness); // 右上
                DrawHorizontalSegment(x, y + height / 2 - segmentThickness / 2, width, segmentThickness); // 中间
                DrawVerticalSegment(x, y + height / 2, height / 2, segmentThickness); // 左下
                DrawVerticalSegment(x + width - segmentThickness, y + height / 2, height / 2, segmentThickness); // 右下
                DrawHorizontalSegment(x, y + height - segmentThickness, width, segmentThickness); // 底部
                break;
            case 9:
                DrawHorizontalSegment(x, y, width, segmentThickness); // 顶部
                DrawVerticalSegment(x, y, height / 2, segmentThickness); // 左上
                DrawVerticalSegment(x + width - segmentThickness, y, height / 2, segmentThickness); // 右上
                DrawHorizontalSegment(x, y + height / 2 - segmentThickness / 2, width, segmentThickness); // 中间
                DrawVerticalSegment(x + width - segmentThickness, y + height / 2, height / 2, segmentThickness); // 右下
                DrawHorizontalSegment(x, y + height - segmentThickness, width, segmentThickness); // 底部
                break;
            default:
                // 简化显示，用填充矩形
                gameCanvas.FillRectangle(x + width * 0.1f, y + height * 0.1f, width * 0.8f, height * 0.8f);
                break;
        }
    }

    private void DrawHorizontalSegment(float x, float y, float width, float thickness)
    {
        if (gameCanvas == null) return;
        gameCanvas.FillRectangle(x, y, width, thickness);
    }

    private void DrawVerticalSegment(float x, float y, float height, float thickness)
    {
        if (gameCanvas == null) return;
        gameCanvas.FillRectangle(x, y, thickness, height);
    }

    private void DrawParticles()
    {
        if (gameCanvas == null) return;
        
        foreach (var particle in particles)
        {
            var alpha = (byte)(255 * (particle.Life / particle.MaxLife));
            var color = Color.FromArgb(alpha, particle.Color.R, particle.Color.G, particle.Color.B);
            
            gameCanvas.FillPaint = new SolidPaint(color);
            gameCanvas.FillCircle(particle.X, particle.Y, particle.Size * (particle.Life / particle.MaxLife));
        }
    }

    private float EaseOutCubic(float t)
    {
        return 1f - (float)Math.Pow(1 - t, 3);
    }

    private float GetFontSize(int value)
    {
        return value switch
        {
            <= 64 => 36f,
            <= 512 => 32f,
            <= 2048 => 28f,
            _ => 24f
        };
    }

    private float GetTextWidth(int value, float fontSize)
    {
        var digits = value.ToString().Length;
        return digits * fontSize * 0.6f;
    }

    private void UpdateUI()
    {
        scoreLabel!.Text = score.ToString();
        
        if (score > bestScore)
        {
            bestScore = score;
            bestScoreLabel!.Text = bestScore.ToString();
        }
    }

    private void OnNewGameClicked(object? sender, PointerEventArgs e)
    {
        StartNewGame();
    }

    private void OnUndoClicked(object? sender, PointerEventArgs e)
    {
        UndoMove();
    }
    
    private void EmergencyReset()
    {
        Game.Logger.LogWarning("EMERGENCY RESET - Clearing all animations and states");
        
        // 强制清除所有动画
        animations.Clear();
        mergeAnimations.Clear();
        particles.Clear();
        
        // 重置所有状态
        isAnimating = false;
        animationTimeoutCounter = 0f;
        delayedActionTimer = 0f;
        delayedAction = null;
        
        // 键盘触发器已通过实例字段防止GC回收
        
        // 确保思考器激活
        (this as IThinker).DoesThink = true;
        
        Game.Logger.LogInformation("Emergency reset completed - Game should be responsive now");
    }
}

#pragma warning restore CS1998
#else
namespace GameEntry.Game2048;

public class Game2048 : IGameClass
{
    public static void OnRegisterGameClass()
    {
        Game.Logger.LogWarning("2048 game is only available in CLIENT configuration");
    }
}
#endif