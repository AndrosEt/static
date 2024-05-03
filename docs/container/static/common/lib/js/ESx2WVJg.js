const e = {
  mobileSmall: 320,
  mobile: 576,
  laptop: 768,
  desktop: 992,
  largeDesktop: 1200,
  extraDesktop: 1400
}, r = [
  `(max-width: ${e.mobile - 1}px)`,
  `(min-width: ${e.mobile}px) and (max-width:${e.laptop - 1}px)`,
  `(min-width: ${e.laptop}px) and (max-width:${e.desktop - 1}px)`,
  `(min-width: ${e.desktop}px) and (max-width:${e.largeDesktop - 1}px)`,
  `(min-width: ${e.largeDesktop}px) and (max-width:${e.extraDesktop - 1}px)`,
  `(min-width:${e.extraDesktop}px)`
], t = (o) => `(min-width: ${o}px)`, a = (o) => `(max-width: ${o - 1}px)`, p = (o) => `@media screen and ${t(o)}`, l = (o) => `@media screen and ${a(o)}`, i = {
  mobileSmallBefore: l(e.mobileSmall),
  mobileSmall: p(e.mobileSmall),
  mobileBefore: l(e.mobile),
  mobile: p(e.mobile),
  laptopBefore: l(e.laptop),
  laptop: p(e.laptop),
  desktopBefore: l(e.desktop),
  desktop: p(e.desktop),
  largeDesktopBefore: l(e.largeDesktop),
  largeDesktop: p(e.largeDesktop),
  extraDesktopBefore: l(e.extraDesktop),
  extraDesktop: p(e.extraDesktop)
}, s = {
  mobileSmallBefore: a(e.mobileSmall),
  mobileSmall: t(e.mobileSmall),
  mobileBefore: a(e.mobile),
  mobile: t(e.mobile),
  laptopBefore: a(e.laptop),
  laptop: t(e.laptop),
  desktopBefore: a(e.desktop),
  desktop: t(e.desktop),
  largeDesktopBefore: a(e.largeDesktop),
  largeDesktop: t(e.largeDesktop),
  extraDesktopBefore: a(e.extraDesktop),
  extraDesktop: t(e.extraDesktop)
};
export {
  s as a,
  e as b,
  i as m,
  r as q
};
