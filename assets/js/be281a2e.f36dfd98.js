"use strict";(self.webpackChunkFirmament=self.webpackChunkFirmament||[]).push([[2926],{66816:(t,e,r)=>{r.d(e,{db:()=>l,u:()=>c});r(44866);var a=r(13247),n=r(83977),s=r(89355);const i=(0,n.ZF)({apiKey:"AIzaSyD8EcwY-enP40uMOK41581WZoflCPzU1sI",authDomain:"firmament-a19df.firebaseapp.com",databaseURL:"https://firmament-a19df-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"firmament-a19df",storageBucket:"firmament-a19df.appspot.com",messagingSenderId:"159820547097",appId:"1:159820547097:web:09a3ee1677029d8f901688",measurementId:"G-3SFMRPYT0B"}),l=(0,a.ad)(i),c=(0,s.N8)()},51453:(t,e,r)=>{r.d(e,{L:()=>c,g:()=>p});var a=r(60490),n=r(25108);function s(t,e){for(let r=0;r<t.length;r++)t[r].srcUrl=e.url+t[r].srcUrl;return t}function i(t,e){for(let r=0;r<t.length;r++)t[r].imgUrl=e.url+t[r].imgUrl;return t}function l(t,e){for(let r=0;r<t.length;r++)t[r].imgUrl="//wsrv.nl/?url="+t[r].imgUrl;return t}function c(t,e){switch(t){case 0:case 2:case 4:case 6:case 7:case 9:case 11:return 31;case 3:case 5:case 8:case 10:return 30;case 1:return e%4==0?29:28;default:return 0}}function o(t){switch(t){case 0:return"Jan";case 1:return"Feb";case 2:return"Mar";case 3:return"Apr";case 4:return"May";case 5:return"Jun";case 6:return"Jul";case 7:return"Aug";case 8:return"Sep";case 9:return"Oct";case 10:return"Nov";case 11:return"Dec";default:return"Unknown"}}const p=[{value:"hk01",label:"HK01-\u9999\u6e2f01",url:"https://www.hk01.com",path:"",parser:async function(t){var e=[];let r;if(r=(0,a.zD)(t)("#__NEXT_DATA__").html()){var n=JSON.parse(r);for(let t=0;t<n.props.initialProps.pageProps.sections[0].items.length;t++)e.push({title:n.props.initialProps.pageProps.sections[0].items[t].data.title,imgUrl:n.props.initialProps.pageProps.sections[0].items[t].data.mainImage.cdnUrl,srcUrl:n.props.initialProps.pageProps.sections[0].items[t].data.publishUrl,desc:n.props.initialProps.pageProps.sections[0].items[t].data.description})}return e},postProcess:[s],isDisabled:!1,isHidden:!1},{value:"takungpao",label:"Ta Kung Pao-\u5927\u516c\u5831",url:"http://www.takungpao.com.hk",path:"",parser:async function(t){var e=[];let r=(0,a.zD)(t),n=r(".swiper-slide");for(let a=0;a<n.length;a++){let t=r(n[a]).find("a"),s=r(n[a]).find("img"),i=r(n[a]).find("span");i.length&&e.push({title:i.text(),imgUrl:s.attr("src"),srcUrl:t.attr("href"),desc:""})}return e},postProcess:[l],isDisabled:!1,isHidden:!1},{value:"st",label:"Sing Tao Daily-\u661f\u5cf6\u65e5\u5831",url:"https://www.stheadline.com",path:"",parser:async function(t){var e=[];let r=(0,a.zD)(t),n=r(".banner-news");for(let a=0;a<n.length;a++){let t=r(n[a]).find("a"),s=r(n[a]).find("img"),i=r(n[a]).find('div[class="title"]'),l=r(n[a]).find('div[class="des"]');e.push({title:i.text(),imgUrl:s.attr("src"),srcUrl:t.attr("href"),desc:l.text()})}return e},postProcess:[s],isDisabled:!1,isHidden:!1},{value:"oriental",label:"Oriental Daily News-\u6771\u65b9\u65e5\u5831",url:"https://hk.on.cc",path:"",parser:async function(t){var e=[];let r=(0,a.zD)(t),n=r('div[type="article"]');for(let a=0;a<n.length;a++){let t=r(n[a]).find("a"),s=r(n[a]).find("img");e.push({title:s.attr("alt"),imgUrl:s.attr("src"),srcUrl:t.attr("href"),desc:""})}return e},postProcess:[s,i],isDisabled:!1,isHidden:!1},{value:"mingpao",label:"Ming Pao-\u660e\u5831",url:"https://news.mingpao.com/pns",path:"/\u660e\u5831\u65b0\u805e\u7db2/main",parser:async function(t){var e=[];let r=(0,a.zD)(t),n=r(".headline");for(let a=0;a<n.length;a++){let t=r(n[a]).find("h1").find("a"),s=r(n[a]).find("img"),i=r(n[a]).find("figure").find("a");e.push({title:t.text(),imgUrl:s.attr("src"),srcUrl:"/"+t.attr("href"),desc:i.attr("title")})}return e},postProcess:[s],isDisabled:!1,isHidden:!1},{value:"secretchina",label:"Vision Times-\u770b\u4e2d\u570b",url:"https://www.secretchina.com",path:"/news/b5/index.html",parser:async function(t){var e=[];let r=(0,a.zD)(t),n=r('div[id="headlines"]').find("a"),s=r('div[id="headlines"]').find("img");for(let a=0;a<s.length;a++)e.push({title:r(n[a+1]).attr("title"),imgUrl:r(s[a]).attr("src"),srcUrl:r(n[a+1]).attr("href"),desc:""});if(0==e.length&&r('a:contains("\u91cd\u9ede\u65b0\u805e")').parent().is("h2")){let t=r('a:contains("\u91cd\u9ede\u65b0\u805e")').parent().next().find("span");for(let a=0;a<t.length;a+=2)e.push({title:r(t[a]).find("img").attr("alt"),imgUrl:r(t[a]).find("img").attr("src"),srcUrl:r(t[a]).find("a").attr("href"),desc:""})}return e},postProcess:[s],isDisabled:!1,isHidden:!1},{value:"epochtimes",label:"Epoch Times-\u5927\u7d00\u5143",url:"https://www.epochtimes.com",path:"/b5",parser:async function(t){var e=[];let r=(0,a.zD)(t),s=r(".slideImage"),i=r(".slide_title");for(let a=0;a<i.length;a++){let t=r(i[a]).find("a"),n=r(s[a]).find("img"),l=r(s[a]).find("span");e.push({title:t.text(),imgUrl:n.attr("src"),srcUrl:t.attr("href"),desc:l.text()})}if(0==e.length){let t=r('div[class="headline"]').find(".one_post");for(let a=0;a<t.length;++a)e.push({title:r(t[a]).find("img").attr("alt"),imgUrl:r(t[a]).find("img").attr("src"),srcUrl:r(t[a]).find("a").attr("href"),desc:r(t[a]).find("span").text()});n.log()}return e},postProcess:null,isDisabled:!1,isHidden:!1},{value:"yahoo",label:"Yahoo-\u96c5\u864e",url:"https://hk.news.yahoo.com",path:"",parser:async function(t){var e=[];let r=(0,a.zD)(t),n=r('script:contains("/* -- Data -- */")').text().split(/\r?\n/),s="root.App.main = ";for(let a=0;a<n.length;++a)if(n[a].includes(s)){let t=n[a].substring(s.length,n[a].length-1);var i=JSON.parse(t);for(let r=0;r<i.context.dispatcher.stores.IndexDataStore.indexData["hong-kong"].length;r++)e.push({title:i.context.dispatcher.stores.IndexDataStore.indexData["hong-kong"][r].title,imgUrl:i.context.dispatcher.stores.IndexDataStore.indexData["hong-kong"][r].thumbnail.url,srcUrl:i.context.dispatcher.stores.IndexDataStore.indexData["hong-kong"][r].url,desc:i.context.dispatcher.stores.IndexDataStore.indexData["hong-kong"][r].summary});break}if(0==e.length){let t=r("img");for(let a=0;a<t.length;++a)if(r(t[a]).attr("alt")&&r(t[a]).parent().parent()&&r(t[a]).parent().parent().is("a")){let n=r(t[a]).attr("src");r(t[a]).attr("data-wf-src")&&(n=r(t[a]).attr("data-wf-src")),e.push({title:r(t[a]).attr("alt"),imgUrl:n,srcUrl:r(t[a]).parent().parent().attr("href"),desc:""})}}return e},postProcess:null,isDisabled:!1,isHidden:!1},{value:"hkcna",label:"HKCNA-\u9999\u6e2f\u65b0\u9592\u7db2",url:"http://www.hkcna.hk",path:"",parser:async function(t){var e=[];let r=(0,a.zD)(t),n=r(".slide_img");for(let a=0;a<n.length;a++){let t=r(n[a]).find("a"),s=r(n[a]).find("p"),i=r(n[a]).find("img");e.push({title:s.text(),imgUrl:i.attr("src").replace(/\/\//g,"/"),srcUrl:t.attr("href"),desc:""})}return e},postProcess:[s,i,l],isDisabled:!1,isHidden:!1},{value:"rthk",label:"RTHK News-\u9999\u6e2f\u96fb\u53f0",url:"https://news.rthk.hk",path:"/rthk/ch",parser:async function(t){var e=[];let r=(0,a.zD)(t),n=r(".sp-slide-content");for(let a=0;a<n.length;a++){let t=r(n[a]).find("a"),s=r(n[a]).find("p"),i=r(n[a]).find("img");e.push({title:s.text(),imgUrl:i.attr("src"),srcUrl:t.attr("href"),desc:""})}return e},postProcess:[s],isDisabled:!1,isHidden:!1},{value:"hkmetas",label:"HK Matters-\u9999\u6e2f\u65b0\u805e\u9023\u7dda",url:"https://news.hongkongmetas.com",path:"",parser:async function(t){var e=[];let r=(0,a.zD)(t);var n=new Date;let s=n.getDate().toString();s.length<2&&(s="0"+s);let i=(n.getMonth()+1).toString();i.length<2&&(i="0"+i);let l=r('div:contains("'+n.getFullYear().toString()+"\u5e74"+i+"\u6708"+s+'\u65e5")');for(let a=0;a<l.length;a++)r(l[a]).prev().prev().is("img")&&r(l[a]).parent().is("a")&&e.push({title:r(l[a]).prev().text(),imgUrl:r(l[a]).prev().prev().attr("src"),srcUrl:r(l[a]).parent().attr("href"),desc:""});if(0==e.length){let t=n.getDate()-1,a=n.getMonth(),s=n.getFullYear();0==t&&(a-=1,0==a&&(a=11,s-=1),t=c(a)),t=t.toString(),t.length<2&&(t="0"+t),a=(a+1).toString(),a.length<2&&(a="0"+a),s=s.toString();let i=r('div:contains("'+s+"\u5e74"+a+"\u6708"+t+'\u65e5")');for(let n=0;n<i.length;n++)r(i[n]).prev().prev().is("img")&&r(i[n]).parent().is("a")&&e.push({title:r(i[n]).prev().text(),imgUrl:r(i[n]).prev().prev().attr("src"),srcUrl:r(i[n]).parent().attr("href"),desc:""})}return e},postProcess:null,isDisabled:!1,isHidden:!1},{value:"tvb",label:"TVB News-\u7121\u7dda\u65b0\u805e",url:"https://news.tvb.com",path:"/tc",parser:async function(t){let e=(0,a.zD)(t);return n.log(e("body").html()),[]},postProcess:null,isDisabled:!0,isHidden:!1},{value:"gov",label:"Gov News-\u653f\u5e9c\u65b0\u805e\u7db2",url:"https://www.news.gov.hk",path:"/chi/index.html",parser:async function(t){return(0,a.zD)(t),[]},postProcess:null,isDisabled:!0,isHidden:!1},{value:"wwp",label:"Wen Wei Po-\u6587\u532f\u5831",url:"https://www.wenweipo.com",path:"/immed/hongkong",parser:async function(t){var e=[];let r=(0,a.zD)(t),n=r(".gallery-lunbo-title");for(let a=0;a<n.length;a++){r(n[a]).parent().parent().next().find("img").attr("src");e.push({title:r(n[a]).attr("title"),imgUrl:r(n[a]).parent().parent().next().find("img").attr("src"),srcUrl:r(n[a]).attr("href"),desc:r(n[a]).parent().next().text()})}return e},postProcess:null,isDisabled:!1,isHidden:!1},{value:"730",label:"am730",url:"https://www.am730.com.hk",path:"",parser:async function(t){var e=[];let r=(0,a.zD)(t),n=r(".coverlist-item");for(let a=0;a<n.length;++a){let t=r(n[a]).find(".coveritem-img").attr("style"),s="background-image:url(";t=t.substring(s.length,t.length-1);let i=r(n[a]).find(".coveritem-title").find("a");e.push({title:i.text(),imgUrl:t,srcUrl:i.attr("href"),desc:""})}return e},postProcess:[s],isDisabled:!1,isHidden:!1},{value:"now",label:"Now News-Now \u65b0\u805e",url:"https://news.now.com",path:"/home",parser:async function(t){var e=[];let r=(0,a.zD)(t),n=r(".newsSummary");for(let a=0;a<n.length;++a)e.push({title:r(n[a]).parent().find("img").attr("alt"),imgUrl:r(n[a]).parent().find("img").attr("src"),srcUrl:r(n[a]).parent().attr("href"),desc:r(n[a]).find("p").text()});if(0==e.length){let t=r(".newsWrap");for(let a=0;a<t.length;++a){let n=r(t[a]).find("a"),s=n.find(".newsImgWrap").find("img"),i=n.find(".newsDecs").find(".newsTime");if(i.text().includes("\u5206\u9418\u524d"))e.push({title:s.attr("alt"),imgUrl:s.attr("src"),srcUrl:n.attr("href"),desc:i.text().trim()});else for(let t=1;t<=8;++t){let r=t.toString()+"\u5c0f\u6642\u524d";if(i.text().includes(r)&&i.text().trim().length==r.length){e.push({title:s.attr("alt"),imgUrl:s.attr("src"),srcUrl:n.attr("href"),desc:i.text().trim()});break}}}}return e},postProcess:[s],isDisabled:!1,isHidden:!1},{value:"bbc",label:"BBC News-BBC \u65b0\u805e",url:"https://www.bbc.com",path:"/zhongwen/trad",parser:async function(t){var e=[];let r=(0,a.zD)(t);var n=new Date;let s=n.getDate().toString();s.length<2&&(s="0"+s);let i=(n.getMonth()+1).toString();i.length<2&&(i="0"+i);let l=r('time[datetime="'+n.getFullYear().toString()+"-"+i+"-"+s+'"]');for(let a=0;a<l.length;++a)if(r(l[a]).prev().is("p")&&r(l[a]).prev().prev().is("h3")){let t=r(l[a]).prev(),n=r(l[a]).prev().prev().find("a"),s=n.find("span"),i=r(l[a]).parent().prev().find("img");e.push({title:s.text(),imgUrl:i.attr("src"),srcUrl:n.attr("href"),desc:t.text()})}if(0==e.length){let t=n.getDate()-1,a=n.getMonth(),s=n.getFullYear();0==t&&(a-=1,0==a&&(a=11,s-=1),t=c(a)),t=t.toString(),t.length<2&&(t="0"+t),a=(a+1).toString(),a.length<2&&(a="0"+a),s=s.toString();let i=r('time[datetime="'+s+"-"+a+"-"+t+'"]');for(let n=0;n<i.length;++n)if(r(i[n]).prev().is("p")&&r(i[n]).prev().prev().is("h3")){let t=r(i[n]).prev(),a=r(i[n]).prev().prev().find("a"),s=a.find("span"),l=r(i[n]).parent().prev().find("img");e.push({title:s.text(),imgUrl:l.attr("src"),srcUrl:a.attr("href"),desc:t.text()})}}return e},postProcess:[s],isDisabled:!1,isHidden:!1},{value:"abc",label:"ABC News-ABC \u65b0\u805e",url:"https://www.abc.net.au",path:"/news/chinese/china",parser:async function(t){var e=[];let r=(0,a.zD)(t);var n=new Date;let s=n.getDate(),i=n.getMonth(),l=n.getFullYear();for(let a=0;a<5;++a){let t=s-a,n=i,p=l;t<=0&&(n=i-1,0==n&&(n=11,p=l-1),t=c(n)-(a-s));let d=r('time:contains("'+t.toString()+" "+o(n)+" "+p.toString()+'")');for(let a=0;a<d.length;++a){let t=r(d[a]).parent().parent().prev(),n=t.parent().prev().find("a"),s=n.parent().parent().parent().next().find("img");e.push({title:n.text(),imgUrl:s.attr("src"),srcUrl:n.attr("href"),desc:t.text()})}}return e},postProcess:[s],isDisabled:!1,isHidden:!1},{value:"rci",label:"CBC Radio-\u52a0\u62ff\u5927\u65b0\u805e",url:"https://ici.radio-canada.ca",path:"/rci/zh-hant",parser:async function(t){var e=[];let r=(0,a.zD)(t),n='footer:contains("\u5206\u9418\u524d")',s=r(n);for(let a=0;a<s.length;++a){let t=r(s[a]).prev(),n=r(s[a]).prev().prev().find("a"),i=r(s[a]).parent().prev().find("img");e.push({title:n.find("div").find("span").text(),imgUrl:i.attr("src"),srcUrl:n.attr("href"),desc:t.text()})}n='footer:contains("\u5c0f\u6642\u524d")';let i=r(n);for(let a=0;a<i.length;++a){let t=r(i[a]).prev(),n=r(i[a]).prev().prev().find("a"),s=r(i[a]).parent().prev().find("img");e.push({title:n.find("div").find("span").text(),imgUrl:s.attr("src"),srcUrl:n.attr("href"),desc:t.text()})}for(let a=1;a<=3;++a){n='footer:contains("'+a.toString()+' \u5929\u524d")';let t=r(n);for(let a=0;a<t.length;++a){let n=r(t[a]).prev(),s=r(t[a]).prev().prev().find("a"),i=r(t[a]).parent().prev().find("img");e.push({title:s.find("div").find("span").text(),imgUrl:i.attr("src"),srcUrl:s.attr("href"),desc:n.text()})}}return e},postProcess:[s],isDisabled:!1,isHidden:!1},{value:"nyt",label:"NY Times-\u7d10\u7d04\u6642\u5831",url:"https://cn.nytimes.com",path:"/hk-taiwan/zh-hant/",parser:async function(t){var e=[];let r=(0,a.zD)(t),n=r(".sectionLeadHeader"),s=r(".photoWrapper "),i=s.next();if(0!=n.length){e.push({title:n.find("a").text(),imgUrl:s.find("img").attr("data-url"),srcUrl:n.find("a").attr("href"),desc:i.text()});let t=r(".autoListStory");for(let a=0;a<t.length&&a<10;++a){let n=r(t[a]).find("h3").find("a"),s=r(t[a]).find("img"),i=r(t[a]).find("p");e.push({title:n.text(),imgUrl:s.attr("data-url"),srcUrl:n.attr("href"),desc:i.text()})}}else{let t=r(".regular-item");for(let a=0;a<t.length&&a<=10;++a){let n=r(t[a]).find("a"),s=r(t[a]).find("figure").find("img"),i=r(t[a]).find("p");e.push({title:n.text(),imgUrl:s.attr("src"),srcUrl:n.attr("href"),desc:i.text()})}}return e},postProcess:[s],isDisabled:!1,isHidden:!1},{value:"dw",label:"DW-\u5fb7\u570b\u4e4b\u8072",url:"https://www.dw.com/zh",path:"/zh/\u5728\u7ebf\u62a5\u5bfc/s-9058?&zhongwen=trad",parser:async function(t){let e=[],r=(0,a.zD)(t),n=r(".teaserImg");for(let a=0;a<n.length;++a){let t=r(n[a]);if(1==t.find("a").length){let r=t.find("a"),a=t.find("img"),n=t.parent().find("p");if(a.attr("title").includes("You Tube"))continue;if(a.attr("title").includes("Themenbild"))continue;e.push({title:a.attr("title"),imgUrl:a.attr("src"),srcUrl:r.attr("href"),desc:n.text()})}else if(1==t.parent().is("a")){let r=t.parent(),a=t.find("img"),n=t.next();e.push({title:a.attr("title"),imgUrl:a.attr("src"),srcUrl:r.attr("href"),desc:n.text()})}if(10==e.length)break}if(0==e.length){let t=r(".basicteaser__wrap");for(let a=0;a<t.length;++a){let n=r(t[a]),s=n.find("a"),i=n.find("img");if(!i.attr("alt").includes("You Tube")&&(2==s.length?e.push({title:i.attr("alt"),imgUrl:i.attr("data-src"),srcUrl:r(s[0]).attr("href"),desc:""}):3==s.length&&e.push({title:i.attr("alt"),imgUrl:i.attr("data-src"),srcUrl:r(s[0]).attr("href"),desc:r(s[2]).text()}),10==e.length))break}}return e},postProcess:[s],isDisabled:!1,isHidden:!1}]},59394:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>x,contentTitle:()=>U,default:()=>P,frontMatter:()=>b,metadata:()=>D,toc:()=>k});var a=r(87462),n=r(67294),s=r(3905),i=r(66816),l=r(13247),c=r(51453),o=new Date;let p=o.getDate(),d=o.getMonth(),h=o.getFullYear();p=p.toString(),p.length<2&&(p="0"+p),d=(d+1).toString(),d.length<2&&(d="0"+d),h=h.toString();let g=h+"-"+d+"-"+p;function f(t,e){let r=[];new Promise(((e,a)=>{for(var n=0;n<c.g.length;++n)(0,l.PL)((0,l.hJ)(i.db,"news",g,c.g[n].label)).then((a=>{let n="";a.forEach((e=>{let a=!0;t.length>0&&(a=e.id.includes(t)),a&&r.push({title:e.id,imgUrl:e.data().imgUrl,srcUrl:e.data().srcUrl}),n=e.ref.parent.id})),c.g[c.g.length-1].label==n&&e()}))})).then((()=>{e.setNewsData(r)}))}const u=t=>{const e=(0,n.useRef)(0);return n.createElement("input",{align:"center",onChange:r=>{clearTimeout(e.current),e.current=setTimeout((()=>{f(r.target.value,t)}),600)}})};var m=r(25108);const v=t=>{const e=(0,n.useRef)(null);return n.createElement("div",{className:"photosphere_container my-4"},n.createElement("div",{className:"photosphere",ref:e},t.imageData.map(((t,e)=>n.createElement("div",{onClick:()=>pickImage(t),key:e,style:{backgroundImage:`url(${t})`},className:"photosphere-item"})))),n.createElement("div",{onClick:()=>{img.current.style.transform="scale(0.0, 0.0)"},className:"image-display_photo",ref:img}))};const w=function(){const[t,e]=(0,n.useState)([]),r=t=>{e(t)};if(0==t.length){f("",{setNewsData:r})}let a=t.map(((t,e)=>{let{title:r,imgUrl:a,srcUrl:s}=t;return n.createElement("div",{key:e},n.createElement("a",{href:s,target:"_blank"},n.createElement("img",{src:a,alt:""})),n.createElement("a",{href:s,target:"_blank"},n.createElement("h3",null,r)))}));return m.log(t.imgUrl),n.createElement("div",{align:"center"},n.createElement(u,{setNewsData:r}),n.createElement(v,{imageData:t.imgUrl}),a)},b={sidebar_position:6},U=void 0,D={unversionedId:"SphereNews",id:"SphereNews",title:"SphereNews",description:"HK news on sphere",source:"@site/docs/SphereNews.mdx",sourceDirName:".",slug:"/SphereNews",permalink:"/docs/SphereNews",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Scrape",permalink:"/docs/Scrape"}},x={},k=[{value:"HK news on sphere",id:"hk-news-on-sphere",level:2}],y={toc:k},S="wrapper";function P(t){let{components:e,...r}=t;return(0,s.kt)(S,(0,a.Z)({},y,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"hk-news-on-sphere"},"HK news on sphere"),(0,s.kt)(w,{mdxType:"SphereNews"}))}P.isMDXComponent=!0}}]);