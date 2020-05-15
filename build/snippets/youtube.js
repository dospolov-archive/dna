;(() => {
  const generateSlider = (SPEEDS, SPEED_DEFAULT) => {
    const slider = document.createElement('input')
    slider.type = 'range'
    slider.id = 'speed-dna'
    slider.min = SPEEDS[0] * 100
    slider.max = SPEEDS[SPEEDS.length - 1] * 100
    slider.value = SPEED_DEFAULT * 100
    slider.setAttribute('step', '25')
    return slider
  }

  const generateDisplay = (SPEEDS, SPEED_DEFAULT) => {
    const display = document.createElement('div')
    display.id = 'speed-dna-display'
    display.innerText = SPEED_DEFAULT
    return display
  }

  const snippet = {
    name: 'youtube',
    css: `
      #speed-dna {
        -webkit-appearance: none;
        height: 36px;
        border-radius: 1px;
        background: transparent;
        padding: 0;
        width: 120px;
        vertical-align: top;
        outline: none;
        cursor: pointer;
        margin: 0 5px 0 6px;
      }
      
      #speed-dna::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #fff;
        outline: none;
        cursor: pointer;
        margin-top: -4px;
      }
      
      #speed-dna::-webkit-slider-runnable-track {
        background: #ffffff55;
        height: 3px;
      }

      #speed-dna-display {
        font-size: 109%;
        display: inline-block;
        vertical-align: top;
        padding: 0 5px;
        white-space: nowrap;
        line-height: 35px;
      }

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
    js: elementReady => {
      const SPEEDS_COUNT = 10
      const SPEED_BASE = 0.25
      const SPEEDS = [...Array(SPEEDS_COUNT)].map((_, i) => i * SPEED_BASE + 1)
      const SPEED_DEFAULT = SPEEDS[1]

      elementReady('video.html5-main-video', video => {
        video.playbackRate = SPEED_DEFAULT
        console.log(`youtube SPEED_DEFAULT ${SPEED_DEFAULT} applied`)

        elementReady('.ytp-left-controls', container => {
          if (!container.childElementCount) return

          const slider = generateSlider(SPEEDS, SPEED_DEFAULT)
          container.append(slider)

          const display = generateDisplay(SPEEDS, SPEED_DEFAULT)
          container.append(display)

          slider.addEventListener('input', () => {
            video.playbackRate = slider.value / 100
            display.innerText = slider.value / 100
          })
          console.log('youtube speed slider added')
        })
      })
    }
  }

  window.dna = window.dna ? [...window.dna, snippet] : [snippet]
})()
