(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,3],{298:function(t,e,r){var content=r(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("f649e560",content,!0,{sourceMap:!1})},299:function(t,e,r){var content=r(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("90697caa",content,!0,{sourceMap:!1})},300:function(t,e,r){"use strict";r(298)},301:function(t,e,r){var o=r(66)(!1);o.push([t.i,".product-card{background-color:#fff;border-radius:10px;display:flex;border:1px solid rgba(0,0,0,.373);flex-direction:column;justify-content:space-between;padding:15px;width:100%;margin-bottom:20px;height:440px;transition:all .8s}.product-card:hover{box-shadow:2px 15px 20px 2px rgba(13,2,0,.37)}.product-card__img{display:block;margin:auto;max-width:140px;width:100%;-o-object-fit:contain;object-fit:contain}.product-card__title{position:relative;font-size:16px}.product-card__description{max-width:100%;position:absolute;z-index:2;font-size:16px;font-weight:400;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;padding:5px 5px 1px 3px;transition:all .5s}.product-card__description:hover{color:#00f}.product-card .open{color:#00008b;-webkit-line-clamp:unset;background-color:#f0fdff;height:-moz-fit-content;height:fit-content;max-height:300px;overflow:scroll}",""]),t.exports=o},302:function(t,e,r){"use strict";r(299)},303:function(t,e,r){var o=r(66)(!1);o.push([t.i,".filter-panel{margin-bottom:30px;font-size:20px;display:flex;padding:20px;grid-gap:30px;gap:30px;flex-wrap:wrap}.filter-panel__title{display:block;width:100%}.filter-panel__input{height:25px;width:25px}.filter-panel__by{display:flex;grid-gap:20px;gap:20px;flex-wrap:wrap}",""]),t.exports=o},304:function(t,e,r){"use strict";r.r(e);r(32),r(48);var o={name:"ProductCard",props:{catalog_product:{}},methods:{openDescription:function(t){t.stopPropagation(),t.target.classList.toggle("open")}}},n=(r(300),r(25)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product-card"},[e("h2",{staticClass:"product-card__title"},[t._v(" "+t._s(t.catalog_product.title)),e("p",{staticClass:"product-card__description",on:{click:function(e){return e.preventDefault(),t.openDescription(e)}}},[t._v(t._s(t.catalog_product.description))])]),e("img",{staticClass:"product-card__img",attrs:{src:t.catalog_product.image,alt:""}}),e("span",{staticClass:"product-card__price"},[t._v(t._s(t.catalog_product.price)+"$")])])}),[],!1,null,null,null);e.default=component.exports},305:function(t,e,r){"use strict";r.r(e);var o={name:"FilterPanel",props:{filterArr:{}},emits:["change"]},n=(r(302),r(25)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter-panel"},[e("span",{staticClass:"filter-panel__title"},[t._v("FilterBy:")]),t._l(t.filterArr,(function(filter){return e("div",{key:filter.filterArr,staticClass:"filter-panel__by"},[e("input",{staticClass:"filter-panel__input",attrs:{type:"checkbox",id:filter},on:{change:function(e){return t.$emit("change",e)}}}),e("label",{attrs:{for:filter}},[t._v(t._s(filter))])])}))],2)}),[],!1,null,null,null);e.default=component.exports},307:function(t,e,r){var content=r(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("0ffa1eae",content,!0,{sourceMap:!1})},311:function(t,e,r){"use strict";r(307)},312:function(t,e,r){var o=r(66)(!1);o.push([t.i,".product__list{margin:0 auto;padding:0 0 100px;display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,calc(25% - 30px)));grid-gap:60px 30px;gap:60px 30px;list-style:none}.product__item{width:100%}@media (max-width:1000px){.product__list{grid-template-columns:repeat(auto-fit,minmax(100px,calc(33.33333% - 15px)));grid-gap:30px 20px;gap:30px 20px}}@media (max-width:768px){.product__list{grid-template-columns:repeat(auto-fit,minmax(100px,calc(50% - 15px)))}}@media (max-width:467px){.product__list{grid-template-columns:100%}}",""]),t.exports=o},315:function(t,e,r){"use strict";r.r(e);var o=r(9),n=(r(15),r(33),r(49),r(304)),c=r(305),l={components:{ProductCard:n.default,FilterPanel:c.default},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==(r=t.store).getters["products/products"].length){e.next=4;break}return e.next=4,r.dispatch("products/fetchProducts");case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{filters:["men's clothing","women's clothing","electronics","jewelery"]}},computed:{products:function(){return this.$store.getters["products/products"]}},methods:{openProduct:function(t){this.$router.push("/"+t.id)},handleFilter:function(t){var param="";t.checked&&(document.querySelectorAll(".filter-panel__input").forEach((function(e){e.checked&&e!=t&&(e.checked=!e.checked)})),param="category/"+t.id),this.$store.dispatch("products/fetchProducts",param)}},mounted:function(){window.addEventListener("load",(function(){document.querySelectorAll(".filter-panel__input").forEach((function(t){return t.checked=!1}))}))}},d=(r(311),r(25)),component=Object(d.a)(l,(function(){var t=this,e=t._self._c;return e("section",[e("FilterPanel",{attrs:{filterArr:t.filters},on:{change:function(e){return t.handleFilter(e.target)}}}),e("ul",{staticClass:"product__list"},t._l(t.products,(function(r){return e("li",{key:r.id,staticClass:"product__item"},[e("a",{staticClass:"product__link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openProduct(r)}}},[e("product-card",{attrs:{catalog_product:r}})],1)])})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FilterPanel:r(305).default,ProductCard:r(304).default})}}]);