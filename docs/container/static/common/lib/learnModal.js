import { j as o, b as h } from "../js/_JqgLpqe.js";
import { P as b } from "../js/CiS8auFy.js";
import { d as w, e as M } from "../js/CZVHOlcu.js";
import { F as f } from "../js/Cg-oD5Fc.js";
import { r as d } from "../js/react-D5yUVy0K.js";
import { u as c } from "../js/styled-components-sg3HbxYZ.js";
import { s as j } from "../js/BzsJhSng.js";
import { W as B } from "../js/C6ESWGBB.js";
import { u as I, a as T, b as A, l as m, c as L, d as W, e as R } from "../js/BmQPhfGn.js";
import { u as K } from "../js/BATov6ge.js";
import { D as l } from "../js/DgjXrPJs.js";
import { a as S } from "../js/CxU1FO_U.js";
import { N as E } from "../js/DXDnZb_T.js";
import { L as O } from "../js/88GS_Ft0.js";
import { c as z } from "../js/B5xUyCsU.js";
const D = ({ scriptLoaded: e, playlistCode: a, options: r }) => (d.useEffect(() => {
  var t, n;
  (n = (t = window == null ? void 0 : window.Wistia) == null ? void 0 : t.playlist) == null || n.call(t, a, {
    version: "v1",
    theme: "bento",
    // bento | tab
    videoOptions: {
      autoPlay: !0,
      volumeControl: !0,
      playerColor: "54bbff",
      videoWidth: "640",
      videoHeight: "359",
      inlineOptionsOnly: !0,
      version: "v1",
      ...r != null && r.autoPlay ? { muted: !0 } : {}
    },
    videoFoam: "true",
    media_0_0: {
      autoPlay: (r == null ? void 0 : r.autoPlay) || !1,
      controlsVisibleOnLoad: !1
    }
  });
}, [r, e, a]), o.jsx(q, { id: `wistia_${a}`, className: "wistia_embed", "data-video-width": "640", "data-video-height": "359" })), q = c.div``, u = {
  learnVideoMagnet: "learnVideoMagnet",
  learnVideoAnomalyTracker: "learnVideoAnomalyTracker",
  learnVideoAudience: "learnVideoAudience",
  learnVideoAlerts: "learnVideoAlerts",
  learnVideoBlackBox: "learnVideoBlackBox",
  learnVideoInventoryProtector: "learnVideoInventoryProtector",
  learnVideoBlackBoxKeywordManager: "learnVideoBlackBoxKeywordManager",
  learnVideoKeywordProcessor: "learnVideoKeywordProcessor",
  learnVideoKeywordTracker: "learnVideoKeywordTracker",
  learnVideoMisspellinator: "learnVideoMisspellinator",
  learnVideoTrendster: "learnVideoTrendster",
  learnVideoKeywordResearchWidget: "learnVideoKeywordResearchWidget",
  learnVideoInventoryManagement: "learnVideoInventoryManagement",
  learnVideoProfits: "learnVideoProfits",
  learnVideoMarketTracker: "learnVideoMarketTracker",
  learnVideoRefundGenie: "learnVideoRefundGenie",
  learnVideoIndexChecker: "learnVideoIndexChecker",
  learnVideoPortalsDashboard: "learnVideoPortalsDashboard",
  learnVideoPortalsCampaigns: "learnVideoPortalsCampaigns",
  learnVideoPortalsAttributions: "learnVideoPortalsAttributions",
  learnVideoPortalsBarCodes: "learnVideoPortalsBarCodes",
  learnVideoPortalsQrCodes: "learnVideoPortalsQrCodes",
  learnVideoPortalsInserts: "learnVideoPortalsInserts",
  learnVideoPortalsBlueprints: "learnVideoPortalsBlueprints",
  learnVideoPortalsTemplates: "learnVideoPortalsTemplates",
  learnVideoPortalsCustomers: "learnVideoPortalsCustomers",
  learnVideoPortalsDomains: "learnVideoPortalsDomains",
  learnVideoPortalsSettings: "learnVideoPortalsSettings",
  learnVideoProfitsInventoryLevels: "learnVideoProfitsInventoryLevels",
  learnVideoProfitsExpenses: "learnVideoProfitsExpenses",
  learnVideoProfitsRefunds: "learnVideoProfitsRefunds",
  learnVideoProfitsManager: "learnVideoProfitsManager"
}, P = {
  learnVideoMagnet: { playlistCode: "2p8x78sg6u" },
  learnVideoAnomalyTracker: { videoId: "e249t7l8eb" },
  learnVideoAudience: { playlistCode: "7kgfxtjbi5" },
  learnVideoAlerts: { playlistCode: "cqr1w2uuwl" },
  learnVideoBlackBox: { playlistCode: "3rouhzyt8f" },
  learnVideoInventoryProtector: { playlistCode: "q5w02bx7mw" },
  learnVideoBlackBoxKeywordManager: { playlistCode: "urvdynj77g" },
  learnVideoKeywordProcessor: { playlistCode: "lmaswfa7qx" },
  learnVideoKeywordTracker: { playlistCode: "iklvenli7n" },
  learnVideoMisspellinator: { playlistCode: "3kbnk6be1u" },
  learnVideoTrendster: { playlistCode: "9a6xd2ndfh" },
  learnVideoKeywordResearchWidget: { videoId: "1pwinjqi2s" },
  learnVideoInventoryManagement: { playlistCode: "e917ujo0uz" },
  learnVideoProfits: { playlistCode: "999fe1yb42" },
  learnVideoProfitsProductPerformance: { playlistCode: "999fe1yb42" },
  learnVideoProfitsInventoryLevels: { playlistCode: "999fe1yb42" },
  learnVideoProfitsExpenses: { playlistCode: "999fe1yb42" },
  learnVideoProfitsRefunds: { playlistCode: "999fe1yb42" },
  learnVideoProfitsManager: { playlistCode: "999fe1yb42" },
  learnVideoMarketTracker: { playlistCode: "57k1dzv4em" },
  learnVideoRefundGenie: { playlistCode: "29y6om85n8" },
  learnVideoDashboardExtension: { videoId: "p994f86v7v" },
  learnVideoIndexChecker: { playlistCode: "odd64ud691" },
  learnVideoPortalsDashboard: { playlistCode: "flqi7jm6n8" },
  learnVideoPortalsCampaigns: { playlistCode: "dkkmct9tig" },
  learnVideoPortalsAttributions: { playlistCode: "k8xhc4viwn" },
  learnVideoPortalsBarCodes: { playlistCode: "muurpersic" },
  learnVideoPortalsQrCodes: { playlistCode: "3rxg8kl7yp" },
  learnVideoPortalsInserts: { playlistCode: "z25m079urk" },
  learnVideoPortalsBlueprints: { playlistCode: "te1d8p45xj" },
  learnVideoPortalsTemplates: { playlistCode: "i28iu1c4s0" },
  learnVideoPortalsCustomers: { playlistCode: "wj775sh2xz" },
  learnVideoPortalsDomains: { playlistCode: "05lrtoaclx" },
  learnVideoPortalsSettings: { playlistCode: "kdffs1i3fa" }
}, F = (e) => Object.keys(P).includes(e), $ = ({ id: e }) => F(e) ? o.jsx(_, { id: e }) : o.jsx(o.Fragment, {}), _ = ({ id: e }) => {
  const a = S(), r = u == null ? void 0 : u[e], { videoId: t, playlistCode: n } = P[e], { isLoading: C, autoPlay: s } = I(r), { open: x, loaded: V, setOpen: i } = T(), { t: g } = K(), y = A((v) => v.setAutoPlayRequestSeenTrue, j);
  d.useEffect(() => {
    s && i(!0);
  }, [s, i]);
  const k = d.useCallback(() => {
    i(!0), m({
      name: W,
      properties: {
        resourceType: "learnModal",
        source: e
      }
    });
  }, [i, e]), p = d.useCallback(() => {
    i(!1), m({
      name: R,
      properties: {
        resourceType: "learnModal",
        source: e
      }
    }), a && y();
  }, [e, a, y, i]);
  return o.jsxs(o.Fragment, { children: [o.jsx(E, { id: L, "data-testid": "learn", size: "100", type: "button", buttonType: "tertiary", icon: C ? o.jsx(f, { spin: !0, icon: w }) : o.jsx(f, { icon: M }), onClick: k, children: g("learn.title") }), o.jsx(G, { lockBody: !0, isOpen: x, size: "400", onClickOutside: p, onClickEscape: p, onClose: p, children: o.jsx(N, { children: V ? t ? o.jsx(B, { isModal: !0, scriptLoaded: V, videoId: t, options: {
    autoPlay: s,
    fitStrategy: "fill"
  } }) : o.jsx(D, { scriptLoaded: V, playlistCode: n, options: {
    autoPlay: s
  } }) : o.jsx(Q, {}) }) })] });
}, G = c(l)`
  ${l.Children},
  ${l.Content},
    ${l.Footer} {
    background: transparent;
    padding: 0;
  }

  ${l.Content} {
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
`, N = c.div`
  background: #fff;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Q = c(O)`
  width: 50px;
  height: 50px;
`, H = z(), ce = (e, a) => {
  var r;
  e && ((r = h(e)) == null || r.render(
    /* @__PURE__ */ o.jsx(b, { store: H, children: /* @__PURE__ */ o.jsx($, { ...a }) })
  ));
};
export {
  ce as AppendLearnModal
};
