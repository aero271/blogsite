<script>
    /** @type {import('./$types').PageProps} */
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

<div class="w-full max-w-[1000px] min-w-3/4 flex flex-col items-center">
    <h1 class="mt-2 mb-2 text-3xl w-full">{data?.article.data.title}</h1>
    <div class="w-full flex">
        <p class="italic">by {data?.article.data.author.name}</p>
        <p class="ml-auto">{months[data?.article.data.date.getMonth()]} {data?.article.data.date.getDate()}, {data?.article.data.date.getFullYear()}</p>
    </div>
    <p class="h-px w-full bg-black my-4"></p>
    <div class="max-w-[800px] flex flex-col justify-center w-full">
        {#each data?.article.data.blocks as block}
            <p class="whitespace-pre-wrap">{block.body}</p> 
        {/each}
    </div>
</div>