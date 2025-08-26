#if CLIENT
using Events;
using GameCore.BaseInterface;
using GameCore.Event;
using GameCore.PlayerAndUsers;
using GameCore.ProtocolClientTransient;
using GameCore.Shape.Data;
using GameUI.Brush;
using GameUI.Control;
using GameUI.Control.Enum;
using GameUI.Control.Primitive;
using GameUI.Control.Struct;
using GameUI.Device;
using GameUI.Enum;
using GameUI.Struct;
using Microsoft.Extensions.Logging;
using System.Drawing;
using System.Numerics;

namespace GameEntry.PrimitiveShapeTest;

/// <summary>
/// 基本形状测试游戏模式的客户端UI实现
/// 显示形状测试状态、进度和实时信息
/// </summary>
internal class PrimitiveShapeTestClient : IGameClass
{
    #region Fields

    private static Trigger<EventGameStart>? gameStartTrigger;
    private static Panel? mainDashboard;
    private static Label? titleLabel;
    private static Label? statusLabel;
    private static Label? unitsCountLabel;
    private static Label? themeLabel;
    private static Label? currentSelectionLabel;
    private static Label? logLabel;

    // 控制按钮
    private static Button? createShapeButton;
    private static Button? createCompositeButton;
    private static Button? createAllShapesButton;
    private static Button? createScenarioButton;
    private static Button? performanceTestButton;
    private static Button? clearAllButton;

    // 选择控制按钮
    private static Button? nextShapeButton;
    private static Button? nextThemeButton;
    private static Button? nextScenarioButton;
    private static Button? scaleUpButton;
    private static Button? scaleDownButton;

    // 状态信息和当前选择
    private static ShapeTestStatusInfo currentStatus;
    private static readonly Queue<string> logMessages = new();
    private static readonly int maxLogMessages = 20;
    private static int currentShapeIndex = 0;
    private static int currentThemeIndex = 0;
    private static int currentScenarioIndex = 0;
    private static float currentScale = 1.0f;
    private static readonly PrimitiveShape[] allShapes = System.Enum.GetValues<PrimitiveShape>();
    private static readonly ShapeColorTheme[] allThemes = System.Enum.GetValues<ShapeColorTheme>();
    private static readonly ShapeTestScenario[] allScenarios = System.Enum.GetValues<ShapeTestScenario>();

    #endregion

    #region IGameClass Implementation

    public static void OnRegisterGameClass()
    {
        Game.OnGameTriggerInitialization += OnGameTriggerInitialization;
        Game.OnGameUIInitialization += OnGameUIInitialization;
        Game.Logger.LogInformation("🎯 Primitive Shape Test Client registered");
    }

    #endregion

    #region Initialization

    private static void OnGameUIInitialization()
    {
        if (Game.GameModeLink != ScopeData.GameMode.PrimitiveShapeTest)
        {
            return;
        }
    }

    private static void OnGameTriggerInitialization()
    {
        if (Game.GameModeLink != ScopeData.GameMode.PrimitiveShapeTest)
        {
            return;
        }

        gameStartTrigger = new Trigger<EventGameStart>(OnGameStartAsync, true);
        gameStartTrigger.Register(Game.Instance);
        Game.Logger.LogInformation("🎯 Primitive Shape Test client triggers initialized");
    }

    private static async Task<bool> OnGameStartAsync(object sender, EventGameStart eventArgs)
    {
        Game.Logger.LogInformation("🎯 Primitive Shape Test Client UI Started!");

        CreateMainUI();
        Game.Logger.LogInformation("🎯 Primitive Shape Test Client UI initialized");
        return true;
    }

    #endregion

    #region UI Creation

    private static void CreateMainUI()
    {
        try
        {
            // 创建主面板
            mainDashboard = new Panel()
            {
                Width = 480,
                Height = AutoMode.Auto,
                HorizontalAlignment = HorizontalAlignment.Right,
                VerticalAlignment = VerticalAlignment.Top,
                Margin = new Thickness(0, 20, 20, 0),
                Background = new SolidColorBrush(Color.FromArgb(200, 0, 0, 0)),
                CornerRadius = 12,
                Padding = new Thickness(16, 16, 16, 16),
                FlowOrientation = Orientation.Vertical,
                VerticalContentAlignment = VerticalContentAlignment.Top
            };

            // 创建标题
            titleLabel = new Label()
            {
                Text = "🎯 Primitive Shape Test Dashboard",
                FontSize = 18,
                TextColor = new SolidColorBrush(Color.FromArgb(255, 0, 200, 255)),
                Width = AutoMode.Auto,
                Height = AutoMode.Auto,
                HorizontalContentAlignment = HorizontalContentAlignment.Center,
                VerticalContentAlignment = VerticalContentAlignment.Center,
                Margin = new Thickness(0, 0, 0, 12),
                Parent = mainDashboard
            };

            // 创建状态面板
            var statusPanel = new Panel()
            {
                Width = AutoMode.Auto,
                Height = AutoMode.Auto,
                Background = new SolidColorBrush(Color.FromArgb(80, 255, 255, 255)),
                CornerRadius = 8,
                Padding = new Thickness(12, 8, 12, 8),
                Margin = new Thickness(0, 0, 0, 8),
                FlowOrientation = Orientation.Vertical,
                VerticalContentAlignment = VerticalContentAlignment.Top,
                Parent = mainDashboard
            };

            // 状态标签
            statusLabel = new Label()
            {
                Text = "📊 Status: Ready",
                FontSize = 14,
                TextColor = new SolidColorBrush(Color.White),
                Width = AutoMode.Auto,
                Height = AutoMode.Auto,
                HorizontalContentAlignment = HorizontalContentAlignment.Left,
                VerticalContentAlignment = VerticalContentAlignment.Center,
                Margin = new Thickness(0, 0, 0, 4),
                Parent = statusPanel
            };

            // 单位数量标签
            unitsCountLabel = new Label()
            {
                Text = "🔢 Units: 0",
                FontSize = 14,
                TextColor = new SolidColorBrush(Color.FromArgb(255, 255, 215, 0)),
                Width = AutoMode.Auto,
                Height = AutoMode.Auto,
                HorizontalContentAlignment = HorizontalContentAlignment.Left,
                VerticalContentAlignment = VerticalContentAlignment.Center,
                Margin = new Thickness(0, 0, 0, 4),
                Parent = statusPanel
            };

            // 主题标签
            themeLabel = new Label()
            {
                Text = "🎨 Theme: Standard",
                FontSize = 14,
                TextColor = new SolidColorBrush(Color.FromArgb(255, 144, 238, 144)),
                Width = AutoMode.Auto,
                Height = AutoMode.Auto,
                HorizontalContentAlignment = HorizontalContentAlignment.Left,
                VerticalContentAlignment = VerticalContentAlignment.Center,
                Parent = statusPanel
            };

            // 当前选择标签
            currentSelectionLabel = new Label()
            {
                Text = $"🎯 Shape: {allShapes[currentShapeIndex]} | Theme: {allThemes[currentThemeIndex]} | Scale: {currentScale:F1}",
                FontSize = 13,
                TextColor = new SolidColorBrush(Color.FromArgb(255, 255, 182, 193)),
                Width = AutoMode.Auto,
                Height = AutoMode.Auto,
                HorizontalContentAlignment = HorizontalContentAlignment.Left,
                VerticalContentAlignment = VerticalContentAlignment.Center,
                Margin = new Thickness(0, 8, 0, 0),
                Parent = statusPanel
            };

            // 创建控制面板
            CreateControlButtons();

            // 创建日志面板
            CreateLogPanel();

            // 添加主面板到UI根
            UIRoot.Instance.AddChild(mainDashboard);

            // 定期更新UI
            _ = UpdateUILoop();

            Game.Logger.LogInformation("✅ Primitive Shape Test UI created successfully");
        }
        catch (Exception ex)
        {
            Game.Logger.LogError(ex, "❌ Failed to create main UI");
        }
    }

    private static void CreateControlButtons()
    {
        // 创建控制面板
        var controlPanel = new Panel()
        {
            Width = AutoMode.Auto,
            Height = AutoMode.Auto,
            Background = new SolidColorBrush(Color.FromArgb(100, 0, 0, 0)),
            CornerRadius = 8,
            Padding = new Thickness(12, 10, 12, 10),
            Margin = new Thickness(0, 0, 0, 8),
            FlowOrientation = Orientation.Vertical,
            VerticalContentAlignment = VerticalContentAlignment.Top,
            Parent = mainDashboard
        };

        // 选择控制行
        var selectionRow = new Panel()
        {
            Width = AutoMode.Auto,
            Height = AutoMode.Auto,
            FlowOrientation = Orientation.Horizontal,
            HorizontalContentAlignment = HorizontalContentAlignment.UniformSpacing,
            Margin = new Thickness(0, 0, 0, 8),
            Parent = controlPanel
        };

        // 形状选择按钮
        nextShapeButton = CreateButton("🔄 Shape", selectionRow, OnNextShapeClick);
        nextThemeButton = CreateButton("🎨 Theme", selectionRow, OnNextThemeClick);
        scaleUpButton = CreateButton("🔍 Scale+", selectionRow, OnScaleUpClick);
        scaleDownButton = CreateButton("🔎 Scale-", selectionRow, OnScaleDownClick);

        // 第一行按钮 - 创建功能
        var firstRow = new Panel()
        {
            Width = AutoMode.Auto,
            Height = AutoMode.Auto,
            FlowOrientation = Orientation.Horizontal,
            HorizontalContentAlignment = HorizontalContentAlignment.UniformSpacing,
            Margin = new Thickness(0, 0, 0, 8),
            Parent = controlPanel
        };

        createShapeButton = CreateButton("🎯 Create Shape", firstRow, OnCreateShapeClick);
        createCompositeButton = CreateButton("🤖 Composite", firstRow, OnCreateCompositeClick);

        // 第二行按钮 - 场景功能
        var secondRow = new Panel()
        {
            Width = AutoMode.Auto,
            Height = AutoMode.Auto,
            FlowOrientation = Orientation.Horizontal,
            HorizontalContentAlignment = HorizontalContentAlignment.UniformSpacing,
            Margin = new Thickness(0, 0, 0, 8),
            Parent = controlPanel
        };

        createAllShapesButton = CreateButton("🌟 All Shapes", secondRow, OnCreateAllShapesClick);
        createScenarioButton = CreateButton("🎬 Scenario", secondRow, OnCreateScenarioClick);

        // 第三行按钮 - 测试和工具
        var thirdRow = new Panel()
        {
            Width = AutoMode.Auto,
            Height = AutoMode.Auto,
            FlowOrientation = Orientation.Horizontal,
            HorizontalContentAlignment = HorizontalContentAlignment.UniformSpacing,
            Parent = controlPanel
        };

        performanceTestButton = CreateButton("⚡ Performance", thirdRow, OnPerformanceTestClick);
        clearAllButton = CreateButton("🗑️ Clear All", thirdRow, OnClearAllClick);
    }

    private static Button CreateButton(string text, Panel parent, EventHandler<PointerEventArgs> clickHandler)
    {
        var button = new Button()
        {
            Width = 100,
            Height = 32,
            Background = new SolidColorBrush(Color.FromArgb(180, 70, 130, 180)),
            CornerRadius = 6,
            Margin = new Thickness(2, 0, 2, 0),
            Parent = parent
        };

        var label = new Label()
        {
            Text = text,
            FontSize = 11,
            TextColor = new SolidColorBrush(Color.White),
            HorizontalAlignment = HorizontalAlignment.Stretch,
            VerticalAlignment = VerticalAlignment.Stretch,
            HorizontalContentAlignment = HorizontalContentAlignment.Center,
            VerticalContentAlignment = VerticalContentAlignment.Center,
            Parent = button
        };

        button.OnPointerClicked += clickHandler;
        return button;
    }

    private static void CreateLogPanel()
    {
        // 创建日志面板
        var logPanel = new Panel()
        {
            Width = AutoMode.Auto,
            Height = 150,
            Background = new SolidColorBrush(Color.FromArgb(120, 0, 0, 0)),
            CornerRadius = 8,
            Padding = new Thickness(8, 8, 8, 8),
            Parent = mainDashboard
        };

        // 日志标题
        var logTitle = new Label()
        {
            Text = "📝 Test Log",
            FontSize = 13,
            TextColor = new SolidColorBrush(Color.FromArgb(255, 255, 255, 255)),
            Width = AutoMode.Auto,
            Height = AutoMode.Auto,
            HorizontalContentAlignment = HorizontalContentAlignment.Left,
            VerticalContentAlignment = VerticalContentAlignment.Center,
            Margin = new Thickness(0, 0, 0, 8),
            Parent = logPanel
        };

        // 日志内容
        logLabel = new Label()
        {
            Text = "🎯 Primitive Shape Test System Ready",
            FontSize = 11,
            TextColor = new SolidColorBrush(Color.FromArgb(255, 220, 220, 220)),
            Width = AutoMode.Auto,
            Height = AutoMode.Auto,
            HorizontalContentAlignment = HorizontalContentAlignment.Left,
            VerticalContentAlignment = VerticalContentAlignment.Top,
            Parent = logPanel
        };
    }

    #endregion

    #region Event Handlers

    private static void OnNextShapeClick(object sender, PointerEventArgs e)
    {
        currentShapeIndex = (currentShapeIndex + 1) % allShapes.Length;
        UpdateCurrentSelectionLabel();
        AddLogMessage($"Selected shape: {allShapes[currentShapeIndex]}");
    }

    private static void OnNextThemeClick(object sender, PointerEventArgs e)
    {
        currentThemeIndex = (currentThemeIndex + 1) % allThemes.Length;
        UpdateCurrentSelectionLabel();
        AddLogMessage($"Selected theme: {allThemes[currentThemeIndex]}");
    }

    private static void OnScaleUpClick(object sender, PointerEventArgs e)
    {
        currentScale = Math.Min(3.0f, currentScale + 0.2f);
        UpdateCurrentSelectionLabel();
        AddLogMessage($"Scale increased to: {currentScale:F1}");
    }

    private static void OnScaleDownClick(object sender, PointerEventArgs e)
    {
        currentScale = Math.Max(0.2f, currentScale - 0.2f);
        UpdateCurrentSelectionLabel();
        AddLogMessage($"Scale decreased to: {currentScale:F1}");
    }

    private static void OnCreateShapeClick(object sender, PointerEventArgs e)
    {
        try
        {
            var command = new ProtoShapeTestCommand
            {
                CommandType = ShapeTestCommandType.CreateSingleShape,
                TargetShape = allShapes[currentShapeIndex],
                ColorTheme = allThemes[currentThemeIndex],
                Position = GetRandomTestPosition(),
                Scale = new Vector3(currentScale, currentScale, currentScale)
            };

            bool success = command.SendToServer();
            if (success)
            {
                AddLogMessage($"Creating {allShapes[currentShapeIndex]} with {allThemes[currentThemeIndex]} theme");
            }
            else
            {
                AddLogMessage("❌ Failed to send create shape command");
            }
        }
        catch (Exception ex)
        {
            AddLogMessage($"Error creating shape: {ex.Message}");
        }
    }

    private static void OnCreateCompositeClick(object sender, PointerEventArgs e)
    {
        try
        {
            var command = new ProtoShapeTestCommand
            {
                CommandType = ShapeTestCommandType.CreateCompositeShape,
                Position = GetRandomTestPosition()
            };

            bool success = command.SendToServer();
            if (success)
            {
                AddLogMessage("Creating composite robot shape");
            }
            else
            {
                AddLogMessage("❌ Failed to send create composite command");
            }
        }
        catch (Exception ex)
        {
            AddLogMessage($"Error creating composite: {ex.Message}");
        }
    }

    private static void OnCreateAllShapesClick(object sender, PointerEventArgs e)
    {
        try
        {
            var command = new ProtoShapeTestCommand
            {
                CommandType = ShapeTestCommandType.CreateAllShapes,
                ColorTheme = allThemes[currentThemeIndex]
            };

            bool success = command.SendToServer();
            if (success)
            {
                AddLogMessage($"Creating all shapes with {allThemes[currentThemeIndex]} theme");
            }
            else
            {
                AddLogMessage("❌ Failed to send create all shapes command");
            }
        }
        catch (Exception ex)
        {
            AddLogMessage($"Error creating all shapes: {ex.Message}");
        }
    }

    private static void OnCreateScenarioClick(object sender, PointerEventArgs e)
    {
        try
        {
            currentScenarioIndex = (currentScenarioIndex + 1) % allScenarios.Length;
            var scenario = allScenarios[currentScenarioIndex];

            var command = new ProtoShapeTestCommand
            {
                CommandType = ShapeTestCommandType.CreateScenario,
                TargetScenario = scenario
            };

            bool success = command.SendToServer();
            if (success)
            {
                AddLogMessage($"Creating {scenario} scenario");
            }
            else
            {
                AddLogMessage("❌ Failed to send create scenario command");
            }
        }
        catch (Exception ex)
        {
            AddLogMessage($"Error creating scenario: {ex.Message}");
        }
    }

    private static void OnPerformanceTestClick(object sender, PointerEventArgs e)
    {
        try
        {
            var command = new ProtoShapeTestCommand
            {
                CommandType = ShapeTestCommandType.TestPerformance
            };

            bool success = command.SendToServer();
            if (success)
            {
                AddLogMessage("Starting performance test...");
            }
            else
            {
                AddLogMessage("❌ Failed to send performance test command");
            }
        }
        catch (Exception ex)
        {
            AddLogMessage($"Error starting performance test: {ex.Message}");
        }
    }

    private static void OnClearAllClick(object sender, PointerEventArgs e)
    {
        try
        {
            var command = new ProtoShapeTestCommand
            {
                CommandType = ShapeTestCommandType.ClearAllUnits
            };

            bool success = command.SendToServer();
            if (success)
            {
                AddLogMessage("Clearing all test units");
            }
            else
            {
                AddLogMessage("❌ Failed to send clear all command");
            }
        }
        catch (Exception ex)
        {
            AddLogMessage($"Error clearing units: {ex.Message}");
        }
    }

    #endregion

    #region Protocol Handlers

    public static void UpdateStatus(ShapeTestStatusInfo statusInfo)
    {
        try
        {
            currentStatus = statusInfo;
            
            if (statusLabel != null)
                statusLabel.Text = $"📊 Status: {(statusInfo.IsPerformanceTestRunning ? "Performance Testing" : "Ready")}";
            
            if (unitsCountLabel != null)
                unitsCountLabel.Text = $"🔢 Units: {statusInfo.CurrentActiveUnits} (Total: {statusInfo.TotalUnitsCreated})";
            
            if (themeLabel != null)
                themeLabel.Text = $"🎨 Theme: {statusInfo.CurrentTheme}";

            Game.Logger.LogDebug("📊 Updated shape test status from server");
        }
        catch (Exception ex)
        {
            Game.Logger.LogError(ex, "❌ Error updating status from server");
        }
    }

    public static void OnTestComplete(TestType testType, bool success, int unitsCreated, double elapsedTime)
    {
        try
        {
            var status = success ? "✅" : "❌";
            var message = $"{status} {testType}: Created {unitsCreated} units in {elapsedTime:F2}s";
            AddLogMessage(message);
            
            Game.Logger.LogInformation("Test completed: {testType}, Success: {success}, Units: {unitsCreated}, Time: {elapsedTime:F2}s", 
                testType, success, unitsCreated, elapsedTime);
        }
        catch (Exception ex)
        {
            Game.Logger.LogError(ex, "❌ Error handling test complete");
        }
    }

    #endregion

    #region Helper Methods

    private static void UpdateCurrentSelectionLabel()
    {
        if (currentSelectionLabel != null)
        {
            currentSelectionLabel.Text = $"🎯 Shape: {allShapes[currentShapeIndex]} | Theme: {allThemes[currentThemeIndex]} | Scale: {currentScale:F1}";
        }
    }

    private static void AddLogMessage(string message)
    {
        try
        {
            logMessages.Enqueue($"[{DateTime.Now:HH:mm:ss}] {message}");
            while (logMessages.Count > maxLogMessages)
            {
                logMessages.Dequeue();
            }

            if (logLabel != null)
            {
                logLabel.Text = string.Join("\n", logMessages.Reverse());
            }
        }
        catch (Exception ex)
        {
            Game.Logger.LogError(ex, "❌ Error adding log message");
        }
    }

    private static Vector3 GetRandomTestPosition()
    {
        var random = new Random();
        var x = random.Next(6000, 10000);
        var y = random.Next(6000, 10000);
        return new Vector3(x, y, 0);
    }

    private static async Task UpdateUILoop()
    {
        while (true)
        {
            try
            {
                await Game.Delay(TimeSpan.FromSeconds(1));
                // 定期更新UI状态
            }
            catch (Exception ex)
            {
                Game.Logger.LogError(ex, "❌ Error in UI update loop");
                break;
            }
        }
    }

    #endregion
}
#endif
