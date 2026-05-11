<script>
	import { onMount } from 'svelte';
	let { data } = $props();

    const months = [
        'January',
        'February',  
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

</script>

<main class="w-full max-w-[1000px] min-w-3/4">
    <h1 class="text-3xl mb-3">Articles</h1>
    <div class="w-full h-px bg-black mt-4"></div>
    {#each data?.articles.data as article}
        <a href="/{article.documentId}" class="w-full min-h-15 flex flex-col justify-center">
            <div class="my-auto flex w-full items-center">
                <h2 class="text-xl">{article.title}</h2>
                <p class="mx-[3%]">-</p>
                <p class=" italic ">{article.author.name}</p>
                <p class="ml-auto">{months[article.date.getMonth()]} {article.date.getDate()}, {article.date.getFullYear()}</p>
            </div>
            <div class="w-full h-px bg-black"></div>
        </a>    
    {/each}
</main>
