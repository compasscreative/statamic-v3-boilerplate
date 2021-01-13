import Swup from 'swup'
import SwupDebugPlugin from '@swup/debug-plugin'
import SwupPreloadPlugin from '@swup/preload-plugin'
import SwupGtmPlugin from '@swup/gtm-plugin'
import SwupOverlayTheme from "@swup/overlay-theme";
import SwupScrollPlugin from "@swup/scroll-plugin";
const init = require("../init");

export const load = function () {

  const enableGTM = false
  const debugSwup = false

  const swupPlugins = [
      new SwupOverlayTheme({ color: "rgb(30, 35, 35)", direction: "to-top" }),
      new SwupPreloadPlugin(),
      new SwupScrollPlugin(),
  ];

  if (enableGTM) swupPlugins.push(new SwupGtmPlugin())
  if (debugSwup) swupPlugins.push(new SwupDebugPlugin())

  const swup = new Swup({
    animationSelector: '[class*="swup-transition-"]',
    linkSelector: '[data-swup-link]',
    plugins: swupPlugins
  })

  let scrollPositions = []
  let scrollToSavedPosition = null

  swup.on('clickLink', () => {
    scrollPositions[window.location.href] = window.scrollY
  })

  swup.on('popState', () => {
    scrollToSavedPosition = true
  })

  swup.on('animationInStart', () => {

    if (scrollToSavedPosition) {
      console.log(
        "scrolling to save position: " + scrollPositions[window.location.href]
      )
      scrollToSavedPosition = false
      return
    }

    if (!window.location.hash) {
      swup.scrollTo(document.body, 0)
    }

    console.log('closing nav')
    document.querySelector("body").__x.$data.mobileNavOpen = false;
    init.run()
  })
}