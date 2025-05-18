<script lang="ts">
    import type { ArticleMate } from "$lib/types";
    import { articleURL } from "$lib/utils";
    import { getContext } from "svelte";

    const article = getContext<ArticleMate>("article");
</script>

<div class="my-4 flex flex-row-reverse">
    <a href={articleURL(article.slug)} class="underline p-1 inactive">
        阅读全部
    </a>
</div>
