import{_ as s,d as i,f as l,b as d,c as u,r as c}from"./app.215ccbdf.js";import{u as p}from"./useLife.1a416f53.js";import{u as _}from"./useBaseMapEffect.95a075ba.js";import"./useBaseMapListener.78d0f7c1.js";const m=i({props:{anchor:{default:"BMAP_ANCHOR_TOP_LEFT"},offset:{default:()=>({x:83,y:18})}},emits:["initd","unload"],setup(n){const t=n,r=l(),{ready:a}=p();return _(o=>{if(!r.value)return;const e=new window.BMapGL.Control;return e.defaultAnchor=window[t.anchor],e.defaultOffset=new window.BMapGL.Size(t.offset.x,t.offset.y),e.initialize=f=>f.getContainer().appendChild(r.value),o.addControl(e),a(o),()=>o.removeControl(e)}),(o,e)=>(d(),u("div",{ref_key:"controlContainer",ref:r},[c(o.$slots,"default")],512))}});var B=s(m,[["__file","index.vue"]]);export{B as default};