import{e1 as Go,hB as so,hx as Qo,fM as Qs,fH as Jo,hC as Js,hu as lo,dP as ar,fK as Ko,eI as Zo,hD as Ks,hE as Zs,ht as el,hF as tl,hy as nl,hG as ei,dI as rl,fX as ol,fY as sr,hH as il,eK as al,hI as ti,dZ as lr,fW as sl,f_ as ll,c1 as cr,hw as ni,hJ as dr,hK as sn,hL as In,hM as ri,eM as oi,eN as ii,r as h,j as s,cz as zt,bV as ai,a as T,u as p,N as J,Q as Ht,eC as cl,cx as si,K as Me,c8 as li,aY as ci,x as G,b7 as Wt,aW as ur,dQ as jn,hN as dl,hO as ul,hP as hl,hQ as fl,hR as gl,hS as pl,hT as ml,hU as vl,hV as bl,hW as yl,hX as xl,hY as wl,a2 as Cl,R as Q,y as St,fU as $l,a1 as Ee,aU as Sl,bb as Tl,H as kl,b4 as di,be as Jt,aR as Dl,I as ut,hZ as Ml,aP as je,E as hr,gg as Pl,bs as El,br as Ol,bu as ui,cB as Il,cC as jl,$ as Ll,an as qn,b0 as hi,h_ as _l,h$ as Al,d as B,b as ue,m as A,av as ln,h as he,ap as Nl,aV as fr,i0 as Rl,P as zl,f as Hl,aQ as Wl,S as Fl,bh as Tt,i1 as Bl,i2 as Vl,c6 as Ul,bk as ce,bG as co,Y as gr,b8 as ql,a_ as Yl,dv as Xl,au as Gl,f3 as Ql,da as fi,bC as Jl,aJ as Kl,a6 as gi,A as pi,aE as Zl,G as bn,by as mi,ak as vi,w as ht,U as bi,a7 as pr,i3 as uo,aj as yi,cF as ec,V as tc,ci as xi,W as nc}from"./index-VVIvRZBh.js";import{L as rc,f as wi,w as oc,g as ic,j as Ze,x as ac,b as sc,a as lc,y as cn,z as cc,d as dc,A as uc,e as hc,u as fc,k as gc,m as pc,l as ho}from"./useAutoPlay-JZxKBgmm.js";var fo=1/0,mc=17976931348623157e292;function go(e){if(!e)return e===0?e:0;if(e=Go(e),e===fo||e===-fo){var t=e<0?-1:1;return t*mc}return e===e?e:0}function mr(e){return e}function vc(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function bc(){}var yc=800,xc=16,wc=Date.now;function Cc(e){var t=0,n=0;return function(){var r=wc(),o=xc-(r-n);if(n=r,o>0){if(++t>=yc)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function $c(e){return function(){return e}}var Sc=so?function(e,t){return so(e,"toString",{configurable:!0,enumerable:!1,value:$c(t),writable:!0})}:mr;const Tc=Sc;var kc=Cc(Tc);function Dc(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}function Mc(e){return e!==e}function Pc(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}function Ec(e,t,n){return t===t?Pc(e,t,n):Dc(e,Mc,n)}function vr(e,t){var n=e==null?0:e.length;return!!n&&Ec(e,t,0)>-1}var po=Math.max;function Oc(e,t,n){return t=po(t===void 0?e.length-1:t,0),function(){for(var r=arguments,o=-1,i=po(r.length-t,0),a=Array(i);++o<i;)a[o]=r[t+o];o=-1;for(var l=Array(t+1);++o<t;)l[o]=r[o];return l[t]=n(a),vc(e,this,l)}}function br(e,t){return kc(Oc(e,t,mr),e+"")}function Ic(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var jc=Object.prototype,Lc=jc.hasOwnProperty;function _c(e){if(!Qo(e))return Ic(e);var t=Qs(e),n=[];for(var r in e)r=="constructor"&&(t||!Lc.call(e,r))||n.push(r);return n}function Ac(e){return Jo(e)?Js(e,!0):_c(e)}var mo=lo?lo.isConcatSpreadable:void 0;function Nc(e){return ar(e)||Ko(e)||!!(mo&&e&&e[mo])}function yr(e,t,n,r,o){var i=-1,a=e.length;for(n||(n=Nc),o||(o=[]);++i<a;){var l=e[i];t>0&&n(l)?t>1?yr(l,t-1,n,r,o):Zo(o,l):r||(o[o.length]=l)}return o}var Rc=Ks(Object.getPrototypeOf,Object);const zc=Rc;var Hc=Object.getOwnPropertySymbols,Wc=Hc?function(e){for(var t=[];e;)Zo(t,el(e)),e=zc(e);return t}:Zs;function pw(e){return tl(e,Ac,Wc)}var Fc=1,Bc=2;function Vc(e,t,n,r){var o=n.length,i=o,a=!r;if(e==null)return!i;for(e=Object(e);o--;){var l=n[o];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++o<i;){l=n[o];var c=l[0],u=e[c],d=l[1];if(a&&l[2]){if(u===void 0&&!(c in e))return!1}else{var f=new nl;if(r)var v=r(u,d,c,e,t,f);if(!(v===void 0?ei(d,u,Fc|Bc,r,f):v))return!1}}return!0}function Ci(e){return e===e&&!Qo(e)}function Uc(e){for(var t=rl(e),n=t.length;n--;){var r=t[n],o=e[r];t[n]=[r,o,Ci(o)]}return t}function $i(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function qc(e){var t=Uc(e);return t.length==1&&t[0][2]?$i(t[0][0],t[0][1]):function(n){return n===e||Vc(n,e,t)}}function Yc(e,t){return e!=null&&t in Object(e)}function Xc(e,t,n){t=ol(t,e);for(var r=-1,o=t.length,i=!1;++r<o;){var a=sr(t[r]);if(!(i=e!=null&&n(e,a)))break;e=e[a]}return i||++r!=o?i:(o=e==null?0:e.length,!!o&&il(o)&&al(a,o)&&(ar(e)||Ko(e)))}function Gc(e,t){return e!=null&&Xc(e,t,Yc)}var Qc=1,Jc=2;function Kc(e,t){return ti(e)&&Ci(t)?$i(sr(e),t):function(n){var r=lr(n,e);return r===void 0&&r===t?Gc(n,e):ei(t,r,Qc|Jc)}}function Zc(e){return function(t){return t==null?void 0:t[e]}}function ed(e){return function(t){return sl(t,e)}}function td(e){return ti(e)?Zc(sr(e)):ed(e)}function mw(e){return typeof e=="function"?e:e==null?mr:typeof e=="object"?ar(e)?Kc(e[0],e[1]):qc(e):td(e)}function nd(e){return function(t,n,r){for(var o=-1,i=Object(t),a=r(t),l=a.length;l--;){var c=a[e?l:++o];if(n(i[c],c,i)===!1)break}return t}}var vw=nd();function dn(e){return ll(e)&&Jo(e)}function xr(e,t,n){for(var r=-1,o=e==null?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}var rd=200;function od(e,t,n,r){var o=-1,i=vr,a=!0,l=e.length,c=[],u=t.length;if(!l)return c;n&&(t=cr(t,ni(n))),r?(i=xr,a=!1):t.length>=rd&&(i=sn,a=!1,t=new dr(t));e:for(;++o<l;){var d=e[o],f=n==null?d:n(d);if(d=r||d!==0?d:0,a&&f===f){for(var v=u;v--;)if(t[v]===f)continue e;c.push(d)}else i(t,f,r)||c.push(d)}return c}var id=br(function(e,t){return dn(e)?od(e,yr(t,1,dn,!0)):[]}),ad=Math.max,sd=Math.min;function ld(e,t,n){return e>=sd(t,n)&&e<ad(t,n)}function cd(e,t,n){return t=go(t),n===void 0?(n=t,t=0):n=go(n),e=Go(e),ld(e,t,n)}var dd=Math.min;function ud(e,t,n){for(var r=n?xr:vr,o=e[0].length,i=e.length,a=i,l=Array(i),c=1/0,u=[];a--;){var d=e[a];a&&t&&(d=cr(d,ni(t))),c=dd(d.length,c),l[a]=!n&&(t||o>=120&&d.length>=120)?new dr(a&&d):void 0}d=e[0];var f=-1,v=l[0];e:for(;++f<o&&u.length<c;){var m=d[f],b=t?t(m):m;if(m=n||m!==0?m:0,!(v?sn(v,b):r(u,b,n))){for(a=i;--a;){var g=l[a];if(!(g?sn(g,b):r(e[a],b,n)))continue e}v&&v.push(b),u.push(m)}}return u}function hd(e){return dn(e)?e:[]}var fd=br(function(e){var t=cr(e,hd);return t.length&&t[0]===e[0]?ud(t):[]}),gd=1/0,pd=In&&1/ri(new In([,-0]))[1]==gd?function(e){return new In(e)}:bc,md=200;function vd(e,t,n){var r=-1,o=vr,i=e.length,a=!0,l=[],c=l;if(n)a=!1,o=xr;else if(i>=md){var u=t?null:pd(e);if(u)return ri(u);a=!1,o=sn,c=new dr}else c=t?[]:l;e:for(;++r<i;){var d=e[r],f=t?t(d):d;if(d=n||d!==0?d:0,a&&f===f){for(var v=c.length;v--;)if(c[v]===f)continue e;t&&c.push(f),l.push(d)}else o(c,f,n)||(c!==l&&c.push(f),l.push(d))}return l}var bd=br(function(e){return vd(yr(e,1,dn,!0))});const yd=bd;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Si=function(e,t){return(Si=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)r.hasOwnProperty(o)&&(n[o]=r[o])})(e,t)};function kt(e,t){function n(){this.constructor=e}Si(e,t),e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var Ae=function(){return(Ae=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function Yn(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,o++)r[o]=i[a];return r}var rn,xd=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",wd=typeof Buffer<"u",Cd=typeof Uint8Array<"u";if(typeof ArrayBuffer>"u")rn=!1;else try{var $d=new ArrayBuffer(0);rn=new Blob([$d],{type:"application/zip"}).size===0}catch{rn=!1}var Ti={base64:!0,array:!0,string:!0,arraybuffer:xd,nodebuffer:wd,uint8array:Cd,blob:rn},Sd=typeof setImmediate=="function"?setImmediate:(...e)=>{e.splice(1,0,0),setTimeout(...e)};function yn(e){if(!Ti[e.toLowerCase()])throw new Error(e+" is not supported by this platform")}var Td=function(e,t,n){var r=[],o=0,i=e.length;if(i<=n)return String.fromCharCode.apply(null,e);for(;o<i;)t==="array"||t==="nodebuffer"?r.push(String.fromCharCode.apply(null,e.slice(o,Math.min(o+n,i)))):r.push(String.fromCharCode.apply(null,e.subarray(o,Math.min(o+n,i)))),o+=n;return r.join("")},kd=function(e){for(var t="",n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},Dd={string:{uint8array:function(e){return function(t,n){for(var r=0;r<t.length;++r)n[r]=255&t.charCodeAt(r);return n}(e,new Uint8Array(e.length))}},uint8array:{string:function(e){for(var t=65536;t>1;)try{return Td(e,"uint8array",t)}catch{t=Math.floor(t/2)}return kd(e)},arraybuffer:function(e){return e.buffer},uint8array:function(e){return e}}};function wr(e,t){var n;return yn(e),typeof t=="string"&&(n="string"),Ti.uint8array&&t instanceof Uint8Array&&(n="uint8array"),Dd[n][e](t)}function un(e,t,n){Sd(function(){e.apply(n||null,t||[])})}var vo={base64:!1,binary:!1,dir:!1,createFolders:!0,date:null,compression:null,compressionOptions:null,unixPermissions:null,dosPermissions:null},pe=function(){function e(t){t===void 0&&(t="default"),this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null,this.name=t}return e.prototype.push=function(t){this.emit("data",t)},e.prototype.end=function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(t){this.emit("error",t)}return!0},e.prototype.error=function(t){return!this.isFinished&&(this.isPaused?this.generatedError=t:(this.isFinished=!0,this.emit("error",t),this.previous&&this.previous.error(t),this.cleanUp()),!0)},e.prototype.on=function(t,n){return this._listeners[t].push(n),this},e.prototype.cleanUp=function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners={data:[],end:[],error:[]}},e.prototype.emit=function(t,n){if(this._listeners[t])for(var r=0;r<this._listeners[t].length;r++)this._listeners[t][r].call(this,n)},e.prototype.pipe=function(t){return t.registerPrevious(this)},e.prototype.registerPrevious=function(t){var n=this;if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");return this.streamInfo=t.streamInfo,this.mergeStreamInfo(),this.previous=t,t.on("data",function(r){n.processChunk(r)}),t.on("end",function(){n.end()}),t.on("error",function(r){n.error(r)}),this},e.prototype.pause=function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},e.prototype.resume=function(){if(!this.isPaused||this.isFinished)return!1;this.isPaused=!1;var t=!1;return this.generatedError&&(this.error(this.generatedError),t=!0),this.previous&&this.previous.resume(),!t},e.prototype.flush=function(){},e.prototype.processChunk=function(t){this.push(t)},e.prototype.withStreamInfo=function(t,n){return this.extraStreamInfo[t]=n,this.mergeStreamInfo(),this},e.prototype.mergeStreamInfo=function(){for(var t in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,t)&&(this.streamInfo[t]=this.extraStreamInfo[t])},e.prototype.lock=function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},e.prototype.toString=function(){var t="Worker "+this.name;return this.previous?this.previous+" -> "+t:t},e}(),Md=function(e){function t(n){var r=e.call(this,"DataWorker")||this;return r.dataIsReady=!1,r.index=0,r.max=0,r.data=null,r._tickScheduled=!1,n.then(function(o){r.dataIsReady=!0,r.data=o,r.max=o&&o.length||0,r.isPaused||r._tickAndRepeat()},function(o){r.error(o)}),r}return kt(t,e),t.prototype.cleanUp=function(){pe.prototype.cleanUp.call(this),this.data=null},t.prototype.resume=function(){return!!pe.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,un(this._tickAndRepeat,[],this)),!0)},t.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(un(this._tickAndRepeat,[],this),this._tickScheduled=!0))},t.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var n=null,r=Math.min(this.max,this.index+16384);return this.index>=this.max?this.end():(n=this.data.substring(this.index,r),this.index=r,this.push({data:n,meta:{percent:this.max?this.index/this.max*100:0}}))},t}(pe);function ki(e){return function(t){for(var n=0,r=0;r<t.length;r++)(64512&(a=t.charCodeAt(r)))==55296&&r+1<t.length&&(64512&(l=t.charCodeAt(r+1)))==56320&&(a=65536+(a-55296<<10)+(l-56320),r++),n+=a<128?1:a<2048?2:a<65536?3:4;var o=new Uint8Array(n),i=0;for(r=0;i<n;r++){var a,l;(64512&(a=t.charCodeAt(r)))==55296&&r+1<t.length&&(64512&(l=t.charCodeAt(r+1)))==56320&&(a=65536+(a-55296<<10)+(l-56320),r++),a<128?o[i++]=a:a<2048?(o[i++]=192|a>>>6,o[i++]=128|63&a):a<65536?(o[i++]=224|a>>>12,o[i++]=128|a>>>6&63,o[i++]=128|63&a):(o[i++]=240|a>>>18,o[i++]=128|a>>>12&63,o[i++]=128|a>>>6&63,o[i++]=128|63&a)}return o}(e)}var Pd=function(e){function t(){return e.call(this,"utf-8 encode")||this}return kt(t,e),t.prototype.processChunk=function(n){this.push({data:ki(n.data),meta:n.meta})},t}(pe),bo=function(e){function t(n){var r=e.call(this,"DataLengthProbe for "+n)||this;return r.propName=n,r.withStreamInfo(n,0),r}return kt(t,e),t.prototype.processChunk=function(n){if(n){var r=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=r+n.data.length}pe.prototype.processChunk.call(this,n)},t}(pe),Ed=function(){for(var e=[],t=0;t<256;t++){for(var n=t,r=0;r<8;r++)n=1&n?3988292384^n>>>1:n>>>1;e[t]=n}return e}();function Di(e,t){return t===void 0&&(t=0),e&&e.length?function(n,r){n^=-1;for(var o=0;o<r.length;o++)n=n>>>8^Ed[255&(n^r[o])];return-1^n}(t,e):0}var Od=function(e){function t(){var n=e.call(this,"Crc32Probe")||this;return n.withStreamInfo("crc32",0),n}return kt(t,e),t.prototype.processChunk=function(n){this.streamInfo.crc32=Di(n.data,this.streamInfo.crc32||0),this.push(n)},t}(pe),Id=function(){function e(t,n,r,o,i){this.compressedSize=t,this.uncompressedSize=n,this.crc32=r,this.compression=o,this.compressedContent=i}return e.createWorkerFrom=function(t,n,r){return t.pipe(new Od).pipe(new bo("uncompressedSize")).pipe(n.compressWorker(r)).pipe(new bo("compressedSize")).withStreamInfo("compression",n)},e}(),jd=function(){function e(t,n,r){this.name=t,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=n,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}}return e.prototype._compressWorker=function(t,n){var r=new Md(this._data);return this._dataBinary||(r=r.pipe(new Pd)),Id.createWorkerFrom(r,t,n)},e}(),Ld=function(e){function t(n){var r=e.call(this,"ConvertWorker to "+n)||this;return r.destType=n,r}return kt(t,e),t.prototype.processChunk=function(n){this.push({data:wr(this.destType,n.data),meta:n.meta})},t}(pe);function _d(e){return t=wr("arraybuffer",e),yn("blob"),new Blob([t],{type:"application/octet-stream"});var t}var Ad=function(){function e(t){try{yn("uint8array"),this.worker=t.pipe(new Ld("uint8array")),t.lock()}catch(n){this.worker=new pe("error"),this.worker.error(n)}}return e.prototype.accumulate=function(){var t=this;return new Promise(function(n,r){var o=[];t.on("data",function(i){o.push(i)}).on("error",function(i){o=[],r(i)}).on("end",function(){try{var i=_d(function(a){for(var l=0,c=0;c<a.length;c++)l+=a[c].length;var u=new Uint8Array(l),d=0;for(c=0;c<a.length;c++)u.set(a[c],d),d+=a[c].length;return u}(o));n(i)}catch(a){r(a)}o=[]}).resume()})},e.prototype.on=function(t,n){var r=this;return t==="data"?this.worker.on(t,function(o){n.call(r,o.data,o.meta)}):this.worker.on(t,function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];un(n,o,r)}),this},e.prototype.resume=function(){return un(this.worker.resume,[],this.worker),this},e.prototype.pause=function(){return this.worker.pause(),this},e}(),Nd={magic:"\0\0",compressWorker:function(){return new pe("STORE compression")}},Rd="PK",zd="PK",Hd="PK";function ae(e,t){for(var n="",r=0;r<t;r++)n+=String.fromCharCode(255&e),e>>>=8;return n}var Wd=function(e){function t(){var n=e.call(this,"ZipFileWorker")||this;return n.bytesWritten=0,n.accumulate=!1,n.contentBuffer=[],n.dirRecords=[],n.currentSourceOffset=0,n.entriesCount=0,n.currentFile=null,n._sources=[],n}return kt(t,e),t.prototype.push=function(n){var r=n.meta.percent||0,o=this.entriesCount,i=this._sources.length;this.accumulate?this.contentBuffer.push(n):(this.bytesWritten+=n.data.length,pe.prototype.push.call(this,{data:n.data,meta:{currentFile:this.currentFile,percent:o?(r+100*(o-i-1))/o:100}}))},t.prototype.openedSource=function(n){this.currentSourceOffset=this.bytesWritten,this.currentFile=n.file.name,this.accumulate=!0},t.prototype.closedSource=function(n){this.accumulate=!1;var r=function(o,i){var a=o.file,l=o.compression,c=wr("string",ki(a.name)),u=c.length!==a.name.length,d=a.dir,f=a.date,v={crc32:0,compressedSize:0,uncompressedSize:0};v.crc32=o.crc32,v.compressedSize=o.compressedSize,v.uncompressedSize=o.uncompressedSize;var m=0;u&&(m|=2048);var b=0;d&&(b|=16),b|=63&(a.dosPermissions||0);var g=f.getUTCHours();g<<=6,g|=f.getUTCMinutes(),g<<=5,g|=f.getUTCSeconds()/2;var y=f.getUTCFullYear()-1980;y<<=4,y|=f.getUTCMonth()+1,y<<=5,y|=f.getUTCDate();var w="",S="";u&&(S=ae(1,1)+ae(Di(c),4)+c,w+="up"+ae(S.length,2)+S);var C="";return C+=`
\0`,C+=ae(m,2),C+=l.magic,C+=ae(g,2),C+=ae(y,2),C+=ae(v.crc32,4),C+=ae(v.compressedSize,4),C+=ae(v.uncompressedSize,4),C+=ae(c.length,2),C+=ae(w.length,2),{fileRecord:Rd+C+c+w,dirRecord:zd+ae(20,2)+C+ae(0,2)+"\0\0\0\0"+ae(b,4)+ae(i,4)+c+w}}(n,this.currentSourceOffset);for(this.dirRecords.push(r.dirRecord),this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},t.prototype.flush=function(){for(var n=this.bytesWritten,r=0;r<this.dirRecords.length;r++)this.push({data:this.dirRecords[r],meta:{percent:100}});var o=this.bytesWritten-n,i=function(a,l,c){return Hd+"\0\0\0\0"+ae(a,2)+ae(a,2)+ae(l,4)+ae(c,4)+ae(0,2)}(this.dirRecords.length,o,n);this.push({data:i,meta:{percent:100}})},t.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},t.prototype.registerPrevious=function(n){var r=this;return this._sources.push(n),n.on("data",function(o){r.processChunk(o)}),n.on("end",function(){r.closedSource(r.previous.streamInfo),r._sources.length?r.prepareNextSource():r.end()}),n.on("error",function(o){r.error(o)}),this},t.prototype.resume=function(){return!!pe.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},t.prototype.error=function(n){var r=this._sources;if(!pe.prototype.error.call(this,n))return!1;for(var o=0;o<r.length;o++)try{r[o].error(n)}catch{}return!0},t.prototype.lock=function(){pe.prototype.lock.call(this);for(var n=this._sources,r=0;r<n.length;r++)n[r].lock()},t}(pe),Fd=function(){function e(){this.files={},this.comment=null,this.root=""}return e.prototype.clone=function(){var t=new e;for(var n in this)typeof this[n]!="function"&&(t[n]=this[n]);return t},e.prototype.forEach=function(t){for(var n in this.files)if(Object.prototype.hasOwnProperty.call(this.files,n)){var r=this.files[n],o=n.slice(this.root.length,n.length);o&&n.slice(0,this.root.length)===this.root&&t(o,r)}},e.prototype.fileAdd=function(t,n,r){r===void 0&&(r={});var o,i,a,l=Ae(Ae({},vo),r);l.date=l.date||new Date,l.createFolders&&(o=(a=(i=function(u){return u.slice(-1)==="/"?u.substr(0,u.length-1):u}(i=t)).lastIndexOf("/"))>0?i.substr(0,a):"")&&this.folderAdd(o,!0),!l.dir&&n&&n.length!==0||(l.base64=!1,l.binary=!0,n="",l.compression="STORE");var c=new jd(t,Promise.resolve(n),l);this.files[t]=c},e.prototype.folderAdd=function(t,n){var r;return n===void 0&&(n=vo.createFolders),t=(r=t).slice(-1)!=="/"?r+"/":r,this.files[t]||this.fileAdd(t,null,{dir:!0,createFolders:n}),this.files[t]},e.prototype.file=function(t,n){return this.fileAdd(this.root+t,n),this},e.prototype.folder=function(t){var n=this.folderAdd(this.root+t),r=this.clone();return r.root=n.name,r},e.prototype.generateAsync=function(){var t;try{yn("blob"),t=function(n){var r=new Wd,o=0;try{n.forEach(function(i,a){o++;var l=a.options.compressionOptions||{},c=a.dir,u=a.date;a._compressWorker(Nd,l).withStreamInfo("file",{name:i,dir:c,date:u,comment:a.comment||"",unixPermissions:a.unixPermissions,dosPermissions:a.dosPermissions}).pipe(r)}),r.entriesCount=o}catch(i){r.error(i)}return r}(this)}catch(n){(t=new pe("error")).error(n)}return new Ad(t).accumulate()},e}(),Kt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Bd=function(e,t){return e(t={exports:{}},t.exports),t.exports}(function(e,t){(function(){function n(l,c,u){var d=new XMLHttpRequest;d.open("GET",l),d.responseType="blob",d.onload=function(){a(d.response,c,u)},d.onerror=function(){console.error("could not download file")},d.send()}function r(l){var c=new XMLHttpRequest;c.open("HEAD",l,!1);try{c.send()}catch{}return 200<=c.status&&299>=c.status}function o(l){try{l.dispatchEvent(new MouseEvent("click"))}catch{var c=document.createEvent("MouseEvents");c.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(c)}}var i=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Kt=="object"&&Kt.global===Kt?Kt:void 0,a=i.saveAs||(typeof window!="object"||window!==i?function(){}:"download"in HTMLAnchorElement.prototype?function(l,c,u){var d=i.URL||i.webkitURL,f=document.createElement("a");c=c||l.name||"download",f.download=c,f.rel="noopener",typeof l=="string"?(f.href=l,f.origin===location.origin?o(f):r(f.href)?n(l,c,u):o(f,f.target="_blank")):(f.href=d.createObjectURL(l),setTimeout(function(){d.revokeObjectURL(f.href)},4e4),setTimeout(function(){o(f)},0))}:"msSaveOrOpenBlob"in navigator?function(l,c,u){if(c=c||l.name||"download",typeof l!="string")navigator.msSaveOrOpenBlob(function(f,v){return v===void 0?v={autoBom:!1}:typeof v!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),v={autoBom:!v}),v.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\uFEFF",f],{type:f.type}):f}(l,u),c);else if(r(l))n(l,c,u);else{var d=document.createElement("a");d.href=l,d.target="_blank",setTimeout(function(){o(d)})}}:function(l,c,u,d){if((d=d||open("","_blank"))&&(d.document.title=d.document.body.innerText="downloading..."),typeof l=="string")return n(l,c,u);var f=l.type==="application/octet-stream",v=/constructor/i.test(i.HTMLElement)||i.safari,m=/CriOS\/[\d]+/.test(navigator.userAgent);if((m||f&&v)&&typeof FileReader=="object"){var b=new FileReader;b.onloadend=function(){var w=b.result;w=m?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=w:location=w,d=null},b.readAsDataURL(l)}else{var g=i.URL||i.webkitURL,y=g.createObjectURL(l);d?d.location=y:location.href=y,d=null,setTimeout(function(){g.revokeObjectURL(y)},4e4)}});i.saveAs=a.saveAs=a,e.exports=a})()}).saveAs;function yt(e){return'<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+function t(n){if(typeof n!="object")return n.toString();var r=["<"+n._t];for(var o in n)o.startsWith("_")||n[o]===void 0||r.push(" "+o+'="'+n[o]+'"');if(n._c&&n._c.length>0){r.push(">");for(var i=0,a=n._c;i<a.length;i++){var l=a[i];r.push(t(l))}r.push("</"+n._t+">")}else r.push("/>");return r.join("")}(e)}function wt(e){var t=e[0]==="#"?e.substr(1):e;if((t=t.toUpperCase()).length===3)return"FF"+(t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);if(t.length===6)return"FF"+t;if(t.length===8)return t.substring(6,8)+t.substring(0,6);throw new Error("Invalid color provided: "+e)}var Cr=function(){function e(t,n,r){this.sheet=t,this.row=n,this.col=r}return e.prototype.set=function(t,n){this.sheet.set(t,Ae({row:this.row,col:this.col},n))},e.prototype.get=function(){return this.sheet.get({row:this.row,col:this.col})},e}(),Vd=function(){function e(t,n,r){this.sheet=t,this.index=n,r.width=r.width||null,this.data=r}return e.prototype.row=function(t){return new Cr(this.sheet,t,this.index)},e.prototype.width=function(t){if(!t)return this.data.width;this.data.width=t},e}(),Ud=function(){function e(t,n,r){this.sheet=t,this.index=n,r.height=r.height||null,this.data=r}return e.prototype.col=function(t){return new Cr(this.sheet,this.index,t)},e.prototype.height=function(t){if(!t)return this.data.height;this.data.height=t},e}(),qd=function(){function e(t){this.config=t}return e.prototype.export=function(){var t=this.config,n=t.fontFamily,r=t.fontSize,o=t.fontWeight,i=t.textDecoration,a=t.fontStyle,l=t.color,c=[];return c.push({_t:"name",val:n}),r&&c.push({_t:"sz",val:r.toString().replace("px","")}),o==="bold"&&c.push({_t:"b"}),i&&c.push({_t:{"line-through":"strike",underline:"u"}[i]}),a==="italic"&&c.push({_t:"i"}),l&&c.push({_t:"color",rgb:wt(l)}),{_t:"font",_c:c}},e}(),Yd=function(){function e(t){this.config=t}return e.prototype.export=function(){var t=this.config.backgroundColor;return{_t:"fill",_c:[{_t:"patternFill",patternType:t!=="none"?"solid":"none",_c:t!=="none"&&[{_t:"fgColor",rgb:wt(t)}]}]}},e}(),Mi=function(){function e(t){this.config=t}return e.prototype.export=function(){var t=this.config,n=t.borderStyle,r=t.borderColor,o=t.borderVerticalStyle,i=t.borderVerticalColor,a=t.borderHorizontalStyle,l=t.borderHorizontalColor,c={style:t.borderTopStyle||o||n,color:t.borderTopColor||i||r},u={style:t.borderBottomStyle||o||n,color:t.borderBottomColor||i||r},d={style:t.borderLeftStyle||a||n,color:t.borderLeftColor||l||r},f={style:t.borderRightStyle||a||n,color:t.borderRightColor||l||r};return{_t:"border",_c:[d.style&&{_t:"left",style:d.style,_c:d.color&&[{_t:"color",rgb:wt(d.color)}]},f.style&&{_t:"right",style:f.style,_c:f.color&&[{_t:"color",rgb:wt(f.color)}]},c.style&&{_t:"top",style:c.style,_c:c.color&&[{_t:"color",rgb:wt(c.color)}]},u.style&&{_t:"bottom",style:u.style,_c:u.color&&[{_t:"color",rgb:wt(u.color)}]}].filter(Boolean)}},e}(),Pi=function(){function e(t,n,r){this.borderIndex=0,this.alignment=null,this.index=n,(t.fontFamily||t.fontSize||t.fontWeight||t.textDecoration||t.fontStyle||t.color)&&(t.fontFamily=t.fontFamily||"Arial",this.fontIndex=r.fonts.length,r.fonts.push(new qd(t))),t.backgroundColor&&(this.fillIndex=r.fills.length,r.fills.push(new Yd(t))),(t.borderStyle||t.borderColor||t.borderVerticalStyle||t.borderVerticalColor||t.borderHorizontalStyle||t.borderHorizontalColor||t.borderTopStyle||t.borderTopColor||t.borderBottomStyle||t.borderBottomColor||t.borderLeftStyle||t.borderLeftColor||t.borderRightStyle||t.borderRightColor)&&(this.borderIndex=r.borders.length,r.borders.push(new Mi(t))),(t.textAlign||t.verticalAlign)&&(this.alignment={textAlign:t.textAlign,verticalAlign:t.verticalAlign})}return e.prototype.export=function(){return{_t:"xf",fontId:this.fontIndex,applyFont:typeof this.fontIndex=="number"?"true":void 0,fillId:this.fillIndex,applyFill:typeof this.fillIndex=="number"?"true":void 0,borderId:this.borderIndex,applyBorder:"true",applyAlignment:this.alignment?"true":void 0,_c:[this.alignment&&{_t:"alignment",horizontal:this.alignment.textAlign,vertical:this.alignment.verticalAlign==="middle"?"center":this.alignment.verticalAlign}].filter(Boolean)}},e}();function Ln(e){for(var t="";e>0;){var n=(e-1)%26;t=String.fromCharCode(65+n)+t,e=(e-n)/26|0}return t}var Xd=function(){function e(t,n){this.data={},this.rowsData={},this.colsData={},this.styles={rtl:!1},this.filters=[],this.book=t,this.name=n}return e.prototype.col=function(t){return this.colsData[t]=this.colsData[t]||{},new Vd(this,t,this.colsData[t])},e.prototype.row=function(t){return this.rowsData[t]=this.rowsData[t]||{},new Ud(this,t,this.rowsData[t])},e.prototype.cell=function(t,n){return new Cr(this,t,n)},e.prototype.set=function(t,n){var r=n.type,o=n.row,i=n.col,a=n.style;if(Array.isArray(t))for(var l=0;l<t.length;l++){var c=t[l];if(Array.isArray(c))for(var u=0;u<c.length;u++){var d=c[u];this.set(d,Ae(Ae({},n),{row:o+l,col:i+u}))}else this.set(c,Ae(Ae({},n),{row:o+l}))}else{if(!r)if(typeof t=="string")r="string";else{if(typeof t!="number")throw new Error("Invalid cell value type. Only numbers and strings are allowed.");r="number"}this.data[o]||(this.data[o]={}),this.data[o][i]||(this.data[o][i]={});var f=this.data[o][i];if(a&&(f.s=a instanceof Pi?a.index:this.book.style(a).index),r==="string")f.t="inlineStr",f.v=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");else{if(r!=="number")throw new Error("Invalid cell type provided: "+r);f.t="n",f.v=t}}},e.prototype.get=function(t){var n=t.row,r=t.col;return this.data[n]&&this.data[n][r]?this.data[n][r].v:null},e.prototype.style=function(t){this.styles=Ae(Ae({},this.styles),t)},e.prototype.addFilter=function(t){this.filters.push(Ln(t.from.col)+t.from.row+":"+Ln(t.to.col)+t.to.row)},e.prototype.export=function(){return yt({_t:"worksheet",xmlns:"http://schemas.openxmlformats.org/spreadsheetml/2006/main","xmlns:r":"http://schemas.openxmlformats.org/officeDocument/2006/relationships",_c:Yn([this.exportStyles(),this.exportColumns(),this.exportData()],this.exportFilters()).filter(Boolean)})},e.prototype.exportStyles=function(){return{_t:"sheetViews",_c:[{_t:"sheetView",rightToLeft:this.styles.rtl?"true":"false",workbookViewId:"0"}]}},e.prototype.exportData=function(){var t=[];for(var n in this.data){var r=[];for(var o in this.data[n]){var i=this.data[n][o],a=[];i.t==="inlineStr"?a.push({_t:"is",_c:[{_t:"t",_c:[i.v]}]}):a.push({_t:"v",_c:[i.v]}),r.push({_t:"c",t:i.t,s:i.s,r:Ln(o)+n,_c:a})}var l=this.rowsData[n]||{};t.push({_t:"row",customHeight:typeof l.height=="number"?"true":"false",ht:typeof l.height=="number"?l.height:void 0,r:n,_c:r})}return{_t:"sheetData",_c:t}},e.prototype.exportFilters=function(){return this.filters.map(function(t){return{_t:"autoFilter",ref:t}})},e.prototype.exportColumns=function(){var t=this;return Object.keys(this.colsData).length?{_t:"cols",_c:Object.keys(this.colsData).map(function(n){return{_t:"col",min:n,max:n,customWidth:typeof t.colsData[n].width=="number"?"true":"false",width:typeof t.colsData[n].width=="number"?t.colsData[n].width:void 0}})}:null},e}(),Gd=function(){function e(){this.sheets=[],this.styles=[],this.styleElements={fonts:[],fills:[],borders:[new Mi({})]},this.style({fontFamily:"Arial",backgroundColor:"none"}),this.style({backgroundColor:"none"})}return e.prototype.sheet=function(t){var n=new Xd(this,t);return this.sheets.push(n),n},e.prototype.style=function(t){var n=new Pi(t,this.styles.length,this.styleElements);return this.styles.push(n),n},e.prototype.save=function(t){var n=new Fd,r=n.folder("_rels"),o=n.folder("xl"),i=o.folder("_rels"),a=o.folder("worksheets");n.file("[Content_Types].xml",yt({_t:"Types",xmlns:"http://schemas.openxmlformats.org/package/2006/content-types",_c:Yn([{_t:"Default",Extension:"rels",ContentType:"application/vnd.openxmlformats-package.relationships+xml"},{_t:"Override",PartName:"/xl/workbook.xml",ContentType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"},{_t:"Override",PartName:"/xl/styles.xml",ContentType:"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"}],this.sheets.map(function(c,u){return{_t:"Override",PartName:"/xl/worksheets/sheet"+(u+1)+".xml",ContentType:"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"}}))})),r.file(".rels",yt({_t:"Relationships",xmlns:"http://schemas.openxmlformats.org/package/2006/relationships",_c:[{_t:"Relationship",Id:"rId1",Type:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",Target:"xl/workbook.xml"}]})),o.file("workbook.xml",yt({_t:"workbook",xmlns:"http://schemas.openxmlformats.org/spreadsheetml/2006/main","xmlns:r":"http://schemas.openxmlformats.org/officeDocument/2006/relationships",_c:[{_t:"sheets",_c:this.sheets.map(function(c,u){return{_t:"sheet",name:c.name,sheetId:(u+1).toString(),"r:id":"rId"+(u+2)}})}]})),i.file("workbook.xml.rels",yt({_t:"Relationships",xmlns:"http://schemas.openxmlformats.org/package/2006/relationships",_c:Yn([{_t:"Relationship",Id:"rId1",Type:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles",Target:"styles.xml"}],this.sheets.map(function(c,u){return{_t:"Relationship",Id:"rId"+(u+2),Type:"http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",Target:"worksheets/sheet"+(u+1)+".xml"}}))}));for(var l=0;l<this.sheets.length;l++)a.file("sheet"+(l+1)+".xml",this.sheets[l].export());o.file("styles.xml",yt({_t:"styleSheet",xmlns:"http://schemas.openxmlformats.org/spreadsheetml/2006/main","xmlns:x14ac":"http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac","xmlns:mc":"http://schemas.openxmlformats.org/markup-compatibility/2006",_c:[{_t:"fonts",count:this.styleElements.fonts.length,_c:this.styleElements.fonts.map(function(c){return c.export()})},{_t:"fills",count:this.styleElements.fills.length,_c:this.styleElements.fills.map(function(c){return c.export()})},{_t:"borders",count:this.styleElements.borders.length,_c:this.styleElements.borders.map(function(c){return c.export()})},{_t:"cellXfs",count:this.styles.length,_c:this.styles.map(function(c){return c.export()})}]})),n.generateAsync().then(function(c){Bd(c,t)})},e}();const Qd=(e,t)=>e.map(n=>n.map(r=>isNaN(r)?`"${r.replace(/"/g,'""')}"`:r).join(t)).join(`
`),Jd=(e,t)=>{const n=new Blob([e],{type:"text/csv;charset=utf-8;\uFEFF"}),r=document.createElement("a");r.download=`${t}${new Date().toISOString().split("T")[0]}.csv`,r.href=URL.createObjectURL(n),r.click()},Kd=({data:e,delimiter:t=",",filename:n})=>{const r=Qd(e,t);Jd(r,n)},Zd=async(e,t,n)=>{const r=new Gd;e.forEach(({data:o,name:i})=>{o!=null&&eu({xlsx:r,data:o,sheetName:i,options:n})}),r.save(`${t}.xlsx`)},eu=({xlsx:e,data:t,sheetName:n,options:r})=>{const o=e.sheet(n);o.style({rtl:!1});const i=e.style({fontWeight:"bold",textAlign:"justify",verticalAlign:(r==null?void 0:r.verticalAlign)||"middle"}),a=e.style({textAlign:"justify",verticalAlign:(r==null?void 0:r.verticalAlign)||"middle"}),l=e.style({textAlign:"right"});tu(o,t.headers,i,t.widths);const c=nu(o,a,l);t.rows.forEach((u,d)=>{c(u,d+2)})},tu=(e,t,n,r)=>{t.forEach((o,i)=>{if(r){const a=r.filter(l=>l.header===o)[0];a&&a.width&&e.col(i+1).width(a.width)}e.set(o,{row:1,col:i+1,style:n})})},nu=(e,t,n)=>(r,o)=>{r.forEach((i,a)=>{const l=r[a]===null?"N/A":r[a]??"";e.set(l,{row:o,col:a+1,style:typeof l=="number"?n:t})})};function hn(e){"@babel/helpers - typeof";return hn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hn(e)}function at(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function me(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function Ne(e){me(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||hn(e)==="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function ru(e,t){me(2,arguments);var n=Ne(e).getTime(),r=at(t);return new Date(n+r)}var ou={};function xn(){return ou}function iu(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function au(e){return me(1,arguments),e instanceof Date||hn(e)==="object"&&Object.prototype.toString.call(e)==="[object Date]"}function su(e){if(me(1,arguments),!au(e)&&typeof e!="number")return!1;var t=Ne(e);return!isNaN(Number(t))}function lu(e,t){me(2,arguments);var n=at(t);return ru(e,-n)}var cu=864e5;function du(e){me(1,arguments);var t=Ne(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),o=n-r;return Math.floor(o/cu)+1}function fn(e){me(1,arguments);var t=1,n=Ne(e),r=n.getUTCDay(),o=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function Ei(e){me(1,arguments);var t=Ne(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var o=fn(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var a=fn(i);return t.getTime()>=o.getTime()?n+1:t.getTime()>=a.getTime()?n:n-1}function uu(e){me(1,arguments);var t=Ei(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=fn(n);return r}var hu=6048e5;function fu(e){me(1,arguments);var t=Ne(e),n=fn(t).getTime()-uu(t).getTime();return Math.round(n/hu)+1}function Ct(e,t){var n,r,o,i,a,l,c,u;me(1,arguments);var d=xn(),f=at((n=(r=(o=(i=t==null?void 0:t.weekStartsOn)!==null&&i!==void 0?i:t==null||(a=t.locale)===null||a===void 0||(l=a.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&o!==void 0?o:d.weekStartsOn)!==null&&r!==void 0?r:(c=d.locale)===null||c===void 0||(u=c.options)===null||u===void 0?void 0:u.weekStartsOn)!==null&&n!==void 0?n:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=Ne(e),m=v.getUTCDay(),b=(m<f?7:0)+m-f;return v.setUTCDate(v.getUTCDate()-b),v.setUTCHours(0,0,0,0),v}function Oi(e,t){var n,r,o,i,a,l,c,u;me(1,arguments);var d=Ne(e),f=d.getUTCFullYear(),v=xn(),m=at((n=(r=(o=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(a=t.locale)===null||a===void 0||(l=a.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&o!==void 0?o:v.firstWeekContainsDate)!==null&&r!==void 0?r:(c=v.locale)===null||c===void 0||(u=c.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(f+1,0,m),b.setUTCHours(0,0,0,0);var g=Ct(b,t),y=new Date(0);y.setUTCFullYear(f,0,m),y.setUTCHours(0,0,0,0);var w=Ct(y,t);return d.getTime()>=g.getTime()?f+1:d.getTime()>=w.getTime()?f:f-1}function gu(e,t){var n,r,o,i,a,l,c,u;me(1,arguments);var d=xn(),f=at((n=(r=(o=(i=t==null?void 0:t.firstWeekContainsDate)!==null&&i!==void 0?i:t==null||(a=t.locale)===null||a===void 0||(l=a.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&o!==void 0?o:d.firstWeekContainsDate)!==null&&r!==void 0?r:(c=d.locale)===null||c===void 0||(u=c.options)===null||u===void 0?void 0:u.firstWeekContainsDate)!==null&&n!==void 0?n:1),v=Oi(e,t),m=new Date(0);m.setUTCFullYear(v,0,f),m.setUTCHours(0,0,0,0);var b=Ct(m,t);return b}var pu=6048e5;function mu(e,t){me(1,arguments);var n=Ne(e),r=Ct(n,t).getTime()-gu(n,t).getTime();return Math.round(r/pu)+1}function X(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var vu={y:function(t,n){var r=t.getUTCFullYear(),o=r>0?r:1-r;return X(n==="yy"?o%100:o,n.length)},M:function(t,n){var r=t.getUTCMonth();return n==="M"?String(r+1):X(r+1,2)},d:function(t,n){return X(t.getUTCDate(),n.length)},a:function(t,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(t,n){return X(t.getUTCHours()%12||12,n.length)},H:function(t,n){return X(t.getUTCHours(),n.length)},m:function(t,n){return X(t.getUTCMinutes(),n.length)},s:function(t,n){return X(t.getUTCSeconds(),n.length)},S:function(t,n){var r=n.length,o=t.getUTCMilliseconds(),i=Math.floor(o*Math.pow(10,r-3));return X(i,n.length)}};const Je=vu;var vt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},bu={G:function(t,n,r){var o=t.getUTCFullYear()>0?1:0;switch(n){case"G":case"GG":case"GGG":return r.era(o,{width:"abbreviated"});case"GGGGG":return r.era(o,{width:"narrow"});case"GGGG":default:return r.era(o,{width:"wide"})}},y:function(t,n,r){if(n==="yo"){var o=t.getUTCFullYear(),i=o>0?o:1-o;return r.ordinalNumber(i,{unit:"year"})}return Je.y(t,n)},Y:function(t,n,r,o){var i=Oi(t,o),a=i>0?i:1-i;if(n==="YY"){var l=a%100;return X(l,2)}return n==="Yo"?r.ordinalNumber(a,{unit:"year"}):X(a,n.length)},R:function(t,n){var r=Ei(t);return X(r,n.length)},u:function(t,n){var r=t.getUTCFullYear();return X(r,n.length)},Q:function(t,n,r){var o=Math.ceil((t.getUTCMonth()+1)/3);switch(n){case"Q":return String(o);case"QQ":return X(o,2);case"Qo":return r.ordinalNumber(o,{unit:"quarter"});case"QQQ":return r.quarter(o,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(o,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(o,{width:"wide",context:"formatting"})}},q:function(t,n,r){var o=Math.ceil((t.getUTCMonth()+1)/3);switch(n){case"q":return String(o);case"qq":return X(o,2);case"qo":return r.ordinalNumber(o,{unit:"quarter"});case"qqq":return r.quarter(o,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(o,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(o,{width:"wide",context:"standalone"})}},M:function(t,n,r){var o=t.getUTCMonth();switch(n){case"M":case"MM":return Je.M(t,n);case"Mo":return r.ordinalNumber(o+1,{unit:"month"});case"MMM":return r.month(o,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(o,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(o,{width:"wide",context:"formatting"})}},L:function(t,n,r){var o=t.getUTCMonth();switch(n){case"L":return String(o+1);case"LL":return X(o+1,2);case"Lo":return r.ordinalNumber(o+1,{unit:"month"});case"LLL":return r.month(o,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(o,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(o,{width:"wide",context:"standalone"})}},w:function(t,n,r,o){var i=mu(t,o);return n==="wo"?r.ordinalNumber(i,{unit:"week"}):X(i,n.length)},I:function(t,n,r){var o=fu(t);return n==="Io"?r.ordinalNumber(o,{unit:"week"}):X(o,n.length)},d:function(t,n,r){return n==="do"?r.ordinalNumber(t.getUTCDate(),{unit:"date"}):Je.d(t,n)},D:function(t,n,r){var o=du(t);return n==="Do"?r.ordinalNumber(o,{unit:"dayOfYear"}):X(o,n.length)},E:function(t,n,r){var o=t.getUTCDay();switch(n){case"E":case"EE":case"EEE":return r.day(o,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(o,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(o,{width:"short",context:"formatting"});case"EEEE":default:return r.day(o,{width:"wide",context:"formatting"})}},e:function(t,n,r,o){var i=t.getUTCDay(),a=(i-o.weekStartsOn+8)%7||7;switch(n){case"e":return String(a);case"ee":return X(a,2);case"eo":return r.ordinalNumber(a,{unit:"day"});case"eee":return r.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(i,{width:"short",context:"formatting"});case"eeee":default:return r.day(i,{width:"wide",context:"formatting"})}},c:function(t,n,r,o){var i=t.getUTCDay(),a=(i-o.weekStartsOn+8)%7||7;switch(n){case"c":return String(a);case"cc":return X(a,n.length);case"co":return r.ordinalNumber(a,{unit:"day"});case"ccc":return r.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(i,{width:"narrow",context:"standalone"});case"cccccc":return r.day(i,{width:"short",context:"standalone"});case"cccc":default:return r.day(i,{width:"wide",context:"standalone"})}},i:function(t,n,r){var o=t.getUTCDay(),i=o===0?7:o;switch(n){case"i":return String(i);case"ii":return X(i,n.length);case"io":return r.ordinalNumber(i,{unit:"day"});case"iii":return r.day(o,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(o,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(o,{width:"short",context:"formatting"});case"iiii":default:return r.day(o,{width:"wide",context:"formatting"})}},a:function(t,n,r){var o=t.getUTCHours(),i=o/12>=1?"pm":"am";switch(n){case"a":case"aa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,n,r){var o=t.getUTCHours(),i;switch(o===12?i=vt.noon:o===0?i=vt.midnight:i=o/12>=1?"pm":"am",n){case"b":case"bb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,n,r){var o=t.getUTCHours(),i;switch(o>=17?i=vt.evening:o>=12?i=vt.afternoon:o>=4?i=vt.morning:i=vt.night,n){case"B":case"BB":case"BBB":return r.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,n,r){if(n==="ho"){var o=t.getUTCHours()%12;return o===0&&(o=12),r.ordinalNumber(o,{unit:"hour"})}return Je.h(t,n)},H:function(t,n,r){return n==="Ho"?r.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Je.H(t,n)},K:function(t,n,r){var o=t.getUTCHours()%12;return n==="Ko"?r.ordinalNumber(o,{unit:"hour"}):X(o,n.length)},k:function(t,n,r){var o=t.getUTCHours();return o===0&&(o=24),n==="ko"?r.ordinalNumber(o,{unit:"hour"}):X(o,n.length)},m:function(t,n,r){return n==="mo"?r.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Je.m(t,n)},s:function(t,n,r){return n==="so"?r.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):Je.s(t,n)},S:function(t,n){return Je.S(t,n)},X:function(t,n,r,o){var i=o._originalDate||t,a=i.getTimezoneOffset();if(a===0)return"Z";switch(n){case"X":return xo(a);case"XXXX":case"XX":return ot(a);case"XXXXX":case"XXX":default:return ot(a,":")}},x:function(t,n,r,o){var i=o._originalDate||t,a=i.getTimezoneOffset();switch(n){case"x":return xo(a);case"xxxx":case"xx":return ot(a);case"xxxxx":case"xxx":default:return ot(a,":")}},O:function(t,n,r,o){var i=o._originalDate||t,a=i.getTimezoneOffset();switch(n){case"O":case"OO":case"OOO":return"GMT"+yo(a,":");case"OOOO":default:return"GMT"+ot(a,":")}},z:function(t,n,r,o){var i=o._originalDate||t,a=i.getTimezoneOffset();switch(n){case"z":case"zz":case"zzz":return"GMT"+yo(a,":");case"zzzz":default:return"GMT"+ot(a,":")}},t:function(t,n,r,o){var i=o._originalDate||t,a=Math.floor(i.getTime()/1e3);return X(a,n.length)},T:function(t,n,r,o){var i=o._originalDate||t,a=i.getTime();return X(a,n.length)}};function yo(e,t){var n=e>0?"-":"+",r=Math.abs(e),o=Math.floor(r/60),i=r%60;if(i===0)return n+String(o);var a=t||"";return n+String(o)+a+X(i,2)}function xo(e,t){if(e%60===0){var n=e>0?"-":"+";return n+X(Math.abs(e)/60,2)}return ot(e,t)}function ot(e,t){var n=t||"",r=e>0?"-":"+",o=Math.abs(e),i=X(Math.floor(o/60),2),a=X(o%60,2);return r+i+n+a}var wo=function(t,n){switch(t){case"P":return n.date({width:"short"});case"PP":return n.date({width:"medium"});case"PPP":return n.date({width:"long"});case"PPPP":default:return n.date({width:"full"})}},Ii=function(t,n){switch(t){case"p":return n.time({width:"short"});case"pp":return n.time({width:"medium"});case"ppp":return n.time({width:"long"});case"pppp":default:return n.time({width:"full"})}},yu=function(t,n){var r=t.match(/(P+)(p+)?/)||[],o=r[1],i=r[2];if(!i)return wo(t,n);var a;switch(o){case"P":a=n.dateTime({width:"short"});break;case"PP":a=n.dateTime({width:"medium"});break;case"PPP":a=n.dateTime({width:"long"});break;case"PPPP":default:a=n.dateTime({width:"full"});break}return a.replace("{{date}}",wo(o,n)).replace("{{time}}",Ii(i,n))},xu={p:Ii,P:yu},wu=["D","DD"],Cu=["YY","YYYY"];function $u(e){return wu.indexOf(e)!==-1}function Su(e){return Cu.indexOf(e)!==-1}function Co(e,t,n){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Tu={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ku=function(t,n,r){var o,i=Tu[t];return typeof i=="string"?o=i:n===1?o=i.one:o=i.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+o:o+" ago":o};const Du=ku;function be(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var Mu={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Pu={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Eu={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Ou={date:be({formats:Mu,defaultWidth:"full"}),time:be({formats:Pu,defaultWidth:"full"}),dateTime:be({formats:Eu,defaultWidth:"full"})};const Iu=Ou;var ju={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Lu=function(t,n,r,o){return ju[t]};const _u=Lu;function K(e){return function(t,n){var r=n!=null&&n.context?String(n.context):"standalone",o;if(r==="formatting"&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,a=n!=null&&n.width?String(n.width):i;o=e.formattingValues[a]||e.formattingValues[i]}else{var l=e.defaultWidth,c=n!=null&&n.width?String(n.width):e.defaultWidth;o=e.values[c]||e.values[l]}var u=e.argumentCallback?e.argumentCallback(t):t;return o[u]}}var Au={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Nu={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Ru={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},zu={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Hu={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Wu={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Fu=function(t,n){var r=Number(t),o=r%100;if(o>20||o<10)switch(o%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"},Bu={ordinalNumber:Fu,era:K({values:Au,defaultWidth:"wide"}),quarter:K({values:Nu,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:K({values:Ru,defaultWidth:"wide"}),day:K({values:zu,defaultWidth:"wide"}),dayPeriod:K({values:Hu,defaultWidth:"wide",formattingValues:Wu,defaultFormattingWidth:"wide"})};const Vu=Bu;function Z(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.width,o=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(o);if(!i)return null;var a=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(l)?qu(l,function(f){return f.test(a)}):Uu(l,function(f){return f.test(a)}),u;u=e.valueCallback?e.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u;var d=t.slice(a.length);return{value:u,rest:d}}}function Uu(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function qu(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}function Ft(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.match(e.matchPattern);if(!r)return null;var o=r[0],i=t.match(e.parsePattern);if(!i)return null;var a=e.valueCallback?e.valueCallback(i[0]):i[0];a=n.valueCallback?n.valueCallback(a):a;var l=t.slice(o.length);return{value:a,rest:l}}}var Yu=/^(\d+)(th|st|nd|rd)?/i,Xu=/\d+/i,Gu={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Qu={any:[/^b/i,/^(a|c)/i]},Ju={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Ku={any:[/1/i,/2/i,/3/i,/4/i]},Zu={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},eh={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},th={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},nh={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},rh={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},oh={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},ih={ordinalNumber:Ft({matchPattern:Yu,parsePattern:Xu,valueCallback:function(t){return parseInt(t,10)}}),era:Z({matchPatterns:Gu,defaultMatchWidth:"wide",parsePatterns:Qu,defaultParseWidth:"any"}),quarter:Z({matchPatterns:Ju,defaultMatchWidth:"wide",parsePatterns:Ku,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Z({matchPatterns:Zu,defaultMatchWidth:"wide",parsePatterns:eh,defaultParseWidth:"any"}),day:Z({matchPatterns:th,defaultMatchWidth:"wide",parsePatterns:nh,defaultParseWidth:"any"}),dayPeriod:Z({matchPatterns:rh,defaultMatchWidth:"any",parsePatterns:oh,defaultParseWidth:"any"})};const ah=ih;var sh={code:"en-US",formatDistance:Du,formatLong:Iu,formatRelative:_u,localize:Vu,match:ah,options:{weekStartsOn:0,firstWeekContainsDate:1}};const ji=sh;var lh=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ch=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,dh=/^'([^]*?)'?$/,uh=/''/g,hh=/[a-zA-Z]/;function fh(e,t,n){var r,o,i,a,l,c,u,d,f,v,m,b,g,y,w,S,C,M;me(2,arguments);var k=String(t),L=xn(),I=(r=(o=n==null?void 0:n.locale)!==null&&o!==void 0?o:L.locale)!==null&&r!==void 0?r:ji,D=at((i=(a=(l=(c=n==null?void 0:n.firstWeekContainsDate)!==null&&c!==void 0?c:n==null||(u=n.locale)===null||u===void 0||(d=u.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&l!==void 0?l:L.firstWeekContainsDate)!==null&&a!==void 0?a:(f=L.locale)===null||f===void 0||(v=f.options)===null||v===void 0?void 0:v.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(D>=1&&D<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var j=at((m=(b=(g=(y=n==null?void 0:n.weekStartsOn)!==null&&y!==void 0?y:n==null||(w=n.locale)===null||w===void 0||(S=w.options)===null||S===void 0?void 0:S.weekStartsOn)!==null&&g!==void 0?g:L.weekStartsOn)!==null&&b!==void 0?b:(C=L.locale)===null||C===void 0||(M=C.options)===null||M===void 0?void 0:M.weekStartsOn)!==null&&m!==void 0?m:0);if(!(j>=0&&j<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!I.localize)throw new RangeError("locale must contain localize property");if(!I.formatLong)throw new RangeError("locale must contain formatLong property");var V=Ne(e);if(!su(V))throw new RangeError("Invalid time value");var se=iu(V),P=lu(V,se),_={firstWeekContainsDate:D,weekStartsOn:j,locale:I,_originalDate:V},z=k.match(ch).map(function(R){var ee=R[0];if(ee==="p"||ee==="P"){var te=xu[ee];return te(R,I.formatLong)}return R}).join("").match(lh).map(function(R){if(R==="''")return"'";var ee=R[0];if(ee==="'")return gh(R);var te=bu[ee];if(te)return!(n!=null&&n.useAdditionalWeekYearTokens)&&Su(R)&&Co(R,t,String(e)),!(n!=null&&n.useAdditionalDayOfYearTokens)&&$u(R)&&Co(R,t,String(e)),te(P,R,I.localize,_);if(ee.match(hh))throw new RangeError("Format string contains an unescaped latin alphabet character `"+ee+"`");return R}).join("");return z}function gh(e){var t=e.match(dh);return t?t[1].replace(uh,"'"):e}function Xn(e,t,n){me(2,arguments);var r=Ct(e,n),o=Ct(t,n);return r.getTime()===o.getTime()}var $o={lessThanXSeconds:{standalone:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"},withPreposition:{one:"weniger als 1 Sekunde",other:"weniger als {{count}} Sekunden"}},xSeconds:{standalone:{one:"1 Sekunde",other:"{{count}} Sekunden"},withPreposition:{one:"1 Sekunde",other:"{{count}} Sekunden"}},halfAMinute:{standalone:"halbe Minute",withPreposition:"halben Minute"},lessThanXMinutes:{standalone:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"},withPreposition:{one:"weniger als 1 Minute",other:"weniger als {{count}} Minuten"}},xMinutes:{standalone:{one:"1 Minute",other:"{{count}} Minuten"},withPreposition:{one:"1 Minute",other:"{{count}} Minuten"}},aboutXHours:{standalone:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"},withPreposition:{one:"etwa 1 Stunde",other:"etwa {{count}} Stunden"}},xHours:{standalone:{one:"1 Stunde",other:"{{count}} Stunden"},withPreposition:{one:"1 Stunde",other:"{{count}} Stunden"}},xDays:{standalone:{one:"1 Tag",other:"{{count}} Tage"},withPreposition:{one:"1 Tag",other:"{{count}} Tagen"}},aboutXWeeks:{standalone:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"},withPreposition:{one:"etwa 1 Woche",other:"etwa {{count}} Wochen"}},xWeeks:{standalone:{one:"1 Woche",other:"{{count}} Wochen"},withPreposition:{one:"1 Woche",other:"{{count}} Wochen"}},aboutXMonths:{standalone:{one:"etwa 1 Monat",other:"etwa {{count}} Monate"},withPreposition:{one:"etwa 1 Monat",other:"etwa {{count}} Monaten"}},xMonths:{standalone:{one:"1 Monat",other:"{{count}} Monate"},withPreposition:{one:"1 Monat",other:"{{count}} Monaten"}},aboutXYears:{standalone:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahre"},withPreposition:{one:"etwa 1 Jahr",other:"etwa {{count}} Jahren"}},xYears:{standalone:{one:"1 Jahr",other:"{{count}} Jahre"},withPreposition:{one:"1 Jahr",other:"{{count}} Jahren"}},overXYears:{standalone:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahre"},withPreposition:{one:"mehr als 1 Jahr",other:"mehr als {{count}} Jahren"}},almostXYears:{standalone:{one:"fast 1 Jahr",other:"fast {{count}} Jahre"},withPreposition:{one:"fast 1 Jahr",other:"fast {{count}} Jahren"}}},ph=function(t,n,r){var o,i=r!=null&&r.addSuffix?$o[t].withPreposition:$o[t].standalone;return typeof i=="string"?o=i:n===1?o=i.one:o=i.other.replace("{{count}}",String(n)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"in "+o:"vor "+o:o};const mh=ph;var vh={full:"EEEE, do MMMM y",long:"do MMMM y",medium:"do MMM y",short:"dd.MM.y"},bh={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},yh={full:"{{date}} 'um' {{time}}",long:"{{date}} 'um' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},xh={date:be({formats:vh,defaultWidth:"full"}),time:be({formats:bh,defaultWidth:"full"}),dateTime:be({formats:yh,defaultWidth:"full"})};const wh=xh;var Ch={lastWeek:"'letzten' eeee 'um' p",yesterday:"'gestern um' p",today:"'heute um' p",tomorrow:"'morgen um' p",nextWeek:"eeee 'um' p",other:"P"},$h=function(t,n,r,o){return Ch[t]};const Sh=$h;var Th={narrow:["v.Chr.","n.Chr."],abbreviated:["v.Chr.","n.Chr."],wide:["vor Christus","nach Christus"]},kh={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. Quartal","2. Quartal","3. Quartal","4. Quartal"]},Gn={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mär","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],wide:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},Dh={narrow:Gn.narrow,abbreviated:["Jan.","Feb.","März","Apr.","Mai","Juni","Juli","Aug.","Sep.","Okt.","Nov.","Dez."],wide:Gn.wide},Mh={narrow:["S","M","D","M","D","F","S"],short:["So","Mo","Di","Mi","Do","Fr","Sa"],abbreviated:["So.","Mo.","Di.","Mi.","Do.","Fr.","Sa."],wide:["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"]},Ph={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachm.",evening:"Abend",night:"Nacht"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"Morgen",afternoon:"Nachmittag",evening:"Abend",night:"Nacht"}},Eh={narrow:{am:"vm.",pm:"nm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachm.",evening:"abends",night:"nachts"},abbreviated:{am:"vorm.",pm:"nachm.",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"},wide:{am:"vormittags",pm:"nachmittags",midnight:"Mitternacht",noon:"Mittag",morning:"morgens",afternoon:"nachmittags",evening:"abends",night:"nachts"}},Oh=function(t){var n=Number(t);return n+"."},Ih={ordinalNumber:Oh,era:K({values:Th,defaultWidth:"wide"}),quarter:K({values:kh,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:K({values:Gn,formattingValues:Dh,defaultWidth:"wide"}),day:K({values:Mh,defaultWidth:"wide"}),dayPeriod:K({values:Ph,defaultWidth:"wide",formattingValues:Eh,defaultFormattingWidth:"wide"})};const jh=Ih;var Lh=/^(\d+)(\.)?/i,_h=/\d+/i,Ah={narrow:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,abbreviated:/^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,wide:/^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i},Nh={any:[/^v/i,/^n/i]},Rh={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? Quartal/i},zh={any:[/1/i,/2/i,/3/i,/4/i]},Hh={narrow:/^[jfmasond]/i,abbreviated:/^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,wide:/^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i},Wh={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^j[aä]/i,/^f/i,/^mär/i,/^ap/i,/^mai/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Fh={narrow:/^[smdmf]/i,short:/^(so|mo|di|mi|do|fr|sa)/i,abbreviated:/^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,wide:/^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i},Bh={any:[/^so/i,/^mo/i,/^di/i,/^mi/i,/^do/i,/^f/i,/^sa/i]},Vh={narrow:/^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,abbreviated:/^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,wide:/^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i},Uh={any:{am:/^v/i,pm:/^n/i,midnight:/^Mitte/i,noon:/^Mitta/i,morning:/morgens/i,afternoon:/nachmittags/i,evening:/abends/i,night:/nachts/i}},qh={ordinalNumber:Ft({matchPattern:Lh,parsePattern:_h,valueCallback:function(t){return parseInt(t)}}),era:Z({matchPatterns:Ah,defaultMatchWidth:"wide",parsePatterns:Nh,defaultParseWidth:"any"}),quarter:Z({matchPatterns:Rh,defaultMatchWidth:"wide",parsePatterns:zh,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Z({matchPatterns:Hh,defaultMatchWidth:"wide",parsePatterns:Wh,defaultParseWidth:"any"}),day:Z({matchPatterns:Fh,defaultMatchWidth:"wide",parsePatterns:Bh,defaultParseWidth:"any"}),dayPeriod:Z({matchPatterns:Vh,defaultMatchWidth:"wide",parsePatterns:Uh,defaultParseWidth:"any"})};const Yh=qh;var Xh={code:"de",formatDistance:mh,formatLong:wh,formatRelative:Sh,localize:jh,match:Yh,options:{weekStartsOn:1,firstWeekContainsDate:4}};const Gh=Xh;var Qh={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 día",other:"{{count}} días"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 año",other:"alrededor de {{count}} años"},xYears:{one:"1 año",other:"{{count}} años"},overXYears:{one:"más de 1 año",other:"más de {{count}} años"},almostXYears:{one:"casi 1 año",other:"casi {{count}} años"}},Jh=function(t,n,r){var o,i=Qh[t];return typeof i=="string"?o=i:n===1?o=i.one:o=i.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"en "+o:"hace "+o:o};const Kh=Jh;var Zh={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},ef={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},tf={full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},nf={date:be({formats:Zh,defaultWidth:"full"}),time:be({formats:ef,defaultWidth:"full"}),dateTime:be({formats:tf,defaultWidth:"full"})};const rf=nf;var of={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'mañana a la' p",nextWeek:"eeee 'a la' p",other:"P"},af={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'mañana a las' p",nextWeek:"eeee 'a las' p",other:"P"},sf=function(t,n,r,o){return n.getUTCHours()!==1?af[t]:of[t]};const lf=sf;var cf={narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","después de cristo"]},df={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},uf={narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},hf={narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","sá"],abbreviated:["dom","lun","mar","mié","jue","vie","sáb"],wide:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]},ff={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"mañana",afternoon:"tarde",evening:"tarde",night:"noche"}},gf={narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la mañana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},pf=function(t,n){var r=Number(t);return r+"º"},mf={ordinalNumber:pf,era:K({values:cf,defaultWidth:"wide"}),quarter:K({values:df,defaultWidth:"wide",argumentCallback:function(t){return Number(t)-1}}),month:K({values:uf,defaultWidth:"wide"}),day:K({values:hf,defaultWidth:"wide"}),dayPeriod:K({values:ff,defaultWidth:"wide",formattingValues:gf,defaultFormattingWidth:"wide"})};const vf=mf;var bf=/^(\d+)(º)?/i,yf=/\d+/i,xf={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i},wf={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[uú]n)/i,/^(despu[eé]s de cristo|era com[uú]n)/i]},Cf={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},$f={any:[/1/i,/2/i,/3/i,/4/i]},Sf={narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},Tf={narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},kf={narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[áa])/i,abbreviated:/^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,wide:/^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i},Df={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},Mf={narrow:/^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i},Pf={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},Ef={ordinalNumber:Ft({matchPattern:bf,parsePattern:yf,valueCallback:function(t){return parseInt(t,10)}}),era:Z({matchPatterns:xf,defaultMatchWidth:"wide",parsePatterns:wf,defaultParseWidth:"any"}),quarter:Z({matchPatterns:Cf,defaultMatchWidth:"wide",parsePatterns:$f,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Z({matchPatterns:Sf,defaultMatchWidth:"wide",parsePatterns:Tf,defaultParseWidth:"any"}),day:Z({matchPatterns:kf,defaultMatchWidth:"wide",parsePatterns:Df,defaultParseWidth:"any"}),dayPeriod:Z({matchPatterns:Mf,defaultMatchWidth:"any",parsePatterns:Pf,defaultParseWidth:"any"})};const Of=Ef;var If={code:"es",formatDistance:Kh,formatLong:rf,formatRelative:lf,localize:vf,match:Of,options:{weekStartsOn:1,firstWeekContainsDate:1}};const jf=If;var Lf={lessThanXSeconds:{one:"meno di un secondo",other:"meno di {{count}} secondi"},xSeconds:{one:"un secondo",other:"{{count}} secondi"},halfAMinute:"alcuni secondi",lessThanXMinutes:{one:"meno di un minuto",other:"meno di {{count}} minuti"},xMinutes:{one:"un minuto",other:"{{count}} minuti"},aboutXHours:{one:"circa un'ora",other:"circa {{count}} ore"},xHours:{one:"un'ora",other:"{{count}} ore"},xDays:{one:"un giorno",other:"{{count}} giorni"},aboutXWeeks:{one:"circa una settimana",other:"circa {{count}} settimane"},xWeeks:{one:"una settimana",other:"{{count}} settimane"},aboutXMonths:{one:"circa un mese",other:"circa {{count}} mesi"},xMonths:{one:"un mese",other:"{{count}} mesi"},aboutXYears:{one:"circa un anno",other:"circa {{count}} anni"},xYears:{one:"un anno",other:"{{count}} anni"},overXYears:{one:"più di un anno",other:"più di {{count}} anni"},almostXYears:{one:"quasi un anno",other:"quasi {{count}} anni"}},_f=function(t,n,r){var o,i=Lf[t];return typeof i=="string"?o=i:n===1?o=i.one:o=i.other.replace("{{count}}",n.toString()),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?"tra "+o:o+" fa":o};const Af=_f;var Nf={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},Rf={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},zf={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Hf={date:be({formats:Nf,defaultWidth:"full"}),time:be({formats:Rf,defaultWidth:"full"}),dateTime:be({formats:zf,defaultWidth:"full"})};const Wf=Hf;var $r=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"];function Ff(e){switch(e){case 0:return"'domenica scorsa alle' p";default:return"'"+$r[e]+" scorso alle' p"}}function So(e){return"'"+$r[e]+" alle' p"}function Bf(e){switch(e){case 0:return"'domenica prossima alle' p";default:return"'"+$r[e]+" prossimo alle' p"}}var Vf={lastWeek:function(t,n,r){var o=t.getUTCDay();return Xn(t,n,r)?So(o):Ff(o)},yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:function(t,n,r){var o=t.getUTCDay();return Xn(t,n,r)?So(o):Bf(o)},other:"P"},Uf=function(t,n,r,o){var i=Vf[t];return typeof i=="function"?i(n,r,o):i};const qf=Uf;var Yf={narrow:["aC","dC"],abbreviated:["a.C.","d.C."],wide:["avanti Cristo","dopo Cristo"]},Xf={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1º trimestre","2º trimestre","3º trimestre","4º trimestre"]},Gf={narrow:["G","F","M","A","M","G","L","A","S","O","N","D"],abbreviated:["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],wide:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"]},Qf={narrow:["D","L","M","M","G","V","S"],short:["dom","lun","mar","mer","gio","ven","sab"],abbreviated:["dom","lun","mar","mer","gio","ven","sab"],wide:["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"]},Jf={narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"mattina",afternoon:"pomeriggio",evening:"sera",night:"notte"}},Kf={narrow:{am:"m.",pm:"p.",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},abbreviated:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"},wide:{am:"AM",pm:"PM",midnight:"mezzanotte",noon:"mezzogiorno",morning:"di mattina",afternoon:"del pomeriggio",evening:"di sera",night:"di notte"}},Zf=function(t,n){var r=Number(t);return String(r)},eg={ordinalNumber:Zf,era:K({values:Yf,defaultWidth:"wide"}),quarter:K({values:Xf,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:K({values:Gf,defaultWidth:"wide"}),day:K({values:Qf,defaultWidth:"wide"}),dayPeriod:K({values:Jf,defaultWidth:"wide",formattingValues:Kf,defaultFormattingWidth:"wide"})};const tg=eg;var ng=/^(\d+)(º)?/i,rg=/\d+/i,og={narrow:/^(aC|dC)/i,abbreviated:/^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,wide:/^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i},ig={any:[/^a/i,/^(d|e)/i]},ag={narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](º)? trimestre/i},sg={any:[/1/i,/2/i,/3/i,/4/i]},lg={narrow:/^[gfmalsond]/i,abbreviated:/^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,wide:/^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i},cg={narrow:[/^g/i,/^f/i,/^m/i,/^a/i,/^m/i,/^g/i,/^l/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ge/i,/^f/i,/^mar/i,/^ap/i,/^mag/i,/^gi/i,/^l/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},dg={narrow:/^[dlmgvs]/i,short:/^(do|lu|ma|me|gi|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|gio|ven|sab)/i,wide:/^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i},ug={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^g/i,/^v/i,/^s/i],any:[/^d/i,/^l/i,/^ma/i,/^me/i,/^g/i,/^v/i,/^s/i]},hg={narrow:/^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,any:/^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i},fg={any:{am:/^a/i,pm:/^p/i,midnight:/^mezza/i,noon:/^mezzo/i,morning:/mattina/i,afternoon:/pomeriggio/i,evening:/sera/i,night:/notte/i}},gg={ordinalNumber:Ft({matchPattern:ng,parsePattern:rg,valueCallback:function(t){return parseInt(t,10)}}),era:Z({matchPatterns:og,defaultMatchWidth:"wide",parsePatterns:ig,defaultParseWidth:"any"}),quarter:Z({matchPatterns:ag,defaultMatchWidth:"wide",parsePatterns:sg,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Z({matchPatterns:lg,defaultMatchWidth:"wide",parsePatterns:cg,defaultParseWidth:"any"}),day:Z({matchPatterns:dg,defaultMatchWidth:"wide",parsePatterns:ug,defaultParseWidth:"any"}),dayPeriod:Z({matchPatterns:hg,defaultMatchWidth:"any",parsePatterns:fg,defaultParseWidth:"any"})};const pg=gg;var mg={code:"it",formatDistance:Af,formatLong:Wf,formatRelative:qf,localize:tg,match:pg,options:{weekStartsOn:1,firstWeekContainsDate:4}};const vg=mg;var bg={lessThanXSeconds:{one:"不到 1 秒",other:"不到 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分钟",lessThanXMinutes:{one:"不到 1 分钟",other:"不到 {{count}} 分钟"},xMinutes:{one:"1 分钟",other:"{{count}} 分钟"},xHours:{one:"1 小时",other:"{{count}} 小时"},aboutXHours:{one:"大约 1 小时",other:"大约 {{count}} 小时"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXWeeks:{one:"大约 1 个星期",other:"大约 {{count}} 个星期"},xWeeks:{one:"1 个星期",other:"{{count}} 个星期"},aboutXMonths:{one:"大约 1 个月",other:"大约 {{count}} 个月"},xMonths:{one:"1 个月",other:"{{count}} 个月"},aboutXYears:{one:"大约 1 年",other:"大约 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超过 1 年",other:"超过 {{count}} 年"},almostXYears:{one:"将近 1 年",other:"将近 {{count}} 年"}},yg=function(t,n,r){var o,i=bg[t];return typeof i=="string"?o=i:n===1?o=i.one:o=i.other.replace("{{count}}",String(n)),r!=null&&r.addSuffix?r.comparison&&r.comparison>0?o+"内":o+"前":o};const xg=yg;var wg={full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},Cg={full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},$g={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Sg={date:be({formats:wg,defaultWidth:"full"}),time:be({formats:Cg,defaultWidth:"full"}),dateTime:be({formats:$g,defaultWidth:"full"})};const Tg=Sg;function To(e,t,n){var r="eeee p";return Xn(e,t,n)?r:e.getTime()>t.getTime()?"'下个'"+r:"'上个'"+r}var kg={lastWeek:To,yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:To,other:"PP p"},Dg=function(t,n,r,o){var i=kg[t];return typeof i=="function"?i(n,r,o):i};const Mg=Dg;var Pg={narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},Eg={narrow:["1","2","3","4"],abbreviated:["第一季","第二季","第三季","第四季"],wide:["第一季度","第二季度","第三季度","第四季度"]},Og={narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},Ig={narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["周日","周一","周二","周三","周四","周五","周六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},jg={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},Lg={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},_g=function(t,n){var r=Number(t);switch(n==null?void 0:n.unit){case"date":return r.toString()+"日";case"hour":return r.toString()+"时";case"minute":return r.toString()+"分";case"second":return r.toString()+"秒";default:return"第 "+r.toString()}},Ag={ordinalNumber:_g,era:K({values:Pg,defaultWidth:"wide"}),quarter:K({values:Eg,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:K({values:Og,defaultWidth:"wide"}),day:K({values:Ig,defaultWidth:"wide"}),dayPeriod:K({values:jg,defaultWidth:"wide",formattingValues:Lg,defaultFormattingWidth:"wide"})};const Ng=Ag;var Rg=/^(第\s*)?\d+(日|时|分|秒)?/i,zg=/\d+/i,Hg={narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},Wg={any:[/^(前)/i,/^(公元)/i]},Fg={narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻钟/i},Bg={any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},Vg={narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},Ug={narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},qg={narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^周[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},Yg={any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},Xg={any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i},Gg={any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},Qg={ordinalNumber:Ft({matchPattern:Rg,parsePattern:zg,valueCallback:function(t){return parseInt(t,10)}}),era:Z({matchPatterns:Hg,defaultMatchWidth:"wide",parsePatterns:Wg,defaultParseWidth:"any"}),quarter:Z({matchPatterns:Fg,defaultMatchWidth:"wide",parsePatterns:Bg,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Z({matchPatterns:Vg,defaultMatchWidth:"wide",parsePatterns:Ug,defaultParseWidth:"any"}),day:Z({matchPatterns:qg,defaultMatchWidth:"wide",parsePatterns:Yg,defaultParseWidth:"any"}),dayPeriod:Z({matchPatterns:Xg,defaultMatchWidth:"any",parsePatterns:Gg,defaultParseWidth:"any"})};const Jg=Qg;var Kg={code:"zh-CN",formatDistance:xg,formatLong:Tg,formatRelative:Mg,localize:Ng,match:Jg,options:{weekStartsOn:1,firstWeekContainsDate:4}};const Zg=Kg,Li=(e,t,n)=>{var i;const r=n||((i=oi.get()[ii])==null?void 0:i.slice(0,2))||"en",o=ep[r];return fh(e,_i[t][r],{locale:o})},bw=(e,t)=>{var r;const n=t||((r=oi.get()[ii])==null?void 0:r.slice(0,2))||"en";return _i[e][n]},ep={en:ji,es:jf,de:Gh,it:vg,zh:Zg},_i={completeLong:{en:"MMMM d, yyyy h:mm aaa",es:"dd MMMM yyyy H:mm",de:"dd MMMM yyyy H:mm",it:"dd MMMM yyyy H:mm",zh:"yyyy MMMM dd H:mm"},completeShort:{en:"MMMM yyyy",es:"MMMM yyyy",de:"MMMM yyyy",it:"MMMM yyyy",zh:"yyyy MMMM"},completeStandard:{en:"MMMM d, yyyy",es:"dd MMMM yyyy",de:"dd MMMM yyyy",it:"dd MMMM yyyy",zh:"yyyy MMMM dd"},short:{en:"MMM yyyy",es:"MMM yyyy",de:"MMM yyyy",it:"MMM yyyy",zh:"yyyy MMM"},standard:{en:"MMM d, yyyy",es:"dd MMM yyyy",de:"dd MMM yyyy",it:"dd MMM yyyy",zh:"yyyy MMM dd"},standardShort:{en:"MMM d",es:"dd MMM",de:"dd MMM",it:"dd MMM",zh:"MMM dd"},shortNumeric:{en:"MM/yyyy",es:"MM.yyyy",de:"MM.yyyy",it:"MM.yyyy",zh:"yyyy.MM"},standardNumeric:{en:"MM/dd/yyyy",es:"dd.MM.yyyy",de:"dd.MM.yyyy",it:"dd.MM.yyyy",zh:"yyyy.MM.dd"},monthNumeric:{en:"MM/dd",es:"dd.MM",de:"dd.MM",it:"dd.MM",zh:"MM.dd"},timeShort:{en:"h a",es:"H",de:"H",it:"H",zh:"H"},time:{en:"h:mm aaa",es:"H:mm",de:"H:mm",it:"H:mm",zh:"H:mm"},compactShort:{en:"EEEE, MMM d",es:"EEEE, dd MMM",de:"EEEE, dd MMM",it:"EEEE, dd MMM",zh:"EEEE, MMM dd"}},tp=h.forwardRef(({children:e,checked:t,tooltip:n,tooltipProps:r,toggleSize:o="50",lock:i,onLock:a,...l},c)=>{const u=i?a:l.onClick,d=i?s.jsx(zt,{type:"tertiary"}):l.icon,f=e?"tertiary":"icon";return s.jsx(np,{content:n,...r,children:s.jsx(op,{...l,onClick:u,icon:d,ref:c,size:"100",$toggleSize:o,buttonType:f,$checked:t,type:"button",children:e})})}),np=({children:e,content:t,...n})=>t?s.jsx("div",{children:s.jsx(ai,{placement:"top",maxWidth:500,content:t,...n,children:e})}):s.jsx(s.Fragment,{children:e}),rp={50:T`
    padding: 4px 6px;
    min-height: 26px;
    min-width: 26px;
  `,100:T`
    padding: 7px 16px;
    min-height: 32px;
    min-width: 32px;
  `},op=p(J)(({theme:{systemColors:e},$checked:t,buttonType:n,$toggleSize:r})=>T`
    ${Ht};
    border: none;
    color: ${e.grey800};
    border-radius: 40px;
    z-index: 1;
    background-color: transparent;
    transition-duration: 0s;
    ${rp[r]};

    ${n==="icon"&&T`
      height: 26px;
      &&& {
        width: 26px;
      }
    `}

    //State: keyboard focus
    &:focus-visible {
      box-shadow: 0 0 0 3px transparent;
    }

    &:hover {
      background-color: ${e.grey300};
      transition: all 0.2s ease-in-out;
    }

    &:focus,
    &:focus-visible {
      background-color: ${e.grey300};
      transition-duration: 0s;
    }

    &:active {
      background-color: ${e.grey400};
      transition: 0s;
    }

    &:disabled {
      background-color: ${e.grey200};
    }

    ${t&&T`
      font-weight: 700;
      background-color: transparent;
      color: ${e.black};

      &:focus,
      &:hover {
        background-color: transparent;
        color: ${e.black};
        z-index: 1;
      }

      &:disabled {
        background-color: ${e.grey300};
        color: ${e.grey400};
      }
    `}
  `),Sr=p(tp)``,ip=e=>{const{value:t,buttons:n=[],onChange:r,disabled:o,className:i,size:a="50"}=e,[l,c]=h.useState(void 0);return h.useEffect(()=>{const u=n==null?void 0:n.reduce((d,f,v)=>f.value===t?v:d,void 0);c(u)},[n,t]),s.jsxs(Ai,{$disabled:o,className:i,$size:a,children:[n.map(u=>{const d=t===u.value,f=d?void 0:()=>r==null?void 0:r(u.value);return h.createElement(Sr,{disabled:o,...u,toggleSize:a,key:u.value,onClick:f,checked:d})}),l!==void 0&&s.jsx(lp,{active:l,count:n==null?void 0:n.length,padding:ap[a]})]})},ap={50:3,100:4},sp={50:T`
    padding: 3px;
  `,100:T`
    padding: 4px;
  `},Ai=p.div(({theme:{systemColors:e},$disabled:t,$size:n})=>T`
    position: relative;
    width: 100%;
    display: inline-grid;
    grid-auto-columns: 1fr;
    background-color: ${e.grey200};
    border-radius: 40px;
    ${sp[n]};

    & > * {
      grid-row: 1;
    }

    &:active {
      box-shadow: none;
    }

    ${t&&T`
      background-color: ${e.grey200};
    `}
    ${Sr} {
      width: 100%;
    }
  `),lp=p.div`
  background-color: white;
  position: absolute;
  z-index: 0;
  width: 0;
  top: 0;
  border-radius: 40px;
  transition: left 0.4s ease;
  bottom: ${({padding:e})=>`${e}px`};

  ${({count:e,active:t,padding:n})=>e&&t!==void 0&&T`
      width: calc((100% - ${n*2}px) / ${e});
      left: calc(${n}px + ((100% - ${n*2}px) / ${e}) * ${t});
    `};
`,cp=Object.assign(ip,{Wrapper:Ai,Button:Sr}),dp=e=>{const[t,n]=h.useState(!1),r={fn:()=>({onMount:()=>n(!0),onHidden:()=>n(!1)})},o={...e};if(o.plugins=[r,...e.plugins||[]],e.render){const i=e.render;o.render=(...a)=>t?i(...a):""}else o.content=t?e.content:"";return s.jsx(cl,{...o})},up=h.forwardRef(({width:e,className:t,onClick:n,children:r},o)=>s.jsx(hp,{className:t,onClick:n,ref:o,children:s.jsx(Ni,{$width:e,children:r})})),hp=p.div``,Ni=p.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  min-width: ${({$width:e})=>e?e+"px":"100%"};

  padding: ${e=>e.theme.spacing.sp8} 0;
  border-radius: 6px;
  ${si};
  border: solid 1px ${e=>e.theme.systemColors.grey200};
  background-color: ${e=>e.theme.systemColors.white};
`,fp=({closeByChildrenClick:e=!0,closeButton:t=!1,imperativeRef:n,...r})=>{const o=h.useRef(null),[i,a]=h.useState(!1),l=b=>{b.stopPropagation(),a(!1)},c=()=>a(b=>!b),u=ur({Enter:c});h.useEffect(()=>{r.visible!==void 0&&a(r.visible)},[r.visible]),h.useImperativeHandle(n,()=>({open:()=>a(!0),close:()=>a(!1)}));const d=h.useContext(li),f=h.useRef(null),v=h.useCallback((b,g)=>{var y,w,S,C,M;if(g==null||g.stopPropagation(),((y=r.tippy)==null?void 0:y.appendTo)==="parent"&&(!f.current||(S=f.current)!=null&&S.contains(((w=g.path)==null?void 0:w[0])||g.target)))return!1;(C=r.tippy)!=null&&C.onClickOutside?(M=r.tippy)==null||M.onClickOutside(b,g):a(!1)},[r.tippy]),m=h.useMemo(()=>({animation:!1,delay:[0,0],zIndex:ci.dropdown,interactive:!0,interactiveBorder:20,appendTo:"parent",placement:"bottom-start",offset:[0,8]}),[]);return s.jsx(gp,{className:r.className,ref:f,children:s.jsx(dp,{visible:i,...m,...d==null?void 0:d.dropdowns,...r.tippy,onClickOutside:v,render:b=>{var g,y;return s.jsxs(up,{...b,className:r.className,width:(g=r.dropdown)!=null&&g.autoWidth?0:(y=o.current)==null?void 0:y.clientWidth,onClick:e?l:()=>{},children:[s.jsx(mp,{children:r.items}),t&&s.jsx(yp,{buttonType:"icon",size:"100",icon:s.jsx(G,{icon:Wt}),onClick:l})]})},children:s.jsx(pp,{onKeyDown:u,onClick:c,"data-testid":"open-button",children:r.children})})})},gp=p.div``,pp=p.div``,mp=p.div``,vp=p.div`
  ${Me};
  min-height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
  transition: all 0.2s ease-in-out;

  padding: 0 ${e=>e.theme.spacing.sp16};

  & > div,
  & > span {
    padding: 0 ${e=>e.theme.spacing.sp16};
  }

  &:hover {
    background-color: ${e=>e.theme.systemColors.grey100};
  }
`,bp=p.div`
  height: 1px;
  margin: ${e=>e.theme.spacing.sp8} -${e=>e.theme.spacing.sp8};
  background-color: ${e=>e.theme.systemColors.grey200};
`,yp=p(J)`
  flex: 0 0 auto;
  position: absolute;
  right: ${({theme:e})=>e.spacing.sp8};
  top: ${({theme:e})=>e.spacing.sp8};
`,gn=Object.assign(fp,{Item:vp,Dropdown:Ni,Divider:bp}),xp=p.div`
  ${Me};
  min-height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
  transition: all 0.2s ease-in-out;
  line-height: 1.25;

  padding: 6px ${e=>e.theme.spacing.sp16};

  & > div,
  & > span {
    padding: 0 ${e=>e.theme.spacing.sp16};
  }

  &:hover {
    background-color: ${e=>e.theme.systemColors.grey100};
  }
`,wp=p.div`
  height: 1px;
  margin: ${e=>e.theme.spacing.sp8} -${e=>e.theme.spacing.sp8};
  background-color: ${e=>e.theme.systemColors.grey200};
`,Cp=p(J)`
  flex: 0 0 auto;
  position: absolute;
  right: ${e=>e.theme.spacing.sp8};
  top: ${e=>e.theme.spacing.sp8};
`,$p=p.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  max-width: ${e=>jn(e.$maxWidth)?e.$maxWidth+"px":"100%"};
  padding: ${e=>e.theme.spacing.sp8} 0;
  border-radius: 6px;
  border: solid 1px ${e=>e.theme.systemColors.grey200};
  background-color: ${e=>e.theme.systemColors.white};
  ${si};

  min-width: ${e=>jn(e.$maxWidth)?e.$maxWidth+"px":"auto"};
  max-width: ${e=>jn(e.$maxWidth)?e.$maxWidth+"px":"auto"};
`,Sp=({children:e,content:t,offset:n,placement:r="bottom-start",strategy:o,open:i,onOpenChange:a,clickable:l=!0,focusable:c=!0,hoverable:u=!1,delay:d,hideOnClickOutside:f=!0,appendTo:v="parent",zIndex:m=ci.dropdown,className:b,closeButton:g=!1,minWidth:y,maxWidth:w,hideOnClick:S=!0})=>{var E,$,F,O,N,H;const C=h.useContext(li),[M,k]=ul({defaultValue:!1,value:i,onChange:a}),{refs:L,floatingStyles:I,context:D}=hl({open:M,onOpenChange:k,placement:r||((E=C==null?void 0:C.dropdowns)==null?void 0:E.placement),strategy:o||((F=($=C==null?void 0:C.dropdowns)==null?void 0:$.popperOptions)==null?void 0:F.strategy),whileElementsMounted:fl,middleware:[gl(n??10),pl({fallbackAxisSideDirection:"start"})]}),j=ml({context:D,hoverable:u,delay:d,interactive:!0}),V=vl(D,{enabled:f}),se=bl(D,{enabled:c}),P=yl(D,{enabled:l}),{getReferenceProps:_,getFloatingProps:z}=xl([j,P,V,se]),R=h.useMemo(()=>({...I,zIndex:m}),[I,m]),ee=s.jsx("div",{ref:L.setFloating,...z(),style:R,children:s.jsxs($p,{onClick:S?()=>k(!1):void 0,className:b,$maxWidth:w==="reference"?(O=L.reference.current)==null?void 0:O.getBoundingClientRect().width:w,$minWidth:y==="reference"?(N=L.reference.current)==null?void 0:N.getBoundingClientRect().width:y,children:[t,g&&s.jsx(Cp,{buttonType:"icon",size:"100",icon:s.jsx(G,{icon:Wt}),onClick:()=>k(!1)})]})}),te=h.useMemo(()=>h.cloneElement(e,{..._(),ref:L.setReference}),[e,_,L.setReference]),ne=v||((H=C==null?void 0:C.tooltips)==null?void 0:H.appendTo);return s.jsxs(s.Fragment,{children:[te,M&&(ne==="parent"?ee:s.jsx(wl,{root:ne,children:ee}))]})},Tp=Object.assign(dl(Sp),{Item:xp,Divider:wp}),yw=e=>s.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[s.jsx("path",{d:"M17.54 17.009C17.196 17.455 14.415 20 9.75 20c-4.666 0-8.237-3.192-9.33-4.509-.304-.344.044-.504.245-.37 3.272 1.986 8.384 5.258 16.63 1.352.334-.165.593.09.245.536Zm1.777.098c-.29.706-.715 1.197-.947 1.384-.245.201-.424.12-.29-.17.134-.29.862-2.075.567-2.455-.29-.37-1.652-.192-2.143-.143-.482.045-.58.09-.625-.013-.103-.255.969-.692 1.674-.781.701-.08 1.83-.036 2.054.254.165.228 0 1.21-.29 1.924Z",fill:"#F90"}),s.jsx("path",{d:"M11.468 5.835c-2.174.08-7.567.692-7.567 5.245 0 4.889 6.174 5.09 8.192 1.929.29.455 1.58 1.674 2.023 2.09l2.535-2.5s-1.442-1.13-1.442-2.358V3.674C15.21 2.544 14.116 0 10.196 0 6.267 0 4.183 2.455 4.183 4.656l3.28.304c.729-2.21 2.42-2.21 2.42-2.21 1.817-.004 1.585 1.33 1.585 3.085Zm0 3.875c0 3.571-3.759 3.036-3.759.768 0-2.107 2.255-2.532 3.76-2.58V9.71h-.001Z",fill:"#343A40"})]}),kp=({status:e,error:t,centerContent:n,children:r})=>{const o=n?Qn:h.Fragment;return s.jsxs(s.Fragment,{children:[Dp.includes(e)&&s.jsx(zi,{children:s.jsx(Pp,{})}),e==="error"&&s.jsx(Qn,{children:t}),Mp.includes(e)&&s.jsx(o,{children:r})]})},Dp=["loading","waiting"],Mp=["init","loaded","waiting","progress"],Ri=p.div`
  ${Me};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,zi=p(Ri)`
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.6);
`,Pp=p(rc)`
  width: 40px;
  height: 40px;
`,Qn=p(Ri)`
  min-height: 40px;
  padding: ${({theme:{spacing:{sp8:e,sp16:t}}})=>`${e} ${t}`};
`,xw=Object.assign(kp,{LoaderWrapper:zi,ErrorWrapper:Qn}),Tr=p.div`
  display: grid;
  grid-template-columns: repeat(${({$columnsCount:e})=>e}, auto);
  border-style: solid;
  border-width: 0;
  border-color: transparent;
  position: sticky;
  z-index: 10;
  min-width: 0;
  align-items: stretch;
  width: ${({$width:e})=>e?`${e}px`:"auto"};
  top: 0;
`,ko={compact:{solid:"2px 0px",default:"2px 4px"},normal:{solid:"8px 0px",default:"8px 16px"}},Ep={compact:"13px",normal:"14px"},Hi={compact:"2px 8px 2px 8px",normal:"8px 14px 7px 14px"},Op={compact:"32px",normal:"48px"},Wi=e=>e?isNaN(Number(e))?e:`${e}px`:"auto",Ip=p.div`
  padding: ${({$solid:e,$compact:t="normal"})=>e?ko[t].solid:ko[t].default};
  display: flex;
  //flex-wrap: wrap;
  font-size: ${({$compact:e="normal"})=>Ep[e]};
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.systemColors.black};
  justify-content: ${e=>e.$contentPosition==="right"?"flex-end":e.$contentPosition==="center"?"center":"flex-start"};
  background-color: ${({theme:e,$hovered:t,$checked:n})=>n?`${e.systemColors.blue50} !important`:t?`${e.systemColors.grey50} !important`:`${e.systemColors.white}`};
  transition: background-color 0.2s ease-in-out;

  ${({$active:e,theme:t,$last:n})=>e&&`
    border-top: 2px solid ${t.systemColors.blue600} !important;
    border-bottom: 2px solid ${t.systemColors.blue600} !important;
    ${n&&`border-right: 2px solid ${t.systemColors.blue600} !important;`}
  `}

  ${({$sticky:e})=>e&&`
    position: sticky;
    top: ${e}px;
    z-index: 11;
  `}
`,Ie=p(Ip)`
  width: ${({$width:e,$responsive:t})=>t?"auto":Wi(e)};
  ${e=>e.$customCSS}
`,_t=p.div`
  display: contents;

  & > ${Ie}:last-child {
    border-right: none;
  }

  & .hover-item {
    display: none;
  }

  & .hover-opacity-item {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  & .reverse-hover-opacity-item {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover {
    ${Ie} {
      ${({theme:e,$checked:t,$noHover:n})=>!t&&!n&&T`
          background-color: ${e.systemColors.grey50} !important;
        `}
    }

    & .reverse-hover-item {
      display: none;
    }

    & .hover-item {
      display: block;
    }

    & .hover-opacity-item {
      opacity: 1;
    }

    & .reverse-hover-opacity-item {
      opacity: 0;
    }
  }

  ${Ie} {
    border-bottom: 1px solid ${e=>e.theme.systemColors.grey200};
    ${({theme:e,$checked:t})=>t&&T`
        background-color: ${e.systemColors.blue50} !important;
      `};
  }
`,jp=p.div`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`,At=p(Ie)`
  position: sticky;
  top: 0;
  z-index: 1;
  font-weight: bold;
  color: ${({theme:e,$isDrag:t})=>t?e.systemColors.white:e.systemColors.grey800};
  background-color: ${({theme:e})=>e.systemColors.grey100};
  user-select: none;
  cursor: ${e=>e.$pointer?"pointer":"default"} !important;
  height: ${({$compact:e="normal"})=>Op[e]};
  ${({$padding:e})=>(e==null?void 0:e.left)&&T`
      padding-left: ${e==null?void 0:e.left}px;
    `};

  ${({$padding:e})=>(e==null?void 0:e.right)&&T`
      padding-right: ${e==null?void 0:e.right}px;
    `}
  &:hover,
  &:focus {
    ${jp} {
      opacity: 1;
    }
  }

  background-color: ${({theme:e,$isHovered:t})=>t?e.systemColors.grey200:e.systemColors.grey100};

  &:hover {
    ${({theme:e,$isDrag:t})=>t&&T`
        background-color: ${e.systemColors.blue600};
      `}
  }

  ${({$isDrag:e})=>e&&T`
      background-color: ${({theme:t})=>t.systemColors.blue600};
    `}

  ${({$isDrag:e,$dragWidth:t})=>e&&t&&T`
      width: ${t}px;
    `}

  ${({$fixedWidth:e})=>e&&T`
      width: ${e}px;
    `}
`,wn=p.div`
  display: grid;
  grid-template-columns: ${({$columnsStyle:e})=>e};
  border-top: 1px solid ${({theme:e})=>e.systemColors.grey200};
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  border-bottom: 1px solid ${({theme:e})=>e.systemColors.grey200};
  border-bottom: none;
  overflow: auto;
  width: 100%;
  align-items: stretch;
  grid-auto-rows: min-content;
  flex-grow: 1;

  & > ${Tr} {
    min-width: auto;
  }

  & > div:nth-child(${({$columnsCount:e})=>e}) {
    border-right: none;

    & div {
      border-right: none;
    }
  }

  & ${_t}:nth-child(${({$columnsCount:e})=>e%2?"2n+1":"2n"}) {
    ${Ie} {
      /* background-color: ${({theme:e})=>e.systemColors.grey100}; */
    }
  }

  & ${_t} ${Ie} {
    height: ${({$cellHeight:e})=>e?`${e}px`:"initial"};
  }
`,kr=p.div``,Lp=e=>wi({value:e,style:"percent",maximumFractionDigits:2,minimumFractionDigits:0,invalidValue:"-"}),_p=e=>e?Li(new Date(e),"standard"):"-",Ap=e=>e?Li(new Date(e),"completeShort"):"-",Np=({field:e,data:t,hovered:n,marketplace:r,compact:o,action:i,checked:a,active:l,last:c,sticky:u,column:d,render:f})=>{const v=h.useMemo(()=>f==null?void 0:f(t,i),[i,t,f]),m=lr(t,e),b=typeof d.customCSS=="function"?d.customCSS(t,i):d.customCSS;let g="";return v||v===null?g=v:d.type==="text"?g=m:d.type==="currency"?g=Cl({amount:m,currency:r==null?void 0:r.currency,invalidValue:"-"}):d.type==="number"?g=wi({value:m,invalidValue:"-"}):d.type==="date"?g=_p(m):d.type==="datetime"?g=Ap(m):d.type==="percent"&&(g=Lp(m)),s.jsx(Ie,{$width:d.static||d.staticRight||d.width,$responsive:d.responsive,$solid:d.noHeader,$hovered:!d.noHeader&&n,$compact:o,$contentPosition:d.contentPosition,$last:c,$checked:a,$active:l,$sticky:u,"data-testid":`table-cell-${e}`,$customCSS:b,children:g})},Dr=h.memo(Np);function Fi(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=Fi(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ke(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=Fi(e))&&(r&&(r+=" "),r+=t);return r}const Nt=e=>typeof e=="number"&&!isNaN(e),it=e=>typeof e=="string",we=e=>typeof e=="function",on=e=>it(e)||we(e)?e:null,Jn=e=>h.isValidElement(e)||it(e)||we(e)||Nt(e);function Rp(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:o}=e;requestAnimationFrame(()=>{o.minHeight="initial",o.height=r+"px",o.transition=`all ${n}ms`,requestAnimationFrame(()=>{o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)})})}function Cn(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:o=!0,collapseDuration:i=300}=e;return function(a){let{children:l,position:c,preventExitTransition:u,done:d,nodeRef:f,isIn:v,playToast:m}=a;const b=r?`${t}--${c}`:t,g=r?`${n}--${c}`:n,y=h.useRef(0);return h.useLayoutEffect(()=>{const w=f.current,S=b.split(" "),C=M=>{M.target===f.current&&(m(),w.removeEventListener("animationend",C),w.removeEventListener("animationcancel",C),y.current===0&&M.type!=="animationcancel"&&w.classList.remove(...S))};w.classList.add(...S),w.addEventListener("animationend",C),w.addEventListener("animationcancel",C)},[]),h.useEffect(()=>{const w=f.current,S=()=>{w.removeEventListener("animationend",S),o?Rp(w,d,i):d()};v||(u?S():(y.current=1,w.className+=` ${g}`,w.addEventListener("animationend",S)))},[v]),Q.createElement(Q.Fragment,null,l)}}function Do(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const ve=new Map;let Rt=[];const Kn=new Set,zp=e=>Kn.forEach(t=>t(e)),Bi=()=>ve.size>0;function Vi(e,t){var n;if(t)return!((n=ve.get(t))==null||!n.isToastActive(e));let r=!1;return ve.forEach(o=>{o.isToastActive(e)&&(r=!0)}),r}function Ui(e,t){Jn(e)&&(Bi()||Rt.push({content:e,options:t}),ve.forEach(n=>{n.buildToast(e,t)}))}function Mo(e,t){ve.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function Hp(e){const{subscribe:t,getSnapshot:n,setProps:r}=h.useRef(function(i){const a=i.containerId||1;return{subscribe(l){const c=function(d,f,v){let m=1,b=0,g=[],y=[],w=[],S=f;const C=new Map,M=new Set,k=()=>{w=Array.from(C.values()),M.forEach(D=>D())},L=D=>{y=D==null?[]:y.filter(j=>j!==D),k()},I=D=>{const{toastId:j,onOpen:V,updateId:se,children:P}=D.props,_=se==null;D.staleId&&C.delete(D.staleId),C.set(j,D),y=[...y,D.props.toastId].filter(z=>z!==D.staleId),k(),v(Do(D,_?"added":"updated")),_&&we(V)&&V(h.isValidElement(P)&&P.props)};return{id:d,props:S,observe:D=>(M.add(D),()=>M.delete(D)),toggle:(D,j)=>{C.forEach(V=>{j!=null&&j!==V.props.toastId||we(V.toggle)&&V.toggle(D)})},removeToast:L,toasts:C,clearQueue:()=>{b-=g.length,g=[]},buildToast:(D,j)=>{if((O=>{let{containerId:N,toastId:H,updateId:Y}=O;const re=N?N!==d:d!==1,ge=C.has(H)&&Y==null;return re||ge})(j))return;const{toastId:V,updateId:se,data:P,staleId:_,delay:z}=j,R=()=>{L(V)},ee=se==null;ee&&b++;const te={...S,style:S.toastStyle,key:m++,...Object.fromEntries(Object.entries(j).filter(O=>{let[N,H]=O;return H!=null})),toastId:V,updateId:se,data:P,closeToast:R,isIn:!1,className:on(j.className||S.toastClassName),bodyClassName:on(j.bodyClassName||S.bodyClassName),progressClassName:on(j.progressClassName||S.progressClassName),autoClose:!j.isLoading&&(ne=j.autoClose,E=S.autoClose,ne===!1||Nt(ne)&&ne>0?ne:E),deleteToast(){const O=C.get(V),{onClose:N,children:H}=O.props;we(N)&&N(h.isValidElement(H)&&H.props),v(Do(O,"removed")),C.delete(V),b--,b<0&&(b=0),g.length>0?I(g.shift()):k()}};var ne,E;te.closeButton=S.closeButton,j.closeButton===!1||Jn(j.closeButton)?te.closeButton=j.closeButton:j.closeButton===!0&&(te.closeButton=!Jn(S.closeButton)||S.closeButton);let $=D;h.isValidElement(D)&&!it(D.type)?$=h.cloneElement(D,{closeToast:R,toastProps:te,data:P}):we(D)&&($=D({closeToast:R,toastProps:te,data:P}));const F={content:$,props:te,staleId:_};S.limit&&S.limit>0&&b>S.limit&&ee?g.push(F):Nt(z)?setTimeout(()=>{I(F)},z):I(F)},setProps(D){S=D},setToggle:(D,j)=>{C.get(D).toggle=j},isToastActive:D=>y.some(j=>j===D),getSnapshot:()=>S.newestOnTop?w.reverse():w}}(a,i,zp);ve.set(a,c);const u=c.observe(l);return Rt.forEach(d=>Ui(d.content,d.options)),Rt=[],()=>{u(),ve.delete(a)}},setProps(l){var c;(c=ve.get(a))==null||c.setProps(l)},getSnapshot(){var l;return(l=ve.get(a))==null?void 0:l.getSnapshot()}}}(e)).current;r(e);const o=h.useSyncExternalStore(t,n,n);return{getToastToRender:function(i){if(!o)return[];const a=new Map;return o.forEach(l=>{const{position:c}=l.props;a.has(c)||a.set(c,[]),a.get(c).push(l)}),Array.from(a,l=>i(l[0],l[1]))},isToastActive:Vi,count:o==null?void 0:o.length}}function Wp(e){const[t,n]=h.useState(!1),[r,o]=h.useState(!1),i=h.useRef(null),a=h.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:l,pauseOnHover:c,closeToast:u,onClick:d,closeOnClick:f}=e;var v,m;function b(){n(!0)}function g(){n(!1)}function y(C){const M=i.current;a.canDrag&&M&&(a.didMove=!0,t&&g(),a.delta=e.draggableDirection==="x"?C.clientX-a.start:C.clientY-a.start,a.start!==C.clientX&&(a.canCloseOnClick=!1),M.style.transform=`translate3d(${e.draggableDirection==="x"?`${a.delta}px, var(--y)`:`0, calc(${a.delta}px + var(--y))`},0)`,M.style.opacity=""+(1-Math.abs(a.delta/a.removalDistance)))}function w(){document.removeEventListener("pointermove",y),document.removeEventListener("pointerup",w);const C=i.current;if(a.canDrag&&a.didMove&&C){if(a.canDrag=!1,Math.abs(a.delta)>a.removalDistance)return o(!0),e.closeToast(),void e.collapseAll();C.style.transition="transform 0.2s, opacity 0.2s",C.style.removeProperty("transform"),C.style.removeProperty("opacity")}}(m=ve.get((v={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||m.setToggle(v.id,v.fn),h.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||g(),window.addEventListener("focus",b),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",b),window.removeEventListener("blur",g)}},[e.pauseOnFocusLoss]);const S={onPointerDown:function(C){if(e.draggable===!0||e.draggable===C.pointerType){a.didMove=!1,document.addEventListener("pointermove",y),document.addEventListener("pointerup",w);const M=i.current;a.canCloseOnClick=!0,a.canDrag=!0,M.style.transition="none",e.draggableDirection==="x"?(a.start=C.clientX,a.removalDistance=M.offsetWidth*(e.draggablePercent/100)):(a.start=C.clientY,a.removalDistance=M.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(C){const{top:M,bottom:k,left:L,right:I}=i.current.getBoundingClientRect();C.nativeEvent.type!=="touchend"&&e.pauseOnHover&&C.clientX>=L&&C.clientX<=I&&C.clientY>=M&&C.clientY<=k?g():b()}};return l&&c&&(S.onMouseEnter=g,e.stacked||(S.onMouseLeave=b)),f&&(S.onClick=C=>{d&&d(C),a.canCloseOnClick&&u()}),{playToast:b,pauseToast:g,isRunning:t,preventExitTransition:r,toastRef:i,eventHandlers:S}}function Fp(e){let{delay:t,isRunning:n,closeToast:r,type:o="default",hide:i,className:a,style:l,controlledProgress:c,progress:u,rtl:d,isIn:f,theme:v}=e;const m=i||c&&u===0,b={...l,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};c&&(b.transform=`scaleX(${u})`);const g=Ke("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${v}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":d}),y=we(a)?a({rtl:d,type:o,defaultClassName:g}):Ke(g,a),w={[c&&u>=1?"onTransitionEnd":"onAnimationEnd"]:c&&u<1?null:()=>{f&&r()}};return Q.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":m},Q.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${v} Toastify__progress-bar--${o}`}),Q.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:y,style:b,...w}))}let Bp=1;const qi=()=>""+Bp++;function Vp(e){return e&&(it(e.toastId)||Nt(e.toastId))?e.toastId:qi()}function jt(e,t){return Ui(e,t),t.toastId}function pn(e,t){return{...t,type:t&&t.type||e,toastId:Vp(t)}}function Zt(e){return(t,n)=>jt(t,pn(e,n))}function U(e,t){return jt(e,pn("default",t))}U.loading=(e,t)=>jt(e,pn("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),U.promise=function(e,t,n){let r,{pending:o,error:i,success:a}=t;o&&(r=it(o)?U.loading(o,n):U.loading(o.render,{...n,...o}));const l={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=(d,f,v)=>{if(f==null)return void U.dismiss(r);const m={type:d,...l,...n,data:v},b=it(f)?{render:f}:f;return r?U.update(r,{...m,...b}):U(b.render,{...m,...b}),v},u=we(e)?e():e;return u.then(d=>c("success",a,d)).catch(d=>c("error",i,d)),u},U.success=Zt("success"),U.info=Zt("info"),U.error=Zt("error"),U.warning=Zt("warning"),U.warn=U.warning,U.dark=(e,t)=>jt(e,pn("default",{theme:"dark",...t})),U.dismiss=function(e){(function(t){var n;if(Bi()){if(t==null||it(n=t)||Nt(n))ve.forEach(o=>{o.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){var r;(r=ve.get(t.containerId))!=null&&r.removeToast(t.id)||ve.forEach(o=>{o.removeToast(t.id)})}}else Rt=Rt.filter(o=>t!=null&&o.options.toastId!==t)})(e)},U.clearWaitingQueue=function(e){e===void 0&&(e={}),ve.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},U.isActive=Vi,U.update=function(e,t){t===void 0&&(t={});const n=((r,o)=>{var i;let{containerId:a}=o;return(i=ve.get(a||1))==null?void 0:i.toasts.get(r)})(e,t);if(n){const{props:r,content:o}=n,i={delay:100,...r,...t,toastId:t.toastId||e,updateId:qi()};i.toastId!==e&&(i.staleId=e);const a=i.render||o;delete i.render,jt(a,i)}},U.done=e=>{U.update(e,{progress:1})},U.onChange=function(e){return Kn.add(e),()=>{Kn.delete(e)}},U.play=e=>Mo(!0,e),U.pause=e=>Mo(!1,e);const Up=typeof window<"u"?h.useLayoutEffect:h.useEffect,en=e=>{let{theme:t,type:n,isLoading:r,...o}=e;return Q.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...o})},_n={info:function(e){return Q.createElement(en,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return Q.createElement(en,{...e},Q.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return Q.createElement(en,{...e},Q.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return Q.createElement(en,{...e},Q.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return Q.createElement("div",{className:"Toastify__spinner"})}},qp=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:o,playToast:i}=Wp(e),{closeButton:a,children:l,autoClose:c,onClick:u,type:d,hideProgressBar:f,closeToast:v,transition:m,position:b,className:g,style:y,bodyClassName:w,bodyStyle:S,progressClassName:C,progressStyle:M,updateId:k,role:L,progress:I,rtl:D,toastId:j,deleteToast:V,isIn:se,isLoading:P,closeOnClick:_,theme:z}=e,R=Ke("Toastify__toast",`Toastify__toast-theme--${z}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":D},{"Toastify__toast--close-on-click":_}),ee=we(g)?g({rtl:D,position:b,type:d,defaultClassName:R}):Ke(R,g),te=function(F){let{theme:O,type:N,isLoading:H,icon:Y}=F,re=null;const ge={theme:O,type:N};return Y===!1||(we(Y)?re=Y({...ge,isLoading:H}):h.isValidElement(Y)?re=h.cloneElement(Y,ge):H?re=_n.spinner():(Ue=>Ue in _n)(N)&&(re=_n[N](ge))),re}(e),ne=!!I||!c,E={closeToast:v,type:d,theme:z};let $=null;return a===!1||($=we(a)?a(E):h.isValidElement(a)?h.cloneElement(a,E):function(F){let{closeToast:O,theme:N,ariaLabel:H="close"}=F;return Q.createElement("button",{className:`Toastify__close-button Toastify__close-button--${N}`,type:"button",onClick:Y=>{Y.stopPropagation(),O(Y)},"aria-label":H},Q.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Q.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(E)),Q.createElement(m,{isIn:se,done:V,position:b,preventExitTransition:n,nodeRef:r,playToast:i},Q.createElement("div",{id:j,onClick:u,"data-in":se,className:ee,...o,style:y,ref:r},Q.createElement("div",{...se&&{role:L},className:we(w)?w({type:d}):Ke("Toastify__toast-body",w),style:S},te!=null&&Q.createElement("div",{className:Ke("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},te),Q.createElement("div",null,l)),$,Q.createElement(Fp,{...k&&!ne?{key:`pb-${k}`}:{},rtl:D,theme:z,delay:c,isRunning:t,isIn:se,closeToast:v,hide:f,type:d,style:M,className:C,controlledProgress:ne,progress:I||0})))},$n=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},Yp=Cn($n("bounce",!0));Cn($n("slide",!0));Cn($n("zoom"));const ww=Cn($n("flip")),Xp={position:"top-right",transition:Yp,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function Cw(e){let t={...Xp,...e};const n=e.stacked,[r,o]=h.useState(!0),i=h.useRef(null),{getToastToRender:a,isToastActive:l,count:c}=Hp(t),{className:u,style:d,rtl:f,containerId:v}=t;function m(g){const y=Ke("Toastify__toast-container",`Toastify__toast-container--${g}`,{"Toastify__toast-container--rtl":f});return we(u)?u({position:g,rtl:f,defaultClassName:y}):Ke(y,on(u))}function b(){n&&(o(!0),U.play())}return Up(()=>{if(n){var g;const y=i.current.querySelectorAll('[data-in="true"]'),w=12,S=(g=t.position)==null?void 0:g.includes("top");let C=0,M=0;Array.from(y).reverse().forEach((k,L)=>{const I=k;I.classList.add("Toastify__toast--stacked"),L>0&&(I.dataset.collapsed=`${r}`),I.dataset.pos||(I.dataset.pos=S?"top":"bot");const D=C*(r?.2:1)+(r?0:w*L);I.style.setProperty("--y",`${S?D:-1*D}px`),I.style.setProperty("--g",`${w}`),I.style.setProperty("--s",""+(1-(r?M:0))),C+=I.offsetHeight,M+=.025})}},[r,c,n]),Q.createElement("div",{ref:i,className:"Toastify",id:v,onMouseEnter:()=>{n&&(o(!1),U.pause())},onMouseLeave:b},a((g,y)=>{const w=y.length?{...d}:{...d,pointerEvents:"none"};return Q.createElement("div",{className:m(g),style:w,key:`container-${g}`},y.map(S=>{let{content:C,props:M}=S;return Q.createElement(qp,{...M,stacked:n,collapseAll:b,isIn:l(M.toastId,M.containerId),style:M.style,key:`toast-${M.key}`},C)}))}))}const $w=({closeToast:e})=>s.jsx(J,{buttonType:"icon",size:"100",icon:s.jsx(G,{icon:Wt}),onClick:e}),Po=p.div`
  ${St};
  color: ${({theme:e})=>e.systemColors.black};
  padding-top: 2px;
`,Eo=p.div`
  ${Me};
`,Bt=p(G)`
  width: 20px;
  height: 20px;
  font-size: 20px;
`,et=({content:e})=>s.jsx(Gp,{children:typeof e!="string"?s.jsx(s.Fragment,{children:e}):s.jsx(Qp,{dangerouslySetInnerHTML:{__html:e}})}),Gp=p.div`
  padding: 2px 0;
  min-width: 0;
  width: 100%;
  min-height: 32px;
  display: flex;
  align-items: center;
`,tt=p.div`
  ${Me};
  display: flex;

  & ${Po} + ${Eo} {
    margin-top: ${({theme:e})=>e.spacing.sp4};
  }

  ${({$dark:e})=>e&&T`
      ${Po}, ${Eo} {
        color: ${({theme:t})=>t.systemColors.white};
      }

      color: ${({theme:t})=>t.systemColors.white};
    `};
`,Dt=p.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
  align-self: flex-start;
  position: relative;
  top: 6px;
`,Qp=p.div``,Jp="100",Kp=p.div`
  ${e=>e.$size&&tm[e.$size]};
  ${e=>e.$colorType&&(e.$disabled?rm[e.$colorType]:nm[e.$colorType])};
  ${e=>e.$textRichChipColorType&&(e.$disabled?im[e.$textRichChipColorType]:om[e.$textRichChipColorType])};
  ${e=>e.$onRemove&&T`
      // ${We} {
      //   padding: ${t=>t.theme.spacing.sp8} 0 ${t=>t.theme.spacing.sp8}
      //     ${t=>t.theme.spacing.sp24};
      // }
    `}
  ${e=>e.$actionContent&&T`
      ${We} {
        padding: ${t=>t.theme.spacing.sp8} 0 ${t=>t.theme.spacing.sp8}
          ${t=>t.theme.spacing.sp24};
      }

      ${Fe} {
        padding-left: ${t=>t.theme.spacing.sp16};
        padding-right: ${t=>t.theme.spacing.sp16};
      }
    `};

  &:focus,
  &:focus-visible {
    outline: none;
  }

  ${$l};
  display: flex;
  align-items: center;
  border-radius: 28px;
  user-select: none;
  max-width: 100%;
  overflow: hidden;
  ${e=>e.$chipType&&em[e.$chipType]};
  ${e=>e.$categoryType&&am(e.$categoryType)};
  ${e=>!e.$readonly&&T`
      padding-right: 0;
    `}
`,Zp=p(G).attrs({icon:Wt})`
  font-size: 12px;
  width: 12px;
  height: 12px;
`,Mr=p.div`
  width: 100%;
  display: block;
  ${Ee};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  white-space: initial;
  overflow: hidden;
`,We=p.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,Fe=p.div`
  display: flex;
`,ie=p.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  white-space: initial;
  overflow: hidden;
`,st=p.div`
  display: flex;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  color: ${({theme:e})=>e.systemColors.grey300};
`,em={success:T`
    background-color: ${({theme:e})=>e.systemColors.green100};

    ${ie} {
      ${Ee};
      color: ${({theme:e})=>e.systemColors.green800} !important;
    }
  `,error:T`
    background-color: ${({theme:e})=>e.systemColors.red100};

    ${ie} {
      ${Ee};
      color: ${({theme:e})=>e.systemColors.red400};
    }
  `,disabled:T`
    background-color: ${({theme:e})=>e.systemColors.grey100};

    ${ie} {
      ${Ee};
      color: ${({theme:e})=>e.systemColors.grey600};
    }
  `,paused:T`
    background-color: ${({theme:e})=>e.systemColors.yellow200};

    ${ie} {
      ${Ee};
      color: ${({theme:e})=>e.systemColors.yellow800};
    }
  `,enabled:T`
    background-color: ${({theme:e})=>e.systemColors.blue100};

    ${ie} {
      ${Ee};
      color: ${({theme:e})=>e.systemColors.blue800};
    }
  `,beta:T`
    background:
      linear-gradient(white, white) padding-box,
      linear-gradient(
          180deg,
          #c91309 0%,
          #f78527 23.44%,
          #efce1a 46.35%,
          #9bbd02 70.83%,
          #36c9e2 94.79%
        )
        border-box;
    border: 2px solid transparent;

    ${ie} {
      ${Ee};
    }
  `,icon:T`
    background-color: ${({theme:e})=>e.systemColors.blue100};

    ${ie} {
      ${Ee};
      color: ${({theme:e})=>e.systemColors.blue800};
    }
  `,info:T`
    background-color: #e3d6f5;

    ${ie} {
      ${Ee};
      color: #51228f;
    }
  `,new:T``,pending:T``},tm={50:T`
    ${We} {
      padding: ${e=>e.theme.spacing.sp4} ${e=>e.theme.spacing.sp8};

      ${ie} {
        font-size: 12px;
        line-height: 16px;
        font-weight: 700;
      }
    }

    ${ie} {
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
    }

    ${Fe} {
      padding-right: ${e=>e.theme.spacing.sp8} ${e=>e.theme.spacing.sp16};

      ${st} {
        padding: ${e=>e.theme.spacing.sp8};
      }
    }
  `,100:T`
    ${We} {
      padding: ${e=>e.theme.spacing.sp8};

      ${ie} {
        font-size: 16px;
        line-height: 16px;
        font-weight: bold;
      }
    }

    ${ie} {
      ${St};
    }

    ${Fe} {
      padding-right: ${e=>e.theme.spacing.sp16};

      ${st} {
        padding: ${e=>e.theme.spacing.sp8};
      }
    }
  `},nm={dark:T`
    background-color: ${e=>e.theme.systemColors.grey800};
    border: 1px solid ${e=>e.theme.systemColors.grey800};

    ${ie} {
      color: ${e=>e.theme.systemColors.white};
    }

    ${st} {
      color: ${e=>e.theme.systemColors.grey300};

      &:hover {
        color: ${e=>e.theme.systemColors.grey200};
      }
    }
  `,light:T`
    background-color: ${e=>e.theme.systemColors.white};
    border: 1px solid ${e=>e.theme.systemColors.grey800};

    ${ie} {
      color: ${e=>e.theme.systemColors.grey800};
    }

    ${st} {
      color: ${e=>e.theme.systemColors.grey600};

      &:hover {
        color: ${e=>e.theme.systemColors.grey800};
      }
    }
  `},rm={dark:T`
    background-color: ${e=>e.theme.systemColors.grey100};
    border: 1px solid ${e=>e.theme.systemColors.grey100};
    cursor: not-allowed;

    ${We} {
      color: ${e=>e.theme.systemColors.grey300};

      ${ie} {
        color: ${e=>e.theme.systemColors.grey300};
      }
    }

    ${Fe} {
      ${st} {
        color: ${e=>e.theme.systemColors.grey300};
      }
    }
  `,light:T`
    background-color: ${e=>e.theme.systemColors.white};
    border: 1px solid ${e=>e.theme.systemColors.grey200};
    cursor: not-allowed;

    ${We} {
      color: ${e=>e.theme.systemColors.grey300};

      ${ie} {
        color: ${e=>e.theme.systemColors.grey300};
      }
    }

    ${Fe} {
      ${st} {
        color: ${e=>e.theme.systemColors.grey300};
      }
    }
  `},om={secondary:T`
    max-height: 58px;
    background-color: ${e=>e.theme.systemColors.white};
    border: 1px solid ${e=>e.theme.systemColors.grey800};

    &:focus-visible {
      button {
        background: ${({theme:e})=>e.systemColors.grey200};
        border-color: ${({theme:e})=>e.systemColors.grey200};
      }
    }

    ${We} {
      min-height: 58px;
      padding: ${e=>e.theme.spacing.sp8} ${e=>e.theme.spacing.sp24}
        ${e=>e.theme.spacing.sp8} ${e=>e.theme.spacing.sp24};

      ${ie} {
        ${St};
        color: ${e=>e.theme.systemColors.black};
      }

      ${Mr} {
        ${Ht};
      }
    }

    ${Fe} {
      padding-left: ${e=>e.theme.spacing.sp16};
    }
  `},im={secondary:T`
    max-height: 58px;
    background-color: ${e=>e.theme.systemColors.white};
    border: 1px solid ${e=>e.theme.systemColors.grey200};
    cursor: not-allowed;

    ${We} {
      min-height: 58px;
      color: ${e=>e.theme.systemColors.grey300};
      padding: ${e=>e.theme.spacing.sp8} ${e=>e.theme.spacing.sp24} ${e=>e.theme.spacing.sp8} ${e=>e.theme.spacing.sp24};
    }

    ${Fe} {
      padding-left: ${e=>e.theme.spacing.sp16};
    }

    ${ie} {
      ${St};
      color: ${e=>e.theme.systemColors.grey300};
    }

    ${Mr} {
      ${Ht};
      color: ${e=>e.theme.dataVisualizationColors.lightPurple};
    }
  }
  `},am=e=>T`
  background-color: ${({theme:t})=>t.twoToneColors[e].background};

  ${ie} {
    ${Ee};
    color: ${({theme:t})=>t.twoToneColors[e].text} !important;
  }
`,sm=({defaultValue:e="",defaultDescription:t="",type:n,category:r,size:o=Jp,colorType:i,textRichColorType:a,actionContent:l,onChange:c,children:u,onRemove:d,disabled:f,forwardRef:v,className:m,dataTestId:b,...g})=>{var D;const[y,w]=h.useState(e),[S,C]=h.useState(t);h.useEffect(()=>{w(e),C(t)},[t,C,e,w]);const M=h.useCallback(()=>{y&&e!==y?c==null||c(y,e):w(e)},[e,c,y]),k=h.useCallback(j=>{j.preventDefault(),y&&e!==y&&(c==null||c(y,e))},[e,c,y]),L=ur({Enter:k}),I=h.useCallback(j=>w(j.currentTarget.value),[]);return s.jsxs(Kp,{ref:v,...g,$chipType:n,$categoryType:r,$size:o,$colorType:i,$textRichChipColorType:a,$disabled:f,$readonly:!d,$actionContent:!!l,$onRemove:!!d,"data-testid":b,className:m,children:[s.jsxs(We,{children:[g.editable?s.jsx(ie,{children:s.jsx(Sl,{placeholder:g.placeholder,value:y,size:(D=y==null?void 0:y.toString())==null?void 0:D.length,onBlur:M,onKeyDown:L,onChange:I})}):s.jsx(ie,{children:u||y||g.placeholder}),S&&s.jsx(Mr,{children:S})]}),s.jsx(um,{onRemove:d?()=>d(y):void 0,disabled:f,colorType:i,textRichColorType:a}),l&&!d&&s.jsx(Fe,{children:s.jsx(gn,{items:l.map((j,V)=>s.jsx(lm,{children:j.map((se,P)=>s.jsxs(dm,{onClick:se.nodeAction,children:[s.jsx(cm,{children:s.jsx(G,{icon:se.nodeIcon})}),se.nodeText]},P))},V)),children:s.jsx(J,{disabled:f,buttonType:"icon",size:"100",icon:s.jsx(G,{icon:Tl,size:"lg"})})})})]})},lm=p.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
`,cm=p.div`
  padding-right: ${e=>e.theme.spacing.sp16};
`,dm=p(gn.Item)`
  min-width: 111px;
  min-height: 40px;
`,um=({onRemove:e,disabled:t,colorType:n,textRichColorType:r,className:o})=>e==null?null:s.jsx(Fe,{className:o,children:s.jsxs(st,{onClick:i=>{i.stopPropagation(),e==null||e()},"data-testid":"remove-button",disabled:t,children:[n&&s.jsx(Zp,{}),r&&s.jsx(J,{disabled:t,buttonType:"icon",size:"100",icon:s.jsx(G,{icon:Wt})})]})}),hm=h.forwardRef(({className:e,defaultValue:t,icon:n,children:r,type:o,...i},a)=>s.jsx(Xi,{type:o,forwardRef:a,className:e,...i,children:s.jsxs(Gi,{children:[n&&s.jsx(Yi,{children:n}),s.jsx(Qi,{children:t||r})]})})),Yi=p.div`
  display: inline-flex;
  margin-right: 4px;
  font-size: 12px;
`,Xi=p(sm)`
  height: 24px;
`,Gi=p.div`
  display: flex;
  align-items: center;
  height: 24px;
`,Qi=p.div`
  display: flex;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
`,Sw=Object.assign(hm,{Icon:Yi,StatusBaseChip:Xi,StatusWrapper:Gi,StatusTitle:Qi});var fm={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},Tw=fm,kw={prefix:"fas",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"]},Dw={prefix:"fas",iconName:"chevron-up",icon:[512,512,[],"f077","M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]},Mw={prefix:"fas",iconName:"folder",icon:[512,512,[128193,128447,61716,"folder-blank"],"f07b","M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"]},Pw={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},gm={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},Ew=gm,Ow={prefix:"fas",iconName:"file-import",icon:[512,512,["arrow-right-to-file"],"f56f","M128 64c0-35.3 28.7-64 64-64H352V128c0 17.7 14.3 32 32 32H512V448c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V336H302.1l-39 39c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l39 39H128V64zm0 224v48H24c-13.3 0-24-10.7-24-24s10.7-24 24-24H128zM512 128H384V0L512 128z"]},pm={prefix:"fas",iconName:"star-half-stroke",icon:[576,512,["star-half-alt"],"f5c0","M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"]},Iw=pm,jw={prefix:"fas",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"]},mm={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Lw=mm,_w={prefix:"fas",iconName:"code-branch",icon:[448,512,[],"f126","M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},Aw={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},vm={prefix:"fas",iconName:"arrow-rotate-right",icon:[512,512,[8635,"arrow-right-rotate","arrow-rotate-forward","redo"],"f01e","M386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H464c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0s-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3s163.8-62.5 226.3 0L386.3 160z"]},Nw=vm,Rw={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},bm={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},zw=bm,Hw={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"]},Ww={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"]},Fw={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},Bw={prefix:"fas",iconName:"eraser",icon:[576,512,[],"f12d","M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"]},Vw={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]},ym={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},Uw={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},qw={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"]},Ji={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Yw=Ji,xm=Ji,wm={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},Xw={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},Cm={prefix:"fas",iconName:"face-smile",icon:[512,512,[128578,"smile"],"f118","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Gw=Cm,Qw={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128204,128392,"thumb-tack"],"f08d","M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z"]},Jw={prefix:"fas",iconName:"file-export",icon:[576,512,["arrow-right-from-file"],"f56e","M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V288H216c-13.3 0-24 10.7-24 24s10.7 24 24 24H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM384 336V288H494.1l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39H384zm0-208H256V0L384 128z"]},$m={prefix:"fas",iconName:"link-slash",icon:[640,512,["chain-broken","chain-slash","unlink"],"f127","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L489.3 358.2l90.5-90.5c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114l-96 96-31.9-25C430.9 239.6 420.1 175.1 377 132c-52.2-52.3-134.5-56.2-191.3-11.7L38.8 5.1zM239 162c30.1-14.9 67.7-9.9 92.8 15.3c20 20 27.5 48.3 21.7 74.5L239 162zM116.6 187.9L60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l61.8-61.8-50.6-39.9zM220.9 270c-2.1 39.8 12.2 80.1 42.2 110c38.9 38.9 94.4 51 143.6 36.3L220.9 270z"]},Kw=$m,Zw={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},Sm={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},eC=Sm;const Tm="100",km=({position:e="right",size:t=Tm,...n})=>{const r=e==="bottom"?"horizontal":"vertical",o=h.useRef(null),{isScrollable:i,scrollWidth:a}=Ml({ref:o,isOpen:n.isOpen,footer:n.footer,children:n.children});return s.jsx(Mm,{$wrapperLocation:r,position:e,...n,children:s.jsxs(ea,{$size:t,$divider:n.alwaysShowDivider||i,$scrollWidth:a,$wrapperLocation:r,$position:e,children:[(n.header||n.onClose)&&s.jsxs(Ki,{children:[s.jsx(ta,{children:s.jsx(Pr,{children:n.header})}),n.onClose&&s.jsx(Zi,{"data-testid":"close-button",onClick:n.onClose,buttonType:"icon",size:"100",icon:s.jsx(G,{icon:xm})})]}),s.jsx(mn,{ref:o,children:n.children}),n.footer&&s.jsx(Er,{children:n.footer})]})})},Pr=p.h2`
  ${kl};

  ${({theme:e})=>T`
    color: ${e.systemColors.black};
    margin-bottom: ${e.spacing.sp16};
  `};
`,mn=p.main`
  flex-grow: 1;
  flex-basis: 0;
  overflow: auto;
  ${di};
  padding-right: 0;
`,Ki=p.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-right: 0;
`,Zi=p(J)`
  flex-shrink: 0;
  margin-left: ${e=>e.theme.spacing.sp8};
  font-size: 16px;

  & > svg {
    font-size: 16px;
  }
`,Dm={left:"right",right:"left",bottom:"top"},Mm=p(Jt)`
  ${Jt.Flex} {
    height: auto;

    ${({$wrapperLocation:e})=>e==="horizontal"&&T`
        flex-direction: column;
        justify-content: end;
      `}
  }

  ${Jt.SubWrapper} {
    padding: 0;
    height: auto;
    ${({position:e,theme:t})=>T`
      padding-${Dm[e]}: ${t.spacing.sp24};
    `}
  }

  ${Jt.Content} {
    align-self: stretch;
    flex-grow: 0;
    ${Dl};
  }
`,Er=p.footer`
  position: relative;
  padding-top: ${({theme:e})=>e.spacing.sp16};

  ${J} + ${J} {
    margin-left: ${({theme:e})=>e.spacing.sp8};
  }
`,ea=p.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.systemColors.white};
  padding: ${({theme:e})=>e.spacing.sp24};

  ${({$size:e})=>e==="fit-content"&&T`
      ${mn} {
        flex: 1;
      }
    `}
  ${({$divider:e,$scrollWidth:t,theme:n})=>e&&T`
      padding: ${n.spacing.sp24} 0 ${n.spacing.sp16} ${n.spacing.sp24};

      & ${mn} {
        padding-right: calc(${n.spacing.sp24} - ${t}px);
      }

      & ${Ki} {
        padding-right: ${n.spacing.sp24};
      }

      & ${Er} {
        padding-right: ${({theme:r})=>r.spacing.sp24};

        &:before {
          left: -${({theme:r})=>r.spacing.sp24};
          right: -${({theme:r})=>r.spacing.sp24};
          content: "";
          display: block;
          height: 1px;
          position: absolute;
          background-color: ${({theme:r})=>r.systemColors.grey200};
          top: 0;
        }
      }
    `}
  ${ut.mobile} {
    ${({$size:e,$wrapperLocation:t})=>Pm[t][e]}
  }

  ${({$position:e})=>e==="bottom"&&T`
      padding-bottom: 0;
    `}
`,ta=p.div`
  flex-grow: 1;
`,Pm={horizontal:{100:T`
      width: 100%;
      height: 200px;
      max-height: 78vh;
    `,200:T`
      width: 100%;
      height: 400px;
      max-height: 78vh;
    `,400:T`
      width: 100%;
      height: 750px;
      max-height: 78vh;
    `,600:T`
      width: 100%;
      height: 1000px;
      max-height: 78vh;
    `,"fit-content":T`
      display: flex;
      width: 100%;
      height: fit-content;
      max-height: 78vh;
      padding-bottom: ${({theme:e})=>e.spacing.sp24};
    `},vertical:{100:T`
      max-width: 450px;
    `,200:T`
      max-width: 650px;
    `,400:T`
      max-width: 1000px;
    `,600:T`
      max-width: 1200px;
    `,"fit-content":T``}},Em=Object.assign(km,{TitleArea:ta,Wrapper:ea,Content:mn,CloseButton:Zi,Title:Pr,Footer:Er}),Om=h.forwardRef(({children:e,className:t,edited:n,tooltipContent:r,...o},i)=>s.jsxs(ra,{className:t,$edited:n,children:[n&&s.jsx(Im,{tooltipContent:r}),s.jsx(na,{...o,type:"checkbox",ref:i}),s.jsx(He,{}),e&&s.jsx(oa,{children:e})]})),Im=({tooltipContent:e})=>{const{t}=je();return s.jsx(hr,{delay:100,content:e||t("switch.edited"),children:s.jsx(jm,{})})},jm=p.div`
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  left: -16px;
  width: 12px;
  height: 12px;
  display: block;
  content: "";
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='3' cy='3' r='3' fill='%230A6FE8'/%3E%3C/svg%3E%0A");
`,He=p.div`
  position: relative;
  width: 34px;
  height: 20px;
  border-radius: 24px;
  flex-shrink: 0;
  transition: background-color 0.2s ease;
  background-color: ${({theme:e})=>e.systemColors.white};
  border: 1px solid ${e=>e.theme.systemColors.grey400};
  display: flex;

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 2px; // calc((24px - 16px) / 2)
    top: 2px; // calc((24px - 16px) / 2)
    width: 14px;
    height: 14px;
    border-radius: 14px;
    background-color: ${e=>e.theme.systemColors.grey400};
    transition: 0.2s ease;
  }
`,na=p.input`
  position: absolute;
  left: 0;
  opacity: 0;
  outline: none;
  z-index: -1;

  &:disabled + ${He}, &:checked:disabled + ${He} {
    border-color: ${e=>e.theme.systemColors.grey200};
    background: ${e=>e.theme.systemColors.grey200};
    cursor: not-allowed;

    &::before {
      background: ${e=>e.theme.systemColors.grey300};
    }
  }

  &:checked + ${He} {
    border-color: ${e=>e.theme.systemColors.blue600};
    background: ${e=>e.theme.systemColors.blue600};

    &::before {
      left: 15px;
      background: ${({theme:e})=>e.systemColors.white};
    }
  }

  &:focus-visible {
    & + ${He} {
      transition: box-shadow 0.2s ease-in-out;
      box-shadow:
        0 0 0 2px ${e=>e.theme.systemColors.white},
        0 0 0 4px ${e=>e.theme.systemColors.blue600};

      border-color: ${e=>e.theme.systemColors.grey600};

      &::before {
        background: ${({theme:e})=>e.systemColors.grey600};
      }
    }

    &:checked + ${He} {
      border-color: ${e=>e.theme.systemColors.blue800};
      background: ${e=>e.theme.systemColors.blue800};

      &::before {
        background: ${e=>e.theme.systemColors.white};
      }
    }
  }
`,ra=p.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    ${na}:not(:disabled) {
      & + ${He} {
        border-color: ${e=>e.theme.systemColors.grey600};

        &::before {
          background: ${({theme:e})=>e.systemColors.grey600};
        }
      }

      &:checked + ${He} {
        border-color: ${e=>e.theme.systemColors.blue800};
        background: ${e=>e.theme.systemColors.blue800};

        &::before {
          background: ${({theme:e})=>e.systemColors.white};
        }
      }
    }
  }
`,oa=p.span`
  ${Pl};
  padding-left: 8px;
  display: inline-flex;
`,Lm=Object.assign(Om,{Wrapper:ra,Icon:He,Text:oa});var ia={exports:{}};(function(e,t){(function(n,r){e.exports=r(El())})(Ol,n=>(()=>{var r={703:(l,c,u)=>{var d=u(414);function f(){}function v(){}v.resetWarningCache=f,l.exports=function(){function m(y,w,S,C,M,k){if(k!==d){var L=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw L.name="Invariant Violation",L}}function b(){return m}m.isRequired=m;var g={array:m,bigint:m,bool:m,func:m,number:m,object:m,string:m,symbol:m,any:m,arrayOf:b,element:m,elementType:m,instanceOf:b,node:m,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:v,resetWarningCache:f};return g.PropTypes=g,g}},697:(l,c,u)=>{l.exports=u(703)()},414:l=>{l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:l=>{l.exports=n}},o={};function i(l){var c=o[l];if(c!==void 0)return c.exports;var u=o[l]={exports:{}};return r[l](u,u.exports,i),u.exports}i.n=l=>{var c=l&&l.__esModule?()=>l.default:()=>l;return i.d(c,{a:c}),c},i.d=(l,c)=>{for(var u in c)i.o(c,u)&&!i.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:c[u]})},i.o=(l,c)=>Object.prototype.hasOwnProperty.call(l,c),i.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var a={};return(()=>{i.r(a),i.d(a,{default:()=>se});var l=i(98),c=i.n(l),u=i(697),d=i.n(u);function f(){return f=Object.assign?Object.assign.bind():function(P){for(var _=1;_<arguments.length;_++){var z=arguments[_];for(var R in z)Object.prototype.hasOwnProperty.call(z,R)&&(P[R]=z[R])}return P},f.apply(this,arguments)}var v=function(P){var _=P.pageClassName,z=P.pageLinkClassName,R=P.page,ee=P.selected,te=P.activeClassName,ne=P.activeLinkClassName,E=P.getEventListener,$=P.pageSelectedHandler,F=P.href,O=P.extraAriaContext,N=P.pageLabelBuilder,H=P.rel,Y=P.ariaLabel||"Page "+R+(O?" "+O:""),re=null;return ee&&(re="page",Y=P.ariaLabel||"Page "+R+" is your current page",_=_!==void 0?_+" "+te:te,z!==void 0?ne!==void 0&&(z=z+" "+ne):z=ne),c().createElement("li",{className:_},c().createElement("a",f({rel:H,role:F?void 0:"button",className:z,href:F,tabIndex:ee?"-1":"0","aria-label":Y,"aria-current":re,onKeyPress:$},E($)),N(R)))};v.propTypes={pageSelectedHandler:d().func.isRequired,selected:d().bool.isRequired,pageClassName:d().string,pageLinkClassName:d().string,activeClassName:d().string,activeLinkClassName:d().string,extraAriaContext:d().string,href:d().string,ariaLabel:d().string,page:d().number.isRequired,getEventListener:d().func.isRequired,pageLabelBuilder:d().func.isRequired,rel:d().string};const m=v;function b(){return b=Object.assign?Object.assign.bind():function(P){for(var _=1;_<arguments.length;_++){var z=arguments[_];for(var R in z)Object.prototype.hasOwnProperty.call(z,R)&&(P[R]=z[R])}return P},b.apply(this,arguments)}var g=function(P){var _=P.breakLabel,z=P.breakAriaLabel,R=P.breakClassName,ee=P.breakLinkClassName,te=P.breakHandler,ne=P.getEventListener,E=R||"break";return c().createElement("li",{className:E},c().createElement("a",b({className:ee,role:"button",tabIndex:"0","aria-label":z,onKeyPress:te},ne(te)),_))};g.propTypes={breakLabel:d().oneOfType([d().string,d().node]),breakAriaLabel:d().string,breakClassName:d().string,breakLinkClassName:d().string,breakHandler:d().func.isRequired,getEventListener:d().func.isRequired};const y=g;function w(P){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return P??_}function S(P){return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},S(P)}function C(){return C=Object.assign?Object.assign.bind():function(P){for(var _=1;_<arguments.length;_++){var z=arguments[_];for(var R in z)Object.prototype.hasOwnProperty.call(z,R)&&(P[R]=z[R])}return P},C.apply(this,arguments)}function M(P,_){for(var z=0;z<_.length;z++){var R=_[z];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(P,R.key,R)}}function k(P,_){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(z,R){return z.__proto__=R,z},k(P,_)}function L(P,_){if(_&&(S(_)==="object"||typeof _=="function"))return _;if(_!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return I(P)}function I(P){if(P===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return P}function D(P){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(_){return _.__proto__||Object.getPrototypeOf(_)},D(P)}function j(P,_,z){return _ in P?Object.defineProperty(P,_,{value:z,enumerable:!0,configurable:!0,writable:!0}):P[_]=z,P}var V=function(P){(function(E,$){if(typeof $!="function"&&$!==null)throw new TypeError("Super expression must either be null or a function");E.prototype=Object.create($&&$.prototype,{constructor:{value:E,writable:!0,configurable:!0}}),Object.defineProperty(E,"prototype",{writable:!1}),$&&k(E,$)})(ne,P);var _,z,R,ee,te=(R=ne,ee=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var E,$=D(R);if(ee){var F=D(this).constructor;E=Reflect.construct($,arguments,F)}else E=$.apply(this,arguments);return L(this,E)});function ne(E){var $,F;return function(O,N){if(!(O instanceof N))throw new TypeError("Cannot call a class as a function")}(this,ne),j(I($=te.call(this,E)),"handlePreviousPage",function(O){var N=$.state.selected;$.handleClick(O,null,N>0?N-1:void 0,{isPrevious:!0})}),j(I($),"handleNextPage",function(O){var N=$.state.selected,H=$.props.pageCount;$.handleClick(O,null,N<H-1?N+1:void 0,{isNext:!0})}),j(I($),"handlePageSelected",function(O,N){if($.state.selected===O)return $.callActiveCallback(O),void $.handleClick(N,null,void 0,{isActive:!0});$.handleClick(N,null,O)}),j(I($),"handlePageChange",function(O){$.state.selected!==O&&($.setState({selected:O}),$.callCallback(O))}),j(I($),"getEventListener",function(O){return j({},$.props.eventListener,O)}),j(I($),"handleClick",function(O,N,H){var Y=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},re=Y.isPrevious,ge=re!==void 0&&re,Ue=Y.isNext,It=Ue!==void 0&&Ue,rt=Y.isBreak,Ce=rt!==void 0&&rt,qe=Y.isActive,Ye=qe!==void 0&&qe;O.preventDefault?O.preventDefault():O.returnValue=!1;var Xe=$.state.selected,oe=$.props.onClick,$e=H;if(oe){var xe=oe({index:N,selected:Xe,nextSelectedPage:H,event:O,isPrevious:ge,isNext:It,isBreak:Ce,isActive:Ye});if(xe===!1)return;Number.isInteger(xe)&&($e=xe)}$e!==void 0&&$.handlePageChange($e)}),j(I($),"handleBreakClick",function(O,N){var H=$.state.selected;$.handleClick(N,O,H<O?$.getForwardJump():$.getBackwardJump(),{isBreak:!0})}),j(I($),"callCallback",function(O){$.props.onPageChange!==void 0&&typeof $.props.onPageChange=="function"&&$.props.onPageChange({selected:O})}),j(I($),"callActiveCallback",function(O){$.props.onPageActive!==void 0&&typeof $.props.onPageActive=="function"&&$.props.onPageActive({selected:O})}),j(I($),"getElementPageRel",function(O){var N=$.state.selected,H=$.props,Y=H.nextPageRel,re=H.prevPageRel,ge=H.selectedPageRel;return N-1===O?re:N===O?ge:N+1===O?Y:void 0}),j(I($),"pagination",function(){var O=[],N=$.props,H=N.pageRangeDisplayed,Y=N.pageCount,re=N.marginPagesDisplayed,ge=N.breakLabel,Ue=N.breakClassName,It=N.breakLinkClassName,rt=N.breakAriaLabels,Ce=$.state.selected;if(Y<=H)for(var qe=0;qe<Y;qe++)O.push($.getPageElement(qe));else{var Ye=H/2,Xe=H-Ye;Ce>Y-H/2?Ye=H-(Xe=Y-Ce):Ce<H/2&&(Xe=H-(Ye=Ce));var oe,$e,xe=function(Ge){return $.getPageElement(Ge)},le=[];for(oe=0;oe<Y;oe++){var Gt=oe+1;if(Gt<=re)le.push({type:"page",index:oe,display:xe(oe)});else if(Gt>Y-re)le.push({type:"page",index:oe,display:xe(oe)});else if(oe>=Ce-Ye&&oe<=Ce+(Ce===0&&H>1?Xe-1:Xe))le.push({type:"page",index:oe,display:xe(oe)});else if(ge&&le.length>0&&le[le.length-1].display!==$e&&(H>0||re>0)){var On=oe<Ce?rt.backward:rt.forward;$e=c().createElement(y,{key:oe,breakAriaLabel:On,breakLabel:ge,breakClassName:Ue,breakLinkClassName:It,breakHandler:$.handleBreakClick.bind(null,oe),getEventListener:$.getEventListener}),le.push({type:"break",index:oe,display:$e})}}le.forEach(function(Ge,Qe){var Qt=Ge;Ge.type==="break"&&le[Qe-1]&&le[Qe-1].type==="page"&&le[Qe+1]&&le[Qe+1].type==="page"&&le[Qe+1].index-le[Qe-1].index<=2&&(Qt={type:"page",index:Ge.index,display:xe(Ge.index)}),O.push(Qt.display)})}return O}),E.initialPage!==void 0&&E.forcePage!==void 0&&console.warn("(react-paginate): Both initialPage (".concat(E.initialPage,") and forcePage (").concat(E.forcePage,") props are provided, which is discouraged.")+` Use exclusively forcePage prop for a controlled component.
See https://reactjs.org/docs/forms.html#controlled-components`),F=E.initialPage?E.initialPage:E.forcePage?E.forcePage:0,$.state={selected:F},$}return _=ne,(z=[{key:"componentDidMount",value:function(){var E=this.props,$=E.initialPage,F=E.disableInitialCallback,O=E.extraAriaContext,N=E.pageCount,H=E.forcePage;$===void 0||F||this.callCallback($),O&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(N)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(N,"). Did you forget a Math.ceil()?")),$!==void 0&&$>N-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat($," > ").concat(N-1,").")),H!==void 0&&H>N-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(H," > ").concat(N-1,")."))}},{key:"componentDidUpdate",value:function(E){this.props.forcePage!==void 0&&this.props.forcePage!==E.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(E.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var E=this.state.selected,$=this.props,F=$.pageCount,O=E+$.pageRangeDisplayed;return O>=F?F-1:O}},{key:"getBackwardJump",value:function(){var E=this.state.selected-this.props.pageRangeDisplayed;return E<0?0:E}},{key:"getElementHref",value:function(E){var $=this.props,F=$.hrefBuilder,O=$.pageCount,N=$.hrefAllControls;if(F)return N||E>=0&&E<O?F(E+1,O,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(E){var $=E===this.state.selected;if(this.props.ariaLabelBuilder&&E>=0&&E<this.props.pageCount){var F=this.props.ariaLabelBuilder(E+1,$);return this.props.extraAriaContext&&!$&&(F=F+" "+this.props.extraAriaContext),F}}},{key:"getPageElement",value:function(E){var $=this.state.selected,F=this.props,O=F.pageClassName,N=F.pageLinkClassName,H=F.activeClassName,Y=F.activeLinkClassName,re=F.extraAriaContext,ge=F.pageLabelBuilder;return c().createElement(m,{key:E,pageSelectedHandler:this.handlePageSelected.bind(null,E),selected:$===E,rel:this.getElementPageRel(E),pageClassName:O,pageLinkClassName:N,activeClassName:H,activeLinkClassName:Y,extraAriaContext:re,href:this.getElementHref(E),ariaLabel:this.ariaLabelBuilder(E),page:E+1,pageLabelBuilder:ge,getEventListener:this.getEventListener})}},{key:"render",value:function(){var E=this.props.renderOnZeroPageCount;if(this.props.pageCount===0&&E!==void 0)return E&&E(this.props);var $=this.props,F=$.disabledClassName,O=$.disabledLinkClassName,N=$.pageCount,H=$.className,Y=$.containerClassName,re=$.previousLabel,ge=$.previousClassName,Ue=$.previousLinkClassName,It=$.previousAriaLabel,rt=$.prevRel,Ce=$.nextLabel,qe=$.nextClassName,Ye=$.nextLinkClassName,Xe=$.nextAriaLabel,oe=$.nextRel,$e=this.state.selected,xe=$e===0,le=$e===N-1,Gt="".concat(w(ge)).concat(xe?" ".concat(w(F)):""),On="".concat(w(qe)).concat(le?" ".concat(w(F)):""),Ge="".concat(w(Ue)).concat(xe?" ".concat(w(O)):""),Qe="".concat(w(Ye)).concat(le?" ".concat(w(O)):""),Qt=xe?"true":"false",Gs=le?"true":"false";return c().createElement("ul",{className:H||Y,role:"navigation","aria-label":"Pagination"},c().createElement("li",{className:Gt},c().createElement("a",C({className:Ge,href:this.getElementHref($e-1),tabIndex:xe?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":Qt,"aria-label":It,rel:rt},this.getEventListener(this.handlePreviousPage)),re)),this.pagination(),c().createElement("li",{className:On},c().createElement("a",C({className:Qe,href:this.getElementHref($e+1),tabIndex:le?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":Gs,"aria-label":Xe,rel:oe},this.getEventListener(this.handleNextPage)),Ce)))}}])&&M(_.prototype,z),Object.defineProperty(_,"prototype",{writable:!1}),ne}(l.Component);j(V,"propTypes",{pageCount:d().number.isRequired,pageRangeDisplayed:d().number,marginPagesDisplayed:d().number,previousLabel:d().node,previousAriaLabel:d().string,prevPageRel:d().string,prevRel:d().string,nextLabel:d().node,nextAriaLabel:d().string,nextPageRel:d().string,nextRel:d().string,breakLabel:d().oneOfType([d().string,d().node]),breakAriaLabels:d().shape({forward:d().string,backward:d().string}),hrefBuilder:d().func,hrefAllControls:d().bool,onPageChange:d().func,onPageActive:d().func,onClick:d().func,initialPage:d().number,forcePage:d().number,disableInitialCallback:d().bool,containerClassName:d().string,className:d().string,pageClassName:d().string,pageLinkClassName:d().string,pageLabelBuilder:d().func,activeClassName:d().string,activeLinkClassName:d().string,previousClassName:d().string,nextClassName:d().string,previousLinkClassName:d().string,nextLinkClassName:d().string,disabledClassName:d().string,disabledLinkClassName:d().string,breakClassName:d().string,breakLinkClassName:d().string,extraAriaContext:d().string,ariaLabelBuilder:d().func,eventListener:d().string,renderOnZeroPageCount:d().func,selectedPageRel:d().string}),j(V,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(P){return P},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});const se=V})(),a})())})(ia);var _m=ia.exports;const Am=ui(_m),Nm=({pageCount:e,forcePage:t,hrefBuilder:n,onPageChange:r,status:o,locked:i,onLockedClick:a,size:l})=>s.jsxs(Wm,{$disabled:o!=="loaded"||!!i,$size:l,children:[s.jsx(Rm,{pageCount:e,forcePage:t,hrefBuilder:n,pageRangeDisplayed:2,marginPagesDisplayed:1,disabled:!0,onPageChange:c=>r==null?void 0:r(c),previousClassName:"previous",nextClassName:"next",previousLabel:s.jsx(aa,{size:l}),nextLabel:s.jsx(sa,{size:l}),pageClassName:"page",disableInitialCallback:!0,onClick:()=>{if(i)return a==null||a(),!1}}),!!i&&s.jsx(zt,{type:"tertiary"})]}),Rm=p(Am)`
  li.previous.disabled ${J}, li.next.disabled ${J} {
    cursor: not-allowed;
  }
`,zm=({pageCount:e,forcePage:t,onPageChange:n,status:r,locked:o,size:i})=>s.jsxs(Fm,{children:[s.jsx(aa,{size:i,onClick:()=>n==null?void 0:n({selected:Math.max((t||0)-1,0)}),disabled:!t||r!=="loaded"||!!o}),s.jsx(Bm,{children:(t||0)+1}),s.jsx(sa,{size:i,onClick:()=>n==null?void 0:n({selected:Math.min((t||0)+1,e)}),disabled:t===e-1||r!=="loaded"||!!o})]}),aa=({onClick:e,disabled:t,size:n})=>s.jsx(J,{size:n,buttonType:"icon",onClick:e,icon:s.jsx(la,{icon:Il}),disabled:t}),sa=({onClick:e,disabled:t,size:n})=>s.jsx(J,{size:n,buttonType:"icon",onClick:e,icon:s.jsx(la,{icon:jl}),disabled:t}),Hm={50:T`
    padding: 0 8px;
    height: 24px;
    min-width: 24px;
  `,100:T`
    padding: 0 11px;
    height: 32px;
    min-width: 32px;
  `,200:T`
    padding: 0 11px;
    height: 32px;
    min-width: 32px;
  `,400:T`
    padding: 0 11px;
    height: 32px;
    min-width: 32px;
  `},Wm=p.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${zt.Wrapper} {
    margin-left: ${({theme:e})=>e.spacing.sp16};
  }

  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  ul {
    padding-left: 0;
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;

    li.page,
    li.break {
      margin-right: 8px;

      &:last-of-type {
        margin-right: 0;
      }
    }

    li.page a,
    li.break a {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      ${({$size:e})=>Hm[e||"100"]};
      color: ${({theme:e})=>e.systemColors.grey600};
      cursor: pointer;
      border-radius: 6px;
      background-color: ${({theme:e})=>e.systemColors.grey100};
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: ${({theme:e})=>e.systemColors.grey200};
      }
    }

    li.previous {
      margin-right: 8px;
      border-radius: 6px;
      transition: all 0.2s ease-in-out;

      &:not(.disabled):hover {
        background-color: ${({theme:e})=>e.systemColors.grey100};
      }
    }

    li.next {
      border-radius: 6px;
      transition: all 0.2s ease-in-out;

      &:not(.disabled):hover {
        background-color: ${({theme:e})=>e.systemColors.grey100};
      }
    }

    li.selected.page a {
      background-color: ${({theme:e})=>e.systemColors.grey600};
      color: ${({theme:e})=>e.systemColors.white};
    }

    li.break a {
      cursor: default;
      background: none;

      &:hover {
        background: none;
        color: ${({theme:e})=>e.systemColors.grey200};
      }
    }

    li.disabled {
      opacity: 0.5;

      a {
        cursor: default;
      }
    }
  }
`,la=p(G)`
  height: 20px;
  width: 16px;
`,Fm=p.div`
  display: flex;
  align-items: center;
`,Bm=p.div`
  ${Ll};
  margin: 0 ${({theme:e})=>e.spacing.sp16};
`,Vt=p.div`
  ${di}
`,Vm=h.forwardRef((e,t)=>s.jsx(qn,{...e,ref:t,rightElement:s.jsx(Um,{icon:hi,$size:e.size})})),Um=p(G)`
  color: ${e=>e.theme.systemColors.grey600};

  line-height: 16px;

  ${e=>e.$size==="400"?T`
          font-size: 20px;
        `:T`
          font-size: 16px;
        `};
`,Or=h.createContext(null),x=_l(Or),q=Al(Or),ca=B("table/setTableActions"),Mt=ue("actionTableAtom",{},e=>[e(ca,(t,n)=>({...t,...n}))]),da=(e,t,n)=>n?e.filter(n(t.search)):e,qm=(e,t)=>e.slice((t.page-1)*t.count,t.page*t.count),Ym=(e,t,n)=>{const r=n.find(i=>i.field===t.sortField),o=(r==null?void 0:r.sorter)||(["currency","number"].includes((r==null?void 0:r.type)||"text")?"number":"string");if(r){const i=r.sortFunction;return i?[...e].sort((a,l)=>i(a,l,t.sortDirection)):[...e].sort(Xm(t,o))}else return e},Xm=(e,t)=>(n,r)=>{let o=n[e.sortField],i=r[e.sortField];return o==null?1:i==null?-1:(t==="string"&&(o=String(n[e.sortField]).toLowerCase(),i=String(r[e.sortField]).toLowerCase()),e.sortDirection==="DESC"?o>i?-1:1:e.sortDirection==="ASC"?o<i?-1:1:0)},Gm=e=>Number(localStorage.getItem("UI_ITEM_PER_PAGE_"+e)),An=e=>Gm(e)||0,Qm=(e,t)=>{localStorage.setItem(e,t)},Jm=e=>JSON.parse(localStorage.getItem(e)),Km=e=>Jm(e),Zm=(e,t)=>{Qm(t,JSON.stringify(e))},e0=(e,t)=>n=>{if(n.storageArea===localStorage&&n.key===e&&n!=null&&n.newValue){const r=JSON.parse(n==null?void 0:n.newValue);JSON.stringify(r.hidden)!==(n!=null&&n.oldValue?JSON.stringify(JSON.parse(n==null?void 0:n.oldValue).hidden):"")&&t(r.hidden)}},t0={name:"",marketplace:void 0,initialized:!1},ua=B("table/setTableBaseProps"),ye=ue("baseTableAtom",t0,e=>[e(ua,(t,n)=>({...t,...n,initialized:!0}))]),Sn=A(ye,e=>e.name),Ir=A(ye,e=>e.tooltipRef||null),n0=A(ye,e=>e.marketplace||ln("AM","TLDomain","com")),r0=A(he([ye]),([e])=>e.initialized),ha=B("table/setTableBehaviorProps",async({behavior:e},{getState:t,dispatch:n})=>{var r,o;if((r=e==null?void 0:e.itemsPerPage)!=null&&r.length){const i=((o=t(Rr).value)==null?void 0:o.count)??$t.count;e.itemsPerPage.includes(i)||n(gt({filter:{count:e.itemsPerPage[0],page:1},changes:"itemsPerPage"}))}}),fa=B("table/setCompactTableAction",async(e,{getState:t})=>{const{name:n}=t(ye);localStorage.setItem("UI_COMPACT_MODE_"+n,e)}),ga=B("table/setCompactTableAction",async(e,{getState:t})=>{const{name:n}=t(ye);localStorage.setItem("UI_CONTENT_SIZE_"+n,e)}),Ut=ue("behaviorTableAtom",{},e=>[e(ha,(t,n)=>({...t,...n})),e(fa,(t,n)=>({...t,dimensions:{...t.dimensions,compact:n}})),e(ga,(t,n)=>({...t,dimensions:{...t.dimensions,contentSize:n}}))]),lt=A(Ut,e=>e.dimensions||{}),Le=A(Ut,e=>e.locked||{}),fe=A(Ut,e=>e.behavior||{}),o0=A(fe,e=>(e==null?void 0:e.expandableVisible)||!1),i0=A(fe,e=>(e==null?void 0:e.compactVisible)||!1),a0=A(fe,e=>(e==null?void 0:e.contentSizeVisible)||!1),jr=A(lt,e=>{var t;return e.stickyHeader===!0?48:((t=e.stickyHeader)==null?void 0:t.offset)||0}),pa=A(lt,e=>{var t;return e.stickyFooter===!0?0:((t=e.stickyFooter)==null?void 0:t.offset)||0}),ft=A(lt,e=>e.compact||"normal"),ma=A(lt,e=>e.contentSize||"100"),va=A(Ut,e=>{var t,n,r,o,i,a;return{show:((n=(t=e==null?void 0:e.behavior)==null?void 0:t.backToTop)==null?void 0:n.show)||!1,scrollRefElement:(o=(r=e==null?void 0:e.behavior)==null?void 0:r.backToTop)==null?void 0:o.scrollRefElement,topOffset:((a=(i=e==null?void 0:e.behavior)==null?void 0:i.backToTop)==null?void 0:a.topOffset)||0}}),qt=(e,t,n)=>{Zm({draggable:e,hidden:t},n)},s0=(e,t)=>{const n=Km(e)||{draggable:[],hidden:null};return t.length!==n.draggable.length||t.map(o=>o.field).some(o=>!n.draggable.includes(o))?{draggable:t.map(o=>o.field),hidden:null}:n},l0=B("table/initTableColumns",async(e,{getState:t,dispatch:n})=>{const{name:r}=t(ye),o=s0(r,e.filter(u=>!u.static&&!u.staticRight)),i=o.hidden?[...o.hidden]:[];!o.hidden&&t(_e).columns.forEach(u=>{u.defaultHidden&&i.push(u.field)});const a=t(Le).settingsColumns;e.forEach(u=>{(a==null?void 0:a[u.field])===!1&&!i.includes(u.field)&&i.push(u.field)});const l=e.filter(u=>u.static).map(u=>u.field),c=e.filter(u=>u.staticRight).map(u=>u.field);n(Ar({...o,hidden:i,sticky:l,rightSticky:c}))}),Lr=B("table/setTableColumnsOrder",(e,{getState:t})=>{const{draggable:n,hidden:r}=t(Re),{name:o}=t(ye);qt(n,r,o)}),ba=B("table/setTableShowColumns",(e,{getState:t})=>{const{draggable:n,hidden:r}=t(Re),{name:o}=t(ye);qt(n,r,o)}),_r=B("table/setTableShowColumns",(e,{getState:t})=>{const{draggable:n,hidden:r}=t(Re),{name:o}=t(ye);qt(n,r,o)}),c0=B("table/restoreColumns",async(e,{getState:t,dispatch:n})=>{const{columns:r}=t(_e),{name:o}=t(ye),i=r.filter(l=>l.defaultHidden).map(l=>l.field),a=r.filter(l=>!l.static&&!l.staticRight).map(l=>l.field);qt(a,i,o),n(Ar({hidden:i,draggable:a}))}),Ar=B("table/setColumnsViewState"),Nr=B("table/setVisibleColumns",(e,{getState:t})=>{const{draggable:n,hidden:r}=t(Re),{name:o}=t(ye);qt(n,r,o)}),Re=ue("columnsViewTableAtom",{draggable:[],sticky:[],rightSticky:[],hidden:[]},e=>[e(Ar,(t,n)=>({...t,...n})),e(Lr,(t,n)=>({...t,draggable:n})),e(ba,(t,n)=>{let r=[...t.hidden];return r.includes(n)?r=r.filter(o=>o!==n):n&&r.push(n),{...t,hidden:r}}),e(_r,(t,n)=>({...t,hidden:n})),e(Nr,(t,{columns:n,option:r="visible"})=>({...t,hidden:r==="visible"?t.draggable.filter(o=>!n.includes(o)):n}))]),ya=A(Re,e=>({visible:e.draggable.filter(t=>!e.hidden.includes(t)),hidden:e.hidden})),xa=B("table/setTableColumnsProps",async({columns:e},{dispatch:t})=>{t(l0(e))}),_e=ue("columnsTableAtom",{columns:[]},e=>[e(xa,(t,n)=>({...t,...n}))]),wa=B("table/setTableFilterProps"),Tn=B("table/setTableSelected",(e,{getState:t})=>{var n,r;(r=(n=t(De).selected)==null?void 0:n.onChange)==null||r.call(n,e.map(o=>o.id),e)}),gt=B("table/setTableFilter",({filter:e,changes:t},{getState:n})=>{var o;const r=n(De).onFilter;if(r){const i=(o=n(De).filter)==null?void 0:o.value;r({...$t,...i,...e},t)}}),d0=B("table/setSort",(e,{getState:t,dispatch:n})=>{var o;const r=(o=t(_e).columns.filter(({field:i})=>i===e)[0])==null?void 0:o.defaultSortDirection;n(Ca({field:e,defaultSortDirection:r||"DESC"}))}),Ca=B("table/setSortActionInner",(e,{getState:t})=>{const n=t(De).onFilter,r=t(ze);n==null||n(r,"sort")}),$t={search:"",page:1,count:5,sortField:"id",sortDirection:"ASC"},u0={selected:{disabled:[],defaultValue:[],value:void 0,haveCheckbox:!0,hideGroup:!1,onChange:void 0,copied:void 0},filter:{defaultValue:void 0,value:void 0,haveInitial:!1},name:""},De=ue("filterTableAtom",u0,e=>[e(wa,(t,n)=>{var r,o,i,a,l,c;return{...t,...n,selected:{...t.selected,...n.selected,value:((r=n.selected)==null?void 0:r.value)||((o=t.selected)==null?void 0:o.value)||((i=n.selected)==null?void 0:i.defaultValue)},filter:{...t.filter,...n.filter,value:((a=n.filter)==null?void 0:a.value)||((l=t.filter)==null?void 0:l.value)||((c=n.filter)==null?void 0:c.defaultValue)}}}),e(Tn,(t,n)=>({...t,selected:{...t.selected,value:n.map(r=>r.id)}})),e(gt,(t,{filter:n,changes:r})=>{var o,i,a;return n.count&&localStorage.setItem("UI_ITEM_PER_PAGE_"+t.name,String(n.count)),(o=t.filter)!=null&&o.value?{...t,filter:{...t.filter,value:{...(i=t.filter)==null?void 0:i.value,...n}},selected:{...t.selected,value:r==="initial"?(a=t.selected)==null?void 0:a.value:[]}}:t}),e(Ca,(t,{field:n,defaultSortDirection:r})=>{var a,l;const o=(a=t.filter)==null?void 0:a.value,i=(o==null?void 0:o.sortField)===n?{sortField:n,sortDirection:o.sortDirection==="ASC"?"DESC":"ASC"}:{sortField:n,sortDirection:r};return{...t,filter:{...t.filter,value:{...$t,...(l=t.filter)==null?void 0:l.value,...i}}}})]),Pt=A(De,e=>e.selected||{}),nt=A(Pt,e=>(e==null?void 0:e.value)||[]),$a=A(Pt,e=>(e==null?void 0:e.disabled)||[]),Rr=A(De,e=>e.filter||{}),h0=A(Rr,e=>e.haveInitial??!1),ze=A(Rr,e=>(e==null?void 0:e.value)||$t),Sa=A(De,e=>e.onFilter||null),Ta=A(De,e=>e.searchFunction||null),zr=A(De,e=>{var t;return((t=e.selected)==null?void 0:t.haveCheckbox)??!0}),ka=[5,50,100],f0=e=>{var g,y,w,S;const[t,n]=h.useState({name:e.name,marketplace:ln("AM","TLDomain","com")}),[r,o]=h.useState({}),[i,a]=h.useState({data:e.data,status:e.status,total:e.total}),[l,c]=h.useState({columns:[]}),[u,d]=h.useState({name:e.name}),[f,v]=h.useState({}),[m,b]=h.useState({});return h.useEffect(()=>{const C={name:e.name,marketplace:e.marketplace||ln("AM","TLDomain","com"),tooltipRef:e.tooltipRef};Nl(C,t)||n(C)},[e.marketplace,e.name,e.tooltipRef]),h.useEffect(()=>{o({leftActions:e.leftActions,rightActions:e.rightActions,footer:e.footer,header:e.header})},[e.footer,e.header,e.leftActions,e.rightActions]),h.useEffect(()=>{a({data:e.data,total:e.total,status:e.status})},[e.data,e.status,e.total]),h.useEffect(()=>{var C,M,k;c({columns:e.columns.map(L=>{const I=L.type??"text",D=["number","currency","percent"].includes(I)?"right":void 0;return{type:I,contentPosition:D,...L}})||[],breakRender:e.breakRender,break:{position:((C=e.break)==null?void 0:C.position)||"fullSize",limit:((M=e.break)==null?void 0:M.limit)||"one",behaviour:((k=e.break)==null?void 0:k.behaviour)||"none"},alternativeRender:e.alternativeRender})},[e.alternativeRender,(g=e.break)==null?void 0:g.behaviour,(y=e.break)==null?void 0:y.limit,(w=e.break)==null?void 0:w.position,e.breakRender,e.columns]),h.useEffect(()=>{var C,M,k,L,I,D,j;d({filter:{...e.filter,value:(C=e.filter)==null?void 0:C.value,defaultValue:{...$t,count:((k=(M=e.behavior)==null?void 0:M.itemsPerPage)!=null&&k.includes(An(e.name))?An(e.name):null)||((I=(L=e.behavior)==null?void 0:L.itemsPerPage)==null?void 0:I[0])||An(e.name)||$t.count,...(D=e.filter)==null?void 0:D.value,...(j=e.filter)==null?void 0:j.defaultValue}},selected:e.selected,onFilter:e.onFilter,searchFunction:e.searchFunction,name:e.name})},[(S=e.behavior)==null?void 0:S.itemsPerPage,e.filter,e.name,e.onFilter,e.searchFunction,e.selected]),h.useEffect(()=>{var C,M,k,L,I,D,j;v({locked:e.locked,behavior:{...e.behavior,searchType:((C=e.behavior)==null?void 0:C.searchType)||"timeout",sendingSegmentEvent:typeof((M=e.behavior)==null?void 0:M.sendingSegmentEvent)>"u"?!0:(k=e.behavior)==null?void 0:k.sendingSegmentEvent,itemsPerPage:((L=e.behavior)==null?void 0:L.itemsPerPage)||ka},dimensions:{...e.dimensions,minHeight:((I=e.dimensions)==null?void 0:I.minHeight)||336,contentSize:((D=e.dimensions)==null?void 0:D.contentSize)||localStorage.getItem("UI_CONTENT_SIZE_"+e.name)||"100",compact:((j=e.dimensions)==null?void 0:j.compact)||localStorage.getItem("UI_COMPACT_MODE_"+e.name)||"normal"}})},[e.behavior,e.dimensions,e.locked,e.name]),h.useEffect(()=>{b({export:e.export})},[e.export]),{actions:r,base:t,data:i,columns:l,filter:u,behavior:f,exportable:m}},Pe=A(_e,e=>e.columns),g0=A(_e,e=>e.alternativeRender||{}),p0=A(_e,e=>e.breakRender||null),m0=A(_e,e=>{var t;return((t=e.break)==null?void 0:t.limit)||"one"}),v0=A(_e,e=>{var t;return((t=e.break)==null?void 0:t.behaviour)||"none"}),Hr=A(Pe,e=>e.filter(t=>t.static)),Wr=A(Pe,e=>e.filter(t=>t.staticRight)),Da=A(Re,e=>{const t={};return e.draggable.forEach((n,r)=>t[n]=r),{...e,indexMap:t}}),Et=A(Re,e=>e.hidden),b0=A(_e,e=>e.columns.filter(t=>t.defaultHidden).map(t=>t.field)),y0=A(he([Et,b0]),([e,t])=>e.filter(n=>!t.includes(n)).length===0&&e.length===t.length),Yt=A(Re,e=>e.draggable),Ma=A(he([Pe,Yt,Et]),([e,t,n])=>t.filter(r=>n.indexOf(r)===-1).map(r=>e.find(o=>o.field===r))),x0=e=>e!=null&&e.width?`${e.width}px`:e!=null&&e.maxWidth||e!=null&&e.minWidth?`minmax(${e!=null&&e.minWidth?(e==null?void 0:e.minWidth)+"px":"auto"}, ${e!=null&&e.maxWidth?(e==null?void 0:e.maxWidth)+"px":"auto"})`:"1fr",Pa=A(Ma,e=>{const t=e.map(o=>o!=null&&o.static||o!=null&&o.staticRight?"":x0(o)).filter(o=>o),n="0fr "+(t.join(" ")||"1fr")+" 0fr";return{count:t.length+2,style:n}}),w0=A(he([Pe,Et]),([e,t])=>e.filter(n=>t.indexOf(n.field)===-1).map(n=>n.field)),C0=A(Pe,e=>e.filter(t=>t.static&&!t.noHeader)),$0=A(he([Pe,Yt]),([e,t])=>t.map(n=>e.find(r=>r.field===n)).filter(n=>!!n)),S0=A($0,e=>e.filter(t=>!(t!=null&&t.noHeader))),T0=A(he([Pe,Yt]),([e,t])=>e.filter(r=>!r.static&&!r.staticRight).map(r=>r.field).some((r,o)=>r!==t[o])),Ea=A(he([C0,S0,T0,Et,y0,Yt,Le]),([e,t,n,r,o,i,a])=>({stickyColumn:e,draggableWithoutEmpty:i.filter(l=>l!=="_"),draggableVisibleColumn:t.filter(l=>l.field!=="_"),newOrder:n,isDefaultHidden:o,hidden:r,locked:t.filter(l=>{var c;return((c=a.settingsColumns)==null?void 0:c[l.field])!==void 0})})),k0=A(he([Hr,zr]),([e,t])=>{const n=e.map(i=>i.responsive&&i.static?`minmax(${i.minWidth||i.static}px, ${i.minWidth||i.static}fr)`:"auto").join(" "),r=e.length+ +!!t,o=e.some(i=>i.responsive&&i.static);return{template:t?"auto "+n:n,count:r,responsive:o,checkbox:t}}),D0=A(he([Wr]),([e])=>{const t=e.map(()=>"auto").join(" "),n=e.reduce((r,o)=>o.staticRight?r+o.staticRight:r,0);return{template:t,count:e.length,width:n}}),M0=A(he([Yt,Pe,Et]),([e,t,n])=>e.filter(r=>!n.includes(r)).map(r=>t.find(o=>o.field===r))),P0=A(he([Pe,Et]),([e,t])=>e.filter(n=>!t.includes(n.field)&&!n.doNotExport)),E0={data:[],total:0,status:"loading"},Oa=B("table/setTableDataProps",({data:e},{getState:t,dispatch:n})=>{const r=t(ze);n(ja(Math.min(r.count,(e==null?void 0:e.length)||r.count)))}),Ve=ue("dataTableAtom",E0,e=>[e(Oa,(t,n)=>({...t,...n}))]),Ia=B("table/setTableDataHeightProps"),ja=B("table/setTableDataPrevLengthProps"),La=ue("dataLoadingTableAtom",{prevLength:0,lineHeight:32},e=>[e(Ia,(t,n)=>({...t,lineHeight:n||t.lineHeight})),e(ja,(t,n)=>({...t,prevLength:n}))]),_a=A("dataTableSelector",Ve,e=>e.data),O0=A(he([La,fe,De]),([e,t,{filter:n}])=>{var r,o;return{rows:[...new Array((e==null?void 0:e.prevLength)||((r=n==null?void 0:n.value)==null?void 0:r.count)||((o=t.itemsPerPage)==null?void 0:o[0])||ka[0])],lineHeight:e.lineHeight,size:e.lineHeight>96?"large":e.lineHeight>56?"normal":"medium"}}),pt=A(["statusTableSelector"],Ve,e=>e.status||null),Fr=A(he([_a,ze,Pe,Sa,Ta]),([e,t,n,r,o])=>{if(r)return e;{const i=da(e,t,o),a=Ym(i,t,n);return qm(a,t)}}),Aa=A("tableTotalSelector",he([Ve,Sa,ze,Ta]),([{total:e,data:t},n,r,o])=>(n?e:da(t,r,o).length)||0),Br=A(pt,e=>e),I0=A(he([ze,Aa]),([e,t])=>Math.ceil(t/e.count)),Na=A(he([_a,P0]),([e,t])=>{const n=t.reduce((o,i)=>{var a;return o.concat(i.exportTitle??((a=i.title)==null?void 0:a.toString())??"")},[]),r=e.map(o=>t.reduce((i,a)=>{var l;return i.concat(((l=a.exportValue)==null?void 0:l.call(a,o))??lr(o,a.field)??"")},[]));return{headers:n.map(o=>o??""),rows:r.map(o=>o??""),headersFields:t.map(o=>o.field)}}),j0=()=>{const{search:e}=x(ze),{searchPlaceholder:t,searchType:n}=x(fe),r=x(Br),{all:o,search:i}=x(Le),[a,l]=h.useState(e),c=q(()=>gt({filter:{search:a,page:1},changes:"search"}),[a]),u=fr(c,800),[d,f]=h.useState(n==="click"),v=h.useRef(null);h.useEffect(()=>{d&&v.current&&n==="timeout"&&v.current.focus()},[d,n]);const m=!["loaded","error"].includes(r)||o||i,b=h.useCallback(()=>{n==="click"?c():f(!0)},[c,n]),g=h.useCallback(w=>{l(w),n==="timeout"&&u()},[u,n]),y=h.useCallback(w=>{w.key==="Enter"&&n==="click"&&c()},[c,n]);return s.jsxs(s.Fragment,{children:[d&&s.jsx(L0,{ref:v,onKeyDown:y,onChange:w=>g(w.target.value.trim()),defaultValue:e,placeholder:t||"",size:"100",disabled:m,$notEmpty:a!=="",$haveIcon:n==="click",onBlur:()=>a===""&&n==="timeout"&&f(!1)}),(n==="click"||!d)&&s.jsx(J,{buttonType:"icon",icon:s.jsx(G,{icon:hi}),onClick:b,"data-testid":"searchButton"})]})},L0=p(Vm)`
  flex: 1;
  max-width: 214px;
  min-width: 64px;
  height: 32px;
  position: relative;
  right: -1px;

  & > ${qn.InputWrapper} {
    //border: 1px solid transparent;

    &:focus,
    &:focus-within {
      border-color: ${e=>e.theme.systemColors.blue600};
      box-shadow: 0 0 0 1px ${({theme:e})=>e.systemColors.blue600};
    }

    ${({$notEmpty:e,theme:t})=>e&&T`
        border-color: ${t.systemColors.grey400};

        &:hover {
          border-color: ${t.systemColors.grey600};
        }
      `}

    ${({$haveIcon:e})=>e&&T`
        ${qn.Element} {
          display: none;
        }
      `}
  }

  & > div {
    box-shadow: none;

    & > div {
      padding: 4px 8px;
    }
  }
`,_0=()=>{const e=x(nt),{count:t,page:n}=x(ze),{getTitleText:r}=x(Pt),o=x(Aa),i=h.useMemo(()=>{const a={selected:e.length,count:t,page:n,items:o};return r?r(a):""},[t,r,n,e.length,o]);return i?s.jsx(A0,{children:e.length?s.jsx(N0,{children:i}):s.jsx(Ra,{children:i})}):s.jsx(s.Fragment,{})},A0=p.div`
  position: relative;
`,Ra=p.div`
  ${Me};
  line-height: 2;
`,N0=p(Ra)`
  font-weight: bold;
  color: ${({theme:e})=>e.systemColors.black};
`,R0=()=>{const{leftActions:e}=x(Mt),{copied:t}=x(Pt),{searchVisible:n}=x(fe),r=x(nt),o=x(ya),i=q(Nr),a=h.useMemo(()=>({setColumnsVisibility:(c,u)=>i({columns:c,option:u}),visibleColumns:o.visible,hiddenColumns:o.hidden}),[o.hidden,o.visible,i]),l=h.useCallback(c=>{navigator.clipboard.writeText(c).then()},[]);return s.jsxs(z0,{children:[s.jsx(_0,{}),e==null?void 0:e(r,a),t&&s.jsx(s.Fragment,{children:t==null?void 0:t(r,l)}),n&&s.jsx(j0,{})]})},z0=p.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sp8};
`,za=B("table/setTableExportableProps"),Ha=ue("exportableTableAtom",{},e=>[e(za,(t,n)=>({...t,...n}))]),H0=()=>{const[e,t,n,r,o,i]=W0(Rl);return{isSmallMobile:e,isMobile:t,isLaptop:n,isDesktop:r,isLargeDesktop:o,isExtraDesktop:i}},W0=e=>{const t=e.map(a=>window.matchMedia(a)),n=h.useCallback(()=>t.map(a=>a.matches),[t]),[r,o]=h.useState(n),i=h.useCallback(()=>o(n),[n]);return h.useLayoutEffect(()=>(t.forEach(a=>a==null?void 0:a.addListener(i)),()=>t.forEach(a=>a==null?void 0:a.removeListener(i))),[i,t]),h.useMemo(()=>r,[r])},Vr=B("table/setColumnSettingsVisible"),F0=ue({visible:!1},e=>[e(Vr,(t,n)=>({...t,visible:n}))]),B0=A(F0,e=>e.visible),Wa=B("table/setTableHeaderSticky"),Fa=B("table/setTableFooterSticky"),Ba=B("table/setTableMinimumView"),Va=B("table/setTableInView"),Ot=ue("stickyTableAtom",{header:!1,footer:!1,minimumView:!1,tableInView:!1},e=>[e(Wa,(t,n)=>({...t,header:n})),e(Fa,(t,n)=>({...t,footer:n})),e(Ba,(t,n)=>({...t,minimumView:n})),e(Va,(t,n)=>({...t,tableInView:n}))]),V0=()=>{const{t:e}=je(),t=x(i0),n=x(ft),r=q(fa);return t?s.jsx(Lm,{onChange:()=>r(n==="normal"?"compact":"normal"),checked:n==="compact",children:e("table.compactMode")}):null},U0=zl+"/api/v1",q0=U0+"/customers/segment-track",Y0={tableContentResized:"Table Content Resized"},X0=async({name:e,properties:t})=>{try{await Hl({method:"POST",url:q0,params:{name:e,properties:{...t}},withCredentials:0})}catch(n){console.log(n)}},G0=({isSmallMobile:e})=>{const{t}=je(),n=x(a0),r=x(ma),o=x(fe,c=>c.sendingSegmentEvent,[]),i=q(ga),a=h.useCallback(c=>{i(c),o&&X0({name:Y0.tableContentResized,properties:{size:Q0[c]}})},[i,o]),l=h.useMemo(()=>[{children:t("size.small"),value:"50"},{children:t("size.medium"),value:"100"},{children:t("size.large"),value:"200"},{children:t("size.extraLarge"),value:"400"}].filter(({value:c})=>e?c!=="400":!0),[e,t]);return h.useEffect(()=>{e&&r==="400"&&i("200")},[r,e,i]),n?s.jsxs(s.Fragment,{children:[s.jsx(K0,{children:t("table.productImageSize")}),s.jsx(J0,{buttons:l,onChange:c=>a(c),value:r})]}):null},Q0={50:"Small",100:"Medium",200:"Large",400:"Extra large"},J0=p(cp)`
  width: auto;
`,K0=p.p`
  ${St};
  color: ${({theme:e})=>e.systemColors.black};
  padding-bottom: ${({theme:e})=>e.spacing.sp8};
  padding-top: ${({theme:e})=>e.spacing.sp24};
`,Z0=()=>{const{t:e}=je(),{isDefaultHidden:t,newOrder:n}=x(Ea),r=q(c0);return!t||n?s.jsx(e1,{onClick:r,buttonType:"text",size:"100",children:e("table.restoreDefaults")}):null},e1=p(J)`
  position: relative;
  top: 4px;
  margin-left: 8px;
`,t1=h.memo(()=>{const{t:e}=je(),t=x(B0),n=q(Vr),{all:r,settings:o}=x(Le),i=x(Ot,v=>v.header,[]),a=x(Ir);h.useEffect(()=>{i&&n(!1)},[i]);const l=x(fe,v=>v.onClickColumnSettings,[]),c=x(ye,v=>v.name,[]),u=q(_r),d=h.useCallback(e0(c,u),[]);h.useEffect(()=>(window.addEventListener("storage",d),()=>{window.removeEventListener("storage",d)}),[d]);const f=h.useRef(null);return s.jsx(r1,{ref:f,children:s.jsx(Tp,{open:t,clickable:!0,appendTo:a||"parent",strategy:"fixed",content:s.jsx(n1,{}),onOpenChange:n,hideOnClick:!1,children:s.jsx(J,{buttonType:"tertiary",disabled:r||o,icon:s.jsx(G,{icon:Wl}),onClick:()=>{l==null||l(),n(!t)},children:e("buttons.customize")})})})}),n1=()=>{const{t:e}=je(),{draggableWithoutEmpty:t,draggableVisibleColumn:n,stickyColumn:r,hidden:o,locked:i}=x(Ea),{settingsColumns:a,onLock:l}=x(Le),c=q(ba),u=q(_r),{isMobile:d,isSmallMobile:f,isLaptop:v,isDesktop:m}=H0(),b=h.useMemo(()=>r.length+t.length,[t.length,r.length]),g=h.useMemo(()=>f?1:d||b<5?2:v||m?3:b>1?4:3,[m,v,d,f,b]),y=h.useMemo(()=>Math.ceil((r.length+t.length)/g),[g,t.length,r.length]),w=o.filter(k=>i.every(L=>L.field!==k)),S=t.filter(k=>i.every(L=>L.field!==k)),C=h.useCallback(()=>{if(w.length)u(i.filter(k=>(a==null?void 0:a[k.field])===!1).map(k=>k.field));else{const k=[...S,...i.filter(L=>(a==null?void 0:a[L.field])===!1).map(L=>L.field)];u(k)}},[S,w.length,i,a,u]),M=x(fe,k=>k.extraSettings,[]);return s.jsxs(o1,{"data-testid":"table-settings-popup",children:[s.jsxs(i1,{children:[s.jsx(a1,{children:e("table.tableCustomization")}),s.jsx(Z0,{})]}),s.jsx(G0,{isSmallMobile:f}),s.jsx(V0,{}),s.jsx(s1,{children:e("table.columns")}),s.jsx(c1,{children:s.jsx(Nn,{onChange:C,checked:w.length!==S.length,indeterminate:!!w.length,children:e("table.selectAll")})}),s.jsxs(l1,{$rowCount:y,$countColumn:g,children:[r.map(k=>s.jsx(Oo,{children:s.jsx(Nn,{disabled:!0,defaultChecked:!0,children:k.settingsTitle||k.title})},k.field)),n.map(k=>{const L=(a==null?void 0:a[k.field])!==void 0;return k?s.jsx(Oo,{onClick:()=>L&&(l==null?void 0:l("settingsColumns",k)),children:s.jsxs(Nn,{disabled:L,onChange:()=>c(k.field),checked:!o.includes(k.field)||(a==null?void 0:a[k.field])===!0,children:[(a==null?void 0:a[k.field])!==void 0&&s.jsx(zt,{type:"tertiary"}),k.settingsTitle||k.title]})},k.field):null})]}),M==null?void 0:M()]})},r1=p.div`
  position: relative;
`,o1=p.div`
  padding: 24px 32px 40px;
  width: fit-content;
  margin-right: auto;
`,i1=p.div`
  display: flex;
  align-items: flex-end;
`,a1=p.p`
  ${Fl};
`,s1=p.p`
  ${St};
  color: ${({theme:e})=>e.systemColors.black};
  padding-bottom: ${({theme:e})=>e.spacing.sp8};
  padding-top: ${({theme:e})=>e.spacing.sp24};
`,l1=p.div`
  display: grid;
  grid-template-columns: ${({$countColumn:e})=>`repeat(${e}, auto);`};
  grid-template-rows: ${({$rowCount:e})=>`repeat(${e}, 1fr);`};
  column-gap: 32px;
  grid-auto-flow: column;
`,Oo=p.div`
  margin: ${({theme:e})=>`${e.spacing.sp8} ${e.spacing.sp8} 0 0`};
  width: fit-content;
  max-width: 220px;

  ${zt.Wrapper} {
    margin-right: ${({theme:e})=>e.spacing.sp4};
  }

  ${Tt.Text} {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`,c1=p.div`
  margin-bottom: ${({theme:e})=>e.spacing.sp8};
`,Nn=p(Tt)`
  align-items: center;
`,d1={expanded:!1},Ua=B("table/setExpendedTable"),u1=ue("positionTableAtom",d1,e=>[e(Ua,(t,n)=>({...t,expanded:n}))]),qa=A(u1,e=>e.expanded||!1),h1=()=>{const e=x(qa),t=q(Ua);return s.jsx(f1,{children:s.jsx(J,{buttonType:"icon",icon:e?s.jsx(G,{icon:Bl}):s.jsx(G,{icon:Vl}),onClick:()=>{t(!e)}})})},f1=p.div`
  margin-left: ${({theme:e})=>e.spacing.sp8};
`,g1=["csv","xlsx"],p1=B("exportTables",async({type:e,title:t},{getState:n})=>{const r=n(Na);e==="csv"&&Kd({data:[r.headers,...r.rows],filename:t||"text"}),e==="xlsx"&&Zd([{data:r,name:"Table"}],t||"text").then()}),m1=({onExport:e,title:t})=>{const{t:n}=je(),r=x(Br),{all:o,export:i}=x(Le),a=q(u=>(e==null||e(),p1({type:u,title:t})),[]),l=r!=="loaded"||i||o,c=h.useRef(null);return s.jsx(v1,{ref:c,children:s.jsx(gn,{tippy:{appendTo:"parent",placement:"bottom-end"},items:s.jsx(s.Fragment,{children:g1.map(u=>s.jsx(gn.Item,{onClick:()=>{a(u)},children:n(`table.export.${u}`)},u))}),children:s.jsx(b1,{disabled:l,children:n("table.exportData")})})})},v1=p.div``,b1=h.forwardRef(({children:e,...t},n)=>s.jsx(J,{ref:n,buttonType:"tertiary",...t,icon:s.jsx(G,{icon:Ul}),children:e})),y1=()=>{var d;const{rightActions:e}=x(Mt),{export:t}=x(Ha),{columnVisible:n}=x(fe),r=x(w0),{headersFields:o}=x(Na),i=x(nt),a=x(o0),l=x(ya),c=q(Nr),u=h.useMemo(()=>({setColumnsVisibility:(f,v)=>c({columns:f,option:v}),visibleColumns:l.visible,hiddenColumns:l.hidden}),[l.hidden,l.visible,c]);return s.jsxs(x1,{children:[e&&s.jsx(s.Fragment,{children:e(i,u)}),n&&s.jsx(w1,{"data-testid":"table-settings",children:s.jsx(t1,{})}),t&&(t.render||t.exportable)&&s.jsx(s.Fragment,{children:((d=t.render)==null?void 0:d.call(t,i,r,o))||(t.exportable?s.jsx(m1,{title:t.exportTitle}):s.jsx(s.Fragment,{}))}),a&&s.jsx(h1,{})]})},x1=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sp8};

  ${ut.laptop} {
    justify-content: flex-end;
  }
`,w1=p.div``,C1=()=>{const e=x(Br),{header:t}=x(Mt),n=x(nt);return s.jsx(Ya,{children:e==="loading"?s.jsx($1,{}):s.jsx(s.Fragment,{children:t?t(n):s.jsxs(s.Fragment,{children:[s.jsx(R0,{}),s.jsx(y1,{})]})})})},Ya=p.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 8px;
  border-radius: 6px;
  align-items: flex-start;
  grid-gap: 8px;

  ${ut.laptop} {
    grid-template-columns: auto auto;
  }

  z-index: 100;
  padding: 12px 16px;
  border-top: 1px solid ${({theme:e})=>e.systemColors.grey200};
  max-width: 100%;
`,Xa=p.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`,Zn=p.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
`,$1=()=>s.jsxs(S1,{children:[s.jsx(Xa,{children:s.jsx(ce,{$width:180})}),s.jsxs(Zn,{children:[s.jsx(ce,{$size:"large",$width:32}),s.jsx(ce,{$size:"large",$width:32}),s.jsx(ce,{$size:"large",$width:128})]})]}),S1=p.div`
  display: flex;
  flex-grow: 1;
  grid-column: 1/3;

  ${Xa}, ${Zn} {
    gap: ${({theme:e})=>e.spacing.sp8};
  }

  ${Zn} {
    margin-left: ${({theme:e})=>e.spacing.sp24};
  }
`,T1=B("setTableHeaderCellWidth"),Ga=B("setTableHeaderCellWidths"),k1=ue("tableHeaderCellsWidthAtom",{},e=>{e(T1,(t,{name:n,fieldName:r,width:o})=>({...t,[n]:{...t[n]||{},[r]:o}})),e(Ga,(t,{tableName:n,fields:r})=>r.every(({name:o,width:i})=>{var a;return((a=t[n])==null?void 0:a[o])===i})?t:{...t,[n]:{...t[n]||{},...r.reduce((o,i)=>({...o,[i.name]:i.width}),{})}})}),Qa=B("setTableBoundingClientRect"),Ja=B("setTableScrollWidthClient"),Ur=ue("tableBoundingClientRectAtom",null,e=>{e(Qa,(t,n)=>({scrollWidth:(t==null?void 0:t.scrollWidth)||n.width,left:n.left,width:n.width,x:n.x,y:n.y})),e(Ja,(t,n)=>({...t,scrollWidth:n}))}),D1=e=>{const t=q(Qa),n=x(Sn);h.useEffect(()=>{if(e&&e.current){const r=()=>{var a;const i=(a=e.current)==null?void 0:a.getBoundingClientRect();i&&t(i)},o=new ResizeObserver(r);return o.observe(e.current),()=>o.disconnect()}},[e,n,t])},M1=e=>{const t=q(Ja),n=x(Sn);h.useEffect(()=>{if(e&&e.current){const r=()=>{var a;const i=(a=e.current)==null?void 0:a.scrollWidth;i&&t(i)},o=new ResizeObserver(r);return o.observe(e.current),()=>o.disconnect()}},[e,n,t])},P1=({tableRef:e,headerRef:t,footerRef:n})=>{const r=x(pt),o=e==null?void 0:e.current;h.useEffect(()=>{var i;if(o&&(t!=null&&t.current)&&r==="loaded"){let a=!1,l=(o==null?void 0:o.scrollLeft)||0;const c=()=>{var f,v;if(a){a=!1;return}const d=(o==null?void 0:o.scrollLeft)||0;l!==d&&(n!=null&&n.current&&(a=!0),(f=t==null?void 0:t.current)==null||f.scrollTo(d,0),(v=n==null?void 0:n.current)==null||v.scrollTo(d,0),l=d)},u=()=>{var f,v;if(a){a=!1;return}a=!0;const d=((f=n==null?void 0:n.current)==null?void 0:f.scrollLeft)||0;o==null||o.scrollTo(d,0),(v=t==null?void 0:t.current)==null||v.scrollTo(d,0)};return setTimeout(c,1e3),o==null||o.addEventListener("scroll",c),(i=n==null?void 0:n.current)==null||i.addEventListener("scroll",u),window.addEventListener("resize",c),window.addEventListener("orientationchange",c),()=>{var d;window.removeEventListener("resize",c),window.removeEventListener("orientationchange",c),o==null||o.removeEventListener("orientationchange",c),(d=n==null?void 0:n.current)==null||d.removeEventListener("orientationchange",u)}}},[n,t,r,o])},Ka=h.createContext({dragDropManager:void 0});function Se(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Io=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Rn=function(){return Math.random().toString(36).substring(7).split("").join(".")},jo={INIT:"@@redux/INIT"+Rn(),REPLACE:"@@redux/REPLACE"+Rn(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Rn()}};function E1(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Za(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Se(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Se(1));return n(Za)(e,t)}if(typeof e!="function")throw new Error(Se(2));var o=e,i=t,a=[],l=a,c=!1;function u(){l===a&&(l=a.slice())}function d(){if(c)throw new Error(Se(3));return i}function f(g){if(typeof g!="function")throw new Error(Se(4));if(c)throw new Error(Se(5));var y=!0;return u(),l.push(g),function(){if(y){if(c)throw new Error(Se(6));y=!1,u();var S=l.indexOf(g);l.splice(S,1),a=null}}}function v(g){if(!E1(g))throw new Error(Se(7));if(typeof g.type>"u")throw new Error(Se(8));if(c)throw new Error(Se(9));try{c=!0,i=o(i,g)}finally{c=!1}for(var y=a=l,w=0;w<y.length;w++){var S=y[w];S()}return g}function m(g){if(typeof g!="function")throw new Error(Se(10));o=g,v({type:jo.REPLACE})}function b(){var g,y=f;return g={subscribe:function(S){if(typeof S!="object"||S===null)throw new Error(Se(11));function C(){S.next&&S.next(d())}C();var M=y(C);return{unsubscribe:M}}},g[Io]=function(){return this},g}return v({type:jo.INIT}),r={dispatch:v,subscribe:f,getState:d,replaceReducer:m},r[Io]=b,r}function W(e,t,...n){if(O1()&&t===void 0)throw new Error("invariant requires an error message argument");if(!e){let r;if(t===void 0)r=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let o=0;r=new Error(t.replace(/%s/g,function(){return n[o++]})),r.name="Invariant Violation"}throw r.framesToPop=1,r}}function O1(){return typeof process<"u"&&!0}function I1(e,t,n){return t.split(".").reduce((r,o)=>r&&r[o]?r[o]:n||null,e)}function j1(e,t){return e.filter(n=>n!==t)}function es(e){return typeof e=="object"}function L1(e,t){const n=new Map,r=i=>{n.set(i,n.has(i)?n.get(i)+1:1)};e.forEach(r),t.forEach(r);const o=[];return n.forEach((i,a)=>{i===1&&o.push(a)}),o}function _1(e,t){return e.filter(n=>t.indexOf(n)>-1)}const qr="dnd-core/INIT_COORDS",kn="dnd-core/BEGIN_DRAG",Yr="dnd-core/PUBLISH_DRAG_SOURCE",Dn="dnd-core/HOVER",Mn="dnd-core/DROP",Pn="dnd-core/END_DRAG";function Lo(e,t){return{type:qr,payload:{sourceClientOffset:t||null,clientOffset:e||null}}}const A1={type:qr,payload:{clientOffset:null,sourceClientOffset:null}};function N1(e){return function(n=[],r={publishSource:!0}){const{publishSource:o=!0,clientOffset:i,getSourceClientOffset:a}=r,l=e.getMonitor(),c=e.getRegistry();e.dispatch(Lo(i)),R1(n,l,c);const u=W1(n,l);if(u==null){e.dispatch(A1);return}let d=null;if(i){if(!a)throw new Error("getSourceClientOffset must be defined");z1(a),d=a(u)}e.dispatch(Lo(i,d));const v=c.getSource(u).beginDrag(l,u);if(v==null)return;H1(v),c.pinSource(u);const m=c.getSourceType(u);return{type:kn,payload:{itemType:m,item:v,sourceId:u,clientOffset:i||null,sourceClientOffset:d||null,isSourcePublic:!!o}}}}function R1(e,t,n){W(!t.isDragging(),"Cannot call beginDrag while dragging."),e.forEach(function(r){W(n.getSource(r),"Expected sourceIds to be registered.")})}function z1(e){W(typeof e=="function","When clientOffset is provided, getSourceClientOffset must be a function.")}function H1(e){W(es(e),"Item must be an object.")}function W1(e,t){let n=null;for(let r=e.length-1;r>=0;r--)if(t.canDragSource(e[r])){n=e[r];break}return n}function F1(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B1(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){F1(e,o,n[o])})}return e}function V1(e){return function(n={}){const r=e.getMonitor(),o=e.getRegistry();U1(r),X1(r).forEach((a,l)=>{const c=q1(a,l,o,r),u={type:Mn,payload:{dropResult:B1({},n,c)}};e.dispatch(u)})}}function U1(e){W(e.isDragging(),"Cannot call drop while not dragging."),W(!e.didDrop(),"Cannot call drop twice during one drag operation.")}function q1(e,t,n,r){const o=n.getTarget(e);let i=o?o.drop(r,e):void 0;return Y1(i),typeof i>"u"&&(i=t===0?{}:r.getDropResult()),i}function Y1(e){W(typeof e>"u"||es(e),"Drop result must either be an object or undefined.")}function X1(e){const t=e.getTargetIds().filter(e.canDropOnTarget,e);return t.reverse(),t}function G1(e){return function(){const n=e.getMonitor(),r=e.getRegistry();Q1(n);const o=n.getSourceId();return o!=null&&(r.getSource(o,!0).endDrag(n,o),r.unpinSource()),{type:Pn}}}function Q1(e){W(e.isDragging(),"Cannot call endDrag while not dragging.")}function er(e,t){return t===null?e===null:Array.isArray(e)?e.some(n=>n===t):e===t}function J1(e){return function(n,{clientOffset:r}={}){K1(n);const o=n.slice(0),i=e.getMonitor(),a=e.getRegistry(),l=i.getItemType();return ev(o,a,l),Z1(o,i,a),tv(o,i,a),{type:Dn,payload:{targetIds:o,clientOffset:r||null}}}}function K1(e){W(Array.isArray(e),"Expected targetIds to be an array.")}function Z1(e,t,n){W(t.isDragging(),"Cannot call hover while not dragging."),W(!t.didDrop(),"Cannot call hover after drop.");for(let r=0;r<e.length;r++){const o=e[r];W(e.lastIndexOf(o)===r,"Expected targetIds to be unique in the passed array.");const i=n.getTarget(o);W(i,"Expected targetIds to be registered.")}}function ev(e,t,n){for(let r=e.length-1;r>=0;r--){const o=e[r],i=t.getTargetType(o);er(i,n)||e.splice(r,1)}}function tv(e,t,n){e.forEach(function(r){n.getTarget(r).hover(t,r)})}function nv(e){return function(){if(e.getMonitor().isDragging())return{type:Yr}}}function rv(e){return{beginDrag:N1(e),publishDragSource:nv(e),hover:J1(e),drop:V1(e),endDrag:G1(e)}}class ov{receiveBackend(t){this.backend=t}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const t=this,{dispatch:n}=this.store;function r(i){return(...a)=>{const l=i.apply(t,a);typeof l<"u"&&n(l)}}const o=rv(this);return Object.keys(o).reduce((i,a)=>{const l=o[a];return i[a]=r(l),i},{})}dispatch(t){this.store.dispatch(t)}constructor(t,n){this.isSetUp=!1,this.handleRefCountChange=()=>{const r=this.store.getState().refCount>0;this.backend&&(r&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!r&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=t,this.monitor=n,t.subscribe(this.handleRefCountChange)}}function iv(e,t){return{x:e.x+t.x,y:e.y+t.y}}function ts(e,t){return{x:e.x-t.x,y:e.y-t.y}}function av(e){const{clientOffset:t,initialClientOffset:n,initialSourceClientOffset:r}=e;return!t||!n||!r?null:ts(iv(t,r),n)}function sv(e){const{clientOffset:t,initialClientOffset:n}=e;return!t||!n?null:ts(t,n)}const Lt=[],Xr=[];Lt.__IS_NONE__=!0;Xr.__IS_ALL__=!0;function lv(e,t){return e===Lt?!1:e===Xr||typeof t>"u"?!0:_1(t,e).length>0}class cv{subscribeToStateChange(t,n={}){const{handlerIds:r}=n;W(typeof t=="function","listener must be a function."),W(typeof r>"u"||Array.isArray(r),"handlerIds, when specified, must be an array of strings.");let o=this.store.getState().stateId;const i=()=>{const a=this.store.getState(),l=a.stateId;try{l===o||l===o+1&&!lv(a.dirtyHandlerIds,r)||t()}finally{o=l}};return this.store.subscribe(i)}subscribeToOffsetChange(t){W(typeof t=="function","listener must be a function.");let n=this.store.getState().dragOffset;const r=()=>{const o=this.store.getState().dragOffset;o!==n&&(n=o,t())};return this.store.subscribe(r)}canDragSource(t){if(!t)return!1;const n=this.registry.getSource(t);return W(n,`Expected to find a valid source. sourceId=${t}`),this.isDragging()?!1:n.canDrag(this,t)}canDropOnTarget(t){if(!t)return!1;const n=this.registry.getTarget(t);if(W(n,`Expected to find a valid target. targetId=${t}`),!this.isDragging()||this.didDrop())return!1;const r=this.registry.getTargetType(t),o=this.getItemType();return er(r,o)&&n.canDrop(this,t)}isDragging(){return!!this.getItemType()}isDraggingSource(t){if(!t)return!1;const n=this.registry.getSource(t,!0);if(W(n,`Expected to find a valid source. sourceId=${t}`),!this.isDragging()||!this.isSourcePublic())return!1;const r=this.registry.getSourceType(t),o=this.getItemType();return r!==o?!1:n.isDragging(this,t)}isOverTarget(t,n={shallow:!1}){if(!t)return!1;const{shallow:r}=n;if(!this.isDragging())return!1;const o=this.registry.getTargetType(t),i=this.getItemType();if(i&&!er(o,i))return!1;const a=this.getTargetIds();if(!a.length)return!1;const l=a.indexOf(t);return r?l===a.length-1:l>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return!!this.store.getState().dragOperation.isSourcePublic}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return av(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return sv(this.store.getState().dragOffset)}constructor(t,n){this.store=t,this.registry=n}}const _o=typeof global<"u"?global:self,ns=_o.MutationObserver||_o.WebKitMutationObserver;function rs(e){return function(){const n=setTimeout(o,0),r=setInterval(o,50);function o(){clearTimeout(n),clearInterval(r),e()}}}function dv(e){let t=1;const n=new ns(e),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){t=-t,r.data=t}}const uv=typeof ns=="function"?dv:rs;class hv{enqueueTask(t){const{queue:n,requestFlush:r}=this;n.length||(r(),this.flushing=!0),n[n.length]=t}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:t}=this;for(;this.index<t.length;){const n=this.index;if(this.index++,t[n].call(),this.index>this.capacity){for(let r=0,o=t.length-this.index;r<o;r++)t[r]=t[r+this.index];t.length-=this.index,this.index=0}}t.length=0,this.index=0,this.flushing=!1},this.registerPendingError=t=>{this.pendingErrors.push(t),this.requestErrorThrow()},this.requestFlush=uv(this.flush),this.requestErrorThrow=rs(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}}class fv{call(){try{this.task&&this.task()}catch(t){this.onError(t)}finally{this.task=null,this.release(this)}}constructor(t,n){this.onError=t,this.release=n,this.task=null}}class gv{create(t){const n=this.freeTasks,r=n.length?n.pop():new fv(this.onError,o=>n[n.length]=o);return r.task=t,r}constructor(t){this.onError=t,this.freeTasks=[]}}const os=new hv,pv=new gv(os.registerPendingError);function mv(e){os.enqueueTask(pv.create(e))}const Gr="dnd-core/ADD_SOURCE",Qr="dnd-core/ADD_TARGET",Jr="dnd-core/REMOVE_SOURCE",En="dnd-core/REMOVE_TARGET";function vv(e){return{type:Gr,payload:{sourceId:e}}}function bv(e){return{type:Qr,payload:{targetId:e}}}function yv(e){return{type:Jr,payload:{sourceId:e}}}function xv(e){return{type:En,payload:{targetId:e}}}function wv(e){W(typeof e.canDrag=="function","Expected canDrag to be a function."),W(typeof e.beginDrag=="function","Expected beginDrag to be a function."),W(typeof e.endDrag=="function","Expected endDrag to be a function.")}function Cv(e){W(typeof e.canDrop=="function","Expected canDrop to be a function."),W(typeof e.hover=="function","Expected hover to be a function."),W(typeof e.drop=="function","Expected beginDrag to be a function.")}function tr(e,t){if(t&&Array.isArray(e)){e.forEach(n=>tr(n,!1));return}W(typeof e=="string"||typeof e=="symbol",t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var Te;(function(e){e.SOURCE="SOURCE",e.TARGET="TARGET"})(Te||(Te={}));let $v=0;function Sv(){return $v++}function Tv(e){const t=Sv().toString();switch(e){case Te.SOURCE:return`S${t}`;case Te.TARGET:return`T${t}`;default:throw new Error(`Unknown Handler Role: ${e}`)}}function Ao(e){switch(e[0]){case"S":return Te.SOURCE;case"T":return Te.TARGET;default:throw new Error(`Cannot parse handler ID: ${e}`)}}function No(e,t){const n=e.entries();let r=!1;do{const{done:o,value:[,i]}=n.next();if(i===t)return!0;r=!!o}while(!r);return!1}class kv{addSource(t,n){tr(t),wv(n);const r=this.addHandler(Te.SOURCE,t,n);return this.store.dispatch(vv(r)),r}addTarget(t,n){tr(t,!0),Cv(n);const r=this.addHandler(Te.TARGET,t,n);return this.store.dispatch(bv(r)),r}containsHandler(t){return No(this.dragSources,t)||No(this.dropTargets,t)}getSource(t,n=!1){return W(this.isSourceId(t),"Expected a valid source ID."),n&&t===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(t)}getTarget(t){return W(this.isTargetId(t),"Expected a valid target ID."),this.dropTargets.get(t)}getSourceType(t){return W(this.isSourceId(t),"Expected a valid source ID."),this.types.get(t)}getTargetType(t){return W(this.isTargetId(t),"Expected a valid target ID."),this.types.get(t)}isSourceId(t){return Ao(t)===Te.SOURCE}isTargetId(t){return Ao(t)===Te.TARGET}removeSource(t){W(this.getSource(t),"Expected an existing source."),this.store.dispatch(yv(t)),mv(()=>{this.dragSources.delete(t),this.types.delete(t)})}removeTarget(t){W(this.getTarget(t),"Expected an existing target."),this.store.dispatch(xv(t)),this.dropTargets.delete(t),this.types.delete(t)}pinSource(t){const n=this.getSource(t);W(n,"Expected an existing source."),this.pinnedSourceId=t,this.pinnedSource=n}unpinSource(){W(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(t,n,r){const o=Tv(t);return this.types.set(o,n),t===Te.SOURCE?this.dragSources.set(o,r):t===Te.TARGET&&this.dropTargets.set(o,r),o}constructor(t){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=t}}const Dv=(e,t)=>e===t;function Mv(e,t){return!e&&!t?!0:!e||!t?!1:e.x===t.x&&e.y===t.y}function Pv(e,t,n=Dv){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(!n(e[r],t[r]))return!1;return!0}function Ev(e=Lt,t){switch(t.type){case Dn:break;case Gr:case Qr:case En:case Jr:return Lt;case kn:case Yr:case Pn:case Mn:default:return Xr}const{targetIds:n=[],prevTargetIds:r=[]}=t.payload,o=L1(n,r);if(!(o.length>0||!Pv(n,r)))return Lt;const a=r[r.length-1],l=n[n.length-1];return a!==l&&(a&&o.push(a),l&&o.push(l)),o}function Ov(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Iv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){Ov(e,o,n[o])})}return e}const Ro={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function jv(e=Ro,t){const{payload:n}=t;switch(t.type){case qr:case kn:return{initialSourceClientOffset:n.sourceClientOffset,initialClientOffset:n.clientOffset,clientOffset:n.clientOffset};case Dn:return Mv(e.clientOffset,n.clientOffset)?e:Iv({},e,{clientOffset:n.clientOffset});case Pn:case Mn:return Ro;default:return e}}function Lv(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){Lv(e,o,n[o])})}return e}const _v={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function Av(e=_v,t){const{payload:n}=t;switch(t.type){case kn:return bt({},e,{itemType:n.itemType,item:n.item,sourceId:n.sourceId,isSourcePublic:n.isSourcePublic,dropResult:null,didDrop:!1});case Yr:return bt({},e,{isSourcePublic:!0});case Dn:return bt({},e,{targetIds:n.targetIds});case En:return e.targetIds.indexOf(n.targetId)===-1?e:bt({},e,{targetIds:j1(e.targetIds,n.targetId)});case Mn:return bt({},e,{dropResult:n.dropResult,didDrop:!0,targetIds:[]});case Pn:return bt({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}}function Nv(e=0,t){switch(t.type){case Gr:case Qr:return e+1;case Jr:case En:return e-1;default:return e}}function Rv(e=0){return e+1}function zv(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hv(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){zv(e,o,n[o])})}return e}function Wv(e={},t){return{dirtyHandlerIds:Ev(e.dirtyHandlerIds,{type:t.type,payload:Hv({},t.payload,{prevTargetIds:I1(e,"dragOperation.targetIds",[])})}),dragOffset:jv(e.dragOffset,t),refCount:Nv(e.refCount,t),dragOperation:Av(e.dragOperation,t),stateId:Rv(e.stateId)}}function Fv(e,t=void 0,n={},r=!1){const o=Bv(r),i=new cv(o,new kv(o)),a=new ov(o,i),l=e(a,t,n);return a.receiveBackend(l),a}function Bv(e){const t=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__;return Za(Wv,e&&t&&t({name:"dnd-core",instanceId:"dnd-core"}))}function Vv(e,t){if(e==null)return{};var n=Uv(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Uv(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}let zo=0;const an=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var qv=h.memo(function(t){var{children:n}=t,r=Vv(t,["children"]);const[o,i]=Yv(r);return h.useEffect(()=>{if(i){const a=is();return++zo,()=>{--zo===0&&(a[an]=null)}}},[]),s.jsx(Ka.Provider,{value:o,children:n})});function Yv(e){if("manager"in e)return[{dragDropManager:e.manager},!1];const t=Xv(e.backend,e.context,e.options,e.debugMode),n=!e.context;return[t,n]}function Xv(e,t=is(),n,r){const o=t;return o[an]||(o[an]={dragDropManager:Fv(e,t,n,r)}),o[an]}function is(){return typeof global<"u"?global:window}var Gv=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(o=r;o--!==0;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(i=Object.keys(t),r=i.length,r!==Object.keys(n).length)return!1;for(o=r;o--!==0;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;o--!==0;){var a=i[o];if(!e(t[a],n[a]))return!1}return!0}return t!==t&&n!==n};const Qv=ui(Gv),ct=typeof window<"u"?h.useLayoutEffect:h.useEffect;function as(e,t,n){const[r,o]=h.useState(()=>t(e)),i=h.useCallback(()=>{const a=t(e);Qv(r,a)||(o(a),n&&n())},[r,e,n]);return ct(i),[r,i]}function Jv(e,t,n){const[r,o]=as(e,t,n);return ct(function(){const a=e.getHandlerId();if(a!=null)return e.subscribeToStateChange(o,{handlerIds:[a]})},[e,o]),r}function ss(e,t,n){return Jv(t,e||(()=>({})),()=>n.reconnect())}function ls(e,t){const n=[...t||[]];return t==null&&typeof e!="function"&&n.push(e),h.useMemo(()=>typeof e=="function"?e():e,n)}function Kv(e){return h.useMemo(()=>e.hooks.dragSource(),[e])}function Zv(e){return h.useMemo(()=>e.hooks.dragPreview(),[e])}let zn=!1,Hn=!1;class eb{receiveHandlerId(t){this.sourceId=t}getHandlerId(){return this.sourceId}canDrag(){W(!zn,"You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return zn=!0,this.internalMonitor.canDragSource(this.sourceId)}finally{zn=!1}}isDragging(){if(!this.sourceId)return!1;W(!Hn,"You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor");try{return Hn=!0,this.internalMonitor.isDraggingSource(this.sourceId)}finally{Hn=!1}}subscribeToStateChange(t,n){return this.internalMonitor.subscribeToStateChange(t,n)}isDraggingSource(t){return this.internalMonitor.isDraggingSource(t)}isOverTarget(t,n){return this.internalMonitor.isOverTarget(t,n)}getTargetIds(){return this.internalMonitor.getTargetIds()}isSourcePublic(){return this.internalMonitor.isSourcePublic()}getSourceId(){return this.internalMonitor.getSourceId()}subscribeToOffsetChange(t){return this.internalMonitor.subscribeToOffsetChange(t)}canDragSource(t){return this.internalMonitor.canDragSource(t)}canDropOnTarget(t){return this.internalMonitor.canDropOnTarget(t)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.sourceId=null,this.internalMonitor=t.getMonitor()}}let Wn=!1;class tb{receiveHandlerId(t){this.targetId=t}getHandlerId(){return this.targetId}subscribeToStateChange(t,n){return this.internalMonitor.subscribeToStateChange(t,n)}canDrop(){if(!this.targetId)return!1;W(!Wn,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return Wn=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{Wn=!1}}isOver(t){return this.targetId?this.internalMonitor.isOverTarget(this.targetId,t):!1}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(t){this.targetId=null,this.internalMonitor=t.getMonitor()}}function nb(e,t,n){const r=n.getRegistry(),o=r.addTarget(e,t);return[o,()=>r.removeTarget(o)]}function rb(e,t,n){const r=n.getRegistry(),o=r.addSource(e,t);return[o,()=>r.removeSource(o)]}function nr(e,t,n,r){let o=n?n.call(r,e,t):void 0;if(o!==void 0)return!!o;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;const i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;const l=Object.prototype.hasOwnProperty.bind(t);for(let c=0;c<i.length;c++){const u=i[c];if(!l(u))return!1;const d=e[u],f=t[u];if(o=n?n.call(r,d,f,u):void 0,o===!1||o===void 0&&d!==f)return!1}return!0}function rr(e){return e!==null&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function ob(e){if(typeof e.type=="string")return;const t=e.type.displayName||e.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}function ib(e){return(t=null,n=null)=>{if(!h.isValidElement(t)){const i=t;return e(i,n),i}const r=t;return ob(r),ab(r,n?i=>e(i,n):e)}}function cs(e){const t={};return Object.keys(e).forEach(n=>{const r=e[n];if(n.endsWith("Ref"))t[n]=e[n];else{const o=ib(r);t[n]=()=>o}}),t}function Ho(e,t){typeof e=="function"?e(t):e.current=t}function ab(e,t){const n=e.ref;return W(typeof n!="string","Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),n?h.cloneElement(e,{ref:r=>{Ho(n,r),Ho(t,r)}}):h.cloneElement(e,{ref:t})}class sb{receiveHandlerId(t){this.handlerId!==t&&(this.handlerId=t,this.reconnect())}get connectTarget(){return this.dragSource}get dragSourceOptions(){return this.dragSourceOptionsInternal}set dragSourceOptions(t){this.dragSourceOptionsInternal=t}get dragPreviewOptions(){return this.dragPreviewOptionsInternal}set dragPreviewOptions(t){this.dragPreviewOptionsInternal=t}reconnect(){const t=this.reconnectDragSource();this.reconnectDragPreview(t)}reconnectDragSource(){const t=this.dragSource,n=this.didHandlerIdChange()||this.didConnectedDragSourceChange()||this.didDragSourceOptionsChange();return n&&this.disconnectDragSource(),this.handlerId?t?(n&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragSource=t,this.lastConnectedDragSourceOptions=this.dragSourceOptions,this.dragSourceUnsubscribe=this.backend.connectDragSource(this.handlerId,t,this.dragSourceOptions)),n):(this.lastConnectedDragSource=t,n):n}reconnectDragPreview(t=!1){const n=this.dragPreview,r=t||this.didHandlerIdChange()||this.didConnectedDragPreviewChange()||this.didDragPreviewOptionsChange();if(r&&this.disconnectDragPreview(),!!this.handlerId){if(!n){this.lastConnectedDragPreview=n;return}r&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDragPreview=n,this.lastConnectedDragPreviewOptions=this.dragPreviewOptions,this.dragPreviewUnsubscribe=this.backend.connectDragPreview(this.handlerId,n,this.dragPreviewOptions))}}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didConnectedDragSourceChange(){return this.lastConnectedDragSource!==this.dragSource}didConnectedDragPreviewChange(){return this.lastConnectedDragPreview!==this.dragPreview}didDragSourceOptionsChange(){return!nr(this.lastConnectedDragSourceOptions,this.dragSourceOptions)}didDragPreviewOptionsChange(){return!nr(this.lastConnectedDragPreviewOptions,this.dragPreviewOptions)}disconnectDragSource(){this.dragSourceUnsubscribe&&(this.dragSourceUnsubscribe(),this.dragSourceUnsubscribe=void 0)}disconnectDragPreview(){this.dragPreviewUnsubscribe&&(this.dragPreviewUnsubscribe(),this.dragPreviewUnsubscribe=void 0,this.dragPreviewNode=null,this.dragPreviewRef=null)}get dragSource(){return this.dragSourceNode||this.dragSourceRef&&this.dragSourceRef.current}get dragPreview(){return this.dragPreviewNode||this.dragPreviewRef&&this.dragPreviewRef.current}clearDragSource(){this.dragSourceNode=null,this.dragSourceRef=null}clearDragPreview(){this.dragPreviewNode=null,this.dragPreviewRef=null}constructor(t){this.hooks=cs({dragSource:(n,r)=>{this.clearDragSource(),this.dragSourceOptions=r||null,rr(n)?this.dragSourceRef=n:this.dragSourceNode=n,this.reconnectDragSource()},dragPreview:(n,r)=>{this.clearDragPreview(),this.dragPreviewOptions=r||null,rr(n)?this.dragPreviewRef=n:this.dragPreviewNode=n,this.reconnectDragPreview()}}),this.handlerId=null,this.dragSourceRef=null,this.dragSourceOptionsInternal=null,this.dragPreviewRef=null,this.dragPreviewOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDragSource=null,this.lastConnectedDragSourceOptions=null,this.lastConnectedDragPreview=null,this.lastConnectedDragPreviewOptions=null,this.backend=t}}class lb{get connectTarget(){return this.dropTarget}reconnect(){const t=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();t&&this.disconnectDropTarget();const n=this.dropTarget;if(this.handlerId){if(!n){this.lastConnectedDropTarget=n;return}t&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=n,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,n,this.dropTargetOptions))}}receiveHandlerId(t){t!==this.handlerId&&(this.handlerId=t,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(t){this.dropTargetOptionsInternal=t}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!nr(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(t){this.hooks=cs({dropTarget:(n,r)=>{this.clearDropTarget(),this.dropTargetOptions=r,rr(n)?this.dropTargetRef=n:this.dropTargetNode=n,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=t}}function mt(){const{dragDropManager:e}=h.useContext(Ka);return W(e!=null,"Expected drag drop context"),e}function cb(e,t){const n=mt(),r=h.useMemo(()=>new sb(n.getBackend()),[n]);return ct(()=>(r.dragSourceOptions=e||null,r.reconnect(),()=>r.disconnectDragSource()),[r,e]),ct(()=>(r.dragPreviewOptions=t||null,r.reconnect(),()=>r.disconnectDragPreview()),[r,t]),r}function db(){const e=mt();return h.useMemo(()=>new eb(e),[e])}class ub{beginDrag(){const t=this.spec,n=this.monitor;let r=null;return typeof t.item=="object"?r=t.item:typeof t.item=="function"?r=t.item(n):r={},r??null}canDrag(){const t=this.spec,n=this.monitor;return typeof t.canDrag=="boolean"?t.canDrag:typeof t.canDrag=="function"?t.canDrag(n):!0}isDragging(t,n){const r=this.spec,o=this.monitor,{isDragging:i}=r;return i?i(o):n===t.getSourceId()}endDrag(){const t=this.spec,n=this.monitor,r=this.connector,{end:o}=t;o&&o(n.getItem(),n),r.reconnect()}constructor(t,n,r){this.spec=t,this.monitor=n,this.connector=r}}function hb(e,t,n){const r=h.useMemo(()=>new ub(e,t,n),[t,n]);return h.useEffect(()=>{r.spec=e},[e]),r}function fb(e){return h.useMemo(()=>{const t=e.type;return W(t!=null,"spec.type must be defined"),t},[e])}function gb(e,t,n){const r=mt(),o=hb(e,t,n),i=fb(e);ct(function(){if(i!=null){const[l,c]=rb(i,o,r);return t.receiveHandlerId(l),n.receiveHandlerId(l),c}},[r,t,n,o,i])}function pb(e,t){const n=ls(e,t);W(!n.begin,"useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)");const r=db(),o=cb(n.options,n.previewOptions);return gb(n,r,o),[ss(n.collect,r,o),Kv(o),Zv(o)]}function mb(e){const n=mt().getMonitor(),[r,o]=as(n,e);return h.useEffect(()=>n.subscribeToOffsetChange(o)),h.useEffect(()=>n.subscribeToStateChange(o)),r}function vb(e){return h.useMemo(()=>e.hooks.dropTarget(),[e])}function bb(e){const t=mt(),n=h.useMemo(()=>new lb(t.getBackend()),[t]);return ct(()=>(n.dropTargetOptions=e||null,n.reconnect(),()=>n.disconnectDropTarget()),[e]),n}function yb(){const e=mt();return h.useMemo(()=>new tb(e),[e])}function xb(e){const{accept:t}=e;return h.useMemo(()=>(W(e.accept!=null,"accept must be defined"),Array.isArray(t)?t:[t]),[t])}class wb{canDrop(){const t=this.spec,n=this.monitor;return t.canDrop?t.canDrop(n.getItem(),n):!0}hover(){const t=this.spec,n=this.monitor;t.hover&&t.hover(n.getItem(),n)}drop(){const t=this.spec,n=this.monitor;if(t.drop)return t.drop(n.getItem(),n)}constructor(t,n){this.spec=t,this.monitor=n}}function Cb(e,t){const n=h.useMemo(()=>new wb(e,t),[t]);return h.useEffect(()=>{n.spec=e},[e]),n}function $b(e,t,n){const r=mt(),o=Cb(e,t),i=xb(e);ct(function(){const[l,c]=nb(i,o,r);return t.receiveHandlerId(l),n.receiveHandlerId(l),c},[r,t,o,n,i.map(a=>a.toString()).join("|")])}function Sb(e,t){const n=ls(e,t),r=yb(),o=bb(n.options);return $b(n,r,o),[ss(n.collect,r,o),vb(o)]}function ds(e){let t=null;return()=>(t==null&&(t=e()),t)}function Tb(e,t){return e.filter(n=>n!==t)}function kb(e,t){const n=new Set,r=i=>n.add(i);e.forEach(r),t.forEach(r);const o=[];return n.forEach(i=>o.push(i)),o}class Db{enter(t){const n=this.entered.length,r=o=>this.isNodeInDocument(o)&&(!o.contains||o.contains(t));return this.entered=kb(this.entered.filter(r),[t]),n===0&&this.entered.length>0}leave(t){const n=this.entered.length;return this.entered=Tb(this.entered.filter(this.isNodeInDocument),t),n>0&&this.entered.length===0}reset(){this.entered=[]}constructor(t){this.entered=[],this.isNodeInDocument=t}}class Mb{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(t=>{Object.defineProperty(this.item,t,{configurable:!0,enumerable:!0,get(){return console.warn(`Browser doesn't allow reading "${t}" until the drop event.`),null}})})}loadDataTransfer(t){if(t){const n={};Object.keys(this.config.exposeProperties).forEach(r=>{const o=this.config.exposeProperties[r];o!=null&&(n[r]={value:o(t,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,n)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(t,n){return n===t.getSourceId()}endDrag(){}constructor(t){this.config=t,this.item={},this.initializeExposedProperties()}}const us="__NATIVE_FILE__",hs="__NATIVE_URL__",fs="__NATIVE_TEXT__",gs="__NATIVE_HTML__",Wo=Object.freeze(Object.defineProperty({__proto__:null,FILE:us,HTML:gs,TEXT:fs,URL:hs},Symbol.toStringTag,{value:"Module"}));function Fn(e,t,n){const r=t.reduce((o,i)=>o||e.getData(i),"");return r??n}const or={[us]:{exposeProperties:{files:e=>Array.prototype.slice.call(e.files),items:e=>e.items,dataTransfer:e=>e},matchesTypes:["Files"]},[gs]:{exposeProperties:{html:(e,t)=>Fn(e,t,""),dataTransfer:e=>e},matchesTypes:["Html","text/html"]},[hs]:{exposeProperties:{urls:(e,t)=>Fn(e,t,"").split(`
`),dataTransfer:e=>e},matchesTypes:["Url","text/uri-list"]},[fs]:{exposeProperties:{text:(e,t)=>Fn(e,t,""),dataTransfer:e=>e},matchesTypes:["Text","text/plain"]}};function Pb(e,t){const n=or[e];if(!n)throw new Error(`native type ${e} has no configuration`);const r=new Mb(n);return r.loadDataTransfer(t),r}function Bn(e){if(!e)return null;const t=Array.prototype.slice.call(e.types||[]);return Object.keys(or).filter(n=>{const r=or[n];return r!=null&&r.matchesTypes?r.matchesTypes.some(o=>t.indexOf(o)>-1):!1})[0]||null}const Eb=ds(()=>/firefox/i.test(navigator.userAgent)),ps=ds(()=>!!window.safari);class Fo{interpolate(t){const{xs:n,ys:r,c1s:o,c2s:i,c3s:a}=this;let l=n.length-1;if(t===n[l])return r[l];let c=0,u=a.length-1,d;for(;c<=u;){d=Math.floor(.5*(c+u));const m=n[d];if(m<t)c=d+1;else if(m>t)u=d-1;else return r[d]}l=Math.max(0,u);const f=t-n[l],v=f*f;return r[l]+o[l]*f+i[l]*v+a[l]*f*v}constructor(t,n){const{length:r}=t,o=[];for(let m=0;m<r;m++)o.push(m);o.sort((m,b)=>t[m]<t[b]?-1:1);const i=[],a=[];let l,c;for(let m=0;m<r-1;m++)l=t[m+1]-t[m],c=n[m+1]-n[m],i.push(l),a.push(c/l);const u=[a[0]];for(let m=0;m<i.length-1;m++){const b=a[m],g=a[m+1];if(b*g<=0)u.push(0);else{l=i[m];const y=i[m+1],w=l+y;u.push(3*w/((w+y)/b+(w+l)/g))}}u.push(a[a.length-1]);const d=[],f=[];let v;for(let m=0;m<u.length-1;m++){v=a[m];const b=u[m],g=1/i[m],y=b+u[m+1]-v-v;d.push((v-b-y)*g),f.push(y*g*g)}this.xs=t,this.ys=n,this.c1s=u,this.c2s=d,this.c3s=f}}const Ob=1;function ms(e){const t=e.nodeType===Ob?e:e.parentElement;if(!t)return null;const{top:n,left:r}=t.getBoundingClientRect();return{x:r,y:n}}function tn(e){return{x:e.clientX,y:e.clientY}}function Ib(e){var t;return e.nodeName==="IMG"&&(Eb()||!(!((t=document.documentElement)===null||t===void 0)&&t.contains(e)))}function jb(e,t,n,r){let o=e?t.width:n,i=e?t.height:r;return ps()&&e&&(i/=window.devicePixelRatio,o/=window.devicePixelRatio),{dragPreviewWidth:o,dragPreviewHeight:i}}function Lb(e,t,n,r,o){const i=Ib(t),l=ms(i?e:t),c={x:n.x-l.x,y:n.y-l.y},{offsetWidth:u,offsetHeight:d}=e,{anchorX:f,anchorY:v}=r,{dragPreviewWidth:m,dragPreviewHeight:b}=jb(i,t,u,d),g=()=>{let L=new Fo([0,.5,1],[c.y,c.y/d*b,c.y+b-d]).interpolate(v);return ps()&&i&&(L+=(window.devicePixelRatio-1)*b),L},y=()=>new Fo([0,.5,1],[c.x,c.x/u*m,c.x+m-u]).interpolate(f),{offsetX:w,offsetY:S}=o,C=w===0||w,M=S===0||S;return{x:C?w:y(),y:M?S:g()}}class _b{get window(){if(this.globalContext)return this.globalContext;if(typeof window<"u")return window}get document(){var t;return!((t=this.globalContext)===null||t===void 0)&&t.document?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var t;return((t=this.optionsArgs)===null||t===void 0?void 0:t.rootElement)||this.window}constructor(t,n){this.ownerDocument=null,this.globalContext=t,this.optionsArgs=n}}function Ab(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Bo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{},r=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(o){return Object.getOwnPropertyDescriptor(n,o).enumerable}))),r.forEach(function(o){Ab(e,o,n[o])})}return e}class Nb{profile(){var t,n;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:((t=this.dragStartSourceIds)===null||t===void 0?void 0:t.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:((n=this.dragOverTargetIds)===null||n===void 0?void 0:n.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const t=this.rootElement;if(t!==void 0){if(t.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");t.__isReactDndBackendSetUp=!0,this.addEventListeners(t)}}teardown(){const t=this.rootElement;if(t!==void 0&&(t.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId)){var n;(n=this.window)===null||n===void 0||n.cancelAnimationFrame(this.asyncEndDragFrameId)}}connectDragPreview(t,n,r){return this.sourcePreviewNodeOptions.set(t,r),this.sourcePreviewNodes.set(t,n),()=>{this.sourcePreviewNodes.delete(t),this.sourcePreviewNodeOptions.delete(t)}}connectDragSource(t,n,r){this.sourceNodes.set(t,n),this.sourceNodeOptions.set(t,r);const o=a=>this.handleDragStart(a,t),i=a=>this.handleSelectStart(a);return n.setAttribute("draggable","true"),n.addEventListener("dragstart",o),n.addEventListener("selectstart",i),()=>{this.sourceNodes.delete(t),this.sourceNodeOptions.delete(t),n.removeEventListener("dragstart",o),n.removeEventListener("selectstart",i),n.setAttribute("draggable","false")}}connectDropTarget(t,n){const r=a=>this.handleDragEnter(a,t),o=a=>this.handleDragOver(a,t),i=a=>this.handleDrop(a,t);return n.addEventListener("dragenter",r),n.addEventListener("dragover",o),n.addEventListener("drop",i),()=>{n.removeEventListener("dragenter",r),n.removeEventListener("dragover",o),n.removeEventListener("drop",i)}}addEventListeners(t){t.addEventListener&&(t.addEventListener("dragstart",this.handleTopDragStart),t.addEventListener("dragstart",this.handleTopDragStartCapture,!0),t.addEventListener("dragend",this.handleTopDragEndCapture,!0),t.addEventListener("dragenter",this.handleTopDragEnter),t.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.addEventListener("dragover",this.handleTopDragOver),t.addEventListener("dragover",this.handleTopDragOverCapture,!0),t.addEventListener("drop",this.handleTopDrop),t.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(t){t.removeEventListener&&(t.removeEventListener("dragstart",this.handleTopDragStart),t.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),t.removeEventListener("dragend",this.handleTopDragEndCapture,!0),t.removeEventListener("dragenter",this.handleTopDragEnter),t.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),t.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),t.removeEventListener("dragover",this.handleTopDragOver),t.removeEventListener("dragover",this.handleTopDragOverCapture,!0),t.removeEventListener("drop",this.handleTopDrop),t.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const t=this.monitor.getSourceId(),n=this.sourceNodeOptions.get(t);return Bo({dropEffect:this.altKeyPressed?"copy":"move"},n||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const t=this.monitor.getSourceId(),n=this.sourcePreviewNodeOptions.get(t);return Bo({anchorX:.5,anchorY:.5,captureDraggingState:!1},n||{})}isDraggingNativeItem(){const t=this.monitor.getItemType();return Object.keys(Wo).some(n=>Wo[n]===t)}beginDragNativeItem(t,n){this.clearCurrentDragSourceNode(),this.currentNativeSource=Pb(t,n),this.currentNativeHandle=this.registry.addSource(t,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(t){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=t;const n=1e3;this.mouseMoveTimeoutTimer=setTimeout(()=>{var r;return(r=this.rootElement)===null||r===void 0?void 0:r.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},n)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){if(this.currentDragSourceNode=null,this.rootElement){var t;(t=this.window)===null||t===void 0||t.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)}return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(t,n){t.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(n))}handleDragEnter(t,n){this.dragEnterTargetIds.unshift(n)}handleDragOver(t,n){this.dragOverTargetIds===null&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(n)}handleDrop(t,n){this.dropTargetIds.unshift(n)}constructor(t,n,r){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=o=>{const i=this.sourceNodes.get(o);return i&&ms(i)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=o=>!!(o&&this.document&&this.document.body&&this.document.body.contains(o)),this.endDragIfSourceWasRemovedFromDOM=()=>{const o=this.currentDragSourceNode;o==null||this.isNodeInDocument(o)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=o=>{this.hoverRafId===null&&typeof requestAnimationFrame<"u"&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(o||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{this.hoverRafId!==null&&typeof cancelAnimationFrame<"u"&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=o=>{if(o.defaultPrevented)return;const{dragStartSourceIds:i}=this;this.dragStartSourceIds=null;const a=tn(o);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(i||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:a});const{dataTransfer:l}=o,c=Bn(l);if(this.monitor.isDragging()){if(l&&typeof l.setDragImage=="function"){const d=this.monitor.getSourceId(),f=this.sourceNodes.get(d),v=this.sourcePreviewNodes.get(d)||f;if(v){const{anchorX:m,anchorY:b,offsetX:g,offsetY:y}=this.getCurrentSourcePreviewNodeOptions(),C=Lb(f,v,a,{anchorX:m,anchorY:b},{offsetX:g,offsetY:y});l.setDragImage(v,C.x,C.y)}}try{l==null||l.setData("application/json",{})}catch{}this.setCurrentDragSourceNode(o.target);const{captureDraggingState:u}=this.getCurrentSourcePreviewNodeOptions();u?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(c)this.beginDragNativeItem(c);else{if(l&&!l.types&&(o.target&&!o.target.hasAttribute||!o.target.hasAttribute("draggable")))return;o.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=o=>{if(this.dragEnterTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}if(!this.enterLeaveCounter.enter(o.target)||this.monitor.isDragging())return;const{dataTransfer:l}=o,c=Bn(l);c&&this.beginDragNativeItem(c,l)},this.handleTopDragEnter=o=>{const{dragEnterTargetIds:i}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=o.altKey,i.length>0&&this.actions.hover(i,{clientOffset:tn(o)}),i.some(l=>this.monitor.canDropOnTarget(l))&&(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=o=>{if(this.dragOverTargetIds=[],this.isDraggingNativeItem()){var i;(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}},this.handleTopDragOver=o=>{const{dragOverTargetIds:i}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging()){o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect="none");return}this.altKeyPressed=o.altKey,this.lastClientOffset=tn(o),this.scheduleHover(i),(i||[]).some(l=>this.monitor.canDropOnTarget(l))?(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?o.preventDefault():(o.preventDefault(),o.dataTransfer&&(o.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=o=>{this.isDraggingNativeItem()&&o.preventDefault(),this.enterLeaveCounter.leave(o.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=o=>{if(this.dropTargetIds=[],this.isDraggingNativeItem()){var i;o.preventDefault(),(i=this.currentNativeSource)===null||i===void 0||i.loadDataTransfer(o.dataTransfer)}else Bn(o.dataTransfer)&&o.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=o=>{const{dropTargetIds:i}=this;this.dropTargetIds=[],this.actions.hover(i,{clientOffset:tn(o)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=o=>{const i=o.target;typeof i.dragDrop=="function"&&(i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable||(o.preventDefault(),i.dragDrop()))},this.options=new _b(n,r),this.actions=t.getActions(),this.monitor=t.getMonitor(),this.registry=t.getRegistry(),this.enterLeaveCounter=new Db(this.isNodeInDocument)}}let nn;function Rb(){return nn||(nn=new Image,nn.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),nn}const zb=function(t,n,r){return new Nb(t,n,r)},Hb=()=>{const e=x(Sn),t=q(Ga);h.useEffect(()=>{const r=setInterval(()=>{const i=[...document.querySelectorAll(`div[data-table-name=${e.replaceAll(".","\\.")}]`)].map(a=>{if(a instanceof HTMLDivElement){const l=a.dataset,c=l.tableName,u=l.fieldName;if(c&&u){const d=Math.round(a.getBoundingClientRect().width);return{name:u,width:d}}}return null}).filter(a=>a!=null).map(a=>a);t({tableName:e,fields:i})},100);return()=>clearInterval(r)},[t,e])},Wb={width:void 0,resize:!1,hover:!1,initialWidth:0,minWidth:0,clientX:0},Fb=B("table/setLeftWidth"),Bb=B("table/setLeftResize"),Vb=B("table/setLeftHover"),Kr=B("table/setLeftSticky"),Ub=ue("leftResizeTableAtom",Wb,e=>[e(Fb,(t,n)=>({...t,leftWidth:n})),e(Bb,(t,n)=>({...t,leftResize:n})),e(Vb,(t,n)=>({...t,leftHover:n})),e(Kr,(t,n)=>({...t,...n}))]),qb=A(Ub,e=>e),Yb=({children:e,...t})=>{const{width:n,resize:r,hover:o,initialWidth:i,clientX:a,minWidth:l}=x(qb),{template:c,count:u,responsive:d,checkbox:f}=x(k0),v=q(Kr),[m,b]=h.useState(!1),g=h.useCallback(k=>{v({width:Math.max((n||0)+k.clientX-a,l)})},[a,l,v,n]),y=h.useCallback(()=>{v({resize:!1}),b(!1),document.removeEventListener("mousemove",g,!1),document.removeEventListener("mouseup",y,!1)},[g,v]);h.useEffect(()=>{a&&m&&(document.addEventListener("mousemove",g,!1),document.addEventListener("mouseup",y,!1))},[a,m]);const w=h.useCallback(k=>{d&&(v({clientX:k.clientX,width:n||i,resize:!0}),b(!0))},[d,v,n,i]),S=h.useMemo(()=>e,[e]),C=h.useCallback(()=>{v({hover:!0})},[v]),M=h.useCallback(()=>{v({hover:!1})},[v]);return s.jsxs(Xb,{...t,$columnsCount:u,$exclude:f?1:0,style:{width:`${n}px`},$template:c,children:[S,s.jsx(bs,{$responsive:d,$hover:d&&(r||o),onMouseDown:w,onMouseEnter:C,onMouseLeave:M,children:s.jsx(vs,{})})]})},Zr=p(Yb)``,vs=p.div`
  width: 3px;
  height: 100%;
  transition: background-color 0.2s ease-in-out;
  background-color: ${({theme:e})=>e.systemColors.grey200};
`,bs=p.div`
  position: absolute;
  top: 0;
  right: -6px;
  bottom: 0;
  padding: 0 3px;
  width: 9px;
  cursor: ${({$responsive:e})=>e?"ew-resize":"default"};

  ${({$hover:e})=>e&&T`
      & ${vs} {
        background-color: ${({theme:t})=>t.systemColors.blue600};
      }
    `}
`,Xb=p(Tr)`
  border-right-width: ${e=>e.$columnsCount-e.$exclude>0?"3px":"0"};
  grid-template-columns: ${({$template:e})=>e};
  left: 0;

  ${bs} {
    display: ${e=>e.$columnsCount-e.$exclude>0?"block":"none"};
  }
`,Gb=({children:e,...t})=>{const{template:n,count:r,width:o}=x(D0),i=h.useMemo(()=>e,[e]);return s.jsxs(Qb,{...t,$columnsCount:r,style:{width:`${o}px`},$template:n,children:[s.jsx(ys,{}),i]})},eo=p(Gb)``,ys=p.div`
  position: absolute;
  z-index: 2;
  left: 0;
  width: 3px;
  height: 100%;
  background-color: ${({theme:e})=>e.systemColors.grey200};
`,Qb=p(Tr)`
  grid-template-columns: ${({$template:e})=>e};
  right: 0;
  // padding-left: ${e=>e.$columnsCount>0?"3px":"0"};

  ${ys} {
    display: ${e=>e.$columnsCount>0?"block":"none"};
  }
`,to=(e,t,n)=>{const r=(n==null?void 0:n.id)&&(t==null?void 0:t[n.id])||(n==null?void 0:n._renderKey)&&(t==null?void 0:t[n._renderKey]);return r?r.find(o=>o.field===e):void 0},xs=e=>x(Pe,t=>t.find(n=>n.field===e),[e]),no=B("table/setHovered"),ro=ue("columnsHoverTableAtom","",e=>[e(no,(t,n)=>n)]),ws=B("table/setDragWidthTable"),Jb=ue("columnsDragWidthTableAtom",null,e=>[e(ws,(t,n)=>n)]),Kb=({ref:e,field:t,onHover:n,cantDrag:r})=>{const{draggable:o,indexMap:i}=x(Da),a=q(Lr),l=i[t],c=q(no),u=h.useCallback((b,g)=>{if(b!==g){const y=[...o],w=y[b];g<=b&&(y.splice(b,1),y.splice(g+1,0,w)),g>b&&(y.splice(g+1,0,w),y.splice(b,1)),g===void 0&&b!==0&&(y.splice(b,1),y.splice(0,0,w)),a(y),setTimeout(()=>{c(t)},0)}},[o,t,c,a]),[,d]=Sb({accept:"HEADER",hover(){e.current&&n(l)},drop(b){u(b.index,l)}}),[{isDragging:f},v,m]=pb({type:"HEADER",item:()=>({id:t,index:l}),collect:b=>({isDragging:b.isDragging()}),previewOptions:{captureDraggingState:!1},end:()=>n(-1),canDrag:()=>!r});return h.useEffect(()=>{m(Rb(),{captureDraggingState:!1})},[m]),h.useEffect(()=>{v(d(e))},[v,d,e]),{isDragging:f}};var Zb={prefix:"fad",iconName:"sort",icon:[320,512,["unsorted"],"f0dc",["M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z","M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]]},tC={prefix:"fad",iconName:"circle-half-stroke",icon:[512,512,[9680,"adjust"],"f042",["M512 256C512 114.6 397.4 0 256 0V64c106 0 192 86 192 192s-86 192-192 192v64c141.4 0 256-114.6 256-256z","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512V0z"]]};const Xt=({field:e,isDrag:t,dragWidth:n,fixed:r,...o})=>{const{sortDirection:i,sortField:a}=x(ze),l=q(d0),c=x(ft),u=x(pt),d=x(Ir),{all:f,sort:v}=x(Le),m=x(ro),b=q(no),g=xs(e),y=h.useMemo(()=>(g==null?void 0:g.disableSorting)||f||v,[f,g==null?void 0:g.disableSorting,v]),w=h.useCallback(()=>{var D;y||g!=null&&g.field&&g.sortable&&l(g.sortField||g.field),(D=g==null?void 0:g.onClick)==null||D.call(g)},[g,y,l]),S=h.useRef(null),C=x(Sn),M=x(k1,D=>{var j;return(j=D==null?void 0:D[C])==null?void 0:j[e]},[]),k=g!=null&&g.sortField?g.sortField===a:e===a,L=h.useCallback(D=>{u==="loaded"&&D&&!(g!=null&&g.noHover)?b(D):b("")},[g==null?void 0:g.noHover,b,u]),I=h.useMemo(()=>y?co:k?Zb:co,[y,k]);return g?s.jsx(hr,{content:g.tooltip,open:g.tooltip?void 0:!1,colorType:"light",appendTo:d,delay:ey,children:s.jsx(At,{ref:S,...o,$pointer:g.sortable,$width:g.static||g.staticRight||g.width,$contentPosition:g.contentPosition,$responsive:g.responsive,$solid:g.noHeader,$compact:c,onMouseEnter:()=>L(g.field),onMouseLeave:()=>L(""),onClick:w,$isDrag:t,$dragWidth:n,$isHovered:m===e,$fixedWidth:r?M:void 0,$padding:g.padding,"data-table-name":r?void 0:C,"data-field-name":r?void 0:e,children:u==="loading"?s.jsx(ce,{$size:"small",$width:g.static||g.width||128}):s.jsxs(s.Fragment,{children:[s.jsx(ty,{$noWrap:g.noWrap,$sorted:k,$isDrag:t,$contentPosition:g.contentPosition,children:g.title}),g.sortable&&s.jsx(ny,{children:s.jsx(ry,{icon:I,$drag:t,$sorted:k,$direction:i})})]})})}):s.jsx(s.Fragment,{})},ey=[500,500],ty=p.div`
  display: flex;
  align-items: center;
  white-space: normal;

  ${gr};
  font-weight: bold;
  line-height: 1.33;
  color: ${({theme:e,$sorted:t})=>t?e.systemColors.blue600:e.systemColors.grey600};
  ${({$isDrag:e})=>e&&T`
      color: ${({theme:t})=>t.systemColors.white};
    `}
  ${({$contentPosition:e})=>e==="right"&&T`
      text-align: right;
    `}
  ${({$noWrap:e})=>e&&T`
      white-space: nowrap;
    `}
`,ny=p.div`
  position: relative;
  margin-left: 8px;
`,ry=p(G)`
  z-index: 1;
  color: ${({theme:e,$sorted:t,$drag:n})=>t||n?e.systemColors.blue600:e.systemColors.grey300};

  ${({$direction:e})=>e==="DESC"&&T`
      transform: rotate(180deg);
      top: 9px;
    `}

  ${({$disabled:e})=>e&&T`
      color: ${({theme:t})=>t.systemColors.grey300};
    `}
`,Cs=({field:e,hover:t,drag:n,onDrag:r,onHover:o,fixed:i,draggable:a})=>{const{indexMap:l}=x(Da),c=l[e],u=xs(e),d=h.useRef(null),{isDragging:f}=Kb({ref:d,field:e,onHover:o,onDrag:r,cantDrag:!a}),v=q(ws),m=h.useMemo(()=>t===c?n>=c?"left":"right":"none",[t,c,n]);return h.useEffect(()=>{var b;f&&d.current&&v((b=d.current)==null?void 0:b.getBoundingClientRect().width)},[f,v]),s.jsx(oy,{ref:d,hover:m,$drag:f,width:u==null?void 0:u.width,draggable:a,children:s.jsx(Xt,{field:e,fixed:i})})},oy=p.div`
  position: sticky;
  top: 0;
  z-index: 1;

  ${At} {
    cursor: ${({$drag:e})=>e?"grabbing":"grab"};
  }

  ${({theme:e})=>`
    &:after {
      opacity: 0;
      position: absolute;
      content: '';
      width: 2px;
      background: ${e.systemColors.blue600};
      box-shadow: 0 0 0 1px ${e.systemColors.blue600};
      top: 0;
      height: 100%;
      z-index: 100;
    }
  `}
  ${({hover:e})=>e&&e!=="none"&&`
    z-index: 1;
    &:after {
      transition: opacity 0.15s ease;
      transition-delay: 0.2s;
      opacity: 1;
      ${e}: 1px;
    }
  `}

  ${({draggable:e})=>!e&&T`
      ${At} {
        cursor: pointer;
      }

      &:after {
        right: -5px;
      }
    `}
`,oo=e=>{const t=e.filter(iy).flatMap(n=>oo(n._children));return[...e,...t]},iy=e=>!!e._children,ay=()=>{const e=x(nt),t=x($a),n=q(Tn),r=x(pt),{all:o,checkbox:i}=x(Le),a=x(Fr,m=>oo(m).filter(b=>!b._nonSelectable),[]),l=x(ft),{hideGroup:c,haveCheckbox:u}=x(Pt),d=h.useMemo(()=>e.filter(m=>a.some(b=>b.id===m)),[e,a]),f=h.useMemo(()=>d.filter(m=>!t.includes(m)),[d,t]),v=()=>{const m=fd(t,e),b=f.length&&f.length<=a.length;n(b?a.filter(g=>m.includes(g.id)):a.filter(g=>!t.includes(g.id)||m.includes(g.id)))};return s.jsx(s.Fragment,{children:u?s.jsx(sy,{$solid:!0,$compact:l,children:!c&&(r==="loading"?s.jsx(ce,{$width:32,$size:"normal"}):s.jsx(Tt,{onChange:v,indeterminate:cd(d.length,a.length),checked:d.length>0,disabled:!a.length||o||i}))}):s.jsx(s.Fragment,{})})},sy=p(At)`
  width: 48px;
  padding: ${({$compact:e="normal"})=>Hi[e]};

  & ${Tt.Box} {
    margin-top: 0;
  }
`;function ly(e,t){if(!e||!t)return{display:"none"};const{x:n,y:r}=t,o=`translate(${n}px, ${r}px)`;return{transform:o,WebkitTransform:o}}const cy=({fixed:e})=>{const{itemType:t,isDragging:n,item:r,initialOffset:o,currentOffset:i}=mb(c=>({item:c.getItem(),itemType:c.getItemType(),initialOffset:c.getInitialSourceClientOffset(),currentOffset:c.getSourceClientOffset(),isDragging:c.isDragging()})),a=x(Jb),l=()=>t==="HEADER"?s.jsx(Xt,{field:r.id,isDrag:!0,dragWidth:a,fixed:e}):null;return n?s.jsx(dy,{children:s.jsx(uy,{style:ly(o,i),children:l()})}):null},dy=p.div`
  position: fixed;
  pointer-events: none;
  z-index: 10000000;
  left: 0;
  top: 0;
  cursor: grabbing;
`,uy=p.div``,hy=({columns:e,fixed:t,hover:n,setHover:r,drag:o,setDrag:i})=>s.jsxs(s.Fragment,{children:[e.length?e.map(a=>a==="_"?s.jsx(Xt,{field:a,fixed:t},a):s.jsx(Cs,{hover:n,drag:o,onHover:r,onDrag:i,field:a,fixed:t,draggable:!0},a)):s.jsx(kr,{}),s.jsx(cy,{fixed:t})]}),fy=({columns:e,fixed:t})=>s.jsxs(s.Fragment,{children:[e.map(n=>s.jsx(Xt,{field:n,fixed:t},n)),!e.length&&s.jsx(gy,{})]}),gy=p.div``,$s=h.memo(({fixed:e})=>{const{haveCheckbox:t}=x(Pt),n=q(Kr),{sticky:r,draggable:o,hidden:i,rightSticky:a}=x(Re),l=x(fe,y=>y.columnDraggable,[]),c=x(Pe);h.useEffect(()=>{let y=t?48:0,w=y;c.forEach(S=>{y=y+(S.static||0),w=w+(S.static?S.minWidth||S.static:0)}),y&&c.some(S=>S.static)&&(y=y+3,w=w+3),n({width:y,initialWidth:y,minWidth:w})},[c,t,n]);const u=o.filter(y=>!i.includes(y)),[d,f]=h.useState(-1),[v,m]=h.useState(-1),b=h.useCallback(y=>{y!==d&&f(y)},[d]);Hb();const g=h.useCallback((y,w)=>y.map((S,C)=>C===w?s.jsx(Cs,{hover:d,drag:v,onHover:b,onDrag:m,field:S,fixed:e,draggable:!1},S):s.jsx(Xt,{field:S,fixed:e},S)),[v,e,b,d]);return s.jsx(s.Fragment,{children:s.jsxs(qv,{backend:zb,children:[s.jsxs(py,{children:[s.jsx(ay,{}),g(r,r.length-1)]}),l?s.jsx(hy,{columns:u,fixed:e,hover:d,setHover:b,drag:v,setDrag:m}):s.jsx(fy,{columns:u,fixed:e}),s.jsx(my,{children:g(a,-1)})]})})}),py=p(Zr)`
  position: sticky;
  z-index: 11;
`,my=p(eo)`
  position: sticky;
  z-index: 11;
`,Ss=25,vy=64;var Ts={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t="far",n="arrow-up-to-line",r=384,o=512,i=["arrow-to-top"],a="f341",l="M24 32C10.7 32 0 42.7 0 56S10.7 80 24 80H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H24zM209.5 167.6c-4.5-4.8-10.9-7.6-17.5-7.6s-12.9 2.7-17.5 7.6l-128 136c-9.1 9.7-8.6 24.8 1 33.9s24.8 8.6 33.9-1L168 244.5V328 456c0 13.3 10.7 24 24 24s24-10.7 24-24V328 244.5l86.5 91.9c9.1 9.7 24.3 10.1 33.9 1s10.1-24.3 1-33.9l-128-136z";e.definition={prefix:t,iconName:n,icon:[r,o,i,a,l]},e.faArrowUpToLine=e.definition,e.prefix=t,e.iconName=n,e.width=r,e.height=o,e.ligatures=i,e.unicode=a,e.svgPathData=l,e.aliases=i})(Ts);const by=h.memo(()=>{const{t:e}=je(),t=x(pt),{scrollRefElement:n,show:r,topOffset:o}=x(va),i=x(De,f=>f.name,[]),{data:a}=x(Ve),l=document.getElementById(i+"_wrapper"),c=h.useMemo(()=>{var f;return(((f=n||l)==null?void 0:f.getBoundingClientRect().top)||0)+window.scrollY-(o||vy)},[l,n,o]),u=h.useCallback(()=>{var f;(f=n||window)==null||f.scrollTo({top:c,behavior:"smooth"})},[n,c]),d=h.useMemo(()=>a.length>=Ss&&r,[a.length,r]);return s.jsx(wy,{$isShowBackToTop:d,children:d?t==="loading"?s.jsx(yy,{}):s.jsx(Cy,{"data-testid":"table-backToTop",children:s.jsx(J,{onClick:u,icon:s.jsx(G,{icon:Ts.faArrowUpToLine}),buttonType:"tertiary",children:e("table.backToTop")})}):s.jsx(s.Fragment,{})})}),yy=()=>s.jsx(xy,{children:s.jsx(ce,{$size:"large",$width:112})}),xy=p.div`
  display: flex;

  ${ut.laptop} {
    margin-right: ${e=>e.theme.spacing.sp24};
  }
`,wy=p.div`
  width: 100%;
`,Cy=p.div`
  display: flex;
  justify-content: center;
  width: 100%;

  ${ut.laptop} {
    margin-bottom: 0;
    justify-content: start;
  }
`,ks=h.memo(({sticky:e})=>{const{noFooter:t,noPagination:n}=x(fe),{show:r}=x(va),{data:o}=x(Ve),i=h.useMemo(()=>o.length>=Ss&&r,[o.length,r]);return t?s.jsx(s.Fragment,{}):s.jsxs(ky,{$leftPagination:n,$isShowBackToTop:i,$sticky:e,children:[s.jsx(by,{}),s.jsx(Sy,{sticky:e}),s.jsx($y,{sticky:e})]})}),$y=({sticky:e})=>{const t=x(Le),n=x(pt);return s.jsx(My,{$sticky:e,children:n==="loading"?s.jsx(Ly,{}):s.jsx(Ty,{sticky:e,disabled:t.all||t.itemsPerPage})})},Sy=({sticky:e})=>{const t=x(Le),{noPagination:n}=x(fe),r=x(pt),o=x(I0),i=x(ze,c=>c.page,[]),a=q(gt),l=h.useCallback(({selected:c})=>{a({filter:{page:c+1},changes:"pagination"})},[a]);return s.jsx(Dy,{"data-testid":"table-pagination",$sticky:e,children:r==="loading"?s.jsx(jy,{noPagination:n}):n?s.jsx(Iy,{children:s.jsx(zm,{pageCount:o||1,forcePage:i-1,onPageChange:l,status:r,locked:t.all||t.pagination})}):s.jsx(Nm,{size:e?"50":"100",pageCount:o||1,onPageChange:l,forcePage:i-1,status:r,locked:t.all||t.pagination,onLockedClick:()=>{var c;return(c=t==null?void 0:t.onLock)==null?void 0:c.call(t,"pagination")}})})},Ty=({disabled:e,sticky:t})=>{var u;const{t:n}=je(),{itemsPerPage:r}=x(fe),o=x(Ir),i=x(ze,d=>d.count,[]),a=q(gt),l=h.useMemo(()=>(r==null?void 0:r.map(d=>({value:d,label:d.toString()})))||[],[r]),c=h.useCallback(d=>{d&&a({filter:{count:d.value,page:1},changes:"itemsPerPage"})},[a]);return(u=l==null?void 0:l[0])!=null&&u.value?s.jsxs(s.Fragment,{children:[s.jsx(Ey,{children:n("table.rowLimit")}),s.jsx(Py,{"data-testid":"table-rows-per-page",children:s.jsx(Oy,{size:t?"50":"100",value:{value:i,label:i},options:l,disabled:e,onChange:c,appendTo:o||(t?document.body:void 0)})})]}):s.jsx(s.Fragment,{})},ky=p.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 8px;

  ${({theme:e,$sticky:t})=>t?T`
          padding: 8px 24px;
        `:T`
          border-top: 1px solid ${e.systemColors.grey200};
          padding: 16px;
        `}
  ${ut.laptop} {
    gap: 24px;
    grid-template-columns: ${({$leftPagination:e})=>e?"auto auto 1fr":"1fr 2fr 1fr"};
  }

  justify-content: space-between;
  align-items: center;

  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`,Ds=p.div`
  padding: 8px 16px;
  border-radius: 100px;
  border: 1px solid ${({theme:e})=>e.systemColors.white};
  background-color: ${({theme:e})=>e.systemColors.white};

  ${({$sticky:e})=>e&&T`
      border: 1px solid ${({theme:t})=>t.systemColors.grey200};
    `};
`,Dy=p(Ds)`
  flex: 1;
  display: flex;
  justify-content: center;
`,My=p(Ds)`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  justify-self: center;
  padding: 7px 16px;

  ${ut.laptop} {
    justify-self: flex-end;
  }
`,Py=p.div`
  width: auto;
  flex: 0 0 auto;
`,Ey=p.div`
  font-size: 14px;
  white-space: nowrap;
  color: ${({theme:e})=>e.systemColors.grey600};
  margin-right: ${({theme:e})=>e.spacing.sp8};
`,Oy=p(ql)`
  min-width: 70px;
`,Iy=p.div`
  display: flex;
  flex-wrap: nowrap;
  gap: ${({theme:e})=>e.spacing.sp24};
`,jy=({noPagination:e})=>s.jsx(Ms,{children:e?s.jsxs(s.Fragment,{children:[s.jsx(ce,{$size:"large",$width:32}),s.jsx(Ay,{children:s.jsx(ce,{$size:"normal",$width:20})}),s.jsx(ce,{$size:"large",$width:32})]}):s.jsx(Ny,{$size:"large",$width:272})}),Ly=()=>s.jsxs(_y,{children:[s.jsx(ce,{$size:"small",$width:96}),s.jsx(ce,{$size:"large",$width:64})]}),Ms=p.div`
  display: flex;
  align-items: center;
`,_y=p(Ms)`
  ${ce}:first-child {
    margin-right: ${({theme:e})=>e.spacing.sp8};
  }
`,Ay=p.div`
  padding: 0 ${({theme:e})=>e.spacing.sp16};
  display: flex;
  justify-content: space-between;
  width: 52px;
`,Ny=p(ce)`
  min-width: 100px;
  max-width: 272px;
  width: 100%;
`,Ry=h.memo(()=>{const e=h.useRef(null),t=x(jr),n=x(Ot),r=q(Wa),o=q(Ba);return h.useEffect(()=>{if(t!=null){const i=()=>{var c,u,d,f;const a=(((u=(c=e.current)==null?void 0:c.getBoundingClientRect())==null?void 0:u.y)||0)-t<=0;a!==n.header&&(n.tableInView||!a)&&r(a);const l=window.innerHeight-(((f=(d=e.current)==null?void 0:d.getBoundingClientRect())==null?void 0:f.y)||0)>=400;l!==n.minimumView&&o(l)};return window.addEventListener("scroll",i),window.addEventListener("resize",i),window.addEventListener("orientationchange",i),()=>{window.removeEventListener("scroll",i),window.removeEventListener("resize",i),window.removeEventListener("orientationchange",i)}}},[t,r,o,n.header,n.minimumView,n.tableInView]),s.jsx(Ps,{ref:e,id:"table-sticky-header-anchor"})}),zy=h.memo(()=>{const e=h.useRef(null),t=x(pa),n=x(jr),r=x(Ot),o=q(Fa),i=q(Va);return h.useEffect(()=>{const a=()=>{var u,d;const l=((d=(u=e.current)==null?void 0:u.getBoundingClientRect())==null?void 0:d.y)||0;if(t!=null){const f=!(l+t<=window.innerHeight);f!==r.footer&&o(f)}const c=!(l<=48+n);c!==r.tableInView&&i(c)};return window.addEventListener("scroll",a),window.addEventListener("resize",a),window.addEventListener("orientationchange",a),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a),window.removeEventListener("orientationchange",a)}},[t,n,o,i,r.footer,r.tableInView]),s.jsx(Ps,{ref:e})}),Ps=p.div`
  width: 0;
  height: 0;
`,Hy=()=>{const e=x(Ma),t=x(zr),n=x(Hr),r=x(Wr),{rows:o,lineHeight:i,size:a}=x(O0);return s.jsx(Wy,{children:o.map((l,c)=>s.jsxs(h.Fragment,{children:[s.jsxs(Zr,{children:[t?s.jsx(xt,{$width:48,style:{height:i},children:s.jsx(ce,{$size:"normal"})}):s.jsx(s.Fragment,{}),n.map((u,d)=>s.jsx(xt,{$width:u.static||u.width,$padding:u.title?"normal":"empty",style:{height:i},children:s.jsx(ce,{$width:"60%",$size:a},d+"-"+l)},u.field))]}),e.length?e.map((u,d)=>s.jsx(xt,{$width:(u==null?void 0:u.static)||(u==null?void 0:u.width),$position:u==null?void 0:u.contentPosition,style:{height:i},children:s.jsx(ce,{$width:"60%",$size:a},d+"-"+l)},`${String(u==null?void 0:u.field)}-${d}`)):s.jsx(xt,{}),s.jsx(eo,{children:r.map((u,d)=>s.jsx(xt,{$width:u.staticRight||u.width,$padding:u.title?"normal":"empty",style:{height:i},children:s.jsx(ce,{$width:"60%",$size:a},d+"-"+l)},u.field))})]},c))})},xt=p.div`
  padding: ${({$padding:e})=>e==="empty"?"6px 4px":"6px 14px"};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: ${({theme:e})=>e.systemColors.white};
  width: ${({$width:e})=>Wi(e)};
  justify-content: ${e=>e.$position==="right"?"flex-end":"flex-start"};

  ${ce} {
    min-width: 20px;
  }
`,Wy=p.div`
  display: contents;

  ${xt} {
    border-bottom: 1px solid ${e=>e.theme.systemColors.grey200};
  }
`,Fy=({children:e,status:t,error:n})=>s.jsxs(s.Fragment,{children:[By.includes(t)&&s.jsx(Hy,{}),t==="error"&&s.jsx(qy,{children:n}),Vy.includes(t)&&s.jsx(s.Fragment,{children:e})]}),By=["loading","waiting","progress"],Vy=["init","loaded"],Uy=p.div`
  ${Me};
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,qy=p(Uy)`
  min-height: 40px;
  padding: ${({theme:{spacing:{sp8:e,sp16:t}}})=>`${e} ${t}`};
`,Yy=({data:e,checked:t})=>{const n=x(zr),r=q(Tn),o=x(Ve,b=>oo(b.data).filter(g=>!g._nonSelectable),[]),{all:i,checkbox:a}=x(Le),l=x(nt),c=x($a,b=>b.includes(e.id),[e.id]),u=x(ft),d=h.useMemo(()=>{if(e._children)return!e._children.filter(g=>!g._nonSelectable).every(g=>l.includes(g.id))},[e._children,l]),f=h.useMemo(()=>o.find(b=>{var g;return(g=b._children)==null?void 0:g.some(y=>y.id===e.id)}),[o,e.id]),v=h.useMemo(()=>ir(e._children),[e._children]),m=h.useCallback(()=>{const b=[e.id,...v],g=l.includes(e.id);(g&&Xy(l,f)||!g&&f)&&b.push(f.id);const S=g?id(l,b):yd(l,b);r(o.filter(C=>S.includes(C.id)))},[e.id,o,f,v,l,r]);return s.jsx(s.Fragment,{children:n?e._nonSelectable?s.jsx(Qy,{$compact:u}):s.jsx(Gy,{$compact:u,$checked:t,$active:e._active,"data-row-id":e.id,children:s.jsx(Tt,{checked:l.includes(e.id),indeterminate:d,onChange:m,disabled:c||i||a})}):s.jsx(s.Fragment,{})})},Xy=(e,t)=>{var r;const n=(r=t==null?void 0:t._children)==null?void 0:r.filter(o=>e.includes(o.id));return(n==null?void 0:n.length)===1},ir=e=>e?e.flatMap(t=>t._nonSelectable?ir(t._children):[t.id,...ir(t._children)]):[],Gy=p(Ie)`
  padding: ${({$compact:e="normal"})=>Hi[e]};

  ${({$active:e,theme:t})=>e&&`
    border-top: 2px solid ${t.systemColors.blue600} !important;
    border-bottom: 2px solid ${t.systemColors.blue600} !important;
    border-left: 2px solid ${t.systemColors.blue600} !important;
  `}
  & ${Tt.Box} {
    margin-top: 0;
  }
`,Qy=p(Ie)`
  width: ${({$compact:e})=>e==="compact"?"36px":"48px"};
  border-bottom: 1px solid ${({theme:e})=>e.systemColors.grey200};
`,Jy=({row:e,checked:t,marketplace:n,action:r,hovered:o,compact:i,alternativeRender:a,stickyColumns:l})=>{const c=h.useMemo(()=>s.jsx(s.Fragment,{children:l.map(d=>{if(d){const f=to(d.field,a,e);return s.jsx(Dr,{field:d.field,data:e,compact:i,marketplace:n,hovered:o===d.field,active:e.active,action:r,column:d,render:(f==null?void 0:f.render)||d.render,sticky:f==null?void 0:f.sticky},d.field)}else return null})}),[r,a,i,o,n,e,l]),u=h.useDeferredValue(c);return s.jsxs(Zr,{children:[s.jsx(Yy,{data:e,checked:t}),u]})},Ky=({row:e,alternativeRender:t,stickyColumns:n,hovered:r,compact:o,action:i,marketplace:a})=>{const l=h.useMemo(()=>s.jsx(s.Fragment,{children:n.map(c=>{if(c){const u=to(c.field,t,e);return s.jsx(Dr,{field:c.field,data:e,compact:o,marketplace:a,hovered:r===c.field,active:e.active,action:i,column:c,render:(u==null?void 0:u.render)||c.render,sticky:u==null?void 0:u.sticky},c.field)}else return null})}),[i,t,o,r,a,e,n]);return s.jsx(eo,{children:l})},Zy=e=>{const t=[];return e.forEach(n=>n._broken&&t.push(n.id)),t},io=({count:e,rows:t})=>{const n=x(m0),[r,o]=h.useState(()=>Zy(t)),i=h.useCallback((a,l)=>{if(n==="many"){const c=l??(r==null?void 0:r.some(u=>u===a));o(u=>c?u.filter(d=>d!==a):[...u,a])}else{const c=r.some(d=>d===a);o(l??!c?[a]:[])}},[r,n]);return s.jsx(s.Fragment,{children:t.map(a=>s.jsx(e2,{count:e,onBreak:i,broken:r,row:a},a.id))})},e2=({count:e,row:t,onBreak:n,broken:r})=>{const o=x(nt),i=x(p0),a=x(v0),[l,c]=h.useState({}),[u,d]=h.useState(!1),f=fr(d,300);h.useEffect(()=>{a==="hover"&&(n==null||n(t.id,u))},[a,u]);const v=h.useCallback(g=>{c(g),n==null||n(t.id)},[n,t.id]),m=(r==null?void 0:r.some(g=>t.id===g))||!1,b=h.useCallback(g=>{var y;if(i){const w=g._breakKey?i[g._breakKey]:i.all,S=(r==null?void 0:r.some(C=>g.id===C))||!1;return w?s.jsx(t2,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),count:e,children:(y=w.render)==null?void 0:y.call(w,g,{onBreak:()=>n==null?void 0:n(g.id),broken:S,brokenProps:l})}):s.jsx(s.Fragment,{})}},[r,l,e,f,n,i]);return s.jsx(Es,{checked:!!(o!=null&&o.includes(t.id)),row:t,columnsCount:e,onBreak:v,broken:m,breakRow:i&&m&&b(t),onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1)},t.id)},t2=({count:e,children:t,onMouseLeave:n,onMouseEnter:r})=>{const o=x(_e,i=>{var a;return(a=i.break)==null?void 0:a.position},[]);return s.jsx(r2,{onMouseEnter:r,onMouseLeave:n,$span:e,children:o==="fullSize"?t:s.jsx(n2,{children:t})})},n2=({children:e})=>{const t=x(Ur,n=>(n==null?void 0:n.width)||0,[]);return s.jsx(o2,{$width:t-2,children:e})},r2=p.div`
  grid-column: 1 / span ${({$span:e})=>e};
  position: relative;
`,o2=p.div`
  position: sticky;
  left: 0;
  width: ${({$width:e})=>e+"px"};
`,i2=({row:e,checked:t,columnsCount:n,onBreak:r,broken:o,breakRow:i,onMouseEnter:a,onMouseLeave:l})=>{var L;const c=x(ro),u=x(n0),d=x(g0),f=x(M0),v=x(Hr),m=x(Wr),[b,g]=h.useState(!!e._expanded),y=x(ft),w=x(ma),S=x(fe,I=>I.noRowHover,[]);h.useEffect(()=>{g(!!e._expanded)},[e._expanded]);const C=h.useCallback(()=>{g(I=>!I)},[]),M=h.useMemo(()=>({onExpand:C,onBreak:r||a2,broken:o||!1,expanded:b,size:w}),[o,b,C,r,w]),k=h.useMemo(()=>f.map((I,D,j)=>{if(I){const V=to(I.field,d,e);return s.jsx(Dr,{field:I.field,data:e,compact:y,marketplace:u,hovered:c===I.field,active:e.active,last:D===j.length-1,action:M,column:I,render:(V==null?void 0:V.render)||I.render,sticky:V==null?void 0:V.sticky},I.field)}else return null}),[M,d,y,c,u,e,f]);return s.jsxs(s.Fragment,{children:[s.jsxs(_t,{$checked:t,$noHover:S,"data-testid":"table-row",onMouseEnter:a,onMouseLeave:l,children:[s.jsx(Jy,{row:e,checked:t,marketplace:u,action:M,hovered:c,compact:y,alternativeRender:d,stickyColumns:v}),f.length?k:s.jsx(kr,{}),s.jsx(Ky,{stickyColumns:m,alternativeRender:d,hovered:c,marketplace:u,action:M,row:e,compact:y})]},e.id),i,(L=e._children)!=null&&L.length&&b?s.jsx(io,{rows:e._children,count:n}):s.jsx(s.Fragment,{})]})},Es=h.memo(i2),a2=()=>{},s2=({rows:e,count:t})=>{const n=x(nt);return s.jsx(s.Fragment,{children:e.map(r=>s.jsx(Es,{row:r,checked:!!(n!=null&&n.includes(r.id)),columnsCount:t},r.id))})},l2=e=>e.some(t=>t._broken===!0||t._broken===!1),c2=({count:e})=>{const{rows:t,hasBroken:n}=x(Fr,r=>({rows:r,hasBroken:l2(r)}),[]);return n?s.jsx(io,{count:e,rows:t}):s.jsx(s2,{count:e,rows:t})},d2=(e,t)=>e.width===t.width&&e.height===t.height,Vo=e=>{const t=e.getBoundingClientRect();return{width:t.width,height:t.height}};function u2(e){const t=h.useRef(e);return t.current=e,t}const h2=e=>{const[t,n]=h.useState(()=>e!=null&&e.current?Vo(e.current):null),r=u2(t);return h.useEffect(()=>{const o=new ResizeObserver(i=>{const a=Vo(i[0].target);(r.current===null||!d2(r.current,a))&&n(a)});return e!=null&&e.current&&o.observe(e.current),()=>o.disconnect()},[e]),t},f2=e=>{const[t,n]=h.useState(0);return h.useEffect(()=>{function r(){var i;n(((i=e.current)==null?void 0:i.scrollTop)||0)}const o=e.current;return o==null||o.addEventListener("scroll",r),o==null||o.addEventListener("resize",r),()=>{o==null||o.removeEventListener("scroll",r),o==null||o.removeEventListener("resize",r)}},[e]),t};function g2(e){const t=h2(e),n=f2(e);return h.useMemo(()=>({elementSize:t,elementScroll:n}),[t,n])}function p2(e){return h.useMemo(()=>e.map((t,n)=>{const r=t.id,o=n+1;return{key:r,rowNumber:o,item:t}}),[e])}function m2(e,t,n){var a;const[r,o]=h.useState(0),[,i]=h.useState(0);return h.useEffect(()=>{i(l=>{const c=Math.trunc(e.elementScroll/n);return c!==l?(o(e.elementScroll),c):l})},[e.elementScroll,n]),h.useMemo(()=>{var f;const l=[],c=[];let u=0;for(const v of t){const m=r,b=m+(((f=e.elementSize)==null?void 0:f.height)||0),g=(v.rowNumber-10)*n,y=(v.rowNumber+10)*n;g>b||y<m||(u||(u=v.rowNumber),l.push(v),c.push(v.item))}const d=(t.length-(u-1)-l.length)*n;return{rowsToRender:l,topHeight:(u-1)*n,bottomHeight:d,rows:c}},[(a=e.elementSize)==null?void 0:a.height,t,n,r])}const v2=(e,t,n)=>{const r=g2(e),o=p2(n);return m2(r,o,t)},b2=({count:e,contentRef:t,rowHeight:n})=>{const[r,o]=h.useState(null),i=h.useMemo(()=>s.jsx(s.Fragment,{children:[...new Array(e)].map((l,c)=>s.jsx("div",{style:{height:`${(r==null?void 0:r.topHeight)||0}px`}},"top"+c))}),[e,r==null?void 0:r.topHeight]),a=h.useMemo(()=>s.jsx(s.Fragment,{children:[...new Array(e)].map((l,c)=>s.jsx("div",{style:{height:`${(r==null?void 0:r.bottomHeight)||0}px`}},"bottom"+c))}),[e,r==null?void 0:r.bottomHeight]);return s.jsxs(s.Fragment,{children:[s.jsx(y2,{rowHeight:n,onChange:o,contentRef:t}),i,r?s.jsx(io,{count:e,rows:r.rows}):s.jsx(s.Fragment,{}),a]})},y2=({onChange:e,contentRef:t,rowHeight:n})=>{const r=x(Fr),o=v2(t,n,r);return h.useEffect(()=>{e(o)},[o,e]),s.jsx(s.Fragment,{})},x2=({status:e,virtual:t})=>{const{t:n}=je(),r=x(Pa),o=q(Ia),{haveData:i,needVirtual:a,rowHeight:l}=x(Ve,b=>({haveData:!!b.data.length,needVirtual:t!=null&&t.auto?b.data.length>t.auto:!!t,rowHeight:(t==null?void 0:t.rowHeight)||0}),[]),{noDataState:c,errorState:u}=x(fe),[d,f]=h.useState(),v=h.useCallback(b=>{b&&f({current:b})},[]);M1(d),h.useEffect(()=>{var b,g,y;e==="loaded"&&o((y=(g=(b=d==null?void 0:d.current)==null?void 0:b.lastElementChild)==null?void 0:g.lastElementChild)==null?void 0:y.clientHeight)},[d,o,e]);const m=x(ft);return s.jsxs(s.Fragment,{children:[s.jsx(C2,{tableRef:d}),s.jsxs(wn,{$columnsStyle:r.style,$columnsCount:r.count,$cellHeight:t==null?void 0:t.rowHeight,ref:v,$compact:m,children:[s.jsx($s,{fixed:!1}),s.jsx(Fy,{status:e,error:u||n("table.error"),children:i?a?d!=null&&d.current?s.jsx(b2,{count:r.count,contentRef:d,rowHeight:l}):s.jsx(s.Fragment,{}):s.jsx(c2,{count:r.count}):s.jsx(w2,{children:c||n("table.noData")})})]})]})},w2=p.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 100%;
  padding-top: ${({theme:e})=>e.spacing.sp64};
`,C2=({tableRef:e})=>{const t=h.useRef(null),n=h.useRef(null),r=x(lt,i=>!!i.stickyHeader,[]),o=x(lt,i=>!!i.stickyFooter,[]);return P1({tableRef:e,headerRef:t,footerRef:n}),s.jsxs(s.Fragment,{children:[r&&s.jsx($2,{fixedRef:t}),s.jsx(Ry,{}),o&&s.jsx(S2,{fixedRef:n})]})},$2=h.memo(({fixedRef:e})=>{const t=x(Pa),n=x(jr),r=x(Ot,a=>a.header&&a.tableInView,[]),o=x(ft),i=x(Ur);return s.jsx(T2,{$top:n,$left:(i==null?void 0:i.left)||0,$width:(i==null?void 0:i.width)||0,$show:r,children:s.jsx(wn,{$columnsStyle:t.style,$columnsCount:t.count,ref:e,$compact:o,children:s.jsx($s,{fixed:!0})})})}),S2=h.memo(({fixedRef:e})=>{const{footer:t}=x(Mt),n=x(pa),r=x(Ur),o=x(Ot,i=>i.footer&&(i.header||i.minimumView),[]);return s.jsxs(k2,{$bottom:n,$left:(r==null?void 0:r.left)||0,$width:(r==null?void 0:r.width)||0,$show:o,children:[t?s.jsx(D2,{children:t==null?void 0:t({sticky:!0})}):s.jsx(ks,{sticky:!0}),s.jsx(M2,{ref:e,children:s.jsx(P2,{style:{width:(r==null?void 0:r.scrollWidth)||0}})})]})}),Os=p.div`
  position: fixed;
  left: ${({$left:e})=>e}px;
  min-width: ${({$width:e})=>e}px;
  max-width: ${({$width:e})=>e}px;
  z-index: 100;
  overflow: hidden;

  opacity: ${({$show:e})=>e?1:0};
  height: ${({$show:e})=>e?"auto":0};

  & > * {
    overflow: hidden;
    max-height: ${({$show:e})=>e?"auto":0};
  }
`,T2=p(Os)`
  display: flex;
  align-items: center;
  top: ${({$top:e})=>e}px;
  border: 1px solid #d9e0e8;
  border-top-width: 0;
  border-bottom-width: 0;
`,k2=p(Os)`
  bottom: ${({$bottom:e})=>e}px;
  pointer-events: none;
`,D2=p.div`
  pointer-events: none;

  > * {
    pointer-events: auto;
  }
`,M2=p.div`
  overflow-x: auto;
  pointer-events: auto;
`,P2=p.div`
  height: 1px;
`,E2=({virtual:e,className:t,name:n})=>{const r=x(r0),o=x(qa),{noHeader:i}=x(fe),{data:a,status:l}=x(Ve),{maxHeight:c,minHeight:u,height:d}=x(lt),{footer:f}=x(Mt);I2();const v=e!=null&&e.auto&&e.auto>a.length?null:Uo(d),m=h.useRef(null);return D1(m),r?s.jsxs(Is,{className:t,$noHeader:i,$maxHeight:Uo(c),$minHeight:u||300,$height:v,$expanded:o,id:n+"_wrapper",ref:m,children:[i?s.jsx(s.Fragment,{}):s.jsx(C1,{}),s.jsx(j2,{children:s.jsx(x2,{status:l,virtual:e})}),s.jsx(zy,{}),f?s.jsx(L2,{children:f==null?void 0:f()}):s.jsx(ks,{})]},n):null},O2=h.memo(E2),Uo=e=>e?e==="display"?window.innerHeight-130:Number(e):null,I2=()=>{const e=x(h0),t=q(gt);h.useEffect(()=>{e&&t({filter:{},changes:"initial"})},[t,e])},Is=p.div`
  position: relative;
  border: 1px solid ${({theme:e})=>e.systemColors.grey200};
  border-top: none;
  border-radius: 6px;
  min-height: ${({$minHeight:e})=>`${e}px`};
  max-height: ${({$maxHeight:e,$height:t})=>!t&&e?`${e}px`:"auto"};
  height: ${({$height:e})=>e?`${e}px`:"auto"};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${({$noHeader:e})=>!e&&`
      ${wn} {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    `}
`,j2=p(Vt)`
  position: relative;
  display: flex;
  overflow: auto;
  flex-grow: 1;

  ${_t}:last-child {
    ${Ie} {
      border-bottom: none;
    }
  }
`,L2=p.div`
  border-top: 1px solid ${({theme:e})=>e.systemColors.grey200};
`,js=he("rootAtom",{action:Mt,base:ye,behavior:Ut,data:Ve,exportable:Ha,filter:De,columnsHover:ro,columns:_e,columnsView:Re,dataLoading:La,showSticky:Ot}),_2=e=>{const[t]=h.useState(()=>Yl(js)),{actions:n,behavior:r,columns:o,data:i,base:a,filter:l,exportable:c}=f0(e);return h.useEffect(()=>{Object.keys(n).length&&t.dispatch(ca(n))},[n,t]),h.useEffect(()=>t.dispatch(Oa(i)),[i,t]),h.useEffect(()=>{Object.keys(l).length&&t.dispatch(wa(l))},[l,t]),h.useEffect(()=>{Object.keys(r).length&&t.dispatch(ha(r))},[r,t]),h.useEffect(()=>{o.columns.length&&t.dispatch(xa(o))},[o,t]),h.useEffect(()=>{Object.keys(c).length&&t.dispatch(za(c))},[o,c,t]),h.useEffect(()=>t.dispatch(ua(a)),[a,t]),t},A2=({className:e,imperativeRef:t,...n})=>{const r=_2(n),o=h.useMemo(()=>({actions:R2(r),getTableData:N2(r)}),[r]);return h.useImperativeHandle(t,()=>o),s.jsx(Or.Provider,{value:r,children:s.jsx(O2,{virtual:n.virtual,className:e,name:n.name})})},N2=e=>()=>e.getState(js),R2=e=>({setColumnsOrder:i=>e.dispatch(Lr(i)),setFilter:i=>e.dispatch(gt(i)),setSelected:i=>e.dispatch(Tn(i)),setColumnSettingsVisible:i=>e.dispatch(Vr(i))}),nC=Object.assign(A2,{Cell:Ie,TableRowContents:_t,Header:At,EmptyCell:kr,ActionPlaceWrapper:Ya,Wrapper:Is,StyledTable:wn}),z2=({tabInfo:e,active:t,activeTab:n,onClick:r,expandable:o,clickable:i,disabled:a,disableTabIndex:l=!1,tooltipProps:c})=>{const u=h.useRef(null);h.useEffect(()=>{var b;n===e.tabId&&((b=u==null?void 0:u.current)==null||b.focus({preventScroll:!0}))},[n,e.tabId]);const d=h.useCallback(()=>{!a&&!e.disabled&&r(e.tabId)},[a,e.disabled,e.tabId,r]),v=ur({Enter:b=>{b.preventDefault(),!e.disabled&&r(e.tabId)}}),m=h.useCallback(({children:b})=>e.tooltip?s.jsx(ai,{delay:[0,0],content:e.tooltip,...c||{},children:b}):s.jsx(s.Fragment,{children:b}),[e.tooltip,c]);return s.jsx(H2,{children:s.jsx(m,{children:s.jsxs(_s,{"data-tabid":e.tabId,tabIndex:l?void 0:0,onClick:d,onKeyDown:v,$active:t,$expandable:o,$disabled:e.disabled||a,$clickable:i,ref:u,children:[s.jsx(Ls,{children:e.title}),s.jsx(vn,{disabled:a})]})})})},H2=p.div``,vn=p.div`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: ${({theme:e,disabled:t})=>t?e.systemColors.grey300:e.systemColors.blue600};
  bottom: -2px;
  left: 0;
`,Ls=p.div``,_s=p.div`
  ${Me};
  position: relative;
  padding-bottom: ${e=>e.theme.spacing.sp12};
  transition:
    border-color 0.2s ease,
    color 0.2s ease-in-out;
  color: ${e=>e.theme.systemColors.grey800};
  outline: none;
  user-select: none;

  ${e=>e.$clickable&&T`
      cursor: pointer;

      &:hover,
      &:focus,
      &:focus-visible {
        ${!e.$disabled&&T`
          color: ${e.theme.systemColors.black};

          & ${vn} {
            opacity: 1;
          }
        `};
      }
    `}

  ${({$expandable:e})=>e&&T`
      flex-basis: 0;
      flex-grow: 1;
      text-align: center;
    `};

  ${({$disabled:e})=>e&&T`
      color: ${t=>t.theme.systemColors.grey300};
      cursor: not-allowed;
    `};

  ${({$active:e,$disabled:t})=>e&&T`
      ${Ls} {
        color: ${({theme:n})=>t?n.systemColors.grey300:n.systemColors.blue600};
        font-weight: 600;
      }

      ${vn} {
        opacity: 1;
      }
    `};
`,W2=({activeTab:e,tabs:t=[],leftElement:n,rightElement:r,onTabChange:o,expandable:i,clickable:a=!0,className:l,disabled:c,disableTabIndex:u,testId:d,...f})=>{const v=h.useCallback(m=>{m!==e&&(o==null||o(m))},[e,o]);return s.jsxs(As,{className:l,"data-testid":d,children:[n&&s.jsx(Rs,{children:n}),s.jsx(Ns,{expandable:i,...f,children:t.map(m=>s.jsx(z2,{expandable:i,onClick:v,tabInfo:m,active:e===m.tabId,activeTab:e,clickable:a,disabled:c,disableTabIndex:u,tooltipProps:m.tooltipProps},m.tabId))}),r&&s.jsx(zs,{children:r})]})},As=p.div`
  width: 100%;
  border-bottom: solid 1px ${e=>e.theme.systemColors.grey200};
  display: flex;
  flex-direction: row;
`,Ns=p.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;

  ${({expandable:e})=>e&&T`
      flex-grow: 1;
    `};

  & > :not(:last-child) {
    margin-right: ${e=>e.theme.spacing.sp32};
  }
`,Rs=p.div`
  margin-right: ${e=>e.theme.spacing.sp16};
  display: flex;
  justify-content: center;
  align-items: center;
`,zs=p.div`
  margin-right: ${e=>e.theme.spacing.sp16};
  display: flex;
  justify-content: center;
  align-items: center;
`,F2=Object.assign(W2,{Wrapper:As,LeftElementContainer:Rs,RightElementContainer:zs,TabsContainer:Ns,TabWrapper:_s,ActiveIndicator:vn}),B2=(e,t)=>U.dark(s.jsx(tt,{$dark:!0,children:s.jsx(et,{content:e})}),{...t,containerId:"toast",closeButton:s.jsx(s.Fragment,{})}),V2=(e,t)=>U.success(s.jsxs(tt,{children:[s.jsx(Dt,{children:s.jsx(U2,{icon:Xl})}),s.jsx(et,{content:e})]}),{...t,containerId:"toast"}),U2=p(Bt)`
  color: ${({theme:e})=>e.systemColors.orange400};
`,q2=(e,t)=>U.dark(s.jsxs(tt,{$dark:!0,children:[s.jsx(Dt,{children:s.jsx(Y2,{icon:Gl})}),s.jsx(et,{content:e})]}),{...t,containerId:"toast",closeButton:s.jsx(s.Fragment,{})}),Y2=p(Bt)`
  color: ${({theme:e})=>e.systemColors.green400};
`,X2=(e,t)=>U.error(s.jsxs(tt,{children:[s.jsx(Dt,{children:s.jsx(G2,{icon:Ql})}),s.jsx(et,{content:e})]}),{...t,containerId:"toast"}),G2=p(Bt)`
  color: ${({theme:e})=>e.systemColors.orange400};
`,Q2=(e,t)=>U.info(s.jsx(tt,{children:s.jsx(et,{content:e})}),{...t,containerId:"toast"}),J2=(e,t)=>U.success(s.jsxs(tt,{children:[s.jsx(Dt,{children:s.jsx(Hs,{icon:fi})}),s.jsx(et,{content:e})]}),{...t,containerId:"toast"}),Hs=p(Bt)`
  color: ${({theme:e})=>e.systemColors.green600};
`,K2=(e,t)=>U.success(s.jsx(Z2,{content:e,options:t}),{...t,containerId:"toast"}),Z2=({content:e,options:t})=>{const{t:n}=je(),r=t.success;return s.jsxs(tt,{children:[r&&s.jsx(ex,{children:s.jsx(Hs,{icon:fi})}),s.jsx(tx,{success:r,children:s.jsx(et,{content:e})}),t.action||s.jsx(nx,{onClick:t.undo,buttonType:"text",icon:s.jsx(G,{icon:Jl}),success:r,children:n("buttons.undo")})]})},ex=p(Dt)`
  align-self: center;
  position: relative;
  top: 0;
`,tx=p.div`
  flex-grow: 1;
  padding-right: ${e=>e.success?0:e.theme.spacing.sp16};
`,nx=p(J)`
  ${({success:e})=>e&&T`
      position: relative;
      right: -${t=>t.theme.spacing.sp16};
    `}
`,rx=(e,t)=>U.warning(s.jsxs(tt,{children:[s.jsx(Dt,{children:s.jsx(ox,{icon:Kl})}),s.jsx(et,{content:e})]}),{...t,containerId:"toast"}),ox=p(Bt)`
  color: ${({theme:e})=>e.systemColors.blue800};
`,rC={success:J2,warning:rx,error:X2,message:Q2,undo:K2,dark:B2,done:q2,deleted:V2},oC=(e,t,n)=>{var r;return e==="AM"?`https://${(t?(r=ln(e,"store",t))==null?void 0:r.domain:"amazon.com")||"amazon.com"}/dp/${n}`:`https://www.walmart.com/ip/name/${n}`},iC="/account/connect-sp-token",aC="/account/connect-vendor-sp-token",sC="https://www.refersion.com/landing/amazon-affiliate-marketing-h10?utm_source=H10&utm_medium=in-app&utm_content=DashboardTile&campaign=AmazonLaunch",lC=gi("https://research-tools.helium10.com"),cC=gi("https://control-center.helium10.com"),dt=e=>["Adtomic/Analytics","Adtomic/CampaignBuilder","Adtomic/RuleBuilder","Adtomic/Schedules","Adtomic/AdManager","Adtomic/Suggestions"].includes(e)?"Adtomic":e,Be=pi(()=>({current:null,toolStaticMedia:null})),ao=Zl(Be,"current"),Ws=bn(Be,"toolStaticMedia",async e=>(await mi(()=>import("./WistiaStaticArticlesFaq-zz4dHaci.js"),__vite__mapDeps([]))).WistiaStaticArticlesFaq[dt(e)]),ix=async e=>(await(await mi(()=>import("./WistiaProjectMedia-luWIBo5V.js"),__vite__mapDeps([]))).WistiaProjectMedia)[e],ke={InventoryManagement:{hash:"fe10a10a34",name:"Inventory Management",tooltipId:"inventorymanagementtooltip",key:"inventory-manager"},Cerebro:{hash:"bunoksnwjh",name:"Cerebro",tooltipId:"cerebrotooltip",key:"cerebro"},ListingBuilder:{hash:"gj0ogyhltr",name:"Listing Builder",tooltipId:"listingbuildertooltip",key:"listing-builder"},EliteAnalytics:{hash:"",name:"Elite Analytics",tooltipId:"eliteanalyticstooltip",key:"elite-analytics"},Magnet:{hash:"",name:"Magnet",tooltipId:"magnettooltip",key:"magnet"},Profits:{hash:"",name:"Profits",tooltipId:"profitstooltip",key:"profits"},Adtomic:{hash:"447vzw9xsd",name:"Adtomic",tooltipId:"adtomictooltip",key:"ppc"},"Adtomic/Analytics":{hash:"",name:"AdtomicAnalytics",tooltipId:"adtomictooltip",key:"adtomic-analytics"},"Adtomic/CampaignBuilder":{hash:"",name:"AdtomicCampaignBuilder",tooltipId:"adtomictooltip",key:"adtomic-campaignBuilder"},"Adtomic/RuleBuilder":{hash:"",name:"AdtomicRuleBuilder",tooltipId:"adtomictooltip",key:"adtomic-ruleBuilder"},"Adtomic/Schedules":{hash:"",name:"AdtomicSchedules",tooltipId:"adtomictooltip",key:"adtomic-schedules"},"Adtomic/AdManager":{hash:"",name:"AdtomicAdManager",tooltipId:"adtomictooltip",key:"adtomic-adManager"},"Adtomic/Suggestions":{hash:"",name:"AdtomicSuggestions",tooltipId:"adtomictooltip",key:"adtomic-suggestions"},Tokens:{hash:"",name:"Tokens",tooltipId:"tokenstooltip",customTitle:"Learn: Connections Page",key:"tokens"},ListingAnalyzer:{hash:"",name:"Listing Analyzer",tooltipId:"listinganalyzertooltip",key:"listing-analyzer"},BlackBoxProducts:{hash:"",name:"Black Box Products",tooltipId:"blackboxproductstooltip",key:"black-box-products"},BlackBoxABA:{hash:"",name:"ABA Black Box",tooltipId:"blackboxabatooltip",key:"black-box-aba"},"ListingManagement/Import":{hash:"",name:"Listing Management",tooltipId:"listingmanagementtooltip",key:"listing-management-import"},"ListingManagement/ListingTable":{hash:"",name:"Listing Management",tooltipId:"listingmanagementtooltip",key:"listing-management-listing-table"},"ListingManagement/NewListing":{hash:"",name:"Listing Management",tooltipId:"listingmanagementtooltip",key:"listing-management-new-listing"},"ListingManagement/ListingInformation":{hash:"",name:"Listing Management",tooltipId:"listingmanagementtooltip",key:"listing-management-listing-information"},MarketTracker360:{hash:"",name:"Market Tracker 360",key:"mt360",tooltipId:"mt360tooltip"},"FollowUp/OnboardingMws":{hash:"",name:"Follow-Up",key:"follow-up-onboarding-mws",tooltipId:"followuptooltip"},"FollowUp/OnboardingRar":{hash:"",name:"Follow-Up",key:"follow-up-onboarding-rar",tooltipId:"followuptooltip"},"FollowUp/Dashboard":{hash:"",name:"Follow-Up",key:"follow-up-dashboard",tooltipId:"followuptooltip"},"FollowUp/Orders":{hash:"",name:"Follow-Up",key:"follow-up-orders",tooltipId:"followuptooltip"},"FollowUp/Automations":{hash:"",name:"Follow-Up",key:"follow-up-automations",tooltipId:"followuptooltip"},"FollowUp/Templates":{hash:"",name:"Follow-Up",key:"follow-up-templates",tooltipId:"followuptooltip"},"FollowUp/Products":{hash:"",name:"Follow-Up",key:"follow-up-products",tooltipId:"followuptooltip"},"FollowUp/Blacklist":{hash:"",name:"Follow-Up",key:"follow-up-blacklist",tooltipId:"followuptooltip"},"FollowUp/Settings":{hash:"",name:"Follow-Up",key:"follow-up-settings",tooltipId:"followuptooltip"},ControlCenter:{hash:"",name:"Insights Dashboard",key:"control-center",tooltipId:"controlcentertooltip"},ProductLaunchpad:{hash:"",name:"Product Launchpad",key:"product-launchpad",tooltipId:"productlaunchpadtooltip"}};var Oe;(function(e){e[e.nowPlaying=0]="nowPlaying",e[e.upNext=1]="upNext",e[e.watched=2]="watched",e[e.nothing=3]="nothing"})(Oe||(Oe={}));const ax={current:null,project:null,medias:{},getProjectRequest:null,getVisitsRequest:null,setVisitsRequest:null},de=pi(()=>ax),sx=vi(de,"project"),Fs=vi(de,"current"),lx=bn(de,"getProjectRequest",async e=>{const t=await ix(e),n=t.medias||[],r=oc.get(),o=n.map(a=>a.hashedId),i=r!=null&&o.includes(r)?r:o[0];return Fs.set(i),Ws.action(e),n.forEach(a=>{var c;!((c=de.getState().medias[a.hashedId])!=null&&c.content)&&dx(a.hashedId)}),t}),qo=bn(de,"getVisitsRequest",async e=>await ic(ke[e].tooltipId)),cx=bn(de,"setVisitsRequest",async e=>{const{count:t,needShowTooltip:n}=de(Vs);return n&&Ze({name:ac,properties:{toolName:e,timesClicked:String(t)}}),sc(ke[e].tooltipId)}),dx=async e=>{de.setState(t=>({...t,medias:{...t.medias,[e]:{content:null,status:"loading"}}})),lc(`https://fast.wistia.com/embed/medias/${e}.jsonp`,()=>{const t=`wistiajsonp-/embed/medias/${e}.jsonp`,n=window[t];ux(n.media)})},ux=e=>{de.setState(t=>({...t,medias:{...t.medias,[e.hashedId]:{content:e,status:"loaded"}}}))},Bs=e=>{var t,n;return!!(e.project&&((t=e.getVisitsRequest)!=null&&t.results[`show${e.project}`])&&((n=e.getVisitsRequest)==null?void 0:n.results.count)<=3)},hx=e=>!!localStorage.getItem(e.project+"_LEARN_CLICK")||!Bs(e),fx=e=>{var t;return((t=e.getVisitsRequest)==null?void 0:t.results.count)||1},Vs=e=>({needShowTooltip:Bs(e),disabledTooltip:hx(e),count:fx(e)}),gx=()=>{const{t:e}=ht(),t=Be(n=>n.current);return s.jsxs(px,{children:[s.jsx(Yo,{children:s.jsx(J,{buttonType:"text",icon:s.jsx(G,{icon:wm}),onClick:()=>ao.set(null),children:e("common.back")})}),t?s.jsxs(bx,{children:[s.jsx(mx,{children:t.title}),s.jsx(vx,{children:t.date}),s.jsx(Yo,{dangerouslySetInnerHTML:{__html:t.text}})]}):s.jsx(s.Fragment,{})]})},px=p.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 0;
`,Yo=p.div`
  a {
    color: ${({theme:e})=>e.systemColors.blue600};
    text-decoration: underline;

    &:hover {
      color: ${({theme:e})=>e.systemColors.blue800};
    }
  }
`,mx=p.div`
  ${bi};
  margin-bottom: 8px;
  color: ${({theme:e})=>e.systemColors.black};
`,vx=p.div`
  ${gr};
  margin-bottom: 8px;
`,bx=p(Vt)`
  flex-grow: 1;
  overflow: auto;
  margin-top: ${({theme:e})=>e.spacing.sp16};
  margin-right: -26px;
  padding-right: ${({theme:e})=>e.spacing.sp12};

  ${Me};
  color: ${({theme:e})=>e.systemColors.black};

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 16px;
    margin-top: 8px;
  }

  p {
    margin: 8px 0 16px 0;
  }

  h2 {
    ${bi};
  }

  figure.wp-block-pullquote {
    border-bottom: 2px solid ${({theme:e})=>e.systemColors.blue600};
    border-top: 2px solid ${({theme:e})=>e.systemColors.blue600};
    text-align: center;
  }
`,Us=e=>s.jsx(yx,{...e,icon:ym}),yx=p(G)`
  color: ${({theme:e})=>e.systemColors.blue600};
  font-size: 18px;
  transition: 0.2s transform ease-in-out;
  flex: 0 0 auto;
`,xx=({info:e})=>{const{project:t}=de(r=>r),n=()=>{t&&Ze({name:cn,properties:{column:"blog",blogName:e.title,source:ke[dt(t)].key}}),ao.set(e)};return s.jsxs(wx,{onClick:n,children:[s.jsxs(Vn,{children:[s.jsx($x,{children:e.title}),s.jsxs(Sx,{children:[s.jsx(Vn,{children:e.date}),s.jsx(Vn,{children:e.author})]})]}),s.jsx(Cx,{})]})},wx=p.div`
  cursor: pointer;
  background-color: ${({theme:e})=>e.systemColors.grey100};
  padding: ${({theme:e})=>e.spacing.sp12};
  border-radius: 8px;
  margin-bottom: ${({theme:e})=>e.spacing.sp16};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Cx=p(Us)`
  transform: rotate(-90deg);
`,$x=p.div`
  ${Me};
  color: ${({theme:e})=>e.systemColors.black};
  flex-grow: 1;
`,Vn=p.div``,Sx=p.div`
  ${Ht};
  padding-top: 4px;
  display: flex;
  gap: 24px;
`,Tx=()=>{var n;const{t:e}=ht(),t=Be(r=>r.toolStaticMedia);return s.jsxs(kx,{children:[(n=t==null?void 0:t.articles)==null?void 0:n.map(r=>s.jsx(xx,{info:r},r.title)),s.jsx(J,{buttonType:"text",onClick:()=>window.open(t==null?void 0:t.articlesLink,"_blank"),children:s.jsxs(Mx,{children:[e("learn.fullBlogs"),s.jsx(Dx,{icon:pr})]})})]})},kx=p(Vt)``,Dx=p(G)`
  position: relative;
  top: -2px;
  font-size: 16px;
`,Mx=p.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,Px=h.memo(({children:e,isOpen:t})=>{var r;const n=h.useRef(null);return s.jsx(Ex,{$open:t,ref:n,$height:((r=n.current)==null?void 0:r.scrollHeight)||0,children:e})}),Ex=p.div`
  height: ${e=>e.$open?e.$height?e.$height+"px":"auto":0};
  overflow: hidden;
  transition: all 0.3s;
`,Ox=({title:e,text:t})=>{const[n,r]=h.useState(!1),{project:o}=de(l=>l),i=h.useCallback(()=>{o&&!n&&Ze({name:cn,properties:{column:"faq",faqName:e,source:ke[o].key}}),r(!n)},[o,n,e]),a=h.useRef(null);return h.useEffect(()=>{n&&a.current&&a.current.querySelectorAll("a").forEach(c=>c.onclick=u=>u.stopPropagation())},[n]),s.jsxs(Nx,{onClick:i,children:[s.jsxs(_x,{$status:n,children:[s.jsx(Lx,{dangerouslySetInnerHTML:{__html:e}}),s.jsx(jx,{$status:n})]}),s.jsx(Ax,{$status:n,children:s.jsx(Px,{isOpen:n,children:s.jsx(Ix,{ref:a,dangerouslySetInnerHTML:{__html:t}})})})]})},Ix=p.div`
  & > a {
    text-decoration: none;
    color: ${e=>e.theme.systemColors.blue600};
  }

  & > table {
    border-collapse: collapse;
    border-spacing: 0;
    text-align: left;

    th,
    td {
      border: 1px solid ${e=>e.theme.systemColors.grey200};
      padding: 4px;
    }
  }
`,jx=p(Us)`
  transform: rotate(${({$status:e})=>e?"180deg":"0deg"});
`,Lx=p.div`
  ${Me};
  color: ${({theme:e})=>e.systemColors.black};
  flex-grow: 1;
  padding-right: ${({theme:e})=>e.spacing.sp8};
`,_x=p.div`
  display: flex;
  align-items: center;
  font-weight: ${({$status:e})=>e?"700":"500"};
  margin-bottom: ${({theme:e})=>e.spacing.sp12};
`,Ax=p.div`
  ${Me};
  position: relative;
  transition: 0.2s all ease-in-out;
  padding-bottom: ${e=>e.$status?e.theme.spacing.sp12:"0"};

  &:before {
    content: "";
    display: block;
    position: relative;
    height: 1px;
    margin-bottom: ${({$status:e})=>e?"12px":"0px"};
    background-color: ${({$status:e})=>e?({theme:t})=>t.systemColors.grey200:({theme:t})=>t.systemColors.grey100};
    transition: 0.2s all ease-in-out;
  }
`,Nx=p.div`
  cursor: pointer;
  background-color: ${({theme:e})=>e.systemColors.grey100};
  padding: ${({theme:e})=>e.spacing.sp12};
  padding-bottom: 0;
  border-radius: 8px;
  margin-bottom: ${({theme:e})=>e.spacing.sp16};
`,Rx=()=>{var r;const{t:e}=ht(),t=Be(o=>o.toolStaticMedia),n=Ws(o=>o.payload);return s.jsxs("div",{children:[(r=t==null?void 0:t.faq)==null?void 0:r.map(o=>s.jsx(Ox,{title:e(`learn.static.${dt(n)}.faq.${o.hashedId}.request`),text:e(`learn.static.${dt(n)}.faq.${o.hashedId}.response`)},o.hashedId)),!!(t!=null&&t.faqLink)&&s.jsx(J,{buttonType:"text",onClick:()=>window.open(t==null?void 0:t.faqLink,"_blank"),children:s.jsxs(Hx,{children:[e("learn.fullBase"),s.jsx(zx,{icon:pr})]})})]})},zx=p(G)`
  position: relative;
  top: -2px;
  font-size: 16px;
`,Hx=p.div`
  display: flex;
  gap: 8px;
  align-items: center;
`,Wx=({item:e,status:t,...n})=>{const r=h.useMemo(()=>dt(n.project),[n.project]),{t:o}=ht(),i=de(d=>d==null?void 0:d.medias[e.hashedId].content),a=Be(d=>{var f,v;return((v=(f=d.toolStaticMedia)==null?void 0:f.videoArticles)==null?void 0:v[e.hashedId])||null}),l=h.useMemo(()=>{const d=(i==null?void 0:i.duration)||0;return`${Math.floor(d/60)+":"+("0"+Math.floor(d%60)).slice(-2)}`},[i==null?void 0:i.duration]),c=h.useCallback(d=>{r&&Ze({name:cn,properties:{column:"proTraining",videoName:(i==null?void 0:i.name)||"",source:ke[r].key}}),Fs.set(d)},[i==null?void 0:i.name,r]),u=h.useCallback(()=>{r&&Ze({name:cn,properties:{column:"proTraining",articleName:(i==null?void 0:i.name)||"",source:ke[r].key}}),ao.set(a)},[a,i==null?void 0:i.name,r]);return console.log(">>>",JSON.stringify(e.description)),i?s.jsxs(Xx,{$status:t,children:[s.jsxs(Fx,{children:[s.jsxs(Bx,{children:[s.jsx(Ys,{dangerouslySetInnerHTML:{__html:o(`learn.static.${r}.media.${e.hashedId}.title`)!==`learn.static.${r}.media.${e.hashedId}.title`?o(`learn.static.${r}.media.${e.hashedId}.title`):uo(i.name)||e.title||""}}),t===Oe.nowPlaying?s.jsx(Ux,{children:o("learn.viewing")}):null]}),s.jsx(qs,{children:l})]}),e.description!==null&&s.jsx(Vx,{children:o(`learn.static.${r}.media.${e.hashedId}.description`)!==`learn.static.${r}.media.${e.hashedId}.description`?o(`learn.static.${r}.media.${e.hashedId}.description`):uo(i.seoDescription)||e.description}),s.jsxs(qx,{children:[s.jsx(J,{buttonType:"secondary",icon:s.jsx(G,{icon:yi}),disabled:t===Oe.nowPlaying,onClick:()=>c(e.hashedId),children:o("learn.watchVideo")}),!!a&&s.jsx(J,{buttonType:"secondary",icon:s.jsx(G,{icon:ec}),onClick:u,children:o("learn.readArticle")})]})]}):s.jsx(s.Fragment,{})},Fx=p.div`
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start;
`,Bx=p.div`
  gap: 10px;
`,qs=p.span`
  ${gr};
  padding-top: ${({theme:e})=>e.spacing.sp6};
  margin-left: auto;
  color: ${({theme:e})=>e.systemColors.grey400};
  flex: 0 0 auto;
`,Vx=p.span`
  ${Ht};
  color: ${({theme:e})=>e.systemColors.grey800};
`,Ys=p.span`
  ${tc};
  margin-right: ${({theme:e})=>e.spacing.sp12};
`,Ux=p.span`
  ${Ee};
  white-space: nowrap;
  padding: 0 12px;
  line-height: 26px;
  border-radius: 10px;
  color: ${({theme:e})=>e.systemColors.blue900};
  background-color: ${({theme:e})=>e.systemColors.blue200};
`,qx=p.div`
  display: flex;
  gap: 15px;
  margin: 10px 0 15px;
`,Yx={[Oe.nowPlaying]:T`
    ${Ys} {
      font-weight: 700;
    }

    ${qs} {
      font-weight: bold;
      color: ${({theme:e})=>e.systemColors.black};
    }
  `,[Oe.upNext]:T``,[Oe.watched]:T``,[Oe.nothing]:T``},Xx=p.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.systemColors.grey200};
  ${({$status:e})=>Yx[e]}
`,Gx=()=>{const e=de(o=>{var i;return(i=o.getProjectRequest)==null?void 0:i.medias}),{current:t,project:n}=de(o=>o),r=h.useCallback(o=>{var a;const i=((e==null?void 0:e.findIndex(l=>l.hashedId===t))||0)+1;return t===o?Oe.nowPlaying:((a=e==null?void 0:e[i])==null?void 0:a.hashedId)===o?Oe.upNext:Oe.nothing},[e,t]);return s.jsx(Qx,{children:e==null?void 0:e.map(o=>s.jsx(Wx,{item:o,status:r(o.hashedId),project:n},o.hashedId))})},Qx=p(Vt)``,Jx=({scriptLoaded:e,options:t})=>{const n=de(i=>i.current),[r,o]=h.useState(!1);return h.useEffect(()=>{var i;(i=window==null?void 0:window._wq)==null||i.push({id:n,options:t,onReady:a=>{a.bind("play",()=>a.unbind)}})},[n,t,e]),n?s.jsx(Kx,{children:s.jsx(Zx,{className:`wistia_embed wistia_async_${n}`,children:n&&s.jsx(ew,{className:"wistia_swatch",$load:r,children:s.jsx(tw,{src:`https://fast.wistia.com/embed/medias/${n}/swatch`,alt:"","aria-hidden":"true",onLoad:()=>o(!0)})})})},n):null},Kx=p.div`
  min-height: 225px;
  position: relative;
  margin: 8px 0 24px 0;
`,Zx=p.div`
  height: 100%;
  position: relative;
  width: 100%;
`,ew=p.div`
  height: 100%;
  left: 0;
  opacity: ${({$load:e})=>e?1:0};
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  transition: opacity 200ms;
`,tw=p.img`
  filter: blur(5px);
  object-fit: contain;
  height: 100%;
  width: 100%;
`,nw=()=>{const{t:e}=ht(),t=de(o=>{var i,a;return!!((i=o.getProjectRequest)!=null&&i.medias)&&((a=o.getProjectRequest)==null?void 0:a.medias.length)>0}),n=Be(o=>{var i;return!!((i=o.toolStaticMedia)!=null&&i.articles)}),r=Be(o=>{var i;return!!((i=o.toolStaticMedia)!=null&&i.faq)});return h.useMemo(()=>{const o=[];return t&&o.push({tabId:"proTraining",title:e("learn.video")}),r&&o.push({tabId:"faq",title:e("learn.faq")}),n&&o.push({tabId:"blog",title:e("learn.blog")}),o},[t,e,r,n])},rw=h.memo(({open:e,onClose:t,project:n,loaded:r,autoPlay:o,size:i})=>{const{t:a}=ht(),l=Be(m=>m.current),c=nw(),u=cc(m=>m.activeTab),d=dc;h.useEffect(()=>{var m;d(((m=c[0])==null?void 0:m.tabId)||"")},[d,c]);const f=m=>{d(m),Ze({name:uc,properties:{column:m,source:ke[n].key}})},v=h.useMemo(()=>{var m;return s.jsxs(aw,{children:[s.jsx(Pr,{children:((m=ke[dt(n)])==null?void 0:m.customTitle)||`${a("learn.title")} ${ke[dt(n)].name}`}),l?s.jsx(sw,{icon:s.jsx(G,{icon:pr}),buttonType:"icon",size:"100",onClick:()=>window.open(l==null?void 0:l.url,"_blank")}):s.jsx(s.Fragment,{})]})},[l,n,a]);return s.jsxs(Em,{position:"right",animation:"slideRight",isOpen:e,onClose:t,lockBody:!0,header:v,size:i,unmountOnExit:!1,children:[s.jsxs(Xo,{$display:!l,children:[s.jsx(Jx,{scriptLoaded:r,options:o?{autoPlay:!0,muted:!0}:{autoPlay:!1}}),s.jsx(F2,{tabs:c,onTabChange:f,activeTab:u,clickable:!0,disableTabIndex:!0}),s.jsx(iw,{children:ow[u]})]}),s.jsx(Xo,{$display:!!l,children:s.jsx(gx,{})})]})}),ow={proTraining:s.jsx(Gx,{}),faq:s.jsx(Rx,{}),blog:s.jsx(Tx,{})},Xo=p.div`
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
  display: ${({$display:e})=>e?"flex":"none"};
`,iw=p(Vt)`
  overflow: auto;
  flex-grow: 1;
  height: 0;
  margin-top: ${({theme:e})=>e.spacing.sp16};
`,aw=p.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`,sw=p(J)`
  position: relative;
  top: 1px;
`,Xs="h10-style-container",lw=xi`
  #${Xs} {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
  }
`,dC=xi`
  body {
    overflow: hidden !important;
  }
`,uC=64,hC=48,Un={Cerebro:"learnVideoCerebro",Magnet:"learnVideoMagnet",ListingBuilder:"learnVideoListingBuilder",EliteAnalytics:"learnVideoBlackBoxEliteAnalytics",Profits:"learnVideoProfits",Tokens:"learnVideoTokens",ListingAnalyzer:"learnVideoListingAnalyzer",BlackBoxProducts:"learnVideoBlackBoxProducts","ListingManagement/Import":"learnVideoListingManagementImport","ListingManagement/ListingTable":"learnVideoListingManagementListingTable","ListingManagement/NewListing":"learnVideoListingManagementNewListing","ListingManagement/ListingInformation":"learnVideoListingManagementListingInformation",MarketTracker360:"learnVideoMarketTrackerNew","FollowUp/OnboardingMws":"learnVideoFollowUpOnboardingMws","FollowUp/OnboardingRar":"learnVideoFollowUpOnboardingRar","FollowUp/Dashboard":"learnVideoFollowUpDashboard","FollowUp/Orders":"learnVideoFollowUpOrders","FollowUp/Automations":"learnVideoFollowUpEmailAutomation","FollowUp/Templates":"learnVideoFollowUpEmailTemplates","FollowUp/Products":"learnVideoFollowUpProductRatings","FollowUp/Blacklist":"learnVideoFollowUpBlacklists","FollowUp/Settings":"learnVideoFollowUpSettings",learnVideoProfitsInventoryLevels:"learnVideoProfitsInventoryLevels",learnVideoProfitsExpenses:"learnVideoProfitsExpenses",learnVideoProfitsRefunds:"learnVideoProfitsRefunds",learnVideoProfitsManager:"learnVideoProfitsManager"},cw=e=>Object.keys(ke).includes(e),fC=({project:e,children:t,...n})=>cw(e)?s.jsx(dw,{project:e,...n,children:t}):s.jsx(s.Fragment,{}),dw=({project:e,tooltipText:t,disabled:n,onEffect:r,children:o,disableAutoPlay:i=!1,size:a})=>{const l=Un==null?void 0:Un[e],c=e+"_LEARN_CLICK",{needShowTooltip:u,disabledTooltip:d}=de(Vs),f=qo(L=>L.status),{isLoading:v,autoPlay:m}=hc(l,i),{open:b,loaded:g,setOpen:y}=fc(),{t:w}=ht();h.useEffect(()=>{m&&y(!0)},[m,y]),h.useEffect(()=>{sx.set(e),!localStorage.getItem(c)&&qo.action(e)},[c,e]),h.useEffect(()=>{b&&lx.action(e)},[b,e]);const S=h.useCallback(()=>{b||window.closeTooltipEvent&&document.dispatchEvent(window.closeTooltipEvent)},[b]),C=fr(S,800);h.useEffect(()=>{(localStorage.getItem(c)||f==="loaded"&&!u)&&S()},[S,c,u,f]);const M=h.useCallback(()=>{r==null||r("open"),y(!0),Ze({name:gc,properties:{resourceType:"learnDrawer",source:ke[e].key}}),localStorage.getItem(c)||(localStorage.setItem(c,"click"),cx.action(e))},[c,r,e,y]),k=h.useCallback(()=>{r==null||r("close"),C(),y(!1),Ze({name:pc,properties:{resourceType:"learnDrawer",source:ke[e].key}})},[C,r,e,y]);return s.jsxs("div",{id:Xs,children:[s.jsx(hr,{disabled:d,content:t,colorType:"light",onOpenChange:L=>!L&&C(),open:u,children:s.jsx(hw,{children:o?s.jsx(uw,{id:ho,onClick:M,children:o}):s.jsx(J,{id:ho,size:"100",buttonType:"tertiary",icon:v?s.jsx(G,{spin:!0,icon:nc}):s.jsx(G,{icon:yi}),onClick:M,disabled:n,"data-testid":"learn",type:"button",children:w("learn.title")})})},f),s.jsx(rw,{size:a,open:b,loaded:g,project:e,autoPlay:m,onClose:k}),s.jsx(lw,{})]})},uw=p.span``,hw=p.span``;export{mw as $,Mw as A,sm as B,xm as C,qv as D,Nm as E,Gw as F,zw as G,zb as H,Nw as I,Lm as J,Em as K,rw as L,Zb as M,Vm as N,Lw as O,Tp as P,qw as Q,Am as R,Vt as S,F2 as T,_w as U,Kw as V,Vw as W,Ew as X,tC as Y,xw as Z,pw as _,jw as a,Ji as a$,fh as a0,yw as a1,Gd as a2,gn as a3,cp as a4,Po as a5,Eo as a6,bw as a7,Sw as a8,Iw as a9,lC as aA,oC as aB,j0 as aC,t1 as aD,m1 as aE,Sy as aF,by as aG,$y as aH,Lr as aI,gt as aJ,Vr as aK,cC as aL,X as aM,Qd as aN,Uw as aO,Fw as aP,ru as aQ,ji as aR,xn as aS,go as aT,Ya as aU,Is as aV,Gc as aW,Xs as aX,eC as aY,hC as aZ,uC as a_,Pw as aa,zm as ab,aC as ac,iC as ad,me as ae,su as af,Ne as ag,U as ah,ym as ai,_p as aj,Ap as ak,Lp as al,br as am,yr as an,Ec as ao,dn as ap,vd as aq,hn as ar,at as as,id as at,yd as au,Ls as av,od as aw,mr as ax,bc as ay,H0 as az,Zw as b,At as b$,Hw as b0,Xw as b1,dC as b2,lw as b3,kc as b4,Oc as b5,Oi as b6,Ct as b7,fn as b8,mu as b9,tm as bA,nm as bB,rm as bC,om as bD,im as bE,am as bF,hm as bG,Pr as bH,Hm as bI,Ym as bJ,z2 as bK,vn as bL,_s as bM,kw as bN,et as bO,tt as bP,ww as bQ,Kr as bR,Re as bS,Pe as bT,Xt as bU,fy as bV,Zr as bW,eo as bX,_t as bY,Ie as bZ,wn as b_,fu as ba,xu as bb,Su as bc,Co as bd,$u as be,lu as bf,iu as bg,wm as bh,Sm as bi,vw as bj,Ac as bk,Wc as bl,Cw as bm,$w as bn,Yp as bo,zc as bp,Sr as bq,Jp as br,Kp as bs,Zp as bt,Mr as bu,We as bv,Fe as bw,ie as bx,st as by,em as bz,Yw as c,r0 as c0,Mt as c1,D1 as c2,Pa as c3,fe as c4,Ve as c5,Fr as c6,Fy as c7,s2 as c8,kr as c9,_2 as ca,um as cb,fC as d,Li as e,Qw as f,An as g,Zd as h,Dw as i,Aw as j,Rw as k,q as l,dp as m,Tw as n,Sb as o,pb as p,Or as q,sC as r,Kd as s,rC as t,x as u,Ww as v,Jw as w,Bw as x,nC as y,Ow as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=Learn-nfpDmxZa.js.map
