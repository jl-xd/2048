# 流式布局扩展语法教程

> **适用版本**: WasiCore v1.0+  
> **设计分辨率**: `2340×1080` (横屏) / `1080×2340` (竖屏)  
> **更新日期**: 2025-01-25

## 🚀 **快速开始**

流式布局扩展语法是WasiCore框架提供的现代化UI开发方式，让你能用简洁、直观的代码创建复杂的用户界面。

### 什么是流式布局？

**流式布局**是一种链式调用的UI构建方式，每个方法都返回控件本身，支持连续调用多个方法：

```csharp
// ❌ 传统方式 (冗长)
var button = new Button();
button.Width = 120;
button.Height = 40;
button.HorizontalAlignment = HorizontalAlignment.Center;
button.Background = new SolidColorBrush(Colors.Primary);

// ✅ 流式语法 (简洁)
var button = Button()
    .Size(120, 40)
    .Center()
    .Background(Colors.Primary);
```

---

## 📚 **第一章：基础语法**

### 1.1 导入命名空间

```csharp
using GameUI.Control.Extensions;
using static GameUI.Control.Extensions.UI;
```

### 1.2 创建基础控件

```csharp
// 创建控件
var panel = Panel();
var label = Label();
var button = Button();

// 创建带文本的控件
var title = Label("欢迎使用WasiCore");
var submitButton = TextButton("提交");
```

### 1.3 设置基础属性

```csharp
// 尺寸设置
control.Size(200, 100)          // 宽200，高100
        .Width(200)             // 只设置宽度
        .Height(100);           // 只设置高度

// 位置设置
control.Position(50, 30);       // 绝对位置

// 可见性和状态
control.Show()                  // 显示
        .Hide()                 // 隐藏
        .Enable()               // 启用
        .Disable();             // 禁用
```

### 1.4 链式调用示例

```csharp
var welcomeLabel = Label("欢迎来到游戏世界！")
    .FontSize(24)               // 字体大小
    .Bold()                     // 粗体
    .TextColor(Colors.Primary)  // 文字颜色
    .Center()                   // 居中对齐
    .Padding(20)                // 内边距
    .Show();                    // 显示
```

---

## 📐 **第二章：布局与对齐**

### 2.1 尺寸控制

```csharp
// 固定尺寸
control.Size(200, 100);         // 固定宽高
control.Size(150);              // 正方形150x150

// 自动尺寸
control.AutoWidth()             // 宽度自动适应内容
        .AutoHeight()           // 高度自动适应内容
        .AutoSize();            // 宽高都自动

// 最小/最大尺寸
control.MinWidth(100)           // 最小宽度
        .MaxWidth(500)          // 最大宽度
        .MinHeight(50)          // 最小高度
        .MaxHeight(300);        // 最大高度
```

### 2.2 对齐方式

```csharp
// 水平对齐
control.AlignLeft()             // 左对齐
        .AlignCenter()          // 水平居中
        .AlignRight();          // 右对齐

// 垂直对齐  
control.AlignTop()              // 顶部对齐
        .AlignMiddle()          // 垂直居中
        .AlignBottom();         // 底部对齐

// 拉伸对齐
control.StretchHorizontal()     // 水平拉伸
        .StretchVertical()      // 垂直拉伸
        .Stretch();             // 双向拉伸

// 居中快捷方式
control.Center();               // 水平+垂直居中
```

### 2.3 边距设置

```csharp
// 统一边距
control.Margin(10)              // 四周边距10
        .Padding(15);           // 四周内边距15

// 水平/垂直边距
control.Margin(20, 10)          // 水平20，垂直10
        .Padding(15, 5);        // 水平15，垂直5

// 四个方向边距
control.Margin(10, 5, 10, 5);   // 左、上、右、下
```

---

## 🏗️ **第三章：容器布局**

### 3.1 垂直堆叠 (VStack)

```csharp
// 基础垂直堆叠
var vertical = VStack(16,       // 间距16像素
    Label("标题"),
    Label("内容1"),
    Label("内容2"),
    Button("确定")
);

// 复杂垂直布局
var loginForm = VStack(24,
    Title("用户登录", 32),
    
    VStack(16,                  // 表单字段分组
        Label("用户名"),
        Input().Padding(12, 8),
        
        Label("密码"),
        Input().Padding(12, 8)
    ),
    
    Button("登录")
        .Size(200, 44)
        .Center()
);
```

### 3.2 水平堆叠 (HStack)

```csharp
// 基础水平堆叠
var horizontal = HStack(12,     // 间距12像素
    Button("取消"),
    Button("确定"),
    Button("重置")
);

// 工具栏示例
var toolbar = HStack(8,
    Button("保存").Size(80, 32),
    Button("撤销").Size(80, 32),
    Spacer(),                   // 弹性间距
    Label("状态：已保存"),
    Button("设置").Size(60, 32)
);
```

### 3.3 嵌套布局

```csharp
// 复杂嵌套布局
var mainLayout = VStack(20,
    // 头部区域
    HStack(16,
        Label("应用标题").FontSize(24).Bold(),
        Spacer(),
        Button("用户")
    ).Padding(20, 16),
    
    HDivider(),                 // 分隔线
    
    // 主要内容区域
    HStack(0,
        // 左侧边栏
        VStack(12,
            Button("首页"),
            Button("设置"),
            Button("帮助")
        ).Padding(16).Width(200),
        
        VDivider(),             // 垂直分隔线
        
        // 右侧内容
        VStack(16,
            Label("主要内容区域"),
            Panel().Stretch()   // 占满剩余空间
        ).Padding(20).Stretch()
    ).Stretch()
);
```

---

## 🎨 **第四章：样式与外观**

### 4.1 颜色与背景

```csharp
// 背景颜色
control.Background(Colors.Primary)      // 使用预设颜色
        .Background(Color.Blue)         // 使用系统颜色
        .Background(Color.FromArgb(255, 100, 150, 200)); // 自定义颜色

// 文字颜色
label.TextColor(Colors.OnPrimary)       // 主色调上的文字色
     .TextColor(Color.White);           // 白色文字
```

### 4.2 字体样式

```csharp
// 字体设置
label.FontSize(18)              // 字体大小
     .Bold()                    // 粗体
     .Italic()                  // 斜体
     .TextColor(Colors.OnSurface); // 文字颜色

// 预设文本样式
Title("页面标题")               // 预设标题样式
Subtitle("副标题")              // 预设副标题样式  
Body("正文内容")                // 预设正文样式
Caption("说明文字")             // 预设说明文字样式
```

### 4.3 视觉效果

```csharp
// 圆角
control.Rounded(8)              // 8像素圆角
        .Rounded(12);           // 12像素圆角

// 透明度
control.Opacity(0.8f)           // 80%不透明度
        .Opacity(0.5f);         // 50%不透明度

// 层级
control.Layer(1)                // Z轴层级1
        .Layer(5);              // Z轴层级5
```

---

## 🚀 **第五章：高级功能**

### 5.1 响应式布局

```csharp
// 全屏布局
panel.FullScreen()              // 占满整个屏幕
     .Show()
     .AddToRoot();

// 按比例拉伸
panel.ScreenStretch(0.8f, 0.6f) // 屏幕80%宽，60%高
     .Center();                 // 居中显示
```

### 5.2 滚动容器

```csharp
// 垂直滚动
var scrollContent = VScroll(
    VStack(8,
        ...GetListItems()       // 获取列表项
    )
).Height(300);

// 水平滚动
var horizontalScroll = HScroll(
    HStack(8,
        ...GetImages()          // 获取图片列表
    )
).Width(400);
```

### 5.3 条件布局

```csharp
// 根据条件显示不同内容
var dynamicPanel = VStack(16,
    Title("动态内容"),
    
    // 条件显示
    isLoggedIn ? 
        VStack(8,
            Label($"欢迎，{username}"),
            Button("退出登录")
        ) :
        VStack(8,
            Label("请先登录"),
            Button("立即登录")
        ),
    
    Button("继续")
);
```

---

## 💡 **第六章：实用模式**

### 6.1 卡片布局

```csharp
// 信息卡片
var infoCard = Panel()
    .MinHeight(120)
    .Padding(24)
    .Rounded(12)
    .Background(Colors.Surface)
    .Layer(1)
    .Add(
        VStack(12,
            Title("卡片标题", 18),
            Body("这是卡片的详细内容..."),
            HStack(8,
                Primary("操作1"),
                Secondary("操作2")
            )
        )
    );
```

### 6.2 对话框布局

```csharp
// 确认对话框
var confirmDialog = Panel()
    .Size(400, 200)
    .Center()
    .Rounded(16)
    .Background(Colors.Surface)
    .Layer(10)
    .Add(
        VStack(24,
            Title("确认操作", 20).Center(),
            Body("您确定要执行此操作吗？").Center(),
            HStack(16,
                Secondary("取消").Click(() => CloseDialog()),
                Primary("确定").Click(() => ExecuteAction())
            ).Center()
        ).Padding(32)
    );
```

### 6.3 列表项布局

```csharp
// 标准列表项
Panel CreateListItem(string title, string subtitle, string action)
{
    return Panel()
        .Padding(20, 16)
        .Background(Colors.Surface)
        .Add(
            HStack(16,
                VStack(4,
                    Body(title, 16).Bold(),
                    Caption(subtitle)
                ),
                Spacer(),
                Secondary(action).FontSize(14)
            )
        );
}

// 使用示例
var itemList = VStack(4,
    CreateListItem("项目1", "详细描述1", "编辑"),
    CreateListItem("项目2", "详细描述2", "删除"),
    CreateListItem("项目3", "详细描述3", "查看")
);
```

---

## 🎯 **第七章：最佳实践**

### 7.1 代码组织

```csharp
// ✅ 推荐：将复杂布局拆分为方法
public static Panel CreateUserProfile(User user)
{
    return VStack(20,
        CreateUserHeader(user),
        CreateUserInfo(user),
        CreateUserActions(user)
    ).Padding(24);
}

private static Panel CreateUserHeader(User user)
{
    return HStack(16,
        Avatar(user.Avatar).Size(60),
        VStack(4,
            Title(user.Name, 20),
            Caption(user.Email)
        )
    );
}

// ❌ 避免：将所有代码写在一个大块中
```

### 7.2 性能优化

```csharp
// ✅ 推荐：缓存经常使用的控件
private static Panel? _cachedPanel;
public static Panel GetCachedPanel()
{
    return _cachedPanel ??= CreateExpensivePanel();
}

// ✅ 推荐：使用适当的容器类型
VStack(items);          // 简单垂直列表
Panel().FlowVertical(); // 需要更多控制时
```

### 7.3 响应式设计

```csharp
// ✅ 推荐：使用相对尺寸和拉伸
Panel()
    .ScreenStretch(0.9f, 0.8f)  // 相对屏幕尺寸
    .Center()                   // 居中显示
    .MinSize(320, 240);         // 设置最小尺寸

// ❌ 避免：使用固定像素值
Panel().Size(800, 600);         // 可能在不同设备上显示异常
```

### 7.4 可读性提升

```csharp
// ✅ 推荐：合理的缩进和分组
var layout = VStack(24,
    // 头部区域
    CreateHeader(),
    
    // 主要内容
    HStack(16,
        CreateSidebar(),
        CreateMainContent()
    ).Stretch(),
    
    // 底部区域
    CreateFooter()
).FullScreen();

// ✅ 推荐：使用有意义的变量名
var primaryButton = Primary("确认").Size(120, 44);
var cancelButton = Secondary("取消").Size(120, 44);
```

---

## 🛠️ **第八章：常见问题**

### Q1: 如何让控件填满父容器？

```csharp
// 水平填满
control.StretchHorizontal();

// 垂直填满  
control.StretchVertical();

// 完全填满
control.Stretch();
// 或者
control.FullScreen();
```

### Q2: 如何创建等宽的按钮？

```csharp
var buttonRow = HStack(12,
    Primary("按钮1").MinWidth(100),
    Secondary("按钮2").MinWidth(100),
    Success("按钮3").MinWidth(100)
);
```

### Q3: 如何处理溢出内容？

```csharp
// 使用滚动容器
var scrollableContent = VScroll(
    VStack(8,
        ...manyItems
    )
).Height(300);  // 限制高度，超出部分可滚动
```

### Q4: 如何创建响应式间距？

```csharp
// 使用屏幕比例计算间距
var spacing = (int)(ScreenViewport.Primary.Size.Width * 0.02f); // 屏幕宽度的2%
var layout = VStack(spacing, ...items);
```

---

## 🔗 **第九章：相关资源**

### 参考文档
- [UI设计尺寸规范](UIDesignStandards.md) - 详细的尺寸标准
- [AI友好的流式布局API设计](../AI_FRIENDLY_UI_API.md) - 设计理念和架构
- [现代化UI API重新设计](../MODERN_UI_API_REDESIGN.md) - API改进对比

### 常用扩展方法速查

#### 基础属性
```csharp
.Show() / .Hide()           // 显示/隐藏
.Enable() / .Disable()      // 启用/禁用
.Size(w, h) / .Width(w) / .Height(h)  // 尺寸
.Position(x, y)             // 位置
.Background(color)          // 背景色
.Opacity(value)             // 透明度
.Rounded(radius)            // 圆角
.Layer(zIndex)              // 层级
```

#### 布局对齐
```csharp
.Center()                   // 居中
.AlignLeft() / .AlignRight() / .AlignCenter()     // 水平对齐
.AlignTop() / .AlignBottom() / .AlignMiddle()     // 垂直对齐
.Stretch() / .StretchHorizontal() / .StretchVertical()  // 拉伸
.Margin(all) / .Padding(all)    // 边距
```

#### 容器创建
```csharp
VStack(spacing, ...items)   // 垂直堆叠
HStack(spacing, ...items)   // 水平堆叠
VScroll(content)           // 垂直滚动
HScroll(content)           // 水平滚动
Panel() / Label() / Button()  // 基础控件
```

#### 预设样式
```csharp
Title(text, size)          // 标题
Subtitle(text, size)       // 副标题
Body(text, size)           // 正文
Caption(text, size)        // 说明文字
Primary(text) / Secondary(text)  // 预设按钮
```

---

## 🤖 **第十章：AI开发专用指南**

### 10.1 为什么AI应该优先使用流式布局

基于实际项目重构经验（如BuffTest UI重构），流式布局在AI辅助开发中具有显著优势：

```csharp
// ❌ 传统方式 - AI容易产生重叠问题
var panel = new Panel {
    Width = 300,
    Height = 150,  // 固定高度可能导致内容被裁剪
};
var titleLabel = new Label {
    Margin = new Thickness(0, 8, 0, 8),  // 魔法数字
};
var infoLabel = new Label {
    Margin = new Thickness(10, 4, 10, 8), // 更多魔法数字
};
// 结果：标题和信息文字重叠！

// ✅ 流式布局 - AI友好的解决方案
var panel = new Panel {
    FlowOrientation = Orientation.Vertical,  // 语义清晰
    Height = AutoMode.Auto,                  // 自动适应内容
    Padding = new Thickness(16, 12, 16, 12) // 统一内边距
};
var titleLabel = new Label {
    Text = "🧪 Test Buff Status",
    Parent = panel,                          // 明确的层级关系
    Margin = new Thickness(0, 0, 0, 12)     // 清晰的下边距
};
var infoLabel = new Label {
    Text = "Buff信息",
    Parent = panel,                          // 自动排列，无重叠
    Margin = new Thickness(0, 0, 0, 8)
};
// 结果：布局完美，无重叠问题！
```

### 10.2 AI代码生成优势分析

**语法规律性** 🎯
```csharp
// AI容易学习的模式：
// 1. 设置容器流式布局
panel.FlowOrientation = Orientation.Vertical;

// 2. 创建子元素
var element = new ControlType {
    Parent = panel,  // 建立层级关系
    Margin = new Thickness(0, 0, 0, spacing) // 统一间距模式
};

// 3. 重复步骤2，添加更多元素
```

**语义明确性** 📝
```csharp
// 代码意图一目了然
FlowOrientation = Orientation.Vertical  // → 垂直排列
Height = AutoMode.Auto                  // → 高度自适应
Parent = parentPanel                    // → 父子关系明确
```

**容错性强** 🛡️
```csharp
// 即使AI设置了不合理的间距，也不会重叠
Margin = new Thickness(0, 0, 0, 50)  // 过大的间距 → 布局仍然正确
Margin = new Thickness(0, 0, 0, 2)   // 过小的间距 → 布局仍然正确
```

### 10.3 AI开发时的最佳实践

**推荐的代码模式** ✅
```csharp
// AI应该生成这样的代码模式
private static async Task CreateUI()
{
    // 1. 创建主容器（流式布局）
    var mainPanel = new Panel {
        FlowOrientation = Orientation.Vertical,
        Height = AutoMode.Auto,
        Width = 320,
        Padding = new Thickness(16, 12, 16, 12),
        CornerRadius = 8,
        Background = new SolidColorBrush(Color.FromArgb(200, 0, 0, 0))
    };

    // 2. 添加标题元素
    var titleLabel = new Label {
        Text = "🧪 Test Title",
        FontSize = 16,
        Bold = true,
        TextColor = Color.White,
        Parent = mainPanel,  // 关键：明确父子关系
        Margin = new Thickness(0, 0, 0, 12)  // 清晰的下边距
    };

    // 3. 添加内容元素（自动排列）
    var contentLabel = new Label {
        Text = "Content text",
        FontSize = 13,
        TextColor = Color.FromArgb(255, 144, 238, 144),
        Parent = mainPanel,  // 自动加入流式布局
        Margin = new Thickness(0, 0, 0, 8)
    };

    // 4. 添加到视觉树
    mainPanel.AddToVisualTree();
}
```

**AI应该避免的模式** ❌
```csharp
// 避免：复杂的手动位置计算
titleLabel.HorizontalAlignment = HorizontalAlignment.Center;
titleLabel.VerticalAlignment = VerticalAlignment.Top;
titleLabel.Margin = new Thickness(0, 8, 0, 8);

contentLabel.HorizontalAlignment = HorizontalAlignment.Center;
contentLabel.VerticalAlignment = VerticalAlignment.Top;
contentLabel.Margin = new Thickness(10, 32, 10, 8); // 需要手动计算Y位置
```

### 10.4 常见问题解决方案

**问题1：元素重叠**
```csharp
// ❌ 问题代码
var element1 = new Label { Margin = new Thickness(0, 8, 0, 8) };
var element2 = new Label { Margin = new Thickness(10, 4, 10, 8) };
// 可能重叠！

// ✅ 解决方案
var panel = new Panel { FlowOrientation = Orientation.Vertical };
var element1 = new Label { Parent = panel, Margin = new Thickness(0, 0, 0, 8) };
var element2 = new Label { Parent = panel, Margin = new Thickness(0, 0, 0, 8) };
// 自动排列，永不重叠！
```

**问题2：内容被裁剪**
```csharp
// ❌ 问题代码
var panel = new Panel { Height = 150 }; // 固定高度
// 内容过多时被裁剪

// ✅ 解决方案
var panel = new Panel { Height = AutoMode.Auto }; // 自适应高度
// 永远显示完整内容
```

**问题3：布局不一致**
```csharp
// ❌ 问题代码
label1.Margin = new Thickness(10, 4, 10, 8);
label2.Margin = new Thickness(5, 6, 5, 10);  // 不一致的间距
label3.Margin = new Thickness(15, 2, 15, 6);

// ✅ 解决方案
var spacing = new Thickness(0, 0, 0, 8); // 统一的间距变量
label1.Margin = spacing;
label2.Margin = spacing;
label3.Margin = spacing;
```

### 10.5 AI代码生成质量指标

**高质量AI生成代码的特征**：
- ✅ 使用 `FlowOrientation` 设置布局方向
- ✅ 使用 `AutoMode.Auto` 实现自适应尺寸
- ✅ 使用 `Parent` 属性建立清晰层级
- ✅ 使用一致的 `Margin` 间距模式
- ✅ 避免魔法数字和复杂计算

**需要改进的AI代码特征**：
- ❌ 依赖手动位置计算
- ❌ 使用复杂的 `Alignment` 组合
- ❌ 硬编码像素值
- ❌ 缺少父子关系设置
- ❌ 可能导致元素重叠

## 🎓 **总结**

流式布局扩展语法为WasiCore框架带来了：

✅ **开发效率**: 代码量减少50%以上  
✅ **可读性**: 代码结构清晰直观  
✅ **维护性**: 修改和扩展更容易  
✅ **学习成本**: 新手快速上手  
✅ **AI友好**: 非常适合AI代码生成

**特别适合AI开发**：
✅ **语法规律性强**: AI容易学习和预测  
✅ **语义明确**: 代码意图清晰，减少歧义  
✅ **容错性好**: 即使参数不完美也能正常工作  
✅ **质量保证**: 自动避免常见的布局问题

现在你已经掌握了流式布局的完整使用方法，特别是在AI辅助开发场景下的最佳实践，可以开始创建现代化、响应式的用户界面了！

---

> 💡 **提示**: 建议从简单的布局开始练习，逐步掌握高级功能。记住要保持代码的可读性和可维护性。 