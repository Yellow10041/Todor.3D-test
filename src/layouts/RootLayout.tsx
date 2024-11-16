import {FC, PropsWithChildren} from "react"

import {WithGsap} from "providers/WithGsap"
import {WithMain} from "providers/main-provider"

import {AspectRatio} from "./aspect-ratio"
import {Lvh} from "./lvh"

interface IRootLayout {}

export const RootLayout: FC<PropsWithChildren<IRootLayout>> = ({children}) => {
    return (
        <WithMain>
            <AspectRatio />
            <Lvh />
            <WithGsap>{children}</WithGsap>
        </WithMain>
    )
}
