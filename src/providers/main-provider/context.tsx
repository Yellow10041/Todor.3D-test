"use client"

import {createContext, useContext} from "react"

import {IModal, useModal} from "@/hooks/useModal"

interface IMainContext {
    modalMenu: IModal
    modalCase: IModal
    modalCongratulations: IModal
}

export const MainContext = createContext<IMainContext>({} as any)

export const useMainContext = () => useContext(MainContext)

interface Props {
    children: React.ReactNode
}

export const WithMain: React.FC<Props> = ({children}) => {
    const modalMenu = useModal()
    const modalCase = useModal()
    const modalCongratulations = useModal()

    return (
        <MainContext.Provider
            value={{
                modalMenu,
                modalCase,
                modalCongratulations,
            }}
        >
            {children}
        </MainContext.Provider>
    )
}
