<script>
	import { onMount } from 'svelte';
	let { data } = $props();
</script>

<main class="w-full max-w-[1000px] min-w-3/4">
    <h1 class="text-3xl mb-3">Articles</h1>
    {#each data?.articles.data as article}
        <a href="/{article.documentId}" class="w-full min-h-15 flex flex-col justify-center">
            <div class="w-full h-px bg-black"></div>
            <div class="my-auto flex w-full">
                <h2 class="text-xl">{article.title}</h2>
                <p class="ml-auto">{article.publishedAt}</p>
            </div>
            <div class="w-full h-px bg-black"></div>
        </a>    
    {/each}
</main>
