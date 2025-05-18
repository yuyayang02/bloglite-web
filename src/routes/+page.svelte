<script lang="ts">
    import { siteConfig } from "$lib/config.js";
    import ContentList from "$lib/components/ContentList.svelte";
    const { data } = $props();
    const articles = data.articles.data?.items;  
</script>

<svelte:head>
    <title>{siteConfig.title}</title>
</svelte:head>

<ContentList data={articles} />

{#snippet test()}
    <p>test</p>
{/snippet}