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
    const t=flarum.core.compat["forum/app"];
    var o=e.n(t);
    o().initializers.add("wszdb/flarum-autolock",(function(){
      // 论坛端初始化
      // 可以在这里添加前端逻辑，比如显示自动锁定的提示
      console.log("[Auto Lock] Extension loaded");
      
      // 获取设置（已从后端序列化）
      const enabled = o().forum.attribute("wszdb-autolock.enabled");
      const threshold = o().forum.attribute("wszdb-autolock.threshold");
      
      if (enabled) {
        console.log(`[Auto Lock] Enabled with threshold: ${threshold}`);
      }
    }))
  })(),
  module.exports=r
})();
