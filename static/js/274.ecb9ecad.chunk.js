"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[274,729],{274:function(A,e,t){t.r(e),t.d(e,{default:function(){return M}});var r=t(439),n=t(791),s=t(689),a=t(87),c=t(920),i=t(189),u="Moviedetails_wrapper__sTUuD",o="Moviedetails_img__CKz2M",l="Moviedetails_title__ilgK6",p="Moviedetails_genre__t7sZE",d="Moviedetails_block__sZiWb",v="Moviedetails_li__qyElI",h="Moviedetails_active__5ZS5T",m="Moviedetails_btn_back__F85lQ",f=t(755),x="Cast_wrapper__0vlTg",j="Cast_block__ow80V",b="Cast_name__SF9Yl",g=t(729),w=t(184);function y(A){var e=A.movieId,t=(0,n.useState)([]),s=(0,r.Z)(t,2),a=s[0],u=s[1];return(0,n.useEffect)((function(){(0,c.M1)(e).then(u).catch((function(A){return A.message}))}),[e]),Array.isArray(a)&&0!==a.length?(0,w.jsx)(w.Fragment,{children:(0,w.jsx)("div",{className:x,children:null===a||void 0===a?void 0:a.map((function(A){return(0,w.jsxs)("div",{className:j,children:[(0,w.jsx)("img",{src:A.profile_path?"".concat(f.FF).concat(A.profile_path):i,alt:"actorFoto"}),(0,w.jsx)("p",{children:A.name}),(0,w.jsxs)("p",{className:b,children:[(0,w.jsx)("strong",{children:"Character:"})," ",(0,w.jsx)("span",{children:A.character})]})]},A.id)}))})}):(0,w.jsx)(g.default,{})}var _="Reviews_wrapper__ei3h9",Z="Reviews_block__P0cem",F="Reviews_text__OaCJi";function k(A){var e=A.movieId,t=(0,n.useState)([]),s=(0,r.Z)(t,2),a=s[0],i=s[1];return(0,n.useEffect)((function(){(0,c.tx)(e).then(i).catch((function(A){return A.message}))}),[e]),Array.isArray(a)&&0!==a.length?(0,w.jsx)("div",{className:_,children:a.map((function(A){return(0,w.jsxs)("div",{className:Z,children:[(0,w.jsx)("h3",{children:A.author}),(0,w.jsxs)("p",{className:F,children:[" ",A.content]})]},A.id)}))}):(0,w.jsx)(g.default,{})}var E=t(154);function M(){var A,e,t,x,j=(0,n.useState)(null),b=(0,r.Z)(j,2),g=b[0],_=b[1],Z=(0,s.UO)().movieId,F=(0,s.TH)(),M=(0,n.useRef)(null!==(A=null===(e=F.state)||void 0===e?void 0:e.from)&&void 0!==A?A:"/");return(0,n.useEffect)((function(){(0,c.TP)(Z).then(_).catch((function(A){return console.log(A)}))}),[Z]),g?(0,w.jsxs)("div",{children:[(0,w.jsx)(a.rU,{className:m,to:M.current,children:"Go Back"}),(0,w.jsxs)("div",{className:u,children:[(0,w.jsx)("img",{className:o,src:g.poster_path?"".concat(f.L2).concat(g.poster_path):i,alt:"noFoto"}),(0,w.jsxs)("div",{className:d,children:[(0,w.jsxs)("h2",{className:l,children:[g.title||g.name," ",(0,w.jsxs)("span",{children:["(",null===(t=g.release_date)||void 0===t?void 0:t.slice(0,4),")"]})]}),(0,w.jsxs)("p",{children:[(0,w.jsxs)("span",{className:p,children:["Genres: ",(0,w.jsx)("br",{})]})," ",null===(x=g.genres)||void 0===x?void 0:x.map((function(A){return"".concat(A.name," ")}))]}),(0,w.jsxs)("p",{children:[(0,w.jsxs)("span",{className:p,children:["Overview: ",(0,w.jsx)("br",{})]})," ",g.overview]})]})]}),(0,w.jsx)(a.OL,{className:function(A){var e=A.isActive;return"".concat(e?h:v)},to:"credits",children:"Cast"}),(0,w.jsx)(a.OL,{className:function(A){var e=A.isActive;return"".concat(e?h:v)},to:"reviews",children:"Reviews"}),(0,w.jsxs)(s.Z5,{children:[(0,w.jsx)(s.AW,{path:"credits",element:(0,w.jsx)(y,{movieId:Z})}),(0,w.jsx)(s.AW,{path:"reviews",element:(0,w.jsx)(k,{movieId:Z})})]})]}):(0,w.jsx)("h2",{children:(0,w.jsx)(E.rj,{visible:!0,height:"80",width:"80",color:"#4fa94d",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:"grid-wrapper"})})}},729:function(A,e,t){t.r(e),t.d(e,{default:function(){return s}});t(791);var r=t(87),n=t(184);function s(){return(0,n.jsx)("div",{children:(0,n.jsxs)("h1",{children:["404 Not Found, go to ",(0,n.jsx)(r.rU,{to:"/",children:"Home"})]})})}},920:function(A,e,t){t.d(e,{Df:function(){return i},M1:function(){return v},TP:function(){return p},V0:function(){return o},tx:function(){return m}});var r=t(861),n=t(757),s=t.n(n),a=t(294),c=t(755);function i(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(s().mark((function A(){var e,t;return s().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,a.Z.get("/trending/all/week?api_key=".concat(c.$h));case 3:return e=A.sent,t=e.data.results,A.abrupt("return",t);case 8:return A.prev=8,A.t0=A.catch(0),A.abrupt("return",A.t0.message);case 11:case"end":return A.stop()}}),A,null,[[0,8]])})))).apply(this,arguments)}function o(A){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function A(e){var t,r;return s().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,a.Z.get("/search/movie?api_key=".concat(c.$h,"&query=").concat(e));case 3:return t=A.sent,r=t.data.results,A.abrupt("return",r);case 8:return A.prev=8,A.t0=A.catch(0),A.abrupt("return",A.t0.message);case 11:case"end":return A.stop()}}),A,null,[[0,8]])})))).apply(this,arguments)}function p(A){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function A(e){var t;return s().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,a.Z.get("/movie/".concat(e,"?api_key=").concat(c.$h));case 3:return t=A.sent,A.abrupt("return",t.data);case 7:return A.prev=7,A.t0=A.catch(0),A.abrupt("return",A.t0.message);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}function v(A){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function A(e){var t;return s().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,a.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c.$h));case 3:return t=A.sent,A.abrupt("return",t.data.cast);case 7:return A.prev=7,A.t0=A.catch(0),A.abrupt("return",A.t0.message);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}function m(A){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function A(e){var t;return s().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,a.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c.$h));case 3:return t=A.sent,A.abrupt("return",t.data.results);case 7:return A.prev=7,A.t0=A.catch(0),A.abrupt("return",A.t0.message);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}a.Z.defaults.baseURL="https://api.themoviedb.org/3"},755:function(A,e,t){t.d(e,{$h:function(){return r},FF:function(){return s},L2:function(){return n}});var r="43019206f0d870f5a67f3f1662221172",n="https://image.tmdb.org/t/p/w300",s="https://image.tmdb.org/t/p/w200"},189:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBhUIBwgQFhAVFiEZFxAOFBIVGBkSHBUiFxcVGBccKCggGCYmHxUVITIhJyorLi4uFyAzODMyNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIANAA8wMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABQMEBgIH/8QAPBABAAECAwELCQgCAwAAAAAAAAECAwQFESEGEhQWMUFRVWGx0RM2VHGSk6Kz4RUiMjNydMLwUsFigbL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/SgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7zgBp2d5p2d4AadneadneAGnZ3mnZ3gBp/dp6wAAAAAAAAAAAAAAAAAAAAAASd1dybO5+7ctVzFURGk0zpP44jl/7c1vc7FdEVfaeL2xr+Z9G27DzbveqPmUqtj8in9MdwI3FuOs8X7z6HFuOs8X7z6LoCFxbjrPF+8+hxbjrPF+8+i6AhcW46zxfvPo+bm5+m3GtzNsVEf8rsR3wvxyvL5PgKM+oqzLM4muaqpim3MzEUUxOmmnSDrjc5ExrGa4v1xdjwYYDDzgN0/BIxd6uibM1aXapnbvtORpltv7Kz+css11TZrt+UppqnWaJieSOxpX56R+3/AJguAAAAAAAAAAAAAAAAAAAAAAjbsPNu96o/90qtj8in9MdyVuw8273qj5lKrY/Jp0/xjuBol5vm8YGqMNYo3+Ir/Bajvq6IZZnm08J+zspp3+Inlq5abcdNXg3yjKacuibldU136vx3auWZ54jogGGU5tVXifs7NaIoxEbY0/DXT00+Cy4M3yunM8PvLk72unbRcp5aaumE/C57wKirC55929bpmd9HJcpjnp7ewFyb1NF2LVVyIqnbFMztmI5dI50avKL2DxNV3JsZTTRXOs2rtO+pirpjRyYfJ6s5oqzLMLlVF2rbZ3szHk6Yn7uz+8rsy7Na7GJjL86iKbvJTd5KbnqnpBvlWVThL1WLxeI8pfrjSa9NIiP8aY5nPX55x+3/AJrnMh1+ekft/wCYLgAAAAAAAAAAAAAAAAAAAAAI27Dzbveqn5lLmvZjXmdUZfk06RERFzETGymNNtNPTLq3Xebl31U/Mh0ZdXZwmCps2LtumNInTfU8sxtmQaZZltGWYfyWHp2ztqrq5ap6ap53Yw4Zb9Jt+1ScMt+k2/bpBu5cdl9vH73hVmKt5Osa9Md8dj74Zb9Jt+3ScMt+k2/bpBs58wwFGY4ebGKo1jmnniemJ5n1wy36Tb9uk4Zb9Jt+3SCLh8bXkd2MHm9U1WZ2W8Tpyc0U1tJnfbsomJ2Thub9aliL1nE2Zs371qqmdk0zVTteeyfCRgt1PkrGJmu35GZp1mJ3sb6Pu6g9YAAAAAAAAAAAAAAAAAAAAADLE4enF2JsYm3FVE8tM8+k6/6T+LmF6vo+LxVQEri5her7fxeJxcwvV9v4vFVASuLmF6vt/F4nFzC9X2/i8VUBK4uYXq+38XicXML1fb+LxVQEri5her7fxeLfB5RZwN7yuEwtNNWmmsa8nRtdwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=="}}]);
//# sourceMappingURL=274.ecb9ecad.chunk.js.map