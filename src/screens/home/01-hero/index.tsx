"use client"

import clsx from "clsx"
import {FC, useState} from "react"

import styles from "./index.module.scss"
import {Wheel} from "./ui/wheel"

export type TSetValue = (index: number, value: number) => void

interface IHero {}

export const Hero: FC<IHero> = () => {
    const [code, setCode] = useState<number[]>([])

    const setValue: TSetValue = (index: number, value: number) => {
        setCode((prev) => {
            let newArr = [...prev]

            newArr[index] = value

            return newArr
        })
    }

    return (
        <div className={clsx(styles.Hero)}>
            <div className={clsx(styles.Hero_code)}>
                {code.map((e, i) => (
                    <div className={clsx(styles.Hero_code_item)} key={i}>
                        {e}
                    </div>
                ))}
            </div>
            <div className={clsx(styles.Hero_wheels)}>
                {Array(3)
                    .fill(null)
                    .map((_, i) => (
                        <Wheel setValue={setValue} index={i} key={i} />
                    ))}
            </div>
        </div>
    )
}
