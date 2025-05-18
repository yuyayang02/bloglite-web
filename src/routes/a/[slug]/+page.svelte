<script lang="ts">
    import ArticleContainer from "$lib/components/Article/ArticleContainer.svelte";
    import ArticleContent from "$lib/components/Article/ArticleContent.svelte";
    import ArticleMateInfo from "$lib/components/Article/ArticleMateInfo.svelte";
    import ArticleSummary from "$lib/components/Article/ArticleSummary.svelte";
    const { data } = $props();

    const article = data.article.data;
</script>

<main class="flex-3/4 xl:w-[75%] xl:pr-[5%] mb-8 w-[100%]">
    {#if article}
        <ArticleContainer data={article}>
            <header>
                <h1>{article.title}</h1>
                <ArticleMateInfo />
            </header>

            <ArticleSummary />
            <ArticleContent />
            <hr />
            <ArticleMateInfo variant="linked" />
        </ArticleContainer>
    {/if}
</main>
