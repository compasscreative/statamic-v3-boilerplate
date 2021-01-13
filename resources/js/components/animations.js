import { gsap } from "gsap"
import { ExpoScaleEase } from "gsap/EasePack"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const load = function () {

    gsap.registerPlugin(ExpoScaleEase, ScrollTrigger)

    ScrollTrigger.create({
        start: "top -120",
        end: 99999,
        toggleClass: {
            className: "not-top",
            targets: [".site-header", ".mobile-nav"]
        }
    })

    ScrollTrigger.batch(".stepped-fade-in", {
        interval: 0.25, // time window (in seconds) for batching to occur.
        batchMax: 5,   // maximum batch size (targets)
        once: true,
        start: "50px bottom",
        onEnter: batch => {
            gsap.to(batch, {
                opacity: 1,
                duration: 1,
                stagger: { each: 0.5 }
            })
        }
    })

    gsap.to(".main-nav-item", { opacity: 100, duration: 2, delay: 2, stagger: .5 })

    gsap.to(".hero-bg", {
        yPercent: 25,
        scrollTrigger: {
            trigger: ".hero",
            // start: "top bottom", // the default values
            // end: "bottom top",
            scrub: true
        }
    })

    gsap.fromTo(
        ".hero-bg-image",
        {
            opacity: 0
        },
        {
            opacity: 1,
            ease: "power4",
            duration: 5,
            delay: 2.5
        }
    )

    gsap.utils.toArray(".parallax-section").forEach(container => {
        let tl = gsap.timeline()

        tl.to(container.querySelector(".parallax-offset-25"), {
            yPercent: 25,
            // ease: "power4",
            scrollTrigger: {
                trigger: container,
                start: "top bottom", // the default values
                end: "bottom top",
                scrub: true
            }
        })
    })

    gsap.utils.toArray(".parallax-section").forEach(container => {
        let tl = gsap.timeline()

        tl.to(container.querySelector(".parallax-offset-reverse-25"), {
            yPercent: -25,
            // ease: "power4",
            scrollTrigger: {
                trigger: container,
                start: "top bottom", // the default values
                end: "bottom top",
                scrub: true
            }
        })
    })

}