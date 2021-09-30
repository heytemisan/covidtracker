(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{136:function(e,t,c){},138:function(e,t,c){},139:function(e,t,c){},145:function(e,t,c){},254:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(26),s=c.n(n),r=(c(136),c(37)),o=c.n(r),i=c(52),l=c(7),u=(c(138),c(293)),d=c(291),j=c(292),f=c(298),h=c(300),b=c(25),v=c(295),p=(c(139),c(2)),O=["title","cases","isRed","total","active"];var x=function(e){var t=e.title,c=e.cases,a=e.isRed,n=e.total,s=e.active,r=Object(b.a)(e,O);return Object(p.jsx)(f.a,{onClick:r.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(a&&"infoBox--red"),children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)(v.a,{className:"infoBox__title",color:"textSecondary",children:t}),Object(p.jsx)("h2",{className:"infoBox__cases ".concat(!a&&"infoBox__cases--green"),children:c}),Object(p.jsxs)(v.a,{className:"infoBox__total",color:"textSecondary",children:[n," Total"]})]})})},m=(c(145),c(288)),y=c(299),g=c(15),N=c(28),k=c.n(N),_=c(296),C=c(287),w={cases:{hex:"#CC1034",multiplier:200},recovered:{hex:"#7dd71d",multiplier:400},deaths:{hex:"#fb4443",multiplier:800}},S=function(e){return Object(g.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},R=function(e){return e?"+".concat(k()(e).format("0.0a")):"+0"},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(p.jsx)(_.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:w[t].hex,fillColor:w[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*w[t].multiplier,children:Object(p.jsx)(C.a,{children:Object(p.jsxs)("div",{className:"info-container",children:[Object(p.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(p.jsx)("div",{className:"info-name",children:e.country}),Object(p.jsxs)("div",{className:"info-confirmed",children:["Cases: ",k()(e.cases).format("0,0")]}),Object(p.jsxs)("div",{className:"info-recovered",children:["Recovered: ",k()(e.recovered).format("0,0")]}),Object(p.jsxs)("div",{className:"info-death",children:["Deaths: ",k()(e.deaths).format("0,0")]})]})})})}))};var I=function(e){var t=e.countries,c=e.casesType,a=e.center,n=e.zoom;return Object(p.jsx)("div",{className:"map",children:Object(p.jsxs)(m.a,{center:a,zoom:n,children:[Object(p.jsx)(y.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),B(t,c)]})})};c(97);var T=function(e){var t=e.countries;return Object(p.jsx)("div",{className:"table",children:t.map((function(e){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.country}),Object(p.jsx)("td",{children:Object(p.jsx)("strong",{children:k()(e.cases).format("0,0")})})]})}))})},D=c(124),E=["casesType"],z={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return k()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return k()(e).format("0a")}}}]}},A=function(e,t){var c,a=[];for(var n in e.cases){if(c){var s={x:n,y:e[t][n]-c};a.push(s)}c=e[t][n]}return a};var M=function(e){var t=e.casesType,c=void 0===t?"cases":t,n=Object(b.a)(e,E),s=Object(a.useState)({}),r=Object(l.a)(s,2),u=r[0],d=r[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=30").then((function(e){return e.json()})).then((function(e){var t=A(e,"cases");d(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[c]),Object(p.jsxs)("div",{className:n.className,children:[(null===u||void 0===u?void 0:u.length)>0&&Object(p.jsx)(D.a,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:u}]},options:z}),Object(p.jsx)("div",{})]})};c(252);var F=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("worldwide"),r=Object(l.a)(s,2),b=r[0],v=r[1],O=Object(a.useState)({}),m=Object(l.a)(O,2),y=m[0],g=m[1],N=Object(a.useState)([]),k=Object(l.a)(N,2),_=k[0],C=k[1],w=Object(a.useState)({lat:34.80746,lng:-40.4796}),B=Object(l.a)(w,2),D=B[0],E=B[1],z=Object(a.useState)(3),A=Object(l.a)(z,2),F=A[0],J=A[1],L=Object(a.useState)([]),W=Object(l.a)(L,2),Y=W[0],q=W[1],K=Object(a.useState)("cases"),V=Object(l.a)(K,2),G=V[0],H=V[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){g(e)}))}),[]),Object(a.useEffect)((function(){var e=function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=S(e);C(c),q(e),n(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var P=function(){var e=Object(i.a)(o.a.mark((function e(t){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,a="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(a).then((function(e){return e.json()})).then((function(e){v(c),g(e),E([e.countryInfo.lat,e.countryInfo.lng]),J(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsxs)("div",{className:"app__left",children:[Object(p.jsxs)("div",{className:"app__header",children:[Object(p.jsx)("h1",{children:"COVID-19 TRACKER"}),Object(p.jsx)(u.a,{className:"app__dropdown",children:Object(p.jsxs)(d.a,{variant:"outlined",value:b,onChange:P,children:[Object(p.jsx)(j.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e){return Object(p.jsx)(j.a,{value:e.value,children:e.name})}))]})})]}),Object(p.jsxs)("div",{className:"app__stats",children:[Object(p.jsx)(x,{isRed:!0,active:"cases"===G,onClick:function(e){return H("cases")},title:"Coronavirus Cases",total:R(y.todayCases),cases:R(y.cases)}),Object(p.jsx)(x,{active:"recovered"===G,onClick:function(e){return H("recovered")},title:"Recovered",total:R(y.todayRecovered),cases:R(y.recovered)}),Object(p.jsx)(x,{isRed:!0,active:"deaths"===G,onClick:function(e){return H("deaths")},title:"Deaths",total:R(y.todayDeaths),cases:R(y.deaths)})]}),Object(p.jsx)(I,{casesType:G,zoom:F,center:D,countries:Y})]}),Object(p.jsx)(f.a,{className:"app__right",children:Object(p.jsxs)(h.a,{children:[Object(p.jsx)("h3",{children:"Live Cases by Country"}),Object(p.jsx)(T,{countries:_}),Object(p.jsxs)("h3",{className:"app__graphTitle ",children:["Worldwide new ",G]}),Object(p.jsx)(M,{className:"app__graph",casesType:G}),Object(p.jsx)("div",{className:"text-center m-3 py-2 border rounded-pill",children:Object(p.jsxs)("h3",{className:"text-dark",style:{fontFamily:"Ephesis"},children:["Created By Temisan. ",Object(p.jsx)("a",{class:"social-icon-link-github",href:"https://www.facebook.com/temy.momodu",target:"_blank",rel:"noopener","aria-label":"Facebook",children:Object(p.jsx)("i",{class:"fab fa-facebook"})})]})})]})})]})};s.a.render(Object(p.jsx)(F,{}),document.getElementById("root"))},97:function(e,t,c){}},[[254,1,2]]]);
//# sourceMappingURL=main.20ea870d.chunk.js.map