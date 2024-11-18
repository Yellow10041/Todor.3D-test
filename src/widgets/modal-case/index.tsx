"use client"

import clsx from "clsx"
import Image from "next/image"
import {FC} from "react"

import {useMainContext} from "providers/main-provider"

import {Button} from "shared/components/@button/button"
import {CombinationLock} from "shared/components/combination-lock"
import {ModalBottom} from "shared/components/modal-bottom"

import styles from "./index.module.scss"

interface IModalCase {}

export const ModalCase: FC<IModalCase> = () => {
    const {modalCase: modal} = useMainContext()

    return (
        <ModalBottom modal={modal}>
            <div className={clsx(styles.ModalCase_title)}>Daily case</div>
            <div className={clsx(styles.ModalCase_text)}>
                <p>The correctly selected code provides rewards:</p>
                <ul>
                    <li>the first 50 users will receive 5 USDT</li>
                    <li>all subsequent users will receive 1 000 wUSD</li>
                </ul>
            </div>

            <div className={clsx(styles.ModalCase_case)}>
                <Image
                    src={"/assets/case.webp"}
                    width={500}
                    height={500}
                    alt="case"
                />
            </div>
            <div className={clsx(styles.ModalCase_lock)}>
                <CombinationLock />
            </div>
            <div className={clsx(styles.ModalCase_digits)}>
                You have <span>0</span> correct digits
            </div>
            <Button className={clsx(styles.ModalCase_button)}>
                Check for Free (10/10)
            </Button>
        </ModalBottom>
    )
}
