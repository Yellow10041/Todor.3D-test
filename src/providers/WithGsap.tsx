"use client"

import {useGSAP} from "@gsap/react"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
// import {Draggable} from "gsap/Draggable"
// import ScrollToPlugin from "gsap/ScrollToPlugin"
import Script from "next/script"
import {FC, PropsWithChildren, useState} from "react"

interface IWithGsapProps {}

const libs = [
    // "libs/ScrollSmoother.min.js",
    // "libs/SplitText.min.js",
    "libs/ScrollTrigger.min.js",
    "libs/DrawSVG.min.js",
]

export const WithGsap: FC<PropsWithChildren<IWithGsapProps>> = ({children}) => {
    const [countScriptLoad, setCountScriptLoad] = useState<number>(0)

    useGSAP(() => {
        if (countScriptLoad == libs.length) {
            gsap.config({
                nullTargetWarn: false,
            })

            gsap.registerPlugin(
                ScrollTrigger,
                // SplitText,
                // ScrollSmoother,
                DrawSVGPlugin,
                // Draggable,
                // ScrollToPlugin,
            )

            // ScrollSmoother.create({
            //     wrapper: "#smooth-wrapper",
            //     content: "#smooth-content",
            //     smooth: 0.75,
            // })

            // gsap.delayedCall(1, () => {
            //     ScrollTrigger.refresh();
            //     const content = document.getElementById("smooth-content");
            //     if(content) content.style.height = "auto";
            //     console.log("gsap refresh!");
            // })
        }
    }, [countScriptLoad])

    return (
        <>
            {libs.map((lib, i) => (
                <Script
                    src={lib}
                    onLoad={() => setCountScriptLoad((prev) => prev + 1)}
                    key={i}
                />
            ))}
            {/* <div id="smooth-wrapper">
                <div 
                // style={{overflow: "hidden", height: "100vh"}}
                id="smooth-content">{children}</div>
            </div> */}
            {children}
        </>
    )
}
