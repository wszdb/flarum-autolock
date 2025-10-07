(()=>{
  var e={
    n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},
    d:(r,t)=>{for(var o in t)e.o(t,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:t[o]})},
    o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),
    r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}
  },r={};
  (()=>{
    "use strict";
    e.r(r);
    const t=flarum.core.compat["admin/app"];
    var o=e.n(t);
    o().initializers.add("wszdb/flarum-autolock",(function(){
      // 注册管理面板设置
      o().extensionData
        .for("wszdb-autolock")
        .registerSetting({
          setting: "wszdb-autolock.enabled",
          type: "boolean",
          label: o().translator.trans("wszdb-autolock.admin.settings.enabled_label"),
          help: o().translator.trans("wszdb-autolock.admin.settings.enabled_help")
        })
        .registerSetting({
          setting: "wszdb-autolock.threshold",
          type: "number",
          label: o().translator.trans("wszdb-autolock.admin.settings.threshold_label"),
          help: o().translator.trans("wszdb-autolock.admin.settings.threshold_help"),
          min: 1,
          placeholder: "100"
        });
    }))
  })(),
  module.exports=r
})();
