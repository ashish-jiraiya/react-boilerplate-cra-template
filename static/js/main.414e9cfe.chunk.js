(this["webpackJsonpcra-template-rb"]=this["webpackJsonpcra-template-rb"]||[]).push([[0],{111:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(91),a=t(33),i=t(0),o=t.n(i);function c(){var e=Object(r.a)(["\n  0% {\n    stroke-dasharray: 0, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 100, 150;\n    stroke-dashoffset: -24;\n  }\n  100% {\n    stroke-dasharray: 0, 150;\n    stroke-dashoffset: -124;\n  }\n"]);return c=function(){return e},e}function u(){var e=Object(r.a)(["\n  100% {\n    transform: rotate(360deg);\n  }\n"]);return u=function(){return e},e}var l=function(e){return o.a.createElement(f,{viewBox:"-24 -24 48 48",small:e.small},o.a.createElement(h,{cx:"0",cy:"0",r:"20",fill:"none",strokeWidth:"4"}))},s=Object(a.d)(u()),d=Object(a.d)(c()),f=a.c.svg.withConfig({componentId:"pqmxlo-0"})(["animation:"," ","s linear infinite;height:",";width:",";transform-origin:center;"],s,2.625,(function(e){return e.small?"1.25rem":"3rem"}),(function(e){return e.small?"1.25rem":"3rem"})),h=a.c.circle.withConfig({componentId:"pqmxlo-1"})(["animation:"," ","s ease-in-out infinite;stroke:",";stroke-linecap:round;"],d,1.5,(function(e){return e.theme.primary}))},114:function(e,n,t){"use strict";t.d(n,"c",(function(){return l})),t.d(n,"d",(function(){return s})),t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f})),t.d(n,"e",(function(){return h}));var r=t(71),a=t(44),i={light:{primary:"rgba(215,113,88,1)",text:"rgba(58,52,51,1)",textSecondary:"rgba(58,52,51,0.7)",background:"rgba(255,255,255,1)",backgroundVariant:"rgba(251,249,249,1)",border:"rgba(58,52,51,0.12)",borderLight:"rgba(58,52,51,0.05)"},dark:{primary:"rgba(220,120,95,1)",text:"rgba(241,233,231,1)",textSecondary:"rgba(241,233,231,0.6)",background:"rgba(0,0,0,1)",backgroundVariant:"rgba(28,26,26,1)",border:"rgba(241,233,231,0.15)",borderLight:"rgba(241,233,231,0.05)"}},o=t(148),c={selected:Object(o.a)()||"system"},u=Object(r.b)({name:"theme",initialState:c,reducers:{changeTheme:function(e,n){e.selected=n.payload}}}),l=Object(a.a)([function(e){return e.theme||c}],(function(e){return"system"===e.selected?o.b?i.dark:i.light:i[e.selected]})),s=Object(a.a)([function(e){return e.theme||c}],(function(e){return e.selected})),d=u.actions.changeTheme,f=u.reducer,h=u.name},148:function(e,n,t){"use strict";var r,a;t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return c}));var i=(null===(r=window)||void 0===r?void 0:r.matchMedia)?null===(a=window.matchMedia("(prefers-color-scheme: dark)"))||void 0===a?void 0:a.matches:void 0;function o(e){window.localStorage&&localStorage.setItem("selectedTheme",e)}function c(){return window.localStorage&&localStorage.getItem("selectedTheme")||null}},150:function(e){e.exports=JSON.parse('{"routingFeature":{"title":"Industry-standard Routing","description":"It\'s natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible."},"i18nFeature":{"title":"i18n Internationalization & Pluralization","selectLanguage":"Select Language","description":"Scalable apps need to support multiple languages, easily add and support multiple languages. Change the language below to see how instantly it updates the page without refreshing."},"feedbackFeature":{"title":"Instant Feedback","description":"Enjoy the best DX and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page."},"scaffoldingFeature":{"title":"Quick Scaffolding","description":"Automate the creation of components, features, routes, selectors and sagas - and their tests - right from the CLI! Avoid fighting the glue of your code and focus on your app!"}}')},154:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e.NAV_BAR_HEIGHT="4rem"}(r||(r={}))},236:function(e){e.exports=JSON.parse('{"routingFeature":{"title":"Standard Routing","description":"Routing macht es m\xf6glich Seiten (z.B. \'/about\') Ihrer Anwendung hinzuzuf\xfcgen."},"i18nFeature":{"title":"i18n Internationalisierung und Pluralisierung","selectLanguage":"Sprache ausw\xe4hlen","description":"Das Internet ist global. Mehrsprachige- und Pluralisierungsunterst\xfctzung ist entscheidend f\xfcr gro\xdfe Web-Anwendungen. Sie k\xf6nnen die Sprache unten ver\xe4ndern, ohne die Seite aktualisieren zu m\xfcssen."},"feedbackFeature":{"title":"Sofortiges Feedback","description":"Genie\xdfen Sie die beste Entwicklungserfahrung und programmieren Sie Ihre App so schnell wie noch nie! Ihre \xc4nderungen an dem CSS und JavaScript sind sofort reflektiert, ohne die Seite aktualisieren zu m\xfcssen."},"scaffoldingFeature":{"title":"Schnelles Scaffolding","description":"Automatisieren Sie die Kreation von Komponenten, Containern, Routen, Selektoren und Sagas \u2013 und ihre Tests \u2013 direkt von dem Terminal!"}}')},246:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(241),a=t(156),i=t(235),o=t(150),c=t(236),u={en:{translation:o},de:{translation:c}},l={};r.a.use(a.a).use(i.a).init({resources:u,fallbackLng:"en",debug:!1,interpolation:{escapeValue:!1}},(function(){!function e(n,t,r){Object.keys(n).forEach((function(a){var i=r?"".concat(r,".").concat(a):a;"object"===typeof n[a]?(t[a]={},e(n[a],t[a],i)):t[a]=i}))}(o,l)}))},248:function(e,n,t){e.exports=t(487)},487:function(e,n,t){"use strict";t.r(n);t(249),t(258);var r=t(0),a=t.n(r),i=t(110),o=t(51),c=t(231),u=t.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(450),t(246);var l=t(108),s=t(155),d=t(62),f=t(91),h=t(33),g=t(154);function m(){var e=Object(f.a)(["\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n    line-height: 1.5;\n  }\n\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    padding-top: ",";\n    background-color: ",";\n  }\n\n  body.fontLoaded {\n    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n  \n  p,\n  label {\n    line-height: 1.5em;\n  }\n\n  input, select, button {\n    font-family: inherit;\n    font-size: inherit;\n  }\n\n  .icon {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n"]);return m=function(){return e},e}var b=Object(h.b)(m(),g.a.NAV_BAR_HEIGHT,(function(e){return e.theme.background})),p=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{fallback:null},i=e;n&&(i=function(){return e().then((function(e){return{default:n(e)}}))});var o=Object(r.lazy)(i);return function(e){return a.a.createElement(r.Suspense,{fallback:t.fallback},a.a.createElement(o,e))}},v=t(111),k=h.c.div.withConfig({componentId:"sc-5cfof0-0"})(["width:100%;height:100vh;display:flex;align-items:center;justify-content:center;"]),y=p((function(){return t.e(3).then(t.bind(null,492))}),(function(e){return e.HomePage}),{fallback:r.createElement(k,null,r.createElement(v.a,null))}),w=p((function(){return t.e(4).then(t.bind(null,493))}),(function(e){return e.NotFoundPage}),{fallback:r.createElement(v.a,null)});var S=t(242),E=t(71),j=t(112),O=t(243),I=t(245),x=t(30);function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return 0===Object.keys(e).length?function(e){return e}:Object(x.c)(Object(I.a)({},e))}var C=t(114),F=function(e){Object(j.b)({key:C.e,reducer:C.b});var n=Object(o.d)(C.c);return a.a.createElement(h.a,{theme:n},a.a.Children.only(e.children))};new u.a("Inter",{}).load().then((function(){document.body.classList.add("fontLoaded")}));var T,z=function(){var e=Object(O.a)({}),n=e.run,t=[e],r=[Object(j.a)({createReducer:A,runSaga:n})];return Object(E.a)({reducer:A(),middleware:[].concat(Object(S.a)(Object(E.c)()),t),devTools:"/react-boilerplate-cra-template".length>0,enhancers:r})}(),L=document.getElementById("root"),R=function(e){var n=e.Component;return r.createElement(o.a,{store:z},r.createElement(F,null,r.createElement(l.b,null,r.createElement(r.StrictMode,null,r.createElement(n,null)))))};T=function(){return r.createElement(s.a,null,r.createElement(l.a,{titleTemplate:"%s - React Boilerplate",defaultTitle:"React Boilerplate"},r.createElement("meta",{name:"description",content:"A React Boilerplate application"})),r.createElement(d.c,null,r.createElement(d.a,{exact:!0,path:"/react-boilerplate-cra-template/",component:y}),r.createElement(d.a,{component:w})),r.createElement(b,null))},i.render(r.createElement(R,{Component:T}),L),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[248,1,2]]]);