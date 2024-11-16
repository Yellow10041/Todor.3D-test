import clsx from "clsx"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "swiper/css"

import {RootLayout} from "layouts/RootLayout"

import "styles/index.scss"

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
})

const fonts = [inter]

export const metadata: Metadata = {
    title: "Todor.3D-test",
    description: "Todor.3D-test",
    icons: {
        icon: {
            url: "/favicon.ico",
            href: "/favicon.ico",
        },
        apple: {
            url: "/favicon.ico",
            href: "/favicon.ico",
        },
    },
}

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={clsx(fonts.map((font) => font.className))}>
                <RootLayout>{children}</RootLayout>
            </body>
        </html>
    )
}