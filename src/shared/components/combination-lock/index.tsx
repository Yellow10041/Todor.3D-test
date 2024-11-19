import clsx from "clsx"
import Image from "next/image"
import {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from "react"

import styles from "./index.module.scss"
import {Wheel} from "./ui/wheel"

export type TSetValue = (index: number, value: number) => void

interface ICombinationLock {
    setValue?: Dispatch<SetStateAction<number[]>>
    wheels?: number
    reset?: boolean
}

export const CombinationLock: FC<ICombinationLock> = ({
    setValue: setOutValue,
    wheels = 3,
    reset = false,
}) => {
    const [code, setCode] = useState<number[]>([])

    const audioRef = useRef<HTMLAudioElement | null>(null)

    const audioContextRef = useRef<AudioContext | null>(null)
    const audioBufferRef = useRef<AudioBuffer | null>(null)

    useEffect(() => {
        // Ініціалізація AudioContext і завантаження файлу
        audioContextRef.current = new (window.AudioContext ||
            (window as any).webkitAudioContext)()

        fetch("/assets/combination-lock/wheel.mp3") // Завантажуємо файл
            .then((response) => response.arrayBuffer())
            .then((data) => {
                audioContextRef.current?.decodeAudioData(data, (buffer) => {
                    audioBufferRef.current = buffer // Зберігаємо аудіо-буфер
                })
            })
    }, [])

    const handleAction = () => {
        if (audioContextRef.current && audioBufferRef.current) {
            const source = audioContextRef.current.createBufferSource()
            source.buffer = audioBufferRef.current
            source.connect(audioContextRef.current.destination)
            source.start(0) // Відтворюємо без затримки
        }
    }

    // const handleAction = () => {
    //     const audio = new Audio("/assets/combination-lock/wheel.mp3")
    //     audioRef.current = audio

    //     audio.play()

    //     audio.addEventListener("ended", () => {
    //         audioRef.current = null
    //         console.log("Audio finished and removed.")
    //     })

    //     audio.addEventListener("error", (e) => {
    //         console.error("Audio playback failed:", e)
    //         audioRef.current = null
    //     })
    // }

    const setValue: TSetValue = (index: number, value: number) => {
        setCode((prev) => {
            let newArr = [...prev]

            newArr[index] = value

            return newArr
        })

        handleAction()
    }

    useEffect(() => {
        setOutValue && setOutValue(code)
    }, [code])

    return (
        <div className={clsx(styles.CombinationLock)}>
            <Image
                className={clsx(styles.CombinationLock_bg)}
                src={"/assets/combination-lock/bg.jpg"}
                width={500}
                height={500}
                alt="bg"
            />
            <div className={clsx(styles.CombinationLock_rivets)}>
                {Array(4)
                    .fill(null)
                    .map((_, i) => (
                        <Image
                            src={"/assets/combination-lock/rivet.webp"}
                            width={100}
                            height={100}
                            alt="river"
                            key={i}
                        />
                    ))}
            </div>
            {Array(wheels)
                .fill(null)
                .map((_, i) => (
                    <Wheel
                        reset={reset}
                        setValue={setValue}
                        index={i}
                        key={i}
                    />
                ))}
        </div>
    )
}
