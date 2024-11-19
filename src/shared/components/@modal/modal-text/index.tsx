import clsx from "clsx"
import {ComponentPropsWithoutRef, FC, PropsWithChildren} from "react"

import styles from "./index.module.scss"

interface IModalText extends ComponentPropsWithoutRef<"div"> {}

export const ModalText: FC<PropsWithChildren<IModalText>> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div className={clsx(styles.ModalText, className)} {...props}>
            {children}
        </div>
    )
}
