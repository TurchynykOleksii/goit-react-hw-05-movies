"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[459],{459:function(t,r,e){e.r(r),e.d(r,{default:function(){return p}});var n=e(439),a=e(791),c=e(689),u=e(390),s=e(221),i="Cast_list__oOD41",o="Cast_listItem__2rNHA",f=e(184);function p(){var t=(0,a.useState)(null),r=(0,n.Z)(t,2),e=r[0],p=r[1],h=(0,c.UO)().filmId;if((0,a.useEffect)((function(){(0,u.u3)(h).then(p).catch(console.log)}),[h]),e)return(0,f.jsx)(f.Fragment,{children:e.length>0?(0,f.jsx)("ul",{className:i,children:e.map((function(t,r){var e=t.name,n=t.profile_path,a=t.character;return(0,f.jsxs)("li",{className:o,children:[(0,f.jsx)("img",{width:"100",src:n?"".concat(s.L).concat(n):s.W,alt:e}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("p",{children:[(0,f.jsx)("b",{children:"Actor name :"})," ",e]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("b",{children:"Character :"})," ",a]})]})]},r)}))}):(0,f.jsx)("p",{children:"No cast info for this movie"})})}},390:function(t,r,e){e.d(r,{TP:function(){return o},V$:function(){return f},Vk:function(){return s},bU:function(){return i},u3:function(){return p}});var n=e(861),a=e(757),c=e.n(a),u=e(263);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"264653736f70104ec02ac08f6fa6f8de"};var s=function(){var t=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/week",{params:{page:1}});case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},221:function(t,r,e){e.d(r,{L:function(){return n},W:function(){return a}});var n="https://image.tmdb.org/t/p/w300",a="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"}}]);
//# sourceMappingURL=459.0614337d.chunk.js.map