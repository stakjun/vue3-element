import{an as B,a1 as M,ao as k,d as N,f as g,e as f,h as D,o as h,y as w,z as E,a3 as R,x,n as T,W as $,r as O,b as C,A as _,c as V,D as S,$ as L,a4 as A,T as Z}from"./framework.2dda4f01.js";import{u as H,b as P,R as W,_ as j}from"./useEventListener.86597f41.js";let q=1;const l=B([]),Y=n=>{const{nextZIndex:a}=H(),e=`message_${q++}`,s=document.createElement("div"),d=()=>{const o=l.findIndex(i=>i.id===e);o!==-1&&(l.splice(o,1),k(null,s))},c=()=>{const o=l.find(i=>i.id===e);o&&(o.vm.exposed.visible.value=!1)},u={...n,id:e,zIndex:a(),onDestroy:d},r=M(v,u);k(r,s),document.body.appendChild(s.firstElementChild);const p=r.component,m={id:e,vnode:r,vm:p,destroy:c,props:u};return l.push(m),m},F=n=>{const a=l.findIndex(e=>e.id===n);return a<=0?0:l[a-1].vm.exposed.bottomOffset.value},G={class:"vk-message__content"},J={key:0,class:"vk-message__close"},v=N({name:"VkMessage",__name:"Message",props:{message:{},duration:{default:3e3},showClose:{type:Boolean},type:{default:"info"},onDestroy:{},offset:{default:20},id:{},zIndex:{},transitionName:{default:"fade-up"}},setup(n,{expose:a}){const e=n,s=g(!1),d=g(null),c=g(0),u=f(()=>F(e.id)),r=f(()=>u.value+e.offset),p=f(()=>r.value+c.value),m=f(()=>({top:r.value+"px",zIndex:e.zIndex}));let o;const i=()=>{e.duration!==0&&(o=setTimeout(()=>{s.value=!1},e.duration))},I=()=>{clearTimeout(o)};P(document,"keydown",t=>{t.code==="Escape"&&(s.value=!1)}),D(()=>{s.value=!0,i()});const b=()=>{e.onDestroy()},z=()=>{c.value=d.value.getBoundingClientRect().height};return a({bottomOffset:p,visible:s}),(t,y)=>(h(),w(Z,{name:t.transitionName,onAfterLeave:b,onEnter:z},{default:E(()=>[R(x("div",{ref_key:"messageRef",ref:d,role:"alert",class:T(["vk-message",{[`vk-message--${t.type}`]:t.type,"is-close":t.showClose}]),style:$(m.value),onMouseenter:I,onMouseleave:i},[x("div",G,[O(t.$slots,"default",{},()=>[t.message?(h(),w(C(W),{key:0,vNode:t.message},null,8,["vNode"])):_("",!0)])]),t.showClose?(h(),V("div",J,[S(C(j),{onClick:y[0]||(y[0]=L(Q=>s.value=!1,["stop"])),icon:"xmark"})])):_("",!0)],38),[[A,s.value]])]),_:3},8,["name"]))}});v.install=n=>{n.component(v.name,v)};export{v as _,Y as c};