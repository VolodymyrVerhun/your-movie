"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[300],{194:function(A,t,e){e.d(t,{Z:function(){return m}});e(791);var r=e(189),n="ListMovies_wrapper__qsCLM",a="ListMovies_img__mo6qL",s="ListMovies_block__3-05s",u="ListMovies_movie_name__vLxod",c=e(689),i=e(87),o=e(755),p=e(184);function m(A){var t=A.movies,e=(0,c.TH)();return(0,p.jsx)("div",{className:n,children:t.map((function(A){return(0,p.jsxs)(i.rU,{state:{from:e},to:"/movie/".concat(A.id),className:s,children:[(0,p.jsx)("img",{className:a,src:A.poster_path?"".concat(o.L2).concat(A.poster_path):r,alt:"photoCard"}),(0,p.jsx)("p",{className:u,children:A.title||A.name})]},A.id)}))})}},300:function(A,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(439),n=e(194),a=e(791),s=e(87),u=e(920),c="MoviesPage_title__bvFiW",i="MoviesPage_form__PQsDq",o="MoviesPage_input_box__Kqc+D",p="MoviesPage_input__dHzTS",m="MoviesPage_label__Mr2YQ",l="MoviesPage_button__p7gcq",v=e(184);function f(){var A=(0,a.useState)([]),t=(0,r.Z)(A,2),e=t[0],f=t[1],h=(0,s.lr)(),d=(0,r.Z)(h,2),b=d[0],x=d[1],y=b.get("query");return(0,a.useEffect)((function(){y&&(0,u.V0)(y).then(f).catch((function(A){return A.message}))}),[y]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{className:c,children:"Search movie"}),(0,v.jsxs)("form",{className:i,onSubmit:function(A){A.preventDefault(),x({query:A.target.elements.value.value})},children:[(0,v.jsxs)("div",{className:o,children:[(0,v.jsx)("input",{required:!0,className:p,type:"text",name:"value",placeholder:""}),(0,v.jsx)("label",{className:m,htmlFor:"",children:"Search"})]}),(0,v.jsx)("button",{className:l,type:"submit",children:"search"})]}),(0,v.jsx)(n.Z,{movies:e})]})}},920:function(A,t,e){e.d(t,{Df:function(){return c},M1:function(){return v},TP:function(){return m},V0:function(){return o},tx:function(){return h}});var r=e(861),n=e(757),a=e.n(n),s=e(294),u=e(755);function c(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(a().mark((function A(){var t,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,s.Z.get("/trending/all/week?api_key=".concat(u.$h));case 3:return t=A.sent,e=t.data.results,A.abrupt("return",e);case 8:return A.prev=8,A.t0=A.catch(0),A.abrupt("return",A.t0.message);case 11:case"end":return A.stop()}}),A,null,[[0,8]])})))).apply(this,arguments)}function o(A){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function A(t){var e,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,s.Z.get("/search/movie?api_key=".concat(u.$h,"&query=").concat(t));case 3:return e=A.sent,r=e.data.results,A.abrupt("return",r);case 8:return A.prev=8,A.t0=A.catch(0),A.abrupt("return",A.t0.message);case 11:case"end":return A.stop()}}),A,null,[[0,8]])})))).apply(this,arguments)}function m(A){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function A(t){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,s.Z.get("/movie/".concat(t,"?api_key=").concat(u.$h));case 3:return e=A.sent,A.abrupt("return",e.data);case 7:return A.prev=7,A.t0=A.catch(0),A.abrupt("return",A.t0.message);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}function v(A){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function A(t){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,s.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u.$h));case 3:return e=A.sent,A.abrupt("return",e.data.cast);case 7:return A.prev=7,A.t0=A.catch(0),A.abrupt("return",A.t0.message);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}function h(A){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function A(t){var e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,s.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u.$h));case 3:return e=A.sent,A.abrupt("return",e.data.results);case 7:return A.prev=7,A.t0=A.catch(0),A.abrupt("return",A.t0.message);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3"},755:function(A,t,e){e.d(t,{$h:function(){return r},FF:function(){return a},L2:function(){return n}});var r="43019206f0d870f5a67f3f1662221172",n="https://image.tmdb.org/t/p/w300",a="https://image.tmdb.org/t/p/w200"},189:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBhUIBwgQFhAVFiEZFxAOFBIVGBkSHBUiFxcVGBccKCggGCYmHxUVITIhJyorLi4uFyAzODMyNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIANAA8wMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABQMEBgIH/8QAPBABAAECAwELCQgCAwAAAAAAAAECAwQFESEGEhQWMUFRVWGx0RM2VHGSk6Kz4RUiMjNydMLwUsFigbL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/SgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7zgBp2d5p2d4AadneadneAGnZ3mnZ3gBp/dp6wAAAAAAAAAAAAAAAAAAAAAASd1dybO5+7ctVzFURGk0zpP44jl/7c1vc7FdEVfaeL2xr+Z9G27DzbveqPmUqtj8in9MdwI3FuOs8X7z6HFuOs8X7z6LoCFxbjrPF+8+hxbjrPF+8+i6AhcW46zxfvPo+bm5+m3GtzNsVEf8rsR3wvxyvL5PgKM+oqzLM4muaqpim3MzEUUxOmmnSDrjc5ExrGa4v1xdjwYYDDzgN0/BIxd6uibM1aXapnbvtORpltv7Kz+css11TZrt+UppqnWaJieSOxpX56R+3/AJguAAAAAAAAAAAAAAAAAAAAAAjbsPNu96o/90qtj8in9MdyVuw8273qj5lKrY/Jp0/xjuBol5vm8YGqMNYo3+Ir/Bajvq6IZZnm08J+zspp3+Inlq5abcdNXg3yjKacuibldU136vx3auWZ54jogGGU5tVXifs7NaIoxEbY0/DXT00+Cy4M3yunM8PvLk72unbRcp5aaumE/C57wKirC55929bpmd9HJcpjnp7ewFyb1NF2LVVyIqnbFMztmI5dI50avKL2DxNV3JsZTTRXOs2rtO+pirpjRyYfJ6s5oqzLMLlVF2rbZ3szHk6Yn7uz+8rsy7Na7GJjL86iKbvJTd5KbnqnpBvlWVThL1WLxeI8pfrjSa9NIiP8aY5nPX55x+3/AJrnMh1+ekft/wCYLgAAAAAAAAAAAAAAAAAAAAAI27Dzbveqn5lLmvZjXmdUZfk06RERFzETGymNNtNPTLq3Xebl31U/Mh0ZdXZwmCps2LtumNInTfU8sxtmQaZZltGWYfyWHp2ztqrq5ap6ap53Yw4Zb9Jt+1ScMt+k2/bpBu5cdl9vH73hVmKt5Osa9Md8dj74Zb9Jt+3ScMt+k2/bpBs58wwFGY4ebGKo1jmnniemJ5n1wy36Tb9uk4Zb9Jt+3SCLh8bXkd2MHm9U1WZ2W8Tpyc0U1tJnfbsomJ2Thub9aliL1nE2Zs371qqmdk0zVTteeyfCRgt1PkrGJmu35GZp1mJ3sb6Pu6g9YAAAAAAAAAAAAAAAAAAAAADLE4enF2JsYm3FVE8tM8+k6/6T+LmF6vo+LxVQEri5her7fxeJxcwvV9v4vFVASuLmF6vt/F4nFzC9X2/i8VUBK4uYXq+38XicXML1fb+LxVQEri5her7fxeLfB5RZwN7yuEwtNNWmmsa8nRtdwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=="}}]);
//# sourceMappingURL=300.39b282f4.chunk.js.map