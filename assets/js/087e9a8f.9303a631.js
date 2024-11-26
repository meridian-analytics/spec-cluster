"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1455],{1200:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>Y,contentTitle:()=>T,default:()=>O,frontMatter:()=>D,metadata:()=>F,toc:()=>B});var i=n(1085),s=n(1184),r=n(4041),o=n(4105),l=n(6195),a=n(3842),c=n(3677),d=n(1899),h=n(6210),u=n(7679),m=n(4242),x=n(1483),p=n(4845),f=n(5654);function j(){const{spectrograms:e,updateSpectrogram:t}=o.E0.useContext(),{selection:n}=o.LN.useContext(),s=Array.from(n),r=s[0],l=e.get(r);if(null==l)throw Error(`MultiSelectEditor could not find spectrogram by id: ${r}`);return(0,i.jsxs)(c.A,{sx:{position:"absolute",top:"55%",right:0,transform:"translateY(-50%)",width:250,bgcolor:d.A[300],color:"white",borderRadius:2,p:3,margin:2,zIndex:10},children:[(0,i.jsx)(h.A,{sx:{color:"Black"},children:"Editor"}),(0,i.jsxs)(u.A,{fullWidth:!0,sx:{marginTop:2},children:[(0,i.jsx)(m.A,{children:"Color"}),(0,i.jsxs)(x.A,{value:l.color,label:"Color",onChange:e=>function(e){for(const n of s)t(n,(t=>({...t,color:e})))}(e.target.value),children:[(0,i.jsx)(p.A,{value:"Blue",children:"Blue (default) "}),(0,i.jsx)(p.A,{value:"Green",children:"Green"}),(0,i.jsx)(p.A,{value:"Red",children:"Red"}),(0,i.jsx)(p.A,{value:"Yellow",children:"Yellow"}),(0,i.jsx)(p.A,{value:"Brown",children:"Brown"})]}),(0,i.jsx)(f.A,{id:"standard-basic",label:"Label",variant:"standard",value:l.label,onChange:e=>function(e){for(const n of s)t(n,(t=>({...t,label:e})))}(e.target.value)})]}),(0,i.jsx)(u.A,{children:(0,i.jsx)(f.A,{id:"standard-basic",label:"Size",type:"number",variant:"standard",sx:{color:"white",marginTop:2},value:l.size.toFixed(2),onChange:e=>function(e){for(const n of s)t(n,(t=>({...t,size:e})))}(Number.parseFloat(e.target.value))})}),(0,i.jsxs)(u.A,{fullWidth:!0,sx:{marginTop:2},children:[(0,i.jsx)(m.A,{children:"Shape"}),(0,i.jsxs)(x.A,{value:l.shape,label:"Shape",onChange:e=>function(e){for(const n of s)t(n,(t=>({...t,shape:e})))}(e.target.value),children:[(0,i.jsx)(p.A,{value:"Sphere",children:"Sphere"}),(0,i.jsx)(p.A,{value:"Pyramid",children:"Pyramid"}),(0,i.jsx)(p.A,{value:"Cube",children:"Cube"})]})]})]})}var g=n(2576),v=n(4195),S=n(9266),A=n(661),b=n(139),w=n(6931),y=n(2762);function C(){const{spectrograms:e}=o.E0.useContext(),{selection:t}=o.LN.useContext(),n=Array.from(t),s=n[0];e.get(s);return(0,i.jsx)("div",{style:{position:"absolute",bottom:0,left:0,right:0,zIndex:10},children:(0,i.jsx)(g.A,{component:v.A,style:{maxHeight:"200px"},children:(0,i.jsxs)(S.A,{stickyHeader:!0,children:[(0,i.jsx)(A.A,{children:(0,i.jsxs)(b.A,{children:[(0,i.jsx)(w.A,{style:{fontWeight:"bold"},children:"Filename"}),(0,i.jsx)(w.A,{style:{fontWeight:"bold"},children:"Dim1"}),(0,i.jsx)(w.A,{style:{fontWeight:"bold"},children:"Dim2"}),(0,i.jsx)(w.A,{style:{fontWeight:"bold"},children:"Dim3"}),(0,i.jsx)(w.A,{style:{fontWeight:"bold"},children:"Color"}),(0,i.jsx)(w.A,{style:{fontWeight:"bold"},children:"Location(Made Up)"}),(0,i.jsx)(w.A,{style:{fontWeight:"bold"},children:"Label"})]})}),(0,i.jsx)(y.A,{children:0===n.length?(0,i.jsx)(b.A,{children:(0,i.jsx)(w.A,{colSpan:7,children:"No spectrograms selected"})}):n.map((t=>{const n=e.get(t);return n?(0,i.jsxs)(b.A,{children:[(0,i.jsx)(w.A,{children:n.filename}),(0,i.jsx)(w.A,{children:n.dim1}),(0,i.jsx)(w.A,{children:n.dim2}),(0,i.jsx)(w.A,{children:n.dim3}),(0,i.jsx)(w.A,{children:n.color}),(0,i.jsx)(w.A,{children:n.flocation}),(0,i.jsx)(w.A,{children:n.label})]},t):(0,i.jsx)(b.A,{children:(0,i.jsx)(w.A,{colSpan:7,children:"No data available"})},t)}))})]})})})}const M=l.Ik({filename:l.Yj(),dim1:l.au.number(),dim2:l.au.number(),dim3:l.au.number(),size:l.ai().optional().default(.9),color:l.Yj().optional().default("Blue"),width:l.ai().optional().default(3),height:l.ai().optional().default(3),label:l.Yj().optional().default(""),flocation:l.Yj(),shape:l.Yj().optional().default("Sphere")});function k(e){const t=l.YO(M).safeParse(e);if(t.success)return t.data;throw new Error(t.error.message)}function z(e){return r.useEffect((()=>{console.error(e.error)}),[e.error]),(0,i.jsxs)("div",{role:"alert",children:[(0,i.jsx)("p",{children:"Something went wrong:"}),(0,i.jsx)("pre",{style:{color:"red"},children:e.error.message}),(0,i.jsx)("button",{type:"button",onClick:e.resetErrorBoundary,children:"Try again"})]})}function P(){return(0,i.jsx)(o.E0.Provider,{data:k(a),children:(0,i.jsx)(o.cn.Provider,{children:(0,i.jsx)(o.LN.Provider,{children:(0,i.jsxs)(o.iG.Provider,{children:[(0,i.jsx)(I,{}),(0,i.jsx)(o.KA,{})]})})})})}function I(){const{spectrograms:e}=o.E0.useContext(),{selection:t,updateSelection:n}=o.LN.useContext();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(C,{}),t.size>=1&&(0,i.jsx)(j,{}),(0,i.jsx)(o.Z5,{renderMode:"dot",spectrograms:Array.from(e.values()),controls:{minAzimuthAngle:-Math.PI/4,maxAzimuthAngle:Math.PI/4,minPolarAngle:Math.PI/6,maxPolarAngle:Math.PI-Math.PI/6,maxDistance:120,minDistance:5},onSpecClick:e=>{n([e.filename])}})]})}var E=n(5769),_=n(7350);const D={title:"Shape Visualization",sidebar_position:2},T=void 0,F={id:"examples/shape-visualization",title:"Shape Visualization",description:"This example demonstrates how spectrogram data can be visualized as interactive shapes, with spheres as the default, in a 3D space using the spec-cluster package. The user can select individual or multiple entities and interact with them through the custom UI components.",source:"@site/docs/examples/shape-visualization.mdx",sourceDirName:"examples",slug:"/examples/shape-visualization",permalink:"/spec-cluster/docs/examples/shape-visualization",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Shape Visualization",sidebar_position:2},sidebar:"mainSidebar",previous:{title:"Spec Visualization",permalink:"/spec-cluster/docs/examples/spec-visualization"}},Y={},B=[{value:"Key Features",id:"key-features",level:2},{value:"Selection Context",id:"selection-context",level:3},{value:"Multi-select Editor",id:"multi-select-editor",level:3},{value:"Table View",id:"table-view",level:3},{value:"Scene Component",id:"scene-component",level:3},{value:"Configurator Context &amp; Interface Component",id:"configurator-context--interface-component",level:3},{value:"Error Handling",id:"error-handling",level:3}];function L(e){const t={a:"a",code:"code",div:"div",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This example demonstrates how spectrogram data can be visualized as interactive shapes, with spheres as the default, in a 3D space using the ",(0,i.jsx)(t.code,{children:"spec-cluster"})," package. The user can select individual or multiple entities and interact with them through the custom UI components."]}),"\n","\n",(0,i.jsx)(E.A,{fallback:(0,i.jsx)(t.div,{children:"Loading..."}),children:e=>(0,i.jsx)("div",{className:"live-example-wrapper",children:(0,i.jsx)(_.tH,{FallbackComponent:z,children:(0,i.jsx)(P,{})})})}),"\n",(0,i.jsx)(t.h2,{id:"key-features",children:"Key Features"}),"\n",(0,i.jsx)(t.h3,{id:"selection-context",children:"Selection Context"}),"\n",(0,i.jsx)(t.p,{children:"The Selection context tracks which spectrogram entities are selected when a user clicks on them. It supports two modes of selection:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Single Select:"})," Clicking on a single entity selects it."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Multi-Select:"})," Holding the ",(0,i.jsx)(t.code,{children:"Shift"})," key while dragging creates a marquee, selecting all entities within that marquee."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The selection is managed by the ",(0,i.jsx)(t.code,{children:"Selection.Provider"}),", which tracks the selected entities in a ",(0,i.jsx)(t.strong,{children:"set"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:'  export const Provider = (props: ProviderProps) => {\n  const [selection, setSelection] = React.useState(defaultContext.selection)\n\n  const updateSelection: Context["updateSelection"] = filenames => {\n    const next = new Set(selection)\n    for (const filename of filenames) {\n      if (next.has(filename)) next.delete(filename)\n      else next.add(filename)\n    }\n    setSelection(next)\n  }\n\n  const clearSelection: Context["clearSelection"] = () => {\n    setSelection(new Set())\n  }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["These selected entities can be further manipulated via the custom ",(0,i.jsx)("u",{children:"Multi-select Editor"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"multi-select-editor",children:"Multi-select Editor"}),"\n",(0,i.jsx)(t.p,{children:"The Multi-select editor is a local UI component that allows users to modify the properties of selected entities. Once an entity is selected, this editor provides options to adjust:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Color:"})," Change the color of selected entities."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Size:"})," Adjust the size of selected entities."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Label:"})," Add or modify the label for the selected entities."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Shape:"})," Change the shape of selected entities, with the default shape being a sphere."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["This component is displayed ",(0,i.jsx)("u",{children:"only when one or more entities"})," are selected."]}),"\n",(0,i.jsx)(t.h3,{id:"table-view",children:"Table View"}),"\n",(0,i.jsx)(t.p,{children:"The Table view component is another local UI element that displays a list of selected entities in a table format. It provides detailed metadata about the selected entities, including:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Filename"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"Dimensions"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Optional metadata"})," like color, size, and label"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"This gives users a comprehensive overview of all selected entities and their properties."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"shape-demo-selected",src:n(4979).A+"",width:"3360",height:"1858"})}),"\n",(0,i.jsx)(t.h3,{id:"scene-component",children:"Scene Component"}),"\n",(0,i.jsxs)(t.p,{children:["The Scene component renders the spectrograms as spheres (default shape) in a 3D space, using the ",(0,i.jsx)(t.code,{children:"renderMode"})," prop set to ",(0,i.jsx)(t.code,{children:"dot"})," for this demo."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"renderMode"}),": Set to ",(0,i.jsx)(t.code,{children:"dot"})," to display spectrograms as spheres (default shape). The ",(0,i.jsx)(t.code,{children:"image"})," mode is covered in the ",(0,i.jsx)(t.a,{href:"./spec-visualization",children:"Spec visualization example"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"onSpecClick"}),": Handles entity selection by updating the ",(0,i.jsx)(t.code,{children:"Selection"})," context. When an entity is clicked, its filename is added to or removed from the selection."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"controls"}),": These allow for adjusting the camera view of the 3D scene, offering flexibility for users to pan, zoom, and rotate:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-tsx",children:"<Scene\n  ...\n  controls={{\n    minAzimuthAngle: -Math.PI / 4,\n    maxAzimuthAngle: Math.PI / 4,\n    minPolarAngle: Math.PI / 6,\n    maxPolarAngle: Math.PI - Math.PI / 6,\n    maxDistance: 120,\n    minDistance: 5,\n  }}\n  ...\n/>\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Users can modify these controls to suit their preferences for how they interact with the 3D environment."}),"\n",(0,i.jsx)(t.h3,{id:"configurator-context--interface-component",children:"Configurator Context & Interface Component"}),"\n",(0,i.jsx)(t.p,{children:"The configurator context works with the interface component to allow users to adjust the position of the spectrograms in the 3D space using sliders. These sliders modify the x, y, and z axes."}),"\n",(0,i.jsxs)(t.p,{children:["For more details, refer to the ",(0,i.jsx)(t.a,{href:"/spec-cluster/docs/modules/contexts/configurator",children:"Configurator context"})," and ",(0,i.jsx)(t.a,{href:"/spec-cluster/docs/modules/components/interface",children:"Interface component"})," documentation."]}),"\n",(0,i.jsx)(t.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,i.jsxs)(t.p,{children:["The demo includes basic error handling through ",(0,i.jsx)(t.code,{children:"react-error-boundary"}),", ensuring that any issues are caught and a simple error message is displayed. Users can retry after an error occurs."]})]})}function O(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(L,{...e})}):L(e)}},4105:(e,t,n)=>{n.d(t,{BD:()=>D,E0:()=>N,KA:()=>w,LN:()=>k,Z5:()=>I,cn:()=>b,iG:()=>B});var i=n(1085),s=n(3677),r=n(1899),o=n(7679),l=n(6210),a=n(9e3),c=n(3193),d=n(4041),h=n(675),u=n(5394),m=n(4712),x=n(321),p=n(8916),f=n(5062);function j(e,t,n){!function(e,t){if(!e)throw Error(`Invariant violation: ${t??"truthy value expected"}`)}(Object.values(t).includes(e),`"${e}" is not a member of ${n??"enum"}`)}var g=(e=>(e[e.image=0]="image",e[e.dot=1]="dot",e))(g||{});const v={renderMode:0,scaleX:1,scaleY:1,scaleZ:1,setRenderMode:()=>{throw Error("setRenderMode called outside of context provider")},setScaleX:()=>{throw Error("setScaleX called outside of context provider")},setScaleY:()=>{throw Error("setScaleY called outside of context provider")},setScaleZ:()=>{throw Error("setScaleZ called outside of context provider")}},S=d.createContext(v),A=()=>d.useContext(S),b=Object.freeze(Object.defineProperty({__proto__:null,Provider:e=>{const[t,n]=d.useState(v.renderMode),[s,r]=d.useState(v.scaleX),[o,l]=d.useState(v.scaleY),[a,c]=d.useState(v.scaleZ);return(0,i.jsx)(S.Provider,{value:{renderMode:t,setRenderMode:e=>{j(e,g,"RenderMode"),n(e)},scaleX:s,setScaleX:r,scaleY:o,setScaleY:l,scaleZ:a,setScaleZ:c},children:e.children})},RenderMode:g,useContext:A},Symbol.toStringTag,{value:"Module"}));function w(e){const{scaleX:t,setScaleX:n,scaleY:d,setScaleY:h,scaleZ:u,setScaleZ:m}=A();return(0,i.jsx)(s.A,{sx:{backgroundColor:r.A[800],borderRadius:3,color:"white",padding:3,position:"absolute",right:0,spacing:3,top:0,margin:2,...e.sx},children:(0,i.jsxs)(o.A,{children:[(0,i.jsx)(l.A,{sx:{color:"white"},children:"Scale Axes"}),(0,i.jsx)(a.A,{gutterBottom:!0,children:" x-axis"}),(0,i.jsx)(c.Ay,{sx:{width:"250px"},min:1,max:10,size:"small",valueLabelDisplay:"auto",value:t,onChange:(e,t)=>n(Array.isArray(t)?t[0]:t)}),(0,i.jsx)(a.A,{gutterBottom:!0,children:" y-axis"}),(0,i.jsx)(c.Ay,{sx:{width:"250px"},min:1,max:5,size:"small",valueLabelDisplay:"auto",value:d,onChange:(e,t)=>h(Array.isArray(t)?t[0]:t)}),(0,i.jsx)(a.A,{gutterBottom:!0,children:" z-axis"}),(0,i.jsx)(c.Ay,{sx:{width:"250px"},min:1,max:5,size:"small",valueLabelDisplay:"auto",value:u,onChange:(e,t)=>m(Array.isArray(t)?t[0]:t)})]})})}const y={selection:new Set,setSelection:()=>{throw Error("setSelection called outside of context provider")},updateSelection:()=>{throw Error("updateSelection called outside of context provider")},clearSelection:()=>{throw Error("clearSelection called outside of context provider")}},C=d.createContext(y),M=()=>d.useContext(C),k=Object.freeze(Object.defineProperty({__proto__:null,Provider:e=>{const[t,n]=d.useState(y.selection);return(0,i.jsx)(C.Provider,{value:{selection:t,setSelection:n,updateSelection:e=>{const i=new Set(t);for(const t of e)i.has(t)?i.delete(t):i.add(t);n(i)},clearSelection:()=>{n(new Set)}},children:e.children})},useContext:M},Symbol.toStringTag,{value:"Module"}));function z(e){const t=function(e,t){if("Cube"===e)return{type:"Box",args:[1.5*t,1.5*t,1.5*t]};if("Pyramid"===e)return{type:"Cone",args:[t,2*t,4]};if("Sphere"===e)return{type:"Sphere",args:[t,64,32]};throw Error(`Invalid shape type ${e}`)}(e.shape,e.size);return(0,i.jsxs)("group",{position:e.position,onClick:e.onClick,children:[e.isSelected&&(0,i.jsxs)("mesh",{scale:[1.3,1.3,1.3],children:["Sphere"===t.type?(0,i.jsx)("sphereGeometry",{args:t.args}):"Box"===t.type?(0,i.jsx)("boxGeometry",{args:t.args}):"Cone"===t.type?(0,i.jsx)("coneGeometry",{args:t.args}):null,(0,i.jsx)("meshBasicMaterial",{color:"black",side:f.BackSide})]}),(0,i.jsxs)("mesh",{userData:{id:e.id},children:["Sphere"===t.type?(0,i.jsx)("sphereGeometry",{args:t.args}):"Box"===t.type?(0,i.jsx)("boxGeometry",{args:t.args}):"Cone"===t.type?(0,i.jsx)("coneGeometry",{args:t.args}):null,(0,i.jsx)("meshStandardMaterial",{color:e.color})]}),e.showID&&(0,i.jsx)(h.E,{children:(0,i.jsx)("div",{children:e.label})})]})}function P(e){const t=(0,u.zo)(e.url);return(0,i.jsxs)("mesh",{position:e.position,onClick:e.onClick,userData:{id:e.id},children:[(0,i.jsx)("planeGeometry",{args:e.size}),(0,i.jsx)("meshStandardMaterial",{map:t}),e.showID&&(0,i.jsx)(h.E,{children:(0,i.jsx)("div",{children:e.label})})]})}function I(e){var t,n,s,r,o,l,a,c;const{scaleX:h,scaleY:u,scaleZ:f}=A(),{selection:j,updateSelection:g,clearSelection:v}=M();return(0,i.jsx)(p.Hl,{camera:{position:(null==(t=e.camera)?void 0:t.position)??[0,0,100]},onPointerMissed:v,children:(0,i.jsxs)(d.Suspense,{fallback:null,children:[(0,i.jsx)("directionalLight",{position:(null==(n=e.light)?void 0:n.position)??[0,0,2]}),(0,i.jsx)("ambientLight",{}),(0,i.jsxs)(m.l,{box:!0,multiple:!0,onChangePointerUp:e=>{g(e.map((e=>e.userData.id??"")))},children:["image"===e.renderMode&&e.spectrograms.map((t=>(0,i.jsx)(P,{url:`${e.baseUrl??""}/${t.filename.replace(".wav","")}.png`,position:[t.dim1*h,t.dim2*u,t.dim3*f],id:t.filename,size:[t.width,t.height,64,64],label:t.label,showID:j.has(t.filename),onClick:()=>{var n;return null==(n=e.onSpecClick)?void 0:n.call(e,t)}},t.filename))),"dot"===e.renderMode&&e.spectrograms.map((t=>(0,i.jsx)(z,{position:[t.dim1*h,t.dim2*u,t.dim3*f],shape:t.shape,size:t.size,color:t.color,label:t.label,id:t.filename,showID:j.has(t.filename),onClick:()=>{var n;return null==(n=e.onSpecClick)?void 0:n.call(e,t)},isSelected:j.has(t.filename)},t.filename)))]}),(0,i.jsx)(x.N,{makeDefault:!0,minAzimuthAngle:null==(s=e.controls)?void 0:s.minAzimuthAngle,maxAzimuthAngle:null==(r=e.controls)?void 0:r.maxAzimuthAngle,minPolarAngle:null==(o=e.controls)?void 0:o.minPolarAngle,maxPolarAngle:null==(l=e.controls)?void 0:l.maxPolarAngle,maxDistance:null==(a=e.controls)?void 0:a.maxDistance,minDistance:null==(c=e.controls)?void 0:c.minDistance})]})})}const E={hasFocus:!1,focusedItem:null,setFocusedItem:()=>{throw Error("setFocusedItem called outside of context provider")},unsetFocus:()=>{throw Error("unsetFocus called outside of context provider")}},_=d.createContext(E),D=Object.freeze(Object.defineProperty({__proto__:null,Provider:e=>{const[t,n]=d.useState(E.focusedItem),s=null!=t;return(0,i.jsx)(_.Provider,{value:{hasFocus:s,focusedItem:t,setFocusedItem:n,unsetFocus:()=>{n(null)}},children:e.children})},useContext:()=>d.useContext(_)},Symbol.toStringTag,{value:"Module"}));var T=(e=>(e.detailed="detailed",e.selection="selection",e))(T||{});const F={clickMode:"detailed",setClickMode:()=>{throw new Error("setClickMode called outside of context provider")}},Y=d.createContext(F),B=Object.freeze(Object.defineProperty({__proto__:null,ClickMode:T,Provider:e=>{const[t,n]=d.useState(F.clickMode);return(0,i.jsx)(Y.Provider,{value:{clickMode:t,setClickMode:e=>{j(e,T,"ClickMode"),n(e)}},children:e.children})},useContext:()=>d.useContext(Y)},Symbol.toStringTag,{value:"Module"})),L={spectrograms:new Map,setSpectrograms:()=>{throw Error("setSpectrograms cannot be called out of context provider")},updateSpectrogram:()=>{throw Error("updateSpectrogram cannot be called out of context provider")}},O=d.createContext(L),N=Object.freeze(Object.defineProperty({__proto__:null,Provider:e=>{var t;const[n,s]=d.useState(new Map((null==(t=e.data)?void 0:t.map((e=>[e.filename,e])))??L.spectrograms));return(0,i.jsx)(O.Provider,{value:{spectrograms:n,setSpectrograms:s,updateSpectrogram:(e,t)=>{s((n=>{const i=new Map(n),s=i.get(e);if(null==s)throw new Error(`updateSpectrogram could not find id: ${e}`);return i.set(e,t(s)),i}))}},children:e.children})},useContext:()=>d.useContext(O)},Symbol.toStringTag,{value:"Module"}))},5769:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(6704),s=n(396),r=n(1085);function o(e){const{siteConfig:t}=(0,s.A)();return(0,r.jsx)(i.A,{children:()=>e.children((e=>t.baseUrl+e),t),fallback:(0,r.jsx)("div",{children:"Loading..."})})}},4979:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/shape-demo-selected-613d93146e7b2fa023bae3cc83000d76.png"},3842:e=>{e.exports=JSON.parse('[{"filename":"A_1019.wav","dim1":"8.806847","dim2":"7.8649745","dim3":"-3.6867962","flocation":"mediterranean"},{"filename":"A_239.wav","dim1":"2.244459","dim2":"-9.016553","dim3":"-3.0456424","flocation":"mediterranean"},{"filename":"A_748.wav","dim1":"8.224354","dim2":"8.291854","dim3":"-4.2379107","flocation":"mediterranean"},{"filename":"A_530.wav","dim1":"0.27919412","dim2":"13.747222","dim3":"-0.5143788","flocation":"pacific"},{"filename":"A_1385.wav","dim1":"6.5439515","dim2":"7.1407275","dim3":"-1.268021","flocation":"pacific"},{"filename":"A_100.wav","dim1":"6.350834","dim2":"-1.6831475","dim3":"-7.348477","flocation":"pacific"},{"filename":"A_385.wav","dim1":"-1.8902831","dim2":"-10.495517","dim3":"2.0196745","flocation":"pacific"},{"filename":"A_1156.wav","dim1":"-8.455516","dim2":"-9.71007","dim3":"-0.16416316","flocation":"atlantic-ocean"},{"filename":"A_877.wav","dim1":"9.780004","dim2":"1.8381903","dim3":"-2.1159284","flocation":"atlantic-ocean"},{"filename":"A_697.wav","dim1":"11.868487","dim2":"-0.5531068","dim3":"-3.9780738","flocation":"atlantic-ocean"}]')}}]);