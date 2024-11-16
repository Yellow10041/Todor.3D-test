import clsx from "clsx"
import {FC, useEffect} from "react"

import {TSetValue} from "@/screens/home/01-hero"

import styles from "./index.module.scss"

interface IWheelNumber {
    setValue: TSetValue
    wheelID: number
    value: number
    isActive: boolean
}

export const WheelNumber: FC<IWheelNumber> = ({
    value,
    isActive,
    wheelID,
    setValue,
}) => {
    useEffect(() => {
        {
            isActive && setValue(wheelID, value)
        }
    }, [isActive])

    return <div className={clsx(styles.WheelNumber)}>{value}</div>
}
