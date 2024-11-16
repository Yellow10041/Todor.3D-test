import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

import {gsapDelay} from "./gsapDelay"

const reveal = (element: any, marker?: boolean) => {
    gsap.registerPlugin(ScrollTrigger)
    let tl: gsap.core.Timeline

    tl = gsap
        .timeline({
            paused: true,
            defaults: {},
            delay: 0.1,
            scrollTrigger: {
                trigger: Array.isArray(element) ? element[0] : element,
                start: `top-=50px top+=100%`,
                toggleActions: "play none none reset",
                markers: marker,
            },
        })
        .fromTo(
            element,
            {
                attr: {
                    "data-status": "hide",
                },
            },
            {
                attr: {
                    "data-status": "show",
                },
                stagger: 0.1,
            },
        )

    return () => tl.revert()
}

export const revealAnimationBlock = (
    element: any,
    isOther?: boolean,
    marker?: boolean,
) => {
    gsapDelay(() => {
        if (Array.isArray(element)) {
            if (isOther) {
                element.map((e) => {
                    const element = e as HTMLElement

                    element.classList.add("revealAnimationBlock")

                    reveal(element, marker)
                })
            } else {
                element.map((e) => {
                    const element = e as HTMLElement

                    element.classList.add("revealAnimationBlock")
                })

                reveal(element, marker)
            }
        } else {
            element.classList.add("revealAnimationBlock")

            reveal(element, marker)
        }
    })
}
