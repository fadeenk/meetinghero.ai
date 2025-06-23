<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import SEO from '$lib/components/SEO.svelte';

	// Types
	type Participant = {
		id: string;
		role: string;
		salary: number;
		hoursPerWeek: number;
	};

	// State
	let participants = $state<Participant[]>([
		{
			id: crypto.randomUUID(),
			role: 'Team Member',
			salary: 80000,
			hoursPerWeek: 40
		}
	]);
	let meetingDuration = $state(30); // in minutes
	let meetingFrequency = $state<'one-time' | 'weekly' | 'monthly' | 'yearly'>('one-time');
	let meetingCount = $state(1);
	let showInsights = $state(false);

	// Constants
	const WORK_DAYS_PER_YEAR = 260;
	const WORK_HOURS_PER_YEAR = WORK_DAYS_PER_YEAR * 8;
	const FREQUENCY_MULTIPLIERS = {
		'one-time': 1,
		weekly: 52,
		monthly: 12,
		yearly: 1
	} as const;

	// Computed values
	let totalCost = $derived(calculateTotalCost());
	let annualCost = $derived(calculateAnnualCost());
	let costPerMinute = $derived(calculateCostPerMinute());
	let costPerHour = $derived(calculateCostPerHour());

	// Functions
	function calculateTotalCost() {
		return participants.reduce((total, participant) => {
			const hourlyRate = participant.salary / WORK_HOURS_PER_YEAR;
			const meetingCost = hourlyRate * (meetingDuration / 60);
			return total + meetingCost;
		}, 0);
	}

	function calculateAnnualCost() {
		const multiplier = FREQUENCY_MULTIPLIERS[meetingFrequency];
		return totalCost * multiplier * meetingCount;
	}

	function calculateCostPerMinute() {
		return totalCost / meetingDuration;
	}

	function calculateCostPerHour() {
		return costPerMinute * 60;
	}

	function addParticipant() {
		participants = [
			...participants,
			{
				id: crypto.randomUUID(),
				role: 'Team Member',
				salary: 80000,
				hoursPerWeek: 40
			}
		];
		updateUrl();
	}

	function removeParticipant(id: string) {
		participants = participants.filter((p) => p.id !== id);
		updateUrl();
	}

	function updateParticipant(id: string, field: keyof Participant, value: any) {
		participants = participants.map((p) => (p.id === id ? { ...p, [field]: value } : p));
		updateUrl();
	}

	function updateUrl() {
		const params = new URLSearchParams();
		params.set('duration', meetingDuration.toString());
		params.set('frequency', meetingFrequency);
		params.set('count', meetingCount.toString());
		params.set('participants', JSON.stringify(participants));

		const newUrl = `${window.location.pathname}?${params.toString()}`;
		window.history.replaceState({}, '', newUrl);
	}

	function loadFromUrl() {
		const params = new URLSearchParams(window.location.search);
		const duration = params.get('duration');
		const frequency = params.get('frequency');
		const count = params.get('count');
		const participantsParam = params.get('participants');

		if (duration) meetingDuration = parseInt(duration);
		if (frequency && ['one-time', 'weekly', 'monthly', 'yearly'].includes(frequency)) {
			meetingFrequency = frequency as 'one-time' | 'weekly' | 'monthly' | 'yearly';
		}
		if (count) meetingCount = parseInt(count);
		if (participantsParam) {
			try {
				participants = JSON.parse(participantsParam);
			} catch (e) {
				console.error('Error parsing participants from URL:', e);
			}
		}
	}

	// Share function using Web Share API
	async function shareCalculator() {
		const shareData = {
			title: 'Meeting Cost Calculator | MeetingHero.AI',
			text: `I just calculated that my ${meetingDuration}-minute meeting costs $${totalCost.toFixed(
				2
			)} per session! Check out MeetingHero.AI's Meeting Cost Calculator:`,
			url: window.location.href
		};

		try {
			if (navigator.share) {
				await navigator.share(shareData);
			} else {
				// Fallback for browsers that don't support Web Share API
				await navigator.clipboard.writeText(window.location.href);
				alert('Link copied to clipboard!');
			}
		} catch (err) {
			console.error('Error sharing:', err);
		}
	}

	// Load data from URL on mount
	onMount(() => {
		loadFromUrl();
	});
</script>

<SEO
	title="Meeting Cost Calculator - MeetingHero.ai"
	description="Calculate the real cost of your meetings with our interactive calculator. Understand meeting ROI and optimize your team's time investment."
	image="/og-image.png"
	url="/tools/meeting-cost-calculator"
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
			Meeting Cost Calculator
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">
			Calculate the real cost of your meetings and understand the ROI of better meeting practices
		</p>
	</section>

	<!-- Main Content -->
	<section class="mx-auto w-full max-w-4xl px-4 py-12">
		<div class="grid gap-8 md:grid-cols-2">
			<!-- Calculator Form -->
			<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
				<h2 class="mb-6 text-2xl font-bold" style="color: var(--color-primary);">
					Meeting Details
				</h2>

				<!-- Duration -->
				<div class="mb-6">
					<label for="duration" class="mb-2 block text-sm font-medium text-gray-300"
						>Meeting Duration</label
					>
					<div class="flex items-center gap-4">
						<input
							id="duration"
							type="range"
							min="15"
							max="480"
							step="15"
							class="h-2 w-full rounded-lg bg-gray-700"
							bind:value={meetingDuration}
							onchange={updateUrl}
						/>
						<span class="text-lg font-semibold">{meetingDuration} minutes</span>
					</div>
				</div>

				<!-- Frequency -->
				<div class="mb-6">
					<label for="frequency" class="mb-2 block text-sm font-medium text-gray-300"
						>Meeting Frequency</label
					>
					<select
						id="frequency"
						class="w-full rounded-lg border bg-gray-800 p-3 text-white"
						style="border-color: var(--color-primary);"
						bind:value={meetingFrequency}
						onchange={updateUrl}
					>
						<option value="one-time">One-time meeting</option>
						<option value="weekly">Weekly</option>
						<option value="monthly">Monthly</option>
						<option value="yearly">Yearly</option>
					</select>
				</div>

				<!-- Meeting Count -->
				{#if meetingFrequency !== 'one-time'}
					<div class="mb-6">
						<label for="meetingCount" class="mb-2 block text-sm font-medium text-gray-300"
							>Number of Meetings</label
						>
						<input
							id="meetingCount"
							type="number"
							min="1"
							class="w-full rounded-lg border bg-gray-800 p-3 text-white"
							style="border-color: var(--color-primary);"
							bind:value={meetingCount}
							onchange={updateUrl}
						/>
					</div>
				{/if}

				<!-- Participants -->
				<div class="mb-6">
					<div class="mb-4 flex items-center justify-between">
						<div class="flex items-center gap-2">
							<h3 class="text-lg font-semibold" style="color: var(--color-secondary);">
								Participants
							</h3>
							<span
								class="rounded-full bg-[var(--color-accent)] px-2 py-1 text-xs font-medium text-white"
							>
								{participants.length}
							</span>
						</div>
						<button
							class="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm text-white transition-colors hover:bg-[var(--color-secondary)]"
							onclick={addParticipant}
						>
							Add Participant
						</button>
					</div>

					<div class="space-y-4">
						{#each participants as participant}
							<div class="rounded-lg border p-4" style="border-color: var(--color-primary);">
								<div class="mb-4 flex items-center justify-between">
									<input
										id="role-{participant.id}"
										type="text"
										class="w-2/3 rounded-lg border bg-gray-800 p-2 text-white"
										style="border-color: var(--color-primary);"
										placeholder="Role"
										bind:value={participant.role}
										onchange={() => updateUrl()}
									/>
									<button
										class="text-red-500 hover:text-red-400"
										onclick={() => removeParticipant(participant.id)}
										aria-label="Remove participant"
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
								<div class="grid gap-4 md:grid-cols-2">
									<div>
										<label for="salary-{participant.id}" class="mb-1 block text-sm text-gray-400"
											>Annual Salary ($)</label
										>
										<input
											id="salary-{participant.id}"
											type="number"
											min="0"
											class="w-full rounded-lg border bg-gray-800 p-2 text-white"
											style="border-color: var(--color-primary);"
											bind:value={participant.salary}
											onchange={() => updateUrl()}
										/>
									</div>
									<div>
										<label for="hours-{participant.id}" class="mb-1 block text-sm text-gray-400"
											>Hours per Week</label
										>
										<input
											id="hours-{participant.id}"
											type="number"
											min="1"
											max="168"
											class="w-full rounded-lg border bg-gray-800 p-2 text-white"
											style="border-color: var(--color-primary);"
											bind:value={participant.hoursPerWeek}
											onchange={() => updateUrl()}
										/>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<!-- Results -->
			<div class="rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg">
				<h2 class="mb-6 text-2xl font-bold" style="color: var(--color-primary);">Cost Analysis</h2>

				<div class="mb-8 space-y-4">
					<div class="rounded-lg border p-4" style="border-color: var(--color-primary);">
						<h3 class="mb-2 text-lg font-semibold" style="color: var(--color-secondary);">
							Per Meeting
						</h3>
						<div class="text-3xl font-bold">${totalCost.toFixed(2)}</div>
						<div class="text-sm text-gray-400">
							${costPerMinute.toFixed(2)} per minute / ${costPerHour.toFixed(2)} per hour
						</div>
					</div>

					{#if meetingFrequency !== 'one-time'}
						<div class="rounded-lg border p-4" style="border-color: var(--color-primary);">
							<h3 class="mb-2 text-lg font-semibold" style="color: var(--color-secondary);">
								Annual Cost
							</h3>
							<div class="text-3xl font-bold">${annualCost.toFixed(2)}</div>
							<div class="text-sm text-gray-400">
								Based on {meetingCount}
								{meetingFrequency} meetings
							</div>
						</div>
					{/if}
				</div>

				<!-- Insights -->
				<div class="mb-8">
					<button
						class="mb-4 w-full rounded-lg border p-4 text-left transition-colors hover:bg-[var(--color-primary)] hover:text-white"
						style="border-color: var(--color-primary);"
						onclick={() => (showInsights = !showInsights)}
					>
						<div class="flex items-center justify-between">
							<span class="font-semibold">View Insights & Tips</span>
							<svg
								class="h-5 w-5 transform transition-transform"
								style="transform: rotate({showInsights ? '180deg' : '0deg'});"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
					</button>

					{#if showInsights}
						<div
							class="space-y-4 rounded-lg border p-4"
							style="border-color: var(--color-primary);"
						>
							<h3 class="text-lg font-semibold" style="color: var(--color-secondary);">
								Tips to Optimize Meeting Costs
							</h3>
							<ul class="list-inside list-disc space-y-2 text-gray-300">
								<li>
									Consider if this meeting could be handled asynchronously through email or
									documentation
								</li>
								<li>Only invite essential participants</li>
								<li>Set and stick to a clear agenda with time limits</li>
								<li>Consider shorter, more focused meetings</li>
								<li>Document decisions and action items to avoid follow-up meetings</li>
							</ul>
						</div>
					{/if}
				</div>

				<!-- Share Button -->
				<button
					class="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-secondary)]"
					onclick={shareCalculator}
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
						/>
					</svg>
					Share Calculator
				</button>
			</div>
		</div>
	</section>

	<!-- Why Use This Tool Section -->
	<section
		class="flex w-full flex-col items-center px-4 py-16"
		style="background: var(--color-bg-dark);"
	>
		<h2
			class="mb-4 text-center text-2xl font-semibold md:text-3xl"
			style="color: var(--color-secondary);"
		>
			Why Calculate Meeting Costs?
		</h2>
		<p class="max-w-2xl text-center text-lg text-white">
			Understanding the true cost of meetings helps organizations make better decisions about when
			and how to meet. By quantifying meeting costs, you can identify opportunities to optimize
			meeting practices, reduce unnecessary meetings, and improve overall productivity. This
			calculator helps you make data-driven decisions about meeting frequency, duration, and
			participant selection.
		</p>
	</section>
</div>
