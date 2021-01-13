const swup = require("./components/swup")
const lazyBg = require("./components/lazyBg")
const animations = require("./components/animations")
const form = require('./components/form')
const lightboxGallery = require("./components/lightboxGallery");

export const run = function () {
    form.load()
    swup.load()
    lazyBg.load()
    animations.load()
    lightboxGallery.load()
}

export default run