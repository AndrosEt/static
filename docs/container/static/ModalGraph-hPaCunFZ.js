import {
    a6 as ge,
    A as H,
    P as se,
    as as de,
    aC as be,
    _ as ve,
    j as s,
    i as ye,
    r as A,
    ah as Se,
    ap as R,
    ch as ae,
    a9 as re,
    f as N,
    g as x,
    dd as B,
    bO as fe,
    aM as Ae,
    u as b,
    $ as we,
    N as ue,
    M as ke
} from "./index-tEWTe_cM.js";
import {L as Te} from "./useAutoPlay-8WOcIzK4.js";

const ni = (e, a) => {
        var t;
        return `https://${(t = de("AM", "TLDomain", e)) == null ? void 0 : t.domain}/dp/${a}`
    }, li = (e, a, t) => {
        var r;
        return e === "AM" ? `https://${(a ? (r = de(e, "store", a)) == null ? void 0 : r.domain : "amazon.com") || "amazon.com"}/dp/${t}` : `https://www.walmart.com/ip/name/${t}`
    }, si = (e, a) => {
        const t = be("domain", e);
        return t.platform === "AMAZON" ? `https://www.${t.domain}/s?k=${a.split(" ").join("+")}` : `https://www.${t.domain}/search?query=${a.split(" ").join("+")}`
    }, D = se, di = ge("https://research-tools.helium10.com"), ze = D + "/api/v1/product/review-chart",
    _e = D + "/api/v1/product/bsr-chart", Ce = D + "/api/v1/product/sales-chart", ui = "/cerebro", ci = "/magnet",
    E = "/black-box", mi = "/elite-analytics", pi = `${E}/products`, hi = `${E}/phrases`, Pe = "aba", gi = `${E}/${Pe}`,
    Re = H(() => ({rootPath: ""})), bi = () => Re.getState().rootPath, Be = {
        close: "Schließen",
        cancel: "Abbrechen",
        clear: "Löschen",
        serverError: "Serverfehler",
        na: "Nicht verfügbar",
        delete: "Löschen",
        edit: "Bearbeiten",
        save: "Speichern",
        valueOfTotal: "{value} von {total}",
        filters: "Filter",
        week: "Week",
        noData: "Keine Daten"
    }, He = "Verlauf", Ne = "Daten werden abgerufen", xe = {
        notSure: {
            cerebro: "Du weißt nicht, wie du mit Cerebro anfangen sollst?",
            magnet: "Du weißt nicht, wie du mit Magnet anfangen sollst?"
        }
    }, Ie = {scrapedDate: {lessThan7Days: "< 7 Tage", between7And30Days: "7 - 30 Tage", moreThan30Days: "> 30 Tage"}},
    Me = {
        title: "Cerebro",
        description: "Gib bis zu {maxAsins} Produktbezeichnungen ein, um die am besten funktionierenden Keywords zu finden.",
        learn: "Lernen",
        learnTooltip: "Schauen Sie sich Videos an und lesen Sie Artikel, die Ihnen helfen, Cerebro zu meistern",
        history: {
            title: "Verlauf",
            titleTable: {one: "{count} vorherige Suche", other: "{count} vorherige Suchen"},
            titleTableSelected: {
                one: "{count} vorherige Suche ausgewählt",
                other: "{count} vorherige Suchen ausgewählt"
            },
            descriptionTable: "Wählen Sie eine frühere Cerebro-Suche aus und laden Sie sie erneut, ohne eine der Ihnen zugeteilten Suchen zu verwenden.",
            tooltip: "Zeige deine früheren Suchen an und lade die Ergebnisse erneut"
        },
        inputPlaceholder: "Geben Sie bis zu {maxAsins} Produkt-ASINs ein",
        upgradeForMultiSearch: "Upgrade für mehrfache Produktsuche",
        getKeywords: "Keywords erhalten",
        excludeVariations: "Varianten ausschließen",
        excludeVariationsTooltipAmazon: "Nur Keywords einbeziehen, die mit der exakt eingegebenen ASIN verknüpft sind",
        excludeVariationsTooltipWalmart: "Nur Keywords einbeziehen, die mit der exakt eingegebenen Produkt-ID verknüpft sind",
        landing: {
            title: "Suchen Sie bestimmte Produkte bei {market} und finden Sie die bestplatzierten Keywords",
            description: "Nutzen Sie die Keyword-Ranking-Strategie Ihrer Konkurrenten, um Ihr eigenes Ranking zu verbessern. Sie können Cerebro auch nutzen, um die effektivsten Keywords für Ihr Produkt auf {market} zu ermitteln, Ihr Product Listing zu optimieren, um die Verkäufe zu steigern und wettbewerbsfähige Preise für Ihre Produkte zu erhalten. Cerebro ist der Schlüssel zur erfolgreichen Einführung neuer Produkte und zur Steigerung der Bekanntheit Ihrer Marke.",
            videoTitle: "Nicht sicher, wo Sie anfangen sollen? Sehen Sie sich hier ein 3-minütiges Video an.",
            videoButton: "Video ansehen",
            bulkReport: "Massenbericht",
            whereWalmartIDs: "Wo finde ich Walmart-Produkt-IDs?",
            whereWalmartIDsTitle: "Wo finde ich Walmart-Produkt-IDs?",
            whereWalmartIDsText: `<p>Sie finden die Produkt-ID von Walmart in der URL der entsprechenden Produktseite auf walmart.com.</p>
      <p>In der folgenden URL lautet die Produkt-ID von Walmart zum Beispiel <b>134258560</b>.</p>
      <p>https://www.walmart.com/ip/Petstages-Latex-Free-Chew-Dog-Squeaky-Toy-Assorted-Large/<b>134258560</b>?wpa_bd=&wpa_pg_seller_id=...wpa_bucket=__bkt__</p>`
        },
        getCompetitors: {
            button: "Wettbewerber abrufen",
            description: "Suchen Sie nach konkurrierenden Produkten und fügen Sie diese zu Ihrer Suche hinzu, um sie zu vergleichen. Die Daten dieser Produkte werden in zusätzlichen Tabellenspalten mit der Bezeichnung „Konkurrent“ angezeigt.",
            count: "Bis zu {canMoreSelect} weitere Produkte hinzufügen",
            addCompetitors: "Konkurrenten hinzufügen",
            addWords: "Wörter hinzufügen",
            deleteAll: "Alle löschen",
            tooltip: "Wähle für eine mehrfache Produktanalyse aus einer Reihe von Mitbewerbern aus"
        },
        commonWords: {
            button: "Gängige Wörter",
            tableTitle: {one: "{count} gängig Wort", other: "{count} gängige Wörter"},
            titleTableSelected: {one: "{count} gängig Wort ausgewählt", other: "{count} gängige Wörter ausgewählt"},
            word: "Wort",
            tableDescription: "Identifiziere gängige Wörter, die du von den Suchergebnissen ausschließen möchtest. Alle Wörter in der folgenden Tabelle werden nie in deinen Suchergebnissen von {project} erscheinen.",
            addDescription: "Geben Sie Wörter ein (1 pro Zeile), die Sie aus den Suchergebnissen herausnehmen möchten.",
            removeSpecialCharacters: "Sonderzeichen entfernen",
            removeSpecialCharactersTooltip: "Entfernt .,?!&*%$@#, etc.",
            addCommonWords: "Zu häufigen Wörtern hinzufügen",
            deleteAllQuestion: "Sind Sie sicher, dass Sie alle gängigen Wörter löschen möchten?",
            deleteAllConfirm: "Ja, alle löschen",
            tooltip: "Füge häufige Wörter hinzu, um Wörter auszuschließen, die nicht einmalig in deiner Suche vorkommen"
        },
        deletedWords: {
            button: "Gelöschte Wörter anzeigen ({number})",
            title: "Gelöschte Wörter",
            text: "Dies sind die Wörter, die Sie manuell aus Ihren Suchergebnissen gelöscht haben.",
            return: "Zurück zu den Ergebnissen",
            returnToResults: "Zurück zu den Ergebnissen",
            columnKeyword: "Keyword",
            tableTitle: {one: "{count} gelöschtes Keyword", other: "{count} gelöschte Keywords"},
            tableTitleSelected: {
                one: "{count} gelöschtes Keyword ausgewählt",
                other: "{count} gelöschte Keywords ausgewählt"
            }
        },
        filter: {
            title: "Filter",
            showMore: "Zeige mehr",
            showLess: "Zeige weniger",
            clear: "Löschen",
            applyFilters: "Filter anwenden",
            wordCount: "Anzahl Wörter",
            wordCountTooltip: "Anzahl an Keywords in der Suchanfrage",
            searchVolume: "Suchvolumen",
            searchVolumeTooltip: "Geschätzte Anzahl der monatlichen Suchanfragen für diese Keywordphrase.",
            organicRank: "Organischer Rang",
            organicRankTooltip: "Organische Suchposition, die für diese(s) Keyword(s) für das analysierte Produkt ermittelt wurde",
            matchType: "Übereinstimmungstyp",
            matchTypeTooltip: "Quelle, aus der ein Keyword bezogen wird",
            showPhrasesContain: "In Keywordphrasen enthalten",
            showPhrasesContainPlaceholder: "Beispiel: rotes Kleid",
            showPhrasesContainTooltip: "Keywordphrasen anzeigen, die eingegebene Keywords enthalten (durch Kommas trennen)",
            cerebroIQScore: "Cerebro IQ-Wert",
            cerebroIQScoreTooltip: "Der Score basiert auf der Grundlage des Verhältnisses zwischen dem geschätzten Suchvolumen und der Anzahl der konkurrierenden Produkte: Ein hoher Score bedeutet eine relativ hohe Anzahl von Suchanfragen im Vergleich zur Anzahl der Konkurrenzprodukte; ein niedriger Score bedeutet das Gegenteil",
            titleDensity: "Häufigkeit des Titels",
            titleDensityTooltip: "Anzahl der Produkte auf Seite 1, die das gesuchte Keyword in ihrem Titel enthalten",
            competingProducts: "Konkurrierende Produkte",
            competingProductsTooltip: "Gesamtzahl der Produkte, die bei einer Kundensuche mit diesem Keyword/dieser Keywordphrase gefunden wurden",
            amazonChoice: "Amazon Choice",
            amazonChoiceTooltip: "Filter der Keywordergebnisse basierend auf dem Status des Amazon Choice-Abzeichens",
            amazonChoiceOnly: "Nur Amazon Choice",
            amzSuggestedPosition: "Amazon empf. Rang",
            amzSuggestedPositionTooltip: "Von Amazon für diese ASIN empfohlene Keywords, nummeriert von am meisten bis am wenigsten empfohlen",
            excludePhrasesContain: "Keywordphrasen, die Folgendes enthalten, ausschließen",
            excludePhrasesContainTooltip: "Keywordphrasen ausschließen, die eingegebene Keywords enthalten (durch Kommas trennen)",
            searchVolumeTrend: "Trend des Suchvolumens",
            searchVolumeTrendTooltip: "In den letzten 30 Tagen",
            sponsoredRank: "Gesponserter Rang",
            sponsoredRankTooltip: "Position der gesponserten Anzeige, die zuletzt in der Kundensuche entdeckt wurde",
            amazonRecRank: "Amazon empf. Rang",
            amazonRecRankTooltip: "Von Amazon für diese ASIN empfohlene Keywords, nummeriert von am meisten bis am wenigsten empfohlen",
            noneSelected: "Nichts ausgewählt",
            bestSeller: "Bestseller",
            bestSellerTooltip: "Nur Keywords anzeigen, für die das/die ausgewählte(n) Produkt(e) ein Bestseller ist/sind",
            walmartSearchVolume: "Walmart Suchvolumen",
            walmartSearchVolumeTooltip: "Das Suchvolumen für Walmart basiert auf eigens entwickelten Schätzungen, die sich derzeit in der Betaphase befinden. Genaue und historische Daten sind momentan nicht verfügbar.",
            advancedRank: "Erweiterter Rangfilter",
            advancedRankTooltip: "Geben Sie die minimale/maximale Anzahl der ASINs ein, die in einem bestimmten Bereich des organischen Rankings für ein Keyword erscheinen sollen",
            competitorPerformanceScore: "Konkurrenzleistung",
            bestSellerOnly: "Nur Bestseller",
            bestSellerOnlyTooltip: "Filtern Sie nach Keywords, die in den Suchergebnissen bei Walmart Produkte mit dem Abzeichen als Bestseller enthalten",
            matchTypeOptions: {
                organic: "Organisch",
                sponsored: "Gesponsert",
                ppc: "Amazon empfohlen",
                smart: "Smart Complete",
                contextual: "Organisch",
                lexical: "Smart Complete"
            },
            amazonChoiceOptions: {
                analyzedProduct: "Analysiertes Produkt",
                otherProduct: "Anderes Produkt",
                noBadges: "Keine Abzeichen"
            },
            walmartSearchVolumeOptions: {
                very_low: "Sehr niedrig",
                low: "Niedrig",
                medium: "Mittel",
                high: "Hoch",
                very_high: "Sehr hoch"
            },
            advancedRankFilter: "Erweiterter Rangfilter",
            advancedRankFilterTooltip: "Geben Sie die minimale/maximale Anzahl der ASINs ein, die in einem bestimmten Bereich des organischen Rankings für ein Keyword erscheinen sollen",
            advancedRankFilterTooltipWalmart: "Geben Sie die minimale/maximale Anzahl der Produkte ein, die in einem bestimmten Bereich des organischen Rankings für ein Keyword erscheinen sollen",
            considerRankAsinMin: "ASIN Min",
            considerRankAsinMax: "ASIN Max",
            considerRankProductIdMin: "ID Min",
            considerRankProductIdMax: "ID Max",
            considerRankMin: "Rang Min.",
            considerRankMax: "Rang Max.",
            all: "Alle",
            any: "Beliebig",
            searchVolumeWalmartTooltip: "Geschätzte Anzahl der monatlichen Suchanfragen für dieses Keyword auf Walmart.",
            monthlySales: "Verkaufszahlen nach Keyword",
            monthlySalesTooltip: "Jedem Keyword zugeordnete geschätzte Zahl der monatlichen Verkäufe (als Stückzahl ausgedrückt)",
            monthlySalesLockedTooltip: "Siehst du die geschätzte Anzahl von Absatz, die durch jedes Keyword generiert wird, indem du auf {upgradePlan} upgradest.",
            presets: {
                text1: "Grenze schnell deine Ergebnisse ein für",
                text2: "oder",
                topKeywords: "Top-Keywords",
                topKeywordsTooltip: "Wichtige Keywords, die üblicherweise von Mitbewerbern verwendet werden und erhebliches Suchvolumen aufweisen",
                opportunityKeywords: "Opportunity-Keywords",
                opportunityKeywordsTooltip: "Keywords, die die Gelegenheit bieten, über Aktivitäten, Rang und Suchvolumen des Mitbewerbers den eigenen Rang zu berechnen"
            },
            presetsTitle: {topKeywords: "Top-Keyword-Suche", opportunityKeywords: "Opportunity-Keyword-Suche"},
            monthlySalesLockedTitleTooltip: "Betrachtest du umfassende Keyword-Absatzdaten, um deine profitabelsten, am besten konvertierenden Keywords besser zu priorisieren",
            timePeriod: {
                label: "Time Period",
                tooltip: {
                    available: "Examine 24 months of data history for rank, search volume, and sales changes. Refine with chart filters in {node_0}.",
                    availableNode: "Historical Trends"
                },
                placeholder: "Aktuell",
                info: "You can select a specific from the last two years."
            },
            numberOfCompetitors: "Number of Competitors",
            numberOfCompetitorsTooltip: "Enter the minimum and/or maximum number of competitor ASINs that you want to be ranking for keywords in the range of the next filter. For example, if you set Min: 2 and Max: 4, the tool will show keywords where 2 to 5 competitors are ranking.",
            competitorRank: "Competitor Rank",
            competitorRankTooltip: "Define the Organic Keyword Rank Range where you want the competitors from the previous filter to appear. For example, if you chose min 2 and max 4 in the first filter, and min 1 and max 10 in this filter, it means you're interested in keywords where at least 2 and no more than 4 competitors rank within the top 10 organic positions.",
            advancedFilterTitle: "Unlock advanced filtering with premium plans",
            showAllFilters: "Show all Helium 10 filters"
        },
        distribution: {
            title: "Keywordverteilung",
            total: "Keywords insgesamt",
            sponsored: "Gesponserte Keywords",
            organic: "Organisch",
            amazonRecommended: "Amazon empfohlen",
            smart: "Smart Complete",
            showHistoricalTrend: {
                title: "Historischen Trend anzeigen",
                tooltip: "Wähle zwischen der Keyword-Verteilung nach Typ oder der Keyword-Verteilung über alle Produkte in den letzten 24 Monaten, um Trends zu erkennen.",
                lockedTooltip: "Schaltest du historische Trendanalysediagramme frei, indem du auf Diamond aktualisierst",
                lockedRightTooltip: "Analysierst du ganz einfach historische Keyword-Trends, um Wachstumschancen für deine Produkte zu identifizieren",
                tooltipNew: "Look back at 24 months of data to observe changes in historical rank, search volume, and sales. Filter these insights to observe seasonality by using an interactive chart."
            },
            organicTooltip: "Organische Suche",
            paid: "Bezahlt",
            paidTooltip: "Bezahlte Suche"
        },
        wordFrequency: {
            title: "Worthäufigkeit",
            button: "Alle anzeigen",
            export: "Export",
            word: "Wort",
            qty: "Häufigkeit",
            setToast: {title: "Filter „Phrasen enthaltend“ angewendet", text: "Ergebnisse filtern nach „{keyword}“"},
            noData: "Keine Daten"
        },
        productSearch: {
            single: "Einzelne Produktsuche",
            multi: "Mehrfache Produktsuche",
            singleSubtitle: "Basierend auf den letzten 30 Tagen",
            multiSubtitle: "Sieh dir die 30-Tage-Zusammenfassung für ein einzelnes Produkt an, indem du unten auf die ASIN klickst."
        },
        boughtTogether: {
            button: "Häufig zusammen gekauft",
            title: "Häufig zusammen gekaufte Produkte",
            description: "Dies sind die Produkte, die im Abschnitt „Häufig zusammen gekauft“ der Auflistung des von Ihnen gesuchten Produkts angezeigt werden.",
            modalButton: "Alle in Black Box anzeigen",
            emptyTitle: "Die Liste ist leer",
            productMultiSearch: "Produkt von Multi Suche"
        },
        table: {
            keywordPhrase: "Keyword Phrase",
            keywordPhraseTooltip: "Von Kunden bei der Suche nach einem Produkt verwendete(s) Keyword/Keywordphrase",
            cerebroIqScore: "Cerebro IQ-Wert",
            cerebroIqScoreTooltip: "Der Score basiert auf der Grundlage des Verhältnisses zwischen dem geschätzten Suchvolumen und der Anzahl der konkurrierenden Produkte: Ein hoher Score bedeutet eine relativ hohe Anzahl von Suchanfragen im Vergleich zur Anzahl der Konkurrenzprodukte; ein niedriger Score bedeutet das Gegenteil",
            searchVolume: "Suchvolumen",
            searchVolumeTooltip: "Geschätzte Anzahl der monatlichen Suchanfragen für dieses Keyword auf Amazon",
            sponsoredAsins: "Gesponserte ASINs",
            sponsoredAsinsTooltip: "Anzahl gefundener ASINs, für die kürzlich gesponserte Anzeigen in den Suchergebnissen zu dieser Keywordphrase geschaltet wurden",
            headlineAsins: "Headline-ASINs",
            headlineAsinsTooltip: "Anzahl gefundener ASINs, die kürzlich in Headline-Anzeigen in Suchergebnissen zu dieser Keywordphrase erschienen sind",
            competingProducts: "Konkurrierende Produkte",
            competingProductsTooltip: "Gesamtzahl der Produkte, die bei einer Kundensuche mit diesem Keyword/dieser Keywordphrase gefunden wurden",
            cpr: "CPR",
            cprSimple: "CPR",
            cprTooltip: "Geschätzte Anzahl der Einheiten, die innerhalb von 8 Tagen bei einer Suche nach diesem Keyword verkauft werden müssen, damit das Produkt in der oberen Hälfte der Seite 1 für dieses Keyword erscheint.",
            matchType: "Übereinstimmungstyp",
            matchTypeTooltip: "Quelle, aus der ein Keyword bezogen wird",
            amazonRecRank: "Amazon empf. Rang",
            amazonRecRankTooltip: "Von Amazon für diese ASIN empfohlene Keywords, nummeriert von am meisten bis am wenigsten empfohlen",
            sponsoredRank: "Gesponserter Rang",
            sponsoredRankTooltip: "Position der gesponserten Anzeige, die zuletzt in der Kundensuche entdeckt wurde",
            organicRank: "Organischer Rang",
            organicRankTooltip: "Organische Suchposition, die für diese(s) Keyword(s) für das analysierte Produkt ermittelt wurde",
            searchVolumeTrend: "Trend des Suchvolumens",
            searchVolumeTrendTooltip: "In den letzten 30 Tagen",
            titleDensity: "Häufigkeit des Titels",
            titleDensityTooltip: "Anzahl der Produkte auf Seite 1, die das gesuchte Keyword in ihrem Titel enthalten",
            sponsoredAvg: "Gesponserter Rang (Durchschnitt)",
            sponsoredAvgTooltip: "Durchschnittliche Position, die unter allen Produkten in den gesponserten Ergebnissen ermittelt wurde",
            sponsoredCount: "Gesponserter Rang (Anzahl)",
            sponsoredCountTooltip: "Anzahl abgefragter Produkte, die mit gesponserten Anzeigen für den/die Keyword(s) gefunden wurde",
            amzSuggestedAvg: "Von Amazon empfohlener Rang (Durchschnitt)",
            amzSuggestedAvgTooltip: "Durchschnittlicher Rang der analysierten Keywords der Produkte, bezogen auf Amazons Empfehlungsbewertung",
            amzSuggestedCount: "Rang für von Amazon empfohlen (Anzahl)",
            amzSuggestedCountTooltip: "Anzahl analysierter Produkte, für die Amazon das/die Keyword(s) empfiehlt",
            positionRank: "Position (Rang)",
            positionRankTooltip: "Position, die das erste Produkt (bei einer mehrfachen ASIN-Suche) in den Suchergebnissen von Amazon einnimmt",
            scrapedAt: "Empfangen am",
            relativeRank: "Relativer Rang",
            relativeRankTooltip: "Rang der Haupt-ASIN im Vergleich zu ihren Konkurrenten. Wenn zum Beispiel zwei (2) Konkurrenten besser als die Haupt-ASIN gerankt sind, ist der relative Rang drei (3)",
            competitorRank: "Ranking des Konkurrenten (Durchschnitt)",
            competitorRankTooltip: "Durchschnittlicher Rang der ASINs der Konkurrenten. ASINs, die nicht gerankt wurden, werden bei dieser Berechnung ignoriert.",
            rankingCompetitors: "Ranking Konkurrenten (Anzahl)",
            rankingCompetitorsTooltip: "Anzahl der Konkurrenz-ASINs, die für die gegebene Suchphrase gerankt wurden.",
            competitorPerformanceScore: "Konkurrenzleistungsscore",
            competitorPerformanceScoreTooltip: "Der Konkurrenzleistungsindex ist ein Maßstab dafür, wie erfolgreich die aufgelisteten Konkurrenten als Gruppe für das gegebene Keyword sind.",
            competitorRankAvg: "Ranking des Konkurrenten (Durchschnitt)",
            competitorRankAvgTooltip: "Durchschnittlicher Rang der ASINs der Konkurrenten. ASINs, die nicht gerankt wurden, werden bei dieser Berechnung ignoriert.",
            filteredKeywords: {one: "{value} gefiltertes Keyword", other: "{value} gefilterte Keywords"},
            filteredKeywordsSelected: {one: "{value} Keyword ausgewählt", other: "{value} Keywords ausgewählt"},
            matchTypeTooltips: {
                amazonRecommended: "Amazon empfohlen",
                sponsored: "Gesponsert",
                organic: "Organisch",
                smartComplete: "Smart Complete",
                organicTooltip: "Organische Suche",
                paid: "Bezahlt",
                paidTooltip: "Bezahlte Suche"
            },
            addToMyList: "Keywords zu Meine Liste hinzufügen",
            exportAmazonRecommended: "Amazon empfohlen",
            exportSponsored: "Gesponsert",
            exportOrganic: "Organisch",
            amzSuggestedAvgTable: "Von Amazon empfohlener Rang (Durchschnitt)",
            amzSuggestedCountTable: "Rang für von Amazon empfohlen (Anzahl)",
            smartComplete: "Smart Complete",
            abad: "ABA Total<br/>Klickanteil",
            abadTooltip: "Amazon Brand Analytics",
            abadValueTooltip: "Summe der Klickanteile der Top 3 ASINs",
            organicRankAverage: "Organischer Rang (durchschn.)",
            abadConv: "ABA Total<br/>Konversionsanteil",
            abadConvTooltip: "Summe der Klickanteile der Top 3 ASINs",
            abadSearchFrequencyRank: "ABA SFR",
            abadSearchFrequencyRankTooltip: "The ranked order of search frequency. Search terms with the same search frequency over the selected time frame will show the same rank."
        },
        tableWalmart: {
            keywordPhrase: "Keyword Phrase",
            keywordPhraseTooltip: "Keyword, für welches das Produkt in den Top 500 Positionen der Suchergebnisse von Walmart erscheint",
            searchVolumeWalmart: "Suchvolumen",
            searchVolumeWalmartExport: "Suchvolumen (Walmart)",
            searchVolumeWalmartTooltip: "Das Suchvolumen für Walmart basiert auf eigens entwickelten Schätzungen, die sich derzeit in der Betaphase befinden. Genaue und historische Daten sind momentan nicht verfügbar.",
            searchVolume: "Suchvolumen",
            searchVolumeAmazonExport: "Suchvolumen (Amazon)",
            amazonSearchVolume: "Amazone Suchvolumen",
            searchVolumeTooltip: "Geschätzte Anzahl der monatlichen Suchanfragen für dieses Keyword auf Amazon. Sie können dies nutzen, um Ihre Recherche zu ergänzen, während das Suchvolumen für Walmart verbessert wird.",
            competingProducts: "Konkurrierende Produkte",
            competingProductsTooltip: "Gesamtzahl der Produkte, die bei einer Kundensuche mit diesem Keyword/dieser Keywordphrase auf Walmart gefunden wurden",
            sponsoredProducts: "Gesponserte Produkte",
            sponsoredProductsTooltip: "Anzahl der Produkte, für die gesponserte Anzeigen in den Suchergebnissen für diese Keywordphrase bei Walmart gefunden wurden",
            matchType: "Übereinstimmungstyp",
            matchTypeTooltip: "Quelle, aus der ein Keyword bezogen wird",
            organicRank: "Organischer Rang",
            organicRankTooltip: "Zuletzt ermittelte organische Position für das analysierte Produkt in der Kundensuche bei Walmart",
            sponsoredRank: "Gesponserter Rang",
            sponsoredRankTooltip: "Zuletzt ermittelte Position der gesponserten Anzeige für das analysierte Produkt in der Kundensuche auf Walmart",
            sponsoredRankAverage: "Gesponserter Rang (Durchschnitt)",
            sponsoredRankAverageTooltip: "Durchschnittliche Position, die unter allen Produkten in den gesponserten Ergebnissen ermittelt wurde",
            sponsoredRankCount: "Gesponserter Rang (Anzahl)",
            sponsoredRankCountTooltip: "Anzahl gefundener Produkte mit gesponserten Anzeigen für das/die Keyword(s)",
            positionRank: "Position (Rang)",
            positionRankTooltip: "Position, die das erste Produkt (bei einer mehrfachen Produktsuche) in den Suchergebnissen von Walmart einnimmt",
            relativeRank: "Relativer Rang",
            relativeRankTooltip: "Rang des Hauptprodukts im Vergleich zu seinen Konkurrenten. Wenn zum Beispiel zwei (2) Konkurrenten besser als das Hauptprodukt eingestuft sind, ist der relative Rang drei (3)",
            competitorRank: "Ranking des Konkurrenten (Durchschnitt)",
            competitorRankTooltip: "Durchschnittlicher Rang der Konkurrenzprodukte. Produkte, die nicht gerankt wurden, werden bei dieser Berechnung nicht berücksichtigt.",
            rankingCompetitors: "Ranking Konkurrenten (Anzahl)",
            rankingCompetitorsTooltip: "Anzahl der Konkurrenzprodukte, die für die gegebene Suchphrase gerankt wurden.",
            competitorPerformanceScore: "Konkurrenzleistungsscore",
            competitorPerformanceScoreTooltip: "Der Score misst auf einer Skala von 1 bis 10, wie relevant das Keyword für die eingegebenen Konkurrenzprodukte ist (ausgenommen das erste Produkt). Eine höhere Punktzahl bedeutet, dass mehr Produkte organisch gerankt sind und einen niedrigen durchschnittlichen organischen Rang haben."
        },
        landingDemo: {
            title1: "Cerebro hilft dir, höchstplatzierte Keywords zu finden. Wähle dafür ein bestimmtes Produkt aus dem",
            title2: "Marktplatz.",
            subtitle: "Wähle eine ASIN aus, um loszulegen",
            description: "Cerebro ist der Schlüssel zur erfolgreichen Einführung neuer Produkte und zur Steigerung der Bekanntheit deiner Marke. Du kannst Cerebro auch nutzen, um die effektivsten Keywords für dein Produkt auf Amazon zu ermitteln, dein Produkt-Listing zu optimieren, um den Absatz zu steigern, und wettbewerbsfähige Preise für deine Produkte sicherzustellen.",
            backToSearch: "Zurück zur Suche"
        },
        searchVolume: {
            total: {
                tooltip: "Displays the total search volume for your filtered keywords over the past 30 days.",
                title: "Gesamtes Suchvolumen"
            },
            average: {
                tooltip: "Displays the average search volume for your filtered keywords over the past 30 days.",
                title: "Durchschnittliches Suchvolumen"
            },
            title: {amazon: "Amazon Search Vol.", walmart: "Walmart Search Vol."}
        },
        floatingButton: "Filterergebnisse",
        descriptionFree: "Findest du Keywords für deinen Eintrag mithilfe der umgekehrten Produktsuche.",
        inputPlaceholderFree: "Der Keyword-Vergleich zwischen Produkten ist für Platinum und höher verfügbar.",
        inputPlaceholderNotFree: "Gib bis zu {maxAsins} Produktbezeichnungen für den Keyword-Vergleich ein.",
        searchBarTooltipTitle: "Entsperrst du die Mehrprodukt-Suche auf Platinum",
        searchBarTooltipButton: "Jetzt upgraden"
    }, Fe = {very_low: "Sehr niedrig", low: "Niedrig", medium: "Mittel", high: "Hoch", very_high: "Sehr hoch"}, De = {
        button: "Neuen Ordner erstellen",
        title: "Neuen Ordner in Meine Liste erstellen",
        text: "Legen Sie einen neuen Ordner in Meine Liste an, in dem Sie Keywords speichern können, um sie später in den Helium 10 Tools zu verwenden. Jeder Ordner ist auf die Nutzung eines einzigen Marketplace beschränkt.",
        folderName: "Ordnername",
        folderNamePlaceholder: "Wählen Sie einen Namen für diesen Ordner",
        folderNameRequired: "Pflichtfeld",
        marketplace: "Marktplatz",
        save: "Speichern",
        close: "Schließen"
    }, Ee = {
        minBiggest: "Min. größer als max.",
        frankenstein: {limitIsExceeded: "Die Gesamtzahl der Zeichen in allen Sätzen darf nicht mehr als 200.000 betragen."},
        common: {
            400: "Falsch eingegebene Daten oder keine Ergebnisse",
            402: "Sie haben die Höchstzahl an Nutzungen erreicht",
            403: "Zugriff abgelehnt",
            404: "Nicht gefunden",
            409: "Die eingegebenen Daten stehen im Widerspruch zu Ihren vorherigen Aktionen",
            422: "Die eingegebenen Daten sind ungültig",
            500: "Unbekannter Fehler",
            503: "Gewünschte Funktion vorübergehend nicht verfügbar",
            undefined: "Unbekannter Fehler",
            "503Retry": "Versuche es später erneut"
        }
    }, qe = {
        title: "Magnet",
        description: "Finden Sie die wichtigsten verwandten Keywords für Ihr Produkt.",
        learnTooltip: "Schauen Sie sich Videos an und lesen Sie Artikel, die Ihnen helfen, Magnet zu meistern",
        tabSingle: "Vorschläge finden",
        tabMultiple: "Keywords analysieren",
        inputPlaceholderSingle: "Geben Sie ein Keyword ein",
        inputPlaceholderMultiple: "Geben Sie bis zu {number} Keywords ein",
        addFromMyList: "Von meiner Liste hinzufügen",
        landingSingleTitle: "Gib oben ein Keyword ein, um verwandte Keywords zu finden",
        landingSingleDescription: "Anhand deiner Eingaben schlagen wir dir Suchbegriffe vor, die für dich relevant sein könnten. Nutze unsere Filter, um die Ergebnisse einzugrenzen, und hefte diejenigen, die dir gefallen, an einen Ordner in Meine Liste.",
        landingMultipleTitle: "Erhalten Sie eine detaillierte Zusammenfassung von bis zu 200 Keywords, die Sie interessieren",
        landingMultipleDescription: "Wir stellen Ihnen relevante Daten zur Verfügung, die Ihnen helfen zu bestimmen, welche Keywords es wert sind, sie zu behalten. Organisieren Sie mithilfe von Filtern, welche Keywords am wichtigsten sind, und fügen Sie sie dann dem Meine Liste-Ordner hinzu.",
        landingWatchVideo: "Schau dir unser Einführungsvideo an",
        keywordSummary: {
            title: "Zusammenfassung der Keywords",
            totalKeywords: "Keywords insgesamt",
            averageSearchVolume: "Durchschnittliches Suchvolumen",
            totalSearchVolume: "Gesamtes Suchvolumen",
            averageMagnetIq: "Durchschnittlicher Magnet-IQ-Score",
            averageCompetingProducts: "Durchschnitt konkurrierender Produkte",
            totalAmazonSV: "Amazon SV insgesamt",
            totalWalmartSV: "Walmart SV insgesamt"
        },
        keywordSearchSummary: {
            title: "Zusammenfassung der Keyword-Suche",
            viewTopProducts: "Top-Produkte anzeigen",
            searchVolume: "Suchvolumen",
            magnetIQScore: "Magnet-IQ-Score",
            magnetIQScoreTooltip: "Der Score basiert auf der Grundlage des Verhältnisses zwischen dem geschätzten Suchvolumen und der Anzahl der konkurrierenden Produkte: Ein hoher Score bedeutet eine relativ hohe Anzahl von Suchanfragen im Vergleich zur Anzahl der Konkurrenzprodukte; ein niedriger Score bedeutet das Gegenteil",
            cpr: "CPR"
        },
        searchVolumeDistribution: {title: "Verteilung des Suchvolumens", seriesName: "Volumen"},
        history: {
            description: "Wählen Sie eine frühere Cerebro-Suche aus und laden Sie sie erneut, ohne eine der Ihnen zugeteilten Suchen zu verwenden.",
            columns: {keywordSearch: "Keyword-Suche", searchType: "Typ-Suche"},
            searchTypes: {singleSearch: "Einzelsuche", multiSearch: "Mehrfachsuche"},
            tooltip: "Zeige deine früheren Suchen an und lade die Ergebnisse erneut"
        },
        openInCerebro: "Zum Öffnen in Cerebro klicken",
        tabSingleTooltip: "Finden Sie die wichtigsten verwandten Keywords",
        tabMultipleTooltip: "Geben Sie bis zu 200 Keywords ein und rufen Sie Metriken ab",
        boughtTogether: {
            title: "Top-Produkte",
            description: "Klicken Sie unten auf ein Produkt und erhalten Sie dank Cerebro die zugehörigen Top-Keywords."
        },
        choiseBadge: {
            amazon: "Das Keyword, das du gerade analysierst, wird als Walmart's Choice für dieses Produkt angezeigt.",
            walmart: "Das Keyword, das du gerade analysierst, wird als Walmart's Choice für dieses Produkt angezeigt."
        },
        asinInsteadOfKeywordError: {
            title: "ASIN erkannt",
            text: {
                part1: "Sie {asin} eingegeben. Keywords für diese ASIN anzeigen auf",
                part2: "oder geben Sie ein Keyword ein, um fortzufahren."
            }
        },
        landingDemo: {
            title1: "Magnet hilft dir bei der Suche nach den wichtigsten verwandten Keywords im",
            title2: "Marktplatz.",
            subtitle: "Wähle unten ein Keyword aus, um anzufangen",
            description: "Wir nutzen deine Auswahl, um Keywords vorzuschlagen, die für deine Suche relevant sein könnten. Nutze Filter, um die Ergebnisse einzugrenzen, und hefte Keywords, die dir gefallen, an einen Ordner in „Meine Liste“."
        }
    }, Ve = {
        options: {
            ">10000": ">10,000",
            "5000-10000": "5,000-10,000",
            "1000-5000": "1,000-5,000",
            "<1000": "< 1,000",
            "Very Low": "Sehr niedrig",
            Low: "Niedrig",
            Medium: "Mittel",
            High: "Hoch",
            "Very High": "Sehr hoch",
            very_low: "Sehr niedrig",
            low: "Niedrig",
            medium: "Mittel",
            high: "Hoch",
            very_high: "Sehr hoch"
        }
    }, Ke = {
        title: "Sie haben dieses Produkt schon einmal gesucht",
        description: "Möchten Sie Ihre vorherige Suche aus dem Verlauf laden oder eine neue Suche starten?",
        newSearchButton: "Neue Suche starten",
        fromHistoryButton: "Aus dem Verlauf laden"
    }, Le = "Keine Daten verfügbar", We = {
        button: "Upgrade auf Unbegrenzt",
        texts: {
            cerebroAmazon: {
                one: "Heute noch <b>{count}</b> Cerebro-Amazonsuche übrig",
                other: "Heute noch <b>{count}</b> Cerebro-Amazonsuchen übrig"
            },
            cerebroWalmart: {
                one: "Heute noch <b>{count}</b> Cerebro-Walmartsuche übrig",
                other: "Heute noch <b>{count}</b> Cerebro-Walmartsuche(n) übrig"
            },
            magnetAmazon: {
                one: "<b>{count}</b> verbleibende Amazon-Suche für heute",
                other: "<b>{count}</b> verbleibende Amazon-Suchen für heute"
            },
            magnetWalmart: {
                one: "<b>{count}</b> verbleibende Walmart-Suche für heute",
                other: "<b>{count}</b> verbleibende Walmart-Suchen für heute"
            },
            cerebroDemo: "<b>Du siehst eine Demo von Cerebro.</b> Aktualisierst du für die Keyword-Analyse über mehrere Produkte, voreingestellte Bibliothek und schnelle Filter.",
            magnetDemo: "Dies ist eine Demo von Magnet"
        },
        plans: {
            free: "Free",
            starter: "Starter",
            platinum: "Platinum",
            diamond: "Diamond",
            starterChinese: "Explorer",
            platinumChinese: "Entrepreneur",
            diamondChinese: "Professional",
            freeChinese: "Free"
        },
        prices: {platinum: "$99/Monat", diamond: "$249/Monat", commonMonth: "${price}/Mon"},
        WALMART_features: {
            title: "Schalten Sie diese und andere großartige Funktionen in Cerebro für Walmart frei",
            subtitle: "Diese Funktion ist nur mit einem Diamant-Plan oder höher verfügbar.",
            upgradeButton: "Mehr zu den Plänen",
            declineButton: "Nicht jetzt",
            features: [{
                title: "Einzelne Produktsuche",
                values: {
                    Helium10_Starter: "2 Anwendungen pro Tag",
                    Helium10_Free: "2 Anwendungen pro Tag",
                    Helium10_Start_Your_Business: "2 Anwendungen pro Tag"
                }
            }, {title: "Mehrfache Produktsuche"}, {title: "Multiple Ergebnisseiten"}, {title: "Filterergebnisse"}, {title: "Wettbewerber abrufen"}, {title: "Verlauf"}, {title: "Absatz nach Keyword für Cerebro und Magnet"}, {
                title: "Walmart",
                values: {Helium10_Free: "2 Anwendungen pro Tag"}
            }, {
                title: "Follow-Up",
                values: {Helium10_Free: "2,000 E-Mails", Helium10_Scale_Your_Business: "10,000 E-Mails"}
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Free: "2,500 Keywords", Helium10_Scale_Your_Business: "5,000 Keywords"}
            }, {
                title: "Black Box",
                values: {Helium10_Starter: "20 Anwendungen", Helium10_Start_Your_Business: "20 Anwendungen"}
            }, {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "2 Anwendungen pro Tag",
                    Helium10_Free: "2 Anwendungen pro Tag",
                    Helium10_Start_Your_Business: "2 Anwendungen pro Tag"
                }
            }, {
                title: "Magnet",
                values: {
                    Helium10_Starter: "2 Anwendungen pro Tag",
                    Helium10_Free: "2 Anwendungen pro Tag",
                    Helium10_Start_Your_Business: "2 Anwendungen pro Tag"
                }
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20 Keywords", Helium10_Scale_Your_Business: "5,000 Keywords"}
            }, {title: "Xray", values: {Helium10_Starter: "50 Launches"}}],
            cerebro: {
                title: "Schalten Sie diese und andere großartige Funktionen in Cerebro für Walmart frei",
                subtitle: "Diese Funktion ist nur mit einem Diamant-Plan oder höher verfügbar."
            },
            magnet: {
                title: "Schalten Sie diese und andere großartige Funktionen in Magnet für Walmart frei",
                subtitle: "Erhalten Sie unbegrenzte Suchvorgänge und erschließen Sie sich mit Diamond mehr Wert.",
                titleHistory: "Schalten Sie den Verlauf und andere großartige Funktionen in Magnet für Walmart frei"
            }
        },
        AMAZON_features: {
            title: "Schalten Sie diese und andere großartige Funktionen in Cerebro für Amazon frei",
            subtitle: "Diese Funktion ist nur mit einem Platinum-Plan oder höher verfügbar.",
            upgradeButton: "Mehr zu den Plänen",
            declineButton: "Nicht jetzt",
            features: [{
                title: "Einzelne Produktsuche",
                values: {Helium10_Free: "2 Anwendungen pro Tag", Helium10_Starter: "2 Anwendungen pro Tag"}
            }, {title: "Mehrfache Produktsuche"}, {title: "Multiple Ergebnisseiten"}, {title: "Filterergebnisse"}, {title: "Wettbewerber abrufen"}, {title: "Verlauf"}, {title: "Absatz nach Keyword für Cerebro und Magnet"}, {
                title: "Walmart",
                values: {Helium10_Free: "2 Anwendungen pro Tag"}
            }, {
                title: "Follow-Up",
                values: {Helium10_Free: "2,000 E-Mails", Helium10_Scale_Your_Business: "10,000 E-Mails"}
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Free: "2,500 Keywords", Helium10_Scale_Your_Business: "5,000 Keywords"}
            }, {
                title: "Black Box",
                values: {Helium10_Starter: "20 Anwendungen", Helium10_Start_Your_Business: "20 Anwendungen"}
            }, {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "2 Anwendungen pro Tag",
                    Helium10_Free: "2 Anwendungen pro Tag",
                    Helium10_Start_Your_Business: "2 Anwendungen pro Tag"
                }
            }, {
                title: "Magnet",
                values: {
                    Helium10_Starter: "2 Anwendungen pro Tag",
                    Helium10_Free: "2 Anwendungen pro Tag",
                    Helium10_Start_Your_Business: "2 Anwendungen pro Tag"
                }
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20 Keywords", Helium10_Scale_Your_Business: "5,000 Keywords"}
            }, {title: "Xray", values: {Helium10_Start_Your_Business: "50 Launches"}}],
            cerebro: {
                title: "Schalten Sie diese und andere großartige Funktionen in Cerebro für Amazon frei",
                subtitle: "Diese Funktion ist nur mit einem Platinum-Plan oder höher verfügbar."
            },
            magnet: {
                title: "Schalten Sie diese und andere großartige Funktionen in Magnet für Amazon frei",
                subtitle: "Erhalten Sie unbegrenzte Suchvorgänge und erschließen Sie sich mit Diamond mehr Wert.",
                titleHistory: "Schalten Sie den Verlauf und andere großartige Funktionen in Magnet für Amazon frei"
            }
        },
        WALMART_tools: {
            title: "Sie haben Ihre 2 täglichen kostenlosen Suchvorgänge bei Cerebro für Walmart aufgebraucht.",
            subtitle: "Erhalten Sie unbegrenzte Suchvorgänge pro Tag und erschließen Sie sich mit Diamond mehr Wert.",
            upgradeButton: "Upgrade auf Diamond",
            declineButton: "Nicht jetzt",
            features: [{
                title: "Cerebro für Walmart",
                subtitle: "Rückwärts-Produktsuche",
                values: {
                    Helium10_Starter: "2 Anwendungen pro Tag",
                    Helium10_Free: "2 Anwendungen pro Tag",
                    Helium10_Start_Your_Business: "2 Anwendungen pro Tag"
                }
            }, {
                title: "Magnet für Walmart",
                subtitle: "Keyword-Recherche",
                values: {
                    Helium10_Starter: "2 Anwendungen pro Tag",
                    Helium10_Free: "2 Anwendungen pro Tag",
                    Helium10_Start_Your_Business: "2 Anwendungen pro Tag"
                }
            }, {
                title: "Xray für Walmart",
                subtitle: "Chrome-Erweiterung - Produktrecherche",
                values: {
                    Helium10_Starter: "50 Launches",
                    Helium10_Free: "50 Launches",
                    Helium10_Start_Your_Business: "50 Launches"
                }
            }, {
                title: "Profits für Walmart",
                subtitle: "Dashboard für Finanzanalysen",
                values: {Helium10_Starter: "90 Tage", Helium10_Free: "90 Tage", Helium10_Start_Your_Business: "90 Tage"}
            }],
            cerebro: {
                title: "Sie haben Ihre 2 täglichen kostenlosen Suchvorgänge bei Cerebro für Walmart aufgebraucht.",
                subtitle: "Erhalten Sie unbegrenzte Suchvorgänge pro Tag und erschließen Sie sich mit Diamond mehr Wert.",
                titleNew: "Sie haben Ihre {uses} täglichen kostenlosen Suchvorgänge bei Cerebro für Walmart aufgebraucht."
            },
            magnet: {
                title: "Sie haben Ihre 2 täglichen kostenlosen Suchvorgänge bei Magnet für Walmart aufgebraucht.",
                subtitle: "Erhalten Sie unbegrenzte Suchvorgänge pro Tag und erschließen Sie sich mit Diamond mehr Wert.",
                titleNew: "Sie haben Ihre {uses} täglichen kostenlosen Suchvorgänge bei Magnet für Walmart aufgebraucht."
            },
            titleNew: "Sie haben Ihre {uses} täglichen kostenlosen Suchvorgänge bei Cerebro für Walmart aufgebraucht."
        },
        AMAZON_tools: {
            title: "Sie haben Ihre 2 täglichen kostenlosen Suchvorgänge bei Cerebro für Amazon aufgebraucht.",
            subtitle: "Erhalten Sie unbegrenzte Suchvorgänge pro Tag und erschließen Sie sich mit Platinum mehr Wert.",
            upgradeButton: "Upgrade auf Platinum",
            declineButton: "Nicht jetzt",
            features: [{
                title: "Cerebro für Amazon",
                subtitle: "Rückwärts-Produktsuche",
                values: {Helium10_Free: "2 Anwendungen pro Tag", Helium10_Starter: "2 Anwendungen pro Tag"}
            }, {
                title: "Magnet für Amazon",
                subtitle: "Keyword-Recherche",
                values: {Helium10_Free: "2 Anwendungen pro Tag", Helium10_Starter: "2 Anwendungen pro Tag"}
            }, {
                title: "Xray für Amazon",
                subtitle: "Chrome-Erweiterung - Produktrecherche",
                values: {Helium10_Free: "50 Launches", Helium10_Starter: "50 Launches"}
            }, {
                title: "Keyword Tracker für Amazon",
                subtitle: "Produktrang-Tracking",
                values: {
                    Helium10_Free: "20 Keywords",
                    Helium10_Starter: "20 Keywords",
                    Helium10_Start_Your_Business: "500 Keywords"
                }
            }],
            cerebro: {
                title: "Sie haben Ihre 2 täglichen kostenlosen Suchvorgänge bei Cerebro für Amazon aufgebraucht.",
                subtitle: "Erhalten Sie unbegrenzte Suchvorgänge pro Tag und erschließen Sie sich mit Platinum mehr Wert.",
                titleNew: "Sie haben Ihre {uses} täglichen kostenlosen Suchvorgänge bei Cerebro für Amazon aufgebraucht."
            },
            magnet: {
                title: "Sie haben Ihre 2 täglichen kostenlosen Suchvorgänge bei Magnet für Amazon aufgebraucht.",
                subtitle: "Erhalten Sie unbegrenzte Suchvorgänge pro Tag und erschließen Sie sich mit Platinum mehr Wert.",
                titleNew: "Sie haben Ihre {uses} täglichen kostenlosen Suchvorgänge bei Magnet für Amazon aufgebraucht."
            }
        },
        getPlan: "Plan abonnieren",
        titles: {
            keywordSales: "Führe ein Upgrade durch, um diese und weitere tolle Funktionen freizuschalten",
            modalCommon: "Führe ein Upgrade durch, um diese und weitere tolle Funktionen freizuschalten"
        },
        subtitles: {
            modalPlatinum: "Diese Funktion ist nur mit einem Platinum-Plan oder höher verfügbar.",
            modalDiamond: "Diese Funktion ist nur mit einem Diamant-Plan oder höher verfügbar.",
            modalCommon: "Diese Funktion ist nur mit einem {plan}-Plan oder höher verfügbar.",
            modalUnlimitedCommon: "Erhalte unbegrenzte Suchvorgänge und erschließe dir mit {plan} mehr Wert.",
            pageCommon: "Erhalte unbegrenzte Suchvorgänge pro Tag und erschließe dir mit {plan} mehr Wert."
        },
        featuresModal: {
            singleProductSearch: {
                title: "Einzelne Produktsuche",
                values: {
                    Helium10_Starter: "2 Anwendungen pro Tag",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 Anwendungen pro Tag"
                }
            },
            singleProductSearch2: {
                title: "Einzelne Produktsuche",
                values: {Helium10_Free: "Demo", Helium10_Starter: "2 Anwendungen pro Tag"}
            },
            multiProductSearch: {title: "Mehrfache Produktsuche"},
            multiplePagesResults: {title: "Multiple Ergebnisseiten"},
            filterResults: {title: "Ergebnisse filtern und sortieren"},
            getCompetitors: {title: "Wettbewerber abrufen"},
            history: {title: "Verlauf"},
            export: {title: "Export"},
            salesByKeyword: {title: "Absatz nach Keyword für Cerebro und Magnet"},
            magnetWalmart: {title: "Walmart", values: {Helium10_Free: "Demo"}},
            followUp: {
                title: "Follow-Up",
                values: {Helium10_Free: "2,000 E-Mails", Helium10_Scale_Your_Business: "10,000 E-Mails"}
            },
            keywordTracker: {
                title: "Keyword Tracker",
                values: {Helium10_Free: "2,500 Keywords", Helium10_Scale_Your_Business: "5,000 Keywords"}
            },
            blackBox: {
                title: "Black Box",
                values: {Helium10_Starter: "20 Anwendungen", Helium10_Start_Your_Business: "20 Anwendungen"}
            },
            cerebro: {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "2 Anwendungen pro Tag",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 Anwendungen pro Tag"
                }
            },
            magnet: {
                title: "Magnet",
                values: {
                    Helium10_Starter: "2 Anwendungen pro Tag",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 Anwendungen pro Tag"
                }
            },
            keywordTracker2: {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20 Keywords", Helium10_Scale_Your_Business: "5,000 keywords"}
            },
            xray: {title: "Xray", values: {Helium10_Free: "50 Launches"}},
            blackBoxProducts: {
                title: "Black Box",
                values: {Helium10_Free: "20 Anwendungen", Helium10_Starter: "20 Anwendungen"}
            },
            blackBoxProductsCerebro: {title: "Cerebro", values: {Helium10_Free: "Begrenzt", Helium10_Starter: "Begrenzt"}},
            blackBoxProductsMagnet: {title: "Magnet", values: {Helium10_Free: "Begrenzt", Helium10_Starter: "Begrenzt"}},
            abad: {title: "Amazon Brand Analytics innerhalb von Cerebro"},
            walmartCerebroMagnet: {title: "Walmart für Cerebro oder Magnet"},
            adtomic: {title: "Adtomic"},
            businessValuation: {title: "Geschäftsbewertung"},
            listingAnalyzer: {
                title: "Listing Analyzer",
                values: {
                    Helium10_Free: "2 Suchen / Monat",
                    Helium10_Starter: "2 Suchen / Monat",
                    Helium10_Start_Your_Business: "25 Suchen / Monat",
                    Helium10_Scale_Your_Business: "50 Suchen / Monat"
                }
            },
            abadNew: {title: "Amazon Brand Analytics innerhalb von Cerebro oder Magnet"},
            singleProductSearchUses: {
                title: "Einzelne Produktsuche",
                values: {
                    Helium10_Starter: "{uses} Anwendungen pro Tag",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} Anwendungen pro Tag"
                }
            },
            singleProductSearch2Uses: {
                title: "Einzelne Produktsuche",
                values: {Helium10_Free: "Demo", Helium10_Starter: "{uses} Anwendungen pro Tag"}
            },
            followUpUses: {
                title: "Follow-Up",
                values: {Helium10_Free: "{uses} E-Mails", Helium10_Scale_Your_Business: "{uses} E-Mails"}
            },
            keywordTrackerUses: {
                title: "Keyword Tracker",
                values: {Helium10_Free: "{uses} Keywords", Helium10_Scale_Your_Business: "{uses} Keywords"}
            },
            blackBoxUses: {
                title: "Black Box",
                values: {Helium10_Starter: "{uses} Anwendungen", Helium10_Start_Your_Business: "{uses} Anwendungen"}
            },
            cerebroUses: {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "{uses} Anwendungen pro Tag",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} Anwendungen pro Tag"
                }
            },
            magnetUses: {
                title: "Magnet",
                values: {
                    Helium10_Starter: "{uses} Anwendungen pro Tag",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} Anwendungen pro Tag"
                }
            },
            keywordTracker2Uses: {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "{uses} Keywords", Helium10_Scale_Your_Business: "{uses} Keywords"}
            },
            xrayUses: {title: "Xray", values: {Helium10_Free: "{uses} Launches"}},
            blackBoxProductsUses: {
                title: "Black Box",
                values: {Helium10_Free: "{uses} Anwendungen", Helium10_Starter: "{uses} Anwendungen"}
            },
            listingAnalyzerUses: {
                title: "Listing Analyzer",
                values: {
                    Helium10_Free: "{uses} Suchen / Monat",
                    Helium10_Starter: "{uses} Suchen / Monat",
                    Helium10_Start_Your_Business: "{uses} Suchen / Monat",
                    Helium10_Scale_Your_Business: "{uses} Suchen / Monat"
                }
            },
            salesHistoricalChart: {title: "Historisches Absatz-Diagramm"},
            ppcBid: {title: "Helium 10 Vorgeschlagenes PPC-Gebot"}
        },
        featuresPage: {
            cerebroForWalmart: {
                title: "Cerebro für Walmart",
                subtitle: "Rückwärts-Produktsuche",
                values: {
                    Helium10_Starter: "2 Anwendungen pro Tag",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 Anwendungen pro Tag"
                }
            },
            magnetForWalmart: {
                title: "Magnet für Walmart",
                subtitle: "Keyword-Recherche",
                values: {
                    Helium10_Starter: "2 Anwendungen pro Tag",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 Anwendungen pro Tag"
                }
            },
            xrayForWalmart: {
                title: "Xray für Walmart",
                subtitle: "Chrome-Erweiterung - Produktrecherche",
                values: {
                    Helium10_Starter: "50 Launches",
                    Helium10_Free: "50 Launches",
                    Helium10_Start_Your_Business: "50 Launches"
                }
            },
            profitsForWalmart: {
                title: "Profits für Walmart",
                subtitle: "Dashboard für Finanzanalysen",
                values: {Helium10_Starter: "90 Tage", Helium10_Free: "90 Tage", Helium10_Start_Your_Business: "90 Tage"}
            },
            cerebroForAmazon: {
                title: "Cerebro für Amazon",
                subtitle: "Rückwärts-Produktsuche",
                values: {Helium10_Free: "Demo", Helium10_Starter: "2 Anwendungen pro Tag"}
            },
            magnetForAmazon: {
                title: "Magnet für Amazon",
                subtitle: "Keyword-Recherche",
                values: {Helium10_Free: "Demo", Helium10_Starter: "2 Anwendungen pro Tag"}
            },
            xrayForAmazon: {
                title: "Xray für Amazon",
                subtitle: "Chrome-Erweiterung - Produktrecherche",
                values: {Helium10_Free: "50 Launches", Helium10_Starter: "50 Launches"}
            },
            keywordTrackerForAmazon: {
                title: "Keyword Tracker für Amazon",
                subtitle: "Produktrang-Tracking",
                values: {
                    Helium10_Free: "20 Keywords",
                    Helium10_Starter: "20 Keywords",
                    Helium10_Start_Your_Business: "500 Keywords"
                }
            },
            cerebroForWalmartUses: {
                title: "Cerebro für Walmart",
                subtitle: "Rückwärts-Produktsuche",
                values: {
                    Helium10_Starter: "{uses} Anwendungen pro Tag",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} Anwendungen pro Tag"
                }
            },
            magnetForWalmartUses: {
                title: "Magnet für Walmart",
                subtitle: "Keyword-Recherche",
                values: {
                    Helium10_Starter: "{uses} Anwendungen pro Tag",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} Anwendungen pro Tag"
                }
            },
            xrayForWalmartUses: {
                title: "Xray für Walmart",
                subtitle: "Chrome-Erweiterung - Produktrecherche",
                values: {
                    Helium10_Starter: "{uses} Launches",
                    Helium10_Free: "{uses} Launches",
                    Helium10_Start_Your_Business: "{uses} Launches"
                }
            },
            profitsForWalmartUses: {
                title: "Profits für Walmart",
                subtitle: "Dashboard für Finanzanalysen",
                values: {
                    Helium10_Starter: "{uses} Tage",
                    Helium10_Free: "{uses} Tage",
                    Helium10_Start_Your_Business: "{uses} Tage"
                }
            },
            cerebroForAmazonUses: {
                title: "Cerebro für Amazon",
                subtitle: "Rückwärts-Produktsuche",
                values: {Helium10_Free: "Demo", Helium10_Starter: "{uses} Anwendungen pro Tag"}
            },
            magnetForAmazonUses: {
                title: "Magnet für Amazon",
                subtitle: "Keyword-Recherche",
                values: {Helium10_Free: "Demo", Helium10_Starter: "{uses} Anwendungen pro Tag"}
            },
            xrayForAmazonUses: {
                title: "Xray für Amazon",
                subtitle: "Chrome-Erweiterung - Produktrecherche",
                values: {Helium10_Free: "{uses} Launches", Helium10_Starter: "{uses} Launches"}
            },
            keywordTrackerForAmazonUses: {
                title: "Keyword Tracker für Amazon",
                subtitle: "Produktrang-Tracking",
                values: {
                    Helium10_Free: "{uses} Keywords",
                    Helium10_Starter: "{uses} Keywords",
                    Helium10_Start_Your_Business: "{uses} Keywords"
                }
            }
        },
        titlesModal: {
            blackBoxProductsLimit: {
                title: "Sie haben Ihr Limit für die kostenlose Suche für Black Box erreicht",
                subtitle: "Erhöhe dein Limit und genieße einen größeren Nutzen mit Platinum",
                upgradeButton: "Pläne jetzt vergleichen",
                subtitleCommon: "Erhöhe dein Limit und genieße einen größeren Nutzen mit {plan}"
            },
            blackBoxSalesChartAmazon: {
                title: "Schalte diese und andere großartige Funktionen in BlackBox für Amazon frei",
                subtitle: "Erhöhe dein Limit und genieße einen größeren Nutzen mit {plan}"
            },
            upgradeButton: ""
        },
        upgradeButton: "Plan upgraden",
        upgradeTo: "Upgrade auf {upgradePlan}"
    }, Ue = {copy: "{name} kopieren", copied: "{name} kopiert"}, Oe = {
        cerebro: {
            amazon: "Sie brauchen ein ASIN? Versuchen Sie eins von diesen:",
            walmart: "Sie brauchen ein Walmart Produkt-ID? Versuchen Sie eins von diesen:"
        },
        magnet: {
            amazon: "Du brauchst ein Keyword? Versuche es mit einem von diesen:",
            walmart: "Du brauchst ein Keyword? Versuche es mit einem von diesen:"
        }
    }, Ye = {
        1001: "AUTH_INVALID_TOKEN",
        1002: "AUTH_NO_USER",
        2001: "Ungültiges ASIN-Identifier-Format {asin}",
        2002: "Ungültiger ASIN-Identifier {asin} für Marktplatz {marketplace}",
        2003: "Unerwarteter Serverfehler",
        2004: "Unerwarteter Serverfehler",
        2005: "Unerwarteter Serverfehler",
        2006: "Die Gesamtzahl der Zeichen in allen Sätzen darf nicht mehr als 200.000 betragen.",
        2007: "Unerwarteter Serverfehler",
        3001: "Haupt-ASIN-Suchdaten nicht gefunden",
        3002: "Hauptprodukt-Suchdaten nicht gefunden",
        3003: "Abkürzung für folgenden Marktplatz nicht gefunden: {marketplace}",
        4001: "Unerwarteter Serverfehler",
        4002: "Unerwarteter Serverfehler",
        4003: "Unerwarteter Serverfehler",
        4004: "Unerwarteter Serverfehler",
        4005: "Unerwarteter Serverfehler",
        4006: "Unerwarteter Serverfehler",
        4007: "Unerwarteter Serverfehler",
        5001: "Leere Suchdaten",
        5002: "Hauptproduktdaten oder alle Daten leer",
        5003: "Leere Suchdaten",
        5004: "Keine Daten für Produkt",
        5005: "Unerwarteter Serverfehler",
        5006: "Unerwarteter Serverfehler",
        6001: "Nicht eingefügte Phrasen",
        6002: "Nicht eingefügte Phrasen",
        6003: "Keine häufig von Benutzern verwendeten Begriffe vorhanden",
        6004: "Kein Client mit erforderlichem Marktplatz",
        6005: "Verlauf kann nicht angezeigt werden. Planupgrade für Helium 10 erforderlich.",
        6006: "Unerwarteter Serverfehler",
        6007: "Unerwarteter Serverfehler",
        6008: "Produktdetails für ID {productId} nicht gefunden",
        6009: "Keine Ergebnisse für Keywords!",
        6010: "Datei wurde nicht hochgeladen.",
        6011: "Suchmodell kann nicht gespeichert werden",
        6012: "Modell kann nicht gelöscht werden",
        6013: "Suchmodell existiert nicht",
        6014: "Keine gängigen Wörter für diesen Benutzer vorhanden",
        6015: "Gängige Wörter werden nicht gelöscht",
        6016: "Artikel für Rang-AVG-Vorschlag existiert nicht",
        6017: "Artikel für Rang-Anzahl-Vorschlag existiert nicht",
        6018: "Vorgeschlagener Positionsartikel für Filter existiert nicht",
        6019: "Gesponserter Durchschnittsrang-Schlüssel existiert nicht",
        6020: "Unbekannter Serverfehler",
        6021: "Gesponserter Positionsartikel für Filter existiert nicht",
        6022: "Phrasenschlüssel existiert nicht in Artikel",
        6023: "Positionsbereich-Artikel existiert nicht",
        6024: "Konkurrenzleistungsscore-Artikel existiert nicht",
        6025: "Organischer-Rang-Artikel existiert nicht",
        6026: "Übereinstimmungstyp-Artikel existiert nicht",
        6027: "Phrasenartikel ist leer oder existiert nicht",
        6028: "Rang-Wettbewerber-Artikel existiert nicht",
        6029: "Relativer-Rang-Artikel existiert nicht",
        6030: "Positionsrang-Artikel existiert nicht",
        6031: "Ergebnisnummer-Artikel für Filter existiert nicht",
        6032: "Kompetitiv-AVG-Artikel existiert nicht",
        6033: "Wert für Trend des Suchvolumens existiert nicht",
        6034: "Artikel für Filtern nach Häufigkeit des Titels existiert nicht",
        6035: "Positionsbereich-Artikel ist leer oder existiert nicht",
        6036: "Aktueller ASIN-Artikel ist leer oder existiert nicht",
        6037: "Artikel ist leer oder existiert nicht",
        6038: "Suchvolumen-Artikel für Amazon-Filter existiert nicht",
        6039: "Impressionsartikel in Suchvolumenfilter existiert nicht",
        6040: "Nachverfolgte Produkt-ID existiert nicht",
        6041: "Aktuelles Produkt existiert nicht",
        6042: "Keine Ergebnisanzahl",
        6043: "Die Phrase existiert nicht",
        6044: "Filter kann keine Parameter vom Typ „includes-all“ und „includes-any“ umfassen, die wahr oder falsch entsprechen",
        6045: "Wert für Filter „Häufigstes Verkäuferland“ existiert nicht",
        6046: "Rückwärtssuche kann nicht konfiguriert werden",
        6047: "Export für vergangene Suchen nicht möglich. Planupgrade für Helium 10 erforderlich",
        6049: "Filter ist nicht konfiguriert",
        6050: "Externer Service funktioniert nicht oder hat ungültige Daten ausgegeben",
        7001: "Es müssen Ergebnisse für mindestens 1 Wettbewerberprodukt vorliegen",
        7002: "Es konnten keine Phrasen über die angegebene ASIN abgerufen werden",
        7003: "Keine Artikel in Suchergebnissen",
        7004: "Sortierrichtung falsch",
        7008: "Falsches Produkt in API gefunden",
        7009: "ASIN für ClickHouse-Rückwärtssuche fehlen",
        7010: "Auszuwählende Spalten für ClickHouse-Rückwärtssuche fehlen",
        7011: "Auszuwählende Spalten für ClickHouse-Rückwärtssuche falsch formatiert",
        7012: "ASIN für ClickHouse-Rückwärtssuche falsch formatiert",
        7013: "Produkt-ID für Walmart inkorrekt",
        7014: "Es ist ein Fehler aufgetreten: ' . json_encode($errors, JSON_THROW_ON_ERROR)",
        7015: "Sie können nicht mehr als 50 Keywords durchsuchen. Planupgrade für Helium 10 erforderlich",
        7016: "Sie können nicht mehr als 200 Keywords durchsuchen",
        7017: "Ihr Plan erlaubt Ihnen nicht, Keywords hochzuladen",
        8001: "Unbekannte Domain {domain}",
        8002: "Unbekannte Marktplatz-ID: {marketplaceId}",
        8003: "Unbekannte Kurz-ID {shortId}",
        8004: "Unbekannter Marktplatz: {marketplace}",
        8005: "Unerwarteter Serverfehler",
        unknown: "Unbekannter Serverfehler",
        "rta-1001": "AUTH_INVALID_TOKEN",
        "rta-1002": "AUTH_NO_USER",
        "rta-2001": "Ungültiges ASIN-Identifier-Format {asin}",
        "rta-2002": "Ungültiger ASIN-Identifier {asin} für Marktplatz {marketplace}",
        "rta-2003": "Unerwarteter Serverfehler",
        "rta-2004": "Unerwarteter Serverfehler",
        "rta-2005": "Unerwarteter Serverfehler",
        "rta-2006": "Die Gesamtzahl der Zeichen in allen Sätzen darf nicht mehr als 200.000 betragen.",
        "rta-2007": "Unerwarteter Serverfehler",
        "rta-3001": "Haupt-ASIN-Suchdaten nicht gefunden",
        "rta-3002": "Hauptprodukt-Suchdaten nicht gefunden",
        "rta-3003": "Abkürzung für folgenden Marktplatz nicht gefunden: {marketplace}",
        "rta-4001": "Unerwarteter Serverfehler",
        "rta-4002": "Unerwarteter Serverfehler",
        "rta-4003": "Unerwarteter Serverfehler",
        "rta-4004": "Unerwarteter Serverfehler",
        "rta-4005": "Unerwarteter Serverfehler",
        "rta-4006": "Unerwarteter Serverfehler",
        "rta-4007": "Unerwarteter Serverfehler",
        "rta-5001": "Leere Suchdaten",
        "rta-5002": "Hauptproduktdaten oder alle Daten leer",
        "rta-5003": "Leere Suchdaten",
        "rta-5004": "Keine Daten für Produkt",
        "rta-5005": "Unerwarteter Serverfehler",
        "rta-5006": "Unerwarteter Serverfehler",
        "rta-6001": "Nicht eingefügte Phrasen",
        "rta-6002": "Nicht eingefügte Phrasen",
        "rta-6003": "Keine häufig von Benutzern verwendeten Begriffe vorhanden",
        "rta-6004": "Kein Client mit erforderlichem Marktplatz",
        "rta-6005": "Verlauf kann nicht angezeigt werden. Planupgrade für Helium 10 erforderlich.",
        "rta-6006": "Unerwarteter Serverfehler",
        "rta-6007": "Unerwarteter Serverfehler",
        "rta-6008": "Produktdetails für ID {productId} nicht gefunden",
        "rta-6009": "Keine Ergebnisse für Keywords!",
        "rta-6010": "Datei wurde nicht hochgeladen.",
        "rta-6011": "Suchmodell kann nicht gespeichert werden",
        "rta-6012": "Modell kann nicht gelöscht werden",
        "rta-6013": "Suchmodell existiert nicht",
        "rta-6014": "Keine gängigen Wörter für diesen Benutzer vorhanden",
        "rta-6015": "Gängige Wörter werden nicht gelöscht",
        "rta-6016": "Artikel für Rang-AVG-Vorschlag existiert nicht",
        "rta-6017": "Artikel für Rang-Anzahl-Vorschlag existiert nicht",
        "rta-6018": "Vorgeschlagener Positionsartikel für Filter existiert nicht",
        "rta-6019": "Gesponserter Durchschnittsrang-Schlüssel existiert nicht",
        "rta-6020": "Unbekannter Serverfehler",
        "rta-6021": "Gesponserter Positionsartikel für Filter existiert nicht",
        "rta-6022": "Phrasenschlüssel existiert nicht in Artikel",
        "rta-6023": "Positionsbereich-Artikel existiert nicht",
        "rta-6024": "Konkurrenzleistungsscore-Artikel existiert nicht",
        "rta-6025": "Organischer-Rang-Artikel existiert nicht",
        "rta-6026": "Übereinstimmungstyp-Artikel existiert nicht",
        "rta-6027": "Phrasenartikel ist leer oder existiert nicht",
        "rta-6028": "Rang-Wettbewerber-Artikel existiert nicht",
        "rta-6029": "Relativer-Rang-Artikel existiert nicht",
        "rta-6030": "Positionsrang-Artikel existiert nicht",
        "rta-6031": "Ergebnisnummer-Artikel für Filter existiert nicht",
        "rta-6032": "Kompetitiv-AVG-Artikel existiert nicht",
        "rta-6033": "Wert für Trend des Suchvolumens existiert nicht",
        "rta-6034": "Artikel für Filtern nach Häufigkeit des Titels existiert nicht",
        "rta-6035": "Positionsbereich-Artikel ist leer oder existiert nicht",
        "rta-6036": "Aktueller ASIN-Artikel ist leer oder existiert nicht",
        "rta-6037": "Artikel ist leer oder existiert nicht",
        "rta-6038": "Suchvolumen-Artikel für Amazon-Filter existiert nicht",
        "rta-6039": "Impressionsartikel in Suchvolumenfilter existiert nicht",
        "rta-6040": "Nachverfolgte Produkt-ID existiert nicht",
        "rta-6041": "Aktuelles Produkt existiert nicht",
        "rta-6042": "Keine Ergebnisanzahl",
        "rta-6043": "Die Phrase existiert nicht",
        "rta-6044": "Filter kann keine Parameter vom Typ „includes-all“ und „includes-any“ umfassen, die wahr oder falsch entsprechen",
        "rta-6045": "Wert für Filter „Häufigstes Verkäuferland“ existiert nicht",
        "rta-6049": "Filter ist nicht konfiguriert",
        "rta-6046": "Rückwärtssuche kann nicht konfiguriert werden",
        "rta-6047": "Export für vergangene Suchen nicht möglich. Planupgrade für Helium 10 erforderlich",
        "rta-6050": "Externer Service funktioniert nicht oder hat ungültige Daten ausgegeben",
        "rta-7001": "Es müssen Ergebnisse für mindestens 1 Wettbewerberprodukt vorliegen",
        "rta-7002": "Es konnten keine Phrasen über die angegebene ASIN abgerufen werden",
        "rta-7003": "Keine Artikel in Suchergebnissen",
        "rta-7004": "Sortierrichtung falsch",
        "rta-7008": "Falsches Produkt in API gefunden",
        "rta-7009": "ASIN für ClickHouse-Rückwärtssuche fehlen",
        "rta-7010": "Auszuwählende Spalten für ClickHouse-Rückwärtssuche fehlen",
        "rta-7011": "Auszuwählende Spalten für ClickHouse-Rückwärtssuche falsch formatiert",
        "rta-7012": "ASIN für ClickHouse-Rückwärtssuche falsch formatiert",
        "rta-7013": "Produkt-ID für Walmart inkorrekt",
        "rta-7014": "Es ist ein Fehler aufgetreten: ' . json_encode($errors, JSON_THROW_ON_ERROR)",
        "rta-7015": "Du kannst nicht mehr als 50 Keywords durchsuchen. Planupgrade für Helium 10 erforderlich",
        "rta-7016": "Du kannst nicht mehr als 200 Keywords durchsuchen",
        "rta-8001": "Unbekannte Domain {domain}",
        "rta-8002": "Unbekannte Marktplatz-ID: {marketplaceId}",
        "rta-8003": "Unbekannte Kurz-ID {shortId}",
        "rta-8004": "Unbekannter Marktplatz: {marketplace}",
        "rta-8005": "Unerwarteter Serverfehler",
        "rta-7017": "Ihr Plan erlaubt Ihnen nicht, Keywords hochzuladen",
        "rta-2010": "Ungültige Sortiereigenschaft",
        "rta-2011": "Ungültiger Filterwert",
        "rta-2012": "Ungültiger Titel einschl. Keywordlänge",
        "rta-2013": "Ungültiger Titel ausschl. Keywordlänge",
        "rta-7020": "Name ist bereits vergeben",
        "rta-22001": "Speichern der Filtervoreinstellung fehlgeschlagen. Die maximale Länge für den Namen einer Filtervoreinstellung beträgt 255 Zeichen.",
        "rta-no-prev-searches": "Keine früheren Suchen vorhanden",
        "rta-0": "Unerwarteter Fehler"
    }, Ge = {
        pageTitle: "Elite Analytics",
        title: "Elite Analytics",
        description: "Analysieren Sie Ihre Keywords und finden Sie Nischen",
        learnTooltip: "Schauen Sie sich Videos an und lesen Sie Artikel, die Ihnen helfen, Magnet zu meistern",
        totalDensity: "Häufigkeit des Titels",
        totalDensityTooltip: "Prozentsatz der Ergebnisse mit einer Titelhäufigkeit unter 12",
        totalSearchVolume: "Trend des Suchvolumens",
        totalSearchVolumeTooltip: "Prozentsatz der Ergebnisse mit einem steigenden Suchvolumentrend",
        totalAverageReview: "Zahlreiche Bewertungen",
        totalAverageReviewTooltip: "Prozentsatz der Ergebnisse mit zahlreichen Bewertungen liegt über 6",
        totalMostFrequent: "Häufigstes Verkäuferland",
        totalMostFrequentTooltip: "Häufigstes Verkäuferland Ihrer nachfolgenden Ergebnisse.",
        backToUpload: "Zurück zu Upload",
        showResults: "Ergebnisse anzeigen",
        tryAgain: "Versuch es noch einmal",
        modals: {
            importingTitle: "Import",
            validatedTitle: "Datei validiert",
            limitExceededTitle: "Limit überschritten",
            failedTitle: "Import fehlgeschlagen",
            validatedDescription: "Sie haben {requestedUses} der {remainingUses} Keyword-Suchen geladen, die entsprechend Ihres Plans für diesen Monat verbleiben.",
            limitExceededDescription: {
                one: "Du hast {remainingUses} von {totalUses} Keyword-Suchen in deinem monatlichen Limit übrig. Deine Datei hat {requestedUses} Zeilen, wir werden die oberste {count} Zeile in der aktuellen Datei verwenden, um deine Ergebnisse zu analysieren.",
                other: "Du hast {remainingUses} von {totalUses} Keyword-Suchen in deinem monatlichen Limit übrig. Deine Datei hat {requestedUses} Zeilen, wir werden die obersten {count} Zeilen in der aktuellen Datei verwenden, um deine Ergebnisse zu analysieren."
            },
            failedDescription: "Die Formatierung wurde nicht erkannt. Tipps zur Formatierung Ihrer Datei finden Sie im entsprechenden {link}.",
            KnowledgeBaseArticle: "Knowledge-Base-Artikel"
        },
        history: {
            descriptionTable: "Wählen Sie einen früheren Elite Analytics-Bericht aus und laden Sie ihn erneut, ohne eine der Ihnen zugeteilten Suchen zu verwenden. ",
            columns: {
                fileName: "Dateiname",
                keywordCount: "Anzahl der Keywords",
                reportRunDate: "Datum der Berichterstellung"
            }
        },
        landing: {
            title: "Laden Sie Ihre Keyword-Liste hoch, um herauszufinden, welche das meiste Potenzial haben",
            description: "Laden Sie monatlich bis zu 2000 Reihen Black Box-Keywords, Amazon Brand Analytics-Berichte, My List-Keywords oder eine von Ihnen kuratierte Liste hoch, um hilfreiche Helium 10-Metriken zum Erkennen neuer Geschäftschancen zu nutzen.<br/><br/>Der Bericht bietet Ihnen Einsicht in folgende Bereiche: Häufigkeit des Titels, Suchvolumen (inkl. Trend), Anzahl guter Bewertungen, Durchschnittliche Bewertungsanzahl und häufigstes Verkäuferland.",
            buttonUpload: "Keyword-Bericht hochladen",
            viewSample: {
                curiousAbout: "Sie möchten wissen, wie der Bericht aussieht?",
                view: "Ansehen",
                sample: "Beispiel"
            },
            keywords: {
                one: "{count}/{total} monatliches Keyword verbleiben",
                other: "{count}/{total} monatliche Keywords verbleiben"
            },
            titleModal: "Elite Analytics-Beispielbericht",
            videoTitle: "Sie sind nicht sicher, wie der Bericht zu formatieren ist?",
            videoButton: "Sehen Sie sich unser Demo-Video an",
            upsell: {
                title: "Monatliches Limit erreicht",
                description: "Sie haben Ihr monatliches Limit von 2000 Keyword-Suchen erreicht. Sie finden Ihre vergangenen Keyword-Berichte über die Verlaufsschaltfläche rechts oben in dieser Ansicht.<br/><br/>Kontaktieren Sie unser Vertriebsteam, um zu erfahren, wie Sie Ihr monatliches Keyword-Limit erhöhen.",
                button: "Kontakt Vertrieb"
            },
            notElite: {
                title: "Erschließe dir wichtige Einblicke mit Elite Analytics",
                description: "Elite Analytics ermöglicht es dir, bis zu 2000 Zeilen von Black Box Keywords, Amazon Brand Analytics Report, My List Keywords oder deine eigene Liste hochzuladen, um die wichtigsten Helium 10-Metriken aufzudecken und neue Möglichkeiten pro Monat zu identifizieren.",
                learnMore: "Mehr über Elite",
                subDescription: "Der Bericht bietet dir Einsicht in folgende Bereiche: Verkaufszahlen nach Keyword, Häufigkeit des Titels, Suchvolumen (inkl. Trend), Anzahl guter Bewertungen, Durchschnittliche Bewertungsanzahl und häufigstes Verkäuferland. Bist du neugierig auf den Bericht?",
                sample: "Beispiel."
            }
        },
        filter: {
            exactTitleMatchProductsCount: {
                title: "Häufigkeit des Titels",
                tooltip: "Anzahl der Produkte auf Seite 1, die das gesuchte Keyword in ihrem Titel enthalten"
            },
            impressionExact30: {
                title: "Suchvolumen",
                tooltip: "Geschätzte Anzahl der monatlichen Suchanfragen für diese Keywordphrase"
            },
            searchVolumeTrend30: {title: "Trend des Suchvolumens", tooltip: "In den letzten 30 Tagen"},
            productsWithReviewsCount: {
                title: "Zahlreiche Bewertungen",
                tooltip: "Anzahl der Ergebnisse in den Top 12 mit über 1000 Bewertungen"
            },
            medianReviews: {
                title: "Durchschnittliche Anzahl von Bewertungen",
                tooltip: "Durchschnittliche Anzahl von Bewertungen der Top 12"
            },
            mostFrequentSellerCountryCode: {
                title: "Häufigstes Verkäuferland",
                tooltip: "Häufigstes Verkäuferland in den Top 50",
                placeholder: "Nicht ausgewählt"
            }
        },
        table: {
            keyword: {title: "Keywords"},
            exactTitleMatchProductsCount: {
                title: "Häufigkeit des Titels",
                tooltip: "Anzahl der Produkte auf Seite 1, die das gesuchte Keyword in ihrem Titel enthalten"
            },
            impressionExact30: {
                title: "Suchvolumen",
                tooltip: "Geschätzte Anzahl der monatlichen Suchanfragen für diese Keywordphrase"
            },
            searchVolumeTrend30: {title: "Trend des Suchvolumens", tooltip: "In den letzten 30 Tagen"},
            productsWithReviewsCount: {
                title: "Zahlreiche Bewertungen",
                tooltip: "Anzahl der Ergebnisse in den Top 12 mit über 1000 Bewertungen"
            },
            medianReviews: {
                title: "Durchschnittliche Bewertungen",
                tooltip: "Durchschnittliche Anzahl von Bewertungen der Top 12"
            },
            topSellerCountry: {title: "Häufigstes Verkäuferland", tooltip: "Häufigstes Verkäuferland in den Top 50"},
            title: {one: "{count} Keyword", other: "{count} Keyword"},
            titleSelected: {one: "{count} Keyword ausgewählt", other: "{count} Keywords ausgewählt"},
            monthlySales: {
                title: "Verkaufszahlen nach Keyword",
                tooltip: "Geschätzte monatliche Verkaufszahlen nach Keyword"
            }
        },
        distributionByCountryModal: {title: "Häufigstes Verkäuferland: {keyword}"},
        beta: {marketplaceTooptip: "Die Beta-Version umfasst den US-Amerikanischen Marktplatz."},
        upload: {
            uploadStage: {
                title: "Keyword-Berichtsdatei hochladen",
                description: "Laden Sie bis zu 2000 Zeilen Black Box-Keywords, Amazon Brand Analytics-Berichte, My List-Keywords oder Ihre eigene benutzerdefinierte Datei hoch, um neue Geschäftschancen zu entdecken.",
                fileRequirements: "Dateianforderungen",
                list: {
                    item1: "Mit einem Keyword oder einer Keywordphrase pro Zeile vorausgefüllt",
                    item2: "CSV-Dateiformat"
                },
                footer: {
                    part1: "Sie benötigen Hilfe? Weitere Einzelheiten finden Sie in unserem entsprechenden",
                    part2: "Knowledge-Base-Artikel",
                    part3: "für mehr Details."
                },
                browse: "Durchsuchen",
                uploadFile: "Datei hochladen",
                noFileSelected: "Keine Datei ausgewählt"
            }
        },
        tooltips: {
            searchVolume: {
                green: "„Grün“ zeigt einen positiven 30-Tage-Trend an",
                red: "„Rot“ zeigt einen negativen 30-Tage-Trend an"
            },
            highReviewCount: {
                green: "„Grün“ zeigt an, dass weniger als 5 der Top-12-Ergebnisse über mehr als 1000 Bewertungen verfügen.",
                yellow: "„Gelb“ zeigt an, dass 5 bis 6 der Top-12-Ergebnisse über mehr als 1000 Bewertungen verfügen.",
                red: "„Rot“ zeigt an, dass 6 der Top-12-Ergebnisse über mehr als 1000 Bewertungen verfügen."
            },
            medianReviewCount: {
                green: "„Grün“ zeigt eine Bewertungsanzahl von unter 200 an.",
                yellow: "„Gelb“ zeigt eine Bewertungsanzahl zwischen 200 und 800 an.",
                red: "„Rot“ zeigt eine Bewertungsanzahl von über 800 an."
            }
        }
    }, $e = {
        title: "Black Box",
        description: "Recherchieren Sie Produkte und erkennen Sie Chancen",
        tabs: {
            products: {
                name: "Produkte",
                description: "Zu vertreibende Produkte durch die Auswertung von Produkten, Keywords, Mitbewerbern und mehr finden",
                tooltip: "Finde mit höchst innovativen Filtern die meistverkauften Produkte, um potenzielle Produkte für den Verkauf auszuwählen."
            },
            keywords: {
                name: "Keywords",
                description: "---",
                tooltip: "Entdecke beliebte Keywords, indem du verschiedene Filter ausprobierst. Die richtigen Keywords auszuwählen, kann dir helfen, das richtige Produkt zu finden."
            },
            competitors: {
                name: "Wettbewerber",
                description: "---",
                tooltip: "Erhalte Einblick in wichtige Daten zu Konkurrenten, etwa deren Absatz, Markt, Marke, Verkäufer oder Listings."
            },
            niche: {
                name: "Nische",
                description: "---",
                tooltip: "Entdecke ein Segment eines größeren Markts, das über dein eindeutiges Keyword definiert werden kann."
            },
            productTargeting: {
                name: "Produkt-Targeting",
                description: "---",
                tooltip: "Optimiere dein Produkt-Targeting, indem du verschiedene Quellen überprüfst: „Häufig zusammen gekauft“, „Vorschläge von Amazon“ und „Kunde hat auch gekauft“."
            },
            eliteAnalytics: {name: "Elite Analytics", description: "Recherchieren Sie Produkte und erkennen Sie Chancen"},
            abaTopSearchTerms: {name: "ABA Top Search Terms"}
        },
        buttons: {
            saveAsFilterPreset: "Als Filtervoreinstell. speichern",
            search: "Suchen",
            filterLibrary: "Filterbibliothek",
            createYourOwnPresets: "Erstelle deine eigenen Voreinstellungen",
            returnToPreviousVersion: "Zurück zur vorherigen Version",
            restoreLastSearch: "Letzte Suche wiederherstellen",
            addToMyList: "Zu meiner Liste hinzufügen",
            removeFromMyList: "Von meiner Liste entfernen",
            runInCerebro: "Cerebro ausführen",
            runInListingAnalyzer: "Listing Analyzer ausführen",
            runInListingAnalyzerTooltip: "Wähle {maxAsins} Produkte zur Analyse der Listing-Qualität aus"
        },
        products: {
            filterGroups: {product: "Produkt", competitors: "Wettbewerber", sales: "Absatz"},
            fields: {
                categories: {
                    label: "Kategorie & Unterkategorie",
                    tooltip: "Verfügbare ungekennzeichnete Produktkategorien",
                    placeholder: "Eine oder mehrere Kategorien und Unterkategorien auswählen"
                },
                reviewCount: {
                    label: "Bewertungsanzahl",
                    tooltip: "Gesamtzahl der Kundenbewertungen",
                    chip: "Bewertungsanzahl"
                },
                reviewRating: {
                    label: "Bewertungsdurchschnitt",
                    tooltip: "Amazon-Kundenbewertungen von schlecht (1) bis hervorragend (5)"
                },
                salesRank: {
                    label: "Best Seller Rank (BSR)",
                    tooltip: "Von Amazon vergebener Rang basierend auf kürzlichen und historischen Verkäufen",
                    chip: "Verkaufsrang"
                },
                shippingSizeTier: {label: "Versandgröße", tooltip: "Die Produktgröße bestimmt die FBA-Versandkosten"},
                weight: {
                    label: "Gewicht (Pfd)",
                    tooltip: "Gesamtgewicht von Produkt und Paket",
                    chip: "Gewicht",
                    tableTooltip: "Paketgewicht (Pfd)",
                    unit: "Pfd"
                },
                fulfillment: {
                    label: "Fulfillment",
                    tooltip: "Lager- und Versandart<br/>Erfüllt durch Amazon (FBA = Fulfilled by Amazon)<br/>Erfüllt durch Händler (FBM = Fulfilled by Merchant)<br/>Verkauft durch Amazon (Amazon = Sold by Amazon) ",
                    chip: {title: "Fulfillment"}
                },
                numberOfImages: {
                    label: "Anzahl der Bilder",
                    tooltip: "Anzahl der Bilder auf einer Produkt Listing",
                    chip: "Anzahl der Bilder"
                },
                variationCount: {
                    label: "Variantenanzahl",
                    tooltip: "Anzahl der Produktvariationen",
                    chip: "Variantenanzahl"
                },
                titleKeyword: {
                    label: "Titelkeywords",
                    tooltip: "Nur Keywordsuche nach Produkttiteln",
                    placeholder: "Beispiel: rotes Kleid"
                },
                titleExcludeKeyword: {
                    label: "Titelkeywords ausschließen",
                    tooltip: "Produkte ausschließen, die die eingegebenen Keywords im Titel enthalten (getrennt durch Kommas)",
                    chip: "Titelkeyword ausschließen",
                    placeholder: "Bsp.: rot, blau"
                },
                numberOfSellers: {
                    label: "Anzahl der Verkäufer",
                    tooltip: "Anzahl der aktiven Verkäufer",
                    chip: "Anzahl der Verkäufer"
                },
                brandInclude: {
                    label: "Exakte Markensuche",
                    tooltip: 'Bestimmte Markennamen, wobei mehrere Namen durch Kommas voneinander abgegrenzt werden. Wenn ein Markenname ein Komma enthält, setzt du den Namen bitte in Anführungszeichen, um Suchergebnisse zu erhalten. Beispiel: <b>"ABC GmbH"</b>',
                    placeholder: "Bsp.: Apfel",
                    chip: "Einschließlich Marke"
                },
                brandExclude: {
                    label: "Marken ausschließen",
                    tooltip: 'Schließe bestimmte Markennamen aus. Mehrere Namen können durch Kommas voneinander abgegrenzt werden. Wenn ein Markenname ein Komma enthält, setzt du den Namen bitte in Anführungszeichen, um Suchergebnisse zu erhalten. Beispiel: <b>"ABC GmbH"</b>',
                    chip: "Ausschließlich Marke",
                    placeholder: "Bsp.: Belkin"
                },
                sellerInclude: {
                    label: "Exakte Verkäufersuche",
                    tooltip: 'Bestimmte Verkäufernamen, wobei mehrere Namen durch Kommas voneinander abgegrenzt werden. Wenn ein Verkäufername ein Komma enthält, setzt du den Namen bitte in Anführungszeichen, um Suchergebnisse zu erhalten. Beispiel: <b>"ABC GmbH"</b>',
                    chip: "Einschließlich Verkäufer",
                    placeholder: "Bsp.: Anker"
                },
                sellerExclude: {
                    label: "Verkäufer ausschließen",
                    tooltip: 'Schließe bestimmte Verkäufernamen aus. Mehrere Namen können durch Kommas voneinander abgegrenzt werden. Wenn ein Verkäufername ein Komma enthält, setzt du den Namen bitte in Anführungszeichen, um Suchergebnisse zu erhalten. Beispiel: <b>"ABC GmbH"</b>',
                    chip: "Ausschließlich Verkäufer",
                    placeholder: "Bsp.: Satechi"
                },
                price: {
                    label: "Preis",
                    tooltip: "Preis, zu dem das Produkt verkauft wird",
                    tableTooltip: "Preis im Verlauf mit Preisentwicklung",
                    priceTooltip: "Aktueller Preis",
                    priceTrendTooltip: "90 Tage Preistrend",
                    chip: "Preis"
                },
                priceChange: {
                    label: "Umsatzänderung (%)",
                    tooltip: "Prozentuale Veränderung in den letzten 90 Tagen",
                    chip: "Preisänderung"
                },
                monthlySales: {
                    label: "Monatliche Verkäufe (Einheiten)",
                    tooltip: "Geschätzte Anzahl der verkauften Einheiten in den letzten 30 Tagen",
                    tableLabel: "Monatlicher Umsatz",
                    chip: "Monatlicher Umsatz",
                    tableTooltip: "Monatsverkäufe im Verlauf mit Absatzentwicklung",
                    salesTooltip: "Monatliche Verkäufe (Einheiten)",
                    salesTrendTooltip: "90-Tage-Verkaufstrend"
                },
                salesYearOverYear: {
                    label: "Umsatz im Jahresvergleich (%)",
                    tooltip: "Prozentuale Veränderung in den letzten 12 Monaten",
                    chip: "Umsatz Jahr für Jahr"
                },
                bestSalesPeriod: {
                    label: "Bester Verkaufsmonat",
                    tooltip: "Kalendermonat, in dem ein Produkt sein höchstes Verkaufsvolumen verzeichnet",
                    placeholder: "Datum eingeben",
                    tableLabel: "Bester Verkaufszeitraum"
                },
                salesToReviews: {
                    label: "Verhältnis von Verkäufen zu Bewertungen",
                    tooltip: "Monatliche Verkäufe (Einheiten) / Gesamtzahl der Bewertungen",
                    tableLabel: "Verkäufe per Bewertung",
                    chip: "Verkäufe per Bewertung"
                },
                monthlyRevenue: {
                    label: "Monatlicher Umsatz",
                    tooltip: "Geschätzter Umsatz für ein Produkt in den letzten 30 Tagen",
                    chip: "Monatlicher Umsatz"
                },
                salesChange: {
                    label: "Umsatzänderung (%)",
                    tooltip: "Prozentuale Veränderung des monatlichen Verkäufe in den letzten 90 Tagen",
                    chip: "Umsatzänderung"
                },
                product: {label: "Produkt", tooltip: "Tooltip erforderlich"},
                categoryBSR: {
                    label: "Kategorie BSR",
                    tooltip: "Kategorie Best Seller Rank (BSR)",
                    mainCategoryTooltip: "Hauptkategorie BSR",
                    subcategoryTooltip: "Unterkategorie BSR",
                    subcategoryTemporaryTooltip: "Unterkategorie"
                },
                monthlySalesTable: {
                    label: "Monatlicher Umsatz",
                    tooltip: "Geschätzte Anzahl der verkauften Einheiten in den letzten 30 Tagen"
                },
                reviews: {
                    label: "Bewertungen",
                    tooltip: "Zahl der Rezensionen mit Bewertung",
                    numberOfReviewTooltip: "Gesamtzahl der Kundenbewertungen für ein Produkt",
                    reviewRatingTooltip: "Bewertungsdurchschnitt"
                },
                seller: {
                    label: "Verkäufer",
                    tooltip: "Name und Nummer des Verkäufers",
                    sellerNameTooltip: "Verkäufername",
                    numberOfSellersTooltip: "Anzahl der aktiven Verkäufer"
                },
                lastYearSales: {
                    label: "Absatz des Vorjahres",
                    tooltip: "Absatz des Vorjahres mit Verkaufstrend",
                    salesTooltip: "Absatz des Vorjahres (Einheiten)",
                    salesYearOverYearTooltip: "Umsatz Jahr für Jahr"
                },
                shippingDetails: {
                    label: "Versandinformationen",
                    tooltip: "Versandgrößenstufen mit Maßen",
                    productSizeTooltip: "Die Produktgröße bestimmt die FBA-Versandkosten",
                    dimensionsTooltip: "Paketabmessungen (Zoll)"
                },
                storageFee: {label: "Lagergebühr", tooltip: "Lagergebühr (1.000 Einheiten/Monat)"},
                "Best Sales Period": {label: "Bester Verkaufszeitraum", tooltip: "Tooltip erforderlich"},
                age: {
                    label: "Jahre (Monat)",
                    tooltip: "Durchschnittliches Listingalter für alle Top-Produkte",
                    filterLabel: "Alter des Listing (Monaten)",
                    filterTooltip: "Alter des Listing in Monaten",
                    chip: "Alter des Listing"
                },
                titleIncludeKeyword: {
                    label: "Titelkeywords",
                    tooltip: "Nur Keywordsuche nach Produkttiteln",
                    placeholder: "Beispiel: rotes Kleid",
                    chip: "Titel-Keyword"
                },
                category: {
                    label: "Kategorie & Unterkategorie",
                    tooltip: "Verfügbare ungekennzeichnete Produktkategorien",
                    placeholder: "Eine oder mehrere Kategorien und Unterkategorien auswählen",
                    chip: {title: "Kategorie", subtitle: "Unterkategorie"}
                },
                reviewsRating: {
                    label: "Bewertungsdurchschnitt",
                    tooltip: "Amazon-Kundenbewertungen von schlecht (1) bis hervorragend (5)",
                    chip: "Bewertungen Bewertung"
                },
                sizeTier: {chip: {title: "Versandgröße"}},
                bestMonth: {
                    label: "Bester Verkaufsmonat",
                    tooltip: "Kalendermonat, in dem ein Produkt sein höchstes Verkaufsvolumen verzeichnet",
                    placeholder: "Datum eingeben",
                    chip: "Bester Verkaufsmonat",
                    tableLabel: "Bester Verkaufszeitraum",
                    tableTooltip: "Kalendermonat, in dem ein Produkt sein höchstes Verkaufsvolumen verzeichnet"
                },
                brand: {label: "Brand", tooltip: "Brand Names"}
            },
            common: {anyCategory: "Jede Kategorie", anyCategorySimple: "jede Kategorie"},
            filterTabs: {simple: "Einfach", advanced: "Erweiterte", advancedTooltip: "Text erforderlich"},
            simple: {
                title: "Beantworten Sie diese Fragen, um ein Produkt zu finden",
                subtitle: "Ich möchte ein Produkt verkaufen…",
                inThe: "In dem",
                marketplaceFor: "Marktplatz für",
                thatNeeds: "Es erfordert Folgendes",
                improvementRange: "(Verbesserungsbereich)",
                improvement: "Verbesserung,",
                competitionRange: "(Wettbewerbsbereich)",
                whereCompetitionIs: "wo die Mitbewerber stehen",
                priceRange: "(Preisbereich)",
                iWantToSellMyProductFor: "Ich möchte mein Produkt verkaufen für",
                monthlyRevenueOptions: "(monatliche Umsatzoptionen)",
                withMonthlyRevenueOf: "mit einem monatlichen Umsatz von",
                marketplace: "Marktplatz",
                for: "für",
                price: "(Preisbereich)",
                monthlyRevenue: "(monatliche Umsatzoptionen)"
            },
            advanced: {
                titlePart1: "Finden Sie Produkte auf",
                titlePart2: "die deinen Kriterien entsprechen",
                presetsTitle: "Verwende eine Filtervoreinstellung, um deine Suche zu beschleunigen:"
            },
            result: {
                title1: "Produkte auf",
                title2: "die deinen Kriterien entsprechen",
                editFilters: "Filter bearbeiten",
                titleTable: "Es werden {from}-{to} von {total} Artikeln angezeigt",
                titleTableSelected: "{selected} von {total} Artikeln ausgewählt",
                advanced: "Erweiterte Produktdaten anzeigen"
            },
            chartTitles: {
                bsr: "Best Sellers Rank: {asin}",
                price: "Preis: {asin}",
                sales: "Umsatz: {asin}",
                reviews: "Bewertungen: {asin}",
                review: "Bewertungen: {asin}"
            },
            exportTitles: {
                asin: "ASIN",
                title: "Titel",
                sellerType: "Fulfillment",
                category: "Kategorie",
                bsr: "BSR",
                subcategory: "Unterkategorie",
                subcategoryBsr: "Unterkategorie BSR",
                price: "Preis",
                priceChange: "Preistrend (90 Tage)",
                monthlySales: "Monatlicher Umsatz",
                salesChange: "Verkaufstrend (90 Tage)",
                monthlyRevenue: "Monatlicher Umsatz",
                reviewCount: "Bewertungsanzahl",
                reviewsRating: "Bewertungen Bewertung",
                bbSeller: "Verkäufer",
                numberOfSellers: "Anzahl der aktiven Verkäufer",
                yearSales: "Absatz des Vorjahres",
                salesYearOverYear: "Umsatz Jahr für Jahr",
                sizeTier: "Größen-Kategorie",
                width: "Breite",
                height: "Höhe",
                length: "Länge",
                weight: "Gewicht",
                storageFee: "Lagergebühr",
                bestMonth: "Bester Verkaufszeitraum",
                age: "Jahre (Monat)",
                numberOfImages: "Anzahl der Bilder",
                variationCount: "Variantenanzahl",
                salesToReviews: "Verkäufe per Bewertung",
                brand: "Marke"
            },
            chartAxis: {
                bsr: "Verkaufsrang",
                price: "Preis",
                sales: "Absatz",
                reviewCount: "Bewertungsanzahl",
                rating: "Bewertung",
                "7DayMovingAverage": "Gleitender 7-Tage-Durchschnitt",
                trend: "Trend",
                mainCategoryBSR: "Hauptkategorie BSR",
                subcategoryBSR: "Unterkategorie BSR"
            }
        },
        tabsTitle: "Suchen nach:",
        storageFee: {janSept: "Jan-Sep", octDec: "Okt-Dez"},
        presetFilters: {
            "Product sales increase fast over the last month": {
                title: "Hohes Wachstum",
                description: "Produktverkäufe zeigen im letzten Monat schnelles Wachstum"
            },
            "Product selling well but doesn’t have a good rating": {
                title: "Niedrige Bewertung",
                description: "Produkt verkauft sich gut, hat jedoch keine gute Bewertung"
            },
            "Few product images but high sales": {
                title: "Niedrige Bildzahl",
                description: "Wenige Produktbilder, aber hohe Verkäufe"
            },
            "Small size but sales well": {title: "Klein und leicht", description: "Klein, aber verkauft sich gut"}
        },
        presetModal: {
            title: {new: "Namen für Filtervoreinstellungs", edit: "Namen für Filtervoreinstellungs ändern"},
            name: {
                label: "Gib einen eindeutigen Filtervoreinstellungs-Namen ein",
                placeholder: "Wähle einen Namen für diese Voreinstellung"
            }
        },
        filters: {
            messages: {
                rename: {success: "Filter wurde umbenannt"},
                create: {success: "Voreingestellter Filter wurde in Filterbibliothek gespeichert"},
                delete: {success: "Voreingestellter Filter wurde aus Filterbibliothek gelöscht"}
            }
        },
        addToMyList: {
            success: "Produkte wurden erfolgreich zu Meine Liste hinzugefügt",
            warning: "Alle gelisteten Produkte wurden bereits zu Meine Liste hinzugefügt",
            reject: "Produkte konnten nicht zu Meine Liste hinzugefügt werden"
        },
        upgradeBanner: {text: "Verbleibende Suchanfragen: <b>{uses}</b>", button: "UPGRADE FÜR UNBEGRENZT"},
        options: {
            shoppingSize: {
                1: "Kleine Standardgröße",
                2: "Große Standard-Größe",
                3: "Kleine Übergröße",
                4: "Mittlere Übergröße",
                5: "Große Übergröße",
                6: "Sonderübergröße"
            },
            fulfillment: {1: "Amazon", 2: "FBA", 3: "FBM"},
            simpleImprovementRange: {1: "ein wenig", 2: "etwas", 3: "viel"},
            simpleCompetitionRange: {1: "niedrig", 2: "Mittel", 3: "hoch"},
            simplePrice: {1: "$0-30", 2: "$30-100", 3: "$100+"},
            simpleMonthlyRevenue: {1: "$0-1,000", 2: "$1,000-10,000", 3: "$10,000+"}
        }
    }, je = {cerebro: "Cerebro", magnet: "Magnet", opportunity: "Elite Analytics"}, Qe = {
        anythinElse: {
            cerebro: "An Cerebro-Sammelberichten interessiert",
            blackBox: "An Black Box-Sammelberichten interessiert"
        }
    }, Xe = {title: "Die Daten werden für Ihren Plan randomisiert.", button: "Upgrade für vollständige Ergebnisse"},
    Ze = {day: {one: "Tag", other: "Tage"}, year: {one: "Jahr", other: "Jahre"}, allTime: "Alle Zeit"},
    Je = {moreThan: "mehr als", lessThan: "weniger als"}, et = {
        downloadCSV: "CSV-Bericht herunterladen",
        downloadXLS: "XLS herunterladen",
        downloadPNG: "PNG-Bild herunterladen",
        downloadJPEG: "JPEG-Bild herunterladen"
    }, tt = {
        decline: "Nicht jetzt",
        addToKeywordTracker: "Zum Keyword Tracker hinzufügen",
        addToMyList: "Zu meiner Liste hinzufügen",
        trackCompetitor: "Mitbewerber verfolgen",
        analyzeKeywordsInCerebro: "Keywords in <b>Cerebro</b> analysieren",
        runListingAnalyzer: "<b>Listing Analyzer</b> ausführen",
        export: "Export"
    }, at = {
        modal: {
            title: "Verbinde dein Verkäuferkonto, um Erkenntnisse der Amazon-Markenregistrierungsdaten in Cerebro zu erlangen",
            sellers: "{number} Benutzer haben im letzten Monat ihr Verkäuferkonto verbunden.",
            text: {
                part1: "Dein Amazon-Konto mit Helium 10 sicher verknüpfen, um leistungsstarke Tools und Erkenntnisse für dein Unternehmen freizuschalten.",
                part2: "Amazon-Markenregistrierungsdaten in Cerebro sind nur für Verkäufer verfügbar, die im Markenregistrierungsprogramm von Amazon angemeldet sind.",
                part2New: "Amazon Brand Registry-Daten in Cerebro oder Magnet stehen nur Verkäufern zur Verfügung, die am Amazon Brand Registry-Programm teilnehmen."
            },
            acceptButton: "Mit Amazon verbinden",
            titleNew: "Verbinde dein Verkäuferkonto, um Einblick in deine Amazon Brand Registry-Daten in Cerebro oder Magnet zu erhalten"
        }
    }, rt = {
        modal: {
            title: "Für die Amazon-Markenanalyse in Cerebro ist eine Markenregistrierung erforderlich",
            text: {
                part1: "Die Amazon-Markenregistrierung ermöglicht dir, deine Marke genauer darzustellen, Verstöße zu finden und zu melden und dein geistiges Eigentum zu schützen.",
                part2: {
                    part1: "Dies steht nur Verkäufern zur Verfügung, die im Markenregistrierungsprogramm von Amazon angemeldet sind. Besuche die",
                    button: "Amazon-Programmdetailseite",
                    part2: "um mehr über die Vorzüge und Zugangsbedingungen zu erfahren."
                },
                part3: "Erfahre, wie die Helium 10-Strategien dir dabei helfen können, deine Markenregistrierung schnell durchzuführen"
            },
            acceptButton: "Mehr erfahren",
            titleNew: "Amazon Brand Analytics in Cerebro oder Magnet erfordern Brand Registry"
        }
    }, ot = {
        drawer: {
            title: "Amazon Brand Analytics",
            tooltip: "Erfahre, welche Produkte die meisten Klicks und Konversionen zu strategischen Suchbegriffen erhalten. Bewerte die Auswirkung deiner Marketingkampagnen anhand der Trendüberwachung.",
            chart: {
                title: "Top 3 ASINs Übersicht",
                yAxis: {totalRate: "Gesamtanteil", searchFrequencyRank: "Suchhäufigkeitsrang"},
                legend: {
                    clickedRate: {
                        title: "Klickanteile der Top 3 ASINs",
                        tooltip: "Summe der Klickraten der Top 3 ASINs"
                    },
                    conversionRate: {
                        title: "Top 3 ASINs Konv. Anteil",
                        tooltip: "Summe der Konversionsanteil der Top 3 ASINs"
                    },
                    frequencyRank: {
                        title: "Suchhäufigkeitsrang",
                        tooltip: "Rangliste, basierend auf der Suchfrequenz in allen Amazon-Suchbegriffen für einen bestimmten Marktplatz"
                    }
                },
                noHoveredYet: "Fahre über das Diagramm, um die Top 3 der angeklickten ASINs zu sehen",
                reportingRange: "Berichtsbereich"
            },
            top3Asins: {
                title: "Top 3 angeklickte ASINs",
                asinTitle: "# {number} Angeklickte ASIN",
                rates: {title: "Anteile", click: "Klicke", conversion: "Konv."}
            },
            tables: {
                fields: {
                    product: {
                        title: "{date} Top angeklickte ASINs",
                        tooltip: "Top 3 der angeklickten ASINs, basierend auf den Suchergebnissen im ausgewählten Zeitraum"
                    },
                    clickRate: {
                        title: "Klickanteil",
                        tooltip: "Prozentsatz der Klicks, welche das Produkt, basierend auf den Suchergebnissen im ausgewählten Zeitraum, im Vergleich zur Gesamtzahl der Klicks erhalten hat."
                    },
                    conversionRate: {
                        title: "Konv. Anteil",
                        tooltip: "Prozentsatz der Konversionen, welche das Produkt, basierend auf den Suchergebnissen im ausgewählten Zeitraum, im Vergleich zur Gesamtzahl der Konversionen erhalten hat."
                    },
                    organicRank: {
                        title: "Organischer Rang (durchschn.)",
                        tooltip: "[Helium 10 Data] Organische Suchposition, die für diese(s) Keyword(s) für das analysierte Produkt ermittelt wurde"
                    },
                    sponsoredRankAvg: {
                        title: "Gesponserter Rang (durchschn.)",
                        tooltip: "[Helium 10-Daten] Gesponserte Anzeigen haben die letzte Position der Kundensuche ermittelt"
                    }
                }, subtotal: "Zwischensumme"
            }
        },
        calendar: {
            weekly: {label: "Wöchentlich", info: "Du kannst den Mindestbereich von 14 Tagen auswählen."},
            monthly: {label: "Monatlich", info: "Du kannst den Mindestbereich von 2 Monaten auswählen."},
            quarterly: {label: "Vierteljährlich", info: "Du kannst den Mindestbereich von 2 Quartalen auswählen."}
        },
        clickAndConversionRate: {
            title: "Klick- und Konversionsanteil: {asin}",
            subtitle: "Basierend auf Daten von Amazon Brand Analytics",
            legend: {clickRate: "Klickanteil", conversionRate: "Konversionsanteil"},
            emptyData: "Diese ASIN war für den ausgewählten Zeitraum nicht unter den Top 3.",
            period: {
                last30days: "Letzte 30 Tage",
                last2Months: "Letzte 2 Monate",
                last6Months: "Letzte 6 Monate",
                last12Months: "Letzte 12 Monate"
            }
        },
        period: {
            info: "Du kannst den Mindestbereich von {number} {period} auswählen.",
            periods: {days: "Tage", weeks: "Wochen", months: "Monate", quarters: "Quartalen"},
            presets: {weekly: "Wöchentlich", monthly: "Monatlich", quarterly: "Vierteljährlich"}
        },
        filter: {
            clickShare: {
                title: "ABA Top 3 ASINs Klickanteil insgesamt",
                tooltip: "Summe der Klickanteile der Top 3 ASINs von ABA Data"
            },
            conversionShare: {
                title: "ABA Top 3 ASINs Konversionsanteil insgesamt",
                tooltip: "Summe der Top 3 ASINs Conv. Anteil von ABA Data"
            },
            searchFrequencyRank: {
                title: "Suchhäufigkeitsrang",
                tooltip: "The ranked order of search frequency. Search terms with the same search frequency over the selected time frame will show the same rank."
            }
        },
        table: {
            clickShare: {
                tooltip: {
                    title: "Keyword-Metriken, einschließlich Klick- und Conversion-Raten für die Top-3-ASINs",
                    restricted: "Schaltest du Amazon Brand Analytics und umfassende Keyword-Absatzdaten frei, indem du deinen Plan auf {upgradePlan} aktualisierst. ",
                    noTokens: "Es ist nur für Verkäufer verfügbar, die ihr Amazon-Konto mit Helium 10 verbunden und sich im Markenregisterprogramm von Amazon angemeldet haben"
                }
            },
            convShare: {
                tooltip: {
                    title: "Gewinnst du wertvolle Einblicke in die Top 3 geklickten Produkte für jedes Keyword",
                    restricted: "Siehst du sich die historische Keyword-Suchrangliste an, indem du auf {upgradePlan} upgradest.",
                    noTokens: "Es ist nur für Verkäufer verfügbar, die ihr Amazon-Konto mit Helium 10 verbunden und sich im Markenregisterprogramm von Amazon angemeldet haben"
                }
            }
        }
    }, it = {today: "Heute", yesterday: "Gestern", previousDay: "Vorheriger Tag", lastNDays: "Letzte {N} Tage"},
    nt = "Zeitraum", lt = {
        tooltipSingle: "Führe im Listing Analyzer eine Suche nach der in dieser Suche eingegebenen ASIN durch.",
        tooltipMultiple: "Führe eine Suche im Listing Analyzer nach den ersten {maxAsins} ASINs in dieser Suche durch"
    }, st = {
        title: "Historischer Trend",
        allProducts: "Alle Produkte",
        tableTitleText: {selectedDate: "Historischer Trend: {date}"},
        keywordType: {
            organicSearch: "Organische Suche",
            sponsoredProduct: "Gesponsertes Produkt",
            amazonRecommended: "Amazon empfohlen"
        },
        distributionBy: {
            keywordType: {
                switch: "Keyword Typ",
                keywordsCount: {
                    title: "Gesamtzahl der Keywords nach Typ",
                    tooltip: "Sieh dir die Verteilung von Sponsored Product, Organic Search und Amazon Recommended für die letzten 24 Monate nach Anzahl der Keywords an. Wähle einen beliebigen Monat, um den Keyword-Typ für deine Auswahl anzuzeigen."
                },
                searchVolume: {
                    title: "Suchvolumen von Keywords nach Typ",
                    tooltip: "Sieh dir die Verteilung von Sponsored Product, Organic Search und Amazon Recommended für die letzten 24 Monate nach Suchvolumen an. Wähle einen beliebigen Monat, um den Keyword-Typ für deine Auswahl anzuzeigen."
                }
            },
            products: {
                switch: "Produkte",
                keywordsCount: {
                    title: "Keywordverteilung für Produkte",
                    tooltip: "Sieh dir die Verteilung der Keywords für die letzten 24 Monate mit den gesamten Keywords an. Wähle einen beliebigen Monat, um die Verteilung der Keywords auf die Produkte deiner Auswahl anzuzeigen."
                },
                searchVolume: {
                    title: "Suchvolumen der Keywordverteilung für Produkte",
                    tooltip: "Sieh dir das Suchvolumen der Keywordverteilung für Produkte für die letzten 24 Monate an. Wähle einen beliebigen Monat, um die Keywordverteilung für Produkte für deine Auswahl anzuzeigen."
                }
            }
        },
        searchVolumeKeywordsCountSwitch: {
            keywordsCount: {title: "KC", tooltip: "Anzahl der Keywords"},
            searchVolume: {title: "SV", tooltip: "Suchvolumen"}
        },
        clearHistoricalTrendFilters: {
            button: "Filter für historische Trends löschen",
            tooltip: "Sieh dir die Gesamtzahl der Keywords und die Keyword-Typ-Informationen für die letzten Monate an."
        },
        legend: {
            other: "Andere", byTypes: {
                sponsoredProduct: {title: "Gesponsertes Produkt"},
                organicSearch: {title: "Organische Suche"},
                amazonRecommended: {
                    title: "Amazon empfohlen",
                    tooltips: {
                        keywordsCount: "Die Keyword-Zählung für Amazon Recommended ist ab September 2022 verfügbar.",
                        searchVolume: "Das Suchvolumen für Amazon Recommended ist ab September 2022 verfügbar."
                    }
                },
                sponsored: {title: "Gesponsertes Produkt", abbreviation: "SP"},
                organic: {title: "Organisch", abbreviation: "O"},
                "section-amazons-choice": {
                    title: "Amazon-Wahl",
                    abbreviation: "AC",
                    tooltips: {
                        keywordsCount: "Die Keyword-Zählung für Amazon Recommended ist ab September 2022 verfügbar.",
                        searchVolume: "Das Suchvolumen für Amazon Recommended ist ab September 2022 verfügbar."
                    }
                },
                "section-highly-rated": {title: "Hoch bewertet", abbreviation: "HR"},
                "section-sponsored-brand-header": {title: "Gesponserte Markenüberschrift", abbreviation: "SBH"},
                "section-sponsored-video": {title: "Gesponsertes Markenvideo", abbreviation: "SBV"},
                "section-editorial-recommendations": {title: "Redaktionelle Empfehlungen", abbreviation: "ER"},
                "top-rated-from-our-brand": {title: "Bestbewertet von unserer Marke", abbreviation: "TRB"},
                "section-trending-now": {title: "Jetzt im Trend", abbreviation: "TN"},
                ppc: {title: "Amazon Empfohlen", abbreviation: "AR"}
            }, keywordTypes: "Keyword-Typen", byCategories: {all: "Alle", organic: "Organisch", paid: "Bezahlt"}
        },
        periodRangeSelect: {
            last3: "Letzte 3 Monate",
            last6: "Letzte 6 Monate",
            last12: "Letzte 12 Monate",
            last24: "Letzte 24 Monate"
        },
        basedOn: "Basierend auf {date}",
        upgradeTooltip: {
            title: "Historical Trend ist nur auf Elite verfügbar",
            text: "Der Elite-Plan ermöglicht es dir, Keywords nach Typ und Keyword-Verteilung über Produkte für die letzten 24 Monate einzusehen.",
            dismiss: "Dismiss",
            learnMore: "Erfahrst du mehr über Elite",
            upgradeTo: "Upgrade auf <br/>{upgradePlan}"
        },
        searchesRemain: "Suchen übrig",
        dailySearches: "Tägliche Suchen",
        uses: {tooltip: {diamond: "Jede einzigartige ASIN-Suche oder unterschiedliche Monatsauswahl mit 'Historischen Trend anzeigen' zählt als eine Nutzung.<br/><br/>Wiederholungen in derselben Sitzung zählen nicht extra.<br/><br/>dein tägliches Limit beträgt {value} Nutzungen. Wenn du das Limit erreichst, wird es am nächsten Tag zurückgesetzt."}},
        notifications: {
            dailyLimitReached: "Du hast das tägliche Limit für historische Suchen überschritten. Bitte versuchst du es morgen erneut.",
            willExceedLimit: {
                title: "Nicht genug Suchanfragen übrig",
                text: "Du versuchst, eine Suche durchzuführen, die mindestens {productsCount} Suchvorgänge erfordert"
            }
        },
        upgradeModal: {
            title: "Schaltest du weitere Funktionen mit {upgradePlan} frei",
            subtitle: "Steigerst du den Traffic auf deinen Angeboten mit umfassenden Keyword-Recherchelösungen und erweiterten Analysen",
            declineButton: "Nicht jetzt",
            acceptButton: "Upgrade auf {upgradePlan}",
            priceMo: "${price}/Mon",
            searchesPerDay: "{uses} Suchen / Tag",
            features: {
                amazonBrandAnalytics: {
                    title: "Amazon Brand Analytics",
                    subtitle: "Registrierte Verkäufer der Marke können Trends verfolgen und fundierte Entscheidungen auf der Grundlage der Beliebtheit von Keywords und historischen Absatzdaten treffen"
                },
                competitorTracking: {
                    title: "Mitbewerberverfolgung",
                    subtitle: "Nutzt du täglich automatisierte Warnmeldungen, um auf dem neuesten Stand zu bleiben mit den Preisen deiner Wettbewerber, Absatztrends, Qualitätspunkten der Auflistung und mehr."
                },
                keywordSalesData: {
                    title: "Keyword Absatz Daten",
                    subtitle: "Gewinnst du wertvolle Einblicke in historische Keyword-Daten und siehst du, welche deiner Keywords den meisten Absatz generieren, damit du sie entsprechend ausrichten kannst."
                },
                insightsDashboard: {
                    title: "Insights Dashboard",
                    subtitle: "Entdeckst du automatisch kritische potenzielle Probleme mit deinem Unternehmen durch personalisierte Einblicke. Priorisierst du Maßnahmen basierend auf der Geschäftsauswirkung."
                }
            },
            plans: {
                Helium10_ALaCarte: "Alacarte",
                Helium10_ALaCarteAnnual: "",
                Helium10_Enterprise: "Enterprise",
                Helium10_Elite: "Elite",
                Helium10_Elite_399: "Elite",
                Helium10_Elite_Quarter: "Elite",
                Helium10_Elite_Annual: "Elite",
                Helium10_Supercharge_Your_Brand: "Supercharge Your Brand",
                Helium10_Supercharge_Your_Brand_Annual: "Supercharge Your Brand",
                Helium10_Diamond: "Diamond",
                Helium10_Diamond_199: "Diamond",
                Helium10_DiamondAnnual: "Diamond",
                Helium10_DiamondAnnual_1999: "Diamond",
                Helium10_Diamond_249: "Diamond",
                Helium10_DiamondAnnual_2499: "Diamond",
                Helium10_Professional_Cn: "Professional",
                Helium10_Professional_Cn_Annual: "Professional",
                Helium10_Scale_Your_Business: "Diamond",
                Helium10_Scale_Your_Business_Annual: "Diamond",
                Helium10_Adtomic_And_Scale_Your_Business_Bundle: "Diamond",
                Helium10_Adtomic_And_Scale_Your_Business_Bundle_Annual: "Diamond",
                Helium10_Platinum: "Platinum",
                Helium10_Platinum_99: "Platinum",
                Helium10_PlatinumAnnual: "Platinum",
                Helium10_PlatinumAnnual_999: "Platinum",
                Helium10_Platinum_FastAction: "Platinum",
                Helium10_Entrepreneur_Cn: "Entrepreneur",
                Helium10_Entrepreneur_Cn_Annual: "Entrepreneur",
                Helium10_Start_Your_Business: "Platinum",
                Helium10_Start_Your_Business_Annual: "Platinum",
                Helium10_Gold: "Platinum",
                Helium10_GoldAnnual: "Platinum",
                Helium10_Starter: "Starter",
                Helium10_Starter_39: "Starter",
                Helium10_StarterAnnual: "Starter",
                Helium10_StarterAnnual_339: "Starter",
                Helium10_Explorer_Cn: "Explorer",
                Explorer_Cn_Annual: "Explorer",
                Helium10_Free: "Free"
            }
        },
        subtitle: 'To view historical keyword ranks and search volumes in Cerebro results, simply click on a month in the graph below and then click "apply filters."',
        upgradeTooltipNew: {
            title: "Historischer Trend",
            text: "Explore seasonality trends over 24 months and drill into a specific month. Refine your results via an interactive chart to drill into historical rank, search volume, and sales."
        },
        bannerTitle: "Sneak peak: Historical Trends feature. Upgrade for interactive graphs and explore keyword distribution by type or product."
    }, dt = {
        modal: {header: {title: "PPC-Gebot:", subtitle: "Helium 10 Vorgeschlagenes PPC-Gebot"}},
        filter: {
            suggestedPPC: {
                title: "Vorgeschlagenes PPC-Gebot",
                tooltipAmazon: "Vorgeschlagenes Gebot und Gebotsspanne werden aus einer Gruppe von erfolgreichen Geboten für ähnliche Anzeigen wie deine berechnet. Du kannst wählen, ob du das vorgeschlagene Gebot oder ein beliebiges Gebot innerhalb oder außerhalb der Gebotsspanne verwenden möchtest."
            }
        },
        table: {
            suggestedPPC: {
                title: "Vorgeschlagenes PPC-Gebot",
                titleLocked: "Vorschlag. <br/> PPC-Gebot",
                tooltipAmazon: "Vorgeschlagenes Gebot und Gebotsspanne werden aus einer Gruppe von erfolgreichen Geboten für ähnliche Anzeigen wie deine berechnet. Du kannst wählen, ob du das vorgeschlagene Gebot oder ein beliebiges Gebot innerhalb oder außerhalb der Gebotsspanne verwenden möchtest.",
                tooltipAmazonForValue: "Die meisten Anzeigen gewinnen Auktionen mit Geboten zwischen {ppcFrom} und {ppcTo}. Für dieses Keyword oder diese Anzeigengruppe empfehlen wir ein Gebot von {ppc}. Wenn du dein Gebot erhöhst, können deine Anzeigen in Auktionen wettbewerbsfähiger werden."
            },
            suggestedPPCExport: {title: "H10 PPC-Vorschlag. Gebot"},
            suggestedPPCMinExport: {title: "H10 PPC-Vorschlag. Mindestgebot"},
            suggestedPPCMaxExport: {title: "H10 PPC-Vorschlag. Höchstgebot"}
        }
    },
    ut = {cerebro: {toolTip: "Filter sind nützlich, um deine Ergebnisse einzugrenzen und die relevantesten Keywords für deine Recherche zu finden."}},
    ct = {chip: "Diamond", learnMore: "Mehr erfahren", upgradeNow: "Jetzt upgraden"}, mt = {
        landing: {
            new: {
                title: {
                    available_true: "Quickly Identify Q4 Keywords",
                    available_false: "Unlock Q4 Keywords at the Diamond Level"
                },
                boldText: {
                    available_true: "Optimize year-end listings with preloaded {year} search volume metrics to identify past and present trends.",
                    available_false: "Optimize year-end listings with preloaded {year} search volume metrics to identify past and present trends at the Diamond level."
                },
                text: "Ready to uncover hidden seasonal trends? Compare current and historical keyword distribution, sponsored or organic rank, and analyze sales over the past two years.",
                watchButton: {
                    available_true: "Watch how to boost end of year sales.",
                    available_false: "Strategievideo ansehen"
                }
            },
            old: {
                title: "Search specific products from Amazon and find their top ranking keywords",
                text: "Leverage your competitors’ keyword ranking strategy to improve your own listing. You can also use Cerebro to gauge the most effective keywords for your product on Amazon, optimize your product listing to boost sales, and keep competitive rates on your products. Cerebro is key in successfully launching new products and bringing more awareness to your brand.",
                text2: "Du weißt nicht, wie du mit Cerebro anfangen sollst?",
                watchButton: "Watch our introductory video."
            }
        },
        banner: {
            title: "<b>Optimize December Sales:</b> Compare {year} Search Volume or Explore Seasonal Trends.",
            button: "Strategievideo ansehen"
        },
        filter: {
            title: "Compare Q4 2022 Historical Trend Filters",
            badge: "Zeitlich begrenzte Strategien",
            text: "For a limited time, quickly identify low ranking keywords and consider updating your listing or PPC campaign to boost Q4 sales."
        },
        upgradeTooltip: {
            title: "Q4 Prep Strategies",
            text: "Compare current keyword search volume to last year's data to view seasonal traffic increases."
        },
        tableSettings: {tooltip: "View historical <b>October and November {year} Search Volume</b> by customizing your table settings."},
        fields: {
            searchVolume: {
                filter: {
                    title: "{month} Search Volume",
                    tooltip: "Geschätzte Anzahl der monatlichen Suchanfragen für diese Keywordphrase."
                },
                table: {
                    title: "{month}<br/>Search Volume",
                    tooltip: "Explore seasonality {node_0} and pinpoint a specific month of interest. Refine your results using an interactive chart to delve into historical rank, search volume, and sales data.",
                    tooltipNode: "trends over the past 24 months"
                },
                limited: {tooltip: "Compare current keyword search volume to last year's data to identify seasonal traffic increases."}
            }
        }
    }, pt = {
        presetsTitle: "Verwende eine Filtervoreinstellung, um deine Suche zu beschleunigen:",
        emptyText: "No available presets",
        buttons: {saveAsFilterPreset: "Als Filtervoreinstell. speichern", filterLibrary: "Filterbibliothek"},
        editModal: {
            title: {new: "Namen für Filtervoreinstellungs", edit: "Namen für Filtervoreinstellungs ändern"},
            name: {
                label: "Gib einen eindeutigen Filtervoreinstellungs-Namen ein",
                placeholder: "Wähle einen Namen für diese Voreinstellung"
            }
        },
        staticPresetNames: {
            "Top Keywords": {
                title: "Top-Keywords",
                description: "Wichtige Keywords, die üblicherweise von Mitbewerbern verwendet werden und erhebliches Suchvolumen aufweisen"
            },
            "Opportunity Keywords": {
                title: "Opportunity-Keywords",
                description: "Keywords, welche die Berechnung des eigenen Rangs mittels Aktivität, Rang und Suchvolumen des Mitbewerbers ermöglichen"
            },
            "Product sales increase fast over the last month": {
                title: "Hohes Wachstum",
                description: "Produktverkäufe zeigen im letzten Monat schnelles Wachstum"
            },
            "Product selling well but doesn’t have a good rating": {
                title: "Niedrige Bewertung",
                description: "Produkt verkauft sich gut, hat jedoch keine gute Bewertung"
            },
            "Few product images but high sales": {
                title: "Niedrige Bildzahl",
                description: "Wenige Produktbilder, aber hohe Verkäufe"
            },
            "Small size but sales well": {title: "Klein und leicht", description: "Klein, aber verkauft sich gut"},
            "Dominant Demand": {title: "Dominant Demand"},
            "Growth Opportunities": {title: "Growth Opportunities"},
            "Emerging Contenders": {title: "Emerging Contenders"},
            "Conversion Pioneers": {title: "Conversion Pioneers"}
        },
        messages: {
            rename: {success: "Preset filter is renamed"},
            create: {success: "Voreingestellter Filter wurde in Filterbibliothek gespeichert"},
            delete: {success: "Voreingestellter Filter wurde aus Filterbibliothek gelöscht"}
        },
        tooltips: {youAlreadyHavePresetWithSameSettings: 'You already have preset <b>"{name}"</b> with same settings'}
    }, ht = {
        0: "Jan",
        1: "Feb",
        2: "März",
        3: "Apr",
        4: "Mai",
        5: "Juni",
        6: "Juli",
        7: "Aug",
        8: "Sep",
        9: "Okt",
        10: "Nov",
        11: "Dez"
    }, gt = {
        common: {week: "Week"},
        marketplaceAndPeriodSelectors: {
            text1: "View the Amazon Brand Analytics Report on",
            text2: "during the",
            periodTypeOptions: {Weekly: "Week of", Monthly: "Month of"}
        },
        banners: {
            start: {
                title: "ABA Top Search Terms",
                text: "Tailored for <b>brand-registered</b> Amazon sellers. This exclusive feature in Blackbox goes beyond traditional analysis, offering advanced keyword discovery, trend-spotting, and competitive benchmarking unique to Helium 10. Harness the power of unique data algorithms to identify untapped markets and optimize your listings like never before.",
                videoButton: "Video ansehen",
                dismiss: "Dismiss"
            },
            unlock: {
                title: "Unlock ABA Top Search Terms",
                text: "Exclusively for Diamond subscribers with registered brands: Unleash the power of Amazon Brand Analytics! Dive into top-performing ASINs, compare click shares and conversion rates, and uncover fresh product opportunities by leveraging elite keyword insights. Elevate your product discovery journey today!"
            }
        },
        noToken: {
            title: "Connect your Seller Account for insights into Amazon Brand Registry data",
            subtitle: "To view the ABA Top Search Terms data, you’ll need at least one Amazon Seller account connected to Helium 10.",
            text: "7,054 users connected their Seller Account last month.<br/><br/>Securely connect your Amazon account to Helium 10 to unlock powerful tools and insights for your business.<br/><br/>Amazon Brand Registry data within Black Box, Cerebro or Magnet is only available to sellers who are enrolled in Amazon’s Brand Registry program.",
            note: "Wir wissen, wie wichtig Datensicherheit für unsere Kunden ist. Wir versprechen, deine Daten niemals weiterzugeben oder zu verkaufen und stets die höchsten Sicherheitsstandards einzuhalten."
        },
        noABAToken: {
            title: "Final step: Unlock Powerful Insights with Amazon Brand Registry!",
            text: "Access Exclusive ABA Top Search Terms & Safeguard Your Brand<br/><br/>Amazon Brand Registry doesn’t only secure your intellectual property but also unlocks robust insights with Amazon Brand Analytics. Protect your products, monitor violations, and leverage pivotal data to elevate your sales strategy, exclusively available to registered brands.<br/><br/>Discover comprehensive benefits and eligibility criteria directly from Amazon's Program Details page. Also, navigate through the quick and strategic path to Brand Registration with Helium 10's unique strategies."
        },
        buttons: {
            upgradeTo: "Upgrade auf {upgradePlan}",
            connectToAmazon: "Mit Amazon verbinden",
            viewABADetails: "View Amazon’s Program Details Page",
            learnMore: "Mehr erfahren",
            advancedSettings: "Erweiterte Einstellungen",
            apply: "Anwenden",
            runInMagnet: "Run in Magnet",
            addToKeywordTracker: "Zum Keyword Tracker hinzufügen",
            addToMyList: "Zu meiner Liste hinzufügen"
        },
        summary: {
            title: "ABA Keyword Summary",
            metricsTitle: "Keywordverteilung",
            metrics: {
                totalKeywords: {title: "Keywords insgesamt"},
                top3AsinsTotalMonthlyUnitSales: {
                    title: "Top 3 ASINs Total<br/>Monthly Unit Sales",
                    tooltip: "Total sales of the top three ASINs in your filtered results"
                },
                top3AsinsTotalMonthlyRevenue: {
                    title: "Top 3 ASINs Total<br/>Monthly Revenue",
                    tooltip: "Total revenue generated by the top three ASINs in your filtered results"
                },
                avgClickShare: {
                    title: "Avg. Click Share",
                    tooltip: "Average clicks share for the products shown based on your filter criteria"
                },
                avgConversionShare: {
                    title: "Avg. Conv. Share",
                    tooltip: "Average conversion share for the products shown based on your filter criteria"
                }
            }
        },
        tableTitle: {
            common: {
                one: "{value} Filtered Keyword based on date range",
                other: "{value} Filtered Keywords based on date range"
            }, selected: {one: "{value} Keyword selected", other: "{value} Keywords selected"}
        },
        filter: {
            searchFrequencyRankTrend: {label: "Search Frequency Rank Trend", tooltip: "Over the past week or month"},
            clickShareAsin: {label: "Klickanteil"},
            conversionShareAsin: {label: "Konv. Anteil"},
            numberOfAsins: {placeholder: "Number of ASINs"},
            mustBe: {placeholder: "Must be"},
            advancedInteraction: {and: "And", or: "Or"},
            keywordOrAsins: {
                placeholder: {
                    one: "Enter up to {maxAsins} product ASINs or {maxKeywords} keyword phrase",
                    other: "Enter up to {maxAsins} product ASINs or {maxKeywords} keyword phrase"
                },
                needAsin: "Sie brauchen ein ASIN? Versuchen Sie eins von diesen:",
                needKeyword: "Need a keyword? Try one of these:"
            },
            averageMonthlyAge: {
                label: "Top 3 Clicked ASINs Monthly Average Age",
                tooltip: " Average of top 3 clicked ASINs age"
            },
            totalMonthlySales: {
                label: "Top 3 Clicked ASINs Total Monthly Sales",
                tooltip: "Total of top 3 clicked ASINs monthly sales"
            },
            totalMonthlyRevenue: {
                label: "Top 3 Clicked ASINs Total Monthly Revenue",
                tooltip: "Total of top 3 clicked ASINs monthly revenue"
            },
            totalReviewCount: {
                label: "Top 3 Clicked ASINs Total Review Count",
                tooltip: "Total of top 3 clicked ASINs review count"
            },
            averageRating: {label: "Top 3 Clicked ASINs Average Rating", tooltip: "Average of top 3 clicked ASINs rating"}
        },
        columns: {
            phrase: {
                title: "Keyword Phrase",
                tooltip: "Von Kunden bei der Suche nach einem Produkt verwendete(s) Keyword/Keywordphrase"
            },
            searchVolume: {
                title: "Suchvolumen",
                tooltip: "Geschätzte Anzahl der monatlichen Suchanfragen für diese Keywordphrase.",
                trend: {title: "Search Volume Trend (%)"}
            },
            searchFrequencyRank: {
                title: "Suchhäufigkeitsrang",
                tooltip: {
                    Monthly: "Monthly Search Frequency Rank Trend, (compare with last month)",
                    Weekly: "Weekly Search Frequency Rank Trend, (compare with last week)"
                },
                trend: {title: "Search Frequency Rank Trend (%)"}
            },
            totalClickShareAsin: {
                title: "Top 3 ASINs Total Click Share",
                tooltip: "Summe der Klickanteile der Top 3 ASINs von ABA Data",
                trend: {title: "Top 3 ASINs Total Click Share Trend"}
            },
            totalConversionShareAsin: {
                title: "Top 3 ASINs Total Conv. Share",
                tooltip: "Summe der Top 3 ASINs Conv. Anteil von ABA Data",
                trend: {title: "Top 3 ASINs Total Conv. Share Trend"}
            },
            topNAsin: {title: "Top {value} ASIN", export: {title: "Top {value} Title", imageUrl: "Top {value} Image URL"}},
            clickShareAsinN: {
                title: "Top {value} ASIN Click Share",
                tooltip: "Top {value} ASIN click share from ABA Data",
                trend: {title: "Top {value} ASIN Click Share Trend"}
            },
            conversionShareAsinN: {
                title: "Top {value} ASIN Conv. Share",
                tooltip: "Top {value} ASIN conv. share from ABA Data",
                trend: {title: "Top {value} ASIN Conv. Share Trend"}
            },
            averageMonthlyAge: {
                title: "Top 3 Clicked ASINs Monthly Average Age",
                tooltip: "Average of top 3 clicked ASINs age"
            },
            totalSalesAsin: {
                title: "Top 3 ASINs Total Monthly Sales",
                tooltip: "Total of top 3 clicked ASINs monthly sales"
            },
            totalRevenueAsin: {
                title: "Top 3 ASINs Total Monthly Revenue",
                tooltip: "Total of top 3 clicked ASINs monthly revenue"
            },
            totalReviewCountAsin: {
                title: "Top 3 ASINs Total Review Count",
                tooltip: "Total of top 3 clicked ASINs review count"
            },
            averageRatingAsin: {title: "Top 3 ASIN Total Average Rating", tooltip: "Average of top 3 clicked ASINs rating"},
            exactTitleMatchProductsCount: {
                title: "Häufigkeit des Titels",
                tooltip: "Anzahl der Produkte auf Seite 1, die das gesuchte Keyword in ihrem Titel enthalten"
            },
            resultsNumber: {
                title: "Konkurrierende Produkte",
                tooltip: "Gesamtzahl der Produkte, die bei einer Kundensuche mit diesem Keyword/dieser Keywordphrase gefunden wurden"
            },
            brands: {
                title: "Top 3 Brands",
                tooltip: "The top 3 brands generating the most results for the search term",
                brand: {title: "Brand {value}"}
            },
            categories: {
                title: "Top 3 Categories",
                tooltip: "The top 3 categories generating the most results for the search term.",
                category: {title: "Category {value}"}
            },
            monthlySales: {
                title: "Verkauf per Keyword",
                tooltip: "Jedem Keyword zugeordnete geschätzte Zahl der monatlichen Verkäufe (als Stückzahl ausgedrückt)"
            }
        },
        notifications: {invalidAsins: {one: "Invalid ASIN: {asins}", other: "Invalid ASINs: {asins}"}},
        advFilterTooltip: {
            asins: "<b>ASINs (1-3)</b>: Number of ASINs meeting your criteria.",
            operators: {
                title: "<b>Operators</b>:",
                list: {
                    more: '">" = Greater than',
                    moreOrEqual: '">=" = At least',
                    equal: '"=" = Exactly',
                    less: '"<" = Less than',
                    lessOrEqual: '"<=" = At most'
                }
            },
            clickShare: "<b>Click Share %</b>: Set your desired Click Share range.",
            conversionShare: "<b>Conversion Share %</b>: Set your Conversion Share range.",
            andOr: "<b>AND/OR</b>: Both conditions met (AND) or at least one met (OR).",
            example: "Beispiel: ",
            exampleText: "1 ASIN with >40% Click Share AND <5% Conversion Share shows products popularly clicked but rarely bought."
        },
        noData: "Es sind keine Daten verfügbar, basierend auf Ihrem aktuellen Datumsbereich oder Filtern. Bitte versuchst du, diese anzupassen, um mehr Ergebnisse zu erhalten."
    }, bt = {modal: {title: "Suchhäufigkeitsrang: {phrase}"}, legend: "Suchhäufigkeitsrang"}, vt = {
        1: "Kleine Standardgröße",
        2: "Große Standard-Größe",
        3: "Kleine Übergröße",
        4: "Mittlere Übergröße",
        5: "Große Übergröße",
        6: "Sonderübergröße",
        7: "Umschlag",
        8: "Klein und leicht",
        9: "Kleiner Brief",
        10: "Großer Brief",
        11: "Extragroßer Brief",
        12: "Kleiner Umschlag",
        13: "Standard-Umschlag",
        14: "Großer Umschlag",
        15: "Standard-Paket",
        16: "Klein",
        17: "Standardgröße",
        18: "Übergröße",
        19: "Standard-Übergröße",
        20: "Schwer und sperrig",
        21: "Übergröße",
        22: "Extra großer Umschlag",
        23: "Kleines Paket",
        24: "Large bulky",
        25: "Extra-large 0 to 50 lb",
        26: "Extra-large 50+ to 70 lb",
        27: "Extra-large 70+ to 150 lb",
        28: "Extra-large 150+ lb",
        "-1": "N/A"
    }, yt = {
        common: Be,
        historyTitle: He,
        fetchingData: Ne,
        landing: xe,
        table: Ie,
        cerebro: Me,
        walmartSearch: Fe,
        export: {
            button: "Daten exportieren",
            options: {
                csv: "… als CSV-Datei",
                xlsx: "… als XLSX-Datei",
                frankenstein: "… an Frankenstein",
                clipboard: "In die Zwischenablage kopieren",
                eliteAnalyticsCSV: "Elite Analytics CSV",
                eliteAnalyticsExcel: "Elite Analytics Excel",
                eliteAnalyticsCSVWithUpload: "Hochladen + Elite Analytics CSV",
                eliteAnalyticsExcelWithUpload: "Hochladen + Elite Analytics Excel"
            }
        },
        createNewFolder: De,
        errors: Ee,
        magnet: qe,
        magnetChart: Ve,
        searchedBefore: Ke,
        noDataAvailable: Le,
        upgradePlan: We,
        copyButton: Ue,
        example: Oe,
        errorCodes: Ye,
        opportunity: Ge,
        blackBox: $e,
        projectNames: je,
        bulkReport: Qe,
        randomizationText: Xe,
        dateRanges: Ze,
        comparison: Je,
        highchart: et,
        buttons: tt,
        amazonToken: at,
        amazonBrandRegistry: rt,
        abad: ot,
        periodPresets: it,
        periodsPlaceholder: nt,
        runListingAnalyzer: lt,
        historicalData: st,
        ppc: dt,
        experiments: ut,
        upgradeToDiamondTooltip: ct,
        cerebroSeasonal: mt,
        filterPresets: pt,
        months: ht,
        abaTopSearchTerms: gt,
        searchFrequencyRank: bt,
        sizeTier: vt
    }, St = {
        close: "Close",
        cancel: "Cancel",
        clear: "Clear",
        serverError: "Server error!",
        na: "Not Available",
        delete: "Delete",
        edit: "Edit",
        save: "Save",
        valueOfTotal: "{value} of {total}",
        filters: "Filters",
        week: "Week",
        noData: "No Data"
    }, ft = "History", At = "Fetching data", wt = {
        notSure: {
            cerebro: "Not sure how to get started in Cerebro?",
            magnet: "Not sure how to get started in Magnet?"
        }
    }, kt = {scrapedDate: {lessThan7Days: "< 7 days", between7And30Days: "7 - 30 days", moreThan30Days: "> 30 days"}},
    Tt = {
        title: "Cerebro",
        description: "Enter up to {maxAsins} product identifiers to find their top performing keywords.",
        learn: "Learn",
        learnTooltip: "Watch videos and read articles to help you master Cerebro",
        history: {
            title: "History",
            titleTable: {one: "{count} Previous Search", other: "{count} Previous Searches"},
            titleTableSelected: {one: "{count} Previous Search selected", other: "{count} Previous Searches selected"},
            descriptionTable: "Find a previous Cerebro search and reload it without using any of your allotted searches.",
            tooltip: "View your previous searches and reload results"
        },
        inputPlaceholder: "Enter up to {maxAsins} product ASINs",
        upgradeForMultiSearch: "Upgrade for Multi Product Search",
        getKeywords: "Get Keywords",
        excludeVariations: "Exclude variations",
        excludeVariationsTooltipAmazon: "Only include keywords associated with the exact ASIN entered",
        excludeVariationsTooltipWalmart: "Only include keywords associated with the exact Product ID entered",
        landing: {
            title: "Search specific products from {market} and find their top ranking keywords",
            description: "Leverage your competitors' keyword ranking strategy to improve your own listing. You can also use Cerebro to gauge the most effective keywords for your product on {market}, optimize your product listing to boost sales, and keep competitive rates on your products. Cerebro is key in successfully launching new products and bringing more awareness to your brand.",
            videoTitle: "Not sure where to start? Watch a 3-minute video right here.",
            videoButton: "Watch Video",
            bulkReport: "Bulk Report",
            whereWalmartIDs: "Where do I find Walmart product IDs?",
            whereWalmartIDsTitle: "Where do I find Walmart product IDs?",
            whereWalmartIDsText: `<p>You can find the Walmart product ID within the URL for the corresponding product page on walmart.com.</p>
      <p>For example, in the URL below the Walmart Product ID would be <b>134258560</b>.</p>
      <p>https://www.walmart.com/ip/Petstages-Latex-Free-Chew-Dog-Squeaky-Toy-Assorted-Large/<b>134258560</b>?wpa_bd=&wpa_pg_seller_id=...wpa_bucket=__bkt__</p>`
        },
        getCompetitors: {
            button: "Get Competitors",
            description: "Find and add competing products to your search for comparison. Data from these products will be displayed in additional table columns with “Competitor” in the label.",
            count: "Add up to {canMoreSelect} more products",
            addCompetitors: "Add Competitors",
            addWords: "Add Words",
            deleteAll: "Delete All",
            tooltip: "Select from a range of competitors for a multi product analysis"
        },
        commonWords: {
            button: "Common Words",
            tableTitle: {one: "{count} Common Word", other: "{count} Common Words"},
            titleTableSelected: {one: "{count} Common Word Selected", other: "{count} Common Words Selected"},
            word: "Word",
            tableDescription: "Identify common words that you want to exclude from search results. All words in the table below will never appear in your {project} search results.",
            addDescription: "Enter words (1 per line) that you would like to remove from search results.",
            removeSpecialCharacters: "Remove Special Characters",
            removeSpecialCharactersTooltip: "Removes  .,?!&*%$@#, etc.",
            addCommonWords: "Add to Common Words",
            deleteAllQuestion: "Are you sure you want to delete all Common Words?",
            deleteAllConfirm: "Yes, delete all",
            tooltip: "Add common words to eliminate words those that are not unique to your search"
        },
        deletedWords: {
            button: "View Deleted Words ({number})",
            title: "Deleted Words",
            text: "These are the words you manually deleted from your search results.",
            return: "Return to Results",
            returnToResults: "Return to Results",
            columnKeyword: "Keyword",
            tableTitle: {one: "{count} Deleted Keyword", other: "{count} Deleted Keywords"},
            tableTitleSelected: {one: "{count} Deleted Keyword selected", other: "{count} Deleted Keywords selected"}
        },
        filter: {
            title: "Filters",
            showMore: "Show More",
            showLess: "Show Less",
            clear: "Clear",
            applyFilters: "Apply Filters",
            wordCount: "Word Count",
            wordCountTooltip: "Number of keywords in search phrase",
            searchVolume: "Search Volume",
            searchVolumeTooltip: "Estimated number of times this keyword is searched monthly on Amazon.",
            organicRank: "Organic Rank",
            organicRankTooltip: "Organic search position detected for that keyword(s) for the analyzed product",
            matchType: "Match Type",
            matchTypeTooltip: "Source from which a keyword is drawn",
            showPhrasesContain: "Phrases Containing",
            showPhrasesContainPlaceholder: "Ex: red dress",
            showPhrasesContainTooltip: "Show phrases that contain entered keywords (separate with commas)",
            cerebroIQScore: "Cerebro IQ Score",
            cerebroIQScoreTooltip: "Score based on the ratio of estimated search volume vs. number of competing products: a high score means a relatively high number of searches compared to the number of competitors; a low score means the opposite",
            titleDensity: "Title Density",
            titleDensityTooltip: "Number of page 1 products with the searched keyword in their title",
            competingProducts: "Competing Products",
            competingProductsTooltip: "Total number of products returned in a customer search using this keyword/phrase",
            amazonChoice: "Amazon Choice",
            amazonChoiceTooltip: "Filter keyword results based on the Amazon Choice badge status",
            amazonChoiceOnly: "Amazon Choice Only",
            amzSuggestedPosition: "Amazon Rec. Rank",
            amzSuggestedPositionTooltip: "Keywords Amazon recommends for this ASIN, numbered from most to least recommended",
            excludePhrasesContain: "Exclude Phrases Containing",
            excludePhrasesContainTooltip: "Exclude phrases that contain entered keywords (separate with commas)",
            searchVolumeTrend: "Search Volume Trend",
            searchVolumeTrendTooltip: "Over the past 30 days",
            sponsoredRank: "Sponsored Rank",
            sponsoredRankTooltip: "Sponsored ad position last detected in customer searches",
            amazonRecRank: "Amazon Rec. Rank",
            amazonRecRankTooltip: "Keywords Amazon recommends for this ASIN, numbered from most to least recommended",
            noneSelected: "None selected",
            bestSeller: "Best Seller",
            bestSellerTooltip: "Only show keywords that the selected product(s) is a best seller on",
            walmartSearchVolume: "Walmart Search Volume",
            walmartSearchVolumeTooltip: "Walmart Search Volume is based on proprietary estimates that are currently in Beta. Exact and historical data are currently unavailable.",
            advancedRank: "Advanced Rank Filter",
            advancedRankTooltip: "Enter in min/max number of ASINs you want to be appearing in a certain range of organic ranks for a keyword",
            competitorPerformanceScore: "Competitor Performance",
            bestSellerOnly: "Best Seller Only",
            bestSellerOnlyTooltip: "Filter for keywords that have products with best seller badge in their search results on Walmart",
            matchTypeOptions: {
                organic: "Organic",
                sponsored: "Sponsored",
                ppc: "Amazon Recommended",
                smart: "Smart Complete",
                contextual: "Organic",
                lexical: "Smart Complete"
            },
            amazonChoiceOptions: {
                analyzedProduct: "Analyzed product",
                otherProduct: "Other product",
                noBadges: "No badges"
            },
            walmartSearchVolumeOptions: {
                very_low: "Very low",
                low: "Low",
                medium: "Medium",
                high: "High",
                very_high: "Very high"
            },
            advancedRankFilter: "Advanced Rank Filter",
            advancedRankFilterTooltip: "Enter in min/max number of ASINs you want to be appearing in a certain range of organic ranks for a keyword",
            advancedRankFilterTooltipWalmart: "Enter in min/max number of Products you want to be appearing in a certain range of organic ranks for a keyword",
            considerRankAsinMin: "ASIN Min",
            considerRankAsinMax: "ASIN Max",
            considerRankProductIdMin: "ID Min",
            considerRankProductIdMax: "ID Max",
            considerRankMin: "Rank Min",
            considerRankMax: "Rank Max",
            all: "All",
            any: "Any",
            searchVolumeWalmartTooltip: "Estimated number of times this keyword is searched monthly on Walmart.",
            monthlySales: "Keyword Sales",
            monthlySalesTooltip: "Estimated number of monthly sales (in number of units) attributed to each keyword",
            monthlySalesLockedTooltip: "View the estimated number of sales generated by each keyword by upgrading to {upgradePlan}.",
            presets: {
                text1: "Narrow down your results fast for",
                text2: "or",
                topKeywords: "Top Keywords",
                topKeywordsTooltip: "Main keywords commonly used by competitors & have a substantial search volume",
                opportunityKeywords: "Opportunity Keywords",
                opportunityKeywordsTooltip: "Keywords that create opportunity to calculate your rank using activity, rank and search volume of the competitor"
            },
            presetsTitle: {topKeywords: "Top keywords Search", opportunityKeywords: "Opportunity Keywords Search "},
            monthlySalesLockedTitleTooltip: "View comprehensive keyword sales data to better prioritize your most profitable, high converting keywords",
            timePeriod: {
                label: "Time Period",
                tooltip: {
                    available: "Examine 24 months of data history for rank, search volume, and sales changes. Refine with chart filters in {node_0}.",
                    availableNode: "Historical Trends"
                },
                placeholder: "Current",
                info: "You can select a specific from the last two years."
            },
            numberOfCompetitors: "Number of Competitors",
            numberOfCompetitorsTooltip: "Enter the minimum and/or maximum number of competitor ASINs that you want to be ranking for keywords in the range of the next filter. For example, if you set Min: 2 and Max: 4, the tool will show keywords where 2 to 5 competitors are ranking.",
            competitorRank: "Competitor Rank",
            competitorRankTooltip: "Define the Organic Keyword Rank Range where you want the competitors from the previous filter to appear. For example, if you chose min 2 and max 4 in the first filter, and min 1 and max 10 in this filter, it means you're interested in keywords where at least 2 and no more than 4 competitors rank within the top 10 organic positions.",
            advancedFilterTitle: "Unlock advanced filtering with premium plans",
            showAllFilters: "Show all Helium 10 filters"
        },
        distribution: {
            title: "Keyword Distribution",
            total: "Total Keywords",
            sponsored: "Sponsored Keywords",
            organic: "Organic",
            amazonRecommended: "Amazon Recommended",
            smart: "Smart Complete",
            showHistoricalTrend: {
                title: "Show Historical Trend",
                tooltip: "Choose between Keyword Distribution by Type or Keyword Distribution Across Products over the last 24 months to identify trends.",
                lockedTooltip: "Unlock Historical Trend Analysis Charts by upgrading to Diamond",
                lockedRightTooltip: "Easily analyze historical keyword trends to identify growth opportunities for your products",
                tooltipNew: "Look back at 24 months of data to observe changes in historical rank, search volume, and sales. Filter these insights to observe seasonality by using an interactive chart."
            },
            organicTooltip: "Organic Search",
            paid: "Paid",
            paidTooltip: "Paid Search"
        },
        wordFrequency: {
            title: "Word Frequency",
            button: "View All",
            export: "Export",
            word: "Word",
            qty: "Frequency",
            setToast: {title: "Phrases Containing filter applied", text: 'Filtering results by "{keyword}"'},
            noData: "No Data"
        },
        productSearch: {
            single: "Single Product Search",
            multi: "Multi Product Search",
            singleSubtitle: "Based on last 30 days",
            multiSubtitle: "View 30 days summary for an individual product by clicking on the ASIN below."
        },
        boughtTogether: {
            button: "Frequently Bought Together",
            title: "Products Frequently Bought Together",
            description: "These are the products that show up in the “Frequently Bought Together” section of the listing for the product you searched.  ",
            modalButton: "View All in Black Box",
            emptyTitle: "This List is empty",
            productMultiSearch: "Product from Multi Search"
        },
        table: {
            keywordPhrase: "Keyword Phrase",
            keywordPhraseTooltip: "Keyword or phrase used by customers in search for a product",
            cerebroIqScore: "Cerebro IQ Score",
            cerebroIqScoreTooltip: "Score based on ratio of estimated search volume vs. number of competing products: a high score means a relatively high number of searches compared to the number of competitors; a low score means the opposite",
            searchVolume: "Search Volume",
            searchVolumeTooltip: "Estimated number of times this keyword is searched monthly on Amazon",
            sponsoredAsins: "Sponsored ASINs",
            sponsoredAsinsTooltip: "Number of ASINs detected running sponsored ads recently in search results associated with this keyword phrase",
            headlineAsins: "Headline ASINs",
            headlineAsinsTooltip: "Number or ASINs detected appearing in Headline ads recently in search results associated with this keyword phrase",
            competingProducts: "Competing Products",
            competingProductsTooltip: "Total number of products returned in a customer search using this keyword/phrase",
            cpr: "CPR",
            cprSimple: "CPR",
            cprTooltip: "Estimated number of units that need to be sold over 8 days, resulting from a search for this keyword in order for the product to rank on top half of page one for this keyword.",
            matchType: "Match Type",
            matchTypeTooltip: "Source from which a keyword is drawn",
            amazonRecRank: "Amazon Rec. Rank",
            amazonRecRankTooltip: "Keywords Amazon recommends for this ASIN, numbered from most to least recommended",
            sponsoredRank: "Sponsored Rank",
            sponsoredRankTooltip: "Sponsored ad position last detected in customer searches",
            organicRank: "Organic Rank",
            organicRankTooltip: "Organic search position detected for that keyword(s) for the analyzed product",
            searchVolumeTrend: "Search Volume Trend",
            searchVolumeTrendTooltip: "Over the past 30 days",
            titleDensity: "Title Density",
            titleDensityTooltip: "Number of page 1 products with the searched keyword in their title",
            sponsoredAvg: "Sponsored Rank (avg)",
            sponsoredAvgTooltip: "Average position detected out of all of the products in sponsored results",
            sponsoredCount: "Sponsored Rank (count)",
            sponsoredCountTooltip: "Number of queried products detected with sponsored asd for the keyword(s)",
            amzSuggestedAvg: "Amazon Recommended Rank (avg)",
            amzSuggestedAvgTooltip: "Average rank the analyzed products' keyword(s) hold, pertaining to Amazon's recommendation score",
            amzSuggestedCount: "Amazon Recommended Rank (count)",
            amzSuggestedCountTooltip: "Number of analyzed products for which Amazon recommends the keyword(s)",
            positionRank: "Position (Rank)",
            positionRankTooltip: "Position the first ASIN (in a multi ASIN search) holds in Amazon's search results",
            scrapedAt: "Scraped At",
            relativeRank: "Relative Rank",
            relativeRankTooltip: "Rank of the main ASIN relative to its competitors. For example, if two (2) competitors are ranked better than the main ASIN the relative rank will be three (3)",
            competitorRank: "Competitor Rank (avg)",
            competitorRankTooltip: "Average rank of competitor ASINs. ASINs that did not rank are ignored in this calculation.",
            rankingCompetitors: "Ranking Competitors (count)",
            rankingCompetitorsTooltip: "Number of competitor ASINs that ranked for the given phrase.",
            competitorPerformanceScore: "Competitor Performance Score",
            competitorPerformanceScoreTooltip: "Competitor Performance Index is a measure how successful the listed competitors are as a group for the given keyword.",
            competitorRankAvg: "Competitor Rank (avg)",
            competitorRankAvgTooltip: "Average rank of competitor ASINs. ASINs that did not rank are ignored in this calculation.",
            filteredKeywords: {one: "{value} Filtered Keyword", other: "{value} Filtered Keywords"},
            filteredKeywordsSelected: {one: "{value} Keyword selected", other: "{value} Keywords selected"},
            matchTypeTooltips: {
                amazonRecommended: "Amazon Recommended",
                sponsored: "Sponsored",
                organic: "Organic",
                smartComplete: "Smart Complete",
                organicTooltip: "Organic Search",
                paid: "Paid",
                paidTooltip: "Paid Search"
            },
            addToMyList: "Add to My List",
            exportAmazonRecommended: "Amazon Recommended",
            exportSponsored: "Sponsored",
            exportOrganic: "Organic",
            amzSuggestedAvgTable: "Amazon Recommended Rank (avg)",
            amzSuggestedCountTable: "Amazon Recommended Rank (count)",
            smartComplete: "Smart Complete",
            abad: "ABA Total<br/>Click Share",
            abadTooltip: "Amazon Brand Analytics",
            abadValueTooltip: "Sum of top 3 ASINs click share",
            organicRankAverage: "Organic Rank (avg)",
            abadConv: "ABA Total<br/>Conv. Share",
            abadConvTooltip: "Sum of top 3 ASINs click share",
            abadSearchFrequencyRank: "ABA SFR",
            abadSearchFrequencyRankTooltip: "The ranked order of search frequency. Search terms with the same search frequency over the selected time frame will show the same rank."
        },
        tableWalmart: {
            keywordPhrase: "Keyword Phrase",
            keywordPhraseTooltip: "Keyword for which the product appears in top 500 positions in Walmart search results",
            searchVolumeWalmart: "Search Volume",
            searchVolumeWalmartExport: "Search Volume (Walmart)",
            searchVolumeWalmartTooltip: "Walmart Search Volume is based on proprietary estimates that are currently in Beta. Exact and historical data are currently unavailable.",
            searchVolume: "Search Volume",
            searchVolumeAmazonExport: "Search Volume (Amazon)",
            amazonSearchVolume: "Amazon Search Volume",
            searchVolumeTooltip: "Estimated number of times this keyword is searched monthly on Amazon. You can use this to supplement your research while Walmart Search Volume is being improved.",
            competingProducts: "Competing Products",
            competingProductsTooltip: "Total number of products returned in a customer search using this keyword/phrase on Walmart",
            sponsoredProducts: "Sponsored Products",
            sponsoredProductsTooltip: "Number of products detected running sponsored ads in search results for this keyword phrase on Walmart",
            matchType: "Match Type",
            matchTypeTooltip: "Source from which a keyword is drawn",
            organicRank: "Organic Rank",
            organicRankTooltip: "Organic position last detected for analyzed product in customer search on Walmart",
            sponsoredRank: "Sponsored Rank",
            sponsoredRankTooltip: "Sponsored ad position last detected for analyzed product in customer search on Walmart",
            sponsoredRankAverage: "Sponsored Rank (avg)",
            sponsoredRankAverageTooltip: "Average position detected out of all of the products in sponsored results",
            sponsoredRankCount: "Sponsored Rank (count)",
            sponsoredRankCountTooltip: "Number of queried products detected with sponsored ads for the keyword(s)",
            positionRank: "Position (Rank)",
            positionRankTooltip: "Position the first Product (in a multi Product search) holds in Walmart's search results",
            relativeRank: "Relative Rank",
            relativeRankTooltip: "Rank of the main Product relative to its competitors. For example, if two (2) competitors are ranked better than the main Product the relative rank will be three (3)",
            competitorRank: "Competitor Rank (avg)",
            competitorRankTooltip: "Average rank of competitor Products. Products that did not rank are ignored in this calculation.",
            rankingCompetitors: "Ranking Competitors (count)",
            rankingCompetitorsTooltip: "Number of competitor Products that ranked for the given phrase.",
            competitorPerformanceScore: "Competitor Performance Score",
            competitorPerformanceScoreTooltip: "Score measures, from 1-10, how relevant the keyword is for the entered competitor products (excludes first product). A higher score means more products are ranked organically, and have low average organic rank"
        },
        landingDemo: {
            title1: "Cerebro helps you find top ranking keywords by selecting a specific product from the",
            title2: "marketplace.",
            subtitle: "Select an ASIN to get started",
            description: "Cerebro is key in successfully launching new products and bringing more awareness to your brand. You can also gauge the most effective keywords for your product on Amazon, optimize your product listing to boost sales, and keep competitive rates on your products.",
            backToSearch: "Back to Search"
        },
        searchVolume: {
            total: {
                tooltip: "Displays the total search volume for your filtered keywords over the past 30 days.",
                title: "Total Search Volume"
            },
            average: {
                tooltip: "Displays the average search volume for your filtered keywords over the past 30 days.",
                title: "Average Search Volume"
            },
            title: {amazon: "Amazon Search Vol.", walmart: "Walmart Search Vol."}
        },
        floatingButton: "Filter Results",
        descriptionFree: "Find keywords for your listing using reverse product lookup.",
        inputPlaceholderFree: "Keyword comparison across products available for Platinum and above.",
        inputPlaceholderNotFree: "Enter up to {maxAsins} product identifiers for keyword comparison.",
        searchBarTooltipTitle: "Unlock multi-product search on Platinum",
        searchBarTooltipButton: "Upgrade Now"
    }, zt = {very_low: "Very Low", low: "Low", medium: "Medium", high: "High", very_high: "Very High"}, _t = {
        button: "Create New Folder",
        title: "Create a new folder in My List",
        text: "Create a new folder in My List where you can save keywords for future reference throughout Helium 10 tools. Each folder is limited to use in a single marketplace.",
        folderName: "FolderName",
        folderNamePlaceholder: "Choose a name for this folder",
        folderNameRequired: "Required field",
        marketplace: "Marketplace",
        save: "Save",
        close: "Close"
    }, Ct = {
        minBiggest: "Min bigger than max",
        frankenstein: {limitIsExceeded: "Total count of symbols in all phrases can't be more than 200 000."},
        common: {
            400: "Wrong entered data or no results",
            402: "You have reached the limit of the uses",
            403: "Access denied",
            404: "Not found",
            409: "Entered data conflicts with your previous actions",
            422: "Entered data is invalid",
            500: "Unknown error",
            503: "Requested functional temporary unavailable",
            undefined: "Unknown error",
            "503Retry": "Retry again later"
        }
    }, Pt = {
        title: "Magnet",
        description: "Find high-volume search terms that are relevant to your entered keyword.",
        learnTooltip: "Watch videos and read articles to help you master Magnet",
        tabSingle: "Find Suggestions",
        tabMultiple: "Analyze Keywords",
        inputPlaceholderSingle: "Enter a keyword",
        inputPlaceholderMultiple: "Enter up to {number} keywords",
        addFromMyList: "Add from My List",
        landingSingleTitle: "Enter a keyword above to find top related keywords",
        landingSingleDescription: "We’ll use what you enter to suggest keywords that might be relevant to you. Use our filters to narrow down the results and pin those you like to a folder in My List.",
        landingMultipleTitle: "Get a detailed summary of up to 200 keywords that interest you",
        landingMultipleDescription: "We’ll provide relevant data to help you determine what keywords are worth keeping. Using filters, organize which keywords matter most, then add them to a My List folder.",
        landingWatchVideo: "Watch our introductory video",
        keywordSummary: {
            title: "Keyword Summary",
            totalKeywords: "Total Keywords",
            averageSearchVolume: "Average Search Volume",
            totalSearchVolume: "Total Search Volume",
            averageMagnetIq: "Average Magnet IQ Score",
            averageCompetingProducts: "Average Competing Products",
            totalAmazonSV: "Total Amazon SV",
            totalWalmartSV: "Total Walmart SV"
        },
        keywordSearchSummary: {
            title: "Keyword Search Summary",
            viewTopProducts: "View Top Products",
            searchVolume: "Search Volume",
            magnetIQScore: "Magnet IQ Score",
            magnetIQScoreTooltip: "Score based on the ratio of estimated search volume vs. number of competing products: a high score means a relatively high number of searches compared to the number of competitors; a low score means the opposite",
            cpr: "CPR"
        },
        searchVolumeDistribution: {title: "Search Volume Distribution", seriesName: "Volume"},
        history: {
            description: "Find a previous Magnet search and reload it without using any of your allotted searches.",
            columns: {keywordSearch: "Keyword Search", searchType: "Search Type"},
            searchTypes: {singleSearch: "Single Search", multiSearch: "Multi Search"},
            tooltip: "View your previous searches and reload results"
        },
        openInCerebro: "Click to open in Cerebro",
        tabSingleTooltip: "Find top related keywords",
        tabMultipleTooltip: "Enter up to 200 keywords and receive metrics",
        boughtTogether: {
            title: "Top Products",
            description: "Click a product below to find its top performing keywords in Cerebro."
        },
        choiseBadge: {
            amazon: "The keyword you are analyzing shows up as Amazon’s Choice for this product.",
            walmart: "The keyword you are analyzing shows up as Walmart’s Choice for this product."
        },
        asinInsteadOfKeywordError: {
            title: "ASIN detected",
            text: {part1: "You entered {asin}. View keywords for this ASIN on", part2: "or enter a keyword to continue."}
        },
        landingDemo: {
            title1: "Magnet helps you find top related keywords in the",
            title2: "marketplace.",
            subtitle: "Select a keyword below to get started",
            description: "We’ll use what you select to suggest keywords that might be relevant to your search. Use filters to narrow down the results and pin the keywords you like to a folder in My List."
        }
    }, Rt = {
        options: {
            ">10000": ">10,000",
            "5000-10000": "5,000-10,000",
            "1000-5000": "1,000-5,000",
            "<1000": "<1,000",
            "Very Low": "Very Low",
            Low: "Low",
            Medium: "Medium",
            High: "High",
            "Very High": "Very High",
            very_low: "Very Low",
            low: "Low",
            medium: "Medium",
            high: "High",
            very_high: "Very High"
        }
    }, Bt = {
        title: "You’ve searched this product before",
        description: "Do you want to load your previous search from history or run a new search?",
        newSearchButton: "Run New Search",
        fromHistoryButton: "Load from History"
    }, Ht = "No data available", Nt = {
        button: "Upgrade for Unlimited",
        texts: {
            cerebroAmazon: {
                one: "<b>{count}</b> Amazon search remain today",
                other: "<b>{count}</b> Amazon searches remain today"
            },
            cerebroWalmart: {
                one: "<b>{count}</b> Walmart search remain today",
                other: "<b>{count}</b> Walmart searches remain today"
            },
            magnetAmazon: {
                one: "<b>{count}</b> Amazon search remain today",
                other: "<b>{count}</b> Amazon searches remain today"
            },
            magnetWalmart: {
                one: "<b>{count}</b> Walmart search remain today",
                other: "<b>{count}</b> Walmart searches remain today"
            },
            cerebroDemo: "<b>You are viewing a demo of Cerebro.</b> Upgrade for keyword analysis across multiple products, preset library and quick filters.",
            magnetDemo: "You are viewing a demo of Magnet"
        },
        plans: {
            free: "Free",
            starter: "Starter",
            platinum: "Platinum",
            diamond: "Diamond",
            starterChinese: "Explorer",
            platinumChinese: "Entrepreneur",
            diamondChinese: "Professional",
            freeChinese: "Free"
        },
        prices: {platinum: "$99/mo", diamond: "$249/mo", commonMonth: "${price}/mo"},
        WALMART_features: {
            title: "Unlock this and other great features in Cerebro for Walmart",
            subtitle: "This feature is only available with a Diamond Plan or higher.",
            upgradeButton: "Learn About Plans",
            declineButton: "Not Right Now",
            features: [{
                title: "Single Product Search",
                values: {
                    Helium10_Starter: "2 uses per day",
                    Helium10_Free: "2 uses per day",
                    Helium10_Start_Your_Business: "2 uses per day"
                }
            }, {title: "Multi Product Search"}, {title: "Multiple Pages of Results"}, {title: "Filter Results"}, {title: "Get Competitors"}, {title: "History"}, {title: "Sales by Keyword for Cerebro and Magnet"}, {
                title: "Walmart",
                values: {Helium10_Free: "2 uses per day"}
            }, {
                title: "Follow-Up",
                values: {Helium10_Free: "2,000 e-mails", Helium10_Scale_Your_Business: "10,000 e-mails"}
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Free: "500 keywords", Helium10_Scale_Your_Business: "5,000 keywords"}
            }, {
                title: "Black Box",
                values: {Helium10_Starter: "20 uses", Helium10_Start_Your_Business: "20 uses"}
            }, {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "2 uses per day",
                    Helium10_Free: "2 uses per day",
                    Helium10_Start_Your_Business: "2 uses per day"
                }
            }, {
                title: "Magnet",
                values: {
                    Helium10_Starter: "2 uses per day",
                    Helium10_Free: "2 uses per day",
                    Helium10_Start_Your_Business: "2 uses per day"
                }
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20 keywords", Helium10_Scale_Your_Business: "5,000 keywords"}
            }, {title: "Xray", values: {Helium10_Starter: "50 launches"}}],
            cerebro: {
                title: "Unlock this and other great features in Cerebro for Walmart",
                subtitle: "This feature is only available with a Diamond Plan or higher."
            },
            magnet: {
                title: "Unlock this and other great features in Magnet for Walmart",
                subtitle: "Get unlimited searches and unlock more value with Diamond Plan.",
                titleHistory: "Unlock History and other great features in Magnet for Walmart"
            }
        },
        AMAZON_features: {
            title: "Unlock this and other great features in Cerebro for Amazon",
            subtitle: "This feature is only available with a Diamond Plan or higher.",
            upgradeButton: "Learn About Plans",
            declineButton: "Not Right Now",
            features: [{
                title: "Single Product Search",
                values: {Helium10_Free: "2 uses per day", Helium10_Starter: "2 uses per day"}
            }, {title: "Multi Product Search"}, {title: "Multiple Pages of Results"}, {title: "Filter Results"}, {title: "Get Competitors"}, {title: "History"}, {title: "Sales by Keyword for Cerebro and Magnet"}, {
                title: "Walmart",
                values: {Helium10_Free: "2 uses per day"}
            }, {
                title: "Follow-Up",
                values: {Helium10_Free: "2,000 e-mails", Helium10_Scale_Your_Business: "10,000 e-mails"}
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Free: "500 keywords", Helium10_Scale_Your_Business: "5,000 keywords"}
            }, {
                title: "Black Box",
                values: {Helium10_Starter: "20 uses", Helium10_Start_Your_Business: "20 uses"}
            }, {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "2 uses per day",
                    Helium10_Free: "2 uses per day",
                    Helium10_Start_Your_Business: "2 uses per day"
                }
            }, {
                title: "Magnet",
                values: {
                    Helium10_Starter: "2 uses per day",
                    Helium10_Free: "2 uses per day",
                    Helium10_Start_Your_Business: "2 uses per day"
                }
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20 keywords", Helium10_Scale_Your_Business: "5,000 keywords"}
            }, {title: "Xray", values: {Helium10_Start_Your_Business: "50 launches"}}],
            cerebro: {
                title: "Unlock this and other great features in Cerebro for Amazon",
                subtitle: "This feature is only available with a Platinum Plan or higher."
            },
            magnet: {
                title: "Unlock this and other great features in Magnet for Amazon",
                subtitle: "This feature is only available with a Platinum Plan or higher.",
                titleHistory: "Unlock History and other great features in Magnet for Amazon"
            }
        },
        WALMART_tools: {
            title: "You’ve used up your 2 free daily searches in Cerebro for Walmart.",
            subtitle: "Get unlimited searches per day and unlock more value with Diamond.",
            upgradeButton: "Upgrade Plan",
            declineButton: "Not Right Now",
            features: [{
                title: "Cerebro for Walmart",
                subtitle: "Reverse Product Lookup",
                values: {
                    Helium10_Starter: "2 uses per day",
                    Helium10_Free: "2 uses per day",
                    Helium10_Start_Your_Business: "2 uses per day"
                }
            }, {
                title: "Magnet for Walmart",
                subtitle: "Keyword Research",
                values: {
                    Helium10_Starter: "2 uses per day",
                    Helium10_Free: "2 uses per day",
                    Helium10_Start_Your_Business: "2 uses per day"
                }
            }, {
                title: "Xray for Walmart",
                subtitle: "Chrome Extension - Product Research",
                values: {
                    Helium10_Starter: "50 launches",
                    Helium10_Free: "50 launches",
                    Helium10_Start_Your_Business: "50 launches"
                }
            }, {
                title: "Profits for Walmart",
                subtitle: "Financial Analytics Dashboard",
                values: {Helium10_Starter: "90 days", Helium10_Free: "90 days", Helium10_Start_Your_Business: "90 days"}
            }],
            cerebro: {
                title: "You’ve used up your 2 free daily searches in Cerebro for Walmart.",
                subtitle: "Get unlimited searches per day and unlock more value with Diamond.",
                titleNew: "You’ve used up your {uses} free daily searches in Cerebro for Walmart."
            },
            magnet: {
                title: "You’ve used up your 2 free daily searches in Magnet for Walmart.",
                subtitle: "Get unlimited searches per day and unlock more value with Diamond.",
                titleNew: "You’ve used up your {uses} free daily searches in Magnet for Walmart."
            },
            titleNew: "You’ve used up your {uses} free daily searches in Cerebro for Walmart."
        },
        AMAZON_tools: {
            title: "You’ve used up your 2 free daily searches in Cerebro for Amazon",
            subtitle: "Get unlimited searches per day and unlock more value with Platinum.",
            upgradeButton: "Upgrade Plan",
            declineButton: "Not Right Now",
            features: [{
                title: "Cerebro for Amazon",
                subtitle: "Reverse Product Lookup",
                values: {Helium10_Free: "2 uses per day", Helium10_Starter: "2 uses per day"}
            }, {
                title: "Magnet for Amazon",
                subtitle: "Keyword Research",
                values: {Helium10_Free: "2 uses per day", Helium10_Starter: "2 uses per day"}
            }, {
                title: "Xray for Amazon",
                subtitle: "Chrome Extension - Product Research",
                values: {Helium10_Free: "50 launches", Helium10_Starter: "50 launches"}
            }, {
                title: "Keyword Tracker for Amazon",
                subtitle: "Product Rank Tracking",
                values: {
                    Helium10_Free: "20 keywords",
                    Helium10_Starter: "20 keywords",
                    Helium10_Start_Your_Business: "500 keywords"
                }
            }],
            cerebro: {
                title: "You’ve used up your 2 free daily searches in Cerebro for Amazon",
                subtitle: "Get unlimited searches per day and unlock more value with Platinum.",
                titleNew: "You’ve used up your {uses} free daily searches in Cerebro for Amazon"
            },
            magnet: {
                title: "You’ve used up your 2 free daily searches in Magnet for Amazon.",
                subtitle: "Get unlimited searches per day and unlock more value with Platinum.",
                titleNew: "You’ve used up your {uses} free daily searches in Magnet for Amazon."
            }
        },
        getPlan: "Get Plan",
        titles: {
            keywordSales: "Upgrade to unlock this and other great features",
            modalCommon: "Upgrade to unlock this and other great features"
        },
        subtitles: {
            modalPlatinum: "This feature is only available with a Platinum Plan or higher.",
            modalDiamond: "This feature is only available with a Diamond Plan or higher.",
            modalCommon: "This feature is only available with a {plan} Plan or higher.",
            modalUnlimitedCommon: "Get unlimited searches and unlock more value with {plan}.",
            pageCommon: "Get unlimited searches per day and unlock more value with {plan}."
        },
        featuresModal: {
            singleProductSearch: {
                title: "Single Product Search",
                values: {
                    Helium10_Starter: "2 uses per day",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 uses per day"
                }
            },
            singleProductSearch2: {
                title: "Single Product Search",
                values: {Helium10_Free: "Demo", Helium10_Starter: "2 uses per day"}
            },
            multiProductSearch: {title: "Multi Product Search"},
            multiplePagesResults: {title: "Multiple Pages of Results"},
            filterResults: {title: "Filter & Sort Results"},
            getCompetitors: {title: "Get Competitors"},
            history: {title: "History"},
            export: {title: "Export"},
            salesByKeyword: {title: "Sales by Keyword for Cerebro and Magnet"},
            magnetWalmart: {title: "Walmart", values: {Helium10_Free: "Demo"}},
            followUp: {
                title: "Follow-Up",
                values: {Helium10_Free: "2,000 e-mails", Helium10_Scale_Your_Business: "10,000 e-mails"}
            },
            keywordTracker: {
                title: "Keyword Tracker",
                values: {Helium10_Free: "500 keywords", Helium10_Scale_Your_Business: "5,000 keywords"}
            },
            blackBox: {title: "Black Box", values: {Helium10_Starter: "20 uses", Helium10_Start_Your_Business: "20 uses"}},
            cerebro: {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "2 uses per day",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 uses per day"
                }
            },
            magnet: {
                title: "Magnet",
                values: {
                    Helium10_Starter: "2 uses per day",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 uses per day"
                }
            },
            keywordTracker2: {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20 keywords", Helium10_Scale_Your_Business: "5,000 keywords"}
            },
            xray: {title: "Xray", values: {Helium10_Free: "50 launches"}},
            blackBoxProducts: {title: "Black Box", values: {Helium10_Free: "5 uses", Helium10_Starter: "20 uses"}},
            blackBoxProductsCerebro: {title: "Cerebro", values: {Helium10_Free: "Limited", Helium10_Starter: "Limited"}},
            blackBoxProductsMagnet: {title: "Magnet", values: {Helium10_Free: "Limited", Helium10_Starter: "Limited"}},
            abad: {title: "Amazon Brand Analytics within Cerebro"},
            walmartCerebroMagnet: {title: "Walmart for Cerebro or Magnet"},
            adtomic: {title: "Adtomic"},
            businessValuation: {title: "Business Valuation"},
            listingAnalyzer: {
                title: "Listing Analyzer",
                values: {
                    Helium10_Free: "2 searches / month",
                    Helium10_Starter: "2 searches / month",
                    Helium10_Start_Your_Business: "25 searches / month",
                    Helium10_Scale_Your_Business: "50 searches / month"
                }
            },
            abadNew: {title: "Amazon Brand Analytics within Cerebro or Magnet"},
            singleProductSearchUses: {
                title: "Single Product Search",
                values: {
                    Helium10_Starter: "{uses} uses per day",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} uses per day"
                }
            },
            singleProductSearch2Uses: {
                title: "Single Product Search",
                values: {Helium10_Free: "Demo", Helium10_Starter: "{uses} uses per day"}
            },
            followUpUses: {
                title: "Follow-Up",
                values: {Helium10_Free: "{uses} e-mails", Helium10_Scale_Your_Business: "{uses} e-mails"}
            },
            keywordTrackerUses: {
                title: "Keyword Tracker",
                values: {Helium10_Free: "{uses} keywords", Helium10_Scale_Your_Business: "{uses} keywords"}
            },
            blackBoxUses: {
                title: "Black Box",
                values: {Helium10_Starter: "{uses} uses", Helium10_Start_Your_Business: "{uses} uses"}
            },
            cerebroUses: {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "{uses} uses per day",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} uses per day"
                }
            },
            magnetUses: {
                title: "Magnet",
                values: {
                    Helium10_Starter: "{uses} uses per day",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} uses per day"
                }
            },
            keywordTracker2Uses: {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "{uses} keywords", Helium10_Scale_Your_Business: "{uses} keywords"}
            },
            xrayUses: {title: "Xray", values: {Helium10_Free: "{uses} launches"}},
            blackBoxProductsUses: {
                title: "Black Box",
                values: {Helium10_Free: "{uses} uses", Helium10_Starter: "{uses} uses"}
            },
            listingAnalyzerUses: {
                title: "Listing Analyzer",
                values: {
                    Helium10_Free: "{uses} searches / month",
                    Helium10_Starter: "{uses} searches / month",
                    Helium10_Start_Your_Business: "{uses} searches / month",
                    Helium10_Scale_Your_Business: "{uses} searches / month"
                }
            },
            salesHistoricalChart: {title: "Sales Historical Chart"},
            ppcBid: {title: "Helium 10 PPC Suggested Bid"}
        },
        featuresPage: {
            cerebroForWalmart: {
                title: "Cerebro for Walmart",
                subtitle: "Reverse Product Lookup",
                values: {
                    Helium10_Starter: "2 uses per day",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 uses per day"
                }
            },
            magnetForWalmart: {
                title: "Magnet for Walmart",
                subtitle: "Keyword Research",
                values: {
                    Helium10_Starter: "2 uses per day",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 uses per day"
                }
            },
            xrayForWalmart: {
                title: "Xray for Walmart",
                subtitle: "Chrome Extension - Product Research",
                values: {
                    Helium10_Starter: "50 launches",
                    Helium10_Free: "50 launches",
                    Helium10_Start_Your_Business: "50 launches"
                }
            },
            profitsForWalmart: {
                title: "Profits for Walmart",
                subtitle: "Financial Analytics Dashboard",
                values: {Helium10_Starter: "90 days", Helium10_Free: "90 days", Helium10_Start_Your_Business: "90 days"}
            },
            cerebroForAmazon: {
                title: "Cerebro for Amazon",
                subtitle: "Reverse Product Lookup",
                values: {Helium10_Free: "Demo", Helium10_Starter: "2 uses per day"}
            },
            magnetForAmazon: {
                title: "Magnet for Amazon",
                subtitle: "Keyword Research",
                values: {Helium10_Free: "Demo", Helium10_Starter: "2 uses per day"}
            },
            xrayForAmazon: {
                title: "Xray for Amazon",
                subtitle: "Chrome Extension - Product Research",
                values: {Helium10_Free: "50 launches", Helium10_Starter: "50 launches"}
            },
            keywordTrackerForAmazon: {
                title: "Keyword Tracker for Amazon",
                subtitle: "Product Rank Tracking",
                values: {
                    Helium10_Free: "20 keywords",
                    Helium10_Starter: "20 keywords",
                    Helium10_Start_Your_Business: "500 keywords"
                }
            },
            cerebroForWalmartUses: {
                title: "Cerebro for Walmart",
                subtitle: "Reverse Product Lookup",
                values: {
                    Helium10_Starter: "{uses} uses per day",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} uses per day"
                }
            },
            magnetForWalmartUses: {
                title: "Magnet for Walmart",
                subtitle: "Keyword Research",
                values: {
                    Helium10_Starter: "{uses} uses per day",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} uses per day"
                }
            },
            xrayForWalmartUses: {
                title: "Xray for Walmart",
                subtitle: "Chrome Extension - Product Research",
                values: {
                    Helium10_Starter: "{uses} launches",
                    Helium10_Free: "{uses} launches",
                    Helium10_Start_Your_Business: "{uses} launches"
                }
            },
            profitsForWalmartUses: {
                title: "Profits for Walmart",
                subtitle: "Financial Analytics Dashboard",
                values: {
                    Helium10_Starter: "{uses} days",
                    Helium10_Free: "{uses} days",
                    Helium10_Start_Your_Business: "{uses} days"
                }
            },
            cerebroForAmazonUses: {
                title: "Cerebro for Amazon",
                subtitle: "Reverse Product Lookup",
                values: {Helium10_Free: "Demo", Helium10_Starter: "{uses} uses per day"}
            },
            magnetForAmazonUses: {
                title: "Magnet for Amazon",
                subtitle: "Keyword Research",
                values: {Helium10_Free: "Demo", Helium10_Starter: "{uses} uses per day"}
            },
            xrayForAmazonUses: {
                title: "Xray for Amazon",
                subtitle: "Chrome Extension - Product Research",
                values: {Helium10_Free: "{uses} launches", Helium10_Starter: "{uses} launches"}
            },
            keywordTrackerForAmazonUses: {
                title: "Keyword Tracker for Amazon",
                subtitle: "Product Rank Tracking",
                values: {
                    Helium10_Free: "{uses} keywords",
                    Helium10_Starter: "{uses} keywords",
                    Helium10_Start_Your_Business: "{uses} keywords"
                }
            }
        },
        titlesModal: {
            blackBoxProductsLimit: {
                title: "You've reached your free search limit for Black Box",
                subtitle: "Increase your limit and unlock more value with Platinum",
                upgradeButton: "Compare Plans Now",
                subtitleCommon: "Increase your limit and unlock more value with {plan}"
            },
            blackBoxSalesChartAmazon: {
                title: "Unlock this and other great features in BlackBox for Amazon",
                subtitle: "Increase your limit and unlock more value with {plan}"
            },
            upgradeButton: ""
        },
        upgradeButton: "Upgrade Plan",
        upgradeTo: "Upgrade to {upgradePlan}"
    }, xt = {copy: "Copy {name}", copied: "{name} Copied"}, It = {
        cerebro: {amazon: "Need a ASIN? Try one of these:", walmart: "Need a Walmart product ID? Try on of these:"},
        magnet: {amazon: "Need a Keyword? Try one of these:", walmart: "Need a Keyword? Try one of these:"}
    }, Mt = {
        1001: "AUTH_INVALID_TOKEN",
        1002: "AUTH_NO_USER",
        2001: "Invalid ASIN identifier format {asin}",
        2002: "Invalid ASIN identifier {asin} for marketplace {marketplace}",
        2003: "Unexpected server error",
        2004: "Unexpected server error",
        2005: "Unexpected server error",
        2006: "Total count of symbols in all phrases can't be more than 200 000.",
        2007: "Unexpected server error",
        3001: "Can not find main ASIN search data",
        3002: "Can not find main product search data",
        3003: "Abbreviation not found for marketplace: {marketplace}",
        4001: "Unexpected server error",
        4002: "Unexpected server error",
        4003: "Unexpected server error",
        4004: "Unexpected server error",
        4005: "Unexpected server error",
        4006: "Unexpected server error",
        4007: "Unexpected server error",
        5001: "Empty search data",
        5002: "Empty all or main product data",
        5003: "Empty searches data",
        5004: "No data for product",
        5005: "Unexpected server error",
        5006: "Unexpected server error",
        6001: "Not inserted phrases",
        6002: "Not inserted phrases",
        6003: "Not exists this user common words",
        6004: "No client with required marketplace",
        6005: "You cannot see history. To do this, upgrade your Helium 10 plan.",
        6006: "Unexpected server error",
        6007: "Unexpected server error",
        6008: "Can't find product details for id {productId}",
        6009: "No results for keywords!",
        6010: "File was not uploaded.",
        6011: "Can't save Search Model",
        6012: "Can not delete model",
        6013: "Search model does not exist",
        6014: "Common Words for this user do not exist",
        6015: "Common Words are not deleted",
        6016: "Suggested Rank AVG item does not exist",
        6017: "Suggested Rank Count item does not exist",
        6018: "Suggested position item for filter does not exist",
        6019: "Sponsored average rank key does not exist",
        6020: "Unknown server error",
        6021: "Sponsored position item for filter does not exist",
        6022: "Phrase key does not exist in item",
        6023: "Position Range item does not exist",
        6024: "Competitor Performance Score item does not exist",
        6025: "Organic Rank item does not exist",
        6026: "Match type item does not exist",
        6027: "Phrase item is empty or does not exist",
        6028: "Ranking Competitors item does not exist",
        6029: "Relative Rank item does not exist",
        6030: "Position Rank item does not exist",
        6031: "Result number item for filter does not exist",
        6032: "Competitive AVG item does not exist",
        6033: "Search volume trend value does not exist",
        6034: "Title density Item for filter does not exist",
        6035: "Position Range item is empty or does not exist",
        6036: "Current ASIN item is empty or does not exist",
        6037: "Item is empty or does not exist",
        6038: "Search volume item for Amazon filter does not exist",
        6039: "Impression item in search volume filter does not exist",
        6040: "Tracked product id does not exist",
        6041: "Current product does not exist",
        6042: "No number of results",
        6043: "The phrase does not exist",
        6044: "Filter cannot include includes-all and includes-any params, which are equal to true or false",
        6045: "Most FrequentSeller Country Filter value does not exist",
        6046: "Can't build Reverse Search",
        6047: "You cannot perform export for past searches. To do this, upgrade your Helium 10 plan",
        6049: "Filter is not configured",
        6050: "External Service does not work or it returned invalid data",
        7001: "There must be results for at least 1 competitor Product",
        7002: "Failed to get phrases by specified ASIN",
        7003: "No items in search results",
        7004: "Wrong sort direction",
        7008: "Wrong product found in API",
        7009: "ASINs for ClickHouse reverse search are missing",
        7010: "Columns to select for ClickHouse reverse search are missing",
        7011: "Columns to select for ClickHouse reverse search have a wrong format",
        7012: "ASINs for ClickHouse reverse search have a wrong format",
        7013: "Wrong product id for Walmart",
        7014: "Error occurred: ' . json_encode($errors, JSON_THROW_ON_ERROR)",
        7015: "You are not able to search more than 50 keywords. To do this, upgrade your Helium 10 plan",
        7016: "You are not able to search more than 200 keywords",
        7017: "Your plan does not allow you to upload keywords",
        8001: "Unknown domain {domain}",
        8002: "Unknown marketplace ID: {marketplaceId}",
        8003: "Unknown short ID {shortId}",
        8004: "Unknown marketplace: {marketplace}",
        8005: "Unexpected server error",
        unknown: "Unknown server error",
        "rta-1001": "AUTH_INVALID_TOKEN",
        "rta-1002": "AUTH_NO_USER",
        "rta-2001": "Invalid ASIN identifier format {asin}",
        "rta-2002": "Invalid ASIN identifier {asin} for marketplace {marketplace}",
        "rta-2003": "Unexpected server error",
        "rta-2004": "Unexpected server error",
        "rta-2005": "Unexpected server error",
        "rta-2006": "Total count of symbols in all phrases can't be more than 200 000.",
        "rta-2007": "Unexpected server error",
        "rta-3001": "Can not find main ASIN search data",
        "rta-3002": "Can not find main product search data",
        "rta-3003": "Abbreviation not found for marketplace: {marketplace}",
        "rta-4001": "Unexpected server error",
        "rta-4002": "Unexpected server error",
        "rta-4003": "Unexpected server error",
        "rta-4004": "Unexpected server error",
        "rta-4005": "Unexpected server error",
        "rta-4006": "Unexpected server error",
        "rta-4007": "Unexpected server error",
        "rta-5001": "Empty search data",
        "rta-5002": "Empty all or main product data",
        "rta-5003": "Empty searches data",
        "rta-5004": "No data for product",
        "rta-5005": "Unexpected server error",
        "rta-5006": "Unexpected server error",
        "rta-6001": "Not inserted phrases",
        "rta-6002": "Not inserted phrases",
        "rta-6003": "Not exists this user common words",
        "rta-6004": "No client with required marketplace",
        "rta-6005": "You cannot see history. To do this, upgrade your Helium 10 plan.",
        "rta-6006": "Unexpected server error",
        "rta-6007": "Unexpected server error",
        "rta-6008": "Can't find product details for id {productId}",
        "rta-6009": "No results for keywords!",
        "rta-6010": "File was not uploaded.",
        "rta-6011": "Can't save Search Model",
        "rta-6012": "Can not delete model",
        "rta-6013": "Search model does not exist",
        "rta-6014": "Common Words for this user do not exist",
        "rta-6015": "Common Words are not deleted",
        "rta-6016": "Suggested Rank AVG item does not exist",
        "rta-6017": "Suggested Rank Count item does not exist",
        "rta-6018": "Suggested position item for filter does not exist",
        "rta-6019": "Sponsored average rank key does not exist",
        "rta-6020": "Unknown server error",
        "rta-6021": "Sponsored position item for filter does not exist",
        "rta-6022": "Phrase key does not exist in item",
        "rta-6023": "Position Range item does not exist",
        "rta-6024": "Competitor Performance Score item does not exist",
        "rta-6025": "Organic Rank item does not exist",
        "rta-6026": "Match type item does not exist",
        "rta-6027": "Phrase item is empty or does not exist",
        "rta-6028": "Ranking Competitors item does not exist",
        "rta-6029": "Relative Rank item does not exist",
        "rta-6030": "Position Rank item does not exist",
        "rta-6031": "Result number item for filter does not exist",
        "rta-6032": "Competitive AVG item does not exist",
        "rta-6033": "Search volume trend value does not exist",
        "rta-6034": "Title density Item for filter does not exist",
        "rta-6035": "Position Range item is empty or does not exist",
        "rta-6036": "Current ASIN item is empty or does not exist",
        "rta-6037": "Item is empty or does not exist",
        "rta-6038": "Search volume item for Amazon filter does not exist",
        "rta-6039": "Impression item in search volume filter does not exist",
        "rta-6040": "Tracked product id does not exist",
        "rta-6041": "Current product does not exist",
        "rta-6042": "No number of results",
        "rta-6043": "The phrase does not exist",
        "rta-6044": "Filter cannot include includes-all and includes-any params, which are equal to true or false",
        "rta-6045": "Most FrequentSeller Country Filter value does not exist",
        "rta-6049": "Filter is not configured",
        "rta-6046": "Can't build Reverse Search",
        "rta-6047": "You cannot perform export for past searches. To do this, upgrade your Helium 10 plan",
        "rta-6050": "External Service does not work or it returned invalid data",
        "rta-7001": "There must be results for at least 1 competitor Product",
        "rta-7002": "Failed to get phrases by specified ASIN",
        "rta-7003": "No items in search results",
        "rta-7004": "Wrong sort direction",
        "rta-7008": "Wrong product found in API",
        "rta-7009": "ASINs for ClickHouse reverse search are missing",
        "rta-7010": "Columns to select for ClickHouse reverse search are missing",
        "rta-7011": "Columns to select for ClickHouse reverse search have a wrong format",
        "rta-7012": "ASINs for ClickHouse reverse search have a wrong format",
        "rta-7013": "Wrong product id for Walmart",
        "rta-7014": "Error occurred: ' . json_encode($errors, JSON_THROW_ON_ERROR)",
        "rta-7015": "You are not able to search more than 50 keywords. To do this, upgrade your Helium 10 plan",
        "rta-7016": "You are not able to search more than 200 keywords",
        "rta-8001": "Unknown domain {domain}",
        "rta-8002": "Unknown marketplace ID: {marketplaceId}",
        "rta-8003": "Unknown short ID {shortId}",
        "rta-8004": "Unknown marketplace: {marketplace}",
        "rta-8005": "Unexpected server error",
        "rta-7017": "Your plan does not allow you to upload keywords",
        "rta-2010": "Invalid sort attribute",
        "rta-2011": "Invalid filter value",
        "rta-2012": "Invalid title include keyword length",
        "rta-2013": "Invalid title exclude keyword length",
        "rta-7020": "The name has already been taken",
        "rta-22001": "Failed to save filter preset. The maximum length of a filter preset name is 255 characters.",
        "rta-no-prev-searches": "No previous searches exist",
        "rta-0": "Unexpected error"
    }, Ft = {
        pageTitle: "Elite Analytics",
        title: "Elite Analytics",
        description: "Analyze your keywords and uncover your niche",
        learnTooltip: "Watch videos and read articles to help you master Magnet",
        totalDensity: "Title Density",
        totalDensityTooltip: "Percent of results with Title Density less than 12",
        totalSearchVolume: "Search Volume Trend",
        totalSearchVolumeTooltip: "Percent of results with an increasing Search Volume Trend",
        totalAverageReview: "High Review",
        totalAverageReviewTooltip: "Percent of High Review Count where greater than 6",
        totalMostFrequent: "Most Frequent Seller Country",
        totalMostFrequentTooltip: "Most Frequent Seller Country of your results below.",
        backToUpload: "Back to upload",
        showResults: "Show Results",
        tryAgain: "Try Again",
        modals: {
            importingTitle: "Importing",
            validatedTitle: "File Validated",
            limitExceededTitle: "Limit Exceeded",
            failedTitle: "Import Failed",
            validatedDescription: "You have loaded {requestedUses} out of {remainingUses} remaining keyword searches in your monthly plan limit.",
            limitExceededDescription: {
                one: "You have {remainingUses} out of {totalUses} keyword searches remaining in your monthly limit. Your file has {requestedUses} rows, we will use the top {count} row in the current file to analyze your results.",
                other: "You have {remainingUses} out of {totalUses} keyword searches remaining in your monthly limit. Your file has {requestedUses} rows, we will use the top {count} rows in the current file to analyze your results."
            },
            failedDescription: "Oops, the formatting was not recognized. Refer to the {link} for tips on formatting your file.",
            KnowledgeBaseArticle: "Knowledge Base article"
        },
        history: {
            descriptionTable: "Find a previous Elite Analytics report and reload it without using any of your allotted searches. ",
            columns: {fileName: "File Name", keywordCount: "Keyword  Count", reportRunDate: "Report Run Date"}
        },
        landing: {
            title: "Upload your keyword list to identify those with the most potential",
            description: "Upload up to 2000 rows of Black Box Keywords, Amazon Brand Analytics Report, My List Keywords or your own curated list to reveal key Helium 10 metrics to identify new opportunities per month.<br/><br/>The report will provide Title Density, Search Volume (+Trend), High Review Count, Median Review Count, and Most Frequent Seller Country. ",
            buttonUpload: "Upload Keyword Report",
            viewSample: {curiousAbout: "Curious about the report?", view: "View", sample: "sample"},
            keywords: {one: "{count}/{total} monthly keyword remain", other: "{count}/{total} monthly keywords remain"},
            titleModal: "Elite Analytics Sample Report",
            videoTitle: "Not sure how to format your report?",
            videoButton: "Watch our demo video",
            upsell: {
                title: "Monthly limit reached",
                description: "You’ve exceeded your limit of 2000 keyword searches a month. You can view your past Keyword Reports via the history button on the top right of this view.<br/><br/>Contact sales to learn how to increase your keyword limit for the month.",
                button: "Contact Sales"
            },
            notElite: {
                title: "Unlock key insights with Elite Analytics",
                description: "Elite Analytics allows you to upload up to 2000 rows of Black Box Keywords, Amazon Brand Analytics Report, My List Keywords or your own curated list to reveal key Helium 10 metrics to identify new opportunities per month.",
                learnMore: "Learn More About Elite",
                subDescription: "The report will provide Keyword Sales, Title Density, Search Volume (+Trend), High Review Count, Median Review Count, and Most Frequent Seller Country. Curious about the report?",
                sample: "sample."
            }
        },
        filter: {
            exactTitleMatchProductsCount: {
                title: "Title Density",
                tooltip: "Number of page 1 products with the searched keyword in their title"
            },
            impressionExact30: {
                title: "Search Volume",
                tooltip: "Estimated number of times this keyword phrase is searched for monthly"
            },
            searchVolumeTrend30: {title: "Search Volume Trend", tooltip: "Over the past 30 days"},
            productsWithReviewsCount: {
                title: "High Review Count",
                tooltip: "Number of results in top 12 with over 1000 reviews"
            },
            medianReviews: {title: "Median Review Count", tooltip: "Median number of reviews of top 12"},
            mostFrequentSellerCountryCode: {
                title: "Most Frequent Seller Country",
                tooltip: "Top Country of Seller in the Top 50",
                placeholder: "Non selected"
            }
        },
        table: {
            keyword: {title: "Keywords"},
            exactTitleMatchProductsCount: {
                title: "Title Density",
                tooltip: "Number of page 1 products with the searched keyword in their title"
            },
            impressionExact30: {
                title: "Search Volume",
                tooltip: "Estimated number of times this keyword phrase is searched for monthly"
            },
            searchVolumeTrend30: {title: "Search Volume Trend", tooltip: "Over the past 30 days"},
            productsWithReviewsCount: {
                title: "High Review Count",
                tooltip: "Number of results in top 12 with over 1000 reviews"
            },
            medianReviews: {title: "Median Review", tooltip: "Median number of reviews of top 12"},
            topSellerCountry: {title: "Most Frequent Seller Country", tooltip: "Top Country of Seller in the Top 50"},
            title: {one: "{count} keyword", other: "{count} keywords"},
            titleSelected: {one: "{count} keyword selected", other: "{count} keywords selected"},
            monthlySales: {
                title: "Keyword Sales",
                tooltip: "Estimated number of monthly sales (in number of units) attributed to each keyword"
            }
        },
        distributionByCountryModal: {title: "Most Frequent Seller Country: {keyword}"},
        beta: {marketplaceTooptip: "The Beta includes the US Marketplace."},
        upload: {
            uploadStage: {
                title: "Upload Keyword Report File",
                description: "Upload up to 2000 rows of Black Box Keywords, Amazon Brand Analytics Report, My List Keywords or your own custom file to start finding opportunities.",
                fileRequirements: "File Requirements",
                list: {item1: "Prefilled with one keyword or keyword phrase per row", item2: "CSV file format"},
                footer: {
                    part1: "Need additional guidance? Refer to the",
                    part2: "Knowledge base article",
                    part3: "for more details."
                },
                browse: "Browse",
                uploadFile: "Upload File",
                noFileSelected: "No file selected"
            }
        },
        tooltips: {
            searchVolume: {
                green: "“Green” indicates a positive 30 day trend",
                red: "“Red” indicates a negative 30 day trend"
            },
            highReviewCount: {
                green: "“Green” indicates fewer than 5 out of the top 12 results have over 1000 reviews.",
                yellow: "“Yellow” indicates when 5 to 6 out of the top 12 results have over 1000 reviews.",
                red: "“Red” indicates greater than 6 out of 12 results have over 1000 reviews."
            },
            medianReviewCount: {
                green: "“Green” indicates a review count under 200 reviews.",
                yellow: "“Yellow” indicates a review count between 200 and 800 reviews.",
                red: "“Red” indicates a review count of over 800 reviews."
            }
        }
    }, Dt = {
        title: "Black Box",
        description: "Uncover opportunities with product research",
        tabs: {
            products: {
                name: "Products",
                description: "Find a product to sell by evaluating products, keywords, competitors and more",
                tooltip: "Find the best selling product based on the most innovative filters, helping you choose potential products to sell."
            },
            keywords: {
                name: "Keywords",
                description: "---",
                tooltip: "Get popular keywords by setting different filters. Choosing the right keywords can help you find the right product."
            },
            competitors: {
                name: "Competitors",
                description: "---",
                tooltip: "Check competitors' core data such as competitor sales, market, brand, seller or listings."
            },
            niche: {
                name: "Niche",
                description: "---",
                tooltip: "Find a segment of a larger market that can be defined by your unique keyword."
            },
            productTargeting: {
                name: "Product Targeting",
                description: "---",
                tooltip: "Optimize your product targeting by checking different sources: Frequently Bought Together, Amazon Suggestion and Customer Also Bought."
            },
            eliteAnalytics: {name: "Elite Analytics", description: "Uncover opportunities with product research"},
            abaTopSearchTerms: {name: "ABA Top Search Terms"}
        },
        buttons: {
            saveAsFilterPreset: "Save as Filter Preset",
            search: "Search",
            filterLibrary: "Filter Library",
            createYourOwnPresets: "Create your own presets",
            returnToPreviousVersion: "Return to Previous Version",
            restoreLastSearch: "Restore Last Search",
            addToMyList: "Add to My List",
            removeFromMyList: "Remove from My List",
            runInCerebro: "Run Cerebro",
            runInListingAnalyzer: "Run Listing Analyzer",
            runInListingAnalyzerTooltip: "Select up to {maxAsins} products to analyze listing quality"
        },
        products: {
            filterGroups: {product: "Product", competitors: "Competitors", sales: "Sales"},
            fields: {
                categories: {
                    label: "Category & Subcategory",
                    tooltip: "Available ungated product categories",
                    placeholder: "Select one or more categories & subcategories"
                },
                reviewCount: {label: "Review Count", tooltip: "Total number of customer reviews", chip: "Review Count"},
                reviewRating: {label: "Review Rating", tooltip: "Amazon customer reviews from poor (1) to outstanding (5)"},
                salesRank: {
                    label: "Best Seller Rank (BSR)",
                    tooltip: "Amazon-awarded rank based on recent and historical sales",
                    chip: "Sales rank"
                },
                shippingSizeTier: {label: "Shipping Size", tooltip: "Product size determining FBA shipping fees"},
                weight: {
                    label: "Weight (lb)",
                    tooltip: "Product and package total weight",
                    chip: "Weight",
                    tableTooltip: "Package Weight(lb)",
                    unit: "lb"
                },
                fulfillment: {
                    label: "Fulfillment",
                    tooltip: "Method of storage and shipping<br/>FBA = Fulfilled by Amazon<br/>FBM = Fulfilled by Merchant<br/>Amazon = Sold by Amazon ",
                    chip: {title: "Fulfillment"}
                },
                numberOfImages: {
                    label: "Number of Images",
                    tooltip: "Number of images on a product listing",
                    chip: "Number of images"
                },
                variationCount: {
                    label: "Variation Count",
                    tooltip: "Number of product variations",
                    chip: "Variation count"
                },
                titleKeyword: {
                    label: "Title Keywords",
                    tooltip: "Product title keyword search only",
                    placeholder: "Ex: red dress"
                },
                titleExcludeKeyword: {
                    label: "Exclude Title Keywords",
                    tooltip: "Exclude products that contain the entered keywords in the title, separated by commas",
                    chip: "Exclude title keyword",
                    placeholder: "Ex: red, blue"
                },
                numberOfSellers: {
                    label: "Number of Sellers",
                    tooltip: "Number of active sellers",
                    chip: "Number of sellers"
                },
                brandInclude: {
                    label: "Exact Brand Search",
                    tooltip: `Exact brand names, separated by commas. If your brand name has a comma in it, please add quotation marks around the name to populate search results. Example <b>"ABC's LLC"</b>`,
                    placeholder: "Ex: Apple",
                    chip: "Brand include"
                },
                brandExclude: {
                    label: "Exclude Brands",
                    tooltip: `Exclude exact brand names, separated by commas. If your brand name has a comma in it, please add quotation marks around the name to populate search results. Example <b>"ABC's LLC"</b>`,
                    chip: "Brand exclude",
                    placeholder: "Ex: Belkin"
                },
                sellerInclude: {
                    label: "Exact Seller Search",
                    tooltip: `Exact seller names, separated by commas. If your seller name has a comma in it, please add quotation marks around the name to populate search results. Example <b>"ABC's LLC"</b>`,
                    chip: "Seller include",
                    placeholder: "Ex: Anker"
                },
                sellerExclude: {
                    label: "Exclude Seller",
                    tooltip: `Exclude exact seller names, separated by commas. If your seller name has a comma in it, please add quotation marks around the name to populate search results. Example <b>"ABC's LLC"</b>`,
                    chip: "Seller exclude",
                    placeholder: "Ex: Satechi"
                },
                price: {
                    label: "Price",
                    tooltip: "Price at which the product is sold",
                    tableTooltip: "Historical Price with Price Trend",
                    priceTooltip: "Current Price",
                    priceTrendTooltip: "90 Days Price Trend",
                    chip: "Price"
                },
                priceChange: {
                    label: "Price Change (%)",
                    tooltip: "Percentage change over the past 90 days",
                    chip: "Price change"
                },
                monthlySales: {
                    label: "Monthly Sales (units)",
                    tooltip: "Estimated number of units sold over the past 30 days",
                    tableLabel: "Monthly Sales",
                    chip: "Monthly Sales",
                    tableTooltip: "Historical Monthly Sales with Sales Trend",
                    salesTooltip: "Monthly Sales (Units)",
                    salesTrendTooltip: "90 Days Sales Trend"
                },
                salesYearOverYear: {
                    label: "Sales Year over Year (%)",
                    tooltip: "Percentage change over the past 12 months",
                    chip: "Sales Year over Year"
                },
                bestSalesPeriod: {
                    label: "Best Sales Month",
                    tooltip: "Calendar month in which a product sees its highest sales volume",
                    placeholder: "Enter a date",
                    tableLabel: "Best Sales Period"
                },
                salesToReviews: {
                    label: "Sales to Reviews Ratio",
                    tooltip: "Monthly sales (units) / total reviews count",
                    tableLabel: "Sales to Reviews",
                    chip: "Sales to reviews"
                },
                monthlyRevenue: {
                    label: "Monthly Revenue",
                    tooltip: "Estimated revenue for a product over the past 30 days",
                    chip: "Monthly revenue"
                },
                salesChange: {
                    label: "Sales Change (%)",
                    tooltip: "Percentage change in monthly sales over the past 90 days",
                    chip: "Sales change"
                },
                product: {label: "Product", tooltip: "Need tooltip"},
                categoryBSR: {
                    label: "Category BSR",
                    tooltip: "Category Best Seller Rank",
                    mainCategoryTooltip: "Main Category BSR",
                    subcategoryTooltip: "Subcategory BSR",
                    subcategoryTemporaryTooltip: "Subcategory"
                },
                monthlySalesTable: {
                    label: "Monthly Sales",
                    tooltip: "Estimated number of units sold over the past 30 days"
                },
                reviews: {
                    label: "Reviews",
                    tooltip: "Reviews Counts with Rating",
                    numberOfReviewTooltip: "Total Number of Customer Reviews for a Product",
                    reviewRatingTooltip: "Review Rating"
                },
                seller: {
                    label: "Seller",
                    tooltip: "Seller Name and Number of Seller",
                    sellerNameTooltip: "Seller Name",
                    numberOfSellersTooltip: "Number of Active Sellers"
                },
                lastYearSales: {
                    label: "Last Year Sales",
                    tooltip: "Last Year Sales with Sales Trend",
                    salesTooltip: "Last Year Sales (Units)",
                    salesYearOverYearTooltip: "Sales Year Over Year"
                },
                shippingDetails: {
                    label: "Shipping Details",
                    tooltip: "Shipping Size Tier with Dimensions",
                    productSizeTooltip: "Product Size Determining FBA Shipping Fees",
                    dimensionsTooltip: "Package Dimensions (Inch)"
                },
                storageFee: {label: "Storage Fee", tooltip: "Storage Fee (1,000 units/month)"},
                "Best Sales Period": {label: "Best Sales Period", tooltip: "Need tooltip"},
                age: {
                    label: "Age (Month)",
                    tooltip: "Average Listing Age for the Top Products",
                    filterLabel: "Listing Age (Months)",
                    filterTooltip: "Listing's age in months",
                    chip: "Listing Age"
                },
                titleIncludeKeyword: {
                    label: "Title Keywords",
                    tooltip: "Product title keyword search only",
                    placeholder: "Ex: red dress",
                    chip: "Title keyword"
                },
                category: {
                    label: "Category & Subcategory",
                    tooltip: "Available ungated product categories",
                    placeholder: "Select one or more categories & subcategories",
                    chip: {title: "Category", subtitle: "Subcategory"}
                },
                reviewsRating: {
                    label: "Review Rating",
                    tooltip: "Amazon customer reviews from poor (1) to outstanding (5)",
                    chip: "Reviews Rating"
                },
                sizeTier: {chip: {title: "Shipping Size"}},
                bestMonth: {
                    label: "Best Sales Month",
                    tooltip: "Calendar month in which a product sees its highest sales volume",
                    placeholder: "Enter a date",
                    chip: "Best Sales Month",
                    tableLabel: "Best Sales Period",
                    tableTooltip: "Calendar Month in Which a Product Sees its Highest Sales Volume"
                },
                brand: {label: "Brand", tooltip: "Brand Names"}
            },
            common: {anyCategory: "Any category", anyCategorySimple: "any category"},
            filterTabs: {simple: "Simple", advanced: "Advanced", advancedTooltip: "Need text"},
            simple: {
                title: "Answer these questions to find a product",
                subtitle: "I want to sell a product...",
                inThe: "In the",
                marketplaceFor: "marketplace for",
                thatNeeds: "that needs",
                improvementRange: "(improvement range)",
                improvement: "improvement,",
                competitionRange: "(competition range)",
                whereCompetitionIs: "where competition is",
                priceRange: "(price range)",
                iWantToSellMyProductFor: "I want to sell my product for",
                monthlyRevenueOptions: "(monthly revenue options)",
                withMonthlyRevenueOf: "with a monthly revenue of",
                marketplace: "marketplace",
                for: "for",
                price: "(price range)",
                monthlyRevenue: "(monthly revenue options)"
            },
            advanced: {
                titlePart1: "Find products on",
                titlePart2: "that match your criteria",
                presetsTitle: "Use a Filter Preset to accelerate your search:"
            },
            result: {
                title1: "Products on",
                title2: "that match your criteria",
                editFilters: "Edit Filters",
                titleTable: "Viewing {from}-{to} of {total} items",
                titleTableSelected: "Selected {selected} of {total} items",
                advanced: "Show Advanced Product Details"
            },
            chartTitles: {
                bsr: "Best Sellers Rank: {asin}",
                price: "Price: {asin}",
                sales: "Sales: {asin}",
                reviews: "Reviews: {asin}",
                review: "Reviews: {asin}"
            },
            exportTitles: {
                asin: "ASIN",
                title: "Title",
                sellerType: "Fulfillment",
                category: "Category",
                bsr: "BSR",
                subcategory: "Subcategory",
                subcategoryBsr: "Subcategory BSR",
                price: "Price",
                priceChange: "Price Trend (90 days)",
                monthlySales: "Monthly Sales",
                salesChange: "Sales Trend (90 days)",
                monthlyRevenue: "Monthly Revenue",
                reviewCount: "Review Count",
                reviewsRating: "Reviews Rating",
                bbSeller: "Seller",
                numberOfSellers: "Number of Active Sellers",
                yearSales: "Last Year Sales",
                salesYearOverYear: "Sales Year Over Year",
                sizeTier: "Size Tier",
                width: "Width",
                height: "Height",
                length: "Length",
                weight: "Weight",
                storageFee: "Storage Fee",
                bestMonth: "Best Sales Period",
                age: "Age (Month)",
                numberOfImages: "Number of Images",
                variationCount: "Variation Count",
                salesToReviews: "Sales to Reviews",
                brand: "Brand"
            },
            chartAxis: {
                bsr: "Sales Rank",
                price: "Price",
                sales: "Sales",
                reviewCount: "Review Count",
                rating: "Rating",
                "7DayMovingAverage": "7-Day Moving Average",
                trend: "Trend",
                mainCategoryBSR: "Main Category BSR",
                subcategoryBSR: "Subcategory BSR"
            }
        },
        tabsTitle: "Search For:",
        storageFee: {janSept: "Jan - Sep", octDec: "Oct - Dec"},
        presetFilters: {
            "Product sales increase fast over the last month": {
                title: "High Growth",
                description: "Product sales increase fast over the last month"
            },
            "Product selling well but doesn’t have a good rating": {
                title: "Low Rating",
                description: "Product selling well but doesn’t have a good rating"
            },
            "Few product images but high sales": {
                title: "Low Image Count",
                description: "Few product images but high sales"
            },
            "Small size but sales well": {title: "Small and Light", description: "Small size but sales well"}
        },
        presetModal: {
            title: {new: "Filter Preset Name", edit: "Rename Filter Preset Name"},
            name: {label: "Enter a unique preset name", placeholder: "Choose a name for this preset"}
        },
        filters: {
            messages: {
                rename: {success: "Filter is renamed"},
                create: {success: "Preset filter saved to Filter Library"},
                delete: {success: "Preset filter deleted from Filter Library"}
            }
        },
        addToMyList: {
            success: "Products have been successfully added to My List",
            warning: "All the listed products have already been added to My List",
            reject: "Failed to add products to My List"
        },
        upgradeBanner: {text: "Searches Remaining: <b>{uses}</b>", button: "UPGRADE FOR UNLIMITED"},
        options: {
            shoppingSize: {
                1: "Small Standard-Size",
                2: "Large Standard-Size",
                3: "Small Oversize",
                4: "Medium Oversize",
                5: "Large Oversize",
                6: "Special Oversize"
            },
            fulfillment: {1: "Amazon", 2: "FBA", 3: "FBM"},
            simpleImprovementRange: {1: "a little", 2: "some", 3: "a lot of"},
            simpleCompetitionRange: {1: "low", 2: "medium", 3: "high"},
            simplePrice: {1: "$0-30", 2: "$30-100", 3: "$100+"},
            simpleMonthlyRevenue: {1: "$0-1,000", 2: "$1,000-10,000", 3: "$10,000+"}
        }
    }, Et = {cerebro: "Cerebro", magnet: "Magnet", opportunity: "Elite Analytics"}, qt = {
        anythinElse: {
            cerebro: "Interested in Cerebro Bulk Reports",
            blackBox: "Interested in Black Box Bulk Reports"
        }
    }, Vt = {title: "Data is randomized for your plan level.", button: "Upgrade for Full Results"},
    Kt = {day: {one: "Day", other: "Days"}, year: {one: "Year", other: "Years"}, allTime: "All time"},
    Lt = {moreThan: "more than", lessThan: "less than"}, Wt = {
        downloadCSV: "Download CSV",
        downloadXLS: "Download XLS",
        downloadPNG: "Download PNG image",
        downloadJPEG: "Download JPEG image"
    }, Ut = {
        decline: "Not Right Now",
        addToKeywordTracker: "Add to Keyword Tracker",
        addToMyList: "Add to My List",
        trackCompetitor: "Track Competitor",
        analyzeKeywordsInCerebro: "Analyze Keywords in <b>Cerebro</b>",
        runListingAnalyzer: "Run <b>Listing Analyzer</b>",
        export: "Export",
        viewWalkthrough: "View Walkthrough"
    }, Ot = {
        modal: {
            title: "Connect your Seller Account for insights into Amazon Brand Registry data within Cerebro",
            sellers: "{number} users connected their Seller Account last month.",
            text: {
                part1: "Securely connect your Amazon account to Helium 10 to unlock powerful tools and insights for your business.",
                part2: "Amazon Brand Registry data within Cerebro is only available to sellers who are enrolled in Amazon’s Brand Registry program.",
                part2New: "Amazon Brand Registry data within Cerebro or Magnet is only available to sellers who are enrolled in Amazon’s Brand Registry program."
            },
            acceptButton: "Connect to Amazon",
            titleNew: "Connect your Seller Account for insights into Amazon Brand Registry data within Cerebro or Magnet"
        }
    }, Yt = {
        modal: {
            title: "Amazon Brand Analytics within Cerebro requires Brand Registry",
            text: {
                part1: "Amazon Brand Registry enables you to more accurately represent your brand, find and report violations, and protect your intellectual property.",
                part2: {
                    part1: "It is only available to sellers who are enrolled in Amazon’s Brand Registry program. Visit",
                    button: "Amazon’s program details page",
                    part2: "to learn about benefits and eligibility requirements."
                },
                part3: "Learn how Helium 10 strategies can help you get Brand Registered quickly"
            },
            acceptButton: "Learn More",
            titleNew: "Amazon Brand Analytics within Cerebro or Magnet requires Brand Registry"
        }
    }, Gt = {
        drawer: {
            title: "Amazon Brand Analytics",
            tooltip: "Discover what products are winning the most clicks and conversions on strategic search terms. Assess the impact of your marketing campaigns by monitoring trends.",
            chart: {
                title: "Top 3 ASINs Overview",
                yAxis: {totalRate: "Total Share", searchFrequencyRank: "Search Frequency Rank"},
                legend: {
                    clickedRate: {title: "Top 3 ASINs Clicked Share", tooltip: "Sum of top 3 ASINs click share"},
                    conversionRate: {title: "Top 3 ASINs Conv. Share", tooltip: "Sum of top 3 ASINs conversion share"},
                    frequencyRank: {
                        title: "Search Frequency Rank",
                        tooltip: "Ranking base on search frequency across all of Amazon search terms for a particular marketplace"
                    }
                },
                noHoveredYet: "Hover over the graph to see top 3 clicked ASINs",
                reportingRange: "Reporting Range"
            },
            top3Asins: {
                title: "Top 3 Clicked ASINs",
                asinTitle: "#{number} Clicked ASIN",
                rates: {title: "Shares", click: "Click", conversion: "Conv."}
            },
            tables: {
                fields: {
                    product: {
                        title: "{date} Top Clicked ASINs",
                        tooltip: "Top 3 clicked ASINs based on the search results in the selected time frame"
                    },
                    clickRate: {
                        title: "Click Share",
                        tooltip: "Percentage of clicks that the product received in comparison to the total clicks based on the search results in the selected time frame"
                    },
                    conversionRate: {
                        title: "Conv. Share",
                        tooltip: "Percentage of conversions that the product achieved in comparison to the total conversions based on the search results in the selected time frame."
                    },
                    organicRank: {
                        title: "Organic Rank (avg.)",
                        tooltip: "[Helium 10 Data] Organic search position detected for that keyword(s) for the analyzed product"
                    },
                    sponsoredRankAvg: {
                        title: "Sponsor Rank (avg.)",
                        tooltip: "[Helium 10 Data] Sponsored Ads detected the last position in customer search"
                    }
                }, subtotal: "Subtotal"
            }
        },
        calendar: {
            weekly: {label: "Weekly", info: "You can select the minimum range of 14 days."},
            monthly: {label: "Monthly", info: "You can select the minimum range of 2 months."},
            quarterly: {label: "Quarterly", info: "You can select the minimum range of 2 quarters."}
        },
        clickAndConversionRate: {
            title: "Click & Conversion Share: {asin}",
            subtitle: "Based on data from Amazon Brand Analytics",
            legend: {clickRate: "Click Share", conversionRate: "Conversion Share"},
            emptyData: "This ASIN did not rank in the top 3 for the selected period of time.",
            period: {
                last30days: "Last 30 days",
                last2Months: "Last 2 Months",
                last6Months: "Last 6 Months",
                last12Months: "Last 12 Months"
            }
        },
        period: {
            info: "You can select the minimum range of {number} {period}.",
            periods: {days: "days", weeks: "weeks", months: "months", quarters: "quarters"},
            presets: {weekly: "Weekly", monthly: "Monthly", quarterly: "Quarterly"}
        },
        filter: {
            clickShare: {
                title: "ABA Top 3 ASINs Total Click Share",
                tooltip: "Sum of top 3 ASINs click share from ABA Data"
            },
            conversionShare: {
                title: "ABA Top 3 ASINs Total Conv. Share",
                tooltip: "Sum of top 3 ASINs conv. share from ABA Data"
            },
            searchFrequencyRank: {
                title: "Search Frequency Rank",
                tooltip: "The ranked order of search frequency. Search terms with the same search frequency over the selected time frame will show the same rank."
            }
        },
        table: {
            clickShare: {
                tooltip: {
                    title: "Keyword metrics, including click & conversion rates for the top 3 ASINs",
                    restricted: "Unlock Amazon Brand Analytics and comprehensive keyword sales data by upgrading your plan to {upgradePlan}. ",
                    noTokens: "It is only available to sellers who are connected their Amazon account to Helium 10 and enrolled in Amazon’s Brand Registry program"
                }
            },
            convShare: {
                tooltip: {
                    title: "Gain valuable insights into the top 3 clicked products for each keyword",
                    restricted: "View Historical Keyword Search Rank by Upgrading to {upgradePlan}.",
                    noTokens: "It is only available to sellers who are connected their Amazon account to Helium 10 and enrolled in Amazon’s Brand Registry program"
                }
            }
        }
    }, $t = {today: "Today", yesterday: "Yesterday", previousDay: "Previous day", lastNDays: "Last {N} days"},
    jt = "Period", Qt = {
        tooltipSingle: "Perform a search on Listing Analyzer for the ASIN entered in this search.",
        tooltipMultiple: "Perform a search on Listing Analyzer for the first {maxAsins} ASINs in this search"
    }, Xt = {
        title: "Historical Trend",
        allProducts: "All Products",
        tableTitleText: {selectedDate: "Historical Trend: {date}"},
        keywordType: {
            organicSearch: "Organic Search",
            sponsoredProduct: "Sponsored Product",
            amazonRecommended: "Amazon Recommended"
        },
        distributionBy: {
            keywordType: {
                switch: "Keyword Type",
                keywordsCount: {
                    title: "Total Number of Keywords by Type",
                    tooltip: "View the distribution of Sponsored Product, Organic Search and Amazon Recommended for the last 24 months by keyword count. Choose any month to display keyword type for your selection."
                },
                searchVolume: {
                    title: "Search Volume of Keywords by Type",
                    tooltip: "View the distribution of Sponsored Product, Organic Search and Amazon Recommended for the last 24 months by search volume. Choose any month to display keyword type for your selection."
                }
            },
            products: {
                switch: "Products",
                keywordsCount: {
                    title: "Keyword Distribution Across Products",
                    tooltip: "View the distribution of keywords for the last 24 months with the total keywords. Choose any month to display keyword distribution across products for your selection."
                },
                searchVolume: {
                    title: "Search Volume of Keyword Distribution Across Products",
                    tooltip: "View the search volume of keyword distribution across products for the last 24 months. Choose any month to display keyword distribution across products for your selection."
                }
            }
        },
        searchVolumeKeywordsCountSwitch: {
            keywordsCount: {title: "KC", tooltip: "Keyword Count"},
            searchVolume: {title: "SV", tooltip: "Search Volume"}
        },
        clearHistoricalTrendFilters: {
            button: "Clear Historical Trend Filters",
            tooltip: "View total keywords and keyword type information for the most recent months."
        },
        legend: {
            other: "Other", byTypes: {
                sponsoredProduct: {title: "Sponsored Product"},
                organicSearch: {title: "Organic Search"},
                amazonRecommended: {
                    title: "Amazon Recommended",
                    tooltips: {
                        keywordsCount: "Keyword count for Amazon Recommended is available from September 2022 onward.",
                        searchVolume: "Search Volume for Amazon Recommended is available from September 2022 onward."
                    }
                },
                sponsored: {title: "Sponsored Product", abbreviation: "SP"},
                organic: {title: "Organic", abbreviation: "O"},
                "section-amazons-choice": {
                    title: "Amazon Choice",
                    abbreviation: "AC",
                    tooltips: {
                        keywordsCount: "Keyword count for Amazon Recommended is available from September 2022 onward.",
                        searchVolume: "Search Volume for Amazon Recommended is available from September 2022 onward."
                    }
                },
                "section-highly-rated": {title: "Highly Rated", abbreviation: "HR"},
                "section-sponsored-brand-header": {title: "Sponsored Brand Header", abbreviation: "SBH"},
                "section-sponsored-video": {title: "Sponsored Brand Video", abbreviation: "SBV"},
                "section-editorial-recommendations": {title: "Editorial Recommendations", abbreviation: "ER"},
                "top-rated-from-our-brand": {title: "Top Rated From Our Brand", abbreviation: "TRB"},
                "section-trending-now": {title: "Trending Now", abbreviation: "TN"},
                ppc: {title: "Amazon Recommended", abbreviation: "AR"}
            }, keywordTypes: "Keyword Types", byCategories: {all: "All", organic: "Organic", paid: "Paid"}
        },
        periodRangeSelect: {
            last3: "Last 3 months",
            last6: "Last 6 months",
            last12: "Last 12 months",
            last24: "Last 24 months"
        },
        basedOn: "Based on {date}",
        upgradeTooltip: {
            title: "Historical Trend is only available on Elite",
            text: "Elite plan allows you to view Keywords by Type and Keyword Distribution Across Products for the last 24 months.",
            dismiss: "Dismiss",
            learnMore: "Learn More About Elite",
            upgradeTo: "Upgrade to <br/>{upgradePlan}"
        },
        searchesRemain: "Searches remain",
        dailySearches: "Daily searches",
        uses: {tooltip: {diamond: "Each unique ASIN search or different month selection with 'Show Historical Trend' counts as one use.<br/><br/>Repeats in the same session don't count extra.<br/><br/>Your daily limit is {value} uses. If you reach the limit, it will reset the next day."}},
        notifications: {
            dailyLimitReached: "You have exceeded the daily limit of historical searches. Please try again tomorrow.",
            willExceedLimit: {
                title: "Not enough searches left",
                text: "You trying to perform a search that require at least {productsCount} searches"
            }
        },
        upgradeModal: {
            title: "Unlock More Features with {upgradePlan}",
            subtitle: "Drive more traffic to your listings with comprehensive keyword research solutions and advanced analytics",
            declineButton: "Not Right Now",
            acceptButton: "Upgrade to {upgradePlan}",
            priceMo: "${price}/mo",
            searchesPerDay: "{uses} searches / day",
            features: {
                amazonBrandAnalytics: {
                    title: "Amazon Brand Analytics",
                    subtitle: "Brand Registered sellers can track trends and make informed decisions based on keyword popularity and historical sales data"
                },
                competitorTracking: {
                    title: "Competitor Tracking",
                    subtitle: "Leverage daily automated alerts to stay up-to-date with your competitor's pricing, sales trends, listing quality scores, and more."
                },
                keywordSalesData: {
                    title: "Keyword Sales Data",
                    subtitle: "Gain valuable insights into historical keyword data and view which of your keywords are generating the most sales so you can target them accordingly."
                },
                insightsDashboard: {
                    title: "Insights Dashboard",
                    subtitle: "Automatically uncover critical potential issues with your business with personalized insights. Prioritize action based on business impact."
                }
            },
            plans: {
                Helium10_ALaCarte: "Alacarte",
                Helium10_ALaCarteAnnual: "",
                Helium10_Enterprise: "Enterprise",
                Helium10_Elite: "Elite",
                Helium10_Elite_399: "Elite",
                Helium10_Elite_Quarter: "Elite",
                Helium10_Elite_Annual: "Elite",
                Helium10_Supercharge_Your_Brand: "Supercharge Your Brand",
                Helium10_Supercharge_Your_Brand_Annual: "Supercharge Your Brand",
                Helium10_Diamond: "Diamond",
                Helium10_Diamond_199: "Diamond",
                Helium10_DiamondAnnual: "Diamond",
                Helium10_DiamondAnnual_1999: "Diamond",
                Helium10_Diamond_249: "Diamond",
                Helium10_DiamondAnnual_2499: "Diamond",
                Helium10_Professional_Cn: "Professional",
                Helium10_Professional_Cn_Annual: "Professional",
                Helium10_Scale_Your_Business: "Diamond",
                Helium10_Scale_Your_Business_Annual: "Diamond",
                Helium10_Adtomic_And_Scale_Your_Business_Bundle: "Diamond",
                Helium10_Adtomic_And_Scale_Your_Business_Bundle_Annual: "Diamond",
                Helium10_Platinum: "Platinum",
                Helium10_Platinum_99: "Platinum",
                Helium10_PlatinumAnnual: "Platinum",
                Helium10_PlatinumAnnual_999: "Platinum",
                Helium10_Platinum_FastAction: "Platinum",
                Helium10_Entrepreneur_Cn: "Entrepreneur",
                Helium10_Entrepreneur_Cn_Annual: "Entrepreneur",
                Helium10_Start_Your_Business: "Platinum",
                Helium10_Start_Your_Business_Annual: "Platinum",
                Helium10_Gold: "Platinum",
                Helium10_GoldAnnual: "Platinum",
                Helium10_Starter: "Starter",
                Helium10_Starter_39: "Starter",
                Helium10_StarterAnnual: "Starter",
                Helium10_StarterAnnual_339: "Starter",
                Helium10_Explorer_Cn: "Explorer",
                Explorer_Cn_Annual: "Explorer",
                Helium10_Free: "Free"
            }
        },
        subtitle: 'To view historical keyword ranks and search volumes in Cerebro results, simply click on a month in the graph below and then click "apply filters."',
        upgradeTooltipNew: {
            title: "Historical Trend",
            text: "Explore seasonality trends over 24 months and drill into a specific month. Refine your results via an interactive chart to drill into historical rank, search volume, and sales."
        },
        bannerTitle: "Sneak peak: Historical Trends feature. Upgrade for interactive graphs and explore keyword distribution by type or product."
    }, Zt = {
        modal: {header: {title: "PPC Bid:", subtitle: "Helium 10 Suggested PPC Bid"}},
        filter: {
            suggestedPPC: {
                title: "Suggested PPC Bid",
                tooltipAmazon: "Suggested bid and bid range are calculated from a group of winning bids for ads that are similar to yours. You can choose to use the suggested bid, or any bid in or outside of the bid range."
            }
        },
        table: {
            suggestedPPC: {
                title: "Suggested PPC Bid",
                titleLocked: "Sugg.<br/>PPC Bid",
                tooltipAmazon: "Suggested bid and bid range are calculated from a group of winning bids for ads that are similar to yours. You can choose to use the suggested  bid, or any bid in or outside of the bid range.",
                tooltipAmazonForValue: "Most ads are winning auctions at bids between {ppcFrom} and {ppcTo}. For this  keyword or ad group, we suggest a bid of {ppc}. Increasing your bid can  make your ads more competitive in auctions."
            },
            suggestedPPCExport: {title: "H10 PPC Sugg. Bid"},
            suggestedPPCMinExport: {title: "H10 PPC Sugg. Min Bid"},
            suggestedPPCMaxExport: {title: "H10 PPC Sugg. Max Bid"}
        }
    },
    Jt = {cerebro: {toolTip: "Filters are useful to narrow down your results and find the most relevant keywords for your research."}},
    ea = {chip: "Diamond", learnMore: "Learn more", upgradeNow: "Upgrade Now"}, ta = {
        landing: {
            new: {
                title: {
                    available_true: "Quickly Identify Q4 Keywords",
                    available_false: "Unlock Q4 Keywords at the Diamond Level"
                },
                boldText: {
                    available_true: "Optimize year-end listings with preloaded {year} search volume metrics to identify past and present trends.",
                    available_false: "Optimize year-end listings with preloaded {year} search volume metrics to identify past and present trends at the Diamond level."
                },
                text: "Ready to uncover hidden seasonal trends? Compare current and historical keyword distribution, sponsored or organic rank, and analyze sales over the past two years.",
                watchButton: {
                    available_true: "Watch how to boost end of year sales.",
                    available_false: "Watch Strategy Video"
                }
            },
            old: {
                title: "Search specific products from Amazon and find their top ranking keywords",
                text: "Leverage your competitors’ keyword ranking strategy to improve your own listing. You can also use Cerebro to gauge the most effective keywords for your product on Amazon, optimize your product listing to boost sales, and keep competitive rates on your products. Cerebro is key in successfully launching new products and bringing more awareness to your brand.",
                text2: "Not sure how to get started in Cerebro?",
                watchButton: "Watch our introductory video."
            }
        },
        banner: {
            title: "<b>Optimize December Sales:</b> Compare {year} Search Volume or Explore Seasonal Trends.",
            button: "Watch Strategy Video"
        },
        filter: {
            title: "Compare Q4 2022 Historical Trend Filters",
            badge: "Limited Time Strategies",
            text: "For a limited time, quickly identify low ranking keywords and consider updating your listing or PPC campaign to boost Q4 sales."
        },
        upgradeTooltip: {
            title: "Q4 Prep Strategies",
            text: "Compare current keyword search volume to last year's data to view seasonal traffic increases."
        },
        tableSettings: {tooltip: "View historical <b>October and November {year} Search Volume</b> by customizing your table settings."},
        fields: {
            searchVolume: {
                filter: {
                    title: "{month} Search Volume",
                    tooltip: "Estimated number of times this keyword is searched monthly on Amazon."
                },
                table: {
                    title: "{month}<br/>Search Volume",
                    tooltip: "Explore seasonality {node_0} and pinpoint a specific month of interest. Refine your results using an interactive chart to delve into historical rank, search volume, and sales data.",
                    tooltipNode: "trends over the past 24 months"
                },
                limited: {tooltip: "Compare current keyword search volume to last year's data to identify seasonal traffic increases."}
            }
        }
    }, aa = {
        presetsTitle: "Use a Filter Preset to accelerate your search:",
        emptyText: "No available presets",
        buttons: {saveAsFilterPreset: "Save as Filter Preset", filterLibrary: "Filter Library"},
        editModal: {
            title: {new: "Filter Preset Name", edit: "Rename Filter Preset Name"},
            name: {label: "Enter a unique preset name", placeholder: "Choose a name for this preset"}
        },
        staticPresetNames: {
            "Top Keywords": {
                title: "Top Keywords",
                description: "Main keywords commonly used by competitors & have a substantial search volume"
            },
            "Opportunity Keywords": {
                title: "Opportunity Keywords",
                description: "Keywords that create opportunity to calculate your rank using activity, rank and search volume of the competitor"
            },
            "Product sales increase fast over the last month": {
                title: "High Growth",
                description: "Product sales increase fast over the last month"
            },
            "Product selling well but doesn’t have a good rating": {
                title: "Low Rating",
                description: "Product selling well but doesn’t have a good rating"
            },
            "Few product images but high sales": {
                title: "Low Image Count",
                description: "Few product images but high sales"
            },
            "Small size but sales well": {title: "Small and Light", description: "Small size but sales well"},
            "Dominant Demand": {title: "Dominant Demand"},
            "Growth Opportunities": {title: "Growth Opportunities"},
            "Emerging Contenders": {title: "Emerging Contenders"},
            "Conversion Pioneers": {title: "Conversion Pioneers"}
        },
        messages: {
            rename: {success: "Preset filter is renamed"},
            create: {success: "Preset filter saved to Filter Library"},
            delete: {success: "Preset filter deleted from Filter Library"}
        },
        tooltips: {youAlreadyHavePresetWithSameSettings: 'You already have preset <b>"{name}"</b> with same settings'}
    }, ra = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }, oa = {
        common: {week: "Week"},
        marketplaceAndPeriodSelectors: {
            text1: "View the Amazon Brand Analytics Report on",
            text2: "during the",
            periodTypeOptions: {Weekly: "Week of", Monthly: "Month of"}
        },
        banners: {
            start: {
                title: "ABA Top Search Terms",
                text: "Tailored for <b>brand-registered</b> Amazon sellers. This exclusive feature in Blackbox goes beyond traditional analysis, offering advanced keyword discovery, trend-spotting, and competitive benchmarking unique to Helium 10. Harness the power of unique data algorithms to identify untapped markets and optimize your listings like never before.",
                videoButton: "Watch Video",
                dismiss: "Dismiss"
            },
            unlock: {
                title: "Unlock ABA Top Search Terms",
                text: "Exclusively for {planName} subscribers with registered brands: Unleash the power of Amazon Brand Analytics! Dive into top-performing ASINs, compare click shares and conversion rates, and uncover fresh product opportunities by leveraging elite keyword insights. Elevate your product discovery journey today!"
            },
            noUses: {
                title: "You’ve hit your limit for ABA Top Search Term launches",
                text: "Upgrade to {planName} to get unlimited access, unlock insights, and supercharge your Amazon strategy. Gain access to advanced analytics, robust tools, and exclusive features to maximize your sales potential like never before."
            }
        },
        noToken: {
            title: "Connect your Seller Account for insights into Amazon Brand Registry data",
            subtitle: "To view the ABA Top Search Terms data, you’ll need at least one Amazon Seller account connected to Helium 10.",
            text: "7,054 users connected their Seller Account last month.<br/><br/>Securely connect your Amazon account to Helium 10 to unlock powerful tools and insights for your business.<br/><br/>Amazon Brand Registry data within Black Box, Cerebro or Magnet is only available to sellers who are enrolled in Amazon’s Brand Registry program.",
            note: "We know how important data security is to our customers. We promise never to share or sell your data, and to maintain the highest security standards."
        },
        noABAToken: {
            title: "Final step: Unlock Powerful Insights with Amazon Brand Registry!",
            text: "Access Exclusive ABA Top Search Terms & Safeguard Your Brand<br/><br/>Amazon Brand Registry doesn’t only secure your intellectual property but also unlocks robust insights with Amazon Brand Analytics. Protect your products, monitor violations, and leverage pivotal data to elevate your sales strategy, exclusively available to registered brands.<br/><br/>Discover comprehensive benefits and eligibility criteria directly from Amazon's Program Details page. Also, navigate through the quick and strategic path to Brand Registration with Helium 10's unique strategies."
        },
        buttons: {
            upgradeTo: "Upgrade to {upgradePlan}",
            connectToAmazon: "Connect to Amazon",
            viewABADetails: "View Amazon’s Program Details Page",
            learnMore: "Learn More",
            advancedSettings: "Advanced Settings",
            apply: "Apply",
            runInMagnet: "Run in Magnet",
            addToKeywordTracker: "Add to Keyword Tracker",
            addToMyList: "Add to My List"
        },
        summary: {
            title: "ABA Keyword Summary",
            metricsTitle: "Keyword Distribution",
            metrics: {
                totalKeywords: {title: "Total Keywords"},
                top3AsinsTotalMonthlyUnitSales: {
                    title: "Top 3 ASINs Total<br/>Monthly Unit Sales",
                    tooltip: "Total sales of the top three ASINs in your filtered results"
                },
                top3AsinsTotalMonthlyRevenue: {
                    title: "Top 3 ASINs Total<br/>Monthly Revenue",
                    tooltip: "Total revenue generated by the top three ASINs in your filtered results"
                },
                avgClickShare: {
                    title: "Avg. Click Share",
                    tooltip: "Average clicks share for the products shown based on your filter criteria"
                },
                avgConversionShare: {
                    title: "Avg. Conv. Share",
                    tooltip: "Average conversion share for the products shown based on your filter criteria"
                }
            }
        },
        tableTitle: {
            common: {
                one: "{value} Filtered Keyword based on date range",
                other: "{value} Filtered Keywords based on date range"
            }, selected: {one: "{value} Keyword selected", other: "{value} Keywords selected"}
        },
        filter: {
            searchFrequencyRankTrend: {label: "Search Frequency Rank Trend", tooltip: "Over the past week or month"},
            clickShareAsin: {label: "Click Share"},
            conversionShareAsin: {label: "Conv. Share"},
            numberOfAsins: {placeholder: "Number of ASINs"},
            mustBe: {placeholder: "Must be"},
            advancedInteraction: {and: "And", or: "Or"},
            keywordOrAsins: {
                placeholder: {
                    one: "Enter up to {maxAsins} product ASINs or {maxKeywords} keyword phrase",
                    other: "Enter up to {maxAsins} product ASINs or {maxKeywords} keyword phrase"
                }, needAsin: "Need an ASIN? Try one of these:", needKeyword: "Need a keyword? Try one of these:"
            },
            averageMonthlyAge: {
                label: "Top 3 Clicked ASINs Monthly Average Age",
                tooltip: " Average of top 3 clicked ASINs age"
            },
            totalMonthlySales: {
                label: "Top 3 Clicked ASINs Total Monthly Sales",
                tooltip: "Total of top 3 clicked ASINs monthly sales"
            },
            totalMonthlyRevenue: {
                label: "Top 3 Clicked ASINs Total Monthly Revenue",
                tooltip: "Total of top 3 clicked ASINs monthly revenue"
            },
            totalReviewCount: {
                label: "Top 3 Clicked ASINs Total Review Count",
                tooltip: "Total of top 3 clicked ASINs review count"
            },
            averageRating: {label: "Top 3 Clicked ASINs Average Rating", tooltip: "Average of top 3 clicked ASINs rating"},
            category: {label: "Category", placeholder: "Select one or more categories"}
        },
        columns: {
            phrase: {title: "Keyword Phrase", tooltip: "Keyword or phrase used by customers in search for a product"},
            searchVolume: {
                title: "Search Volume",
                tooltip: "Estimated number of times this keyword is searched monthly on Amazon.",
                trend: {title: "Search Volume Trend (%)"}
            },
            searchFrequencyRank: {
                title: "Search Frequency Rank",
                tooltip: {
                    Monthly: "Monthly Search Frequency Rank Trend, (compare with last month)",
                    Weekly: "Weekly Search Frequency Rank Trend, (compare with last week)"
                },
                trend: {title: "Search Frequency Rank Trend (%)"}
            },
            totalClickShareAsin: {
                title: "Top 3 ASINs Total Click Share",
                tooltip: "Sum of top 3 ASINs click share from ABA Data",
                trend: {title: "Top 3 ASINs Total Click Share Trend"}
            },
            totalConversionShareAsin: {
                title: "Top 3 ASINs Total Conv. Share",
                tooltip: "Sum of top 3 ASINs conv. share from ABA Data",
                trend: {title: "Top 3 ASINs Total Conv. Share Trend"}
            },
            topNAsin: {title: "Top {value} ASIN", export: {title: "Top {value} Title", imageUrl: "Top {value} Image URL"}},
            clickShareAsinN: {
                title: "Top {value} ASIN Click Share",
                tooltip: "Top {value} ASIN click share from ABA Data",
                trend: {title: "Top {value} ASIN Click Share Trend"}
            },
            conversionShareAsinN: {
                title: "Top {value} ASIN Conv. Share",
                tooltip: "Top {value} ASIN conv. share from ABA Data",
                trend: {title: "Top {value} ASIN Conv. Share Trend"}
            },
            averageMonthlyAge: {
                title: "Top 3 Clicked ASINs Monthly Average Age",
                tooltip: "Average of top 3 clicked ASINs age"
            },
            totalSalesAsin: {
                title: "Top 3 ASINs Total Monthly Sales",
                tooltip: "Total of top 3 clicked ASINs monthly sales"
            },
            totalRevenueAsin: {
                title: "Top 3 ASINs Total Monthly Revenue",
                tooltip: "Total of top 3 clicked ASINs monthly revenue"
            },
            totalReviewCountAsin: {
                title: "Top 3 ASINs Total Review Count",
                tooltip: "Total of top 3 clicked ASINs review count"
            },
            averageRatingAsin: {title: "Top 3 ASIN Total Average Rating", tooltip: "Average of top 3 clicked ASINs rating"},
            exactTitleMatchProductsCount: {
                title: "Title Density",
                tooltip: "Number of page 1 products with the searched keyword in their title"
            },
            resultsNumber: {
                title: "Competing Products",
                tooltip: "Total number of products returned in a customer search using this keyword/phrase"
            },
            brands: {
                title: "Top 3 Brands",
                tooltip: "The top 3 brands generating the most results for the search term",
                brand: {title: "Brand {value}"}
            },
            categories: {
                title: "Top 3 Categories",
                tooltip: "The top 3 categories generating the most results for the search term.",
                category: {title: "Category {value}"}
            },
            monthlySales: {
                title: "Keyword Sales",
                tooltip: "Estimated number of monthly sales (in number of units) attributed to each keyword"
            }
        },
        notifications: {invalidAsins: {one: "Invalid ASIN: {asins}", other: "Invalid ASINs: {asins}"}},
        advFilterTooltip: {
            asins: "<b>ASINs (1-3)</b>: Number of ASINs meeting your criteria.",
            operators: {
                title: "<b>Operators</b>:",
                list: {
                    more: '">" = Greater than',
                    moreOrEqual: '">=" = At least',
                    equal: '"=" = Exactly',
                    less: '"<" = Less than',
                    lessOrEqual: '"<=" = At most'
                }
            },
            clickShare: "<b>Click Share %</b>: Set your desired Click Share range.",
            conversionShare: "<b>Conversion Share %</b>: Set your Conversion Share range.",
            andOr: "<b>AND/OR</b>: Both conditions met (AND) or at least one met (OR).",
            example: "Example: ",
            exampleText: "1 ASIN with >40% Click Share AND <5% Conversion Share shows products popularly clicked but rarely bought."
        },
        noData: "No data is available based on your current date range or filters. Please try adjusting them to get more results.",
        progress: "Free Launches Used",
        getUnlimitedAccess: "Get Unlimited Access"
    }, ia = {modal: {title: "Search Frequency Rank: {phrase}"}, legend: "Search Frequency Rank"}, na = {
        1: "Small Standard-Size",
        2: "Large Standard-Size",
        3: "Small Oversize",
        4: "Medium Oversize",
        5: "Large Oversize",
        6: "Special Oversize",
        7: "Envelope",
        8: "Small and Light",
        9: "Small Letter",
        10: "Large Letter",
        11: "Extra Large Letter",
        12: "Small Envelope",
        13: "Standard Envelope",
        14: "Large Envelope",
        15: "Standard Parcel",
        16: "Small",
        17: "Standard Size",
        18: "Oversize",
        19: "Standard Oversize",
        20: "Heavy and bulky",
        21: "Supersize",
        22: "Extra Large Envelope",
        23: "Small Parcel",
        24: "Large bulky",
        25: "Extra-large 0 to 50 lb",
        26: "Extra-large 50+ to 70 lb",
        27: "Extra-large 70+ to 150 lb",
        28: "Extra-large 150+ lb",
        "-1": "N/A"
    }, la = {
        common: St,
        historyTitle: ft,
        fetchingData: At,
        landing: wt,
        table: kt,
        cerebro: Tt,
        walmartSearch: zt,
        export: {
            button: "Export Data",
            options: {
                csv: "...as a CSV file",
                xlsx: "...as a XLSX file",
                frankenstein: "...to Frankenstein",
                clipboard: "copy to Clipboard",
                eliteAnalyticsCSV: "Elite Analytics CSV",
                eliteAnalyticsExcel: "Elite Analytics Excel",
                eliteAnalyticsCSVWithUpload: "Upload + Elite Analytics CSV",
                eliteAnalyticsExcelWithUpload: "Upload + Elite Analytics Excel"
            }
        },
        createNewFolder: _t,
        errors: Ct,
        magnet: Pt,
        magnetChart: Rt,
        searchedBefore: Bt,
        noDataAvailable: Ht,
        upgradePlan: Nt,
        copyButton: xt,
        example: It,
        errorCodes: Mt,
        opportunity: Ft,
        blackBox: Dt,
        projectNames: Et,
        bulkReport: qt,
        randomizationText: Vt,
        dateRanges: Kt,
        comparison: Lt,
        highchart: Wt,
        buttons: Ut,
        amazonToken: Ot,
        amazonBrandRegistry: Yt,
        abad: Gt,
        periodPresets: $t,
        periodsPlaceholder: jt,
        runListingAnalyzer: Qt,
        historicalData: Xt,
        ppc: Zt,
        experiments: Jt,
        upgradeToDiamondTooltip: ea,
        cerebroSeasonal: ta,
        filterPresets: aa,
        months: ra,
        abaTopSearchTerms: oa,
        searchFrequencyRank: ia,
        sizeTier: na
    }, sa = {
        close: "Cerrar",
        cancel: "Cancelar",
        clear: "Limpiar",
        serverError: "¡Error del servidor!",
        na: "No disponible",
        delete: "Eliminar",
        edit: "Editar",
        save: "Guardar",
        valueOfTotal: "{value} de {total}",
        filters: "Filtros",
        week: "Week",
        noData: "Sin datos"
    }, da = "Historial", ua = "Obtención de datos", ca = {
        notSure: {
            cerebro: "¿No estás seguro de cómo comenzar a utilizar Cerebro?",
            magnet: "¿No está seguro de cómo empezar a usar Magnet?"
        }
    }, ma = {scrapedDate: {lessThan7Days: "< 7 días", between7And30Days: "7 - 30 días", moreThan30Days: "> 30 días"}},
    pa = {
        title: "Cerebro",
        description: "Introduzca hasta {maxAsins} ASINs para encontrar las palabras clave de mejor desempeño.",
        learn: "Aprender",
        learnTooltip: "Obtén ayuda para dominar Cerebro viendo vídeos y leyendo artículos",
        history: {
            title: "Historial",
            titleTable: {one: "{count} búsqueda anterior", other: "{count} búsquedas anteriores"},
            titleTableSelected: {
                one: "{count} búsqueda anterior seleccionada",
                other: "{count} búsquedas anteriores seleccionadas"
            },
            descriptionTable: "Encuentra una búsqueda realizada anteriormente con Cerebro y vuelve a cargarla utilizando cualquiera de tus búsquedas asignadas.",
            tooltip: "Ver tus búsquedas anteriores y volver a cargar los resultados"
        },
        inputPlaceholder: "Introduce hasta {maxAsins} ASIN de producto",
        upgradeForMultiSearch: "Actualizar a la búsqueda múltiple de productos",
        getKeywords: "Obtener palabras clave",
        excludeVariations: "Excluir variaciones",
        excludeVariationsTooltipAmazon: "Incluir solo palabras clave asociadas al ASIN exacto introducido",
        excludeVariationsTooltipWalmart: "Incluir solo palabras clave asociadas al ID de producto exacto introducido",
        landing: {
            title: "Busca productos en {market} y encuentra sus palabras clave más importantes",
            description: "Descubre las palabras clave de tus competidores para mejorar tu propio listado. También puedes utilizar Cerebro para analizar las palabras clave más efectivas para tu producto dentro de {market}, optimizar tu listado para impulsar las ventas y mantener tarifas competitivas en tus productos. Cerebro es una herramienta clave para lanzar nuevos productos con éxito y dar a conocer tu marca.",
            videoTitle: "¿No sabes por dónde empezar? Ve este vídeo de 3 minutos de duración.",
            videoButton: "Ver vídeo",
            bulkReport: "Informe de volumen",
            whereWalmartIDs: "¿Dónde puedo encontrar los ID de producto de Walmart?",
            whereWalmartIDsTitle: "¿Dónde puedo encontrar los ID de producto de Walmart?",
            whereWalmartIDsText: `<p>Puedes encontrar la ID de producto de Walmart en la URL de la página de producto correspondiente en walmart.com.</p>
      <p>Por ejemplo, en la siguiente URL, el ID de producto de Walmart Product sería <b>134258560</b>.</p>
      <p>https://www.walmart.com/ip/Petstages-Latex-Free-Chew-Dog-Squeaky-Toy-Assorted-Large/<b>134258560</b>?wpa_bd=&wpa_pg_seller_id=...wpa_bucket=__bkt__</p>`
        },
        getCompetitors: {
            button: "Obtener competidores",
            description: 'Encuentra y agrega productos competidores a tu búsqueda para compararlos. Los datos de estos productos se mostrarán en columnas de tabla adicionales con "Competidor" en la etiqueta.',
            count: "Agregar hasta {canMoreSelect} productos más",
            addCompetitors: "Agregar competidores",
            addWords: "Agregar palabras",
            deleteAll: "Eliminar todo",
            tooltip: "Elige entre una gama de competidores para un análisis de varios productos"
        },
        commonWords: {
            button: "Palabras comunes",
            tableTitle: {one: "{count} palabra común", other: "{count} palabras comunes"},
            titleTableSelected: {
                one: "{count} palabra común seleccionada",
                other: "{count} palabras comunes seleccionadas"
            },
            word: "Palabra",
            tableDescription: "Señala las palabras comunes que quieres excluir de los resultados de búsqueda. Todas las palabras de la siguiente tabla no volverán a aparecer en tus resultados de búsqueda en {project}.",
            addDescription: "Introduce las palabras (1 por línea) que deseas eliminar de los resultados de búsqueda.",
            removeSpecialCharacters: "Eliminar caracteres especiales",
            removeSpecialCharactersTooltip: "Elimina  .,?!&*%$@#, etc.",
            addCommonWords: "Añadir a palabras comunes",
            deleteAllQuestion: "¿Seguro que quieres eliminar todas las palabras comunes?",
            deleteAllConfirm: "Sí, borrarlas todas",
            tooltip: "Añade palabras comunes para eliminar las que no son exclusivas para tu búsqueda"
        },
        deletedWords: {
            button: "Ver palabras eliminadas ({number})",
            title: "Palabras eliminadas",
            text: "Estas son las palabras que eliminaste manualmente de tus resultados de búsqueda.",
            return: "Volver a los resultados",
            returnToResults: "Volver a los resultados",
            columnKeyword: "Palabra clave",
            tableTitle: {one: "{count} palabra clave eliminada", other: "{count} palabras clave eliminadas"},
            tableTitleSelected: {
                one: "{count} palabra clave eliminada seleccionada",
                other: "{count} palabras clave eliminadas seleccionadas"
            }
        },
        filter: {
            title: "Filtros",
            showMore: "Mostrar más",
            showLess: "Muestra menos",
            clear: "Limpiar",
            applyFilters: "Aplicar filtros",
            wordCount: "Recuento de palabras",
            wordCountTooltip: "Número de palabras clave en la frase de búsqueda",
            searchVolume: "Volumen de búsqueda",
            searchVolumeTooltip: "Número estimado de veces que se busca esta frase con palabra clave al mes.",
            organicRank: "Clasificación orgánica",
            organicRankTooltip: "La posición de la búsqueda orgánica detectada para esa/s palabra/s clave para el producto analizado",
            matchType: "Tipo de coincidencia",
            matchTypeTooltip: "Fuente de la que se obtiene una palabra clave",
            showPhrasesContain: "Frases que contengan",
            showPhrasesContainPlaceholder: "Ej: faldas",
            showPhrasesContainTooltip: "Mostrar frases que contienen las palabras clave introducidas (separadas por comas)",
            cerebroIQScore: "Puntuación IQ Cerebro",
            cerebroIQScoreTooltip: "Puntuación basada en la proporción de volumen de búsqueda estimado con respecto al número de productos competidores: una puntuación alta significa un número relativamente alto de búsquedas en comparación con el número de competidores; una puntuación baja significa lo contrario",
            titleDensity: "Densidad del título",
            titleDensityTooltip: "Número de productos de la página 1 con la palabra clave en su título",
            competingProducts: "Productos competidores",
            competingProductsTooltip: "Número total de productos obtenidos en una búsqueda del cliente utilizando esta palabra clave/frase",
            amazonChoice: "Amazon Choice",
            amazonChoiceTooltip: "Filtrar los resultados de palabras clave en base al estado de la insignia de elección de Amazon",
            amazonChoiceOnly: "Sólo Amazon Choice",
            amzSuggestedPosition: "Clasificación rec. de Amazon",
            amzSuggestedPositionTooltip: "Las palabras clave que Amazon recomienda para este ASIN, enumeradas de más a menos recomendadas",
            excludePhrasesContain: "Excluir frases que contengan",
            excludePhrasesContainTooltip: "Excluir frases que contienen las palabras clave introducidas (separadas por comas)",
            searchVolumeTrend: "Tendencia del volumen de búsqueda",
            searchVolumeTrendTooltip: "En los últimos 30 días",
            sponsoredRank: "Clasificación auspiciados",
            sponsoredRankTooltip: "Última posición detectada del anuncio auspiciado en las búsquedas de clientes",
            amazonRecRank: "Clasificación rec. de Amazon",
            amazonRecRankTooltip: "Las palabras clave que Amazon recomienda para este ASIN, enumeradas de más a menos recomendadas",
            noneSelected: "No hay ninguno seleccionado",
            bestSeller: "Éxito de ventas",
            bestSellerTooltip: "Mostrar solo palabras clave en las que el producto o productos seleccionados sean un éxito de ventas",
            walmartSearchVolume: "Volumen de búsqueda de Walmart",
            walmartSearchVolumeTooltip: "El volumen de búsqueda de Walmart se basa en estimaciones propias que se encuentran actualmente en versión beta. Los datos exactos e históricos no están disponibles actualmente.",
            advancedRank: "Filtro de clasificación avanzado",
            advancedRankTooltip: "Introduce un número mín./máx. de ASIN que deseas que aparezcan en un rango concreto de clasificaciones orgánicas para una palabra clave",
            competitorPerformanceScore: "Rendimiento del competidor",
            bestSellerOnly: "Solo éxito de ventas",
            bestSellerOnlyTooltip: "Filtro para las palabras clave que tienen productos con la insignia de éxito de ventas en sus resultados de búsqueda en Walmart",
            matchTypeOptions: {
                organic: "Organico",
                sponsored: "Auspiciados",
                ppc: "Recomendado por Amazon",
                smart: "Smart Complete",
                contextual: "Organico",
                lexical: "Smart Complete"
            },
            amazonChoiceOptions: {
                analyzedProduct: "Producto analizado",
                otherProduct: "Otro producto",
                noBadges: "No hay insignias"
            },
            walmartSearchVolumeOptions: {
                very_low: "Muy bajo",
                low: "Bajo",
                medium: "Medio",
                high: "Alto",
                very_high: "Muy alto"
            },
            advancedRankFilter: "Filtro de clasificación avanzado",
            advancedRankFilterTooltip: "Introduce un número mín./máx. de ASIN que deseas que aparezcan en un rango concreto de clasificaciones orgánicas para una palabra clave",
            advancedRankFilterTooltipWalmart: "Introduce un número mín./máx. de productos que deseas que aparezcan en un rango concreto de clasificaciones orgánicas para una palabra clave",
            considerRankAsinMin: "ASIN Min",
            considerRankAsinMax: "ASIN máx",
            considerRankProductIdMin: "ID Min",
            considerRankProductIdMax: "ID Máx",
            considerRankMin: "Mín. de la clasificación",
            considerRankMax: "Máx. de la clasificación",
            all: "Todo",
            any: "Cualquiera",
            searchVolumeWalmartTooltip: "Número estimado de veces que se busca esta palabra clave en Walmart al mes.",
            monthlySales: "Venta de palabras clave",
            monthlySalesTooltip: "Número estimado de ventas mensuales (en número de unidades) atribuido a cada palabra clave",
            monthlySalesLockedTooltip: "Vea el número estimado de ventas generadas por cada palabra clave al actualizar a {upgradePlan}.",
            presets: {
                text1: "Restringir tus resultados rápidamente para",
                text2: "o",
                topKeywords: "Palabras clave principales",
                topKeywordsTooltip: "Palabras clave utilizadas con frecuencia por los competidores y que tienen un volumen de búsqueda sustancial",
                opportunityKeywords: "Palabras clave de oportunidad",
                opportunityKeywordsTooltip: "Palabras clave que crean la oportunidad de posicionarse mediante la actividad de la competencia, el rango y el volumen de búsqueda"
            },
            presetsTitle: {
                topKeywords: "Búsqueda de palabras clave principales",
                opportunityKeywords: "Búsqueda de palabras clave de oportunidad "
            },
            monthlySalesLockedTitleTooltip: "Vea datos de ventas de palabras clave integrales para priorizar mejor sus palabras clave más rentables y de alta conversión",
            timePeriod: {
                label: "Time Period",
                tooltip: {
                    available: "Examine 24 months of data history for rank, search volume, and sales changes. Refine with chart filters in {node_0}.",
                    availableNode: "Historical Trends"
                },
                placeholder: "Actual",
                info: "You can select a specific from the last two years."
            },
            numberOfCompetitors: "Number of Competitors",
            numberOfCompetitorsTooltip: "Enter the minimum and/or maximum number of competitor ASINs that you want to be ranking for keywords in the range of the next filter. For example, if you set Min: 2 and Max: 4, the tool will show keywords where 2 to 5 competitors are ranking.",
            competitorRank: "Competitor Rank",
            competitorRankTooltip: "Define the Organic Keyword Rank Range where you want the competitors from the previous filter to appear. For example, if you chose min 2 and max 4 in the first filter, and min 1 and max 10 in this filter, it means you're interested in keywords where at least 2 and no more than 4 competitors rank within the top 10 organic positions.",
            advancedFilterTitle: "Unlock advanced filtering with premium plans",
            showAllFilters: "Show all Helium 10 filters"
        },
        distribution: {
            title: "Distribución de palabras clave",
            total: "Palabras clave totales",
            sponsored: "Palabras clave auspiciadas",
            organic: "Organico",
            amazonRecommended: "Recomendado por Amazon",
            smart: "Smart Complete",
            showHistoricalTrend: {
                title: "Mostrar historial de tendencias",
                tooltip: "Elige entre la distribución de palabras clave por tipo o la distribución de palabras clave en productos en los últimos 24 meses para identificar las tendencias.",
                lockedTooltip: "Desbloquee gráficos de análisis de tendencias históricas actualizando a Diamond",
                lockedRightTooltip: "Analice fácilmente las tendencias históricas de palabras clave para identificar oportunidades de crecimiento para sus productos",
                tooltipNew: "Look back at 24 months of data to observe changes in historical rank, search volume, and sales. Filter these insights to observe seasonality by using an interactive chart."
            },
            organicTooltip: "Búsqueda orgánica",
            paid: "Pagado",
            paidTooltip: "Búsqueda pagada"
        },
        wordFrequency: {
            title: "Frecuencia de palabra",
            button: "Ver todo",
            export: "Exportar",
            word: "Palabra",
            qty: "Frecuencia",
            setToast: {title: "Frases que contienen el filtro aplicado", text: 'Filtrando resultados por "{keyword}"'},
            noData: "Sin datos"
        },
        productSearch: {
            single: "Búsqueda de producto individual",
            multi: "Búsqueda múltiple de productos",
            singleSubtitle: "Basado en los últimos 30 días",
            multiSubtitle: "Consulta el resumen de 30 días de un producto individual haciendo clic a continuación en el ASIN."
        },
        boughtTogether: {
            button: "Frecuentemente comprados juntos",
            title: "Productos comprados juntos frecuentemente",
            description: 'Estos son los productos que se muestran en la sección "Comprados juntos frecuentemente" de la lista para el producto que has buscado.  ',
            modalButton: "Ver todo en Black Box",
            emptyTitle: "Esta lista está vacía",
            productMultiSearch: "Producto de búsqueda múltiple"
        },
        table: {
            keywordPhrase: "Frase clave",
            keywordPhraseTooltip: "Palabra clave o frase utilizada por los clientes al buscar un producto",
            cerebroIqScore: "Puntuación IQ Cerebro",
            cerebroIqScoreTooltip: "Puntuación basada en la proporción de volumen de búsqueda estimado con respecto al número de productos competidores: una puntuación alta significa un número relativamente alto de búsquedas en comparación con el número de competidores; una puntuación baja significa lo contrario",
            searchVolume: "Volumen de búsqueda",
            searchVolumeTooltip: "Número estimado de veces que se busca esta palabra clave en Amazon al mes",
            sponsoredAsins: "ASIN auspiciados",
            sponsoredAsinsTooltip: "Número de ASIN detectados que ejecutan anuncios auspiciados recientemente en resultados de búsqueda asociados a esta frase con palabra clave",
            headlineAsins: "ASIN del encabezado",
            headlineAsinsTooltip: "Número de ASIN detectados que han aparecido recientemente en los anuncios del encabezado en los resultados de búsqueda asociados a esta frase con palabra clave",
            competingProducts: "Productos competidores",
            competingProductsTooltip: "Número total de productos obtenidos en una búsqueda del cliente utilizando esta palabra clave/frase",
            cpr: "CPR",
            cprSimple: "CPR",
            cprTooltip: "Número estimado de unidades que se deben vender en 8 días, que resulta de una búsqueda para esta palabra clave, para que el producto se clasifique en la mitad más alta de la página para esta palabra clave.",
            matchType: "Tipo de coincidencia",
            matchTypeTooltip: "Fuente de la que se obtiene una palabra clave",
            amazonRecRank: "Clasificación rec. de Amazon",
            amazonRecRankTooltip: "Las palabras clave que Amazon recomienda para este ASIN, enumeradas de más a menos recomendadas",
            sponsoredRank: "Clasificación auspiciados",
            sponsoredRankTooltip: "Última posición detectada del anuncio auspiciado en las búsquedas de clientes",
            organicRank: "Clasificación orgánica",
            organicRankTooltip: "La posición de la búsqueda orgánica detectada para esa/s palabra/s clave para el producto analizado",
            searchVolumeTrend: "Tendencia del volumen de búsqueda",
            searchVolumeTrendTooltip: "En los últimos 30 días",
            titleDensity: "Densidad del título",
            titleDensityTooltip: "Número de productos de la página 1 con la palabra clave en su título",
            sponsoredAvg: "Clasificación auspiciados (promed.)",
            sponsoredAvgTooltip: "Posición promedio detectada de entre todos los productos en los resultados auspiciados",
            sponsoredCount: "Clasificación auspiciados (recuento)",
            sponsoredCountTooltip: "Número de productos requeridos detectados con anuncios auspiciados para la/s palabra/s clave",
            amzSuggestedAvg: "Clasificación recomendada por Amazon (promed.)",
            amzSuggestedAvgTooltip: "Clasificación promedio que la/s palabra/s clave de los productos analizados ocupa/n en lo referente a la puntuación de la recomendación de Amazon",
            amzSuggestedCount: "Clasificación recomendada por Amazon (recuento)",
            amzSuggestedCountTooltip: "Número de productos analizados para los que Amazon recomienda la/s palabra/s clave",
            positionRank: "Posición (clasificación)",
            positionRankTooltip: "La posición que el primer ASIN (en una búsqueda múltiple de ASIN) ocupa en los resultado de búsqueda de Amazon",
            scrapedAt: "Recibido a las",
            relativeRank: "Clasificación relativa",
            relativeRankTooltip: "La clasificación del ASIN principal en relación con sus competidores. Por ejemplo, si dos (2) competidores están mejor clasificados que el ASIN principal, la clasificación relativa será tres (3).",
            competitorRank: "Clasificación de competidores (promed.)",
            competitorRankTooltip: "Clasificación promedio de ASIN de competidores. En este cálculo, se ignoran los ASIN que no se han clasificado.",
            rankingCompetitors: "Competidores de la clasificación (recuento)",
            rankingCompetitorsTooltip: "Número de ASIN de los competidores que se han clasificado para la frase determinada.",
            competitorPerformanceScore: "Puntuación del rendimiento de los competidores",
            competitorPerformanceScoreTooltip: "El índice de rendimiento de los competidores mide cómo de efectivos son los competidores enumerados como grupo para la palabra clave determinada.",
            competitorRankAvg: "Clasificación de competidores (promed.)",
            competitorRankAvgTooltip: "Clasificación promedio de ASIN de competidores. En este cálculo, se ignoran los ASIN que no se han clasificado.",
            filteredKeywords: {one: "{value} palabra clave filtrada", other: "{value} palabras clave filtradas"},
            filteredKeywordsSelected: {
                one: "{value} palabra clave seleccionada",
                other: "{value} palabras clave seleccionadas"
            },
            matchTypeTooltips: {
                amazonRecommended: "Recomendado por Amazon",
                sponsored: "Auspiciados",
                organic: "Organico",
                smartComplete: "Smart Complete",
                organicTooltip: "Búsqueda orgánica",
                paid: "Pagado",
                paidTooltip: "Búsqueda pagada"
            },
            addToMyList: "Añadir palabras clave a Mi Lista",
            exportAmazonRecommended: "Recomendado por Amazon",
            exportSponsored: "Auspiciados",
            exportOrganic: "Organico",
            amzSuggestedAvgTable: "Clasificación recomendada por Amazon (promed.)",
            amzSuggestedCountTable: "Clasificación recomendada por Amazon (recuento)",
            smartComplete: "Smart Complete",
            abad: "ABA Total<br/>Click Cuota",
            abadTooltip: "Amazon Brand Analytics",
            abadValueTooltip: "Suma de los 3 primeros ASINs click cuota",
            organicRankAverage: "Clasificación orgánica (promed.)",
            abadConv: "ABA Total<br/>Cuota de conversión",
            abadConvTooltip: "Suma de los 3 primeros ASINs click cuota",
            abadSearchFrequencyRank: "ABA SFR",
            abadSearchFrequencyRankTooltip: "The ranked order of search frequency. Search terms with the same search frequency over the selected time frame will show the same rank."
        },
        tableWalmart: {
            keywordPhrase: "Frase clave",
            keywordPhraseTooltip: "Palabra clave por la que aparece el producto en las 500 posiciones principales en los resultados de búsqueda de Walmart",
            searchVolumeWalmart: "Volumen de búsqueda",
            searchVolumeWalmartExport: "Volumen de búsqueda (Walmart)",
            searchVolumeWalmartTooltip: "El volumen de búsqueda de Walmart se basa en estimaciones propias que se encuentran actualmente en versión beta. Los datos exactos e históricos no están disponibles actualmente.",
            searchVolume: "Volumen de búsqueda",
            searchVolumeAmazonExport: "Volumen de búsqueda (Amazon)",
            amazonSearchVolume: "Volumen de búsqueda de Amazon",
            searchVolumeTooltip: "Número estimado de veces que esta palabra clave se busca en Amazon al mes. Puedes utilizarlo para complementar tu búsqueda, mientras que se mejora el volumen de búsqueda de Walmart.",
            competingProducts: "Productos competidores",
            competingProductsTooltip: "Número total de productos obtenidos en una búsqueda del cliente utilizando esta palabra clave/frase en Walmart",
            sponsoredProducts: "Productos auspiciados",
            sponsoredProductsTooltip: "Número de productos detectados que ejecutan anuncios auspiciados en los resultados de la búsqueda para esta frase con palabra clave en Walmart",
            matchType: "Tipo de coincidencia",
            matchTypeTooltip: "Fuente de la que se obtiene una palabra clave",
            organicRank: "Clasificación orgánica",
            organicRankTooltip: "La posición orgánica detectada por última vez para el producto analizado en la búsqueda del cliente en Walmart",
            sponsoredRank: "Clasificación auspiciados",
            sponsoredRankTooltip: "Posición del anuncio auspiciado detectada por última vez para el producto analizado en la búsqueda del cliente en Walmart",
            sponsoredRankAverage: "Clasificación auspiciados (promed.)",
            sponsoredRankAverageTooltip: "Posición promedio detectada de entre todos los productos en los resultados auspiciados",
            sponsoredRankCount: "Clasificación auspiciados (recuento)",
            sponsoredRankCountTooltip: "Número de productos requeridos detectados con anuncios auspiciados para la/s palabra/s clave",
            positionRank: "Posición (clasificación)",
            positionRankTooltip: "La posición que el primer producto (en una búsqueda múltiple de productos) ocupa en los resultados de búsqueda de Walmart",
            relativeRank: "Clasificación relativa",
            relativeRankTooltip: "La clasificación del producto principal en relación con sus competidores. Por ejemplo, si dos (2) competidores están mejor clasificados que el producto principal, la clasificación relativa será tres (3).",
            competitorRank: "Clasificación de competidores (promed.)",
            competitorRankTooltip: "Clasificación promedio de productos competidores. En este cálculo, se ignoran los productos que no se han clasificado.",
            rankingCompetitors: "Competidores de la clasificación (recuento)",
            rankingCompetitorsTooltip: "Número de productos competidores que se han clasificado para la frase determinada.",
            competitorPerformanceScore: "Puntuación del rendimiento de los competidores",
            competitorPerformanceScoreTooltip: "La puntuación mide, de 1 a 10, la relevancia de la palabra clave para los productos competidores introducidos (excluyendo el primer producto). Una puntuación más alta significa que hay más productos clasificados de forma orgánica y tienen una clasificación orgánica promedio inferior."
        },
        landingDemo: {
            title1: "Cerebro te ayuda a encontrar las mejores palabras clave relacionadas seleccionando un producto específico en el",
            title2: "mercado.",
            subtitle: "Selecciona un ASIN para empezar",
            description: "Cerebro es clave para lanzar con éxito nuevos productos y dar a conocer tu marca. También puedes medir las palabras clave más eficaces para tu producto en Amazon, optimizar el listado de productos para impulsar las ventas y mantener tarifas competitivas en tus productos.",
            backToSearch: "Volver a la búsqueda"
        },
        searchVolume: {
            total: {
                tooltip: "Displays the total search volume for your filtered keywords over the past 30 days.",
                title: "Total del volumen de búsqueda"
            },
            average: {
                tooltip: "Displays the average search volume for your filtered keywords over the past 30 days.",
                title: "Promedio del volumen de búsqueda"
            },
            title: {amazon: "Amazon Search Vol.", walmart: "Walmart Search Vol."}
        },
        floatingButton: "Filtrar resultados",
        descriptionFree: "Encuentre palabras clave para su listado mediante la búsqueda inversa de productos.",
        inputPlaceholderFree: "La comparación de palabras clave entre productos está disponible para Platinum y superiores.",
        inputPlaceholderNotFree: "Ingrese hasta {maxAsins} identificadores de producto para la comparación de palabras clave.",
        searchBarTooltipTitle: "Desbloquea la búsqueda de múltiples productos en Platinum",
        searchBarTooltipButton: "Actualizar ahora"
    }, ha = {very_low: "Muy bajo", low: "Bajo", medium: "Medio", high: "Alto", very_high: "Muy alto"}, ga = {
        button: "Crear una nueva carpeta",
        title: "Crear una nueva carpeta en Mi Lista",
        text: "Crea una nueva carpeta en Mi Lista en la que puedas guardar palabras clave para futuras consultas a través de las herramientas de Helium 10. Cada carpeta está limitada al uso en un único mercado.",
        folderName: "FolderName",
        folderNamePlaceholder: "Elige un nombre para esta carpeta",
        folderNameRequired: "Campo obligatorio",
        marketplace: "Mercado",
        save: "Guardar",
        close: "Cerrar"
    }, ba = {
        minBiggest: "Mín. mayor que el máx.",
        frankenstein: {limitIsExceeded: "El recuento total de símbolos en todas las frases no puede ser superior a 200 000."},
        common: {
            400: "Los datos introducidos son erróneos o no hay resultados",
            402: "Has alcanzado el límite de usos",
            403: "Acceso denegado",
            404: "No encontrado",
            409: "Los datos introducidos contradicen tus acciones anteriores",
            422: "Los datos introducidos no son válidos",
            500: "Error desconocido",
            503: "La función solicitada no está disponible temporalmente",
            undefined: "Error desconocido",
            "503Retry": "Inténtelo de nuevo más tarde"
        }
    }, va = {
        title: "Magnet",
        description: "Encuentra las palabras claves relacionadas principales para tu producto.",
        learnTooltip: "Obtén ayuda para dominar Magnet viendo vídeos y leyendo artículos",
        tabSingle: "Buscar sugerencias",
        tabMultiple: "Analizar palabras clave",
        inputPlaceholderSingle: "Ingresa una palabra clave",
        inputPlaceholderMultiple: "Introduce hasta {number} palabras clave",
        addFromMyList: "Agregar desde Mi Lista",
        landingSingleTitle: "Introduce arriba una palabra clave para encontrar las principales palabras clave relacionadas",
        landingSingleDescription: "Utilizaremos lo que introduzcas para sugerirte palabras clave que puedan ser relevantes para ti. Utiliza nuestros filtros para acotar los resultados y anclar los que te gusten a la carpeta: Mi Lista.",
        landingMultipleTitle: "Obtén un resumen detallado de hasta 200 palabras clave que te interesan",
        landingMultipleDescription: "Facilitaremos datos relevantes para ayudarte a determinar qué palabras clave vale la pena conservar. Al utilizar filtros, organiza qué palabras clave son más importantes y añádelas a la carpeta Mi Lista.",
        landingWatchVideo: "Ve nuestro vídeo de introducción",
        keywordSummary: {
            title: "Resumen de palabras clave",
            totalKeywords: "Palabras clave totales",
            averageSearchVolume: "Promedio del volumen de búsqueda",
            totalSearchVolume: "Total del volumen de búsqueda",
            averageMagnetIq: "Promedio de puntuación IQ Magnet",
            averageCompetingProducts: "Promedio de productos competidores",
            totalAmazonSV: "Volumen total de búsquedas en Amazon",
            totalWalmartSV: "Volumen total de búsquedas en Walmart"
        },
        keywordSearchSummary: {
            title: "Resumen de búsqueda de palabra clave",
            viewTopProducts: "Ver productos principales",
            searchVolume: "Volumen de búsqueda",
            magnetIQScore: "Puntuación IQ Magnet",
            magnetIQScoreTooltip: "Puntuación basada en la proporción de volumen de búsqueda estimado con respecto al número de productos competidores: una puntuación alta significa un número relativamente alto de búsquedas en comparación con el número de competidores; una puntuación baja significa lo contrario",
            cpr: "CPR"
        },
        searchVolumeDistribution: {title: "Buscar distribución de volumen", seriesName: "Volumen"},
        history: {
            description: "Encuentra una búsqueda realizada anteriormente con Magnet y vuelve a cargarla utilizando cualquiera de tus búsquedas asignadas.",
            columns: {keywordSearch: "Búsqueda de palabra clave", searchType: "Tipo de búsqueda"},
            searchTypes: {singleSearch: "Búsqueda única", multiSearch: "Búsqueda múltiple"},
            tooltip: "Ver tus búsquedas anteriores y volver a cargar los resultados"
        },
        openInCerebro: "Haz clic para abrir en Cerebro",
        tabSingleTooltip: "Encuentra las principales palabras clave relacionadas",
        tabMultipleTooltip: "Introduce hasta 200 palabras clave y recibe las métricas",
        boughtTogether: {
            title: "Productos principales",
            description: "Haz clic en uno de los siguientes productos para encontrar sus palabras clave con mejor desempeño en Cerebro."
        },
        choiseBadge: {
            amazon: "La palabra que estás analizando aparece como la elección de Walmart para este producto.",
            walmart: "La palabra que estás analizando aparece como la elección de Walmart para este producto."
        },
        asinInsteadOfKeywordError: {
            title: "ASIN detectado",
            text: {
                part1: "Has introducido {asin}. Ver palabras clave para este ASIN en",
                part2: "o introduzca una palabra clave para continuar."
            }
        },
        landingDemo: {
            title1: "Magnet te ayuda a encontrar las mejores palabras clave relacionadas en el",
            title2: "mercado.",
            subtitle: "Selecciona una palabra clave a continuación para empezar",
            description: "Utilizaremos lo que selecciones para sugerirte palabras clave que puedan ser relevantes para tu búsqueda. Utiliza los filtros para acotar los resultados y anclar los que te gusten a la carpeta Mi Lista."
        }
    }, ya = {
        options: {
            ">10000": ">10,000",
            "5000-10000": "5,000-10,000",
            "1000-5000": "1,000-5,000",
            "<1000": "< 1,000",
            "Very Low": "Muy bajo",
            Low: "Bajo",
            Medium: "Medio",
            High: "Alto",
            "Very High": "Muy alto",
            very_low: "Muy bajo",
            low: "Bajo",
            medium: "Medio",
            high: "Alto",
            very_high: "Muy alto"
        }
    }, Sa = {
        title: "Has buscado este producto antes",
        description: "¿Deseas cargar tu búsqueda anterior desde el historial o ejecutar una nueva búsqueda?",
        newSearchButton: "Ejecutar nueva búsqueda",
        fromHistoryButton: "Cargar desde el historial"
    }, fa = "No hay datos disponibles", Aa = {
        button: "Amplia al plan ilimitado",
        texts: {
            cerebroAmazon: {
                one: "Queda <b>{count}</b> búsqueda de Cerebro para Amazon hoy",
                other: "Queda <b>{count}</b> búsquedas de Cerebro para Amazon hoy"
            },
            cerebroWalmart: {
                one: "Queda <b>{count}</b> búsqueda de Cerebro para Walmart hoy",
                other: "Queda <b>{count}</b> búsquedas de Cerebro para Walmart hoy"
            },
            magnetAmazon: {
                one: "<b>{count}</b> búsqueda de Amazon restante hoy",
                other: "<b>{count}</b> búsquedas de Amazon restantes hoy"
            },
            magnetWalmart: {
                one: "<b>{count}</b> búsqueda de Walmart restante hoy",
                other: "<b>{count}</b> búsquedas de Walmart restantes hoy"
            },
            cerebroDemo: "<b>Estás viendo una demostración de Cerebro.</b> Actualiza para el análisis de palabras clave en varios productos, biblioteca preestablecida y filtros rápidos.",
            magnetDemo: "Estás viendo una demostración de Magnet"
        },
        plans: {
            free: "Free",
            starter: "Starter",
            platinum: "Platinum",
            diamond: "Diamond",
            starterChinese: "Explorer",
            platinumChinese: "Entrepreneur",
            diamondChinese: "Professional",
            freeChinese: "Free"
        },
        prices: {platinum: "$99/mes", diamond: "$249/mes", commonMonth: "${price}/mes"},
        WALMART_features: {
            title: "Desbloquea esta y otras excelentes funciones en Cerebro para Walmart",
            subtitle: "Esta función solo está disponible para un plan Diamond o superior.",
            upgradeButton: "Información sobre los planes",
            declineButton: "Ahora no",
            features: [{
                title: "Búsqueda de producto individual",
                values: {
                    Helium10_Starter: "2 usos por día",
                    Helium10_Free: "2 usos por día",
                    Helium10_Start_Your_Business: "2 usos por día"
                }
            }, {title: "Búsqueda múltiple de productos"}, {title: "Múltiples páginas de resultados"}, {title: "Filtrar resultados"}, {title: "Obtener competidores"}, {title: "Historial"}, {title: "Ventas por palabra clave para Cerebro y Magnet"}, {
                title: "Walmart",
                values: {Helium10_Free: "2 usos por día"}
            }, {
                title: "Follow-Up",
                values: {Helium10_Free: "2,000 e-mails", Helium10_Scale_Your_Business: "10,000 e-mails"}
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Free: "2500 palabras clave", Helium10_Scale_Your_Business: "5000 palabras clave"}
            }, {
                title: "Black Box",
                values: {Helium10_Starter: "20 usos", Helium10_Start_Your_Business: "20 usos"}
            }, {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "2 usos por día",
                    Helium10_Free: "2 usos por día",
                    Helium10_Start_Your_Business: "2 usos por día"
                }
            }, {
                title: "Magnet",
                values: {
                    Helium10_Starter: "2 usos por día",
                    Helium10_Free: "2 usos por día",
                    Helium10_Start_Your_Business: "2 usos por día"
                }
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20 palabras clave", Helium10_Scale_Your_Business: "5000 palabras clave"}
            }, {title: "Xray", values: {Helium10_Starter: "50 usos"}}],
            cerebro: {
                title: "Desbloquea esta y otras excelentes funciones en Cerebro para Walmart",
                subtitle: "Esta función solo está disponible para un plan Diamond o superior."
            },
            magnet: {
                title: "Desbloquea esta y otras excelentes funciones en Magnet para Walmart",
                subtitle: "Obtén búsquedas ilimitadas y desbloquea más valor con Diamond.",
                titleHistory: "Desbloquea el Historial y otras excelentes funciones en Magnet para Walmart"
            }
        },
        AMAZON_features: {
            title: "Desbloquea esta y otras excelentes funciones en Cerebro para Amazon",
            subtitle: "Esta función solo está disponible para un plan Platinum o superior.",
            upgradeButton: "Información sobre los planes",
            declineButton: "Ahora no",
            features: [{
                title: "Búsqueda de producto individual",
                values: {Helium10_Free: "2 usos por día", Helium10_Starter: "2 usos por día"}
            }, {title: "Búsqueda múltiple de productos"}, {title: "Múltiples páginas de resultados"}, {title: "Filtrar resultados"}, {title: "Obtener competidores"}, {title: "Historial"}, {title: "Ventas por palabra clave para Cerebro y Magnet"}, {
                title: "Walmart",
                values: {Helium10_Free: "2 usos por día"}
            }, {
                title: "Follow-Up",
                values: {Helium10_Free: "2,000 e-mails", Helium10_Scale_Your_Business: "10,000 e-mails"}
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Free: "2500 palabras clave", Helium10_Scale_Your_Business: "5000 palabras clave"}
            }, {
                title: "Black Box",
                values: {Helium10_Starter: "20 usos", Helium10_Start_Your_Business: "20 usos"}
            }, {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "2 usos por día",
                    Helium10_Free: "2 usos por día",
                    Helium10_Start_Your_Business: "2 usos por día"
                }
            }, {
                title: "Magnet",
                values: {
                    Helium10_Starter: "2 usos por día",
                    Helium10_Free: "2 usos por día",
                    Helium10_Start_Your_Business: "2 usos por día"
                }
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20 palabras clave", Helium10_Scale_Your_Business: "5000 palabras clave"}
            }, {title: "Xray", values: {Helium10_Start_Your_Business: "50 usos"}}],
            cerebro: {
                title: "Desbloquea esta y otras excelentes funciones en Cerebro para Amazon",
                subtitle: "Esta función solo está disponible para un plan Platinum o superior."
            },
            magnet: {
                title: "Desbloquea esta y otras excelentes funciones en Magnet para Amazon",
                subtitle: "Obtén búsquedas ilimitadas y desbloquea más valor con Diamond.",
                titleHistory: "Desbloquea el Historial y otras excelentes funciones en Magnet para Amazon"
            }
        },
        WALMART_tools: {
            title: "Has agotado tus 2 búsquedas diarias gratuitas en Cerebro para Walmart.",
            subtitle: "Obtén búsquedas ilimitadas por día y desbloquea más valor con Diamond.",
            upgradeButton: "Actualizar a Diamond",
            declineButton: "Ahora no",
            features: [{
                title: "Cerebro para Walmart",
                subtitle: "Revertir búsqueda de productos",
                values: {
                    Helium10_Starter: "2 usos por día",
                    Helium10_Free: "2 usos por día",
                    Helium10_Start_Your_Business: "2 usos por día"
                }
            }, {
                title: "Magnet para Walmart",
                subtitle: "Búsqueda de palabras clave",
                values: {
                    Helium10_Starter: "2 usos por día",
                    Helium10_Free: "2 usos por día",
                    Helium10_Start_Your_Business: "2 usos por día"
                }
            }, {
                title: "Xray para Walmart",
                subtitle: "Extensión de Chrome – Búsqueda de productos",
                values: {Helium10_Starter: "50 usos", Helium10_Free: "50 usos", Helium10_Start_Your_Business: "50 usos"}
            }, {
                title: "Profits para Walmart",
                subtitle: "Panel de análisis financiero",
                values: {Helium10_Starter: "90 dias", Helium10_Free: "90 dias", Helium10_Start_Your_Business: "90 dias"}
            }],
            cerebro: {
                title: "Has agotado tus 2 búsquedas diarias gratuitas en Cerebro para Walmart.",
                subtitle: "Obtén búsquedas ilimitadas por día y desbloquea más valor con Diamond.",
                titleNew: "Has agotado tus {uses} búsquedas diarias gratuitas en Cerebro para Walmart."
            },
            magnet: {
                title: "Has agotado tus 2 búsquedas diarias gratuitas en Cerebro para Walmart.",
                subtitle: "Obtén búsquedas ilimitadas por día y desbloquea más valor con Diamond.",
                titleNew: "Has agotado tus {uses} búsquedas diarias gratuitas en Cerebro para Walmart."
            },
            titleNew: "Has agotado tus {uses} búsquedas diarias gratuitas en Cerebro para Walmart."
        },
        AMAZON_tools: {
            title: "Has agotado tus 2 búsquedas diarias gratuitas en Cerebro para Amazon.",
            subtitle: "Obtén búsquedas ilimitadas por día y desbloquea más valor con Platinum.",
            upgradeButton: "Actualizar a Platinum",
            declineButton: "Ahora no",
            features: [{
                title: "Cerebro para Amazon",
                subtitle: "Revertir búsqueda de productos",
                values: {Helium10_Free: "2 usos por día", Helium10_Starter: "2 usos por día"}
            }, {
                title: "Magnet para Amazon",
                subtitle: "Búsqueda de palabras clave",
                values: {Helium10_Free: "2 usos por día", Helium10_Starter: "2 usos por día"}
            }, {
                title: "Xray para Amazon",
                subtitle: "Extensión de Chrome – Búsqueda de productos",
                values: {Helium10_Free: "50 usos", Helium10_Starter: "50 usos"}
            }, {
                title: "Rastreador de palabras clave para Amazon",
                subtitle: "Seguimiento de la clasificación de productos",
                values: {
                    Helium10_Free: "20 palabras clave",
                    Helium10_Starter: "20 palabras clave",
                    Helium10_Start_Your_Business: "500 palabras clave"
                }
            }],
            cerebro: {
                title: "Has agotado tus 2 búsquedas diarias gratuitas en Cerebro para Amazon.",
                subtitle: "Obtén búsquedas ilimitadas por día y desbloquea más valor con Platinum.",
                titleNew: "Has agotado tus {uses} búsquedas diarias gratuitas en Cerebro para Amazon."
            },
            magnet: {
                title: "Has agotado tus 2 búsquedas diarias gratuitas en Magnet para Amazon.",
                subtitle: "Obtén búsquedas ilimitadas por día y desbloquea más valor con Platinum.",
                titleNew: "Has agotado tus {uses} búsquedas diarias gratuitas en Magnet para Amazon."
            }
        },
        getPlan: "Obtener un plan",
        titles: {
            keywordSales: "Actualizar para desbloquear esto y otras grandes características",
            modalCommon: "Actualizar para desbloquear esto y otras grandes características"
        },
        subtitles: {
            modalPlatinum: "Esta función solo está disponible para un plan Platinum o superior.",
            modalDiamond: "Esta función solo está disponible para un plan Diamond o superior.",
            modalCommon: "Esta función solo está disponible para un plan {plan} o superior.",
            modalUnlimitedCommon: "Consigue búsquedas ilimitadas y desbloquea más valor con {plan}.",
            pageCommon: "Consigue búsquedas ilimitadas por día y desbloquea más valor con {plan}."
        },
        featuresModal: {
            singleProductSearch: {
                title: "Búsqueda de producto individual",
                values: {
                    Helium10_Starter: "2 usos por día",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 usos por día"
                }
            },
            singleProductSearch2: {
                title: "Búsqueda de producto individual",
                values: {Helium10_Free: "Demo", Helium10_Starter: "2 usos por día"}
            },
            multiProductSearch: {title: "Búsqueda múltiple de productos"},
            multiplePagesResults: {title: "Múltiples páginas de resultados"},
            filterResults: {title: "Filtrar y ordenar resultados"},
            getCompetitors: {title: "Obtener competidores"},
            history: {title: "Historial"},
            export: {title: "Exportar"},
            salesByKeyword: {title: "Ventas por palabra clave para Cerebro y Magnet"},
            magnetWalmart: {title: "Walmart", values: {Helium10_Free: "Demo"}},
            followUp: {
                title: "Follow-Up",
                values: {Helium10_Free: "2,000 e-mails", Helium10_Scale_Your_Business: "10,000 e-mails"}
            },
            keywordTracker: {
                title: "Keyword Tracker",
                values: {Helium10_Free: "2500 palabras clave", Helium10_Scale_Your_Business: "5000 palabras clave"}
            },
            blackBox: {title: "Black Box", values: {Helium10_Starter: "20 usos", Helium10_Start_Your_Business: "20 usos"}},
            cerebro: {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "2 usos por día",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 usos por día"
                }
            },
            magnet: {
                title: "Magnet",
                values: {
                    Helium10_Starter: "2 usos por día",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 usos por día"
                }
            },
            keywordTracker2: {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20 palabras clave", Helium10_Scale_Your_Business: "5000 palabras clave"}
            },
            xray: {title: "Xray", values: {Helium10_Free: "50 usos"}},
            blackBoxProducts: {title: "Black Box", values: {Helium10_Free: "20 usos", Helium10_Starter: "20 usos"}},
            blackBoxProductsCerebro: {title: "Cerebro", values: {Helium10_Free: "Limitado", Helium10_Starter: "Limitado"}},
            blackBoxProductsMagnet: {title: "Magnet", values: {Helium10_Free: "Limitado", Helium10_Starter: "Limitado"}},
            abad: {title: "Amazon Brand Analytics dentro de Cerebro"},
            walmartCerebroMagnet: {title: "Walmart para Cerebro o Magnet"},
            adtomic: {title: "Adtomic"},
            businessValuation: {title: "Valoración del negocio"},
            listingAnalyzer: {
                title: "Listing Analyzer",
                values: {
                    Helium10_Free: "2 búsquedas / mes",
                    Helium10_Starter: "2 búsquedas / mes",
                    Helium10_Start_Your_Business: "25 búsquedas / mes",
                    Helium10_Scale_Your_Business: "50 búsquedas / mes"
                }
            },
            abadNew: {title: "Amazon Brand Analytics en Cerebro o Magnet"},
            singleProductSearchUses: {
                title: "Búsqueda de producto individual",
                values: {
                    Helium10_Starter: "{uses} usos por día",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} usos por día"
                }
            },
            singleProductSearch2Uses: {
                title: "Búsqueda de producto individual",
                values: {Helium10_Free: "Demo", Helium10_Starter: "{uses} usos por día"}
            },
            followUpUses: {
                title: "Follow-Up",
                values: {
                    Helium10_Free: "{uses} correos electrónicos",
                    Helium10_Scale_Your_Business: "{uses} correos electrónicos"
                }
            },
            keywordTrackerUses: {
                title: "Keyword Tracker",
                values: {Helium10_Free: "{uses} palabras clave", Helium10_Scale_Your_Business: "{uses} palabras clave"}
            },
            blackBoxUses: {
                title: "Black Box",
                values: {Helium10_Starter: "{uses} usos", Helium10_Start_Your_Business: "{uses} usos"}
            },
            cerebroUses: {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "{uses} usos por día",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} usos por día"
                }
            },
            magnetUses: {
                title: "Magnet",
                values: {
                    Helium10_Starter: "{uses} usos por día",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} usos por día"
                }
            },
            keywordTracker2Uses: {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "{uses} palabras clave", Helium10_Scale_Your_Business: "{uses} palabras clave"}
            },
            xrayUses: {title: "Xray", values: {Helium10_Free: "{uses} usos"}},
            blackBoxProductsUses: {
                title: "Black Box",
                values: {Helium10_Free: "{uses} usos", Helium10_Starter: "{uses} usos"}
            },
            listingAnalyzerUses: {
                title: "Listing Analyzer",
                values: {
                    Helium10_Free: "{uses} búsquedas / mes",
                    Helium10_Starter: "{uses} búsquedas / mes",
                    Helium10_Start_Your_Business: "{uses} búsquedas / mes",
                    Helium10_Scale_Your_Business: "{uses} búsquedas / mes"
                }
            },
            salesHistoricalChart: {title: "Gráfico con historial de ventas"},
            ppcBid: {title: "Oferta sugerida de Helium 10 PPC"}
        },
        featuresPage: {
            cerebroForWalmart: {
                title: "Cerebro para Walmart",
                subtitle: "Revertir búsqueda de productos",
                values: {
                    Helium10_Starter: "2 usos por día",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 usos por día"
                }
            },
            magnetForWalmart: {
                title: "Magnet para Walmart",
                subtitle: "Búsqueda de palabras clave",
                values: {
                    Helium10_Starter: "2 usos por día",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 usos por día"
                }
            },
            xrayForWalmart: {
                title: "Xray para Walmart",
                subtitle: "Extensión de Chrome – Búsqueda de productos",
                values: {Helium10_Starter: "50 usos", Helium10_Free: "50 usos", Helium10_Start_Your_Business: "50 usos"}
            },
            profitsForWalmart: {
                title: "Profits para Walmart",
                subtitle: "Panel de análisis financiero",
                values: {Helium10_Starter: "90 dias", Helium10_Free: "90 dias", Helium10_Start_Your_Business: "90 dias"}
            },
            cerebroForAmazon: {
                title: "Cerebro para Amazon",
                subtitle: "Revertir búsqueda de productos",
                values: {Helium10_Free: "Demo", Helium10_Starter: "2 usos por día"}
            },
            magnetForAmazon: {
                title: "Magnet para Amazon",
                subtitle: "Búsqueda de palabras clave",
                values: {Helium10_Free: "Demo", Helium10_Starter: "2 usos por día"}
            },
            xrayForAmazon: {
                title: "Xray para Amazon",
                subtitle: "Extensión de Chrome – Búsqueda de productos",
                values: {Helium10_Free: "50 usos", Helium10_Starter: "50 usos"}
            },
            keywordTrackerForAmazon: {
                title: "Rastreador de palabras clave para Amazon",
                subtitle: "Seguimiento de la clasificación de productos",
                values: {
                    Helium10_Free: "20 palabras clave",
                    Helium10_Starter: "20 palabras clave",
                    Helium10_Start_Your_Business: "500 palabras clave"
                }
            },
            cerebroForWalmartUses: {
                title: "Cerebro para Walmart",
                subtitle: "Revertir búsqueda de productos",
                values: {
                    Helium10_Starter: "{uses} usos por día",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} usos por día"
                }
            },
            magnetForWalmartUses: {
                title: "Magnet para Walmart",
                subtitle: "Búsqueda de palabras clave",
                values: {
                    Helium10_Starter: "{uses} usos por día",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} usos por día"
                }
            },
            xrayForWalmartUses: {
                title: "Xray para Walmart",
                subtitle: "Extensión de Chrome – Búsqueda de productos",
                values: {
                    Helium10_Starter: "{uses} usos",
                    Helium10_Free: "{uses} usos",
                    Helium10_Start_Your_Business: "{uses} usos"
                }
            },
            profitsForWalmartUses: {
                title: "Profits para Walmart",
                subtitle: "Panel de análisis financiero",
                values: {
                    Helium10_Starter: "{uses} días",
                    Helium10_Free: "{uses} días",
                    Helium10_Start_Your_Business: "{uses} días"
                }
            },
            cerebroForAmazonUses: {
                title: "Cerebro para Amazon",
                subtitle: "Revertir búsqueda de productos",
                values: {Helium10_Free: "Demo", Helium10_Starter: "{uses} usos por día"}
            },
            magnetForAmazonUses: {
                title: "Magnet para Amazon",
                subtitle: "Búsqueda de palabras clave",
                values: {Helium10_Free: "Demo", Helium10_Starter: "{uses} usos por día"}
            },
            xrayForAmazonUses: {
                title: "Xray para Amazon",
                subtitle: "Extensión de Chrome – Búsqueda de productos",
                values: {Helium10_Free: "{uses} usos", Helium10_Starter: "{uses} usos"}
            },
            keywordTrackerForAmazonUses: {
                title: "Rastreador de palabras clave para Amazon",
                subtitle: "Seguimiento de la clasificación de productos",
                values: {
                    Helium10_Free: "{uses} palabras clave",
                    Helium10_Starter: "{uses} palabras clave",
                    Helium10_Start_Your_Business: "{uses} palabras clave"
                }
            }
        },
        titlesModal: {
            blackBoxProductsLimit: {
                title: "Ha alcanzado el límite de búsquedas gratuitas de Black Box",
                subtitle: "Aumenta tu límite y desbloquea más valor con Platinum",
                upgradeButton: "Comparar planes ahora",
                subtitleCommon: "Aumenta tu límite y desbloquea más valor con {plan}"
            },
            blackBoxSalesChartAmazon: {
                title: "Desbloquea esta y otras increíbles funciones en BlackBox para Amazon",
                subtitle: "Aumenta tu límite y desbloquea más valor con {plan}"
            },
            upgradeButton: ""
        },
        upgradeButton: "Actualizar plan",
        upgradeTo: "Cambiar a {upgradePlan}"
    }, wa = {copy: "Copiar {name}", copied: "{name} copiado"}, ka = {
        cerebro: {
            amazon: "¿Necesitas un ASIN? Intenta alguno de estos:",
            walmart: "¿Necesitas uno Walmart ID del producto? Prueba con uno de estos:"
        },
        magnet: {
            amazon: "¿Necesita una palabra clave? Prueba con una de estas:",
            walmart: "¿Necesita una palabra clave? Prueba con una de estas:"
        }
    }, Ta = {
        1001: "AUTH_INVALID_TOKEN",
        1002: "AUTH_NO_USER",
        2001: "Formato del identificador ASIN {asin} no válido",
        2002: "Identificador ASIN {asin} no válido para el mercado {marketplace}",
        2003: "Error inesperado del servidor",
        2004: "Error inesperado del servidor",
        2005: "Error inesperado del servidor",
        2006: "El recuento total de símbolos en todas las frases no puede ser superior a 200 000.",
        2007: "Error inesperado del servidor",
        3001: "No se han encontrado los datos de búsqueda principales del ASIN",
        3002: "No se han encontrado los datos de búsqueda principales del producto",
        3003: "No se encontró la abreviación para el mercado: {marketplace}",
        4001: "Error inesperado del servidor",
        4002: "Error inesperado del servidor",
        4003: "Error inesperado del servidor",
        4004: "Error inesperado del servidor",
        4005: "Error inesperado del servidor",
        4006: "Error inesperado del servidor",
        4007: "Error inesperado del servidor",
        5001: "Vaciar los datos de búsqueda",
        5002: "Vaciar todos los datos del producto o los principales",
        5003: "Vaciar los datos de búsquedas",
        5004: "No hay datos para el producto",
        5005: "Error inesperado del servidor",
        5006: "Error inesperado del servidor",
        6001: "Frases no introducidas",
        6002: "Frases no introducidas",
        6003: "Palabras comunes del usuario no existentes",
        6004: "No hay ningún cliente con el mercado requerido",
        6005: "No puedes ver el historial. Para ello, mejora tu plan Helium 10.",
        6006: "Error inesperado del servidor",
        6007: "Error inesperado del servidor",
        6008: "No se han encontrado detalles del producto para el ID {productId}",
        6009: "¡No hay ningún resultado para las palabras clave!",
        6010: "No se ha cargado el archivo.",
        6011: "No se puede guardar el modelo de búsqueda",
        6012: "No se puede eliminar el modelo",
        6013: "El modelo de búsqueda no existe",
        6014: "Las palabras comunes para este usuario no existen",
        6015: "Las palabras comunes no están eliminadas",
        6016: "El elemento PROMED rango de sugeridos no existe",
        6017: "El elemento recuento de rango de sugeridos no existe",
        6018: "El elemento posición de sugeridos para el filtro no existe",
        6019: "La clave rango promedio de auspiciados no existe",
        6020: "Error de servidor desconocido",
        6021: "El elemento posición de auspiciados para el filtro no existe",
        6022: "La clave frase no existe en el elemento",
        6023: "El elemento rango de posición no existe",
        6024: "El elemento puntuación del rendimiento de los competidores no existe",
        6025: "El elemento rango orgánico no existe",
        6026: "El elemento tipo de coincidencia no existe",
        6027: "El elemento frase está vacío o no existe",
        6028: "El elemento clasificación de competidores no existe",
        6029: "El elemento rango relativo no existe",
        6030: "El elemento rango de posición no existe",
        6031: "El elemento número de resultados no existe",
        6032: "El elemento PROMED competitivo no existe",
        6033: "El valor tendencia de volumen de búsqueda no existe",
        6034: "El elemento densidad del título para el filtro no existe",
        6035: "El elemento rango de posición está vacío o no existe",
        6036: "El elemento ASIN actual está vacío o no existe",
        6037: "El elemento está vacío o no existe",
        6038: "El elemento volumen de búsqueda para el filtro de Amazon no existe",
        6039: "El elemento impresión en el filtro de volumen de búsqueda no existe",
        6040: "El ID de producto rastreado no existe",
        6041: "El producto actual no existe",
        6042: "No hay un número de resultados",
        6043: "La frase no existe",
        6044: "El filtro no puede incluir los parámetros incluye-todos e incluye-cualquiera, que son iguales a verdadero o falso",
        6045: "El valor del filtro país vendedor más frecuente no existe",
        6046: "No se puede crear la búsqueda inversa",
        6047: "No puedes realizar la exportación de búsquedas pasadas. Para ello, mejora tu plan Helium 10",
        6049: "El filtro no está configurado",
        6050: "El servicio externo no funciona o ha devuelto datos no válidos",
        7001: "Debe haber resultados para al menos 1 producto competidor",
        7002: "No se han obtenido frases mediante el ASIN especificado",
        7003: "No hay ningún elemento en los resultados de la búsqueda",
        7004: "Tipo de dirección incorrecto",
        7008: "Se ha encontrado un producto erróneo en API",
        7009: "Faltan los ASIN para la búsqueda inversa de CickHouse",
        7010: "Faltan las columnas para seleccionar para la búsqueda inversa de ClickHouse",
        7011: "Las columnas para seleccionar para la búsqueda inversa de ClickHouse tienen un formato incorrecto",
        7012: "Los ASIN para la búsqueda inversa de ClickHouse tienen un formato incorrecto",
        7013: "ID de producto incorrecto para Walmart",
        7014: "Se produjo un error: ' . json_encode($errors, JSON_THROW_ON_ERROR)",
        7015: "No puedes buscar más de 50 palabras clave. Para ello, mejora tu plan Helium 10",
        7016: "No puedes buscar más de 200 palabras clave",
        7017: "Su plan no le permite cargar palabras clave",
        8001: "Dominio {domain} desconocido",
        8002: "ID de mercado desconocida: {marketplaceId}",
        8003: "ID breve {shortId} desconocida",
        8004: "Mercado desconocido: {marketplace}",
        8005: "Error inesperado del servidor",
        unknown: "Error de servidor desconocido",
        "rta-1001": "AUTH_INVALID_TOKEN",
        "rta-1002": "AUTH_NO_USER",
        "rta-2001": "Formato del identificador ASIN {asin} no válido",
        "rta-2002": "Identificador ASIN {asin} no válido para el mercado {marketplace}",
        "rta-2003": "Error inesperado del servidor",
        "rta-2004": "Error inesperado del servidor",
        "rta-2005": "Error inesperado del servidor",
        "rta-2006": "El recuento total de símbolos en todas las frases no puede ser superior a 200 000.",
        "rta-2007": "Error inesperado del servidor",
        "rta-3001": "No se han encontrado los datos de búsqueda principales del ASIN",
        "rta-3002": "No se han encontrado los datos de búsqueda principales del producto",
        "rta-3003": "No se encontró la abreviación para el mercado: {marketplace}",
        "rta-4001": "Error inesperado del servidor",
        "rta-4002": "Error inesperado del servidor",
        "rta-4003": "Error inesperado del servidor",
        "rta-4004": "Error inesperado del servidor",
        "rta-4005": "Error inesperado del servidor",
        "rta-4006": "Error inesperado del servidor",
        "rta-4007": "Error inesperado del servidor",
        "rta-5001": "Vaciar los datos de búsqueda",
        "rta-5002": "Vaciar todos los datos del producto o los principales",
        "rta-5003": "Vaciar los datos de búsquedas",
        "rta-5004": "No hay datos para el producto",
        "rta-5005": "Error inesperado del servidor",
        "rta-5006": "Error inesperado del servidor",
        "rta-6001": "Frases no introducidas",
        "rta-6002": "Frases no introducidas",
        "rta-6003": "Palabras comunes del usuario no existentes",
        "rta-6004": "No hay ningún cliente con el mercado requerido",
        "rta-6005": "No puedes ver el historial. Para ello, mejora tu plan Helium 10.",
        "rta-6006": "Error inesperado del servidor",
        "rta-6007": "Error inesperado del servidor",
        "rta-6008": "No se han encontrado detalles del producto para el ID {productId}",
        "rta-6009": "¡No hay ningún resultado para las palabras clave!",
        "rta-6010": "No se ha cargado el archivo.",
        "rta-6011": "No se puede guardar el modelo de búsqueda",
        "rta-6012": "No se puede eliminar el modelo",
        "rta-6013": "El modelo de búsqueda no existe",
        "rta-6014": "Las palabras comunes para este usuario no existen",
        "rta-6015": "Las palabras comunes no están eliminadas",
        "rta-6016": "El elemento PROMED rango de sugeridos no existe",
        "rta-6017": "El elemento recuento de rango de sugeridos no existe",
        "rta-6018": "El elemento posición de sugeridos para el filtro no existe",
        "rta-6019": "La clave rango promedio de auspiciados no existe",
        "rta-6020": "Error de servidor desconocido",
        "rta-6021": "El elemento posición de auspiciados para el filtro no existe",
        "rta-6022": "La clave frase no existe en el elemento",
        "rta-6023": "El elemento rango de posición no existe",
        "rta-6024": "El elemento puntuación del rendimiento de los competidores no existe",
        "rta-6025": "El elemento rango orgánico no existe",
        "rta-6026": "El elemento tipo de coincidencia no existe",
        "rta-6027": "El elemento frase está vacío o no existe",
        "rta-6028": "El elemento clasificación de competidores no existe",
        "rta-6029": "El elemento rango relativo no existe",
        "rta-6030": "El elemento rango de posición no existe",
        "rta-6031": "El elemento número de resultados no existe",
        "rta-6032": "El elemento PROMED competitivo no existe",
        "rta-6033": "El valor tendencia de volumen de búsqueda no existe",
        "rta-6034": "El elemento densidad del título para el filtro no existe",
        "rta-6035": "El elemento rango de posición está vacío o no existe",
        "rta-6036": "El elemento ASIN actual está vacío o no existe",
        "rta-6037": "El elemento está vacío o no existe",
        "rta-6038": "El elemento volumen de búsqueda para el filtro de Amazon no existe",
        "rta-6039": "El elemento impresión en el filtro de volumen de búsqueda no existe",
        "rta-6040": "El ID de producto rastreado no existe",
        "rta-6041": "El producto actual no existe",
        "rta-6042": "No hay un número de resultados",
        "rta-6043": "La frase no existe",
        "rta-6044": "El filtro no puede incluir los parámetros incluye-todos e incluye-cualquiera, que son iguales a verdadero o falso",
        "rta-6045": "El valor del filtro país vendedor más frecuente no existe",
        "rta-6049": "El filtro no está configurado",
        "rta-6046": "No se puede crear la búsqueda inversa",
        "rta-6047": "No puedes realizar la exportación de búsquedas pasadas. Para ello, mejora tu plan Helium 10",
        "rta-6050": "El servicio externo no funciona o ha devuelto datos no válidos",
        "rta-7001": "Debe haber resultados para al menos 1 producto competidor",
        "rta-7002": "No se han obtenido frases mediante el ASIN especificado",
        "rta-7003": "No hay ningún elemento en los resultados de la búsqueda",
        "rta-7004": "Tipo de dirección incorrecto",
        "rta-7008": "Se ha encontrado un producto erróneo en API",
        "rta-7009": "Faltan los ASIN para la búsqueda inversa de CickHouse",
        "rta-7010": "Faltan las columnas para seleccionar para la búsqueda inversa de ClickHouse",
        "rta-7011": "Las columnas para seleccionar para la búsqueda inversa de ClickHouse tienen un formato incorrecto",
        "rta-7012": "Los ASIN para la búsqueda inversa de ClickHouse tienen un formato incorrecto",
        "rta-7013": "ID de producto incorrecto para Walmart",
        "rta-7014": "Se produjo un error: ' . json_encode($errors, JSON_THROW_ON_ERROR)",
        "rta-7015": "No puedes buscar más de 50 palabras clave. Para ello, mejora tu plan Helium 10",
        "rta-7016": "No puedes buscar más de 200 palabras clave",
        "rta-8001": "Dominio {domain} desconocido",
        "rta-8002": "ID de mercado desconocida: {marketplaceId}",
        "rta-8003": "ID breve {shortId} desconocida",
        "rta-8004": "Mercado desconocido: {marketplace}",
        "rta-8005": "Error inesperado del servidor",
        "rta-7017": "Su plan no le permite cargar palabras clave",
        "rta-2010": "Atributo de clasificación no válido",
        "rta-2011": "Valor de filtro no válido",
        "rta-2012": "Incluir longitud de palabra clave del título no válida",
        "rta-2013": "Excluir longitud de palabra clave del título no válida",
        "rta-7020": "El nombre ya ha sido tomado",
        "rta-22001": "No se ha podido guardar el filtro preestablecido. La longitud máxima de un nombre de filtro preestablecido es de 255 caracteres.",
        "rta-no-prev-searches": "No existen búsquedas anteriores",
        "rta-0": "Error inesperado"
    }, za = {
        pageTitle: "Elite Analytics",
        title: "Elite Analytics",
        description: "Analiza tus palabras clave y descubre tu nicho",
        learnTooltip: "Obtén ayuda para dominar Magnet viendo vídeos y leyendo artículos",
        totalDensity: "Densidad del título",
        totalDensityTooltip: "Porcentaje de resultados con una densidad del título inferior a 12",
        totalSearchVolume: "Tendencia del volumen de búsqueda",
        totalSearchVolumeTooltip: "Porcentaje de resultados con un incremento de la tendencia del volumen de búsqueda",
        totalAverageReview: "Reseña alta",
        totalAverageReviewTooltip: "Porcentaje del recuento de reseñas alto cuando es mayor de 6",
        totalMostFrequent: "País vendedor más frecuente",
        totalMostFrequentTooltip: "País del vendedor más frecuente de tus siguientes resultados.",
        backToUpload: "Volver a la carga",
        showResults: "Mostrar resultados",
        tryAgain: "Intentar otra vez",
        modals: {
            importingTitle: "Importando",
            validatedTitle: "Archivo validado",
            limitExceededTitle: "Límite excedido",
            failedTitle: "Importación fallida",
            validatedDescription: "Has cargado {requestedUses} de {remainingUses} búsquedas de palabras clave restantes del límite de tu plan mensual.",
            limitExceededDescription: {
                one: "Te quedan {remainingUses} de {totalUses} búsquedas de palabras clave en tu límite mensual. Tu archivo tiene {requestedUses} filas, utilizaremos la {count} fila superior del archivo actual para analizar tus resultados.",
                other: "Te quedan {remainingUses} de {totalUses} búsquedas de palabras clave en tu límite mensual. Tu archivo tiene {requestedUses} filas, utilizaremos las {count} filas superiores del archivo actual para analizar tus resultados."
            },
            failedDescription: "Vaya, no se ha reconocido el formato. Consulta el {link} para obtener consejos sobre cómo dar formato a tu archivo.",
            KnowledgeBaseArticle: "Artículo de la base de conocimientos"
        },
        history: {
            descriptionTable: "Busca un informe previo de Elite Analytics y vuelve a cargarlo sin utilizar ninguna de tus búsquedas asignadas. ",
            columns: {
                fileName: "Nombre del archivo",
                keywordCount: "Recuento de palabras clave",
                reportRunDate: "Fecha de ejecución del informe"
            }
        },
        landing: {
            title: "Carga tu lista de palabras clave para identificar aquellas con mayor potencial",
            description: "Carga hasta 2000 filas de palabras clave de Black Box, informe de análisis de marca de Amazon, palabras clave de Mi lista o tu propia lista para desvelar las métricas clave de Helium 10 para identificar nuevas oportunidades al mes.<br/><br/>El informe facilitará la densidad del título, el volumen de búsqueda (+tendencia), el recuento alto de reseñas, el recuento promedio de reseñas y el país vendedor más frecuente. ",
            buttonUpload: "Cargar el informe de palabras clave",
            viewSample: {curiousAbout: "¿Tienes curiosidad por el informe?", view: "Vista", sample: "ejemplo"},
            keywords: {
                one: "Quedan {count}/{total} palabras clave mensuales",
                other: "Quedan {count}/{total} palabras clave mensuales"
            },
            titleModal: "Informe de ejemplo de Elite Analytics",
            videoTitle: "¿No estás seguro de cómo dar formato a tu informe?",
            videoButton: "Ve nuestro vídeo de demostración",
            upsell: {
                title: "Se ha alcanzado el límite mensual",
                description: "Has excedido tu límite de 2000 búsquedas de palabras clave al mes. Puedes ver tus informes de palabras claves con el botón del historial situado en la parte superior derecha de esta vista.<br/><br/>Ponte en contacto con Ventas para saber cómo incrementar tu límite de palabras clave al mes.",
                button: "Contactar con Ventas"
            },
            notElite: {
                title: "Desbloquea información clave con Elite Analytics",
                description: "Elite Analytics te permite cargar hasta 2000 filas de Black Box Keywords, Amazon Brand Analytics Report, My List Keywords o tu propia lista seleccionada para revelar las métricas clave de Helium 10 e identificar nuevas oportunidades por mes.",
                learnMore: "Información sobre Elite",
                subDescription: "El informe proporcionará las ventas por palabras clave, densidad de títulos, volumen de búsqueda (+Tendencia), número de reseñas altas, número de reseñas medias y el país de los vendedores más frecuentes. ¿Tienes curiosidad por ver el informe?",
                sample: "muestra."
            }
        },
        filter: {
            exactTitleMatchProductsCount: {
                title: "Densidad del título",
                tooltip: "Número de productos de la página 1 con la palabra clave en su título"
            },
            impressionExact30: {
                title: "Volumen de búsqueda",
                tooltip: "Número estimado de veces que se busca esta frase con palabra clave al mes"
            },
            searchVolumeTrend30: {title: "Tendencia del volumen de búsqueda", tooltip: "En los últimos 30 días"},
            productsWithReviewsCount: {
                title: "Recuento de reseñas alto",
                tooltip: "Número de resultados entre los 12 principales con más de 1000 reseñas"
            },
            medianReviews: {
                title: "Recuento promedio de reseñas",
                tooltip: "Número promedio de reseñas de los 12 principales"
            },
            mostFrequentSellerCountryCode: {
                title: "País del vendedor más frecuente",
                tooltip: "País vendedor principal entre los 50 principales",
                placeholder: "No seleccionado"
            }
        },
        table: {
            keyword: {title: "Palabras clave"},
            exactTitleMatchProductsCount: {
                title: "Densidad del título",
                tooltip: "Número de productos de la página 1 con la palabra clave en su título"
            },
            impressionExact30: {
                title: "Volumen de búsqueda",
                tooltip: "Número estimado de veces que se busca esta frase con palabra clave al mes"
            },
            searchVolumeTrend30: {title: "Tendencia del volumen de búsqueda", tooltip: "En los últimos 30 días"},
            productsWithReviewsCount: {
                title: "Recuento de reseñas alto",
                tooltip: "Número de resultados entre los 12 principales con más de 1000 reseñas"
            },
            medianReviews: {title: "Promedio de reseñas", tooltip: "Número promedio de reseñas de los 12 principales"},
            topSellerCountry: {
                title: "País vendedor más frecuente",
                tooltip: "País del vendedor principal entre los 50 principales"
            },
            title: {one: "{count} palabra clave", other: "{count} palabras clave"},
            titleSelected: {one: "{count} palabra clave seleccionada", other: "{count} palabras clave seleccionadas"},
            monthlySales: {
                title: "Venta de palabras clave",
                tooltip: "Ventas totales mensuales estimadas por palabra clave"
            }
        },
        distributionByCountryModal: {title: "País vendedor más frecuente: {keyword}"},
        beta: {marketplaceTooptip: "La versión beta incluye el mercado estadounidense."},
        upload: {
            uploadStage: {
                title: "Carga el archivo del informe de palabras clave",
                description: "Carga hasta 2000 filas de palabras clave de Black Box, informe de análisis de marca de Amazon, palabras clave de Mi lista o tu propio archivo personalizado para comenzar a encontrar oportunidades.",
                fileRequirements: "Requisitos del archivo",
                list: {
                    item1: "Cumplimentado previamente con una palabra clave o una frase de palabras clave por fila",
                    item2: "Formato de archivo CSV"
                },
                footer: {
                    part1: "¿Necesitas orientación adicional? Consulta el",
                    part2: "Artículo de la base de conocimientos",
                    part3: "para más información."
                },
                browse: "Explorar",
                uploadFile: "Cargar archivo",
                noFileSelected: "Ningún archivo seleccionado"
            }
        },
        tooltips: {
            searchVolume: {
                green: "El verde indica una tendencia a 30 días positiva",
                red: "El rojo indica una tendencia a 30 días negativa"
            },
            highReviewCount: {
                green: "El verde indica que menos de 5 de los 12 resultados principales tienen más de 1000 reseñas.",
                yellow: "El amarillo indica cuando 5 o 6 de los 12 resultados principales tienen más de 1000 reseñas.",
                red: "El rojo indica que más de 6 de los 12 resultados tienen más de 1000 reseñas."
            },
            medianReviewCount: {
                green: "El verde indica un recuento de reseñas inferior a 200 reseñas.",
                yellow: "El amarillo indica un recuento de reseñas de entre 200 y 800 reseñas.",
                red: "El rojo indica un recuento de reseñas superior a 800 reseñas."
            }
        }
    }, _a = {
        title: "Black Box",
        description: "Descubre oportunidades con la investigación de productos",
        tabs: {
            products: {
                name: "Productos",
                description: "Encontrar un producto para vender evaluando productos, palabras clave, competidores y más",
                tooltip: "Encuentra el producto más vendido teniendo en cuenta los filtros más innovadores, ayudándote a elegir productos potenciales para vender."
            },
            keywords: {
                name: "Palabras clave",
                description: "---",
                tooltip: "Obtén palabras clave populares estableciendo diferentes filtros. Elegir las palabras clave correctas puede ayudarte a encontrar el producto adecuado."
            },
            competitors: {
                name: "Competidores",
                description: "---",
                tooltip: "Consulta datos principales de los competidores como son las ventas, el mercado, la marca, el vendedor o los listados de la competencia."
            },
            niche: {
                name: "Nicho",
                description: "---",
                tooltip: "Encuentra un segmento de un mercado más grande que pueda ser definido por tu palabra clave única."
            },
            productTargeting: {
                name: "Objetivo del producto",
                description: "---",
                tooltip: "Optimiza la orientación de tu producto consultando diferentes fuentes: Comprados juntos con frecuencia, Sugerencia de Amazon y El cliente también compró"
            },
            eliteAnalytics: {
                name: "Elite Analytics",
                description: "Descubre oportunidades con la investigación de productos"
            },
            abaTopSearchTerms: {name: "ABA Top Search Terms"}
        },
        buttons: {
            saveAsFilterPreset: "Guardar como preajuste de filtro",
            search: "Búsqueda",
            filterLibrary: "Biblioteca de filtros",
            createYourOwnPresets: "Crear tus propios preajustes",
            returnToPreviousVersion: "Volver a la versión anterior",
            restoreLastSearch: "Restaurar última búsqueda",
            addToMyList: "Agregar a mi lista",
            removeFromMyList: "Eliminar de mi lista",
            runInCerebro: "Ejecutar Cerebro",
            runInListingAnalyzer: "Ejecutar el Listing Analyzer",
            runInListingAnalyzerTooltip: "Selecciona hasta {maxAsins} productos para analizar la calidad del anuncio"
        },
        products: {
            filterGroups: {product: "Producto", competitors: "Competidores", sales: "Ventas"},
            fields: {
                categories: {
                    label: "Categoría y subcategoría",
                    tooltip: "Categorías de productos no cerradas disponibles",
                    placeholder: "Seleccionar una o más categorías y subcategorías"
                },
                reviewCount: {
                    label: "Cuenta de reseñas",
                    tooltip: "Número total de reseñas de clientes",
                    chip: "Cuenta de reseñas"
                },
                reviewRating: {
                    label: "Calificación del producto",
                    tooltip: "Reseñas de clientes de Amazon de mala (1) a sobresaliente (5)"
                },
                salesRank: {
                    label: "Best Seller Rank (BSR)",
                    tooltip: "Clasificación otorgada por Amazon basada en las ventas recientes e históricas",
                    chip: "Rango de ventas"
                },
                shippingSizeTier: {
                    label: "Tamaño de envío",
                    tooltip: "Tamaño del producto que determina las tarifas de envío de Logística de Amazon"
                },
                weight: {
                    label: "Peso (lb)",
                    tooltip: "Peso total del producto y paquete",
                    chip: "Peso",
                    tableTooltip: "Peso del paquete (lb)",
                    unit: "lb"
                },
                fulfillment: {
                    label: "Cumplimiento",
                    tooltip: "Método de almacenamiento y envío<br/>FBA = Gestionado por Amazon<br/>FBM = Gestionado por el vendedor<br/>Amazon = Vendido por Amazon ",
                    chip: {title: "Cumplimiento"}
                },
                numberOfImages: {
                    label: "Cantidad de imágenes",
                    tooltip: "Número de imágenes en un listado de producto",
                    chip: "Cantidad de imágenes"
                },
                variationCount: {
                    label: "Recuento de variaciones",
                    tooltip: "Número de variaciones del producto",
                    chip: "Recuento de variaciones"
                },
                titleKeyword: {
                    label: "Palabras clave del título",
                    tooltip: "Solo búsqueda de palabra clave del título del producto",
                    placeholder: "Ej: faldas"
                },
                titleExcludeKeyword: {
                    label: "Excluir palabras clave del título",
                    tooltip: "Excluye los productos que contengan las palabras clave introducidas en el título (separadas por comas)",
                    chip: "Excluir palabra clave del título",
                    placeholder: "Ej: rojo, azul"
                },
                numberOfSellers: {
                    label: "Número de vendedores",
                    tooltip: "Número de vendedores activos",
                    chip: "Número de vendedores"
                },
                brandInclude: {
                    label: "Búsqueda de marca exacta",
                    tooltip: `Nombres exactos de marca separados por comas. Si el nombre de tu marca contiene una coma, añade comillas alrededor del nombre para rellenar los resultados de la búsqueda. Ejemplo: <b>"ABC's LLC"</b>`,
                    placeholder: "Ej: manzana",
                    chip: "Incluir marca"
                },
                brandExclude: {
                    label: "Excluir marcas",
                    tooltip: `Excluye los nombres exactos de marca separados por comas. Si el nombre de tu marca contiene una coma, añade comillas alrededor del nombre para rellenar los resultados de la búsqueda. Ejemplo: <b>"ABC's LLC"</b>`,
                    chip: "Excluir marca",
                    placeholder: "Ej: Belkin"
                },
                sellerInclude: {
                    label: "Búsqueda de vendedor exacta",
                    tooltip: `Nombres exactos de vendedor separados por comas. Si tu nombre de vendedor contiene una coma, añade comillas alrededor del nombre para rellenar los resultados de la búsqueda. Ejemplo: <b>"ABC's LLC"</b>`,
                    chip: "Incluir vendedor",
                    placeholder: "Ej: Anker"
                },
                sellerExclude: {
                    label: "Excluir vendedor",
                    tooltip: `Excluye los nombres exactos de vendedor separados por comas. Si tu nombre de vendedor contiene una coma, añade comillas alrededor del nombre para rellenar los resultados de la búsqueda. Ejemplo: <b>"ABC's LLC"</b>`,
                    chip: "Excluir vendedor",
                    placeholder: "Ej: Satechi"
                },
                price: {
                    label: "Precio",
                    tooltip: "Precio al que se vende el producto",
                    tableTooltip: "Precio histórico con tendencia de precios",
                    priceTooltip: "Precio actual",
                    priceTrendTooltip: "Tendencia de precios de 90 días",
                    chip: "Precio"
                },
                priceChange: {
                    label: "Cambio en Precio (%)",
                    tooltip: "Cambio porcentual en los últimos 90 días",
                    chip: "Cambio en Precio"
                },
                monthlySales: {
                    label: "Ventas Mensuales (Unidades)",
                    tooltip: "Número estimado de unidades vendidas en los últimos 30 días",
                    tableLabel: "Ventas mensuales",
                    chip: "Ventas mensuales",
                    tableTooltip: "Ventas mensuales históricas con tendencia de ventas",
                    salesTooltip: "Ventas Mensuales (Unidades)",
                    salesTrendTooltip: "Tendencia de ventas de 90 días"
                },
                salesYearOverYear: {
                    label: "Ventas Año a Año (%)",
                    tooltip: "Cambio porcentual en los últimos 12 meses",
                    chip: "Ventas año tras año"
                },
                bestSalesPeriod: {
                    label: "Mejor mes de ventas",
                    tooltip: "Mes natural en el que un producto registra su mayor volumen de ventas",
                    placeholder: "Introduce una fecha",
                    tableLabel: "Mejor período de ventas"
                },
                salesToReviews: {
                    label: "Proporción de ventas a reseñas",
                    tooltip: "Ventas Mensuales (Unidades) / revisiones totales",
                    tableLabel: "Ventas / Reseñas",
                    chip: "Ventas a Reseñas"
                },
                monthlyRevenue: {
                    label: "Ingresos mensuales",
                    tooltip: "Ingreso estimado de un producto en los últimos 30 días",
                    chip: "Ingresos mensuales"
                },
                salesChange: {
                    label: "Cambio en Ventas (%)",
                    tooltip: "Cambio porcentual en las ventas mensuales en los últimos 90 días",
                    chip: "Cambio de ventas"
                },
                product: {label: "Producto", tooltip: "Se necesita información sobre herramientas"},
                categoryBSR: {
                    label: "BSR de categoría",
                    tooltip: "Categoría Best Seller Rank (BSR)",
                    mainCategoryTooltip: "Categoría principal BSR",
                    subcategoryTooltip: "Subcategoría BSR",
                    subcategoryTemporaryTooltip: "Subcategoría"
                },
                monthlySalesTable: {
                    label: "Ventas mensuales",
                    tooltip: "Número estimado de unidades vendidas en los últimos 30 días"
                },
                reviews: {
                    label: "Reseñas",
                    tooltip: "Recuentos de reseñas con calificación",
                    numberOfReviewTooltip: "Número total de reseñas de clientes para un producto",
                    reviewRatingTooltip: "Calificación del producto"
                },
                seller: {
                    label: "Vendedor",
                    tooltip: "Nombre y número del vendedor",
                    sellerNameTooltip: "Nombre del vendedor",
                    numberOfSellersTooltip: "Número de vendedores activos"
                },
                lastYearSales: {
                    label: "Ventas del año pasado",
                    tooltip: "Ventas del año pasado con tendencia de ventas",
                    salesTooltip: "Ventas del año pasado (unidades)",
                    salesYearOverYearTooltip: "Ventas año tras año"
                },
                shippingDetails: {
                    label: "Información de envío",
                    tooltip: "Tamaño de envío con dimensiones",
                    productSizeTooltip: "Tamaño del producto que determina las tarifas de envío de Logística de Amazon",
                    dimensionsTooltip: "Dimensiones del paquete (pulgadas)"
                },
                storageFee: {label: "Precio almacenamiento", tooltip: "Precio almacenamiento (1.000 unidades/mes)"},
                "Best Sales Period": {
                    label: "Mejor período de ventas",
                    tooltip: "Se necesita información sobre herramientas"
                },
                age: {
                    label: "Antigüedad (mes)",
                    tooltip: "Antigüedad promedio de la lista de los productos principales",
                    filterLabel: "Edad del listado (Meses)",
                    filterTooltip: "Edad del listado en meses",
                    chip: "Edad del listado"
                },
                titleIncludeKeyword: {
                    label: "Palabras clave del título",
                    tooltip: "Solo búsqueda de palabra clave del título del producto",
                    placeholder: "Ej: faldas",
                    chip: "Palabra clave del título"
                },
                category: {
                    label: "Categoría y subcategoría",
                    tooltip: "Categorías de productos no cerradas disponibles",
                    placeholder: "Seleccionar una o más categorías y subcategorías",
                    chip: {title: "Categoría", subtitle: "Subcategoría"}
                },
                reviewsRating: {
                    label: "Calificación del producto",
                    tooltip: "Reseñas de clientes de Amazon de mala (1) a sobresaliente (5)",
                    chip: "Reseñas Calificación"
                },
                sizeTier: {chip: {title: "Tamaño de envío"}},
                bestMonth: {
                    label: "Mejor mes de ventas",
                    tooltip: "Mes natural en el que un producto registra su mayor volumen de ventas",
                    placeholder: "Introduce una fecha",
                    chip: "Mejor mes de ventas",
                    tableLabel: "Mejor período de ventas",
                    tableTooltip: "Mes natural en el que un producto registra su mayor volumen de ventas"
                },
                brand: {label: "Brand", tooltip: "Brand Names"}
            },
            common: {anyCategory: "Cualquier categoría", anyCategorySimple: "cualquier categoría"},
            filterTabs: {simple: "Simple", advanced: "Avanzados", advancedTooltip: "Se necesita texto"},
            simple: {
                title: "Contesta estas preguntas para encontrar un producto",
                subtitle: "Quiero vender un producto...",
                inThe: "En el",
                marketplaceFor: "mercado para",
                thatNeeds: "que necesita",
                improvementRange: "(intervalo de mejora)",
                improvement: "mejora,",
                competitionRange: "(rango de competencia)",
                whereCompetitionIs: "donde la competencia es",
                priceRange: "(intervalo de precios)",
                iWantToSellMyProductFor: "Quiero vender mi producto para",
                monthlyRevenueOptions: "(opciones de ingresos mensuales)",
                withMonthlyRevenueOf: "con un ingreso mensual de",
                marketplace: "mercado",
                for: "por",
                price: "(intervalo de precios)",
                monthlyRevenue: "(opciones de ingresos mensuales)"
            },
            advanced: {
                titlePart1: "Encuentre productos en",
                titlePart2: "que se correspondan con tus criterios",
                presetsTitle: "Utilizar un filtro preestablecido para acelerar tu búsqueda:"
            },
            result: {
                title1: "Productos en",
                title2: "que se correspondan con tus criterios",
                editFilters: "Editar filtros",
                titleTable: "Visualización {from}-{to} de {total} artículos",
                titleTableSelected: "Seleccionado {selected} de {total} artículos",
                advanced: "Mostrar detalles avanzados del producto"
            },
            chartTitles: {
                bsr: "Best Sellers Rank: {asin}",
                price: "Precio: {asin}",
                sales: "Ventas: {asin}",
                reviews: "Reseñas: {asin}",
                review: "Reseñas: {asin}"
            },
            exportTitles: {
                asin: "ASIN",
                title: "Título",
                sellerType: "Cumplimiento",
                category: "Categoría",
                bsr: "BSR",
                subcategory: "Subcategoría",
                subcategoryBsr: "Subcategoría BSR",
                price: "Precio",
                priceChange: "Tendencia de precios (90 días)",
                monthlySales: "Ventas mensuales",
                salesChange: "Tendencia de ventas (90 días)",
                monthlyRevenue: "Ingresos mensuales",
                reviewCount: "Cuenta de reseñas",
                reviewsRating: "Reseñas Calificación",
                bbSeller: "Vendedor",
                numberOfSellers: "Número de vendedores activos",
                yearSales: "Ventas del año pasado",
                salesYearOverYear: "Ventas año tras año",
                sizeTier: "Rango de tamaño",
                width: "Ancho",
                height: "Alto",
                length: "Longitud",
                weight: "Peso",
                storageFee: "Precio almacenamiento",
                bestMonth: "Mejor período de ventas",
                age: "Antigüedad (mes)",
                numberOfImages: "Cantidad de imágenes",
                variationCount: "Recuento de variaciones",
                salesToReviews: "Ventas / Reseñas",
                brand: "Marca"
            },
            chartAxis: {
                bsr: "Rango de ventas",
                price: "Precio",
                sales: "Ventas",
                reviewCount: "Cuenta de reseñas",
                rating: "Clasificación",
                "7DayMovingAverage": "Media móvil de 7 días",
                trend: "Tendencia",
                mainCategoryBSR: "Categoría principal BSR",
                subcategoryBSR: "Subcategoría BSR"
            }
        },
        tabsTitle: "Buscar:",
        storageFee: {janSept: "ene-sep", octDec: "oct-dic"},
        presetFilters: {
            "Product sales increase fast over the last month": {
                title: "Elevado crecimiento",
                description: "Las ventas del producto aumentan rápidamente en el último mes"
            },
            "Product selling well but doesn’t have a good rating": {
                title: "Baja calificación",
                description: "El producto se vende bien pero no tiene una buena calificación"
            },
            "Few product images but high sales": {
                title: "Bajo recuento de imágenes",
                description: "Pocas imágenes del producto pero ventas elevadas"
            },
            "Small size but sales well": {title: "Pequeño y ligero", description: "Pequeño tamaño pero buenas ventas"}
        },
        presetModal: {
            title: {new: "Nombre preestablecido del filtro", edit: "Renombrar nombre preestablecido del filtro"},
            name: {
                label: "Introduce un nombre preestablecido único",
                placeholder: "Elige un nombre para este valor preestablecido"
            }
        },
        filters: {
            messages: {
                rename: {success: "El filtro está renombrado"},
                create: {success: "Filtro preestablecido guardado en Biblioteca de filtros"},
                delete: {success: "Filtro preestablecido eliminado de Biblioteca de filtros"}
            }
        },
        addToMyList: {
            success: "Se han agregado productos a Mi Lista satisfactoriamente",
            warning: "Todos los productos enumerados ya se han agregado a Mi Lista",
            reject: "No se pudieron agregar productos a Mi Lista"
        },
        upgradeBanner: {text: "Búsquedas restantes: <b>{uses}</b>", button: "ACTUALIZAR PARA ILIMITADO"},
        options: {
            shoppingSize: {
                1: "Tamaño estándar pequeño",
                2: "Tamaño estándar grande",
                3: "Tamaño sobredimensionado pequeño",
                4: "Tamaño sobredimensionado mediano",
                5: "Prodotti grandi fuori misura",
                6: "Tamaño sobredimensionado especial"
            },
            fulfillment: {1: "Amazon", 2: "FBA", 3: "FBM"},
            simpleImprovementRange: {1: "un poco", 2: "alguna", 3: "mucho"},
            simpleCompetitionRange: {1: "bajo", 2: "medio", 3: "alto"},
            simplePrice: {1: "$0-30", 2: "$30-100", 3: "$100+"},
            simpleMonthlyRevenue: {1: "$0-1,000", 2: "$1,000-10,000", 3: "$10,000+"}
        }
    }, Ca = {cerebro: "Cerebro", magnet: "Magnet", opportunity: "Elite Analytics"}, Pa = {
        anythinElse: {
            cerebro: "Interesado en informes en masa de Cerebro",
            blackBox: "Interesado en informes en masa de Black Box"
        }
    }, Ra = {title: "Los datos son aleatorios para su Plan.", button: "Actualizar para obtener resultados completos"},
    Ba = {day: {one: "Día", other: "Días"}, year: {one: "Año", other: "Años"}, allTime: "Todo el tiempo"},
    Ha = {moreThan: "más de", lessThan: "menos del"}, Na = {
        downloadCSV: "Descargar informe CSV",
        downloadXLS: "Descarga XLS",
        downloadPNG: "Descargar imagen PNG",
        downloadJPEG: "Descargar imagen JPEG"
    }, xa = {
        decline: "Ahora no",
        addToKeywordTracker: "Agregar a Keyword Tracker",
        addToMyList: "Agregar a mi lista",
        trackCompetitor: "Rastrear Competidor",
        analyzeKeywordsInCerebro: "Analizar palabras clave en <b>Cerebro</b>",
        runListingAnalyzer: "Ejecutar el <b>Listing Analyzer</b>",
        export: "Exportar"
    }, Ia = {
        modal: {
            title: "Conecta tu Seller Account para obtener información sobre los datos de registro de marca de Amazon en Cerebro",
            sellers: "{number} usuarios conectaron su cuenta de vendedor el mes pasado.",
            text: {
                part1: "Conecte de forma segura su cuenta de Amazon con Helium 10 para desbloquear potentes herramientas e información para su negocio.",
                part2: "Los datos Brand Registry de Amazon en Cerebro solo están disponibles para vendedores suscritos al programa Brand Registry de Amazon.",
                part2New: "Los datos de Amazon Brand Registry en Cerebro o Magnet solo están disponibles para los vendedores inscritos en el programa Brand Registry de Amazon."
            },
            acceptButton: "Conéctese a Amazon",
            titleNew: "Conecta tu cuenta de vendedor para obtener información de Amazon Brand Registry en Cerebro o Magnet"
        }
    }, Ma = {
        modal: {
            title: "Los Brand Analytics de Amazon dentro de Cerebro requieren el programa Brand Registry",
            text: {
                part1: "Brand Registry de Amazon te permite representar tu marca de forma más precisa, encontrar y denunciar infracciones, y proteger tu propiedad intelectual.",
                part2: {
                    part1: "Únicamente está disponible para vendedores suscritos al programa Brand Registry de Amazon. Visita",
                    button: "la página detallada del programa en Amazon",
                    part2: "para obtener más información sobre los beneficios y los requisitos de participación."
                },
                part3: "Descubre cómo las estrategias de Helium 10 pueden ayudarte a registrar tu marca con rapidez"
            },
            acceptButton: "Aprende más",
            titleNew: "Amazon Brand Analytics en Cerebro o Magnet requiere Brand Registry"
        }
    }, Fa = {
        drawer: {
            title: "Amazon Brand Analytics",
            tooltip: "Descubre qué productos obtienen más clics y conversiones con términos de búsqueda estratégicos. Evalúa el impacto de tus campañas de marketing haciendo el seguimiento de las tendencias.",
            chart: {
                title: "Resumen de los 3 ASIN principales",
                yAxis: {totalRate: "Cuota total", searchFrequencyRank: "Rango de frecuencia de búsqueda"},
                legend: {
                    clickedRate: {
                        title: "Cuota de clics de los 3 ASIN principales",
                        tooltip: "Suma de los 3 primeros ASINs click cuota"
                    },
                    conversionRate: {
                        title: "Los 3 mejores ASINs Conv. Cuota",
                        tooltip: "Suma de la cuota de conversión de los 3 ASIN principales"
                    },
                    frequencyRank: {
                        title: "Rango de frecuencia de búsqueda",
                        tooltip: "Clasificación basada en la frecuencia de búsqueda en todos los términos de búsqueda de Amazon para un marketplace concreto"
                    }
                },
                noHoveredYet: "Mantén el cursor sobre el gráfico para ver los 3 ASIN con más clics",
                reportingRange: "Intervalo de fechas para el informe"
            },
            top3Asins: {
                title: "Top 3 ASIN en los que se ha hecho clic",
                asinTitle: "El ASIN más clicado #{number}",
                rates: {title: "Cuotas", click: "Clic", conversion: "Conv."}
            },
            tables: {
                fields: {
                    product: {
                        title: "{date} ASIN con más clics",
                        tooltip: "Los 3 ASIN con más clics según los resultados de búsqueda para el período de tiempo seleccionado"
                    },
                    clickRate: {
                        title: "Cuota de clics",
                        tooltip: "Porcentaje de clics que alcanzó el producto en comparación con el total de clics basado en los resultados de búsqueda para el período de tiempo seleccionado"
                    },
                    conversionRate: {
                        title: "Cuota de conv.",
                        tooltip: "Porcentaje de conversiones que ha alcanzado el producto en comparación con el total de conversiones basadas en los resultados de búsqueda para el período de tiempo seleccionado."
                    },
                    organicRank: {
                        title: "Clasificación orgánica (promed.)",
                        tooltip: "[Helium 10 Data] La posición de la búsqueda orgánica detectada para esa/s palabra/s clave para el producto analizado"
                    },
                    sponsoredRankAvg: {
                        title: "Clasificación auspiciados (promed.)",
                        tooltip: "[Helium 10 Data] Sponsored Ads detectó la última posición en la búsqueda de clientes"
                    }
                }, subtotal: "Subtotal"
            }
        },
        calendar: {
            weekly: {label: "Semanalmente", info: "Puede seleccionar el rango mínimo de 14 días."},
            monthly: {label: "Mensual", info: "Puede seleccionar el rango mínimo de 2 meses."},
            quarterly: {label: "Trimestral", info: "Puede seleccionar el rango mínimo de 2 trimestres."}
        },
        clickAndConversionRate: {
            title: "Cuota de clics y conversiones: {asin}",
            subtitle: "Basado en datos de Amazon Brand Analytics",
            legend: {clickRate: "Cuota de clics", conversionRate: "Cuota de conversión"},
            emptyData: "Este ASIN no se clasificó entre los 3 primeros durante el período de tiempo seleccionado.",
            period: {
                last30days: "Últimos 30 días",
                last2Months: "Últimos 2 meses",
                last6Months: "Últimos 6 meses",
                last12Months: "Últimos 12 meses"
            }
        },
        period: {
            info: "Puede seleccionar el rango mínimo de {number} {period}.",
            periods: {days: "días", weeks: "semanas", months: "meses", quarters: "trimestres"},
            presets: {weekly: "Semanalmente", monthly: "Mensual", quarterly: "Trimestral"}
        },
        filter: {
            clickShare: {
                title: "ABA Top 3 ASINs Total Click Cuota",
                tooltip: "Suma de los 3 principales ASIN compartidos con clic de ABA Data"
            },
            conversionShare: {
                title: "ABA Top 3 ASINs Total Conv. Cuota",
                tooltip: "Suma de los 3 principales ASIN conv. cuota de ABA Data"
            },
            searchFrequencyRank: {
                title: "Rango de frecuencia de búsqueda",
                tooltip: "The ranked order of search frequency. Search terms with the same search frequency over the selected time frame will show the same rank."
            }
        },
        table: {
            clickShare: {
                tooltip: {
                    title: "Métricas de palabras clave, incluidas las tasas de clics y conversiones para los 3 ASIN principales",
                    restricted: "Desbloquee Amazon Brand Analytics y datos de ventas de palabras clave completos al actualizar su plan a {upgradePlan}. ",
                    noTokens: "Solo está disponible para vendedores que han conectado su cuenta de Amazon con Helium 10 y se han inscrito en el programa de Registro de Marca de Amazon"
                }
            },
            convShare: {
                tooltip: {
                    title: "Obtenga valiosos conocimientos sobre los 3 productos más clickeados para cada palabra clave",
                    restricted: "Vea el rango de búsqueda histórica de Palabra clave al actualizar a {upgradePlan}.",
                    noTokens: "Solo está disponible para vendedores que han conectado su cuenta de Amazon con Helium 10 y se han inscrito en el programa de Registro de Marca de Amazon"
                }
            }
        }
    }, Da = {today: "Hoy", yesterday: "Ayer", previousDay: "Día anterior", lastNDays: "Últimos {N} días"}, Ea = "Período",
    qa = {
        tooltipSingle: "Realiza una búsqueda en el Analizador de anuncios para el ASIN introducido en esta búsqueda.",
        tooltipMultiple: "Realiza una búsqueda en el Analizador de anuncios para los primeros {maxAsins} ASIN en esta búsqueda"
    }, Va = {
        title: "Tendencia histórica",
        allProducts: "Todos los productos",
        tableTitleText: {selectedDate: "Tendencia histórica: {date}"},
        keywordType: {
            organicSearch: "Búsqueda orgánica",
            sponsoredProduct: "Producto auspiciado",
            amazonRecommended: "Recomendado por Amazon"
        },
        distributionBy: {
            keywordType: {
                switch: "Tipo de palabra clave",
                keywordsCount: {
                    title: "Número total de palabras clave por tipo",
                    tooltip: "Consulta la distribución de Productos patrocinados, Búsqueda orgánica y Recomendado por Amazon de los últimos 24 meses por número de palabras clave. Elige cualquier mes para que se muestre el tipo de palabra clave que elijas."
                },
                searchVolume: {
                    title: "Volumen de búsqueda de palabras clave por tipo",
                    tooltip: "Consulta la distribución de Productos patrocinados, Búsqueda orgánica y Recomendado por Amazon de los últimos 24 meses por volumen de búsqueda. Elige cualquier mes para que se muestre el tipo de palabra clave que elijas."
                }
            },
            products: {
                switch: "Productos",
                keywordsCount: {
                    title: "Distribución de palabras clave en productos",
                    tooltip: "Consulta la distribución de palabras clave de los últimos 24 meses con el total de palabras clave. Elige cualquier mes para que se muestre la distribución de palabras clave en los productos que elijas."
                },
                searchVolume: {
                    title: "Volumen de búsqueda de distribución de palabras clave en productos",
                    tooltip: "Consulta el volumen de búsqueda de distribución de palabras clave en productos de los últimos 24 meses. Elige cualquier mes para que se muestre la distribución de palabras clave en los productos que elijas."
                }
            }
        },
        searchVolumeKeywordsCountSwitch: {
            keywordsCount: {title: "KC", tooltip: "Recuento de palabras clave"},
            searchVolume: {title: "VB", tooltip: "Volumen de búsqueda"}
        },
        clearHistoricalTrendFilters: {
            button: "Borrar filtros de tendencias históricas",
            tooltip: "Consulta información sobre el total de palabras clave y el tipo de palabras clave de los meses más recientes."
        },
        legend: {
            other: "Otro", byTypes: {
                sponsoredProduct: {title: "Producto auspiciado"},
                organicSearch: {title: "Búsqueda orgánica"},
                amazonRecommended: {
                    title: "Recomendado por Amazon",
                    tooltips: {
                        keywordsCount: "El recuento de palabras clave para Amazon Recommended está disponible a partir de septiembre de 2022.",
                        searchVolume: "El volumen de búsqueda para Amazon Recommended está disponible a partir de septiembre de 2022."
                    }
                },
                sponsored: {title: "Producto auspiciado", abbreviation: "SP"},
                organic: {title: "Organico", abbreviation: "O"},
                "section-amazons-choice": {
                    title: "Elección Amazon",
                    abbreviation: "AC",
                    tooltips: {
                        keywordsCount: "El recuento de palabras clave para Amazon Recommended está disponible a partir de septiembre de 2022.",
                        searchVolume: "El volumen de búsqueda para Amazon Recommended está disponible a partir de septiembre de 2022."
                    }
                },
                "section-highly-rated": {title: "Altamente calificado", abbreviation: "HR"},
                "section-sponsored-brand-header": {title: "Encabezado de marca patrocinado", abbreviation: "SBH"},
                "section-sponsored-video": {title: "Vídeo de marca patrocinado", abbreviation: "SBV"},
                "section-editorial-recommendations": {title: "Recomendaciones editoriales", abbreviation: "ER"},
                "top-rated-from-our-brand": {title: "Mejor calificado de nuestra marca", abbreviation: "TRB"},
                "section-trending-now": {title: "Tendencias ahora", abbreviation: "TN"},
                ppc: {title: "Recomendado por Amazon", abbreviation: "AR"}
            }, keywordTypes: "Tipos de palabras clave", byCategories: {all: "Todo", organic: "Organico", paid: "Pagado"}
        },
        periodRangeSelect: {
            last3: "Últimos 3 meses",
            last6: "Últimos 6 meses",
            last12: "Últimos 12 meses",
            last24: "Últimos 24 meses"
        },
        basedOn: "Basado en {date}",
        upgradeTooltip: {
            title: "La Tendencia Histórica solo está disponible en Elite",
            text: "El plan Elite te permite ver Palabras clave por Tipo y Distribución de Palabras clave en Productos durante los últimos 24 meses.",
            dismiss: "Dismiss",
            learnMore: "Más información sobre Élite",
            upgradeTo: "Cambiar a <br/>{upgradePlan}"
        },
        searchesRemain: "búsquedas permanecen",
        dailySearches: "Búsquedas diarias",
        uses: {tooltip: {diamond: "Cada búsqueda única de ASIN o selección de mes diferente con 'Mostrar Tendencia Histórica' cuenta como un uso.<br/><br/>Las repeticiones en la misma sesión no cuentan extra.<br/><br/>Tu límite diario es de {value} usos. Si alcanzas el límite, se restablecerá al día siguiente."}},
        notifications: {
            dailyLimitReached: "Ha superado el límite diario de búsquedas históricas. Por favor, inténtelo de nuevo mañana.",
            willExceedLimit: {
                title: "No quedan suficientes búsquedas",
                text: "Está intentando realizar una búsqueda que requiere al menos {productsCount} búsquedas"
            }
        },
        upgradeModal: {
            title: "Desbloquee más funciones con {upgradePlan}",
            subtitle: "Conduce más tráfico a tus anuncios con soluciones de investigación de palabras clave y análisis avanzados",
            declineButton: "Ahora no",
            acceptButton: "Cambiar a {upgradePlan}",
            priceMo: "${price}/mes",
            searchesPerDay: "{uses} búsquedas / día",
            features: {
                amazonBrandAnalytics: {
                    title: "Amazon Brand Analytics",
                    subtitle: "Los vendedores registrados de la Marca pueden seguir las tendencias y tomar decisiones informadas basadas en la popularidad de la palabra clave y los datos históricos de ventas"
                },
                competitorTracking: {
                    title: "Seguimiento de Competidores",
                    subtitle: "Aproveche las alertas automáticas diarias para mantenerse al día con los precios de su competidor, las tendencias de ventas, las puntuaciones de calidad de la lista y más."
                },
                keywordSalesData: {
                    title: "Datos de Ventas de Palabra clave",
                    subtitle: "Obtenga valiosos conocimientos sobre los datos históricos de palabras clave y vea cuáles de sus palabras clave están generando más ventas para que pueda orientarlas en consecuencia."
                },
                insightsDashboard: {
                    title: "Insights Dashboard",
                    subtitle: "Descubra automáticamente los posibles problemas críticos de su empresa con información personalizada. Priorizar la acción en función del impacto en el negocio."
                }
            },
            plans: {
                Helium10_ALaCarte: "Alacarte",
                Helium10_ALaCarteAnnual: "",
                Helium10_Enterprise: "Enterprise",
                Helium10_Elite: "Elite",
                Helium10_Elite_399: "Elite",
                Helium10_Elite_Quarter: "Elite",
                Helium10_Elite_Annual: "Elite",
                Helium10_Supercharge_Your_Brand: "Supercharge Your Brand",
                Helium10_Supercharge_Your_Brand_Annual: "Supercharge Your Brand",
                Helium10_Diamond: "Diamond",
                Helium10_Diamond_199: "Diamond",
                Helium10_DiamondAnnual: "Diamond",
                Helium10_DiamondAnnual_1999: "Diamond",
                Helium10_Diamond_249: "Diamond",
                Helium10_DiamondAnnual_2499: "Diamond",
                Helium10_Professional_Cn: "Professional",
                Helium10_Professional_Cn_Annual: "Professional",
                Helium10_Scale_Your_Business: "Diamond",
                Helium10_Scale_Your_Business_Annual: "Diamond",
                Helium10_Adtomic_And_Scale_Your_Business_Bundle: "Diamond",
                Helium10_Adtomic_And_Scale_Your_Business_Bundle_Annual: "Diamond",
                Helium10_Platinum: "Platinum",
                Helium10_Platinum_99: "Platinum",
                Helium10_PlatinumAnnual: "Platinum",
                Helium10_PlatinumAnnual_999: "Platinum",
                Helium10_Platinum_FastAction: "Platinum",
                Helium10_Entrepreneur_Cn: "Entrepreneur",
                Helium10_Entrepreneur_Cn_Annual: "Entrepreneur",
                Helium10_Start_Your_Business: "Platinum",
                Helium10_Start_Your_Business_Annual: "Platinum",
                Helium10_Gold: "Platinum",
                Helium10_GoldAnnual: "Platinum",
                Helium10_Starter: "Starter",
                Helium10_Starter_39: "Starter",
                Helium10_StarterAnnual: "Starter",
                Helium10_StarterAnnual_339: "Starter",
                Helium10_Explorer_Cn: "Explorer",
                Explorer_Cn_Annual: "Explorer",
                Helium10_Free: "Free"
            }
        },
        subtitle: 'To view historical keyword ranks and search volumes in Cerebro results, simply click on a month in the graph below and then click "apply filters."',
        upgradeTooltipNew: {
            title: "Tendencia histórica",
            text: "Explore seasonality trends over 24 months and drill into a specific month. Refine your results via an interactive chart to drill into historical rank, search volume, and sales."
        },
        bannerTitle: "Sneak peak: Historical Trends feature. Upgrade for interactive graphs and explore keyword distribution by type or product."
    }, Ka = {
        modal: {header: {title: "Oferta PPC:", subtitle: "Helium 10 Oferta PPC sugerida"}},
        filter: {
            suggestedPPC: {
                title: "Oferta PPC sugerida",
                tooltipAmazon: "La puja sugerida y el rango de puja se calculan a partir de un grupo de pujas ganadoras de anuncios similares al tuyo. Puedes utilizar tanto la puja sugerida como cualquier otra puja dentro o fuera del rango de la puja."
            }
        },
        table: {
            suggestedPPC: {
                title: "Oferta PPC sugerida",
                titleLocked: "Sugerida <br/> Oferta PPC",
                tooltipAmazon: "La puja sugerida y el rango de puja se calculan a partir de un grupo de pujas ganadoras de anuncios similares al tuyo. Puedes utilizar tanto la puja sugerida como cualquier otra puja dentro o fuera del rango de la puja.",
                tooltipAmazonForValue: "La mayoría de los anuncios ganan subastas con pujas de entre {ppcFrom} y {ppcTo}. Para esta palabra clave o grupo de anuncios, sugerimos una puja de {ppc}. Al aumentar tu puja puedes conseguir que tus anuncios sean más competitivos en las subastas."
            },
            suggestedPPCExport: {title: "H10 PPC Oferta sugerida"},
            suggestedPPCMinExport: {title: "H10 PPC Oferta mínima sugerida"},
            suggestedPPCMaxExport: {title: "H10 PPC Oferta máxima sugerida"}
        }
    },
    La = {cerebro: {toolTip: "Los filtros son útiles para restringir los resultados y encontrar las palabras clave más relevantes para su investigación."}},
    Wa = {chip: "Diamond", learnMore: "Aprende más", upgradeNow: "Actualizar ahora"}, Ua = {
        landing: {
            new: {
                title: {
                    available_true: "Quickly Identify Q4 Keywords",
                    available_false: "Unlock Q4 Keywords at the Diamond Level"
                },
                boldText: {
                    available_true: "Optimize year-end listings with preloaded {year} search volume metrics to identify past and present trends.",
                    available_false: "Optimize year-end listings with preloaded {year} search volume metrics to identify past and present trends at the Diamond level."
                },
                text: "Ready to uncover hidden seasonal trends? Compare current and historical keyword distribution, sponsored or organic rank, and analyze sales over the past two years.",
                watchButton: {
                    available_true: "Watch how to boost end of year sales.",
                    available_false: "Ver vídeo de estrategia"
                }
            },
            old: {
                title: "Search specific products from Amazon and find their top ranking keywords",
                text: "Leverage your competitors’ keyword ranking strategy to improve your own listing. You can also use Cerebro to gauge the most effective keywords for your product on Amazon, optimize your product listing to boost sales, and keep competitive rates on your products. Cerebro is key in successfully launching new products and bringing more awareness to your brand.",
                text2: "¿No estás seguro de cómo comenzar a utilizar Cerebro?",
                watchButton: "Watch our introductory video."
            }
        },
        banner: {
            title: "<b>Optimize December Sales:</b> Compare {year} Search Volume or Explore Seasonal Trends.",
            button: "Ver vídeo de estrategia"
        },
        filter: {
            title: "Compare Q4 2022 Historical Trend Filters",
            badge: "Estrategias de Tiempo Limitado",
            text: "For a limited time, quickly identify low ranking keywords and consider updating your listing or PPC campaign to boost Q4 sales."
        },
        upgradeTooltip: {
            title: "Q4 Prep Strategies",
            text: "Compare current keyword search volume to last year's data to view seasonal traffic increases."
        },
        tableSettings: {tooltip: "View historical <b>October and November {year} Search Volume</b> by customizing your table settings."},
        fields: {
            searchVolume: {
                filter: {
                    title: "{month} Search Volume",
                    tooltip: "Número estimado de veces que se busca esta frase con palabra clave al mes."
                },
                table: {
                    title: "{month}<br/>Search Volume",
                    tooltip: "Explore seasonality {node_0} and pinpoint a specific month of interest. Refine your results using an interactive chart to delve into historical rank, search volume, and sales data.",
                    tooltipNode: "trends over the past 24 months"
                },
                limited: {tooltip: "Compare current keyword search volume to last year's data to identify seasonal traffic increases."}
            }
        }
    }, Oa = {
        presetsTitle: "Utilizar un filtro preestablecido para acelerar tu búsqueda:",
        emptyText: "No available presets",
        buttons: {saveAsFilterPreset: "Guardar como preajuste de filtro", filterLibrary: "Biblioteca de filtros"},
        editModal: {
            title: {new: "Nombre preestablecido del filtro", edit: "Renombrar nombre preestablecido del filtro"},
            name: {
                label: "Introduce un nombre preestablecido único",
                placeholder: "Elige un nombre para este valor preestablecido"
            }
        },
        staticPresetNames: {
            "Top Keywords": {
                title: "Top palabras clave",
                description: "Palabras clave utilizadas con frecuencia por los competidores y que tienen un volumen de búsqueda sustancial"
            },
            "Opportunity Keywords": {
                title: "Palabras clave de oportunidad",
                description: "Keywords that create opportunity to calculate your rank using activity, rank and search volume of the competitor"
            },
            "Product sales increase fast over the last month": {
                title: "Elevado crecimiento",
                description: "Las ventas del producto aumentan rápidamente en el último mes"
            },
            "Product selling well but doesn’t have a good rating": {
                title: "Baja calificación",
                description: "El producto se vende bien pero no tiene una buena calificación"
            },
            "Few product images but high sales": {
                title: "Bajo recuento de imágenes",
                description: "Pocas imágenes del producto pero ventas elevadas"
            },
            "Small size but sales well": {title: "Pequeño y ligero", description: "Pequeño tamaño pero buenas ventas"},
            "Dominant Demand": {title: "Dominant Demand"},
            "Growth Opportunities": {title: "Growth Opportunities"},
            "Emerging Contenders": {title: "Emerging Contenders"},
            "Conversion Pioneers": {title: "Conversion Pioneers"}
        },
        messages: {
            rename: {success: "Preset filter is renamed"},
            create: {success: "Filtro preestablecido guardado en Biblioteca de filtros"},
            delete: {success: "Filtro preestablecido eliminado de Biblioteca de filtros"}
        },
        tooltips: {youAlreadyHavePresetWithSameSettings: 'You already have preset <b>"{name}"</b> with same settings'}
    }, Ya = {
        0: "Ene",
        1: "Feb",
        2: "Mar",
        3: "Abr",
        4: "Mayo",
        5: "Junio",
        6: "Jul",
        7: "Ago",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dic"
    }, Ga = {
        common: {week: "Week"},
        marketplaceAndPeriodSelectors: {
            text1: "View the Amazon Brand Analytics Report on",
            text2: "during the",
            periodTypeOptions: {Weekly: "Week of", Monthly: "Month of"}
        },
        banners: {
            start: {
                title: "ABA Top Search Terms",
                text: "Tailored for <b>brand-registered</b> Amazon sellers. This exclusive feature in Blackbox goes beyond traditional analysis, offering advanced keyword discovery, trend-spotting, and competitive benchmarking unique to Helium 10. Harness the power of unique data algorithms to identify untapped markets and optimize your listings like never before.",
                videoButton: "Ver vídeo",
                dismiss: "Dismiss"
            },
            unlock: {
                title: "Unlock ABA Top Search Terms",
                text: "Exclusively for Diamond subscribers with registered brands: Unleash the power of Amazon Brand Analytics! Dive into top-performing ASINs, compare click shares and conversion rates, and uncover fresh product opportunities by leveraging elite keyword insights. Elevate your product discovery journey today!"
            }
        },
        noToken: {
            title: "Connect your Seller Account for insights into Amazon Brand Registry data",
            subtitle: "To view the ABA Top Search Terms data, you’ll need at least one Amazon Seller account connected to Helium 10.",
            text: "7,054 users connected their Seller Account last month.<br/><br/>Securely connect your Amazon account to Helium 10 to unlock powerful tools and insights for your business.<br/><br/>Amazon Brand Registry data within Black Box, Cerebro or Magnet is only available to sellers who are enrolled in Amazon’s Brand Registry program.",
            note: "Sabemos lo importante que es la seguridad de los datos para nuestros clientes. Le prometemos que nunca compartiremos ni venderemos sus datos, y que mantendremos los estándares de seguridad más altos."
        },
        noABAToken: {
            title: "Final step: Unlock Powerful Insights with Amazon Brand Registry!",
            text: "Access Exclusive ABA Top Search Terms & Safeguard Your Brand<br/><br/>Amazon Brand Registry doesn’t only secure your intellectual property but also unlocks robust insights with Amazon Brand Analytics. Protect your products, monitor violations, and leverage pivotal data to elevate your sales strategy, exclusively available to registered brands.<br/><br/>Discover comprehensive benefits and eligibility criteria directly from Amazon's Program Details page. Also, navigate through the quick and strategic path to Brand Registration with Helium 10's unique strategies."
        },
        buttons: {
            upgradeTo: "Cambiar a {upgradePlan}",
            connectToAmazon: "Conéctese a Amazon",
            viewABADetails: "View Amazon’s Program Details Page",
            learnMore: "Aprende más",
            advancedSettings: "Configuración avanzada",
            apply: "Aplicar",
            runInMagnet: "Run in Magnet",
            addToKeywordTracker: "Agregar a Keyword Tracker",
            addToMyList: "Agregar a mi lista"
        },
        summary: {
            title: "ABA Keyword Summary",
            metricsTitle: "Distribución de palabras clave",
            metrics: {
                totalKeywords: {title: "Palabras clave totales"},
                top3AsinsTotalMonthlyUnitSales: {
                    title: "Top 3 ASINs Total<br/>Monthly Unit Sales",
                    tooltip: "Total sales of the top three ASINs in your filtered results"
                },
                top3AsinsTotalMonthlyRevenue: {
                    title: "Top 3 ASINs Total<br/>Monthly Revenue",
                    tooltip: "Total revenue generated by the top three ASINs in your filtered results"
                },
                avgClickShare: {
                    title: "Avg. Click Share",
                    tooltip: "Average clicks share for the products shown based on your filter criteria"
                },
                avgConversionShare: {
                    title: "Avg. Conv. Share",
                    tooltip: "Average conversion share for the products shown based on your filter criteria"
                }
            }
        },
        tableTitle: {
            common: {
                one: "{value} Filtered Keyword based on date range",
                other: "{value} Filtered Keywords based on date range"
            }, selected: {one: "{value} Keyword selected", other: "{value} Keywords selected"}
        },
        filter: {
            searchFrequencyRankTrend: {label: "Search Frequency Rank Trend", tooltip: "Over the past week or month"},
            clickShareAsin: {label: "Cuota de clics"},
            conversionShareAsin: {label: "Cuota de conv."},
            numberOfAsins: {placeholder: "Number of ASINs"},
            mustBe: {placeholder: "Must be"},
            advancedInteraction: {and: "And", or: "Or"},
            keywordOrAsins: {
                placeholder: {
                    one: "Enter up to {maxAsins} product ASINs or {maxKeywords} keyword phrase",
                    other: "Enter up to {maxAsins} product ASINs or {maxKeywords} keyword phrase"
                },
                needAsin: "¿Necesitas uno ASIN? Prueba con uno de estos:",
                needKeyword: "Need a keyword? Try one of these:"
            },
            averageMonthlyAge: {
                label: "Top 3 Clicked ASINs Monthly Average Age",
                tooltip: " Average of top 3 clicked ASINs age"
            },
            totalMonthlySales: {
                label: "Top 3 Clicked ASINs Total Monthly Sales",
                tooltip: "Total of top 3 clicked ASINs monthly sales"
            },
            totalMonthlyRevenue: {
                label: "Top 3 Clicked ASINs Total Monthly Revenue",
                tooltip: "Total of top 3 clicked ASINs monthly revenue"
            },
            totalReviewCount: {
                label: "Top 3 Clicked ASINs Total Review Count",
                tooltip: "Total of top 3 clicked ASINs review count"
            },
            averageRating: {label: "Top 3 Clicked ASINs Average Rating", tooltip: "Average of top 3 clicked ASINs rating"}
        },
        columns: {
            phrase: {
                title: "Frase clave",
                tooltip: "Palabra clave o frase utilizada por los clientes al buscar un producto"
            },
            searchVolume: {
                title: "Volumen de búsqueda",
                tooltip: "Número estimado de veces que se busca esta frase con palabra clave al mes.",
                trend: {title: "Search Volume Trend (%)"}
            },
            searchFrequencyRank: {
                title: "Rango de frecuencia de búsqueda",
                tooltip: {
                    Monthly: "Monthly Search Frequency Rank Trend, (compare with last month)",
                    Weekly: "Weekly Search Frequency Rank Trend, (compare with last week)"
                },
                trend: {title: "Search Frequency Rank Trend (%)"}
            },
            totalClickShareAsin: {
                title: "Top 3 ASINs Total Click Share",
                tooltip: "Suma de los 3 principales ASIN compartidos con clic de ABA Data",
                trend: {title: "Top 3 ASINs Total Click Share Trend"}
            },
            totalConversionShareAsin: {
                title: "Top 3 ASINs Total Conv. Share",
                tooltip: "Suma de los 3 principales ASIN conv. cuota de ABA Data",
                trend: {title: "Top 3 ASINs Total Conv. Share Trend"}
            },
            topNAsin: {title: "Top {value} ASIN", export: {title: "Top {value} Title", imageUrl: "Top {value} Image URL"}},
            clickShareAsinN: {
                title: "Top {value} ASIN Click Share",
                tooltip: "Top {value} ASIN click share from ABA Data",
                trend: {title: "Top {value} ASIN Click Share Trend"}
            },
            conversionShareAsinN: {
                title: "Top {value} ASIN Conv. Share",
                tooltip: "Top {value} ASIN conv. share from ABA Data",
                trend: {title: "Top {value} ASIN Conv. Share Trend"}
            },
            averageMonthlyAge: {
                title: "Top 3 Clicked ASINs Monthly Average Age",
                tooltip: "Average of top 3 clicked ASINs age"
            },
            totalSalesAsin: {
                title: "Top 3 ASINs Total Monthly Sales",
                tooltip: "Total of top 3 clicked ASINs monthly sales"
            },
            totalRevenueAsin: {
                title: "Top 3 ASINs Total Monthly Revenue",
                tooltip: "Total of top 3 clicked ASINs monthly revenue"
            },
            totalReviewCountAsin: {
                title: "Top 3 ASINs Total Review Count",
                tooltip: "Total of top 3 clicked ASINs review count"
            },
            averageRatingAsin: {title: "Top 3 ASIN Total Average Rating", tooltip: "Average of top 3 clicked ASINs rating"},
            exactTitleMatchProductsCount: {
                title: "Densidad del título",
                tooltip: "Número de productos de la página 1 con la palabra clave en su título"
            },
            resultsNumber: {
                title: "Productos competidores",
                tooltip: "Número total de productos obtenidos en una búsqueda del cliente utilizando esta palabra clave/frase"
            },
            brands: {
                title: "Top 3 Brands",
                tooltip: "The top 3 brands generating the most results for the search term",
                brand: {title: "Brand {value}"}
            },
            categories: {
                title: "Top 3 Categories",
                tooltip: "The top 3 categories generating the most results for the search term.",
                category: {title: "Category {value}"}
            },
            monthlySales: {
                title: "Venta de palabras clave",
                tooltip: "Número estimado de ventas mensuales (en número de unidades) atribuido a cada palabra clave"
            }
        },
        notifications: {invalidAsins: {one: "Invalid ASIN: {asins}", other: "Invalid ASINs: {asins}"}},
        advFilterTooltip: {
            asins: "<b>ASINs (1-3)</b>: Number of ASINs meeting your criteria.",
            operators: {
                title: "<b>Operators</b>:",
                list: {
                    more: '">" = Greater than',
                    moreOrEqual: '">=" = At least',
                    equal: '"=" = Exactly',
                    less: '"<" = Less than',
                    lessOrEqual: '"<=" = At most'
                }
            },
            clickShare: "<b>Click Share %</b>: Set your desired Click Share range.",
            conversionShare: "<b>Conversion Share %</b>: Set your Conversion Share range.",
            andOr: "<b>AND/OR</b>: Both conditions met (AND) or at least one met (OR).",
            example: "Ejemplo: ",
            exampleText: "1 ASIN with >40% Click Share AND <5% Conversion Share shows products popularly clicked but rarely bought."
        },
        noData: "No hay datos disponibles según su rango de fechas actual o filtros. Por favor, intente ajustarlos para obtener más resultados."
    }, $a = {modal: {title: "Rango de frecuencia de búsqueda: {phrase}"}, legend: "Rango de frecuencia de búsqueda"}, ja = {
        1: "Tamaño estándar pequeño",
        2: "Tamaño estándar grande",
        3: "Tamaño sobredimensionado pequeño",
        4: "Tamaño sobredimensionado mediano",
        5: "Prodotti grandi fuori misura",
        6: "Tamaño sobredimensionado especial",
        7: "Sobre",
        8: "Pequeño y ligero",
        9: "Carta pequeña",
        10: "Carta grande",
        11: "Carta extragrande",
        12: "Sobre pequeño",
        13: "Sobre estándar",
        14: "Sobre grande",
        15: "Paquete estándar",
        16: "Pequeño",
        17: "Tamaño estándar",
        18: "Tamaño sobredimensionado",
        19: "Tamaño sobredimensionado estándar",
        20: "Pesado y voluminoso",
        21: "Supersize",
        22: "Sobre extragrande",
        23: "Paquete pequeño",
        24: "Large bulky",
        25: "Extra-large 0 to 50 lb",
        26: "Extra-large 50+ to 70 lb",
        27: "Extra-large 70+ to 150 lb",
        28: "Extra-large 150+ lb",
        "-1": "N/D"
    }, Qa = {
        common: sa,
        historyTitle: da,
        fetchingData: ua,
        landing: ca,
        table: ma,
        cerebro: pa,
        walmartSearch: ha,
        export: {
            button: "Exportar datos",
            options: {
                csv: "... como archivo CSV",
                xlsx: "... como archivo XLSX",
                frankenstein: "... a Frankenstein",
                clipboard: "copiar en el portapapeles",
                eliteAnalyticsCSV: "Elite Analytics CSV",
                eliteAnalyticsExcel: "Elite Analytics Excel",
                eliteAnalyticsCSVWithUpload: "Cargar + CSV de Elite Analytics",
                eliteAnalyticsExcelWithUpload: "Cargar + Excel de Elite Analytics"
            }
        },
        createNewFolder: ga,
        errors: ba,
        magnet: va,
        magnetChart: ya,
        searchedBefore: Sa,
        noDataAvailable: fa,
        upgradePlan: Aa,
        copyButton: wa,
        example: ka,
        errorCodes: Ta,
        opportunity: za,
        blackBox: _a,
        projectNames: Ca,
        bulkReport: Pa,
        randomizationText: Ra,
        dateRanges: Ba,
        comparison: Ha,
        highchart: Na,
        buttons: xa,
        amazonToken: Ia,
        amazonBrandRegistry: Ma,
        abad: Fa,
        periodPresets: Da,
        periodsPlaceholder: Ea,
        runListingAnalyzer: qa,
        historicalData: Va,
        ppc: Ka,
        experiments: La,
        upgradeToDiamondTooltip: Wa,
        cerebroSeasonal: Ua,
        filterPresets: Oa,
        months: Ya,
        abaTopSearchTerms: Ga,
        searchFrequencyRank: $a,
        sizeTier: ja
    }, Xa = {
        close: "Chiudi",
        cancel: "Cancella",
        clear: "Elimina",
        serverError: "Errore del server!",
        na: "Non disponibile",
        delete: "Eliminare",
        edit: "Modificare",
        save: "Salva",
        valueOfTotal: "{value} su {total}",
        filters: "Filtri",
        week: "Week",
        noData: "Nessun dato"
    }, Za = "Cronologia", Ja = "Recupero dei dati", er = {
        notSure: {
            cerebro: "Non sai come iniziare ad usare Cerebro?",
            magnet: "Non sai come iniziare ad usare Magnet?"
        }
    }, tr = {scrapedDate: {lessThan7Days: "< 7 giorni", between7And30Days: "7 - 30 giorni", moreThan30Days: "> 30 giorni"}},
    ar = {
        title: "Cerebro",
        description: "Inserisci fino a {maxAsins} identificativi del prodotto per trovare le migliori parole chiave.",
        learn: "Scopri",
        learnTooltip: "Guarda video e leggi articoli utili per acquisire padronanza nell'uso di Cerebro",
        history: {
            title: "Cronologia",
            titleTable: {one: "{count} ricerca precedente", other: "{count} ricerche precedente"},
            titleTableSelected: {
                one: "{count} ricerca precedente selezionata",
                other: "{count} ricerche precedente selezionata"
            },
            descriptionTable: "Trova una precedente ricerca Cerebro e ricaricala senza consumare le ricerche che hai a disposizione.",
            tooltip: "Visualizza le ricerche precedenti e ricarica i risultati"
        },
        inputPlaceholder: "Inserisci fino a {maxAsins} ASIN prodotto",
        upgradeForMultiSearch: "Effettua l'upgrade per cercare più prodotti",
        getKeywords: "Ottieni parole chiave",
        excludeVariations: "Escludi varianti",
        excludeVariationsTooltipAmazon: "Includi solo le parole chiave associate all'ASIN inserito",
        excludeVariationsTooltipWalmart: "Includi solo le parole chiave associate all'ID prodotto inserito",
        landing: {
            title: "Cerca prodotti specifici presenti su {market} e trova le migliori parole chiave",
            description: "Sfrutta la strategia di posizionamento delle parole chiave dei tuoi concorrenti per migliorare il tuo ranking. Inoltre puoi usare Cerebro per trovare le parole chiave più efficaci per il tuo prodotto su {market}, ottimizzarne la posizione per aumentare le vendite e mantenere prezzi vantaggiosi per i tuoi prodotti. Cerebro è fondamentale per lanciare con successo nuovi prodotti e aumentare la visibilità del tuo marchio.",
            videoTitle: "Non sai da dove iniziare? Guarda un video di 3 minuti qui.",
            videoButton: "Guarda video",
            bulkReport: "Bulk Report",
            whereWalmartIDs: "Dove posso trovare gli ID prodotto Walmart?",
            whereWalmartIDsTitle: "Dove posso trovare gli ID prodotto Walmart?",
            whereWalmartIDsText: `<p>Puoi trovare l'ID prodotto Walmart nell'URL della pagina del prodotto su walmart.com.</p>
      <p>Ad esempio, nell'URL di seguito, l'ID prodotto Walmart è <b>134258560</b>.</p>
      <p>https://www.walmart.com/ip/Petstages-Latex-Free-Chew-Dog-Squeaky-Toy-Assorted-Large/<b>134258560</b>?wpa_bd=&wpa_pg_seller_id=...wpa_bucket=__bkt__</p>`
        },
        getCompetitors: {
            button: "Ottieni concorrenti",
            description: 'Trova e aggiungi prodotti concorrenti alla tua ricerca per la comparazione. I dati di questi prodotti saranno visualizzati in altre colonne con "Concorrente" nel nome.',
            count: "Aggiungi fino a {canMoreSelect} altri prodotti",
            addCompetitors: "Aggiungi concorrenti",
            addWords: "Aggiungi parole",
            deleteAll: "Elimina tutti",
            tooltip: "Scegli fra una gamma di concorrenti per un'analisi multiprodotto"
        },
        commonWords: {
            button: "Parole comuni",
            tableTitle: {one: "{count} parola comuni", other: "{count} parole comuni"},
            titleTableSelected: {one: "{count} parola comune selezionata", other: "{count} parole comuni selezionate"},
            word: "Parola",
            tableDescription: "Identifica le parole comuni che vuoi escludere dai risultati della ricerca. Tutte le parole nella tabella di seguito non appariranno mai nei risultati della tua ricerca {project}.",
            addDescription: "Inserisci le parole (1 per riga) che desideri rimuovere dai risultati della ricerca.",
            removeSpecialCharacters: "Rimuovi caratteri speciali",
            removeSpecialCharactersTooltip: "Rimuove  .,?!&*%$@#, ecc.",
            addCommonWords: "Aggiungi a parole comuni",
            deleteAllQuestion: "Sei sicuro di voler eliminare tutte le parole comuni?",
            deleteAllConfirm: "Sì, elimina tutte",
            tooltip: "Aggiungi parole comuni per eliminare quelle che non sono specifiche per la tua ricerca"
        },
        deletedWords: {
            button: "Visualizza parole eliminate ({number})",
            title: "Parole eliminate",
            text: "Queste sono le parole che hai eliminato manualmente dai risultati della ricerca.",
            return: "Torna ai risultati",
            returnToResults: "Torna ai risultati",
            columnKeyword: "Parola chiave",
            tableTitle: {one: "{count} parola chiave eliminata", other: "{count} parole chiave eliminate"},
            tableTitleSelected: {
                one: "{count} parola chiave eliminata selezionata",
                other: "{count} parole chiave eliminate selezionate"
            }
        },
        filter: {
            title: "Filtri",
            showMore: "Mostra di più",
            showLess: "Mostra meno",
            clear: "Elimina",
            applyFilters: "Applica filtri",
            wordCount: "Conteggio parole",
            wordCountTooltip: "Numero di parole chiave nella frase di ricerca",
            searchVolume: "Volume di ricerca",
            searchVolumeTooltip: "Numero stimato di volte in cui questa parola chiave viene cercata mensilmente.",
            organicRank: "Posizione organica",
            organicRankTooltip: "Posizione di ricerca organica rilevata per la/e parola/e chiave per il prodotto analizzato",
            matchType: "Tipo di corrispondenza",
            matchTypeTooltip: "Fonte da cui è tratta una parola chiave",
            showPhrasesContain: "Frasi contenenti",
            showPhrasesContainPlaceholder: "Es: gonne",
            showPhrasesContainTooltip: "Mostra le frasi che contengono le parole chiave inserite (separate da virgole)",
            cerebroIQScore: "Punteggio QI Cerebro",
            cerebroIQScoreTooltip: "Punteggio basato sul rapporto tra volume di ricerca stimato e numero di prodotti concorrenti: un punteggio alto indica un numero relativamente elevato di ricerche rispetto al numero di concorrenti; un punteggio basso indica il contrario",
            titleDensity: "Densità del titolo",
            titleDensityTooltip: "Numero di prodotti in pagina 1 con la parola chiave cercata nel titolo",
            competingProducts: "Prodotti concorrenti",
            competingProductsTooltip: "Numero totale di prodotti restituiti nella ricerca di un cliente utilizzando questa parola chiave/frase",
            amazonChoice: "Amazon Choice",
            amazonChoiceTooltip: "Filtra i risultati delle parole chiave in base allo stato del badge Amazon Choice",
            amazonChoiceOnly: "Solo Amazon Choice",
            amzSuggestedPosition: "Posizione racc. Amazon",
            amzSuggestedPositionTooltip: "Parole chiave raccomandate da Amazon per questo ASIN, numerate dalla più alla meno raccomandata",
            excludePhrasesContain: "Escludi frasi contenenti",
            excludePhrasesContainTooltip: "Escludi le frasi che contengono le parole chiave inserite (separate da virgole)",
            searchVolumeTrend: "Trend volume di ricerca",
            searchVolumeTrendTooltip: "Negli ultimi 30 giorni",
            sponsoredRank: "Posizione sponsorizzata",
            sponsoredRankTooltip: "Ultima posizione rilevata degli annunci sponsorizzati nelle ricerche del cliente",
            amazonRecRank: "Posizione racc. Amazon",
            amazonRecRankTooltip: "Parole chiave raccomandate da Amazon per questo ASIN, numerate dalla più alla meno raccomandata",
            noneSelected: "Nessuno selezionato",
            bestSeller: "Best Seller",
            bestSellerTooltip: "Mostra solo le parole chiave per cui il prodotto selezionato è un best seller",
            walmartSearchVolume: "Volume di ricerca Walmart",
            walmartSearchVolumeTooltip: "Il volume di ricerca di Walmart si basa su stime proprietarie attualmente in versione beta. I dati storici ed esatti non sono attualmente disponibili.",
            advancedRank: "Filtro posizioni avanzato",
            advancedRankTooltip: "Inserisci il numero min/max di ASIN che desideri far apparire in un determinato intervallo di posizioni organiche per una parola chiave",
            competitorPerformanceScore: "Prestazioni dei concorrenti",
            bestSellerOnly: "Solo Best Seller",
            bestSellerOnlyTooltip: "Filtra per parole chiave che hanno i prodotti con il badge best seller nei risultati della ricerca su Walmart",
            matchTypeOptions: {
                organic: "Organico",
                sponsored: "Sponsorizzato",
                ppc: "Raccomandato da Amazon",
                smart: "Smart Complete",
                contextual: "Organico",
                lexical: "Smart Complete"
            },
            amazonChoiceOptions: {
                analyzedProduct: "Prodotto analizzato",
                otherProduct: "Altro prodotto",
                noBadges: "Nessun badge"
            },
            walmartSearchVolumeOptions: {
                very_low: "Molto basso",
                low: "Basso",
                medium: "Medio",
                high: "Alto",
                very_high: "Molto alto"
            },
            advancedRankFilter: "Filtro posizioni avanzato",
            advancedRankFilterTooltip: "Inserisci il numero min/max di ASIN che desideri far apparire in un determinato intervallo di posizioni organiche per una parola chiave",
            advancedRankFilterTooltipWalmart: "Inserisci il numero min/max di Prodotti che desideri far apparire in un determinato intervallo di posizioni organiche per una parola chiave",
            considerRankAsinMin: "ASIN Min",
            considerRankAsinMax: "ASIN Max",
            considerRankProductIdMin: "ID Min",
            considerRankProductIdMax: "ID Max",
            considerRankMin: "Posizione Min",
            considerRankMax: "Posizione Max",
            all: "Tutto",
            any: "Qualsiasi",
            searchVolumeWalmartTooltip: "Numero stimato di ricerche di questa parola al mese su Walmart.",
            monthlySales: "Vendite per parola chiave",
            monthlySalesTooltip: "Numero stimato di vendite mensili (in numero di unità) attribuite a ogni parola chiave",
            monthlySalesLockedTooltip: "Visualizza il numero stimato di vendite generate da ogni parola chiave effettuando l'upgrade a {upgradePlan}.",
            presets: {
                text1: "Riduci rapidamente i risultati per",
                text2: "o",
                topKeywords: "Parole chiave principali",
                topKeywordsTooltip: "Principali parole chiave usate dalla concorrenza e con un volume di ricerca notevole",
                opportunityKeywords: "Parole chiave di opportunità",
                opportunityKeywordsTooltip: "Parole chiave che creano l'opportunità di calcolare il tuo posizionamento utilizzando attività, posizionamento e volume di ricerca della concorrenza"
            },
            presetsTitle: {
                topKeywords: "Ricerca parole chiave principali",
                opportunityKeywords: "Ricerca parole chiave di opportunità "
            },
            monthlySalesLockedTitleTooltip: "Visualizza dati di vendita completi della parola chiave per dare la priorità in modo più efficace alle tue parole chiave più redditizie e ad alta conversione",
            timePeriod: {
                label: "Time Period",
                tooltip: {
                    available: "Examine 24 months of data history for rank, search volume, and sales changes. Refine with chart filters in {node_0}.",
                    availableNode: "Historical Trends"
                },
                placeholder: "Attuale",
                info: "You can select a specific from the last two years."
            },
            numberOfCompetitors: "Number of Competitors",
            numberOfCompetitorsTooltip: "Enter the minimum and/or maximum number of competitor ASINs that you want to be ranking for keywords in the range of the next filter. For example, if you set Min: 2 and Max: 4, the tool will show keywords where 2 to 5 competitors are ranking.",
            competitorRank: "Competitor Rank",
            competitorRankTooltip: "Define the Organic Keyword Rank Range where you want the competitors from the previous filter to appear. For example, if you chose min 2 and max 4 in the first filter, and min 1 and max 10 in this filter, it means you're interested in keywords where at least 2 and no more than 4 competitors rank within the top 10 organic positions.",
            advancedFilterTitle: "Unlock advanced filtering with premium plans",
            showAllFilters: "Show all Helium 10 filters"
        },
        distribution: {
            title: "Distribuzione delle parole chiave",
            total: "Parole chiave totali",
            sponsored: "Parole chiave sponsorizzate",
            organic: "Organico",
            amazonRecommended: "Raccomandato da Amazon",
            smart: "Smart Complete",
            showHistoricalTrend: {
                title: "Mostra la tendenza cronologica",
                tooltip: "Per individuare le tendenze, scegli tra la distribuzione di parole chiave per tipo o la distribuzione di parole chiave tra i prodotti negli ultimi 24 mesi.",
                lockedTooltip: "Sblocca i grafici di analisi delle tendenze storiche aggiornando a Diamond",
                lockedRightTooltip: "Analizza facilmente le tendenze storiche delle parole chiave per identificare opportunità di crescita per i tuoi prodotti",
                tooltipNew: "Look back at 24 months of data to observe changes in historical rank, search volume, and sales. Filter these insights to observe seasonality by using an interactive chart."
            },
            organicTooltip: "Ricerca organica",
            paid: "Pagato",
            paidTooltip: "Ricerca a pagamento"
        },
        wordFrequency: {
            title: "Occorrenze del termine",
            button: "Visualizza tutto",
            export: "Esporta",
            word: "Parola",
            qty: "Frequenza",
            setToast: {title: 'Filtro "Frasi con" applicato', text: 'Filtro risultati per "{keyword}"'},
            noData: "Nessun dato"
        },
        productSearch: {
            single: "Ricerca di un singolo prodotto",
            multi: "Ricerca di più prodotti",
            singleSubtitle: "In base agli ultimi 30 giorni",
            multiSubtitle: "Fai clic sull'ASIN di seguito per visualizzare il riepilogo su 30 giorni di un singolo prodotto."
        },
        boughtTogether: {
            button: "Spesso acquistati insieme",
            title: "Prodotti spesso acquistati insieme",
            description: 'Questi sono i prodotti che appaiono nella sezione "Spesso acquistati insieme" della pagina del prodotto che hai cercato.  ',
            modalButton: "Visualizza tutto in Black Box",
            emptyTitle: "Questa Lista è vuota",
            productMultiSearch: "Prodotto da Ricerca multipla"
        },
        table: {
            keywordPhrase: "Frase chiave",
            keywordPhraseTooltip: "Parola chiave o frase utilizzata dai clienti in cerca di un prodotto",
            cerebroIqScore: "Punteggio QI Cerebro",
            cerebroIqScoreTooltip: "Punteggio basato sul rapporto tra volume di ricerca stimato e numero di prodotti concorrenti: un punteggio alto indica un numero relativamente elevato di ricerche rispetto al numero di concorrenti; un punteggio basso indica il contrario",
            searchVolume: "Volume di ricerca",
            searchVolumeTooltip: "Numero stimato di volte in cui questa parola chiave viene cercata mensilmente su Amazon",
            sponsoredAsins: "ASIN sponsorizzati",
            sponsoredAsinsTooltip: "Numero di ASIN rilevati pubblicando di recente annunci sponsorizzati nei risultati della ricerca associati a questa parola chiave/frase",
            headlineAsins: "ASIN principali",
            headlineAsinsTooltip: "Numero di ASIN rilevati che sono comparsi di recente negli annunci principali nei risultati della ricerca associati a questa parola chiave/frase",
            competingProducts: "Prodotti concorrenti",
            competingProductsTooltip: "Numero totale di prodotti restituiti nella ricerca di un cliente utilizzando questa parola chiave/frase",
            cpr: "CPR",
            cprSimple: "CPR",
            cprTooltip: "Numero stimato di unità da vendere su 8 giorni, derivante da una ricerca per questa parola chiave affinché il prodotto si posizioni nella prima metà della pagina uno per questa parola chiave.",
            matchType: "Tipo di corrispondenza",
            matchTypeTooltip: "Fonte da cui è tratta una parola chiave",
            amazonRecRank: "Posizione racc. Amazon",
            amazonRecRankTooltip: "Parole chiave raccomandate da Amazon per questo ASIN, numerate dalla più alla meno raccomandata",
            sponsoredRank: "Posizione sponsorizzata",
            sponsoredRankTooltip: "Ultima posizione rilevata degli annunci sponsorizzati nelle ricerche del cliente",
            organicRank: "Posizione organica",
            organicRankTooltip: "Posizione di ricerca organica rilevata per la/e parola/e chiave per il prodotto analizzato",
            searchVolumeTrend: "Trend volume di ricerca",
            searchVolumeTrendTooltip: "Negli ultimi 30 giorni",
            titleDensity: "Densità del titolo",
            titleDensityTooltip: "Numero di prodotti in pagina 1 con la parola chiave cercata nel titolo",
            sponsoredAvg: "Posizione sponsorizzata (media)",
            sponsoredAvgTooltip: "Posizione media rilevata rispetto a tutti i prodotti nei risultati sponsorizzati",
            sponsoredCount: "Posizione sponsorizzata (totale)",
            sponsoredCountTooltip: "Numero di prodotti consultati rilevato con annunci sponsorizzati per la/e parola/e chiave",
            amzSuggestedAvg: "Posizione raccomandata da Amazon (media)",
            amzSuggestedAvgTooltip: "Posizione media della/e parola/e chiave dei prodotti analizzati, relativa al punteggio delle raccomandazioni di Amazon",
            amzSuggestedCount: "Posizione raccomandata da Amazon (totale)",
            amzSuggestedCountTooltip: "Numero di prodotti analizzati per cui Amazon consiglia la/e parola/e chiave",
            positionRank: "Posizione (Classifica)",
            positionRankTooltip: "Posizione del primo ASIN (in una ricerca di più ASIN) nei risultati della ricerca di Amazon",
            scrapedAt: "Raccolti il",
            relativeRank: "Posizione relativa",
            relativeRankTooltip: "Posizione dell'ASIN principale rispetto ai suoi concorrenti. Ad esempio, se due (2) concorrenti sono classificati meglio dell'ASIN principale, la posizione relativa sarà tre (3)",
            competitorRank: "Posizione dei concorrenti (media)",
            competitorRankTooltip: "Posizione media di ASIN concorrenti. Gli ASIN che non si sono classificati non vengono presi in considerazione in questo calcolo.",
            rankingCompetitors: "Concorrenti in classifica (totale)",
            rankingCompetitorsTooltip: "Numero di ASIN concorrenti che si sono classificati per la frase in questione.",
            competitorPerformanceScore: "Punteggio di prestazione dei concorrenti",
            competitorPerformanceScoreTooltip: "L'indice di prestazione dei concorrenti misura l'efficacia dei concorrenti elencati come gruppo per la parola chiave in questione.",
            competitorRankAvg: "Posizione dei concorrenti (media)",
            competitorRankAvgTooltip: "Posizione media di ASIN concorrenti. Gli ASIN che non si sono classificati non vengono presi in considerazione in questo calcolo.",
            filteredKeywords: {one: "{value} parola chiave filtrata", other: "{value} parole chiave filtrate"},
            filteredKeywordsSelected: {
                one: "{value} parola chiave selezionata",
                other: "{value} parole chiave selezionate"
            },
            matchTypeTooltips: {
                amazonRecommended: "Raccomandato da Amazon",
                sponsored: "Sponsorizzato",
                organic: "Organico",
                smartComplete: "Smart Complete",
                organicTooltip: "Ricerca organica",
                paid: "Pagato",
                paidTooltip: "Ricerca a pagamento"
            },
            addToMyList: "Aggiungi parole chiave alla Mia Lista",
            exportAmazonRecommended: "Raccomandato da Amazon",
            exportSponsored: "Sponsorizzato",
            exportOrganic: "Organico",
            amzSuggestedAvgTable: "Posizione raccomandata da Amazon (media)",
            amzSuggestedCountTable: "Posizione raccomandata da Amazon (totale)",
            smartComplete: "Smart Complete",
            abad: "ABA Totale<br/>Click Quota",
            abadTooltip: "Amazon Brand Analytics",
            abadValueTooltip: "Somma dei 3 ASIN principali quota click",
            organicRankAverage: "Posizione organica (media)",
            abadConv: "ABA Totale<br/>Quota di conv.",
            abadConvTooltip: "Somma dei 3 ASIN principali quota click",
            abadSearchFrequencyRank: "ABA SFR",
            abadSearchFrequencyRankTooltip: "The ranked order of search frequency. Search terms with the same search frequency over the selected time frame will show the same rank."
        },
        tableWalmart: {
            keywordPhrase: "Frase chiave",
            keywordPhraseTooltip: "Parola chiave per cui il prodotto appare nelle prime 500 posizioni nei risultati della ricerca di Walmart",
            searchVolumeWalmart: "Volume di ricerca",
            searchVolumeWalmartExport: "Volume di ricerca (Walmart)",
            searchVolumeWalmartTooltip: "Il volume di ricerca di Walmart si basa su stime proprietarie attualmente in versione beta. I dati storici ed esatti non sono attualmente disponibili.",
            searchVolume: "Volume di ricerca",
            searchVolumeAmazonExport: "Volume di ricerca (Amazon)",
            amazonSearchVolume: "Volume di ricerca Amazon",
            searchVolumeTooltip: "Numero stimato di volte in cui una parola chiave viene cercata mensilmente su Amazon. Puoi usare questo dato per integrare la tua ricerca fino a quando il volume di ricerca di Walmart non sarà migliorato.",
            competingProducts: "Prodotti concorrenti",
            competingProductsTooltip: "Numero totale di prodotti restituiti nella ricerca di un cliente per questa parola chiave su Walmart",
            sponsoredProducts: "Prodotti sponsorizzati",
            sponsoredProductsTooltip: "Numero di prodotti rilevati pubblicando annunci sponsorizzati nei risultati della ricerca per questa parola chiave su Walmart",
            matchType: "Tipo di corrispondenza",
            matchTypeTooltip: "Fonte da cui è tratta una parola chiave",
            organicRank: "Posizione organica",
            organicRankTooltip: "Ultima posizione organica rilevata per il prodotto analizzato nella ricerca del cliente su Walmart",
            sponsoredRank: "Posizione sponsorizzata",
            sponsoredRankTooltip: "Ultima posizione rilevata degli annunci sponsorizzati per il prodotto analizzato nella ricerca del cliente su Walmart",
            sponsoredRankAverage: "Posizione sponsorizzata (media)",
            sponsoredRankAverageTooltip: "Posizione media rilevata rispetto a tutti i prodotti nei risultati sponsorizzati",
            sponsoredRankCount: "Posizione sponsorizzata (totale)",
            sponsoredRankCountTooltip: "Numero di prodotti consultati rilevato con annunci sponsorizzati per la/e parola/e chiave",
            positionRank: "Posizione (Classifica)",
            positionRankTooltip: "Posizione del primo Prodotto (in una ricerca di più Prodotti) nei risultati della ricerca di Walmart",
            relativeRank: "Posizione relativa",
            relativeRankTooltip: "Posizione del Prodotto principale rispetto ai suoi concorrenti. Ad esempio, se due (2) concorrenti sono classificati meglio del Prodotto principale, la posizione relativa sarà tre (3)",
            competitorRank: "Posizione dei concorrenti (media)",
            competitorRankTooltip: "Posizione media dei Prodotti concorrenti. I prodotti che non si sono classificati non vengono presi in considerazione in questo calcolo.",
            rankingCompetitors: "Concorrenti in classifica (totale)",
            rankingCompetitorsTooltip: "Numero di Prodotti concorrenti che si sono classificati per la frase in questione.",
            competitorPerformanceScore: "Punteggio di prestazione dei concorrenti",
            competitorPerformanceScoreTooltip: "Il punteggio misura, da 1 a 10, la pertinenza della parola chiave rispetto ai prodotti concorrenti inseriti (escluso il primo prodotto). Un punteggio più alto significa che più prodotti sono classificati organicamente e occupano una posizione organica media bassa"
        },
        landingDemo: {
            title1: "Cerebro ti aiuta a trovare le parole chiave posizionate meglio selezionando un prodotto specifico da",
            title2: "mercato.",
            subtitle: "Seleziona un ASIN per iniziare",
            description: "Cerebro è fondamentale per far conoscere il tuo brand e lanciare nuovi prodotti con successo. Ti consente anche di valutare le parole chiave più efficaci per il tuo prodotto su Amazon, ottimizzare il listing del prodotto per aumentare le vendite e mantenere prezzi competitivi per i tuoi prodotti.",
            backToSearch: "Torna alla ricerca"
        },
        searchVolume: {
            total: {
                tooltip: "Displays the total search volume for your filtered keywords over the past 30 days.",
                title: "Volume di ricerca totale"
            },
            average: {
                tooltip: "Displays the average search volume for your filtered keywords over the past 30 days.",
                title: "Volume di ricerca medio"
            },
            title: {amazon: "Amazon Search Vol.", walmart: "Walmart Search Vol."}
        },
        floatingButton: "Filtra Risultati",
        descriptionFree: "Trova le parole chiave per la tua inserzione utilizzando la ricerca inversa del prodotto.",
        inputPlaceholderFree: "Il confronto delle parole chiave tra i prodotti è disponibile per Platinum e versioni successive.",
        inputPlaceholderNotFree: "Inserisci fino a {maxAsins} identificatori di prodotto per il confronto delle parole chiave.",
        searchBarTooltipTitle: "Sblocca la ricerca multi-prodotto su Platinum",
        searchBarTooltipButton: "Aggiorna ora"
    }, rr = {very_low: "Molto basso", low: "Basso", medium: "Medio", high: "Alto", very_high: "Molto alto"}, or = {
        button: "Crea nuova cartella",
        title: "Crea una nuova cartella nella Mia Lista",
        text: "Crea una nuova cartella nella Mia Lista dove poter salvare le parole chiave per usi futuri in tutti gli strumenti Helium 10. Ciascuna cartella è limitata all'uso in un solo mercato.",
        folderName: "NomeCartella",
        folderNamePlaceholder: "Dai un nome a questa cartella",
        folderNameRequired: "Campo obbligatorio",
        marketplace: "Mercato",
        save: "Salva",
        close: "Chiudi"
    }, ir = {
        minBiggest: "Min superiore a Max",
        frankenstein: {limitIsExceeded: "Il numero totale di simboli in tutte le frasi non può essere superiore a 200.000."},
        common: {
            400: "Dati inseriti errati o nessun risultato",
            402: "Hai raggiunto il limite di utilizzi",
            403: "Accesso negato",
            404: "Non trovato",
            409: "I dati inseriti sono in conflitto con le tue azioni precedenti",
            422: "I dati inseriti non sono validi",
            500: "Errore sconosciuto",
            503: "Funzionalità richiesta temporaneamente non disponibile",
            undefined: "Errore sconosciuto",
            "503Retry": "Riprova più tardi"
        }
    }, nr = {
        title: "Magnet",
        description: "Trova le migliori parole chiave correlate al tuo prodotto.",
        learnTooltip: "Guarda video e leggi articoli utili per acquisire padronanza nell'uso di Magnet",
        tabSingle: "Trova suggerimenti",
        tabMultiple: "Analizza le parole chiave",
        inputPlaceholderSingle: "Inserisci una parola chiave",
        inputPlaceholderMultiple: "Inserisci fino a {number} parole chiave",
        addFromMyList: "Aggiungi dalla Mia Lista",
        landingSingleTitle: "Inserisci una parola chiave qui sopra per trovare le migliori parole chiave correlate",
        landingSingleDescription: "Utilizzeremo i tuoi dati per suggerirti delle parole chiave che potrebbero essere rilevanti per te. Usa i nostri filtri per restringere i risultati e salva quelli che ti piacciono in una cartella nella Mia Lista.",
        landingMultipleTitle: "Ottieni un riepilogo dettagliato di un massimo di 200 parole chiave che ti interessano",
        landingMultipleDescription: "Forniremo dati rilevanti per aiutarti a determinare quali parole chiave vale la pena mantenere. Utilizzando i filtri, organizza le parole chiave più importanti, poi aggiungile alla cartella Mia Lista.",
        landingWatchVideo: "Guarda il nostro video introduttivo",
        keywordSummary: {
            title: "Riepilogo delle parole chiave",
            totalKeywords: "Parole chiave totali",
            averageSearchVolume: "Volume di ricerca medio",
            totalSearchVolume: "Volume di ricerca totale",
            averageMagnetIq: "Punteggio medio QI Magnet",
            averageCompetingProducts: "Prodotti concorrenti medi",
            totalAmazonSV: "VR totale Amazon",
            totalWalmartSV: "VR totale Walmart"
        },
        keywordSearchSummary: {
            title: "Riepilogo della ricerca delle parole chiave",
            viewTopProducts: "Visualizza i prodotti principali",
            searchVolume: "Volume di ricerca",
            magnetIQScore: "Punteggio QI Magnet",
            magnetIQScoreTooltip: "Punteggio basato sul rapporto tra volume di ricerca stimato e numero di prodotti concorrenti: un punteggio alto indica un numero relativamente elevato di ricerche rispetto al numero di concorrenti; un punteggio basso indica il contrario",
            cpr: "CPR"
        },
        searchVolumeDistribution: {title: "Distribuzione del volume di ricerca", seriesName: "Volume"},
        history: {
            description: "Trova una ricerca Magnet precedente e ricaricala senza consumare le ricerche che hai a disposizione.",
            columns: {keywordSearch: "Ricerca per parola chiave", searchType: "Tipo di ricerca"},
            searchTypes: {singleSearch: "Ricerca singola", multiSearch: "Ricerca multipla"},
            tooltip: "Visualizza le ricerche precedenti e ricarica i risultati"
        },
        openInCerebro: "Clicca per aprire su Cerebro",
        tabSingleTooltip: "Trova le migliori parole chiave correlate",
        tabMultipleTooltip: "Inserisci fino a 200 parole chiave e ricevi metriche",
        boughtTogether: {
            title: "Prodotti principali",
            description: "Clicca su un prodotto di seguito per trovare le sue migliori parole chiave su Cerebro."
        },
        choiseBadge: {
            amazon: "La parola chiave che stai analizzando viene visualizzata come Walmart’s Choice per questo prodotto.",
            walmart: "La parola chiave che stai analizzando viene visualizzata come Walmart’s Choice per questo prodotto."
        },
        asinInsteadOfKeywordError: {
            title: "ASIN rilevato",
            text: {
                part1: "Hai inserito {asin} . Visualizza le parole chiave per questo ASIN su",
                part2: "o inserisci una parola chiave per continuare."
            }
        },
        landingDemo: {
            title1: "Magnet ti aiuta a trovare le migliori Parole chiave correlate in",
            title2: "mercato.",
            subtitle: "Seleziona una parola chiave di seguito per iniziare",
            description: "Utilizzeremo la tua selezione per suggerirti parole chiave potenzialmente rilevanti per la tua ricerca. Usa i filtri per limitare i risultati e salva le parole chiave desiderate in una cartella nella Mia Lista."
        }
    }, lr = {
        options: {
            ">10000": ">10,000",
            "5000-10000": "5,000-10,000",
            "1000-5000": "1,000-5,000",
            "<1000": "< 1,000",
            "Very Low": "Molto basso",
            Low: "Basso",
            Medium: "Medio",
            High: "Alto",
            "Very High": "Molto alto",
            very_low: "Molto basso",
            low: "Basso",
            medium: "Medio",
            high: "Alto",
            very_high: "Molto alto"
        }
    }, sr = {
        title: "Hai già cercato questo prodotto",
        description: "Vuoi caricare la tua ricerca precedente dalla cronologia o lanciarne una nuova?",
        newSearchButton: "Lancia nuova ricerca",
        fromHistoryButton: "Carica dalla Cronologia"
    }, dr = "Nessun dato disponibile", ur = {
        button: "Esegui l'upgrade per avere accesso illimitato",
        texts: {
            cerebroAmazon: {
                one: "Rimane <b>{count}</b> ricerca Cerebro per Amazon per oggi",
                other: "Rimane <b>{count}</b> ricerche Cerebro per Amazon per oggi"
            },
            cerebroWalmart: {
                one: "Rimane <b>{count}</b> ricerca Cerebro per Walmart per oggi",
                other: "Rimane <b>{count}</b> ricerche Cerebro per Walmart per oggi"
            },
            magnetAmazon: {
                one: "<b>{count}</b> ricerca Amazon rimasta per oggi",
                other: "<b>{count}</b> ricerche Amazon rimaste per oggi"
            },
            magnetWalmart: {
                one: "<b>{count}</b> ricerca Walmart rimasta per oggi",
                other: "<b>{count}</b> ricerche Walmart rimaste per oggi"
            },
            cerebroDemo: "<b>Stai visualizzando una demo di Cerebro.</b> Aggiorna per l'analisi delle parole chiave su più prodotti, libreria preimpostata e filtri rapidi.",
            magnetDemo: "Stai visualizzando una demo di Magnet"
        },
        plans: {
            free: "Free",
            starter: "Starter",
            platinum: "Platinum",
            diamond: "Diamond",
            starterChinese: "Explorer",
            platinumChinese: "Entrepreneur",
            diamondChinese: "Professional",
            freeChinese: "Free"
        },
        prices: {platinum: "$99/mese", diamond: "$249/mese", commonMonth: "${price}/mese"},
        WALMART_features: {
            title: "Sblocca questa e altre fantastiche funzioni in Cerebro per Walmart",
            subtitle: "Questa funzione è disponibile solo con un Piano Diamond o superiore.",
            upgradeButton: "Scopri i piani",
            declineButton: "Non adesso",
            features: [{
                title: "Ricerca di un singolo prodotto",
                values: {
                    Helium10_Starter: "2 usi al giorno",
                    Helium10_Free: "2 usi al giorno",
                    Helium10_Start_Your_Business: "2 usi al giorno"
                }
            }, {title: "Ricerca di più prodotti"}, {title: "Più pagine di risultati"}, {title: "Filtra Risultati"}, {title: "Ottieni concorrenti"}, {title: "Cronologia"}, {title: "Vendite per parola chiave per Cerebro e Magnet"}, {
                title: "Walmart",
                values: {Helium10_Free: "2 usi al giorno"}
            }, {
                title: "Follow-Up",
                values: {Helium10_Free: "2,000 e-mail", Helium10_Scale_Your_Business: "10,000 e-mail"}
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Free: "2,500 parole chiave", Helium10_Scale_Your_Business: "5,000 parole chiave"}
            }, {
                title: "Black Box",
                values: {Helium10_Starter: "20 usi", Helium10_Start_Your_Business: "20 usi"}
            }, {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "2 usi al giorno",
                    Helium10_Free: "2 usi al giorno",
                    Helium10_Start_Your_Business: "2 usi al giorno"
                }
            }, {
                title: "Magnet",
                values: {
                    Helium10_Starter: "2 usi al giorno",
                    Helium10_Free: "2 usi al giorno",
                    Helium10_Start_Your_Business: "2 usi al giorno"
                }
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20 parole chiave", Helium10_Scale_Your_Business: "5,000 parole chiave"}
            }, {title: "Xray", values: {Helium10_Starter: "50 lanci"}}],
            cerebro: {
                title: "Sblocca questa e altre fantastiche funzioni in Cerebro per Walmart",
                subtitle: "Questa funzione è disponibile solo con un Piano Diamond o superiore."
            },
            magnet: {
                title: "Sblocca questa e altre fantastiche funzioni in Magnet per Walmart",
                subtitle: "Ottieni ricerche illimitate e sblocca più valore con Diamond.",
                titleHistory: "Sblocca la Cronologia e altre fantastiche funzioni in Magnet per Walmart"
            }
        },
        AMAZON_features: {
            title: "Sblocca questa e altre fantastiche funzioni in Cerebro per Amazon",
            subtitle: "Questa funzione è disponibile solo con un Piano Platinum o superiore.",
            upgradeButton: "Scopri i piani",
            declineButton: "Non adesso",
            features: [{
                title: "Ricerca di un singolo prodotto",
                values: {Helium10_Free: "2 usi al giorno", Helium10_Starter: "2 usi al giorno"}
            }, {title: "Ricerca di più prodotti"}, {title: "Più pagine di risultati"}, {title: "Filtra Risultati"}, {title: "Ottieni concorrenti"}, {title: "Cronologia"}, {title: "Vendite per parola chiave per Cerebro e Magnet"}, {
                title: "Walmart",
                values: {Helium10_Free: "2 usi al giorno"}
            }, {
                title: "Follow-Up",
                values: {Helium10_Free: "2,000 e-mail", Helium10_Scale_Your_Business: "10,000 e-mail"}
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Free: "2,500 parole chiave", Helium10_Scale_Your_Business: "5,000 parole chiave"}
            }, {
                title: "Black Box",
                values: {Helium10_Starter: "20 usi", Helium10_Start_Your_Business: "20 usi"}
            }, {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "2 usi al giorno",
                    Helium10_Free: "2 usi al giorno",
                    Helium10_Start_Your_Business: "2 usi al giorno"
                }
            }, {
                title: "Magnet",
                values: {
                    Helium10_Starter: "2 usi al giorno",
                    Helium10_Free: "2 usi al giorno",
                    Helium10_Start_Your_Business: "2 usi al giorno"
                }
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20 parole chiave", Helium10_Scale_Your_Business: "5,000 parole chiave"}
            }, {title: "Xray", values: {Helium10_Start_Your_Business: "50 lanci"}}],
            cerebro: {
                title: "Sblocca questa e altre fantastiche funzioni in Cerebro per Amazon",
                subtitle: "Questa funzione è disponibile solo con un Piano Platinum o superiore."
            },
            magnet: {
                title: "Sblocca questa e altre fantastiche funzioni in Magnet per Amazon",
                subtitle: "Ottieni ricerche illimitate e sblocca più valore con Diamond.",
                titleHistory: "Sblocca la Cronologia e altre fantastiche funzioni in Magnet per Amazon"
            }
        },
        WALMART_tools: {
            title: "Hai esaurito le tue 2 ricerche gratuite giornaliere in Cerebro per Walmart.",
            subtitle: "Ottieni ricerche illimitate al giorno e sblocca più valore con Diamond.",
            upgradeButton: "Esegui l'upgrade a Diamond",
            declineButton: "Non adesso",
            features: [{
                title: "Cerebro per Walmart",
                subtitle: "Inverti ricerca dei prodotti",
                values: {
                    Helium10_Starter: "2 usi al giorno",
                    Helium10_Free: "2 usi al giorno",
                    Helium10_Start_Your_Business: "2 usi al giorno"
                }
            }, {
                title: "Magnet per Walmart",
                subtitle: "Ricerca di parole chiave",
                values: {
                    Helium10_Starter: "2 usi al giorno",
                    Helium10_Free: "2 usi al giorno",
                    Helium10_Start_Your_Business: "2 usi al giorno"
                }
            }, {
                title: "Xray per Walmart",
                subtitle: "Estensione di Chrome - Ricerca dei prodotti",
                values: {Helium10_Starter: "50 lanci", Helium10_Free: "50 lanci", Helium10_Start_Your_Business: "50 lanci"}
            }, {
                title: "Profits per Walmart",
                subtitle: "Dashboard di analisi finanziarie",
                values: {
                    Helium10_Starter: "90 giorni",
                    Helium10_Free: "90 giorni",
                    Helium10_Start_Your_Business: "90 giorni"
                }
            }],
            cerebro: {
                title: "Hai esaurito le tue 2 ricerche gratuite giornaliere in Cerebro per Walmart.",
                subtitle: "Ottieni ricerche illimitate al giorno e sblocca più valore con Diamond.",
                titleNew: "Hai esaurito le tue {uses} ricerche gratuite giornaliere in Cerebro per Walmart."
            },
            magnet: {
                title: "Hai esaurito le tue 2 ricerche gratuite giornaliere in Magnet per Walmart.",
                subtitle: "Ottieni ricerche illimitate al giorno e sblocca più valore con Diamond.",
                titleNew: "Hai esaurito le tue {uses} ricerche gratuite giornaliere in Magnet per Walmart."
            },
            titleNew: "Hai esaurito le tue {uses} ricerche gratuite giornaliere in Cerebro per Walmart."
        },
        AMAZON_tools: {
            title: "Hai esaurito le tue 2 ricerche gratuite giornaliere in Cerebro per Amazon.",
            subtitle: "Ottieni ricerche illimitate al giorno e sblocca più valore con Platinum.",
            upgradeButton: "Esegui l'upgrade a Platinum",
            declineButton: "Non adesso",
            features: [{
                title: "Cerebro per Amazon",
                subtitle: "Inverti ricerca dei prodotti",
                values: {Helium10_Free: "2 usi al giorno", Helium10_Starter: "2 usi al giorno"}
            }, {
                title: "Magnet per Amazon",
                subtitle: "Ricerca di parole chiave",
                values: {Helium10_Free: "2 usi al giorno", Helium10_Starter: "2 usi al giorno"}
            }, {
                title: "Xray per Amazon",
                subtitle: "Estensione di Chrome - Ricerca dei prodotti",
                values: {Helium10_Free: "50 lanci", Helium10_Starter: "50 lanci"}
            }, {
                title: "Keyword Tracker per Amazon",
                subtitle: "Monitoraggio classifica prodotti",
                values: {
                    Helium10_Free: "20 parole chiave",
                    Helium10_Starter: "20 parole chiave",
                    Helium10_Start_Your_Business: "500 parole chiave"
                }
            }],
            cerebro: {
                title: "Hai esaurito le tue 2 ricerche gratuite giornaliere in Cerebro per Amazon.",
                subtitle: "Ottieni ricerche illimitate al giorno e sblocca più valore con Platinum.",
                titleNew: "Hai esaurito le tue {uses} ricerche gratuite giornaliere in Cerebro per Amazon."
            },
            magnet: {
                title: "Hai esaurito le tue 2 ricerche gratuite giornaliere in Magnet per Amazon.",
                subtitle: "Ottieni ricerche illimitate al giorno e sblocca più valore con Platinum.",
                titleNew: "Hai esaurito le tue {uses} ricerche gratuite giornaliere in Magnet per Amazon."
            }
        },
        getPlan: "Ottieni un piano",
        titles: {
            keywordSales: "Per sbloccare questa e altre fantastiche funzioni, passa a un piano superiore",
            modalCommon: "Per sbloccare questa e altre fantastiche funzioni, passa a un piano superiore"
        },
        subtitles: {
            modalPlatinum: "Questa funzione è disponibile solo con un Piano Platinum o superiore.",
            modalDiamond: "Questa funzione è disponibile solo con un Piano Diamond o superiore.",
            modalCommon: "Questa funzione è disponibile solo con un Piano {plan} o superiore.",
            modalUnlimitedCommon: "Ottieni ricerche illimitate e sblocca più valore con {plan}.",
            pageCommon: "Ottieni ricerche giornaliere illimitate e sblocca più valore con {plan}."
        },
        featuresModal: {
            singleProductSearch: {
                title: "Ricerca di un singolo prodotto",
                values: {
                    Helium10_Starter: "2 usi al giorno",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 usi al giorno"
                }
            },
            singleProductSearch2: {
                title: "Ricerca di un singolo prodotto",
                values: {Helium10_Free: "Demo", Helium10_Starter: "2 usi al giorno"}
            },
            multiProductSearch: {title: "Ricerca di più prodotti"},
            multiplePagesResults: {title: "Più pagine di risultati"},
            filterResults: {title: "Filtra e ordina i risultati"},
            getCompetitors: {title: "Ottieni concorrenti"},
            history: {title: "Cronologia"},
            export: {title: "Esporta"},
            salesByKeyword: {title: "Vendite per parola chiave per Cerebro e Magnet"},
            magnetWalmart: {title: "Walmart", values: {Helium10_Free: "Demo"}},
            followUp: {
                title: "Follow-Up",
                values: {Helium10_Free: "2,000 e-mail", Helium10_Scale_Your_Business: "10,000 e-mail"}
            },
            keywordTracker: {
                title: "Keyword Tracker",
                values: {Helium10_Free: "2,500 parole chiave", Helium10_Scale_Your_Business: "5,000 parole chiave"}
            },
            blackBox: {title: "Black Box", values: {Helium10_Starter: "20 usi", Helium10_Start_Your_Business: "20 usi"}},
            cerebro: {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "2 usi al giorno",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 usi al giorno"
                }
            },
            magnet: {
                title: "Magnet",
                values: {
                    Helium10_Starter: "2 usi al giorno",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 usi al giorno"
                }
            },
            keywordTracker2: {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20 parole chiave", Helium10_Scale_Your_Business: "5,000 parole chiave"}
            },
            xray: {title: "Xray", values: {Helium10_Free: "50 lanci"}},
            blackBoxProducts: {title: "Black Box", values: {Helium10_Free: "20 usi", Helium10_Starter: "20 usi"}},
            blackBoxProductsCerebro: {title: "Cerebro", values: {Helium10_Free: "Limitato", Helium10_Starter: "Limitato"}},
            blackBoxProductsMagnet: {title: "Magnet", values: {Helium10_Free: "Limitato", Helium10_Starter: "Limitato"}},
            abad: {title: "Amazon Brand Analytics all'interno di Cerebro"},
            walmartCerebroMagnet: {title: "Walmart per Cerebro o Magnet"},
            adtomic: {title: "Adtomic"},
            businessValuation: {title: "Valutazione aziendale"},
            listingAnalyzer: {
                title: "Listing Analyzer",
                values: {
                    Helium10_Free: "2 ricerche / mese",
                    Helium10_Starter: "2 ricerche / mese",
                    Helium10_Start_Your_Business: "25 ricerche / mese",
                    Helium10_Scale_Your_Business: "50 ricerche / mese"
                }
            },
            abadNew: {title: "Funzione Brand Analytics di Amazon all'interno di Cerebro o Magnet"},
            singleProductSearchUses: {
                title: "Ricerca di un singolo prodotto",
                values: {
                    Helium10_Starter: "{uses} usi al giorno",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} usi al giorno"
                }
            },
            singleProductSearch2Uses: {
                title: "Ricerca di un singolo prodotto",
                values: {Helium10_Free: "Demo", Helium10_Starter: "{uses} usi al giorno"}
            },
            followUpUses: {
                title: "Follow-Up",
                values: {Helium10_Free: "{uses} email", Helium10_Scale_Your_Business: "{uses} email"}
            },
            keywordTrackerUses: {
                title: "Keyword Tracker",
                values: {Helium10_Free: "{uses} parole chiave", Helium10_Scale_Your_Business: "{uses} parole chiave"}
            },
            blackBoxUses: {
                title: "Black Box",
                values: {Helium10_Starter: "{uses} usi", Helium10_Start_Your_Business: "{uses} usi"}
            },
            cerebroUses: {
                title: "Cerebro",
                values: {
                    Helium10_Starter: "{uses} usi al giorno",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} usi al giorno"
                }
            },
            magnetUses: {
                title: "Magnet",
                values: {
                    Helium10_Starter: "{uses} usi al giorno",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} usi al giorno"
                }
            },
            keywordTracker2Uses: {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "{uses} parole chiave", Helium10_Scale_Your_Business: "{uses} parole chiave"}
            },
            xrayUses: {title: "Xray", values: {Helium10_Free: "{uses} lanci"}},
            blackBoxProductsUses: {
                title: "Black Box",
                values: {Helium10_Free: "{uses} usi", Helium10_Starter: "{uses} usi"}
            },
            listingAnalyzerUses: {
                title: "Listing Analyzer",
                values: {
                    Helium10_Free: "{uses} ricerche/mese",
                    Helium10_Starter: "{uses} ricerche/mese",
                    Helium10_Start_Your_Business: "{uses} ricerche/mese",
                    Helium10_Scale_Your_Business: "{uses} ricerche/mese"
                }
            },
            salesHistoricalChart: {title: "Grafico cronologico delle vendite"},
            ppcBid: {title: "Helium 10 PPC Offerta suggerita"}
        },
        featuresPage: {
            cerebroForWalmart: {
                title: "Cerebro per Walmart",
                subtitle: "Inverti ricerca dei prodotti",
                values: {
                    Helium10_Starter: "2 usi al giorno",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 usi al giorno"
                }
            },
            magnetForWalmart: {
                title: "Magnet per Walmart",
                subtitle: "Ricerca di parole chiave",
                values: {
                    Helium10_Starter: "2 usi al giorno",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "2 usi al giorno"
                }
            },
            xrayForWalmart: {
                title: "Xray per Walmart",
                subtitle: "Estensione di Chrome - Ricerca dei prodotti",
                values: {Helium10_Starter: "50 lanci", Helium10_Free: "50 lanci", Helium10_Start_Your_Business: "50 lanci"}
            },
            profitsForWalmart: {
                title: "Profits per Walmart",
                subtitle: "Dashboard di analisi finanziarie",
                values: {
                    Helium10_Starter: "90 giorni",
                    Helium10_Free: "90 giorni",
                    Helium10_Start_Your_Business: "90 giorni"
                }
            },
            cerebroForAmazon: {
                title: "Cerebro per Amazon",
                subtitle: "Inverti ricerca dei prodotti",
                values: {Helium10_Free: "Demo", Helium10_Starter: "2 usi al giorno"}
            },
            magnetForAmazon: {
                title: "Magnet per Amazon",
                subtitle: "Ricerca di parole chiave",
                values: {Helium10_Free: "Demo", Helium10_Starter: "2 usi al giorno"}
            },
            xrayForAmazon: {
                title: "Xray per Amazon",
                subtitle: "Estensione di Chrome - Ricerca dei prodotti",
                values: {Helium10_Free: "50 lanci", Helium10_Starter: "50 lanci"}
            },
            keywordTrackerForAmazon: {
                title: "Keyword Tracker per Amazon",
                subtitle: "Monitoraggio classifica prodotti",
                values: {
                    Helium10_Free: "20 parole chiave",
                    Helium10_Starter: "20 parole chiave",
                    Helium10_Start_Your_Business: "500 parole chiave"
                }
            },
            cerebroForWalmartUses: {
                title: "Cerebro per Walmart",
                subtitle: "Inverti ricerca dei prodotti",
                values: {
                    Helium10_Starter: "{uses} usi al giorno",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} usi al giorno"
                }
            },
            magnetForWalmartUses: {
                title: "Magnet per Walmart",
                subtitle: "Ricerca di parole chiave",
                values: {
                    Helium10_Starter: "{uses} usi al giorno",
                    Helium10_Free: "Demo",
                    Helium10_Start_Your_Business: "{uses} usi al giorno"
                }
            },
            xrayForWalmartUses: {
                title: "Xray per Walmart",
                subtitle: "Estensione di Chrome - Ricerca dei prodotti",
                values: {
                    Helium10_Starter: "{uses} lanci",
                    Helium10_Free: "{uses} lanci",
                    Helium10_Start_Your_Business: "{uses} lanci"
                }
            },
            profitsForWalmartUses: {
                title: "Profits per Walmart",
                subtitle: "Dashboard di analisi finanziarie",
                values: {
                    Helium10_Starter: "{uses} giorni",
                    Helium10_Free: "{uses} giorni",
                    Helium10_Start_Your_Business: "{uses} giorni"
                }
            },
            cerebroForAmazonUses: {
                title: "Cerebro per Amazon",
                subtitle: "Inverti ricerca dei prodotti",
                values: {Helium10_Free: "Demo", Helium10_Starter: "{uses} usi al giorno"}
            },
            magnetForAmazonUses: {
                title: "Magnet per Amazon",
                subtitle: "Ricerca di parole chiave",
                values: {Helium10_Free: "Demo", Helium10_Starter: "{uses} usi al giorno"}
            },
            xrayForAmazonUses: {
                title: "Xray per Amazon",
                subtitle: "Estensione di Chrome - Ricerca dei prodotti",
                values: {Helium10_Free: "{uses} lanci", Helium10_Starter: "{uses} lanci"}
            },
            keywordTrackerForAmazonUses: {
                title: "Keyword Tracker per Amazon",
                subtitle: "Monitoraggio classifica prodotti",
                values: {
                    Helium10_Free: "{uses} parole chiave",
                    Helium10_Starter: "{uses} parole chiave",
                    Helium10_Start_Your_Business: "{uses} parole chiave"
                }
            }
        },
        titlesModal: {
            blackBoxProductsLimit: {
                title: "Hai raggiunto il limite di ricerche gratuite con Black Box",
                subtitle: "Aumenta il limite e ottieni più valore con Platinum",
                upgradeButton: "Confronta i piani ora",
                subtitleCommon: "Aumenta il limite e sblocca più valore con {plan}"
            },
            blackBoxSalesChartAmazon: {
                title: "Sblocca questa e altre fantastiche funzionalità in BlackBox per Amazon",
                subtitle: "Aumenta il limite e sblocca più valore con {plan}"
            },
            upgradeButton: ""
        },
        upgradeButton: "Esegui l'upgrade del piano",
        upgradeTo: "Esegui l'upgrade a {upgradePlan}"
    }, cr = {copy: "Copia {name}", copied: "{name} copiato"}, mr = {
        cerebro: {
            amazon: "Ti serve un ASIN? Prova uno di questi",
            walmart: "Ti serve uno Walmart ID del prodotto? Prova uno di queste:"
        },
        magnet: {
            amazon: "Ti serve una parola chiave? Prova una di queste:",
            walmart: "Ti serve una parola chiave? Prova una di queste:"
        }
    }, pr = {
        1001: "AUTH_INVALID_TOKEN",
        1002: "AUTH_NO_USER",
        2001: "Formato dell'identificativo ASIN {asin} non valido",
        2002: "Identificativo ASI {asin} non valido per la piattaforma {marketplace}",
        2003: "Errore imprevisto del server",
        2004: "Errore imprevisto del server",
        2005: "Errore imprevisto del server",
        2006: "Il numero totale di simboli in tutte le frasi non può essere superiore a 200.000.",
        2007: "Errore imprevisto del server",
        3001: "Impossibile trovare i dati di ricerca ASIN principali",
        3002: "Impossibile trovare i dati di ricerca di prodotti principali",
        3003: "Abbreviazione non trovata per il marketplace: {marketplace}",
        4001: "Errore imprevisto del server",
        4002: "Errore imprevisto del server",
        4003: "Errore imprevisto del server",
        4004: "Errore imprevisto del server",
        4005: "Errore imprevisto del server",
        4006: "Errore imprevisto del server",
        4007: "Errore imprevisto del server",
        5001: "Dati della ricerca vuoti",
        5002: "Tutti o i principali dati del prodotto sono vuoti",
        5003: "Dati delle ricerche vuoti",
        5004: "Nessun dato per il prodotto",
        5005: "Errore imprevisto del server",
        5006: "Errore imprevisto del server",
        6001: "Frasi non inserite",
        6002: "Frasi non inserite",
        6003: "Non esistono parole comuni per questo utente",
        6004: "Nessun cliente con il marketplace richiesto",
        6005: "Impossibile visualizzare la cronologia. Per farlo, passa al piano Helium 10.",
        6006: "Errore imprevisto del server",
        6007: "Errore imprevisto del server",
        6008: "Impossibile trovare i dettagli del prodotto per l'id {productId}",
        6009: "Nessun risultato per le parole chiave!",
        6010: "Il file non è stato caricato.",
        6011: "Impossibile salvare il modello di ricerca",
        6012: "Impossibile eliminare il modello",
        6013: "Modello di ricerca inesistente",
        6014: "Non esistono Parole comuni per questo utente",
        6015: "Le Parole comuni non sono state eliminate",
        6016: "L'elemento Media delle posizioni suggerite non esiste",
        6017: "L'elemento Numero di posizioni suggerite non esiste",
        6018: "Non esiste un elemento Posizione suggerita per il filtro",
        6019: "La chiave della media delle posizioni sponsorizzate non esiste",
        6020: "Errore del server sconosciuto",
        6021: "Non esiste un elemento Posizione sponsorizzata per il filtro",
        6022: "Non esiste una chiave della frase nell'elemento",
        6023: "L'elemento Intervallo di posizioni non esiste",
        6024: "L'elemento Punteggio di prestazione dei concorrenti non esiste",
        6025: "L'elemento Posizione organica non esiste",
        6026: "L'elemento Tipo di corrispondenza non esiste",
        6027: "L'elemento Frase è vuoto o inesistente",
        6028: "L'elemento Concorrenti in classifica non esiste",
        6029: "L'elemento Posizione relativa non esiste",
        6030: "L'elemento Classifica delle posizioni non esiste",
        6031: "Non esiste un elemento Numero di risultati per il filtro",
        6032: "L'elemento Media della concorrenza non esiste",
        6033: "Il valore del trend del volume di ricerca non esiste",
        6034: "Non esiste un elemento Densità del titolo per il filtro",
        6035: "L'elemento Intervallo di posizioni è vuoto o inesistente",
        6036: "Questo elemento ASIN è vuoto o inesistente",
        6037: "L'elemento è vuoto o inesistente",
        6038: "Non esiste un elemento Volume di ricerca per il filtro Amazon",
        6039: "Non esiste un elemento Impression nel filtro del volume di ricerca",
        6040: "L'ID prodotto tracciato non esiste",
        6041: "Questo prodotto non esiste",
        6042: "Nessun numero di risultati",
        6043: "La frase non esiste",
        6044: 'Il filtro non può contenere parametri "include ogni" e "include qualsiasi" che siano uguali a vero o falso',
        6045: "Il valore del filtro Paese seller più frequente non esiste",
        6046: "Impossibile creare una ricerca inversa",
        6047: "Non puoi esportare le ricerche precedenti. Per farlo, passa al piano Helium 10",
        6049: "Il filtro non è configurato",
        6050: "I servizi esterni non funzionano o hanno prodotto dati errati",
        7001: "Devono esserci risultati per almeno 1 prodotto concorrente",
        7002: "Impossibile recuperare le frasi per l'ASIN specificato",
        7003: "Nessun elemento fra i risultati di ricerca",
        7004: "Direzione dell'ordine errata",
        7008: "Prodotto errato trovato nell'API",
        7009: "Mancano gli ASIN per la ricerca inversa ClickHouse",
        7010: "Mancano le colonne da selezionare per la ricerca inversa ClickHouse",
        7011: "Le colonne da selezionare per la ricerca inversa ClickHouse sono in un formato errato",
        7012: "Gli ASIN da selezionare per la ricerca inversa ClickHouse sono in un formato errato",
        7013: "ID prodotto errato per Walmart",
        7014: "Si è verificato un errore: ' . json_encode($errors, JSON_THROW_ON_ERROR)",
        7015: "Non puoi cercare più di 50 parole chiave. Per farlo, passa a un piano Helium 10 superiore",
        7016: "Non puoi cercare più di 200 parole chiave",
        7017: "Il tuo piano non ti consente di caricare parole chiave",
        8001: "Dominio sconosciuto {domain}",
        8002: "ID marketplace sconosciuto: {marketplaceId}",
        8003: "ID breve sconosciuto {shortId}",
        8004: "Marketplace sconosciuto: {marketplace}",
        8005: "Errore imprevisto del server",
        unknown: "Errore del server sconosciuto",
        "rta-1001": "AUTH_INVALID_TOKEN",
        "rta-1002": "AUTH_NO_USER",
        "rta-2001": "Formato dell'identificativo ASIN {asin} non valido",
        "rta-2002": "Identificativo ASI {asin} non valido per la piattaforma {marketplace}",
        "rta-2003": "Errore imprevisto del server",
        "rta-2004": "Errore imprevisto del server",
        "rta-2005": "Errore imprevisto del server",
        "rta-2006": "Il numero totale di simboli in tutte le frasi non può essere superiore a 200.000.",
        "rta-2007": "Errore imprevisto del server",
        "rta-3001": "Impossibile trovare i dati di ricerca ASIN principali",
        "rta-3002": "Impossibile trovare i dati di ricerca di prodotti principali",
        "rta-3003": "Abbreviazione non trovata per il marketplace: {marketplace}",
        "rta-4001": "Errore imprevisto del server",
        "rta-4002": "Errore imprevisto del server",
        "rta-4003": "Errore imprevisto del server",
        "rta-4004": "Errore imprevisto del server",
        "rta-4005": "Errore imprevisto del server",
        "rta-4006": "Errore imprevisto del server",
        "rta-4007": "Errore imprevisto del server",
        "rta-5001": "Dati della ricerca vuoti",
        "rta-5002": "Tutti o i principali dati del prodotto sono vuoti",
        "rta-5003": "Dati delle ricerche vuoti",
        "rta-5004": "Nessun dato per il prodotto",
        "rta-5005": "Errore imprevisto del server",
        "rta-5006": "Errore imprevisto del server",
        "rta-6001": "Frasi non inserite",
        "rta-6002": "Frasi non inserite",
        "rta-6003": "Non esistono parole comuni per questo utente",
        "rta-6004": "Nessun cliente con il marketplace richiesto",
        "rta-6005": "Impossibile visualizzare la cronologia. Per farlo, passa al piano Helium 10.",
        "rta-6006": "Errore imprevisto del server",
        "rta-6007": "Errore imprevisto del server",
        "rta-6008": "Impossibile trovare i dettagli del prodotto per l'id {productId}",
        "rta-6009": "Nessun risultato per le parole chiave!",
        "rta-6010": "Il file non è stato caricato.",
        "rta-6011": "Impossibile salvare il modello di ricerca",
        "rta-6012": "Impossibile eliminare il modello",
        "rta-6013": "Modello di ricerca inesistente",
        "rta-6014": "Non esistono Parole comuni per questo utente",
        "rta-6015": "Le Parole comuni non sono state eliminate",
        "rta-6016": "L'elemento Media delle posizioni suggerite non esiste",
        "rta-6017": "L'elemento Numero di posizioni suggerite non esiste",
        "rta-6018": "Non esiste un elemento Posizione suggerita per il filtro",
        "rta-6019": "La chiave della media delle posizioni sponsorizzate non esiste",
        "rta-6020": "Errore del server sconosciuto",
        "rta-6021": "Non esiste un elemento Posizione sponsorizzata per il filtro",
        "rta-6022": "Non esiste una chiave della frase nell'elemento",
        "rta-6023": "L'elemento Intervallo di posizioni non esiste",
        "rta-6024": "L'elemento Punteggio di prestazione dei concorrenti non esiste",
        "rta-6025": "L'elemento Posizione organica non esiste",
        "rta-6026": "L'elemento Tipo di corrispondenza non esiste",
        "rta-6027": "L'elemento Frase è vuoto o inesistente",
        "rta-6028": "L'elemento Concorrenti in classifica non esiste",
        "rta-6029": "L'elemento Posizione relativa non esiste",
        "rta-6030": "L'elemento Classifica delle posizioni non esiste",
        "rta-6031": "Non esiste un elemento Numero di risultati per il filtro",
        "rta-6032": "L'elemento Media della concorrenza non esiste",
        "rta-6033": "Il valore del trend del volume di ricerca non esiste",
        "rta-6034": "Non esiste un elemento Densità del titolo per il filtro",
        "rta-6035": "L'elemento Intervallo di posizioni è vuoto o inesistente",
        "rta-6036": "Questo elemento ASIN è vuoto o inesistente",
        "rta-6037": "L'elemento è vuoto o inesistente",
        "rta-6038": "Non esiste un elemento Volume di ricerca per il filtro Amazon",
        "rta-6039": "Non esiste un elemento Impression nel filtro del volume di ricerca",
        "rta-6040": "L'ID prodotto tracciato non esiste",
        "rta-6041": "Questo prodotto non esiste",
        "rta-6042": "Nessun numero di risultati",
        "rta-6043": "La frase non esiste",
        "rta-6044": 'Il filtro non può contenere parametri "include ogni" e "include qualsiasi" che siano uguali a vero o falso',
        "rta-6045": "Il valore del filtro Paese seller più frequente non esiste",
        "rta-6049": "Il filtro non è configurato",
        "rta-6046": "Impossibile creare una ricerca inversa",
        "rta-6047": "Non puoi esportare le ricerche precedenti. Per farlo, passa al piano Helium 10",
        "rta-6050": "I servizi esterni non funzionano o hanno prodotto dati errati",
        "rta-7001": "Devono esserci risultati per almeno 1 prodotto concorrente",
        "rta-7002": "Impossibile recuperare le frasi per l'ASIN specificato",
        "rta-7003": "Nessun elemento fra i risultati di ricerca",
        "rta-7004": "Direzione dell'ordine errata",
        "rta-7008": "Prodotto errato trovato nell'API",
        "rta-7009": "Mancano gli ASIN per la ricerca inversa ClickHouse",
        "rta-7010": "Mancano le colonne da selezionare per la ricerca inversa ClickHouse",
        "rta-7011": "Le colonne da selezionare per la ricerca inversa ClickHouse sono in un formato errato",
        "rta-7012": "Gli ASIN da selezionare per la ricerca inversa ClickHouse sono in un formato errato",
        "rta-7013": "ID prodotto errato per Walmart",
        "rta-7014": "Si è verificato un errore: ' . json_encode($errors, JSON_THROW_ON_ERROR)",
        "rta-7015": "Non puoi cercare più di 50 parole chiave. Per farlo, passa a un piano Helium 10 superiore",
        "rta-7016": "Non puoi cercare più di 200 parole chiave",
        "rta-8001": "Dominio sconosciuto {domain}",
        "rta-8002": "ID marketplace sconosciuto: {marketplaceId}",
        "rta-8003": "ID breve sconosciuto {shortId}",
        "rta-8004": "Marketplace sconosciuto: {marketplace}",
        "rta-8005": "Errore imprevisto del server",
        "rta-7017": "Il tuo piano non ti consente di caricare parole chiave",
        "rta-2010": "Attributo di ordine errato",
        "rta-2011": "Valore del filtro non valido",
        "rta-2012": "Titolo non valido, includi lunghezza parola chiave",
        "rta-2013": "Titolo non valido, escludi lunghezza parola chiave",
        "rta-7020": "Il nome è già stato preso",
        "rta-22001": "Impossibile salvare il preset del filtro. Il nome del preset del filtro può contenere fino a 255 caratteri.",
        "rta-no-prev-searches": "Non ci sono ricerche precedenti",
        "rta-0": "Errore imprevisto"
    }, hr = {
        pageTitle: "Elite Analytics",
        title: "Elite Analytics",
        description: "Analizza le tue parole chiave per scoprire la tua nicchia",
        learnTooltip: "Guarda video e leggi articoli utili per acquisire padronanza nell'uso di Magnet",
        totalDensity: "Densità del titolo",
        totalDensityTooltip: "Percentuale di risultati con una Densità del titolo inferiore a 12",
        totalSearchVolume: "Trend volume di ricerca",
        totalSearchVolumeTooltip: "Percentuale di risultati con un trend di Volume di ricerca in crescita",
        totalAverageReview: "Alto numero di recensioni",
        totalAverageReviewTooltip: "Percentuale per cui oltre 6 risultati hanno un Alto numero di recensioni",
        totalMostFrequent: "Paese seller più frequente",
        totalMostFrequentTooltip: "Paese seller più frequente dei risultati qui sotto.",
        backToUpload: "Torna al caricamento",
        showResults: "Mostra risultati",
        tryAgain: "Riprova",
        modals: {
            importingTitle: "Importazione",
            validatedTitle: "File convalidato",
            limitExceededTitle: "Limite superato",
            failedTitle: "Importazione non riuscita",
            validatedDescription: "Hai caricato {requestedUses} su {remainingUses} ricerche di parole chiave rimaste nel limite del tuo piano mensile.",
            limitExceededDescription: {
                one: "Ti restano {remainingUses} su {totalUses} ricerche di parole chiave nel tuo limite mensile. Poiché il tuo file contiene {requestedUses} righe, useremo le prima {count} riga del file attuale per analizzare i tuoi risultati.",
                other: "Ti restano {remainingUses} su {totalUses} ricerche di parole chiave nel tuo limite mensile. Poiché il tuo file contiene {requestedUses} righe, useremo le prime {count} righe del file attuale per analizzare i tuoi risultati."
            },
            failedDescription: "Purtroppo la formattazione non è stata riconosciuta. Consulta {link} per consigli su come formattare il file.",
            KnowledgeBaseArticle: "Articolo della Base di conoscenza"
        },
        history: {
            descriptionTable: "Trova un report Elite Analytics precedente e ricaricalo senza consumare le ricerche che hai a disposizione. ",
            columns: {
                fileName: "Nome file",
                keywordCount: "Numero di parole chiave",
                reportRunDate: "Data di esecuzione del report"
            }
        },
        landing: {
            title: "Carica la tua lista di parole chiave per identificare quelle con più potenziale",
            description: "Carica fino a 2000 righe di parole chiave Black Box, report Amazon Brand Analytics, parole chiave della Mia Lista o una lista selezionata da te per scoprire metriche chiave Helium 10 che ti aiuteranno a identificare nuove opportunità ogni mese.<br/><br/>Il report includerà Densità del titolo, Volume di ricerca (+Trend), Alto numero di recensioni, Numero medio di recensioni e Paese seller più frequente. ",
            buttonUpload: "Carica report delle parole chiave",
            viewSample: {curiousAbout: "Vuoi capire meglio il report?", view: "Vista", sample: "esempio"},
            keywords: {
                one: "Rimangono {count}/{total} parole chiave mensili",
                other: "Rimangono {count}/{total} parole chiave mensili"
            },
            titleModal: "Report di esempio Elite Analytics",
            videoTitle: "Non sai come formattare il tuo report?",
            videoButton: "Guarda il nostro video tutorial",
            upsell: {
                title: "Limite mensile raggiunto",
                description: "Hai superato il limite di 2000 parole chiave cercate al mese. Puoi vedere i Report sulle parole chiave precedenti tramite il pulsante cronologia in alto a destra su questa schermata.<br/><br/>Rivolgiti al team commerciale per scoprire come aumentare il tuo limite mensile di parole chiave.",
                button: "Contatta le vendite"
            },
            notElite: {
                title: "Sblocca informazioni chiave con Elite Analytics",
                description: "Elite Analytics ti consente di caricare fino a 2.000 righe di parole chiave Black Box, report del Brand Analytics di Amazon, parole chiave della Mia lista o il tuo elenco personalizzato per scoprire le metriche chiave di Helium 10 e individuare ogni mese nuove opportunità.",
                learnMore: "Scopri i Elite",
                subDescription: "Il report includerà le vendite correlate alle parole chiave, la densità del titolo, il volume di ricerca (+ il trend), il numero elevato di recensioni, il numero medio di recensioni e il Paese seller più frequente. Il report ti incuriosisce?",
                sample: "esempio."
            }
        },
        filter: {
            exactTitleMatchProductsCount: {
                title: "Densità del titolo",
                tooltip: "Numero di prodotti in pagina 1 con la parola chiave cercata nel titolo"
            },
            impressionExact30: {
                title: "Volume di ricerca",
                tooltip: "Numero stimato di ricerche di questa frase chiave al mese"
            },
            searchVolumeTrend30: {title: "Trend volume di ricerca", tooltip: "Negli ultimi 30 giorni"},
            productsWithReviewsCount: {
                title: "Alto numero di recensioni",
                tooltip: "Numero di risultati fra i migliori 12 con oltre 1000 recensioni"
            },
            medianReviews: {title: "Numero medio di recensioni", tooltip: "Il numero medio di recensioni dei migliori 12"},
            mostFrequentSellerCountryCode: {
                title: "Paese seller più frequente",
                tooltip: "Paese principale dei seller nella Top 50",
                placeholder: "Non selezionato"
            }
        },
        table: {
            keyword: {title: "Parole chiave"},
            exactTitleMatchProductsCount: {
                title: "Densità del titolo",
                tooltip: "Numero di prodotti in pagina 1 con la parola chiave cercata nel titolo"
            },
            impressionExact30: {
                title: "Volume di ricerca",
                tooltip: "Numero stimato di ricerche di questa frase chiave al mese"
            },
            searchVolumeTrend30: {title: "Trend volume di ricerca", tooltip: "Negli ultimi 30 giorni"},
            productsWithReviewsCount: {
                title: "Alto numero di recensioni",
                tooltip: "Numero di risultati fra i migliori 12 con oltre 1000 recensioni"
            },
            medianReviews: {title: "Recensioni medie", tooltip: "Il numero medio di recensioni dei migliori 12"},
            topSellerCountry: {title: "Paese seller più frequente", tooltip: "Paese principale dei seller nella Top 50"},
            title: {one: "{count} parola chiave", other: "{count} parole chiave"},
            titleSelected: {one: "{count} parola chiave selezionata", other: "{count} parole chiave selezionate"},
            monthlySales: {title: "Vendite per parola chiave", tooltip: "Vendite mensili totali stimate per parola chiave"}
        },
        distributionByCountryModal: {title: "Paese seller più frequente: {keyword}"},
        beta: {marketplaceTooptip: "La Beta include il Marketplace USA."},
        upload: {
            uploadStage: {
                title: "Carica file di report delle parole chiave",
                description: "Carica fino a 2000 righe di parole chiave Black Box, report Amazon Brand Analytics, parole chiave della Mia Lista o il tuo file personalizzato per iniziare a trovare opportunità.",
                fileRequirements: "Requisiti del file",
                list: {item1: "Precompilato con una parola o frase chiave per riga", item2: "Formato file CSV"},
                footer: {
                    part1: "Servono istruzioni aggiuntive? Consulta",
                    part2: "Articolo della Base di conoscenza",
                    part3: "per maggiori dettagli."
                },
                browse: "Sfoglia",
                uploadFile: "Carica file",
                noFileSelected: "Nessun file selezionato"
            }
        },
        tooltips: {
            searchVolume: {
                green: "Il “verde” indica un trend positivo su 30 giorni",
                red: "Il “rosso” indica un trend negativo su 30 giorni"
            },
            highReviewCount: {
                green: "Il “verde” indica che meno di 5 dei migliori 12 risultati hanno oltre 1000 recensioni.",
                yellow: "Il “giallo” indica che da 5 a 6 dei migliori 12 risultati hanno oltre 1000 recensioni.",
                red: "Il “rosso” indica che più di 6 risultati su 12 hanno oltre 1000 recensioni."
            },
            medianReviewCount: {
                green: "Il “verde” indica un numero di recensioni fino a 200.",
                yellow: "Il “giallo” indica un numero di recensioni fra le 200 e le 800.",
                red: "Il “rosso” indica un numero di recensioni oltre le 800."
            }
        }
    }, gr = {
        title: "Black Box",
        description: "Scopri opportunità con la ricerca di prodotti",
        tabs: {
            products: {
                name: "Prodotti",
                description: "Trova un prodotto da vendere valutando prodotti, parole chiave, concorrenza e altro",
                tooltip: "Trova il prodotto più venduto grazie ai filtri più innovativi, per scegliere potenziali prodotti da rivendere."
            },
            keywords: {
                name: "Parole chiave",
                description: "---",
                tooltip: "Ottieni parole chiave popolari impostando diversi filtri. Scegliere le parole chiave giuste aiuta a trovare il prodotto giusto."
            },
            competitors: {
                name: "Concorrenti",
                description: "---",
                tooltip: "Consulta i dati essenziali dei concorrenti: vendite, mercato, marca, seller o listing."
            },
            niche: {
                name: "Nicchia",
                description: "---",
                tooltip: "Trova un segmento di un mercato più ampio definibile con la tua parola chiave specifica."
            },
            productTargeting: {
                name: "Targeting del prodotto",
                description: "---",
                tooltip: 'Ottimizza il targeting dei prodotti consultando diverse fonti: "Acquistati frequentemente insieme", "Consigli Amazon" e "Chi ha acquistato questo articolo ha acquistato anche".'
            },
            eliteAnalytics: {name: "Elite Analytics", description: "Scopri opportunità con la ricerca di prodotti"},
            abaTopSearchTerms: {name: "ABA Top Search Terms"}
        },
        buttons: {
            saveAsFilterPreset: "Salva come filtro predefinito",
            search: "Cerca",
            filterLibrary: "Libreria di filtri",
            createYourOwnPresets: "Crea le tue impostazioni predefinite",
            returnToPreviousVersion: "Torna alla versione precedente",
            restoreLastSearch: "Ripristina l'ultima ricerca",
            addToMyList: "Aggiungi alla mia lista",
            removeFromMyList: "Rimuovi dalla mia lista",
            runInCerebro: "Esegui Cerebro",
            runInListingAnalyzer: "Esegui Listing Analyzer",
            runInListingAnalyzerTooltip: "Seleziona fino a {maxAsins} prodotti per analizzare la qualità dei listing"
        },
        products: {
            filterGroups: {product: "Prodotto", competitors: "Concorrenti", sales: "Vendite"},
            fields: {
                categories: {
                    label: "Categoria e sottocategoria",
                    tooltip: "Categorie di prodotti non controllate disponibili",
                    placeholder: "Seleziona una o più categorie e sottocategorie"
                },
                reviewCount: {
                    label: "Numero di recensioni",
                    tooltip: "Numero totale di recensioni dei clienti",
                    chip: "Numero di recensioni"
                },
                reviewRating: {
                    label: "Valutazione della recensione",
                    tooltip: "Recensioni dei clienti Amazon da scarse (1) a eccezionali (5)"
                },
                salesRank: {
                    label: "Best Seller Rank (BSR)",
                    tooltip: "Classifica assegnata da Amazon in base alle vendite recenti e storiche",
                    chip: "Classifica delle vendite"
                },
                shippingSizeTier: {
                    label: "Dimensioni di spedizione",
                    tooltip: "Dimensioni del prodotto che determinano le spese di spedizione di Logistica di Amazon"
                },
                weight: {
                    label: "Peso (lb)",
                    tooltip: "Peso totale del prodotto e della confezione",
                    chip: "Peso",
                    tableTooltip: "Peso del pacchetto (lb)",
                    unit: "lb"
                },
                fulfillment: {
                    label: "Logistica",
                    tooltip: "Metodo di stoccaggio e spedizione<br/>FDA = Evaso da Amazon<br/>FBM = Evaso dall'esercente<br/>Amazon = Venduto da Amazon ",
                    chip: {title: "Logistica"}
                },
                numberOfImages: {
                    label: "Numero di immagini",
                    tooltip: "Numero di immagini su un listing di prodotto",
                    chip: "Numero di immagini"
                },
                variationCount: {
                    label: "Conteggio varianti",
                    tooltip: "Numero di variazioni del prodotto",
                    chip: "Conteggio varianti"
                },
                titleKeyword: {
                    label: "Parole chiave titolo",
                    tooltip: "Solo ricerca per parola chiave del titolo del prodotto",
                    placeholder: "Es: gonne"
                },
                titleExcludeKeyword: {
                    label: "Escludi parole chiave titolo",
                    tooltip: "Escludi i prodotti che contengono le parole chiave inserite nel titolo (separate da virgole)",
                    chip: "Escludi la parola chiave titolo",
                    placeholder: "Es: rosso, blu"
                },
                numberOfSellers: {
                    label: "Numero di venditori",
                    tooltip: "Numero di sellers attivi",
                    chip: "Numero di venditori"
                },
                brandInclude: {
                    label: "Ricerca marca esatta",
                    tooltip: `Nomi esatti di brand separati da virgole. Se il nome del brand contiene una virgola, metti il nome tra virgolette per ottenere i risultati di ricerca. Esempio: <b>"ABC's LLC"</b>`,
                    placeholder: "Es: Mela",
                    chip: "La marca include"
                },
                brandExclude: {
                    label: "Escludi marchi",
                    tooltip: `Escludi nomi esatti di brand separati da virgole. Se il nome del brand contiene una virgola, metti il nome tra virgolette per ottenere i risultati di ricerca. Esempio: <b>"ABC's LLC"</b>`,
                    chip: "La marca non include",
                    placeholder: "Es: Belkin"
                },
                sellerInclude: {
                    label: "Ricerca seller esatta",
                    tooltip: `Nomi esatti di seller separati da virgole. Se il nome del seller contiene una virgola, metti il nome tra virgolette per ottenere i risultati di ricerca. Esempio: <b>"ABC's LLC"</b>`,
                    chip: "Il Seller include",
                    placeholder: "Es: Anker"
                },
                sellerExclude: {
                    label: "Escludi venditore",
                    tooltip: `Escludi nomi esatti di seller separati da virgole. Se il nome del seller contiene una virgola, metti il nome tra virgolette per ottenere i risultati di ricerca. Esempio: <b>"ABC's LLC"</b>`,
                    chip: "Il Seller non include",
                    placeholder: "Es: Satechi"
                },
                price: {
                    label: "Prezzo",
                    tooltip: "Prezzo a cui è venduto il prodotto",
                    tableTooltip: "Storico dei prezzi con tendenza",
                    priceTooltip: "Prezzo attuale",
                    priceTrendTooltip: "Andamento dei prezzi a 90 giorni",
                    chip: "Prezzo"
                },
                priceChange: {
                    label: "Variazione delle vendite (%)",
                    tooltip: "Variazione percentuale negli ultimi 90 giorni",
                    chip: "Cambio di prezzo"
                },
                monthlySales: {
                    label: "Vendite mensili (unità)",
                    tooltip: "Stima del numero di unità vendute negli ultimi 30 giorni",
                    tableLabel: "Vendite mensili",
                    chip: "Vendite mensili",
                    tableTooltip: "Storico delle vendite mensili con tendenza",
                    salesTooltip: "Vendite mensili (unità)",
                    salesTrendTooltip: "Andamento delle vendite a 90 giorni"
                },
                salesYearOverYear: {
                    label: "Vendite anno su anno (%)",
                    tooltip: "Variazione percentuale negli ultimi 12 mesi",
                    chip: "Vendite anno dopo anno"
                },
                bestSalesPeriod: {
                    label: "Miglior mese di vendita",
                    tooltip: "Mese di calendario in cui un prodotto vede il suo volume di vendite più alto",
                    placeholder: "Inserisci una data",
                    tableLabel: "Miglior periodo di vendita"
                },
                salesToReviews: {
                    label: "Rapporto tra vendite e recensioni",
                    tooltip: "Vendite mensili (unità) / conteggio totale delle recensioni",
                    tableLabel: "Vendite a recensioni",
                    chip: "Vendite a recensioni"
                },
                monthlyRevenue: {
                    label: "Entrate mensili",
                    tooltip: "Stima delle entrate per un prodotto negli ultimi 30 giorni",
                    chip: "Entrate mensili"
                },
                salesChange: {
                    label: "Variazione delle vendite (%)",
                    tooltip: "Variazione percentuale delle vendite mensili negli ultimi 90 giorni",
                    chip: "Variazione delle vendite"
                },
                product: {label: "Prodotto", tooltip: "Tooltip richiesto"},
                categoryBSR: {
                    label: "Categoria BSR",
                    tooltip: "Categoria Best Seller Rank (BSR)",
                    mainCategoryTooltip: "Categoria principale BSR",
                    subcategoryTooltip: "Sottocategoria BSR",
                    subcategoryTemporaryTooltip: "Sottocategoria"
                },
                monthlySalesTable: {
                    label: "Vendite mensili",
                    tooltip: "Stima del numero di unità vendute negli ultimi 30 giorni"
                },
                reviews: {
                    label: "Recensioni",
                    tooltip: "Numero di recensioni con valutazione",
                    numberOfReviewTooltip: "Numero totale di recensioni dei clienti per un prodotto",
                    reviewRatingTooltip: "Valutazione della recensione"
                },
                seller: {
                    label: "Seller",
                    tooltip: "Nome e numero del venditore",
                    sellerNameTooltip: "Nome del venditore",
                    numberOfSellersTooltip: "Numero di sellers attivi"
                },
                lastYearSales: {
                    label: "Vendite dello scorso anno",
                    tooltip: "Vendite dello scorso anno con andamento delle vendite",
                    salesTooltip: "Vendite dello scorso anno (unità)",
                    salesYearOverYearTooltip: "Vendite anno dopo anno"
                },
                shippingDetails: {
                    label: "Dati di spedizione",
                    tooltip: "Taglia di spedizione con dimensioni",
                    productSizeTooltip: "Dimensioni del prodotto che determinano le spese di spedizione di Logistica di Amazon",
                    dimensionsTooltip: "Dimensioni della spedizione (in pollici)"
                },
                storageFee: {label: "Commissioni di stoccaggio", tooltip: "Commissione di stoccaggio (1.000 unità/mese)"},
                "Best Sales Period": {label: "Miglior periodo di vendita", tooltip: "Tooltip richiesto"},
                age: {
                    label: "Età (mese)",
                    tooltip: "Età media del listing per i migliori prodotti",
                    filterLabel: "Età del listing (Mesi)",
                    filterTooltip: "Età del listing in mesi",
                    chip: "Età del listing"
                },
                titleIncludeKeyword: {
                    label: "Parole chiave titolo",
                    tooltip: "Solo ricerca per parola chiave del titolo del prodotto",
                    placeholder: "Es: gonne",
                    chip: "Parola chiave nel titolo"
                },
                category: {
                    label: "Categoria e sottocategoria",
                    tooltip: "Categorie di prodotti non controllate disponibili",
                    placeholder: "Seleziona una o più categorie e sottocategorie",
                    chip: {title: "Categoria", subtitle: "Sottocategoria"}
                },
                reviewsRating: {
                    label: "Valutazione della recensione",
                    tooltip: "Recensioni dei clienti Amazon da scarse (1) a eccezionali (5)",
                    chip: "Valutazione delle recensioni"
                },
                sizeTier: {chip: {title: "Dimensioni di spedizione"}},
                bestMonth: {
                    label: "Miglior mese di vendita",
                    tooltip: "Mese di calendario in cui un prodotto vede il suo volume di vendite più alto",
                    placeholder: "Inserisci una data",
                    chip: "Miglior mese di vendita",
                    tableLabel: "Miglior periodo di vendita",
                    tableTooltip: "Mese di calendario in cui un prodotto vede il suo volume di vendite più alto"
                },
                brand: {label: "Brand", tooltip: "Brand Names"}
            },
            common: {anyCategory: "Qualsiasi categoria", anyCategorySimple: "qualsiasi categoria"},
            filterTabs: {simple: "Semplice", advanced: "Avanzati", advancedTooltip: "Testo richiesto"},
            simple: {
                title: "Rispondi a queste domande per trovare un prodotto",
                subtitle: "Desidero vendere un prodotto...",
                inThe: "Nel",
                marketplaceFor: "mercato per",
                thatNeeds: "che ha bisogno",
                improvementRange: "(intervallo di miglioramento)",
                improvement: "di miglioramento,",
                competitionRange: "(intervallo di concorrenza)",
                whereCompetitionIs: "dove la concorrenza è",
                priceRange: "(intervallo di prezzo)",
                iWantToSellMyProductFor: "Desidero vendere il mio prodotto per",
                monthlyRevenueOptions: "(opzioni di entrate mensili)",
                withMonthlyRevenueOf: "con un entrate mensili di",
                marketplace: "mercato",
                for: "per",
                price: "(intervallo di prezzo)",
                monthlyRevenue: "(opzioni di entrate mensili)"
            },
            advanced: {
                titlePart1: "Trova prodotti su",
                titlePart2: "in grado di soddisfare i tuoi criteri",
                presetsTitle: "Per accelerare la ricerca, usa un filtro predefinito:"
            },
            result: {
                title1: "Prodotti su",
                title2: "in grado di soddisfare i tuoi criteri",
                editFilters: "Modifica filtri",
                titleTable: "Visualizzazione {from}-{to} di {total} elementi",
                titleTableSelected: "Elementi selezionati: {selected} di {total}",
                advanced: "Mostra dettagli del prodotto avanzati"
            },
            chartTitles: {
                bsr: "Best Sellers Rank: {asin}",
                price: "Prezzo: {asin}",
                sales: "Vendite: {asin}",
                reviews: "Recensioni: {asin}",
                review: "Recensioni: {asin}"
            },
            exportTitles: {
                asin: "ASIN",
                title: "Titolo",
                sellerType: "Logistica",
                category: "Categoria",
                bsr: "BSR",
                subcategory: "Sottocategoria",
                subcategoryBsr: "Sottocategoria BSR",
                price: "Prezzo",
                priceChange: "Andamento dei prezzi (90 giorni)",
                monthlySales: "Vendite mensili",
                salesChange: "Andamento delle vendite (90 giorni)",
                monthlyRevenue: "Entrate mensili",
                reviewCount: "Numero di recensioni",
                reviewsRating: "Valutazione delle recensioni",
                bbSeller: "Seller",
                numberOfSellers: "Numero di sellers attivi",
                yearSales: "Vendite dello scorso anno",
                salesYearOverYear: "Vendite anno dopo anno",
                sizeTier: "Taglia",
                width: "Larghezza",
                height: "Altezza",
                length: "Lunghezza",
                weight: "Peso",
                storageFee: "Commissioni di stoccaggio",
                bestMonth: "Miglior periodo di vendita",
                age: "Età (mese)",
                numberOfImages: "Numero di immagini",
                variationCount: "Conteggio varianti",
                salesToReviews: "Vendite a recensioni",
                brand: "Marca"
            },
            chartAxis: {
                bsr: "Classifica delle vendite",
                price: "Prezzo",
                sales: "Vendite",
                reviewCount: "Numero di recensioni",
                rating: "Valutazioni",
                "7DayMovingAverage": "Media mobile di 7 giorni",
                trend: "Tendenza",
                mainCategoryBSR: "Categoria principale BSR",
                subcategoryBSR: "Sottocategoria BSR"
            }
        },
        tabsTitle: "Cerca per:",
        storageFee: {janSept: "gen-set", octDec: "ott-dic"},
        presetFilters: {
            "Product sales increase fast over the last month": {
                title: "Alta crescita",
                description: "Le vendite sono aumentate velocemente nell'ultimo mese"
            },
            "Product selling well but doesn’t have a good rating": {
                title: "Valutazioni basse",
                description: "Il prodotto vende bene ma non ha buone valutazioni"
            },
            "Few product images but high sales": {
                title: "Numero immagini basso",
                description: "Poche immagini prodotto ma vendite alte"
            },
            "Small size but sales well": {title: "Piccolo e leggero", description: "Dimensione piccola ma buone vendite"}
        },
        presetModal: {
            title: {new: "Nome preset del filtro", edit: "Rinomina preset del filtro"},
            name: {label: "Dai un nome univoco al preset", placeholder: "Dai un nome a questo preset"}
        },
        filters: {
            messages: {
                rename: {success: "Filtro rinominato"},
                create: {success: "Filtro preimpostato salvato nella Libreria dei filtri"},
                delete: {success: "Filtro preimpostato eliminato dalla Libreria dei filtri"}
            }
        },
        addToMyList: {
            success: "Prodotti aggiunti correttamente alla Mia Lista",
            warning: "Tutti i prodotti elencati sono già stati aggiunti alla Mia Lista",
            reject: "Impossibile aggiungere prodotti alla Mia Lista"
        },
        upgradeBanner: {text: "Ricerche rimanenti: <b>{uses}</b>", button: "AGGIORNAMENTO PER ILLIMITATO"},
        options: {
            shoppingSize: {
                1: "Piccolo (dimensioni standard)",
                2: "Tamaño estándar (grande)",
                3: "Tamaño grande (pequeño)",
                4: "Medio (oversize)",
                5: "Grande (oversize)",
                6: "Speciale (oversize)"
            },
            fulfillment: {1: "Amazon", 2: "FBA", 3: "FBM"},
            simpleImprovementRange: {1: "un po'", 2: "qualche", 3: "molti"},
            simpleCompetitionRange: {1: "basso", 2: "medio", 3: "alto"},
            simplePrice: {1: "$0-30", 2: "$30-100", 3: "$100+"},
            simpleMonthlyRevenue: {1: "$0-1,000", 2: "$1,000-10,000", 3: "$10,000+"}
        }
    }, br = {cerebro: "Cerebro", magnet: "Magnet", opportunity: "Elite Analytics"}, vr = {
        anythinElse: {
            cerebro: "Mi interessano i Bulk Reports Cerebro",
            blackBox: "Mi interessano i Bulk Reports Black Box"
        }
    }, yr = {title: "I dati sono randomizzati per il tuo piano.", button: "Esegui l'upgrade per i risultati completi"},
    Sr = {day: {one: "giorno", other: "giorni"}, year: {one: "anno", other: "anni"}, allTime: "Tutto il tempo"},
    fr = {moreThan: "più di", lessThan: "inferiore a"}, Ar = {
        downloadCSV: "Scarica il rapporto in CSV",
        downloadXLS: "Scarica XLS",
        downloadPNG: "Scarica l'immagine PNG",
        downloadJPEG: "Scarica l'immagine JPEG"
    }, wr = {
        decline: "Non adesso",
        addToKeywordTracker: "Aggiungi a Keyword Tracker",
        addToMyList: "Aggiungi alla mia lista",
        trackCompetitor: "Traccia concorrente",
        analyzeKeywordsInCerebro: "Analizza le parole chiave su <b>Cerebro</b>",
        runListingAnalyzer: "Esegui <b>Listing Analyzer</b>",
        export: "Esporta"
    }, kr = {
        modal: {
            title: "Connetti il tuo account Seller per ottenere informazioni dettagliate sui dati del Brand Registry di Amazon all'interno di Cerebro",
            sellers: "{number} utenti hanno collegato il proprio Account Seller il mese scorso.",
            text: {
                part1: "Collega in modo sicuro il tuo account Amazon a Helium 10 per ottenere informazioni e strumenti preziosi per la tua attività.",
                part2: "I dati del Brand Registry di Amazon all'interno di Cerebro sono disponibili solo per i venditori iscritti al programma Brand Registry di Amazon.",
                part2New: "I dati del Brand Registry di Amazon all'interno di Cerebro o Magnet sono disponibili solo per i seller iscritti al programma Brand Registry di Amazon."
            },
            acceptButton: "Connettiti ad Amazon",
            titleNew: "Connetti il tuo account Seller per ottenere informazioni dettagliate sui dati del Brand Registry di Amazon all'interno di Cerebro o Magnet"
        }
    }, Tr = {
        modal: {
            title: "La funzione Brand Analytics di Amazon all'interno di Cerebro necessita di Brand Registry",
            text: {
                part1: "Amazon Brand Registry ti consente di rappresentare in modo più accurato il tuo brand, individuare e segnalare violazioni e proteggere la tua proprietà intellettuale.",
                part2: {
                    part1: "È disponibile solo per i venditori iscritti al programma Brand Registry di Amazon. Visita la",
                    button: "pagina dei dettagli del programma di Amazon",
                    part2: "per informazioni sui vantaggi e sui requisiti di idoneità."
                },
                part3: "Scopri come le strategie Helium 10 possono aiutarti a ottenere rapidamente la registrazione del marchio"
            },
            acceptButton: "Per saperne di più",
            titleNew: "Per utilizzare il Brand Analytics di Amazon all'interno di Cerebro o Magnet è necessario iscriversi al programma Brand Registry"
        }
    }, zr = {
        drawer: {
            title: "Amazon Brand Analytics",
            tooltip: "Scopri quali prodotti stanno ottenendo il maggior numero di clic e conversioni su termini di ricerca strategici. Valuta l'impatto delle tue campagne di marketing monitorando le tendenze.",
            chart: {
                title: "Panoramica dei 3 principali ASIN",
                yAxis: {totalRate: "Quota totale", searchFrequencyRank: "Classifica di frequenza di ricerca"},
                legend: {
                    clickedRate: {
                        title: "Quota di clic sui primi 3 ASIN",
                        tooltip: "Somma dei 3 ASIN principali quota click"
                    },
                    conversionRate: {
                        title: "Top 3 ASINs Conv. Quota",
                        tooltip: "Somma dei primi 3 ASIN quota di conversione"
                    },
                    frequencyRank: {
                        title: "Classifica di frequenza di ricerca",
                        tooltip: "Classifica in base alla frequenza di ricerca in tutti i termini di ricerca Amazon per un determinato mercato"
                    }
                },
                noHoveredYet: "Passa il mouse sopra il grafico per vedere i 3 ASIN più cliccati",
                reportingRange: "Intervallo per visualizzare il report"
            },
            top3Asins: {
                title: "I 3 migliori ASIN cliccati",
                asinTitle: "# {number} ASIN cliccato",
                rates: {title: "Quoti", click: "Clicca", conversion: "Conv."}
            },
            tables: {
                fields: {
                    product: {
                        title: "{date} Migliori ASIN cliccati",
                        tooltip: "I 3 ASIN più cliccati in base ai risultati della ricerca nell'intervallo di tempo selezionato"
                    },
                    clickRate: {
                        title: "Quota di clic",
                        tooltip: "Percentuale di clic ricevuti dal prodotto rispetto ai clic totali in base ai risultati della ricerca nell'intervallo di tempo selezionato"
                    },
                    conversionRate: {
                        title: "Quota di conv.",
                        tooltip: "Percentuale di conversioni ottenute dal prodotto rispetto alle conversioni totali in base ai risultati della ricerca nell'intervallo di tempo selezionato."
                    },
                    organicRank: {
                        title: "Posizione organica (media)",
                        tooltip: "[Helium 10 Data] Posizione di ricerca organica rilevata per la/e parola/e chiave per il prodotto analizzato"
                    },
                    sponsoredRankAvg: {
                        title: "Posizione sponsorizzata (media)",
                        tooltip: "[Dati Helium 10] Sponsored Ads ha rilevato l'ultima posizione nella ricerca dei clienti"
                    }
                }, subtotal: "Subtotale"
            }
        },
        calendar: {
            weekly: {label: "Settimanale", info: "Puoi selezionare l'intervallo minimo di 14 giorni."},
            monthly: {label: "Mensile", info: "Puoi selezionare l'intervallo minimo di 2 mesi."},
            quarterly: {label: "Trimestrale", info: "Puoi selezionare l'intervallo minimo di 2 trimestri."}
        },
        clickAndConversionRate: {
            title: "Quota di clic e conversione: {asin}",
            subtitle: "Basato sui dati di Amazon Brand Analytics",
            legend: {clickRate: "Quota di clic", conversionRate: "Quota di conversione"},
            emptyData: "Questo ASIN non si è classificato tra i primi 3 per il periodo di tempo selezionato.",
            period: {
                last30days: "Ultimi 30 giorni",
                last2Months: "Ultimi 2 mesi",
                last6Months: "Ultimi 6 mesi",
                last12Months: "Ultimi 12 mesi"
            }
        },
        period: {
            info: "Puoi selezionare l'intervallo minimo di {number} {period}.",
            periods: {days: "giorni", weeks: "settimane", months: "mesi", quarters: "trimestri"},
            presets: {weekly: "Settimanale", monthly: "Mensile", quarterly: "Trimestrale"}
        },
        filter: {
            clickShare: {
                title: "ABA Top 3 ASINs Quota totale di clic",
                tooltip: "Somma delle quote di clic dei primi 3 ASIN dai dati ABA"
            },
            conversionShare: {
                title: "ABA Top 3 ASINs Quota totale di conv.",
                tooltip: "Somma delle quote conv. dei primi 3 ASIN dai dati ABA"
            },
            searchFrequencyRank: {
                title: "ABA SFR",
                tooltip: "The ranked order of search frequency. Search terms with the same search frequency over the selected time frame will show the same rank."
            }
        },
        table: {
            clickShare: {
                tooltip: {
                    title: "Metriche delle parole chiave, inclusi clic e tassi di conversione per i primi 3 ASIN",
                    restricted: "Sblocca l'analisi della Amazon Brand Analytics e i dati di vendita della parola chiave completi aggiornando il tuo piano a {upgradePlan}. ",
                    noTokens: "È disponibile solo per i seller che hanno collegato il loro account Amazon a Helium 10 e si sono iscritti al programma di Registrazione della Marca di Amazon"
                }
            },
            convShare: {
                tooltip: {
                    title: "Ottieni preziose informazioni sui primi 3 prodotti cliccati per ogni parola chiave",
                    restricted: "Visualizza la classifica storica delle ricerche per Parola chiave aggiornando a {upgradePlan}.",
                    noTokens: "È disponibile solo per i seller che hanno collegato il loro account Amazon a Helium 10 e si sono iscritti al programma di Registrazione della Marca di Amazon"
                }
            }
        }
    }, _r = {today: "Oggi", yesterday: "Ieri", previousDay: "Giorno precedente", lastNDays: "Ultimi {N} giorni"},
    Cr = "Periodo", Pr = {
        tooltipSingle: "Inserisci un ASIN ed esegui una ricerca sul Listing Analyzer.",
        tooltipMultiple: "Inserisci i primi {maxAsins} ASIN ed esegui una ricerca sul Listing Analyzer"
    }, Rr = {
        title: "Tendenza cronologica",
        allProducts: "Tutti i prodotti",
        tableTitleText: {selectedDate: "Tendenza cronologica: {date}"},
        keywordType: {
            organicSearch: "Ricerca organica",
            sponsoredProduct: "Prodotto sponsorizzato",
            amazonRecommended: "Raccomandato da Amazon"
        },
        distributionBy: {
            keywordType: {
                switch: "Tipo di parola chiave",
                keywordsCount: {
                    title: "Numero totale di parole chiave per tipo",
                    tooltip: "Visualizza la distribuzione di prodotti sponsorizzati, ricerca organica e prodotti Amazon consigliati negli ultimi 24 mesi per numero di parole chiave. Inserisci un mese per visualizzare il tipo di parole chiave selezionato."
                },
                searchVolume: {
                    title: "Volume di ricerca delle parole chiave per tipo",
                    tooltip: "Visualizza la distribuzione di parole chiave organiche, di prodotti sponsorizzati e consigliate da Amazon negli ultimi 24 mesi per volume di ricerca. Inserisci un mese per visualizzare il tipo di parole chiave selezionato."
                }
            },
            products: {
                switch: "Prodotti",
                keywordsCount: {
                    title: "Distribuzione delle parole chiave tra i prodotti",
                    tooltip: "Visualizza la distribuzione di parole chiave degli ultimi 24 mesi con le parole chiave totali. Inserisci un mese per visualizzare la distribuzione delle parole chiave tra i prodotti selezionata."
                },
                searchVolume: {
                    title: "Volume di ricerca relativo alla distribuzione delle parole chiave tra i prodotti",
                    tooltip: "Visualizza il volume di ricerca relativo alla distribuzione delle parole chiave tra i prodotti degli ultimi 24 mesi. Inserisci un mese per visualizzare la distribuzione delle parole chiave tra i prodotti selezionata."
                }
            }
        },
        searchVolumeKeywordsCountSwitch: {
            keywordsCount: {title: "PC", tooltip: "Numero di parole chiave"},
            searchVolume: {title: "VR", tooltip: "Volume di ricerca"}
        },
        clearHistoricalTrendFilters: {
            button: "Cancella filtri di tendenza cronologica",
            tooltip: "Visualizza le parole chiave totali e le informazioni sul tipo di parole chiave relative agli ultimi mesi."
        },
        legend: {
            other: "Altro", byTypes: {
                sponsoredProduct: {title: "Prodotto sponsorizzato"},
                organicSearch: {title: "Ricerca organica"},
                amazonRecommended: {
                    title: "Raccomandato da Amazon",
                    tooltips: {
                        keywordsCount: "Il conteggio delle parole chiave per Amazon Recommended è disponibile da settembre 2022 in poi.",
                        searchVolume: "Il volume di ricerca per Amazon Recommended è disponibile da settembre 2022 in poi."
                    }
                },
                sponsored: {title: "Prodotto sponsorizzato", abbreviation: "SP"},
                organic: {title: "Organico", abbreviation: "O"},
                "section-amazons-choice": {
                    title: "Scelta Amazon",
                    abbreviation: "AC",
                    tooltips: {
                        keywordsCount: "Il conteggio delle parole chiave per Amazon Recommended è disponibile da settembre 2022 in poi.",
                        searchVolume: "Il volume di ricerca per Amazon Recommended è disponibile da settembre 2022 in poi."
                    }
                },
                "section-highly-rated": {title: "Altamente valutato", abbreviation: "HR"},
                "section-sponsored-brand-header": {title: "Intestazione del marchio sponsorizzato", abbreviation: "SBH"},
                "section-sponsored-video": {title: "Video del marchio sponsorizzato", abbreviation: "SBV"},
                "section-editorial-recommendations": {title: "Raccomandazioni editoriali", abbreviation: "ER"},
                "top-rated-from-our-brand": {title: "I più votati dal nostro marchio", abbreviation: "TRB"},
                "section-trending-now": {title: "In tendenza ora", abbreviation: "TN"},
                ppc: {title: "Amazon Consigliato", abbreviation: "AR"}
            }, keywordTypes: "Tipi di parole chiave", byCategories: {all: "Tutto", organic: "Organico", paid: "Pagato"}
        },
        periodRangeSelect: {
            last3: "Ultimi 3 mesi",
            last6: "Ultimi 6 mesi",
            last12: "Ultimi 12 mesi",
            last24: "Ultimi 24 mesi"
        },
        basedOn: "Basato su {date}",
        upgradeTooltip: {
            title: "Il Trend Storico è disponibile solo su Elite",
            text: "Il piano Elite ti consente di visualizzare le Parole chiave per tipo e la distribuzione delle Parole chiave tra i prodotti negli ultimi 24 mesi.",
            dismiss: "Dismiss",
            learnMore: "Scopri di più su Elite",
            upgradeTo: "Esegui l'upgrade a <br/>{upgradePlan}"
        },
        searchesRemain: "ricerche rimaste",
        dailySearches: "Ricerche giornaliere",
        uses: {tooltip: {diamond: "Ogni ricerca unica di ASIN o selezione di un mese diverso con 'Mostra Tendenza Storica' conta come un utilizzo.<br/><br/>Le ripetizioni nella stessa sessione non contano extra.<br/><br/>Il tuo limite giornaliero è di {value} utilizzi. Se raggiungi il limite, si resetterà il giorno successivo."}},
        notifications: {
            dailyLimitReached: "Hai superato il limite giornaliero di ricerche storiche. Per favore riprova domani.",
            willExceedLimit: {
                title: "Ricerche rimaste insufficienti",
                text: "Stai tentando di eseguire una ricerca che richiede almeno {productsCount} ricerche"
            }
        },
        upgradeModal: {
            title: "Sblocca più funzionalità con {upgradePlan}",
            subtitle: "Attira più traffico verso le tue inserzioni con soluzioni complete per la ricerca di parole chiave e analisi avanzate",
            declineButton: "Non adesso",
            acceptButton: "Esegui l'upgrade a {upgradePlan}",
            priceMo: "${price}/mese",
            searchesPerDay: "{uses} ricerche / giorno",
            features: {
                amazonBrandAnalytics: {
                    title: "Amazon Brand Analytics",
                    subtitle: "I venditori registrati della Marca possono monitorare le tendenze e prendere decisioni informate basate sulla popolarità della parola chiave e sui dati storici delle vendite"
                },
                competitorTracking: {
                    title: "Monitoraggio dei Concorrenti",
                    subtitle: "Sfrutta gli avvisi automatici quotidiani per rimanere aggiornato sui prezzi dei tuoi concorrenti, le tendenze delle vendite, i punteggi di qualità dell'elenco e altro ancora."
                },
                keywordSalesData: {
                    title: "Dati di Vendite Parola chiave",
                    subtitle: "Ottieni preziose informazioni sui dati storici delle parole chiave e visualizza quali delle tue parole chiave stanno generando più vendite in modo da poterle targetizzare di conseguenza."
                },
                insightsDashboard: {
                    title: "Insights Dashboard",
                    subtitle: "Scopri automaticamente potenziali problemi critici con la tua attività grazie a intuizioni personalizzate. Prioritizza le azioni in base all'impatto aziendale."
                }
            },
            plans: {
                Helium10_ALaCarte: "Alacarte",
                Helium10_ALaCarteAnnual: "",
                Helium10_Enterprise: "Enterprise",
                Helium10_Elite: "Elite",
                Helium10_Elite_399: "Elite",
                Helium10_Elite_Quarter: "Elite",
                Helium10_Elite_Annual: "Elite",
                Helium10_Supercharge_Your_Brand: "Supercharge Your Brand",
                Helium10_Supercharge_Your_Brand_Annual: "Supercharge Your Brand",
                Helium10_Diamond: "Diamond",
                Helium10_Diamond_199: "Diamond",
                Helium10_DiamondAnnual: "Diamond",
                Helium10_DiamondAnnual_1999: "Diamond",
                Helium10_Diamond_249: "Diamond",
                Helium10_DiamondAnnual_2499: "Diamond",
                Helium10_Professional_Cn: "Professional",
                Helium10_Professional_Cn_Annual: "Professional",
                Helium10_Scale_Your_Business: "Diamond",
                Helium10_Scale_Your_Business_Annual: "Diamond",
                Helium10_Adtomic_And_Scale_Your_Business_Bundle: "Diamond",
                Helium10_Adtomic_And_Scale_Your_Business_Bundle_Annual: "Diamond",
                Helium10_Platinum: "Platinum",
                Helium10_Platinum_99: "Platinum",
                Helium10_PlatinumAnnual: "Platinum",
                Helium10_PlatinumAnnual_999: "Platinum",
                Helium10_Platinum_FastAction: "Platinum",
                Helium10_Entrepreneur_Cn: "Entrepreneur",
                Helium10_Entrepreneur_Cn_Annual: "Entrepreneur",
                Helium10_Start_Your_Business: "Platinum",
                Helium10_Start_Your_Business_Annual: "Platinum",
                Helium10_Gold: "Platinum",
                Helium10_GoldAnnual: "Platinum",
                Helium10_Starter: "Starter",
                Helium10_Starter_39: "Starter",
                Helium10_StarterAnnual: "Starter",
                Helium10_StarterAnnual_339: "Starter",
                Helium10_Explorer_Cn: "Explorer",
                Explorer_Cn_Annual: "Explorer",
                Helium10_Free: "Free"
            }
        },
        subtitle: 'To view historical keyword ranks and search volumes in Cerebro results, simply click on a month in the graph below and then click "apply filters."',
        upgradeTooltipNew: {
            title: "Tendenza cronologica",
            text: "Explore seasonality trends over 24 months and drill into a specific month. Refine your results via an interactive chart to drill into historical rank, search volume, and sales."
        },
        bannerTitle: "Sneak peak: Historical Trends feature. Upgrade for interactive graphs and explore keyword distribution by type or product."
    }, Br = {
        modal: {header: {title: "Offerta PPC:", subtitle: "Helium 10 Offerta PPC consigliata"}},
        filter: {
            suggestedPPC: {
                title: "Offerta PPC consigliata",
                tooltipAmazon: "L'offerta suggerita e l'intervallo di offerta vengono calcolati in base a un gruppo di offerte vincenti per annunci simili ai tuoi. Puoi scegliere di usare l'offerta suggerita oppure una qualsiasi altra offerta interna o esterna all'intervallo di offerta."
            }
        },
        table: {
            suggestedPPC: {
                title: "Offerta PPC consigliata",
                titleLocked: "Consigli. <br/> Offerta PPC",
                tooltipAmazon: "L'offerta suggerita e l'intervallo di offerta vengono calcolati in base a un gruppo di offerte vincenti per annunci simili ai tuoi. Puoi scegliere di usare l'offerta suggerita oppure una qualsiasi altra offerta interna o esterna all'intervallo di offerta.",
                tooltipAmazonForValue: "La maggior parte degli annunci sono aste vincenti per offerte tra {ppcFrom} e {ppcTo}. Per questa parola chiave o gruppo di annunci, suggeriamo un'offerta pari a {ppc}. Nelle aste, aumentare il valore dell'offerta può rendere i tuoi annunci più competitivi."
            },
            suggestedPPCExport: {title: "H10 PPC Consigli. Offerta"},
            suggestedPPCMinExport: {title: "H10 PPC Consigli. Offerta minima"},
            suggestedPPCMaxExport: {title: "H10 PPC Consigli. Offerta massima"}
        }
    },
    Hr = {cerebro: {toolTip: "I filtri sono utili per restringere i risultati e trovare le parole chiave più rilevanti per la tua ricerca."}},
    Nr = {chip: "Diamond", learnMore: "Scopri di più", upgradeNow: "Aggiorna ora"}, xr = {
        landing: {
            new: {
                title: {
                    available_true: "Quickly Identify Q4 Keywords",
                    available_false: "Unlock Q4 Keywords at the Diamond Level"
                },
                boldText: {
                    available_true: "Optimize year-end listings with preloaded {year} search volume metrics to identify past and present trends.",
                    available_false: "Optimize year-end listings with preloaded {year} search volume metrics to identify past and present trends at the Diamond level."
                },
                text: "Ready to uncover hidden seasonal trends? Compare current and historical keyword distribution, sponsored or organic rank, and analyze sales over the past two years.",
                watchButton: {
                    available_true: "Watch how to boost end of year sales.",
                    available_false: "Guarda il video sulla strategia"
                }
            },
            old: {
                title: "Search specific products from Amazon and find their top ranking keywords",
                text: "Leverage your competitors’ keyword ranking strategy to improve your own listing. You can also use Cerebro to gauge the most effective keywords for your product on Amazon, optimize your product listing to boost sales, and keep competitive rates on your products. Cerebro is key in successfully launching new products and bringing more awareness to your brand.",
                text2: "Non sai come iniziare ad usare Cerebro?",
                watchButton: "Watch our introductory video."
            }
        },
        banner: {
            title: "<b>Optimize December Sales:</b> Compare {year} Search Volume or Explore Seasonal Trends.",
            button: "Guarda il video sulla strategia"
        },
        filter: {
            title: "Compare Q4 2022 Historical Trend Filters",
            badge: "Strategie a Tempo Limitato",
            text: "For a limited time, quickly identify low ranking keywords and consider updating your listing or PPC campaign to boost Q4 sales."
        },
        upgradeTooltip: {
            title: "Q4 Prep Strategies",
            text: "Compare current keyword search volume to last year's data to view seasonal traffic increases."
        },
        tableSettings: {tooltip: "View historical <b>October and November {year} Search Volume</b> by customizing your table settings."},
        fields: {
            searchVolume: {
                filter: {
                    title: "{month} Search Volume",
                    tooltip: "Numero stimato di volte in cui questa parola chiave viene cercata mensilmente."
                },
                table: {
                    title: "{month}<br/>Search Volume",
                    tooltip: "Explore seasonality {node_0} and pinpoint a specific month of interest. Refine your results using an interactive chart to delve into historical rank, search volume, and sales data.",
                    tooltipNode: "trends over the past 24 months"
                },
                limited: {tooltip: "Compare current keyword search volume to last year's data to identify seasonal traffic increases."}
            }
        }
    }, Ir = {
        presetsTitle: "Per accelerare la ricerca, usa un filtro predefinito:",
        emptyText: "No available presets",
        buttons: {saveAsFilterPreset: "Salva come filtro predefinito", filterLibrary: "Libreria di filtri"},
        editModal: {
            title: {new: "Nome preset del filtro", edit: "Rinomina preset del filtro"},
            name: {label: "Dai un nome univoco al preset", placeholder: "Dai un nome a questo preset"}
        },
        staticPresetNames: {
            "Top Keywords": {
                title: "Top Parole chiave",
                description: "Principali parole chiave usate dalla concorrenza e con un volume di ricerca notevole"
            },
            "Opportunity Keywords": {
                title: "Parole chiave di opportunità",
                description: "Keywords that create opportunity to calculate your rank using activity, rank and search volume of the competitor"
            },
            "Product sales increase fast over the last month": {
                title: "Alta crescita",
                description: "Le vendite sono aumentate velocemente nell'ultimo mese"
            },
            "Product selling well but doesn’t have a good rating": {
                title: "Valutazioni basse",
                description: "Il prodotto vende bene ma non ha buone valutazioni"
            },
            "Few product images but high sales": {
                title: "Numero immagini basso",
                description: "Poche immagini prodotto ma vendite alte"
            },
            "Small size but sales well": {title: "Piccolo e leggero", description: "Dimensione piccola ma buone vendite"},
            "Dominant Demand": {title: "Dominant Demand"},
            "Growth Opportunities": {title: "Growth Opportunities"},
            "Emerging Contenders": {title: "Emerging Contenders"},
            "Conversion Pioneers": {title: "Conversion Pioneers"}
        },
        messages: {
            rename: {success: "Preset filter is renamed"},
            create: {success: "Filtro preimpostato salvato nella Libreria dei filtri"},
            delete: {success: "Filtro preimpostato eliminato dalla Libreria dei filtri"}
        },
        tooltips: {youAlreadyHavePresetWithSameSettings: 'You already have preset <b>"{name}"</b> with same settings'}
    }, Mr = {
        0: "Gen",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "Mag",
        5: "Giugno",
        6: "Luglio",
        7: "Ago",
        8: "Set",
        9: "Ott",
        10: "Nov",
        11: "Dic"
    }, Fr = {
        common: {week: "Week"},
        marketplaceAndPeriodSelectors: {
            text1: "View the Amazon Brand Analytics Report on",
            text2: "during the",
            periodTypeOptions: {Weekly: "Week of", Monthly: "Month of"}
        },
        banners: {
            start: {
                title: "ABA Top Search Terms",
                text: "Tailored for <b>brand-registered</b> Amazon sellers. This exclusive feature in Blackbox goes beyond traditional analysis, offering advanced keyword discovery, trend-spotting, and competitive benchmarking unique to Helium 10. Harness the power of unique data algorithms to identify untapped markets and optimize your listings like never before.",
                videoButton: "Guarda video",
                dismiss: "Dismiss"
            },
            unlock: {
                title: "Unlock ABA Top Search Terms",
                text: "Exclusively for Diamond subscribers with registered brands: Unleash the power of Amazon Brand Analytics! Dive into top-performing ASINs, compare click shares and conversion rates, and uncover fresh product opportunities by leveraging elite keyword insights. Elevate your product discovery journey today!"
            }
        },
        noToken: {
            title: "Connect your Seller Account for insights into Amazon Brand Registry data",
            subtitle: "To view the ABA Top Search Terms data, you’ll need at least one Amazon Seller account connected to Helium 10.",
            text: "7,054 users connected their Seller Account last month.<br/><br/>Securely connect your Amazon account to Helium 10 to unlock powerful tools and insights for your business.<br/><br/>Amazon Brand Registry data within Black Box, Cerebro or Magnet is only available to sellers who are enrolled in Amazon’s Brand Registry program.",
            note: "Sappiamo quanto sia importante la sicurezza dei dati per i nostri clienti. Promettiamo di non condividere o vendere mai i tuoi dati e di mantenere i più elevati standard di sicurezza."
        },
        noABAToken: {
            title: "Final step: Unlock Powerful Insights with Amazon Brand Registry!",
            text: "Access Exclusive ABA Top Search Terms & Safeguard Your Brand<br/><br/>Amazon Brand Registry doesn’t only secure your intellectual property but also unlocks robust insights with Amazon Brand Analytics. Protect your products, monitor violations, and leverage pivotal data to elevate your sales strategy, exclusively available to registered brands.<br/><br/>Discover comprehensive benefits and eligibility criteria directly from Amazon's Program Details page. Also, navigate through the quick and strategic path to Brand Registration with Helium 10's unique strategies."
        },
        buttons: {
            upgradeTo: "Esegui l'upgrade a {upgradePlan}",
            connectToAmazon: "Connettiti ad Amazon",
            viewABADetails: "View Amazon’s Program Details Page",
            learnMore: "Scopri di più",
            advancedSettings: "Impostazioni avanzate",
            apply: "Applica",
            runInMagnet: "Run in Magnet",
            addToKeywordTracker: "Aggiungi a Keyword Tracker",
            addToMyList: "Aggiungi alla mia lista"
        },
        summary: {
            title: "ABA Keyword Summary",
            metricsTitle: "Distribuzione delle parole chiave",
            metrics: {
                totalKeywords: {title: "Parole chiave totali"},
                top3AsinsTotalMonthlyUnitSales: {
                    title: "Top 3 ASINs Total<br/>Monthly Unit Sales",
                    tooltip: "Total sales of the top three ASINs in your filtered results"
                },
                top3AsinsTotalMonthlyRevenue: {
                    title: "Top 3 ASINs Total<br/>Monthly Revenue",
                    tooltip: "Total revenue generated by the top three ASINs in your filtered results"
                },
                avgClickShare: {
                    title: "Avg. Click Share",
                    tooltip: "Average clicks share for the products shown based on your filter criteria"
                },
                avgConversionShare: {
                    title: "Avg. Conv. Share",
                    tooltip: "Average conversion share for the products shown based on your filter criteria"
                }
            }
        },
        tableTitle: {
            common: {
                one: "{value} Filtered Keyword based on date range",
                other: "{value} Filtered Keywords based on date range"
            }, selected: {one: "{value} Keyword selected", other: "{value} Keywords selected"}
        },
        filter: {
            searchFrequencyRankTrend: {label: "Search Frequency Rank Trend", tooltip: "Over the past week or month"},
            clickShareAsin: {label: "Quota di clic"},
            conversionShareAsin: {label: "Quota di conv."},
            numberOfAsins: {placeholder: "Number of ASINs"},
            mustBe: {placeholder: "Must be"},
            advancedInteraction: {and: "And", or: "Or"},
            keywordOrAsins: {
                placeholder: {
                    one: "Enter up to {maxAsins} product ASINs or {maxKeywords} keyword phrase",
                    other: "Enter up to {maxAsins} product ASINs or {maxKeywords} keyword phrase"
                }, needAsin: "Ti serve uno ASIN? Prova uno di queste:", needKeyword: "Need a keyword? Try one of these:"
            },
            averageMonthlyAge: {
                label: "Top 3 Clicked ASINs Monthly Average Age",
                tooltip: " Average of top 3 clicked ASINs age"
            },
            totalMonthlySales: {
                label: "Top 3 Clicked ASINs Total Monthly Sales",
                tooltip: "Total of top 3 clicked ASINs monthly sales"
            },
            totalMonthlyRevenue: {
                label: "Top 3 Clicked ASINs Total Monthly Revenue",
                tooltip: "Total of top 3 clicked ASINs monthly revenue"
            },
            totalReviewCount: {
                label: "Top 3 Clicked ASINs Total Review Count",
                tooltip: "Total of top 3 clicked ASINs review count"
            },
            averageRating: {label: "Top 3 Clicked ASINs Average Rating", tooltip: "Average of top 3 clicked ASINs rating"}
        },
        columns: {
            phrase: {
                title: "Frase chiave",
                tooltip: "Parola chiave o frase utilizzata dai clienti in cerca di un prodotto"
            },
            searchVolume: {
                title: "Volume di ricerca",
                tooltip: "Numero stimato di volte in cui questa parola chiave viene cercata mensilmente.",
                trend: {title: "Search Volume Trend (%)"}
            },
            searchFrequencyRank: {
                title: "ABA SFR",
                tooltip: {
                    Monthly: "Monthly Search Frequency Rank Trend, (compare with last month)",
                    Weekly: "Weekly Search Frequency Rank Trend, (compare with last week)"
                },
                trend: {title: "Search Frequency Rank Trend (%)"}
            },
            totalClickShareAsin: {
                title: "Top 3 ASINs Total Click Share",
                tooltip: "Somma delle quote di clic dei primi 3 ASIN dai dati ABA",
                trend: {title: "Top 3 ASINs Total Click Share Trend"}
            },
            totalConversionShareAsin: {
                title: "Top 3 ASINs Total Conv. Share",
                tooltip: "Somma delle quote conv. dei primi 3 ASIN dai dati ABA",
                trend: {title: "Top 3 ASINs Total Conv. Share Trend"}
            },
            topNAsin: {title: "Top {value} ASIN", export: {title: "Top {value} Title", imageUrl: "Top {value} Image URL"}},
            clickShareAsinN: {
                title: "Top {value} ASIN Click Share",
                tooltip: "Top {value} ASIN click share from ABA Data",
                trend: {title: "Top {value} ASIN Click Share Trend"}
            },
            conversionShareAsinN: {
                title: "Top {value} ASIN Conv. Share",
                tooltip: "Top {value} ASIN conv. share from ABA Data",
                trend: {title: "Top {value} ASIN Conv. Share Trend"}
            },
            averageMonthlyAge: {
                title: "Top 3 Clicked ASINs Monthly Average Age",
                tooltip: "Average of top 3 clicked ASINs age"
            },
            totalSalesAsin: {
                title: "Top 3 ASINs Total Monthly Sales",
                tooltip: "Total of top 3 clicked ASINs monthly sales"
            },
            totalRevenueAsin: {
                title: "Top 3 ASINs Total Monthly Revenue",
                tooltip: "Total of top 3 clicked ASINs monthly revenue"
            },
            totalReviewCountAsin: {
                title: "Top 3 ASINs Total Review Count",
                tooltip: "Total of top 3 clicked ASINs review count"
            },
            averageRatingAsin: {title: "Top 3 ASIN Total Average Rating", tooltip: "Average of top 3 clicked ASINs rating"},
            exactTitleMatchProductsCount: {
                title: "Densità del titolo",
                tooltip: "Numero di prodotti in pagina 1 con la parola chiave cercata nel titolo"
            },
            resultsNumber: {
                title: "Prodotti concorrenti",
                tooltip: "Numero totale di prodotti restituiti nella ricerca di un cliente utilizzando questa parola chiave/frase"
            },
            brands: {
                title: "Top 3 Brands",
                tooltip: "The top 3 brands generating the most results for the search term",
                brand: {title: "Brand {value}"}
            },
            categories: {
                title: "Top 3 Categories",
                tooltip: "The top 3 categories generating the most results for the search term.",
                category: {title: "Category {value}"}
            },
            monthlySales: {
                title: "Vendite per parola chiave",
                tooltip: "Numero stimato di vendite mensili (in numero di unità) attribuite a ogni parola chiave"
            }
        },
        notifications: {invalidAsins: {one: "Invalid ASIN: {asins}", other: "Invalid ASINs: {asins}"}},
        advFilterTooltip: {
            asins: "<b>ASINs (1-3)</b>: Number of ASINs meeting your criteria.",
            operators: {
                title: "<b>Operators</b>:",
                list: {
                    more: '">" = Greater than',
                    moreOrEqual: '">=" = At least',
                    equal: '"=" = Exactly',
                    less: '"<" = Less than',
                    lessOrEqual: '"<=" = At most'
                }
            },
            clickShare: "<b>Click Share %</b>: Set your desired Click Share range.",
            conversionShare: "<b>Conversion Share %</b>: Set your Conversion Share range.",
            andOr: "<b>AND/OR</b>: Both conditions met (AND) or at least one met (OR).",
            example: "Esempio: ",
            exampleText: "1 ASIN with >40% Click Share AND <5% Conversion Share shows products popularly clicked but rarely bought."
        },
        noData: "Non sono disponibili dati basati sul tuo attuale intervallo di date o filtri. Prova a regolarli per ottenere più risultati."
    }, Dr = {modal: {title: "Classifica frequenza di ricerca: {phrase}"}, legend: "Classifica frequenza di ricerca"}, Er = {
        1: "Piccolo (dimensioni standard)",
        2: "Tamaño estándar (grande)",
        3: "Tamaño grande (pequeño)",
        4: "Medio (oversize)",
        5: "Grande (oversize)",
        6: "Speciale (oversize)",
        7: "Busta",
        8: "Piccolo e leggero",
        9: "Lettera piccola",
        10: "Lettera grande",
        11: "Lettera extra large",
        12: "Busta piccola",
        13: "Busta standard",
        14: "Busta grande",
        15: "Pacco standard",
        16: "Piccolo",
        17: "Dimensioni standard",
        18: "Oversize",
        19: "Standard Oversize",
        20: "Pesante e ingombrante",
        21: "Supersize",
        22: "Busta extra grande",
        23: "Pacco piccolo",
        24: "Large bulky",
        25: "Extra-large 0 to 50 lb",
        26: "Extra-large 50+ to 70 lb",
        27: "Extra-large 70+ to 150 lb",
        28: "Extra-large 150+ lb",
        "-1": "N/A"
    }, qr = {
        common: Xa,
        historyTitle: Za,
        fetchingData: Ja,
        landing: er,
        table: tr,
        cerebro: ar,
        walmartSearch: rr,
        export: {
            button: "Esporta i dati",
            options: {
                csv: "...come file CSV",
                xlsx: "...come file XLSX",
                frankenstein: "...in Frankenstein",
                clipboard: "copia negli Appunti",
                eliteAnalyticsCSV: "CSV Elite Analytics",
                eliteAnalyticsExcel: "Excel Elite Analytics",
                eliteAnalyticsCSVWithUpload: "Carica + CSV Elite Analytics",
                eliteAnalyticsExcelWithUpload: "Carica + Excel Elite Analytics"
            }
        },
        createNewFolder: or,
        errors: ir,
        magnet: nr,
        magnetChart: lr,
        searchedBefore: sr,
        noDataAvailable: dr,
        upgradePlan: ur,
        copyButton: cr,
        example: mr,
        errorCodes: pr,
        opportunity: hr,
        blackBox: gr,
        projectNames: br,
        bulkReport: vr,
        randomizationText: yr,
        dateRanges: Sr,
        comparison: fr,
        highchart: Ar,
        buttons: wr,
        amazonToken: kr,
        amazonBrandRegistry: Tr,
        abad: zr,
        periodPresets: _r,
        periodsPlaceholder: Cr,
        runListingAnalyzer: Pr,
        historicalData: Rr,
        ppc: Br,
        experiments: Hr,
        upgradeToDiamondTooltip: Nr,
        cerebroSeasonal: xr,
        filterPresets: Ir,
        months: Mr,
        abaTopSearchTerms: Fr,
        searchFrequencyRank: Dr,
        sizeTier: Er
    }, Vr = {
        close: "关闭",
        cancel: "取消",
        clear: "清除",
        serverError: "服务器错误！",
        na: "不可用",
        delete: "删除",
        edit: "编辑",
        save: "保存",
        valueOfTotal: "共 {total} 个，{value} 个",
        filters: "筛选器",
        week: "Week",
        noData: "无数据"
    }, Kr = "记录", Lr = "提取数据", Wr = {notSure: {cerebro: "开始学习Cerebro?", magnet: "开始学习Magnet？"}},
    Ur = {scrapedDate: {lessThan7Days: "< 7天", between7And30Days: "7 - 30天", moreThan30Days: "> 30天"}}, Or = {
        title: "Cerebro",
        description: "最多输入 {maxAsins} 个产品标识符找到其表现最佳的关键词。",
        learn: "了解",
        learnTooltip: "观看视频并阅读文档以帮助您迅速掌握Cerebro",
        history: {
            title: "历史记录",
            titleTable: {other: "{count}个先前的搜索"},
            titleTableSelected: {other: "已选择 {count} 个先前的搜索"},
            descriptionTable: "找到先前的 Cerebro 搜索并重新加载，而不使用您的配额。",
            tooltip: "查看您以前的搜索并重新加载结果"
        },
        inputPlaceholder: "最多输入 {maxAsins} 个产品ASIN",
        upgradeForMultiSearch: "多产品搜索升级",
        getKeywords: "获取关键词",
        excludeVariations: "排除变体",
        excludeVariationsTooltipAmazon: "仅包括与输入的ASIN相关联的关键词",
        excludeVariationsTooltipWalmart: "仅包括与输入的产品ID相关联的关键词",
        landing: {
            title: "搜索 {market}站点的特定产品并且查找相关的高排名的关键词",
            description: "利用竞品关键词排名策略优化您自己的Listing。还可以使用 Cerebro 评估在 {market} 站点对您的产品最有效的关键词，优化您的产品Listing以提高销售额，并保持产品的价格竞争力。Cerebro 是成功推出新产品和提高品牌知名度的关键。",
            videoTitle: "开始学习？观看此处 3 分钟视频。",
            videoButton: "观看视频",
            bulkReport: "批量报告",
            whereWalmartIDs: "哪里可以查到Walmart产品ID?",
            whereWalmartIDsTitle: "哪里可以查到 Walmart产品ID?",
            whereWalmartIDsText: `<p>可以在 walmart.com 上对应产品页面的URL内查找到 Walmart 产品 ID。</p>
      <p>比如，下面 URL 中 Walmart 产品 ID 是 <b>134258560</b>。</p>
      <p>https://www.walmart.com/ip/Petstages-Latex-Free-Chew-Dog-Squeaky-Toy-Assorted-Large/<b>134258560</b>?wpa_bd=&wpa_pg_seller_id=...wpa_bucket=__bkt__</p>`
        },
        getCompetitors: {
            button: "获取竞品信息",
            description: "在搜索中查找并添加竞品以进行比较。这些产品的数据将显示在标为“竞品”的其他表格列中。",
            count: "最多再添加 {canMoreSelect}个产品",
            addCompetitors: "添加竞品",
            addWords: "添加词",
            deleteAll: "删除全部",
            tooltip: "从一系列竞争对手中进行选择以进行多产品分析"
        },
        commonWords: {
            button: "常用词",
            tableTitle: {other: "{count}个常用的词"},
            titleTableSelected: {other: "选择了{count}个常用词"},
            word: "单词",
            tableDescription: "确定要从搜索结果中排除的常用词。下表中的所有词在任何时候都不会出现在您的 {project} 搜索结果中。",
            addDescription: "输入要从搜索结果中删除的词（每行 1 个）。",
            removeSpecialCharacters: "删除特殊字符",
            removeSpecialCharactersTooltip: "删除 .,?!&*%$@# 等",
            addCommonWords: "添加至常用词",
            deleteAllQuestion: "确定要删除全部常用词吗？",
            deleteAllConfirm: "是，删除全部",
            tooltip: "添加常用词以删除那些对你的搜索并不独特的词"
        },
        deletedWords: {
            button: "查看删除的词 ({number})",
            title: "删除的词",
            text: "这些是您从搜索结果中手动删除的词。",
            return: "返回结果",
            returnToResults: "返回结果",
            columnKeyword: "关键词",
            tableTitle: {other: "{count}个已删除的关键词"},
            tableTitleSelected: {other: "选择了{count}个已删除的关键词"}
        },
        filter: {
            title: "筛选器",
            showMore: "显示更多",
            showLess: "显示更少",
            clear: "清除",
            applyFilters: "应用筛选条件",
            wordCount: "字数",
            wordCountTooltip: "搜索词组中的关键词数量",
            searchVolume: "搜索量",
            searchVolumeTooltip: "每月搜索此关键词词组的估算次数。",
            organicRank: "自然排名",
            organicRankTooltip: "所分析产品在此关键词搜索结果中的自然排名",
            matchType: "匹配类型",
            matchTypeTooltip: "关键词来源",
            showPhrasesContain: "包含以下内容的短语",
            showPhrasesContainPlaceholder: "例如：红色连衣裙",
            showPhrasesContainTooltip: "显示包含输入关键字的短语（用逗号分隔）",
            cerebroIQScore: "Cerebro IQ 得分",
            cerebroIQScoreTooltip: "根据估算搜索量与竞品数量的比率进行评分：高分意味着这个词，打造的机会更大，分数低则相反",
            titleDensity: "标题密度",
            titleDensityTooltip: "首页中标题含该关键词的商品数量",
            competingProducts: "竞品数",
            competingProductsTooltip: "有多少商品关联了此关键词",
            amazonChoice: "Amazon Choice",
            amazonChoiceTooltip: "基于 Amazon Choice 状态筛选关键词结果",
            amazonChoiceOnly: "仅限 Amazon Choice",
            amzSuggestedPosition: "Amazon 推荐排名",
            amzSuggestedPositionTooltip: "Amazon 为此ASIN推荐的关键词，按推荐程度从高到低编号",
            excludePhrasesContain: "排除包含以下词组",
            excludePhrasesContainTooltip: "排除包含输入关键词的短语（用逗号分隔）",
            searchVolumeTrend: "搜索量趋势",
            searchVolumeTrendTooltip: "过去30 天",
            sponsoredRank: "广告排名",
            sponsoredRankTooltip: "顾客搜索中检测到的最新广告排名",
            amazonRecRank: "Amazon推荐排名",
            amazonRecRankTooltip: "Amazon为此ASIN推荐的关键词，按推荐程度从高到低编号",
            noneSelected: "无选中",
            bestSeller: "畅销产品",
            bestSellerTooltip: "仅显示所选产品是畅销产品的关键词",
            walmartSearchVolume: "Walmart搜索量",
            walmartSearchVolumeTooltip: "Walmart 搜索量目前是 beta 版的专有估算。精确数据和历史数据目前不可用。",
            advancedRank: "更多排名筛选器",
            advancedRankTooltip: "输入您希望出现在此关键词一定范围自然排名中的ASIN最小/最大数量",
            competitorPerformanceScore: "竞品表现",
            bestSellerOnly: "仅限畅销产品",
            bestSellerOnlyTooltip: "筛选在Walmart搜索结果中包含best seller徽标的关键词",
            matchTypeOptions: {
                organic: "自然",
                sponsored: "广告推广",
                ppc: "亚马逊推荐",
                smart: "Smart Complete",
                contextual: "自然",
                lexical: "Smart Complete"
            },
            amazonChoiceOptions: {analyzedProduct: "已分析的产品", otherProduct: "其他产品", noBadges: "无徽标"},
            walmartSearchVolumeOptions: {very_low: "非常低", low: "低", medium: "中", high: "高", very_high: "非常高"},
            advancedRankFilter: "更多排名筛选器",
            advancedRankFilterTooltip: "输入您希望出现在某关键词一定范围自然排名中的ASIN最小/最大数量",
            advancedRankFilterTooltipWalmart: "输入您希望出现在此关键词一定范围自然排名中的产品的最小/最大数量",
            considerRankAsinMin: "最小ASIN",
            considerRankAsinMax: "最大ASIN",
            considerRankProductIdMin: "最小值ID",
            considerRankProductIdMax: "最大值ID",
            considerRankMin: "排名最小值",
            considerRankMax: "排名最大值",
            all: "全部",
            any: "任何",
            searchVolumeWalmartTooltip: "此关键词每月在Walmart被搜索的估计次数。",
            monthlySales: "关键词销量",
            monthlySalesTooltip: "归因于每个关键词的月度销售量（单位数）的估计值",
            monthlySalesLockedTooltip: "升级至{upgradePlan}来获得有关每个关键词的预估销量。",
            presets: {
                text1: "快速缩小结果范围",
                text2: "或",
                topKeywords: "排名靠近关键词",
                topKeywordsTooltip: "竞争对手常用的主要关键词，搜索量很大",
                opportunityKeywords: "机会关键词",
                opportunityKeywordsTooltip: "通过竞争对手活动、排名和搜索量创造排名机会的关键词"
            },
            presetsTitle: {topKeywords: "热门关键词搜索", opportunityKeywords: "机会关键词搜索"},
            monthlySalesLockedTitleTooltip: "查看全面的关键词销量数据，以更好地优先考虑最赚钱、高转化率的关键词。",
            timePeriod: {
                label: "Time Period",
                tooltip: {
                    available: "Examine 24 months of data history for rank, search volume, and sales changes. Refine with chart filters in {node_0}.",
                    availableNode: "Historical Trends"
                },
                placeholder: "当前的",
                info: "You can select a specific from the last two years."
            },
            numberOfCompetitors: "Number of Competitors",
            numberOfCompetitorsTooltip: "Enter the minimum and/or maximum number of competitor ASINs that you want to be ranking for keywords in the range of the next filter. For example, if you set Min: 2 and Max: 4, the tool will show keywords where 2 to 5 competitors are ranking.",
            competitorRank: "Competitor Rank",
            competitorRankTooltip: "Define the Organic Keyword Rank Range where you want the competitors from the previous filter to appear. For example, if you chose min 2 and max 4 in the first filter, and min 1 and max 10 in this filter, it means you're interested in keywords where at least 2 and no more than 4 competitors rank within the top 10 organic positions.",
            advancedFilterTitle: "Unlock advanced filtering with premium plans",
            showAllFilters: "Show all Helium 10 filters"
        },
        distribution: {
            title: "关键词分配",
            total: "总关键词",
            sponsored: "广告关键词",
            organic: "自然",
            amazonRecommended: "亚马逊推荐",
            smart: "Smart Complete",
            showHistoricalTrend: {
                title: "显示历史趋势",
                tooltip: "选择以关键词流量结构类型或不同产品的关键词流量结构来查看过去24个月的关键词流量结构数据以发现新的机会。",
                lockedTooltip: "升级至钻石版，解锁历史趋势分析图表。",
                lockedRightTooltip: "轻松分析历史关键词趋势，为您的产品寻找增长机会",
                tooltipNew: "Look back at 24 months of data to observe changes in historical rank, search volume, and sales. Filter these insights to observe seasonality by using an interactive chart."
            },
            organicTooltip: "自然搜索",
            paid: "广告关键词",
            paidTooltip: "广告搜索"
        },
        wordFrequency: {
            title: "词频",
            button: "查看全部",
            export: "导出",
            word: "单词",
            qty: "频率",
            setToast: {title: "词组包含过滤器已应用", text: "通过“{keyword}“筛选结果"},
            noData: "无数据"
        },
        productSearch: {
            single: "单产品搜索",
            multi: "多产品搜索",
            singleSubtitle: "根据过去30天",
            multiSubtitle: "点击下方按钮来查看单个产品过去30天的总结。"
        },
        boughtTogether: {
            button: "经常同时购买",
            title: "经常同时购买的产品",
            description: "这些产品显示在您搜索的产品的“经常同时购买”部分。",
            modalButton: "在Black Box中查看全部",
            emptyTitle: "该清单为空",
            productMultiSearch: "来自多重搜索的产品"
        },
        table: {
            keywordPhrase: "关键词词组",
            keywordPhraseTooltip: "顾客搜索产品所使用的关键词或词组",
            cerebroIqScore: "Cerebro IQ 得分",
            cerebroIqScoreTooltip: "根据估算搜索量与竞品数量的比率进行评分：高分意味着这个词，打造的机会更大，分数低则相反",
            searchVolume: "搜索量",
            searchVolumeTooltip: "每月在Amazon上搜索此关键词的估算次数",
            sponsoredAsins: "广告推广ASIN 数",
            sponsoredAsinsTooltip: "此关键词词组相关的搜索结果中购买广告推广的ASIN数量",
            headlineAsins: "Headline ASINs",
            headlineAsinsTooltip: "此关键词词组相关的搜索结果中在最新Headline广告中出现的ASIN数量",
            competingProducts: "竞品数",
            competingProductsTooltip: "有多少产品关联了此关键词/词组",
            cpr: "CPR",
            cprSimple: "CPR",
            cprTooltip: "搜索此关键词时，产品要上到首页上半页所需的连续8天的出单数量",
            matchType: "匹配类型",
            matchTypeTooltip: "关键词的来源",
            amazonRecRank: "Amazon推荐排名",
            amazonRecRankTooltip: "Amazon为该ASIN推荐的关键词，按推荐程度从高到低排序",
            sponsoredRank: "广告排名",
            sponsoredRankTooltip: "顾客搜索的最新广告推广排名",
            organicRank: "自然排名",
            organicRankTooltip: "分析的产品的关键词的自然搜索排名",
            searchVolumeTrend: "搜索量趋势",
            searchVolumeTrendTooltip: "过去30天",
            titleDensity: "标题密度",
            titleDensityTooltip: "首页中标题含该关键词的商品数量",
            sponsoredAvg: "广告推广排名（平均）",
            sponsoredAvgTooltip: "广告推广的所有产品中的平均排名",
            sponsoredCount: "广告推广排名（数量）",
            sponsoredCountTooltip: "通过广告推广查到的关键词的查询产品数",
            amzSuggestedAvg: "Amazon 推荐排名（平均）",
            amzSuggestedAvgTooltip: "根据Amazon的推荐分数，所分析产品的关键词的平均排名",
            amzSuggestedCount: "Amazon 推荐排名（数量）",
            amzSuggestedCountTooltip: "Amazon 推荐的关键词的所分析产品数量",
            positionRank: "自然排名",
            positionRankTooltip: "在 Amazon 的搜索结果中第一个ASIN的排名(在多 ASIN 搜索中）",
            scrapedAt: "抓取",
            relativeRank: "相对排名",
            relativeRankTooltip: "主ASIN相对于竞品的排名。比如，若两个竞品排名好于主要 ASIN，则相对排名为三",
            competitorRank: "竞品排名（平均）",
            competitorRankTooltip: "竞品ASIN平均排名。此计算不包括未计入排名的ASIN。",
            rankingCompetitors: "排名竞品（数量）",
            rankingCompetitorsTooltip: "指定词组排名的竞品ASIN数量。",
            competitorPerformanceScore: "竞品表现得分",
            competitorPerformanceScoreTooltip: "竞品表现指数是衡量指定关键词的相关竞品组的成功度。",
            competitorRankAvg: "竞品排名（平均）",
            competitorRankAvgTooltip: "竞品 ASIN 平均排名。此计算不包括未进入排名的ASIN。",
            filteredKeywords: {other: "{value}个过滤关键词"},
            filteredKeywordsSelected: {other: "已选择{value}个关键词"},
            matchTypeTooltips: {
                amazonRecommended: "亚马逊推荐",
                sponsored: "广告推广",
                organic: "自然",
                smartComplete: "Smart Complete",
                organicTooltip: "自然搜索",
                paid: "广告关键词",
                paidTooltip: "广告搜索"
            },
            addToMyList: "将关键词添加到My List",
            exportAmazonRecommended: "亚马逊推荐",
            exportSponsored: "广告推广",
            exportOrganic: "自然",
            amzSuggestedAvgTable: "Amazon 推荐排名（平均）",
            amzSuggestedCountTable: "Amazon 推荐排名（数量）",
            smartComplete: "Smart Complete",
            abad: "ABA总计<br/>点击份额",
            abadTooltip: "亚马逊品牌分析",
            abadValueTooltip: "前 3 个 ASIN 点击份额的总和",
            organicRankAverage: "平均自然排名",
            abadConv: "ABA总计<br/>转化份额",
            abadConvTooltip: "前 3 个 ASIN 点击份额的总和",
            abadSearchFrequencyRank: "ABA SFR",
            abadSearchFrequencyRankTooltip: "The ranked order of search frequency. Search terms with the same search frequency over the selected time frame will show the same rank."
        },
        tableWalmart: {
            keywordPhrase: "关键词词组",
            keywordPhraseTooltip: "出现在 Walmart 搜索结果中前 500 名的产品的关键词",
            searchVolumeWalmart: "搜索量",
            searchVolumeWalmartExport: "搜索量（Walmart）",
            searchVolumeWalmartTooltip: "Walmart 搜索量目前是 beta 版的专有估算。精确数据和历史数据目前不可用。",
            searchVolume: "搜索量",
            searchVolumeAmazonExport: "搜索量（Amazon）",
            amazonSearchVolume: "亚马逊搜索量",
            searchVolumeTooltip: "每月在 Amazon 上搜索此关键词的估算次数。您可以暂时使用此数字估计Walmart搜索量。",
            competingProducts: "竞品数",
            competingProductsTooltip: "顾客在Walmart使用此关键词/词组进行搜索所返回的产品总数",
            sponsoredProducts: "商品推广",
            sponsoredProductsTooltip: "Walmart上该关键词词组搜索结果中购买广告的产品数量",
            matchType: "匹配类型",
            matchTypeTooltip: "关键词的来源",
            organicRank: "自然排名",
            organicRankTooltip: "顾客在Walmart搜索中显示的产品的最新自然排名",
            sponsoredRank: "广告排名",
            sponsoredRankTooltip: "顾客在Walmart搜索中显示的产品的最新广告排名",
            sponsoredRankAverage: "推广排名（平均）",
            sponsoredRankAverageTooltip: "广告推广的所有产品的平均排名",
            sponsoredRankCount: "广告排名（数量）",
            sponsoredRankCountTooltip: "通过关键词的广告查出的产品数",
            positionRank: "自然排名",
            positionRankTooltip: "在 Walmart 的搜索结果中第一个产品的排名（在多产品搜索中）",
            relativeRank: "相对排名",
            relativeRankTooltip: "主要产品相对于竞品的排名。比如，若两个竞品排名好于主要产品，则相对排名为三",
            competitorRank: "竞品排名（平均）",
            competitorRankTooltip: "竞品平均排名。此次计算不包括未排名产品。",
            rankingCompetitors: "排名竞品（数量）",
            rankingCompetitorsTooltip: "与指定词组排名相关的竞品数量。",
            competitorPerformanceScore: "竞品表现得分",
            competitorPerformanceScoreTooltip: "1-10得分来衡量关键词与输入的竞品的相关性（不包括第一个产品）。得分越高，自然排名的产品越多，平均自然排名越低"
        },
        landingDemo: {
            title1: "Cerebro帮助你找到排名靠前的关键词，通过选择一个特定的产品从",
            title2: "站点。",
            subtitle: "选择一个 ASIN 开始",
            description: "Cerebro 是成功推出新产品和提高品牌知名度的关键。您还可以在亚马逊上为您的产品评估最有效的关键词，优化您的产品listing以提高销量，并保持产品的竞争力。",
            backToSearch: "返回搜索"
        },
        searchVolume: {
            total: {
                tooltip: "Displays the total search volume for your filtered keywords over the past 30 days.",
                title: "总搜索量"
            },
            average: {
                tooltip: "Displays the average search volume for your filtered keywords over the past 30 days.",
                title: "平均搜索量"
            },
            title: {amazon: "Amazon Search Vol.", walmart: "Walmart Search Vol."}
        },
        floatingButton: "筛选结果",
        descriptionFree: "Find keywords for your listing using reverse product lookup.",
        inputPlaceholderFree: "Keyword comparison across products available for Platinum and above.",
        inputPlaceholderNotFree: "Enter up to {maxAsins} product identifiers for keyword comparison.",
        searchBarTooltipTitle: "Unlock multi-product search on Platinum",
        searchBarTooltipButton: "现在升级"
    }, Yr = {very_low: "非常低", low: "低", medium: "中", high: "高", very_high: "非常高"}, Gr = {
        button: "创建新文件夹",
        title: "在My List中创建一个新文件夹",
        text: "在My List中创建一个新文件夹，可用于保存关键词以供未来使用所有 Helium 10 工具时参考。每个文件夹仅限用于一个站点。",
        folderName: "文件夹名",
        folderNamePlaceholder: "为文件夹起名",
        folderNameRequired: "必填字段",
        marketplace: "站点",
        save: "保存",
        close: "关闭"
    }, $r = {
        minBiggest: "最小值大于最大值",
        frankenstein: {limitIsExceeded: "所有词组的总符号数不能超过200 000。"},
        common: {
            400: "输入的数据错误或无结果",
            402: "您已超出使用限额",
            403: "拒绝访问",
            404: "未找到",
            409: "输入的数据与您先前操作冲突",
            422: "输入的数据无效",
            500: "未知错误",
            503: "功能暂时无法使用",
            undefined: "未知错误",
            "503Retry": "稍后重试"
        }
    }, jr = {
        title: "Magnet",
        description: "寻找与您的产品最相关的关键词。",
        learnTooltip: "观看视频并阅读我们的文档帮助您上手Magnet",
        tabSingle: "寻找建议",
        tabMultiple: "分析关键词",
        inputPlaceholderSingle: "输入关键词",
        inputPlaceholderMultiple: "最多输入{number}个关键词",
        addFromMyList: "从My List添加",
        landingSingleTitle: "在上面输入一个关键词以找到最相关的关键词",
        landingSingleDescription: "我们将依据您所输入的内容建议可能相关的关键词。使用我们的筛选器缩小结果范围并将您感兴趣的关键词放入My List中的一个文件夹。",
        landingMultipleTitle: "获取包含您感兴趣的最多 200 个关键词的汇总",
        landingMultipleDescription: "我们将提供相关数据帮助您决定哪些关键词值得保留。使用筛选器，按关键词的重要程度排序，然后添加到My List文件夹。",
        landingWatchVideo: "观看产品介绍视频",
        keywordSummary: {
            title: "关键字总结",
            totalKeywords: "总关键词数量",
            averageSearchVolume: "平均搜索量",
            totalSearchVolume: "总搜索量",
            averageMagnetIq: "平均 Magnet IQ得分",
            averageCompetingProducts: "平均竞品数",
            totalAmazonSV: "亚马逊 SV 总数",
            totalWalmartSV: "沃尔玛SV总数"
        },
        keywordSearchSummary: {
            title: "关键词搜索汇总",
            viewTopProducts: "查看排名靠前的产品",
            searchVolume: "搜索量",
            magnetIQScore: "Magnet IQ得分",
            magnetIQScoreTooltip: "根据估算搜索量与竞品数量的比率进行评分：高分意味着这个词，打造的机会更大，分数低则相反",
            cpr: "CPR"
        },
        searchVolumeDistribution: {title: "搜索量分配", seriesName: "量"},
        history: {
            description: "查找以前的 Magnet 搜索并重新加载，不使用配额。",
            columns: {keywordSearch: "关键词研究", searchType: "搜索类型"},
            searchTypes: {singleSearch: "单一搜索", multiSearch: "多重搜索"},
            tooltip: "查看您以前的搜索并重新加载结果"
        },
        openInCerebro: "单击在Cerebro中打开",
        tabSingleTooltip: "寻找最相关的关键词",
        tabMultipleTooltip: "输入不超过 200 个关键词，获取分析",
        boughtTogether: {title: "排名靠前的产品", description: "单击下面的产品可在 Cerebro 中找到表现最佳的关键词。"},
        choiseBadge: {amazon: "此关键词为Amazon’s Choice", walmart: "此关键词为Walmart’s Choice"},
        asinInsteadOfKeywordError: {title: "找到ASIN", text: {part1: "您输入了{asin} 。查看此ASIN的关键词", part2: "或输入关键词继续。"}},
        landingDemo: {
            title1: "Magnet帮助你找到热门的相关关键词，在",
            title2: "站点。",
            subtitle: "选择下面的一个关键词开始",
            description: '我们将利用你所选择的内容来建议可能与你的搜索相关的关键词。使用筛选器来缩小结果，并将你喜欢的关键词放入 "My List "的一个文件夹中。'
        }
    }, Qr = {
        options: {
            ">10000": ">10,000",
            "5000-10000": "5,000-10,000",
            "1000-5000": "1,000-5,000",
            "<1000": "< 1,000",
            "Very Low": "非常低",
            Low: "低",
            Medium: "中",
            High: "高",
            "Very High": "非常高",
            very_low: "非常低",
            low: "低",
            medium: "中",
            high: "高",
            very_high: "非常高"
        }
    }, Xr = {
        title: "您先前已搜索过此产品",
        description: "您想从记录中加载先前搜索还是运行一个新搜索？",
        newSearchButton: "运行新搜索",
        fromHistoryButton: "从历史数据加载"
    }, Zr = "无可用数据", Jr = {
        button: "升级为无限制",
        texts: {
            cerebroAmazon: {other: "Cerebro for Amazon 今日还剩<b>{count}</b>次搜索"},
            cerebroWalmart: {other: "Cerebro for Walmart 今日还剩<b>{count}</b>次搜索"},
            magnetAmazon: {other: "今天剩余<b>{count}</b>次Amazon搜索"},
            magnetWalmart: {other: "今天剩余<b>{count}</b>次Walmart搜索"},
            cerebroDemo: "<b>You are viewing a demo of Cerebro.</b> Upgrade for keyword analysis across multiple products, preset library and quick filters.",
            magnetDemo: "您正在浏览的是 Magnet 的演示"
        },
        plans: {
            free: "免费",
            starter: "探索版",
            platinum: "创业版",
            diamond: "精英版",
            starterChinese: "探索版",
            platinumChinese: "创业版",
            diamondChinese: "专业版",
            freeChinese: "免费"
        },
        prices: {platinum: "99美元/月", diamond: "249美元/月", commonMonth: "{price}美元/月"},
        WALMART_features: {
            title: "解锁此功能以及 Cerebro for Walmart 其他有用功能",
            subtitle: "此功能仅限于精英版套餐或更高版本。",
            upgradeButton: "了解计划详情",
            declineButton: "以后再说",
            features: [{
                title: "单个产品搜索",
                values: {Helium10_Starter: "每天使用2次", Helium10_Free: "每天使用2次", Helium10_Start_Your_Business: "每天使用2次"}
            }, {title: "多产品搜索"}, {title: "多页结果"}, {title: "筛选结果"}, {title: "获得竞品"}, {title: "历史记录"}, {title: "Cerebro and Magnet关键词销量"}, {
                title: "Walmart",
                values: {Helium10_Free: "每天使用 2 次"}
            }, {
                title: "Follow-Up",
                values: {Helium10_Free: "2,000封邮件", Helium10_Scale_Your_Business: "10,000封邮件"}
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Free: "2,500 个关键词", Helium10_Scale_Your_Business: "5,000个关键词"}
            }, {
                title: "Black Box",
                values: {Helium10_Starter: "20次使用", Helium10_Start_Your_Business: "20次使用"}
            }, {
                title: "Cerebro",
                values: {Helium10_Starter: "每天使用 2 次", Helium10_Free: "每天使用 2 次", Helium10_Start_Your_Business: "每天使用2次"}
            }, {
                title: "Magnet",
                values: {Helium10_Starter: "每天使用 2 次", Helium10_Free: "每天使用 2 次", Helium10_Start_Your_Business: "每天使用2次"}
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20 个关键词", Helium10_Scale_Your_Business: "5,000个关键词"}
            }, {title: "Xray", values: {Helium10_Starter: "50 次使用"}}],
            cerebro: {title: "解锁此功能以及 Cerebro for Walmart 其它功能", subtitle: "此功能仅限于 Diamond 计划或更高版本。"},
            magnet: {
                title: "解锁此功能， 以及 Magnet for Walmart 的其它功能",
                subtitle: "精英版搜索无限次，可解锁更多价值。",
                titleHistory: "解锁此功能， 以及 Magnet for Walmart 的其它功能"
            }
        },
        AMAZON_features: {
            title: "解锁此功能以及 Cerebro for Amazon 其他有用功能",
            subtitle: "此功能仅限于创业版套餐或更高版本。",
            upgradeButton: "了解套餐详情",
            declineButton: "以后再说",
            features: [{
                title: "单个产品搜索",
                values: {Helium10_Free: "每天使用2次", Helium10_Starter: "每天使用2次"}
            }, {title: "多产品搜索"}, {title: "多页结果"}, {title: "筛选结果"}, {title: "获得竞品"}, {title: "历史记录"}, {title: "Cerebro and Magnet关键词销量"}, {
                title: "Walmart",
                values: {Helium10_Free: "每天使用 2 次"}
            }, {
                title: "Follow-Up",
                values: {Helium10_Free: "2,000封邮件", Helium10_Scale_Your_Business: "10,000封邮件"}
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Free: "2,500个关键词", Helium10_Scale_Your_Business: "5,000个关键词"}
            }, {
                title: "Black Box",
                values: {Helium10_Starter: "20次使用", Helium10_Start_Your_Business: "20次使用"}
            }, {
                title: "Cerebro",
                values: {Helium10_Starter: "每天使用2次", Helium10_Free: "每天使用2次", Helium10_Start_Your_Business: "每天使用2次"}
            }, {
                title: "Magnet",
                values: {Helium10_Starter: "每天使用2次", Helium10_Free: "每天使用2次", Helium10_Start_Your_Business: "每天使用2次"}
            }, {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20个关键词", Helium10_Scale_Your_Business: "5,000个关键词"}
            }, {title: "Xray", values: {Helium10_Start_Your_Business: "50次使用"}}],
            cerebro: {title: "解锁此功能以及 Cerebro for Amazon 其它功能", subtitle: "此功能仅限于创业版套餐或更高版本。"},
            magnet: {
                title: "解锁此功能， 以及 Magnet for Amazon 的其它功能",
                subtitle: "精英版搜索无限次，可解锁更多价值。",
                titleHistory: "解锁历史记录， 以及 Magnet for Amazon 的其它功能"
            }
        },
        WALMART_tools: {
            title: "您已用完每天 2 次免费 Cerebro for Walmart 搜索。",
            subtitle: "精英版可每天获得无限次搜索并解锁更多价值。",
            upgradeButton: "升级至精英版",
            declineButton: "以后再说",
            features: [{
                title: "Cerebro for Walmart",
                subtitle: "产品反查",
                values: {Helium10_Starter: "每天使用2次", Helium10_Free: "每天使用2次", Helium10_Start_Your_Business: "每天使用2次"}
            }, {
                title: "Magnet for Walmart",
                subtitle: "关键词研究",
                values: {Helium10_Starter: "每天使用2次", Helium10_Free: "每天使用2次", Helium10_Start_Your_Business: "每天使用2次"}
            }, {
                title: "Xray for Walmart",
                subtitle: "Chrome 扩展 – 选品工具",
                values: {Helium10_Starter: "50次使用", Helium10_Free: "50次使用", Helium10_Start_Your_Business: "50次使用"}
            }, {
                title: "Profits for Walmart",
                subtitle: "财务数据一览",
                values: {Helium10_Starter: "90天", Helium10_Free: "90天", Helium10_Start_Your_Business: "90天"}
            }],
            cerebro: {
                title: "您已用完每天 2 次免费 Cerebro for Walmart 搜索。",
                subtitle: "精英版可每天获得无限次搜索并解锁更多价值。",
                titleNew: "您已用完每天 {uses} 次免费 Cerebro for Walmart 搜索。"
            },
            magnet: {
                title: "您已用完每天 2 次免费 Magnet for Walmart 搜索。",
                subtitle: "精英版可每天获得无限次搜索并解锁更多价值。",
                titleNew: "您已用完每天 {uses} 次免费 Magnet for Walmart 搜索。"
            },
            titleNew: "您已用完每天 {uses} 次免费 Cerebro for Walmart 搜索。"
        },
        AMAZON_tools: {
            title: "您已用完每天 2 次免费 Cerebro for Amazon 搜索。",
            subtitle: "创业版可每天获得无限次搜索并解锁更多价值。",
            upgradeButton: "升级至创业版",
            declineButton: "以后再说",
            features: [{
                title: "Cerebro for Amazon",
                subtitle: "产品反查",
                values: {Helium10_Free: "每天使用2次", Helium10_Starter: "每天使用2次"}
            }, {
                title: "Magnet for Amazon",
                subtitle: "关键词研究",
                values: {Helium10_Free: "每天使用2次", Helium10_Starter: "每天使用2次"}
            }, {
                title: "Xray for Amazon",
                subtitle: "Chrome 扩展 – 选品工具",
                values: {Helium10_Free: "50次使用", Helium10_Starter: "50次使用"}
            }, {
                title: "Keyword Tracker - 亚马逊关键词追踪",
                subtitle: "产品关键词排名追踪",
                values: {Helium10_Free: "20个关键词", Helium10_Starter: "20个关键词", Helium10_Start_Your_Business: "500个关键词"}
            }],
            cerebro: {
                title: "您已用完每天 2 次免费 Cerebro for Amazon 搜索。",
                subtitle: "创业版可每天获得无限次搜索并解锁更多价值。",
                titleNew: "您已用完每天 {uses} 次免费 Cerebro for Amazon 搜索。"
            },
            magnet: {
                title: "您已用完每天 2 次免费 Magnet for Amazon 搜索。",
                subtitle: "创业版可每天获得无限次搜索并解锁更多价值。",
                titleNew: "您已用完每天 {uses} 次免费 Magnet for Amazon 搜索。"
            }
        },
        getPlan: "获取套餐",
        titles: {keywordSales: "升级以解锁此功能和更高权限", modalCommon: "升级以解锁此功能和更高权限"},
        subtitles: {
            modalPlatinum: "此功能仅限于创业版套餐或更高版本。",
            modalDiamond: "此功能仅限于精英版或更高版本。",
            modalCommon: "此功能仅适用于{plan}套餐计划或更高版本。",
            modalUnlimitedCommon: "{plan}版可获得无限次搜索并解锁更多价值。",
            pageCommon: "{plan}版可每天获得无限次搜索并解锁更多价值。"
        },
        featuresModal: {
            singleProductSearch: {
                title: "单个产品搜索",
                values: {Helium10_Starter: "每天使用2次", Helium10_Free: "演示", Helium10_Start_Your_Business: "每天使用2次"}
            },
            singleProductSearch2: {title: "单个产品搜索", values: {Helium10_Free: "演示", Helium10_Starter: "每天使用2次"}},
            multiProductSearch: {title: "多产品搜索"},
            multiplePagesResults: {title: "多页结果"},
            filterResults: {title: "筛选和排序结果"},
            getCompetitors: {title: "获取竞品信息"},
            history: {title: "历史记录"},
            export: {title: "导出"},
            salesByKeyword: {title: "Cerebro and Magnet关键词销量"},
            magnetWalmart: {title: "Walmart", values: {Helium10_Free: "演示"}},
            followUp: {title: "Follow-Up", values: {Helium10_Free: "2,000封邮件", Helium10_Scale_Your_Business: "10,000封邮件"}},
            keywordTracker: {
                title: "Keyword Tracker",
                values: {Helium10_Free: "2,500个关键词", Helium10_Scale_Your_Business: "5,000个关键词"}
            },
            blackBox: {title: "Black Box", values: {Helium10_Starter: "20次使用", Helium10_Start_Your_Business: "20次使用"}},
            cerebro: {
                title: "Cerebro",
                values: {Helium10_Starter: "每天使用2次", Helium10_Free: "演示", Helium10_Start_Your_Business: "每天使用2次"}
            },
            magnet: {
                title: "Magnet",
                values: {Helium10_Starter: "每天使用2次", Helium10_Free: "演示", Helium10_Start_Your_Business: "每天使用2次"}
            },
            keywordTracker2: {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "20个关键词", Helium10_Scale_Your_Business: "5,000个关键词"}
            },
            xray: {title: "Xray", values: {Helium10_Free: "50次使用"}},
            blackBoxProducts: {title: "Black Box", values: {Helium10_Free: "20次使用", Helium10_Starter: "20次使用"}},
            blackBoxProductsCerebro: {title: "Cerebro", values: {Helium10_Free: "有限的", Helium10_Starter: "有限的"}},
            blackBoxProductsMagnet: {title: "Magnet", values: {Helium10_Free: "有限的", Helium10_Starter: "有限的"}},
            abad: {title: "Cerebro 中的亚马逊品牌分析"},
            walmartCerebroMagnet: {title: "Cerebro或Magnet沃尔玛版"},
            adtomic: {title: "Adtomic"},
            businessValuation: {title: "商业估值"},
            listingAnalyzer: {
                title: "Listing分析师",
                values: {
                    Helium10_Free: "2 次搜索/月",
                    Helium10_Starter: "2 次搜索/月",
                    Helium10_Start_Your_Business: "25 次搜索/月",
                    Helium10_Scale_Your_Business: "50 次搜索/月"
                }
            },
            abadNew: {title: "Cerebro或Magnet中的亚马逊品牌分析"},
            singleProductSearchUses: {
                title: "单个产品搜索",
                values: {Helium10_Starter: "每天{uses}次使用", Helium10_Free: "演示", Helium10_Start_Your_Business: "每天{uses}次使用"}
            },
            singleProductSearch2Uses: {title: "单个产品搜索", values: {Helium10_Free: "演示", Helium10_Starter: "每天{uses}次使用"}},
            followUpUses: {
                title: "Follow-Up",
                values: {Helium10_Free: "{uses}封电子邮件", Helium10_Scale_Your_Business: "{uses}封电子邮件"}
            },
            keywordTrackerUses: {
                title: "Keyword Tracker",
                values: {Helium10_Free: "{uses}个关键词", Helium10_Scale_Your_Business: "{uses}个关键词"}
            },
            blackBoxUses: {
                title: "Black Box",
                values: {Helium10_Starter: "{uses}次使用", Helium10_Start_Your_Business: "{uses}次使用"}
            },
            cerebroUses: {
                title: "Cerebro",
                values: {Helium10_Starter: "每天{uses}次使用", Helium10_Free: "演示", Helium10_Start_Your_Business: "每天{uses}次使用"}
            },
            magnetUses: {
                title: "Magnet",
                values: {Helium10_Starter: "每天{uses}次使用", Helium10_Free: "演示", Helium10_Start_Your_Business: "每天{uses}次使用"}
            },
            keywordTracker2Uses: {
                title: "Keyword Tracker",
                values: {Helium10_Starter: "{uses}个关键词", Helium10_Scale_Your_Business: "{uses}个关键词"}
            },
            xrayUses: {title: "Xray", values: {Helium10_Free: "{uses}次运行"}},
            blackBoxProductsUses: {title: "Black Box", values: {Helium10_Free: "{uses}次使用", Helium10_Starter: "{uses}次使用"}},
            listingAnalyzerUses: {
                title: "Listing分析师",
                values: {
                    Helium10_Free: "{uses}次搜索/月",
                    Helium10_Starter: "{uses}次搜索/月",
                    Helium10_Start_Your_Business: "{uses}次搜索/月",
                    Helium10_Scale_Your_Business: "{uses}次搜索/月"
                }
            },
            salesHistoricalChart: {title: "销售历史图表"},
            ppcBid: {title: "Helium 10 建议的 PPC 出价"}
        },
        featuresPage: {
            cerebroForWalmart: {
                title: "Cerebro for Walmart",
                subtitle: "产品反查",
                values: {Helium10_Starter: "每天使用2次", Helium10_Free: "演示", Helium10_Start_Your_Business: "每天使用2次"}
            },
            magnetForWalmart: {
                title: "Magnet for Walmart",
                subtitle: "关键词挖掘",
                values: {Helium10_Starter: "每天使用2次", Helium10_Free: "演示", Helium10_Start_Your_Business: "每天使用2次"}
            },
            xrayForWalmart: {
                title: "Xray for Walmart",
                subtitle: "Chrome 扩展 – 选品工具",
                values: {Helium10_Starter: "50次使用", Helium10_Free: "50次使用", Helium10_Start_Your_Business: "50次使用"}
            },
            profitsForWalmart: {
                title: "Profits for Walmart",
                subtitle: "财务数据一览",
                values: {Helium10_Starter: "90天", Helium10_Free: "90天", Helium10_Start_Your_Business: "90天"}
            },
            cerebroForAmazon: {
                title: "Cerebro for Amazon",
                subtitle: "产品反查",
                values: {Helium10_Free: "演示", Helium10_Starter: "每天使用2次"}
            },
            magnetForAmazon: {
                title: "Magnet for Amazon",
                subtitle: "关键词研究",
                values: {Helium10_Free: "演示", Helium10_Starter: "每天使用2次"}
            },
            xrayForAmazon: {
                title: "Xray for Amazon",
                subtitle: "Chrome 插件 – 选品工具",
                values: {Helium10_Free: "50次使用", Helium10_Starter: "50次使用"}
            },
            keywordTrackerForAmazon: {
                title: "Keyword Tracker - 亚马逊关键词追踪",
                subtitle: "产品关键词排名追踪",
                values: {Helium10_Free: "20个关键词", Helium10_Starter: "20个关键词", Helium10_Start_Your_Business: "500个关键词"}
            },
            cerebroForWalmartUses: {
                title: "Cerebro for Walmart",
                subtitle: "产品反查",
                values: {Helium10_Starter: "每天{uses}次使用", Helium10_Free: "演示", Helium10_Start_Your_Business: "每天{uses}次使用"}
            },
            magnetForWalmartUses: {
                title: "Magnet for Walmart",
                subtitle: "关键词挖掘",
                values: {Helium10_Starter: "每天{uses}次使用", Helium10_Free: "演示", Helium10_Start_Your_Business: "每天{uses}次使用"}
            },
            xrayForWalmartUses: {
                title: "Xray for Walmart",
                subtitle: "Chrome 扩展 – 选品工具",
                values: {
                    Helium10_Starter: "{uses}次运行",
                    Helium10_Free: "{uses}次运行",
                    Helium10_Start_Your_Business: "{uses}次运行"
                }
            },
            profitsForWalmartUses: {
                title: "Profits for Walmart",
                subtitle: "财务数据一览",
                values: {Helium10_Starter: "{uses}天", Helium10_Free: "{uses}天", Helium10_Start_Your_Business: "{uses}天"}
            },
            cerebroForAmazonUses: {
                title: "Cerebro for Amazon",
                subtitle: "产品反查",
                values: {Helium10_Free: "演示", Helium10_Starter: "每天{uses}次使用"}
            },
            magnetForAmazonUses: {
                title: "Magnet for Amazon",
                subtitle: "关键词挖掘",
                values: {Helium10_Free: "演示", Helium10_Starter: "每天{uses}次使用"}
            },
            xrayForAmazonUses: {
                title: "Xray for Amazon",
                subtitle: "Chrome 扩展 – 选品工具",
                values: {Helium10_Free: "{uses}次运行", Helium10_Starter: "{uses}次运行"}
            },
            keywordTrackerForAmazonUses: {
                title: "Keyword Tracker - 亚马逊关键词追踪",
                subtitle: "产品关键词排名追踪",
                values: {
                    Helium10_Free: "{uses}个关键词",
                    Helium10_Starter: "{uses}个关键词",
                    Helium10_Start_Your_Business: "{uses}个关键词"
                }
            }
        },
        titlesModal: {
            blackBoxProductsLimit: {
                title: "您已达到 Black Box 的免费搜索限额上限",
                subtitle: "提高你的限额，购买创业版套餐解锁更多价值",
                upgradeButton: "立即比较套餐",
                subtitleCommon: "提高你的限额，{plan}套餐解锁更多价值"
            },
            blackBoxSalesChartAmazon: {title: "解锁此功能， 以及 BlackBox for Amazon 的其它功能", subtitle: "提高你的限额，{plan}套餐解锁更多价值"},
            upgradeButton: "空"
        },
        upgradeButton: "升级套餐",
        upgradeTo: "升级至{upgradePlan}"
    }, eo = {copy: "复制 {name}", copied: "{name} 已复制"}, to = {
        cerebro: {amazon: "需要一个ASIN？试试以下其中一个：", walmart: "需要一个Walmart 产品 ID？试试以下其中一个："},
        magnet: {amazon: "需要一个关键词？试试以下其中一个：", walmart: "需要一个关键词？试试以下其中一个："}
    }, ao = {
        1001: "AUTH_INVALID_TOKEN",
        1002: "AUTH_NO_USER",
        2001: "ASIN标识符格式 {asin}无效",
        2002: "{marketplace}站点的ASIN标识符 {asin} 无效",
        2003: "服务器错误",
        2004: "服务器错误",
        2005: "服务器错误",
        2006: "所有词组的总符号数不能超过 200 000。",
        2007: "服务器错误",
        3001: "找不到主要ASIN搜索数据",
        3002: "找不到主要产品搜索数据",
        3003: "找不到此站点{marketplace}的缩写",
        4001: "服务器错误",
        4002: "服务器错误",
        4003: "服务器错误",
        4004: "服务器错误",
        4005: "服务器错误",
        4006: "服务器错误",
        4007: "服务器错误",
        5001: "搜索数据为空",
        5002: "所有或主要产品数据为空",
        5003: "搜索数据为空",
        5004: "无产品数据",
        5005: "服务器错误",
        5006: "服务器错误",
        6001: "未插入词组",
        6002: "未插入词组",
        6003: "不存在此用户的常用词",
        6004: "无所选站点的客户",
        6005: "您无法查看历史记录。如需查看，请升级您的 Helium 10 套餐。",
        6006: "服务器错误",
        6007: "服务器错误",
        6008: "找不到ID为 {productId}的产品详情",
        6009: "此关键词无结果！",
        6010: "文件未上传。",
        6011: "无法保存搜索模型",
        6012: "无法删除模型",
        6013: "搜索模型不存在",
        6014: "此用户的常用词不存在",
        6015: "常用词未删除",
        6016: "建议排名AVG不存在",
        6017: "建议排名不存在",
        6018: "建议位置筛选器不存在",
        6019: "广告平均排名Key不存在",
        6020: "服务器错误",
        6021: "广告位置筛选器不存在",
        6022: "词组Key不存在",
        6023: "位置范围不存在",
        6024: "竞品表现得分不存在",
        6025: "自然排名不存在",
        6026: "匹配类型不存在",
        6027: "词组为空或不存在",
        6028: "排名竞品不存在",
        6029: "相对排名不存在",
        6030: "位置排名不存在",
        6031: "筛选器的结果数量不存在",
        6032: "AVG竞品不存在",
        6033: "搜索量趋势值不存在",
        6034: "标题密度筛选器不存在",
        6035: "排名范围内产品为空或不存在",
        6036: "当前ASIN为空或不存在",
        6037: "此项为空或不存在",
        6038: "Amazon 搜索量筛选器不存在",
        6039: "搜索量曝光的筛选器不存在",
        6040: "跟踪的产品 ID 不存在",
        6041: "当前产品不存在",
        6042: "无结果数量",
        6043: "词组不存在",
        6044: "筛选器不能包括 includes-all 和 includes-any 参数，它们相当于 true 或 false",
        6045: "热销卖家所在国家或地区筛选器值不存在",
        6046: "无法构建反查",
        6047: "您无法导出过去的搜索。如需导出，请升级您的 Helium 10 套餐",
        6049: "筛选器未配置",
        6050: "外部服务停止运行或返回了无效数据",
        7001: "必须有至少 1 款竞品的结果",
        7002: "未按指定ASIN获得词组",
        7003: "搜索结果中无商品",
        7004: "排序方向错误",
        7008: "API中发现错误产品",
        7009: "ClickHouse 反查缺少ASIN",
        7010: "没有选择ClickHouse 反查的列",
        7011: "选择ClickHouse反查的列有格式错误",
        7012: "ClickHouse 反查的ASIN格式错误",
        7013: "Walmart 产品 ID 错误",
        7014: "发生错误：' . json_encode($errors, JSON_THROW_ON_ERROR)",
        7015: "您无法搜索超过 50 个关键词。如需更多，请升级您的 Helium 10 套餐",
        7016: "您无法搜索超过 200 个关键词",
        7017: "您的套餐不允许上传关键词",
        8001: "未知域 {domain}",
        8002: "未知市场 ID：{marketplaceId}",
        8003: "未知短 ID {shortId}",
        8004: "未知市场：{marketplace}",
        8005: "服务器错误",
        unknown: "服务器错误",
        "rta-1001": "AUTH_INVALID_TOKEN",
        "rta-1002": "AUTH_NO_USER",
        "rta-2001": "ASIN标识符格式 {asin}无效",
        "rta-2002": "{marketplace}站点的ASIN标识符 {asin} 无效",
        "rta-2003": "服务器错误",
        "rta-2004": "服务器错误",
        "rta-2005": "服务器错误",
        "rta-2006": "所有词组的总符号数不能超过 200 000。",
        "rta-2007": "服务器错误",
        "rta-3001": "找不到主要ASIN搜索数据",
        "rta-3002": "找不到主要产品搜索数据",
        "rta-3003": "找不到此站点{marketplace}的缩写",
        "rta-4001": "服务器错误",
        "rta-4002": "服务器错误",
        "rta-4003": "服务器错误",
        "rta-4004": "服务器错误",
        "rta-4005": "服务器错误",
        "rta-4006": "服务器错误",
        "rta-4007": "服务器错误",
        "rta-5001": "搜索数据为空",
        "rta-5002": "所有或主要产品数据为空",
        "rta-5003": "搜索数据为空",
        "rta-5004": "无产品数据",
        "rta-5005": "服务器错误",
        "rta-5006": "服务器错误",
        "rta-6001": "未插入词组",
        "rta-6002": "未插入词组",
        "rta-6003": "不存在此用户的常用词",
        "rta-6004": "无所选站点的客户",
        "rta-6005": "您无法查看历史记录。如需查看，请升级您的 Helium 10 套餐。",
        "rta-6006": "服务器错误",
        "rta-6007": "服务器错误",
        "rta-6008": "找不到ID为 {productId}的产品详情",
        "rta-6009": "此关键词无结果！",
        "rta-6010": "文件未上传。",
        "rta-6011": "无法保存搜索模型",
        "rta-6012": "无法删除模型",
        "rta-6013": "搜索模型不存在",
        "rta-6014": "此用户的常用词不存在",
        "rta-6015": "常用词未删除",
        "rta-6016": "建议排名AVG不存在",
        "rta-6017": "建议排名不存在",
        "rta-6018": "建议位置筛选器不存在",
        "rta-6019": "广告平均排名Key不存在",
        "rta-6020": "服务器错误",
        "rta-6021": "广告位置筛选器不存在",
        "rta-6022": "词组Key不存在",
        "rta-6023": "位置范围不存在",
        "rta-6024": "竞品表现得分不存在",
        "rta-6025": "自然排名不存在",
        "rta-6026": "匹配类型不存在",
        "rta-6027": "词组为空或不存在",
        "rta-6028": "排名竞品不存在",
        "rta-6029": "相对排名不存在",
        "rta-6030": "位置排名不存在",
        "rta-6031": "筛选器的结果数量不存在",
        "rta-6032": "AVG竞品不存在",
        "rta-6033": "搜索量趋势值不存在",
        "rta-6034": "标题密度筛选器不存在",
        "rta-6035": "排名范围内产品为空或不存在",
        "rta-6036": "当前ASIN为空或不存在",
        "rta-6037": "此项为空或不存在",
        "rta-6038": "Amazon 搜索量筛选器不存在",
        "rta-6039": "搜索量曝光的筛选器不存在",
        "rta-6040": "跟踪的产品 ID 不存在",
        "rta-6041": "当前产品不存在",
        "rta-6042": "无结果数量",
        "rta-6043": "词组不存在",
        "rta-6044": "筛选器不能包括 includes-all 和 includes-any 参数，它们相当于 true 或 false",
        "rta-6045": "热销卖家所在国家或地区筛选器值不存在",
        "rta-6049": "筛选器未配置",
        "rta-6046": "无法构建反查",
        "rta-6047": "您无法导出过去的搜索。如需导出，请升级您的 Helium 10 套餐",
        "rta-6050": "外部服务停止运行或返回了无效数据",
        "rta-7001": "必须有至少 1 款竞品的结果",
        "rta-7002": "未按指定ASIN获得词组",
        "rta-7003": "搜索结果中无商品",
        "rta-7004": "排序方向错误",
        "rta-7008": "API中发现错误产品",
        "rta-7009": "ClickHouse 反查缺少ASIN",
        "rta-7010": "没有选择ClickHouse 反查的列",
        "rta-7011": "选择ClickHouse反查的列有格式错误",
        "rta-7012": "ClickHouse 反查的ASIN格式错误",
        "rta-7013": "Walmart 产品 ID 错误",
        "rta-7014": "发生错误：' . json_encode($errors, JSON_THROW_ON_ERROR)",
        "rta-7015": "您无法搜索超过 50 个关键词。如需更多，请升级您的 Helium 10 套餐",
        "rta-7016": "您无法搜索超过 200 个关键词",
        "rta-8001": "未知域 {domain}",
        "rta-8002": "未知市场 ID：{marketplaceId}",
        "rta-8003": "未知短 ID {shortId}",
        "rta-8004": "未知市场：{marketplace}",
        "rta-8005": "服务器错误",
        "rta-7017": "您的套餐不允许上传关键词",
        "rta-2010": "无效的排序属性",
        "rta-2011": "筛选器值无效",
        "rta-2012": "无效的标题包括关键词长度",
        "rta-2013": "无效的标题排除关键词长度",
        "rta-7020": "名称已使用",
        "rta-22001": "无法保存筛选器预设。筛选器预设名称的最大长度为 255 个字符。",
        "rta-no-prev-searches": "没找到以前的搜索",
        "rta-0": "意外错误"
    }, ro = {
        pageTitle: "Elite Analytics",
        title: "Elite Analytics",
        description: "分析您的关键词，发现利基市场",
        learnTooltip: "观看视频并阅读文章以帮助您掌握 Magnet",
        totalDensity: "标题密度",
        totalDensityTooltip: "标题密度小于 12 的结果百分比",
        totalSearchVolume: "搜索量趋势",
        totalSearchVolumeTooltip: "搜索量趋势递增的结果百分比",
        totalAverageReview: "高评论数",
        totalAverageReviewTooltip: "高评论数大于 6 的百分比",
        totalMostFrequent: "热销卖家所在国家或地区",
        totalMostFrequentTooltip: "下面结果的热销卖家所在国家或地区。",
        backToUpload: "返回上传",
        showResults: "显示结果",
        tryAgain: "再试一次",
        modals: {
            importingTitle: "正在导入",
            validatedTitle: "文件已验证",
            limitExceededTitle: "超出限制",
            failedTitle: "导入失败",
            validatedDescription: "每月套餐限制剩余 {remainingUses}次关键词搜索，本次加载使用{requestedUses}次。",
            limitExceededDescription: {other: "您的这个月的关键词配额{totalUses}，还剩{remainingUses}。您的文件中有{requestedUses}行，我们会使用和分析您上传文件中的前{count}行。"},
            failedDescription: "糟糕，格式无法识别。请参见 {link} 了解如何设置文件格式。",
            KnowledgeBaseArticle: "知识库文章"
        },
        history: {
            descriptionTable: "查找以前的 Elite Analytics 报告并重新加载，不使用配额。",
            columns: {fileName: "文件名", keywordCount: "关键词数量", reportRunDate: "报告运行日期"}
        },
        landing: {
            title: "上传您的关键词列表，发现最有潜力的商机",
            description: "上传不超过 2000 行的 Black Box关键词、Amazon品牌分析报告、My List关键词或自定义文件，获取 Helium 10关键指标来发现每月的新商机。<br/><br/>此报告将提供标题密度、搜索量（+趋势）、高评论数、评论数量中位数和热销卖家所在国家或地区等数据。",
            buttonUpload: "上传关键词报告",
            viewSample: {curiousAbout: "看一下示例？", view: "看法", sample: "示例"},
            keywords: {other: "{count}/{total} 个每月剩余关键词"},
            titleModal: "Elite Analytics示例报告",
            videoTitle: "开始学习设置报告格式？",
            videoButton: "观看演示视频",
            upsell: {
                title: "已达到每月限制",
                description: "您已超出每月 2000 次关键词搜索的限制。您可以通过此页右上角的历史记录按钮查看过去的关键词报告。<br/><br/>请联系销售人员提高本月的关键词限制。",
                button: "联系销售"
            },
            notElite: {
                title: "使用 Elite Analytics 解锁关键洞察",
                description: "精英版允许您上传多达2000行的Black Box关键词、亚马逊品牌分析报告、我的列表关键词或其他您自行整理的关键词列表至H10，以进行关键指标分析，并进一步识别每月新的的机会。",
                learnMore: "了解Elite计划的更多信息",
                subDescription: "报告会提供关键词销量、标题密度、搜索量（及趋势）、好评数量、中评数量及频率最高的卖家国家。对此报告感兴趣？",
                sample: "示例。"
            }
        },
        filter: {
            exactTitleMatchProductsCount: {title: "标题密度", tooltip: "首页中标题含该关键词的商品数量"},
            impressionExact30: {title: "搜索量", tooltip: "每月搜索此关键词词组的估计次数"},
            searchVolumeTrend30: {title: "搜索量趋势", tooltip: "过去30天"},
            productsWithReviewsCount: {title: "高评论数", tooltip: "前12名卖家中评论超过 1000 条的数量"},
            medianReviews: {title: "评论数量中位数", tooltip: "前12名卖家评论数量中位数"},
            mostFrequentSellerCountryCode: {title: "热销卖家所在国家或地区", tooltip: "前50名热销卖家所在国家或地区", placeholder: "未选中"}
        },
        table: {
            keyword: {title: "关键词"},
            exactTitleMatchProductsCount: {title: "标题密度", tooltip: "首页中标题含该关键词的商品数量"},
            impressionExact30: {title: "搜索量", tooltip: "每月搜索此关键词词组的估计次数"},
            searchVolumeTrend30: {title: "搜索量趋势", tooltip: "过去30天"},
            productsWithReviewsCount: {title: "最高评论数", tooltip: "前 12 名卖家中评论超过 1000 条的数量"},
            medianReviews: {title: "评论数量中位数", tooltip: "前12名卖家评论数量中位数"},
            topSellerCountry: {title: "热销卖家所在国家或地区", tooltip: "前50名热销卖家所在国家或地区"},
            title: {other: "{count}个关键词"},
            titleSelected: {other: "已选择{count}个关键词"},
            monthlySales: {title: "关键词销量", tooltip: "每个关键词的估算总月销量（按单位计）"}
        },
        distributionByCountryModal: {title: "热销卖家所在国家或地区：{keyword}"},
        beta: {marketplaceTooptip: "测试版包含美国站。"},
        upload: {
            uploadStage: {
                title: "上传关键词文件",
                description: "上传不超过 2000 行的 Black Box 关键词、Amazon 品牌分析报告、My List 关键词或自定义文件，开始寻找商机。",
                fileRequirements: "文件要求",
                list: {item1: "每行包含一个关键词或关键词词组", item2: "CSV文件格式"},
                footer: {part1: "需要更多指导？请参见", part2: "知识库文章", part3: "了解详情。"},
                browse: "浏览",
                uploadFile: "上传文件",
                noFileSelected: "未选择文件"
            }
        },
        tooltips: {
            searchVolume: {green: "“绿色”表示30天上升的趋势", red: "“红色”表示30天下降的趋势"},
            highReviewCount: {
                green: "“绿色”表示前 12 个结果中，评论超过 1000 条的结果为 5 个以下。",
                yellow: "“黄色”表示前 12 个结果中，评论超过 1000 条的结果为 5 - 6 个。",
                red: "“红色”表示 12 个结果中，评论超过 1000 条的结果为 6 个以上。"
            },
            medianReviewCount: {green: "“绿色”表示评论数量低于 200。", yellow: "“黄色”表示评论数量介于 200 和 800。", red: "“红色”表示评论数量超过 800。"}
        }
    }, oo = {
        title: "Black Box",
        description: "通过选品发现商机",
        tabs: {
            products: {
                name: "产品",
                description: "通过评估产品、关键词、竞争对手等，找到要销售的产品",
                tooltip: "基于最具创新性的筛选器找到热销产品，帮助您选择要销售的潜在产品。"
            },
            keywords: {name: "关键词", description: "---", tooltip: "通过设置不同的筛选器获得流行的关键词。选择正确的关键词可以帮助你找到适合的产品。"},
            competitors: {name: "竞品", description: "---", tooltip: "查看竞争对手的核心数据，如竞品的销售、市场、品牌、卖家或listing。"},
            niche: {name: "利基", description: "---", tooltip: "在更大的市场中找到一个可以用你独特的关键词来定义的细分市场。"},
            productTargeting: {
                name: "产品定位",
                description: "---",
                tooltip: "通过查看不同的来源来优化你的产品定位。经常一起购买（Frequently Bought Together），亚马逊建议（Amazon Suggestion）和客户也购买（Customer Also Bought）。"
            },
            eliteAnalytics: {name: "Elite Analytics", description: "通过选品发现商机"},
            abaTopSearchTerms: {name: "ABA Top Search Terms"}
        },
        buttons: {
            saveAsFilterPreset: "另存为筛选器预设",
            search: "搜索",
            filterLibrary: "筛选器库",
            createYourOwnPresets: "创建您自己的预设",
            returnToPreviousVersion: "返回上一版本",
            restoreLastSearch: "恢复上次搜索",
            addToMyList: "将关键词添加到My List",
            removeFromMyList: "从My List移除",
            runInCerebro: "运行 Cerebro",
            runInListingAnalyzer: "运行Listing分析器",
            runInListingAnalyzerTooltip: "最多选择 {maxAsins} 个 产品来分析listing质量"
        },
        products: {
            filterGroups: {product: "产品", competitors: "竞品", sales: "销量"},
            fields: {
                categories: {label: "类目和子类目", tooltip: "无门槛的可用产品类目", placeholder: "选择一个或多个类目和子类目"},
                reviewCount: {label: "评论数量", tooltip: "客户评论总数", chip: "评论数量"},
                reviewRating: {label: "评论评分", tooltip: "亚马逊客户评论从差 (1) 到优秀 (5)"},
                salesRank: {label: "最佳卖家排名（BSR）", tooltip: "Amazon根据最近和历史销售额授予的排名", chip: "销量排名"},
                shippingSizeTier: {label: "运输尺寸", tooltip: "产品尺寸决定 FBA 运费"},
                weight: {label: "重量（磅）", tooltip: "产品和包装总重量", chip: "重量", tableTooltip: "包装重量（磅）", unit: "磅"},
                fulfillment: {
                    label: "配送方式",
                    tooltip: "存储和运输方式<br/> FBA = 亚马逊配送<br/> FBM = 商家配送<br/>亚马逊 = 亚马逊销售 ",
                    chip: {title: "配送方式"}
                },
                numberOfImages: {label: "图片的数量", tooltip: "产品页面上的图片数量", chip: "图像数量"},
                variationCount: {label: "变体数量", tooltip: "产品变体数量", chip: "变体数量"},
                titleKeyword: {label: "标题关键词", tooltip: "仅限产品标题关键词搜索", placeholder: "例如：红色连衣裙"},
                titleExcludeKeyword: {
                    label: "排除标题关键词",
                    tooltip: "排除标题中包含输入关键词的产品（用英文逗号分隔）",
                    chip: "排除标题关键词",
                    placeholder: "不包括：红色、蓝色"
                },
                numberOfSellers: {label: "卖家数量", tooltip: "活跃卖家数量", chip: "卖家数量"},
                brandInclude: {
                    label: "准确的品牌搜索",
                    tooltip: `特定的品牌名称，以逗号分隔。如果品牌名称当中含有符号，请使用英文字符双引号标记品牌名称以获得目标搜索结果。举例：<b>"ABC's LLC"</b>`,
                    placeholder: "示例：苹果",
                    chip: "包括品牌"
                },
                brandExclude: {
                    label: "排除品牌",
                    tooltip: `排除特定的品牌名称，以逗号分隔。如果品牌名称当中含有符号，请使用英文字符双引号标记品牌名称以获得目标搜索结果。举例：<b>"ABC's LLC"</b>`,
                    chip: "排除品牌",
                    placeholder: "不包括: Belkin"
                },
                sellerInclude: {
                    label: "准确的卖家搜索",
                    tooltip: `特定的卖家名称，以逗号分隔。如果卖家名称当中含有符号，请使用英文字符双引号标记卖家名称以获得目标搜索结果。举例：<b>"ABC's LLC"</b>`,
                    chip: "包括卖家",
                    placeholder: "不包括: Anker"
                },
                sellerExclude: {
                    label: "排除卖家",
                    tooltip: `排除特定的卖家名称，以逗号分隔。如果卖家名称当中含有符号，请使用英文字符双引号标记卖家名称以获得目标搜索结果。举例：<b>"ABC's LLC"</b>`,
                    chip: "排除卖家",
                    placeholder: "不包括: Satechi"
                },
                price: {
                    label: "价格",
                    tooltip: "产品的销售价格",
                    tableTooltip: "历史价格与价格趋势",
                    priceTooltip: "当前价格",
                    priceTrendTooltip: "90 天价格趋势",
                    chip: "价格"
                },
                priceChange: {label: "价格变化 (%)", tooltip: "过去 90 天的价格的百分比变化", chip: "价格变化"},
                monthlySales: {
                    label: "月销量（单位）",
                    tooltip: "过去 30 天预计售出的单位数量",
                    tableLabel: "月销量",
                    chip: "月销量",
                    tableTooltip: "历史月销售额和销售趋势",
                    salesTooltip: "月销量（单位）",
                    salesTrendTooltip: "90 天销量趋势"
                },
                salesYearOverYear: {label: "销量年同比 (%)", tooltip: "过去 12 个月的百分比变化", chip: "销量年同比"},
                bestSalesPeriod: {label: "最佳销售月", tooltip: "产品销量最高的月份", placeholder: "输入日期", tableLabel: "最佳销售期"},
                salesToReviews: {label: "销量与评论的比率", tooltip: "月销量（单位）/总评论数", tableLabel: "销量评论比", chip: "销量评论比"},
                monthlyRevenue: {label: "月销售额", tooltip: "一个产品在过去30天内的估计销售额", chip: "月销售额"},
                salesChange: {label: "销量变化 (%)", tooltip: "过去 90 天内月销量的百分比变化", chip: "销量变化"},
                product: {label: "产品", tooltip: "需要提示"},
                categoryBSR: {
                    label: "类目 BSR",
                    tooltip: "类目最佳卖家排名（BSR）",
                    mainCategoryTooltip: "主类目 BSR",
                    subcategoryTooltip: "子类目BSR",
                    subcategoryTemporaryTooltip: "子类目"
                },
                monthlySalesTable: {label: "月销量", tooltip: "过去 30 天预计售出的单位数量"},
                reviews: {label: "评论", tooltip: "评论数与评分", numberOfReviewTooltip: "产品的客户评论总数", reviewRatingTooltip: "评论评分"},
                seller: {label: "卖家", tooltip: "卖家姓名和卖家数量", sellerNameTooltip: "卖家姓名", numberOfSellersTooltip: "活跃卖家数量"},
                lastYearSales: {
                    label: "去年销量",
                    tooltip: "去年销售额与销售趋势",
                    salesTooltip: "去年销量（单位）",
                    salesYearOverYearTooltip: "销量年同比"
                },
                shippingDetails: {
                    label: "配送详情",
                    tooltip: "运输尺寸分级与尺寸大小",
                    productSizeTooltip: "产品尺寸决定 FBA 运费",
                    dimensionsTooltip: "包装尺寸（英寸）"
                },
                storageFee: {label: "仓储费用", tooltip: "仓储费（1,000 单位/月）"},
                "Best Sales Period": {label: "最佳销售期", tooltip: "需要提示"},
                age: {
                    label: "年龄（月）",
                    tooltip: "热销产品的平均listing时长",
                    filterLabel: "Listing上架时长（月）",
                    filterTooltip: "Listing上架时长（月）",
                    chip: "Listing上架时长"
                },
                titleIncludeKeyword: {label: "标题关键词", tooltip: "仅限产品标题关键词搜索", placeholder: "例如：红色连衣裙", chip: "标题关键词"},
                category: {
                    label: "类目和子类目",
                    tooltip: "无门槛的可用产品类目",
                    placeholder: "选择一个或多个类目和子类目",
                    chip: {title: "类目", subtitle: "子类目"}
                },
                reviewsRating: {label: "评论评分", tooltip: "亚马逊客户评论从差 (1) 到优秀 (5)", chip: "评论评分"},
                sizeTier: {chip: {title: "运输尺寸"}},
                bestMonth: {
                    label: "最佳销售月",
                    tooltip: "产品销量最高的月份",
                    placeholder: "输入日期",
                    chip: "最佳销售月",
                    tableLabel: "最佳销售期",
                    tableTooltip: "产品销量最高的月份"
                },
                brand: {label: "品牌", tooltip: "品牌名称"}
            },
            common: {anyCategory: "任何类目", anyCategorySimple: "任何类目"},
            filterTabs: {simple: "简单", advanced: "进阶", advancedTooltip: "需要文字"},
            simple: {
                title: "回答这些问题以查找产品",
                subtitle: "我想销售一种产品...",
                inThe: "在",
                marketplaceFor: "站点",
                thatNeeds: "，需要",
                improvementRange: "（改进范围）",
                improvement: "改进，",
                competitionRange: "（竞争范围）",
                whereCompetitionIs: "竞争为",
                priceRange: "(价格范围)",
                iWantToSellMyProductFor: "产品售价为",
                monthlyRevenueOptions: "（月销售额选择）",
                withMonthlyRevenueOf: "月销售额为",
                marketplace: "站点，",
                for: "所在类目为",
                price: "(价格范围)",
                monthlyRevenue: "（月销售额选择）"
            },
            advanced: {titlePart1: "查找产品", titlePart2: "符合您的条件", presetsTitle: "使用筛选器预设来加速搜索："},
            result: {
                title1: "产品在",
                title2: "符合您的条件",
                editFilters: "编辑筛选器",
                titleTable: "查看{from} - {to}个产品， {total}个产品",
                titleTableSelected: "已选择{selected}个， {total}个产品",
                advanced: "显示更多产品详细信息"
            },
            chartTitles: {
                bsr: "销售排行(BSR)： {asin}",
                price: "价格: {asin}",
                sales: "销量: {asin}",
                reviews: "评论: {asin}",
                review: "评论: {asin}"
            },
            exportTitles: {
                asin: "ASIN",
                title: "标题",
                sellerType: "配送方式",
                category: "类目",
                bsr: "BSR",
                subcategory: "子类目",
                subcategoryBsr: "子类目BSR",
                price: "价格",
                priceChange: "价格趋势（90 天）",
                monthlySales: "月销量",
                salesChange: "销量趋势（90 天）",
                monthlyRevenue: "月销售额",
                reviewCount: "评论数量",
                reviewsRating: "评论评分",
                bbSeller: "卖家",
                numberOfSellers: "活跃卖家数量",
                yearSales: "去年销量",
                salesYearOverYear: "销量年同比",
                sizeTier: "尺寸分级",
                width: "宽度",
                height: "高度",
                length: "长度",
                weight: "重量",
                storageFee: "仓储费用",
                bestMonth: "最佳销售期",
                age: "年龄（月）",
                numberOfImages: "图片的数量",
                variationCount: "变体数量",
                salesToReviews: "销量评论比",
                brand: "品牌"
            },
            chartAxis: {
                bsr: "销量排名",
                price: "价格",
                sales: "销量",
                reviewCount: "评论数量",
                rating: "评分",
                "7DayMovingAverage": "7 天平均走势图",
                trend: "趋势",
                mainCategoryBSR: "主类目 BSR",
                subcategoryBSR: "子类目BSR"
            }
        },
        tabsTitle: "搜索：",
        storageFee: {janSept: "1 月 - 9 月", octDec: "10 月 - 12 月"},
        presetFilters: {
            "Product sales increase fast over the last month": {title: "高增长", description: "产品销售在过去一个月中快速增长"},
            "Product selling well but doesn’t have a good rating": {title: "评分低", description: "产品销售良好，但评价不高"},
            "Few product images but high sales": {title: "图像数量少", description: "产品图片少但销量高"},
            "Small size but sales well": {title: "小型轻件", description: "体积小但销量不错"}
        },
        presetModal: {title: {new: "筛选器预设名称", edit: "重命名筛选器预设名称"}, name: {label: "输入唯一的预设名称", placeholder: "为此预设选择一个名称"}},
        filters: {
            messages: {
                rename: {success: "筛选器已重新命名"},
                create: {success: "预设筛选器保存到筛选器库"},
                delete: {success: "从筛选器库中删除预设筛选器"}
            }
        },
        addToMyList: {success: "产品已被成功添加到My List中", warning: "所有列出的产品已经被添加到My List中。", reject: "未能将产品添加到My List中"},
        upgradeBanner: {text: "剩余搜索次数：<b>{uses}</b>", button: "升级至无限制"},
        options: {
            shoppingSize: {1: "小型标件", 2: "大型标准大小", 3: "小型超大", 4: "中等超大", 5: "大型超大件", 6: "特殊超大"},
            fulfillment: {1: "Amazon", 2: "FBA", 3: "FBM"},
            simpleImprovementRange: {1: "一点儿", 2: "一些", 3: "很多"},
            simpleCompetitionRange: {1: "低", 2: "中", 3: "高"},
            simplePrice: {1: "$0-30", 2: "$30-100", 3: "$100+"},
            simpleMonthlyRevenue: {1: "$0-1,000", 2: "$1,000-10,000", 3: "$10,000+"}
        }
    }, io = {cerebro: "Cerebro", magnet: "Magnet", opportunity: "Elite Analytics"},
    no = {anythinElse: {cerebro: "对 Cerebro 批量报告感兴趣", blackBox: "对 Black Box 批量报告感兴趣"}},
    lo = {title: "数据是针对您的套餐级别随机化的数据。", button: "升级以获得完整结果"},
    so = {day: {other: "日"}, year: {other: "年"}, allTime: "全部时间"}, uo = {moreThan: "超过", lessThan: "小于"},
    co = {downloadCSV: "下载CSV文件", downloadXLS: "下载XLS文件", downloadPNG: "下载 PNG 图像", downloadJPEG: "下载JPEG图像"}, mo = {
        decline: "以后再说",
        addToKeywordTracker: "添加到 Keyword Tracker",
        addToMyList: "添加到My List",
        trackCompetitor: "追踪竞品",
        analyzeKeywordsInCerebro: "在<b>Cerebro</b>中分析关键词",
        runListingAnalyzer: "运行<b>Listing分析师</b>",
        export: "导出"
    }, po = {
        modal: {
            title: "连接您的卖家账户，以便在Cerebro内看到亚马逊品牌注册数据",
            sellers: "上个月有 {number} 名用户连接了他们的卖家账户。",
            text: {
                part1: "将您的 Amazon 帐户安全地连接到 Helium 10，为您的业务解锁强大的工具和洞察力。",
                part2: "Cerebro 中的亚马逊品牌注册数据仅供注册亚马逊品牌注册计划的卖家使用。",
                part2New: "Cerebro或Magnet中的亚马逊品牌注册数据仅终于进行过亚马逊品牌注册的卖家。"
            },
            acceptButton: "连接到亚马逊",
            titleNew: "连接您的卖家账户，以便在Cerebro或Magnet中内查看亚马逊品牌注册数据。"
        }
    }, ho = {
        modal: {
            title: "Cerebro 中的亚马逊品牌分析需要品牌注册",
            text: {
                part1: "亚马逊品牌注册使您能够更准确地展示您的品牌、发现和报告违规行为并保护您的知识产权。",
                part2: {part1: "它仅适用于注册了亚马逊品牌注册计划的卖家。访问", button: "亚马逊的计划详情页面", part2: "了解福利和资格要求。"},
                part3: "了解 Helium 10 策略如何帮助您快速获得品牌注册"
            },
            acceptButton: "了解更多",
            titleNew: "Cerebro或Magnet中的亚马逊品牌分析需要先进行亚马逊品牌注册"
        }
    }, go = {
        drawer: {
            title: "亚马逊品牌分析",
            tooltip: "发现哪些产品在战略搜索词上赢得了最多的点击和转化。通过监控趋势来评估营销活动的影响。",
            chart: {
                title: "前 3 个 ASIN 概览",
                yAxis: {totalRate: "总份额", searchFrequencyRank: "搜索频率排名"},
                legend: {
                    clickedRate: {title: "前 3 个 ASIN 点击份额", tooltip: "前 3 个 ASIN 点击份额的总和"},
                    conversionRate: {title: "前 3 个 ASIN 转化份额", tooltip: "前 3 个 ASIN 转化份额的总和"},
                    frequencyRank: {title: "搜索频率排名", tooltip: "特定站点的所有亚马逊搜索词的搜索频率排名"}
                },
                noHoveredYet: "将鼠标悬停在图表上可查看点击次数最多的 3 个 ASIN",
                reportingRange: "报告范围"
            },
            top3Asins: {
                title: "点击最高的3个ASINs",
                asinTitle: "# {number}点击的 ASIN",
                rates: {title: "份额", click: "点击", conversion: "转化率"}
            },
            tables: {
                fields: {
                    product: {title: "{date}点击次数最多的 ASIN", tooltip: "根据所选时间范围内的搜索结果，点击最高的 3 个 ASIN"},
                    clickRate: {title: "点击份额", tooltip: "该产品取得的点击与在选定的时间范围内搜索结果的总点击的百分比。"},
                    conversionRate: {title: "转化份额", tooltip: "该产品取得的转化率与在选定的时间范围内搜索结果的总转化的百分比。"},
                    organicRank: {title: "平均自然排名", tooltip: "[Helium 10 Data] 所分析产品在此关键词搜索结果中的自然排名"},
                    sponsoredRankAvg: {title: "广告推广排名（平均）", tooltip: "[Helium 10 数据] 广告检测到客户搜索中的最后一个位置"}
                }, subtotal: "小计"
            }
        },
        calendar: {
            weekly: {label: "每周", info: "您可以选择最少14天。"},
            monthly: {label: "每月", info: "您可以选择最少2 个月。"},
            quarterly: {label: "季度", info: "您可以选择最少2 个季度。"}
        },
        clickAndConversionRate: {
            title: "点击和转化份额： {asin}",
            subtitle: "基于来自亚马逊Brand Analytics (品牌分析)的数据",
            legend: {clickRate: "点击份额", conversionRate: "转化份额"},
            emptyData: "此 ASIN 在选定的时间段内未排名前 3。",
            period: {last30days: "过去 30 天", last2Months: "过去 2 月", last6Months: "过去 6 月", last12Months: "过去 12 月"}
        },
        period: {
            info: "您可以选择最少{number}个 {period}。",
            periods: {days: "天", weeks: "周", months: "月", quarters: "季度"},
            presets: {weekly: "每周", monthly: "每月", quarterly: "季度"}
        },
        filter: {
            clickShare: {title: "ABA 前 3 个 ASIN 总点击份额。", tooltip: "来自 ABA Data 的前 3 个 ASIN 点击份额的总和。"},
            conversionShare: {title: "ABA 前 3 个 ASIN 总转化份额。", tooltip: "来自 ABA 数据的前 3 个 ASIN 转化份额的总和。"},
            searchFrequencyRank: {
                title: "搜索频率排名",
                tooltip: "The ranked order of search frequency. Search terms with the same search frequency over the selected time frame will show the same rank."
            }
        },
        table: {
            clickShare: {
                tooltip: {
                    title: "关键词指标，包括前3的ASIN的点击率和转化率。",
                    restricted: "升级至{upgradePlan}以解锁亚马逊品牌分析和完整的关键词销量数据。",
                    noTokens: "该功能仅适用于已经将卖家账号绑定至H10并已经完成亚马逊品牌注册的卖家。"
                }
            },
            convShare: {
                tooltip: {
                    title: "获取每个关键词排名前3位的点击量的产品的洞察。",
                    restricted: "升级至{upgradePlan}来查看关键词历史搜索排名。",
                    noTokens: "该功能仅适用于已经将卖家账号绑定至H10并已经完成亚马逊品牌注册的卖家。"
                }
            }
        }
    }, bo = {today: "今天", yesterday: "昨天", previousDay: "前一天", lastNDays: "过去 {N} 天"}, vo = "期间", yo = {
        tooltipSingle: "对搜索框中输入的ASIN进行一次Listing分析师的搜索。",
        tooltipMultiple: "对搜索框中输入的前{maxAsins}个ASIN进行一次Listing分析师的搜索。"
    }, So = {
        title: "历史趋势",
        allProducts: "所有产品",
        tableTitleText: {selectedDate: "历史趋势： {date}"},
        keywordType: {organicSearch: "自然搜索", sponsoredProduct: "商品推广", amazonRecommended: "亚马逊推荐"},
        distributionBy: {
            keywordType: {
                switch: "关键词类型",
                keywordsCount: {title: "按类型分类的关键词总数", tooltip: "按关键词计数查看过去 24 个月的广告产品、自然搜索和亚马逊推荐的分布情况。选择任何月份以显示您选择的关键词类型。"},
                searchVolume: {title: "按类型分类的关键词搜索量", tooltip: "按搜索量查看过去 24 个月的广告产品、自然搜索和亚马逊推荐的分布情况。选择任何月份以显示您选择的关键词类型。"}
            },
            products: {
                switch: "产品",
                keywordsCount: {title: "关键词在产品上的分布", tooltip: "查看最近 24 个月所有关键词在产品上的分布。选择任何月份以显示关键词在您所选产品上的分布。"},
                searchVolume: {title: "关键词搜索量在产品上的分布", tooltip: "查看最近 24 个月关键词搜索量在产品上的分布。选择任何月份以显示关键词在您所选产品上的分布。"}
            }
        },
        searchVolumeKeywordsCountSwitch: {
            keywordsCount: {title: "关键词计数", tooltip: "关键词数量"},
            searchVolume: {title: "搜索量", tooltip: "搜索量"}
        },
        clearHistoricalTrendFilters: {button: "清除历史趋势筛选器", tooltip: "查看最近几个月的关键词总数和关键词类型信息。"},
        legend: {
            other: "其他",
            byTypes: {
                sponsoredProduct: {title: "商品推广"},
                organicSearch: {title: "自然搜索"},
                amazonRecommended: {
                    title: "亚马逊推荐",
                    tooltips: {
                        keywordsCount: "Amazon Recommended 的关键词计数从 2022 年 9 月开始有。",
                        searchVolume: "Amazon Recommended 的搜索量从 2022 年 9 月起开始有。"
                    }
                },
                sponsored: {title: "商品推广", abbreviation: "SP"},
                organic: {title: "自然", abbreviation: "O"},
                "section-amazons-choice": {
                    title: "Amazon's Choice",
                    abbreviation: "AC",
                    tooltips: {
                        keywordsCount: "Amazon Recommended 的关键词计数从 2022 年 9 月开始有。",
                        searchVolume: "Amazon Recommended 的搜索量从 2022 年 9 月起开始有。"
                    }
                },
                "section-highly-rated": {title: "Highly Rated", abbreviation: "HR"},
                "section-sponsored-brand-header": {title: "Sponsored Brand Header", abbreviation: "SBH"},
                "section-sponsored-video": {title: "品牌推广视频", abbreviation: "SBV"},
                "section-editorial-recommendations": {title: "Editorial Recommendations", abbreviation: "ER"},
                "top-rated-from-our-brand": {title: "Top Rated From Our Brand", abbreviation: "TRB"},
                "section-trending-now": {title: "Trending Now", abbreviation: "TN"},
                ppc: {title: "亚马逊推荐", abbreviation: "AR"}
            },
            keywordTypes: "关键词类型",
            byCategories: {all: "全部", organic: "自然", paid: "广告关键词"}
        },
        periodRangeSelect: {last3: "过去 3 月", last6: "过去 6 月", last12: "过去 12 月", last24: "过去 24 月"},
        basedOn: "基于{date}",
        upgradeTooltip: {
            title: "历史趋势仅适用于精英版",
            text: "精英版允许您选择以关键词流量结构类型或不同产品的关键词流量结构来查看过去24个月的关键词流量结构数据以发现新的机会。",
            dismiss: "忽略",
            learnMore: "了解更多有关Elite精英版",
            upgradeTo: "升级至<br/>{upgradePlan}"
        },
        searchesRemain: "次搜索可用",
        dailySearches: "每日搜索次数",
        uses: {tooltip: {diamond: "每个单独的ASIN搜索或在“显示历史趋势”的选择不同月份都会算为一次搜索。<br/><br/>在同一个会话里重复不算额外的。<br/><br/>您的每日限额是{value} 次搜索。如果您达到了当日限额，第二条该限额会进行重置。"}},
        notifications: {
            dailyLimitReached: "您已经超出每日历史数据搜索限额。请明日再试。",
            willExceedLimit: {title: "没有剩余的搜索次数", text: "您正在尝试一次搜索，该搜索需要至少{productsCount}次搜索。"}
        },
        upgradeModal: {
            title: "升级至{upgradePlan}解锁更多功能",
            subtitle: "通过全面的关键词调研解决方案和高级分析来为您的Listing导入更多流量",
            declineButton: "不是现在",
            acceptButton: "升级至{upgradePlan}",
            priceMo: "{price}美元/月",
            searchesPerDay: "{uses} 次搜索/月",
            features: {
                amazonBrandAnalytics: {title: "亚马逊品牌分析", subtitle: "品牌注册卖家可以追踪趋势并获得关键词流行度以及历史销量数据，从而进行更好的决策"},
                competitorTracking: {title: "竞品追踪", subtitle: "利用每日自动提醒来实时掌控竞争对手的变化，包括价格、销售趋势、Listing质量得分，等。"},
                keywordSalesData: {title: "关键词销量数据", subtitle: "获得历史关键词数据的关键洞察，并查看您的哪些关键词是出单词，从而进行定位投放。"},
                insightsDashboard: {title: "洞察控制面板", subtitle: "定制化的洞察可以自动发现有关您的业务的关键问题。您可以据此对您的业务的影响程度来确定需要优先进行的操作。"}
            },
            plans: {
                Helium10_ALaCarte: "附加组件",
                Helium10_ALaCarteAnnual: "空",
                Helium10_Enterprise: "定制版",
                Helium10_Elite: "企业版",
                Helium10_Elite_399: "企业版",
                Helium10_Elite_Quarter: "企业版",
                Helium10_Elite_Annual: "企业版",
                Helium10_Supercharge_Your_Brand: "企业版",
                Helium10_Supercharge_Your_Brand_Annual: "企业版",
                Helium10_Diamond: "精英版",
                Helium10_Diamond_199: "精英版",
                Helium10_DiamondAnnual: "精英版",
                Helium10_DiamondAnnual_1999: "精英版",
                Helium10_Diamond_249: "精英版",
                Helium10_DiamondAnnual_2499: "精英版",
                Helium10_Professional_Cn: "专业版",
                Helium10_Professional_Cn_Annual: "专业版",
                Helium10_Scale_Your_Business: "精英版",
                Helium10_Scale_Your_Business_Annual: "精英版",
                Helium10_Adtomic_And_Scale_Your_Business_Bundle: "精英版",
                Helium10_Adtomic_And_Scale_Your_Business_Bundle_Annual: "精英版",
                Helium10_Platinum: "创业版",
                Helium10_Platinum_99: "创业版",
                Helium10_PlatinumAnnual: "创业版",
                Helium10_PlatinumAnnual_999: "创业版",
                Helium10_Platinum_FastAction: "创业版",
                Helium10_Entrepreneur_Cn: "创业版",
                Helium10_Entrepreneur_Cn_Annual: "创业版",
                Helium10_Start_Your_Business: "创业版",
                Helium10_Start_Your_Business_Annual: "创业版",
                Helium10_Gold: "创业版",
                Helium10_GoldAnnual: "创业版",
                Helium10_Starter: "探索版",
                Helium10_Starter_39: "探索版",
                Helium10_StarterAnnual: "探索版",
                Helium10_StarterAnnual_339: "探索版",
                Helium10_Explorer_Cn: "探索版",
                Explorer_Cn_Annual: "探索版",
                Helium10_Free: "免费"
            }
        },
        subtitle: 'To view historical keyword ranks and search volumes in Cerebro results, simply click on a month in the graph below and then click "apply filters."',
        upgradeTooltipNew: {
            title: "历史趋势",
            text: "Explore seasonality trends over 24 months and drill into a specific month. Refine your results via an interactive chart to drill into historical rank, search volume, and sales."
        },
        bannerTitle: "Sneak peak: Historical Trends feature. Upgrade for interactive graphs and explore keyword distribution by type or product."
    }, fo = {
        modal: {header: {title: "PPC出价：", subtitle: "Helium 10 建议的 PPC 出价"}},
        filter: {
            suggestedPPC: {
                title: "建议的PPC出价",
                tooltipAmazon: "建议的出价和出价范围是根据一组与您的广告相似的广告的中标出价计算得出的。您可以选择使用建议的出价，或出价范围内或范围外的任何出价。"
            }
        },
        table: {
            suggestedPPC: {
                title: "建议的PPC出价",
                titleLocked: "建议<br/>PPC出价",
                tooltipAmazon: "建议的出价和出价范围是根据一组与您的广告相似的广告的中标出价计算得出的。您可以选择使用建议的出价，或出价范围内或范围外的任何出价。",
                tooltipAmazonForValue: "大多数广告都以{ppcFrom}和{ppcTo}之间的出价中标。对于此关键词或广告组，我们建议出价为{ppc} 。提高出价可以使您的广告在竞价中更具竞争力。"
            },
            suggestedPPCExport: {title: "H10 PPC 建议出价"},
            suggestedPPCMinExport: {title: "H10 PPC 建议最低出价"},
            suggestedPPCMaxExport: {title: "H10 PPC 建议最高出价"}
        }
    }, Ao = {cerebro: {toolTip: "过滤器可用于缩小数据结果范围并为您的调研找到最相关的关键词。"}},
    wo = {chip: "精英版", learnMore: "学到更多", upgradeNow: "现在升级"}, ko = {
        landing: {
            new: {
                title: {
                    available_true: "Quickly Identify Q4 Keywords",
                    available_false: "Unlock Q4 Keywords at the Diamond Level"
                },
                boldText: {
                    available_true: "Optimize year-end listings with preloaded {year} search volume metrics to identify past and present trends.",
                    available_false: "Optimize year-end listings with preloaded {year} search volume metrics to identify past and present trends at the Diamond level."
                },
                text: "Ready to uncover hidden seasonal trends? Compare current and historical keyword distribution, sponsored or organic rank, and analyze sales over the past two years.",
                watchButton: {available_true: "Watch how to boost end of year sales.", available_false: "观看策略介绍视频"}
            },
            old: {
                title: "Search specific products from Amazon and find their top ranking keywords",
                text: "Leverage your competitors’ keyword ranking strategy to improve your own listing. You can also use Cerebro to gauge the most effective keywords for your product on Amazon, optimize your product listing to boost sales, and keep competitive rates on your products. Cerebro is key in successfully launching new products and bringing more awareness to your brand.",
                text2: "开始学习Cerebro?",
                watchButton: "Watch our introductory video."
            }
        },
        banner: {
            title: "<b>Optimize December Sales:</b> Compare {year} Search Volume or Explore Seasonal Trends.",
            button: "观看策略介绍视频"
        },
        filter: {
            title: "Compare Q4 2022 Historical Trend Filters",
            badge: "限时策略",
            text: "For a limited time, quickly identify low ranking keywords and consider updating your listing or PPC campaign to boost Q4 sales."
        },
        upgradeTooltip: {
            title: "Q4 Prep Strategies",
            text: "Compare current keyword search volume to last year's data to view seasonal traffic increases."
        },
        tableSettings: {tooltip: "View historical <b>October and November {year} Search Volume</b> by customizing your table settings."},
        fields: {
            searchVolume: {
                filter: {title: "{month} Search Volume", tooltip: "每月搜索此关键词词组的估算次数。"},
                table: {
                    title: "{month}<br/>Search Volume",
                    tooltip: "Explore seasonality {node_0} and pinpoint a specific month of interest. Refine your results using an interactive chart to delve into historical rank, search volume, and sales data.",
                    tooltipNode: "trends over the past 24 months"
                },
                limited: {tooltip: "Compare current keyword search volume to last year's data to identify seasonal traffic increases."}
            }
        }
    }, To = {
        presetsTitle: "使用筛选器预设来加速搜索：",
        emptyText: "No available presets",
        buttons: {saveAsFilterPreset: "另存为筛选器预设", filterLibrary: "筛选器库"},
        editModal: {title: {new: "筛选器预设名称", edit: "重命名筛选器预设名称"}, name: {label: "输入唯一的预设名称", placeholder: "为此预设选择一个名称"}},
        staticPresetNames: {
            "Top Keywords": {title: "排名靠近关键词", description: "竞争对手常用的主要关键词，搜索量很大"},
            "Opportunity Keywords": {
                title: "机会关键词",
                description: "Keywords that create opportunity to calculate your rank using activity, rank and search volume of the competitor"
            },
            "Product sales increase fast over the last month": {title: "高增长", description: "产品销售在过去一个月中快速增长"},
            "Product selling well but doesn’t have a good rating": {title: "评分低", description: "产品销售良好，但评价不高"},
            "Few product images but high sales": {title: "图像数量少", description: "产品图片少但销量高"},
            "Small size but sales well": {title: "小型轻件", description: "体积小但销量不错"},
            "Dominant Demand": {title: "Dominant Demand"},
            "Growth Opportunities": {title: "Growth Opportunities"},
            "Emerging Contenders": {title: "Emerging Contenders"},
            "Conversion Pioneers": {title: "Conversion Pioneers"}
        },
        messages: {
            rename: {success: "Preset filter is renamed"},
            create: {success: "预设筛选器保存到筛选器库"},
            delete: {success: "从筛选器库中删除预设筛选器"}
        },
        tooltips: {youAlreadyHavePresetWithSameSettings: 'You already have preset <b>"{name}"</b> with same settings'}
    }, zo = {
        0: "1月",
        1: "2月",
        2: "3月",
        3: "4月",
        4: "5月",
        5: "6月",
        6: "7月",
        7: "8月",
        8: "9月",
        9: "10月",
        10: "11月",
        11: "12月"
    }, _o = {
        common: {week: "Week"},
        marketplaceAndPeriodSelectors: {
            text1: "View the Amazon Brand Analytics Report on",
            text2: "during the",
            periodTypeOptions: {Weekly: "Week of", Monthly: "Month of"}
        },
        banners: {
            start: {
                title: "ABA Top Search Terms",
                text: "Tailored for <b>brand-registered</b> Amazon sellers. This exclusive feature in Blackbox goes beyond traditional analysis, offering advanced keyword discovery, trend-spotting, and competitive benchmarking unique to Helium 10. Harness the power of unique data algorithms to identify untapped markets and optimize your listings like never before.",
                videoButton: "观看视频",
                dismiss: "忽略"
            },
            unlock: {
                title: "Unlock ABA Top Search Terms",
                text: "Exclusively for Diamond subscribers with registered brands: Unleash the power of Amazon Brand Analytics! Dive into top-performing ASINs, compare click shares and conversion rates, and uncover fresh product opportunities by leveraging elite keyword insights. Elevate your product discovery journey today!"
            }
        },
        noToken: {
            title: "Connect your Seller Account for insights into Amazon Brand Registry data",
            subtitle: "To view the ABA Top Search Terms data, you’ll need at least one Amazon Seller account connected to Helium 10.",
            text: "7,054 users connected their Seller Account last month.<br/><br/>Securely connect your Amazon account to Helium 10 to unlock powerful tools and insights for your business.<br/><br/>Amazon Brand Registry data within Black Box, Cerebro or Magnet is only available to sellers who are enrolled in Amazon’s Brand Registry program.",
            note: "我们知道数据安全对我们的客户有多么重要。我们承诺绝不共享或出售您的数据，并保持最高的数据安全标准。"
        },
        noABAToken: {
            title: "Final step: Unlock Powerful Insights with Amazon Brand Registry!",
            text: "Access Exclusive ABA Top Search Terms & Safeguard Your Brand<br/><br/>Amazon Brand Registry doesn’t only secure your intellectual property but also unlocks robust insights with Amazon Brand Analytics. Protect your products, monitor violations, and leverage pivotal data to elevate your sales strategy, exclusively available to registered brands.<br/><br/>Discover comprehensive benefits and eligibility criteria directly from Amazon's Program Details page. Also, navigate through the quick and strategic path to Brand Registration with Helium 10's unique strategies."
        },
        buttons: {
            upgradeTo: "升级至{upgradePlan}",
            connectToAmazon: "绑定亚马逊账户",
            viewABADetails: "View Amazon’s Program Details Page",
            learnMore: "了解更多",
            advancedSettings: "更多设置",
            apply: "应用",
            runInMagnet: "Run in Magnet",
            addToKeywordTracker: "添加到 Keyword Tracker",
            addToMyList: "添加到My List"
        },
        summary: {
            title: "ABA Keyword Summary",
            metricsTitle: "关键词分配",
            metrics: {
                totalKeywords: {title: "总关键词"},
                top3AsinsTotalMonthlyUnitSales: {
                    title: "Top 3 ASINs Total<br/>Monthly Unit Sales",
                    tooltip: "Total sales of the top three ASINs in your filtered results"
                },
                top3AsinsTotalMonthlyRevenue: {
                    title: "Top 3 ASINs Total<br/>Monthly Revenue",
                    tooltip: "Total revenue generated by the top three ASINs in your filtered results"
                },
                avgClickShare: {
                    title: "Avg. Click Share",
                    tooltip: "Average clicks share for the products shown based on your filter criteria"
                },
                avgConversionShare: {
                    title: "Avg. Conv. Share",
                    tooltip: "Average conversion share for the products shown based on your filter criteria"
                }
            }
        },
        tableTitle: {
            common: {
                one: "{value} Filtered Keyword based on date range",
                other: "{value} Filtered Keywords based on date range"
            }, selected: {one: "{value} Keyword selected", other: "{value} Keywords selected"}
        },
        filter: {
            searchFrequencyRankTrend: {label: "Search Frequency Rank Trend", tooltip: "Over the past week or month"},
            clickShareAsin: {label: "点击份额"},
            conversionShareAsin: {label: "转化份额"},
            numberOfAsins: {placeholder: "Number of ASINs"},
            mustBe: {placeholder: "Must be"},
            advancedInteraction: {and: "And", or: "Or"},
            keywordOrAsins: {
                placeholder: {
                    one: "Enter up to {maxAsins} product ASINs or {maxKeywords} keyword phrase",
                    other: "Enter up to {maxAsins} product ASINs or {maxKeywords} keyword phrase"
                }, needAsin: "需要一个ASIN？试试以下其中一个：", needKeyword: "Need a keyword? Try one of these:"
            },
            averageMonthlyAge: {
                label: "Top 3 Clicked ASINs Monthly Average Age",
                tooltip: " Average of top 3 clicked ASINs age"
            },
            totalMonthlySales: {
                label: "Top 3 Clicked ASINs Total Monthly Sales",
                tooltip: "Total of top 3 clicked ASINs monthly sales"
            },
            totalMonthlyRevenue: {
                label: "Top 3 Clicked ASINs Total Monthly Revenue",
                tooltip: "Total of top 3 clicked ASINs monthly revenue"
            },
            totalReviewCount: {
                label: "Top 3 Clicked ASINs Total Review Count",
                tooltip: "Total of top 3 clicked ASINs review count"
            },
            averageRating: {label: "Top 3 Clicked ASINs Average Rating", tooltip: "Average of top 3 clicked ASINs rating"}
        },
        columns: {
            phrase: {title: "关键词词组", tooltip: "顾客搜索产品所使用的关键词或词组"},
            searchVolume: {title: "搜索量", tooltip: "每月搜索此关键词词组的估算次数。", trend: {title: "Search Volume Trend (%)"}},
            searchFrequencyRank: {
                title: "搜索频率排名",
                tooltip: {
                    Monthly: "Monthly Search Frequency Rank Trend, (compare with last month)",
                    Weekly: "Weekly Search Frequency Rank Trend, (compare with last week)"
                },
                trend: {title: "Search Frequency Rank Trend (%)"}
            },
            totalClickShareAsin: {
                title: "Top 3 ASINs Total Click Share",
                tooltip: "来自 ABA Data 的前 3 个 ASIN 点击份额的总和。",
                trend: {title: "Top 3 ASINs Total Click Share Trend"}
            },
            totalConversionShareAsin: {
                title: "Top 3 ASINs Total Conv. Share",
                tooltip: "来自 ABA 数据的前 3 个 ASIN 转化份额的总和。",
                trend: {title: "Top 3 ASINs Total Conv. Share Trend"}
            },
            topNAsin: {title: "Top {value} ASIN", export: {title: "Top {value} Title", imageUrl: "Top {value} Image URL"}},
            clickShareAsinN: {
                title: "Top {value} ASIN Click Share",
                tooltip: "Top {value} ASIN click share from ABA Data",
                trend: {title: "Top {value} ASIN Click Share Trend"}
            },
            conversionShareAsinN: {
                title: "Top {value} ASIN Conv. Share",
                tooltip: "Top {value} ASIN conv. share from ABA Data",
                trend: {title: "Top {value} ASIN Conv. Share Trend"}
            },
            averageMonthlyAge: {
                title: "Top 3 Clicked ASINs Monthly Average Age",
                tooltip: "Average of top 3 clicked ASINs age"
            },
            totalSalesAsin: {
                title: "Top 3 ASINs Total Monthly Sales",
                tooltip: "Total of top 3 clicked ASINs monthly sales"
            },
            totalRevenueAsin: {
                title: "Top 3 ASINs Total Monthly Revenue",
                tooltip: "Total of top 3 clicked ASINs monthly revenue"
            },
            totalReviewCountAsin: {
                title: "Top 3 ASINs Total Review Count",
                tooltip: "Total of top 3 clicked ASINs review count"
            },
            averageRatingAsin: {title: "Top 3 ASIN Total Average Rating", tooltip: "Average of top 3 clicked ASINs rating"},
            exactTitleMatchProductsCount: {title: "标题密度", tooltip: "首页中标题含该关键词的商品数量"},
            resultsNumber: {title: "竞品数", tooltip: "顾客使用此关键词/词组搜索返回的产品总数"},
            brands: {
                title: "Top 3 Brands",
                tooltip: "The top 3 brands generating the most results for the search term",
                brand: {title: "Brand {value}"}
            },
            categories: {
                title: "Top 3 Categories",
                tooltip: "The top 3 categories generating the most results for the search term.",
                category: {title: "Category {value}"}
            },
            monthlySales: {title: "关键词销量", tooltip: "归因于每个关键词的月度销售量（单位数）的估计值"}
        },
        notifications: {invalidAsins: {one: "Invalid ASIN: {asins}", other: "Invalid ASINs: {asins}"}},
        advFilterTooltip: {
            asins: "<b>ASINs (1-3)</b>: Number of ASINs meeting your criteria.",
            operators: {
                title: "<b>Operators</b>:",
                list: {
                    more: '">" = Greater than',
                    moreOrEqual: '">=" = At least',
                    equal: '"=" = Exactly',
                    less: '"<" = Less than',
                    lessOrEqual: '"<=" = At most'
                }
            },
            clickShare: "<b>Click Share %</b>: Set your desired Click Share range.",
            conversionShare: "<b>Conversion Share %</b>: Set your Conversion Share range.",
            andOr: "<b>AND/OR</b>: Both conditions met (AND) or at least one met (OR).",
            example: "示例： ",
            exampleText: "1 ASIN with >40% Click Share AND <5% Conversion Share shows products popularly clicked but rarely bought."
        },
        noData: "No data is available based on your current date range or filters. Please try adjusting them to get more results."
    }, Co = {modal: {title: "搜索频率排名： {phrase}"}, legend: "搜索频率排名"}, Po = {
        1: "小型标件",
        2: "大型标准大小",
        3: "小型超大",
        4: "中等超大",
        5: "大型超大件",
        6: "特殊超大",
        7: "信封",
        8: "小型轻件",
        9: "小信纸",
        10: "大信纸",
        11: "加大信纸",
        12: "小信封",
        13: "标准信封",
        14: "大信封",
        15: "标准包裹",
        16: "小型",
        17: "标准大小",
        18: "超大",
        19: "标准超大",
        20: "重物大件",
        21: "超大号",
        22: "超大信封",
        23: "小包裹",
        24: "Large bulky",
        25: "Extra-large 0 to 50 lb",
        26: "Extra-large 50+ to 70 lb",
        27: "Extra-large 70+ to 150 lb",
        28: "Extra-large 150+ lb",
        "-1": "不适用"
    }, Ro = {
        common: Vr,
        historyTitle: Kr,
        fetchingData: Lr,
        landing: Wr,
        table: Ur,
        cerebro: Or,
        walmartSearch: Yr,
        export: {
            button: "导出数据",
            options: {
                csv: "...为CSV文件",
                xlsx: "...为XLSX文件",
                frankenstein: "...至Frankenstein",
                clipboard: "复制到剪贴板",
                eliteAnalyticsCSV: "Elite Analytics CSV文件",
                eliteAnalyticsExcel: "Elite Analytics Excel文件",
                eliteAnalyticsCSVWithUpload: "上传 + Elite Analytics CSV文件",
                eliteAnalyticsExcelWithUpload: "上传 + Elite Analytics Excel文件"
            }
        },
        createNewFolder: Gr,
        errors: $r,
        magnet: jr,
        magnetChart: Qr,
        searchedBefore: Xr,
        noDataAvailable: Zr,
        upgradePlan: Jr,
        copyButton: eo,
        example: to,
        errorCodes: ao,
        opportunity: ro,
        blackBox: oo,
        projectNames: io,
        bulkReport: no,
        randomizationText: lo,
        dateRanges: so,
        comparison: uo,
        highchart: co,
        buttons: mo,
        amazonToken: po,
        amazonBrandRegistry: ho,
        abad: go,
        periodPresets: bo,
        periodsPlaceholder: vo,
        runListingAnalyzer: yo,
        historicalData: So,
        ppc: fo,
        experiments: Ao,
        upgradeToDiamondTooltip: wo,
        cerebroSeasonal: ko,
        filterPresets: To,
        months: zo,
        abaTopSearchTerms: _o,
        searchFrequencyRank: Co,
        sizeTier: Po
    }, Bo = new ve({en: la, de: yt, es: Qa, it: qr, zh: Ro}, {logsEnabled: !1}),
    vi = ({children: e}) => s.jsx(ye, {strings: Bo, TranslateContext: ce, children: e}), ce = A.createContext(null),
    q = () => {
        const e = A.useContext(ce);
        if (!e) throw new Error("[Translation] The provider is not defined");
        return e
    }, Ho = H(() => ({translation: null})), yi = Se(Ho, "translation"), Si = () => {
        const e = R(ae) != null, a = R(ae) || "free", t = R(c => {
            var g;
            return (g = c.checkLogin) == null ? void 0 : g.hasEliteAccess
        }), r = R(c => {
            var g;
            return (g = c.checkLogin) == null ? void 0 : g.basePlan
        }), i = r != null && No.includes(r);
        return {
            planGroup: a,
            isDemo: a === "free",
            notFreeAndStarter: a !== "free" && a !== "starter",
            isElite: t || a === "elite" || a === "enterprise",
            cerebroMaxAsins: a ? a === "elite" ? 20 : 10 : 20,
            hasPlanGroup: e,
            basePlan: r,
            isStartYourBusiness: i
        }
    }, No = [re.StartYourBusiness, re.StartYourBusinessAnnual], me = () => {
        const {t: e} = q();
        return A.useMemo(() => [{value: "30", label: `30 ${e("dateRanges.day", {count: 30})}`}, {
            value: "90",
            label: `90 ${e("dateRanges.day", {count: 90})}`
        }, {value: "365", label: `1 ${e("dateRanges.year", {count: 1})}`}, {
            value: "0",
            label: e("dateRanges.allTime")
        }], [e])
    }, xo = (e, a) => {
        const t = new Set([...e.map(l => l[0]), ...a.map(l => l[0])]), r = Array.from(t).sort();
        return Io(r, a) || []
    }, Io = (e, a) => {
        const t = [];
        let r = NaN;
        return e.forEach((i, l) => {
            const n = a.find(u => u[0] === i);
            if (n) {
                if (isNaN(r)) for (let u = 0; u < l; u++) t[u] = [t[u][0], n[1]];
                r = n[1], t.push(n)
            } else t.push([i, isNaN(r) ? 0 : r])
        }), t
    }, Mo = e => {
        const a = e.length;
        let t = 0, r = 0, i = 0, l = 0;
        e.forEach((C, k) => {
            t += k, r += C[1], i += k * C[1], l += k * k
        });
        const n = t / a, u = r / a, h = i / a, c = l / a, g = n * n, w = h - n * u, y = c - g, S = y === 0 ? 0 : w / y;
        return {a: u - S * n, b: S}
    }, Fo = e => {
        const a = [];
        if (e.length) {
            const t = Mo(e);
            e.forEach((r, i) => {
                if (i === 0 || i === e.length - 1) {
                    let l = t.a + t.b * (i + 1);
                    l < 0 && (l = 0), a.push([r[0], l])
                }
            })
        }
        return a
    }, Do = (e, a) => N({method: "GET", url: x(_e, {...e}), withCredentials: 0, signal: a}),
    Eo = (e, a) => N({method: "GET", url: x(ze, {...e}), signal: a, withCredentials: 0}),
    qo = (e, a) => N({method: "GET", url: x(Ce, {...e}), withCredentials: 0, signal: a}), Vo = async (e, a) => await N({
        method: "GET",
        url: x(se + "/api/v1/product/subcategories-bsr", {...e}),
        withCredentials: 0,
        signal: a
    }), Ko = H((e, a) => ({
        requests: {review: {}, bsr: {}, bsrSubcategories: {}, sales: {}}, getReviewChart: (t, r) => {
            e(i => ({
                ...i,
                requests: {
                    ...i.requests,
                    review: {
                        ...i.requests.review,
                        [t]: B(l => Eo({asin: t, marketplace: r, days: 0, timezoneOffset: 0}), l => {
                            e(n => ({
                                ...n,
                                requests: {
                                    ...n.requests,
                                    review: {...n.requests.review, [t]: {...n.requests.review[t], atom: l}}
                                }
                            }))
                        }, () => a().requests.review[t].atom, {initialStatus: "init"})
                    }
                }
            }))
        }, getBsrChart: (t, r) => {
            e(i => ({
                ...i,
                requests: {
                    ...i.requests,
                    bsr: {
                        ...i.requests.bsr, [t]: B(l => Do({asin: t, marketplace: r, allData: 1, replace: 0}), l => {
                            e(n => ({
                                ...n,
                                requests: {...n.requests, bsr: {...n.requests.bsr, [t]: {...n.requests.bsr[t], atom: l}}}
                            }))
                        }, () => a().requests.bsr[t].atom, {initialStatus: "init"})
                    }
                }
            }))
        }, getBsrSubcategoriesChart: (t, r) => {
            e(i => ({
                ...i,
                requests: {
                    ...i.requests,
                    bsrSubcategories: {
                        ...i.requests.bsrSubcategories,
                        [t]: B(l => Vo({asin: t, marketplace: r, dateFrom: "2016-01-01"}), l => {
                            e(n => ({
                                ...n,
                                requests: {
                                    ...n.requests,
                                    bsrSubcategories: {
                                        ...n.requests.bsrSubcategories,
                                        [t]: {...n.requests.bsrSubcategories[t], atom: l}
                                    }
                                }
                            }))
                        }, () => a().requests.bsrSubcategories[t].atom, {initialStatus: "init"})
                    }
                }
            }))
        }, getSalesChart: (t, r) => {
            e(i => ({
                ...i,
                requests: {
                    ...i.requests,
                    sales: {
                        ...i.requests.sales,
                        [t]: B(l => qo({asin: t, marketplace: r, days: 0, timezoneOffset: 0}), l => {
                            e(n => ({
                                ...n,
                                requests: {
                                    ...n.requests,
                                    sales: {...n.requests.sales, [t]: {...n.requests.sales[t], atom: l}}
                                }
                            }))
                        }, () => a().requests.sales[t].atom, {initialStatus: "init"})
                    }
                }
            }))
        }
    })), pe = H(e => ({
        chartType: null,
        daysRange: 30,
        setDayRange: a => e(t => ({...t, daysRange: a})),
        isOpen: !1,
        asin: "",
        open: (a, t) => e(r => ({...r, isOpen: !0, asin: a, chartType: t})),
        close: () => e(a => ({...a, isOpen: !1, keyword: ""}))
    })),
    oe = (e, a) => (e || []).filter(t => a === 0 ? !0 : new Date(t.timestamp * 1e3).getTime() > Date.now() - a * 3600 * 1e3 * 24),
    ie = (e, a) => (e || []).filter(t => a === 0 ? !0 : new Date(t.x * 1e3).getTime() > Date.now() - a * 3600 * 1e3 * 24),
    F = (e, a) => (e || []).filter(t => a === 0 ? !0 : new Date(t.end * 1e3).getTime() > Date.now() - a * 3600 * 1e3 * 24),
    Lo = (e, a) => (e || []).filter(t => a === 0 ? !0 : new Date(t[0]).getTime() > Date.now() - a * 3600 * 1e3 * 24),
    _ = ["#0a6fe8", "#91ed7e", "#434348"], ne = ["#69D698", "#F78527", "#36C9E2", "#D57EBE", "#51228F"], Wo = e => {
        const {t: a} = q(), {daysRange: t, chartType: r} = pe(), {
            status: i,
            addChart: l,
            getChart: n,
            data: u
        } = Ko(A.useCallback(h => Uo(r, e, t, h, a), [r, e, t, a]));
        return {status: i, addChart: l, getChart: n, data: u}
    }, Uo = (e, a, t, r, i) => {
        var l, n, u, h, c, g, w, y, S, I, C, k, V, K, L, W, U, O, Y, G, $, j, Q, X, Z, J, ee, te;
        if (e === "review") {
            const o = r.requests.review[a],
                m = ((u = (n = (l = o == null ? void 0 : o.atom) == null ? void 0 : l.content) == null ? void 0 : n.results) == null ? void 0 : u.reviews) || [],
                f = ((g = (c = (h = o == null ? void 0 : o.atom) == null ? void 0 : h.content) == null ? void 0 : c.results) == null ? void 0 : g.rating) || [],
                T = oe(m, t).map(({timestamp: p, count: d}) => [p * 1e3, d]),
                z = oe(f, t).map(({timestamp: p, rating: d}) => [p * 1e3, d]);
            return {
                data: [{
                    name: i("blackBox.products.chartAxis.reviewCount"),
                    data: T,
                    color: _[0]
                }, {name: i("blackBox.products.chartAxis.rating"), data: z, color: _[1]}],
                getChart: o == null ? void 0 : o.action,
                status: ((w = o == null ? void 0 : o.atom) == null ? void 0 : w.status) || "waiting",
                addChart: r.getReviewChart
            }
        }
        if (e === "bsr") {
            const o = r.requests.bsr[a], m = r.requests.bsrSubcategories[a],
                f = ((I = (S = (y = o == null ? void 0 : o.atom) == null ? void 0 : y.content) == null ? void 0 : S.results) == null ? void 0 : I.bsrHistory) || [],
                T = F(f, t).map(({start: p, value: d}) => [p * 1e3, d]).sort((p, d) => p[0] - d[0]),
                z = (((C = m == null ? void 0 : m.atom.content) == null ? void 0 : C.results) || [])[0] ? (((k = m == null ? void 0 : m.atom.content) == null ? void 0 : k.results) || [])[0].subcategories.map((p, d) => ({
                    name: p.subcategoryName,
                    data: Lo(p.data.sort((v, M) => v.createdAt - M.createdAt).map(({
                                                                                       createdAt: v,
                                                                                       salesRank: M
                                                                                   }) => [v * 1e3, M]), t),
                    color: ne[d + 1],
                    isLine: !0,
                    yAxis: 1
                })) : [];
            return {
                data: [{
                    name: ((V = o == null ? void 0 : o.atom.content) == null ? void 0 : V.results.categoryName) || i("blackBox.products.chartAxis.bsr"),
                    data: T,
                    color: ne[0],
                    isLine: !0,
                    yAxis: 0
                }, ...z],
                getChart: () => {
                    o == null || o.action(), m == null || m.action()
                },
                status: ((K = o == null ? void 0 : o.atom) == null ? void 0 : K.status) || "waiting",
                addChart: (p, d) => {
                    r.getBsrChart(p, d), r.getBsrSubcategoriesChart(p, d)
                }
            }
        }
        if (e === "price") {
            const o = r.requests.bsr[a],
                m = ((U = (W = (L = o == null ? void 0 : o.atom) == null ? void 0 : L.content) == null ? void 0 : W.results) == null ? void 0 : U.newPriceHistory) || [],
                f = ((G = (Y = (O = o == null ? void 0 : o.atom) == null ? void 0 : O.content) == null ? void 0 : Y.results) == null ? void 0 : G.bsrHistory) || [],
                T = F(m, t).map(({start: d, value: v}) => [d * 1e3, v]),
                z = F(f, t).map(({start: d, value: v}) => [d * 1e3, v]), P = xo(z, T);
            return {
                data: [{name: i("blackBox.products.chartAxis.price"), data: P, color: _[0], isLine: !0}],
                getChart: o == null ? void 0 : o.action,
                status: (($ = o == null ? void 0 : o.atom) == null ? void 0 : $.status) || "waiting",
                addChart: r.getBsrChart
            }
        }
        if (e === "sales") {
            const o = r.requests.sales[a],
                m = ((X = (Q = (j = o == null ? void 0 : o.atom) == null ? void 0 : j.content) == null ? void 0 : Q.results) == null ? void 0 : X.sales) || [],
                f = ie(m, t).map(({x: d, y: v}) => [d * 1e3, v]),
                T = ((ee = (J = (Z = o == null ? void 0 : o.atom) == null ? void 0 : Z.content) == null ? void 0 : J.results) == null ? void 0 : ee.movAvg) || [],
                z = ie(T, t).map(({x: d, y: v}) => [d * 1e3, v]), P = Fo(f);
            return {
                data: [{
                    name: i("blackBox.products.chartAxis.sales"),
                    data: f,
                    color: _[0],
                    oneYAxis: !0
                }, {
                    name: i("blackBox.products.chartAxis.7DayMovingAverage"),
                    data: z,
                    color: _[1],
                    oneYAxis: !0
                }, {
                    name: i("blackBox.products.chartAxis.trend"),
                    data: P,
                    color: _[2],
                    hideMouseTracking: !0,
                    oneYAxis: !0
                }],
                getChart: o == null ? void 0 : o.action,
                status: ((te = o == null ? void 0 : o.atom) == null ? void 0 : te.status) || "waiting",
                addChart: r.getSalesChart
            }
        }
        return {
            data: [], addChart: () => {
            }, status: "waiting"
        }
    },
    Oo = A.lazy(() => fe(() => import("./Graph-jaBKj2ra.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).then(e => ({default: e.Graph}))),
    Yo = ({status: e, asin: a, data: t, days: r, onDaysChange: i, oneYAxis: l, chartType: n}) => {
        const u = me(), h = () => a;
        return s.jsxs(s.Fragment, {
            children: [s.jsxs($o, {
                children: [s.jsx(ti, {
                    children: s.jsx(Ae, {
                        value: String(r),
                        options: u,
                        placeholder: "Range",
                        size: "100",
                        onChange: ({value: c}) => i && i(Number(c))
                    })
                }), s.jsx(jo, {children: t.map(c => s.jsxs(Qo, {children: [s.jsx(Xo, {$color: c.color}), s.jsx(Zo, {children: c.name})]}, c.name))})]
            }), s.jsxs(A.Suspense, {
                fallback: le,
                children: [e === "loaded" && s.jsx(Go, {
                    children: s.jsx(Oo, {
                        data: t || [],
                        height: 400,
                        days: r,
                        oneYAxis: l,
                        chartType: n
                    })
                }), (e === "loading" || e === "init") && le, e === "error" && s.jsxs(Jo, {
                    children: [s.jsx("div", {children: "Ooops. Error!"}), s.jsx(ei, {
                        buttonType: "primary",
                        size: "200",
                        onClick: h,
                        children: "Reload"
                    })]
                })]
            })]
        })
    }, he = b.div`
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`, Go = b.div`
  min-height: 400px;
`, $o = b.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({theme: e}) => e.spacing.sp16};
  margin-bottom: ${({theme: e}) => e.spacing.sp24};
`, jo = b.div`
  ${we};
  color: ${({theme: e}) => e.systemColors.black};
  display: flex;
  align-items: center;
  min-width: 0;
  flex-wrap: wrap;
  justify-content: flex-end;
`, Qo = b.div`
  display: flex;
  align-items: center;
`, Xo = b.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 4px 4px 4px 8px;
  background-color: ${({$color: e}) => e};
  margin-right: ${({theme: e}) => e.spacing.sp4};
  flex: 0 0 auto;
`, Zo = b.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`, le = s.jsx(he, {children: s.jsx(Te, {})}), Jo = b(he)`
  flex-direction: column;
`, ei = b(ue)`
  margin-top: ${({theme: e}) => e.spacing.sp24};
`, ti = b.div`
  width: 144px;
`, fi = ({marketplace: e, showMarketplace: a = !1}) => {
        const {t} = q(), {asin: r, isOpen: i, close: l, setDayRange: n, daysRange: u, chartType: h} = pe(), {
            status: c,
            data: g,
            addChart: w,
            getChart: y
        } = Wo(r), S = me();
        return A.useEffect(() => {
            i && (c === "waiting" ? w(r, e.store) : c === "init" && (y == null || y()))
        }, [w, y, r, c]), A.useEffect(() => {
            i && n(Number(S[0].value))
        }, [i, S, n]), s.jsx(ke, {
            isOpen: i,
            onClose: l,
            size: "200",
            title: h && `${t(`blackBox.products.chartTitles.${h}`, {asin: r})}${a ? ` (${e.domain})` : ""}`,
            footer: s.jsx(ri, {children: s.jsx(ue, {size: "200", onClick: l, children: t("common.close")})}),
            children: s.jsx(ai, {
                children: s.jsx(Yo, {
                    days: u,
                    status: c,
                    asin: r,
                    data: g,
                    onDaysChange: n,
                    oneYAxis: h !== "review",
                    chartType: h
                })
            })
        })
    }, ai = b.div`
  display: flex;
  flex-direction: column;
`, ri = b.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
export {
    fi as M,
    vi as R,
    Ho as a,
    q as b,
    pi as c,
    hi as d,
    gi as e,
    mi as f,
    bi as g,
    ui as h,
    si as i,
    ci as j,
    ni as k,
    pe as l,
    D as m,
    Pe as n,
    Re as o,
    li as p,
    di as r,
    yi as t,
    Si as u
};

function __vite__mapDeps(indexes) {
    if (!__vite__mapDeps.viteFileDeps) {
        __vite__mapDeps.viteFileDeps = ["static/Graph-jaBKj2ra.js", "static/index-tEWTe_cM.js", "static/AddToMyListDropdown-lgmjWp6o.js", "static/NewRadio-DIL_Ez7J.js", "static/useAutoPlay-8WOcIzK4.js", "static/middleware-6VZ1FcKb.js", "static/Learn-ZI4QJ8Ms.js", "static/use-latest.esm-33sMI_t6.js", "static/use-onclickoutside.browser.esm-BisD5Fdu.js", "static/MarketplaceSingleSelect-J9Q4NESj.js", "static/ChartExport-1KlP8bAy.js", "static/LineGraphSkeleton-_OzzpDE4.js"]
    }
    return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

//# sourceMappingURL=ModalGraph-hPaCunFZ.js.map
