(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{73:function(e,t,o){},91:function(e,t,o){"use strict";o.r(t);var n=o(4),c=o(1),r=o.n(c),i=o(32),s=o.n(i),a=(o(73),o(9)),j=function(e){var t=e.position,o=void 0===t?[0,0,0]:t,c=e.visible,r=void 0!==c&&c;return Object(n.jsxs)("mesh",{position:o,children:[Object(n.jsx)("pointLight",{castShadow:!0,"shadow-camera-far":75,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),Object(n.jsx)("meshStandardMaterial",{color:"yellow",visible:r}),Object(n.jsx)("sphereBufferGeometry",{args:[.2,100,100]})]})},l=o(10),h=o(24),b=o(33),u={top:0,touchY:0},d=o(0),p=o(13),O=o(23),f=o(59),x=function(e){var t=e.children,o=e.vAlign,r=void 0===o?"center":o,i=e.hAlign,s=void 0===i?"center":i,j=e.size,l=void 0===j?1:j,h=e.color,b=void 0===h?"#000000":h,u=Object(O.a)(e,["children","vAlign","hAlign","size","color"]),x=Object(c.useMemo)((function(){return{font:new d.Font(f),size:16,height:2,curveSegments:64,bevelThickness:3}}),[]),v=Object(a.i)((function(e){var t=new d.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x="center"===s?-t.x/2:"right"===s?0:-t.x,e.position.y="center"===r?-t.y/2:"top"===r?0:-t.y}),[t]);return Object(n.jsx)("group",Object(p.a)(Object(p.a)({},u),{},{scale:[.1*l,.1*l,.1],children:Object(n.jsxs)("mesh",{ref:v,castShadow:!0,receiveShadow:!0,children:[Object(n.jsx)("textGeometry",{args:[t,x]}),Object(n.jsx)("meshPhysicalMaterial",{color:b,clearcoat:1})]})}))},v=o(40);d.Cache.enabled=!0;var w=function(e){var t=e.path,o=e.scale,c=void 0===o?[1,1,1]:o,r=(e.rotation,e.position),i=void 0===r?[0,0,0]:r,s=Object(a.g)(v.a,"/portfolio"+t);for(var j in s.nodes){var l=s.nodes[j];l&&(l.castShadow=!0)}return Object(n.jsx)("primitive",{object:s.scene.clone(),scale:c,position:i})},g=function(e){var t=e.text,o=e.scrollTo,r=void 0===o?80:o,i=e.modelProps,s=void 0===i?{path:"",scale:[1,1,1]}:i,j=Object(c.useRef)(),l=Object(c.useRef)(),b=Math.random()*Math.PI;Object(a.f)((function(e){var t=e.clock;l.current.rotation.y-=.05;var o=j.current;switch(o.position.y+=.04*Math.sin(2*t.getElapsedTime()+b),o.hover){case 1:o.position.lerp({x:0,y:0,z:10},.02);case 2:o.position.lerp({x:0,y:0,z:0},.02),0===o.position.y&&(o.hover=0)}}));return Object(n.jsx)("group",{ref:j,children:Object(n.jsxs)(h.a,{centerAnchor:!0,align:"center",justify:"center",m:1,grow:1,children:[Object(n.jsxs)("group",{ref:l,children:[Object(n.jsxs)("mesh",{position:[0,-1,0],onPointerEnter:function(e){j.current.hover=1},onPointerLeave:function(e){j.current.hover=2,e.object.isPointerDown=!1},onPointerDown:function(e){e.object.isPointerDown=!0},onPointerUp:function(e){e.object.isPointerDown&&(u.top=r),e.object.isPointerDown=!1},children:[Object(n.jsx)("sphereBufferGeometry",{args:[6,100,100]}),Object(n.jsx)("meshPhysicalMaterial",{side:d.DoubleSide,transparent:!0,transmission:.9,clearcoat:1,reflectivity:1,roughness:0})]}),Object(n.jsx)(c.Suspense,{fallback:null,children:Object(n.jsx)(w,{path:s.path,scale:s.scale})})]}),Object(n.jsx)(x,{position:[0,-3,0],children:t})]})})},m=function(e){var t=e.width,o=void 0===t?100:t,c=e.height,r=void 0===c?50:c;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h.b,{justify:"center",align:"center",position:[-o/2,r/2,3],size:[o,r,0],children:Object(n.jsxs)(h.a,{width:"auto",height:"auto",dir:"row",wrap:"wrap",justify:"space-around",children:[Object(n.jsx)(g,{text:"About",modelProps:{path:"/lowpoly_earth/scene.gltf",scale:new Array(3).fill(.02)}}),Object(n.jsx)(g,{text:"Projects",modelProps:{path:"/lowpoly_earth/scene.gltf",scale:new Array(3).fill(.02)}}),Object(n.jsx)(g,{text:"Contact",modelProps:{path:"/lowpoly_earth/scene.gltf",scale:new Array(3).fill(.02)}}),Object(n.jsx)(g,{text:"Resume",modelProps:{path:"/lowpoly_earth/scene.gltf",scale:new Array(3).fill(.02)}})]})}),Object(n.jsxs)("mesh",{position:[0,0,.01],receiveShadow:!0,children:[Object(n.jsx)("planeBufferGeometry",{args:[999,999]}),Object(n.jsx)("meshPhysicalMaterial",{color:"white"})]})]})},y=o(60),P=function(e){Object(y.a)(e);var t=Object(c.useRef)(),o=new d.Vector3;return Object(a.f)((function(){t.current&&t.current.rotation.setFromVector3(t.current.rotation.toVector3().lerp(o.set(.1,6.28*u.top/80+4.4,0),.1))})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("mesh",{position:[0,0,-80],receiveShadow:!0,children:[Object(n.jsx)("planeBufferGeometry",{args:[999,999]}),Object(n.jsx)("meshPhysicalMaterial",{color:"aquamarine"})]}),Object(n.jsx)(c.Suspense,{fallback:null,children:Object(n.jsx)("group",{ref:t,position:[0,-4,-40],rotation:[.1,4.4,0],children:Object(n.jsx)(w,{path:"/lowpoly_earth/scene.gltf",scale:new Array(3).fill(.04)})})})]})},M=function(){var e=Object(c.useRef)(),t=new d.Vector3;Object(c.useEffect)((function(){window.scrollTo(0,1),e.current.position.lerp(t.set(0,0,20),1)})),Object(a.f)((function(o){window.state=o,e.current.position.lerp(t.set(0,0,u.top),.1)}));var o=Object(a.h)().size,r=Object(b.c)("cover",o.width,o.height),i=Object(l.a)(r,2),s=i[0],j=i[1],h=Math.min(s-10,80);return Object(n.jsxs)("group",{ref:e,children:[Object(n.jsx)(m,{width:h,height:j}),Object(n.jsx)(P,{})]})},S=function(e){var t=Object(c.useRef)(),o=Object(a.h)().size,r=Object(b.c)("cover",o.width,o.height),i=Object(l.a)(r,1)[0],s=Math.min(i-10,80),p=new d.Vector3;Object(a.f)((function(){0===u.top?t.current.position.lerp(p.set(0,0,-5),.1):t.current.position.lerp(p.set(0,0,0),.1)}));return Object(n.jsxs)(h.b,{size:[s],position:[-s/2,33,-.1],dir:"row",justify:"space-between",align:"center",children:[Object(n.jsxs)(h.a,{align:"center",height:"auto",children:[Object(n.jsx)(h.a,{centerAnchor:!0,children:Object(n.jsx)(x,{children:"Hayden Linder"})}),Object(n.jsx)(j,{position:[9.5,-4,5]}),Object(n.jsx)(h.a,{centerAnchor:!0,children:Object(n.jsx)(x,{size:.7,children:"Web Developer"})})]}),Object(n.jsx)(h.a,{centerAnchor:!0,children:Object(n.jsxs)("mesh",{ref:t,castShadow:!0,receiveShadow:!0,onPointerEnter:function(e){e.object.scale.lerp(p.set(1.1,1.1,1.1),1)},onPointerLeave:function(e){e.object.scale.lerp(p.set(1,1,1),1),e.object.isPointerDown=!1},onPointerDown:function(e){e.object.isPointerDown=!0},onPointerUp:function(e){e.object.isPointerDown&&(u.top=0),e.object.isPointerDown=!1},children:[Object(n.jsx)("boxBufferGeometry",{args:[10,4,.5]}),Object(n.jsx)("meshPhysicalMaterial",{color:"blue"}),Object(n.jsx)(x,{color:"white",position:[0,0,.5],children:"Menu"})]})})]})},A=function(e){var t=e.pages,o=void 0===t?1:t,c=e.children,r=function(e){var t=e.nativeEvent.deltaY/16;u.top=t<0?Math.max(u.top+t,0):Math.min(u.top+t,40*o)};return Object(n.jsx)("div",{style:{height:"101vh",width:"100vw"},onWheel:r,onTouchStart:function(e){u.touchY=e.touches.item(0).pageY},onTouchMove:function(e){var t=e.touches.item(0).pageY,o={nativeEvent:{deltaY:16*(u.touchY-t)}};r(o),u.touchY=t},children:c})};Object(b.b)();var D=function(){return Object(n.jsx)(A,{pages:4,children:Object(n.jsxs)(a.a,{concurrent:!0,camera:{position:[0,0,50]},colorManagement:!0,shadowMap:!0,children:[Object(n.jsx)("axesHelper",{args:[5]}),Object(n.jsx)("ambientLight",{intensity:.3}),Object(n.jsx)(j,{position:[0,10,50]}),Object(n.jsxs)(c.Suspense,{fallback:Object(n.jsx)(b.a,{center:!0,children:Object(n.jsx)("h1",{style:{color:"black",fontSize:100},children:"Loading..."})}),children:[Object(n.jsx)(S,{}),Object(n.jsx)(M,{})]})]})})},z=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,92)).then((function(t){var o=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;o(e),n(e),c(e),r(e),i(e)}))};s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),z()}},[[91,1,2]]]);
//# sourceMappingURL=main.fa6b6c6a.chunk.js.map