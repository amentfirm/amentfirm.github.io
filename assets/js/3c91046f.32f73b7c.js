"use strict";(self.webpackChunkFirmament=self.webpackChunkFirmament||[]).push([[8562],{66816:(e,t,a)=>{a.d(t,{db:()=>o,u:()=>d});a(44866);var r=a(13247),i=a(83977),s=a(89355);const n=(0,i.ZF)({apiKey:"AIzaSyD8EcwY-enP40uMOK41581WZoflCPzU1sI",authDomain:"firmament-a19df.firebaseapp.com",databaseURL:"https://firmament-a19df-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"firmament-a19df",storageBucket:"firmament-a19df.appspot.com",messagingSenderId:"159820547097",appId:"1:159820547097:web:09a3ee1677029d8f901688",measurementId:"G-3SFMRPYT0B"}),o=(0,r.ad)(n),d=(0,s.N8)()},45884:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>F,frontMatter:()=>p,metadata:()=>b,toc:()=>h});var r=a(87462),i=a(67294),s=a(3905),n=a(66816),o=a(44866),d=a(13247),l=a(25108);let m;function c(){const[e,t]=(0,i.useState)([]);if((0,d.PL)((0,d.hJ)(n.db,"users")).then((e=>{var a=[];e.forEach((e=>{a.push(e.data())})),t(a)})).catch((e=>{l.error("Error querying document: ",e)})),e){var a=e.map(((e,t)=>i.createElement("div",{key:t}," ",e.first," ",e.last," is born in ",e.born," ")));return i.createElement("div",null,a)}}const u=function(){const[e,t]=(0,i.useState)(!1),[a,r]=(0,i.useState)();return(0,i.useEffect)((()=>{const e=o.Z.auth().onAuthStateChanged((e=>{t(!!e),e&&r(e.uid)}));return()=>e()}),[]),e?(m=a,i.createElement("div",{align:"center"},i.createElement("h2",{align:"center"},"Display"),i.createElement(c,null))):i.createElement("div",{align:"center"},i.createElement("h2",{align:"center"},"Please log in"))},p={sidebar_position:3},f=void 0,b={unversionedId:"DisplayFirestore",id:"DisplayFirestore",title:"DisplayFirestore",description:"Display data from firestore",source:"@site/docs/DisplayFirestore.mdx",sourceDirName:".",slug:"/DisplayFirestore",permalink:"/docs/DisplayFirestore",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Submit",permalink:"/docs/Submit"},next:{title:"SubmitFirestore",permalink:"/docs/SubmitFirestore"}},y={},h=[{value:"Display data from firestore",id:"display-data-from-firestore",level:2}],D={toc:h},v="wrapper";function F(e){let{components:t,...a}=e;return(0,s.kt)(v,(0,r.Z)({},D,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"display-data-from-firestore"},"Display data from firestore"),(0,s.kt)(u,{mdxType:"DisplayFireStore"}))}F.isMDXComponent=!0}}]);