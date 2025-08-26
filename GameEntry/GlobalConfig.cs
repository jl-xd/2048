using GameCore.GameSystem.Data;

namespace GameEntry;

public class GlobalConfig : IGameClass
{
    public static void OnRegisterGameClass()
    {
        // Register the game mod for the game system.
        // in non-testing (online) mode, the server will send game mode strings to the engine,
        // and the engine will use this to determine which game mode to use.
        GameDataGlobalConfig.AvailableGameModes = new()
        {
            {"", GameCore.ScopeData.GameMode.Default},
            {"VampireSurvivors3D", ScopeData.GameMode.VampireSurvivors3D},
            {"VampireSurvivors2D", ScopeData.GameMode.VampireSurvivors2D},
            {"FlappyBird", ScopeData.GameMode.FlappyBird},
            {"JoyStickTest", ScopeData.GameMode.JoyStickTest},
            {"TypedMessageTest", ScopeData.GameMode.TypedMessageTest},
            {"Gomoku", ScopeData.GameMode.Gomoku},
            {"UserCloudDataTest", ScopeData.GameMode.UserCloudDataTest},
            {"AISystemTest", ScopeData.GameMode.AISystemTest},
            {"ModernUITest", ScopeData.GameMode.ModernUITest},
            {"PrimitiveShapeTest", ScopeData.GameMode.PrimitiveShapeTest},
            {"Game2048", ScopeData.GameMode.Game2048},
        };
        // Set the default game mode for testing, this will be used when the game is in testing mode.
        GameDataGlobalConfig.TestGameMode = ScopeData.GameMode.Game2048;
        // Set the single-player test slot ID, this defines which player slot the local player will use in
        // single-player testing mode.
        GameDataGlobalConfig.SinglePlayerTestSlotId = 1;
    }
}