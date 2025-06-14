import { env } from "$env/dynamic/public"
import type { ArticleList, Response } from "$lib/types"

export const load = async ({ params }) => {    
    const articles: Response<ArticleList> = await fetch(`${env.PUBLIC_BASE_URL}/api/articles?category=${params.category}`).then(resp => resp.json())   
    return {
        articles
    }
}