<script>
	import Badge from '$lib/components/ui/badge/badge.svelte';

	const contracts = [
		{
			contract: 'Software Development',
			client: 'James Mitchell',
			status: 'Active',
			start: 'Mar 1, 2023',
			end: 'Jun 1, 2024'
		},
		{
			contract: 'Marketing Services',
			client: 'Daniel Reynolds',
			status: 'Active',
			start: 'Jan 15, 2023',
			end: 'Jan 15, 2025'
		},
		{
			contract: 'System Integration',
			client: 'Benjamin Foster',
			status: 'Active',
			start: 'Oct 10, 2023',
			end: 'Oct 10, 2024'
		},
		{
			contract: 'Non-Disclosure Agreement',
			client: 'William Hayes',
			status: 'Expired',
			start: 'Feb 20, 2022',
			end: 'Feb 20, 2024'
		},
		{
			contract: 'Website Redesign',
			client: 'Ethan Harrison',
			status: 'Near Expire',
			start: 'Jun 1, 2022',
			end: 'Jun 1, 2024'
		},
		{
			contract: 'Partnership Agreement',
			client: 'Nathan Carter',
			status: 'Active',
			start: 'May 20, 2023',
			end: 'May 20, 2025'
		}
	];
</script>

<div class="overflow-x-auto">
	<table class="w-full text-sm">
		<thead>
			<tr class="border-b">
				<th class="px-3 py-2 text-left">Contract</th>
				<th class="px-3 py-2 text-left">Client</th>
				<th class="px-3 py-2 text-left">Status</th>
				<th class="px-3 py-2 text-left">Start Date</th>
				<th class="px-3 py-2 text-left">End Date</th>
			</tr>
		</thead>
		<tbody>
			{#each contracts as c}
				<tr class="border-b">
					<td class="px-3 py-2">{c.contract}</td>
					<td class="px-3 py-2">{c.client}</td>
					<td class="px-3 py-2">
						<Badge
							variant={c.status === 'Active'
								? 'default'
								: c.status === 'Expired'
									? 'destructive'
									: 'secondary'}
						>
							{c.status}
						</Badge>
					</td>
					<td class="px-3 py-2">{c.start}</td>
					<td class="px-3 py-2">{c.end}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
