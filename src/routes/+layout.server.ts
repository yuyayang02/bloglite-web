import { env } from '$env/dynamic/public';
import type { ArticleList, Category, Response } from '$lib/types/index.js';


export const load = async () => {
    const categories: Response<{
        count: number
        items: Category[]
    }> = await fetch(`${env.PUBLIC_BASE_URL}/api/articles/categories`).then(resp => resp.json())
    const tags: Response<{
        count: number
        items: string[]
    }> = await fetch(`${env.PUBLIC_BASE_URL}/api/articles/tags`).then(resp => resp.json())


    const recentArticles: Response<ArticleList> = await fetch(`${env.PUBLIC_BASE_URL}/api/articles?limit=5`).then(resp => resp.json())


    return {
        categories, tags, recentArticles
    }
}
