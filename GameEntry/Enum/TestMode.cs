namespace GameEntry.Enum;
public enum TestMode
{
    NormalTest,
    JoystickTest,
    FlappyBird,
    VampireSurvivors,
}


public static class TestModeSelector
{
    /// <summary>
    /// 用于切换当前测试的模式。
    /// </summary>
    internal static TestMode TestMode => TestMode.FlappyBird;
}