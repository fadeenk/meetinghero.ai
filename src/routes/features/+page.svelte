<script lang="ts">
	import ai from './ai.png';
	import intel from './intel.png';
	import company from './company.png';
	import calendar from './calendar.png';
	import flexDelivery from './flex-delivery.png';
	import delivery from './delivery.png';
	import dashboard from './dashboard.png';
	import database from './database.png';
	import SEO from '$lib/components/SEO.svelte';
	import { trackFeatureInteraction, trackEngagement, trackNavigation } from '$lib/analytics';

	let selectedImage: string | null = null;

	function openFullScreen(image: string, featureTitle: string): void {
		selectedImage = image;
		trackEngagement('feature_image_view', featureTitle);
	}

	function closeFullScreen(): void {
		selectedImage = null;
		trackEngagement('feature_image_close', '');
	}

	function handleFeatureInteraction(featureTitle: string, action: string): void {
		trackFeatureInteraction(featureTitle, action);
	}

	const features = [
		{
			icon: '💬',
			image: ai,
			title: 'AI Discussion Starters',
			color: 'var(--color-primary)',
			description: 'Get smart, relevant talking points for every meeting.',
			features: ['Personalized topics', 'Industry insights', 'Recent developments'],
			benefit: 'Never struggle to find conversation topics again',
			reverse: false
		},
		{
			icon: '🧑‍💼',
			image: intel,
			title: 'Attendee Intel',
			color: 'var(--color-secondary)',
			description: 'Get rich profiles and backgrounds on everyone you meet.',
			features: ['Background', 'Location', 'Other details'],
			benefit: "Walk into meetings knowing exactly who you're talking to",
			reverse: true
		},
		{
			icon: '🏢',
			image: company,
			title: 'Company Deep Dives',
			color: 'var(--color-accent)',
			description: 'Instantly understand company context and news.',
			features: ['Company overview', 'Recent news', 'Financial insights'],
			benefit: 'Understand the business context without hours of research',
			reverse: false
		},
		{
			icon: '📅',
			image: calendar,
			title: 'Seamless Calendar Integration',
			color: 'var(--color-primary)',
			description: 'Works with Google & Outlook—no new tools to learn.',
			features: [],
			benefit: 'Works with your existing workflow.',
			reverse: true
		},
		{
			icon: '📬',
			image: flexDelivery,
			title: 'Flexible Delivery Options',
			color: 'var(--color-secondary)',
			description: 'Get your prep via email, calendar invite, or dashboard—your choice.',
			features: ['Email', 'Calendar Invite', 'Dashboard Access'],
			benefit: 'Get the information how and when you prefer.',
			reverse: false
		},
		{
			icon: '⚙️',
			image: delivery,
			title: 'Customizable Delivery Settings',
			color: 'var(--color-accent)',
			description: 'Choose who you get prep for and when:',
			features: [
				'Only people not met before',
				'People not met within X days',
				'Everyone',
				'Exclude domains (e.g., internal emails)'
			],
			benefit: 'Tailor the service to your specific needs and privacy preferences.',
			reverse: true
		},
		{
			icon: '📊',
			image: dashboard,
			title: 'Analytics Dashboard',
			color: 'var(--color-primary)',
			description: 'Visualize your meeting activity and the value MeetingHero.AI provides:',
			features: [
				'Meetings Count',
				'Time in Meetings',
				'Prep Time Saved',
				'Profiles Pulled',
				'Meeting Distribution by Day',
				'Meeting Duration Breakdown'
			],
			benefit: 'Visualize your meeting activity and the value MeetingHero.AI provides.',
			reverse: false
		},
		{
			icon: '🔍',
			image: database,
			title: 'Searchable Profile Database',
			color: 'var(--color-secondary)',
			description: 'Profiles are saved and searchable in your dashboard.',
			features: [],
			benefit:
				'Create and maintain a searchable database of your meeting contacts and their information.',
			reverse: true
		}
	];
</script>

<SEO
	title="Features - MeetingHero.ai"
	description="Discover powerful features to elevate your meeting game. Get AI-powered attendee intel, company deep dives, discussion starters, and more."
	image="/og-image.png"
	url="/features"
/>

<div class="flex min-h-screen flex-col font-sans text-white" style="background: var(--color-bg);">
	<!-- Headline & Intro -->
	<section
		class="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h1
			class="mb-6 text-center text-4xl leading-tight font-bold md:text-6xl"
			style="color: var(--color-primary);"
		>
			Powerful Features to Elevate Your Meeting Game
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">
			MeetingHero.AI provides the intel you need, right where you need it—so you can walk into every
			meeting prepared and confident.
		</p>
	</section>

	<!-- Feature Sections -->
	{#each features as feature, i}
		<section
			class="relative flex w-full flex-col items-center px-4 py-24"
			style="background: {i % 2 === 0 ? 'var(--color-bg)' : 'var(--color-bg-dark)'};"
			onmouseenter={() => handleFeatureInteraction(feature.title, 'hover')}
			aria-label={`${feature.title} section`}
		>
			<div
				class="absolute inset-0 bg-[radial-gradient(circle_at_center,{feature.color}_0%,_transparent_70%)] opacity-5"
			></div>
			<div
				class="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 md:flex-row {feature.reverse
					? 'md:flex-row-reverse'
					: ''}"
			>
				<div class="flex flex-1 flex-col items-center md:items-start">
					<h2 class="mb-4 text-3xl font-semibold md:text-4xl" style="color: {feature.color};">
						{feature.icon}
						{feature.title}
					</h2>
					<p class="mb-4 max-w-lg text-lg text-gray-300">{feature.description}</p>
					{#if feature.features.length > 0}
						<ul class="mb-6 space-y-2 text-gray-400">
							{#each feature.features as item}
								<li class="flex items-center">
									<span class="mr-2 text-[var(--color-positive)]">•</span>
									{item}
								</li>
							{/each}
						</ul>
					{/if}
					<p class="font-semibold text-[var(--color-positive)]">
						Benefit: {feature.benefit}
					</p>
				</div>
				<div class="flex flex-1 justify-center">
					<div
						class="group flex h-64 w-80 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 bg-[var(--color-bg-dark)] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
						style="border-color: {feature.color};"
						onclick={() => openFullScreen(feature.image, feature.title)}
						onkeydown={(e) => e.key === 'Enter' && openFullScreen(feature.image, feature.title)}
						role="button"
						tabindex="0"
						aria-label="View {feature.title} in full screen"
					>
						<img
							src={feature.image}
							alt={feature.title}
							class="h-full w-full transform object-contain transition-transform duration-300 group-hover:scale-110"
						/>
					</div>
				</div>
			</div>
		</section>
	{/each}

	<!-- Full Screen Modal -->
	{#if selectedImage}
		<div
			class="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black"
			onclick={closeFullScreen}
			onkeydown={(e) => e.key === 'Escape' && closeFullScreen()}
			role="button"
			tabindex="0"
		>
			<div class="relative max-h-[90vh] max-w-[90vw]">
				<img
					src={selectedImage}
					alt="Full screen view"
					class="max-h-[90vh] max-w-[90vw] object-contain"
				/>
				<button
					class="absolute -top-4 -right-4 rounded-full bg-white p-2 text-black hover:bg-gray-200"
					onclick={closeFullScreen}
					aria-label="Close full screen view"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	{/if}

	<!-- CTA -->
	<section
		class="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<div class="relative z-10 text-center">
			<h2 class="mb-6 text-3xl font-semibold md:text-4xl" style="color: var(--color-primary);">
				Ready to Transform Your Meetings?
			</h2>
			<p class="mb-8 text-xl text-gray-300">
				Start your free trial today and experience the power of AI-driven meeting preparation.
			</p>
			<a
				href="https://app.meetinghero.ai/"
				class="group relative inline-block rounded-full bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
				onclick={() => trackNavigation('Try Free Features', 'https://app.meetinghero.ai/')}
			>
				Get Started
				<span
					class="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></span>
			</a>
		</div>
	</section>
</div>
