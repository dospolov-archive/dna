const rules = [
  {
    domains: ['yotu.be', 'youtube.com'],
    css: `
      .ytp-ce-covering-overlay,
      .ytp-ce-element-shadow,
      .ytp-ce-covering-image,
      .ytp-ce-expanding-image,
      .ytp-ce-element.ytp-ce-channel.ytp-ce-channel-this.ytp-ce-element-show.ytp-ce-bottom-right-quad.ytp-ce-size-640,
      .ytp-ce-element.ytp-ce-video.ytp-ce-element-show,
      .ytp-ce-element,
      .ytp-cards-teaser,
      .ytp-pause-overlay,
      .yt-view-count-renderer.style-scope.view-count,
      .ytp-fullerscreen-edu-button,
      #items .ytd-mini-guide-renderer:nth-child(2) { display: none; }
    `,
    js: () => {}
  }
]

const match = domains => domains.some(domain => window.location.hostname.includes(domain))
const addStyles = styles => {
  const styleSheet = document.createElement('style')
  styleSheet.type = 'text/css'
  styleSheet.innerText = styles
  document.head.appendChild(styleSheet)
}

rules.map(rule => {
  if (match(rule.domains)) {
    rule.js?.()
    rule.css && addStyles(rule.css)
  }
})
