using EngineInterface.BaseType;

using GameCore.AbilitySystem.Data;
using GameCore.SceneSystem;
using GameCore.AbilitySystem.Data.Enum;
using GameCore.ActorSystem.Data;
using GameCore.AISystem.Data;
using GameCore.AISystem.Data.Enum;

using GameUI.CameraSystem.Data;

using GameCore.Container;
using GameCore.Container.Data;
using GameCore.CooldownSystem.Data;
using GameCore.Data;
using GameCore.EntitySystem.Data.Enum;
using GameCore.Execution.Data;
using GameCore.GameSystem.Data;
using GameCore.PlayerAndUsers.Enum;
using GameCore.ResourceType.Data;
using GameCore.ResourceType.Data.Enum;
using GameCore.SceneSystem.Data;
using GameCore.SceneSystem.Data.Struct;

using GameData;

using GameCore.TargetingSystem.Data;
using GameCore.ActorSystem.Data.Enum;
using GameCore.Animation.Enum;

using GameUI.Brush;
using GameUI.Control.Data;
using GameUI.Control.Enum;
#if CLIENT
using GameUI.Control.Primitive;
#endif
using GameUI.Enum;

using System.Drawing;
using System.Numerics; // 添加Vector2支持

using static GameCore.ScopeData;
using GameEntry.TypedMessageTest;
using GameCore.ModelAnimation.Data;
using GameCore;
using GameCore.AbilitySystem.Manager;
using GameCore.EntitySystem;
using GameCore.OrderSystem;

namespace GameEntry;
public class ScopeData : IGameClass
{
    public static class Control
    {
        public static readonly GameLink<GameDataControl, GameDataControlButton> TestButton = new("TestButton");
        public static readonly GameLink<GameDataControl, GameDataControlButton> TestButton2 = new("TestButton2");
    }

    public static class GameMode
    {
        public static readonly GameLink<GameDataGameMode, GameDataGameMode> VampireSurvivors3D = new("VampireSurvivors3D"u8);
        public static readonly GameLink<GameDataGameMode, GameDataGameMode> VampireSurvivors2D = new("VampireSurvivors2D"u8);
        public static readonly GameLink<GameDataGameMode, GameDataGameMode> FlappyBird = new("FlappyBird"u8);
        public static readonly GameLink<GameDataGameMode, GameDataGameMode> JoyStickTest = new("JoyStickTest"u8);
        public static readonly GameLink<GameDataGameMode, GameDataGameMode> TypedMessageTest = new("TypedMessageTest"u8);
        public static readonly GameLink<GameDataGameMode, GameDataGameMode> Gomoku = new("Gomoku"u8);
        public static readonly GameLink<GameDataGameMode, GameDataGameMode> UserCloudDataTest = new("UserCloudDataTest"u8);
        public static readonly GameLink<GameDataGameMode, GameDataGameMode> AISystemTest = new("AISystemTest"u8);
        public static readonly GameLink<GameDataGameMode, GameDataGameMode> PrimitiveShapeTest = new("PrimitiveShapeTest"u8);
        public static readonly GameLink<GameDataGameMode, GameDataGameMode> ModernUITest = new("ModernUITest"u8);
        public static readonly GameLink<GameDataGameMode, GameDataGameMode> Game2048 = new("Game2048"u8);
    }

    public static class Animation
    {
        public static readonly GameLink<GameDataAnimation, GameDataAnimationSimple> Idle = new("Idle"u8);
        public static readonly GameLink<GameDataAnimation, GameDataAnimationSimple> Move = new("Move"u8);
        public static readonly GameLink<GameDataAnimation, GameDataAnimationSimple> Attack = new("Attack"u8);
        public static readonly GameLink<GameDataAnimation, GameDataAnimationSimple> Death = new("Death"u8);
        public static readonly GameLink<GameDataAnimation, GameDataAnimationSimple> TestSpell = new("TestSpell"u8);
    }

    public static class Camera
    {
        public static readonly GameLink<GameDataCamera, GameDataCamera> DefaultCamera = new("DefaultCamera"u8);
    }
    public static class Unit
    {
        public static readonly GameLink<GameDataUnit, GameDataUnit> HostTestHero = new("HostTestHero"u8);
        public static readonly GameLink<GameDataUnit, GameDataUnit> AICombatTestHero = new("AICombatTestHero"u8);
        public static readonly GameLink<GameDataUnit, GameDataUnit> TestItem = new("TestItem"u8);
        public static readonly GameLink<GameDataUnit, GameDataUnit> TestMissileUnit = new("TestMissileUnit"u8);
    }

    public static class Actor
    {
        public static readonly GameLink<GameDataActor, GameDataActorModel> TestActorModel = new("TestActorModel"u8);
        public static readonly GameLink<GameDataActor, GameDataActorParticle> TestActorParticle = new("$TestParticle"u8);
        public static readonly GameLink<GameDataActor, GameDataActorModel> TestActorModelScript = new("TestActorModelScript"u8);
        public static readonly GameLink<GameDataActor, GameDataActorAdditionModel> TestActorAdditionModel = new("TestActorAdditionModel"u8);
        public static readonly GameLink<GameDataActor, GameDataActorParticle> RangeActor = new("RangeActor"u8);
        public static readonly GameLink<GameDataActor, GameDataActorParticle> AOEActor = new("AOEActor"u8);
        public static readonly GameLink<GameDataActor, GameDataActorSegmentedRectangle> LineSegment = new("LineSegment"u8);
        public static readonly GameLink<GameDataActor, GameDataActorParticle> LineLaunchActor = new("LineLaunchActor"u8);
        public static readonly GameLink<GameDataActor, GameDataActorParticle> LineCenterActor = new("LineCenterActor"u8);
        public static readonly GameLink<GameDataActor, GameDataActorParticle> LineImpactActor = new("LineImpactActor"u8);

        public static readonly GameLink<GameDataActor, GameDataActorParticle> PreTargetingCircle = new("PreTargetingCircle"u8);
        public static readonly GameLink<GameDataActor, GameDataActorHighlight> PreTargetingHighlight = new("PreTargetingHighlight"u8);

    }

    public static class Scene
    {
        public static readonly GameLink<GameDataScene, GameDataScene> DefaultScene = new("default"u8);
        public static readonly GameLink<GameDataScene, GameDataScene> AITestScene = new("ai_test_scene"u8);
        public static readonly GameLink<GameDataScene, GameDataScene> PrimitiveShapeTestScene = new("primitive_shape_test_scene"u8);
    }

    public static class Model
    {
        public static readonly GameLink<GameDataModel, GameDataModel> TestModelScript = new("TestActorModelScript"u8);
        public static readonly GameLink<GameDataModel, GameDataModel> TestActorAdditionModel = new("TestActorAdditionModel"u8);
        public static readonly GameLink<GameDataModel, GameDataModel> HostTestHero = new("HostTestHero"u8);
        public static readonly GameLink<GameDataModel, GameDataModel> TestItem = new("TestItem"u8);
    }
    public static class Particle
    {
        public static readonly GameLink<GameDataParticle, GameDataParticle> RangeParticle = new("RangeParticle"u8);
        public static readonly GameLink<GameDataParticle, GameDataParticle> AOEParticle = new("AOEParticle"u8);
        public static readonly GameLink<GameDataParticle, GameDataParticle> TestParticleScript = new("TestParticleScript"u8);
        public static readonly GameLink<GameDataParticle, GameDataParticle> LineLaunchParticle = new("LineLaunchParticle"u8);
        public static readonly GameLink<GameDataParticle, GameDataParticle> LineCenterParticle = new("LineCenterParticle"u8);
        public static readonly GameLink<GameDataParticle, GameDataParticle> LineImpactParticle = new("LineImpactParticle"u8);
        public static readonly GameLink<GameDataParticle, GameDataParticle> PreTargetingCircle = new("PreTargetingCircle"u8);

    }
    public static class Ability
    {
        public static readonly GameLink<GameDataAbility, GameDataAbilityExecute> TestSpell = new("TestSpell"u8);
        public static readonly GameLink<GameDataAbility, GameDataAbilityExecute> ChargedTestSpell = new("ChargedTestSpell"u8);
    }
    public static class Item
    {
        public static readonly GameLink<GameDataItem, GameDataItemMod> TestItem = new("TestItem"u8);
    }
    public static class Inventory
    {
        public static readonly GameLink<GameDataInventory, GameDataInventory> TestInventory6 = new("TestInventory6"u8);
        public static readonly GameLink<GameDataInventory, GameDataInventory> TestInventory6Equip = new("TestInventory6Equip"u8);
    }
    public static class TargetingIndicator
    {
        public static readonly GameLink<GameDataTargetingIndicator, GameDataTargetingIndicator> TestTargetingIndicator = new("TestTargetingIndicator"u8);
    }

    public static class AI
    {
        public static readonly GameLink<GameDataAIThinkTree, GameDataAIThinkTree> CombatTest = new("CombatTest"u8);
    }

    public static void OnRegisterGameClass()
    {
        Game.OnGameDataInitialization += OnGameDataInitialization;
    }

    private static void OnGameDataInitialization()
    {
        Game.Logger.LogInformation("Initializing Game Data...");
        _ = new GameDataUnitProperty(UnitProperty.LifeMax)
        {
            Name = "Life Max",
        };
        _ = new GameDataCamera(Camera.DefaultCamera)
        {
            Name = "Default Camera",
            TargetZOffset = 10,
            Rotation = new(-90, -70, 0),
            TargetX = 2500,
            TargetY = 2500,
            FollowMainUnitByDefault = true,
            DisplayDebugInfo = true,
        };
        _ = new GameDataScene(Scene.DefaultScene)
        {
            DefaultCamera = Camera.DefaultCamera,
            Name = "Default Scene",
            HostedSceneTag = "default"u8,
            Size = new(16 * 256, 16 * 256),
            OnLoaded = static (scene) => Game.Logger.LogInformation("Scene {scene} loaded", scene),
            PlacedPlayerObjects = new()
            {
                {
                    1, new PlacedUnit()
                    {
                        Link = Unit.HostTestHero,
                        OwnerPlayerId = 1,
                        Position = new(3500,3000,0),
                        IsMainUnit = true,
                        TriggerGetter = true,
                        UniqueId = 1,
                    }
                },
                {
                    2, new PlacedUnit()
                    {
                        Link = Unit.HostTestHero,
                        OwnerPlayerId = 3,
                        Position = new(3000,3500,0),
                        IsMainUnit = true,
                        TriggerGetter = true,
                        UniqueId = 2,
                        Facing = -90,
                    }
                },
                {
                    3, new PlacedItem()
                    {
                        Link = Item.TestItem,
                        Position = new(3500,3500,0),
                        TriggerGetter = true,
                        UniqueId = 3,
                    }
                }
            }
        };
        _ = new GameDataScene(Scene.AITestScene)
        {
            DefaultCamera = Camera.DefaultCamera,
            Name = "AI System Test Scene",
            HostedSceneTag = "new_scene_1"u8,
            Size = new(64 * 256, 64 * 256),  // Large test area: 16384 x 16384 units
            OnLoaded = static (scene) => Game.Logger.LogInformation("AI Test Scene {scene} loaded", scene),
            PlacedPlayerObjects = new()
            {
                {
                    1, new PlacedUnit()
                    {
                        Link = Unit.HostTestHero,
                        OwnerPlayerId = 1,
                        Position = new(8000, 8000, 0),  // Center player in the large map
                        IsMainUnit = true,
                        TriggerGetter = true,
                        UniqueId = 1,
                    }
                },
                // AI Test target units spread across the large map
                {
                    10, new PlacedUnit()
                    {
                        Link = Unit.HostTestHero,
                        OwnerPlayerId = 2,
                        Position = new(10000, 10000, 0),  // Target 1 - Northeast
                        TriggerGetter = true,
                        UniqueId = 10,
                    }
                },
                {
                    11, new PlacedUnit()
                    {
                        Link = Unit.HostTestHero,
                        OwnerPlayerId = 2,
                        Position = new(6000, 10000, 0),   // Target 2 - Northwest
                        TriggerGetter = true,
                        UniqueId = 11,
                    }
                },
                {
                    12, new PlacedUnit()
                    {
                        Link = Unit.HostTestHero,
                        OwnerPlayerId = 2,
                        Position = new(10000, 6000, 0),   // Target 3 - Southeast
                        TriggerGetter = true,
                        UniqueId = 12,
                    }
                },
                {
                    13, new PlacedUnit()
                    {
                        Link = Unit.HostTestHero,
                        OwnerPlayerId = 2,
                        Position = new(6000, 6000, 0),    // Target 4 - Southwest
                        TriggerGetter = true,
                        UniqueId = 13,
                    }
                }
            }
        };
        
        // 基本形状测试场景 - 复用AITestScene的素材但有独立的逻辑空间
        _ = new GameDataScene(Scene.PrimitiveShapeTestScene)
        {
            DefaultCamera = Camera.DefaultCamera,
            Name = "Primitive Shape Test Scene",
            HostedSceneTag = "new_scene_1"u8,
            // FIXME: 共享AITestScene的素材无法正常生效。
            // HostedSceneTag = new HostedSceneTag("primitive_shape_test_scene"u8, "new_scene_1"u8), // 复用AITest的素材
            Size = new(64 * 256, 64 * 256),  // 与AITestScene相同的大地图
            OnLoaded = static (scene) => Game.Logger.LogInformation("🎯 Primitive Shape Test Scene {scene} loaded", scene),
            PlacedPlayerObjects = new()
            {
                // 测试用主单位，放在地图中央
                {
                    1, new PlacedUnit()
                    {
                        Link = Unit.HostTestHero,
                        OwnerPlayerId = 1,
                        Position = new(8000, 8000, 0),  // 地图中心位置
                        IsMainUnit = true,
                        TriggerGetter = true,
                        UniqueId = 1,
                    }
                },
                // 预设一些测试位置的单位
                {
                    20, new PlacedUnit()
                    {
                        Link = Unit.HostTestHero,
                        OwnerPlayerId = 2,
                        Position = new(9000, 8000, 0),  // 东侧测试位置
                        TriggerGetter = true,
                        UniqueId = 20,
                    }
                },
                {
                    21, new PlacedUnit()
                    {
                        Link = Unit.HostTestHero,
                        OwnerPlayerId = 2,
                        Position = new(7000, 8000, 0),  // 西侧测试位置
                        TriggerGetter = true,
                        UniqueId = 21,
                    }
                },
                {
                    22, new PlacedUnit()
                    {
                        Link = Unit.HostTestHero,
                        OwnerPlayerId = 2,
                        Position = new(8000, 9000, 0),  // 北侧测试位置
                        TriggerGetter = true,
                        UniqueId = 22,
                    }
                },
                {
                    23, new PlacedUnit()
                    {
                        Link = Unit.HostTestHero,
                        OwnerPlayerId = 2,
                        Position = new(8000, 7000, 0),  // 南侧测试位置
                        TriggerGetter = true,
                        UniqueId = 23,
                    }
                }
            }
        };
        
        _ = new GameDataInventory(Inventory.TestInventory6)
        {
            Slots = [
                new (),
                new (),
                new (),
                new (),
                new (),
                new (),
                ]
        };
        _ = new GameDataInventory(Inventory.TestInventory6Equip)
        {
            InventoryFlags = new()
            {
                HandlePickUpRequest = false
            },
            Slots = [
                new (){
                    Type=ItemSlotType.Equip
                },
                new (){
                    Type=ItemSlotType.Equip
                },
                new (){
                    Type=ItemSlotType.Equip
                },
                new (){
                    Type=ItemSlotType.Equip
                },
                new (){
                    Type=ItemSlotType.Equip
                },
                new (){
                    Type=ItemSlotType.Equip
                },
                ]
        };
        _ = new GameDataActorModel(Actor.TestActorModel)
        {
        };
        _ = new GameDataActorModel(Actor.TestActorModelScript)
        {
            Model = Model.TestModelScript,
            Socket = "socket_root"u8,
        };
        _ = new GameDataModel(Model.TestModelScript)
        {
            Radius = 50,
            Asset = "characters/palu_hx/sk_daershu/model.prefab"u8,
        };
        _ = new GameDataActorSite(GameCore.ScopeData.Actor.ScopeStaticSiteTransient)
        {
            ReleaseOnGC = true,
            AttachForwardOnce = true,
        };
        _ = new GameDataActorSite(GameCore.ScopeData.Actor.ScopeStaticSitePersist)
        {
        };
        _ = new GameDataGameMode(GameMode.FlappyBird)
        {
            Name = "Flappy Bird Mode",
            Gameplay = Gameplay.Default,
            PlayerSettings = PlayerSettings.Default,
            SceneList = [
                ],
        };
        _ = new GameDataGameMode(GameMode.VampireSurvivors3D)
        {
            Name = "Vampire 3D Mode",
            Gameplay = Gameplay.Default,
            PlayerSettings = PlayerSettings.Default,
            SceneList = [
                Scene.DefaultScene,
                ExtraScopeDataVampire3D.Scene.VampireScene
            ],
            DefaultScene = ExtraScopeDataVampire3D.Scene.VampireScene,
        };
        _ = new GameDataGameMode(GameMode.VampireSurvivors2D)
        {
            Name = "Vampire 2D Mode",
            Gameplay = Gameplay.Default,
            PlayerSettings = PlayerSettings.Default,
            SceneList = [
            ],
        };
        _ = new GameDataGameMode(GameMode.JoyStickTest)
        {
            Name = "JoyStick Test Mode",
            Gameplay = Gameplay.Default,
            PlayerSettings = PlayerSettings.Default,
            SceneList = [
                Scene.DefaultScene,
                ],
            DefaultScene = Scene.DefaultScene,
        };
        _ = new GameDataGameMode(GameMode.TypedMessageTest)
        {
            Name = "TypedMessage Test Mode",
            Gameplay = Gameplay.Default,
            PlayerSettings = PlayerSettings.Default,
            SceneList = [
                Scene.DefaultScene,
                ],
            DefaultScene = Scene.DefaultScene,
        };
        _ = new GameDataGameMode(GameMode.Gomoku)
        {
            Name = "Gomoku Game Mode",
            Gameplay = Gameplay.Default,
            PlayerSettings = PlayerSettings.Default,
            SceneList = [
                Scene.DefaultScene,
                ],
            DefaultScene = Scene.DefaultScene,
        };
        _ = new GameDataGameMode(GameMode.UserCloudDataTest)
        {
            Name = "UserCloudData Test Mode",
            Gameplay = Gameplay.Default,
            PlayerSettings = PlayerSettings.Default,
            SceneList = [
                Scene.DefaultScene,
                ],
            DefaultScene = Scene.DefaultScene,
        };
        _ = new GameDataGameMode(GameMode.AISystemTest)
        {
            Name = "AI System Test Mode",
            Gameplay = Gameplay.Default,
            PlayerSettings = PlayerSettings.Default,
            SceneList = [
                Scene.AITestScene,
                ],
            DefaultScene = Scene.AITestScene,
        };
        _ = new GameDataGameMode(GameMode.PrimitiveShapeTest)
        {
            Name = "Primitive Shape Test Mode",
            Gameplay = Gameplay.Default,
            PlayerSettings = PlayerSettings.Default,
            SceneList = [
                Scene.PrimitiveShapeTestScene,
                ],
            DefaultScene = Scene.PrimitiveShapeTestScene,
        };
        _ = new GameDataGameMode(GameMode.ModernUITest)
        {
            Name = "Modern UI Test Mode",
            Gameplay = Gameplay.Default,
            PlayerSettings = PlayerSettings.Default,
            SceneList = [
                ],
        };
        _ = new GameDataGameMode(GameMode.Game2048)
        {
            Name = "2048 Game Mode",
            Gameplay = Gameplay.Default,
            PlayerSettings = PlayerSettings.Default,
            SceneList = [
                ],
        };
        _ = new GameDataGameMode(GameCore.ScopeData.GameMode.Default)
        {
            Name = "Default Mode",
            Gameplay = Gameplay.Default,
            PlayerSettings = PlayerSettings.Default,
            SceneList = [
                Scene.DefaultScene,
            ],
            DefaultScene = Scene.DefaultScene,
        };
        var defaultWaveAI = new GameLink<GameDataWaveAI, GameDataWaveAI>("default"u8);
        _ = new GameDataWaveAI(defaultWaveAI)
        {
            // ⚔️ 战斗配置 - 启用AI战斗功能
            EnableCombat = true,
            
            // 🔍 扫描和攻击范围配置
            MinimalScanRange = 500f,
            MaximalScanRange = 1000f,
            MinimalApproachRange = 200f,
            
            // 🏃‍♂️ 牵引和撤退配置
            CombatLeash = 1500f,
            CombatResetRange = 1800f,
            
            // ⏱️ 战斗持续时间
            InCombatMinimalDuration = TimeSpan.FromSeconds(2),
            
            // 🌊 群体AI配置
            EnableWaveFormation = false, // 个体战斗不需要编队
            EnableLinkedAggro = true,    // 启用连锁仇恨
            
            // 🔄 AI生命周期
            AutoDisposeOnEmpty = true,
            
            // 📍 默认行为类型
            Type = WaveType.Guard,
        };

        // 数编数据作为控件模板的样例
        _ = new GameDataControlButton(Control.TestButton)
        {
            Background = new SolidColorBrush(Color.AliceBlue),
            Layout = new()
            {
                Width = 500,
                Height = 90,
                // 位于左上角
                HorizontalAlignment = HorizontalAlignment.Center,
                VerticalAlignment = VerticalAlignment.Center,
            },
            // 按特定屏幕旋转改变属性
            OverrideByOrientation = new()
            {
                {   
                    // 竖直时将宽高互换
                    DisplayOrientations.Portrait, new GameDataControlButton(new GameLink<GameDataControl, GameDataControlButton>("TestButtonOverrideByOrientation1"))
                    {
                        Layout = new()
                        {
                            Width = 250,
                            Height = 300,
                        },
                    }.Link
                },
            },
            Children =
            [
                // 按钮有一个默认Label子控件
                new GameDataControlLabel(new("TestButtonLabel"))
                {
                    Text = "模板创建的按钮",
                    TextColor = Color.Green,
                    FontSize = 24,
                    Bold = true,
#if CLIENT
                    OnPostInitialization = static (c) =>
                    {
                        if (c is not Label label)
                        {
                            return;
                        }
                        label.Text = label.DataContext?.ToString();
                    },
#endif
                    // 按特定主题改变属性
                    OverrideByTheme = new()
                    {
                        {
                            // 符剑主题时显示符剑
                            Theme.FuJian, new GameDataControlLabel(new GameLink<GameDataControl, GameDataControlLabel>("TestButtonLabelOverrideByTheme1"))
                            {
                                Text = "符剑",
                            }.Link
                        },
                        {
                            // 回响主题时显示回响
                            Theme.ProjectEcho, new GameDataControlLabel(new GameLink<GameDataControl, GameDataControlLabel>("TestButtonLabelOverrideByTheme2"))
                            {
                                Text = "回响",
                            }.Link
                        }
                    }
                }.Link,
            ],
#if CLIENT
            OnVirtualizationPhase =
            [
                static (c) =>
                {
                    if (c.Children?[0] is Label label)
                    {
                        label.Text = "??";
                    }
                },
                static (c)=>
                {
                    if (c.Children?[0] is Label label)
                    {
                        label.Text = label.DataContext?.ToString();
                    }
                }
                ]
#endif
        };
        
        
        // 数编数据作为控件模板的样例2
        _ = new GameDataControlButton(Control.TestButton2)
        {
            Background = new SolidColorBrush(Color.OrangeRed),
            Layout = new()
            {
                Width = 500,
                Height = 90,
                // 位于左上角
                HorizontalAlignment = HorizontalAlignment.Center,
                VerticalAlignment = VerticalAlignment.Center,
            },
            Children =
            [
                // 按钮有一个默认Label子控件，内容与TestButton1的Label相同
                new GameLink<GameDataControl, GameDataControlLabel>("TestButtonLabel"),
            ],
#if CLIENT
            OnVirtualizationPhase =
            [
                static (c) =>
                {
                    if (c.Children?[0] is Label label)
                    {
                        label.Text = "??";
                    }
                },
                static (c)=>
                {
                    if (c.Children?[0] is Label label)
                    {
                        label.Text = label.DataContext?.ToString();
                    }
                }
                ]
#endif
        };
        _ = new GameDataGameplay(Gameplay.Default)
        {
            Name = "Default Gameplay",
            DefaultWaveAI = defaultWaveAI,
        };
        _ = new GameDataPlayerSettings(PlayerSettings.Default)
        {
            PlayerTeamData = [
                [
                    new() { Controller = ControllerType.Computer, Id = 0, IsNeutral = true }
                ],
                [
                    new() { Controller = ControllerType.User, Id = 1 },
                    new() { Controller = ControllerType.Computer, Id = 2 }
                ],
                [
                    new() { Controller = ControllerType.Computer, Id = 3 },
                    new() { Controller = ControllerType.Computer, Id = 4 }
                ],
                [
                    new() { Controller = ControllerType.User, Id = 5 },
                ],
            ]
        };
        var defaultCombatBehavior = new GameLink<GameDataAINode, GameDataAINodeSequence>("defaultCombatBehavior"u8);
        
        // 子节点1：扫描敌人节点
        var scanEnemies = new GameLink<GameDataAINode, GameDataAINodeValidateScan>("scanEnemies"u8);
        _ = new GameDataAINodeValidateScan(scanEnemies)
        {
            // 不忽略牵引限制
            IgnoreLeash = false,
        };
        
        // 子节点2：对扫描目标施法 - 直接使用ScanTargetThisTick，即 scanEnemies 的输出
        var castAtTarget = new GameLink<GameDataAINode, GameDataAINodeValidateCast>("castAtTarget"u8);
        _ = new GameDataAINodeValidateCast(castAtTarget)
        {
            DoRecast = true,
        };
        
        // 主行为树：简化的序列节点（扫描 -> 施法）
        _ = new GameDataAINodeSequence(defaultCombatBehavior)
        {
            // 🔧 简化的两步序列：扫描 -> 施法
            Nodes = [scanEnemies, castAtTarget],
        };
        // Default AI Definitions
        _ = new GameDataAIThinkTree(GameCore.ScopeData.AI.Default)
        {
            ScanFilters = [new() {
                Required=[UnitRelationship.Enemy, UnitFilter.Unit, UnitRelationship.Visible],
                Excluded=[UnitFilter.Item, UnitState.Invulnerable, UnitState.Dead]
            }],
            CombatBehaviorTree = defaultCombatBehavior,
        };
        
        // AI Combat Test Definitions - optimized for unit vs unit combat
        _ = new GameDataAIThinkTree(AI.CombatTest)
        {
            ScanFilters = [new() {
                Required=[UnitRelationship.Enemy, UnitFilter.Unit, UnitRelationship.Visible],
                Excluded=[UnitFilter.Item, UnitState.Invulnerable, UnitState.Dead]
            }],
            ScanSorts = [UnitFilter.Hero, UnitFilter.Unit], // Prioritize heroes, then units
            CombatBehaviorTree = defaultCombatBehavior,
        };

        _ = new GameDataActorAdditionModel(Actor.TestActorAdditionModel)
        {
            Model = Model.TestActorAdditionModel,
        };
        _ = new GameDataModel(Model.TestActorAdditionModel)
        {
            Radius = 50,
            Asset = "eqpt/weapon/sm_dr_sword_04_02/model.prefab"u8,
        };
        _ = new GameDataModel(Model.HostTestHero)
        {
            Radius = 50,
            Asset = "characters/general/sk_basic2/model.prefab"u8,
            ShadowSetting = new()
            {
                ShadowType = ShadowType.DeviceDependentShadow,
            },
            AnimationMappings = [
                new()
                {
                    AnimationRaw= "sword_idle"u8,
                    AnimationAlias= "idle"u8,
                },
                new()
                {
                    AnimationRaw= "sword_move"u8,
                    AnimationAlias= "move"u8,
                },
                ]
        };
        _ = new GameDataUnit(Unit.HostTestHero)
        {
            Name = "测试英雄",
            AttackableRadius = 50,
            Properties = new() {
                { UnitProperty.LifeMax, 1000 },
                { UnitProperty.ManaMax, 1000 },
                { UnitProperty.Armor, 10 },
                { UnitProperty.MagicResistance, 10 },
                { UnitProperty.MoveSpeed, 350 }, // 增加移动速度
                { UnitProperty.TurningSpeed, 1800 },
                { UnitProperty.AttackRange, 200 }, // 增加攻击范围
                { UnitProperty.InventoryPickUpRange, 300 }, // 增加拾取范围
            },
            UpdateFlags = new()
            {
                AllowMover = true,
                Turnable = true,
                Walkable = true,
            },
            VitalProperties = new()
            {
                { PropertyVital.Health, UnitProperty.LifeMax }
            },
            CollisionRadius = 32,
            DynamicCollisionMask = DynamicCollisionMask.Hero | DynamicCollisionMask.Building,
            Inventories = [Inventory.TestInventory6, Inventory.TestInventory6Equip],
            Filter = [UnitFilter.Hero, UnitFilter.Unit],
            DeathRemovalDelay = Timeout.InfiniteTimeSpan,
            ActorArray = [
                Actor.TestActorAdditionModel,
            ],
            StatusBarSetting = new()
            {
                DefaultStatusBar = "$$spark_core.bloodstrip.ALLY_HERO_NONE.root"u8,
                OverrideByRelationShip = new()
                {
                    { PlayerUnitRelationShip.Alliance, "$$spark_core.bloodstrip.ALLY_HERO_NONE.root"u8 },
                    { PlayerUnitRelationShip.Enemy, "$$spark_core.bloodstrip.ENEMY_HERO_NONE.root"u8 },
                    { PlayerUnitRelationShip.Neutral, "$$spark_core.bloodstrip.NEUTRAL_HERO_NONE.root"u8 },
                    { PlayerUnitRelationShip.MainUnit, "$$spark_core.bloodstrip.MAIN_HERO_NONE.root"u8 },
                },
            },
            Model = Model.HostTestHero,
            Abilities = [Ability.ChargedTestSpell], // 添加新的充能技能
        };
        
        // AI Combat Test Hero - 复制HostTestHero配置并添加TacticalAI
        _ = new GameDataUnit(Unit.AICombatTestHero)
        {
            Name = "AI战斗测试英雄",
            AttackableRadius = 50,
            Properties = new() {
                { UnitProperty.LifeMax, 1000 },
                { UnitProperty.ManaMax, 1000 },
                { UnitProperty.Armor, 10 },
                { UnitProperty.MagicResistance, 10 },
                { UnitProperty.MoveSpeed, 350 }, // 增加移动速度
                { UnitProperty.TurningSpeed, 1800 },
                { UnitProperty.AttackRange, 200 }, // 增加攻击范围
                { UnitProperty.InventoryPickUpRange, 300 }, // 增加拾取范围
            },
            UpdateFlags = new()
            {
                AllowMover = true,
                Turnable = true,
                Walkable = true,
            },
            VitalProperties = new()
            {
                { PropertyVital.Health, UnitProperty.LifeMax }
            },
            CollisionRadius = 32,
            DynamicCollisionMask = DynamicCollisionMask.Hero | DynamicCollisionMask.Building,
            Inventories = [Inventory.TestInventory6, Inventory.TestInventory6Equip],
            Filter = [UnitFilter.Hero, UnitFilter.Unit],
            DeathRemovalDelay = Timeout.InfiniteTimeSpan,
            ActorArray = [
                Actor.TestActorAdditionModel,
            ],
            StatusBarSetting = new()
            {
                DefaultStatusBar = "$$spark_core.bloodstrip.ALLY_HERO_NONE.root"u8,
                OverrideByRelationShip = new()
                {
                    { PlayerUnitRelationShip.Alliance, "$$spark_core.bloodstrip.ALLY_HERO_NONE.root"u8 },
                    { PlayerUnitRelationShip.Enemy, "$$spark_core.bloodstrip.ENEMY_HERO_NONE.root"u8 },
                    { PlayerUnitRelationShip.Neutral, "$$spark_core.bloodstrip.NEUTRAL_HERO_NONE.root"u8 },
                    { PlayerUnitRelationShip.MainUnit, "$$spark_core.bloodstrip.MAIN_HERO_NONE.root"u8 },
                },
            },
            Model = Model.HostTestHero,
            TacticalAI = AI.CombatTest, // 关键：添加TacticalAI配置
            Abilities = [Ability.TestSpell], // 关键：添加攻击技能
        };
        
        _ = new GameDataModel(Model.TestItem)
        {
            Radius = 50,
            Asset = "deco/handpaintedvol2_campsite/sm_backpack_01_base/model.prefab"u8,
        };

        _ = new GameDataUnit(Unit.TestItem)
        {
            Name = "测试物品单位",
            AttackableRadius = 60,
            Filter = [UnitFilter.Item],
            State = [UnitState.Invulnerable],
            CollisionRadius = 32,
            DynamicCollisionMask = DynamicCollisionMask.Item,
            Model = Model.TestItem,
        };


        _ = new GameDataItemMod(Item.TestItem)
        {
            Unit = Unit.TestItem,
            Modifications = new()
            {
                [ItemSlotType.Equip] = new()
                {
                    Modifications = [new(){
                        Property = UnitProperty.LifeMax,
                        Value = (_) => 100,
                        Random = 75,
                    }],
                    Ability = Ability.TestSpell,
                }
            },
            StackStart = 5,
            Level = 6,
            Quality = 7,
        };
        _ = new GameDataUnit(Unit.TestMissileUnit)
        {
            Name = "TestMissileUnit",
            Filter = [UnitFilter.Missile],
            State = [UnitState.Invulnerable],
            CollisionRadius = 32,
            AttackableRadius = 60,
            Particle = "effect/eff_tongyong/huoqiu2/particle.effect"u8,
            UpdateFlags = new()
            {
                AllowMover = true,
            },
        };
        var linkTestEffectDamage = new GameLink<GameDataEffect, GameDataEffectDamage>("TestEffectDamage"u8);
        _ = new GameDataEffectDamage(linkTestEffectDamage)
        {
            Amount = static (_) => 100,
            Type = DamageType.Physical,
            LogExecutionFailure = true,
        };
        var linkTestPrint = new GameLink<GameDataEffect, GameDataEffectLog>("TestEffectPrint"u8);
        _ = new GameDataEffectLog(linkTestPrint)
        {
            Message = static (e) => $"Found {e.Target}",
            LogExecutionFailure = true,
        };
        var linkTestSearch = new GameLink<GameDataEffect, GameDataEffectSearch>("TestEffectSearch"u8);
        _ = new GameDataEffectSearch(linkTestSearch)
        {
            SearchFilters = [new() { Excluded = [UnitState.Dead] }],
            Radius = static (_) => 1000,
            Effect = linkTestPrint,
            LogExecutionFailure = true,
        };
        var linkTestDelay = new GameLink<GameDataEffect, GameDataEffectPersistDelay>("TestEffectDelay"u8);
        _ = new GameDataEffectPersistDelay(linkTestDelay)
        {
            Amount = static (_) => TimeSpan.FromSeconds(1),
            CompleteEffect = linkTestSearch,
            LogExecutionFailure = true,
        };
        var linkImpactSet = new GameLink<GameDataEffect, GameDataEffectSet>("ImpactSet"u8);
        _ = new GameDataEffectSet(linkImpactSet)
        {
            Effects = [
                new() { Link= linkTestEffectDamage },
                new() { Link= linkTestDelay }
                ],
            SetFlags = new() { PreferUnique = true },
            LogExecutionFailure = true,
        };
        _ = new GameDataParticle(Particle.TestParticleScript)
        {
            Asset = "effect/eff_tongyong/huoqiu_blast/particle.effect"u8,
            Radius = 128
        };
        _ = new GameDataActorParticle(Actor.TestActorParticle)
        {
            AutoPlay = true,
            Particle = Particle.TestParticleScript,
            KillOnFinish = true,
            ForceOneShot = true,
        };
        var linkTestEffectLaunchMissile = new GameLink<GameDataEffect, GameDataEffectLaunchMissile>("TestEffectLaunchMissile"u8);
        _ = new GameDataEffectLaunchMissile(linkTestEffectLaunchMissile)
        {
            Method = GameCore.Struct.EffectLaunchMissileMethod.CreateMissile,
            Missile = Unit.TestMissileUnit,
            DoImpactEntity = true,
            DoStaticCollision = true,
            ImpactMaxCount = static (_) => 1,
            ImpactSearchRadius = static (_) => 20,
            Speed = static (_) => 1250,
            ImpactEffect = linkImpactSet,
            CompleteEffect = linkTestDelay,
            ImpactSearchFilter = [
                new() {
                    Required = [UnitRelationship.Enemy],
                    Excluded = [UnitState.Dead]
                }
                ],
            LogExecutionFailure = true,
            ImpactActors = [Actor.TestActorParticle],
            LaunchHeight = (_) => 110
        };
        _ = new GameDataAnimationSimple(Animation.Idle)
        {
            Name = "Idle Animation",
            File = "idle"u8,
            IsLooping = true,
        };
        _ = new GameDataAnimationSimple(Animation.Move)
        {
            Name = "Move Animation",
            File = "move"u8,
            IsLooping = true,
        };
        _ = new GameDataAnimationSimple(Animation.Attack)
        {
            Name = "Attack Animation",
            File = "attack"u8,
            IsLooping = false,
        };
        _ = new GameDataAnimationSimple(Animation.Death)
        {
            Name = "Death Animation",
            File = "death"u8,
            IsLooping = false,
        };
        _ = new GameDataAnimationSimple(Animation.TestSpell)
        {
            Name = "Test Spell Animation",
            File = "anim/human/barehanded_anim/hand_05/skill_025.ani"u8,
            IsLooping = false,
        };
        var cooldownLink = new GameLink<GameDataCooldown, GameDataCooldownActive>("TestSpell"u8);
        _ = new GameDataCooldownActive(cooldownLink)
        {
            Time = static (_) => TimeSpan.FromSeconds(0.6),
        };
        _ = new GameDataAbilityExecute(Ability.TestSpell)
        {
            Time = new()
            {
                Preswing = static (_) => TimeSpan.FromSeconds(0.391),
                Channel = static (_) => TimeSpan.FromSeconds(0.148),
                Backswing = static (_) => TimeSpan.FromSeconds(0.395),
            },
            Cost = new()
            {
                Cooldown = cooldownLink
            },
            AbilityActiveFlags = new() { AllowEnqueueInCooldown = true },
            AbilityExecuteFlags = new() { }, // 🔧 移除IsAttack标记，测试缺省扫描范围
            Effect = linkTestEffectLaunchMissile,
            TargetType = AbilityTargetType.Vector,
            Range = static (_) => 800,
            AcquireSettings = new()
            {
                TargetingFilters = [new()
                { 
                    // UnitRelationship.Visible 通常不需要在Required中指定，用户请求的指令必定会检测目标可见性。若在Required中指定，则代表即使是脚本调用的指令也需要检测目标可见性。
                    Required = [UnitRelationship.Enemy],
                    Excluded = [UnitState.Dead, UnitState.Invulnerable]
                }],
            },
            TargetingIndicatorInfo = new()
            {
                TargetingIndicator = TargetingIndicator.TestTargetingIndicator,
                CursorRadius = static (_) => 256,
                VectorLineWidth = static (_) => 128,
                VectorHighlightLimit = static (_) => 1
            },
            LogExecutionFailure = true,
            Animation = [Animation.TestSpell],
        };

        // ChargedTestSpell: 2秒冷却 + 10秒充能时间，最大充能数为2的技能
        var chargedSpellCooldownLink = new GameLink<GameDataCooldown, GameDataCooldownActive>("ChargedTestSpellCooldown"u8);
        _ = new GameDataCooldownActive(chargedSpellCooldownLink)
        {
            Time = static (_) => TimeSpan.FromSeconds(2),
        };
        var chargedSpellChargeLink = new GameLink<GameDataCooldown, GameDataCooldownCharge>("ChargedTestSpellCharge"u8);
        _ = new GameDataCooldownCharge(chargedSpellChargeLink)
        {
            Time = static (_) => TimeSpan.FromSeconds(10),
            ChargeMax = static (_) => 2,
            ChargeStart = static (_) => 0,
        };
        _ = new GameDataAbilityExecute(Ability.ChargedTestSpell)
        {
            Time = new()
            {
                Preswing = static (_) => TimeSpan.FromSeconds(0.3),
                Backswing = static (_) => TimeSpan.FromSeconds(0.5),
            },
            Cost = new()
            {
                Cooldown = chargedSpellCooldownLink,
                Charge = chargedSpellChargeLink
            },
            AbilityActiveFlags = new() { AllowEnqueueInCooldown = true },
            AbilityExecuteFlags = new() { },
            Effect = linkTestEffectLaunchMissile,
            TargetType = AbilityTargetType.Vector,
            Range = static (_) => 600,
            AcquireSettings = new()
            {
                TargetingFilters = [new()
                { 
                    Required = [UnitRelationship.Enemy],
                    Excluded = [UnitState.Dead, UnitState.Invulnerable]
                }],
            },
            TargetingIndicatorInfo = new()
            {
                TargetingIndicator = TargetingIndicator.TestTargetingIndicator,
                CursorRadius = static (_) => 256,
                VectorLineWidth = static (_) => 128,
                VectorHighlightLimit = static (_) => 1
            },
            LogExecutionFailure = true,
            Animation = [Animation.TestSpell],
        };

        _ = new GameDataTargetingIndicator(TargetingIndicator.TestTargetingIndicator)
        {
            CursorActors = [Actor.AOEActor],
            RangeActors = [Actor.RangeActor],
            VectorLineActors = [Actor.LineSegment],
            PreTargetingHighlightActors = [
                Actor.PreTargetingHighlight,
                ],
            Flags = new()
            {
                // DebugDraw = true
            },
        };
        _ = new GameDataActorParticle(Actor.RangeActor)
        {
            Particle = Particle.RangeParticle,
        };
        _ = new GameDataActorParticle(Actor.AOEActor)
        {
            Particle = Particle.AOEParticle,
        };
        _ = new GameDataActorParticle(Actor.LineLaunchActor)
        {
            Particle = Particle.LineLaunchParticle,
        };
        _ = new GameDataActorParticle(Actor.LineCenterActor)
        {
            Particle = Particle.LineCenterParticle,
        };
        _ = new GameDataActorParticle(Actor.LineImpactActor)
        {
            Particle = Particle.LineImpactParticle,
        };
        _ = new GameDataActorParticle(Actor.PreTargetingCircle)
        {
            Particle = Particle.PreTargetingCircle,
            InheritRotation = false,
        };
        _ = new GameDataParticle(Particle.RangeParticle)
        {
            Asset = "effect/effect_new/effect_zhishiqi/eff_zhishiqi/ps_yuanxing_1/particle.effect"u8,
            Radius = 70,
        };
        _ = new GameDataParticle(Particle.PreTargetingCircle)
        {
            Asset = "effect/effect_new/effect_guanghuan/eff_boss_guanghuan/particle.effect"u8,
            AssetLayerScale = 0.4f,
            Radius = 51.2f,
        };
        _ = new GameDataParticle(Particle.AOEParticle)
        {
            Asset = "effect/effect_new/effect_zhishiqi/eff_zhishiqi/ps_jineng_1/particle.effect"u8,
            Radius = 66,
        };
        _ = new GameDataParticle(Particle.LineLaunchParticle)
        {
            Asset = "effect/effect_new/effect_zhishiqi/eff_juxing/ps_wei_1/particle.effect"u8,
            Volume = new(128, 64, 128),
        };
        _ = new GameDataParticle(Particle.LineCenterParticle)
        {
            Asset = "effect/effect_new/effect_zhishiqi/eff_juxing/ps_zhong_1/particle.effect"u8,
            Volume = new(128, 64, 128),
        };
        _ = new GameDataParticle(Particle.LineImpactParticle)
        {
            Asset = "effect/effect_new/effect_zhishiqi/eff_zhixianxing/ps_tou_1/particle.effect"u8,
            Volume = new(128, 64, 128),
        };
        _ = new GameDataActorSegmentedRectangle(Actor.LineSegment)
        {
            HeightTest = ActorSegmentedHeight.LaunchSiteGround,
            LaunchActor = Actor.LineLaunchActor,
            CenterActor = Actor.LineCenterActor,
            ImpactActor = Actor.LineImpactActor,
            SegmentedFlags = new()
            {
                // DebugDraw = true,
            }
        };
        _ = new GameDataActorHighlight(Actor.PreTargetingHighlight)
        {
            From = new()
            {
                Value = new(255, 192, 192)
            },
            To = new()
            {
                Value = new(255, 128, 128)
            },
            AutoReverse = true,
            RepeatBehavior = RepeatBehavior.Forever,
            Duration = TimeSpan.FromSeconds(0.15),
        };
    }
}