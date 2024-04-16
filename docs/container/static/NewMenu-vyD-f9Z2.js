import {
  e2 as toString,
  r as reactExports,
  gi as ApiCustomerMe,
  gj as ApiUpsell,
  A as create,
  ao as IndexedDb,
  ab as leitenModal,
  a6 as transformHelium10Domain,
  gk as csrfFetch,
  g as getUrlWithSearchParams,
  gl as isDevHost,
  P as membersLink,
  f as baseFetch,
  aE as leitenRecord,
  G as leitenRequest,
  bl as leitenGroupRequest,
  w as useTranslation,
  j as jsxRuntimeExports,
  cF as faBook,
  gm as faQuestionCircle,
  d3 as faLightbulb,
  eh as faGraduationCap,
  dv as faTrashCan,
  N as NewButton,
  x as FontAwesomeIcon,
  gn as faEllipsisVertical,
  u as ut,
  S as cssDisplay100Bold,
  go as faPaperPlane,
  Q as cssBody200,
  gp as faBookSparkles,
  bj as faAngleDown,
  $ as cssBody200Bold,
  a1 as cssBody100Bold,
  bw as faAngleRight,
  C as shallow$1,
  fa as faThumbsUp,
  fb as faThumbsDown,
  gq as faSync,
  Y as cssBody100,
  D as ht,
  cx as boxShadow100,
  M as DialogModal,
  I as media,
  K as cssBody400,
  ak as leitenPrimitive,
  a3 as sendSegmentEvent,
  gr as SEGMENT_EVENT_FREEDOM_TICKET_CLICKED,
  gs as localStorageBVSource,
  gt as useAccounts,
  ag as useTranslationStore,
  fo as useAccountsStore,
  gu as WECHAT_COUNTER,
  gv as isDashboard,
  aH as faSpinnerThird,
  a as at,
  cc as useForm,
  am as LabelWithTooltip,
  an as NewInput,
  U as cssBody600Bold,
  ds as debounce,
  z as domain$1,
  by as __vitePreload,
  dt as combineStatuses,
  gw as SEGMENT_EVENT_SEARCH_BAR_CLICKED,
  aV as c,
  aC as CSSTransition,
  y as cssBody400Bold,
  b0 as faSearch,
  q as useLocation,
  cs as matchPath,
  a8 as faSparkles,
  bN as mediaShort,
  bk as Skeleton,
  br as commonjsGlobal,
  bu as getDefaultExportFromCjs,
  gx as createRoot,
  E as Tooltip,
  a_ as createStore,
  aZ as context,
  t as tt,
  cj as styledTheme,
  fl as UiTranslateProvider,
  af as FeaturesTranslateProvider,
  Z as cssDisplay50Bold,
  aA as useClickOutside,
  aB as faChevronDown,
  au as faCheck,
  aD as faPen,
  a7 as faExternalLink,
  b4 as scrollStylesCSS,
  e$ as faBell$1,
  gy as SEGMENT_EVENT_FACEBOOK_ICON_CLICKED,
  gz as SEGMENT_EVENT_ACCOUNT_SWITCHER_CLICKED,
  gA as getCsrf,
  aQ as faCog,
  gB as faReceipt,
  gC as faUserFriends,
  gD as faNetworkWired,
  gE as faEnvelopeOpenText,
  gF as faSackDollar,
  gG as faFileLines,
  gH as faSignOut,
  gI as faBookReader,
  gJ as SEGMENT_EVENT_ACCOUNT_MENU_LINK_CLICKED,
  gK as SEGMENT_EVENT_WECHAT_POPOVER,
  gL as faWeixin,
  b8 as BaseSingleSelect,
  cv as faCrown,
  aJ as faInfoCircle,
  fQ as faCircleExclamation,
  gM as faApplePay,
  gN as faGooglePay,
  gO as faCreditCard,
  bL as faGear,
  gP as faEnvelopesBulk,
  gQ as faGauge,
  gR as faDrawCircle,
  gS as faGaugeSimpleMax,
  ek as faBoxesStacked,
  gT as faArrowsRetweet,
  gU as faMap,
  gV as faFileInvoiceDollar,
  gW as faClipboardCheck,
  dK as faCube,
  dL as faIndustryWindows,
  dM as faWarehouse,
  dN as faListUl,
  dO as faTruckFast,
  gX as faCirclePlay,
  gY as faChartMixed,
  gZ as faBan,
  d1 as faCircle,
  en as faGrid2,
  fi as faChartSimple,
  g_ as faTableCellsLarge,
  eE as faListCheck,
  g$ as faClockRotateLeft,
  h0 as faCalendar,
  h1 as faWandMagicSparkles,
  h2 as faWindow,
  h3 as faQrcode,
  h4 as faRectangleBarcode,
  h5 as faBoxBallot,
  h6 as faPenRuler,
  h7 as faTableColumns,
  el as faBookUser,
  ej as faGlobe,
  bS as faLink,
  f7 as faSwords,
  h8 as faUserGraduate,
  bI as faChartLine,
  h9 as faAdd,
  cz as LockedBadge,
  a9 as SEGMENT_EVENT_REFERSION_CLICKED,
  R as React__default,
  cT as faStar$1,
  b6 as mediaSize,
  fe as faAngleUp,
  cR as faLongArrowDown,
  e as useAction,
  b7 as faTimes$1,
  ha as BrowserRouter,
  p as useNavigate,
  hb as setAccountId
} from "./index-VVIvRZBh.js";
import {
  p as persist,
  w as searchBarAutocompleteLink,
  x as searchBarChosenResultLink,
  y as differenceInHours,
  z as contactSupportLink,
  A as supportLink,
  B as customerSuccessWebinarsLink,
  u as useSegmentEvent,
  N as NewTextArea,
  D as customersLink,
  F as domain,
  G as isDev,
  I as getFlagLink,
  J as notificationsAlertsLink,
  K as facebookGroupLink,
  L as defaultAvatarLink,
  M as replaceAccountId,
  O as subscribeLink,
  Q as eliteLink,
  S as privacyPolicyLink,
  T as termsAndConditionsLink,
  U as reviewsLink,
  V as sitemapLink
} from "./middleware-KgP9JdWn.js";
import {
  l as leitenList
} from "./leitenList-G2zkImOB.js";
import {
  P as Popover,
  Z as StatusSwitcher,
  aX as isolateStyleID,
  X as faCheckCircle,
  aY as faTimesCircle,
  aZ as stickyHeaderHeight,
  a_ as fixedHeaderHeight,
  i as faChevronUp,
  a$ as faXmark,
  b0 as faBell,
  e as formatDate,
  r as refersionLink,
  aa as faStar,
  b1 as faChevronRight,
  C as faTimes,
  b2 as LockBodyStyles,
  b3 as GlobalStyle
} from "./Learn-nfpDmxZa.js";
import {
  S as StatusChip
} from "./StatusChip-96oyOgD5.js";
import {
  o as useMedia,
  L as Logo$2,
  r as LogoIcon
} from "./useAutoPlay-JZxKBgmm.js";
import {
  F as FloatingWindow
} from "./FloatingModal-HNj3AY-K.js";
import {
  b as baseSlice
} from "./useWindowSize-8O4yXzap.js";
import {
  C as CategoricalChip
} from "./CategoricalChip-FObKkzKw.js";

function castSlice(e, t, r) {
  var s = e.length;
  return r = r === void 0 ? s : r, !t && r >= s ? e : baseSlice(e, t, r)
}
var rsAstralRange$2 = "\\ud800-\\udfff",
    rsComboMarksRange$3 = "\\u0300-\\u036f",
    reComboHalfMarksRange$3 = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange$3 = "\\u20d0-\\u20ff",
    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
    rsVarRange$2 = "\\ufe0e\\ufe0f",
    rsZWJ$2 = "\\u200d",
    reHasUnicode = RegExp("[" + rsZWJ$2 + rsAstralRange$2 + rsComboRange$3 + rsVarRange$2 + "]");

function hasUnicode(e) {
  return reHasUnicode.test(e)
}

function asciiToArray(e) {
  return e.split("")
}
var rsAstralRange$1 = "\\ud800-\\udfff",
    rsComboMarksRange$2 = "\\u0300-\\u036f",
    reComboHalfMarksRange$2 = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange$2 = "\\u20d0-\\u20ff",
    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
    rsVarRange$1 = "\\ufe0e\\ufe0f",
    rsAstral = "[" + rsAstralRange$1 + "]",
    rsCombo$2 = "[" + rsComboRange$2 + "]",
    rsFitz$1 = "\\ud83c[\\udffb-\\udfff]",
    rsModifier$1 = "(?:" + rsCombo$2 + "|" + rsFitz$1 + ")",
    rsNonAstral$1 = "[^" + rsAstralRange$1 + "]",
    rsRegional$1 = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    rsSurrPair$1 = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    rsZWJ$1 = "\\u200d",
    reOptMod$1 = rsModifier$1 + "?",
    rsOptVar$1 = "[" + rsVarRange$1 + "]?",
    rsOptJoin$1 = "(?:" + rsZWJ$1 + "(?:" + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join("|") + ")" + rsOptVar$1 + reOptMod$1 + ")*",
    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
    rsSymbol = "(?:" + [rsNonAstral$1 + rsCombo$2 + "?", rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join("|") + ")",
    reUnicode = RegExp(rsFitz$1 + "(?=" + rsFitz$1 + ")|" + rsSymbol + rsSeq$1, "g");

function unicodeToArray(e) {
  return e.match(reUnicode) || []
}

function stringToArray(e) {
  return hasUnicode(e) ? unicodeToArray(e) : asciiToArray(e)
}

function createCaseFirst(e) {
  return function(t) {
    t = toString(t);
    var r = hasUnicode(t) ? stringToArray(t) : void 0,
        s = r ? r[0] : t.charAt(0),
        i = r ? castSlice(r, 1).join("") : t.slice(1);
    return s[e]() + i
  }
}
var upperFirst = createCaseFirst("toUpperCase");

function capitalize(e) {
  return upperFirst(toString(e).toLowerCase())
}

function arrayReduce(e, t, r, s) {
  var i = -1,
      n = e == null ? 0 : e.length;
  for (s && n && (r = e[++i]); ++i < n;) r = t(r, e[i], i, e);
  return r
}

function basePropertyOf(e) {
  return function(t) {
    return e == null ? void 0 : e[t]
  }
}
var deburredLetters = {
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    },
    deburrLetter = basePropertyOf(deburredLetters);
const deburrLetter$1 = deburrLetter;
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    rsComboMarksRange$1 = "\\u0300-\\u036f",
    reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange$1 = "\\u20d0-\\u20ff",
    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
    rsCombo$1 = "[" + rsComboRange$1 + "]",
    reComboMark = RegExp(rsCombo$1, "g");

function deburr(e) {
  return e = toString(e), e && e.replace(reLatin, deburrLetter$1).replace(reComboMark, "")
}
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

function asciiWords(e) {
  return e.match(reAsciiWord) || []
}
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

function hasUnicodeWord(e) {
  return reHasUnicodeWord.test(e)
}
var rsAstralRange = "\\ud800-\\udfff",
    rsComboMarksRange = "\\u0300-\\u036f",
    reComboHalfMarksRange = "\\ufe20-\\ufe2f",
    rsComboSymbolsRange = "\\u20d0-\\u20ff",
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = "\\u2700-\\u27bf",
    rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff",
    rsMathOpRange = "\\xac\\xb1\\xd7\\xf7",
    rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
    rsPunctuationRange = "\\u2000-\\u206f",
    rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
    rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde",
    rsVarRange = "\\ufe0e\\ufe0f",
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange,
    rsApos$1 = "['’]",
    rsBreak = "[" + rsBreakRange + "]",
    rsCombo = "[" + rsComboRange + "]",
    rsDigits = "\\d+",
    rsDingbat = "[" + rsDingbatRange + "]",
    rsLower = "[" + rsLowerRange + "]",
    rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]",
    rsFitz = "\\ud83c[\\udffb-\\udfff]",
    rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")",
    rsNonAstral = "[^" + rsAstralRange + "]",
    rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    rsUpper = "[" + rsUpperRange + "]",
    rsZWJ = "\\u200d",
    rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")",
    rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")",
    rsOptContrLower = "(?:" + rsApos$1 + "(?:d|ll|m|re|s|t|ve))?",
    rsOptContrUpper = "(?:" + rsApos$1 + "(?:D|LL|M|RE|S|T|VE))?",
    reOptMod = rsModifier + "?",
    rsOptVar = "[" + rsVarRange + "]?",
    rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*",
    rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
    rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq,
    reUnicodeWord = RegExp([rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join("|"), "g");

function unicodeWords(e) {
  return e.match(reUnicodeWord) || []
}

function words(e, t, r) {
  return e = toString(e), t = r ? void 0 : t, t === void 0 ? hasUnicodeWord(e) ? unicodeWords(e) : asciiWords(e) : e.match(t) || []
}
var rsApos = "['’]",
    reApos = RegExp(rsApos, "g");

function createCompounder(e) {
  return function(t) {
    return arrayReduce(words(deburr(t).replace(reApos, "")), e, "")
  }
}
var camelCase = createCompounder(function(e, t, r) {
  return t = t.toLowerCase(), e + (r ? capitalize(t) : t)
});

function useEvent(e) {
  const t = reactExports.useRef(e),
      r = reactExports.useRef((...s) => t.current(...s));
  return reactExports.useLayoutEffect(() => {
    t.current = e
  }), r.current
}
const getUserInfo = ApiCustomerMe.get,
    getUpsellInfo = ApiUpsell.get;
var useIntersection = function(e, t) {
  var r = reactExports.useState(null),
      s = r[0],
      i = r[1];
  return reactExports.useEffect(function() {
    if (e.current && typeof IntersectionObserver == "function") {
      var n = function(l) {
            i(l[0])
          },
          a = new IntersectionObserver(n, t);
      return a.observe(e.current),
          function() {
            i(null), a.disconnect()
          }
    }
    return function() {}
  }, [e.current, t.threshold, t.root, t.rootMargin]), s
};
const useChatAIStore = create()(persist(() => ({
      ready: !1,
      conversation: {
        id: "",
        name: null,
        context: null,
        messages: [],
        segments: {}
      },
      data: {},
      errors: {}
    }), {
      name: "ChatAIConversationsStore",
      partialize: ({
                     conversation: e
                   }) => ({
        conversation: e
      })
    })),
    getChatConversationName = e => "conversation_" + e,
    indexedChatAIDb = new IndexedDb("chatAI"),
    prepareChatConversationTables = async e => indexedChatAIDb.createObjectStore([getChatConversationName(e)]), useChatAIModal = leitenModal(useChatAIStore, "conversation.context"), sparkles = "data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.67578%201.99664L9%201.5L9.49688%200.17557C9.53672%200.0699609%209.6375%200%209.75%200C9.8625%200%209.96328%200.0699609%2010.0031%200.17557L10.5%201.5L11.8242%201.99664C11.9297%202.03625%2012%202.13727%2012%202.25C12%202.3625%2011.9297%202.46328%2011.8242%202.50313L10.5%203L10.0031%204.32422C9.96328%204.42969%209.8625%204.5%209.75%204.5C9.6375%204.5%209.53672%204.42969%209.49688%204.32422L9%203L7.67578%202.50313C7.54922%202.46328%207.5%202.3625%207.5%202.25C7.5%202.13727%207.54922%202.03625%207.67578%201.99664ZM6.04219%204.38984L8.71406%205.625C8.84766%205.68594%208.93203%205.81953%208.93203%205.96719C8.93203%206.1125%208.84766%206.24609%208.71406%206.30703L6.04219%207.54219L4.80703%2010.2141C4.74609%2010.3477%204.6125%2010.432%204.46719%2010.432C4.31953%2010.432%204.18594%2010.3477%204.125%2010.2141L2.88984%207.54219L0.217781%206.30703C0.0850078%206.24609%200%206.1125%200%205.96719C0%205.81953%200.0850078%205.68594%200.217781%205.625L2.88984%204.38984L4.125%201.71773C4.18594%201.58508%204.31953%201.5%204.46719%201.5C4.6125%201.5%204.74609%201.58508%204.80703%201.71773L6.04219%204.38984ZM9.49688%207.67578C9.53672%207.54922%209.6375%207.5%209.75%207.5C9.8625%207.5%209.96328%207.54922%2010.0031%207.67578L10.5%209L11.8242%209.49688C11.9297%209.53672%2012%209.6375%2012%209.75C12%209.8625%2011.9297%209.96328%2011.8242%2010.0031L10.5%2010.5L10.0031%2011.8242C9.96328%2011.9297%209.8625%2012%209.75%2012C9.6375%2012%209.53672%2011.9297%209.49688%2011.8242L9%2010.5L7.67578%2010.0031C7.54922%209.96328%207.5%209.8625%207.5%209.75C7.5%209.6375%207.54922%209.53672%207.67578%209.49688L9%209L9.49688%207.67578Z'%20fill='url(%23paint0_linear_891_498)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_891_498'%20x1='6'%20y1='0'%20x2='6'%20y2='12'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23C91309'/%3e%3cstop%20offset='0.234375'%20stop-color='%23F78527'/%3e%3cstop%20offset='0.463542'%20stop-color='%23EFCE1A'/%3e%3cstop%20offset='0.708333'%20stop-color='%239BBD02'/%3e%3cstop%20offset='0.947917'%20stop-color='%2336C9E2'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", useFeatureModalStore = create(() => ({
      share: null,
      language: null
    })), useShareModal = leitenModal(useFeatureModalStore, "share"), useLanguageModal = leitenModal(useFeatureModalStore, "share");
let nanoid = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, r) => (r &= 63, r < 36 ? t += r.toString(36) : r < 62 ? t += (r - 26).toString(36).toUpperCase() : r > 62 ? t += "-" : t += "_", t), "");
const adtomicAllow$1 = ["d2orfccgjm83qx.amplifyapp.com", transformHelium10Domain("adtomic.stg.helium10.com"), transformHelium10Domain("adtomic.helium10.com"), "dev.ppc-helium.org"],
    getChatContext = () => {
      const {
        hostname: e,
        pathname: t
      } = window.location;
      return t === "/" || t.startsWith("/control-center") || t.startsWith("/dashboard") ? "dashboard" : t.startsWith("/profits") ? "profits" : t.startsWith("/cerebro") ? "cerebro" : t.startsWith("/magnet") ? "magnet" : t.startsWith("/black-box") ? "blackBox" : t.startsWith("/trendster") ? "trendster" : t.startsWith("/keyword-manager") ? "myListKeywords" : t.startsWith("/frankenstein") ? "frankenstein" : t.startsWith("/scribbles") ? "scribbles" : t.startsWith("/5KChecker") ? "indexChecker" : t.startsWith("/listing-analyzer") ? "listingAnalyzer" : t.startsWith("/listing-builder") ? "listingBuilder" : t.startsWith("/audience") ? "audience" : t.startsWith("/keyword-tracker") ? "keywordTracker" : t.startsWith("/markettracker") ? "marketTracker" : t.startsWith("/mt360") ? "marketTracker360" : t.startsWith("/alerts") ? "alerts" : t.startsWith("/inventory-protector") ? "inventoryProtector" : t.startsWith("/refundgenie") ? "refundGenie" : t.startsWith("/inventory-management") ? "inventoryManagement" : t.startsWith("/misspellinator") ? "misspellinator" : e.includes(transformHelium10Domain("followup.helium10.com")) ? "followUp" : adtomicAllow$1.some(r => e.includes(r)) ? "adtomic" : e.includes(transformHelium10Domain("portals.helium10.com")) ? "portals" : "dashboard"
    };
var ApiSearchBar;
(function(e) {
  e.getAutocomplete = async r => {
    const s = await csrfFetch({
      url: getUrlWithSearchParams(searchBarAutocompleteLink, {
        ...r
      }),
      withCredentials: !0
    });
    return {
      items: {
        tools: t(s.items.tools),
        resources: t(s.items.resources)
      }
    }
  }, e.getChosenResult = () => csrfFetch({
    url: searchBarChosenResultLink,
    withCredentials: !0
  }), e.setChosenResult = r => csrfFetch({
    url: searchBarChosenResultLink,
    method: "POST",
    params: r,
    withCredentials: !0
  });
  const t = r => [...r].sort((i, n) => (i.priority || -1) - (n.priority || -1)).slice(0, 5)
})(ApiSearchBar || (ApiSearchBar = {}));
const commonAsked = {
      dashboard: [{
        text: "Getting Started with Insights Dashboard",
        link: "https://kb.helium10.com/hc/en-us/articles/13836165722395-Getting-Started-with-Insights-Dashboard"
      }, {
        text: "Insights Dashboard Graphs",
        link: "https://kb.helium10.com/hc/en-us/articles/13837251378331-Insights-Dashboard-Graphs"
      }, {
        text: "Insights Dashboard - Parent, SKU, and Child View",
        link: "https://kb.helium10.com/hc/en-us/articles/16189520063643-Insights-Dashboard-Parent-SKU-and-Child-View"
      }, {
        text: "My Products – Insights Dashboard",
        link: "https://kb.helium10.com/hc/en-us/articles/13838311787419-My-Products-Insights-Dashboard"
      }],
      cerebro: [{
        text: "Cerebro and Magnet PRO Training Video: Search Volume and Its Importance",
        link: "https://kb.helium10.com/hc/en-us/articles/360046327094-Cerebro-and-Magnet-PRO-Training-Video-Search-Volume-and-Its-Importance"
      }, {
        text: "Tutorial: How to Use Cerebro to Find the Best Keywords for Your Listings and PPC Ads",
        link: "https://kb.helium10.com/hc/en-us/articles/360034481473-Tutorial-How-to-Use-Cerebro-to-Find-the-Best-Keywords-for-Your-Listings-and-PPC-Ads"
      }, {
        text: "What Does the CPR Score Mean in Cerebro?",
        link: "https://kb.helium10.com/hc/en-us/articles/4406772639643-What-Does-the-CPR-Score-Mean-in-Cerebro-"
      }, {
        text: "Which Keyword Tool Should I Use: Cerebro or Magnet?",
        link: "https://kb.helium10.com/hc/en-us/articles/4406543761947-Which-Keyword-Tool-Should-I-Use-Cerebro-or-Magnet-"
      }, {
        text: "Where Can I See the Organic Rank for Keywords in Cerebro When I Am Doing a Multi-ASIN or Multi-Product ID Search?",
        link: "https://kb.helium10.com/hc/en-us/articles/4406543699355-Where-Can-I-See-the-Organic-Rank-for-Keywords-in-Cerebro-When-I-Am-Doing-a-Multi-ASIN-or-Multi-Product-ID-Search-"
      }],
      magnet: [{
        text: "Magnet PRO Training Video: Introduction and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/360046314694-Magnet-PRO-Training-Video-Introduction-and-Overview"
      }, {
        text: "Magnet PRO Training Video: Where Do the Keywords Come From? Organic vs. Amazon Recommended vs. Smart Complete",
        link: "https://kb.helium10.com/hc/en-us/articles/360046867574-Magnet-PRO-Training-Video-Where-Do-the-Keywords-Come-From-Organic-vs-Amazon-Recommended-vs-Smart-Complete"
      }, {
        text: "Cerebro and Magnet PRO Training Video: Search Volume and Its Importance",
        link: "https://kb.helium10.com/hc/en-us/articles/360046327094-Cerebro-and-Magnet-PRO-Training-Video-Search-Volume-and-Its-Importance"
      }, {
        text: "How to Analyze Keywords Using Magnet",
        link: "https://kb.helium10.com/hc/en-us/articles/4765984652315-How-to-Analyze-Keywords-Using-Magnet-"
      }, {
        text: "Which Keyword Tool Should I Use: Cerebro or Magnet?",
        link: "https://kb.helium10.com/hc/en-us/articles/4406543761947-Which-Keyword-Tool-Should-I-Use-Cerebro-or-Magnet-"
      }],
      blackBox: [{
        text: "Black Box Pro Training Video: Title Density Explained",
        link: "https://kb.helium10.com/hc/en-us/articles/4419119894555-Black-Box-Pro-Training-Video-Title-Density-Explained"
      }, {
        text: "Black Box PRO Training Video: How to Find Product Opportunities with the Products Tab",
        link: "https://kb.helium10.com/hc/en-us/articles/360046247054-Black-Box-PRO-Training-Video-How-to-Find-Product-Opportunities-with-the-Products-Tab"
      }, {
        text: "Black Box: Broad Reach Potential",
        link: "https://kb.helium10.com/hc/en-us/articles/360046384274-Black-Box-Broad-Reach-Potential"
      }, {
        text: "Tutorial: Navigating the Black Box Dashboard",
        link: "https://kb.helium10.com/hc/en-us/articles/360034015153-Tutorial-Navigating-the-Black-Box-Dashboard"
      }, {
        text: "How Are the Different Tabs in Black Box Used for Product Research?",
        link: "https://kb.helium10.com/hc/en-us/articles/4406553685147-How-Are-the-Different-Tabs-in-Black-Box-Used-for-Product-Research-"
      }],
      trendster: [{
        text: "Trendster PRO Training Video: Introduction and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/360046384114-Trendster-PRO-Training-Video-Introduction-and-Overview"
      }],
      myListProducts: [{
        text: "My List PRO Training Video: How To Use My List in Black Box and Xray",
        link: "https://kb.helium10.com/hc/en-us/articles/360050727134-My-List-PRO-Training-Video-How-To-Use-My-List-in-Black-Box-and-Xray"
      }, {
        text: "How Do I Manage My Keywords in My List?",
        link: "https://kb.helium10.com/hc/en-us/articles/1260807672309-How-Do-I-Manage-My-Keywords-in-My-List-"
      }],
      misspellinator: [{
        text: "Misspellinator PRO Training Video: Introduction and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/360047027293-Misspellinator-PRO-Training-Video-Introduction-and-Overview"
      }, {
        text: "Tutorial: How to Use Misspellinator to Increase Product Visibility in Customers' Organic Search Results",
        link: "https://kb.helium10.com/hc/en-us/articles/360033425474-Tutorial-How-to-Use-Misspellinator-to-Increase-Product-Visibility-in-Customers-Organic-Search-Results"
      }],
      myListKeywords: [{
        text: "My List PRO Training Video: How To Use My List in Black Box and Xray",
        link: "https://kb.helium10.com/hc/en-us/articles/360050727134-My-List-PRO-Training-Video-How-To-Use-My-List-in-Black-Box-and-Xray"
      }, {
        text: "How Do I Manage My Keywords in My List?",
        link: "https://kb.helium10.com/hc/en-us/articles/1260807672309-How-Do-I-Manage-My-Keywords-in-My-List-"
      }],
      adtomic: [{
        text: "Adtomic Ad Manager",
        link: "https://kb.helium10.com/hc/en-us/articles/11820698257179-Adtomic-Ad-Manager"
      }, {
        text: "Adtomic Schedules",
        link: "https://kb.helium10.com/hc/en-us/articles/8950447598875-Adtomic-Schedules"
      }, {
        text: "Adtomic Dashboard",
        link: "https://kb.helium10.com/hc/en-us/articles/11331720950939-Adtomic-Dashboard"
      }, {
        text: "How Do I Monitor My Adtomic PPC Spend in Helium 10?",
        link: "https://kb.helium10.com/hc/en-us/articles/4403357557019-How-Do-I-Monitor-My-Adtomic-PPC-Spend-in-Helium-10-"
      }, {
        text: "How Do I Access the Adtomic Ad Manager?",
        link: "https://kb.helium10.com/hc/en-us/articles/360038393793-How-Do-I-Access-the-Adtomic-Ad-Manager-"
      }],
      amazonAttribution: [{
        text: "How to Create Amazon Attribution Links in Portals",
        link: "https://kb.helium10.com/hc/en-us/articles/6654591879707-How-to-Create-Amazon-Attribution-Links-in-Portals"
      }],
      portals: [{
        text: "Portals PRO Training: How Do I Download Lead and Customer Information?",
        link: "https://kb.helium10.com/hc/en-us/articles/360057892013-Portals-PRO-Training-How-Do-I-Download-Lead-and-Customer-Information-"
      }, {
        text: "Portals PRO Training: How Do I Create an Email Opt-In Portal?",
        link: "https://kb.helium10.com/hc/en-us/articles/360056047034-Portals-PRO-Training-How-Do-I-Create-an-Email-Opt-In-Portal-"
      }, {
        text: "How Do I Create a QR Code in Portals?",
        link: "https://kb.helium10.com/hc/en-us/articles/1260801417809-How-Do-I-Create-a-QR-Code-in-Portals-"
      }, {
        text: "How Do I Create a Product Insert Using Portals?",
        link: "https://kb.helium10.com/hc/en-us/articles/1260801504469-How-Do-I-Create-a-Product-Insert-Using-Portals-"
      }, {
        text: "How to Create Amazon Attribution Links in Portals",
        link: "https://kb.helium10.com/hc/en-us/articles/6654591879707-How-to-Create-Amazon-Attribution-Links-in-Portals"
      }],
      frankenstein: [{
        text: "Frankenstein PRO Training Video: Introduction and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/360047021253-Frankenstein-PRO-Training-Video-Introduction-and-Overview"
      }, {
        text: "Tutorial: How to Sort and Manage a List of Effective Keywords Using Frankenstein",
        link: "https://kb.helium10.com/hc/en-us/articles/360034474954-Tutorial-How-to-Sort-and-Manage-a-List-of-Effective-Keywords-Using-Frankenstein"
      }],
      scribbles: [{
        text: "Scribbles PRO Training Video: How to Use Scribbles to Write a Listing",
        link: "https://kb.helium10.com/hc/en-us/articles/360049411453-Scribbles-PRO-Training-Video-How-to-Use-Scribbles-to-Write-a-Listing"
      }, {
        text: "Scribbles PRO Training Video: How to Import Keywords from Other Tools",
        link: "https://kb.helium10.com/hc/en-us/articles/360048654614-Scribbles-PRO-Training-Video-How-to-Import-Keywords-from-Other-Tools"
      }, {
        text: "Scribbles PRO Training Video: How to Import a Listing from Amazon",
        link: "https://kb.helium10.com/hc/en-us/articles/360049411513-Scribbles-PRO-Training-Video-How-to-Import-a-Listing-from-Amazon"
      }, {
        text: "Scribbles PRO Training Video: Introduction and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/360047022473-Scribbles-PRO-Training-Video-Introduction-and-Overview"
      }, {
        text: "How to Optimize Your Product Listings Using Ranking Keywords in Scribbles",
        link: "https://kb.helium10.com/hc/en-us/articles/360034588014-How-to-Optimize-Your-Product-Listings-Using-Ranking-Keywords-in-Scribbles"
      }],
      indexChecker: [{
        text: "Index Checker PRO Training Video: Introduction and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/360047022073-Index-Checker-PRO-Training-Video-Introduction-and-Overview"
      }, {
        text: "Index Checker PRO Training Video: What to Do If My Products Are Not Indexed",
        link: "https://kb.helium10.com/hc/en-us/articles/360047022213-Index-Checker-PRO-Training-Video-What-to-Do-If-My-Products-Are-Not-Indexed"
      }, {
        text: "How to Use Index Checker to ID Which Words Amazon Indexes for a Product",
        link: "https://kb.helium10.com/hc/en-us/articles/360034828174-How-to-Use-Index-Checker-to-ID-Which-Words-Amazon-Indexes-for-a-Product"
      }],
      listingAnalyzer: [{
        text: "How Do I Use Listing Analyzer on a Multiple Product Search?",
        link: "https://kb.helium10.com/hc/en-us/articles/1260805246990-How-Do-I-Use-Listing-Analyzer-on-a-Multiple-Product-Search-"
      }, {
        text: "How Do I Use Listing Analyzer on a Single Product Search?",
        link: "https://kb.helium10.com/hc/en-us/articles/1260805246890-How-Do-I-Use-Listing-Analyzer-on-a-Single-Product-Search-"
      }, {
        text: "Xray Pro Training Video: Listing Analyzer from Xray",
        link: "https://kb.helium10.com/hc/en-us/articles/10392024599835-Xray-Pro-Training-Video-Listing-Analyzer-from-Xray"
      }, {
        text: "How Do I Use the Helium 10 Listing Analyzer?",
        link: "https://kb.helium10.com/hc/en-us/articles/1260804050970-How-Do-I-Use-the-Helium-10-Listing-Analyzer-"
      }],
      listingBuilder: [{
        text: "Listing Builder AI - Write it for Me",
        link: "https://kb.helium10.com/hc/en-us/articles/15053118154523-Listing-Builder-AI-Write-it-for-Me"
      }],
      audience: [{
        text: "Audience FAQs",
        link: "https://kb.helium10.com/hc/en-us/articles/1260807010150-Audience-FAQs"
      }, {
        text: "How Do I Use Audience to Create a Poll?",
        link: "https://kb.helium10.com/hc/en-us/articles/4401784758171-How-Do-I-Use-Audience-to-Create-a-Poll-"
      }, {
        text: "How Do I Interpret My Audience Poll Results?",
        link: "https://kb.helium10.com/hc/en-us/articles/4401831443355-How-Do-I-Interpret-My-Audience-Poll-Results-"
      }],
      keywordTracker: [{
        text: "Keyword Tracker PRO Training Video: How to Check Your Ranks Hourly",
        link: "https://kb.helium10.com/hc/en-us/articles/360047506993-Keyword-Tracker-PRO-Training-Video-How-to-Check-Your-Ranks-Hourly"
      }, {
        text: "Keyword Tracker PRO Training Video: Differences in Keyword Tracker vs. Amazon Explained",
        link: "https://kb.helium10.com/hc/en-us/articles/360047507333-Keyword-Tracker-PRO-Training-Video-Differences-in-Keyword-Tracker-vs-Amazon-Explained"
      }, {
        text: "Keyword Tracker PRO Training Video: How to Get Instant Historical Keyword Ranking",
        link: "https://kb.helium10.com/hc/en-us/articles/360051148493-Keyword-Tracker-PRO-Training-Video-How-to-Get-Instant-Historical-Keyword-Ranking"
      }, {
        text: "Keyword Tracker PRO Training Video: Introduction and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/360047017873-Keyword-Tracker-PRO-Training-Video-Introduction-and-Overview"
      }, {
        text: "What is the Benefit of Tracking Keywords in Keyword Tracker?",
        link: "https://kb.helium10.com/hc/en-us/articles/4406544165147-What-is-the-Benefit-of-Tracking-Keywords-in-Keyword-Tracker-"
      }],
      marketTracker: [{
        text: "Market Tracker PRO Training Video: Introduction and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/360046246454-Market-Tracker-PRO-Training-Video-Introduction-and-Overview"
      }, {
        text: "How Do I Track My Competition Using Helium 10's Market Tracker?",
        link: "https://kb.helium10.com/hc/en-us/articles/360044672854-How-Do-I-Track-My-Competition-Using-Helium-10-s-Market-Tracker-"
      }, {
        text: "Market Tracker PRO Training Video: How to Organize a Market",
        link: "https://kb.helium10.com/hc/en-us/articles/360046886473-Market-Tracker-PRO-Training-Video-How-to-Organize-a-Market"
      }, {
        text: "Market Tracker PRO Training Video: How to Create a Market",
        link: "https://kb.helium10.com/hc/en-us/articles/5472121601563-How-to-Create-a-Market-Using-Market-Tracker-360"
      }, {
        text: "Market Tracker PRO Training Video: How to Analyze a Market",
        link: "https://kb.helium10.com/hc/en-us/articles/360046886533-Market-Tracker-PRO-Training-Video-How-to-Analyze-a-Market"
      }],
      marketTracker360: [{
        text: "Market Tracker 360 Pro Training Video: Intro and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/8892753403291-Market-Tracker-360-Pro-Training-Video-Intro-and-Overview"
      }, {
        text: "Market Tracker 360 Pro Training Video: Market Curation",
        link: "https://kb.helium10.com/hc/en-us/articles/8892812644507-Market-Tracker-360-Pro-Training-Video-Market-Curation"
      }, {
        text: "Market Tracker 360 Pro Training Video: The Insights Board",
        link: "https://kb.helium10.com/hc/en-us/articles/9166433559323-Market-Tracker-360-Pro-Training-Video-The-Insights-Board"
      }, {
        text: "How to Create a Market Using Market Tracker 360",
        link: "https://kb.helium10.com/hc/en-us/articles/5472121601563-How-to-Create-a-Market-Using-Market-Tracker-360"
      }, {
        text: "How to Adjust Your Market Settings in Market Tracker 360",
        link: "https://kb.helium10.com/hc/en-us/articles/8195132677147-How-to-Adjust-Your-Market-Settings-in-Market-Tracker-360"
      }],
      profits: [{
        text: "Profits PRO Training Video: Introduction and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/360049799794-Profits-PRO-Training-Video-Introduction-and-Overview"
      }, {
        text: "Profits PRO Training Video: How to Use the Inventory Levels Tab",
        link: "https://kb.helium10.com/hc/en-us/articles/360049799994-Profits-PRO-Training-Video-How-to-Use-the-Inventory-Levels-Tab"
      }, {
        text: "Why Doesn't Profits Include All Amazon Fees in Its Calculations?",
        link: "https://kb.helium10.com/hc/en-us/articles/360037707013-Why-Doesn-t-Profits-Include-All-Amazon-Fees-in-Its-Calculations-"
      }, {
        text: "How Are Promotional Costs Reported in Profits?",
        link: "https://kb.helium10.com/hc/en-us/articles/360037868634-How-Are-Promotional-Costs-Reported-in-Profits-"
      }, {
        text: "How Often Does My Walmart Data Update in Profits?",
        link: "https://kb.helium10.com/hc/en-us/articles/4404331377051-How-Often-Does-My-Walmart-Data-Update-in-Profits-"
      }],
      alerts: [{
        text: "Alerts PRO Training Video: Introduction and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/360046389314-Alerts-PRO-Training-Video-Introduction-and-Overview"
      }, {
        text: "Inside the Alerts Tab",
        link: "https://kb.helium10.com/hc/en-us/articles/8437162507035-Inside-the-Alerts-Tab"
      }, {
        text: "Alerts PRO Training Video: Managing Which Alerts You Get",
        link: "https://kb.helium10.com/hc/en-us/articles/360046389474-Alerts-PRO-Training-Video-Managing-Which-Alerts-You-Get"
      }, {
        text: "How Do I Activate Alerts for My Amazon Products?",
        link: "https://kb.helium10.com/hc/en-us/articles/360037349253-How-Do-I-Activate-Alerts-for-My-Amazon-Products-"
      }, {
        text: "Why Do I Get Late or Multiple Alerts for a Review?",
        link: "https://kb.helium10.com/hc/en-us/articles/360058360033-Why-Do-I-Get-Late-or-Multiple-Alerts-for-a-Review-"
      }],
      inventoryProtector: [{
        text: "Inventory Protecto PRO Training Video: Introduction and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/360036927814-How-Do-I-Protect-My-Discounted-Products-from-Arbitrage-Using-Inventory-Protector-"
      }, {
        text: "How Do I Protect My Discounted Products from Arbitrage Using Inventory Protector?",
        link: "https://kb.helium10.com/hc/en-us/articles/360047024773-Refund-Genie-PRO-Training-Video-Introduction-and-Overview"
      }],
      refundGenie: [{
        text: "Refund Genie PRO Training Video: Introduction and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/360047024773-Refund-Genie-PRO-Training-Video-Introduction-and-Overview"
      }, {
        text: "Refund Genie FAQ",
        link: "https://kb.helium10.com/hc/en-us/articles/4403830823835-Refund-Genie-FAQ"
      }, {
        text: "How Do I Navigate the Refund Genie Dashboard?",
        link: "https://kb.helium10.com/hc/en-us/articles/360037645153-How-Do-I-Navigate-the-Refund-Genie-Dashboard-"
      }],
      followUp: [{
        text: "Follow-Up PRO Training Video: Introduction and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/360047025633-Follow-Up-PRO-Training-Video-Introduction-and-Overview"
      }, {
        text: "How Do I Navigate the Follow-Up Dashboard?",
        link: "https://kb.helium10.com/hc/en-us/articles/360035092874-How-Do-I-Navigate-the-Follow-Up-Dashboard-"
      }, {
        text: "How Do I Use the Orders Page in Follow-Up?",
        link: "https://kb.helium10.com/hc/en-us/articles/1260807648589-How-Do-I-Use-the-Orders-Page-in-Follow-Up-"
      }, {
        text: "Follow-Up PRO Training Video: How to Customize Email Templates",
        link: "https://kb.helium10.com/hc/en-us/articles/360046390454-Follow-Up-PRO-Training-Video-How-to-Customize-Email-Templates"
      }, {
        text: "Why Doesn't My Short Name Show Up in My Follow-Up Template?",
        link: "https://kb.helium10.com/hc/en-us/articles/360036072694-Why-Doesn-t-My-Short-Name-Show-Up-in-My-Follow-Up-Template-"
      }],
      inventoryManagement: [{
        text: "Inventory Management PRO Training: An Introduction and Overview",
        link: "https://kb.helium10.com/hc/en-us/articles/360057872533-Inventory-Management-PRO-Training-An-Introduction-and-Overview"
      }, {
        text: "Why Are the Helium 10 Inventory Management Numbers Different Than My Seller Central Account Numbers?",
        link: "https://kb.helium10.com/hc/en-us/articles/360060568613-Why-Are-the-Helium-10-Inventory-Management-Numbers-Different-Than-My-Seller-Central-Account-Numbers-"
      }, {
        text: "How Do I Make Local Purchase Orders in Inventory Management?",
        link: "https://kb.helium10.com/hc/en-us/articles/360057884433-How-Do-I-Make-Local-Purchase-Orders-in-Inventory-Management-"
      }, {
        text: "How Do I Use the Local Inventory Tab in Inventory Management?",
        link: "https://kb.helium10.com/hc/en-us/articles/4407539250331-How-Do-I-Use-the-Local-Inventory-Tab-in-Inventory-Management-"
      }, {
        text: "Inventory Manager PRO Training: How Do I Set Up My Inventory Management From the Settings Tab?",
        link: "https://kb.helium10.com/hc/en-us/articles/360057872693-Inventory-Manager-PRO-Training-How-Do-I-Set-Up-My-Inventory-Management-From-the-Settings-Tab-"
      }]
    },
    chatAILink = (isDevHost() ? "" : membersLink) + "/api/v1/ai-chat-bot/ask-ai-chat-bot",
    sendChatAIMessage = async e => {
      var r;
      const t = await baseFetch({
        method: "POST",
        withCredentials: !0,
        params: e,
        url: getUrlWithSearchParams(chatAILink, {})
      });
      return {
        ...t,
        text: ((r = t.text) == null ? void 0 : r.replaceAll(/\n/g, "<br />")) ?? null,
        sessionExpired: t.sessionExpired ? t.sessionExpired * 1e3 : null
      }
    }, sendChatMessage = ({
                            text: e,
                            retry: t,
                            mode: r = "all"
                          }) => {
      if (typeof e != "string" || e) {
        const s = nanoid(10),
            {
              context: i,
              id: n
            } = useChatAIStore.getState().conversation,
            a = {
              context: i,
              conversationId: n,
              text: e,
              retry: t,
              isFakeRequest: !0
            };
        chatMessagesListController.add(s), dataConversationController.patch({
          [s]: {
            id: s,
            request: a,
            response: null,
            error: void 0
          }
        }), (r === "all" || r === "gpt") && useChatMessagesController.action([{
          key: s,
          params: a
        }])
      }
    }, dataConversationController = leitenRecord(useChatAIStore, "data"), chatConversationController = leitenRecord(useChatAIStore, "conversation"), chatSegmentsController = leitenRecord(useChatAIStore, "conversation.segments"), chatMessagesListController = leitenList(useChatAIStore, "conversation.messages", {
      compare: (e, t) => e === t
    }), fillChatConversationController = leitenRequest(useChatAIStore, "data", async ({
                                                                                        key: e
                                                                                      }) => {
      const t = await indexedChatAIDb.getAllValue(getChatConversationName(e));
      return t != null && t.length ? getMap(t) : {}
    }, {
      fulfilled: ({
                    result: e,
                    payload: {
                      params: t
                    }
                  }) => {
        Object.keys(e).length || sendChatMessage(t)
      },
      rejected: ({
                   error: e,
                   payload: t
                 }) => {
        console.log("rejected", e), prepareChatConversationTables(t.key).then(), chatConversationController.patch({
          messages: []
        }), sendChatMessage({
          text: null,
          retry: !1
        })
      },
      resolved: () => {
        useChatAIStore.setState({
          ready: !0
        })
      }
    }), getMap = e => e.reduce((t, r) => {
      const s = r.id;
      return t[s] = r, t
    }, {}), useChatMessagesController = leitenGroupRequest(useChatAIStore, "data", async ({
                                                                                            params: e,
                                                                                            key: t
                                                                                          }) => {
      if (!e.retry && e.text === null) {
        const r = {
          id: t,
          request: e,
          error: void 0,
          response: {
            chatGPT: null,
            search: null,
            commonAsked: chatAIGetCommonAsked(e.context)
          }
        };
        return indexedChatAIDb.putValue(getChatConversationName(e.conversationId), r).then(), r
      } else {
        const r = await sendChatAIMessage(e),
            s = useChatAIStore.getState().data[t].response,
            i = {
              id: t,
              request: e,
              error: void 0,
              response: {
                commonAsked: null,
                search: null,
                ...s,
                chatGPT: r
              }
            };
        return indexedChatAIDb.putValue(getChatConversationName(e.conversationId), i).then(), i
      }
    }, {
      rejected: ({
                   payload: {
                     params: e,
                     key: t
                   },
                   fetchError: r
                 }) => {
        const s = useChatAIStore.getState().data[t].response,
            i = {
              id: t,
              request: e,
              error: r == null ? void 0 : r.responseStatus,
              response: {
                ...s,
                search: null,
                chatGPT: null
              }
            };
        dataConversationController.patch({
          [t]: i
        }), useChatSearchController.action([{
          key: t,
          params: e
        }]), indexedChatAIDb.putValue(getChatConversationName(e.conversationId), i).then()
      }
    }), useChatSearchController = leitenGroupRequest(useChatAIStore, "data", async ({
                                                                                      params: e,
                                                                                      key: t
                                                                                    }) => {
      const r = useChatAIStore.getState().data[t],
          s = await ApiSearchBar.getAutocomplete({
            query: e.text || ""
          }),
          i = {
            ...r,
            response: {
              commonAsked: null,
              chatGPT: null,
              ...r == null ? void 0 : r.response,
              search: s.items.resources.map(n => ({
                link: n.url,
                text: n.title
              }))
            }
          };
      return indexedChatAIDb.putValue(getChatConversationName(e.conversationId), i).then(), i
    }), chatAIGetCommonAsked = e => commonAsked[e || "cerebro"], checkChatAISession = () => {
      const e = useChatAIStore.getState().conversation;
      e.id && e.messages[e.messages.length - 1] && indexedChatAIDb.createObjectStore([getChatConversationName(e.id)]).then(() => {
        indexedChatAIDb.getValue(getChatConversationName(e.id), e.messages[e.messages.length - 1]).then(t => {
          var r, s, i;
          t && ((s = (r = t.response) == null ? void 0 : r.chatGPT) != null && s.sessionExpired) && differenceInHours(new Date, new Date((i = t.response.chatGPT) == null ? void 0 : i.sessionExpired)) > 5 && chatConversationController.patch({
            id: "",
            messages: [],
            segments: {}
          })
        })
      })
    }, launchChatAI = e => {
      const t = useChatAIStore.getState().conversation.id,
          r = t || nanoid(10);
      fillChatConversationController.action({
        key: r,
        params: {
          text: null,
          context: e,
          conversationId: r,
          retry: !1
        }
      }), t || chatConversationController.patch({
        id: r
      }), useChatAIModal.open(e)
    }, startNewConversation = () => {
      chatConversationController.patch({
        id: "",
        messages: []
      }), launchChatAI(getChatContext())
    }, ChatAITitle = () => {
      const {
        t: e
      } = useTranslation();
      return jsxRuntimeExports.jsxs(Wrapper$C, {
        children: [jsxRuntimeExports.jsxs(Block$1, {
          children: [e("AIChat.title.text"), jsxRuntimeExports.jsxs(Chip$1, {
            type: "beta",
            children: [jsxRuntimeExports.jsx(Image$5, {
              src: sparkles
            }), e("AIChat.title.chip")]
          })]
        }), jsxRuntimeExports.jsx(Menu$1, {})]
      })
    }, Menu$1 = () => {
      const {
        t: e
      } = useTranslation(), t = r => {
        r.stopPropagation(), r.preventDefault()
      };
      return jsxRuntimeExports.jsx(Interceptor, {
        onMouseDown: t,
        onClick: t,
        onMouseMove: t,
        children: jsxRuntimeExports.jsx(Popover, {
          content: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [jsxRuntimeExports.jsxs(Popover.Item, {
              as: "a",
              href: contactSupportLink,
              target: "_blank",
              children: [jsxRuntimeExports.jsx(Icon$5, {
                icon: faBook
              }), jsxRuntimeExports.jsx(Block$1, {
                children: e("helpCenter.contactSupport.name")
              })]
            }), jsxRuntimeExports.jsxs(Popover.Item, {
              as: "a",
              href: supportLink,
              target: "_blank",
              children: [jsxRuntimeExports.jsx(Icon$5, {
                icon: faQuestionCircle
              }), jsxRuntimeExports.jsx(Block$1, {
                children: e("helpCenter.support.name")
              })]
            }), jsxRuntimeExports.jsxs(Popover.Item, {
              onClick: () => useShareModal.open(),
              children: [jsxRuntimeExports.jsx(Icon$5, {
                icon: faLightbulb
              }), jsxRuntimeExports.jsx(Block$1, {
                children: e("helpCenter.shareYourIdeas.name")
              })]
            }), jsxRuntimeExports.jsxs(Popover.Item, {
              as: "a",
              href: customerSuccessWebinarsLink,
              target: "_blank",
              children: [jsxRuntimeExports.jsx(Icon$5, {
                icon: faGraduationCap
              }), jsxRuntimeExports.jsx(Block$1, {
                children: e("helpCenter.customerSuccessWebinars.name")
              })]
            }), jsxRuntimeExports.jsx(Popover.Divider, {}), jsxRuntimeExports.jsxs(Popover.Item, {
              onClick: () => startNewConversation(),
              children: [jsxRuntimeExports.jsx(Icon$5, {
                icon: faTrashCan
              }), jsxRuntimeExports.jsx(Block$1, {
                children: e("AIChat.clear")
              })]
            })]
          }),
          children: jsxRuntimeExports.jsx(NewButton, {
            buttonType: "icon",
            icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
              icon: faEllipsisVertical
            })
          })
        })
      })
    }, Icon$5 = ut(FontAwesomeIcon)`
  width: ${({theme:e})=>e.spacing.sp20};
`, Wrapper$C = ut.div`
  ${cssDisplay100Bold};
  display: flex;
  flex-grow: 1;
  gap: ${({theme:e})=>e.spacing.sp4};
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`, Chip$1 = ut(StatusChip)`
  gap: ${({theme:e})=>e.spacing.sp4};
  margin-left: ${({theme:e})=>e.spacing.sp8};
`, Block$1 = ut.div``, Interceptor = ut.div``, Image$5 = ut.img`
  width: 1em;
  height: 1em;
`, ChatAIInputField = () => {
      const {
        t: e
      } = useTranslation(), t = useChatAIStore(o => o.conversation.messages.slice(-1)[0]), {
        sendSegmentEvent: r
      } = useSegmentEvent({}), s = useChatMessagesController(t, o => o.status), [i, n] = reactExports.useState(""), a = reactExports.useCallback(() => {
        sendChatMessage({
          retry: !1,
          text: i.trim()
        }), n(""), r({
          name: "AI chatbot input submitted"
        }).then()
      }, [i, r]), l = reactExports.useCallback(o => {
        o.key === "Enter" && !o.shiftKey && (o.preventDefault(), o.stopPropagation(), s !== "loading" && a())
      }, [a, s]);
      return jsxRuntimeExports.jsx(Wrapper$B, {
        children: jsxRuntimeExports.jsxs(Input$1, {
          children: [jsxRuntimeExports.jsx(NewTextArea, {
            onKeyDown: l,
            value: i,
            onChange: o => n(o.target.value),
            maxRows: 5,
            placeholder: e("AIChat.inputPlaceholder")
          }), jsxRuntimeExports.jsx(NewButton, {
            disabled: s === "loading",
            onClick: a,
            size: "200",
            children: jsxRuntimeExports.jsx(FontAwesomeIcon, {
              icon: faPaperPlane
            })
          })]
        })
      })
    }, Wrapper$B = ut.div`
  height: 64px;
  position: relative;
  flex: 0 0 auto;
  padding: ${({theme:e})=>e.spacing.sp16};
  padding-top: ${({theme:e})=>e.spacing.sp8};
`, Input$1 = ut.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  gap: ${({theme:e})=>e.spacing.sp8};
  padding-top: ${({theme:e})=>e.spacing.sp8};
  background-color: ${({theme:e})=>e.systemColors.white};
  padding: ${({theme:e})=>e.spacing.sp16};
  padding-top: ${({theme:e})=>e.spacing.sp8};

  ${NewButton} {
    width: 40px;
  }

  ${NewTextArea.Container} {
    flex-grow: 1;
  }

  textarea {
    min-height: 38px;
    padding-top: ${({theme:e})=>e.spacing.sp6};
    resize: none;
  }
`, ChatAIRequest = ({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            data: e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                          }) => jsxRuntimeExports.jsx(Wrapper$A, {
      children: jsxRuntimeExports.jsx(Text$6, {
        children: e.text
      })
    }), Wrapper$A = ut.div`
  display: flex;
  margin-left: ${({theme:e})=>e.spacing.sp16};
`, Text$6 = ut.div`
  ${cssBody200};
  background: ${({theme:e})=>e.systemColors.blue600};
  color: ${({theme:e})=>e.systemColors.white};
  border-radius: ${({theme:e})=>e.spacing.sp24};
  padding: ${({theme:e})=>e.spacing.sp8} ${({theme:e})=>e.spacing.sp16};
  margin-bottom: ${({theme:e})=>e.spacing.sp8};
  margin-left: auto;
  word-break: break-word;
  max-width: 100%;
`, ChatMessageResponse = ({
                                                                                                                                                                                                                                                                                                                                                                                                           children: e
                                                                                                                                                                                                                                                                                                                                                                                                         }) => jsxRuntimeExports.jsxs(Wrapper$z, {
      children: [jsxRuntimeExports.jsx(Icon$4, {
        icon: faBookSparkles
      }), jsxRuntimeExports.jsx(Text$5, {
        dangerouslySetInnerHTML: {
          __html: e || ""
        }
      })]
    }), Wrapper$z = ut.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing.sp8};
  width: fit-content;
  margin-top: ${({theme:e})=>e.spacing.sp8};
`, Text$5 = ut.div`
  ${cssBody200};
  background: ${({theme:e})=>e.systemColors.grey100};
  border-radius: ${({theme:e})=>e.spacing.sp24};
  padding: ${({theme:e})=>e.spacing.sp16};
  min-width: 332px;
`, Icon$4 = ut(FontAwesomeIcon)`
  border-radius: ${({theme:e})=>e.spacing.sp48};
  background: ${({theme:e})=>e.systemColors.blue100};
  padding: ${({theme:e})=>e.spacing.sp8};
  color: ${({theme:e})=>e.systemColors.blue600};
`, ChatShowMore = ({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       children: e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     }) => {
      const {
        t
      } = useTranslation(), [r, s] = reactExports.useState(!1);
      return jsxRuntimeExports.jsxs(Wrapper$y, {
        children: [jsxRuntimeExports.jsxs(NewButton, {
          $size: "50",
          $buttonType: "text",
          onClick: () => s(!r),
          children: [jsxRuntimeExports.jsx(Icon$3, {
            $isVisible: r,
            icon: faAngleDown
          }), t("AIChat.showMore")]
        }), jsxRuntimeExports.jsx(Container$7, {
          children: jsxRuntimeExports.jsx(Inner$1, {
            $isVisible: r,
            children: e
          })
        })]
      })
    }, Icon$3 = ut(FontAwesomeIcon)`
  transform: rotate(${({$isVisible:e})=>e?"180deg":0});
  transition: transform 0.5s;
  margin-right: ${({theme:e})=>e.spacing.sp4};
`, Wrapper$y = ut.div``, Container$7 = ut.div`
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`, Inner$1 = ut.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp8};
  transition: margin 0.2s ease-in-out;
  margin-top: ${({$isVisible:e})=>e?"0":"-100%"};
`, ChatAILink = ut.a`
  ${({isBold:e})=>e?cssBody200Bold:cssBody200};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp8};
  border-radius: ${({theme:e})=>e.spacing.sp24};
  padding: ${({theme:e})=>`
$ {
    e.spacing.sp8
}
$ {
    e.spacing.sp16
}
`};
  border: 1px solid ${({theme:e})=>e.systemColors.blue600};
  color: ${({theme:e})=>e.systemColors.blue600};
  text-decoration: none;
  width: fit-content;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: ${({theme:e})=>e.systemColors.blue800};
    color: ${({theme:e})=>e.systemColors.blue800};
  }
`, ChatAIMessageTitle = ut.div`
  display: flex;
  justify-content: space-between;
  ${cssBody100Bold};
  margin-top: ${({theme:e})=>e.spacing.sp4};
  margin-bottom: ${({theme:e})=>e.spacing.sp4};
  margin-right: ${({theme:e})=>e.spacing.sp4};
`, ChatAILinksList = ({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 links: e
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               }) => {
      const t = (e == null ? void 0 : e.slice(0, 2)) || [],
          r = (e == null ? void 0 : e.slice(2, e == null ? void 0 : e.length)) || [];
      return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsx(Links$3, {
          children: t == null ? void 0 : t.map(({
                                                  link: s,
                                                  text: i
                                                }) => jsxRuntimeExports.jsxs(ChatAILink, {
            href: s,
            target: "_blank",
            children: [jsxRuntimeExports.jsx(FontAwesomeIcon, {
              icon: faBook
            }), i, jsxRuntimeExports.jsx(FontAwesomeIcon, {
              icon: faAngleRight
            })]
          }, s))
        }), !!r.length && jsxRuntimeExports.jsx(ChatShowMore, {
          children: jsxRuntimeExports.jsx(Links$3, {
            children: r == null ? void 0 : r.map(({
                                                    link: s,
                                                    text: i
                                                  }) => jsxRuntimeExports.jsxs(ChatAILink, {
              href: s,
              target: "_blank",
              children: [jsxRuntimeExports.jsx(FontAwesomeIcon, {
                icon: faBook
              }), i, jsxRuntimeExports.jsx(FontAwesomeIcon, {
                icon: faAngleRight
              })]
            }, s))
          })
        })]
      })
    }, Links$3 = ut.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sp8};
  flex-wrap: wrap;
`, ChatAIResponseCommonAsked = ({
                                                                                              text: e,
                                                                                              links: t
                                                                                            }) => {
      const {
        t: r
      } = useTranslation(), {
        sendSegmentEvent: s
      } = useSegmentEvent({}), i = reactExports.useCallback(() => {
        useShareModal.open(), s({
          name: "AI chatbot submit idea clicked"
        })
      }, [s]);
      return jsxRuntimeExports.jsxs(Wrapper$x, {
        children: [jsxRuntimeExports.jsx(ChatMessageResponse, {
          children: e || r("AIChat.commonAskedMessage")
        }), jsxRuntimeExports.jsxs(LinksWrapper, {
          children: [jsxRuntimeExports.jsxs(Links$2, {
            children: [jsxRuntimeExports.jsxs(ChatAILink, {
              href: contactSupportLink,
              target: "_blank",
              onClick: () => s({
                name: "AI chatbot contact support clicked"
              }),
              children: [jsxRuntimeExports.jsx(Span$1, {
                dangerouslySetInnerHTML: {
                  __html: r("AIChat.contactSupport") || ""
                }
              }), jsxRuntimeExports.jsx(FontAwesomeIcon, {
                icon: faAngleRight
              })]
            }), jsxRuntimeExports.jsxs(ChatAILink, {
              onClick: i,
              children: [jsxRuntimeExports.jsx(Span$1, {
                dangerouslySetInnerHTML: {
                  __html: r("AIChat.haveIdea") || ""
                }
              }), jsxRuntimeExports.jsx(FontAwesomeIcon, {
                icon: faAngleRight
              })]
            })]
          }), t.length ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [jsxRuntimeExports.jsxs(ChatAIMessageTitle, {
              children: [r("AIChat.commonQuestions"), jsxRuntimeExports.jsx(SeeAll, {
                href: supportLink,
                target: "_blank",
                children: r("AIChat.seeAll")
              })]
            }), jsxRuntimeExports.jsx(ChatAILinksList, {
              links: t || []
            })]
          }) : null]
        })]
      })
    }, Wrapper$x = ut.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp8};
`, LinksWrapper = ut(Wrapper$x)`
  margin-left: 40px;
`, Links$2 = ut.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing.sp8};
  flex-wrap: wrap;
`, SeeAll = ut.a`
  ${cssBody100Bold};
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.systemColors.blue600};
  text-decoration: none;
  width: fit-content;
`, Span$1 = ut.span``, ChatAIError = ({
                                                                                                                                                                                                                                                                                 id: e
                                                                                                                                                                                                                                                                               }) => {
      const {
        t
      } = useTranslation(), {
        error: r,
        response: s
      } = useChatAIStore(o => o.data[e] || {}), i = useChatAIStore(o => chatAIGetCommonAsked(o.conversation.context)), n = useChatSearchController(e, o => o.status), a = (s == null ? void 0 : s.search) || [], l = n === "error" ? i : a;
      return isNaN(r) ? null : jsxRuntimeExports.jsx(Wrapper$w, {
        children: r === 429 ? jsxRuntimeExports.jsx(ChatMessageResponse, {
          children: t("AIChat.errorStatuses.429")
        }) : jsxRuntimeExports.jsx(ChatAIResponseCommonAsked, {
          links: l,
          text: t("AIChat.errorStatuses.500")
        })
      })
    }, Wrapper$w = ut.div`
  margin-bottom: ${({theme:e})=>e.spacing.sp16};
  margin-right: ${({theme:e})=>e.spacing.sp16};
`, ChatAIResponseHelpful = ({
                                                                                                                                                     id: e
                                                                                                                                                   }) => {
      const {
        t
      } = useTranslation(), {
        sendSegmentEvent: r
      } = useSegmentEvent({}), {
        voted: s,
        message: i,
        isRetryAvailable: n
      } = useChatAIStore(o => {
        var p, g, S, u;
        return {
          voted: o.conversation.segments[e],
          message: (p = o.data[e]) == null ? void 0 : p.request.text,
          isRetryAvailable: (u = (S = (g = o.data[e]) == null ? void 0 : g.response) == null ? void 0 : S.chatGPT) == null ? void 0 : u.isRetryAvailable
        }
      }, shallow$1), a = reactExports.useCallback(o => {
        r({
          name: o === "like" ? "AI chatbot helpful answer clicked" : "AI chatbot unhelpful answer clicked",
          properties: {
            vote: o
          }
        }).then(), chatSegmentsController.patch({
          [e]: o === "like"
        })
      }, [e, r]), l = reactExports.useCallback(() => {
        sendChatMessage({
          text: i,
          retry: !0
        }), r({
          name: "AI chatbot retry button clicked"
        }).then()
      }, [i, r]);
      return jsxRuntimeExports.jsxs(Helpful, {
        children: [jsxRuntimeExports.jsx(Text$4, {
          children: t("AIChat.helpful.question")
        }), jsxRuntimeExports.jsx(VotePositive, {
          buttonType: "tertiary",
          icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
            icon: faThumbsUp
          }),
          onClick: () => a("like"),
          disabled: s !== void 0,
          $active: s === !0,
          children: t("AIChat.helpful.yes")
        }), jsxRuntimeExports.jsx(VoteNegative, {
          buttonType: "tertiary",
          icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
            icon: faThumbsDown
          }),
          onClick: () => a("dislike"),
          disabled: s !== void 0,
          $active: s === !1,
          children: t("AIChat.helpful.no")
        }), n && jsxRuntimeExports.jsx(NewButton, {
          $buttonType: "tertiary",
          onClick: () => l(),
          icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
            icon: faSync
          }),
          children: t("AIChat.helpful.retry")
        })]
      })
    }, VotePositive = ut(NewButton)`
  &:disabled {
    ${({theme:e,$active:t})=>t&&`
color: $ {
    e.systemColors.green600
};
background - color: $ {
    e.systemColors.green100
};
border - color: $ {
    e.systemColors.green100
};
`};
  }
`, VoteNegative = ut(NewButton)`
  &:disabled {
    ${({theme:e,$active:t})=>t&&`
color: $ {
    e.systemColors.red400
};
background - color: $ {
    e.systemColors.red100
};
border - color: $ {
    e.systemColors.red100
};
`};
  }
`, Helpful = ut.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp8};
`, Text$4 = ut.div`
  ${cssBody100};
  margin-right: ${({theme:e})=>e.spacing.sp8};
`, ChatAIResponseChatGPT = ({
                                                                                                                                                                                                                                                                                                               id: e,
                                                                                                                                                                                                                                                                                                               last: t
                                                                                                                                                                                                                                                                                                             }) => {
      const r = useChatAIStore(({
                                  data: s
                                }) => {
        var i, n;
        return (n = (i = s[e]) == null ? void 0 : i.response) == null ? void 0 : n.chatGPT
      });
      return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [(r == null ? void 0 : r.text) && jsxRuntimeExports.jsx(ChatMessageResponse, {
          children: r.text
        }), t && (r == null ? void 0 : r.text) && !r.text.startsWith(empty) && jsxRuntimeExports.jsx(ChatAIResponseHelpful, {
          id: e
        })]
      })
    }, empty = "I'm sorry but I don't currently have information about the subject", ChatAIResponseSearch = ({
                                                                                                               id: e
                                                                                                             }) => {
      const [t, r] = useChatAIStore(({
                                       data: s
                                     }) => {
        var i, n, a, l, o, p;
        return [((a = (n = (i = s[e]) == null ? void 0 : i.response) == null ? void 0 : n.chatGPT) == null ? void 0 : a.links) || [], ((p = (o = (l = s[e]) == null ? void 0 : l.response) == null ? void 0 : o.chatGPT) == null ? void 0 : p.resources) || []]
      });
      return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [!!t.length && jsxRuntimeExports.jsx(Tools$1, {
          id: e
        }), !!r.length && jsxRuntimeExports.jsx(Resources, {
          id: e
        })]
      })
    }, Resources = ({
                      id: e
                    }) => {
      const {
        t
      } = useTranslation(), {
        sendSegmentEvent: r
      } = useSegmentEvent({}), s = useChatAIStore(({
                                                     data: l
                                                   }) => {
        var o, p, g;
        return ((g = (p = (o = l[e]) == null ? void 0 : o.response) == null ? void 0 : p.chatGPT) == null ? void 0 : g.resources) || []
      }), [i, n] = reactExports.useMemo(() => [(s == null ? void 0 : s.slice(0, 2)) || [], (s == null ? void 0 : s.slice(2, s == null ? void 0 : s.length)) || []], [s]), a = reactExports.useCallback(() => {
        r({
          name: "AI chatbot help article clicked"
        }).then()
      }, [r]);
      return jsxRuntimeExports.jsxs(Wrapper$v, {
        children: [jsxRuntimeExports.jsx(ChatAIMessageTitle, {
          children: t("AIChat.helpCenter")
        }), jsxRuntimeExports.jsx(Links$1, {
          children: i == null ? void 0 : i.map(({
                                                  link: l,
                                                  text: o
                                                }) => jsxRuntimeExports.jsxs(ChatAILink, {
            href: l,
            target: "_blank",
            onClick: a,
            children: [jsxRuntimeExports.jsx(FontAwesomeIcon, {
              icon: faBook
            }), o, jsxRuntimeExports.jsx(FontAwesomeIcon, {
              icon: faAngleRight
            })]
          }, o))
        }), !!n.length && jsxRuntimeExports.jsx(ChatShowMore, {
          children: jsxRuntimeExports.jsx(Links$1, {
            children: n == null ? void 0 : n.map(({
                                                    link: l,
                                                    text: o
                                                  }) => jsxRuntimeExports.jsxs(ChatAILink, {
              href: l,
              target: "_blank",
              onClick: a,
              children: [jsxRuntimeExports.jsx(FontAwesomeIcon, {
                icon: faBook
              }), o, jsxRuntimeExports.jsx(FontAwesomeIcon, {
                icon: faAngleRight
              })]
            }, o))
          })
        })]
      })
    }, Tools$1 = ({
                    id: e
                  }) => {
      const {
        t
      } = useTranslation(), {
        sendSegmentEvent: r
      } = useSegmentEvent({}), s = useChatAIStore(({
                                                     data: l
                                                   }) => {
        var o, p, g;
        return ((g = (p = (o = l[e]) == null ? void 0 : o.response) == null ? void 0 : p.chatGPT) == null ? void 0 : g.links) || []
      }), [i, n] = reactExports.useMemo(() => [(s == null ? void 0 : s.slice(0, 3)) || [], (s == null ? void 0 : s.slice(3, s == null ? void 0 : s.length)) || []], [s]), a = reactExports.useCallback(() => {
        r({
          name: "AI chatbot tool link clicked"
        }).then()
      }, [r]);
      return jsxRuntimeExports.jsxs(Wrapper$v, {
        children: [jsxRuntimeExports.jsx(ChatAIMessageTitle, {
          children: t("AIChat.tools")
        }), jsxRuntimeExports.jsx(Links$1, {
          children: i == null ? void 0 : i.map(({
                                                  link: l,
                                                  text: o
                                                }) => jsxRuntimeExports.jsxs(ChatAILink, {
            href: l,
            target: "_blank",
            onClick: a,
            children: [jsxRuntimeExports.jsx(FontAwesomeIcon, {
              icon: faBook
            }), o, jsxRuntimeExports.jsx(FontAwesomeIcon, {
              icon: faAngleRight
            })]
          }, o))
        }), !!n.length && jsxRuntimeExports.jsx(ChatShowMore, {
          children: jsxRuntimeExports.jsx(Links$1, {
            children: n == null ? void 0 : n.map(({
                                                    link: l,
                                                    text: o
                                                  }) => jsxRuntimeExports.jsxs(ChatAILink, {
              href: l,
              target: "_blank",
              onClick: a,
              children: [jsxRuntimeExports.jsx(FontAwesomeIcon, {
                icon: faBook
              }), o, jsxRuntimeExports.jsx(FontAwesomeIcon, {
                icon: faAngleRight
              })]
            }, o))
          })
        })]
      })
    }, Wrapper$v = ut.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing.sp4};
  margin-left: 40px;
`, Links$1 = ut.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme:e})=>e.spacing.sp8};
`, ChatAIResponse = ({
                                                                                                                                             last: e,
                                                                                                                                             id: t
                                                                                                                                           }) => {
      var i, n, a, l, o, p;
      const r = useChatAIStore(g => g.data[t]),
          s = useChatAIStore(({
                                data: g
                              }) => {
            var S, u;
            return ((u = (S = g[t]) == null ? void 0 : S.response) == null ? void 0 : u.commonAsked) || []
          });
      return jsxRuntimeExports.jsxs(Wrapper$u, {
        children: [((i = r.response) == null ? void 0 : i.commonAsked) && jsxRuntimeExports.jsx(ChatAIResponseCommonAsked, {
          links: s
        }), ((n = r.response) == null ? void 0 : n.chatGPT) && jsxRuntimeExports.jsx(ChatAIResponseChatGPT, {
          id: t,
          last: e
        }), (((l = (a = r.response) == null ? void 0 : a.chatGPT) == null ? void 0 : l.resources) || ((p = (o = r.response) == null ? void 0 : o.chatGPT) == null ? void 0 : p.links)) && jsxRuntimeExports.jsx(ChatAIResponseSearch, {
          id: t
        })]
      })
    }, Wrapper$u = ut.div`
  gap: ${({theme:e})=>e.spacing.sp16};
  display: flex;
  flex-direction: column;

  &:has(div) {
    margin-bottom: ${({theme:e})=>e.spacing.sp16};
    margin-right: ${({theme:e})=>e.spacing.sp16};
  }
`, ChatAIMessage = reactExports.memo(({
                                                                                                                                                                                                        id: e,
                                                                                                                                                                                                        last: t,
                                                                                                                                                                                                        setScroll: r
                                                                                                                                                                                                      }) => {
      const s = useChatAIStore(i => i.data[e] || null);
      return t && r(), jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [(s == null ? void 0 : s.request.text) && !(s != null && s.request.retry) && jsxRuntimeExports.jsx(ChatAIRequest, {
          data: s == null ? void 0 : s.request
        }), !!(s != null && s.response) && jsxRuntimeExports.jsx(ChatAIResponse, {
          id: e,
          last: t
        }), jsxRuntimeExports.jsx(ChatAIError, {
          id: e
        }), t && jsxRuntimeExports.jsx(Loading, {
          id: e
        })]
      })
    }), Loading = ({
                     id: e
                   }) => useChatMessagesController(e, r => r.status) === "loading" ? jsxRuntimeExports.jsxs(Waiting, {
      children: [jsxRuntimeExports.jsx(Icon$2, {
        icon: faBookSparkles
      }), jsxRuntimeExports.jsxs(Dots, {
        children: [jsxRuntimeExports.jsx(Dot, {}), jsxRuntimeExports.jsx(Dot, {}), jsxRuntimeExports.jsx(Dot, {})]
      })]
    }) : null, Waiting = ut.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing.sp8};
  width: 100%;
`, Icon$2 = ut(FontAwesomeIcon)`
  border-radius: ${({theme:e})=>e.spacing.sp48};
  background: ${({theme:e})=>e.systemColors.blue100};
  padding: ${({theme:e})=>e.spacing.sp8};
  color: ${({theme:e})=>e.systemColors.blue600};
`, second = ht`
  40% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
`, third = ht`
  20% {
    opacity: 0;
  }

  80% {
    opacity: 1;
  }
`, Dots = ut.div`
  display: flex;
  background: ${({theme:e})=>e.systemColors.grey100};
  border-radius: ${({theme:e})=>e.spacing.sp24};
  padding: ${({theme:e})=>e.spacing.sp16};
`, Dot = ut.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${({theme:e})=>e.systemColors.grey600};
  transition: opacity 0.2s ease;
  margin: 0 2px;

  &:nth-child(2) {
    animation: ${second} 1.5s infinite steps(1, end);
  }

  &:nth-child(3) {
    animation: ${third} 1.5s infinite steps(1, end);
  }
`, ChatAIMessageList = () => {
      const e = reactExports.useRef(null),
          [t, r] = reactExports.useState(!1),
          [s, i] = reactExports.useState(!1);
      reactExports.useEffect(() => {
        var o;
        (o = e.current) == null || o.scrollTo({
          top: e.current.scrollHeight
        })
      }, []);
      const n = reactExports.useCallback(() => {
            if (e.current) {
              const o = e.current.scrollHeight - (e.current.scrollTop + e.current.clientHeight) < 10,
                  p = e.current.scrollHeight - (e.current.scrollTop + e.current.clientHeight) > 400;
              r(o), i(p)
            }
          }, []),
          a = useEvent(() => {
            t && setTimeout(() => {
              var o;
              (o = e.current) == null || o.scrollTo({
                top: e.current.scrollTop + e.current.clientHeight / 2,
                behavior: "smooth"
              })
            }, 0)
          }),
          l = reactExports.useCallback(() => {
            var o, p;
            e.current && (e.current.scrollHeight - e.current.scrollTop - e.current.clientHeight > 300 && ((o = e.current) == null || o.scrollTo({
              top: e.current.scrollHeight - e.current.clientHeight - 300
            })), (p = e.current) == null || p.scrollTo({
              top: e.current.scrollHeight,
              behavior: "smooth"
            }))
          }, []);
      return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsx(Wrapper$t, {
          ref: e,
          className: "non-scroll-styles",
          onScroll: n,
          children: jsxRuntimeExports.jsx(List$3, {
            setScroll: a
          })
        }), jsxRuntimeExports.jsx(ScrollToBottom, {
          onClick: l,
          $isScrollBottom: s,
          children: jsxRuntimeExports.jsx(FontAwesomeIcon, {
            icon: faAngleDown
          })
        })]
      })
    }, List$3 = reactExports.memo(({
                                     setScroll: e
                                   }) => {
      const t = useChatAIStore(r => r.conversation.messages);
      return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
        children: t.map((r, s) => jsxRuntimeExports.jsx(ChatAIMessage, {
          id: r,
          last: s === t.length - 1,
          setScroll: e
        }, r))
      })
    }), Wrapper$t = ut.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  padding: ${({theme:e})=>`
0 $ {
    e.spacing.sp16
}
`};
`, ScrollToBottom = ut.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  ${boxShadow100};
  position: absolute;
  left: 16px;
  bottom: ${({$isScrollBottom:e})=>e?"12px":"-40px"};
  cursor: pointer;
  background-color: ${({theme:e})=>e.systemColors.white};
  transition: bottom 0.2s ease-in-out;
`, ChatAIModal = () => {
      const [e] = useChatAIModal(), {
        sendSegmentEvent: t
      } = useSegmentEvent({}), r = reactExports.useCallback(() => {
        useChatAIModal.close(), t({
          name: "AI chatbot close"
        }).then()
      }, [t]);
      return jsxRuntimeExports.jsx(FloatingWindow, {
        name: "chatAI",
        isOpen: e,
        onClose: r,
        size,
        title: jsxRuntimeExports.jsx(ChatAITitle, {}),
        children: jsxRuntimeExports.jsx(Content$4, {})
      })
    }, size = {
      initialWidth: 432,
      initialHeight: 600,
      minWidth: 432,
      minHeight: 432,
      maxWidth: 700,
      maxHeight: 1e3
    }, Content$4 = () => {
      const e = useChatAIStore(t => t.ready);
      return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsx(Messages, {
          children: jsxRuntimeExports.jsx(StatusSwitcher, {
            status: e ? "loaded" : "loading",
            children: jsxRuntimeExports.jsx(ChatAIMessageList, {})
          })
        }), jsxRuntimeExports.jsx(ChatAIInputField, {})]
      })
    }, Messages = ut.div`
  flex-grow: 1;
  position: relative;
`, AppleStoreImage = "https://re-cdn.helium10.com/container/static/apple-store-badge-KFBrykzw.svg", DownloadAppQRImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAYAAAA850oKAAAJeElEQVR4Ae3d245bRxJEUf3/T2vQ9rwYXjR2I0qHtFwC/LI7IyIrK3nYN0s/ft4/dwIvJvDjBb/4TuDnXY67BC8ncJfj5WjuB+5y3B14OQEux48fP35+yn8vOw8f0BmC7I8SaSt7IqP2UuvU810OTeXnz+nF8cLyb7he3BN1f2vuawaE98lxl+Muh14af7Ll1fra9a8fWTJOa//a2f9nQHifHPfJ8Z0nh5boNNOroWYs2iVjyV20tWfV1dz8OYdCTrPatHIXrfzElCEmrdiilV9lNfcuR53oN76CqZb1kqpfrau5dznqRO9y/DmpulnfmGsqXXIXbWruLsf3lkMXUpkuRNql7rRWfgtbziutmPrLdZN4+JL3dK78xOpgpD3Nai+qq0w9S8s6Qlx6rVOwWPVb6k5r5bewZS7Siqm/XDeJsUQKFjudKz+x2ou0p1ntRXWVqWdpWUeIS691Charfkvdaa38FrbMRVox9ZfrJjGWSMFiS+6na0+fV36VLbOavs9RG1Td0vSna0+fV36VLbO6y/Hi+xcaqtgjl/SmJ/Rdjrscf/wEmotPiE2tdU+8kmovqhNTz6oTk1asamudMsSqH+sI73K87fc56n1oEcSqH+sI73Lc5fh6u73Lsf0ycX21/hvnfJfjxSekuvTKtAhi8qt10opVP9YR3reV+7ayvq1osRZWN79myK8yZSza6qe600znUMb0tiLDhdWma4b8KlPGoq1+qjvNdA5l3OXAW+jX8PRHQxWTVmzRyq+ymsspVHFtptadzpVfZep50VY/1Z1mOocy7nLcJ8f+7XNt2xOMG40L/V3qnpipMjg/Qgxfhk+w2t/vUvfETJXB+RHe5dBY+L0PFebhf/qc6+F04CdY7e93qXtipsrg/Ag/faPRXz3Hp9fp4p5gnIvgpzMNq/ZctaoTU26tk/aTGL+U/aQG1csy/KpVndjp/uT3LnaX4xd8N7Qu0bsuvebe5bjL8XJX7nLc5fjecuixWJmSqnapU25lNVd+VVvrlFGZMqpWdXxyKKQyhuBLz+pX65Rb2ZJRtbWu9qw6Zaiusrsc3/g1QQ1VF7IwZVSm3KpV3V2Ouxzaiz/YXY67HL9mOeSqR5uYtGLSVrb4SbuwpeclV1r1wjrC+Ankae3ilw88nE39Vab+xKrfUldzp7cVNahgMWnFpK1s8ZN2YUvPS6606oV1hMOrS8FiyhWTtrLFT9qFLT0vudKqF9YR3uXQWCamCxGbQqK45ua3lZg7ldWma4j8KqsZtU650ta6qpWfGP0I8eRQ3WlWm6658qusZtQ65Upb66pWfmL0I7zLobFMLF/IMHtlVKbD3bcVXMbXQE//0SUpo9ZVrfzE6EeIganuNKtN11z5VVYzap1ypa11VSs/MfoJLiwHH15A5YrpbKqrTH5ii5+0yhCbtDJcWG2m1tVe5CcmP9VVJj+xxU9aZYhNWhkurDZT62ov8hOTn+oqk5/Y4ietMsQmrQwXVpupdbUX+YnJT3WVyU9s8ZNWGWKTVoYLq83UutqL/MTkp7rK5Ce2+EmrDLFJK8PKlmBlyE9MWjFpF/aujJpb6zQDagUrqyGL35Ih7cJ0jsVPWmWIVa3qxJghWFkNWfyWDGkXpnMsftIqQ6xqVSfGDMHKasjit2RIuzCdY/GTVhliVas6MWYIVlZDFr8lQ9qF6RyLn7TKEKta1YkxQ1AsG8bvfD7hpwyx5bxVq1wx+Yk9oc0/YarNfFKdehF7YvjKFVMvYk9o73K8+Ans6eHLT0yLIPaE9i7HXY7v/VWTy6bWjX6iThliy3mrVrli8hN7QssnxxKsg4gpQ6xqT9epF7GaK21lyhCrfqqjH2H8ikPaytSgmPyeqFOGWO1P2sqUIVb9VEc/wrsc/DtH81AxP2kr0x2JVT/V0Y8Qh1PdwtSgmDKeqFOGWO1P2sqUIVb9VEc/wrsc98nx6l9qqgujDaxMGZUpo2pr3ZKxaNXf4jdp1YyYQhamjMqUW7W1bslYtOpv8Zu0akZMIQtTRmXKrdpat2QsWvW3+E1aNSOmkIUpozLlVm2tWzIWrfpb/CatmhFTyMKUUZlyq7bWLRmLVv0tfpN2aUbBlS250oqpF9WJVa3q3sV0joVN3z5fhqCm5ae6yha/qlXdu1idS627y/FiUrpglaruXUz9Lewux4vp6YJVqrp3MfW3sLscL6anC1ap6t7F1N/CuByL4RNaDV+5S90TWvUspl7Ejmtl+OlsGYzOJj+x01r5iakXseNaGX46Wwajs8lP7LRWfmLqRey4VoafzpbB6GzyEzutlZ+YehE7rpXhp7NlMDqb/MROa+Unpl7EjmsXQzV4mi39Sbuw5WzKlV+te0S7NKMGT7OlP2kXtpxNufKrdY9ol2bU4Gm29CftwpazKVd+te4R7dKMGjzNlv6kXdhyNuXKr9Y9ol2aUYOn2dKftAtbzqZc+dW6R7S1GdWdZo8cGL88rdzKNANpVVeZ/MTkpzoxagkxQNWdZrlp9HdaKz8xzaDWSSsmP7Hj2mqoutPskQPHxVIvYppBrZNWTH5ix7XVUHWn2SMHvsvB/ydHd8mfytZLkuHCaq7qxNSL6hZWM1RXWe1PfpO2Gta6qRm8qt+Vq3OoFzFpn2DqZWHTk2M5sJqWX62TVmzxk1ZMuU8w9bKwuxzjv0it4T+xCMpQLwu7y3GX4+X+3OW4y/F7LYdOszxmF616WZh6WdjUi8RqptZJK1b9VCdWM05r5bcwnWNhUy8Sq5laJ61Y9VOdWM04rZXfwnSOhU29SKxmap20YtVPdWI147RWfgvTORY29SKxmql10opVP9WJ1YzTWvktTOdY2NSLxGqm1kkrVv1qnTLEFj9pn2D1HLWX6ne/lP0FX8rWS6p19TJP+93luMvxvb/7vG6q6irTlktb66QVW/ykfYLVc9Reqt99ctwnx695ctRNrXV5o+OP9pfcpZdFq57lJ1a1qhObnhwyXNgTB1Z/yhV7QvuuDOYSHn5lKkNsuRD5VaZcMfmpTqxqa93pDOYS3uXov2eJWZ2+OPmJnb7L+7YyfkKqSxJbLk5+YksGtYTx1aAGT7Olv0Wrcyx+p7XyE9M5xKglvMvxtreVenG6NzH5iVFLeJfjLsfX2+1djh9chPzqii+kZc7SVqZziMnvLke83K+B6o8GLXZaKz8x9SJGreBldwJfE/DL4c7mTuAux92Bf5rAfXL803T+4x+7y/EfX4B/Ov7/AAkrUB9zvTFWAAAAAElFTkSuQmCC", GooglePlayImage = "https://re-cdn.helium10.com/container/static/google-play-badge-d7nNtRAz.svg", ModalMobileApp = ({
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             onClose: e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ...t
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           }) => {
      const {
        t: r
      } = useTranslation();
      return jsxRuntimeExports.jsx(DialogModal, {
        title: r("downloadMobileAppModal.title"),
        size: "100",
        footer: jsxRuntimeExports.jsx(ModalFooter, {
          children: jsxRuntimeExports.jsx(NewButton, {
            size: "200",
            buttonType: "secondary",
            onClick: e,
            children: r("downloadMobileAppModal.buttonDismiss")
          })
        }),
        lockBody: !0,
        hasOverlay: !0,
        zIndex: 970,
        position: "center",
        animation: "fade",
        onClickOutside: e,
        onClickEscape: e,
        isOpen: t.isOpen,
        onClose: e,
        ...t,
        children: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [jsxRuntimeExports.jsx(Description$4, {
            children: r("downloadMobileAppModal.description")
          }), jsxRuntimeExports.jsx(Note, {
            children: r("downloadMobileAppModal.note")
          }), jsxRuntimeExports.jsxs(Footer$2, {
            children: [jsxRuntimeExports.jsx(QR, {
              children: jsxRuntimeExports.jsx(QRImage, {
                src: DownloadAppQRImage
              })
            }), jsxRuntimeExports.jsx(ScanQRText, {
              children: r("downloadMobileAppModal.scanInstruction")
            }), jsxRuntimeExports.jsxs(Logos$1, {
              children: [jsxRuntimeExports.jsx(AppStore, {
                src: AppleStoreImage
              }), jsxRuntimeExports.jsx(GooglePlay, {
                src: GooglePlayImage
              })]
            })]
          })]
        })
      })
    }, Description$4 = ut.div`
  ${cssBody200};
`, Note = ut(Description$4)`
  margin-top: ${({theme:e})=>e.spacing.sp20};
`, Footer$2 = ut.div`
  display: grid;
  grid-template-areas:
    "qr descr"
    "qr logos";
  gap: ${({theme:e})=>e.spacing.sp24} ${({theme:e})=>e.spacing.sp32};
  margin-top: ${({theme:e})=>e.spacing.sp32};

  ${media.mobileBefore} {
    grid-template-areas:
      "qr"
      "descr"
      "logos";
  }
`, QR = ut.div`
  grid-area: qr;

  ${media.mobileBefore} {
    display: flex;
    justify-content: center;
  }
`, QRImage = ut.img`
  max-width: 100%;
  width: 120px;
`, ScanQRText = ut.div`
  ${cssBody400};
  grid-area: descr;
`, Logos$1 = ut.div`
  grid-area: logos;
  display: flex;
  gap: ${({theme:e})=>e.spacing.sp8};
`, AppStore = ut.img`
  height: 40px;
`, GooglePlay = ut.img`
  height: 40px;
`, ModalFooter = ut.div`
  display: flex;
  justify-content: flex-end;
`, transform = e => {
      var t, r;
      return {
        ...e == null ? void 0 : e.results,
        userName: (t = e == null ? void 0 : e.results) == null ? void 0 : t.full_name.split(" ")[0],
        mfaEnablingPrompts: (r = e == null ? void 0 : e.results) == null ? void 0 : r.mfaEnablingPrompts
      }
    };
var ApiShareIdeas;
(function(e) {
  const t = membersLink + "/api/v1/customers/share-ideas";
  e.send = r => csrfFetch({
    method: "POST",
    url: t,
    params: r,
    withCredentials: !0
  })
})(ApiShareIdeas || (ApiShareIdeas = {}));
const modalContainer = document.getElementById(isolateStyleID) || document.body,
    useCallbacksStore = create(() => ({
      callbacks: {
        onAccountChange: e => {
          var t;
          window.location.assign(getUrlWithSearchParams((t = isDevHost) != null && t() ? window.location.origin : membersLink, {
            accountId: e
          }, {
            hasAccountId: !1
          }))
        }
      }
    })),
    setCallbacks = e => {
      useCallbacksStore.setState(t => ({
        callbacks: {
          ...t.callbacks,
          ...e
        }
      }))
    },
    useAccountStore = create(() => ({
      number: -1
    })),
    useSetAccountIdController = leitenPrimitive(useAccountStore, "number"),
    accountIdSelector = e => e.number;
var ApiExtendedMenu;
(function(e) {
  const t = customersLink + "/extended-menu";
  e.get = async r => csrfFetch({
    url: t,
    accountId: String(r),
    withCredentials: !0
  })
})(ApiExtendedMenu || (ApiExtendedMenu = {}));
var ApiFavorite;
(function(e) {
  const t = domain + "/api/v1/customers/tool-favorite";
  e.add = r => csrfFetch({
    method: "POST",
    url: t,
    params: r
  }), e.remove = r => csrfFetch({
    method: "DELETE",
    url: t,
    params: r,
    withCredentials: !0
  })
})(ApiFavorite || (ApiFavorite = {}));
const prepareUrl = e => {
      const t = new URL(e);
      return t.hostname === window.location.hostname ? t.pathname : t.origin + t.pathname
    },
    prepareUrlOptions = e => e ? {
      link: prepareUrl(e.url),
      target: e.target
    } : null,
    keyMap = {
      isBeta: "BETA",
      isNew: "NEW",
      isComingSoon: "COMING SOON",
      isBetaForWalmart: "NEW WALMART BETA"
    },
    keyTagsToArray = e => Object.keys(e).filter(t => e[t]).map(t => keyMap[t]),
    prepareMenuItems = e => e.map(t => ({
      ...{
        ...t.id === "freedom-ticket" && {
          onClick: () => sendSegmentEvent({
            name: SEGMENT_EVENT_FREEDOM_TICKET_CLICKED,
            properties: {
              title: t.name,
              source: "menu-dropdown"
            }
          })
        },
        ...t.id === "business-valuation" && {
          onClick: () => localStorage.setItem(localStorageBVSource, "menu")
        },
        ...t.id === "smb-refund-service" && {
          onClick: () => sendSegmentEvent({
            name: "MRS Onboarding Tools Menu Button Clicked"
          })
        }
      },
      id: t.id,
      isNew: t.isNew,
      isSunset: !!(t != null && t.isSunset),
      name: t.name,
      icon: t.icon.id,
      description: t.description,
      badgeValue: t.badgeValue,
      tags: [...t.tags || [], ...keyTagsToArray({
        isBeta: t.isBeta,
        isNew: t.isNew,
        isComingSoon: t.isComingSoon,
        isBetaForWalmart: t.isBetaForWalmart
      })],
      tools: prepareMenuItems(t.tools),
      ...prepareUrlOptions(t.urlOptions)
    })),
    prepareTopbarItems = e => e.map(t => ({
      ...{
        ...t.id === "freedom-ticket" ? {
          onClick: () => sendSegmentEvent({
            name: SEGMENT_EVENT_FREEDOM_TICKET_CLICKED,
            properties: {
              title: t.name,
              source: "menu"
            }
          })
        } : {},
        ...t.id === "smb-refund-service" && {
          onClick: () => sendSegmentEvent({
            name: "MRS Onboarding Nav Button Clicked"
          })
        }
      },
      name: t.name,
      isNew: t.isNew,
      url: prepareUrl(t.url),
      title: t.title,
      target: t.target,
      id: t.id
    })),
    prepareAccountItems = e => e.map(t => ({
      ...t,
      url: prepareUrl(t.url)
    })),
    htmlDecode = (e = "") => {
      const t = document.createElement("div");
      return t.innerHTML = e, t.childNodes[0].nodeValue || ""
    };
var ApiSegmentMenu;
(function(e) {
  e.send = (t, r) => {
    const s = domain + "/api/v1/customers/segment-track";
    csrfFetch({
      method: "POST",
      url: s,
      params: t,
      withCredentials: !0
    }).then(() => r == null ? void 0 : r())
  }
})(ApiSegmentMenu || (ApiSegmentMenu = {}));
const initialState$1 = {
  open: !1,
  megaMenuOpen: !1,
  mobileOpenGroup: [],
  message: {
    text: "",
    type: "success",
    open: !1
  },
  additional: {
    title: "",
    items: []
  }
};
let timer = null;
const useMenuStore = create(() => initialState$1),
    useOpenMegaMenuController = leitenPrimitive(useMenuStore, "megaMenuOpen"),
    useAdditionalController = leitenRecord(useMenuStore, "additional"),
    useMobileOpenGroupController = leitenList(useMenuStore, "mobileOpenGroup"),
    useMessageController = leitenRecord(useMenuStore, "message"),
    toggleMegaMenuOpen = () => {
      useMenuStore.setState(e => ({
        ...e,
        megaMenuOpen: !e.megaMenuOpen
      }))
    },
    setMobileOpenGroup = e => {
      const t = useMobileOpenGroupController.get();
      useMobileOpenGroupController.set(t.indexOf(e) !== -1 ? t.filter(r => r !== e) : [...t, e])
    },
    showMessage = e => {
      useMessageController.set({
        ...e,
        open: !0
      }), timer && clearTimeout(timer), timer = setTimeout(() => {
        useMessageController.get().open && hideMessageAction()
      }, 5e3)
    },
    hideMessageAction = () => {
      const e = useMessageController.get();
      useMessageController.set({
        ...e,
        open: !1
      })
    },
    megaMenuOpenSelector = e => e.megaMenuOpen,
    additionalMenuSelector = e => {
      var t;
      if ((t = e.additional) != null && t.items && e.additional.title === "Portals") {
        const r = e.additional.items.map(s => s.icon === "mail-bulk" ? {
          ...s,
          icon: "customer"
        } : s);
        return {
          ...e.additional,
          topItems: r.filter(s => !s.isBottom) || [],
          bottomItems: r.filter(s => s == null ? void 0 : s.isBottom) || []
        }
      }
      return {
        ...e.additional,
        topItems: e.additional.items.filter(r => !r.isBottom) || [],
        bottomItems: e.additional.items.filter(r => r == null ? void 0 : r.isBottom) || []
      }
    },
    getAdditionalMenu = () => {
      const e = useMenuStore.getState();
      return additionalMenuSelector(e)
    },
    hasSidenavSelector = e => e.additional.items.length > 0,
    useNeedUpdateLinksStore = create(() => ({
      value: 1
    })),
    useNeedUpdateValueController = leitenPrimitive(useNeedUpdateLinksStore, "value"),
    useUpNeedUpdateValue = () => {
      const e = useNeedUpdateValueController.get();
      useNeedUpdateValueController.set(e + 1)
    };
var ApiNotifications;
(function(e) {
  const t = domain + "/notification/main",
      r = t + "/get-new",
      s = t + "/check-unread-count",
      i = t + "/delete",
      n = t + "/delete-all",
      a = t + "/set-seen";
  e.get = async l => await csrfFetch({
    url: getUrlWithSearchParams(r, {
      ...l
    }),
    withCredentials: !0
  }).then(e.extractNotifications), e.getUnreadCount = async () => csrfFetch({
    url: s,
    withCredentials: !0
  }), e.patchStatusItemAsSeen = l => csrfFetch({
    url: a,
    method: "POST",
    params: l,
    withCredentials: !0
  }), e.deleteItem = l => csrfFetch({
    url: i,
    method: "POST",
    params: l,
    withCredentials: !0
  }), e.deleteAll = () => csrfFetch({
    url: n,
    method: "POST",
    withCredentials: !0
  }), e.extractNotifications = l => l.data
})(ApiNotifications || (ApiNotifications = {}));
const useNewNotificationStore = create(() => ({
      list: [],
      unreadCount: null,
      item: null
    })),
    useGetNotificationController = leitenRequest(useNewNotificationStore, "list", async e => await ApiNotifications.get(e), {
      initialStatus: "init"
    }),
    useNotificationsListController = leitenList(useNewNotificationStore, "list", {
      compare: (e, t) => e.id === t.id
    }),
    useGetUnreadCountController = leitenRequest(useNewNotificationStore, "unreadCount", async e => {
      var t;
      return (t = await ApiNotifications.getUnreadCount()) == null ? void 0 : t.unreadCount
    }),
    useRemoveAllNotificationsController = leitenRequest(useNewNotificationStore, "list", async e => {
      await ApiNotifications.deleteAll()
    }, {
      fulfilled: () => {
        useNotificationsListController.clear(), useGetUnreadCountController.action()
      }
    }),
    useRemoveNotificationController = leitenRequest(useNewNotificationStore, "list", async e => {
      await ApiNotifications.deleteItem({
        id: e.id
      })
    }, {
      fulfilled: ({
                    payload: e
                  }) => {
        useNotificationsListController.remove(e)
      }
    }),
    useChangeSeenNotificationStatusController = leitenRequest(useNewNotificationStore, "item", async e => {
      await ApiNotifications.patchStatusItemAsSeen({
        ...e,
        newStatus: !0
      })
    }, {
      fulfilled: ({
                    payload: e
                  }) => {
        useNotificationsListController.update({
          ...e,
          seen: !0
        })
      }
    }),
    notificationsSelector = e => {
      const {
        list: t
      } = e;
      return {
        notifications: [...t].sort((r, s) => r > s ? -1 : 1) || [],
        totalCount: t.length || 0
      }
    },
    notificationLoadMore = async () => {
      var t;
      const e = useNewNotificationStore.getState().list || [];
      try {
        const r = await ApiNotifications.get({
          point: (t = e[e.length - 1]) == null ? void 0 : t.createdAt
        });
        r && r.length > 0 && useNotificationsListController.set([...e, ...r])
      } catch (r) {
        console.error("Failed to load more notifications:", r)
      }
    }, initialMenu = {
      menu: {
        leftSidebarSettings: [],
        topNavbarSettings: [],
        lastAccounts: [],
        isFavoritesLoading: !1,
        isExpanded: !1,
        favorites: [],
        userInfo: {
          country: "",
          email: "",
          fullName: "",
          avatar: "",
          hasMobileApp: !1,
          showWechatWidget: !1
        },
        dropdownMenu: [],
        plan: {
          isFree: !1,
          isElite: !1
        },
        parts: {
          megamenuDropdown: !0,
          sidenav: !1
        },
        whatsNew: {
          megaMenu: !1,
          showMegaMenuModalV3: !1,
          showModalWalmart: !1
        },
        weChat: void 0
      }
    }, useExtendedMenuStore = create(() => initialMenu), timers = {
      unreadCount: null,
      router: null
    };
let previousURL = window.location.href;
const containerTools = ["/listing-builder"],
    isReContainer = () => !!containerTools.find(e => window.location.pathname.startsWith(e)),
    leftSidebarOrder = ["productResearch", "listingOptimization", "analytics", "keywordResearch", "learning", "operations", "marketing", "partner"],
    maxFavoriteLength = 7,
    useExtendedMenuController = leitenRequest(useExtendedMenuStore, "menu", async ({
                                                                                     accountId: e,
                                                                                     data: t
                                                                                   }) => {
      var s, i, n;
      const r = (t == null ? void 0 : t.extendedMenu) || ((s = window.__REACT_MENU__) == null ? void 0 : s.extendedMenu) || await ApiExtendedMenu.get(e);
      return {
        ...initialMenu.menu,
        ...r == null ? void 0 : r.results,
        favorites: (r == null ? void 0 : r.results.favorites) || [],
        userInfo: {
          ...initialMenu.menu.userInfo,
          ...r == null ? void 0 : r.results.userInfo,
          fullName: htmlDecode(r == null ? void 0 : r.results.userInfo.fullName)
        },
        lastAccounts: (r == null ? void 0 : r.results.lastAccounts.map(a => ({
          ...a,
          accountName: htmlDecode(a.accountName)
        }))) || [],
        whatsNew: (r == null ? void 0 : r.results.whatsNew) || {},
        dropdownMenu: prepareAccountItems((r == null ? void 0 : r.results.dropdownMenu) || []),
        leftSidebarSettings: prepareMenuItems((r == null ? void 0 : r.results.leftSidebarSettings.filter(a => a.id !== "home")) || []),
        topNavbarSettings: prepareTopbarItems((r == null ? void 0 : r.results.topNavbarSettings.filter(a => a.id !== "tools")) || []),
        parts: {
          megamenuDropdown: ((i = r == null ? void 0 : r.results.parts) == null ? void 0 : i.megamenuDropdown) ?? !0,
          sidenav: ((n = r == null ? void 0 : r.results.parts) == null ? void 0 : n.sidenav) ?? !0
        }
      }
    }, {
      fulfilled: ({
                    result: e,
                    payload: {
                      accountId: t,
                      isUpdate: r,
                      data: s
                    }
                  }) => {
        var i;
        if (r) {
          const n = t || e.lastAccounts[0].accountId;
          useSetAccountIdController.set(n)
        } else {
          const n = t || e.lastAccounts[0].accountId;
          useSetAccountIdController.set(n), useAccounts.action((i = s == null ? void 0 : s.accounts) == null ? void 0 : i.results);
          const a = getAdditionalMenu();
          !timers.router && (a != null && a.onRouteChange || isReContainer()) && (timers.router = setInterval(() => {
            previousURL !== window.location.href && useUpNeedUpdateValue(), previousURL = window.location.href
          }, 200)), timers.unreadCount || (timers.unreadCount = setInterval(() => {
            document.hidden || useGetUnreadCountController.action()
          }, 1e3 * 60 * 5))
        }
      }
    }),
    favoritesController = leitenList(useExtendedMenuStore, "menu.favorites"),
    isFavoritesLoadingController = leitenPrimitive(useExtendedMenuStore, "menu.isFavoritesLoading"),
    isExpandedController = leitenPrimitive(useExtendedMenuStore, "menu.isExpanded"),
    toggleIsFavoriteLoading = () => {
      const e = isFavoritesLoadingController.get();
      isFavoritesLoadingController.set(!e)
    },
    toggleExpanded = () => {
      const e = isExpandedController.get();
      isExpandedController.set(!e)
    },
    toggleFavorite = e => {
      const t = useMenuStore.getState().message,
          r = useExtendedMenuStore.getState().menu.favorites || [],
          s = useTranslationStore.getState().translation,
          i = typeof e == "string" ? e : e.id,
          n = r.includes(i),
          a = {
            text: (s == null ? void 0 : s.t("megamenuFavorites.maxReached", {
              number: maxFavoriteLength
            })) || "",
            type: "success"
          },
          l = {
            text: (s == null ? void 0 : s.t("megamenuFavorites.error")) || "",
            type: "error"
          };
      ApiSegmentMenu.send({
        name: "Favorite Tool Status Updated",
        properties: {
          status: n ? "removed" : "added",
          tool: i
        }
      }), n ? (toggleIsFavoriteLoading(), favoritesController.remove(i), ApiFavorite.remove({
        toolId: i
      }).catch(() => {
        favoritesController.add(i), showMessage(l)
      }).finally(() => {
        toggleIsFavoriteLoading()
      })) : r.length < maxFavoriteLength ? (toggleIsFavoriteLoading(), favoritesController.add(i), ApiFavorite.add({
        toolId: i
      }).catch(() => {
        favoritesController.remove(i), showMessage(l)
      }).finally(() => {
        toggleIsFavoriteLoading()
      })) : t.open || showMessage(a)
    },
    favoriteItemsSelector = e => {
      var s, i;
      const t = [];
      for (const n of ((s = e.menu) == null ? void 0 : s.leftSidebarSettings) || []) t.push(...n.tools || []);
      const r = [];
      for (const n of ((i = e.menu) == null ? void 0 : i.favorites) || []) {
        const a = t.find(l => l.id === n);
        a && r.push({
          ...a,
          onClick: async () => {
            const l = [sendSegmentEvent({
              name: "Tool Link Clicked",
              properties: {
                location: "favoritesMenu"
              }
            })];
            a.id === "smb-refund-service" && l.push(sendSegmentEvent({
              name: "MRS Onboarding Tools Menu Button Clicked"
            })), await Promise.all(l)
          }
        })
      }
      return r.sort(function(n, a) {
        return n.name > a.name ? 1 : a.name > n.name ? -1 : 0
      })
    },
    sidebarSelector = e => [...e.menu.leftSidebarSettings].sort((t, r) => leftSidebarOrder.indexOf(t.id) - leftSidebarOrder.indexOf(r.id)) || [],
    sidebarSunsetSelector = e => {
      var s;
      const t = [...e.menu.leftSidebarSettings].sort((i, n) => leftSidebarOrder.indexOf(i.id) - leftSidebarOrder.indexOf(n.id)) || [],
          r = t.map(i => {
            var n;
            return {
              ...i,
              tools: (n = i == null ? void 0 : i.tools) == null ? void 0 : n.filter(a => (a == null ? void 0 : a.isSunset) === !1)
            }
          });
      return (s = e == null ? void 0 : e.menu) != null && s.isExpanded ? t : r
    },
    hasPartnerSelector = e => {
      var t;
      return ((t = e.menu) == null ? void 0 : t.leftSidebarSettings.find(r => r.id === "partner")) || !1
    },
    partsSelector = e => {
      var t;
      return ((t = e.menu) == null ? void 0 : t.parts) || {
        megamenuDropdown: !0,
        sidenav: !1
      }
    },
    topbarSelector = e => {
      var t;
      return ((t = e.menu) == null ? void 0 : t.topNavbarSettings) || []
    },
    expandableSelector = e => {
      var t, r;
      return ((r = (t = e.menu) == null ? void 0 : t.leftSidebarSettings) == null ? void 0 : r.some(s => {
        var i, n;
        return (n = (i = s == null ? void 0 : s.tools) == null ? void 0 : i.map(a => a == null ? void 0 : a.isSunset)) == null ? void 0 : n.includes(!0)
      })) || !1
    },
    expandedSelector = e => {
      var t;
      return !!((t = e == null ? void 0 : e.menu) != null && t.isExpanded)
    },
    whatsNewSelector = e => {
      var s;
      const t = ((s = e.menu) == null ? void 0 : s.whatsNew) || {};
      return Object.keys(t).find(i => t[i]) || null
    },
    favoriteListSelector = e => {
      var t;
      return ((t = e.menu) == null ? void 0 : t.favorites) || []
    },
    useUserInfo = () => {
      var a;
      const e = useAccountStore(accountIdSelector),
          t = useExtendedMenuStore(l => l.menu),
          r = useAccountsStore(l => l.accounts),
          s = parseInt(localStorage.getItem(WECHAT_COUNTER + e) || "0"),
          i = isDashboard && s === 1,
          n = Object.values(r || {}).sort((l, o) => l.role - o.role).find(l => String(l.accountId) === String(e));
      return {
        weChat: (a = t == null ? void 0 : t.userInfo) != null && a.showWechatWidget ? {
          isInitialOpen: i,
          accountId: e,
          counter: s
        } : void 0,
        userInfo: n ? {
          ...t == null ? void 0 : t.userInfo,
          accountName: n == null ? void 0 : n.accountName
        } : null,
        plan: t == null ? void 0 : t.plan,
        accountId: e,
        dropdownMenu: (t == null ? void 0 : t.dropdownMenu) || [],
        lastAccounts: (t == null ? void 0 : t.lastAccounts) || [],
        allAccounts: Object.values(r || {}).sort((l, o) => l.role - o.role) || [],
        numberOfAccounts: Object.values(r || {}).length
      }
    },
    Ellipsis$1 = ut.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
`,
    Divider$4 = ut.span`
  width: 6px;
  height: 6px;
  background-color: ${({theme:e})=>e.systemColors.grey200};
  border-radius: 6px;
  display: block;
  margin-left: 8px;
  margin-right: 8px;
`,
    spin = ht`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`,
    Spinner = ut(FontAwesomeIcon).attrs({
      icon: faSpinnerThird
    })`
  font-size: 12px;
  color: #000;
  animation: ${spin} 1.2s infinite linear;
`,
    BaseButton = ut.button`
  height: 34px;
  display: ${({expanded:e})=>e?"flex":"inline-flex"};
  align-items: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  line-height: 1.4;
  white-space: nowrap;
  text-decoration: none;
  border: 1px solid ${({theme:e})=>e.systemColors.grey200};
  background-color: ${({outline:e,theme:t})=>e?t.systemColors.white:t.systemColors.grey200};
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
  padding: 6px 12px;
  border-radius: 3px;

  &:hover,
  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`,
    DarkButton = ut(BaseButton)(({
                                   outline: e,
                                   theme: t
                                 }) => at`
    padding: 8px 12px;
    border-color: ${t.systemColors.blue900};
    background-color: ${e?t.systemColors.white:t.systemColors.blue900};
    color: ${e?t.systemColors.blue900:t.systemColors.white};

    &:hover {
      background-color: ${e?t.systemColors.blue900:t.systemColors.grey800};
      color: ${t.systemColors.white};
      border-color: ${e?t.systemColors.blue900:t.systemColors.grey800};
    }
  `),
    dialogModalXPadding = "32px",
    ShareYourIdeas = () => {
      const {
        t: e
      } = useTranslation(), [t] = useShareModal(), {
        userInfo: r
      } = useUserInfo(), {
        register: s,
        handleSubmit: i,
        reset: n,
        setError: a,
        formState: {
          errors: l
        }
      } = useForm();
      reactExports.useEffect(() => {
        t && (p(""), n({
          email: (r == null ? void 0 : r.email) || "",
          message: ""
        }))
      }, [t, n, r == null ? void 0 : r.email]);
      const [o, p] = reactExports.useState(""), g = async S => {
        var E, b;
        const u = {
          message: ((E = S.message) == null ? void 0 : E.trim()) || "",
          email: ((b = S.email) == null ? void 0 : b.trim()) || void 0
        };
        u.message === "" ? a("message", {}) : ApiShareIdeas.send(u).then(() => {
          p("success")
        }).catch(() => {
          p("error")
        })
      };
      return jsxRuntimeExports.jsx(DialogModal, {
        isOpen: t,
        onClose: useShareModal.close,
        title: e("shareYourIdeasModal.title"),
        titleAlign: o === "success" || o === "error" ? "center" : "left",
        position: "top",
        container: modalContainer,
        size: o === "success" || o === "error" ? "50" : "100",
        footer: o === "success" ? jsxRuntimeExports.jsx(ControlsCenter, {
          $ideaSent: o,
          children: jsxRuntimeExports.jsx(NewButton, {
            onClick: useShareModal.close,
            buttonType: "secondary",
            children: e("common.done")
          })
        }) : o === "error" ? jsxRuntimeExports.jsx(ControlsCenter, {
          children: jsxRuntimeExports.jsx(NewButton, {
            onClick: useShareModal.close,
            buttonType: "secondary",
            children: e("common.close")
          })
        }) : jsxRuntimeExports.jsxs(Controls$2, {
          children: [jsxRuntimeExports.jsx(NewButton, {
            onClick: useShareModal.close,
            buttonType: "secondary",
            children: e("common.cancel")
          }), jsxRuntimeExports.jsx(NewButton, {
            form: "shareIdeas",
            type: "submit",
            children: e("common.submitFeedback")
          })]
        }),
        children: o === "success" ? jsxRuntimeExports.jsx(SuccessMessage, {}) : o === "error" ? jsxRuntimeExports.jsx(ErrorMessage, {}) : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [jsxRuntimeExports.jsx(Title$d, {
            children: "Reporting a bug or need technical support?"
          }), jsxRuntimeExports.jsx(Text$3, {
            children: "In order to best prioritize bugs and customer support issues, please contact our platform specialist team using our contact form."
          }), jsxRuntimeExports.jsx(ContactButton, {
            as: "a",
            target: "_blank",
            href: contactSupportLink,
            outline: !0,
            children: "Contact Support"
          }), jsxRuntimeExports.jsx(Title$d, {
            children: "Providing feedback or a feature request?"
          }), jsxRuntimeExports.jsx(Text$3, {
            children: "We love to get feedback from our customers! Feedback submitted in the form below will be reviewed by our product development team."
          }), jsxRuntimeExports.jsxs(Form, {
            id: "shareIdeas",
            onSubmit: i(g),
            children: [jsxRuntimeExports.jsxs(Field, {
              children: [jsxRuntimeExports.jsx(LabelWithTooltip, {
                label: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                  children: ["Message", jsxRuntimeExports.jsx(RequiredLabel, {
                    children: "*"
                  })]
                })
              }), jsxRuntimeExports.jsx(NewTextArea, {
                minRows: 2,
                maxRows: 5,
                maxLength: 500,
                error: l.message && "Message cannot be blank.",
                placeholder: "What would you like to be able to do? How would that help you?",
                ...s("message", {
                  required: !0
                })
              })]
            }), jsxRuntimeExports.jsxs(Field, {
              children: [jsxRuntimeExports.jsx(LabelWithTooltip, {
                label: "Email"
              }), jsxRuntimeExports.jsx(NewInput, {
                type: "email",
                placeholder: "Enter your Email address",
                ...s("email")
              })]
            })]
          })]
        })
      })
    },
    SuccessMessage = () => jsxRuntimeExports.jsxs(Message$2, {
      children: [jsxRuntimeExports.jsx(MessageIcon, {
        children: jsxRuntimeExports.jsx(ShareDone, {})
      }), jsxRuntimeExports.jsx(Title$d, {
        children: "Your Feedback Has Been Submitted"
      }), jsxRuntimeExports.jsx(Text$3, {
        children: "We appreciate your feedback and contribution."
      })]
    }),
    ErrorMessage = () => jsxRuntimeExports.jsxs(Message$2, {
      children: [jsxRuntimeExports.jsx(MessageIcon, {
        children: jsxRuntimeExports.jsx(ShareCancel, {})
      }), jsxRuntimeExports.jsx(Title$d, {
        children: "An Error Occurred"
      }), jsxRuntimeExports.jsx(Text$3, {
        children: "Please try again later"
      })]
    }),
    Title$d = ut.h5`
  ${cssBody600Bold};
  margin-bottom: 6px;
`,
    Text$3 = ut.p`
  ${cssBody200};
  margin-bottom: 16px;
`,
    Controls$2 = ut.div`
  margin-left: auto;

  ${NewButton} + ${NewButton} {
    margin-left: 8px;
  }
`,
    ControlsCenter = ut(Controls$2)`
  margin: auto;
  ${e=>(e.$ideaSent==="success"||e.$ideaSent==="error")&&at`
      text-align: center;
    `}
`,
    ContactButton = ut(DarkButton)`
  padding: 8px 20px;
  margin-bottom: 24px;
  height: auto;
`,
    RequiredLabel = ut.span`
  color: #d62c1a;
  padding-left: 5px;
`,
    Field = ut.div`
  margin-bottom: 16px;
`,
    Form = ut.form``,
    Message$2 = ut.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  width: calc(200px - ${dialogModalXPadding});
  text-align: center;

  ${media.laptop} {
    width: calc(300px - ${dialogModalXPadding});
  }

  ${media.desktop} {
    width: calc(400px - ${dialogModalXPadding});
  }
`,
    MessageIcon = ut.div`
  display: flex;
  justify-content: center;
  color: #0081ff;
  font-size: 50px;
  line-height: 1em;
  margin-bottom: 24px;
  margin-top: 16px;
`,
    ShareDone = ut(FontAwesomeIcon).attrs({
      icon: faCheckCircle
    })`
  display: block;
  font-size: 50px;
  color: #0081ff;
`,
    ShareCancel = ut(FontAwesomeIcon).attrs({
      icon: faTimesCircle
    })`
  display: block;
  font-size: 50px;
  color: #d62c1a;
`,
    setMFAPrompts = e => baseFetch({
      method: "POST",
      url: getUrlWithSearchParams(`${customersLink}/set-mfa-prompts`, {}),
      withCredentials: !0,
      params: {
        action: e
      }
    }),
    useForceMFA = create(() => ({
      userInfo: null,
      modal: "firstStep"
    })),
    useUserInfoController = leitenRequest(useForceMFA, "userInfo", e => getUserInfo().then(transform), {
      fulfilled: ({
                    result: e
                  }) => {
        var t, r, s;
        (t = e.mfaEnablingPrompts) != null && t.isFinished || ((r = e.mfaEnablingPrompts) != null && r.isSecondPrompt ? useForceMFAModal.open("secondStep") : (s = e.mfaEnablingPrompts) != null && s.isFirstPrompt && useForceMFAModal.open("firstStep"))
      }
    }),
    useForceMFAModal = leitenModal(useForceMFA, "modal", {
      reaction: e => {
        e.type === "OPEN" && sendSegmentEvent({
          name: "2FA Prompt Viewed",
          properties: {
            Location: window.location.origin + window.location.pathname,
            trigger: "showed"
          }
        })
      }
    }),
    handleUseMFA = debounce(() => {
      var e;
      sendSegmentEvent({
        name: "2FA Prompt Viewed",
        properties: {
          Location: window.location.origin + window.location.pathname,
          trigger: "submit"
        }
      }), useForceMFAModal.close(), (e = window.open(getUrlWithSearchParams(domain$1 + "/profile/index#mfa-authentication-wrapper", {}), "_blank")) == null || e.focus()
    }, 200),
    handleCancelMFA = debounce(() => {
      const t = useForceMFA.getState().modal === "firstStep" ? "defer" : "bypass";
      setMFAPrompts(t), sendSegmentEvent({
        name: "2FA Prompt Viewed",
        properties: {
          Location: window.location.origin + window.location.pathname,
          trigger: "submit",
          action: t
        }
      }), useForceMFAModal.close()
    }, 200),
    ForceMFAModal = reactExports.memo(() => {
      const {
        t: e
      } = useTranslation(), [t] = useForceMFAModal(), r = useForceMFA(i => i.modal), s = !["/onboarding", "/subscribe"].includes(window.location.pathname);
      return reactExports.useEffect(() => {
        s && useUserInfoController.action()
      }, [s]), jsxRuntimeExports.jsx(DialogModal, {
        lockBody: !0,
        isOpen: t,
        title: e(`forceMFA.${r}.title`),
        subtitle: e(`forceMFA.${r}.subtitle`),
        footer: jsxRuntimeExports.jsxs(Footer$1, {
          children: [jsxRuntimeExports.jsx(NewButton, {
            onClick: handleUseMFA,
            children: e(`forceMFA.${r}.submit`)
          }), jsxRuntimeExports.jsx(NewButton, {
            buttonType: "text",
            onClick: handleCancelMFA,
            children: e(`forceMFA.${r}.cancel`)
          })]
        })
      })
    }),
    Footer$1 = ut.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${e=>e.theme.spacing.sp24};
`,
    useHeaderStore = create(() => ({
      isStickyHeader: !1,
      openDropdownMenu: !1,
      hasMinimizedContent: !1
    })),
    useStickyHeaderController = leitenPrimitive(useHeaderStore, "isStickyHeader"),
    useOpenDropdownMenuController = leitenPrimitive(useHeaderStore, "openDropdownMenu"),
    useHasMinimizedContentController = leitenPrimitive(useHeaderStore, "hasMinimizedContent"),
    MegamenuV1Modal = reactExports.lazy(() => __vitePreload(() => import("./MegamenuV1Modal-V1kkoaky.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])).then(e => ({
      default: e.MegamenuV1Modal
    }))),
    MegamenuV2Modal = reactExports.lazy(() => __vitePreload(() => import("./MegamenuV2Modal-VOLbFXqF.js"), __vite__mapDeps([14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])).then(e => ({
      default: e.MegamenuV2Modal
    }))),
    WalmartModal = reactExports.lazy(() => __vitePreload(() => import("./WalmartModal-njlKv3ex.js"), __vite__mapDeps([15, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])).then(e => ({
      default: e.WalmartModal
    }))),
    LazyMegamenuV1Modal = () => jsxRuntimeExports.jsx(reactExports.Suspense, {
      fallback: jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}),
      children: jsxRuntimeExports.jsx(MegamenuV1Modal, {})
    }),
    LazyMegamenuV2Modal = () => jsxRuntimeExports.jsx(reactExports.Suspense, {
      fallback: jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}),
      children: jsxRuntimeExports.jsx(MegamenuV2Modal, {})
    }),
    LazyWalmartModal = () => jsxRuntimeExports.jsx(reactExports.Suspense, {
      fallback: jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {}),
      children: jsxRuntimeExports.jsx(WalmartModal, {})
    }),
    AnnouncementModal = () => {
      const e = useExtendedMenuStore(whatsNewSelector);
      return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, {
        children: e === "megaMenu" ? jsxRuntimeExports.jsx(LazyMegamenuV1Modal, {}) : e === "showMegaMenuModalV3" ? jsxRuntimeExports.jsx(LazyMegamenuV2Modal, {}) : e === "showModalWalmart" ? jsxRuntimeExports.jsx(LazyWalmartModal, {}) : null
      })
    },
    useMenuStatus = () => {
      const e = useExtendedMenuController(r => r.status),
          t = useAccounts(r => r.status);
      return combineStatuses(e, t) === "loaded"
    },
    icon$1 = "https://re-cdn.helium10.com/container/static/not-found-search-rxtiJfXy.svg",
    useLink = e => {
      const t = useAccountStore(accountIdSelector),
          r = reactExports.useCallback(i => {
            const n = new URL(i, window.location.origin);
            return n.searchParams.set("accountId", t.toString()), n.toString()
          }, [t]);
      return {
        updatedLink: reactExports.useMemo(() => e ? r(e) : "", [r, e]),
        updateLink: r
      }
    },
    useNewSearchBarStore = create(() => ({
      open: !1,
      historyList: null,
      autocompletedResult: null,
      item: null
    })),
    useToggleSearchBarController = leitenPrimitive(useNewSearchBarStore, "open", {
      sideEffect: ({
                     next: e
                   }) => {
        e && sendSegmentEvent({
          name: SEGMENT_EVENT_SEARCH_BAR_CLICKED
        })
      }
    }),
    toggleSearchBar = () => {
      const e = useToggleSearchBarController.get();
      useToggleSearchBarController.set(!e)
    },
    useGetHistoryListController = leitenRequest(useNewSearchBarStore, "historyList", async e => (await ApiSearchBar.getChosenResult()).data, {
      initialStatus: "init"
    }),
    useRememberHistoryController = leitenRequest(useNewSearchBarStore, "item", async e => {
      ApiSearchBar.setChosenResult({
        id: e.id,
        title: e.title,
        type: e.type,
        url: e.url
      })
    }),
    useAutocompleteController = leitenRequest(useNewSearchBarStore, "autocompletedResult", async e => {
      const t = await ApiSearchBar.getAutocomplete({
        query: e
      });
      return [...t.items.tools, ...t.items.resources].map((r, s) => ({
        ...r,
        position: s
      }))
    }),
    useSearchKeyDown = e => {
      const [t, r] = useNewSearchBarStore(o => [o.autocompletedResult, o.historyList]), s = useAutocompleteController(o => o.status), [i, n] = reactExports.useState(-1);
      reactExports.useEffect(() => {
        t && t.length > 0 && n(0)
      }, [t]);
      const a = reactExports.useCallback(o => {
            const p = s === "loaded" ? t : r;
            p && p.length && (o.key === "ArrowUp" && n(i !== 0 ? i - 1 : p.length - 1), o.key === "ArrowDown" && n(i < p.length - 1 ? i + 1 : 0), o.key === "Enter" && e(p[i], !0))
          }, [t, r, i, e, s]),
          l = reactExports.useCallback(o => {
            n(o)
          }, []);
      return {
        handleKeyDown: a,
        onMouseEnter: l,
        hover: i
      }
    },
    SearchItem = ({
                    data: e,
                    hover: t,
                    highlighted: r,
                    showType: s = !0
                  }) => jsxRuntimeExports.jsxs(Wrapper$s, {
      hover: t,
      children: [jsxRuntimeExports.jsx(Name$3, {
        children: r ? jsxRuntimeExports.jsx(Span, {
          dangerouslySetInnerHTML: {
            __html: e.titleHighlighted || ""
          }
        }) : e.title
      }), s && jsxRuntimeExports.jsx(Label$2, {
        children: e.type
      })]
    }),
    Wrapper$s = ut.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.1s cubic-bezier(0.25, 0.1, 0.25, 1);
  padding: 8px 18px 8px 18px;
  cursor: pointer;
  height: 40px;

  &:hover {
    background-color: ${({theme:e})=>e.systemColors.grey100};
  }

  ${media.desktop} {
    padding: 8px 15px 8px 70px;
  }

  ${e=>e.hover&&`
      background-color: ${e.theme.systemColors.grey100};
    `}
`,
    Name$3 = ut(Ellipsis$1)`
  ${cssBody400};
  margin-right: 16px;
  color: ${({theme:e})=>e.systemColors.grey600};

  b {
    font-weight: 700;
    color: ${({theme:e})=>e.systemColors.black};
  }
`,
    Label$2 = ut.span`
  ${cssBody100Bold};
  color: ${({theme:e})=>e.systemColors.grey600};
  border: 1px solid ${({theme:e})=>e.systemColors.grey600};
  border-radius: 12px;
  user-select: none;
  padding: 4px 8px;
`,
    Span = ut.span``,
    SearchBar = () => {
      const [e, t, r] = useNewSearchBarStore(d => [d.open, d.autocompletedResult, d.historyList]), s = useAutocompleteController(d => d.status), i = useGetHistoryListController(d => d), [n, a] = reactExports.useState(""), l = reactExports.useRef(null), {
        updateLink: o
      } = useLink(), {
        t: p
      } = useTranslation(), g = useHeaderStore(d => d.isStickyHeader), S = c(() => useAutocompleteController.action(n), 200), u = reactExports.useCallback(() => {
        var d;
        a(""), (d = l.current) == null || d.focus()
      }, []), E = reactExports.useCallback((d, f) => {
        const y = o(d.url),
            A = window.open(y, "_blank");
        A && A.focus(), f && useRememberHistoryController.action(d)
      }, [o]), {
        handleKeyDown: b,
        onMouseEnter: x,
        hover: M
      } = useSearchKeyDown(E), m = reactExports.useMemo(() => ({
        tools: (t == null ? void 0 : t.filter(d => d.type === "Tools")) || [],
        resources: (t == null ? void 0 : t.filter(d => d.type === "Resources")) || []
      }), [t]);
      return reactExports.useEffect(() => {
        e && i.status === "init" && useGetHistoryListController.action()
      }, [i.status, e]), reactExports.useEffect(() => {
        n && S()
      }, [S, n]), reactExports.useEffect(() => {
        var d;
        e && ((d = l.current) == null || d.focus()), !e && u()
      }, [u, e]), jsxRuntimeExports.jsx(CSSTransition, {
        in: e,
        timeout: 200,
        classNames: "slideTop",
        unmountOnExit: !0,
        mountOnEnter: !0,
        children: jsxRuntimeExports.jsxs(Wrapper$r, {
          open: e,
          children: [jsxRuntimeExports.jsx(Background, {
            onClick: toggleSearchBar
          }), jsxRuntimeExports.jsxs(Content$3, {
            children: [jsxRuntimeExports.jsxs(Search$1, {
              $isStickyHeader: g,
              children: [jsxRuntimeExports.jsx(SearchIcon, {}), jsxRuntimeExports.jsx(Input, {
                ref: l,
                value: n,
                onKeyDown: b,
                onChange: d => a(d.currentTarget.value),
                placeholder: p("searchBar.searchPlaceholder")
              }), jsxRuntimeExports.jsx(Controls$1, {
                children: jsxRuntimeExports.jsx(Cancel$1, {
                  onClick: toggleSearchBar,
                  children: p("common.cancel")
                })
              })]
            }), jsxRuntimeExports.jsx(Results, {
              children: (s === "init" || n.length === 0) && r && r.length > 0 ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                children: [jsxRuntimeExports.jsx(SecondTitle, {
                  children: p("searchBar.recentDestinations")
                }), r.map(d => jsxRuntimeExports.jsx(Block, {
                  onClick: () => E(d),
                  children: jsxRuntimeExports.jsx(SearchItem, {
                    data: d,
                    hover: M === d.position
                  })
                }, d.id))]
              }) : s === "loaded" && t && t.length > 0 ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
                children: [m.tools.length > 0 && jsxRuntimeExports.jsxs(ToolsGroup, {
                  children: [jsxRuntimeExports.jsx(SecondTitle, {
                    children: p("searchBar.tools")
                  }), m.tools.map(d => jsxRuntimeExports.jsx(Block, {
                    onMouseEnter: () => x(d.position),
                    onClick: () => E(d, !0),
                    children: jsxRuntimeExports.jsx(SearchItem, {
                      data: d,
                      hover: M === d.position,
                      highlighted: !0,
                      showType: !1
                    })
                  }, d.id))]
                }), m.resources.length > 0 && jsxRuntimeExports.jsxs(ToolsGroup, {
                  children: [jsxRuntimeExports.jsx(SecondTitle, {
                    children: p("searchBar.resources")
                  }), m.resources.map(d => jsxRuntimeExports.jsx(Block, {
                    onMouseEnter: () => x(d.position),
                    onClick: () => E(d, !0),
                    children: jsxRuntimeExports.jsx(SearchItem, {
                      data: d,
                      hover: M === d.position,
                      highlighted: !0,
                      showType: !1
                    })
                  }, d.id))]
                })]
              }) : jsxRuntimeExports.jsxs(Error$1, {
                children: [jsxRuntimeExports.jsx(ErrorImage, {}), jsxRuntimeExports.jsx(ErrorTitle, {
                  children: p("searchBar.notFound")
                }), jsxRuntimeExports.jsx(ErrorSuggestion, {
                  children: p("searchBar.suggestions")
                })]
              })
            })]
          })]
        })
      })
    },
    ToolsGroup = ut.div`
  & + & {
    margin-top: 10px;
  }
`,
    Block = ut.div``,
    Error$1 = ut.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
`,
    ErrorImage = ut.img.attrs({
      src: icon$1
    })`
  display: block;
  height: 70px;
  margin: ${({theme:e})=>e.spacing.sp20} ${({theme:e})=>e.spacing.sp24};
`,
    ErrorTitle = ut.p`
  ${cssBody400Bold};
  text-align: center;
  color: ${({theme:e})=>e.systemColors.black};
  margin: 0;
`,
    ErrorSuggestion = ut.p`
  ${cssBody400};
  text-align: center;
  color: ${({theme:e})=>e.systemColors.grey600};
  margin: ${({theme:e})=>e.spacing.sp8} 0 ${({theme:e})=>e.spacing.sp24} 0;
`,
    SecondTitle = ut.div`
  ${cssBody200Bold};
  height: 40px;
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.systemColors.black};
  padding: 0 18px 0 18px;

  ${media.desktop} {
    padding: 0 18px 0 70px;
  }
`,
    Background = ut.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.3;
  background-color: ${({theme:e})=>e.systemColors.grey400};
`,
    Content$3 = ut.div`
  transition: transform 0.2s ease;
  background: #fff;
  display: flex;
  flex-direction: column;
  position: relative;

  ${media.desktopBefore} {
    height: 100%;
  }
`,
    Results = ut.div`
  flex: 1;
  padding: 8px 0;
  transition: transform 0.1s ease;

  strong {
    font-weight: 700;
    color: #343a40;
  }
`,
    Wrapper$r = ut.div`
  position: fixed;
  transition: opacity 0.2s ease;
  overflow: hidden;
  z-index: 10000;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;

  &.slideTop-enter {
    opacity: 0;

    ${Content$3} {
      transform: translateY(-100%);
    }
  }

  &.slideTop-enter-active {
    opacity: 1;

    ${Content$3} {
      transform: translateY(0);
    }
  }

  &.slideTop-exit {
    opacity: 1;

    ${Content$3} {
      transform: translateY(0);
    }
  }

  &.slideTop-exit-active {
    opacity: 0;

    ${Content$3} {
      transform: translateY(-100%);
    }
  }

  &.slideTop-exit-done {
    display: none;
  }
`,
    Input = ut.input`
  ${cssBody400};
  color: ${({theme:e})=>e.systemColors.grey800};
  border: none;
  padding: 0;
  height: 32px;
  flex: 1;
  min-width: 0;

  &::placeholder {
    color: ${({theme:e})=>e.systemColors.grey300};
    font-size: 16px;
  }

  &:focus {
    outline: none;
  }
`,
    SearchIcon = ut(FontAwesomeIcon).attrs({
      icon: faSearch
    })`
  font-size: 20px;
  color: ${({theme:e})=>e.systemColors.grey600};
  flex-shrink: 0;
  cursor: pointer;
  display: inline-block;
  margin-right: 16px;

  ${media.desktop} {
    margin-right: 24px;
  }
`,
    Controls$1 = ut.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  margin-left: 16px;
`,
    Cancel$1 = ut.div`
  font-size: 14px;
  font-weight: 700;
  color: ${({theme:e})=>e.systemColors.black};
  cursor: pointer;
  user-select: none;
`,
    Search$1 = ut.div`
  height: ${({$isStickyHeader:e})=>e?stickyHeaderHeight:fixedHeaderHeight}px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({theme:e})=>e.systemColors.grey200};
  padding: 0 18px;
  transition: all 0.3s;

  ${media.desktop} {
    padding: 0 24px;
  }
`,
    SearchBarContainer = () => useMenuStatus() ? jsxRuntimeExports.jsx(SearchBar, {}) : null;
var ApiPaymentData;
(function(e) {
  const t = domain + "/api/v1/customers/subscription/current-data";
  e.get = async () => await csrfFetch({
    url: getUrlWithSearchParams(t, {}),
    withCredentials: !0,
    cache: .08
  })
})(ApiPaymentData || (ApiPaymentData = {}));
const usePaymentDataStore = create(() => ({
      paymentInfo: null
    })),
    paymentDataController = leitenRequest(usePaymentDataStore, "paymentInfo", async e => await ApiPaymentData.get().then(t => t.data)),
    HEADER_DROPDOWN_ID = "header-dropdown",
    HeaderDropdown = () => {
      const e = useHeaderStore(t => t.openDropdownMenu);
      return jsxRuntimeExports.jsx(Element$1, {
        $open: e,
        id: HEADER_DROPDOWN_ID
      })
    },
    Element$1 = ut.div`
  height: ${({$open:e})=>e?"auto":"0"};
  opacity: ${({$open:e})=>e?1:0};
  background-color: ${({theme:e})=>e.systemColors.white};
  padding: 0 16px;
  border-top: 1px solid ${({theme:e})=>e.systemColors.grey200};
  transition: all 0.2s ease;
`,
    Burger = () => {
      const e = useMenuStore(megaMenuOpenSelector);
      return jsxRuntimeExports.jsx(BurgerWrapper, {
        onClick: toggleMegaMenuOpen,
        children: !e && jsxRuntimeExports.jsxs(Show, {
          children: [jsxRuntimeExports.jsx(Line, {}), jsxRuntimeExports.jsx(Line, {}), jsxRuntimeExports.jsx(Line, {})]
        })
      })
    },
    BurgerWrapper = ut.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing.sp16};
  height: ${({theme:e})=>e.spacing.sp20};
  margin: ${({theme:e})=>e.spacing.sp6} 0 0;

  ${media.desktop} {
    display: none;
  }
`,
    Show = ut.div`
  width: 100%;
  height: 14px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,
    Line = ut.span`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: ${({theme:e})=>e.systemColors.grey600};
`,
    adtomicAllow = ["d2orfccgjm83qx.amplifyapp.com", transformHelium10Domain("adtomic.stg.helium10.com"), transformHelium10Domain("adtomic.helium10.com"), "dev.ppc-helium.org"],
    homeAllow = ["ci.helium10-dev.com", transformHelium10Domain("members.helium10.com")],
    getLinkActive = (e, t, r) => !e || e !== "/" && t.pathname === "/" ? !1 : !!matchPath({
      path: e,
      caseSensitive: !0,
      ...r
    }, t.pathname),
    useActiveLink = e => {
      const t = useLocation();
      return typeof e == "string" ? getLinkActive(e, t) : e.some(({
                                                                    link: r,
                                                                    strict: s
                                                                  }) => getLinkActive(r, t, {
        end: s
      }))
    },
    useActiveHeaderLink = e => {
      const t = useMenuStore(megaMenuOpenSelector),
          r = useNeedUpdateLinksStore(s => s.value);
      return reactExports.useMemo(() => {
        const {
          hostname: s,
          pathname: i
        } = window.location;
        let n = !1;
        if (e !== "tools" && t) return !1;
        const a = i === "/" || i.startsWith("/control-center") || i.startsWith("/dashboard");
        switch (e) {
          case "home":
            n = a;
            break;
          case "tools":
            n = t || homeAllow.some(l => s.includes(l)) && !a && !i.startsWith("/profits") && !i.startsWith("/managed-refund-service");
            break;
          case "profits":
            n = i.startsWith("/profits");
            break;
          case "followup":
            n = s.includes(transformHelium10Domain("followup.helium10.com"));
            break;
          case "ppc":
            n = adtomicAllow.some(l => s.includes(l));
            break;
          case "portals":
            n = s.includes(transformHelium10Domain("portals.helium10.com"));
            break;
          case "freedom-ticket":
            n = s.includes("members.freedomticket.com");
            break;
          case "smb-refund-service":
            n = i.startsWith("/managed-refund-service");
            break
        }
        return n
      }, [e, t, r])
    },
    useLabelsMap = () => {
      const {
        t: e
      } = useTranslation();
      return {
        labelsMap: reactExports.useMemo(() => ({
          NEW: jsxRuntimeExports.jsx(Label$1, {
            type: "new",
            icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
              icon: faSparkles
            }),
            children: e("megamenuLabels.new")
          }),
          NEWShort: jsxRuntimeExports.jsx(Label$1, {
            type: "new",
            $isShort: !0,
            icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
              icon: faSparkles
            })
          }),
          BETA: jsxRuntimeExports.jsx(Label$1, {
            type: "beta",
            children: e("megamenuLabels.beta")
          }),
          "NEW WALMART BETA": jsxRuntimeExports.jsx(Label$1, {
            type: "beta",
            children: e("megamenuLabels.nowForWalmart")
          }),
          AI: jsxRuntimeExports.jsx(Label$1, {
            type: "new",
            icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
              icon: faSparkles
            }),
            children: "AI"
          })
        }), [e])
      }
    },
    Label$1 = ut(StatusChip)`
  text-transform: capitalize;
  margin-left: 8px;

${({$isShort:e})=>e&&at`
padding: $ {
    ({
        theme: t
    }) => t.spacing.sp6
};
line - height: 12 px;
min - height: auto;

&
> div {
    margin: 0;
}
`}}
`, HeaderLink = reactExports.forwardRef(({
                                                                                                  item: e,
                                                                                                  onClick: t,
                                                                                                  openState: r,
                                                                                                  ...s
                                                                                                }, i) => {
      const n = useActiveHeaderLink(e.id || e.name.toLowerCase()),
          {
            updatedLink: a
          } = useLink(e.url),
          l = useHeaderStore(g => g.isStickyHeader),
          {
            labelsMap: o
          } = useLabelsMap(),
          p = reactExports.useCallback(g => {
            var S;
            [0, 1].includes(g.button) && (g.preventDefault(), Promise.all([(S = e == null ? void 0 : e.onClick) == null ? void 0 : S.call(e), t == null ? void 0 : t()]).finally(() => {
              e.id !== "tools" && window.open(a, g.button === 1 ? "_blank" : e.target || "_self")
            }))
          }, [e, t, a]);
      return jsxRuntimeExports.jsxs(Item$1, {
        $active: n,
        ...s,
        ref: i,
        children: [jsxRuntimeExports.jsxs(Link$5, {
          href: a,
          title: e.title,
          target: e.target,
          onClick: p,
          onAuxClick: p,
          $isStickyHeader: l,
          children: [e.name, e.arrow && jsxRuntimeExports.jsx(ChevronRight$1, {
            $openState: r,
            $isStickyHeader: l
          })]
        }), e.isNew && o.NEWShort]
      })
    }), ChevronRight$1 = ut(FontAwesomeIcon).attrs({
      icon: faChevronUp
    })`
  font-size: ${({$isStickyHeader:e})=>e?"10px":"13px"};
  display: block;
  margin-left: 6px;
  transition:
    transform 0.1s ease,
    fill 0.2s ease,
    font-size 0.3s;
  transform: scaleY(-1);

  ${e=>e.$openState&&at`
      fill: #0a6fe8;
      transform: scaleY(1);
    `}
`, Link$5 = ut.a`
  height: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  position: relative;
  text-decoration: none;
  transition:
    color 250ms cubic-bezier(0.25, 0.1, 0.25, 1),
    font-size 0.3s;
  font-size: ${({$isStickyHeader:e})=>e?"14px":"16px"};
  line-height: ${({$isStickyHeader:e})=>e?1.3:1.5};
  color: #343a40;
`, Item$1 = ut.li`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;

  & + & {
    margin-left: 16px;

    ${media.extraDesktop} {
      margin-left: 24px;
    }
  }

  &:hover {
    ${Link$5} {
      color: ${({theme:e})=>e.systemColors.blue600};
    }

    ${ChevronRight$1} {
      fill: ${({theme:e})=>e.systemColors.blue600};
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    opacity: 0;
    transition:
      width 0.2s ease,
      opacity 0.2s ease;
    height: 5px;
    border-radius: 2.5px;
    background-color: #0a6fe8;
  }

  ${({$active:e})=>e&&at`
$ {
    Link$5
} {
    color: #0a6fe8;
        font-weight: bold;
      }

      &::after {
        opacity: 1;
        width: 100%;
      }
    `}
`,dashboardLink= {
      name: "Dashboard",
      url: isDev() ? window.location.origin : membersLink,
      title: "Dashboard",
      target: "_self",
      id: "home"
    },
    toolsLink = {
      name: "Tools",
      url: membersLink,
      title: "Tools",
      target: "_self",
      arrow: !0,
      id: "tools"
    },
    HeaderMenu = () => {
      const e = useExtendedMenuStore(topbarSelector),
          t = useMenuStatus(),
          r = useMenuStore(megaMenuOpenSelector),
          {
            megamenuDropdown: s
          } = useExtendedMenuStore(partsSelector),
          i = useMedia(mediaShort.largeDesktop);
      return jsxRuntimeExports.jsx(Wrapper$q, {
        children: t ? jsxRuntimeExports.jsxs(List$2, {
          children: [jsxRuntimeExports.jsx(HeaderLink, {
            item: dashboardLink
          }), s && jsxRuntimeExports.jsx(HeaderLink, {
            item: toolsLink,
            onClick: toggleMegaMenuOpen,
            openState: r
          }), i && e.map((n, a) => jsxRuntimeExports.jsx(HeaderLink, {
            item: n
          }, a))]
        }) : jsxRuntimeExports.jsxs(Preloader$1, {
          children: [jsxRuntimeExports.jsx(Skeleton, {}), jsxRuntimeExports.jsx(Skeleton, {}), jsxRuntimeExports.jsx(Skeleton, {})]
        })
      })
    },
    Preloader$1 = ut.div`
  display: flex;
  align-items: center;

  ${Skeleton} {
    height: 16px;
    border-radius: 4px;
    width: 80px;
    flex: 1;
  }

  ${Skeleton} + ${Skeleton} {
    margin-left: 18px;
  }
`,
    List$2 = ut.ul`
  margin: 0;
  padding: 0;
  height: 100%;
  list-style: none;
  display: flex;
`,
    Wrapper$q = ut.ul`
  height: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  ${media.desktopBefore} {
    display: none;
  }
`,
    HeaderLeft = () => jsxRuntimeExports.jsxs(Wrapper$p, {
      children: [jsxRuntimeExports.jsx(Burger, {}), jsxRuntimeExports.jsx(HeaderMenu, {})]
    }),
    Wrapper$p = ut.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
var lottie$1 = {
  exports: {}
};
(function(module, exports) {
  typeof navigator < "u" && function(e, t) {
    module.exports = t()
  }(commonjsGlobal, function() {
    var svgNS = "http://www.w3.org/2000/svg",
        locationHref = "",
        _useWebWorker = !1,
        initialDefaultFrame = -999999,
        setWebWorker = function(t) {
          _useWebWorker = !!t
        },
        getWebWorker = function() {
          return _useWebWorker
        },
        setLocationHref = function(t) {
          locationHref = t
        },
        getLocationHref = function() {
          return locationHref
        };

    function createTag(e) {
      return document.createElement(e)
    }

    function extendPrototype(e, t) {
      var r, s = e.length,
          i;
      for (r = 0; r < s; r += 1) {
        i = e[r].prototype;
        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t.prototype[n] = i[n])
      }
    }

    function getDescriptor(e, t) {
      return Object.getOwnPropertyDescriptor(e, t)
    }

    function createProxyFunction(e) {
      function t() {}
      return t.prototype = e, t
    }
    var audioControllerFactory = function() {
          function e(t) {
            this.audios = [], this.audioFactory = t, this._volume = 1, this._isMuted = !1
          }
          return e.prototype = {
            addAudio: function(r) {
              this.audios.push(r)
            },
            pause: function() {
              var r, s = this.audios.length;
              for (r = 0; r < s; r += 1) this.audios[r].pause()
            },
            resume: function() {
              var r, s = this.audios.length;
              for (r = 0; r < s; r += 1) this.audios[r].resume()
            },
            setRate: function(r) {
              var s, i = this.audios.length;
              for (s = 0; s < i; s += 1) this.audios[s].setRate(r)
            },
            createAudio: function(r) {
              return this.audioFactory ? this.audioFactory(r) : window.Howl ? new window.Howl({
                src: [r]
              }) : {
                isPlaying: !1,
                play: function() {
                  this.isPlaying = !0
                },
                seek: function() {
                  this.isPlaying = !1
                },
                playing: function() {},
                rate: function() {},
                setVolume: function() {}
              }
            },
            setAudioFactory: function(r) {
              this.audioFactory = r
            },
            setVolume: function(r) {
              this._volume = r, this._updateVolume()
            },
            mute: function() {
              this._isMuted = !0, this._updateVolume()
            },
            unmute: function() {
              this._isMuted = !1, this._updateVolume()
            },
            getVolume: function() {
              return this._volume
            },
            _updateVolume: function() {
              var r, s = this.audios.length;
              for (r = 0; r < s; r += 1) this.audios[r].volume(this._volume * (this._isMuted ? 0 : 1))
            }
          },
              function() {
                return new e
              }
        }(),
        createTypedArray = function() {
          function e(r, s) {
            var i = 0,
                n = [],
                a;
            switch (r) {
              case "int16":
              case "uint8c":
                a = 1;
                break;
              default:
                a = 1.1;
                break
            }
            for (i = 0; i < s; i += 1) n.push(a);
            return n
          }

          function t(r, s) {
            return r === "float32" ? new Float32Array(s) : r === "int16" ? new Int16Array(s) : r === "uint8c" ? new Uint8ClampedArray(s) : e(r, s)
          }
          return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? t : e
        }();

    function createSizedArray(e) {
      return Array.apply(null, {
        length: e
      })
    }

    function _typeof$6(e) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function(r) {
        return typeof r
      } : _typeof$6 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
      }, _typeof$6(e)
    }
    var subframeEnabled = !0,
        expressionsPlugin = null,
        expressionsInterfaces = null,
        idPrefix$1 = "",
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        bmPow = Math.pow,
        bmSqrt = Math.sqrt,
        bmFloor = Math.floor,
        bmMax = Math.max,
        bmMin = Math.min,
        BMMath = {};
    (function() {
      var e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
          t, r = e.length;
      for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
    })(), BMMath.random = Math.random, BMMath.abs = function(e) {
      var t = _typeof$6(e);
      if (t === "object" && e.length) {
        var r = createSizedArray(e.length),
            s, i = e.length;
        for (s = 0; s < i; s += 1) r[s] = Math.abs(e[s]);
        return r
      }
      return Math.abs(e)
    };
    var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = .5519;

    function styleDiv(e) {
      e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d"
    }

    function BMEnterFrameEvent(e, t, r, s) {
      this.type = e, this.currentTime = t, this.totalTime = r, this.direction = s < 0 ? -1 : 1
    }

    function BMCompleteEvent(e, t) {
      this.type = e, this.direction = t < 0 ? -1 : 1
    }

    function BMCompleteLoopEvent(e, t, r, s) {
      this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = s < 0 ? -1 : 1
    }

    function BMSegmentStartEvent(e, t, r) {
      this.type = e, this.firstFrame = t, this.totalFrames = r
    }

    function BMDestroyEvent(e, t) {
      this.type = e, this.target = t
    }

    function BMRenderFrameErrorEvent(e, t) {
      this.type = "renderFrameError", this.nativeError = e, this.currentTime = t
    }

    function BMConfigErrorEvent(e) {
      this.type = "configError", this.nativeError = e
    }
    var createElementID = function() {
      var e = 0;
      return function() {
        return e += 1, idPrefix$1 + "__lottie_element_" + e
      }
    }();

    function HSVtoRGB(e, t, r) {
      var s, i, n, a, l, o, p, g;
      switch (a = Math.floor(e * 6), l = e * 6 - a, o = r * (1 - t), p = r * (1 - l * t), g = r * (1 - (1 - l) * t), a % 6) {
        case 0:
          s = r, i = g, n = o;
          break;
        case 1:
          s = p, i = r, n = o;
          break;
        case 2:
          s = o, i = r, n = g;
          break;
        case 3:
          s = o, i = p, n = r;
          break;
        case 4:
          s = g, i = o, n = r;
          break;
        case 5:
          s = r, i = o, n = p;
          break
      }
      return [s, i, n]
    }

    function RGBtoHSV(e, t, r) {
      var s = Math.max(e, t, r),
          i = Math.min(e, t, r),
          n = s - i,
          a, l = s === 0 ? 0 : n / s,
          o = s / 255;
      switch (s) {
        case i:
          a = 0;
          break;
        case e:
          a = t - r + n * (t < r ? 6 : 0), a /= 6 * n;
          break;
        case t:
          a = r - e + n * 2, a /= 6 * n;
          break;
        case r:
          a = e - t + n * 4, a /= 6 * n;
          break
      }
      return [a, l, o]
    }

    function addSaturationToRGB(e, t) {
      var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
      return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
    }

    function addBrightnessToRGB(e, t) {
      var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
      return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
    }

    function addHueToRGB(e, t) {
      var r = RGBtoHSV(e[0] * 255, e[1] * 255, e[2] * 255);
      return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
    }
    var rgbToHex = function() {
          var e = [],
              t, r;
          for (t = 0; t < 256; t += 1) r = t.toString(16), e[t] = r.length === 1 ? "0" + r : r;
          return function(s, i, n) {
            return s < 0 && (s = 0), i < 0 && (i = 0), n < 0 && (n = 0), "#" + e[s] + e[i] + e[n]
          }
        }(),
        setSubframeEnabled = function(t) {
          subframeEnabled = !!t
        },
        getSubframeEnabled = function() {
          return subframeEnabled
        },
        setExpressionsPlugin = function(t) {
          expressionsPlugin = t
        },
        getExpressionsPlugin = function() {
          return expressionsPlugin
        },
        setExpressionInterfaces = function(t) {
          expressionsInterfaces = t
        },
        getExpressionInterfaces = function() {
          return expressionsInterfaces
        },
        setDefaultCurveSegments = function(t) {
          defaultCurveSegments = t
        },
        getDefaultCurveSegments = function() {
          return defaultCurveSegments
        },
        setIdPrefix = function(t) {
          idPrefix$1 = t
        };

    function createNS(e) {
      return document.createElementNS(svgNS, e)
    }

    function _typeof$5(e) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function(r) {
        return typeof r
      } : _typeof$5 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
      }, _typeof$5(e)
    }
    var dataManager = function() {
          var e = 1,
              t = [],
              r, s, i = {
                onmessage: function() {},
                postMessage: function(E) {
                  r({
                    data: E
                  })
                }
              },
              n = {
                postMessage: function(E) {
                  i.onmessage({
                    data: E
                  })
                }
              };

          function a(u) {
            if (window.Worker && window.Blob && getWebWorker()) {
              var E = new Blob(["var _workerSelf = self; self.onmessage = ", u.toString()], {
                    type: "text/javascript"
                  }),
                  b = URL.createObjectURL(E);
              return new Worker(b)
            }
            return r = u, i
          }

          function l() {
            s || (s = a(function(E) {
              function b() {
                function M($, P) {
                  var R, C, k = $.length,
                      F, _, D, W;
                  for (C = 0; C < k; C += 1)
                    if (R = $[C], "ks" in R && !R.completed) {
                      if (R.completed = !0, R.hasMask) {
                        var G = R.masksProperties;
                        for (_ = G.length, F = 0; F < _; F += 1)
                          if (G[F].pt.k.i) A(G[F].pt.k);
                          else
                            for (W = G[F].pt.k.length, D = 0; D < W; D += 1) G[F].pt.k[D].s && A(G[F].pt.k[D].s[0]), G[F].pt.k[D].e && A(G[F].pt.k[D].e[0])
                      }
                      R.ty === 0 ? (R.layers = f(R.refId, P), M(R.layers, P)) : R.ty === 4 ? y(R.shapes) : R.ty === 5 && O(R)
                    }
                }

                function m($, P) {
                  if ($) {
                    var R = 0,
                        C = $.length;
                    for (R = 0; R < C; R += 1) $[R].t === 1 && ($[R].data.layers = f($[R].data.refId, P), M($[R].data.layers, P))
                  }
                }

                function d($, P) {
                  for (var R = 0, C = P.length; R < C;) {
                    if (P[R].id === $) return P[R];
                    R += 1
                  }
                  return null
                }

                function f($, P) {
                  var R = d($, P);
                  return R ? R.layers.__used ? JSON.parse(JSON.stringify(R.layers)) : (R.layers.__used = !0, R.layers) : null
                }

                function y($) {
                  var P, R = $.length,
                      C, k;
                  for (P = R - 1; P >= 0; P -= 1)
                    if ($[P].ty === "sh")
                      if ($[P].ks.k.i) A($[P].ks.k);
                      else
                        for (k = $[P].ks.k.length, C = 0; C < k; C += 1) $[P].ks.k[C].s && A($[P].ks.k[C].s[0]), $[P].ks.k[C].e && A($[P].ks.k[C].e[0]);
                    else $[P].ty === "gr" && y($[P].it)
                }

                function A($) {
                  var P, R = $.i.length;
                  for (P = 0; P < R; P += 1) $.i[P][0] += $.v[P][0], $.i[P][1] += $.v[P][1], $.o[P][0] += $.v[P][0], $.o[P][1] += $.v[P][1]
                }

                function T($, P) {
                  var R = P ? P.split(".") : [100, 100, 100];
                  return $[0] > R[0] ? !0 : R[0] > $[0] ? !1 : $[1] > R[1] ? !0 : R[1] > $[1] ? !1 : $[2] > R[2] ? !0 : R[2] > $[2] ? !1 : null
                }
                var I = function() {
                      var $ = [4, 4, 14];

                      function P(C) {
                        var k = C.t.d;
                        C.t.d = {
                          k: [{
                            s: k,
                            t: 0
                          }]
                        }
                      }

                      function R(C) {
                        var k, F = C.length;
                        for (k = 0; k < F; k += 1) C[k].ty === 5 && P(C[k])
                      }
                      return function(C) {
                        if (T($, C.v) && (R(C.layers), C.assets)) {
                          var k, F = C.assets.length;
                          for (k = 0; k < F; k += 1) C.assets[k].layers && R(C.assets[k].layers)
                        }
                      }
                    }(),
                    j = function() {
                      var $ = [4, 7, 99];
                      return function(P) {
                        if (P.chars && !T($, P.v)) {
                          var R, C = P.chars.length;
                          for (R = 0; R < C; R += 1) {
                            var k = P.chars[R];
                            k.data && k.data.shapes && (y(k.data.shapes), k.data.ip = 0, k.data.op = 99999, k.data.st = 0, k.data.sr = 1, k.data.ks = {
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              }
                            }, P.chars[R].t || (k.data.shapes.push({
                              ty: "no"
                            }), k.data.shapes[0].it.push({
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              },
                              sk: {
                                k: 0,
                                a: 0
                              },
                              sa: {
                                k: 0,
                                a: 0
                              },
                              ty: "tr"
                            })))
                          }
                        }
                      }
                    }(),
                    L = function() {
                      var $ = [5, 7, 15];

                      function P(C) {
                        var k = C.t.p;
                        typeof k.a == "number" && (k.a = {
                          a: 0,
                          k: k.a
                        }), typeof k.p == "number" && (k.p = {
                          a: 0,
                          k: k.p
                        }), typeof k.r == "number" && (k.r = {
                          a: 0,
                          k: k.r
                        })
                      }

                      function R(C) {
                        var k, F = C.length;
                        for (k = 0; k < F; k += 1) C[k].ty === 5 && P(C[k])
                      }
                      return function(C) {
                        if (T($, C.v) && (R(C.layers), C.assets)) {
                          var k, F = C.assets.length;
                          for (k = 0; k < F; k += 1) C.assets[k].layers && R(C.assets[k].layers)
                        }
                      }
                    }(),
                    N = function() {
                      var $ = [4, 1, 9];

                      function P(C) {
                        var k, F = C.length,
                            _, D;
                        for (k = 0; k < F; k += 1)
                          if (C[k].ty === "gr") P(C[k].it);
                          else if (C[k].ty === "fl" || C[k].ty === "st")
                            if (C[k].c.k && C[k].c.k[0].i)
                              for (D = C[k].c.k.length, _ = 0; _ < D; _ += 1) C[k].c.k[_].s && (C[k].c.k[_].s[0] /= 255, C[k].c.k[_].s[1] /= 255, C[k].c.k[_].s[2] /= 255, C[k].c.k[_].s[3] /= 255), C[k].c.k[_].e && (C[k].c.k[_].e[0] /= 255, C[k].c.k[_].e[1] /= 255, C[k].c.k[_].e[2] /= 255, C[k].c.k[_].e[3] /= 255);
                            else C[k].c.k[0] /= 255, C[k].c.k[1] /= 255, C[k].c.k[2] /= 255, C[k].c.k[3] /= 255
                      }

                      function R(C) {
                        var k, F = C.length;
                        for (k = 0; k < F; k += 1) C[k].ty === 4 && P(C[k].shapes)
                      }
                      return function(C) {
                        if (T($, C.v) && (R(C.layers), C.assets)) {
                          var k, F = C.assets.length;
                          for (k = 0; k < F; k += 1) C.assets[k].layers && R(C.assets[k].layers)
                        }
                      }
                    }(),
                    V = function() {
                      var $ = [4, 4, 18];

                      function P(C) {
                        var k, F = C.length,
                            _, D;
                        for (k = F - 1; k >= 0; k -= 1)
                          if (C[k].ty === "sh")
                            if (C[k].ks.k.i) C[k].ks.k.c = C[k].closed;
                            else
                              for (D = C[k].ks.k.length, _ = 0; _ < D; _ += 1) C[k].ks.k[_].s && (C[k].ks.k[_].s[0].c = C[k].closed), C[k].ks.k[_].e && (C[k].ks.k[_].e[0].c = C[k].closed);
                          else C[k].ty === "gr" && P(C[k].it)
                      }

                      function R(C) {
                        var k, F, _ = C.length,
                            D, W, G, U;
                        for (F = 0; F < _; F += 1) {
                          if (k = C[F], k.hasMask) {
                            var q = k.masksProperties;
                            for (W = q.length, D = 0; D < W; D += 1)
                              if (q[D].pt.k.i) q[D].pt.k.c = q[D].cl;
                              else
                                for (U = q[D].pt.k.length, G = 0; G < U; G += 1) q[D].pt.k[G].s && (q[D].pt.k[G].s[0].c = q[D].cl), q[D].pt.k[G].e && (q[D].pt.k[G].e[0].c = q[D].cl)
                          }
                          k.ty === 4 && P(k.shapes)
                        }
                      }
                      return function(C) {
                        if (T($, C.v) && (R(C.layers), C.assets)) {
                          var k, F = C.assets.length;
                          for (k = 0; k < F; k += 1) C.assets[k].layers && R(C.assets[k].layers)
                        }
                      }
                    }();

                function B($) {
                  $.__complete || (N($), I($), j($), L($), V($), M($.layers, $.assets), m($.chars, $.assets), $.__complete = !0)
                }

                function O($) {
                  $.t.a.length === 0 && "m" in $.t.p
                }
                var H = {};
                return H.completeData = B, H.checkColors = N, H.checkChars = j, H.checkPathProperties = L, H.checkShapes = V, H.completeLayers = M, H
              }
              if (n.dataManager || (n.dataManager = b()), n.assetLoader || (n.assetLoader = function() {
                function M(d) {
                  var f = d.getResponseHeader("content-type");
                  return f && d.responseType === "json" && f.indexOf("json") !== -1 || d.response && _typeof$5(d.response) === "object" ? d.response : d.response && typeof d.response == "string" ? JSON.parse(d.response) : d.responseText ? JSON.parse(d.responseText) : null
                }

                function m(d, f, y, A) {
                  var T, I = new XMLHttpRequest;
                  try {
                    I.responseType = "json"
                  } catch {}
                  I.onreadystatechange = function() {
                    if (I.readyState === 4)
                      if (I.status === 200) T = M(I), y(T);
                      else try {
                        T = M(I), y(T)
                      } catch (j) {
                        A && A(j)
                      }
                  };
                  try {
                    I.open(["G", "E", "T"].join(""), d, !0)
                  } catch {
                    I.open(["G", "E", "T"].join(""), f + "/" + d, !0)
                  }
                  I.send()
                }
                return {
                  load: m
                }
              }()), E.data.type === "loadAnimation") n.assetLoader.load(E.data.path, E.data.fullPath, function(M) {
                n.dataManager.completeData(M), n.postMessage({
                  id: E.data.id,
                  payload: M,
                  status: "success"
                })
              }, function() {
                n.postMessage({
                  id: E.data.id,
                  status: "error"
                })
              });
              else if (E.data.type === "complete") {
                var x = E.data.animation;
                n.dataManager.completeData(x), n.postMessage({
                  id: E.data.id,
                  payload: x,
                  status: "success"
                })
              } else E.data.type === "loadData" && n.assetLoader.load(E.data.path, E.data.fullPath, function(M) {
                n.postMessage({
                  id: E.data.id,
                  payload: M,
                  status: "success"
                })
              }, function() {
                n.postMessage({
                  id: E.data.id,
                  status: "error"
                })
              })
            }), s.onmessage = function(u) {
              var E = u.data,
                  b = E.id,
                  x = t[b];
              t[b] = null, E.status === "success" ? x.onComplete(E.payload) : x.onError && x.onError()
            })
          }

          function o(u, E) {
            e += 1;
            var b = "processId_" + e;
            return t[b] = {
              onComplete: u,
              onError: E
            }, b
          }

          function p(u, E, b) {
            l();
            var x = o(E, b);
            s.postMessage({
              type: "loadAnimation",
              path: u,
              fullPath: window.location.origin + window.location.pathname,
              id: x
            })
          }

          function g(u, E, b) {
            l();
            var x = o(E, b);
            s.postMessage({
              type: "loadData",
              path: u,
              fullPath: window.location.origin + window.location.pathname,
              id: x
            })
          }

          function S(u, E, b) {
            l();
            var x = o(E, b);
            s.postMessage({
              type: "complete",
              animation: u,
              id: x
            })
          }
          return {
            loadAnimation: p,
            loadData: g,
            completeAnimation: S
          }
        }(),
        ImagePreloader = function() {
          var e = function() {
            var m = createTag("canvas");
            m.width = 1, m.height = 1;
            var d = m.getContext("2d");
            return d.fillStyle = "rgba(0,0,0,0)", d.fillRect(0, 0, 1, 1), m
          }();

          function t() {
            this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
          }

          function r() {
            this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
          }

          function s(m, d, f) {
            var y = "";
            if (m.e) y = m.p;
            else if (d) {
              var A = m.p;
              A.indexOf("images/") !== -1 && (A = A.split("/")[1]), y = d + A
            } else y = f, y += m.u ? m.u : "", y += m.p;
            return y
          }

          function i(m) {
            var d = 0,
                f = setInterval((function() {
                  var y = m.getBBox();
                  (y.width || d > 500) && (this._imageLoaded(), clearInterval(f)), d += 1
                }).bind(this), 50)
          }

          function n(m) {
            var d = s(m, this.assetsPath, this.path),
                f = createNS("image");
            isSafari ? this.testImageLoaded(f) : f.addEventListener("load", this._imageLoaded, !1), f.addEventListener("error", (function() {
              y.img = e, this._imageLoaded()
            }).bind(this), !1), f.setAttributeNS("http://www.w3.org/1999/xlink", "href", d), this._elementHelper.append ? this._elementHelper.append(f) : this._elementHelper.appendChild(f);
            var y = {
              img: f,
              assetData: m
            };
            return y
          }

          function a(m) {
            var d = s(m, this.assetsPath, this.path),
                f = createTag("img");
            f.crossOrigin = "anonymous", f.addEventListener("load", this._imageLoaded, !1), f.addEventListener("error", (function() {
              y.img = e, this._imageLoaded()
            }).bind(this), !1), f.src = d;
            var y = {
              img: f,
              assetData: m
            };
            return y
          }

          function l(m) {
            var d = {
                  assetData: m
                },
                f = s(m, this.assetsPath, this.path);
            return dataManager.loadData(f, (function(y) {
              d.img = y, this._footageLoaded()
            }).bind(this), (function() {
              d.img = {}, this._footageLoaded()
            }).bind(this)), d
          }

          function o(m, d) {
            this.imagesLoadedCb = d;
            var f, y = m.length;
            for (f = 0; f < y; f += 1) m[f].layers || (!m[f].t || m[f].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(m[f]))) : m[f].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(m[f]))))
          }

          function p(m) {
            this.path = m || ""
          }

          function g(m) {
            this.assetsPath = m || ""
          }

          function S(m) {
            for (var d = 0, f = this.images.length; d < f;) {
              if (this.images[d].assetData === m) return this.images[d].img;
              d += 1
            }
            return null
          }

          function u() {
            this.imagesLoadedCb = null, this.images.length = 0
          }

          function E() {
            return this.totalImages === this.loadedAssets
          }

          function b() {
            return this.totalFootages === this.loadedFootagesCount
          }

          function x(m, d) {
            m === "svg" ? (this._elementHelper = d, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
          }

          function M() {
            this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = i.bind(this), this.createFootageData = l.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
          }
          return M.prototype = {
            loadAssets: o,
            setAssetsPath: g,
            setPath: p,
            loadedImages: E,
            loadedFootages: b,
            destroy: u,
            getAsset: S,
            createImgData: a,
            createImageData: n,
            imageLoaded: t,
            footageLoaded: r,
            setCacheType: x
          }, M
        }();

    function BaseEvent() {}
    BaseEvent.prototype = {
      triggerEvent: function(t, r) {
        if (this._cbs[t])
          for (var s = this._cbs[t], i = 0; i < s.length; i += 1) s[i](r)
      },
      addEventListener: function(t, r) {
        return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(r), (function() {
          this.removeEventListener(t, r)
        }).bind(this)
      },
      removeEventListener: function(t, r) {
        if (!r) this._cbs[t] = null;
        else if (this._cbs[t]) {
          for (var s = 0, i = this._cbs[t].length; s < i;) this._cbs[t][s] === r && (this._cbs[t].splice(s, 1), s -= 1, i -= 1), s += 1;
          this._cbs[t].length || (this._cbs[t] = null)
        }
      }
    };
    var markerParser = function() {
          function e(t) {
            for (var r = t.split(`\r
`), s = {}, i, n = 0, a = 0; a < r.length; a += 1) i = r[a].split(":"), i.length === 2 && (s[i[0]] = i[1].trim(), n += 1);
            if (n === 0) throw new Error;
            return s
          }
          return function(t) {
            for (var r = [], s = 0; s < t.length; s += 1) {
              var i = t[s],
                  n = {
                    time: i.tm,
                    duration: i.dr
                  };
              try {
                n.payload = JSON.parse(t[s].cm)
              } catch {
                try {
                  n.payload = e(t[s].cm)
                } catch {
                  n.payload = {
                    name: t[s].cm
                  }
                }
              }
              r.push(n)
            }
            return r
          }
        }(),
        ProjectInterface = function() {
          function e(t) {
            this.compositions.push(t)
          }
          return function() {
            function t(r) {
              for (var s = 0, i = this.compositions.length; s < i;) {
                if (this.compositions[s].data && this.compositions[s].data.nm === r) return this.compositions[s].prepareFrame && this.compositions[s].data.xt && this.compositions[s].prepareFrame(this.currentFrame), this.compositions[s].compInterface;
                s += 1
              }
              return null
            }
            return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
          }
        }(),
        renderers = {},
        registerRenderer = function(t, r) {
          renderers[t] = r
        };

    function getRenderer(e) {
      return renderers[e]
    }

    function getRegisteredRenderer() {
      if (renderers.canvas) return "canvas";
      for (var e in renderers)
        if (renderers[e]) return e;
      return ""
    }

    function _typeof$4(e) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function(r) {
        return typeof r
      } : _typeof$4 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
      }, _typeof$4(e)
    }
    var AnimationItem = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
    };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(e) {
      (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
      var t = "svg";
      e.animType ? t = e.animType : e.renderer && (t = e.renderer);
      var r = getRenderer(t);
      this.renderer = new r(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, e.loop === "" || e.loop === null || e.loop === void 0 || e.loop === !0 ? this.loop = !0 : e.loop === !1 ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = "autoplay" in e ? e.autoplay : !0, this.name = e.name ? e.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(e, "autoloadSegments") ? e.autoloadSegments : !0, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (e.path.lastIndexOf("\\") !== -1 ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError))
    }, AnimationItem.prototype.onSetupError = function() {
      this.trigger("data_failed")
    }, AnimationItem.prototype.setupAnimation = function(e) {
      dataManager.completeAnimation(e, this.configAnimation)
    }, AnimationItem.prototype.setData = function(e, t) {
      t && _typeof$4(t) !== "object" && (t = JSON.parse(t));
      var r = {
            wrapper: e,
            animationData: t
          },
          s = e.attributes;
      r.path = s.getNamedItem("data-animation-path") ? s.getNamedItem("data-animation-path").value : s.getNamedItem("data-bm-path") ? s.getNamedItem("data-bm-path").value : s.getNamedItem("bm-path") ? s.getNamedItem("bm-path").value : "", r.animType = s.getNamedItem("data-anim-type") ? s.getNamedItem("data-anim-type").value : s.getNamedItem("data-bm-type") ? s.getNamedItem("data-bm-type").value : s.getNamedItem("bm-type") ? s.getNamedItem("bm-type").value : s.getNamedItem("data-bm-renderer") ? s.getNamedItem("data-bm-renderer").value : s.getNamedItem("bm-renderer") ? s.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
      var i = s.getNamedItem("data-anim-loop") ? s.getNamedItem("data-anim-loop").value : s.getNamedItem("data-bm-loop") ? s.getNamedItem("data-bm-loop").value : s.getNamedItem("bm-loop") ? s.getNamedItem("bm-loop").value : "";
      i === "false" ? r.loop = !1 : i === "true" ? r.loop = !0 : i !== "" && (r.loop = parseInt(i, 10));
      var n = s.getNamedItem("data-anim-autoplay") ? s.getNamedItem("data-anim-autoplay").value : s.getNamedItem("data-bm-autoplay") ? s.getNamedItem("data-bm-autoplay").value : s.getNamedItem("bm-autoplay") ? s.getNamedItem("bm-autoplay").value : !0;
      r.autoplay = n !== "false", r.name = s.getNamedItem("data-name") ? s.getNamedItem("data-name").value : s.getNamedItem("data-bm-name") ? s.getNamedItem("data-bm-name").value : s.getNamedItem("bm-name") ? s.getNamedItem("bm-name").value : "";
      var a = s.getNamedItem("data-anim-prerender") ? s.getNamedItem("data-anim-prerender").value : s.getNamedItem("data-bm-prerender") ? s.getNamedItem("data-bm-prerender").value : s.getNamedItem("bm-prerender") ? s.getNamedItem("bm-prerender").value : "";
      a === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
    }, AnimationItem.prototype.includeLayers = function(e) {
      e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
      var t = this.animationData.layers,
          r, s = t.length,
          i = e.layers,
          n, a = i.length;
      for (n = 0; n < a; n += 1)
        for (r = 0; r < s;) {
          if (t[r].id === i[n].id) {
            t[r] = i[n];
            break
          }
          r += 1
        }
      if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
        for (s = e.assets.length, r = 0; r < s; r += 1) this.animationData.assets.push(e.assets[r]);
      this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
    }, AnimationItem.prototype.onSegmentComplete = function(e) {
      this.animationData = e;
      var t = getExpressionsPlugin();
      t && t.initExpressions(this), this.loadNextSegment()
    }, AnimationItem.prototype.loadNextSegment = function() {
      var e = this.animationData.segments;
      if (!e || e.length === 0 || !this.autoloadSegments) {
        this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
        return
      }
      var t = e.shift();
      this.timeCompleted = t.time * this.frameRate;
      var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), (function() {
        this.trigger("data_failed")
      }).bind(this))
    }, AnimationItem.prototype.loadSegments = function() {
      var e = this.animationData.segments;
      e || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
    }, AnimationItem.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded()
    }, AnimationItem.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
    }, AnimationItem.prototype.configAnimation = function(e) {
      if (this.renderer) try {
        this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
      } catch (t) {
        this.triggerConfigError(t)
      }
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
    }, AnimationItem.prototype.checkLoaded = function() {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
        this.isLoaded = !0;
        var e = getExpressionsPlugin();
        e && e.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
          this.trigger("DOMLoaded")
        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
      }
    }, AnimationItem.prototype.resize = function(e, t) {
      var r = typeof e == "number" ? e : void 0,
          s = typeof t == "number" ? t : void 0;
      this.renderer.updateContainerSize(r, s)
    }, AnimationItem.prototype.setSubframe = function(e) {
      this.isSubframeEnabled = !!e
    }, AnimationItem.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
    }, AnimationItem.prototype.renderFrame = function() {
      if (!(this.isLoaded === !1 || !this.renderer)) try {
        this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
      } catch (e) {
        this.triggerRenderFrameError(e)
      }
    }, AnimationItem.prototype.play = function(e) {
      e && this.name !== e || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
    }, AnimationItem.prototype.pause = function(e) {
      e && this.name !== e || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
    }, AnimationItem.prototype.togglePause = function(e) {
      e && this.name !== e || (this.isPaused === !0 ? this.play() : this.pause())
    }, AnimationItem.prototype.stop = function(e) {
      e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
    }, AnimationItem.prototype.getMarkerData = function(e) {
      for (var t, r = 0; r < this.markers.length; r += 1)
        if (t = this.markers[r], t.payload && t.payload.name === e) return t;
      return null
    }, AnimationItem.prototype.goToAndStop = function(e, t, r) {
      if (!(r && this.name !== r)) {
        var s = Number(e);
        if (isNaN(s)) {
          var i = this.getMarkerData(e);
          i && this.goToAndStop(i.time, !0)
        } else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
        this.pause()
      }
    }, AnimationItem.prototype.goToAndPlay = function(e, t, r) {
      if (!(r && this.name !== r)) {
        var s = Number(e);
        if (isNaN(s)) {
          var i = this.getMarkerData(e);
          i && (i.duration ? this.playSegments([i.time, i.time + i.duration], !0) : this.goToAndStop(i.time, !0))
        } else this.goToAndStop(s, t, r);
        this.play()
      }
    }, AnimationItem.prototype.advanceTime = function(e) {
      if (!(this.isPaused === !0 || this.isLoaded === !1)) {
        var t = this.currentRawFrame + e * this.frameModifier,
            r = !1;
        t >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : t < 0 ? this.checkSegments(t % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (r = !0, t = 0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
      }
    }, AnimationItem.prototype.adjustSegment = function(e, t) {
      this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
    }, AnimationItem.prototype.setSegment = function(e, t) {
      var r = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0)
    }, AnimationItem.prototype.playSegments = function(e, t) {
      if (t && (this.segments.length = 0), _typeof$4(e[0]) === "object") {
        var r, s = e.length;
        for (r = 0; r < s; r += 1) this.segments.push(e[r])
      } else this.segments.push(e);
      this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
    }, AnimationItem.prototype.resetSegments = function(e) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
    }, AnimationItem.prototype.checkSegments = function(e) {
      return this.segments.length ? (this.adjustSegment(this.segments.shift(), e), !0) : !1
    }, AnimationItem.prototype.destroy = function(e) {
      e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(e) {
      this.currentRawFrame = e, this.gotoFrame()
    }, AnimationItem.prototype.setSpeed = function(e) {
      this.playSpeed = e, this.updaFrameModifier()
    }, AnimationItem.prototype.setDirection = function(e) {
      this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
    }, AnimationItem.prototype.setLoop = function(e) {
      this.loop = e
    }, AnimationItem.prototype.setVolume = function(e, t) {
      t && this.name !== t || this.audioController.setVolume(e)
    }, AnimationItem.prototype.getVolume = function() {
      return this.audioController.getVolume()
    }, AnimationItem.prototype.mute = function(e) {
      e && this.name !== e || this.audioController.mute()
    }, AnimationItem.prototype.unmute = function(e) {
      e && this.name !== e || this.audioController.unmute()
    }, AnimationItem.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
    }, AnimationItem.prototype.getPath = function() {
      return this.path
    }, AnimationItem.prototype.getAssetsPath = function(e) {
      var t = "";
      if (e.e) t = e.p;
      else if (this.assetsPath) {
        var r = e.p;
        r.indexOf("images/") !== -1 && (r = r.split("/")[1]), t = this.assetsPath + r
      } else t = this.path, t += e.u ? e.u : "", t += e.p;
      return t
    }, AnimationItem.prototype.getAssetData = function(e) {
      for (var t = 0, r = this.assets.length; t < r;) {
        if (e === this.assets[t].id) return this.assets[t];
        t += 1
      }
      return null
    }, AnimationItem.prototype.hide = function() {
      this.renderer.hide()
    }, AnimationItem.prototype.show = function() {
      this.renderer.show()
    }, AnimationItem.prototype.getDuration = function(e) {
      return e ? this.totalFrames : this.totalFrames / this.frameRate
    }, AnimationItem.prototype.updateDocumentData = function(e, t, r) {
      try {
        var s = this.renderer.getElementByPath(e);
        s.updateDocumentData(t, r)
      } catch {}
    }, AnimationItem.prototype.trigger = function(e) {
      if (this._cbs && this._cbs[e]) switch (e) {
        case "enterFrame":
          this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
          break;
        case "drawnFrame":
          this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
          break;
        case "loopComplete":
          this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
          break;
        case "complete":
          this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
          break;
        case "segmentStart":
          this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
          break;
        case "destroy":
          this.triggerEvent(e, new BMDestroyEvent(e, this));
          break;
        default:
          this.triggerEvent(e)
      }
      e === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), e === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), e === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), e === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), e === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
    }, AnimationItem.prototype.triggerRenderFrameError = function(e) {
      var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
      this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
    }, AnimationItem.prototype.triggerConfigError = function(e) {
      var t = new BMConfigErrorEvent(e, this.currentFrame);
      this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
    };
    var animationManager = function() {
          var e = {},
              t = [],
              r = 0,
              s = 0,
              i = 0,
              n = !0,
              a = !1;

          function l(P) {
            for (var R = 0, C = P.target; R < s;) t[R].animation === C && (t.splice(R, 1), R -= 1, s -= 1, C.isPaused || S()), R += 1
          }

          function o(P, R) {
            if (!P) return null;
            for (var C = 0; C < s;) {
              if (t[C].elem === P && t[C].elem !== null) return t[C].animation;
              C += 1
            }
            var k = new AnimationItem;
            return u(k, P), k.setData(P, R), k
          }

          function p() {
            var P, R = t.length,
                C = [];
            for (P = 0; P < R; P += 1) C.push(t[P].animation);
            return C
          }

          function g() {
            i += 1, N()
          }

          function S() {
            i -= 1
          }

          function u(P, R) {
            P.addEventListener("destroy", l), P.addEventListener("_active", g), P.addEventListener("_idle", S), t.push({
              elem: R,
              animation: P
            }), s += 1
          }

          function E(P) {
            var R = new AnimationItem;
            return u(R, null), R.setParams(P), R
          }

          function b(P, R) {
            var C;
            for (C = 0; C < s; C += 1) t[C].animation.setSpeed(P, R)
          }

          function x(P, R) {
            var C;
            for (C = 0; C < s; C += 1) t[C].animation.setDirection(P, R)
          }

          function M(P) {
            var R;
            for (R = 0; R < s; R += 1) t[R].animation.play(P)
          }

          function m(P) {
            var R = P - r,
                C;
            for (C = 0; C < s; C += 1) t[C].animation.advanceTime(R);
            r = P, i && !a ? window.requestAnimationFrame(m) : n = !0
          }

          function d(P) {
            r = P, window.requestAnimationFrame(m)
          }

          function f(P) {
            var R;
            for (R = 0; R < s; R += 1) t[R].animation.pause(P)
          }

          function y(P, R, C) {
            var k;
            for (k = 0; k < s; k += 1) t[k].animation.goToAndStop(P, R, C)
          }

          function A(P) {
            var R;
            for (R = 0; R < s; R += 1) t[R].animation.stop(P)
          }

          function T(P) {
            var R;
            for (R = 0; R < s; R += 1) t[R].animation.togglePause(P)
          }

          function I(P) {
            var R;
            for (R = s - 1; R >= 0; R -= 1) t[R].animation.destroy(P)
          }

          function j(P, R, C) {
            var k = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                F, _ = k.length;
            for (F = 0; F < _; F += 1) C && k[F].setAttribute("data-bm-type", C), o(k[F], P);
            if (R && _ === 0) {
              C || (C = "svg");
              var D = document.getElementsByTagName("body")[0];
              D.innerText = "";
              var W = createTag("div");
              W.style.width = "100%", W.style.height = "100%", W.setAttribute("data-bm-type", C), D.appendChild(W), o(W, P)
            }
          }

          function L() {
            var P;
            for (P = 0; P < s; P += 1) t[P].animation.resize()
          }

          function N() {
            !a && i && n && (window.requestAnimationFrame(d), n = !1)
          }

          function V() {
            a = !0
          }

          function B() {
            a = !1, N()
          }

          function O(P, R) {
            var C;
            for (C = 0; C < s; C += 1) t[C].animation.setVolume(P, R)
          }

          function H(P) {
            var R;
            for (R = 0; R < s; R += 1) t[R].animation.mute(P)
          }

          function $(P) {
            var R;
            for (R = 0; R < s; R += 1) t[R].animation.unmute(P)
          }
          return e.registerAnimation = o, e.loadAnimation = E, e.setSpeed = b, e.setDirection = x, e.play = M, e.pause = f, e.stop = A, e.togglePause = T, e.searchAnimations = j, e.resize = L, e.goToAndStop = y, e.destroy = I, e.freeze = V, e.unfreeze = B, e.setVolume = O, e.mute = H, e.unmute = $, e.getRegisteredAnimations = p, e
        }(),
        BezierFactory = function() {
          var e = {};
          e.getBezierEasing = r;
          var t = {};

          function r(d, f, y, A, T) {
            var I = T || ("bez_" + d + "_" + f + "_" + y + "_" + A).replace(/\./g, "p");
            if (t[I]) return t[I];
            var j = new m([d, f, y, A]);
            return t[I] = j, j
          }
          var s = 4,
              i = .001,
              n = 1e-7,
              a = 10,
              l = 11,
              o = 1 / (l - 1),
              p = typeof Float32Array == "function";

          function g(d, f) {
            return 1 - 3 * f + 3 * d
          }

          function S(d, f) {
            return 3 * f - 6 * d
          }

          function u(d) {
            return 3 * d
          }

          function E(d, f, y) {
            return ((g(f, y) * d + S(f, y)) * d + u(f)) * d
          }

          function b(d, f, y) {
            return 3 * g(f, y) * d * d + 2 * S(f, y) * d + u(f)
          }

          function x(d, f, y, A, T) {
            var I, j, L = 0;
            do j = f + (y - f) / 2, I = E(j, A, T) - d, I > 0 ? y = j : f = j; while (Math.abs(I) > n && ++L < a);
            return j
          }

          function M(d, f, y, A) {
            for (var T = 0; T < s; ++T) {
              var I = b(f, y, A);
              if (I === 0) return f;
              var j = E(f, y, A) - d;
              f -= j / I
            }
            return f
          }

          function m(d) {
            this._p = d, this._mSampleValues = p ? new Float32Array(l) : new Array(l), this._precomputed = !1, this.get = this.get.bind(this)
          }
          return m.prototype = {
            get: function(f) {
              var y = this._p[0],
                  A = this._p[1],
                  T = this._p[2],
                  I = this._p[3];
              return this._precomputed || this._precompute(), y === A && T === I ? f : f === 0 ? 0 : f === 1 ? 1 : E(this._getTForX(f), A, I)
            },
            _precompute: function() {
              var f = this._p[0],
                  y = this._p[1],
                  A = this._p[2],
                  T = this._p[3];
              this._precomputed = !0, (f !== y || A !== T) && this._calcSampleValues()
            },
            _calcSampleValues: function() {
              for (var f = this._p[0], y = this._p[2], A = 0; A < l; ++A) this._mSampleValues[A] = E(A * o, f, y)
            },
            _getTForX: function(f) {
              for (var y = this._p[0], A = this._p[2], T = this._mSampleValues, I = 0, j = 1, L = l - 1; j !== L && T[j] <= f; ++j) I += o;
              --j;
              var N = (f - T[j]) / (T[j + 1] - T[j]),
                  V = I + N * o,
                  B = b(V, y, A);
              return B >= i ? M(f, V, y, A) : B === 0 ? V : x(f, I, I + o, y, A)
            }
          }, e
        }(),
        pooling = function() {
          function e(t) {
            return t.concat(createSizedArray(t.length))
          }
          return {
            double: e
          }
        }(),
        poolFactory = function() {
          return function(e, t, r) {
            var s = 0,
                i = e,
                n = createSizedArray(i),
                a = {
                  newElement: l,
                  release: o
                };

            function l() {
              var p;
              return s ? (s -= 1, p = n[s]) : p = t(), p
            }

            function o(p) {
              s === i && (n = pooling.double(n), i *= 2), r && r(p), n[s] = p, s += 1
            }
            return a
          }
        }(),
        bezierLengthPool = function() {
          function e() {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments())
            }
          }
          return poolFactory(8, e)
        }(),
        segmentsLengthPool = function() {
          function e() {
            return {
              lengths: [],
              totalLength: 0
            }
          }

          function t(r) {
            var s, i = r.lengths.length;
            for (s = 0; s < i; s += 1) bezierLengthPool.release(r.lengths[s]);
            r.lengths.length = 0
          }
          return poolFactory(8, e, t)
        }();

    function bezFunction() {
      var e = Math;

      function t(u, E, b, x, M, m) {
        var d = u * x + E * M + b * m - M * x - m * u - b * E;
        return d > -.001 && d < .001
      }

      function r(u, E, b, x, M, m, d, f, y) {
        if (b === 0 && m === 0 && y === 0) return t(u, E, x, M, d, f);
        var A = e.sqrt(e.pow(x - u, 2) + e.pow(M - E, 2) + e.pow(m - b, 2)),
            T = e.sqrt(e.pow(d - u, 2) + e.pow(f - E, 2) + e.pow(y - b, 2)),
            I = e.sqrt(e.pow(d - x, 2) + e.pow(f - M, 2) + e.pow(y - m, 2)),
            j;
        return A > T ? A > I ? j = A - T - I : j = I - T - A : I > T ? j = I - T - A : j = T - A - I, j > -1e-4 && j < 1e-4
      }
      var s = function() {
        return function(u, E, b, x) {
          var M = getDefaultCurveSegments(),
              m, d, f, y, A, T = 0,
              I, j = [],
              L = [],
              N = bezierLengthPool.newElement();
          for (f = b.length, m = 0; m < M; m += 1) {
            for (A = m / (M - 1), I = 0, d = 0; d < f; d += 1) y = bmPow(1 - A, 3) * u[d] + 3 * bmPow(1 - A, 2) * A * b[d] + 3 * (1 - A) * bmPow(A, 2) * x[d] + bmPow(A, 3) * E[d], j[d] = y, L[d] !== null && (I += bmPow(j[d] - L[d], 2)), L[d] = j[d];
            I && (I = bmSqrt(I), T += I), N.percents[m] = A, N.lengths[m] = T
          }
          return N.addedLength = T, N
        }
      }();

      function i(u) {
        var E = segmentsLengthPool.newElement(),
            b = u.c,
            x = u.v,
            M = u.o,
            m = u.i,
            d, f = u._length,
            y = E.lengths,
            A = 0;
        for (d = 0; d < f - 1; d += 1) y[d] = s(x[d], x[d + 1], M[d], m[d + 1]), A += y[d].addedLength;
        return b && f && (y[d] = s(x[d], x[0], M[d], m[0]), A += y[d].addedLength), E.totalLength = A, E
      }

      function n(u) {
        this.segmentLength = 0, this.points = new Array(u)
      }

      function a(u, E) {
        this.partialLength = u, this.point = E
      }
      var l = function() {
        var u = {};
        return function(E, b, x, M) {
          var m = (E[0] + "_" + E[1] + "_" + b[0] + "_" + b[1] + "_" + x[0] + "_" + x[1] + "_" + M[0] + "_" + M[1]).replace(/\./g, "p");
          if (!u[m]) {
            var d = getDefaultCurveSegments(),
                f, y, A, T, I, j = 0,
                L, N, V = null;
            E.length === 2 && (E[0] !== b[0] || E[1] !== b[1]) && t(E[0], E[1], b[0], b[1], E[0] + x[0], E[1] + x[1]) && t(E[0], E[1], b[0], b[1], b[0] + M[0], b[1] + M[1]) && (d = 2);
            var B = new n(d);
            for (A = x.length, f = 0; f < d; f += 1) {
              for (N = createSizedArray(A), I = f / (d - 1), L = 0, y = 0; y < A; y += 1) T = bmPow(1 - I, 3) * E[y] + 3 * bmPow(1 - I, 2) * I * (E[y] + x[y]) + 3 * (1 - I) * bmPow(I, 2) * (b[y] + M[y]) + bmPow(I, 3) * b[y], N[y] = T, V !== null && (L += bmPow(N[y] - V[y], 2));
              L = bmSqrt(L), j += L, B.points[f] = new a(L, N), V = N
            }
            B.segmentLength = j, u[m] = B
          }
          return u[m]
        }
      }();

      function o(u, E) {
        var b = E.percents,
            x = E.lengths,
            M = b.length,
            m = bmFloor((M - 1) * u),
            d = u * E.addedLength,
            f = 0;
        if (m === M - 1 || m === 0 || d === x[m]) return b[m];
        for (var y = x[m] > d ? -1 : 1, A = !0; A;)
          if (x[m] <= d && x[m + 1] > d ? (f = (d - x[m]) / (x[m + 1] - x[m]), A = !1) : m += y, m < 0 || m >= M - 1) {
            if (m === M - 1) return b[m];
            A = !1
          } return b[m] + (b[m + 1] - b[m]) * f
      }

      function p(u, E, b, x, M, m) {
        var d = o(M, m),
            f = 1 - d,
            y = e.round((f * f * f * u[0] + (d * f * f + f * d * f + f * f * d) * b[0] + (d * d * f + f * d * d + d * f * d) * x[0] + d * d * d * E[0]) * 1e3) / 1e3,
            A = e.round((f * f * f * u[1] + (d * f * f + f * d * f + f * f * d) * b[1] + (d * d * f + f * d * d + d * f * d) * x[1] + d * d * d * E[1]) * 1e3) / 1e3;
        return [y, A]
      }
      var g = createTypedArray("float32", 8);

      function S(u, E, b, x, M, m, d) {
        M < 0 ? M = 0 : M > 1 && (M = 1);
        var f = o(M, d);
        m = m > 1 ? 1 : m;
        var y = o(m, d),
            A, T = u.length,
            I = 1 - f,
            j = 1 - y,
            L = I * I * I,
            N = f * I * I * 3,
            V = f * f * I * 3,
            B = f * f * f,
            O = I * I * j,
            H = f * I * j + I * f * j + I * I * y,
            $ = f * f * j + I * f * y + f * I * y,
            P = f * f * y,
            R = I * j * j,
            C = f * j * j + I * y * j + I * j * y,
            k = f * y * j + I * y * y + f * j * y,
            F = f * y * y,
            _ = j * j * j,
            D = y * j * j + j * y * j + j * j * y,
            W = y * y * j + j * y * y + y * j * y,
            G = y * y * y;
        for (A = 0; A < T; A += 1) g[A * 4] = e.round((L * u[A] + N * b[A] + V * x[A] + B * E[A]) * 1e3) / 1e3, g[A * 4 + 1] = e.round((O * u[A] + H * b[A] + $ * x[A] + P * E[A]) * 1e3) / 1e3, g[A * 4 + 2] = e.round((R * u[A] + C * b[A] + k * x[A] + F * E[A]) * 1e3) / 1e3, g[A * 4 + 3] = e.round((_ * u[A] + D * b[A] + W * x[A] + G * E[A]) * 1e3) / 1e3;
        return g
      }
      return {
        getSegmentsLength: i,
        getNewSegment: S,
        getPointInSegment: p,
        buildBezierData: l,
        pointOnLine2D: t,
        pointOnLine3D: r
      }
    }
    var bez = bezFunction(),
        initFrame = initialDefaultFrame,
        mathAbs = Math.abs;

    function interpolateValue(e, t) {
      var r = this.offsetTime,
          s;
      this.propType === "multidimensional" && (s = createTypedArray("float32", this.pv.length));
      for (var i = t.lastIndex, n = i, a = this.keyframes.length - 1, l = !0, o, p, g; l;) {
        if (o = this.keyframes[n], p = this.keyframes[n + 1], n === a - 1 && e >= p.t - r) {
          o.h && (o = p), i = 0;
          break
        }
        if (p.t - r > e) {
          i = n;
          break
        }
        n < a - 1 ? n += 1 : (i = 0, l = !1)
      }
      g = this.keyframesMetadata[n] || {};
      var S, u, E, b, x, M, m = p.t - r,
          d = o.t - r,
          f;
      if (o.to) {
        g.bezierData || (g.bezierData = bez.buildBezierData(o.s, p.s || o.e, o.to, o.ti));
        var y = g.bezierData;
        if (e >= m || e < d) {
          var A = e >= m ? y.points.length - 1 : 0;
          for (u = y.points[A].point.length, S = 0; S < u; S += 1) s[S] = y.points[A].point[S]
        } else {
          g.__fnct ? M = g.__fnct : (M = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, g.__fnct = M), E = M((e - d) / (m - d));
          var T = y.segmentLength * E,
              I, j = t.lastFrame < e && t._lastKeyframeIndex === n ? t._lastAddedLength : 0;
          for (x = t.lastFrame < e && t._lastKeyframeIndex === n ? t._lastPoint : 0, l = !0, b = y.points.length; l;) {
            if (j += y.points[x].partialLength, T === 0 || E === 0 || x === y.points.length - 1) {
              for (u = y.points[x].point.length, S = 0; S < u; S += 1) s[S] = y.points[x].point[S];
              break
            } else if (T >= j && T < j + y.points[x + 1].partialLength) {
              for (I = (T - j) / y.points[x + 1].partialLength, u = y.points[x].point.length, S = 0; S < u; S += 1) s[S] = y.points[x].point[S] + (y.points[x + 1].point[S] - y.points[x].point[S]) * I;
              break
            }
            x < b - 1 ? x += 1 : l = !1
          }
          t._lastPoint = x, t._lastAddedLength = j - y.points[x].partialLength, t._lastKeyframeIndex = n
        }
      } else {
        var L, N, V, B, O;
        if (a = o.s.length, f = p.s || o.e, this.sh && o.h !== 1)
          if (e >= m) s[0] = f[0], s[1] = f[1], s[2] = f[2];
          else if (e <= d) s[0] = o.s[0], s[1] = o.s[1], s[2] = o.s[2];
          else {
            var H = createQuaternion(o.s),
                $ = createQuaternion(f),
                P = (e - d) / (m - d);
            quaternionToEuler(s, slerp(H, $, P))
          } else
          for (n = 0; n < a; n += 1) o.h !== 1 && (e >= m ? E = 1 : e < d ? E = 0 : (o.o.x.constructor === Array ? (g.__fnct || (g.__fnct = []), g.__fnct[n] ? M = g.__fnct[n] : (L = o.o.x[n] === void 0 ? o.o.x[0] : o.o.x[n], N = o.o.y[n] === void 0 ? o.o.y[0] : o.o.y[n], V = o.i.x[n] === void 0 ? o.i.x[0] : o.i.x[n], B = o.i.y[n] === void 0 ? o.i.y[0] : o.i.y[n], M = BezierFactory.getBezierEasing(L, N, V, B).get, g.__fnct[n] = M)) : g.__fnct ? M = g.__fnct : (L = o.o.x, N = o.o.y, V = o.i.x, B = o.i.y, M = BezierFactory.getBezierEasing(L, N, V, B).get, o.keyframeMetadata = M), E = M((e - d) / (m - d)))), f = p.s || o.e, O = o.h === 1 ? o.s[n] : o.s[n] + (f[n] - o.s[n]) * E, this.propType === "multidimensional" ? s[n] = O : s = O
      }
      return t.lastIndex = i, s
    }

    function slerp(e, t, r) {
      var s = [],
          i = e[0],
          n = e[1],
          a = e[2],
          l = e[3],
          o = t[0],
          p = t[1],
          g = t[2],
          S = t[3],
          u, E, b, x, M;
      return E = i * o + n * p + a * g + l * S, E < 0 && (E = -E, o = -o, p = -p, g = -g, S = -S), 1 - E > 1e-6 ? (u = Math.acos(E), b = Math.sin(u), x = Math.sin((1 - r) * u) / b, M = Math.sin(r * u) / b) : (x = 1 - r, M = r), s[0] = x * i + M * o, s[1] = x * n + M * p, s[2] = x * a + M * g, s[3] = x * l + M * S, s
    }

    function quaternionToEuler(e, t) {
      var r = t[0],
          s = t[1],
          i = t[2],
          n = t[3],
          a = Math.atan2(2 * s * n - 2 * r * i, 1 - 2 * s * s - 2 * i * i),
          l = Math.asin(2 * r * s + 2 * i * n),
          o = Math.atan2(2 * r * n - 2 * s * i, 1 - 2 * r * r - 2 * i * i);
      e[0] = a / degToRads, e[1] = l / degToRads, e[2] = o / degToRads
    }

    function createQuaternion(e) {
      var t = e[0] * degToRads,
          r = e[1] * degToRads,
          s = e[2] * degToRads,
          i = Math.cos(t / 2),
          n = Math.cos(r / 2),
          a = Math.cos(s / 2),
          l = Math.sin(t / 2),
          o = Math.sin(r / 2),
          p = Math.sin(s / 2),
          g = i * n * a - l * o * p,
          S = l * o * a + i * n * p,
          u = l * n * a + i * o * p,
          E = i * o * a - l * n * p;
      return [S, u, E, g]
    }

    function getValueAtCurrentTime() {
      var e = this.comp.renderedFrame - this.offsetTime,
          t = this.keyframes[0].t - this.offsetTime,
          r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      if (!(e === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < t && e < t))) {
        this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var s = this.interpolateValue(e, this._caching);
        this.pv = s
      }
      return this._caching.lastFrame = e, this.pv
    }

    function setVValue(e) {
      var t;
      if (this.propType === "unidimensional") t = e * this.mult, mathAbs(this.v - t) > 1e-5 && (this.v = t, this._mdf = !0);
      else
        for (var r = 0, s = this.v.length; r < s;) t = e[r] * this.mult, mathAbs(this.v[r] - t) > 1e-5 && (this.v[r] = t, this._mdf = !0), r += 1
    }

    function processEffectsSequence() {
      if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
        if (this.lock) {
          this.setVValue(this.pv);
          return
        }
        this.lock = !0, this._mdf = this._isFirstFrame;
        var e, t = this.effectsSequence.length,
            r = this.kf ? this.pv : this.data.k;
        for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
        this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
      }
    }

    function addEffect(e) {
      this.effectsSequence.push(e), this.container.addDynamicProperty(this)
    }

    function ValueProperty(e, t, r, s) {
      this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = s, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
    }

    function MultiDimensionalProperty(e, t, r, s) {
      this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = s, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
      var i, n = t.k.length;
      for (this.v = createTypedArray("float32", n), this.pv = createTypedArray("float32", n), this.vel = createTypedArray("float32", n), i = 0; i < n; i += 1) this.v[i] = t.k[i] * this.mult, this.pv[i] = t.k[i];
      this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
    }

    function KeyframedValueProperty(e, t, r, s) {
      this.propType = "unidimensional", this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
        lastFrame: initFrame,
        lastIndex: 0,
        value: 0,
        _lastKeyframeIndex: -1
      }, this.k = !0, this.kf = !0, this.data = t, this.mult = r || 1, this.elem = e, this.container = s, this.comp = e.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
    }

    function KeyframedMultidimensionalProperty(e, t, r, s) {
      this.propType = "multidimensional";
      var i, n = t.k.length,
          a, l, o, p;
      for (i = 0; i < n - 1; i += 1) t.k[i].to && t.k[i].s && t.k[i + 1] && t.k[i + 1].s && (a = t.k[i].s, l = t.k[i + 1].s, o = t.k[i].to, p = t.k[i].ti, (a.length === 2 && !(a[0] === l[0] && a[1] === l[1]) && bez.pointOnLine2D(a[0], a[1], l[0], l[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], l[0], l[1], l[0] + p[0], l[1] + p[1]) || a.length === 3 && !(a[0] === l[0] && a[1] === l[1] && a[2] === l[2]) && bez.pointOnLine3D(a[0], a[1], a[2], l[0], l[1], l[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], l[0], l[1], l[2], l[0] + p[0], l[1] + p[1], l[2] + p[2])) && (t.k[i].to = null, t.k[i].ti = null), a[0] === l[0] && a[1] === l[1] && o[0] === 0 && o[1] === 0 && p[0] === 0 && p[1] === 0 && (a.length === 2 || a[2] === l[2] && o[2] === 0 && p[2] === 0) && (t.k[i].to = null, t.k[i].ti = null));
      this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = e, this.container = s, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
      var g = t.k[0].s.length;
      for (this.v = createTypedArray("float32", g), this.pv = createTypedArray("float32", g), i = 0; i < g; i += 1) this.v[i] = initFrame, this.pv[i] = initFrame;
      this._caching = {
        lastFrame: initFrame,
        lastIndex: 0,
        value: createTypedArray("float32", g)
      }, this.addEffect = addEffect
    }
    var PropertyFactory = function() {
      function e(r, s, i, n, a) {
        s.sid && (s = r.globalData.slotManager.getProp(s));
        var l;
        if (!s.k.length) l = new ValueProperty(r, s, n, a);
        else if (typeof s.k[0] == "number") l = new MultiDimensionalProperty(r, s, n, a);
        else switch (i) {
            case 0:
              l = new KeyframedValueProperty(r, s, n, a);
              break;
            case 1:
              l = new KeyframedMultidimensionalProperty(r, s, n, a);
              break
          }
        return l.effectsSequence.length && a.addDynamicProperty(l), l
      }
      var t = {
        getProp: e
      };
      return t
    }();

    function DynamicPropertyContainer() {}
    DynamicPropertyContainer.prototype = {
      addDynamicProperty: function(t) {
        this.dynamicProperties.indexOf(t) === -1 && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
      },
      iterateDynamicProperties: function() {
        this._mdf = !1;
        var t, r = this.dynamicProperties.length;
        for (t = 0; t < r; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
      },
      initDynamicPropertyContainer: function(t) {
        this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
      }
    };
    var pointPool = function() {
      function e() {
        return createTypedArray("float32", 2)
      }
      return poolFactory(8, e)
    }();

    function ShapePath() {
      this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
    }
    ShapePath.prototype.setPathData = function(e, t) {
      this.c = e, this.setLength(t);
      for (var r = 0; r < t;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
    }, ShapePath.prototype.setLength = function(e) {
      for (; this._maxLength < e;) this.doubleArrayLength();
      this._length = e
    }, ShapePath.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
    }, ShapePath.prototype.setXYAt = function(e, t, r, s, i) {
      var n;
      switch (this._length = Math.max(this._length, s + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
        case "v":
          n = this.v;
          break;
        case "i":
          n = this.i;
          break;
        case "o":
          n = this.o;
          break;
        default:
          n = [];
          break
      }(!n[s] || n[s] && !i) && (n[s] = pointPool.newElement()), n[s][0] = e, n[s][1] = t
    }, ShapePath.prototype.setTripleAt = function(e, t, r, s, i, n, a, l) {
      this.setXYAt(e, t, "v", a, l), this.setXYAt(r, s, "o", a, l), this.setXYAt(i, n, "i", a, l)
    }, ShapePath.prototype.reverse = function() {
      var e = new ShapePath;
      e.setPathData(this.c, this._length);
      var t = this.v,
          r = this.o,
          s = this.i,
          i = 0;
      this.c && (e.setTripleAt(t[0][0], t[0][1], s[0][0], s[0][1], r[0][0], r[0][1], 0, !1), i = 1);
      var n = this._length - 1,
          a = this._length,
          l;
      for (l = i; l < a; l += 1) e.setTripleAt(t[n][0], t[n][1], s[n][0], s[n][1], r[n][0], r[n][1], l, !1), n -= 1;
      return e
    }, ShapePath.prototype.length = function() {
      return this._length
    };
    var shapePool = function() {
      function e() {
        return new ShapePath
      }

      function t(i) {
        var n = i._length,
            a;
        for (a = 0; a < n; a += 1) pointPool.release(i.v[a]), pointPool.release(i.i[a]), pointPool.release(i.o[a]), i.v[a] = null, i.i[a] = null, i.o[a] = null;
        i._length = 0, i.c = !1
      }

      function r(i) {
        var n = s.newElement(),
            a, l = i._length === void 0 ? i.v.length : i._length;
        for (n.setLength(l), n.c = i.c, a = 0; a < l; a += 1) n.setTripleAt(i.v[a][0], i.v[a][1], i.o[a][0], i.o[a][1], i.i[a][0], i.i[a][1], a);
        return n
      }
      var s = poolFactory(4, e, t);
      return s.clone = r, s
    }();

    function ShapeCollection() {
      this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
    }
    ShapeCollection.prototype.addShape = function(e) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
    }, ShapeCollection.prototype.releaseShapes = function() {
      var e;
      for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
      this._length = 0
    };
    var shapeCollectionPool = function() {
          var e = {
                newShapeCollection: i,
                release: n
              },
              t = 0,
              r = 4,
              s = createSizedArray(r);

          function i() {
            var a;
            return t ? (t -= 1, a = s[t]) : a = new ShapeCollection, a
          }

          function n(a) {
            var l, o = a._length;
            for (l = 0; l < o; l += 1) shapePool.release(a.shapes[l]);
            a._length = 0, t === r && (s = pooling.double(s), r *= 2), s[t] = a, t += 1
          }
          return e
        }(),
        ShapePropertyFactory = function() {
          var e = -999999;

          function t(m, d, f) {
            var y = f.lastIndex,
                A, T, I, j, L, N, V, B, O, H = this.keyframes;
            if (m < H[0].t - this.offsetTime) A = H[0].s[0], I = !0, y = 0;
            else if (m >= H[H.length - 1].t - this.offsetTime) A = H[H.length - 1].s ? H[H.length - 1].s[0] : H[H.length - 2].e[0], I = !0;
            else {
              for (var $ = y, P = H.length - 1, R = !0, C, k, F; R && (C = H[$], k = H[$ + 1], !(k.t - this.offsetTime > m));) $ < P - 1 ? $ += 1 : R = !1;
              if (F = this.keyframesMetadata[$] || {}, I = C.h === 1, y = $, !I) {
                if (m >= k.t - this.offsetTime) B = 1;
                else if (m < C.t - this.offsetTime) B = 0;
                else {
                  var _;
                  F.__fnct ? _ = F.__fnct : (_ = BezierFactory.getBezierEasing(C.o.x, C.o.y, C.i.x, C.i.y).get, F.__fnct = _), B = _((m - (C.t - this.offsetTime)) / (k.t - this.offsetTime - (C.t - this.offsetTime)))
                }
                T = k.s ? k.s[0] : C.e[0]
              }
              A = C.s[0]
            }
            for (N = d._length, V = A.i[0].length, f.lastIndex = y, j = 0; j < N; j += 1)
              for (L = 0; L < V; L += 1) O = I ? A.i[j][L] : A.i[j][L] + (T.i[j][L] - A.i[j][L]) * B, d.i[j][L] = O, O = I ? A.o[j][L] : A.o[j][L] + (T.o[j][L] - A.o[j][L]) * B, d.o[j][L] = O, O = I ? A.v[j][L] : A.v[j][L] + (T.v[j][L] - A.v[j][L]) * B, d.v[j][L] = O
          }

          function r() {
            var m = this.comp.renderedFrame - this.offsetTime,
                d = this.keyframes[0].t - this.offsetTime,
                f = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                y = this._caching.lastFrame;
            return y !== e && (y < d && m < d || y > f && m > f) || (this._caching.lastIndex = y < m ? this._caching.lastIndex : 0, this.interpolateShape(m, this.pv, this._caching)), this._caching.lastFrame = m, this.pv
          }

          function s() {
            this.paths = this.localShapeCollection
          }

          function i(m, d) {
            if (m._length !== d._length || m.c !== d.c) return !1;
            var f, y = m._length;
            for (f = 0; f < y; f += 1)
              if (m.v[f][0] !== d.v[f][0] || m.v[f][1] !== d.v[f][1] || m.o[f][0] !== d.o[f][0] || m.o[f][1] !== d.o[f][1] || m.i[f][0] !== d.i[f][0] || m.i[f][1] !== d.i[f][1]) return !1;
            return !0
          }

          function n(m) {
            i(this.v, m) || (this.v = shapePool.clone(m), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
          }

          function a() {
            if (this.elem.globalData.frameId !== this.frameId) {
              if (!this.effectsSequence.length) {
                this._mdf = !1;
                return
              }
              if (this.lock) {
                this.setVValue(this.pv);
                return
              }
              this.lock = !0, this._mdf = !1;
              var m;
              this.kf ? m = this.pv : this.data.ks ? m = this.data.ks.k : m = this.data.pt.k;
              var d, f = this.effectsSequence.length;
              for (d = 0; d < f; d += 1) m = this.effectsSequence[d](m);
              this.setVValue(m), this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }

          function l(m, d, f) {
            this.propType = "shape", this.comp = m.comp, this.container = m, this.elem = m, this.data = d, this.k = !1, this.kf = !1, this._mdf = !1;
            var y = f === 3 ? d.pt.k : d.ks.k;
            this.v = shapePool.clone(y), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = s, this.effectsSequence = []
          }

          function o(m) {
            this.effectsSequence.push(m), this.container.addDynamicProperty(this)
          }
          l.prototype.interpolateShape = t, l.prototype.getValue = a, l.prototype.setVValue = n, l.prototype.addEffect = o;

          function p(m, d, f) {
            this.propType = "shape", this.comp = m.comp, this.elem = m, this.container = m, this.offsetTime = m.data.st, this.keyframes = f === 3 ? d.pt.k : d.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
            var y = this.keyframes[0].s[0].i.length;
            this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, y), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = s, this._caching = {
              lastFrame: e,
              lastIndex: 0
            }, this.effectsSequence = [r.bind(this)]
          }
          p.prototype.getValue = a, p.prototype.interpolateShape = t, p.prototype.setVValue = n, p.prototype.addEffect = o;
          var g = function() {
                var m = roundCorner;

                function d(f, y) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = y.d, this.elem = f, this.comp = f.comp, this.frameId = -1, this.initDynamicPropertyContainer(f), this.p = PropertyFactory.getProp(f, y.p, 1, 0, this), this.s = PropertyFactory.getProp(f, y.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                }
                return d.prototype = {
                  reset: s,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                  },
                  convertEllToPath: function() {
                    var y = this.p.v[0],
                        A = this.p.v[1],
                        T = this.s.v[0] / 2,
                        I = this.s.v[1] / 2,
                        j = this.d !== 3,
                        L = this.v;
                    L.v[0][0] = y, L.v[0][1] = A - I, L.v[1][0] = j ? y + T : y - T, L.v[1][1] = A, L.v[2][0] = y, L.v[2][1] = A + I, L.v[3][0] = j ? y - T : y + T, L.v[3][1] = A, L.i[0][0] = j ? y - T * m : y + T * m, L.i[0][1] = A - I, L.i[1][0] = j ? y + T : y - T, L.i[1][1] = A - I * m, L.i[2][0] = j ? y + T * m : y - T * m, L.i[2][1] = A + I, L.i[3][0] = j ? y - T : y + T, L.i[3][1] = A + I * m, L.o[0][0] = j ? y + T * m : y - T * m, L.o[0][1] = A - I, L.o[1][0] = j ? y + T : y - T, L.o[1][1] = A + I * m, L.o[2][0] = j ? y - T * m : y + T * m, L.o[2][1] = A + I, L.o[3][0] = j ? y - T : y + T, L.o[3][1] = A - I * m
                  }
                }, extendPrototype([DynamicPropertyContainer], d), d
              }(),
              S = function() {
                function m(d, f) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = d, this.comp = d.comp, this.data = f, this.frameId = -1, this.d = f.d, this.initDynamicPropertyContainer(d), f.sy === 1 ? (this.ir = PropertyFactory.getProp(d, f.ir, 0, 0, this), this.is = PropertyFactory.getProp(d, f.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(d, f.pt, 0, 0, this), this.p = PropertyFactory.getProp(d, f.p, 1, 0, this), this.r = PropertyFactory.getProp(d, f.r, 0, degToRads, this), this.or = PropertyFactory.getProp(d, f.or, 0, 0, this), this.os = PropertyFactory.getProp(d, f.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                }
                return m.prototype = {
                  reset: s,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                  },
                  convertStarToPath: function() {
                    var f = Math.floor(this.pt.v) * 2,
                        y = Math.PI * 2 / f,
                        A = !0,
                        T = this.or.v,
                        I = this.ir.v,
                        j = this.os.v,
                        L = this.is.v,
                        N = 2 * Math.PI * T / (f * 2),
                        V = 2 * Math.PI * I / (f * 2),
                        B, O, H, $, P = -Math.PI / 2;
                    P += this.r.v;
                    var R = this.data.d === 3 ? -1 : 1;
                    for (this.v._length = 0, B = 0; B < f; B += 1) {
                      O = A ? T : I, H = A ? j : L, $ = A ? N : V;
                      var C = O * Math.cos(P),
                          k = O * Math.sin(P),
                          F = C === 0 && k === 0 ? 0 : k / Math.sqrt(C * C + k * k),
                          _ = C === 0 && k === 0 ? 0 : -C / Math.sqrt(C * C + k * k);
                      C += +this.p.v[0], k += +this.p.v[1], this.v.setTripleAt(C, k, C - F * $ * H * R, k - _ * $ * H * R, C + F * $ * H * R, k + _ * $ * H * R, B, !0), A = !A, P += y * R
                    }
                  },
                  convertPolygonToPath: function() {
                    var f = Math.floor(this.pt.v),
                        y = Math.PI * 2 / f,
                        A = this.or.v,
                        T = this.os.v,
                        I = 2 * Math.PI * A / (f * 4),
                        j, L = -Math.PI * .5,
                        N = this.data.d === 3 ? -1 : 1;
                    for (L += this.r.v, this.v._length = 0, j = 0; j < f; j += 1) {
                      var V = A * Math.cos(L),
                          B = A * Math.sin(L),
                          O = V === 0 && B === 0 ? 0 : B / Math.sqrt(V * V + B * B),
                          H = V === 0 && B === 0 ? 0 : -V / Math.sqrt(V * V + B * B);
                      V += +this.p.v[0], B += +this.p.v[1], this.v.setTripleAt(V, B, V - O * I * T * N, B - H * I * T * N, V + O * I * T * N, B + H * I * T * N, j, !0), L += y * N
                    }
                    this.paths.length = 0, this.paths[0] = this.v
                  }
                }, extendPrototype([DynamicPropertyContainer], m), m
              }(),
              u = function() {
                function m(d, f) {
                  this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = d, this.comp = d.comp, this.frameId = -1, this.d = f.d, this.initDynamicPropertyContainer(d), this.p = PropertyFactory.getProp(d, f.p, 1, 0, this), this.s = PropertyFactory.getProp(d, f.s, 1, 0, this), this.r = PropertyFactory.getProp(d, f.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                }
                return m.prototype = {
                  convertRectToPath: function() {
                    var f = this.p.v[0],
                        y = this.p.v[1],
                        A = this.s.v[0] / 2,
                        T = this.s.v[1] / 2,
                        I = bmMin(A, T, this.r.v),
                        j = I * (1 - roundCorner);
                    this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(f + A, y - T + I, f + A, y - T + I, f + A, y - T + j, 0, !0), this.v.setTripleAt(f + A, y + T - I, f + A, y + T - j, f + A, y + T - I, 1, !0), I !== 0 ? (this.v.setTripleAt(f + A - I, y + T, f + A - I, y + T, f + A - j, y + T, 2, !0), this.v.setTripleAt(f - A + I, y + T, f - A + j, y + T, f - A + I, y + T, 3, !0), this.v.setTripleAt(f - A, y + T - I, f - A, y + T - I, f - A, y + T - j, 4, !0), this.v.setTripleAt(f - A, y - T + I, f - A, y - T + j, f - A, y - T + I, 5, !0), this.v.setTripleAt(f - A + I, y - T, f - A + I, y - T, f - A + j, y - T, 6, !0), this.v.setTripleAt(f + A - I, y - T, f + A - j, y - T, f + A - I, y - T, 7, !0)) : (this.v.setTripleAt(f - A, y + T, f - A + j, y + T, f - A, y + T, 2), this.v.setTripleAt(f - A, y - T, f - A, y - T + j, f - A, y - T, 3))) : (this.v.setTripleAt(f + A, y - T + I, f + A, y - T + j, f + A, y - T + I, 0, !0), I !== 0 ? (this.v.setTripleAt(f + A - I, y - T, f + A - I, y - T, f + A - j, y - T, 1, !0), this.v.setTripleAt(f - A + I, y - T, f - A + j, y - T, f - A + I, y - T, 2, !0), this.v.setTripleAt(f - A, y - T + I, f - A, y - T + I, f - A, y - T + j, 3, !0), this.v.setTripleAt(f - A, y + T - I, f - A, y + T - j, f - A, y + T - I, 4, !0), this.v.setTripleAt(f - A + I, y + T, f - A + I, y + T, f - A + j, y + T, 5, !0), this.v.setTripleAt(f + A - I, y + T, f + A - j, y + T, f + A - I, y + T, 6, !0), this.v.setTripleAt(f + A, y + T - I, f + A, y + T - I, f + A, y + T - j, 7, !0)) : (this.v.setTripleAt(f - A, y - T, f - A + j, y - T, f - A, y - T, 1, !0), this.v.setTripleAt(f - A, y + T, f - A, y + T - j, f - A, y + T, 2, !0), this.v.setTripleAt(f + A, y + T, f + A - j, y + T, f + A, y + T, 3, !0)))
                  },
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                  },
                  reset: s
                }, extendPrototype([DynamicPropertyContainer], m), m
              }();

          function E(m, d, f) {
            var y;
            if (f === 3 || f === 4) {
              var A = f === 3 ? d.pt : d.ks,
                  T = A.k;
              T.length ? y = new p(m, d, f) : y = new l(m, d, f)
            } else f === 5 ? y = new u(m, d) : f === 6 ? y = new g(m, d) : f === 7 && (y = new S(m, d));
            return y.k && m.addDynamicProperty(y), y
          }

          function b() {
            return l
          }

          function x() {
            return p
          }
          var M = {};
          return M.getShapeProp = E, M.getConstructorFunction = b, M.getKeyframedConstructorFunction = x, M
        }();
    /*!
             Transformation Matrix v2.0
             (c) Epistemex 2014-2015
             www.epistemex.com
             By Ken Fyrstenberg
             Contributions by leeoniya.
             License: MIT, header required.
             */
    var Matrix = function() {
      var e = Math.cos,
          t = Math.sin,
          r = Math.tan,
          s = Math.round;

      function i() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
      }

      function n(C) {
        if (C === 0) return this;
        var k = e(C),
            F = t(C);
        return this._t(k, -F, 0, 0, F, k, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      }

      function a(C) {
        if (C === 0) return this;
        var k = e(C),
            F = t(C);
        return this._t(1, 0, 0, 0, 0, k, -F, 0, 0, F, k, 0, 0, 0, 0, 1)
      }

      function l(C) {
        if (C === 0) return this;
        var k = e(C),
            F = t(C);
        return this._t(k, 0, F, 0, 0, 1, 0, 0, -F, 0, k, 0, 0, 0, 0, 1)
      }

      function o(C) {
        if (C === 0) return this;
        var k = e(C),
            F = t(C);
        return this._t(k, -F, 0, 0, F, k, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      }

      function p(C, k) {
        return this._t(1, k, C, 1, 0, 0)
      }

      function g(C, k) {
        return this.shear(r(C), r(k))
      }

      function S(C, k) {
        var F = e(k),
            _ = t(k);
        return this._t(F, _, 0, 0, -_, F, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(C), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(F, -_, 0, 0, _, F, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
      }

      function u(C, k, F) {
        return !F && F !== 0 && (F = 1), C === 1 && k === 1 && F === 1 ? this : this._t(C, 0, 0, 0, 0, k, 0, 0, 0, 0, F, 0, 0, 0, 0, 1)
      }

      function E(C, k, F, _, D, W, G, U, q, Z, X, se, J, Y, ee, K) {
        return this.props[0] = C, this.props[1] = k, this.props[2] = F, this.props[3] = _, this.props[4] = D, this.props[5] = W, this.props[6] = G, this.props[7] = U, this.props[8] = q, this.props[9] = Z, this.props[10] = X, this.props[11] = se, this.props[12] = J, this.props[13] = Y, this.props[14] = ee, this.props[15] = K, this
      }

      function b(C, k, F) {
        return F = F || 0, C !== 0 || k !== 0 || F !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, C, k, F, 1) : this
      }

      function x(C, k, F, _, D, W, G, U, q, Z, X, se, J, Y, ee, K) {
        var z = this.props;
        if (C === 1 && k === 0 && F === 0 && _ === 0 && D === 0 && W === 1 && G === 0 && U === 0 && q === 0 && Z === 0 && X === 1 && se === 0) return z[12] = z[12] * C + z[15] * J, z[13] = z[13] * W + z[15] * Y, z[14] = z[14] * X + z[15] * ee, z[15] *= K, this._identityCalculated = !1, this;
        var ne = z[0],
            he = z[1],
            ae = z[2],
            ie = z[3],
            oe = z[4],
            le = z[5],
            Q = z[6],
            ce = z[7],
            pe = z[8],
            te = z[9],
            ue = z[10],
            re = z[11],
            fe = z[12],
            de = z[13],
            me = z[14],
            ge = z[15];
        return z[0] = ne * C + he * D + ae * q + ie * J, z[1] = ne * k + he * W + ae * Z + ie * Y, z[2] = ne * F + he * G + ae * X + ie * ee, z[3] = ne * _ + he * U + ae * se + ie * K, z[4] = oe * C + le * D + Q * q + ce * J, z[5] = oe * k + le * W + Q * Z + ce * Y, z[6] = oe * F + le * G + Q * X + ce * ee, z[7] = oe * _ + le * U + Q * se + ce * K, z[8] = pe * C + te * D + ue * q + re * J, z[9] = pe * k + te * W + ue * Z + re * Y, z[10] = pe * F + te * G + ue * X + re * ee, z[11] = pe * _ + te * U + ue * se + re * K, z[12] = fe * C + de * D + me * q + ge * J, z[13] = fe * k + de * W + me * Z + ge * Y, z[14] = fe * F + de * G + me * X + ge * ee, z[15] = fe * _ + de * U + me * se + ge * K, this._identityCalculated = !1, this
      }

      function M(C) {
        var k = C.props;
        return this.transform(k[0], k[1], k[2], k[3], k[4], k[5], k[6], k[7], k[8], k[9], k[10], k[11], k[12], k[13], k[14], k[15])
      }

      function m() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity
      }

      function d(C) {
        for (var k = 0; k < 16;) {
          if (C.props[k] !== this.props[k]) return !1;
          k += 1
        }
        return !0
      }

      function f(C) {
        var k;
        for (k = 0; k < 16; k += 1) C.props[k] = this.props[k];
        return C
      }

      function y(C) {
        var k;
        for (k = 0; k < 16; k += 1) this.props[k] = C[k]
      }

      function A(C, k, F) {
        return {
          x: C * this.props[0] + k * this.props[4] + F * this.props[8] + this.props[12],
          y: C * this.props[1] + k * this.props[5] + F * this.props[9] + this.props[13],
          z: C * this.props[2] + k * this.props[6] + F * this.props[10] + this.props[14]
        }
      }

      function T(C, k, F) {
        return C * this.props[0] + k * this.props[4] + F * this.props[8] + this.props[12]
      }

      function I(C, k, F) {
        return C * this.props[1] + k * this.props[5] + F * this.props[9] + this.props[13]
      }

      function j(C, k, F) {
        return C * this.props[2] + k * this.props[6] + F * this.props[10] + this.props[14]
      }

      function L() {
        var C = this.props[0] * this.props[5] - this.props[1] * this.props[4],
            k = this.props[5] / C,
            F = -this.props[1] / C,
            _ = -this.props[4] / C,
            D = this.props[0] / C,
            W = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / C,
            G = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / C,
            U = new Matrix;
        return U.props[0] = k, U.props[1] = F, U.props[4] = _, U.props[5] = D, U.props[12] = W, U.props[13] = G, U
      }

      function N(C) {
        var k = this.getInverseMatrix();
        return k.applyToPointArray(C[0], C[1], C[2] || 0)
      }

      function V(C) {
        var k, F = C.length,
            _ = [];
        for (k = 0; k < F; k += 1) _[k] = N(C[k]);
        return _
      }

      function B(C, k, F) {
        var _ = createTypedArray("float32", 6);
        if (this.isIdentity()) _[0] = C[0], _[1] = C[1], _[2] = k[0], _[3] = k[1], _[4] = F[0], _[5] = F[1];
        else {
          var D = this.props[0],
              W = this.props[1],
              G = this.props[4],
              U = this.props[5],
              q = this.props[12],
              Z = this.props[13];
          _[0] = C[0] * D + C[1] * G + q, _[1] = C[0] * W + C[1] * U + Z, _[2] = k[0] * D + k[1] * G + q, _[3] = k[0] * W + k[1] * U + Z, _[4] = F[0] * D + F[1] * G + q, _[5] = F[0] * W + F[1] * U + Z
        }
        return _
      }

      function O(C, k, F) {
        var _;
        return this.isIdentity() ? _ = [C, k, F] : _ = [C * this.props[0] + k * this.props[4] + F * this.props[8] + this.props[12], C * this.props[1] + k * this.props[5] + F * this.props[9] + this.props[13], C * this.props[2] + k * this.props[6] + F * this.props[10] + this.props[14]], _
      }

      function H(C, k) {
        if (this.isIdentity()) return C + "," + k;
        var F = this.props;
        return Math.round((C * F[0] + k * F[4] + F[12]) * 100) / 100 + "," + Math.round((C * F[1] + k * F[5] + F[13]) * 100) / 100
      }

      function $() {
        for (var C = 0, k = this.props, F = "matrix3d(", _ = 1e4; C < 16;) F += s(k[C] * _) / _, F += C === 15 ? ")" : ",", C += 1;
        return F
      }

      function P(C) {
        var k = 1e4;
        return C < 1e-6 && C > 0 || C > -1e-6 && C < 0 ? s(C * k) / k : C
      }

      function R() {
        var C = this.props,
            k = P(C[0]),
            F = P(C[1]),
            _ = P(C[4]),
            D = P(C[5]),
            W = P(C[12]),
            G = P(C[13]);
        return "matrix(" + k + "," + F + "," + _ + "," + D + "," + W + "," + G + ")"
      }
      return function() {
        this.reset = i, this.rotate = n, this.rotateX = a, this.rotateY = l, this.rotateZ = o, this.skew = g, this.skewFromAxis = S, this.shear = p, this.scale = u, this.setTransform = E, this.translate = b, this.transform = x, this.multiply = M, this.applyToPoint = A, this.applyToX = T, this.applyToY = I, this.applyToZ = j, this.applyToPointArray = O, this.applyToTriplePoints = B, this.applyToPointStringified = H, this.toCSS = $, this.to2dCSS = R, this.clone = f, this.cloneFromProps = y, this.equals = d, this.inversePoints = V, this.inversePoint = N, this.getInverseMatrix = L, this._t = this.transform, this.isIdentity = m, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
      }
    }();

    function _typeof$3(e) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function(r) {
        return typeof r
      } : _typeof$3 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
      }, _typeof$3(e)
    }
    var lottie = {};

    function setLocation(e) {
      setLocationHref(e)
    }

    function searchAnimations() {
      animationManager.searchAnimations()
    }

    function setSubframeRendering(e) {
      setSubframeEnabled(e)
    }

    function setPrefix(e) {
      setIdPrefix(e)
    }

    function loadAnimation(e) {
      return animationManager.loadAnimation(e)
    }

    function setQuality(e) {
      if (typeof e == "string") switch (e) {
        case "high":
          setDefaultCurveSegments(200);
          break;
        default:
        case "medium":
          setDefaultCurveSegments(50);
          break;
        case "low":
          setDefaultCurveSegments(10);
          break
      } else !isNaN(e) && e > 1 && setDefaultCurveSegments(e)
    }

    function inBrowser() {
      return typeof navigator < "u"
    }

    function installPlugin(e, t) {
      e === "expressions" && setExpressionsPlugin(t)
    }

    function getFactory(e) {
      switch (e) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix;
        default:
          return null
      }
    }
    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";

    function checkReady() {
      document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations())
    }

    function getQueryVariable(e) {
      for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
        var s = t[r].split("=");
        if (decodeURIComponent(s[0]) == e) return decodeURIComponent(s[1])
      }
      return null
    }
    var queryString = "";
    {
      var scripts = document.getElementsByTagName("script"),
          index = scripts.length - 1,
          myScript = scripts[index] || {
            src: ""
          };
      queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer")
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    try {
      _typeof$3(exports) !== "object" && (window.bodymovin = lottie)
    } catch (e) {}
    var ShapeModifiers = function() {
      var e = {},
          t = {};
      e.registerModifier = r, e.getModifier = s;

      function r(i, n) {
        t[i] || (t[i] = n)
      }

      function s(i, n, a) {
        return new t[i](n, a)
      }
      return e
    }();

    function ShapeModifier() {}
    ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(e) {
      if (!this.closed) {
        e.sh.container.addDynamicProperty(e.sh);
        var t = {
          shape: e.sh,
          data: e,
          localShapeCollection: shapeCollectionPool.newShapeCollection()
        };
        this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
      }
    }, ShapeModifier.prototype.init = function(e, t) {
      this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
    }, ShapeModifier.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
    }, extendPrototype([DynamicPropertyContainer], ShapeModifier);

    function TrimModifier() {}
    extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(e, t) {
      this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
    }, TrimModifier.prototype.addShapeToModifier = function(e) {
      e.pathsData = []
    }, TrimModifier.prototype.calculateShapeEdges = function(e, t, r, s, i) {
      var n = [];
      t <= 1 ? n.push({
        s: e,
        e: t
      }) : e >= 1 ? n.push({
        s: e - 1,
        e: t - 1
      }) : (n.push({
        s: e,
        e: 1
      }), n.push({
        s: 0,
        e: t - 1
      }));
      var a = [],
          l, o = n.length,
          p;
      for (l = 0; l < o; l += 1)
        if (p = n[l], !(p.e * i < s || p.s * i > s + r)) {
          var g, S;
          p.s * i <= s ? g = 0 : g = (p.s * i - s) / r, p.e * i >= s + r ? S = 1 : S = (p.e * i - s) / r, a.push([g, S])
        } return a.length || a.push([0, 0]), a
    }, TrimModifier.prototype.releasePathsData = function(e) {
      var t, r = e.length;
      for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
      return e.length = 0, e
    }, TrimModifier.prototype.processShapes = function(e) {
      var t, r;
      if (this._mdf || e) {
        var s = this.o.v % 360 / 360;
        if (s < 0 && (s += 1), this.s.v > 1 ? t = 1 + s : this.s.v < 0 ? t = 0 + s : t = this.s.v + s, this.e.v > 1 ? r = 1 + s : this.e.v < 0 ? r = 0 + s : r = this.e.v + s, t > r) {
          var i = t;
          t = r, r = i
        }
        t = Math.round(t * 1e4) * 1e-4, r = Math.round(r * 1e4) * 1e-4, this.sValue = t, this.eValue = r
      } else t = this.sValue, r = this.eValue;
      var n, a, l = this.shapes.length,
          o, p, g, S, u, E = 0;
      if (r === t)
        for (a = 0; a < l; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
      else if (r === 1 && t === 0 || r === 0 && t === 1) {
        if (this._mdf)
          for (a = 0; a < l; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0
      } else {
        var b = [],
            x, M;
        for (a = 0; a < l; a += 1)
          if (x = this.shapes[a], !x.shape._mdf && !this._mdf && !e && this.m !== 2) x.shape.paths = x.localShapeCollection;
          else {
            if (n = x.shape.paths, p = n._length, u = 0, !x.shape._mdf && x.pathsData.length) u = x.totalShapeLength;
            else {
              for (g = this.releasePathsData(x.pathsData), o = 0; o < p; o += 1) S = bez.getSegmentsLength(n.shapes[o]), g.push(S), u += S.totalLength;
              x.totalShapeLength = u, x.pathsData = g
            }
            E += u, x.shape._mdf = !0
          } var m = t,
            d = r,
            f = 0,
            y;
        for (a = l - 1; a >= 0; a -= 1)
          if (x = this.shapes[a], x.shape._mdf) {
            for (M = x.localShapeCollection, M.releaseShapes(), this.m === 2 && l > 1 ? (y = this.calculateShapeEdges(t, r, x.totalShapeLength, f, E), f += x.totalShapeLength) : y = [
              [m, d]
            ], p = y.length, o = 0; o < p; o += 1) {
              m = y[o][0], d = y[o][1], b.length = 0, d <= 1 ? b.push({
                s: x.totalShapeLength * m,
                e: x.totalShapeLength * d
              }) : m >= 1 ? b.push({
                s: x.totalShapeLength * (m - 1),
                e: x.totalShapeLength * (d - 1)
              }) : (b.push({
                s: x.totalShapeLength * m,
                e: x.totalShapeLength
              }), b.push({
                s: 0,
                e: x.totalShapeLength * (d - 1)
              }));
              var A = this.addShapes(x, b[0]);
              if (b[0].s !== b[0].e) {
                if (b.length > 1) {
                  var T = x.shape.paths.shapes[x.shape.paths._length - 1];
                  if (T.c) {
                    var I = A.pop();
                    this.addPaths(A, M), A = this.addShapes(x, b[1], I)
                  } else this.addPaths(A, M), A = this.addShapes(x, b[1])
                }
                this.addPaths(A, M)
              }
            }
            x.shape.paths = M
          }
      }
    }, TrimModifier.prototype.addPaths = function(e, t) {
      var r, s = e.length;
      for (r = 0; r < s; r += 1) t.addShape(e[r])
    }, TrimModifier.prototype.addSegment = function(e, t, r, s, i, n, a) {
      i.setXYAt(t[0], t[1], "o", n), i.setXYAt(r[0], r[1], "i", n + 1), a && i.setXYAt(e[0], e[1], "v", n), i.setXYAt(s[0], s[1], "v", n + 1)
    }, TrimModifier.prototype.addSegmentFromArray = function(e, t, r, s) {
      t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), s && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
    }, TrimModifier.prototype.addShapes = function(e, t, r) {
      var s = e.pathsData,
          i = e.shape.paths.shapes,
          n, a = e.shape.paths._length,
          l, o, p = 0,
          g, S, u, E, b = [],
          x, M = !0;
      for (r ? (S = r._length, x = r._length) : (r = shapePool.newElement(), S = 0, x = 0), b.push(r), n = 0; n < a; n += 1) {
        for (u = s[n].lengths, r.c = i[n].c, o = i[n].c ? u.length : u.length + 1, l = 1; l < o; l += 1)
          if (g = u[l - 1], p + g.addedLength < t.s) p += g.addedLength, r.c = !1;
          else if (p > t.e) {
            r.c = !1;
            break
          } else t.s <= p && t.e >= p + g.addedLength ? (this.addSegment(i[n].v[l - 1], i[n].o[l - 1], i[n].i[l], i[n].v[l], r, S, M), M = !1) : (E = bez.getNewSegment(i[n].v[l - 1], i[n].v[l], i[n].o[l - 1], i[n].i[l], (t.s - p) / g.addedLength, (t.e - p) / g.addedLength, u[l - 1]), this.addSegmentFromArray(E, r, S, M), M = !1, r.c = !1), p += g.addedLength, S += 1;
        if (i[n].c && u.length) {
          if (g = u[l - 1], p <= t.e) {
            var m = u[l - 1].addedLength;
            t.s <= p && t.e >= p + m ? (this.addSegment(i[n].v[l - 1], i[n].o[l - 1], i[n].i[0], i[n].v[0], r, S, M), M = !1) : (E = bez.getNewSegment(i[n].v[l - 1], i[n].v[0], i[n].o[l - 1], i[n].i[0], (t.s - p) / m, (t.e - p) / m, u[l - 1]), this.addSegmentFromArray(E, r, S, M), M = !1, r.c = !1)
          } else r.c = !1;
          p += g.addedLength, S += 1
        }
        if (r._length && (r.setXYAt(r.v[x][0], r.v[x][1], "i", x), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), p > t.e) break;
        n < a - 1 && (r = shapePool.newElement(), M = !0, b.push(r), S = 0)
      }
      return b
    };

    function PuckerAndBloatModifier() {}
    extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(e, t) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
    }, PuckerAndBloatModifier.prototype.processPath = function(e, t) {
      var r = t / 100,
          s = [0, 0],
          i = e._length,
          n = 0;
      for (n = 0; n < i; n += 1) s[0] += e.v[n][0], s[1] += e.v[n][1];
      s[0] /= i, s[1] /= i;
      var a = shapePool.newElement();
      a.c = e.c;
      var l, o, p, g, S, u;
      for (n = 0; n < i; n += 1) l = e.v[n][0] + (s[0] - e.v[n][0]) * r, o = e.v[n][1] + (s[1] - e.v[n][1]) * r, p = e.o[n][0] + (s[0] - e.o[n][0]) * -r, g = e.o[n][1] + (s[1] - e.o[n][1]) * -r, S = e.i[n][0] + (s[0] - e.i[n][0]) * -r, u = e.i[n][1] + (s[1] - e.i[n][1]) * -r, a.setTripleAt(l, o, p, g, S, u, n);
      return a
    }, PuckerAndBloatModifier.prototype.processShapes = function(e) {
      var t, r, s = this.shapes.length,
          i, n, a = this.amount.v;
      if (a !== 0) {
        var l, o;
        for (r = 0; r < s; r += 1) {
          if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !e))
            for (o.releaseShapes(), l.shape._mdf = !0, t = l.shape.paths.shapes, n = l.shape.paths._length, i = 0; i < n; i += 1) o.addShape(this.processPath(t[i], a));
          l.shape.paths = l.localShapeCollection
        }
      }
      this.dynamicProperties.length || (this._mdf = !1)
    };
    var TransformPropertyFactory = function() {
      var e = [0, 0];

      function t(o) {
        var p = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || p, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
      }

      function r(o) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o) {
            var p;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var g, S;
              if (p = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (g = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / p, 0), S = this.p.getValueAtTime(this.p.keyframes[0].t / p, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (g = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / p, 0), S = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / p, 0)) : (g = this.p.pv, S = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / p, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                g = [], S = [];
                var u = this.px,
                    E = this.py;
                u._caching.lastFrame + u.offsetTime <= u.keyframes[0].t ? (g[0] = u.getValueAtTime((u.keyframes[0].t + .01) / p, 0), g[1] = E.getValueAtTime((E.keyframes[0].t + .01) / p, 0), S[0] = u.getValueAtTime(u.keyframes[0].t / p, 0), S[1] = E.getValueAtTime(E.keyframes[0].t / p, 0)) : u._caching.lastFrame + u.offsetTime >= u.keyframes[u.keyframes.length - 1].t ? (g[0] = u.getValueAtTime(u.keyframes[u.keyframes.length - 1].t / p, 0), g[1] = E.getValueAtTime(E.keyframes[E.keyframes.length - 1].t / p, 0), S[0] = u.getValueAtTime((u.keyframes[u.keyframes.length - 1].t - .01) / p, 0), S[1] = E.getValueAtTime((E.keyframes[E.keyframes.length - 1].t - .01) / p, 0)) : (g = [u.pv, E.pv], S[0] = u.getValueAtTime((u._caching.lastFrame + u.offsetTime - .01) / p, u.offsetTime), S[1] = E.getValueAtTime((E._caching.lastFrame + E.offsetTime - .01) / p, E.offsetTime))
              } else S = e, g = S;
              this.v.rotate(-Math.atan2(g[1] - S[1], g[0] - S[0]))
            }
            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
          }
          this.frameId = this.elem.globalData.frameId
        }
      }

      function s() {
        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length) this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
        else return;
        if (!this.s.effectsSequence.length) this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
        else return;
        if (this.sk)
          if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length) this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
          else return;
        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
      }

      function i() {}

      function n(o) {
        this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = !0
      }

      function a(o, p, g) {
        if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = p, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(g || o), p.p && p.p.s ? (this.px = PropertyFactory.getProp(o, p.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o, p.p.y, 0, 0, this), p.p.z && (this.pz = PropertyFactory.getProp(o, p.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, p.p || {
          k: [0, 0, 0]
        }, 1, 0, this), p.rx) {
          if (this.rx = PropertyFactory.getProp(o, p.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o, p.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o, p.rz, 0, degToRads, this), p.or.k[0].ti) {
            var S, u = p.or.k.length;
            for (S = 0; S < u; S += 1) p.or.k[S].to = null, p.or.k[S].ti = null
          }
          this.or = PropertyFactory.getProp(o, p.or, 1, degToRads, this), this.or.sh = !0
        } else this.r = PropertyFactory.getProp(o, p.r || {
          k: 0
        }, 0, degToRads, this);
        p.sk && (this.sk = PropertyFactory.getProp(o, p.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o, p.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o, p.a || {
          k: [0, 0, 0]
        }, 1, 0, this), this.s = PropertyFactory.getProp(o, p.s || {
          k: [100, 100, 100]
        }, 1, .01, this), p.o ? this.o = PropertyFactory.getProp(o, p.o, 0, .01, o) : this.o = {
          _mdf: !1,
          v: 1
        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
      }
      a.prototype = {
        applyToMatrix: t,
        getValue: r,
        precalculateMatrix: s,
        autoOrient: i
      }, extendPrototype([DynamicPropertyContainer], a), a.prototype.addDynamicProperty = n, a.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;

      function l(o, p, g) {
        return new a(o, p, g)
      }
      return {
        getTransformProperty: l
      }
    }();

    function RepeaterModifier() {}
    extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
    }, RepeaterModifier.prototype.applyTransforms = function(e, t, r, s, i, n) {
      var a = n ? -1 : 1,
          l = s.s.v[0] + (1 - s.s.v[0]) * (1 - i),
          o = s.s.v[1] + (1 - s.s.v[1]) * (1 - i);
      e.translate(s.p.v[0] * a * i, s.p.v[1] * a * i, s.p.v[2]), t.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), t.rotate(-s.r.v * a * i), t.translate(s.a.v[0], s.a.v[1], s.a.v[2]), r.translate(-s.a.v[0], -s.a.v[1], s.a.v[2]), r.scale(n ? 1 / l : l, n ? 1 / o : o), r.translate(s.a.v[0], s.a.v[1], s.a.v[2])
    }, RepeaterModifier.prototype.init = function(e, t, r, s) {
      for (this.elem = e, this.arr = t, this.pos = r, this.elemsData = s, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]); r > 0;) r -= 1, this._elements.unshift(t[r]);
      this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
    }, RepeaterModifier.prototype.resetElements = function(e) {
      var t, r = e.length;
      for (t = 0; t < r; t += 1) e[t]._processed = !1, e[t].ty === "gr" && this.resetElements(e[t].it)
    }, RepeaterModifier.prototype.cloneElements = function(e) {
      var t = JSON.parse(JSON.stringify(e));
      return this.resetElements(t), t
    }, RepeaterModifier.prototype.changeGroupRender = function(e, t) {
      var r, s = e.length;
      for (r = 0; r < s; r += 1) e[r]._render = t, e[r].ty === "gr" && this.changeGroupRender(e[r].it, t)
    }, RepeaterModifier.prototype.processShapes = function(e) {
      var t, r, s, i, n, a = !1;
      if (this._mdf || e) {
        var l = Math.ceil(this.c.v);
        if (this._groups.length < l) {
          for (; this._groups.length < l;) {
            var o = {
              it: this.cloneElements(this._elements),
              ty: "gr"
            };
            o.it.push({
              a: {
                a: 0,
                ix: 1,
                k: [0, 0]
              },
              nm: "Transform",
              o: {
                a: 0,
                ix: 7,
                k: 100
              },
              p: {
                a: 0,
                ix: 2,
                k: [0, 0]
              },
              r: {
                a: 1,
                ix: 6,
                k: [{
                  s: 0,
                  e: 0,
                  t: 0
                }, {
                  s: 0,
                  e: 0,
                  t: 1
                }]
              },
              s: {
                a: 0,
                ix: 3,
                k: [100, 100]
              },
              sa: {
                a: 0,
                ix: 5,
                k: 0
              },
              sk: {
                a: 0,
                ix: 4,
                k: 0
              },
              ty: "tr"
            }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1
          }
          this.elem.reloadShapes(), a = !0
        }
        n = 0;
        var p;
        for (s = 0; s <= this._groups.length - 1; s += 1) {
          if (p = n < l, this._groups[s]._render = p, this.changeGroupRender(this._groups[s].it, p), !p) {
            var g = this.elemsData[s].it,
                S = g[g.length - 1];
            S.transform.op.v !== 0 ? (S.transform.op._mdf = !0, S.transform.op.v = 0) : S.transform.op._mdf = !1
          }
          n += 1
        }
        this._currentCopies = l;
        var u = this.o.v,
            E = u % 1,
            b = u > 0 ? Math.floor(u) : Math.ceil(u),
            x = this.pMatrix.props,
            M = this.rMatrix.props,
            m = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var d = 0;
        if (u > 0) {
          for (; d < b;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), d += 1;
          E && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, E, !1), d += E)
        } else if (u < 0) {
          for (; d > b;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), d -= 1;
          E && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -E, !0), d -= E)
        }
        s = this.data.m === 1 ? 0 : this._currentCopies - 1, i = this.data.m === 1 ? 1 : -1, n = this._currentCopies;
        for (var f, y; n;) {
          if (t = this.elemsData[s].it, r = t[t.length - 1].transform.mProps.v.props, y = r.length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (s / (this._currentCopies - 1)), d !== 0) {
            for ((s !== 0 && i === 1 || s !== this._currentCopies - 1 && i === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(M[0], M[1], M[2], M[3], M[4], M[5], M[6], M[7], M[8], M[9], M[10], M[11], M[12], M[13], M[14], M[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), this.matrix.transform(x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7], x[8], x[9], x[10], x[11], x[12], x[13], x[14], x[15]), f = 0; f < y; f += 1) r[f] = this.matrix.props[f];
            this.matrix.reset()
          } else
            for (this.matrix.reset(), f = 0; f < y; f += 1) r[f] = this.matrix.props[f];
          d += 1, n -= 1, s += i
        }
      } else
        for (n = this._currentCopies, s = 0, i = 1; n;) t = this.elemsData[s].it, r = t[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, n -= 1, s += i;
      return a
    }, RepeaterModifier.prototype.addShape = function() {};

    function RoundCornersModifier() {}
    extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) {
      this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
    }, RoundCornersModifier.prototype.processPath = function(e, t) {
      var r = shapePool.newElement();
      r.c = e.c;
      var s, i = e._length,
          n, a, l, o, p, g, S = 0,
          u, E, b, x, M, m;
      for (s = 0; s < i; s += 1) n = e.v[s], l = e.o[s], a = e.i[s], n[0] === l[0] && n[1] === l[1] && n[0] === a[0] && n[1] === a[1] ? (s === 0 || s === i - 1) && !e.c ? (r.setTripleAt(n[0], n[1], l[0], l[1], a[0], a[1], S), S += 1) : (s === 0 ? o = e.v[i - 1] : o = e.v[s - 1], p = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)), g = p ? Math.min(p / 2, t) / p : 0, M = n[0] + (o[0] - n[0]) * g, u = M, m = n[1] - (n[1] - o[1]) * g, E = m, b = u - (u - n[0]) * roundCorner, x = E - (E - n[1]) * roundCorner, r.setTripleAt(u, E, b, x, M, m, S), S += 1, s === i - 1 ? o = e.v[0] : o = e.v[s + 1], p = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2)), g = p ? Math.min(p / 2, t) / p : 0, b = n[0] + (o[0] - n[0]) * g, u = b, x = n[1] + (o[1] - n[1]) * g, E = x, M = u - (u - n[0]) * roundCorner, m = E - (E - n[1]) * roundCorner, r.setTripleAt(u, E, b, x, M, m, S), S += 1) : (r.setTripleAt(e.v[s][0], e.v[s][1], e.o[s][0], e.o[s][1], e.i[s][0], e.i[s][1], S), S += 1);
      return r
    }, RoundCornersModifier.prototype.processShapes = function(e) {
      var t, r, s = this.shapes.length,
          i, n, a = this.rd.v;
      if (a !== 0) {
        var l, o;
        for (r = 0; r < s; r += 1) {
          if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !e))
            for (o.releaseShapes(), l.shape._mdf = !0, t = l.shape.paths.shapes, n = l.shape.paths._length, i = 0; i < n; i += 1) o.addShape(this.processPath(t[i], a));
          l.shape.paths = l.localShapeCollection
        }
      }
      this.dynamicProperties.length || (this._mdf = !1)
    };

    function floatEqual(e, t) {
      return Math.abs(e - t) * 1e5 <= Math.min(Math.abs(e), Math.abs(t))
    }

    function floatZero(e) {
      return Math.abs(e) <= 1e-5
    }

    function lerp(e, t, r) {
      return e * (1 - r) + t * r
    }

    function lerpPoint(e, t, r) {
      return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)]
    }

    function quadRoots(e, t, r) {
      if (e === 0) return [];
      var s = t * t - 4 * e * r;
      if (s < 0) return [];
      var i = -t / (2 * e);
      if (s === 0) return [i];
      var n = Math.sqrt(s) / (2 * e);
      return [i - n, i + n]
    }

    function polynomialCoefficients(e, t, r, s) {
      return [-e + 3 * t - 3 * r + s, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e]
    }

    function singlePoint(e) {
      return new PolynomialBezier(e, e, e, e, !1)
    }

    function PolynomialBezier(e, t, r, s, i) {
      i && pointEqual(e, t) && (t = lerpPoint(e, s, 1 / 3)), i && pointEqual(r, s) && (r = lerpPoint(e, s, 2 / 3));
      var n = polynomialCoefficients(e[0], t[0], r[0], s[0]),
          a = polynomialCoefficients(e[1], t[1], r[1], s[1]);
      this.a = [n[0], a[0]], this.b = [n[1], a[1]], this.c = [n[2], a[2]], this.d = [n[3], a[3]], this.points = [e, t, r, s]
    }
    PolynomialBezier.prototype.point = function(e) {
      return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]]
    }, PolynomialBezier.prototype.derivative = function(e) {
      return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]]
    }, PolynomialBezier.prototype.tangentAngle = function(e) {
      var t = this.derivative(e);
      return Math.atan2(t[1], t[0])
    }, PolynomialBezier.prototype.normalAngle = function(e) {
      var t = this.derivative(e);
      return Math.atan2(t[0], t[1])
    }, PolynomialBezier.prototype.inflectionPoints = function() {
      var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (floatZero(e)) return [];
      var t = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e,
          r = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
      if (r < 0) return [];
      var s = Math.sqrt(r);
      return floatZero(s) ? s > 0 && s < 1 ? [t] : [] : [t - s, t + s].filter(function(i) {
        return i > 0 && i < 1
      })
    }, PolynomialBezier.prototype.split = function(e) {
      if (e <= 0) return [singlePoint(this.points[0]), this];
      if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
      var t = lerpPoint(this.points[0], this.points[1], e),
          r = lerpPoint(this.points[1], this.points[2], e),
          s = lerpPoint(this.points[2], this.points[3], e),
          i = lerpPoint(t, r, e),
          n = lerpPoint(r, s, e),
          a = lerpPoint(i, n, e);
      return [new PolynomialBezier(this.points[0], t, i, a, !0), new PolynomialBezier(a, n, s, this.points[3], !0)]
    };

    function extrema(e, t) {
      var r = e.points[0][t],
          s = e.points[e.points.length - 1][t];
      if (r > s) {
        var i = s;
        s = r, r = i
      }
      for (var n = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), a = 0; a < n.length; a += 1)
        if (n[a] > 0 && n[a] < 1) {
          var l = e.point(n[a])[t];
          l < r ? r = l : l > s && (s = l)
        } return {
        min: r,
        max: s
      }
    }
    PolynomialBezier.prototype.bounds = function() {
      return {
        x: extrema(this, 0),
        y: extrema(this, 1)
      }
    }, PolynomialBezier.prototype.boundingBox = function() {
      var e = this.bounds();
      return {
        left: e.x.min,
        right: e.x.max,
        top: e.y.min,
        bottom: e.y.max,
        width: e.x.max - e.x.min,
        height: e.y.max - e.y.min,
        cx: (e.x.max + e.x.min) / 2,
        cy: (e.y.max + e.y.min) / 2
      }
    };

    function intersectData(e, t, r) {
      var s = e.boundingBox();
      return {
        cx: s.cx,
        cy: s.cy,
        width: s.width,
        height: s.height,
        bez: e,
        t: (t + r) / 2,
        t1: t,
        t2: r
      }
    }

    function splitData(e) {
      var t = e.bez.split(.5);
      return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)]
    }

    function boxIntersect(e, t) {
      return Math.abs(e.cx - t.cx) * 2 < e.width + t.width && Math.abs(e.cy - t.cy) * 2 < e.height + t.height
    }

    function intersectsImpl(e, t, r, s, i, n) {
      if (boxIntersect(e, t)) {
        if (r >= n || e.width <= s && e.height <= s && t.width <= s && t.height <= s) {
          i.push([e.t, t.t]);
          return
        }
        var a = splitData(e),
            l = splitData(t);
        intersectsImpl(a[0], l[0], r + 1, s, i, n), intersectsImpl(a[0], l[1], r + 1, s, i, n), intersectsImpl(a[1], l[0], r + 1, s, i, n), intersectsImpl(a[1], l[1], r + 1, s, i, n)
      }
    }
    PolynomialBezier.prototype.intersections = function(e, t, r) {
      t === void 0 && (t = 2), r === void 0 && (r = 7);
      var s = [];
      return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, s, r), s
    }, PolynomialBezier.shapeSegment = function(e, t) {
      var r = (t + 1) % e.length();
      return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0)
    }, PolynomialBezier.shapeSegmentInverted = function(e, t) {
      var r = (t + 1) % e.length();
      return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0)
    };

    function crossProduct(e, t) {
      return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
    }

    function lineIntersection(e, t, r, s) {
      var i = [e[0], e[1], 1],
          n = [t[0], t[1], 1],
          a = [r[0], r[1], 1],
          l = [s[0], s[1], 1],
          o = crossProduct(crossProduct(i, n), crossProduct(a, l));
      return floatZero(o[2]) ? null : [o[0] / o[2], o[1] / o[2]]
    }

    function polarOffset(e, t, r) {
      return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r]
    }

    function pointDistance(e, t) {
      return Math.hypot(e[0] - t[0], e[1] - t[1])
    }

    function pointEqual(e, t) {
      return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1])
    }

    function ZigZagModifier() {}
    extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(e, t) {
      this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0
    };

    function setPoint(e, t, r, s, i, n, a) {
      var l = r - Math.PI / 2,
          o = r + Math.PI / 2,
          p = t[0] + Math.cos(r) * s * i,
          g = t[1] - Math.sin(r) * s * i;
      e.setTripleAt(p, g, p + Math.cos(l) * n, g - Math.sin(l) * n, p + Math.cos(o) * a, g - Math.sin(o) * a, e.length())
    }

    function getPerpendicularVector(e, t) {
      var r = [t[0] - e[0], t[1] - e[1]],
          s = -Math.PI * .5,
          i = [Math.cos(s) * r[0] - Math.sin(s) * r[1], Math.sin(s) * r[0] + Math.cos(s) * r[1]];
      return i
    }

    function getProjectingAngle(e, t) {
      var r = t === 0 ? e.length() - 1 : t - 1,
          s = (t + 1) % e.length(),
          i = e.v[r],
          n = e.v[s],
          a = getPerpendicularVector(i, n);
      return Math.atan2(0, 1) - Math.atan2(a[1], a[0])
    }

    function zigZagCorner(e, t, r, s, i, n, a) {
      var l = getProjectingAngle(t, r),
          o = t.v[r % t._length],
          p = t.v[r === 0 ? t._length - 1 : r - 1],
          g = t.v[(r + 1) % t._length],
          S = n === 2 ? Math.sqrt(Math.pow(o[0] - p[0], 2) + Math.pow(o[1] - p[1], 2)) : 0,
          u = n === 2 ? Math.sqrt(Math.pow(o[0] - g[0], 2) + Math.pow(o[1] - g[1], 2)) : 0;
      setPoint(e, t.v[r % t._length], l, a, s, u / ((i + 1) * 2), S / ((i + 1) * 2))
    }

    function zigZagSegment(e, t, r, s, i, n) {
      for (var a = 0; a < s; a += 1) {
        var l = (a + 1) / (s + 1),
            o = i === 2 ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
            p = t.normalAngle(l),
            g = t.point(l);
        setPoint(e, g, p, n, r, o / ((s + 1) * 2), o / ((s + 1) * 2)), n = -n
      }
      return n
    }
    ZigZagModifier.prototype.processPath = function(e, t, r, s) {
      var i = e._length,
          n = shapePool.newElement();
      if (n.c = e.c, e.c || (i -= 1), i === 0) return n;
      var a = -1,
          l = PolynomialBezier.shapeSegment(e, 0);
      zigZagCorner(n, e, 0, t, r, s, a);
      for (var o = 0; o < i; o += 1) a = zigZagSegment(n, l, t, r, s, -a), o === i - 1 && !e.c ? l = null : l = PolynomialBezier.shapeSegment(e, (o + 1) % i), zigZagCorner(n, e, o + 1, t, r, s, a);
      return n
    }, ZigZagModifier.prototype.processShapes = function(e) {
      var t, r, s = this.shapes.length,
          i, n, a = this.amplitude.v,
          l = Math.max(0, Math.round(this.frequency.v)),
          o = this.pointsType.v;
      if (a !== 0) {
        var p, g;
        for (r = 0; r < s; r += 1) {
          if (p = this.shapes[r], g = p.localShapeCollection, !(!p.shape._mdf && !this._mdf && !e))
            for (g.releaseShapes(), p.shape._mdf = !0, t = p.shape.paths.shapes, n = p.shape.paths._length, i = 0; i < n; i += 1) g.addShape(this.processPath(t[i], a, l, o));
          p.shape.paths = p.localShapeCollection
        }
      }
      this.dynamicProperties.length || (this._mdf = !1)
    };

    function linearOffset(e, t, r) {
      var s = Math.atan2(t[0] - e[0], t[1] - e[1]);
      return [polarOffset(e, s, r), polarOffset(t, s, r)]
    }

    function offsetSegment(e, t) {
      var r, s, i, n, a, l, o;
      o = linearOffset(e.points[0], e.points[1], t), r = o[0], s = o[1], o = linearOffset(e.points[1], e.points[2], t), i = o[0], n = o[1], o = linearOffset(e.points[2], e.points[3], t), a = o[0], l = o[1];
      var p = lineIntersection(r, s, i, n);
      p === null && (p = s);
      var g = lineIntersection(a, l, i, n);
      return g === null && (g = a), new PolynomialBezier(r, p, g, l)
    }

    function joinLines(e, t, r, s, i) {
      var n = t.points[3],
          a = r.points[0];
      if (s === 3 || pointEqual(n, a)) return n;
      if (s === 2) {
        var l = -t.tangentAngle(1),
            o = -r.tangentAngle(0) + Math.PI,
            p = lineIntersection(n, polarOffset(n, l + Math.PI / 2, 100), a, polarOffset(a, l + Math.PI / 2, 100)),
            g = p ? pointDistance(p, n) : pointDistance(n, a) / 2,
            S = polarOffset(n, l, 2 * g * roundCorner);
        return e.setXYAt(S[0], S[1], "o", e.length() - 1), S = polarOffset(a, o, 2 * g * roundCorner), e.setTripleAt(a[0], a[1], a[0], a[1], S[0], S[1], e.length()), a
      }
      var u = pointEqual(n, t.points[2]) ? t.points[0] : t.points[2],
          E = pointEqual(a, r.points[1]) ? r.points[3] : r.points[1],
          b = lineIntersection(u, n, a, E);
      return b && pointDistance(b, n) < i ? (e.setTripleAt(b[0], b[1], b[0], b[1], b[0], b[1], e.length()), b) : n
    }

    function getIntersection(e, t) {
      var r = e.intersections(t);
      return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
    }

    function pruneSegmentIntersection(e, t) {
      var r = e.slice(),
          s = t.slice(),
          i = getIntersection(e[e.length - 1], t[0]);
      return i && (r[e.length - 1] = e[e.length - 1].split(i[0])[0], s[0] = t[0].split(i[1])[1]), e.length > 1 && t.length > 1 && (i = getIntersection(e[0], t[t.length - 1]), i) ? [
        [e[0].split(i[0])[0]],
        [t[t.length - 1].split(i[1])[1]]
      ] : [r, s]
    }

    function pruneIntersections(e) {
      for (var t, r = 1; r < e.length; r += 1) t = pruneSegmentIntersection(e[r - 1], e[r]), e[r - 1] = t[0], e[r] = t[1];
      return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e
    }

    function offsetSegmentSplit(e, t) {
      var r = e.inflectionPoints(),
          s, i, n, a;
      if (r.length === 0) return [offsetSegment(e, t)];
      if (r.length === 1 || floatEqual(r[1], 1)) return n = e.split(r[0]), s = n[0], i = n[1], [offsetSegment(s, t), offsetSegment(i, t)];
      n = e.split(r[0]), s = n[0];
      var l = (r[1] - r[0]) / (1 - r[0]);
      return n = n[1].split(l), a = n[0], i = n[1], [offsetSegment(s, t), offsetSegment(a, t), offsetSegment(i, t)]
    }

    function OffsetPathModifier() {}
    extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(e, t) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = this.amount.effectsSequence.length !== 0
    }, OffsetPathModifier.prototype.processPath = function(e, t, r, s) {
      var i = shapePool.newElement();
      i.c = e.c;
      var n = e.length();
      e.c || (n -= 1);
      var a, l, o, p = [];
      for (a = 0; a < n; a += 1) o = PolynomialBezier.shapeSegment(e, a), p.push(offsetSegmentSplit(o, t));
      if (!e.c)
        for (a = n - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(e, a), p.push(offsetSegmentSplit(o, t));
      p = pruneIntersections(p);
      var g = null,
          S = null;
      for (a = 0; a < p.length; a += 1) {
        var u = p[a];
        for (S && (g = joinLines(i, S, u[0], r, s)), S = u[u.length - 1], l = 0; l < u.length; l += 1) o = u[l], g && pointEqual(o.points[0], g) ? i.setXYAt(o.points[1][0], o.points[1][1], "o", i.length() - 1) : i.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], i.length()), i.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], i.length()), g = o.points[3]
      }
      return p.length && joinLines(i, S, p[0][0], r, s), i
    }, OffsetPathModifier.prototype.processShapes = function(e) {
      var t, r, s = this.shapes.length,
          i, n, a = this.amount.v,
          l = this.miterLimit.v,
          o = this.lineJoin;
      if (a !== 0) {
        var p, g;
        for (r = 0; r < s; r += 1) {
          if (p = this.shapes[r], g = p.localShapeCollection, !(!p.shape._mdf && !this._mdf && !e))
            for (g.releaseShapes(), p.shape._mdf = !0, t = p.shape.paths.shapes, n = p.shape.paths._length, i = 0; i < n; i += 1) g.addShape(this.processPath(t[i], a, o, l));
          p.shape.paths = p.localShapeCollection
        }
      }
      this.dynamicProperties.length || (this._mdf = !1)
    };

    function getFontProperties(e) {
      for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", s = "normal", i = t.length, n, a = 0; a < i; a += 1) switch (n = t[a].toLowerCase(), n) {
        case "italic":
          s = "italic";
          break;
        case "bold":
          r = "700";
          break;
        case "black":
          r = "900";
          break;
        case "medium":
          r = "500";
          break;
        case "regular":
        case "normal":
          r = "400";
          break;
        case "light":
        case "thin":
          r = "200";
          break
      }
      return {
        style: s,
        weight: e.fWeight || r
      }
    }
    var FontManager = function() {
      var e = 5e3,
          t = {
            w: 0,
            size: 0,
            shapes: [],
            data: {
              shapes: []
            }
          },
          r = [];
      r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var s = 127988,
          i = 917631,
          n = 917601,
          a = 917626,
          l = 65039,
          o = 8205,
          p = 127462,
          g = 127487,
          S = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

      function u(P) {
        var R = P.split(","),
            C, k = R.length,
            F = [];
        for (C = 0; C < k; C += 1) R[C] !== "sans-serif" && R[C] !== "monospace" && F.push(R[C]);
        return F.join(",")
      }

      function E(P, R) {
        var C = createTag("span");
        C.setAttribute("aria-hidden", !0), C.style.fontFamily = R;
        var k = createTag("span");
        k.innerText = "giItT1WQy@!-/#", C.style.position = "absolute", C.style.left = "-10000px", C.style.top = "-10000px", C.style.fontSize = "300px", C.style.fontVariant = "normal", C.style.fontStyle = "normal", C.style.fontWeight = "normal", C.style.letterSpacing = "0", C.appendChild(k), document.body.appendChild(C);
        var F = k.offsetWidth;
        return k.style.fontFamily = u(P) + ", " + R, {
          node: k,
          w: F,
          parent: C
        }
      }

      function b() {
        var P, R = this.fonts.length,
            C, k, F = R;
        for (P = 0; P < R; P += 1) this.fonts[P].loaded ? F -= 1 : this.fonts[P].fOrigin === "n" || this.fonts[P].origin === 0 ? this.fonts[P].loaded = !0 : (C = this.fonts[P].monoCase.node, k = this.fonts[P].monoCase.w, C.offsetWidth !== k ? (F -= 1, this.fonts[P].loaded = !0) : (C = this.fonts[P].sansCase.node, k = this.fonts[P].sansCase.w, C.offsetWidth !== k && (F -= 1, this.fonts[P].loaded = !0)), this.fonts[P].loaded && (this.fonts[P].sansCase.parent.parentNode.removeChild(this.fonts[P].sansCase.parent), this.fonts[P].monoCase.parent.parentNode.removeChild(this.fonts[P].monoCase.parent)));
        F !== 0 && Date.now() - this.initTime < e ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
      }

      function x(P, R) {
        var C = document.body && R ? "svg" : "canvas",
            k, F = getFontProperties(P);
        if (C === "svg") {
          var _ = createNS("text");
          _.style.fontSize = "100px", _.setAttribute("font-family", P.fFamily), _.setAttribute("font-style", F.style), _.setAttribute("font-weight", F.weight), _.textContent = "1", P.fClass ? (_.style.fontFamily = "inherit", _.setAttribute("class", P.fClass)) : _.style.fontFamily = P.fFamily, R.appendChild(_), k = _
        } else {
          var D = new OffscreenCanvas(500, 500).getContext("2d");
          D.font = F.style + " " + F.weight + " 100px " + P.fFamily, k = D
        }

        function W(G) {
          return C === "svg" ? (k.textContent = G, k.getComputedTextLength()) : k.measureText(G).width
        }
        return {
          measureText: W
        }
      }

      function M(P, R) {
        if (!P) {
          this.isLoaded = !0;
          return
        }
        if (this.chars) {
          this.isLoaded = !0, this.fonts = P.list;
          return
        }
        if (!document.body) {
          this.isLoaded = !0, P.list.forEach(function(X) {
            X.helper = x(X), X.cache = {}
          }), this.fonts = P.list;
          return
        }
        var C = P.list,
            k, F = C.length,
            _ = F;
        for (k = 0; k < F; k += 1) {
          var D = !0,
              W, G;
          if (C[k].loaded = !1, C[k].monoCase = E(C[k].fFamily, "monospace"), C[k].sansCase = E(C[k].fFamily, "sans-serif"), !C[k].fPath) C[k].loaded = !0, _ -= 1;
          else if (C[k].fOrigin === "p" || C[k].origin === 3) {
            if (W = document.querySelectorAll('style[f-forigin="p"][f-family="' + C[k].fFamily + '"], style[f-origin="3"][f-family="' + C[k].fFamily + '"]'), W.length > 0 && (D = !1), D) {
              var U = createTag("style");
              U.setAttribute("f-forigin", C[k].fOrigin), U.setAttribute("f-origin", C[k].origin), U.setAttribute("f-family", C[k].fFamily), U.type = "text/css", U.innerText = "@font-face {font-family: " + C[k].fFamily + "; font-style: normal; src: url('" + C[k].fPath + "');}", R.appendChild(U)
            }
          } else if (C[k].fOrigin === "g" || C[k].origin === 1) {
            for (W = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), G = 0; G < W.length; G += 1) W[G].href.indexOf(C[k].fPath) !== -1 && (D = !1);
            if (D) {
              var q = createTag("link");
              q.setAttribute("f-forigin", C[k].fOrigin), q.setAttribute("f-origin", C[k].origin), q.type = "text/css", q.rel = "stylesheet", q.href = C[k].fPath, document.body.appendChild(q)
            }
          } else if (C[k].fOrigin === "t" || C[k].origin === 2) {
            for (W = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), G = 0; G < W.length; G += 1) C[k].fPath === W[G].src && (D = !1);
            if (D) {
              var Z = createTag("link");
              Z.setAttribute("f-forigin", C[k].fOrigin), Z.setAttribute("f-origin", C[k].origin), Z.setAttribute("rel", "stylesheet"), Z.setAttribute("href", C[k].fPath), R.appendChild(Z)
            }
          }
          C[k].helper = x(C[k], R), C[k].cache = {}, this.fonts.push(C[k])
        }
        _ === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
      }

      function m(P) {
        if (P) {
          this.chars || (this.chars = []);
          var R, C = P.length,
              k, F = this.chars.length,
              _;
          for (R = 0; R < C; R += 1) {
            for (k = 0, _ = !1; k < F;) this.chars[k].style === P[R].style && this.chars[k].fFamily === P[R].fFamily && this.chars[k].ch === P[R].ch && (_ = !0), k += 1;
            _ || (this.chars.push(P[R]), F += 1)
          }
        }
      }

      function d(P, R, C) {
        for (var k = 0, F = this.chars.length; k < F;) {
          if (this.chars[k].ch === P && this.chars[k].style === R && this.chars[k].fFamily === C) return this.chars[k];
          k += 1
        }
        return (typeof P == "string" && P.charCodeAt(0) !== 13 || !P) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", P, R, C)), t
      }

      function f(P, R, C) {
        var k = this.getFontByName(R),
            F = P;
        if (!k.cache[F]) {
          var _ = k.helper;
          if (P === " ") {
            var D = _.measureText("|" + P + "|"),
                W = _.measureText("||");
            k.cache[F] = (D - W) / 100
          } else k.cache[F] = _.measureText(P) / 100
        }
        return k.cache[F] * C
      }

      function y(P) {
        for (var R = 0, C = this.fonts.length; R < C;) {
          if (this.fonts[R].fName === P) return this.fonts[R];
          R += 1
        }
        return this.fonts[0]
      }

      function A(P) {
        var R = 0,
            C = P.charCodeAt(0);
        if (C >= 55296 && C <= 56319) {
          var k = P.charCodeAt(1);
          k >= 56320 && k <= 57343 && (R = (C - 55296) * 1024 + k - 56320 + 65536)
        }
        return R
      }

      function T(P, R) {
        var C = P.toString(16) + R.toString(16);
        return S.indexOf(C) !== -1
      }

      function I(P) {
        return P === o
      }

      function j(P) {
        return P === l
      }

      function L(P) {
        var R = A(P);
        return R >= p && R <= g
      }

      function N(P) {
        return L(P.substr(0, 2)) && L(P.substr(2, 2))
      }

      function V(P) {
        return r.indexOf(P) !== -1
      }

      function B(P, R) {
        var C = A(P.substr(R, 2));
        if (C !== s) return !1;
        var k = 0;
        for (R += 2; k < 5;) {
          if (C = A(P.substr(R, 2)), C < n || C > a) return !1;
          k += 1, R += 2
        }
        return A(P.substr(R, 2)) === i
      }

      function O() {
        this.isLoaded = !0
      }
      var H = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
      };
      H.isModifier = T, H.isZeroWidthJoiner = I, H.isFlagEmoji = N, H.isRegionalCode = L, H.isCombinedCharacter = V, H.isRegionalFlag = B, H.isVariationSelector = j, H.BLACK_FLAG_CODE_POINT = s;
      var $ = {
        addChars: m,
        addFonts: M,
        getCharData: d,
        getFontByName: y,
        measureText: f,
        checkLoadedFonts: b,
        setIsLoaded: O
      };
      return H.prototype = $, H
    }();

    function SlotManager(e) {
      this.animationData = e
    }
    SlotManager.prototype.getProp = function(e) {
      return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e
    };

    function slotFactory(e) {
      return new SlotManager(e)
    }

    function RenderableElement() {}
    RenderableElement.prototype = {
      initRenderable: function() {
        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
      },
      addRenderableComponent: function(t) {
        this.renderableComponents.indexOf(t) === -1 && this.renderableComponents.push(t)
      },
      removeRenderableComponent: function(t) {
        this.renderableComponents.indexOf(t) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
      },
      prepareRenderableFrame: function(t) {
        this.checkLayerLimits(t)
      },
      checkTransparency: function() {
        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
      },
      checkLayerLimits: function(t) {
        this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
      },
      renderRenderable: function() {
        var t, r = this.renderableComponents.length;
        for (t = 0; t < r; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
      },
      sourceRectAtTime: function() {
        return {
          top: 0,
          left: 0,
          width: 100,
          height: 100
        }
      },
      getLayerSize: function() {
        return this.data.ty === 5 ? {
          w: this.data.textData.width,
          h: this.data.textData.height
        } : {
          w: this.data.width,
          h: this.data.height
        }
      }
    };
    var getBlendMode = function() {
      var e = {
        0: "source-over",
        1: "multiply",
        2: "screen",
        3: "overlay",
        4: "darken",
        5: "lighten",
        6: "color-dodge",
        7: "color-burn",
        8: "hard-light",
        9: "soft-light",
        10: "difference",
        11: "exclusion",
        12: "hue",
        13: "saturation",
        14: "color",
        15: "luminosity"
      };
      return function(t) {
        return e[t] || ""
      }
    }();

    function SliderEffect(e, t, r) {
      this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
    }

    function AngleEffect(e, t, r) {
      this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
    }

    function ColorEffect(e, t, r) {
      this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
    }

    function PointEffect(e, t, r) {
      this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
    }

    function LayerIndexEffect(e, t, r) {
      this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
    }

    function MaskIndexEffect(e, t, r) {
      this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
    }

    function CheckboxEffect(e, t, r) {
      this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
    }

    function NoValueEffect() {
      this.p = {}
    }

    function EffectsManager(e, t) {
      var r = e.ef || [];
      this.effectElements = [];
      var s, i = r.length,
          n;
      for (s = 0; s < i; s += 1) n = new GroupEffect(r[s], t), this.effectElements.push(n)
    }

    function GroupEffect(e, t) {
      this.init(e, t)
    }
    extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) {
      this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
      var r, s = this.data.ef.length,
          i, n = this.data.ef;
      for (r = 0; r < s; r += 1) {
        switch (i = null, n[r].ty) {
          case 0:
            i = new SliderEffect(n[r], t, this);
            break;
          case 1:
            i = new AngleEffect(n[r], t, this);
            break;
          case 2:
            i = new ColorEffect(n[r], t, this);
            break;
          case 3:
            i = new PointEffect(n[r], t, this);
            break;
          case 4:
          case 7:
            i = new CheckboxEffect(n[r], t, this);
            break;
          case 10:
            i = new LayerIndexEffect(n[r], t, this);
            break;
          case 11:
            i = new MaskIndexEffect(n[r], t, this);
            break;
          case 5:
            i = new EffectsManager(n[r], t);
            break;
          default:
            i = new NoValueEffect(n[r]);
            break
        }
        i && this.effectElements.push(i)
      }
    };

    function BaseElement() {}
    BaseElement.prototype = {
      checkMasks: function() {
        if (!this.data.hasMask) return !1;
        for (var t = 0, r = this.data.masksProperties.length; t < r;) {
          if (this.data.masksProperties[t].mode !== "n" && this.data.masksProperties[t].cl !== !1) return !0;
          t += 1
        }
        return !1
      },
      initExpressions: function() {
        var t = getExpressionInterfaces();
        if (t) {
          var r = t("layer"),
              s = t("effects"),
              i = t("shape"),
              n = t("text"),
              a = t("comp");
          this.layerInterface = r(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
          var l = s.createEffectsInterface(this, this.layerInterface);
          this.layerInterface.registerEffectsInterface(l), this.data.ty === 0 || this.data.xt ? this.compInterface = a(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = n(this), this.layerInterface.text = this.layerInterface.textInterface)
        }
      },
      setBlendMode: function() {
        var t = getBlendMode(this.data.bm),
            r = this.baseElement || this.layerElement;
        r.style["mix-blend-mode"] = t
      },
      initBaseData: function(t, r, s) {
        this.globalData = r, this.comp = s, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
      },
      getType: function() {
        return this.type
      },
      sourceRectAtTime: function() {}
    };

    function FrameElement() {}
    FrameElement.prototype = {
      initFrame: function() {
        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
      },
      prepareProperties: function(t, r) {
        var s, i = this.dynamicProperties.length;
        for (s = 0; s < i; s += 1)(r || this._isParent && this.dynamicProperties[s].propType === "transform") && (this.dynamicProperties[s].getValue(), this.dynamicProperties[s]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
      },
      addDynamicProperty: function(t) {
        this.dynamicProperties.indexOf(t) === -1 && this.dynamicProperties.push(t)
      }
    };

    function FootageElement(e, t, r) {
      this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, r)
    }
    FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
      return null
    }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
      var e = getExpressionInterfaces();
      if (e) {
        var t = e("footage");
        this.layerInterface = t(this)
      }
    }, FootageElement.prototype.getFootageData = function() {
      return this.footageData
    };

    function AudioElement(e, t, r) {
      this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, r), this._isPlaying = !1, this._canPlay = !1;
      var s = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(s), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
        _placeholder: !0
      }, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : {
        k: [100]
      }, 1, .01, this)
    }
    AudioElement.prototype.prepareFrame = function(e) {
      if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder) this._currentTime = e / this.data.sr;
      else {
        var t = this.tm.v;
        this._currentTime = t
      }
      this._volume = this.lv.v[0];
      var r = this._volume * this._volumeMultiplier;
      this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
    }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = !1
    }, AudioElement.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
    }, AudioElement.prototype.resume = function() {
      this._canPlay = !0
    }, AudioElement.prototype.setRate = function(e) {
      this.audio.rate(e)
    }, AudioElement.prototype.volume = function(e) {
      this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume)
    }, AudioElement.prototype.getBaseElement = function() {
      return null
    }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {};

    function BaseRenderer() {}
    BaseRenderer.prototype.checkLayers = function(e) {
      var t, r = this.layers.length,
          s;
      for (this.completeLayers = !0, t = r - 1; t >= 0; t -= 1) this.elements[t] || (s = this.layers[t], s.ip - s.st <= e - this.layers[t].st && s.op - s.st > e - this.layers[t].st && this.buildItem(t)), this.completeLayers = this.elements[t] ? this.completeLayers : !1;
      this.checkPendingElements()
    }, BaseRenderer.prototype.createItem = function(e) {
      switch (e.ty) {
        case 2:
          return this.createImage(e);
        case 0:
          return this.createComp(e);
        case 1:
          return this.createSolid(e);
        case 3:
          return this.createNull(e);
        case 4:
          return this.createShape(e);
        case 5:
          return this.createText(e);
        case 6:
          return this.createAudio(e);
        case 13:
          return this.createCamera(e);
        case 15:
          return this.createFootage(e);
        default:
          return this.createNull(e)
      }
    }, BaseRenderer.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.")
    }, BaseRenderer.prototype.createAudio = function(e) {
      return new AudioElement(e, this.globalData, this)
    }, BaseRenderer.prototype.createFootage = function(e) {
      return new FootageElement(e, this.globalData, this)
    }, BaseRenderer.prototype.buildAllItems = function() {
      var e, t = this.layers.length;
      for (e = 0; e < t; e += 1) this.buildItem(e);
      this.checkPendingElements()
    }, BaseRenderer.prototype.includeLayers = function(e) {
      this.completeLayers = !1;
      var t, r = e.length,
          s, i = this.layers.length;
      for (t = 0; t < r; t += 1)
        for (s = 0; s < i;) {
          if (this.layers[s].id === e[t].id) {
            this.layers[s] = e[t];
            break
          }
          s += 1
        }
    }, BaseRenderer.prototype.setProjectInterface = function(e) {
      this.globalData.projectInterface = e
    }, BaseRenderer.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems()
    }, BaseRenderer.prototype.buildElementParenting = function(e, t, r) {
      for (var s = this.elements, i = this.layers, n = 0, a = i.length; n < a;) i[n].ind == t && (!s[n] || s[n] === !0 ? (this.buildItem(n), this.addPendingElement(e)) : (r.push(s[n]), s[n].setAsParent(), i[n].parent !== void 0 ? this.buildElementParenting(e, i[n].parent, r) : e.setHierarchy(r))), n += 1
    }, BaseRenderer.prototype.addPendingElement = function(e) {
      this.pendingElements.push(e)
    }, BaseRenderer.prototype.searchExtraCompositions = function(e) {
      var t, r = e.length;
      for (t = 0; t < r; t += 1)
        if (e[t].xt) {
          var s = this.createComp(e[t]);
          s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
        }
    }, BaseRenderer.prototype.getElementById = function(e) {
      var t, r = this.elements.length;
      for (t = 0; t < r; t += 1)
        if (this.elements[t].data.ind === e) return this.elements[t];
      return null
    }, BaseRenderer.prototype.getElementByPath = function(e) {
      var t = e.shift(),
          r;
      if (typeof t == "number") r = this.elements[t];
      else {
        var s, i = this.elements.length;
        for (s = 0; s < i; s += 1)
          if (this.elements[s].data.nm === t) {
            r = this.elements[s];
            break
          }
      }
      return e.length === 0 ? r : r.getElementByPath(e)
    }, BaseRenderer.prototype.setupGlobalData = function(e, t) {
      this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(e), this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
        w: e.w,
        h: e.h
      }
    };
    var effectTypes = {
      TRANSFORM_EFFECT: "transformEFfect"
    };

    function TransformElement() {}
    TransformElement.prototype = {
      initTransform: function() {
        var t = new Matrix;
        this.finalTransform = {
          mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
            o: 0
          },
          _matMdf: !1,
          _localMatMdf: !1,
          _opMdf: !1,
          mat: t,
          localMat: t,
          localOpacity: 1
        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
      },
      renderTransform: function() {
        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
          var t, r = this.finalTransform.mat,
              s = 0,
              i = this.hierarchy.length;
          if (!this.finalTransform._matMdf)
            for (; s < i;) {
              if (this.hierarchy[s].finalTransform.mProp._mdf) {
                this.finalTransform._matMdf = !0;
                break
              }
              s += 1
            }
          if (this.finalTransform._matMdf)
            for (t = this.finalTransform.mProp.v.props, r.cloneFromProps(t), s = 0; s < i; s += 1) r.multiply(this.hierarchy[s].finalTransform.mProp.v)
        }
        this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
      },
      renderLocalTransform: function() {
        if (this.localTransforms) {
          var t = 0,
              r = this.localTransforms.length;
          if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
            for (; t < r;) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
          if (this.finalTransform._localMatMdf) {
            var s = this.finalTransform.localMat;
            for (this.localTransforms[0].matrix.clone(s), t = 1; t < r; t += 1) {
              var i = this.localTransforms[t].matrix;
              s.multiply(i)
            }
            s.multiply(this.finalTransform.mat)
          }
          if (this.finalTransform._opMdf) {
            var n = this.finalTransform.localOpacity;
            for (t = 0; t < r; t += 1) n *= this.localTransforms[t].opacity * .01;
            this.finalTransform.localOpacity = n
          }
        }
      },
      searchEffectTransforms: function() {
        if (this.renderableEffectsManager) {
          var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
          if (t.length) {
            this.localTransforms = [], this.finalTransform.localMat = new Matrix;
            var r = 0,
                s = t.length;
            for (r = 0; r < s; r += 1) this.localTransforms.push(t[r])
          }
        }
      },
      globalToLocal: function(t) {
        var r = [];
        r.push(this.finalTransform);
        for (var s = !0, i = this.comp; s;) i.finalTransform ? (i.data.hasMask && r.splice(0, 0, i.finalTransform), i = i.comp) : s = !1;
        var n, a = r.length,
            l;
        for (n = 0; n < a; n += 1) l = r[n].mat.applyToPointArray(0, 0, 0), t = [t[0] - l[0], t[1] - l[1], 0];
        return t
      },
      mHelper: new Matrix
    };

    function MaskElement(e, t, r) {
      this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var s = this.globalData.defs,
          i, n = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(n), this.solidPath = "";
      var a, l = this.masksProperties,
          o = 0,
          p = [],
          g, S, u = createElementID(),
          E, b, x, M, m = "clipPath",
          d = "clip-path";
      for (i = 0; i < n; i += 1)
        if ((l[i].mode !== "a" && l[i].mode !== "n" || l[i].inv || l[i].o.k !== 100 || l[i].o.x) && (m = "mask", d = "mask"), (l[i].mode === "s" || l[i].mode === "i") && o === 0 ? (E = createNS("rect"), E.setAttribute("fill", "#ffffff"), E.setAttribute("width", this.element.comp.data.w || 0), E.setAttribute("height", this.element.comp.data.h || 0), p.push(E)) : E = null, a = createNS("path"), l[i].mode === "n") this.viewData[i] = {
          op: PropertyFactory.getProp(this.element, l[i].o, 0, .01, this.element),
          prop: ShapePropertyFactory.getShapeProp(this.element, l[i], 3),
          elem: a,
          lastPath: ""
        }, s.appendChild(a);
        else {
          o += 1, a.setAttribute("fill", l[i].mode === "s" ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero");
          var f;
          if (l[i].x.k !== 0 ? (m = "mask", d = "mask", M = PropertyFactory.getProp(this.element, l[i].x, 0, null, this.element), f = createElementID(), b = createNS("filter"), b.setAttribute("id", f), x = createNS("feMorphology"), x.setAttribute("operator", "erode"), x.setAttribute("in", "SourceGraphic"), x.setAttribute("radius", "0"), b.appendChild(x), s.appendChild(b), a.setAttribute("stroke", l[i].mode === "s" ? "#000000" : "#ffffff")) : (x = null, M = null), this.storedData[i] = {
            elem: a,
            x: M,
            expan: x,
            lastPath: "",
            lastOperator: "",
            filterId: f,
            lastRadius: 0
          }, l[i].mode === "i") {
            S = p.length;
            var y = createNS("g");
            for (g = 0; g < S; g += 1) y.appendChild(p[g]);
            var A = createNS("mask");
            A.setAttribute("mask-type", "alpha"), A.setAttribute("id", u + "_" + o), A.appendChild(a), s.appendChild(A), y.setAttribute("mask", "url(" + getLocationHref() + "#" + u + "_" + o + ")"), p.length = 0, p.push(y)
          } else p.push(a);
          l[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
            elem: a,
            lastPath: "",
            op: PropertyFactory.getProp(this.element, l[i].o, 0, .01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, l[i], 3),
            invRect: E
          }, this.viewData[i].prop.k || this.drawPath(l[i], this.viewData[i].prop.v, this.viewData[i])
        } for (this.maskElement = createNS(m), n = p.length, i = 0; i < n; i += 1) this.maskElement.appendChild(p[i]);
      o > 0 && (this.maskElement.setAttribute("id", u), this.element.maskedElement.setAttribute(d, "url(" + getLocationHref() + "#" + u + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
    }
    MaskElement.prototype.getMaskProperty = function(e) {
      return this.viewData[e].prop
    }, MaskElement.prototype.renderFrame = function(e) {
      var t = this.element.finalTransform.mat,
          r, s = this.masksProperties.length;
      for (r = 0; r < s; r += 1)
        if ((this.viewData[r].prop._mdf || e) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]), (this.viewData[r].op._mdf || e) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v), this.masksProperties[r].mode !== "n" && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[r].invRect.setAttribute("transform", t.getInverseMatrix().to2dCSS()), this.storedData[r].x && (this.storedData[r].x._mdf || e))) {
          var i = this.storedData[r].expan;
          this.storedData[r].x.v < 0 ? (this.storedData[r].lastOperator !== "erode" && (this.storedData[r].lastOperator = "erode", this.storedData[r].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[r].filterId + ")")), i.setAttribute("radius", -this.storedData[r].x.v)) : (this.storedData[r].lastOperator !== "dilate" && (this.storedData[r].lastOperator = "dilate", this.storedData[r].elem.setAttribute("filter", null)), this.storedData[r].elem.setAttribute("stroke-width", this.storedData[r].x.v * 2))
        }
    }, MaskElement.prototype.getMaskelement = function() {
      return this.maskElement
    }, MaskElement.prototype.createLayerSolidPath = function() {
      var e = "M0,0 ";
      return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, e += " h-" + this.globalData.compSize.w, e += " v-" + this.globalData.compSize.h + " ", e
    }, MaskElement.prototype.drawPath = function(e, t, r) {
      var s = " M" + t.v[0][0] + "," + t.v[0][1],
          i, n;
      for (n = t._length, i = 1; i < n; i += 1) s += " C" + t.o[i - 1][0] + "," + t.o[i - 1][1] + " " + t.i[i][0] + "," + t.i[i][1] + " " + t.v[i][0] + "," + t.v[i][1];
      if (t.c && n > 1 && (s += " C" + t.o[i - 1][0] + "," + t.o[i - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== s) {
        var a = "";
        r.elem && (t.c && (a = e.inv ? this.solidPath + s : s), r.elem.setAttribute("d", a)), r.lastPath = s
      }
    }, MaskElement.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
    };
    var filtersFactory = function() {
          var e = {};
          e.createFilter = t, e.createAlphaToLuminanceFilter = r;

          function t(s, i) {
            var n = createNS("filter");
            return n.setAttribute("id", s), i !== !0 && (n.setAttribute("filterUnits", "objectBoundingBox"), n.setAttribute("x", "0%"), n.setAttribute("y", "0%"), n.setAttribute("width", "100%"), n.setAttribute("height", "100%")), n
          }

          function r() {
            var s = createNS("feColorMatrix");
            return s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), s
          }
          return e
        }(),
        featureSupport = function() {
          var e = {
            maskType: !0,
            svgLumaHidden: !0,
            offscreenCanvas: typeof OffscreenCanvas < "u"
          };
          return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e
        }(),
        registeredEffects$1 = {},
        idPrefix = "filter_result_";

    function SVGEffects(e) {
      var t, r = "SourceGraphic",
          s = e.data.ef ? e.data.ef.length : 0,
          i = createElementID(),
          n = filtersFactory.createFilter(i, !0),
          a = 0;
      this.filters = [];
      var l;
      for (t = 0; t < s; t += 1) {
        l = null;
        var o = e.data.ef[t].ty;
        if (registeredEffects$1[o]) {
          var p = registeredEffects$1[o].effect;
          l = new p(n, e.effectsManager.effectElements[t], e, idPrefix + a, r), r = idPrefix + a, registeredEffects$1[o].countsAsEffect && (a += 1)
        }
        l && this.filters.push(l)
      }
      a && (e.globalData.defs.appendChild(n), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")")), this.filters.length && e.addRenderableComponent(this)
    }
    SVGEffects.prototype.renderFrame = function(e) {
      var t, r = this.filters.length;
      for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
    }, SVGEffects.prototype.getEffects = function(e) {
      var t, r = this.filters.length,
          s = [];
      for (t = 0; t < r; t += 1) this.filters[t].type === e && s.push(this.filters[t]);
      return s
    };

    function registerEffect$1(e, t, r) {
      registeredEffects$1[e] = {
        effect: t,
        countsAsEffect: r
      }
    }

    function SVGBaseElement() {}
    SVGBaseElement.prototype = {
      initRendererElement: function() {
        this.layerElement = createNS("g")
      },
      createContainerElements: function() {
        this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
        var t = null;
        if (this.data.td) {
          this.matteMasks = {};
          var r = createNS("g");
          r.setAttribute("id", this.layerId), r.appendChild(this.layerElement), t = r, this.globalData.defs.appendChild(r)
        } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
          var s = createNS("clipPath"),
              i = createNS("path");
          i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
          var n = createElementID();
          if (s.setAttribute("id", n), s.appendChild(i), this.globalData.defs.appendChild(s), this.checkMasks()) {
            var a = createNS("g");
            a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), a.appendChild(this.layerElement), this.transformedElement = a, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
          } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")")
        }
        this.data.bm !== 0 && this.setBlendMode()
      },
      renderElement: function() {
        this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
      },
      destroyBaseElement: function() {
        this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
      },
      getBaseElement: function() {
        return this.data.hd ? null : this.baseElement
      },
      createRenderableComponents: function() {
        this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
      },
      getMatte: function(t) {
        if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
          var r = this.layerId + "_" + t,
              s, i, n, a;
          if (t === 1 || t === 3) {
            var l = createNS("mask");
            l.setAttribute("id", r), l.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"), n = createNS("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(n), this.globalData.defs.appendChild(l), !featureSupport.maskType && t === 1 && (l.setAttribute("mask-type", "luminance"), s = createElementID(), i = filtersFactory.createFilter(s), this.globalData.defs.appendChild(i), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), a.appendChild(n), l.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")"))
          } else if (t === 2) {
            var o = createNS("mask");
            o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
            var p = createNS("g");
            o.appendChild(p), s = createElementID(), i = filtersFactory.createFilter(s);
            var g = createNS("feComponentTransfer");
            g.setAttribute("in", "SourceGraphic"), i.appendChild(g);
            var S = createNS("feFuncA");
            S.setAttribute("type", "table"), S.setAttribute("tableValues", "1.0 0.0"), g.appendChild(S), this.globalData.defs.appendChild(i);
            var u = createNS("rect");
            u.setAttribute("width", this.comp.data.w), u.setAttribute("height", this.comp.data.h), u.setAttribute("x", "0"), u.setAttribute("y", "0"), u.setAttribute("fill", "#ffffff"), u.setAttribute("opacity", "0"), p.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")"), p.appendChild(u), n = createNS("use"), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), p.appendChild(n), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), p.appendChild(u), a.appendChild(this.layerElement), p.appendChild(a)), this.globalData.defs.appendChild(o)
          }
          this.matteMasks[t] = r
        }
        return this.matteMasks[t]
      },
      setMatte: function(t) {
        this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")")
      }
    };

    function HierarchyElement() {}
    HierarchyElement.prototype = {
      initHierarchy: function() {
        this.hierarchy = [], this._isParent = !1, this.checkParenting()
      },
      setHierarchy: function(t) {
        this.hierarchy = t
      },
      setAsParent: function() {
        this._isParent = !0
      },
      checkParenting: function() {
        this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, [])
      }
    };

    function RenderableDOMElement() {}(function() {
      var e = {
        initElement: function(r, s, i) {
          this.initFrame(), this.initBaseData(r, s, i), this.initTransform(r, s, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
        },
        hide: function() {
          if (!this.hidden && (!this.isInRange || this.isTransparent)) {
            var r = this.baseElement || this.layerElement;
            r.style.display = "none", this.hidden = !0
          }
        },
        show: function() {
          if (this.isInRange && !this.isTransparent) {
            if (!this.data.hd) {
              var r = this.baseElement || this.layerElement;
              r.style.display = "block"
            }
            this.hidden = !1, this._isFirstFrame = !0
          }
        },
        renderFrame: function() {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
        },
        renderInnerContent: function() {},
        prepareFrame: function(r) {
          this._mdf = !1, this.prepareRenderableFrame(r), this.prepareProperties(r, this.isInRange), this.checkTransparency()
        },
        destroy: function() {
          this.innerElem = null, this.destroyBaseElement()
        }
      };
      extendPrototype([RenderableElement, createProxyFunction(e)], RenderableDOMElement)
    })();

    function IImageElement(e, t, r) {
      this.assetData = t.getAssetData(e.refId), this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)), this.initElement(e, t, r), this.sourceRect = {
        top: 0,
        left: 0,
        width: this.assetData.w,
        height: this.assetData.h
      }
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
      var e = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
    }, IImageElement.prototype.sourceRectAtTime = function() {
      return this.sourceRect
    };

    function ProcessedElement(e, t) {
      this.elem = e, this.pos = t
    }

    function IShapeElement() {}
    IShapeElement.prototype = {
      addShapeToModifiers: function(t) {
        var r, s = this.shapeModifiers.length;
        for (r = 0; r < s; r += 1) this.shapeModifiers[r].addShape(t)
      },
      isShapeInAnimatedModifiers: function(t) {
        for (var r = 0, s = this.shapeModifiers.length; r < s;)
          if (this.shapeModifiers[r].isAnimatedWithShape(t)) return !0;
        return !1
      },
      renderModifiers: function() {
        if (this.shapeModifiers.length) {
          var t, r = this.shapes.length;
          for (t = 0; t < r; t += 1) this.shapes[t].sh.reset();
          r = this.shapeModifiers.length;
          var s;
          for (t = r - 1; t >= 0 && (s = this.shapeModifiers[t].processShapes(this._isFirstFrame), !s); t -= 1);
        }
      },
      searchProcessedElement: function(t) {
        for (var r = this.processedElements, s = 0, i = r.length; s < i;) {
          if (r[s].elem === t) return r[s].pos;
          s += 1
        }
        return 0
      },
      addProcessedElement: function(t, r) {
        for (var s = this.processedElements, i = s.length; i;)
          if (i -= 1, s[i].elem === t) {
            s[i].pos = r;
            return
          } s.push(new ProcessedElement(t, r))
      },
      prepareFrame: function(t) {
        this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
      }
    };
    var lineCapEnum = {
          1: "butt",
          2: "round",
          3: "square"
        },
        lineJoinEnum = {
          1: "miter",
          2: "round",
          3: "bevel"
        };

    function SVGShapeData(e, t, r) {
      this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
      for (var s = 0, i = e.length; s < i;) {
        if (e[s].mProps.dynamicProperties.length) {
          this._isAnimated = !0;
          break
        }
        s += 1
      }
    }
    SVGShapeData.prototype.setAsAnimated = function() {
      this._isAnimated = !0
    };

    function SVGStyleData(e, t) {
      this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = e.hd === !0, this.pElem = createNS("path"), this.msElem = null
    }
    SVGStyleData.prototype.reset = function() {
      this.d = "", this._mdf = !1
    };

    function DashProperty(e, t, r, s) {
      this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(s);
      var i, n = t.length || 0,
          a;
      for (i = 0; i < n; i += 1) a = PropertyFactory.getProp(e, t[i].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[i] = {
        n: t[i].n,
        p: a
      };
      this.k || this.getValue(!0), this._isAnimated = this.k
    }
    DashProperty.prototype.getValue = function(e) {
      if (!(this.elem.globalData.frameId === this.frameId && !e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
        var t = 0,
            r = this.dataProps.length;
        for (this.renderer === "svg" && (this.dashStr = ""), t = 0; t < r; t += 1) this.dataProps[t].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
      }
    }, extendPrototype([DynamicPropertyContainer], DashProperty);

    function SVGStrokeStyleData(e, t, r) {
      this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
    }
    extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);

    function SVGFillStyleData(e, t, r) {
      this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r
    }
    extendPrototype([DynamicPropertyContainer], SVGFillStyleData);

    function SVGNoStyleData(e, t, r) {
      this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = r
    }
    extendPrototype([DynamicPropertyContainer], SVGNoStyleData);

    function GradientProperty(e, t, r) {
      this.data = t, this.c = createTypedArray("uint8c", t.p * 4);
      var s = t.k.k[0].s ? t.k.k[0].s.length - t.p * 4 : t.k.k.length - t.p * 4;
      this.o = createTypedArray("float32", s), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = s, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
    }
    GradientProperty.prototype.comparePoints = function(e, t) {
      for (var r = 0, s = this.o.length / 2, i; r < s;) {
        if (i = Math.abs(e[r * 4] - e[t * 4 + r * 2]), i > .01) return !1;
        r += 1
      }
      return !0
    }, GradientProperty.prototype.checkCollapsable = function() {
      if (this.o.length / 2 !== this.c.length / 4) return !1;
      if (this.data.k.k[0].s)
        for (var e = 0, t = this.data.k.k.length; e < t;) {
          if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
          e += 1
        } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
      return !0
    }, GradientProperty.prototype.getValue = function(e) {
      if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
        var t, r = this.data.p * 4,
            s, i;
        for (t = 0; t < r; t += 1) s = t % 4 === 0 ? 100 : 255, i = Math.round(this.prop.v[t] * s), this.c[t] !== i && (this.c[t] = i, this._cmdf = !e);
        if (this.o.length)
          for (r = this.prop.v.length, t = this.data.p * 4; t < r; t += 1) s = t % 2 === 0 ? 100 : 1, i = t % 2 === 0 ? Math.round(this.prop.v[t] * 100) : this.prop.v[t], this.o[t - this.data.p * 4] !== i && (this.o[t - this.data.p * 4] = i, this._omdf = !e);
        this._mdf = !e
      }
    }, extendPrototype([DynamicPropertyContainer], GradientProperty);

    function SVGGradientFillStyleData(e, t, r) {
      this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r)
    }
    SVGGradientFillStyleData.prototype.initGradientData = function(e, t, r) {
      this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {
        k: 0
      }, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || {
        k: 0
      }, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated
    }, SVGGradientFillStyleData.prototype.setGradientData = function(e, t) {
      var r = createElementID(),
          s = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
      s.setAttribute("id", r), s.setAttribute("spreadMethod", "pad"), s.setAttribute("gradientUnits", "userSpaceOnUse");
      var i = [],
          n, a, l;
      for (l = t.g.p * 4, a = 0; a < l; a += 4) n = createNS("stop"), s.appendChild(n), i.push(n);
      e.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = s, this.cst = i
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var r, s, i, n = createNS("mask"),
            a = createNS("path");
        n.appendChild(a);
        var l = createElementID(),
            o = createElementID();
        n.setAttribute("id", o);
        var p = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
        p.setAttribute("id", l), p.setAttribute("spreadMethod", "pad"), p.setAttribute("gradientUnits", "userSpaceOnUse"), i = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
        var g = this.stops;
        for (s = e.g.p * 4; s < i; s += 2) r = createNS("stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), p.appendChild(r), g.push(r);
        a.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + l + ")"), e.ty === "gs" && (a.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), e.lj === 1 && a.setAttribute("stroke-miterlimit", e.ml)), this.of = p, this.ms = n, this.ost = g, this.maskId = o, t.msElem = a
      }
    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);

    function SVGGradientStrokeStyleData(e, t, r) {
      this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated
    }
    extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);

    function ShapeGroupData() {
      this.it = [], this.prevViewData = [], this.gr = createNS("g")
    }

    function SVGTransformData(e, t, r) {
      this.transform = {
        mProps: e,
        op: t,
        container: r
      }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
    }
    var buildShapeString = function(t, r, s, i) {
          if (r === 0) return "";
          var n = t.o,
              a = t.i,
              l = t.v,
              o, p = " M" + i.applyToPointStringified(l[0][0], l[0][1]);
          for (o = 1; o < r; o += 1) p += " C" + i.applyToPointStringified(n[o - 1][0], n[o - 1][1]) + " " + i.applyToPointStringified(a[o][0], a[o][1]) + " " + i.applyToPointStringified(l[o][0], l[o][1]);
          return s && r && (p += " C" + i.applyToPointStringified(n[o - 1][0], n[o - 1][1]) + " " + i.applyToPointStringified(a[0][0], a[0][1]) + " " + i.applyToPointStringified(l[0][0], l[0][1]), p += "z"), p
        },
        SVGElementsRenderer = function() {
          var e = new Matrix,
              t = new Matrix,
              r = {
                createRenderFunction: s
              };

          function s(S) {
            switch (S.ty) {
              case "fl":
                return l;
              case "gf":
                return p;
              case "gs":
                return o;
              case "st":
                return g;
              case "sh":
              case "el":
              case "rc":
              case "sr":
                return a;
              case "tr":
                return i;
              case "no":
                return n;
              default:
                return null
            }
          }

          function i(S, u, E) {
            (E || u.transform.op._mdf) && u.transform.container.setAttribute("opacity", u.transform.op.v), (E || u.transform.mProps._mdf) && u.transform.container.setAttribute("transform", u.transform.mProps.v.to2dCSS())
          }

          function n() {}

          function a(S, u, E) {
            var b, x, M, m, d, f, y = u.styles.length,
                A = u.lvl,
                T, I, j, L;
            for (f = 0; f < y; f += 1) {
              if (m = u.sh._mdf || E, u.styles[f].lvl < A) {
                for (I = t.reset(), j = A - u.styles[f].lvl, L = u.transformers.length - 1; !m && j > 0;) m = u.transformers[L].mProps._mdf || m, j -= 1, L -= 1;
                if (m)
                  for (j = A - u.styles[f].lvl, L = u.transformers.length - 1; j > 0;) I.multiply(u.transformers[L].mProps.v), j -= 1, L -= 1
              } else I = e;
              if (T = u.sh.paths, x = T._length, m) {
                for (M = "", b = 0; b < x; b += 1) d = T.shapes[b], d && d._length && (M += buildShapeString(d, d._length, d.c, I));
                u.caches[f] = M
              } else M = u.caches[f];
              u.styles[f].d += S.hd === !0 ? "" : M, u.styles[f]._mdf = m || u.styles[f]._mdf
            }
          }

          function l(S, u, E) {
            var b = u.style;
            (u.c._mdf || E) && b.pElem.setAttribute("fill", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || E) && b.pElem.setAttribute("fill-opacity", u.o.v)
          }

          function o(S, u, E) {
            p(S, u, E), g(S, u, E)
          }

          function p(S, u, E) {
            var b = u.gf,
                x = u.g._hasOpacity,
                M = u.s.v,
                m = u.e.v;
            if (u.o._mdf || E) {
              var d = S.ty === "gf" ? "fill-opacity" : "stroke-opacity";
              u.style.pElem.setAttribute(d, u.o.v)
            }
            if (u.s._mdf || E) {
              var f = S.t === 1 ? "x1" : "cx",
                  y = f === "x1" ? "y1" : "cy";
              b.setAttribute(f, M[0]), b.setAttribute(y, M[1]), x && !u.g._collapsable && (u.of.setAttribute(f, M[0]), u.of.setAttribute(y, M[1]))
            }
            var A, T, I, j;
            if (u.g._cmdf || E) {
              A = u.cst;
              var L = u.g.c;
              for (I = A.length, T = 0; T < I; T += 1) j = A[T], j.setAttribute("offset", L[T * 4] + "%"), j.setAttribute("stop-color", "rgb(" + L[T * 4 + 1] + "," + L[T * 4 + 2] + "," + L[T * 4 + 3] + ")")
            }
            if (x && (u.g._omdf || E)) {
              var N = u.g.o;
              for (u.g._collapsable ? A = u.cst : A = u.ost, I = A.length, T = 0; T < I; T += 1) j = A[T], u.g._collapsable || j.setAttribute("offset", N[T * 2] + "%"), j.setAttribute("stop-opacity", N[T * 2 + 1])
            }
            if (S.t === 1)(u.e._mdf || E) && (b.setAttribute("x2", m[0]), b.setAttribute("y2", m[1]), x && !u.g._collapsable && (u.of.setAttribute("x2", m[0]), u.of.setAttribute("y2", m[1])));
            else {
              var V;
              if ((u.s._mdf || u.e._mdf || E) && (V = Math.sqrt(Math.pow(M[0] - m[0], 2) + Math.pow(M[1] - m[1], 2)), b.setAttribute("r", V), x && !u.g._collapsable && u.of.setAttribute("r", V)), u.e._mdf || u.h._mdf || u.a._mdf || E) {
                V || (V = Math.sqrt(Math.pow(M[0] - m[0], 2) + Math.pow(M[1] - m[1], 2)));
                var B = Math.atan2(m[1] - M[1], m[0] - M[0]),
                    O = u.h.v;
                O >= 1 ? O = .99 : O <= -1 && (O = -.99);
                var H = V * O,
                    $ = Math.cos(B + u.a.v) * H + M[0],
                    P = Math.sin(B + u.a.v) * H + M[1];
                b.setAttribute("fx", $), b.setAttribute("fy", P), x && !u.g._collapsable && (u.of.setAttribute("fx", $), u.of.setAttribute("fy", P))
              }
            }
          }

          function g(S, u, E) {
            var b = u.style,
                x = u.d;
            x && (x._mdf || E) && x.dashStr && (b.pElem.setAttribute("stroke-dasharray", x.dashStr), b.pElem.setAttribute("stroke-dashoffset", x.dashoffset[0])), u.c && (u.c._mdf || E) && b.pElem.setAttribute("stroke", "rgb(" + bmFloor(u.c.v[0]) + "," + bmFloor(u.c.v[1]) + "," + bmFloor(u.c.v[2]) + ")"), (u.o._mdf || E) && b.pElem.setAttribute("stroke-opacity", u.o.v), (u.w._mdf || E) && (b.pElem.setAttribute("stroke-width", u.w.v), b.msElem && b.msElem.setAttribute("stroke-width", u.w.v))
          }
          return r
        }();

    function SVGShapeElement(e, t, r) {
      this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
      var e, t = this.shapes.length,
          r, s, i = this.stylesList.length,
          n, a = [],
          l = !1;
      for (s = 0; s < i; s += 1) {
        for (n = this.stylesList[s], l = !1, a.length = 0, e = 0; e < t; e += 1) r = this.shapes[e], r.styles.indexOf(n) !== -1 && (a.push(r), l = r._isAnimated || l);
        a.length > 1 && l && this.setShapesAsAnimated(a)
      }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function(e) {
      var t, r = e.length;
      for (t = 0; t < r; t += 1) e[t].setAsAnimated()
    }, SVGShapeElement.prototype.createStyleElement = function(e, t) {
      var r, s = new SVGStyleData(e, t),
          i = s.pElem;
      if (e.ty === "st") r = new SVGStrokeStyleData(this, e, s);
      else if (e.ty === "fl") r = new SVGFillStyleData(this, e, s);
      else if (e.ty === "gf" || e.ty === "gs") {
        var n = e.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
        r = new n(this, e, s), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), i.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))
      } else e.ty === "no" && (r = new SVGNoStyleData(this, e, s));
      return (e.ty === "st" || e.ty === "gs") && (i.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), i.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), i.setAttribute("fill-opacity", "0"), e.lj === 1 && i.setAttribute("stroke-miterlimit", e.ml)), e.r === 2 && i.setAttribute("fill-rule", "evenodd"), e.ln && i.setAttribute("id", e.ln), e.cl && i.setAttribute("class", e.cl), e.bm && (i.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(s), this.addToAnimatedContents(e, r), r
    }, SVGShapeElement.prototype.createGroupElement = function(e) {
      var t = new ShapeGroupData;
      return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
    }, SVGShapeElement.prototype.createTransformElement = function(e, t) {
      var r = TransformPropertyFactory.getTransformProperty(this, e, this),
          s = new SVGTransformData(r, r.o, t);
      return this.addToAnimatedContents(e, s), s
    }, SVGShapeElement.prototype.createShapeElement = function(e, t, r) {
      var s = 4;
      e.ty === "rc" ? s = 5 : e.ty === "el" ? s = 6 : e.ty === "sr" && (s = 7);
      var i = ShapePropertyFactory.getShapeProp(this, e, s, this),
          n = new SVGShapeData(t, r, i);
      return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(e, n), n
    }, SVGShapeElement.prototype.addToAnimatedContents = function(e, t) {
      for (var r = 0, s = this.animatedContents.length; r < s;) {
        if (this.animatedContents[r].element === t) return;
        r += 1
      }
      this.animatedContents.push({
        fn: SVGElementsRenderer.createRenderFunction(e),
        element: t,
        data: e
      })
    }, SVGShapeElement.prototype.setElementStyles = function(e) {
      var t = e.styles,
          r, s = this.stylesList.length;
      for (r = 0; r < s; r += 1) this.stylesList[r].closed || t.push(this.stylesList[r])
    }, SVGShapeElement.prototype.reloadShapes = function() {
      this._isFirstFrame = !0;
      var e, t = this.itemsData.length;
      for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
      this.renderModifiers()
    }, SVGShapeElement.prototype.searchShapes = function(e, t, r, s, i, n, a) {
      var l = [].concat(n),
          o, p = e.length - 1,
          g, S, u = [],
          E = [],
          b, x, M;
      for (o = p; o >= 0; o -= 1) {
        if (M = this.searchProcessedElement(e[o]), M ? t[o] = r[M - 1] : e[o]._render = a, e[o].ty === "fl" || e[o].ty === "st" || e[o].ty === "gf" || e[o].ty === "gs" || e[o].ty === "no") M ? t[o].style.closed = !1 : t[o] = this.createStyleElement(e[o], i), e[o]._render && t[o].style.pElem.parentNode !== s && s.appendChild(t[o].style.pElem), u.push(t[o].style);
        else if (e[o].ty === "gr") {
          if (!M) t[o] = this.createGroupElement(e[o]);
          else
            for (S = t[o].it.length, g = 0; g < S; g += 1) t[o].prevViewData[g] = t[o].it[g];
          this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, i + 1, l, a), e[o]._render && t[o].gr.parentNode !== s && s.appendChild(t[o].gr)
        } else e[o].ty === "tr" ? (M || (t[o] = this.createTransformElement(e[o], s)), b = t[o].transform, l.push(b)) : e[o].ty === "sh" || e[o].ty === "rc" || e[o].ty === "el" || e[o].ty === "sr" ? (M || (t[o] = this.createShapeElement(e[o], l, i)), this.setElementStyles(t[o])) : e[o].ty === "tm" || e[o].ty === "rd" || e[o].ty === "ms" || e[o].ty === "pb" || e[o].ty === "zz" || e[o].ty === "op" ? (M ? (x = t[o], x.closed = !1) : (x = ShapeModifiers.getModifier(e[o].ty), x.init(this, e[o]), t[o] = x, this.shapeModifiers.push(x)), E.push(x)) : e[o].ty === "rp" && (M ? (x = t[o], x.closed = !0) : (x = ShapeModifiers.getModifier(e[o].ty), t[o] = x, x.init(this, e, o, t), this.shapeModifiers.push(x), a = !1), E.push(x));
        this.addProcessedElement(e[o], o + 1)
      }
      for (p = u.length, o = 0; o < p; o += 1) u[o].closed = !0;
      for (p = E.length, o = 0; o < p; o += 1) E[o].closed = !0
    }, SVGShapeElement.prototype.renderInnerContent = function() {
      this.renderModifiers();
      var e, t = this.stylesList.length;
      for (e = 0; e < t; e += 1) this.stylesList[e].reset();
      for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
    }, SVGShapeElement.prototype.renderShape = function() {
      var e, t = this.animatedContents.length,
          r;
      for (e = 0; e < t; e += 1) r = this.animatedContents[e], (this._isFirstFrame || r.element._isAnimated) && r.data !== !0 && r.fn(r.data, r.element, this._isFirstFrame)
    }, SVGShapeElement.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
    };

    function LetterProps(e, t, r, s, i, n) {
      this.o = e, this.sw = t, this.sc = r, this.fc = s, this.m = i, this.p = n, this._mdf = {
        o: !0,
        sw: !!t,
        sc: !!r,
        fc: !!s,
        m: !0,
        p: !0
      }
    }
    LetterProps.prototype.update = function(e, t, r, s, i, n) {
      this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
      var a = !1;
      return this.o !== e && (this.o = e, this._mdf.o = !0, a = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, a = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, a = !0), this.fc !== s && (this.fc = s, this._mdf.fc = !0, a = !0), this.m !== i && (this.m = i, this._mdf.m = !0, a = !0), n.length && (this.p[0] !== n[0] || this.p[1] !== n[1] || this.p[4] !== n[4] || this.p[5] !== n[5] || this.p[12] !== n[12] || this.p[13] !== n[13]) && (this.p = n, this._mdf.p = !0, a = !0), a
    };

    function TextProperty(e, t) {
      this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)), this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
        ascent: 0,
        boxWidth: this.defaultBoxWidth,
        f: "",
        fStyle: "",
        fWeight: "",
        fc: "",
        j: "",
        justifyOffset: "",
        l: [],
        lh: 0,
        lineWidths: [],
        ls: "",
        of: "",
        s: "",
        sc: "",
        sw: 0,
        t: 0,
        tr: 0,
        sz: 0,
        ps: null,
        fillColorAnim: !1,
        strokeColorAnim: !1,
        strokeWidthAnim: !1,
        yOffset: 0,
        finalSize: 0,
        finalText: [],
        finalLineHeight: 0,
        __complete: !1
      }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
    }
    TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(e, t) {
      for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e
    }, TextProperty.prototype.setCurrentData = function(e) {
      e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
    }, TextProperty.prototype.searchProperty = function() {
      return this.searchKeyframes()
    }, TextProperty.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
    }, TextProperty.prototype.addEffect = function(e) {
      this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
    }, TextProperty.prototype.getValue = function(e) {
      if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !e)) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var t = this.currentData,
            r = this.keysIndex;
        if (this.lock) {
          this.setCurrentData(this.currentData);
          return
        }
        this.lock = !0, this._mdf = !1;
        var s, i = this.effectsSequence.length,
            n = e || this.data.d.k[this.keysIndex].s;
        for (s = 0; s < i; s += 1) r !== this.keysIndex ? n = this.effectsSequence[s](n, n.t) : n = this.effectsSequence[s](this.currentData, n.t);
        t !== n && this.setCurrentData(n), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
      }
    }, TextProperty.prototype.getKeyframeValue = function() {
      for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, s = e.length; r <= s - 1 && !(r === s - 1 || e[r + 1].t > t);) r += 1;
      return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
    }, TextProperty.prototype.buildFinalText = function(e) {
      for (var t = [], r = 0, s = e.length, i, n, a = !1, l = !1, o = ""; r < s;) a = l, l = !1, i = e.charCodeAt(r), o = e.charAt(r), FontManager.isCombinedCharacter(i) ? a = !0 : i >= 55296 && i <= 56319 ? FontManager.isRegionalFlag(e, r) ? o = e.substr(r, 14) : (n = e.charCodeAt(r + 1), n >= 56320 && n <= 57343 && (FontManager.isModifier(i, n) ? (o = e.substr(r, 2), a = !0) : FontManager.isFlagEmoji(e.substr(r, 4)) ? o = e.substr(r, 4) : o = e.substr(r, 2))) : i > 56319 ? (n = e.charCodeAt(r + 1), FontManager.isVariationSelector(i) && (a = !0)) : FontManager.isZeroWidthJoiner(i) && (a = !0, l = !0), a ? (t[t.length - 1] += o, a = !1) : t.push(o), r += o.length;
      return t
    }, TextProperty.prototype.completeTextData = function(e) {
      e.__complete = !0;
      var t = this.elem.globalData.fontManager,
          r = this.data,
          s = [],
          i, n, a, l = 0,
          o, p = r.m.g,
          g = 0,
          S = 0,
          u = 0,
          E = [],
          b = 0,
          x = 0,
          M, m, d = t.getFontByName(e.f),
          f, y = 0,
          A = getFontProperties(d);
      e.fWeight = A.weight, e.fStyle = A.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), n = e.finalText.length, e.finalLineHeight = e.lh;
      var T = e.tr / 1e3 * e.finalSize,
          I;
      if (e.sz)
        for (var j = !0, L = e.sz[0], N = e.sz[1], V, B; j;) {
          B = this.buildFinalText(e.t), V = 0, b = 0, n = B.length, T = e.tr / 1e3 * e.finalSize;
          var O = -1;
          for (i = 0; i < n; i += 1) I = B[i].charCodeAt(0), a = !1, B[i] === " " ? O = i : (I === 13 || I === 3) && (b = 0, a = !0, V += e.finalLineHeight || e.finalSize * 1.2), t.chars ? (f = t.getCharData(B[i], d.fStyle, d.fFamily), y = a ? 0 : f.w * e.finalSize / 100) : y = t.measureText(B[i], e.f, e.finalSize), b + y > L && B[i] !== " " ? (O === -1 ? n += 1 : i = O, V += e.finalLineHeight || e.finalSize * 1.2, B.splice(i, O === i ? 1 : 0, "\r"), O = -1, b = 0) : (b += y, b += T);
          V += d.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && N < V ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = B, n = e.finalText.length, j = !1)
        }
      b = -T, y = 0;
      var H = 0,
          $;
      for (i = 0; i < n; i += 1)
        if (a = !1, $ = e.finalText[i], I = $.charCodeAt(0), I === 13 || I === 3 ? (H = 0, E.push(b), x = b > x ? b : x, b = -2 * T, o = "", a = !0, u += 1) : o = $, t.chars ? (f = t.getCharData($, d.fStyle, t.getFontByName(e.f).fFamily), y = a ? 0 : f.w * e.finalSize / 100) : y = t.measureText(o, e.f, e.finalSize), $ === " " ? H += y + T : (b += y + T + H, H = 0), s.push({
          l: y,
          an: y,
          add: g,
          n: a,
          anIndexes: [],
          val: o,
          line: u,
          animatorJustifyOffset: 0
        }), p == 2) {
          if (g += y, o === "" || o === " " || i === n - 1) {
            for ((o === "" || o === " ") && (g -= y); S <= i;) s[S].an = g, s[S].ind = l, s[S].extra = y, S += 1;
            l += 1, g = 0
          }
        } else if (p == 3) {
          if (g += y, o === "" || i === n - 1) {
            for (o === "" && (g -= y); S <= i;) s[S].an = g, s[S].ind = l, s[S].extra = y, S += 1;
            g = 0, l += 1
          }
        } else s[l].ind = l, s[l].extra = 0, l += 1;
      if (e.l = s, x = b > x ? b : x, E.push(b), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
      else switch (e.boxWidth = x, e.j) {
        case 1:
          e.justifyOffset = -e.boxWidth;
          break;
        case 2:
          e.justifyOffset = -e.boxWidth / 2;
          break;
        default:
          e.justifyOffset = 0
      }
      e.lineWidths = E;
      var P = r.a,
          R, C;
      m = P.length;
      var k, F, _ = [];
      for (M = 0; M < m; M += 1) {
        for (R = P[M], R.a.sc && (e.strokeColorAnim = !0), R.a.sw && (e.strokeWidthAnim = !0), (R.a.fc || R.a.fh || R.a.fs || R.a.fb) && (e.fillColorAnim = !0), F = 0, k = R.s.b, i = 0; i < n; i += 1) C = s[i], C.anIndexes[M] = F, (k == 1 && C.val !== "" || k == 2 && C.val !== "" && C.val !== " " || k == 3 && (C.n || C.val == " " || i == n - 1) || k == 4 && (C.n || i == n - 1)) && (R.s.rn === 1 && _.push(F), F += 1);
        r.a[M].s.totalChars = F;
        var D = -1,
            W;
        if (R.s.rn === 1)
          for (i = 0; i < n; i += 1) C = s[i], D != C.anIndexes[M] && (D = C.anIndexes[M], W = _.splice(Math.floor(Math.random() * _.length), 1)[0]), C.anIndexes[M] = W
      }
      e.yOffset = e.finalLineHeight || e.finalSize * 1.2, e.ls = e.ls || 0, e.ascent = d.ascent * e.finalSize / 100
    }, TextProperty.prototype.updateDocumentData = function(e, t) {
      t = t === void 0 ? this.keysIndex : t;
      var r = this.copyData({}, this.data.d.k[t].s);
      r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.setCurrentData(r), this.elem.addDynamicProperty(this)
    }, TextProperty.prototype.recalculate = function(e) {
      var t = this.data.d.k[e].s;
      t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
    }, TextProperty.prototype.canResizeFont = function(e) {
      this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
    }, TextProperty.prototype.setMinimumFontSize = function(e) {
      this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
    };
    var TextSelectorProp = function() {
      var e = Math.max,
          t = Math.min,
          r = Math.floor;

      function s(n, a) {
        this._currentTextLength = -1, this.k = !1, this.data = a, this.elem = n, this.comp = n.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(n), this.s = PropertyFactory.getProp(n, a.s || {
          k: 0
        }, 0, 0, this), "e" in a ? this.e = PropertyFactory.getProp(n, a.e, 0, 0, this) : this.e = {
          v: 100
        }, this.o = PropertyFactory.getProp(n, a.o || {
          k: 0
        }, 0, 0, this), this.xe = PropertyFactory.getProp(n, a.xe || {
          k: 0
        }, 0, 0, this), this.ne = PropertyFactory.getProp(n, a.ne || {
          k: 0
        }, 0, 0, this), this.sm = PropertyFactory.getProp(n, a.sm || {
          k: 100
        }, 0, 0, this), this.a = PropertyFactory.getProp(n, a.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
      }
      s.prototype = {
        getMult: function(a) {
          this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
          var l = 0,
              o = 0,
              p = 1,
              g = 1;
          this.ne.v > 0 ? l = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? p = 1 - this.xe.v / 100 : g = 1 + this.xe.v / 100;
          var S = BezierFactory.getBezierEasing(l, o, p, g).get,
              u = 0,
              E = this.finalS,
              b = this.finalE,
              x = this.data.sh;
          if (x === 2) b === E ? u = a >= b ? 1 : 0 : u = e(0, t(.5 / (b - E) + (a - E) / (b - E), 1)), u = S(u);
          else if (x === 3) b === E ? u = a >= b ? 0 : 1 : u = 1 - e(0, t(.5 / (b - E) + (a - E) / (b - E), 1)), u = S(u);
          else if (x === 4) b === E ? u = 0 : (u = e(0, t(.5 / (b - E) + (a - E) / (b - E), 1)), u < .5 ? u *= 2 : u = 1 - 2 * (u - .5)), u = S(u);
          else if (x === 5) {
            if (b === E) u = 0;
            else {
              var M = b - E;
              a = t(e(0, a + .5 - E), b - E);
              var m = -M / 2 + a,
                  d = M / 2;
              u = Math.sqrt(1 - m * m / (d * d))
            }
            u = S(u)
          } else x === 6 ? (b === E ? u = 0 : (a = t(e(0, a + .5 - E), b - E), u = (1 + Math.cos(Math.PI + Math.PI * 2 * a / (b - E))) / 2), u = S(u)) : (a >= r(E) && (a - E < 0 ? u = e(0, t(t(b, 1) - (E - a), 1)) : u = e(0, t(b - a, 1))), u = S(u));
          if (this.sm.v !== 100) {
            var f = this.sm.v * .01;
            f === 0 && (f = 1e-8);
            var y = .5 - f * .5;
            u < y ? u = 0 : (u = (u - y) / f, u > 1 && (u = 1))
          }
          return u * this.a.v
        },
        getValue: function(a) {
          this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
          var l = this.data.r === 2 ? 1 : 100 / this.data.totalChars,
              o = this.o.v / l,
              p = this.s.v / l + o,
              g = this.e.v / l + o;
          if (p > g) {
            var S = p;
            p = g, g = S
          }
          this.finalS = p, this.finalE = g
        }
      }, extendPrototype([DynamicPropertyContainer], s);

      function i(n, a, l) {
        return new s(n, a)
      }
      return {
        getTextSelectorProp: i
      }
    }();

    function TextAnimatorDataProperty(e, t, r) {
      var s = {
            propType: !1
          },
          i = PropertyFactory.getProp,
          n = t.a;
      this.a = {
        r: n.r ? i(e, n.r, 0, degToRads, r) : s,
        rx: n.rx ? i(e, n.rx, 0, degToRads, r) : s,
        ry: n.ry ? i(e, n.ry, 0, degToRads, r) : s,
        sk: n.sk ? i(e, n.sk, 0, degToRads, r) : s,
        sa: n.sa ? i(e, n.sa, 0, degToRads, r) : s,
        s: n.s ? i(e, n.s, 1, .01, r) : s,
        a: n.a ? i(e, n.a, 1, 0, r) : s,
        o: n.o ? i(e, n.o, 0, .01, r) : s,
        p: n.p ? i(e, n.p, 1, 0, r) : s,
        sw: n.sw ? i(e, n.sw, 0, 0, r) : s,
        sc: n.sc ? i(e, n.sc, 1, 0, r) : s,
        fc: n.fc ? i(e, n.fc, 1, 0, r) : s,
        fh: n.fh ? i(e, n.fh, 0, 0, r) : s,
        fs: n.fs ? i(e, n.fs, 0, .01, r) : s,
        fb: n.fb ? i(e, n.fb, 0, .01, r) : s,
        t: n.t ? i(e, n.t, 0, 0, r) : s
      }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t
    }

    function TextAnimatorProperty(e, t, r) {
      this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
        alignment: {}
      }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
      var e, t = this._textData.a.length,
          r, s = PropertyFactory.getProp;
      for (e = 0; e < t; e += 1) r = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, r, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = {
        a: s(this._elem, this._textData.p.a, 0, 0, this),
        f: s(this._elem, this._textData.p.f, 0, 0, this),
        l: s(this._elem, this._textData.p.l, 0, 0, this),
        r: s(this._elem, this._textData.p.r, 0, 0, this),
        p: s(this._elem, this._textData.p.p, 0, 0, this),
        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
      }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = s(this._elem, this._textData.m.a, 1, 0, this)
    }, TextAnimatorProperty.prototype.getMeasures = function(e, t) {
      if (this.lettersChangedFlag = t, !(!this._mdf && !this._isFirstFrame && !t && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
        this._isFirstFrame = !1;
        var r = this._moreOptions.alignment.v,
            s = this._animatorsData,
            i = this._textData,
            n = this.mHelper,
            a = this._renderType,
            l = this.renderedLetters.length,
            o, p, g, S, u = e.l,
            E, b, x, M, m, d, f, y, A, T, I, j, L, N, V;
        if (this._hasMaskedPath) {
          if (V = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var B = V.v;
            this._pathData.r.v && (B = B.reverse()), E = {
              tLength: 0,
              segments: []
            }, S = B._length - 1;
            var O;
            for (j = 0, g = 0; g < S; g += 1) O = bez.buildBezierData(B.v[g], B.v[g + 1], [B.o[g][0] - B.v[g][0], B.o[g][1] - B.v[g][1]], [B.i[g + 1][0] - B.v[g + 1][0], B.i[g + 1][1] - B.v[g + 1][1]]), E.tLength += O.segmentLength, E.segments.push(O), j += O.segmentLength;
            g = S, V.v.c && (O = bez.buildBezierData(B.v[g], B.v[0], [B.o[g][0] - B.v[g][0], B.o[g][1] - B.v[g][1]], [B.i[0][0] - B.v[0][0], B.i[0][1] - B.v[0][1]]), E.tLength += O.segmentLength, E.segments.push(O), j += O.segmentLength), this._pathData.pi = E
          }
          if (E = this._pathData.pi, b = this._pathData.f.v, f = 0, d = 1, M = 0, m = !0, T = E.segments, b < 0 && V.v.c)
            for (E.tLength < Math.abs(b) && (b = -Math.abs(b) % E.tLength), f = T.length - 1, A = T[f].points, d = A.length - 1; b < 0;) b += A[d].partialLength, d -= 1, d < 0 && (f -= 1, A = T[f].points, d = A.length - 1);
          A = T[f].points, y = A[d - 1], x = A[d], I = x.partialLength
        }
        S = u.length, o = 0, p = 0;
        var H = e.finalSize * 1.2 * .714,
            $ = !0,
            P, R, C, k, F;
        k = s.length;
        var _, D = -1,
            W, G, U, q = b,
            Z = f,
            X = d,
            se = -1,
            J, Y, ee, K, z, ne, he, ae, ie = "",
            oe = this.defaultPropsArray,
            le;
        if (e.j === 2 || e.j === 1) {
          var Q = 0,
              ce = 0,
              pe = e.j === 2 ? -.5 : -1,
              te = 0,
              ue = !0;
          for (g = 0; g < S; g += 1)
            if (u[g].n) {
              for (Q && (Q += ce); te < g;) u[te].animatorJustifyOffset = Q, te += 1;
              Q = 0, ue = !0
            } else {
              for (C = 0; C < k; C += 1) P = s[C].a, P.t.propType && (ue && e.j === 2 && (ce += P.t.v * pe), R = s[C].s, _ = R.getMult(u[g].anIndexes[C], i.a[C].s.totalChars), _.length ? Q += P.t.v * _[0] * pe : Q += P.t.v * _ * pe);
              ue = !1
            } for (Q && (Q += ce); te < g;) u[te].animatorJustifyOffset = Q, te += 1
        }
        for (g = 0; g < S; g += 1) {
          if (n.reset(), J = 1, u[g].n) o = 0, p += e.yOffset, p += $ ? 1 : 0, b = q, $ = !1, this._hasMaskedPath && (f = Z, d = X, A = T[f].points, y = A[d - 1], x = A[d], I = x.partialLength, M = 0), ie = "", ae = "", ne = "", le = "", oe = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (se !== u[g].line) {
                switch (e.j) {
                  case 1:
                    b += j - e.lineWidths[u[g].line];
                    break;
                  case 2:
                    b += (j - e.lineWidths[u[g].line]) / 2;
                    break
                }
                se = u[g].line
              }
              D !== u[g].ind && (u[D] && (b += u[D].extra), b += u[g].an / 2, D = u[g].ind), b += r[0] * u[g].an * .005;
              var re = 0;
              for (C = 0; C < k; C += 1) P = s[C].a, P.p.propType && (R = s[C].s, _ = R.getMult(u[g].anIndexes[C], i.a[C].s.totalChars), _.length ? re += P.p.v[0] * _[0] : re += P.p.v[0] * _), P.a.propType && (R = s[C].s, _ = R.getMult(u[g].anIndexes[C], i.a[C].s.totalChars), _.length ? re += P.a.v[0] * _[0] : re += P.a.v[0] * _);
              for (m = !0, this._pathData.a.v && (b = u[0].an * .5 + (j - this._pathData.f.v - u[0].an * .5 - u[u.length - 1].an * .5) * D / (S - 1), b += this._pathData.f.v); m;) M + I >= b + re || !A ? (L = (b + re - M) / x.partialLength, G = y.point[0] + (x.point[0] - y.point[0]) * L, U = y.point[1] + (x.point[1] - y.point[1]) * L, n.translate(-r[0] * u[g].an * .005, -(r[1] * H) * .01), m = !1) : A && (M += x.partialLength, d += 1, d >= A.length && (d = 0, f += 1, T[f] ? A = T[f].points : V.v.c ? (d = 0, f = 0, A = T[f].points) : (M -= x.partialLength, A = null)), A && (y = x, x = A[d], I = x.partialLength));
              W = u[g].an / 2 - u[g].add, n.translate(-W, 0, 0)
            } else W = u[g].an / 2 - u[g].add, n.translate(-W, 0, 0), n.translate(-r[0] * u[g].an * .005, -r[1] * H * .01, 0);
            for (C = 0; C < k; C += 1) P = s[C].a, P.t.propType && (R = s[C].s, _ = R.getMult(u[g].anIndexes[C], i.a[C].s.totalChars), (o !== 0 || e.j !== 0) && (this._hasMaskedPath ? _.length ? b += P.t.v * _[0] : b += P.t.v * _ : _.length ? o += P.t.v * _[0] : o += P.t.v * _));
            for (e.strokeWidthAnim && (ee = e.sw || 0), e.strokeColorAnim && (e.sc ? Y = [e.sc[0], e.sc[1], e.sc[2]] : Y = [0, 0, 0]), e.fillColorAnim && e.fc && (K = [e.fc[0], e.fc[1], e.fc[2]]), C = 0; C < k; C += 1) P = s[C].a, P.a.propType && (R = s[C].s, _ = R.getMult(u[g].anIndexes[C], i.a[C].s.totalChars), _.length ? n.translate(-P.a.v[0] * _[0], -P.a.v[1] * _[1], P.a.v[2] * _[2]) : n.translate(-P.a.v[0] * _, -P.a.v[1] * _, P.a.v[2] * _));
            for (C = 0; C < k; C += 1) P = s[C].a, P.s.propType && (R = s[C].s, _ = R.getMult(u[g].anIndexes[C], i.a[C].s.totalChars), _.length ? n.scale(1 + (P.s.v[0] - 1) * _[0], 1 + (P.s.v[1] - 1) * _[1], 1) : n.scale(1 + (P.s.v[0] - 1) * _, 1 + (P.s.v[1] - 1) * _, 1));
            for (C = 0; C < k; C += 1) {
              if (P = s[C].a, R = s[C].s, _ = R.getMult(u[g].anIndexes[C], i.a[C].s.totalChars), P.sk.propType && (_.length ? n.skewFromAxis(-P.sk.v * _[0], P.sa.v * _[1]) : n.skewFromAxis(-P.sk.v * _, P.sa.v * _)), P.r.propType && (_.length ? n.rotateZ(-P.r.v * _[2]) : n.rotateZ(-P.r.v * _)), P.ry.propType && (_.length ? n.rotateY(P.ry.v * _[1]) : n.rotateY(P.ry.v * _)), P.rx.propType && (_.length ? n.rotateX(P.rx.v * _[0]) : n.rotateX(P.rx.v * _)), P.o.propType && (_.length ? J += (P.o.v * _[0] - J) * _[0] : J += (P.o.v * _ - J) * _), e.strokeWidthAnim && P.sw.propType && (_.length ? ee += P.sw.v * _[0] : ee += P.sw.v * _), e.strokeColorAnim && P.sc.propType)
                for (z = 0; z < 3; z += 1) _.length ? Y[z] += (P.sc.v[z] - Y[z]) * _[0] : Y[z] += (P.sc.v[z] - Y[z]) * _;
              if (e.fillColorAnim && e.fc) {
                if (P.fc.propType)
                  for (z = 0; z < 3; z += 1) _.length ? K[z] += (P.fc.v[z] - K[z]) * _[0] : K[z] += (P.fc.v[z] - K[z]) * _;
                P.fh.propType && (_.length ? K = addHueToRGB(K, P.fh.v * _[0]) : K = addHueToRGB(K, P.fh.v * _)), P.fs.propType && (_.length ? K = addSaturationToRGB(K, P.fs.v * _[0]) : K = addSaturationToRGB(K, P.fs.v * _)), P.fb.propType && (_.length ? K = addBrightnessToRGB(K, P.fb.v * _[0]) : K = addBrightnessToRGB(K, P.fb.v * _))
              }
            }
            for (C = 0; C < k; C += 1) P = s[C].a, P.p.propType && (R = s[C].s, _ = R.getMult(u[g].anIndexes[C], i.a[C].s.totalChars), this._hasMaskedPath ? _.length ? n.translate(0, P.p.v[1] * _[0], -P.p.v[2] * _[1]) : n.translate(0, P.p.v[1] * _, -P.p.v[2] * _) : _.length ? n.translate(P.p.v[0] * _[0], P.p.v[1] * _[1], -P.p.v[2] * _[2]) : n.translate(P.p.v[0] * _, P.p.v[1] * _, -P.p.v[2] * _));
            if (e.strokeWidthAnim && (ne = ee < 0 ? 0 : ee), e.strokeColorAnim && (he = "rgb(" + Math.round(Y[0] * 255) + "," + Math.round(Y[1] * 255) + "," + Math.round(Y[2] * 255) + ")"), e.fillColorAnim && e.fc && (ae = "rgb(" + Math.round(K[0] * 255) + "," + Math.round(K[1] * 255) + "," + Math.round(K[2] * 255) + ")"), this._hasMaskedPath) {
              if (n.translate(0, -e.ls), n.translate(0, r[1] * H * .01 + p, 0), this._pathData.p.v) {
                N = (x.point[1] - y.point[1]) / (x.point[0] - y.point[0]);
                var fe = Math.atan(N) * 180 / Math.PI;
                x.point[0] < y.point[0] && (fe += 180), n.rotate(-fe * Math.PI / 180)
              }
              n.translate(G, U, 0), b -= r[0] * u[g].an * .005, u[g + 1] && D !== u[g + 1].ind && (b += u[g].an / 2, b += e.tr * .001 * e.finalSize)
            } else {
              switch (n.translate(o, p, 0), e.ps && n.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                case 1:
                  n.translate(u[g].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[u[g].line]), 0, 0);
                  break;
                case 2:
                  n.translate(u[g].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[u[g].line]) / 2, 0, 0);
                  break
              }
              n.translate(0, -e.ls), n.translate(W, 0, 0), n.translate(r[0] * u[g].an * .005, r[1] * H * .01, 0), o += u[g].l + e.tr * .001 * e.finalSize
            }
            a === "html" ? ie = n.toCSS() : a === "svg" ? ie = n.to2dCSS() : oe = [n.props[0], n.props[1], n.props[2], n.props[3], n.props[4], n.props[5], n.props[6], n.props[7], n.props[8], n.props[9], n.props[10], n.props[11], n.props[12], n.props[13], n.props[14], n.props[15]], le = J
          }
          l <= g ? (F = new LetterProps(le, ne, he, ae, ie, oe), this.renderedLetters.push(F), l += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[g], this.lettersChangedFlag = F.update(le, ne, he, ae, ie, oe) || this.lettersChangedFlag)
        }
      }
    }, TextAnimatorProperty.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
    }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);

    function ITextElement() {}
    ITextElement.prototype.initElement = function(e, t, r) {
      this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
    }, ITextElement.prototype.prepareFrame = function(e) {
      this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
    }, ITextElement.prototype.createPathShape = function(e, t) {
      var r, s = t.length,
          i, n = "";
      for (r = 0; r < s; r += 1) t[r].ty === "sh" && (i = t[r].ks.k, n += buildShapeString(i, i.i.length, !0, e));
      return n
    }, ITextElement.prototype.updateDocumentData = function(e, t) {
      this.textProperty.updateDocumentData(e, t)
    }, ITextElement.prototype.canResizeFont = function(e) {
      this.textProperty.canResizeFont(e)
    }, ITextElement.prototype.setMinimumFontSize = function(e) {
      this.textProperty.setMinimumFontSize(e)
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(e, t, r, s, i) {
      switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
        case 1:
          t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
          break;
        case 2:
          t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0);
          break
      }
      t.translate(s, i, 0)
    }, ITextElement.prototype.buildColor = function(e) {
      return "rgb(" + Math.round(e[0] * 255) + "," + Math.round(e[1] * 255) + "," + Math.round(e[2] * 255) + ")"
    }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
      (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
    };
    var emptyShapeData = {
      shapes: []
    };

    function SVGTextLottieElement(e, t, r) {
      this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r)
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
    }, SVGTextLottieElement.prototype.buildTextContents = function(e) {
      for (var t = 0, r = e.length, s = [], i = ""; t < r;) e[t] === "\r" || e[t] === "" ? (s.push(i), i = "") : i += e[t], t += 1;
      return s.push(i), s
    }, SVGTextLottieElement.prototype.buildShapeData = function(e, t) {
      if (e.shapes && e.shapes.length) {
        var r = e.shapes[0];
        if (r.it) {
          var s = r.it[r.it.length - 1];
          s.s && (s.s.k[0] = t, s.s.k[1] = t)
        }
      }
      return e
    }, SVGTextLottieElement.prototype.buildNewText = function() {
      this.addDynamicProperty(this);
      var e, t, r = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
      var s = this.globalData.fontManager.getFontByName(r.f);
      if (s.fClass) this.layerElement.setAttribute("class", s.fClass);
      else {
        this.layerElement.setAttribute("font-family", s.fFamily);
        var i = r.fWeight,
            n = r.fStyle;
        this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", i)
      }
      this.layerElement.setAttribute("aria-label", r.t);
      var a = r.l || [],
          l = !!this.globalData.fontManager.chars;
      t = a.length;
      var o, p = this.mHelper,
          g = "",
          S = this.data.singleShape,
          u = 0,
          E = 0,
          b = !0,
          x = r.tr * .001 * r.finalSize;
      if (S && !l && !r.sz) {
        var M = this.textContainer,
            m = "start";
        switch (r.j) {
          case 1:
            m = "end";
            break;
          case 2:
            m = "middle";
            break;
          default:
            m = "start";
            break
        }
        M.setAttribute("text-anchor", m), M.setAttribute("letter-spacing", x);
        var d = this.buildTextContents(r.finalText);
        for (t = d.length, E = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1) o = this.textSpans[e].span || createNS("tspan"), o.textContent = d[e], o.setAttribute("x", 0), o.setAttribute("y", E), o.style.display = "inherit", M.appendChild(o), this.textSpans[e] || (this.textSpans[e] = {
          span: null,
          glyph: null
        }), this.textSpans[e].span = o, E += r.finalLineHeight;
        this.layerElement.appendChild(M)
      } else {
        var f = this.textSpans.length,
            y;
        for (e = 0; e < t; e += 1) {
          if (this.textSpans[e] || (this.textSpans[e] = {
            span: null,
            childSpan: null,
            glyph: null
          }), !l || !S || e === 0) {
            if (o = f > e ? this.textSpans[e].span : createNS(l ? "g" : "text"), f <= e) {
              if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = o, l) {
                var A = createNS("g");
                o.appendChild(A), this.textSpans[e].childSpan = A
              }
              this.textSpans[e].span = o, this.layerElement.appendChild(o)
            }
            o.style.display = "inherit"
          }
          if (p.reset(), S && (a[e].n && (u = -x, E += r.yOffset, E += b ? 1 : 0, b = !1), this.applyTextPropertiesToMatrix(r, p, a[e].line, u, E), u += a[e].l || 0, u += x), l) {
            y = this.globalData.fontManager.getCharData(r.finalText[e], s.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
            var T;
            if (y.t === 1) T = new SVGCompElement(y.data, this.globalData, this);
            else {
              var I = emptyShapeData;
              y.data && y.data.shapes && (I = this.buildShapeData(y.data, r.finalSize)), T = new SVGShapeElement(I, this.globalData, this)
            }
            if (this.textSpans[e].glyph) {
              var j = this.textSpans[e].glyph;
              this.textSpans[e].childSpan.removeChild(j.layerElement), j.destroy()
            }
            this.textSpans[e].glyph = T, T._debug = !0, T.prepareFrame(0), T.renderFrame(), this.textSpans[e].childSpan.appendChild(T.layerElement), y.t === 1 && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
          } else S && o.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), o.textContent = a[e].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
        }
        S && o && o.setAttribute("d", g)
      }
      for (; e < this.textSpans.length;) this.textSpans[e].span.style.display = "none", e += 1;
      this._sizeChanged = !0
    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = !1;
        var e = this.layerElement.getBBox();
        this.bbox = {
          top: e.y,
          left: e.x,
          width: e.width,
          height: e.height
        }
      }
      return this.bbox
    }, SVGTextLottieElement.prototype.getValue = function() {
      var e, t = this.textSpans.length,
          r;
      for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < t; e += 1) r = this.textSpans[e].glyph, r && (r.prepareFrame(this.comp.renderedFrame - this.data.st), r._mdf && (this._mdf = !0))
    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
      if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        this._sizeChanged = !0;
        var e, t, r = this.textAnimator.renderedLetters,
            s = this.textProperty.currentData.l;
        t = s.length;
        var i, n, a;
        for (e = 0; e < t; e += 1) s[e].n || (i = r[e], n = this.textSpans[e].span, a = this.textSpans[e].glyph, a && a.renderFrame(), i._mdf.m && n.setAttribute("transform", i.m), i._mdf.o && n.setAttribute("opacity", i.o), i._mdf.sw && n.setAttribute("stroke-width", i.sw), i._mdf.sc && n.setAttribute("stroke", i.sc), i._mdf.fc && n.setAttribute("fill", i.fc))
      }
    };

    function ISolidElement(e, t, r) {
      this.initElement(e, t, r)
    }
    extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
      var e = createNS("rect");
      e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
    };

    function NullElement(e, t, r) {
      this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy()
    }
    NullElement.prototype.prepareFrame = function(e) {
      this.prepareProperties(e, !0)
    }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
      return null
    }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);

    function SVGRendererBase() {}
    extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(e) {
      return new NullElement(e, this.globalData, this)
    }, SVGRendererBase.prototype.createShape = function(e) {
      return new SVGShapeElement(e, this.globalData, this)
    }, SVGRendererBase.prototype.createText = function(e) {
      return new SVGTextLottieElement(e, this.globalData, this)
    }, SVGRendererBase.prototype.createImage = function(e) {
      return new IImageElement(e, this.globalData, this)
    }, SVGRendererBase.prototype.createSolid = function(e) {
      return new ISolidElement(e, this.globalData, this)
    }, SVGRendererBase.prototype.configAnimation = function(e) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var t = this.globalData.defs;
      this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
      var r = createNS("clipPath"),
          s = createNS("rect");
      s.setAttribute("width", e.w), s.setAttribute("height", e.h), s.setAttribute("x", 0), s.setAttribute("y", 0);
      var i = createElementID();
      r.setAttribute("id", i), r.appendChild(s), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + i + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
    }, SVGRendererBase.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var e, t = this.layers ? this.layers.length : 0;
      for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(e) {
      var t = 0,
          r = this.layers.length;
      for (t = 0; t < r; t += 1)
        if (this.layers[t].ind === e) return t;
      return -1
    }, SVGRendererBase.prototype.buildItem = function(e) {
      var t = this.elements;
      if (!(t[e] || this.layers[e].ty === 99)) {
        t[e] = !0;
        var r = this.createItem(this.layers[e]);
        if (t[e] = r, getExpressionsPlugin() && (this.layers[e].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt) {
          var s = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
          if (s === -1) return;
          if (!this.elements[s] || this.elements[s] === !0) this.buildItem(s), this.addPendingElement(r);
          else {
            var i = t[s],
                n = i.getMatte(this.layers[e].tt);
            r.setMatte(n)
          }
        }
      }
    }, SVGRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length;) {
        var e = this.pendingElements.pop();
        if (e.checkParenting(), e.data.tt)
          for (var t = 0, r = this.elements.length; t < r;) {
            if (this.elements[t] === e) {
              var s = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                  i = this.elements[s],
                  n = i.getMatte(this.layers[t].tt);
              e.setMatte(n);
              break
            }
            t += 1
          }
      }
    }, SVGRendererBase.prototype.renderFrame = function(e) {
      if (!(this.renderedFrame === e || this.destroyed)) {
        e === null ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
        var t, r = this.layers.length;
        for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
        if (this.globalData._mdf)
          for (t = 0; t < r; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
      }
    }, SVGRendererBase.prototype.appendElementInPos = function(e, t) {
      var r = e.getBaseElement();
      if (r) {
        for (var s = 0, i; s < t;) this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement() && (i = this.elements[s].getBaseElement()), s += 1;
        i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
      }
    }, SVGRendererBase.prototype.hide = function() {
      this.layerElement.style.display = "none"
    }, SVGRendererBase.prototype.show = function() {
      this.layerElement.style.display = "block"
    };

    function ICompElement() {}
    extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(e, t, r) {
      this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !t.progressiveLoad) && this.buildAllItems(), this.hide()
    }, ICompElement.prototype.prepareFrame = function(e) {
      if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), !(!this.isInRange && !this.data.xt)) {
        if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
        else {
          var t = this.tm.v;
          t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
        }
        var r, s = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), r = s - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
      }
    }, ICompElement.prototype.renderInnerContent = function() {
      var e, t = this.layers.length;
      for (e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
    }, ICompElement.prototype.setElements = function(e) {
      this.elements = e
    }, ICompElement.prototype.getElements = function() {
      return this.elements
    }, ICompElement.prototype.destroyElements = function() {
      var e, t = this.layers.length;
      for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
    }, ICompElement.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement()
    };

    function SVGCompElement(e, t, r) {
      this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
        _placeholder: !0
      }
    }
    extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(e) {
      return new SVGCompElement(e, this.globalData, this)
    };

    function SVGRenderer(e, t) {
      this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
      var r = "";
      if (t && t.title) {
        var s = createNS("title"),
            i = createElementID();
        s.setAttribute("id", i), s.textContent = t.title, this.svgElement.appendChild(s), r += i
      }
      if (t && t.description) {
        var n = createNS("desc"),
            a = createElementID();
        n.setAttribute("id", a), n.textContent = t.description, this.svgElement.appendChild(n), r += " " + a
      }
      r && this.svgElement.setAttribute("aria-labelledby", r);
      var l = createNS("defs");
      this.svgElement.appendChild(l);
      var o = createNS("g");
      this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = {
        preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
        contentVisibility: t && t.contentVisibility || "visible",
        progressiveLoad: t && t.progressiveLoad || !1,
        hideOnTransparent: !(t && t.hideOnTransparent === !1),
        viewBoxOnly: t && t.viewBoxOnly || !1,
        viewBoxSize: t && t.viewBoxSize || !1,
        className: t && t.className || "",
        id: t && t.id || "",
        focusable: t && t.focusable,
        filterSize: {
          width: t && t.filterSize && t.filterSize.width || "100%",
          height: t && t.filterSize && t.filterSize.height || "100%",
          x: t && t.filterSize && t.filterSize.x || "0%",
          y: t && t.filterSize && t.filterSize.y || "0%"
        },
        width: t && t.width,
        height: t && t.height,
        runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        defs: l,
        renderConfig: this.renderConfig
      }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
    }
    extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(e) {
      return new SVGCompElement(e, this.globalData, this)
    };

    function ShapeTransformManager() {
      this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
    }
    ShapeTransformManager.prototype = {
      addTransformSequence: function(t) {
        var r, s = t.length,
            i = "_";
        for (r = 0; r < s; r += 1) i += t[r].transform.key + "_";
        var n = this.sequences[i];
        return n || (n = {
          transforms: [].concat(t),
          finalTransform: new Matrix,
          _mdf: !1
        }, this.sequences[i] = n, this.sequenceList.push(n)), n
      },
      processSequence: function(t, r) {
        for (var s = 0, i = t.transforms.length, n = r; s < i && !r;) {
          if (t.transforms[s].transform.mProps._mdf) {
            n = !0;
            break
          }
          s += 1
        }
        if (n)
          for (t.finalTransform.reset(), s = i - 1; s >= 0; s -= 1) t.finalTransform.multiply(t.transforms[s].transform.mProps.v);
        t._mdf = n
      },
      processSequences: function(t) {
        var r, s = this.sequenceList.length;
        for (r = 0; r < s; r += 1) this.processSequence(this.sequenceList[r], t)
      },
      getNewKey: function() {
        return this.transform_key_count += 1, "_" + this.transform_key_count
      }
    };
    var lumaLoader = function() {
      var t = "__lottie_element_luma_buffer",
          r = null,
          s = null,
          i = null;

      function n() {
        var o = createNS("svg"),
            p = createNS("filter"),
            g = createNS("feColorMatrix");
        return p.setAttribute("id", t), g.setAttribute("type", "matrix"), g.setAttribute("color-interpolation-filters", "sRGB"), g.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), p.appendChild(g), o.appendChild(p), o.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (o.style.display = "none"), o
      }

      function a() {
        r || (i = n(), document.body.appendChild(i), r = createTag("canvas"), s = r.getContext("2d"), s.filter = "url(#" + t + ")", s.fillStyle = "rgba(0,0,0,0)", s.fillRect(0, 0, 1, 1))
      }

      function l(o) {
        return r || a(), r.width = o.width, r.height = o.height, s.filter = "url(#" + t + ")", r
      }
      return {
        load: a,
        get: l
      }
    };

    function createCanvas(e, t) {
      if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
      var r = createTag("canvas");
      return r.width = e, r.height = t, r
    }
    var assetLoader = function() {
          return {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas
          }
        }(),
        registeredEffects = {};

    function CVEffects(e) {
      var t, r = e.data.ef ? e.data.ef.length : 0;
      this.filters = [];
      var s;
      for (t = 0; t < r; t += 1) {
        s = null;
        var i = e.data.ef[t].ty;
        if (registeredEffects[i]) {
          var n = registeredEffects[i].effect;
          s = new n(e.effectsManager.effectElements[t], e)
        }
        s && this.filters.push(s)
      }
      this.filters.length && e.addRenderableComponent(this)
    }
    CVEffects.prototype.renderFrame = function(e) {
      var t, r = this.filters.length;
      for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
    }, CVEffects.prototype.getEffects = function(e) {
      var t, r = this.filters.length,
          s = [];
      for (t = 0; t < r; t += 1) this.filters[t].type === e && s.push(this.filters[t]);
      return s
    };

    function registerEffect(e, t) {
      registeredEffects[e] = {
        effect: t
      }
    }

    function CVMaskElement(e, t) {
      this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
      var r, s = this.masksProperties.length,
          i = !1;
      for (r = 0; r < s; r += 1) this.masksProperties[r].mode !== "n" && (i = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
      this.hasMasks = i, i && this.element.addRenderableComponent(this)
    }
    CVMaskElement.prototype.renderFrame = function() {
      if (this.hasMasks) {
        var e = this.element.finalTransform.mat,
            t = this.element.canvasContext,
            r, s = this.masksProperties.length,
            i, n, a;
        for (t.beginPath(), r = 0; r < s; r += 1)
          if (this.masksProperties[r].mode !== "n") {
            this.masksProperties[r].inv && (t.moveTo(0, 0), t.lineTo(this.element.globalData.compSize.w, 0), t.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), t.lineTo(0, this.element.globalData.compSize.h), t.lineTo(0, 0)), a = this.viewData[r].v, i = e.applyToPointArray(a.v[0][0], a.v[0][1], 0), t.moveTo(i[0], i[1]);
            var l, o = a._length;
            for (l = 1; l < o; l += 1) n = e.applyToTriplePoints(a.o[l - 1], a.i[l], a.v[l]), t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
            n = e.applyToTriplePoints(a.o[l - 1], a.i[0], a.v[0]), t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5])
          } this.element.globalData.renderer.save(!0), t.clip()
      }
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
      this.element = null
    };

    function CVBaseElement() {}
    var operationsMap = {
      1: "source-in",
      2: "source-out",
      3: "source-in",
      4: "source-out"
    };
    CVBaseElement.prototype = {
      createElements: function() {},
      initRendererElement: function() {},
      createContainerElements: function() {
        if (this.data.tt >= 1) {
          this.buffers = [];
          var t = this.globalData.canvasContext,
              r = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
          this.buffers.push(r);
          var s = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
          this.buffers.push(s), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
        }
        this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
      },
      createContent: function() {},
      setBlendMode: function() {
        var t = this.globalData;
        if (t.blendMode !== this.data.bm) {
          t.blendMode = this.data.bm;
          var r = getBlendMode(this.data.bm);
          t.canvasContext.globalCompositeOperation = r
        }
      },
      createRenderableComponents: function() {
        this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
      },
      hideElement: function() {
        !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0)
      },
      showElement: function() {
        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
      },
      clearCanvas: function(t) {
        t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
      },
      prepareLayer: function() {
        if (this.data.tt >= 1) {
          var t = this.buffers[0],
              r = t.getContext("2d");
          this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
        }
      },
      exitLayer: function() {
        if (this.data.tt >= 1) {
          var t = this.buffers[1],
              r = t.getContext("2d");
          this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
          var s = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
          if (s.renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
            var i = assetLoader.getLumaCanvas(this.canvasContext.canvas),
                n = i.getContext("2d");
            n.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(i, 0, 0)
          }
          this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
        }
      },
      renderFrame: function(t) {
        if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !t)) {
          this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
          var r = this.data.ty === 0;
          this.prepareLayer(), this.globalData.renderer.save(r), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(r), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
        }
      },
      destroy: function() {
        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
      },
      mHelper: new Matrix
    }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;

    function CVShapeData(e, t, r, s) {
      this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
      var i = 4;
      t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, i, e);
      var n, a = r.length,
          l;
      for (n = 0; n < a; n += 1) r[n].closed || (l = {
        transforms: s.addTransformSequence(r[n].transforms),
        trNodes: []
      }, this.styledShapes.push(l), r[n].elements.push(l))
    }
    CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;

    function CVShapeElement(e, t, r) {
      this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, r)
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
      opacity: 1,
      _opMdf: !1
    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
    }, CVShapeElement.prototype.createStyleElement = function(e, t) {
      var r = {
            data: e,
            type: e.ty,
            preTransforms: this.transformsManager.addTransformSequence(t),
            transforms: [],
            elements: [],
            closed: e.hd === !0
          },
          s = {};
      if (e.ty === "fl" || e.ty === "st" ? (s.c = PropertyFactory.getProp(this, e.c, 1, 255, this), s.c.k || (r.co = "rgb(" + bmFloor(s.c.v[0]) + "," + bmFloor(s.c.v[1]) + "," + bmFloor(s.c.v[2]) + ")")) : (e.ty === "gf" || e.ty === "gs") && (s.s = PropertyFactory.getProp(this, e.s, 1, null, this), s.e = PropertyFactory.getProp(this, e.e, 1, null, this), s.h = PropertyFactory.getProp(this, e.h || {
        k: 0
      }, 0, .01, this), s.a = PropertyFactory.getProp(this, e.a || {
        k: 0
      }, 0, degToRads, this), s.g = new GradientProperty(this, e.g, this)), s.o = PropertyFactory.getProp(this, e.o, 0, .01, this), e.ty === "st" || e.ty === "gs") {
        if (r.lc = lineCapEnum[e.lc || 2], r.lj = lineJoinEnum[e.lj || 2], e.lj == 1 && (r.ml = e.ml), s.w = PropertyFactory.getProp(this, e.w, 0, null, this), s.w.k || (r.wi = s.w.v), e.d) {
          var i = new DashProperty(this, e.d, "canvas", this);
          s.d = i, s.d.k || (r.da = s.d.dashArray, r.do = s.d.dashoffset[0])
        }
      } else r.r = e.r === 2 ? "evenodd" : "nonzero";
      return this.stylesList.push(r), s.style = r, s
    }, CVShapeElement.prototype.createGroupElement = function() {
      var e = {
        it: [],
        prevViewData: []
      };
      return e
    }, CVShapeElement.prototype.createTransformElement = function(e) {
      var t = {
        transform: {
          opacity: 1,
          _opMdf: !1,
          key: this.transformsManager.getNewKey(),
          op: PropertyFactory.getProp(this, e.o, 0, .01, this),
          mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
        }
      };
      return t
    }, CVShapeElement.prototype.createShapeElement = function(e) {
      var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
      return this.shapes.push(t), this.addShapeToModifiers(t), t
    }, CVShapeElement.prototype.reloadShapes = function() {
      this._isFirstFrame = !0;
      var e, t = this.itemsData.length;
      for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
    }, CVShapeElement.prototype.addTransformToStyleList = function(e) {
      var t, r = this.stylesList.length;
      for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
      var e, t = this.stylesList.length;
      for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
    }, CVShapeElement.prototype.closeStyles = function(e) {
      var t, r = e.length;
      for (t = 0; t < r; t += 1) e[t].closed = !0
    }, CVShapeElement.prototype.searchShapes = function(e, t, r, s, i) {
      var n, a = e.length - 1,
          l, o, p = [],
          g = [],
          S, u, E, b = [].concat(i);
      for (n = a; n >= 0; n -= 1) {
        if (S = this.searchProcessedElement(e[n]), S ? t[n] = r[S - 1] : e[n]._shouldRender = s, e[n].ty === "fl" || e[n].ty === "st" || e[n].ty === "gf" || e[n].ty === "gs") S ? t[n].style.closed = !1 : t[n] = this.createStyleElement(e[n], b), p.push(t[n].style);
        else if (e[n].ty === "gr") {
          if (!S) t[n] = this.createGroupElement(e[n]);
          else
            for (o = t[n].it.length, l = 0; l < o; l += 1) t[n].prevViewData[l] = t[n].it[l];
          this.searchShapes(e[n].it, t[n].it, t[n].prevViewData, s, b)
        } else e[n].ty === "tr" ? (S || (E = this.createTransformElement(e[n]), t[n] = E), b.push(t[n]), this.addTransformToStyleList(t[n])) : e[n].ty === "sh" || e[n].ty === "rc" || e[n].ty === "el" || e[n].ty === "sr" ? S || (t[n] = this.createShapeElement(e[n])) : e[n].ty === "tm" || e[n].ty === "rd" || e[n].ty === "pb" || e[n].ty === "zz" || e[n].ty === "op" ? (S ? (u = t[n], u.closed = !1) : (u = ShapeModifiers.getModifier(e[n].ty), u.init(this, e[n]), t[n] = u, this.shapeModifiers.push(u)), g.push(u)) : e[n].ty === "rp" && (S ? (u = t[n], u.closed = !0) : (u = ShapeModifiers.getModifier(e[n].ty), t[n] = u, u.init(this, e, n, t), this.shapeModifiers.push(u), s = !1), g.push(u));
        this.addProcessedElement(e[n], n + 1)
      }
      for (this.removeTransformFromStyleList(), this.closeStyles(p), a = g.length, n = 0; n < a; n += 1) g[n].closed = !0
    }, CVShapeElement.prototype.renderInnerContent = function() {
      this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
    }, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
      (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
    }, CVShapeElement.prototype.drawLayer = function() {
      var e, t = this.stylesList.length,
          r, s, i, n, a, l, o = this.globalData.renderer,
          p = this.globalData.canvasContext,
          g, S;
      for (e = 0; e < t; e += 1)
        if (S = this.stylesList[e], g = S.type, !((g === "st" || g === "gs") && S.wi === 0 || !S.data._shouldRender || S.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
          for (o.save(), a = S.elements, g === "st" || g === "gs" ? (o.ctxStrokeStyle(g === "st" ? S.co : S.grd), o.ctxLineWidth(S.wi), o.ctxLineCap(S.lc), o.ctxLineJoin(S.lj), o.ctxMiterLimit(S.ml || 0)) : o.ctxFillStyle(g === "fl" ? S.co : S.grd), o.ctxOpacity(S.coOp), g !== "st" && g !== "gs" && p.beginPath(), o.ctxTransform(S.preTransforms.finalTransform.props), s = a.length, r = 0; r < s; r += 1) {
            for ((g === "st" || g === "gs") && (p.beginPath(), S.da && (p.setLineDash(S.da), p.lineDashOffset = S.do)), l = a[r].trNodes, n = l.length, i = 0; i < n; i += 1) l[i].t === "m" ? p.moveTo(l[i].p[0], l[i].p[1]) : l[i].t === "c" ? p.bezierCurveTo(l[i].pts[0], l[i].pts[1], l[i].pts[2], l[i].pts[3], l[i].pts[4], l[i].pts[5]) : p.closePath();
            (g === "st" || g === "gs") && (o.ctxStroke(), S.da && p.setLineDash(this.dashResetter))
          }
          g !== "st" && g !== "gs" && this.globalData.renderer.ctxFill(S.r), o.restore()
        }
    }, CVShapeElement.prototype.renderShape = function(e, t, r, s) {
      var i, n = t.length - 1,
          a;
      for (a = e, i = n; i >= 0; i -= 1) t[i].ty === "tr" ? (a = r[i].transform, this.renderShapeTransform(e, a)) : t[i].ty === "sh" || t[i].ty === "el" || t[i].ty === "rc" || t[i].ty === "sr" ? this.renderPath(t[i], r[i]) : t[i].ty === "fl" ? this.renderFill(t[i], r[i], a) : t[i].ty === "st" ? this.renderStroke(t[i], r[i], a) : t[i].ty === "gf" || t[i].ty === "gs" ? this.renderGradientFill(t[i], r[i], a) : t[i].ty === "gr" ? this.renderShape(a, t[i].it, r[i].it) : t[i].ty;
      s && this.drawLayer()
    }, CVShapeElement.prototype.renderStyledShape = function(e, t) {
      if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
        var r = e.trNodes,
            s = t.paths,
            i, n, a, l = s._length;
        r.length = 0;
        var o = e.transforms.finalTransform;
        for (a = 0; a < l; a += 1) {
          var p = s.shapes[a];
          if (p && p.v) {
            for (n = p._length, i = 1; i < n; i += 1) i === 1 && r.push({
              t: "m",
              p: o.applyToPointArray(p.v[0][0], p.v[0][1], 0)
            }), r.push({
              t: "c",
              pts: o.applyToTriplePoints(p.o[i - 1], p.i[i], p.v[i])
            });
            n === 1 && r.push({
              t: "m",
              p: o.applyToPointArray(p.v[0][0], p.v[0][1], 0)
            }), p.c && n && (r.push({
              t: "c",
              pts: o.applyToTriplePoints(p.o[i - 1], p.i[0], p.v[0])
            }), r.push({
              t: "z"
            }))
          }
        }
        e.trNodes = r
      }
    }, CVShapeElement.prototype.renderPath = function(e, t) {
      if (e.hd !== !0 && e._shouldRender) {
        var r, s = t.styledShapes.length;
        for (r = 0; r < s; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh)
      }
    }, CVShapeElement.prototype.renderFill = function(e, t, r) {
      var s = t.style;
      (t.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (s.coOp = t.o.v * r.opacity)
    }, CVShapeElement.prototype.renderGradientFill = function(e, t, r) {
      var s = t.style,
          i;
      if (!s.grd || t.g._mdf || t.s._mdf || t.e._mdf || e.t !== 1 && (t.h._mdf || t.a._mdf)) {
        var n = this.globalData.canvasContext,
            a = t.s.v,
            l = t.e.v;
        if (e.t === 1) i = n.createLinearGradient(a[0], a[1], l[0], l[1]);
        else {
          var o = Math.sqrt(Math.pow(a[0] - l[0], 2) + Math.pow(a[1] - l[1], 2)),
              p = Math.atan2(l[1] - a[1], l[0] - a[0]),
              g = t.h.v;
          g >= 1 ? g = .99 : g <= -1 && (g = -.99);
          var S = o * g,
              u = Math.cos(p + t.a.v) * S + a[0],
              E = Math.sin(p + t.a.v) * S + a[1];
          i = n.createRadialGradient(u, E, 0, a[0], a[1], o)
        }
        var b, x = e.g.p,
            M = t.g.c,
            m = 1;
        for (b = 0; b < x; b += 1) t.g._hasOpacity && t.g._collapsable && (m = t.g.o[b * 2 + 1]), i.addColorStop(M[b * 4] / 100, "rgba(" + M[b * 4 + 1] + "," + M[b * 4 + 2] + "," + M[b * 4 + 3] + "," + m + ")");
        s.grd = i
      }
      s.coOp = t.o.v * r.opacity
    }, CVShapeElement.prototype.renderStroke = function(e, t, r) {
      var s = t.style,
          i = t.d;
      i && (i._mdf || this._isFirstFrame) && (s.da = i.dashArray, s.do = i.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (s.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (s.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (s.wi = t.w.v)
    }, CVShapeElement.prototype.destroy = function() {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
    };

    function CVTextElement(e, t, r) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
        fill: "rgba(0,0,0,0)",
        stroke: "rgba(0,0,0,0)",
        sWidth: 0,
        fValue: ""
      }, this.initElement(e, t, r)
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
      var e = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
      var t = !1;
      e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
      var r = !1;
      e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
      var s = this.globalData.fontManager.getFontByName(e.f),
          i, n, a = e.l,
          l = this.mHelper;
      this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, n = e.finalText.length;
      var o, p, g, S, u, E, b, x, M, m, d = this.data.singleShape,
          f = e.tr * .001 * e.finalSize,
          y = 0,
          A = 0,
          T = !0,
          I = 0;
      for (i = 0; i < n; i += 1) {
        o = this.globalData.fontManager.getCharData(e.finalText[i], s.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily), p = o && o.data || {}, l.reset(), d && a[i].n && (y = -f, A += e.yOffset, A += T ? 1 : 0, T = !1), u = p.shapes ? p.shapes[0].it : [], b = u.length, l.scale(e.finalSize / 100, e.finalSize / 100), d && this.applyTextPropertiesToMatrix(e, l, a[i].line, y, A), M = createSizedArray(b - 1);
        var j = 0;
        for (E = 0; E < b; E += 1)
          if (u[E].ty === "sh") {
            for (S = u[E].ks.k.i.length, x = u[E].ks.k, m = [], g = 1; g < S; g += 1) g === 1 && m.push(l.applyToX(x.v[0][0], x.v[0][1], 0), l.applyToY(x.v[0][0], x.v[0][1], 0)), m.push(l.applyToX(x.o[g - 1][0], x.o[g - 1][1], 0), l.applyToY(x.o[g - 1][0], x.o[g - 1][1], 0), l.applyToX(x.i[g][0], x.i[g][1], 0), l.applyToY(x.i[g][0], x.i[g][1], 0), l.applyToX(x.v[g][0], x.v[g][1], 0), l.applyToY(x.v[g][0], x.v[g][1], 0));
            m.push(l.applyToX(x.o[g - 1][0], x.o[g - 1][1], 0), l.applyToY(x.o[g - 1][0], x.o[g - 1][1], 0), l.applyToX(x.i[0][0], x.i[0][1], 0), l.applyToY(x.i[0][0], x.i[0][1], 0), l.applyToX(x.v[0][0], x.v[0][1], 0), l.applyToY(x.v[0][0], x.v[0][1], 0)), M[j] = m, j += 1
          } d && (y += a[i].l, y += f), this.textSpans[I] ? this.textSpans[I].elem = M : this.textSpans[I] = {
          elem: M
        }, I += 1
      }
    }, CVTextElement.prototype.renderInnerContent = function() {
      this.validateText();
      var e = this.canvasContext;
      e.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
      var t, r, s, i, n, a, l = this.textAnimator.renderedLetters,
          o = this.textProperty.currentData.l;
      r = o.length;
      var p, g = null,
          S = null,
          u = null,
          E, b, x = this.globalData.renderer;
      for (t = 0; t < r; t += 1)
        if (!o[t].n) {
          if (p = l[t], p && (x.save(), x.ctxTransform(p.p), x.ctxOpacity(p.o)), this.fill) {
            for (p && p.fc ? g !== p.fc && (x.ctxFillStyle(p.fc), g = p.fc) : g !== this.values.fill && (g = this.values.fill, x.ctxFillStyle(this.values.fill)), E = this.textSpans[t].elem, i = E.length, this.globalData.canvasContext.beginPath(), s = 0; s < i; s += 1)
              for (b = E[s], a = b.length, this.globalData.canvasContext.moveTo(b[0], b[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(b[n], b[n + 1], b[n + 2], b[n + 3], b[n + 4], b[n + 5]);
            this.globalData.canvasContext.closePath(), x.ctxFill()
          }
          if (this.stroke) {
            for (p && p.sw ? u !== p.sw && (u = p.sw, x.ctxLineWidth(p.sw)) : u !== this.values.sWidth && (u = this.values.sWidth, x.ctxLineWidth(this.values.sWidth)), p && p.sc ? S !== p.sc && (S = p.sc, x.ctxStrokeStyle(p.sc)) : S !== this.values.stroke && (S = this.values.stroke, x.ctxStrokeStyle(this.values.stroke)), E = this.textSpans[t].elem, i = E.length, this.globalData.canvasContext.beginPath(), s = 0; s < i; s += 1)
              for (b = E[s], a = b.length, this.globalData.canvasContext.moveTo(b[0], b[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(b[n], b[n + 1], b[n + 2], b[n + 3], b[n + 4], b[n + 5]);
            this.globalData.canvasContext.closePath(), x.ctxStroke()
          }
          p && this.globalData.renderer.restore()
        }
    };

    function CVImageElement(e, t, r) {
      this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, r)
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
      if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var e = createTag("canvas");
        e.width = this.assetData.w, e.height = this.assetData.h;
        var t = e.getContext("2d"),
            r = this.img.width,
            s = this.img.height,
            i = r / s,
            n = this.assetData.w / this.assetData.h,
            a, l, o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        i > n && o === "xMidYMid slice" || i < n && o !== "xMidYMid slice" ? (l = s, a = l * n) : (a = r, l = a / n), t.drawImage(this.img, (r - a) / 2, (s - l) / 2, a, l, 0, 0, this.assetData.w, this.assetData.h), this.img = e
      }
    }, CVImageElement.prototype.renderInnerContent = function() {
      this.canvasContext.drawImage(this.img, 0, 0)
    }, CVImageElement.prototype.destroy = function() {
      this.img = null
    };

    function CVSolidElement(e, t, r) {
      this.initElement(e, t, r)
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
      this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
    };

    function CanvasRendererBase() {}
    extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(e) {
      return new CVShapeElement(e, this.globalData, this)
    }, CanvasRendererBase.prototype.createText = function(e) {
      return new CVTextElement(e, this.globalData, this)
    }, CanvasRendererBase.prototype.createImage = function(e) {
      return new CVImageElement(e, this.globalData, this)
    }, CanvasRendererBase.prototype.createSolid = function(e) {
      return new CVSolidElement(e, this.globalData, this)
    }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(e) {
      e[0] === 1 && e[1] === 0 && e[4] === 0 && e[5] === 1 && e[12] === 0 && e[13] === 0 || this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
    }, CanvasRendererBase.prototype.ctxOpacity = function(e) {
      this.canvasContext.globalAlpha *= e < 0 ? 0 : e
    }, CanvasRendererBase.prototype.ctxFillStyle = function(e) {
      this.canvasContext.fillStyle = e
    }, CanvasRendererBase.prototype.ctxStrokeStyle = function(e) {
      this.canvasContext.strokeStyle = e
    }, CanvasRendererBase.prototype.ctxLineWidth = function(e) {
      this.canvasContext.lineWidth = e
    }, CanvasRendererBase.prototype.ctxLineCap = function(e) {
      this.canvasContext.lineCap = e
    }, CanvasRendererBase.prototype.ctxLineJoin = function(e) {
      this.canvasContext.lineJoin = e
    }, CanvasRendererBase.prototype.ctxMiterLimit = function(e) {
      this.canvasContext.miterLimit = e
    }, CanvasRendererBase.prototype.ctxFill = function(e) {
      this.canvasContext.fill(e)
    }, CanvasRendererBase.prototype.ctxFillRect = function(e, t, r, s) {
      this.canvasContext.fillRect(e, t, r, s)
    }, CanvasRendererBase.prototype.ctxStroke = function() {
      this.canvasContext.stroke()
    }, CanvasRendererBase.prototype.reset = function() {
      if (!this.renderConfig.clearCanvas) {
        this.canvasContext.restore();
        return
      }
      this.contextData.reset()
    }, CanvasRendererBase.prototype.save = function() {
      this.canvasContext.save()
    }, CanvasRendererBase.prototype.restore = function(e) {
      if (!this.renderConfig.clearCanvas) {
        this.canvasContext.restore();
        return
      }
      e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e)
    }, CanvasRendererBase.prototype.configAnimation = function(e) {
      if (this.animationItem.wrapper) {
        this.animationItem.container = createTag("canvas");
        var t = this.animationItem.container.style;
        t.width = "100%", t.height = "100%";
        var r = "0px 0px 0px";
        t.transformOrigin = r, t.mozTransformOrigin = r, t.webkitTransformOrigin = r, t["-webkit-transform"] = r, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
      } else this.canvasContext = this.renderConfig.context;
      this.contextData.setContext(this.canvasContext), this.data = e, this.layers = e.layers, this.transformCanvas = {
        w: e.w,
        h: e.h,
        sx: 0,
        sy: 0,
        tx: 0,
        ty: 0
      }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
    }, CanvasRendererBase.prototype.updateContainerSize = function(e, t) {
      this.reset();
      var r, s;
      e ? (r = e, s = t, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = s) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, s = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, s = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = s * this.renderConfig.dpr);
      var i, n;
      if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
        var a = this.renderConfig.preserveAspectRatio.split(" "),
            l = a[1] || "meet",
            o = a[0] || "xMidYMid",
            p = o.substr(0, 4),
            g = o.substr(4);
        i = r / s, n = this.transformCanvas.w / this.transformCanvas.h, n > i && l === "meet" || n < i && l === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = s / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = s / (this.transformCanvas.h / this.renderConfig.dpr)), p === "xMid" && (n < i && l === "meet" || n > i && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (s / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : p === "xMax" && (n < i && l === "meet" || n > i && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (s / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, g === "YMid" && (n > i && l === "meet" || n < i && l === "slice") ? this.transformCanvas.ty = (s - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : g === "YMax" && (n > i && l === "meet" || n < i && l === "slice") ? this.transformCanvas.ty = (s - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0
      } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = s / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
    }, CanvasRendererBase.prototype.destroy = function() {
      this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
      var e, t = this.layers ? this.layers.length : 0;
      for (e = t - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
    }, CanvasRendererBase.prototype.renderFrame = function(e, t) {
      if (!(this.renderedFrame === e && this.renderConfig.clearCanvas === !0 && !t || this.destroyed || e === -1)) {
        this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
        var r, s = this.layers.length;
        for (this.completeLayers || this.checkLayers(e), r = s - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
        if (this.globalData._mdf) {
          for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = s - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
          this.renderConfig.clearCanvas !== !0 && this.restore()
        }
      }
    }, CanvasRendererBase.prototype.buildItem = function(e) {
      var t = this.elements;
      if (!(t[e] || this.layers[e].ty === 99)) {
        var r = this.createItem(this.layers[e], this, this.globalData);
        t[e] = r, r.initExpressions()
      }
    }, CanvasRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length;) {
        var e = this.pendingElements.pop();
        e.checkParenting()
      }
    }, CanvasRendererBase.prototype.hide = function() {
      this.animationItem.container.style.display = "none"
    }, CanvasRendererBase.prototype.show = function() {
      this.animationItem.container.style.display = "block"
    };

    function CanvasContext() {
      this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
    }

    function CVContextData() {
      this.stack = [], this.cArrPos = 0, this.cTr = new Matrix;
      var e, t = 15;
      for (e = 0; e < t; e += 1) {
        var r = new CanvasContext;
        this.stack[e] = r
      }
      this._length = t, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
    }
    CVContextData.prototype.duplicate = function() {
      var e = this._length * 2,
          t = 0;
      for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext;
      this._length = e
    }, CVContextData.prototype.reset = function() {
      this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
    }, CVContextData.prototype.restore = function(e) {
      this.cArrPos -= 1;
      var t = this.stack[this.cArrPos],
          r = t.transform,
          s, i = this.cTr.props;
      for (s = 0; s < 16; s += 1) i[s] = r[s];
      if (e) {
        this.nativeContext.restore();
        var n = this.stack[this.cArrPos + 1];
        this.appliedFillStyle = n.fillStyle, this.appliedStrokeStyle = n.strokeStyle, this.appliedLineWidth = n.lineWidth, this.appliedLineCap = n.lineCap, this.appliedLineJoin = n.lineJoin, this.appliedMiterLimit = n.miterLimit
      }
      this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (e || t.opacity !== -1 && this.currentOpacity !== t.opacity) && (this.nativeContext.globalAlpha = t.opacity, this.currentOpacity = t.opacity), this.currentFillStyle = t.fillStyle, this.currentStrokeStyle = t.strokeStyle, this.currentLineWidth = t.lineWidth, this.currentLineCap = t.lineCap, this.currentLineJoin = t.lineJoin, this.currentMiterLimit = t.miterLimit
    }, CVContextData.prototype.save = function(e) {
      e && this.nativeContext.save();
      var t = this.cTr.props;
      this._length <= this.cArrPos && this.duplicate();
      var r = this.stack[this.cArrPos],
          s;
      for (s = 0; s < 16; s += 1) r.transform[s] = t[s];
      this.cArrPos += 1;
      var i = this.stack[this.cArrPos];
      i.opacity = r.opacity, i.fillStyle = r.fillStyle, i.strokeStyle = r.strokeStyle, i.lineWidth = r.lineWidth, i.lineCap = r.lineCap, i.lineJoin = r.lineJoin, i.miterLimit = r.miterLimit
    }, CVContextData.prototype.setOpacity = function(e) {
      this.stack[this.cArrPos].opacity = e
    }, CVContextData.prototype.setContext = function(e) {
      this.nativeContext = e
    }, CVContextData.prototype.fillStyle = function(e) {
      this.stack[this.cArrPos].fillStyle !== e && (this.currentFillStyle = e, this.stack[this.cArrPos].fillStyle = e)
    }, CVContextData.prototype.strokeStyle = function(e) {
      this.stack[this.cArrPos].strokeStyle !== e && (this.currentStrokeStyle = e, this.stack[this.cArrPos].strokeStyle = e)
    }, CVContextData.prototype.lineWidth = function(e) {
      this.stack[this.cArrPos].lineWidth !== e && (this.currentLineWidth = e, this.stack[this.cArrPos].lineWidth = e)
    }, CVContextData.prototype.lineCap = function(e) {
      this.stack[this.cArrPos].lineCap !== e && (this.currentLineCap = e, this.stack[this.cArrPos].lineCap = e)
    }, CVContextData.prototype.lineJoin = function(e) {
      this.stack[this.cArrPos].lineJoin !== e && (this.currentLineJoin = e, this.stack[this.cArrPos].lineJoin = e)
    }, CVContextData.prototype.miterLimit = function(e) {
      this.stack[this.cArrPos].miterLimit !== e && (this.currentMiterLimit = e, this.stack[this.cArrPos].miterLimit = e)
    }, CVContextData.prototype.transform = function(e) {
      this.transformMat.cloneFromProps(e);
      var t = this.cTr;
      this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
      var r = t.props;
      this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
    }, CVContextData.prototype.opacity = function(e) {
      var t = this.stack[this.cArrPos].opacity;
      t *= e < 0 ? 0 : e, this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && (this.nativeContext.globalAlpha = e, this.currentOpacity = e), this.stack[this.cArrPos].opacity = t)
    }, CVContextData.prototype.fill = function(e) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(e)
    }, CVContextData.prototype.fillRect = function(e, t, r, s) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(e, t, r, s)
    }, CVContextData.prototype.stroke = function() {
      this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
    };

    function CVCompElement(e, t, r) {
      this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
        _placeholder: !0
      }
    }
    extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
      var e = this.canvasContext;
      e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip();
      var t, r = this.layers.length;
      for (t = r - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
    }, CVCompElement.prototype.destroy = function() {
      var e, t = this.layers.length;
      for (e = t - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
      this.layers = null, this.elements = null
    }, CVCompElement.prototype.createComp = function(e) {
      return new CVCompElement(e, this.globalData, this)
    };

    function CanvasRenderer(e, t) {
      this.animationItem = e, this.renderConfig = {
        clearCanvas: t && t.clearCanvas !== void 0 ? t.clearCanvas : !0,
        context: t && t.context || null,
        progressiveLoad: t && t.progressiveLoad || !1,
        preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
        contentVisibility: t && t.contentVisibility || "visible",
        className: t && t.className || "",
        id: t && t.id || "",
        runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
      }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
        frameNum: -1,
        _mdf: !1,
        renderConfig: this.renderConfig,
        currentGlobalAlpha: -1
      }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
    }
    extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(e) {
      return new CVCompElement(e, this.globalData, this)
    };

    function HBaseElement() {}
    HBaseElement.prototype = {
      checkBlendMode: function() {},
      initRendererElement: function() {
        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
      },
      createContainerElements: function() {
        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode()
      },
      renderElement: function() {
        var t = this.transformedElement ? this.transformedElement.style : {};
        if (this.finalTransform._matMdf) {
          var r = this.finalTransform.mat.toCSS();
          t.transform = r, t.webkitTransform = r
        }
        this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
      },
      renderFrame: function() {
        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
      },
      destroy: function() {
        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
      },
      createRenderableComponents: function() {
        this.maskManager = new MaskElement(this.data, this, this.globalData)
      },
      addEffects: function() {},
      setMatte: function() {}
    }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;

    function HSolidElement(e, t, r) {
      this.initElement(e, t, r)
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
      var e;
      this.data.hasMask ? (e = createNS("rect"), e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (e = createTag("div"), e.style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e)
    };

    function HShapeElement(e, t, r) {
      this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
        x: 999999,
        y: -999999,
        h: 0,
        w: 0
      }
    }
    extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
      var e;
      if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
      else {
        e = createNS("svg");
        var t = this.comp.data ? this.comp.data : this.globalData.compSize;
        e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e)
      }
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e
    }, HShapeElement.prototype.getTransformedPoint = function(e, t) {
      var r, s = e.length;
      for (r = 0; r < s; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
      return t
    }, HShapeElement.prototype.calculateShapeBoundingBox = function(e, t) {
      var r = e.sh.v,
          s = e.transformers,
          i, n = r._length,
          a, l, o, p;
      if (!(n <= 1)) {
        for (i = 0; i < n - 1; i += 1) a = this.getTransformedPoint(s, r.v[i]), l = this.getTransformedPoint(s, r.o[i]), o = this.getTransformedPoint(s, r.i[i + 1]), p = this.getTransformedPoint(s, r.v[i + 1]), this.checkBounds(a, l, o, p, t);
        r.c && (a = this.getTransformedPoint(s, r.v[i]), l = this.getTransformedPoint(s, r.o[i]), o = this.getTransformedPoint(s, r.i[0]), p = this.getTransformedPoint(s, r.v[0]), this.checkBounds(a, l, o, p, t))
      }
    }, HShapeElement.prototype.checkBounds = function(e, t, r, s, i) {
      this.getBoundsOfCurve(e, t, r, s);
      var n = this.shapeBoundingBox;
      i.x = bmMin(n.left, i.x), i.xMax = bmMax(n.right, i.xMax), i.y = bmMin(n.top, i.y), i.yMax = bmMax(n.bottom, i.yMax)
    }, HShapeElement.prototype.shapeBoundingBox = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, HShapeElement.prototype.tempBoundingBox = {
      x: 0,
      xMax: 0,
      y: 0,
      yMax: 0,
      width: 0,
      height: 0
    }, HShapeElement.prototype.getBoundsOfCurve = function(e, t, r, s) {
      for (var i = [
        [e[0], s[0]],
        [e[1], s[1]]
      ], n, a, l, o, p, g, S, u = 0; u < 2; ++u) a = 6 * e[u] - 12 * t[u] + 6 * r[u], n = -3 * e[u] + 9 * t[u] - 9 * r[u] + 3 * s[u], l = 3 * t[u] - 3 * e[u], a |= 0, n |= 0, l |= 0, n === 0 && a === 0 || (n === 0 ? (o = -l / a, o > 0 && o < 1 && i[u].push(this.calculateF(o, e, t, r, s, u))) : (p = a * a - 4 * l * n, p >= 0 && (g = (-a + bmSqrt(p)) / (2 * n), g > 0 && g < 1 && i[u].push(this.calculateF(g, e, t, r, s, u)), S = (-a - bmSqrt(p)) / (2 * n), S > 0 && S < 1 && i[u].push(this.calculateF(S, e, t, r, s, u)))));
      this.shapeBoundingBox.left = bmMin.apply(null, i[0]), this.shapeBoundingBox.top = bmMin.apply(null, i[1]), this.shapeBoundingBox.right = bmMax.apply(null, i[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, i[1])
    }, HShapeElement.prototype.calculateF = function(e, t, r, s, i, n) {
      return bmPow(1 - e, 3) * t[n] + 3 * bmPow(1 - e, 2) * e * r[n] + 3 * (1 - e) * bmPow(e, 2) * s[n] + bmPow(e, 3) * i[n]
    }, HShapeElement.prototype.calculateBoundingBox = function(e, t) {
      var r, s = e.length;
      for (r = 0; r < s; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, t) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t)
    }, HShapeElement.prototype.expandStrokeBoundingBox = function(e, t) {
      var r = 0;
      if (e.keyframes) {
        for (var s = 0; s < e.keyframes.length; s += 1) {
          var i = e.keyframes[s].s;
          i > r && (r = i)
        }
        r *= e.mult
      } else r = e.v * e.mult;
      t.x -= r, t.xMax += r, t.y -= r, t.yMax += r
    }, HShapeElement.prototype.currentBoxContains = function(e) {
      return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height
    }, HShapeElement.prototype.renderInnerContent = function() {
      if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
        var e = this.tempBoundingBox,
            t = 999999;
        if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
        var r = !1;
        if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
          this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
          var s = this.shapeCont.style,
              i = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
          s.transform = i, s.webkitTransform = i
        }
      }
    };

    function HTextElement(e, t, r) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = {
        x: 999999,
        y: -999999,
        h: 0,
        w: 0
      }, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r)
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
      if (this.isMasked = this.checkMasks(), this.isMasked) {
        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
        var e = createNS("g");
        this.maskedElement.appendChild(e), this.innerElem = e
      } else this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting()
    }, HTextElement.prototype.buildNewText = function() {
      var e = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
      var t = this.innerElem.style,
          r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
      t.fill = r, t.color = r, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
      var s = this.globalData.fontManager.getFontByName(e.f);
      if (!this.globalData.fontManager.chars)
        if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
        else {
          t.fontFamily = s.fFamily;
          var i = e.fWeight,
              n = e.fStyle;
          t.fontStyle = n, t.fontWeight = i
        } var a, l, o = e.l;
      l = o.length;
      var p, g, S, u = this.mHelper,
          E, b = "",
          x = 0;
      for (a = 0; a < l; a += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[x] ? p = this.textPaths[x] : (p = createNS("path"), p.setAttribute("stroke-linecap", lineCapEnum[1]), p.setAttribute("stroke-linejoin", lineJoinEnum[2]), p.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[x] ? (g = this.textSpans[x], S = g.children[0]) : (g = createTag("div"), g.style.lineHeight = 0, S = createNS("svg"), S.appendChild(p), styleDiv(g)))) : this.isMasked ? p = this.textPaths[x] ? this.textPaths[x] : createNS("text") : this.textSpans[x] ? (g = this.textSpans[x], p = this.textPaths[x]) : (g = createTag("span"), styleDiv(g), p = createTag("span"), styleDiv(p), g.appendChild(p)), this.globalData.fontManager.chars) {
          var M = this.globalData.fontManager.getCharData(e.finalText[a], s.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily),
              m;
          if (M ? m = M.data : m = null, u.reset(), m && m.shapes && m.shapes.length && (E = m.shapes[0].it, u.scale(e.finalSize / 100, e.finalSize / 100), b = this.createPathShape(u, E), p.setAttribute("d", b)), this.isMasked) this.innerElem.appendChild(p);
          else {
            if (this.innerElem.appendChild(g), m && m.shapes) {
              document.body.appendChild(S);
              var d = S.getBBox();
              S.setAttribute("width", d.width + 2), S.setAttribute("height", d.height + 2), S.setAttribute("viewBox", d.x - 1 + " " + (d.y - 1) + " " + (d.width + 2) + " " + (d.height + 2));
              var f = S.style,
                  y = "translate(" + (d.x - 1) + "px," + (d.y - 1) + "px)";
              f.transform = y, f.webkitTransform = y, o[a].yOffset = d.y - 1
            } else S.setAttribute("width", 1), S.setAttribute("height", 1);
            g.appendChild(S)
          }
        } else if (p.textContent = o[a].val, p.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(p);
        else {
          this.innerElem.appendChild(g);
          var A = p.style,
              T = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
          A.transform = T, A.webkitTransform = T
        }
        this.isMasked ? this.textSpans[x] = p : this.textSpans[x] = g, this.textSpans[x].style.display = "block", this.textPaths[x] = p, x += 1
      }
      for (; x < this.textSpans.length;) this.textSpans[x].style.display = "none", x += 1
    }, HTextElement.prototype.renderInnerContent = function() {
      this.validateText();
      var e;
      if (this.data.singleShape) {
        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
        if (this.isMasked && this.finalTransform._matMdf) {
          this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
          var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
          e.transform = t, e.webkitTransform = t
        }
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
        var r, s, i = 0,
            n = this.textAnimator.renderedLetters,
            a = this.textProperty.currentData.l;
        s = a.length;
        var l, o, p;
        for (r = 0; r < s; r += 1) a[r].n ? i += 1 : (o = this.textSpans[r], p = this.textPaths[r], l = n[i], i += 1, l._mdf.m && (this.isMasked ? o.setAttribute("transform", l.m) : (o.style.webkitTransform = l.m, o.style.transform = l.m)), o.style.opacity = l.o, l.sw && l._mdf.sw && p.setAttribute("stroke-width", l.sw), l.sc && l._mdf.sc && p.setAttribute("stroke", l.sc), l.fc && l._mdf.fc && (p.setAttribute("fill", l.fc), p.style.color = l.fc));
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var g = this.innerElem.getBBox();
          this.currentBBox.w !== g.width && (this.currentBBox.w = g.width, this.svgElement.setAttribute("width", g.width)), this.currentBBox.h !== g.height && (this.currentBBox.h = g.height, this.svgElement.setAttribute("height", g.height));
          var S = 1;
          if (this.currentBBox.w !== g.width + S * 2 || this.currentBBox.h !== g.height + S * 2 || this.currentBBox.x !== g.x - S || this.currentBBox.y !== g.y - S) {
            this.currentBBox.w = g.width + S * 2, this.currentBBox.h = g.height + S * 2, this.currentBBox.x = g.x - S, this.currentBBox.y = g.y - S, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
            var u = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            e.transform = u, e.webkitTransform = u
          }
        }
      }
    };

    function HCameraElement(e, t, r) {
      this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
      var s = PropertyFactory.getProp;
      if (this.pe = s(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = s(this, e.ks.p.x, 1, 0, this), this.py = s(this, e.ks.p.y, 1, 0, this), this.pz = s(this, e.ks.p.z, 1, 0, this)) : this.p = s(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = s(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
        var i, n = e.ks.or.k.length;
        for (i = 0; i < n; i += 1) e.ks.or.k[i].to = null, e.ks.or.k[i].ti = null
      }
      this.or = s(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = s(this, e.ks.rx, 0, degToRads, this), this.ry = s(this, e.ks.ry, 0, degToRads, this), this.rz = s(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
        mProp: this
      }
    }
    extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
      var e, t = this.comp.threeDElements.length,
          r, s, i;
      for (e = 0; e < t; e += 1)
        if (r = this.comp.threeDElements[e], r.type === "3d") {
          s = r.perspectiveElem.style, i = r.container.style;
          var n = this.pe.v + "px",
              a = "0px 0px 0px",
              l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          s.perspective = n, s.webkitPerspective = n, i.transformOrigin = a, i.mozTransformOrigin = a, i.webkitTransformOrigin = a, s.transform = l, s.webkitTransform = l
        }
    }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
      var e = this._isFirstFrame,
          t, r;
      if (this.hierarchy)
        for (r = this.hierarchy.length, t = 0; t < r; t += 1) e = this.hierarchy[t].finalTransform.mProp._mdf || e;
      if (e || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
        if (this.mat.reset(), this.hierarchy)
          for (r = this.hierarchy.length - 1, t = r; t >= 0; t -= 1) {
            var s = this.hierarchy[t].finalTransform.mProp;
            this.mat.translate(-s.p.v[0], -s.p.v[1], s.p.v[2]), this.mat.rotateX(-s.or.v[0]).rotateY(-s.or.v[1]).rotateZ(s.or.v[2]), this.mat.rotateX(-s.rx.v).rotateY(-s.ry.v).rotateZ(s.rz.v), this.mat.scale(1 / s.s.v[0], 1 / s.s.v[1], 1 / s.s.v[2]), this.mat.translate(s.a.v[0], s.a.v[1], s.a.v[2])
          }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var i;
          this.p ? i = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : i = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
          var n = Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2) + Math.pow(i[2], 2)),
              a = [i[0] / n, i[1] / n, i[2] / n],
              l = Math.sqrt(a[2] * a[2] + a[0] * a[0]),
              o = Math.atan2(a[1], l),
              p = Math.atan2(a[0], -a[2]);
          this.mat.rotateY(p).rotateX(-o)
        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
        var g = !this._prevMat.equals(this.mat);
        if ((g || this.pe._mdf) && this.comp.threeDElements) {
          r = this.comp.threeDElements.length;
          var S, u, E;
          for (t = 0; t < r; t += 1)
            if (S = this.comp.threeDElements[t], S.type === "3d") {
              if (g) {
                var b = this.mat.toCSS();
                E = S.container.style, E.transform = b, E.webkitTransform = b
              }
              this.pe._mdf && (u = S.perspectiveElem.style, u.perspective = this.pe.v + "px", u.webkitPerspective = this.pe.v + "px")
            } this.mat.clone(this._prevMat)
        }
      }
      this._isFirstFrame = !1
    }, HCameraElement.prototype.prepareFrame = function(e) {
      this.prepareProperties(e, !0)
    }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
      return null
    };

    function HImageElement(e, t, r) {
      this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r)
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
      var e = this.globalData.getAssetsPath(this.assetData),
          t = new Image;
      this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
    };

    function HybridRendererBase(e, t) {
      this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
        className: t && t.className || "",
        imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
        hideOnTransparent: !(t && t.hideOnTransparent === !1),
        filterSize: {
          width: t && t.filterSize && t.filterSize.width || "400%",
          height: t && t.filterSize && t.filterSize.height || "400%",
          x: t && t.filterSize && t.filterSize.x || "-100%",
          y: t && t.filterSize && t.filterSize.y || "-100%"
        }
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        renderConfig: this.renderConfig
      }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
    }
    extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length;) {
        var e = this.pendingElements.pop();
        e.checkParenting()
      }
    }, HybridRendererBase.prototype.appendElementInPos = function(e, t) {
      var r = e.getBaseElement();
      if (r) {
        var s = this.layers[t];
        if (!s.ddd || !this.supports3d)
          if (this.threeDElements) this.addTo3dContainer(r, t);
          else {
            for (var i = 0, n, a, l; i < t;) this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement && (a = this.elements[i], l = this.layers[i].ddd ? this.getThreeDContainerByPos(i) : a.getBaseElement(), n = l || n), i += 1;
            n ? (!s.ddd || !this.supports3d) && this.layerElement.insertBefore(r, n) : (!s.ddd || !this.supports3d) && this.layerElement.appendChild(r)
          }
        else this.addTo3dContainer(r, t)
      }
    }, HybridRendererBase.prototype.createShape = function(e) {
      return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this)
    }, HybridRendererBase.prototype.createText = function(e) {
      return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this)
    }, HybridRendererBase.prototype.createCamera = function(e) {
      return this.camera = new HCameraElement(e, this.globalData, this), this.camera
    }, HybridRendererBase.prototype.createImage = function(e) {
      return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this)
    }, HybridRendererBase.prototype.createSolid = function(e) {
      return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this)
    }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(e) {
      for (var t = 0, r = this.threeDElements.length; t < r;) {
        if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
        t += 1
      }
      return null
    }, HybridRendererBase.prototype.createThreeDContainer = function(e, t) {
      var r = createTag("div"),
          s, i;
      styleDiv(r);
      var n = createTag("div");
      if (styleDiv(n), t === "3d") {
        s = r.style, s.width = this.globalData.compSize.w + "px", s.height = this.globalData.compSize.h + "px";
        var a = "50% 50%";
        s.webkitTransformOrigin = a, s.mozTransformOrigin = a, s.transformOrigin = a, i = n.style;
        var l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        i.transform = l, i.webkitTransform = l
      }
      r.appendChild(n);
      var o = {
        container: n,
        perspectiveElem: r,
        startPos: e,
        endPos: e,
        type: t
      };
      return this.threeDElements.push(o), o
    }, HybridRendererBase.prototype.build3dContainers = function() {
      var e, t = this.layers.length,
          r, s = "";
      for (e = 0; e < t; e += 1) this.layers[e].ddd && this.layers[e].ty !== 3 ? (s !== "3d" && (s = "3d", r = this.createThreeDContainer(e, "3d")), r.endPos = Math.max(r.endPos, e)) : (s !== "2d" && (s = "2d", r = this.createThreeDContainer(e, "2d")), r.endPos = Math.max(r.endPos, e));
      for (t = this.threeDElements.length, e = t - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
    }, HybridRendererBase.prototype.addTo3dContainer = function(e, t) {
      for (var r = 0, s = this.threeDElements.length; r < s;) {
        if (t <= this.threeDElements[r].endPos) {
          for (var i = this.threeDElements[r].startPos, n; i < t;) this.elements[i] && this.elements[i].getBaseElement && (n = this.elements[i].getBaseElement()), i += 1;
          n ? this.threeDElements[r].container.insertBefore(e, n) : this.threeDElements[r].container.appendChild(e);
          break
        }
        r += 1
      }
    }, HybridRendererBase.prototype.configAnimation = function(e) {
      var t = createTag("div"),
          r = this.animationItem.wrapper,
          s = t.style;
      s.width = e.w + "px", s.height = e.h + "px", this.resizerElem = t, styleDiv(t), s.transformStyle = "flat", s.mozTransformStyle = "flat", s.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), s.overflow = "hidden";
      var i = createNS("svg");
      i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
      var n = createNS("defs");
      i.appendChild(n), this.data = e, this.setupGlobalData(e, i), this.globalData.defs = n, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
    }, HybridRendererBase.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
      var e, t = this.layers ? this.layers.length : 0;
      for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, HybridRendererBase.prototype.updateContainerSize = function() {
      var e = this.animationItem.wrapper.offsetWidth,
          t = this.animationItem.wrapper.offsetHeight,
          r = e / t,
          s = this.globalData.compSize.w / this.globalData.compSize.h,
          i, n, a, l;
      s > r ? (i = e / this.globalData.compSize.w, n = e / this.globalData.compSize.w, a = 0, l = (t - this.globalData.compSize.h * (e / this.globalData.compSize.w)) / 2) : (i = t / this.globalData.compSize.h, n = t / this.globalData.compSize.h, a = (e - this.globalData.compSize.w * (t / this.globalData.compSize.h)) / 2, l = 0);
      var o = this.resizerElem.style;
      o.webkitTransform = "matrix3d(" + i + ",0,0,0,0," + n + ",0,0,0,0,1,0," + a + "," + l + ",0,1)", o.transform = o.webkitTransform
    }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
      this.resizerElem.style.display = "none"
    }, HybridRendererBase.prototype.show = function() {
      this.resizerElem.style.display = "block"
    }, HybridRendererBase.prototype.initItems = function() {
      if (this.buildAllItems(), this.camera) this.camera.setup();
      else {
        var e = this.globalData.compSize.w,
            t = this.globalData.compSize.h,
            r, s = this.threeDElements.length;
        for (r = 0; r < s; r += 1) {
          var i = this.threeDElements[r].perspectiveElem.style;
          i.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2)) + "px", i.perspective = i.webkitPerspective
        }
      }
    }, HybridRendererBase.prototype.searchExtraCompositions = function(e) {
      var t, r = e.length,
          s = createTag("div");
      for (t = 0; t < r; t += 1)
        if (e[t].xt) {
          var i = this.createComp(e[t], s, this.globalData.comp, null);
          i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
        }
    };

    function HCompElement(e, t, r) {
      this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
        _placeholder: !0
      }
    }
    extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
      this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
    }, HCompElement.prototype.addTo3dContainer = function(e, t) {
      for (var r = 0, s; r < t;) this.elements[r] && this.elements[r].getBaseElement && (s = this.elements[r].getBaseElement()), r += 1;
      s ? this.layerElement.insertBefore(e, s) : this.layerElement.appendChild(e)
    }, HCompElement.prototype.createComp = function(e) {
      return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
    };

    function HybridRenderer(e, t) {
      this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
        className: t && t.className || "",
        imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
        hideOnTransparent: !(t && t.hideOnTransparent === !1),
        filterSize: {
          width: t && t.filterSize && t.filterSize.width || "400%",
          height: t && t.filterSize && t.filterSize.height || "400%",
          x: t && t.filterSize && t.filterSize.x || "-100%",
          y: t && t.filterSize && t.filterSize.y || "-100%"
        },
        runExpressions: !t || t.runExpressions === void 0 || t.runExpressions
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        renderConfig: this.renderConfig
      }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
    }
    extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(e) {
      return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
    };
    var CompExpressionInterface = function() {
      return function(e) {
        function t(r) {
          for (var s = 0, i = e.layers.length; s < i;) {
            if (e.layers[s].nm === r || e.layers[s].ind === r) return e.elements[s].layerInterface;
            s += 1
          }
          return null
        }
        return Object.defineProperty(t, "_name", {
          value: e.data.nm
        }), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
      }
    }();

    function _typeof$2(e) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function(r) {
        return typeof r
      } : _typeof$2 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
      }, _typeof$2(e)
    }

    function seedRandom(e, t) {
      var r = this,
          s = 256,
          i = 6,
          n = 52,
          a = "random",
          l = t.pow(s, i),
          o = t.pow(2, n),
          p = o * 2,
          g = s - 1,
          S;

      function u(f, y, A) {
        var T = [];
        y = y === !0 ? {
          entropy: !0
        } : y || {};
        var I = M(x(y.entropy ? [f, d(e)] : f === null ? m() : f, 3), T),
            j = new E(T),
            L = function() {
              for (var V = j.g(i), B = l, O = 0; V < o;) V = (V + O) * s, B *= s, O = j.g(1);
              for (; V >= p;) V /= 2, B /= 2, O >>>= 1;
              return (V + O) / B
            };
        return L.int32 = function() {
          return j.g(4) | 0
        }, L.quick = function() {
          return j.g(4) / 4294967296
        }, L.double = L, M(d(j.S), e), (y.pass || A || function(N, V, B, O) {
          return O && (O.S && b(O, j), N.state = function() {
            return b(j, {})
          }), B ? (t[a] = N, V) : N
        })(L, I, "global" in y ? y.global : this == t, y.state)
      }
      t["seed" + a] = u;

      function E(f) {
        var y, A = f.length,
            T = this,
            I = 0,
            j = T.i = T.j = 0,
            L = T.S = [];
        for (A || (f = [A++]); I < s;) L[I] = I++;
        for (I = 0; I < s; I++) L[I] = L[j = g & j + f[I % A] + (y = L[I])], L[j] = y;
        T.g = function(N) {
          for (var V, B = 0, O = T.i, H = T.j, $ = T.S; N--;) V = $[O = g & O + 1], B = B * s + $[g & ($[O] = $[H = g & H + V]) + ($[H] = V)];
          return T.i = O, T.j = H, B
        }
      }

      function b(f, y) {
        return y.i = f.i, y.j = f.j, y.S = f.S.slice(), y
      }

      function x(f, y) {
        var A = [],
            T = _typeof$2(f),
            I;
        if (y && T == "object")
          for (I in f) try {
            A.push(x(f[I], y - 1))
          } catch {}
        return A.length ? A : T == "string" ? f : f + "\0"
      }

      function M(f, y) {
        for (var A = f + "", T, I = 0; I < A.length;) y[g & I] = g & (T ^= y[g & I] * 19) + A.charCodeAt(I++);
        return d(y)
      }

      function m() {
        try {
          var f = new Uint8Array(s);
          return (r.crypto || r.msCrypto).getRandomValues(f), d(f)
        } catch {
          var y = r.navigator,
              A = y && y.plugins;
          return [+new Date, r, A, r.screen, d(e)]
        }
      }

      function d(f) {
        return String.fromCharCode.apply(0, f)
      }
      M(t.random(), e)
    }

    function initialize$2(e) {
      seedRandom([], e)
    }
    var propTypes = {
      SHAPE: "shape"
    };

    function _typeof$1(e) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function(r) {
        return typeof r
      } : _typeof$1 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
      }, _typeof$1(e)
    }
    var ExpressionManager = function() {
          var ob = {},
              Math = BMMath,
              window = null,
              document = null,
              XMLHttpRequest = null,
              fetch = null,
              frames = null,
              _lottieGlobal = {};
          initialize$2(BMMath);

          function resetFrame() {
            _lottieGlobal = {}
          }

          function $bm_isInstanceOfArray(e) {
            return e.constructor === Array || e.constructor === Float32Array
          }

          function isNumerable(e, t) {
            return e === "number" || t instanceof Number || e === "boolean" || e === "string"
          }

          function $bm_neg(e) {
            var t = _typeof$1(e);
            if (t === "number" || e instanceof Number || t === "boolean") return -e;
            if ($bm_isInstanceOfArray(e)) {
              var r, s = e.length,
                  i = [];
              for (r = 0; r < s; r += 1) i[r] = -e[r];
              return i
            }
            return e.propType ? e.v : -e
          }
          var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
              easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
              easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

          function sum(e, t) {
            var r = _typeof$1(e),
                s = _typeof$1(t);
            if (isNumerable(r, e) && isNumerable(s, t) || r === "string" || s === "string") return e + t;
            if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) return e = e.slice(0), e[0] += t, e;
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return t = t.slice(0), t[0] = e + t[0], t;
            if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
              for (var i = 0, n = e.length, a = t.length, l = []; i < n || i < a;)(typeof e[i] == "number" || e[i] instanceof Number) && (typeof t[i] == "number" || t[i] instanceof Number) ? l[i] = e[i] + t[i] : l[i] = t[i] === void 0 ? e[i] : e[i] || t[i], i += 1;
              return l
            }
            return 0
          }
          var add = sum;

          function sub(e, t) {
            var r = _typeof$1(e),
                s = _typeof$1(t);
            if (isNumerable(r, e) && isNumerable(s, t)) return r === "string" && (e = parseInt(e, 10)), s === "string" && (t = parseInt(t, 10)), e - t;
            if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) return e = e.slice(0), e[0] -= t, e;
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return t = t.slice(0), t[0] = e - t[0], t;
            if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
              for (var i = 0, n = e.length, a = t.length, l = []; i < n || i < a;)(typeof e[i] == "number" || e[i] instanceof Number) && (typeof t[i] == "number" || t[i] instanceof Number) ? l[i] = e[i] - t[i] : l[i] = t[i] === void 0 ? e[i] : e[i] || t[i], i += 1;
              return l
            }
            return 0
          }

          function mul(e, t) {
            var r = _typeof$1(e),
                s = _typeof$1(t),
                i;
            if (isNumerable(r, e) && isNumerable(s, t)) return e * t;
            var n, a;
            if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
              for (a = e.length, i = createTypedArray("float32", a), n = 0; n < a; n += 1) i[n] = e[n] * t;
              return i
            }
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) {
              for (a = t.length, i = createTypedArray("float32", a), n = 0; n < a; n += 1) i[n] = e * t[n];
              return i
            }
            return 0
          }

          function div(e, t) {
            var r = _typeof$1(e),
                s = _typeof$1(t),
                i;
            if (isNumerable(r, e) && isNumerable(s, t)) return e / t;
            var n, a;
            if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
              for (a = e.length, i = createTypedArray("float32", a), n = 0; n < a; n += 1) i[n] = e[n] / t;
              return i
            }
            if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) {
              for (a = t.length, i = createTypedArray("float32", a), n = 0; n < a; n += 1) i[n] = e / t[n];
              return i
            }
            return 0
          }

          function mod(e, t) {
            return typeof e == "string" && (e = parseInt(e, 10)), typeof t == "string" && (t = parseInt(t, 10)), e % t
          }
          var $bm_sum = sum,
              $bm_sub = sub,
              $bm_mul = mul,
              $bm_div = div,
              $bm_mod = mod;

          function clamp(e, t, r) {
            if (t > r) {
              var s = r;
              r = t, t = s
            }
            return Math.min(Math.max(e, t), r)
          }

          function radiansToDegrees(e) {
            return e / degToRads
          }
          var radians_to_degrees = radiansToDegrees;

          function degreesToRadians(e) {
            return e * degToRads
          }
          var degrees_to_radians = radiansToDegrees,
              helperLengthArray = [0, 0, 0, 0, 0, 0];

          function length(e, t) {
            if (typeof e == "number" || e instanceof Number) return t = t || 0, Math.abs(e - t);
            t || (t = helperLengthArray);
            var r, s = Math.min(e.length, t.length),
                i = 0;
            for (r = 0; r < s; r += 1) i += Math.pow(t[r] - e[r], 2);
            return Math.sqrt(i)
          }

          function normalize(e) {
            return div(e, length(e))
          }

          function rgbToHsl(e) {
            var t = e[0],
                r = e[1],
                s = e[2],
                i = Math.max(t, r, s),
                n = Math.min(t, r, s),
                a, l, o = (i + n) / 2;
            if (i === n) a = 0, l = 0;
            else {
              var p = i - n;
              switch (l = o > .5 ? p / (2 - i - n) : p / (i + n), i) {
                case t:
                  a = (r - s) / p + (r < s ? 6 : 0);
                  break;
                case r:
                  a = (s - t) / p + 2;
                  break;
                case s:
                  a = (t - r) / p + 4;
                  break
              }
              a /= 6
            }
            return [a, l, o, e[3]]
          }

          function hue2rgb(e, t, r) {
            return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
          }

          function hslToRgb(e) {
            var t = e[0],
                r = e[1],
                s = e[2],
                i, n, a;
            if (r === 0) i = s, a = s, n = s;
            else {
              var l = s < .5 ? s * (1 + r) : s + r - s * r,
                  o = 2 * s - l;
              i = hue2rgb(o, l, t + 1 / 3), n = hue2rgb(o, l, t), a = hue2rgb(o, l, t - 1 / 3)
            }
            return [i, n, a, e[3]]
          }

          function linear(e, t, r, s, i) {
            if ((s === void 0 || i === void 0) && (s = t, i = r, t = 0, r = 1), r < t) {
              var n = r;
              r = t, t = n
            }
            if (e <= t) return s;
            if (e >= r) return i;
            var a = r === t ? 0 : (e - t) / (r - t);
            if (!s.length) return s + (i - s) * a;
            var l, o = s.length,
                p = createTypedArray("float32", o);
            for (l = 0; l < o; l += 1) p[l] = s[l] + (i[l] - s[l]) * a;
            return p
          }

          function random(e, t) {
            if (t === void 0 && (e === void 0 ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
              var r, s = t.length;
              e || (e = createTypedArray("float32", s));
              var i = createTypedArray("float32", s),
                  n = BMMath.random();
              for (r = 0; r < s; r += 1) i[r] = e[r] + n * (t[r] - e[r]);
              return i
            }
            e === void 0 && (e = 0);
            var a = BMMath.random();
            return e + a * (t - e)
          }

          function createPath(e, t, r, s) {
            var i, n = e.length,
                a = shapePool.newElement();
            a.setPathData(!!s, n);
            var l = [0, 0],
                o, p;
            for (i = 0; i < n; i += 1) o = t && t[i] ? t[i] : l, p = r && r[i] ? r[i] : l, a.setTripleAt(e[i][0], e[i][1], p[0] + e[i][0], p[1] + e[i][1], o[0] + e[i][0], o[1] + e[i][1], i, !0);
            return a
          }

          function initiateExpression(elem, data, property) {
            function noOp(e) {
              return e
            }
            if (!elem.globalData.renderConfig.runExpressions) return noOp;
            var val = data.x,
                needsVelocity = /velocity(?![\w\d])/.test(val),
                _needsRandom = val.indexOf("random") !== -1,
                elemType = elem.data.ty,
                transform, $bm_transform, content, effect, thisProperty = property;
            thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
              get: function() {
                return thisProperty.v
              }
            }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
            var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                width = elem.data.sw ? elem.data.sw : 0,
                height = elem.data.sh ? elem.data.sh : 0,
                name = elem.data.nm,
                loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                numKeys = property.kf ? data.k.length : 0,
                active = !this.data || this.data.hd !== !0,
                wiggle = (function e(t, r) {
                  var s, i, n = this.pv.length ? this.pv.length : 1,
                      a = createTypedArray("float32", n);
                  t = 5;
                  var l = Math.floor(time * t);
                  for (s = 0, i = 0; s < l;) {
                    for (i = 0; i < n; i += 1) a[i] += -r + r * 2 * BMMath.random();
                    s += 1
                  }
                  var o = time * t,
                      p = o - Math.floor(o),
                      g = createTypedArray("float32", n);
                  if (n > 1) {
                    for (i = 0; i < n; i += 1) g[i] = this.pv[i] + a[i] + (-r + r * 2 * BMMath.random()) * p;
                    return g
                  }
                  return this.pv + a[0] + (-r + r * 2 * BMMath.random()) * p
                }).bind(this);
            thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));

            function loopInDuration(e, t) {
              return loopIn(e, t, !0)
            }

            function loopOutDuration(e, t) {
              return loopOut(e, t, !0)
            }
            this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
            var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);

            function lookAt(e, t) {
              var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                  s = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads,
                  i = -Math.atan2(r[1], r[2]) / degToRads;
              return [i, s, 0]
            }

            function easeOut(e, t, r, s, i) {
              return applyEase(easeOutBez, e, t, r, s, i)
            }

            function easeIn(e, t, r, s, i) {
              return applyEase(easeInBez, e, t, r, s, i)
            }

            function ease(e, t, r, s, i) {
              return applyEase(easeInOutBez, e, t, r, s, i)
            }

            function applyEase(e, t, r, s, i, n) {
              i === void 0 ? (i = r, n = s) : t = (t - r) / (s - r), t > 1 ? t = 1 : t < 0 && (t = 0);
              var a = e(t);
              if ($bm_isInstanceOfArray(i)) {
                var l, o = i.length,
                    p = createTypedArray("float32", o);
                for (l = 0; l < o; l += 1) p[l] = (n[l] - i[l]) * a + i[l];
                return p
              }
              return (n - i) * a + i
            }

            function nearestKey(e) {
              var t, r = data.k.length,
                  s, i;
              if (!data.k.length || typeof data.k[0] == "number") s = 0, i = 0;
              else if (s = -1, e *= elem.comp.globalData.frameRate, e < data.k[0].t) s = 1, i = data.k[0].t;
              else {
                for (t = 0; t < r - 1; t += 1)
                  if (e === data.k[t].t) {
                    s = t + 1, i = data.k[t].t;
                    break
                  } else if (e > data.k[t].t && e < data.k[t + 1].t) {
                    e - data.k[t].t > data.k[t + 1].t - e ? (s = t + 2, i = data.k[t + 1].t) : (s = t + 1, i = data.k[t].t);
                    break
                  }
                s === -1 && (s = t + 1, i = data.k[t].t)
              }
              var n = {};
              return n.index = s, n.time = i / elem.comp.globalData.frameRate, n
            }

            function key(e) {
              var t, r, s;
              if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + e);
              e -= 1, t = {
                time: data.k[e].t / elem.comp.globalData.frameRate,
                value: []
              };
              var i = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
              for (s = i.length, r = 0; r < s; r += 1) t[r] = i[r], t.value[r] = i[r];
              return t
            }

            function framesToTime(e, t) {
              return t || (t = elem.comp.globalData.frameRate), e / t
            }

            function timeToFrames(e, t) {
              return !e && e !== 0 && (e = time), t || (t = elem.comp.globalData.frameRate), e * t
            }

            function seedRandom(e) {
              BMMath.seedrandom(randSeed + e)
            }

            function sourceRectAtTime() {
              return elem.sourceRectAtTime()
            }

            function substring(e, t) {
              return typeof value == "string" ? t === void 0 ? value.substring(e) : value.substring(e, t) : ""
            }

            function substr(e, t) {
              return typeof value == "string" ? t === void 0 ? value.substr(e) : value.substr(e, t) : ""
            }

            function posterizeTime(e) {
              time = e === 0 ? 0 : Math.floor(time * e) / e, value = valueAtTime(time)
            }
            var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind,
                hasParent = !!(elem.hierarchy && elem.hierarchy.length),
                parent, randSeed = Math.floor(Math.random() * 1e6),
                globalData = elem.globalData;

            function executeExpression(e) {
              return value = e, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !!(elem.hierarchy && elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt)
            }
            return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
          }
          return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
        }(),
        Expressions = function() {
          var e = {};
          e.initExpressions = t, e.resetFrame = ExpressionManager.resetFrame;

          function t(r) {
            var s = 0,
                i = [];

            function n() {
              s += 1
            }

            function a() {
              s -= 1, s === 0 && o()
            }

            function l(p) {
              i.indexOf(p) === -1 && i.push(p)
            }

            function o() {
              var p, g = i.length;
              for (p = 0; p < g; p += 1) i[p].release();
              i.length = 0
            }
            r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = n, r.renderer.globalData.popExpression = a, r.renderer.globalData.registerExpressionProperty = l
          }
          return e
        }(),
        MaskManagerInterface = function() {
          function e(r, s) {
            this._mask = r, this._data = s
          }
          Object.defineProperty(e.prototype, "maskPath", {
            get: function() {
              return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
            }
          }), Object.defineProperty(e.prototype, "maskOpacity", {
            get: function() {
              return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100
            }
          });
          var t = function(s) {
            var i = createSizedArray(s.viewData.length),
                n, a = s.viewData.length;
            for (n = 0; n < a; n += 1) i[n] = new e(s.viewData[n], s.masksProperties[n]);
            var l = function(p) {
              for (n = 0; n < a;) {
                if (s.masksProperties[n].nm === p) return i[n];
                n += 1
              }
              return null
            };
            return l
          };
          return t
        }(),
        ExpressionPropertyInterface = function() {
          var e = {
                pv: 0,
                v: 0,
                mult: 1
              },
              t = {
                pv: [0, 0, 0],
                v: [0, 0, 0],
                mult: 1
              };

          function r(a, l, o) {
            Object.defineProperty(a, "velocity", {
              get: function() {
                return l.getVelocityAtTime(l.comp.currentFrame)
              }
            }), a.numKeys = l.keyframes ? l.keyframes.length : 0, a.key = function(p) {
              if (!a.numKeys) return 0;
              var g = "";
              "s" in l.keyframes[p - 1] ? g = l.keyframes[p - 1].s : "e" in l.keyframes[p - 2] ? g = l.keyframes[p - 2].e : g = l.keyframes[p - 2].s;
              var S = o === "unidimensional" ? new Number(g) : Object.assign({}, g);
              return S.time = l.keyframes[p - 1].t / l.elem.comp.globalData.frameRate, S.value = o === "unidimensional" ? g[0] : g, S
            }, a.valueAtTime = l.getValueAtTime, a.speedAtTime = l.getSpeedAtTime, a.velocityAtTime = l.getVelocityAtTime, a.propertyGroup = l.propertyGroup
          }

          function s(a) {
            (!a || !("pv" in a)) && (a = e);
            var l = 1 / a.mult,
                o = a.pv * l,
                p = new Number(o);
            return p.value = o, r(p, a, "unidimensional"),
                function() {
                  return a.k && a.getValue(), o = a.v * l, p.value !== o && (p = new Number(o), p.value = o, r(p, a, "unidimensional")), p
                }
          }

          function i(a) {
            (!a || !("pv" in a)) && (a = t);
            var l = 1 / a.mult,
                o = a.data && a.data.l || a.pv.length,
                p = createTypedArray("float32", o),
                g = createTypedArray("float32", o);
            return p.value = g, r(p, a, "multidimensional"),
                function() {
                  a.k && a.getValue();
                  for (var S = 0; S < o; S += 1) g[S] = a.v[S] * l, p[S] = g[S];
                  return p
                }
          }

          function n() {
            return e
          }
          return function(a) {
            return a ? a.propType === "unidimensional" ? s(a) : i(a) : n
          }
        }(),
        TransformExpressionInterface = function() {
          return function(e) {
            function t(a) {
              switch (a) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return t.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return t.rotation;
                case "ADBE Rotate X":
                  return t.xRotation;
                case "ADBE Rotate Y":
                  return t.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return t.position;
                case "ADBE Position_0":
                  return t.xPosition;
                case "ADBE Position_1":
                  return t.yPosition;
                case "ADBE Position_2":
                  return t.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return t.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return t.opacity;
                default:
                  return null
              }
            }
            Object.defineProperty(t, "rotation", {
              get: ExpressionPropertyInterface(e.r || e.rz)
            }), Object.defineProperty(t, "zRotation", {
              get: ExpressionPropertyInterface(e.rz || e.r)
            }), Object.defineProperty(t, "xRotation", {
              get: ExpressionPropertyInterface(e.rx)
            }), Object.defineProperty(t, "yRotation", {
              get: ExpressionPropertyInterface(e.ry)
            }), Object.defineProperty(t, "scale", {
              get: ExpressionPropertyInterface(e.s)
            });
            var r, s, i, n;
            return e.p ? n = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), s = ExpressionPropertyInterface(e.py), e.pz && (i = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
              get: function() {
                return e.p ? n() : [r(), s(), i ? i() : 0]
              }
            }), Object.defineProperty(t, "xPosition", {
              get: ExpressionPropertyInterface(e.px)
            }), Object.defineProperty(t, "yPosition", {
              get: ExpressionPropertyInterface(e.py)
            }), Object.defineProperty(t, "zPosition", {
              get: ExpressionPropertyInterface(e.pz)
            }), Object.defineProperty(t, "anchorPoint", {
              get: ExpressionPropertyInterface(e.a)
            }), Object.defineProperty(t, "opacity", {
              get: ExpressionPropertyInterface(e.o)
            }), Object.defineProperty(t, "skew", {
              get: ExpressionPropertyInterface(e.sk)
            }), Object.defineProperty(t, "skewAxis", {
              get: ExpressionPropertyInterface(e.sa)
            }), Object.defineProperty(t, "orientation", {
              get: ExpressionPropertyInterface(e.or)
            }), t
          }
        }(),
        LayerExpressionInterface = function() {
          function e(p) {
            var g = new Matrix;
            if (p !== void 0) {
              var S = this._elem.finalTransform.mProp.getValueAtTime(p);
              S.clone(g)
            } else {
              var u = this._elem.finalTransform.mProp;
              u.applyToMatrix(g)
            }
            return g
          }

          function t(p, g) {
            var S = this.getMatrix(g);
            return S.props[12] = 0, S.props[13] = 0, S.props[14] = 0, this.applyPoint(S, p)
          }

          function r(p, g) {
            var S = this.getMatrix(g);
            return this.applyPoint(S, p)
          }

          function s(p, g) {
            var S = this.getMatrix(g);
            return S.props[12] = 0, S.props[13] = 0, S.props[14] = 0, this.invertPoint(S, p)
          }

          function i(p, g) {
            var S = this.getMatrix(g);
            return this.invertPoint(S, p)
          }

          function n(p, g) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var S, u = this._elem.hierarchy.length;
              for (S = 0; S < u; S += 1) this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(p)
            }
            return p.applyToPointArray(g[0], g[1], g[2] || 0)
          }

          function a(p, g) {
            if (this._elem.hierarchy && this._elem.hierarchy.length) {
              var S, u = this._elem.hierarchy.length;
              for (S = 0; S < u; S += 1) this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(p)
            }
            return p.inversePoint(g)
          }

          function l(p) {
            var g = new Matrix;
            if (g.reset(), this._elem.finalTransform.mProp.applyToMatrix(g), this._elem.hierarchy && this._elem.hierarchy.length) {
              var S, u = this._elem.hierarchy.length;
              for (S = 0; S < u; S += 1) this._elem.hierarchy[S].finalTransform.mProp.applyToMatrix(g);
              return g.inversePoint(p)
            }
            return g.inversePoint(p)
          }

          function o() {
            return [1, 1, 1, 1]
          }
          return function(p) {
            var g;

            function S(x) {
              E.mask = new MaskManagerInterface(x, p)
            }

            function u(x) {
              E.effect = x
            }

            function E(x) {
              switch (x) {
                case "ADBE Root Vectors Group":
                case "Contents":
                case 2:
                  return E.shapeInterface;
                case 1:
                case 6:
                case "Transform":
                case "transform":
                case "ADBE Transform Group":
                  return g;
                case 4:
                case "ADBE Effect Parade":
                case "effects":
                case "Effects":
                  return E.effect;
                case "ADBE Text Properties":
                  return E.textInterface;
                default:
                  return null
              }
            }
            E.getMatrix = e, E.invertPoint = a, E.applyPoint = n, E.toWorld = r, E.toWorldVec = t, E.fromWorld = i, E.fromWorldVec = s, E.toComp = r, E.fromComp = l, E.sampleImage = o, E.sourceRectAtTime = p.sourceRectAtTime.bind(p), E._elem = p, g = TransformExpressionInterface(p.finalTransform.mProp);
            var b = getDescriptor(g, "anchorPoint");
            return Object.defineProperties(E, {
              hasParent: {
                get: function() {
                  return p.hierarchy.length
                }
              },
              parent: {
                get: function() {
                  return p.hierarchy[0].layerInterface
                }
              },
              rotation: getDescriptor(g, "rotation"),
              scale: getDescriptor(g, "scale"),
              position: getDescriptor(g, "position"),
              opacity: getDescriptor(g, "opacity"),
              anchorPoint: b,
              anchor_point: b,
              transform: {
                get: function() {
                  return g
                }
              },
              active: {
                get: function() {
                  return p.isInRange
                }
              }
            }), E.startTime = p.data.st, E.index = p.data.ind, E.source = p.data.refId, E.height = p.data.ty === 0 ? p.data.h : 100, E.width = p.data.ty === 0 ? p.data.w : 100, E.inPoint = p.data.ip / p.comp.globalData.frameRate, E.outPoint = p.data.op / p.comp.globalData.frameRate, E._name = p.data.nm, E.registerMaskInterface = S, E.registerEffectsInterface = u, E
          }
        }(),
        propertyGroupFactory = function() {
          return function(e, t) {
            return function(r) {
              return r = r === void 0 ? 1 : r, r <= 0 ? e : t(r - 1)
            }
          }
        }(),
        PropertyInterface = function() {
          return function(e, t) {
            var r = {
              _name: e
            };

            function s(i) {
              return i = i === void 0 ? 1 : i, i <= 0 ? r : t(i - 1)
            }
            return s
          }
        }(),
        EffectsExpressionInterface = function() {
          var e = {
            createEffectsInterface: t
          };

          function t(i, n) {
            if (i.effectsManager) {
              var a = [],
                  l = i.data.ef,
                  o, p = i.effectsManager.effectElements.length;
              for (o = 0; o < p; o += 1) a.push(r(l[o], i.effectsManager.effectElements[o], n, i));
              var g = i.data.ef || [],
                  S = function(E) {
                    for (o = 0, p = g.length; o < p;) {
                      if (E === g[o].nm || E === g[o].mn || E === g[o].ix) return a[o];
                      o += 1
                    }
                    return null
                  };
              return Object.defineProperty(S, "numProperties", {
                get: function() {
                  return g.length
                }
              }), S
            }
            return null
          }

          function r(i, n, a, l) {
            function o(E) {
              for (var b = i.ef, x = 0, M = b.length; x < M;) {
                if (E === b[x].nm || E === b[x].mn || E === b[x].ix) return b[x].ty === 5 ? g[x] : g[x]();
                x += 1
              }
              throw new Error
            }
            var p = propertyGroupFactory(o, a),
                g = [],
                S, u = i.ef.length;
            for (S = 0; S < u; S += 1) i.ef[S].ty === 5 ? g.push(r(i.ef[S], n.effectElements[S], n.effectElements[S].propertyGroup, l)) : g.push(s(n.effectElements[S], i.ef[S].ty, l, p));
            return i.mn === "ADBE Color Control" && Object.defineProperty(o, "color", {
              get: function() {
                return g[0]()
              }
            }), Object.defineProperties(o, {
              numProperties: {
                get: function() {
                  return i.np
                }
              },
              _name: {
                value: i.nm
              },
              propertyGroup: {
                value: p
              }
            }), o.enabled = i.en !== 0, o.active = o.enabled, o
          }

          function s(i, n, a, l) {
            var o = ExpressionPropertyInterface(i.p);

            function p() {
              return n === 10 ? a.comp.compInterface(i.p.v) : o()
            }
            return i.p.setGroupProperty && i.p.setGroupProperty(PropertyInterface("", l)), p
          }
          return e
        }(),
        ShapePathInterface = function() {
          return function(t, r, s) {
            var i = r.sh;

            function n(l) {
              return l === "Shape" || l === "shape" || l === "Path" || l === "path" || l === "ADBE Vector Shape" || l === 2 ? n.path : null
            }
            var a = propertyGroupFactory(n, s);
            return i.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(n, {
              path: {
                get: function() {
                  return i.k && i.getValue(), i
                }
              },
              shape: {
                get: function() {
                  return i.k && i.getValue(), i
                }
              },
              _name: {
                value: t.nm
              },
              ix: {
                value: t.ix
              },
              propertyIndex: {
                value: t.ix
              },
              mn: {
                value: t.mn
              },
              propertyGroup: {
                value: s
              }
            }), n
          }
        }(),
        ShapeExpressionInterface = function() {
          function e(b, x, M) {
            var m = [],
                d, f = b ? b.length : 0;
            for (d = 0; d < f; d += 1) b[d].ty === "gr" ? m.push(r(b[d], x[d], M)) : b[d].ty === "fl" ? m.push(s(b[d], x[d], M)) : b[d].ty === "st" ? m.push(a(b[d], x[d], M)) : b[d].ty === "tm" ? m.push(l(b[d], x[d], M)) : b[d].ty === "tr" || (b[d].ty === "el" ? m.push(p(b[d], x[d], M)) : b[d].ty === "sr" ? m.push(g(b[d], x[d], M)) : b[d].ty === "sh" ? m.push(ShapePathInterface(b[d], x[d], M)) : b[d].ty === "rc" ? m.push(S(b[d], x[d], M)) : b[d].ty === "rd" ? m.push(u(b[d], x[d], M)) : b[d].ty === "rp" ? m.push(E(b[d], x[d], M)) : b[d].ty === "gf" ? m.push(i(b[d], x[d], M)) : m.push(n(b[d], x[d])));
            return m
          }

          function t(b, x, M) {
            var m, d = function(A) {
              for (var T = 0, I = m.length; T < I;) {
                if (m[T]._name === A || m[T].mn === A || m[T].propertyIndex === A || m[T].ix === A || m[T].ind === A) return m[T];
                T += 1
              }
              return typeof A == "number" ? m[A - 1] : null
            };
            d.propertyGroup = propertyGroupFactory(d, M), m = e(b.it, x.it, d.propertyGroup), d.numProperties = m.length;
            var f = o(b.it[b.it.length - 1], x.it[x.it.length - 1], d.propertyGroup);
            return d.transform = f, d.propertyIndex = b.cix, d._name = b.nm, d
          }

          function r(b, x, M) {
            var m = function(A) {
              switch (A) {
                case "ADBE Vectors Group":
                case "Contents":
                case 2:
                  return m.content;
                default:
                  return m.transform
              }
            };
            m.propertyGroup = propertyGroupFactory(m, M);
            var d = t(b, x, m.propertyGroup),
                f = o(b.it[b.it.length - 1], x.it[x.it.length - 1], m.propertyGroup);
            return m.content = d, m.transform = f, Object.defineProperty(m, "_name", {
              get: function() {
                return b.nm
              }
            }), m.numProperties = b.np, m.propertyIndex = b.ix, m.nm = b.nm, m.mn = b.mn, m
          }

          function s(b, x, M) {
            function m(d) {
              return d === "Color" || d === "color" ? m.color : d === "Opacity" || d === "opacity" ? m.opacity : null
            }
            return Object.defineProperties(m, {
              color: {
                get: ExpressionPropertyInterface(x.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(x.o)
              },
              _name: {
                value: b.nm
              },
              mn: {
                value: b.mn
              }
            }), x.c.setGroupProperty(PropertyInterface("Color", M)), x.o.setGroupProperty(PropertyInterface("Opacity", M)), m
          }

          function i(b, x, M) {
            function m(d) {
              return d === "Start Point" || d === "start point" ? m.startPoint : d === "End Point" || d === "end point" ? m.endPoint : d === "Opacity" || d === "opacity" ? m.opacity : null
            }
            return Object.defineProperties(m, {
              startPoint: {
                get: ExpressionPropertyInterface(x.s)
              },
              endPoint: {
                get: ExpressionPropertyInterface(x.e)
              },
              opacity: {
                get: ExpressionPropertyInterface(x.o)
              },
              type: {
                get: function() {
                  return "a"
                }
              },
              _name: {
                value: b.nm
              },
              mn: {
                value: b.mn
              }
            }), x.s.setGroupProperty(PropertyInterface("Start Point", M)), x.e.setGroupProperty(PropertyInterface("End Point", M)), x.o.setGroupProperty(PropertyInterface("Opacity", M)), m
          }

          function n() {
            function b() {
              return null
            }
            return b
          }

          function a(b, x, M) {
            var m = propertyGroupFactory(I, M),
                d = propertyGroupFactory(T, m);

            function f(j) {
              Object.defineProperty(T, b.d[j].nm, {
                get: ExpressionPropertyInterface(x.d.dataProps[j].p)
              })
            }
            var y, A = b.d ? b.d.length : 0,
                T = {};
            for (y = 0; y < A; y += 1) f(y), x.d.dataProps[y].p.setGroupProperty(d);

            function I(j) {
              return j === "Color" || j === "color" ? I.color : j === "Opacity" || j === "opacity" ? I.opacity : j === "Stroke Width" || j === "stroke width" ? I.strokeWidth : null
            }
            return Object.defineProperties(I, {
              color: {
                get: ExpressionPropertyInterface(x.c)
              },
              opacity: {
                get: ExpressionPropertyInterface(x.o)
              },
              strokeWidth: {
                get: ExpressionPropertyInterface(x.w)
              },
              dash: {
                get: function() {
                  return T
                }
              },
              _name: {
                value: b.nm
              },
              mn: {
                value: b.mn
              }
            }), x.c.setGroupProperty(PropertyInterface("Color", m)), x.o.setGroupProperty(PropertyInterface("Opacity", m)), x.w.setGroupProperty(PropertyInterface("Stroke Width", m)), I
          }

          function l(b, x, M) {
            function m(f) {
              return f === b.e.ix || f === "End" || f === "end" ? m.end : f === b.s.ix ? m.start : f === b.o.ix ? m.offset : null
            }
            var d = propertyGroupFactory(m, M);
            return m.propertyIndex = b.ix, x.s.setGroupProperty(PropertyInterface("Start", d)), x.e.setGroupProperty(PropertyInterface("End", d)), x.o.setGroupProperty(PropertyInterface("Offset", d)), m.propertyIndex = b.ix, m.propertyGroup = M, Object.defineProperties(m, {
              start: {
                get: ExpressionPropertyInterface(x.s)
              },
              end: {
                get: ExpressionPropertyInterface(x.e)
              },
              offset: {
                get: ExpressionPropertyInterface(x.o)
              },
              _name: {
                value: b.nm
              }
            }), m.mn = b.mn, m
          }

          function o(b, x, M) {
            function m(f) {
              return b.a.ix === f || f === "Anchor Point" ? m.anchorPoint : b.o.ix === f || f === "Opacity" ? m.opacity : b.p.ix === f || f === "Position" ? m.position : b.r.ix === f || f === "Rotation" || f === "ADBE Vector Rotation" ? m.rotation : b.s.ix === f || f === "Scale" ? m.scale : b.sk && b.sk.ix === f || f === "Skew" ? m.skew : b.sa && b.sa.ix === f || f === "Skew Axis" ? m.skewAxis : null
            }
            var d = propertyGroupFactory(m, M);
            return x.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", d)), x.transform.mProps.p.setGroupProperty(PropertyInterface("Position", d)), x.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", d)), x.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", d)), x.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", d)), x.transform.mProps.sk && (x.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", d)), x.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", d))), x.transform.op.setGroupProperty(PropertyInterface("Opacity", d)), Object.defineProperties(m, {
              opacity: {
                get: ExpressionPropertyInterface(x.transform.mProps.o)
              },
              position: {
                get: ExpressionPropertyInterface(x.transform.mProps.p)
              },
              anchorPoint: {
                get: ExpressionPropertyInterface(x.transform.mProps.a)
              },
              scale: {
                get: ExpressionPropertyInterface(x.transform.mProps.s)
              },
              rotation: {
                get: ExpressionPropertyInterface(x.transform.mProps.r)
              },
              skew: {
                get: ExpressionPropertyInterface(x.transform.mProps.sk)
              },
              skewAxis: {
                get: ExpressionPropertyInterface(x.transform.mProps.sa)
              },
              _name: {
                value: b.nm
              }
            }), m.ty = "tr", m.mn = b.mn, m.propertyGroup = M, m
          }

          function p(b, x, M) {
            function m(y) {
              return b.p.ix === y ? m.position : b.s.ix === y ? m.size : null
            }
            var d = propertyGroupFactory(m, M);
            m.propertyIndex = b.ix;
            var f = x.sh.ty === "tm" ? x.sh.prop : x.sh;
            return f.s.setGroupProperty(PropertyInterface("Size", d)), f.p.setGroupProperty(PropertyInterface("Position", d)), Object.defineProperties(m, {
              size: {
                get: ExpressionPropertyInterface(f.s)
              },
              position: {
                get: ExpressionPropertyInterface(f.p)
              },
              _name: {
                value: b.nm
              }
            }), m.mn = b.mn, m
          }

          function g(b, x, M) {
            function m(y) {
              return b.p.ix === y ? m.position : b.r.ix === y ? m.rotation : b.pt.ix === y ? m.points : b.or.ix === y || y === "ADBE Vector Star Outer Radius" ? m.outerRadius : b.os.ix === y ? m.outerRoundness : b.ir && (b.ir.ix === y || y === "ADBE Vector Star Inner Radius") ? m.innerRadius : b.is && b.is.ix === y ? m.innerRoundness : null
            }
            var d = propertyGroupFactory(m, M),
                f = x.sh.ty === "tm" ? x.sh.prop : x.sh;
            return m.propertyIndex = b.ix, f.or.setGroupProperty(PropertyInterface("Outer Radius", d)), f.os.setGroupProperty(PropertyInterface("Outer Roundness", d)), f.pt.setGroupProperty(PropertyInterface("Points", d)), f.p.setGroupProperty(PropertyInterface("Position", d)), f.r.setGroupProperty(PropertyInterface("Rotation", d)), b.ir && (f.ir.setGroupProperty(PropertyInterface("Inner Radius", d)), f.is.setGroupProperty(PropertyInterface("Inner Roundness", d))), Object.defineProperties(m, {
              position: {
                get: ExpressionPropertyInterface(f.p)
              },
              rotation: {
                get: ExpressionPropertyInterface(f.r)
              },
              points: {
                get: ExpressionPropertyInterface(f.pt)
              },
              outerRadius: {
                get: ExpressionPropertyInterface(f.or)
              },
              outerRoundness: {
                get: ExpressionPropertyInterface(f.os)
              },
              innerRadius: {
                get: ExpressionPropertyInterface(f.ir)
              },
              innerRoundness: {
                get: ExpressionPropertyInterface(f.is)
              },
              _name: {
                value: b.nm
              }
            }), m.mn = b.mn, m
          }

          function S(b, x, M) {
            function m(y) {
              return b.p.ix === y ? m.position : b.r.ix === y ? m.roundness : b.s.ix === y || y === "Size" || y === "ADBE Vector Rect Size" ? m.size : null
            }
            var d = propertyGroupFactory(m, M),
                f = x.sh.ty === "tm" ? x.sh.prop : x.sh;
            return m.propertyIndex = b.ix, f.p.setGroupProperty(PropertyInterface("Position", d)), f.s.setGroupProperty(PropertyInterface("Size", d)), f.r.setGroupProperty(PropertyInterface("Rotation", d)), Object.defineProperties(m, {
              position: {
                get: ExpressionPropertyInterface(f.p)
              },
              roundness: {
                get: ExpressionPropertyInterface(f.r)
              },
              size: {
                get: ExpressionPropertyInterface(f.s)
              },
              _name: {
                value: b.nm
              }
            }), m.mn = b.mn, m
          }

          function u(b, x, M) {
            function m(y) {
              return b.r.ix === y || y === "Round Corners 1" ? m.radius : null
            }
            var d = propertyGroupFactory(m, M),
                f = x;
            return m.propertyIndex = b.ix, f.rd.setGroupProperty(PropertyInterface("Radius", d)), Object.defineProperties(m, {
              radius: {
                get: ExpressionPropertyInterface(f.rd)
              },
              _name: {
                value: b.nm
              }
            }), m.mn = b.mn, m
          }

          function E(b, x, M) {
            function m(y) {
              return b.c.ix === y || y === "Copies" ? m.copies : b.o.ix === y || y === "Offset" ? m.offset : null
            }
            var d = propertyGroupFactory(m, M),
                f = x;
            return m.propertyIndex = b.ix, f.c.setGroupProperty(PropertyInterface("Copies", d)), f.o.setGroupProperty(PropertyInterface("Offset", d)), Object.defineProperties(m, {
              copies: {
                get: ExpressionPropertyInterface(f.c)
              },
              offset: {
                get: ExpressionPropertyInterface(f.o)
              },
              _name: {
                value: b.nm
              }
            }), m.mn = b.mn, m
          }
          return function(b, x, M) {
            var m;

            function d(y) {
              if (typeof y == "number") return y = y === void 0 ? 1 : y, y === 0 ? M : m[y - 1];
              for (var A = 0, T = m.length; A < T;) {
                if (m[A]._name === y) return m[A];
                A += 1
              }
              return null
            }

            function f() {
              return M
            }
            return d.propertyGroup = propertyGroupFactory(d, f), m = e(b, x, d.propertyGroup), d.numProperties = m.length, d._name = "Contents", d
          }
        }(),
        TextExpressionInterface = function() {
          return function(e) {
            var t;

            function r(s) {
              switch (s) {
                case "ADBE Text Document":
                  return r.sourceText;
                default:
                  return null
              }
            }
            return Object.defineProperty(r, "sourceText", {
              get: function() {
                e.textProperty.getValue();
                var i = e.textProperty.currentData.t;
                return (!t || i !== t.value) && (t = new String(i), t.value = i || new String(i), Object.defineProperty(t, "style", {
                  get: function() {
                    return {
                      fillColor: e.textProperty.currentData.fc
                    }
                  }
                })), t
              }
            }), r
          }
        }();

    function _typeof(e) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(r) {
        return typeof r
      } : _typeof = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
      }, _typeof(e)
    }
    var FootageInterface = function() {
          var e = function(s) {
                var i = "",
                    n = s.getFootageData();

                function a() {
                  return i = "", n = s.getFootageData(), l
                }

                function l(o) {
                  if (n[o]) return i = o, n = n[o], _typeof(n) === "object" ? l : n;
                  var p = o.indexOf(i);
                  if (p !== -1) {
                    var g = parseInt(o.substr(p + i.length), 10);
                    return n = n[g], _typeof(n) === "object" ? l : n
                  }
                  return ""
                }
                return a
              },
              t = function(s) {
                function i(n) {
                  return n === "Outline" ? i.outlineInterface() : null
                }
                return i._name = "Outline", i.outlineInterface = e(s), i
              };
          return function(r) {
            function s(i) {
              return i === "Data" ? s.dataInterface : null
            }
            return s._name = "Data", s.dataInterface = t(r), s
          }
        }(),
        interfaces = {
          layer: LayerExpressionInterface,
          effects: EffectsExpressionInterface,
          comp: CompExpressionInterface,
          shape: ShapeExpressionInterface,
          text: TextExpressionInterface,
          footage: FootageInterface
        };

    function getInterface(e) {
      return interfaces[e] || null
    }
    var expressionHelpers = function() {
      function e(a, l, o) {
        l.x && (o.k = !0, o.x = !0, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(a, l, o).bind(o)))
      }

      function t(a) {
        return a *= this.elem.globalData.frameRate, a -= this.offsetTime, a !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < a ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(a, this._cachingAtTime), this._cachingAtTime.lastFrame = a), this._cachingAtTime.value
      }

      function r(a) {
        var l = -.01,
            o = this.getValueAtTime(a),
            p = this.getValueAtTime(a + l),
            g = 0;
        if (o.length) {
          var S;
          for (S = 0; S < o.length; S += 1) g += Math.pow(p[S] - o[S], 2);
          g = Math.sqrt(g) * 100
        } else g = 0;
        return g
      }

      function s(a) {
        if (this.vel !== void 0) return this.vel;
        var l = -.001,
            o = this.getValueAtTime(a),
            p = this.getValueAtTime(a + l),
            g;
        if (o.length) {
          g = createTypedArray("float32", o.length);
          var S;
          for (S = 0; S < o.length; S += 1) g[S] = (p[S] - o[S]) / l
        } else g = (p - o) / l;
        return g
      }

      function i() {
        return this.pv
      }

      function n(a) {
        this.propertyGroup = a
      }
      return {
        searchExpressions: e,
        getSpeedAtTime: r,
        getVelocityAtTime: s,
        getValueAtTime: t,
        getStaticValueAtTime: i,
        setGroupProperty: n
      }
    }();

    function addPropertyDecorator() {
      function e(u, E, b) {
        if (!this.k || !this.keyframes) return this.pv;
        u = u ? u.toLowerCase() : "";
        var x = this.comp.renderedFrame,
            M = this.keyframes,
            m = M[M.length - 1].t;
        if (x <= m) return this.pv;
        var d, f;
        b ? (E ? d = Math.abs(m - this.elem.comp.globalData.frameRate * E) : d = Math.max(0, m - this.elem.data.ip), f = m - d) : ((!E || E > M.length - 1) && (E = M.length - 1), f = M[M.length - 1 - E].t, d = m - f);
        var y, A, T;
        if (u === "pingpong") {
          var I = Math.floor((x - f) / d);
          if (I % 2 !== 0) return this.getValueAtTime((d - (x - f) % d + f) / this.comp.globalData.frameRate, 0)
        } else if (u === "offset") {
          var j = this.getValueAtTime(f / this.comp.globalData.frameRate, 0),
              L = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
              N = this.getValueAtTime(((x - f) % d + f) / this.comp.globalData.frameRate, 0),
              V = Math.floor((x - f) / d);
          if (this.pv.length) {
            for (T = new Array(j.length), A = T.length, y = 0; y < A; y += 1) T[y] = (L[y] - j[y]) * V + N[y];
            return T
          }
          return (L - j) * V + N
        } else if (u === "continue") {
          var B = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
              O = this.getValueAtTime((m - .001) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (T = new Array(B.length), A = T.length, y = 0; y < A; y += 1) T[y] = B[y] + (B[y] - O[y]) * ((x - m) / this.comp.globalData.frameRate) / 5e-4;
            return T
          }
          return B + (B - O) * ((x - m) / .001)
        }
        return this.getValueAtTime(((x - f) % d + f) / this.comp.globalData.frameRate, 0)
      }

      function t(u, E, b) {
        if (!this.k) return this.pv;
        u = u ? u.toLowerCase() : "";
        var x = this.comp.renderedFrame,
            M = this.keyframes,
            m = M[0].t;
        if (x >= m) return this.pv;
        var d, f;
        b ? (E ? d = Math.abs(this.elem.comp.globalData.frameRate * E) : d = Math.max(0, this.elem.data.op - m), f = m + d) : ((!E || E > M.length - 1) && (E = M.length - 1), f = M[E].t, d = f - m);
        var y, A, T;
        if (u === "pingpong") {
          var I = Math.floor((m - x) / d);
          if (I % 2 === 0) return this.getValueAtTime(((m - x) % d + m) / this.comp.globalData.frameRate, 0)
        } else if (u === "offset") {
          var j = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
              L = this.getValueAtTime(f / this.comp.globalData.frameRate, 0),
              N = this.getValueAtTime((d - (m - x) % d + m) / this.comp.globalData.frameRate, 0),
              V = Math.floor((m - x) / d) + 1;
          if (this.pv.length) {
            for (T = new Array(j.length), A = T.length, y = 0; y < A; y += 1) T[y] = N[y] - (L[y] - j[y]) * V;
            return T
          }
          return N - (L - j) * V
        } else if (u === "continue") {
          var B = this.getValueAtTime(m / this.comp.globalData.frameRate, 0),
              O = this.getValueAtTime((m + .001) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (T = new Array(B.length), A = T.length, y = 0; y < A; y += 1) T[y] = B[y] + (B[y] - O[y]) * (m - x) / .001;
            return T
          }
          return B + (B - O) * (m - x) / .001
        }
        return this.getValueAtTime((d - ((m - x) % d + m)) / this.comp.globalData.frameRate, 0)
      }

      function r(u, E) {
        if (!this.k) return this.pv;
        if (u = (u || .4) * .5, E = Math.floor(E || 5), E <= 1) return this.pv;
        var b = this.comp.renderedFrame / this.comp.globalData.frameRate,
            x = b - u,
            M = b + u,
            m = E > 1 ? (M - x) / (E - 1) : 1,
            d = 0,
            f = 0,
            y;
        this.pv.length ? y = createTypedArray("float32", this.pv.length) : y = 0;
        for (var A; d < E;) {
          if (A = this.getValueAtTime(x + d * m), this.pv.length)
            for (f = 0; f < this.pv.length; f += 1) y[f] += A[f];
          else y += A;
          d += 1
        }
        if (this.pv.length)
          for (f = 0; f < this.pv.length; f += 1) y[f] /= E;
        else y /= E;
        return y
      }

      function s(u) {
        this._transformCachingAtTime || (this._transformCachingAtTime = {
          v: new Matrix
        });
        var E = this._transformCachingAtTime.v;
        if (E.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var b = this.a.getValueAtTime(u);
          E.translate(-b[0] * this.a.mult, -b[1] * this.a.mult, b[2] * this.a.mult)
        }
        if (this.appliedTransformations < 2) {
          var x = this.s.getValueAtTime(u);
          E.scale(x[0] * this.s.mult, x[1] * this.s.mult, x[2] * this.s.mult)
        }
        if (this.sk && this.appliedTransformations < 3) {
          var M = this.sk.getValueAtTime(u),
              m = this.sa.getValueAtTime(u);
          E.skewFromAxis(-M * this.sk.mult, m * this.sa.mult)
        }
        if (this.r && this.appliedTransformations < 4) {
          var d = this.r.getValueAtTime(u);
          E.rotate(-d * this.r.mult)
        } else if (!this.r && this.appliedTransformations < 4) {
          var f = this.rz.getValueAtTime(u),
              y = this.ry.getValueAtTime(u),
              A = this.rx.getValueAtTime(u),
              T = this.or.getValueAtTime(u);
          E.rotateZ(-f * this.rz.mult).rotateY(y * this.ry.mult).rotateX(A * this.rx.mult).rotateZ(-T[2] * this.or.mult).rotateY(T[1] * this.or.mult).rotateX(T[0] * this.or.mult)
        }
        if (this.data.p && this.data.p.s) {
          var I = this.px.getValueAtTime(u),
              j = this.py.getValueAtTime(u);
          if (this.data.p.z) {
            var L = this.pz.getValueAtTime(u);
            E.translate(I * this.px.mult, j * this.py.mult, -L * this.pz.mult)
          } else E.translate(I * this.px.mult, j * this.py.mult, 0)
        } else {
          var N = this.p.getValueAtTime(u);
          E.translate(N[0] * this.p.mult, N[1] * this.p.mult, -N[2] * this.p.mult)
        }
        return E
      }

      function i() {
        return this.v.clone(new Matrix)
      }
      var n = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function(u, E, b) {
        var x = n(u, E, b);
        return x.dynamicProperties.length ? x.getValueAtTime = s.bind(x) : x.getValueAtTime = i.bind(x), x.setGroupProperty = expressionHelpers.setGroupProperty, x
      };
      var a = PropertyFactory.getProp;
      PropertyFactory.getProp = function(u, E, b, x, M) {
        var m = a(u, E, b, x, M);
        m.kf ? m.getValueAtTime = expressionHelpers.getValueAtTime.bind(m) : m.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(m), m.setGroupProperty = expressionHelpers.setGroupProperty, m.loopOut = e, m.loopIn = t, m.smooth = r, m.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(m), m.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(m), m.numKeys = E.a === 1 ? E.k.length : 0, m.propertyIndex = E.ix;
        var d = 0;
        return b !== 0 && (d = createTypedArray("float32", E.a === 1 ? E.k[0].s.length : E.k.length)), m._cachingAtTime = {
          lastFrame: initialDefaultFrame,
          lastIndex: 0,
          value: d
        }, expressionHelpers.searchExpressions(u, E, m), m.k && M.addDynamicProperty(m), m
      };

      function l(u) {
        return this._cachingAtTime || (this._cachingAtTime = {
          shapeValue: shapePool.clone(this.pv),
          lastIndex: 0,
          lastTime: initialDefaultFrame
        }), u *= this.elem.globalData.frameRate, u -= this.offsetTime, u !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < u ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = u, this.interpolateShape(u, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
      }
      var o = ShapePropertyFactory.getConstructorFunction(),
          p = ShapePropertyFactory.getKeyframedConstructorFunction();

      function g() {}
      g.prototype = {
        vertices: function(E, b) {
          this.k && this.getValue();
          var x = this.v;
          b !== void 0 && (x = this.getValueAtTime(b, 0));
          var M, m = x._length,
              d = x[E],
              f = x.v,
              y = createSizedArray(m);
          for (M = 0; M < m; M += 1) E === "i" || E === "o" ? y[M] = [d[M][0] - f[M][0], d[M][1] - f[M][1]] : y[M] = [d[M][0], d[M][1]];
          return y
        },
        points: function(E) {
          return this.vertices("v", E)
        },
        inTangents: function(E) {
          return this.vertices("i", E)
        },
        outTangents: function(E) {
          return this.vertices("o", E)
        },
        isClosed: function() {
          return this.v.c
        },
        pointOnPath: function(E, b) {
          var x = this.v;
          b !== void 0 && (x = this.getValueAtTime(b, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(x));
          for (var M = this._segmentsLength, m = M.lengths, d = M.totalLength * E, f = 0, y = m.length, A = 0, T; f < y;) {
            if (A + m[f].addedLength > d) {
              var I = f,
                  j = x.c && f === y - 1 ? 0 : f + 1,
                  L = (d - A) / m[f].addedLength;
              T = bez.getPointInSegment(x.v[I], x.v[j], x.o[I], x.i[j], L, m[f]);
              break
            } else A += m[f].addedLength;
            f += 1
          }
          return T || (T = x.c ? [x.v[0][0], x.v[0][1]] : [x.v[x._length - 1][0], x.v[x._length - 1][1]]), T
        },
        vectorOnPath: function(E, b, x) {
          E == 1 ? E = this.v.c : E == 0 && (E = .999);
          var M = this.pointOnPath(E, b),
              m = this.pointOnPath(E + .001, b),
              d = m[0] - M[0],
              f = m[1] - M[1],
              y = Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2));
          if (y === 0) return [0, 0];
          var A = x === "tangent" ? [d / y, f / y] : [-f / y, d / y];
          return A
        },
        tangentOnPath: function(E, b) {
          return this.vectorOnPath(E, b, "tangent")
        },
        normalOnPath: function(E, b) {
          return this.vectorOnPath(E, b, "normal")
        },
        setGroupProperty: expressionHelpers.setGroupProperty,
        getValueAtTime: expressionHelpers.getStaticValueAtTime
      }, extendPrototype([g], o), extendPrototype([g], p), p.prototype.getValueAtTime = l, p.prototype.initiateExpression = ExpressionManager.initiateExpression;
      var S = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function(u, E, b, x, M) {
        var m = S(u, E, b, x, M);
        return m.propertyIndex = E.ix, m.lock = !1, b === 3 ? expressionHelpers.searchExpressions(u, E.pt, m) : b === 4 && expressionHelpers.searchExpressions(u, E.ks, m), m.k && u.addDynamicProperty(m), m
      }
    }

    function initialize$1() {
      addPropertyDecorator()
    }

    function addDecorator() {
      function e() {
        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
      }
      TextProperty.prototype.getExpressionValue = function(t, r) {
        var s = this.calculateExpression(r);
        if (t.t !== s) {
          var i = {};
          return this.copyData(i, t), i.t = s.toString(), i.__complete = !1, i
        }
        return t
      }, TextProperty.prototype.searchProperty = function() {
        var t = this.searchKeyframes(),
            r = this.searchExpressions();
        return this.kf = t || r, this.kf
      }, TextProperty.prototype.searchExpressions = e
    }

    function initialize() {
      addDecorator()
    }

    function SVGComposableEffect() {}
    SVGComposableEffect.prototype = {
      createMergeNode: function e(t, r) {
        var s = createNS("feMerge");
        s.setAttribute("result", t);
        var i, n;
        for (n = 0; n < r.length; n += 1) i = createNS("feMergeNode"), i.setAttribute("in", r[n]), s.appendChild(i), s.appendChild(i);
        return s
      }
    };
    var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

    function SVGTintFilter(e, t, r, s, i) {
      this.filterManager = t;
      var n = createNS("feColorMatrix");
      n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = n, n.setAttribute("result", s + "_tint_1"), e.appendChild(n), n = createNS("feColorMatrix"), n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", s + "_tint_2"), e.appendChild(n), this.matrixFilter = n;
      var a = this.createMergeNode(s, [i, s + "_tint_1", s + "_tint_2"]);
      e.appendChild(a)
    }
    extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(e) {
      if (e || this.filterManager._mdf) {
        var t = this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            s = this.filterManager.effectElements[2].p.v / 100;
        this.linearFilter.setAttribute("values", linearFilterValue + " " + s + " 0"), this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0")
      }
    };

    function SVGFillFilter(e, t, r, s) {
      this.filterManager = t;
      var i = createNS("feColorMatrix");
      i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", s), e.appendChild(i), this.matrixFilter = i
    }
    SVGFillFilter.prototype.renderFrame = function(e) {
      if (e || this.filterManager._mdf) {
        var t = this.filterManager.effectElements[2].p.v,
            r = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0")
      }
    };

    function SVGStrokeEffect(e, t, r) {
      this.initialized = !1, this.filterManager = t, this.elem = r, this.paths = []
    }
    SVGStrokeEffect.prototype.initialize = function() {
      var e = this.elem.layerElement.children || this.elem.layerElement.childNodes,
          t, r, s, i;
      for (this.filterManager.effectElements[1].p.v === 1 ? (i = this.elem.maskManager.masksProperties.length, s = 0) : (s = this.filterManager.effectElements[0].p.v - 1, i = s + 1), r = createNS("g"), r.setAttribute("fill", "none"), r.setAttribute("stroke-linecap", "round"), r.setAttribute("stroke-dashoffset", 1), s; s < i; s += 1) t = createNS("path"), r.appendChild(t), this.paths.push({
        p: t,
        m: s
      });
      if (this.filterManager.effectElements[10].p.v === 3) {
        var n = createNS("mask"),
            a = createElementID();
        n.setAttribute("id", a), n.setAttribute("mask-type", "alpha"), n.appendChild(r), this.elem.globalData.defs.appendChild(n);
        var l = createNS("g");
        for (l.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")"); e[0];) l.appendChild(e[0]);
        this.elem.layerElement.appendChild(l), this.masker = n, r.setAttribute("stroke", "#fff")
      } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
        if (this.filterManager.effectElements[10].p.v === 2)
          for (e = this.elem.layerElement.children || this.elem.layerElement.childNodes; e.length;) this.elem.layerElement.removeChild(e[0]);
        this.elem.layerElement.appendChild(r), this.elem.layerElement.removeAttribute("mask"), r.setAttribute("stroke", "#fff")
      }
      this.initialized = !0, this.pathMasker = r
    }, SVGStrokeEffect.prototype.renderFrame = function(e) {
      this.initialized || this.initialize();
      var t, r = this.paths.length,
          s, i;
      for (t = 0; t < r; t += 1)
        if (this.paths[t].m !== -1 && (s = this.elem.maskManager.viewData[this.paths[t].m], i = this.paths[t].p, (e || this.filterManager._mdf || s.prop._mdf) && i.setAttribute("d", s.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || s.prop._mdf)) {
          var n;
          if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
            var a = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01,
                l = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * .01,
                o = i.getTotalLength();
            n = "0 0 0 " + o * a + " ";
            var p = o * (l - a),
                g = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01,
                S = Math.floor(p / g),
                u;
            for (u = 0; u < S; u += 1) n += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01 + " ";
            n += "0 " + o * 10 + " 0 0"
          } else n = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * .01;
          i.setAttribute("stroke-dasharray", n)
        } if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (e || this.filterManager.effectElements[3].p._mdf)) {
        var E = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(E[0] * 255) + "," + bmFloor(E[1] * 255) + "," + bmFloor(E[2] * 255) + ")")
      }
    };

    function SVGTritoneFilter(e, t, r, s) {
      this.filterManager = t;
      var i = createNS("feColorMatrix");
      i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(i);
      var n = createNS("feComponentTransfer");
      n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", s), this.matrixFilter = n;
      var a = createNS("feFuncR");
      a.setAttribute("type", "table"), n.appendChild(a), this.feFuncR = a;
      var l = createNS("feFuncG");
      l.setAttribute("type", "table"), n.appendChild(l), this.feFuncG = l;
      var o = createNS("feFuncB");
      o.setAttribute("type", "table"), n.appendChild(o), this.feFuncB = o, e.appendChild(n)
    }
    SVGTritoneFilter.prototype.renderFrame = function(e) {
      if (e || this.filterManager._mdf) {
        var t = this.filterManager.effectElements[0].p.v,
            r = this.filterManager.effectElements[1].p.v,
            s = this.filterManager.effectElements[2].p.v,
            i = s[0] + " " + r[0] + " " + t[0],
            n = s[1] + " " + r[1] + " " + t[1],
            a = s[2] + " " + r[2] + " " + t[2];
        this.feFuncR.setAttribute("tableValues", i), this.feFuncG.setAttribute("tableValues", n), this.feFuncB.setAttribute("tableValues", a)
      }
    };

    function SVGProLevelsFilter(e, t, r, s) {
      this.filterManager = t;
      var i = this.filterManager.effectElements,
          n = createNS("feComponentTransfer");
      (i[10].p.k || i[10].p.v !== 0 || i[11].p.k || i[11].p.v !== 1 || i[12].p.k || i[12].p.v !== 1 || i[13].p.k || i[13].p.v !== 0 || i[14].p.k || i[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", n)), (i[17].p.k || i[17].p.v !== 0 || i[18].p.k || i[18].p.v !== 1 || i[19].p.k || i[19].p.v !== 1 || i[20].p.k || i[20].p.v !== 0 || i[21].p.k || i[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", n)), (i[24].p.k || i[24].p.v !== 0 || i[25].p.k || i[25].p.v !== 1 || i[26].p.k || i[26].p.v !== 1 || i[27].p.k || i[27].p.v !== 0 || i[28].p.k || i[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", n)), (i[31].p.k || i[31].p.v !== 0 || i[32].p.k || i[32].p.v !== 1 || i[33].p.k || i[33].p.v !== 1 || i[34].p.k || i[34].p.v !== 0 || i[35].p.k || i[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", n)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (n.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(n)), (i[3].p.k || i[3].p.v !== 0 || i[4].p.k || i[4].p.v !== 1 || i[5].p.k || i[5].p.v !== 1 || i[6].p.k || i[6].p.v !== 0 || i[7].p.k || i[7].p.v !== 1) && (n = createNS("feComponentTransfer"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", s), e.appendChild(n), this.feFuncRComposed = this.createFeFunc("feFuncR", n), this.feFuncGComposed = this.createFeFunc("feFuncG", n), this.feFuncBComposed = this.createFeFunc("feFuncB", n))
    }
    SVGProLevelsFilter.prototype.createFeFunc = function(e, t) {
      var r = createNS(e);
      return r.setAttribute("type", "table"), t.appendChild(r), r
    }, SVGProLevelsFilter.prototype.getTableValue = function(e, t, r, s, i) {
      for (var n = 0, a = 256, l, o = Math.min(e, t), p = Math.max(e, t), g = Array.call(null, {
        length: a
      }), S, u = 0, E = i - s, b = t - e; n <= 256;) l = n / 256, l <= o ? S = b < 0 ? i : s : l >= p ? S = b < 0 ? s : i : S = s + E * Math.pow((l - e) / b, 1 / r), g[u] = S, u += 1, n += 256 / (a - 1);
      return g.join(" ")
    }, SVGProLevelsFilter.prototype.renderFrame = function(e) {
      if (e || this.filterManager._mdf) {
        var t, r = this.filterManager.effectElements;
        this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
      }
    };

    function SVGDropShadowEffect(e, t, r, s, i) {
      var n = t.container.globalData.renderConfig.filterSize,
          a = t.data.fs || n;
      e.setAttribute("x", a.x || n.x), e.setAttribute("y", a.y || n.y), e.setAttribute("width", a.width || n.width), e.setAttribute("height", a.height || n.height), this.filterManager = t;
      var l = createNS("feGaussianBlur");
      l.setAttribute("in", "SourceAlpha"), l.setAttribute("result", s + "_drop_shadow_1"), l.setAttribute("stdDeviation", "0"), this.feGaussianBlur = l, e.appendChild(l);
      var o = createNS("feOffset");
      o.setAttribute("dx", "25"), o.setAttribute("dy", "0"), o.setAttribute("in", s + "_drop_shadow_1"), o.setAttribute("result", s + "_drop_shadow_2"), this.feOffset = o, e.appendChild(o);
      var p = createNS("feFlood");
      p.setAttribute("flood-color", "#00ff00"), p.setAttribute("flood-opacity", "1"), p.setAttribute("result", s + "_drop_shadow_3"), this.feFlood = p, e.appendChild(p);
      var g = createNS("feComposite");
      g.setAttribute("in", s + "_drop_shadow_3"), g.setAttribute("in2", s + "_drop_shadow_2"), g.setAttribute("operator", "in"), g.setAttribute("result", s + "_drop_shadow_4"), e.appendChild(g);
      var S = this.createMergeNode(s, [s + "_drop_shadow_4", i]);
      e.appendChild(S)
    }
    extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(e) {
      if (e || this.filterManager._mdf) {
        if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
          var t = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(t[0] * 255), Math.round(t[1] * 255), Math.round(t[2] * 255)))
        }
        if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
          var r = this.filterManager.effectElements[3].p.v,
              s = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
              i = r * Math.cos(s),
              n = r * Math.sin(s);
          this.feOffset.setAttribute("dx", i), this.feOffset.setAttribute("dy", n)
        }
      }
    };
    var _svgMatteSymbols = [];

    function SVGMatte3Effect(e, t, r) {
      this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
    }
    SVGMatte3Effect.prototype.findSymbol = function(e) {
      for (var t = 0, r = _svgMatteSymbols.length; t < r;) {
        if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
        t += 1
      }
      return null
    }, SVGMatte3Effect.prototype.replaceInParent = function(e, t) {
      var r = e.layerElement.parentNode;
      if (r) {
        for (var s = r.children, i = 0, n = s.length; i < n && s[i] !== e.layerElement;) i += 1;
        var a;
        i <= n - 2 && (a = s[i + 1]);
        var l = createNS("use");
        l.setAttribute("href", "#" + t), a ? r.insertBefore(l, a) : r.appendChild(l)
      }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) {
      if (!this.findSymbol(t)) {
        var r = createElementID(),
            s = createNS("mask");
        s.setAttribute("id", t.layerId), s.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
        var i = e.globalData.defs;
        i.appendChild(s);
        var n = createNS("symbol");
        n.setAttribute("id", r), this.replaceInParent(t, r), n.appendChild(t.layerElement), i.appendChild(n);
        var a = createNS("use");
        a.setAttribute("href", "#" + r), s.appendChild(a), t.data.hd = !1, t.show()
      }
      e.setMatte(t.layerId)
    }, SVGMatte3Effect.prototype.initialize = function() {
      for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, s = t.length; r < s;) t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
      this.initialized = !0
    }, SVGMatte3Effect.prototype.renderFrame = function() {
      this.initialized || this.initialize()
    };

    function SVGGaussianBlurEffect(e, t, r, s) {
      e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
      var i = createNS("feGaussianBlur");
      i.setAttribute("result", s), e.appendChild(i), this.feGaussianBlur = i
    }
    SVGGaussianBlurEffect.prototype.renderFrame = function(e) {
      if (e || this.filterManager._mdf) {
        var t = .3,
            r = this.filterManager.effectElements[0].p.v * t,
            s = this.filterManager.effectElements[1].p.v,
            i = s == 3 ? 0 : r,
            n = s == 2 ? 0 : r;
        this.feGaussianBlur.setAttribute("stdDeviation", i + " " + n);
        var a = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
        this.feGaussianBlur.setAttribute("edgeMode", a)
      }
    };

    function TransformEffect() {}
    TransformEffect.prototype.init = function(e) {
      this.effectsManager = e, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
    }, TransformEffect.prototype.renderFrame = function(e) {
      if (this._opMdf = !1, this._mdf = !1, e || this.effectsManager._mdf) {
        var t = this.effectsManager.effectElements,
            r = t[0].p.v,
            s = t[1].p.v,
            i = t[2].p.v === 1,
            n = t[3].p.v,
            a = i ? n : t[4].p.v,
            l = t[5].p.v,
            o = t[6].p.v,
            p = t[7].p.v;
        this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(a * .01, n * .01, 1), this.matrix.rotate(-p * degToRads), this.matrix.skewFromAxis(-l * degToRads, (o + 90) * degToRads), this.matrix.translate(s[0], s[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0)
      }
    };

    function SVGTransformEffect(e, t) {
      this.init(t)
    }
    extendPrototype([TransformEffect], SVGTransformEffect);

    function CVTransformEffect(e) {
      this.init(e)
    }
    return extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
  })
})(lottie$1, lottie$1.exports);
var lottieExports = lottie$1.exports;
const lottie = getDefaultExportFromCjs(lottieExports),
    nm = "sparkles-UPDATE 2",
    ddd = 0,
    h = 250,
    w = 250,
    meta = {
      g: "LottieFiles AE 1.0.0"
    },
    layers = [{
      ty: 0,
      nm: "sparkles-UPDATE",
      sr: 1,
      st: 0,
      op: 480,
      ip: 0,
      hd: !1,
      ddd: 0,
      bm: 0,
      hasMask: !1,
      ao: 0,
      ks: {
        a: {
          a: 0,
          k: [450, 336, 0],
          ix: 1
        },
        s: {
          a: 0,
          k: [100, 100, 100],
          ix: 6
        },
        sk: {
          a: 0,
          k: 0
        },
        p: {
          a: 0,
          k: [117, 127, 0],
          ix: 2
        },
        r: {
          a: 0,
          k: 0,
          ix: 10
        },
        sa: {
          a: 0,
          k: 0
        },
        o: {
          a: 0,
          k: 100,
          ix: 11
        }
      },
      ef: [],
      w: 1800,
      h: 1080,
      refId: "comp_0",
      ind: 1
    }],
    v = "4.8.0",
    fr = 24,
    op = 28,
    ip = 0,
    assets = [{
      nm: "",
      id: "comp_0",
      layers: [{
        ty: 4,
        nm: "star-3 Outlines",
        sr: 1,
        st: 0,
        op: 480,
        ip: 0,
        hd: !1,
        ddd: 0,
        bm: 0,
        hasMask: !1,
        ao: 0,
        ks: {
          a: {
            a: 0,
            k: [430, 335.875, 0],
            ix: 1
          },
          s: {
            a: 1,
            k: [{
              o: {
                x: .167,
                y: 0
              },
              i: {
                x: .833,
                y: 1
              },
              s: [0, 0, 100],
              t: 0
            }, {
              o: {
                x: .333,
                y: 0
              },
              i: {
                x: .667,
                y: 1
              },
              s: [100, 100, 100],
              t: 8.008
            }, {
              s: [0, 0, 100],
              t: 22.9853515625
            }],
            ix: 6
          },
          sk: {
            a: 0,
            k: 0
          },
          p: {
            a: 0,
            k: [430, 335.875, 0],
            ix: 2
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          sa: {
            a: 0,
            k: 0
          },
          o: {
            a: 0,
            k: 100,
            ix: 11
          }
        },
        ef: [],
        shapes: [{
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 2",
          ix: 1,
          cix: 2,
          np: 4,
          it: [{
            ty: "sh",
            bm: 0,
            hd: !1,
            mn: "ADBE Vector Shape - Group",
            nm: "Path 1",
            ix: 1,
            d: 1,
            ks: {
              a: 0,
              k: {
                c: !0,
                i: [
                  [-1.272, 4.724],
                  [0, 0],
                  [-4.724, -1.272],
                  [1.272, -4.724],
                  [4.724, 1.272]
                ],
                o: [
                  [0, 0],
                  [1.272, 4.724],
                  [-4.724, 1.272],
                  [-1.272, -4.724],
                  [4.724, -1.272]
                ],
                v: [
                  [0, -9.686],
                  [0, -9.686],
                  [9.686, 0],
                  [0, 9.686],
                  [-9.686, 0]
                ]
              },
              ix: 2
            }
          }, {
            ty: "fl",
            bm: 0,
            hd: !1,
            mn: "ADBE Vector Graphic - Fill",
            nm: "Fill 1",
            c: {
              a: 0,
              k: [1, 1, 1],
              ix: 4
            },
            r: 1,
            o: {
              a: 0,
              k: 100,
              ix: 5
            }
          }, {
            ty: "tr",
            a: {
              a: 0,
              k: [0, 0],
              ix: 1
            },
            s: {
              a: 0,
              k: [100, 100],
              ix: 3
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            p: {
              a: 0,
              k: [429.595, 336.133],
              ix: 2
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            }
          }]
        }, {
          ty: "pb",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Filter - PB",
          nm: "Pucker & Bloat 1",
          ix: 2,
          a: {
            a: 1,
            k: [{
              o: {
                x: .167,
                y: .167
              },
              i: {
                x: .833,
                y: .833
              },
              s: [-10],
              t: 8
            }, {
              s: [-10],
              t: 23
            }],
            ix: 1
          }
        }],
        ind: 1
      }, {
        ty: 4,
        nm: "star-2 Outlines",
        sr: 1,
        st: 0,
        op: 480,
        ip: 0,
        hd: !1,
        ddd: 0,
        bm: 0,
        hasMask: !1,
        ao: 0,
        ks: {
          a: {
            a: 0,
            k: [445.5, 359.5, 0],
            ix: 1
          },
          s: {
            a: 1,
            k: [{
              o: {
                x: .167,
                y: 0
              },
              i: {
                x: .833,
                y: 1
              },
              s: [0, 0, 100],
              t: 4
            }, {
              o: {
                x: .333,
                y: 0
              },
              i: {
                x: .667,
                y: 1
              },
              s: [100, 100, 100],
              t: 12.008
            }, {
              s: [0, 0, 100],
              t: 26.9853515625
            }],
            ix: 6
          },
          sk: {
            a: 0,
            k: 0
          },
          p: {
            a: 0,
            k: [445.5, 359.5, 0],
            ix: 2
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          sa: {
            a: 0,
            k: 0
          },
          o: {
            a: 0,
            k: 100,
            ix: 11
          }
        },
        ef: [],
        shapes: [{
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 2",
          ix: 1,
          cix: 2,
          np: 4,
          it: [{
            ty: "sh",
            bm: 0,
            hd: !1,
            mn: "ADBE Vector Shape - Group",
            nm: "Path 1",
            ix: 1,
            d: 1,
            ks: {
              a: 0,
              k: {
                c: !0,
                i: [
                  [-2.071, 7.691],
                  [0, 0],
                  [-7.691, -2.071],
                  [2.071, -7.691],
                  [7.691, 2.071]
                ],
                o: [
                  [0, 0],
                  [2.071, 7.691],
                  [-7.691, 2.071],
                  [-2.071, -7.691],
                  [7.691, -2.071]
                ],
                v: [
                  [0, -15.769],
                  [0, -15.769],
                  [15.769, 0],
                  [0, 15.769],
                  [-15.769, 0]
                ]
              },
              ix: 2
            }
          }, {
            ty: "fl",
            bm: 0,
            hd: !1,
            mn: "ADBE Vector Graphic - Fill",
            nm: "Fill 1",
            c: {
              a: 0,
              k: [1, 1, 1],
              ix: 4
            },
            r: 1,
            o: {
              a: 0,
              k: 100,
              ix: 5
            }
          }, {
            ty: "tr",
            a: {
              a: 0,
              k: [0, 0],
              ix: 1
            },
            s: {
              a: 0,
              k: [100, 100],
              ix: 3
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            p: {
              a: 0,
              k: [445.917, 359.453],
              ix: 2
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            }
          }]
        }, {
          ty: "pb",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Filter - PB",
          nm: "Pucker & Bloat 1",
          ix: 2,
          a: {
            a: 1,
            k: [{
              o: {
                x: .167,
                y: .167
              },
              i: {
                x: .833,
                y: .833
              },
              s: [-10],
              t: 12
            }, {
              s: [-80],
              t: 27
            }],
            ix: 1
          }
        }],
        ind: 2
      }, {
        ty: 4,
        nm: "star-1 Outlines",
        sr: 1,
        st: 0,
        op: 480,
        ip: 0,
        hd: !1,
        ddd: 0,
        bm: 0,
        hasMask: !1,
        ao: 0,
        ks: {
          a: {
            a: 0,
            k: [476, 324, 0],
            ix: 1
          },
          s: {
            a: 1,
            k: [{
              o: {
                x: .167,
                y: 0
              },
              i: {
                x: .833,
                y: 1
              },
              s: [0, 0, 100],
              t: 0
            }, {
              o: {
                x: .333,
                y: 0
              },
              i: {
                x: .667,
                y: 1
              },
              s: [100, 100, 100],
              t: 8.008
            }, {
              s: [0, 0, 100],
              t: 22.9853515625
            }],
            ix: 6
          },
          sk: {
            a: 0,
            k: 0
          },
          p: {
            a: 0,
            k: [476, 324, 0],
            ix: 2
          },
          r: {
            a: 0,
            k: 0,
            ix: 10
          },
          sa: {
            a: 0,
            k: 0
          },
          o: {
            a: 0,
            k: 100,
            ix: 11
          }
        },
        ef: [],
        shapes: [{
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 2",
          ix: 1,
          cix: 2,
          np: 4,
          it: [{
            ty: "sh",
            bm: 0,
            hd: !1,
            mn: "ADBE Vector Shape - Group",
            nm: "Path 1",
            ix: 1,
            d: 1,
            ks: {
              a: 0,
              k: {
                c: !0,
                i: [
                  [-4.281, 15.899],
                  [0, 0],
                  [-15.899, -4.281],
                  [4.281, -15.899],
                  [15.899, 4.28]
                ],
                o: [
                  [0, 0],
                  [4.281, 15.899],
                  [-15.899, 4.28],
                  [-4.281, -15.899],
                  [15.899, -4.281]
                ],
                v: [
                  [0, -32.599],
                  [0, -32.599],
                  [32.599, 0],
                  [0, 32.599],
                  [-32.599, 0]
                ]
              },
              ix: 2
            }
          }, {
            ty: "fl",
            bm: 0,
            hd: !1,
            mn: "ADBE Vector Graphic - Fill",
            nm: "Fill 1",
            c: {
              a: 0,
              k: [1, 1, 1],
              ix: 4
            },
            r: 1,
            o: {
              a: 0,
              k: 100,
              ix: 5
            }
          }, {
            ty: "tr",
            a: {
              a: 0,
              k: [0, 0],
              ix: 1
            },
            s: {
              a: 0,
              k: [100, 100],
              ix: 3
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            p: {
              a: 0,
              k: [474.352, 324.293],
              ix: 2
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            }
          }]
        }, {
          ty: "pb",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Filter - PB",
          nm: "Pucker & Bloat 1",
          ix: 2,
          a: {
            a: 1,
            k: [{
              o: {
                x: .167,
                y: .167
              },
              i: {
                x: .833,
                y: .833
              },
              s: [-10],
              t: 8
            }, {
              s: [-80],
              t: 23
            }],
            ix: 1
          }
        }],
        ind: 3
      }]
    }],
    sparklesJSON = {
      nm,
      ddd,
      h,
      w,
      meta,
      layers,
      v,
      fr,
      op,
      ip,
      assets
    },
    magnifyingGlass = "data:image/svg+xml,%3csvg%20width='24'%20height='25'%20viewBox='0%200%2024%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.20078%2012.5946C4.20078%2010.4586%205.32633%208.50999%207.20225%207.42325C7.38399%207.31582%207.57013%207.219%207.75984%207.13281C8.13204%206.96371%208.3999%206.60873%208.3999%206.19992C8.3999%205.59315%207.83029%205.14455%207.26848%205.37377C4.41143%206.53943%202.3999%209.351%202.3999%2012.5946C2.3999%2016.9041%205.88911%2020.3892%2010.2037%2020.3892C12.0046%2020.3892%2013.6929%2019.7896%2015.0436%2018.7404L20.071%2023.7244C20.4087%2024.0991%2020.9715%2024.0991%2021.3467%2023.7244C21.6843%2023.3871%2021.6843%2022.825%2021.3467%2022.4503L16.3192%2017.4662C17.0092%2016.5801%2017.5212%2015.5485%2017.7913%2014.4244C17.9853%2013.6173%2017.1172%2013.0855%2016.3903%2013.4862C16.2168%2013.5818%2016.0981%2013.7514%2016.0536%2013.9444C15.6815%2015.5578%2014.6527%2016.9478%2013.2052%2017.8035C11.3293%2018.8903%209.04065%2018.8903%207.20225%2017.8035C5.32633%2016.7168%204.20078%2014.7681%204.20078%2012.5946Z'%20fill='%23485E75'/%3e%3cpath%20d='M20.2307%200.537579L19.7017%201.6618L18.5113%202.25698C18.1145%202.45537%2018.1145%203.05055%2018.5113%203.24895L19.7017%203.77799L20.2307%204.96835C20.4291%205.36513%2021.0243%205.36513%2021.2227%204.96835L21.8179%203.77799L22.9421%203.24895C23.3389%203.05055%2023.3389%202.45537%2022.9421%202.25698L21.8179%201.6618L21.2227%200.537579C21.0243%200.140794%2020.4291%200.140794%2020.2307%200.537579Z'%20fill='%23485E75'/%3e%3cpath%20d='M14.1846%203.37363L13.1265%205.8866L10.5474%207.01083C10.0845%207.20922%2010.0845%207.8044%2010.5474%208.00279L13.1265%209.06089L14.1846%2011.64C14.383%2012.1029%2014.9782%2012.1029%2015.1765%2011.64L16.3008%209.06089L18.8137%208.00279C19.2767%207.8044%2019.2767%207.20922%2018.8137%207.01083L16.3008%205.8866L15.1765%203.37363C14.9782%202.91071%2014.383%202.91071%2014.1846%203.37363Z'%20fill='%23485E75'/%3e%3c/svg%3e",
    ChatAIOpenChatButton = () => {
      const {
        sendSegmentEvent: e
      } = useSegmentEvent({}), [t] = useChatAIModal(), r = reactExports.useCallback(() => {
        t ? useChatAIModal.close() : launchChatAI(getChatContext()), e({
          name: t ? "AI chatbot close" : "AI chatbot open"
        }).then()
      }, [t, e]), [s, i] = reactExports.useState(null), n = reactExports.useRef(null), a = reactExports.useCallback(() => {
        n.current && !s && i(loadAnimation(n.current)), s == null || s.stop(), s == null || s.play()
      }, [s]);
      return jsxRuntimeExports.jsx(AnimatedButton, {
        size: "400",
        buttonType: "icon",
        ref: n,
        onMouseOver: a,
        onClick: r,
        icon: jsxRuntimeExports.jsx(Image$4, {
          src: magnifyingGlass
        })
      })
    },
    loadAnimation = e => lottie.loadAnimation({
      container: e,
      renderer: "svg",
      loop: 5,
      autoplay: !1,
      animationData: sparklesJSON
    }),
    Image$4 = ut.img`
  font-size: ${({theme:e})=>e.spacing.sp24};
  width: 1em;
  height: 1em;
`,
    AnimatedButton = ut(NewButton)`
  > svg {
    width: 100%;
    height: 100%;
    position: absolute;
  }
`,
    ChatTooltip = () => {
      const {
        t: e
      } = useTranslation();
      return jsxRuntimeExports.jsxs(Wrapper$o, {
        children: [jsxRuntimeExports.jsxs(Title$c, {
          children: [jsxRuntimeExports.jsxs(Chip, {
            type: "beta",
            children: [jsxRuntimeExports.jsx(Image$3, {
              src: sparkles
            }), e("AIChat.title.chip")]
          }), e("AIChat.tooltip.title")]
        }), e("AIChat.tooltip.desc")]
      })
    },
    Wrapper$o = ut.div`
  ${cssBody200};
`,
    Title$c = ut.div`
  ${cssBody200Bold};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp8};
  margin-bottom: ${({theme:e})=>e.spacing.sp8};
`,
    Chip = ut(StatusChip)`
  gap: ${({theme:e})=>e.spacing.sp4};
`,
    Image$3 = ut.img`
  width: 1em;
  height: 1em;
`,
    ChatAI = reactExports.memo(() => (reactExports.useEffect(() => {
      checkChatAISession()
    }, []), reactExports.useEffect(() => {
      let e = document.getElementById("chatAI");
      return e || (e = document.createElement("div", {}), e.id = "chatAI", document.body.appendChild(e)), e && createRoot(e).render(jsxRuntimeExports.jsx(Chat, {})), () => {
        const t = document.getElementById("chatAI");
        t && document.body.removeChild(t)
      }
    }, []), jsxRuntimeExports.jsx(Tooltip, {
      colorType: "light",
      content: jsxRuntimeExports.jsx(ChatTooltip, {}),
      maxWidth: 400,
      appendTo: document.body,
      children: jsxRuntimeExports.jsx(ButtonWrapper, {
        children: jsxRuntimeExports.jsx(ChatAIOpenChatButton, {})
      })
    }))),
    store$1 = createStore(),
    Chat = () => jsxRuntimeExports.jsx(context.Provider, {
      value: store$1,
      children: jsxRuntimeExports.jsx(tt, {
        theme: styledTheme,
        children: jsxRuntimeExports.jsx(UiTranslateProvider, {
          children: jsxRuntimeExports.jsx(FeaturesTranslateProvider, {
            children: jsxRuntimeExports.jsx(ChatAIModal, {})
          })
        })
      })
    }),
    ButtonWrapper = ut.div``,
    initialState = {
      enabled: !1,
      selected: "",
      initialProfile: "",
      onChange: () => {},
      onEdit: () => {}
    },
    usePpcStore = create(() => initialState),
    setPpcSelect = e => usePpcStore.setState(() => ({
      ...e,
      selected: e.initialProfile
    })),
    changePpcProfile = e => {
      usePpcStore.getState().onChange(e), usePpcStore.setState(t => ({
        ...t,
        selected: e.id
      }))
    },
    ppcSelectSelector = e => {
      var n, a;
      const t = e.selected,
          r = (n = e.data) == null ? void 0 : n.find(l => l.profiles.some(o => o.id === t)),
          s = r == null ? void 0 : r.profiles.find(l => l.id === t),
          i = (a = e.data) == null ? void 0 : a.filter(l => l.seller_string_id !== (s == null ? void 0 : s.seller_string_id));
      return {
        profile: s,
        group: r,
        otherAccounts: i,
        onChange: e.onChange,
        onEdit: e.onEdit
      }
    },
    ppcEnabledSelector = e => e.enabled || !1,
    menuToolHeight = 48,
    Ellipsis = ut.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,
    AccountName = ut(Ellipsis)`
  ${cssBody200Bold};
  color: ${({theme:e})=>e.systemColors.black};
  display: block;
  max-width: 236px;

  ${({$isOnProfileDropdown:e,theme:t})=>e&&at`
    $ {
        cssDisplay50Bold
    };
    text - align: center;
    color: $ {
        t.systemColors.black
    };
    `}
`,
    AccountId = ut(Ellipsis)`
  ${cssBody200};
  display: block;
  color: ${({theme:e})=>e.systemColors.grey600};
`,
    PpcSelect = () => {
      const {
        profile: e,
        group: t,
        otherAccounts: r,
        onEdit: s
      } = usePpcStore(ppcSelectSelector), [i, n] = reactExports.useState(!1), a = reactExports.useRef(null), l = () => {
        n(!i)
      }, o = () => {
        n(!1)
      };
      useClickOutside({
        isActive: i,
        ref: a,
        handler: o
      });
      const p = (e == null ? void 0 : e.custom_name) || (e == null ? void 0 : e.brand_name) || (e == null ? void 0 : e.seller_string_id),
          g = u => {
            (e == null ? void 0 : e.id) !== (u == null ? void 0 : u.id) && changePpcProfile(u), o()
          },
          S = () => {
            s(e), o()
          };
      return jsxRuntimeExports.jsxs(Wrapper$n, {
        isOpen: i,
        ref: a,
        children: [jsxRuntimeExports.jsxs(Control, {
          onClick: l,
          children: [(e == null ? void 0 : e.country_code) && jsxRuntimeExports.jsx(Flag, {
            src: getFlagLink(e == null ? void 0 : e.country_code)
          }), jsxRuntimeExports.jsx(Ellipsis, {
            children: p
          }), jsxRuntimeExports.jsx(CaretIcon$1, {})]
        }), jsxRuntimeExports.jsx(CSSTransition, {
          in: i,
          timeout: 150,
          classNames: "slide",
          unmountOnExit: !0,
          mountOnEnter: !0,
          children: jsxRuntimeExports.jsxs(Dropdown$1, {
            children: [jsxRuntimeExports.jsxs(Title$b, {
              children: [jsxRuntimeExports.jsx(Ellipsis, {
                children: p
              }), jsxRuntimeExports.jsxs(Edit, {
                onClick: S,
                children: [jsxRuntimeExports.jsx(StyledEditIcon, {}), "Edit"]
              })]
            }), t == null ? void 0 : t.profiles.map(u => jsxRuntimeExports.jsxs(Market, {
              onClick: () => g(u),
              children: [(e == null ? void 0 : e.id) === u.id && jsxRuntimeExports.jsx(Check, {}), u.country_code && jsxRuntimeExports.jsx(Flag, {
                src: getFlagLink(u.country_code)
              }), jsxRuntimeExports.jsx(Ellipsis, {
                children: u.domain
              })]
            }, u.id)), r && r.length > 0 && jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [jsxRuntimeExports.jsx(Title$b, {
                children: "Other accounts"
              }), r.map(u => jsxRuntimeExports.jsxs(OtherAccounts, {
                children: [jsxRuntimeExports.jsx(Name$2, {
                  children: u.custom_name || u.brand_name || u.seller_string_id
                }), u.profiles.map(E => jsxRuntimeExports.jsxs(Market, {
                  onClick: () => g(E),
                  children: [E.country_code && jsxRuntimeExports.jsx(Flag, {
                    src: getFlagLink(E.country_code)
                  }), jsxRuntimeExports.jsx(Ellipsis, {
                    children: E.domain
                  })]
                }, E.id))]
              }, u.seller_string_id))]
            })]
          })
        })]
      })
    },
    Edit = ut.span`
  cursor: pointer;
  flex-shrink: 0;
  margin-left: 6px;
  font-size: 12px;
  border: none;
  background: none;
  color: #999;
  display: flex;
  align-items: center;
  height: 18px;
  transition: color 0.2s ease;
  font-weight: 400;

  &:hover {
    color: #666;
  }
`,
    Control = ut.button`
  z-index: 10;
  display: flex;
  align-items: center;
  height: 34px;
  background: #fff;
  width: 100%;
  padding: 0 25px 0 10px;
  border: 1px solid hsla(0, 0%, 59.2%, 0.17);
  border-radius: 2px;
  transition: all 0.25s cubic-bezier(0.5, 0, 0.2, 1);
  position: relative;
  font-size: 14px;
  color: #343a40;
`,
    CaretIcon$1 = ut(FontAwesomeIcon).attrs({
      icon: faChevronDown
    })`
  color: #95989c;
  position: absolute;
  font-size: 10px;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  transform-origin: center;
  transition: transform 0.2s ease;
`,
    Dropdown$1 = ut.div`
  overflow-y: auto;
  max-height: 70vh;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  border: 1px solid #b9c7d4;
  background: #fff;

  &.slide-enter {
    opacity: 0;
    transform: translateY(-25px);
  }

  &.slide-enter-active {
    opacity: 1;
    transition:
      opacity 150ms,
      transform 150ms;
    transform: translateY(0);
  }

  &.slide-exit {
    opacity: 1;
    transform: translateY(0);
  }

  &.slide-exit-active {
    opacity: 0;
    transform: translateY(-25px);
    transition:
      opacity 150ms,
      transform 150ms;
  }
`,
    Wrapper$n = ut.div`
  position: relative;
  margin-right: ${({theme:e})=>e.spacing.sp6};
  width: 200px;

  ${media.desktop} {
    width: 230px;
  }

  ${({isOpen:e})=>e&&at`
    $ {
        Control
    } {
        box - shadow: 0 0 4 px 0 #2064f5;
        border-color: # 2064 f5;
    }

    $ {
        CaretIcon$1
    } {
        transform: translateY(-50 % ) rotate(180 deg);
    }
    `}
`,
    Market = ut.div`
  position: relative;
  height: 32px;
  padding: 0 12px;
  padding-left: 26px;
  display: flex;
  align-items: center;
  color: #343a40;
  user-select: none;
  transition: background-color 0.25s ease;
  cursor: pointer;

  &:hover {
    background-color: #ebf0f2;
  }
`,
    Title$b = ut.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #000;
  font-weight: 700;
  padding: 12px 10px 4px;
`,
    Name$2 = ut(Ellipsis)`
  font-style: italic;
  padding: 0 12px;
  padding-left: 22px;
  display: flex;
  align-items: center;
  height: 32px;
  color: #343a40;
`,
    Flag = ut.img`
  flex-shrink: 0;
  display: block;
  margin-right: 4px;
  border-radius: 2px;
  overflow: hidden;
  width: 24px;
  height: 16px;
  object-fit: cover;
`,
    Check = ut(FontAwesomeIcon).attrs({
      icon: faCheck
    })`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  display: block;
  color: #2064f5;
`,
    StyledEditIcon = ut(FontAwesomeIcon).attrs({
      icon: faPen
    })`
  width: 10px;
  height: 10px;
  display: block;
  margin-right: 3px;
`,
    OtherAccounts = ut.div`
  ${Market} {
    padding-left: 34px;
  }
`,
    useInfiniteScrolling = ({
                              ref: e,
                              handler: t
                            }) => {
      reactExports.useEffect(() => {
        const r = e == null ? void 0 : e.current,
            s = () => {
              r && r.scrollTop === r.scrollHeight - r.offsetHeight && t()
            };
        return r == null || r.addEventListener("scroll", s), () => r == null ? void 0 : r.removeEventListener("scroll", s)
      }, [e, t])
    },
    NotificationItem = reactExports.memo(({
                                            item: e
                                          }) => {
      const t = reactExports.useRef(null),
          {
            t: r
          } = useTranslation(),
          s = i => {
            var n, a;
            i.stopPropagation(), !e.seen && i.target instanceof HTMLElement && !((a = (n = t.current) == null ? void 0 : n.contains) != null && a.call(n, i.target)) && useChangeSeenNotificationStatusController.action(e)
          };
      return jsxRuntimeExports.jsxs(Notification, {
        $read: e.seen,
        onClick: s,
        children: [jsxRuntimeExports.jsxs(Content$2, {
          children: [jsxRuntimeExports.jsx(Date$1, {
            $read: e.seen,
            children: e.date
          }), (e == null ? void 0 : e.title) !== "-" && jsxRuntimeExports.jsx(Title$a, {
            $read: e.seen,
            dangerouslySetInnerHTML: {
              __html: e.title
            }
          }), jsxRuntimeExports.jsx(Text$2, {
            $read: e.seen,
            dangerouslySetInnerHTML: {
              __html: e.message
            }
          }), e.link && jsxRuntimeExports.jsx(ViewLink, {
            $read: e.seen,
            as: "a",
            href: e.link,
            size: "100",
            buttonType: "text",
            children: r("notifications.viewInAlerts")
          })]
        }), jsxRuntimeExports.jsx(Delete, {
          size: "50",
          buttonType: "icon",
          ref: t,
          icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
            icon: faXmark
          }),
          onClick: () => useRemoveNotificationController.action(e)
        })]
      })
    }),
    Notification = ut.li`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: ${({theme:e})=>`
    $ {
        e.spacing.sp8
    }
    $ {
        e.spacing.sp8
    }
    0`};
  padding: ${({theme:e})=>e.spacing.sp16};
  box-sizing: border-box;
  border-radius: 6px;
  border: ${({$read:e,theme:t})=>e?`
    1 px solid $ {
        t.systemColors.white
    }
    `:`
    1 px solid $ {
        t.systemColors.grey200
    }
    `};
  cursor: pointer;
  transition: all 100ms ease-in-out;

  &:hover {
    background-color: ${({theme:e})=>e.systemColors.grey50};
  }

  ${({$read:e})=>e&&at`
    cursor: default;

    &
    : hover {
        background - color: $ {
            ({
                theme: t
            }) => t.systemColors.white
        };
    }
    `}
`,
    Content$2 = ut.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,
    Date$1 = ut.div`
  ${cssBody100};
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-bottom: ${({theme:e})=>e.spacing.sp4};
  color: ${({$read:e,theme:t})=>e?t.systemColors.grey300:t.systemColors.grey600};
`,
    Title$a = ut(Ellipsis)`
  ${cssBody400Bold};
  color: ${({$read:e,theme:t})=>e?t.systemColors.grey300:t.systemColors.black};
`,
    Text$2 = ut(Ellipsis)`
  ${cssBody400};
  color: ${({$read:e,theme:t})=>e?t.systemColors.grey300:t.systemColors.grey600};

  a {
    color: ${({$read:e,theme:t})=>e?t.systemColors.grey300:t.systemColors.blue600};
    text-decoration: none;
    font-weight: 900;
  }
`,
    ViewLink = ut(NewButton)`
  align-self: flex-start;
  margin-top: ${({theme:e})=>e.spacing.sp4};
  color: ${({$read:e,theme:t})=>e?t.systemColors.grey300:t.systemColors.blue600};
`,
    Delete = ut(NewButton)`
  margin-left: ${({theme:e})=>e.spacing.sp16};
  margin-right: -7px;
`,
    NotificationPanel = () => {
      const {
        notifications: e,
        totalCount: t
      } = useNewNotificationStore(notificationsSelector), r = useGetNotificationController(a => a.status), {
        t: s
      } = useTranslation(), {
        updateLink: i
      } = useLink(), n = reactExports.useRef(null);
      return useInfiniteScrolling({
        ref: n,
        handler: () => {
          notificationLoadMore()
        }
      }), r === "loading" ? jsxRuntimeExports.jsx(Wrapper$m, {
        children: jsxRuntimeExports.jsx(FlexCenter, {
          children: jsxRuntimeExports.jsx(StyledLogo, {})
        })
      }) : t === 0 ? jsxRuntimeExports.jsx(Wrapper$m, {
        children: jsxRuntimeExports.jsxs(Empty, {
          children: [jsxRuntimeExports.jsx(Bell$1, {}), jsxRuntimeExports.jsx(EmptyText, {
            children: s("notifications.emptyText")
          })]
        })
      }) : jsxRuntimeExports.jsxs(Wrapper$m, {
        children: [jsxRuntimeExports.jsxs(NotificationsHeader, {
          children: [jsxRuntimeExports.jsxs(Title$9, {
            children: [r === "progress" && jsxRuntimeExports.jsx(StyledSpinner, {}), s("notifications.title"), jsxRuntimeExports.jsx(TitleAlertsLink, {
              href: i(notificationsAlertsLink),
              children: jsxRuntimeExports.jsx(FontAwesomeIcon, {
                icon: faExternalLink
              })
            })]
          }), jsxRuntimeExports.jsx(Controls, {
            children: jsxRuntimeExports.jsx(DeleteAll, {
              size: "200",
              buttonType: "text",
              onClick: () => useRemoveAllNotificationsController.action(),
              children: s("notifications.clearAll")
            })
          })]
        }), jsxRuntimeExports.jsx(Notifications, {
          ref: n,
          children: jsxRuntimeExports.jsx(List$1, {
            children: e.map(a => jsxRuntimeExports.jsx(NotificationItem, {
              item: a
            }, a.id))
          })
        })]
      })
    },
    StyledLogo = ut(Logo$2)`
  width: 80px;
  height: 80px;
`,
    StyledSpinner = ut(Spinner)`
  margin-right: 4px;
`,
    FlexCenter = ut.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
`,
    List$1 = ut.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`,
    Wrapper$m = ut.div`
  min-width: 450px;
  max-width: 530px;
  min-height: 400px;
  max-height: 500px;

  display: flex;
  flex-direction: column;

  ${media.laptopBefore} {
    max-width: 350px;
    min-width: 320px;
  }
`,
    Notifications = ut.div`
  width: 100%;
  overflow-y: auto;
  min-height: 300px;
  max-height: 400px;
  ${scrollStylesCSS};
`,
    NotificationsHeader = ut.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme:e})=>e.systemColors.grey200};
  padding: 0 ${({theme:e})=>e.spacing.sp24} 8px;
  font-weight: 800;
`,
    Title$9 = ut.span`
  font-size: ${({theme:e})=>e.fontSize.extraSmall};
  color: ${({theme:e})=>e.systemColors.black};

  ${media.laptop} {
    font-size: ${({theme:e})=>e.fontSize.middle};
  }

  ${media.desktop} {
    font-size: ${({theme:e})=>e.fontSize.h5};
  }
`,
    TitleAlertsLink = ut.a`
  position: relative;
  color: ${({theme:e})=>e.systemColors.grey600};
  padding-left: ${({theme:e})=>e.spacing.sp12};

  ${media.laptop} {
    font-size: ${({theme:e})=>e.fontSize.middle};
  }
`,
    Controls = ut.div``,
    DeleteAll = ut(NewButton)`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 700;
  font-size: ${({theme:e})=>e.fontSize.extraSmall};
  color: ${({theme:e})=>e.systemColors.blue600};
  line-height: 16px;
  cursor: pointer;

  ${media.laptop} {
    font-size: ${({theme:e})=>e.fontSize.small};
  }

  ${media.laptop} {
    font-size: ${({theme:e})=>e.fontSize.middle};
  }
`,
    Empty = ut.div`
  min-height: 398px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,
    Bell$1 = ut(FontAwesomeIcon).attrs({
      icon: faBell
    })`
  font-size: 114px;
  color: #646464;
`,
    EmptyText = ut.div`
  text-align: center;
  font-size: 16px;
  color: ${({theme:e})=>e.systemColors.black};
  margin: 20px 0;
`,
    Bell = () => {
      const e = useNewNotificationStore(a => a.unreadCount),
          t = reactExports.useRef(null);
      reactExports.useEffect(() => {
        useGetUnreadCountController.action()
      }, []);
      const [r, s] = reactExports.useState(!1), i = () => s(!1), n = () => {
        !r && useGetNotificationController.action({}), useGetUnreadCountController.action(), s(!r)
      };
      return useClickOutside({
        isActive: r,
        ref: t,
        handler: i
      }), jsxRuntimeExports.jsx(Popover, {
        hideOnClick: !1,
        content: jsxRuntimeExports.jsx(NotificationPanel, {}),
        children: jsxRuntimeExports.jsxs(Container$6, {
          children: [!!e && jsxRuntimeExports.jsx(Badge$1, {}), jsxRuntimeExports.jsx(NewButton, {
            size: "400",
            buttonType: "icon",
            icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
              icon: faBell$1
            }),
            onClick: n
          })]
        })
      })
    },
    Container$6 = ut.div`
  position: relative;
`,
    Badge$1 = ut.div`
  position: absolute;
  pointer-events: none;
  color: ${({theme:e})=>e.systemColors.white};
  width: 10px;
  height: 10px;
  z-index: 9;
  top: 8px;
  right: 10px;
  padding: 0 3px;
  border-radius: 10px;
  font-size: ${({theme:e})=>e.fontSize.extraSmall};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.systemColors.red400};
`,
    facebook = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.0001%200C4.47587%200%206.10352e-05%204.47903%206.10352e-05%209.99999C6.10352e-05%2015.521%204.47587%2020%2010.0001%2020C15.5243%2020%2020.0001%2015.5242%2020.0001%209.99999C20.0001%204.4758%2015.5226%200%2010.0001%200ZM11.1815%2017.9782V12.4355H13.2037L13.5888%209.9262H11.1811V8.29798C11.1811%207.6125%2011.5174%206.94274%2012.5956%206.94274H13.69V4.80564C13.69%204.80564%2012.6968%204.63629%2011.7472%204.63629C9.76457%204.63629%208.4686%205.8379%208.4686%208.0133V9.9254H6.26498V12.4347H8.4686V17.9185C6.4843%2017.5351%204.71628%2016.4207%203.51457%2014.7957C2.31285%2013.1708%201.76504%2011.1539%201.97959%209.14437C2.19413%207.13478%203.15539%205.27901%204.67307%203.94442C6.19074%202.60984%208.1542%201.89374%2010.1747%201.93789C12.1952%201.98204%2014.1255%202.78323%2015.5835%204.18284C17.0414%205.58245%2017.9207%207.47845%2018.0472%209.49548C18.1738%2011.5125%2017.5384%2013.5035%2016.2668%2015.0744C14.9953%2016.6453%2013.1803%2017.6815%2011.1811%2017.9778L11.1815%2017.9782Z'%20fill='%23485E75'/%3e%3c/svg%3e",
    FacebookLink = () => {
      const e = () => {
        sendSegmentEvent({
          name: SEGMENT_EVENT_FACEBOOK_ICON_CLICKED,
          properties: {
            location: "menu"
          }
        })
      };
      return jsxRuntimeExports.jsx(Link$4, {
        href: facebookGroupLink,
        target: "_blank",
        rel: "noreferrer",
        onClick: e,
        children: jsxRuntimeExports.jsx(FacebookButton, {
          buttonType: "icon",
          size: "400",
          icon: jsxRuntimeExports.jsx(FacebookImage, {
            src: facebook
          })
        })
      })
    },
    Link$4 = ut.a``,
    FacebookButton = ut(NewButton)`
  & > div {
    width: 20px;
    height: 20px;
  }
`,
    FacebookImage = ut.img`
  width: 20px;
  height: 20px;
`,
    HelpCenter = () => {
      const [e, t] = reactExports.useState(!1), r = reactExports.useRef(null), s = () => t(!1), {
        t: i
      } = useTranslation();
      return useClickOutside({
        isActive: e,
        ref: r,
        handler: s
      }), jsxRuntimeExports.jsx(Dropdown, {
        content: jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [jsxRuntimeExports.jsxs(Popover.Item, {
            as: "a",
            href: supportLink,
            target: "_blank",
            children: [jsxRuntimeExports.jsx(Name$1, {
              children: i("helpCenter.support.name")
            }), jsxRuntimeExports.jsx(Description$3, {
              children: i("helpCenter.support.description")
            })]
          }), jsxRuntimeExports.jsxs(Popover.Item, {
            as: "a",
            href: contactSupportLink,
            target: "_blank",
            children: [jsxRuntimeExports.jsx(Name$1, {
              children: i("helpCenter.contactSupport.name")
            }), jsxRuntimeExports.jsx(Description$3, {
              children: i("helpCenter.contactSupport.description")
            })]
          }), jsxRuntimeExports.jsxs(Popover.Item, {
            onClick: () => useShareModal.open(),
            children: [jsxRuntimeExports.jsx(Name$1, {
              children: i("helpCenter.shareYourIdeas.name")
            }), jsxRuntimeExports.jsx(Description$3, {
              children: i("helpCenter.shareYourIdeas.description")
            })]
          }), jsxRuntimeExports.jsxs(Popover.Item, {
            as: "a",
            href: customerSuccessWebinarsLink,
            target: "_blank",
            children: [jsxRuntimeExports.jsx(Name$1, {
              children: i("helpCenter.customerSuccessWebinars.name")
            }), jsxRuntimeExports.jsx(Description$3, {
              children: i("helpCenter.customerSuccessWebinars.description")
            })]
          })]
        }),
        children: jsxRuntimeExports.jsx(NewButton, {
          buttonType: "icon",
          size: "400",
          icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
            icon: faQuestionCircle
          })
        })
      })
    },
    Dropdown = ut(Popover)`
  ${Popover.Item} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: auto;
    min-height: 32px;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 0;
  }
`,
    Name$1 = ut.span`
  ${cssBody100Bold};
`,
    Description$3 = ut.span`
  ${cssBody100};
`,
    Search = () => jsxRuntimeExports.jsx(NewButton, {
      size: "400",
      buttonType: "icon",
      icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
        icon: faSearch
      }),
      onClick: toggleSearchBar
    }),
    Avatar = ({
                width: e,
                height: t,
                margin: r,
                src: s
              }) => {
      const {
        userInfo: i
      } = useUserInfo(), [n, a] = reactExports.useState(!1), [l, o] = reactExports.useState(!1), p = s || (i == null ? void 0 : i.avatar);
      return jsxRuntimeExports.jsxs(Wrapper$l, {
        $width: e,
        $height: t,
        $margin: r,
        children: [!n && !l && jsxRuntimeExports.jsx(StyledSkeleton, {}), jsxRuntimeExports.jsx(AvatarImage, {
          src: !p || l ? defaultAvatarLink : domain + p,
          onLoad: () => a(!0),
          onError: () => o(!0)
        })]
      })
    },
    Wrapper$l = ut.div`
  margin: ${e=>e.$margin?e.$margin:0};
  height: ${e=>e.$height?e.$height:e.theme.spacing.sp32};
  width: ${e=>e.$width?e.$width:e.theme.spacing.sp32};
  border-radius: 100px;
  overflow: hidden;
`,
    StyledSkeleton = ut(Skeleton)`
  width: 100%;
  height: 100%;
`,
    AvatarImage = ut.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,
    AccountsList = () => {
      const {
        allAccounts: e,
        accountId: t
      } = useUserInfo(), {
        onAccountChange: r
      } = useCallbacksStore(n => n.callbacks), s = reactExports.useMemo(() => e.map(n => ({
        ...n,
        active: t === n.accountId,
        href: replaceAccountId(n.accountId)
      })), [t, e]), i = reactExports.useCallback((n, a) => {
        n.preventDefault(), ApiSegmentMenu.send({
          name: SEGMENT_EVENT_ACCOUNT_SWITCHER_CLICKED,
          properties: {
            action: "switchAccounts"
          }
        }, () => {
          r == null || r(a)
        })
      }, [r]);
      return jsxRuntimeExports.jsx(Wrapper$k, {
        children: s.map(n => jsxRuntimeExports.jsxs(Account, {
          $active: n.active,
          onClick: a => i(a, n.accountId),
          children: [jsxRuntimeExports.jsx(Avatar, {
            width: "36px",
            height: "36px"
          }), jsxRuntimeExports.jsxs(AccountInfo, {
            children: [jsxRuntimeExports.jsx(AccountName, {
              children: n.accountName
            }), jsxRuntimeExports.jsx(AccountId, {
              children: n.accountId
            })]
          })]
        }, n.accountId))
      })
    },
    Wrapper$k = ut.div`
  max-height: 300px;
  margin-top: 7px;
  overflow-y: auto;

  ${scrollStylesCSS};
`,
    Account = ut.a`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 0 12px;
  border-left: 4px solid transparent;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  height: 52px;

  &:hover {
    background-color: ${({theme:e})=>e.systemColors.grey100};
  }

  ${({$active:e})=>e&&at`
    cursor: default;
    background - color: $ {
        ({
            theme: t
        }) => t.systemColors.grey200
    };

    &
    : hover {
        background - color: $ {
            ({
                theme: t
            }) => t.systemColors.grey200
        };
    }
    `}
`,
    AccountInfo = ut(Ellipsis)`
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    margin-left: ${({theme:e})=>e.spacing.sp16};
  }
`;
var ApiAccounts;
(function(e) {
  const t = membersLink + "/api/v1/site/logout",
      r = domain + "/user/signout";
  e.signOut = s => {
    if (s) return csrfFetch({
      url: t,
      method: "POST",
      logoutToken: s,
      params: {
        token: s
      },
      withCredentials: !0
    });
    const i = getCsrf();
    if (i) return csrfFetch({
      url: r,
      method: "POST",
      params: {
        [i.key]: i.value
      },
      withCredentials: !0
    })
  }
})(ApiAccounts || (ApiAccounts = {}));
const icons$1 = {
      settings: jsxRuntimeExports.jsx(FontAwesomeIcon, {
        fixedWidth: !0,
        icon: faCog
      }),
      plans_billing: jsxRuntimeExports.jsx(FontAwesomeIcon, {
        fixedWidth: !0,
        icon: faReceipt
      }),
      access_management: jsxRuntimeExports.jsx(FontAwesomeIcon, {
        fixedWidth: !0,
        icon: faUserFriends
      }),
      connections: jsxRuntimeExports.jsx(FontAwesomeIcon, {
        fixedWidth: !0,
        icon: faNetworkWired
      }),
      notification_settings: jsxRuntimeExports.jsx(FontAwesomeIcon, {
        fixedWidth: !0,
        icon: faEnvelopeOpenText
      }),
      affiliates: jsxRuntimeExports.jsx(FontAwesomeIcon, {
        fixedWidth: !0,
        icon: faSackDollar
      }),
      admin_panel: jsxRuntimeExports.jsx(FontAwesomeIcon, {
        fixedWidth: !0,
        icon: faFileLines
      }),
      logout: jsxRuntimeExports.jsx(FontAwesomeIcon, {
        fixedWidth: !0,
        icon: faSignOut
      })
    },
    MenuList = () => {
      const {
        t: e
      } = useTranslation(), {
        updateLink: t
      } = useLink(), {
        dropdownMenu: r
      } = useUserInfo(), s = useAccountStore(accountIdSelector), i = useCallbacksStore(l => l.callbacks), n = (l, o) => {
        var g, S, u;
        l.preventDefault();
        const p = (g = useCallbacksStore.getState().callbacks) == null ? void 0 : g.logoutToken;
        i.onLogout ? (S = i.onLogout) == null || S.call(i, s) : (u = ApiAccounts.signOut(p)) == null || u.finally(() => {
          window.location.replace(o)
        })
      }, a = l => {
        var S;
        const o = l == null ? void 0 : l.target,
            p = (S = o == null ? void 0 : o.dataset) == null ? void 0 : S.key;
        (o == null ? void 0 : o.getAttribute("target")) === "_blank" && ApiSegmentMenu.send({
          name: SEGMENT_EVENT_ACCOUNT_MENU_LINK_CLICKED,
          properties: {
            key: camelCase(p)
          }
        })
      };
      return jsxRuntimeExports.jsx(Wrapper$j, {
        children: r.map(l => {
          const o = (l == null ? void 0 : l.id) === "logout",
              p = t(l.url);
          return jsxRuntimeExports.jsx(reactExports.Fragment, {
            children: o ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [jsxRuntimeExports.jsxs(Mobile, {
                children: [jsxRuntimeExports.jsx(Divider$3, {}), jsxRuntimeExports.jsxs(Action$1, {
                  href: t(contactSupportLink),
                  target: "_blank",
                  children: [jsxRuntimeExports.jsx(IconWrapper$1, {
                    children: jsxRuntimeExports.jsx(FontAwesomeIcon, {
                      fixedWidth: !0,
                      icon: faQuestionCircle
                    })
                  }), e("account.help")]
                }), jsxRuntimeExports.jsxs(Action$1, {
                  href: t(contactSupportLink),
                  target: "_blank",
                  children: [jsxRuntimeExports.jsx(IconWrapper$1, {
                    children: jsxRuntimeExports.jsx(FontAwesomeIcon, {
                      fixedWidth: !0,
                      icon: faLightbulb
                    })
                  }), e("account.requestFeature")]
                }), jsxRuntimeExports.jsxs(Action$1, {
                  href: customerSuccessWebinarsLink,
                  target: "_blank",
                  children: [jsxRuntimeExports.jsx(IconWrapper$1, {
                    children: jsxRuntimeExports.jsx(FontAwesomeIcon, {
                      fixedWidth: !0,
                      icon: faBookReader
                    })
                  }), e("account.learnWithUs")]
                })]
              }), jsxRuntimeExports.jsx(Divider$3, {}), jsxRuntimeExports.jsxs(Action$1, {
                href: p,
                title: l.title,
                target: l.target,
                onClick: g => n(g, p),
                children: [jsxRuntimeExports.jsx(IconWrapper$1, {
                  children: icons$1[l.id]
                }), l.name]
              })]
            }) : jsxRuntimeExports.jsxs(Action$1, {
              href: p,
              title: l.title,
              target: l.target,
              "data-key": l.id,
              onClick: a,
              children: [jsxRuntimeExports.jsx(IconWrapper$1, {
                children: icons$1[l.id]
              }), l.name]
            })
          }, l.id)
        })
      })
    },
    Wrapper$j = ut.div``,
    Divider$3 = ut.div`
  margin: 7px 0;
  border-top: 1px solid ${({theme:e})=>e.systemColors.grey200};
`,
    IconWrapper$1 = ut.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-right: 16px;
  color: ${({theme:e})=>e.systemColors.grey600};
`,
    Action$1 = ut.a`
  ${cssBody400};
  height: 40px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 12px;
  cursor: pointer;

  &:first-child {
    margin: 7px 0 0;
  }

  &:hover {
    background-color: ${({theme:e})=>e.systemColors.grey100};
    text-decoration: none;
  }
`,
    Mobile = ut.div`
  ${media.mobile} {
    display: none;
  }
`,
    UserDropdown = () => {
      const {
        t: e
      } = useTranslation(), {
        userInfo: t,
        numberOfAccounts: r
      } = useUserInfo(), [s, i] = reactExports.useState(!1), n = reactExports.useCallback(() => {
        i(a => (ApiSegmentMenu.send({
          name: SEGMENT_EVENT_ACCOUNT_SWITCHER_CLICKED,
          properties: {
            action: a ? "cancel" : "openDropdown"
          }
        }), !a))
      }, [i]);
      return jsxRuntimeExports.jsxs(Wrapper$i, {
        children: [jsxRuntimeExports.jsxs(UserInfo, {
          children: [jsxRuntimeExports.jsx(Avatar, {
            width: "64px",
            height: "64px",
            margin: "4px 0 14px"
          }), jsxRuntimeExports.jsx(AccountName, {
            $isOnProfileDropdown: !0,
            children: t == null ? void 0 : t.fullName
          }), jsxRuntimeExports.jsx(AccountEmail, {
            children: t == null ? void 0 : t.email
          }), r > 1 && jsxRuntimeExports.jsx(SwitchAccount, {
            buttonType: "text",
            onClick: n,
            children: e(s ? "common.cancel" : "account.switchAccounts")
          })]
        }), s ? jsxRuntimeExports.jsx(AccountsList, {}) : jsxRuntimeExports.jsx(MenuList, {})]
      })
    },
    Wrapper$i = ut.div`
  min-width: 250px;
  max-width: 300px;
`,
    UserInfo = ut.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.systemColors.grey200};
`,
    SwitchAccount = ut(NewButton)`
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  min-height: 24px;
  margin: 10px 0 0;
  padding: 0;
  color: ${({theme:e})=>e.systemColors.blue600};
`,
    AccountEmail = ut.div`
  ${cssBody400};
  color: ${({theme:e})=>e.systemColors.grey600};
`,
    UserMenu = () => {
      const [e, t] = reactExports.useState(!1), {
        lastAccounts: r,
        userInfo: s
      } = useUserInfo(), i = useHeaderStore(l => l.isStickyHeader), n = useHeaderStore(l => l.hasMinimizedContent), a = reactExports.useCallback(() => {
        t(!e)
      }, [e]);
      return jsxRuntimeExports.jsx(Container$5, {
        children: jsxRuntimeExports.jsx(Popover, {
          open: e,
          content: jsxRuntimeExports.jsx(UserDropdown, {}),
          onOpenChange: a,
          hideOnClick: !1,
          children: jsxRuntimeExports.jsxs(UserButton, {
            open: e,
            onClick: a,
            children: [jsxRuntimeExports.jsx(Avatar, {}), !(i && n) && jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [r.length >= 1 && jsxRuntimeExports.jsx(CurrentAccount, {
                children: s == null ? void 0 : s.accountName
              }), jsxRuntimeExports.jsx(CaretIcon, {})]
            })]
          })
        })
      })
    },
    CaretIcon = ut(FontAwesomeIcon).attrs({
      icon: faAngleDown
    })`
  color: ${({theme:e})=>e.systemColors.grey600};
  font-size: 19px;
  margin-left: 8px;
  transition: all 0.4s ease;

  ${media.laptopBefore} {
    display: none;
  }
`,
    Container$5 = ut.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
`,
    UserButton = ut.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  margin-left: 16px;

  ${CaretIcon} {
    transform: ${({open:e})=>e&&"rotate(180deg)"};
  }
`,
    CurrentAccount = ut(AccountName)`
  margin-left: 4px;

  ${media.laptopBefore} {
    display: none;
  }
`,
    WeChatQRCode = "https://re-cdn.helium10.com/container/static/WeChatQRCode-67rJKzxI.svg",
    WeChatPanel = () => jsxRuntimeExports.jsxs(Wrapper$h, {
      children: [jsxRuntimeExports.jsx(Text$1, {
        children: "关注我们，"
      }), jsxRuntimeExports.jsx(Text$1, {
        children: "获取最新资讯和客服支持"
      }), jsxRuntimeExports.jsx(QrCode, {
        src: WeChatQRCode
      })]
    }),
    Wrapper$h = ut.div`
  ${cssBody400};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  position: relative;
  font-size: 13px;
  height: 190px;
  width: 200px;
  padding: 0;
  top: 10px;
`,
    Text$1 = ut.p`
  margin: 0;
`,
    QrCode = ut.img`
  margin-top: 15px;
`,
    WeChat = ({
                isInitialOpen: e,
                accountId: t,
                counter: r
              }) => {
      const [s, i] = reactExports.useState(e), n = reactExports.useRef(null);
      reactExports.useEffect(() => {
        i(e)
      }, [e]), reactExports.useEffect(() => {
        s && sendSegmentEvent({
          name: SEGMENT_EVENT_WECHAT_POPOVER
        })
      }, [s]), reactExports.useEffect(() => {
        localStorage.setItem(WECHAT_COUNTER + t, String(r ? r + 1 : 1))
      }, []);
      const a = () => i(!s);
      return useClickOutside({
        isActive: s,
        ref: n,
        handler: () => i(!1)
      }), jsxRuntimeExports.jsx(Popover, {
        open: s,
        placement: "bottom",
        content: jsxRuntimeExports.jsx(WeChatPanel, {}),
        children: jsxRuntimeExports.jsx(Container$4, {
          children: jsxRuntimeExports.jsx(NewButton, {
            size: "400",
            buttonType: "icon",
            icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
              icon: faWeixin
            }),
            onClick: a
          })
        })
      })
    },
    Container$4 = ut.div`
  position: relative;
`,
    WhatsNewBeamer = ({
                        isHidden: e
                      }) => {
      const {
        t
      } = useTranslation();
      return jsxRuntimeExports.jsx(Container$3, {
        className: "beamerTrigger",
        $isHidden: e,
        children: t("menu.whatsNew")
      })
    },
    Container$3 = ut.div`
  display: none;
  position: relative !important;

  .beamer_icon,
  .beamer_icon.active {
    position: relative !important;
    margin-left: 5px !important;
  }

  ${media.desktop} {
    align-items: center;
    white-space: nowrap;
    position: relative;
    text-decoration: none;
    transition: color 250ms cubic-bezier(0.25, 0.1, 0.25, 1);
    line-height: 1.5;
    font-weight: 700;
    font-size: 16px;
    color: #343a40;
    cursor: pointer;
    height: 100%;

    &:hover {
      color: #0a6fe8;
    }
  }

  ${e=>e.$isHidden&&at`
      position: absolute;
      top: -9999px;
      width: 0;
    `};
`,
    HEADER_MINIMIZED_CONTENT_ID = "header-minimized",
    HeaderMinimizedContent = () => {
      const e = useHeaderStore(t => t.isStickyHeader);
      return jsxRuntimeExports.jsx(Element, {
        $isStickyHeader: e,
        id: HEADER_MINIMIZED_CONTENT_ID
      })
    },
    Element = ut.div`
  width: ${({$isStickyHeader:e})=>e?"auto":"0"};
  padding: ${({$isStickyHeader:e})=>`
    0 $ {
        e ? "4px" : "0"
    }
    0 0`};
  opacity: ${({$isStickyHeader:e})=>e?1:0};
  overflow: ${({$isStickyHeader:e})=>e?"visible":"hidden"};
  transition: all 0.3s ease;
`;
var ApiLanguage;
(function(e) {
  const t = domain + "/api/v1/customers/set-language";
  e.update = async r => {
    var i;
    const s = await csrfFetch({
      url: t,
      method: "POST",
      params: r,
      withCredentials: !0
    });
    return ((i = s == null ? void 0 : s.results) == null ? void 0 : i.language) || ""
  }
})(ApiLanguage || (ApiLanguage = {}));
const useLanguageStore = create(() => ({
      language: ""
    })),
    useLanguageController = leitenRequest(useLanguageStore, "language", ApiLanguage.update, {
      fulfilled: () => {
        var e, t;
        (t = (e = window == null ? void 0 : window.location) == null ? void 0 : e.reload) == null || t.call(e)
      }
    }),
    useGetDisabledStatus = () => useLanguageController(e => e.status !== "init"),
    localeLanguages = {
      en: "en-US",
      de: "de-DE",
      es: "es-ES",
      it: "it-IT",
      zh: "zh-CN"
    },
    LanguageSwitcher = () => {
      const {
        language: e,
        getAvailableLanguages: t,
        t: r
      } = useTranslation(), s = t(), i = useGetDisabledStatus(), n = reactExports.useMemo(() => ({
        label: e == null ? void 0 : e.toUpperCase(),
        value: e
      }), [e]), a = reactExports.useMemo(() => s.map(o => ({
        label: r(`account.localisation.languagesWithCode.${o}`),
        value: o
      })), [s, r]), l = reactExports.useCallback(o => {
        const p = (o == null ? void 0 : o.value) || "en";
        p !== e && useLanguageController.action({
          language: localeLanguages[p]
        })
      }, [e]);
      return jsxRuntimeExports.jsx(StyledSelect, {
        appendTo: document.body,
        dropdownAutoWidth: !0,
        value: n,
        options: a,
        disabled: i,
        dropdownPlacement: "bottom-end",
        onChange: l
      })
    },
    StyledSelect = ut(BaseSingleSelect)`
  margin-left: ${({theme:e})=>e.spacing.sp8};
  cursor: pointer;

  & > div {
    &[data-open="false"] {
      svg {
        transform: rotate(0deg);
        transition: all 0.4s ease;
      }
    }

    &[data-open="true"] {
      svg {
        transform: rotate(180deg);
        transition: all 0.4s ease;
      }
    }
  }
`,
    PlanButton = () => {
      const {
        t: e
      } = useTranslation(), {
        plan: t
      } = useUserInfo(), {
        updatedLink: r
      } = useLink(subscribeLink);
      return t != null && t.isFree ? jsxRuntimeExports.jsx(UpgradeButtonLink, {
        as: "a",
        href: r,
        children: jsxRuntimeExports.jsx(UpgradeButton, {
          size: "100",
          buttonType: "primary",
          "data-testid": "upgradeButton",
          children: e("common.upgrade")
        })
      }) : jsxRuntimeExports.jsx(EliteButtonLink, {
        href: eliteLink,
        target: "_blank",
        children: jsxRuntimeExports.jsx(EliteButton, {
          size: "100",
          buttonType: "secondary",
          icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
            size: "sm",
            icon: faCrown
          }),
          children: "Elite"
        })
      })
    },
    UpgradeButtonLink = ut.a`
  text-decoration: none;

  ${NewButton} {
    ${cssBody200Bold};
    padding: 0 ${({theme:e})=>e.spacing.sp8};
    margin-left: ${({theme:e})=>e.spacing.sp8};
    color: ${({theme:e})=>e.systemColors.white};
  }
`,
    UpgradeButton = ut(NewButton)`
  font-weight: 700;
  font-size: ${({theme:e})=>e.fontSize.small};
  line-height: ${({theme:e})=>e.spacing.sp16};
  color: ${({theme:e})=>e.systemColors.white};

  ${media.desktopBefore} {
    display: none;
  }
`,
    EliteButtonLink = ut.a`
  text-decoration: none;

  ${NewButton} {
    ${cssBody200Bold};
    padding: 0 ${({theme:e})=>e.spacing.sp8};
    margin-left: ${({theme:e})=>e.spacing.sp8};
    color: ${({theme:e})=>e.systemColors.blue600};
  }
`,
    EliteButton = ut(NewButton)`
  font-weight: 700;
  font-size: ${({theme:e})=>e.fontSize.small};
  color: ${({theme:e})=>e.systemColors.blue600};
  line-height: ${({theme:e})=>e.spacing.sp16};

  ${media.desktopBefore} {
    display: none;
  }
`,
    HeaderRight = () => {
      const e = useMedia(mediaShort.laptop),
          t = useMenuStatus(),
          r = usePpcStore(ppcEnabledSelector),
          {
            plan: s,
            weChat: i
          } = useUserInfo(),
          n = i ? jsxRuntimeExports.jsx(WeChat, {
            ...i
          }) : jsxRuntimeExports.jsx(FacebookLink, {}),
          a = useHeaderStore(o => o.isStickyHeader),
          l = useHeaderStore(o => o.hasMinimizedContent);
      return t ? jsxRuntimeExports.jsxs(Wrapper$g, {
        onClick: () => useOpenMegaMenuController.set(!1),
        children: [jsxRuntimeExports.jsx(HeaderMinimizedContent, {}), jsxRuntimeExports.jsx(WhatsNewBeamer, {
          isHidden: a && l
        }), !(a && l) && jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [r && jsxRuntimeExports.jsx(PpcSelect, {}), s && (s == null ? void 0 : s.isFree) && jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [jsxRuntimeExports.jsx(Search, {}), jsxRuntimeExports.jsx(Action, {
              $visibleOn: "desktop",
              children: jsxRuntimeExports.jsx(HelpCenter, {})
            })]
          }), jsxRuntimeExports.jsx(Action, {
            $visibleOn: "laptop",
            children: n
          }), jsxRuntimeExports.jsx(Action, {
            $visibleOn: "desktop",
            children: jsxRuntimeExports.jsx(Divider$4, {})
          })]
        }), s && !(s != null && s.isFree) && jsxRuntimeExports.jsx(ChatAI, {}), jsxRuntimeExports.jsx(Bell, {}), !(a && l) && jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [jsxRuntimeExports.jsx(LanguageSwitcher, {}), jsxRuntimeExports.jsx(Action, {
            $visibleOn: "desktop",
            children: ((s == null ? void 0 : s.isElite) || (s == null ? void 0 : s.isFree)) && jsxRuntimeExports.jsx(PlanButton, {})
          })]
        }), jsxRuntimeExports.jsx(UserMenu, {})]
      }) : jsxRuntimeExports.jsx(Wrapper$g, {
        children: jsxRuntimeExports.jsxs(Preloader, {
          children: [e && jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [jsxRuntimeExports.jsx(SquareSkeleton, {}), jsxRuntimeExports.jsx(SquareSkeleton, {})]
          }), jsxRuntimeExports.jsx(SquareSkeleton, {}), jsxRuntimeExports.jsx(CircleSkeleton, {})]
        })
      })
    },
    Action = ut.div`
  display: none;

  ${e=>at`
    ${media[e.$visibleOn]} {
      display: block;
    }
  `}
`,
    Wrapper$g = ut.div`
  display: flex;
  align-items: center;
  opacity: 1;
`,
    SquareSkeleton = ut(Skeleton)`
  height: 24px;
  border-radius: 6px;
  width: 24px;

  & + & {
    margin-left: 16px;
  }
`,
    CircleSkeleton = ut(Skeleton)`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  margin-left: 24px;
`,
    Preloader = ut.div`
  display: flex;
  align-items: center;
`,
    LogoLink = () => {
      const {
        updatedLink: e
      } = useLink(domain), t = useHeaderStore(r => r.isStickyHeader);
      return jsxRuntimeExports.jsx(Logo$1, {
        href: e,
        $isStickyHeader: t,
        children: jsxRuntimeExports.jsx(SmallLogo, {
          $isStickyHeader: t
        })
      })
    },
    SmallLogo = ut(LogoIcon)`
  width: ${({$isStickyHeader:e})=>e?"20px":"24px"};
  height: auto;
  transition: all 0.3s;
`,
    Logo$1 = ut.a`
  height: 100%;
  display: flex;
  align-items: center;
  margin: ${({$isStickyHeader:e})=>`
    0 $ {
        e ? "22px" : "38px"
    }
    0 4 px`};
  transition: margin-right 0.3s;
`,
    RefreshLanguage = () => {
      const {
        t: e,
        language: t,
        cookieLanguage: r
      } = useTranslation(), [s] = useLanguageModal();
      reactExports.useEffect(() => {
        t !== r && setTimeout(() => useLanguageModal.open(), 3e3)
      }, [t, r]);
      const i = reactExports.useCallback(() => {
        var n, a;
        (a = (n = window == null ? void 0 : window.location) == null ? void 0 : n.reload) == null || a.call(n)
      }, []);
      return jsxRuntimeExports.jsxs(Modal, {
        isOpen: s,
        size: "50",
        hideCloseButton: !0,
        onClose: useLanguageModal.close,
        children: [jsxRuntimeExports.jsx(Image$2, {}), jsxRuntimeExports.jsx(Title$8, {
          children: e("menuLanguageSwitcher.title", {
            language: e(`account.localisation.languagesWithCode.${r}`)
          })
        }), jsxRuntimeExports.jsxs(Actions, {
          children: [jsxRuntimeExports.jsx(NewButton, {
            buttonType: "tertiary",
            size: "200",
            onClick: () => useLanguageModal.close(),
            children: e("menuLanguageSwitcher.buttonNotReload")
          }), jsxRuntimeExports.jsx(NewButton, {
            size: "200",
            onClick: i,
            children: e("menuLanguageSwitcher.buttonReload")
          })]
        })]
      })
    },
    Modal = ut(DialogModal)`
  ${DialogModal.Children} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,
    Image$2 = ut(FontAwesomeIcon).attrs({
      icon: faInfoCircle
    })`
  width: 88px;
  height: 88px;
  color: #c9dae1;
  user-select: none;
  margin: 0 auto ${({theme:e})=>e.spacing.sp20};
`,
    Title$8 = ut.div`
  display: flex;
  text-align: center;
  justify-content: center;
  color: ${({theme:e})=>e.systemColors.black};
  font-size: 14px;
`,
    Actions = ut.div`
  display: flex;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing.sp12};
  margin: ${({theme:e})=>`
    $ {
        e.spacing.sp24
    }
    0 0`};
`,
    PaymentBanner = ({
                       onHeightMeasured: e
                     }) => {
      const {
        t
      } = useTranslation(), r = reactExports.useRef(null), s = useMenuStore(hasSidenavSelector), i = useHeaderStore(p => p.isStickyHeader), [n, a, l] = usePaymentDataStore(p => {
        var g, S, u;
        return [(g = p.paymentInfo) == null ? void 0 : g.payment.card, (S = p.paymentInfo) == null ? void 0 : S.payment.pastDueAt, (u = p.paymentInfo) == null ? void 0 : u.payment.invoiceUrl]
      }, shallow$1), o = a && formatDate(new Date(a), "standardShort");
      return reactExports.useEffect(() => {
        if (r.current) {
          const p = r.current.getBoundingClientRect().height;
          e(p)
        }
      }, [e, r]), jsxRuntimeExports.jsxs(Wrapper$f, {
        $hasOffset: s,
        $isStickyHeader: i,
        ref: r,
        id: "incompletePaymentBanner",
        children: [jsxRuntimeExports.jsxs(Title$7, {
          children: [jsxRuntimeExports.jsx(ExclamationIcon, {
            icon: faCircleExclamation
          }), jsxRuntimeExports.jsx(TitleText, {
            children: t("paymentBanner.attention")
          })]
        }), jsxRuntimeExports.jsx(Body, {
          children: n && !a ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [jsxRuntimeExports.jsx(Message$1, {
              $withCard: n,
              dangerouslySetInnerHTML: {
                __html: `${t("paymentBanner.message.common")} ${t("paymentBanner.message.savedCard")}`
              }
            }), jsxRuntimeExports.jsxs(BodyRow, {
              children: [jsxRuntimeExports.jsxs(PaymentMethod, {
                children: [jsxRuntimeExports.jsx(MethodText, {
                  children: t("paymentBanner.paymentMethod")
                }), n.wallet === "apple_pay" ? jsxRuntimeExports.jsx(BrandIconWrapper, {
                  children: jsxRuntimeExports.jsx(BrandCardIcon, {
                    icon: faApplePay
                  })
                }) : n.wallet === "google_pay" ? jsxRuntimeExports.jsx(BrandIconWrapper, {
                  children: jsxRuntimeExports.jsx(BrandCardIcon, {
                    icon: faGooglePay
                  })
                }) : jsxRuntimeExports.jsx(CardIcon, {
                  icon: faCreditCard
                }), jsxRuntimeExports.jsx(EndingText, {
                  children: `${t("paymentBanner.ending")} ${n.last4}`
                })]
              }), l && jsxRuntimeExports.jsx(NewButton, {
                as: "a",
                $buttonType: "primary",
                $size: "100",
                href: l,
                children: t("paymentBanner.buttons.updateCard")
              })]
            })]
          }) : jsxRuntimeExports.jsxs(BodyRow, {
            children: [jsxRuntimeExports.jsx(Message$1, {
              dangerouslySetInnerHTML: {
                __html: o ? `${t("paymentBanner.message.enterprise",{date:o})}` : `${t("paymentBanner.message.common")}`
              }
            }), l && jsxRuntimeExports.jsx(NewButton, {
              as: "a",
              $buttonType: "primary",
              $size: "100",
              href: l,
              children: t(a ? "paymentBanner.buttons.processPayment" : "paymentBanner.buttons.completePayment")
            })]
          })
        })]
      })
    },
    Wrapper$f = ut.div`
  position: fixed;
  left: 0;
  top: ${e=>e.$isStickyHeader?stickyHeaderHeight:fixedHeaderHeight}px;
  right: 0;
  padding: ${e=>e.theme.spacing.sp24};
  background-color: ${e=>e.theme.dataVisualizationColors.yellow100};
  transition: all 0.3s;
  z-index: 4;

  ${media.desktop} {
    margin-left: ${e=>e.$hasOffset?"68px":"0"};
  }
`,
    Title$7 = ut.div`
  display: flex;
  align-items: center;
`,
    ExclamationIcon = ut(FontAwesomeIcon)`
  margin-right: ${e=>e.theme.spacing.sp8};
  color: ${e=>e.theme.dataVisualizationColors.tomato600};
`,
    TitleText = ut.span`
  ${cssBody400Bold};
  color: ${e=>e.theme.dataVisualizationColors.tomato600};
`,
    Body = ut.div`
  margin-top: ${e=>e.theme.spacing.sp8};
`,
    BodyRow = ut.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${e=>e.theme.spacing.sp24};
`,
    Message$1 = ut.div`
  ${cssBody400};
  color: ${e=>e.$withCard?e.theme.systemColors.grey800:e.theme.systemColors.black};
  ${e=>e.$withCard&&at`
      padding-top: ${t=>t.theme.spacing.sp8};
      margin-bottom: ${t=>t.theme.spacing.sp16};
    `}
`,
    PaymentMethod = ut.div`
  display: flex;
  align-items: center;
  gap: ${e=>e.theme.spacing.sp8};
`,
    MethodText = ut.span`
  ${cssBody400Bold};
  color: ${e=>e.theme.systemColors.grey800};
`,
    CardIcon = ut(FontAwesomeIcon)`
  color: ${e=>e.theme.systemColors.grey800};
`,
    BrandIconWrapper = ut.span`
  display: inline-flex;
  padding: 0 4px;
  color: ${e=>e.theme.systemColors.grey800};
  background-color: ${e=>e.theme.systemColors.white};
  border: 1px solid ${e=>e.theme.systemColors.grey800};
  border-radius: 2px;
`,
    BrandCardIcon = ut(FontAwesomeIcon)`
  height: 20px;
  color: ${e=>e.theme.systemColors.grey800};
`,
    EndingText = ut.span`
  ${cssBody400};
  color: ${e=>e.theme.systemColors.grey800};
`,
    Header = () => {
      const e = reactExports.useRef(null),
          t = useMenuStore(megaMenuOpenSelector),
          r = useHeaderStore(l => l.isStickyHeader),
          s = usePaymentDataStore(l => {
            var o;
            return (o = l.paymentInfo) == null ? void 0 : o.payment.isIncomplete
          }),
          [i, n] = reactExports.useState(0),
          a = l => {
            n(l)
          };
      return reactExports.useEffect(() => {
        paymentDataController.action()
      }, []), reactExports.useEffect(() => {
        s || n(0)
      }, [s]), jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsx(FictitiousHeader, {
          $isStickyHeader: r,
          $bannerHeight: i,
          ref: e
        }), jsxRuntimeExports.jsxs(HeaderWrapper, {
          $menuOpen: t,
          children: [jsxRuntimeExports.jsxs(MainHeader, {
            children: [jsxRuntimeExports.jsxs(LeftHeaderWrapper, {
              $isStickyHeader: r,
              children: [jsxRuntimeExports.jsx(LogoLink, {}), jsxRuntimeExports.jsx(HeaderLeft, {})]
            }), jsxRuntimeExports.jsx(HeaderRight, {})]
          }), jsxRuntimeExports.jsx(HeaderDropdown, {})]
        }), jsxRuntimeExports.jsx(ShareYourIdeas, {}), jsxRuntimeExports.jsx(RefreshLanguage, {}), s && jsxRuntimeExports.jsx(PaymentBanner, {
          onHeightMeasured: a
        })]
      })
    },
    FictitiousHeader = ut.div`
  height: ${e=>e.$isStickyHeader?stickyHeaderHeight+e.$bannerHeight:fixedHeaderHeight+e.$bannerHeight}px;
  transition: all 0.3s;
`,
    HeaderWrapper = ut.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 960;
  box-shadow: ${({$menuOpen:e})=>e?"none":"0px 1px 4px rgba(103, 132, 162, 0.16), 0px 4px 16px -8px rgba(103, 132, 162, 0.32)"};
`,
    MainHeader = ut.header`
  position: relative;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  padding: 0 16px;

  ${media.desktop} {
    padding: 0 24px 0 18px;
  }
`,
    LeftHeaderWrapper = ut.div`
  display: flex;
  height: ${({$isStickyHeader:e})=>e?stickyHeaderHeight:fixedHeaderHeight}px;
  transition: all 0.3s;

  ${media.desktopBefore} {
    flex-direction: row-reverse;
    gap: 16px;
  }
`,
    icons = {
      cog: faGear,
      "mail-bulk": faEnvelopesBulk,
      "chart-line": faGauge,
      "draw-circle": faDrawCircle,
      icon_dashboard: faGauge,
      icon_product_performance: faGaugeSimpleMax,
      icon_inventory_levels: faBoxesStacked,
      icon_expenses: faCreditCard,
      icon_returns: faArrowsRetweet,
      icon_heat_map: faMap,
      icon_orders: faFileInvoiceDollar,
      icon_financial_events: faReceipt,
      "icon_inventory-management": faClipboardCheck,
      icon_restock_suggestions: faCube,
      icon_suppliers: faIndustryWindows,
      icon_local_warehouse: faWarehouse,
      icon_purchase_orders: faListUl,
      icon_inbound_shipments: faTruckFast,
      icon_settings: faGear,
      icon_training: faCirclePlay,
      "chart-pie": faGauge,
      "shopping-cart": faChartMixed,
      "barcode-alt": faCube,
      "file-times": faBan,
      users: faCircle,
      start: faCircle,
      image: faCircle,
      "chart-bar": faCircle,
      "exclamation-triangle": faCircle,
      "envelope-open-text": faCircle,
      "svg-executive-dashboard": faGrid2,
      "svg-dashboard": faGauge,
      "svg-analytics": faChartSimple,
      "svg-grid": faTableCellsLarge,
      "svg-suggestions": faListCheck,
      "svg-changelog": faClockRotateLeft,
      "svg-products": faCube,
      "svg-schedules": faCalendar,
      "svg-settings": faGear,
      "svg-rules": faWandMagicSparkles,
      "svg-training": faQuestionCircle,
      window: faWindow,
      qrcode: faQrcode,
      barcode: faRectangleBarcode,
      insert: faBoxBallot,
      "pencil-ruler": faPenRuler,
      columns: faTableColumns,
      customer: faBookUser,
      globe: faGlobe,
      url: faLink,
      idash_dashboard: faGrid2,
      idash_my_products: faTableColumns,
      idash_insights: faSparkles,
      idash_competitors: faSwords,
      idash_selected_asins: faListCheck,
      idash_insights_settings: faGear,
      idash_customer_intelligence: faUserGraduate,
      idash_product_ideas: faLightbulb,
      idash_dashboard_template: faChartLine,
      idash_add_dashboard_template: faAdd
    },
    MenuIcon = ({
                  isLock: e,
                  highlight: t,
                  icon: r,
                  className: s,
                  faIcon: i
                }) => jsxRuntimeExports.jsx(StyledFontAwesomeIcon, {
      icon: i || icons[r],
      $isLock: e,
      $highlight: t,
      className: s
    }),
    StyledFontAwesomeIcon = ut(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  color: ${e=>e.$highlight?e.theme.systemColors.white:e.theme.systemColors.grey600};

  ${e=>e.$isLock&&at`
      color: ${e.theme.systemColors.grey300};
    `};
`,
    _MenuTool = ({
                   item: e,
                   onClick: t,
                   highlight: r,
                   faIcon: s
                 }) => {
      const {
        t: i
      } = useTranslation();
      return jsxRuntimeExports.jsxs(Wrapper$e, {
        $isLock: e == null ? void 0 : e.isLock,
        $highlight: r,
        $isNotEmpty: e.isNotEmpty,
        className: e == null ? void 0 : e.className,
        onClick: t,
        children: [jsxRuntimeExports.jsxs(IconWrapper, {
          children: [jsxRuntimeExports.jsx(MenuIcon, {
            isLock: e == null ? void 0 : e.isLock,
            highlight: r,
            icon: e.icon,
            faIcon: s
          }), e.iconCounter && e.iconCounter > 0 ? jsxRuntimeExports.jsx(Badge, {
            $highlight: r,
            $isMore: e.iconCounter > 99,
            children: e.iconCounter > 99 ? "99+" : e.iconCounter
          }) : null, e.showCountIndicator && jsxRuntimeExports.jsx(CountIndicator, {
            $highlight: r
          })]
        }), jsxRuntimeExports.jsxs(InfoWrapper, {
          children: [jsxRuntimeExports.jsx(Name, {
            dangerouslySetInnerHTML: {
              __html: e.name
            }
          }), jsxRuntimeExports.jsxs(Info, {
            children: [e.isBeta && jsxRuntimeExports.jsx(Label, {
              type: "beta",
              children: i("megamenuLabels.beta")
            }), e.isNew && jsxRuntimeExports.jsx(Label, {
              type: "new",
              children: i("megamenuLabels.new")
            }), e.isComingSoon && jsxRuntimeExports.jsx(Label, {
              type: "new",
              icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
                icon: faSparkles
              }),
              children: i("megamenuLabels.comingSoon")
            })]
          }), (e == null ? void 0 : e.isLock) && jsxRuntimeExports.jsx(Tooltip, {
            disabled: !e.lockMessage,
            delay: 0,
            maxWidth: 300,
            zIndex: 999999999,
            colorType: "light",
            content: e.lockMessage,
            appendTo: document.body,
            children: jsxRuntimeExports.jsx(Lock, {
              $isClickable: !!e.onLockClick,
              onClick: e.onLockClick,
              children: jsxRuntimeExports.jsx(LockedBadge, {
                type: r ? "primary" : "tertiary"
              })
            })
          }), e.customNode && !(e != null && e.isLock) && jsxRuntimeExports.jsx(CustomNode, {
            children: e.customNode
          })]
        })]
      })
    },
    CustomNode = ut.div`
  margin: ${({theme:e})=>`
    0 $ {
        e.spacing.sp16
    }
    0 $ {
        e.spacing.sp8
    }
    `};
  width: fit-content;
`,
    CountIndicator = ut.div`
  position: absolute;
  left: 30px;
  top: 10px;
  width: 10px;
  height: 10px;
  background: #f65781;
  border: 2px solid
    ${({theme:e,$highlight:t})=>t?e.systemColors.blue600:e.systemColors.grey100};
  border-radius: 90px;
`,
    IconWrapper = ut.div`
  height: ${menuToolHeight}px;
  width: 52px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 8px;

  ${({$highlight:e,theme:t})=>e&&at`
    background - color: $ {
        t.systemColors.blue600
    };
    `}
`,
    InfoWrapper = ut.div`
  height: ${menuToolHeight}px;
  max-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`,
    Wrapper$e = ut.div`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: ${e=>e.$isLock?"default":"pointer"};
  user-select: none;
  position: relative;
  transition:
    color 0.2s ease,
    background-color 0.2s ease;
  border-radius: 6px;

  &:hover {
    background-color: ${({theme:e})=>e.systemColors.grey200};
    ${({$isNotEmpty:e})=>!e&&at`
    $ {
        CustomNode
    } {
        $ {
            CategoricalChip.CategoricalBaseChip
        } {
            background: $ {
                ({
                    theme: t
                }) => t.systemColors.grey100
            };
        }
    }
    `}
  }

  ${e=>e.$highlight&&at`
      ${cssBody400Bold};
      background-color: ${e.theme.systemColors.blue600};
      color: ${e.theme.systemColors.grey100};

      ${()=>!e.$isNotEmpty&&at`
          ${CustomNode} {
            ${CategoricalChip.CategoricalBaseChip} {
              background: ${({theme:t})=>t.systemColors.grey100};
            }
          }
        `}
      &:hover {
        background-color: ${({theme:t})=>t.systemColors.blue600};
        ${()=>!e.$isNotEmpty&&at`
            ${CustomNode} {
              ${CategoricalChip.CategoricalBaseChip} {
                background: ${({theme:t})=>t.systemColors.grey100};
              }
            }
          `}
      }
    `}

  ${({$isLock:e,theme:t})=>e&&at`
    color: $ {
        t.systemColors.grey300
    };
    `}
`,
    Label = ut(StatusChip)`
  margin-left: 8px;
`,
    Info = ut.div`
  width: 0;
  position: relative;
  white-space: nowrap;
  flex-grow: 1;

  > * {
    flex: 0 0 auto;
  }
`,
    Name = ut.span`
  white-space: nowrap;
`,
    Lock = ut.span`
  margin-right: 16px;

  ${({$isClickable:e})=>e&&"cursor: pointer;"}
`,
    Badge = ut.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 6px;
  top: 4px;

  padding: 0 4px;
  font-weight: 700;
  font-size: 12px;
  border-radius: 16px;
  color: ${({theme:e,$highlight:t})=>t?e.systemColors.black:e.systemColors.white};
  background: ${({theme:e,$highlight:t})=>t?e.systemColors.white:e.systemColors.blue600};
  text-align: center;
  height: 16px;
  min-width: 16px;
`,
    MenuTool = Object.assign(_MenuTool, {
      Wrapper: Wrapper$e,
      InfoWrapper,
      IconWrapper,
      Name,
      Label
    }),
    AdditionalMenu = reactExports.memo(({
                                          localOpen: e
                                        }) => {
      const {
        title: t,
        bottomItems: r,
        topItems: s
      } = useMenuStore(additionalMenuSelector);
      return jsxRuntimeExports.jsxs(Wrapper$d, {
        children: [jsxRuntimeExports.jsx(Title$6, {
          children: t
        }), jsxRuntimeExports.jsxs(ItemsWrapper, {
          children: [jsxRuntimeExports.jsx(Top, {
            children: s.map(i => i.customElement ? jsxRuntimeExports.jsx(reactExports.Fragment, {
              children: i.customElement
            }, i.id) : reactExports.createElement(AddLink, {
              ...i,
              key: i.id,
              showCountIndicator: !e && i.isNotEmpty
            }))
          }), jsxRuntimeExports.jsx(Bottom, {
            children: r.map(i => i.customElement ? jsxRuntimeExports.jsx(reactExports.Fragment, {
              children: i.customElement
            }, i.id) : reactExports.createElement(AddLink, {
              ...i,
              key: i.id
            }))
          })]
        })]
      })
    }),
    Wrapper$d = ut.div`
  display: grid;
  height: 100%;
  grid-template-rows: auto 1fr;

  ${media.desktop} {
    grid-template-rows: 1fr auto;
  }

  grid-template-columns: minmax(0px, auto);
  width: auto;
`,
    Title$6 = ut.div`
  ${cssDisplay50Bold};
  padding-left: 40px;
  margin-top: 24px;
  margin-bottom: 8px;

  ${media.desktop} {
    display: none;
  }
`,
    ItemsWrapper = ut.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  ${media.desktopBefore} {
    padding: 0 24px 24px 24px;
  }
`,
    AddLink = reactExports.memo(e => {
      const t = useMedia(mediaShort.desktop),
          {
            onRouteChange: r
          } = useMenuStore(additionalMenuSelector),
          s = useActiveLink(e.highlight || e.link),
          i = reactExports.useCallback(n => {
            r && (n.preventDefault(), r == null || r(e.link), !e.isLock && !t && toggleMegaMenuOpen())
          }, [t, e, r]);
      return jsxRuntimeExports.jsx(Link$3, {
        href: e.link,
        onClick: i,
        children: jsxRuntimeExports.jsx(MenuTool, {
          item: e,
          highlight: s,
          faIcon: e.faIcon
        })
      })
    }),
    Link$3 = ut.a`
  ${cssBody400};
  display: flex;
  align-items: center;
  text-decoration: none;
  user-select: none;
`,
    Top = ut.div``,
    Bottom = ut.div`
  margin-top: auto;
`,
    Menu = () => {
      const [e, t] = reactExports.useState(!1), r = useMedia(mediaShort.desktop), s = useMenuStore(megaMenuOpenSelector), i = useMenuStore(a => a.additional.items.length > 0), n = useHeaderStore(a => a.isStickyHeader);
      return reactExports.useEffect(() => {
        e && s && toggleMegaMenuOpen()
      }, [e, s]), r && i ? jsxRuntimeExports.jsx(Wrapper$c, {
        $open: e,
        $isStickyHeader: n,
        onMouseEnter: () => t(!0),
        onMouseLeave: () => t(!1),
        children: jsxRuntimeExports.jsx(List, {
          $isStickyHeader: n,
          children: jsxRuntimeExports.jsx(AdditionalMenu, {
            localOpen: e
          })
        })
      }) : null
    },
    Wrapper$c = ut.div`
  position: fixed;
  left: 0;
  top: 0;
  color: ${({theme:e})=>e.systemColors.grey800};
  background: ${({theme:e})=>e.systemColors.grey100};
  height: 100vh;
  /* mobile viewport fix */
  height: -webkit-fill-available;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  transition:
    width 0.25s ease,
    transform 0.25s ease,
    padding-top 0.2s ease;
  padding-top: ${({$isStickyHeader:e})=>e?stickyHeaderHeight:fixedHeaderHeight}px;
  z-index: 5;

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  ${({$open:e,theme:t})=>e?at`
    width: 345 px;
    border - right: 1 px solid $ {
        t.systemColors.grey200
    };
    `:at`
    width: 68 px;
    `}
`,
    List = ut.nav`
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(
    100vh - ${({$isStickyHeader:e})=>e?stickyHeaderHeight:fixedHeaderHeight}px
  );
  height: 100%;
  padding: 16px 8px;
  transition: all 0.3s;

  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-thumb {
    background-color: transparent !important;
    border: 0 !important;
    width: 0 !important;
    border-radius: 0 !important;
  }

  &::-webkit-scrollbar-thumb {
    &:hover {
      background: transparent !important;
    }

    &:active {
      background: transparent !important;
    }
  }
`,
    appleStoreDownloadMobileAppLink = "https://apps.apple.com/us/app/helium-10-mobile/id1498663950?ls=1",
    googlePlayDownloadMobileAppLink = "https://play.google.com/store/apps/details?id=com.helium10",
    _MobileBanner = () => {
      const {
        t: e
      } = useTranslation(), [t, r] = reactExports.useState(!1), s = () => r(!1);
      return jsxRuntimeExports.jsxs(Wrapper$b, {
        children: [jsxRuntimeExports.jsxs(Description$2, {
          children: [jsxRuntimeExports.jsx(CheckOut, {
            children: e("menu.checkMobileApp")
          }), jsxRuntimeExports.jsx(LearnMore, {
            onClick: () => r(!0),
            children: e("menu.learnMore")
          })]
        }), jsxRuntimeExports.jsxs(Logos, {
          children: [jsxRuntimeExports.jsx(ExtendedLink, {
            href: appleStoreDownloadMobileAppLink,
            target: "_blank",
            rel: "noreferrer",
            children: jsxRuntimeExports.jsx(Image$1, {
              src: AppleStoreImage
            })
          }), jsxRuntimeExports.jsx(ExtendedLink, {
            href: googlePlayDownloadMobileAppLink,
            target: "_blank",
            rel: "noreferrer",
            children: jsxRuntimeExports.jsx(Image$1, {
              src: GooglePlayImage
            })
          })]
        }), jsxRuntimeExports.jsx(ModalMobileApp, {
          isOpen: t,
          onClose: s
        })]
      })
    },
    Wrapper$b = ut.div`
  width: 100%;
  padding-left: ${({theme:e})=>e.spacing.sp16};
`,
    Description$2 = ut.div`
  display: inline-flex;
  margin-bottom: ${({theme:e})=>e.spacing.sp12};
  gap: ${({theme:e})=>e.spacing.sp8};
`,
    CheckOut = ut.div`
  ${cssBody200};
`,
    LearnMore = ut.div`
  ${cssBody200Bold};
  color: ${({theme:e})=>e.systemColors.blue600};
  cursor: pointer;
`,
    Logos = ut.div`
  display: inline-flex;
  gap: 8px;
`,
    ExtendedLink = ut.a`
  text-decoration: none;
`,
    Image$1 = ut.img`
  height: 38px;
`,
    MobileBanner = Object.assign(_MobileBanner, {
      Wrapper: Wrapper$b
    }),
    RefersionLogoSVG = e => jsxRuntimeExports.jsxs("svg", {
      viewBox: "0 0 134 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ...e,
      children: [jsxRuntimeExports.jsx("path", {
        d: "M19.733 19.7564C18.4836 20.9399 16.9848 21.7846 15.3755 22.2608L12.9681 17.6882L12.2858 16.3943L11.6048 17.6882L9.20215 22.2514C8.42362 22.0177 7.65796 21.7006 6.92347 21.2766C6.15781 20.8349 5.47616 20.3038 4.86296 19.7171L7.60172 15.3775L8.38228 14.1412L6.92008 14.1975L1.83217 14.3946C1.45001 12.7654 1.44188 11.0474 1.84978 9.37826L10.8954 9.7312C12.5094 9.79352 13.9879 10.6464 14.8491 12.0128L19.733 19.7564ZM18.4748 1.27422C17.457 0.686894 16.3878 0.271632 15.301 -1.52588e-05L12.2865 5.72558L9.27668 0.011501C7.11522 0.560893 5.11298 1.69964 3.50645 3.34579L6.57587 8.21309L2.2753 8.04576L0.648442 7.98208C0.49802 8.42309 0.374701 8.86883 0.276453 9.31729C-0.0975687 11.0305 -0.0833396 12.7803 0.266289 14.4562C0.359795 14.9081 0.479725 15.3531 0.624726 15.7914L2.22584 15.7284L5.87661 15.5869L3.92045 18.6888L3.05654 20.0585C3.35874 20.4033 3.67924 20.7366 4.02277 21.0489C4.66443 21.6315 5.37182 22.1592 6.15374 22.6104C6.90246 23.0426 7.67896 23.3854 8.46834 23.6455C8.91012 23.7918 9.35732 23.9043 9.80587 23.9978L10.56 22.565L12.2865 19.287L14.019 22.5772L14.7691 24.0005C15.2217 23.9083 15.6669 23.7891 16.1066 23.6475C17.7389 23.1198 19.2662 22.2608 20.5692 21.0835C20.91 20.7759 21.2366 20.4514 21.5455 20.1026L20.6762 18.7247L18.3223 14.9934L24.1786 15.2224C24.7925 13.0038 24.7661 10.6979 24.1501 8.5518L17.6231 8.80583L21.0889 3.30921C20.3266 2.53626 19.4606 1.84326 18.4748 1.27422Z",
        fill: "#ffffff"
      }), jsxRuntimeExports.jsx("path", {
        d: "M90.775 8.25683C88.6135 7.47237 86.341 8.40247 85.725 10.5106V8.37876H82.0635V20.3529H85.725V14.3658C85.725 12.4047 87.1893 11.4441 88.854 11.8763L90.775 8.25683Z",
        fill: "#ffffff"
      }), jsxRuntimeExports.jsx("path", {
        d: "M49.7691 13.1201H55.0176C54.6591 11.8587 53.7966 11.228 52.4299 11.228C51.0145 11.228 50.1269 11.8587 49.7691 13.1201ZM49.8423 15.8027C50.2651 16.9198 51.2422 17.4786 52.7714 17.4786C53.7641 17.4786 54.5453 17.1758 55.1151 16.5689L58.0443 18.2211C56.8396 19.8659 55.0664 20.6876 52.7227 20.6876C50.6723 20.6876 49.0326 20.0894 47.8042 18.8917C46.5751 17.6947 45.9612 16.1854 45.9612 14.3652C45.9612 12.5612 46.5669 11.0566 47.7798 9.8515C48.992 8.64569 50.5504 8.04346 52.4543 8.04346C54.2282 8.04346 55.7046 8.64569 56.885 9.8515C58.0646 11.0566 58.6548 12.5612 58.6548 14.3652C58.6548 14.8766 58.606 15.3556 58.5084 15.8027H49.8423Z",
        fill: "#ffffff"
      }), jsxRuntimeExports.jsx("path", {
        d: "M66.9784 6.70268C65.4647 6.57532 64.7079 7.13352 64.7079 8.3793H66.9784V11.8274H64.7079V20.3534H61.0463V11.8274H59.4106V8.3793H61.0463C61.0463 4.88108 64.4572 2.05419 68.7509 3.3623L66.9784 6.70268Z",
        fill: "#ffffff"
      }), jsxRuntimeExports.jsx("path", {
        d: "M71.5597 13.1201H76.8082C76.4497 11.8587 75.5872 11.228 74.2205 11.228C72.8044 11.228 71.9174 11.8587 71.5597 13.1201ZM71.6328 15.8027C72.0557 16.9198 73.0327 17.4786 74.562 17.4786C75.5547 17.4786 76.3359 17.1758 76.9057 16.5689L79.8349 18.2211C78.6302 19.8659 76.8569 20.6876 74.5132 20.6876C72.4629 20.6876 70.8232 20.0894 69.5947 18.8917C68.3656 17.6947 67.7517 16.1854 67.7517 14.3652C67.7517 12.5612 68.3575 11.0566 69.5703 9.8515C70.7825 8.64569 72.3409 8.04346 74.2449 8.04346C76.0181 8.04346 77.4952 8.64569 78.6756 9.8515C79.8552 11.0566 80.4454 12.5612 80.4454 14.3652C80.4454 14.8766 80.3966 15.3556 80.299 15.8027H71.6328Z",
        fill: "#ffffff"
      }), jsxRuntimeExports.jsx("path", {
        d: "M94.6114 11.875C94.6114 12.1141 94.8188 12.3106 95.2335 12.4616C95.6488 12.6134 96.1495 12.7651 96.735 12.9169C97.3211 13.0686 97.9072 13.2637 98.4926 13.5035C99.0787 13.7426 99.5794 14.1383 99.9941 14.689C100.409 15.2397 100.617 15.9307 100.617 16.7599C100.617 18.0538 100.128 19.032 99.1519 19.6938C98.1755 20.3563 96.9708 20.6876 95.539 20.6876C92.967 20.6876 91.2181 19.7385 90.2905 17.8383L93.4643 16.0655C93.7895 17.0085 94.4807 17.4786 95.539 17.4786C96.4179 17.4786 96.8569 17.2314 96.8569 16.7362C96.8569 16.497 96.6496 16.2979 96.2349 16.1373C95.8196 15.9781 95.3195 15.8223 94.7334 15.6706C94.1473 15.5188 93.5612 15.3197 92.9758 15.0717C92.3903 14.8252 91.8896 14.437 91.4743 13.9106C91.0596 13.3836 90.8522 12.7373 90.8522 11.9705C90.8522 10.7254 91.3116 9.75937 92.2311 9.07314C93.1506 8.38691 94.2855 8.04346 95.6366 8.04346C96.6455 8.04346 97.565 8.26294 98.395 8.70191C99.2251 9.14089 99.8925 9.77563 100.397 10.6055L97.2723 12.2584C96.882 11.5559 96.3359 11.2043 95.6366 11.2043C94.9529 11.2043 94.6114 11.4279 94.6114 11.875Z",
        fill: "#ffffff"
      }), jsxRuntimeExports.jsx("path", {
        d: "M111.829 16.4015C112.365 16.9286 113.033 17.1921 113.83 17.1921C114.628 17.1921 115.295 16.9286 115.833 16.4015C116.369 15.8745 116.638 15.1964 116.638 14.3659C116.638 13.536 116.369 12.8572 115.833 12.3302C115.295 11.8032 114.628 11.5403 113.83 11.5403C113.033 11.5403 112.365 11.8032 111.829 12.3302C111.292 12.8572 111.023 13.536 111.023 14.3659C111.023 15.1964 111.292 15.8745 111.829 16.4015ZM118.42 18.8558C117.167 20.0779 115.637 20.6883 113.83 20.6883C112.024 20.6883 110.494 20.0779 109.241 18.8558C107.988 17.6344 107.362 16.138 107.362 14.3659C107.362 12.5937 107.988 11.0973 109.241 9.87589C110.494 8.65382 112.024 8.04346 113.83 8.04346C115.637 8.04346 117.167 8.65382 118.42 9.87589C119.673 11.0973 120.299 12.5937 120.299 14.3659C120.299 16.138 119.673 17.6344 118.42 18.8558Z",
        fill: "#ffffff"
      }), jsxRuntimeExports.jsx("mask", {
        maskUnits: "userSpaceOnUse",
        x: "121",
        y: "8",
        width: "13",
        height: "13",
        children: jsxRuntimeExports.jsx("path", {
          d: "M121.764 8.04346H133.481V20.3529H121.764V8.04346Z"
        })
      }), jsxRuntimeExports.jsx("g", {
        mask: "url(#mask1_80_313)",
        children: jsxRuntimeExports.jsx("path", {
          d: "M128.917 8.04338C130.218 8.04338 131.304 8.48235 132.175 9.36029C133.046 10.2389 133.482 11.4522 133.482 13.0008V20.3529H129.82V13.5271C129.82 12.8253 129.62 12.2861 129.222 11.9108C128.823 11.5362 128.314 11.3479 127.696 11.3479C126.996 11.3479 126.443 11.5558 126.036 11.9711C125.629 12.3864 125.426 13.0008 125.426 13.815V20.3529H121.764V8.37871H125.426V9.50391C126.158 8.53045 127.322 8.04338 128.917 8.04338Z",
          fill: "#ffffff"
        })
      }), jsxRuntimeExports.jsx("path", {
        d: "M104.067 8.47905C103.413 8.47905 102.796 8.35644 102.236 8.1207V20.3536H105.898V8.1207C105.337 8.35644 104.72 8.47905 104.067 8.47905Z",
        fill: "#ffffff"
      }), jsxRuntimeExports.jsx("path", {
        d: "M105.719 6.64807C105.259 7.09923 104.708 7.32481 104.066 7.32481C103.425 7.32481 102.874 7.09923 102.414 6.64807C101.954 6.19758 101.725 5.65699 101.725 5.02699C101.725 4.39766 101.954 3.85708 102.414 3.40591C102.874 2.95543 103.425 2.72984 104.066 2.72984C104.708 2.72984 105.259 2.95543 105.719 3.40591C106.178 3.85708 106.409 4.39766 106.409 5.02699C106.409 5.65699 106.178 6.19758 105.719 6.64807Z",
        fill: "#ffffff"
      }), jsxRuntimeExports.jsx("path", {
        d: "M35.0538 7.18209V11.4932H39.4126C39.9398 11.4932 40.3911 11.2859 40.7664 10.8707C41.1411 10.4554 41.3295 9.94463 41.3295 9.33766C41.3295 8.73069 41.1411 8.22059 40.7664 7.80465C40.3911 7.38938 39.9398 7.18209 39.4126 7.18209H35.0538ZM41.5206 20.3539L38.3543 14.8458H35.0538V20.3539H31.2214V3.58971H39.4126C41.0097 3.58971 42.3669 4.14858 43.4849 5.26633C44.6029 6.38409 45.1619 7.74165 45.1619 9.33766C45.1619 10.3592 44.878 11.3056 44.3115 12.1754C43.7444 13.0459 42.9977 13.7199 42.0721 14.1995L45.6409 20.3539H41.5206Z",
        fill: "#ffffff"
      })]
    }),
    Wrapper$a = ut.div`
  background-color: ${({theme:e})=>e.systemColors.blue900};
  border-radius: 8px;
  height: 100%;
  justify-content: start;
  padding: ${e=>e.$newMenu?`${e.theme.spacing.sp12} ${e.theme.spacing.sp16}`:e.theme.spacing.sp24};
  display: flex;
  ${({$theme:e})=>themeScheme[e]};
  position: relative;
`,
    Logo = ut.div`
  width: 134px;
`,
    Link$2 = ut(NewButton)`
  ${cssBody200Bold};
  color: ${({theme:e})=>e.systemColors.blue600};
  text-decoration: none;
  margin-top: ${({theme:e})=>e.spacing.sp16};

  svg {
    margin-left: 3px;
    font-size: 16px;
  }
`,
    RefersionLogo = ut(RefersionLogoSVG)`
  width: 134px;
`,
    themeScheme = {
      light: at`
    background-color: ${({theme:e})=>e.systemColors.blue50};
    color: ${({theme:e})=>e.systemColors.grey600};

    ${RefersionLogo} path {
      fill: #112e45;
    }
  `,
      dark: at`
    background-color: ${({theme:e})=>e.systemColors.blue900};
    color: ${({theme:e})=>e.systemColors.white};

    ${RefersionLogo} path {
      fill: #fff;
    }

    ${Link$2} path {
      fill: #fff;
    }

    ${Link$2} {
      color: #fff;
    }
  `
    },
    RefersionBannerNewMenu = () => {
      const {
        t: e
      } = useTranslation(), t = () => {
        sendSegmentEvent({
          name: SEGMENT_EVENT_REFERSION_CLICKED,
          properties: {
            source: "menuBanner"
          }
        }), setTimeout(() => {
          window.open(refersionLink, "_blank")
        }, 300)
      };
      return jsxRuntimeExports.jsxs(Container$2, {
        children: [jsxRuntimeExports.jsx(Tagline, {
          children: e("refersionBanner.tagline")
        }), jsxRuntimeExports.jsx(Wrapper$a, {
          $theme: "dark",
          $newMenu: !0,
          children: jsxRuntimeExports.jsxs(Content$1, {
            children: [jsxRuntimeExports.jsx(Logo, {
              children: jsxRuntimeExports.jsx(StyledRefersionLogo, {})
            }), jsxRuntimeExports.jsx(Description$1, {
              children: e("refersionBanner.description")
            })]
          })
        }), jsxRuntimeExports.jsx(StyledLink, {
          $buttonType: "text",
          onClick: t,
          rightIcon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
            icon: faExternalLink
          }),
          children: e("refersionBanner.link")
        })]
      })
    },
    Container$2 = ut.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${({theme:e})=>e.spacing.sp8};
`,
    Tagline = ut.div`
  ${cssBody200};
  margin-bottom: ${({theme:e})=>e.spacing.sp12};
`,
    Content$1 = ut.div`
  gap: 4px;
`,
    StyledRefersionLogo = ut(RefersionLogo)`
  width: 110px;
`,
    Description$1 = ut.div`
  ${cssBody100};
  color: ${({theme:e})=>e.systemColors.grey200};
  margin-top: ${({theme:e})=>e.spacing.sp4};
`,
    StyledLink = ut(Link$2)`
  margin-top: ${({theme:e})=>e.spacing.sp8};
  align-self: flex-start;
`,
    useBannerType = () => {
      const e = useExtendedMenuStore(hasPartnerSelector),
          {
            userInfo: t
          } = useUserInfo();
      if ((t == null ? void 0 : t.hasMobileApp) === !1) return "mobile";
      if (e) return "refersion"
    },
    Banner = () => {
      const e = useBannerType();
      return e ? {
        mobile: jsxRuntimeExports.jsx(MobileBannerWrapper, {
          children: jsxRuntimeExports.jsx(MobileBanner, {})
        }),
        refersion: jsxRuntimeExports.jsx(RefersionBannerWrapper, {
          children: jsxRuntimeExports.jsx(RefersionBannerNewMenu, {})
        })
      } [e] : null
    },
    MobileBannerWrapper = ut.div`
  ${MobileBanner.Wrapper} {
    ${media.largeDesktopBefore} {
      display: inline-flex;
      align-items: center;
      gap: ${({theme:e})=>e.spacing.sp16};
    }

    ${media.desktopBefore} {
      padding-left: ${({theme:e})=>e.spacing.sp32};
    }

    ${media.mobileBefore} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
`,
    RefersionBannerWrapper = ut.div`
  ${media.desktopBefore} {
    padding-left: ${({theme:e})=>e.spacing.sp24};
    padding-right: ${({theme:e})=>e.spacing.sp12};
  }
`;

function _objectWithoutProperties(e, t) {
  if (e == null) return {};
  var r = _objectWithoutPropertiesLoose(e, t),
      s, i;
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (i = 0; i < n.length; i++) s = n[i], !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (r[s] = e[s])
  }
  return r
}

function _objectWithoutPropertiesLoose(e, t) {
  if (e == null) return {};
  var r = {},
      s = Object.keys(e),
      i, n;
  for (n = 0; n < s.length; n++) i = s[n], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r
}

function _extends() {
  return _extends = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
    }
    return e
  }, _extends.apply(this, arguments)
}

function ownKeys(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    t && (s = s.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable
    })), r.push.apply(r, s)
  }
  return r
}

function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ownKeys(Object(r), !0).forEach(function(s) {
      _defineProperty(e, s, r[s])
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(s) {
      Object.defineProperty(e, s, Object.getOwnPropertyDescriptor(r, s))
    })
  }
  return e
}

function _defineProperty(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}
const defaultProps = {
      breakpointCols: void 0,
      className: void 0,
      columnClassName: void 0,
      children: void 0,
      columnAttrs: void 0,
      column: void 0
    },
    DEFAULT_COLUMNS = 2;class Masonry extends React__default.Component {
  constructor(t) {
    super(t), this.reCalculateColumnCount = this.reCalculateColumnCount.bind(this), this.reCalculateColumnCountDebounce = this.reCalculateColumnCountDebounce.bind(this);
    let r;
    this.props.breakpointCols && this.props.breakpointCols.default ? r = this.props.breakpointCols.default : r = parseInt(this.props.breakpointCols) || DEFAULT_COLUMNS, this.state = {
      columnCount: r
    }
  }
  componentDidMount() {
    this.reCalculateColumnCount(), window && window.addEventListener("resize", this.reCalculateColumnCountDebounce)
  }
  componentDidUpdate() {
    this.reCalculateColumnCount()
  }
  componentWillUnmount() {
    window && window.removeEventListener("resize", this.reCalculateColumnCountDebounce)
  }
  reCalculateColumnCountDebounce() {
    if (!window || !window.requestAnimationFrame) {
      this.reCalculateColumnCount();
      return
    }
    window.cancelAnimationFrame && window.cancelAnimationFrame(this._lastRecalculateAnimationFrame), this._lastRecalculateAnimationFrame = window.requestAnimationFrame(() => {
      this.reCalculateColumnCount()
    })
  }
  reCalculateColumnCount() {
    const t = window && window.innerWidth || 1 / 0;
    let r = this.props.breakpointCols;
    typeof r != "object" && (r = {
      default: parseInt(r) || DEFAULT_COLUMNS
    });
    let s = 1 / 0,
        i = r.default || DEFAULT_COLUMNS;
    for (let n in r) {
      const a = parseInt(n);
      a > 0 && t <= a && a < s && (s = a, i = r[n])
    }
    i = Math.max(1, parseInt(i) || 1), this.state.columnCount !== i && this.setState({
      columnCount: i
    })
  }
  itemsInColumns() {
    const t = this.state.columnCount,
        r = new Array(t),
        s = React__default.Children.toArray(this.props.children);
    for (let i = 0; i < s.length; i++) {
      const n = i % t;
      r[n] || (r[n] = []), r[n].push(s[i])
    }
    return r
  }
  renderColumns() {
    const {
      column: t,
      columnAttrs: r = {},
      columnClassName: s
    } = this.props, i = this.itemsInColumns(), n = `${100/i.length}%`;
    let a = s;
    a && typeof a != "string" && (this.logDeprecated('The property "columnClassName" requires a string'), typeof a > "u" && (a = "my-masonry-grid_column"));
    const l = _objectSpread(_objectSpread(_objectSpread({}, t), r), {}, {
      style: _objectSpread(_objectSpread({}, r.style), {}, {
        width: n
      }),
      className: a
    });
    return i.map((o, p) => React__default.createElement("div", _extends({}, l, {
      key: p
    }), o))
  }
  logDeprecated(t) {
    console.error("[Masonry]", t)
  }
  render() {
    const t = this.props,
        {
          children: r,
          breakpointCols: s,
          columnClassName: i,
          columnAttrs: n,
          column: a,
          className: l
        } = t,
        o = _objectWithoutProperties(t, ["children", "breakpointCols", "columnClassName", "columnAttrs", "column", "className"]);
    let p = l;
    return typeof l != "string" && (this.logDeprecated('The property "className" requires a string'), typeof l > "u" && (p = "my-masonry-grid")), React__default.createElement("div", _extends({}, o, {
      className: p
    }), this.renderColumns())
  }
}
Masonry.defaultProps = defaultProps;
const Columns = e => jsxRuntimeExports.jsx(Wrapper$9, {
      ...e,
      children: jsxRuntimeExports.jsx(Masonry, {
        breakpointCols: e.breakpoints,
        className: "h10-tools-grid",
        columnClassName: "h10-tools-grid_column",
        children: e.children
      })
    }),
    Wrapper$9 = ut.div`
  .h10-tools-grid {
    display: flex;

    ${media.desktop} {
      margin-left: -4px;
    }

    ${media.largeDesktop} {
      margin-left: -8px;
    }

    ${media.extraDesktop} {
      margin-left: -12px;
    }

    &_column {
      ${media.desktop} {
        padding-left: 4px;
      }

      ${media.largeDesktop} {
        padding-left: 8px;
      }

      ${media.extraDesktop} {
        padding-left: 12px;
      }
    }
  }
`,
    _ToolBlock = reactExports.memo(({
                                      item: e,
                                      ...t
                                    }) => {
      var p;
      const {
        labelsMap: r
      } = useLabelsMap(), {
        updatedLink: s
      } = useLink(e.link), n = useExtendedMenuStore(favoriteListSelector).includes(e.id), a = useExtendedMenuStore(g => {
        var S;
        return (S = g.menu) == null ? void 0 : S.isFavoritesLoading
      }), l = g => {
        g.preventDefault(), g.stopPropagation(), !a && (g.target.blur(), toggleFavorite(e))
      }, o = reactExports.useCallback(g => {
        var S;
        [0, 1].includes(g.button) && (g.preventDefault(), Promise.all([(S = e == null ? void 0 : e.onClick) == null ? void 0 : S.call(e)]).finally(() => {
          !e.isLock && window.open(s, g.button === 1 ? "_blank" : e.target || "_self")
        }))
      }, [e, s]);
      return jsxRuntimeExports.jsx(Wrapper$8, {
        $favorite: n,
        ...t,
        children: jsxRuntimeExports.jsxs(Link$1, {
          target: e.target,
          href: s,
          onClick: o,
          onAuxClick: o,
          children: [jsxRuntimeExports.jsxs(Title$5, {
            children: [jsxRuntimeExports.jsxs(TitleInnerRow, {
              children: [jsxRuntimeExports.jsx(TitleInner, {
                dangerouslySetInnerHTML: {
                  __html: e.name
                }
              }), (p = e.tags) == null ? void 0 : p.map(g => jsxRuntimeExports.jsx("span", {
                children: r[g] || jsxRuntimeExports.jsx(Label$1, {
                  children: g
                })
              }, g))]
            }), jsxRuntimeExports.jsxs(Icon$1, {
              onClick: l,
              children: [jsxRuntimeExports.jsx(Star, {}), jsxRuntimeExports.jsx(StarOutline, {})]
            })]
          }), jsxRuntimeExports.jsx(Description, {
            children: e.description
          })]
        })
      })
    }),
    Link$1 = ut.a`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  padding: 6px 18px 6px 25px;
  min-height: 56px;
  width: 100%;

  ${media.desktop} {
    padding: ${({theme:e})=>`
    6 px $ {
        e.spacing.sp8
    }
    `};
  }
`,
    titleCSS = at`
  display: flex;
  align-items: center;
  ${cssBody200Bold};
  min-height: 24px;
  color: ${({theme:e})=>e.systemColors.black};
`,
    Title$5 = ut.div`
  ${titleCSS}
  ${media.desktopBefore} {
    justify-content: space-between;
  }
`,
    TitleInnerRow = ut.span`
  display: flex;
  align-items: center;
`,
    TitleInner = ut.span``,
    descriptionCSS = at`
  ${cssBody200};
  color: ${({theme:e})=>e.systemColors.grey600};
`,
    Description = ut.div`
  ${descriptionCSS}
`,
    Icon$1 = ut.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: ${({theme:e})=>e.fontSize.middle};
  color: ${({theme:e})=>e.systemColors.grey600};

  ${media.desktopBefore} {
    position: absolute;
    right: ${({theme:e})=>e.spacing.sp20};
    top: 15px;
  }

  ${media.desktop} {
    font-size: ${({theme:e})=>e.fontSize.middle};
  }
`,
    Star = ut(FontAwesomeIcon).attrs({
      icon: faStar
    })`
  display: none;
`,
    StarOutline = ut(FontAwesomeIcon).attrs({
      icon: faStar$1
    })`
  display: none;
`,
    starStyles = at`
  ${({$favorite:e})=>e?at`
    $ {
        Icon$1
    } {
        color: $ {
            ({
                theme: t
            }) => t.systemColors.blue600
        };
    }
    `:at`
    $ {
        StarOutline
    } {
        display: block;
    }
    `}
  ${Icon$1}:hover {
    ${StarOutline}, ${Star} {
      display: none;
    }

    ${Star} {
      display: ${({$favorite:e})=>e?"block":"none"};
    }

    ${StarOutline} {
      display: ${({$favorite:e})=>e?"none":"block"};
    }

    ${media.desktop} {
      ${Star} {
        display: ${({$favorite:e})=>e?"none":"block"};
      }

      ${StarOutline} {
        display: ${({$favorite:e})=>e?"block":"none"};
      }
    }
  }
`,
    Wrapper$8 = ut.div`
  width: 100%;
  display: flex;
  position: relative;
  user-select: none;
  border-radius: 6px;
  transition: background 200ms ease;

  ${media.laptop} {
    width: 50%;
    display: inline-flex;
  }

  ${media.desktop} {
    width: 100%;
    display: flex;
    margin-bottom: 2px;
  }

  ${({$favorite:e})=>e&&at`
    $ {
        starStyles
    }
    $ {
        Star
    } {
        display: block;
    }
    `}
  &:hover {
    ${starStyles}
    ${media.desktop} {
      background: ${({theme:e})=>e.systemColors.grey200};
    }
  }

  ${media.desktopBefore} {
    ${starStyles}
  }
`,
    ToolBlock = Object.assign(_ToolBlock, {
      Wrapper: Wrapper$8,
      Title: Title$5,
      Description,
      Icon: Icon$1,
      Star,
      StarOutline
    }),
    _Group = ({
                icon: e,
                title: t,
                items: r,
                placeholder: s,
                children: i,
                ...n
              }) => jsxRuntimeExports.jsxs(Wrapper$7, {
      ...n,
      children: [jsxRuntimeExports.jsxs(Title$4, {
        children: [e && e, t]
      }), i || (r != null && r.length ? r == null ? void 0 : r.map(a => jsxRuntimeExports.jsx(ToolBlock, {
        item: a
      }, a.id)) : s)]
    }),
    Wrapper$7 = ut.div`
  position: relative;
  margin-bottom: ${({theme:e})=>e.spacing.sp8};

  & + & {
    margin-top: ${({theme:e})=>e.spacing.sp32};
  }
`,
    Title$4 = ut.h3`
  display: inline-flex;
  align-items: center;
  position: relative;
  ${cssDisplay50Bold};
  width: 100%;
  padding-left: ${({theme:e})=>e.spacing.sp16};
  color: ${({theme:e})=>e.systemColors.black};
`,
    Group = Object.assign(_Group, {
      Wrapper: Wrapper$7,
      Title: Title$4
    }),
    _Collapse = reactExports.memo(({
                                     children: e,
                                     isOpen: t
                                   }) => {
      var s;
      const r = reactExports.useRef(null);
      return jsxRuntimeExports.jsx(Wrapper$6, {
        $open: t,
        ref: r,
        $height: ((s = r.current) == null ? void 0 : s.scrollHeight) || 0,
        children: e
      })
    }),
    Wrapper$6 = ut.div`
  height: ${e=>e.$open?e.$height?e.$height+"px":"auto":0};
  overflow: hidden;
  transition: height 0.3s ease;
`,
    Collapse = Object.assign(_Collapse, {
      Wrapper: Wrapper$6
    }),
    FAVORITES = "favorites",
    GroupMobile = ({
                     id: e,
                     title: t,
                     icon: r,
                     placeholder: s,
                     items: i
                   }) => {
      const n = e === FAVORITES,
          a = useMenuStore(o => o.mobileOpenGroup),
          l = a == null ? void 0 : a.includes(e);
      return jsxRuntimeExports.jsxs(Wrapper$5, {
        $isFavorite: n,
        $isOpen: l,
        children: [jsxRuntimeExports.jsxs(Title$3, {
          onClick: () => setMobileOpenGroup(e),
          children: [r && r, t, jsxRuntimeExports.jsx(ChevronRight, {})]
        }), jsxRuntimeExports.jsx(Collapse, {
          isOpen: l,
          children: i != null && i.length ? i == null ? void 0 : i.map(o => jsxRuntimeExports.jsx(ToolBlock, {
            item: o
          }, o.id)) : s
        }), !n && jsxRuntimeExports.jsx(Divider$2, {})]
      })
    },
    Wrapper$5 = ut.div`
  background: ${({theme:e})=>e.systemColors.white};
  padding: 0 ${({theme:e})=>e.spacing.sp20};

  ${e=>e.$isFavorite&&at`
      background: ${({theme:t})=>t.systemColors.grey100};
      border-radius: 6px;
      padding: 0;
    `}

  ${e=>e.$isOpen&&at`
      ${ChevronRight} {
        transform: rotate(-90deg);
      }
    `}
`,
    Title$3 = ut.h3`
  ${cssDisplay50Bold};
  flex-shrink: 0;
  user-select: none;
  min-height: 74px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 18px 0 24px;
`,
    ChevronRight = ut(FontAwesomeIcon).attrs({
      icon: faChevronRight
    })`
  display: block;
  position: absolute;
  right: 25px;
  font-size: ${({theme:e})=>e.fontSize.middle};
  margin-left: 5px;
  transform: rotate(90deg);
  transition:
    transform 0.2s ease,
    fill 0.2s ease;
  color: ${({theme:e})=>e.systemColors.grey600};
`,
    Divider$2 = ut.div`
  position: relative;
  height: 1px;
  background: ${({theme:e})=>e.systemColors.grey200};
`,
    icon = "https://re-cdn.helium10.com/container/static/not-found-favorites-23KUEI_h.svg",
    NoneAdded = () => {
      const {
        t: e
      } = useTranslation(), t = useMedia(mediaShort.desktop), r = e(t ? "megamenuNoneAdded.textDesktop" : "megamenuNoneAdded.textPhoneAndTablet"), s = useHeaderStore(i => i.isStickyHeader);
      return jsxRuntimeExports.jsxs(Wrapper$4, {
        $isStickyHeader: s,
        children: [jsxRuntimeExports.jsx(Icon, {}), jsxRuntimeExports.jsx(Title$2, {
          children: e("megamenuNoneAdded.title")
        }), jsxRuntimeExports.jsx(Text, {
          children: r
        })]
      })
    },
    Wrapper$4 = ut.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 200px;
  margin: 0 auto;
  padding: 0 10px;

  ${media.desktop} {
    padding: ${({theme:e})=>e.spacing.sp16} 0 0;
  }

  ${media.largeDesktop} {
    padding: ${({$isStickyHeader:e})=>`
    $ {
        e ? stickyHeaderHeight : fixedHeaderHeight
    }
    px 32 px`};
    transition: all 0.3s;
  }
`,
    Icon = ut.img.attrs({
      src: icon
    })`
  margin: 0 auto ${({theme:e})=>e.spacing.sp16};
`,
    Title$2 = ut.div`
  ${cssBody400Bold};
  margin-bottom: 4px;
  text-align: center;
  color: ${({theme:e})=>e.systemColors.black};
`,
    Text = ut.div`
  ${cssBody400};
  text-align: center;
  color: ${({theme:e})=>e.systemColors.grey600};
`,
    breakpointColumns$1 = {
      default: 1,
      [mediaSize.largeDesktop - 1]: 3
    },
    Favorites = () => {
      const {
        t: e
      } = useTranslation(), t = useExtendedMenuStore(favoriteItemsSelector), r = useMedia(mediaShort.desktopBefore), s = useMedia(mediaShort.largeDesktop), i = reactExports.useMemo(() => ({
        title: jsxRuntimeExports.jsx(Title$1, {
          children: e("megamenuFavorites.title")
        }),
        icon: jsxRuntimeExports.jsxs(Small, {
          children: [maxFavoriteLength - t.length, " ", e("megamenuFavorites.spotsLeft"), jsxRuntimeExports.jsx(Tooltip, {
            content: e("megamenuFavorites.maxItems"),
            children: jsxRuntimeExports.jsx("div", {
              children: jsxRuntimeExports.jsx(InfoIcon, {})
            })
          })]
        })
      }), [t.length, e]);
      return r ? t.length ? jsxRuntimeExports.jsx(GroupMobile, {
        id: FAVORITES,
        ...i,
        items: t
      }) : jsxRuntimeExports.jsx(NoneAdded, {}) : jsxRuntimeExports.jsxs(Wrapper$3, {
        children: [t.length ? jsxRuntimeExports.jsx(Group, {
          ...i,
          children: jsxRuntimeExports.jsx(Columns, {
            breakpoints: breakpointColumns$1,
            children: t.map(n => jsxRuntimeExports.jsx(ToolBlock, {
              item: n
            }, n.id))
          })
        }) : jsxRuntimeExports.jsx(NoneAdded, {}), s && jsxRuntimeExports.jsx(Banner, {})]
      })
    },
    Wrapper$3 = ut.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,
    Title$1 = ut.div`
  ${media.desktop} {
    padding-bottom: ${({theme:e})=>e.spacing.sp8};
  }
`,
    Small = ut.small`
  flex: 1;
  display: flex;
  ${cssBody200Bold};
  margin: 0 ${({theme:e})=>e.spacing.sp8};
  color: ${({theme:e})=>e.systemColors.grey600};
  order: 1;

  ${media.desktop} {
    justify-content: end;
    padding-bottom: ${({theme:e})=>e.spacing.sp8};
  }
`,
    InfoIcon = ut(FontAwesomeIcon).attrs({
      icon: faInfoCircle
    })`
  font-size: ${({theme:e})=>e.fontSize.middle};
  margin-left: ${({theme:e})=>e.spacing.sp8};
`,
    analytics = "data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='28'%20height='28'%20rx='6'%20fill='%23EEF1FE'/%3e%3cpath%20d='M21.3076%209.75H18.9873C18.7112%209.75%2018.4873%209.97386%2018.4873%2010.25V19.8562C18.4873%2020.1324%2018.7112%2020.3562%2018.9873%2020.3562H21.3076C21.5838%2020.3562%2021.8076%2020.1324%2021.8076%2019.8562V10.25C21.8076%209.97386%2021.5838%209.75%2021.3076%209.75Z'%20fill='%235773F2'/%3e%3cpath%20d='M16.5342%207.25H14.2529C13.9768%207.25%2013.7529%207.47386%2013.7529%207.75V19.8562C13.7529%2020.1324%2013.9768%2020.3562%2014.2529%2020.3562H16.5342C16.8103%2020.3562%2017.0342%2020.1324%2017.0342%2019.8562V7.75C17.0342%207.47386%2016.8103%207.25%2016.5342%207.25Z'%20fill='%235773F2'/%3e%3cpath%20d='M11.7812%2012.25H9.5C9.25%2012.25%209%2012.5%209%2012.75V19.8562C9%2020.1062%209.25%2020.3562%209.5%2020.3562H11.7812C12.0312%2020.3562%2012.2812%2020.1062%2012.2812%2019.8562V12.75C12.2812%2012.5%2012.0312%2012.25%2011.7812%2012.25Z'%20fill='%235773F2'/%3e%3cpath%20d='M24%2019.125V20.375C24%2020.5408%2023.9342%2020.6997%2023.8169%2020.8169C23.6997%2020.9342%2023.5408%2021%2023.375%2021H5.25C4.91848%2021%204.60054%2020.8683%204.36612%2020.6339C4.1317%2020.3995%204%2020.0815%204%2019.75V6.625C4%206.45924%204.06585%206.30027%204.18306%206.18306C4.30027%206.06585%204.45924%206%204.625%206H5.875C6.04076%206%206.19973%206.06585%206.31694%206.18306C6.43415%206.30027%206.5%206.45924%206.5%206.625V18.5H23.375C23.5408%2018.5%2023.6997%2018.5658%2023.8169%2018.6831C23.9342%2018.8003%2024%2018.9592%2024%2019.125Z'%20fill='%23ABB9F9'/%3e%3c/svg%3e",
    keywordResearch = "data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='28'%20height='28'%20rx='6'%20fill='%23EBFAFC'/%3e%3crect%20x='4'%20y='6'%20width='17'%20height='4'%20rx='0.75'%20fill='%2336C9E2'/%3e%3crect%20x='7'%20y='12'%20width='17'%20height='4'%20rx='0.75'%20fill='%239BE4F1'/%3e%3crect%20x='4'%20y='18'%20width='17'%20height='4'%20rx='0.75'%20fill='%2336C9E2'/%3e%3c/svg%3e",
    learning = "data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='28'%20height='28'%20rx='6'%20fill='%23FEEDEC'/%3e%3cpath%20d='M10.0007%209.78516V18.1423H12.6673V9.78516H15.334V18.1423H18.0007V9.78516H20.6673V18.1423H22.1673C22.2999%2018.1423%2022.4271%2018.1931%2022.5209%2018.2835C22.6146%2018.374%2022.6673%2018.4966%2022.6673%2018.6245V20.0709H5.33398V18.6245C5.33398%2018.4966%205.38666%2018.374%205.48043%2018.2835C5.5742%2018.1931%205.70138%2018.1423%205.83398%2018.1423H7.33398V9.78516H10.0007Z'%20fill='%23F64F45'/%3e%3cpath%20d='M23.7942%207.56017L14.1275%204.02444C14.0459%203.99185%2013.9541%203.99185%2013.8725%204.02444L4.20583%207.56017C4.14492%207.58449%204.09285%207.62567%204.05621%207.67853C4.01958%207.73138%204.00001%207.79352%204%207.85709V8.49995C4%208.5852%204.03512%208.66696%204.09763%208.72724C4.16014%208.78752%204.24493%208.82138%204.33333%208.82138H5.33333V9.30352C5.33333%209.4314%205.38601%209.55403%205.47978%209.64445C5.57355%209.73487%205.70073%209.78567%205.83333%209.78567H22.1667C22.2993%209.78567%2022.4265%209.73487%2022.5202%209.64445C22.614%209.55403%2022.6667%209.4314%2022.6667%209.30352V8.82138H23.6667C23.7551%208.82138%2023.8399%208.78752%2023.9024%208.72724C23.9649%208.66696%2024%208.5852%2024%208.49995V7.85709C24%207.79352%2023.9804%207.73138%2023.9438%207.67853C23.9071%207.62567%2023.8551%207.58449%2023.7942%207.56017ZM23%2020.0714H5C4.73478%2020.0714%204.48043%2020.173%204.29289%2020.3539C4.10536%2020.5347%204%2020.78%204%2021.0357V22.6786C4%2022.7638%204.03512%2022.8456%204.09763%2022.9059C4.16014%2022.9661%204.24493%2023%204.33333%2023H23.6667C23.7551%2023%2023.8399%2022.9661%2023.9024%2022.9059C23.9649%2022.8456%2024%2022.7638%2024%2022.6786V21.0357C24%2020.78%2023.8946%2020.5347%2023.7071%2020.3539C23.5196%2020.173%2023.2652%2020.0714%2023%2020.0714Z'%20fill='%23FBA7A2'/%3e%3c/svg%3e",
    listingOptimization = "data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='28'%20height='28'%20rx='6'%20fill='%23FBF2F9'/%3e%3cpath%20d='M6.02888%2010.0342L4.09883%2013.8943C4.03864%2014.0258%204.00506%2014.1678%204%2014.3123C4%2014.5609%204.09877%2014.7994%204.27458%2014.9752C4.4504%2015.151%204.68885%2015.2498%204.93749%2015.2498H8.58821C9.50383%2013.3979%2010.971%2010.4307%2011.6307%209.10417C11.6511%209.06863%2011.6698%209.03503%2011.6901%208.99988H7.70385C7.06558%208.99988%206.31598%209.46393%206.02888%2010.0342ZM12.7499%2019.4157V23.0704C12.7532%2023.3172%2012.8534%2023.5529%2013.0287%2023.7266C13.204%2023.9004%2013.4405%2023.9985%2013.6874%2023.9997C13.8309%2023.9941%2013.972%2023.9606%2014.1026%2023.9008L17.9588%2021.9716C18.5303%2021.686%2018.9939%2020.9364%2018.9939%2020.2974V16.3318L19.0013%2016.3267V16.3064L18.8974%2016.3658C17.5693%2017.0298%2014.5979%2018.5017%2012.7514%2019.4157H12.7499Z'%20fill='%23EABFDF'/%3e%3cpath%20d='M23.7323%204.76249C23.7047%204.64327%2023.6441%204.5342%2023.5575%204.44773C23.4709%204.36127%2023.3618%204.30087%2023.2425%204.27343C21.9773%204%2020.9672%204%2019.9949%204C16.5129%204%2013.8751%205.5867%2011.695%208.9929L11.6313%209.10422C10.8657%2010.6444%209.00639%2014.4053%208.1939%2016.0526C8.07823%2016.2867%208.03901%2016.5513%208.08176%2016.8089C8.12452%2017.0665%208.24708%2017.3042%208.43218%2017.4885L10.5278%2019.5744C10.7121%2019.758%2010.9493%2019.8793%2011.206%2019.9214C11.4628%2019.9634%2011.7262%2019.924%2011.9595%2019.8088L12.5134%2019.5353C14.3297%2018.6338%2017.5152%2017.0584%2018.8957%2016.3658L19.0043%2016.3033C22.4121%2014.1135%2023.9995%2011.4788%2023.9995%208.01166C24.0019%207.0316%2024.0046%206.03474%2023.7323%204.76249ZM18.3746%2011.4999C18.0038%2011.4999%2017.6413%2011.3899%2017.3329%2011.1839C17.0246%2010.9779%2016.7843%2010.685%2016.6424%2010.3424C16.5004%209.99983%2016.4633%209.62284%2016.5357%209.25913C16.608%208.89542%2016.7866%208.56133%2017.0488%208.29911C17.311%208.03689%2017.6451%207.85832%2018.0088%207.78597C18.3725%207.71363%2018.7495%207.75076%2019.0921%207.89267C19.4347%208.03458%2019.7276%208.2749%2019.9336%208.58324C20.1396%208.89158%2020.2496%209.25408%2020.2496%209.62492C20.2496%2010.1222%2020.052%2010.5991%2019.7004%2010.9507C19.3488%2011.3024%2018.8719%2011.4999%2018.3746%2011.4999Z'%20fill='%23D57EBE'/%3e%3c/svg%3e",
    marketing = "data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='28'%20height='28'%20rx='6'%20fill='%23F0FBF5'/%3e%3cpath%20d='M13.4116%209.50002C15.012%209.294%2016.9447%209.05775%2018.9631%207.63673L22.0882%205.2461C22.2969%205.08659%2022.5562%204.9998%2022.8235%205C23.7396%205%2023.9999%205.80086%2023.9999%206.125V20.7501C23.9999%2021.0742%2023.7396%2021.8751%2022.8235%2021.8751C22.5562%2021.8753%2022.2969%2021.7885%2022.0882%2021.629L18.9631%2019.2383C16.9447%2017.8173%2015.012%2017.5811%2013.4116%2017.375V9.50002Z'%20fill='%23B4EBCC'/%3e%3cpath%20d='M4%2011.75V15.125C4%2015.7218%204.2479%2016.2941%204.68917%2016.716C5.13043%2017.138%205.72891%2017.375%206.35296%2017.375H7.59194C7.53934%2017.7479%207.51257%2018.1238%207.51179%2018.5C7.5114%2019.8515%207.83276%2021.1853%208.4515%2022.4003C8.64231%2022.7761%209.05886%2023.0001%209.49563%2023.0001H12.2265C13.1843%2023.0001%2013.7593%2021.951%2013.1787%2021.2225C12.5541%2020.4407%2012.2162%2019.4839%2012.2173%2018.5C12.2186%2018.1198%2012.2731%2017.7414%2012.3795%2017.375H13.4118V9.5H6.35296C5.72891%209.5%205.13043%209.73705%204.68917%2010.159C4.2479%2010.581%204%2011.1533%204%2011.75H4Z'%20fill='%2369D698'/%3e%3c/svg%3e",
    operations = "data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='28'%20height='28'%20rx='6'%20fill='%23FAF8E8'/%3e%3cpath%20d='M22.125%209.42857H19V7.71429C19%206.8%2018.125%206%2017.125%206H10.875C9.875%206%209%206.8%209%207.71429V9.42857H5.875C4.875%209.42857%204%2010.2286%204%2011.1429V16.84H24V11.1429C24%2010.2286%2023.125%209.42857%2022.125%209.42857ZM16.5%209.42857H11.5V8.28571H16.5V9.42857Z'%20fill='%23D1B517'/%3e%3cpath%20d='M16.5%2014H24V20.2857C24%2021.2%2023.125%2022%2022.125%2022H5.875C4.875%2022%204%2021.2%204%2020.2857V14H11.5V15.7143C11.5%2015.8658%2011.5658%2016.0112%2011.6831%2016.1183C11.8003%2016.2255%2011.9592%2016.2857%2012.125%2016.2857H15.875C16.0408%2016.2857%2016.1997%2016.2255%2016.3169%2016.1183C16.4342%2016.0112%2016.5%2015.8658%2016.5%2015.7143V14Z'%20fill='%23E8DA8B'/%3e%3c/svg%3e",
    productResearch = "data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='28'%20height='28'%20rx='6'%20fill='%23FEF3E9'/%3e%3cpath%20d='M17.7189%2012.0043L22%2010.7812V18.2812C21.9995%2018.5037%2021.9248%2018.7197%2021.7879%2018.8951C21.651%2019.0705%2021.4595%2019.1954%2021.2438%2019.2499L14.4815%2020.9405C14.1633%2021.0187%2013.831%2021.0187%2013.5128%2020.9405L6.75797%2019.2499C6.54155%2019.1964%206.34931%2019.0719%206.21199%2018.8963C6.07467%2018.7207%206.0002%2018.5041%206.00049%2018.2812V10.7812L10.2816%2012.0062C10.4165%2012.0462%2010.5565%2012.0662%2010.6972%2012.0656C10.9583%2012.0648%2011.2147%2011.9968%2011.4418%2011.8682C11.6689%2011.7396%2011.8591%2011.5547%2011.9941%2011.3312L14.0003%208L16.0096%2011.3312C16.1442%2011.554%2016.334%2011.7383%2016.5606%2011.8664C16.7872%2011.9945%2017.043%2012.062%2017.3033%2012.0625C17.4439%2012.0635%2017.584%2012.0439%2017.7189%2012.0043Z'%20fill='%23F78527'/%3e%3cpath%20d='M23.9478%2010.496L22.3384%207.28232C22.2911%207.18752%2022.2154%207.1098%2022.1219%207.05996C22.0284%207.01012%2021.9217%206.99063%2021.8166%207.0042L13.9999%208.00107L16.8655%2012.7542C16.9236%2012.8501%2017.0117%2012.9244%2017.1161%2012.9656C17.2205%2013.0068%2017.3355%2013.0127%2017.4436%2012.9823L23.6278%2011.2167C23.7589%2011.1789%2023.8697%2011.0906%2023.9357%2010.9712C24.0018%2010.8517%2024.0177%2010.711%2023.9799%2010.5798C23.972%2010.551%2023.9616%2010.523%2023.9487%2010.496H23.9478ZM5.6639%207.28232L4.05457%2010.496C4.02077%2010.563%204.00219%2010.6366%204.00018%2010.7116C3.99817%2010.7866%204.01277%2010.8611%204.04293%2010.9298C4.0731%2010.9985%204.11808%2011.0597%204.17465%2011.109C4.23123%2011.1582%204.298%2011.1944%204.37018%2011.2148L10.5544%2012.9804C10.6624%2013.0108%2010.7775%2013.005%2010.8819%2012.9638C10.9863%2012.9226%2011.0743%2012.8483%2011.1325%2012.7523L13.9999%208.00107L6.18263%207.00545C6.07818%206.9925%205.97227%207.01216%205.87941%207.06172C5.78655%207.11128%205.71128%207.18833%205.6639%207.28232Z'%20fill='%23FBC293'/%3e%3c/svg%3e",
    breakpointColumns = {
      default: 3,
      [mediaSize.desktop - 1]: 1
    },
    Tools = () => {
      const e = useExtendedMenuStore(expandableSelector),
          t = useExtendedMenuStore(sidebarSelector),
          r = useExtendedMenuStore(sidebarSunsetSelector),
          s = useMedia(mediaShort.desktop),
          i = useMedia(mediaShort.largeDesktopBefore),
          n = s ? Group : GroupMobile,
          a = s && e ? r : t,
          l = {
            productResearch: jsxRuntimeExports.jsx(ImageIcon, {
              src: productResearch
            }),
            listingOptimization: jsxRuntimeExports.jsx(ImageIcon, {
              src: listingOptimization
            }),
            analytics: jsxRuntimeExports.jsx(ImageIcon, {
              src: analytics
            }),
            keywordResearch: jsxRuntimeExports.jsx(ImageIcon, {
              src: keywordResearch
            }),
            learning: jsxRuntimeExports.jsx(ImageIcon, {
              src: learning
            }),
            operations: jsxRuntimeExports.jsx(ImageIcon, {
              src: operations
            }),
            marketing: jsxRuntimeExports.jsx(ImageIcon, {
              src: marketing
            })
          };
      return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsx(Columns, {
          breakpoints: breakpointColumns,
          children: a.filter(o => {
            var p;
            return (((p = o.tools) == null ? void 0 : p.length) || 0) > 0
          }).map(o => jsxRuntimeExports.jsx(Item, {
            children: jsxRuntimeExports.jsx(n, {
              id: o.id,
              title: o.name,
              icon: l[o.id],
              items: o.tools || []
            })
          }, o.id))
        }), jsxRuntimeExports.jsx(Divider$1, {}), i && jsxRuntimeExports.jsx(Banner, {})]
      })
    },
    Item = ut.div`
  ${media.desktop} {
    margin-bottom: 32px;
  }
`,
    ImageIcon = ut.img`
  margin-right: 8px;
  transform: translateY(-5%);
`,
    Divider$1 = ut.div`
  ${media.largeDesktopBefore} {
    height: 1px;
    margin-bottom: ${({theme:e})=>e.spacing.sp16};
    background-color: ${({theme:e})=>e.systemColors.grey200};
  }

  ${media.desktopBefore} {
    height: 0;
  }
`,
    MobileMenuSwitcher = reactExports.memo(() => {
      const e = useExtendedMenuStore(expandedSelector),
          t = useExtendedMenuStore(expandableSelector),
          {
            items: r,
            title: s
          } = useMenuStore(additionalMenuSelector),
          [i, n] = reactExports.useState(r.length === 0),
          a = useMedia(mediaShort.desktop),
          {
            t: l
          } = useTranslation();
      reactExports.useEffect(() => {
        n(!r.length)
      }, [r.length]);
      const o = () => n(p => !p);
      return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [r.length > 0 && !a && jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [jsxRuntimeExports.jsxs(Title, {
            onClick: o,
            children: [jsxRuntimeExports.jsx(ArrowIcon, {
              $open: i
            }), i ? `${l("menu.backTo")} ${s}` : l("menu.mainMenu")]
          }), jsxRuntimeExports.jsx(Divider, {})]
        }), i || a ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
          children: [jsxRuntimeExports.jsx(Sidebar, {
            children: jsxRuntimeExports.jsx(Favorites, {})
          }), jsxRuntimeExports.jsxs(Content, {
            children: [jsxRuntimeExports.jsx(Tools, {}), a && t && jsxRuntimeExports.jsx(Expand, {
              children: jsxRuntimeExports.jsx(NewButton, {
                buttonType: "secondary",
                icon: jsxRuntimeExports.jsx(FontAwesomeIcon, {
                  icon: e ? faAngleUp : faAngleDown
                }),
                onClick: toggleExpanded,
                children: l(e ? "menu.showLess" : "menu.showAllTools")
              })
            })]
          })]
        }) : jsxRuntimeExports.jsx(AdditionalMenu, {})]
      })
    }),
    Title = ut.div`
  ${cssDisplay50Bold};
  padding: 24px 40px;
`,
    contentStyles = at`
  ${media.desktop} {
    padding: 16px 8px;
  }
`,
    Sidebar = ut.div`
  ${contentStyles};
  border-radius: 6px;
  background: ${({theme:e})=>e.systemColors.grey100};

  ${media.desktopBefore} {
    margin: 20px 20px 10px;
  }
`,
    Content = ut.div`
  ${contentStyles}
`,
    Expand = ut.div`
  padding-left: 16px;
`,
    ArrowIcon = ut(FontAwesomeIcon).attrs({
      icon: faLongArrowDown
    })`
  color: ${({theme:e})=>e.systemColors.grey600};
  transition: all 0.3s ease;
  transform: ${e=>e.$open?"rotate(270deg)":"rotate(90deg)"};
  margin-right: 16px;
  font-size: 16px;
`,
    Divider = ut.div`
  height: 1px;
  margin-left: 16px;
  margin-right: 16px;
  background: ${({theme:e})=>e.systemColors.grey200};
`,
    animTimeout$1 = 200,
    Message = () => {
      const {
        text: e,
        open: t,
        type: r
      } = useMenuStore(n => n.message), s = useAction(() => hideMessageAction(), []), i = useHeaderStore(n => n.isStickyHeader);
      return jsxRuntimeExports.jsx(CSSTransition, {
        in: t,
        timeout: animTimeout$1,
        classNames: "fade",
        unmountOnExit: !0,
        mountOnEnter: !0,
        children: jsxRuntimeExports.jsx(Wrapper$2, {
          onClick: s,
          $isStickyHeader: i,
          children: jsxRuntimeExports.jsxs(Inner, {
            type: r,
            children: [jsxRuntimeExports.jsx(Times, {}), e]
          })
        })
      })
    },
    styles = {
      success: "#313a47",
      error: "#dc3545"
    },
    Inner = ut.div`
  position: relative;
  padding: ${({theme:e})=>e.spacing.sp16};
  padding-right: 32px;
  border-radius: 4px;

  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;

  cursor: pointer;

  ${({type:e})=>at`
    background - color: $ {
        styles[e]
    };
    `}
`,
    Wrapper$2 = ut.div`
  padding: 0 4px;
  position: absolute;
  top: ${({$isStickyHeader:e})=>e?stickyHeaderHeight+4:fixedHeaderHeight+4}px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 25000;
  width: 100%;
  max-width: 610px;
  transition: all 0.3s;

  &.fade-enter {
    opacity: 0;
    transform: translateX(-50%) scale(0.8);
  }

  &.fade-enter-active {
    opacity: 1;
    transition:
      opacity ${animTimeout$1}ms,
      transform ${animTimeout$1}ms;
    transform: translateX(-50%) scale(1);
  }

  &.fade-exit {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }

  &.fade-exit-active {
    opacity: 0;
    transition:
      opacity ${animTimeout$1}ms,
      transform ${animTimeout$1}ms;
    transform: translateX(-50%) scale(0.8);
  }
`,
    Times = ut(FontAwesomeIcon).attrs({
      icon: faTimes
    })`
  position: absolute;
  font-size: 10px;
  color: #fff;
  top: 18px;
  right: ${({theme:e})=>e.spacing.sp16};
`,
    animTimeout = 200,
    MenuContainer = reactExports.memo(() => {
      const e = useExtendedMenuController(r => r.status),
          t = useHeaderStore(r => r.isStickyHeader);
      return jsxRuntimeExports.jsxs(Container$1, {
        $isStickyHeader: t,
        children: [jsxRuntimeExports.jsx(Overlay, {
          onClick: toggleMegaMenuOpen
        }), jsxRuntimeExports.jsx(Cancel, {
          onClick: toggleMegaMenuOpen,
          $isStickyHeader: t,
          children: jsxRuntimeExports.jsx(FontAwesomeIcon, {
            size: "lg",
            icon: faTimes$1
          })
        }), jsxRuntimeExports.jsx(Wrapper$1, {
          $isStickyHeader: t,
          children: jsxRuntimeExports.jsx(StatusSwitcher, {
            status: e,
            children: jsxRuntimeExports.jsx(MobileMenuSwitcher, {})
          })
        }), jsxRuntimeExports.jsx(Message, {})]
      })
    }),
    MegaMenu = () => {
      const e = useMenuStore(megaMenuOpenSelector),
          t = useMedia(mediaShort.desktop);
      return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [!t && e ? jsxRuntimeExports.jsx(LockBodyStyles, {}) : null, jsxRuntimeExports.jsx(CSSTransition, {
          in: e,
          timeout: animTimeout,
          classNames: "fade",
          unmountOnExit: !0,
          mountOnEnter: !0,
          children: jsxRuntimeExports.jsx(MenuContainer, {})
        })]
      })
    },
    Cancel = ut(BurgerWrapper)`
  position: absolute;
  top: calc(
    (
        ${({$isStickyHeader:e})=>e?stickyHeaderHeight:fixedHeaderHeight}px -
          26px
      ) / 2
  );
  font-size: ${({theme:e})=>e.fontSize.middle};
  color: ${({theme:e})=>e.systemColors.grey600};
  left: ${({theme:e})=>e.spacing.sp16};
  transition: all 0.3s;
`,
    Wrapper$1 = ut.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  transform: ${animTimeout}ms ease;
  border-top: 1px solid #d9dfe8;
  min-height: 140px;
  border-radius: 0 0 6px 6px;
  background: ${({theme:e})=>e.systemColors.white};
  box-shadow:
    0 1px 4px rgba(103, 132, 162, 0.16),
    0 4px 16px -8px rgba(103, 132, 162, 0.32);

  ${media.desktopBefore} {
    position: fixed;
    overflow-y: scroll;
    overflow-x: hidden;
    top: ${({$isStickyHeader:e})=>e?stickyHeaderHeight:fixedHeaderHeight}px;
    bottom: 0;
    transition: all 0.3s;
  }

  ${media.desktop} {
    overflow: auto;
    max-width: calc(100vw - 110px);
    margin-left: 76px;
    padding: ${({theme:e})=>e.spacing.sp20};
  }

  ${media.largeDesktop} {
    display: grid;
    align-items: stretch;
    grid-template-columns: 300px 1fr;
    padding: ${({theme:e})=>e.spacing.sp20};

    ${media.extraDesktop} {
      grid-template-columns: 330px 1fr;
    }
  }

  ${media.extraDesktop} {
    margin: 0;
    padding: ${({theme:e})=>e.spacing.sp20};
    max-width: 1230px;
    left: 76px;
  }
`,
    Overlay = ut.div`
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${media.desktop} {
    opacity: 0.3;
    border-radius: 0 0 4px 4px;
    background: ${({theme:e})=>e.systemColors.grey400};
  }
`,
    Container$1 = ut.div`
  z-index: 970;
  position: fixed;
  width: 100%;
  top: 0;
  overflow-y: auto;
  overflow-x: hidden;
  left: 0;
  bottom: 0;
  padding-top: ${({$isStickyHeader:e})=>e?stickyHeaderHeight:fixedHeaderHeight}px;
  transition: all 0.3s;

  ${media.desktop} {
    z-index: 950;
  }

  &.fade-enter {
    opacity: 0;

    ${Wrapper$1} {
      transform: translateY(-10px);
    }
  }

  &.fade-enter-active {
    opacity: 1;
    transition:
      opacity ${animTimeout}ms,
      transform ${animTimeout}ms;

    ${Wrapper$1} {
      transform: translateY(0);
      transition: transform ${animTimeout}ms;
    }
  }

  &.fade-exit {
    opacity: 1;

    ${Wrapper$1} {
      transform: translateY(0);
    }
  }

  &.fade-exit-active {
    opacity: 0;
    transition:
      opacity ${animTimeout}ms,
      transform ${animTimeout}ms;

    ${Wrapper$1} {
      transform: translateY(-10px);
      transition: transform ${animTimeout}ms;
    }
  }
`,
    Container = reactExports.memo(({
                                     data: e,
                                     accountId: t,
                                     wait: r
                                   }) => {
      const s = useAccountStore(accountIdSelector),
          i = useExtendedMenuController(l => l.status),
          n = reactExports.useRef(null),
          a = useIntersection(n, {
            rootMargin: "-10px"
          });
      return reactExports.useEffect(() => {
        useStickyHeaderController.set(!(a != null && a.isIntersecting))
      }, [a == null ? void 0 : a.isIntersecting]), reactExports.useEffect(() => {
        !r && t !== null && t !== s && !Object.values(e || {}).includes(null) && useExtendedMenuController.action({
          accountId: t,
          isUpdate: i !== "init",
          data: e
        })
      }, [t, e]), jsxRuntimeExports.jsxs("div", {
        id: isolateStyleID,
        ref: n,
        children: [jsxRuntimeExports.jsx(Header, {}), jsxRuntimeExports.jsx(MegaMenu, {}), jsxRuntimeExports.jsx(AnnouncementModal, {}), jsxRuntimeExports.jsx(SearchBarContainer, {}), jsxRuntimeExports.jsx(Menu, {})]
      })
    }),
    Footer = () => {
      const {
        updateLink: e
      } = useLink(), {
        t
      } = useTranslation(), r = reactExports.useMemo(() => ({
        privacyPolicyLink: e(privacyPolicyLink),
        termsAndConditionsLink: e(termsAndConditionsLink),
        reviewsLink: e(reviewsLink),
        sitemapLink: e(sitemapLink)
      }), [e]);
      return jsxRuntimeExports.jsxs(Wrapper, {
        children: [jsxRuntimeExports.jsxs(Links, {
          children: [jsxRuntimeExports.jsx(ListItem, {
            children: jsxRuntimeExports.jsx(Link, {
              href: r.privacyPolicyLink,
              target: "_blank",
              children: t("layout.privacyPolicy")
            })
          }), jsxRuntimeExports.jsx(ListItem, {
            children: jsxRuntimeExports.jsx(Link, {
              href: r.termsAndConditionsLink,
              target: "_blank",
              children: t("layout.termsAndConditions")
            })
          }), jsxRuntimeExports.jsx(ListItem, {
            children: jsxRuntimeExports.jsx(Link, {
              href: r.reviewsLink,
              children: t("layout.submitTestimonial")
            })
          }), jsxRuntimeExports.jsx(ListItem, {
            children: jsxRuntimeExports.jsx(Link, {
              href: r.sitemapLink,
              children: t("layout.siteMap")
            })
          })]
        }), jsxRuntimeExports.jsxs(Copyright, {
          children: ["Helium 10 - Copyright ", new Date().getFullYear(), " - PixelLabs LLC"]
        })]
      })
    },
    Wrapper = ut.div`
  padding: 0 18px;
  background: #ffffff;
  border-top: 1px solid #e4e5e7;

  ${media.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
  }
`,
    Links = ut.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  padding: 0;
  list-style: none;
  margin: 10px 0 0;

  ${media.desktop} {
    margin: 0;
  }
`,
    Link = ut.a`
  cursor: pointer;
  display: inline-block;
  border: none;
  padding: 0;
  background: none;
  font-weight: 400;
  line-height: 1.5;
  font-size: 11px;
  text-decoration: none;
  color: #34495e;
  font-family: inherit;
`,
    ListItem = ut.li`
  line-height: 1;

  &:not(:last-child) {
    ${Link}::after {
      display: inline-block;
      content: "|";
      margin: 0 5px;
    }
  }
`,
    Copyright = ut.div`
  text-align: center;
  padding: 8px 0;
  font-size: 13px;
  color: #6a6c6f;
`,
    ContentSwitcher = ({
                         children: e,
                         syncUrlAccount: t
                       }) => {
      const r = useAccountStore(accountIdSelector),
          s = useLocation(),
          i = useNavigate();
      reactExports.useEffect(() => {
        r && Number(r) > -1 && (window.__ACCOUNT_ID__ = r, t && setAccountId({
          location: s,
          navigate: i
        }, r))
      }, [r, t]);
      const n = useMenuStore(hasSidenavSelector),
          a = useHeaderStore(l => l.isStickyHeader);
      return e ? jsxRuntimeExports.jsxs(Layout, {
        $hasOffset: n,
        $isStickyHeader: a,
        children: [jsxRuntimeExports.jsx(LayoutContent, {
          children: e
        }), jsxRuntimeExports.jsx(Footer, {})]
      }) : null
    },
    NewMenu = ({
                 syncUrlAccount: e = !0,
                 accountId: t,
                 ppcProfile: r,
                 additional: s,
                 onAccountChange: i,
                 logoutToken: n,
                 onLogout: a,
                 data: l,
                 children: o,
                 wait: p
               }) => (reactExports.useEffect(() => {
      i && setCallbacks({
        onAccountChange: i
      })
    }, [i]), reactExports.useEffect(() => {
      a && setCallbacks({
        onLogout: a
      })
    }, [a]), reactExports.useEffect(() => {
      n && setCallbacks({
        logoutToken: n
      })
    }, [n]), reactExports.useEffect(() => {
      r && setPpcSelect(r)
    }, [r]), reactExports.useEffect(() => {
      s && useAdditionalController.set(s)
    }, [s]), jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [jsxRuntimeExports.jsx(GlobalStyle, {}), jsxRuntimeExports.jsx(ForceMFAModal, {}), jsxRuntimeExports.jsx(Container, {
        data: l,
        accountId: t,
        wait: p
      }), jsxRuntimeExports.jsx(ContentSwitcher, {
        syncUrlAccount: e,
        children: o
      })]
    })),
    store = createStore(),
    NewMenuIndependent = e => jsxRuntimeExports.jsx(BrowserRouter, {
      children: jsxRuntimeExports.jsx(context.Provider, {
        value: store,
        children: jsxRuntimeExports.jsx(tt, {
          theme: styledTheme,
          children: jsxRuntimeExports.jsx(UiTranslateProvider, {
            children: jsxRuntimeExports.jsx(NewMenu, {
              ...e,
              children: e.children
            })
          })
        })
      })
    }),
    Layout = ut.div`
  display: flex;
  flex-direction: column;
  min-height: calc(
    100% - ${({$isStickyHeader:e})=>e?stickyHeaderHeight:fixedHeaderHeight}px
  );
  transition: all 0.3s;

  ${media.desktop} {
    padding-left: ${e=>e.$hasOffset?"68px":"initial"};
  }
`,
    LayoutContent = ut.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  z-index: 1;
`,
    useMenu = () => ({
      setAdditionalMenu: useAdditionalController.set
    });
export {
  AppleStoreImage as A, ChatAIModal as C, DownloadAppQRImage as D, GooglePlayImage as G, Logo as L, ModalMobileApp as M, NewMenu as N, RefersionLogo as R, ShareYourIdeas as S, Wrapper$a as W, Link$2 as a, useChatAIModal as b, checkChatAISession as c, NewMenuIndependent as d, useMenu as e, useHeaderStore as f, getUserInfo as g, useStickyHeaderController as h, useOpenDropdownMenuController as i, useHasMinimizedContentController as j, useUserInfo as k, launchChatAI as l, getUpsellInfo as m, createCompounder as n, arrayReduce as o, castSlice as p, nanoid as q, MenuTool as r, stringToArray as s, transform as t, useShareModal as u, lottie as v, DarkButton as w, ApiSegmentMenu as x, useAccountStore as y, accountIdSelector as z
};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/MegamenuV1Modal-V1kkoaky.js", "static/index-VVIvRZBh.js", "static/Styled-I1t8xJcw.js", "static/middleware-KgP9JdWn.js", "static/Learn-nfpDmxZa.js", "static/useAutoPlay-JZxKBgmm.js", "static/use-latest.esm-ABeUYwlj.js", "static/leitenList-G2zkImOB.js", "static/StatusChip-96oyOgD5.js", "static/_initCloneObject-ZEvi6ADI.js", "static/FloatingModal-HNj3AY-K.js", "static/cjs-FE7f3z6G.js", "static/useWindowSize-8O4yXzap.js", "static/CategoricalChip-FObKkzKw.js", "static/MegamenuV2Modal-VOLbFXqF.js", "static/WalmartModal-njlKv3ex.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=NewMenu-vyD-f9Z2.js.map
