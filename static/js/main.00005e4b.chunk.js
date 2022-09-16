(this["webpackJsonp17l-task"]=this["webpackJsonp17l-task"]||[]).push([[0],{25:function(e,a,n){},28:function(e,a,n){"use strict";n.r(a);var t,r,c,s,i,o,p,d=n(0),u=n.n(d),l=n(14),f=n.n(l),b=(n(25),n(2)),j=n(8),m=n(5),h=n(9),k=n(3),O=n(1),g=k.a.li(t||(t=Object(b.a)(["\n  display: flex;\n  position: absolute;\n  width: 320px;\n  height: 36px;\n  top: ","px;\n  transition: all 0.5s ease 0.5s;\n  font-size: 24px;\n  align-content: baseline;\n"])),(function(e){return 36*e.rank})),x=k.a.span(r||(r=Object(b.a)(["\n  color: black;\n  display: flex;\n  width: 22px;\n  justify-content: space-around;\n  padding-right: 6px;\n  @media (prefers-color-scheme: dark) {\n    color: white;\n  }\n"]))),B=k.a.span(c||(c=Object(b.a)(["\n  color: black;\n  display: inline-block;\n  padding-left: 6px;\n  @media (prefers-color-scheme: dark) {\n    color: white;\n  }\n"]))),y=k.a.span(s||(s=Object(b.a)(["\n  color: black;\n  display: inline-block;\n  min-width: 50px;\n  padding-left: 6px;\n  margin-left: auto;\n  &:after {\n    content: 'pt';\n  }\n  @media (prefers-color-scheme: dark) {\n    color: white;\n  }\n"]))),F=k.a.img(i||(i=Object(b.a)(["\n  display: flex;\n  height: 24px;\n  width: 24px;\n  border-radius: 20px;\n  align-self: center;\n"]))),I=function(e){var a=Object(d.useState)(e.score),n=Object(j.a)(a,2),t=n[0],r=n[1],c=Object(d.useRef)(e);return Object(d.useLayoutEffect)((function(){if(c.current&&c.current.score!==e.score){var a=100,n=e.score-t,s=Date.now();requestAnimationFrame((function e(){var c=Date.now()-s;c>a&&(c=a),r(t+(n+c)%a),c<a&&requestAnimationFrame(e)})),r(e.score)}}),[e.score]),Object(O.jsxs)(g,{rank:e.rank,children:[Object(O.jsx)(x,{children:e.rank}),Object(O.jsx)(F,{src:e.picture,alt:"Profile Picture"}),Object(O.jsx)(B,{children:e.displayName}),Object(O.jsx)(y,{children:t})]})},D=[{userID:"4f4d5462-4a9f-483e-b620-9df9c13ec840",displayName:"Jone",picture:"https://assets-17app.akamaized.net/THUMBNAIL_525BEE6E-94B5-4C7F-AB47-1A6F9735EE82.jpg",score:157e3},{userID:"2c0c5c67-1cfc-4b99-992e-2918b8a0dcc1",displayName:"Victoria",picture:"https://assets-17app.akamaized.net/THUMBNAIL_8390066D-46E4-4741-968D-9FF84B276B52.jpg",score:46200},{userID:"5100dedb-c2e5-48da-aeaf-83fa49a3482d",displayName:"Joy",picture:"https://assets-17app.akamaized.net/THUMBNAIL_CE9F51C5-7006-4DE6-9059-9AEA98F7DF13.jpg",score:38800},{userID:"9ece1a05-eb2d-403a-b179-ccbfc0ad9250",displayName:"Quinn",picture:"https://assets-17app.akamaized.net/THUMBNAIL_2A847B03-7BE8-4645-B62A-07201A90EDEF.jpg",score:33400},{userID:"32afdaac-a83b-481f-bc5a-1e85c3188c6f",displayName:"Sheenalo",picture:"https://assets-17app.akamaized.net/THUMBNAIL_95D163ED-6BF8-4D09-897C-B2E5320BE462.jpg",score:31600},{userID:"a2e0bdd3-0aa0-4fc4-91c2-b8ad00d26211",displayName:"Charlene",picture:"https://assets-17app.akamaized.net/THUMBNAIL_a943a748-16c8-4afa-87a6-8b6ac0e1f47a.jpg",score:30800},{userID:"47a35fbb-ce6b-4c82-9973-2a9391b6478d",displayName:"LeonaBaby",picture:"https://assets-17app.akamaized.net/THUMBNAIL_B850B9FF-E1FD-4DFA-8737-E67E32B71B8B.jpg",score:22300},{userID:"db8c493f-0a53-4b5f-8ffe-b0967e076e03",displayName:"Sunny",picture:"https://assets-17app.akamaized.net/THUMBNAIL_1A36F357-6EA2-4C77-B26F-588319F26EF2.jpg",score:17800},{userID:"44e1f164-831d-4732-8e49-0cda24369000",displayName:"ImWord",picture:"https://assets-17app.akamaized.net/THUMBNAIL_4f761f7d-0b85-45dd-90ad-1444c548abd6.jpg",score:17300},{userID:"416089f2-f66a-411a-b275-2151d86dcaeb",displayName:"Dophine",picture:"https://assets-17app.akamaized.net/THUMBNAIL_59946513-FC72-4444-8CC9-991BFFF19C22.jpg",score:15400}],N=k.a.ol(o||(o=Object(b.a)(["\n  position: relative;\n  display: flex;\n  min-width: 400px;\n  min-height: 600px;\n  margin: 0 auto;\n"]))),E=function(e,a){return e.score<a.score?1:-1},A=function(e){var a=function(e){var a=Math.floor(10*Math.random()),n=Math.floor(1e3*Math.random()),t=Object(h.a)(e);return t[a].score+=n,t}(e);return a.sort(E).map((function(e,a){return Object(m.a)(Object(m.a)({},e),{},{rank:a+1})}))},v=function(){var e=Object(d.useState)(Object(h.a)(D)),a=Object(j.a)(e,2),n=a[0],t=a[1];return Object(d.useEffect)((function(){var e=setInterval((function(){var e=function(e){var a=A(e);return Object(h.a)(e).map((function(e){var n=a.filter((function(a){return a.displayName===e.displayName}));return Object(m.a)(Object(m.a)({},e),{},{rank:n[0].rank,score:n[0].score})}))}(n);t(e)}),2e3);return function(){return clearInterval(e)}})),Object(O.jsx)(N,{children:n.map((function(e){return Object(O.jsx)(I,{rank:e.rank,userID:e.userID,displayName:e.displayName,score:e.score,picture:e.picture})}))})},M=k.a.div(p||(p=Object(b.a)(["\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  min-height: 100vh;\n  @media (prefers-color-scheme: dark) {\n    background-color: #282c34;\n  }\n"])));var w=function(){return Object(O.jsx)(M,{children:Object(O.jsx)(v,{})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(a){var n=a.getCLS,t=a.getFID,r=a.getFCP,c=a.getLCP,s=a.getTTFB;n(e),t(e),r(e),c(e),s(e)}))};f.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(u.a.StrictMode,{children:Object(O.jsx)(w,{})})),L()}},[[28,1,2]]]);
//# sourceMappingURL=main.00005e4b.chunk.js.map