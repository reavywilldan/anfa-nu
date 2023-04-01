import{S as m}from"./SideNav-30d5ccf9.js";import{s as i,m as u}from"./index-34a12790.js";import{u as d}from"./users-2c640c08.js";import{S as h}from"./sweetalert2.all-274c1721.js";import{_ as p,r as _,o as n,j as c,m as f,l as s,z as w,G as v,v as g,I as y}from"./_plugin-vue_export-helper-39493a5d.js";import"./axios-67252f11.js";import"./_commonjsHelpers-725317a4.js";const b={name:"AdminProfileView",components:{SideNavComponent:m},data(){return{authenticated:i.state.auth.authenticated,user:i.state.auth.user,password:"",dataUsers:{},messageError:""}},methods:{...u({signOut:"auth/logout"}),logout(){this.signOut()},async editPasswordUsers(){if(this.dataUsers.id=this.user.id,this.password&&(await d.updateUsers({password:this.password},this.user.bearer)).data){let t=this;h.fire({title:"Berhasil!",text:"Password Profil berhasil diubah.",icon:"success"}).then(function(){t.signOut()})}},async getUsersById(o){try{const t=await d.getUsersById(o,this.user.bearer);this.dataUsers=t}catch{this.dataUsers={}}}},async mounted(){await this.getUsersById(this.user.id)}},U={class:"g-sidenav-show bg-gray-100"},P={class:"main-content position-relative border-radius-lg"},S={class:"container-fluid py-4"},x={class:"row"},B={class:"col-12"},C={class:"card mb-4"},N=s("div",{class:"card-header pb-0"},[s("h6",null,"Profil Password")],-1),V={class:"card-body"},k={role:"form",action:"javascript:void(0)",method:"POST"},E={key:0,class:"alert alert-primary",role:"alert"},I={style:{color:"white"}},O={class:"row"},j={class:"col-md-4"},A={class:"form-group"},D=s("label",{for:"email",class:"form-control-label text-left"}," Password ",-1);function T(o,t,q,z,e,a){const l=_("SideNavComponent");return n(),c("body",U,[f(l),s("main",P,[s("div",S,[s("div",x,[s("div",B,[s("div",C,[N,s("div",V,[s("form",k,[e.messageError?(n(),c("div",E,[s("strong",I,w(e.messageError),1)])):v("",!0),s("div",O,[s("div",j,[s("div",A,[D,g(s("input",{class:"form-control",name:"email",id:"email",type:"text","onUpdate:modelValue":t[0]||(t[0]=r=>e.password=r),required:""},null,512),[[y,e.password]])])])]),s("button",{type:"submit",class:"btn btn-primary btn-sm ms-auto",onClick:t[1]||(t[1]=(...r)=>a.editPasswordUsers&&a.editPasswordUsers(...r))}," Simpan ")])])])])])])])])}const Q=p(b,[["render",T]]);export{Q as default};
