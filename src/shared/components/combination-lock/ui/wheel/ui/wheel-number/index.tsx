import {useDebounce} from "@uidotdev/usehooks"
import clsx from "clsx"
import {FC, useEffect} from "react"

import {TSetValue} from "shared/components/combination-lock"

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
    const debounceActive = useDebounce(isActive, 10)

    useEffect(() => {
        if (debounceActive) {
            debounceActive && setValue(wheelID, value)
        }
    }, [debounceActive])

    return <div className={clsx(styles.WheelNumber)}>{value}</div>
}
