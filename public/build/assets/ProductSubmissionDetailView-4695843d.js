import{S as _}from"./SideNav-0f8b819c.js";import{s as a}from"./index-4fd3c68c.js";import{p as u}from"./productSubmission-ec77da41.js";import{_ as m,r as h,o as l,j as i,m as p,l as s,G as c,y as d,L as v,M as b}from"./_plugin-vue_export-helper-dec0d763.js";import"./axios-67252f11.js";const f={name:"ProductSubmissionDetail",components:{SideNavComponent:_},data(){return{authenticated:a.state.auth.authenticated,user:a.state.auth.user,idProductSubmission:0,productSubmission:{}}},watch:{"$route.params":{handler(e){this.idProductSubmission=e.id,this.loadDataFromServer(e.id)},immediate:!0}},methods:{async loadDataFromServer(e){try{const n=await u.getProductSubmissionById(e);this.productSubmission=n}catch{this.productSubmission={}}}}},t=e=>(v("data-v-1c93b645"),e=e(),b(),e),y={class:"g-sidenav-show bg-gray-100"},g={class:"main-content position-relative border-radius-lg"},S={class:"container-fluid py-4"},x={class:"row"},k={class:"col-12"},P={class:"card mb-4"},w=t(()=>s("div",{class:"card-header pb-0"},[s("h6",null,"Data Pemohon")],-1)),N={class:"card-body"},B={role:"form",action:"javascript:void(0)",method:"POST"},T={class:"row"},j={class:"col-md-4"},F={class:"form-group"},D=t(()=>s("label",{class:"form-control-label text-left"}," Nama Lengkap ",-1)),I=["value"],J={class:"col-md-4"},L={class:"form-group"},K=t(()=>s("label",{class:"form-control-label text-left"}," Jenis Kelamin ",-1)),O={key:0,class:"form-control",type:"text",value:"Pria",disabled:""},A={key:1,class:"form-control",type:"text",value:"Wanita",disabled:""},C={class:"col-md-4"},M={class:"form-group"},R=t(()=>s("label",{class:"form-control-label text-left"}," Kota Lahir ",-1)),V=["value"],q={class:"col-md-4"},G={class:"form-group"},H=t(()=>s("label",{class:"form-control-label text-left"}," Tanggal Lahir ",-1)),W=["value"],E={class:"col-md-4"},U={class:"form-group"},z=t(()=>s("label",{class:"form-control-label text-left"}," Status ",-1)),Q={key:0,class:"form-control",type:"text",value:"Belum Menikah",disabled:""},X={key:1,class:"form-control",type:"text",value:"Menikah",disabled:""},Y={key:2,class:"form-control",type:"text",value:"Janda / Duda",disabled:""},Z={class:"col-md-4"},$={class:"form-group"},ss=t(()=>s("label",{class:"form-control-label text-left"}," Nama Gadis Ibu Kandung ",-1)),os=["value"],ts={class:"col-md-4"},es={class:"form-group"},ls=t(()=>s("label",null,"Tanggungan",-1)),is={class:"input-group mb-2"},cs=["value"],ns=t(()=>s("div",{class:"input-group-prepend"},[s("div",{class:"input-group-text"},"orang")],-1)),ds={class:"col-md-4"},as={class:"form-group"},rs=t(()=>s("label",{class:"form-control-label text-left"}," Nomor KTP ",-1)),_s=["value"],us={class:"col-md-4"},ms={class:"form-group"},hs=t(()=>s("label",{class:"form-control-label text-left"}," Nomor Telepon ",-1)),ps=["value"],vs={class:"col-md-4"},bs={class:"form-group"},fs=t(()=>s("label",{class:"form-control-label text-left"}," Alamat Rumah ",-1)),ys={class:"form-control",disabled:""},gs={class:"col-md-4"},Ss={class:"form-group"},xs=t(()=>s("label",null,"Lama Tinggal",-1)),ks={class:"input-group mb-2"},Ps=["value"],ws=t(()=>s("div",{class:"input-group-prepend"},[s("div",{class:"input-group-text"},"tahun")],-1)),Ns={class:"col-md-4"},Bs={class:"form-group"},Ts=t(()=>s("label",{class:"form-control-label text-left"}," Rumah ",-1)),js={key:0,class:"form-control",type:"text",value:"Keluarga",disabled:""},Fs={key:1,class:"form-control",type:"text",value:"Lainnya",disabled:""},Ds={key:2,class:"form-control",type:"text",value:"Pribadi",disabled:""},Is={key:3,class:"form-control",type:"text",value:"Sewa",disabled:""},Js={key:4,class:"form-control",type:"text",value:"Dinas",disabled:""},Ls={class:"col-md-4"},Ks={class:"form-group"},Os=t(()=>s("label",{class:"form-control-label text-left"}," Pekerjaan ",-1)),As=["value"],Cs={class:"col-md-4"},Ms={class:"form-group"},Rs=t(()=>s("label",{class:"form-control-label text-left"}," Jabatan ",-1)),Vs=["value"],qs={class:"col-md-4"},Gs={class:"form-group"},Hs=t(()=>s("label",{class:"form-control-label text-left"}," Alamat Pekerjaan ",-1)),Ws={class:"form-control",disabled:""},Es={class:"row"},Us={class:"col-12"},zs={class:"card mb-4"},Qs=t(()=>s("div",{class:"card-header pb-0"},[s("h6",null,"Permohonan Pembiayaan")],-1)),Xs={class:"card-body"},Ys={role:"form",action:"javascript:void(0)",method:"POST"},Zs={class:"row"},$s={class:"col-md-4"},so={class:"form-group"},oo=t(()=>s("label",null,"Jumlah Permohonan",-1)),to=["value"],eo={class:"col-md-4"},lo={class:"form-group"},io=t(()=>s("label",null,"Penggunaan",-1)),co=["value"],no={class:"col-md-4"},ao={class:"form-group"},ro=t(()=>s("label",null,"Jangka Waktu",-1)),_o={class:"input-group mb-2"},uo=["value"],mo=t(()=>s("div",{class:"input-group-prepend"},[s("div",{class:"input-group-text"},"bulan")],-1)),ho={class:"col-md-4"},po={class:"form-group"},vo=t(()=>s("label",null,"Bagi Hasil",-1)),bo=["value"],fo={class:"col-md-4"},yo={class:"form-group"},go=t(()=>s("label",{class:"form-control-label text-left"}," Status Pengajuan ",-1)),So={key:0,class:"form-control",type:"text",value:"Peningkatan",disabled:""},xo={key:1,class:"form-control",type:"text",value:"Baru",disabled:""},ko={key:2,class:"form-control",type:"text",value:"Take Over",disabled:""},Po={class:"col-md-4"},wo={class:"form-group"},No=t(()=>s("label",{class:"form-control-label text-left"}," Produk ",-1)),Bo=["value"],To={class:"row"},jo={class:"col-12"},Fo={class:"card mb-4"},Do=t(()=>s("div",{class:"card-header pb-0"},[s("h6",null,"Data Suami / Istri")],-1)),Io={class:"card-body"},Jo={role:"form",action:"javascript:void(0)",method:"POST"},Lo={class:"row"},Ko={class:"col-md-4"},Oo={class:"form-group"},Ao=t(()=>s("label",null,"Nama Suami / Istri",-1)),Co=["value"],Mo={class:"col-md-4"},Ro={class:"form-group"},Vo=t(()=>s("label",null,"Kota Lahir",-1)),qo=["value"],Go={class:"col-md-4"},Ho={class:"form-group"},Wo=t(()=>s("label",null,"Tanggal Lahir",-1)),Eo=["value"],Uo={class:"col-md-4"},zo={class:"form-group"},Qo=t(()=>s("label",null,"Pekerjaan",-1)),Xo=["value"],Yo={class:"col-md-4"},Zo={class:"form-group"},$o=t(()=>s("label",{class:"form-control-label text-left"}," Alamat Pekerjaan ",-1)),st={class:"form-control",disabled:""},ot={class:"row"},tt={class:"col-12"},et={class:"card mb-4"},lt=t(()=>s("div",{class:"card-header pb-0"},[s("h6",null,"Data Penghasilan")],-1)),it={class:"card-body"},ct={role:"form",action:"javascript:void(0)",method:"POST"},nt={class:"row"},dt={class:"col-md-4"},at={class:"form-group"},rt=t(()=>s("label",null,"Penghasilan Pemohon per Bulan",-1)),_t=["value"],ut={class:"col-md-4"},mt={class:"form-group"},ht=t(()=>s("label",null,"Biaya Hidup Pemohon per Bulan",-1)),pt=["value"],vt={class:"col-md-4"},bt={class:"form-group"},ft=t(()=>s("label",null,"Penghasilan Suami / Istri per Bulan",-1)),yt=["value"],gt={class:"col-md-4"},St={class:"form-group"},xt=t(()=>s("label",null,"Angsuran Pinjaman Lain Pemohon per Bulan",-1)),kt=["value"],Pt={class:"col-md-4"},wt={class:"form-group"},Nt=t(()=>s("label",null,"Penghasilan Tambahan per Bulan",-1)),Bt=["value"],Tt={class:"col-md-4"},jt={class:"form-group"},Ft=t(()=>s("label",null,"Sisa Penghasilan per Bulan",-1)),Dt=["value"],It={class:"row"},Jt={class:"col-12"},Lt={class:"card mb-4"},Kt=t(()=>s("div",{class:"card-header pb-0"},[s("h6",null,"Simpanan di BMT Anfa NU")],-1)),Ot={class:"card-body"},At={role:"form",action:"javascript:void(0)",method:"POST"},Ct={class:"row"},Mt={class:"col-md-4"},Rt={class:"form-group"},Vt=t(()=>s("label",null,"Jenis Simpanan",-1)),qt=["value"],Gt={class:"col-md-4"},Ht={class:"form-group"},Wt=t(()=>s("label",null,"Atas Nama",-1)),Et=["value"],Ut={class:"col-md-4"},zt={class:"form-group"},Qt=t(()=>s("label",null,"Nomor Rekening",-1)),Xt=["value"],Yt={class:"col-md-4"},Zt={class:"form-group"},$t=t(()=>s("label",null,"Saldo Saat Ini",-1)),se=["value"],oe={class:"row"},te={class:"col-12"},ee={class:"card mb-4"},le=t(()=>s("div",{class:"card-header pb-0"},[s("h6",null,"Simpanan di Bank Lain")],-1)),ie={class:"card-body"},ce={role:"form",action:"javascript:void(0)",method:"POST"},ne={class:"row"},de={class:"col-md-4"},ae={class:"form-group"},re=t(()=>s("label",null,"Jenis Simpanan",-1)),_e=["value"],ue={class:"col-md-4"},me={class:"form-group"},he=t(()=>s("label",null,"Atas Nama",-1)),pe=["value"],ve={class:"col-md-4"},be={class:"form-group"},fe=t(()=>s("label",null,"Nomor Rekening",-1)),ye=["value"],ge={class:"col-md-4"},Se={class:"form-group"},xe=t(()=>s("label",null,"Saldo Saat Ini",-1)),ke=["value"],Pe={class:"row"},we={class:"col-12"},Ne={class:"card mb-4"},Be=t(()=>s("div",{class:"card-header pb-0"},[s("h6",null,"Data Jaminan")],-1)),Te={class:"card-body"},je={role:"form",action:"javascript:void(0)",method:"POST"},Fe={class:"row"},De={class:"col-md-4"},Ie={class:"form-group"},Je=t(()=>s("label",{class:"form-control-label text-left"}," Jaminan ",-1)),Le={key:0,class:"form-control",type:"text",value:"BPKB",disabled:""},Ke={key:1,class:"form-control",type:"text",value:"Sertifikat",disabled:""},Oe={class:"col-md-4"},Ae={class:"form-group"},Ce=t(()=>s("label",{class:"form-control-label text-left"}," Nilai Jaminan ",-1)),Me=["value"],Re={class:"col-md-4"},Ve={class:"form-group"},qe=t(()=>s("label",{class:"form-control-label text-left"}," Nama Pemilik ",-1)),Ge=["value"],He={class:"col-md-4"},We={class:"form-group"},Ee=t(()=>s("label",{class:"form-control-label text-left"}," Foto KTP ",-1)),Ue={id:"gallery"},ze={class:"img-wrapper"},Qe=["src"];function Xe(e,n,Ye,Ze,o,$e){const r=h("SideNavComponent");return l(),i("body",y,[p(r),s("main",g,[s("div",S,[s("div",x,[s("div",k,[s("div",P,[w,s("div",N,[s("form",B,[s("div",T,[s("div",j,[s("div",F,[D,s("input",{class:"form-control",type:"text",value:o.productSubmission.name,disabled:""},null,8,I)])]),s("div",J,[s("div",L,[K,o.productSubmission.gender=="male"?(l(),i("input",O)):c("",!0),o.productSubmission.gender=="female"?(l(),i("input",A)):c("",!0)])]),s("div",C,[s("div",M,[R,s("input",{class:"form-control",type:"text",value:o.productSubmission.city_of_birth,disabled:""},null,8,V)])]),s("div",q,[s("div",G,[H,s("input",{class:"form-control",type:"date",value:o.productSubmission.date_of_birth,disabled:""},null,8,W)])]),s("div",E,[s("div",U,[z,o.productSubmission.status=="single"?(l(),i("input",Q)):c("",!0),o.productSubmission.status=="married"?(l(),i("input",X)):c("",!0),o.productSubmission.status=="divorced"?(l(),i("input",Y)):c("",!0)])]),s("div",Z,[s("div",$,[ss,s("input",{class:"form-control",type:"text",value:o.productSubmission.mother_maiden_name,disabled:""},null,8,os)])]),s("div",ts,[s("div",es,[ls,s("div",is,[s("input",{class:"form-control",type:"number",value:o.productSubmission.dependent,disabled:""},null,8,cs),ns])])]),s("div",ds,[s("div",as,[rs,s("input",{class:"form-control",type:"text",value:o.productSubmission.identity_number,disabled:""},null,8,_s)])]),s("div",us,[s("div",ms,[hs,s("input",{class:"form-control",type:"text",value:o.productSubmission.phone_number,disabled:""},null,8,ps)])]),s("div",vs,[s("div",bs,[fs,s("textarea",ys,d(o.productSubmission.home_address),1)])]),s("div",gs,[s("div",Ss,[xs,s("div",ks,[s("input",{class:"form-control",type:"number",value:o.productSubmission.length_of_stay,disabled:""},null,8,Ps),ws])])]),s("div",Ns,[s("div",Bs,[Ts,o.productSubmission.home_type=="family"?(l(),i("input",js)):c("",!0),o.productSubmission.home_type=="others"?(l(),i("input",Fs)):c("",!0),o.productSubmission.home_type=="privacy"?(l(),i("input",Ds)):c("",!0),o.productSubmission.home_type=="rent"?(l(),i("input",Is)):c("",!0),o.productSubmission.home_type=="service"?(l(),i("input",Js)):c("",!0)])]),s("div",Ls,[s("div",Ks,[Os,s("input",{class:"form-control",type:"text",value:o.productSubmission.work,disabled:""},null,8,As)])]),s("div",Cs,[s("div",Ms,[Rs,s("input",{class:"form-control",type:"text",value:o.productSubmission.work_position,disabled:""},null,8,Vs)])]),s("div",qs,[s("div",Gs,[Hs,s("textarea",Ws,d(o.productSubmission.work_address),1)])])])])])])])]),s("div",Es,[s("div",Us,[s("div",zs,[Qs,s("div",Xs,[s("form",Ys,[s("div",Zs,[s("div",$s,[s("div",so,[oo,s("input",{class:"form-control",type:"text",value:e.currencyNumberFormat(o.productSubmission.requested_amount),disabled:""},null,8,to)])]),s("div",eo,[s("div",lo,[io,s("input",{class:"form-control",type:"text",value:o.productSubmission.requested_amount_use,disabled:""},null,8,co)])]),s("div",no,[s("div",ao,[ro,s("div",_o,[s("input",{class:"form-control",type:"number",value:o.productSubmission.term_of_payment,disabled:""},null,8,uo),mo])])]),s("div",ho,[s("div",po,[vo,s("input",{class:"form-control",type:"text",value:o.productSubmission.profit_sharing,disabled:""},null,8,bo)])]),s("div",fo,[s("div",yo,[go,o.productSubmission.submission_type=="enhancement"?(l(),i("input",So)):c("",!0),o.productSubmission.submission_type=="new"?(l(),i("input",xo)):c("",!0),o.productSubmission.submission_type=="take_over"?(l(),i("input",ko)):c("",!0)])]),s("div",Po,[s("div",wo,[No,s("input",{class:"form-control",type:"text",value:o.productSubmission.product_name,disabled:""},null,8,Bo)])])])])])])])]),s("div",To,[s("div",jo,[s("div",Fo,[Do,s("div",Io,[s("form",Jo,[s("div",Lo,[s("div",Ko,[s("div",Oo,[Ao,s("input",{class:"form-control",type:"text",value:o.productSubmission.partner_name,disabled:""},null,8,Co)])]),s("div",Mo,[s("div",Ro,[Vo,s("input",{class:"form-control",type:"text",value:o.productSubmission.partner_city_of_birth,disabled:""},null,8,qo)])]),s("div",Go,[s("div",Ho,[Wo,s("input",{class:"form-control",type:"date",value:o.productSubmission.partner_date_of_birth,disabled:""},null,8,Eo)])]),s("div",Uo,[s("div",zo,[Qo,s("input",{class:"form-control",type:"text",value:o.productSubmission.partner_work,disabled:""},null,8,Xo)])]),s("div",Yo,[s("div",Zo,[$o,s("textarea",st,d(o.productSubmission.partner_work_address),1)])])])])])])])]),s("div",ot,[s("div",tt,[s("div",et,[lt,s("div",it,[s("form",ct,[s("div",nt,[s("div",dt,[s("div",at,[rt,s("input",{class:"form-control",type:"text",value:e.currencyNumberFormat(o.productSubmission.applicant_income),disabled:""},null,8,_t)])]),s("div",ut,[s("div",mt,[ht,s("input",{class:"form-control",type:"text",value:e.currencyNumberFormat(o.productSubmission.applicant_cost_living),disabled:""},null,8,pt)])]),s("div",vt,[s("div",bt,[ft,s("input",{class:"form-control",type:"text",value:e.currencyNumberFormat(o.productSubmission.partner_income),disabled:""},null,8,yt)])]),s("div",gt,[s("div",St,[xt,s("input",{class:"form-control",type:"text",value:e.currencyNumberFormat(o.productSubmission.applicant_other_loan_installment),disabled:""},null,8,kt)])]),s("div",Pt,[s("div",wt,[Nt,s("input",{class:"form-control",type:"text",value:e.currencyNumberFormat(o.productSubmission.applicant_extra_income),disabled:""},null,8,Bt)])]),s("div",Tt,[s("div",jt,[Ft,s("input",{class:"form-control",type:"text",value:e.currencyNumberFormat(o.productSubmission.applicant_residual_income),disabled:""},null,8,Dt)])])])])])])])]),s("div",It,[s("div",Jt,[s("div",Lt,[Kt,s("div",Ot,[s("form",At,[s("div",Ct,[s("div",Mt,[s("div",Rt,[Vt,s("input",{class:"form-control",type:"text",value:o.productSubmission.anfa_deposit_type,disabled:""},null,8,qt)])]),s("div",Gt,[s("div",Ht,[Wt,s("input",{class:"form-control",type:"text",value:o.productSubmission.anfa_on_behalf_of,disabled:""},null,8,Et)])]),s("div",Ut,[s("div",zt,[Qt,s("input",{class:"form-control",type:"text",value:o.productSubmission.anfa_account_number,disabled:""},null,8,Xt)])]),s("div",Yt,[s("div",Zt,[$t,s("input",{class:"form-control",type:"text",value:e.currencyNumberFormat(o.productSubmission.anfa_current_balance),disabled:""},null,8,se)])])])])])])])]),s("div",oe,[s("div",te,[s("div",ee,[le,s("div",ie,[s("form",ce,[s("div",ne,[s("div",de,[s("div",ae,[re,s("input",{class:"form-control",type:"text",value:o.productSubmission.other_deposit_type,disabled:""},null,8,_e)])]),s("div",ue,[s("div",me,[he,s("input",{class:"form-control",type:"text",value:o.productSubmission.other_on_behalf_of,disabled:""},null,8,pe)])]),s("div",ve,[s("div",be,[fe,s("input",{class:"form-control",type:"text",value:o.productSubmission.other_account_number,disabled:""},null,8,ye)])]),s("div",ge,[s("div",Se,[xe,s("input",{class:"form-control",type:"text",value:e.currencyNumberFormat(o.productSubmission.other_current_balance),disabled:""},null,8,ke)])])])])])])])]),s("div",Pe,[s("div",we,[s("div",Ne,[Be,s("div",Te,[s("form",je,[s("div",Fe,[s("div",De,[s("div",Ie,[Je,o.productSubmission.guarantee=="bpkb"?(l(),i("input",Le)):c("",!0),o.productSubmission.guarantee=="sertifikat"?(l(),i("input",Ke)):c("",!0)])]),s("div",Oe,[s("div",Ae,[Ce,s("input",{class:"form-control",type:"text",value:e.currencyNumberFormat(o.productSubmission.guarantee_value),disabled:""},null,8,Me)])]),s("div",Re,[s("div",Ve,[qe,s("input",{class:"form-control",type:"text",value:o.productSubmission.guarantee_name_owner,disabled:""},null,8,Ge)])]),s("div",He,[s("div",We,[Ee,s("div",Ue,[s("div",ze,[s("img",{src:"/img/"+o.productSubmission.identity_photo},null,8,Qe)])])])])])])])])])])])])])}const il=m(f,[["render",Xe],["__scopeId","data-v-1c93b645"]]);export{il as default};
