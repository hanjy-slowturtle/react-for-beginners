(this["webpackJsonpreact-for-beginners-by-cra"]=this["webpackJsonpreact-for-beginners-by-cra"]||[]).push([[0],{10:function(e,t,c){e.exports={movie:"Movie_movie__2JWP0",movie__img:"Movie_movie__img__3Ik_S",movie__title:"Movie_movie__title__1GxXf",movie__year:"Movie_movie__year__yUWNk",movie__genres:"Movie_movie__genres__23tLM"}},14:function(e,t,c){e.exports={container:"Home_container__fvPzo",loader:"Home_loader__2IV8B",movies:"Home_movies__3yffU"}},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(18),a=c.n(i),s=c(12),o=c(2),j=c(8),m=c.n(j),l=c(13),v=c(9),_=c(1);var u=function(){var e=Object(o.f)().id,t=Object(n.useState)(!0),c=Object(v.a)(t,2),r=c[0],i=c[1],a=Object(n.useState)(null),s=Object(v.a)(a,2),j=s[0],u=s[1],d=function(){var e=Object(l.a)(m.a.mark((function e(t){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(t));case 2:return e.next=4,e.sent.json();case 4:c=e.sent,console.log(c),u(c.data.movie),i(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return d(e)}),[]),Object(_.jsx)("div",{children:r?Object(_.jsx)("h1",{children:"Loading..."}):Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"Detail"}),Object(_.jsxs)("div",{children:[Object(_.jsx)("h3",{children:j.title}),Object(_.jsx)("img",{src:j.large_cover_image,alt:j.title})]})]})})},d=c(10),b=c.n(d);var h=function(e){var t=e.id,c=e.coverImg,n=e.title,r=e.year,i=e.summary,a=e.genres;return Object(_.jsxs)("div",{className:b.a.movie,children:[Object(_.jsx)("img",{src:c,alt:n,className:b.a.movie__img}),Object(_.jsxs)("div",{children:[Object(_.jsx)("h2",{className:b.a.movie__title,children:Object(_.jsx)(s.b,{to:"/movie/".concat(t),children:n})}),Object(_.jsx)("h3",{className:b.a.movie__year,children:r}),Object(_.jsx)("p",{children:i.length>235?"".concat(i.slice(0,235),"..."):i}),Object(_.jsx)("ul",{className:b.a.movie__genres,children:a.map((function(e){return Object(_.jsx)("li",{children:e},e)}))})]})]})},O=c(14),x=c.n(O);var f=function(){var e=Object(n.useState)(!0),t=Object(v.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),a=Object(v.a)(i,2),s=a[0],o=a[1],j=function(){var e=Object(l.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,o(c.data.movies),r(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return j()}),[]),Object(_.jsx)("div",{className:x.a.container,children:c?Object(_.jsx)("div",{className:x.a.loader,children:Object(_.jsx)("span",{children:"Loading..."})}):Object(_.jsx)("div",{className:x.a.movies,children:s.map((function(e){return Object(_.jsx)(h,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var p=function(){return Object(_.jsx)(s.a,{children:Object(_.jsxs)(o.c,{children:[Object(_.jsx)(o.a,{path:"/movie/:id",children:Object(_.jsx)(u,{})}),Object(_.jsx)(o.a,{path:"/",children:Object(_.jsx)(f,{})})]})})};c(35);a.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(p,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9f15ed08.chunk.js.map