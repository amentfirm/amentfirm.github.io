"use strict";(self.webpackChunkFirmament=self.webpackChunkFirmament||[]).push([[3984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,b=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return r?a.createElement(b,i(i({ref:t},c),{},{components:r})):a.createElement(b,i({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},74232:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={slug:"first-apps",title:"First Realtime Database Apps",authors:["po","singchun"],tags:["first","apps"]},i=void 0,p={permalink:"/blog/first-apps",source:"@site/blog/2022-12-26-first-apps/index.md",title:"First Realtime Database Apps",description:'We customized a navbar item (with this workaround) for "menu bar log-in" using Firebase Authentication and wrote two simple apps to read/write data to/from Firebase Realtime Database.',date:"2022-12-26T00:00:00.000Z",formattedDate:"December 26, 2022",tags:[{label:"first",permalink:"/blog/tags/first"},{label:"apps",permalink:"/blog/tags/apps"}],readingTime:.335,hasTruncateMarker:!1,authors:[{name:"Po",title:"Freelancer",url:"https://github.com/piratepo",imageURL:"https://github.com/piratepo.png",key:"po"},{name:"Sing Chun",title:"Freelancer",url:"https://github.com/singchun",imageURL:"https://github.com/singchun.png",key:"singchun"}],frontMatter:{slug:"first-apps",title:"First Realtime Database Apps",authors:["po","singchun"],tags:["first","apps"]},prevItem:{title:"HK News Scraper",permalink:"/blog/news-scraper"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},s={authorsImageUrls:[void 0,void 0]},l=[],c={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We customized a navbar item (with this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/pull/7231"},"workaround"),') for "menu bar log-in" using ',(0,n.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/auth?hl=en"},"Firebase Authentication")," and wrote two simple apps to read/write data to/from ",(0,n.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/database?hl=en"},"Firebase Realtime Database"),"."),(0,n.kt)("p",null,"\u7528\u5497",(0,n.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/pull/7231"},"\u5462\u55f0post"),"\u6559\u5605workaround\u6574\u5497\u7528",(0,n.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/auth?hl=en"},"Firebase Authentication"),'\u5605"menu bar log-in"\uff0c\u540c\u57cb\u5beb\u5497\u5169\u500b\u7c21\u55ae\u5605',(0,n.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/database?hl=en"},"Firebase Realtime Database"),"\u8b80\u5165\u5beb\u51fa\u5605web apps\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Firebase/Display"},"Read")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/Firebase/Submit"},"Write"))))}m.isMDXComponent=!0}}]);