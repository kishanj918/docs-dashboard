<script>
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import { contractsStore, searchTerm } from '$lib/store/contracts.svelte';
	import Ellipsis from '@lucide/svelte/icons/ellipsis';
	import { type } from '$lib/store/contracts.svelte';
	import { page } from '$app/state';
	type.value = page.params.type;
</script>

<div class="overflow-x-auto">
	<div class="flex items-center justify-between">
		<h2 class="text-lg font-bold">My Contracts</h2>
		<Button>Create New Contract</Button>
	</div>
	<Input bind:value={searchTerm.value} placeholder="Search contracts" class="my-4" />
	<div class="overflow-hidden rounded-sm border border-gray-100">
		<div
			class="flex items-center justify-between gap-2 border-b border-gray-200 bg-gray-100 px-4 py-2"
		>
			<div class="flex items-center gap-2">
				<label for="status">Status:</label>
				<select class="border-gray-20 rounded-sm border px-2 py-1 text-sm" bind:value={type.value}>
					<option value="all">All</option>
					<option value="active">Active</option>
					<option value="expired">Expired</option>
					<option value="due">Near Expire</option>
				</select>
			</div>
			{#if type.value === 'all'}
				<div class="flex items-center gap-2">
					<Badge variant="success" class="font-normal">
						Active {contractsStore.activeContracts.length}
					</Badge>
					<Badge variant="warning" class="font-normal">
						Near Expire {contractsStore.dueSoonContracts.length}
					</Badge>
					<Badge variant="error" class="font-normal">
						Expired {contractsStore.expiredContracts.length}
					</Badge>
				</div>
			{/if}
		</div>
		<table class="w-full">
			<thead class="border-b border-gray-200 bg-gray-100">
				<tr class="text-left text-sm text-gray-600">
					<th class="px-4 py-2">Contract Name</th>
					<th class="px-4 py-2">Client</th>
					<th class="px-4 py-2">Status</th>
					<th class="px-4 py-2">Start Date</th>
					<th class="px-4 py-2">End Date</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each contractsStore.filteredContracts as contract}
					<tr class="border-b border-gray-200 text-sm">
						<td class="px-4 py-2 text-gray-900">{contract.contract}</td>
						<td class="px-4 py-2 text-gray-900">{contract.client}</td>
						<td class="px-4 py-2">
							<Badge
								class="font-normal"
								variant={contract.status === 'Active'
									? 'success'
									: contract.status === 'Expired'
										? 'error'
										: 'warning'}
							>
								{contract.status}
							</Badge>
						</td>
						<td class="px-4 py-2 text-gray-600">{contract.start}</td>
						<td class="px-4 py-2 text-gray-600">{contract.end}</td>
						<td>
							<Button variant="ghost" size="icon" class="relative h-8 w-8 p-0">
								<span class="sr-only">Open menu</span>
								<Ellipsis class="h-4 w-4" />
							</Button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
