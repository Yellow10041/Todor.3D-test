"use client"

import {FC, PropsWithChildren, useEffect, useState} from "react"

import {isApple} from "utils/isApple"

interface IAppleDevice {}

export const AppleDevice: FC<PropsWithChildren<IAppleDevice>> = ({
    children,
}) => {
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return
    if (!isApple()) return

    return children
}
