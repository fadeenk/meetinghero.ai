<script>
	import { base } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';

	const tools = [
		{
			title: 'Meeting Cost Calculator',
			color: 'var(--color-primary)',
			description:
				'Calculate the real cost of your meetings and understand the ROI of better meeting practices.',
			features: ['Interactive calculator', 'Cost breakdown', 'ROI analysis'],
			link: base + '/tools/meeting-cost-calculator',
			linkText: 'Try Calculator'
		},
		{
			title: 'Should This Be A Meeting?',
			color: 'var(--color-secondary)',
			description:
				'Use our framework to determine if a meeting is necessary or if it can be handled asynchronously.',
			features: [
				'Interactive decision flowchart',
				'Email templates for responses',
				'Best practices guide'
			],
			link: base + '/tools/should-this-be-a-meeting',
			linkText: 'Try Interactive Tool'
		},
		{
			title: 'Meeting Notes Generator',
			color: 'var(--color-accent)',
			description:
				'Interactive tool to create professional meeting notes with our standardized template.',
			features: ['Agenda structure', 'Attendee tracking', 'Action item format'],
			link: base + '/tools/meeting-notes',
			linkText: 'Try Interactive Tool'
		},
		{
			title: 'Action Item Tracker',
			color: 'var(--color-primary)',
			description: 'Simple templates and guides for tracking meeting action items and follow-ups.',
			features: ['Task tracking template', 'Due date management', 'Status updates'],
			link: base + '/tools/action-item-tracker',
			linkText: 'Try Interactive Tool'
		},
		{
			title: 'Meeting Agenda Templates',
			color: 'var(--color-secondary)',
			description:
				'Pre-designed templates for different types of meetings and best practices guide.',
			features: [
				'Weekly team syncs',
				'Project kick-offs',
				'Decision-making meetings',
				'Brainstorming sessions',
				'Problem-solving meetings'
			],
			link: base + '/tools/meeting-agenda-templates',
			linkText: 'View Templates'
		},
		{
			title: 'Contact Management Guide',
			color: 'var(--color-accent)',
			description:
				'A comprehensive guide to turn meeting connections into valuable professional relationships, with practical templates and best practices.',
			features: [
				'4-phase contact management system',
				'Ready-to-use email templates',
				'LinkedIn connection strategies',
				'Contact tracking framework'
			],
			link: base + '/tools/contact-management',
			linkText: 'View Guide'
		}
	];
</script>

<SEO
	title="Free Meeting Tools & Resources - MeetingHero.ai"
	description="Enhance your meeting productivity with our free tools: Meeting Cost Calculator, Meeting Notes Generator, Action Item Tracker, Agenda Templates, and more."
	image="/og-image.png"
	url="/tools"
/>

<div class="flex min-h-screen flex-col font-sans text-white" style="background: var(--color-bg);">
	<!-- Headline -->
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
			Free Meeting Tools & Resources
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">
			Enhance your meeting productivity with our collection of free tools and templates
		</p>
	</section>

	<!-- Tools Grid -->
	<section class="relative mx-auto w-full max-w-7xl px-4 py-24">
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-5"
		></div>
		<div class="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each tools as tool}
				<div
					class="group relative flex flex-col rounded-2xl border bg-[var(--color-bg-dark)] p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
					style="border-color: {tool.color};"
				>
					<div
						class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[{tool.color}] opacity-0 transition-opacity duration-300 group-hover:opacity-5"
					></div>
					<h2 class="mb-4 text-2xl font-bold" style="color: {tool.color};">
						{tool.title}
					</h2>
					<p class="mb-6 text-gray-300">
						{tool.description}
					</p>
					<ul class="mb-6 space-y-3 text-gray-400">
						{#each tool.features as feature}
							<li class="flex items-center">
								<span class="mr-2 text-[var(--color-positive)]">•</span>
								{feature}
							</li>
						{/each}
					</ul>
					<a
						href={tool.link}
						class="group relative mt-auto inline-block rounded-full border px-6 py-3 text-center text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
						style="border-color: {tool.color}; color: {tool.color};"
					>
						{tool.link === '#' ? 'Coming Soon' : tool.linkText}
						<span
							class="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[{tool.color}] to-[{tool.color}] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
						></span>
					</a>
				</div>
			{/each}
		</div>
	</section>

	<!-- CTA Section -->
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
				Ready to Make Your Meetings More Productive?
			</h2>
			<p class="mb-8 max-w-2xl text-center text-xl text-gray-300">
				Combine these tools with MeetingHero.AI's powerful meeting preparation features for maximum
				effectiveness.
			</p>
			<a
				href="https://app.meetinghero.ai/"
				class="group relative inline-block rounded-full bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
			>
				Try MeetingHero.AI Free
				<span
					class="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></span>
			</a>
		</div>
	</section>
</div>
