(this["webpackJsonpreact-for-beginners-by-cra"]=this["webpackJsonpreact-for-beginners-by-cra"]||[]).push([[0],{33:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(16),s=c.n(i),a=c(11),j=c(2),o=c(8),u=c.n(o),b=c(12),d=c(9),l=c(1);var O=function(){var e=Object(j.f)().id,t=Object(n.useState)(!0),c=Object(d.a)(t,2),r=c[0],i=c[1],s=Object(n.useState)(null),a=Object(d.a)(s,2),o=a[0],O=a[1],h=function(){var e=Object(b.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(t));case 2:return e.next=4,e.sent.json();case 4:c=e.sent,console.log(c),O(c.data.movie),i(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return h(e)}),[]),Object(l.jsx)("div",{children:r?Object(l.jsx)("h1",{children:"Loading..."}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Detail"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:o.title}),Object(l.jsx)("img",{src:o.large_cover_image,alt:o.title})]})]})})};var h=function(e){var t=e.id,c=e.coverImg,n=e.title,r=e.summary,i=e.genres;return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:c,alt:n}),Object(l.jsx)("h2",{children:Object(l.jsx)(a.b,{to:"/movie/".concat(t),children:n})}),Object(l.jsx)("p",{children:r}),Object(l.jsx)("ul",{children:i.map((function(e){return Object(l.jsx)("li",{children:e},e)}))})]})};var x=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),s=Object(d.a)(i,2),a=s[0],j=s[1],o=function(){var e=Object(b.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,j(c.data.movies),r(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return o()}),[]),Object(l.jsx)("div",{children:c?Object(l.jsx)("h1",{children:"Loading..."}):Object(l.jsx)("div",{children:a.map((function(e){return Object(l.jsx)(h,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var v=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/movie/:id",children:Object(l.jsx)(O,{})}),Object(l.jsx)(j.a,{path:"/",children:Object(l.jsx)(x,{})})]})})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.1219cc80.chunk.js.map