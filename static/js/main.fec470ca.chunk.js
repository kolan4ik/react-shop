(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),r=c(8),s=c.n(r),i=(c(13),c(0)),o=function(){return Object(i.jsx)("footer",{className:"page-footer grey darken-3",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",target:"_blank",rel:"noreferrer",href:"https://github.com/kolan4ik/react-shop",children:"GitHub"})]})})})},l=c.p+"static/media/logo.4bdbcf83.svg",d=function(){return Object(i.jsx)("nav",{className:"grey darken-3",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsxs)("div",{className:"brand-logo",children:[Object(i.jsx)("img",{src:l,className:"App-logo",alt:"logo"})," Shop"]}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/kolan4ik/react-shop",children:"GitHub"})})})]})})},j=c(1),b=c(5),O=c(7);function u(e,t){var c=t.type,n=t.payload;switch(c){case"SET_GOODS":return Object(j.a)(Object(j.a)({},e),{},{goods:n||[],loadin:!1});case"CLOSE_ALERT":return Object(j.a)(Object(j.a)({},e),{},{alertName:""});case"REMOVE_FROM_BASKET":return Object(j.a)(Object(j.a)({},e),{},{alertName:n.alertName,order:e.order.filter((function(e){return e.id!==n.id}))});case"ADD_TO_BASKET":var a=e.order.findIndex((function(e){return e.id===n.id})),r=[];if(a<0)r=Object(j.a)(Object(j.a)({},e),{},{alertName:n.name,order:[].concat(Object(O.a)(e.order),[Object(j.a)(Object(j.a)({},n),{},{counter:1})])});else{var s=e.order.map((function(e,t){return t===a?Object(j.a)(Object(j.a)({},e),{},{counter:e.counter+1}):e}));r=Object(j.a)(Object(j.a)({},e),{},{alertName:n.alertName,order:Object(O.a)(s)})}return r;case"HANDLE_BASKET_SHOW":return Object(j.a)(Object(j.a)({},e),{},{isVisibleBasket:!e.isVisibleBasket});case"INC_GOODS":return Object(j.a)(Object(j.a)({},e),{},{order:e.order.map((function(e){return e.id===n.id?Object(j.a)(Object(j.a)({},e),{},{counter:e.counter+1}):e}))});case"DEC_GOODS":return Object(j.a)(Object(j.a)({},e),{},{order:e.order.map((function(e){return e.id===n.id?Object(j.a)(Object(j.a)({},e),{},{counter:0!==e.counter?e.counter-1:0}):e}))});default:return e}}var m=Object(n.createContext)(),h={goods:[],loadin:!0,order:[],isVisibleBasket:!1,alertName:""},x=function(e){var t=e.children,c=Object(n.useReducer)(u,h),a=Object(b.a)(c,2),r=a[0],s=a[1];return r.closeAlert=function(){s({type:"CLOSE_ALERT"})},r.addToBasket=function(e){s({type:"ADD_TO_BASKET",payload:e})},r.removeFromBasket=function(e){s({type:"REMOVE_FROM_BASKET",payload:{id:e}})},r.handleBasketShow=function(e){s({type:"HANDLE_BASKET_SHOW"})},r.incrementGoods=function(e){s({type:"INC_GOODS",payload:{id:e}})},r.decrementGoods=function(e){s({type:"DEC_GOODS",payload:{id:e}})},r.setGoods=function(e){s({type:"SET_GOODS",payload:e})},Object(i.jsx)(m.Provider,{value:r,children:t})},f=function(e){var t=e.name,c=e.id,a=e.price,r=e.counter,s=Object(n.useContext)(m),o=s.incrementGoods,l=s.decrementGoods,d=s.removeFromBasket;return Object(i.jsxs)("div",{className:"collection-item",children:[t," x"," ",Object(i.jsxs)("span",{className:"calc",children:[Object(i.jsx)("i",{onClick:function(){return o(c)},className:"material-icons",children:"add"}),Object(i.jsx)("span",{className:"calc_in",children:r}),Object(i.jsx)("i",{onClick:function(){return l(c)},className:"material-icons",children:"remove"})]}),"= ",a*r," \u0440\u0443\u0431\u043b\u0435\u0439",Object(i.jsx)("span",{className:"secondary-content",children:Object(i.jsx)("i",{onClick:function(){return d(c)},className:"material-icons basket-remove",children:"close"})})]})},p=function(){var e=Object(n.useContext)(m),t=e.order,c=e.handleBasketShow,a=t.reduce((function(e,t){return e+t.price*t.counter}),0);return Object(i.jsxs)("div",{className:"collection basket-list",children:[Object(i.jsx)("div",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),t.length?t.map((function(e){return Object(i.jsx)(f,Object(j.a)({},e),e.id)})):Object(i.jsx)("div",{className:"collection-item",children:"\u0422\u0443\u0442 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442\u0443 \u0442\u043e\u0432\u0430\u0440\u043e\u0432"}),Object(i.jsxs)("div",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c ",a," \u0440\u0443\u0431\u043b\u0435\u0439"]}),Object(i.jsx)("div",{className:"collection-item  text-center",children:Object(i.jsx)("button",{className:"btn btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c"})}),Object(i.jsx)("i",{onClick:c,className:"material-icons basket-close",children:"close"})]})},v=function(e){var t=e.counter,c=void 0===t?0:t,a=Object(n.useContext)(m).handleBasketShow;return Object(i.jsxs)("div",{onClick:a,className:"basket-icon grey darken-2 white-text  ",children:[Object(i.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(i.jsx)("span",{className:"basket-counter",children:c}):null]})},N=function(e){var t=e.id,c=e.name,a=e.description,r=e.price,s=e.full_background,o=Object(n.useState)(!1),l=Object(b.a)(o,2),d=l[0],j=l[1],O=Object(n.useContext)(m).addToBasket;return Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{className:"card-image",children:Object(i.jsx)("img",{src:s,alt:c})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title",children:c}),Object(i.jsx)("p",{children:a})]}),Object(i.jsxs)("div",{className:"card-action",children:[Object(i.jsx)("button",{onClick:function(){!function(e,t,c,n,a){O(e,t,c,n,a),j(!0)}({id:t,name:c,description:a,price:r,full_background:s})},className:"btn",children:d?"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435":"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(i.jsxs)("span",{style:{fontSize:"1.8rem"},className:"right",children:[r," \u0440\u0443\u0431."]})]})]})},g=function(){var e=Object(n.useContext)(m).goods,t=void 0===e?[]:e;return t.length?Object(i.jsx)(i.Fragment,{children:t.map((function(e){return Object(i.jsx)(N,Object(j.a)({},e),e.id)}))}):Object(i.jsx)("h3",{children:"Nothing here"})},k=function(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})},_=function(){var e=Object(n.useContext)(m),t=e.alertName,c=void 0===t?"":t,a=e.closeAlert;return Object(n.useEffect)((function(){var e=setTimeout(a,2e3);return function(){clearTimeout(e)}}),[c]),Object(i.jsx)("div",{id:"toast-container",children:Object(i.jsxs)("div",{className:"toast",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})},S=function(){var e=Object(n.useContext)(m),t=e.loadin,c=e.order,a=e.isVisibleBasket,r=e.alertName,s=e.setGoods;return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:"dcdb8197-c94c036a-7d5f4ab5-0115044c"}}).then((function(e){return e.json()})).then((function(e){s(e.featured)})).catch(console.log)}),[]),Object(i.jsxs)("main",{children:[Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(v,{counter:c.length}),t?Object(i.jsx)(k,{}):Object(i.jsx)("div",{className:"goods",children:Object(i.jsx)(g,{})}),a&&Object(i.jsx)(p,{})]}),r&&Object(i.jsx)(_,{})]})};var y=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(d,{}),Object(i.jsx)(x,{children:Object(i.jsx)(S,{})}),Object(i.jsx)(o,{})]})};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fec470ca.chunk.js.map