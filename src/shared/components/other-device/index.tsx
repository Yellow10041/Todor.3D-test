"use client"

import {FC, PropsWithChildren, useEffect, useState} from "react"

import {isApple} from "utils/isApple"

interface IOtherDevice {}

export const OtherDevice: FC<PropsWithChildren<IOtherDevice>> = ({
    children,
}) => {
    const [isMounted, setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return
    if (isApple()) return

    return children
}
