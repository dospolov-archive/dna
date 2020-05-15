;(() => {
  const snippet = {
    name: '',
    css: ``,
    js: elementReady => {}
  }

  window.dna = window.dna ? [...window.dna, snippet] : [snippet]
})()
