import GLightbox from "glightbox"

export const load = function () {

  const lightboxGalleryButton = document.querySelectorAll(".gallery-btn")

  lightboxGalleryButton.forEach(button => {
    button
      .addEventListener("click", function () {

        const elements = JSON.parse(decodeURIComponent(this.dataset.elements))

        const lightboxGallery = GLightbox({
            elements: elements
        })
        lightboxGallery.open()
      })
  })

}

export default load;
