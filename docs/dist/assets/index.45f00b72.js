import{_ as a,d as s,b as f,c as i}from"./app.4f254d64.js";import{u as d}from"./useBaseMapEffect.66dbbc56.js";import{u as c}from"./useLife.3067c0cd.js";const l=s({props:{anchor:{default:"BMAP_ANCHOR_BOTTOM_RIGHT"},offset:{default:()=>({x:83,y:18})}},emits:["initd","unload"],setup(n){const e=n,{ready:r}=c();let t;return d(o=>(t=new window.BMapGL.NavigationControl3D({offset:new window.BMapGL.Size(e.offset.x,e.offset.y),anchor:window[e.anchor]}),o.addControl(t),r(o),()=>o.removeControl(t))),(o,p)=>(f(),i("div"))}});var w=a(l,[["__file","index.vue"]]);export{w as default};