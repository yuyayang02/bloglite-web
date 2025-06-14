<script lang="ts">
    import type { ArticleMateData } from "$lib/types";
    import { articleURL, omitUndefined } from "$lib/utils";
    import { getContext } from "svelte";
    import ArticleMateInfo from "./ArticleMateInfo.svelte";
 
    const {
        author,
        category,
        updated_at,
        tags,
        title,
    }: Partial<
        Pick<
            ArticleMateData,
            "author" | "category" | "updated_at" | "tags" | "title"
        >
    > = $props();

    const article = {
        ...getContext<ArticleMateData>("article"),
        ...omitUndefined({
            author,
            category,
            updated_at,
            tags,
            title,
        }),
    };
</script>

<header>
    <h2
        class="flex items-center gap-2 border-b-1 border-(--color-border-muted) mt-[.3em] pb-[.3em] text-[1.4em]"
    >
        <a href={articleURL(article.slug)}>{article.title}</a>
    </h2>
    <ArticleMateInfo {author} {category} {updated_at} {tags} />
</header>
