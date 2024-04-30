import{u as a,cK as s,ai as e,bN as i,j as r}from"./index-3WWdADc-.js";import{bj as n,bk as f,bl as l}from"./Learn-iEpSD2rS.js";const m=a(n)`
  .Toastify--animate {
    animation-fill-mode: both;
    animation-duration: 0.7s;
  }

  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }

  .Toastify__progress-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    z-index: 9999;
    opacity: 0.7;
    background-color: ${({theme:t})=>t.systemColors.grey100};
    transform-origin: left;
  }

  .Toastify__progress-bar--animated {
    animation: Toastify__trackProgress linear 1 forwards;
  }

  .Toastify__progress-bar--controlled {
    transition: transform 0.2s;
  }

  @keyframes Toastify__bounceInLeft {
    from,
    60%,
    75%,
    90%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    0% {
      opacity: 0;
      transform: translate3d(-3000px, 0, 0);
    }
    60% {
      opacity: 1;
      transform: translate3d(25px, 0, 0);
    }
    75% {
      transform: translate3d(-10px, 0, 0);
    }
    90% {
      transform: translate3d(5px, 0, 0);
    }
    to {
      transform: none;
    }
  }
  @keyframes Toastify__bounceOutLeft {
    20% {
      opacity: 1;
      transform: translate3d(20px, 0, 0);
    }
    to {
      opacity: 0;
      transform: translate3d(-2000px, 0, 0);
    }
  }

  .Toastify__bounce-enter--top-left,
  .Toastify__bounce-enter--bottom-left {
    animation-name: Toastify__bounceInLeft;
  }

  .Toastify__bounce-exit--top-left,
  .Toastify__bounce-exit--bottom-left {
    animation-name: Toastify__bounceOutLeft;
  }

  .Toastify__toast {
    position: relative;
    display: -ms-flexbox;
    z-index: 2147483647;
    -ms-flex-pack: justify;
    max-height: 800px;
    overflow: hidden;
    font-family:
      "Nunito Sans",
      -apple-system,
      "Neuton",
      sans-serif;
    cursor: pointer;
    direction: ltr;
    min-height: auto;
    box-sizing: border-box;
    padding: 12px 12px 12px 16px;
    ${s};
    border: solid 1px ${({theme:t})=>t.systemColors.grey200};
    background-color: ${({theme:t})=>t.systemColors.white};
    margin-bottom: 8px;
    border-radius: 6px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    .Toastify__toast-icon {
      display: none;
    }
  }

  .Toastify__toast-theme--dark {
    background: ${({theme:t})=>t.systemColors.grey800};
    color: ${({theme:t})=>t.systemColors.white};
    width: auto;
    font-weight: bold;

    & .Toastify__toast-body {
      padding: 0;
    }
  }

  .Toastify__toast--error {
  }

  .Toastify__toast--warning {
  }

  .Toastify__toast--info {
    width: auto;
  }

  .Toastify__toast--success {
  }

  .Toastify__toast-body {
    width: auto;
    padding: 0 16px 0 0;
    margin: 0;
  }

  .Toastify__progress-bar {
  }
`,_=t=>{const o=e();return i.createPortal(r.jsx(m,{stacked:!0,containerId:"toast",closeButton:f,hideProgressBar:!1,transition:l,autoClose:5e3,closeOnClick:!1,limit:3,...t,position:"bottom-left",style:y,bodyStyle:d,theme:o}),document.body)},y={zIndex:99999999999999,width:"375px",marginLeft:"84px",display:"flex",flexDirection:"column",alignItems:"flex-start",position:"fixed",left:"1em",bottom:"1em"},d={margin:"auto 0",flex:"1 1 auto"};export{_ as T};
//# sourceMappingURL=ToastContainer-r564VdJO.js.map
