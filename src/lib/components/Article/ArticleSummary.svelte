<script lang="ts">
    import type { ArticleMate } from "$lib/types";
    import { getContext } from "svelte";

    const { map = (s) => s }: { map?: (summary: string) => string } = $props();

    const article = getContext<ArticleMate>("article");
</script>

<div class="tracking-wide my-6 linked">
    {@html map(article.summary)}
</div>
