import{S as b}from"./SideNav-fd8fb2c4.js";import{s as x}from"./index-59290883.js";import{p as l}from"./productSubmission-ec77da41.js";import{S as _}from"./sweetalert2.all-274c1721.js";import{_ as f,r as v,o as d,j as i,m as w,l as t,z as y,H as k,I as S,F as D,q as C,y as u,G as r,E as g,k as P}from"./_plugin-vue_export-helper-dec0d763.js";import"./axios-67252f11.js";import"./_commonjsHelpers-725317a4.js";const j={name:"ProductSubmission",components:{SideNavComponent:b},data(){return{authenticated:x.state.auth.authenticated,user:x.state.auth.user,submissions:[],page:1,search:"",typeProduct:"",status:"on_submit",noResult:!1,message:""}},watch:{"$route.params":{handler(s){this.status=s.status},immediate:!0}},methods:{async loadDataFromServer(){try{const s={page:this.page,status:this.status,search:this.search,typeProduct:this.typeProduct},e=await l.getProductSubmission(s);e.data.length?(this.submissions.push(...e.data),this.page++):(this.noResult=!0,this.message="No result found")}catch{this.noResult=!0,this.message="Error loading data"}},async onKeyupLoadDataFromServer(){try{const s={page:1,status:this.status,search:this.search,typeProduct:this.typeProduct},e=await l.getProductSubmission(s);e.data.length&&(this.submissions=e.data)}catch{this.noResult=!0,this.message="Error loading data"}},async onChangeLoadDataFromServer(){try{const s={page:1,status:this.status,search:this.search,typeProduct:this.typeProduct},e=await l.getProductSubmission(s);e.data.length&&(this.submissions=e.data)}catch{this.noResult=!0,this.message="Error loading data"}},async onClickDelete(s){try{let e=this;const h=s.target.getAttribute("data-id");_.fire({title:"Apakah anda yakin",showCancelButton:!0,confirmButtonText:"Yes"}).then(p=>{p.isConfirmed&&_.fire("Data berhasil dihapus!","","success").then(async function(){(await l.deleteProductSubmissionById(h,e.user.bearer)).data&&location.reload()})})}catch{}},async onClickUpdate(s){try{let e=this;const h=s.target.getAttribute("data-id"),p=s.target.getAttribute("data-status");_.fire({title:"Apakah anda yakin",showCancelButton:!0,confirmButtonText:"Yes"}).then(n=>{n.isConfirmed&&_.fire("Data berhasil diupdate!","","success").then(async function(){const o={id:h,status:p};(await l.updateProductSubmissionById(o,e.user.bearer)).data&&location.reload()})})}catch{}}},async mounted(){await this.loadDataFromServer()}},F={class:"g-sidenav-show bg-gray-100"},B={class:"main-content position-relative border-radius-lg"},N={class:"navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl",id:"navbarBlur","data-scroll":"false"},U={class:"container-fluid py-1 px-3"},E={class:"collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4",id:"navbar"},L={class:"ms-md-auto pe-md-3 d-flex align-items-center"},R={class:"input-group"},T=t("span",{class:"input-group-text text-body"},[t("i",{class:"fas fa-search","aria-hidden":"true"})],-1),V={class:"ms-md-auto pe-md-3 d-flex align-items-center"},A={class:"input-group"},K=t("span",{class:"input-group-text text-body"},[t("i",{class:"fas fa-sliders-h","aria-hidden":"true"})],-1),M=P('<option value="">-- Pilih Produk Pembiayaan --</option><option value="1">Pembiayaan Modal Usaha</option><option value="2">Pembiayaan Kendaraan Bermotor</option><option value="3">Pembiayaan Rumah</option><option value="4">Pembiayaan Multiguna</option>',5),I=[M],H={class:"container-fluid py-4"},Y={class:"row"},q={class:"col-12"},z={class:"card mb-4"},G=t("div",{class:"card-header pb-0"},[t("h6",null,"Pengajuan")],-1),J={class:"card-body px-0 pt-0 pb-2"},O={class:"table-responsive p-0"},Q={class:"table align-items-center mb-0"},W=t("thead",null,[t("tr",null,[t("th",{class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Nama "),t("th",{class:"text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"}," Nomor KTP "),t("th",{class:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Nomor Telepon "),t("th",{class:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Produk Pemmbiayaan "),t("th",{class:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Status "),t("th",{class:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Tanggal "),t("th",{class:"text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"}," Aksi ")])],-1),X=["id"],Z={class:"align-middle text-center"},$={class:"text-secondary text-xs font-weight-bold"},tt={class:"align-middle text-center"},et={class:"text-secondary text-xs font-weight-bold"},at={class:"align-middle text-center"},st={class:"text-secondary text-xs font-weight-bold"},ot={class:"align-middle text-center"},dt={class:"text-secondary text-xs font-weight-bold"},it={class:"align-middle text-center"},nt={class:"text-secondary text-xs font-weight-bold"},rt={key:0,class:"badge bg-gradient-secondary"},ct={key:1,class:"badge bg-gradient-info"},lt={key:2,class:"badge bg-gradient-danger"},ut={key:3,class:"badge bg-gradient-success"},ht={class:"align-middle text-center"},pt={class:"text-secondary text-xs font-weight-bold"},_t={key:0,class:"align-middle"},gt=["href"],mt=["data-id"],xt=["data-id"],yt=["data-id"],bt={key:1,class:"align-middle"},ft=["href"],vt=["data-id"],wt={key:2,class:"align-middle"},kt=["href"],St={key:3,class:"align-middle"},Dt=["href"],Ct={class:"text-center mt-5"};function Pt(s,e,h,p,n,o){const m=v("SideNavComponent");return d(),i("body",F,[w(m),t("main",B,[t("nav",N,[t("div",U,[t("div",E,[t("div",L,[t("div",R,[T,y(t("input",{type:"text",class:"form-control",placeholder:"Type here...","onUpdate:modelValue":e[0]||(e[0]=a=>n.search=a),onKeyup:e[1]||(e[1]=(...a)=>o.onKeyupLoadDataFromServer&&o.onKeyupLoadDataFromServer(...a))},null,544),[[k,n.search]])])]),t("div",V,[t("div",A,[K,y(t("select",{class:"form-select","onUpdate:modelValue":e[2]||(e[2]=a=>n.typeProduct=a),onChange:e[3]||(e[3]=(...a)=>o.onChangeLoadDataFromServer&&o.onChangeLoadDataFromServer(...a))},I,544),[[S,n.typeProduct]])])])])])]),t("div",H,[t("div",Y,[t("div",q,[t("div",z,[G,t("div",J,[t("div",O,[t("table",Q,[W,t("tbody",null,[(d(!0),i(D,null,C(n.submissions,a=>(d(),i("tr",{key:a.id,id:a.id},[t("td",Z,[t("span",$,u(a.name),1)]),t("td",tt,[t("span",et,u(a.identity_number),1)]),t("td",at,[t("span",st,u(a.phone_number),1)]),t("td",ot,[t("span",dt,u(a.product_name),1)]),t("td",it,[t("span",nt,[a.submission_status=="on_submit"?(d(),i("span",rt,"Diajukan")):r("",!0),a.submission_status=="on_review"?(d(),i("span",ct,"Di Review")):r("",!0),a.submission_status=="rejected"?(d(),i("span",lt,"Ditolak")):r("",!0),a.submission_status=="approved"?(d(),i("span",ut,"Disetujui")):r("",!0)])]),t("td",ht,[t("span",pt,u(s.formatDate(a.created_at)),1)]),a.submission_status=="on_submit"?(d(),i("td",_t,[t("a",{href:"/admstr/detail-product-submission/"+a.id,class:"text-secondary font-weight-bold text-xs","data-toggle":"tooltip"}," Detail ",8,gt),t("a",{href:"#",class:"text-secondary font-weight-bold text-xs","data-toggle":"tooltip","data-id":a.id,"data-status":"on_review",onClick:e[4]||(e[4]=g((...c)=>o.onClickUpdate&&o.onClickUpdate(...c),["prevent"]))}," Survei ",8,mt),t("a",{href:"#",class:"text-secondary font-weight-bold text-xs","data-toggle":"tooltip","data-id":a.id,"data-status":"rejected",onClick:e[5]||(e[5]=g((...c)=>o.onClickUpdate&&o.onClickUpdate(...c),["prevent"]))}," Tolak ",8,xt),t("a",{href:"#",class:"text-secondary font-weight-bold text-xs","data-toggle":"tooltip","data-id":a.id,onClick:e[6]||(e[6]=g((...c)=>o.onClickDelete&&o.onClickDelete(...c),["prevent"]))}," Hapus ",8,yt)])):r("",!0),a.submission_status=="on_review"?(d(),i("td",bt,[t("a",{href:"/admstr/detail-product-submission/"+a.id,class:"text-secondary font-weight-bold text-xs","data-toggle":"tooltip","data-original-title":"Edit user"}," Detail ",8,ft),t("a",{href:"#",class:"text-secondary font-weight-bold text-xs","data-toggle":"tooltip","data-id":a.id,"data-status":"approved",onClick:e[7]||(e[7]=g((...c)=>o.onClickUpdate&&o.onClickUpdate(...c),["prevent"]))}," Setujui ",8,vt)])):r("",!0),a.submission_status=="approved"?(d(),i("td",wt,[t("a",{href:"/admstr/detail-product-submission/"+a.id,class:"text-secondary font-weight-bold text-xs","data-toggle":"tooltip","data-original-title":"Edit user"}," Detail ",8,kt)])):r("",!0),a.submission_status=="rejected"?(d(),i("td",St,[t("a",{href:"/admstr/detail-product-submission/"+a.id,class:"text-secondary font-weight-bold text-xs","data-toggle":"tooltip","data-original-title":"Edit user"}," Detail ",8,Dt)])):r("",!0)],8,X))),128))])])]),t("div",Ct,[n.noResult?r("",!0):(d(),i("button",{key:0,onClick:e[8]||(e[8]=(...a)=>o.loadDataFromServer&&o.loadDataFromServer(...a)),type:"button",class:"btn text-white bg-gradient-dark"}," Load More "))])])])])])])])])}const Rt=f(j,[["render",Pt]]);export{Rt as default};
