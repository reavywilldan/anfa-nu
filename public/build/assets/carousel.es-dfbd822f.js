import{h as ee,i as m,j as u,k as p,l as I,p as x,m as be,q as xe,s as ye,u as K,x as J,y as fe,z as me}from"./app-20c1ad38.js";/**
 * Vue 3 Carousel 0.2.9
 * (c) 2022
 * @license MIT
 */const g={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},pe={itemsToShow:{default:g.itemsToShow,type:Number},itemsToScroll:{default:g.itemsToScroll,type:Number},wrapAround:{default:g.wrapAround,type:Boolean},snapAlign:{default:g.snapAlign,validator(e){return["start","end","center","center-even","center-odd"].includes(e)}},transition:{default:g.transition,type:Number},breakpoints:{default:g.breakpoints,type:Object},autoplay:{default:g.autoplay,type:Number},pauseAutoplayOnHover:{default:g.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:g.mouseDrag,type:Boolean},touchDrag:{default:g.touchDrag,type:Boolean},dir:{default:g.dir,validator(e){return["rtl","ltr"].includes(e)}},settings:{default(){return{}},type:Object}};function we({config:e,slidesCount:n}){const{snapAlign:a,wrapAround:s,itemsToShow:o=1}=e;if(s)return Math.max(n-1,0);let l;switch(a){case"start":l=n-o;break;case"end":l=n-1;break;case"center":case"center-odd":l=n-Math.ceil((o-.5)/2);break;case"center-even":l=n-Math.ceil(o/2);break;default:l=0;break}return Math.max(l,0)}function _e({config:e,slidesCount:n}){const{wrapAround:a,snapAlign:s,itemsToShow:o=1}=e;let l=0;if(a||o>n)return l;switch(s){case"start":l=0;break;case"end":l=o-1;break;case"center":case"center-odd":l=Math.floor((o-1)/2);break;case"center-even":l=Math.floor((o-2)/2);break;default:l=0;break}return l}function Q({val:e,max:n,min:a}){return n<a?e:Math.min(Math.max(e,a),n)}function Te({config:e,currentSlide:n,slidesCount:a}){const{snapAlign:s,wrapAround:o,itemsToShow:l=1}=e;let c=n;switch(s){case"center":case"center-odd":c-=(l-1)/2;break;case"center-even":c-=(l-2)/2;break;case"end":c-=l-1;break}return o?c:Q({val:c,max:a-l,min:0})}function ke(e){var n,a,s,o;return e?((n=e[0])===null||n===void 0?void 0:n.children)==="v-if"||((s=(a=e[0])===null||a===void 0?void 0:a.type)===null||s===void 0?void 0:s.name)==="CarouselSlide"?e.filter(l=>{var c;return((c=l.type)===null||c===void 0?void 0:c.name)==="CarouselSlide"}):((o=e[0])===null||o===void 0?void 0:o.children)||[]:[]}function V({val:e,max:n,min:a=0}){return e>n?V({val:e-(n+1),max:n,min:a}):e<a?V({val:e+(n+1),max:n,min:a}):e}function Ae(e,n){let a;return function(...s){const o=this;a||(e.apply(o,s),a=!0,setTimeout(()=>a=!1,n))}}function Ce(e,n){let a;return function(...s){a&&clearTimeout(a),a=setTimeout(()=>{e(...s),a=null},n)}}var Me=ee({name:"ARIA",setup(){const e=m("currentSlide",u(0)),n=m("slidesCount",u(0));return()=>p("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},`Item ${e.value+1} of ${n.value}`)}}),Ee=ee({name:"Carousel",props:pe,setup(e,{slots:n,emit:a,expose:s}){var o;const l=u(null),c=u([]),h=u(0),d=u(0);let b=u({}),y=Object.assign({},g);const i=I(Object.assign({},y)),r=u((o=e.modelValue)!==null&&o!==void 0?o:0),w=u(0),L=u(0),A=u(0),O=u(0);let C,$;x("config",i),x("slidesCount",d),x("currentSlide",r),x("maxSlide",A),x("minSlide",O),x("slideWidth",h);function z(){const t=Object.assign(Object.assign({},e),e.settings);b=u(Object.assign({},t.breakpoints)),y=Object.assign(Object.assign({},t),{settings:void 0,breakpoints:void 0}),te(y)}function N(){const t=Object.keys(b.value).map(v=>Number(v)).sort((v,k)=>+k-+v);let f=Object.assign({},y);t.some(v=>window.matchMedia(`(min-width: ${v}px)`).matches?(f=Object.assign(Object.assign({},f),b.value[v]),!0):!1),te(f)}function te(t){Object.entries(t).forEach(([f,v])=>i[f]=v)}const ne=Ce(()=>{Object.keys(b.value).length&&(N(),j()),D()},16);function D(){if(!l.value)return;const t=l.value.getBoundingClientRect();h.value=t.width/i.itemsToShow}function j(){d.value<=0||(L.value=Math.ceil((d.value-1)/2),A.value=we({config:i,slidesCount:d.value}),O.value=_e({config:i,slidesCount:d.value}),i.wrapAround||(r.value=Q({val:r.value,max:A.value,min:O.value})))}be(()=>{Object.keys(b.value).length&&N(),xe(()=>{j(),D(),a("init")}),ie(),window.addEventListener("resize",ne,{passive:!0})}),ye(()=>{$&&clearTimeout($),C&&clearInterval(C),window.removeEventListener("resize",ne,{passive:!0})});let S=!1;const B={x:0,y:0},P={x:0,y:0},_=I({x:0,y:0}),X=u(!1),ge=()=>{X.value=!0},he=()=>{X.value=!1};function ae(t){["INPUT","TEXTAREA"].includes(t.target.tagName)||(S=t.type==="touchstart",!(!S&&t.button!==0||M.value)&&(S||t.preventDefault(),B.x=S?t.touches[0].clientX:t.clientX,B.y=S?t.touches[0].clientY:t.clientY,document.addEventListener(S?"touchmove":"mousemove",le,!0),document.addEventListener(S?"touchend":"mouseup",oe,!0)))}const le=Ae(t=>{P.x=S?t.touches[0].clientX:t.clientX,P.y=S?t.touches[0].clientY:t.clientY;const f=P.x-B.x,v=P.y-B.y;_.y=v,_.x=f},16);function oe(){const t=i.dir==="rtl"?-1:1,f=Math.sign(_.x)*.4,v=Math.round(_.x/h.value+f)*t;if(v&&!S){const k=U=>{U.stopPropagation(),window.removeEventListener("click",k,!0)};window.addEventListener("click",k,!0)}T(r.value-v),_.x=0,_.y=0,document.removeEventListener(S?"touchmove":"mousemove",le,!0),document.removeEventListener(S?"touchend":"mouseup",oe,!0)}function ie(){!i.autoplay||i.autoplay<=0||(C=setInterval(()=>{i.pauseAutoplayOnHover&&X.value||R()},i.autoplay))}function se(){C&&(clearInterval(C),C=null),ie()}const M=u(!1);function T(t){const f=i.wrapAround?t:Q({val:t,max:A.value,min:O.value});r.value===f||M.value||(a("slide-start",{slidingToIndex:t,currentSlideIndex:r.value,prevSlideIndex:w.value,slidesCount:d.value}),M.value=!0,w.value=r.value,r.value=f,$=setTimeout(()=>{if(i.wrapAround){const v=V({val:f,max:A.value,min:0});v!==r.value&&(r.value=v,a("loop",{currentSlideIndex:r.value,slidingToIndex:t}))}a("update:modelValue",r.value),a("slide-end",{currentSlideIndex:r.value,prevSlideIndex:w.value,slidesCount:d.value}),M.value=!1,se()},i.transition))}function R(){T(r.value+i.itemsToScroll)}function W(){T(r.value-i.itemsToScroll)}const re={slideTo:T,next:R,prev:W};x("nav",re),x("isSliding",M);const ue=K(()=>Te({config:i,currentSlide:r.value,slidesCount:d.value}));x("slidesToScroll",ue);const Se=K(()=>{const t=i.dir==="rtl"?-1:1,f=ue.value*h.value*t;return{transform:`translateX(${_.x-f}px)`,transition:`${M.value?i.transition:0}ms`,margin:i.wrapAround?`0 -${d.value*h.value}px`:"",width:"100%"}});function ce(){z(),N(),j(),D(),se()}Object.keys(pe).forEach(t=>{["modelValue"].includes(t)||J(()=>e[t],ce)}),J(()=>e.modelValue,t=>{t!==r.value&&T(Number(t))}),J(d,j),z();const de={config:i,slidesCount:d,slideWidth:h,next:R,prev:W,slideTo:T,currentSlide:r,maxSlide:A,minSlide:O,middleSlide:L};s({updateBreakpointsConfigs:N,updateSlidesData:j,updateSlideWidth:D,initDefaultConfigs:z,restartCarousel:ce,slideTo:T,next:R,prev:W,nav:re,data:de});const H=n.default||n.slides,Y=n.addons,ve=I(de);return()=>{const t=ke(H==null?void 0:H(ve)),f=(Y==null?void 0:Y(ve))||[];t.forEach((q,G)=>q.props.index=G);let v=t;if(i.wrapAround){const q=t.map((F,E)=>fe(F,{index:-t.length+E,isClone:!0,key:`clone-before-${E}`})),G=t.map((F,E)=>fe(F,{index:t.length+E,isClone:!0,key:`clone-after-${E}`}));v=[...q,...t,...G]}c.value=t,d.value=Math.max(t.length,1);const k=p("ol",{class:"carousel__track",style:Se.value,onMousedown:i.mouseDrag?me(ae,["capture"]):null,onTouchstart:i.touchDrag?me(ae,["capture"]):null},v),U=p("div",{class:"carousel__viewport"},k);return p("section",{ref:l,class:{carousel:!0,"carousel--rtl":i.dir==="rtl"},dir:i.dir,"aria-label":"Gallery",tabindex:"0",onMouseenter:ge,onMouseleave:he},[U,f,p(Me)])}}});const Oe={arrowUp:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",arrowDown:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",arrowRight:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z",arrowLeft:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"},Z=e=>{const n=e.name;if(!n||typeof n!="string")return;const a=Oe[n],s=p("path",{d:a}),o=e.title||n,l=p("title",o);return p("svg",{class:"carousel__icon",viewBox:"0 0 24 24",role:"img",ariaLabel:o},[l,s])};Z.props={name:String,title:String};const Ie=(e,{slots:n,attrs:a})=>{const{next:s,prev:o}=n||{},l=m("config",I(Object.assign({},g))),c=m("maxSlide",u(1)),h=m("minSlide",u(1)),d=m("currentSlide",u(1)),b=m("nav",{}),{dir:y,wrapAround:i}=l,r=y==="rtl",w=p("button",{type:"button",class:["carousel__prev",!i&&d.value<=h.value&&"carousel__prev--disabled",a==null?void 0:a.class],"aria-label":"Navigate to previous slide",onClick:b.prev},(o==null?void 0:o())||p(Z,{name:r?"arrowRight":"arrowLeft"})),L=p("button",{type:"button",class:["carousel__next",!i&&d.value>=c.value&&"carousel__next--disabled",a==null?void 0:a.class],"aria-label":"Navigate to next slide",onClick:b.next},(s==null?void 0:s())||p(Z,{name:r?"arrowLeft":"arrowRight"}));return[w,L]},Le=()=>{const e=m("maxSlide",u(1)),n=m("minSlide",u(1)),a=m("currentSlide",u(1)),s=m("nav",{}),o=c=>V({val:a.value,max:e.value,min:0})===c,l=[];for(let c=n.value;c<e.value+1;c++){const h=p("button",{type:"button",class:{"carousel__pagination-button":!0,"carousel__pagination-button--active":o(c)},"aria-label":`Navigate to slide ${c+1}`,onClick:()=>s.slideTo(c)}),d=p("li",{class:"carousel__pagination-item",key:c},h);l.push(d)}return p("ol",{class:"carousel__pagination"},l)};var Ne=ee({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(e,{slots:n}){const a=m("config",I(Object.assign({},g))),s=m("currentSlide",u(0)),o=m("slidesToScroll",u(0)),l=m("slideWidth",u(0)),c=m("isSliding",u(!1)),h=K(()=>({width:l.value?`${l.value}px`:"100%"})),d=()=>e.index===s.value,b=()=>e.index===s.value-1,y=()=>e.index===s.value+1,i=()=>{const r=Math.floor(o.value),w=Math.ceil(o.value+a.itemsToShow-1);return e.index>=r&&e.index<=w};return()=>{var r;return p("li",{style:h.value,class:{carousel__slide:!0,"carousel_slide--clone":e.isClone,"carousel__slide--visible":i(),"carousel__slide--active":d(),"carousel__slide--prev":b(),"carousel__slide--next":y(),"carousel__slide--sliding":c.value},"aria-hidden":!i()},(r=n.default)===null||r===void 0?void 0:r.call(n))}}});export{Ee as C,Ie as N,Le as P,Ne as S};