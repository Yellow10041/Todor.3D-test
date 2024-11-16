"use client"

import {Dispatch, useState} from "react"

export interface IModal<T = unknown> {
    isActive: boolean
    open: () => void
    close: () => void
    toggle: () => void
    data: T | undefined
    setData: Dispatch<React.SetStateAction<T | undefined>>
}

export function useModal<T = unknown>(): IModal<T> {
    const [isActive, setIsActive] = useState<boolean>(false)
    const [data, setData] = useState<T>()

    const open = () => {
        setIsActive(true)
    }

    const close = () => {
        setIsActive(false)
    }

    const toggle = () => {
        setIsActive((prev) => !prev)
    }

    return {
        isActive,
        open,
        close,
        toggle,
        data,
        setData,
    }
}
