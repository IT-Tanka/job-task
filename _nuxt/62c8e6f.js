(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{299:function(t,e,l){var content=l(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(67).default)("00bdd6f0",content,!0,{sourceMap:!1})},302:function(t,e,l){"use strict";l(299)},303:function(t,e,l){var r=l(66)(!1);r.push([t.i,".filter-panel{margin-bottom:30px;font-size:20px;display:flex;padding:20px;grid-gap:30px;gap:30px;flex-wrap:wrap}.filter-panel__input{height:25px;width:25px}.filter-panel__by{display:flex;grid-gap:20px;gap:20px;flex-wrap:wrap}",""]),t.exports=r},305:function(t,e,l){"use strict";l.r(e);var r={name:"FilterPanel",props:{filterArr:{}},emits:["change"]},n=(l(302),l(25)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter-panel"},[e("span",{staticClass:"filter-panel__title"},[t._v("FilterBy:")]),t._l(t.filterArr,(function(filter){return e("div",{key:filter.filterArr,staticClass:"filter-panel__by"},[e("input",{staticClass:"filter-panel__input",attrs:{type:"checkbox",id:filter},on:{change:function(e){return t.$emit("change",e)}}}),e("label",{attrs:{for:filter}},[t._v(t._s(filter))])])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);