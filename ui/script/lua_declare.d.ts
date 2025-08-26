declare const enum Scene {
	/** 初始地图 */
	["default"] = "default",
}
declare const enum 游戏属性 {
}
declare const enum 技能属性 {
}
declare const enum Buff分类 {
	["正面效果"] = "正面效果",
	["位移效果"] = "位移效果",
	["控制效果"] = "控制效果",
	["负面效果"] = "负面效果",
	["持续性治疗"] = "持续性治疗",
	["持续性伤害"] = "持续性伤害",
}
declare const enum 伤害类型 {
}
declare const enum 单位标签 {
	["自动复活"] = "自动复活",
}
declare const enum 单位状态 {
}
declare const enum 技能分类 {
}
declare const enum 单位属性 {
	["复活时间"] = "复活时间",
	["金币"] = "金币",
}
declare const enum 玩家属性 {
}
declare const enum 单位字符串属性 {
}
declare const enum 游戏选项 {
}
declare const enum 单位属性子类型 {
}
declare const enum 血条类型 {
}
declare const enum 能量类型 {
}
declare const enum 验证器代码 {
}

/** 
 * @name 局外资源-数量 */
declare class _OBJ_smallcard_get_items_lobby_resource_count extends DataCache{
	/** 
	 * @name 数量 */
	Count:number;
	/** 
	 * @name 局外资源 */
	LobbyResource:IdPreset<"lobby_resource_id">;
	constructor()
}

/** 
 * @name 装备属性显示格式 */
declare class _OBJ_smallcard_inventory_EquipAttributeFormat extends DataCache{
	/** 
	 * @name 属性类型 */
	Attribute:_OBJ__UnitAttribute;
	/** 
	 * @name 属性显示格式 */
	Format:_OBJ_smallcard_inventory_AttributeFormat;
	constructor()
}

/** 
 * @name 移动摇杆GUI事件 */
declare class _OBJ_lib_control_移动摇杆GUIEvent extends DataCache{
	/** 
	 * @name 移动摇杆松开
	 * @tips 移动摇杆松开 */
	on_vj_release:(this: void, )=>void;
	/** 
	 * @name 移动摇杆结束移动
	 * @tips 移动摇杆结束移动 */
	on_vj_move_end:(this: void, )=>void;
	/** 
	 * @name 移动摇杆开始移动
	 * @tips 移动摇杆开始移动 */
	on_vj_move_start:(this: void, )=>void;
	/** 
	 * @name 移动摇杆移动
	 * @tips 移动摇杆移动 */
	on_vj_move:(this: void, )=>void;
	/** 
	 * @name 移动摇杆按下
	 * @tips 移动摇杆按下 */
	on_vj_press:(this: void, )=>void;
	constructor()
}

/** 
 * @name 技能摇杆GUI事件 */
declare class _OBJ_lib_control_技能摇杆GUIEvent extends DataCache{
	/** 
	 * @name 技能摇杆松开
	 * @tips 技能摇杆松开 */
	on_vj_release:(this: void, )=>void;
	/** 
	 * @name 技能摇杆结束移动
	 * @tips 技能摇杆结束移动 */
	on_vj_move_end:(this: void, )=>void;
	/** 
	 * @name 技能摇杆开始移动
	 * @tips 技能摇杆开始移动 */
	on_vj_move_start:(this: void, )=>void;
	/** 
	 * @name 技能摇杆变为松开状态
	 * @tips 技能摇杆松开 */
	on_up:(this: void, )=>void;
	/** 
	 * @name 技能摇杆按下
	 * @tips 技能摇杆按下 */
	on_vj_press:(this: void, )=>void;
	/** 
	 * @name 技能摇杆变为按下状态
	 * @tips 技能摇杆按下 */
	on_down:(this: void, )=>void;
	/** 
	 * @name 技能摇杆移动
	 * @tips 技能摇杆移动 */
	on_vj_move:(this: void, )=>void;
	constructor()
}

/** 
 * @name 局外资源-获得 */
declare class _OBJ_smallcard_get_items_lobby_resource_gain_Lobby_Resource_Gain extends _OBJ__lobby_resource_gain_lobby_resource_gain{
	/** 
	 * @name 数量 */
	Count:number;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 局外资源 */
	LobbyResource:IdPreset<"lobby_resource_id">;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"lobby_resource_gain_id">;
	constructor()
}

/** 
 * @name 技能摇杆快捷键配置 */
declare class _OBJ_lib_control_shortcut_config_shortcut_config extends _OBJ__shortcut_config_shortcut_config{
	/** 
	 * @name 技能摇杆快捷键
	 * @tips 最大的攻击按钮的序号为1，剩下的技能从下到上依次排序为2、3、4等。
	 * 如果技能的数编中配置了快捷键，会优先使用技能快捷键。
	 * 如果某个位置的技能快捷键没有设置，那么就会从1开始自动设置
	 * （例如：在节点中只配置了1、2、3、4，并且值为Q、W、E、2,那么如果存在第五个技能，技能的快捷键将会是1，第六个技能的快捷键是3） */
	Keys:Array<_OBJ__SpellHotkeys>;
	/** 
	 * @name 名称
	 * @tips 节点名 */
	Name:string;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"shortcut_config_id">;
	constructor()
}

/** 
 * @name 局外资源-获得组 */
declare class _OBJ_smallcard_get_items_lobby_resource_gain_group_Lobby_Resource_Gain_Group extends _OBJ__lobby_resource_gain_group_lobby_resource_gain_group{
	/** 
	 * @name 局外资源-获得组 */
	Array:Array<IdPreset<"lobby_resource_gain_id">>;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"lobby_resource_gain_group_id">;
	constructor()
}

/** 
 * @name 纯描述途径 */
declare class _OBJ_smallcard_get_items_lobby_resource_waytoget_Waytoget extends _OBJ__lobby_resource_waytoget_lobby_resource_waytoget{
	/** 
	 * @name 获取途径名称 */
	Name:string;
	/** 
	 * @name 获取途径描述 */
	WayDesc:string;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"lobby_resource_waytoget_id">;
	constructor()
}

/** 
 * @name 局外资源 */
declare class _OBJ_smallcard_get_items_lobby_resource_Lobby_Resource extends _OBJ__lobby_resource_lobby_resource{
	/** 
	 * @name 图标 */
	Icon:string;
	/** 
	 * @name 稀有度 */
	Rare:number;
	/** 
	 * @name 物品类型
	 * @tips 非物品类之前可以设置显示相关的，名字啊图标啊什么的，打算废弃掉，专门给物品类型用 */
	ItemType:IdPreset<"item_id">;
	/** 
	 * @name 显示名 */
	Name:string;
	/** 
	 * @name 小图标 */
	SmallIcon:string;
	/** 
	 * @name 资源描述 */
	Desc:string;
	/** 
	 * @name 自定义参数列表 */
	CustomParams:Array<IdPreset<"link_node_id">>;
	/** 
	 * @name 获取途径 */
	WayToGet:Array<IdPreset<"lobby_resource_waytoget_id">>;
	/** 
	 * @name 唯一标识名
	 * @tips 废弃 */
	IdName:string;
	/** 
	 * @name 数量
	 * @tips 除了老签到库和老抽奖库这种非蓝图根节点的节点类型，不应该使用这个字段，后续会隐藏，这里务必填默认值 */
	Count:number;
	/** 
	 * @name 货币云变量名
	 * @tips 货币类型云变量名 */
	TokenName:string;
	/** 
	 * @name 局外资源类型 */
	LobbyResourceType:_OBJ_smallcard_get_items_LobbyResourceType;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"lobby_resource_id">;
	/** 
	 * @name 自定义类型资源消耗函数
	 * @noSelf */
	CustomCostHandler:(this: void, 玩家:Player, 提交请求:ScoreCommitter, 资源:string, 数量:number, 外部参数:string)=>[smallcard_get_items.lobby_resource_instance]
	/** 
	 * @name 自定义类型资源获取函数
	 * @noSelf */
	CustomGetHandler:(this: void, 玩家:Player, 提交请求:ScoreCommitter, 资源:string, 数量:number, 外部参数:string)=>[smallcard_get_items.lobby_resource_instance]
	constructor()
}

/** 
 * @name 品质信息 */
declare class _OBJ_smallcard_inventory_inventory_config_Quality_Color extends _OBJ__inventory_config_inventory_config{
	/** 
	 * @name 颜色
	 * @tips 颜色 */
	Color:string;
	/** 
	 * @name 外框
	 * @tips 外框 */
	Frame:string;
	/** 
	 * @name 名称
	 * @tips 节点名 */
	Name:string;
	/** 
	 * @name 表现 */
	ActorArray:Array<IdPreset<"actor_id">>;
	/** 
	 * @name 物品类型
	 * @tips 物品类型 */
	ClassLink:IdPreset<"item_class_id">;
	/** 
	 * @name 背景图片
	 * @tips 品质在icon底部的图片 */
	Background:string;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"inventory_config_id">;
	constructor()
}

/** 
 * @name 通用背包配置 */
declare class _OBJ_smallcard_inventory_inventory_config_Inventory_Config extends _OBJ__inventory_config_inventory_config{
	/** 
	 * @name 使用默认拾取UI
	 * @tips 使用默认拾取UI */
	EnableInteractUI:boolean;
	/** 
	 * @name 品质与颜色定义
	 * @tips 品质与颜色定义 */
	QualityColor:Array<undefined>;
	/** 
	 * @name 物品拾取距离
	 * @tips 物品拾取距离 */
	InteractRange:number;
	/** 
	 * @name 局内背包物品类型筛选
	 * @tips 局内背包物品类型筛选 */
	Filters:Array<IdPreset<"item_class_id">>;
	/** 
	 * @name 启用默认拾取功能
	 * @tips 启用默认拾取功能 */
	EnableInteract:boolean;
	/** 
	 * @name 显示拖动丢弃区
	 * @tips 显示拖动丢弃区 */
	ShowDropArea:boolean;
	/** 
	 * @name 部位分类定义
	 * @tips 部位分类定义 */
	TypeFilters:Array<IdPreset<"item_class_id">>;
	/** 
	 * @name 无品质配置时的物品外框
	 * @tips 无品质配置时的物品外框 */
	Default_Frame:string;
	/** 
	 * @name 显示局内背包入口按钮
	 * @tips 显示局内背包入口按钮 */
	ShowDefaultEntrance:boolean;
	/** 
	 * @name 名称
	 * @tips 节点名 */
	Name:string;
	/** 
	 * @name 启用高级V2
	 * @tips 启用高级V2 */
	V2Special:boolean;
	/** 
	 * @name 定义为"装备"的物品类型
	 * @tips 定义为"装备"的物品类型 */
	EquipTypes:Array<IdPreset<"item_class_id">>;
	/** 
	 * @name 拾取UI根据品质排序
	 * @tips 拾取UI根据品质排序 */
	EnableInteractUISortByQuality:boolean;
	/** 
	 * @name 高级
	 * @tips 高级 */
	Special:string;
	/** 
	 * @name 显示快捷栏锁定按钮
	 * @tips 显示快捷栏锁定按钮 */
	ShowQuickBarLock:boolean;
	/** 
	 * @name 角色剪影
	 * @tips 显示在装备栏的角色剪影图片(图片比例275:546) */
	Character:string;
	/** 
	 * @name 显示快捷栏收起按钮
	 * @tips 显示快捷栏收起按钮 */
	ShowQuickBarCollapse:boolean;
	/** 
	 * @name 拾取物品时动效显示
	 * @tips 拾取物品后使用新版动效代替原先的拾取成功提示 */
	PickToastEffect:boolean;
	/** 
	 * @name 启用局内背包
	 * @tips 启用局内背包 */
	EnableInGameInventory:boolean;
	/** 
	 * @name 装备属性显示格式
	 * @tips 装备属性显示格式 */
	EquipAttributeFormat:Array<_OBJ_smallcard_inventory_EquipAttributeFormat>;
	/** 
	 * @name 显示剪影
	 * @tips 显示剪影 */
	ShowCharacter:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"inventory_config_id">;
	constructor()
}

/** 
 * @name 移动摇杆 */
declare class _OBJ_lib_control_gui_ctrl_移动摇杆 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name vj_auto_move */
	vj_auto_move:boolean;
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name vj_slider_height */
	vj_slider_height:number;
	/** 
	 * @name vj_move_radius */
	vj_move_radius:number;
	/** 
	 * @name toggle_show */
	toggle_show:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name vj_stop_percent */
	vj_stop_percent:number;
	/** 
	 * @name vj_move_ratio */
	vj_move_ratio:number;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name direction_offset */
	direction_offset:number;
	/** 
	 * @name vj_is_press_center */
	vj_is_press_center:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name direction_image */
	direction_image:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name vj_slow_percent */
	vj_slow_percent:number;
	/** 
	 * @name slider_size */
	slider_size:number;
	/** 
	 * @name slider_bg_image */
	slider_bg_image:string;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name vj_is_main_slider */
	vj_is_main_slider:boolean;
	/** 
	 * @name vj_active_percent */
	vj_active_percent:number;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name slider_relative_x */
	slider_relative_x:number;
	/** 
	 * @name vj_slider_width */
	vj_slider_width:number;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name vj_press_region_type */
	vj_press_region_type:number;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name slow_rate */
	slow_rate:number;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name slider_image */
	slider_image:string;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name event */
	event:_OBJ_lib_control_移动摇杆GUIEvent;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name is_main_slider */
	is_main_slider:boolean;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name vj_toggle_show */
	vj_toggle_show:boolean;
	/** 
	 * @name slider_mini_image */
	slider_mini_image:string;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name slider_relative_y */
	slider_relative_y:number;
	/** 
	 * @name vj_is_release_reset */
	vj_is_release_reset:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 技能摇杆 */
declare class _OBJ_lib_control_gui_ctrl_技能摇杆 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 摇杆面板缩放 */
	vj_panel_scale:number;
	/** 
	 * @name 摇杆底图 */
	cast_slider_panel:string;
	/** 
	 * @name 消耗不足状态 */
	skill_insufficient:string;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 按下时按钮框 */
	skill_click:string;
	/** 
	 * @name 锁定时技能框 */
	skill_locked:string;
	/** 
	 * @name 冷却时是否可按下 */
	can_press_on_cool:boolean;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 感应区域形状 */
	press_region_type:number;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 摇杆模式 */
	is_vj_center:boolean;
	/** 
	 * @name 默认按钮框 */
	skill_normal:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 激活比例 */
	active_percent:number;
	/** 
	 * @name 摇杆禁止施法底图 */
	cast_slider_panel_disable:string;
	/** 
	 * @name 保持在屏幕中时的屏幕边缘 */
	vj_panel_crop_margin:number;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 图标蒙版 */
	skill_icon_mask:string;
	/** 
	 * @name 层数底图 */
	skill_stack_bg:string;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 中心区域比例 */
	center_ratio:number;
	/** 
	 * @name 绑定快捷键 */
	key:_OBJ__SpellHotkeys;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 充能进度图 */
	skill_charge_cool:string;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 主摇杆图 */
	cast_slider:string;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name event */
	event:_OBJ_lib_control_技能摇杆GUIEvent;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 绑定的技能 */
	skill:Skill;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 快捷键区域底图 */
	shortcut_key_bg:string;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 禁用状态 */
	skill_silent:string;
	/** 
	 * @name 失效时按钮框 */
	skill_disable:string;
	/** 
	 * @name 外圈比例 */
	outer_ratio:number;
	/** 
	 * @name 冷却进度图 */
	skill_cool:string;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 开启时按钮框 */
	skill_toggleon:string;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 拾取最近物品按钮 */
declare class _OBJ_smallcard_inventory_gui_ctrl_拾取最近物品按钮 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 拾取列表 */
declare class _OBJ_smallcard_inventory_gui_ctrl_拾取列表 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 可附着面板 */
declare class _OBJ_gameui_gui_ctrl_attachable_panel extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 附着的单位消失时是否隐藏 */
	hide_on_unit_invisible:boolean;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 绑点名 */
	socket_name:string;
	/** 
	 * @name 是否根据单位距离自动缩放 */
	scale_by_distance:boolean;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 附着的单位 */
	_attach_unit:Unit;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name Buff列表 */
declare class _OBJ_gameui_gui_ctrl_Buff列表 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name Buff间隔 */
	buff_margin:number;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name Buff图标模版 */
	buff_icon_template:string;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name Buff高度 */
	buff_height:number;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 预览用负面极性Buff个数 */
	default_neg_cnt:number;
	/** 
	 * @name Buff图标模板 */
	buff_icon:string;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name Buff分类过滤 */
	buff_cat_filter:string;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 绑定的单位 */
	unit:Unit;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name Buff极性 */
	buff_polarity:string;
	/** 
	 * @name 预览用无极性Buff个数 */
	default_none_cnt:number;
	/** 
	 * @name Buff宽度 */
	buff_width:number;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 预览用正面极性Buff个数 */
	default_pos_cnt:number;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 简易UI图片 */
declare class _OBJ_gameui_gui_ctrl_simpleui_picture extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 点击 */
	can_be_clicked:boolean;
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 不透明度 */
	opacity:number;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 变焦 */
	zoom_type:string;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 图片 */
	image:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 显示 */
	visiblity:boolean;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 交互摇杆 */
declare class _OBJ_lib_control_gui_ctrl_交互摇杆 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 摇杆面板缩放 */
	vj_panel_scale:number;
	/** 
	 * @name 摇杆底图 */
	cast_slider_panel:string;
	/** 
	 * @name 消耗不足状态 */
	skill_insufficient:string;
	/** 
	 * @name 开启时按钮框 */
	skill_toggleon:string;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 按下时按钮框 */
	skill_click:string;
	/** 
	 * @name 锁定时技能框 */
	skill_locked:string;
	/** 
	 * @name 冷却时是否可按下 */
	can_press_on_cool:boolean;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 感应区域形状 */
	press_region_type:number;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 摇杆模式 */
	is_vj_center:boolean;
	/** 
	 * @name 默认按钮框 */
	skill_normal:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 摇杆禁止施法底图 */
	cast_slider_panel_disable:string;
	/** 
	 * @name 保持在屏幕中时的屏幕边缘 */
	vj_panel_crop_margin:number;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 激活比例 */
	active_percent:number;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 图标蒙版 */
	skill_icon_mask:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 层数底图 */
	skill_stack_bg:string;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 中心区域比例 */
	center_ratio:number;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 充能进度图 */
	skill_charge_cool:string;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 主摇杆图 */
	cast_slider:string;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name event */
	event:_OBJ_lib_control_技能摇杆GUIEvent;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 绑定的技能 */
	skill:Skill;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 快捷键区域底图 */
	shortcut_key_bg:string;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 禁用状态 */
	skill_silent:string;
	/** 
	 * @name 失效时按钮框 */
	skill_disable:string;
	/** 
	 * @name 外圈比例 */
	outer_ratio:number;
	/** 
	 * @name 冷却进度图 */
	skill_cool:string;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 中止施法区域 */
declare class _OBJ_lib_control_gui_ctrl_中止施法区域 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 取消施法区域图片 */
	image:string;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 输入框 */
declare class _OBJ_gameui_gui_ctrl_input_paste extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 字体大小 */
	font_size:number;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 占位文本颜色 */
	font_placeholder_color:string;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 输入文字事件
	 * @tips 已不可获得文字内容，只可响应事件 */
	on_input:(this: void, arg1:string)=>void;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 字体 */
	font_family:string;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 横向对齐方式 */
	font_align:string;
	/** 
	 * @name 字体颜色 */
	font_color:string;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 占位符 */
	placeholder:string;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 显示文本 */
	text_input:string;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 技能摇杆组 */
declare class _OBJ_lib_control_gui_ctrl_技能摇杆组 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 摇杆面板缩放 */
	vj_panel_scale:number;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 摇杆底图 */
	cast_slider_panel:string;
	/** 
	 * @name 消耗不足状态 */
	skill_insufficient:string;
	/** 
	 * @name 开启时按钮框 */
	skill_toggleon:string;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 按下时按钮框 */
	skill_click:string;
	/** 
	 * @name 锁定时技能框 */
	skill_locked:string;
	/** 
	 * @name 冷却时是否可按下 */
	can_press_on_cool:boolean;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 感应区域形状 */
	press_region_type:number;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 自动绑定快捷键 */
	auto_bind_key:boolean;
	/** 
	 * @name 摇杆模式 */
	is_vj_center:boolean;
	/** 
	 * @name 默认按钮框 */
	skill_normal:string;
	/** 
	 * @name 攻击技能位置x */
	attack_x:number;
	/** 
	 * @name 分布角度范围 */
	total_angle_delta:number;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 快捷键区域底图 */
	shortcut_key_bg:string;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 外圈比例 */
	outer_ratio:number;
	/** 
	 * @name 摇杆禁止施法底图 */
	cast_slider_panel_disable:string;
	/** 
	 * @name 保持在屏幕中时的屏幕边缘 */
	vj_panel_crop_margin:number;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 禁用状态 */
	skill_silent:string;
	/** 
	 * @name 最大显示技能数 */
	max_skill_count:number;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 攻击技能按钮大小 */
	attack_button_size:number;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 层数底图 */
	skill_stack_bg:string;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 充能进度图 */
	skill_charge_cool:string;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 激活比例 */
	active_percent:number;
	/** 
	 * @name 主摇杆图 */
	cast_slider:string;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 基准位置x */
	base_x:number;
	/** 
	 * @name 基准位置y */
	base_y:number;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 攻击技能位置y */
	attack_y:number;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 分布初始角度 */
	init_angle:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 技能按钮大小 */
	button_size:number;
	/** 
	 * @name 默认攻击按钮图 */
	skill_attack_normal:string;
	/** 
	 * @name 失效时按钮框 */
	skill_disable:string;
	/** 
	 * @name 图标蒙版 */
	skill_icon_mask:string;
	/** 
	 * @name 冷却进度图 */
	skill_cool:string;
	/** 
	 * @name 中心区域比例 */
	center_ratio:number;
	/** 
	 * @name 最小环绕距离 */
	min_around_dis:number;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 摇杆 */
declare class _OBJ_lib_control_gui_ctrl_摇杆 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name vj_main_move_radius */
	vj_main_move_radius:number;
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name vj_main_image */
	vj_main_image:string;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name vj_relative_y */
	vj_relative_y:number;
	/** 
	 * @name vj_relative_x */
	vj_relative_x:number;
	/** 
	 * @name vj_bg_toggle_show */
	vj_bg_toggle_show:boolean;
	/** 
	 * @name vj_main_size */
	vj_main_size:number;
	/** 
	 * @name vj_active_percent */
	vj_active_percent:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name vj_press_region_type */
	vj_press_region_type:number;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name vj_bg_image */
	vj_bg_image:string;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name event */
	event:_OBJ_lib_control_移动摇杆GUIEvent;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name vj_main_toggle_show */
	vj_main_toggle_show:boolean;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name vj_main_move_ratio */
	vj_main_move_ratio:number;
	/** 
	 * @name vj_size */
	vj_size:number;
	/** 
	 * @name vj_is_press_center */
	vj_is_press_center:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name vj_is_release_reset */
	vj_is_release_reset:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name Buff图标 */
declare class _OBJ_gameui_gui_ctrl_Buff图标 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name Buff间隔 */
	buff_margin:number;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name Buff高度 */
	buff_height:number;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 预览用图标 */
	buff_icon:string;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 无极性外框颜色 */
	buff_bg_none_color:string;
	/** 
	 * @name 负面极性外框颜色 */
	buff_bg_neg_color:string;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 正面极性外框颜色 */
	buff_bg_pos_color:string;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name Buff宽度 */
	buff_width:number;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 无极性CD样式 */
	buff_none_progress_type:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 数字大小 */
	font_size:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 绑定的Buff */
	buff:Buff;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 负面极性CD样式 */
	buff_neg_progress_type:string;
	/** 
	 * @name 正面极性CD样式 */
	buff_pos_progress_type:string;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 预制面板 */
declare class _OBJ_gameui_gui_ctrl_normal_rect extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name style */
	style:string;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 是否显示花纹 */
	is_decoration:boolean;
	/** 
	 * @name decoration_layout_right */
	decoration_layout_right:_OBJ__GUILayout;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name decoration_layout_left */
	decoration_layout_left:_OBJ__GUILayout;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name decoration_image */
	decoration_image:string;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 自定义背包格子 */
declare class _OBJ_smallcard_inventory_gui_ctrl_自定义背包格子 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 拖拽模式 */
	drop_mode:_OBJ__DropMode;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 物品栏格子 */
	slot:Slot;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 进度条 */
declare class _OBJ_gameui_gui_ctrl_progress extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name progress_bg_image */
	progress_bg_image:string;
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name name */
	description:string;
	/** 
	 * @name default_box_margin */
	default_box_margin:number;
	/** 
	 * @name is_name_show */
	is_name_show:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name name_show */
	name_show:boolean;
	/** 
	 * @name progress_image */
	progress_image:string;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name progress_width */
	progress_width:number;
	/** 
	 * @name default_name_width */
	default_name_width:number;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name name_pos_prop */
	name_pos_prop:string;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name progress_type */
	progress_type:string;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name name_height_prop */
	name_height_prop:number;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name name_width */
	name_width:number;
	/** 
	 * @name 当前值 */
	value:number;
	/** 
	 * @name progress_height */
	progress_height:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name progress_color */
	progress_color:string;
	/** 
	 * @name is_merge_text */
	is_merge_text:boolean;
	/** 
	 * @name progress_bg_color */
	progress_bg_color:string;
	/** 
	 * @name is_name_show_real */
	is_name_show_real:boolean;
	/** 
	 * @name progress_text_show */
	progress_text_show:boolean;
	/** 
	 * @name 最大值 */
	value_max:number;
	/** 
	 * @name name_width_prop */
	name_width_prop:number;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 消息框 */
declare class _OBJ_gameui_gui_ctrl_msgbox extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 按钮个数 */
	style:number;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 图标图片 */
	msgbox_icon_image:string;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 按下按钮 */
	on_press_btn:(this: void, )=>void;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 否定事件 */
	on_no:(this: void, )=>void;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 显示图标 */
	is_show_icon:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 取消事件 */
	on_cancel:(this: void, )=>void;
	/** 
	 * @name 通知框文本 */
	msgbox_text:string;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 确定事件 */
	on_yes:(this: void, )=>void;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 背景图片 */
	msgbox_image:string;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 模块背包 */
declare class _OBJ_smallcard_inventory_gui_ctrl_模块背包 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name parameter */
	parameter:string;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name inv_link */
	inv_link:string;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 背包入口 */
declare class _OBJ_smallcard_inventory_gui_ctrl_背包入口 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 动态按钮 */
declare class _OBJ_gameui_gui_ctrl_active_button extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 选中图片 */
	active_image:string;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 动效速度
	 * @tips 动效速度 */
	effect_speed:number;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 选中颜色
	 * @tips 按下时的控件颜色 */
	click_color:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 动效
	 * @tips 鼠标指向控件时的表现 */
	Asset:string;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 点击缩放
	 * @tips 点击时控件缩小的比例 */
	click_scale:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 选中透明度
	 * @tips 按下时的控件透明度 */
	click_opacity:number;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 预制按钮 */
declare class _OBJ_gameui_gui_ctrl_normal_btn extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 激活图片 */
	active_image:string;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 文字颜色 */
	text_color:string;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 文字内容 */
	text:string;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 文字透明度 */
	text_opacity:number;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 拾取按钮 */
declare class _OBJ_smallcard_inventory_gui_ctrl_拾取按钮 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 简易UI按钮 */
declare class _OBJ_gameui_gui_ctrl_simpleui_button extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 点击 */
	can_be_clicked:boolean;
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 文字 */
	text:string;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 显示 */
	visiblity:boolean;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 按钮图标 */
declare class _OBJ_gameui_gui_ctrl_btn_icon extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name icon */
	icon:string;
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name is_on */
	is_on:boolean;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name is_switch */
	is_switch:boolean;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/**  */
declare class _OBJ_lib_game_options_gui_ctrl_设置按钮 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 显示多语言 */
	show_localization_panel:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 消息框按钮 */
declare class _OBJ_gameui_gui_ctrl_msgbox_btn extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 图标图片 */
	icon_image:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 文字 */
	text:string;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 按钮图片 */
	btn_image:string;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 计时器控件 */
declare class _OBJ_gameui_gui_ctrl_timershow extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 简易UI文本 */
declare class _OBJ_gameui_gui_ctrl_simpleui_text extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 点击 */
	can_be_clicked:boolean;
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 显示 */
	visiblity:boolean;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name auto_line_feed */
	auto_line_feed:boolean;
	/** 
	 * @name 字号 */
	font_size:number;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name [NodeType][$$smallcard_mail.gui_ctrl.邮件按钮].DisplayName */
declare class _OBJ_smallcard_mail_gui_ctrl_邮件按钮 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name layout */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 移动键盘 */
declare class _OBJ_lib_control_gui_ctrl_移动键盘 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name S松开图片 */
	img_S_off:string;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name W按下图片 */
	img_W_on:string;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name D按下图片 */
	img_D_on:string;
	/** 
	 * @name D松开图片 */
	img_D_off:string;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name A按下图片 */
	img_A_on:string;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name A松开图片 */
	img_A_off:string;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name S按下图片 */
	img_S_on:string;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name W松开图片 */
	img_W_off:string;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 多功能格子 */
declare class _OBJ_smallcard_inventory_gui_ctrl_多功能格子 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 绑定的物品 */
	bind_item:Item;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 点击是否显示tips */
	show_tips:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 绑定的格子 */
	bind_slot:Slot;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 是否显示数量 */
	show_num:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 是否显示背景 */
	show_bg:boolean;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 绑定的数编物品 */
	bind_item_link:IdPreset<"item_id">;
	/** 
	 * @name 是否显示边框 */
	show_frame:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 技能冷却遮罩 */
	skill_cool:string;
	/** 
	 * @name 绑定的数编奖励 */
	bind_loot_link:IdPreset<"loot_id">;
	/** 
	 * @name 能否使用物品 */
	can_use:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 数字输入框 */
declare class _OBJ_gameui_gui_ctrl_number_input_paste extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 字体大小 */
	font_size:number;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 占位文本颜色 */
	font_placeholder_color:string;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 输入文字事件 */
	on_input:(this: void, arg1:string)=>void;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 字体 */
	font_family:string;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 横向对齐方式 */
	font_align:string;
	/** 
	 * @name 字体颜色 */
	font_color:string;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 占位符 */
	placeholder:string;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 显示文本 */
	text_input:string;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 施法进度条 */
declare class _OBJ_lib_control_gui_ctrl_施法进度条 extends _OBJ__gui_ctrl_gui_ctrl{
	/** 
	 * @name 进度条背景图片 */
	progress_bg_image:string;
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 完成时停留时长 */
	complete_delay:number;
	/** 
	 * @name 打断时停留时长 */
	break_delay:number;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 进度条填充图片 */
	progress_bar_image:string;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 局外资源 */
declare class _OBJ_smallcard_get_items_link_node_LinkNodeLobbyResource extends _OBJ__link_node_LinkNode{
	/** 
	 * @name 局外资源 */
	Array:Array<IdPreset<"lobby_resource_id">>;
	/** 
	 * @name 是数组
	 * @tips 是否是数组 */
	IsArray:boolean;
	/** 
	 * @name 值 */
	Value:IdPreset<"lobby_resource_id">;
	/** 
	 * @name 名称
	 * @tips 节点名 */
	Name:string;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"link_node_id">;
	constructor()
}

/** 
 * @name 兑换途径 */
declare class _OBJ_smallcard_get_items_lobby_resource_waytoget_Waytoget_Exchange extends _OBJ_smallcard_get_items_lobby_resource_waytoget_Waytoget{
	/** 
	 * @name 获取途径名称 */
	Name:string;
	/** 
	 * @name 兑换资源列表
	 * @tips 兑换所需资源列表，仅支持货币类型 */
	ExchangeResource:Array<_OBJ_smallcard_get_items_lobby_resource_count>;
	/** 
	 * @name 获取途径描述 */
	WayDesc:string;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"lobby_resource_waytoget_id">;
	constructor()
}

/** 
 * @name 自选类型资源（测试） */
declare class _OBJ_smallcard_get_items_lobby_resource_ChooseOne extends _OBJ_smallcard_get_items_lobby_resource_Lobby_Resource{
	/** 
	 * @name 图标 */
	Icon:string;
	/** 
	 * @name 稀有度 */
	Rare:number;
	/** 
	 * @name 物品类型
	 * @tips 非物品类之前可以设置显示相关的，名字啊图标啊什么的，打算废弃掉，专门给物品类型用 */
	ItemType:IdPreset<"item_id">;
	/** 
	 * @name 显示名 */
	Name:string;
	/** 
	 * @name 小图标 */
	SmallIcon:string;
	/** 
	 * @name 资源描述 */
	Desc:string;
	/** 
	 * @name 自定义参数列表 */
	CustomParams:Array<IdPreset<"link_node_id">>;
	/** 
	 * @name 自选资源列表 */
	ChoosingList:Array<_OBJ_smallcard_get_items_lobby_resource_count>;
	/** 
	 * @name 获取途径 */
	WayToGet:Array<IdPreset<"lobby_resource_waytoget_id">>;
	/** 
	 * @name 局外资源类型 */
	LobbyResourceType:_OBJ_smallcard_get_items_LobbyResourceType;
	/** 
	 * @name 货币云变量名
	 * @tips 货币类型云变量名 */
	TokenName:string;
	/** 
	 * @name 数量
	 * @tips 除了老签到库和老抽奖库这种非蓝图根节点的节点类型，不应该使用这个字段，后续会隐藏，这里务必填默认值 */
	Count:number;
	/** 
	 * @name 唯一标识名
	 * @tips 废弃 */
	IdName:string;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"lobby_resource_id">;
	/** 
	 * @name 自定义类型资源消耗函数
	 * @noSelf */
	CustomCostHandler:(this: void, 玩家:Player, 提交请求:ScoreCommitter, 资源:string, 数量:number, 外部参数:string)=>[smallcard_get_items.lobby_resource_instance]
	/** 
	 * @name 自定义类型资源获取函数
	 * @noSelf */
	CustomGetHandler:(this: void, 玩家:Player, 提交请求:ScoreCommitter, 资源:string, 数量:number, 外部参数:string)=>[smallcard_get_items.lobby_resource_instance]
	constructor()
}

/** 
 * @name 凭证类型资源 */
declare class _OBJ_smallcard_get_items_lobby_resource_ResourceTicket extends _OBJ_smallcard_get_items_lobby_resource_Lobby_Resource{
	/** 
	 * @name 持续次数
	 * @tips 每个资源增加的凭证次数 */
	PerLastCount:number;
	/** 
	 * @name 持续时间（秒）
	 * @tips 每个资源增加的凭证时间 */
	PerLastTime:number;
	/** 
	 * @name 是否自然日
	 * @tips 若勾选，首次获得时会按照整点进行截取，比如中午12点获得86400秒凭证，实际只能获得43200秒 */
	IsNaturalDay:boolean;
	/** 
	 * @name 获取途径 */
	WayToGet:Array<IdPreset<"lobby_resource_waytoget_id">>;
	/** 
	 * @name 数量
	 * @tips 除了老签到库和老抽奖库这种非蓝图根节点的节点类型，不应该使用这个字段，后续会隐藏，这里务必填默认值 */
	Count:number;
	/** 
	 * @name 物品类型
	 * @tips 非物品类之前可以设置显示相关的，名字啊图标啊什么的，打算废弃掉，专门给物品类型用 */
	ItemType:IdPreset<"item_id">;
	/** 
	 * @name 凭证变量名
	 * @tips 用作积分变量名 */
	TicketName:string;
	/** 
	 * @name 小图标 */
	SmallIcon:string;
	/** 
	 * @name 资源描述 */
	Desc:string;
	/** 
	 * @name 自定义参数列表 */
	CustomParams:Array<IdPreset<"link_node_id">>;
	/** 
	 * @name 稀有度 */
	Rare:number;
	/** 
	 * @name 唯一标识名
	 * @tips 废弃 */
	IdName:string;
	/** 
	 * @name 货币云变量名
	 * @tips 货币类型云变量名 */
	TokenName:string;
	/** 
	 * @name 图标 */
	Icon:string;
	/** 
	 * @name 显示名 */
	Name:string;
	/** 
	 * @name 局外资源类型 */
	LobbyResourceType:_OBJ_smallcard_get_items_LobbyResourceType;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"lobby_resource_id">;
	/** 
	 * @name 自定义类型资源消耗函数
	 * @noSelf */
	CustomCostHandler:(this: void, 玩家:Player, 提交请求:ScoreCommitter, 资源:string, 数量:number, 外部参数:string)=>[smallcard_get_items.lobby_resource_instance]
	/** 
	 * @name 自定义类型资源获取函数
	 * @noSelf */
	CustomGetHandler:(this: void, 玩家:Player, 提交请求:ScoreCommitter, 资源:string, 数量:number, 外部参数:string)=>[smallcard_get_items.lobby_resource_instance]
	constructor()
}

/** 
 * @name 礼包类型资源（自动打开） */
declare class _OBJ_smallcard_get_items_lobby_resource_ResourcePackage extends _OBJ_smallcard_get_items_lobby_resource_Lobby_Resource{
	/** 
	 * @name 图标 */
	Icon:string;
	/** 
	 * @name 包含资源列表 */
	ResourceList:Array<_OBJ_smallcard_get_items_lobby_resource_count>;
	/** 
	 * @name 物品类型
	 * @tips 非物品类之前可以设置显示相关的，名字啊图标啊什么的，打算废弃掉，专门给物品类型用 */
	ItemType:IdPreset<"item_id">;
	/** 
	 * @name 显示名 */
	Name:string;
	/** 
	 * @name 小图标 */
	SmallIcon:string;
	/** 
	 * @name 资源描述 */
	Desc:string;
	/** 
	 * @name 自定义参数列表 */
	CustomParams:Array<IdPreset<"link_node_id">>;
	/** 
	 * @name 货币云变量名
	 * @tips 货币类型云变量名 */
	TokenName:string;
	/** 
	 * @name 获取途径 */
	WayToGet:Array<IdPreset<"lobby_resource_waytoget_id">>;
	/** 
	 * @name 局外资源类型 */
	LobbyResourceType:_OBJ_smallcard_get_items_LobbyResourceType;
	/** 
	 * @name 数量
	 * @tips 除了老签到库和老抽奖库这种非蓝图根节点的节点类型，不应该使用这个字段，后续会隐藏，这里务必填默认值 */
	Count:number;
	/** 
	 * @name 唯一标识名
	 * @tips 废弃 */
	IdName:string;
	/** 
	 * @name 稀有度 */
	Rare:number;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"lobby_resource_id">;
	/** 
	 * @name 自定义类型资源消耗函数
	 * @noSelf */
	CustomCostHandler:(this: void, 玩家:Player, 提交请求:ScoreCommitter, 资源:string, 数量:number, 外部参数:string)=>[smallcard_get_items.lobby_resource_instance]
	/** 
	 * @name 自定义类型资源获取函数
	 * @noSelf */
	CustomGetHandler:(this: void, 玩家:Player, 提交请求:ScoreCommitter, 资源:string, 数量:number, 外部参数:string)=>[smallcard_get_items.lobby_resource_instance]
	constructor()
}

/** 
 * @name 自定义背包面板 */
declare class _OBJ_smallcard_inventory_gui_ctrl_自定义背包面板 extends _OBJ__gui_ctrl_panel{
	/** 
	 * @name 滚动条颜色
	 * @tips 滚动条颜色 */
	scroll_color:defaultui.Color;
	/** 
	 * @name 滚动条图片
	 * @tips 滚动条图片 */
	scroll_image:string;
	/** 
	 * @name inv_link */
	inv_link:string;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 拖拽条位置
	 * @tips 范围：0-1 */
	scroll:number;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 组件拖拽模式
	 * @tips 测试1 */
	drop_mode:_OBJ__DropMode;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 拖拽条宽度
	 * @tips 拖拽条宽度 */
	scroll_width:number;
	/** 
	 * @name 阵列 */
	Array:_OBJ__GUIArray;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 滚动条方向
	 * @tips 默认为竖直 */
	scroll_direction:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 悬浮颜色
	 * @tips 悬浮颜色 */
	scroll_hover_color:defaultui.Color;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 拖拽颜色
	 * @tips 拖拽颜色 */
	scroll_drag_color:defaultui.Color;
	/** 
	 * @name 允许滚动
	 * @tips 当设置为true时，子控件超出父控件时允许滚动 */
	enable_scroll:boolean;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name Buff描述 */
declare class _OBJ_gameui_gui_ctrl_Buff描述 extends _OBJ__gui_ctrl_label{
	/** 
	 * @name 字体
	 * @tips 字体 */
	font:_OBJ__Font;
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 文字
	 * @tips 文字 */
	text:string;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}

/** 
 * @name 动态文本 */
declare class _OBJ_gameui_gui_ctrl_transition_label extends _OBJ__gui_ctrl_label{
	/** 
	 * @name 字体
	 * @tips 字体 */
	font:_OBJ__Font;
	/** 
	 * @name 缩放
	 * @tips 控件缩放 */
	scale:number;
	/** 
	 * @name 可被拖动
	 * @tips 设置为true后，可以拖动这个控件 */
	enable_drag:boolean;
	/** 
	 * @name 数值动画 */
	number_transition:_OBJ__GUITransitionSubType;
	/** 
	 * @name 图片水平翻转
	 * @tips 图片水平翻转 */
	flip_x:boolean;
	/** 
	 * @name 禁用
	 * @tips 设置为true可以让控件及所有子控件的事件全部失效 */
	disabled:boolean;
	/** 
	 * @name 静态
	 * @tips 设置为true后，控件不会接收任何事件。例如界面上显示一段公告文本，此时公告文本需要置顶，但事件却要穿透文本 */
	static:boolean;
	/** 
	 * @name 透明度.
	 * @tips 透明度 */
	opacity:number;
	/** 
	 * @name 层级
	 * @tips 当一个控件的多个子控件互相重叠时，z_index较大的子控件会在上面 */
	z_index:number;
	/** 
	 * @name 背景颜色
	 * @tips 背景颜色 */
	color:defaultui.Color;
	/** 
	 * @name 吃掉指定事件
	 * @tips 指定要吃掉的事件 */
	swallow_events:string;
	/** 
	 * @name 子控件（数编节点） */
	children:Array<IdPreset<"gui_ctrl_id">>;
	/** 
	 * @name 吃掉事件
	 * @tips 设置为true后，事件不会向父控件传递下去。例如背包本身有点击事件，而背包的子控件物品也有点击事件，那么你可以设置物品的swallow_event = true，这样点击物品后就不会触发背包的事件 */
	swallow_event:boolean;
	/** 
	 * @name 九宫格边框
	 * @tips 不设置时将读取图集中的边框宽度 */
	border:_OBJ__GUIBorder;
	/** 
	 * @name 遮罩图片
	 * @tips 遮罩图片应该是一个带有透明通道的图片，控件会根据透明通道的形状进行剪裁 */
	mask_image:string;
	/** 
	 * @name 图片竖直翻转
	 * @tips 图片竖直翻转 */
	flip_y:boolean;
	/** 
	 * @name 事件
	 * @tips UI事件 */
	event:_OBJ__GUIEvent;
	/** 
	 * @name 显示
	 * @tips 设置为false可以让控件不可见，也不会参与排版 */
	show:boolean;
	/** 
	 * @name 布局
	 * @tips UI布局 */
	layout:_OBJ__GUILayout;
	/** 
	 * @name 显示名称 */
	Name:string;
	/** 
	 * @name 下层控件
	 * @tips 表示该UI控件是一个下层控件 */
	low_level:boolean;
	/** 
	 * @name 任意字符串
	 * @tips 用于填写任意数值的字段，方便在引发事件时获取。 */
	CustomString:string;
	/** 
	 * @name 文字
	 * @tips 文字 */
	text:string;
	/** 
	 * @name 旋转
	 * @tips 使控件绕中心顺时针旋转某一角度 */
	rotate:number;
	/** 
	 * @name 去色
	 * @tips UI去色 */
	gray:boolean;
	/** 
	 * @name 圆角
	 * @tips 圆角 */
	round_corner_radius:number;
	/** 
	 * @name 背景图片
	 * @tips 控件会自动扩展为图片的大小 */
	image:string;
	/** 
	 * @name 裁剪
	 * @tips 当设置为true时，子控件超出父控件区域的部分会被裁剪掉 */
	clip:boolean;
	/** 
	 * @name 启用
	 * @tips 设置为false可以让控件的事件全部失效 */
	enable:boolean;
	/** 
	 * @name 过渡动画
	 * @tips 当控件的部分属性被修改后，控件会平滑过渡到新的状态。 过渡可以用来实现一些动画效果 */
	transition:_OBJ__GUITransition;
	/** 
	 * @name 可被放开
	 * @tips 设置为true后，允许其他控件拖到这个控件上（触发on_drop事件） */
	enable_drop:boolean;
	/** 
	 * @name 数编Id */
	Link:IdPreset<"gui_ctrl_id">;
	constructor()
}
declare const enum _OBJ__Unit_Restriction {
}
declare const enum _OBJ__UnitData_ResourceType {
}
declare const enum _OBJ__UnitData_BloodBarType {
}
declare const enum _OBJ__Unit_Filter {
	["自动复活"] = "自动复活",
}
declare const enum _OBJ__BuffCategory {
	["正面效果"] = "正面效果",
	["位移效果"] = "位移效果",
	["控制效果"] = "控制效果",
	["负面效果"] = "负面效果",
	["持续性治疗"] = "持续性治疗",
	["持续性伤害"] = "持续性伤害",
}
declare const enum _OBJ__Spell_attack_speed_attribute {
	["复活时间"] = "复活时间",
	["金币"] = "金币",
}
declare const enum _OBJ__KeyValueAttribute_Key {
	["复活时间"] = "复活时间",
	["金币"] = "金币",
}
declare const enum _OBJ__UnitPropertySubTypeEx {
}
declare const enum _OBJ__DamageType {
}
declare const enum _OBJ__PlayerAttribute {
}
declare const enum _OBJ__SpellAttribute_Key {
}
declare const enum _OBJ__AbilCategory {
}
declare const enum _OBJ__UnitAttribute {
	["复活时间"] = "复活时间",
	["金币"] = "金币",
}
declare const enum _OBJ__GameOptionUIItem_DataType {
}
declare const enum _OBJ__UnitAttributeString {
}
declare const enum _OBJ_smallcard_get_items_LobbyResourceType {
}
declare const enum _OBJ_smallcard_inventory_AttributeFormat {
}
