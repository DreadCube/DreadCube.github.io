(this.webpackJsonpcarttimes=this.webpackJsonpcarttimes||[]).push([[0],{59:function(e,t,a){e.exports=a(82)},64:function(e,t,a){},65:function(e,t,a){},66:function(e){e.exports=JSON.parse("{}")},73:function(e,t){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(39),i=a.n(c),l=(a(64),a(65),a(52)),o=a(19),u=a(44),s=a(99),m=a(97),d=a(4),f=(a(66),a(47)),p=a.n(f),E=function(e){var t=e.seriesData,a=e.title,n=r.a.useState(t),c=Object(d.a)(n,2),i=c[0],l=c[1];r.a.useEffect((function(){var e=t.map((function(e){return e.data=e.data.map((function(e){return function(e){var t=e.split(":");return 60*Number(t[0])*1e3+1e3*Number(t[1])+Number(t[2])}(e)})),e}));l(e)}),[t]);var o={title:{text:a,margin:10,style:{color:"#FFFFFF"}},dataLabels:{enabled:!1},chart:{id:"basic-bar",type:"area",animations:{enabled:!0,easing:"easeinout",speed:800,animateGradually:{enabled:!0,delay:150},dynamicAnimation:{enabled:!0,speed:350}}},xaxis:{categories:[].fill(20),labels:{formatter:function(e){return"L ".concat(e)},style:{colors:"#FFFFFF"}}},yaxis:{labels:{formatter:function(e){return function(e){var t=parseInt(e%1e3),a=Math.floor(e/1e3%60),n=Math.floor(e/6e4%60),r=Math.floor(e/36e5%24);return r=r<10?"0"+r:r,t<10?t="00"+t:t<100&&(t="0"+t),(n=n<10?"0"+n:n)+":"+(a=a<10?"0"+a:a)+"."+t}(e)},style:{fontSize:"2.5vw",colors:"#FFFFFF"},show:!1}},legend:{labels:{useSeriesColors:!0}}};return r.a.createElement(p.a,{options:o,series:i,type:"area"})},h=a(98),b=function(e){e.title;var t=e.seriesData,a=t.map((function(e){return e.name}));a.unshift("Lap");for(var n=t.map((function(e){return e.data})),c=[],i=n[0].length,l=function(e){var t=n.map((function(t,a){return t[e]}));t.unshift(e+1),c.push(t)},o=0;o<i;o++)l(o);return r.a.createElement(h.a,{columns:a,data:c})},g=a(40),v=a(53);g.a.plugin(v.a);var y=g.a,w=function(e){return new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"})},S=function(e){e.selectedRacers;var t=r.a.useState([]),a=Object(d.a)(t,2),n=a[0],c=a[1];return r.a.useEffect((function(){new y("races").find({selector:{dateTime:{$exists:!0}},sort:[{dateTime:"desc"}]}).then((function(e){c(e.docs)}))}),[]),r.a.createElement("div",{style:{marginBottom:50}},n.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{title:w(e.dateTime),seriesData:e.series}),r.a.createElement(b,{title:w(e.dateTime),seriesData:e.series}))})))},F=a(37),R=a(42),T=a(48),x=a(93),D=a(54),O=a(94),j=a(96),_=a(36),N=function(){var e=Object(_.a)(),t=e.register,a=e.handleSubmit,n=r.a.useState([]),c=Object(d.a)(n,2),i=c[0],l=c[1];console.log(i);var o=r.a.useState(2),u=Object(d.a)(o,2),s=u[0],m=u[1];r.a.useEffect((function(){new y("racers").allDocs({include_docs:!0}).then((function(e){return l(e.rows.map((function(e){return e.doc})))}))}),[]);var f=new Array(s).fill(""),p=(new Date).toISOString();p.substring(0,6+(0|p.indexOf("T"))|0);return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:a((function(e){var t=new y("races");t.createIndex({index:{fields:["dateTime"]}}),t.find({selector:{dateTime:{$eq:e.dateTime}}}).then((function(a){a.docs.length>0?t.put(Object(R.a)({},e,{_id:a.docs[0]._id,_rev:a.docs[0]._rev})):t.put(Object(R.a)({},e,{_id:String(Math.random())})),console.log(e)}))}))},r.a.createElement(D.a,{type:"datetime-local",placeholder:"Race Date",name:"dateTime",inputRef:t({required:!0})}),r.a.createElement(D.a,{type:"number",placeholder:"Number of Rounds",name:"numberOfRounds",onChange:function(e){return m(Number(e.target.value))}}),r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},i.map((function(e,a){return r.a.createElement("div",{style:{margin:20,minWidth:300,display:"flex",flexDirection:"column",flex:1}},r.a.createElement(T.b,null,r.a.createElement(x.a,{styleLevel:6},e.name)),r.a.createElement("div",{style:{marginBottom:5}},r.a.createElement(D.a,{type:"hidden",name:"series[".concat(e._id,"].name"),value:e.name,inputRef:t({required:!0})}),r.a.createElement(D.a,{placeholder:"Kart Nr.",type:"number",name:"series[".concat(e._id,"].cartNr"),inputRef:t({required:!0})}),f.map((function(a,n){return r.a.createElement("div",{style:{marginTop:5,marginBottom:5}},r.a.createElement(O.a,{placeholder:"Runde ".concat(n+1),mask:"99:99:999",name:"series[".concat(e._id,"].data[").concat(n,"]"),inputRef:t}))}))))}))),r.a.createElement(j.a,{type:"submit"},"Speichern")))},I=function(){var e=Object(_.a)(),t=e.register,a=e.handleSubmit,n=r.a.useState([]),c=Object(d.a)(n,2),i=c[0],l=c[1];console.log(i),r.a.useEffect((function(){new y("racers").allDocs({include_docs:!0}).then((function(e){return l(e.rows.map((function(e){return e.doc})))}))}),[]);return r.a.createElement("form",{onSubmit:a((function(e){var t=new y("racers");t.allDocs().then((function(a){var n=String(a.rows.length);t.put({name:e.name,_id:n}).then((function(e){}))}))}))},r.a.createElement(D.a,{type:"TEXT",placeholder:"Racer Name",name:"name",inputRef:t({required:!0})}),r.a.createElement(j.a,{type:"submit"},"Hinzuf\xfcgen"))},k=a(95),A=a(50),C=a(43),M=function(){var e=r.a.useState("MAIN"),t=Object(d.a)(e,2),a=t[0],n=t[1],c=r.a.useState([]),i=Object(d.a)(c,2),l=i[0];i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{style:{marginBottom:20,paddingRight:20}},r.a.createElement(A.b,{$align:C.a.center},r.a.createElement(A.a,null,r.a.createElement(F.a,{style:{cursor:"pointer"},onClick:function(){return n("MAIN")}},"Home")),r.a.createElement(A.a,null,r.a.createElement(F.a,{style:{cursor:"pointer"},onClick:function(){return n("EDIT_RACERS")}},"Add Racers")),r.a.createElement(A.a,null,r.a.createElement(F.a,{style:{cursor:"pointer"},onClick:function(){return n("EDIT")}},"Edit Times")))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("div",{style:{width:"95vw"}},"MAIN"===a&&r.a.createElement(S,{selectedRacers:l}),"EDIT"===a&&r.a.createElement(N,null),"EDIT_RACERS"===a&&r.a.createElement(I,null))))},B=new l.a,q=Object(u.a)("div",{});var L=function(){return r.a.createElement(o.a,{value:B},r.a.createElement(s.a,{theme:m.a},r.a.createElement(q,null,r.a.createElement(M,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.0e418f47.chunk.js.map