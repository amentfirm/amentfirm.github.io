"use strict";(self.webpackChunkFirmament=self.webpackChunkFirmament||[]).push([[3778],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>w});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,w=m["".concat(l,".").concat(u)]||m[u]||h[u]||p;return a?r.createElement(w,o(o({ref:t},c),{},{components:a})):r.createElement(w,o({ref:t},c))}));function w(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<p;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},52656:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const p={slug:"news-scraper",title:"HK News Scraper",authors:["po","singchun"],tags:["apps","news","scaper"]},o=void 0,i={permalink:"/blog/news-scraper",source:"@site/blog/2023-01-14-news-scraper/index.md",title:"HK News Scraper",description:"We scrapped HK news using CORS proxy and cheerio to feed live news from below news channels:",date:"2023-01-14T00:00:00.000Z",formattedDate:"January 14, 2023",tags:[{label:"apps",permalink:"/blog/tags/apps"},{label:"news",permalink:"/blog/tags/news"},{label:"scaper",permalink:"/blog/tags/scaper"}],readingTime:.92,hasTruncateMarker:!1,authors:[{name:"Po",title:"Freelancer",url:"https://github.com/piratepo",imageURL:"https://github.com/piratepo.png",key:"po"},{name:"Sing Chun",title:"Freelancer",url:"https://github.com/singchun",imageURL:"https://github.com/singchun.png",key:"singchun"}],frontMatter:{slug:"news-scraper",title:"HK News Scraper",authors:["po","singchun"],tags:["apps","news","scaper"]},nextItem:{title:"First Realtime Database Apps",permalink:"/blog/first-apps"}},l={authorsImageUrls:[void 0,void 0]},s=[],c={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"We scrapped HK news using ",(0,n.kt)("a",{parentName:"p",href:"https://cors-anywhere.herokuapp.com/"},"CORS proxy")," and ",(0,n.kt)("a",{parentName:"p",href:"https://cheerio.js.org/"},"cheerio")," to feed live news from below news channels:"),(0,n.kt)("p",null,"\u6211\u54cb\u7528\u5497",(0,n.kt)("a",{parentName:"p",href:"https://cors-anywhere.herokuapp.com/"},"CORS proxy"),"\u540c",(0,n.kt)("a",{parentName:"p",href:"https://cheerio.js.org/"},"cheerio"),"\u53bb\u6536\u96c6\u4e0b\u9762\u5404\u65b0\u805e\u7db2\u5605\u5373\u6642/\u7126\u9ede\u65b0\u9592\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.hk01.com"},"HK01/\u9999\u6e2f01")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.takungpao.com.hk"},"Ta Kung Pao/\u5927\u516c\u5831")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.stheadline.com"},"Sing Tao Daily/\u661f\u5cf6\u65e5\u5831")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hk.on.cc"},"Oriental Daily News/\u6771\u65b9\u65e5\u5831")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.mingpao.com/pns"},"Ming Pao/\u660e\u5831")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.secretchina.com/news/b5/index.html"},"Vision Times/\u770b\u4e2d\u570b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.epochtimes.com/b5"},"Epoch Times/\u5927\u7d00\u5143")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://hk.news.yahoo.com"},"Yahoo/\u96c5\u864e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.hkcna.hk"},"HKCNA/\u9999\u6e2f\u65b0\u9592\u7db2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.rthk.hk"},"RTHK News/\u9999\u6e2f\u96fb\u53f0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.hongkongmetas.com"},"HK Matters/\u9999\u6e2f\u65b0\u805e\u9023\u7dda")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.tvb.com/tc"},"TVB News/\u7121\u7dda\u65b0\u805e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.news.gov.hk/chi/index.html"},"Gov News/\u653f\u5e9c\u65b0\u805e\u7db2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.wenweipo.com/immed/hongkong"},"Wen Wei Po/\u6587\u532f\u5831")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.am730.com.hk"},"am730")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://news.now.com/home"},"Now News/Now \u65b0\u805e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.bbc.com/zhongwen/trad"},"BBC News/BBC \u65b0\u805e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.abc.net.au/news/chinese/china"},"ABC News/ABC \u65b0\u805e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ici.radio-canada.ca/rci/zh-hant"},"CBC Radio/\u52a0\u62ff\u5927\u65b0\u805e")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cn.nytimes.com/hk-taiwan/zh-hant/"},"NY Times/\u7d10\u7d04\u6642\u5831"))))}m.isMDXComponent=!0}}]);