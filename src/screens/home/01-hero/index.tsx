"use client"

import clsx from "clsx"
import {FC} from "react"

import {useMainContext} from "providers/main-provider"

import {Button} from "shared/components/@button/button"

import styles from "./index.module.scss"

interface IHero {}

export const Hero: FC<IHero> = () => {
    const {modalCase, modalCongratulations} = useMainContext()

    return (
        <div className={clsx(styles.Hero)}>
            <Button
                onClick={modalCase.open}
                // onClick={modalCongratulations.open}
            >
                Start
            </Button>
        </div>
    )
}
