(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c(16),i=c.n(s),r=(c(23),c(10)),l=(c(24),c(2)),o=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{name:e.name,id:e.id,image:e.image,episodes:e.episode.length,status:e.status,species:e.species,origin:e.origin.name}}))}))},d=c(7),j=(c(25),function(e){var t=e.info,c=t.name,a=t.id,s=t.image,i=t.species;return Object(n.jsxs)(d.b,{to:"/detail/".concat(a),style:{textDecoration:"none",color:"inherit"},children:[Object(n.jsx)("img",{className:"item__card--img",src:s,alt:"Foto de ".concat(c),title:"Foto de ".concat(c)}),Object(n.jsxs)("div",{className:"item__card--texts",children:[Object(n.jsx)("h4",{className:"item__card--title",children:c}),Object(n.jsx)("p",{className:"item__card--description",children:i})]})]})}),u=(c(31),function(){return console.log("filter empty"),Object(n.jsx)("p",{className:"filter__error",children:"\xbf\xbf\xbf\xbfEse qui\xe9n es???"})}),m=(c(32),function(e){var t=!1;return 0===e.data.length&&(t=!0),t?Object(n.jsx)(u,{}):Object(n.jsx)("section",{className:"section-Characters",children:Object(n.jsx)("ul",{className:"section-Characters__list",children:e.data.map((function(e){return Object(n.jsx)("li",{className:"section-Characters__list__card",children:Object(n.jsx)(j,{info:e})},e.id)}))})})}),b=(c(33),function(){return Object(n.jsx)("div",{className:"loading",children:"Loading"})}),h=(c(34),function(e){return Object(n.jsx)("form",{className:"section__filter",onSubmit:function(e){e.preventDefault()},children:Object(n.jsx)("input",{className:"section__filter__input",type:"text",name:"name",placeholder:"\xbfa qui\xe9n buscas?",value:e.value,onChange:function(t){e.handleFilter(t.target.value)}})})}),O=(c(35),c.p+"static/media/Rick_and_Morty_-_logo_(English).de13d484.png");var f=function(e){var t=e.info,c=t.episodes,a=t.origin,s=t.status,i=t.name,r=(t.id,t.image),l=t.species;return Object(n.jsxs)("div",{className:"detail__character",children:[Object(n.jsx)("img",{className:"detail__character--img",src:r,alt:"Foto de ".concat(i),title:"Foto de ".concat(i)}),Object(n.jsxs)("div",{className:"detail__character--texts",children:[Object(n.jsx)("h3",{className:"detail__card--title",children:i}),Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"bold",children:"Status: "}),s]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"bold",children:"Species: "}),l]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"bold",children:"Origin: "}),a]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:"bold",children:"Episodes: "}),c]})]})]})]})};var x=function(){return Object(n.jsx)("div",{className:"detail__character",children:Object(n.jsx)("h3",{className:"detail__card--title",children:"Character Not Found"})})},_=function(e){return console.log(e.info),Object(n.jsxs)("article",{className:"detail",children:[Object(n.jsx)("img",{className:"detail__title",src:O,alt:"Logo Rick and Morty"}),Object(n.jsxs)("div",{className:"detail__card",children:[Object(n.jsxs)(d.b,{to:"./",className:"detail__card__button",children:["< ","Volver"," "]}),e.info?Object(n.jsx)(f,{info:e.info}):Object(n.jsx)(x,{text:"Character not Found"})]})]})};var p=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)([]),d=Object(r.a)(i,2),j=d[0],u=d[1],f=Object(a.useState)(""),x=Object(r.a)(f,2),p=x[0],g=x[1];Object(a.useEffect)((function(){o().then((function(e){u(e),s(!1)}))}),[]);var N=j.filter((function(e){return e.name.toUpperCase().includes(p.toUpperCase())})).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{className:"App__title",children:"Rick and Morty"}),Object(n.jsx)("img",{style:{width:"50%"},src:O,alt:"Logo Rick and Morty"}),Object(n.jsx)(h,{value:p,handleFilter:function(e){g(e)}}),c?Object(n.jsx)(b,{}):Object(n.jsx)(m,{data:N}),Object(n.jsx)(l.a,{exact:!0,path:"/detail/:id",render:function(e){var t=j.find((function(t){return t.id===parseInt(e.match.params.id)}));return Object(n.jsx)(_,{info:t})}})]})};c.p;i.a.render(Object(n.jsx)(d.a,{children:Object(n.jsx)(p,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.f156fdbe.chunk.js.map