<script lang="ts">
	import { base } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import { updates, type Update } from '$lib/data/updates';
	import UpdateContent from '$lib/components/UpdateContent.svelte';

	let searchQuery = $state('');
	let activeTab = $state('all');

	// Filter updates based on search query and active tab
	let filteredUpdates = $state<Update[]>([]);
	let versionGroups = $state<string[]>([]);

	$effect(() => {
		let result = [...updates];

		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			result = result.filter(
				(update) =>
					update.update.toLowerCase().includes(query) ||
					update.version.toLowerCase().includes(query)
			);
		}

		if (activeTab !== 'all') {
			const versionPrefix = activeTab;
			result = result.filter((update) => update.version.startsWith(versionPrefix));
		}

		filteredUpdates = result;
	});

	$effect(() => {
		const groups = updates.reduce((acc, update) => {
			const majorVersion = `${update.version.split('.')[0]}.${update.version.split('.')[1]}`;
			if (!acc.includes(majorVersion)) {
				acc.push(majorVersion);
			}
			return acc;
		}, [] as string[]);

		versionGroups = groups;
	});

	function formatDate(date: Date): string {
		return new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<SEO
	title="Changelog - MeetingHero.AI"
	description="Stay up to date with the latest MeetingHero.AI features, improvements, and bug fixes. Track our product evolution and new capabilities."
	url={`${base}/changelog`}
/>

<div class="min-h-screen bg-[var(--color-bg)] text-white">
	<div class="mx-auto max-w-4xl px-4 py-8">
		<!-- Header -->
		<div class="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
			<div>
				<h1 class="text-4xl font-bold text-[var(--color-primary)]">Product Updates</h1>
				<p class="mt-2 text-gray-400">Stay informed about the latest features and improvements</p>
			</div>
			<div class="w-full md:w-auto">
				<div class="relative">
					<input
						bind:value={searchQuery}
						type="text"
						placeholder="Search updates..."
						class="w-full rounded-lg border border-[var(--color-bg-dark)] bg-[var(--color-bg-dark)] px-4 py-2 pl-10 text-white placeholder-gray-400 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
					/>
					<svg
						class="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
					{#if searchQuery}
						<button
							onclick={() => (searchQuery = '')}
							class="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-400 hover:text-white"
							aria-label="Clear search"
						>
							<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					{/if}
				</div>
			</div>
		</div>

		<!-- Tabs -->
		<div class="mb-8 border-b border-[var(--color-bg-dark)]">
			<nav class="-mb-px flex space-x-8 overflow-x-auto">
				<button
					onclick={() => (activeTab = 'all')}
					class="border-b-2 px-1 py-2 text-sm font-medium whitespace-nowrap transition-colors {activeTab ===
					'all'
						? 'border-[var(--color-primary)] text-[var(--color-primary)]'
						: 'border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-300'}"
				>
					All Updates
				</button>
				{#each versionGroups as group}
					<button
						onclick={() => (activeTab = group)}
						class="border-b-2 px-1 py-2 text-sm font-medium whitespace-nowrap transition-colors {activeTab ===
						group
							? 'border-[var(--color-primary)] text-[var(--color-primary)]'
							: 'border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-300'}"
					>
						v{group}
					</button>
				{/each}
			</nav>
		</div>

		<!-- Timeline -->
		<div class="timeline-container">
			<div class="timeline">
				{#each filteredUpdates as update, index}
					<div class="timeline-entry">
						<div class="timeline-marker">
							<div class="timeline-dot"></div>
							{#if index < filteredUpdates.length - 1}
								<div class="timeline-line"></div>
							{/if}
						</div>

						<div class="timeline-content">
							<div class="timeline-header">
								<div class="timeline-title">
									<h3 class="version-title">Version {update.version}</h3>
									<p class="version-date">{formatDate(update.date)}</p>
								</div>
								<div class="timeline-icon"></div>
							</div>

							<div class="update-card">
								<div class="update-card-header">
									<h4 class="update-title">{update.title}</h4>
								</div>

								<div class="update-content">
									<UpdateContent content={update.update} />
								</div>
							</div>
						</div>
					</div>
				{:else}
					<!-- Empty state -->
					<div class="empty-state">
						<svg class="empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.57M15 6.75a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<h3 class="empty-title">No updates found</h3>
						<p class="empty-description">Try adjusting your search or filter criteria</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.timeline-container {
		padding-bottom: 50px;
	}

	.timeline {
		position: relative;
	}

	.timeline-entry {
		display: flex;
		margin-bottom: 2rem;
		position: relative;
	}

	.timeline-marker {
		position: relative;
		margin-right: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.timeline-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: var(--color-primary);
		position: relative;
		z-index: 2;
	}

	.timeline-line {
		width: 2px;
		height: calc(100% + 2rem);
		background-color: var(--color-bg-dark);
		position: absolute;
		top: 12px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
	}

	.timeline-content {
		flex: 1;
		min-width: 0;
	}

	.timeline-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
	}

	.timeline-title {
		flex: 1;
	}

	.version-title {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--color-primary);
		margin: 0 0 0 0;
		margin-top: -10px;
	}

	.version-date {
		font-size: 0.875rem;
		color: #9ca3af;
		margin: 0;
	}

	.timeline-icon {
		margin-left: 1rem;
	}

	.update-icon {
		width: 20px;
		height: 20px;
		color: var(--color-primary);
	}

	.update-card {
		background-color: var(--color-bg-dark);
		border: 1px solid var(--color-bg-dark);
		border-radius: 8px;
		transition: all 0.3s ease;
		overflow: hidden;
	}

	.update-card:hover {
		box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
		transform: translateY(-2px);
	}

	.update-card-header {
		padding: 1.5rem 1.5rem 0 1.5rem;
	}

	.update-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: white;
		margin: 0 0 1rem 0;
	}

	.update-content {
		padding: 0 1.5rem 1.5rem 1.5rem;
	}

	.empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 4rem 2rem;
		text-align: center;
	}

	.empty-icon {
		width: 4rem;
		height: 4rem;
		color: #6b7280;
		margin-bottom: 1rem;
	}

	.empty-title {
		font-size: 1.25rem;
		font-weight: 600;
		color: #9ca3af;
		margin: 0 0 0.5rem 0;
	}

	.empty-description {
		color: #6b7280;
		margin: 0;
	}

	/* Content styling */
	:global(.update-content) {
		color: #e5e7eb;
	}

	:global(.update-content a) {
		color: var(--color-primary);
		text-decoration: none;
	}

	:global(.update-content a:hover) {
		text-decoration: underline;
	}

	:global(.update-content ul),
	:global(.update-content ol) {
		color: #d1d5db;
		padding-left: 20px;
	}

	:global(.update-content li) {
		margin-bottom: 0.5rem;
	}

	:global(.update-content img) {
		border-radius: 0.5rem;
		margin: 1rem 0;
		max-width: 100%;
		height: auto;
	}

	:global(.update-content .text-h6) {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: var(--color-accent);
	}

	:global(.update-content .text-accent) {
		color: var(--color-accent);
	}

	:global(.update-content h1),
	:global(.update-content h2),
	:global(.update-content h3),
	:global(.update-content h4),
	:global(.update-content h5),
	:global(.update-content h6) {
		color: #f9fafb;
	}

	:global(.update-content p) {
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	:global(.update-content ul) {
		list-style-type: circle;
	}

	:global(.update-content .image-comparison) {
		margin: 20px 0;
		border-radius: 8px;
		overflow: hidden;
		position: relative;
		height: 300px;
	}

	:global(.update-content .image-comparison-placeholder) {
		display: none;
	}
</style>
