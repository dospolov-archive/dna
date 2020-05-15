;(() => {
  const snippet = {
    name: 'aliexpress',
    css: `
    #J_xiaomi_dialog, .top-banner-container { display: none; }
    `,
    js: elementReady => {}
  }

  window.dna = window.dna ? [...window.dna, snippet] : [snippet]
})()
