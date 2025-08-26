#if CLIENT
using GameUI.Control.Primitive;
using GameUI.Control.Extensions;
using GameUI.Control.Advanced;
using System.Drawing;
using static GameUI.Control.Extensions.UI;

namespace GameEntry.ModernUITest;

/// <summary>
/// ModernUIExample使用指南
/// </summary>
/// <remarks>
/// 展示如何在实际项目中使用现代化流式UI API示例
/// </remarks>
public static class ModernUIExampleUsage
{
    private static Panel? _currentDemo;
    private static Panel? _mainSelector;

    /// <summary>
    /// 创建一个简单的演示选择界面
    /// </summary>
    /// <returns>可以选择不同演示的界面</returns>
    public static Panel CreateDemoSelector()
    {
        _mainSelector = VStack(30,  // 🎯 增加间距: 20→30
            // 🎯 大尺寸标题: 24→48px
            Title("现代化流式UI API演示", 48)
                .Padding(0, 0, 0, 20),  // 底部额外间距
            
            // 🎯 大尺寸按钮，增加内边距和字体
            CreateLargeButton("基础API演示", Colors.Primary)
                .Click(() => ShowDemo(ModernUIExample.BasicAPIDemo(), "基础API演示")),
            
            CreateLargeButton("语义化控件演示", Colors.Secondary)
                .Click(() => ShowDemo(ModernUIExample.SemanticControlsDemo(), "语义化控件演示")),
            
            CreateLargeButton("容器API演示", Colors.Success)
                .Click(() => ShowDemo(ModernUIExample.ContainerAPIDemo(), "容器API演示")),
            
            CreateLargeButton("Flexbox API演示", Colors.Primary)
                .Click(() => ShowDemo(ModernUIExample.FlexboxAPIDemo(), "Flexbox API演示")),
            
            CreateLargeButton("事件处理演示", Colors.Secondary)
                .Click(() => ShowDemo(ModernUIExample.EventHandlingDemo(), "事件处理演示")),
            
            CreateLargeButton("按钮智能缩放演示", Colors.Warning)
                .Click(() => ShowDemo(ModernUIExample.ButtonSmartScalingDemo(), "按钮智能缩放演示")),
            
            CreateLargeButton("完整应用演示", Colors.Error)
                .Click(() => ShowDemo(ModernUIExample.CompleteAppDemo(), "完整应用演示"))
        ).Padding(40)  // 🎯 增加外边距: 20→40
         .Background(Colors.Background);
        
        return _mainSelector;
    }
    
    /// <summary>
    /// 创建大尺寸按钮，适合桌面环境
    /// </summary>
    private static TextButton CreateLargeButton(string text, System.Drawing.Color backgroundColor)
    {
        return TextButton(text)
            .Background(backgroundColor)
            .TextColor(Colors.OnPrimary)
            .FontSize(20)           // 🎯 大字体: 默认→20px
            .Padding(32, 16)        // 🎯 大内边距: 16x8→32x16
            .Rounded(8)             // 🎯 大圆角: 4→8
            .MinWidth(300)          // 🎯 最小宽度保证一致性
            .Bold();                // 🎯 粗体文字更清晰
    }
    
    /// <summary>
    /// 显示指定的演示界面
    /// </summary>
    /// <param name="demoPanel">要显示的演示面板</param>
    /// <param name="demoName">演示名称</param>
    private static void ShowDemo(Panel demoPanel, string demoName)
    {
        Game.Logger.LogInformation("🔄 ShowDemo called for: {0}", demoName);
        
        // 隐藏主选择器
        _mainSelector?.Hide();
        Game.Logger.LogInformation("📱 Main selector hidden");
        
        // 隐藏并移除之前的演示
        if (_currentDemo != null)
        {
            _currentDemo.Hide()
                        .RemoveFromParent(); // 🎯 链式调用更简洁
            Game.Logger.LogInformation("🗑️ Previous demo removed");
        }
        
        // 创建带返回按钮的演示界面
        _currentDemo = VStack(24,  // 🎯 增加间距: 16→24
            HStack(12,  // 🎯 增加水平间距: 8→12
                // 🎯 大尺寸返回按钮
                CreateLargeButton("← 返回", Colors.Secondary)
                    .Click(() => BackToSelector())
                    .MinWidth(120),  // 返回按钮较小宽度
                Spacer(),
                // 🎯 大尺寸页面标题: 24→36px
                Title(demoName, 36)
                    .Bold()
            ),
            demoPanel
        ).Padding(30)  // 🎯 增加外边距: 20→30
         .Background(Colors.Background);
        
        // 确保演示界面全屏显示
        _currentDemo.FullScreen()
                   .Show()
                   .AddToRoot();
        Game.Logger.LogInformation("✅ Demo '{0}' created and set to full screen", demoName);
    }
    
    /// <summary>
    /// 返回到主选择器
    /// </summary>
    private static void BackToSelector()
    {
        Game.Logger.LogInformation("🔙 BackToSelector called");
        
        // 隐藏并移除当前演示
        if (_currentDemo != null)
        {
            _currentDemo.Hide()
                        .RemoveFromParent(); // 🎯 链式调用更简洁
            _currentDemo = null;
            Game.Logger.LogInformation("🗑️ Current demo removed");
        }
        
        // 显示主选择器
        _mainSelector?.FullScreen()
                     .Show()
                     .AddToRoot();
        Game.Logger.LogInformation("📱 Main selector restored to full screen");
    }
    
    /// <summary>
    /// 集成到现有AI系统测试界面的示例
    /// </summary>
    /// <returns>可以嵌入到AISystemTest中的界面</returns>
    public static Panel CreateEmbeddedDemo()
    {
        return Card(
            VStack(12,
                Title("现代化UI API"),
                Body("展示重新设计的直观、一致性API"),
                
                HStack(8,
                    Primary("查看演示")
                        .Click(() => {
                            // 这里可以打开完整演示
                        }),
                    
                    Secondary("API文档")
                        .Click(() => {
                            // 这里可以打开API文档
                        })
                )
            ),
            padding: 16
        );
    }
}
#endif 