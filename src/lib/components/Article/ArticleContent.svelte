<script lang="ts">
    import type { ArticleContent } from "$lib/types";
    import { getContext } from "svelte";

    const article = getContext<ArticleContent>("article");
</script>

<main class="linked">
    {@html article.content}
</main>
