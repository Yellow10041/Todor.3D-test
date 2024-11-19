import clsx from "clsx"
import Image from "next/image"
import {Dispatch, FC, SetStateAction, useEffect, useState} from "react"

import styles from "./index.module.scss"
import {Wheel} from "./ui/wheel"

export type TSetValue = (index: number, value: number) => void

interface ICombinationLock {
    setValue?: Dispatch<SetStateAction<number[]>>
    wheels?: number
    reset?: boolean
}

export const CombinationLock: FC<ICombinationLock> = ({
    setValue: setOutValue,
    wheels = 3,
    reset = false,
}) => {
    const [code, setCode] = useState<number[]>([])

    const setValue: TSetValue = (index: number, value: number) => {
        setCode((prev) => {
            let newArr = [...prev]

            newArr[index] = value

            return newArr
        })
    }

    useEffect(() => {
        setOutValue && setOutValue(code)
    }, [code])

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
            {Array(wheels)
                .fill(null)
                .map((_, i) => (
                    <Wheel
                        reset={reset}
                        setValue={setValue}
                        index={i}
                        key={i}
                    />
                ))}
        </div>
    )
}
