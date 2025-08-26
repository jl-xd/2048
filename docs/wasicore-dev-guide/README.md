# WasiCore 框架文档

这里包含了 WasiCore 框架的完整文档，包括开发指南、系统架构说明和API参考。

## 📁 目录结构

```
docs/
├── guides/              # 开发指南
│   ├── QuickStart.md   # 快速开始教程
│   ├── ProjectStructure.md # 项目结构说明
│   └── Testing.md      # 测试指南
├── best-practices/      # 最佳实践
│   └── AsyncProgramming.md # 异步编程最佳实践
├── systems/            # 系统架构文档
│   ├── GameDataSystem.md    # 游戏数据系统
│   ├── UnitSystem.md        # 单位系统
│   ├── OrderSystem.md       # 指令系统
│   ├── CommandAPI.md        # 指令便利API
│   ├── AbilitySystem.md     # 技能系统
│   ├── BuffSystem.md        # Buff系统
│   ├── ItemSystem.md        # 物品系统
│   ├── UnitPropertySystem.md # 单位属性系统
│   └── LoggingSystem.md     # 日志系统
├── ai/                 # AI开发文档
│   ├── README.md       # AI文档入口
│   └── development/    # AI开发指南
│       ├── AI_DEVELOPMENT_GUIDE.md  # AI开发指南
│       └── AI_FRIENDLY_UI_API.md    # AI友好的UI API
└── tools/              # 工具文档
    ├── EnumExtension.md # 枚举扩展工具
    └── DebugCheatSystem.md # 调试作弊系统
```

## 🚀 快速导航

### 📖 新手入门
- [快速开始](guides/QuickStart.md) - 框架入门教程
- [项目结构](guides/ProjectStructure.md) - 了解项目组织
- [框架概述](FRAMEWORK_OVERVIEW.md) - 整体架构介绍

### 🎯 核心文档
- [API参考](API_REFERENCE.md) - 完整API文档
- [编码规范](CONVENTIONS.md) - 代码风格指南
- [系统架构](systems/) - 各系统详细说明

### 🤖 AI开发
- [AI开发文档](ai/) - AI功能开发专区
- [AI开发指南](ai/development/AI_DEVELOPMENT_GUIDE.md) - AI系统开发指南
- [AI友好UI API](ai/development/AI_FRIENDLY_UI_API.md) - 流式布局API

### 🛠️ 开发工具
- [调试作弊系统](tools/DebugCheatSystem.md) - 开发调试工具
- [枚举扩展](tools/EnumExtension.md) - 枚举增强功能

## 🏗️ 构建文档

### 自动构建（推荐）

运行根目录下的批处理文件：

```bash
# 构建完整文档
./build-docs.bat

# 启动本地文档服务器
./serve-docs.bat
```

### 手动构建

如果您想手动控制构建过程：

```bash
# 1. 确保安装了 DocFx
dotnet tool install -g docfx

# 2. 构建客户端项目
dotnet build -c Client-Debug

# 3. 构建服务端项目  
dotnet build -c Server-Debug

# 4. 生成API元数据
docfx metadata

# 5. 构建文档网站
docfx build

# 6. 启动本地服务器
docfx serve _site
```

## 🎯 文档特性

### 客户端/服务端分离

本文档系统专门针对 WasiCore 框架的客户端/服务端分离架构设计：

- **客户端 API** - 包含客户端相关的类和接口
- **服务端 API** - 包含服务端相关的类和接口

### 构建配置支持

支持框架的所有构建配置：

#### 客户端配置
- `Client-Debug` - 客户端调试版本（默认用于文档生成）
- `Client-Release` - 客户端发布版本
- `Client-Wasm` - 客户端 WebAssembly 版本

#### 服务端配置
- `Server-Debug` - 服务端调试版本（默认用于文档生成）
- `Server-Release` - 服务端发布版本
- `Server-Wasm` - 服务端 WebAssembly 版本

### API 过滤

文档系统会自动过滤掉：
- 系统内置命名空间（System.*、Microsoft.*）
- 标记为过时的API（ObsoleteAttribute）
- 标记为编辑器隐藏的API（EditorBrowsableAttribute.Never）

## 📝 编写文档

### Markdown 支持

所有文档都使用 Markdown 格式编写，支持：
- 标准 Markdown 语法
- 代码高亮
- 表格
- 链接和引用
- 图片嵌入

### API 文档注释

在代码中使用 XML 文档注释来为 API 提供文档：

```csharp
/// <summary>
/// 执行游戏逻辑更新
/// </summary>
/// <param name="deltaTime">自上次更新以来的时间间隔</param>
/// <returns>更新是否成功</returns>
public bool Update(float deltaTime)
{
    // 实现代码
}
```

### 交叉引用

可以在文档中引用其他类和方法：

```markdown
参见 <xref:GameCore.EntitySystem.Entity> 类了解更多信息。

使用 <xref:GameCore.EntitySystem.Entity.Update*> 方法来更新实体。
```

## 🔄 持续集成

文档构建可以集成到 CI/CD 流程中：

1. 在构建服务器上安装 DocFx
2. 运行 `build-docs.bat` 脚本
3. 将生成的 `_site` 目录部署到文档服务器

## 🎨 自定义样式

如需自定义文档外观，可以：

1. 创建自定义模板
2. 修改 CSS 样式
3. 添加自定义 JavaScript

详情请参考 [DocFx 官方文档](https://dotnet.github.io/docfx/)。

## 💡 提示和技巧

### 性能优化

- 使用增量构建减少构建时间
- 缓存构建输出以加快后续构建
- 只在必要时重新生成 API 元数据

### 维护建议

- 保持文档与代码同步
- 定期检查文档链接的有效性
- 使用一致的写作风格和术语

### 故障排除

如果遇到构建问题：

1. 检查 .NET 项目是否能正常编译
2. 确认所有必需的 Configuration 都存在
3. 检查 docfx.json 配置文件的语法
4. 查看构建日志中的详细错误信息

---

*如有问题或建议，请联系开发团队。*

## 📋 文档导航

### 🏗️ 框架核心
- [框架概述](FRAMEWORK_OVERVIEW.md) - 架构设计和核心概念
- [API 参考](API_REFERENCE.md) - 完整的 API 文档
- [编码规范](CONVENTIONS.md) - 命名规范和设计模式

### 🎮 系统文档
- [🎯 GameData 数据驱动系统](systems/GameDataSystem.md) - **核心** 数据与逻辑解耦架构
- [🎯 单位系统](systems/UnitSystem.md) - **核心** 游戏单位管理和同步机制
- [🎮 指令系统](systems/OrderSystem.md) - **核心** 玩家操作和AI行为指令处理
- [⚡ 技能系统](systems/AbilitySystem.md) - **核心** 技能配置、施法时间控制和攻击技能
- [🌟 Buff系统](systems/BuffSystem.md) - **核心** 临时效果和状态变更管理
- [📦 物品系统](systems/ItemSystem.md) - **核心** 装备、消耗品和容器管理
- [📋 单位属性系统](systems/UnitPropertySystem.md) - 属性管理和同步机制
- [📝 日志系统](systems/LoggingSystem.md) - 统一日志记录和调试机制
- [🏗️ 实体系统](systems/EntitySystem.md) - 实体生命周期管理
- [📡 事件系统](systems/EventSystem.md) - 事件发布订阅机制
- [🤖 AI系统](systems/AISystem.md) - NPC 行为和决策系统

### 🛠️ 开发指南
- [快速开始](guides/QuickStart.md) - 新手入门指南
- [项目结构](guides/ProjectStructure.md) - 解决方案结构说明
- [构建部署](guides/BuildAndDeploy.md) - 构建和部署流程
- [测试指南](guides/Testing.md) - 单元测试和集成测试

### 🔧 工具和扩展
- [代码生成器](tools/CodeGenerator.md) - 自动代码生成工具
- [枚举扩展](tools/EnumExtension.md) - 枚举扩展机制
- [性能分析](tools/Profiling.md) - 性能监控和优化

### 📝 最佳实践
- [🔄 异步编程](best-practices/AsyncProgramming.md) - **重要** WebAssembly环境异步编程指南
- [架构模式](best-practices/ArchitecturePatterns.md) - 推荐的架构模式
- [性能优化](best-practices/PerformanceOptimization.md) - 性能优化建议
- [内存管理](best-practices/MemoryManagement.md) - 内存使用最佳实践

## 🔗 外部资源

- [.NET 9.0 文档](https://docs.microsoft.com/dotnet/)
- [MessagePack 文档](https://github.com/MessagePack-CSharp/MessagePack-CSharp)
- [WebAssembly 文档](https://webassembly.org/getting-started/developers-guide/)

## 📄 文档贡献

如需更新或添加文档，请参考 [编码规范](CONVENTIONS.md) 中的文档编写指南。 