"use strict";(self.webpackChunkFirmament=self.webpackChunkFirmament||[]).push([[755],{381:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>E,contentTitle:()=>S,default:()=>v,frontMatter:()=>f,metadata:()=>h,toc:()=>F});var a=r(7462),i=r(7294),n=r(3905),s=r(4866),o=r(3247),l=r(3977),m=r(5108);const u=(0,l.ZF)({apiKey:"AIzaSyD8EcwY-enP40uMOK41581WZoflCPzU1sI",authDomain:"firmament-a19df.firebaseapp.com",databaseURL:"https://firmament-a19df-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"firmament-a19df",storageBucket:"firmament-a19df.appspot.com",messagingSenderId:"159820547097",appId:"1:159820547097:web:09a3ee1677029d8f901688",measurementId:"G-3SFMRPYT0B"}),c=(0,o.ad)(u);let d;function p(){return i.createElement("form",{onSubmit:e=>{e.preventDefault(),(0,o.ET)((0,o.hJ)(c,"users"),{first:e.target.first.value,last:e.target.last.value,born:e.target.born.value}).then((e=>{window.location.replace("/docs/DisplayFirestore")})).catch((e=>{m.error("Error adding document: ",e)}))}},i.createElement("h2",{align:"center"},"Submit"),i.createElement("label",{htmlFor:"first"},"First name: "),i.createElement("input",{type:"text",id:"first",name:"first"}),i.createElement("label",{style:{marginLeft:"5%"},htmlFor:"last"},"Last name: "),i.createElement("input",{type:"text",id:"last",name:"last"}),i.createElement("br",null),i.createElement("label",{htmlFor:"born"},"Year of birth: "),i.createElement("input",{type:"text",id:"born",name:"born"}),i.createElement("br",null),i.createElement("button",{type:"submit"},"Submit"))}const b=function(){const[e,t]=(0,i.useState)(!1),[r,a]=(0,i.useState)();return(0,i.useEffect)((()=>{const e=s.Z.auth().onAuthStateChanged((e=>{t(!!e),a(e.uid)}));return()=>e()}),[]),e?(d=r,i.createElement("div",{align:"center"},i.createElement(p,null))):i.createElement("div",{align:"center"},i.createElement("h2",{align:"center"},"Please log in"))},f={sidebar_position:4},S=void 0,h={unversionedId:"SubmitFirestore",id:"SubmitFirestore",title:"SubmitFirestore",description:"",source:"@site/docs/SubmitFirestore.mdx",sourceDirName:".",slug:"/SubmitFirestore",permalink:"/docs/SubmitFirestore",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"DisplayFirestore",permalink:"/docs/DisplayFirestore"},next:{title:"Scrape",permalink:"/docs/Scrape"}},E={},F=[{value:"Submit data to firestore",id:"submit-data-to-firestore",level:2}],g={toc:F};function v(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"submit-data-to-firestore"},"Submit data to firestore"),(0,n.kt)(b,{mdxType:"SubmitFireStore"}))}v.isMDXComponent=!0}}]);