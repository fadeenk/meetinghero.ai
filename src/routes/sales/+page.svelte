<script lang="ts">
	import { base } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import { trackNavigation, trackFeatureInteraction, trackEngagement } from '$lib/analytics';
	import salesHeroDemo from './sales-hero-demo.jpg';

	interface PainPoint {
		icon: string;
		title: string;
		desc: string;
	}

	interface Feature {
		icon: string;
		title: string;
		subtitle: string;
		desc: string;
	}

	interface Step {
		icon: string;
		title: string;
		desc: string;
	}

	interface FAQ {
		question: string;
		answer: string;
	}

	const painPoints: PainPoint[] = [
		{
			icon: '⏰',
			title: 'Wasted Hours',
			desc: 'Spending 30-60 minutes researching each prospect instead of selling.'
		},
		{
			icon: '🎯',
			title: 'Generic Pitches',
			desc: 'Struggling to personalize your approach for every single call.'
		},
		{
			icon: '🔍',
			title: 'Missed Cues',
			desc: 'Overlooking a key piece of news or a shared connection that could have built instant rapport.'
		},
		{
			icon: '⚡',
			title: 'Lost Momentum',
			desc: 'Juggling back-to-back meetings with no time for quality prep in between.'
		}
	];

	const features: Feature[] = [
		{
			icon: '📊',
			title: 'Automate Prospect Intelligence',
			subtitle: 'Know Your Buyer, Instantly.',
			desc: "Before every meeting, get a full dossier on your prospect. We pull their complete job history, education, recent news about their company, funding rounds, and key investors. Uncover leverage points you'd never find on your own."
		},
		{
			icon: '💬',
			title: 'AI-Powered Conversation Starters',
			subtitle: 'Craft the Perfect Opening.',
			desc: 'Our AI analyzes all the data and generates smart, relevant discussion points. Effortlessly break the ice with a question about their recent company funding, their alma mater, or a past role at a company you know.'
		},
		{
			icon: '🔄',
			title: 'Seamless Workflow Integration',
			subtitle: 'Get Intel Where You Work.',
			desc: "No new software to learn. MeetingHero.ai integrates with your Google or Outlook Calendar and delivers the prep brief directly to your inbox or as a private calendar invite. It's there right when you need it."
		}
	];

	const steps: Step[] = [
		{
			icon: '📅',
			title: 'Connect Your Calendar',
			desc: 'Securely sign up in 60 seconds.'
		},
		{
			icon: '📬',
			title: 'Get Automated Prep',
			desc: 'Receive detailed briefs before every sales call.'
		},
		{
			icon: '🎯',
			title: 'Close More Deals',
			desc: 'Walk in prepared, confident, and ready to connect.'
		}
	];

	const faqs: FAQ[] = [
		{
			question: 'Does this integrate with my CRM like Salesforce or HubSpot?',
			answer:
				"While we don't have a direct CRM integration yet, the intel provided is perfect for updating your contact notes before or after a call."
		},
		{
			question: 'How does it handle meetings with multiple prospects?',
			answer:
				"MeetingHero.ai creates a profile for every external attendee, so you're prepared to speak with everyone in the room."
		},
		{
			question: 'Is my calendar and contact data secure?',
			answer:
				'Absolutely. We use bank-level encryption and follow industry best practices for data security. We only use your data to provide the service to you.'
		}
	];
</script>

<SEO image="/og-image.png" url="/sales" />

<div class="flex min-h-screen flex-col font-sans text-white" style="background: var(--color-bg);">
	<!-- Hero Section -->
	<section
		class="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-16"
		style="background: linear-gradient(to bottom, var(--color-bg), var(--color-bg-dark), var(--color-bg));"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h1
			class="mb-4 text-center text-4xl leading-tight font-bold drop-shadow-lg md:text-7xl"
			style="color: var(--color-primary);"
		>
			Never Walk Into a Sales Call Cold Again
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-200 md:text-2xl">
			MeetingHero.ai automatically delivers the deep prospect and company intel you need to build
			rapport, personalize your pitch, and crush your quota.
		</p>
		<!-- Visual Placeholder -->
		<div
			class="group relative mb-8 w-full max-w-2xl overflow-hidden rounded-2xl border shadow-xl transition-all duration-300 hover:shadow-2xl"
			style="background: var(--color-bg-dark); border-color: var(--color-primary);"
		>
			<img src={salesHeroDemo} alt="Sales Hero Demo" class="h-full w-full object-cover" />
		</div>
		<div class="flex flex-col gap-4 md:flex-row">
			<a
				href="https://app.meetinghero.ai/"
				class="group relative hidden overflow-hidden rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
				style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
				onclick={() => trackNavigation('Try Free Sales Hero', 'https://app.meetinghero.ai/')}
			>
				<span class="relative z-10">Start My 7-Day Free Trial</span>
				<div
					class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
				></div>
			</a>
			<a
				href="https://www.youtube.com/embed/IDNpZuoeIOU"
				class="group relative overflow-hidden rounded-full border px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-[var(--color-bg-dark)]"
				style="border-color: var(--color-primary); color: var(--color-primary);"
				onclick={() => trackNavigation('See Demo Sales', `${base}/demo`)}
			>
				<span class="relative z-10">See a 1-min Demo</span>
				<div
					class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[var(--color-primary)]/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
				></div>
			</a>
		</div>
	</section>

	<!-- Problem Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h2
			class="mb-12 text-center text-3xl font-semibold md:text-4xl"
			style="color: var(--color-secondary);"
		>
			Stop the Scramble, Start Selling
		</h2>
		<p class="mb-12 text-center text-xl text-gray-300">You know the pre-call chaos.</p>
		<div class="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each painPoints as point}
				<div
					class="group relative flex flex-col items-center rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
					style="background: var(--color-bg); border-color: var(--color-secondary);"
				>
					<span class="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110"
						>{point.icon}</span
					>
					<h3 class="mb-2 text-center text-xl font-bold">{point.title}</h3>
					<p class="text-center text-gray-300">{point.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Solution Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h2
			class="mb-12 text-center text-3xl font-semibold md:text-4xl"
			style="color: var(--color-primary);"
		>
			The Smarter Way to Prepare for Every Call
		</h2>
		<p class="mb-12 text-center text-xl text-gray-300">
			MeetingHero.ai gives you an unfair advantage.
		</p>
		<div class="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
			{#each features as feature}
				<div
					class="group relative flex flex-col items-center rounded-2xl border p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
					style="background: var(--color-bg-dark); border-color: var(--color-primary);"
				>
					<span class="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110"
						>{feature.icon}</span
					>
					<h3 class="mb-2 text-center text-xl font-bold">{feature.title}</h3>
					<h4 class="mb-4 text-center text-lg" style="color: var(--color-secondary);">
						{feature.subtitle}
					</h4>
					<p class="text-center text-gray-300">{feature.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Social Proof Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h2
			class="mb-12 text-center text-3xl font-semibold md:text-4xl"
			style="color: var(--color-secondary);"
		>
			Top Sales Reps Rely on MeetingHero.ai
		</h2>
		<div class="mx-auto max-w-2xl text-center">
			<blockquote class="mb-4 text-xl text-gray-300 italic">
				"As an Account Executive, my calendar is my life. MeetingHero.ai saves me at least 4 hours
				of manual prep time a week. I'm walking into demos more confident and closing deals because
				I can instantly connect with prospects on a personal level. It's a total game-changer."
			</blockquote>
			<span class="text-lg font-semibold" style="color: var(--color-primary);"
				>— Jessica M., Senior Account Executive</span
			>
		</div>
	</section>

	<!-- How It Works Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h2
			class="mb-12 text-center text-3xl font-semibold md:text-4xl"
			style="color: var(--color-primary);"
		>
			How It Works
		</h2>
		<div class="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
			{#each steps as step}
				<div class="group flex flex-col items-center">
					<span class="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110"
						>{step.icon}</span
					>
					<h3 class="mb-2 text-xl font-bold">{step.title}</h3>
					<p class="text-center text-gray-300">{step.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Final CTA Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-secondary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h2
			class="mb-6 text-center text-3xl font-semibold md:text-4xl"
			style="color: var(--color-secondary);"
		>
			Ready to Become a Top Performer?
		</h2>
		<p class="mb-8 max-w-2xl text-center text-xl text-gray-300">
			Stop wasting time on manual research and focus on what you do best: selling. Start your free
			trial today. No credit card required.
		</p>
		<a
			href="https://app.meetinghero.ai/"
			class="group relative hidden overflow-hidden rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
			style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
			onclick={() => trackNavigation('Claim Free Trial Sales', 'https://app.meetinghero.ai/')}
		>
			<span class="relative z-10">Claim My Free 7-Day Trial</span>
			<div
				class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
			></div>
		</a>
	</section>

	<!-- FAQ Section -->
	<section
		class="relative flex w-full flex-col items-center px-4 py-24"
		style="background: var(--color-bg);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<h2
			class="mb-12 text-center text-3xl font-semibold md:text-4xl"
			style="color: var(--color-primary);"
		>
			Frequently Asked Questions
		</h2>
		<div class="grid w-full max-w-4xl gap-8">
			{#each faqs as faq}
				<div
					class="rounded-2xl border p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
					style="background: var(--color-bg-dark); border-color: var(--color-primary);"
				>
					<h3 class="mb-4 text-xl font-bold">{faq.question}</h3>
					<p class="text-gray-300">{faq.answer}</p>
				</div>
			{/each}
		</div>
	</section>
</div>
