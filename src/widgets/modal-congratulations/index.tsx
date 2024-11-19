"use client"

import {useGSAP} from "@gsap/react"
import clsx from "clsx"
import gsap from "gsap"
import Image from "next/image"
import {FC, useRef} from "react"

import {gsapDelay} from "utils/gsap/gsapDelay"

import {useMainContext} from "providers/main-provider"

import {Button} from "shared/components/@button/button"
import {Modal} from "shared/components/@modal"

import styles from "./index.module.scss"

interface IModalCongratulations {}

export const ModalCongratulations: FC<IModalCongratulations> = () => {
    const {modalCongratulations: modal} = useMainContext()

    const refConfetti = useRef<HTMLDivElement[]>([])

    useGSAP(() => {
        if (modal.isActive) {
            gsapDelay(() => {
                gsap.fromTo(
                    refConfetti.current,
                    {
                        autoAlpha: 1,
                    },
                    {
                        autoAlpha: 0,
                        physics2D: {
                            velocity: "random(200, 750)",
                            angle: "random(250, 290)",
                            gravity: 500,
                        },
                        duration: 2.5,
                        delay: "random(0, 2.5)",
                    },
                )

                gsap.fromTo(
                    `.${styles.ModalCase_case_usdt}`,
                    {
                        autoAlpha: 0,
                        yPercent: 50,
                    },
                    {
                        autoAlpha: 1,
                        yPercent: 0,
                        duration: 1,
                        ease: "power2.out",
                    },
                )
            }, 0.7)
        }
    }, [modal.isActive])

    return (
        <>
            <Modal.Bottom
                modal={modal}
                Outside={
                    <div className={clsx(styles.ModalCase_confetti)}>
                        {Array(100)
                            .fill(null)
                            .map((_, i) => (
                                <div
                                    className={clsx(
                                        styles.ModalCase_confetti_item,
                                    )}
                                    ref={(ref) => {
                                        if (ref) refConfetti.current[i] = ref
                                    }}
                                    key={i}
                                >
                                    <Image
                                        src={`/assets/confetti/${(i % 17) + 1}.svg`}
                                        width={100}
                                        height={100}
                                        quality={100}
                                        alt="confetti"
                                    />
                                </div>
                            ))}
                    </div>
                }
            >
                <Modal.Title>Congratulations</Modal.Title>
                <Modal.Text>The code is right!</Modal.Text>
                <div className={clsx(styles.ModalCase_caseBox)}>
                    <Image
                        className={clsx(styles.ModalCase_case)}
                        src={"/assets/case-open.webp"}
                        width={500}
                        height={500}
                        alt="case"
                    />
                    <Image
                        className={clsx(styles.ModalCase_case_usdt)}
                        src={"/assets/usdt.webp"}
                        width={500}
                        height={500}
                        alt="usdt"
                    />
                </div>
                <div className={clsx(styles.ModalCase_reward)}>
                    Your reward: <span>5 USDT</span>
                </div>
                <Button
                    className={clsx(styles.ModalCase_button)}
                    onClick={modal.close}
                >
                    Claim{" "}
                    <span>
                        + 5 <span>USDT</span>
                    </span>
                </Button>
            </Modal.Bottom>
        </>
    )
}
