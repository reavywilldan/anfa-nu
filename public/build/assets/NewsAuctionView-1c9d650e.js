import{H as h,F as u,C as g}from"./ContactUs-7a38e2dc.js";import{T as f}from"./TitlePage-77908788.js";import{n as C}from"./newsAuction-65d147ef.js";import{_ as v,r as s,o as n,j as a,l as e,m as r,F as w,x as y,H as F,z as x,A as N,G as b}from"./_plugin-vue_export-helper-73967a81.js";import"./axios-67252f11.js";const k={name:"NewsAuctionView",components:{HeaderComponent:h,FooterComponent:u,TitlePageComponent:f,ContactUsComponent:g},data(){return{news:[],page:1,noResult:!1,message:""}},methods:{async loadDataFromServer(){try{const o=await C.getNews(this.page);o.data.length?(this.news.push(...o.data),this.page++):(this.noResult=!0,this.message="No result found")}catch{this.noResult=!0,this.message="Error loading data"}}},async mounted(){await this.loadDataFromServer()}},S={class:"home"},V={id:"main"},H={id:"more-services",class:"more-services"},R={class:"container"},T={class:"row"},A=["id"],B={class:"card-body"},L={class:"card-title"},P=["href"],U={class:"read-more"},z=["href"],E=e("i",{class:"icofont-arrow-right"},null,-1),M={class:"text-center mt-5"};function j(o,i,G,q,c,d){const m=s("HeaderComponent"),l=s("TitlePageComponent"),_=s("ContactUsComponent"),p=s("FooterComponent");return n(),a("div",S,[e("body",null,[r(m),e("main",V,[e("section",H,[e("div",R,[r(l,{msg:"Berita Lelang"}),e("div",T,[(n(!0),a(w,null,y(c.news,t=>(n(),a("div",{class:"col-md-6 d-flex align-items-stretch mt-4",key:t.id,id:t.id},[e("div",{class:"card",style:F({"background-image":"url(/img/"+t.oldest_news_media.name+")"})},[e("div",B,[e("h5",L,[e("a",{href:"/news/"+t.id+"/detail"},x(t.title),9,P)]),e("div",U,[e("a",{href:"/news/"+t.id+"/detail"},[E,N(" Read More ")],8,z)])])],4)],8,A))),128))]),e("div",M,[c.noResult?b("",!0):(n(),a("button",{key:0,onClick:i[0]||(i[0]=(...t)=>d.loadDataFromServer&&d.loadDataFromServer(...t)),type:"button",class:"btn text-white",style:{"background-color":"#1d6c2f"}}," Load More "))])])])]),r(_),r(p)])])}const Q=v(k,[["render",j]]);export{Q as default};