import{r as d,j as e,u as V,a5 as h,w as b,C as w,N as M,x as P,W as B,ag as I,M as i}from"./index-3WWdADc-.js";import{W as j}from"./WistiaVideo-x0Y3z35k.js";import{e as T,u as A,h as L,j as f,l as W,k as K,m as R,L as S}from"./useAutoPlay-ceAGW3YF.js";const E=({scriptLoaded:o,playlistCode:l,options:a})=>(d.useEffect(()=>{var r,n;(n=(r=window==null?void 0:window.Wistia)==null?void 0:r.playlist)==null||n.call(r,l,{version:"v1",theme:"bento",videoOptions:{autoPlay:!0,volumeControl:!0,playerColor:"54bbff",videoWidth:"640",videoHeight:"359",inlineOptionsOnly:!0,version:"v1",...a!=null&&a.autoPlay?{muted:!0}:{}},videoFoam:"true",media_0_0:{autoPlay:(a==null?void 0:a.autoPlay)||!1,controlsVisibleOnLoad:!1}})},[a,o,l]),e.jsx(O,{id:`wistia_${l}`,className:"wistia_embed","data-video-width":"640","data-video-height":"359"})),O=V.div``,y={learnVideoMagnet:"learnVideoMagnet",learnVideoAnomalyTracker:"learnVideoAnomalyTracker",learnVideoAudience:"learnVideoAudience",learnVideoAlerts:"learnVideoAlerts",learnVideoBlackBox:"learnVideoBlackBox",learnVideoInventoryProtector:"learnVideoInventoryProtector",learnVideoBlackBoxKeywordManager:"learnVideoBlackBoxKeywordManager",learnVideoKeywordProcessor:"learnVideoKeywordProcessor",learnVideoKeywordTracker:"learnVideoKeywordTracker",learnVideoMisspellinator:"learnVideoMisspellinator",learnVideoTrendster:"learnVideoTrendster",learnVideoKeywordResearchWidget:"learnVideoKeywordResearchWidget",learnVideoInventoryManagement:"learnVideoInventoryManagement",learnVideoProfits:"learnVideoProfits",learnVideoMarketTracker:"learnVideoMarketTracker",learnVideoRefundGenie:"learnVideoRefundGenie",learnVideoIndexChecker:"learnVideoIndexChecker",learnVideoPortalsDashboard:"learnVideoPortalsDashboard",learnVideoPortalsCampaigns:"learnVideoPortalsCampaigns",learnVideoPortalsAttributions:"learnVideoPortalsAttributions",learnVideoPortalsBarCodes:"learnVideoPortalsBarCodes",learnVideoPortalsQrCodes:"learnVideoPortalsQrCodes",learnVideoPortalsInserts:"learnVideoPortalsInserts",learnVideoPortalsBlueprints:"learnVideoPortalsBlueprints",learnVideoPortalsTemplates:"learnVideoPortalsTemplates",learnVideoPortalsCustomers:"learnVideoPortalsCustomers",learnVideoPortalsDomains:"learnVideoPortalsDomains",learnVideoPortalsSettings:"learnVideoPortalsSettings",learnVideoProfitsInventoryLevels:"learnVideoProfitsInventoryLevels",learnVideoProfitsExpenses:"learnVideoProfitsExpenses",learnVideoProfitsRefunds:"learnVideoProfitsRefunds",learnVideoProfitsManager:"learnVideoProfitsManager"},C={learnVideoMagnet:{playlistCode:"2p8x78sg6u"},learnVideoAnomalyTracker:{videoId:"e249t7l8eb"},learnVideoAudience:{playlistCode:"7kgfxtjbi5"},learnVideoAlerts:{playlistCode:"cqr1w2uuwl"},learnVideoBlackBox:{playlistCode:"3rouhzyt8f"},learnVideoInventoryProtector:{playlistCode:"q5w02bx7mw"},learnVideoBlackBoxKeywordManager:{playlistCode:"urvdynj77g"},learnVideoKeywordProcessor:{playlistCode:"lmaswfa7qx"},learnVideoKeywordTracker:{playlistCode:"iklvenli7n"},learnVideoMisspellinator:{playlistCode:"3kbnk6be1u"},learnVideoTrendster:{playlistCode:"9a6xd2ndfh"},learnVideoKeywordResearchWidget:{videoId:"1pwinjqi2s"},learnVideoInventoryManagement:{playlistCode:"e917ujo0uz"},learnVideoProfits:{playlistCode:"999fe1yb42"},learnVideoProfitsProductPerformance:{playlistCode:"999fe1yb42"},learnVideoProfitsInventoryLevels:{playlistCode:"999fe1yb42"},learnVideoProfitsExpenses:{playlistCode:"999fe1yb42"},learnVideoProfitsRefunds:{playlistCode:"999fe1yb42"},learnVideoProfitsManager:{playlistCode:"999fe1yb42"},learnVideoMarketTracker:{playlistCode:"57k1dzv4em"},learnVideoRefundGenie:{playlistCode:"29y6om85n8"},learnVideoDashboardExtension:{videoId:"p994f86v7v"},learnVideoIndexChecker:{playlistCode:"odd64ud691"},learnVideoPortalsDashboard:{playlistCode:"flqi7jm6n8"},learnVideoPortalsCampaigns:{playlistCode:"dkkmct9tig"},learnVideoPortalsAttributions:{playlistCode:"k8xhc4viwn"},learnVideoPortalsBarCodes:{playlistCode:"muurpersic"},learnVideoPortalsQrCodes:{playlistCode:"3rxg8kl7yp"},learnVideoPortalsInserts:{playlistCode:"z25m079urk"},learnVideoPortalsBlueprints:{playlistCode:"te1d8p45xj"},learnVideoPortalsTemplates:{playlistCode:"i28iu1c4s0"},learnVideoPortalsCustomers:{playlistCode:"wj775sh2xz"},learnVideoPortalsDomains:{playlistCode:"05lrtoaclx"},learnVideoPortalsSettings:{playlistCode:"kdffs1i3fa"}},z=o=>Object.keys(C).includes(o),Q=({id:o})=>z(o)?e.jsx(D,{id:o}):e.jsx(e.Fragment,{}),D=({id:o})=>{const l=h(),a=y==null?void 0:y[o],{videoId:r,playlistCode:n}=C[o],{isLoading:m,autoPlay:s}=T(a),{open:g,loaded:c,setOpen:t}=A(),{t:x}=b(),p=L(v=>v.setAutoPlayRequestSeenTrue,w);d.useEffect(()=>{s&&t(!0)},[s,t]);const k=d.useCallback(()=>{t(!0),f({name:K,properties:{resourceType:"learnModal",source:o}})},[t,o]),u=d.useCallback(()=>{t(!1),f({name:R,properties:{resourceType:"learnModal",source:o}}),l&&p()},[o,l,p,t]);return e.jsxs(e.Fragment,{children:[e.jsx(M,{id:W,"data-testid":"learn",size:"100",type:"button",buttonType:"tertiary",icon:m?e.jsx(P,{spin:!0,icon:B}):e.jsx(P,{icon:I}),onClick:k,children:x("learn.title")}),e.jsx(q,{lockBody:!0,isOpen:g,size:"400",onClickOutside:u,onClickEscape:u,onClose:u,children:e.jsx($,{children:c?r?e.jsx(j,{isModal:!0,scriptLoaded:c,videoId:r,options:{autoPlay:s,fitStrategy:"fill"}}):e.jsx(E,{scriptLoaded:c,playlistCode:n,options:{autoPlay:s}}):e.jsx(F,{})})})]})},q=V(i)`
  ${i.Children},
  ${i.Content},
    ${i.Footer} {
    background: transparent;
    padding: 0;
  }

  ${i.Content} {
    & > div:first-of-type {
      transition: 0.2s all ease-in-out;
      position: absolute;
      right: -45px;
      top: 25px;

      button {
        transition: 0.2s all ease-in-out;
        color: white;

        & > div {
          font-size: 25px;
        }

        &:hover,
        &:focus,
        &:active {
          color: initial;
        }
      }
    }
  }
`,$=V.div`
  background: #fff;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`,F=V(S)`
  width: 50px;
  height: 50px;
`;export{Q as L};
//# sourceMappingURL=LearnModal-92NBtu9_.js.map
