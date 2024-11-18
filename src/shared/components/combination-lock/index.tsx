import clsx from "clsx"
import Image from "next/image"
import {FC, useState} from "react"

import styles from "./index.module.scss"
import {Wheel} from "./ui/wheel"

export type TSetValue = (index: number, value: number) => void

interface ICombinationLock {}

export const CombinationLock: FC<ICombinationLock> = () => {
    const [code, setCode] = useState<number[]>([])

    const setValue: TSetValue = (index: number, value: number) => {
        setCode((prev) => {
            let newArr = [...prev]

            newArr[index] = value

            return newArr
        })
    }

    return (
        <div className={clsx(styles.CombinationLock)}>
            <Image
                className={clsx(styles.CombinationLock_bg)}
                src={"/assets/combination-lock/bg.jpg"}
                width={500}
                height={500}
                alt="bg"
            />
            <div className={clsx(styles.CombinationLock_rivets)}>
                {Array(4)
                    .fill(null)
                    .map((_, i) => (
                        <Image
                            src={"/assets/combination-lock/rivet.webp"}
                            width={100}
                            height={100}
                            alt="river"
                            key={i}
                        />
                    ))}
            </div>
            {Array(3)
                .fill(null)
                .map((_, i) => (
                    <Wheel setValue={setValue} index={i} key={i} />
                ))}
        </div>
    )
}
