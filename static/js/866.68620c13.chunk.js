"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[866],{866:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(5861),a=t(9439),u=t(7757),c=t.n(u),s=t(2791),i=t(7689),o=t(1686),f=t(4635),p=t(8809),v="Reviews_list__pCzae",l="Reviews_message__u6VQW",h=t(184);var d=function(){var e=(0,s.useState)([]),r=(0,a.Z)(e,2),t=r[0],u=r[1],d=(0,s.useState)(!1),m=(0,a.Z)(d,2),w=m[0],x=m[1],k=(0,s.useState)(null),g=(0,a.Z)(k,2),b=g[0],_=g[1],y=(0,i.UO)().movieId;return(0,s.useEffect)((function(){if(y){var e=function(){var e=(0,n.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,(0,f.Jh)(r);case 4:t=e.sent,u(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),_(e.t0.message);case 11:return e.prev=11,x(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(r){return e.apply(this,arguments)}}();e(y)}}),[y]),(0,s.useEffect)((function(){null!==b&&o.Notify.failure("some error occured ".concat(b))}),[b]),(0,h.jsxs)(h.Fragment,{children:[w&&(0,h.jsx)(p.a,{}),(0,h.jsx)("ul",{className:v,children:Array.isArray(t)&&(null===t||void 0===t?void 0:t.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{children:null===e||void 0===e?void 0:e.author}),(0,h.jsx)("p",{children:null===e||void 0===e?void 0:e.content})]},e.id)})))}),0===t.length&&(0,h.jsx)("h4",{className:l,children:"There are no reviews for this movie"})]})}},4635:function(e,r,t){t.d(r,{Aj:function(){return s},IQ:function(){return f},Jh:function(){return p},TP:function(){return o},Wf:function(){return i}});var n=t(5861),a=t(7757),u=t.n(a),c=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"8bd78ee11f1297c9482ff7b548a73f20",language:"en-US",include_adult:!1}}),s=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/week");case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=866.68620c13.chunk.js.map