"use strict";(self.webpackChunkFirmament=self.webpackChunkFirmament||[]).push([[8562],{45884:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>D,contentTitle:()=>y,default:()=>S,frontMatter:()=>b,metadata:()=>h,toc:()=>v});var r=a(87462),i=a(67294),s=a(3905),n=a(44866),o=a(13247),d=a(83977),l=a(25108);const m=(0,d.ZF)({apiKey:"AIzaSyD8EcwY-enP40uMOK41581WZoflCPzU1sI",authDomain:"firmament-a19df.firebaseapp.com",databaseURL:"https://firmament-a19df-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"firmament-a19df",storageBucket:"firmament-a19df.appspot.com",messagingSenderId:"159820547097",appId:"1:159820547097:web:09a3ee1677029d8f901688",measurementId:"G-3SFMRPYT0B"}),c=(0,o.ad)(m);let u;function p(){const[e,t]=(0,i.useState)([]);if((0,o.PL)((0,o.hJ)(c,"users")).then((e=>{var a=[];e.forEach((e=>{a.push(e.data())})),t(a)})).catch((e=>{l.error("Error querying document: ",e)})),e){var a=e.map(((e,t)=>i.createElement("div",{key:t}," ",e.first," ",e.last," is born in ",e.born," ")));return i.createElement("div",null,a)}}const f=function(){const[e,t]=(0,i.useState)(!1),[a,r]=(0,i.useState)();return(0,i.useEffect)((()=>{const e=n.Z.auth().onAuthStateChanged((e=>{t(!!e),r(e.uid)}));return()=>e()}),[]),e?(u=a,i.createElement("div",{align:"center"},i.createElement("h2",{align:"center"},"Display"),i.createElement(p,null))):i.createElement("div",{align:"center"},i.createElement("h2",{align:"center"},"Please log in"))},b={sidebar_position:3},y=void 0,h={unversionedId:"DisplayFirestore",id:"DisplayFirestore",title:"DisplayFirestore",description:"",source:"@site/docs/DisplayFirestore.mdx",sourceDirName:".",slug:"/DisplayFirestore",permalink:"/docs/DisplayFirestore",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Submit",permalink:"/docs/Submit"},next:{title:"SubmitFirestore",permalink:"/docs/SubmitFirestore"}},D={},v=[{value:"Display data from firestore",id:"display-data-from-firestore",level:2}],F={toc:v};function S(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},F,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"display-data-from-firestore"},"Display data from firestore"),(0,s.kt)(f,{mdxType:"DisplayFireStore"}))}S.isMDXComponent=!0}}]);