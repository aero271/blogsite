<script>
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.png" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Cantata+One&family=Lavishly+Yours&family=Monsieur+La+Doulaise&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="roboto-serif flex flex-col items-center ">
	<navbar class="flex min-h-16 w-full max-w-[1000px] min-w-3/4 items-center">
		<a href="/" class="lavishly-yours p-10 text-6xl">Jamie's Blog</a>
	</navbar>
	{@render children()}
</div>
