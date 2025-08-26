#if SERVER
using Events;

using GameCore.Components;
using GameCore.Container;
using GameCore.Event;
using GameCore.Interface;
using GameCore.OrderSystem;
using GameCore.SceneSystem;
using GameCore.Shape;
using GameCore.VitalSystem;

using GameData.Extension;

using System.Diagnostics;
using System.Numerics;

namespace GameEntry.NormalTest;

internal class TestTriggers : IGameClass
{
#pragma warning disable CS1998 // Async method lacks 'await' operators and will run synchronously
    public static void OnRegisterGameClass()
    {

        Game.OnGameTriggerInitialization += OnGameTriggerInitialization;
        Game.ForgetRunCaptureCallerStackTrace = true;
        EventAggregator.CaptureCallerStackTrace = true;
    }
    private static async Task<bool> GameStartAsync(object sender, EventGameStart eventArgs)
    {
        // 打日志的例子
        Game.Logger.Log(LogLevel.Warning, "Test Start!");
        Game.Logger.Log(LogLevel.Warning, "Scene string Hash C#: {Hash}", "default"u8.GetHashCode(true));
        // 获取场景的例子
        var scene = Scene.GetOrCreate(ScopeData.Scene.DefaultScene)!;
        Game.Logger.Log(LogLevel.Warning, "Scene Hash C#: {Hash}", scene.GetHashCode());
        Game.Logger.Log(LogLevel.Warning, "Scene Loaded State: {result}", scene.Loaded);
        RegionCircle regionCircle = new(new ScenePoint(3500, 3000, scene), radius: 100);
        Trigger<EventRegionEnter> triggerRegionEnter = new(async (s, d) =>
        {
            Game.Logger.Log(LogLevel.Warning, "RegionCircle: {regionCircle} enter, {unit}", d.Region, d.Unit);
            return true;
        }, true);
        triggerRegionEnter.Register(regionCircle);
        Trigger<EventRegionExit> triggerRegionExit = new(async (s, d) =>
        {
            Game.Logger.Log(LogLevel.Warning, "RegionCircle: {regionCircle} exit, {unit}", d.Region, d.Unit);
            return true;
        }, true);
        triggerRegionExit.Register(regionCircle);
        RegionRectangle regionRectangle = new(new ScenePoint(3500, 3000, scene), 200, 200);
        Trigger<EventRegionEnter> triggerRegionEnter2 = new(async (s, d) =>
        {
            Game.Logger.Log(LogLevel.Warning, "RegionRectangle: {regionRectangle} enter, {unit}", d.Region, d.Unit);
            return true;
        }, true);
        triggerRegionEnter2.Register(regionRectangle);
        Trigger<EventRegionExit> triggerRegionExit2 = new(async (s, d) =>
        {
            Game.Logger.Log(LogLevel.Warning, "RegionRectangle: {regionRectangle} exit, {unit}", d.Region, d.Unit);
            return true;
        }, true);
        triggerRegionExit2.Register(regionRectangle);

        // 地编物品的例子
        var placedItem = scene.GetPlacedItem(3);
        var item = placedItem?.TriggerGetterInstance!;
        Game.Logger.Log(LogLevel.Warning, "Placed Item #3: {placedItem}, {item}, PlacedId:{id}", placedItem, item, item.GetProperty<int>(PropertyItem.PlacedId));
        // 获取物品属性加成的例子
        var mods = (item as ItemMod)!.GetModificationManager(ItemSlotType.Equip)!.Modifications;
        foreach (var mod in mods)
        {
            Game.Logger.Log(LogLevel.Warning, "Mod: {mod}", mod);
        }
        // 获取玩家的例子
        var player1 = Player.GetById(1)!;
        Game.Logger.LogWarning("玩家1所在场景:{scene}", player1.Scene);
        // Game.Logger.LogWarning("玩家1跳转到默认场景:{result}", player1.SwitchScene(scene, true));
        Game.Logger.LogWarning("玩家1所在场景:{scene}", player1.Scene);
        var player3 = Player.GetById(3)!;
        // 获取地编单位的例子
        var unit = scene.GetPlacedUnit(1)?.TriggerGetterInstance!;
        Game.Logger.Log(LogLevel.Warning, "Player 1 Unit Created#: {unit} {name}, Position: {pos}", unit, unit.Cache.Name, unit.Position);
        // 设置玩家1的主控单位
        Game.Logger.Log(LogLevel.Warning, "Player 1 Main Unit: {unit}", player1.MainUnit);
        // Randomly create 20 ScopeData.Unit.HostTestHero units around ScenePoint (3000,3500,0) with a radius of 1000, belongs to player 3, randomly facing.
        //for (var i = 0; i < 20; i++)
        //{
        //    var newUnit = ScopeData.Unit.HostTestHero.Data?.CreateUnit(player3, new(new Vector3(3000 + IExecutionContext.Random.Next(-1000, 1000), 3500 + IExecutionContext.Random.Next(-1000, 1000), 0), scene), IExecutionContext.Random.Next(0, 360))!;
        //}
        // 动态创建一个触发器，事件为技能阶段。
        Trigger<EventEntityOrderStage> trigger = new(async (s, d) =>
        {
            Game.Logger.LogInformation("{unit} {Order} stage changed from {StagePrevious} {OrderStage} - target: {target}", d.Unit, d.Order, d.StagePrevious, d.Stage, d.Target);
            if (!d.Target.IsValid)
            {
                Game.Logger.LogInformation("{Target} is invalid", d.Target);
            }
            if (d.Order.Command.Index == CommandIndexInventory.PickUp)
            {
                var inventoryManager = d.Unit?.GetTagComponent<InventoryManager>(ComponentTagEx.InventoryManager);
                if (inventoryManager is not null)
                {
                    foreach (var inventory in inventoryManager.Inventories)
                    {
                        foreach (var item in inventory.Items)
                        {
                            Game.Logger.LogInformation("Inventory: {inventory}, Item: {item}", inventory, item);
                        }
                    }
                }
            }
            return true;
        });
        // 为触发器添加事件，注册刚创建的单位的技能阶段事件。
        trigger.Register(unit);
        // 事件注册对象填写游戏代表注册所有单位的这一事件。
        // trigger.AddEvent(Game.Instance);
        var unit2 = scene.GetPlacedUnit(2)?.TriggerGetterInstance!;

        Game.Logger.Log(LogLevel.Warning, "Player 3 Unit Created#: {unit}, Position: {pos}", unit2, unit2.Position);
        // 为单位设置血量模块
        var vital = unit2.GetTagComponent<Vital>(PropertyVital.Health)!;
        // 动态创建一个触发器，事件为单位受到伤害
        Trigger<EventEntityDamageTaken> damageTakenTrigger = new(async (s, d) =>
        {
            Game.Logger.LogInformation("{unit} Taken Damage {Damage}, Life {Life}", unit2, d.DamageInstance, vital);
            Game.Logger.Log(LogLevel.Warning, "GetProperty 1: {PROPERTY}", (unit2 as IPropertyHost).GetPropertyWithHash<double>(1));
            Game.Logger.Log(LogLevel.Warning, "GetProperty Life: {PROPERTY}", (unit2 as IPropertyHost).GetPropertyWithHash<double>(PropertyVital.Health.GetHashCode()));
            await Task.CompletedTask;
            return true;
        });
        // 注册单位3的受伤事件
        damageTakenTrigger.Register(unit2);
        // 将玩家3的主控设为单位3
        player3.MainUnit = unit2;
        // 创建测试技能并把它添加给玩家1的主控
        var spell = ScopeData.Ability.TestSpell.Data!.CreateAbility(unit);
        Game.Logger.Log(LogLevel.Warning, "Spell Created#: {spell}", spell);
        // 构造一个新的指令，由玩家1发出，施法完毕后会重复施法，命令单位对玩家3的主控单位使用TestSpell
        Command command = new()
        {
            AbilityLink = ScopeData.Ability.TestSpell,
            Target = unit2,
            Flag = CommandFlag.IsAI | CommandFlag.DoRecast,
            Player = player1
        };
        // IssueOrder，对玩家1的主控发布指令。
        Game.Logger.Log(LogLevel.Warning, "Issue order result: {result}", command.IssueOrder(unit));
        // await PerformanceTest(unit);
        Game.Logger.Log(LogLevel.Warning, "Server delay 1s start");
        _ = await Game.Delay(TimeSpan.FromSeconds(1));
        Game.Logger.Log(LogLevel.Warning, "Server delay 1s end");

        Game.Logger.Log(LogLevel.Warning, "GetProperty LifeMax 2: {PROPERTY}", unit2.GetUnitPropertyFinal(GameCore.ScopeData.UnitProperty.LifeMax));
        Game.Logger.Log(LogLevel.Warning, "GetProperty 2: {PROPERTY}", (unit2 as IPropertyHost).GetPropertyWithHash<double>(2));
        Game.Logger.Log(LogLevel.Warning, "GetProperty 1: {PROPERTY}", (unit2 as IPropertyHost).GetPropertyWithHash<double>(1));
        return true;
    }

    private static async Task PerformanceTest(Unit unit)
    {
        Game.Logger.Log(LogLevel.Warning, "Performance Test Start!");
        Game.Logger.Log(LogLevel.Warning, "GetProperty a null value as double? {unitId}", unit.GetProperty<double>(PropertyUnitEx.CustomNumber));
        // Game.Logger.Log(LogLevel.Warning, "GetProperty a null value as byte[]? {unitId}", unit.GetProperty<byte[]>(PropertyUnit.UnitId));
        Stopwatch stopwatch = new();
        _ = await Game.Delay(TimeSpan.FromSeconds(1));
        unit.SetProperty(PropertyUnitEx.CustomNumber, unit.GetProperty<double>(PropertyUnitEx.CustomNumber));
        stopwatch.Start();
        for (var i = 0; i < 100000; i++)
        {
            unit.SetProperty(PropertyUnitEx.CustomNumber, unit.GetProperty<double>(PropertyUnitEx.CustomNumber) + 1.0d);
        }
        stopwatch.Stop();
        Game.Logger.Log(LogLevel.Warning, "Get then Set Property 100000 times: {time}ms, result {result}", stopwatch.Elapsed.TotalMilliseconds, unit.GetProperty<double>(PropertyUnitEx.CustomNumber));
        _ = await Game.Delay(TimeSpan.FromSeconds(1));
        stopwatch.Restart();
        for (var i = 0; i < 100000; i++)
        {
            unit.AddProperty(PropertyUnitEx.CustomNumber, 1d);
        }
        stopwatch.Stop();
        Game.Logger.Log(LogLevel.Warning, "Add Property 100000 times: {time}ms, result {result}", stopwatch.Elapsed.TotalMilliseconds, unit.GetProperty<double>(PropertyUnitEx.CustomNumber));
        Game.Logger.Log(LogLevel.Warning, "Performance Test End!");
    }

    private static void OnGameTriggerInitialization()
    {
        // 如果游戏模式不是默认模式或手柄测试模式，则不注册触发器
        if (Game.GameModeLink != GameCore.ScopeData.GameMode.Default
        && Game.GameModeLink != ScopeData.GameMode.JoyStickTest)
        {
            return;
        }
        // 在这里构造所有默认的触发器
        // 构造一个触发器，事件为游戏开始
        Trigger<EventGameStart> trigger = new(GameStartAsync);
        trigger.Register(Game.Instance);
        // 物品槽位变化事件
        Trigger<EventItemSlotChange> trigger2 = new(static async (s, d) =>
        {
            Game.Logger.LogInformation("{Item} slot changed from {slotOld} to {slotNew}", d.Item, d.SlotPrevious, d.Slot);
            await Task.CompletedTask;
            return true;
        });
        trigger2.Register(Game.Instance);
        Trigger<EventItemLevelChange> trigger3 = new(static async (s, d) =>
        {
            Game.Logger.LogInformation("{Item} level changed from {levelOld} to {levelNew}", d.Item, d.LevelPrevious, d.Level);
            await Task.CompletedTask;
            return true;
        });
        trigger3.Register(Game.Instance);
        Trigger<EventItemQualityChange> trigger4 = new(static async (s, d) =>
        {
            Game.Logger.LogInformation("{Item} quality changed from {qualityOld} to {qualityNew}", d.Item, d.QualityPrevious, d.Quality);
            await Task.CompletedTask;
            return true;
        });
        trigger4.Register(Game.Instance);
        Trigger<EventSceneLoadStart> triggerLoadStart = new(static async (s, d) =>
        {
            Game.Logger.LogInformation("Scene {scene} load start", d.Scene);
            await Task.CompletedTask;
            return true;
        });
        triggerLoadStart.Register(Game.Instance);
        Trigger<EventSceneLoadEnd> triggerLoadEnd = new(static async (s, d) =>
        {
            Game.Logger.LogInformation("Scene {scene} load end", d.Scene);
            await Task.CompletedTask;
            return true;
        });
        triggerLoadEnd.Register(Game.Instance);
        Trigger<EventPlayerKeyDown> trigger1 = new(static async (s, d) =>
        {
            Game.Logger.LogInformation("{Player} KeyDown {key}", d.Player, d.Key);
            if (d.Key == GameCore.Platform.SDL.VirtualKey.F1)
            {
                Game.Logger.LogInformation("F1 pressed, Run performance test");
                var unit = d.Player.MainUnit;
                if (unit is not null)
                {
                    await PerformanceTest(unit);
                }
                return true;
            }
            return false;
        });
        trigger1.Register(Game.Instance);
        Trigger<EventPlayerKeyDown> trigger5 = new(static async (s, d) =>
        {
            if (d.Key != GameCore.Platform.SDL.VirtualKey.F2)
            {
                return false;
            }
            Game.Logger.LogInformation("{Player} KeyDown {key}", d.Player, d.Key);
            var item = ScopeData.Scene.DefaultScene.Data?.GetPlacedItem(3)?.TriggerGetterInstance;
            if (item is not ItemMod itemMod)
            {
                Game.Logger.LogInformation("Item is null");
                return false;
            }
            itemMod.Stack += 1;
            Game.Logger.LogWarning("Item Stack: {stack}, {stack2}", itemMod.Stack, item.GetProperty<uint>(PropertyItem.Stack));
            _ = await Game.Delay(TimeSpan.FromSeconds(1));
            itemMod.Stack += 1;
            Game.Logger.LogWarning("Item Stack: {stack}, {stack2}", itemMod.Stack, item.GetProperty<uint>(PropertyItem.Stack));
            _ = await Game.Delay(TimeSpan.FromSeconds(1));
            itemMod.Stack += 1;
            Game.Logger.LogWarning("Item Stack: {stack}, {stack2}", itemMod.Stack, item.GetProperty<uint>(PropertyItem.Stack));
            return true;
        });
        trigger5.Register(Game.Instance);
    }
#pragma warning restore CS1998 // Async method lacks 'await' operators and will run synchronously
}

internal class EventEntityEnterRegion
{
}
#endif