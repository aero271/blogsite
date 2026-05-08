<script>
    /** @type {import('./$types').PageProps} */
    let { data } = $props();
</script>

<div class="w-full max-w-[1000px] min-w-3/4">
    <h1 class="mt-2 mb-7 text-3xl">{data?.article.data.title}</h1>
    {#each data?.article.data.blocks as block}
        <p class="whitespace-pre-wrap">{block.body}</p> 
    {/each}
</div>