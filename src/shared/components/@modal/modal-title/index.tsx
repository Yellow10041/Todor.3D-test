import clsx from "clsx"
import {ComponentPropsWithoutRef, FC, PropsWithChildren} from "react"

import styles from "./index.module.scss"

interface IModalTitle extends ComponentPropsWithoutRef<"div"> {}

export const ModalTitle: FC<PropsWithChildren<IModalTitle>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={clsx(styles.ModalTitle, className)} {...props}>
            {children}
        </div>
    )
}
