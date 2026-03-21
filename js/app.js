/* global Vue */
(function initCvApp() {
  'use strict';

  /**
   * @param {Record<string, unknown>} r Raw resume object from data/resume.js
   */
  function formatResume(r) {
    return {
      ...r,
      address: [r.country, r.city, r.postalCode].filter(Boolean).join(', '),
    };
  }

  function revealBodyWhenAnimatableReady() {
    function reveal() {
      document.body.classList.remove('d-none');
    }
    if (typeof customElements === 'undefined' || !customElements.whenDefined) {
      reveal();
      return;
    }
    const maxWaitMs = 4000;
    const deadline = new Promise((resolve) => setTimeout(resolve, maxWaitMs));
    Promise.race([
      customElements.whenDefined('animatable-component'),
      deadline,
    ]).then(reveal);
  }

  const raw = window.CV_RESUME_DATA;
  if (!raw) {
    console.error('CV_RESUME_DATA missing: load data/resume.js before js/app.js.');
    revealBodyWhenAnimatableReady();
    return;
  }

  // https://github.com/proyecto26/animatable-component/blob/develop/readme.md#vue
  Vue.config.ignoredElements = [/^animatable-/];

  new Vue({
    el: '#app',
    data: formatResume(raw),
  });

  revealBodyWhenAnimatableReady();
})();
