import{C as p,S as w,P as f,N as x}from"./carousel.es-8bdee65c.js";import{_ as b,r as n,o,j as c,l as t,m as i,q as l,F as d,t as _,c as N,z as a,A as r,v as y,x as k}from"./_plugin-vue_export-helper-39493a5d.js";const C={name:"NewsDetailComponent",components:{Carousel:p,Slide:w,Pagination:f,Navigation:x},props:{data:Object}},D={class:"row"},B={class:"col-lg-8 col-md-12"},S={class:"card px-3 pt-3",style:{"max-width":"50rem"}},L={class:"bg-image hover-overlay shadow-1-strong ripple rounded-5 mb-4","data-mdb-ripple-color":"light"},T=["src"],V={class:"text-left"},j={class:"row mb-3"},F={class:"col-6"},H={class:"text-info"},M=t("i",{class:"ri-account-circle-line"},null,-1),P={class:"col-6 text-end"},q={class:"text-dark"},z=["innerHTML"],A={class:"col-lg-4 col-md-12"},E={id:"about",class:"about"},K={class:"row content"},O={class:"col"},G=t("h3",null,"Kategori",-1),I=t("i",{class:"ri-check-double-line"},null,-1);function J(u,Q,s,R,U,W){const m=n("slide"),h=n("navigation"),g=n("pagination"),v=n("carousel");return o(),c("div",D,[t("div",B,[t("div",S,[t("div",null,[i(v,{autoplay:2e3,"items-to-show":1,"wrap-around":!0},{addons:l(()=>[i(h),i(g)]),default:l(()=>[(o(!0),c(d,null,_(s.data.news_media,e=>(o(),N(m,{key:e.id},{default:l(()=>[t("div",L,[t("img",{src:"/img/"+e.name,class:"img-fluid"},null,8,T),t("p",V,"* "+a(e.description),1)])]),_:2},1024))),128))]),_:1}),t("div",j,[t("div",F,[t("a",H,[M,r(" "+a(s.data.username),1)])]),t("div",P,[t("u",null,a(u.formatDate(s.data.created_at)),1)])]),t("a",q,[t("h5",null,a(s.data.title),1),t("span",{innerHTML:s.data.text},null,8,z)])])])]),t("div",A,[t("section",E,[t("div",K,[t("div",O,[G,y(t("ul",null,[(o(!0),c(d,null,_(s.data.news_category_list,e=>(o(),c("li",null,[I,r(" "+a(e.name),1)]))),256))],512),[[k,s.data.news_category_list]])])])])])])}const Z=b(C,[["render",J]]);export{Z as N};
