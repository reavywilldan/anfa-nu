import{H as y,F as k,C as P}from"./ContactUs-7f7a1005.js";import{T as O}from"./TitlePage-f1d8f853.js";import{p as U}from"./productSubmission-ec77da41.js";import{f as V}from"./file-0a47ad86.js";import{S}from"./sweetalert2.all-274c1721.js";import{_ as q,r as h,o as _,j as v,l as e,m as d,x as r,I as i,J as l,G as N,K as w,L as B}from"./_plugin-vue_export-helper-637055ac.js";import"./axios-67252f11.js";import"./_commonjsHelpers-725317a4.js";const T={name:"ProductSubmissionView",components:{HeaderComponent:y,FooterComponent:k,TitlePageComponent:O,ContactUsComponent:P},data(){return{idProduct:0,name:"",gender:"",cityOfBirth:"",dateOfBirth:"",maritalStatus:"",motherMaidenName:"",dependent:0,identityNumber:"0",phoneNumber:"0",address:"",lengthOfStay:0,homeType:"",work:"",workPosition:"",workAddress:"",requestedAmount:0,requestedAmountUse:"",termOfPayment:0,profitSharing:"",submissionType:"",partnerName:"",partnerCityOfBirth:"",partnerDateOfBirth:"",partnerWork:"",partnerWorkAddress:"",income:0,costLiving:0,partnerIncome:0,otherLoanInstallment:0,extraIncome:0,residualIncome:0,anfaDepositType:"",anfaOnBehalfOf:"",anfaAccountNumber:"",anfaCurrentBalance:0,otherDepositType:"",otherOnBehalfOf:"",otherAccountNumber:"",otherCurrentBalance:0,guarantee:"",guaranteeValue:0,guaranteeNameOwner:"",identityPhotoObj:{},identityPhoto:""}},watch:{"$route.params":{handler(a){this.idProduct=a.id},immediate:!0}},methods:{async addSubmission(){if(Object.keys(this.identityPhotoObj).length>0){const t=this.identityPhotoObj.file,p="submission",u=new FormData;u.append("photo",t);const o={file:u,path:p},m=await V.postImage(o);u.delete("photo");const f=m.data;this.identityPhoto=f}const a=await U.postProductSubmission(this.$data);if(console.log(a),a.data){let t=this;S.fire({title:"Berhasil!",text:"Berhasil mengajukan pembiayaan.",icon:"success"}).then(function(){t.$router.push("/")})}},onFileChange(a){const t=a.target.files[0],p=t.name,u=URL.createObjectURL(t),o={file:t,name:p,tempPath:u};this.identityPhotoObj=o},onClickRemoveFile(a){a.preventDefault(),this.identityPhotoObj={},document.getElementById("identityPhoto").value="",a.target.parentElement.remove()}}},n=a=>(w("data-v-33566e9c"),a=a(),B(),a),x={class:"home"},C={id:"main"},A={id:"contact",class:"contact"},I={class:"container"},j={action:"javascript:void(0)",method:"post",role:"form",class:"php-email-form"},D={class:"card"},L={class:"card-body"},R={class:"card-title"},J={class:"form-row"},F={class:"form-group col-md-6"},K=n(()=>e("label",{for:"name"},"Nama Lengkap",-1)),W={class:"form-group col-md-6"},M=n(()=>e("legend",{class:"col-form-label"},"Jenis Kelamin",-1)),H={class:"form-check form-check-inline"},E=n(()=>e("label",{class:"form-check-label",for:"male"}," Pria ",-1)),G={class:"form-check form-check-inline"},z=n(()=>e("label",{class:"form-check-label",for:"female"}," Wanita ",-1)),Q={class:"form-row"},X={class:"form-group col-md-3"},Y=n(()=>e("label",{for:"cob"},"Kota Lahir",-1)),Z={class:"form-group col-md-3"},$=n(()=>e("label",{for:"dob"},"Tanggal Lahir",-1)),ee={class:"form-group col-md-6"},oe=n(()=>e("legend",{class:"col-form-label"},"Status",-1)),te={class:"form-check form-check-inline"},se=n(()=>e("label",{class:"form-check-label",for:"single"}," Belum Menikah ",-1)),ne={class:"form-check form-check-inline"},re=n(()=>e("label",{class:"form-check-label",for:"married"}," Menikah ",-1)),ie={class:"form-check form-check-inline"},le=n(()=>e("label",{class:"form-check-label",for:"divorced"}," Janda / Duda ",-1)),ae={class:"form-row"},de={class:"form-group col-md-6"},me=n(()=>e("label",{for:"motherMaidenName"},"Nama Gadis Ibu Kandung",-1)),ce={class:"form-group col-md-6"},ue=n(()=>e("label",{for:"dependent"},"Tanggungan",-1)),pe={class:"input-group mb-2"},he=n(()=>e("div",{class:"input-group-prepend"},[e("div",{class:"input-group-text"},"orang")],-1)),fe={class:"form-row"},_e={class:"form-group col-md-6"},ve=n(()=>e("label",{for:"identityNumber"},"Nomor KTP",-1)),be={class:"form-group col-md-6"},ge=n(()=>e("label",{for:"phoneNumber"},"Nomor Telepon",-1)),ye={class:"form-row"},ke={class:"form-group col-md-4"},Pe=n(()=>e("label",{for:"address"},"Alamat Rumah",-1)),Oe={class:"form-group col-md-4"},Ue=n(()=>e("label",{for:"lengthOfStay"},"Lama Tinggal",-1)),Ve={class:"input-group"},Se=n(()=>e("div",{class:"input-group-prepend"},[e("div",{class:"input-group-text"},"tahun")],-1)),qe={class:"form-group col-md-4"},Ne=n(()=>e("legend",{class:"col-form-label"},"Rumah",-1)),we={class:"form-check form-check-inline"},Be=n(()=>e("label",{class:"form-check-label",for:"privacy"}," Pribadi ",-1)),Te={class:"form-check form-check-inline"},xe=n(()=>e("label",{class:"form-check-label",for:"family"}," Keluarga ",-1)),Ce={class:"form-check form-check-inline"},Ae=n(()=>e("label",{class:"form-check-label",for:"rent"}," Sewa ",-1)),Ie={class:"form-check form-check-inline"},je=n(()=>e("label",{class:"form-check-label",for:"service"}," Dinas ",-1)),De={class:"form-check form-check-inline"},Le=n(()=>e("label",{class:"form-check-label",for:"others"}," Lainnya ",-1)),Re={class:"form-row"},Je={class:"form-group col-md-4"},Fe=n(()=>e("label",{for:"work"},"Pekerjaan",-1)),Ke={class:"form-group col-md-4"},We=n(()=>e("label",{for:"workPosition"},"Jabatan",-1)),Me={class:"form-group col-md-4"},He=n(()=>e("label",{for:"workAddress"},"Alamat Pekerjaan",-1)),Ee={class:"card mt-2"},Ge={class:"card-body"},ze={class:"card-title"},Qe={class:"form-row"},Xe={class:"form-group col-md-6"},Ye=n(()=>e("label",{for:"requestedAmount"},"Jumlah Permohonan",-1)),Ze={class:"input-group mb-2"},$e=n(()=>e("div",{class:"input-group-prepend"},[e("div",{class:"input-group-text"},"Rp")],-1)),eo={class:"form-group col-md-6"},oo=n(()=>e("label",{for:"requestedAmountUse"},"Penggunaan",-1)),to={class:"form-row"},so={class:"form-group col-md-6"},no=n(()=>e("label",{for:"termOfPayment"},"Jangka Waktu",-1)),ro={class:"input-group mb-2"},io=n(()=>e("div",{class:"input-group-prepend"},[e("div",{class:"input-group-text"},"bulan")],-1)),lo={class:"form-group col-md-6"},ao=n(()=>e("label",{for:"profitSharing"},"Bagi Hasil",-1)),mo={class:"form-row"},co={class:"form-group col-md-6"},uo=n(()=>e("legend",{class:"col-form-label"},"Status Pengajuan",-1)),po={class:"form-check form-check-inline"},ho=n(()=>e("label",{class:"form-check-label",for:"new"},"Baru",-1)),fo={class:"form-check form-check-inline"},_o=n(()=>e("label",{class:"form-check-label",for:"enhancement"},"Peningkatan",-1)),vo={class:"form-check form-check-inline"},bo=n(()=>e("label",{class:"form-check-label",for:"take_over"},"Take Over",-1)),go={class:"card mt-2"},yo={class:"card-body"},ko={class:"card-title"},Po={class:"form-row"},Oo={class:"form-group col-md-6"},Uo=n(()=>e("label",{for:"partnerName"},"Nama Suami / Istri",-1)),Vo=["required"],So={class:"form-group col-md-3"},qo=n(()=>e("label",{for:"partnerCob"},"Kota Lahir",-1)),No=["required"],wo={class:"form-group col-md-3"},Bo=n(()=>e("label",{for:"partnerDob"},"Tanggal Lahir",-1)),To=["required"],xo={class:"form-row"},Co={class:"form-group col-md-6"},Ao=n(()=>e("label",{for:"partnerWork"},"Pekerjaan",-1)),Io=["required"],jo={class:"form-group col-md-6"},Do=n(()=>e("label",{for:"partnerWorkAddress"},"Alamat Pekerjaan",-1)),Lo=["required"],Ro={class:"card mt-2"},Jo={class:"card-body"},Fo={class:"card-title"},Ko={class:"form-row"},Wo={class:"form-group col-md-6"},Mo=n(()=>e("label",{for:"applicantIncome"},"Penghasilan Pemohon per Bulan",-1)),Ho={class:"input-group mb-2"},Eo=n(()=>e("div",{class:"input-group-prepend"},[e("div",{class:"input-group-text"},"Rp")],-1)),Go={class:"form-group col-md-6"},zo=n(()=>e("label",{for:"applicantCostLiving"},"Biaya Hidup Pemohon per Bulan",-1)),Qo={class:"input-group mb-2"},Xo=n(()=>e("div",{class:"input-group-prepend"},[e("div",{class:"input-group-text"},"Rp")],-1)),Yo={class:"form-row"},Zo={class:"form-group col-md-6"},$o=n(()=>e("label",{for:"partnerIncome"},"Penghasilan Suami / Istri per Bulan",-1)),et={class:"input-group mb-2"},ot=n(()=>e("div",{class:"input-group-prepend"},[e("div",{class:"input-group-text"},"Rp")],-1)),tt=["required"],st={class:"form-group col-md-6"},nt=n(()=>e("label",{for:"applicantOtherLoanInstallment"},"Angsuran Pinjaman Lain Pemohon per Bulan",-1)),rt={class:"input-group mb-2"},it=n(()=>e("div",{class:"input-group-prepend"},[e("div",{class:"input-group-text"},"Rp")],-1)),lt={class:"form-row"},at={class:"form-group col-md-6"},dt=n(()=>e("label",{for:"applicantExtraIncome"},"Penghasilan Tambahan per Bulan",-1)),mt={class:"input-group mb-2"},ct=n(()=>e("div",{class:"input-group-prepend"},[e("div",{class:"input-group-text"},"Rp")],-1)),ut={class:"form-group col-md-6"},pt=n(()=>e("label",{for:"applicantResidualIncome"},"Sisa Penghasilan per Bulan",-1)),ht={class:"input-group mb-2"},ft=n(()=>e("div",{class:"input-group-prepend"},[e("div",{class:"input-group-text"},"Rp")],-1)),_t={class:"card mt-2"},vt={class:"card-body"},bt={class:"card-title"},gt={class:"form-row"},yt={class:"form-group col-md-6"},kt=n(()=>e("label",{for:"anfaDepositType"},"Jenis Simpanan",-1)),Pt={class:"form-group col-md-6"},Ot=n(()=>e("label",{for:"anfaOnBehalfOf"},"Atas Nama",-1)),Ut={class:"form-row"},Vt={class:"form-group col-md-6"},St=n(()=>e("label",{for:"anfaAccountNumber"},"Nomor Rekening",-1)),qt={class:"form-group col-md-6"},Nt=n(()=>e("label",{for:"anfaCurrentBalance"},"Saldo Saat Ini",-1)),wt={class:"card mt-2"},Bt={class:"card-body"},Tt={class:"card-title"},xt={class:"form-row"},Ct={class:"form-group col-md-6"},At=n(()=>e("label",{for:"otherDepositType"},"Jenis Simpanan",-1)),It={class:"form-group col-md-6"},jt=n(()=>e("label",{for:"otherOnBehalfOf"},"Atas Nama",-1)),Dt={class:"form-row"},Lt={class:"form-group col-md-6"},Rt=n(()=>e("label",{for:"otherAccountNumber"},"Nomor Rekening",-1)),Jt={class:"form-group col-md-6"},Ft=n(()=>e("label",{for:"otherCurrentBalance"},"Saldo Saat Ini",-1)),Kt={class:"card mt-2"},Wt={class:"card-body"},Mt={class:"card-title"},Ht={class:"form-row"},Et={class:"form-group col-md-6"},Gt=n(()=>e("legend",{class:"col-form-label"},"Jaminan",-1)),zt={class:"form-check form-check-inline"},Qt=n(()=>e("label",{class:"form-check-label",for:"bpkb"}," BPKB ",-1)),Xt={class:"form-check form-check-inline"},Yt=n(()=>e("label",{class:"form-check-label",for:"sertifikat"}," Sertifikat ",-1)),Zt={class:"form-row"},$t={class:"form-group col-md-6"},es=n(()=>e("label",{for:"guaranteeValue"},"Nilai Jaminan",-1)),os={class:"input-group mb-2"},ts=n(()=>e("div",{class:"input-group-prepend"},[e("div",{class:"input-group-text"},"Rp")],-1)),ss={class:"form-group col-md-6"},ns=n(()=>e("label",{for:"guaranteeNameOwner"},"Nama Pemilik",-1)),rs={class:"form-row"},is={class:"form-group col"},ls=n(()=>e("label",{for:"identityPhoto"},"Foto KTP",-1)),as={key:0,id:"gallery"},ds=["data-file","data-temp"],ms=["src"],cs=["data-file","data-temp"],us=["data-file","data-temp"],ps={class:"text-center mt-5"};function hs(a,t,p,u,o,m){const f=h("HeaderComponent"),c=h("TitlePageComponent"),b=h("ContactUsComponent"),g=h("FooterComponent");return _(),v("div",x,[e("body",null,[d(f),e("main",C,[e("section",A,[e("div",I,[d(c,{msg:"Pengajuan Permohonan"}),e("form",j,[e("div",D,[e("div",L,[e("div",R,[d(c,{msg:"Data Pemohon"})]),e("div",J,[e("div",F,[K,r(e("input",{type:"text",class:"form-control",id:"name",placeholder:"Nama Lengkap","onUpdate:modelValue":t[0]||(t[0]=s=>o.name=s),required:""},null,512),[[i,o.name]])]),e("div",W,[M,e("div",H,[r(e("input",{class:"form-check-input",type:"radio",name:"gender",id:"male",value:"male","onUpdate:modelValue":t[1]||(t[1]=s=>o.gender=s),required:""},null,512),[[l,o.gender]]),E]),e("div",G,[r(e("input",{class:"form-check-input",type:"radio",name:"gender",id:"female",value:"female","onUpdate:modelValue":t[2]||(t[2]=s=>o.gender=s),required:""},null,512),[[l,o.gender]]),z])])]),e("div",Q,[e("div",X,[Y,r(e("input",{type:"text",class:"form-control",id:"cob",placeholder:"Kota Lahir","onUpdate:modelValue":t[3]||(t[3]=s=>o.cityOfBirth=s),required:""},null,512),[[i,o.cityOfBirth]])]),e("div",Z,[$,r(e("input",{type:"date",class:"form-control",name:"dob",id:"dob","onUpdate:modelValue":t[4]||(t[4]=s=>o.dateOfBirth=s),required:""},null,512),[[i,o.dateOfBirth]])]),e("div",ee,[oe,e("div",te,[r(e("input",{class:"form-check-input",type:"radio",name:"status",id:"single",value:"single","onUpdate:modelValue":t[5]||(t[5]=s=>o.maritalStatus=s),required:""},null,512),[[l,o.maritalStatus]]),se]),e("div",ne,[r(e("input",{class:"form-check-input",type:"radio",name:"status",id:"married",value:"married","onUpdate:modelValue":t[6]||(t[6]=s=>o.maritalStatus=s),required:""},null,512),[[l,o.maritalStatus]]),re]),e("div",ie,[r(e("input",{class:"form-check-input",type:"radio",name:"status",id:"divorced",value:"divorced","onUpdate:modelValue":t[7]||(t[7]=s=>o.maritalStatus=s),required:""},null,512),[[l,o.maritalStatus]]),le])])]),e("div",ae,[e("div",de,[me,r(e("input",{type:"text",class:"form-control",id:"motherMaidenName",placeholder:"Nama Gadis Ibu Kandung","onUpdate:modelValue":t[8]||(t[8]=s=>o.motherMaidenName=s),required:""},null,512),[[i,o.motherMaidenName]])]),e("div",ce,[ue,e("div",pe,[r(e("input",{type:"number",class:"form-control",id:"dependent","onUpdate:modelValue":t[9]||(t[9]=s=>o.dependent=s),required:""},null,512),[[i,o.dependent]]),he])])]),e("div",fe,[e("div",_e,[ve,r(e("input",{type:"text",class:"form-control",id:"identityNumber",placeholder:"Nomor KTP","onUpdate:modelValue":t[10]||(t[10]=s=>o.identityNumber=s),required:""},null,512),[[i,o.identityNumber]])]),e("div",be,[ge,r(e("input",{type:"text",class:"form-control",id:"phoneNumber",placeholder:"Nomor Telepon","onUpdate:modelValue":t[11]||(t[11]=s=>o.phoneNumber=s),required:""},null,512),[[i,o.phoneNumber]])])]),e("div",ye,[e("div",ke,[Pe,r(e("textarea",{class:"form-control",id:"address",rows:"3","onUpdate:modelValue":t[12]||(t[12]=s=>o.address=s),required:""},null,512),[[i,o.address]])]),e("div",Oe,[Ue,e("div",Ve,[r(e("input",{type:"number",class:"form-control",id:"lengthOfStay","onUpdate:modelValue":t[13]||(t[13]=s=>o.lengthOfStay=s),required:""},null,512),[[i,o.lengthOfStay]]),Se])]),e("div",qe,[Ne,e("div",we,[r(e("input",{class:"form-check-input",type:"radio",name:"homeType",id:"privacy",value:"privacy","onUpdate:modelValue":t[14]||(t[14]=s=>o.homeType=s),required:""},null,512),[[l,o.homeType]]),Be]),e("div",Te,[r(e("input",{class:"form-check-input",type:"radio",name:"homeType",id:"family",value:"family","onUpdate:modelValue":t[15]||(t[15]=s=>o.homeType=s),required:""},null,512),[[l,o.homeType]]),xe]),e("div",Ce,[r(e("input",{class:"form-check-input",type:"radio",name:"homeType",id:"rent",value:"rent","onUpdate:modelValue":t[16]||(t[16]=s=>o.homeType=s),required:""},null,512),[[l,o.homeType]]),Ae]),e("div",Ie,[r(e("input",{class:"form-check-input",type:"radio",name:"homeType",id:"service",value:"service","onUpdate:modelValue":t[17]||(t[17]=s=>o.homeType=s),required:""},null,512),[[l,o.homeType]]),je]),e("div",De,[r(e("input",{class:"form-check-input",type:"radio",name:"homeType",id:"others",value:"others","onUpdate:modelValue":t[18]||(t[18]=s=>o.homeType=s),required:""},null,512),[[l,o.homeType]]),Le])])]),e("div",Re,[e("div",Je,[Fe,r(e("input",{type:"text",class:"form-control",id:"work",placeholder:"Pekerjaan","onUpdate:modelValue":t[19]||(t[19]=s=>o.work=s),required:""},null,512),[[i,o.work]])]),e("div",Ke,[We,r(e("input",{type:"text",class:"form-control",id:"workPosition",placeholder:"Jabatan","onUpdate:modelValue":t[20]||(t[20]=s=>o.workPosition=s),required:""},null,512),[[i,o.workPosition]])]),e("div",Me,[He,r(e("textarea",{class:"form-control",id:"workAddress",rows:"3","onUpdate:modelValue":t[21]||(t[21]=s=>o.workAddress=s),required:""},null,512),[[i,o.workAddress]])])])])]),e("div",Ee,[e("div",Ge,[e("div",ze,[d(c,{msg:"Permohonan Pembiayaan"})]),e("div",Qe,[e("div",Xe,[Ye,e("div",Ze,[$e,r(e("input",{type:"number",class:"form-control",id:"requestedAmount","onUpdate:modelValue":t[22]||(t[22]=s=>o.requestedAmount=s),required:""},null,512),[[i,o.requestedAmount]])])]),e("div",eo,[oo,r(e("input",{type:"text",class:"form-control",id:"requestedAmountUse",placeholder:"Penggunaan","onUpdate:modelValue":t[23]||(t[23]=s=>o.requestedAmountUse=s),required:""},null,512),[[i,o.requestedAmountUse]])])]),e("div",to,[e("div",so,[no,e("div",ro,[r(e("input",{type:"number",class:"form-control",id:"termOfPayment","onUpdate:modelValue":t[24]||(t[24]=s=>o.termOfPayment=s),required:""},null,512),[[i,o.termOfPayment]]),io])]),e("div",lo,[ao,r(e("input",{type:"text",class:"form-control",id:"profitSharing",placeholder:"Bagi Hasil","onUpdate:modelValue":t[25]||(t[25]=s=>o.profitSharing=s),required:""},null,512),[[i,o.profitSharing]])])]),e("div",mo,[e("div",co,[uo,e("div",po,[r(e("input",{class:"form-check-input",type:"radio",name:"submissionType",id:"new",value:"new","onUpdate:modelValue":t[26]||(t[26]=s=>o.submissionType=s),required:""},null,512),[[l,o.submissionType]]),ho]),e("div",fo,[r(e("input",{class:"form-check-input",type:"radio",name:"submissionType",id:"enhancement",value:"enhancement","onUpdate:modelValue":t[27]||(t[27]=s=>o.submissionType=s),required:""},null,512),[[l,o.submissionType]]),_o]),e("div",vo,[r(e("input",{class:"form-check-input",type:"radio",name:"submissionType",id:"take_over",value:"take_over","onUpdate:modelValue":t[28]||(t[28]=s=>o.submissionType=s),required:""},null,512),[[l,o.submissionType]]),bo])])])])]),e("div",go,[e("div",yo,[e("div",ko,[d(c,{msg:"Data Suami / Istri"})]),e("div",Po,[e("div",Oo,[Uo,r(e("input",{type:"text",class:"form-control",id:"partnerName",placeholder:"Nama Suami / Istri","onUpdate:modelValue":t[29]||(t[29]=s=>o.partnerName=s),required:o.maritalStatus=="married"},null,8,Vo),[[i,o.partnerName]])]),e("div",So,[qo,r(e("input",{type:"text",class:"form-control",id:"partnerCob",placeholder:"Kota Lahir","onUpdate:modelValue":t[30]||(t[30]=s=>o.partnerCityOfBirth=s),required:o.maritalStatus=="married"},null,8,No),[[i,o.partnerCityOfBirth]])]),e("div",wo,[Bo,r(e("input",{type:"date",class:"form-control",name:"partnerDob",id:"partnerDob","onUpdate:modelValue":t[31]||(t[31]=s=>o.partnerDateOfBirth=s),required:o.maritalStatus=="married"},null,8,To),[[i,o.partnerDateOfBirth]])])]),e("div",xo,[e("div",Co,[Ao,r(e("input",{type:"text",class:"form-control",id:"partnerWork",placeholder:"Pekerjaan","onUpdate:modelValue":t[32]||(t[32]=s=>o.partnerWork=s),required:o.maritalStatus=="married"},null,8,Io),[[i,o.partnerWork]])]),e("div",jo,[Do,r(e("textarea",{class:"form-control",id:"partnerWorkAddress",rows:"3","onUpdate:modelValue":t[33]||(t[33]=s=>o.partnerWorkAddress=s),required:o.maritalStatus=="married"},null,8,Lo),[[i,o.partnerWorkAddress]])])])])]),e("div",Ro,[e("div",Jo,[e("div",Fo,[d(c,{msg:"Data Penghasilan"})]),e("div",Ko,[e("div",Wo,[Mo,e("div",Ho,[Eo,r(e("input",{type:"number",class:"form-control",id:"applicantIncome","onUpdate:modelValue":t[34]||(t[34]=s=>o.income=s),required:""},null,512),[[i,o.income]])])]),e("div",Go,[zo,e("div",Qo,[Xo,r(e("input",{type:"number",class:"form-control",id:"applicantCostLiving","onUpdate:modelValue":t[35]||(t[35]=s=>o.costLiving=s),required:""},null,512),[[i,o.costLiving]])])])]),e("div",Yo,[e("div",Zo,[$o,e("div",et,[ot,r(e("input",{type:"number",class:"form-control",id:"partnerIncome","onUpdate:modelValue":t[36]||(t[36]=s=>o.partnerIncome=s),required:o.maritalStatus=="married"},null,8,tt),[[i,o.partnerIncome]])])]),e("div",st,[nt,e("div",rt,[it,r(e("input",{type:"number",class:"form-control",id:"applicantOtherLoanInstallment","onUpdate:modelValue":t[37]||(t[37]=s=>o.otherLoanInstallment=s),required:""},null,512),[[i,o.otherLoanInstallment]])])])]),e("div",lt,[e("div",at,[dt,e("div",mt,[ct,r(e("input",{type:"number",class:"form-control",id:"applicantExtraIncome","onUpdate:modelValue":t[38]||(t[38]=s=>o.extraIncome=s),required:""},null,512),[[i,o.extraIncome]])])]),e("div",ut,[pt,e("div",ht,[ft,r(e("input",{type:"number",class:"form-control",id:"applicantResidualIncome","onUpdate:modelValue":t[39]||(t[39]=s=>o.residualIncome=s),required:""},null,512),[[i,o.residualIncome]])])])])])]),e("div",_t,[e("div",vt,[e("div",bt,[d(c,{msg:"Simpanan di BMT ANFA NU"})]),e("div",gt,[e("div",yt,[kt,r(e("input",{type:"text",class:"form-control",id:"anfaDepositType",placeholder:"Jenis Simpanan","onUpdate:modelValue":t[40]||(t[40]=s=>o.anfaDepositType=s)},null,512),[[i,o.anfaDepositType]])]),e("div",Pt,[Ot,r(e("input",{type:"text",class:"form-control",id:"anfaOnBehalfOf",placeholder:"Atas Nama","onUpdate:modelValue":t[41]||(t[41]=s=>o.anfaOnBehalfOf=s)},null,512),[[i,o.anfaOnBehalfOf]])])]),e("div",Ut,[e("div",Vt,[St,r(e("input",{type:"text",class:"form-control",id:"anfaAccountNumber",placeholder:"Nomor Rekening","onUpdate:modelValue":t[42]||(t[42]=s=>o.anfaAccountNumber=s)},null,512),[[i,o.anfaAccountNumber]])]),e("div",qt,[Nt,r(e("input",{type:"number",class:"form-control",id:"anfaCurrentBalance",placeholder:"Saldo Saat Ini","onUpdate:modelValue":t[43]||(t[43]=s=>o.anfaCurrentBalance=s)},null,512),[[i,o.anfaCurrentBalance]])])])])]),e("div",wt,[e("div",Bt,[e("div",Tt,[d(c,{msg:"Simpanan di Bank Lain"})]),e("div",xt,[e("div",Ct,[At,r(e("input",{type:"text",class:"form-control",id:"otherDepositType",placeholder:"Jenis Simpanan","onUpdate:modelValue":t[44]||(t[44]=s=>o.otherDepositType=s)},null,512),[[i,o.otherDepositType]])]),e("div",It,[jt,r(e("input",{type:"text",class:"form-control",id:"otherOnBehalfOf",placeholder:"Atas Nama","onUpdate:modelValue":t[45]||(t[45]=s=>o.otherOnBehalfOf=s)},null,512),[[i,o.otherOnBehalfOf]])])]),e("div",Dt,[e("div",Lt,[Rt,r(e("input",{type:"text",class:"form-control",id:"otherAccountNumber",placeholder:"Nomor Rekening","onUpdate:modelValue":t[46]||(t[46]=s=>o.otherAccountNumber=s)},null,512),[[i,o.otherAccountNumber]])]),e("div",Jt,[Ft,r(e("input",{type:"number",class:"form-control",id:"otherCurrentBalance",placeholder:"Saldo Saat Ini","onUpdate:modelValue":t[47]||(t[47]=s=>o.otherCurrentBalance=s)},null,512),[[i,o.otherCurrentBalance]])])])])]),e("div",Kt,[e("div",Wt,[e("div",Mt,[d(c,{msg:"Data Jaminan"})]),e("div",Ht,[e("div",Et,[Gt,e("div",zt,[r(e("input",{class:"form-check-input",type:"radio",name:"guarantee",id:"bpkb",value:"bpkb","onUpdate:modelValue":t[48]||(t[48]=s=>o.guarantee=s),required:""},null,512),[[l,o.guarantee]]),Qt]),e("div",Xt,[r(e("input",{class:"form-check-input",type:"radio",name:"guarantee",id:"sertifikat",value:"sertifikat","onUpdate:modelValue":t[49]||(t[49]=s=>o.guarantee=s),required:""},null,512),[[l,o.guarantee]]),Yt])])]),e("div",Zt,[e("div",$t,[es,e("div",os,[ts,r(e("input",{type:"number",class:"form-control",id:"guaranteeValue","onUpdate:modelValue":t[50]||(t[50]=s=>o.guaranteeValue=s),required:""},null,512),[[i,o.guaranteeValue]])])]),e("div",ss,[ns,r(e("input",{type:"text",class:"form-control",id:"guaranteeNameOwner",placeholder:"Nama Pemilik","onUpdate:modelValue":t[51]||(t[51]=s=>o.guaranteeNameOwner=s),required:""},null,512),[[i,o.guaranteeNameOwner]])])]),e("div",rs,[e("div",is,[ls,e("input",{type:"file",class:"form-control",id:"identityPhoto",accept:"image/png, image/jpeg",onChange:t[52]||(t[52]=(...s)=>m.onFileChange&&m.onFileChange(...s)),required:""},null,32)])]),Object.keys(o.identityPhotoObj).length>0?(_(),v("div",as,[e("div",{"data-file":o.identityPhotoObj.name,"data-temp":o.identityPhotoObj.tempPath,class:"img-wrapper"},[e("img",{src:o.identityPhotoObj.tempPath},null,8,ms),e("a",{id:"remove","data-file":o.identityPhotoObj.name,"data-temp":o.identityPhotoObj.tempPath,onClick:t[53]||(t[53]=(...s)=>m.onClickRemoveFile&&m.onClickRemoveFile(...s))},[e("i",{"data-file":o.identityPhotoObj.name,"data-temp":o.identityPhotoObj.tempPath,class:"ri-close-circle-fill"},null,8,us)],8,cs)],8,ds)])):N("",!0)])]),e("div",ps,[e("button",{type:"submit",onClick:t[54]||(t[54]=(...s)=>m.addSubmission&&m.addSubmission(...s))},"Ajukan")])])])])]),d(b),d(g)])])}const Os=q(T,[["render",hs],["__scopeId","data-v-33566e9c"]]);export{Os as default};
