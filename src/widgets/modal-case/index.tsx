"use client"

import {useDebounce} from "@uidotdev/usehooks"
import clsx from "clsx"
import Image from "next/image"
import {FC, useEffect, useState} from "react"

import {useMainContext} from "providers/main-provider"

import {Button} from "shared/components/@button/button"
import {Modal} from "shared/components/@modal"
import {CombinationLock} from "shared/components/combination-lock"

import styles from "./index.module.scss"

interface IModalCase {}

const secretCode = 638

export const ModalCase: FC<IModalCase> = () => {
    const {modalCase: modal, modalCongratulations} = useMainContext()

    const [secretCombination] = useState<number[]>(
        secretCode.toString().split("").map(Number),
    )
    const [combination, setCombination] = useState<number[]>([])
    const [correctDigits, setCorrectDigits] = useState<number>(0)
    const [reset, setReset] = useState<boolean>(false)

    const debounceCombination = useDebounce(combination, 100)

    useEffect(() => {
        const correctCode = secretCombination
            .map((e, i) => e === debounceCombination[i])
            .filter((e) => e === true).length

        setCorrectDigits(correctCode)

        if (correctCode == secretCombination.length) {
            setTimeout(() => {
                modal.close()
                modalCongratulations.open()
                setReset((prev) => !prev)
            }, 500)
        }
    }, [debounceCombination])

    return (
        <Modal.Bottom modal={modal}>
            <Modal.Title>Daily case</Modal.Title>
            <Modal.Text>
                <p>The correctly selected code provides rewards:</p>
                <ul>
                    <li>the first 50 users will receive 5 USDT</li>
                    <li>all subsequent users will receive 1 000 wUSD</li>
                </ul>
            </Modal.Text>

            <div className={clsx(styles.ModalCase_case)}>
                <Image
                    src={"/assets/case.webp"}
                    width={500}
                    height={500}
                    alt="case"
                />
            </div>
            <div className={clsx(styles.ModalCase_lock)}>
                <CombinationLock
                    wheels={secretCombination.length}
                    setValue={setCombination}
                    reset={reset}
                />
            </div>
            <div className={clsx(styles.ModalCase_digits)}>
                You have <span>{correctDigits}</span> correct digits
            </div>
            <Button
                className={clsx(styles.ModalCase_button)}
                onClick={modal.open}
            >
                Check for Free <span>(10/10)</span>
            </Button>
        </Modal.Bottom>
    )
}
