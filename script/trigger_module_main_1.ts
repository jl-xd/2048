module p_0tja {
	function _TRIG_克里夫_FUNC(this: void, 当前触发器: Trigger, e:base.EventGameStart) {
		let 新变量: RegionRect = base.rect(base.scene_point(1000, 10000, 0, Scene["default"]), 500, 500, Scene["default"]);
		let 新变量_1: RegionCircle = base.circle(base.scene_point(1000, 10000, 0, Scene["default"]), 500, Scene["default"]);
		if (true) {
		}
	}
	export let 克里夫 = base.trigger_new((this: void, 当前触发器: Trigger, e:base.EventGameStart) => { _TRIG_克里夫_FUNC(当前触发器, e) }, [], false, undefined, true)
	//以下为转发事件
	//为触发器添加事件
	克里夫.add_event_common({ obj: ((base.game) as unknown as base.Game), event_name: "游戏-开始" })
}
