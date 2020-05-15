;(() => {
  const snippet = {
    name: 'fb',
    css: `
      div[aria-label="New message"], div[aria-label*="Open chat with"] {
        display: none;
      }
    `
  }

  window.dna = window.dna ? [...window.dna, snippet] : [snippet]
})()
