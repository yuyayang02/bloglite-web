<script lang="ts">
    import { type ArticleMate } from "$lib/types";
    import ArticleContainer from "./Article/ArticleContainer.svelte";
    import ArticleHeader from "./Article/ArticleHeader.svelte";
    import ArticleSummary from "./Article/ArticleSummary.svelte";
    import ReadMore from "./Article/ReadMore.svelte";

    let { header, data }: { header?: any; data?: ArticleMate[] } = $props();

</script>

{#snippet article(article: ArticleMate)}
    <ArticleContainer data={article}>
        <ArticleHeader />
        <ArticleSummary />
        <ReadMore />
    </ArticleContainer>
{/snippet}

{#snippet pagination()}
    <nav
        class="py-4 font-lxgw mx-auto flex w-full justify-center text-[16px] text-center"
    >
        <ul class="flex flex-row justify-center [&>li]:mx-2 [&>li]:select-none">
            <li class="text-[--color-subtopic] cursor-default">上一页</li>
            <li class="cursor-pointer hover:underline underline">
                <a href="/?page=1">1</a>
            </li>
            <li class="cursor-pointer hover:underline">
                <a href="/?page=2">2</a>
            </li>
            <li class="text-[--color-subtopic] cursor-default">...</li>
            <li class="cursor-pointer hover:underline">
                <a href="/?page=20">20</a>
            </li>
            <li class="cursor-pointer hover:underline">
                <a href="/?page=2">下一页</a>
            </li>
        </ul>
    </nav>
{/snippet}

<main class="xl:w-3/4 xl:pr-[5%] w-full mb-8">
    {#if header}
        {@render header()}
    {/if}
    {#if data && data.length > 0}
        {#each data as item, i}
            {@render article(item)}
        {/each}
    {:else if data && data.length <= 0}
        <p class="my-6">没有更多内容了</p>
    {/if}
</main>
