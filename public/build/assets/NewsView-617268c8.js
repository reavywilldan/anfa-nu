import{H as h,F as u,C as g}from"./ContactUs-d9b4840c.js";import{T as f}from"./TitlePage-28796ce8.js";import{n as C}from"./news-7749eff0.js";import{_ as v,r as s,o as n,j as a,l as e,m as r,F as y,q as w,J as F,y as b,x,G as N}from"./_plugin-vue_export-helper-dec0d763.js";import"./axios-67252f11.js";import"./lodash-17fa2b00.js";import"./_commonjsHelpers-725317a4.js";const k={name:"NewsView",components:{HeaderComponent:h,FooterComponent:u,TitlePageComponent:f,ContactUsComponent:g},data(){return{news:[],page:1,noResult:!1,message:""}},methods:{async loadDataFromServer(){try{const i={page:this.page},o=await C.getNews(i);o.data.length?(this.news.push(...o.data),this.page++):(this.noResult=!0,this.message="No result found")}catch{this.noResult=!0,this.message="Error loading data"}}},async mounted(){await this.loadDataFromServer()}},S={class:"home"},V={id:"main"},R={id:"more-services",class:"more-services"},T={class:"container"},B={class:"row"},H=["id"],P={class:"card-body"},U={class:"card-title"},j=["href"],E={class:"read-more"},L=["href"],M=e("i",{class:"icofont-arrow-right"},null,-1),q={class:"text-center mt-5"};function z(i,o,G,J,c,d){const m=s("HeaderComponent"),l=s("TitlePageComponent"),_=s("ContactUsComponent"),p=s("FooterComponent");return n(),a("div",S,[e("body",null,[r(m),e("main",V,[e("section",R,[e("div",T,[r(l,{msg:"Berita"}),e("div",B,[(n(!0),a(y,null,w(c.news,t=>(n(),a("div",{class:"col-md-6 d-flex align-items-stretch mt-4",key:t.id,id:t.id},[e("div",{class:"card",style:F({"background-image":"url(/img/"+t.oldest_news_media.name+")"})},[e("div",P,[e("h5",U,[e("a",{href:"/news/"+t.id+"/detail"},b(t.title),9,j)]),e("div",E,[e("a",{href:"/news/"+t.id+"/detail"},[M,x(" Read More ")],8,L)])])],4)],8,H))),128))]),e("div",q,[c.noResult?N("",!0):(n(),a("button",{key:0,onClick:o[0]||(o[0]=(...t)=>d.loadDataFromServer&&d.loadDataFromServer(...t)),type:"button",class:"btn text-white",style:{"background-color":"#1d6c2f"}}," Load More "))])])])]),r(_),r(p)])])}const X=v(k,[["render",z]]);export{X as default};
