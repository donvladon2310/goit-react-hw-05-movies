"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[68],{7135:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(5861),a=t(9439),s=t(7757),i=t.n(s),o=t(2791),c=t(1087),u=t(7689),l=t(9126),v=t(1686),f=t(8809),d=t(4635),p={wrapper:"MovieDetails_wrapper__YMWLn",goBack:"MovieDetails_goBack__C8OKE",box:"MovieDetails_box__0AyGO",img:"MovieDetails_img__uOAom",info:"MovieDetails_info__qv2SI",title:"MovieDetails_title__cUGs9",overview:"MovieDetails_overview__U5Vnb",moreInfoLink:"MovieDetails_moreInfoLink__v7Q4i"},m=t(184),h=(0,o.lazy)((function(){return t.e(459).then(t.bind(t,1459))})),x=(0,o.lazy)((function(){return t.e(866).then(t.bind(t,866))}));var _=function(){var e,n,t,s,_,w,j,g=(0,o.useState)(null),k=(0,a.Z)(g,2),b=k[0],N=k[1],y=(0,o.useState)(!1),Z=(0,a.Z)(y,2),M=Z[0],U=Z[1],I=(0,o.useState)(null),D=(0,a.Z)(I,2),S=D[0],L=D[1],A=(0,u.UO)().movieId,O=(0,u.TH)();return(0,o.useEffect)((function(){if(A){var e=function(){var e=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,U(!0),e.next=4,(0,d.TP)(n);case 4:t=e.sent,N(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),L(e.t0.message);case 11:return e.prev=11,U(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(n){return e.apply(this,arguments)}}();e(A)}}),[A]),(0,o.useEffect)((function(){null!==S&&v.Notify.failure("some error occured ".concat(S))}),[S]),(0,m.jsxs)("div",{className:p.wrapper,children:[(0,m.jsx)(c.rU,{className:p.goBack,to:null!==(e=null===O||void 0===O||null===(n=O.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",children:(0,m.jsx)(l.KMP,{size:"30px"})}),M&&(0,m.jsx)(f.a,{}),null!==b&&(0,m.jsxs)("div",{className:p.box,children:[(0,m.jsx)("img",{className:p.img,src:null!==b&&void 0!==b&&b.poster_path?"https://image.tmdb.org/t/p/w500".concat(null===b||void 0===b?void 0:b.poster_path):"https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png",alt:b.title}),(0,m.jsxs)("div",{className:p.info,children:[(0,m.jsxs)("h1",{className:p.title,children:[b.title," (",null===b||void 0===b?void 0:b.release_date.slice(0,4),")"]}),(0,m.jsxs)("p",{children:["User Score: ",null===b||void 0===b?void 0:b.vote_average]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{className:p.overview,children:b.overview}),(0,m.jsx)("h2",{children:"Genres"}),(0,m.jsx)("ul",{className:p.genre,children:null===b||void 0===b||null===(t=b.genres)||void 0===t?void 0:t.map((function(e){var n=e.id,t=e.name;return(0,m.jsx)("li",{className:p.genreItem,children:t},n)}))})]})]}),(0,m.jsxs)("div",{className:p.moreInfo,children:[(0,m.jsx)(c.rU,{state:{from:null!==(s=null===O||void 0===O||null===(_=O.state)||void 0===_?void 0:_.from)&&void 0!==s?s:"/"},className:p.moreInfoLink,to:"reviews",children:"Reviews"}),(0,m.jsx)(c.rU,{state:{from:null!==(w=null===O||void 0===O||null===(j=O.state)||void 0===j?void 0:j.from)&&void 0!==w?w:"/"},className:p.moreInfoLink,to:"cast",children:"Cast"}),(0,m.jsx)(o.Suspense,{fallback:(0,m.jsx)(f.a,{}),children:(0,m.jsxs)(u.Z5,{children:[(0,m.jsx)(u.AW,{path:"cast",element:(0,m.jsx)(h,{})}),(0,m.jsx)(u.AW,{path:"reviews",element:(0,m.jsx)(x,{})})]})})]})]})}},4635:function(e,n,t){t.d(n,{Aj:function(){return o},IQ:function(){return l},Jh:function(){return v},TP:function(){return u},Wf:function(){return c}});var r=t(5861),a=t(7757),s=t.n(a),i=t(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"8bd78ee11f1297c9482ff7b548a73f20",language:"en-US",include_adult:!1}}),o=function(){var e=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/week");case 2:return n=e.sent,t=n.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{query:n}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(n,"/credits"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(n,"/reviews"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=68.50214234.chunk.js.map