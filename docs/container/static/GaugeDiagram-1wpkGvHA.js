import{r as m,R as b,j as f,u as A,Q as N,$ as T,y as I,ai as F,fY as H,bH as p,cT as K}from"./index-tEWTe_cM.js";import{f as Y}from"./useAutoPlay-8WOcIzK4.js";function j(t){return t*Math.PI/180}function w(t,e,n){return t>n?n:t<e?e:t}function C(t,e){return e/100*t}function V(t,e){return t+e/2}function $(t,e){var n=j(t);return{dx:e*Math.cos(n),dy:e*Math.sin(n)}}function D(t){return typeof t=="number"}function S(t,e){return typeof t=="function"?t(e):t}function G(t,e){var n=Object.assign({},e,t);for(var a in e)t[a]===void 0&&(n[a]=e[a]);return n}function X(t){for(var e=0,n=0;n<t.length;n++)e+=t[n].value;return e}function Q(t){for(var e=t.data,n=t.lengthAngle,a=t.totalValue,r=t.paddingAngle,i=t.startAngle,l=a||X(e),c=w(n,-360,360),s=Math.abs(c)===360?e.length:e.length-1,d=Math.abs(r)*Math.sign(n),u=d*s,o=c-u,g=0,x=[],v=0;v<e.length;v++){var h=e[v],y=l===0?0:h.value/l*100,M=C(o,y),k=g+i;g=g+M+d,x.push(Object.assign({percentage:y,startAngle:k,degrees:M},h))}return x}function O(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function q(t){var e=t.renderLabel,n=t.labelProps,a=e(n);if(typeof a=="string"||typeof a=="number"){n.dataEntry,n.dataIndex;var r=O(n,["dataEntry","dataIndex"]);return b.createElement("text",Object.assign({dominantBaseline:"central"},r),a)}return b.isValidElement(a)?a:null}function J(t){var e=1e14;return Math.round((t+Number.EPSILON)*e)/e}function U(t){var e=t.labelPosition,n=t.lineWidth,a=t.labelHorizontalShift,r=J(a);if(r===0)return"middle";if(e>100)return r>0?"start":"end";var i=100-n;return e<i?r>0?"end":"start":"middle"}function Z(t,e){return t.map(function(n,a){var r,i=(r=S(e.segmentsShift,a))!=null?r:0,l=C(e.radius,e.labelPosition)+i,c=$(V(n.startAngle,n.degrees),l),s=c.dx,d=c.dy,u={x:e.center[0],y:e.center[1],dx:s,dy:d,textAnchor:U({labelPosition:e.labelPosition,lineWidth:e.lineWidth,labelHorizontalShift:s}),dataEntry:n,dataIndex:a,style:S(e.labelStyle,a)};return u})}function _(t,e){var n=e.label;if(n)return Z(t,e).map(function(a,r){return b.createElement(q,{key:"label-"+(a.dataEntry.key||r),renderLabel:n,labelProps:a})})}var ee=function(e,n,a,r,i){var l=i-r;if(l===0)return[];var c=a*Math.cos(r)+e,s=a*Math.sin(r)+n,d=a*Math.cos(i)+e,u=a*Math.sin(i)+n,o=Math.abs(l)<=Math.PI?"0":"1",g=l<0?"0":"1";return[["M",c,s],["A",a,a,0,o,g,d,u]]},te=ee,ne=te;function ae(t,e,n,a,r){var i=w(a,-359.999,359.999);return ne(t,e,r,j(n),j(n+i)).map(function(l){return l.join(" ")}).join(" ")}function B(t){var e=t.cx,n=t.cy,a=t.lengthAngle,r=t.lineWidth,i=t.radius,l=t.shift,c=l===void 0?0:l,s=t.reveal,d=t.rounded,u=t.startAngle,o=t.title,g=O(t,["cx","cy","lengthAngle","lineWidth","radius","shift","reveal","rounded","startAngle","title"]),x=i-r/2,v=$(V(u,a),c),h=v.dx,y=v.dy,M=ae(e+h,n+y,u,a,x),k,W;if(D(s)){var L=j(x)*a;k=Math.abs(L),W=k-C(k,s)}return b.createElement("path",Object.assign({d:M,fill:"none",strokeWidth:r,strokeDasharray:k,strokeDashoffset:W,strokeLinecap:d?"round":void 0},g),o&&b.createElement("title",null,o))}function re(t,e,n){var a="stroke-dashoffset "+t+"ms "+e;return n&&n.transition&&(a=a+","+n.transition),{transition:a}}function ie(t){return t.animate&&!D(t.reveal)?100:t.reveal}function P(t,e){return t&&function(n){t(n,e)}}function le(t,e,n){var a=n??ie(e),r=e.radius,i=e.center,l=i[0],c=i[1],s=C(r,e.lineWidth),d=t.map(function(u,o){var g=S(e.segmentsStyle,o);return b.createElement(B,{cx:l,cy:c,key:u.key||o,lengthAngle:u.degrees,lineWidth:s,radius:r,rounded:e.rounded,reveal:a,shift:S(e.segmentsShift,o),startAngle:u.startAngle,title:u.title,style:Object.assign({},g,e.animate&&re(e.animationDuration,e.animationEasing,g)),stroke:u.color,tabIndex:e.segmentsTabIndex,onBlur:P(e.onBlur,o),onClick:P(e.onClick,o),onFocus:P(e.onFocus,o),onKeyDown:P(e.onKeyDown,o),onMouseOver:P(e.onMouseOver,o),onMouseOut:P(e.onMouseOut,o)})});return e.background&&d.unshift(b.createElement(B,{cx:l,cy:c,key:"bg",lengthAngle:e.lengthAngle,lineWidth:s,radius:r,rounded:e.rounded,startAngle:e.startAngle,stroke:e.background})),d}var oe={animationDuration:500,animationEasing:"ease-out",center:[50,50],data:[],labelPosition:50,lengthAngle:360,lineWidth:100,paddingAngle:0,radius:50,startAngle:0,viewBoxSize:[100,100]};function se(t){var e=G(t,oe),n=m.useState(e.animate?0:null),a=n[0],r=n[1];m.useEffect(function(){e.animate&&r(null)},[]);var i=Q(e);return b.createElement("svg",{viewBox:"0 0 "+e.viewBoxSize[0]+" "+e.viewBoxSize[1],width:"100%",height:"100%",className:e.className,style:e.style},le(i,e,a),_(i,e),e.children)}const ue=m.memo(({value:t,color:e,label:n,title:a})=>f.jsxs(ce,{children:[f.jsx(de,{children:a}),f.jsxs(ge,{children:[f.jsx(he,{$percents:t,$color:e}),f.jsx(fe,{children:n})]})]})),ce=A.div`
  display: flex;
  align-items: center;
`,de=A.div`
  ${N};
  flex: 1;
  margin-right: 16px;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ge=A.div`
  height: 32px;
  border-left: solid #ddd 1px;
  flex: 1.6;
  display: flex;
  align-items: center;
`,he=A.div`
  margin-right: 8px;
  width: ${t=>t.$percents.toFixed(2)}%;
  height: 16px;
  background-color: ${t=>t.$color};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: 1s width;
`,fe=A.div`
  ${T};
  color: ${t=>t.theme.systemColors.black};
`,R=(t,e)=>t>0?100*t/e:0,ve=({title:t,tooltip:e,series:n=[],className:a,absoluteValues:r,maxValue:i=0,defaultHidden:l=!0,testId:c})=>{const s=F(),d=m.useMemo(()=>[s.dataVisualizationColors.purple800,s.dataVisualizationColors.orange500],[s.dataVisualizationColors]),u=m.useMemo(()=>i||Math.max(0,...n.map(h=>h.value)),[i,n]),[o,g]=m.useState(l),[x,v]=H({threshold:.33});return m.useEffect(()=>{v&&g(!1)},[v]),f.jsxs(E,{className:a,"data-testid":c,children:[t&&f.jsxs(z,{children:[t,e&&f.jsx(p,{content:e})]}),f.jsx("div",{ref:x,children:n==null?void 0:n.map((h,y)=>f.jsx(ue,{...h,value:o?0:r?h.value:R(h.value,u),color:h.color||d[y%d.length]},y))})]})},E=A.div`
  padding: 32px;
  background-color: #fff;
`,z=A.div`
  ${I};
  display: flex;
  align-items: center;
  color: ${t=>t.theme.systemColors.black};
  margin-bottom: 16px;
`,Ae=Object.assign(ve,{Wrapper:E,Title:z});function me(t,e){const n=R(t,e);return n<50?"bad":n<75?"good":"excellent"}const be={bad:"#C91309",good:"#d1b517",excellent:"#33cc99"},ke=m.memo(({value:t,className:e,maxValue:n=10})=>{const a=m.useMemo(()=>{const l=me(t,n);return be[l]},[n,t]),r=K(t,1),i=Y({value:r,minimumFractionDigits:1});return f.jsx(se,{data:[{value:r,title:i,key:1,color:a}],reveal:r*10,lineWidth:16,animate:!0,rounded:!0,startAngle:165,lengthAngle:210,label:({dataEntry:l})=>l.title!=="NaN"?l.title:"-",labelPosition:12,viewBoxSize:[100,70],className:e,background:"#f1f3f6",labelStyle:{fontSize:32,fill:a,fontFamily:"inherit",fontWeight:700}})});export{ke as G,se as R,Ae as V,R as g};
//# sourceMappingURL=GaugeDiagram-1wpkGvHA.js.map
