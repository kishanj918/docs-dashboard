<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import { contractsStore } from '$lib/store/contracts.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Bell from '@lucide/svelte/icons/bell';
	const overdue = 12;

	const overdueNotifications = [
		{
			name: 'Maternity Leave Forms Acknowledgement',
			date: 'Apr 12, 2024',
			description:
				'The employee has not yet acknowledged receipt of the maternity leave policy documentation.'
		},
		{
			name: 'Non-Disclosure Agreement Confirmation',
			date: 'Apr 10, 2024',
			description:
				'The NDA sent for signature has not been acknowledged or signed by the concerned team member.'
		},
		{
			name: 'Insurance Policy Update',
			date: 'Apr 5, 2024',
			description:
				'The employee has not reviewed and confirmed the updated insurance policy details shared earlier this month.'
		},
		{
			name: 'Freelancer Contract Review',
			date: 'Mar 20, 2024',
			description:
				'The legal team has not completed the review process for the freelance contractor agreement.'
		},
		{
			name: 'Training Agreement Signature',
			date: 'Mar 28, 2024',
			description:
				'The training agreement document is still pending signature from the newly onboarded employee.'
		}
	];
</script>

<h1 class="text-xl font-bold">Overview</h1>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
	<Card class="border-0 bg-emerald-50">
		<CardContent class="py-6 text-center">
			<div class="uppercase tracking-wide text-muted-foreground">Active Contracts</div>
			<div class="text-2xl font-semibold">{contractsStore.activeContracts.length}</div>
		</CardContent>
	</Card>
	<Card class="border-0 bg-yellow-50">
		<CardContent class="py-6 text-center">
			<div class="uppercase tracking-wide text-muted-foreground">Due in Next 30 Days</div>
			<div class="text-2xl font-semibold">{contractsStore.dueSoonContracts.length}</div>
		</CardContent>
	</Card>
	<Card class="border-0 bg-red-50">
		<CardContent class="py-6 text-center">
			<div class="uppercase tracking-wide text-muted-foreground">Notifications Overdue</div>
			<div class="text-2xl font-semibold">{overdue}</div>
		</CardContent>
	</Card>
</div>
<div class="mt-10">
	<h2 class="text-xl font-semibold">Take Action</h2>
	<p class="font-light text-muted-foreground">
		In order to keep your contracts in check, we recommend you take the following actions:
	</p>
	<div class="mt-5 flex items-center gap-4">
		<a href="/contracts/expired">
			<Card class="w-56 cursor-pointer hover:shadow-lg">
				<CardContent>
					<div class="flex items-center gap-2">
						<div>
							<h3 class="text-lg font-semibold">Expired Contracts</h3>
							<p class="text-red-400">{contractsStore.expiredContracts.length} Contracts</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</a>
		<a href="/contracts/due">
			<Card class="w-56 cursor-pointer hover:shadow-lg">
				<CardContent>
					<div class="flex items-center gap-2">
						<div>
							<h3 class="text-lg font-semibold">Due Soon</h3>
							<p class="font-light text-muted-foreground">
								{contractsStore.dueSoonContracts.length} Contracts
							</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</a>

		<a href="/contracts/all" class="flex w-2/12 items-center gap-1 font-bold"
			>All Contracts <ArrowRight class="hover:ml-1" /></a
		>
	</div>
</div>
<div class="mt-10">
	<h2 class="flex items-center gap-2 text-xl font-semibold">
		Notifications <Badge variant="secondary" class="w-10">12</Badge>
	</h2>
	<ul class="mt-5 flex flex-col gap-3">
		{#each overdueNotifications as note}
			<li class="relative pl-10 text-sm">
				<Bell class="absolute left-0 top-1 text-muted-foreground" />
				<p class="text-base font-semibold">{note.name}</p>
				<p class="text-sm text-muted-foreground">{note.description}</p>
				<p class="text-sm text-muted-foreground">{note.date}</p>
			</li>
		{/each}
	</ul>
</div>
