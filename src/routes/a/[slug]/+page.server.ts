import { env } from '$env/dynamic/public'
import type { ArticleContentData, Response } from '$lib/types/index.js'

export const load = async ({ params }) => {
    const article: Response<ArticleContentData> = await fetch(`${env.PUBLIC_BASE_URL}/api/articles/${params.slug}`).then(resp => resp.json())
    return {
        article
    }
}
