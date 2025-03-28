let contracts = $state([
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
		contract: 'Partnership Agreement',
		client: 'Nathan Carter',
		status: 'Active',
		start: 'May 20, 2023',
		end: 'May 20, 2025'
	},

	{
		contract: 'Non-Disclosure Agreement',
		client: 'William Hayes',
		status: 'Expired',
		start: 'Feb 20, 2022',
		end: 'Feb 20, 2024'
	},
	{
		contract: 'Maintenance Contract',
		client: 'Lucas Edwards',
		status: 'Expired',
		start: 'Jan 1, 2021',
		end: 'Jan 1, 2023'
	},
	{
		contract: 'Consulting Services',
		client: 'Ella Brooks',
		status: 'Expired',
		start: 'Mar 10, 2020',
		end: 'Mar 10, 2023'
	},

	// Near Expire Contracts
	{
		contract: 'Website Redesign',
		client: 'Ethan Harrison',
		status: 'Near Expire',
		start: 'Jun 1, 2022',
		end: 'Jun 1, 2024'
	},
	{
		contract: 'Confidentiality Agreement',
		client: 'Sophie Bennett',
		status: 'Near Expire',
		start: 'Apr 15, 2023',
		end: 'Apr 15, 2024'
	},
	{
		contract: 'Content Licensing',
		client: 'Owen Peterson',
		status: 'Near Expire',
		start: 'Jul 20, 2022',
		end: 'Jul 20, 2024'
	}
]);
export const searchTerm = $state({ value: '' });
export const type = $state({ value: 'all' });
export const contractsStore = {
	get contracts() {
		return contracts;
	},
	set contracts(value) {
		contracts = value;
	},
	get filteredContracts() {
		return contracts.filter((contract) => {
			const matchesType =
				type.value === 'all' ||
				(type.value === 'active' && contract.status === 'Active') ||
				(type.value === 'expired' && contract.status === 'Expired') ||
				(type.value === 'due' && contract.status === 'Near Expire');

			const matchesSearch =
				searchTerm.value.length === 0 ||
				contract.contract.toLowerCase().includes(searchTerm.value.toLowerCase());

			return matchesType && matchesSearch;
		});
	},
	get activeContracts() {
		return contracts.filter((contract) => contract.status === 'Active');
	},
	get expiredContracts() {
		return contracts.filter((contract) => contract.status === 'Expired');
	},
	get dueSoonContracts() {
		return contracts.filter((contract) => contract.status === 'Near Expire');
	}
};
