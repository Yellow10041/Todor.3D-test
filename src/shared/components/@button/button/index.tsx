"use client"

import clsx from "clsx"
import Link from "next/link"
import {
    ComponentPropsWithoutRef,
    FC,
    HTMLAttributes,
    PropsWithChildren,
} from "react"

import {getStylesModule} from "utils/getStyles"

import styles from "./index.module.scss"

export interface IButton extends Omit<HTMLAttributes<HTMLElement>, "style"> {
    style?: string // write inline styles through ","
    href?: string
    link?: string
    buttonProps?: ComponentPropsWithoutRef<"button">
}

export const Button: FC<PropsWithChildren<IButton>> = ({
    children,
    className,
    style = "",
    href,
    link,
    buttonProps,
    ...props
}) => {
    const Element = href ? "a" : link ? Link : "button"

    const commonProps = {
        className: clsx(
            styles.Button,
            className,
            ...getStylesModule(styles, style),
        ),
        ...props,
    }

    return (
        <Element {...commonProps} {...buttonProps} href={href || link || ""}>
            {children}
        </Element>
    )
}
