import {IFileObject} from "interfaces/strapi"

import {SERVER_URL} from "./config"

export const getMediaPath = (data: IFileObject, justUrl: boolean = false) => {
    if (data?.url) {
        const path = justUrl ? data.url : SERVER_URL + data.url

        return path
    }

    return ""
}
