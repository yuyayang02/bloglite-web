<script lang="ts">
    import type { ArticleContentData } from "$lib/types";
    import { getContext } from "svelte";

    const article = getContext<ArticleContentData>("article");
</script>

<main class="linked">
    {@html article.content}
</main>
