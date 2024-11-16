import axios from "axios"

import {API_URL} from "utils/config"

import {errorCatchMassage, getContentType} from "./api.helper"

export const instance = axios.create({
    baseURL: API_URL,
    headers: getContentType(),
})
