const frontendBundleVersion = "3.4.32";

const pathToBundle = "https://cdn.jsdelivr.net/gh/AndrosEt/static/docs/container/static/common/lib/" + frontendBundleVersion;

window.pathToBundle = pathToBundle;

window.loadEvents = {
  unpauseModal: "unpause-modal-loaded",
  cancellationModal: "cancellation-modal-loaded",
  calendlyModal: "calendly-modal-loaded",
  recentlyCancelledModal: "recently-cancelled-modal-loaded",
  businessValuationWidget: "business-valuation-widget-loaded",
  upsellPurchaseModal: "upsell-purchase-modal-loaded",
  legacyPlanChurnModal: "legacy-plan-churn-modal-loaded",
  cancelPauseModal: "cancel-pause-modal-loaded",
}

const businessValuationWidgetEl = document.getElementById("business-valuation-widget");
if (businessValuationWidgetEl) {
  import(`${pathToBundle}/businessValuationWidget.js`).then(module => {
    const businessValuationWidgetBrandName = document.getElementById("business-valuation-widget-brand-name");

    module.AppendBusinessValuationWidget({
      brandName: businessValuationWidgetBrandName.value
    }, businessValuationWidgetEl);

    window.AppendBusinessValuationWidget = () => module.AppendBusinessValuationWidget(businessValuationWidgetEl);
  });
}

const commonMenuEl = document.getElementById("common-menu");

if (commonMenuEl) {
  import(`${pathToBundle}/newMenu.js`).then(module => {
    module.AppendNewMenu({
      accountId: window.accountId,
      additional: window.__REACT_MENU_ADDITIONAL__,
      data: window.__REACT_MENU__,
    }, commonMenuEl);
  });
}

const upsellModalEl = document.getElementById("upsell-modal");

if (upsellModalEl) {
  import(`${pathToBundle}/upsellModal.js`)
    .then((module) => {
      window.upsellModalEl = upsellModalEl;
      window.AppendUpsellModal = module.AppendUpsellModal;
      window.upsellModalOpen = module.upsellModalOpen;
      window.upsellModalClose = module.upsellModalClose;
    });
}

const learnButtonEl = document.getElementById("learn-button");

if (learnButtonEl) {
  import(`${pathToBundle}/learn.js`)
    .then((module) => {
      learnButtonEl.style.display = "inline-block";
      module.AppendLearnCerebro(learnButtonEl);

      window.AppendLearnCerebro = () => module.AppendLearnCerebro(learnButtonEl);
    })
}

const bulkButtonEl = document.getElementById("bulk-button");

if (bulkButtonEl) {
    import(`${pathToBundle}/bulkReport.js`)
        .then((module) => {
            bulkButtonEl.style.display = "inline-block";
            module.AppendBulkReport(bulkButtonEl);

            window.AppendBulkReport = () => module.AppendBulkReport(bulkButtonEl);
        })
}

const audienceEl = document.getElementById("re-audience");

if (audienceEl) {
  import(`${pathToBundle}/audience.js`)
    .then((module) => {
      module.AppendAudience();
    });
}

const cancellationWinbackModalEl = document.getElementById("cancellation-winback-modal");
const cancellationAppliedModalEl = document.getElementById("cancellation-coupon-applied-modal");

if (cancellationWinbackModalEl && cancellationAppliedModalEl) {
  Promise.all([
    import(`${pathToBundle}/cancellationWinbackModal.js`),
    import(`${pathToBundle}/cancellationAppliedModal.js`),
  ]).then(([module1, module2]) => {
    window.cancellationWinbackModalEl = cancellationWinbackModalEl;
    window.AppendCancellationWinbackModal = module1.AppendCancellationWinbackModal;
    window.cancellationWinbackModalOpen = module1.cancellationWinbackModalOpen;
    window.cancellationWinbackModalClose = module1.cancellationWinbackModalClose;
    window.cancellationCouponAppliedModalEl = cancellationAppliedModalEl;
    window.AppendCancellationAppliedModal = module2.AppendCancellationAppliedModal;
    window.cancellationAppliedModalOpen = module2.cancellationAppliedModalOpen;
    window.cancellationAppliedModalClose = module2.cancellationAppliedModalClose;

    window.dispatchEvent(new CustomEvent(window.loadEvents.cancellationModal))
  })
}

const unpauseModalEl = document.getElementById("unpause-modal");
const unpauseAppliedModalEl = document.getElementById("unpause-applied-modal");

if (unpauseModalEl && unpauseAppliedModalEl) {
  Promise.all([
    import(`${pathToBundle}/unpauseModal.js`),
    import(`${pathToBundle}/unpauseAppliedModal.js`)
  ])
    .then(([module1, module2]) => {
      window.unpauseModal = module1.unpauseModal;
      window.unpauseModal.el = unpauseModalEl;
      window.unpauseAppliedModal = module2.unpauseAppliedModal;
      window.unpauseAppliedModal.el = unpauseAppliedModalEl;

      window.dispatchEvent(new CustomEvent(loadEvents.unpauseModal));
    });
}

const calendlyModalEl = document.getElementById("calendly-modal");

if (calendlyModalEl) {
  import(`${pathToBundle}/calendlyModal.js`)
    .then((module) => {
      window.calendlyModal = module.calendlyModal;
      window.calendlyModal.el = calendlyModalEl;

      window.dispatchEvent(new CustomEvent(loadEvents.calendlyModal));
    });
}

const recentlyCancelledModalEl = document.getElementById("recently-cancelled-modal");
const recentlyCancelledAppliedModalEl = document.getElementById("recently-cancelled-applied-modal");

if (recentlyCancelledModalEl) {
  Promise.all([
    import(`${pathToBundle}/recentlyCancelledModal.js`),
    import(`${pathToBundle}/unpauseAppliedModal.js`)
  ])
    .then(([module1, module2]) => {
      window.recentlyCancelledModal = module1.recentlyCancelledModal;
      window.recentlyCancelledModal.el = recentlyCancelledModalEl;
      window.recentlyCancelledAppliedModal = module2.unpauseAppliedModal;
      window.recentlyCancelledAppliedModal.el = recentlyCancelledAppliedModalEl;

      window.dispatchEvent(new CustomEvent(loadEvents.recentlyCancelledModal));
    });
}

const modalSellingLevel = document.getElementById("selling-level");

if (modalSellingLevel) {
  import(`${pathToBundle}/newModalSellingLevel.js`).then(module => {
    module.AppendNewModalSellingLevel(modalSellingLevel);
  });
}

const accessManagerWidget = document.getElementById("access-manager-widget");

if (accessManagerWidget) {
    import(`${pathToBundle}/moreAccountsSiteAccessManager.js`).then(module => {
        module.AppendMoreAccountsSiteAccessManager(accessManagerWidget);
    });
}

const tokensManagerWidget = document.getElementById("tokens-manager-widget");

if (tokensManagerWidget) {
    import(`${pathToBundle}/moreAccountsSiteTokensManager.js`).then(module => {
        module.AppendMoreAccountsSiteTokensManager(tokensManagerWidget);
    });
}

const downloadMobileAppQrEl = document.getElementById("download-mobile-app");

if (downloadMobileAppQrEl) {
    import(`${pathToBundle}/quickTipAppQr.js`).then(module => {
        module.AppendQuickTipAppQr(downloadMobileAppQrEl);
    });
}

const recommendedTools = document.getElementById("recommended-tools");

if (recommendedTools) {
  import(`${pathToBundle}/recommendedTools.js`).then(module => {
    module.AppendRecommendedTools(recommendedTools);

    window.AppendRecommendedTools = () => module.AppendRecommendedTools(recommendedTools);
  });
}

const learnVideoEl = document.getElementById("learn-video");

if (learnVideoEl) {
    import(`${pathToBundle}/learnModal.js`).then(module => {
        module.AppendLearnModal(learnVideoEl, { id: learnVideoEl.dataset.key });
    });
}

const upsellPurchaseModalEl = document.getElementById("upsell-purchase-modal");

if (upsellPurchaseModalEl) {
  import(`${pathToBundle}/upsellPurchaseModal.js`)
    .then((module) => {
      window.upsellPurchaseModalEl = upsellPurchaseModalEl;
      window.upsellPurchaseModalOpen = module.upsellPurchaseModalOpen;
      window.upsellPurchaseModalClose = module.upsellPurchaseModalClose;
      window.AppendUpsellPurchaseModal = module.AppendUpsellPurchaseModal;
      window.dispatchEvent(new CustomEvent(window.loadEvents.upsellPurchaseModal));
    });
}

const upsellGeneralModalEl = document.getElementById("upsell-general-modal");

if (upsellGeneralModalEl) {
  import(`${pathToBundle}/upsellGeneralModal.js`)
    .then((module) => {
      window.upsellGeneralModalEl = upsellGeneralModalEl;
      window.upsellGeneralModalOpen = module.upsellGeneralModalOpen;
      window.upsellGeneralModalClose = module.upsellGeneralModalClose;
      window.AppendUpsellGeneralModal = module.AppendUpsellGeneralModal;
      window.AppendUpsellGeneralCalled = false;
    });
}

const subscriptionChangedCongratulationModalEl = document.getElementById("subscription-changed-congratulations-modal");
if (subscriptionChangedCongratulationModalEl) {
    import(`${pathToBundle}/subscriptionChangedCongratulationsModal.js`)
        .then(({ SubscriptionChangedCongratulationsModal }) => {
            window.SubscriptionChangedCongratulationsModal = SubscriptionChangedCongratulationsModal;
            SubscriptionChangedCongratulationsModal.mount(subscriptionChangedCongratulationModalEl, {
                eliteUrl: subscriptionChangedCongratulationModalEl.getAttribute('data-url'),
                eliteEmail: subscriptionChangedCongratulationModalEl.getAttribute('data-email'),
                redirectUrl: subscriptionChangedCongratulationModalEl.getAttribute('data-redirect'),
            })
            window.subscriptionChangedCongratulationsModalOpen = SubscriptionChangedCongratulationsModal.open;
        });
}

const mt360FunnelModalEl = document.getElementById("mt360-funnel-modal");

if (mt360FunnelModalEl) {
    import(`${pathToBundle}/dsaOfferModal.js`)
        .then(({ DsaOfferModal }) => {
            window.mt360FunnelModal = DsaOfferModal;
            DsaOfferModal.mount(mt360FunnelModalEl)
        });
}

const legacyPlanChurnModalEl = document.getElementById("legacy-plan-churn-modal");

if (legacyPlanChurnModalEl) {
  import(`${pathToBundle}/cancellationModal.js`)
    .then((module) => {
      window.legacyPlanChurnModalEl = legacyPlanChurnModalEl;
      window.legacyPlanChurnModalOpen = module.cancellationModalOpen;
      window.legacyPlanChurnModalClose = module.cancellationModalClose;
      window.AppendLegacyPlanChurnModal = module.AppendCancellationModal;
      window.dispatchEvent(new CustomEvent(window.loadEvents.legacyPlanChurnModal));
    });
}

const pricingAddonsEl = document.getElementById("pricing-addons");

if (pricingAddonsEl && typeof PRICING_ADDONS_SECTION_DATA !== 'undefined') {
  import(`${pathToBundle}/pricingAddons.js`).then(module => {
    module.AppendAddonsSection(pricingAddonsEl, PRICING_ADDONS_SECTION_DATA);
  });
}

const pricingQuizEl = document.getElementById("pricing-quiz");

if (pricingQuizEl && (typeof quizBlockType !== 'undefined' && quizBlockType)) {
  import(`${pathToBundle}/pricingQuiz.js`).then(module => {
    module.AppendPricingQuiz(pricingQuizEl, {
      tfPopup: pricingQuizEl.dataset.popup,
      tfIframeProps: pricingQuizEl.dataset.props,
      tfSize: pricingQuizEl.dataset.size,
      type: quizBlockType === 'control' ? 'default' : quizBlockType,
    });
  });
}

const pricingQuizElBottom = document.getElementById("pricing-quiz-bottom");

if (pricingQuizElBottom && (typeof quizBlockType !== 'undefined' && quizBlockType)) {
  import(`${pathToBundle}/pricingQuiz.js`).then(module => {
    module.AppendPricingQuiz(pricingQuizElBottom, {
      tfPopup: pricingQuizElBottom.dataset.popup,
      tfIframeProps: pricingQuizElBottom.dataset.props,
      tfSize: pricingQuizElBottom.dataset.size,
      type: quizBlockType === 'control' ? 'default' : quizBlockType,
    });
  });
}

const cancelPauseModalEl = document.getElementById("cancel-pause-modal");

if (cancelPauseModalEl) {
    import (`${pathToBundle}/cancelPauseModal.js`)
        .then((module) => {
            window.cancelPauseModalEl = cancelPauseModalEl;
            window.cancelPauseModalOpen = module.CancelPauseModal.open;
            window.cancelPauseModalClose = module.CancelPauseModal.close;
            window.cancelPauseModalMount = module.CancelPauseModal.mount;
            window.dispatchEvent(new CustomEvent(window.loadEvents.cancelPauseModal));
        });
}

const checkoutSubscribeModalEl = document.getElementById("checkout-modal");

if (checkoutSubscribeModalEl) {
  import(`${pathToBundle}/checkoutModal.js`).then(({ CheckoutModal }) => {
    window.checkoutModal = CheckoutModal;
  });
}

const applePayBannerEl = document.getElementById("apple-pay-banner");

if (applePayBannerEl) {
  import(`${pathToBundle}/applePayBanner.js`).then(module => {
    module.AppendApplePayBanner(applePayBannerEl);
  });
}

const newRecommendedToolsEl = document.getElementById("new-recommended-tools");

if (newRecommendedToolsEl) {
  import(`${pathToBundle}/newRecommendedTools.js`).then(({ NewRecommendedTools }) => {
    window.newRecommendedTools = NewRecommendedTools;
    NewRecommendedTools.mount(newRecommendedToolsEl);
  });
}

const newRecommendedTokenEl = document.getElementById("new-recommended-token");

if (newRecommendedTokenEl) {
  import(`${pathToBundle}/newRecommendedToken.js`).then(({ NewRecommendedToken }) => {
    window.newRecommendedToken = NewRecommendedToken;

    let hasToken = newRecommendedTokenEl.dataset.hasToken;

    NewRecommendedToken.mount(newRecommendedTokenEl, {
      isTokenConnected: hasToken === '1',
    });
  });
}

const recommendedPlanUpsellButtonEl = document.getElementById("recommended-plan-upsell-button");

if (recommendedPlanUpsellButtonEl) {
  let dataToolId = recommendedPlanUpsellButtonEl.getAttribute("data-tool");

  if (dataToolId !== null && dataToolId.length > 0) {
    import(`${pathToBundle}/recommendedPlanUpsellButton.js`).then(({ RecommendedPlanUpsellButton }) => {
      window.recommendedPlanUpsellButton = RecommendedPlanUpsellButton;
      window.recommendedPlanUpsellButton.mount(recommendedPlanUpsellButtonEl, { data: { tool: dataToolId } });
    });
  }
}

const pricingReferShareEl = document.getElementById("pricing-refer-share");

if (pricingReferShareEl) {
  let type = pricingReferShareEl.getAttribute("data-type");
  let link = pricingReferShareEl.getAttribute("data-link");

  import(`${pathToBundle}/pricingReferShare.js`).then(({ PricingReferShare }) => {
    window.pricingReferShare = PricingReferShare;
    PricingReferShare.mount(pricingReferShareEl, { type, link });
  });
}

const pricingRefereeEl = document.getElementById("pricing-referee");

if (pricingRefereeEl) {
  let type = pricingRefereeEl.getAttribute("data-type");

  import(`${pathToBundle}/pricingReferee.js`).then(({ PricingReferee }) => {
    window.pricingReferee = PricingReferee;
    PricingReferee.mount(pricingRefereeEl, { type });
  });
}

const upgradeBannerBlackBoxEl = document.getElementById("upgrade-banner-black-box");

if (upgradeBannerBlackBoxEl) {
  let uses = upgradeBannerBlackBoxEl.getAttribute('data-uses');

  import(`${pathToBundle}/upgradeBannerBlackBox.js`)
    .then((module) => {
      module.AppendUpgradeBannerBlackBox(upgradeBannerBlackBoxEl, { uses: uses });

      window.AppendUpgradeBannerBlackBox = () => module.AppendUpgradeBannerBlackBox(
        upgradeBannerBlackBoxEl,
        { uses: uses }
      );
    })
}

const keywordTrackerAddonBanner = document.getElementById("keyword-tracker-addon-banner");

if (keywordTrackerAddonBanner) {
  let plan = keywordTrackerAddonBanner.getAttribute('data-plan');

  import(`${pathToBundle}/keywordTrackerAddOnBanner.js`)
    .then((module) => {
      module.AppendKeywordTrackerAddOnBanner(keywordTrackerAddonBanner, { plan: plan });

      window.AppendKeywordTrackerAddOnBanner = () => module.AppendKeywordTrackerAddOnBanner(
        keywordTrackerAddonBanner,
        { plan: plan }
      );
  });
}

const reviewAnalyzerProEl = document.getElementById("review-analyser-pro");

if (reviewAnalyzerProEl) {
    let dataLink = reviewAnalyzerProEl.getAttribute("data-link");
    let dataTarget = reviewAnalyzerProEl.getAttribute("data-target");
    let dataOnClick = reviewAnalyzerProEl.getAttribute("data-onClick");

    import(`${pathToBundle}/reviewAnalyzerPro.js`).then(({ ReviewAnalyzerPro }) => {
        window.reviewAnalyzerPro = ReviewAnalyzerPro;
        ReviewAnalyzerPro.mount(reviewAnalyzerProEl, {
            link: dataLink,
            linkTarget: dataTarget,
            onClick: dataOnClick,
        });
    });
}
