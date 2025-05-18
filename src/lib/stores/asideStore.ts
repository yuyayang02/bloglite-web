import type { ArticleMate, Category } from '$lib/types';
import { writable } from 'svelte/store';

export const asideStore = writable<{
  categories: Category[];
  tags: string[],
  recentArticles: ArticleMate[]
}>({
  categories: [],
  tags: [],
  recentArticles: []
});