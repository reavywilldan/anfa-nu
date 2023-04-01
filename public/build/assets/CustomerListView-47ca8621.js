import{S as u}from"./SideNav-30d5ccf9.js";import{s as h}from"./index-34a12790.js";import{a as _}from"./axios-67252f11.js";import"./sweetalert2.all-274c1721.js";import{_ as x,r as g,o as i,j as d,m as y,l as t,v as b,I as v,F as f,t as w,z as c,G as S}from"./_plugin-vue_export-helper-39493a5d.js";import"./_commonjsHelpers-725317a4.js";const p={url:"/api/customer-list",async getCustomerList({page:s,search:e},l){try{s=s||1,s=parseInt(s),e=e||"",e=String(e);let n=`${this.url}?page=${s}`;e&&(n+=`&search=${e}`);const r={method:"get",url:n,headers:{Accept:"application/json",Authorization:`Bearer ${l}`,"Content-Type":"application/json"}},o=await _(r);return o.data?o.status==200?o.data:{}:{}}catch(n){return n}}},C={name:"AdminNewsCategory",components:{SideNavComponent:u},data(){return{authenticated:h.state.auth.authenticated,user:h.state.auth.user,customerLists:[],page:1,search:"",noResult:!1,message:""}},methods:{async loadDataFromServer(){try{const s={page:this.page,search:this.search},e=await p.getCustomerList(s,this.user.bearer);e.data.length?(this.customerLists.push(...e.data),this.page++):(this.noResult=!0,this.message="No result found")}catch{this.noResult=!0,this.message="Error loading data"}},async onKeyupLoadDataFromServer(){try{const s={page:1,search:this.search},e=await p.getCustomerList(s,this.user.bearer);e.data.length&&(this.customerLists=e.data)}catch{this.noResult=!0,this.message="Error loading data"}}},async mounted(){await this.loadDataFromServer()}},N={class:"g-sidenav-show bg-gray-100"},L={class:"main-content position-relative border-radius-lg"},D={class:"navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl",id:"navbarBlur","data-scroll":"false"},F={class:"container-fluid py-1 px-3"},k={class:"collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4",id:"navbar"},K={class:"ms-md-auto pe-md-3 d-flex align-items-center"},j={class:"input-group"},B=t("span",{class:"input-group-text text-body"},[t("i",{class:"fas fa-search","aria-hidden":"true"})],-1),R={class:"container-fluid py-4"},T={class:"row"},V={class:"col-12"},A={class:"card mb-4"},E=t("div",{class:"card-header pb-0"},[t("h6",null,"List Customer")],-1),z={class:"card-body px-0 pt-0 pb-2"},I={class:"table-responsive p-0"},M={class:"table align-items-center mb-0"},P=t("thead",null,[t("tr",null,[t("th",{class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Nama "),t("th",{class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"}," Jenis Kelamin "),t("th",{class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"}," Nomor KTP "),t("th",{class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"}," Nomor Telepon ")])],-1),G=["id"],J={class:"align-middle text-center"},U={class:"text-secondary text-xs font-weight-bold"},W={class:"align-middle text-center"},q={class:"text-secondary text-xs font-weight-bold"},H={class:"align-middle text-center"},O={class:"text-secondary text-xs font-weight-bold"},Q={class:"align-middle text-center"},X={class:"text-secondary text-xs font-weight-bold"},Y={class:"text-center mt-5"};function Z(s,e,l,n,r,o){const m=g("SideNavComponent");return i(),d("body",N,[y(m),t("main",L,[t("nav",D,[t("div",F,[t("div",k,[t("div",K,[t("div",j,[B,b(t("input",{type:"text",class:"form-control",placeholder:"Type here...","onUpdate:modelValue":e[0]||(e[0]=a=>r.search=a),onKeyup:e[1]||(e[1]=(...a)=>o.onKeyupLoadDataFromServer&&o.onKeyupLoadDataFromServer(...a))},null,544),[[v,r.search]])])])])])]),t("div",R,[t("div",T,[t("div",V,[t("div",A,[E,t("div",z,[t("div",I,[t("table",M,[P,t("tbody",null,[(i(!0),d(f,null,w(r.customerLists,a=>(i(),d("tr",{key:a.id,id:a.id},[t("td",J,[t("span",U,c(a.name),1)]),t("td",W,[t("span",q,c(a.gender=="male"?"Pria":"Wanita"),1)]),t("td",H,[t("span",O,c(a.identity_number),1)]),t("td",Q,[t("span",X,c(a.phone_number),1)])],8,G))),128))])])]),t("div",Y,[r.noResult?S("",!0):(i(),d("button",{key:0,onClick:e[2]||(e[2]=(...a)=>o.loadDataFromServer&&o.loadDataFromServer(...a)),type:"button",class:"btn text-white bg-gradient-dark"}," Load More "))])])])])])])])])}const rt=x(C,[["render",Z]]);export{rt as default};
