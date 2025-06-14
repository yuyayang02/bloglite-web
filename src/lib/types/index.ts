export interface Response<T> {
    code: number
    msg?: string,
    data?: T
}

export interface Category {
    id: string,
    name: string,
}


export interface ArticleList {
    count: number
    page: number
    limit: number
    items: ArticleMateData[]
}

export interface ArticleMateData {
    slug: string,
    title: string,
    summary: string,
    author: string,
    category: Category,
    tags: string[],
    updated_at: number
    created_at: number
}

export interface ArticleContentData extends ArticleMateData {
    content: string,
    version: string
}
