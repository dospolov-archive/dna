;(() => {
  const snippet = {
    name: '',
    css: ``,
    js: elementReady => {
      const url = window.location.href

      if (!url.includes('.m.wikipedia'))
        window.location.href = url.replace('.wikipedia', '.m.wikipedia')
    }
  }

  window.dna = window.dna ? [...window.dna, snippet] : [snippet]
})()
