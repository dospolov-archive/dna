;(() => {
  const snippet = {
    name: '',
    css: `
      body { background: rgb(216, 204, 169); }
      .texts {
        padding: 0 10vw;
        width: 100%;
      }
      .string_container { border: none; }
      .progressbar, div.noprint { display: none; }
    `
  }

  window.dna = window.dna ? [...window.dna, snippet] : [snippet]
})()
