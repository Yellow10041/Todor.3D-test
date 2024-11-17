import {useDebounce} from "@uidotdev/usehooks"
import clsx from "clsx"
import {FC, useEffect, useRef, useState} from "react"

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
    const refAudio = useRef<HTMLAudioElement | null>(null)

    const debounceActive = useDebounce(isActive, 10)

    useEffect(() => {
        if (debounceActive) {
            debounceActive && setValue(wheelID, value)

            if (!refAudio.current) return

            refAudio.current.currentTime = 0
            refAudio.current.play()
        }
    }, [debounceActive])

    return (
        <div className={clsx(styles.WheelNumber)}>
            <audio src="/assets/wheel.mp3" ref={refAudio} />
            {value}
        </div>
    )
}
