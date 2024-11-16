"use client"

import clsx from "clsx"
import {Dispatch, FC, SetStateAction, useEffect, useState} from "react"
import {EffectCreative} from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"
import {SwiperOptions, Swiper as SwiperType} from "swiper/types"

import {TSetValue} from "../.."

import styles from "./index.module.scss"
import {WheelNumber} from "./ui/wheel-number"

interface IWheel {
    setValue: TSetValue
    index: number
}

export const Wheel: FC<IWheel> = ({setValue, index}) => {
    const [swiper, setSwiper] = useState<SwiperType>()

    const [swiperConfig, setSwiperConfig] = useState<SwiperOptions>()

    useEffect(() => {
        const newSwiperConf: SwiperOptions = {
            modules: [EffectCreative],
            speed: 500,
            direction: "vertical",
            allowTouchMove: true,
            grabCursor: true,
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
            effect: "creative",
            creativeEffect: {
                limitProgress: 2,
                prev: {
                    shadow: true,
                    origin: "bottom  center",
                    translate: [0, "-100%", 0],
                    rotate: [50, 0, 0],
                },
                next: {
                    shadow: true,
                    origin: "top center",
                    translate: [0, "100%", 0],
                    rotate: [-50, 0, 0],
                },
            },
        }

        if (window.innerWidth > 1024) {
        } else {
        }

        setSwiperConfig(newSwiperConf)
    }, [])

    return (
        <div className={clsx(styles.Wheel)}>
            <div className={clsx(styles.Wheel_swiperBox)}>
                {swiperConfig && (
                    <Swiper
                        className={clsx(styles.Wheel_swiper)}
                        onSwiper={setSwiper}
                        {...swiperConfig}
                    >
                        {Array(10)
                            .fill(null)
                            .map((_, i) => (
                                <SwiperSlide
                                    className={clsx(styles.Wheel_swiper_item)}
                                    key={i}
                                >
                                    {({isActive, isVisible}) => (
                                        <WheelNumber
                                            value={i}
                                            wheelID={index}
                                            isActive={isActive}
                                            setValue={setValue}
                                            key={i}
                                        />
                                    )}
                                </SwiperSlide>
                            ))}
                    </Swiper>
                )}
            </div>
        </div>
    )
}