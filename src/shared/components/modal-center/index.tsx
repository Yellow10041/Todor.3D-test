import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import {FC, PropsWithChildren, useEffect, useRef} from "react"

import {Icons} from "shared/icons"

import {IModalWrapper, ModalWrapper} from "../modal-wrapper"

import styles from "./index.module.scss"

interface IModalCenter extends IModalWrapper {}

export const ModalCenter: FC<PropsWithChildren<IModalCenter>> = ({
    modal,
    children,
}) => {
    const refRoot = useRef<HTMLDivElement>(null)
    const refBg = useRef<HTMLDivElement>(null)

    const tl = useRef<gsap.core.Timeline>()

    useGSAP(() => {
        tl.current = gsap
            .timeline({
                paused: true,
            })
            .fromTo(
                refRoot.current,
                {
                    scale: 0.9,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut",
                },
            )
            .fromTo(
                refBg.current,
                {
                    scale: 0,
                },
                {
                    scale: 1.2,
                },
                0,
            )
    }, [])

    useEffect(() => {
        if (modal.isActive) {
            tl.current?.play()
        } else {
            tl.current?.reverse()
        }
    }, [modal.isActive])

    return (
        <ModalWrapper modal={modal} tl={tl.current}>
            <div className={clsx(styles.ModalCenter_bg)} ref={refBg} />
            <div className={clsx(styles.ModalCenter)} ref={refRoot}>
                <button
                    className={clsx(styles.ModalCenter_close)}
                    onClick={() => modal.close()}
                >
                    <Icons.Crosshair />
                </button>
                {children}
            </div>
        </ModalWrapper>
    )
}
