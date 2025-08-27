# 2048 游戏 - WasiCore框架版

一个基于WasiCore框架开发的现代化2048游戏，支持WebAssembly运行环境，具有精美的视觉效果和流畅的动画。

![2048游戏截图](screenshot.png)

## 🎮 游戏特色

### ✨ 视觉效果
- **现代扁平化设计** - 精心设计的颜色主题和视觉风格
- **流畅动画系统** - 方块移动、合并动画，粒子特效
- **7段数码管显示** - 独特的数字渲染系统
- **响应式布局** - 自适应不同屏幕尺寸

### 🎯 游戏功能
- **经典2048玩法** - 合并相同数字，挑战2048目标
- **撤销功能** - 支持悔棋操作
- **分数系统** - 实时分数统计和最佳分数记录
- **游戏状态管理** - 完整的游戏结束和胜利检测

### ⚡ 技术特性
- **WebAssembly优化** - 基于WasiCore框架，高性能运行
- **事件驱动架构** - 稳定的键盘输入处理，防GC触发器设计
- **Canvas图形渲染** - 自定义绘图系统，支持复杂视觉效果
- **内存安全** - 完善的资源管理和清理机制

## 🎯 操作方法

### 键盘控制
- **WASD** 或 **方向键** - 移动方块
- **R键** - 重新开始游戏
- **U键** - 撤销上一步操作
- **ESC键** - 紧急重置

### 鼠标控制
- **New Game 按钮** - 开始新游戏
- **Undo 按钮** - 撤销操作
- **点击空白区域** - 也可触发跳跃（如果是FlappyBird模式）

## 🏗️ 项目结构

```
WasiTestMap-5/
├── GameEntry/
│   ├── Game2048/
│   │   └── Game2048.cs              # 2048游戏主要实现
│   ├── ScopeData.cs                 # 游戏数据和模式配置
│   └── GlobalConfig.cs              # 全局配置
├── build_game.sh                    # 编译部署脚本
└── README.md                        # 项目说明文档
```

## 🛠️ 技术实现

### 核心架构
- **WasiCore框架** - 星火编辑器SCE的WebAssembly游戏框架
- **客户端渲染** - 使用`#if CLIENT`编译条件的客户端专用代码
- **事件系统** - 基于`Trigger<EventGameKeyDown>`的键盘事件处理

### 关键组件

#### 1. 游戏逻辑系统
```csharp
private int[,] grid = new int[GRID_SIZE, GRID_SIZE];    // 游戏网格
private bool isAnimating = false;                       // 动画状态控制
private Trigger<EventGameKeyDown>? keyDownTrigger;      // 防GC键盘触发器
```

#### 2. 动画系统
- **TileAnimation** - 方块移动动画
- **MergeAnimation** - 方块合并动画  
- **Particle** - 粒子效果系统

#### 3. 渲染系统
- **Canvas绘图** - 自定义图形渲染
- **7段数码管** - 数字显示算法
- **颜色主题** - 完整的视觉配色方案

## 🚀 编译和运行

### 前置要求
- .NET 9.0 SDK
- WasiCore框架环境
- 星火编辑器SCE

### 编译步骤
1. **客户端编译**
   ```bash
   dotnet build -c Client-Debug
   ```

2. **服务端编译** 
   ```bash
   dotnet build -c Server-Debug
   ```

3. **一键编译部署**
   ```bash
   ./build_game.sh
   ```

### 运行游戏
启动WasiAsync框架，选择Game2048模式即可开始游戏。

## 🎨 自定义配置

### 游戏参数调整
在`Game2048.cs`中可以调整以下参数：

```csharp
private const int GRID_SIZE = 4;              // 网格大小 (4x4)
private const float TILE_SIZE = 130f;         // 方块尺寸
private const float ANIMATION_SPEED = 8f;     // 动画速度
private const float MERGE_ANIMATION_SPEED = 12f; // 合并动画速度
```

### 视觉效果定制
- **颜色主题** - 修改`tileColors`字典自定义方块颜色
- **字体大小** - 调整各UI元素的`FontSize`属性
- **布局尺寸** - 修改`gameWidth`、`gameHeight`等布局参数

## 🐛 故障排除

### 常见问题

1. **键盘输入无响应**
   - 确认触发器正确注册，检查GC回收问题
   - 使用实例字段存储触发器引用

2. **编译错误**
   - 检查WasiCore框架路径配置
   - 确认使用正确的编译配置（Client-Debug/Server-Debug）

3. **动画卡顿**
   - 检查`isAnimating`状态管理
   - 确认动画超时保护机制正常工作

### 调试建议
游戏内置了完整的日志系统，关键操作都会输出日志信息，便于问题诊断。

## 📝 开发历史

- **v1.0** - 基础2048游戏实现
- **v1.1** - 添加动画效果和粒子系统
- **v1.2** - 修复GC触发器问题，优化输入响应
- **v1.3** - 完善数字显示系统，支持完整7段显示
- **v1.4** - 优化布局和间距，修复视觉重叠问题

## 🤝 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

### 代码规范
- 遵循C#编程规范
- 使用WasiCore框架推荐的编程模式
- 添加适当的注释和日志输出
- 确保代码通过编译测试

## 📄 许可证

本项目基于WasiCore框架开发，遵循相应的开源协议。

---

🎮 **享受2048游戏的乐趣！挑战更高分数！** 🎮