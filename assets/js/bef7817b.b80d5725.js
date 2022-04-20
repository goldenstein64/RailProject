"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[215],{9503:function(e){e.exports=JSON.parse('{"functions":[{"name":"getLength","desc":"Returns the length of a RailPart","params":[{"name":"part","desc":"","lua_type":"BasePart"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","private":true,"source":{"line":9,"path":"src/init.lua"}},{"name":"getDelta","desc":"Returns the direction of the [RailPart] in world space, with a magnitude equal to the length of the part","params":[{"name":"part","desc":"","lua_type":"BasePart"}],"returns":[{"desc":"","lua_type":"Vector3\\r\\n"}],"function_type":"static","private":true,"source":{"line":19,"path":"src/init.lua"}},{"name":"getPosition","desc":"Returns a position on the [RailPart] with the given alpha.\\n\\n* 0 = CurrentPart.Prev\\n* 1 = CurrentPart.Next","params":[{"name":"currentPart","desc":"","lua_type":"BasePart"},{"name":"alpha","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Vector3\\r\\n"}],"function_type":"static","private":true,"source":{"line":32,"path":"src/init.lua"}},{"name":"getInitialAlpha","desc":"Returns a number between 0-1 indicating the point on the `currentPart` \\nclosest to the given `position` when using [RailGrinder.getPosition].","params":[{"name":"currentPart","desc":"","lua_type":"BasePart"},{"name":"position","desc":"","lua_type":"Vector3"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","private":true,"source":{"line":43,"path":"src/init.lua"}},{"name":"getInitialSpeed","desc":"Returns a number describing what speed something with the given \\n`worldVelocity` is going on `currentPart`.","params":[{"name":"currentPart","desc":"","lua_type":"BasePart"},{"name":"worldVelocity","desc":"","lua_type":"Vector3"}],"returns":[{"desc":"","lua_type":"number\\r\\n"}],"function_type":"static","private":true,"source":{"line":56,"path":"src/init.lua"}},{"name":"new","desc":"Creates a new RailGrinder instance, which lets one \\"vessel\\" grind one rail.","params":[],"returns":[],"function_type":"static","tags":["Static"],"source":{"line":85,"path":"src/init.lua"}},{"name":"Enable","desc":"Sets all properties required to start grinding the rail and starts updating\\nthem and firing events using a connection to [RunService.Heartbeat].\\n\\nThe `vessel` argument is only used to calculate the speed and position relative \\nto `currentPart`, so it is optional.","params":[{"name":"currentPart","desc":"The instance the `vessel` is grinding on.","lua_type":"BasePart"},{"name":"vessel","desc":"The instance grinding the rail.","lua_type":"BasePart?"}],"returns":[],"function_type":"method","source":{"line":263,"path":"src/init.lua"}},{"name":"Disable","desc":"Stops updating variables and firing events.","params":[],"returns":[],"function_type":"method","source":{"line":281,"path":"src/init.lua"}},{"name":"Update","desc":"A function that runs every [RunService.Heartbeat], this fires the\\n[RailGrinder.PositionChanged] event after every update, fires \\n[RailGrinder.Completed] once finished, and calls [RailGrinder.GetNextPart] \\nwhen it needs new parts.","params":[{"name":"deltaTime","desc":"The amount of time that passed since last update.","lua_type":"number"}],"returns":[],"function_type":"method","source":{"line":309,"path":"src/init.lua"}},{"name":"SetSpeed","desc":"Sets how fast the position should change","params":[{"name":"newSpeed","desc":"The new speed the RailGrinder should update at","lua_type":"number"}],"returns":[],"function_type":"method","source":{"line":356,"path":"src/init.lua"}},{"name":"GetNextPart","desc":"This callback is used to get the next part when the new position is beyond \\nthe extents of the current part.\\n\\n* Back end means `direction = -1`. \\n* Front end means `direction = 1`.\\n\\nReturning `nil` disables the instance.","params":[{"name":"direction","desc":"Which direction the next part should come from.","lua_type":"-1 | 1"}],"returns":[{"desc":"The next part to grind on.","lua_type":"RailPart?"}],"function_type":"static","source":{"line":379,"path":"src/init.lua"}}],"properties":[{"name":"Enabled","desc":"Describes whether this RailGrinder is currently enabled.\\n\\nPlease use [RailGrinder:Enable] and [RailGrinder:Disable] to update this\\nvalue.\\n\\t","lua_type":"boolean","readonly":true,"source":{"line":99,"path":"src/init.lua"}},{"name":"CurrentPart","desc":"The part currently being grinded on.\\n\\t","lua_type":"RailPart","readonly":true,"source":{"line":108,"path":"src/init.lua"}},{"name":"Speed","desc":"Describes how fast the position changes every update. Please use \\n[RailGrinder:SetSpeed] to change this value.\\n\\t","lua_type":"number","readonly":true,"source":{"line":118,"path":"src/init.lua"}},{"name":"Position","desc":"The current position as calculated by [RailGrinder.Update].\\n\\t","lua_type":"Vector3","readonly":true,"source":{"line":127,"path":"src/init.lua"}},{"name":"Velocity","desc":"Describes how fast the position changes every update, represented as a \\nVector3 with a magnitude and direction. This exists for the end-user, and\\nonly updates when [RailGrinder.CurrentPart] or [RailGrinder.Speed] changes.\\n\\t","lua_type":"Vector3","readonly":true,"source":{"line":138,"path":"src/init.lua"}},{"name":"Alpha","desc":"Describes where [RailGrinder.Position] is between [RailGrinder.CurrentPart].Prev\\nand [RailGrinder.CurrentPart].Next.\\n\\t","lua_type":"number","private":true,"source":{"line":148,"path":"src/init.lua"}},{"name":"CurrentPartLength","desc":"The distance between [RailGrinder.CurrentPart].Prev and \\n[RailGrinder.CurrentPart].Next.\\n\\t","lua_type":"number","private":true,"source":{"line":158,"path":"src/init.lua"}},{"name":"Connection","desc":"The [RunService.Heartbeat] connection used to update position. The end-user\\ncan disconnect this using [RailGrinder:Disable].\\n\\t","lua_type":"RBXScriptConnection?","private":true,"source":{"line":168,"path":"src/init.lua"}},{"name":"CompletedBindable","desc":"Holds the [RailGrinder.Completed] event.\\n\\t","lua_type":"BindableEvent","tags":["Events"],"private":true,"source":{"line":181,"path":"src/init.lua"}},{"name":"Completed","desc":"Fires when this `RailGrinder` has finished or is disabled.\\n\\t","lua_type":"RBXScriptSignal<>","tags":["Events"],"source":{"line":190,"path":"src/init.lua"}},{"name":"PositionChangedBindable","desc":"Holds the [RailGrinder.PositionChanged] event.\\n\\t","lua_type":"BindableEvent","tags":["Events"],"private":true,"source":{"line":203,"path":"src/init.lua"}},{"name":"PositionChanged","desc":"Fires when [RailGrinder.Position] is updated.\\n\\t","lua_type":"RBXScriptSignal<Vector3>","tags":["Events"],"source":{"line":212,"path":"src/init.lua"}},{"name":"PartChangedBindable","desc":"Holds the [RailGrinder.PartChanged] event.\\n\\t","lua_type":"BindableEvent","tags":["Events"],"private":true,"source":{"line":225,"path":"src/init.lua"}},{"name":"PartChanged","desc":"Fires when [RailGrinder.CurrentPart] is updated.\\n\\t","lua_type":"RBXScriptSignal<RailPart>","tags":["Events"],"source":{"line":234,"path":"src/init.lua"}},{"name":"UpdateCallback","desc":"This function is called when [RunService.Heartbeat] fires. This is bound\\nby [RailGrinder:Enable].\\n\\t","lua_type":"(number) -> ()","private":true,"source":{"line":244,"path":"src/init.lua"}}],"types":[{"name":"RailPart","desc":"A part with two child attachments `Prev` and `Next`. Typically, the `Next`\\nattachment of one part has the same position as the `Prev` attachment of another part.","lua_type":"BasePart & { Prev: Attachment, Next: Attachment }","source":{"line":79,"path":"src/init.lua"}}],"name":"RailGrinder","desc":"A helper class for calculating position and velocity of an object traveling \\nacross a collection of attachment pairs.","source":{"line":69,"path":"src/init.lua"}}')}}]);