import{a as n}from"./axios-67252f11.js";const i={async postImage({file:a,path:e}){const o={method:"post",maxBodyLength:1/0,url:`/api/upload-image?path=${e}`,headers:{Accept:"application/json","Content-Type":"multipart/form-data"},data:a},t=await n(o);return t.data?t.status==200?t.data:{}:{}}};export{i as f};
