"use strict";(self.webpackChunkFirmament=self.webpackChunkFirmament||[]).push([[818],{55971:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var s=a(67294),r=a(60490),c=a(67823),n=a(25935),o=a(25108);const l=e=>new Promise((t=>setTimeout(t,e)));const i=function(){const[e,t]=(0,s.useState)([]),a={hk01:"https://www.hk01.com",takungpao:"http://www.takungpao.com.hk",st:"https://www.stheadline.com"},i=/([\u4e00-\u9fff\u3400-\u4dbf\ufa0e\ufa0f\ufa11\ufa13\ufa14\ufa1f\ufa21\ufa23\ufa24\ufa27\ufa28\ufa29\u3006\u3007]|[\ud840-\ud868\ud86a-\ud879\ud880-\ud887][\udc00-\udfff]|\ud869[\udc00-\udedf\udf00-\udfff]|\ud87a[\udc00-\udfef]|\ud888[\udc00-\udfaf])([\ufe00-\ufe0f]|\udb40[\udd00-\uddef])?/gm;if((0,s.useEffect)((()=>{try{(async()=>{var e=[];let s,c,n;for(const t in a){const f=await fetch(`https://cors-anywhere.herokuapp.com/${a[t]}`);if(!f.ok)throw new Error("Res is not okay!");{const d=await f.text();if(s=(0,r.zD)(d),c=s("body").html(),n=s("#__NEXT_DATA__").html()){var u=JSON.parse(n);o.log(typeof u),o.log(u.props.initialProps.pageProps.sections[0].items[1].data.title);const c=await fetch(`https://cors-anywhere.herokuapp.com/${a[t]}${u.props.initialProps.pageProps.sections[0].items[1].data.canonicalUrl}`);if(!f.ok)throw new Error("Resdetail is not okay!");{o.log(`https://cors-anywhere.herokuapp.com/${a[t]}${u.props.initialProps.pageProps.sections[0].items[1].data.canonicalUrl}`);const n=await c.text();s=(0,r.zD)(n);let l=s("#article-content-section").html();o.log(l.match(i)),e.push(l)}}await l(500)}}t(e)})()}catch(e){o.error(e)}}),[]),e){o.log(e);var u=e.map(((e,t)=>s.createElement(s.Fragment,null,s.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"}),s.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,700"}),s.createElement("div",{class:"content-wrapper"},s.createElement("div",{class:"news-card",key:t},s.createElement("a",{href:"#",class:"news-card__card-link"}),s.createElement("img",{src:c.Z,alt:"",class:"news-card__image"}),s.createElement("div",{class:"news-card__text-wrapper"},s.createElement("h2",{class:"news-card__title"},"Amazing First Title"),s.createElement("div",{class:"news-card__post-date"},"Jan 29, 2018"),s.createElement("div",{class:"news-card__details-wrapper"},s.createElement("p",{class:"news-card__excerpt"},(0,n.ZP)(e)))))))));return o.log(u),s.createElement("div",{align:"center"},u)}return s.createElement("div",{align:"center"},"Loading!")}},67823:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/firmament-64f69e644da18d404e5fa0f9a65bbf10.jpg"}}]);