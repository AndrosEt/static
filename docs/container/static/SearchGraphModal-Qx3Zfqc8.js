import{d as B,b as Ae,j as o,cL as oe,a as Q,u as i,N as f,et as so,K as W,Q as Se,w as k,M as ie,I as re,S as De,$ as ge,P as Z,O as hn,A as xe,G as _e,C as ro,r as h,a2 as de,a3 as qt,cy as ao,f as v,g as P,ad as ae,e as T,c as L,m as co,as as Me,aG as io,aL as Yt,eo as gn,b1 as xn,bi as lo,bz as uo,aC as z,x as yn,bp as mo,cj as po,ck as ho,ak as go,aW as U,F as xo,a8 as Cn,ah as ze,bH as yo,y as Co,aZ as fo,cS as fn,U as wo,aN as ko,E as Ke,bO as To,aM as wn,a5 as bo,bX as jo}from"./index-3WWdADc-.js";import{r as kn}from"./redirectToSubscribe-18BB2MSS.js";import{O as vo,r as ue,p as be,d as $o}from"./OptimalData-it69sBiU.js";import{U as Ao,g as So,u as Mo,a as Ve}from"./getMarketplaceLinkForProduct-A-zEKrnh.js";import{T as se,g as je,E as Po,t as Ie,N as Qt,a0 as Lo,e as en}from"./Learn-iEpSD2rS.js";import{d as Ue}from"./use-onclickoutside.browser.esm-FI41Hp9Z.js";import{N as he}from"./AddToMyListDropdown-j1WBFoh0.js";import{r as Oo,f as tn,L as Ro}from"./useAutoPlay-ceAGW3YF.js";import{P as Eo,E as Tn}from"./ExtendedProductSummary-BHNYmxm-.js";import{l as Fo}from"./NewRadio-r0LBmnQI.js";import{p as bn,t as Ko,u as jn}from"./middleware-lPGLX8nq.js";function Io(...[e,t,n]){const s=B(`${e}Modal/Action`,...n!=null&&n.reaction?[n.reaction]:[]),c={data:t,isOpen:!1};return{atom:Ae(`${e}Modal/Atom`,c,d=>{var l;d(s,(m,p)=>p.type==="CLOSE"?{...m,isOpen:!1,data:n!=null&&n.doNotClearOnClose?m.data:t}:p.type==="OPEN"?{...m,isOpen:!0,...p.payload?{data:p.payload}:{data:t}}:p.type==="TOGGLE"?{...m,isOpen:!m.isOpen}:p.type==="SET_DATA"?{...m,data:p.payload}:m),(l=n==null?void 0:n.reducers)==null||l.call(n,d)}),open:(...d)=>s(t||t===null?{type:"OPEN",payload:d[0],meta:d[1]}:{type:"OPEN",payload:t,meta:d[0]}),close:(...d)=>s({type:"CLOSE",meta:d==null?void 0:d[0]}),action:s}}const ua=({buttonType:e,locked:t,disabled:n,icon:s,onLockedClick:c,onClick:r,...a})=>o.jsx(No,{icon:t?o.jsx(oe,{type:e,disabled:n}):s,onClick:t?c:r,disabled:n,buttonType:e,...a}),Go={primary:Q`
    &:hover,
    &:focus,
    &:focus-visible {
      ${oe.Wrapper} {
        color: ${e=>e.theme.systemColors.blue800};
      }
    }

    //State: pressed
    &:active {
      ${oe.Wrapper} {
        color: ${e=>e.theme.systemColors.blue900};
      }
    }
  `,secondary:Q`
    &:hover,
    &:focus,
    &:focus-visible {
      ${oe.Wrapper} {
        background-color: ${e=>e.theme.systemColors.blue800};
      }
    }

    //State: pressed
    &:active {
      ${oe.Wrapper} {
        background-color: ${e=>e.theme.systemColors.blue900};
      }
    }
  `},No=i(f)`
  ${e=>e.disabled?"":Go[e.buttonType]};

  ${oe.Wrapper} {
    margin-top: -2px;
    margin-bottom: -2px;
  }
`,vn=({product:e,tooltipContent:t,marketplace:n,asin:s,tool:c,tooltipOptions:r,disableExtendedProductSummary:a,onChangeProductDetailsType:u,...d})=>o.jsx(so,{tooltipContent:t??o.jsx(Eo,{asin:s||"",marketplace:n,defaultImageSrc:e==null?void 0:e.imageSrc,tool:c,disableExtendedProductSummary:a,onChangeProductDetailsType:u}),tooltipOptions:{interactive:!0,maxWidth:605,placement:"top-start",...r},product:e,...d}),ma=vn,$n=({coupon:e,label:t,data:n})=>o.jsxs(Bo,{children:[e&&o.jsx(Wo,{dangerouslySetInnerHTML:{__html:e}}),t&&o.jsx(_o,{$small:!!e,$data:n,children:t}),(n==null?void 0:n.proration)&&o.jsx(Do,{children:n==null?void 0:n.proration})]}),Bo=i.div`
  margin-top: ${e=>e.theme.spacing.sp16};
  gap: ${e=>e.theme.spacing.sp4};
`,Wo=i.div`
  ${W};
  color: ${e=>e.theme.systemColors.black};
  text-align: center;

  span {
    font-weight: bold;
  }
`,Do=i.div`
  ${W};
  text-align: center;
  padding-top: ${e=>e.theme.spacing.sp16};
`,_o=i.div`
  ${W};
  text-align: center;
  margin-bottom: ${e=>{var t;return(t=e.$data)!=null&&t.proration?"0":"18px"}};

  ${e=>e.$small&&Q`
      ${Se};
      margin-bottom: ${t=>t.theme.spacing.sp32};
    `}
`,An="data:image/svg+xml,%3csvg%20width='110'%20height='110'%20viewBox='0%200%20110%20110'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1896_116878)'%3e%3cpath%20d='M55%20110C85.3757%20110%20110%2085.3757%20110%2055C110%2024.6243%2085.3757%200%2055%200C24.6243%200%200%2024.6243%200%2055C0%2085.3757%2024.6243%20110%2055%20110Z'%20fill='%23E8F6FF'/%3e%3cpath%20d='M79.0841%2078.3335C91.9714%2065.4462%2091.9714%2044.5518%2079.0841%2031.6645C66.1968%2018.7772%2045.3024%2018.7772%2032.4151%2031.6645C19.5278%2044.5518%2019.5278%2065.4462%2032.4151%2078.3335C45.3024%2091.2208%2066.1968%2091.2208%2079.0841%2078.3335Z'%20fill='%236784A2'/%3e%3cpath%20d='M55.7478%2083.116C71.2759%2083.116%2083.8638%2070.5281%2083.8638%2055C83.8638%2039.472%2071.2759%2026.884%2055.7478%2026.884C40.2198%2026.884%2027.6318%2039.472%2027.6318%2055C27.6318%2070.5281%2040.2198%2083.116%2055.7478%2083.116Z'%20fill='%23F2F5F7'/%3e%3cpath%20d='M71.3458%2058.729L55.9459%2053.427L54.9229%2058.234L71.1589%2059.609C71.7639%2059.686%2071.9179%2058.905%2071.3458%2058.74V58.729Z'%20fill='%236784A2'/%3e%3cpath%20d='M55.7918%2059.62C57.8817%2059.62%2059.5758%2057.9258%2059.5758%2055.836C59.5758%2053.7462%2057.8817%2052.052%2055.7918%2052.052C53.702%2052.052%2052.0078%2053.7462%2052.0078%2055.836C52.0078%2057.9258%2053.702%2059.62%2055.7918%2059.62Z'%20fill='%23485E75'/%3e%3cpath%20d='M41.5248%2070.1912C40.5788%2071.2142%2038.9398%2071.1812%2038.0268%2070.1252C34.3968%2065.9012%2032.3618%2060.4782%2032.3618%2054.8792C32.3618%2048.6422%2034.7928%2042.7682%2039.2148%2038.3462C43.6368%2033.9242%2049.5108%2031.4932%2055.7478%2031.4932C61.9848%2031.4932%2067.8588%2033.9242%2072.2808%2038.3462C76.7028%2042.7682%2079.1338%2048.6422%2079.1338%2054.8792C79.1338%2060.2142%2077.3518%2065.2962%2074.0518%2069.4212C73.1718%2070.5212%2071.5438%2070.6312%2070.5538%2069.6412C69.7178%2068.8052%2069.6188%2067.4742%2070.3668%2066.5502C73.0178%2063.2392%2074.4588%2059.1692%2074.4588%2054.8902C74.4588%2049.9072%2072.5118%2045.2102%2068.9698%2041.6682C65.4278%2038.1262%2060.7308%2036.1792%2055.7478%2036.1792C50.7648%2036.1792%2046.0678%2038.1262%2042.5258%2041.6682C38.9838%2045.2102%2037.0368%2049.8962%2037.0368%2054.8902C37.0368%2059.3892%2038.6868%2063.7452%2041.6128%2067.1222C42.3828%2068.0132%2042.3278%2069.3442%2041.5248%2070.2022V70.1912Z'%20fill='%2333CC99'/%3e%3cpath%20d='M70.5651%2069.6302C69.7291%2068.7942%2069.6301%2067.4632%2070.3781%2066.5392C73.0291%2063.2282%2074.4701%2059.1582%2074.4701%2054.8792C74.4701%2049.8962%2072.5231%2045.1992%2068.9811%2041.6572C65.4391%2038.1152%2060.7421%2036.1682%2055.7591%2036.1682C50.7761%2036.1682%2046.0791%2038.1152%2042.5371%2041.6572L39.2261%2038.3462C43.6481%2033.9242%2049.5221%2031.4932%2055.7591%2031.4932C61.9961%2031.4932%2067.8701%2033.9242%2072.2921%2038.3462C76.7141%2042.7682%2079.1451%2048.6422%2079.1451%2054.8792C79.1451%2060.2142%2077.3631%2065.2962%2074.0631%2069.4212C73.1831%2070.5212%2071.5551%2070.6312%2070.5651%2069.6412V69.6302Z'%20fill='%23EFCF1A'/%3e%3cpath%20d='M70.565%2069.6299C69.729%2068.7939%2069.63%2067.4629%2070.378%2066.5389C73.029%2063.2279%2074.47%2059.1579%2074.47%2054.8789C74.47%2049.8959%2072.523%2045.1989%2068.981%2041.6569L72.292%2038.3459C76.714%2042.7679%2079.145%2048.6419%2079.145%2054.8789C79.145%2060.2139%2077.363%2065.2959%2074.063%2069.4209C73.183%2070.5209%2071.555%2070.6309%2070.565%2069.6409V69.6299Z'%20fill='%23F64F45'/%3e%3cpath%20d='M55.7478%2077.8801C56.8231%2077.8801%2057.6948%2077.0084%2057.6948%2075.9331C57.6948%2074.8578%2056.8231%2073.9861%2055.7478%2073.9861C54.6725%2073.9861%2053.8008%2074.8578%2053.8008%2075.9331C53.8008%2077.0084%2054.6725%2077.8801%2055.7478%2077.8801Z'%20fill='%236784A2'/%3e%3cpath%20d='M63.9319%2076.164C65.0072%2076.164%2065.8789%2075.2923%2065.8789%2074.217C65.8789%2073.1417%2065.0072%2072.27%2063.9319%2072.27C62.8566%2072.27%2061.9849%2073.1417%2061.9849%2074.217C61.9849%2075.2923%2062.8566%2076.164%2063.9319%2076.164Z'%20fill='%236784A2'/%3e%3cpath%20d='M47.5642%2076.1311C48.6395%2076.1311%2049.5112%2075.2594%2049.5112%2074.1841C49.5112%2073.1088%2048.6395%2072.2371%2047.5642%2072.2371C46.4889%2072.2371%2045.6172%2073.1088%2045.6172%2074.1841C45.6172%2075.2594%2046.4889%2076.1311%2047.5642%2076.1311Z'%20fill='%236784A2'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1896_116878'%3e%3crect%20width='110'%20height='110'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",nn=({data:e,modalProps:t,footerJustifyContent:n,onAccept:s,onDecline:c,queryStringParameters:r,coupon:a,type:u})=>{const{t:d}=k(),l=u==="postPurchaseModal",m=r!=null&&r.source?`&source=${r==null?void 0:r.source}`:"",p=`${Z}/subscribe?trigger=upsellModalPricingPageCta${m}`,g=a?e==null?void 0:e.footer.labelWithCoupon:e==null?void 0:e.footer.label;return o.jsx(ie,{...t,size:"100",titleAlign:"center",title:o.jsxs(o.Fragment,{children:[(e==null?void 0:e.hasHeadingPicture)&&o.jsx(Vo,{src:An}),o.jsx(Uo,{$isPostPurchase:l,children:e==null?void 0:e.title})]}),subtitle:o.jsx(Zo,{children:e==null?void 0:e.subtitle}),footer:o.jsx(o.Fragment,{children:e&&o.jsxs(Jo,{$isPostPurchase:l,children:[o.jsxs(zo,{$footerJustifyContent:n,children:[o.jsx(f,{buttonType:"secondary",size:"200",onClick:c,children:e.footer.declineButton}),o.jsx(f,{buttonType:"primary","data-testid":"acceptButtonOptimal",size:"200",onClick:()=>s==null?void 0:s({trigger:"upsellModalUpgradeButton"}),children:e.footer.acceptButton})]}),!l&&o.jsxs(Xo,{children:[o.jsx(qo,{children:d("upsellModal.moreDetails")}),o.jsx(Yo,{href:p,children:d("upsellModal.pricingPage")})]})]})}),children:e&&o.jsxs(Ho,{children:[o.jsx(vo,{plans:e.plans,features:e.features,featuresTitle:e.featuresTitle,tableOnMobile:!0,enableToggle:!0}),o.jsx($n,{label:g,coupon:a,data:e})]})})},zo=i.div`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$footerJustifyContent?e.$footerJustifyContent:"center"};
  gap: ${e=>e.theme.spacing.sp16};

  & > ${f} {
    margin: 0 !important;
  }

  ${re.mobileBefore} {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0;
    gap: ${e=>e.theme.spacing.sp16};
  }
`,Vo=i.img`
  margin-bottom: ${e=>e.theme.spacing.sp16};
`,Uo=i.div`
  ${De};

  ${e=>e.$isPostPurchase&&Q`
      padding-bottom: ${t=>t.theme.spacing.sp4};
    `}
`,Zo=i.div`
  ${W};
  margin-top: ${e=>e.theme.spacing.sp4};
`,Ho=i.div`
  max-width: calc(100% - 1px);
  padding: ${e=>e.theme.spacing.sp8};
`,Jo=i.div`
  padding: ${e=>`0 ${e.theme.spacing.sp8}`};

  ${e=>e.$isPostPurchase&&Q`
      padding-bottom: ${t=>t.theme.spacing.sp8};
    `}
`,Xo=i.div`
  text-align: center;
  margin-top: ${e=>e.theme.spacing.sp16};
`,qo=i.span`
  ${Se};
  margin-right: ${e=>e.theme.spacing.sp4};
`,Yo=i.a`
  ${ge};
  color: ${e=>e.theme.systemColors.blue600};
  text-decoration: none;

  &:hover {
    color: ${e=>e.theme.systemColors.blue700};
  }
`,Qo="data:image/svg+xml,%3csvg%20width='110'%20height='110'%20viewBox='0%200%20110%20110'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1896_116925)'%3e%3cpath%20d='M55%20110C85.3757%20110%20110%2085.3757%20110%2055C110%2024.6243%2085.3757%200%2055%200C24.6243%200%200%2024.6243%200%2055C0%2085.3757%2024.6243%20110%2055%20110Z'%20fill='%23E8F6FF'/%3e%3cpath%20d='M74.8881%2049.5549H35.0131C34.2902%2049.5549%2033.7041%2050.141%2033.7041%2050.8639V80.1899C33.7041%2080.9129%2034.2902%2081.4989%2035.0131%2081.4989H74.8881C75.611%2081.4989%2076.1971%2080.9129%2076.1971%2080.1899V50.8639C76.1971%2050.141%2075.611%2049.5549%2074.8881%2049.5549Z'%20fill='%23EDCD1C'/%3e%3cpath%20d='M41.7561%2049.555V34.914C41.7561%2029.854%2045.8811%2025.729%2050.9411%2025.729H59.0151C64.0751%2025.729%2068.2001%2029.854%2068.2001%2034.914V36.432C68.2001%2036.652%2068.0241%2036.828%2067.8041%2036.828H67.5071V39.93H67.9691C68.1011%2039.93%2068.2001%2040.04%2068.2001%2040.161V40.491C68.2001%2041.459%2067.4081%2042.251%2066.4401%2042.251H65.4391C64.4711%2042.251%2063.6791%2041.459%2063.6791%2040.491V40.161C63.6791%2040.029%2063.7891%2039.93%2063.9101%2039.93H64.4051V36.828H64.1631C63.8441%2036.828%2063.6681%2036.652%2063.6681%2036.432V34.914C63.6681%2032.34%2061.5781%2030.25%2059.0041%2030.25H50.9301C48.3561%2030.25%2046.2661%2032.34%2046.2661%2034.914V49.544H41.7451L41.7561%2049.555Z'%20fill='%23A6B7C9'/%3e%3cpath%20d='M59.4769%2061.017C59.4769%2058.366%2057.1779%2056.243%2054.4719%2056.551C52.4699%2056.771%2050.8199%2058.355%2050.5339%2060.357C50.2699%2062.194%2051.1169%2063.855%2052.5029%2064.779C52.9319%2065.065%2053.1739%2065.571%2053.0859%2066.077L52.0409%2072.347C51.9639%2072.82%2052.3269%2073.249%2052.8109%2073.249H57.1449C57.6289%2073.249%2057.9919%2072.82%2057.9149%2072.347L56.8699%2066.077C56.7819%2065.56%2057.0239%2065.065%2057.4529%2064.779C58.6739%2063.976%2059.4769%2062.59%2059.4769%2061.028V61.017Z'%20fill='%23485E75'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1896_116925'%3e%3crect%20width='110'%20height='110'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",es="data:image/svg+xml,%3csvg%20width='110'%20height='110'%20viewBox='0%200%20110%20110'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1896_116902)'%3e%3cpath%20d='M55%20110C85.3757%20110%20110%2085.3757%20110%2055C110%2024.6243%2085.3757%200%2055%200C24.6243%200%200%2024.6243%200%2055C0%2085.3757%2024.6243%20110%2055%20110Z'%20fill='%23E8F6FF'/%3e%3cpath%20d='M62.1939%2085.5912L63.5249%2080.7072C63.7229%2079.9812%2063.6789%2079.2332%2063.4039%2078.5512L56.0889%2060.5662C58.7069%2057.5302%2059.5649%2053.1742%2057.9589%2049.2032C55.6599%2043.5492%2049.2249%2040.8322%2043.5709%2043.1312C37.9169%2045.4302%2035.1999%2051.8652%2037.4989%2057.5192C39.1159%2061.4902%2042.7679%2063.9982%2046.7609%2064.3502L48.0259%2067.4522L50.8529%2068.6512L49.6539%2071.4782L49.8189%2071.8852L52.6459%2073.0842L51.4469%2075.9112L51.6119%2076.3182L54.4389%2077.5172L53.2399%2080.3442L54.0539%2082.3572C54.3289%2083.0282%2054.8239%2083.6002%2055.4729%2083.9852L59.8289%2086.5592C60.6979%2087.0762%2061.8969%2086.5812%2062.1719%2085.6132L62.1939%2085.5912Z'%20fill='%23A4B5C7'/%3e%3cpath%20d='M59.6422%2076.7522L54.7215%2064.646C54.6002%2064.3478%2054.2602%2064.2042%2053.9619%2064.3255L53.5237%2064.5036C53.2254%2064.6248%2053.0819%2064.9649%2053.2031%2065.2632L58.1238%2077.3694C58.2451%2077.6677%2058.5852%2077.8112%2058.8835%2077.6899L59.3216%2077.5118C59.6199%2077.3906%2059.7634%2077.0505%2059.6422%2076.7522Z'%20fill='%236783A0'/%3e%3cpath%20d='M48.6529%2051.2713C47.8169%2052.4483%2046.1999%2052.7233%2045.0229%2051.8873C43.8459%2051.0513%2043.5709%2049.4343%2044.4069%2048.2573C45.2429%2047.0803%2046.8599%2046.8053%2048.0369%2047.6413C49.2139%2048.4773%2049.4889%2050.0943%2048.6529%2051.2713Z'%20fill='%23E8F6FF'/%3e%3cpath%20d='M86.8446%2068.8821L85.3486%2064.0531C85.1286%2063.3381%2084.6886%2062.7221%2084.0946%2062.2931L68.2656%2051.0401C68.8376%2047.0691%2067.2316%2042.9331%2063.7446%2040.4581C58.7726%2036.9271%2051.8756%2038.0931%2048.3446%2043.0651C44.8136%2048.0371%2045.9796%2054.9341%2050.9516%2058.4651C54.4386%2060.9511%2058.8826%2061.1051%2062.4356%2059.2571L65.1636%2061.1931L68.1886%2060.6761L68.7056%2063.7011L69.0576%2063.9541L72.0826%2063.4371L72.5996%2066.4621L72.9516%2066.7151L75.9766%2066.1981L76.4936%2069.2231L78.2646%2070.4771C78.8586%2070.8951%2079.5846%2071.1151%2080.3326%2071.0931L85.3926%2070.9171C86.4046%2070.8841%2087.1526%2069.8281%2086.8556%2068.8601L86.8446%2068.8821Z'%20fill='%23EDCD1C'/%3e%3cpath%20d='M79.9501%2062.7967L69.298%2055.2266C69.0355%2055.0401%2068.6715%2055.1017%2068.485%2055.3641L68.211%2055.7497C68.0245%2056.0122%2068.0861%2056.3761%2068.3485%2056.5626L79.0006%2064.1327C79.2631%2064.3192%2079.627%2064.2576%2079.8136%2063.9952L80.0876%2063.6096C80.2741%2063.3472%2080.2125%2062.9832%2079.9501%2062.7967Z'%20fill='%23B39A0D'/%3e%3cpath%20d='M56.0777%2048.6751C55.2417%2049.8521%2053.6247%2050.1271%2052.4477%2049.2911C51.2707%2048.4551%2050.9957%2046.8381%2051.8317%2045.6611C52.6677%2044.4841%2054.2847%2044.2091%2055.4617%2045.0451C56.6387%2045.8811%2056.9137%2047.4981%2056.0777%2048.6751Z'%20fill='%23E8F6FF'/%3e%3cpath%20d='M36.8388%2051.5901C37.0588%2050.2371%2037.5428%2048.9391%2038.2358%2047.7621C36.3328%2046.5301%2034.8918%2044.7811%2034.0338%2042.7021C32.9228%2039.9741%2032.9448%2036.9711%2034.0998%2034.2431C35.2438%2031.5151%2037.3888%2029.4031%2040.1168%2028.2921C41.4478%2027.7531%2042.8448%2027.4781%2044.2638%2027.4781C48.7958%2027.4781%2052.8218%2030.1841%2054.5268%2034.3751C55.6928%2037.2351%2055.5498%2040.4141%2054.3178%2043.1311C54.2188%2043.4171%2053.8558%2044.0441%2053.6468%2044.3741C53.6138%2044.4181%2053.5918%2044.4621%2053.5588%2044.5061C53.5258%2044.5611%2053.5038%2044.5941%2053.5038%2044.5941C53.5038%2044.5941%2053.4928%2044.5941%2053.4818%2044.5941C52.8988%2045.4961%2052.1728%2046.3101%2051.3258%2047.0251C51.2818%2047.8831%2051.6558%2048.7411%2052.4148%2049.2801C52.9758%2049.6871%2053.6468%2049.8191%2054.2848%2049.7311C58.9708%2045.5291%2060.5988%2038.7311%2058.2118%2032.8571C55.8908%2027.1591%2050.4128%2023.4741%2044.2528%2023.4741C42.3168%2023.4741%2040.4138%2023.8481%2038.5988%2024.5851C34.8808%2026.0921%2031.9658%2028.9741%2030.4038%2032.6811C28.8418%2036.3881%2028.8088%2040.4801%2030.3268%2044.1981C31.5808%2047.3001%2033.7918%2049.8301%2036.7068%2051.5241L36.8168%2051.5901H36.8388Z'%20fill='%236783A0'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1896_116902'%3e%3crect%20width='110'%20height='110'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Sn=({data:e,modalProps:t,onDecline:n,onBeforeAccept:s,onAccept:c,onCustomAccept:r,ctaTitle:a,offer:u})=>{const{t:d}=k(),l={trialEnded:{image:es,title:e!=null&&e.toolTitle?d("upsellGeneralModal.types.trialEnded.title",{tool:e==null?void 0:e.toolTitle}):d("upsellGeneralModal.types.trialEnded.titleWithoutTool"),description:d("upsellGeneralModal.types.trialEnded.description")},usesLimitReached:{image:An,title:e!=null&&e.toolTitle?d("upsellGeneralModal.types.usesLimitReached.title",{tool:e==null?void 0:e.toolTitle}):d("upsellGeneralModal.types.usesLimitReached.titleWithoutTool"),description:d("upsellGeneralModal.types.usesLimitReached.description")},featureLocked:{image:Qo,title:d("upsellGeneralModal.types.featureLocked.titleWithoutTool"),description:d("upsellGeneralModal.types.featureLocked.description")}},m=p=>{p.preventDefault(),r?r():(s&&s(),c&&c(),kn({key:u==null?void 0:u.offerKey,action:u==null?void 0:u.offerAction}))};return o.jsx(ie,{...t,size:"100",onClose:n,title:e.type&&l[e.type].title,footer:o.jsxs(rs,{children:[o.jsx(f,{buttonType:"secondary",size:"200",onClick:n,children:d("upsellGeneralModal.buttons.decline")}),o.jsx(f,{"data-testid":"acceptButton",buttonType:"primary",size:"200",onClick:m,children:a||d("upsellGeneralModal.buttons.accept")})]}),children:o.jsx(ts,{children:e.type&&o.jsxs(ns,{children:[o.jsx(os,{src:l[e.type].image}),o.jsx(ss,{children:l[e.type].description})]})})})},ts=i.div``,ns=i(hn)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: ${e=>`${e.theme.spacing.sp8} 0 0`};
  padding: ${e=>e.theme.spacing.sp24};

  ${re.laptop} {
    justify-content: space-between;
    flex-direction: row;
  }
`,os=i.img``,ss=i.div`
  font-size: 18px;
  margin: ${e=>`${e.theme.spacing.sp32} 0 0 0`};

  ${re.laptop} {
    margin: ${e=>`0 0 0 ${e.theme.spacing.sp24}`};
  }
`,rs=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -${e=>e.theme.spacing.sp8};

  ${re.laptop} {
    flex-direction: row;
    justify-content: right;
  }

  ${f} + ${f} {
    margin-left: 0;
    margin-top: ${e=>e.theme.spacing.sp8};

    ${re.laptop} {
      margin-left: ${e=>e.theme.spacing.sp8};
      margin-top: 0;
    }
  }
`,as=({isNewUi:e,coupon:t,data:n,modalProps:s,footerJustifyContent:c,onAccept:r,onDecline:a})=>{const u=t?n==null?void 0:n.footer.labelWithCoupon:n==null?void 0:n.footer.label;return o.jsx(ie,{...s,size:"100",title:n==null?void 0:n.title,titleAlign:"center",footer:o.jsx(o.Fragment,{children:n&&o.jsxs(ls,{$footerJustifyContent:c,$data:n,children:[o.jsx(f,{buttonType:n.proration?"secondary":"text",size:"200",onClick:a,children:n.footer.declineButton}),o.jsx(f,{"data-testid":"acceptButton",buttonType:"primary",size:"200",onClick:()=>r==null?void 0:r({}),children:n.footer.acceptButton})]})}),children:n&&o.jsxs(o.Fragment,{children:[n.subtitle&&o.jsx(is,{noFeatures:n.plans.length===0,children:n.subtitle}),o.jsx(cs,{children:o.jsx(Ao,{isNewUi:e,plans:n.plans,features:n.features,featuresTitle:n.featuresTitle})}),o.jsx($n,{label:u,coupon:t,data:n})]})})},cs=i.div`
  margin-bottom: ${e=>e.theme.spacing.sp8};
  max-width: calc(100% - 1px);
`,is=i.p`
  ${W};
  text-align: center;
  color: ${({theme:e})=>e.systemColors.grey600};
  margin-bottom: ${e=>e.noFeatures?0:e.theme.spacing.sp24};
  margin-top: ${e=>e.theme.spacing.sp8};
`,ls=i.div`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$footerJustifyContent?e.$footerJustifyContent:"center"};
  margin-top: ${e=>e.theme.spacing.sp8};
  gap: ${e=>{var t;return(t=e.$data)!=null&&t.proration?e.theme.spacing.sp16:e.theme.spacing.sp24}};

  & > ${f} {
    margin: 0 !important;
  }

  ${re.mobileBefore} {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 0;
    gap: ${e=>e.theme.spacing.sp16};
  }
`,Ze=xe(()=>({currentAndRecommended:null})),ke=_e(Ze,"currentAndRecommended",(e,t)=>So(e,t==null?void 0:t.signal)),ds=()=>{var n,s,c,r,a,u,d,l,m,p,g,b,x,I,K,H,G,y,w,$,A,S,M,C,j;const{t:e}=k(),t=Ze(O=>O,ro);return h.useMemo(()=>{var et,tt,nt,ot,st,rt,at,ct,it,lt,dt,ut,mt,pt,ht,gt,xt,yt,Ct,ft,wt,kt,Tt,bt,jt,vt,$t,At,St,Mt,Pt,Lt,Ot,Rt,Et,Ft,Kt,It,Gt,Nt,Bt,Wt,Dt,_t,zt,Vt,Ut,Zt,Ht,Jt,Xt;const O=E=>{if(E){const{amount:te,interval:ne,discountedAmount:fe}=E,we=e(`intervalShort.${ne}`),Oe=te?`${de({amount:Number(te),isRounded:!0})}/${we}`:"",oo=fe?`${de({amount:Number(fe),isRounded:!0})}/${we}`:"";return{amount:Oe,discountedAmount:oo}}return null},N=(tt=(et=t.currentAndRecommended)==null?void 0:et.data)==null?void 0:tt.ctaTitle,J=(st=(ot=(nt=t.currentAndRecommended)==null?void 0:nt.data)==null?void 0:ot.recommendation)==null?void 0:st.plan.period,R=O((ct=(at=(rt=t.currentAndRecommended)==null?void 0:rt.data)==null?void 0:at.recommendation)==null?void 0:ct.plan),V=(dt=(lt=(it=t.currentAndRecommended)==null?void 0:it.data)==null?void 0:lt.recommendation)==null?void 0:dt.plan.key,X=(pt=(mt=(ut=t.currentAndRecommended)==null?void 0:ut.data)==null?void 0:mt.recommendation)==null?void 0:pt.plan.title,q=((xt=(gt=(ht=t.currentAndRecommended)==null?void 0:ht.data)==null?void 0:gt.recommendation)==null?void 0:xt.bulletPoints)||[],D=(Ct=(yt=t.currentAndRecommended)==null?void 0:yt.data)==null?void 0:Ct.subscription.plan.period,_=O((wt=(ft=t.currentAndRecommended)==null?void 0:ft.data)==null?void 0:wt.subscription.plan),le=(Tt=(kt=t.currentAndRecommended)==null?void 0:kt.data)==null?void 0:Tt.subscription.plan.key,ye=(jt=(bt=t.currentAndRecommended)==null?void 0:bt.data)==null?void 0:jt.subscription.plan.title,Y=(At=($t=(vt=t.currentAndRecommended)==null?void 0:vt.data)==null?void 0:$t.subscription)==null?void 0:At.bulletPoints,Ce=(Pt=(Mt=(St=t.currentAndRecommended)==null?void 0:St.data)==null?void 0:Mt.recommendation)==null?void 0:Pt.proration;let Qe=null;if(Ce){const E=(Et=(Rt=(Ot=(Lt=t.currentAndRecommended)==null?void 0:Lt.data)==null?void 0:Ot.recommendation)==null?void 0:Rt.proration)==null?void 0:Et.amount,te=(Gt=(It=(Kt=(Ft=t.currentAndRecommended)==null?void 0:Ft.data)==null?void 0:Kt.recommendation)==null?void 0:It.proration)==null?void 0:Gt.dailyAmount,ne=(Dt=(Wt=(Bt=(Nt=t.currentAndRecommended)==null?void 0:Nt.data)==null?void 0:Bt.recommendation)==null?void 0:Wt.proration)==null?void 0:Dt.interval,fe=e(`currentAndRecommended.upsellModal.intervalShort.${ne}`),we=de({amount:Number(te)}),Oe=de({amount:Number(E),isRounded:!0});Qe=e("currentAndRecommended.upsellModal.prorated",{dailyPrice:we,price:Oe,interval:fe})}const to=q.map((E,te)=>{var ne;return{title:E.title,subtitle:(E==null?void 0:E.subTitle)||null,values:{[V]:E==null?void 0:E.specialText,[le]:(ne=Y==null?void 0:Y[te])==null?void 0:ne.specialText}}}),no={id:le,label:ye,isBest:!1,price:_==null?void 0:_.amount,period:D,discountedPrice:_==null?void 0:_.discountedAmount};let Le=[{id:V,label:X,isBest:!0,price:R==null?void 0:R.amount,period:J,discountedPrice:R==null?void 0:R.discountedAmount}];return Y&&(Le=[no,...Le]),{title:(Vt=(zt=(_t=t.currentAndRecommended)==null?void 0:_t.data)==null?void 0:zt.recommendation)==null?void 0:Vt.title,subtitle:(Ht=(Zt=(Ut=t.currentAndRecommended)==null?void 0:Ut.data)==null?void 0:Zt.recommendation)==null?void 0:Ht.subtitle,features:to,plans:Le,proration:Qe,hasHeadingPicture:((Xt=(Jt=t.currentAndRecommended)==null?void 0:Jt.data)==null?void 0:Xt.hasHeadingPicture)??!0,footer:{label:null,labelWithCoupon:null,acceptButton:N||e("currentAndRecommended.upsellModal.footer.acceptButton"),declineButton:e("currentAndRecommended.upsellModal.footer.declineButton")}}},[(s=(n=t.currentAndRecommended)==null?void 0:n.data)==null?void 0:s.ctaTitle,(r=(c=t.currentAndRecommended)==null?void 0:c.data)==null?void 0:r.hasHeadingPicture,(d=(u=(a=t.currentAndRecommended)==null?void 0:a.data)==null?void 0:u.recommendation)==null?void 0:d.bulletPoints,(p=(m=(l=t.currentAndRecommended)==null?void 0:l.data)==null?void 0:m.recommendation)==null?void 0:p.plan,(x=(b=(g=t.currentAndRecommended)==null?void 0:g.data)==null?void 0:b.recommendation)==null?void 0:x.proration,(H=(K=(I=t.currentAndRecommended)==null?void 0:I.data)==null?void 0:K.recommendation)==null?void 0:H.subtitle,(w=(y=(G=t.currentAndRecommended)==null?void 0:G.data)==null?void 0:y.recommendation)==null?void 0:w.title,(S=(A=($=t.currentAndRecommended)==null?void 0:$.data)==null?void 0:A.subscription)==null?void 0:S.bulletPoints,(j=(C=(M=t.currentAndRecommended)==null?void 0:M.data)==null?void 0:C.subscription)==null?void 0:j.plan,e])},us=e=>{var g,b,x,I,K,H,G;const t=ds(),[n,s]=h.useState(!1),[c,r,a,u,d,l]=Ze(y=>{var w,$,A,S,M,C,j,O,N,J,R,V,X,q,D,_,le,ye,Y,Ce;return[(A=($=(w=y.currentAndRecommended)==null?void 0:w.data)==null?void 0:$.recommendation)==null?void 0:A.isShown,(j=(C=(M=(S=y.currentAndRecommended)==null?void 0:S.data)==null?void 0:M.recommendation)==null?void 0:C.offer)==null?void 0:j.key,(R=(J=(N=(O=y.currentAndRecommended)==null?void 0:O.data)==null?void 0:N.recommendation)==null?void 0:J.offer)==null?void 0:R.action,(D=(q=(X=(V=y.currentAndRecommended)==null?void 0:V.data)==null?void 0:X.recommendation)==null?void 0:q.plan)==null?void 0:D.key,(ye=(le=(_=y.currentAndRecommended)==null?void 0:_.data)==null?void 0:le.recommendation)==null?void 0:ye.queryStringParameters,(Ce=(Y=y.currentAndRecommended)==null?void 0:Y.data)==null?void 0:Ce.version]});h.useEffect(()=>{c&&s(!0)},[c]);const m=h.useCallback(()=>{var y;ke.clear(),(y=e==null?void 0:e.onDecline)==null||y.call(e)},[e.onDecline]),p=h.useCallback(({trigger:y})=>{var w;e.onCustomAccept?e.onCustomAccept():a==="modal"?(w=e==null?void 0:e.onDecline)==null||w.call(e):(e!=null&&e.onBeforeAccept&&e.onBeforeAccept(),e!=null&&e.onAccept&&e.onAccept(),kn({key:r,action:a,queryStringParameters:d,additionalParameters:{...y!==void 0&&{trigger:y}}}))},[e,r,a,d]);return h.useEffect(()=>{var y,w,$,A,S,M;if(((y=e.modalProps)==null?void 0:y.isOpen)===!0){const C={location:ms[(w=e.data)==null?void 0:w.tool]??(($=e.data)==null?void 0:$.tool),coupon:(A=e.data)==null?void 0:A.coupon};(M=(S=e==null?void 0:e.getCustomAction)==null?void 0:S.call(e,C))!=null&&M.then(j=>ke.set(j))||ke.action(C)}else ke.clear()},[(g=e.modalProps)==null?void 0:g.isOpen,e==null?void 0:e.getCustomAction]),h.useEffect(()=>{var y,w,$,A,S,M,C,j,O,N,J,R,V,X,q;if((y=e.data)!=null&&y.tool&&((w=e.modalProps)!=null&&w.isOpen)){const D=(($=e==null?void 0:e.segmentProps)==null?void 0:$.type)||(e==null?void 0:e.type);(l==="currentAndRecommended"||l==="proratedCurrentAndRecommended"||l==="currentAndOptimalRecommended")&&u&&qt({name:"Upsell Modal Viewed",properties:{newPlan:u,tool:on[(A=e.data)==null?void 0:A.tool]??((S=e.data)==null?void 0:S.tool),...D&&{type:D},...((M=e==null?void 0:e.segmentProps)==null?void 0:M.location)&&{location:(C=e==null?void 0:e.segmentProps)==null?void 0:C.location},...((j=e==null?void 0:e.segmentProps)==null?void 0:j.trigger)&&{trigger:(O=e==null?void 0:e.segmentProps)==null?void 0:O.trigger}}}),l==="generic"&&qt({name:"Upsell Modal Viewed",properties:{tool:on[(N=e.data)==null?void 0:N.tool]??((J=e.data)==null?void 0:J.tool),...D&&{type:D},...((R=e==null?void 0:e.segmentProps)==null?void 0:R.location)&&{location:(V=e==null?void 0:e.segmentProps)==null?void 0:V.location},...((X=e==null?void 0:e.segmentProps)==null?void 0:X.trigger)&&{trigger:(q=e==null?void 0:e.segmentProps)==null?void 0:q.trigger}}})}},[(b=e.modalProps)==null?void 0:b.isOpen,l,u]),o.jsxs(o.Fragment,{children:[o.jsx(as,{...e,isNewUi:!0,modalProps:{...e.modalProps,size:"100",isOpen:((x=e.modalProps)==null?void 0:x.isOpen)&&n&&l==="currentAndRecommended",onClose:m},data:t,footerJustifyContent:"space-between",onAccept:p}),o.jsx(nn,{...e,isNewUi:!0,modalProps:{...e.modalProps,size:"100",isOpen:((I=e.modalProps)==null?void 0:I.isOpen)&&n&&l==="proratedCurrentAndRecommended",onClose:m},data:t,onAccept:p}),o.jsx(nn,{...e,modalProps:{...e.modalProps,size:"100",isOpen:((K=e.modalProps)==null?void 0:K.isOpen)&&n&&l==="currentAndOptimalRecommended",onClose:m},data:t,onAccept:p,queryStringParameters:d}),o.jsx(Sn,{...e,modalProps:{...e.modalProps,isOpen:((H=e.modalProps)==null?void 0:H.isOpen)&&n&&l==="generic",onClose:m},ctaTitle:(G=t==null?void 0:t.footer)==null?void 0:G.acceptButton,offer:{offerKey:r,offerAction:a}})]})},ms={blackBoxProducts:"blackbox",ce_Xray:"xray",ce_XrayKeywords:"xrayApi",ce_SearchExpander:"searchExpander"},on={blackBoxProducts:"blackBox",ce_Xray:"xray",ce_XrayKeywords:"xrayApi",ce_SearchExpander:"searchExpander",historicalTrends:"cerebro"},pa=e=>{var t;return h.useEffect(()=>{var n;(n=e==null?void 0:e.onLoaded)==null||n.call(e)},[]),o.jsxs(o.Fragment,{children:[(t=e.data)!=null&&t.tool?o.jsx(us,{...e}):o.jsx(Sn,{...e}),o.jsx(ao,{})]})},Mn=async e=>v({url:P(`${ue}/api/site/track-event`,{}),method:"POST",params:e,useSessionAccountId:!0}),He=()=>({sendSegmentEvent:Mn}),Je=async e=>v({url:P(`${Z}/api/v1/keywordtracker/products`,{}),method:"GET",params:e,withCredentials:!0}),Pn=({error:e,params:{notification:t}})=>{const n=ae.getState().translation;n&&t.error(o.jsxs("div",{children:[o.jsx(se,{children:n.t("addToKeywordTracker.notification.error.title")}),o.jsx(je,{children:e||"Server error"})]}))},$e=Ue("ktGetProduct",async({marketplace:e},{getState:t})=>{const{page:n,count:s,search:c}=t(En);return Je({marketplace:e,page:n,perPage:s,searchString:c})},{rejectedReaction:Pn}),sn={search:"",page:1,count:3,sortField:"id",sortDirection:"ASC"},Ln=B("ktAddSetSearch",({marketplace:e,notification:t},{dispatch:n})=>{n($e.actions.pending({marketplace:e,notification:t}))}),On=B("ktSetTableFilter",({marketplace:e,notification:t},{dispatch:n})=>{n($e.actions.pending({marketplace:e,notification:t}))}),Rn=B("resetTableFilter"),En=Ae("ktTableFilter",sn,e=>{e(On,(t,{filter:n})=>({...n,search:t.search})),e(Ln,(t,{search:n})=>({...t,page:1,search:n})),e(Rn,()=>sn)}),Xe=B("setAddToKeyworTdrackerStep"),Fn=B("resetAddToKeyworTdrackerStep"),ps=Ae("addToKeywordTrackerStep",0,e=>{e(Xe,(t,n)=>n),e(Fn,()=>0)}),F=Io("addToKeywordTracker",{asin:"",marketplace:"",phrases:[],moduleId:"cerebro"},{reaction:({type:e},{dispatch:t})=>{e==="CLOSE"&&setTimeout(()=>{t(Fn())},100)}}),hs=()=>{const e=T(Rn),t=T(F.close);return{onClose:h.useCallback(()=>{t(),setTimeout(e,0)},[t,e])}},gs={"cerebro-historical":"Cerebro Export to Keyword Tracker button clicked","cerebro-walmart":"Cerebro Export to Keyword Tracker button clicked",cerebro:"Cerebro Export to Keyword Tracker button clicked","keywordresearch-walmart":"Magnet Export to Keyword Tracker button clicked",keywordresearch:"Magnet Export to Keyword Tracker button clicked"},Kn={"cerebro-historical":"Cerebro Exported to Keyword Tracker","cerebro-walmart":"Cerebro Exported to Keyword Tracker",cerebro:"Cerebro Exported to Keyword Tracker","keywordresearch-walmart":"Magnet Exported to Keyword Tracker",keywordresearch:"Magnet Exported to Keyword Tracker"},xs={"cerebro-historical":"description","cerebro-walmart":"description",cerebro:"description",keywordresearch:"descriptionMagnet","keywordresearch-walmart":"descriptionMagnet","opportunity-finder":"descriptionCommon",blackbox:"descriptionCommon","blackbox-aba":"descriptionCommon","listing-builder":"descriptionCommon"},ys={"cerebro-historical":"Cerebro ASIN","cerebro-walmart":"Cerebro ASIN",cerebro:"Cerebro ASIN",keywordresearch:"Magnet","keywordresearch-walmart":"Magnet","opportunity-finder":"Elite Analytics",blackbox:"Black Box","blackbox-aba":"Black Box ABA","listing-builder":"Listing Builder"},Cs=async e=>v({url:P(`${Z}/keyword-tracker/validate-asin`,{}),params:e,method:"POST",withCredentials:!0}),rn={status:"init",content:null},In=B("validateAsinPending"),Gn=B("validateAsinFulfilled"),Nn=B("validateAsinRejected"),Bn=B("resetValidateAsin"),Wn=Ae("validateAsinAtom",rn,e=>{e(In,t=>({...t,status:"loading",content:null,error:void 0})),e(Gn,(t,n)=>({...t,status:"loaded",content:n,error:void 0})),e(Nn,(t,n)=>({...t,status:"error",content:null,error:n})),e(Bn,()=>rn)}),Dn=()=>{const e=T(In),t=T(Gn),n=T(Nn),{data:{marketplace:s}}=L(F.atom);return async c=>{try{const r={marketplace:s,asin:c,toolPlatform:s==="WALMART_US"?"walmart":"amazon"};e(r);const a=await Cs(r);if(t(a),!a.asin)throw new Error("Wrong asin");return!!a.asin}catch{return n("error"),!1}}},fs=async e=>v({url:P(`${Z}/api/v1/keywordtracker/keywords`,{}),method:"POST",params:{...e,specialChars:!0},withCredentials:!0}),ws=async e=>v({url:P(`${Z}/api/v1/keywordtracker/product`,{}),method:"POST",params:{...e,copyTrackedHistory:!0,specialChars:!0},withCredentials:!0}),_n=Ue("ktAddProduct",async({data:e})=>{var s,c;const t=await Je({searchString:e.asin,marketplace:e.marketplace,page:1,perPage:20}),n=(c=(s=t==null?void 0:t.results)==null?void 0:s.models[0])==null?void 0:c.id;return n!=null?fs({productId:n,phrases:e.phrases,marketplace:e.marketplace,moduleId:e.moduleId}):ws(e)},{fulfilledReaction:({params:{notification:e,onSuccess:t},result:n})=>{var c,r,a,u,d,l,m;const s=ae.getState().translation;s&&((c=n.results)!=null&&c.saved&&(t==null||t((r=n.results)==null?void 0:r.saved),e.success(o.jsxs("div",{children:[o.jsx(se,{children:s.t("addToKeywordTracker.notification.success.title",{count:(a=n.results)==null?void 0:a.saved})}),o.jsx(je,{children:s.t("addToKeywordTracker.notification.success.text",{count:(u=n.results)==null?void 0:u.saved})})]}))),(d=n.results)!=null&&d.duplicates&&e.warning(o.jsxs("div",{children:[o.jsx(se,{children:s.t("addToKeywordTracker.notification.duplicates.title",{count:(l=n.results)==null?void 0:l.duplicates})}),o.jsx(je,{children:s.t("addToKeywordTracker.notification.duplicates.text",{count:(m=n.results)==null?void 0:m.duplicates})})]})))},rejectedReaction:({error:e,params:{notification:t},fetchError:n})=>{var c;const s=ae.getState().translation;if(s){const r=(c=n==null?void 0:n.result)==null?void 0:c.errorCode;t.error(o.jsxs("div",{children:[o.jsx(se,{children:s.t("addToKeywordTracker.notification.error.title")}),o.jsx(je,{children:r?s.t(`addToKeywordTracker.notification.error.codes.${r}`):e||"Server error"})]}))}}}),ks=co("addToKTMarketplaceSelector",F.atom,e=>Me(e.data.marketplace==="WALMART_US"?"WM":"AM","store",e.data.marketplace)),Ts=({notification:e})=>{const{t}=k(),{data:{asin:n,title:s,imageSrc:c,phrases:r,moduleId:a,marketplace:u,onSuccess:d}}=L(F.atom),{content:l,status:m}=L(Wn),p=L(ks),g=ys[a],{register:b,control:x,handleSubmit:I,setValue:K,watch:H}=io({defaultValues:{asin:n,phrases:[],variations:!0}}),[G,y]=H(["asin","phrases"]);h.useEffect(()=>K("phrases",r),[r,K]);const w=T(F.close),{sendSegmentEvent:$}=He(),A=T(C=>{w();const j=Kn[a];return j&&$({eventName:j,eventProperties:{trackParentAndVariations:C.variations}}),_n.actions.pending({data:{...C,marketplace:u,moduleId:a},notification:e,onSuccess:d})},[e,u,a]),S=I(A),M=Dn();return o.jsxs(o.Fragment,{children:[o.jsx(js,{children:t("addToKeywordTracker.modal.title")}),o.jsx(vs,{children:t(`addToKeywordTracker.modal.${xs[a]}`)}),o.jsxs($s,{onSubmit:S,children:[o.jsx(As,{children:o.jsx(Yt,{name:"asin",control:x,render:({field:C})=>{const j=G?[G]:[],O=N=>{C.onChange(N.length>0?N[0].toLocaleUpperCase().replace("‎",""):void 0)};return o.jsx(bs,{...C,value:j,onChange:O,inputProps:{placeholder:G?"":t("history.asinSearchPlaceholder")},getTooltipContent:()=>o.jsx(Es,{children:o.jsx(gn,{market:p.platform,product:{asin:(l==null?void 0:l.asin)||n,title:(l==null?void 0:l.title)||s,imageSrc:(l==null?void 0:l.imageUrl)||c},blocks:[{text:(l==null?void 0:l.asin)||n}]})}),size:"100",findSuggestionsMode:!0,clearOnError:!0,addTagsOnPressKeys:[","," "],onSeparate:an,maxTags:1,validation:M,loading:m==="loading",error:m==="error"})}})}),o.jsx(Ss,{children:o.jsx(Yt,{name:"phrases",control:x,render:({field:C})=>o.jsx(he,{...C,inputProps:{placeholder:t("addToKeywordTracker.modal.placeholder")},size:"200",clearOnError:!0,addTagsOnPressKeys:[","," "],onSeparate:an,maxTags:1e3,renderBeforeTags:o.jsxs(Ms,{children:[o.jsx(Ls,{}),o.jsx(Ps,{children:t("addToKeywordTracker.modal.inputPlaceholderNew",{toolText:g})})]})})})}),o.jsx(Os,{children:o.jsx(xn,{...b("variations"),children:t("addToKeywordTracker.modal.checkbox")})}),o.jsxs(Rs,{children:[o.jsx(f,{buttonType:"cancel",size:"200",onClick:w,type:"button",children:t("common.cancel")}),o.jsx(f,{buttonType:"primary",size:"200",disabled:y.length===0||!G,children:t("addToKeywordTracker.modal.startButton")})]})]})]})},an=e=>e.split(/[\x09 ,;\n]+/).map(t=>t.trim()).filter(t=>!!t).slice(0,1),bs=i(he)`
  width: 285px;

  ${he.Input} {
    width: 260px;
  }
`,js=i.div`
  ${De};
  margin-bottom: ${({theme:e})=>e.spacing.sp4};
`,vs=i.div`
  ${W};
  margin-bottom: ${({theme:e})=>e.spacing.sp8};
`,$s=i.form``,As=i.div`
  margin-bottom: ${({theme:e})=>e.spacing.sp8};
`,Ss=i.div`
  ${he.Wrapper} {
    padding: 0 8px 12px 8px;
  }

  ${he.Tags} {
    width: 100%;
  }
`,Ms=i.div`
  width: 100%;
  display: flex;
  padding: 16px 4px 12px 4px;
`,Ps=i.div`
  ${ge};
  margin-left: ${({theme:e})=>e.spacing.sp8};
`,Ls=i(Oo)`
  width: 15px;
  flex: 0 0 auto;
`,Os=i.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({theme:e})=>e.spacing.sp8};
`,Rs=i.div`
  margin-top: ${({theme:e})=>e.spacing.sp8};
  align-items: center;
  justify-content: space-between;

  display: grid;
  grid-template-columns: 1fr auto auto;

  & > :first-child {
    margin-right: auto;
  }

  & > :not(:first-child) {
    margin-left: ${({theme:e})=>e.spacing.sp16};
  }
`,Es=i.div`
  max-width: 383px;
`,Fs=e=>{const t=new RegExp(" ","g");return e.replace(t," ")},Ks=({notification:e})=>{const{t}=k();L(En,()=>null,[]);const{data:{marketplace:n}}=L(F.atom),{data:s,total:c,status:r}=L($e.atom,g=>{var b,x;return{data:((b=g.content)==null?void 0:b.results.models)||[],total:((x=g.content)==null?void 0:x.meta.totalCount)||0,status:g.status}},[]),a=Bs({notification:e}),u=T(g=>On({filter:g,marketplace:n,notification:e}),[n,e]),d=T(Ln),l=T($e.actions.pending),p=lo(g=>d({search:g.target.value,marketplace:n,notification:e}),800);return h.useEffect(()=>{n&&l({marketplace:n,notification:e})},[l,n,e]),o.jsxs(Ws,{children:[o.jsxs(_s,{children:[o.jsxs(zs,{children:[t("addToKeywordTracker.productsModal.title"),o.jsx(Vs,{children:uo[z("store",n).domain]})]}),o.jsx(Zs,{onChange:p,rightElement:o.jsx(yn,{icon:mo})})]}),o.jsx(Ds,{children:t("addToKeywordTracker.productsModal.description")}),o.jsx(Us,{children:o.jsx(Po,{name:"addToKTProducts",columns:a,data:s,total:c,status:r,behavior:Gs,onFilter:u,filter:Is,selected:Ns})})]})},Is={haveInitial:!1},Gs={itemsPerPage:[3,10,50],noPagination:!0},Ns={haveCheckbox:!1},Bs=({notification:e})=>{const{t}=k(),{data:{phrases:n,marketplace:s,moduleId:c,onSuccess:r}}=L(F.atom),a=T(F.close),{sendSegmentEvent:u}=He(),d=T(l=>{a();const m=Kn[c];return m&&u({eventName:m,eventProperties:{trackParentAndVariations:!0}}),_n.actions.pending({data:{asin:l,marketplace:s,phrases:n,variations:!0,moduleId:c},notification:e,onSuccess:r})},[e]);return h.useMemo(()=>[{field:"product",title:t("addToKeywordTracker.productsModal.table.product"),render:l=>{var x;const m=l.asin||"",p=(x=l.marketplace)==null?void 0:x.includes("WALMART"),g=t("copyButton.copy",{name:p?"Walmart Id":"ASIN"}),b=t("copyButton.copied",{name:p?"Walmart Id":"ASIN"});return o.jsx(cn,{onClick:()=>d(l.asin),children:o.jsx(gn,{product:{title:Fs(l.title||""),imageSrc:l.imageUrl||"",href:be(p?"WM":"AM",l.marketplace,l.asin)},market:p?"w":"a",marketplace:l.marketplace,blocks:[{text:`${m}`,copyContent:m,beforeCopyContent:o.jsx(po,{label:g}),afterCopyContent:o.jsx(ho,{label:b})}],tooltipOptions:{appendTo:document.body}})})}},{field:"trackedKeywords",title:t("addToKeywordTracker.productsModal.table.trackedKeywords"),width:137,render:l=>o.jsx(cn,{onClick:()=>d(l.asin),children:l.keywords})}],[d,t])},Ws=i.div``,Ds=i.div`
  ${W};
  margin-bottom: ${({theme:e})=>e.spacing.sp16};
`,_s=i.div`
  ${De};
  margin-bottom: ${({theme:e})=>e.spacing.sp4};
  display: flex;
  align-items: center;
  justify-content: space-between;
`,zs=i.div`
  display: flex;
  align-items: center;
`,Vs=i.div`
  display: flex;
  width: 27px;
  margin-left: ${({theme:e})=>e.spacing.sp16};
`,Us=i.div`
  max-height: 402px;
  overflow: scroll;
  max-width: 600px;
  margin-right: -12px;
`,cn=i.div`
  cursor: pointer;
  margin: -8px -16px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  flex: 1;
  align-self: stretch;
`,Zs=i(go)`
  max-width: 188px;
  margin-left: ${({theme:e})=>e.spacing.sp16};
`,Hs=Ue("checkProductsRequest",async({marketplace:e})=>Je({marketplace:e,page:1,perPage:1,searchString:""}),{fulfilledReaction:({result:e},{dispatch:t})=>{t(Xe(e.meta.totalCount!==0?1:2))},rejectedReaction:Pn}),Js=({notification:e})=>{const{isOpen:t,data:{marketplace:n}}=L(F.atom),s=T(()=>t?Hs.actions.pending({marketplace:n,notification:e}):void 0,[n,e,t]);return h.useEffect(()=>{s()},[s]),o.jsxs(Xs,{children:[o.jsxs(qs,{children:[o.jsx(U,{$size:"small"}),o.jsx(U,{$size:"small"})]}),o.jsx(Ys,{$size:"large"}),o.jsx(Qs,{}),o.jsxs(er,{children:[o.jsx(Re,{}),o.jsxs(zn,{children:[o.jsx(Re,{}),o.jsx(Re,{})]})]})]})},Xs=i.div``,qs=i.div`
  ${W};
  display: flex;
  flex-direction: column;

  & > :not(:first-child) {
    margin-top: ${({theme:e})=>e.spacing.sp4};
  }
`,Ys=i(U)`
  margin-top: ${({theme:e})=>e.spacing.sp16};
  min-height: 100px;
`,Qs=i(U)`
  max-width: 256px;
  margin-top: ${({theme:e})=>e.spacing.sp16};
  margin-left: auto;
`,zn=i.div`
  display: flex;
  align-items: center;

  & > :not(:first-child) {
    margin-left: ${({theme:e})=>e.spacing.sp16};
  }
`,er=i(zn)`
  margin-top: ${({theme:e})=>e.spacing.sp32};
  justify-content: space-between;
`,Re=i(U)`
  min-height: 40px;
  width: 84px;
`,tr=({step:e,notification:t})=>h.useMemo(()=>({0:o.jsx(Js,{notification:t}),1:o.jsx(Ks,{notification:t}),2:o.jsx(Ts,{notification:t})}),[t])[e],nr=()=>{const{t:e}=k(),t=T(()=>Xe(2),[]);return o.jsx(or,{children:o.jsx(f,{buttonType:"secondary",size:"200",onClick:t,children:e("addToKeywordTracker.productsModal.trackNewProduct")})})},or=i.div`
  display: flex;
  justify-content: flex-end;
`,sr=({step:e})=>h.useMemo(()=>({1:o.jsx(nr,{})}),[])[e],rr=({notification:e})=>{const t=L(ps),{isOpen:n}=L(F.atom),s=tr({step:t,notification:e}),c=sr({step:t}),{onClose:r}=hs();return o.jsx(ar,{children:o.jsx(ie,{size:"100",zIndex:1e4,isOpen:n,onClose:r,footer:c,children:s})})},ar=i.div`
  display: contents;

  ${ie.Footer} {
    border-top: 1px solid ${({theme:e})=>e.systemColors.grey200};
  }
`,ha=({data:e,moduleId:t,CustomButton:n,notification:s,onSuccess:c})=>{const{t:r}=k(),{sendSegmentEvent:a}=He();L(Wn);const{isOpen:u,data:{asin:d}}=L(F.atom),l=T(Bn),m=T(()=>{const g=gs[t];return g&&a({eventName:g,eventProperties:void 0}),F.open({...e,asin:e.asin?e.asin:"",title:e.title,imageSrc:e.imageSrc,onSuccess:c})},[e,t]),p=Dn();return h.useEffect(()=>{u&&d&&p(d),u||l()},[d,u]),o.jsxs(o.Fragment,{children:[n?o.jsx(n,{onClick:m}):o.jsx(f,{onClick:m,buttonType:"secondary",size:"100",children:r("addToKeywordTracker.button")}),o.jsx(rr,{notification:s})]})},ga=({item:e,isWalmart:t,asins:n,onClick:s,maxLength:c,marketType:r,tool:a})=>{var m;const u=h.useMemo(()=>n.indexOf(e.id)!==-1,[n,e.id]),d=h.useMemo(()=>u||c>n.length,[n.length,c,u]),l=Mo({data:{marketplace:r,asin:(e==null?void 0:e.id)||""}});return o.jsx(cr,{onClick:d?s:void 0,padding:"small",$active:u,$selectable:d,children:o.jsx(Tn,{market:t?"WALMART":"AMAZON",product:{...e,asin:e.id},renderBlocks:l,marketplace:((m=Me(r!=null&&r.startsWith("amazon")?"AM":"WM","domain",r))==null?void 0:m.store)||"",tool:a||"listingAnalyzer"},e.id)})},cr=i(hn)`
  min-width: 0;
  ${({$active:e})=>e&&Q`
      border-color: ${t=>t.theme.systemColors.blue600};
      box-shadow: inset 0 0 0 1px ${t=>t.theme.systemColors.blue600};
    `}
  ${({$selectable:e})=>e&&Q`
      cursor: pointer;
    `}
`;var me;(function(e){const t={cerebro:ue+"/api/cerebro/v1/amazon/competitors",walmart:ue+"/api/cerebro/v1/walmart/competitors-action",other:ue+"/api/v1/amazon/competitors",dashboard:$o+"/api/v1/competitors"};e.getAmazon=async n=>{const{type:s,...c}=n,r=s==="cerebro"?t.cerebro:t.other,{data:a,...u}=await v({url:P(r,{}),method:"POST",params:c,useSessionAccountId:!0}),d=z("store",c.marketplace).domain;return{data:(a==null?void 0:a.map(l=>({href:be("AM",c.marketplace,l.productId),title:l.title,imageSrc:l.imageUrl,id:l.productId,marketType:d})))??[],...u}},e.getWalmart=async n=>{const{data:s,...c}=await v({url:P(t.walmart,{}),method:"POST",params:n,useSessionAccountId:!0}),r=z("store",n.marketplace).domain;return{data:(s==null?void 0:s.map(a=>({href:be("WM",n.marketplace,a.productId),title:a.title,imageSrc:a.imageUrl,id:a.productId,marketType:r})))??[],...c}},e.getDashboard=async n=>{const{results:s,...c}=await v({url:P(t.dashboard,{...n},{arrayFormat:"bracket"}),method:"GET",params:n,useSessionAccountId:!0});return{...c,data:s.map(r=>({href:be("AM",n.marketplace,r.asin),title:r.title,imageSrc:r.imageUrl,id:r.asin,asin:r.asin,marketType:z("store",r.marketplace).domain}))}}})(me||(me={}));var Ge;(function(e){const t=Z+"/api/v1/product/my-list";e.get=async n=>{try{const{data:s}=await v({url:P(t,{pageSize:100}),method:"GET",params:{marketplace:n.marketplace},useSessionAccountId:!0}),c=z("store",n.marketplace).domain;return{data:Object.values(s).map(r=>({href:Ve(n.marketplace,r.asin),title:r.title,imageSrc:r.imageUrl,id:r.asin,marketType:c})),errorCode:NaN,errors:{},message:""}}catch(s){const{message:c,responseStatus:r,result:a}=s;throw new xo(c,r,{data:[],errorCode:(a==null?void 0:a.code)||NaN,errors:{},message:(a==null?void 0:a.message)||""})}}})(Ge||(Ge={}));const qe=xe(()=>({competitors:{data:[]},modal:null})),ir=_e(qe,"competitors",async e=>{const t=z("store",e.marketplace).platform;if(e.type==="my-list")return await Ge.get({marketplace:e.marketplace});if(e.type==="dashboard")return e.seller!=null?await me.getDashboard({marketplace:e.marketplace,seller:e.seller,asin:e.productId}):null;if(t==="AMAZON")return await me.getAmazon({marketplace:e.marketplace,productId:e.productId,type:e.type});if(t==="WALMART")return await me.getWalmart({marketplace:e.marketplace,productId:e.productId})},{initialStatus:"loading",rejected:({fetchError:e})=>{var n,s;const t=(n=ae.getState().translation)==null?void 0:n.t;if(t){const c=t(`errorCodes.${(s=e==null?void 0:e.result)==null?void 0:s.errorCode}`)||t(`errors.common.${e==null?void 0:e.responseStatus}`)||t("errorCodes.unknown");Ie.error(c)}}}),xa=Cn(qe,"modal",{reaction:({type:e,payload:t})=>{e==="OPEN"&&t&&ir.action({marketplace:t.marketplace,productId:t.productId,type:t.type})}}),ya=Fo(qe),Ye=xe()(bn((e,t)=>({top10RankedProductsForKeyword:!0,asinDetails:!0}),{name:"UIExtraTableSettings"})),lr=ze(Ye,"top10RankedProductsForKeyword"),dr=ze(Ye,"asinDetails"),Ca=({showTop10RankedProductsForKeyword:e,showAsinDetails:t})=>{const{t:n}=k(),{top10RankedProductsForKeyword:s,asinDetails:c}=Ye();return o.jsxs(o.Fragment,{children:[o.jsxs(ur,{children:[n("extraTableSettings.title"),o.jsx(yo,{content:n("extraTableSettings.titleTooltip"),colorType:"light"})]}),o.jsxs(mr,{children:[e&&o.jsx(ln,{checked:s,onChange:r=>lr.set(r.target.checked),children:n("extraTableSettings.top10RankedProductsForKeyword")}),t&&o.jsx(ln,{checked:c,onChange:r=>dr.set(r.target.checked),children:n("extraTableSettings.asinDetails")})]})]})},ur=i.p`
  ${Co};
  color: ${({theme:e})=>e.systemColors.black};
  padding-bottom: ${({theme:e})=>e.spacing.sp8};
  padding-top: ${({theme:e})=>e.spacing.sp24};
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp8};
`,mr=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp12};
`,ln=i(xn)`
  align-items: center;
`,pr=async e=>{const t=await v({method:"GET",url:P(Ko,{...e,advancedView:1}),withCredentials:!0,useSessionAccountId:!0});return Object.keys(t.data).map(n=>({...t.data[n],asin:n}))},hr="UI_TOP10_PRODUCTS_FOR_KEYWORD",ee=xe()(bn((e,t)=>({advancedView:!0,productData:{}}),{name:hr,partialize:e=>({advancedView:e.advancedView})})),Pe=fo(ee,"productData",async({key:e,params:t})=>{const n=t.phraseId;return pr({...n&&n>0?{phraseId:n.toString()}:{keyword:e},marketplaceId:z("store",t.marketplace).id})},{rejected:({fetchError:e})=>{if((e==null?void 0:e.responseStatus)===429){const t=ae.getState().translation;Ie.message(o.jsx(se,{children:t==null?void 0:t.t("keywordWithTop10Products.error")}))}},fulfilled:({result:e})=>{if((e==null?void 0:e.length)===0){const t=ae.getState().translation;Ie.message(o.jsx(se,{children:t==null?void 0:t.t("keywordWithTop10Products.noProducts")}))}}}),gr=ze(ee,"advancedView"),Vn=e=>{var s;const t=(s=Pe(c=>c[e]))==null?void 0:s.status,n=ee(c=>c.productData[e]);return h.useMemo(()=>t==="error"||t==="loaded"&&(n==null?void 0:n.length)===0,[n,t])},xr=({keyword:e,marketplace:t,tool:n,disableExtendedProductSummary:s,onChangeProductDetailsType:c})=>{const r=ee(d=>d.productData[e]),a=Pe(d=>{var l;return(l=d[e])==null?void 0:l.status}),{platform:u}=z("store",t);return o.jsx(kr,{children:a==="loading"?o.jsx(Cr,{}):r==null?void 0:r.map((d,l)=>o.jsxs(Un,{children:[o.jsxs(Zn,{children:[l+1,"."]}),o.jsx(Tn,{imageSize:"50",imageTooltipOptions:{appendTo:"parent"},market:u,marketplace:t,tool:n,titleLineClamp:1,product:{title:d.title,asin:d.asin,imageSrc:d.imageUrl,href:Ve(t,d.asin)},renderBlocks:o.jsx(yr,{product:d,marketplace:t}),disableExtendedProductSummary:s,onChangeProductDetailsType:c})]},l))})},yr=({product:e,marketplace:t})=>{const{t:n}=k(),{currency:s}=z("store",t);return o.jsxs(fr,{children:[o.jsx(Te,{children:(e==null?void 0:e.price)>=0?de({amount:s==="JPY"?e==null?void 0:e.price:(e==null?void 0:e.price)/100,currency:s}):"-"}),o.jsx(Te,{children:n("keywordWithTop10Products.variations",{value:tn({value:e.variationCount})})}),o.jsx(Te,{children:n("keywordWithTop10Products.reviews",{value:tn({value:e.reviewCount})})}),o.jsx(Te,{children:n("keywordWithTop10Products.rating",{value:e.reviewsRating})})]})},Cr=()=>o.jsx(o.Fragment,{children:new Array(10).fill(void 0).map((e,t)=>o.jsxs(Un,{children:[o.jsxs(Zn,{children:[t+1,"."]}),o.jsxs(wr,{children:[o.jsx(Ee,{$size:"large",$width:42,$height:42}),o.jsx(Ee,{$size:"medium",$width:340,$height:18}),o.jsx(Ee,{$size:"small",$width:260,$height:16})]})]},t))}),fr=i.div`
  ${Se};
  display: flex;
  gap: ${({theme:e})=>e.spacing.sp4};
  margin-top: ${({theme:e})=>e.spacing.sp4};
  white-space: nowrap;
`,Te=i.div`
  ${Se};
  display: flex;
  gap: ${({theme:e})=>e.spacing.sp4};

  &:not(:last-child):after {
    content: "·";
  }
`,wr=i.div`
  display: grid;
  grid-template:
    "a b" 16px
    "a c" 16px / 40px 1fr;
  gap: ${({theme:e})=>e.spacing.sp8};

  ${U}:first-child {
    grid-area: a;
  }
`,Un=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sp8};
`,Zn=i.div`
  ${ge};
  width: ${({theme:e})=>e.spacing.sp20};
  text-align: right;
`,Ee=i(U)`
  height: ${({$height:e})=>e}px;
`,kr=i.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 450px));
  gap: ${({theme:e})=>e.spacing.sp32};
`,Tr=({keyword:e,marketplace:t,tool:n,disableExtendedProductSummary:s,onChangeProductDetailsType:c})=>{const r=ee(fn(u=>u.productData[e])),a=Pe(u=>{var d;return(d=u[e])==null?void 0:d.status});return o.jsx(jr,{children:a==="loading"?o.jsx(br,{}):r==null?void 0:r.map((u,d)=>o.jsxs(Jn,{children:[o.jsxs(Hn,{children:[d+1,"."]}),o.jsx(vn,{size:"400",product:{imageSrc:u.imageUrl,href:Ve(t,u.asin)},marketplace:t,asin:u.asin,tool:n,tooltipOptions:{appendTo:"parent"},disableExtendedProductSummary:s,onChangeProductDetailsType:c})]},d))})},br=()=>o.jsx(o.Fragment,{children:new Array(10).fill(void 0).map((e,t)=>o.jsxs(Jn,{children:[o.jsxs(Hn,{children:[t+1,"."]}),o.jsx(vr,{$size:"large",$width:76,$height:96})]},t))}),jr=i.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${({theme:e})=>e.spacing.sp24};
`,Hn=i.div`
  ${ge};
  width: ${({theme:e})=>e.spacing.sp20};
  text-align: right;
`,Jn=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sp8};
`,vr=i(U)`
  height: ${({$height:e})=>e}px;
`,$r=({keyword:e,phraseId:t,marketplace:n,tool:s,...c})=>{const{t:r}=k(),{sendSegmentEvent:a}=jn({}),[u]=ee(l=>[l.advancedView]),d=Vn(e);return h.useEffect(()=>{Pe.action([{key:e,params:{marketplace:n,phraseId:t}}]),a({name:"Keyword Hover Product Viewed",properties:{tool:s,view:u?"advanced":"simple",display:"show"}}).then()},[e,n,t,a,s]),o.jsx(o.Fragment,{children:d?o.jsx(Xn,{keyword:e,tool:s,disableSegmentEvent:!0}):o.jsxs(Sr,{$advancedView:u,children:[o.jsxs(Mr,{children:[o.jsx(Ar,{children:r("keywordWithTop10Products.title",{keyword:e})}),o.jsx(Pr,{checked:u,onChange:l=>gr.set(l.target.checked),children:r("keywordWithTop10Products.advancedView")})]}),u?o.jsx(xr,{keyword:e,marketplace:n,tool:s,...c}):o.jsx(Tr,{tool:s,keyword:e,marketplace:n,...c})]})})},Xn=({keyword:e,tool:t,disableSegmentEvent:n})=>{const{sendSegmentEvent:s}=jn({}),[c]=ee(r=>[r.advancedView]);return h.useEffect(()=>{n||s({name:"Keyword Hover Product Viewed",properties:{tool:t,view:c?"advanced":"simple",display:"hide"}}).then()},[n,e,s,t]),e},Ar=i.div`
  ${wo}
`,Sr=i.div`
  width: ${({$advancedView:e})=>e?"930px":"640px"};
`,Mr=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({theme:e})=>e.spacing.sp16};
`,Pr=i(Qt)`
  ${Qt.Text} {
    white-space: nowrap;
  }
`,fa=({keywordNode:e,disableExtendedTooltip:t,keyword:n,tool:s,simpleTooltip:c,disableTooltip:r,...a})=>{const{isOverflown:u,checkOverflown:d}=ko(),l=Vn(n);return o.jsx(o.Fragment,{children:t||c?o.jsx(Ke,{content:o.jsx(Xn,{keyword:n,tool:s,disableSegmentEvent:c}),disabled:u,children:o.jsx(dn,{onMouseEnter:d,children:e||n})}):o.jsx(Ke,{content:o.jsx($r,{keyword:n,tool:s,...a}),interactive:!0,colorType:l?"dark":"light",maxWidth:964,disabled:r,children:o.jsx(dn,{children:e||n})})})},dn=i.div`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({theme:e})=>e.systemColors.black};
`,Lr=[{days:30,label:"day",countLabel:30},{days:90,label:"day",countLabel:90},{days:365,label:"year",countLabel:1},{days:0,label:"allTime",countLabel:0}],Or=()=>{const{t:e}=k();return h.useMemo(()=>[{value:30,label:`30 ${e("day",{count:30})}`},{value:90,label:`90 ${e("day",{count:90})}`},{value:365,label:`1 ${e("year",{count:1})}`},{value:0,label:e("allTime")}],[e])},Fe=({title:e,color:t,disabled:n})=>o.jsxs(Rr,{color:t,disabled:n,children:[o.jsx(qn,{}),o.jsx(Yn,{children:e})]}),qn=i.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-right: ${({theme:e})=>e.spacing.sp8};
`,Yn=i.div`
  ${W};
`,Rr=i.div`
  display: flex;
  align-items: center;
  min-width: 160px;

  ${qn} {
    background-color: ${({disabled:e,color:t,theme:n})=>e?n.systemColors.grey300:t};
  }

  ${Yn} {
    color: ${({disabled:e,theme:t})=>e?t.systemColors.grey300:"initial"};
  }
`,Er=h.lazy(()=>To(()=>import("./SearchVolumeGraph-5BI9bgKS.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])).then(e=>({default:e.SearchVolumeGraph}))),ve={AMAZON:"#0A6FE8",GOOGLE:"#F78527",WALMART:"#EFCF1A"},Qn=({platform:e,disabledPlatforms:t})=>{const{t:n}=k(),s=h.useMemo(()=>[{value:"AMAZON",label:o.jsx(Fe,{color:ve.AMAZON,title:n("searchGraphNew.options.AMAZON.title"),disabled:t==null?void 0:t.AMAZON})},{value:"GOOGLE",label:o.jsx(Fe,{color:ve.GOOGLE,title:n("searchGraphNew.options.GOOGLE.title"),disabled:t==null?void 0:t.GOOGLE})},{value:"WALMART",label:o.jsx(Fe,{color:ve.WALMART,title:n("searchGraphNew.options.WALMART.title"),disabled:t==null?void 0:t.WALMART})}],[t,n]);return{value:s.find(r=>r.value===e),platformOptions:s}},Fr=e=>{const{value:t,platformOptions:n}=Qn(e);return o.jsx(wn,{options:n,value:t,onChange:s=>{var c;return(c=e.onPlatformChange)==null?void 0:c.call(e,s.value)}})},Kr=e=>{const{t}=k(),{value:n}=Qn(e);return o.jsx(Ke,{delay:[500,0],content:t(`searchGraphNew.options.${n.value}.tooltip`),appendTo:document.body,zIndex:999999,children:o.jsx(Wr,{children:n.label})})},Ir=({start:e,end:t})=>o.jsxs(_r,{children:[e&&en(e,"standardNumeric")," – ",t&&en(t,"standardNumeric")]}),Gr=({status:e,searchData:t,days:n,onDaysChange:s,onReload:c,platformProps:r})=>{const{t:a}=k(),u=Or();return o.jsxs(o.Fragment,{children:[o.jsx(Ir,{start:t&&t.length>0?t[0][0]:void 0,end:t&&t.length>0?t[t.length-1][0]:void 0}),o.jsxs(Br,{children:[o.jsx(wn,{placeholder:"Range",options:u,size:"100",value:n,onChange:({value:d})=>s==null?void 0:s(d)}),r&&o.jsx(Fr,{...r})]}),o.jsx(h.Suspense,{fallback:Zr,children:o.jsx(Nr,{children:o.jsx(Lo,{status:e,error:o.jsxs(un,{children:[o.jsx(Dr,{children:a("searchGraph.error")}),o.jsx(zr,{buttonType:"primary",size:"200",onClick:c,children:a("common.reload")})]}),children:t&&t.length>0?o.jsx(Er,{volume:t||[],height:400,days:n,color:ve[(r==null?void 0:r.platform)||"AMAZON"],seriesLegend:a((r==null?void 0:r.platform)!=="GOOGLE"?"searchGraph.legend":"searchGraph.googleTrend")}):o.jsx(un,{children:"N/A"})})})}),r&&o.jsx(Kr,{...r})]})},Nr=i.div`
  min-height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
`,Br=i.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({theme:e})=>e.spacing.sp16};
  margin-bottom: ${({theme:e})=>e.spacing.sp24};
`,Wr=i.div`
  ${ge};
  color: ${({theme:e})=>e.systemColors.black};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  * {
    min-width: initial;
  }
`,un=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`,Dr=i.div``,_r=i.div`
  ${W};
`,zr=i(f)`
  margin-top: ${({theme:e})=>e.spacing.sp24};
`,Vr=i.div`
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ur=i(Ro)`
  width: 40px;
  height: 40px;
`,Zr=o.jsx(Vr,{children:o.jsx(Ur,{})});var Ne;(function(e){const t=ue+"/api/trends/get-google-trends";e.get=async n=>v({url:P(t,{period:"year",keywords:[n.keyword]},{arrayFormat:"bracket"}),method:"GET",useSessionAccountId:!0})})(Ne||(Ne={}));var Be;(function(e){const t=Z+"/api/v1/keywords/search-volume",n={chart:`${t}/chart`,chartBatch:`${t}/chart-batch`};e.get=async s=>v({url:n.chart,method:"GET",params:s,withCredentials:!0}),e.getBatch=async s=>v({url:P(n.chartBatch,{...s},{arrayFormat:"bracket"}),method:"GET",withCredentials:!0})})(Be||(Be={}));var We;(function(e){const t=Z+"/api/v1/walmart/search-volume",n={chart:`${t}/chart`,chartBatch:`${t}/chart-batch`};e.get=async s=>v({url:n.chart,method:"GET",params:s,withCredentials:!0}),e.getBatch=async s=>v({url:P(n.chartBatch,{...s},{arrayFormat:"bracket"}),method:"GET",withCredentials:!0})})(We||(We={}));const ce=xe(()=>({searchData:null,graphModal:{keyword:"",marketplace:"com"}})),eo=(e,t,n)=>e+`_source_${n==="AMAZON"?t:n}`,mn=_e(ce,"searchData",async({keyword:e,phraseId:t,marketplace:n,moduleId:s="xray",selectedPlatform:c="AMAZON"})=>{var d;const r=bo();let a=null;if(c==="AMAZON"){const l=(d=Me("AM","TLDomain",n))==null?void 0:d.store;a=await Be.get({keyword:e,marketplace:l,moduleId:s,accountId:r})}else c==="WALMART"?a=await We.get({keyword:e,moduleId:s,accountId:r}):c==="GOOGLE"&&(a={results:{history:(await Ne.get({keyword:e})).data,keyword:e,marketplace:n}});const u=ce.getState().searchData??{};return a?{...u,[eo((a==null?void 0:a.results.keyword)??e,n,c)]:{history:(a==null?void 0:a.results.history.map(l=>[l.timestamp*1e3,l.exact]))??[],marketplace:a==null?void 0:a.results.marketplace,keyword:a==null?void 0:a.results.keyword}}:u}),pe=Cn(ce,"graphModal"),Hr=(e,t)=>(e||[]).filter(n=>t===0?!0:new Date(n[0]).getTime()>Date.now()-t*3600*1e3*24),pn=({selectedPlatform:e,marketplace:t,moduleId:n})=>{var a;const s=e==="GOOGLE"&&"GOOGLE",c=e==="WALMART"&&"WALMART_US",r=(a=Me("AM","TLDomain",t))==null?void 0:a.store;Mn({eventName:"Search Volume chart viewed",eventProperties:{marketplace:s||c||r,type:e.toLocaleLowerCase(),moduleId:n}})},wa=({buttonProps:e={},...t})=>{const n=()=>{t.onClick?t.onClick(()=>pe.open(t)):pe.open(t)};return o.jsx(Jr,{buttonType:"icon",size:"50",icon:o.jsx(yn,{icon:jo}),onClick:n,...e})},Jr=i(f)`
  margin: -4px 0;
`,ka=()=>{const{t:e}=k(),[t]=pe();return o.jsx(ie,{isOpen:t,onClose:pe.close,size:"100",lockBody:!0,title:o.jsx(Xr,{}),footer:o.jsx(Qr,{children:o.jsx(f,{size:"200",onClick:pe.close,children:e("common.close")})}),children:t&&o.jsx(qr,{})})},Xr=()=>{const{t:e}=k(),t=ce(n=>n.graphModal);return o.jsx(o.Fragment,{children:e("searchGraphNew.title",{keyword:t.keyword})})},qr=h.memo(()=>{var p,g,b;const[e,t]=h.useState(Lr[2].days),n=ce(x=>x.graphModal),[s,c]=h.useState(((p=n==null?void 0:n.platformOptions)==null?void 0:p.platform)??"AMAZON"),r=ce(fn(x=>x.searchData)),a=Hr((g=r==null?void 0:r[eo(n.keyword,n.marketplace,s)])==null?void 0:g.history,e),u=a?a.length:0,d=()=>{if(u===0)return mn.action({...n,selectedPlatform:s})};h.useEffect(d,[n,s,u]),h.useEffect(()=>{pn({selectedPlatform:s,marketplace:n.marketplace,moduleId:n.moduleId})},[]);const l=mn(x=>a.length>0?"loaded":x.status),m=n.platformOptions?{platform:s,onPlatformChange:x=>{var I,K;(K=(I=n.platformOptions)==null?void 0:I.disabledPlatforms)!=null&&K[x]||(pn({selectedPlatform:x,marketplace:n.marketplace,moduleId:n.moduleId}),c(x))},disabledPlatforms:(b=n.platformOptions)==null?void 0:b.disabledPlatforms}:void 0;return o.jsx(Yr,{children:o.jsx(Gr,{status:l,searchData:a,days:e,onDaysChange:t,onReload:d,platformProps:m})})}),Yr=i.div`
  display: flex;
  flex-direction: column;
`,Qr=i.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;export{Be as A,vn as E,ga as G,fa as K,ua as L,ma as N,nn as O,pa as U,as as a,We as b,ha as c,Io as d,Ca as e,Ye as f,lr as g,dr as h,Gr as i,wa as j,ka as k,He as l,ms as m,on as n,qe as o,ir as p,xa as q,ya as r,Mn as s,ws as t,pe as u,Fs as v};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/SearchVolumeGraph-5BI9bgKS.js","static/index-3WWdADc-.js","static/AddToMyListDropdown-j1WBFoh0.js","static/NewRadio-r0LBmnQI.js","static/useAutoPlay-ceAGW3YF.js","static/middleware-lPGLX8nq.js","static/Learn-iEpSD2rS.js","static/use-latest.esm-1HraH-At.js","static/use-onclickoutside.browser.esm-FI41Hp9Z.js","static/MarketplaceSingleSelect-pf9DJN8d.js","static/ChartExport-xG8FR1Rx.js","static/LineGraphSkeleton-eFZ_jC28.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=SearchGraphModal-Qx3Zfqc8.js.map
