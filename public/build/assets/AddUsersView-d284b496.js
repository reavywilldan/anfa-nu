import{S as _}from"./SideNav-30d5ccf9.js";import{s as d}from"./index-34a12790.js";import{u as h}from"./users-2c640c08.js";import{S as u}from"./sweetalert2.all-274c1721.js";import{_ as f,r as U,o as m,j as c,m as v,l as s,z as b,G as w,v as r,I as a}from"./_plugin-vue_export-helper-39493a5d.js";import"./axios-67252f11.js";import"./_commonjsHelpers-725317a4.js";const y={name:"AdminAddNewsUsers",components:{SideNavComponent:_},data(){return{authenticated:d.state.auth.authenticated,user:d.state.auth.user,emailUser:"",nameUser:"",phoneUser:"",passwordUser:"",messageError:""}},methods:{async addUsers(){const n={name:this.nameUser,email:this.emailUser,phone:this.phoneUser,password:this.passwordUser};if((await h.postUsers(n,this.user.bearer)).data){let i=this;u.fire({title:"Berhasil!",text:"User berhasil ditambahkan.",icon:"success"}).then(function(){i.$router.push("/admstr/users")})}}}},g={class:"g-sidenav-show bg-gray-100"},x={class:"main-content position-relative border-radius-lg"},S={class:"container-fluid py-4"},N={class:"row"},V={class:"col-12"},C={class:"card mb-4"},k=s("div",{class:"card-header pb-0"},[s("h6",null,"Tambah User")],-1),E={class:"card-body"},q={role:"form",action:"javascript:void(0)",method:"POST"},B={key:0,class:"alert alert-primary",role:"alert"},j={style:{color:"white"}},A={class:"row"},P={class:"col-md-6"},T={class:"form-group"},D=s("label",{for:"email",class:"form-control-label text-left"}," Email / Username ",-1),z={class:"col-md-6"},G={class:"form-group"},I=s("label",{for:"name",class:"form-control-label text-left"}," Nama ",-1),M={class:"row"},O={class:"col-md-6"},F={class:"form-group"},H=s("label",{for:"phone",class:"form-control-label text-left"}," Phone ",-1),J={class:"col-md-6"},K={class:"form-group"},L=s("label",{for:"password",class:"form-control-label text-left"}," Password ",-1);function Q(n,e,i,R,o,l){const p=U("SideNavComponent");return m(),c("body",g,[v(p),s("main",x,[s("div",S,[s("div",N,[s("div",V,[s("div",C,[k,s("div",E,[s("form",q,[o.messageError?(m(),c("div",B,[s("strong",j,b(o.messageError),1)])):w("",!0),s("div",A,[s("div",P,[s("div",T,[D,r(s("input",{class:"form-control",name:"email",id:"email",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>o.emailUser=t),required:""},null,512),[[a,o.emailUser]])])]),s("div",z,[s("div",G,[I,r(s("input",{class:"form-control",name:"name",id:"name",type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>o.nameUser=t),required:""},null,512),[[a,o.nameUser]])])])]),s("div",M,[s("div",O,[s("div",F,[H,r(s("input",{class:"form-control",name:"phone",id:"phone",type:"tel","onUpdate:modelValue":e[2]||(e[2]=t=>o.phoneUser=t),required:""},null,512),[[a,o.phoneUser]])])]),s("div",J,[s("div",K,[L,r(s("input",{class:"form-control",name:"password",id:"password",type:"password","onUpdate:modelValue":e[3]||(e[3]=t=>o.passwordUser=t),required:""},null,512),[[a,o.passwordUser]])])])]),s("button",{type:"submit",class:"btn btn-primary btn-sm ms-auto",onClick:e[4]||(e[4]=(...t)=>l.addUsers&&l.addUsers(...t))}," Simpan ")])])])])])])])])}const os=f(y,[["render",Q]]);export{os as default};
