--- origin_lua ---
_G.present = _G.present or {}
_G.present['default'] = {point = {}, line = {}, rect = {}, circle = {}, margin = {}, rank = {}, description = {}, invisible = {}, unselectable = {}, link = {}}
local present = _G.present['default']
present.rect["Rect_0"] = base.rect(base.point(2080.0, 3648.0), base.point(3328.0, 2368.0), "default")
present.rect["Rect_1"] = base.rect(base.point(1088.0, 3648.0), base.point(1760.0, 2400.0), "default")
present.circle["Circles_1"] = base.circle(base.point(1664.0, 1344.0), 288.0, "default")
present.circle["Circles_0"] = base.circle(base.point(2928.0, 1264.0), 560.0, "default")
present.rank["rank"] = {["Rect_0"] = "初始地图/4", ["Rect_1"] = "初始地图/41", ["Circles_1"] = "初始地图/82", ["Circles_0"] = "初始地图/81", }
present.description["description"] = {["Rect_0"] = "", ["Rect_1"] = "", ["Circles_1"] = "", ["Circles_0"] = "", }
present.invisible["invisible"] = {["Rect_0"] = "", ["Rect_1"] = "", ["Circles_1"] = "", ["Circles_0"] = "", }
present.unselectable["unselectable"] = {["Rect_0"] = "", ["Rect_1"] = "", ["Circles_1"] = "", ["Circles_0"] = "", }
present.link["link"] = {}
