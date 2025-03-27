<script lang="ts">
	import House from '@lucide/svelte/icons/house';
	import Settings from '@lucide/svelte/icons/settings';
	import File from '@lucide/svelte/icons/file';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { page } from '$app/state';

	const items = [
		{
			title: 'Home',
			url: '/',
			icon: House,
			pattern: '/'
		},
		{
			title: 'Contracts',
			url: '/contracts/all',
			icon: File,
			pattern: '/contracts'
		},
		{
			title: 'Settings',
			url: '/settings',
			icon: Settings,
			pattern: '/settings'
		}
	];
	let activeUrl = $derived(page.url.pathname);
</script>

<Sidebar.Provider>
	<Sidebar.Root>
		<Sidebar.Content>
			<Sidebar.Group>
				<Sidebar.GroupLabel>Ohmydocs</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu>
						{#each items as item (item.title)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton
									isActive={item.pattern === '/'
										? activeUrl === '/'
										: activeUrl.startsWith(item.pattern)}
								>
									{#snippet child({ props })}
										<a href={item.url} {...props}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									{/snippet}
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		</Sidebar.Content>
	</Sidebar.Root>
</Sidebar.Provider>
