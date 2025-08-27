#\!/bin/bash

echo "======================================"
echo "🎮 Game2048 编译和部署脚本"
echo "======================================"

if [ \! -f "GameEntry/GameEntry.csproj" ]; then
    echo "❌ 错误: 请在WasiTestMap根目录下运行此脚本"
    exit 1
fi

cd GameEntry

echo "📱 编译客户端..."
dotnet build --configuration Client-Debug --verbosity minimal
echo "✅ 客户端编译完成"

echo "🖥️  编译服务端..."
dotnet build --configuration Server-Debug --verbosity minimal  
echo "✅ 服务端编译完成"

