<script>
	import calendarImg from './calendar.png';
	import aiImg from './ai.png';
	import deliveryImg from './delivery.png';
	import SEO from '$lib/components/SEO.svelte';

	const steps = [
		{
			step: 1,
			title: 'Seamless Calendar Integration',
			color: 'var(--color-primary)',
			description:
				'Connect your Google or Outlook calendar in seconds. Your data is always secure, and you choose which calendars to sync.',
			features: [
				'Fast, secure authentication',
				'Select which calendars to sync',
				'Privacy-first: you control your data'
			],
			image: calendarImg,
			reverse: false
		},
		{
			step: 2,
			title: 'AI-Powered Research',
			color: 'var(--color-secondary)',
			description:
				'MeetingHero.AI automatically identifies your meeting attendees (excluding internal team members, based on your settings) and gathers relevant, publicly available information.',
			features: [
				'Pulls from trusted public sources (e.g., LinkedIn, news, company sites)',
				'Focuses on relevance and conciseness',
				'Customizable to your preferences'
			],
			image: aiImg,
			reverse: true
		},
		{
			step: 3,
			title: 'Tailored Prep Delivery',
			color: 'var(--color-accent)',
			description:
				'Receive your personalized prep document right where you need it—via email, calendar invite, or your MeetingHero.AI dashboard. Choose your preferred delivery method and timing (e.g., 15 minutes before your meeting).',
			features: [
				'Flexible delivery: email, calendar, dashboard',
				'Customizable timing',
				'Clear, actionable insights'
			],
			image: deliveryImg,
			reverse: false
		}
	];
</script>

<SEO
	title="How It Works - MeetingHero.ai"
	description="Learn how MeetingHero.ai automates your meeting prep in 3 simple steps. Connect your calendar, get AI-powered research, and receive tailored prep delivery."
	image="/logo.png"
	url="/how-it-works"
/>

<div class="flex min-h-screen flex-col font-sans text-white" style="background: var(--color-bg);">
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
			Get Prepared in 3 Simple Steps
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">
			MeetingHero.AI automates your meeting prep so you can focus on what matters. Here's how it
			works:
		</p>
	</section>

	{#each steps as step, i}
		<section
			class="relative flex w-full flex-col items-center px-4 py-24"
			style="background: {i % 2 === 0 ? 'var(--color-bg)' : 'var(--color-bg-dark)'};"
		>
			<div
				class="absolute inset-0 bg-[radial-gradient(circle_at_center,{step.color}_0%,_transparent_70%)] opacity-5"
			></div>
			<div
				class="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 md:flex-row {step.reverse
					? 'md:flex-row-reverse'
					: ''}"
			>
				<div class="flex flex-1 flex-col items-center md:items-start">
					<div class="mb-6 flex items-center gap-4">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold"
							style="background: {step.color}; color: var(--color-bg-dark);"
						>
							{step.step}
						</div>
						<h2 class="text-3xl font-semibold md:text-4xl" style="color: {step.color};">
							{step.title}
						</h2>
					</div>
					<p class="mb-6 max-w-lg text-lg text-gray-300">{step.description}</p>
					<ul class="mb-6 space-y-3 text-gray-400">
						{#each step.features as feature}
							<li class="flex items-center">
								<span class="mr-2 text-[var(--color-positive)]">•</span>
								{feature}
							</li>
						{/each}
					</ul>
				</div>
				<div class="flex flex-1 justify-center">
					<div
						class="group flex h-80 w-96 items-center justify-center overflow-hidden rounded-2xl border-2 bg-[var(--color-bg-dark)] text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
						style="border-color: {step.color}; color: {step.color};"
					>
						<img src={step.image} alt={step.title} class="h-full w-full object-contain p-4" />
					</div>
				</div>
			</div>
		</section>
	{/each}

	<!-- Benefit Summary & CTA -->
	<section
		class="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<div class="relative z-10 text-center">
			<h2
				class="mb-6 text-center text-3xl font-semibold md:text-4xl"
				style="color: var(--color-primary);"
			>
				Save Time. Walk In Confident. Have Better Meetings.
			</h2>
			<p class="mb-8 max-w-2xl text-center text-xl text-gray-300">
				With MeetingHero.AI, you'll always be prepared—without the manual research. Focus on your
				goals, not your prep.
			</p>
			<a
				href="https://app.meetinghero.ai/"
				class="group relative inline-block rounded-full bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
			>
				Start Your Free Trial Today
				<span
					class="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></span>
			</a>
		</div>
	</section>
</div>
