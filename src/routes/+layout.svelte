<script lang="ts">
	import type { LayoutData } from "./$types";
	import type { Snippet } from "svelte";
	import { siteConfig } from "$lib/config";

	import Aside from "$lib/components/Sidebar/Sidebar.svelte";
	import "../app.css";
	import { useSidebarStore } from "$lib/stores/SidebarStore";
	import { page } from "$app/state";

	const { children, data }: { children: Snippet; data: LayoutData } =
		$props();

	useSidebarStore().set({
		categories: data.categories.data?.items || [],
		tags: data.tags.data?.items || [],
		recentArticles: data.recentArticles.data?.items || [],
	});

	const isHome = $derived(page.url.pathname === "/");
</script>

<div class="min-h-screen flex flex-col font-lxgw">
	<div
		class="flex-1 flex flex-col max-w-full"
		style="padding:0 max(16px, calc(0.5 * max(0px, calc(100% - 1100px))))"
	>
		<header class="py-8 px-4">
			<div>
				<a class="inline-block mb-2.5" href="/">
					<span class="select-none text-[30px]"
						>{siteConfig.logoText}</span
					>
				</a>
				<p class="text-[#8a8a8a] text-[16px]">{siteConfig.motto}</p>
			</div>
		</header>

		<!-- 主内容 + 侧边栏区域 -->
		<div class="flex-1 p-2 flex flex-col xl:flex-row gap-8">
			{@render children()}
			<Aside />
		</div>
	</div>

	<footer
		class="mt-8 mb-16 text-center text-[0.9em] xl:text-[1em] text-[#8a8a8a]"
	>
		<div class="p-2">
			<p>{siteConfig.footer.content}</p>
			{#if isHome}
				<p class="mt-2">
					<a href={siteConfig.footer.beian.link}
						>{siteConfig.footer.beian.text}</a
					>
				</p>
			{/if}
		</div>
	</footer>
</div>
