import { env } from "$env/dynamic/public"
import type { ArticleList, Response } from "$lib/types"

export const load = async () => {
    const articles: Response<ArticleList> = await fetch(`${env.PUBLIC_BASE_URL}/api/articles`).then(resp => resp.json())

    return {
        articles
    }
}