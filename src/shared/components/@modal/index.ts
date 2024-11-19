import {ModalBottom} from "./modal-bottom"
import {ModalText} from "./modal-text"
import {ModalTitle} from "./modal-title"
import {ModalWrapper} from "./modal-wrapper"

export const Modal = Object.assign(ModalWrapper, {
    Bottom: ModalBottom,
    Title: ModalTitle,
    Text: ModalText,
})
