<script lang="ts">
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen">
	<div>
		<Sidebar />
	</div>

	<main class="mx-auto flex max-w-[1280px] flex-1 flex-col gap-6 px-10 py-6">
		{@render children()}
	</main>
</div>
