import{cg as Vi,f as K,g as $,P as on,A as St,G as Oi,ap as oe,ch as qe,av as Ui,a9 as nn,a6 as Ki,d as I,c as y,e as A,j as a,m as x,o as qi,r as b,q as Gi,a4 as Ke,_ as _i,i as Hi,a8 as Wi,u as m,Q as vt,M as io,a0 as sn,N as B,x as Z,T as Qi,a as X,b as _,bN as Yi,ag as Zi,as as F,ah as Ji,h as D,k as et,aC as so,L as an,ci as ao,I as L,J as Xi,K as ze,aD as es,cj as ut,ck as pt,bz as ro,p as tt,bJ as He,bM as ts,ad as os,a2 as mt,cl as ns,c8 as bt,S as wt,aN as rn,cm as is,F as ln,cn as ss,Z as cn,co as dn,cp as un,cq as as,cr as rs,aM as ls,aT as cs,aG as ds,aL as Bo,U as us,cs as pn,H as lo,aW as Ne,ct as ps,y as co,cu as ms,cv as gs,bb as hs,a5 as ys,bO as fs,bF as mn,cw as Ss,bt as vs,at as bs,ce as ws,t as gn,cx as hn,cf as As,cy as xs,cz as ks,Y as Ts,bw as Cs,ar as zs,b9 as Ns,bo as Fo,V as Ps}from"./index-tEWTe_cM.js";import{d as H,a as Fe}from"./use-onclickoutside.browser.esm-BisD5Fdu.js";import{d as At,U as yn}from"./SearchGraphModal-8Lh4F5Sv.js";import{f as te}from"./useAutoPlay-8WOcIzK4.js";import{a1 as Is,a2 as Ms,d as $s,t as ve,h as re,e as Gt,a3 as uo,a4 as Ls,a5 as Dt,E as fn,N as js,a6 as Bs,a0 as Fs}from"./Learn-ZI4QJ8Ms.js";import{b as Rs}from"./_basePickBy-23CB03ho.js";import{g as xt}from"./groupBy-7ZtSo7lr.js";import{l as Ds,M as Es,L as Vs,K as Os,a as Sn}from"./index-LVl8fC0e.js";import{e as Ue,a as Ee,s as je,d as po,b as _t,c as vn}from"./middleware-6VZ1FcKb.js";import{M as Us}from"./MarketplaceSingleSelect-J9Q4NESj.js";import{E as kt}from"./ExtendedProductSummary-Rm3yeme_.js";import{H as Ks,u as qs,I as Gs}from"./IDASHUpsellModal-9iMRBwwd.js";import{u as _s}from"./hooks-dSElEgEV.js";import{L as Ht,u as Hs,B as Ws,a as Qs}from"./getListingAnalyzerKeywordsSection-CrrIvoLZ.js";import{N as Ys}from"./NewRadio-DIL_Ez7J.js";import{G as Zs,u as Js,T as Xs}from"./useTrackCompetitorsOnClick-DO7Nu69z.js";import{P as bn}from"./OptimalData-cuY_CBe9.js";import{N as Ro}from"./AddToMyListDropdown-lgmjWp6o.js";import{l as ea}from"./index-rN0wyM8x.js";import{G as ta,R as oa}from"./GaugeDiagram-1wpkGvHA.js";import{S as Do}from"./Sparkline-z4suwkUd.js";import{u as na}from"./getUpsellData-siUtjfVt.js";import{L as wn}from"./LineGraphSkeleton-_OzzpDE4.js";import{u as An,M as ia,R as sa}from"./ModalGraph-hPaCunFZ.js";import{s as Eo,D as aa}from"./WidthLimitedTagsValue-Gph_9FLc.js";import{s as ra}from"./CustomerEventsComponent-e67uxoGM.js";import{T as la}from"./TrafficAndConversion-PykU-_2y.js";import{S as ca}from"./SubAccountDoNotHaveAccess-W5XV8oJ4.js";import{T as da}from"./ToastContainer-G5qnX7eh.js";import{u as ua,b as pa}from"./dateRanges-ZXIy3dZA.js";function ma(e,t){if(e==null)return{};var o=Vi(Is(e),function(n){return[n]});return t=Ms(t),Rs(e,o,function(n,i){return t(n,i[0])})}const ga=async()=>K({url:$(`${on}/listing-analyzer/la-api/restricted-actions`,{}),method:"GET",withCredentials:!0}),mo=St(()=>({restrictedActions:{}})),ha=Oi(mo,"restrictedActions",e=>ga()),ya=({restrictedActions:e},{platform:t,restriction:o})=>!(e!=null&&e[t])||((e==null?void 0:e.amazon)||[]).indexOf(o)!==-1,Oe=(e,t)=>mo(o=>ya(o,{platform:e,restriction:t})),fa={free:"platinum",starter:"platinum",platinum:"diamond",gold:"gold",alacarte:"alacarte",diamond:"diamond",elite:"elite",enterprise:"enterprise"},ot=()=>{const e=oe(qe),t=oe(kn),o=oe(xn);return{planGroup:e,nextPlanGroup:t,blurred:o}},xn=e=>{const t=qe(e);return t!=="platinum"&&t!=="diamond"&&t!=="elite"},kn=e=>{var t;return fa[Ui[((t=e.checkLogin)==null?void 0:t.basePlan)||nn.Free]]},j=on,Sa=Ki("https://research-tools.helium10.com"),va=j+"/api/v1/profits/research/sales/chart",ba=j+"/api/v1/product/sales-units-chart",wa=j+"/api/v1/profits/research/sales/summary",Tt=async e=>K({url:$(`${Sa}/api/site/track-event`,{}),method:"POST",params:e,useSessionAccountId:!0}),me=H("trackEvent",async e=>Tt(e),{initialStatus:"init"}),Be=At("upgradeModal",null,{reaction:(e,{dispatch:t})=>{var o,n,i;if(e.type==="OPEN"){const s=qe(oe.getState()),r=((o=e.payload)==null?void 0:o.upsellPlan)||"diamond",l=(n=e.payload)==null?void 0:n.trigger;let c;switch((i=e.payload)==null?void 0:i.restriction){case"mediaComparison":{c='User click "Media Comparison"';break}}t(me.actions.pending({eventName:"Upgrade Modal Fired",eventProperties:{userCurrentPlan:s,upsellPlan:r,tool:"Listing Analyzer",trigger:l||c||"Unknown trigger"}}))}}}),Tn=I("handleUpgradeAction",(e,{dispatch:t})=>{const o=qe(oe.getState()),n=kn(oe.getState());t(me.actions.pending({eventName:"Upgrade Modal Fired",eventProperties:{tool:"Listing Analyzer",page:"https://members.helium10.com/listing-analyzer?",location:"banner",userCurrentPlan:o,upsellPlan:n}}))}),Aa=()=>{const e=y(Be.atom,n=>n.isOpen,[]),t=A(Be.close),o=A(Tn);return a.jsx(yn,{data:{type:"featureLocked",toolTitle:"Listing Analyzer",tool:"listingAnalyzer"},modalProps:{isOpen:e},onBeforeAccept:o,onDecline:t})},xa=e=>K({method:"GET",url:$(`${j}/api/v1/customers/uses/upsell-info`,e),withCredentials:!0}),Wt=H("getUpsellInfo",async e=>xa({moduleId:e})),Cn=x("isChineseSelector",Wt.atom,e=>{var t;return!!((t=e.content)!=null&&t.results.isChinesePlans)}),ka=()=>{const e=A(Wt.actions.pending),t=oe(s=>{var r;return(r=s.main)==null?void 0:r.token}),{accountId:o}=qi();b.useEffect(()=>{t&&o&&(ha.action(),e("cerebro"))},[t,o,e]);const n=mo(s=>!!s.restrictedActions.amazon||!!s.restrictedActions.common||!!s.restrictedActions.walmart),i=y(Wt.atom,s=>!!s.content,[]);return{token:t,accountId:o,loaded:i&&n}},Ta=e=>Object.fromEntries(new URLSearchParams(e)),Ca=()=>{const{search:e}=Gi();return b.useMemo(()=>Ke.parse(e.replaceAll("%3F","&"),{decode:!0}),[e])},za=()=>{const[e,t]=b.useState();return b.useEffect(()=>{setTimeout(()=>{const o=Ke.parse(window.location.search.replaceAll("%3F","&"));t(o)},900)},[]),e},ge=()=>Ca(),zn=St(()=>({rootPath:""})),ne=()=>zn.getState().rootPath,Na={asinError:"Asin wurde bereits hinzugefügt",searchId:"searchId-Feld ist erforderlich",provider:"1",error:"Fehler",serverError:"Serverfehler",occurred:"Ein Fehler ist aufgetreten",tryLater:"Wir entschuldigen uns für die Unannehmlichkeiten. Bitte versuchen Sie es später erneut."},Pa={newSearch:{asin:"Geben Sie ASIN von Produkten ein",url:"Produkt ASIN oder URL eingeben...",new:"Neue ASIN/URL..."}},Ia={learn:"Lernen",learnTooltip:"Lernen Sie Cerebro",startNewSearch:"Neue Suche starten",analyze:"Analysieren",export:"Export",addToMyList:"Zu meiner Liste hinzufügen",ok:"OK",excel:"Excel",csv:"CSV",cerebro:"Weiter in Cerebro",cancel:"Abbrechen",add:"Hinzufügen",exportData:"Daten exportieren",mediaComparison:"Medienvergleich",mediaComparisonTooltip:"Medienvergleich (Bilder/Video) für alle ASINS in dieser Suche anzeigen",close:"Schließen",upgradeNow:"Jetzt upgraden",connectToAmazon:"Mit Amazon verbinden",addFromMyList:"Von meiner Liste hinzufügen"},Ma={title:"Listing Analyzer",description:"Analysieren Sie Ihr Produktangebot und Ihren Wettbewerb und beurteilen Sie den Markt, auf dem Sie verkaufen.",backToSearch:"Zurück zur Suche"},$a={balance:"monatliche Suche verfügbar",title:"Analysieren Sie Produktlistings mit Listing Analyzer",subTitle:"Recherchieren Sie bis zu 10 Produktangebote von Amazon, um die Qualität Ihrer Angebote und der Angebote Ihrer Konkurrenz zu sehen.",mainASINTitle:"Gib Haupt-ASIN ein",mainASINPlaceholder:"Gib Haupt-ASIN ein",selectMyProduct:"Wähle Meine Produkte zum hinzufügen aus",competitorASINsTitle:"Bis zu {maxAsins} Wettbewerber-ASINs",runAnalysis:"Analyse ausführen"},La="Analyse läuft … Komplexere Analysen können bis zu einer Minute in Anspruch nehmen",ja={pageTitle:"Listing Analyzer-Vorschau",youHave:"Sie haben noch",searchesLeft:"Suchen übrig.",marketplace:"Marketplace",haveAccount:"Sie haben bereits ein Konto?",discoverProduct:"Entdecken Sie das volle Potenzial Ihres Produktangebots mit unserer detaillierten Analyse"},Ba="Listing-Qualitätsanalyse",Fa={unlockFullReport:"Kompletten Bericht freischalten",unlockYourReport:"Ihren kompletten Bericht freischalten",signupUnlock:"Registrieren, um den kompletten Bericht freizuschalten",signupForFree:"Kostenlos registrieren",login:"Einloggen"},Ra={zeroSearches:"Sie haben noch 0 Suchen übrig",enterAsin:"Produkt ASIN oder URL eingeben",analyze:"Analysieren"},Da={title:"Neues Produkt eingeben"},Ea={passed:"Bestandene ASINs",failed:"Durchgefallene ASINs"},Va="Wir sind dabei! Ihr Analyse wird gerade bearbeitet.",Oa={fullAccess:"Erhalten Sie vollen Zugang zu Ihrer Listing-Qualitätsanalyse",simplySignUp:"Einfach für ein Helium 10-Konto registrieren",whenYouSignUp:"wenn Sie sich für ein Helium 10-Konto registrieren",signUpForFree:"Kostenlos registrieren"},Ua={addToFolder:"Zum Ordner hinzufügen:",folder:"Ordner",keywords:"Keywords",link:"Neuen Ordner erstellen"},Ka={topKeywords:"Top-Keywords",keywordsSelected:"Keywords ausgewählt"},qa={0:"Die ASIN ist für Ihr Keyword mit einem monatlichen Suchvolumen > 500 in den Top 10 der organischen Suchergebnisse. Verwenden Sie Cerebro, um weitere Keywords zu entdecken und Ihre Keyword-Strategie zu optimieren.",1:"Die gesuchten ASINs haben keine Top-Keywords"},Ga={listingSearch:"Listing Analyzer-Suche",completeAnalysis:" / Ihre komplette Analyse"},_a="Derzeit sind keine Daten zu den ausgewählten ASIN verfügbar",Ha={title:"[%key_id:162605417%]",subtitle:"Wählen Sie eine einzelne ASIN aus, um zusätzliche Analysen anzuzeigen",titleTooltip:"Vergleichen Sie die Leistung der ausgewählten ASINs mit dem Gruppendurchschnitt und den Top-Performern auf dem Markt",newTitle:"Wettbewerbsanalyse"},Wa={title:"Möchten Sie die vollständige Keyword-Liste anzeigen?",subtitle:"Verwenden Sie Cerebro, um Ihre Suche zu vertiefen und alle Keywords für die Suche zu entdecken"},Qa={noKeyword:"Keine Keyword-Ergebnisse gefunden",tooltip:"[%key_id:162605419%]",searchTrue:"Die Top Keywords sind als solche definiert, bei denen die ASIN organisch unter den Top 10 platziert sind, mit einem monatlichen Suchvolumen > 500",searchFalse:"Die Top Keywords sind als solche definiert, die sich mindestens 2 ASINs teilen, einen durchschnittlichen organischen Rang < 11 über alle ASINs hinweg aufweisen und ein Suchvolumen > 500 haben",metrics:{totalKeywords:{title:"Geteilte Keywords insgesamt",tooltip:"Anzahl der Keywords, bei denen mindestens 2 ASINs organisch auf Platz 306 liegen"},top10Keywords:{title:"Geteilte Top 10 Keywords",tooltip:"Anzahl der Keywords, bei denen mindestens 2 ASINs einen durchschnittlichen organischen Rang kleiner als 10 haben"},totalSearchVolume:{title:"Geteiltes Suchvolumen insgesamt",tooltip:"Kombiniertes Suchvolumen generiert durch insgesamt geteilte Keywords"},top10SearchVolume:{title:"Geteilte Top 10 Suchvolumen",tooltip:"Kombiniertes Suchvolumen der geteilten Top 10 Keywords"}},metricsSingle:{totalKeywords:{title:"Keywords insgesamt",tooltip:"Anzahl der Keywords, die organisch unter den top 306 sind"},top10Keywords:{title:"Top 10 Keywords",tooltip:"Anzahl der Keywords für ASIN, die organisch mit einem Rang < 10 ranken"},totalSearchVolume:{title:"Gesamtes Suchvolumen",tooltip:"Kombiniertes Suchvolumen generiert durch insgesamt Keywords"},top10SearchVolume:{title:"Top-10 Suchvolumen",tooltip:"Kombiniertes Suchvolumen der Top 10 Keywords"}}},Ya="Listing-Score",Za={tooltipContent:"Der Score basiert an der Anzahl der eingegebenen ASINs, die einen Platz für dieses Keyword einnehmen",title:"Top Keyword-Phrasen"},Ja={searchMagnet:"Suche in Magnet",searchAmazon:"Suche in Amazon"},Xa="Alle Produkte",er={topKeywords:"Top-Keywords.",keywordsSelect:"Keywords ausgewählt",phrase:"Begriff",search:"Suchvolumen",rank:"Organischer Rang",performanceScore:"Leistungsscore (durchschnitt)",organicPosition:"Organischer Rang (durchschn.)",searchVolume:"Suchvolumen",phraseNew:"Keyword-Phrasen",keywordSales:"Verkaufszahlen nach Keyword",cpr:"CPR"},tr={yes:"ja",no:"nein",asin:"ASIN",title:"Titel",score:"Score",text:{market:"Markendurchschnitt",group:"Gruppendurchschnitt",marketNew:"Top 5 Wettbewerber Durchschn.",groupNew:"Gesuchte Produkte Durchschn."},monthlySales:{title:"Absatz",tooltip:"Geschätzte Anzahl der verkauften Einheiten in den letzten 30 Tagen"},monthlyRevenue:{title:"Umsatz",tooltip:"Geschätzter Umsatz für ein Produkt in den letzten 30 Tagen"},price:{title:"Preis",tooltip:"Preis, zu dem das Produkt verkauft wird."},salesRank:{title:"BSR",tooltip:"(Bestseller-Rang) Von Amazon verliehener Rang für die Hauptkategorie"},reviewCount:{title:"Anzahl der Bewertungen",tooltip:"Gesamtzahl der Kundenbewertungen"},reviewsRating:{title:"Bewertung",tooltip:"Amazon-Kundenrezensionen reichen von schlecht (1,0) bis hervorragend (5,0)"},phrase:"Begriff",amazonChoice:"Amazon Choice",searchVolume:"Suchvolumen",organicPosition:"Organischer Rang (durchschn.)",performance:"Leistungsscore (durchschnitt)"},or="Produkt ansehen",nr={bad:"Die Produkte folgen wenigen Best Practices von Amazon",good:"Die Produkte folgen einigen Best Practices von Amazon",excellent:"Die Produkte folgen den meisten Best Practices von Amazon"},ir={bad:"Im Durchschnitt folgen die Produkte wenigen Best Practices von Amazon",good:"Im Durchschnitt folgen die Produkte einigen Best Practices von Amazon",excellent:"Im Durchschnitt folgen die Produkte den meisten Best Practices von Amazon"},sr="Die Punktzahl wird anhand der Anzahl der erfüllten Kriterien berechnet",ar="Die Punktzahl wird anhand der durchschnittlichen Anzahl der erfüllten Kriterien für die eingegebenen ASINs berechnet",rr={0:"Listing-Score",1:"Keyword-Analyse",2:"[%key_id:162605417%]"},lr={0:"Listing_Score",1:"Keyword_Analysis",2:"Market_Analysis",3:"Listing_Analyzer"},cr={looking:"Sie suchen nach schnelleren Ergebnissen?",signup:"Registrieren",foryou:"für Ihr kostenloses Konto, um eine Prioritätenanalyse zu erhalten."},dr={success:"Erfolg",fetchingData:"Daten werden abgerufen…"},ur={title:"Verlauf",close:"Schließen",table:{results:"ERGEBNISSE",asins:"ASINs",marketplace:"MARKTPLATZ",date:"DATUM",noResultsFound:"Keine Ergebnisse gefunden."},description:"Wähle eine frühere Listing Analyzer-Suche aus und lade sie erneut, ohne eine der deinen zugeteilten Suchen zu verwenden.",newTable:{product:"Produkt",searchType:"Typ-Suche",date:"Datum",marketplace:"Marketplace"}},pr={single:"Die Punktzahl wird anhand der Anzahl der erfüllten Kriterien berechnet",multi:"Die Punktzahl wird anhand der durchschnittlichen Anzahl der erfüllten Kriterien für die eingegebenen ASINs berechnet"},mr="Keywords erfolgreich zum Ordner „{targetFolderName}“ hinzugefügt",gr="Analyse läuft … Komplexere Analysen können bis zu einer Minute in Anspruch nehmen ({progress}/100)",hr="Kennzahlen für verschiedene ASINs vergleichen",yr={listingQualityScore:{title:"Listing-Qualitäts-Punktzahl (LQS)",tooltip:"Der Listing-Qualitäts-Score (LQS) ist eine Analyse des Textes, der Medien und der Rezensionen dieses Produkts"},sellerCountry:{title:"Land/Region des Verkäufers",tooltip:"Herkunftsland/Region des Verkäufers"},reviewsRating:{title:"Bewertung",tooltip:"Amazon-Kundenrezensionen reichen von schlecht (1,0) bis hervorragend (5,0)"},reviewCount:{title:"Bewertungsanzahl",tooltip:"Gesamtzahl der Kundenbewertungen"},age:{title:"Jahre (Monate)",tooltip:"Anzahl der Monate ab dem ursprünglichen Listendatum"},price:{title:"Preis",tooltip:"Preis, zu dem das Produkt verkauft wird."},monthlySales:{title:"Monatlicher Umsatz",tooltip:"Geschätzte Anzahl der verkauften Einheiten in den letzten 30 Tagen"},monthlyRevenue:{title:"Monatlicher Umsatz",tooltip:"Geschätzter Umsatz in den letzten 30 Tagen"},sellerType:{title:"Fulfillment",tooltip:"Lager- und Versandart<br/>Erfüllt durch Amazon (FBA = Fulfilled by Amazon)<br/>Erfüllt durch Händler (FBM = Fulfilled by Merchant)<br/>Verkauft durch Amazon (Amazon = Sold by Amazon)"},top10Keywords:{title:"Top 10 Keywords",tooltip:"Anzahl von Keywords, bei denen dieses Produkt in der Top 10 gelistet ist"},top10SearchVolume:{title:"Top-10 Suchvolumen",tooltip:"Gesamtes Suchvolumen für die Keywords, bei denen dieses Produkt unter den Top 10 gelistet ist"},metrics:"Metriken",product:{title:"Produkt"}},fr={most:"Größte Opportunity",mostTooltip:"Einfacheres Vordringen in die Nische aufgrund der Marktreife des Wettbewerbs",least:"Geringste Opportunity",leastTooltip:"Schwierigeres Vordringen in die Nische aufgrund der Marktreife des Wettbewerbs"},Sr={placeholder:"Geben Sie bis zu {maxAsins} Produkt-ASINs ein"},vr="Analyse des durchschnittlichen Listing-Qualitäts-Score (LQS)",br="Durchschn. LQS",wr={button:"Vollständige Keyword-Liste in Cerebro anzeigen"},Ar={phrase:"Von Kunden bei der Suche nach einem Produkt verwendete(s) Keyword/Keywordphrase",searchVolume:"Geschätzte Anzahl der monatlichen Suchanfragen für diese Keyword",performanceScore:"Der Leistungsindex ist ein Maßstab dafür, wie erfolgreich die aufgelisteten Wettbewerber für das vorgegebene Keyword sind.",organicPosition:"Durchschnittlicher organischer Rang von ASINs",asin:"Organischer Rang für diese ASIN",keywordSales:"Jedem Keyword zugeordnete geschätzte Zahl der monatlichen Verkäufe (als Stückzahl ausgedrückt)",cpr:"Geschätzte Anzahl der Einheiten, die innerhalb von 8 Tagen bei einer Suche nach diesem Keyword verkauft werden müssen, damit das Produkt in der oberen Hälfte der Seite 1 für dieses Keyword erscheint"},xr={csv:"… als CSV-Datei",xlsx:"… als XLSX-Datei"},kr={goToListingAnalyzer:"Zu Listing Analyzer wechseln",title:"Medienvergleich",description:"Medienanalyse von ASINs",productDetails:"Produktdetails",image:"Bild {position}",video:"Video {position}"},Tr={"la-101":"ASINs sollten 10 Zeichen enthalten.","la-102":"Ungültige ASIN: {asin}",asinAlreadyAdded:"ASIN wurde bereits hinzugefügt",common:{400:"Falsch eingegebene Daten oder keine Ergebnisse",402:"Sie haben die Höchstzahl an Nutzungen erreicht",403:"Zugriff abgelehnt",404:"Nicht gefunden",409:"Die eingegebenen Daten stehen im Widerspruch zu Ihren vorherigen Aktionen",422:"Die eingegebenen Daten sind ungültig",429:"Grenze erschöpft",500:"Unbekannter Fehler",503:"Gewünschte Funktion vorübergehend nicht verfügbar",undefined:"Unbekannter Fehler"},"la-1014":"Die Kategorie dieser ASIN wird derzeit nicht unterstützt"},Cr="Zu meiner Liste hinzufügen",zr="Zum Keyword Tracker hinzufügen",Nr="Analyse des Listing-Qualitäts-Score (LQS)",Pr="Listing-Qualitäts-Punktzahl",Ir="Plan abonnieren",Mr="Bald verfügbar",$r="Füge die Konkurrenz-ASINs oben zum Vergleich hinzu",Lr={text:"Die Tabellenmetriken sind in deiner Planstufe gesperrt.",button:"Upgrade für vollständige Ergebnisse"},jr={maintenance:"Es werden geplante Wartungsarbeiten durchgeführt, die die Datenerfassung beeinträchtigen können.",updateCogsBtn:"COGS aktualisieren",cogsIsMissing:"Die Umsatzkosten oder COGS (Cost of Goods Sold) fehlen für Produkte auf diesem Marktplatz. Aktualisieren Sie die COGS, um eine genauere Darstellung Ihrer Ausgaben zu erhalten."},Br={title:"Limit erreicht",text:"Du hast dein monatliches Limit erreicht für"},Fr={titles:{metricsAcrossASINs:"Beispieltitel",common:"Schalte diese und andere großartige Funktionen in Listing Analyzer",salesChart:"Verkaufsdiagramme sind ab {betterPlan} verfügbar"},subtitles:{metricsAcrossASINs:"Beispiel Untertitel",common:"Diese Funktion ist nur mit einem {plan}-Plan oder höher verfügbar."},plans:{free:"Free",starter:"Starter",platinum:"Platinum",diamond:"Diamond"},prices:{platinum:"$99/Monat",diamond:"$249/Monat"},features:{firstFeature:"Erste Funktion",mediaComparison:"Medienvergleich",monthlyUsesCount:"Anzahl der monatlichen Nutzungen",sellerRegion:"Region des Verkäufers",keywordSales:"Verkaufszahlen nach Keyword"},buttons:{acceptButton:"Mehr zu den Plänen",declineButton:"Nicht jetzt",notRightNow:"Nicht jetzt",comparePlans:"Pläne vergleichen"},priceString:"${price}/Mon"},Rr={button:"Wähle Meine Produkte zum hinzufügen aus",title:"Meine Produkte",text:"Wähle unten ein ASIN zur Analyse aus.",titleText:{one:"{count} Produkt",other:"{count} Produkte"},fields:{product:{title:"Produkt"}},selectSellerId:"Wähle eine Verkäufer-ID aus"},Dr={connectToAmazon:{header:{text:"Helium 10 wurde entwickelt, um deine Daten zu schützen und gibt diese nicht an Dritte weiter.",textResult:"Wir wissen, wie wichtig Datensicherheit für unsere Kunden ist. Wir versprechen, deine Daten niemals weiterzugeben oder zu verkaufen und stets die höchsten Sicherheitsstandards einzuhalten."},body:{title:"Hole mehr aus deiner Analyse heraus",text:"7.054 Benutzer haben im letzten Monat ihr Verkäuferkonto verbunden.",textResult:"Zeige die Absatzübersicht mit Meldungen, Traffic und Konversion an, wenn du dich mit deinem Amazon-Konto verbindest.",tooltip:"Durch Verbinden deines Amazon-Kontos erhältst du detailliertere Erkenntnisse über deine Produkte im Vergleich zu Konkurrenzprodukten."}},info:{title:"Füge eine Haupt-ASIN und bis zu 10 Konkurrenz-ASINs hinzu",text:"Analysiere dein eigenes Produkt, um herauszufinden, mit welchen Maßnahmen du die Leistung deines Angebots verbessern kannst. Füge ASINs von Wettbewerbern hinzu, um verschiedene Angebote zu analysieren, ihre Leistung zu vergleichen und Stärken/Schwächen zu ermitteln."},form:{uses:"{uses} von {total} Suchen diesen Monat genutzt"}},Er={description:"Finde Konkurrenzprodukte und füge sie zum Vergleich hinzu."},Vr={"Your request was made with invalid credentials.":"Deine Anfrage wurde mit ungültigen Anmeldedaten gestellt.","Not found":"ASIN nicht gefunden","Products not found":"Produkte nicht gefunden","Monitoring already disabled":"Überwachung bereits deaktiviert","Monitoring already enabled":"Überwachung bereits aktiviert"},Or={title:"Meine Liste",subtitle:"Wähle unten bis zu {number} ASIN(s) zur Analyse aus.",table:{getTitleText:"{total} Produkte"}},Ur={copy:"{name} kopieren",copied:"{name} kopiert"},Kr={singleSearch:"Einzelsuche",multiSearch:"Mehrfachsuche"},qr={title:"Analysieren Sie Ihr Produktangebot und Ihren Wettbewerb und beurteilen Sie den Markt, auf dem Sie verkaufen.",productTitleLoading:"Laden..."},Gr={title:"Verkaufsübersicht",tooltip:"In der Absatzübersicht findest du aktuelle Absatzstatistiken und Warnmeldungen für deine ASIN, einschließlich FBA und FBM, sowie alle Absätze unter dieser ASIN.",tabs:{sales:"Absatz",units:"Einheiten"},periodsPlaceholder:"Periode",periods:{today:"Heute",yesterday:"Gestern",previousDay:"Vorheriger Tag",lastNDays:"Letzte {N} Tage"},noData:"Keine Daten",export:{sales:"Absatz ({date})",salesTrend:"Verkaufstrend ({date})",units:"Verkaufseinheiten ({date})",unitsTrend:"Trend Verkaufseinheiten ({date})",salesEstimation:"Absatzschätzung ({date})",salesEstimationTrend:"Absatztrend-Schätzung ({date})",unitsEstimation:"Verkaufseinheiten-Schätzung ({date})",unitsEstimationTrend:"Verkaufseinheiten-Trendschätzung ({date})"},profitsButton:{title:"Siehe mehr unter „Profits“",tooltip:'Unter "Profits" ist die Produktleistung für diese ASIN detaillierter erklärt.'}},_r={button:"Benachrichtigungen einrichten",gross:"Bruttoabsatz / Einheiten",title:"Alerts",view:{one:"{number} von {count} Benachrichtigung werden angezeigt",other:"{number} von {count} Benachrichtigungen werden angezeigt"},viewAll:"Alle anzeigen",emptyAlerts:"Für dieses Produkt gibt es an diesem Tag keine Benachrichtigungen",setUpAlerts:{text:"Frühere Ereignisänderungen für dieses Produkt anzeigen",button:"Benachrichtigungen einrichten"},commonPart:"von {from} bis {to}",tooltip:"Aktiviere ASIN-Überwachung, um Änderungen nachzuverfolgen (alle SKUs unter derselben ASIN werden für die Überwachung aktiviert).",eventType:{1:"Produkttitel geändert",2:"Produktkategorie geändert",3:"Produktkategorie geändert",4:"Produktbild geändert",5:"Anzahl der Verkäufer geändert",6:"Buy Box geändert",7:"Preis geändert",8:"Produktbreite geändert",9:"Produkthöhe geändert",10:"Produktlänge geändert",11:"Produktgewicht geändert",12:"Produkt-BSR geändert",13:"Produkt-Screenshots erstellt",14:"Buy Box verloren",15:"Buy Box gewonnen",16:"Produktabmessungen geändert",17:"Neue 5-Sterne-Produktbewertung",18:"Neue 4-Sterne-Produktbewertung",19:"Neue 3-Sterne-Produktbewertung",20:"Neue 2-Sterne-Produktbewertung",21:"Neue 1-Stern-Produktbewertung",22:"Neue 1-3-Sterne-Produktbewertung",23:"Listing unterdrückt",24:"Listing nicht mehr unterdrückt",25:"Als „Erwachsen“ markiert",26:"Als „Nicht erwachsen“ markiert",27:"FBA-Fulfillment-Gebühr geändert",28:"Nachbestellungsstatus geändert",29:"Übertragungsstatus geändert",30:"Produktbeschreibung geändert",31:"Produktgliederungspunkte geändert"}},Hr={downloadCSV:"CSV-Bericht herunterladen",downloadXLS:"XLS herunterladen",downloadPNG:"PNG-Bild herunterladen",downloadJPEG:"JPEG-Bild herunterladen"},Wr={day:{one:"Tag",other:"Tage"},year:{one:"Jahr",other:"Jahre"},allTime:"Alle Zeit"},Qr={bsr:"Verkaufsrang"},Yr={text:"Ups. Fehler!",button:"Neu laden"},Zr={title:"Verbessere deinen Score",text:"Nimm Kontakt mit einem unserer verifizierten Partner auf, der dir bei deinem Listing hilft.",button:"Partner durchsuchen"},Jr={product:{myProduct:"Mein Produkt"},backToSearch:"Zurück zur Suche",BuyBoxInfo:{LQS:"LQS",listingQualityScoreBox:"Listing-Qualitäts-Punktzahl",priceBox:"Preis",stockBox:"Bestand",reviewCountBox:"Bewertungsanzahl",ageBox:"Alter (Monate)"}},Xr="Vergleiche Metriken ASIN-übergreifend, um den Listing-Vorteil und -Nachteil zu finden.",el={columns:{product:{title:"Produkt",tooltip:""},listingQualityScore:{title:"LQS",tooltip:"Der Listing-Qualitäts-Score (LQS) ist eine Analyse des Textes, der Medien und der Rezensionen dieses Produkts"},categoryBSR:{title:"Kategorie BSR",tooltip:"Kategorie Best Seller Rank (BSR)"},sellerRegion:{title:"Region des Verkäufers",tooltip:"Herkunftsland/Region des Verkäufers"},stock:{title:"Bestand",tooltip:"Geschätzte Anzahl der verbleibenden Lagerbestände im Inventar",value:"{number} Bestelllimit"},coupon:{title:"Gutschein",tooltip:"Aktueller Gutscheincode"},price:{title:"Preis",tooltip:"Preis im Verlauf mit Preisentwicklung"},monthlySales:{title:"Monatlicher Umsatz",tooltip:"Monatsverkäufe im Verlauf mit Absatzentwicklung"},monthlyRevenue:{title:"Monatlicher Umsatz",tooltip:"Monatlicher Umsatz"},reviewsCount:{title:"Bewertung",tooltip:"Zahl der Rezensionen mit Bewertung"},seller:{title:"Verkäufer",tooltip:"Name und Nummer des Verkäufers",sellerNameTooltip:"Verkäufername",numberOfSellersTooltip:"Anzahl der aktiven Verkäufer"},lastYearSales:{title:"Absatz des Vorjahres",tooltip:"Absatz des Vorjahres mit Verkaufstrend"},shippingDetails:{title:"Versandinformationen",tooltip:"Versandgrößenstufen mit Maßen"},weight:{title:"Gewicht (Pfd)",tooltip:"Paketgewicht (Pfd)"},storageFee:{title:"Lagergebühr",tooltip:"Lagergebühr (1.000 Einheiten/Monat)",janSept:"Jan-Sep",octDec:"Okt-Dez"},bestSalesPeriod:{title:"Bester Verkaufszeitraum",tooltip:"Kalendermonat, in dem ein Produkt sein höchstes Verkaufsvolumen verzeichnet"},age:{title:"Jahre (Monat)",tooltip:"Durchschnittliches Listingalter für alle Top-Produkte"},numberOfImages:{title:"Anzahl der Bilder",tooltip:"Anzahl der Bilder auf einer Produkt Listing"},variationCount:{title:"Variantenanzahl",tooltip:"Anzahl der Produktvariationen"},salesToReviews:{title:"Verkäufe per Bewertung",tooltip:"Monatliche Verkäufe / Gesamtzahl der Bewertungen"},top10Keywords:{title:"Top 10 Keywords",tooltip:"Anzahl von Keywords, bei denen dieses Produkt in der Top 10 gelistet ist"},top10SearchVolume:{title:"Top-10 Suchvolumen",tooltip:"Gesamtes Suchvolumen für die Keywords, bei denen dieses Produkt unter den Top 10 gelistet ist"},title:{title:"Titel"},category:{title:"Kategorie"},bsr:{title:"BSR"},subcategory:{title:"Unterkategorie"},priceChange:{title:"Preisänderung"},salesChange:{title:"Umsatzänderung"},reviewCount:{title:"Bewertungsanzahl"},reviewsRating:{title:"Bewertungen Bewertung"},salesYearOverYear:{title:"Umsatz Jahr für Jahr"},sizeTier:{title:"Größen-Kategorie"},width:{title:"Breite"},height:{title:"Höhe"},length:{title:"Länge"}}},tl="Der Listing-Qualitäts-Score (LQS) ist eine Analyse des Textes, der Medien und der Rezensionen dieses Produkts",ol={title:"Absatzschätzung-Übersicht",tooltip:"Die Absatzschätzung-Übersicht zeigt geschätzte Absatzstatistiken für die ASIN, einschließlich FBA und FBM, und ermöglicht dir, Ergebnisse basierend auf Datum, Verkaufssumme und Verkaufseinheiten zu filtern."},nl={1:{title:"Listing-Qualitäts-Punktzahl",description:"Berechnen Sie sofort einen personalisierte Score zwischen 1 und 10, der Texte, Medien und Bewertungen enthält, um festzustellen, ob Ihr Angebot den Best Practices entspricht."},2:{title:"Marktanalyse",description:"Messen Sie sowohl die Marketingstrategien Ihrer Marke als auch die Ihrer Konkurrenz und deren Einfluss auf potenzielle Käufer."},3:{title:"Top Keywords-Analysen",description:"Entdecken Sie, welche Keywords und Keyword-Phrasen auf Amazon den größten Einfluss haben."}},il={1:"Kleine Standardgröße",2:"Große Standardgröße",3:"Kleine Übergröße",4:"Mittlere Übergröße",5:"Große Übergröße",6:"Sonderübergröße",7:"Umschlag",8:"Klein und leicht",9:"Kleiner Brief",10:"Großer Brief",11:"Extragroßer Brief",12:"Kleiner Umschlag",13:"Standard-Umschlag",14:"Großer Umschlag",15:"Standard-Paket",16:"Klein",17:"Standardgröße",18:"Übergröße",19:"Standard-Übergröße",20:"Schwer und sperrig",21:"Übergröße",22:"Extra großer Umschlag",23:"Kleines Paket","-1":"N/A"},sl={janSept:"Jan-Sep",octDec:"Okt-Dez"},al={error:Na,inputs:Pa,buttons:Ia,topPanel:Ma,landingPage:$a,analyzeLoading:La,laPreviewMain:ja,listingAnalysis:Ba,unlock:Fa,asinInputForm:Ra,enterNew:Da,breakdowns:Ea,onIt:Va,signUpFooter:Oa,addToMyList:Ua,headerButtons:Ka,keywordsTable:qa,breadcrumbs:Ga,noData:_a,marketAnalysis:Ha,footer:Wa,numberKeywordsList:Qa,listingScore:Ya,tableHeader:Za,tableBody:Ja,allProducts:Xa,table:er,model:tr,card:or,descriptionSingleMap:nr,descriptionMultiMap:ir,singleIfo:sr,multiInfo:ar,exportButton:rr,fileName:lr,progressBar:cr,common:dr,history:ur,listingScoreInfo:pr,keywordsAddedToFolderMessage:mr,analyzing:gr,asinsMetricsTitle:hr,asinsMetrics:yr,opportunity:fr,tagInput:Sr,listingAnalysisNew:vr,listingScoreNew:br,tableFooter:wr,tableTooltips:Ar,exportOptions:xr,mediaComparison:kr,errors:Tr,addToMyListButton:Cr,addToKeywordTrackerButton:zr,listingAnalysisNewSingle:Nr,listingScoreNewSingle:Pr,getPlan:Ir,comingSoon:Mr,addCompetitor:$r,upgradeBanner:Lr,banners:jr,limitModal:Br,upgradeModal:Fr,myProducts:Rr,landingPageNew:Dr,getCompetitors:Er,alertsErrors:Vr,addFromMyListModal:Or,copyButton:Ur,widgets:Kr,resultPageNew:qr,salesChart:Gr,alerts:_r,highchart:Hr,dateRanges:Wr,chartAxis:Qr,chartError:Yr,improveYourScore:Zr,topPanelResult:Jr,asinsMetricsTooltip:Xr,asinsMetricsNew:el,listingAnalysisNewTooltip:tl,salesEstimationChart:ol,cards:nl,sizeTier:il,storageFee:sl},rl={asinError:"Asin has already been added",searchId:"searchId field is required",provider:"1",error:"Error",serverError:"Server error",occurred:"An error occurred",tryLater:"We are sorry for the inconvenience. Please try again later."},ll={newSearch:{asin:"Enter products ASIN",url:"Enter product ASIN or URL…",new:"New ASIN/URL..."}},cl={learn:"Learn",learnMore:"Learn more",learnTooltip:"Learn cerebro",startNewSearch:"Start new search",analyze:"Analyze",export:"Export",addToMyList:"Add To My List",ok:"OK",excel:"Excel",csv:"CSV",cerebro:"Continue in Cerebro",cancel:"Cancel",add:"Add",exportData:"Export Data",mediaComparison:"Media Comparison",mediaComparisonTooltip:"View media comparison (images/video) for all ASINS in this search",close:"Close",upgradeNow:"Upgrade Now",connectToAmazon:"Connect to Amazon",addFromMyList:"Add from My List",decline:"Not Right Now"},dl={title:"Listing Analyzer",description:"Analyze your product listing, your competitors and evaluate the market in which you sell.",backToSearch:"Back to Search"},ul={balance:"monthly searches available",title:"Analyze product listings with Listing Analyzer",subTitle:" Research up to 10 Amazon product listings to see the quality of your and your competitors’ listings.",mainASINTitle:"Enter a main ASIN",mainASINPlaceholder:"Enter a main ASIN",selectMyProduct:"Select My Products to Add",competitorASINsTitle:"Up to {maxAsins} competitor ASINs",runAnalysis:"Run Analysis"},pl="Analyzing... please allow up to a minute for more complex analyses ",ml={pageTitle:"Listing Analyzer Preview",youHave:"You have ",searchesLeft:" searches left.",marketplace:"Marketplace",haveAccount:"Already have an account? ",discoverProduct:"Discover your product listing’s full potential with our in-depth analysis"},gl="Listing Quality Analysis",hl={unlockFullReport:"Unlock the full report",unlockYourReport:"Unlock your full report",signupUnlock:"Sign up to unlock the full report",signupForFree:"Sign up for free",login:"Log In"},yl={zeroSearches:"You have 0 searches left",enterAsin:"Enter a product ASIN or URL",analyze:"Analyze"},fl={title:"Enter new product"},Sl={passed:"ASINs that passed",failed:"ASINs that failed"},vl="We’re on it! Your analysis is being processed.",bl={fullAccess:"Get full access to your Listing Quality Analysis",simplySignUp:"Simply sign up for a Helium 10 account",whenYouSignUp:"when you sign up for a Helium 10 account",signUpForFree:"Sign up for free"},wl={addToFolder:"Add to folder:",folder:"Folder",keywords:"Keywords",link:"Create New Folder"},Al={topKeywords:"top keywords",keywordsSelected:"keywords selected"},xl={0:"ASIN does not rank in top 10 organically for any keyword with monthly search volume > 500. Use Cerebro to discover more keywords and optimize keyword strategy",1:"Searched ASINs do not share any top ranking keywords"},kl={listingSearch:"Listing Analyzer search",completeAnalysis:" / Your complete analysis"},Tl="No data available currently for selected ASIN",Cl={title:"Market Analysis",subtitle:"Select an individual ASIN to see additional analyses",titleTooltip:"Compares selected ASIN's performance to the group average and top performers in the market",newTitle:"Competitor Analysis"},zl={title:"Want to see the full list of keywords?",subtitle:"Use Cerebro to deepen your research and discover all the keywords for your search"},Nl={noKeyword:"No keyword results found",tooltip:"Top Keywords Analysis",searchTrue:"Top keywords are defined as those that at least 2 words count, Keyword Sales > 100, Title Density > 1 and Search Volume Trend > 5%",searchFalse:"Top keywords are defined as those that at least 2 ASINs share, with average competitor rank between 1 to 40, at least 4 ranking competitors, have search volume > 500",metrics:{totalKeywords:{title:"Total Shared Keywords",tooltip:"Number of keywords where at least 2 ASINs are organically in the top 306"},top10Keywords:{title:"Shared Top 10 Keywords",tooltip:"Number of keywords that at least 2 ASINs organically rank on with average rank < 10"},totalSearchVolume:{title:"Total Shared Search Volume",tooltip:"Combined Search Volume generated by Total Shared Keywords"},top10SearchVolume:{title:"Shared Top 10 Search Volume",tooltip:"Combined Search Volume generated by Share Top 10 Keywords"}},metricsSingle:{totalKeywords:{title:"Total Keywords",tooltip:"Number of keywords are organically in the top 306"},top10Keywords:{title:"Top 10 Keywords",tooltip:"Number of keywords for ASIN organically rank on with rank < 10"},totalSearchVolume:{title:"Total Search Volume",tooltip:"Combined Search Volume generated by Total Keywords"},top10SearchVolume:{title:"Top 10 Search Volume",tooltip:"Combined Search Volume generated by Top 10 Keywords"}}},Pl="Listing Score",Il={tooltipContent:"Score based on number of entered ASIN’s that rank on this keyword",title:"Top Keyword Phrases"},Ml={searchMagnet:"Search in Magnet",searchAmazon:"Search in Amazon"},$l="All products",Ll={topKeywords:"top keywords.",keywordsSelect:"keywords selected",phrase:"Phrase",search:"Search Volume",rank:"Organic Rank",performanceScore:"Performance Score (Avg)",organicPosition:"Organic Rank (Avg)",searchVolume:"Search Volume",phraseNew:"Keyword Phrases",keywordSales:"Keyword Sales",cpr:"CPR"},jl={yes:"yes",no:"no",asin:"ASIN",title:"Title",score:"Score",text:{market:"Market Avg.",group:"Group Avg.",marketNew:"Top 5 Competitors Avg.",groupNew:"Searched Products Avg."},monthlySales:{title:"Sales",tooltip:"Estimated number of units sold over the past 30 days"},monthlyRevenue:{title:"Revenue",tooltip:"Estimated revenue for a product over the past 30 days"},price:{title:"Price",tooltip:"Price at which the product is sold."},salesRank:{title:"BSR",tooltip:"(Best Seller Rank) Amazon-awarded rank for main category"},reviewCount:{title:"Number of Reviews",tooltip:"Total number of customer reviews"},reviewsRating:{title:"Rating",tooltip:"Amazon customer reviews rating from poor(1.0) to outstanding(5.0)"},phrase:"Phrase",amazonChoice:"Amazon Choice",searchVolume:"Search Volume",organicPosition:"Organic Rank (avg)",performance:"Performance Score (avg)"},Bl="View product",Fl={bad:"Product follows few Amazon best practices",good:"Product follows some Amazon best practices",excellent:"Product follows most Amazon best practices"},Rl={bad:"On average, products follow few Amazon best practices",good:"On average, products follow some Amazon best practices",excellent:"On average, products follow most Amazon best practices"},Dl="Score is calculated based on the number of criteria passed",El="Score is calculated based on average number of criteria passed for entered ASINs",Vl={0:"Listing Score",1:"Keyword Analysis",2:"Market Analysis"},Ol={0:"Listing_Score",1:"Keyword_Analysis",2:"Market_Analysis",3:"Listing_Analyzer"},Ul={looking:"Looking for quicker results?",signup:"Sign up",foryou:"for your free account to get priority analysis."},Kl={success:"Success",fetchingData:"Fetching data…"},ql={title:"History",close:"Close",table:{results:"RESULTS",asins:"ASINS",marketplace:"MARKETPLACE",date:"DATE",noResultsFound:"No results found."},description:"Find a previous Listing Analyzer search and reload it without using any of your allotted searches.",newTable:{product:"Product",searchType:"Search Type",date:"Date",marketplace:"Marketplace"}},Gl={single:"Score is calculated based on the number of criteria passed",multi:"Score is calculated based on average number of criteria passed for entered ASINs"},_l='Keywords successfully added to "{targetFolderName}" folder',Hl="Analyzing...please allow up to a minute for more complex analyses  ({progress}/100)",Wl="Compare Key Metrics Across ASINs",Ql={listingQualityScore:{title:"Listing Quality Score (LQS)",tooltip:"Listing Quality Score (LQS) is an analysis of this product's copy, media and reviews"},sellerCountry:{title:"Seller Country/Region",tooltip:"Seller's country/region of origin"},reviewsRating:{title:"Rating",tooltip:"Amazon customer reviews rating from poor(1.0) to outstanding(5.0)"},reviewCount:{title:"Review Count",tooltip:"Total number of customer reviews"},age:{title:"Age (Months)",tooltip:"Number of months from original list date"},price:{title:"Price",tooltip:"Price at which the product is sold."},monthlySales:{title:"Monthly Sales",tooltip:"Estimated number of units sold over the past 30 days"},monthlyRevenue:{title:"Monthly Revenue",tooltip:"Estimated revenue over the past 30 days"},sellerType:{title:"Fulfillment",tooltip:"Method of storage and shipping<br/>FBA = Fulfilled by Amazon<br/>FBM = Fulfilled by Merchant<br/>Amazon = Sold by Amazon"},top10Keywords:{title:"Top 10 Keywords",tooltip:"Number of keywords in which this product ranks in the top 10"},top10SearchVolume:{title:"Top 10 Search Volume",tooltip:"Total search volume for the keywords in which this product ranks in the top 10"},metrics:"Metrics",product:{title:"Product"}},Yl={most:"Most Opportunity",mostTooltip:"Easier to break into the niche based on maturity of competition",least:"Least Opportunity",leastTooltip:"More difficult to break into the niche based on maturity of competition"},Zl={placeholder:"Enter up to {maxAsins} product ASINs"},Jl="Average Listing Quality Score (LQS) Analysis",Xl="Average LQS",ec={button:"See Full List of Keywords in Cerebro"},tc={phrase:"Keyword or phrase used by customers in search for a product",searchVolume:"Estimated number of times this keyword is searched for monthly",performanceScore:"Performance score is a measure of how successful the listed competitors for the given keyword",organicPosition:"Average organic rank of ASINs",asin:"Organic rank for this ASIN",keywordSales:"Estimated number of monthly sales (in number of units) attributed to each keyword",cpr:"Estimated number of units that need to be sold over 8 days, resulting from a search for this keyword in order for the product to rank on top half page one for this keyword"},oc={csv:"...as a CSV file",xlsx:"...as a XLSX file"},nc={goToListingAnalyzer:"Go to Listing Analyzer",title:"Media Comparison",description:"Media analysis of ASINs",productDetails:"Product Details",image:"Image {position}",video:"Video {position}"},ic={"la-101":"ASIN's should contain 10 characters.","la-102":"Invalid ASIN: {asin}",asinAlreadyAdded:"ASIN has already been added",common:{400:"Wrong entered data or no results",402:"You have reached the limit of the uses",403:"Access denied",404:"Not found",409:"Entered data conflicts with your previous actions",422:"Entered data is invalid",429:"Limit exhausted",500:"Unknown error",503:"Requested functional temporary unavailable",undefined:"Unknown error"},"la-1014":"This ASIN's category is not currently supported"},sc="Add to My List",ac="Add to Keyword Tracker",rc="Listing Quality Score (LQS) Analysis",lc="Listing Quality Score",cc="Get Plan",dc="Coming soon",uc="Add competitor ASINs above for comparison",pc={text:"Table metrics are locked for your plan level.",button:"Upgrade for Full Results"},mc={maintenance:"We are performing planned maintenance which may affect data collection.",updateCogsBtn:"Update COGS",cogsIsMissing:"COGS (Cost of Goods Sold) is missing for products in this marketplace. Update COGS to improve the accuracy of your expenses."},gc={title:"Limit reached",text:"You've reached your monthly limit for"},hc={titles:{metricsAcrossASINs:"Example title",common:"Unlock this and other great features in Listing Analyzer",salesChart:"Sales charts are available from {betterPlan} and above"},subtitles:{metricsAcrossASINs:"Example subtitle",common:"This feature is only available with a {plan} Plan or higher."},plans:{free:"Free",starter:"Starter",platinum:"Platinum",diamond:"Diamond"},prices:{platinum:"$99/mo",diamond:"$249/mo"},features:{firstFeature:"First Feature",mediaComparison:"Media Comparison",monthlyUsesCount:"Monthly Uses Count",sellerRegion:"Seller Region",keywordSales:"Keyword Sales"},buttons:{acceptButton:"Learn About Plans",declineButton:"Not Right Now",notRightNow:"Not Right Now",comparePlans:"Compare Plans"},priceString:"${price}/mo"},yc={button:"Select My Products to Add",title:"My Products",text:"Select one ASIN below to analyze.",titleText:{one:"{count} Product",other:"{count} Products"},fields:{product:{title:"Product"}},selectSellerId:"Select a seller ID"},fc={connectToAmazon:{header:{text:"Helium 10 is designed to protect your information and is not sharing it with third-party sources.",textResult:"We know how important data security is to our customers. We promise never to share or sell your data, and to maintain the highest security standards."},body:{title:"Get More from your Analysis",text:"7,054 users connected their Seller Account last month.",textResult:"See sales overview with Alerts, Traffic and Conversion when you connect your Amazon account.",tooltip:"Connecting your Amazon account will provide more detailed insight of your products compared with competitors' products."}},info:{title:"Add a main ASIN and up to 10 competitor ASINs",text:"Analyze your own product to identify actions to improve your listing performance. Add competitor ASINs to analyze multiple listings, compare performance and identify strengths/weaknesses."},form:{uses:"{uses} of {total} searches used this month"}},Sc={description:"Find and add competing products for comparison."},vc={"Your request was made with invalid credentials.":"Your request was made with invalid credentials.","Not found":"ASIN not found","Products not found":"Products not found","Monitoring already disabled":"Monitoring already disabled","Monitoring already enabled":"Monitoring already enabled"},bc={title:"My List",subtitle:"Select up to {number} ASIN(s) below to analyze.",table:{getTitleText:"{total} Products"}},wc={copy:"Copy {name}",copied:"{name} Copied"},Ac={singleSearch:"Single Search",multiSearch:"Multi Search"},xc={title:"Analyze your product listing, your competitors and evaluate the the market in which you sell.",productTitleLoading:"Loading..."},kc={title:"Sales Overview",tooltip:"The Sales Overview displays up-to-date sales statistics and alerts for the ASIN, including FBA and FBM, and allows you to filter results based on date, sales amount, and sales units.",tabs:{sales:"Sales",units:"Units"},periodsPlaceholder:"Period",periods:{today:"Today",yesterday:"Yesterday",previousDay:"Previous day",lastNDays:"Last {N} days"},noData:"No Data",export:{sales:"Sales ({date})",salesTrend:"Sales trend ({date})",units:"Sales units ({date})",unitsTrend:"Sales units trend ({date})",salesEstimation:"Sales estimation ({date})",salesEstimationTrend:"Sales estimation trend ({date})",unitsEstimation:"Sales estimation units ({date})",unitsEstimationTrend:"Sales estimation units trend ({date})"},profitsButton:{title:"See More in Profits",tooltip:"Profits explains more detailed product performace for this ASIN."}},Tc={button:"Set Up Alerts",gross:"Gross Sales / Units",title:"Alerts",view:{one:"Viewing {number} of {count} Alert",other:"Viewing {number} of {count} Alerts"},viewAll:"View All",emptyAlerts:"This product doesn't have any alerts on this day",setUpAlerts:{text:"View historical event changes for this product",button:"Set up Alerts"},commonPart:"from {from} to {to}",tooltip:"Enable ASIN monitoring to track changes (All SKUs under the same ASIN will be enable monitoring).",eventType:{1:"Product Title changed",2:"Product Category changed",3:"Product Category changed",4:"Product Image changed",5:"Number of sellers changed",6:"Buy Box changed",7:"Price changed",8:"Product Width changed",9:"Product Height changed",10:"Product Length changed",11:"Product Weight changed",12:"Product BSR changed",13:"Product Screenshots created",14:"Buy Box lost",15:"Buy Box won",16:"Product Dimensions changed",17:"New 5 star product review",18:"New 4 star product review",19:"New 3 star product review",20:"New 2 star product review",21:"New 1 star product review",22:"New 1-3 star product review",23:"Listing suppressed",24:"Listing no longer suppressed",25:"Marked as adult",26:"Marked as not adult",27:"FBA fulfillment fee changed",28:"Reorder status changed",29:"Transfer status changed",30:"Product description changed",31:"Product bullet points changed"}},Cc={downloadCSV:"Download CSV",downloadXLS:"Download XLS",downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image"},zc={day:{one:"Day",other:"Days"},year:{one:"Year",other:"Years"},allTime:"All time"},Nc={bsr:"Sales Rank"},Pc={text:"Ooops. Error!",button:"Reload"},Ic={title:"Improve Your Score",text:"Contact one of our verified partners to help you with your listing.",button:"Browse Partners"},Mc={product:{myProduct:"My Product"},backToSearch:"Back to Search",BuyBoxInfo:{LQS:"LQS",listingQualityScoreBox:"Listing Quality Score",priceBox:"Price",stockBox:"Stock",reviewCountBox:"Review Count",ageBox:"Age (months)"}},$c="Compare metrics across ASINs to find the listing advantage and disadvantage.",Lc={columns:{product:{title:"Product",tooltip:""},listingQualityScore:{title:"LQS",tooltip:"Listing Quality Score (LQS) is an analysis of this product's copy, media and reviews"},categoryBSR:{title:"Category BSR",tooltip:"Category Best Seller Rank"},sellerRegion:{title:"Seller Region",tooltip:"Seller's country/region of origin"},stock:{title:"Stock",tooltip:"Estimated number of stocks left in the inventory",value:"{number} Order Limit"},coupon:{title:"Coupon",tooltip:"Current coupon code"},price:{title:"Price",tooltip:"Historical Price with Price Trend"},monthlySales:{title:"Monthly Sales",tooltip:"Historical Monthly Sales with Sales Trend"},monthlyRevenue:{title:"Monthly Revenue",tooltip:"Monthly Revenue"},reviewsCount:{title:"Review",tooltip:"Reviews Counts with Rating"},seller:{title:"Seller",tooltip:"Seller Name and Number of Seller",sellerNameTooltip:"Seller Name",numberOfSellersTooltip:"Number of Active Sellers"},lastYearSales:{title:"Last Year Sales",tooltip:"Last Year Sales with Sales Trend"},shippingDetails:{title:"Shipping Details",tooltip:"Shipping Size Tier with Dimensions"},weight:{title:"Weight (lb)",tooltip:"Package Weight(lb)"},storageFee:{title:"Storage Fee",tooltip:"Storage Fee (1,000 units/month)",janSept:"Jan - Sep",octDec:"Oct - Dec"},bestSalesPeriod:{title:"Best Sales Period",tooltip:"Calendar Month in Which a Product Sees its Highest Sales Volume"},age:{title:"Age (Month)",tooltip:"Average Listing Age for the Top Products"},numberOfImages:{title:"Number of Images",tooltip:"Number of Images on a Product Listing"},variationCount:{title:"Variation Count",tooltip:"Number of Product Variations"},salesToReviews:{title:"Sales to Reviews",tooltip:"Monthly Sales / Total Reviews Count"},top10Keywords:{title:"Top 10 Keywords",tooltip:"Number of keywords in which this product ranks in the top 10"},top10SearchVolume:{title:"Top 10 Search Volume",tooltip:"Total search volume for the keywords in which this product ranks in the top 10"},title:{title:"Title"},category:{title:"Category"},bsr:{title:"BSR"},subcategory:{title:"Subcategory"},priceChange:{title:"Price Change"},salesChange:{title:"Sales Change"},reviewCount:{title:"Review Count"},reviewsRating:{title:"Reviews Rating"},salesYearOverYear:{title:"Sales Year Over Year"},sizeTier:{title:"Size Tier"},width:{title:"Width"},height:{title:"Height"},length:{title:"Length"}}},jc="Listing Quality Score (LQS) is an analysis of this product's copy, media and reviews",Bc={title:"Sales Estimation Overview",tooltip:"The Sales Estimation Overview displays estimated sales statistics for the ASIN, including FBA and FBM, and allows you to filter results based on date, sales amount, and sales units."},Fc={1:{title:"Listing Quality Score",description:"Instantly calculate a personalized score between 1 and 10 that includes copy, media, and review breakdowns to determine if your listing follows best practices."},2:{title:"Market Analysis",description:"Measure both your brand’s and competitors’ marketing strategies and their effectiveness on potential buyers."},3:{title:"Top Keywords Analysis",description:"Discover which keywords and keyword phrases are making the biggest impact on Amazon."}},Rc={1:"Small Standard-Size",2:"Large Standard-Size",3:"Small Oversize",4:"Medium Oversize",5:"Large Oversize",6:"Special Oversize",7:"Envelope",8:"Small and Light",9:"Small Letter",10:"Large Letter",11:"Extra Large Letter",12:"Small Envelope",13:"Standard Envelope",14:"Large Envelope",15:"Standard Parcel",16:"Small",17:"Standard Size",18:"Oversize",19:"Standard Oversize",20:"Heavy and bulky",21:"Supersize",22:"Extra Large Envelope",23:"Small Parcel","-1":"N/A"},Dc={janSept:"Jan - Sep",octDec:"Oct - Dec"},Ec={leftActions:{unselected:"{products} Products",selected:"{products} Products Selected"}},Vc={modal:{title:"Connect your Seller Account for insights into Amazon Brand Registry data within Cerebro",sellers:"{number} users connected their Seller Account last month.",text:{part1:"Securely connect your Amazon account to Helium 10 to unlock powerful tools and insights for your business.",part2:"Amazon Brand Registry data within Cerebro is only available to sellers who are enrolled in Amazon’s Brand Registry program.",part2New:"Amazon Brand Registry data within Cerebro or Magnet is only available to sellers who are enrolled in Amazon’s Brand Registry program."},acceptButton:"Connect to Amazon",titleNew:"Connect your Seller Account for insights into Amazon Brand Registry data within Cerebro or Magnet"}},Oc={error:rl,inputs:ll,buttons:cl,topPanel:dl,landingPage:ul,analyzeLoading:pl,laPreviewMain:ml,listingAnalysis:gl,unlock:hl,asinInputForm:yl,enterNew:fl,breakdowns:Sl,onIt:vl,signUpFooter:bl,addToMyList:wl,headerButtons:Al,keywordsTable:xl,breadcrumbs:kl,noData:Tl,marketAnalysis:Cl,footer:zl,numberKeywordsList:Nl,listingScore:Pl,tableHeader:Il,tableBody:Ml,allProducts:$l,table:Ll,model:jl,card:Bl,descriptionSingleMap:Fl,descriptionMultiMap:Rl,singleIfo:Dl,multiInfo:El,exportButton:Vl,fileName:Ol,progressBar:Ul,common:Kl,history:ql,listingScoreInfo:Gl,keywordsAddedToFolderMessage:_l,analyzing:Hl,asinsMetricsTitle:Wl,asinsMetrics:Ql,opportunity:Yl,tagInput:Zl,listingAnalysisNew:Jl,listingScoreNew:Xl,tableFooter:ec,tableTooltips:tc,exportOptions:oc,mediaComparison:nc,errors:ic,addToMyListButton:sc,addToKeywordTrackerButton:ac,listingAnalysisNewSingle:rc,listingScoreNewSingle:lc,getPlan:cc,comingSoon:dc,addCompetitor:uc,upgradeBanner:pc,banners:mc,limitModal:gc,upgradeModal:hc,myProducts:yc,landingPageNew:fc,getCompetitors:Sc,alertsErrors:vc,addFromMyListModal:bc,copyButton:wc,widgets:Ac,resultPageNew:xc,salesChart:kc,alerts:Tc,highchart:Cc,dateRanges:zc,chartAxis:Nc,chartError:Pc,improveYourScore:Ic,topPanelResult:Mc,asinsMetricsTooltip:$c,asinsMetricsNew:Lc,listingAnalysisNewTooltip:jc,salesEstimationChart:Bc,cards:Fc,sizeTier:Rc,storageFee:Dc,metricsAcrossAsins:Ec,amazonToken:Vc},Uc={asinError:"Asín ya ha sido agregado",searchId:"el campo searchId es obligatorio",provider:"1",error:"Error",serverError:"Error del servidor",occurred:"Ocurrió un error",tryLater:"Lamentamos las molestias. Por favor, inténtelo de nuevo más tarde."},Kc={newSearch:{asin:"Introduce el ASIN de los productos",url:"Introduce ASIN o URL del producto...",new:"Nuevo ASIN/URL..."}},qc={learn:"Aprender",learnTooltip:"Aprende Cerebro",startNewSearch:"Iniciar nueva búsqueda",analyze:"Analizar",export:"Exportar",addToMyList:"Agregar a mi lista",ok:"OK",excel:"Excel",csv:"CSV",cerebro:"Continuar en Cerebro",cancel:"Cancelar",add:"Agregar",exportData:"Exportar datos",mediaComparison:"Comparación de contenido multimedia",mediaComparisonTooltip:"Ver comparación de contenido multimedia (imágenes y vídeos) para todos los ASIN en esta búsqueda",close:"Cerrar",upgradeNow:"Actualizar ahora",connectToAmazon:"Conéctese a Amazon",addFromMyList:"Agregar desde Mi Lista"},Gc={title:"Listing Analyzer",description:"Analice su listado de productos, sus competidores y evalúe el mercado en el que vende.",backToSearch:"Volver a la búsqueda"},_c={balance:"búsquedas mensuales disponibles",title:"Analiza listados de productos con Listing Analyzer",subTitle:"Examine hasta 10 listados de productos de Amazon para ver la calidad de su listado y los de sus competidores.",mainASINTitle:"Introduce un ASIN principal",mainASINPlaceholder:"Introduce un ASIN principal",selectMyProduct:"Seleccione Mis productos para agregar",competitorASINsTitle:"Hasta {maxAsins} ASIN de la competencia",runAnalysis:"Ejecutar análisis"},Hc="Analizando... Espere hasta un minuto para un análisis más completo",Wc={pageTitle:"Vista previa del Listing Analyzer",youHave:"Te quedan",searchesLeft:"búsquedas.",marketplace:"Marketplace",haveAccount:"¿Ya tienes una cuenta?",discoverProduct:"Descubra todo el potencial de su listado de productos con nuestro análisis detallado"},Qc="Análisis de calidad de listados de productos",Yc={unlockFullReport:"Desbloquee el informe completo",unlockYourReport:"Desbloquee su informe completo",signupUnlock:"Regístrese para acceder al informe completo",signupForFree:"Suscríbete gratis",login:"Iniciar sesión"},Zc={zeroSearches:"Te quedan 0 búsquedas",enterAsin:"Introduce ASIN o URL del producto",analyze:"Analizar"},Jc={title:"Introducir nuevo producto"},Xc={passed:"ASIN aprobado",failed:"ASIN suspendido"},ed="¡Estamos trabajando en ello! Su análisis se está procesando.",td={fullAccess:"Obtenga acceso completo al análisis de calidad de su listado",simplySignUp:"Solo debe registrar su cuenta Helium 10",whenYouSignUp:"si registra una cuenta Helium 10",signUpForFree:"Suscríbete gratis"},od={addToFolder:"Agregar a la carpeta:",folder:"Carpeta",keywords:"Palabras clave",link:"Crear una nueva carpeta"},nd={topKeywords:"palabras clave principales",keywordsSelected:"palabras clave seleccionadas"},id={0:"El ASIN no se encuentra entre los 10 mejores para ninguna palabra clave con un volumen mensual de búsqueda > 500. Utilice Cerebro para descubrir más palabras clave y optimizar la estrategia de palabras clave",1:"Los ASIN buscados no comparten ninguna de las principales palabras clave"},sd={listingSearch:"Búsqueda en Listing Analyzer",completeAnalysis:" / Su análisis completo"},ad="No hay datos disponibles actualmente para el ASIN seleccionado",rd={title:"[%key_id:162605417%]",subtitle:"Seleccione un ASIN individual para ver el análisis adicional",titleTooltip:"Compara el rendimiento de los ASIN seleccionados con la media del grupo y los que tienen el mejor rendimiento del mercado",newTitle:"Análisis de la competencia"},ld={title:"¿Quiere ver la lista completa de palabras clave?",subtitle:"Utilice Cerebro para profundizar su estudio y descubrir todas las palabras clave para la búsqueda"},cd={noKeyword:"No se encontraron resultados de palabras clave",tooltip:"[%key_id:162605419%]",searchTrue:"Las mejores palabras clave se definen como aquellas con las que el ASIN se clasifica orgánicamente entre los mejores 10 con un volumen de búsqueda > 500",searchFalse:"Las mejores palabras clave se definen como las que comparten por lo menos 2 ASIN, con una clasificación orgánica media < 11 en todos los ASIN y con un volumen de búsqueda > 500",metrics:{totalKeywords:{title:"Palabras clave totales compartidas",tooltip:"Número de palabras clave con las que por lo menos 2 ASIN clasifican orgánicamente entre los mejores 306 en"},top10Keywords:{title:"Top 10 palabras clave compartidas",tooltip:"Número de palabras clave, en las que al menos dos ASIN tienen una clasificación orgánica promedio menor a 10"},totalSearchVolume:{title:"Volumen total de búsquedas compartidas",tooltip:"Volumen de búsquedas combinadas generado a partir del total de palabras clave compartidas"},top10SearchVolume:{title:"Volumen de búsqueda de top 10 compartidas",tooltip:"Volumen de búsquedas combinadas generado a partir de top 10 palabras clave compartidas"}},metricsSingle:{totalKeywords:{title:"Palabras clave totales",tooltip:"Número de palabras clave que están orgánicamente en el top 306"},top10Keywords:{title:"Top 10 palabras clave",tooltip:"Número de palabras clave por ASIN clasifican orgánicamente con una media de < 10"},totalSearchVolume:{title:"Total del volumen de búsqueda",tooltip:"Volumen de búsquedas combinadas generado a partir del total de palabras clave"},top10SearchVolume:{title:"Top 10 de volumen de búsqueda",tooltip:"Volumen de búsquedas combinadas generado a partir de top 10 palabras clave"}}},dd="Puntuación de listado",ud={tooltipContent:"Puntuación a partir del número de ASIN introducidos que clasifican en esta palabra clave",title:"Top frases de palabras clave"},pd={searchMagnet:"Buscar en Magnet",searchAmazon:"Buscar en Amazon"},md="Todos los productos",gd={topKeywords:"palabras clave principales.",keywordsSelect:"palabras clave seleccionadas",phrase:"Frase",search:"Volumen de búsqueda",rank:"Clasificación orgánica",performanceScore:"Puntuación del rendimiento (promed.)",organicPosition:"Clasificación orgánica (promed.)",searchVolume:"Volumen de búsqueda",phraseNew:"Frases de palabras clave",keywordSales:"Venta de palabras clave",cpr:"CPR"},hd={yes:"sí",no:"no",asin:"ASIN",title:"Título",score:"Puntuación",text:{market:"Promed. mercado",group:"Promed. grupo",marketNew:"Promedio de los 5 principales competidores",groupNew:"Promedio de productos buscados"},monthlySales:{title:"Ventas",tooltip:"Número estimado de unidades vendidas en los últimos 30 días"},monthlyRevenue:{title:"Ingreso",tooltip:"Ingreso estimado de un producto en los últimos 30 días"},price:{title:"Precio",tooltip:"Precio al que se vende el producto."},salesRank:{title:"Clasificación de más vendidos",tooltip:"(Clasificación de mejor vendedor) Clasificación otorgada por Amazon para la categoría principal"},reviewCount:{title:"Número de reseñas",tooltip:"Número total de reseñas de clientes"},reviewsRating:{title:"Clasificación",tooltip:"Valoración de los clientes de Amazon de deficiente (1,0) a sobresaliente (5,0)"},phrase:"Frase",amazonChoice:"Elección de Amazon",searchVolume:"Volumen de búsqueda",organicPosition:"Clasificación orgánica (promed.)",performance:"Puntuación del rendimiento (promed.)"},yd="Ver el producto",fd={bad:"Los productos siguen pocas de las mejores prácticas de Amazon",good:"Los productos siguen algunas de las mejores prácticas de Amazon",excellent:"Los productos siguen la mayoría de las mejores prácticas de Amazon"},Sd={bad:"En términos medios, los productos siguen pocas de las mejores prácticas de Amazon",good:"En términos medios, los productos siguen algunas de las mejores prácticas de Amazon",excellent:"En términos medios, los productos siguen la mayoría de las mejores prácticas de Amazon"},vd="La puntuación se calcula a partir del número de criterios aprobados",bd="La puntuación se calcula a partir del número medio de criterios aprobados para los ASIN introducidos",wd={0:"Puntuación de listado",1:"Análisis de palabras clave",2:"[%key_id:162605417%]"},Ad={0:"Listing_Score",1:"Keyword_Analysis",2:"Market_Analysis",3:"Listing_Analyzer"},xd={looking:"¿Busca resultados más rápidos?",signup:"Suscríbete",foryou:"para su cuenta gratuita para obtener un análisis prioritario"},kd={success:"Correcto",fetchingData:"Obtención de datos…"},Td={title:"Historial",close:"Cerrar",table:{results:"RESULTADOS",asins:"ASINs",marketplace:"MERCADO",date:"FECHA",noResultsFound:"No se hallaron resultados."},description:"Encuentra una búsqueda realizada anteriormente con Listing Analyzer y vuelve a cargarla utilizando cualquiera de tus búsquedas asignadas.",newTable:{product:"Producto",searchType:"Tipo de búsqueda",date:"Fecha",marketplace:"Mercado"}},Cd={single:"La puntuación se calcula a partir del número de criterios aprobados",multi:"La puntuación se calcula a partir del número medio de criterios aprobados para los ASIN introducidos"},zd='Palabras clave añadidas correctamente a la carpeta "{targetFolderName}"',Nd="Analizando... Espere un minuto para un análisis más completo ({progress}/100)",Pd="Comparación de métricas clave entre ASIN",Id={listingQualityScore:{title:"Puntuación de la calidad de los listados (LQS)",tooltip:"La puntuación de calidad de los listados (LQS) es un análisis de la copia, el contenido multimedia y los comentarios de este producto"},sellerCountry:{title:"País/región del vendedor",tooltip:"País/región de origen del vendedor"},reviewsRating:{title:"Clasificación",tooltip:"Valoración de los clientes de Amazon de deficiente (1,0) a sobresaliente (5,0)"},reviewCount:{title:"Cuenta de reseñas",tooltip:"Número total de reseñas de clientes"},age:{title:"Antigüedad (meses)",tooltip:"Número de meses desde la fecha del listado original"},price:{title:"Precio",tooltip:"Precio al que se vende el producto."},monthlySales:{title:"Ventas mensuales",tooltip:"Número estimado de unidades vendidas en los últimos 30 días"},monthlyRevenue:{title:"Ingresos mensuales",tooltip:"Ingreso estimado en los últimos 30 días"},sellerType:{title:"Cumplimiento",tooltip:"Método de almacenamiento y envío<br/>FBA = Gestionado por Amazon<br/>FBM = Gestionado por el vendedor<br/>Amazon = Vendido por Amazon"},top10Keywords:{title:"Top 10 palabras clave",tooltip:"Número de las palabras clave en las que este producto se sitúa entre los 10 primeros"},top10SearchVolume:{title:"Volumen de búsqueda de top 10",tooltip:"Volumen total de búsqueda de las palabras clave en las que este producto se sitúa entre los 10 primeros"},metrics:"Métricas",product:{title:"Producto"}},Md={most:"Mayor oportunidad",mostTooltip:"Es más fácil entrar en el nicho en función de la madurez de la competencia",least:"Menor oportunidad",leastTooltip:"Es más difícil entrar en el nicho en función de la madurez de la competencia"},$d={placeholder:"Introduce hasta {maxAsins} ASIN de producto"},Ld="Análisis de la puntuación promedio de la calidad de los listados (LQS)",jd="LQS promedio",Bd={button:"Ver lista completa de palabras clave en Cerebro"},Fd={phrase:"Palabra clave o frase utilizada por los clientes al buscar un producto",searchVolume:"Número estimado de veces que se busca esta palabra clave al mes",performanceScore:"La puntuación de rendimiento mide cómo de efectivos son los competidores enumerados para la palabra clave determinada",organicPosition:"Clasificación orgánica promedio de ASIN",asin:"Clasificación orgánica para este ASIN",keywordSales:"Número estimado de ventas mensuales (en número de unidades) atribuido a cada palabra clave",cpr:"Número estimado de unidades que se deben vender en 8 días, que resulta de una búsqueda para esta palabra clave, para que el producto se clasifique en la mitad más alta de la página para esta palabra clave"},Rd={csv:"... como archivo CSV",xlsx:"... como archivo XLSX"},Dd={goToListingAnalyzer:"Ir a Listing Analyzer",title:"Comparación de contenido multimedia",description:"Análisis del contenido multimedia de los ASIN",productDetails:"Detalles del producto",image:"Imagen {position}",video:"Vídeo {position}"},Ed={"la-101":"El ASIN debe contener 10 caracteres.","la-102":"ASIN no válido: {asin}",asinAlreadyAdded:"ASIN ya ha sido agregado",common:{400:"Los datos introducidos son erróneos o no hay resultados",402:"Has alcanzado el límite de usos",403:"Acceso denegado",404:"No encontrado",409:"Los datos introducidos contradicen tus acciones anteriores",422:"Los datos introducidos no son válidos",429:"Límite agotado",500:"Error desconocido",503:"La función solicitada no está disponible temporalmente",undefined:"Error desconocido"},"la-1014":"La categoría de este ASIN no es compatible actualmente"},Vd="Agregar a mi lista",Od="Agregar a Keyword Tracker",Ud="Análisis de la puntuación de la calidad de los listados (LQS)",Kd="Puntuación de la calidad de los listados",qd="Obtener un plan",Gd="Próximamente",_d="Añada ASIN de la competencia más arriba para comparar",Hd={text:"Las métricas de la tabla no están disponibles en su plan.",button:"Actualizar para obtener resultados completos"},Wd={maintenance:"Estamos realizando un mantenimiento programado que podría afectar a la recopilación de datos.",updateCogsBtn:"Actualizar COGS",cogsIsMissing:"Falta el COGS (coste de los bienes vendidos) para los productos de este mercado. Actualice el COGS para mejorar la precisión de sus gastos."},Qd={title:"Se alcanzó el límite",text:"Has alcanzado tu límite mensual de"},Yd={titles:{metricsAcrossASINs:"Título de ejemplo",common:"Desbloquee esta y otras increíbles funciones en el Listing Analyzer",salesChart:"Los gráficos de ventas están disponibles desde {betterPlan} y superior"},subtitles:{metricsAcrossASINs:"Subtítulo de ejemplo",common:"Esta función solo está disponible para un plan {plan} o superior."},plans:{free:"Free",starter:"Starter",platinum:"Platinum",diamond:"Diamond"},prices:{platinum:"$99/mes",diamond:"$249/mes"},features:{firstFeature:"Primera caracter&iacute;stica",mediaComparison:"Comparación de contenido multimedia",monthlyUsesCount:"Recuento de usos mensuales",sellerRegion:"Región del vendedor",keywordSales:"Venta de palabras clave"},buttons:{acceptButton:"Información sobre los planes",declineButton:"Ahora no",notRightNow:"Ahora no",comparePlans:"Comparar planes"},priceString:"${price}/mes"},Zd={button:"Seleccione Mis productos para agregar",title:"Mis productos",text:"Seleccione un ASIN a continuación para analizar.",titleText:{one:"{count} producto",other:"{count} productos"},fields:{product:{title:"Producto"}},selectSellerId:"Seleccione un ID de vendedor"},Jd={connectToAmazon:{header:{text:"Helium 10 está diseñado para proteger su información y no la comparte con terceros",textResult:"Sabemos lo importante que es la seguridad de los datos para nuestros clientes. Le prometemos que nunca compartiremos ni venderemos sus datos, y que mantendremos los estándares de seguridad más altos."},body:{title:"Obtenga más de su análisis",text:"7.054 usuarios conectaron su cuenta de vendedor el mes pasado.",textResult:"Consulta un resumen de ventas con alertas, tráfico y conversión cuando conectes tu cuenta de Amazon.",tooltip:"Conectar tu cuenta de Amazon te proporcionará una información más detallada sobre tus productos en comparación con los productos de la competencia."}},info:{title:"Añada un ASIN principal y hasta 10 ASIN de la competencia",text:"Analice su propio producto para identificar acciones que mejoren el rendimiento de su listing. Añada ASIN de la competencia para analizar varios listings, comparar su rendimiento e identificar sus puntos fuertes y débiles."},form:{uses:"{uses} de {total} búsquedas utilizadas este mes"}},Xd={description:"Encuentre y añada productos de la competencia para compararlos."},eu={"Your request was made with invalid credentials.":"La solicitud se ha realizado con credenciales no válidas.","Not found":"ASIN no encontrado","Products not found":"Productos no encontrados","Monitoring already disabled":"Supervisión ya deshabilitada","Monitoring already enabled":"Supervisión ya habilitada"},tu={title:"Mi lista",subtitle:"Selecciona hasta {number} ASIN a continuación para analizar.",table:{getTitleText:"{total} productos"}},ou={copy:"Copiar {name}",copied:"{name} copiado"},nu={singleSearch:"Búsqueda única",multiSearch:"Búsqueda múltiple"},iu={title:"Analice su listado de productos, sus competidores y evalúe el mercado en el que vende.",productTitleLoading:"Cargando..."},su={title:"Resumen de ventas",tooltip:"El Resumen de ventas muestra estadísticas de ventas actualizadas y alertas de su ASIN (lo que incluye tanto FBA como FBM), así como todas las ventas de ese ASIN.",tabs:{sales:"Ventas",units:"Unidades"},periodsPlaceholder:"Período",periods:{today:"Hoy",yesterday:"Ayer",previousDay:"Día anterior",lastNDays:"Últimos {N} días"},noData:"Sin datos",export:{sales:"Ventas ({date})",salesTrend:"Tendencia de ventas ({date})",units:"Unidades de venta ({date})",unitsTrend:"Tendencia de unidades de venta ({date})",salesEstimation:"Estimación de ventas ({date})",salesEstimationTrend:"Tendencia de estimación de ventas ({date})",unitsEstimation:"Unidades de estimación de ventas ({date})",unitsEstimationTrend:"Tendencia de las unidades de estimación de ventas ({date})"},profitsButton:{title:"Más información en Profits",tooltip:"Profits explica el rendimiento del producto para este ASIN de forma más detallada."}},au={button:"Configurar alertas",gross:"Ventas brutas / Unidades",title:"Alerts",view:{one:"Viendo {number} de {count} alerta",other:"Viendo {number} de {count} alertas"},viewAll:"Ver todo",emptyAlerts:"Este producto no tiene ninguna alerta en este día.",setUpAlerts:{text:"Ver el historial de cambios de este producto",button:"Configurar alertas"},commonPart:"de {from} a {to}",tooltip:"Activa la monitorización del ASIN para hacer un seguimiento de los cambios (se activará la monitorización de todos los SKU con el mismo ASIN).",eventType:{1:"Título del producto cambiado",2:"Categoría de producto cambiada",3:"Categoría de producto cambiada",4:"Imagen del producto cambiada",5:"Número de vendedores cambiado",6:"Buy Box cambiada",7:"Precio cambiado",8:"Ancho del producto cambiado",9:"Altura del producto cambiada",10:"La longitud del producto cambió",11:"Peso del producto cambiado",12:"Producto BSR cambiado",13:"Capturas de pantalla de productos creados",14:"Buy Box perdida",15:"Buy Box ganada",16:"Dimensiones del producto cambiadas",17:"Nueva revisión de producto de 5 estrellas",18:"Nueva revisión de producto de 4 estrellas",19:"Nueva revisión de producto de 3 estrellas",20:"Nueva revisión de producto de 2 estrellas",21:"Nueva revisión de producto de 1 estrella",22:"Nueva revisión de producto de 1-3 estrellas",23:"Listado suprimido",24:"El listing ya no está suprimido",25:"Marcado como adulto",26:"Marcado como no adulto",27:"Tasa de cumplimiento FBA ha cambiado",28:"Cambio de estado de nuevo pedido",29:"El estado de la transferencia cambió",30:"Descripción del producto cambiada",31:"Se cambiaron las características clave del producto"}},ru={downloadCSV:"Descargar informe CSV",downloadXLS:"Descarga XLS",downloadPNG:"Descargar imagen PNG",downloadJPEG:"Descargar imagen JPEG"},lu={day:{one:"Día",other:"Días"},year:{one:"Año",other:"Años"},allTime:"Todo el tiempo"},cu={bsr:"Rango de ventas"},du={text:"¡Vaya! Se ha producido un error.",button:"Recargar"},uu={title:"Mejore su puntuación",text:"Contacte con uno de nuestros socios verificados para que le ayude con su listing.",button:"Explorar socios"},pu={product:{myProduct:"Mi producto"},backToSearch:"Volver a la búsqueda",BuyBoxInfo:{LQS:"LQS",listingQualityScoreBox:"Puntuación de la calidad de los listados",priceBox:"Precio",stockBox:"Existencias",reviewCountBox:"Cuenta de reseñas",ageBox:"Antigüedad (meses)"}},mu="Compara las métricas entre los ASIN para descubrir las ventajas y desventajas del anuncio.",gu={columns:{product:{title:"Producto",tooltip:""},listingQualityScore:{title:"LQS",tooltip:"La puntuación de calidad de los listados (LQS) es un análisis de la copia, el contenido multimedia y los comentarios de este producto"},categoryBSR:{title:"BSR de categoría",tooltip:"Categoría Best Seller Rank (BSR)"},sellerRegion:{title:"Región del vendedor",tooltip:"País/región de origen del vendedor"},stock:{title:"Existencias",tooltip:"Número estimado de existencias restantes en el inventario",value:"{number} límite de pedidos"},coupon:{title:"Cupón",tooltip:"Código del cupón actual"},price:{title:"Precio",tooltip:"Precio histórico con tendencia de precios"},monthlySales:{title:"Ventas mensuales",tooltip:"Ventas mensuales históricas con tendencia de ventas"},monthlyRevenue:{title:"Ingresos mensuales",tooltip:"Ingresos mensuales"},reviewsCount:{title:"Reseña",tooltip:"Recuentos de reseñas con calificación"},seller:{title:"Vendedor",tooltip:"Nombre y número del vendedor",sellerNameTooltip:"Nombre del vendedor",numberOfSellersTooltip:"Número de vendedores activos"},lastYearSales:{title:"Ventas del año pasado",tooltip:"Ventas del año pasado con tendencia de ventas"},shippingDetails:{title:"Información de envío",tooltip:"Tamaño de envío con dimensiones"},weight:{title:"Peso (lb)",tooltip:"Peso del paquete (lb)"},storageFee:{title:"Precio almacenamiento",tooltip:"Precio almacenamiento (1.000 unidades/mes)",janSept:"ene-sep",octDec:"oct-dic"},bestSalesPeriod:{title:"Mejor período de ventas",tooltip:"Mes natural en el que un producto registra su mayor volumen de ventas"},age:{title:"Antigüedad (mes)",tooltip:"Antigüedad promedio de la lista de los productos principales"},numberOfImages:{title:"Cantidad de imágenes",tooltip:"Número de imágenes en un listado de producto"},variationCount:{title:"Recuento de variaciones",tooltip:"Número de variaciones del producto"},salesToReviews:{title:"Ventas / Reseñas",tooltip:"Ventas Mensuales / revisiones totales"},top10Keywords:{title:"Top 10 palabras clave",tooltip:"Número de las palabras clave en las que este producto se sitúa entre los 10 primeros"},top10SearchVolume:{title:"Volumen de búsqueda de top 10",tooltip:"Volumen total de búsqueda de las palabras clave en las que este producto se sitúa entre los 10 primeros"},title:{title:"Título"},category:{title:"Categoría"},bsr:{title:"Clasificación de más vendidos"},subcategory:{title:"Subcategoría"},priceChange:{title:"Cambio en Precio"},salesChange:{title:"Cambio de ventas"},reviewCount:{title:"Cuenta de reseñas"},reviewsRating:{title:"Reseñas Calificación"},salesYearOverYear:{title:"Ventas año tras año"},sizeTier:{title:"Rango de tamaño"},width:{title:"Ancho"},height:{title:"Alto"},length:{title:"Longitud"}}},hu="La puntuación de calidad de los listados (LQS) es un análisis de la copia, el contenido multimedia y los comentarios de este producto",yu={title:"Resumen de estimación de ventas",tooltip:"El Resumen de estimación de ventas muestra las estadísticas de las ventas estimadas del ASIN, incluyendo FBA y FBM, y te permite filtrar los resultados en función de la fecha, el importe de las ventas y las unidades de venta."},fu={1:{title:"Puntuación de la calidad de los listados",description:"Calcule al instante una puntuación personalizada del 1 al 10 que incluye desgloses de copias, contenido multimedia y reseñas para determinar si su listado de productos sigue las mejores prácticas."},2:{title:"Análisis del mercado",description:"Mida las estrategias de marketing de su marca y las de sus competidores, además de la efectividad en compradores potenciales."},3:{title:"Análisis de top palabras clave",description:"Descubra qué palabras y frase clave tienen más impacto en Amazon."}},Su={1:"Tamaño estándar pequeño",2:"Tamaño estándar grande",3:"Tamaño sobredimensionado pequeño",4:"Prodotti medi fuori misura",5:"Tamaño sobredimensionado grande",6:"Tamaño sobredimensionado especial",7:"Sobre",8:"Pequeño y ligero",9:"Carta pequeña",10:"Carta grande",11:"Carta extragrande",12:"Sobre pequeño",13:"Sobre estándar",14:"Sobre grande",15:"Paquete estándar",16:"Pequeño",17:"Tamaño estándar",18:"Tamaño sobredimensionado",19:"Tamaño sobredimensionado estándar",20:"Pesado y voluminoso",21:"Supersize",22:"Sobre extragrande",23:"Paquete pequeño","-1":"N/D"},vu={janSept:"ene-sep",octDec:"oct-dic"},bu={error:Uc,inputs:Kc,buttons:qc,topPanel:Gc,landingPage:_c,analyzeLoading:Hc,laPreviewMain:Wc,listingAnalysis:Qc,unlock:Yc,asinInputForm:Zc,enterNew:Jc,breakdowns:Xc,onIt:ed,signUpFooter:td,addToMyList:od,headerButtons:nd,keywordsTable:id,breadcrumbs:sd,noData:ad,marketAnalysis:rd,footer:ld,numberKeywordsList:cd,listingScore:dd,tableHeader:ud,tableBody:pd,allProducts:md,table:gd,model:hd,card:yd,descriptionSingleMap:fd,descriptionMultiMap:Sd,singleIfo:vd,multiInfo:bd,exportButton:wd,fileName:Ad,progressBar:xd,common:kd,history:Td,listingScoreInfo:Cd,keywordsAddedToFolderMessage:zd,analyzing:Nd,asinsMetricsTitle:Pd,asinsMetrics:Id,opportunity:Md,tagInput:$d,listingAnalysisNew:Ld,listingScoreNew:jd,tableFooter:Bd,tableTooltips:Fd,exportOptions:Rd,mediaComparison:Dd,errors:Ed,addToMyListButton:Vd,addToKeywordTrackerButton:Od,listingAnalysisNewSingle:Ud,listingScoreNewSingle:Kd,getPlan:qd,comingSoon:Gd,addCompetitor:_d,upgradeBanner:Hd,banners:Wd,limitModal:Qd,upgradeModal:Yd,myProducts:Zd,landingPageNew:Jd,getCompetitors:Xd,alertsErrors:eu,addFromMyListModal:tu,copyButton:ou,widgets:nu,resultPageNew:iu,salesChart:su,alerts:au,highchart:ru,dateRanges:lu,chartAxis:cu,chartError:du,improveYourScore:uu,topPanelResult:pu,asinsMetricsTooltip:mu,asinsMetricsNew:gu,listingAnalysisNewTooltip:hu,salesEstimationChart:yu,cards:fu,sizeTier:Su,storageFee:vu},wu={asinError:"Asin è già stato aggiunto",searchId:"il campo searchId è richiesto",provider:"1",error:"Errore",serverError:"Errore del server",occurred:"Si è verificato un errore",tryLater:"Ci scusiamo per l'inconveniente. Per favore riprova più tardi."},Au={newSearch:{asin:"Inserisci l'ASIN dei prodotti",url:"Inserisci ASIN o URL del prodotto...",new:"Nuovo ASIN/URL..."}},xu={learn:"Scopri",learnTooltip:"Impara Cerebro",startNewSearch:"Inizia una nuova ricerca",analyze:"Analizzare",export:"Esporta",addToMyList:"Aggiungi alla mia lista",ok:"OK",excel:"Excel",csv:"CSV",cerebro:"Continua a Cerebro",cancel:"Cancella",add:"Aggiungere",exportData:"Esporta i dati",mediaComparison:"Confronto fra i media",mediaComparisonTooltip:"Visualizza confronto fra i media (immagini/video) per tutti gli ASIN in questa ricerca",close:"Chiudi",upgradeNow:"Aggiorna ora",connectToAmazon:"Connettiti ad Amazon",addFromMyList:"Aggiungi dalla Mia Lista"},ku={title:"Listing Analyzer",description:"Analizza il tuo elenco di prodotti, i tuoi competitor e valuta il mercato in cui vendi.",backToSearch:"Torna alla ricerca"},Tu={balance:"ricerche mensili disponibili",title:"Analizza le listings dei prodotti con Listing Analyzer",subTitle:"Cerca fino a 10 listing di prodotti su Amazon per vedere la qualità dei tuoi listing e di quelli dei concorrenti.",mainASINTitle:"Inserisci un ASIN principale",mainASINPlaceholder:"Inserisci un ASIN principale",selectMyProduct:"Seleziona I miei prodotti da aggiungere",competitorASINsTitle:"Fino a {maxAsins} ASIN della competitori",runAnalysis:"Esegui analisi"},Cu="Analisi in corso... le analisi complesse possono richiedere fino a un minuto ",zu={pageTitle:"Anteprima di Listing Analyzer",youHave:"Hai",searchesLeft:"ricerche rimaste.",marketplace:"Marketplace",haveAccount:"Hai già un account?",discoverProduct:"Scopri tutto il potenziale dei listing dei tuoi prodotti con la nostra analisi approfondita"},Nu="Analisi della qualità dei listing",Pu={unlockFullReport:"Ottieni il report completo",unlockYourReport:"Ottieni il report completo",signupUnlock:"Iscriviti per ottenere il report completo",signupForFree:"Iscriviti gratuitamente",login:"Accesso"},Iu={zeroSearches:"Hai 0 ricerche rimaste",enterAsin:"Inserisci ASIN o URL del prodotto",analyze:"Analizzare"},Mu={title:"Inserisci nuovo prodotto"},$u={passed:"ASIN sufficienti",failed:"ASIN insufficienti"},Lu="Lascia fare a noi! Stiamo elaborando la tua analisi.",ju={fullAccess:"Ottieni accesso completo all'Analisi della qualità dei listing",simplySignUp:"Devi solo creare un account Helium 10",whenYouSignUp:"creando un account Helium 10",signUpForFree:"Iscriviti gratuitamente"},Bu={addToFolder:"Aggiungi alla cartella:",folder:"Cartella",keywords:"Parole chiave",link:"Crea nuova cartella"},Fu={topKeywords:"parole chiave principali",keywordsSelected:"parole chiave selezionate"},Ru={0:"L'ASIN non ha una posizione organica fra le migliori 10 per nessuna parola chiave con volume di ricerca mensile > 500. Utilizza Cerebro per scoprire altre parole chiave e ottimizzare la strategia delle parole chiave",1:"Gli ASIN cercati non condividono parole chiave nelle prime posizioni"},Du={listingSearch:"Ricerca di Listing Analyzer",completeAnalysis:" / La tua analisi completa"},Eu="Al momento non sono disponibili dati per l'ASIN selezionato",Vu={title:"[%key_id:162605417%]",subtitle:"Seleziona un singolo ASIN per vedere analisi aggiuntive",titleTooltip:"Confronta le prestazioni degli ASIN selezionati con la media del gruppo e i prodotti più efficaci sul mercato",newTitle:"Analisi dei concorrenti"},Ou={title:"Desideri vedere l'elenco completo delle parole chiave?",subtitle:"Utilizza Cerebro per approfondire la tua analisi e scoprire tutte le parole chiave per la tua ricerca"},Uu={noKeyword:"Nessuna parola chiave trovata",tooltip:"[%key_id:162605419%]",searchTrue:"Le migliori parole chiave sono quelle che l'ASIN posiziona nella top 10 organica, con un volume di ricerca > 500",searchFalse:"Le migliori parole chiave sono quelle condivise da almeno 2 ASIN, con una posizione organica < 11 su tutti gli ASIN e un volume di ricerca > 500",metrics:{totalKeywords:{title:"Parole chiave condivise totali",tooltip:"Numero di parole chiave con posizione organica nella top 306 per almeno 2 ASIN"},top10Keywords:{title:"Top 10 parole chiave condivise",tooltip:"Numero di parole chiave con rank organico di <10 per almeno 2 ASIN"},totalSearchVolume:{title:"Volume di ricerca condiviso totale",tooltip:"Volume di ricerca combinato generato dalle Parole chiave condivise totali"},top10SearchVolume:{title:"Volume di ricerca delle top 10 condivise",tooltip:"Volume di ricerca combinato generato dalle top 10 parole chiave condivise"}},metricsSingle:{totalKeywords:{title:"Parole chiave totali",tooltip:"Numero di parole chiave con posizione organica nella top 306"},top10Keywords:{title:"Top 10 parole chiave",tooltip:"Numero di parole chiave con posizione organica media <10 per ASIN"},totalSearchVolume:{title:"Volume di ricerca totale",tooltip:"Volume di ricerca combinato generato dalle Parole chiave totali"},top10SearchVolume:{title:"Volume di ricerca delle top 10",tooltip:"Volume di ricerca combinato generato dalle migliori 10 parole chiave"}}},Ku="Punteggio del listing",qu={tooltipContent:"Punteggio calcolato in base al numero di ASIN inseriti che si posizionano per la parola chiave",title:"Top frasi chiave"},Gu={searchMagnet:"Cerca in Magnet",searchAmazon:"Cerca in Amazon"},_u="Tutti i prodotti",Hu={topKeywords:"parole chiave principali.",keywordsSelect:"parole chiave selezionate",phrase:"Frase",search:"Volume di ricerca",rank:"Posizione organica",performanceScore:"Punteggio di prestazione (media)",organicPosition:"Posizione organica (media)",searchVolume:"Volume di ricerca",phraseNew:"Frasi chiave",keywordSales:"Vendite per parola chiave",cpr:"CPR"},Wu={yes:"sì",no:"no",asin:"ASIN",title:"Titolo",score:"Punteggio",text:{market:"Media del mercato",group:"Media del gruppo",marketNew:"Media dei primi 5 concorrenti",groupNew:"Prodotti cercati media"},monthlySales:{title:"Vendite",tooltip:"Stima del numero di unità vendute negli ultimi 30 giorni"},monthlyRevenue:{title:"Entrate",tooltip:"Stima delle entrate per un prodotto negli ultimi 30 giorni"},price:{title:"Prezzo",tooltip:"Prezzo a cui è venduto il prodotto."},salesRank:{title:"BSR",tooltip:"(Classifica best-seller) Classifica Amazon per la categoria principale"},reviewCount:{title:"Numero di recensioni",tooltip:"Numero totale di recensioni dei clienti"},reviewsRating:{title:"Valutazioni",tooltip:"Le recensioni dei clienti Amazon vanno da scarso (1.0) a eccezionale (5.0)"},phrase:"Frase",amazonChoice:"Amazon Choice",searchVolume:"Volume di ricerca",organicPosition:"Posizione organica (media)",performance:"Punteggio di prestazione (media)"},Qu="Visualizza prodotto",Yu={bad:"Il prodotto segue poche delle buone pratiche Amazon",good:"Il prodotto segue alcune delle buone pratiche Amazon",excellent:"Il prodotto segue la maggior parte delle buone pratiche Amazon"},Zu={bad:"In media, i prodotti seguono poche delle buone pratiche Amazon",good:"In media, i prodotti seguono alcune delle buone pratiche Amazon",excellent:"In media, i prodotti seguono la maggior parte delle buone pratiche Amazon"},Ju="Il punteggio viene calcolato in base al numero di criteri soddisfatti",Xu="Il punteggio viene calcolato in base alla media di criteri soddisfatti per gli ASIN inseriti",ep={0:"Punteggio del listing",1:"Analisi delle parole chiave",2:"[%key_id:162605417%]"},tp={0:"Listing_Score",1:"Keyword_Analysis",2:"Market_Analysis",3:"Listing_Analyzer"},op={looking:"Cerchi risultati più veloci?",signup:"Iscriviti",foryou:"a un account gratuito per ottenere l'analisi prioritaria."},np={success:"Operazione completata",fetchingData:"Recupero dei dati…"},ip={title:"Cronologia",close:"Chiudi",table:{results:"RISULTATI",asins:"ASIN",marketplace:"MERCATO",date:"DATA",noResultsFound:"Nessun risultato trovato."},description:"Trova una precedente ricerca Listing Analyzer e ricaricala senza consumare le ricerche che hai a disposizione.",newTable:{product:"Prodotto",searchType:"Tipo di ricerca",date:"Data",marketplace:"Mercato"}},sp={single:"Il punteggio viene calcolato in base al numero di criteri soddisfatti",multi:"Il punteggio viene calcolato in base alla media di criteri soddisfatti per gli ASIN inseriti"},ap='Parole chiave aggiunte correttamente alla cartella "{targetFolderName}"',rp="Analisi in corso... le analisi complesse possono richiedere fino a un minuto ({progress}/100)",lp="Confronta i parametri chiave tra tutti gli ASIN",cp={listingQualityScore:{title:"Punteggio del listing (LQS)",tooltip:"Il punteggio della qualità del listing (LQS) è un'analisi della copia, dei media e delle recensioni di questo prodotto"},sellerCountry:{title:"Paese/regione del venditore",tooltip:"Paese/regione di origine del seller"},reviewsRating:{title:"Valutazioni",tooltip:"Le recensioni dei clienti Amazon vanno da scarso (1.0) a eccezionale (5.0)"},reviewCount:{title:"Numero di recensioni",tooltip:"Numero totale di recensioni dei clienti"},age:{title:"Età (Mesi)",tooltip:"Numero di mesi dalla data dell'elenco originale"},price:{title:"Prezzo",tooltip:"Prezzo a cui è venduto il prodotto."},monthlySales:{title:"Vendite mensili",tooltip:"Stima del numero di unità vendute negli ultimi 30 giorni"},monthlyRevenue:{title:"Entrate mensili",tooltip:"Stima delle entrate negli ultimi 30 giorni"},sellerType:{title:"Logistica",tooltip:"Metodo di stoccaggio e spedizione<br/>FDA = Evaso da Amazon<br/>FBM = Evaso dall'esercente<br/>Amazon = Venduto da Amazon"},top10Keywords:{title:"Top 10 parole chiave",tooltip:"Numero di parole chiave in cui questo prodotto si classifica tra i top 10"},top10SearchVolume:{title:"Volume di ricerca delle top 10",tooltip:"Volume di ricerca totale per le parole chiave in cui questo prodotto si classifica tra i top 10"},metrics:"Parametri",product:{title:"Prodotto"}},dp={most:"Maggiori opportunità",mostTooltip:"Più facile penetrare nella nicchia in base alla maturità della concorrenza",least:"Minori opportunità",leastTooltip:"Più difficile penetrare nella nicchia in base alla maturità della concorrenza"},up={placeholder:"Inserisci fino a {maxAsins} ASIN prodotto"},pp="Analisi del punteggio della qualità del listing (LQS) medio",mp="LQS medio",gp={button:"Visualizza l'elenco completo delle parole chiave in Cerebro"},hp={phrase:"Parola chiave o frase utilizzata dai clienti in cerca di un prodotto",searchVolume:"Numero stimato di volte in cui questa parola chiave viene cercata mensilmente",performanceScore:"Il punteggio di performance è un indicatore dell'efficacia dei competitor elencati rispetto alla parola chiave in questione",organicPosition:"Rank organico medio degli ASIN",asin:"Rank organico per questo ASIN",keywordSales:"Numero stimato di vendite mensili (in numero di unità) attribuite a ogni parola chiave",cpr:"Numero stimato di unità che devono essere vendute in 8 giorni, come risultato da una ricerca di questa parola chiave, affinché il prodotto si posizioni nella metà superiore della prima pagina per questa parola chiave"},yp={csv:"...come file CSV",xlsx:"...come file XLSX"},fp={goToListingAnalyzer:"Vai al Listing Analyzer",title:"Confronto fra i media",description:"Analisi media degli ASIN",productDetails:"Dettagli del prodotto",image:"Immagine {position}",video:"Video {position}"},Sp={"la-101":"L'ASIN deve contenere 10 caratteri.","la-102":"ASIN non valido: {asin}",asinAlreadyAdded:"ASIN è già stato aggiunto",common:{400:"Dati inseriti errati o nessun risultato",402:"Hai raggiunto il limite di utilizzi",403:"Accesso negato",404:"Non trovato",409:"I dati inseriti sono in conflitto con le tue azioni precedenti",422:"I dati inseriti non sono validi",429:"Limite esaurito",500:"Errore sconosciuto",503:"Funzionalità richiesta temporaneamente non disponibile",undefined:"Errore sconosciuto"},"la-1014":"La categoria di questo ASIN non è attualmente supportata"},vp="Aggiungi alla mia lista",bp="Aggiungi a Keyword Tracker",wp="Analisi del punteggio della qualità del listing (LQS)",Ap="Punteggio del listing",xp="Ottieni un piano",kp="In arrivo",Tp="Aggiungi gli ASIN dei concorrenti qui sopra per confrontarli",Cp={text:"Le metriche della tabella sono bloccate per il tuo livello di piano.",button:"Esegui l'upgrade per i risultati completi"},zp={maintenance:"Stiamo eseguendo una manutenzione programmata che potrebbe inficiare la raccolta dei dati.",updateCogsBtn:"Aggiorna COGS",cogsIsMissing:"COGS (costo dei beni venduti) mancante per i prodotti in questo marketplace. Aggiorna il COGS per migliorare l'esattezza delle tue spese."},Np={title:"Limite raggiunto",text:"Hai raggiunto il tuo limite mensile per"},Pp={titles:{metricsAcrossASINs:"Titolo di esempio",common:"Sblocca questa e altre fantastiche funzionalità in Listing Analyzer",salesChart:"I grafici delle vendite sono disponibili da {betterPlan} e versioni successive"},subtitles:{metricsAcrossASINs:"Esempio di sottotitolo",common:"Questa funzione è disponibile solo con un Piano {plan} o superiore."},plans:{free:"Free",starter:"Starter",platinum:"Platinum",diamond:"Diamond"},prices:{platinum:"$99/mese",diamond:"$249/mese"},features:{firstFeature:"Prima caratteristica",mediaComparison:"Confronto fra i media",monthlyUsesCount:"Conteggio utilizzi mensili",sellerRegion:"Regione del venditore",keywordSales:"Vendite per parola chiave"},buttons:{acceptButton:"Scopri i piani",declineButton:"Non adesso",notRightNow:"Non adesso",comparePlans:"Confronta i piani"},priceString:"${price}/mese"},Ip={button:"Seleziona I miei prodotti da aggiungere",title:"I miei prodotti",text:"Seleziona un ASIN di seguito per analizzare.",titleText:{one:"{count} prodotto",other:"{count} prodotti"},fields:{product:{title:"Prodotto"}},selectSellerId:"Seleziona un ID venditore"},Mp={connectToAmazon:{header:{text:"Helium 10 è progettato per proteggere i tuoi dati e non li condivide con fonti terze.",textResult:"Sappiamo quanto sia importante la sicurezza dei dati per i nostri clienti. Promettiamo di non condividere o vendere mai i tuoi dati e di mantenere i più elevati standard di sicurezza."},body:{title:"Ottieni di più dalla tua analisi",text:"7.054 utenti hanno collegato il proprio Account Seller il mese scorso.",textResult:"Vedi il riepilogo delle vendite con Avvisi, Traffico e Conversione quando ti connetti al tuo account Amazon.",tooltip:"Connettere il tuo account Amazon ti fornisce informazioni più dettagliate sui tuoi prodotti rispetto a quelli dei tuoi competitor."}},info:{title:"Aggiungi un ASIN principale e fino a 10 ASIN dei concorrenti",text:"Analizza il tuo prodotto per individuare le azioni con cui migliorare le prestazioni del listing. Aggiungi gli ASIN dei concorrenti per analizzare più listing, confrontare le prestazioni e identificare punti di forza e debolezza."},form:{uses:"{uses} di {total} ricerche utilizzate questo mese"}},$p={description:"Trova e aggiungi prodotti concorrenti da confrontare."},Lp={"Your request was made with invalid credentials.":"La richiesta è stata presentata con credenziali non valide.","Not found":"ASIN non trovato","Products not found":"Prodotti non trovati","Monitoring already disabled":"Monitoraggio già disabilitato","Monitoring already enabled":"Monitoraggio già abilitato"},jp={title:"La mia lista",subtitle:"Seleziona fino a {number} ASIN (s) di seguito per analizzare.",table:{getTitleText:"{total} prodotti"}},Bp={copy:"Copia {name}",copied:"{name} copiato"},Fp={singleSearch:"Ricerca singola",multiSearch:"Ricerca multipla"},Rp={title:"Analizza il tuo elenco di prodotti, i tuoi competitor e valuta il mercato in cui vendi.",productTitleLoading:"Caricamento..."},Dp={title:"Panoramica delle vendite",tooltip:"La Panoramica delle vendite mostra avvisi e statistiche di vendita aggiornate per il tuo ASIN, inclusi FBA e FBM, e tutte le vendite per questo ASIN.",tabs:{sales:"Vendite",units:"Unità"},periodsPlaceholder:"Periodo",periods:{today:"Oggi",yesterday:"Ieri",previousDay:"Giorno precedente",lastNDays:"Ultimi {N} giorni"},noData:"Nessun dato",export:{sales:"Vendite ({date})",salesTrend:"Andamento delle vendite ({date})",units:"Unità di vendita ({date})",unitsTrend:"Andamento unità di vendita ({date})",salesEstimation:"Stima delle vendite ({date})",salesEstimationTrend:"Trend di stima delle vendite ({date})",unitsEstimation:"Unità di stima delle vendite ({date})",unitsEstimationTrend:"Trend delle unità di stima delle vendite ({date})"},profitsButton:{title:"Vedi altro su Profits",tooltip:"Profits spiega in modo più dettagliato la prestazione del prodotto per questo ASIN."}},Ep={button:"Imposta avvisi",gross:"Vendite lorde/unità",title:"Alerts",view:{one:"Visualizzazione di {number} di {count} avviso",other:"Visualizzazione di {number} di {count} avvisi"},viewAll:"Visualizza tutto",emptyAlerts:"Questo prodotto non ha nessun avviso in questo giorno",setUpAlerts:{text:"Vedi le modifiche degli eventi in cronologia per questo prodotto",button:"Imposta avvisi"},commonPart:"da {from} a {to}",tooltip:"Abilita il monitoraggio dell'ASIN per tracciare le modifiche (tutti gli SKU sotto lo stesso ASIN attiveranno il monitoraggio).",eventType:{1:"Titolo del prodotto cambiato",2:"Categoria di prodotto modificata",3:"Categoria di prodotto modificata",4:"L'immagine del prodotto è cambiata",5:"Numero di venditori cambiato",6:"Buy Box cambiato",7:"Prezzo cambiato",8:"Larghezza del prodotto modificata",9:"Altezza del prodotto cambiata",10:"La lunghezza del prodotto è cambiata",11:"Il peso del prodotto è cambiato",12:"Prodotto BSR cambiato",13:"Screenshot dei prodotti creati",14:"Buy Box perso",15:"Buy Box ha vinto",16:"Dimensioni del prodotto cambiate",17:"Nuova recensione del prodotto a 5 stelle",18:"Nuova recensione del prodotto a 4 stelle",19:"Nuova recensione del prodotto a 3 stelle",20:"Nuova recensione del prodotto a 2 stelle",21:"Nuova recensione del prodotto da 1 stella",22:"Nuova recensione del prodotto a 1-3 stelle",23:"Listing eliminato",24:"Listing non più eliminato",25:"Segnato come per adulti",26:"Segnato come per non adulti",27:"Tariffa di gestione logistica FBA è cambiata",28:"Stato nuovo ordine modificato",29:"Lo stato del trasferimento è cambiato",30:"La descrizione del prodotto è cambiata",31:"Punti elenco del prodotto cambiati"}},Vp={downloadCSV:"Scarica il rapporto in CSV",downloadXLS:"Scarica XLS",downloadPNG:"Scarica l'immagine PNG",downloadJPEG:"Scarica l'immagine JPEG"},Op={day:{one:"Giorno",other:"Giorni"},year:{one:"Anno",other:"Anni"},allTime:"Tutto il tempo"},Up={bsr:"Classifica delle vendite"},Kp={text:"Ops. Errore!",button:"Ricaricare"},qp={title:"Migliora il tuo punteggio",text:"Contatta uno dei nostri partner verificati per ricevere aiuto con il tuo listing.",button:"Sfoglia i partner"},Gp={product:{myProduct:"Il mio prodotto"},backToSearch:"Torna alla ricerca",BuyBoxInfo:{LQS:"LQS",listingQualityScoreBox:"Punteggio del listing",priceBox:"Prezzo",stockBox:"Stock",reviewCountBox:"Numero di recensioni",ageBox:"Età (mesi)"}},_p="Confronta i parametri tra gli ASIN per trovare vantaggi e svantaggi dell'annuncio.",Hp={columns:{product:{title:"Prodotto",tooltip:""},listingQualityScore:{title:"LQS",tooltip:"Il punteggio della qualità del listing (LQS) è un'analisi della copia, dei media e delle recensioni di questo prodotto"},categoryBSR:{title:"Categoria BSR",tooltip:"Categoria Best Seller Rank (BSR)"},sellerRegion:{title:"Regione del venditore",tooltip:"Paese/regione di origine del seller"},stock:{title:"Stock",tooltip:"Stima dello stock rimasto (unità)",value:"{number} Limite d'ordine"},coupon:{title:"Buono",tooltip:"Codice del buono attuale"},price:{title:"Prezzo",tooltip:"Storico dei prezzi con tendenza"},monthlySales:{title:"Vendite mensili",tooltip:"Storico delle vendite mensili con tendenza"},monthlyRevenue:{title:"Entrate mensili",tooltip:"Entrate mensili"},reviewsCount:{title:"Recensione",tooltip:"Numero di recensioni con valutazione"},seller:{title:"Seller",tooltip:"Nome e numero del venditore",sellerNameTooltip:"Nome del venditore",numberOfSellersTooltip:"Numero di sellers attivi"},lastYearSales:{title:"Vendite dello scorso anno",tooltip:"Vendite dello scorso anno con andamento delle vendite"},shippingDetails:{title:"Dati di spedizione",tooltip:"Taglia di spedizione con dimensioni"},weight:{title:"Peso (lb)",tooltip:"Peso del pacchetto (lb)"},storageFee:{title:"Commissioni di stoccaggio",tooltip:"Commissione di stoccaggio (1.000 unità/mese)",janSept:"gen-set",octDec:"ott-dic"},bestSalesPeriod:{title:"Miglior periodo di vendita",tooltip:"Mese di calendario in cui un prodotto vede il suo volume di vendite più alto"},age:{title:"Età (mese)",tooltip:"Età media del listing per i migliori prodotti"},numberOfImages:{title:"Numero di immagini",tooltip:"Numero di immagini su un listing di prodotto"},variationCount:{title:"Conteggio varianti",tooltip:"Numero di variazioni del prodotto"},salesToReviews:{title:"Vendite a recensioni",tooltip:"Vendite mensili / conteggio totale delle recensioni"},top10Keywords:{title:"Top 10 parole chiave",tooltip:"Numero di parole chiave in cui questo prodotto si classifica tra i top 10"},top10SearchVolume:{title:"Volume di ricerca delle top 10",tooltip:"Volume di ricerca totale per le parole chiave in cui questo prodotto si classifica tra i top 10"},title:{title:"Titolo"},category:{title:"Categoria"},bsr:{title:"BSR"},subcategory:{title:"Sottocategoria"},priceChange:{title:"Cambio di prezzo"},salesChange:{title:"Variazione delle vendite"},reviewCount:{title:"Numero di recensioni"},reviewsRating:{title:"Valutazione delle recensioni"},salesYearOverYear:{title:"Vendite anno dopo anno"},sizeTier:{title:"Taglia"},width:{title:"Larghezza"},height:{title:"Altezza"},length:{title:"Lunghezza"}}},Wp="Il punteggio della qualità del listing (LQS) è un'analisi della copia, dei media e delle recensioni di questo prodotto",Qp={title:"Riepilogo della stima delle vendite",tooltip:"Il Riepilogo della stima delle vendite mostra le statistiche delle vendite stimate per l'ASIN, compreso l'FBA e l'FBM, e ti consente di filtrare i risultati in base alla data, all'importo di vendita e alle unità di vendite."},Yp={1:{title:"Punteggio del listing",description:"Calcola subito un punteggio personalizzato da 1 a 10 che include copy, media e analisi delle recensioni per verificare se il tuo listing segue le buone pratiche."},2:{title:"Analisi del mercato",description:"Misura le strategie di marketing del tuo brand e dei concorrenti e la loro efficacia per i potenziali clienti."},3:{title:"Analisi delle top parole chiave",description:"Scopri quali parole e frasi chiave stanno avendo il maggiore impatto su Amazon."}},Zp={1:"Piccolo (dimensioni standard)",2:"Grande (dimensioni standard)",3:"Piccolo (oversize)",4:"Medio (oversize)",5:"Grande (oversize)",6:"Speciale (oversize)",7:"Busta",8:"Piccolo e leggero",9:"Lettera piccola",10:"Lettera grande",11:"Lettera extra large",12:"Busta piccola",13:"Busta standard",14:"Busta grande",15:"Pacco standard",16:"Piccolo",17:"Dimensioni standard",18:"Oversize",19:"Standard Oversize",20:"Pesante e ingombrante",21:"Supersize",22:"Busta extra grande",23:"Pacco piccolo","-1":"N/A"},Jp={janSept:"gen-set",octDec:"ott-dic"},Xp={error:wu,inputs:Au,buttons:xu,topPanel:ku,landingPage:Tu,analyzeLoading:Cu,laPreviewMain:zu,listingAnalysis:Nu,unlock:Pu,asinInputForm:Iu,enterNew:Mu,breakdowns:$u,onIt:Lu,signUpFooter:ju,addToMyList:Bu,headerButtons:Fu,keywordsTable:Ru,breadcrumbs:Du,noData:Eu,marketAnalysis:Vu,footer:Ou,numberKeywordsList:Uu,listingScore:Ku,tableHeader:qu,tableBody:Gu,allProducts:_u,table:Hu,model:Wu,card:Qu,descriptionSingleMap:Yu,descriptionMultiMap:Zu,singleIfo:Ju,multiInfo:Xu,exportButton:ep,fileName:tp,progressBar:op,common:np,history:ip,listingScoreInfo:sp,keywordsAddedToFolderMessage:ap,analyzing:rp,asinsMetricsTitle:lp,asinsMetrics:cp,opportunity:dp,tagInput:up,listingAnalysisNew:pp,listingScoreNew:mp,tableFooter:gp,tableTooltips:hp,exportOptions:yp,mediaComparison:fp,errors:Sp,addToMyListButton:vp,addToKeywordTrackerButton:bp,listingAnalysisNewSingle:wp,listingScoreNewSingle:Ap,getPlan:xp,comingSoon:kp,addCompetitor:Tp,upgradeBanner:Cp,banners:zp,limitModal:Np,upgradeModal:Pp,myProducts:Ip,landingPageNew:Mp,getCompetitors:$p,alertsErrors:Lp,addFromMyListModal:jp,copyButton:Bp,widgets:Fp,resultPageNew:Rp,salesChart:Dp,alerts:Ep,highchart:Vp,dateRanges:Op,chartAxis:Up,chartError:Kp,improveYourScore:qp,topPanelResult:Gp,asinsMetricsTooltip:_p,asinsMetricsNew:Hp,listingAnalysisNewTooltip:Wp,salesEstimationChart:Qp,cards:Yp,sizeTier:Zp,storageFee:Jp},em={asinError:"ASIN已经被添加过",searchId:"搜索ID项必填",provider:"1",error:"错误",serverError:"服务器错误",occurred:"出现错误",tryLater:"很抱歉造成不便，敬请稍后再尝试。"},tm={newSearch:{asin:"输入产品ASIN",url:"输入产品ASIN或URL...",new:"新的ASIN或URL..."}},om={learn:"学习视频",learnTooltip:"了解Cerebro",startNewSearch:"开启新的搜索",analyze:"开始分析",export:"导出",addToMyList:"添加到我的列表My List",ok:"OK",excel:"Excel",csv:"CSV",cerebro:"继续在Cerebro查关键词",cancel:"取消",add:"添加",exportData:"导出数据",mediaComparison:"媒体比较",mediaComparisonTooltip:"在此搜索中查看所有 ASINS 的媒体比较（图片/视频）",close:"关闭",upgradeNow:"现在升级",connectToAmazon:"连接到亚马逊",addFromMyList:"从My List添加"},nm={title:"Listing分析师",description:"分析您的产品Listing、您的竞争对手并评估您销售的市场。",backToSearch:"返回搜索"},im={balance:"每月可用搜索次数",title:"使用Listing分析师分析产品Listing",subTitle:"一次性查询多达10个亚马逊产品Listing的质量得分。",mainASINTitle:"输入一个主要的ASIN",mainASINPlaceholder:"输入一个主要的ASIN",selectMyProduct:"选择我的产品来添加",competitorASINsTitle:"最多{maxAsins}个竞争对手 ASIN",runAnalysis:"运行分析"},sm="分析进行中，敬请稍后...预计将在一分钟内完成",am={pageTitle:"Listing分析预览",youHave:"您有",searchesLeft:"次搜索可用。",marketplace:"站点",haveAccount:"已有账户？",discoverProduct:"使用我们的深度分析来发掘你的产品Listing的全部潜能。"},rm="Listing质量分析",lm={unlockFullReport:"解锁完整报告",unlockYourReport:"解锁您的完整报告",signupUnlock:"免费注册解锁完整报告",signupForFree:"免费注册",login:"登陆"},cm={zeroSearches:"您还剩下0次搜索可用。",enterAsin:"输入一个产品ASIN或URL",analyze:"开始分析"},dm={title:"添加新的产品"},um={passed:"达标的ASIN",failed:"不达标的ASIN"},pm="我们正在处理!您的分析正在处理中。",mm={fullAccess:"获得Listing质量分析的所有权限",simplySignUp:"步骤简单，免费注册Helium 10账户",whenYouSignUp:"当您注册Helium 10账户",signUpForFree:"免费注册"},gm={addToFolder:"添加至文件夹",folder:"文件夹",keywords:"关键词",link:"创建新文件夹"},hm={topKeywords:"排名靠近关键词",keywordsSelected:"已选关键词"},ym={0:"该ASIN没有月搜索量大于500的关键词。使用Cerebro来发掘更多关键词，优化您的Listing。",1:"搜索的ASIN没有共同的排名靠前的关键词"},fm={listingSearch:"Listing分析搜索",completeAnalysis:"/ 您的完整分析"},Sm="选中的ASIN暂无可用数据",vm={title:"[%key_id:162605417%]",subtitle:"选择其中单个的ASIN来查看详细分析",titleTooltip:"将ASIN的表现和组平均水平以及市场领导者进行比较",newTitle:"竞争对手分析"},bm={title:"想查看完整的关键字列表吗？",subtitle:"使用Cerebro来进行深入的关键词挖掘，发现更多可用关键词"},wm={noKeyword:"没有找到关键词结果",tooltip:"[%key_id:162605419%]",searchTrue:"排名靠前关键词定义：ASIN自然排名在前十的关键词且月搜索量大于500",searchFalse:"排名靠前关键词定义：至少两个ASIN的共同关键词，且平均自然排名在前10位，以及月搜索量大于500",metrics:{totalKeywords:{title:"所有共同关键词",tooltip:"至少2个ASIN的自然排名都进入前306名的关键词的数量"},top10Keywords:{title:"共同排名前十的关键词",tooltip:"至少 2 个 ASIN 的平均自然排名< 10的关键词的数量"},totalSearchVolume:{title:"共同关键词的总搜索量",tooltip:"共同关键词累计产生的总搜索量"},top10SearchVolume:{title:"共同排名前十关键词的总搜索量",tooltip:"共同排名前十的关键词累计产生的总搜索量"}},metricsSingle:{totalKeywords:{title:"总关键词",tooltip:"自然排在前 306 位的关键词数量"},top10Keywords:{title:"排名前十的关键词",tooltip:"自然排名小于十的ASIN 的排名的关键词数量"},totalSearchVolume:{title:"总搜索量",tooltip:"所有关键词产生的综合搜索量"},top10SearchVolume:{title:"搜索量前十名",tooltip:"前 10 个关键词产生的综合搜索量"}}},Am="Listing得分",xm={tooltipContent:"得分基于该关键词排名下的所有ASIN",title:"热门关键词词组"},km={searchMagnet:"去Magnet查词",searchAmazon:"去亚马逊搜索"},Tm="所有产品",Cm={topKeywords:"高排名关键词。",keywordsSelect:"已选关键词",phrase:"词组",search:"搜索量",rank:"自然排名",performanceScore:"平均质量得分",organicPosition:"平均自然排名",searchVolume:"搜索量",phraseNew:"关键词词组",keywordSales:"关键词销量",cpr:"CPR"},zm={yes:"是",no:"否",asin:"ASIN",title:"标题",score:"得分",text:{market:"市场平均",group:"组平均",marketNew:"前 5 名竞争对手平均值",groupNew:"搜索产品平均值"},monthlySales:{title:"销量",tooltip:"过去 30 天预计售出的单位数量"},monthlyRevenue:{title:"收入",tooltip:"一个产品在过去30天内的估计销售额"},price:{title:"价格",tooltip:"产品的销售价格。"},salesRank:{title:"BSR",tooltip:"(Best Seller Rank) 亚马逊授予的主要类目排名"},reviewCount:{title:"评论数量",tooltip:"客户评论总数"},reviewsRating:{title:"评分",tooltip:"亚马逊客户评论从差 (1) 到优秀 (5)"},phrase:"词组",amazonChoice:"Amazon Choice",searchVolume:"搜索量",organicPosition:"平均自然排名",performance:"平均质量得分"},Nm="查看产品",Pm={bad:"产品Listing符合少数亚马逊最佳标准。",good:"产品Listing符合部分亚马逊最佳标准。",excellent:"产品Listing符合大部分亚马逊最佳标准。"},Im={bad:"平均而言，产品Listing符合少数亚马逊最佳标准。",good:"平均而言，产品Listing符合部分亚马逊最佳标准。",excellent:"平均而言，产品Listing符合大部分亚马逊最佳标准。"},Mm="评分基于指标达标数量",$m="评分基于所输入的所有ASIN的平均指标达标数量",Lm={0:"Listing得分",1:"关键词分析",2:"市场分析"},jm={0:"Listing_Score",1:"Keyword_Analysis",2:"Market_Analysis",3:"Listing_Analyzer"},Bm={looking:"想要更快查找结果？",signup:"注册",foryou:"免费注册账户，立即获得更详细分析报告。"},Fm={success:"成功",fetchingData:"提取数据…"},Rm={title:"记录",close:"关闭",table:{results:"结果",asins:"ASIN",marketplace:"站点",date:"日期",noResultsFound:"找不到结果。"},description:"查找以前的 Listing Analyzer 搜索并重新加载，不使用配额。",newTable:{product:"产品",searchType:"搜索类型",date:"日期",marketplace:"站点"}},Dm={single:"评分基于指标达标数量",multi:"评分基于所输入的所有ASIN的平均指标达标数量"},Em='关键词成功加入 "{targetFolderName}" 文件夹',Vm="分析进行中，敬请稍后...预计将在一分钟内完成  ({progress}/100)",Om="比较各ASIN的关键指标",Um={listingQualityScore:{title:"Listing质量得分(LQS)",tooltip:"Listing质量得分 (LQS) 是对该产品的内容、媒体和评论的分析"},sellerCountry:{title:"卖家国家/地区",tooltip:"卖家所在国家/地区"},reviewsRating:{title:"评分",tooltip:"亚马逊客户评论从差 (1) 到优秀 (5)"},reviewCount:{title:"评论数量",tooltip:"客户评论总数"},age:{title:"年龄（月）",tooltip:"从原始List日期开始的月数"},price:{title:"价格",tooltip:"产品的销售价格。"},monthlySales:{title:"月销量",tooltip:"过去 30 天的估计单位销量"},monthlyRevenue:{title:"月销售额",tooltip:"过去 30 天的预计销售额"},sellerType:{title:"配送方式",tooltip:"存储和运输方式<br/> FBA = 亚马逊配送<br/> FBM = 商家配送<br/>亚马逊 = 亚马逊销售"},top10Keywords:{title:"排名前十的关键词",tooltip:"该产品排名前 10 的关键词数量"},top10SearchVolume:{title:"搜索量前十名",tooltip:"该产品排名前 10 的关键词的总搜索量"},metrics:"指标",product:{title:"产品"}},Km={most:"最大机会",mostTooltip:"基于竞争成熟度更容易打入利基市场",least:"最少的机会",leastTooltip:"基于竞争成熟度更难打入利基市场"},qm={placeholder:"最多输入 {maxAsins} 个产品ASIN"},Gm="平均Listing质量得分 (LQS) 分析",_m="平均 LQS",Hm={button:"查看 Cerebro 中的完整关键词列表"},Wm={phrase:"顾客搜索产品所使用的关键词或词组",searchVolume:"估计该关键词每月被搜索的次数",performanceScore:"业绩得分是衡量给定关键词列出的竞争对手的成功程度",organicPosition:"ASIN的平均自然排名",asin:"此 ASIN 的自然排名",keywordSales:"归因于每个关键词的月度销售量（单位数）的估计值",cpr:"搜索此关键词后，要使产品排名出现在此关键词的首页上半页需要在连续8 天内售出的预估单位数量"},Qm={csv:"...到一个CSV文件",xlsx:"...为XLSX文件"},Ym={goToListingAnalyzer:"转到Listing分析器",title:"媒体比较",description:"ASIN 的媒体分析",productDetails:"产品详情",image:"图片 {position}",video:"录像带 {position}"},Zm={"la-101":"ASIN应包含10个字符。","la-102":"无效ASIN：{asin}",asinAlreadyAdded:"ASIN已经被添加过",common:{400:"输入的数据错误或无结果",402:"您已超出使用限额",403:"拒绝访问",404:"未找到",409:"输入的数据与您先前操作冲突",422:"输入的数据无效",429:"限额用完",500:"未知错误",503:"功能暂时无法使用",undefined:"未知错误"},"la-1014":"该ASIN的类目暂不支持"},Jm="添加到My List",Xm="添加到 Keyword Tracker",eg="Listing质量得分 (LQS) 分析",tg="Listing质量得分",og="获取套餐",ng="即将推出",ig="在上方添加竞争对手 ASIN 以进行比较",sg={text:"在你的计划不包括表指标。",button:"升级以获得完整结果"},ag={maintenance:"我们正在执行计划中的维护，这可能会影响数据收集。",updateCogsBtn:"更新COGS",cogsIsMissing:"此站点中的产品缺失 COGS信息。更新 COGS 以提高费用的准确性。"},rg={title:"已达到配额上限",text:"你已经达到了你的月度限额"},lg={titles:{metricsAcrossASINs:"标题示例",common:"在Listing Analyzer中解锁此功能和其它功能",salesChart:"Sales charts are available from {betterPlan} and above"},subtitles:{metricsAcrossASINs:"副标题示例",common:"此功能仅适用于{plan}套餐计划或更高版本。"},plans:{free:"免费",starter:"探索版",platinum:"创业版",diamond:"精英版"},prices:{platinum:"99美元/月",diamond:"249美元/月"},features:{firstFeature:"第一个功能",mediaComparison:"媒体比较",monthlyUsesCount:"每月使用次数",sellerRegion:"卖家地区",keywordSales:"关键词销量"},buttons:{acceptButton:"了解套餐详情",declineButton:"以后再说",notRightNow:"以后再说",comparePlans:"比较套餐"},priceString:"{price}美元/月"},cg={button:"选择我的产品来添加",title:"我的产品",text:"在下方选择一个 ASIN 进行分析。",titleText:{other:"{count}产品"},fields:{product:{title:"产品"}},selectSellerId:"选择卖家 ID"},dg={connectToAmazon:{header:{text:"Helium 10 旨在保护您的信息，不会与第三方共享。",textResult:"我们知道数据安全对我们的客户有多么重要。我们承诺绝不共享或出售您的数据，并保持最高的数据安全标准。"},body:{title:"从您的分析中获得更多信息",text:"上个月有 7,054 名用户连接了他们的卖家账户。",textResult:"当您连接您的亚马逊账户时，请查看包含预警、流量和转化的销售概览。",tooltip:"将您的亚马逊账户连接到 Helium 10 将为您的业务提升提供强大的工具和洞察。"}},info:{title:"添加一个主要 ASIN 和最多 10 个竞争对手 ASIN",text:"分析您自己的产品，以确定优化listing的行动事项。添加竞争对手 ASIN 以分析多个商品、比较性能并发现优势/劣势。"},form:{uses:"本月使用了{total}搜索中的{uses}"}},ug={description:"查找并添加竞品进行比较。"},pg={"Your request was made with invalid credentials.":"您的请求使用账户无效。","Not found":"未找到 ASIN","Products not found":"未找到产品","Monitoring already disabled":"已停止监控","Monitoring already enabled":"已启用监控"},mg={title:"My List",subtitle:"在下方最多选择{number} 个ASIN 进行分析。",table:{getTitleText:"{total}产品"}},gg={copy:"复制 {name}",copied:"{name} 已复制"},hg={singleSearch:"单一搜索",multiSearch:"多重搜索"},yg={title:"分析您的产品Listing、您的竞争对手并评估您销售的市场。",productTitleLoading:"Loading..."},fg={title:"销售概览",tooltip:"销售概览显示 ASIN 的最新销售统计信息和预警，包括 FBA 和 FBM，并允许您根据日期、销售额和销售单位过滤结果。",tabs:{sales:"销量",units:"单位"},periodsPlaceholder:"期间",periods:{today:"今天",yesterday:"昨天",previousDay:"前一天",lastNDays:"过去 {N} 天"},noData:"无数据",export:{sales:"销量 ({date})",salesTrend:"销量趋势 ({date})",units:"单位销量（ {date} ）",unitsTrend:"单位销量趋势 ( {date} )",salesEstimation:"销量估算({date})",salesEstimationTrend:"销量估算趋势 ( {date} )",unitsEstimation:"销量估算({date})",unitsEstimationTrend:"销量估算趋势 ( {date} )"},profitsButton:{title:"在Profits中查看更多",tooltip:"Profits 解释了此 ASIN 的更详细的产品表现"}},Sg={button:"设置Alerts",gross:"总销售额/单位",title:"Alerts",view:{other:"查看第{number}个（共 {count}个）预警 Alerts"},viewAll:"查看全部",emptyAlerts:"该产品在这一天没有任何预警",setUpAlerts:{text:"查看该产品的历史事件变化",button:"设置Alerts"},commonPart:"从{from}到{to}",tooltip:"启用 ASIN 监控以追踪变更（同一 ASIN 下的所有 SKU 都将启用监控）。",eventType:{1:"产品标题改变",2:"产品类目改变",3:"产品类目改变",4:"产品图片改变",5:"卖家数量改变",6:"Buy Box改变",7:"价格改变",8:"产品宽度已更改",9:"产品高度已更改",10:"产品长度已更改",11:"产品重量已更改",12:"产品 BSR 已更改",13:"已创建产品截图",14:"失去Buy Box",15:"获得Buy Box",16:"产品尺寸已更改",17:"新的5星级产品评论",18:"新的4星级产品评论",19:"新的3星级产品评论",20:"新的 2 星产品评论",21:"新 1 星产品评论",22:"新的1-3星产品评论",23:"Listing被禁止",24:"Listing不再被禁止",25:"标记为成人",26:"标记为非成人",27:"亚马逊FBA费用已更改",28:"补货状态已更改",29:"移库状态已更改",30:"产品描述已更改",31:"产品要点已更改"}},vg={downloadCSV:"下载CSV文件",downloadXLS:"下载 XLS",downloadPNG:"下载 PNG 图像",downloadJPEG:"下载JPEG图像"},bg={day:{other:"天"},year:{other:"年"},allTime:"全部时间"},wg={bsr:"销量排名"},Ag={text:"糟糕。出错了！",button:"重新加载"},xg={title:"提高你的分数",text:"联系我们验证过的合作伙伴，以帮助您的listing。",button:"浏览合作伙伴"},kg={product:{myProduct:"我的产品"},backToSearch:"返回搜索",BuyBoxInfo:{LQS:"LQS",listingQualityScoreBox:"Listing质量得分",priceBox:"价格",stockBox:"现货",reviewCountBox:"评论数量",ageBox:"年龄（月）"}},Tg="比较各个 ASIN 的指标，以找出listing的优势和劣势。",Cg={columns:{product:{title:"产品",tooltip:"空"},listingQualityScore:{title:"LQS",tooltip:"Listing质量得分 (LQS) 是对该产品的内容、媒体和评论的分析"},categoryBSR:{title:"类目 BSR",tooltip:"类目最佳卖家排名（BSR）"},sellerRegion:{title:"卖家地区",tooltip:"卖家所在国家/地区"},stock:{title:"现货",tooltip:"估算剩余存货数量",value:"{number}订单限制"},coupon:{title:"折扣码",tooltip:"当前优惠券代码"},price:{title:"价格",tooltip:"历史价格与价格趋势"},monthlySales:{title:"月销量",tooltip:"历史月销售额和销售趋势"},monthlyRevenue:{title:"月销售额",tooltip:"月销售额"},reviewsCount:{title:"评论",tooltip:"评论数与评分"},seller:{title:"卖家",tooltip:"卖家姓名和卖家数量",sellerNameTooltip:"卖家姓名",numberOfSellersTooltip:"活跃卖家数量"},lastYearSales:{title:"去年销量",tooltip:"去年销售额与销售趋势"},shippingDetails:{title:"配送详情",tooltip:"运输尺寸分级与尺寸大小"},weight:{title:"重量（磅）",tooltip:"包装重量（磅）"},storageFee:{title:"仓储费用",tooltip:"仓储费（1,000 单位/月）",janSept:"1 月 - 9 月",octDec:"10 月 - 12 月"},bestSalesPeriod:{title:"最佳销售期",tooltip:"产品销量最高的月份"},age:{title:"年龄（月）",tooltip:"热销产品的平均listing时长"},numberOfImages:{title:"图片的数量",tooltip:"产品listing中的图片数量"},variationCount:{title:"变体数量",tooltip:"产品变体数量"},salesToReviews:{title:"销量评论比",tooltip:"月销量/总评论数"},top10Keywords:{title:"排名前十的关键词",tooltip:"该产品排名前 10 的关键词数量"},top10SearchVolume:{title:"搜索量前十名",tooltip:"该产品排名前 10 的关键词的总搜索量"},title:{title:"标题"},category:{title:"类目"},bsr:{title:"BSR"},subcategory:{title:"子类目"},priceChange:{title:"价格变化"},salesChange:{title:"销量变化"},reviewCount:{title:"评论数量"},reviewsRating:{title:"评论评分"},salesYearOverYear:{title:"销量年同比"},sizeTier:{title:"尺寸分级"},width:{title:"宽度"},height:{title:"高度"},length:{title:"长度"}}},zg="Listing质量得分 (LQS) 是对该产品的内容、媒体和评论的分析",Ng={title:"销量估算概览",tooltip:"销售估算概览显示 ASIN 的估算销售统计数据，包括 FBA 和 FBM，并允许您根据日期、销售额和销售单位筛选结果。"},Pg={1:{title:"Listing质量得分",description:"即时评估Listing质量得分，测试您的Listing是否遵循最佳行业标准。评分基于10分制，综合评估Listing文案、图片、评论等指标。"},2:{title:"市场分析",description:"衡量您自己的品牌和竞品的营销策略成效。"},3:{title:"排名靠前关键词分析",description:"了解哪些关键词和词组在亚马逊上产生了最大作用。"}},Ig={1:"小型标准大小",2:"大型标件",3:"小型超大",4:"中等超大",5:"大型超大件",6:"特殊超大",7:"信封",8:"小型轻件",9:"小信纸",10:"大信纸",11:"加大信纸",12:"小信封",13:"标准信封",14:"大信封",15:"标准包裹",16:"小件",17:"标准大小",18:"超大",19:"标准超大",20:"重物大件",21:"超大号",22:"超大信封",23:"小包裹","-1":"不适用"},Mg={janSept:"1 月 - 9 月",octDec:"10 月 - 12 月"},$g={error:em,inputs:tm,buttons:om,topPanel:nm,landingPage:im,analyzeLoading:sm,laPreviewMain:am,listingAnalysis:rm,unlock:lm,asinInputForm:cm,enterNew:dm,breakdowns:um,onIt:pm,signUpFooter:mm,addToMyList:gm,headerButtons:hm,keywordsTable:ym,breadcrumbs:fm,noData:Sm,marketAnalysis:vm,footer:bm,numberKeywordsList:wm,listingScore:Am,tableHeader:xm,tableBody:km,allProducts:Tm,table:Cm,model:zm,card:Nm,descriptionSingleMap:Pm,descriptionMultiMap:Im,singleIfo:Mm,multiInfo:$m,exportButton:Lm,fileName:jm,progressBar:Bm,common:Fm,history:Rm,listingScoreInfo:Dm,keywordsAddedToFolderMessage:Em,analyzing:Vm,asinsMetricsTitle:Om,asinsMetrics:Um,opportunity:Km,tagInput:qm,listingAnalysisNew:Gm,listingScoreNew:_m,tableFooter:Hm,tableTooltips:Wm,exportOptions:Qm,mediaComparison:Ym,errors:Zm,addToMyListButton:Jm,addToKeywordTrackerButton:Xm,listingAnalysisNewSingle:eg,listingScoreNewSingle:tg,getPlan:og,comingSoon:ng,addCompetitor:ig,upgradeBanner:sg,banners:ag,limitModal:rg,upgradeModal:lg,myProducts:cg,landingPageNew:dg,getCompetitors:ug,alertsErrors:pg,addFromMyListModal:mg,copyButton:gg,widgets:hg,resultPageNew:yg,salesChart:fg,alerts:Sg,highchart:vg,dateRanges:bg,chartAxis:wg,chartError:Ag,improveYourScore:xg,topPanelResult:kg,asinsMetricsTooltip:Tg,asinsMetricsNew:Cg,listingAnalysisNewTooltip:zg,salesEstimationChart:Ng,cards:Pg,sizeTier:Ig,storageFee:Mg},Lg=new _i({en:Oc,de:al,es:bu,it:Xp,zh:$g},{logsEnabled:!1}),Nn=({children:e,forceLang:t})=>a.jsx(Hi,{strings:Lg,TranslateContext:Pn,forceLang:t,children:e}),Pn=b.createContext(null),k=()=>{const e=b.useContext(Pn);if(!e)throw new Error("[Translation] The provider is not defined");return e},jg=St(()=>({modal:null})),Vo=Wi(jg,"modal"),Bg=()=>{const{t:e}=k(),[t]=Vo(),o=()=>{Vo.close()};return a.jsxs(io,{isOpen:t,onClickOutside:o,onClose:o,title:e("amazonToken.modal.titleNew"),children:[a.jsxs(Fg,{children:[a.jsx(Rg,{icon:sn}),e("amazonToken.modal.sellers",{number:te({value:7054})})]}),a.jsxs(Dg,{children:[a.jsx("p",{children:e("amazonToken.modal.text.part1")}),a.jsx("p",{children:e("amazonToken.modal.text.part2New")})]}),a.jsxs(Eg,{children:[a.jsx(B,{buttonType:"secondary",type:"button",size:"200",onClick:o,children:e("buttons.decline")}),a.jsx(Vg,{href:"https://members.helium10.com/new-account/tokens-manager",target:"_blank",rel:"noreferrer",children:a.jsx(B,{buttonType:"primary",type:"button",size:"200",children:e("amazonToken.modal.acceptButton")})})]})]})},Fg=m.div`
  ${vt};
  display: flex;
  align-items: center;
  margin-top: ${({theme:e})=>e.spacing.sp16};
`,Rg=m(Z)`
  color: ${({theme:e})=>e.systemColors.green600};
  margin-right: ${({theme:e})=>e.spacing.sp8};
`,Dg=m.div`
  margin-top: ${({theme:e})=>e.spacing.sp32};
`,Eg=m.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: ${({theme:e})=>e.spacing.sp32};

  & > :not(:first-child) {
    margin-left: ${({theme:e})=>e.spacing.sp8};
  }
`,Vg=m.a`
  text-decoration: none;
`,Og=({visible:e,timeout:t=0,children:o,unmountOnExit:n=!0,...i})=>a.jsx(Qi,{in:e,timeout:t,unmountOnExit:n,mountOnEnter:!0,children:s=>a.jsx(Ug,{...i,state:s,children:o})}),Ug=m.div`
  transition: 0.2s;
  opacity: ${({state:e})=>e==="entered"?1:0};
  display: ${({state:e})=>e==="exited"?"none":"flex"};
`,Kg=m(Og)`
  z-index: 19999999998;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`,qg=e=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512.001 512.001",fill:"currentColor",width:"1em",height:"1em",...e,children:a.jsx("path",{d:"M284.286 256.002 506.143 34.144c7.811-7.811 7.811-20.475 0-28.285-7.811-7.81-20.475-7.811-28.285 0L256 227.717 34.143 5.859c-7.811-7.811-20.475-7.811-28.285 0-7.81 7.811-7.811 20.475 0 28.285l221.857 221.857L5.858 477.859c-7.811 7.811-7.811 20.475 0 28.285a19.938 19.938 0 0 0 14.143 5.857 19.94 19.94 0 0 0 14.143-5.857L256 284.287l221.857 221.857c3.905 3.905 9.024 5.857 14.143 5.857s10.237-1.952 14.143-5.857c7.811-7.811 7.811-20.475 0-28.285L284.286 256.002z"})}),Gg=e=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 477.867 477.867",fill:"currentColor",width:"1em",height:"1em",...e,children:a.jsx("path",{d:"M370.046 141.534c-6.614-6.388-17.099-6.388-23.712 0l-158.601 158.6-56.201-56.201c-6.548-6.78-17.353-6.967-24.132-.419-6.78 6.548-6.967 17.353-.419 24.132.137.142.277.282.419.419l68.267 68.267c6.664 6.663 17.468 6.663 24.132 0l170.667-170.667c6.548-6.779 6.36-17.583-.42-24.131z"})}),_g={darkGrey:"grey800",blue:"blue600",grey:"grey600",white:"white",lightGrayBackground:"grey100",darkBlue:"blue900"};function be(e){return function(t){return t.theme.systemColors[_g[e]]}}function In(e){return e<5?"bad":e<7?"good":"excellent"}const Hg={bad:"#f64f45",good:"#efcf1a",excellent:"#33cc99"},Wg=e=>Hg[In(e)],Ct=X`
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  font-weight: normal;
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  text-transform: initial;
`,Qg=m.h1`
  ${Ct};
  font-weight: bold;
  color: ${({theme:e})=>e.systemColors.blue900};
  font-size: ${({theme:e})=>e.fontSize.headerBig};
`,zt=m.h3`
  ${Ct};
  font-size: ${({theme:e})=>e.fontSize.h5};
  font-weight: bold;
`;m.h4`
  ${Ct};
  font-size: ${({theme:e})=>e.fontSize.middle};
  font-weight: 600;
`;const go=m.span`
  ${Ct};
  font-size: ${({theme:e})=>e.fontSize.small};
  font-weight: normal;
`,Mn=m(go)`
  line-height: 1.5;
  text-align: center;
  font-size: 16px;
  color: #6a6c6f;
`,$n=I("dialogs/openDialog"),Ln=I("dialogs/closeDialog"),Yg={openDialog:$n,closeDialog:Ln},Zg=_("dialogsAtom",null,e=>{e($n,(t,o)=>o),e(Ln,()=>null)}),Jg=()=>Yi.createPortal(a.jsx(th,{}),document.body),jn=m(Gg)`
  width: 88px;
  height: 88px;
  border-radius: 50%;
  border: 4px solid rgba(165, 220, 134, 0.2);
  color: #a5dc86;
`,Xg=m(qg)`
  border-radius: 50%;
  border: 4px solid #f27474;
  padding: 20px;
  width: 48px;
  height: 48px;
  color: #f27474;
`,eh={success:a.jsx(jn,{}),error:a.jsx(Xg,{})},th=()=>{const e=y(Zg,o=>o,[]),t=A(()=>Yg.closeDialog());return a.jsx(Kg,{visible:e!=null,unmountOnExit:!0,children:e&&a.jsx(oh,{dark:!0,children:a.jsxs(nh,{children:[eh[e.type],a.jsx(zt,{children:e.title}),a.jsx(Mn,{children:e.description}),a.jsx(B,{onClick:t,children:"OK"})]})})})},oh=m.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({dark:e})=>e?"rgba(0, 0, 0, 0.5)":"rgba(0, 0, 0, 0.1)"};
  overflow: hidden;
  overflow-y: auto;
`,nh=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${be("white")};
  box-shadow:
    rgba(0, 0, 0, 0.1) 0 0 1px 0,
    rgba(0, 0, 0, 0.2) 0 2px 4px 0;
  border-radius: 5px;
  padding: 35px 25px;
  width: 478px;
  color: ${be("darkGrey")};

  ${zt} {
    margin: 25px 0;
    font-size: 26px;
    font-weight: normal;
  }

  ${B} {
    margin-top: 26px;
  }

  ${jn} {
    margin: 10px;
  }
`,Qt=At("limitModal",{}),ih=()=>{const e=y(Qt.atom,n=>n.isOpen,[]),t=A(Qt.close),o=A(Tn);return a.jsx(yn,{data:{type:"usesLimitReached",toolTitle:"Listing Analyzer",tool:"listingAnalyzer"},modalProps:{isOpen:e},onBeforeAccept:o,onDecline:t})},ho=({disabled:e})=>{const{t}=k();return a.jsx($s,{project:"ListingAnalyzer",children:a.jsx(B,{buttonType:"tertiary",size:"100",icon:a.jsx(Z,{icon:Zi}),disabled:e,children:t("buttons.learn")})})},sh=e=>e!==void 0,ie=async({url:e,params:t,queryParams:o={},method:n="GET",tool:i="listing-analyzer",withCredentials:s=!0,domain:r})=>{var h;const l=Ke.parse(window.location.search).accountId||sessionStorage.getItem("currentAccountId")||String(window.accountId),c=n!=="GET"&&t?{body:JSON.stringify(t)}:{},d=new URLSearchParams(ma({accountId:l,...o},sh)),u=i==="listing-analyzer"?"listing-analyzer/la-api":i,p=await fetch(`${r||window.origin}/${u}/${e}${d?"?"+d:""}`,{method:n,...c,credentials:s?"include":"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}});if(((h=p.headers.get("Content-Type"))==null?void 0:h.indexOf("application/json"))===-1)throw new Error("Server error");const g=await p.json();if(!p.ok)throw new Error(g.message);return g};function Bn(...[e,t]){return ie({url:`${e}`,method:"POST",params:t||{},domain:j})}const ah=Symbol("analytics"),yo=_(ah,Bn,()=>[]),rh=e=>e.filter(t=>t!=null&&!isNaN(t)).reduce((t,o)=>{const n=t[0]<o?t[0]:o,i=t[1]>o?t[1]:o;return[n,i]},[e[0]||0,e[0]||0]),gt=(e,t)=>{const[o,n]=rh(e),s=(n-o)/t;return[...new Array(t)].map((l,c)=>c+1).map((l,c,d)=>({percentile:l,includeEnd:c===d.length-1,min:o+s*c,max:o+s*(c+1)}))},ht=({value:e,percentiles:t})=>t.reduce((o,n)=>n.min<=e&&(n.includeEnd&&n.max>=e||!n.includeEnd&&n.max>e)?n.percentile:o,t[0].percentile||1);function M(e,t=0){const o=10**t;return Math.round(e*o)/o}function Oo(e){return new Promise(t=>setTimeout(t,e))}function lh(e){return e.reduce((t,o)=>(t.byId[o.id]=o,t.order.push(String(o.id)),t),{byId:{},order:[]})}function Fn(e,t){for(const o in e){if(t!=null&&t.includes(o))continue;const n=e[o];if(n&&typeof n!="object")return!1;if(!Fn(n,t))return!1}return!0}const Rn=(e,t)=>{var o;return`https://${(o=F("AM","TLDomain",e))==null?void 0:o.domain}/dp/${t}`},Dn=()=>{const e=k();b.useEffect(()=>{ch.set(e)},[e])},ee=St(()=>({translation:null})),ch=Ji(ee,"translation"),fo=(e,t)=>{ve.error(e)},dh=async e=>await ie({url:"analyze-asins",method:"POST",params:e,domain:j,withCredentials:!0}),uh=async()=>await ie({url:"balance",method:"GET",domain:j}),En=async e=>await ie({url:"delete-history",method:"DELETE",queryParams:e,domain:j}),ph=async e=>{const t=e.sortName?{searchId:e.searchId,sort:e.asc?e.sortName:`-${e.sortName}`}:{searchId:e.searchId};return await ie({url:"get-keywords-section",method:"GET",queryParams:t,domain:j})},mh=async e=>await ie({url:"get-listing-score",method:"GET",queryParams:e,domain:j});function gh(e){return!!e.avgSeedSalesData}const hh=async e=>{var o,n;const t=await ie({url:"get-sales-section",method:"GET",queryParams:{searchId:e},domain:j});return gh(t)?t:{avgSeedSalesData:null,singleResponses:(o=t==null?void 0:t.seedSalesData)!=null&&o.asin?{[(n=t==null?void 0:t.seedSalesData)==null?void 0:n.asin]:t}:{}}},yh=async e=>await ie({url:"upload/get-upload-folders",method:"POST",tool:"keyword-manager",params:e,domain:j}),fh=async e=>await ie({url:"history",method:"GET",queryParams:e,domain:j}),Sh=async e=>await ie({url:"upload/pull-keywords",method:"POST",params:e,tool:"keyword-manager",domain:j}),vh=async e=>await ie({url:"status",method:"GET",queryParams:e,domain:j}),bh=async e=>await ie({url:"validate-asin",method:"GET",queryParams:e,domain:j}),Yt=async e=>await K({url:$(`${j}/listing-analyzer/la-api/validate-asin`,e),method:"GET",withCredentials:!0}),wh=Symbol("api"),Ah={validateAsin:bh,analyze:dh,status:vh,getListingScore:mh,getKeywordsSection:ph,history:fh,deleteHistory:En,getUploadFolders:yh,pullKeywords:Sh,balance:uh,getSalesSection:hh},Te=_(wh,Ah,()=>[]),xh=async e=>K({url:$(`${j}/listing-analyzer/la-api/history/${e.id}`,{}),method:"GET",withCredentials:!0}),le=H("getHistoryItem",async e=>{const t=await xh(e);let o=[];try{o=JSON.parse(t.asins)}catch{}return{...t,asins:o}}),Vn=Fe("getHistoryItemAction",async(e,{getState:t,dispatch:o})=>{var i;const n=t(le.atom);(String((i=n.payload)==null?void 0:i.id)!==String(e.id)||!n.content)&&o(le.actions.pending(e))}),So=x("getHistoryItemIsLoadingSelector",le.atom,e=>e.status==="loading"),kh=async(e,t)=>{const o="?"+Ds.stringify(e);return K({method:"GET",url:$(wa+o,{}),signal:t,withCredentials:!0})},vo=I("setSalesOverviewPeriod"),nt=_("salesOverviewTabAtom","gross",e=>{e(vo,(t,o)=>o)}),bo=H("getSalesSummary",async({asin:e,marketplace:t,sellerId:o,sellerSku:n})=>{const i=new Date,s={dateTo:re(Ue(Ee(i,-1)),"yyyy-MM-dd HH:mm:ss"),dateFrom:re(je(Ee(i,-1)),"yyyy-MM-dd HH:mm:ss")},r={dateTo:re(Ue(Ee(i,-2)),"yyyy-MM-dd HH:mm:ss"),dateFrom:re(je(Ee(i,-2)),"yyyy-MM-dd HH:mm:ss")},l={dateTo:re(Ue(Ee(i,-1)),"yyyy-MM-dd HH:mm:ss"),dateFrom:re(je(Ee(i,-7)),"yyyy-MM-dd HH:mm:ss")};return kh({sellerId:o,marketplace:t,periods:[s,r,l],asin:e,sellerSku:n})}),Th=x("summaryValuesSelector",D([bo.atom,nt]),([e,t])=>{const o=ee.getState().translation;return e.content&&o&&e.status==="loaded"?[{id:"yesterday"+t,title:o.t("salesChart.periods.yesterday"),...fe(e.content,t,0)},{id:"previousDay"+t,title:o.t("salesChart.periods.previousDay"),...fe(e.content,t,1)},{id:"lastNDays"+t,title:o.t("salesChart.periods.lastNDays",{N:7}),...fe(e.content,t,2)}]:null}),fe=(e,t,o)=>{const n=Number(e.results[t][o].current.value),i=Number(e.results[t][o].previous.value);return{value:n,trend:n-i}},Ch=e=>{if(e.scoreData.data)return{...e,singleSearchAsin:null};{const t=e.scoreData;return{scoreData:{data:{[t.asin]:t},overall:{metricData:t.metricData,overallScore:t.totalScore}},searchId:e.searchId,searchType:e.searchType,singleSearchAsin:t.asin,marketplaceId:e.marketplaceId,sellerId:e.sellerId,isMyAsin:e.isMyAsin,mainAsin:e.mainAsin,mainSku:e.mainSku,tokenId:e.tokenId}}},lt=Fe("listingScoreActions/getListingScore",async(e,{dispatch:t,getState:o})=>{const{getListingScore:n}=o(Te);if(e){const i=await n({searchId:e}),s=Ch(i),r=s.scoreData.data,l=Object.keys(r).reduce((c,d)=>{const u=r[d];return u&&(c[d]={asin:d,productUrl:u.productUrl||"https://amazon.com/dp/asin",title:u.title||"",imageUrl:u.imageUrl}),c},{});return t(W.fill(l)),s}else throw new Error("searchId field is required")},{rejectedReaction:({error:e},t)=>{const{navigate:o}=et.getState();o==null||o($(ne(),{}),{replace:!0}),fo(e)}}),On=I("listingScoreActions/cleanAnalyticsSubscribe"),zh=I("subscribeForAnalytics",(e,{subscribe:t,getState:o})=>{const n=o(yo),i=t(Mh,s=>{if(s)try{n("individual-score-event")}catch{}});t(On,i)}),we={get:lt,checkAsin:I("checkAsin"),switchOverall:I("switchOverall"),subscribeForAnalytics:zh,cleanAnalyticsSubscribe:On},Q=_("listingScoreDataAtom",{data:null,loading:!1,error:null,checkedAsin:null,singleSearchAsin:null},e=>{e(lt.pending,t=>({...t,loading:!0,error:null})),e(lt.fulfilled,(t,{result:{singleSearchAsin:o,...n}})=>({...t,data:n,checkedAsin:o,loading:!1,error:null,singleSearchAsin:o})),e(lt.rejected,(t,{error:o})=>({...t,loading:!1,error:o})),e(we.checkAsin,(t,o)=>{var n,i;return o&&!((n=t.data)!=null&&n.scoreData.data[o])||t.checkedAsin===o?t:Object.keys(((i=t.data)==null?void 0:i.scoreData)||{}).length>1?{...t,checkedAsin:o}:t}),e(we.switchOverall,t=>{var o;return{...t,checkedAsin:!((o=t.data)!=null&&o.scoreData)||t.checkedAsin?null:Object.keys(t.data.scoreData.data)[0]||null}})}),Nh=x(Q,e=>{var t;return F("AM","id",((t=e.data)==null?void 0:t.marketplaceId)||1).currency||"USD"}),Re=x("scoreDetailDataSelector",Q,e=>{var t;return((t=e.data)==null?void 0:t.scoreData)||null}),Ph=[],Ih=x("listingAsinsSelector",Re,e=>{const t=e==null?void 0:e.data;return t?Object.keys(t):Ph}),Mh=x("isDetailSelector",Q,e=>e.checkedAsin!=null),Nt=x("checkedAsinSelector",Q,e=>e.checkedAsin);x("checkedAsinDataSelector",D([Nt,Re]),([e,t])=>e&&(t==null?void 0:t.data[e])||null);const $h=x("singleSearchAsinSelector",Q,e=>e.singleSearchAsin);x("overallScoreDataSelector",Re,e=>{const t=e==null?void 0:e.overall.metricData;if(t){const o=Object.keys(t);return xt(o,n=>{var i;return((i=t[n])==null?void 0:i.metricCategory)||""})}return null});x("checkedAsinMetricDataSelector",D([Nt,$h,Re]),([e,t,o])=>{var i;const n=e||t;return n&&o&&((i=o==null?void 0:o.data[n])==null?void 0:i.metricData)||null});x("detailScoreDataSelector",D([Nt,Re]),([e,t])=>{var o;if(e){const n=(o=t==null?void 0:t.data[e])==null?void 0:o.metricData;if(n){const i=Object.keys(n);return xt(i,s=>{var r;return((r=n[s])==null?void 0:r.metricCategory)||""})}}return null});const Pt=x("asinsData",Re,e=>Object.entries((e==null?void 0:e.data)||{}).map(([t,o])=>o).filter(t=>t!=null).map(t=>t)),se=x("listingMarketplaceInfoSelector",le.atom,e=>{var t,o;return(t=e.content)!=null&&t.marketplaceId?F("AM","id",(o=e.content)==null?void 0:o.marketplaceId):F("AM","TLDomain","com")}),Ge=x("sellerIdResultSelector",le.atom,e=>{var t;return((t=e==null?void 0:e.content)==null?void 0:t.sellerId)||null}),it=x("isMyAsinSelector",le.atom,e=>{var t;return!!((t=e.content)!=null&&t.isMyAsin)}),Pe=x("mainAsinSelector",D([le.atom,Pt]),([e,t])=>{var o,n;return((o=e.content)==null?void 0:o.mainAsin)||((n=t==null?void 0:t[0])==null?void 0:n.asin)||""}),It=x("mainSkuSelector",le.atom,e=>{var t;return((t=e.content)==null?void 0:t.mainSku)||""}),ue=x("mainAsinDataSelector",D([le.atom,Q]),([e,t])=>{var s,r,l,c,d;const o=e.content||{},n=o.mainAsin,i=String((s=t.data)==null?void 0:s.searchId)===String((r=e.content)==null?void 0:r.id)?(d=(c=(l=t.data)==null?void 0:l.scoreData)==null?void 0:c.data)==null?void 0:d[n]:void 0;return{...o,title:o.title||(i==null?void 0:i.title),imageUrl:o.imageUrl||(i==null?void 0:i.imageUrl),asin:o.mainAsin}}),Lh=x("summaryValuesExportSelector",D([bo.atom,it,Pe]),([e,t,o])=>{const n=ee.getState().translation;if(e.content&&n&&t){const i=n==null?void 0:n.t,s=fe(e.content,"gross",0),r=fe(e.content,"gross",1),l=fe(e.content,"gross",2),c=fe(e.content,"units",0),d=fe(e.content,"units",1),u=fe(e.content,"units",2),p={salesYesterday:{id:"salesYesterday",title:i("salesChart.export.sales",{date:i("salesChart.periods.yesterday")}),value:M(s.value,2)},salesTrendYesterday:{id:"salesTrendYesterday",title:i("salesChart.export.salesTrend",{date:i("salesChart.periods.yesterday")}),value:M(s.trend,2)},salesPreviousDay:{id:"salesPreviousDay",title:i("salesChart.export.sales",{date:i("salesChart.periods.previousDay")}),value:M(r.value,2)},salesTrendPreviousDay:{id:"salesTrendPreviousDay",title:i("salesChart.export.salesTrend",{date:i("salesChart.periods.previousDay")}),value:M(r.trend,2)},salesLastNDays:{id:"salesLastNDays",title:i("salesChart.export.sales",{date:i("salesChart.periods.lastNDays",{N:7})}),value:M(l.value,2)},salesTrendLastNDays:{id:"salesTrendLastNDays",title:i("salesChart.export.salesTrend",{date:i("salesChart.periods.lastNDays",{N:7})}),value:M(l.trend,2)},unitsYesterday:{id:"unitsYesterday",title:i("salesChart.export.units",{date:i("salesChart.periods.yesterday")}),value:M(c.value,0)},unitsTrendYesterday:{id:"unitsTrendYesterday",title:i("salesChart.export.unitsTrend",{date:i("salesChart.periods.yesterday")}),value:M(c.trend,0)},unitsPreviousDay:{id:"unitsPreviousDay",title:i("salesChart.export.units",{date:i("salesChart.periods.previousDay")}),value:M(d.value,0)},unitsTrendPreviousDay:{id:"unitsTrendPreviousDay",title:i("salesChart.export.unitsTrend",{date:i("salesChart.periods.previousDay")}),value:M(d.trend,0)},unitsLastNDays:{id:"unitsLastNDays",title:i("salesChart.export.units",{date:i("salesChart.periods.lastNDays",{N:7})}),value:M(u.value,0)},unitsTrendLastNDays:{id:"unitsTrendLastNDays",title:i("salesChart.export.unitsTrend",{date:i("salesChart.periods.lastNDays",{N:7})}),value:M(u.trend,0)}};return{header:Object.entries(p).reduce((g,[h,{title:f}])=>({...g,[h]:{title:f,width:20}}),{}),rows:Object.entries(p).reduce((g,[h,{value:f}])=>({...g,[h]:f}),{}),emptyRows:Object.entries(p).reduce((g,[h])=>({...g,[h]:""}),{}),mainAsin:o,hasMyAsin:!0}}else return{header:{},rows:{},emptyRows:{},mainAsin:o,hasMyAsin:!1}}),Zt=H("gesSalesSection",async(e,{getState:t})=>{const{getSalesSection:o}=t(Te);return o(e)}),Ae=_("salesSectionAtom",null,e=>{e(Zt.actions.fulfilled,(t,{result:o})=>o),e(Zt.actions.pending,t=>null)}),Uo={monthlySales:{title:"Sales",tooltip:"Estimated monthly sales"},monthlyRevenue:{title:"Revenue",isPrice:!0,tooltip:"Estimated monthly revenue"},price:{title:"Price",isPrice:!0},salesRank:{title:"BSR",tooltip:"Amazon's best seller rank"},reviewCount:{title:"Number of Reviews"},reviewsRating:{title:"Rating"}},jh=({isPrice:e,currency:t})=>o=>e&&o&&o>0?te({value:M(o/100,2),style:"currency",currency:t}):te({value:o&&o>0?o:null}),Bh=x("isEmptySelector",Ae,e=>e==null?!0:Fn(e,["asin"])),Fh=x("avgMarketAnalysisSelector",D([Ae,Nt,Bh,Nh]),([e,t,o,n])=>{if(e==null||o)return null;const i=t?e.singleResponses[t]:null;return Object.keys(Uo).map(r=>{var p,g,h,f,v,S;const l=Uo[r],c=jh({isPrice:!!l.isPrice,currency:n}),d=Math.max(((p=i==null?void 0:i.seedSalesData)==null?void 0:p[r])||0,((g=i==null?void 0:i.avgCompetitorsSalesData)==null?void 0:g[r])||0,((h=e==null?void 0:e.avgSeedSalesData)==null?void 0:h[r])||0)||1,u=Object.entries(e.singleResponses).reduce((w,[N,T])=>{var E;return T&&(w||(w={}),w[N]=c(((E=T==null?void 0:T.seedSalesData)==null?void 0:E[r])||void 0)),w},void 0);return{title:`model.${r}.title`,tooltip:`model.${r}.tooltip`,charts:[...i&&t?[{text:t,value:c(((f=i==null?void 0:i.seedSalesData)==null?void 0:f[r])||void 0),percents:(((v=i==null?void 0:i.seedSalesData)==null?void 0:v[r])||0)>0?100*(((S=i==null?void 0:i.seedSalesData)==null?void 0:S[r])||0)/d:0,isHighlighted:!0},{text:"model.text.marketNew",value:c(i.avgCompetitorsSalesData[r]||void 0),percents:(i.avgCompetitorsSalesData[r]||0)>0?100*(i.avgCompetitorsSalesData[r]||0)/d:0}]:[],...e.avgSeedSalesData?[{text:"model.text.groupNew",value:c(e.avgSeedSalesData[r]||void 0),percents:(e.avgSeedSalesData[r]||0)>0?100*(e.avgSeedSalesData[r]||0)/d:0,details:u}]:[]]}})}),Ko={asin:"",monthlyRevenue:"",monthlySales:"",price:"",reviewCount:"",salesRank:"",reviewsRating:""};function Et(e){return{...e,monthlyRevenue:e.monthlyRevenue!=null&&e.monthlyRevenue>0?M(e.monthlyRevenue/100,2):null,price:e.price!=null&&e.price>0?M(e.price/100,2):null,reviewsRating:e.reviewsRating!=null&&e.reviewsRating>0?Number(e.reviewsRating):e.reviewsRating}}const Rh=x("marketAnalysisForExportSelector",Ae,e=>{var o;const t=(o=ee.getState().translation)==null?void 0:o.t;return e!=null&&e.singleResponses&&t?{headers:{asin:{title:"ASIN",width:15},monthlySales:{title:t("model.monthlySales.title"),width:15},monthlyRevenue:{title:t("model.monthlyRevenue.title")+", $",width:15},price:{title:t("model.price.title")+", $",width:15},salesRank:{title:t("model.salesRank.title"),width:15},reviewCount:{title:t("model.reviewCount.title"),width:15},reviewsRating:{title:t("model.reviewsRating.title"),width:15}},rows:[...e.avgSeedSalesData?[Et({...e.avgSeedSalesData,asin:t("model.text.groupNew")}),Ko]:[],...Object.entries(e.singleResponses).reduce((i,[s,r])=>(r&&(i.push(Et({...r==null?void 0:r.seedSalesData,asin:s})),i.push(Et({...r.avgCompetitorsSalesData,asin:t("model.text.marketNew")})),i.push(Ko)),i),[])]}:null}),Dh=Fe("switchActions/analyze",async({searchSource:e},t)=>{const{analyze:o}=t.getState(Te),n=t.getState(Lt),i=t.getState(wo);if(!i)throw new Error("No main asin selected");const{asin:s,sellerId:r,sellerSku:l,tokenId:c}=i,d=t.getState(Jt),{navigate:u,location:p}=et.getState(),{searchId:g}=Ta((p==null?void 0:p.search)||""),{searchId:h}=await o({asins:n,marketplaceId:d,searchSource:e||(g?"results_page":"landing_page"),mainAsin:s,sellerId:r,mainSku:l,tokenId:c});return h&&(t.dispatch(Vn.pending({id:String(h)})),u==null||u($(ne(),{searchId:h}))),{searchId:h}},{rejectedReaction:({error:e},t)=>{e==="Not enough Uses left"?t.dispatch(Qt.open({})):fo(e)}}),Eh=Fe("checkStatusAction",async({searchId:e},{getState:t,dispatch:o})=>{o(G.start({searchId:e}));const{status:n}=t(Te),i=ee.getState().translation,{navigate:s}=et.getState();let r;const l=await n({searchId:String(e)});for(r=l.status,await Oo(20),o(G.status({searchId:e,progress:l.progress}));r<2;){const c=Ke.parse(window.location.search).searchId;if(String(e)===String(c)){await Oo(2e3);const d=await n({searchId:String(e)});r=d.status,o(G.status({searchId:e,progress:d.progress}))}else r=100}r===2&&(o(we.get.pending(e)),o(Gn.get.pending({searchId:e})),o(Zt.actions.pending(e))),r===3&&(s==null||s($(ne(),{}),{replace:!0})),o(G.complete({searchId:e}))}),Vh=I("switchActions/start"),Oh=I("switchActions/status"),Uh=I("switchActions/complete"),G={setSearchId:I("setSearchId"),analyze:Dh,status:Oh,start:Vh,complete:Uh,switchToAddAsins:I("switchToAddAsins",()=>{const{navigate:e}=et.getState();e==null||e($(ne(),{}))}),selectMarketplace:I("selectMarketplace",(e,{dispatch:t})=>{t(Ie.add(null))})},Kh={loading:!1,complete:!1,progress:null,error:!1,marketplace:"com",searchId:null},ce=_("switchAtom",Kh,e=>{e(G.analyze.pending,t=>({...t,loading:!0,complete:!1,error:!1,progress:0})),e(G.analyze.fulfilled,(t,{result:{searchId:o}})=>({...t,loading:!1,searchId:o})),e(G.analyze.rejected,t=>({...t,loading:!1,error:!0})),e(G.selectMarketplace,(t,o)=>({...t,marketplace:o})),e(G.status,(t,{progress:o,searchId:n})=>String(n)===String(t.searchId)?{...t,progress:o}:t),e(G.start,(t,{searchId:o})=>({...t,loading:!0,complete:!1,progress:null,searchId:o})),e(G.complete,t=>({...t,loading:!1,complete:!0,progress:100})),e(we.get.fulfilled,(t,{result:o})=>({...t,marketplace:so("id",o.marketplaceId).TLDomain}))}),ae=x(ce,({marketplace:e})=>F("AM","TLDomain",e||"com")),Jt=x(ce,({marketplace:e})=>String(F("AM","TLDomain",e||"com").id)),Un=x(ce,({marketplace:e})=>String(F("AM","TLDomain",e??"com").store)),ct=Fe("keywordAnalysis/get",async(e,{getState:t})=>{const{getKeywordsSection:o}=t(Te);if(e.searchId){const n=await o({...e,searchId:e.searchId}),{keywords:i,...s}=n,r=lh(i.map(d=>({...d,searchVolume:M(d.searchVolume),organicPosition:M(d.organicPosition,1),performanceScore:d.performanceScore?M(d.performanceScore||0,1):void 0}))),l=e.sortName&&e.asc!==void 0?{sortName:e.sortName,asc:e.asc}:{sortName:n.searchType===Ht.Single?"organicPosition":"performanceScore",asc:n.searchType===Ht.Single};return{...s,keywords:r,...l}}else throw new Error("searchId field is required")},{rejectedReaction:({error:e},t)=>{const{navigate:o}=et.getState();o==null||o($(ne(),{}),{replace:!0}),fo(e)}}),qh=I("keywordAnalysis/continueInCerebro",(e,{getState:t})=>{const o=t(yo),n=t(pe).data;if(n){const{asins:i,marketplaceId:s}=n,l=qe(oe.getState())==="elite"?i:[...i].splice(0,10),c=$("/cerebro/index-extension",{asin:l.join(","),amazonstore:so("id",s).TLDomain,tool:"listing-analyzer"});o("exit-event",{tool:"cerebro"}),window.open(c)}}),Kn=I("keywordAnalysis/checkKeyword"),qn=I("keywordAnalysis/checkAllKeyword"),Gn={get:ct,continueInCerebro:qh,checkKeyword:Kn,checkAllKeyword:qn},Gh={data:null,loading:!1,error:null,checkedKeyword:{}},pe=_("keywordAnalysisAtom",Gh,e=>{e(ct.pending,t=>({...t,loading:!0,error:null})),e(ct.fulfilled,(t,{params:o,result:n})=>({...t,loading:!1,error:null,data:n,...o.sortName?{sortName:o.sortName,asc:o.asc}:{}})),e(ct.rejected,(t,{error:o})=>({...t,loading:!1,error:o})),e(Kn,(t,o)=>({...t,checkedKeyword:{...t.checkedKeyword,[o]:!t.checkedKeyword[o]}})),e(qn,(t,o)=>{var n;return{...t,checkedKeyword:o?Object.keys(((n=t.data)==null?void 0:n.keywords.byId)||{}).reduce((i,s)=>(i[s]=!0,i),{}):{}}})}),_n=x("keywordsDataSelector",pe,e=>e.data||null),_h=[],Hh=x("metricsSelector",_n,e=>(e==null?void 0:e.metrics)||_h),Mt=x("isSIngleSearchSelector",_n,e=>(e==null?void 0:e.searchType)===Ht.Single),Hn=x("keywordsSelector",pe,e=>{var t;return((t=e.data)==null?void 0:t.keywords)||null}),Wh=x(D([Hn,Pt]),([e,t])=>{if(e==null)return null;const o=Object.entries(e.byId).map(([s,r])=>t.map(({asin:l})=>((r==null?void 0:r.positionRange)||{})[l]||(r==null?void 0:r.organicPosition))).flat().filter(s=>s!=null),n=gt(o,4),i=Object.entries(e.byId).map(([s,r])=>[s,r==null?r:{...r,...t.reduce((l,c)=>{var d;return{...l,[c.asin]:t.length>1?(d=r.positionRange)==null?void 0:d[c.asin]:r==null?void 0:r.organicPosition}},{}),...t.reduce((l,c)=>{var d;return{...l,[c.asin+"_percentile"]:ht({value:(t.length>1?(d=r.positionRange)==null?void 0:d[c.asin]:r==null?void 0:r.organicPosition)||0,percentiles:n})}},{})}]);return{...e,byId:{...e.byId},byId1:i.reduce((s,[r,l])=>({...s,[r]:l}),{})}}),Qh=e=>x(D([pe,Mt,Pt,ae]),([t,o,n,i])=>{var d,u;const s=(d=t.data)==null?void 0:d.keywords,r=n.map(p=>p.asin),l=r.reduce((p,g)=>(p[g]={title:g,width:25},p),{}),c=(u=ee.getState().translation)==null?void 0:u.t;return s&&c?{headers:{phrase:{title:c("model.phrase"),width:50},amazonChoice:{title:c("model.amazonChoice"),width:17},...!e&&i.TLDomain==="com"?{monthlySales:{title:c("table.keywordSales"),width:17}}:{},searchVolume:{title:c("model.searchVolume"),width:17},cpr:{title:c("table.cpr"),width:17},organicPosition:{title:c("model.organicPosition"),width:20},...o?{}:{performanceScore:{title:c("model.performance"),width:25},...l}},rows:s.order.map(g=>{const h=s.byId[g];return{phrase:h.phrase,amazonChoice:h.amazonChoice,...!e&&i.TLDomain==="com"?{monthlySales:h.monthlySales}:{},searchVolume:h.searchVolume,cpr:h.newCprExact?Math.round(h.newCprExact):0,organicPosition:h.organicPosition,...o?{}:{performanceScore:h.performanceScore,...r.reduce((f,v)=>{var S;return f[v]=((S=h.positionRange)==null?void 0:S[v])||0,f},{})}}})}:null}),Wn=I("setSelectedKeywordsPhrases");I("setSelectedKeywords",(e,{getState:t,dispatch:o})=>{const n=t(Hn);o(Wn(e.map(i=>{var s,r;return(r=(s=n==null?void 0:n.byId)==null?void 0:s[i])==null?void 0:r.phrase})))});_("selectedKeywords",[],e=>{e(Wn,(t,o)=>o)});const Yh=a.jsx(ho,{}),Zh=()=>{const{searchId:e}=ge(),t=y(Mt),o=y(Q),n=y(pe,s=>{var r,l;return(r=s.data)!=null&&r.marketplaceId?F("AMAZON","id",(l=s.data)==null?void 0:l.marketplaceId):F("AMAZON","TLDomain","com")},[]),i=y(pe,s=>s,[]);return a.jsx(Es,{searchId:e,isSingleSearch:t,marketplace:n,data:o.data,status:o.loading||i.loading?"loading":"loaded",learnButton:Yh})},Jh=x(D([Q,ce]),([e,t])=>e.loading||!t.complete?"loading":"loaded"),Xh=()=>{const{searchId:e}=ge(),t=y(Jh),o=y(Q,c=>c.data,[]),n=y(Mt),i=y(ae),s=b.useMemo(()=>({searchId:e,isSingleSearch:n,status:t,data:o,showImproveYourScore:!0,onClickImproveYourScoreLink:ey,showSelectedProductInLQS:!0,marketplace:i,selectedProduct:null,tool:"listingAnalyzer"}),[o,n,i,e,t]),r=y(Ae),l=b.useMemo(()=>({searchId:e,isSingleSearch:n,data:r,status:t,marketplace:i,selectedProduct:null}),[n,i,r,e,t]);return a.jsx(a.Fragment,{children:a.jsx(Vs,{searchId:e,isSingleSearch:n,listingQualityScoreProps:s,competitorAnalysisProps:l})})},ey=()=>Tt({eventName:"SSH - Listing Analyzer Link Clicked",eventProperties:{}}),ty=({to:e})=>{const{t}=k(),{searchId:o}=ge();return o?a.jsx(oy,{to:e,children:a.jsx(B,{icon:a.jsx(Z,{icon:ao}),buttonType:"text",children:t("topPanelResult.backToSearch")})}):null},oy=m(an)`
  padding-top: ${e=>e.theme.spacing.sp8};
  margin-top: ${e=>e.theme.spacing.sp32};
  margin-bottom: -${e=>e.theme.spacing.sp16};
  text-decoration: none;
`,ny=({title:e,description:t,children:o,centeredButtons:n})=>a.jsxs(iy,{children:[a.jsxs(sy,{children:[a.jsx(ay,{children:e}),t&&a.jsx(ry,{children:t})]}),a.jsx(ly,{centered:n,children:o})]}),iy=m.div`
  align-self: stretch;
  min-width: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: ${({theme:e})=>e.spacing.sp32};
  grid-row-gap: ${({theme:e})=>e.spacing.sp16};

  ${L.desktop} {
    grid-template-columns: 1fr auto;
  }

  padding: 40px 0 32px;
  justify-content: space-between;
`,sy=m.div``,ay=m.h1`
  ${Xi};
  margin: ${({theme:e})=>e.spacing.sp4} 0 0;
`,ry=m.h2`
  ${ze};
  margin: ${({theme:e})=>e.spacing.sp4} 0 0;
`,ly=m.div`
  display: flex;
  align-self: ${({centered:e})=>e?"center":"flex-end"};
  flex-wrap: wrap;

  & > button {
    white-space: nowrap;
  }

  & > :not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing.sp8};
  }

  ${B} {
    height: 32px;
  }

  ${L.mobileBefore} {
    & > * {
      margin-bottom: ${({theme:e})=>e.spacing.sp8};
    }
  }
`,cy=["amazon.com","amazon.ca","amazon.co.uk","amazon.com.mx","amazon.de","amazon.fr","amazon.es","amazon.it","amazon.in","amazon.nl","amazon.ae","amazon.com.br"],dy=cy.map(e=>es.find(({value:t})=>t===e)).filter(e=>e!=null),Qn=()=>{const{searchId:e}=ge(),t=y(ae).domain,o=A(n=>G.selectMarketplace(F("AM","domain",n).TLDomain),[]);return a.jsx(uy,{value:t,onChange:n=>n!=null&&o(n.value),options:dy,disabled:!!e,appendTo:document.body})},uy=m(Us)`
  width: 270px;
`,$t=(e,t,o)=>{var n;return e==="AM"?`https://${(t?(n=F(e,"store",t))==null?void 0:n.domain:"amazon.com")||"amazon.com"}/dp/${o}`:`https://www.walmart.com/ip/name/${o}`},rw=({sellerId:e,asin:t})=>$("https://members.helium10.com/alerts",{...t?{search:t}:{},...e?{sellerName:e}:{}}),py=e=>{const t=new RegExp(" ","g");return e.replace(t," ")},my=()=>{const{t:e}=k();return b.useMemo(()=>[{title:e("history.newTable.product"),field:"product",static:352,render:t=>{const o=t.productId||"",n=e("copyButton.copy",{name:"ASIN"}),i=e("copyButton.copied",{name:"ASIN"});return a.jsx(kt,{product:{title:py(t.title||""),imageSrc:t.imageUrl||"",href:$t("AM",t.marketplace,t.productId),sku:t.mainSku,asin:t.productId},tool:"listingAnalyzer",market:"AMAZON",marketplace:t.marketplace,blocks:[{text:`${o}`,copyContent:o,beforeCopyContent:a.jsx(ut,{label:n}),afterCopyContent:a.jsx(pt,{label:i})}],tooltipOptions:{appendTo:document.body}})},exportTitle:e("widgets.product")},{title:e("history.newTable.searchType"),field:"searchType",width:140,render:t=>a.jsx("div",{children:t.historyType!==1?e("widgets.multiSearch"):e("widgets.singleSearch")})},{title:e("history.newTable.date"),field:"date",sortable:!0,render:t=>a.jsx("div",{children:Gt(new Date(t.createdAt*1e3),"completeLong")})},{title:e("history.newTable.marketplace"),field:"marketplace",render:t=>a.jsxs(gy,{children:[a.jsx(hy,{children:a.jsx(uo,{})}),a.jsx(yy,{children:ro[(t.marketplace?F("AM","store",t.marketplace):F("AM","TLDomain","com")).domain]})]})}],[e])},gy=m.div`
  display: flex;
  align-items: center;
`,hy=m.div`
  width: 20px;

  & > * {
    width: 100%;
  }
`,yy=m.div`
  width: 27px;
  margin-left: ${({theme:e})=>e.spacing.sp4};

  & > * {
    width: 100%;
  }
`,fy=async e=>await K({url:$(`${j}/listing-analyzer/la-api/bulk-delete-history`,{searchIds:e.ids},{arrayFormat:"bracket"}),method:"DELETE",withCredentials:!0}),Yn=b.memo(({disabled:e})=>{const{t}=k(),o=tt(),n=my(),i=b.useCallback(s=>o($(ne(),{searchId:s.id})),[o]);return a.jsx(Ks,{openCallback:i,disabled:e,description:t("history.description"),prepareRequestData:vy,prepareData:by,prepareMeta:wy,columns:n,requestUrls:{getHistory:`${j}/listing-analyzer/la-api/analyze-history`},deleteHistory:En,bulkDeleteHistory:fy,hideDate:!0})}),Sy={id:"productId",product:"title",date:"createdAt"},vy=({sortDirection:e,sortField:t,page:o,count:n,search:i})=>({sort:`${e==="DESC"?"-":""}${Sy[t]||t}`,page:o,per_page:n,search:i}),by=e=>({data:((e==null?void 0:e.data)||[]).map(t=>{var o;return{...t,ids:t.productId,productIds:JSON.parse(t.asins),historyType:t.searchType,marketplace:F("AM","id",t.marketplaceId).store,productId:(o=JSON.parse(t.asins))==null?void 0:o[0]}}),meta:{total:(e==null?void 0:e.totalCount)||0}}),wy=e=>({meta:{per_page:e==null?void 0:e.perPage,total:e==null?void 0:e.totalCount}});function Ay({xlsx:e,data:t,sheetName:o}){const n=e.sheet(o);n.style({rtl:!1});const i=e.style({fontWeight:"bold",textAlign:"justify"}),s=e.style({textAlign:"justify"}),r=e.style({textAlign:"right"}),l=Object.keys(t.headers);ky(n,l,t.headers,i);const c=Ty(n,l,s,r);t.rows.forEach((d,u)=>{c(d,u+2)})}async function xy(e,t){const o=new Ls;e.forEach(({data:n,name:i})=>{n!=null&&Ay({xlsx:o,data:n,sheetName:i})}),o.save(`${t}.xlsx`)}const ky=(e,t,o,n)=>{t.forEach((i,s)=>{e.col(s+1).width(o[i].width),e.set(o[i].title,{row:1,col:s+1,style:n})})},Ty=(e,t,o,n)=>(i,s)=>{t.forEach((r,l)=>{const c=i[r]===null?"N/A":i[r]||"";e.set(c,{row:s,col:l+1,style:typeof c=="number"?n:o})})};function Cy(e){const t=[],o=Object.keys(e.headers);return t.push(o.map(n=>e.headers[n].title)),e.rows.forEach(n=>{t.push(o.map(i=>n[i]!==null?n[i]:"N/A"))}),t}function zy(e,t){return e.map(o=>o.map(n=>isNaN(n)?`"${(n||"").replace(/"/g,'""')}"`:n).join(t)).join(`
`)}function rt(e,t){return e==null?null:zy(Cy(e),t)}var Zn={exports:{}};(function(e,t){(function(o,n){n()})(He,function(){function o(d,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type)?new Blob(["\uFEFF",d],{type:d.type}):d}function n(d,u,p){var g=new XMLHttpRequest;g.open("GET",d),g.responseType="blob",g.onload=function(){c(g.response,u,p)},g.onerror=function(){console.error("could not download file")},g.send()}function i(d){var u=new XMLHttpRequest;u.open("HEAD",d,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function s(d){try{d.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),d.dispatchEvent(u)}}var r=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof He=="object"&&He.global===He?He:void 0,l=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=r.saveAs||(typeof window!="object"||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(d,u,p){var g=r.URL||r.webkitURL,h=document.createElement("a");u=u||d.name||"download",h.download=u,h.rel="noopener",typeof d=="string"?(h.href=d,h.origin===location.origin?s(h):i(h.href)?n(d,u,p):s(h,h.target="_blank")):(h.href=g.createObjectURL(d),setTimeout(function(){g.revokeObjectURL(h.href)},4e4),setTimeout(function(){s(h)},0))}:"msSaveOrOpenBlob"in navigator?function(d,u,p){if(u=u||d.name||"download",typeof d!="string")navigator.msSaveOrOpenBlob(o(d,p),u);else if(i(d))n(d,u,p);else{var g=document.createElement("a");g.href=d,g.target="_blank",setTimeout(function(){s(g)})}}:function(d,u,p,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),typeof d=="string")return n(d,u,p);var h=d.type==="application/octet-stream",f=/constructor/i.test(r.HTMLElement)||r.safari,v=/CriOS\/[\d]+/.test(navigator.userAgent);if((v||h&&f||l)&&typeof FileReader<"u"){var S=new FileReader;S.onloadend=function(){var T=S.result;T=v?T:T.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=T:location=T,g=null},S.readAsDataURL(d)}else{var w=r.URL||r.webkitURL,N=w.createObjectURL(d);g?g.location=N:location.href=N,g=null,setTimeout(function(){w.revokeObjectURL(N)},4e4)}});r.saveAs=c.saveAs=c,e.exports=c})})(Zn);var Ny=Zn.exports,Jn={exports:{}};(function(e){var t={};e.exports=t,t.parse=function(o,n){for(var i=t.bin.readUshort,s=t.bin.readUint,d=0,r={},l=new Uint8Array(o),c=l.length-4;s(l,c)!=101010256;)c--;var d=c;d+=4,d+=4;var u=i(l,d);d+=2,i(l,d),d+=2;var p=s(l,d);d+=4;var g=s(l,d);d+=4,d=g;for(var h=0;h<u;h++){s(l,d),d+=4,d+=4,d+=4,d+=4,s(l,d),d+=4;var p=s(l,d);d+=4;var f=s(l,d);d+=4;var v=i(l,d),S=i(l,d+2),w=i(l,d+4);d+=6,d+=8;var N=s(l,d);d+=4,d+=v+S+w,t._readLocal(l,N,r,p,f,n)}return r},t._readLocal=function(o,n,i,s,r,l){var c=t.bin.readUshort,d=t.bin.readUint;d(o,n),n+=4,c(o,n),n+=2,c(o,n),n+=2;var u=c(o,n);n+=2,d(o,n),n+=4,d(o,n),n+=4,n+=8;var p=c(o,n);n+=2;var g=c(o,n);n+=2;var h=t.bin.readUTF8(o,n,p);if(n+=p,n+=g,l){i[h]={size:r,csize:s};return}var f=new Uint8Array(o.buffer,n);if(u==0)i[h]=new Uint8Array(f.buffer.slice(n,n+s));else if(u==8){var v=new Uint8Array(r);t.inflateRaw(f,v),i[h]=v}else throw"unknown compression method: "+u},t.inflateRaw=function(o,n){return t.F.inflate(o,n)},t.inflate=function(o,n){return o[0],o[1],t.inflateRaw(new Uint8Array(o.buffer,o.byteOffset+2,o.length-6),n)},t.deflate=function(o,n){n==null&&(n={level:6});var i=0,s=new Uint8Array(50+Math.floor(o.length*1.1));s[i]=120,s[i+1]=156,i+=2,i=t.F.deflateRaw(o,s,i,n.level);var r=t.adler(o,0,o.length);return s[i+0]=r>>>24&255,s[i+1]=r>>>16&255,s[i+2]=r>>>8&255,s[i+3]=r>>>0&255,new Uint8Array(s.buffer,0,i+4)},t.deflateRaw=function(o,n){n==null&&(n={level:6});var i=new Uint8Array(50+Math.floor(o.length*1.1)),s=t.F.deflateRaw(o,i,s,n.level);return new Uint8Array(i.buffer,0,s)},t.encode=function(o,n){n==null&&(n=!1);var i=0,s=t.bin.writeUint,r=t.bin.writeUshort,l={};for(var c in o){var d=!t._noNeed(c)&&!n,u=o[c],p=t.crc.crc(u,0,u.length);l[c]={cpr:d,usize:u.length,crc:p,file:d?t.deflateRaw(u):u}}for(var c in l)i+=l[c].file.length+30+46+2*t.bin.sizeUTF8(c);i+=22;var g=new Uint8Array(i),h=0,f=[];for(var c in l){var v=l[c];f.push(h),h=t._writeHeader(g,h,c,v,0)}var S=0,w=h;for(var c in l){var v=l[c];f.push(h),h=t._writeHeader(g,h,c,v,1,f[S++])}var N=h-w;return s(g,h,101010256),h+=4,h+=4,r(g,h,S),h+=2,r(g,h,S),h+=2,s(g,h,N),h+=4,s(g,h,w),h+=4,h+=2,g.buffer},t._noNeed=function(o){var n=o.split(".").pop().toLowerCase();return"png,jpg,jpeg,zip".indexOf(n)!=-1},t._writeHeader=function(o,n,i,s,r,l){var c=t.bin.writeUint,d=t.bin.writeUshort,u=s.file;c(o,n,r==0?67324752:33639248),n+=4,r==1&&(n+=2),d(o,n,20),n+=2,d(o,n,0),n+=2,d(o,n,s.cpr?8:0),n+=2,c(o,n,0),n+=4,c(o,n,s.crc),n+=4,c(o,n,u.length),n+=4,c(o,n,s.usize),n+=4,d(o,n,t.bin.sizeUTF8(i)),n+=2,d(o,n,0),n+=2,r==1&&(n+=2,n+=2,n+=6,c(o,n,l),n+=4);var p=t.bin.writeUTF8(o,n,i);return n+=p,r==0&&(o.set(u,n),n+=u.length),n},t.crc={table:function(){for(var o=new Uint32Array(256),n=0;n<256;n++){for(var i=n,s=0;s<8;s++)i&1?i=3988292384^i>>>1:i=i>>>1;o[n]=i}return o}(),update:function(o,n,i,s){for(var r=0;r<s;r++)o=t.crc.table[(o^n[i+r])&255]^o>>>8;return o},crc:function(o,n,i){return t.crc.update(4294967295,o,n,i)^4294967295}},t.adler=function(o,n,i){for(var s=1,r=0,l=n,c=n+i;l<c;){for(var d=Math.min(l+5552,c);l<d;)s+=o[l++],r+=s;s=s%65521,r=r%65521}return r<<16|s},t.bin={readUshort:function(o,n){return o[n]|o[n+1]<<8},writeUshort:function(o,n,i){o[n]=i&255,o[n+1]=i>>8&255},readUint:function(o,n){return o[n+3]*(256*256*256)+(o[n+2]<<16|o[n+1]<<8|o[n])},writeUint:function(o,n,i){o[n]=i&255,o[n+1]=i>>8&255,o[n+2]=i>>16&255,o[n+3]=i>>24&255},readASCII:function(o,n,i){for(var s="",r=0;r<i;r++)s+=String.fromCharCode(o[n+r]);return s},writeASCII:function(o,n,i){for(var s=0;s<i.length;s++)o[n+s]=i.charCodeAt(s)},pad:function(o){return o.length<2?"0"+o:o},readUTF8:function(o,n,i){for(var s="",r,l=0;l<i;l++)s+="%"+t.bin.pad(o[n+l].toString(16));try{r=decodeURIComponent(s)}catch{return t.bin.readASCII(o,n,i)}return r},writeUTF8:function(o,n,i){for(var s=i.length,r=0,l=0;l<s;l++){var c=i.charCodeAt(l);if(!(c&4294967168))o[n+r]=c,r++;else if(!(c&4294965248))o[n+r]=192|c>>6,o[n+r+1]=128|c>>0&63,r+=2;else if(!(c&4294901760))o[n+r]=224|c>>12,o[n+r+1]=128|c>>6&63,o[n+r+2]=128|c>>0&63,r+=3;else if(!(c&4294967295-(1<<21)+1))o[n+r]=240|c>>18,o[n+r+1]=128|c>>12&63,o[n+r+2]=128|c>>6&63,o[n+r+3]=128|c>>0&63,r+=4;else throw"e"}return r},sizeUTF8:function(o){for(var n=o.length,i=0,s=0;s<n;s++){var r=o.charCodeAt(s);if(!(r&4294967168))i++;else if(!(r&4294965248))i+=2;else if(!(r&4294901760))i+=3;else if(!(r&4294967295-(1<<21)+1))i+=4;else throw"e"}return i}},t.F={},t.F.deflateRaw=function(o,n,i,s){var r=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]],l=r[s],c=t.F.U,d=t.F._goodIndex;t.F._hash;var u=t.F._putsE,p=0,g=i<<3,h=0,f=o.length;if(s==0){for(;p<f;){var v=Math.min(65535,f-p);u(n,g,p+v==f?1:0),g=t.F._copyExact(o,p,v,n,g+8),p+=v}return g>>>3}var S=c.lits,w=c.strt,N=c.prev,T=0,E=0,P=0,z=0,Y=0,q=0;for(f>2&&(q=t.F._hash(o,0),w[q]=0),p=0;p<f;p++){if(Y=q,p+1<f-2){q=t.F._hash(o,p+1);var J=p+1&32767;N[J]=w[q],w[q]=J}if(h<=p){(T>14e3||E>26697)&&f-p>100&&(h<p&&(S[T]=p-h,T+=2,h=p),g=t.F._writeBlock(p==f-1||h==f?1:0,S,T,z,o,P,p-P,n,g),T=E=z=0,P=p);var R=0;p<f-2&&(R=t.F._bestMatch(o,p,N,Y,Math.min(l[2],f-p),l[3]));var v=R>>>16,C=R&65535;if(R!=0){var v=R>>>16,C=R&65535,V=d(v,c.of0);c.lhst[257+V]++;var O=d(C,c.df0);c.dhst[O]++,z+=c.exb[V]+c.dxb[O],S[T]=v<<23|p-h,S[T+1]=C<<16|V<<8|O,T+=2,h=p+v}else c.lhst[o[p]]++;E++}}for((P!=p||o.length==0)&&(h<p&&(S[T]=p-h,T+=2,h=p),g=t.F._writeBlock(1,S,T,z,o,P,p-P,n,g),T=0,E=0,T=E=z=0,P=p);g&7;)g++;return g>>>3},t.F._bestMatch=function(o,n,i,s,r,l){var c=n&32767,d=i[c],u=c-d+32768&32767;if(d==c||s!=t.F._hash(o,n-u))return 0;for(var p=0,g=0,h=Math.min(32767,n);u<=h&&--l!=0&&d!=c;){if(p==0||o[n+p]==o[n+p-u]){var f=t.F._howLong(o,n,u);if(f>p){if(p=f,g=u,p>=r)break;u+2<f&&(f=u+2);for(var v=0,S=0;S<f-2;S++){var w=n-u+S+32768&32767,N=i[w],T=w-N+32768&32767;T>v&&(v=T,d=w)}}}c=d,d=i[c],u+=c-d+32768&32767}return p<<16|g},t.F._howLong=function(o,n,i){if(o[n]!=o[n-i]||o[n+1]!=o[n+1-i]||o[n+2]!=o[n+2-i])return 0;var s=n,r=Math.min(o.length,n+258);for(n+=3;n<r&&o[n]==o[n-i];)n++;return n-s},t.F._hash=function(o,n){return(o[n]<<8|o[n+1])+(o[n+2]<<4)&65535},t.saved=0,t.F._writeBlock=function(o,n,i,s,r,l,c,d,u){var p=t.F.U,g=t.F._putsF,h=t.F._putsE,f,v,S,w,N,T,E,P,z;p.lhst[256]++,f=t.F.getTrees(),v=f[0],S=f[1],w=f[2],N=f[3],T=f[4],E=f[5],P=f[6],z=f[7];var Y=(u+3&7?8-(u+3&7):0)+32+(c<<3),q=s+t.F.contSize(p.fltree,p.lhst)+t.F.contSize(p.fdtree,p.dhst),J=s+t.F.contSize(p.ltree,p.lhst)+t.F.contSize(p.dtree,p.dhst);J+=14+3*E+t.F.contSize(p.itree,p.ihst)+(p.ihst[16]*2+p.ihst[17]*3+p.ihst[18]*7);for(var R=0;R<286;R++)p.lhst[R]=0;for(var R=0;R<30;R++)p.dhst[R]=0;for(var R=0;R<19;R++)p.ihst[R]=0;var C=Y<q&&Y<J?0:q<J?1:2;if(g(d,u,o),g(d,u+1,C),u+=3,C==0){for(;u&7;)u++;u=t.F._copyExact(r,l,c,d,u)}else{var V,O;if(C==1&&(V=p.fltree,O=p.fdtree),C==2){t.F.makeCodes(p.ltree,v),t.F.revCodes(p.ltree,v),t.F.makeCodes(p.dtree,S),t.F.revCodes(p.dtree,S),t.F.makeCodes(p.itree,w),t.F.revCodes(p.itree,w),V=p.ltree,O=p.dtree,h(d,u,N-257),u+=5,h(d,u,T-1),u+=5,h(d,u,E-4),u+=4;for(var U=0;U<E;U++)h(d,u+U*3,p.itree[(p.ordr[U]<<1)+1]);u+=3*E,u=t.F._codeTiny(P,p.itree,d,u),u=t.F._codeTiny(z,p.itree,d,u)}for(var de=l,he=0;he<i;he+=2){for(var ye=n[he],Me=ye>>>23,_e=de+(ye&(1<<23)-1);de<_e;)u=t.F._writeLit(r[de++],V,d,u);if(Me!=0){var De=n[he+1],Rt=De>>16,$e=De>>8&255,ke=De&255;u=t.F._writeLit(257+$e,V,d,u),h(d,u,Me-p.of0[$e]),u+=p.exb[$e],u=t.F._writeLit(ke,O,d,u),g(d,u,Rt-p.df0[ke]),u+=p.dxb[ke],de+=Me}}u=t.F._writeLit(256,V,d,u)}return u},t.F._copyExact=function(o,n,i,s,r){var l=r>>>3;return s[l]=i,s[l+1]=i>>>8,s[l+2]=255-s[l],s[l+3]=255-s[l+1],l+=4,s.set(new Uint8Array(o.buffer,n,i),l),r+(i+4<<3)},t.F.getTrees=function(){for(var o=t.F.U,n=t.F._hufTree(o.lhst,o.ltree,15),i=t.F._hufTree(o.dhst,o.dtree,15),s=[],r=t.F._lenCodes(o.ltree,s),l=[],c=t.F._lenCodes(o.dtree,l),d=0;d<s.length;d+=2)o.ihst[s[d]]++;for(var d=0;d<l.length;d+=2)o.ihst[l[d]]++;for(var u=t.F._hufTree(o.ihst,o.itree,7),p=19;p>4&&o.itree[(o.ordr[p-1]<<1)+1]==0;)p--;return[n,i,u,r,c,p,s,l]},t.F.getSecond=function(o){for(var n=[],i=0;i<o.length;i+=2)n.push(o[i+1]);return n},t.F.nonZero=function(o){for(var n="",i=0;i<o.length;i+=2)o[i+1]!=0&&(n+=(i>>1)+",");return n},t.F.contSize=function(o,n){for(var i=0,s=0;s<n.length;s++)i+=n[s]*o[(s<<1)+1];return i},t.F._codeTiny=function(o,n,i,s){for(var r=0;r<o.length;r+=2){var l=o[r],c=o[r+1];s=t.F._writeLit(l,n,i,s);var d=l==16?2:l==17?3:7;l>15&&(t.F._putsE(i,s,c,d),s+=d)}return s},t.F._lenCodes=function(o,n){for(var i=o.length;i!=2&&o[i-1]==0;)i-=2;for(var s=0;s<i;s+=2){var r=o[s+1],l=s+3<i?o[s+3]:-1,c=s+5<i?o[s+5]:-1,d=s==0?-1:o[s-1];if(r==0&&l==r&&c==r){for(var u=s+5;u+2<i&&o[u+2]==r;)u+=2;var p=Math.min(u+1-s>>>1,138);p<11?n.push(17,p-3):n.push(18,p-11),s+=p*2-2}else if(r==d&&l==r&&c==r){for(var u=s+5;u+2<i&&o[u+2]==r;)u+=2;var p=Math.min(u+1-s>>>1,6);n.push(16,p-3),s+=p*2-2}else n.push(r,0)}return i>>>1},t.F._hufTree=function(o,n,i){var s=[],r=o.length,l=n.length,c=0;for(c=0;c<l;c+=2)n[c]=0,n[c+1]=0;for(c=0;c<r;c++)o[c]!=0&&s.push({lit:c,f:o[c]});var d=s.length,u=s.slice(0);if(d==0)return 0;if(d==1){var p=s[0].lit,u=p==0?1:0;return n[(p<<1)+1]=1,n[(u<<1)+1]=1,1}s.sort(function(N,T){return N.f-T.f});var g=s[0],h=s[1],f=0,v=1,S=2;for(s[0]={lit:-1,f:g.f+h.f,l:g,r:h,d:0};v!=d-1;)f!=v&&(S==d||s[f].f<s[S].f)?g=s[f++]:g=s[S++],f!=v&&(S==d||s[f].f<s[S].f)?h=s[f++]:h=s[S++],s[v++]={lit:-1,f:g.f+h.f,l:g,r:h};var w=t.F.setDepth(s[v-1],0);for(w>i&&(t.F.restrictDepth(u,i,w),w=i),c=0;c<d;c++)n[(u[c].lit<<1)+1]=u[c].d;return w},t.F.setDepth=function(o,n){return o.lit!=-1?(o.d=n,n):Math.max(t.F.setDepth(o.l,n+1),t.F.setDepth(o.r,n+1))},t.F.restrictDepth=function(o,n,i){var s=0,r=1<<i-n,l=0;for(o.sort(function(d,u){return u.d==d.d?d.f-u.f:u.d-d.d}),s=0;s<o.length&&o[s].d>n;s++){var c=o[s].d;o[s].d=n,l+=r-(1<<i-c)}for(l=l>>>i-n;l>0;){var c=o[s].d;c<n?(o[s].d++,l-=1<<n-c-1):s++}for(;s>=0;s--)o[s].d==n&&l<0&&(o[s].d--,l++);l!=0&&console.log("debt left")},t.F._goodIndex=function(o,n){var i=0;return n[i|16]<=o&&(i|=16),n[i|8]<=o&&(i|=8),n[i|4]<=o&&(i|=4),n[i|2]<=o&&(i|=2),n[i|1]<=o&&(i|=1),i},t.F._writeLit=function(o,n,i,s){return t.F._putsF(i,s,n[o<<1]),s+n[(o<<1)+1]},t.F.inflate=function(o,n){var i=Uint8Array;if(o[0]==3&&o[1]==0)return n||new i(0);var s=t.F,r=s._bitsF,l=s._bitsE,c=s._decodeTiny,d=s.makeCodes,u=s.codes2map,p=s._get17,g=s.U,h=n==null;h&&(n=new i(o.length>>>2<<3));for(var f=0,v=0,S=0,w=0,N=0,T=0,E=0,P=0,z=0,Y,q;f==0;){if(f=r(o,z,1),v=r(o,z+1,2),z+=3,v==0){z&7&&(z+=8-(z&7));var J=(z>>>3)+4,R=o[J-4]|o[J-3]<<8;h&&(n=t.F._check(n,P+R)),n.set(new i(o.buffer,o.byteOffset+J,R),P),z=J+R<<3,P+=R;continue}if(h&&(n=t.F._check(n,P+(1<<17))),v==1&&(Y=g.flmap,q=g.fdmap,T=511,E=31),v==2){S=l(o,z,5)+257,w=l(o,z+5,5)+1,N=l(o,z+10,4)+4,z+=14;for(var C=0;C<38;C+=2)g.itree[C]=0,g.itree[C+1]=0;for(var V=1,C=0;C<N;C++){var O=l(o,z+C*3,3);g.itree[(g.ordr[C]<<1)+1]=O,O>V&&(V=O)}z+=3*N,d(g.itree,V),u(g.itree,V,g.imap),Y=g.lmap,q=g.dmap,z=c(g.imap,(1<<V)-1,S+w,o,z,g.ttree);var U=s._copyOut(g.ttree,0,S,g.ltree);T=(1<<U)-1;var de=s._copyOut(g.ttree,S,w,g.dtree);E=(1<<de)-1,d(g.ltree,U),u(g.ltree,U,Y),d(g.dtree,de),u(g.dtree,de,q)}for(;;){var he=Y[p(o,z)&T];z+=he&15;var ye=he>>>4;if(!(ye>>>8))n[P++]=ye;else{if(ye==256)break;var Me=P+ye-254;if(ye>264){var _e=g.ldef[ye-257];Me=P+(_e>>>3)+l(o,z,_e&7),z+=_e&7}var De=q[p(o,z)&E];z+=De&15;var Rt=De>>>4,$e=g.ddef[Rt],ke=($e>>>4)+r(o,z,$e&15);for(z+=$e&15,h&&(n=t.F._check(n,P+(1<<17)));P<Me;)n[P]=n[P++-ke],n[P]=n[P++-ke],n[P]=n[P++-ke],n[P]=n[P++-ke];P=Me}}}return n.length==P?n:n.slice(0,P)},t.F._check=function(o,n){var i=o.length;if(n<=i)return o;var s=new Uint8Array(Math.max(i<<1,n));return s.set(o,0),s},t.F._decodeTiny=function(o,n,i,s,r,l){for(var c=t.F._bitsE,d=t.F._get17,u=0;u<i;){var p=o[d(s,r)&n];r+=p&15;var g=p>>>4;if(g<=15)l[u]=g,u++;else{var h=0,f=0;g==16?(f=3+c(s,r,2),r+=2,h=l[u-1]):g==17?(f=3+c(s,r,3),r+=3):g==18&&(f=11+c(s,r,7),r+=7);for(var v=u+f;u<v;)l[u]=h,u++}}return r},t.F._copyOut=function(o,n,i,s){for(var r=0,l=0,c=s.length>>>1;l<i;){var d=o[l+n];s[l<<1]=0,s[(l<<1)+1]=d,d>r&&(r=d),l++}for(;l<c;)s[l<<1]=0,s[(l<<1)+1]=0,l++;return r},t.F.makeCodes=function(o,n){for(var i=t.F.U,s=o.length,r,l,c,d,u,p=i.bl_count,d=0;d<=n;d++)p[d]=0;for(d=1;d<s;d+=2)p[o[d]]++;var g=i.next_code;for(r=0,p[0]=0,l=1;l<=n;l++)r=r+p[l-1]<<1,g[l]=r;for(c=0;c<s;c+=2)u=o[c+1],u!=0&&(o[c]=g[u],g[u]++)},t.F.codes2map=function(o,n,i){for(var s=o.length,r=t.F.U,l=r.rev15,c=0;c<s;c+=2)if(o[c+1]!=0)for(var d=c>>1,u=o[c+1],p=d<<4|u,g=n-u,h=o[c]<<g,f=h+(1<<g);h!=f;){var v=l[h]>>>15-n;i[v]=p,h++}},t.F.revCodes=function(o,n){for(var i=t.F.U.rev15,s=15-n,r=0;r<o.length;r+=2){var l=o[r]<<n-o[r+1];o[r]=i[l]>>>s}},t.F._putsE=function(o,n,i){i=i<<(n&7);var s=n>>>3;o[s]|=i,o[s+1]|=i>>>8},t.F._putsF=function(o,n,i){i=i<<(n&7);var s=n>>>3;o[s]|=i,o[s+1]|=i>>>8,o[s+2]|=i>>>16},t.F._bitsE=function(o,n,i){return(o[n>>>3]|o[(n>>>3)+1]<<8)>>>(n&7)&(1<<i)-1},t.F._bitsF=function(o,n,i){return(o[n>>>3]|o[(n>>>3)+1]<<8|o[(n>>>3)+2]<<16)>>>(n&7)&(1<<i)-1},t.F._get17=function(o,n){return(o[n>>>3]|o[(n>>>3)+1]<<8|o[(n>>>3)+2]<<16)>>>(n&7)},t.F._get25=function(o,n){return(o[n>>>3]|o[(n>>>3)+1]<<8|o[(n>>>3)+2]<<16|o[(n>>>3)+3]<<24)>>>(n&7)},t.F.U=function(){var o=Uint16Array,n=Uint32Array;return{next_code:new o(16),bl_count:new o(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new o(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new n(32),flmap:new o(512),fltree:[],fdmap:new o(32),fdtree:[],lmap:new o(32768),ltree:[],ttree:[],dmap:new o(32768),dtree:[],imap:new o(512),itree:[],rev15:new o(32768),lhst:new n(286),dhst:new n(30),ihst:new n(19),lits:new n(15e3),strt:new o(65536),prev:new o(32768)}}(),function(){for(var o=t.F.U,n=32768,i=0;i<n;i++){var s=i;s=(s&2863311530)>>>1|(s&1431655765)<<1,s=(s&3435973836)>>>2|(s&858993459)<<2,s=(s&4042322160)>>>4|(s&252645135)<<4,s=(s&4278255360)>>>8|(s&16711935)<<8,o.rev15[i]=(s>>>16|s<<16)>>>17}function r(l,c,d){for(;c--!=0;)l.push(0,d)}for(var i=0;i<32;i++)o.ldef[i]=o.of0[i]<<3|o.exb[i],o.ddef[i]=o.df0[i]<<4|o.dxb[i];r(o.fltree,144,8),r(o.fltree,112,9),r(o.fltree,24,7),r(o.fltree,8,8),t.F.makeCodes(o.fltree,9),t.F.codes2map(o.fltree,9,o.flmap),t.F.revCodes(o.fltree,9),r(o.fdtree,32,5),t.F.makeCodes(o.fdtree,5),t.F.codes2map(o.fdtree,5,o.fdmap),t.F.revCodes(o.fdtree,5),r(o.itree,19,0),r(o.ltree,286,0),r(o.dtree,30,0),r(o.ttree,320,0)}()})(Jn);var Py=Jn.exports;const Iy=ts(Py),My=async(e,t)=>{const o=new TextEncoder,n={};for(const s of e)s.data!=null&&(n[s.name]=Uint8Array.from(o.encode(s.data)));const i=new Blob([Iy.encode(n)]);Ny.saveAs(i,`${t}.zip`)},$y=async(e,t)=>K({method:"GET",url:$(ba,{...e}),signal:t}),st=H("getSalesEstimationOverviewChart",async e=>await $y(e)),Ly=x(D([st.atom]),([e])=>e.status==="loading"?"loading":"loaded"),jy=x("getSalesEstimationOverviewChartDataSelector",D([st.atom,nt,Q]),([e,t,o])=>{var u,p;const n=((u=o.data)==null?void 0:u.marketplaceId)||1,i=F("AM","id",n).domain==="amazon.co.jp",s=(p=e.content)==null?void 0:p.results,r=qo((s==null?void 0:s.sales)||[],"gross",i),l=qo((s==null?void 0:s.units)||[],"units",i),c=Go(r,l,"sales"),d=Go(l,r,"units");return[{name:"Sales",data:t==="gross"?c:d,color:"#0A6FE8",isLine:!1}]}),qo=(e,t,o)=>e.map(({x:n,y:i})=>({x:n*1e3,y:t==="gross"?o?i:(i||0)/100:Math.round(i),date:n*1e3,value:t==="gross"?o?i:(i||0)/100:Math.round(i),alerts:[]})),Go=(e,t,o)=>e.map(n=>{var i,s;return{...n,sales:o==="sales"?n.value:(i=t.find(r=>r.date===n.date))==null?void 0:i.value,units:o==="units"?n.value:(s=t.find(r=>r.date===n.date))==null?void 0:s.value}}),By=x(D([st.atom,nt,Q]),([e,t,o])=>{var i,s;const n=ee.getState().translation;if((i=e.content)!=null&&i.results&&n){const r=e.content.results,l=((s=o.data)==null?void 0:s.marketplaceId)||1,c=F("AM","id",l).domain==="amazon.co.jp";return[{id:"yesterday"+t,title:n.t("salesChart.periods.yesterday"),value:t==="gross"?c?r.salesTotals.yesterday||0:(r.salesTotals.yesterday||0)/100:r.unitsTotals.yesterday||0,trend:t==="gross"?c?r.salesTotals.yesterdayTrend||0:(r.salesTotals.yesterdayTrend||0)/100:r.unitsTotals.yesterdayTrend||0},{id:"previousDay"+t,title:n.t("salesChart.periods.previousDay"),value:t==="gross"?c?r.salesTotals.previousDay||0:(r.salesTotals.previousDay||0)/100:r.unitsTotals.previousDay||0,trend:t==="gross"?c?r.salesTotals.previousDayTrend||0:(r.salesTotals.previousDayTrend||0)/100:r.unitsTotals.previousDayTrend||0},{id:"lastNDays"+t,title:n.t("salesChart.periods.lastNDays",{N:7}),value:t==="gross"?c?r.salesTotals.last7Days||0:(r.salesTotals.last7Days||0)/100:r.unitsTotals.last7Days||0,trend:t==="gross"?c?r.salesTotals.last7DaysTrend||0:(r.salesTotals.last7DaysTrend||0)/100:r.unitsTotals.last7DaysTrend||0}]}else return null}),Fy=x("summaryValuesEstimationExportSelector",D([st.atom,it,Pe,ae]),([e,t,o,n])=>{const i=ee.getState().translation;if(e.content&&!t&&i){const s=i==null?void 0:i.t,r=e.content.results,l=n.TLDomain==="co.jp",c={value:r.salesTotals.yesterday||0,trend:r.salesTotals.yesterdayTrend||0},d={value:r.salesTotals.previousDay||0,trend:r.salesTotals.previousDayTrend||0},u={value:r.salesTotals.last7Days||0,trend:r.salesTotals.last7DaysTrend||0},p={value:r.unitsTotals.yesterday||0,trend:r.unitsTotals.yesterdayTrend||0},g={value:r.unitsTotals.previousDay||0,trend:r.unitsTotals.previousDayTrend||0},h={value:r.unitsTotals.last7Days||0,trend:r.unitsTotals.last7DaysTrend||0},f={salesYesterday:{id:"salesYesterday",title:s("salesChart.export.salesEstimation",{date:s("salesChart.periods.yesterday")}),value:M(l?c.value:c.value/100,2)},salesTrendYesterday:{id:"salesTrendYesterday",title:s("salesChart.export.salesEstimationTrend",{date:s("salesChart.periods.yesterday")}),value:M(l?c.trend:c.trend/100,2)},salesPreviousDay:{id:"salesPreviousDay",title:s("salesChart.export.salesEstimation",{date:s("salesChart.periods.previousDay")}),value:M(l?d.value:d.value/100,2)},salesTrendPreviousDay:{id:"salesTrendPreviousDay",title:s("salesChart.export.salesEstimationTrend",{date:s("salesChart.periods.previousDay")}),value:M(l?d.trend:d.trend/100,2)},salesLastNDays:{id:"salesLastNDays",title:s("salesChart.export.salesEstimation",{date:s("salesChart.periods.lastNDays",{N:7})}),value:M(l?u.value:u.value/100,2)},salesTrendLastNDays:{id:"salesTrendLastNDays",title:s("salesChart.export.salesEstimationTrend",{date:s("salesChart.periods.lastNDays",{N:7})}),value:M(l?u.trend:u.trend/100,2)},unitsYesterday:{id:"unitsYesterday",title:s("salesChart.export.unitsEstimation",{date:s("salesChart.periods.yesterday")}),value:M(p.value,0)},unitsTrendYesterday:{id:"unitsTrendYesterday",title:s("salesChart.export.unitsEstimationTrend",{date:s("salesChart.periods.yesterday")}),value:M(p.trend,0)},unitsPreviousDay:{id:"unitsPreviousDay",title:s("salesChart.export.unitsEstimation",{date:s("salesChart.periods.previousDay")}),value:M(g.value,0)},unitsTrendPreviousDay:{id:"unitsTrendPreviousDay",title:s("salesChart.export.unitsEstimationTrend",{date:s("salesChart.periods.previousDay")}),value:M(g.trend,0)},unitsLastNDays:{id:"unitsLastNDays",title:s("salesChart.export.unitsEstimation",{date:s("salesChart.periods.lastNDays",{N:7})}),value:M(h.value,0)},unitsTrendLastNDays:{id:"unitsTrendLastNDays",title:s("salesChart.export.unitsEstimationTrend",{date:s("salesChart.periods.lastNDays",{N:7})}),value:M(h.trend,0)}};return{header:Object.entries(f).reduce((v,[S,{title:w}])=>({...v,[S]:{title:w,width:20}}),{}),rows:Object.entries(f).reduce((v,[S,{value:w}])=>({...v,[S]:w}),{}),emptyRows:Object.entries(f).reduce((v,[S])=>({...v,[S]:""}),{}),mainAsin:o,hasMyAsin:!1}}else return{header:{},rows:{},emptyRows:{},mainAsin:o,hasMyAsin:!0}}),Ry=x("scoreDataForExportSelector",D([Re,se,Ae,Lh,Fy]),([e,t,o,n,i])=>{var u,p;const s=e==null?void 0:e.data,r=Object.values(s||{}),l=o==null?void 0:o.singleResponses,c=(u=ee.getState().translation)==null?void 0:u.t,d=(p=os.getState().translation)==null?void 0:p.t;if(r.length>0&&c&&d){const g=r[0].metricData,h=Object.keys(g),f=h.reduce((v,S)=>{var w;return v[S]={title:d(`metricData.${S}.metricTitle`)||((w=g[S])==null?void 0:w.metricTitle)||S,width:15},v},{});return{headers:{asin:{title:"ASIN",width:15},asinUrl:{title:"ASIN URL",width:15},title:{title:c("model.title"),width:50},bsr:{title:c("model.salesRank.title"),width:10},totalScore:{title:c("model.score"),width:15},...f,...n.hasMyAsin?n.header:{},...i.hasMyAsin?{}:i.header},rows:r.map(v=>{var N,T;const S=h.reduce((E,P)=>{var z;return E[P]=(z=v.metricData[P])!=null&&z.passed?"yes":"no",E},{}),w=l==null?void 0:l[v.asin];return{asin:v.asin,asinUrl:$t("AM",t.store,v.asin),title:v.title,bsr:w&&((N=w==null?void 0:w.seedSalesData)==null?void 0:N.salesRank)!=null?M((T=w==null?void 0:w.seedSalesData)==null?void 0:T.salesRank,0):"",totalScore:M(v.totalScore,1),...S,...n.hasMyAsin&&n.mainAsin===v.asin?n.rows:n.emptyRows,...!i.hasMyAsin&&i.mainAsin===v.asin?i.rows:i.emptyRows}})}}return null}),Dy=()=>{const{t:e}=k(),t=_s(),o=y(ae),n=oe(xn);return b.useMemo(()=>[{field:"url",exportTitle:"URL",exportValue:i=>$t("AM",o.store,i.asin),maxWidth:32},{field:"asin",exportTitle:"ASIN",exportValue:i=>i.asin},{field:"title",exportTitle:e("asinsMetricsNew.columns.title.title"),exportValue:i=>i.title,maxWidth:32},{field:"listingQualityScore",title:e("asinsMetricsNew.columns.listingQualityScore.title"),exportValue:i=>i.listingQualityScore!=null?Math.round(10*i.listingQualityScore)/10:"N/A",maxWidth:12},{field:"sellerRegion",title:e("asinsMetricsNew.columns.sellerRegion.title"),exportValue:i=>{var s;return i.sellerCountry!=null&&((s=t==null?void 0:t[i.sellerCountry])==null?void 0:s.label)||"N/A"}},{field:"category",exportTitle:e("asinsMetricsNew.columns.category.title"),exportValue:i=>i.categoryTitle},{field:"bsr",exportTitle:e("asinsMetricsNew.columns.bsr.title"),exportValue:i=>i.salesRank!=null&&i.salesRank!==-1?i.salesRank:"N/A",maxWidth:12},{field:"subcategory",exportTitle:e("asinsMetricsNew.columns.subcategory.title"),exportValue:i=>{var s,r;return(s=i.subcategories)!=null&&s[0]?(r=i.subcategories)==null?void 0:r[0].nodeName:"N/A"}},{field:"price",title:e("asinsMetricsNew.columns.price.title"),exportValue:i=>o.currency!=="JPY"&&i.price?i.price/100:i.price,maxWidth:12},{field:"priceChange",exportTitle:e("asinsMetricsNew.columns.priceChange.title")+" (%)",exportValue:i=>i.priceChange!=null?i.priceChange:"N/A"},{field:"monthlySales",title:e("asinsMetricsNew.columns.monthlySales.title"),exportValue:i=>i.monthlySales,maxWidth:15},{field:"salesChange",exportTitle:e("asinsMetricsNew.columns.monthlySales.title")+" (%)",exportValue:i=>i.salesChange},{field:"monthlyRevenue",exportTitle:e("asinsMetricsNew.columns.monthlyRevenue.title"),exportValue:i=>o.currency!=="JPY"&&i.monthlyRevenue?i.monthlyRevenue/100:i.monthlyRevenue},{field:"stock",title:e("asinsMetricsNew.columns.stock.title"),exportValue:i=>i.stock||"N/A"},{field:"coupon",title:e("asinsMetricsNew.columns.coupon.title"),exportValue:i=>i.couponType!=null&&i.couponValue!==null?i.couponType==="currency"?mt({amount:i.couponValue,currency:o.currency}):te({value:i.couponValue})+"%":"-"},{field:"reviewCount",exportTitle:e("asinsMetricsNew.columns.reviewCount.title"),exportValue:i=>i.reviewCount!=null&&i.reviewCount!==-1?i.reviewCount:"N/A"},{field:"reviewsRating",exportTitle:e("asinsMetricsNew.columns.reviewsRating.title"),exportValue:i=>i.reviewsRating!=null&&String(i.reviewsRating)!=="-1"?i.reviewsRating:"N/A"},{field:"bbSeller",exportTitle:e("asinsMetricsNew.columns.seller.title"),exportValue:i=>i.bbSeller||"N/A"},{field:"yearSales",exportTitle:e("asinsMetricsNew.columns.lastYearSales.title"),exportValue:i=>i.yearSales!=null&&i.yearSales!==-1?i.yearSales:"N/A"},{field:"salesYearOverYear",exportTitle:e("asinsMetricsNew.columns.salesYearOverYear.title")+" (%)",exportValue:i=>i.salesYearOverYear!=null&&i.salesYearOverYear!==-1?i.salesYearOverYear:"N/A"},{field:"sizeTier",exportTitle:e("asinsMetricsNew.columns.sizeTier.title"),exportValue:i=>i.sizeTier!=null&&i.sizeTier!==-1?e(`sizeTier.${i.sizeTier}`):"N/A"},{field:"width",exportTitle:e("asinsMetricsNew.columns.width.title"),exportValue:i=>i.width!=null&&String(i.width)!=="-1"&&!isNaN(Number(i.width))?Math.round(100*Number(i.width))/100:"N/A"},{field:"height",exportTitle:e("asinsMetricsNew.columns.height.title"),exportValue:i=>i.height!=null&&String(i.height)!=="-1"&&!isNaN(Number(i.height))?Math.round(100*Number(i.height))/100:"N/A"},{field:"length",exportTitle:e("asinsMetricsNew.columns.length.title"),exportValue:i=>i.length!=null&&String(i.length)!=="-1"&&!isNaN(Number(i.length))?Math.round(100*Number(i.length))/100:"N/A"},{field:"weight",exportTitle:e("asinsMetricsNew.columns.weight.title"),exportValue:i=>i.weight!=null&&String(i.weight)!=="-1"&&!isNaN(Number(i.weight))?Math.round(1e3*Number(i.weight))/1e3:"N/A"},{field:"storageFeeJanSept",exportTitle:`${e("asinsMetricsNew.columns.storageFee.title")} (${e("blackBox.storageFee.janSept")})`,exportValue:i=>{var s;return((s=i.storageFee)==null?void 0:s.janSept)||"N/A"}},{field:"storageFeeOctDec",exportTitle:`${e("asinsMetricsNew.columns.storageFee.title")} (${e("asinsMetricsNew.columns.storageFee.octDec")})`,exportValue:i=>{var s;return((s=i.storageFee)==null?void 0:s.octDec)||"N/A"}},{field:"bestMonth",exportTitle:e("asinsMetricsNew.columns.bestSalesPeriod.title"),exportValue:i=>i.bestMonth?re(new Date(i.bestMonth),"MM/dd/yyyy"):"-"},{field:"age",exportTitle:e("asinsMetricsNew.columns.age.title"),exportValue:i=>i.age!=null?po(new Date,new Date(i.age*1e3)):"-"},{field:"numberOfImages",title:e("asinsMetricsNew.columns.numberOfImages.title"),exportValue:i=>i.numberOfImages!=null?te({value:i.numberOfImages}):"-"},{field:"variationCount",title:e("asinsMetricsNew.columns.variationCount.title"),exportValue:i=>i.variationCount!=null?te({value:i.variationCount}):"-"},{field:"salesToReviews",title:e("asinsMetricsNew.columns.salesToReviews.title"),render:i=>i.salesToReviews!=null&&!isNaN(Number(i.salesToReviews))?Number(i.salesToReviews)!==-1?te({value:Number(i.salesToReviews)}):"N/A":"-"},{field:"top10Keywords",title:e("asinsMetricsNew.columns.top10Keywords.title"),render:i=>i.top10Keywords},{field:"top10SearchVolume",title:e("asinsMetricsNew.columns.top10SearchVolume.title"),render:i=>i.top10SearchVolume},{title:"",field:"_",responsive:!0,noHeader:!0,noHover:!0}].filter(({field:i})=>n?Ey.includes(i):!0),[n,t,o.currency,o.store,e])},Ey=["url","asin","title","listingQualityScore"],Vy=({columns:e,extractIdFunction:t,columnsOrder:o,skipOnFiltering:n})=>i=>{const s=e.filter(l=>l.exportTitle!==""),r=o?Oy({columnsOrder:o,columns:s,skipOnFiltering:n}):s;return{headers:r.reduce((l,{field:c,title:d,exportTitle:u,maxWidth:p})=>({...l,[c]:{title:u||(d||"").toString(),width:p||20}}),{}),rows:i.map(l=>r.reduce((c,{field:d,exportValue:u})=>({...c,[d]:u?u({...l,id:t?t(l):l.phrase}):l[d]||""}),{}))}},Oy=({columns:e,columnsOrder:t,skipOnFiltering:o})=>{if(t){const n=[...t,...o||[]];return e.filter(({field:s,isUser:r})=>r?!0:(n==null?void 0:n.indexOf(s.replace("_export_","")))!==-1).sort((s,r)=>n.indexOf(s.field.replace("_export_",""))-n.indexOf(r.field.replace("_export_","")))}else return e},Xn=x("metricAcrossAsinsSelector",D([Ae,Q,pe]),([e,t,o])=>{var c,d;const i=Object.entries(((c=t.data)==null?void 0:c.scoreData.data)||{}).filter(([u,p])=>p!=null).map(([u,p])=>[u,p]).map(([u,p])=>({id:u||"",asin:u||"",title:p==null?void 0:p.title,imageSrc:p==null?void 0:p.imageUrl,listingQualityScore:p==null?void 0:p.totalScore,couponType:p.couponType,couponValue:p.couponValue,isCouponExists:p.isCouponExists})),{top10Keywords:s,top10SearchVolume:r}=Uy(o,(d=i[0])==null?void 0:d.asin),l=Ky(e);return i.map(u=>{const p=l[u.asin]||{};return{...u,...s[u.asin],...r[u.asin],...p,asin:u.asin,sellerCountry:p.sellerCountry}})}),Uy=(e,t)=>{var h,f,v;const o=((h=e.data)==null?void 0:h.individualMetrics)||[],n=(f=o.filter(S=>S.id==="top10IndividualKeywords")[0])==null?void 0:f.value,i=typeof n=="number"?{[t||"UNKNOWN_ASIN"]:n}:n||{},s=Object.entries(i).map(([S,w])=>w),r=gt(s,4),l=Object.entries(i).reduce((S,[w,N])=>({...S,[w]:{top10Keywords:N,top10KeywordsPercentile:ht({value:N,percentiles:r})}}),{}),c=(v=o.filter(S=>S.id==="top10IndividualSearchVolume")[0])==null?void 0:v.value,d=typeof c=="number"?{[t||"UNKNOWN_ASIN"]:c}:c||{},u=Object.entries(d).map(([S,w])=>w),p=gt(u,4),g=Object.entries(d).reduce((S,[w,N])=>({...S,[w]:{top10SearchVolume:N,top10SearchVolumePercentile:ht({value:N,percentiles:p})}}),{});return{top10Keywords:l,top10SearchVolume:g}},Ky=e=>{const t=e!=null&&e.singleResponses?Object.entries(e.singleResponses).map(([n,i])=>({...i.seedSalesData})).map(({age:n,...i})=>({...i,age:po(new Date,new Date(n?n*1e3:"")),bestMonth:i.bestMonth,storageFee:i.storageFee,weight:i.weight,width:i.width,height:i.height,length:i.length,bbSeller:i.bbSeller,stock:i.stock&&!isNaN(Number(i.stock))?Number(i.stock):null,stockHasLimit:i.stockHasLimit?!!i.stockHasLimit:!1,salesYearOverYear:i.salesYearOverYear,subcategories:i.subcategories?i.subcategories.map(s=>({...s,subcategoryBsr:(i.subcategoriesBsr||[]).reduce((r,l)=>String(l.nodeId)===String(s.nodeId)?l.bsr:r,void 0)})):[],subcategoriesBsr:i.subcategoriesBsr,categoryTitle:i.categoryTitle!=null?String(i.categoryTitle):null,bestSellersUrl:i.bestSellersUrl!=null?String(i.bestSellersUrl):null,numberOfSellers:i.numberOfSellers,sellerType:i.sellerType})):[],o=gt(t.map(n=>n.age),4);return t.reduce((n,i)=>({...n,[i.asin||"UNKNOWN_ASIN"]:{...i,agePercentile:ht({value:i.age,percentiles:o})}}),{})},qy=e=>x(Xn,t=>Vy({columns:e})(t)),ei=x("metricAcrossAsinsSelector",D([Ae,Q,pe,ce]),([e,t,o,n])=>t.loading||o.loading||e===null||!n.complete?"loading":"loaded"),Gy=I("exportTables",async({destination:e,searchId:t,metricAcrossColumns:o,monthlySalesLocked:n},{getState:i})=>{const s=i(Ry),r=i(Qh(n)),l=i(Rh),c=i(qy(o)),d=i(yo);e==="excel"?xy([{data:s,name:"Listing Score"},{data:r,name:"Keyword Analysis"},{data:l,name:"Competitor Analysis"},{data:c,name:"ASIN comparison summary"}],`Listing_Analyzer_${t}`):My([{name:`Listing_Score_${t}.csv`,data:rt(s)},{name:`Keyword_Analysis_${t}.csv`,data:rt(r)},{name:`Competitor_Analysis_${t}.csv`,data:rt(l)},{name:`ASIN_comparison_summary_${t}.csv`,data:rt(c)}],`Listing_Analyzer_${t}`),d("export-event",{destination:e})}),ti=()=>{const{t:e}=k(),t=ge().searchId||"",o=y(ei)==="loading",[n,i]=b.useState(!1),s=b.useCallback(()=>i(!0),[]),r=b.useCallback(()=>i(!1),[]),l=Oe("amazon","seeMonthlySalesColumn"),c=Dy(),d=A(u=>(r(),Gy({destination:u,searchId:t,metricAcrossColumns:c,monthlySalesLocked:l})),[t,c]);return a.jsx(Dt,{tippy:{visible:n,onClickOutside:r},items:a.jsxs(a.Fragment,{children:[a.jsx(Dt.Item,{onClick:()=>{d("excel")},children:e("exportOptions.xlsx")}),a.jsx(Dt.Item,{onClick:()=>{d("csv")},children:e("exportOptions.csv")})]}),children:a.jsx(B,{buttonType:"tertiary",size:"100",icon:a.jsx(Z,{icon:ns}),onClick:s,disabled:o,children:e("buttons.exportData")})})},oi=({children:e,tooltip:t,...o})=>t?a.jsx(bt,{content:t,placement:"top",appendTo:document.body,maxWidth:500,delay:0,zIndex:1e3,...o,children:e}):a.jsx(a.Fragment,{children:e}),_y=()=>{const{title:e,asin:t,imageUrl:o}=y(ue),n=y(se).TLDomain,i=Rn(n,t),{isOverflown:s,checkOverflown:r}=rn();return a.jsxs(Hy,{children:[a.jsxs(Wy,{children:[a.jsx(Qy,{src:o}),a.jsx(Yy,{href:i,target:"_blank",rel:"noreferrer",children:a.jsx(Zy,{icon:is})})]}),a.jsx(oi,{tooltip:s?void 0:e,children:a.jsx(Jy,{onMouseEnter:r,dangerouslySetInnerHTML:{__html:e||""}})})]})},Hy=m.div`
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-gap: ${e=>e.theme.spacing.sp16};
`,Wy=m.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #f2f5f7;
`,Qy=m.img`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`,Yy=m.a`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 300ms;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8));
  z-index: 1;

  :hover {
    opacity: 1;
  }
`,Zy=m(Z)`
  width: 20px;
  height: 20px;
  color: ${e=>e.theme.systemColors.blue600};
`,Jy=m.div`
  ${wt};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`,Xy=()=>{const{t:e}=k(),{searchId:t}=ge(),o=y(it)&&!!t;return a.jsxs(a.Fragment,{children:[a.jsx(ty,{to:$(ne(),{})}),a.jsxs(ny,{title:o?a.jsx(_y,{}):e("topPanel.title"),description:o?void 0:e("topPanel.description"),centeredButtons:o,children:[!o&&a.jsx(Yn,{}),t&&a.jsx(ti,{}),a.jsx(ho,{}),!o&&a.jsx(Qn,{})]})]})},ef=async()=>K({url:$(`${j}/api/v1/customers/connections/list`,{}),method:"GET",withCredentials:!0}),ni=async e=>{const t={sort:e.filter.sortField,searchString:e.filter.search,page:e.filter.page,pageSize:e.filter.count,tokenId:e.marketplace.tokenId,marketplaceId:e.marketplace.marketplaceId};return K({url:$(`${j}/api/v1/customers/products/mws-products`,{...t}),method:"GET",withCredentials:!0})},at=H("connectionsList",async(e,{getState:t})=>{const o=await ef(),n=t(ae).domain;return{...o,currentMarketplace:n}}),ii=I("changeSelectToken"),Ce=_("selectToken",{options:[],groups:[],value:null},e=>{e(at.actions.fulfilled,(t,{result:o})=>{const n=o.results.amazon.sp.reduce((r,l)=>[...r,...l.marketplaceList.map(c=>({value:`${String(l.id)}_${c.domain.split("www.")[1]}`,label:`${c.domain}`,group:l.seller}))],[]),i=o.results.amazon.sp.map(r=>({id:r.seller,label:a.jsxs(b.Fragment,{children:[a.jsx(uo,{style:{marginRight:"8px"}}),r.displayName]},r.id),displayName:r.displayName})),s=n.findIndex(r=>r.value.endsWith(o.currentMarketplace||"#"));return{options:n,groups:i,value:n[s]||null}}),e(ii,(t,o)=>({...t,value:o||t.value})),e(G.selectMarketplace,(t,o)=>{const n=t.options.findIndex(i=>i.value.endsWith(o||"#"));return{...t,value:t.options[n]||null}}),e(we.get.fulfilled,(t,{result:o})=>{const n=t.options.findIndex(i=>i.value.endsWith(so("id",o.marketplaceId).TLDomain||"#"));return{...t,value:t.options[n]||null}})}),We=H("myProducts",async(e,{getState:t})=>{const o=t(Ce).value;if(o){const[n,i]=o.value.split("_"),s=F("AM","domain",i),r=s.id;return await ni({filter:e,marketplace:{marketplaceId:r,tokenId:n}}).then(l=>({...l,data:l.data.map(c=>({...c,imageSrc:c.imageUrl,sellerId:o.group,href:$t("AM",s.store,c.asin)}))}))}else return null},{rejectedReaction:({fetchError:e})=>{var o;const t=ee.getState().translation;if(t){const{t:n}=t,i=n(`errorCodes.${(o=e==null?void 0:e.result)==null?void 0:o.errorCode}`)||n(`errors.common.${e==null?void 0:e.responseStatus}`)||n("errorCodes.unknown");ve.error(i)}}}),si=x("isTokenSelector",at.atom,e=>e.content?e.content.results.amazon.sp.length>0:!1),tf=x("optionsSelector",D([Ce,ae]),([e,t])=>e.options.map(o=>({...o,disabled:o.value.split("_")[1]!==t.domain}))),Le=10,Ie={add:I("selectedMainAsin/add"),set:I("selectedMainAsin/set",(e,{getState:t,dispatch:o})=>{var i;const n=((i=t(Ce).value)==null?void 0:i.group)||null;o(Ie.add({asin:e,sellerId:n}))})},wo=_("selectedMainAsin",null,e=>{e(Ie.add,(t,o)=>o),e(we.get.fulfilled,(t,o)=>({asin:o.result.mainAsin,sellerId:o.result.sellerId,sellerSku:o.result.mainSku,tokenId:o.result.tokenId}))}),W={removeError:I("selectedAsins/removeError"),setEnterNew:I("selectedAsins/setEnterNew"),removeAsin:I(),addAsin:Fe("selectedAsins/addAsin",async(e,{getState:t})=>{const{byId:o}=t(yt);if(o[e])throw new Error("Asin has already been added");const{validateAsin:n}=t(Te),i=t(Jt),s=await n({asinOrUrl:e,marketplaceId:i});if(o[s.asin])throw new Error("Asin has already been added");return s}),addAsins:Fe("selectedAsins/addAsins",async(e,{getState:t})=>{const o=e.filter((p,g,h)=>h.indexOf(p)===g),{byId:n}=t(yt),{validateAsin:i}=t(Te),s=t(Jt),r=o.map(p=>({asin:p,error:n[p]?`Asin ${p} already been added`:void 0})),l=r.filter(({error:p})=>!p).map(({asin:p})=>p),c=await Promise.all(l.map(async p=>{try{return await i({asinOrUrl:p,marketplaceId:s})}catch(g){return{message:String(g).replace("Error: ","")}}})),d=c.filter(p=>p.asin);return{errors:[...r.map(p=>p.error).filter(p=>!!p),...c.map(p=>p.message).filter(p=>!!p)],validatedAsins:d}}),fill:I("selectedAsins/fill"),setAsins:I("selectedAsins/set")},Vt={byId:{},loading:!1,error:void 0,enterNew:!0},yt=_("selectedAsinsAtom",Vt,e=>{e(W.setEnterNew,(t,o)=>({...t,enterNew:o,error:o?t.error:void 0})),e(W.removeAsin,(t,o)=>{if(t.byId[o]){if(Object.keys(t.byId).length===1)return{...t,byId:{},enterNew:!0};{const{[o]:i,...s}=t.byId;return{...t,byId:s}}}return t}),e(W.removeError,t=>({...t,error:void 0})),e(W.addAsin.pending,t=>({...t,loading:!0,error:void 0})),e(W.addAsin.fulfilled,(t,{result:o})=>o?{...t,byId:{...t.byId,[o.asin]:o},loading:!1,enterNew:!1}:{...t,loading:!1}),e(W.addAsin.rejected,(t,{error:o})=>({...t,loading:!1,error:o})),e(W.addAsins.pending,t=>({...t,loading:!0,error:void 0})),e(W.addAsins.fulfilled,(t,{result:{validatedAsins:o,errors:n}})=>({...t,byId:{...t.byId,...o.reduce((i,s)=>({...i,[s.asin]:s}),{})},loading:!1,error:n.length>0?n.join(", "):void 0,enterNew:o.length===0})),e(W.addAsins.rejected,(t,{error:o})=>({...t,loading:!1,error:o})),e(W.fill,(t,o)=>({...t,enterNew:!1,byId:o})),e(W.setAsins,(t,o)=>({byId:o.reduce((n,i)=>({...n,[i]:{asin:i,productUrl:"",title:"",imageUrl:""}}),{}),loading:!1,enterNew:!1})),e(W.setAsins,(t,o)=>({byId:o.reduce((n,i)=>(n[i]={asin:i,productUrl:"",title:"",imageUrl:""},n),{}),loading:!1,enterNew:!1})),e(we.get.fulfilled,(t,{result:o})=>({byId:Object.values(o.scoreData.data).reduce((n,i)=>(i&&i.asin!==o.mainAsin&&(n[i.asin]={asin:i.asin,productUrl:i.productUrl,title:i.title,imageUrl:i.imageUrl}),n),{}),loading:!1,enterNew:!1})),e(G.switchToAddAsins,t=>Vt),e(Ie.add,(t,o)=>o?t:{...t,byId:Vt.byId})}),Lt=x("selectedAsins/OrderSelector",yt,e=>Object.keys(e.byId));x("selectedAsins/numberOfSelectedAsinsSelector",Lt,e=>e.length);x("isChangeSelectedSelector",D([Ih,Lt]),([e,t])=>e.length===t.length&&new Set([...e,...t]).size===t.length);const of=()=>{const{t:e}=k(),t=tt(),o=za(),n=((o==null?void 0:o.asins)||"").split(","),i=A(G.selectMarketplace),s=A(Ie.add),r=A(c=>W.setAsins(c)),l=A(()=>G.analyze.pending({searchSource:o==null?void 0:o.searchSource}),[o==null?void 0:o.searchSource]);return b.useEffect(()=>{var d;const c=o!=null&&o.marketplace?(d=F("AM","store",o.marketplace))==null?void 0:d.TLDomain:void 0;if(c&&!(o!=null&&o.searchId)){i(c),t($(ne(),{}),{replace:!0});const[u,...p]=n.filter((g,h,f)=>f.indexOf(g)===h);nf({mainAsin:u,restAsins:p,marketplace:c,immediately:(o==null?void 0:o.immediately)==="true",setMainAsin:s,setAsins:r,handleAnalyze:l,searchSource:o==null?void 0:o.searchSource,t:e})}},[o==null?void 0:o.marketplace,o==null?void 0:o.asins,o==null?void 0:o.searchId,o==null?void 0:o.immediately]),null},nf=async({mainAsin:e,restAsins:t,marketplace:o,immediately:n,setMainAsin:i,setAsins:s,handleAnalyze:r,searchSource:l,t:c})=>{var u;const d=F("AM","TLDomain",o).id;try{const p=await Yt({asinOrUrl:e,marketplaceId:String(d)}),g=p.isMyAsin&&p.sellerSku;i({asin:p.asin,sellerId:g?p.sellerId:null,sellerSku:g&&p.sellerSku||void 0});const h=t.map(async S=>{try{return(await Yt({asinOrUrl:S,marketplaceId:String(d)})).asin||null}catch{return null}}),f=await Promise.all(h),v=t.filter(S=>f.indexOf(S)!==-1);v.length>0&&s(v),n&&(r(),(l==="email"||l==="controlcenter")&&Tt({eventName:"Listing Analyzer Runs From",eventProperties:{tool:l}}))}catch(p){p instanceof ln&&ve.error(c(`errors.${(u=p==null?void 0:p.result)==null?void 0:u.errorCode}`,{asin:e}))}},sf="https://re-cdn.helium10.com/container/static/illo-la-lp-HsZdU821.png",af=()=>{const{t:e}=k();return a.jsxs(df,{children:[a.jsx(cf,{src:sf,alt:"illo-la-lp"}),a.jsx(lf,{children:e("landingPageNew.info.title")}),a.jsx(rf,{children:e("landingPageNew.info.text")})]})},rf=m.p`
  ${ze};
`,lf=m.h2`
  ${wt};
  margin-bottom: ${({theme:e})=>e.spacing.sp20};
`,cf=m.img`
  margin-bottom: ${({theme:e})=>e.spacing.sp20};
`,df=m.div`
  margin: auto;
  align-self: center;
  text-align: center;
  max-width: 400px;
`;var ai={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t="fas",o="shield-check",n=512,i=512,s=[],r="f2f7",l="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z";e.definition={prefix:t,iconName:o,icon:[n,i,s,r,l]},e.faShieldCheck=e.definition,e.prefix=t,e.iconName=o,e.width=n,e.height=i,e.ligatures=s,e.unicode=r,e.svgPathData=l,e.aliases=s})(ai);const Ao=({content:e,className:t})=>a.jsx(bt,{content:e,children:a.jsx("div",{className:t,children:a.jsx(Z,{icon:ss})})}),uf="https://re-cdn.helium10.com/container/static/ConnectToAmazonBanner-bM_TJE-x.png",ri=({headerText:e,bodyText:t})=>{const{t:o}=k(),n=A(()=>me.actions.pending({eventName:"Listing Analyzer Connect to Amazon Clicked",eventProperties:{}}),[]);return a.jsxs(a.Fragment,{children:[a.jsxs(wf,{children:[a.jsx(hf,{}),a.jsx(vf,{children:e})]}),a.jsxs(Af,{children:[a.jsxs(mf,{children:[a.jsxs(yf,{children:[a.jsx(ff,{children:o("landingPageNew.connectToAmazon.body.title")}),a.jsx(xf,{content:o("landingPageNew.connectToAmazon.body.tooltip")})]}),a.jsxs(bf,{children:[a.jsx(gf,{}),a.jsx(Sf,{children:t})]}),a.jsx(B,{as:"a",href:"https://members.helium10.com/new-account/tokens-manager",rel:"noopener noreferrer",onClick:n,children:o("buttons.connectToAmazon")})]}),a.jsx(Xt,{children:a.jsx(pf,{})})]})]})},pf=m.img.attrs({src:uf,alt:"Connect to amazon"})`
  ${L.mobileBefore} {
    width: 100%;
  }
`,mf=m.div``,Xt=m.div``,gf=m(Z).attrs({icon:sn})`
  ${({theme:e})=>X`
    color: ${e.systemColors.green600};
    margin-right: ${e.spacing.sp8};
  `}
`,hf=m(Z).attrs({icon:ai.faShieldCheck,size:"lg"})`
  ${({theme:e})=>X`
    margin-right: ${e.spacing.sp12};
    color: ${e.systemColors.green600};
  `}
`,yf=m.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.sp8};
`,ff=m.h2`
  ${cn};
`,Sf=m.p`
  ${vt};
  display: inline;
`,vf=m.p`
  ${ze};
  display: inline;
`,bf=m.div`
  margin-bottom: ${({theme:e})=>e.spacing.sp24};
`,wf=m.div`
  background: #d6f5eb;
  border-radius: 6px 6px 0 0;
  padding: ${({theme:e})=>`${e.spacing.sp16} ${e.spacing.sp20}`};
  align-self: stretch;
`,Af=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${({theme:e})=>e.spacing.sp16};

  border: 1px solid #d9e0e8;
  border-top-width: 0;
  border-radius: 0 0 6px 6px;
  align-self: stretch;

  min-height: 100px;

  ${Xt} {
    text-align: right;
  }

  ${L.desktopBefore} {
    grid-template-columns: 1fr;
    text-align: center;

    ${Xt} {
      text-align: center;
      margin-top: ${({theme:e})=>e.spacing.sp16};
    }
  }
`,xf=m(Ao)`
  margin-left: ${e=>e.theme.spacing.sp8};
`,Ot=e=>(t,...o)=>e(t.map(n=>n.toLocaleUpperCase().replace("‎","")),o),_o=e=>e.split(/[\x09 ,;\n]+/).map(t=>t.trim()).filter(t=>!!t),kf=async(e,t)=>{const o={page:e.page,pageSize:e.count,searchString:e.search,sort:e.sortDirection==="ASC"?e.sortField:"-"+e.sortField};return K({url:$(`${j}/api/v1/product/my-list`,{marketplace:t,...o}),method:"GET",withCredentials:!0})},li=I("actionSelectedMyListFill"),ci=I("actionSelectedMyListChange"),Tf=_("atomSelectedMyList",[],e=>{e(li,(t,o)=>o),e(ci,(t,o)=>t.map(n=>o.includes(n.id)?{...n,selected:!0}:{...n,selected:!1}))}),Cf=x(Tf,e=>e.filter(t=>t.selected&&!!t.asin).map(t=>t.asin)),Ye=H("myList",async(e,{getState:t})=>{const{store:o}=t(ae),n=await kf(e,o),i="https://"+F("AM","store",n.marketplace).domain+"/dp/";return{...n,data:Object.values(n.data).map(s=>({...s,imageSrc:s.imageUrl,href:i+s.asin})),meta:{total:n.resultCount}}},{fulfilledReaction:({result:{data:e}},{dispatch:t})=>{const o=e.map(n=>({id:n.id,asin:n.asin,selected:!1}));t(li(o))},rejectedReaction:()=>{alert("reject")}}),zf=()=>{const{t:e}=k(),t=y(Ye.atom,o=>{var n;return(n=o.content)==null?void 0:n.marketplace},[]);return b.useMemo(()=>[{field:"title",title:"Product",render:o=>a.jsx(kt,{market:"AMAZON",product:o,marketplace:t||"",tool:"listingAnalyzer",blocks:[{text:o.asin,copyContent:o.asin,beforeCopyContent:a.jsx(ut,{label:e("copyButton.copy",{name:"ASIN"})}),afterCopyContent:a.jsx(pt,{label:e("copyButton.copied",{name:"ASIN"})})}],tooltipOptions:Nf}),sortable:!0,defaultSortDirection:"ASC"}],[t,e])},Nf={appendTo:document.body,zIndex:1e7},Pf=()=>{const e=A(Ye.actions.pending),t=A(Ye.actions.clear),o=y(Ye.atom,({status:d})=>d==="loading"?"waiting":d,[]),{data:n,total:i}=y(Ye.atom,d=>{var u,p;return{data:((u=d.content)==null?void 0:u.data)||[],total:((p=d.content)==null?void 0:p.resultCount)||0}},[]),[s,r]=b.useState({page:1,count:5,search:"",sortDirection:"ASC",sortField:"id"}),l=b.useCallback(d=>{const u=d.sortDirection!==s.sortDirection||d.sortField!==s.sortField?{...d,page:1}:d;return r(u),e(u)},[e,s]),c=b.useMemo(()=>({value:s}),[s]);return{get:e,clear:t,data:n,total:i,status:o,handleFilter:l,filter:c}},If=()=>{const{t:e}=k(),{get:t,clear:o,data:n,total:i,status:s,handleFilter:r,filter:l}=Pf(),c=zf(),d=A(u=>ci(u),[]);return b.useEffect(()=>(t({page:1,count:5,search:"",sortField:"id",sortDirection:"ASC"}),()=>o()),[t,o]),a.jsx(fn,{name:"my-list",columns:c,data:n,total:i,onFilter:r,leftActions:()=>e("addFromMyListModal.table.getTitleText",{total:i}),status:s,behavior:Mf,dimensions:{maxHeight:570},selected:{onChange:d},filter:l})},Mf={searchVisible:!0,itemsPerPage:[5,10,50],noPagination:!0,maxHeight:500},Ut=At("myList",{}),$f=({handleAddAsins:e,disabled:t,currentlySelectedAsins:o})=>{const{t:n}=k(),i=y(Cf),s=y(Ut.atom,u=>u.isOpen,[]),r=A(me.actions.pending),l=A(()=>(r({eventName:"Listing Analyzer Add from My List Clicked",eventProperties:{}}),Ut.open({})),[]),c=A(()=>Ut.close({}),[]),d=b.useCallback(()=>{e(i),c()},[c,e,i]);return a.jsxs(Lf,{children:[a.jsx(B,{buttonType:"tertiary",type:"button",onClick:l,disabled:t,children:n("buttons.addFromMyList")}),a.jsx(dn.Provider,{value:{dropdowns:{appendTo:"parent"}},children:a.jsx(io,{isOpen:s,size:"50",onClose:c,title:n("addFromMyListModal.title"),subtitle:n("addFromMyListModal.subtitle",{number:Le-o.length-i.length}),footer:a.jsxs(jf,{children:[a.jsx(B,{buttonType:"cancel",size:"200",onClick:c,children:n("buttons.cancel")}),a.jsx(B,{buttonType:"primary",size:"200",onClick:d,children:n("buttons.add")})]}),children:a.jsx(If,{})})})]})},Lf=m.div`
  margin-top: ${({theme:e})=>e.spacing.sp8};
`,jf=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Bf=e=>{const{t}=k();return[{text:e.asin,copyContent:e==null?void 0:e.asin,beforeCopyContent:a.jsx(ut,{label:t("copyButton.copy",{name:"ASIN"})}),afterCopyContent:a.jsx(pt,{label:t("copyButton.copied",{name:"ASIN"})})},{text:e.sellerSku,copyContent:e.sellerSku,beforeCopyContent:a.jsx(ut,{label:t("copyButton.copy",{name:"SKU"})}),afterCopyContent:a.jsx(pt,{label:t("copyButton.copied",{name:"SKU"})})}]},Ff=b.memo(({data:e})=>{const t=Bf(e),o=F("AM","id",e.marketplaceId);return a.jsx(kt,{market:"AMAZON",product:e,blocks:t,marketplace:o.store,tooltipOptions:Rf,tool:"listingAnalyzer"})}),Rf={appendTo:document.body,zIndex:1e7},xo=I("actionMyProductSelectedSet"),di=_("myProductSelected",null,e=>{e(xo,(t,o)=>o)}),Df=()=>{const{t:e}=k(),t=y(di),o=A(xo);return b.useMemo(()=>[{field:"radio",title:"",render:n=>a.jsx(Ys,{name:"group",value:n.id,id:"group",onChange:()=>o(n),checked:(t==null?void 0:t.id)===n.id}),width:36,noHover:!0},{field:"product",title:e("myProducts.fields.product.title"),render:n=>a.jsx(Ff,{data:n})}],[t==null?void 0:t.id,o,e])},Ef=()=>{const e=y(Ce,({value:l})=>l==null?void 0:l.value,[]),t=A(We.actions.pending),o=A(We.actions.clear),n=y(We.atom,l=>{var c;return((c=l.content)==null?void 0:c.data)||[]},[]),i=y(We.atom,l=>{var c;return((c=l.content)==null?void 0:c.total)||0},[]),s=y(We.atom,({status:l})=>l==="loading"?"waiting":l,[]);b.useEffect(()=>(e&&t({page:1,count:5,search:"",sortField:"id",sortDirection:"ASC"}),()=>o()),[o,t,e]);const r=b.useCallback(l=>e?t(l):!1,[t,e]);return{clear:o,data:n,total:i,status:s,handleFilter:r}},Vf={haveCheckbox:!1},Of=()=>{const{t:e}=k(),t=Df(),{data:o,status:n,total:i,handleFilter:s}=Ef();return a.jsx(fn,{name:"my-products",columns:t,data:o,status:n,onFilter:s,total:i,behavior:Uf,selected:Vf,dimensions:Kf,leftActions:()=>e("myProducts.titleText",{count:i})})},Uf={searchVisible:!0,itemsPerPage:[5,10,50],noPagination:!0},Kf={stickyHeader:!0,maxHeight:570},qf=b.memo(({option:e,size:t=as,active:o,hover:n,disabled:i,onClick:s,onMouseEnter:r})=>a.jsxs(Gf,{$size:t,$active:o,$hover:n,$disabled:i,role:"option","data-value":e.value,onClick:s,onMouseEnter:r,children:[a.jsx(un,{children:ro[e.value.split("_")[1]]}),e.label]})),Gf=m(rs)`
  gap: ${e=>e.theme.spacing.sp8};
`,_f=()=>{const{t:e}=k(),{groups:t,value:o}=y(Ce),n=y(tf),i=A(ii);return a.jsx(ls,{value:o,renderValue:Wf,renderOption:Hf,options:n,onChange:i,placeholder:e("myProducts.selectSellerId"),groups:t})},Hf=e=>a.jsx(qf,{...e}),Wf=e=>{var i,s;const t=(i=e.value)==null?void 0:i[0],o=(s=e.groups)==null?void 0:s.find(r=>r.id===(t==null?void 0:t.group));if(!t)return e.placeholder;const n=t.value.split("_")[1];return a.jsxs(Qf,{children:[a.jsx(uo,{}),a.jsx(un,{children:ro[n]}),a.jsx(Yf,{children:o==null?void 0:o.displayName})]})},Qf=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp8};
`,Yf=m.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 174px;
`,dt=At("myProducts",{}),Zf=()=>{const{t:e}=k(),t=y(Ce,l=>!l.value,[]);y(Ce,()=>null,[]);const o=y(dt.atom,l=>l.isOpen,[]),n=A(me.actions.pending),i=A(()=>(n({eventName:"Listing Analyzer Select My Products to Add Clicked",eventProperties:{}}),dt.open({})),[]),s=A(dt.close),r=A(()=>xo(null),[]);return b.useEffect(()=>{!o&&r()},[r,o]),a.jsxs(a.Fragment,{children:[a.jsx(B,{buttonType:"tertiary",type:"button",onClick:i,disabled:t,children:e("myProducts.button")}),a.jsx(dn.Provider,{value:{dropdowns:{appendTo:"parent"}},children:a.jsx(io,{isOpen:o,onClose:s,size:"100",title:a.jsxs(tS,{children:[e("myProducts.title"),a.jsx(nS,{children:e("myProducts.text")})]}),footer:a.jsx(Jf,{}),children:a.jsx(Xf,{})})})]})},Jf=()=>{const{t:e}=k(),t=A(dt.close),o=y(di),n=A(()=>{if(o!=null&&o.asin&&(o!=null&&o.token_id))return Ie.add({asin:o==null?void 0:o.asin,sellerId:o.sellerId,sellerSku:o.sellerSku,tokenId:o.token_id})},[o==null?void 0:o.asin,o==null?void 0:o.token_id]),i=b.useCallback(()=>{n(),t()},[t,n]);return a.jsxs(oS,{children:[a.jsx(B,{buttonType:"cancel",size:"200",onClick:t,children:e("buttons.cancel")}),a.jsx(B,{buttonType:"primary",size:"200",onClick:i,disabled:!o,children:e("buttons.add")})]})},Xf=b.memo(()=>a.jsxs(eS,{children:[a.jsx(_f,{}),a.jsx(Of,{})]})),eS=m.div`
  display: flex;
  flex-direction: column;

  ${cs.Control} {
    margin-bottom: ${({theme:e})=>e.spacing.sp8};
    max-width: 280px;
  }
`,tS=m.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spacing.sp4};
`,oS=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,nS=m.div`
  ${vt};
`,Ho=({getValues:e,checkMyAsin:t})=>{const{t:o}=k(),n=y(ce,l=>l.marketplace?F("AM","TLDomain",l.marketplace).id:F("AM","domain","amazon.com"),[]),i=A(Ie.add),s=e("mainAsin"),r=e("asins");return async l=>{var d;const c=l.trim();if(r.includes(c)||s.includes(c))return ve.error(o("errors.asinAlreadyAdded")),!1;try{const u=await Yt({asinOrUrl:l,marketplaceId:String(n)});t&&(u.isMyAsin&&u.sellerSku?i({asin:u.asin,sellerId:u.sellerId,sellerSku:u.sellerSku}):i({asin:u.asin,sellerId:null}))}catch(u){return u instanceof ln&&ve.error(o(`errors.${(d=u==null?void 0:u.result)==null?void 0:d.errorCode}`,{asin:c})),!1}return!0}},iS=({disabled:e,handleAddAsins:t,marketplace:o,asins:n,maxAsins:i})=>{const{t:s}=k(),r=A(me.actions.pending),l=b.useCallback(c=>c&&r({eventName:"Listing Analyzer Get Competitors Clicked",eventProperties:{}}),[r]);return a.jsx(Zs,{disabled:e,onAddAsins:t,marketplace:o,asins:n,maxAsins:i,isDemo:!1,locked:!1,type:"listing-analyzer",description:s("getCompetitors.description"),onToggle:l})},ui=H("getBalance",async(e,{getState:t})=>{const{balance:o}=t(Te);return o()}),sS=_("balanceAtom",null,e=>{e(ui.actions.fulfilled,(t,{result:o})=>o)}),aS=()=>{const{t:e}=k(),t=A(ui.actions.pending),{total:o,uses:n}=y(sS,i=>({total:i?i.total:0,uses:i?i.used:0}),[]);return b.useEffect(()=>{t()},[t]),a.jsxs(cS,{children:[a.jsx(lS,{total:o,progress:[{value:n}]}),a.jsx(rS,{children:e("landingPageNew.form.uses",{uses:n,total:o})})]})},rS=m.span`
  ${ze};
`,lS=m(bn)`
  width: 100px;
`,cS=m.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-column-gap: ${({theme:e})=>e.spacing.sp8};
`,dS=b.memo(()=>{const{t:e}=k(),t=Oe("amazon","competitors"),{marketplace:o,loading:n}=y(ce,C=>({loading:C.loading,marketplace:(C.marketplace?F("AM","TLDomain",C.marketplace):F("AM","TLDomain","com")).domain}),[]),i=A(Ie.add),{getValues:s,setValue:r,watch:l,control:c,handleSubmit:d,reset:u}=ds({defaultValues:{mainAsin:[],asins:[]},mode:"all"}),{asins:p,mainAsin:g}=l(),h=A(W.setAsins),f=A(({asins:C})=>(h(C),G.analyze.pending({}))),v=d(f),S=b.useMemo(()=>({placeholder:e("landingPage.mainASINPlaceholder",{maxAsins:1})}),[e]),w=Ho({getValues:s,checkMyAsin:!0}),N=Ho({getValues:s}),[T,E]=b.useState([]),P=Ot(C=>{const V=T.filter(U=>C.indexOf(U)===-1),O=C.filter(U=>V.indexOf(U)===-1);E(C),r("asins",[...O,...C].filter(U=>!g.includes(U)).filter((U,de,he)=>he.indexOf(U)===de).slice(0,Le))}),z=Ot(C=>{E(C),r("asins",[...p,...C].filter(V=>!g.includes(V)).filter((V,O,U)=>U.indexOf(V)===O).slice(0,Le))}),Y=g.length===0||n,q=y(wo,C=>C==null?void 0:C.asin,[]),J=y(Lt),R=b.useRef(!1);return b.useEffect(()=>{R.current?u():R.current=!0},[o,u]),b.useEffect(()=>{z(J)},[]),b.useEffect(()=>{r("mainAsin",q?[q]:[])},[q,r]),a.jsxs(yS,{onSubmit:v,children:[a.jsxs(pi,{children:[a.jsx(uS,{children:e("landingPage.mainASINTitle")}),a.jsx(Bo,{name:"mainAsin",control:c,render:({field:C})=>{const{ref:V,...O}=C;return a.jsx(Ro,{...O,inputProps:S,size:"200",clearOnError:!0,onChange:U=>{U.length===0&&(u(),i(null))},addTagsOnPressKeys:Wo,onSeparate:_o,maxTags:1,validation:w,findSuggestionsMode:!0})}}),a.jsx(pS,{children:a.jsx(Zf,{})}),a.jsx(mS,{children:e("landingPage.competitorASINsTitle",{maxAsins:Le})}),a.jsx(gS,{children:a.jsx(iS,{disabled:g.length===0||t,asins:[...g,...p],maxAsins:Le+1,marketplace:o,handleAddAsins:P})}),a.jsx(Bo,{name:"asins",control:c,render:({field:C})=>{const{ref:V,...O}=C;return a.jsx(Ro,{...O,inputProps:{placeholder:e("tagInput.placeholder",{maxAsins:Le-p.length})},size:"200",clearOnError:!0,onChange:Ot(O.onChange),addTagsOnPressKeys:Wo,onSeparate:_o,maxTags:Le,validation:N,disabled:Y})}}),a.jsx($f,{handleAddAsins:z,disabled:Y,currentlySelectedAsins:p})]}),a.jsxs(eo,{children:[a.jsx(B,{buttonType:"primary",size:"400",disabled:Y,children:e("landingPage.runAnalysis")}),a.jsx(hS,{})]})]})}),Wo=[","," "],pi=m.div`
  max-width: 500px;
`,mi=m.div`
  ${us};
  color: ${({theme:e})=>e.systemColors.black};
`,uS=m(mi)`
  margin-bottom: ${({theme:e})=>e.spacing.sp8};
`,pS=m.div`
  margin-top: ${({theme:e})=>e.spacing.sp8};
`,mS=m(mi)`
  margin-top: 40px;
`,gS=m.div`
  display: flex;
  align-items: flex-start;

  ${({theme:e})=>X`
    margin-top: ${e.spacing.sp8};
    margin-bottom: ${e.spacing.sp16};
  `}
`,eo=m.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-column-gap: ${({theme:e})=>e.spacing.sp32};
  align-items: center;
  margin-top: 40px;
`,hS=m(aS)``,yS=m.form`
  align-self: center;

  ${L.desktopBefore} {
    ${pi}, ${eo} {
      max-width: 500px;
      margin: auto;
    }

    ${eo} {
      grid-template-columns: 1fr;
      grid-row-gap: ${({theme:e})=>e.spacing.sp8};
      margin-top: ${({theme:e})=>e.spacing.sp16};

      button {
        grid-row-start: 2;
      }
    }
  }
`,fS={mediaComparison:["free","starter","platinum"],salesChart:["free"]},gi=({action:e=SS,restriction:t,trigger:o})=>{const{planGroup:n}=ot(),i=fS[t].includes(n),s=A(()=>Be.open({restriction:t,trigger:o}),[t,o]);return i?s:e},SS=()=>{},Xe={sm:576,md:750,lg:1280,xl:1300},vS=b.memo(()=>{const{t:e}=k(),{blurred:t}=ot(),o=gi({restriction:"mediaComparison",trigger:'User click "Upgrade Banner"'});return t?a.jsxs(bS,{children:[a.jsx(wS,{dangerouslySetInnerHTML:{__html:e("upgradeBanner.text")}}),a.jsx(B,{size:"100",onClick:o,children:e("upgradeBanner.button")})]}):null}),bS=m.div`
  background-color: ${e=>e.theme.systemColors.blue50};
  padding: ${e=>e.theme.spacing.sp12};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 -16px;
  @media (min-width: ${Xe.lg+1}px) {
    margin: 0 -48px;
  }
  align-self: stretch;
`,wS=m.div`
  ${ze};
  margin-right: ${e=>e.theme.spacing.sp24};
  color: ${e=>e.theme.systemColors.black};
`,AS=()=>{const{t:e}=k(),{progress:t}=y(ce);return t!=null&&t!==100?a.jsxs(xS,{children:[a.jsxs(kS,{children:[e("common.fetchingData")," ",a.jsxs(TS,{children:[t,"%"]})]}),a.jsx(bn,{progress:[{value:t||0}],total:100})]}):null},xS=m.div`
  margin: ${e=>`${e.theme.spacing.sp32} 0`};
`,kS=m.h1`
  ${pn};
`,TS=m.div`
  ${lo};
  display: inline;
`,CS=()=>{const{t:e}=k(),t=y(So);return a.jsx(zS,{to:$(ne(),{}),children:a.jsx(B,{icon:a.jsx(Z,{icon:ao}),buttonType:"text",disabled:t,children:e("topPanelResult.backToSearch")})})},zS=m(an)`
  text-decoration: none;

  ${L.laptopBefore} {
    margin-bottom: ${({theme:e})=>e.spacing.sp8};
  }
`,hi=x(D([Ae,ue,ce,Q]),([e,{asin:t},o,n])=>{var u,p,g,h,f;if(!e)return{sellerCountry:"US",reviewsRating:0,listingQualityScore:0,price:0,stock:0,reviewCount:0,age:0,status:"loading"};const{price:i,age:s,stock:r,reviewCount:l,reviewsRating:c,sellerCountry:d}=((u=e.singleResponses[t])==null?void 0:u.seedSalesData)||{};return{sellerCountry:d,reviewsRating:c,listingQualityScore:((f=(h=(g=(p=n==null?void 0:n.data)==null?void 0:p.scoreData)==null?void 0:g.data)==null?void 0:h[t])==null?void 0:f.totalScore)||0,price:i,stock:r,reviewCount:l,age:s,status:Ae==null||!o.complete?"loading":"loaded"}}),NS=()=>{const{t:e}=k(),{open:t}=Hs(),{asin:o}=y(ue),n=y(ae),{listingQualityScore:i,price:s,stock:r,reviewCount:l,age:c,status:d}=y(hi),u=ea.useMediaLayout({maxWidth:768}),p=n.currency!=="JPY"?s/100:s;return d==="loaded"?a.jsxs(yi,{children:[a.jsx(Se,{children:a.jsxs(Qe,{children:[u?a.jsx(Ve,{children:e("topPanelResult.BuyBoxInfo.LQS")}):a.jsx(Ve,{children:e("topPanelResult.BuyBoxInfo.listingQualityScoreBox")}),a.jsx(ta,{value:i,className:"top-panel-result__gauge-diagram"})]})}),a.jsx(Se,{children:a.jsxs(Qe,{children:[a.jsx(Ve,{children:e("topPanelResult.BuyBoxInfo.priceBox")}),a.jsxs(Qo,{children:[a.jsx(B,{onClick:()=>t(o,"price"),buttonType:"text",children:a.jsx(Do,{data:[1,2,15,56,13,17,10,18,34,10]})}),a.jsx(Ze,{children:mt({amount:p??0,currency:n.currency})})]})]})}),a.jsx(Se,{children:a.jsxs(Qe,{children:[a.jsx(Ve,{children:e("topPanelResult.BuyBoxInfo.stockBox")}),a.jsx(Ze,{children:r?te({value:r}):0})]})}),a.jsx(Se,{children:a.jsxs(Qe,{children:[a.jsx(Ve,{children:e("topPanelResult.BuyBoxInfo.reviewCountBox")}),a.jsxs(Qo,{children:[a.jsx(B,{onClick:()=>t(o,"review"),buttonType:"text",children:a.jsx(Do,{data:[1,2,15,56,13,17,10,18,34,10]})}),a.jsx(Ze,{children:l?te({value:l}):0})]})]})}),a.jsx(Se,{children:a.jsxs(Qe,{children:[a.jsx(Ve,{children:e("topPanelResult.BuyBoxInfo.ageBox")}),a.jsx(Ze,{children:c?po(new Date,new Date(c*1e3)):"N/A"})]})})]}):a.jsx(IS,{})},PS=[...new Array(5)],IS=()=>a.jsx(yi,{children:PS.map((e,t)=>a.jsxs(MS,{children:[a.jsx($S,{}),a.jsx(LS,{})]},t))}),Qe=m.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Ze=m.div`
  ${pn};
  display: inline;
`,Qo=m.div`
  ${Ze} {
    margin-left: ${({theme:e})=>e.spacing.sp8};
  }

  display: flex;
  align-items: center;
`,Ve=m.div``,Se=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 0 ${({theme:e})=>e.spacing.sp16};
`,yi=m.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(60px, auto);
  background-color: ${({theme:e})=>e.systemColors.grey200};
  grid-column-gap: 1px;
  margin-top: ${({theme:e})=>e.spacing.sp24};

  .top-panel-result__gauge-diagram {
    width: 56px;
  }

  ${L.mobileBefore} {
    grid-template-columns: repeat(2, 1fr);

    ${Se} {
      justify-content: start;
      ${({theme:e})=>X`
        padding: ${e.spacing.sp8};
      `}
    }

    ${Se}:nth-child(odd) {
      justify-content: start;
      padding-left: 0;
    }

    ${Se}:last-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`,MS=m(Se)`
  flex-direction: column;
  align-items: flex-start;
`,$S=m(Ne)`
  height: 22px;
  margin-bottom: ${e=>e.theme.spacing.sp4};
  max-width: 120px;
`,LS=m(Ne)`
  height: 36px;
`,jS=()=>{const{t:e}=k(),t=y(it),{asin:o,imageUrl:n,title:i,mainSku:s}=y(ue),{TLDomain:r,domain:l,store:c}=y(se),d=Rn(r,o),{reviewsRating:u,status:p}=y(hi),g={href:d,title:a.jsx("div",{dangerouslySetInnerHTML:{__html:p==="loading"&&!i?e("resultPageNew.productTitleLoading"):i||""}}),imageSrc:n,asin:o},h=u<0?0:u,f=na({data:{asin:o,isMine:t,marketplace:l,...s!=null?{sku:s}:{},...p==="loaded"?{rating:h}:{}},size:"400"});return a.jsx(kt,{market:"a",marketplace:c,tool:"listingAnalyzer",product:g,renderBlocks:f,size:"400"})},BS=()=>{const e=y(So);return a.jsxs(FS,{children:[a.jsx(ho,{disabled:e}),a.jsx(ti,{}),a.jsx(Yn,{disabled:e}),a.jsx(Qn,{})]})},FS=m.div`
  display: flex;
  white-space: nowrap;

  & > *:not(:last-child) {
    margin-right: ${({theme:e})=>e.spacing.sp8};
  }

  ${L.mobileBefore} {
    flex-wrap: wrap;

    > *:not(:last-child) {
      margin-bottom: ${({theme:e})=>e.spacing.sp8};
    }
  }
`,RS=()=>a.jsxs(DS,{children:[a.jsx(ES,{}),a.jsxs(VS,{children:[a.jsx(Yo,{}),a.jsx(Yo,{}),a.jsx(OS,{})]})]}),DS=m.div`
  display: flex;
  width: 100%;
`,ES=m(Ne)`
  width: 76px;
  height: 92px;
`,VS=m.div`
  margin-left: ${e=>e.theme.spacing.sp16};
  flex: 1;
`,Yo=m(Ne)`
  width: 100%;
  height: 24px;
  margin: 4px 0;
`,OS=m(Ne)`
  height: 20px;
  margin: 6px 0;
  max-width: 200px;
`,fi=()=>{const e=y(So);return a.jsxs(qS,{children:[a.jsxs(KS,{children:[a.jsx(CS,{}),a.jsx(BS,{})]}),a.jsx(AS,{}),a.jsx(US,{children:e?a.jsx(RS,{}):a.jsx(jS,{})}),a.jsx(NS,{})]})},US=m.div`
  margin-top: ${({theme:e})=>e.spacing.sp24};
`,KS=m.div`
  display: flex;
  justify-content: space-between;

  ${L.laptopBefore} {
    flex-direction: column;
  }
`,qS=m.div`
  width: 100%;
  ${({theme:e})=>X`
    margin-top: ${e.spacing.sp32};
    margin-bottom: ${e.spacing.sp24};
  `};
`,GS=()=>a.jsxs(a.Fragment,{children:[a.jsx(fi,{}),a.jsx(ZS,{children:[...new Array(3)].map((e,t)=>a.jsxs(JS,{children:[a.jsxs(_S,{children:[a.jsxs(XS,{children:[a.jsx(YS,{}),a.jsx(QS,{})]}),a.jsx(WS,{})]}),a.jsx(HS,{children:a.jsx(wn,{legendCount:3})})]},t))})]}),_S=m.div`
  display: flex;
  justify-content: space-between;
`,HS=m.div`
  height: 400px;
  display: flex;
  flex-direction: column;
`,WS=m(Ne).attrs({$size:"large"})`
  width: 300px;
`,QS=m(Ne).attrs({$size:"medium"})`
  width: 200px;
`,YS=m(Ne).attrs({$size:"normal"})`
  width: 400px;
`,ZS=m.div`
  width: 100%;

  & > :not(:first-child) {
    margin-top: ${({theme:e})=>e.spacing.sp24};
  }
`,JS=m.div`
  width: 100%;
  border-radius: 6px;

  ${({theme:e})=>X`
    padding: ${e.spacing.sp24};
    border: 1px solid ${e.systemColors.grey200};
  `}
`,XS=m.div`
  width: 100%;

  & > *:not(:last-child) {
    margin-bottom: ${({theme:e})=>e.spacing.sp16};
  }
`,ev=x(D([pe,ce]),([e,t])=>e.loading||!t.complete?"loading":"loaded"),tv=()=>{const{searchId:e}=ge(),t=y(Mt),o=y(pe,S=>{var w,N;return(w=S.data)!=null&&w.marketplaceId?F("AMAZON","id",(N=S.data)==null?void 0:N.marketplaceId):F("AMAZON","TLDomain","com")},[]),n=y(Wh,S=>((S==null?void 0:S.order)||[]).map(w=>S!=null?S.byId1[w]:void 0).filter(w=>w).map(w=>w),[]),i=y(ev),s=y(Pt),r=y(Hh),l=!Oe("walmart","searchVolumeChart"),c=!Oe("common","googleTrendChart"),d=Oe("walmart","seeMonthlySalesColumn"),u=Oe("amazon","myList"),{planGroup:p}=ot(),g=A(Gn.continueInCerebro),h=A(()=>Be.open({restriction:"salesChart",trigger:'User click "Search graphic"'}),[]),f=A(()=>Be.open({restriction:"mediaComparison",trigger:'User click "Upgrade Banner"'}),[]),v=A(()=>Be.open({restriction:"mediaComparison",trigger:'User click "Keyword Sales"'}),[]);return a.jsx(nv,{children:a.jsx(Os,{searchId:e,isSingleSearch:t,marketplace:o,status:i,data:n,products:s,metrics:r,onClickBlurredMonthlySales:v,enabledWalmartSearchVolumeChart:l,enabledGoogleSearchVolumeChart:c,monthlySalesLocked:d,addToMyListLocked:u,planGroup:p||"free",openUpgradeModalForSearchGraph:h,openUpgradeModalForBanner:f,onClickExternalLink:ov,notification:ve,seeFullListInCerebro:g})})},ov=()=>Bn("exit-event",{tool:"keywordresearch"}),nv=m.div`
  display: block;
  width: 100%;
  margin-top: ${e=>e.theme.spacing.sp24};
  padding-bottom: 120px;
`,iv=()=>{const e=oe(qe);return e!=="diamond"&&e!=="elite"},sv=()=>{const e=ps(oe.getState()),{planGroup:t}=An(),o=oe(n=>{var i;return((i=n.checkLogin)==null?void 0:i.plan)||nn.StartYourBusiness});return b.useCallback(()=>{qs.open({isChinese:e,plan:o,segmentEventProperties:{CurrentPlan:t,Location:"LA_trackerCompetitor_learnMore",Trigger:"Learn More",UpsellPlan:"Diamond",tool:"listing-analyzer"}})},[e,o,t])},av=({competitors:e})=>{const t=e.length,o=y(se),n=y(Cn),{planGroup:i}=An(),s=Js({marketplace:o.store,selected:e,tool:"ListingAnalyzer"}),r=()=>{Tt({eventName:"CC - Competitor Add From",eventProperties:{Number:t,Tool:"Listing Analyzer"}}),s()},l=sv();return a.jsx(Xs,{selected:e,limit:rv,isChinese:n,planGroup:i,onClick:r,onLearnMore:l,onUpgradePlan:l,tool:"listingAnalyzer",tooltip:{appendTo:document.body}})},rv=5,lv=()=>{const{t:e}=k(),t=y(Q,o=>{var n;return Object.keys(((n=o.data)==null?void 0:n.scoreData.data)||{}).length},[]);return b.useCallback(o=>{const n=o.length;return a.jsx(Zo,{children:n?a.jsxs(dv,{children:[a.jsx(uv,{children:e("metricsAcrossAsins.leftActions.selected",{products:n})}),a.jsx(av,{competitors:o})]}):a.jsx(Zo,{children:e("metricsAcrossAsins.leftActions.unselected",{products:t})})})},[t,e])},cv=X`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing.sp8};
`,dv=m.div`
  ${cv};
`,uv=m.div`
  ${co};
`,Zo=m.div``,pv=()=>{const{t:e}=k(),t=y(Xn),o=y(ei),n=y(ae),i=y(Cn),{planGroup:s,blurred:r}=ot(),l=A(()=>Be.open({upsellPlan:"starter",restriction:"mediaComparison",trigger:"Sales Chart Clicked"}),[]),c=tt(),d=iv(),{searchId:u}=ge(),p=A(()=>(!d&&c($(ne(),{searchId:u,mediaComparison:!0})),me.actions.pending({eventName:"Listing Analyzer Media Comparison Clicked",eventProperties:{}})),[d,u]),g=gi({action:p,restriction:"mediaComparison"}),h=lv(),f=b.useMemo(()=>({haveCheckbox:!i}),[i]);return a.jsx(Sn,{data:t,status:o,marketplace:n,planGroup:s,blurred:r,openUpgradeModal:l,handleOpenMediaComparison:g,mediaComparisonLocked:d,tableTitle:e("asinsMetricsTitle"),tableTitleTooltip:e("asinsMetricsTooltip"),selected:f,leftActions:h,tool:"listingAnalyzer"})},mv=()=>{const{t:e}=k();return b.useMemo(()=>[{children:e("salesChart.tabs.sales"),value:"gross"},{children:e("salesChart.tabs.units"),value:"units"}],[e])},gv=({title:e,value:t,trend:o,type:n})=>{const{currency:i}=y(se);return a.jsxs(hv,{children:[a.jsx(yv,{children:e}),t!=null&&a.jsx(fv,{children:t!=null?n==="gross"?mt({amount:Math.abs(t),currency:i}):te({value:t,maximumFractionDigits:0}):"N/A"}),a.jsxs(Sv,{children:[a.jsx(vv,{children:t!=null?n==="gross"?mt({amount:Math.abs(o||0),currency:i}):te({value:o,maximumFractionDigits:0}):"N/A"}),a.jsx(bv,{icon:o>0?ms:o<0?gs:hs,value:o})]})]})},hv=m.div``,yv=m.div`
  ${ze};
  white-space: nowrap;
`,fv=m.div`
  ${lo}
`,Sv=m.div`
  display: flex;
  align-items: center;
`,vv=m.div``,bv=m(Z)`
  margin-left: ${e=>e.theme.spacing.sp4};

  color: ${e=>e.theme.systemColors.grey600};
  ${({value:e})=>(e||0)>0&&X`
      color: ${t=>t.theme.systemColors.green600};
    `};
  ${({value:e})=>(e||0)<0&&X`
      color: ${t=>t.theme.systemColors.orange400};
    `}
`,wv=async e=>K({url:$(`${j}/api/v1/alerts/disable-monitoring`,{}),method:"POST",params:e,withCredentials:!0}),to=H("disableAlertsMonitoring",async e=>wv(e),{rejectedReaction:({fetchError:e})=>{var o,n;const t=ee.getState().translation;if(t){const{t:i}=t;let s=(o=e==null?void 0:e.result)!=null&&o.message?i(`alertsErrors.${(n=e==null?void 0:e.result)==null?void 0:n.message}`):i(`errors.common.${e==null?void 0:e.responseStatus}`);(e==null?void 0:e.responseStatus)===429&&(s=i(`errors.common.${e==null?void 0:e.responseStatus}`)),ve.error(s)}}}),Av=async e=>K({url:$(`${j}/api/v1/alerts/enable-monitoring`,{}),method:"POST",params:e,withCredentials:!0}),oo=H("enableAlertsMonitoring",async e=>Av(e),{rejectedReaction:({fetchError:e})=>{var o,n;const t=ee.getState().translation;if(t){const{t:i}=t;let s=(o=e==null?void 0:e.result)!=null&&o.message?i(`alertsErrors.${(n=e==null?void 0:e.result)==null?void 0:n.message}`):i(`errors.common.${e==null?void 0:e.responseStatus}`);(e==null?void 0:e.responseStatus)===429&&(s=i(`errors.common.${e==null?void 0:e.responseStatus}`)),ve.error(s)}}}),xv=async e=>K({url:$(`${j}/api/v1/alerts/list-of-products`,{}),method:"GET",params:e,withCredentials:!0}),ft=H("checkAlertsEnabled",async(e,{getState:t})=>{const o=t(Pe),n=t(It),i=t(se).store,s=t(Ge)||"",r=await xv({filter:o,limit:10,offset:0,customerAccountId:String(ys()),marketplace:i,sellerId:s,status:!0});return{...r,results:{...r.results,data:(r.results.data||[]).filter(l=>l.sellerSku===n)}}},{contentReducers:{rejected:()=>null}}),kv=x(ft.atom,e=>{var t,o,n;return!!((n=(o=(t=e.content)==null?void 0:t.results)==null?void 0:o.data)!=null&&n[0])}),Tv=_("alertsEnabledAtom",!1,e=>{e(ft.actions.pending,()=>!1),e(ft.actions.fulfilled,(t,o)=>{var n,i,s;return(((s=(i=(n=o.result)==null?void 0:n.results)==null?void 0:i.data)==null?void 0:s.length)||0)>0}),e(oo.actions.pending,()=>!0),e(oo.actions.rejected,()=>!1),e(to.actions.pending,()=>!1),e(to.actions.rejected,()=>!0)}),Cv=()=>{const{t:e}=k(),t=y(Tv),o=A(oo.actions.pending),n=A(to.actions.pending),i=A(me.actions.pending),s=y(Pe),r=y(ae).store,l=y(It),c=b.useCallback(d=>{d?(o({asin:s,marketplace:r,sellerSku:l}),i({eventName:"Listing Analyzer Setup Alert Toggled",eventProperties:{toggledOn:!0}})):(n({asin:s,marketplace:r,sellerSku:l}),i({eventName:"Listing Analyzer Setup Alert Toggled",eventProperties:{toggledOn:!0}}))},[s,n,o,r,l,i]);return a.jsxs(zv,{children:[a.jsx(js,{checked:t,onChange:()=>c(!t),children:e("alerts.button")}),a.jsx(Nv,{content:e("alerts.tooltip")})]})},zv=m.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
`,Nv=m(Ao)`
  margin-left: ${({theme:e})=>e.spacing.sp8};
`,Si=({aggregates:e,isEstimation:t})=>{const o=mv(),n=A(vo),i=y(nt);return a.jsxs(Mv,{children:[a.jsx(Iv,{children:a.jsx(Bs,{buttons:o,onChange:n,value:i})}),a.jsx(vi,{children:e==null?void 0:e.map(({id:s,...r})=>a.jsx(Je,{children:a.jsx(gv,{...r,type:i})},s))}),t?a.jsx("div",{}):a.jsx(Cv,{})]})},Pv=m(B)``,Je=m.div``,Iv=m.div`
  width: fit-content;
`,vi=m.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 96px;

  ${L.largeDesktopBefore} {
    grid-column-gap: 24px;
  }

  ${L.desktopBefore} {
    ${Je}:nth-child(2) {
      display: flex;
      justify-content: center;
    }

    ${Je}:last-child {
      display: flex;
      justify-content: end;
    }
  }

  ${L.mobileBefore} {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;

    ${Je}:nth-child(2), ${Je}:last-child {
      display: block;
    }
  }
`,Mv=m.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing.sp32};

  ${L.desktopBefore} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-row-gap: ${({theme:e})=>e.spacing.sp16};

    ${vi} {
      grid-row-start: 2;
      grid-column-start: 1;
      grid-column-end: 4;
    }

    ${Pv} {
      grid-column-start: 3;
    }
  }
`,$v=({title:e,tooltip:t,period:o,additionTitle:n,size:i="big"})=>a.jsxs("div",{children:[a.jsxs(Bv,{children:[a.jsx(Lv,{$size:i,children:e}),n,a.jsx(Fv,{content:t})]}),o??a.jsx(jv,{children:o})]}),Lv=m.div`
  ${({$size:e})=>e==="big"&&X`
      ${cn};
    `}
  ${({$size:e})=>e==="medium"&&X`
      ${co};
      color: ${t=>t.theme.systemColors.black};
    `}
`,jv=m.div`
  ${vt};
  margin-top: ${e=>e.theme.spacing.sp4};
`,Bv=m.div`
  display: flex;
  align-items: center;
`,Fv=m(Ao)`
  margin-left: ${e=>e.theme.spacing.sp8};
`,Rv=async e=>K({url:$(`${j}/api/v1/alerts/events`,{}),method:"GET",params:e,withCredentials:!0}),ko=H("getAlertsEvents",async(e,{getState:t})=>{var d;const o=t(Ge)||"",n=t(ue).asin,i=t(It),s=t(No),r=t(se).store,l=await Rv({...s,seller:o,asin:n,marketplace:r,sellerSku:i}),c=(((d=l.results)==null?void 0:d.data.map(u=>({...u,createdAt:new Date(u.eventDate.split(" America/Los_Angeles")[0].replace(" ","T")+"Z").getTime()/1e3})))||[]).filter(u=>u.sellerSku===i);return{...l,results:{...l.results,data:c}}},{rejectedReaction:({fetchError:e})=>{var o,n;const t=ee.getState().translation;if(t){const{t:i}=t,s=(o=e==null?void 0:e.result)!=null&&o.message?i(`alertsErrors.${(n=e==null?void 0:e.result)==null?void 0:n.message}`):i(`errors.common.${e==null?void 0:e.responseStatus}`);ve.error(s)}}}),Dv=x("getAlertsEventsStatusSelector",ko.atom,e=>e.status),Ev=x("getAlertsEventsDataSelector",ko.atom,e=>{var o;const t=xt(((o=e.content)==null?void 0:o.results.data)||[],n=>n.createdAt);return Object.keys(t).map(n=>({date:Number(n)*1e3,alerts:t[n]}))}),Vv=async(e,t)=>K({method:"GET",url:$(va,{...e}),signal:t,withCredentials:!0}),To=H("getSalesOverviewChart",async e=>{const t=await Vv(e),o=t.results.gross.map(i=>({...i,date:i.date+new Date(i.date).getTimezoneOffset()*60})),n=t.results.units.map(i=>({...i,date:i.date+new Date(i.date).getTimezoneOffset()*60}));return{...t,results:{...t.results,gross:o,units:n}}}),bi=I("getSalesOverviewChartAction",(e,{getState:t,dispatch:o})=>{const n=t(No),i=t(Pe),s=t(se).store,r=t(Ge),l=t(It);r&&o(To.actions.pending({...n,asin:i,marketplace:s,sellerId:r,sellerSku:l}))}),Ov=x(D([To.atom,Dv,kv]),([e,t,o])=>e.status==="loading"||o&&t==="loading"?"loading":"loaded"),Co=[_t(new Date,{days:-29}),new Date],zo=I("setSalesOverviewPeriod",(e,{dispatch:t})=>{t(bi())}),jt=_("salesOverviewPeriodAtom",Co,e=>{e(zo,(t,o)=>o)}),No=x("salesOverviewPeriodForApiSelector",jt,e=>{const t=e.sort((o,n)=>o.getTime()-n.getTime());return{dateFrom:re(je(t[0]),"yyyy-MM-dd HH:mm:ss"),dateTo:re(Ue(t[1]),"yyyy-MM-dd HH:mm:ss")}}),Uv=x("salesEstimationOverviewPeriodForApiSelector",jt,e=>{const t=e.sort((o,n)=>o.getTime()-n.getTime());return{dateFrom:re(je(t[0]),"yyyy-MM-dd"),dateTo:re(Ue(t[1]),"yyyy-MM-dd")}}),Kv=x("salesOverviewPeriodDays",jt,e=>{const t=e.sort((i,s)=>i.getTime()-s.getTime()),o=je(t[0]),n=Ue(t[1]);return vn(n,o)}),qv=()=>{const{t:e}=k();return b.useMemo(()=>[{label:e("salesChart.periods.today"),id:"Today",value:[new Date,new Date]},{label:e("salesChart.periods.yesterday"),id:"Yesterday",value:[Eo(new Date,1),Eo(new Date,1)]},{label:e("salesChart.periods.lastNDays",{N:7}),id:"Last 7 Days",value:[new Date,_t(new Date,{days:-6})]},{label:e("salesChart.periods.lastNDays",{N:30}),id:"Last 30 Days",value:Co},{label:e("salesChart.periods.lastNDays",{N:60}),id:"Last 60 Days",value:[new Date,_t(new Date,{days:-59})]}],[e])},Gv=()=>{const{t:e}=k(),t=A(()=>me.actions.pending({eventName:"Listing Analyzer See More in Profits Clicked",eventProperties:{}}),[]),o=y(Pe),n=y(Ge),i=y(se).store,s=b.useMemo(()=>$("https://members.helium10.com/profits/product-performance",{sellerName:n,marketplace:i,platform:"amazon",filter:o}),[o,i,n]);return a.jsx(_v,{onClick:t,href:s,target:"_blank",rel:"noreferrer",children:a.jsx(bt,{content:e("salesChart.profitsButton.tooltip"),children:a.jsx(B,{buttonType:"secondary",type:"button",children:e("salesChart.profitsButton.title")})})})},_v=m.a`
  text-decoration: none;
`,wi=({title:e,tooltip:t,isEstimation:o})=>{const{t:n}=k(),i=y(jt),s=A(zo),r=qv(),l=b.useMemo(()=>{const c=i.sort((d,u)=>d.getTime()-u.getTime());return`${Gt(c[0],"standard")} – ${Gt(c[1],"standard")}`},[i]);return a.jsxs(Wv,{children:[a.jsx($v,{title:e,period:l,tooltip:t}),a.jsxs(Hv,{children:[!o&&a.jsx(Gv,{}),a.jsx(Ai,{children:a.jsx(aa,{onChange:s,value:i,placeholder:n("salesChart.periodsPlaceholder"),mode:"range",alwaysRange:!1,columns:2,periodPresets:r,showCalendar:!0})})]})]})},Hv=m.div`
  display: flex;
  align-items: center;

  & > :not(:first-child) {
    margin-left: ${e=>e.theme.spacing.sp16};
  }
`,Ai=m.div`
  min-width: 230px;
`,Wv=m.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({theme:e})=>e.spacing.sp24};
  justify-content: space-between;

  ${L.mobileBefore} {
    flex-direction: column;

    ${Ai} {
      margin-top: ${({theme:e})=>e.spacing.sp16};
    }
  }
`,Qv=({height:e,getChartData:t})=>{const{t:o}=k();return a.jsxs(Yv,{height:e,children:[a.jsx(Zv,{children:o("chartError.text")}),a.jsx(Jv,{buttonType:"primary",size:"200",onClick:t,children:o("chartError.button")})]})},Yv=m.div`
  width: 100%;
  height: ${({height:e})=>e||300}px;
`,Zv=m.div`
  ${ze};
`,Jv=m(B)`
  margin-top: ${e=>e.theme.spacing.sp24};
`,Xv=b.lazy(()=>fs(()=>import("./Graph-5Alqnj1T.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52])).then(e=>({default:e.SalesOverviewGraph}))),xi=({data:e,status:t,isEstimation:o=!1})=>{const n=A(bi);b.useEffect(n,[n]);const i=b.useMemo(()=>{var s,r;return{init:a.jsx(Kt,{}),loaded:(r=(s=e[0])==null?void 0:s.data)!=null&&r.length?a.jsx(Xv,{data:e,isEstimation:o}):a.jsx(o0,{}),error:a.jsx(Qv,{height:300,getChartData:n}),progress:null,waiting:null,loading:a.jsx(Kt,{})}},[e,n,o]);return a.jsx(b.Suspense,{fallback:a.jsx(Kt,{}),children:i[t]})},Kt=()=>a.jsx(e0,{children:a.jsx(wn,{legendCount:3})}),ki=X`
  width: 100%;
  height: 300px;
`,e0=m.div`
  ${ki};
  display: flex;
  flex-direction: column;
`,t0=m.div`
  ${ki};
  ${ze};
  display: flex;
  justify-content: center;
  align-items: center;
`,o0=()=>{const{t:e}=k();return a.jsx(t0,{children:a.jsx("div",{children:e("salesChart.noData")})})},Ti=()=>{const e=A(zo),t=A(vo);b.useEffect(()=>()=>{e(Co),t("gross")},[e,t])},n0=()=>{const e=y(Uv),t=y(Pe),o=y(se).store,n=y(Ge),i=y(le.atom,l=>{var c;return((c=l.content)==null?void 0:c.price)||0},[]),s=vn(new Date(e.dateTo),new Date(e.dateFrom))+1,r=new Date().getTimezoneOffset()/60;return A(()=>st.actions.pending({...e,asin:t,marketplace:o,sellerId:n,currentPrice:i||0,timezoneOffset:r}),[e.dateFrom,e.dateTo,t,o,n,i,r,s])},i0=()=>{const e=A(()=>ft.actions.pending({}),[]);b.useEffect(e,[e]);const t=y(No),o=A(()=>ko.actions.pending({}),[]);b.useEffect(()=>{o()},[o,t.dateFrom,t.dateTo])},s0=()=>{const{mainAsin:e,sellerId:t,mainSku:o}=y(ue),n=y(se).store,i=A(()=>{if(e&&n&&t&&o)return bo.actions.pending({asin:e,marketplace:n,sellerId:t,sellerSku:o})},[e,n,t,o]);b.useEffect(i,[i])},a0=x("getSalesOverviewChartDataSelector",D([To.atom,Ev,nt,Kv]),([e,t,o,n])=>{var p;const i=(p=e.content)==null?void 0:p.results,s=Jo(i==null?void 0:i.gross),r=Jo(i==null?void 0:i.units),l=Xo(s,t,n===0),c=Xo(r,t,n===0),d=en(l,c,"sales"),u=en(c,l,"units");return[{name:"Sales",data:o==="gross"?d:u,color:"#0A6FE8",isLine:!1}]}),Jo=e=>(e||[]).map(({date:t,value:o})=>({date:t*1e3,value:o})),Xo=(e,t,o)=>{if(e.length>0){const n=o?ra:je;return e.map(({date:i,value:s})=>{const r=n(new Date(i)),l=t.filter(({date:c})=>n(new Date(c)).getTime()===r.getTime()).reduce((c,{alerts:d})=>[...c,...d],[]);return{date:i,value:s,alerts:l}})}else return[]},en=(e,t,o)=>e.map(n=>{var i,s;return{x:n.date,y:n.value,...n,sales:o==="sales"?n.value:(i=t.find(r=>r.date===n.date))==null?void 0:i.value,units:o==="units"?n.value:(s=t.find(r=>r.date===n.date))==null?void 0:s.value}}),r0=()=>{const{t:e}=k();Ti(),i0(),s0();const t=y(Th),o=y(a0),n=y(Ov);return a.jsxs(l0,{children:[a.jsx(wi,{title:e("salesChart.title"),tooltip:e("salesChart.tooltip")}),a.jsx(Si,{aggregates:t}),a.jsx(xi,{data:o,status:n})]})},Ci=m.div`
  background: #ffffff;
  border: 1px solid #d9e0e8;
  border-radius: 6px;
  padding: ${({theme:e})=>e.spacing.sp24};
  width: 100%;
`,l0=m(Ci)`
  margin-bottom: ${({theme:e})=>e.spacing.sp24};
`,c0=()=>{const{t:e}=k();Ti();const t=n0();b.useEffect(t,[t]);const o=y(jy),n=y(Ly),i=y(By);return a.jsxs(d0,{children:[a.jsx(wi,{title:e("salesEstimationChart.title"),tooltip:e("salesEstimationChart.tooltip"),isEstimation:!0}),a.jsx(Si,{aggregates:i,isEstimation:!0}),a.jsx(xi,{data:o,status:n,isEstimation:!0})]})},d0=m(Ci)`
  margin-bottom: ${({theme:e})=>e.spacing.sp24};
`,u0=()=>{const{t:e}=k(),t=tt(),{searchId:o}=ge();return a.jsxs(p0,{children:[a.jsx(m0,{children:a.jsx(B,{onClick:()=>t($(ne(),{searchId:o})),buttonType:"text",icon:a.jsx(Z,{icon:ao}),children:e("mediaComparison.goToListingAnalyzer")})}),a.jsx(Zh,{})]})},p0=m.div`
  width: 100%;
  padding-bottom: ${e=>e.theme.spacing.sp80};
`,m0=m.div`
  padding-top: ${e=>e.theme.spacing.sp32};
  margin-top: ${e=>e.theme.spacing.sp8};
  margin-bottom: ${e=>e.theme.spacing.sp32};
`,g0=b.memo(()=>{const e=y(se,d=>d.store,[]),t=y(ue,d=>d.tokenId,[]),o=y(ue,d=>d.asin,[]),n=y(ue,d=>d.mainSku,[]),i=y(ue,d=>d.marketplaceId,[]),s=y(Ge),[r,l]=b.useState(),c=A(()=>me.actions.pending({eventName:"Listing Builder Optimize Clicked",eventProperties:{}}),[]);return b.useEffect(()=>{t&&o&&i&&ni({filter:{count:100,page:1,search:o,sortField:"id",sortDirection:"ASC"},marketplace:{marketplaceId:i,tokenId:t}}).then(d=>{l(d.data.map(u=>u.sellerSku))}).catch()},[o,i,t]),a.jsx(la,{marketplace:e,asin:o,defaultSku:n,sellerId:s,skuOptions:r,onOptimizeClick:c})}),h0=({searchId:e,mediaComparison:t})=>{const{t:o}=k(),n=tt(),i=mn(S=>S.status!=="loaded");y(Fh,S=>null,[]);const s=A(Eh.pending),r=A(Vn.pending),l=A(we.subscribeForAnalytics),c=A(we.cleanAnalyticsSubscribe);b.useEffect(()=>{r({id:e}),s({searchId:e})},[r,s,e]),b.useEffect(()=>(l(),c),[l,c]);const{blurred:d}=ot();b.useEffect(()=>{!i&&t==="true"&&d&&n($(ne(),{searchId:e}),{replace:!0})},[d,i,t,n,e]);const u=y(it),p=y(ae),g=y(at.atom,S=>S.status,[]),h=y(si),f=y(le.atom,S=>S.status!=="loaded",[]),v=y(Pe);return a.jsx(zi,{children:f||i?a.jsx(GS,{}):t!=="true"?a.jsxs(a.Fragment,{children:[a.jsx(Ws,{marketplace:p,showMarketplace:!0}),a.jsx(vS,{}),a.jsx(fi,{}),u?a.jsx(r0,{}):a.jsx(c0,{}),a.jsx(Qs,{isMine:u,asin:v,marketplaceStore:p.store,hideImproveButton:!0}),u&&a.jsx(g0,{}),a.jsx(pv,{}),g==="loaded"&&!h&&a.jsx(S0,{children:a.jsx(ri,{headerText:o("landingPageNew.connectToAmazon.header.textResult"),bodyText:o("landingPageNew.connectToAmazon.body.textResult")})}),a.jsxs(y0,{children:[a.jsx(Xh,{}),a.jsx(tv,{})]}),a.jsx(ia,{marketplace:p,showMarketplace:!0})]}):a.jsx(u0,{})})},y0=m.div`
  margin-top: ${({theme:e})=>e.spacing.sp24};
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: ${be("white")};
`,f0=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`,zi=m.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  min-width: 100%;
  padding: 0 16px;
  @media (min-width: ${Xe.lg+1}px) {
    padding: 0 48px;
  }

  ${f0} {
    margin-top: 48px;
  }

  ${Sn.Wrapper} {
    margin-top: ${({theme:e})=>e.spacing.sp24};
  }
`,S0=m.div`
  margin-top: ${({theme:e})=>e.spacing.sp24};
  width: 100%;
`,v0=()=>{const{t:e}=k(),t=y(at.atom,n=>n.status,[]),o=y(si);return a.jsxs(zi,{children:[a.jsx(Xy,{}),t==="loaded"&&!o&&a.jsx(ri,{headerText:e("landingPageNew.connectToAmazon.header.text"),bodyText:e("landingPageNew.connectToAmazon.body.text")}),a.jsxs(b0,{children:[a.jsx(af,{}),a.jsx(Ni,{}),a.jsx(dS,{})]})]})},Ni=m.div`
  background: #d9e0e8;
  min-height: 412px;
`,b0=m.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1px 1fr;
  grid-column-gap: ${({theme:e})=>e.spacing.sp80};
  margin-top: 40px;

  ${L.desktopBefore} {
    grid-template-columns: 1fr;
    grid-row-gap: ${({theme:e})=>e.spacing.sp32};

    ${Ni} {
      min-height: 1px;
      height: 1px;
      width: 80%;
      margin: auto;
    }
  }
`,w0=Ss`
  body, div {
    ${vs};
  }
`,A0=({children:e})=>{const{searchId:t,mediaComparison:o}=ge();y(yt,()=>null,[]),y(ce,()=>null,[]),y(wo,()=>null,[]),y(Ce,()=>null,[]),of(),Dn(),ka(),b.useEffect(()=>{mn.action()},[]);const n=A(at.actions.pending);return b.useEffect(n,[n]),a.jsx(a.Fragment,{children:a.jsxs(gn,{theme:hn,children:[a.jsxs(As,{children:[a.jsx("title",{children:"Listing Analyzer"}),a.jsx("meta",{name:"description",content:"Listing Analyzer"})]}),a.jsx(xs,{}),a.jsx(w0,{}),a.jsx(ks,{}),a.jsxs(C0,{children:[a.jsx(da,{position:"bottom-right",autoClose:5e3,closeOnClick:!1,limit:3}),a.jsxs("div",{children:[a.jsx(Jg,{}),t?a.jsx(h0,{searchId:t,mediaComparison:o}):a.jsx(v0,{})]})]}),a.jsx(x0,{}),e]})})},x0=()=>a.jsxs(a.Fragment,{children:[a.jsx(Aa,{}),a.jsx(ih,{}),a.jsx(Gs,{}),a.jsx(Bg,{})]}),k0=b.memo(()=>{const e=bs("");return b.useLayoutEffect(()=>{zn.setState({rootPath:e.pathname})},[e.pathname]),null}),T0=b.memo(({children:e})=>{const t=ws(["listing-analyzer"]);return a.jsxs(a.Fragment,{children:[a.jsx(k0,{}),a.jsx(Fs,{status:t!==null?"loaded":"loading",children:t?a.jsx(sa,{children:a.jsx(Nn,{children:a.jsx(A0,{children:e})})}):a.jsx(ca,{})})]})}),C0=m.div`
  overflow: initial !important;
  background-color: white;
  min-height: 89vh;
`,z0=()=>{},N0=e=>a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 16 16",...e,children:a.jsx("path",{d:"M9.806 11.742a.387.387 0 0 1-.387.387H6.581a.387.387 0 0 1-.387-.387v-.774c0-.214.173-.387.387-.387h.387V8.516H6.58a.387.387 0 0 1-.387-.387v-.774c0-.214.173-.387.387-.387h2.064c.214 0 .387.173.387.387v3.226h.387c.214 0 .387.173.387.387v.774zM8 3.548a1.355 1.355 0 1 1 0 2.71 1.355 1.355 0 0 1 0-2.71zm0 10.904A6.448 6.448 0 0 1 1.548 8 6.45 6.45 0 0 1 8 1.548c3.564 0 6.452 2.887 6.452 6.452S11.567 14.452 8 14.452zM8 0a8.001 8.001 0 1 0 .002 16.002A8.001 8.001 0 0 0 8 0z",fill:"currentColor"})}),P0=({children:e,info:t,anchor:o,place:n="top",type:i="dark",maxWidth:s=250,...r})=>a.jsxs("div",{...r,children:[e,e&&a.jsx(a.Fragment,{children:"  "}),!!t&&a.jsx(bt,{placement:n,content:t,colorType:i,maxWidth:s,delay:50,children:a.jsx("div",{id:"anchor",children:o||a.jsx(I0,{})})})]}),Bt=m(P0)`
  display: flex;
  align-items: center;

  > div {
    display: flex;
  }

  #anchor {
    cursor: pointer;
  }
`,I0=m(N0)`
  cursor: pointer;
  color: ${be("darkGrey")};
  opacity: 0.5;
`,M0=m(Bt)`
  font-size: 18px;
  font-weight: bold;
  color: ${be("darkGrey")};
`,Po=m(Bt)`
  font-size: 24px;
  font-weight: bold;
  color: ${be("darkGrey")};
  justify-content: center;

  ${L.laptop} {
    justify-content: start;
  }
`,$0=()=>{const{t:e}=k();return a.jsx(Po,{children:e("listingAnalysis")})},L0=e=>{const{isOverflown:t,checkOverflown:o}=rn();return a.jsxs(j0,{children:[a.jsx("img",{src:e.imageUrl,alt:e.asin}),a.jsx(oi,{tooltip:t?void 0:a.jsx("div",{dangerouslySetInnerHTML:{__html:e.title}}),children:a.jsx(go,{dangerouslySetInnerHTML:{__html:e.title},onMouseEnter:o})})]})};m.div`
  width: 100%;

  > ${Po} {
    margin-bottom: 32px;
  }

  ${L.laptop} {
    max-width: 225px;
  }
`;const j0=m.div`
  display: flex;
  padding-top: 16px;
  align-items: center;
  border-top: solid 1px #dddddd;

  > img {
    object-fit: contain;
    width: 49px;
    height: 56px;
  }

  ${go} {
    ${Ts};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: auto 0 auto 16px;
  }
`,Pi=m.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  flex-direction: column;
  justify-content: space-between;
  border: solid 1px #dddddd;
  border-radius: 4px;
  background-color: #ffffff;
`,B0="https://re-cdn.helium10.com/container/static/lap1-r5wN_x4R.png",F0="https://re-cdn.helium10.com/container/static/lap2-5JNAPtsm.png",R0="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAABqCAYAAABeUaiAAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAA2OSURBVHic7Z3bi6RJVsB/EV98ea+sW1f1fXqZnl5ZZFFXcB9kQGTxwqrLPohP4uvCioj4ZwiyLwuyT/qmKKiIiLDug8qAIO4OiEPPzqUv091TXdesrMrbF3F8+C71VXVWVldXZVVNZPwgqbx8/XVG5IkTJ06cc0KJiBAInDP6sr9AwE9M/iTVW4JSiqDEpstBHyuUuuxvMx0KwVIqbWguVMrXFl86gohk/SuI+NnXBihGT66xAEaJJbE21WT5x4E3IxMkrTWV2KAUhzTWgaD5g8kb5ZygFFjr2Nrdo9PtM0wszkkQrLMigtYKE0U06hWW2k1q1TjtW/zUWEpSABAnPF/fZmevj1Yarf1r8GUiIjgnVOKIWysL1KsxLhvYvgmXLgx1BevbXTp7fUwUHRaqYMufibLdGkWaUWJ5sdHBOn8XSzqfCofDhM5+H6VSD8Shxvo1mC6csjbK+3swSujs9b3UVgA6HzGDYUKSWG+NyatCIUgi7PeHXmoryBykSimsk8yA93MEXSVEBERIrPW2rwvPe95YX0fQeVIsdkr9dfS5O/K6jFIKPLWtckoO0rSx+dToq1H5OpT7YNLnJooAIbGuuFZE0FoTaUVi3Yn38RUz7s1yg31u/DhEJHXbTWi3ZH6pzzc7KGBlcQ7rHAKYSLO716fT7XN9eQ6t9UzarGMFq7w8TlX8hX6nSyV3s0wShvQzzfbuPhvbXaxzXF9uo4DdvR4PH6+hUKwszaFEgmCV0Uqx0+3x6fN1RonzdrM0J9+zu7O6wOpS+8TrrXV86eYySWL55LN1tFbUqxUePloD4MG9VUykcc7NnFDBBI0VmYjPNzrs90bEcVRsP/iKUooksTx7ucPKUvv1bCyjeeetVT56+pJHzzdRSmEizdu3rzHXqBWrviBYJZxzLC006ez30g7y3EsqOBSKa4utbDv+eHJBcU6oxTGry3N0uj2cg2sLDRbaDYbD5NC1s8axxrt1wvJ8i1ajhniurQoUVOO0S04y3kVSQ317b59Hn21SrcREkWZts0utUuXGcjs16Gc0DGniqlBEqFViz3XVAcJpVoWa3b0BHz5eQxAe3LlOrVrh4aPP+eTZOkrBysIcMqMbrcfaWAfq3l3oF7oKnOTHgnT1+PTlFgBffut6qtlFeHB3lZ8+WePJiy0W5xoYE82kAT9RY81aZ5SZ1PY8fu3u9SWUgmatis0GYGwi3rm7Sn84Iopm04cFE4z3wPHkGq1VryKALWkkJ4IxEe2K8X4lPYlSMoUUj1kcYach76NcS5W3v/Ln1h5+fTR0pvzXR4qY99zfEoTqZMaZCpO2wca9FufQHve1zhMoTKQLm8DnkXRlUIrYGG/7WoukqrpWNVRMNPORDdOmGLhK0WpUvZ0higjS2BgW240iJsvXBl826YrS0apXaTWq3s4QppyoujDXILGO9e1uEK4p4ZzQatS4sZxudPvaz8o5EaUo8goVsNcfst3p0R+OipVP4Axknvo4NrSbNdqtGlqpLKLCT39hKa/wYOtVZY0WJKR+nSNlIfI9E1odlDEKtRsugsP962/thkKwQrWZi2MWqs2UNFYgcH6EwmuBqfBGm9BFuQd18DwwW5R/+3HT+Zmmwkk3DvjL0d89d5uUObXGOiqGSoF1kAjMcJTITKAAraASpa+Pzlxl4TqVYOX/2LmDmzzqwoc7sNmHoSMUafMUEYg0zMVwbw4etKFuUlmAVzXWqafCstfrxxvw/kYqxZEKU6LvSOYvHzq4UYd3b0LLUNpBOLj2VKvCrG4ISsHDnVSoKhqMLt00TIdekv/uWkE9grUevPcim6DGLOJOLVhKwd4onf60GnPToLW8pKyNnKQKZa2fmkJK8crvfjrBygRpZ5g+IpX+J2EKnC1yQXICz/YOpsgypxIsRXqTgU0fOthVM4tkXoD9hCIqpsypPe/51CeACvbUzJLLwXEupjfa0sklVIK2mmmOrgTLnGmvMMjVF4NDJSzd0RKWcsz7Z2MqCavlhIywl3gx5EGE44IGD/IaFCaCwYiikLETIY4UFZO+n9eePytTEaw8AlUrRaUSNNtUUSAOBkn2coxQWCe0aoof/qTH/3w84A9+tc1CU9MbOVpVzQdPR/zde7v83rtz3L8R0x/KmU8lmarGGlrh48+TdBRM4z8KIEA1VtxeNlkNszEaJ5s5Ig3vfbDPzr7lj35rkZtLmp98MuLP/2ETIf08nx7Pqg6mJlgmUvz1v3f5x//qZkuHIFpTQYS4qvn9X5njN3+xSX/4qmBprdgbCO/+bJ3BCP7iX7b4/j9v842fa/CXP+pgHfzptxf50qqhNzi7toIpFgVRCv77oz5aQbWmw07PlNAo9vvCjz8e8K2vN9kfvLoiU0qhgf5Q+MbP19Ea/upHHf73yRar8xF//DtL/MytmN7QofX5lFmYmo3lHPzuL8/xt/+5yzCR4EidEtbBreWI3/6lFr0hY+tBFIEDWZz97WWD0cK+hWZNc2PRkNj0mvNK7DhVdIOT1Nv+SQf+7Rk0DRyXdZiWUsxc/UFdTRWl0i62drxfKT8po1HVfPBkxJ/9/SaNquJrb9f44fv73FuJ+ZNvLTLfVAwSQb9mcZihhVtN+LU7B7KRM1XjPbFBoi6S49wNaRFexf89SQ11gO/8xgJfu1/h5pLhB/+6zff+aYs//OYCC01NYs/ucpjaVFj+G7g4xvW5oKjEig+eDqgYzXe/ucBX7sZs7Dp+/RcaaK34m//osLZtWZmPGCXn8D2mNRUGrg6pFoPEpjZZo6oYlezeSCv2Bo6qUWh9cJjCSVz4VBi4WuQO69hABYqpLk/vTx2oGuvGJ0a8CWcSrGBBfTEoHyifU64ZISKFPfw6FaNfhzcTrDw7Q0KEwxeB42zek94/iXEBfjlvFt2QFaYJQjW7FAkUx3x+utDk7IZGZz4qCZnQs0ouVNVovOY6XWhyJqVzlTS/zEpIs59FcoWiFazUziE0WWUB9PMxvNVMs581R1YRQci8pKw8tEqVSiuGt9vZtHjkdz+18Z5n+nx1GbZH8HgX4jy3ML8g4B/ZtpGTNGG1HsHXV6EWHc6MLy5/k6IgzqVSO3Dw/iY86UJ3BKPgLfUWIU33q0ewUoevLsFq/UCoziRY4wqCAGwP0yTWJAiW12iVGuvLtVJOKeOLgpy5jJFw2JUfmA3KWzjnUsYovxFkN5PJjrKAf+TljKZWeC0QOI7SsXIQqiZfDLNQNbkQrPLRJ+lrT1t86ZTPKvK3zrvJNRVHUocGw4TE2lTQQpLNmRABpRWR1tQq5hWN5ePJFMUhTflZOtZa1nf26O4NGCUJLgjWmRFJU7CMjqjXYpbnm9RrlSKMxTehAtJDmvI1nXOOZ2vb7PYGaK29PgH0MshrJBijub2ySKMeF6nuvgmXLjsK1re6dHsDTBQdFqpgy5+Jst0aRRprHS82dopITh8XSzqf3wfDEbu9AUql+9KHGuvXYLpwjh40rpRimFg63Z6X2gpKJ6wOR5ZRYr01Jq8KhSCJ0BsMvdRWkIXNKKWwThBP5/urhmQBTYl13vZ1EY+VN9bXEXSelAuUHffcyfGFzFQWDuBzX5ccpGljfR1B50luPpgoHZdlzSOSHtMbaUVi3USzwue+DsfKvQGp8Ciere/wfH0HrXXhSogiTae7z6fPNrDOebvqO4mx0Q2HSj1e9De6ZNL4osm5delnmr39AS+3dnFOuLkyn9bA393nwydrGK25eW2+mCJ91k7jGCtYSqnsKAtFHGmKfC+vSdtorcNx8jRlrePerWUSa/n02QZKQ6NW4eHjNUykefDWdaJI45y/BvokjtdYpLUrX27tkiTH1MfxCRGUViy2m1Rjc6JtJCJEWnH/7gpab/DkxRZKKSpxxP07qzTqFWxmewXByhARjIl4urbJ07Wti/5Ol4YIdLp9vnzv+msZ3c4JFROztNBkq7OHtcK1xSbtZpXhyB66dtaYGEE6SiyIoKPZsPGdk7TNJ5CXGTeRZmt3j0+fblCrxsQmYm2jS9XE3FpZwDo3s2FIx9pY1jpury6gNQxH1vuOyd0E15fbwGRByK/d7vb56eM1tFa8c3eFWiXm4eM1Hj3fQClYXZrncPzV7DDReK/Ehvt3Vi/4K10u1rnsRLPJgqC14vn6NpHWPLh3nUa1giC8c2eVj56+5LO1HZbnWxgTBXdDTtndMHyNqcEnXsfdkJcEundzGYWiVo1x2Rm2JtLcv7PCYJQQRXomtRVM0Fj539nrkpRJwpALXr1aAeSQS8FJ6iRtmWoaJDmjlJIpZGadeafloJBZqqXK3vX8uT3y+mjoTPmvjxjIOkqr9BGE6kTGFSw77vlxr8U5ryN0dZ5AEWtNlO15+TySrgKSpQ5XMkesj2iRVFVXq4ZKbHDib7jsVaDoV6VoNWrezhBFBGlsDEvtRnbuc7CzpkVum7UbNZr1qrczhCknqs636ljreLndndnN02kigDhhrlnPHLH+LpaUcyJKUeQVKqXY7w/Z2e3RG4yKlU/gzREErTSV2NBu1Zhr1A6V/vFSsCTllSVz4BwZU+enrKl81FqlajOHazdAELBpcHjw+lu7oRCsUG3m4piFajOhPlZgKsxGoFXgwgmCFZgKQbACUyEIVmAq/D8oJ2Qe61Lx8QAAAABJRU5ErkJggg==",D0={fail:a.jsx(Z,{icon:Cs}),pass:a.jsx(Z,{icon:zs}),lock:a.jsx(Z,{icon:Ns})},E0={fail:"#f64f45",pass:"#33cc99",lock:"#485e75"},V0={fail:"rgba(246, 79, 69, 0.1)",pass:"rgba(51, 204, 153, 0.1)",lock:"#d9e0e8"},Ii=({className:e,...t})=>a.jsxs("div",{className:e,...t,children:[a.jsx("div",{children:t.value}),!!t.iconType&&D0[t.iconType]]}),Io=m(Ii)`
  align-self: center;
  font-size: 14px;
  line-height: 14px;
  font-weight: bold;
  padding: ${({iconType:e,value:t})=>e!=="lock"&&t===void 0?"8px 6.5px":e==="lock"?"4.5px 6px 5.5px 6px":"5px 8.5px"};
  border-radius: 12px;
  color: ${({iconType:e,value:t})=>t===0?"rgba(52, 58, 64, 0.5)":E0[e]};
  background-color: ${({iconType:e,value:t})=>t===0?"rgba(52, 58, 64, 0.1)":V0[e]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: ${({value:e})=>e===void 0?"26px":void 0};
  height: ${({value:e})=>e===void 0?"26px":void 0};

  svg {
    margin-left: ${({value:e})=>e===void 0?"0":"3.6px"};
  }
`,O0={fail:"#485e75",pass:"#33CC99",lock:"#485e75"};m(Ii)`
  ${co};
  color: ${({theme:e})=>e.systemColors.black};
  align-self: center;

  padding: ${({iconType:e,value:t})=>e!=="lock"&&t===void 0?"8px 6.5px":e==="lock"?"4.5px 6px 5.5px 6px":"5px 8.5px"};
  border-radius: 12px;

  & > :last-child {
    color: ${({iconType:e,value:t})=>t===0?"rgba(52, 58, 64, 0.5)":O0[e]};
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: ${({value:e})=>e===void 0?"26px":void 0};
  height: ${({value:e})=>e===void 0?"26px":void 0};

  svg {
    margin-left: ${({value:e,theme:t})=>e===void 0?"0":t.spacing.sp4};
    font-size: 22px;
  }

  & > :first-child {
    position: relative;
    top: 1px;
  }
`;const U0=async()=>K({url:j+"/user/check-login",method:"GET",withCredentials:!0}),K0=async()=>K({url:j+"/api/v1/listing-analyzer/demo-balance",method:"GET"}),q0=async e=>K({url:j+"/api/v1/listing-analyzer/listing-demo-search",method:"POST",params:e}),Mo=I("setPreviewAsins"),xe=H("listingDemoSearch",(e,{getState:t})=>{const o=t(Un),n=t(Mi)[0]||"";return q0({asinOrUrl:n,marketplace:o})},{initialStatus:"init",fulfilledReaction:(e,{dispatch:t})=>{t($i.actions.pending())},reducers:e=>{e(Mo,t=>t.status!=="error"?t:{...t,error:"",status:"init"})}}),Mi=_("previewAsinsAtom",[],e=>{e(Mo,(t,o)=>o)}),G0=x(xe.atom,e=>e.content?xt(e.content.metricData,"metricCategory"):null),$o=x("wasRequestSelector",xe.atom,e=>e.content!=null||e.status==="loading"&&e.content==null),Lo=I("unlockReport",(e,{getState:t})=>{var n;const o=t(Ft);(n=window.open(o,"_blank"))==null||n.focus()});x("errorSelector",xe.atom,e=>{var t;return e.status==="error"&&((t=e.fetchError)==null?void 0:t.responseStatus)!==429&&e.error||null});const no=H("checkLogin",e=>U0()),_0=x(no.atom,e=>{var t;return e.status!=="error"&&((t=e.content)!=null&&t.accountId)?e.content.accountId:!1}),Ft=x(D([_0,Un,xe.atom,Mi]),([e,t,o,n])=>{var l;const i=((l=o.content)==null?void 0:l.asin)||n,s=Ke.stringifyUrl({url:"/listing-analyzer",query:{marketplace:t,asins:i}},{encode:!1}),r=e?{marketplace:t,asins:i,accountId:e,type:"listing-analyzer"}:{re:btoa(s),type:"listing-analyzer"};return Ke.stringifyUrl({url:e?"https://members.helium10.com/listing-analyzer":"https://members.helium10.com/user/signup",query:r},{encode:!1})}),$i=H("demoBalance",e=>K0());x("requestLimitReachedSelector",D([xe.atom,$i.atom]),([e,t])=>{var o,n;return e.status==="error"&&((o=e.fetchError)==null?void 0:o.responseStatus)===429||((n=t.content)==null?void 0:n.balance)===0});const H0=()=>{const{t:e}=k(),t=y(Ft);return a.jsxs(Y0,{href:t,target:"_blank",children:[a.jsx(Io,{iconType:"lock"}),e("unlock.unlockFullReport")]})},W0=()=>{const{t:e}=k(),t=A(()=>Lo());return a.jsx(B,{onClick:t,size:"400",children:e("unlock.unlockYourReport")})},Q0=()=>{const e=y(Ft),{t}=k();return a.jsx("a",{href:e,target:"_blank",children:t("progressBar.signup")})},Y0=m.a`
  display: flex;
  align-items: center;
  margin-top: 24px;
  font-size: 18px;
  font-weight: bold;
  color: #0081ff;
  text-decoration: none;

  ${Io} {
    background-color: #d2edff;
    color: #0081ff;
    margin-right: 8px;
  }
`,qt=({imgSrc:e,title:t,description:o})=>a.jsxs(ob,{children:[a.jsx(J0,{children:a.jsx(tb,{src:e,alt:"Preview 1"})}),a.jsxs(X0,{children:[a.jsx("h3",{children:t}),a.jsx("p",{children:o}),a.jsx(H0,{})]})]}),Z0=()=>{const{t:e}=k();return a.jsxs(eb,{children:[a.jsx(qt,{imgSrc:B0,title:e("cards.1.title"),description:e("cards.1.description")}),a.jsx(qt,{imgSrc:F0,title:e("cards.2.title"),description:e("cards.2.description")}),a.jsx(qt,{imgSrc:R0,title:e("cards.3.title"),description:e("cards.3.description")})]})},J0=m.div``,X0=m.div``,eb=m.div`
  display: flex;
  flex-direction: column;

  gap: 30px;

  ${L.desktop} {
    flex-direction: row;
  }
`,tb=m.img`
  height: 80px;
  object-fit: contain;

  ${L.desktop} {
    height: 60px;
  }
`,ob=m.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  padding: 48px 16px;
  border-radius: 6px;
  ${Fo};
  background-color: #fff;
  flex-direction: column;

  ${L.mobile} {
    flex-direction: row;
    gap: 30px;
    align-items: center;
    padding: 24px 30px;
  }

  ${L.desktop} {
    padding: 42px 40px;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: flex-start;
    border-radius: 6px;
    ${Fo};
    background-color: #fff;
  }

  > h3 {
    margin-top: 32px;
    line-height: 1.5;
    font-size: 24px;
    font-weight: 800;
    color: #13191f;
  }

  > p {
    margin-top: 16px;
    font-size: 18px;
    line-height: 1.44;
    color: #13191f;
  }
`,nb=()=>{const e=y(G0),t=y($o);return e?a.jsx(tn,{children:a.jsx(Li,{children:Object.entries(e).map(([o,n])=>a.jsx(ab,{category:o,categoryData:n},o))})}):t?a.jsx(tn,{}):null},jo=m.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 32px !important;

  ${L.laptop} {
    padding-left: 40px !important;
  }
`,Li=m.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (min-width: ${Xe.lg}px) {
    flex-wrap: wrap;
    max-height: 464px;
    ${jo} {
      width: 50%;
    }
  }
`,ib=m.div`
  position: relative;
`,tn=m.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 380px;

  > ${ib} {
    align-self: flex-end;
    margin-bottom: -10px;
    @media (max-width: ${Xe.md}px) {
      margin: 20px 0 -10px 10px;
    }
  }

  ${Li} {
    @media (min-width: ${Xe.lg}px) {
      max-height: 568px;
    }
    margin-top: 0;
  }

  ${jo} {
    padding: 0 0 24px 32px;
  }
`,sb={copy:[247,192,291],media:[66,89],review:[80,145]},ab=({category:e,categoryData:t})=>{var i;const o=y(xe.atom,s=>{var r;return(r=s.content)==null?void 0:r.asin},[]),n=pa(e);return a.jsxs(jo,{children:[a.jsxs(db,{children:[n,a.jsxs("span",{children:[" (",o,")"]})]}),a.jsxs(lb,{children:[t.map(s=>s?a.jsx(rb,{data:s},s.metric):null),(i=sb[e])==null?void 0:i.map((s,r)=>a.jsx(ji,{value:s},e+r))]})]})},rb=b.memo(({data:e})=>{const t=ua({key:(e==null?void 0:e.metric)||"",data:e});return a.jsx(ji,{metricTitle:t==null?void 0:t.metricTitle,metricTooltip:t==null?void 0:t.metricTooltip,passed:t==null?void 0:t.passed})}),ji=({metricTitle:e,metricTooltip:t,passed:o,value:n})=>a.jsxs("li",{children:[a.jsxs(Bt,{info:t,anchor:t?void 0:a.jsx(b.Fragment,{}),children:[n?"":e,n&&a.jsx(cb,{value:n})]}),a.jsx(Io,{iconType:n?"lock":o?"pass":"fail"})]}),lb=m.ul`
  display: flex;
  flex-direction: column;
  padding: 0;

  > li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
    font-size: 14px;

    > div:first-child {
      color: ${be("darkGrey")};
    }

    > div {
      display: flex;
      flex-direction: row;
    }

    > ${Bt} {
      svg {
        color: ${be("grey")};
      }

      margin-right: 11px;
    }
  }

  li + li {
    border-top: solid 1px #d9e0e8;
  }

  margin: 0;
`,cb=m.div`
  width: ${({value:e})=>e*.8}px;
  height: 10px;
  border-radius: 5px;
  background-color: #d9e0e8;
`,db=m(zt)`
  font-size: 18px;
  color: ${be("darkGrey")};
  margin-bottom: 16px;

  span {
    color: #6a6c6f;
    font-weight: normal;
  }
`,ub=b.memo(({value:e,className:t})=>{const o=M(e,1),n=te({value:o,minimumFractionDigits:1}),i=Wg(o);return a.jsx(oa,{data:[{value:o,title:n,key:1,color:i}],reveal:o*10,lineWidth:16,animate:!0,rounded:!0,startAngle:165,lengthAngle:210,label:({dataEntry:s})=>s.title,labelStyle:{fontSize:36,fill:i,fontWeight:500},labelPosition:15,viewBoxSize:[100,70],background:"#f1f3f6",className:t})}),pb=m(ub)`
  width: 196px;
  height: 128px;

  > path:first-of-type {
    stroke-width: 4;
  }
`,mb=({info:e,value:t,description:o})=>{const{t:n}=k();return a.jsxs(a.Fragment,{children:[a.jsx(gb,{children:a.jsx(M0,{info:e,children:n("listingScore")})}),a.jsx(pb,{value:t}),a.jsx(Mn,{children:o})]})},gb=m.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
`,hb=({mediaMobile:e})=>{const{t}=k(),o=A(()=>Lo());return a.jsxs(Bi,{mediaMobile:e,children:[a.jsx("h3",{children:t("signUpFooter.fullAccess")}),a.jsx("span",{children:t("signUpFooter.simplySignUp")}),a.jsx(B,{onClick:o,size:"200",children:t("signUpFooter.signUpForFree")})]})},Bi=m.div`
  display: ${({mediaMobile:e})=>e?"flex":"none"};
  justify-content: center;
  align-items: ${({mediaMobile:e})=>e?"center":"baseline"};
  ${({mediaMobile:e})=>e?"text-align: center":""};
  flex-direction: column;
  border-radius: 8px;
  box-shadow:
    0 1px 4px rgba(103, 132, 162, 0.16),
    0 4px 16px -2px rgba(103, 132, 162, 0.32);
  padding: 32px 15px;
  margin: 30px 0;
  gap: 15px;
  background-color: #d2edff;
  color: #343a40;

  > span {
    ${Ps};
  }

  > h3 {
    ${wt};
    color: #343a40;
    margin-right: 8px;
  }

  ${L.laptop} {
    display: ${({mediaMobile:e})=>e?"none":"flex"};
  }

  ${L.desktop} {
    display: none;
  }
`,yb=()=>{const e=A(()=>Lo()),{t}=k();return a.jsxs(Fi,{children:[a.jsx("h3",{children:t("signUpFooter.fullAccess")}),a.jsx("span",{children:t("signUpFooter.whenYouSignUp")}),a.jsx(B,{onClick:e,size:"200",children:t("signUpFooter.signUpForFree")})]})},Fi=m.div`
  display: none;

  ${L.desktop} {
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-direction: row;
    padding: 14px;
    background-color: #d2edff;
    color: #343a40;

    > * {
      font-size: 16px;
      line-height: 24px;
    }

    > h3 {
      font-weight: 700;
      margin-right: 8px;
    }

    > ${B} {
      margin-left: 16px;
    }
  }
`,Ri=Object.assign(yb,{Container:Fi}),Di=Object.assign(hb,{ContainerMobile:Bi}),fb={bad:"descriptionSingleMap.bad",good:"descriptionSingleMap.good",excellent:"descriptionSingleMap.excellent"},Sb=()=>{const{t:e}=k(),t=y(xe.atom,o=>o.content,[]);return t?a.jsxs(Pi,{children:[a.jsx(mb,{info:e("singleIfo"),value:t.totalScore,description:e(fb[In(t.totalScore)])}),a.jsx(L0,{imageUrl:t.imageUrl,asin:t.asin,title:t.title})]}):null},vb=()=>{const e=y($o);return a.jsxs(bb,{children:[a.jsx(Sb,{}),e&&a.jsx(Di,{})]})},bb=m.div`
  width: 100%;

  > ${Po} {
    margin-bottom: 32px;
  }

  ${L.laptop} {
    max-width: 270px;
  }

  > div {
    gap: 24px;
    padding: 24px 32px;
  }
`,wb=()=>{const e=y(xe.atom,o=>o.status==="loading",[]),{t}=k();return a.jsxs(xb,{children:[e&&a.jsxs(Ab,{children:[a.jsxs("h4",{children:[t("progressBar.looking")," ",a.jsx(Q0,{})," ",t("progressBar.foryou")]}),a.jsx(kb,{})]}),a.jsx(vb,{}),a.jsx(nb,{})]})},Ab=m.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: white;
  opacity: 0.95;

  > h4 {
    font-size: 24px;
    color: #13191f;
    margin-bottom: 16px;
    margin-top: 100px;

    > a {
      color: #0081ff;
      text-decoration: none;
    }
  }
`,xb=m.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  flex: 1;
  align-self: stretch;
  border-radius: 4px;
  position: relative;
  flex-direction: column;
  margin-top: 40px !important;

  ${L.laptop} {
    flex-direction: row;
  }
`,kb=m.div`
  width: 80%;
  margin: 0 auto;
  border-radius: 7.5px;
  height: 15px;
  position: relative;
  background-color: #d9e0e8;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;

    background: #0a6fe8;
    animation: borealisBar 40s cubic-bezier(0, 0.5, 0, 1.04);
    border-bottom-left-radius: 7.5px;
    border-top-left-radius: 7.5px;

    @keyframes borealisBar {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }
  }
`,Tb=({marketplace:e,asins:t})=>{const{t:o}=k();Dn();const n=A(Mo),i=A(G.selectMarketplace),s=A(()=>xe.actions.pending()),r=A(no.actions.pending),l=y($o);return y(no.atom,()=>null,[]),y(Ft),b.useEffect(()=>{r()},[]),b.useEffect(()=>{t&&e&&(n(t),i(e),s())},[t,s,e,i,n]),a.jsxs(zb,{children:[a.jsxs(Ei,{children:[a.jsxs(Cb,{children:[l&&a.jsx($0,{}),a.jsx(wb,{})]}),l&&a.jsx(Ri,{}),l&&a.jsx(Di,{mediaMobile:!0})]}),l&&a.jsxs(a.Fragment,{children:[a.jsx(Z0,{}),a.jsx(Nb,{children:o("laPreviewMain.discoverProduct")}),a.jsx(W0,{})]})]})},Cb=m.div`
  display: flex;
  flex-direction: column;
  padding: 48px 15px 56px 18px;

  ${L.mobile} {
    padding: 60px 40px 56px 40px;
  }

  > * + * {
    margin-top: 20px;
  }

  ${Pi} {
    margin-bottom: 30px;

    ${L.laptop} {
      margin-bottom: 0;
    }
  }

  ${Qg} {
    font-size: 32px;
    font-weight: 800;
    line-height: 1.25;
    color: #13191f;
  }
`,Ei=m.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 2px 6px 0 rgba(19, 25, 31, 0.16);
  background-color: #fff;

  ${Ri.Container} {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`,zb=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Ei} {
    margin-bottom: 40px;
  }

  > ${B} {
    font-size: 18px;
  }
`,Nb=m(zt)`
  ${wt};
  padding: 0 20px;
  margin: 56px 0 34px 0;
  text-align: center;

  ${L.mobile} {
    ${lo};
    margin: 56px 0 34px 0;
  }
`,Pb=({data:e,forceLang:t})=>a.jsx(Nn,{forceLang:t,children:a.jsx(gn,{theme:hn,children:a.jsx(Ib,{children:a.jsx(Tb,{...e})})})}),Ib=m.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #f2f5f7;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  &&& {
    svg {
      box-sizing: content-box;
    }
  }

  button,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  span,
  p,
  div {
    font-family:
      "Nunito Sans",
      -apple-system,
      "Neuton",
      sans-serif;
  }

  p {
    margin: 0;
  }
`,lw=Object.freeze(Object.defineProperty({__proto__:null,AppendListingAnalyzer:z0,ListingAnalyzer:T0,ListingAnalyzerPreview:Pb},Symbol.toStringTag,{value:"Module"}));export{rw as a,Ge as b,kv as c,lw as i,se as l,Pe as m,Kv as s,k as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/Graph-5Alqnj1T.js","static/index-tEWTe_cM.js","static/server.browser-DFoAq_e7.js","static/Learn-ZI4QJ8Ms.js","static/useAutoPlay-8WOcIzK4.js","static/AddToMyListDropdown-lgmjWp6o.js","static/NewRadio-DIL_Ez7J.js","static/middleware-6VZ1FcKb.js","static/use-latest.esm-33sMI_t6.js","static/use-onclickoutside.browser.esm-BisD5Fdu.js","static/MarketplaceSingleSelect-J9Q4NESj.js","static/ChartExport-1KlP8bAy.js","static/LineGraphSkeleton-_OzzpDE4.js","static/SearchGraphModal-8Lh4F5Sv.js","static/OptimalData-cuY_CBe9.js","static/getUpsellData-siUtjfVt.js","static/ExtendedProductSummary-Rm3yeme_.js","static/redirectToSubscribe-S6QlkQEz.js","static/_basePickBy-23CB03ho.js","static/groupBy-7ZtSo7lr.js","static/leitenList-Fa6N92eM.js","static/index-LVl8fC0e.js","static/TitleWithTooltip-wulykel9.js","static/zustandPrimitive-JpIny_aS.js","static/ChoiceBadge-QiiTIx6Y.js","static/LockedTitle-zD5OrXLs.js","static/StorageFeeCell-r2gKXA5Z.js","static/AboveTable-n7zPUc2F.js","static/dateRanges-ZXIy3dZA.js","static/WidthLimitedTagsValue-Gph_9FLc.js","static/react-alice-carousel-QMWN8gi9.js","static/hooks-dSElEgEV.js","static/getListingAnalyzerKeywordsSection-CrrIvoLZ.js","static/CustomerEventsComponent-e67uxoGM.js","static/index-7v7JHEmS.js","static/CategoricalChip-xPMVgK7q.js","static/Collapse--SIf9dr3.js","static/ProductChip-Hw6al7Eb.js","static/configuration-lN8dg8r2.js","static/ProductMultiSelect-fq0DxkcP.js","static/TagsMultiSelect-ZI09vsgf.js","static/TrafficAndConversion-PykU-_2y.js","static/index-Ca0BkoYE.js","static/index-ECFt0NIj.js","static/AirTable-Gyhy-mr-.js","static/IDASHUpsellModal-9iMRBwwd.js","static/useTrackCompetitorsOnClick-DO7Nu69z.js","static/index-rN0wyM8x.js","static/GaugeDiagram-1wpkGvHA.js","static/Sparkline-z4suwkUd.js","static/ModalGraph-hPaCunFZ.js","static/SubAccountDoNotHaveAccess-W5XV8oJ4.js","static/ToastContainer-G5qnX7eh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=index-zpLdyEo_.js.map
