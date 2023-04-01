import{S as x}from"./SideNav-30d5ccf9.js";import{s as m}from"./index-34a12790.js";import{n as d}from"./newsPromotion-2f439f06.js";import{S as p}from"./sweetalert2.all-274c1721.js";import{_ as g,r as v,o as r,j as n,m as f,l as t,v as b,I as y,F as w,t as S,z as l,E as k,G as C,k as D}from"./_plugin-vue_export-helper-39493a5d.js";import"./axios-67252f11.js";import"./lodash-17fa2b00.js";import"./_commonjsHelpers-725317a4.js";const N={name:"AdminPromotion",components:{SideNavComponent:x},data(){return{authenticated:m.state.auth.authenticated,user:m.state.auth.user,news:[],page:1,search:"",noResult:!1,message:""}},methods:{async loadDataFromServer(){try{const a={page:this.page,search:this.search},e=await d.getNews(a);e.data.length?(this.news.push(...e.data),this.page++):(this.noResult=!0,this.message="No result found")}catch{this.noResult=!0,this.message="Error loading data"}},async onKeyupLoadDataFromServer(){try{const a={page:1,search:this.search},e=await d.getNews(a);e.data.length&&(this.news=e.data)}catch{this.noResult=!0,this.message="Error loading data"}},async onClickDelete(a){try{let e=this;const c=a.target.getAttribute("data-id");p.fire({title:"Apakah anda yakin",showCancelButton:!0,confirmButtonText:"Yes"}).then(h=>{h.isConfirmed&&p.fire("Data berhasil dihapus!","","success").then(async function(){(await d.deleteNewsById(c,e.user.bearer)).data&&location.reload()})})}catch{}}},async mounted(){await this.loadDataFromServer()}},F={class:"g-sidenav-show bg-gray-100"},B={class:"main-content position-relative border-radius-lg"},V={class:"navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl",id:"navbarBlur","data-scroll":"false"},A={class:"container-fluid py-1 px-3"},E={class:"collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4",id:"navbar"},L={class:"ms-md-auto pe-md-3 d-flex align-items-center"},R={class:"input-group"},T=t("span",{class:"input-group-text text-body"},[t("i",{class:"fas fa-search","aria-hidden":"true"})],-1),K=D('<div class="container-fluid"><div class="row"><div class="col-lg-4"><div class="row"><div class="col-md-12 mb-lg-0 mb-4"><div class="row"><div class="col-6 text-end"><a class="btn bg-gradient-dark mb-0" href="/admstr/add-promotion"><i class="fas fa-plus"></i>  Tambah </a></div></div></div></div></div></div></div>',1),P={class:"container-fluid py-4"},j={class:"row"},M={class:"col-12"},I={class:"card mb-4"},z=t("div",{class:"card-header pb-0"},[t("h6",null,"Promosi")],-1),G={class:"card-body px-0 pt-0 pb-2"},H={class:"table-responsive p-0"},J={class:"table align-items-center mb-0"},U=t("thead",null,[t("tr",null,[t("th",{class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Author "),t("th",{class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"}," Judul "),t("th",{class:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Tanggal "),t("th",{class:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Aksi ")])],-1),Y=["id"],q={class:"align-middle text-center"},O={class:"text-secondary text-xs font-weight-bold"},Q={class:"align-middle text-center"},W={class:"text-secondary text-xs font-weight-bold"},X={class:"align-middle text-center"},Z={class:"text-secondary text-xs font-weight-bold"},$={class:"align-middle"},tt=["href"],et=["data-id"],st={class:"text-center mt-5"};function at(a,e,c,h,i,o){const u=v("SideNavComponent");return r(),n("body",F,[f(u),t("main",B,[t("nav",V,[t("div",A,[t("div",E,[t("div",L,[t("div",R,[T,b(t("input",{type:"text",class:"form-control",placeholder:"Type here...","onUpdate:modelValue":e[0]||(e[0]=s=>i.search=s),onKeyup:e[1]||(e[1]=(...s)=>o.onKeyupLoadDataFromServer&&o.onKeyupLoadDataFromServer(...s))},null,544),[[y,i.search]])])])])])]),K,t("div",P,[t("div",j,[t("div",M,[t("div",I,[z,t("div",G,[t("div",H,[t("table",J,[U,t("tbody",null,[(r(!0),n(w,null,S(i.news,s=>(r(),n("tr",{key:s.id,id:s.id},[t("td",q,[t("span",O,l(s.username),1)]),t("td",Q,[t("span",W,l(s.title),1)]),t("td",X,[t("span",Z,l(a.formatDate(s.created_at)),1)]),t("td",$,[t("a",{href:"/admstr/detail-promotion/"+s.id,class:"text-secondary font-weight-bold text-xs","data-toggle":"tooltip","data-original-title":"Edit user"}," Detail ",8,tt),t("a",{href:"#",class:"text-secondary font-weight-bold text-xs","data-toggle":"tooltip","data-original-title":"Delete news","data-id":s.id,onClick:e[2]||(e[2]=k((..._)=>o.onClickDelete&&o.onClickDelete(..._),["prevent"]))}," Hapus ",8,et)])],8,Y))),128))])])]),t("div",st,[i.noResult?C("",!0):(r(),n("button",{key:0,onClick:e[3]||(e[3]=(...s)=>o.loadDataFromServer&&o.loadDataFromServer(...s)),type:"button",class:"btn text-white bg-gradient-dark"}," Load More "))])])])])])])])])}const mt=g(N,[["render",at]]);export{mt as default};
