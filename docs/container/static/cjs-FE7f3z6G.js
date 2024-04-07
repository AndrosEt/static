import{jw as wt,bs as ot,bt as at,bx as st,bu as Pt}from"./index-VVIvRZBh.js";var F={exports:{}},it={};function lt(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=lt(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function nt(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=lt(t))&&(r&&(r+=" "),r+=e);return r}const Tt=Object.freeze(Object.defineProperty({__proto__:null,clsx:nt,default:nt},Symbol.toStringTag,{value:"Module"})),Mt=wt(Tt);var p={},T={};Object.defineProperty(T,"__esModule",{value:!0});T.dontSetMe=Et;T.findInArray=Ct;T.int=Nt;T.isFunction=_t;T.isNum=xt;function Ct(t,e){for(let n=0,r=t.length;n<r;n++)if(e.apply(e,[t[n],n,t]))return t[n]}function _t(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Function]"}function xt(t){return typeof t=="number"&&!isNaN(t)}function Nt(t){return parseInt(t,10)}function Et(t,e,n){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(n," - do not set this, set it on the child."))}var N={};Object.defineProperty(N,"__esModule",{value:!0});N.browserPrefixToKey=ct;N.browserPrefixToStyle=Ot;N.default=void 0;N.getPrefix=ut;const H=["Moz","Webkit","O","ms"];function ut(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const n=(t=window.document)===null||t===void 0||(t=t.documentElement)===null||t===void 0?void 0:t.style;if(!n||e in n)return"";for(let r=0;r<H.length;r++)if(ct(e,H[r])in n)return H[r];return""}function ct(t,e){return e?"".concat(e).concat(Xt(t)):t}function Ot(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t}function Xt(t){let e="",n=!0;for(let r=0;r<t.length;r++)n?(e+=t[r].toUpperCase(),n=!1):t[r]==="-"?n=!0:e+=t[r];return e}N.default=ut();Object.defineProperty(p,"__esModule",{value:!0});p.addClassName=ht;p.addEvent=Rt;p.addUserSelectStyles=Gt;p.createCSSTransform=It;p.createSVGTransform=Ht;p.getTouch=Vt;p.getTouchIdentifier=qt;p.getTranslation=G;p.innerHeight=$t;p.innerWidth=Bt;p.matchesSelector=dt;p.matchesSelectorAndParentsTo=Wt;p.offsetXYFromParent=Lt;p.outerHeight=At;p.outerWidth=Ft;p.removeClassName=pt;p.removeEvent=Ut;p.removeUserSelectStyles=kt;var b=T,rt=Yt(N);function ft(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(ft=function(r){return r?n:e})(t)}function Yt(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=ft(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(i!=="default"&&Object.prototype.hasOwnProperty.call(t,i)){var c=o?Object.getOwnPropertyDescriptor(t,i):null;c&&(c.get||c.set)?Object.defineProperty(r,i,c):r[i]=t[i]}return r.default=t,n&&n.set(t,r),r}let A="";function dt(t,e){return A||(A=(0,b.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,b.isFunction)(t[n])})),(0,b.isFunction)(t[A])?t[A](e):!1}function Wt(t,e,n){let r=t;do{if(dt(r,e))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function Rt(t,e,n,r){if(!t)return;const o={capture:!0,...r};t.addEventListener?t.addEventListener(e,n,o):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n}function Ut(t,e,n,r){if(!t)return;const o={capture:!0,...r};t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null}function At(t){let e=t.clientHeight;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,b.int)(n.borderTopWidth),e+=(0,b.int)(n.borderBottomWidth),e}function Ft(t){let e=t.clientWidth;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,b.int)(n.borderLeftWidth),e+=(0,b.int)(n.borderRightWidth),e}function $t(t){let e=t.clientHeight;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,b.int)(n.paddingTop),e-=(0,b.int)(n.paddingBottom),e}function Bt(t){let e=t.clientWidth;const n=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,b.int)(n.paddingLeft),e-=(0,b.int)(n.paddingRight),e}function Lt(t,e,n){const o=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect(),i=(t.clientX+e.scrollLeft-o.left)/n,c=(t.clientY+e.scrollTop-o.top)/n;return{x:i,y:c}}function It(t,e){const n=G(t,e,"px");return{[(0,rt.browserPrefixToKey)("transform",rt.default)]:n}}function Ht(t,e){return G(t,e,"")}function G(t,e,n){let{x:r,y:o}=t,i="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(e){const c="".concat(typeof e.x=="string"?e.x:e.x+n),d="".concat(typeof e.y=="string"?e.y:e.y+n);i="translate(".concat(c,", ").concat(d,")")+i}return i}function Vt(t,e){return t.targetTouches&&(0,b.findInArray)(t.targetTouches,n=>e===n.identifier)||t.changedTouches&&(0,b.findInArray)(t.changedTouches,n=>e===n.identifier)}function qt(t){if(t.targetTouches&&t.targetTouches[0])return t.targetTouches[0].identifier;if(t.changedTouches&&t.changedTouches[0])return t.changedTouches[0].identifier}function Gt(t){if(!t)return;let e=t.getElementById("react-draggable-style-el");e||(e=t.createElement("style"),e.type="text/css",e.id="react-draggable-style-el",e.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,e.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,t.getElementsByTagName("head")[0].appendChild(e)),t.body&&ht(t.body,"react-draggable-transparent-selection")}function kt(t){if(t)try{if(t.body&&pt(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{const e=(t.defaultView||window).getSelection();e&&e.type!=="Caret"&&e.removeAllRanges()}}catch{}}function ht(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function pt(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}var M={};Object.defineProperty(M,"__esModule",{value:!0});M.canDragX=jt;M.canDragY=Jt;M.createCoreData=Zt;M.createDraggableData=te;M.getBoundPosition=zt;M.getControlPosition=Qt;M.snapToGrid=Kt;var S=T,X=p;function zt(t,e,n){if(!t.props.bounds)return[e,n];let{bounds:r}=t.props;r=typeof r=="string"?r:ee(r);const o=k(t);if(typeof r=="string"){const{ownerDocument:i}=o,c=i.defaultView;let d;if(r==="parent"?d=o.parentNode:d=i.querySelector(r),!(d instanceof c.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');const h=d,v=c.getComputedStyle(o),P=c.getComputedStyle(h);r={left:-o.offsetLeft+(0,S.int)(P.paddingLeft)+(0,S.int)(v.marginLeft),top:-o.offsetTop+(0,S.int)(P.paddingTop)+(0,S.int)(v.marginTop),right:(0,X.innerWidth)(h)-(0,X.outerWidth)(o)-o.offsetLeft+(0,S.int)(P.paddingRight)-(0,S.int)(v.marginRight),bottom:(0,X.innerHeight)(h)-(0,X.outerHeight)(o)-o.offsetTop+(0,S.int)(P.paddingBottom)-(0,S.int)(v.marginBottom)}}return(0,S.isNum)(r.right)&&(e=Math.min(e,r.right)),(0,S.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,S.isNum)(r.left)&&(e=Math.max(e,r.left)),(0,S.isNum)(r.top)&&(n=Math.max(n,r.top)),[e,n]}function Kt(t,e,n){const r=Math.round(e/t[0])*t[0],o=Math.round(n/t[1])*t[1];return[r,o]}function jt(t){return t.props.axis==="both"||t.props.axis==="x"}function Jt(t){return t.props.axis==="both"||t.props.axis==="y"}function Qt(t,e,n){const r=typeof e=="number"?(0,X.getTouch)(t,e):null;if(typeof e=="number"&&!r)return null;const o=k(n),i=n.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,X.offsetXYFromParent)(r||t,i,n.props.scale)}function Zt(t,e,n){const r=!(0,S.isNum)(t.lastX),o=k(t);return r?{node:o,deltaX:0,deltaY:0,lastX:e,lastY:n,x:e,y:n}:{node:o,deltaX:e-t.lastX,deltaY:n-t.lastY,lastX:t.lastX,lastY:t.lastY,x:e,y:n}}function te(t,e){const n=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/n,y:t.state.y+e.deltaY/n,deltaX:e.deltaX/n,deltaY:e.deltaY/n,lastX:t.state.x,lastY:t.state.y}}function ee(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}function k(t){const e=t.findDOMNode();if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}var $={},B={};Object.defineProperty(B,"__esModule",{value:!0});B.default=ne;function ne(){}Object.defineProperty($,"__esModule",{value:!0});$.default=void 0;var V=oe(ot()),D=z(at),re=z(st),m=p,_=M,q=T,W=z(B);function z(t){return t&&t.__esModule?t:{default:t}}function gt(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(gt=function(r){return r?n:e})(t)}function oe(t,e){if(!e&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=gt(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(i!=="default"&&Object.prototype.hasOwnProperty.call(t,i)){var c=o?Object.getOwnPropertyDescriptor(t,i):null;c&&(c.get||c.set)?Object.defineProperty(r,i,c):r[i]=t[i]}return r.default=t,n&&n.set(t,r),r}function y(t,e,n){return e=ae(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ae(t){var e=se(t,"string");return typeof e=="symbol"?e:String(e)}function se(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}const w={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let x=w.mouse,L=class extends V.Component{constructor(){super(...arguments),y(this,"dragging",!1),y(this,"lastX",NaN),y(this,"lastY",NaN),y(this,"touchIdentifier",null),y(this,"mounted",!1),y(this,"handleDragStart",e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&typeof e.button=="number"&&e.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=n;if(this.props.disabled||!(e.target instanceof r.defaultView.Node)||this.props.handle&&!(0,m.matchesSelectorAndParentsTo)(e.target,this.props.handle,n)||this.props.cancel&&(0,m.matchesSelectorAndParentsTo)(e.target,this.props.cancel,n))return;e.type==="touchstart"&&e.preventDefault();const o=(0,m.getTouchIdentifier)(e);this.touchIdentifier=o;const i=(0,_.getControlPosition)(e,o,this);if(i==null)return;const{x:c,y:d}=i,h=(0,_.createCoreData)(this,c,d);(0,W.default)("DraggableCore: handleDragStart: %j",h),(0,W.default)("calling",this.props.onStart),!(this.props.onStart(e,h)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,m.addUserSelectStyles)(r),this.dragging=!0,this.lastX=c,this.lastY=d,(0,m.addEvent)(r,x.move,this.handleDrag),(0,m.addEvent)(r,x.stop,this.handleDragStop))}),y(this,"handleDrag",e=>{const n=(0,_.getControlPosition)(e,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let d=r-this.lastX,h=o-this.lastY;if([d,h]=(0,_.snapToGrid)(this.props.grid,d,h),!d&&!h)return;r=this.lastX+d,o=this.lastY+h}const i=(0,_.createCoreData)(this,r,o);if((0,W.default)("DraggableCore: handleDrag: %j",i),this.props.onDrag(e,i)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const h=document.createEvent("MouseEvents");h.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(h)}return}this.lastX=r,this.lastY=o}),y(this,"handleDragStop",e=>{if(!this.dragging)return;const n=(0,_.getControlPosition)(e,this.touchIdentifier,this);if(n==null)return;let{x:r,y:o}=n;if(Array.isArray(this.props.grid)){let h=r-this.lastX||0,v=o-this.lastY||0;[h,v]=(0,_.snapToGrid)(this.props.grid,h,v),r=this.lastX+h,o=this.lastY+v}const i=(0,_.createCoreData)(this,r,o);if(this.props.onStop(e,i)===!1||this.mounted===!1)return!1;const d=this.findDOMNode();d&&this.props.enableUserSelectHack&&(0,m.removeUserSelectStyles)(d.ownerDocument),(0,W.default)("DraggableCore: handleDragStop: %j",i),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,d&&((0,W.default)("DraggableCore: Removing handlers"),(0,m.removeEvent)(d.ownerDocument,x.move,this.handleDrag),(0,m.removeEvent)(d.ownerDocument,x.stop,this.handleDragStop))}),y(this,"onMouseDown",e=>(x=w.mouse,this.handleDragStart(e))),y(this,"onMouseUp",e=>(x=w.mouse,this.handleDragStop(e))),y(this,"onTouchStart",e=>(x=w.touch,this.handleDragStart(e))),y(this,"onTouchEnd",e=>(x=w.touch,this.handleDragStop(e)))}componentDidMount(){this.mounted=!0;const e=this.findDOMNode();e&&(0,m.addEvent)(e,w.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const e=this.findDOMNode();if(e){const{ownerDocument:n}=e;(0,m.removeEvent)(n,w.mouse.move,this.handleDrag),(0,m.removeEvent)(n,w.touch.move,this.handleDrag),(0,m.removeEvent)(n,w.mouse.stop,this.handleDragStop),(0,m.removeEvent)(n,w.touch.stop,this.handleDragStop),(0,m.removeEvent)(e,w.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,m.removeUserSelectStyles)(n)}}findDOMNode(){var e,n;return(e=this.props)!==null&&e!==void 0&&e.nodeRef?(n=this.props)===null||n===void 0||(n=n.nodeRef)===null||n===void 0?void 0:n.current:re.default.findDOMNode(this)}render(){return V.cloneElement(V.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};$.default=L;y(L,"displayName","DraggableCore");y(L,"propTypes",{allowAnyClick:D.default.bool,children:D.default.node.isRequired,disabled:D.default.bool,enableUserSelectHack:D.default.bool,offsetParent:function(t,e){if(t[e]&&t[e].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:D.default.arrayOf(D.default.number),handle:D.default.string,cancel:D.default.string,nodeRef:D.default.object,onStart:D.default.func,onDrag:D.default.func,onStop:D.default.func,onMouseDown:D.default.func,scale:D.default.number,className:q.dontSetMe,style:q.dontSetMe,transform:q.dontSetMe});y(L,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return h.default}}),t.default=void 0;var e=yt(ot()),n=P(at),r=P(st),o=P(Mt),i=p,c=M,d=T,h=P($),v=P(B);function P(a){return a&&a.__esModule?a:{default:a}}function K(a){if(typeof WeakMap!="function")return null;var s=new WeakMap,u=new WeakMap;return(K=function(l){return l?u:s})(a)}function yt(a,s){if(!s&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var u=K(s);if(u&&u.has(a))return u.get(a);var l={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if(f!=="default"&&Object.prototype.hasOwnProperty.call(a,f)){var C=g?Object.getOwnPropertyDescriptor(a,f):null;C&&(C.get||C.set)?Object.defineProperty(l,f,C):l[f]=a[f]}return l.default=a,u&&u.set(a,l),l}function I(){return I=Object.assign?Object.assign.bind():function(a){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&(a[l]=u[l])}return a},I.apply(this,arguments)}function E(a,s,u){return s=vt(s),s in a?Object.defineProperty(a,s,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[s]=u,a}function vt(a){var s=Dt(a,"string");return typeof s=="symbol"?s:String(s)}function Dt(a,s){if(typeof a!="object"||a===null)return a;var u=a[Symbol.toPrimitive];if(u!==void 0){var l=u.call(a,s||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(a)}class R extends e.Component{static getDerivedStateFromProps(s,u){let{position:l}=s,{prevPropsPosition:g}=u;return l&&(!g||l.x!==g.x||l.y!==g.y)?((0,v.default)("Draggable: getDerivedStateFromProps %j",{position:l,prevPropsPosition:g}),{x:l.x,y:l.y,prevPropsPosition:{...l}}):null}constructor(s){super(s),E(this,"onDragStart",(u,l)=>{if((0,v.default)("Draggable: onDragStart: %j",l),this.props.onStart(u,(0,c.createDraggableData)(this,l))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),E(this,"onDrag",(u,l)=>{if(!this.state.dragging)return!1;(0,v.default)("Draggable: onDrag: %j",l);const g=(0,c.createDraggableData)(this,l),f={x:g.x,y:g.y,slackX:0,slackY:0};if(this.props.bounds){const{x:Y,y:O}=f;f.x+=this.state.slackX,f.y+=this.state.slackY;const[U,j]=(0,c.getBoundPosition)(this,f.x,f.y);f.x=U,f.y=j,f.slackX=this.state.slackX+(Y-f.x),f.slackY=this.state.slackY+(O-f.y),g.x=f.x,g.y=f.y,g.deltaX=f.x-this.state.x,g.deltaY=f.y-this.state.y}if(this.props.onDrag(u,g)===!1)return!1;this.setState(f)}),E(this,"onDragStop",(u,l)=>{if(!this.state.dragging||this.props.onStop(u,(0,c.createDraggableData)(this,l))===!1)return!1;(0,v.default)("Draggable: onDragStop: %j",l);const f={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:Y,y:O}=this.props.position;f.x=Y,f.y=O}this.setState(f)}),this.state={dragging:!1,dragged:!1,x:s.position?s.position.x:s.defaultPosition.x,y:s.position?s.position.y:s.defaultPosition.y,prevPropsPosition:{...s.position},slackX:0,slackY:0,isElementSVG:!1},s.position&&!(s.onDrag||s.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var s,u;return(s=(u=this.props)===null||u===void 0||(u=u.nodeRef)===null||u===void 0?void 0:u.current)!==null&&s!==void 0?s:r.default.findDOMNode(this)}render(){const{axis:s,bounds:u,children:l,defaultPosition:g,defaultClassName:f,defaultClassNameDragging:C,defaultClassNameDragged:Y,position:O,positionOffset:U,scale:j,...St}=this.props;let J={},Q=null;const Z=!!!O||this.state.dragging,tt=O||g,et={x:(0,c.canDragX)(this)&&Z?this.state.x:tt.x,y:(0,c.canDragY)(this)&&Z?this.state.y:tt.y};this.state.isElementSVG?Q=(0,i.createSVGTransform)(et,U):J=(0,i.createCSSTransform)(et,U);const bt=(0,o.default)(l.props.className||"",f,{[C]:this.state.dragging,[Y]:this.state.dragged});return e.createElement(h.default,I({},St,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),e.cloneElement(e.Children.only(l),{className:bt,style:{...l.props.style,...J},transform:Q}))}}t.default=R,E(R,"displayName","Draggable"),E(R,"propTypes",{...h.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:d.dontSetMe,style:d.dontSetMe,transform:d.dontSetMe}),E(R,"defaultProps",{...h.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(it);const{default:mt,DraggableCore:ie}=it;F.exports=mt;F.exports.default=mt;F.exports.DraggableCore=ie;var le=F.exports;const de=Pt(le);export{de as D,le as c};
//# sourceMappingURL=cjs-FE7f3z6G.js.map
