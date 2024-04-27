import{h as H}from"./highcharts-BYqkL6me.js";import{w as x,j as a,u as m,$ as E,Q as w,r as h,aN as W,g as V,P as J,N as S,x as $,dp as Q,aX as tt,aA as et,c8 as st,A as nt,aB as rt,ia as ot}from"./index-tEWTe_cM.js";import{E as _,g as D,h as at,i as it,j as lt,k as ct,u as k,c as pt,m as P,n as ut,o as gt,T as z,A as M,p as b,N as mt}from"./CustomerEventsComponent-e67uxoGM.js";import{c as y}from"./index-JL-77yQX.js";import{c as dt}from"./index-7v7JHEmS.js";import{o as I}from"./orderBy-dpFAJsn-.js";import{X as B,Y as O}from"./middleware-6VZ1FcKb.js";import{ac as ft,av as ht,e as vt}from"./Learn-ZI4QJ8Ms.js";import{a as xt}from"./getUpsellData-siUtjfVt.js";import{P as Tt}from"./ProductChip-Hw6al7Eb.js";function jt(t,e){var s;ft(1,arguments);var n=ht((s=e==null?void 0:e.additionalDigits)!==null&&s!==void 0?s:2);if(n!==2&&n!==1&&n!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof t=="string"||Object.prototype.toString.call(t)==="[object String]"))return new Date(NaN);var r=Dt(t),o;if(r.date){var i=Nt(r.date,n);o=At(i.restDateString,i.year)}if(!o||isNaN(o.getTime()))return new Date(NaN);var l=o.getTime(),c=0,g;if(r.time&&(c=Et(r.time),isNaN(c)))return new Date(NaN);if(r.timezone){if(g=St(r.timezone),isNaN(g))return new Date(NaN)}else{var p=new Date(l+c),u=new Date(0);return u.setFullYear(p.getUTCFullYear(),p.getUTCMonth(),p.getUTCDate()),u.setHours(p.getUTCHours(),p.getUTCMinutes(),p.getUTCSeconds(),p.getUTCMilliseconds()),u}return new Date(l+c+g)}var j={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},wt=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,yt=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Ct=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Dt(t){var e={},s=t.split(j.dateTimeDelimiter),n;if(s.length>2)return e;if(/:/.test(s[0])?n=s[0]:(e.date=s[0],n=s[1],j.timeZoneDelimiter.test(e.date)&&(e.date=t.split(j.timeZoneDelimiter)[0],n=t.substr(e.date.length,t.length))),n){var r=j.timezone.exec(n);r?(e.time=n.replace(r[1],""),e.timezone=r[1]):e.time=n}return e}function Nt(t,e){var s=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),n=t.match(s);if(!n)return{year:NaN,restDateString:""};var r=n[1]?parseInt(n[1]):null,o=n[2]?parseInt(n[2]):null;return{year:o===null?r:o*100,restDateString:t.slice((n[1]||n[2]).length)}}function At(t,e){if(e===null)return new Date(NaN);var s=t.match(wt);if(!s)return new Date(NaN);var n=!!s[4],r=T(s[1]),o=T(s[2])-1,i=T(s[3]),l=T(s[4]),c=T(s[5])-1;if(n)return bt(e,l,c)?$t(e,l,c):new Date(NaN);var g=new Date(0);return!kt(e,o,i)||!Pt(e,r)?new Date(NaN):(g.setUTCFullYear(e,o,Math.max(r,i)),g)}function T(t){return t?parseInt(t):1}function Et(t){var e=t.match(yt);if(!e)return NaN;var s=N(e[1]),n=N(e[2]),r=N(e[3]);return Mt(s,n,r)?s*B+n*O+r*1e3:NaN}function N(t){return t&&parseFloat(t.replace(",","."))||0}function St(t){if(t==="Z")return 0;var e=t.match(Ct);if(!e)return 0;var s=e[1]==="+"?-1:1,n=parseInt(e[2]),r=e[3]&&parseInt(e[3])||0;return It(n,r)?s*(n*B+r*O):NaN}function $t(t,e,s){var n=new Date(0);n.setUTCFullYear(t,0,4);var r=n.getUTCDay()||7,o=(e-1)*7+s+1-r;return n.setUTCDate(n.getUTCDate()+o),n}var _t=[31,null,31,30,31,30,31,31,30,31,30,31];function G(t){return t%400===0||t%4===0&&t%100!==0}function kt(t,e,s){return e>=0&&e<=11&&s>=1&&s<=(_t[e]||(G(t)?29:28))}function Pt(t,e){return e>=1&&e<=(G(t)?366:365)}function bt(t,e,s){return e>=1&&e<=53&&s>=0&&s<=6}function Mt(t,e,s){return t===24?e===0&&s===0:s>=0&&s<60&&e>=0&&e<60&&t>=0&&t<25}function It(t,e){return e>=0&&e<=59}const $e=function(t,e,s){const n=this.chart,r=n.plotLeft,o=n.plotTop,i=n.plotWidth,l=n.plotHeight,c=H.pick(this.options.distance,10),g=s.plotX,p=s.plotY;let u=g+r+(n.inverted?c:-t-c),f=p-e+o+e/2,d;return u<7&&(u=r+g+c),u+t>r+i&&(u-=u+t-(r+i),f=p-e+o-c,d=!0),f<o+5&&(f=o+5,d&&p>=f&&p<=f+e&&(f=p+o+c)),f+e>o+l&&(f=Math.max(o,o+l-e-c)),{x:u,y:f}},Y=({title:t,count:e,total:s,pointType:n})=>{const{t:r}=x();return a.jsxs(Ft,{children:[a.jsx(_,{pointType:n}),a.jsx(Ut,{children:t}),a.jsx(Rt,{children:r("customerEvents.tooltips.valueOfTotal",{value:e,total:s})})]})},Ft=m.div`
  display: flex;
  align-items: center;
  gap: ${t=>t.theme.spacing.sp8};
`,Ut=m.div`
  ${E};
  color: ${t=>t.theme.systemColors.black};
`,Rt=m.div`
  ${w};
  margin-left: auto;
`,Wt=({groupBy:t,alertsAggregated:e,notes:s,insights:n})=>{const r=new Map,o={groupBy:t};return Object.entries(e).forEach(([i,l])=>{const c=D(A(i))[t],g=r.get(c);g?g.alertsAggregated=[...g.alertsAggregated,...l]:r.set(c,{alertsAggregated:[...l],notes:[],insights:[]})}),I(Object.values(s),"eventDate","desc").forEach(i=>{const l=D(A(i.eventDate))[t],c=r.get(l);c?c.notes.push(i):r.set(l,{alertsAggregated:[],notes:[i],insights:[]})}),I(Object.values(n),"createdAt","desc").forEach(i=>{const l=D(A(i.createdAt))[t],c=r.get(l);c?c.insights.push(i):r.set(l,{alertsAggregated:[],notes:[],insights:[i]})}),Array.from(r.entries()).map(([i,l])=>({timestamp:i,meta:o,...l})).sort((i,l)=>i.timestamp-l.timestamp)},A=t=>{const e=new Date().getTimezoneOffset()*6e4;return jt(t).valueOf()-e},zt=dt(t=>t.notes,t=>t.alertsAggregated,t=>t.urgentInsights,(t,e,s)=>({alertsAggregated:e,notes:t,insights:s})),L=y(zt,(t,e)=>e,({alertsAggregated:t,notes:e,insights:s},n)=>Wt({groupBy:n,alertsAggregated:t,notes:e,insights:s}))((t,e)=>e),Bt=y(L,(t,e)=>e,(t,e,s)=>s,(t,e,s,n)=>n,(t,e,s,n)=>{const{alertFilters:r,showAlerts:o,showNotes:i,showInsights:l}=at(n);let c=t;return(!!s||!i||!o||!l||Object.values(r||{}).some(Boolean))&&(c=c.map(p=>{let u=i?p.notes:[],f=o?p.alertsAggregated:[],d=l?p.insights:[];return s&&(u=u.filter(v=>v.asins.map(K=>K.asin).includes(s)),d=d.filter(v=>v.asin===s||v.asin===null)),r&&(f=f.filter(v=>r[v.eventType])),{...p,asin:s||void 0,insights:d,notes:u,alertsAggregated:f}}).filter(p=>!!p.alertsAggregated.length||!!p.notes.length||!!p.insights.length)),c})((t,e,s)=>e+s),Ot=y(L,Bt,(t,e,s,n,r)=>r,(t,e,s)=>{const{from:n,to:r}=it(s);return e.filter(({timestamp:o})=>o>=n&&o<=r)})((t,e,s,n,r)=>r),Gt=({groupBy:t="day",asin:e,settings:s={},period:n})=>{const r=h.useMemo(()=>lt(s),[s]),o=h.useMemo(()=>ct(n),[n]),i=k(c=>Ot(c,t,e,r,o)),l=pt(o,c=>c.status||"loaded");return Yt(n,e),{data:i,status:l}},Yt=(t,e)=>{const{seller:s,marketplace:n,skipInsights:r}=k(g=>g.properties),o=P(g=>g.name),i=h.useMemo(()=>!s||!n?"":s+n+r,[n,s]),l=h.useMemo(()=>{const{dateFrom:g,dateTo:p}=ut(t);return g+p},[t]),c=h.useMemo(()=>i?i+l:"",[i,l]);h.useEffect(()=>{c&&gt(t,o,e)},[c])},Z=({alert:t})=>{const{isOverflown:e,checkOverflown:s}=W();return a.jsx(z,{tooltip:e?void 0:a.jsx(M,{eventType:t.eventType}),zIndex:1e10,children:a.jsx(Lt,{onMouseEnter:s,children:a.jsx(M,{eventType:t.eventType})})})},Lt=m.div`
  ${w};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Zt=({alerts:t,hideTooltip:e})=>{const{t:s}=x(),n=h.useMemo(()=>t.slice(0,10),[t]);return a.jsxs(Xt,{children:[a.jsxs(qt,{children:[a.jsx(_,{pointType:"alert"}),a.jsx(Kt,{children:s("customerEvents.tooltips.alerts")})]}),n.map((r,o)=>a.jsx(Z,{alert:r},o)),a.jsx(Ht,{href:V(`${J}/alerts`,{}),onClick:e,target:"_blank",rel:"noreferrer",children:a.jsx(S,{buttonType:"text",icon:a.jsx($,{icon:Q}),children:s("customerEvents.tooltips.buttons.viewAllAlerts",{total:t.reduce((r,o)=>r+o.count,0)})})})]})},Xt=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.sp8};
`,qt=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing.sp8};
`,Kt=m.div`
  ${E};
  color: ${({theme:t})=>t.systemColors.black};
`,Ht=m.a`
  text-decoration: none;
  align-self: center;
`,Vt=({alerts:t})=>{const{t:e}=x(),s=h.useMemo(()=>t.slice(0,3),[t]);return a.jsxs(a.Fragment,{children:[a.jsx(Y,{pointType:"alert",title:e("customerEvents.tooltips.alerts"),count:s.length,total:t.reduce((n,r)=>n+r.count,0)}),s.map((n,r)=>a.jsx(Z,{alert:n},r))]})},Jt=({notes:t})=>{const{t:e}=x(),{isOverflown:s,checkOverflown:n}=W(),r=h.useMemo(()=>t.slice(0,3),[t]);return a.jsxs(a.Fragment,{children:[a.jsx(Y,{pointType:"note",title:e("customerEvents.tooltips.notes"),count:r.length,total:t.length}),r.map(({id:o,description:i})=>a.jsxs(Qt,{children:[a.jsx(te,{}),a.jsx(z,{tooltip:s?void 0:i,zIndex:Number.MAX_SAFE_INTEGER,children:a.jsx(ee,{onMouseEnter:n,children:i})})]},o))]})},Qt=m.div`
  ${w};
  display: flex;
  align-items: center;
`,te=m($).attrs({icon:tt})`
  font-size: 14px;
  margin-right: ${({theme:t})=>t.spacing.sp8};
`,ee=m.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({theme:t})=>t.systemColors.black};
`,F=({customerEvent:t,hideTooltip:e,renderTooltipInsights:s,renderInsightsEvents:n})=>{const{t:r}=x(),o=b(l=>l.eventsModalController.open),i=()=>{e==null||e(),o({...t,renderInsightsEvents:n})};return a.jsxs(se,{children:[a.jsx(ne,{children:vt(new Date(t.timestamp),t.meta.groupBy==="month"?"completeShort":"completeStandard")}),t.insights.length&&s?s(t.insights,!t.alertsAggregated.length&&!t.notes.length):null,t.notes.length?a.jsxs(a.Fragment,{children:[a.jsx(U,{}),a.jsx(Jt,{notes:t.notes})]}):null,t.alertsAggregated.length?a.jsxs(a.Fragment,{children:[a.jsx(U,{}),a.jsx(Vt,{alerts:t.alertsAggregated})]}):null,a.jsx(S,{buttonType:"text",onClick:i,children:r("customerEvents.tooltips.buttons.clickToViewAll")})]})},se=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:t})=>t.spacing.sp8};
`,ne=m.div`
  ${E};
  color: ${({theme:t})=>t.systemColors.black};
`,U=m.div`
  align-self: stretch;
  height: 1px;
  background-color: ${({theme:t})=>t.systemColors.grey200};
`,re=({note:t,hideTooltip:e})=>{const{t:s}=x(),n=b(o=>o.noteModalController.open),r=()=>{n(t),e==null||e()};return a.jsxs(oe,{children:[(t.types.length>0||t.asins.length>0)&&a.jsxs(ae,{children:[t.types.map(o=>a.jsx(mt,{noteType:o},o.id)),t.asins.map(({asin:o,imageUrl:i,marketplace:l})=>a.jsx(Tt,{asin:o,imageSrc:i,href:xt(l,o),active:!0},o))]}),a.jsx(ie,{children:t==null?void 0:t.description}),a.jsx(le,{buttonType:"text",icon:a.jsx($,{icon:et}),onClick:r,children:s("customerEvents.tooltips.buttons.clickToEditNote")})]})},oe=m.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`,ae=m.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${t=>t.theme.spacing.sp8};
  margin-bottom: ${t=>t.theme.spacing.sp8};
  align-self: flex-start;
  max-width: 100%;
`,ie=m.p`
  align-self: flex-start;
  ${w};
  margin-bottom: ${t=>t.theme.spacing.sp8};
  word-break: break-word;
`,le=m(S)`
  align-self: center;
`,ce=(t,e,s)=>{const[n,r]=h.useState(!1),o=()=>r(!0);h.useEffect(()=>{let p=null;return n&&(p=setTimeout(()=>r(!1))),()=>{p&&clearTimeout(p)}});const l=(()=>{switch(!0){case(t.notes.length===1&&t.notes[0]&&t.alertsAggregated.length===0&&t.insights.length===0):return"note";case(t.insights.length>0&&(t.notes.length>0||t.alertsAggregated.length>0)):return"groupedInsight";case t.insights.length>0:return"insight";case t.notes.length>0:return"grouped";case t.alertsAggregated.length>0:return"alert";default:return"none"}})(),c={note:a.jsx(re,{note:t.notes[0],hideTooltip:o}),alert:a.jsx(Zt,{alerts:t.alertsAggregated,hideTooltip:o}),insight:e?e(t.insights,!t.notes.length&&!t.alertsAggregated.length):null,grouped:a.jsx(F,{customerEvent:t,hideTooltip:o}),groupedInsight:a.jsx(F,{customerEvent:t,hideTooltip:o,renderTooltipInsights:e,renderInsightsEvents:s}),none:null};return{tooltipDisabled:n,tooltipType:{note:"note",alert:"alert",insight:"insight",groupedInsight:"insight",grouped:"note",none:"note"}[l],tooltipContent:c[l]}},pe=({x:t,y:e,customerEvent:s,renderTooltipInsights:n,renderInsightsEvents:r})=>{const o=P(({name:u})=>u),i=k(({reactions:u})=>u==null?void 0:u.onEventTooltipShown),{tooltipDisabled:l,tooltipType:c,tooltipContent:g}=ce(s,n,r),p=()=>{i==null||i(o,s)};return a.jsx(st,{colorType:"light",content:g,appendTo:document.body,interactive:!0,maxWidth:460,delay:[200,0],disabled:l,onShow:p,children:a.jsx(ue,{x:t,y:e,children:a.jsx(ge,{pointType:c})})})},ue=m.div.attrs(t=>({style:{left:t.x-6,top:t.y-6}}))`
  position: absolute;
  padding: 2px;
  background-color: ${({theme:t})=>t.systemColors.white};
  border-radius: 6px;
`,ge=m(_)`
  cursor: pointer;
`,me={min:0,max:0,scale:0,left:0,top:0},C=nt(()=>({chartParams:{}})),X=rt(C,"chartParams"),q=y(t=>t.chartParams,(t,e)=>e,(t,e)=>t[e]??me)((t,e)=>e),de=({chartId:t,groupBy:e,asin:s,period:n,timezoneOffset:r,renderTooltipInsights:o,renderInsightsEvents:i})=>{const l=Number(r??0)*60*1e3,c=P(d=>d.settings),{data:g,status:p}=Gt({groupBy:e,asin:s,settings:c,period:n}),u=C(d=>q(d,t)),f=b(d=>d.eventsController.set);return fe(t),h.useEffect(()=>{f(g)},[g]),h.useMemo(()=>p==="loaded"?g.filter(d=>d.timestamp+l-u.min>0&&d.timestamp+l<u.max).map(d=>a.jsx(pe,{x:(d.timestamp+l-u.min)*u.scale+u.left,y:u.top,customerEvent:d,renderTooltipInsights:o,renderInsightsEvents:i},d.timestamp)):[],[p,g,l,u.min,u.max,u.scale,u.left,u.top,o,i])},fe=t=>{h.useEffect(()=>()=>{const e=C.getState().chartParams;X.set(ot(e,[t]))},[])},he=(t,e)=>{const s=q(C.getState(),t),n=e.target,r=n.xAxis[0],o=r.min??0,i=r.max??0,l=(r.width||1)/(i-o),c=r.left||0,g=n.plotTop+n.plotHeight;(s.min!==o||s.max!==i||s.scale!==l||s.left!==c||s.top!==g)&&X.patch({[t]:{min:o,scale:l,left:c,max:i,top:g}})},_e=t=>({customerEventsProps:e,...s})=>{var i;const n=h.useId(),r=s,o=ve(r)?{...r,chart:R(n,r.chart)}:{...r,options:{...r.options,chart:R(n,(i=r.options)==null?void 0:i.chart)}};return a.jsxs(xe,{children:[a.jsx(t,{...o}),e.showPoints&&a.jsx(de,{chartId:n,...e})]})},ve=t=>"lines"in t&&"categories"in t,R=(t,e)=>({...e,events:{...e==null?void 0:e.events,redraw:function(s){var n,r;(r=(n=e==null?void 0:e.events)==null?void 0:n.redraw)==null||r.call(this,s),he(t,s)}}}),xe=m.div`
  position: relative;
`;export{Y as G,Gt as a,jt as p,$e as u,_e as w};
//# sourceMappingURL=withCustomerEvents-XhLkTJwK.js.map
