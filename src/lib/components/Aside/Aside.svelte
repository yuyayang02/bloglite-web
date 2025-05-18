<script lang="ts">
    import Categories from "./Categories.svelte";
    import Tags from "./Tags.svelte";
    import { asideStore } from "$lib/stores/asideStore";
    import RecentArticle from "./RecentArticle.svelte";
</script>

<aside
    class="xl:w-1/4 w-full p-0 mb-8 [&_a:hover]:underline xl:text-[17px]"
>
    <ul class="space-y-8">
        <li><RecentArticle data={$asideStore.recentArticles}/></li>
        <li><Categories categories={$asideStore.categories} /></li>
        <li><Tags tags={$asideStore.tags} /></li>
    </ul>
</aside>
