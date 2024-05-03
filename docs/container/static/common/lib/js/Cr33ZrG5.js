import { w as L, L as A, a as oe, j as u } from "./_JqgLpqe.js";
import { r as ie, j as T, u as d, v as i, w as g, x as s, f as se, e as de } from "./CwRJyjkV.js";
import { i as M, w as me, d as ue, u as le, a as he, o as ce, f as ge, e as fe, b as ve, g as Me, h as ye, c as pe, F as be } from "./DqlOkTnW.js";
import { K as we } from "./CZVHOlcu.js";
import { F as Pe } from "./Cg-oD5Fc.js";
import { r as c } from "./react-D5yUVy0K.js";
import { z as $e } from "./DYjKt7w-.js";
import { U as We } from "./BBNzmKg6.js";
import { u as f } from "./styled-components-sg3HbxYZ.js";
import { b as ze } from "./Dj4cxZ3D.js";
import { N as ke } from "./DXDnZb_T.js";
function y(e, a, r) {
  ie(2, arguments);
  var t = T(e, r), n = T(a, r);
  return t.getTime() === n.getTime();
}
var F = {
  lessThanXSeconds: {
    standalone: {
      one: "weniger als 1 Sekunde",
      other: "weniger als {{count}} Sekunden"
    },
    withPreposition: {
      one: "weniger als 1 Sekunde",
      other: "weniger als {{count}} Sekunden"
    }
  },
  xSeconds: {
    standalone: {
      one: "1 Sekunde",
      other: "{{count}} Sekunden"
    },
    withPreposition: {
      one: "1 Sekunde",
      other: "{{count}} Sekunden"
    }
  },
  halfAMinute: {
    standalone: "halbe Minute",
    withPreposition: "halben Minute"
  },
  lessThanXMinutes: {
    standalone: {
      one: "weniger als 1 Minute",
      other: "weniger als {{count}} Minuten"
    },
    withPreposition: {
      one: "weniger als 1 Minute",
      other: "weniger als {{count}} Minuten"
    }
  },
  xMinutes: {
    standalone: {
      one: "1 Minute",
      other: "{{count}} Minuten"
    },
    withPreposition: {
      one: "1 Minute",
      other: "{{count}} Minuten"
    }
  },
  aboutXHours: {
    standalone: {
      one: "etwa 1 Stunde",
      other: "etwa {{count}} Stunden"
    },
    withPreposition: {
      one: "etwa 1 Stunde",
      other: "etwa {{count}} Stunden"
    }
  },
  xHours: {
    standalone: {
      one: "1 Stunde",
      other: "{{count}} Stunden"
    },
    withPreposition: {
      one: "1 Stunde",
      other: "{{count}} Stunden"
    }
  },
  xDays: {
    standalone: {
      one: "1 Tag",
      other: "{{count}} Tage"
    },
    withPreposition: {
      one: "1 Tag",
      other: "{{count}} Tagen"
    }
  },
  aboutXWeeks: {
    standalone: {
      one: "etwa 1 Woche",
      other: "etwa {{count}} Wochen"
    },
    withPreposition: {
      one: "etwa 1 Woche",
      other: "etwa {{count}} Wochen"
    }
  },
  xWeeks: {
    standalone: {
      one: "1 Woche",
      other: "{{count}} Wochen"
    },
    withPreposition: {
      one: "1 Woche",
      other: "{{count}} Wochen"
    }
  },
  aboutXMonths: {
    standalone: {
      one: "etwa 1 Monat",
      other: "etwa {{count}} Monate"
    },
    withPreposition: {
      one: "etwa 1 Monat",
      other: "etwa {{count}} Monaten"
    }
  },
  xMonths: {
    standalone: {
      one: "1 Monat",
      other: "{{count}} Monate"
    },
    withPreposition: {
      one: "1 Monat",
      other: "{{count}} Monaten"
    }
  },
  aboutXYears: {
    standalone: {
      one: "etwa 1 Jahr",
      other: "etwa {{count}} Jahre"
    },
    withPreposition: {
      one: "etwa 1 Jahr",
      other: "etwa {{count}} Jahren"
    }
  },
  xYears: {
    standalone: {
      one: "1 Jahr",
      other: "{{count}} Jahre"
    },
    withPreposition: {
      one: "1 Jahr",
      other: "{{count}} Jahren"
    }
  },
  overXYears: {
    standalone: {
      one: "mehr als 1 Jahr",
      other: "mehr als {{count}} Jahre"
    },
    withPreposition: {
      one: "mehr als 1 Jahr",
      other: "mehr als {{count}} Jahren"
    }
  },
  almostXYears: {
    standalone: {
      one: "fast 1 Jahr",
      other: "fast {{count}} Jahre"
    },
    withPreposition: {
      one: "fast 1 Jahr",
      other: "fast {{count}} Jahren"
    }
  }
}, Ce = function(a, r, t) {
  var n, o = t != null && t.addSuffix ? F[a].withPreposition : F[a].standalone;
  return typeof o == "string" ? n = o : r === 1 ? n = o.one : n = o.other.replace("{{count}}", String(r)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : "vor " + n : n;
};
const De = Ce;
var xe = {
  full: "EEEE, do MMMM y",
  // Montag, 7. Januar 2018
  long: "do MMMM y",
  // 7. Januar 2018
  medium: "do MMM y",
  // 7. Jan. 2018
  short: "dd.MM.y"
  // 07.01.2018
}, Se = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Ee = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Ne = {
  date: d({
    formats: xe,
    defaultWidth: "full"
  }),
  time: d({
    formats: Se,
    defaultWidth: "full"
  }),
  dateTime: d({
    formats: Ee,
    defaultWidth: "full"
  })
};
const je = Ne;
var He = {
  lastWeek: "'letzten' eeee 'um' p",
  yesterday: "'gestern um' p",
  today: "'heute um' p",
  tomorrow: "'morgen um' p",
  nextWeek: "eeee 'um' p",
  other: "P"
}, Te = function(a, r, t, n) {
  return He[a];
};
const Fe = Te;
var Ve = {
  narrow: ["v.Chr.", "n.Chr."],
  abbreviated: ["v.Chr.", "n.Chr."],
  wide: ["vor Christus", "nach Christus"]
}, Xe = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]
}, p = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
  wide: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
}, Le = {
  narrow: p.narrow,
  abbreviated: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
  wide: p.wide
}, Ae = {
  narrow: ["S", "M", "D", "M", "D", "F", "S"],
  short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
  wide: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
}, Je = {
  narrow: {
    am: "vm.",
    pm: "nm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachm.",
    evening: "Abend",
    night: "Nacht"
  },
  abbreviated: {
    am: "vorm.",
    pm: "nachm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachmittag",
    evening: "Abend",
    night: "Nacht"
  },
  wide: {
    am: "vormittags",
    pm: "nachmittags",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachmittag",
    evening: "Abend",
    night: "Nacht"
  }
}, Oe = {
  narrow: {
    am: "vm.",
    pm: "nm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachm.",
    evening: "abends",
    night: "nachts"
  },
  abbreviated: {
    am: "vorm.",
    pm: "nachm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachmittags",
    evening: "abends",
    night: "nachts"
  },
  wide: {
    am: "vormittags",
    pm: "nachmittags",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachmittags",
    evening: "abends",
    night: "nachts"
  }
}, Re = function(a) {
  var r = Number(a);
  return r + ".";
}, Qe = {
  ordinalNumber: Re,
  era: i({
    values: Ve,
    defaultWidth: "wide"
  }),
  quarter: i({
    values: Xe,
    defaultWidth: "wide",
    argumentCallback: function(a) {
      return a - 1;
    }
  }),
  month: i({
    values: p,
    formattingValues: Le,
    defaultWidth: "wide"
  }),
  day: i({
    values: Ae,
    defaultWidth: "wide"
  }),
  dayPeriod: i({
    values: Je,
    defaultWidth: "wide",
    formattingValues: Oe,
    defaultFormattingWidth: "wide"
  })
};
const Ye = Qe;
var qe = /^(\d+)(\.)?/i, _e = /\d+/i, Ie = {
  narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
}, Ue = {
  any: [/^v/i, /^n/i]
}, Be = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? Quartal/i
}, Ge = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ke = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
  wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
}, Ze = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^j[aä]/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, ea = {
  narrow: /^[smdmf]/i,
  short: /^(so|mo|di|mi|do|fr|sa)/i,
  abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
  wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
}, aa = {
  any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
}, ta = {
  narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
}, na = {
  any: {
    am: /^v/i,
    pm: /^n/i,
    midnight: /^Mitte/i,
    noon: /^Mitta/i,
    morning: /morgens/i,
    afternoon: /nachmittags/i,
    // will never be matched. Afternoon is matched by `pm`
    evening: /abends/i,
    night: /nachts/i
    // will never be matched. Night is matched by `pm`
  }
}, ra = {
  ordinalNumber: g({
    matchPattern: qe,
    parsePattern: _e,
    valueCallback: function(a) {
      return parseInt(a);
    }
  }),
  era: s({
    matchPatterns: Ie,
    defaultMatchWidth: "wide",
    parsePatterns: Ue,
    defaultParseWidth: "any"
  }),
  quarter: s({
    matchPatterns: Be,
    defaultMatchWidth: "wide",
    parsePatterns: Ge,
    defaultParseWidth: "any",
    valueCallback: function(a) {
      return a + 1;
    }
  }),
  month: s({
    matchPatterns: Ke,
    defaultMatchWidth: "wide",
    parsePatterns: Ze,
    defaultParseWidth: "any"
  }),
  day: s({
    matchPatterns: ea,
    defaultMatchWidth: "wide",
    parsePatterns: aa,
    defaultParseWidth: "any"
  }),
  dayPeriod: s({
    matchPatterns: ta,
    defaultMatchWidth: "wide",
    parsePatterns: na,
    defaultParseWidth: "any"
  })
};
const oa = ra;
var ia = {
  code: "de",
  formatDistance: De,
  formatLong: je,
  formatRelative: Fe,
  localize: Ye,
  match: oa,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const sa = ia;
var da = {
  lessThanXSeconds: {
    one: "menos de un segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "medio minuto",
  lessThanXMinutes: {
    one: "menos de un minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "alrededor de 1 hora",
    other: "alrededor de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 día",
    other: "{{count}} días"
  },
  aboutXWeeks: {
    one: "alrededor de 1 semana",
    other: "alrededor de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "alrededor de 1 mes",
    other: "alrededor de {{count}} meses"
  },
  xMonths: {
    one: "1 mes",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "alrededor de 1 año",
    other: "alrededor de {{count}} años"
  },
  xYears: {
    one: "1 año",
    other: "{{count}} años"
  },
  overXYears: {
    one: "más de 1 año",
    other: "más de {{count}} años"
  },
  almostXYears: {
    one: "casi 1 año",
    other: "casi {{count}} años"
  }
}, ma = function(a, r, t) {
  var n, o = da[a];
  return typeof o == "string" ? n = o : r === 1 ? n = o.one : n = o.other.replace("{{count}}", r.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "en " + n : "hace " + n : n;
};
const ua = ma;
var la = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, ha = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, ca = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ga = {
  date: d({
    formats: la,
    defaultWidth: "full"
  }),
  time: d({
    formats: ha,
    defaultWidth: "full"
  }),
  dateTime: d({
    formats: ca,
    defaultWidth: "full"
  })
};
const fa = ga;
var va = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, Ma = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, ya = function(a, r, t, n) {
  return r.getUTCHours() !== 1 ? Ma[a] : va[a];
};
const pa = ya;
var ba = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, wa = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Pa = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
  wide: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
}, $a = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
}, Wa = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  }
}, za = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  }
}, ka = function(a, r) {
  var t = Number(a);
  return t + "º";
}, Ca = {
  ordinalNumber: ka,
  era: i({
    values: ba,
    defaultWidth: "wide"
  }),
  quarter: i({
    values: wa,
    defaultWidth: "wide",
    argumentCallback: function(a) {
      return Number(a) - 1;
    }
  }),
  month: i({
    values: Pa,
    defaultWidth: "wide"
  }),
  day: i({
    values: $a,
    defaultWidth: "wide"
  }),
  dayPeriod: i({
    values: Wa,
    defaultWidth: "wide",
    formattingValues: za,
    defaultFormattingWidth: "wide"
  })
};
const Da = Ca;
var xa = /^(\d+)(º)?/i, Sa = /\d+/i, Ea = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, Na = {
  any: [/^ac/i, /^dc/i],
  wide: [/^(antes de cristo|antes de la era com[uú]n)/i, /^(despu[eé]s de cristo|era com[uú]n)/i]
}, ja = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Ha = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ta = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, Fa = {
  narrow: [/^e/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^en/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i]
}, Va = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, Xa = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, La = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, Aa = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /^md/i,
    morning: /mañana/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noche/i
  }
}, Ja = {
  ordinalNumber: g({
    matchPattern: xa,
    parsePattern: Sa,
    valueCallback: function(a) {
      return parseInt(a, 10);
    }
  }),
  era: s({
    matchPatterns: Ea,
    defaultMatchWidth: "wide",
    parsePatterns: Na,
    defaultParseWidth: "any"
  }),
  quarter: s({
    matchPatterns: ja,
    defaultMatchWidth: "wide",
    parsePatterns: Ha,
    defaultParseWidth: "any",
    valueCallback: function(a) {
      return a + 1;
    }
  }),
  month: s({
    matchPatterns: Ta,
    defaultMatchWidth: "wide",
    parsePatterns: Fa,
    defaultParseWidth: "any"
  }),
  day: s({
    matchPatterns: Va,
    defaultMatchWidth: "wide",
    parsePatterns: Xa,
    defaultParseWidth: "any"
  }),
  dayPeriod: s({
    matchPatterns: La,
    defaultMatchWidth: "any",
    parsePatterns: Aa,
    defaultParseWidth: "any"
  })
};
const Oa = Ja;
var Ra = {
  code: "es",
  formatDistance: ua,
  formatLong: fa,
  formatRelative: pa,
  localize: Da,
  match: Oa,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
};
const Qa = Ra;
var Ya = {
  lessThanXSeconds: {
    one: "meno di un secondo",
    other: "meno di {{count}} secondi"
  },
  xSeconds: {
    one: "un secondo",
    other: "{{count}} secondi"
  },
  halfAMinute: "alcuni secondi",
  lessThanXMinutes: {
    one: "meno di un minuto",
    other: "meno di {{count}} minuti"
  },
  xMinutes: {
    one: "un minuto",
    other: "{{count}} minuti"
  },
  aboutXHours: {
    one: "circa un'ora",
    other: "circa {{count}} ore"
  },
  xHours: {
    one: "un'ora",
    other: "{{count}} ore"
  },
  xDays: {
    one: "un giorno",
    other: "{{count}} giorni"
  },
  aboutXWeeks: {
    one: "circa una settimana",
    other: "circa {{count}} settimane"
  },
  xWeeks: {
    one: "una settimana",
    other: "{{count}} settimane"
  },
  aboutXMonths: {
    one: "circa un mese",
    other: "circa {{count}} mesi"
  },
  xMonths: {
    one: "un mese",
    other: "{{count}} mesi"
  },
  aboutXYears: {
    one: "circa un anno",
    other: "circa {{count}} anni"
  },
  xYears: {
    one: "un anno",
    other: "{{count}} anni"
  },
  overXYears: {
    one: "più di un anno",
    other: "più di {{count}} anni"
  },
  almostXYears: {
    one: "quasi un anno",
    other: "quasi {{count}} anni"
  }
}, qa = function(a, r, t) {
  var n, o = Ya[a];
  return typeof o == "string" ? n = o : r === 1 ? n = o.one : n = o.other.replace("{{count}}", r.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "tra " + n : n + " fa" : n;
};
const _a = qa;
var Ia = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, Ua = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Ba = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Ga = {
  date: d({
    formats: Ia,
    defaultWidth: "full"
  }),
  time: d({
    formats: Ua,
    defaultWidth: "full"
  }),
  dateTime: d({
    formats: Ba,
    defaultWidth: "full"
  })
};
const Ka = Ga;
var b = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
function Za(e) {
  switch (e) {
    case 0:
      return "'domenica scorsa alle' p";
    default:
      return "'" + b[e] + " scorso alle' p";
  }
}
function V(e) {
  return "'" + b[e] + " alle' p";
}
function et(e) {
  switch (e) {
    case 0:
      return "'domenica prossima alle' p";
    default:
      return "'" + b[e] + " prossimo alle' p";
  }
}
var at = {
  lastWeek: function(a, r, t) {
    var n = a.getUTCDay();
    return y(a, r, t) ? V(n) : Za(n);
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: function(a, r, t) {
    var n = a.getUTCDay();
    return y(a, r, t) ? V(n) : et(n);
  },
  other: "P"
}, tt = function(a, r, t, n) {
  var o = at[a];
  return typeof o == "function" ? o(r, t, n) : o;
};
const nt = tt;
var rt = {
  narrow: ["aC", "dC"],
  abbreviated: ["a.C.", "d.C."],
  wide: ["avanti Cristo", "dopo Cristo"]
}, ot = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, it = {
  narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
  abbreviated: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
  wide: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
}, st = {
  narrow: ["D", "L", "M", "M", "G", "V", "S"],
  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  wide: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
}, dt = {
  narrow: {
    am: "m.",
    pm: "p.",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  }
}, mt = {
  narrow: {
    am: "m.",
    pm: "p.",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  }
}, ut = function(a, r) {
  var t = Number(a);
  return String(t);
}, lt = {
  ordinalNumber: ut,
  era: i({
    values: rt,
    defaultWidth: "wide"
  }),
  quarter: i({
    values: ot,
    defaultWidth: "wide",
    argumentCallback: function(a) {
      return a - 1;
    }
  }),
  month: i({
    values: it,
    defaultWidth: "wide"
  }),
  day: i({
    values: st,
    defaultWidth: "wide"
  }),
  dayPeriod: i({
    values: dt,
    defaultWidth: "wide",
    formattingValues: mt,
    defaultFormattingWidth: "wide"
  })
};
const ht = lt;
var ct = /^(\d+)(º)?/i, gt = /\d+/i, ft = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
  wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
}, vt = {
  any: [/^a/i, /^(d|e)/i]
}, Mt = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, yt = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, pt = {
  narrow: /^[gfmalsond]/i,
  abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
  wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
}, bt = {
  narrow: [/^g/i, /^f/i, /^m/i, /^a/i, /^m/i, /^g/i, /^l/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ge/i, /^f/i, /^mar/i, /^ap/i, /^mag/i, /^gi/i, /^l/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, wt = {
  narrow: /^[dlmgvs]/i,
  short: /^(do|lu|ma|me|gi|ve|sa)/i,
  abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
  wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
}, Pt = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
}, $t = {
  narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
  any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
}, Wt = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mezza/i,
    noon: /^mezzo/i,
    morning: /mattina/i,
    afternoon: /pomeriggio/i,
    evening: /sera/i,
    night: /notte/i
  }
}, zt = {
  ordinalNumber: g({
    matchPattern: ct,
    parsePattern: gt,
    valueCallback: function(a) {
      return parseInt(a, 10);
    }
  }),
  era: s({
    matchPatterns: ft,
    defaultMatchWidth: "wide",
    parsePatterns: vt,
    defaultParseWidth: "any"
  }),
  quarter: s({
    matchPatterns: Mt,
    defaultMatchWidth: "wide",
    parsePatterns: yt,
    defaultParseWidth: "any",
    valueCallback: function(a) {
      return a + 1;
    }
  }),
  month: s({
    matchPatterns: pt,
    defaultMatchWidth: "wide",
    parsePatterns: bt,
    defaultParseWidth: "any"
  }),
  day: s({
    matchPatterns: wt,
    defaultMatchWidth: "wide",
    parsePatterns: Pt,
    defaultParseWidth: "any"
  }),
  dayPeriod: s({
    matchPatterns: $t,
    defaultMatchWidth: "any",
    parsePatterns: Wt,
    defaultParseWidth: "any"
  })
};
const kt = zt;
var Ct = {
  code: "it",
  formatDistance: _a,
  formatLong: Ka,
  formatRelative: nt,
  localize: ht,
  match: kt,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const Dt = Ct;
var xt = {
  lessThanXSeconds: {
    one: "不到 1 秒",
    other: "不到 {{count}} 秒"
  },
  xSeconds: {
    one: "1 秒",
    other: "{{count}} 秒"
  },
  halfAMinute: "半分钟",
  lessThanXMinutes: {
    one: "不到 1 分钟",
    other: "不到 {{count}} 分钟"
  },
  xMinutes: {
    one: "1 分钟",
    other: "{{count}} 分钟"
  },
  xHours: {
    one: "1 小时",
    other: "{{count}} 小时"
  },
  aboutXHours: {
    one: "大约 1 小时",
    other: "大约 {{count}} 小时"
  },
  xDays: {
    one: "1 天",
    other: "{{count}} 天"
  },
  aboutXWeeks: {
    one: "大约 1 个星期",
    other: "大约 {{count}} 个星期"
  },
  xWeeks: {
    one: "1 个星期",
    other: "{{count}} 个星期"
  },
  aboutXMonths: {
    one: "大约 1 个月",
    other: "大约 {{count}} 个月"
  },
  xMonths: {
    one: "1 个月",
    other: "{{count}} 个月"
  },
  aboutXYears: {
    one: "大约 1 年",
    other: "大约 {{count}} 年"
  },
  xYears: {
    one: "1 年",
    other: "{{count}} 年"
  },
  overXYears: {
    one: "超过 1 年",
    other: "超过 {{count}} 年"
  },
  almostXYears: {
    one: "将近 1 年",
    other: "将近 {{count}} 年"
  }
}, St = function(a, r, t) {
  var n, o = xt[a];
  return typeof o == "string" ? n = o : r === 1 ? n = o.one : n = o.other.replace("{{count}}", String(r)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? n + "内" : n + "前" : n;
};
const Et = St;
var Nt = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, jt = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, Ht = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Tt = {
  date: d({
    formats: Nt,
    defaultWidth: "full"
  }),
  time: d({
    formats: jt,
    defaultWidth: "full"
  }),
  dateTime: d({
    formats: Ht,
    defaultWidth: "full"
  })
};
const Ft = Tt;
function X(e, a, r) {
  var t = "eeee p";
  return y(e, a, r) ? t : e.getTime() > a.getTime() ? "'下个'" + t : "'上个'" + t;
}
var Vt = {
  lastWeek: X,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: X,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, Xt = function(a, r, t, n) {
  var o = Vt[a];
  return typeof o == "function" ? o(r, t, n) : o;
};
const Lt = Xt;
var At = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, Jt = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, Ot = {
  narrow: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
  abbreviated: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
  wide: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
}, Rt = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, Qt = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
}, Yt = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
}, qt = function(a, r) {
  var t = Number(a);
  switch (r == null ? void 0 : r.unit) {
    case "date":
      return t.toString() + "日";
    case "hour":
      return t.toString() + "时";
    case "minute":
      return t.toString() + "分";
    case "second":
      return t.toString() + "秒";
    default:
      return "第 " + t.toString();
  }
}, _t = {
  ordinalNumber: qt,
  era: i({
    values: At,
    defaultWidth: "wide"
  }),
  quarter: i({
    values: Jt,
    defaultWidth: "wide",
    argumentCallback: function(a) {
      return a - 1;
    }
  }),
  month: i({
    values: Ot,
    defaultWidth: "wide"
  }),
  day: i({
    values: Rt,
    defaultWidth: "wide"
  }),
  dayPeriod: i({
    values: Qt,
    defaultWidth: "wide",
    formattingValues: Yt,
    defaultFormattingWidth: "wide"
  })
};
const It = _t;
var Ut = /^(第\s*)?\d+(日|时|分|秒)?/i, Bt = /\d+/i, Gt = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, Kt = {
  any: [/^(前)/i, /^(公元)/i]
}, Zt = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, en = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, an = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, tn = {
  narrow: [/^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i, /^七/i, /^八/i, /^九/i, /^十(?!(一|二))/i, /^十一/i, /^十二/i],
  any: [/^一|1/i, /^二|2/i, /^三|3/i, /^四|4/i, /^五|5/i, /^六|6/i, /^七|7/i, /^八|8/i, /^九|9/i, /^十(?!(一|二))|10/i, /^十一|11/i, /^十二|12/i]
}, nn = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, rn = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, on = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, sn = {
  any: {
    am: /^上午?/i,
    pm: /^下午?/i,
    midnight: /^午夜/i,
    noon: /^[中正]午/i,
    morning: /^早上/i,
    afternoon: /^下午/i,
    evening: /^晚上?/i,
    night: /^凌晨/i
  }
}, dn = {
  ordinalNumber: g({
    matchPattern: Ut,
    parsePattern: Bt,
    valueCallback: function(a) {
      return parseInt(a, 10);
    }
  }),
  era: s({
    matchPatterns: Gt,
    defaultMatchWidth: "wide",
    parsePatterns: Kt,
    defaultParseWidth: "any"
  }),
  quarter: s({
    matchPatterns: Zt,
    defaultMatchWidth: "wide",
    parsePatterns: en,
    defaultParseWidth: "any",
    valueCallback: function(a) {
      return a + 1;
    }
  }),
  month: s({
    matchPatterns: an,
    defaultMatchWidth: "wide",
    parsePatterns: tn,
    defaultParseWidth: "any"
  }),
  day: s({
    matchPatterns: nn,
    defaultMatchWidth: "wide",
    parsePatterns: rn,
    defaultParseWidth: "any"
  }),
  dayPeriod: s({
    matchPatterns: on,
    defaultMatchWidth: "any",
    parsePatterns: sn,
    defaultParseWidth: "any"
  })
};
const mn = dn;
var un = {
  code: "zh-CN",
  formatDistance: Et,
  formatLong: Ft,
  formatRelative: Lt,
  localize: It,
  match: mn,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
const ln = un, xn = (e, a, r) => {
  var o;
  const t = r || ((o = L.get()[A]) == null ? void 0 : o.slice(0, 2)) || "en", n = hn[t];
  return se(e, J[a][t], { locale: n });
}, Sn = (e, a) => {
  var t;
  const r = a || ((t = L.get()[A]) == null ? void 0 : t.slice(0, 2)) || "en";
  return J[e][r];
}, hn = {
  en: de,
  es: Qa,
  de: sa,
  it: Dt,
  zh: ln
}, J = {
  completeLong: {
    en: "MMMM d, yyyy h:mm aaa",
    es: "dd MMMM yyyy H:mm",
    de: "dd MMMM yyyy H:mm",
    it: "dd MMMM yyyy H:mm",
    zh: "yyyy MMMM dd H:mm"
  },
  completeShort: {
    en: "MMMM yyyy",
    es: "MMMM yyyy",
    de: "MMMM yyyy",
    it: "MMMM yyyy",
    zh: "yyyy MMMM"
  },
  completeStandard: {
    en: "MMMM d, yyyy",
    es: "dd MMMM yyyy",
    de: "dd MMMM yyyy",
    it: "dd MMMM yyyy",
    zh: "yyyy MMMM dd"
  },
  short: {
    en: "MMM yyyy",
    es: "MMM yyyy",
    de: "MMM yyyy",
    it: "MMM yyyy",
    zh: "yyyy MMM"
  },
  standard: {
    en: "MMM d, yyyy",
    es: "dd MMM yyyy",
    de: "dd MMM yyyy",
    it: "dd MMM yyyy",
    zh: "yyyy MMM dd"
  },
  standardShort: {
    en: "MMM d",
    es: "dd MMM",
    de: "dd MMM",
    it: "dd MMM",
    zh: "MMM dd"
  },
  shortNumeric: {
    en: "MM/yyyy",
    es: "MM.yyyy",
    de: "MM.yyyy",
    it: "MM.yyyy",
    zh: "yyyy.MM"
  },
  standardNumeric: {
    en: "MM/dd/yyyy",
    es: "dd.MM.yyyy",
    de: "dd.MM.yyyy",
    it: "dd.MM.yyyy",
    zh: "yyyy.MM.dd"
  },
  monthNumeric: {
    en: "MM/dd",
    es: "dd.MM",
    de: "dd.MM",
    it: "dd.MM",
    zh: "MM.dd"
  },
  timeShort: {
    en: "h a",
    es: "H",
    de: "H",
    it: "H",
    zh: "H"
  },
  time: {
    en: "h:mm aaa",
    es: "H:mm",
    de: "H:mm",
    it: "H:mm",
    zh: "H:mm"
  },
  compactShort: {
    en: "EEEE, MMM d",
    es: "EEEE, dd MMM",
    de: "EEEE, dd MMM",
    it: "EEEE, dd MMM",
    zh: "EEEE, MMM dd"
  }
}, cn = f.div`
  ${oe};
  min-height: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
  transition: all 0.2s ease-in-out;
  line-height: 1.25;

  padding: 6px ${(e) => e.theme.spacing.sp16};

  & > div,
  & > span {
    padding: 0 ${(e) => e.theme.spacing.sp16};
  }

  &:hover {
    background-color: ${(e) => e.theme.systemColors.grey100};
  }
`, gn = f.div`
  height: 1px;
  margin: ${(e) => e.theme.spacing.sp8} -${(e) => e.theme.spacing.sp8};
  background-color: ${(e) => e.theme.systemColors.grey200};
`, fn = f(ke)`
  flex: 0 0 auto;
  position: absolute;
  right: ${(e) => e.theme.spacing.sp8};
  top: ${(e) => e.theme.spacing.sp8};
`, vn = f.div`
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  max-width: ${(e) => M(e.$maxWidth) ? e.$maxWidth + "px" : "100%"};
  padding: ${(e) => e.theme.spacing.sp8} 0;
  border-radius: 6px;
  border: solid 1px ${(e) => e.theme.systemColors.grey200};
  background-color: ${(e) => e.theme.systemColors.white};
  ${ze};

  min-width: ${(e) => M(e.$maxWidth) ? e.$maxWidth + "px" : "auto"};
  max-width: ${(e) => M(e.$maxWidth) ? e.$maxWidth + "px" : "auto"};
`, Mn = ({ children: e, content: a, offset: r, placement: t = "bottom-start", strategy: n, open: o, onOpenChange: O, clickable: R = !0, focusable: Q = !0, hoverable: Y = !1, delay: q, hideOnClickOutside: _ = !0, appendTo: I = "parent", zIndex: w = $e.dropdown, className: U, closeButton: B = !1, minWidth: P, maxWidth: $, hideOnClick: G = !0 }) => {
  var x, S, E, N, j, H;
  const m = c.useContext(We), [W, v] = ue({
    defaultValue: !1,
    value: o,
    onChange: O
  }), { refs: l, floatingStyles: z, context: h } = le({
    open: W,
    onOpenChange: v,
    placement: t || ((x = m == null ? void 0 : m.dropdowns) == null ? void 0 : x.placement),
    strategy: n || ((E = (S = m == null ? void 0 : m.dropdowns) == null ? void 0 : S.popperOptions) == null ? void 0 : E.strategy),
    whileElementsMounted: he,
    middleware: [
      ce(r ?? 10),
      ge({
        fallbackAxisSideDirection: "start"
      })
    ]
  }), K = fe({ context: h, hoverable: Y, delay: q, interactive: !0 }), Z = ve(h, { enabled: _ }), ee = Me(h, { enabled: Q }), ae = ye(h, { enabled: R }), { getReferenceProps: k, getFloatingProps: te } = pe([K, ae, Z, ee]), ne = c.useMemo(() => ({
    ...z,
    zIndex: w
  }), [z, w]), C = u.jsx("div", { ref: l.setFloating, ...te(), style: ne, children: u.jsxs(vn, { onClick: G ? () => v(!1) : void 0, className: U, $maxWidth: $ === "reference" ? (N = l.reference.current) == null ? void 0 : N.getBoundingClientRect().width : $, $minWidth: P === "reference" ? (j = l.reference.current) == null ? void 0 : j.getBoundingClientRect().width : P, children: [a, B && u.jsx(fn, { buttonType: "icon", size: "100", icon: u.jsx(Pe, { icon: we }), onClick: () => v(!1) })] }) }), re = c.useMemo(() => c.cloneElement(e, {
    ...k(),
    ref: l.setReference
  }), [e, k, l.setReference]), D = I || ((H = m == null ? void 0 : m.tooltips) == null ? void 0 : H.appendTo);
  return u.jsxs(u.Fragment, { children: [re, W && (D === "parent" ? C : u.jsx(be, { root: D, children: C }))] });
}, En = Object.assign(me(Mn), { Item: cn, Divider: gn });
export {
  En as P,
  xn as f,
  Sn as g
};
