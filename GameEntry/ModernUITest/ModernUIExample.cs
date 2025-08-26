#if CLIENT
using GameUI.Control.Extensions;
using GameUI.Control.Primitive;
using static GameUI.Control.Extensions.UI;

namespace GameEntry.ModernUITest;

/// <summary>
/// 现代化流式UI API示例
/// </summary>
/// <remarks>
/// 展示重新设计后的直观、一致性API的使用方法。
/// 重点展示命名的改进和API的简洁性。
/// </remarks>
public static class ModernUIExample
{
    /// <summary>
    /// 展示基础API的改进
    /// </summary>
    public static Panel BasicAPIDemo()
    {
        return VStack(16,
            // ✅ 新API：直观的命名
            Title("现代化API演示")
                .Show()           // 代替 Visible(true)
                .Enable(),        // 代替 Enabled(true)
            
            Body("✅ Show() 方法 - 代替 Visible(true)")
                .Show(),
            
            Body("✅ Enable() 方法 - 代替 Enabled(true)")
                .Enable(),
            
            Body("✅ Rounded() 方法 - 代替 CornerRadius()")
                .Rounded(4),
            
            Body("这是正文内容示例")
                .Rounded(4)       // 代替 CornerRadius(4)
                .Layer(1),        // 代替 ZIndex(1)
            
            Caption("这是说明文字 - opacity 0.7")
                .Opacity(0.7f),
            
            // 添加一些测试按钮
            HStack(8,
                Primary("主要按钮"),
                Secondary("次要按钮")
            )
        ).Background(Colors.Surface)  // 添加背景色让Panel可见
        .Padding(16);
    }
    
    /// <summary>
    /// 展示语义化控件
    /// </summary>
    public static Panel SemanticControlsDemo()
    {
        return Card(
            VStack(12,
                Title("语义化控件"),
                Subtitle("现代设计系统"),
                Body("使用语义化的控件名称，更符合设计系统的理念"),
                
                HStack(8,
                    Primary("主要操作"),
                    Secondary("次要操作"),
                    Success("成功状态"),
                    Danger("危险操作")
                )
            ),
            padding: 20
        );
    }
    
    /// <summary>
    /// 展示简化的容器API
    /// </summary>
    public static Panel ContainerAPIDemo()
    {
        return VStack(16,
            Title("容器API简化"),
            
            // ✅ 新API：简洁的命名
            Card(
                VStack(8,
                    Body("垂直堆叠容器"),
                    HStack(4,
                        Label("项目1"),
                        Label("项目2"),
                        Spacer(),  // 代替 FlexSpacer()
                        Label("项目3")
                    )
                )
            ),
            
            // ✅ 新API：直观的滚动容器
            VScroll(              // 代替 VerticalScrollContainer()
                List(             // 代替 ListContainer()
                    Body("列表项 1"),
                    Body("列表项 2"),
                    Body("列表项 3"),
                    Body("列表项 4"),
                    Body("列表项 5")
                )
            ).Size(300, 150),
            
            HStack(16,
                // ✅ 新API：简化的分隔线
                Panel().Size(100, 50).Background(Colors.Primary),
                VDivider(),       // 代替 Divider(false)
                Panel().Size(100, 50).Background(Colors.Secondary)
            )
        );
    }
    
    /// <summary>
    /// 展示现代化的Flexbox API
    /// </summary>
    public static Panel FlexboxAPIDemo()
    {
        return VStack(16,
            Title("Flexbox API"),
            
            // ✅ 新API：CSS标准命名
            HStack(8,
                Panel()
                    .Background(Colors.Primary)
                    .FixedSize(100, 50),     // flex: none
                
                Panel()
                    .Background(Colors.Secondary)
                    .FlexAuto(),             // flex: 1 1 auto
                
                Panel()
                    .Background(Colors.Success)
                    .FlexCSS(grow: 2)        // flex: 2 0 0
            ),
            
            // ✅ 新API：直观的增长/收缩
            HStack(8,
                Panel()
                    .Background(Colors.Warning)
                    .Size(80, 40)
                    .GrowWidth(1),           // 代替 StretchRatio
                
                Panel()
                    .Background(Colors.Error)
                    .Size(80, 40)
                    .GrowWidth(2)
                    .ShrinkWidth(0.5f)       // 代替 CompactRatio
            )
        );
    }
    
    /// <summary>
    /// 展示事件处理的改进
    /// </summary>
    public static Panel EventHandlingDemo()
    {
        return VStack(16,
            Title("事件处理"),
            
            // ✅ 新API：统一的Click命名
            Primary("点击我")
                .Click(() => {
                    // 处理点击事件
                }),
            
            // ✅ 新API：支持详细事件参数
            Secondary("详细事件")
                .Click((sender, e) => {
                    // 处理详细事件
                }),
            
            // ✅ 新API：简化的添加子控件
            Panel()
                .Background(Colors.Surface)
                .Rounded(8)
                .Padding(16)
                .Add(                    // 代替 AddChild
                    Body("动态添加的内容"),
                    Space(8),            // 代替 Spacer(8)
                    Caption("更多信息")
                )
        );
    }
    
    /// <summary>
    /// 展示按钮智能缩放功能
    /// </summary>
    /// <remarks>
    /// 测试按钮如何根据文本内容、字体大小自动调整尺寸
    /// </remarks>
    public static Panel ButtonSmartScalingDemo()
    {
        return VStack(20,
            Title("按钮智能缩放演示"),
            Body("演示按钮如何根据文本内容和字体大小自动调整尺寸"),
            
            // 测试不同长度的文本
            Card(
                VStack(16,
                    Subtitle("不同文本长度测试"),
                    Caption("所有按钮都使用默认Auto尺寸，观察自动缩放效果"),
                    
                    VStack(12,
                        // 短文本
                        TextButton("短")
                            .Background(Colors.Primary)
                            .TextColor(Colors.OnPrimary)
                            .Rounded(4),
                        
                        // 中等长度文本
                        TextButton("中等长度文本")
                            .Background(Colors.Primary)
                            .TextColor(Colors.OnPrimary)
                            .Rounded(4),
                        
                        // 长文本
                        TextButton("这是一段很长的按钮文字内容用于测试智能缩放")
                            .Background(Colors.Primary)
                            .TextColor(Colors.OnPrimary)
                            .Rounded(4),
                        
                        // 超长文本
                        TextButton("超长文本：这是一个非常非常长的按钮文字，用来测试按钮的自动宽度调整功能是否正常工作")
                            .Background(Colors.Primary)
                            .TextColor(Colors.OnPrimary)
                            .Rounded(4)
                    ).Center()
                ),
                padding: 16
            ),
            
            // 测试不同字体大小
            Card(
                VStack(16,
                    Subtitle("不同字体大小测试"),
                    Caption("相同文本内容，不同字体大小的缩放效果"),
                    
                    VStack(12,
                        // 小字体
                        TextButton("标准测试文本")
                            .Background(Colors.Secondary)
                            .TextColor(Colors.OnSecondary)
                            .FontSize(12)
                            .Rounded(4),
                        
                        // 默认字体
                        TextButton("标准测试文本")
                            .Background(Colors.Secondary)
                            .TextColor(Colors.OnSecondary)
                            .FontSize(16)
                            .Rounded(4),
                        
                        // 大字体
                        TextButton("标准测试文本")
                            .Background(Colors.Secondary)
                            .TextColor(Colors.OnSecondary)
                            .FontSize(20)
                            .Rounded(4),
                        
                        // 超大字体
                        TextButton("标准测试文本")
                            .Background(Colors.Secondary)
                            .TextColor(Colors.OnSecondary)
                            .FontSize(28)
                            .Rounded(4)
                    ).Center()
                ),
                padding: 16
            ),
            
            // 测试不同样式组合
            Card(
                VStack(16,
                    Subtitle("样式组合测试"),
                    Caption("测试粗体、内边距等样式对尺寸的影响"),
                    
                    VStack(12,
                        // 普通样式
                        TextButton("普通按钮文本")
                            .Background(Colors.Success)
                            .TextColor(Colors.OnPrimary)
                            .Rounded(4),
                        
                        // 粗体样式
                        TextButton("粗体按钮文本")
                            .Background(Colors.Success)
                            .TextColor(Colors.OnPrimary)
                            .Bold()
                            .Rounded(4),
                        
                        // 带内边距（仍然Auto尺寸）
                        TextButton("带内边距按钮")
                            .Background(Colors.Success)
                            .TextColor(Colors.OnPrimary)
                            .Padding(20, 12)
                            .Rounded(4),
                        
                        // 粗体+大字体+内边距
                        TextButton("完整样式测试")
                            .Background(Colors.Success)
                            .TextColor(Colors.OnPrimary)
                            .FontSize(18)
                            .Bold()
                            .Padding(16, 10)
                            .Rounded(6)
                    ).Center()
                ),
                padding: 16
            ),
            
            // 对比：固定尺寸 vs 自动尺寸
            Card(
                VStack(16,
                    Subtitle("自动尺寸 vs 固定尺寸对比"),
                    Caption("观察固定尺寸按钮与自动尺寸按钮的区别"),
                    
                    VStack(12,
                        Label("自动尺寸（推荐）:")
                            .Bold(),
                        
                        HStack(8,
                            TextButton("短")
                                .Background(Colors.Warning)
                                .TextColor(Colors.OnPrimary)
                                .Rounded(4),
                            
                            TextButton("中等长度")
                                .Background(Colors.Warning)
                                .TextColor(Colors.OnPrimary)
                                .Rounded(4),
                            
                            TextButton("很长的文本内容")
                                .Background(Colors.Warning)
                                .TextColor(Colors.OnPrimary)
                                .Rounded(4)
                        ).Center(),
                        
                        Space(8),
                        
                        Label("固定尺寸（150x40）:")
                            .Bold(),
                        
                        HStack(8,
                            TextButton("短")
                                .Background(Colors.Error)
                                .TextColor(Colors.OnPrimary)
                                .Size(150, 40)
                                .Rounded(4),
                            
                            TextButton("中等长度")
                                .Background(Colors.Error)
                                .TextColor(Colors.OnPrimary)
                                .Size(150, 40)
                                .Rounded(4),
                            
                            TextButton("很长的文本内容")
                                .Background(Colors.Error)
                                .TextColor(Colors.OnPrimary)
                                .Size(150, 40)
                                .Rounded(4)
                        ).Center()
                    )
                ),
                padding: 16
            )
        ).Padding(16)
         .Background(Colors.Background);
    }
    
    /// <summary>
    /// 展示完整的应用界面
    /// </summary>
    public static Panel CompleteAppDemo()
    {
        return VStack(0,
            // 标题栏
            Panel()
                .Background(Colors.Primary)
                .Padding(16, 12)
                .Add(
                    HStack(8,
                        Title("现代应用")
                            .TextColor(Colors.OnPrimary),
                        Spacer(),
                        Button()
                            .Background(Colors.OnPrimary)
                            .Rounded(20)
                            .Size(40, 40)
                    )
                ),
            
            // 主内容区域
            HStack(0,
                // 侧边栏
                Panel()
                    .Background(Colors.Surface)
                    .Width(200)
                    .Add(
                        VStack(4,
                            Secondary("菜单1"),
                            Secondary("菜单2"),
                            Secondary("菜单3"),
                            HDivider(),
                            Secondary("设置")
                        ).Padding(12)
                    ),
                
                // 内容区
                VScroll(
                    VStack(16,
                        Card(
                            VStack(12,
                                Subtitle("卡片标题"),
                                Body("这是卡片内容，展示了现代化的UI设计。"),
                                HStack(8,
                                    Primary("确认"),
                                    Secondary("取消")
                                )
                            )
                        ),
                        
                        Card(
                            VStack(12,
                                Subtitle("数据展示"),
                                List(
                                    Body("数据项 1"),
                                    Body("数据项 2"),
                                    Body("数据项 3")
                                ).Size(280, 120)
                            )
                        )
                    ).Padding(16)
                ).FlexAuto()
            ).FlexAuto()
        );
    }
}
#endif 