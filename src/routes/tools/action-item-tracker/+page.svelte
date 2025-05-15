<script lang="ts">
	import { onMount } from 'svelte';
	import SEO from '$lib/components/SEO.svelte';

	// Types
	type ActionItem = {
		id: string;
		title: string;
		description: string;
		assignee: string;
		dueDate: string;
		status: 'pending' | 'in-progress' | 'completed';
		createdAt: string;
		updatedAt: string;
	};

	// State
	let actionItems = $state<ActionItem[]>([]);
	let newItem = $state<Partial<ActionItem>>({
		title: '',
		description: '',
		assignee: '',
		dueDate: '',
		status: 'pending'
	});
	let filterStatus = $state<string>('all');
	let searchQuery = $state<string>('');

	// Load items from localStorage on mount
	onMount(() => {
		const savedItems = localStorage.getItem('actionItems');
		if (savedItems) {
			actionItems = JSON.parse(savedItems);
		}
	});

	// Save items to localStorage whenever they change
	$effect(() => {
		if (actionItems) {
			localStorage.setItem('actionItems', JSON.stringify(actionItems));
		}
	});

	// Functions
	function addItem() {
		if (!newItem.title || !newItem.assignee || !newItem.dueDate) return;

		const item: ActionItem = {
			id: crypto.randomUUID(),
			title: newItem.title,
			description: newItem.description || '',
			assignee: newItem.assignee,
			dueDate: newItem.dueDate,
			status: newItem.status || 'pending',
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString()
		};

		actionItems = [...actionItems, item];
		resetForm();
	}

	function updateItem(id: string, updates: Partial<ActionItem>) {
		actionItems = actionItems.map((item) => {
			if (item.id === id) {
				return {
					...item,
					...updates,
					updatedAt: new Date().toISOString()
				};
			}
			return item;
		});
	}

	function deleteItem(id: string) {
		actionItems = actionItems.filter((item) => item.id !== id);
	}

	function resetForm() {
		newItem = {
			title: '',
			description: '',
			assignee: '',
			dueDate: '',
			status: 'pending'
		};
	}

	// Computed
	const filteredItems = $derived(
		actionItems.filter((item) => {
			const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
			const matchesSearch =
				searchQuery === '' ||
				item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
				item.assignee.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesStatus && matchesSearch;
		})
	);

	const sortedItems = $derived(
		[...filteredItems].sort((a, b) => {
			return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
		})
	);
</script>

<SEO
	title="Action Item Tracker - MeetingHero.ai"
	description="Track and manage meeting action items efficiently with our interactive tool. Monitor tasks, due dates, and status updates in one place."
	image="/og-image.png"
	url="/tools/action-item-tracker"
/>

<div class="flex min-h-screen flex-col font-sans text-white" style="background: var(--color-bg);">
	<!-- Headline -->
	<section
		class="flex w-full flex-col items-center justify-center px-4 py-16"
		style="background: var(--color-bg-dark);"
	>
		<h1
			class="mb-4 text-center text-4xl font-bold md:text-5xl"
			style="color: var(--color-primary);"
		>
			Action Item Tracker
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">
			Track and manage your meeting action items efficiently
		</p>
	</section>

	<!-- Main Content -->
	<section class="mx-auto w-full max-w-4xl px-4 py-12">
		<!-- Add New Item Form -->
		<div class="mb-8 rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
			<h2 class="mb-6 text-2xl font-bold" style="color: var(--color-primary);">
				Add New Action Item
			</h2>
			<form onsubmit={addItem} class="space-y-4">
				<div class="grid gap-4 md:grid-cols-2">
					<div>
						<label for="title" class="mb-2 block text-sm font-medium">Title *</label>
						<input
							type="text"
							id="title"
							bind:value={newItem.title}
							class="w-full rounded-lg border bg-gray-800 p-2 text-white"
							required
						/>
					</div>
					<div>
						<label for="assignee" class="mb-2 block text-sm font-medium">Assignee *</label>
						<input
							type="text"
							id="assignee"
							bind:value={newItem.assignee}
							class="w-full rounded-lg border bg-gray-800 p-2 text-white"
							required
						/>
					</div>
				</div>
				<div>
					<label for="description" class="mb-2 block text-sm font-medium">Description</label>
					<textarea
						id="description"
						bind:value={newItem.description}
						class="w-full rounded-lg border bg-gray-800 p-2 text-white"
						rows="3"
					></textarea>
				</div>
				<div class="grid gap-4 md:grid-cols-2">
					<div>
						<label for="dueDate" class="mb-2 block text-sm font-medium">Due Date *</label>
						<input
							type="date"
							id="dueDate"
							bind:value={newItem.dueDate}
							class="w-full rounded-lg border bg-gray-800 p-2 text-white"
							required
						/>
					</div>
					<div>
						<label for="status" class="mb-2 block text-sm font-medium">Status</label>
						<select
							id="status"
							bind:value={newItem.status}
							class="w-full rounded-lg border bg-gray-800 p-2 text-white"
						>
							<option value="pending">Pending</option>
							<option value="in-progress">In Progress</option>
							<option value="completed">Completed</option>
						</select>
					</div>
				</div>
				<div class="flex justify-end">
					<button
						type="submit"
						class="rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-secondary)]"
					>
						Add Item
					</button>
				</div>
			</form>
		</div>

		<!-- Filters -->
		<div class="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<div class="flex gap-4">
				<select
					bind:value={filterStatus}
					class="rounded-lg border bg-[var(--color-bg-dark)] p-2 text-white"
				>
					<option value="all">All Status</option>
					<option value="pending">Pending</option>
					<option value="in-progress">In Progress</option>
					<option value="completed">Completed</option>
				</select>
			</div>
			<div class="flex-1 md:ml-4">
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Search items..."
					class="w-full rounded-lg border bg-[var(--color-bg-dark)] p-2 text-white"
				/>
			</div>
		</div>

		<!-- Action Items List -->
		<div class="space-y-4">
			{#each sortedItems as item (item.id)}
				<div
					class="group relative rounded-xl bg-[var(--color-bg-dark)] p-6 shadow-lg transition-all hover:shadow-xl"
				>
					<div class="flex items-start justify-between">
						<div class="flex-1">
							<h3 class="mb-2 text-xl font-semibold" style="color: var(--color-primary);">
								{item.title}
							</h3>
							{#if item.description}
								<p class="mb-4 text-gray-300">{item.description}</p>
							{/if}
							<div class="flex flex-wrap gap-4 text-sm text-gray-400">
								<div class="flex items-center">
									<span class="mr-2">👤</span>
									{item.assignee}
								</div>
								<div class="flex items-center">
									<span class="mr-2">📅</span>
									{new Date(item.dueDate).toLocaleDateString()}
								</div>
								<div class="flex items-center">
									<select
										value={item.status}
										onchange={(e) =>
											updateItem(item.id, {
												status: e.currentTarget.value as 'pending' | 'in-progress' | 'completed'
											})}
										class="rounded border bg-transparent p-1"
									>
										<option value="pending">Pending</option>
										<option value="in-progress">In Progress</option>
										<option value="completed">Completed</option>
									</select>
								</div>
							</div>
						</div>
						<button
							onclick={() => deleteItem(item.id)}
							class="ml-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-red-500 hover:text-white"
							aria-label="Delete action item"
						>
							<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			{:else}
				<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 text-center text-gray-400">
					No action items found. Add your first item above!
				</div>
			{/each}
		</div>
	</section>
</div>
