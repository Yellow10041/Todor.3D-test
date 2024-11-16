/* Defaults */

/* 
    RM - React Markdown
*/

export interface IMetadata {
    pageSize: number
    pageCount: number
    page: number
    total: number
}

export interface IMetadataDefault {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

export type StrapiResponse<T> = {
    results: T[]
    metadata: IMetadata
}

export type StrapiResponseData<T> = {
    data: T[]
    metadata: IMetadata
}

export type StrapiResponseDataSingle<T> = {
    data: T
    metadata: IMetadata
}

// Files
export interface IFile {
    ext: string
    url: string
    hash: string
    mime: string
    name: string
    path: string | null
    size: number
    width: number
    height: number
}

export interface IFileFormats {
    large?: IFile
    medium?: IFile
    small?: IFile
    thumbnail?: IFile
}

export interface IFileObject {
    id: number
    name: string
    alternativeText: string | null
    caption: string | null
    width?: number
    height?: number
    formats: IFileFormats | null
    hash: string
    mime: string
    size: number
    url: string
    previewUrl: unknown
    provider: string
    provider_metadata: unknown
    folderPath: string
    createdAt: string
    updatedAt: string
    ext: string
}
