import { b as t, j as r } from "../js/_JqgLpqe.js";
import { P as p } from "../js/CiS8auFy.js";
import { c as n, u as d } from "../js/B5xUyCsU.js";
import { d as c } from "../js/CbQwHgQg.js";
import { U as i } from "../js/w87L6W8U.js";
const l = n(), a = c("upsellGeneralModal", void 0), j = () => l.dispatch(a.open()), U = () => l.dispatch(a.close()), m = ({ modalProps: e, ...s }) => {
  const { isOpen: o } = d(a.atom);
  return /* @__PURE__ */ r.jsx(i, { ...s, modalProps: { ...e, isOpen: o } });
}, h = (e, s) => {
  var o;
  e && ((o = t(e)) == null || o.render(
    /* @__PURE__ */ r.jsx(p, { store: l, children: /* @__PURE__ */ r.jsx(m, { ...s }) })
  ));
};
export {
  h as AppendUpsellGeneralModal,
  U as upsellGeneralModalClose,
  j as upsellGeneralModalOpen,
  a as upsellGeneralModalStore
};
