(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{71:function(e,t,c){},89:function(e,t,c){"use strict";c.r(t);var n=c(9),r=c(1),i=c.n(r),o=c(32),s=c.n(o),j=(c(71),c(8)),a=c(13),h=function(e){return Object(n.jsxs)("mesh",Object(a.a)(Object(a.a)({},e),{},{children:[Object(n.jsx)("pointLight",{castShadow:!0}),Object(n.jsx)("meshStandardMaterial",{color:"yellow"}),Object(n.jsx)("sphereBufferGeometry",{args:[.2,100,100]})]}))},l=c(10),b=c(29),u=c(45),d={top:0,touchY:0},O=c(0),p=c(23),x=c(58),f=function(e){var t=e.children,c=e.vAlign,i=void 0===c?"center":c,o=e.hAlign,s=void 0===o?"center":o,h=e.size,l=void 0===h?1:h,b=e.color,u=void 0===b?"#000000":b,d=Object(p.a)(e,["children","vAlign","hAlign","size","color"]),f=new O.Font(x),g=Object(r.useMemo)((function(){return{font:f,size:16,height:1,curveSegments:32,bevelThickness:3}}),[f]),v=Object(j.i)((function(e){var t=new O.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x="center"===s?-t.x/2:"right"===s?0:-t.x,e.position.y="center"===i?-t.y/2:"top"===i?0:-t.y}),[t]);return Object(n.jsx)("group",Object(a.a)(Object(a.a)({},d),{},{scale:[.1*l,.1*l,.1],children:Object(n.jsxs)("mesh",{ref:v,castShadow:!0,receiveShadow:!0,children:[Object(n.jsx)("textGeometry",{args:[t,g]}),Object(n.jsx)("meshPhysicalMaterial",{color:u,clearcoat:1})]})}))},g=function(e){var t=Object(r.useRef)(),c=Object(r.useRef)();Object(j.f)((function(e){var n=e.clock;switch(c.current.rotation.y-=.05,t.current.position.y+=.05*Math.sin(2*n.getElapsedTime()),t.current.hover){case 1:t.current.position.lerp({x:0,y:-15,z:20},.02);case 2:t.current.position.lerp({x:0,y:0,z:0},.02),0===t.current.position.y&&(t.current.hover=0)}}));return Object(n.jsx)("group",{ref:t,children:Object(n.jsxs)(b.a,{centerAnchor:!0,align:"center",p:3,children:[Object(n.jsxs)("group",{ref:c,children:[Object(n.jsxs)("mesh",{position:[0,-1,0],onPointerEnter:function(e){t.current.hover=1},onPointerLeave:function(e){t.current.hover=2},children:[Object(n.jsx)("sphereBufferGeometry",{args:[6]}),Object(n.jsx)("meshPhysicalMaterial",{side:O.DoubleSide,transparent:!0,transmission:.9,clearcoat:1,reflectivity:1,roughness:0})]}),Object(n.jsx)(f,{color:"red",size:1.5,position:[0,0,2],children:"?"}),Object(n.jsx)(f,{color:"red",size:1.5,position:[0,0,-2],rotation:[0,3.14,0],children:"?"}),Object(n.jsx)(f,{color:"red",size:1.5,position:[0,0,2],children:"?"}),Object(n.jsx)(f,{color:"red",size:1.5,position:[2,0,0],rotation:[0,1.57,0],children:"?"}),Object(n.jsx)(f,{color:"red",size:1.5,position:[-2,0],rotation:[0,-1.57,0],children:"?"}),Object(n.jsxs)("mesh",{castShadow:!0,receiveShadow:!0,children:[Object(n.jsx)("sphereBufferGeometry",{args:[2]}),Object(n.jsx)("meshPhysicalMaterial",{})]})]}),Object(n.jsx)(f,{position:[0,-3,0],children:"About"})]})})},v=function(){var e=Object(r.useRef)(),t=new O.Vector3;Object(j.f)((function(c){window.state=c,e.current.position.lerp(t.set(0,0,d.top),.1)}));var c=Object(j.h)().size,i=Object(u.a)("cover",c.width,c.height),o=Object(l.a)(i,2),s=o[0],a=o[1];return Object(n.jsxs)("group",{ref:e,children:[Object(n.jsx)(b.b,{align:"center",position:[-(s-2)/2,a/2-5,2],size:[s-2,0,1],children:Object(n.jsx)(g,{})}),Object(n.jsxs)("mesh",{position:[0,0,0],receiveShadow:!0,children:[Object(n.jsx)("planeBufferGeometry",{args:[s+5,a+5]}),Object(n.jsx)("meshPhysicalMaterial",{color:"white"})]}),Object(n.jsxs)("mesh",{position:[0,0,-80],receiveShadow:!0,children:[Object(n.jsx)("planeBufferGeometry",{args:[s+50,a+50]}),Object(n.jsx)("meshPhysicalMaterial",{color:"aquamarine"})]})]})},m=function(e){var t=Object(j.h)().size,c=Object(u.a)("cover",t.width,t.height),r=Object(l.a)(c,1)[0],i=Math.min(r-10,100);return Object(n.jsxs)(b.b,{size:[i],position:[-i/2,35,0],dir:"row",justify:"space-between",align:"center",children:[Object(n.jsxs)(b.a,{centerAnchor:!0,children:[Object(n.jsx)(f,{children:"Hayden Linder"}),Object(n.jsx)(f,{position:[0,-2,0],size:.7,children:"Web Developer"})]}),Object(n.jsx)(b.a,{centerAnchor:!0,children:Object(n.jsx)(f,{children:"Menu"})})]})};var y=function(){return Object(n.jsx)("div",{style:{height:"100vh",width:"100vw"},onWheel:function(e){var t=e.nativeEvent.deltaY/16;d.top=t<0?Math.max(d.top+t,0):Math.min(d.top+t,80)},onTouchStart:function(e){d.touchY=e.touches.item(0).pageY},onTouchMove:function(e){var t=e.touches.item(0).pageY;d.touchY;d.touchY=t},children:Object(n.jsxs)(j.a,{concurrent:!0,camera:{position:[0,0,50]},colorManagement:!0,shadowMap:!0,children:[Object(n.jsx)("axesHelper",{args:[5]}),Object(n.jsx)("ambientLight",{intensity:.3}),Object(n.jsx)(h,{position:[0,30,40]}),Object(n.jsxs)(r.Suspense,{fallback:null,children:[Object(n.jsx)(m,{}),Object(n.jsx)(v,{})]})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,90)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),i(e),o(e)}))};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(y,{})}),document.getElementById("root")),w()}},[[89,1,2]]]);
//# sourceMappingURL=main.3cbad4a3.chunk.js.map