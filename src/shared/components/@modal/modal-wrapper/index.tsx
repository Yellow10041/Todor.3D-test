"use client"

import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import {FC, PropsWithChildren, useRef} from "react"

import {useMainContext} from "providers/main-provider"

import {IModal} from "@/hooks/useModal"

import styles from "./index.module.scss"

export interface IModalWrapper {
    modal: IModal<any>
    tl?: gsap.core.Timeline
    reverseDelay?: number
}

export const ModalWrapper: FC<PropsWithChildren<IModalWrapper>> = ({
    children,
    modal,
    tl,
    reverseDelay,
}) => {
    // const {setOverflow} = useMainContext()

    const refBG = useRef<HTMLDivElement>(null)
    const refRoot = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        if (tl) {
            const tlBg = gsap.timeline({paused: true}).fromTo(
                refBG.current,
                {
                    autoAlpha: 0,
                },
                {
                    autoAlpha: 1,
                },
            )

            let lastTime = 0
            let forward = true

            const checkDirection = () => {
                let newTime = tl.time()

                if (
                    (forward && newTime < lastTime) ||
                    (!forward && newTime > lastTime)
                ) {
                    forward = !forward
                    console.log("changed direction")
                    if (!forward) {
                        tlBg.reverse()
                    }
                }
                lastTime = newTime
            }

            tl.eventCallback("onStart", () => {
                gsap.set(refRoot.current, {
                    autoAlpha: 1,
                })

                tlBg.play()

                console.log("start")

                // setOverflow(true)
            })
                .eventCallback("onReverseComplete", () => {
                    gsap.set(refRoot.current, {
                        autoAlpha: 0,
                    })

                    // setOverflow(false)
                })
                .eventCallback("onUpdate", checkDirection)
        }
    }, [tl])

    return (
        <div className={clsx(styles.ModalWrapper)} ref={refRoot}>
            <div
                className={clsx(styles.ModalWrapper_bg)}
                onClick={modal.close}
                ref={refBG}
            />
            {children}
        </div>
    )
}
