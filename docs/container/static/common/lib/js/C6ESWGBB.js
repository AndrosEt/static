import { j as o } from "./_JqgLpqe.js";
import { r } from "./react-D5yUVy0K.js";
import { u as e, a as l } from "./styled-components-sg3HbxYZ.js";
const _ = ({ isModal: t, videoId: i, options: a, height: u = "390px", scriptLoaded: w, sendSegment: s, ...d }) => {
  const [n, p] = r.useState(!1);
  return r.useEffect(() => {
    var h;
    (h = window == null ? void 0 : window._wq) == null || h.push({
      id: i,
      options: {
        ...a,
        ...a != null && a.autoPlay ? { muted: !0 } : {}
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onReady: (c) => {
        c.bind("play", () => (s == null || s(), c.unbind));
      }
    });
  }, [i, a, w, s]), r.createElement(
    m,
    { ...d, key: i, $height: u, $isModal: t },
    o.jsx(f, { className: `wistia_embed wistia_async_${i}`, $isModal: t, children: i && o.jsx(x, { className: "wistia_swatch", $load: n, children: o.jsx($, { alt: "", "aria-hidden": "true", src: `https://fast.wistia.com/embed/medias/${i}/swatch`, onLoad: () => p(!0) }) }) })
  );
}, m = e.div`
  position: relative;
  height: ${({ $height: t }) => t};
  max-height: 90vh;
  width: 100%;

  ${({ $isModal: t }) => t && l`
      padding: 53.25% 0 0 0;
      height: 100%;
    `};
`, f = e.div`
  height: 100%;
  position: relative;
  width: 100%;

  ${({ $isModal: t }) => t && l`
      left: 0;
      position: absolute;
      top: 0;
    `};
`, x = e.div`
  height: 100%;
  left: 0;
  opacity: ${({ $load: t }) => t ? 1 : 0};
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  transition: opacity 200ms;
`, $ = e.img`
  filter: blur(5px);
  object-fit: contain;
  height: 100%;
  width: 100%;
`;
export {
  _ as W
};
