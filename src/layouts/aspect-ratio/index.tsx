"use client"

import {FC, useEffect} from "react"

interface IAspectRatio {}

export const AspectRatio: FC<IAspectRatio> = () => {
    useEffect(() => {
        function setAspectRatio() {
            const viewportWidth = window.innerWidth
            const viewportHeight = window.innerHeight

            // const aspectRatio = 16 / 9
            const aspectRatio = 2

            const currentRatio = viewportWidth / viewportHeight

            // console.log(currentRatio, aspectRatio)

            if (currentRatio > aspectRatio) {
                // const staticViewport = `${(aspectRatio * (viewportWidth / 100)) / currentRatio}px`
                const staticViewport = `${(aspectRatio * 1) / currentRatio}vw`

                console.log(staticViewport)

                document.documentElement.style.setProperty(
                    "--aspect-width",
                    staticViewport,
                )
            } else {
                document.documentElement.style.removeProperty("--aspect-width")
            }
        }

        setAspectRatio()

        window.addEventListener("resize", setAspectRatio)

        return () => {
            window.removeEventListener("resize", setAspectRatio)
        }
    }, [])

    return <></>
}
