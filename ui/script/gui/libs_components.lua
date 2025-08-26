-- THIS FILE IS AUTO-GENERATED, MIGHT BE OVERWRITTEN BY GUI-EDITOR
local components = {}
components['$$smallcard_mail.template@gui_ctrl.邮件按钮'] = {url = '@smallcard_mail.component', com_name = '邮件按钮', template = {
	layout = {
	height = 64,
	width = 64,
},
	name = 'GUI控件',
	disabled = false,
}}
components['$$gameui.template@gui_ctrl.active_button'] = {url = '@gameui.component', com_name = 'active_button', template = {
	color = '#FFFFFF',
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	click_scale = 0.85,
	Asset = '',
	name = '动态按钮',
}}
components['$$gameui.template@gui_ctrl.attachable_panel'] = {url = '@gameui.component', com_name = 'attachable_panel', template = {
	socket_name = 'socket_root',
	name = '可附着面板',
	layout = {
	height = 100,
	width = 100,
	col_self = 'start',
	row_self = 'start',
},
	disabled = false,
	scale_by_distance = false,
	hide_on_unit_invisible = false,
}}
components['$$gameui.template@gui_ctrl.btn_icon'] = {url = '@gameui.component', com_name = 'btn_icon', template = {
	icon = 'image/btn/sword.png',
	disabled = false,
	layout = {
	height = 100,
	width = 100,
	col_self = 'start',
	row_self = 'start',
},
	is_switch = false,
	is_on = false,
	name = '按钮图标',
}}
components['$$gameui.template@gui_ctrl.Buff列表'] = {url = '@gameui.component', com_name = 'Buff列表', template = {
	buff_height = 64,
	buff_margin = 7,
	disabled = false,
	default_neg_cnt = 3,
	default_pos_cnt = 3,
	buff_polarity = '正面;负面;无',
	buff_width = 64,
	buff_icon_template = '@gameui.prefab.buff.buff_icon',
	buff_icon = 'image/msgbox/btn_1.png',
	buff_cat_filter = '可被禁用;负面效果',
	name = 'GUI控件',
	default_none_cnt = 3,
}}
components['$$gameui.template@gui_ctrl.Buff描述'] = {url = '@gameui.component', com_name = 'Buff描述', template = {
	font = {
	family = 'ui/font/NoWarRounded,ui/font/msyh,ui/font/seguiemj',
},
	name = 'GUI控件',
	disabled = false,
}}
components['$$gameui.template@gui_ctrl.Buff图标'] = {url = '@gameui.component', com_name = 'Buff图标', template = {
	buff_none_progress_type = 'clockwise',
	buff_margin = 7,
	disabled = false,
	buff_bg_none_color = 'rgb(154, 154, 154)',
	buff_width = 64,
	buff_bg_neg_color = 'rgb(231, 67, 57)',
	font_size = 24,
	buff_pos_progress_type = 'clockwise',
	buff_bg_pos_color = 'rgb(52, 180, 31)',
	buff_icon = 'image/buff/buff_1.png',
	buff_height = 64,
	buff_neg_progress_type = 'clockwise',
	name = 'GUI控件',
}}
components['$$gameui.template@gui_ctrl.transition_label'] = {url = '@gameui.component', com_name = 'transition_label', template = {
	font = {
	size = 40,
	family = 'ui/font/NoWarRounded,ui/font/msyh,ui/font/seguiemj',
},
	name = '动态文本',
	layout = {
	height = 100,
	width = 500,
	col_self = 'start',
	row_self = 'start',
},
	text = '文本:123',
	disabled = false,
}}
components['$$gameui.template@gui_ctrl.normal_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	left = 30,
	right = 30,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/gf_1_major.png',
	text_color = '#ffffff',
	text = '默认',
	name = '按钮-古风1-主要',
	active_image = 'image/btn/gf_1_major_active.png',
}}
components['$$gameui.template@gui_ctrl.gf_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	left = 30,
	right = 30,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/gf_1_minor.png',
	text_color = '#ffffff',
	text = '默认',
	name = '按钮-古风1-次要',
	active_image = 'image/btn/gf_1_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.normal_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	top = 45,
	bottom = 45,
	left = 45,
	right = 45,
},
	disabled = false,
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-古风1',
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	style = 'image/rect/面板-古风1.png',
}}
components['$$gameui.template@gui_ctrl.gf_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	left = 30,
	right = 30,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/gf_2_major.png',
	text_color = '#ffffff',
	text = '默认',
	name = '按钮-古风2-主要',
	active_image = 'image/btn/gf_2_major_active.png',
}}
components['$$gameui.template@gui_ctrl.gf_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	left = 30,
	right = 30,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/gf_2_minor.png',
	text_color = '#ffffff',
	text = '默认',
	name = '按钮-古风2-次要',
	active_image = 'image/btn/gf_2_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.gf_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	top = 45,
	bottom = 45,
	left = 45,
	right = 45,
},
	disabled = false,
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-古风2',
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	style = 'image/rect/面板-古风2.png',
}}
components['$$gameui.template@gui_ctrl.gf_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 0,
	bottom = 0,
	left = 220,
	right = 110,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/gf_3_major.png',
	text_color = '#ffffff',
	text = '默认',
	name = '按钮-古风3-主要',
	active_image = 'image/btn/gf_3_major_active.png',
}}
components['$$gameui.template@gui_ctrl.gf_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 0,
	bottom = 0,
	left = 220,
	right = 110,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/gf_3_minor.png',
	text_color = '#ffffff',
	text = '默认',
	name = '按钮-古风3-次要',
	active_image = 'image/btn/gf_3_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.gf_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	top = 45,
	bottom = 45,
	left = 45,
	right = 45,
},
	disabled = false,
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	is_decoration = true,
	decoration_layout_right = {
	margin = {
	right = 6,
},
	row_self = 'end',
},
	name = '面板-古风3',
	decoration_image = 'image/rect/面板-古风3-花纹.png',
	decoration_layout_left = {
	margin = {
	left = 6,
},
	row_self = 'start',
},
	style = 'image/rect/面板-古风3.png',
}}
components['$$gameui.template@gui_ctrl.input_paste'] = {url = '@gameui.component', com_name = 'input_paste', template = {
	color = '#FFFFFF',
	placeholder = '占位符',
	disabled = false,
	font_color = '#000000',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	font_family = 'Regular',
	name = '输入框',
	font_size = 24,
	text_input = '',
}}
components['$$gameui.template@gui_ctrl.msgbox'] = {url = '@gameui.component', com_name = 'msgbox', template = {
	layout = {
	height = 300,
	width = 600,
	col_self = 'start',
	row_self = 'start',
},
	style = 3,
	disabled = false,
	msgbox_image = 'image/msgbox/msgbox_1.png',
	msgbox_icon_image = 'image/msgbox/icon_1.png',
	msgbox_text = '默认通知框文本',
	is_show_icon = true,
	name = 'GUI控件',
}}
components['$$gameui.template@gui_ctrl.msgbox_btn'] = {url = '@gameui.component', com_name = 'msgbox_btn', template = {
	icon_image = '@gameui/image/msgbox/icon_1.png',
	name = 'GUI控件',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	text = '默认',
	disabled = false,
	btn_image = '@gameui/image/msgbox/btn_1.png',
}}
components['$$gameui.template@gui_ctrl.number_input_paste'] = {url = '@gameui.component', com_name = 'number_input_paste', template = {
	color = '#FFFFFF',
	placeholder = '占位符',
	disabled = false,
	font_color = '#000000',
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	font_family = 'Regular',
	name = '数字输入框',
	font_size = 24,
	text_input = '',
}}
components['$$gameui.template@gui_ctrl.progress'] = {url = '@gameui.component', com_name = 'progress', template = {
	disabled = false,
	name_pos_prop = 'left',
	progress_text_show = true,
	progress_width = 250,
	value = 50,
	progress_type = 'right',
	value_max = 100,
	is_merge_text = true,
	name_show = true,
	name_width_prop = 50,
	name_height_prop = 20,
	description = 'ATK',
	layout = {
	height = 30,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	name_width = 50,
	default_box_margin = 10,
	progress_height = 20,
	default_name_width = 50,
	is_name_show = true,
	progress_image = '',
	progress_bg_color = '#949494',
	name = '进度条',
	progress_color = '#ff0000',
	is_name_show_real = true,
	progress_bg_image = '',
}}
components['$$gameui.template@gui_ctrl.sci_1_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	left = 40,
	right = 40,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/sci_1_major.png',
	text_color = '#000000',
	text = '默认',
	name = '按钮-科技1-主要',
	active_image = 'image/btn/sci_1_major_active.png',
}}
components['$$gameui.template@gui_ctrl.sci_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	left = 40,
	right = 40,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/sci_1_minor.png',
	text_color = '#000000',
	text = '默认',
	name = '按钮-科技1-次要',
	active_image = 'image/btn/sci_1_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.sci_1_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	top = 45,
	bottom = 45,
	left = 45,
	right = 45,
},
	disabled = false,
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-科技1',
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	style = 'image/rect/面板-科技1.png',
}}
components['$$gameui.template@gui_ctrl.sci_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	left = 40,
	right = 40,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/sci_2_major.png',
	text_color = '#13141E',
	text = '默认',
	name = '按钮-科技2-主要',
	active_image = 'image/btn/sci_2_major_active.png',
}}
components['$$gameui.template@gui_ctrl.sci_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	left = 40,
	right = 40,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/sci_2_minor.png',
	text_color = '#13141E',
	text = '默认',
	name = '按钮-科技2-次要',
	active_image = 'image/btn/sci_2_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.sci_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	top = 45,
	bottom = 45,
	left = 45,
	right = 45,
},
	disabled = false,
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-科技2',
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	style = 'image/rect/面板-科技2.png',
}}
components['$$gameui.template@gui_ctrl.sci_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 0,
	bottom = 0,
	left = 0,
	right = 0,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/sci_3_major.png',
	text_color = '#FFF8D7',
	text = '默认',
	name = '按钮-科技3-主要',
	active_image = 'image/btn/sci_3_major_active.png',
}}
components['$$gameui.template@gui_ctrl.sci_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 0,
	bottom = 0,
	left = 0,
	right = 0,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/sci_3_minor.png',
	text_color = '#CCCCCC',
	text = '默认',
	name = '按钮-科技3-次要',
	active_image = 'image/btn/sci_3_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.sci_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	top = 45,
	bottom = 45,
	left = 45,
	right = 45,
},
	disabled = false,
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-科技3',
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	style = 'image/rect/面板-科技3.png',
}}
components['$$gameui.template@gui_ctrl.simpleui_button'] = {url = '@gameui.component', com_name = 'simpleui_button', template = {
	visiblity = true,
	name = 'GUI控件',
	text = '按钮',
	can_be_clicked = true,
	layout = {
	height = 50,
	width = 50,
	col_self = 'start',
	row_self = 'start',
},
	disabled = false,
	image = 'image/msgbox/btn_1.png',
}}
components['$$gameui.template@gui_ctrl.simpleui_picture'] = {url = '@gameui.component', com_name = 'simpleui_picture', template = {
	visiblity = true,
	disabled = false,
	name = 'GUI控件',
	layout = {
	height = 50,
	width = 100,
	col_self = 'start',
	row_self = 'start',
},
	can_be_clicked = true,
	opacity = 0,
	zoom_type = 'none',
	image = 'image/msgbox/icon_1.png',
}}
components['$$gameui.template@gui_ctrl.simpleui_text'] = {url = '@gameui.component', com_name = 'simpleui_text', template = {
	visiblity = true,
	disabled = false,
	auto_line_feed = true,
	can_be_clicked = true,
	font_size = 5,
	layout = {
	height = 50,
	width = 50,
	col_self = 'start',
	row_self = 'start',
},
	name = 'GUI控件',
}}
components['$$gameui.template@gui_ctrl.timershow'] = {url = '@gameui.component', com_name = 'timershow', template = {
	layout = {
	direction = 'row',
	width = -1,
	col_self = 'start',
	height = 56,
},
	disabled = false,
	name = '计时器控件',
	image = 'image/Bg_daojishi_di.png',
}}
components['$$gameui.template@gui_ctrl.xf_1_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	left = 40,
	right = 40,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/xf_1_major.png',
	text_color = '#FFFFFF',
	text = '默认',
	name = '按钮-西方1-主要',
	active_image = 'image/btn/xf_1_major_active.png',
}}
components['$$gameui.template@gui_ctrl.xf_1_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	left = 40,
	right = 40,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/xf_1_minor.png',
	text_color = '#FFFFFF',
	text = '默认',
	name = '按钮-西方1-次要',
	active_image = 'image/btn/xf_1_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.xf_1_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	top = 45,
	bottom = 45,
	left = 45,
	right = 45,
},
	disabled = false,
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-西方1',
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	style = 'image/rect/面板-西方1.png',
}}
components['$$gameui.template@gui_ctrl.xf_2_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	left = 40,
	right = 40,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/xf_2_major.png',
	text_color = '#2A2D3C',
	text = '默认',
	name = '按钮-西方1-主要',
	active_image = 'image/btn/xf_2_major_active.png',
}}
components['$$gameui.template@gui_ctrl.xf_2_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	left = 40,
	right = 40,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/xf_2_minor.png',
	text_color = '#FFFFFF',
	text = '默认',
	name = '按钮-西方2-次要',
	active_image = 'image/btn/xf_2_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.xf_2_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	top = 130,
	bottom = 30,
	left = 128,
	right = 128,
},
	disabled = false,
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-西方2',
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	style = 'image/rect/面板-西方2.png',
}}
components['$$gameui.template@gui_ctrl.xf_3_major_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	left = 40,
	right = 40,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/xf_3_major.png',
	text_color = '#FFFFFF',
	text = '默认',
	name = '按钮-西方3-主要',
	active_image = 'image/btn/xf_3_major_active.png',
}}
components['$$gameui.template@gui_ctrl.xf_3_minor_btn'] = {url = '@gameui.component', com_name = 'normal_btn', template = {
	text_opacity = 1,
	border = {
	top = 30,
	bottom = 30,
	left = 40,
	right = 40,
},
	disabled = false,
	layout = {
	height = 100,
	width = 250,
	col_self = 'start',
	row_self = 'start',
},
	image = 'image/btn/xf_3_minor.png',
	text_color = '#FFFFFF',
	text = '默认',
	name = '按钮-西方3-次要',
	active_image = 'image/btn/xf_3_minor_active.png',
}}
components['$$gameui.template@gui_ctrl.xf_3_rect'] = {url = '@gameui.component', com_name = 'normal_rect', template = {
	border = {
	top = 45,
	bottom = 45,
	left = 45,
	right = 45,
},
	disabled = false,
	layout = {
	height = 400,
	width = 400,
	col_self = 'start',
	row_self = 'start',
},
	is_decoration = false,
	decoration_layout_right = {
	row_self = 'end',
},
	name = '面板-西方3',
	decoration_image = '',
	decoration_layout_left = {
	row_self = 'start',
},
	style = 'image/rect/面板-西方3.png',
}}
components['$$lib_control.template@gui_ctrl.交互摇杆'] = {url = '@lib_control.component', com_name = '交互摇杆', template = {
	skill_stack_bg = '@defaultui/image/control/技能_等级2.png',
	disabled = false,
	outer_ratio = 0.971,
	skill_charge_cool = '@defaultui/image/control/充能技能冷却条.png',
	vj_panel_crop_margin = -9999,
	skill_locked = '@defaultui/image/control/锁定技能框.png',
	press_region_type = 1,
	center_ratio = 0.813,
	cast_slider_panel = '@defaultui/image/control/施法轮盘.png',
	skill_click = '@defaultui/image/control/点击技能框.png',
	skill_disable = '@defaultui/image/control/禁用技能框.png',
	layout = {
	width = 150,
	row_self = 'end',
	col_self = 'end',
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	height = 150,
},
	shortcut_key_bg = '@defaultui/image/panel/底框_快捷键.png',
	skill_toggleon = '@defaultui/image/control/开启技能框.png',
	active_percent = 0.15,
	cast_slider = '@defaultui/image/control/施法摇杆.png',
	is_vj_center = true,
	vj_panel_scale = 1,
	skill_icon_mask = '@defaultui/image/control/冷却.png',
	skill_normal = '@defaultui/image/control/默认技能框3.png',
	skill_cool = '@defaultui/image/control/冷却.png',
	skill_silent = '@defaultui/image/control/禁用.png',
	skill_insufficient = '@defaultui/image/control/消耗不足.png',
	cast_slider_panel_disable = '@defaultui/image/control/禁止施法.png',
	can_press_on_cool = true,
	name = 'GUI控件',
}}
components['$$lib_control.template@gui_ctrl.技能摇杆'] = {url = '@lib_control.component', com_name = '技能摇杆', template = {
	skill_stack_bg = '@defaultui/image/control/技能_等级2.png',
	disabled = false,
	outer_ratio = 0.971,
	skill_charge_cool = '@defaultui/image/control/充能技能冷却条.png',
	vj_panel_crop_margin = -9999,
	skill_locked = '@defaultui/image/control/锁定技能框.png',
	press_region_type = 1,
	center_ratio = 0.813,
	cast_slider_panel = '@defaultui/image/control/施法轮盘.png',
	skill_click = '@defaultui/image/control/点击技能框.png',
	skill_disable = '@defaultui/image/control/禁用技能框.png',
	layout = {
	width = 150,
	row_self = 'end',
	col_self = 'end',
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	height = 150,
},
	shortcut_key_bg = '@defaultui/image/panel/底框_快捷键.png',
	skill_toggleon = '@defaultui/image/control/开启技能框.png',
	active_percent = 0.15,
	cast_slider = '@defaultui/image/control/施法摇杆.png',
	is_vj_center = true,
	vj_panel_scale = 1,
	skill_icon_mask = '@defaultui/image/control/冷却.png',
	skill_normal = '@defaultui/image/control/默认技能框3.png',
	skill_cool = '@defaultui/image/control/冷却.png',
	skill_silent = '@defaultui/image/control/禁用.png',
	skill_insufficient = '@defaultui/image/control/消耗不足.png',
	cast_slider_panel_disable = '@defaultui/image/control/禁止施法.png',
	can_press_on_cool = true,
	name = 'GUI控件',
}}
components['$$lib_control.template@gui_ctrl.技能摇杆组'] = {url = '@lib_control.component', com_name = '技能摇杆组', template = {
	max_skill_count = 99,
	attack_x = -1,
	disabled = false,
	skill_locked = '@defaultui/image/control/锁定技能框.png',
	base_y = -135,
	total_angle_delta = 135,
	auto_bind_key = true,
	press_region_type = 1,
	attack_button_size = 250,
	skill_click = '@defaultui/image/control/点击技能框.png',
	skill_toggleon = '@defaultui/image/control/开启技能框.png',
	active_percent = 0.15,
	attack_y = -1,
	vj_panel_scale = 1,
	can_press_on_cool = true,
	skill_stack_bg = '@defaultui/image/control/技能_等级2.png',
	outer_ratio = 0.971,
	vj_panel_crop_margin = -9999,
	init_angle = -20,
	skill_cool = '@defaultui/image/control/冷却.png',
	center_ratio = 0.813,
	skill_disable = '@defaultui/image/control/禁用技能框.png',
	name = 'GUI控件',
	skill_attack_normal = '@defaultui/image/control/默认技能框3.png',
	is_vj_center = true,
	base_x = -150,
	layout = {
	grow_width = 0.5,
	col_self = 'end',
	grow_height = 1,
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	row_self = 'end',
},
	cast_slider = '@defaultui/image/control/施法摇杆.png',
	cast_slider_panel = '@defaultui/image/control/施法轮盘.png',
	button_size = 150,
	skill_icon_mask = '@defaultui/image/control/冷却.png',
	skill_normal = '@defaultui/image/control/默认技能框3.png',
	shortcut_key_bg = '@defaultui/image/panel/底框_快捷键.png',
	skill_silent = '@defaultui/image/control/禁用.png',
	skill_insufficient = '@defaultui/image/control/消耗不足.png',
	cast_slider_panel_disable = '@defaultui/image/control/禁止施法.png',
	skill_charge_cool = '@defaultui/image/control/充能技能冷却条.png',
	min_around_dis = 350,
}}
components['$$lib_control.template@gui_ctrl.lib_control_main'] = {url = '@@.gui.page.lib_control_main.component', is_page = true, template_url = '@@.gui.page.lib_control_main.template'}
components['$$lib_control.template@gui_ctrl.施法进度条'] = {url = '@lib_control.component', com_name = '施法进度条', template = {
	progress_bg_image = '@defaultui/image/control/Bar_ingame_shifatiaodi.png',
	progress_bar_image = '@defaultui/image/control/Bar_ingame_shifatiao.png',
	disabled = false,
	complete_delay = 300,
	layout = {
	width = 688,
	row_self = 'center',
	col_self = 'end',
	relative = {
	['1'] = 0,
	['2'] = -178,
},
	height = 20,
},
	name = 'GUI控件',
	break_delay = 200,
}}
components['$$lib_control.template@gui_ctrl.摇杆'] = {url = '@lib_control.component', com_name = '摇杆', template = {
	vj_is_press_center = true,
	vj_press_region_type = 0,
	name = 'GUI控件',
	vj_main_move_radius = 0.146,
	vj_main_size = 127,
	vj_main_image = '@defaultui/image/joystick/Bth_ingame_yaogan1.png',
	vj_main_toggle_show = false,
	vj_bg_toggle_show = false,
	vj_relative_x = 0,
	vj_relative_y = 0,
	vj_is_release_reset = true,
	vj_bg_image = '@defaultui/image/joystick/Bg_ingame_yaogan.png',
	vj_active_percent = 0.2,
	vj_size = 288,
	disabled = false,
	vj_main_move_ratio = 1,
}}
components['$$lib_control.template@gui_ctrl.移动键盘'] = {url = '@lib_control.component', com_name = '移动键盘', template = {
	img_A_off = '@defaultui/image/keyboard/A_off.png',
	name = 'GUI控件',
	img_D_on = '@defaultui/image/keyboard/D_on.png',
	img_W_off = '@defaultui/image/keyboard/W_off.png',
	img_W_on = '@defaultui/image/keyboard/W_on.png',
	img_S_on = '@defaultui/image/keyboard/S_on.png',
	img_S_off = '@defaultui/image/keyboard/S_off.png',
	disabled = false,
	img_D_off = '@defaultui/image/keyboard/D_off.png',
	img_A_on = '@defaultui/image/keyboard/A_on.png',
}}
components['$$lib_control.template@gui_ctrl.移动摇杆'] = {url = '@lib_control.component', com_name = '移动摇杆', template = {
	vj_is_press_center = true,
	slider_bg_image = '@defaultui/image/joystick/Bg_ingame_yaogan_guofeng.png',
	disabled = false,
	vj_toggle_show = false,
	vj_press_region_type = 0,
	is_main_slider = false,
	slider_image = '@defaultui/image/joystick/Bth_ingame_yaogan1_guofeng.png',
	vj_active_percent = 0.2,
	vj_slider_width = 59,
	vj_slider_height = 59,
	vj_is_release_reset = true,
	direction_offset = 52,
	toggle_show = false,
	direction_image = '@defaultui/image/joystick/Bth_direction.png',
	slider_mini_image = '',
	layout = {
	grow_width = 0.5,
	col_self = 'end',
	grow_height = 1,
	relative = {
	['1'] = 0,
	['2'] = 0,
},
	row_self = 'start',
},
	slider_size = 263,
	slow_rate = 0.35,
	vj_slow_percent = 0,
	vj_stop_percent = 0,
	vj_move_radius = 0.094444,
	vj_move_ratio = 1,
	vj_is_main_slider = true,
	slider_relative_x = 296,
	slider_relative_y = -113,
	vj_auto_move = false,
	name = 'GUI控件',
}}
components['$$lib_control.template@gui_ctrl.中止施法区域'] = {url = '@lib_control.component', com_name = '中止施法区域', template = {
	layout = {
	width = 117,
	row_self = 'end',
	col_self = 'start',
	relative = {
	['1'] = -200,
	['2'] = 200,
},
	height = 117,
},
	disabled = false,
	name = 'GUI控件',
	image = '@defaultui/image/control/取消施法区域.png',
}}
components['$$lib_game_options.template@gui_ctrl.设置按钮'] = {url = '@lib_game_options.component', com_name = '设置按钮', template = {
	layout = {
	width = 500,
	row_self = 'end',
	col_self = 'start',
	relative = {
	['1'] = -100,
	['2'] = 200,
},
	height = 500,
},
	disabled = false,
	name = 'GUI控件',
	show = true,
}}
components['$$smallcard_inventory.template@gui_ctrl.背包入口'] = {url = '@smallcard_inventory.component', com_name = '背包入口', template = {
	layout = {
	width = 64,
	row_self = 'end',
	col_self = 'start',
	relative = {
	['1'] = -422,
	['2'] = 29,
},
	height = 64,
},
	disabled = false,
	name = 'GUI控件',
	show = true,
}}
components['$$smallcard_inventory.template@gui_ctrl.多功能格子'] = {url = '@smallcard_inventory.component', com_name = '多功能格子', template = {
	disabled = false,
	bind_loot_link = '',
	can_use = true,
	show_num = true,
	name = 'GUI控件',
	bind_item_link = '',
	show_frame = true,
	show_bg = true,
	show_tips = true,
	skill_cool = '',
}}
components['$$smallcard_inventory.template@gui_ctrl.模块背包'] = {url = '@smallcard_inventory.component', com_name = '模块背包', template = {
	disabled = false,
	parameter = '',
	name = 'GUI控件',
	inv_link = '',
}}
components['$$smallcard_inventory.template@gui_ctrl.拾取按钮'] = {url = '@smallcard_inventory.component', com_name = '拾取按钮', template = {
	name = 'GUI控件',
	disabled = false,
}}
components['$$smallcard_inventory.template@gui_ctrl.拾取列表'] = {url = '@smallcard_inventory.component', com_name = '拾取列表', template = {
	name = 'GUI控件',
	disabled = false,
}}
components['$$smallcard_inventory.template@gui_ctrl.拾取最近物品按钮'] = {url = '@smallcard_inventory.component', com_name = '拾取最近物品按钮', template = {
	name = 'GUI控件',
	disabled = false,
}}
components['$$smallcard_inventory.template@gui_ctrl.UNNAMED_0'] = {url = '@@.gui.page.拾取道具模板.component', is_page = true, template_url = '@@.gui.page.拾取道具模板.template'}
components['$$smallcard_inventory.template@gui_ctrl.UNNAMED_1'] = {url = '@@.gui.page.自定义UI拾取列表页面.component', is_page = true, template_url = '@@.gui.page.自定义UI拾取列表页面.template'}
components['$$smallcard_inventory.template@gui_ctrl.自定义背包格子'] = {url = '@smallcard_inventory.component', com_name = '自定义背包格子', template = {
	layout = {
	width = 156,
	height = 156,
},
	disabled = false,
	name = 'GUI控件',
	drop_mode = true,
}}
components['$$smallcard_inventory.template@gui_ctrl.自定义背包面板'] = {url = '@smallcard_inventory.component', com_name = '自定义背包面板', template = {
	name = 'GUI控件',
	layout = {
	width = 600,
	height = 600,
},
	disabled = false,
	drop_mode = true,
	inv_link = '',
}}
components['$$.template@gui_ctrl.button'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'button', template = {
}}
components['$$.template@gui_ctrl.input'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'input', template = {
}}
components['$$.template@gui_ctrl.label'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'label', template = {
}}
components['$$.template@gui_ctrl.GuiCtrl'] = {url = "@@.gui.page.MainPage.component", is_page = true}
components['$$.template@gui_ctrl.minimap_canvas'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'minimap_canvas', template = {
}}
components['$$.template@gui_ctrl.panel'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'panel', template = {
}}
components['$$.template@gui_ctrl.particle'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'particle', template = {
}}
components['$$.template@gui_ctrl.progress'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'progress', template = {
}}
components['$$.template@gui_ctrl.sprites'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'sprites', template = {
}}
components['$$.template@gui_ctrl.video'] = {url = '@common.base.gui.ctrl_wrapper', com_name = 'video', template = {
}}
return components