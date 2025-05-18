<script lang="ts" generics="T extends ArticleMate">
    import type { ArticleMate } from "$lib/types";

    import { setContext } from "svelte";

    const { children, data }: { children: any; data: T } = $props();
    setContext("article", data);
</script>

<article class="article markdown-body">
    {@render children()}
</article>
