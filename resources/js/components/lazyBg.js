export const load = function() {
  if (!document.querySelector('.lazyload')) {
    return
  }

  const loadBg = function(target, bestImage, betterImage, okImage, fallbackImage) {
    var bg = bestImage ? bestImage : betterImage ? betterImage : okImage ? okImage : fallbackImage

    target.style.backgroundImage = 'url(' + bg + ')'
  }

  document.addEventListener('lazybeforeunveil', function(e) {
    var bgSm = e.target.getAttribute('data-bgsm')
    var bgMd = e.target.getAttribute('data-bgmd')
    var bgLg = e.target.getAttribute('data-bglg')
    var bgXl = e.target.getAttribute('data-bgxl')
    var bg = e.target.getAttribute('data-bg')

    if (!bgSm && !bgMd && !bgLg && !bgXl && !bg) {
      return
    }

    if (window.innerWidth > 1280) {
      loadBg(e.target, bgXl, bgLg, bgSm, bg)
    } else if (window.innerWidth > 1024) {
      loadBg(e.target, bgLg, bgSm, bgXl, bg)
    } else if (window.innerWidth > 768) {
      loadBg(e.target, bgMd, bgSm, bgXl, bg)
    } else {
      loadBg(e.target, bgSm, bgLg, bgXl, bg)
    }
  })
}

export default load
