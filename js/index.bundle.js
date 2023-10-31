!(function () {
  'use strict';
  var e = {
      541: function (e, t, i) {
        var s = i(81),
          a = i.n(s),
          r = i(645),
          n = i.n(r),
          o = i(667),
          l = i.n(o),
          d = new URL(i(954), i.b),
          p = n()(a()),
          c = l()(d);
        p.push([
          e.id,
          "/**\n * Swiper 10.3.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2023 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: September 28, 2023\n */\n\n/* FONT_START */\n@font-face {\n  font-family: 'swiper-icons';\n  src: url(" +
            c +
            ");\n  font-weight: 400;\n  font-style: normal;\n}\n/* FONT_END */\n:root {\n  --swiper-theme-color: #007aff;\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  --swiper-wrapper-transition-timing-function: initial;\n  */\n}\n:host {\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 1;\n}\n.swiper {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  overflow: clip;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n  display: block;\n}\n.swiper-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  transition-timing-function: var(--swiper-wrapper-transition-timing-function, initial);\n  box-sizing: content-box;\n}\n.swiper-android .swiper-slide,\n.swiper-ios .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-horizontal {\n  touch-action: pan-y;\n}\n.swiper-vertical {\n  touch-action: pan-x;\n}\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n  display: block;\n}\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n/* Auto Height */\n.swiper-autoheight,\n.swiper-autoheight .swiper-slide {\n  height: auto;\n}\n.swiper-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n.swiper-backface-hidden .swiper-slide {\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* 3D Effects */\n.swiper-3d.swiper-css-mode .swiper-wrapper {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-wrapper {\n  transform-style: preserve-3d;\n}\n.swiper-3d {\n  perspective: 1200px;\n}\n.swiper-3d .swiper-slide,\n.swiper-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n/* CSS Mode */\n.swiper-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n.swiper-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n.swiper-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n.swiper-css-mode.swiper-horizontal > .swiper-wrapper {\n  scroll-snap-type: x mandatory;\n}\n.swiper-css-mode.swiper-vertical > .swiper-wrapper {\n  scroll-snap-type: y mandatory;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper {\n  scroll-snap-type: none;\n}\n.swiper-css-mode.swiper-free-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: none;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper::before {\n  content: '';\n  flex-shrink: 0;\n  order: 9999;\n}\n.swiper-css-mode.swiper-centered > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: center center;\n  scroll-snap-stop: always;\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper > .swiper-slide:first-child {\n  margin-inline-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-horizontal > .swiper-wrapper::before {\n  height: 100%;\n  min-height: 1px;\n  width: var(--swiper-centered-offset-after);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper > .swiper-slide:first-child {\n  margin-block-start: var(--swiper-centered-offset-before);\n}\n.swiper-css-mode.swiper-centered.swiper-vertical > .swiper-wrapper::before {\n  width: 100%;\n  min-width: 1px;\n  height: var(--swiper-centered-offset-after);\n}\n/* Slide styles start */\n/* 3D Shadows */\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom,\n.swiper-3d .swiper-slide-shadow,\n.swiper-3d .swiper-slide-shadow-left,\n.swiper-3d .swiper-slide-shadow-right,\n.swiper-3d .swiper-slide-shadow-top,\n.swiper-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-3d .swiper-slide-shadow {\n  background: rgba(0, 0, 0, 0.15);\n}\n.swiper-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n.swiper:not(.swiper-watch-progress) .swiper-lazy-preloader,\n.swiper-watch-progress .swiper-slide-visible .swiper-lazy-preloader {\n  animation: swiper-preloader-spin 1s infinite linear;\n}\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n@keyframes swiper-preloader-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/* Slide styles end */\n.swiper-virtual .swiper-slide {\n  -webkit-backface-visibility: hidden;\n  transform: translateZ(0);\n}\n.swiper-virtual.swiper-css-mode .swiper-wrapper::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n}\n.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after {\n  height: 1px;\n  width: var(--swiper-virtual-size);\n}\n.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after {\n  width: 1px;\n  height: var(--swiper-virtual-size);\n}\n:root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-top-offset: 50%;\n  --swiper-navigation-sides-offset: 10px;\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: var(--swiper-navigation-top-offset, 50%);\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-button-prev.swiper-button-hidden,\n.swiper-button-next.swiper-button-hidden {\n  opacity: 0;\n  cursor: auto;\n  pointer-events: none;\n}\n.swiper-navigation-disabled .swiper-button-prev,\n.swiper-navigation-disabled .swiper-button-next {\n  display: none !important;\n}\n.swiper-button-prev svg,\n.swiper-button-next svg {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  transform-origin: center;\n}\n.swiper-rtl .swiper-button-prev svg,\n.swiper-rtl .swiper-button-next svg {\n  transform: rotate(180deg);\n}\n.swiper-button-prev,\n.swiper-rtl .swiper-button-next {\n  left: var(--swiper-navigation-sides-offset, 10px);\n  right: auto;\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-lock {\n  display: none;\n}\n/* Navigation font start */\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  font-variant: initial;\n  line-height: 1;\n}\n.swiper-button-prev:after,\n.swiper-rtl .swiper-button-next:after {\n  content: 'prev';\n}\n.swiper-button-next,\n.swiper-rtl .swiper-button-prev {\n  right: var(--swiper-navigation-sides-offset, 10px);\n  left: auto;\n}\n.swiper-button-next:after,\n.swiper-rtl .swiper-button-prev:after {\n  content: 'next';\n}\n/* Navigation font end */\n:root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  --swiper-pagination-left: auto;\n  --swiper-pagination-right: 8px;\n  --swiper-pagination-bottom: 8px;\n  --swiper-pagination-top: auto;\n  --swiper-pagination-fraction-color: inherit;\n  --swiper-pagination-progressbar-bg-color: rgba(0,0,0,0.25);\n  --swiper-pagination-progressbar-size: 4px;\n  --swiper-pagination-bullet-size: 8px;\n  --swiper-pagination-bullet-width: 8px;\n  --swiper-pagination-bullet-height: 8px;\n  --swiper-pagination-bullet-border-radius: 50%;\n  --swiper-pagination-bullet-inactive-color: #000;\n  --swiper-pagination-bullet-inactive-opacity: 0.2;\n  --swiper-pagination-bullet-opacity: 1;\n  --swiper-pagination-bullet-horizontal-gap: 4px;\n  --swiper-pagination-bullet-vertical-gap: 6px;\n  */\n}\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n.swiper-pagination-disabled > .swiper-pagination,\n.swiper-pagination.swiper-pagination-disabled {\n  display: none !important;\n}\n/* Common Styles */\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-horizontal > .swiper-pagination-bullets,\n.swiper-pagination-bullets.swiper-pagination-horizontal {\n  bottom: var(--swiper-pagination-bottom, 8px);\n  top: var(--swiper-pagination-top, auto);\n  left: 0;\n  width: 100%;\n}\n/* Bullets */\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n.swiper-pagination-bullet {\n  width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));\n  height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));\n  display: inline-block;\n  border-radius: var(--swiper-pagination-bullet-border-radius, 50%);\n  background: var(--swiper-pagination-bullet-inactive-color, #000);\n  opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.2);\n}\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n          appearance: none;\n}\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n.swiper-pagination-bullet:only-child {\n  display: none !important;\n}\n.swiper-pagination-bullet-active {\n  opacity: var(--swiper-pagination-bullet-opacity, 1);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n.swiper-vertical > .swiper-pagination-bullets,\n.swiper-pagination-vertical.swiper-pagination-bullets {\n  right: var(--swiper-pagination-right, 8px);\n  left: var(--swiper-pagination-left, auto);\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n.swiper-vertical > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: var(--swiper-pagination-bullet-vertical-gap, 6px) 0;\n  display: block;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n.swiper-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 var(--swiper-pagination-bullet-horizontal-gap, 4px);\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,\n.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms left;\n}\n.swiper-horizontal.swiper-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms right;\n}\n/* Fraction */\n.swiper-pagination-fraction {\n  color: var(--swiper-pagination-fraction-color, inherit);\n}\n/* Progress */\n.swiper-pagination-progressbar {\n  background: var(--swiper-pagination-progressbar-bg-color, rgba(0, 0, 0, 0.25));\n  position: absolute;\n}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n.swiper-horizontal > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-horizontal,\n.swiper-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: var(--swiper-pagination-progressbar-size, 4px);\n  left: 0;\n  top: 0;\n}\n.swiper-vertical > .swiper-pagination-progressbar,\n.swiper-pagination-progressbar.swiper-pagination-vertical,\n.swiper-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,\n.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite {\n  width: var(--swiper-pagination-progressbar-size, 4px);\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n.swiper-pagination-lock {\n  display: none;\n}\n:root {\n  /*\n  --swiper-scrollbar-border-radius: 10px;\n  --swiper-scrollbar-top: auto;\n  --swiper-scrollbar-bottom: 4px;\n  --swiper-scrollbar-left: auto;\n  --swiper-scrollbar-right: 4px;\n  --swiper-scrollbar-sides-offset: 1%;\n  --swiper-scrollbar-bg-color: rgba(0, 0, 0, 0.1);\n  --swiper-scrollbar-drag-bg-color: rgba(0, 0, 0, 0.5);\n  --swiper-scrollbar-size: 4px;\n  */\n}\n.swiper-scrollbar {\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  position: relative;\n  touch-action: none;\n  background: var(--swiper-scrollbar-bg-color, rgba(0, 0, 0, 0.1));\n}\n.swiper-scrollbar-disabled > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-disabled {\n  display: none !important;\n}\n.swiper-horizontal > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-horizontal {\n  position: absolute;\n  left: var(--swiper-scrollbar-sides-offset, 1%);\n  bottom: var(--swiper-scrollbar-bottom, 4px);\n  top: var(--swiper-scrollbar-top, auto);\n  z-index: 50;\n  height: var(--swiper-scrollbar-size, 4px);\n  width: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n}\n.swiper-vertical > .swiper-scrollbar,\n.swiper-scrollbar.swiper-scrollbar-vertical {\n  position: absolute;\n  left: var(--swiper-scrollbar-left, auto);\n  right: var(--swiper-scrollbar-right, 4px);\n  top: var(--swiper-scrollbar-sides-offset, 1%);\n  z-index: 50;\n  width: var(--swiper-scrollbar-size, 4px);\n  height: calc(100% - 2 * var(--swiper-scrollbar-sides-offset, 1%));\n}\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: var(--swiper-scrollbar-drag-bg-color, rgba(0, 0, 0, 0.5));\n  border-radius: var(--swiper-scrollbar-border-radius, 10px);\n  left: 0;\n  top: 0;\n}\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n.swiper-scrollbar-lock {\n  display: none;\n}\n/* Zoom container styles start */\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain;\n}\n/* Zoom container styles end */\n.swiper-slide-zoomed {\n  cursor: move;\n  touch-action: none;\n}\n/* a11y */\n.swiper .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n.swiper-free-mode > .swiper-wrapper {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-grid > .swiper-wrapper {\n  flex-wrap: wrap;\n}\n.swiper-grid-column > .swiper-wrapper {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-fade.swiper-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n.swiper-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n.swiper-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-fade .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube {\n  overflow: visible;\n}\n.swiper-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n.swiper-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-cube.swiper-rtl .swiper-slide {\n  transform-origin: 100% 0;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n.swiper-cube .swiper-slide-active,\n.swiper-cube .swiper-slide-next,\n.swiper-cube .swiper-slide-prev {\n  pointer-events: auto;\n  visibility: visible;\n}\n.swiper-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.swiper-cube .swiper-cube-shadow:before {\n  content: '';\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n.swiper-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n/* Cube slide shadows start */\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-top,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-bottom,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-left,\n.swiper-cube .swiper-slide-shadow-cube.swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* Cube slide shadows end */\n.swiper-flip {\n  overflow: visible;\n}\n.swiper-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n}\n.swiper-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n.swiper-flip .swiper-slide-active,\n.swiper-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n/* Flip slide shadows start */\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-top,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-bottom,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-left,\n.swiper-flip .swiper-slide-shadow-flip.swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n/* Flip slide shadows end */\n.swiper-creative .swiper-slide {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n  transition-property: transform, opacity, height;\n}\n.swiper-cards {\n  overflow: visible;\n}\n.swiper-cards .swiper-slide {\n  transform-origin: center bottom;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  overflow: hidden;\n}\n",
          '',
        ]),
          (t.Z = p);
      },
      645: function (e) {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var i = '',
                  s = void 0 !== t[5];
                return (
                  t[4] && (i += '@supports ('.concat(t[4], ') {')),
                  t[2] && (i += '@media '.concat(t[2], ' {')),
                  s && (i += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
                  (i += e(t)),
                  s && (i += '}'),
                  t[2] && (i += '}'),
                  t[4] && (i += '}'),
                  i
                );
              }).join('');
            }),
            (t.i = function (e, i, s, a, r) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var n = {};
              if (s)
                for (var o = 0; o < this.length; o++) {
                  var l = this[o][0];
                  null != l && (n[l] = !0);
                }
              for (var d = 0; d < e.length; d++) {
                var p = [].concat(e[d]);
                (s && n[p[0]]) ||
                  (void 0 !== r &&
                    (void 0 === p[5] ||
                      (p[1] = '@layer'
                        .concat(p[5].length > 0 ? ' '.concat(p[5]) : '', ' {')
                        .concat(p[1], '}')),
                    (p[5] = r)),
                  i &&
                    (p[2]
                      ? ((p[1] = '@media '.concat(p[2], ' {').concat(p[1], '}')), (p[2] = i))
                      : (p[2] = i)),
                  a &&
                    (p[4]
                      ? ((p[1] = '@supports ('.concat(p[4], ') {').concat(p[1], '}')), (p[4] = a))
                      : (p[4] = ''.concat(a))),
                  t.push(p));
              }
            }),
            t
          );
        };
      },
      667: function (e) {
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                t.hash && (e += t.hash),
                /["'() \t\n]|(%20)/.test(e) || t.needQuotes
                  ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, '\\n'), '"')
                  : e)
              : e
          );
        };
      },
      81: function (e) {
        e.exports = function (e) {
          return e[1];
        };
      },
      379: function (e) {
        var t = [];
        function i(e) {
          for (var i = -1, s = 0; s < t.length; s++)
            if (t[s].identifier === e) {
              i = s;
              break;
            }
          return i;
        }
        function s(e, s) {
          for (var r = {}, n = [], o = 0; o < e.length; o++) {
            var l = e[o],
              d = s.base ? l[0] + s.base : l[0],
              p = r[d] || 0,
              c = ''.concat(d, ' ').concat(p);
            r[d] = p + 1;
            var u = i(c),
              m = { css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5] };
            if (-1 !== u) t[u].references++, t[u].updater(m);
            else {
              var h = a(m, s);
              (s.byIndex = o), t.splice(o, 0, { identifier: c, updater: h, references: 1 });
            }
            n.push(c);
          }
          return n;
        }
        function a(e, t) {
          var i = t.domAPI(t);
          return (
            i.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                i.update((e = t));
              } else i.remove();
            }
          );
        }
        e.exports = function (e, a) {
          var r = s((e = e || []), (a = a || {}));
          return function (e) {
            e = e || [];
            for (var n = 0; n < r.length; n++) {
              var o = i(r[n]);
              t[o].references--;
            }
            for (var l = s(e, a), d = 0; d < r.length; d++) {
              var p = i(r[d]);
              0 === t[p].references && (t[p].updater(), t.splice(p, 1));
            }
            r = l;
          };
        };
      },
      569: function (e) {
        var t = {};
        e.exports = function (e, i) {
          var s = (function (e) {
            if (void 0 === t[e]) {
              var i = document.querySelector(e);
              if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement)
                try {
                  i = i.contentDocument.head;
                } catch (e) {
                  i = null;
                }
              t[e] = i;
            }
            return t[e];
          })(e);
          if (!s)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          s.appendChild(i);
        };
      },
      216: function (e) {
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: function (e, t, i) {
        e.exports = function (e) {
          var t = i.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      795: function (e) {
        e.exports = function (e) {
          if ('undefined' == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (i) {
              !(function (e, t, i) {
                var s = '';
                i.supports && (s += '@supports ('.concat(i.supports, ') {')),
                  i.media && (s += '@media '.concat(i.media, ' {'));
                var a = void 0 !== i.layer;
                a && (s += '@layer'.concat(i.layer.length > 0 ? ' '.concat(i.layer) : '', ' {')),
                  (s += i.css),
                  a && (s += '}'),
                  i.media && (s += '}'),
                  i.supports && (s += '}');
                var r = i.sourceMap;
                r &&
                  'undefined' != typeof btoa &&
                  (s += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                    btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                    ' */',
                  )),
                  t.styleTagTransform(s, e, t.options);
              })(t, e, i);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: function (e) {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      954: function (e) {
        e.exports =
          'data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA';
      },
    },
    t = {};
  function i(s) {
    var a = t[s];
    if (void 0 !== a) return a.exports;
    var r = (t[s] = { id: s, exports: {} });
    return e[s](r, r.exports, i), r.exports;
  }
  (i.m = e),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, { a: t }), t;
    }),
    (i.d = function (e, t) {
      for (var s in t)
        i.o(t, s) && !i.o(e, s) && Object.defineProperty(e, s, { enumerable: !0, get: t[s] });
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.b = document.baseURI || self.location.href),
    (i.nc = void 0),
    (function () {
      function e(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return t(e);
          })(e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
          })(e) ||
          (function (e, i) {
            if (e) {
              if ('string' == typeof e) return t(e, i);
              var s = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === s && e.constructor && (s = e.constructor.name),
                'Map' === s || 'Set' === s
                  ? Array.from(e)
                  : 'Arguments' === s || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)
                  ? t(e, i)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      function t(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, s = new Array(t); i < t; i++) s[i] = e[i];
        return s;
      }
      var s,
        a,
        r,
        n,
        o,
        l =
          ((s = [
            'a[href]',
            'area[href]',
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            'select:not([disabled]):not([aria-hidden])',
            'textarea:not([disabled]):not([aria-hidden])',
            'button:not([disabled]):not([aria-hidden])',
            'iframe',
            'object',
            'embed',
            '[contenteditable]',
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (a = (function () {
            function t(i) {
              var s = i.targetModal,
                a = i.triggers,
                r = void 0 === a ? [] : a,
                n = i.onShow,
                o = void 0 === n ? function () {} : n,
                l = i.onClose,
                d = void 0 === l ? function () {} : l,
                p = i.openTrigger,
                c = void 0 === p ? 'data-micromodal-trigger' : p,
                u = i.closeTrigger,
                m = void 0 === u ? 'data-micromodal-close' : u,
                h = i.openClass,
                f = void 0 === h ? 'is-open' : h,
                g = i.disableScroll,
                v = void 0 !== g && g,
                w = i.disableFocus,
                b = void 0 !== w && w,
                y = i.awaitCloseAnimation,
                x = void 0 !== y && y,
                E = i.awaitOpenAnimation,
                S = void 0 !== E && E,
                A = i.debugMode,
                T = void 0 !== A && A;
              !(function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                (this.modal = document.getElementById(s)),
                (this.config = {
                  debugMode: T,
                  disableScroll: v,
                  openTrigger: c,
                  closeTrigger: m,
                  openClass: f,
                  onShow: o,
                  onClose: d,
                  awaitCloseAnimation: x,
                  awaitOpenAnimation: S,
                  disableFocus: b,
                }),
                r.length > 0 && this.registerTriggers.apply(this, e(r)),
                (this.onClick = this.onClick.bind(this)),
                (this.onKeydown = this.onKeydown.bind(this));
            }
            var i;
            return (
              (i = [
                {
                  key: 'registerTriggers',
                  value: function () {
                    for (var e = this, t = arguments.length, i = new Array(t), s = 0; s < t; s++)
                      i[s] = arguments[s];
                    i.filter(Boolean).forEach(function (t) {
                      t.addEventListener('click', function (t) {
                        return e.showModal(t);
                      });
                    });
                  },
                },
                {
                  key: 'showModal',
                  value: function () {
                    var e = this,
                      t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    (this.activeElement = document.activeElement),
                      this.modal.setAttribute('aria-hidden', 'false'),
                      this.modal.classList.add(this.config.openClass),
                      this.scrollBehaviour('disable'),
                      this.addEventListeners(),
                      this.config.awaitOpenAnimation
                        ? this.modal.addEventListener(
                            'animationend',
                            function t() {
                              e.modal.removeEventListener('animationend', t, !1),
                                e.setFocusToFirstNode();
                            },
                            !1,
                          )
                        : this.setFocusToFirstNode(),
                      this.config.onShow(this.modal, this.activeElement, t);
                  },
                },
                {
                  key: 'closeModal',
                  value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                      t = this.modal;
                    if (
                      (this.modal.setAttribute('aria-hidden', 'true'),
                      this.removeEventListeners(),
                      this.scrollBehaviour('enable'),
                      this.activeElement && this.activeElement.focus && this.activeElement.focus(),
                      this.config.onClose(this.modal, this.activeElement, e),
                      this.config.awaitCloseAnimation)
                    ) {
                      var i = this.config.openClass;
                      this.modal.addEventListener(
                        'animationend',
                        function e() {
                          t.classList.remove(i), t.removeEventListener('animationend', e, !1);
                        },
                        !1,
                      );
                    } else t.classList.remove(this.config.openClass);
                  },
                },
                {
                  key: 'closeModalById',
                  value: function (e) {
                    (this.modal = document.getElementById(e)), this.modal && this.closeModal();
                  },
                },
                {
                  key: 'scrollBehaviour',
                  value: function (e) {
                    if (this.config.disableScroll) {
                      var t = document.querySelector('body');
                      switch (e) {
                        case 'enable':
                          Object.assign(t.style, { overflow: '' });
                          break;
                        case 'disable':
                          Object.assign(t.style, { overflow: 'hidden' });
                      }
                    }
                  },
                },
                {
                  key: 'addEventListeners',
                  value: function () {
                    this.modal.addEventListener('touchstart', this.onClick),
                      this.modal.addEventListener('click', this.onClick),
                      document.addEventListener('keydown', this.onKeydown);
                  },
                },
                {
                  key: 'removeEventListeners',
                  value: function () {
                    this.modal.removeEventListener('touchstart', this.onClick),
                      this.modal.removeEventListener('click', this.onClick),
                      document.removeEventListener('keydown', this.onKeydown);
                  },
                },
                {
                  key: 'onClick',
                  value: function (e) {
                    (e.target.hasAttribute(this.config.closeTrigger) ||
                      e.target.parentNode.hasAttribute(this.config.closeTrigger)) &&
                      (e.preventDefault(), e.stopPropagation(), this.closeModal(e));
                  },
                },
                {
                  key: 'onKeydown',
                  value: function (e) {
                    27 === e.keyCode && this.closeModal(e), 9 === e.keyCode && this.retainFocus(e);
                  },
                },
                {
                  key: 'getFocusableNodes',
                  value: function () {
                    var t = this.modal.querySelectorAll(s);
                    return Array.apply(void 0, e(t));
                  },
                },
                {
                  key: 'setFocusToFirstNode',
                  value: function () {
                    var e = this;
                    if (!this.config.disableFocus) {
                      var t = this.getFocusableNodes();
                      if (0 !== t.length) {
                        var i = t.filter(function (t) {
                          return !t.hasAttribute(e.config.closeTrigger);
                        });
                        i.length > 0 && i[0].focus(), 0 === i.length && t[0].focus();
                      }
                    }
                  },
                },
                {
                  key: 'retainFocus',
                  value: function (e) {
                    var t = this.getFocusableNodes();
                    if (0 !== t.length)
                      if (
                        ((t = t.filter(function (e) {
                          return null !== e.offsetParent;
                        })),
                        this.modal.contains(document.activeElement))
                      ) {
                        var i = t.indexOf(document.activeElement);
                        e.shiftKey && 0 === i && (t[t.length - 1].focus(), e.preventDefault()),
                          !e.shiftKey &&
                            t.length > 0 &&
                            i === t.length - 1 &&
                            (t[0].focus(), e.preventDefault());
                      } else t[0].focus();
                  },
                },
              ]) &&
                (function (e, t) {
                  for (var i = 0; i < t.length; i++) {
                    var s = t[i];
                    (s.enumerable = s.enumerable || !1),
                      (s.configurable = !0),
                      'value' in s && (s.writable = !0),
                      Object.defineProperty(e, s.key, s);
                  }
                })(t.prototype, i),
              t
            );
          })()),
          (r = null),
          (n = function (e) {
            if (!document.getElementById(e))
              return (
                console.warn(
                  "MicroModal: ❗Seems like you have missed %c'".concat(e, "'"),
                  'background-color: #f8f9fa;color: #50596c;font-weight: bold;',
                  'ID somewhere in your code. Refer example below to resolve it.',
                ),
                console.warn(
                  '%cExample:',
                  'background-color: #f8f9fa;color: #50596c;font-weight: bold;',
                  '<div class="modal" id="'.concat(e, '"></div>'),
                ),
                !1
              );
          }),
          (o = function (e, t) {
            if (
              ((function (e) {
                e.length <= 0 &&
                  (console.warn(
                    "MicroModal: ❗Please specify at least one %c'micromodal-trigger'",
                    'background-color: #f8f9fa;color: #50596c;font-weight: bold;',
                    'data attribute.',
                  ),
                  console.warn(
                    '%cExample:',
                    'background-color: #f8f9fa;color: #50596c;font-weight: bold;',
                    '<a href="#" data-micromodal-trigger="my-modal"></a>',
                  ));
              })(e),
              !t)
            )
              return !0;
            for (var i in t) n(i);
            return !0;
          }),
          {
            init: function (t) {
              var i = Object.assign({}, { openTrigger: 'data-micromodal-trigger' }, t),
                s = e(document.querySelectorAll('['.concat(i.openTrigger, ']'))),
                n = (function (e, t) {
                  var i = [];
                  return (
                    e.forEach(function (e) {
                      var s = e.attributes[t].value;
                      void 0 === i[s] && (i[s] = []), i[s].push(e);
                    }),
                    i
                  );
                })(s, i.openTrigger);
              if (!0 !== i.debugMode || !1 !== o(s, n))
                for (var l in n) {
                  var d = n[l];
                  (i.targetModal = l), (i.triggers = e(d)), (r = new a(i));
                }
            },
            show: function (e, t) {
              var i = t || {};
              (i.targetModal = e),
                (!0 === i.debugMode && !1 === n(e)) ||
                  (r && r.removeEventListeners(), (r = new a(i)).showModal());
            },
            close: function (e) {
              e ? r.closeModalById(e) : r.closeModal();
            },
          });
      'undefined' != typeof window && (window.MicroModal = l);
      var d = l,
        p = function () {
          const e = document.querySelector('.mobile-nav-btn'),
            t = document.querySelector('.mobile-nav'),
            i = document.querySelector('.nav-icon');
          e.onclick = function () {
            t.classList.toggle('mobile-nav--open'),
              i.classList.toggle('nav-icon--active'),
              document.body.classList.toggle('no-scroll');
          };
        };
      function c(e) {
        return null !== e && 'object' == typeof e && 'constructor' in e && e.constructor === Object;
      }
      function u(e, t) {
        void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          Object.keys(t).forEach((i) => {
            void 0 === e[i]
              ? (e[i] = t[i])
              : c(t[i]) && c(e[i]) && Object.keys(t[i]).length > 0 && u(e[i], t[i]);
          });
      }
      const m = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: '' },
        querySelector() {
          return null;
        },
        querySelectorAll() {
          return [];
        },
        getElementById() {
          return null;
        },
        createEvent() {
          return { initEvent() {} };
        },
        createElement() {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
              return [];
            },
          };
        },
        createElementNS() {
          return {};
        },
        importNode() {
          return null;
        },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
      };
      function h() {
        const e = 'undefined' != typeof document ? document : {};
        return u(e, m), e;
      }
      const f = {
        document: m,
        navigator: { userAgent: '' },
        location: {
          hash: '',
          host: '',
          hostname: '',
          href: '',
          origin: '',
          pathname: '',
          protocol: '',
          search: '',
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle() {
          return {
            getPropertyValue() {
              return '';
            },
          };
        },
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia() {
          return {};
        },
        requestAnimationFrame(e) {
          return 'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0);
        },
        cancelAnimationFrame(e) {
          'undefined' != typeof setTimeout && clearTimeout(e);
        },
      };
      function g() {
        const e = 'undefined' != typeof window ? window : {};
        return u(e, f), e;
      }
      function v(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      }
      function w() {
        return Date.now();
      }
      function b(e, t) {
        void 0 === t && (t = 'x');
        const i = g();
        let s, a, r;
        const n = (function (e) {
          const t = g();
          let i;
          return (
            t.getComputedStyle && (i = t.getComputedStyle(e, null)),
            !i && e.currentStyle && (i = e.currentStyle),
            i || (i = e.style),
            i
          );
        })(e);
        return (
          i.WebKitCSSMatrix
            ? ((a = n.transform || n.webkitTransform),
              a.split(',').length > 6 &&
                (a = a
                  .split(', ')
                  .map((e) => e.replace(',', '.'))
                  .join(', ')),
              (r = new i.WebKitCSSMatrix('none' === a ? '' : a)))
            : ((r =
                n.MozTransform ||
                n.OTransform ||
                n.MsTransform ||
                n.msTransform ||
                n.transform ||
                n.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
              (s = r.toString().split(','))),
          'x' === t &&
            (a = i.WebKitCSSMatrix
              ? r.m41
              : 16 === s.length
              ? parseFloat(s[12])
              : parseFloat(s[4])),
          'y' === t &&
            (a = i.WebKitCSSMatrix
              ? r.m42
              : 16 === s.length
              ? parseFloat(s[13])
              : parseFloat(s[5])),
          a || 0
        );
      }
      function y(e) {
        return (
          'object' == typeof e &&
          null !== e &&
          e.constructor &&
          'Object' === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function x() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ['__proto__', 'constructor', 'prototype'];
        for (let s = 1; s < arguments.length; s += 1) {
          const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
          if (
            null != a &&
            ((i = a),
            !('undefined' != typeof window && void 0 !== window.HTMLElement
              ? i instanceof HTMLElement
              : i && (1 === i.nodeType || 11 === i.nodeType)))
          ) {
            const i = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
            for (let t = 0, s = i.length; t < s; t += 1) {
              const s = i[t],
                r = Object.getOwnPropertyDescriptor(a, s);
              void 0 !== r &&
                r.enumerable &&
                (y(e[s]) && y(a[s])
                  ? a[s].__swiper__
                    ? (e[s] = a[s])
                    : x(e[s], a[s])
                  : !y(e[s]) && y(a[s])
                  ? ((e[s] = {}), a[s].__swiper__ ? (e[s] = a[s]) : x(e[s], a[s]))
                  : (e[s] = a[s]));
            }
          }
        }
        var i;
        return e;
      }
      function E(e, t, i) {
        e.style.setProperty(t, i);
      }
      function S(e) {
        let { swiper: t, targetPosition: i, side: s } = e;
        const a = g(),
          r = -t.translate;
        let n,
          o = null;
        const l = t.params.speed;
        (t.wrapperEl.style.scrollSnapType = 'none'), a.cancelAnimationFrame(t.cssModeFrameID);
        const d = i > r ? 'next' : 'prev',
          p = (e, t) => ('next' === d && e >= t) || ('prev' === d && e <= t),
          c = () => {
            (n = new Date().getTime()), null === o && (o = n);
            const e = Math.max(Math.min((n - o) / l, 1), 0),
              d = 0.5 - Math.cos(e * Math.PI) / 2;
            let u = r + d * (i - r);
            if ((p(u, i) && (u = i), t.wrapperEl.scrollTo({ [s]: u }), p(u, i)))
              return (
                (t.wrapperEl.style.overflow = 'hidden'),
                (t.wrapperEl.style.scrollSnapType = ''),
                setTimeout(() => {
                  (t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [s]: u });
                }),
                void a.cancelAnimationFrame(t.cssModeFrameID)
              );
            t.cssModeFrameID = a.requestAnimationFrame(c);
          };
        c();
      }
      function A(e) {
        return (
          e.querySelector('.swiper-slide-transform') ||
          (e.shadowRoot && e.shadowRoot.querySelector('.swiper-slide-transform')) ||
          e
        );
      }
      function T(e, t) {
        return void 0 === t && (t = ''), [...e.children].filter((e) => e.matches(t));
      }
      function M(e, t) {
        void 0 === t && (t = []);
        const i = document.createElement(e);
        return i.classList.add(...(Array.isArray(t) ? t : [t])), i;
      }
      function C(e) {
        const t = g(),
          i = h(),
          s = e.getBoundingClientRect(),
          a = i.body,
          r = e.clientTop || a.clientTop || 0,
          n = e.clientLeft || a.clientLeft || 0,
          o = e === t ? t.scrollY : e.scrollTop,
          l = e === t ? t.scrollX : e.scrollLeft;
        return { top: s.top + o - r, left: s.left + l - n };
      }
      function P(e, t) {
        return g().getComputedStyle(e, null).getPropertyValue(t);
      }
      function L(e) {
        let t,
          i = e;
        if (i) {
          for (t = 0; null !== (i = i.previousSibling); ) 1 === i.nodeType && (t += 1);
          return t;
        }
      }
      function k(e, t) {
        const i = [];
        let s = e.parentElement;
        for (; s; ) t ? s.matches(t) && i.push(s) : i.push(s), (s = s.parentElement);
        return i;
      }
      function z(e, t) {
        t &&
          e.addEventListener('transitionend', function i(s) {
            s.target === e && (t.call(e, s), e.removeEventListener('transitionend', i));
          });
      }
      function I(e, t, i) {
        const s = g();
        return i
          ? e['width' === t ? 'offsetWidth' : 'offsetHeight'] +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue('width' === t ? 'margin-right' : 'margin-top'),
              ) +
              parseFloat(
                s
                  .getComputedStyle(e, null)
                  .getPropertyValue('width' === t ? 'margin-left' : 'margin-bottom'),
              )
          : e.offsetWidth;
      }
      let O, $, D;
      function B() {
        return (
          O ||
            (O = (function () {
              const e = g(),
                t = h();
              return {
                smoothScroll:
                  t.documentElement &&
                  t.documentElement.style &&
                  'scrollBehavior' in t.documentElement.style,
                touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
              };
            })()),
          O
        );
      }
      var G = {
        on(e, t, i) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ('function' != typeof t) return s;
          const a = i ? 'unshift' : 'push';
          return (
            e.split(' ').forEach((e) => {
              s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t);
            }),
            s
          );
        },
        once(e, t, i) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ('function' != typeof t) return s;
          function a() {
            s.off(e, a), a.__emitterProxy && delete a.__emitterProxy;
            for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
            t.apply(s, r);
          }
          return (a.__emitterProxy = t), s.on(e, a, i);
        },
        onAny(e, t) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ('function' != typeof e) return i;
          const s = t ? 'unshift' : 'push';
          return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e), i;
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const i = t.eventsAnyListeners.indexOf(e);
          return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
        },
        off(e, t) {
          const i = this;
          return !i.eventsListeners || i.destroyed
            ? i
            : i.eventsListeners
            ? (e.split(' ').forEach((e) => {
                void 0 === t
                  ? (i.eventsListeners[e] = [])
                  : i.eventsListeners[e] &&
                    i.eventsListeners[e].forEach((s, a) => {
                      (s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                        i.eventsListeners[e].splice(a, 1);
                    });
              }),
              i)
            : i;
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, i, s;
          for (var a = arguments.length, r = new Array(a), n = 0; n < a; n++) r[n] = arguments[n];
          return (
            'string' == typeof r[0] || Array.isArray(r[0])
              ? ((t = r[0]), (i = r.slice(1, r.length)), (s = e))
              : ((t = r[0].events), (i = r[0].data), (s = r[0].context || e)),
            i.unshift(s),
            (Array.isArray(t) ? t : t.split(' ')).forEach((t) => {
              e.eventsAnyListeners &&
                e.eventsAnyListeners.length &&
                e.eventsAnyListeners.forEach((e) => {
                  e.apply(s, [t, ...i]);
                }),
                e.eventsListeners &&
                  e.eventsListeners[t] &&
                  e.eventsListeners[t].forEach((e) => {
                    e.apply(s, i);
                  });
            }),
            e
          );
        },
      };
      const Y = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const i = t.closest(e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`);
          if (i) {
            let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t &&
              e.isElement &&
              (i.shadowRoot
                ? (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
                : requestAnimationFrame(() => {
                    i.shadowRoot &&
                      ((t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)),
                      t && t.remove());
                  })),
              t && t.remove();
          }
        },
        N = (e, t) => {
          if (!e.slides[t]) return;
          const i = e.slides[t].querySelector('[loading="lazy"]');
          i && i.removeAttribute('loading');
        },
        F = (e) => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const i = e.slides.length;
          if (!i || !t || t < 0) return;
          t = Math.min(t, i);
          const s =
              'auto' === e.params.slidesPerView
                ? e.slidesPerViewDynamic()
                : Math.ceil(e.params.slidesPerView),
            a = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const i = a,
              r = [i - t];
            return (
              r.push(...Array.from({ length: t }).map((e, t) => i + s + t)),
              void e.slides.forEach((t, i) => {
                r.includes(t.column) && N(e, i);
              })
            );
          }
          const r = a + s - 1;
          if (e.params.rewind || e.params.loop)
            for (let s = a - t; s <= r + t; s += 1) {
              const t = ((s % i) + i) % i;
              (t < a || t > r) && N(e, t);
            }
          else
            for (let s = Math.max(a - t, 0); s <= Math.min(r + t, i - 1); s += 1)
              s !== a && (s > r || s < a) && N(e, s);
        };
      var H = {
          updateSize: function () {
            const e = this;
            let t, i;
            const s = e.el;
            (t =
              void 0 !== e.params.width && null !== e.params.width
                ? e.params.width
                : s.clientWidth),
              (i =
                void 0 !== e.params.height && null !== e.params.height
                  ? e.params.height
                  : s.clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === i && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(P(s, 'padding-left') || 0, 10) -
                  parseInt(P(s, 'padding-right') || 0, 10)),
                (i =
                  i -
                  parseInt(P(s, 'padding-top') || 0, 10) -
                  parseInt(P(s, 'padding-bottom') || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(i) && (i = 0),
                Object.assign(e, { width: t, height: i, size: e.isHorizontal() ? t : i }));
          },
          updateSlides: function () {
            const e = this;
            function t(t) {
              return e.isHorizontal()
                ? t
                : {
                    width: 'height',
                    'margin-top': 'margin-left',
                    'margin-bottom ': 'margin-right',
                    'margin-left': 'margin-top',
                    'margin-right': 'margin-bottom',
                    'padding-left': 'padding-top',
                    'padding-right': 'padding-bottom',
                    marginRight: 'marginBottom',
                  }[t];
            }
            function i(e, i) {
              return parseFloat(e.getPropertyValue(t(i)) || 0);
            }
            const s = e.params,
              { wrapperEl: a, slidesEl: r, size: n, rtlTranslate: o, wrongRTL: l } = e,
              d = e.virtual && s.virtual.enabled,
              p = d ? e.virtual.slides.length : e.slides.length,
              c = T(r, `.${e.params.slideClass}, swiper-slide`),
              u = d ? e.virtual.slides.length : c.length;
            let m = [];
            const h = [],
              f = [];
            let g = s.slidesOffsetBefore;
            'function' == typeof g && (g = s.slidesOffsetBefore.call(e));
            let v = s.slidesOffsetAfter;
            'function' == typeof v && (v = s.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length,
              b = e.slidesGrid.length;
            let y = s.spaceBetween,
              x = -g,
              S = 0,
              A = 0;
            if (void 0 === n) return;
            'string' == typeof y && y.indexOf('%') >= 0
              ? (y = (parseFloat(y.replace('%', '')) / 100) * n)
              : 'string' == typeof y && (y = parseFloat(y)),
              (e.virtualSize = -y),
              c.forEach((e) => {
                o ? (e.style.marginLeft = '') : (e.style.marginRight = ''),
                  (e.style.marginBottom = ''),
                  (e.style.marginTop = '');
              }),
              s.centeredSlides &&
                s.cssMode &&
                (E(a, '--swiper-centered-offset-before', ''),
                E(a, '--swiper-centered-offset-after', ''));
            const M = s.grid && s.grid.rows > 1 && e.grid;
            let C;
            M && e.grid.initSlides(u);
            const L =
              'auto' === s.slidesPerView &&
              s.breakpoints &&
              Object.keys(s.breakpoints).filter((e) => void 0 !== s.breakpoints[e].slidesPerView)
                .length > 0;
            for (let a = 0; a < u; a += 1) {
              let r;
              if (
                ((C = 0),
                c[a] && (r = c[a]),
                M && e.grid.updateSlide(a, r, u, t),
                !c[a] || 'none' !== P(r, 'display'))
              ) {
                if ('auto' === s.slidesPerView) {
                  L && (c[a].style[t('width')] = '');
                  const n = getComputedStyle(r),
                    o = r.style.transform,
                    l = r.style.webkitTransform;
                  if (
                    (o && (r.style.transform = 'none'),
                    l && (r.style.webkitTransform = 'none'),
                    s.roundLengths)
                  )
                    C = e.isHorizontal() ? I(r, 'width', !0) : I(r, 'height', !0);
                  else {
                    const e = i(n, 'width'),
                      t = i(n, 'padding-left'),
                      s = i(n, 'padding-right'),
                      a = i(n, 'margin-left'),
                      o = i(n, 'margin-right'),
                      l = n.getPropertyValue('box-sizing');
                    if (l && 'border-box' === l) C = e + a + o;
                    else {
                      const { clientWidth: i, offsetWidth: n } = r;
                      C = e + t + s + a + o + (n - i);
                    }
                  }
                  o && (r.style.transform = o),
                    l && (r.style.webkitTransform = l),
                    s.roundLengths && (C = Math.floor(C));
                } else
                  (C = (n - (s.slidesPerView - 1) * y) / s.slidesPerView),
                    s.roundLengths && (C = Math.floor(C)),
                    c[a] && (c[a].style[t('width')] = `${C}px`);
                c[a] && (c[a].swiperSlideSize = C),
                  f.push(C),
                  s.centeredSlides
                    ? ((x = x + C / 2 + S / 2 + y),
                      0 === S && 0 !== a && (x = x - n / 2 - y),
                      0 === a && (x = x - n / 2 - y),
                      Math.abs(x) < 0.001 && (x = 0),
                      s.roundLengths && (x = Math.floor(x)),
                      A % s.slidesPerGroup == 0 && m.push(x),
                      h.push(x))
                    : (s.roundLengths && (x = Math.floor(x)),
                      (A - Math.min(e.params.slidesPerGroupSkip, A)) % e.params.slidesPerGroup ==
                        0 && m.push(x),
                      h.push(x),
                      (x = x + C + y)),
                  (e.virtualSize += C + y),
                  (S = C),
                  (A += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, n) + v),
              o &&
                l &&
                ('slide' === s.effect || 'coverflow' === s.effect) &&
                (a.style.width = `${e.virtualSize + y}px`),
              s.setWrapperSize && (a.style[t('width')] = `${e.virtualSize + y}px`),
              M && e.grid.updateWrapperSize(C, m, t),
              !s.centeredSlides)
            ) {
              const t = [];
              for (let i = 0; i < m.length; i += 1) {
                let a = m[i];
                s.roundLengths && (a = Math.floor(a)), m[i] <= e.virtualSize - n && t.push(a);
              }
              (m = t),
                Math.floor(e.virtualSize - n) - Math.floor(m[m.length - 1]) > 1 &&
                  m.push(e.virtualSize - n);
            }
            if (d && s.loop) {
              const t = f[0] + y;
              if (s.slidesPerGroup > 1) {
                const i = Math.ceil(
                    (e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup,
                  ),
                  a = t * s.slidesPerGroup;
                for (let e = 0; e < i; e += 1) m.push(m[m.length - 1] + a);
              }
              for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1)
                1 === s.slidesPerGroup && m.push(m[m.length - 1] + t),
                  h.push(h[h.length - 1] + t),
                  (e.virtualSize += t);
            }
            if ((0 === m.length && (m = [0]), 0 !== y)) {
              const i = e.isHorizontal() && o ? 'marginLeft' : t('marginRight');
              c.filter((e, t) => !(s.cssMode && !s.loop) || t !== c.length - 1).forEach((e) => {
                e.style[i] = `${y}px`;
              });
            }
            if (s.centeredSlides && s.centeredSlidesBounds) {
              let e = 0;
              f.forEach((t) => {
                e += t + (y || 0);
              }),
                (e -= y);
              const t = e - n;
              m = m.map((e) => (e <= 0 ? -g : e > t ? t + v : e));
            }
            if (s.centerInsufficientSlides) {
              let e = 0;
              if (
                (f.forEach((t) => {
                  e += t + (y || 0);
                }),
                (e -= y),
                e < n)
              ) {
                const t = (n - e) / 2;
                m.forEach((e, i) => {
                  m[i] = e - t;
                }),
                  h.forEach((e, i) => {
                    h[i] = e + t;
                  });
              }
            }
            if (
              (Object.assign(e, { slides: c, snapGrid: m, slidesGrid: h, slidesSizesGrid: f }),
              s.centeredSlides && s.cssMode && !s.centeredSlidesBounds)
            ) {
              E(a, '--swiper-centered-offset-before', -m[0] + 'px'),
                E(a, '--swiper-centered-offset-after', e.size / 2 - f[f.length - 1] / 2 + 'px');
              const t = -e.snapGrid[0],
                i = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map((e) => e + t)),
                (e.slidesGrid = e.slidesGrid.map((e) => e + i));
            }
            if (
              (u !== p && e.emit('slidesLengthChange'),
              m.length !== w &&
                (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
              h.length !== b && e.emit('slidesGridLengthChange'),
              s.watchSlidesProgress && e.updateSlidesOffset(),
              !(d || s.cssMode || ('slide' !== s.effect && 'fade' !== s.effect)))
            ) {
              const t = `${s.containerModifierClass}backface-hidden`,
                i = e.el.classList.contains(t);
              u <= s.maxBackfaceHiddenSlides
                ? i || e.el.classList.add(t)
                : i && e.el.classList.remove(t);
            }
          },
          updateAutoHeight: function (e) {
            const t = this,
              i = [],
              s = t.virtual && t.params.virtual.enabled;
            let a,
              r = 0;
            'number' == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
            const n = (e) => (s ? t.slides[t.getSlideIndexByData(e)] : t.slides[e]);
            if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)
                (t.visibleSlides || []).forEach((e) => {
                  i.push(e);
                });
              else
                for (a = 0; a < Math.ceil(t.params.slidesPerView); a += 1) {
                  const e = t.activeIndex + a;
                  if (e > t.slides.length && !s) break;
                  i.push(n(e));
                }
            else i.push(n(t.activeIndex));
            for (a = 0; a < i.length; a += 1)
              if (void 0 !== i[a]) {
                const e = i[a].offsetHeight;
                r = e > r ? e : r;
              }
            (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
          },
          updateSlidesOffset: function () {
            const e = this,
              t = e.slides,
              i = e.isElement
                ? e.isHorizontal()
                  ? e.wrapperEl.offsetLeft
                  : e.wrapperEl.offsetTop
                : 0;
            for (let s = 0; s < t.length; s += 1)
              t[s].swiperSlideOffset =
                (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) -
                i -
                e.cssOverflowAdjustment();
          },
          updateSlidesProgress: function (e) {
            void 0 === e && (e = (this && this.translate) || 0);
            const t = this,
              i = t.params,
              { slides: s, rtlTranslate: a, snapGrid: r } = t;
            if (0 === s.length) return;
            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            a && (n = e),
              s.forEach((e) => {
                e.classList.remove(i.slideVisibleClass);
              }),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            let o = i.spaceBetween;
            'string' == typeof o && o.indexOf('%') >= 0
              ? (o = (parseFloat(o.replace('%', '')) / 100) * t.size)
              : 'string' == typeof o && (o = parseFloat(o));
            for (let e = 0; e < s.length; e += 1) {
              const l = s[e];
              let d = l.swiperSlideOffset;
              i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
              const p =
                  (n + (i.centeredSlides ? t.minTranslate() : 0) - d) / (l.swiperSlideSize + o),
                c =
                  (n - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) /
                  (l.swiperSlideSize + o),
                u = -(n - d),
                m = u + t.slidesSizesGrid[e];
              ((u >= 0 && u < t.size - 1) || (m > 1 && m <= t.size) || (u <= 0 && m >= t.size)) &&
                (t.visibleSlides.push(l),
                t.visibleSlidesIndexes.push(e),
                s[e].classList.add(i.slideVisibleClass)),
                (l.progress = a ? -p : p),
                (l.originalProgress = a ? -c : c);
            }
          },
          updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
              const i = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * i) || 0;
            }
            const i = t.params,
              s = t.maxTranslate() - t.minTranslate();
            let { progress: a, isBeginning: r, isEnd: n, progressLoop: o } = t;
            const l = r,
              d = n;
            if (0 === s) (a = 0), (r = !0), (n = !0);
            else {
              a = (e - t.minTranslate()) / s;
              const i = Math.abs(e - t.minTranslate()) < 1,
                o = Math.abs(e - t.maxTranslate()) < 1;
              (r = i || a <= 0), (n = o || a >= 1), i && (a = 0), o && (a = 1);
            }
            if (i.loop) {
              const i = t.getSlideIndexByData(0),
                s = t.getSlideIndexByData(t.slides.length - 1),
                a = t.slidesGrid[i],
                r = t.slidesGrid[s],
                n = t.slidesGrid[t.slidesGrid.length - 1],
                l = Math.abs(e);
              (o = l >= a ? (l - a) / n : (l + n - r) / n), o > 1 && (o -= 1);
            }
            Object.assign(t, { progress: a, progressLoop: o, isBeginning: r, isEnd: n }),
              (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
                t.updateSlidesProgress(e),
              r && !l && t.emit('reachBeginning toEdge'),
              n && !d && t.emit('reachEnd toEdge'),
              ((l && !r) || (d && !n)) && t.emit('fromEdge'),
              t.emit('progress', a);
          },
          updateSlidesClasses: function () {
            const e = this,
              { slides: t, params: i, slidesEl: s, activeIndex: a } = e,
              r = e.virtual && i.virtual.enabled,
              n = (e) => T(s, `.${i.slideClass}${e}, swiper-slide${e}`)[0];
            let o;
            if (
              (t.forEach((e) => {
                e.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass);
              }),
              r)
            )
              if (i.loop) {
                let t = a - e.virtual.slidesBefore;
                t < 0 && (t = e.virtual.slides.length + t),
                  t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
                  (o = n(`[data-swiper-slide-index="${t}"]`));
              } else o = n(`[data-swiper-slide-index="${a}"]`);
            else o = t[a];
            if (o) {
              o.classList.add(i.slideActiveClass);
              let e = (function (e, t) {
                const i = [];
                for (; e.nextElementSibling; ) {
                  const s = e.nextElementSibling;
                  t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
                }
                return i;
              })(o, `.${i.slideClass}, swiper-slide`)[0];
              i.loop && !e && (e = t[0]), e && e.classList.add(i.slideNextClass);
              let s = (function (e, t) {
                const i = [];
                for (; e.previousElementSibling; ) {
                  const s = e.previousElementSibling;
                  t ? s.matches(t) && i.push(s) : i.push(s), (e = s);
                }
                return i;
              })(o, `.${i.slideClass}, swiper-slide`)[0];
              i.loop && 0 === !s && (s = t[t.length - 1]), s && s.classList.add(i.slidePrevClass);
            }
            e.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            const t = this,
              i = t.rtlTranslate ? t.translate : -t.translate,
              { snapGrid: s, params: a, activeIndex: r, realIndex: n, snapIndex: o } = t;
            let l,
              d = e;
            const p = (e) => {
              let i = e - t.virtual.slidesBefore;
              return (
                i < 0 && (i = t.virtual.slides.length + i),
                i >= t.virtual.slides.length && (i -= t.virtual.slides.length),
                i
              );
            };
            if (
              (void 0 === d &&
                (d = (function (e) {
                  const { slidesGrid: t, params: i } = e,
                    s = e.rtlTranslate ? e.translate : -e.translate;
                  let a;
                  for (let e = 0; e < t.length; e += 1)
                    void 0 !== t[e + 1]
                      ? s >= t[e] && s < t[e + 1] - (t[e + 1] - t[e]) / 2
                        ? (a = e)
                        : s >= t[e] && s < t[e + 1] && (a = e + 1)
                      : s >= t[e] && (a = e);
                  return i.normalizeSlideIndex && (a < 0 || void 0 === a) && (a = 0), a;
                })(t)),
              s.indexOf(i) >= 0)
            )
              l = s.indexOf(i);
            else {
              const e = Math.min(a.slidesPerGroupSkip, d);
              l = e + Math.floor((d - e) / a.slidesPerGroup);
            }
            if ((l >= s.length && (l = s.length - 1), d === r))
              return (
                l !== o && ((t.snapIndex = l), t.emit('snapIndexChange')),
                void (
                  t.params.loop &&
                  t.virtual &&
                  t.params.virtual.enabled &&
                  (t.realIndex = p(d))
                )
              );
            let c;
            (c =
              t.virtual && a.virtual.enabled && a.loop
                ? p(d)
                : t.slides[d]
                ? parseInt(t.slides[d].getAttribute('data-swiper-slide-index') || d, 10)
                : d),
              Object.assign(t, {
                previousSnapIndex: o,
                snapIndex: l,
                previousRealIndex: n,
                realIndex: c,
                previousIndex: r,
                activeIndex: d,
              }),
              t.initialized && F(t),
              t.emit('activeIndexChange'),
              t.emit('snapIndexChange'),
              (t.initialized || t.params.runCallbacksOnInit) &&
                (n !== c && t.emit('realIndexChange'), t.emit('slideChange'));
          },
          updateClickedSlide: function (e, t) {
            const i = this,
              s = i.params;
            let a = e.closest(`.${s.slideClass}, swiper-slide`);
            !a &&
              i.isElement &&
              t &&
              t.length > 1 &&
              t.includes(e) &&
              [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e) => {
                !a && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (a = e);
              });
            let r,
              n = !1;
            if (a)
              for (let e = 0; e < i.slides.length; e += 1)
                if (i.slides[e] === a) {
                  (n = !0), (r = e);
                  break;
                }
            if (!a || !n) return (i.clickedSlide = void 0), void (i.clickedIndex = void 0);
            (i.clickedSlide = a),
              i.virtual && i.params.virtual.enabled
                ? (i.clickedIndex = parseInt(a.getAttribute('data-swiper-slide-index'), 10))
                : (i.clickedIndex = r),
              s.slideToClickedSlide &&
                void 0 !== i.clickedIndex &&
                i.clickedIndex !== i.activeIndex &&
                i.slideToClickedSlide();
          },
        },
        R = {
          getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
            const { params: t, rtlTranslate: i, translate: s, wrapperEl: a } = this;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            let r = b(a, e);
            return (r += this.cssOverflowAdjustment()), i && (r = -r), r || 0;
          },
          setTranslate: function (e, t) {
            const i = this,
              { rtlTranslate: s, params: a, wrapperEl: r, progress: n } = i;
            let o,
              l = 0,
              d = 0;
            i.isHorizontal() ? (l = s ? -e : e) : (d = e),
              a.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
              (i.previousTranslate = i.translate),
              (i.translate = i.isHorizontal() ? l : d),
              a.cssMode
                ? (r[i.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = i.isHorizontal() ? -l : -d)
                : a.virtualTranslate ||
                  (i.isHorizontal()
                    ? (l -= i.cssOverflowAdjustment())
                    : (d -= i.cssOverflowAdjustment()),
                  (r.style.transform = `translate3d(${l}px, ${d}px, 0px)`));
            const p = i.maxTranslate() - i.minTranslate();
            (o = 0 === p ? 0 : (e - i.minTranslate()) / p),
              o !== n && i.updateProgress(e),
              i.emit('setTranslate', i.translate, t);
          },
          minTranslate: function () {
            return -this.snapGrid[0];
          },
          maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1];
          },
          translateTo: function (e, t, i, s, a) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === i && (i = !0),
              void 0 === s && (s = !0);
            const r = this,
              { params: n, wrapperEl: o } = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            const l = r.minTranslate(),
              d = r.maxTranslate();
            let p;
            if (((p = s && e > l ? l : s && e < d ? d : e), r.updateProgress(p), n.cssMode)) {
              const e = r.isHorizontal();
              if (0 === t) o[e ? 'scrollLeft' : 'scrollTop'] = -p;
              else {
                if (!r.support.smoothScroll)
                  return S({ swiper: r, targetPosition: -p, side: e ? 'left' : 'top' }), !0;
                o.scrollTo({ [e ? 'left' : 'top']: -p, behavior: 'smooth' });
              }
              return !0;
            }
            return (
              0 === t
                ? (r.setTransition(0),
                  r.setTranslate(p),
                  i && (r.emit('beforeTransitionStart', t, a), r.emit('transitionEnd')))
                : (r.setTransition(t),
                  r.setTranslate(p),
                  i && (r.emit('beforeTransitionStart', t, a), r.emit('transitionStart')),
                  r.animating ||
                    ((r.animating = !0),
                    r.onTranslateToWrapperTransitionEnd ||
                      (r.onTranslateToWrapperTransitionEnd = function (e) {
                        r &&
                          !r.destroyed &&
                          e.target === this &&
                          (r.wrapperEl.removeEventListener(
                            'transitionend',
                            r.onTranslateToWrapperTransitionEnd,
                          ),
                          (r.onTranslateToWrapperTransitionEnd = null),
                          delete r.onTranslateToWrapperTransitionEnd,
                          i && r.emit('transitionEnd'));
                      }),
                    r.wrapperEl.addEventListener(
                      'transitionend',
                      r.onTranslateToWrapperTransitionEnd,
                    ))),
              !0
            );
          },
        };
      function X(e) {
        let { swiper: t, runCallbacks: i, direction: s, step: a } = e;
        const { activeIndex: r, previousIndex: n } = t;
        let o = s;
        if (
          (o || (o = r > n ? 'next' : r < n ? 'prev' : 'reset'),
          t.emit(`transition${a}`),
          i && r !== n)
        ) {
          if ('reset' === o) return void t.emit(`slideResetTransition${a}`);
          t.emit(`slideChangeTransition${a}`),
            'next' === o ? t.emit(`slideNextTransition${a}`) : t.emit(`slidePrevTransition${a}`);
        }
      }
      var q = {
          slideTo: function (e, t, i, s, a) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === i && (i = !0),
              'string' == typeof e && (e = parseInt(e, 10));
            const r = this;
            let n = e;
            n < 0 && (n = 0);
            const {
              params: o,
              snapGrid: l,
              slidesGrid: d,
              previousIndex: p,
              activeIndex: c,
              rtlTranslate: u,
              wrapperEl: m,
              enabled: h,
            } = r;
            if ((r.animating && o.preventInteractionOnTransition) || (!h && !s && !a)) return !1;
            const f = Math.min(r.params.slidesPerGroupSkip, n);
            let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
            g >= l.length && (g = l.length - 1);
            const v = -l[g];
            if (o.normalizeSlideIndex)
              for (let e = 0; e < d.length; e += 1) {
                const t = -Math.floor(100 * v),
                  i = Math.floor(100 * d[e]),
                  s = Math.floor(100 * d[e + 1]);
                void 0 !== d[e + 1]
                  ? t >= i && t < s - (s - i) / 2
                    ? (n = e)
                    : t >= i && t < s && (n = e + 1)
                  : t >= i && (n = e);
              }
            if (r.initialized && n !== c) {
              if (
                !r.allowSlideNext &&
                (u
                  ? v > r.translate && v > r.minTranslate()
                  : v < r.translate && v < r.minTranslate())
              )
                return !1;
              if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (c || 0) !== n)
                return !1;
            }
            let w;
            if (
              (n !== (p || 0) && i && r.emit('beforeSlideChangeStart'),
              r.updateProgress(v),
              (w = n > c ? 'next' : n < c ? 'prev' : 'reset'),
              (u && -v === r.translate) || (!u && v === r.translate))
            )
              return (
                r.updateActiveIndex(n),
                o.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                'slide' !== o.effect && r.setTranslate(v),
                'reset' !== w && (r.transitionStart(i, w), r.transitionEnd(i, w)),
                !1
              );
            if (o.cssMode) {
              const e = r.isHorizontal(),
                i = u ? v : -v;
              if (0 === t) {
                const t = r.virtual && r.params.virtual.enabled;
                t && ((r.wrapperEl.style.scrollSnapType = 'none'), (r._immediateVirtual = !0)),
                  t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
                    ? ((r._cssModeVirtualInitialSet = !0),
                      requestAnimationFrame(() => {
                        m[e ? 'scrollLeft' : 'scrollTop'] = i;
                      }))
                    : (m[e ? 'scrollLeft' : 'scrollTop'] = i),
                  t &&
                    requestAnimationFrame(() => {
                      (r.wrapperEl.style.scrollSnapType = ''), (r._immediateVirtual = !1);
                    });
              } else {
                if (!r.support.smoothScroll)
                  return S({ swiper: r, targetPosition: i, side: e ? 'left' : 'top' }), !0;
                m.scrollTo({ [e ? 'left' : 'top']: i, behavior: 'smooth' });
              }
              return !0;
            }
            return (
              r.setTransition(t),
              r.setTranslate(v),
              r.updateActiveIndex(n),
              r.updateSlidesClasses(),
              r.emit('beforeTransitionStart', t, s),
              r.transitionStart(i, w),
              0 === t
                ? r.transitionEnd(i, w)
                : r.animating ||
                  ((r.animating = !0),
                  r.onSlideToWrapperTransitionEnd ||
                    (r.onSlideToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.wrapperEl.removeEventListener(
                          'transitionend',
                          r.onSlideToWrapperTransitionEnd,
                        ),
                        (r.onSlideToWrapperTransitionEnd = null),
                        delete r.onSlideToWrapperTransitionEnd,
                        r.transitionEnd(i, w));
                    }),
                  r.wrapperEl.addEventListener('transitionend', r.onSlideToWrapperTransitionEnd)),
              !0
            );
          },
          slideToLoop: function (e, t, i, s) {
            void 0 === e && (e = 0),
              void 0 === t && (t = this.params.speed),
              void 0 === i && (i = !0),
              'string' == typeof e && (e = parseInt(e, 10));
            const a = this;
            let r = e;
            return (
              a.params.loop &&
                (a.virtual && a.params.virtual.enabled
                  ? (r += a.virtual.slidesBefore)
                  : (r = a.getSlideIndexByData(r))),
              a.slideTo(r, t, i, s)
            );
          },
          slideNext: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const s = this,
              { enabled: a, params: r, animating: n } = s;
            if (!a) return s;
            let o = r.slidesPerGroup;
            'auto' === r.slidesPerView &&
              1 === r.slidesPerGroup &&
              r.slidesPerGroupAuto &&
              (o = Math.max(s.slidesPerViewDynamic('current', !0), 1));
            const l = s.activeIndex < r.slidesPerGroupSkip ? 1 : o,
              d = s.virtual && r.virtual.enabled;
            if (r.loop) {
              if (n && !d && r.loopPreventsSliding) return !1;
              if (
                (s.loopFix({ direction: 'next' }),
                (s._clientLeft = s.wrapperEl.clientLeft),
                s.activeIndex === s.slides.length - 1 && r.cssMode)
              )
                return (
                  requestAnimationFrame(() => {
                    s.slideTo(s.activeIndex + l, e, t, i);
                  }),
                  !0
                );
            }
            return r.rewind && s.isEnd
              ? s.slideTo(0, e, t, i)
              : s.slideTo(s.activeIndex + l, e, t, i);
          },
          slidePrev: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const s = this,
              {
                params: a,
                snapGrid: r,
                slidesGrid: n,
                rtlTranslate: o,
                enabled: l,
                animating: d,
              } = s;
            if (!l) return s;
            const p = s.virtual && a.virtual.enabled;
            if (a.loop) {
              if (d && !p && a.loopPreventsSliding) return !1;
              s.loopFix({ direction: 'prev' }), (s._clientLeft = s.wrapperEl.clientLeft);
            }
            function c(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const u = c(o ? s.translate : -s.translate),
              m = r.map((e) => c(e));
            let h = r[m.indexOf(u) - 1];
            if (void 0 === h && a.cssMode) {
              let e;
              r.forEach((t, i) => {
                u >= t && (e = i);
              }),
                void 0 !== e && (h = r[e > 0 ? e - 1 : e]);
            }
            let f = 0;
            if (
              (void 0 !== h &&
                ((f = n.indexOf(h)),
                f < 0 && (f = s.activeIndex - 1),
                'auto' === a.slidesPerView &&
                  1 === a.slidesPerGroup &&
                  a.slidesPerGroupAuto &&
                  ((f = f - s.slidesPerViewDynamic('previous', !0) + 1), (f = Math.max(f, 0)))),
              a.rewind && s.isBeginning)
            ) {
              const a =
                s.params.virtual && s.params.virtual.enabled && s.virtual
                  ? s.virtual.slides.length - 1
                  : s.slides.length - 1;
              return s.slideTo(a, e, t, i);
            }
            return a.loop && 0 === s.activeIndex && a.cssMode
              ? (requestAnimationFrame(() => {
                  s.slideTo(f, e, t, i);
                }),
                !0)
              : s.slideTo(f, e, t, i);
          },
          slideReset: function (e, t, i) {
            return (
              void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              this.slideTo(this.activeIndex, e, t, i)
            );
          },
          slideToClosest: function (e, t, i, s) {
            void 0 === e && (e = this.params.speed),
              void 0 === t && (t = !0),
              void 0 === s && (s = 0.5);
            const a = this;
            let r = a.activeIndex;
            const n = Math.min(a.params.slidesPerGroupSkip, r),
              o = n + Math.floor((r - n) / a.params.slidesPerGroup),
              l = a.rtlTranslate ? a.translate : -a.translate;
            if (l >= a.snapGrid[o]) {
              const e = a.snapGrid[o];
              l - e > (a.snapGrid[o + 1] - e) * s && (r += a.params.slidesPerGroup);
            } else {
              const e = a.snapGrid[o - 1];
              l - e <= (a.snapGrid[o] - e) * s && (r -= a.params.slidesPerGroup);
            }
            return (
              (r = Math.max(r, 0)),
              (r = Math.min(r, a.slidesGrid.length - 1)),
              a.slideTo(r, e, t, i)
            );
          },
          slideToClickedSlide: function () {
            const e = this,
              { params: t, slidesEl: i } = e,
              s = 'auto' === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let a,
              r = e.clickedIndex;
            const n = e.isElement ? 'swiper-slide' : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              (a = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
                t.centeredSlides
                  ? r < e.loopedSlides - s / 2 || r > e.slides.length - e.loopedSlides + s / 2
                    ? (e.loopFix(),
                      (r = e.getSlideIndex(T(i, `${n}[data-swiper-slide-index="${a}"]`)[0])),
                      v(() => {
                        e.slideTo(r);
                      }))
                    : e.slideTo(r)
                  : r > e.slides.length - s
                  ? (e.loopFix(),
                    (r = e.getSlideIndex(T(i, `${n}[data-swiper-slide-index="${a}"]`)[0])),
                    v(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r);
            } else e.slideTo(r);
          },
        },
        j = {
          loopCreate: function (e) {
            const t = this,
              { params: i, slidesEl: s } = t;
            !i.loop ||
              (t.virtual && t.params.virtual.enabled) ||
              (T(s, `.${i.slideClass}, swiper-slide`).forEach((e, t) => {
                e.setAttribute('data-swiper-slide-index', t);
              }),
              t.loopFix({ slideRealIndex: e, direction: i.centeredSlides ? void 0 : 'next' }));
          },
          loopFix: function (e) {
            let {
              slideRealIndex: t,
              slideTo: i = !0,
              direction: s,
              setTranslate: a,
              activeSlideIndex: r,
              byController: n,
              byMousewheel: o,
            } = void 0 === e ? {} : e;
            const l = this;
            if (!l.params.loop) return;
            l.emit('beforeLoopFix');
            const { slides: d, allowSlidePrev: p, allowSlideNext: c, slidesEl: u, params: m } = l;
            if (((l.allowSlidePrev = !0), (l.allowSlideNext = !0), l.virtual && m.virtual.enabled))
              return (
                i &&
                  (m.centeredSlides || 0 !== l.snapIndex
                    ? m.centeredSlides && l.snapIndex < m.slidesPerView
                      ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                      : l.snapIndex === l.snapGrid.length - 1 &&
                        l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
                    : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
                (l.allowSlidePrev = p),
                (l.allowSlideNext = c),
                void l.emit('loopFix')
              );
            const h =
              'auto' === m.slidesPerView
                ? l.slidesPerViewDynamic()
                : Math.ceil(parseFloat(m.slidesPerView, 10));
            let f = m.loopedSlides || h;
            f % m.slidesPerGroup != 0 && (f += m.slidesPerGroup - (f % m.slidesPerGroup)),
              (l.loopedSlides = f);
            const g = [],
              v = [];
            let w = l.activeIndex;
            void 0 === r
              ? (r = l.getSlideIndex(
                  l.slides.filter((e) => e.classList.contains(m.slideActiveClass))[0],
                ))
              : (w = r);
            const b = 'next' === s || !s,
              y = 'prev' === s || !s;
            let x = 0,
              E = 0;
            if (r < f) {
              x = Math.max(f - r, m.slidesPerGroup);
              for (let e = 0; e < f - r; e += 1) {
                const t = e - Math.floor(e / d.length) * d.length;
                g.push(d.length - t - 1);
              }
            } else if (r > l.slides.length - 2 * f) {
              E = Math.max(r - (l.slides.length - 2 * f), m.slidesPerGroup);
              for (let e = 0; e < E; e += 1) {
                const t = e - Math.floor(e / d.length) * d.length;
                v.push(t);
              }
            }
            if (
              (y &&
                g.forEach((e) => {
                  (l.slides[e].swiperLoopMoveDOM = !0),
                    u.prepend(l.slides[e]),
                    (l.slides[e].swiperLoopMoveDOM = !1);
                }),
              b &&
                v.forEach((e) => {
                  (l.slides[e].swiperLoopMoveDOM = !0),
                    u.append(l.slides[e]),
                    (l.slides[e].swiperLoopMoveDOM = !1);
                }),
              l.recalcSlides(),
              'auto' === m.slidesPerView && l.updateSlides(),
              m.watchSlidesProgress && l.updateSlidesOffset(),
              i)
            )
              if (g.length > 0 && y)
                if (void 0 === t) {
                  const e = l.slidesGrid[w],
                    t = l.slidesGrid[w + x] - e;
                  o
                    ? l.setTranslate(l.translate - t)
                    : (l.slideTo(w + x, 0, !1, !0),
                      a &&
                        ((l.touches[l.isHorizontal() ? 'startX' : 'startY'] += t),
                        (l.touchEventsData.currentTranslate = l.translate)));
                } else
                  a &&
                    (l.slideToLoop(t, 0, !1, !0),
                    (l.touchEventsData.currentTranslate = l.translate));
              else if (v.length > 0 && b)
                if (void 0 === t) {
                  const e = l.slidesGrid[w],
                    t = l.slidesGrid[w - E] - e;
                  o
                    ? l.setTranslate(l.translate - t)
                    : (l.slideTo(w - E, 0, !1, !0),
                      a &&
                        ((l.touches[l.isHorizontal() ? 'startX' : 'startY'] += t),
                        (l.touchEventsData.currentTranslate = l.translate)));
                } else l.slideToLoop(t, 0, !1, !0);
            if (
              ((l.allowSlidePrev = p),
              (l.allowSlideNext = c),
              l.controller && l.controller.control && !n)
            ) {
              const e = {
                slideRealIndex: t,
                direction: s,
                setTranslate: a,
                activeSlideIndex: r,
                byController: !0,
              };
              Array.isArray(l.controller.control)
                ? l.controller.control.forEach((t) => {
                    !t.destroyed &&
                      t.params.loop &&
                      t.loopFix({ ...e, slideTo: t.params.slidesPerView === m.slidesPerView && i });
                  })
                : l.controller.control instanceof l.constructor &&
                  l.controller.control.params.loop &&
                  l.controller.control.loopFix({
                    ...e,
                    slideTo: l.controller.control.params.slidesPerView === m.slidesPerView && i,
                  });
            }
            l.emit('loopFix');
          },
          loopDestroy: function () {
            const e = this,
              { params: t, slidesEl: i } = e;
            if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
            e.recalcSlides();
            const s = [];
            e.slides.forEach((e) => {
              const t =
                void 0 === e.swiperSlideIndex
                  ? 1 * e.getAttribute('data-swiper-slide-index')
                  : e.swiperSlideIndex;
              s[t] = e;
            }),
              e.slides.forEach((e) => {
                e.removeAttribute('data-swiper-slide-index');
              }),
              s.forEach((e) => {
                i.append(e);
              }),
              e.recalcSlides(),
              e.slideTo(e.realIndex, 0);
          },
        };
      function V(e) {
        const t = this,
          i = h(),
          s = g(),
          a = t.touchEventsData;
        a.evCache.push(e);
        const { params: r, touches: n, enabled: o } = t;
        if (!o) return;
        if (!r.simulateTouch && 'mouse' === e.pointerType) return;
        if (t.animating && r.preventInteractionOnTransition) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let d = l.target;
        if ('wrapper' === r.touchEventsTarget && !t.wrapperEl.contains(d)) return;
        if ('which' in l && 3 === l.which) return;
        if ('button' in l && l.button > 0) return;
        if (a.isTouched && a.isMoved) return;
        const p = !!r.noSwipingClass && '' !== r.noSwipingClass,
          c = e.composedPath ? e.composedPath() : e.path;
        p && l.target && l.target.shadowRoot && c && (d = c[0]);
        const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
          m = !(!l.target || !l.target.shadowRoot);
        if (
          r.noSwiping &&
          (m
            ? (function (e, t) {
                return (
                  void 0 === t && (t = this),
                  (function t(i) {
                    if (!i || i === h() || i === g()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    const s = i.closest(e);
                    return s || i.getRootNode ? s || t(i.getRootNode().host) : null;
                  })(t)
                );
              })(u, d)
            : d.closest(u))
        )
          return void (t.allowClick = !0);
        if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
        (n.currentX = l.pageX), (n.currentY = l.pageY);
        const f = n.currentX,
          v = n.currentY,
          b = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (b && (f <= y || f >= s.innerWidth - y)) {
          if ('prevent' !== b) return;
          e.preventDefault();
        }
        Object.assign(a, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
          (n.startX = f),
          (n.startY = v),
          (a.touchStartTime = w()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          r.threshold > 0 && (a.allowThresholdMove = !1);
        let x = !0;
        d.matches(a.focusableElements) && ((x = !1), 'SELECT' === d.nodeName && (a.isTouched = !1)),
          i.activeElement &&
            i.activeElement.matches(a.focusableElements) &&
            i.activeElement !== d &&
            i.activeElement.blur();
        const E = x && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !E) || d.isContentEditable || l.preventDefault(),
          r.freeMode &&
            r.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !r.cssMode &&
            t.freeMode.onTouchStart(),
          t.emit('touchStart', l);
      }
      function _(e) {
        const t = h(),
          i = this,
          s = i.touchEventsData,
          { params: a, touches: r, rtlTranslate: n, enabled: o } = i;
        if (!o) return;
        if (!a.simulateTouch && 'mouse' === e.pointerType) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !s.isTouched))
          return void (s.startMoving && s.isScrolling && i.emit('touchMoveOpposite', l));
        const d = s.evCache.findIndex((e) => e.pointerId === l.pointerId);
        d >= 0 && (s.evCache[d] = l);
        const p = s.evCache.length > 1 ? s.evCache[0] : l,
          c = p.pageX,
          u = p.pageY;
        if (l.preventedByNestedSwiper) return (r.startX = c), void (r.startY = u);
        if (!i.allowTouchMove)
          return (
            l.target.matches(s.focusableElements) || (i.allowClick = !1),
            void (
              s.isTouched &&
              (Object.assign(r, {
                startX: c,
                startY: u,
                prevX: i.touches.currentX,
                prevY: i.touches.currentY,
                currentX: c,
                currentY: u,
              }),
              (s.touchStartTime = w()))
            )
          );
        if (a.touchReleaseOnEdges && !a.loop)
          if (i.isVertical()) {
            if (
              (u < r.startY && i.translate <= i.maxTranslate()) ||
              (u > r.startY && i.translate >= i.minTranslate())
            )
              return (s.isTouched = !1), void (s.isMoved = !1);
          } else if (
            (c < r.startX && i.translate <= i.maxTranslate()) ||
            (c > r.startX && i.translate >= i.minTranslate())
          )
            return;
        if (
          t.activeElement &&
          l.target === t.activeElement &&
          l.target.matches(s.focusableElements)
        )
          return (s.isMoved = !0), void (i.allowClick = !1);
        if (
          (s.allowTouchCallbacks && i.emit('touchMove', l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (r.currentX = c), (r.currentY = u);
        const m = r.currentX - r.startX,
          f = r.currentY - r.startY;
        if (i.params.threshold && Math.sqrt(m ** 2 + f ** 2) < i.params.threshold) return;
        if (void 0 === s.isScrolling) {
          let e;
          (i.isHorizontal() && r.currentY === r.startY) ||
          (i.isVertical() && r.currentX === r.startX)
            ? (s.isScrolling = !1)
            : m * m + f * f >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(f), Math.abs(m))) / Math.PI),
              (s.isScrolling = i.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle));
        }
        if (
          (s.isScrolling && i.emit('touchMoveOpposite', l),
          void 0 === s.startMoving &&
            ((r.currentX === r.startX && r.currentY === r.startY) || (s.startMoving = !0)),
          s.isScrolling ||
            (i.zoom && i.params.zoom && i.params.zoom.enabled && s.evCache.length > 1))
        )
          return void (s.isTouched = !1);
        if (!s.startMoving) return;
        (i.allowClick = !1),
          !a.cssMode && l.cancelable && l.preventDefault(),
          a.touchMoveStopPropagation && !a.nested && l.stopPropagation();
        let g = i.isHorizontal() ? m : f,
          v = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
        a.oneWayMovement && ((g = Math.abs(g) * (n ? 1 : -1)), (v = Math.abs(v) * (n ? 1 : -1))),
          (r.diff = g),
          (g *= a.touchRatio),
          n && ((g = -g), (v = -v));
        const b = i.touchesDirection;
        (i.swipeDirection = g > 0 ? 'prev' : 'next'),
          (i.touchesDirection = v > 0 ? 'prev' : 'next');
        const y = i.params.loop && !a.cssMode,
          x =
            ('next' === i.swipeDirection && i.allowSlideNext) ||
            ('prev' === i.swipeDirection && i.allowSlidePrev);
        if (!s.isMoved) {
          if (
            (y && x && i.loopFix({ direction: i.swipeDirection }),
            (s.startTranslate = i.getTranslate()),
            i.setTransition(0),
            i.animating)
          ) {
            const e = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
            i.wrapperEl.dispatchEvent(e);
          }
          (s.allowMomentumBounce = !1),
            !a.grabCursor ||
              (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
              i.setGrabCursor(!0),
            i.emit('sliderFirstMove', l);
        }
        let E;
        s.isMoved &&
          b !== i.touchesDirection &&
          y &&
          x &&
          Math.abs(g) >= 1 &&
          (i.loopFix({ direction: i.swipeDirection, setTranslate: !0 }), (E = !0)),
          i.emit('sliderMove', l),
          (s.isMoved = !0),
          (s.currentTranslate = g + s.startTranslate);
        let S = !0,
          A = a.resistanceRatio;
        if (
          (a.touchReleaseOnEdges && (A = 0),
          g > 0
            ? (y &&
                x &&
                !E &&
                s.currentTranslate >
                  (a.centeredSlides ? i.minTranslate() - i.size / 2 : i.minTranslate()) &&
                i.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
              s.currentTranslate > i.minTranslate() &&
                ((S = !1),
                a.resistance &&
                  (s.currentTranslate =
                    i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + g) ** A)))
            : g < 0 &&
              (y &&
                x &&
                !E &&
                s.currentTranslate <
                  (a.centeredSlides ? i.maxTranslate() + i.size / 2 : i.maxTranslate()) &&
                i.loopFix({
                  direction: 'next',
                  setTranslate: !0,
                  activeSlideIndex:
                    i.slides.length -
                    ('auto' === a.slidesPerView
                      ? i.slidesPerViewDynamic()
                      : Math.ceil(parseFloat(a.slidesPerView, 10))),
                }),
              s.currentTranslate < i.maxTranslate() &&
                ((S = !1),
                a.resistance &&
                  (s.currentTranslate =
                    i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - g) ** A))),
          S && (l.preventedByNestedSwiper = !0),
          !i.allowSlideNext &&
            'next' === i.swipeDirection &&
            s.currentTranslate < s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          !i.allowSlidePrev &&
            'prev' === i.swipeDirection &&
            s.currentTranslate > s.startTranslate &&
            (s.currentTranslate = s.startTranslate),
          i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate),
          a.threshold > 0)
        ) {
          if (!(Math.abs(g) > a.threshold || s.allowThresholdMove))
            return void (s.currentTranslate = s.startTranslate);
          if (!s.allowThresholdMove)
            return (
              (s.allowThresholdMove = !0),
              (r.startX = r.currentX),
              (r.startY = r.currentY),
              (s.currentTranslate = s.startTranslate),
              void (r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
            );
        }
        a.followFinger &&
          !a.cssMode &&
          (((a.freeMode && a.freeMode.enabled && i.freeMode) || a.watchSlidesProgress) &&
            (i.updateActiveIndex(), i.updateSlidesClasses()),
          a.freeMode && a.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
          i.updateProgress(s.currentTranslate),
          i.setTranslate(s.currentTranslate));
      }
      function W(e) {
        const t = this,
          i = t.touchEventsData,
          s = i.evCache.findIndex((t) => t.pointerId === e.pointerId);
        if (
          (s >= 0 && i.evCache.splice(s, 1),
          ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type) &&
            (!['pointercancel', 'contextmenu'].includes(e.type) ||
              (!t.browser.isSafari && !t.browser.isWebView)))
        )
          return;
        const { params: a, touches: r, rtlTranslate: n, slidesGrid: o, enabled: l } = t;
        if (!l) return;
        if (!a.simulateTouch && 'mouse' === e.pointerType) return;
        let d = e;
        if (
          (d.originalEvent && (d = d.originalEvent),
          i.allowTouchCallbacks && t.emit('touchEnd', d),
          (i.allowTouchCallbacks = !1),
          !i.isTouched)
        )
          return (
            i.isMoved && a.grabCursor && t.setGrabCursor(!1),
            (i.isMoved = !1),
            void (i.startMoving = !1)
          );
        a.grabCursor &&
          i.isMoved &&
          i.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const p = w(),
          c = p - i.touchStartTime;
        if (t.allowClick) {
          const e = d.path || (d.composedPath && d.composedPath());
          t.updateClickedSlide((e && e[0]) || d.target, e),
            t.emit('tap click', d),
            c < 300 && p - i.lastClickTime < 300 && t.emit('doubleTap doubleClick', d);
        }
        if (
          ((i.lastClickTime = w()),
          v(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !i.isTouched ||
            !i.isMoved ||
            !t.swipeDirection ||
            0 === r.diff ||
            i.currentTranslate === i.startTranslate)
        )
          return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
        let u;
        if (
          ((i.isTouched = !1),
          (i.isMoved = !1),
          (i.startMoving = !1),
          (u = a.followFinger ? (n ? t.translate : -t.translate) : -i.currentTranslate),
          a.cssMode)
        )
          return;
        if (a.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: u });
        let m = 0,
          h = t.slidesSizesGrid[0];
        for (let e = 0; e < o.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
          const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
          void 0 !== o[e + t]
            ? u >= o[e] && u < o[e + t] && ((m = e), (h = o[e + t] - o[e]))
            : u >= o[e] && ((m = e), (h = o[o.length - 1] - o[o.length - 2]));
        }
        let f = null,
          g = null;
        a.rewind &&
          (t.isBeginning
            ? (g =
                a.virtual && a.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (f = 0));
        const b = (u - o[m]) / h,
          y = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
          if (!a.longSwipes) return void t.slideTo(t.activeIndex);
          'next' === t.swipeDirection &&
            (b >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? f : m + y) : t.slideTo(m)),
            'prev' === t.swipeDirection &&
              (b > 1 - a.longSwipesRatio
                ? t.slideTo(m + y)
                : null !== g && b < 0 && Math.abs(b) > a.longSwipesRatio
                ? t.slideTo(g)
                : t.slideTo(m));
        } else {
          if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || (d.target !== t.navigation.nextEl && d.target !== t.navigation.prevEl)
            ? ('next' === t.swipeDirection && t.slideTo(null !== f ? f : m + y),
              'prev' === t.swipeDirection && t.slideTo(null !== g ? g : m))
            : d.target === t.navigation.nextEl
            ? t.slideTo(m + y)
            : t.slideTo(m);
        }
      }
      function U() {
        const e = this,
          { params: t, el: i } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: s, allowSlidePrev: a, snapGrid: r } = e,
          n = e.virtual && e.params.virtual.enabled;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses();
        const o = n && t.loop;
        !('auto' === t.slidesPerView || t.slidesPerView > 1) ||
        !e.isEnd ||
        e.isBeginning ||
        e.params.centeredSlides ||
        o
          ? e.params.loop && !n
            ? e.slideToLoop(e.realIndex, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0)
          : e.slideTo(e.slides.length - 1, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
              e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
            }, 500))),
          (e.allowSlidePrev = a),
          (e.allowSlideNext = s),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
      function Z(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function Q() {
        const e = this,
          { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
        if (!s) return;
        let a;
        (e.previousTranslate = e.translate),
          e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        (a = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
          a !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
          e.emit('setTranslate', e.translate, !1);
      }
      function K(e) {
        const t = this;
        Y(t, e.target),
          t.params.cssMode ||
            ('auto' !== t.params.slidesPerView && !t.params.autoHeight) ||
            t.update();
      }
      let J = !1;
      function ee() {}
      const te = (e, t) => {
          const i = h(),
            { params: s, el: a, wrapperEl: r, device: n } = e,
            o = !!s.nested,
            l = 'on' === t ? 'addEventListener' : 'removeEventListener',
            d = t;
          a[l]('pointerdown', e.onTouchStart, { passive: !1 }),
            i[l]('pointermove', e.onTouchMove, { passive: !1, capture: o }),
            i[l]('pointerup', e.onTouchEnd, { passive: !0 }),
            i[l]('pointercancel', e.onTouchEnd, { passive: !0 }),
            i[l]('pointerout', e.onTouchEnd, { passive: !0 }),
            i[l]('pointerleave', e.onTouchEnd, { passive: !0 }),
            i[l]('contextmenu', e.onTouchEnd, { passive: !0 }),
            (s.preventClicks || s.preventClicksPropagation) && a[l]('click', e.onClick, !0),
            s.cssMode && r[l]('scroll', e.onScroll),
            s.updateOnWindowResize
              ? e[d](
                  n.ios || n.android
                    ? 'resize orientationchange observerUpdate'
                    : 'resize observerUpdate',
                  U,
                  !0,
                )
              : e[d]('observerUpdate', U, !0),
            a[l]('load', e.onLoad, { capture: !0 });
        },
        ie = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var se = {
          setBreakpoint: function () {
            const e = this,
              { realIndex: t, initialized: i, params: s, el: a } = e,
              r = s.breakpoints;
            if (!r || (r && 0 === Object.keys(r).length)) return;
            const n = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
            if (!n || e.currentBreakpoint === n) return;
            const o = (n in r ? r[n] : void 0) || e.originalParams,
              l = ie(e, s),
              d = ie(e, o),
              p = s.enabled;
            l && !d
              ? (a.classList.remove(
                  `${s.containerModifierClass}grid`,
                  `${s.containerModifierClass}grid-column`,
                ),
                e.emitContainerClasses())
              : !l &&
                d &&
                (a.classList.add(`${s.containerModifierClass}grid`),
                ((o.grid.fill && 'column' === o.grid.fill) ||
                  (!o.grid.fill && 'column' === s.grid.fill)) &&
                  a.classList.add(`${s.containerModifierClass}grid-column`),
                e.emitContainerClasses()),
              ['navigation', 'pagination', 'scrollbar'].forEach((t) => {
                if (void 0 === o[t]) return;
                const i = s[t] && s[t].enabled,
                  a = o[t] && o[t].enabled;
                i && !a && e[t].disable(), !i && a && e[t].enable();
              });
            const c = o.direction && o.direction !== s.direction,
              u = s.loop && (o.slidesPerView !== s.slidesPerView || c),
              m = s.loop;
            c && i && e.changeDirection(), x(e.params, o);
            const h = e.params.enabled,
              f = e.params.loop;
            Object.assign(e, {
              allowTouchMove: e.params.allowTouchMove,
              allowSlideNext: e.params.allowSlideNext,
              allowSlidePrev: e.params.allowSlidePrev,
            }),
              p && !h ? e.disable() : !p && h && e.enable(),
              (e.currentBreakpoint = n),
              e.emit('_beforeBreakpoint', o),
              i &&
                (u
                  ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                  : !m && f
                  ? (e.loopCreate(t), e.updateSlides())
                  : m && !f && e.loopDestroy()),
              e.emit('breakpoint', o);
          },
          getBreakpoint: function (e, t, i) {
            if ((void 0 === t && (t = 'window'), !e || ('container' === t && !i))) return;
            let s = !1;
            const a = g(),
              r = 'window' === t ? a.innerHeight : i.clientHeight,
              n = Object.keys(e).map((e) => {
                if ('string' == typeof e && 0 === e.indexOf('@')) {
                  const t = parseFloat(e.substr(1));
                  return { value: r * t, point: e };
                }
                return { value: e, point: e };
              });
            n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
            for (let e = 0; e < n.length; e += 1) {
              const { point: r, value: o } = n[e];
              'window' === t
                ? a.matchMedia(`(min-width: ${o}px)`).matches && (s = r)
                : o <= i.clientWidth && (s = r);
            }
            return s || 'max';
          },
        },
        ae = {
          init: !0,
          direction: 'horizontal',
          oneWayMovement: !1,
          touchEventsTarget: 'wrapper',
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          enabled: !0,
          focusableElements: 'input, select, option, textarea, button, video, label',
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: 'slide',
          breakpoints: void 0,
          breakpointsBase: 'window',
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 5,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          loop: !1,
          loopedSlides: null,
          loopPreventsSliding: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: 'swiper-no-swiping',
          noSwipingSelector: null,
          passiveListeners: !0,
          maxBackfaceHiddenSlides: 10,
          containerModifierClass: 'swiper-',
          slideClass: 'swiper-slide',
          slideActiveClass: 'swiper-slide-active',
          slideVisibleClass: 'swiper-slide-visible',
          slideNextClass: 'swiper-slide-next',
          slidePrevClass: 'swiper-slide-prev',
          wrapperClass: 'swiper-wrapper',
          lazyPreloaderClass: 'swiper-lazy-preloader',
          lazyPreloadPrevNext: 0,
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
      function re(e, t) {
        return function (i) {
          void 0 === i && (i = {});
          const s = Object.keys(i)[0],
            a = i[s];
          'object' == typeof a && null !== a
            ? (!0 === e[s] && (e[s] = { enabled: !0 }),
              'navigation' === s &&
                e[s] &&
                e[s].enabled &&
                !e[s].prevEl &&
                !e[s].nextEl &&
                (e[s].auto = !0),
              ['pagination', 'scrollbar'].indexOf(s) >= 0 &&
                e[s] &&
                e[s].enabled &&
                !e[s].el &&
                (e[s].auto = !0),
              s in e && 'enabled' in a
                ? ('object' != typeof e[s] || 'enabled' in e[s] || (e[s].enabled = !0),
                  e[s] || (e[s] = { enabled: !1 }),
                  x(t, i))
                : x(t, i))
            : x(t, i);
        };
      }
      const ne = {
          eventsEmitter: G,
          update: H,
          translate: R,
          transition: {
            setTransition: function (e, t) {
              const i = this;
              i.params.cssMode ||
                ((i.wrapperEl.style.transitionDuration = `${e}ms`),
                (i.wrapperEl.style.transitionDelay = 0 === e ? '0ms' : '')),
                i.emit('setTransition', e, t);
            },
            transitionStart: function (e, t) {
              void 0 === e && (e = !0);
              const i = this,
                { params: s } = i;
              s.cssMode ||
                (s.autoHeight && i.updateAutoHeight(),
                X({ swiper: i, runCallbacks: e, direction: t, step: 'Start' }));
            },
            transitionEnd: function (e, t) {
              void 0 === e && (e = !0);
              const i = this,
                { params: s } = i;
              (i.animating = !1),
                s.cssMode ||
                  (i.setTransition(0),
                  X({ swiper: i, runCallbacks: e, direction: t, step: 'End' }));
            },
          },
          slide: q,
          loop: j,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const i = 'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0),
                (i.style.cursor = 'move'),
                (i.style.cursor = e ? 'grabbing' : 'grab'),
                t.isElement &&
                  requestAnimationFrame(() => {
                    t.__preventObserver__ = !1;
                  });
            },
            unsetGrabCursor: function () {
              const e = this;
              (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e.isElement && (e.__preventObserver__ = !0),
                (e['container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'].style.cursor =
                  ''),
                e.isElement &&
                  requestAnimationFrame(() => {
                    e.__preventObserver__ = !1;
                  }));
            },
          },
          events: {
            attachEvents: function () {
              const e = this,
                t = h(),
                { params: i } = e;
              (e.onTouchStart = V.bind(e)),
                (e.onTouchMove = _.bind(e)),
                (e.onTouchEnd = W.bind(e)),
                i.cssMode && (e.onScroll = Q.bind(e)),
                (e.onClick = Z.bind(e)),
                (e.onLoad = K.bind(e)),
                J || (t.addEventListener('touchstart', ee), (J = !0)),
                te(e, 'on');
            },
            detachEvents: function () {
              te(this, 'off');
            },
          },
          breakpoints: se,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: i } = e,
                { slidesOffsetBefore: s } = i;
              if (s) {
                const t = e.slides.length - 1,
                  i = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * s;
                e.isLocked = e.size > i;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
            },
          },
          classes: {
            addClasses: function () {
              const e = this,
                { classNames: t, params: i, rtl: s, el: a, device: r } = e,
                n = (function (e, t) {
                  const i = [];
                  return (
                    e.forEach((e) => {
                      'object' == typeof e
                        ? Object.keys(e).forEach((s) => {
                            e[s] && i.push(t + s);
                          })
                        : 'string' == typeof e && i.push(t + e);
                    }),
                    i
                  );
                })(
                  [
                    'initialized',
                    i.direction,
                    { 'free-mode': e.params.freeMode && i.freeMode.enabled },
                    { autoheight: i.autoHeight },
                    { rtl: s },
                    { grid: i.grid && i.grid.rows > 1 },
                    { 'grid-column': i.grid && i.grid.rows > 1 && 'column' === i.grid.fill },
                    { android: r.android },
                    { ios: r.ios },
                    { 'css-mode': i.cssMode },
                    { centered: i.cssMode && i.centeredSlides },
                    { 'watch-progress': i.watchSlidesProgress },
                  ],
                  i.containerModifierClass,
                );
              t.push(...n), a.classList.add(...t), e.emitContainerClasses();
            },
            removeClasses: function () {
              const { el: e, classNames: t } = this;
              e.classList.remove(...t), this.emitContainerClasses();
            },
          },
        },
        oe = {};
      class le {
        constructor() {
          let e, t;
          for (var i = arguments.length, s = new Array(i), a = 0; a < i; a++) s[a] = arguments[a];
          1 === s.length &&
          s[0].constructor &&
          'Object' === Object.prototype.toString.call(s[0]).slice(8, -1)
            ? (t = s[0])
            : ([e, t] = s),
            t || (t = {}),
            (t = x({}, t)),
            e && !t.el && (t.el = e);
          const r = h();
          if (t.el && 'string' == typeof t.el && r.querySelectorAll(t.el).length > 1) {
            const e = [];
            return (
              r.querySelectorAll(t.el).forEach((i) => {
                const s = x({}, t, { el: i });
                e.push(new le(s));
              }),
              e
            );
          }
          const n = this;
          var o;
          (n.__swiper__ = !0),
            (n.support = B()),
            (n.device =
              (void 0 === (o = { userAgent: t.userAgent }) && (o = {}),
              $ ||
                ($ = (function (e) {
                  let { userAgent: t } = void 0 === e ? {} : e;
                  const i = B(),
                    s = g(),
                    a = s.navigator.platform,
                    r = t || s.navigator.userAgent,
                    n = { ios: !1, android: !1 },
                    o = s.screen.width,
                    l = s.screen.height,
                    d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
                  let p = r.match(/(iPad).*OS\s([\d_]+)/);
                  const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                    u = !p && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                    m = 'Win32' === a;
                  let h = 'MacIntel' === a;
                  return (
                    !p &&
                      h &&
                      i.touch &&
                      [
                        '1024x1366',
                        '1366x1024',
                        '834x1194',
                        '1194x834',
                        '834x1112',
                        '1112x834',
                        '768x1024',
                        '1024x768',
                        '820x1180',
                        '1180x820',
                        '810x1080',
                        '1080x810',
                      ].indexOf(`${o}x${l}`) >= 0 &&
                      ((p = r.match(/(Version)\/([\d.]+)/)), p || (p = [0, 1, '13_0_0']), (h = !1)),
                    d && !m && ((n.os = 'android'), (n.android = !0)),
                    (p || u || c) && ((n.os = 'ios'), (n.ios = !0)),
                    n
                  );
                })(o)),
              $)),
            (n.browser =
              (D ||
                (D = (function () {
                  const e = g();
                  let t = !1;
                  function i() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return (
                      t.indexOf('safari') >= 0 &&
                      t.indexOf('chrome') < 0 &&
                      t.indexOf('android') < 0
                    );
                  }
                  if (i()) {
                    const i = String(e.navigator.userAgent);
                    if (i.includes('Version/')) {
                      const [e, s] = i
                        .split('Version/')[1]
                        .split(' ')[0]
                        .split('.')
                        .map((e) => Number(e));
                      t = e < 16 || (16 === e && s < 2);
                    }
                  }
                  return {
                    isSafari: t || i(),
                    needPerspectiveFix: t,
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                      e.navigator.userAgent,
                    ),
                  };
                })()),
              D)),
            (n.eventsListeners = {}),
            (n.eventsAnyListeners = []),
            (n.modules = [...n.__modules__]),
            t.modules && Array.isArray(t.modules) && n.modules.push(...t.modules);
          const l = {};
          n.modules.forEach((e) => {
            e({
              params: t,
              swiper: n,
              extendParams: re(t, l),
              on: n.on.bind(n),
              once: n.once.bind(n),
              off: n.off.bind(n),
              emit: n.emit.bind(n),
            });
          });
          const d = x({}, ae, l);
          return (
            (n.params = x({}, d, oe, t)),
            (n.originalParams = x({}, n.params)),
            (n.passedParams = x({}, t)),
            n.params &&
              n.params.on &&
              Object.keys(n.params.on).forEach((e) => {
                n.on(e, n.params.on[e]);
              }),
            n.params && n.params.onAny && n.onAny(n.params.onAny),
            Object.assign(n, {
              enabled: n.params.enabled,
              el: e,
              classNames: [],
              slides: [],
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal() {
                return 'horizontal' === n.params.direction;
              },
              isVertical() {
                return 'vertical' === n.params.direction;
              },
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
              },
              allowSlideNext: n.params.allowSlideNext,
              allowSlidePrev: n.params.allowSlidePrev,
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: n.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                evCache: [],
              },
              allowClick: !0,
              allowTouchMove: n.params.allowTouchMove,
              touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            n.emit('_swiper'),
            n.params.init && n.init(),
            n
          );
        }
        getSlideIndex(e) {
          const { slidesEl: t, params: i } = this,
            s = L(T(t, `.${i.slideClass}, swiper-slide`)[0]);
          return L(e) - s;
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(
            this.slides.filter((t) => 1 * t.getAttribute('data-swiper-slide-index') === e)[0],
          );
        }
        recalcSlides() {
          const { slidesEl: e, params: t } = this;
          this.slides = T(e, `.${t.slideClass}, swiper-slide`);
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'));
        }
        setProgress(e, t) {
          const i = this;
          e = Math.min(Math.max(e, 0), 1);
          const s = i.minTranslate(),
            a = (i.maxTranslate() - s) * e + s;
          i.translateTo(a, void 0 === t ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(' ')
            .filter(
              (t) => 0 === t.indexOf('swiper') || 0 === t.indexOf(e.params.containerModifierClass),
            );
          e.emit('_containerClasses', t.join(' '));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ''
            : e.className
                .split(' ')
                .filter(
                  (e) => 0 === e.indexOf('swiper-slide') || 0 === e.indexOf(t.params.slideClass),
                )
                .join(' ');
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((i) => {
            const s = e.getSlideClasses(i);
            t.push({ slideEl: i, classNames: s }), e.emit('_slideClass', i, s);
          }),
            e.emit('_slideClasses', t);
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = 'current'), void 0 === t && (t = !1);
          const {
            params: i,
            slides: s,
            slidesGrid: a,
            slidesSizesGrid: r,
            size: n,
            activeIndex: o,
          } = this;
          let l = 1;
          if ('number' == typeof i.slidesPerView) return i.slidesPerView;
          if (i.centeredSlides) {
            let e,
              t = s[o] ? s[o].swiperSlideSize : 0;
            for (let i = o + 1; i < s.length; i += 1)
              s[i] && !e && ((t += s[i].swiperSlideSize), (l += 1), t > n && (e = !0));
            for (let i = o - 1; i >= 0; i -= 1)
              s[i] && !e && ((t += s[i].swiperSlideSize), (l += 1), t > n && (e = !0));
          } else if ('current' === e)
            for (let e = o + 1; e < s.length; e += 1)
              (t ? a[e] + r[e] - a[o] < n : a[e] - a[o] < n) && (l += 1);
          else for (let e = o - 1; e >= 0; e -= 1) a[o] - a[e] < n && (l += 1);
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: i } = e;
          function s() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let a;
          if (
            (i.breakpoints && e.setBreakpoint(),
            [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
              t.complete && Y(e, t);
            }),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            i.freeMode && i.freeMode.enabled && !i.cssMode)
          )
            s(), i.autoHeight && e.updateAutoHeight();
          else {
            if (
              ('auto' === i.slidesPerView || i.slidesPerView > 1) &&
              e.isEnd &&
              !i.centeredSlides
            ) {
              const t = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
              a = e.slideTo(t.length - 1, 0, !1, !0);
            } else a = e.slideTo(e.activeIndex, 0, !1, !0);
            a || s();
          }
          i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit('update');
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const i = this,
            s = i.params.direction;
          return (
            e || (e = 'horizontal' === s ? 'vertical' : 'horizontal'),
            e === s ||
              ('horizontal' !== e && 'vertical' !== e) ||
              (i.el.classList.remove(`${i.params.containerModifierClass}${s}`),
              i.el.classList.add(`${i.params.containerModifierClass}${e}`),
              i.emitContainerClasses(),
              (i.params.direction = e),
              i.slides.forEach((t) => {
                'vertical' === e ? (t.style.width = '') : (t.style.height = '');
              }),
              i.emit('changeDirection'),
              t && i.update()),
            i
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && 'rtl' === e) ||
            (!t.rtl && 'ltr' === e) ||
            ((t.rtl = 'rtl' === e),
            (t.rtlTranslate = 'horizontal' === t.params.direction && t.rtl),
            t.rtl
              ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'rtl'))
              : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = 'ltr')),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let i = e || t.params.el;
          if (('string' == typeof i && (i = document.querySelector(i)), !i)) return !1;
          (i.swiper = t),
            i.parentNode &&
              i.parentNode.host &&
              'SWIPER-CONTAINER' === i.parentNode.host.nodeName &&
              (t.isElement = !0);
          const s = () => `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`;
          let a =
            i && i.shadowRoot && i.shadowRoot.querySelector
              ? i.shadowRoot.querySelector(s())
              : T(i, s())[0];
          return (
            !a &&
              t.params.createElements &&
              ((a = M('div', t.params.wrapperClass)),
              i.append(a),
              T(i, `.${t.params.slideClass}`).forEach((e) => {
                a.append(e);
              })),
            Object.assign(t, {
              el: i,
              wrapperEl: a,
              slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : a,
              hostEl: t.isElement ? i.parentNode.host : i,
              mounted: !0,
              rtl: 'rtl' === i.dir.toLowerCase() || 'rtl' === P(i, 'direction'),
              rtlTranslate:
                'horizontal' === t.params.direction &&
                ('rtl' === i.dir.toLowerCase() || 'rtl' === P(i, 'direction')),
              wrongRTL: '-webkit-box' === P(a, 'display'),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit('beforeInit'),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.loop && t.virtual && t.params.virtual.enabled
              ? t.slideTo(
                  t.params.initialSlide + t.virtual.slidesBefore,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0,
                )
              : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
            t.params.loop && t.loopCreate(),
            t.attachEvents();
          const i = [...t.el.querySelectorAll('[loading="lazy"]')];
          return (
            t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach((e) => {
              e.complete
                ? Y(t, e)
                : e.addEventListener('load', (e) => {
                    Y(t, e.target);
                  });
            }),
            F(t),
            (t.initialized = !0),
            F(t),
            t.emit('init'),
            t.emit('afterInit'),
            t
          );
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const i = this,
            { params: s, el: a, wrapperEl: r, slides: n } = i;
          return (
            void 0 === i.params ||
              i.destroyed ||
              (i.emit('beforeDestroy'),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                a.removeAttribute('style'),
                r.removeAttribute('style'),
                n &&
                  n.length &&
                  n.forEach((e) => {
                    e.classList.remove(
                      s.slideVisibleClass,
                      s.slideActiveClass,
                      s.slideNextClass,
                      s.slidePrevClass,
                    ),
                      e.removeAttribute('style'),
                      e.removeAttribute('data-swiper-slide-index');
                  })),
              i.emit('destroy'),
              Object.keys(i.eventsListeners).forEach((e) => {
                i.off(e);
              }),
              !1 !== e &&
                ((i.el.swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(i)),
              (i.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          x(oe, e);
        }
        static get extendedDefaults() {
          return oe;
        }
        static get defaults() {
          return ae;
        }
        static installModule(e) {
          le.prototype.__modules__ || (le.prototype.__modules__ = []);
          const t = le.prototype.__modules__;
          'function' == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => le.installModule(e)), le)
            : (le.installModule(e), le);
        }
      }
      function de(e, t, i, s) {
        return (
          e.params.createElements &&
            Object.keys(s).forEach((a) => {
              if (!i[a] && !0 === i.auto) {
                let r = T(e.el, `.${s[a]}`)[0];
                r || ((r = M('div', s[a])), (r.className = s[a]), e.el.append(r)),
                  (i[a] = r),
                  (t[a] = r);
              }
            }),
          i
        );
      }
      function pe(e) {
        return (
          void 0 === e && (e = ''),
          `.${e
            .trim()
            .replace(/([\.:!+\/])/g, '\\$1')
            .replace(/ /g, '.')}`
        );
      }
      function ce(e) {
        const t = this,
          { params: i, slidesEl: s } = t;
        i.loop && t.loopDestroy();
        const a = (e) => {
          if ('string' == typeof e) {
            const t = document.createElement('div');
            (t.innerHTML = e), s.append(t.children[0]), (t.innerHTML = '');
          } else s.append(e);
        };
        if ('object' == typeof e && 'length' in e)
          for (let t = 0; t < e.length; t += 1) e[t] && a(e[t]);
        else a(e);
        t.recalcSlides(), i.loop && t.loopCreate(), (i.observer && !t.isElement) || t.update();
      }
      function ue(e) {
        const t = this,
          { params: i, activeIndex: s, slidesEl: a } = t;
        i.loop && t.loopDestroy();
        let r = s + 1;
        const n = (e) => {
          if ('string' == typeof e) {
            const t = document.createElement('div');
            (t.innerHTML = e), a.prepend(t.children[0]), (t.innerHTML = '');
          } else a.prepend(e);
        };
        if ('object' == typeof e && 'length' in e) {
          for (let t = 0; t < e.length; t += 1) e[t] && n(e[t]);
          r = s + e.length;
        } else n(e);
        t.recalcSlides(),
          i.loop && t.loopCreate(),
          (i.observer && !t.isElement) || t.update(),
          t.slideTo(r, 0, !1);
      }
      function me(e, t) {
        const i = this,
          { params: s, activeIndex: a, slidesEl: r } = i;
        let n = a;
        s.loop && ((n -= i.loopedSlides), i.loopDestroy(), i.recalcSlides());
        const o = i.slides.length;
        if (e <= 0) return void i.prependSlide(t);
        if (e >= o) return void i.appendSlide(t);
        let l = n > e ? n + 1 : n;
        const d = [];
        for (let t = o - 1; t >= e; t -= 1) {
          const e = i.slides[t];
          e.remove(), d.unshift(e);
        }
        if ('object' == typeof t && 'length' in t) {
          for (let e = 0; e < t.length; e += 1) t[e] && r.append(t[e]);
          l = n > e ? n + t.length : n;
        } else r.append(t);
        for (let e = 0; e < d.length; e += 1) r.append(d[e]);
        i.recalcSlides(),
          s.loop && i.loopCreate(),
          (s.observer && !i.isElement) || i.update(),
          s.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1);
      }
      function he(e) {
        const t = this,
          { params: i, activeIndex: s } = t;
        let a = s;
        i.loop && ((a -= t.loopedSlides), t.loopDestroy());
        let r,
          n = a;
        if ('object' == typeof e && 'length' in e) {
          for (let i = 0; i < e.length; i += 1)
            (r = e[i]), t.slides[r] && t.slides[r].remove(), r < n && (n -= 1);
          n = Math.max(n, 0);
        } else
          (r = e), t.slides[r] && t.slides[r].remove(), r < n && (n -= 1), (n = Math.max(n, 0));
        t.recalcSlides(),
          i.loop && t.loopCreate(),
          (i.observer && !t.isElement) || t.update(),
          i.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
      }
      function fe() {
        const e = this,
          t = [];
        for (let i = 0; i < e.slides.length; i += 1) t.push(i);
        e.removeSlide(t);
      }
      function ge(e) {
        const {
          effect: t,
          swiper: i,
          on: s,
          setTranslate: a,
          setTransition: r,
          overwriteParams: n,
          perspective: o,
          recreateShadows: l,
          getEffectParams: d,
        } = e;
        let p;
        s('beforeInit', () => {
          if (i.params.effect !== t) return;
          i.classNames.push(`${i.params.containerModifierClass}${t}`),
            o && o() && i.classNames.push(`${i.params.containerModifierClass}3d`);
          const e = n ? n() : {};
          Object.assign(i.params, e), Object.assign(i.originalParams, e);
        }),
          s('setTranslate', () => {
            i.params.effect === t && a();
          }),
          s('setTransition', (e, s) => {
            i.params.effect === t && r(s);
          }),
          s('transitionEnd', () => {
            if (i.params.effect === t && l) {
              if (!d || !d().slideShadows) return;
              i.slides.forEach((e) => {
                e.querySelectorAll(
                  '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
                ).forEach((e) => e.remove());
              }),
                l();
            }
          }),
          s('virtualUpdate', () => {
            i.params.effect === t &&
              (i.slides.length || (p = !0),
              requestAnimationFrame(() => {
                p && i.slides && i.slides.length && (a(), (p = !1));
              }));
          });
      }
      function ve(e, t) {
        const i = A(t);
        return (
          i !== t &&
            ((i.style.backfaceVisibility = 'hidden'),
            (i.style['-webkit-backface-visibility'] = 'hidden')),
          i
        );
      }
      function we(e) {
        let { swiper: t, duration: i, transformElements: s, allSlides: a } = e;
        const { activeIndex: r } = t;
        if (t.params.virtualTranslate && 0 !== i) {
          let e,
            i = !1;
          (e = a
            ? s
            : s.filter((e) => {
                const i = e.classList.contains('swiper-slide-transform')
                  ? ((e) =>
                      e.parentElement
                        ? e.parentElement
                        : t.slides.filter((t) => t.shadowRoot && t.shadowRoot === e.parentNode)[0])(
                      e,
                    )
                  : e;
                return t.getSlideIndex(i) === r;
              })),
            e.forEach((e) => {
              z(e, () => {
                if (i) return;
                if (!t || t.destroyed) return;
                (i = !0), (t.animating = !1);
                const e = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 });
                t.wrapperEl.dispatchEvent(e);
              });
            });
        }
      }
      function be(e, t, i) {
        const s = `swiper-slide-shadow${i ? `-${i}` : ''}${e ? ` swiper-slide-shadow-${e}` : ''}`,
          a = A(t);
        let r = a.querySelector(`.${s.split(' ').join('.')}`);
        return r || ((r = M('div', s.split(' '))), a.append(r)), r;
      }
      Object.keys(ne).forEach((e) => {
        Object.keys(ne[e]).forEach((t) => {
          le.prototype[t] = ne[e][t];
        });
      }),
        le.use([
          function (e) {
            let { swiper: t, on: i, emit: s } = e;
            const a = g();
            let r = null,
              n = null;
            const o = () => {
                t && !t.destroyed && t.initialized && (s('beforeResize'), s('resize'));
              },
              l = () => {
                t && !t.destroyed && t.initialized && s('orientationchange');
              };
            i('init', () => {
              t.params.resizeObserver && void 0 !== a.ResizeObserver
                ? t &&
                  !t.destroyed &&
                  t.initialized &&
                  ((r = new ResizeObserver((e) => {
                    n = a.requestAnimationFrame(() => {
                      const { width: i, height: s } = t;
                      let a = i,
                        r = s;
                      e.forEach((e) => {
                        let { contentBoxSize: i, contentRect: s, target: n } = e;
                        (n && n !== t.el) ||
                          ((a = s ? s.width : (i[0] || i).inlineSize),
                          (r = s ? s.height : (i[0] || i).blockSize));
                      }),
                        (a === i && r === s) || o();
                    });
                  })),
                  r.observe(t.el))
                : (a.addEventListener('resize', o), a.addEventListener('orientationchange', l));
            }),
              i('destroy', () => {
                n && a.cancelAnimationFrame(n),
                  r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                  a.removeEventListener('resize', o),
                  a.removeEventListener('orientationchange', l);
              });
          },
          function (e) {
            let { swiper: t, extendParams: i, on: s, emit: a } = e;
            const r = [],
              n = g(),
              o = function (e, i) {
                void 0 === i && (i = {});
                const s = new (n.MutationObserver || n.WebkitMutationObserver)((e) => {
                  if (t.__preventObserver__) return;
                  if (1 === e.length) return void a('observerUpdate', e[0]);
                  const i = function () {
                    a('observerUpdate', e[0]);
                  };
                  n.requestAnimationFrame ? n.requestAnimationFrame(i) : n.setTimeout(i, 0);
                });
                s.observe(e, {
                  attributes: void 0 === i.attributes || i.attributes,
                  childList: void 0 === i.childList || i.childList,
                  characterData: void 0 === i.characterData || i.characterData,
                }),
                  r.push(s);
              };
            i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              s('init', () => {
                if (t.params.observer) {
                  if (t.params.observeParents) {
                    const e = k(t.hostEl);
                    for (let t = 0; t < e.length; t += 1) o(e[t]);
                  }
                  o(t.hostEl, { childList: t.params.observeSlideChildren }),
                    o(t.wrapperEl, { attributes: !1 });
                }
              }),
              s('destroy', () => {
                r.forEach((e) => {
                  e.disconnect();
                }),
                  r.splice(0, r.length);
              });
          },
        ]);
      const ye = [
        function (e) {
          let t,
            { swiper: i, extendParams: s, on: a, emit: r } = e;
          s({
            virtual: {
              enabled: !1,
              slides: [],
              cache: !0,
              renderSlide: null,
              renderExternal: null,
              renderExternalUpdate: !0,
              addSlidesBefore: 0,
              addSlidesAfter: 0,
            },
          });
          const n = h();
          i.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: [],
          };
          const o = n.createElement('div');
          function l(e, t) {
            const s = i.params.virtual;
            if (s.cache && i.virtual.cache[t]) return i.virtual.cache[t];
            let a;
            return (
              s.renderSlide
                ? ((a = s.renderSlide.call(i, e, t)),
                  'string' == typeof a && ((o.innerHTML = a), (a = o.children[0])))
                : (a = i.isElement ? M('swiper-slide') : M('div', i.params.slideClass)),
              a.setAttribute('data-swiper-slide-index', t),
              s.renderSlide || (a.innerHTML = e),
              s.cache && (i.virtual.cache[t] = a),
              a
            );
          }
          function d(e) {
            const { slidesPerView: t, slidesPerGroup: s, centeredSlides: a, loop: n } = i.params,
              { addSlidesBefore: o, addSlidesAfter: d } = i.params.virtual,
              { from: p, to: c, slides: u, slidesGrid: m, offset: h } = i.virtual;
            i.params.cssMode || i.updateActiveIndex();
            const f = i.activeIndex || 0;
            let g, v, w;
            (g = i.rtlTranslate ? 'right' : i.isHorizontal() ? 'left' : 'top'),
              a
                ? ((v = Math.floor(t / 2) + s + d), (w = Math.floor(t / 2) + s + o))
                : ((v = t + (s - 1) + d), (w = (n ? t : s) + o));
            let b = f - w,
              y = f + v;
            n || ((b = Math.max(b, 0)), (y = Math.min(y, u.length - 1)));
            let x = (i.slidesGrid[b] || 0) - (i.slidesGrid[0] || 0);
            function E() {
              i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), r('virtualUpdate');
            }
            if (
              (n && f >= w
                ? ((b -= w), a || (x += i.slidesGrid[0]))
                : n && f < w && ((b = -w), a && (x += i.slidesGrid[0])),
              Object.assign(i.virtual, {
                from: b,
                to: y,
                offset: x,
                slidesGrid: i.slidesGrid,
                slidesBefore: w,
                slidesAfter: v,
              }),
              p === b && c === y && !e)
            )
              return (
                i.slidesGrid !== m &&
                  x !== h &&
                  i.slides.forEach((e) => {
                    e.style[g] = x - Math.abs(i.cssOverflowAdjustment()) + 'px';
                  }),
                i.updateProgress(),
                void r('virtualUpdate')
              );
            if (i.params.virtual.renderExternal)
              return (
                i.params.virtual.renderExternal.call(i, {
                  offset: x,
                  from: b,
                  to: y,
                  slides: (function () {
                    const e = [];
                    for (let t = b; t <= y; t += 1) e.push(u[t]);
                    return e;
                  })(),
                }),
                void (i.params.virtual.renderExternalUpdate ? E() : r('virtualUpdate'))
              );
            const S = [],
              A = [],
              M = (e) => {
                let t = e;
                return e < 0 ? (t = u.length + e) : t >= u.length && (t -= u.length), t;
              };
            if (e)
              i.slides
                .filter((e) => e.matches(`.${i.params.slideClass}, swiper-slide`))
                .forEach((e) => {
                  e.remove();
                });
            else
              for (let e = p; e <= c; e += 1)
                if (e < b || e > y) {
                  const t = M(e);
                  i.slides
                    .filter((e) =>
                      e.matches(
                        `.${i.params.slideClass}[data-swiper-slide-index="${t}"], swiper-slide[data-swiper-slide-index="${t}"]`,
                      ),
                    )
                    .forEach((e) => {
                      e.remove();
                    });
                }
            const C = n ? -u.length : 0,
              P = n ? 2 * u.length : u.length;
            for (let t = C; t < P; t += 1)
              if (t >= b && t <= y) {
                const i = M(t);
                void 0 === c || e ? A.push(i) : (t > c && A.push(i), t < p && S.push(i));
              }
            if (
              (A.forEach((e) => {
                i.slidesEl.append(l(u[e], e));
              }),
              n)
            )
              for (let e = S.length - 1; e >= 0; e -= 1) {
                const t = S[e];
                i.slidesEl.prepend(l(u[t], t));
              }
            else
              S.sort((e, t) => t - e),
                S.forEach((e) => {
                  i.slidesEl.prepend(l(u[e], e));
                });
            T(i.slidesEl, '.swiper-slide, swiper-slide').forEach((e) => {
              e.style[g] = x - Math.abs(i.cssOverflowAdjustment()) + 'px';
            }),
              E();
          }
          a('beforeInit', () => {
            if (!i.params.virtual.enabled) return;
            let e;
            if (void 0 === i.passedParams.virtual.slides) {
              const t = [...i.slidesEl.children].filter((e) =>
                e.matches(`.${i.params.slideClass}, swiper-slide`),
              );
              t &&
                t.length &&
                ((i.virtual.slides = [...t]),
                (e = !0),
                t.forEach((e, t) => {
                  e.setAttribute('data-swiper-slide-index', t),
                    (i.virtual.cache[t] = e),
                    e.remove();
                }));
            }
            e || (i.virtual.slides = i.params.virtual.slides),
              i.classNames.push(`${i.params.containerModifierClass}virtual`),
              (i.params.watchSlidesProgress = !0),
              (i.originalParams.watchSlidesProgress = !0),
              d();
          }),
            a('setTranslate', () => {
              i.params.virtual.enabled &&
                (i.params.cssMode && !i._immediateVirtual
                  ? (clearTimeout(t),
                    (t = setTimeout(() => {
                      d();
                    }, 100)))
                  : d());
            }),
            a('init update resize', () => {
              i.params.virtual.enabled &&
                i.params.cssMode &&
                E(i.wrapperEl, '--swiper-virtual-size', `${i.virtualSize}px`);
            }),
            Object.assign(i.virtual, {
              appendSlide: function (e) {
                if ('object' == typeof e && 'length' in e)
                  for (let t = 0; t < e.length; t += 1) e[t] && i.virtual.slides.push(e[t]);
                else i.virtual.slides.push(e);
                d(!0);
              },
              prependSlide: function (e) {
                const t = i.activeIndex;
                let s = t + 1,
                  a = 1;
                if (Array.isArray(e)) {
                  for (let t = 0; t < e.length; t += 1) e[t] && i.virtual.slides.unshift(e[t]);
                  (s = t + e.length), (a = e.length);
                } else i.virtual.slides.unshift(e);
                if (i.params.virtual.cache) {
                  const e = i.virtual.cache,
                    t = {};
                  Object.keys(e).forEach((i) => {
                    const s = e[i],
                      r = s.getAttribute('data-swiper-slide-index');
                    r && s.setAttribute('data-swiper-slide-index', parseInt(r, 10) + a),
                      (t[parseInt(i, 10) + a] = s);
                  }),
                    (i.virtual.cache = t);
                }
                d(!0), i.slideTo(s, 0);
              },
              removeSlide: function (e) {
                if (null == e) return;
                let t = i.activeIndex;
                if (Array.isArray(e))
                  for (let s = e.length - 1; s >= 0; s -= 1)
                    i.params.virtual.cache &&
                      (delete i.virtual.cache[e[s]],
                      Object.keys(i.virtual.cache).forEach((t) => {
                        t > e &&
                          ((i.virtual.cache[t - 1] = i.virtual.cache[t]),
                          i.virtual.cache[t - 1].setAttribute('data-swiper-slide-index', t - 1),
                          delete i.virtual.cache[t]);
                      })),
                      i.virtual.slides.splice(e[s], 1),
                      e[s] < t && (t -= 1),
                      (t = Math.max(t, 0));
                else
                  i.params.virtual.cache &&
                    (delete i.virtual.cache[e],
                    Object.keys(i.virtual.cache).forEach((t) => {
                      t > e &&
                        ((i.virtual.cache[t - 1] = i.virtual.cache[t]),
                        i.virtual.cache[t - 1].setAttribute('data-swiper-slide-index', t - 1),
                        delete i.virtual.cache[t]);
                    })),
                    i.virtual.slides.splice(e, 1),
                    e < t && (t -= 1),
                    (t = Math.max(t, 0));
                d(!0), i.slideTo(t, 0);
              },
              removeAllSlides: function () {
                (i.virtual.slides = []),
                  i.params.virtual.cache && (i.virtual.cache = {}),
                  d(!0),
                  i.slideTo(0, 0);
              },
              update: d,
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s, emit: a } = e;
          const r = h(),
            n = g();
          function o(e) {
            if (!t.enabled) return;
            const { rtlTranslate: i } = t;
            let s = e;
            s.originalEvent && (s = s.originalEvent);
            const o = s.keyCode || s.charCode,
              l = t.params.keyboard.pageUpDown,
              d = l && 33 === o,
              p = l && 34 === o,
              c = 37 === o,
              u = 39 === o,
              m = 38 === o,
              h = 40 === o;
            if (!t.allowSlideNext && ((t.isHorizontal() && u) || (t.isVertical() && h) || p))
              return !1;
            if (!t.allowSlidePrev && ((t.isHorizontal() && c) || (t.isVertical() && m) || d))
              return !1;
            if (
              !(
                s.shiftKey ||
                s.altKey ||
                s.ctrlKey ||
                s.metaKey ||
                (r.activeElement &&
                  r.activeElement.nodeName &&
                  ('input' === r.activeElement.nodeName.toLowerCase() ||
                    'textarea' === r.activeElement.nodeName.toLowerCase()))
              )
            ) {
              if (t.params.keyboard.onlyInViewport && (d || p || c || u || m || h)) {
                let e = !1;
                if (
                  k(t.el, `.${t.params.slideClass}, swiper-slide`).length > 0 &&
                  0 === k(t.el, `.${t.params.slideActiveClass}`).length
                )
                  return;
                const s = t.el,
                  a = s.clientWidth,
                  r = s.clientHeight,
                  o = n.innerWidth,
                  l = n.innerHeight,
                  d = C(s);
                i && (d.left -= s.scrollLeft);
                const p = [
                  [d.left, d.top],
                  [d.left + a, d.top],
                  [d.left, d.top + r],
                  [d.left + a, d.top + r],
                ];
                for (let t = 0; t < p.length; t += 1) {
                  const i = p[t];
                  if (i[0] >= 0 && i[0] <= o && i[1] >= 0 && i[1] <= l) {
                    if (0 === i[0] && 0 === i[1]) continue;
                    e = !0;
                  }
                }
                if (!e) return;
              }
              t.isHorizontal()
                ? ((d || p || c || u) &&
                    (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)),
                  (((p || u) && !i) || ((d || c) && i)) && t.slideNext(),
                  (((d || c) && !i) || ((p || u) && i)) && t.slidePrev())
                : ((d || p || m || h) &&
                    (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)),
                  (p || h) && t.slideNext(),
                  (d || m) && t.slidePrev()),
                a('keyPress', o);
            }
          }
          function l() {
            t.keyboard.enabled || (r.addEventListener('keydown', o), (t.keyboard.enabled = !0));
          }
          function d() {
            t.keyboard.enabled && (r.removeEventListener('keydown', o), (t.keyboard.enabled = !1));
          }
          (t.keyboard = { enabled: !1 }),
            i({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
            s('init', () => {
              t.params.keyboard.enabled && l();
            }),
            s('destroy', () => {
              t.keyboard.enabled && d();
            }),
            Object.assign(t.keyboard, { enable: l, disable: d });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s, emit: a } = e;
          const r = g();
          let n;
          i({
            mousewheel: {
              enabled: !1,
              releaseOnEdges: !1,
              invert: !1,
              forceToAxis: !1,
              sensitivity: 1,
              eventsTarget: 'container',
              thresholdDelta: null,
              thresholdTime: null,
              noMousewheelClass: 'swiper-no-mousewheel',
            },
          }),
            (t.mousewheel = { enabled: !1 });
          let o,
            l = w();
          const d = [];
          function p() {
            t.enabled && (t.mouseEntered = !0);
          }
          function c() {
            t.enabled && (t.mouseEntered = !1);
          }
          function u(e) {
            return !(
              (t.params.mousewheel.thresholdDelta &&
                e.delta < t.params.mousewheel.thresholdDelta) ||
              (t.params.mousewheel.thresholdTime && w() - l < t.params.mousewheel.thresholdTime) ||
              (!(e.delta >= 6 && w() - l < 60) &&
                (e.direction < 0
                  ? (t.isEnd && !t.params.loop) ||
                    t.animating ||
                    (t.slideNext(), a('scroll', e.raw))
                  : (t.isBeginning && !t.params.loop) ||
                    t.animating ||
                    (t.slidePrev(), a('scroll', e.raw)),
                (l = new r.Date().getTime()),
                1))
            );
          }
          function m(e) {
            let i = e,
              s = !0;
            if (!t.enabled) return;
            if (e.target.closest(`.${t.params.mousewheel.noMousewheelClass}`)) return;
            const r = t.params.mousewheel;
            t.params.cssMode && i.preventDefault();
            let l = t.el;
            'container' !== t.params.mousewheel.eventsTarget &&
              (l = document.querySelector(t.params.mousewheel.eventsTarget));
            const p = l && l.contains(i.target);
            if (!t.mouseEntered && !p && !r.releaseOnEdges) return !0;
            i.originalEvent && (i = i.originalEvent);
            let c = 0;
            const m = t.rtlTranslate ? -1 : 1,
              h = (function (e) {
                let t = 0,
                  i = 0,
                  s = 0,
                  a = 0;
                return (
                  'detail' in e && (i = e.detail),
                  'wheelDelta' in e && (i = -e.wheelDelta / 120),
                  'wheelDeltaY' in e && (i = -e.wheelDeltaY / 120),
                  'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
                  'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
                  (s = 10 * t),
                  (a = 10 * i),
                  'deltaY' in e && (a = e.deltaY),
                  'deltaX' in e && (s = e.deltaX),
                  e.shiftKey && !s && ((s = a), (a = 0)),
                  (s || a) &&
                    e.deltaMode &&
                    (1 === e.deltaMode ? ((s *= 40), (a *= 40)) : ((s *= 800), (a *= 800))),
                  s && !t && (t = s < 1 ? -1 : 1),
                  a && !i && (i = a < 1 ? -1 : 1),
                  { spinX: t, spinY: i, pixelX: s, pixelY: a }
                );
              })(i);
            if (r.forceToAxis)
              if (t.isHorizontal()) {
                if (!(Math.abs(h.pixelX) > Math.abs(h.pixelY))) return !0;
                c = -h.pixelX * m;
              } else {
                if (!(Math.abs(h.pixelY) > Math.abs(h.pixelX))) return !0;
                c = -h.pixelY;
              }
            else c = Math.abs(h.pixelX) > Math.abs(h.pixelY) ? -h.pixelX * m : -h.pixelY;
            if (0 === c) return !0;
            r.invert && (c = -c);
            let f = t.getTranslate() + c * r.sensitivity;
            if (
              (f >= t.minTranslate() && (f = t.minTranslate()),
              f <= t.maxTranslate() && (f = t.maxTranslate()),
              (s = !!t.params.loop || !(f === t.minTranslate() || f === t.maxTranslate())),
              s && t.params.nested && i.stopPropagation(),
              t.params.freeMode && t.params.freeMode.enabled)
            ) {
              const e = { time: w(), delta: Math.abs(c), direction: Math.sign(c) },
                s = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
              if (!s) {
                o = void 0;
                let l = t.getTranslate() + c * r.sensitivity;
                const p = t.isBeginning,
                  u = t.isEnd;
                if (
                  (l >= t.minTranslate() && (l = t.minTranslate()),
                  l <= t.maxTranslate() && (l = t.maxTranslate()),
                  t.setTransition(0),
                  t.setTranslate(l),
                  t.updateProgress(),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses(),
                  ((!p && t.isBeginning) || (!u && t.isEnd)) && t.updateSlidesClasses(),
                  t.params.loop &&
                    t.loopFix({ direction: e.direction < 0 ? 'next' : 'prev', byMousewheel: !0 }),
                  t.params.freeMode.sticky)
                ) {
                  clearTimeout(n), (n = void 0), d.length >= 15 && d.shift();
                  const i = d.length ? d[d.length - 1] : void 0,
                    s = d[0];
                  if ((d.push(e), i && (e.delta > i.delta || e.direction !== i.direction)))
                    d.splice(0);
                  else if (
                    d.length >= 15 &&
                    e.time - s.time < 500 &&
                    s.delta - e.delta >= 1 &&
                    e.delta <= 6
                  ) {
                    const i = c > 0 ? 0.8 : 0.2;
                    (o = e),
                      d.splice(0),
                      (n = v(() => {
                        t.slideToClosest(t.params.speed, !0, void 0, i);
                      }, 0));
                  }
                  n ||
                    (n = v(() => {
                      (o = e), d.splice(0), t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                    }, 500));
                }
                if (
                  (s || a('scroll', i),
                  t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(),
                  r.releaseOnEdges && (l === t.minTranslate() || l === t.maxTranslate()))
                )
                  return !0;
              }
            } else {
              const i = { time: w(), delta: Math.abs(c), direction: Math.sign(c), raw: e };
              d.length >= 2 && d.shift();
              const s = d.length ? d[d.length - 1] : void 0;
              if (
                (d.push(i),
                s
                  ? (i.direction !== s.direction || i.delta > s.delta || i.time > s.time + 150) &&
                    u(i)
                  : u(i),
                (function (e) {
                  const i = t.params.mousewheel;
                  if (e.direction < 0) {
                    if (t.isEnd && !t.params.loop && i.releaseOnEdges) return !0;
                  } else if (t.isBeginning && !t.params.loop && i.releaseOnEdges) return !0;
                  return !1;
                })(i))
              )
                return !0;
            }
            return i.preventDefault ? i.preventDefault() : (i.returnValue = !1), !1;
          }
          function h(e) {
            let i = t.el;
            'container' !== t.params.mousewheel.eventsTarget &&
              (i = document.querySelector(t.params.mousewheel.eventsTarget)),
              i[e]('mouseenter', p),
              i[e]('mouseleave', c),
              i[e]('wheel', m);
          }
          function f() {
            return t.params.cssMode
              ? (t.wrapperEl.removeEventListener('wheel', m), !0)
              : !t.mousewheel.enabled && (h('addEventListener'), (t.mousewheel.enabled = !0), !0);
          }
          function b() {
            return t.params.cssMode
              ? (t.wrapperEl.addEventListener(event, m), !0)
              : !!t.mousewheel.enabled &&
                  (h('removeEventListener'), (t.mousewheel.enabled = !1), !0);
          }
          s('init', () => {
            !t.params.mousewheel.enabled && t.params.cssMode && b(),
              t.params.mousewheel.enabled && f();
          }),
            s('destroy', () => {
              t.params.cssMode && f(), t.mousewheel.enabled && b();
            }),
            Object.assign(t.mousewheel, { enable: f, disable: b });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s, emit: a } = e;
          i({
            navigation: {
              nextEl: null,
              prevEl: null,
              hideOnClick: !1,
              disabledClass: 'swiper-button-disabled',
              hiddenClass: 'swiper-button-hidden',
              lockClass: 'swiper-button-lock',
              navigationDisabledClass: 'swiper-navigation-disabled',
            },
          }),
            (t.navigation = { nextEl: null, prevEl: null });
          const r = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
          function n(e) {
            let i;
            return e && 'string' == typeof e && t.isElement && ((i = t.el.querySelector(e)), i)
              ? i
              : (e &&
                  ('string' == typeof e && (i = [...document.querySelectorAll(e)]),
                  t.params.uniqueNavElements &&
                    'string' == typeof e &&
                    i.length > 1 &&
                    1 === t.el.querySelectorAll(e).length &&
                    (i = t.el.querySelector(e))),
                e && !i ? e : i);
          }
          function o(e, i) {
            const s = t.params.navigation;
            (e = r(e)).forEach((e) => {
              e &&
                (e.classList[i ? 'add' : 'remove'](...s.disabledClass.split(' ')),
                'BUTTON' === e.tagName && (e.disabled = i),
                t.params.watchOverflow &&
                  t.enabled &&
                  e.classList[t.isLocked ? 'add' : 'remove'](s.lockClass));
            });
          }
          function l() {
            const { nextEl: e, prevEl: i } = t.navigation;
            if (t.params.loop) return o(i, !1), void o(e, !1);
            o(i, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind);
          }
          function d(e) {
            e.preventDefault(),
              (!t.isBeginning || t.params.loop || t.params.rewind) &&
                (t.slidePrev(), a('navigationPrev'));
          }
          function p(e) {
            e.preventDefault(),
              (!t.isEnd || t.params.loop || t.params.rewind) &&
                (t.slideNext(), a('navigationNext'));
          }
          function c() {
            const e = t.params.navigation;
            if (
              ((t.params.navigation = de(t, t.originalParams.navigation, t.params.navigation, {
                nextEl: 'swiper-button-next',
                prevEl: 'swiper-button-prev',
              })),
              !e.nextEl && !e.prevEl)
            )
              return;
            let i = n(e.nextEl),
              s = n(e.prevEl);
            Object.assign(t.navigation, { nextEl: i, prevEl: s }), (i = r(i)), (s = r(s));
            const a = (i, s) => {
              i && i.addEventListener('click', 'next' === s ? p : d),
                !t.enabled && i && i.classList.add(...e.lockClass.split(' '));
            };
            i.forEach((e) => a(e, 'next')), s.forEach((e) => a(e, 'prev'));
          }
          function u() {
            let { nextEl: e, prevEl: i } = t.navigation;
            (e = r(e)), (i = r(i));
            const s = (e, i) => {
              e.removeEventListener('click', 'next' === i ? p : d),
                e.classList.remove(...t.params.navigation.disabledClass.split(' '));
            };
            e.forEach((e) => s(e, 'next')), i.forEach((e) => s(e, 'prev'));
          }
          s('init', () => {
            !1 === t.params.navigation.enabled ? m() : (c(), l());
          }),
            s('toEdge fromEdge lock unlock', () => {
              l();
            }),
            s('destroy', () => {
              u();
            }),
            s('enable disable', () => {
              let { nextEl: e, prevEl: i } = t.navigation;
              (e = r(e)),
                (i = r(i)),
                t.enabled
                  ? l()
                  : [...e, ...i]
                      .filter((e) => !!e)
                      .forEach((e) => e.classList.add(t.params.navigation.lockClass));
            }),
            s('click', (e, i) => {
              let { nextEl: s, prevEl: n } = t.navigation;
              (s = r(s)), (n = r(n));
              const o = i.target;
              if (t.params.navigation.hideOnClick && !n.includes(o) && !s.includes(o)) {
                if (
                  t.pagination &&
                  t.params.pagination &&
                  t.params.pagination.clickable &&
                  (t.pagination.el === o || t.pagination.el.contains(o))
                )
                  return;
                let e;
                s.length
                  ? (e = s[0].classList.contains(t.params.navigation.hiddenClass))
                  : n.length && (e = n[0].classList.contains(t.params.navigation.hiddenClass)),
                  a(!0 === e ? 'navigationShow' : 'navigationHide'),
                  [...s, ...n]
                    .filter((e) => !!e)
                    .forEach((e) => e.classList.toggle(t.params.navigation.hiddenClass));
              }
            });
          const m = () => {
            t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(' ')), u();
          };
          Object.assign(t.navigation, {
            enable: () => {
              t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(' ')),
                c(),
                l();
            },
            disable: m,
            update: l,
            init: c,
            destroy: u,
          });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s, emit: a } = e;
          const r = 'swiper-pagination';
          let n;
          i({
            pagination: {
              el: null,
              bulletElement: 'span',
              clickable: !1,
              hideOnClick: !1,
              renderBullet: null,
              renderProgressbar: null,
              renderFraction: null,
              renderCustom: null,
              progressbarOpposite: !1,
              type: 'bullets',
              dynamicBullets: !1,
              dynamicMainBullets: 1,
              formatFractionCurrent: (e) => e,
              formatFractionTotal: (e) => e,
              bulletClass: `${r}-bullet`,
              bulletActiveClass: `${r}-bullet-active`,
              modifierClass: `${r}-`,
              currentClass: `${r}-current`,
              totalClass: `${r}-total`,
              hiddenClass: `${r}-hidden`,
              progressbarFillClass: `${r}-progressbar-fill`,
              progressbarOppositeClass: `${r}-progressbar-opposite`,
              clickableClass: `${r}-clickable`,
              lockClass: `${r}-lock`,
              horizontalClass: `${r}-horizontal`,
              verticalClass: `${r}-vertical`,
              paginationDisabledClass: `${r}-disabled`,
            },
          }),
            (t.pagination = { el: null, bullets: [] });
          let o = 0;
          const l = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
          function d() {
            return (
              !t.params.pagination.el ||
              !t.pagination.el ||
              (Array.isArray(t.pagination.el) && 0 === t.pagination.el.length)
            );
          }
          function p(e, i) {
            const { bulletActiveClass: s } = t.params.pagination;
            e &&
              (e = e[('prev' === i ? 'previous' : 'next') + 'ElementSibling']) &&
              (e.classList.add(`${s}-${i}`),
              (e = e[('prev' === i ? 'previous' : 'next') + 'ElementSibling']) &&
                e.classList.add(`${s}-${i}-${i}`));
          }
          function c(e) {
            const i = e.target.closest(pe(t.params.pagination.bulletClass));
            if (!i) return;
            e.preventDefault();
            const s = L(i) * t.params.slidesPerGroup;
            if (t.params.loop) {
              if (t.realIndex === s) return;
              const e = t.realIndex,
                i = t.getSlideIndexByData(s),
                a = t.getSlideIndexByData(t.realIndex),
                r = (s) => {
                  const a = t.activeIndex;
                  t.loopFix({ direction: s, activeSlideIndex: i, slideTo: !1 }),
                    a === t.activeIndex && t.slideToLoop(e, 0, !1, !0);
                };
              if (i > t.slides.length - t.loopedSlides) r(i > a ? 'next' : 'prev');
              else if (t.params.centeredSlides) {
                const e =
                  'auto' === t.params.slidesPerView
                    ? t.slidesPerViewDynamic()
                    : Math.ceil(parseFloat(t.params.slidesPerView, 10));
                i < Math.floor(e / 2) && r('prev');
              }
              t.slideToLoop(s);
            } else t.slideTo(s);
          }
          function u() {
            const e = t.rtl,
              i = t.params.pagination;
            if (d()) return;
            let s,
              r,
              c = t.pagination.el;
            c = l(c);
            const u =
                t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
              m = t.params.loop ? Math.ceil(u / t.params.slidesPerGroup) : t.snapGrid.length;
            if (
              (t.params.loop
                ? ((r = t.previousRealIndex || 0),
                  (s =
                    t.params.slidesPerGroup > 1
                      ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                      : t.realIndex))
                : void 0 !== t.snapIndex
                ? ((s = t.snapIndex), (r = t.previousSnapIndex))
                : ((r = t.previousIndex || 0), (s = t.activeIndex || 0)),
              'bullets' === i.type && t.pagination.bullets && t.pagination.bullets.length > 0)
            ) {
              const a = t.pagination.bullets;
              let l, d, u;
              if (
                (i.dynamicBullets &&
                  ((n = I(a[0], t.isHorizontal() ? 'width' : 'height', !0)),
                  c.forEach((e) => {
                    e.style[t.isHorizontal() ? 'width' : 'height'] =
                      n * (i.dynamicMainBullets + 4) + 'px';
                  }),
                  i.dynamicMainBullets > 1 &&
                    void 0 !== r &&
                    ((o += s - (r || 0)),
                    o > i.dynamicMainBullets - 1
                      ? (o = i.dynamicMainBullets - 1)
                      : o < 0 && (o = 0)),
                  (l = Math.max(s - o, 0)),
                  (d = l + (Math.min(a.length, i.dynamicMainBullets) - 1)),
                  (u = (d + l) / 2)),
                a.forEach((e) => {
                  const t = [
                    ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
                      (e) => `${i.bulletActiveClass}${e}`,
                    ),
                  ]
                    .map((e) => ('string' == typeof e && e.includes(' ') ? e.split(' ') : e))
                    .flat();
                  e.classList.remove(...t);
                }),
                c.length > 1)
              )
                a.forEach((e) => {
                  const a = L(e);
                  a === s
                    ? e.classList.add(...i.bulletActiveClass.split(' '))
                    : t.isElement && e.setAttribute('part', 'bullet'),
                    i.dynamicBullets &&
                      (a >= l &&
                        a <= d &&
                        e.classList.add(...`${i.bulletActiveClass}-main`.split(' ')),
                      a === l && p(e, 'prev'),
                      a === d && p(e, 'next'));
                });
              else {
                const e = a[s];
                if (
                  (e && e.classList.add(...i.bulletActiveClass.split(' ')),
                  t.isElement &&
                    a.forEach((e, t) => {
                      e.setAttribute('part', t === s ? 'bullet-active' : 'bullet');
                    }),
                  i.dynamicBullets)
                ) {
                  const e = a[l],
                    t = a[d];
                  for (let e = l; e <= d; e += 1)
                    a[e] && a[e].classList.add(...`${i.bulletActiveClass}-main`.split(' '));
                  p(e, 'prev'), p(t, 'next');
                }
              }
              if (i.dynamicBullets) {
                const s = Math.min(a.length, i.dynamicMainBullets + 4),
                  r = (n * s - n) / 2 - u * n,
                  o = e ? 'right' : 'left';
                a.forEach((e) => {
                  e.style[t.isHorizontal() ? o : 'top'] = `${r}px`;
                });
              }
            }
            c.forEach((e, r) => {
              if (
                ('fraction' === i.type &&
                  (e.querySelectorAll(pe(i.currentClass)).forEach((e) => {
                    e.textContent = i.formatFractionCurrent(s + 1);
                  }),
                  e.querySelectorAll(pe(i.totalClass)).forEach((e) => {
                    e.textContent = i.formatFractionTotal(m);
                  })),
                'progressbar' === i.type)
              ) {
                let a;
                a = i.progressbarOpposite
                  ? t.isHorizontal()
                    ? 'vertical'
                    : 'horizontal'
                  : t.isHorizontal()
                  ? 'horizontal'
                  : 'vertical';
                const r = (s + 1) / m;
                let n = 1,
                  o = 1;
                'horizontal' === a ? (n = r) : (o = r),
                  e.querySelectorAll(pe(i.progressbarFillClass)).forEach((e) => {
                    (e.style.transform = `translate3d(0,0,0) scaleX(${n}) scaleY(${o})`),
                      (e.style.transitionDuration = `${t.params.speed}ms`);
                  });
              }
              'custom' === i.type && i.renderCustom
                ? ((e.innerHTML = i.renderCustom(t, s + 1, m)), 0 === r && a('paginationRender', e))
                : (0 === r && a('paginationRender', e), a('paginationUpdate', e)),
                t.params.watchOverflow &&
                  t.enabled &&
                  e.classList[t.isLocked ? 'add' : 'remove'](i.lockClass);
            });
          }
          function m() {
            const e = t.params.pagination;
            if (d()) return;
            const i =
              t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length;
            let s = t.pagination.el;
            s = l(s);
            let r = '';
            if ('bullets' === e.type) {
              let s = t.params.loop ? Math.ceil(i / t.params.slidesPerGroup) : t.snapGrid.length;
              t.params.freeMode && t.params.freeMode.enabled && s > i && (s = i);
              for (let i = 0; i < s; i += 1)
                e.renderBullet
                  ? (r += e.renderBullet.call(t, i, e.bulletClass))
                  : (r += `<${e.bulletElement} ${t.isElement ? 'part="bullet"' : ''} class="${
                      e.bulletClass
                    }"></${e.bulletElement}>`);
            }
            'fraction' === e.type &&
              (r = e.renderFraction
                ? e.renderFraction.call(t, e.currentClass, e.totalClass)
                : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
              'progressbar' === e.type &&
                (r = e.renderProgressbar
                  ? e.renderProgressbar.call(t, e.progressbarFillClass)
                  : `<span class="${e.progressbarFillClass}"></span>`),
              (t.pagination.bullets = []),
              s.forEach((i) => {
                'custom' !== e.type && (i.innerHTML = r || ''),
                  'bullets' === e.type &&
                    t.pagination.bullets.push(...i.querySelectorAll(pe(e.bulletClass)));
              }),
              'custom' !== e.type && a('paginationRender', s[0]);
          }
          function h() {
            t.params.pagination = de(t, t.originalParams.pagination, t.params.pagination, {
              el: 'swiper-pagination',
            });
            const e = t.params.pagination;
            if (!e.el) return;
            let i;
            'string' == typeof e.el && t.isElement && (i = t.el.querySelector(e.el)),
              i || 'string' != typeof e.el || (i = [...document.querySelectorAll(e.el)]),
              i || (i = e.el),
              i &&
                0 !== i.length &&
                (t.params.uniqueNavElements &&
                  'string' == typeof e.el &&
                  Array.isArray(i) &&
                  i.length > 1 &&
                  ((i = [...t.el.querySelectorAll(e.el)]),
                  i.length > 1 && (i = i.filter((e) => k(e, '.swiper')[0] === t.el)[0])),
                Array.isArray(i) && 1 === i.length && (i = i[0]),
                Object.assign(t.pagination, { el: i }),
                (i = l(i)),
                i.forEach((i) => {
                  'bullets' === e.type &&
                    e.clickable &&
                    i.classList.add(...(e.clickableClass || '').split(' ')),
                    i.classList.add(e.modifierClass + e.type),
                    i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                    'bullets' === e.type &&
                      e.dynamicBullets &&
                      (i.classList.add(`${e.modifierClass}${e.type}-dynamic`),
                      (o = 0),
                      e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
                    'progressbar' === e.type &&
                      e.progressbarOpposite &&
                      i.classList.add(e.progressbarOppositeClass),
                    e.clickable && i.addEventListener('click', c),
                    t.enabled || i.classList.add(e.lockClass);
                }));
          }
          function f() {
            const e = t.params.pagination;
            if (d()) return;
            let i = t.pagination.el;
            i &&
              ((i = l(i)),
              i.forEach((i) => {
                i.classList.remove(e.hiddenClass),
                  i.classList.remove(e.modifierClass + e.type),
                  i.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
                  e.clickable &&
                    (i.classList.remove(...(e.clickableClass || '').split(' ')),
                    i.removeEventListener('click', c));
              })),
              t.pagination.bullets &&
                t.pagination.bullets.forEach((t) =>
                  t.classList.remove(...e.bulletActiveClass.split(' ')),
                );
          }
          s('changeDirection', () => {
            if (!t.pagination || !t.pagination.el) return;
            const e = t.params.pagination;
            let { el: i } = t.pagination;
            (i = l(i)),
              i.forEach((i) => {
                i.classList.remove(e.horizontalClass, e.verticalClass),
                  i.classList.add(t.isHorizontal() ? e.horizontalClass : e.verticalClass);
              });
          }),
            s('init', () => {
              !1 === t.params.pagination.enabled ? g() : (h(), m(), u());
            }),
            s('activeIndexChange', () => {
              void 0 === t.snapIndex && u();
            }),
            s('snapIndexChange', () => {
              u();
            }),
            s('snapGridLengthChange', () => {
              m(), u();
            }),
            s('destroy', () => {
              f();
            }),
            s('enable disable', () => {
              let { el: e } = t.pagination;
              e &&
                ((e = l(e)),
                e.forEach((e) =>
                  e.classList[t.enabled ? 'remove' : 'add'](t.params.pagination.lockClass),
                ));
            }),
            s('lock unlock', () => {
              u();
            }),
            s('click', (e, i) => {
              const s = i.target,
                r = l(t.pagination.el);
              if (
                t.params.pagination.el &&
                t.params.pagination.hideOnClick &&
                r &&
                r.length > 0 &&
                !s.classList.contains(t.params.pagination.bulletClass)
              ) {
                if (
                  t.navigation &&
                  ((t.navigation.nextEl && s === t.navigation.nextEl) ||
                    (t.navigation.prevEl && s === t.navigation.prevEl))
                )
                  return;
                const e = r[0].classList.contains(t.params.pagination.hiddenClass);
                a(!0 === e ? 'paginationShow' : 'paginationHide'),
                  r.forEach((e) => e.classList.toggle(t.params.pagination.hiddenClass));
              }
            });
          const g = () => {
            t.el.classList.add(t.params.pagination.paginationDisabledClass);
            let { el: e } = t.pagination;
            e &&
              ((e = l(e)),
              e.forEach((e) => e.classList.add(t.params.pagination.paginationDisabledClass))),
              f();
          };
          Object.assign(t.pagination, {
            enable: () => {
              t.el.classList.remove(t.params.pagination.paginationDisabledClass);
              let { el: e } = t.pagination;
              e &&
                ((e = l(e)),
                e.forEach((e) => e.classList.remove(t.params.pagination.paginationDisabledClass))),
                h(),
                m(),
                u();
            },
            disable: g,
            render: m,
            update: u,
            init: h,
            destroy: f,
          });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s, emit: a } = e;
          const r = h();
          let n,
            o,
            l,
            d,
            p = !1,
            c = null,
            u = null;
          function m() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const { scrollbar: e, rtlTranslate: i } = t,
              { dragEl: s, el: a } = e,
              r = t.params.scrollbar,
              n = t.params.loop ? t.progressLoop : t.progress;
            let d = o,
              p = (l - o) * n;
            i
              ? ((p = -p), p > 0 ? ((d = o - p), (p = 0)) : -p + o > l && (d = l + p))
              : p < 0
              ? ((d = o + p), (p = 0))
              : p + o > l && (d = l - p),
              t.isHorizontal()
                ? ((s.style.transform = `translate3d(${p}px, 0, 0)`), (s.style.width = `${d}px`))
                : ((s.style.transform = `translate3d(0px, ${p}px, 0)`),
                  (s.style.height = `${d}px`)),
              r.hide &&
                (clearTimeout(c),
                (a.style.opacity = 1),
                (c = setTimeout(() => {
                  (a.style.opacity = 0), (a.style.transitionDuration = '400ms');
                }, 1e3)));
          }
          function f() {
            if (!t.params.scrollbar.el || !t.scrollbar.el) return;
            const { scrollbar: e } = t,
              { dragEl: i, el: s } = e;
            (i.style.width = ''),
              (i.style.height = ''),
              (l = t.isHorizontal() ? s.offsetWidth : s.offsetHeight),
              (d =
                t.size /
                (t.virtualSize +
                  t.params.slidesOffsetBefore -
                  (t.params.centeredSlides ? t.snapGrid[0] : 0))),
              (o =
                'auto' === t.params.scrollbar.dragSize
                  ? l * d
                  : parseInt(t.params.scrollbar.dragSize, 10)),
              t.isHorizontal() ? (i.style.width = `${o}px`) : (i.style.height = `${o}px`),
              (s.style.display = d >= 1 ? 'none' : ''),
              t.params.scrollbar.hide && (s.style.opacity = 0),
              t.params.watchOverflow &&
                t.enabled &&
                e.el.classList[t.isLocked ? 'add' : 'remove'](t.params.scrollbar.lockClass);
          }
          function g(e) {
            return t.isHorizontal() ? e.clientX : e.clientY;
          }
          function w(e) {
            const { scrollbar: i, rtlTranslate: s } = t,
              { el: a } = i;
            let r;
            (r =
              (g(e) - C(a)[t.isHorizontal() ? 'left' : 'top'] - (null !== n ? n : o / 2)) /
              (l - o)),
              (r = Math.max(Math.min(r, 1), 0)),
              s && (r = 1 - r);
            const d = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
            t.updateProgress(d), t.setTranslate(d), t.updateActiveIndex(), t.updateSlidesClasses();
          }
          function b(e) {
            const i = t.params.scrollbar,
              { scrollbar: s, wrapperEl: r } = t,
              { el: o, dragEl: l } = s;
            (p = !0),
              (n =
                e.target === l
                  ? g(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? 'left' : 'top']
                  : null),
              e.preventDefault(),
              e.stopPropagation(),
              (r.style.transitionDuration = '100ms'),
              (l.style.transitionDuration = '100ms'),
              w(e),
              clearTimeout(u),
              (o.style.transitionDuration = '0ms'),
              i.hide && (o.style.opacity = 1),
              t.params.cssMode && (t.wrapperEl.style['scroll-snap-type'] = 'none'),
              a('scrollbarDragStart', e);
          }
          function y(e) {
            const { scrollbar: i, wrapperEl: s } = t,
              { el: r, dragEl: n } = i;
            p &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              w(e),
              (s.style.transitionDuration = '0ms'),
              (r.style.transitionDuration = '0ms'),
              (n.style.transitionDuration = '0ms'),
              a('scrollbarDragMove', e));
          }
          function x(e) {
            const i = t.params.scrollbar,
              { scrollbar: s, wrapperEl: r } = t,
              { el: n } = s;
            p &&
              ((p = !1),
              t.params.cssMode &&
                ((t.wrapperEl.style['scroll-snap-type'] = ''), (r.style.transitionDuration = '')),
              i.hide &&
                (clearTimeout(u),
                (u = v(() => {
                  (n.style.opacity = 0), (n.style.transitionDuration = '400ms');
                }, 1e3))),
              a('scrollbarDragEnd', e),
              i.snapOnRelease && t.slideToClosest());
          }
          function E(e) {
            const { scrollbar: i, params: s } = t,
              a = i.el;
            if (!a) return;
            const n = a,
              o = !!s.passiveListeners && { passive: !1, capture: !1 },
              l = !!s.passiveListeners && { passive: !0, capture: !1 };
            if (!n) return;
            const d = 'on' === e ? 'addEventListener' : 'removeEventListener';
            n[d]('pointerdown', b, o), r[d]('pointermove', y, o), r[d]('pointerup', x, l);
          }
          function S() {
            const { scrollbar: e, el: i } = t;
            t.params.scrollbar = de(t, t.originalParams.scrollbar, t.params.scrollbar, {
              el: 'swiper-scrollbar',
            });
            const s = t.params.scrollbar;
            if (!s.el) return;
            let a, n;
            'string' == typeof s.el && t.isElement && (a = t.el.querySelector(s.el)),
              a || 'string' != typeof s.el ? a || (a = s.el) : (a = r.querySelectorAll(s.el)),
              t.params.uniqueNavElements &&
                'string' == typeof s.el &&
                a.length > 1 &&
                1 === i.querySelectorAll(s.el).length &&
                (a = i.querySelector(s.el)),
              a.length > 0 && (a = a[0]),
              a.classList.add(t.isHorizontal() ? s.horizontalClass : s.verticalClass),
              a &&
                ((n = a.querySelector(`.${t.params.scrollbar.dragClass}`)),
                n || ((n = M('div', t.params.scrollbar.dragClass)), a.append(n))),
              Object.assign(e, { el: a, dragEl: n }),
              s.draggable && t.params.scrollbar.el && t.scrollbar.el && E('on'),
              a && a.classList[t.enabled ? 'remove' : 'add'](t.params.scrollbar.lockClass);
          }
          function A() {
            const e = t.params.scrollbar,
              i = t.scrollbar.el;
            i && i.classList.remove(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
              t.params.scrollbar.el && t.scrollbar.el && E('off');
          }
          i({
            scrollbar: {
              el: null,
              dragSize: 'auto',
              hide: !1,
              draggable: !1,
              snapOnRelease: !0,
              lockClass: 'swiper-scrollbar-lock',
              dragClass: 'swiper-scrollbar-drag',
              scrollbarDisabledClass: 'swiper-scrollbar-disabled',
              horizontalClass: 'swiper-scrollbar-horizontal',
              verticalClass: 'swiper-scrollbar-vertical',
            },
          }),
            (t.scrollbar = { el: null, dragEl: null }),
            s('init', () => {
              !1 === t.params.scrollbar.enabled ? T() : (S(), f(), m());
            }),
            s('update resize observerUpdate lock unlock', () => {
              f();
            }),
            s('setTranslate', () => {
              m();
            }),
            s('setTransition', (e, i) => {
              !(function (e) {
                t.params.scrollbar.el &&
                  t.scrollbar.el &&
                  (t.scrollbar.dragEl.style.transitionDuration = `${e}ms`);
              })(i);
            }),
            s('enable disable', () => {
              const { el: e } = t.scrollbar;
              e && e.classList[t.enabled ? 'remove' : 'add'](t.params.scrollbar.lockClass);
            }),
            s('destroy', () => {
              A();
            });
          const T = () => {
            t.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),
              t.scrollbar.el &&
                t.scrollbar.el.classList.add(t.params.scrollbar.scrollbarDisabledClass),
              A();
          };
          Object.assign(t.scrollbar, {
            enable: () => {
              t.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),
                t.scrollbar.el &&
                  t.scrollbar.el.classList.remove(t.params.scrollbar.scrollbarDisabledClass),
                S(),
                f(),
                m();
            },
            disable: T,
            updateSize: f,
            setTranslate: m,
            init: S,
            destroy: A,
          });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s } = e;
          i({ parallax: { enabled: !1 } });
          const a =
              '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]',
            r = (e, i) => {
              const { rtl: s } = t,
                a = s ? -1 : 1,
                r = e.getAttribute('data-swiper-parallax') || '0';
              let n = e.getAttribute('data-swiper-parallax-x'),
                o = e.getAttribute('data-swiper-parallax-y');
              const l = e.getAttribute('data-swiper-parallax-scale'),
                d = e.getAttribute('data-swiper-parallax-opacity'),
                p = e.getAttribute('data-swiper-parallax-rotate');
              if (
                (n || o
                  ? ((n = n || '0'), (o = o || '0'))
                  : t.isHorizontal()
                  ? ((n = r), (o = '0'))
                  : ((o = r), (n = '0')),
                (n = n.indexOf('%') >= 0 ? parseInt(n, 10) * i * a + '%' : n * i * a + 'px'),
                (o = o.indexOf('%') >= 0 ? parseInt(o, 10) * i + '%' : o * i + 'px'),
                null != d)
              ) {
                const t = d - (d - 1) * (1 - Math.abs(i));
                e.style.opacity = t;
              }
              let c = `translate3d(${n}, ${o}, 0px)`;
              null != l && (c += ` scale(${l - (l - 1) * (1 - Math.abs(i))})`),
                p && null != p && (c += ` rotate(${p * i * -1}deg)`),
                (e.style.transform = c);
            },
            n = () => {
              const { el: e, slides: i, progress: s, snapGrid: n, isElement: o } = t,
                l = T(e, a);
              t.isElement && l.push(...T(t.hostEl, a)),
                l.forEach((e) => {
                  r(e, s);
                }),
                i.forEach((e, i) => {
                  let o = e.progress;
                  t.params.slidesPerGroup > 1 &&
                    'auto' !== t.params.slidesPerView &&
                    (o += Math.ceil(i / 2) - s * (n.length - 1)),
                    (o = Math.min(Math.max(o, -1), 1)),
                    e.querySelectorAll(`${a}, [data-swiper-parallax-rotate]`).forEach((e) => {
                      r(e, o);
                    });
                });
            };
          s('beforeInit', () => {
            t.params.parallax.enabled &&
              ((t.params.watchSlidesProgress = !0), (t.originalParams.watchSlidesProgress = !0));
          }),
            s('init', () => {
              t.params.parallax.enabled && n();
            }),
            s('setTranslate', () => {
              t.params.parallax.enabled && n();
            }),
            s('setTransition', (e, i) => {
              t.params.parallax.enabled &&
                (function (e) {
                  void 0 === e && (e = t.params.speed);
                  const { el: i, hostEl: s } = t,
                    r = [...i.querySelectorAll(a)];
                  t.isElement && r.push(...s.querySelectorAll(a)),
                    r.forEach((t) => {
                      let i = parseInt(t.getAttribute('data-swiper-parallax-duration'), 10) || e;
                      0 === e && (i = 0), (t.style.transitionDuration = `${i}ms`);
                    });
                })(i);
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s, emit: a } = e;
          const r = g();
          i({
            zoom: {
              enabled: !1,
              maxRatio: 3,
              minRatio: 1,
              toggle: !0,
              containerClass: 'swiper-zoom-container',
              zoomedSlideClass: 'swiper-slide-zoomed',
            },
          }),
            (t.zoom = { enabled: !1 });
          let n,
            o,
            l = 1,
            d = !1;
          const p = [],
            c = {
              originX: 0,
              originY: 0,
              slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              imageEl: void 0,
              imageWrapEl: void 0,
              maxRatio: 3,
            },
            u = {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {},
            },
            m = {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0,
            };
          let h = 1;
          function f() {
            if (p.length < 2) return 1;
            const e = p[0].pageX,
              t = p[0].pageY,
              i = p[1].pageX,
              s = p[1].pageY;
            return Math.sqrt((i - e) ** 2 + (s - t) ** 2);
          }
          function v(e) {
            const i = t.isElement ? 'swiper-slide' : `.${t.params.slideClass}`;
            return !!e.target.matches(i) || t.slides.filter((t) => t.contains(e.target)).length > 0;
          }
          function w(e) {
            if (('mouse' === e.pointerType && p.splice(0, p.length), !v(e))) return;
            const i = t.params.zoom;
            if (((n = !1), (o = !1), p.push(e), !(p.length < 2))) {
              if (((n = !0), (c.scaleStart = f()), !c.slideEl)) {
                (c.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)),
                  c.slideEl || (c.slideEl = t.slides[t.activeIndex]);
                let s = c.slideEl.querySelector(`.${i.containerClass}`);
                if (
                  (s &&
                    (s = s.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0]),
                  (c.imageEl = s),
                  (c.imageWrapEl = s ? k(c.imageEl, `.${i.containerClass}`)[0] : void 0),
                  !c.imageWrapEl)
                )
                  return void (c.imageEl = void 0);
                c.maxRatio = c.imageWrapEl.getAttribute('data-swiper-zoom') || i.maxRatio;
              }
              if (c.imageEl) {
                const [e, t] = (function () {
                  if (p.length < 2) return { x: null, y: null };
                  const e = c.imageEl.getBoundingClientRect();
                  return [
                    (p[0].pageX + (p[1].pageX - p[0].pageX) / 2 - e.x - r.scrollX) / l,
                    (p[0].pageY + (p[1].pageY - p[0].pageY) / 2 - e.y - r.scrollY) / l,
                  ];
                })();
                (c.originX = e), (c.originY = t), (c.imageEl.style.transitionDuration = '0ms');
              }
              d = !0;
            }
          }
          function y(e) {
            if (!v(e)) return;
            const i = t.params.zoom,
              s = t.zoom,
              a = p.findIndex((t) => t.pointerId === e.pointerId);
            a >= 0 && (p[a] = e),
              p.length < 2 ||
                ((o = !0),
                (c.scaleMove = f()),
                c.imageEl &&
                  ((s.scale = (c.scaleMove / c.scaleStart) * l),
                  s.scale > c.maxRatio &&
                    (s.scale = c.maxRatio - 1 + (s.scale - c.maxRatio + 1) ** 0.5),
                  s.scale < i.minRatio &&
                    (s.scale = i.minRatio + 1 - (i.minRatio - s.scale + 1) ** 0.5),
                  (c.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`)));
          }
          function x(e) {
            if (!v(e)) return;
            if ('mouse' === e.pointerType && 'pointerout' === e.type) return;
            const i = t.params.zoom,
              s = t.zoom,
              a = p.findIndex((t) => t.pointerId === e.pointerId);
            a >= 0 && p.splice(a, 1),
              n &&
                o &&
                ((n = !1),
                (o = !1),
                c.imageEl &&
                  ((s.scale = Math.max(Math.min(s.scale, c.maxRatio), i.minRatio)),
                  (c.imageEl.style.transitionDuration = `${t.params.speed}ms`),
                  (c.imageEl.style.transform = `translate3d(0,0,0) scale(${s.scale})`),
                  (l = s.scale),
                  (d = !1),
                  s.scale > 1 && c.slideEl
                    ? c.slideEl.classList.add(`${i.zoomedSlideClass}`)
                    : s.scale <= 1 &&
                      c.slideEl &&
                      c.slideEl.classList.remove(`${i.zoomedSlideClass}`),
                  1 === s.scale && ((c.originX = 0), (c.originY = 0), (c.slideEl = void 0))));
          }
          function E(e) {
            if (
              !v(e) ||
              !(function (e) {
                const i = `.${t.params.zoom.containerClass}`;
                return (
                  !!e.target.matches(i) ||
                  [...t.hostEl.querySelectorAll(i)].filter((t) => t.contains(e.target)).length > 0
                );
              })(e)
            )
              return;
            const i = t.zoom;
            if (!c.imageEl) return;
            if (!u.isTouched || !c.slideEl) return;
            u.isMoved ||
              ((u.width = c.imageEl.offsetWidth),
              (u.height = c.imageEl.offsetHeight),
              (u.startX = b(c.imageWrapEl, 'x') || 0),
              (u.startY = b(c.imageWrapEl, 'y') || 0),
              (c.slideWidth = c.slideEl.offsetWidth),
              (c.slideHeight = c.slideEl.offsetHeight),
              (c.imageWrapEl.style.transitionDuration = '0ms'));
            const s = u.width * i.scale,
              a = u.height * i.scale;
            if (s < c.slideWidth && a < c.slideHeight) return;
            if (
              ((u.minX = Math.min(c.slideWidth / 2 - s / 2, 0)),
              (u.maxX = -u.minX),
              (u.minY = Math.min(c.slideHeight / 2 - a / 2, 0)),
              (u.maxY = -u.minY),
              (u.touchesCurrent.x = p.length > 0 ? p[0].pageX : e.pageX),
              (u.touchesCurrent.y = p.length > 0 ? p[0].pageY : e.pageY),
              Math.max(
                Math.abs(u.touchesCurrent.x - u.touchesStart.x),
                Math.abs(u.touchesCurrent.y - u.touchesStart.y),
              ) > 5 && (t.allowClick = !1),
              !u.isMoved && !d)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(u.minX) === Math.floor(u.startX) &&
                  u.touchesCurrent.x < u.touchesStart.x) ||
                  (Math.floor(u.maxX) === Math.floor(u.startX) &&
                    u.touchesCurrent.x > u.touchesStart.x))
              )
                return void (u.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(u.minY) === Math.floor(u.startY) &&
                  u.touchesCurrent.y < u.touchesStart.y) ||
                  (Math.floor(u.maxY) === Math.floor(u.startY) &&
                    u.touchesCurrent.y > u.touchesStart.y))
              )
                return void (u.isTouched = !1);
            }
            e.cancelable && e.preventDefault(), e.stopPropagation(), (u.isMoved = !0);
            const r = (i.scale - l) / (c.maxRatio - t.params.zoom.minRatio),
              { originX: n, originY: o } = c;
            (u.currentX = u.touchesCurrent.x - u.touchesStart.x + u.startX + r * (u.width - 2 * n)),
              (u.currentY =
                u.touchesCurrent.y - u.touchesStart.y + u.startY + r * (u.height - 2 * o)),
              u.currentX < u.minX && (u.currentX = u.minX + 1 - (u.minX - u.currentX + 1) ** 0.8),
              u.currentX > u.maxX && (u.currentX = u.maxX - 1 + (u.currentX - u.maxX + 1) ** 0.8),
              u.currentY < u.minY && (u.currentY = u.minY + 1 - (u.minY - u.currentY + 1) ** 0.8),
              u.currentY > u.maxY && (u.currentY = u.maxY - 1 + (u.currentY - u.maxY + 1) ** 0.8),
              m.prevPositionX || (m.prevPositionX = u.touchesCurrent.x),
              m.prevPositionY || (m.prevPositionY = u.touchesCurrent.y),
              m.prevTime || (m.prevTime = Date.now()),
              (m.x = (u.touchesCurrent.x - m.prevPositionX) / (Date.now() - m.prevTime) / 2),
              (m.y = (u.touchesCurrent.y - m.prevPositionY) / (Date.now() - m.prevTime) / 2),
              Math.abs(u.touchesCurrent.x - m.prevPositionX) < 2 && (m.x = 0),
              Math.abs(u.touchesCurrent.y - m.prevPositionY) < 2 && (m.y = 0),
              (m.prevPositionX = u.touchesCurrent.x),
              (m.prevPositionY = u.touchesCurrent.y),
              (m.prevTime = Date.now()),
              (c.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`);
          }
          function S() {
            const e = t.zoom;
            c.slideEl &&
              t.activeIndex !== t.slides.indexOf(c.slideEl) &&
              (c.imageEl && (c.imageEl.style.transform = 'translate3d(0,0,0) scale(1)'),
              c.imageWrapEl && (c.imageWrapEl.style.transform = 'translate3d(0,0,0)'),
              c.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
              (e.scale = 1),
              (l = 1),
              (c.slideEl = void 0),
              (c.imageEl = void 0),
              (c.imageWrapEl = void 0),
              (c.originX = 0),
              (c.originY = 0));
          }
          function A(e) {
            const i = t.zoom,
              s = t.params.zoom;
            if (!c.slideEl) {
              e &&
                e.target &&
                (c.slideEl = e.target.closest(`.${t.params.slideClass}, swiper-slide`)),
                c.slideEl ||
                  (t.params.virtual && t.params.virtual.enabled && t.virtual
                    ? (c.slideEl = T(t.slidesEl, `.${t.params.slideActiveClass}`)[0])
                    : (c.slideEl = t.slides[t.activeIndex]));
              let i = c.slideEl.querySelector(`.${s.containerClass}`);
              i && (i = i.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0]),
                (c.imageEl = i),
                (c.imageWrapEl = i ? k(c.imageEl, `.${s.containerClass}`)[0] : void 0);
            }
            if (!c.imageEl || !c.imageWrapEl) return;
            let a, n, o, d, p, m, h, f, g, v, w, b, y, x, E, S, A, M;
            t.params.cssMode &&
              ((t.wrapperEl.style.overflow = 'hidden'), (t.wrapperEl.style.touchAction = 'none')),
              c.slideEl.classList.add(`${s.zoomedSlideClass}`),
              void 0 === u.touchesStart.x && e
                ? ((a = e.pageX), (n = e.pageY))
                : ((a = u.touchesStart.x), (n = u.touchesStart.y));
            const P = 'number' == typeof e ? e : null;
            1 === l && P && ((a = void 0), (n = void 0)),
              (i.scale = P || c.imageWrapEl.getAttribute('data-swiper-zoom') || s.maxRatio),
              (l = P || c.imageWrapEl.getAttribute('data-swiper-zoom') || s.maxRatio),
              !e || (1 === l && P)
                ? ((h = 0), (f = 0))
                : ((A = c.slideEl.offsetWidth),
                  (M = c.slideEl.offsetHeight),
                  (o = C(c.slideEl).left + r.scrollX),
                  (d = C(c.slideEl).top + r.scrollY),
                  (p = o + A / 2 - a),
                  (m = d + M / 2 - n),
                  (g = c.imageEl.offsetWidth),
                  (v = c.imageEl.offsetHeight),
                  (w = g * i.scale),
                  (b = v * i.scale),
                  (y = Math.min(A / 2 - w / 2, 0)),
                  (x = Math.min(M / 2 - b / 2, 0)),
                  (E = -y),
                  (S = -x),
                  (h = p * i.scale),
                  (f = m * i.scale),
                  h < y && (h = y),
                  h > E && (h = E),
                  f < x && (f = x),
                  f > S && (f = S)),
              P && 1 === i.scale && ((c.originX = 0), (c.originY = 0)),
              (c.imageWrapEl.style.transitionDuration = '300ms'),
              (c.imageWrapEl.style.transform = `translate3d(${h}px, ${f}px,0)`),
              (c.imageEl.style.transitionDuration = '300ms'),
              (c.imageEl.style.transform = `translate3d(0,0,0) scale(${i.scale})`);
          }
          function M() {
            const e = t.zoom,
              i = t.params.zoom;
            if (!c.slideEl) {
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? (c.slideEl = T(t.slidesEl, `.${t.params.slideActiveClass}`)[0])
                : (c.slideEl = t.slides[t.activeIndex]);
              let e = c.slideEl.querySelector(`.${i.containerClass}`);
              e && (e = e.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0]),
                (c.imageEl = e),
                (c.imageWrapEl = e ? k(c.imageEl, `.${i.containerClass}`)[0] : void 0);
            }
            c.imageEl &&
              c.imageWrapEl &&
              (t.params.cssMode &&
                ((t.wrapperEl.style.overflow = ''), (t.wrapperEl.style.touchAction = '')),
              (e.scale = 1),
              (l = 1),
              (c.imageWrapEl.style.transitionDuration = '300ms'),
              (c.imageWrapEl.style.transform = 'translate3d(0,0,0)'),
              (c.imageEl.style.transitionDuration = '300ms'),
              (c.imageEl.style.transform = 'translate3d(0,0,0) scale(1)'),
              c.slideEl.classList.remove(`${i.zoomedSlideClass}`),
              (c.slideEl = void 0),
              (c.originX = 0),
              (c.originY = 0));
          }
          function P(e) {
            const i = t.zoom;
            i.scale && 1 !== i.scale ? M() : A(e);
          }
          function L() {
            return {
              passiveListener: !!t.params.passiveListeners && { passive: !0, capture: !1 },
              activeListenerWithCapture: !t.params.passiveListeners || { passive: !1, capture: !0 },
            };
          }
          function z() {
            const e = t.zoom;
            if (e.enabled) return;
            e.enabled = !0;
            const { passiveListener: i, activeListenerWithCapture: s } = L();
            t.wrapperEl.addEventListener('pointerdown', w, i),
              t.wrapperEl.addEventListener('pointermove', y, s),
              ['pointerup', 'pointercancel', 'pointerout'].forEach((e) => {
                t.wrapperEl.addEventListener(e, x, i);
              }),
              t.wrapperEl.addEventListener('pointermove', E, s);
          }
          function I() {
            const e = t.zoom;
            if (!e.enabled) return;
            e.enabled = !1;
            const { passiveListener: i, activeListenerWithCapture: s } = L();
            t.wrapperEl.removeEventListener('pointerdown', w, i),
              t.wrapperEl.removeEventListener('pointermove', y, s),
              ['pointerup', 'pointercancel', 'pointerout'].forEach((e) => {
                t.wrapperEl.removeEventListener(e, x, i);
              }),
              t.wrapperEl.removeEventListener('pointermove', E, s);
          }
          Object.defineProperty(t.zoom, 'scale', {
            get() {
              return h;
            },
            set(e) {
              if (h !== e) {
                const t = c.imageEl,
                  i = c.slideEl;
                a('zoomChange', e, t, i);
              }
              h = e;
            },
          }),
            s('init', () => {
              t.params.zoom.enabled && z();
            }),
            s('destroy', () => {
              I();
            }),
            s('touchStart', (e, i) => {
              t.zoom.enabled &&
                (function (e) {
                  const i = t.device;
                  if (!c.imageEl) return;
                  if (u.isTouched) return;
                  i.android && e.cancelable && e.preventDefault(), (u.isTouched = !0);
                  const s = p.length > 0 ? p[0] : e;
                  (u.touchesStart.x = s.pageX), (u.touchesStart.y = s.pageY);
                })(i);
            }),
            s('touchEnd', (e, i) => {
              t.zoom.enabled &&
                (function () {
                  const e = t.zoom;
                  if (!c.imageEl) return;
                  if (!u.isTouched || !u.isMoved) return (u.isTouched = !1), void (u.isMoved = !1);
                  (u.isTouched = !1), (u.isMoved = !1);
                  let i = 300,
                    s = 300;
                  const a = m.x * i,
                    r = u.currentX + a,
                    n = m.y * s,
                    o = u.currentY + n;
                  0 !== m.x && (i = Math.abs((r - u.currentX) / m.x)),
                    0 !== m.y && (s = Math.abs((o - u.currentY) / m.y));
                  const l = Math.max(i, s);
                  (u.currentX = r), (u.currentY = o);
                  const d = u.width * e.scale,
                    p = u.height * e.scale;
                  (u.minX = Math.min(c.slideWidth / 2 - d / 2, 0)),
                    (u.maxX = -u.minX),
                    (u.minY = Math.min(c.slideHeight / 2 - p / 2, 0)),
                    (u.maxY = -u.minY),
                    (u.currentX = Math.max(Math.min(u.currentX, u.maxX), u.minX)),
                    (u.currentY = Math.max(Math.min(u.currentY, u.maxY), u.minY)),
                    (c.imageWrapEl.style.transitionDuration = `${l}ms`),
                    (c.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`);
                })();
            }),
            s('doubleTap', (e, i) => {
              !t.animating &&
                t.params.zoom.enabled &&
                t.zoom.enabled &&
                t.params.zoom.toggle &&
                P(i);
            }),
            s('transitionEnd', () => {
              t.zoom.enabled && t.params.zoom.enabled && S();
            }),
            s('slideChange', () => {
              t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && S();
            }),
            Object.assign(t.zoom, { enable: z, disable: I, in: A, out: M, toggle: P });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s } = e;
          function a(e, t) {
            const i = (function () {
              let e, t, i;
              return (s, a) => {
                for (t = -1, e = s.length; e - t > 1; )
                  (i = (e + t) >> 1), s[i] <= a ? (t = i) : (e = i);
                return e;
              };
            })();
            let s, a;
            return (
              (this.x = e),
              (this.y = t),
              (this.lastIndex = e.length - 1),
              (this.interpolate = function (e) {
                return e
                  ? ((a = i(this.x, e)),
                    (s = a - 1),
                    ((e - this.x[s]) * (this.y[a] - this.y[s])) / (this.x[a] - this.x[s]) +
                      this.y[s])
                  : 0;
              }),
              this
            );
          }
          function r() {
            t.controller.control &&
              t.controller.spline &&
              ((t.controller.spline = void 0), delete t.controller.spline);
          }
          i({ controller: { control: void 0, inverse: !1, by: 'slide' } }),
            (t.controller = { control: void 0 }),
            s('beforeInit', () => {
              if (
                'undefined' != typeof window &&
                ('string' == typeof t.params.controller.control ||
                  t.params.controller.control instanceof HTMLElement)
              ) {
                const e = document.querySelector(t.params.controller.control);
                if (e && e.swiper) t.controller.control = e.swiper;
                else if (e) {
                  const i = (s) => {
                    (t.controller.control = s.detail[0]),
                      t.update(),
                      e.removeEventListener('init', i);
                  };
                  e.addEventListener('init', i);
                }
              } else t.controller.control = t.params.controller.control;
            }),
            s('update', () => {
              r();
            }),
            s('resize', () => {
              r();
            }),
            s('observerUpdate', () => {
              r();
            }),
            s('setTranslate', (e, i, s) => {
              t.controller.control &&
                !t.controller.control.destroyed &&
                t.controller.setTranslate(i, s);
            }),
            s('setTransition', (e, i, s) => {
              t.controller.control &&
                !t.controller.control.destroyed &&
                t.controller.setTransition(i, s);
            }),
            Object.assign(t.controller, {
              setTranslate: function (e, i) {
                const s = t.controller.control;
                let r, n;
                const o = t.constructor;
                function l(e) {
                  if (e.destroyed) return;
                  const i = t.rtlTranslate ? -t.translate : t.translate;
                  'slide' === t.params.controller.by &&
                    ((function (e) {
                      t.controller.spline = t.params.loop
                        ? new a(t.slidesGrid, e.slidesGrid)
                        : new a(t.snapGrid, e.snapGrid);
                    })(e),
                    (n = -t.controller.spline.interpolate(-i))),
                    (n && 'container' !== t.params.controller.by) ||
                      ((r =
                        (e.maxTranslate() - e.minTranslate()) /
                        (t.maxTranslate() - t.minTranslate())),
                      (!Number.isNaN(r) && Number.isFinite(r)) || (r = 1),
                      (n = (i - t.minTranslate()) * r + e.minTranslate())),
                    t.params.controller.inverse && (n = e.maxTranslate() - n),
                    e.updateProgress(n),
                    e.setTranslate(n, t),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                }
                if (Array.isArray(s))
                  for (let e = 0; e < s.length; e += 1) s[e] !== i && s[e] instanceof o && l(s[e]);
                else s instanceof o && i !== s && l(s);
              },
              setTransition: function (e, i) {
                const s = t.constructor,
                  a = t.controller.control;
                let r;
                function n(i) {
                  i.destroyed ||
                    (i.setTransition(e, t),
                    0 !== e &&
                      (i.transitionStart(),
                      i.params.autoHeight &&
                        v(() => {
                          i.updateAutoHeight();
                        }),
                      z(i.wrapperEl, () => {
                        a && i.transitionEnd();
                      })));
                }
                if (Array.isArray(a))
                  for (r = 0; r < a.length; r += 1) a[r] !== i && a[r] instanceof s && n(a[r]);
                else a instanceof s && i !== a && n(a);
              },
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s } = e;
          i({
            a11y: {
              enabled: !0,
              notificationClass: 'swiper-notification',
              prevSlideMessage: 'Previous slide',
              nextSlideMessage: 'Next slide',
              firstSlideMessage: 'This is the first slide',
              lastSlideMessage: 'This is the last slide',
              paginationBulletMessage: 'Go to slide {{index}}',
              slideLabelMessage: '{{index}} / {{slidesLength}}',
              containerMessage: null,
              containerRoleDescriptionMessage: null,
              itemRoleDescriptionMessage: null,
              slideRole: 'group',
              id: null,
            },
          }),
            (t.a11y = { clicked: !1 });
          let a = null;
          function r(e) {
            const t = a;
            0 !== t.length && ((t.innerHTML = ''), (t.innerHTML = e));
          }
          const n = (e) => (Array.isArray(e) ? e : [e]).filter((e) => !!e);
          function o(e) {
            (e = n(e)).forEach((e) => {
              e.setAttribute('tabIndex', '0');
            });
          }
          function l(e) {
            (e = n(e)).forEach((e) => {
              e.setAttribute('tabIndex', '-1');
            });
          }
          function d(e, t) {
            (e = n(e)).forEach((e) => {
              e.setAttribute('role', t);
            });
          }
          function p(e, t) {
            (e = n(e)).forEach((e) => {
              e.setAttribute('aria-roledescription', t);
            });
          }
          function c(e, t) {
            (e = n(e)).forEach((e) => {
              e.setAttribute('aria-label', t);
            });
          }
          function u(e) {
            (e = n(e)).forEach((e) => {
              e.setAttribute('aria-disabled', !0);
            });
          }
          function m(e) {
            (e = n(e)).forEach((e) => {
              e.setAttribute('aria-disabled', !1);
            });
          }
          function h(e) {
            if (13 !== e.keyCode && 32 !== e.keyCode) return;
            const i = t.params.a11y,
              s = e.target;
            (t.pagination &&
              t.pagination.el &&
              (s === t.pagination.el || t.pagination.el.contains(e.target)) &&
              !e.target.matches(pe(t.params.pagination.bulletClass))) ||
              (t.navigation &&
                t.navigation.nextEl &&
                s === t.navigation.nextEl &&
                ((t.isEnd && !t.params.loop) || t.slideNext(),
                t.isEnd ? r(i.lastSlideMessage) : r(i.nextSlideMessage)),
              t.navigation &&
                t.navigation.prevEl &&
                s === t.navigation.prevEl &&
                ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                t.isBeginning ? r(i.firstSlideMessage) : r(i.prevSlideMessage)),
              t.pagination && s.matches(pe(t.params.pagination.bulletClass)) && s.click());
          }
          function f() {
            return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
          }
          function g() {
            return f() && t.params.pagination.clickable;
          }
          const v = (e, t, i) => {
              o(e),
                'BUTTON' !== e.tagName && (d(e, 'button'), e.addEventListener('keydown', h)),
                c(e, i),
                (function (e, t) {
                  (e = n(e)).forEach((e) => {
                    e.setAttribute('aria-controls', t);
                  });
                })(e, t);
            },
            w = () => {
              t.a11y.clicked = !0;
            },
            b = () => {
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  t.destroyed || (t.a11y.clicked = !1);
                });
              });
            },
            y = (e) => {
              if (t.a11y.clicked) return;
              const i = e.target.closest(`.${t.params.slideClass}, swiper-slide`);
              if (!i || !t.slides.includes(i)) return;
              const s = t.slides.indexOf(i) === t.activeIndex,
                a = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(i);
              s ||
                a ||
                (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) ||
                (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0),
                t.slideTo(t.slides.indexOf(i), 0));
            },
            x = () => {
              const e = t.params.a11y;
              e.itemRoleDescriptionMessage && p(t.slides, e.itemRoleDescriptionMessage),
                e.slideRole && d(t.slides, e.slideRole);
              const i = t.slides.length;
              e.slideLabelMessage &&
                t.slides.forEach((s, a) => {
                  const r = t.params.loop
                    ? parseInt(s.getAttribute('data-swiper-slide-index'), 10)
                    : a;
                  c(
                    s,
                    e.slideLabelMessage
                      .replace(/\{\{index\}\}/, r + 1)
                      .replace(/\{\{slidesLength\}\}/, i),
                  );
                });
            };
          s('beforeInit', () => {
            (a = M('span', t.params.a11y.notificationClass)),
              a.setAttribute('aria-live', 'assertive'),
              a.setAttribute('aria-atomic', 'true');
          }),
            s('afterInit', () => {
              t.params.a11y.enabled &&
                (() => {
                  const e = t.params.a11y;
                  t.el.append(a);
                  const i = t.el;
                  e.containerRoleDescriptionMessage && p(i, e.containerRoleDescriptionMessage),
                    e.containerMessage && c(i, e.containerMessage);
                  const s = t.wrapperEl,
                    r =
                      e.id ||
                      s.getAttribute('id') ||
                      `swiper-wrapper-${
                        ((o = 16),
                        void 0 === o && (o = 16),
                        'x'
                          .repeat(o)
                          .replace(/x/g, () => Math.round(16 * Math.random()).toString(16)))
                      }`;
                  var o;
                  const l = t.params.autoplay && t.params.autoplay.enabled ? 'off' : 'polite';
                  var d;
                  (d = r),
                    n(s).forEach((e) => {
                      e.setAttribute('id', d);
                    }),
                    (function (e, t) {
                      (e = n(e)).forEach((e) => {
                        e.setAttribute('aria-live', t);
                      });
                    })(s, l),
                    x();
                  let { nextEl: u, prevEl: m } = t.navigation ? t.navigation : {};
                  (u = n(u)),
                    (m = n(m)),
                    u && u.forEach((t) => v(t, r, e.nextSlideMessage)),
                    m && m.forEach((t) => v(t, r, e.prevSlideMessage)),
                    g() &&
                      (Array.isArray(t.pagination.el)
                        ? t.pagination.el
                        : [t.pagination.el]
                      ).forEach((e) => {
                        e.addEventListener('keydown', h);
                      }),
                    t.el.addEventListener('focus', y, !0),
                    t.el.addEventListener('pointerdown', w, !0),
                    t.el.addEventListener('pointerup', b, !0);
                })();
            }),
            s('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
              t.params.a11y.enabled && x();
            }),
            s('fromEdge toEdge afterInit lock unlock', () => {
              t.params.a11y.enabled &&
                (function () {
                  if (t.params.loop || t.params.rewind || !t.navigation) return;
                  const { nextEl: e, prevEl: i } = t.navigation;
                  i && (t.isBeginning ? (u(i), l(i)) : (m(i), o(i))),
                    e && (t.isEnd ? (u(e), l(e)) : (m(e), o(e)));
                })();
            }),
            s('paginationUpdate', () => {
              t.params.a11y.enabled &&
                (function () {
                  const e = t.params.a11y;
                  f() &&
                    t.pagination.bullets.forEach((i) => {
                      t.params.pagination.clickable &&
                        (o(i),
                        t.params.pagination.renderBullet ||
                          (d(i, 'button'),
                          c(i, e.paginationBulletMessage.replace(/\{\{index\}\}/, L(i) + 1)))),
                        i.matches(pe(t.params.pagination.bulletActiveClass))
                          ? i.setAttribute('aria-current', 'true')
                          : i.removeAttribute('aria-current');
                    });
                })();
            }),
            s('destroy', () => {
              t.params.a11y.enabled &&
                (function () {
                  a && a.remove();
                  let { nextEl: e, prevEl: i } = t.navigation ? t.navigation : {};
                  (e = n(e)),
                    (i = n(i)),
                    e && e.forEach((e) => e.removeEventListener('keydown', h)),
                    i && i.forEach((e) => e.removeEventListener('keydown', h)),
                    g() &&
                      (Array.isArray(t.pagination.el)
                        ? t.pagination.el
                        : [t.pagination.el]
                      ).forEach((e) => {
                        e.removeEventListener('keydown', h);
                      }),
                    t.el.removeEventListener('focus', y, !0),
                    t.el.removeEventListener('pointerdown', w, !0),
                    t.el.removeEventListener('pointerup', b, !0);
                })();
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s } = e;
          i({ history: { enabled: !1, root: '', replaceState: !1, key: 'slides', keepQuery: !1 } });
          let a = !1,
            r = {};
          const n = (e) =>
              e
                .toString()
                .replace(/\s+/g, '-')
                .replace(/[^\w-]+/g, '')
                .replace(/--+/g, '-')
                .replace(/^-+/, '')
                .replace(/-+$/, ''),
            o = (e) => {
              const t = g();
              let i;
              i = e ? new URL(e) : t.location;
              const s = i.pathname
                  .slice(1)
                  .split('/')
                  .filter((e) => '' !== e),
                a = s.length;
              return { key: s[a - 2], value: s[a - 1] };
            },
            l = (e, i) => {
              const s = g();
              if (!a || !t.params.history.enabled) return;
              let r;
              r = t.params.url ? new URL(t.params.url) : s.location;
              const o = t.slides[i];
              let l = n(o.getAttribute('data-history'));
              if (t.params.history.root.length > 0) {
                let i = t.params.history.root;
                '/' === i[i.length - 1] && (i = i.slice(0, i.length - 1)),
                  (l = `${i}/${e ? `${e}/` : ''}${l}`);
              } else r.pathname.includes(e) || (l = `${e ? `${e}/` : ''}${l}`);
              t.params.history.keepQuery && (l += r.search);
              const d = s.history.state;
              (d && d.value === l) ||
                (t.params.history.replaceState
                  ? s.history.replaceState({ value: l }, null, l)
                  : s.history.pushState({ value: l }, null, l));
            },
            d = (e, i, s) => {
              if (i)
                for (let a = 0, r = t.slides.length; a < r; a += 1) {
                  const r = t.slides[a];
                  if (n(r.getAttribute('data-history')) === i) {
                    const i = t.getSlideIndex(r);
                    t.slideTo(i, e, s);
                  }
                }
              else t.slideTo(0, e, s);
            },
            p = () => {
              (r = o(t.params.url)), d(t.params.speed, r.value, !1);
            };
          s('init', () => {
            t.params.history.enabled &&
              (() => {
                const e = g();
                if (t.params.history) {
                  if (!e.history || !e.history.pushState)
                    return (
                      (t.params.history.enabled = !1), void (t.params.hashNavigation.enabled = !0)
                    );
                  (a = !0),
                    (r = o(t.params.url)),
                    r.key || r.value
                      ? (d(0, r.value, t.params.runCallbacksOnInit),
                        t.params.history.replaceState || e.addEventListener('popstate', p))
                      : t.params.history.replaceState || e.addEventListener('popstate', p);
                }
              })();
          }),
            s('destroy', () => {
              t.params.history.enabled &&
                (() => {
                  const e = g();
                  t.params.history.replaceState || e.removeEventListener('popstate', p);
                })();
            }),
            s('transitionEnd _freeModeNoMomentumRelease', () => {
              a && l(t.params.history.key, t.activeIndex);
            }),
            s('slideChange', () => {
              a && t.params.cssMode && l(t.params.history.key, t.activeIndex);
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, emit: s, on: a } = e,
            r = !1;
          const n = h(),
            o = g();
          i({
            hashNavigation: {
              enabled: !1,
              replaceState: !1,
              watchState: !1,
              getSlideIndex(e, i) {
                if (t.virtual && t.params.virtual.enabled) {
                  const e = t.slides.filter((e) => e.getAttribute('data-hash') === i)[0];
                  return e ? parseInt(e.getAttribute('data-swiper-slide-index'), 10) : 0;
                }
                return t.getSlideIndex(
                  T(
                    t.slidesEl,
                    `.${t.params.slideClass}[data-hash="${i}"], swiper-slide[data-hash="${i}"]`,
                  )[0],
                );
              },
            },
          });
          const l = () => {
              s('hashChange');
              const e = n.location.hash.replace('#', ''),
                i =
                  t.virtual && t.params.virtual.enabled
                    ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`)
                    : t.slides[t.activeIndex];
              if (e !== (i ? i.getAttribute('data-hash') : '')) {
                const i = t.params.hashNavigation.getSlideIndex(t, e);
                if (void 0 === i || Number.isNaN(i)) return;
                t.slideTo(i);
              }
            },
            d = () => {
              if (!r || !t.params.hashNavigation.enabled) return;
              const e =
                  t.virtual && t.params.virtual.enabled
                    ? t.slidesEl.querySelector(`[data-swiper-slide-index="${t.activeIndex}"]`)
                    : t.slides[t.activeIndex],
                i = e ? e.getAttribute('data-hash') || e.getAttribute('data-history') : '';
              t.params.hashNavigation.replaceState && o.history && o.history.replaceState
                ? (o.history.replaceState(null, null, `#${i}` || ''), s('hashSet'))
                : ((n.location.hash = i || ''), s('hashSet'));
            };
          a('init', () => {
            t.params.hashNavigation.enabled &&
              (() => {
                if (
                  !t.params.hashNavigation.enabled ||
                  (t.params.history && t.params.history.enabled)
                )
                  return;
                r = !0;
                const e = n.location.hash.replace('#', '');
                if (e) {
                  const i = 0,
                    s = t.params.hashNavigation.getSlideIndex(t, e);
                  t.slideTo(s || 0, i, t.params.runCallbacksOnInit, !0);
                }
                t.params.hashNavigation.watchState && o.addEventListener('hashchange', l);
              })();
          }),
            a('destroy', () => {
              t.params.hashNavigation.enabled &&
                t.params.hashNavigation.watchState &&
                o.removeEventListener('hashchange', l);
            }),
            a('transitionEnd _freeModeNoMomentumRelease', () => {
              r && d();
            }),
            a('slideChange', () => {
              r && t.params.cssMode && d();
            });
        },
        function (e) {
          let t,
            i,
            { swiper: s, extendParams: a, on: r, emit: n, params: o } = e;
          (s.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
            a({
              autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1,
              },
            });
          let l,
            d,
            p,
            c,
            u,
            m,
            f,
            g = o && o.autoplay ? o.autoplay.delay : 3e3,
            v = o && o.autoplay ? o.autoplay.delay : 3e3,
            w = new Date().getTime;
          function b(e) {
            s &&
              !s.destroyed &&
              s.wrapperEl &&
              e.target === s.wrapperEl &&
              (s.wrapperEl.removeEventListener('transitionend', b), T());
          }
          const y = () => {
              if (s.destroyed || !s.autoplay.running) return;
              s.autoplay.paused ? (d = !0) : d && ((v = l), (d = !1));
              const e = s.autoplay.paused ? l : w + v - new Date().getTime();
              (s.autoplay.timeLeft = e),
                n('autoplayTimeLeft', e, e / g),
                (i = requestAnimationFrame(() => {
                  y();
                }));
            },
            x = (e) => {
              if (s.destroyed || !s.autoplay.running) return;
              cancelAnimationFrame(i), y();
              let a = void 0 === e ? s.params.autoplay.delay : e;
              (g = s.params.autoplay.delay), (v = s.params.autoplay.delay);
              const r = (() => {
                let e;
                if (
                  ((e =
                    s.virtual && s.params.virtual.enabled
                      ? s.slides.filter((e) => e.classList.contains('swiper-slide-active'))[0]
                      : s.slides[s.activeIndex]),
                  e)
                )
                  return parseInt(e.getAttribute('data-swiper-autoplay'), 10);
              })();
              !Number.isNaN(r) && r > 0 && void 0 === e && ((a = r), (g = r), (v = r)), (l = a);
              const o = s.params.speed,
                d = () => {
                  s &&
                    !s.destroyed &&
                    (s.params.autoplay.reverseDirection
                      ? !s.isBeginning || s.params.loop || s.params.rewind
                        ? (s.slidePrev(o, !0, !0), n('autoplay'))
                        : s.params.autoplay.stopOnLastSlide ||
                          (s.slideTo(s.slides.length - 1, o, !0, !0), n('autoplay'))
                      : !s.isEnd || s.params.loop || s.params.rewind
                      ? (s.slideNext(o, !0, !0), n('autoplay'))
                      : s.params.autoplay.stopOnLastSlide ||
                        (s.slideTo(0, o, !0, !0), n('autoplay')),
                    s.params.cssMode &&
                      ((w = new Date().getTime()),
                      requestAnimationFrame(() => {
                        x();
                      })));
                };
              return (
                a > 0
                  ? (clearTimeout(t),
                    (t = setTimeout(() => {
                      d();
                    }, a)))
                  : requestAnimationFrame(() => {
                      d();
                    }),
                a
              );
            },
            E = () => {
              (s.autoplay.running = !0), x(), n('autoplayStart');
            },
            S = () => {
              (s.autoplay.running = !1),
                clearTimeout(t),
                cancelAnimationFrame(i),
                n('autoplayStop');
            },
            A = (e, i) => {
              if (s.destroyed || !s.autoplay.running) return;
              clearTimeout(t), e || (f = !0);
              const a = () => {
                n('autoplayPause'),
                  s.params.autoplay.waitForTransition
                    ? s.wrapperEl.addEventListener('transitionend', b)
                    : T();
              };
              if (((s.autoplay.paused = !0), i))
                return m && (l = s.params.autoplay.delay), (m = !1), void a();
              const r = l || s.params.autoplay.delay;
              (l = r - (new Date().getTime() - w)),
                (s.isEnd && l < 0 && !s.params.loop) || (l < 0 && (l = 0), a());
            },
            T = () => {
              (s.isEnd && l < 0 && !s.params.loop) ||
                s.destroyed ||
                !s.autoplay.running ||
                ((w = new Date().getTime()),
                f ? ((f = !1), x(l)) : x(),
                (s.autoplay.paused = !1),
                n('autoplayResume'));
            },
            M = () => {
              if (s.destroyed || !s.autoplay.running) return;
              const e = h();
              'hidden' === e.visibilityState && ((f = !0), A(!0)),
                'visible' === e.visibilityState && T();
            },
            C = (e) => {
              'mouse' === e.pointerType && ((f = !0), s.animating || s.autoplay.paused || A(!0));
            },
            P = (e) => {
              'mouse' === e.pointerType && s.autoplay.paused && T();
            };
          r('init', () => {
            s.params.autoplay.enabled &&
              (s.params.autoplay.pauseOnMouseEnter &&
                (s.el.addEventListener('pointerenter', C),
                s.el.addEventListener('pointerleave', P)),
              h().addEventListener('visibilitychange', M),
              (w = new Date().getTime()),
              E());
          }),
            r('destroy', () => {
              s.el.removeEventListener('pointerenter', C),
                s.el.removeEventListener('pointerleave', P),
                h().removeEventListener('visibilitychange', M),
                s.autoplay.running && S();
            }),
            r('beforeTransitionStart', (e, t, i) => {
              !s.destroyed &&
                s.autoplay.running &&
                (i || !s.params.autoplay.disableOnInteraction ? A(!0, !0) : S());
            }),
            r('sliderFirstMove', () => {
              !s.destroyed &&
                s.autoplay.running &&
                (s.params.autoplay.disableOnInteraction
                  ? S()
                  : ((p = !0),
                    (c = !1),
                    (f = !1),
                    (u = setTimeout(() => {
                      (f = !0), (c = !0), A(!0);
                    }, 200))));
            }),
            r('touchEnd', () => {
              if (!s.destroyed && s.autoplay.running && p) {
                if ((clearTimeout(u), clearTimeout(t), s.params.autoplay.disableOnInteraction))
                  return (c = !1), void (p = !1);
                c && s.params.cssMode && T(), (c = !1), (p = !1);
              }
            }),
            r('slideChange', () => {
              !s.destroyed && s.autoplay.running && (m = !0);
            }),
            Object.assign(s.autoplay, { start: E, stop: S, pause: A, resume: T });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s } = e;
          i({
            thumbs: {
              swiper: null,
              multipleActiveThumbs: !0,
              autoScrollOffset: 0,
              slideThumbActiveClass: 'swiper-slide-thumb-active',
              thumbsContainerClass: 'swiper-thumbs',
            },
          });
          let a = !1,
            r = !1;
          function n() {
            const e = t.thumbs.swiper;
            if (!e || e.destroyed) return;
            const i = e.clickedIndex,
              s = e.clickedSlide;
            if (s && s.classList.contains(t.params.thumbs.slideThumbActiveClass)) return;
            if (null == i) return;
            let a;
            (a = e.params.loop
              ? parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)
              : i),
              t.params.loop ? t.slideToLoop(a) : t.slideTo(a);
          }
          function o() {
            const { thumbs: e } = t.params;
            if (a) return !1;
            a = !0;
            const i = t.constructor;
            if (e.swiper instanceof i)
              (t.thumbs.swiper = e.swiper),
                Object.assign(t.thumbs.swiper.originalParams, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }),
                Object.assign(t.thumbs.swiper.params, {
                  watchSlidesProgress: !0,
                  slideToClickedSlide: !1,
                }),
                t.thumbs.swiper.update();
            else if (y(e.swiper)) {
              const s = Object.assign({}, e.swiper);
              Object.assign(s, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
                (t.thumbs.swiper = new i(s)),
                (r = !0);
            }
            return (
              t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),
              t.thumbs.swiper.on('tap', n),
              !0
            );
          }
          function l(e) {
            const i = t.thumbs.swiper;
            if (!i || i.destroyed) return;
            const s =
              'auto' === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
            let a = 1;
            const r = t.params.thumbs.slideThumbActiveClass;
            if (
              (t.params.slidesPerView > 1 &&
                !t.params.centeredSlides &&
                (a = t.params.slidesPerView),
              t.params.thumbs.multipleActiveThumbs || (a = 1),
              (a = Math.floor(a)),
              i.slides.forEach((e) => e.classList.remove(r)),
              i.params.loop || (i.params.virtual && i.params.virtual.enabled))
            )
              for (let e = 0; e < a; e += 1)
                T(i.slidesEl, `[data-swiper-slide-index="${t.realIndex + e}"]`).forEach((e) => {
                  e.classList.add(r);
                });
            else
              for (let e = 0; e < a; e += 1)
                i.slides[t.realIndex + e] && i.slides[t.realIndex + e].classList.add(r);
            const n = t.params.thumbs.autoScrollOffset,
              o = n && !i.params.loop;
            if (t.realIndex !== i.realIndex || o) {
              const a = i.activeIndex;
              let r, l;
              if (i.params.loop) {
                const e = i.slides.filter(
                  (e) => e.getAttribute('data-swiper-slide-index') === `${t.realIndex}`,
                )[0];
                (r = i.slides.indexOf(e)), (l = t.activeIndex > t.previousIndex ? 'next' : 'prev');
              } else (r = t.realIndex), (l = r > t.previousIndex ? 'next' : 'prev');
              o && (r += 'next' === l ? n : -1 * n),
                i.visibleSlidesIndexes &&
                  i.visibleSlidesIndexes.indexOf(r) < 0 &&
                  (i.params.centeredSlides
                    ? (r = r > a ? r - Math.floor(s / 2) + 1 : r + Math.floor(s / 2) - 1)
                    : r > a && i.params.slidesPerGroup,
                  i.slideTo(r, e ? 0 : void 0));
            }
          }
          (t.thumbs = { swiper: null }),
            s('beforeInit', () => {
              const { thumbs: e } = t.params;
              if (e && e.swiper)
                if ('string' == typeof e.swiper || e.swiper instanceof HTMLElement) {
                  const i = h(),
                    s = () => {
                      const s = 'string' == typeof e.swiper ? i.querySelector(e.swiper) : e.swiper;
                      if (s && s.swiper) (e.swiper = s.swiper), o(), l(!0);
                      else if (s) {
                        const i = (a) => {
                          (e.swiper = a.detail[0]),
                            s.removeEventListener('init', i),
                            o(),
                            l(!0),
                            e.swiper.update(),
                            t.update();
                        };
                        s.addEventListener('init', i);
                      }
                      return s;
                    },
                    a = () => {
                      t.destroyed || s() || requestAnimationFrame(a);
                    };
                  requestAnimationFrame(a);
                } else o(), l(!0);
            }),
            s('slideChange update resize observerUpdate', () => {
              l();
            }),
            s('setTransition', (e, i) => {
              const s = t.thumbs.swiper;
              s && !s.destroyed && s.setTransition(i);
            }),
            s('beforeDestroy', () => {
              const e = t.thumbs.swiper;
              e && !e.destroyed && r && e.destroy();
            }),
            Object.assign(t.thumbs, { init: o, update: l });
        },
        function (e) {
          let { swiper: t, extendParams: i, emit: s, once: a } = e;
          i({
            freeMode: {
              enabled: !1,
              momentum: !0,
              momentumRatio: 1,
              momentumBounce: !0,
              momentumBounceRatio: 1,
              momentumVelocityRatio: 1,
              sticky: !1,
              minimumVelocity: 0.02,
            },
          }),
            Object.assign(t, {
              freeMode: {
                onTouchStart: function () {
                  if (t.params.cssMode) return;
                  const e = t.getTranslate();
                  t.setTranslate(e),
                    t.setTransition(0),
                    (t.touchEventsData.velocities.length = 0),
                    t.freeMode.onTouchEnd({ currentPos: t.rtl ? t.translate : -t.translate });
                },
                onTouchMove: function () {
                  if (t.params.cssMode) return;
                  const { touchEventsData: e, touches: i } = t;
                  0 === e.velocities.length &&
                    e.velocities.push({
                      position: i[t.isHorizontal() ? 'startX' : 'startY'],
                      time: e.touchStartTime,
                    }),
                    e.velocities.push({
                      position: i[t.isHorizontal() ? 'currentX' : 'currentY'],
                      time: w(),
                    });
                },
                onTouchEnd: function (e) {
                  let { currentPos: i } = e;
                  if (t.params.cssMode) return;
                  const {
                      params: r,
                      wrapperEl: n,
                      rtlTranslate: o,
                      snapGrid: l,
                      touchEventsData: d,
                    } = t,
                    p = w() - d.touchStartTime;
                  if (i < -t.minTranslate()) t.slideTo(t.activeIndex);
                  else if (i > -t.maxTranslate())
                    t.slides.length < l.length
                      ? t.slideTo(l.length - 1)
                      : t.slideTo(t.slides.length - 1);
                  else {
                    if (r.freeMode.momentum) {
                      if (d.velocities.length > 1) {
                        const e = d.velocities.pop(),
                          i = d.velocities.pop(),
                          s = e.position - i.position,
                          a = e.time - i.time;
                        (t.velocity = s / a),
                          (t.velocity /= 2),
                          Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0),
                          (a > 150 || w() - e.time > 300) && (t.velocity = 0);
                      } else t.velocity = 0;
                      (t.velocity *= r.freeMode.momentumVelocityRatio), (d.velocities.length = 0);
                      let e = 1e3 * r.freeMode.momentumRatio;
                      const i = t.velocity * e;
                      let p = t.translate + i;
                      o && (p = -p);
                      let c,
                        u = !1;
                      const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                      let h;
                      if (p < t.maxTranslate())
                        r.freeMode.momentumBounce
                          ? (p + t.maxTranslate() < -m && (p = t.maxTranslate() - m),
                            (c = t.maxTranslate()),
                            (u = !0),
                            (d.allowMomentumBounce = !0))
                          : (p = t.maxTranslate()),
                          r.loop && r.centeredSlides && (h = !0);
                      else if (p > t.minTranslate())
                        r.freeMode.momentumBounce
                          ? (p - t.minTranslate() > m && (p = t.minTranslate() + m),
                            (c = t.minTranslate()),
                            (u = !0),
                            (d.allowMomentumBounce = !0))
                          : (p = t.minTranslate()),
                          r.loop && r.centeredSlides && (h = !0);
                      else if (r.freeMode.sticky) {
                        let e;
                        for (let t = 0; t < l.length; t += 1)
                          if (l[t] > -p) {
                            e = t;
                            break;
                          }
                        (p =
                          Math.abs(l[e] - p) < Math.abs(l[e - 1] - p) || 'next' === t.swipeDirection
                            ? l[e]
                            : l[e - 1]),
                          (p = -p);
                      }
                      if (
                        (h &&
                          a('transitionEnd', () => {
                            t.loopFix();
                          }),
                        0 !== t.velocity)
                      ) {
                        if (
                          ((e = o
                            ? Math.abs((-p - t.translate) / t.velocity)
                            : Math.abs((p - t.translate) / t.velocity)),
                          r.freeMode.sticky)
                        ) {
                          const i = Math.abs((o ? -p : p) - t.translate),
                            s = t.slidesSizesGrid[t.activeIndex];
                          e = i < s ? r.speed : i < 2 * s ? 1.5 * r.speed : 2.5 * r.speed;
                        }
                      } else if (r.freeMode.sticky) return void t.slideToClosest();
                      r.freeMode.momentumBounce && u
                        ? (t.updateProgress(c),
                          t.setTransition(e),
                          t.setTranslate(p),
                          t.transitionStart(!0, t.swipeDirection),
                          (t.animating = !0),
                          z(n, () => {
                            t &&
                              !t.destroyed &&
                              d.allowMomentumBounce &&
                              (s('momentumBounce'),
                              t.setTransition(r.speed),
                              setTimeout(() => {
                                t.setTranslate(c),
                                  z(n, () => {
                                    t && !t.destroyed && t.transitionEnd();
                                  });
                              }, 0));
                          }))
                        : t.velocity
                        ? (s('_freeModeNoMomentumRelease'),
                          t.updateProgress(p),
                          t.setTransition(e),
                          t.setTranslate(p),
                          t.transitionStart(!0, t.swipeDirection),
                          t.animating ||
                            ((t.animating = !0),
                            z(n, () => {
                              t && !t.destroyed && t.transitionEnd();
                            })))
                        : t.updateProgress(p),
                        t.updateActiveIndex(),
                        t.updateSlidesClasses();
                    } else {
                      if (r.freeMode.sticky) return void t.slideToClosest();
                      r.freeMode && s('_freeModeNoMomentumRelease');
                    }
                    (!r.freeMode.momentum || p >= r.longSwipesMs) &&
                      (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                  }
                },
              },
            });
        },
        function (e) {
          let t,
            i,
            s,
            a,
            { swiper: r, extendParams: n, on: o } = e;
          n({ grid: { rows: 1, fill: 'column' } });
          const l = () => {
            let e = r.params.spaceBetween;
            return (
              'string' == typeof e && e.indexOf('%') >= 0
                ? (e = (parseFloat(e.replace('%', '')) / 100) * r.size)
                : 'string' == typeof e && (e = parseFloat(e)),
              e
            );
          };
          o('init', () => {
            a = r.params.grid && r.params.grid.rows > 1;
          }),
            o('update', () => {
              const { params: e, el: t } = r,
                i = e.grid && e.grid.rows > 1;
              a && !i
                ? (t.classList.remove(
                    `${e.containerModifierClass}grid`,
                    `${e.containerModifierClass}grid-column`,
                  ),
                  (s = 1),
                  r.emitContainerClasses())
                : !a &&
                  i &&
                  (t.classList.add(`${e.containerModifierClass}grid`),
                  'column' === e.grid.fill &&
                    t.classList.add(`${e.containerModifierClass}grid-column`),
                  r.emitContainerClasses()),
                (a = i);
            }),
            (r.grid = {
              initSlides: (e) => {
                const { slidesPerView: a } = r.params,
                  { rows: n, fill: o } = r.params.grid;
                (s = Math.floor(e / n)),
                  (t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n),
                  'auto' !== a && 'row' === o && (t = Math.max(t, a * n)),
                  (i = t / n);
              },
              updateSlide: (e, a, n, o) => {
                const { slidesPerGroup: d } = r.params,
                  p = l(),
                  { rows: c, fill: u } = r.params.grid;
                let m, h, f;
                if ('row' === u && d > 1) {
                  const i = Math.floor(e / (d * c)),
                    s = e - c * d * i,
                    r = 0 === i ? d : Math.min(Math.ceil((n - i * c * d) / c), d);
                  (f = Math.floor(s / r)),
                    (h = s - f * r + i * d),
                    (m = h + (f * t) / c),
                    (a.style.order = m);
                } else
                  'column' === u
                    ? ((h = Math.floor(e / c)),
                      (f = e - h * c),
                      (h > s || (h === s && f === c - 1)) &&
                        ((f += 1), f >= c && ((f = 0), (h += 1))))
                    : ((f = Math.floor(e / i)), (h = e - f * i));
                (a.row = f),
                  (a.column = h),
                  (a.style[o('margin-top')] = 0 !== f ? p && `${p}px` : '');
              },
              updateWrapperSize: (e, i, s) => {
                const { centeredSlides: a, roundLengths: n } = r.params,
                  o = l(),
                  { rows: d } = r.params.grid;
                if (
                  ((r.virtualSize = (e + o) * t),
                  (r.virtualSize = Math.ceil(r.virtualSize / d) - o),
                  (r.wrapperEl.style[s('width')] = `${r.virtualSize + o}px`),
                  a)
                ) {
                  const e = [];
                  for (let t = 0; t < i.length; t += 1) {
                    let s = i[t];
                    n && (s = Math.floor(s)), i[t] < r.virtualSize + i[0] && e.push(s);
                  }
                  i.splice(0, i.length), i.push(...e);
                }
              },
            });
        },
        function (e) {
          let { swiper: t } = e;
          Object.assign(t, {
            appendSlide: ce.bind(t),
            prependSlide: ue.bind(t),
            addSlide: me.bind(t),
            removeSlide: he.bind(t),
            removeAllSlides: fe.bind(t),
          });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s } = e;
          i({ fadeEffect: { crossFade: !1 } }),
            ge({
              effect: 'fade',
              swiper: t,
              on: s,
              setTranslate: () => {
                const { slides: e } = t;
                t.params.fadeEffect;
                for (let i = 0; i < e.length; i += 1) {
                  const e = t.slides[i];
                  let s = -e.swiperSlideOffset;
                  t.params.virtualTranslate || (s -= t.translate);
                  let a = 0;
                  t.isHorizontal() || ((a = s), (s = 0));
                  const r = t.params.fadeEffect.crossFade
                      ? Math.max(1 - Math.abs(e.progress), 0)
                      : 1 + Math.min(Math.max(e.progress, -1), 0),
                    n = ve(0, e);
                  (n.style.opacity = r), (n.style.transform = `translate3d(${s}px, ${a}px, 0px)`);
                }
              },
              setTransition: (e) => {
                const i = t.slides.map((e) => A(e));
                i.forEach((t) => {
                  t.style.transitionDuration = `${e}ms`;
                }),
                  we({ swiper: t, duration: e, transformElements: i, allSlides: !0 });
              },
              overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !t.params.cssMode,
              }),
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s } = e;
          i({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } });
          const a = (e, t, i) => {
            let s = i
                ? e.querySelector('.swiper-slide-shadow-left')
                : e.querySelector('.swiper-slide-shadow-top'),
              a = i
                ? e.querySelector('.swiper-slide-shadow-right')
                : e.querySelector('.swiper-slide-shadow-bottom');
            s ||
              ((s = M(
                'div',
                ('swiper-slide-shadow-cube swiper-slide-shadow-' + (i ? 'left' : 'top')).split(' '),
              )),
              e.append(s)),
              a ||
                ((a = M(
                  'div',
                  (
                    'swiper-slide-shadow-cube swiper-slide-shadow-' + (i ? 'right' : 'bottom')
                  ).split(' '),
                )),
                e.append(a)),
              s && (s.style.opacity = Math.max(-t, 0)),
              a && (a.style.opacity = Math.max(t, 0));
          };
          ge({
            effect: 'cube',
            swiper: t,
            on: s,
            setTranslate: () => {
              const {
                  el: e,
                  wrapperEl: i,
                  slides: s,
                  width: r,
                  height: n,
                  rtlTranslate: o,
                  size: l,
                  browser: d,
                } = t,
                p = t.params.cubeEffect,
                c = t.isHorizontal(),
                u = t.virtual && t.params.virtual.enabled;
              let m,
                h = 0;
              p.shadow &&
                (c
                  ? ((m = t.wrapperEl.querySelector('.swiper-cube-shadow')),
                    m || ((m = M('div', 'swiper-cube-shadow')), t.wrapperEl.append(m)),
                    (m.style.height = `${r}px`))
                  : ((m = e.querySelector('.swiper-cube-shadow')),
                    m || ((m = M('div', 'swiper-cube-shadow')), e.append(m))));
              for (let e = 0; e < s.length; e += 1) {
                const t = s[e];
                let i = e;
                u && (i = parseInt(t.getAttribute('data-swiper-slide-index'), 10));
                let r = 90 * i,
                  n = Math.floor(r / 360);
                o && ((r = -r), (n = Math.floor(-r / 360)));
                const d = Math.max(Math.min(t.progress, 1), -1);
                let m = 0,
                  f = 0,
                  g = 0;
                i % 4 == 0
                  ? ((m = 4 * -n * l), (g = 0))
                  : (i - 1) % 4 == 0
                  ? ((m = 0), (g = 4 * -n * l))
                  : (i - 2) % 4 == 0
                  ? ((m = l + 4 * n * l), (g = l))
                  : (i - 3) % 4 == 0 && ((m = -l), (g = 3 * l + 4 * l * n)),
                  o && (m = -m),
                  c || ((f = m), (m = 0));
                const v = `rotateX(${c ? 0 : -r}deg) rotateY(${
                  c ? r : 0
                }deg) translate3d(${m}px, ${f}px, ${g}px)`;
                d <= 1 && d > -1 && ((h = 90 * i + 90 * d), o && (h = 90 * -i - 90 * d)),
                  (t.style.transform = v),
                  p.slideShadows && a(t, d, c);
              }
              if (
                ((i.style.transformOrigin = `50% 50% -${l / 2}px`),
                (i.style['-webkit-transform-origin'] = `50% 50% -${l / 2}px`),
                p.shadow)
              )
                if (c)
                  m.style.transform = `translate3d(0px, ${r / 2 + p.shadowOffset}px, ${
                    -r / 2
                  }px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`;
                else {
                  const e = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                    t =
                      1.5 -
                      (Math.sin((2 * e * Math.PI) / 360) / 2 +
                        Math.cos((2 * e * Math.PI) / 360) / 2),
                    i = p.shadowScale,
                    s = p.shadowScale / t,
                    a = p.shadowOffset;
                  m.style.transform = `scale3d(${i}, 1, ${s}) translate3d(0px, ${n / 2 + a}px, ${
                    -n / 2 / s
                  }px) rotateX(-90deg)`;
                }
              const f = (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -l / 2 : 0;
              (i.style.transform = `translate3d(0px,0,${f}px) rotateX(${
                t.isHorizontal() ? 0 : h
              }deg) rotateY(${t.isHorizontal() ? -h : 0}deg)`),
                i.style.setProperty('--swiper-cube-translate-z', `${f}px`);
            },
            setTransition: (e) => {
              const { el: i, slides: s } = t;
              if (
                (s.forEach((t) => {
                  (t.style.transitionDuration = `${e}ms`),
                    t
                      .querySelectorAll(
                        '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
                      )
                      .forEach((t) => {
                        t.style.transitionDuration = `${e}ms`;
                      });
                }),
                t.params.cubeEffect.shadow && !t.isHorizontal())
              ) {
                const t = i.querySelector('.swiper-cube-shadow');
                t && (t.style.transitionDuration = `${e}ms`);
              }
            },
            recreateShadows: () => {
              const e = t.isHorizontal();
              t.slides.forEach((t) => {
                const i = Math.max(Math.min(t.progress, 1), -1);
                a(t, i, e);
              });
            },
            getEffectParams: () => t.params.cubeEffect,
            perspective: () => !0,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0,
            }),
          });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s } = e;
          i({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
          const a = (e, i) => {
            let s = t.isHorizontal()
                ? e.querySelector('.swiper-slide-shadow-left')
                : e.querySelector('.swiper-slide-shadow-top'),
              a = t.isHorizontal()
                ? e.querySelector('.swiper-slide-shadow-right')
                : e.querySelector('.swiper-slide-shadow-bottom');
            s || (s = be('flip', e, t.isHorizontal() ? 'left' : 'top')),
              a || (a = be('flip', e, t.isHorizontal() ? 'right' : 'bottom')),
              s && (s.style.opacity = Math.max(-i, 0)),
              a && (a.style.opacity = Math.max(i, 0));
          };
          ge({
            effect: 'flip',
            swiper: t,
            on: s,
            setTranslate: () => {
              const { slides: e, rtlTranslate: i } = t,
                s = t.params.flipEffect;
              for (let r = 0; r < e.length; r += 1) {
                const n = e[r];
                let o = n.progress;
                t.params.flipEffect.limitRotation && (o = Math.max(Math.min(n.progress, 1), -1));
                const l = n.swiperSlideOffset;
                let d = -180 * o,
                  p = 0,
                  c = t.params.cssMode ? -l - t.translate : -l,
                  u = 0;
                t.isHorizontal() ? i && (d = -d) : ((u = c), (c = 0), (p = -d), (d = 0)),
                  (n.style.zIndex = -Math.abs(Math.round(o)) + e.length),
                  s.slideShadows && a(n, o);
                const m = `translate3d(${c}px, ${u}px, 0px) rotateX(${p}deg) rotateY(${d}deg)`;
                ve(0, n).style.transform = m;
              }
            },
            setTransition: (e) => {
              const i = t.slides.map((e) => A(e));
              i.forEach((t) => {
                (t.style.transitionDuration = `${e}ms`),
                  t
                    .querySelectorAll(
                      '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
                    )
                    .forEach((t) => {
                      t.style.transitionDuration = `${e}ms`;
                    });
              }),
                we({ swiper: t, duration: e, transformElements: i });
            },
            recreateShadows: () => {
              t.params.flipEffect,
                t.slides.forEach((e) => {
                  let i = e.progress;
                  t.params.flipEffect.limitRotation && (i = Math.max(Math.min(e.progress, 1), -1)),
                    a(e, i);
                });
            },
            getEffectParams: () => t.params.flipEffect,
            perspective: () => !0,
            overwriteParams: () => ({
              slidesPerView: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s } = e;
          i({
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              scale: 1,
              modifier: 1,
              slideShadows: !0,
            },
          }),
            ge({
              effect: 'coverflow',
              swiper: t,
              on: s,
              setTranslate: () => {
                const { width: e, height: i, slides: s, slidesSizesGrid: a } = t,
                  r = t.params.coverflowEffect,
                  n = t.isHorizontal(),
                  o = t.translate,
                  l = n ? e / 2 - o : i / 2 - o,
                  d = n ? r.rotate : -r.rotate,
                  p = r.depth;
                for (let e = 0, t = s.length; e < t; e += 1) {
                  const t = s[e],
                    i = a[e],
                    o = (l - t.swiperSlideOffset - i / 2) / i,
                    c = 'function' == typeof r.modifier ? r.modifier(o) : o * r.modifier;
                  let u = n ? d * c : 0,
                    m = n ? 0 : d * c,
                    h = -p * Math.abs(c),
                    f = r.stretch;
                  'string' == typeof f &&
                    -1 !== f.indexOf('%') &&
                    (f = (parseFloat(r.stretch) / 100) * i);
                  let g = n ? 0 : f * c,
                    v = n ? f * c : 0,
                    w = 1 - (1 - r.scale) * Math.abs(c);
                  Math.abs(v) < 0.001 && (v = 0),
                    Math.abs(g) < 0.001 && (g = 0),
                    Math.abs(h) < 0.001 && (h = 0),
                    Math.abs(u) < 0.001 && (u = 0),
                    Math.abs(m) < 0.001 && (m = 0),
                    Math.abs(w) < 0.001 && (w = 0);
                  const b = `translate3d(${v}px,${g}px,${h}px)  rotateX(${m}deg) rotateY(${u}deg) scale(${w})`;
                  if (
                    ((ve(0, t).style.transform = b),
                    (t.style.zIndex = 1 - Math.abs(Math.round(c))),
                    r.slideShadows)
                  ) {
                    let e = n
                        ? t.querySelector('.swiper-slide-shadow-left')
                        : t.querySelector('.swiper-slide-shadow-top'),
                      i = n
                        ? t.querySelector('.swiper-slide-shadow-right')
                        : t.querySelector('.swiper-slide-shadow-bottom');
                    e || (e = be('coverflow', t, n ? 'left' : 'top')),
                      i || (i = be('coverflow', t, n ? 'right' : 'bottom')),
                      e && (e.style.opacity = c > 0 ? c : 0),
                      i && (i.style.opacity = -c > 0 ? -c : 0);
                  }
                }
              },
              setTransition: (e) => {
                t.slides
                  .map((e) => A(e))
                  .forEach((t) => {
                    (t.style.transitionDuration = `${e}ms`),
                      t
                        .querySelectorAll(
                          '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left',
                        )
                        .forEach((t) => {
                          t.style.transitionDuration = `${e}ms`;
                        });
                  });
              },
              perspective: () => !0,
              overwriteParams: () => ({ watchSlidesProgress: !0 }),
            });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s } = e;
          i({
            creativeEffect: {
              limitProgress: 1,
              shadowPerProgress: !1,
              progressMultiplier: 1,
              perspective: !0,
              prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
              next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
            },
          });
          const a = (e) => ('string' == typeof e ? e : `${e}px`);
          ge({
            effect: 'creative',
            swiper: t,
            on: s,
            setTranslate: () => {
              const { slides: e, wrapperEl: i, slidesSizesGrid: s } = t,
                r = t.params.creativeEffect,
                { progressMultiplier: n } = r,
                o = t.params.centeredSlides;
              if (o) {
                const e = s[0] / 2 - t.params.slidesOffsetBefore || 0;
                i.style.transform = `translateX(calc(50% - ${e}px))`;
              }
              for (let i = 0; i < e.length; i += 1) {
                const s = e[i],
                  l = s.progress,
                  d = Math.min(Math.max(s.progress, -r.limitProgress), r.limitProgress);
                let p = d;
                o ||
                  (p = Math.min(Math.max(s.originalProgress, -r.limitProgress), r.limitProgress));
                const c = s.swiperSlideOffset,
                  u = [t.params.cssMode ? -c - t.translate : -c, 0, 0],
                  m = [0, 0, 0];
                let h = !1;
                t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
                let f = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
                d < 0 ? ((f = r.next), (h = !0)) : d > 0 && ((f = r.prev), (h = !0)),
                  u.forEach((e, t) => {
                    u[t] = `calc(${e}px + (${a(f.translate[t])} * ${Math.abs(d * n)}))`;
                  }),
                  m.forEach((e, t) => {
                    m[t] = f.rotate[t] * Math.abs(d * n);
                  }),
                  (s.style.zIndex = -Math.abs(Math.round(l)) + e.length);
                const g = u.join(', '),
                  v = `rotateX(${m[0]}deg) rotateY(${m[1]}deg) rotateZ(${m[2]}deg)`,
                  w =
                    p < 0
                      ? `scale(${1 + (1 - f.scale) * p * n})`
                      : `scale(${1 - (1 - f.scale) * p * n})`,
                  b = p < 0 ? 1 + (1 - f.opacity) * p * n : 1 - (1 - f.opacity) * p * n,
                  y = `translate3d(${g}) ${v} ${w}`;
                if ((h && f.shadow) || !h) {
                  let e = s.querySelector('.swiper-slide-shadow');
                  if ((!e && f.shadow && (e = be('creative', s)), e)) {
                    const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                    e.style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                  }
                }
                const x = ve(0, s);
                (x.style.transform = y),
                  (x.style.opacity = b),
                  f.origin && (x.style.transformOrigin = f.origin);
              }
            },
            setTransition: (e) => {
              const i = t.slides.map((e) => A(e));
              i.forEach((t) => {
                (t.style.transitionDuration = `${e}ms`),
                  t.querySelectorAll('.swiper-slide-shadow').forEach((t) => {
                    t.style.transitionDuration = `${e}ms`;
                  });
              }),
                we({ swiper: t, duration: e, transformElements: i, allSlides: !0 });
            },
            perspective: () => t.params.creativeEffect.perspective,
            overwriteParams: () => ({
              watchSlidesProgress: !0,
              virtualTranslate: !t.params.cssMode,
            }),
          });
        },
        function (e) {
          let { swiper: t, extendParams: i, on: s } = e;
          i({
            cardsEffect: { slideShadows: !0, rotate: !0, perSlideRotate: 2, perSlideOffset: 8 },
          }),
            ge({
              effect: 'cards',
              swiper: t,
              on: s,
              setTranslate: () => {
                const { slides: e, activeIndex: i, rtlTranslate: s } = t,
                  a = t.params.cardsEffect,
                  { startTranslate: r, isTouched: n } = t.touchEventsData,
                  o = s ? -t.translate : t.translate;
                for (let l = 0; l < e.length; l += 1) {
                  const d = e[l],
                    p = d.progress,
                    c = Math.min(Math.max(p, -4), 4);
                  let u = d.swiperSlideOffset;
                  t.params.centeredSlides &&
                    !t.params.cssMode &&
                    (t.wrapperEl.style.transform = `translateX(${t.minTranslate()}px)`),
                    t.params.centeredSlides && t.params.cssMode && (u -= e[0].swiperSlideOffset);
                  let m = t.params.cssMode ? -u - t.translate : -u,
                    h = 0;
                  const f = -100 * Math.abs(c);
                  let g = 1,
                    v = -a.perSlideRotate * c,
                    w = a.perSlideOffset - 0.75 * Math.abs(c);
                  const b = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                    y =
                      (b === i || b === i - 1) &&
                      c > 0 &&
                      c < 1 &&
                      (n || t.params.cssMode) &&
                      o < r,
                    x =
                      (b === i || b === i + 1) &&
                      c < 0 &&
                      c > -1 &&
                      (n || t.params.cssMode) &&
                      o > r;
                  if (y || x) {
                    const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                    (v += -28 * c * e),
                      (g += -0.5 * e),
                      (w += 96 * e),
                      (h = -25 * e * Math.abs(c) + '%');
                  }
                  if (
                    ((m =
                      c < 0
                        ? `calc(${m}px ${s ? '-' : '+'} (${w * Math.abs(c)}%))`
                        : c > 0
                        ? `calc(${m}px ${s ? '-' : '+'} (-${w * Math.abs(c)}%))`
                        : `${m}px`),
                    !t.isHorizontal())
                  ) {
                    const e = h;
                    (h = m), (m = e);
                  }
                  const E = c < 0 ? '' + (1 + (1 - g) * c) : '' + (1 - (1 - g) * c),
                    S = `\n        translate3d(${m}, ${h}, ${f}px)\n        rotateZ(${
                      a.rotate ? (s ? -v : v) : 0
                    }deg)\n        scale(${E})\n      `;
                  if (a.slideShadows) {
                    let e = d.querySelector('.swiper-slide-shadow');
                    e || (e = be('cards', d)),
                      e && (e.style.opacity = Math.min(Math.max((Math.abs(c) - 0.5) / 0.5, 0), 1));
                  }
                  (d.style.zIndex = -Math.abs(Math.round(p)) + e.length),
                    (ve(0, d).style.transform = S);
                }
              },
              setTransition: (e) => {
                const i = t.slides.map((e) => A(e));
                i.forEach((t) => {
                  (t.style.transitionDuration = `${e}ms`),
                    t.querySelectorAll('.swiper-slide-shadow').forEach((t) => {
                      t.style.transitionDuration = `${e}ms`;
                    });
                }),
                  we({ swiper: t, duration: e, transformElements: i });
              },
              perspective: () => !0,
              overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !t.params.cssMode,
              }),
            });
        },
      ];
      le.use(ye);
      var xe = i(379),
        Ee = i.n(xe),
        Se = i(795),
        Ae = i.n(Se),
        Te = i(569),
        Me = i.n(Te),
        Ce = i(565),
        Pe = i.n(Ce),
        Le = i(216),
        ke = i.n(Le),
        ze = i(589),
        Ie = i.n(ze),
        Oe = i(541),
        $e = {};
      ($e.styleTagTransform = Ie()),
        ($e.setAttributes = Pe()),
        ($e.insert = Me().bind(null, 'head')),
        ($e.domAPI = Ae()),
        ($e.insertStyleElement = ke()),
        Ee()(Oe.Z, $e),
        Oe.Z && Oe.Z.locals && Oe.Z.locals,
        document.addEventListener('DOMContentLoaded', function () {
          p && p();
          const e = document.getElementById('date');
          e &&
            new easepick.create({
              element: e,
              css: [
                'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
                './css/style.css',
              ],
              zIndex: 10,
              lang: 'ru-RU',
              grid: 1,
              calendars: 2,
              header: '',
              RangePlugin: { strict: !1, tooltip: !1 },
              plugins: ['AmpPlugin', 'RangePlugin', 'LockPlugin'],
            });
          const t = document.querySelector('.description__link'),
            i = document.querySelectorAll('.description .hidden');
          t &&
            t.addEventListener('click', (e) => {
              t.classList.toggle('description__link--close'),
                t.classList.contains('description__link--open')
                  ? (t.classList.remove('description__link--open'),
                    t.classList.add('description__link--close'),
                    i.forEach((e) => e.classList.add('hidden')))
                  : (t.classList.add('description__link--open'),
                    t.classList.remove('description__link--close'),
                    i.forEach((e) => e.classList.remove('hidden')));
            });
          const s = document.querySelector('.swiper');
          if (
            (s &&
              new le(s, {
                loop: !0,
                parallax: !0,
                speed: 1e3,
                spaceBetween: 10,
                keyboard: { enabled: !0 },
                pagination: { el: '.swiper-pagination', clickable: !0 },
                navigation: { nextEl: '#sliderNext', prevEl: '#sliderPrev' },
              }),
            d)
          ) {
            const e = document.querySelector('.modal-close');
            d.init({
              openTrigger: 'data-custom-open',
              closeTrigger: 'data-custom-close',
              disableScroll: !0,
            }),
              e && e.addEventListener('click', () => d.close('modal-1')),
              document.querySelectorAll('.search-card__link').forEach((e) => {
                e.addEventListener('click', () => {
                  d.show('modal-1');
                });
              });
          }
          document.querySelector('#map') &&
            ymaps.ready(function () {
              new ymaps.Map('map', { center: [44.316548, 38.70377], zoom: 16 }) &&
                ymaps.modules.require(['Placemark', 'Circle'], function (e, t) {
                  new e([55.37, 35.45]);
                });
            });
        });
    })();
})();



