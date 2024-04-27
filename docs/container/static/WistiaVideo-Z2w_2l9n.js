import{r as h,j as o,u as e,a as l}from"./index-tEWTe_cM.js";const y=({isModal:t,videoId:i,options:a,height:u="390px",scriptLoaded:w,sendSegment:s,...d})=>{const[n,p]=h.useState(!1);return h.useEffect(()=>{var r;(r=window==null?void 0:window._wq)==null||r.push({id:i,options:{...a,...a!=null&&a.autoPlay?{muted:!0}:{}},onReady:c=>{c.bind("play",()=>(s==null||s(),c.unbind))}})},[i,a,w,s]),h.createElement(f,{...d,key:i,$height:u,$isModal:t},o.jsx(x,{className:`wistia_embed wistia_async_${i}`,$isModal:t,children:i&&o.jsx($,{className:"wistia_swatch",$load:n,children:o.jsx(m,{alt:"","aria-hidden":"true",src:`https://fast.wistia.com/embed/medias/${i}/swatch`,onLoad:()=>p(!0)})})}))},f=e.div`
  position: relative;
  height: ${({$height:t})=>t};
  max-height: 90vh;
  width: 100%;

  ${({$isModal:t})=>t&&l`
      padding: 53.25% 0 0 0;
      height: 100%;
    `};
`,x=e.div`
  height: 100%;
  position: relative;
  width: 100%;

  ${({$isModal:t})=>t&&l`
      left: 0;
      position: absolute;
      top: 0;
    `};
`,$=e.div`
  height: 100%;
  left: 0;
  opacity: ${({$load:t})=>t?1:0};
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  transition: opacity 200ms;
`,m=e.img`
  filter: blur(5px);
  object-fit: contain;
  height: 100%;
  width: 100%;
`;export{y as W};
//# sourceMappingURL=WistiaVideo-Z2w_2l9n.js.map
