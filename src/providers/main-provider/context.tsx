"use client"

import {createContext, useContext} from "react"

import {IModal, useModal} from "@/hooks/useModal"

interface IMainContext {
    modalMenu: IModal
}

export const MainContext = createContext<IMainContext>({} as any)

export const useMainContext = () => useContext(MainContext)

interface Props {
    children: React.ReactNode
}

export const WithMain: React.FC<Props> = ({children}) => {
    const modalMenu = useModal()

    return (
        <MainContext.Provider
            value={{
                modalMenu,
            }}
        >
            {children}
        </MainContext.Provider>
    )
}
