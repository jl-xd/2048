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

cd ..

echo "📦 部署DLL文件..."
mkdir -p ui/AppBundle/managed
mkdir -p AppBundle/managed

cp GameEntry/bin/Client-Debug/net9.0/GameEntry.dll ui/AppBundle/managed/
cp GameEntry/bin/Server-Debug/net9.0/GameEntry.dll AppBundle/managed/

echo "✅ 客户端DLL -> ui/AppBundle/managed/"
echo "✅ 服务端DLL -> AppBundle/managed/"

echo "======================================"
echo "🎉 编译和部署完成\!"
echo "现在可以启动WasiAsync框架运行游戏了"
echo "======================================"
SCRIPT_END < /dev/null
