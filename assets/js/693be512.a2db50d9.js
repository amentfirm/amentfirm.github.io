"use strict";(self.webpackChunkFirmament=self.webpackChunkFirmament||[]).push([[6533],{77967:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>b,contentTitle:()=>v,default:()=>x,frontMatter:()=>m,metadata:()=>w,toc:()=>U});var a=r(87462),n=r(67294),s=r(3905),i=r(60490);r.p;var l=r(93388),c=(r(25935),r(25108));function o(t,e){for(let r=0;r<t.length;r++)t[r].srcUrl=e.url+t[r].srcUrl;return t}function p(t,e){for(let r=0;r<t.length;r++)t[r].imgUrl=e.url+t[r].imgUrl;return t}function d(t,e){for(let r=0;r<t.length;r++)t[r].imgUrl="//wsrv.nl/?url="+t[r].imgUrl;return t}function h(t,e){switch(t){case 0:case 2:case 4:case 6:case 7:case 9:case 11:return 31;case 3:case 5:case 8:case 10:return 30;case 1:return e%4==0?29:28;default:return 0}}function u(t){switch(t){case 0:return"Jan";case 1:return"Feb";case 2:return"Mar";case 3:return"Apr";case 4:return"May";case 5:return"Jun";case 6:return"Jul";case 7:return"Aug";case 8:return"Sep";case 9:return"Oct";case 10:return"Nov";case 11:return"Dec";default:return"Unknown"}}const f=[{value:"hk01",label:"HK01/\u9999\u6e2f01",url:"https://www.hk01.com",path:"",parser:async function(t){var e=[];let r;if(r=(0,i.zD)(t)("#__NEXT_DATA__").html()){var a=JSON.parse(r);for(let t=0;t<a.props.initialProps.pageProps.sections[0].items.length;t++)e.push({title:a.props.initialProps.pageProps.sections[0].items[t].data.title,imgUrl:a.props.initialProps.pageProps.sections[0].items[t].data.mainImage.cdnUrl,srcUrl:a.props.initialProps.pageProps.sections[0].items[t].data.publishUrl,desc:a.props.initialProps.pageProps.sections[0].items[t].data.description})}return e},postProcess:[o],isDisabled:!1,isHidden:!1},{value:"takungpao",label:"Ta Kung Pao/\u5927\u516c\u5831",url:"http://www.takungpao.com.hk",path:"",parser:async function(t){var e=[];let r=(0,i.zD)(t),a=r(".swiper-slide");for(let n=0;n<a.length;n++){let t=r(a[n]).find("a"),s=r(a[n]).find("img"),i=r(a[n]).find("span");i.length&&e.push({title:i.text(),imgUrl:s.attr("src"),srcUrl:t.attr("href"),desc:""})}return e},postProcess:[d],isDisabled:!1,isHidden:!1},{value:"st",label:"Sing Tao Daily/\u661f\u5cf6\u65e5\u5831",url:"https://www.stheadline.com",path:"",parser:async function(t){var e=[];let r=(0,i.zD)(t),a=r(".banner-news");for(let n=0;n<a.length;n++){let t=r(a[n]).find("a"),s=r(a[n]).find("img"),i=r(a[n]).find('div[class="title"]'),l=r(a[n]).find('div[class="des"]');e.push({title:i.text(),imgUrl:s.attr("src"),srcUrl:t.attr("href"),desc:l.text()})}return e},postProcess:[o],isDisabled:!1,isHidden:!1},{value:"oriental",label:"Oriental Daily News/\u6771\u65b9\u65e5\u5831",url:"https://hk.on.cc",path:"",parser:async function(t){var e=[];let r=(0,i.zD)(t),a=r('div[type="article"]');for(let n=0;n<a.length;n++){let t=r(a[n]).find("a"),s=r(a[n]).find("img");e.push({title:s.attr("alt"),imgUrl:s.attr("src"),srcUrl:t.attr("href"),desc:""})}return e},postProcess:[o,p],isDisabled:!1,isHidden:!1},{value:"mingpao",label:"Ming Pao/\u660e\u5831",url:"https://news.mingpao.com/pns",path:"/\u660e\u5831\u65b0\u805e\u7db2/main",parser:async function(t){var e=[];let r=(0,i.zD)(t),a=r(".headline");for(let n=0;n<a.length;n++){let t=r(a[n]).find("h1").find("a"),s=r(a[n]).find("img"),i=r(a[n]).find("figure").find("a");e.push({title:t.text(),imgUrl:s.attr("src"),srcUrl:"/"+t.attr("href"),desc:i.attr("title")})}return e},postProcess:[o],isDisabled:!1,isHidden:!1},{value:"secretchina",label:"Vision Times/\u770b\u4e2d\u570b",url:"https://www.secretchina.com",path:"/news/b5/index.html",parser:async function(t){var e=[];let r=(0,i.zD)(t),a=r('div[id="headlines"]').find("a"),n=r('div[id="headlines"]').find("img");for(let s=0;s<n.length;s++)e.push({title:r(a[s+1]).attr("title"),imgUrl:r(n[s]).attr("src"),srcUrl:r(a[s+1]).attr("href"),desc:""});if(0==e.length&&r('a:contains("\u91cd\u9ede\u65b0\u805e")').parent().is("h2")){let t=r('a:contains("\u91cd\u9ede\u65b0\u805e")').parent().next().find("span");for(let a=0;a<t.length;a+=2)e.push({title:r(t[a]).find("img").attr("alt"),imgUrl:r(t[a]).find("img").attr("src"),srcUrl:r(t[a]).find("a").attr("href"),desc:""})}return e},postProcess:[o],isDisabled:!1,isHidden:!1},{value:"epochtimes",label:"Epoch Times/\u5927\u7d00\u5143",url:"https://www.epochtimes.com",path:"/b5",parser:async function(t){var e=[];let r=(0,i.zD)(t),a=r(".slideImage"),n=r(".slide_title");for(let s=0;s<n.length;s++){let t=r(n[s]).find("a"),i=r(a[s]).find("img"),l=r(a[s]).find("span");e.push({title:t.text(),imgUrl:i.attr("src"),srcUrl:t.attr("href"),desc:l.text()})}if(0==e.length){let t=r('div[class="headline"]').find(".one_post");for(let a=0;a<t.length;++a)e.push({title:r(t[a]).find("img").attr("alt"),imgUrl:r(t[a]).find("img").attr("src"),srcUrl:r(t[a]).find("a").attr("href"),desc:r(t[a]).find("span").text()});c.log()}return e},postProcess:null,isDisabled:!1,isHidden:!1},{value:"yahoo",label:"Yahoo/\u96c5\u864e",url:"https://hk.news.yahoo.com",path:"",parser:async function(t){var e=[];let r=(0,i.zD)(t),a=r('script:contains("/* -- Data -- */")').text().split(/\r?\n/),n="root.App.main = ";for(let i=0;i<a.length;++i)if(a[i].includes(n)){let t=a[i].substring(n.length,a[i].length-1);var s=JSON.parse(t);for(let r=0;r<s.context.dispatcher.stores.IndexDataStore.indexData["hong-kong"].length;r++)e.push({title:s.context.dispatcher.stores.IndexDataStore.indexData["hong-kong"][r].title,imgUrl:s.context.dispatcher.stores.IndexDataStore.indexData["hong-kong"][r].thumbnail.url,srcUrl:s.context.dispatcher.stores.IndexDataStore.indexData["hong-kong"][r].url,desc:s.context.dispatcher.stores.IndexDataStore.indexData["hong-kong"][r].summary});break}if(0==e.length){let t=r("img");for(let a=0;a<t.length;++a)if(r(t[a]).attr("alt")&&r(t[a]).parent().parent()&&r(t[a]).parent().parent().is("a")){let n=r(t[a]).attr("src");r(t[a]).attr("data-wf-src")&&(n=r(t[a]).attr("data-wf-src")),e.push({title:r(t[a]).attr("alt"),imgUrl:n,srcUrl:r(t[a]).parent().parent().attr("href"),desc:""})}}return e},postProcess:null,isDisabled:!1,isHidden:!1},{value:"hkcna",label:"HKCNA/\u9999\u6e2f\u65b0\u9592\u7db2",url:"http://www.hkcna.hk",path:"",parser:async function(t){var e=[];let r=(0,i.zD)(t),a=r(".slide_img");for(let n=0;n<a.length;n++){let t=r(a[n]).find("a"),s=r(a[n]).find("p"),i=r(a[n]).find("img");e.push({title:s.text(),imgUrl:i.attr("src").replace(/\/\//g,"/"),srcUrl:t.attr("href"),desc:""})}return e},postProcess:[o,p,d],isDisabled:!1,isHidden:!1},{value:"rthk",label:"RTHK News/\u9999\u6e2f\u96fb\u53f0",url:"https://news.rthk.hk",path:"/rthk/ch",parser:async function(t){var e=[];let r=(0,i.zD)(t),a=r(".sp-slide-content");for(let n=0;n<a.length;n++){let t=r(a[n]).find("a"),s=r(a[n]).find("p"),i=r(a[n]).find("img");e.push({title:s.text(),imgUrl:i.attr("src"),srcUrl:t.attr("href"),desc:""})}return e},postProcess:[o],isDisabled:!1,isHidden:!1},{value:"hkmetas",label:"HK Matters/\u9999\u6e2f\u65b0\u805e\u9023\u7dda",url:"https://news.hongkongmetas.com",path:"",parser:async function(t){var e=[];let r=(0,i.zD)(t);var a=new Date;let n=a.getDate().toString();n.length<2&&(n="0"+n);let s=(a.getMonth()+1).toString();s.length<2&&(s="0"+s);let l=r('div:contains("'+a.getFullYear().toString()+"\u5e74"+s+"\u6708"+n+'\u65e5")');for(let i=0;i<l.length;i++)r(l[i]).prev().prev().is("img")&&r(l[i]).parent().is("a")&&e.push({title:r(l[i]).prev().text(),imgUrl:r(l[i]).prev().prev().attr("src"),srcUrl:r(l[i]).parent().attr("href"),desc:""});return e},postProcess:null,isDisabled:!1,isHidden:!1},{value:"tvb",label:"TVB News/\u7121\u7dda\u65b0\u805e",url:"https://news.tvb.com",path:"/tc",parser:async function(t){let e=(0,i.zD)(t);return c.log(e("body").html()),[]},postProcess:null,isDisabled:!0,isHidden:!1},{value:"gov",label:"Gov News/\u653f\u5e9c\u65b0\u805e\u7db2",url:"https://www.news.gov.hk",path:"/chi/index.html",parser:async function(t){return(0,i.zD)(t),[]},postProcess:null,isDisabled:!0,isHidden:!1},{value:"wwp",label:"Wen Wei Po/\u6587\u532f\u5831",url:"https://www.wenweipo.com",path:"/immed/hongkong",parser:async function(t){var e=[];let r=(0,i.zD)(t),a=r(".gallery-lunbo-title");for(let n=0;n<a.length;n++){r(a[n]).parent().parent().next().find("img").attr("src");e.push({title:r(a[n]).attr("title"),imgUrl:r(a[n]).parent().parent().next().find("img").attr("src"),srcUrl:r(a[n]).attr("href"),desc:r(a[n]).parent().next().text()})}return e},postProcess:null,isDisabled:!1,isHidden:!1},{value:"730",label:"am730",url:"https://www.am730.com.hk",path:"",parser:async function(t){var e=[];let r=(0,i.zD)(t),a=r(".coverlist-item");for(let n=0;n<a.length;++n){let t=r(a[n]).find(".coveritem-img").attr("style"),s="background-image:url(";t=t.substring(s.length,t.length-1);let i=r(a[n]).find(".coveritem-title").find("a");e.push({title:i.text(),imgUrl:t,srcUrl:i.attr("href"),desc:""})}return e},postProcess:[o],isDisabled:!1,isHidden:!1},{value:"now",label:"Now News/now \u65b0\u805e",url:"https://news.now.com",path:"/home",parser:async function(t){var e=[];let r=(0,i.zD)(t),a=r(".newsSummary");for(let n=0;n<a.length;++n)e.push({title:r(a[n]).parent().find("img").attr("alt"),imgUrl:r(a[n]).parent().find("img").attr("src"),srcUrl:r(a[n]).parent().attr("href"),desc:r(a[n]).find("p").text()});if(0==e.length){let t=r(".newsWrap");for(let a=0;a<t.length;++a){let n=r(t[a]).find("a"),s=n.find(".newsImgWrap").find("img"),i=n.find(".newsDecs").find(".newsTime");if(i.text().includes("\u5206\u9418\u524d"))e.push({title:s.attr("alt"),imgUrl:s.attr("src"),srcUrl:n.attr("href"),desc:i.text().trim()});else for(let t=1;t<=8;++t){let r=t.toString()+"\u5c0f\u6642\u524d";if(i.text().includes(r)&&i.text().trim().length==r.length){e.push({title:s.attr("alt"),imgUrl:s.attr("src"),srcUrl:n.attr("href"),desc:i.text().trim()});break}}}}return e},postProcess:[o],isDisabled:!1,isHidden:!1},{value:"bbc",label:"BBC News/BBC \u65b0\u805e",url:"https://www.bbc.com",path:"/zhongwen/trad",parser:async function(t){var e=[];let r=(0,i.zD)(t);var a=new Date;let n=a.getDate().toString();n.length<2&&(n="0"+n);let s=(a.getMonth()+1).toString();s.length<2&&(s="0"+s);let l=r('time[datetime="'+a.getFullYear().toString()+"-"+s+"-"+n+'"]');for(let i=0;i<l.length;++i)if(r(l[i]).prev().is("p")&&r(l[i]).prev().prev().is("h3")){let t=r(l[i]).prev(),a=r(l[i]).prev().prev().find("a"),n=a.find("span"),s=r(l[i]).parent().prev().find("img");e.push({title:n.text(),imgUrl:s.attr("src"),srcUrl:a.attr("href"),desc:t.text()})}if(0==e.length){let t=a.getDate()-1,n=a.getMonth(),s=a.getFullYear();0==t&&(n-=1,0==n&&(n=11,s-=1),t=h(n)),t=t.toString(),t.length<2&&(t="0"+t),n=(n+1).toString(),n.length<2&&(n="0"+n),s=s.toString();let i=r('time[datetime="'+s+"-"+n+"-"+t+'"]');for(let a=0;a<i.length;++a)if(r(i[a]).prev().is("p")&&r(i[a]).prev().prev().is("h3")){let t=r(i[a]).prev(),n=r(i[a]).prev().prev().find("a"),s=n.find("span"),l=r(i[a]).parent().prev().find("img");e.push({title:s.text(),imgUrl:l.attr("src"),srcUrl:n.attr("href"),desc:t.text()})}}return e},postProcess:[o],isDisabled:!1,isHidden:!1},{value:"abc",label:"ABC News/ABC \u65b0\u805e",url:"https://www.abc.net.au",path:"/news/chinese/china",parser:async function(t){var e=[];let r=(0,i.zD)(t);var a=new Date;let n=a.getDate(),s=a.getMonth(),l=a.getFullYear();for(let i=0;i<5;++i){let t=n-i,a=s,c=l;t<=0&&(a=s-1,0==a&&(a=11,c=l-1),t=h(a)-(i-n));let o=r('time:contains("'+t.toString()+" "+u(a)+" "+c.toString()+'")');for(let n=0;n<o.length;++n){let t=r(o[n]).parent().parent().prev(),a=t.parent().prev().find("a"),s=a.parent().parent().parent().next().find("img");e.push({title:a.text(),imgUrl:s.attr("src"),srcUrl:a.attr("href"),desc:t.text()})}}return e},postProcess:[o],isDisabled:!1,isHidden:!1},{value:"rci",label:"CBC Radio/\u52a0\u62ff\u5927\u65b0\u805e",url:"https://ici.radio-canada.ca",path:"/rci/zh-hant",parser:async function(t){var e=[];let r=(0,i.zD)(t),a='footer:contains("\u5206\u9418\u524d")',n=r(a);for(let i=0;i<n.length;++i){let t=r(n[i]).prev(),a=r(n[i]).prev().prev().find("a"),s=r(n[i]).parent().prev().find("img");e.push({title:a.find("div").find("span").text(),imgUrl:s.attr("src"),srcUrl:a.attr("href"),desc:t.text()})}a='footer:contains("\u5c0f\u6642\u524d")';let s=r(a);for(let i=0;i<s.length;++i){let t=r(s[i]).prev(),a=r(s[i]).prev().prev().find("a"),n=r(s[i]).parent().prev().find("img");e.push({title:a.find("div").find("span").text(),imgUrl:n.attr("src"),srcUrl:a.attr("href"),desc:t.text()})}for(let i=1;i<=3;++i){a='footer:contains("'+i.toString()+' \u5929\u524d")';let t=r(a);for(let a=0;a<t.length;++a){let n=r(t[a]).prev(),s=r(t[a]).prev().prev().find("a"),i=r(t[a]).parent().prev().find("img");e.push({title:s.find("div").find("span").text(),imgUrl:i.attr("src"),srcUrl:s.attr("href"),desc:n.text()})}}return e},postProcess:[o],isDisabled:!1,isHidden:!1},{value:"nyt",label:"NY Times/\u7d10\u7d04\u6642\u5831",url:"https://cn.nytimes.com",path:"/hk-taiwan/zh-hant/",parser:async function(t){var e=[];let r=(0,i.zD)(t),a=r(".sectionLeadHeader"),n=r(".photoWrapper "),s=n.next();if(0!=a.length){e.push({title:a.find("a").text(),imgUrl:n.find("img").attr("data-url"),srcUrl:a.find("a").attr("href"),desc:s.text()});let t=r(".autoListStory");for(let a=0;a<t.length&&a<10;++a){let n=r(t[a]).find("h3").find("a"),s=r(t[a]).find("img"),i=r(t[a]).find("p");e.push({title:n.text(),imgUrl:s.attr("data-url"),srcUrl:n.attr("href"),desc:i.text()})}}else{let t=r(".regular-item");for(let a=0;a<t.length&&a<=10;++a){let n=r(t[a]).find("a"),s=r(t[a]).find("figure").find("img"),i=r(t[a]).find("p");e.push({title:n.text(),imgUrl:s.attr("src"),srcUrl:n.attr("href"),desc:i.text()})}}return e},postProcess:[o],isDisabled:!1,isHidden:!1},{value:"dw",label:"DW/\u5fb7\u570b\u4e4b\u8072",url:"https://www.dw.com/zh",path:"/zh/\u5728\u7ebf\u62a5\u5bfc/s-9058?&zhongwen=trad",parser:async function(t){let e=[],r=(0,i.zD)(t),a=r(".teaserImg");for(let n=0;n<a.length;++n){let t=r(a[n]);if(1==t.find("a").length){let r=t.find("a"),a=t.find("img"),n=t.parent().find("p");if(a.attr("title").includes("You Tube"))continue;e.push({title:a.attr("title"),imgUrl:a.attr("src"),srcUrl:r.attr("href"),desc:n.text()})}else if(1==t.parent().is("a")){let r=t.parent(),a=t.find("img"),n=t.next();e.push({title:a.attr("title"),imgUrl:a.attr("src"),srcUrl:r.attr("href"),desc:n.text()})}if(10==e.length)break}if(0==e.length){let t=r(".basicteaser__wrap");for(let a=0;a<t.length;++a){let n=r(t[a]),s=n.find("a"),i=n.find("img");if(!i.attr("alt").includes("You Tube")&&(2==s.length?e.push({title:i.attr("alt"),imgUrl:i.attr("data-src"),srcUrl:r(s[0]).attr("href"),desc:""}):3==s.length&&e.push({title:i.attr("alt"),imgUrl:i.attr("data-src"),srcUrl:r(s[0]).attr("href"),desc:r(s[2]).text()}),10==e.length))break}}return e},postProcess:[o],isDisabled:!1,isHidden:!1}];const g=function(){const[t,e]=(0,n.useState)([]),[r,a]=(0,n.useState)(!0),[s,i]=(0,n.useState)(null),o=t=>{(async()=>{try{const r=await async function(t){const e=await fetch(`https://cors-anywhere.herokuapp.com/${t}`);if(e.ok)return await e.text();throw new Error("Response is not okay! Need to request access at https://cors-anywhere.herokuapp.com/corsdemo")}(t.url+t.path);let a=[];if(a=await t.parser(r),a=function(t,e){for(let r=0;r<t.length;r++)t[r].srcName=e.label;return t}(a,t),t.postProcess)for(let e=0;e<t.postProcess.length;e++)a=t.postProcess[e](a,t);e(a)}catch(r){a(!1),c.error(r)}})(),i(t)},p=t=>{document.body.scrollTop=0,document.documentElement.scrollTop=0,t.preventDefault();let e=f.indexOf(s);o(f[e-1])},d=t=>{document.body.scrollTop=0,document.documentElement.scrollTop=0,t.preventDefault();let e=f.indexOf(s);o(f[e+1])},h=(t,e)=>{const{label:r,value:a,data:n}=t;return!n.isHidden&&(a.toLowerCase().includes(e.toLowerCase())||r.toLowerCase().includes(e.toLowerCase()))};if(t){if(r){let e,r,a=t.map(((t,e)=>{let{title:r,imgUrl:a,srcUrl:s,desc:i,srcName:l}=t;return n.createElement("div",{key:e},n.createElement("img",{src:a,alt:""}),n.createElement("h3",null,r),n.createElement("p",null,i," ... ",n.createElement("b",null,"Read more from/\u7d30\u95b2 ",n.createElement("a",{href:s,target:"_blank"},l))))}));if(0==t.length&&(a=s?n.createElement("h4",null,"Fetching or no news today!"):n.createElement("h4",null,"Please select a news channel!")),s){let t=f.indexOf(s);t<f.length-1&&(r=n.createElement("a",{class:"pagination-nav__link pagination-nav__link--next ",onClick:d,href:""},n.createElement("div",{class:"pagination-nav__sublabel"},"Next"),n.createElement("div",{class:"pagination-nav__label"},f[t+1].label))),t>0&&(e=n.createElement("a",{class:"pagination-nav__link pagination-nav__link--prev",onClick:p,href:""},n.createElement("div",{class:"pagination-nav__sublabel"},"Previous"),n.createElement("div",{class:"pagination-nav__label"},f[t-1].label)))}return n.createElement("div",{align:"center"},n.createElement("h2",null,"Live News from",n.createElement(l.ZP,{value:s,options:f,onChange:o,isOptionDisabled:t=>t.isDisabled,filterOption:h})),a,n.createElement("nav",{class:"pagination-nav docusaurus-mt-lg","aria-label":"Docs pages navigation"},e,r))}return n.createElement("div",{align:"center"},n.createElement("h4",null,"Please get temporarily cors access from ",n.createElement("a",{href:"https://cors-anywhere.herokuapp.com/corsdemo"},"here")))}return n.createElement("div",{align:"center"},"Loading!")},m={sidebar_position:5},v=void 0,w={unversionedId:"Scrape",id:"Scrape",title:"Scrape",description:"",source:"@site/docs/Scrape.mdx",sourceDirName:".",slug:"/Scrape",permalink:"/docs/Scrape",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"SubmitFirestore",permalink:"/docs/SubmitFirestore"}},b={},U=[{value:"Scrape HK news from newspapers",id:"scrape-hk-news-from-newspapers",level:2}],D={toc:U};function x(t){let{components:e,...r}=t;return(0,s.kt)("wrapper",(0,a.Z)({},D,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"scrape-hk-news-from-newspapers"},"Scrape HK news from newspapers"),(0,s.kt)(g,{mdxType:"NewsScreen"}))}x.isMDXComponent=!0}}]);