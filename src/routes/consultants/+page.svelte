<script lang="ts">
	import { base } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import { trackNavigation, trackFeatureInteraction, trackEngagement } from '$lib/analytics';
	import consultantsHeroDemo from '../sales/sales-hero-demo.jpg';

	interface PainPoint {
		icon: string;
		title: string;
		desc: string;
	}

	interface Feature {
		icon: string;
		title: string;
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
			icon: '🎪',
			title: 'Juggling Multiple Clients',
			desc: "Switching between different projects and industries means constantly re-learning who's who. It's easy for crucial details and opportunities to slip through the cracks."
		},
		{
			icon: '⏰',
			title: 'Billable Hours vs. Unpaid Prep',
			desc: "Every hour spent on manual research is an hour you're not billing. This unpaid administrative time directly eats into your profitability and project margins."
		},
		{
			icon: '🎯',
			title: 'Pressure for Instant Credibility',
			desc: "As an external expert, you're expected to add value from day one. Showing up unprepared can damage your reputation and client confidence before the project even kicks off."
		},
		{
			icon: '🔍',
			title: 'Information Overload',
			desc: 'LinkedIn, company websites, press releases... finding the right information is like searching for a needle in a haystack. Wasting time on irrelevant data is a constant risk.'
		}
	];

	const features: Feature[] = [
		{
			icon: '📊',
			title: 'Get Instant Client & Stakeholder Intel',
			desc: "Stop digging. MeetingHero.ai does the heavy lifting, automatically gathering comprehensive data on your client's company, their recent news, and the professional history of every person in the meeting. You get all the context you need without lifting a finger."
		},
		{
			icon: '💡',
			title: 'Ask Smarter, More Insightful Questions',
			desc: "Move beyond generic small talk. Our AI generates insightful discussion points based on your client's unique background and business, helping you uncover key challenges and build genuine rapport instantly."
		},
		{
			icon: '📱',
			title: 'Stay Organized and Focused',
			desc: 'Forget scattered notes and dozens of browser tabs. Receive a clean, concise briefing for every meeting, delivered directly to your calendar invite or email. All the critical intel is in one place, ready when you are.'
		}
	];

	const steps: Step[] = [
		{
			icon: '📅',
			title: 'Connect Your Calendar',
			desc: 'Securely connect your Google or Outlook calendar in seconds. MeetingHero.ai automatically identifies your upcoming external meetings.'
		},
		{
			icon: '🤖',
			title: 'Let the AI Get to Work',
			desc: 'Our platform instantly begins gathering and analyzing public data about the attendees and their companies, compiling it into an easy-to-digest brief.'
		},
		{
			icon: '📬',
			title: 'Receive Your Pre-Meeting Brief',
			desc: 'Get a powerful, actionable summary delivered right to your inbox or attached to your calendar event. Walk into your meeting informed and confident.'
		}
	];

	const faqs: FAQ[] = [
		{
			question: 'Is my client data and calendar information secure?',
			answer:
				'Absolutely. We take your privacy and security seriously. MeetingHero.ai uses industry-standard encryption for all data in transit and at rest. We never share or sell your calendar or contact information.'
		},
		{
			question: 'Will I get briefings for meetings with my own team?',
			answer:
				"No, you have full control. In the settings, you can easily add your own company's domain (e.g., *@myconsultingfirm.com) to an exclusion list, so you only receive prep for external client meetings."
		},
		{
			question: 'How quickly will I see a return on investment (ROI)?',
			answer:
				'Most consultants and freelancers save several hours of unpaid prep time in their very first week. If you value that time at even a fraction of your billable rate, the ROI is almost immediate.'
		},
		{
			question: 'Can I use this for multiple clients at the same time?',
			answer:
				'Yes! MeetingHero.ai is designed for professionals who juggle multiple clients and projects. It works seamlessly in the background for every external meeting in your connected calendar, regardless of the client.'
		}
	];
</script>

<SEO image="/og-image.png" url="/consultants" />

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
			Walk Into Any Client Meeting as an Instant Expert
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-200 md:text-2xl">
			MeetingHero.ai automatically researches your clients, their company, and the key stakeholders
			you're meeting. Stop the last-minute scramble and focus on what you do best: delivering
			high-impact results.
		</p>
		<!-- Visual Placeholder -->
		<div
			class="group relative mb-8 w-full max-w-2xl overflow-hidden rounded-2xl border shadow-xl transition-all duration-300 hover:shadow-2xl"
			style="background: var(--color-bg-dark); border-color: var(--color-primary);"
		>
			<img
				src={consultantsHeroDemo}
				alt="Consultants Hero Demo"
				class="h-full w-full object-cover"
			/>
		</div>
		<div class="flex flex-col gap-4 md:flex-row">
			<a
				href="https://app.meetinghero.ai/"
				class="group relative overflow-hidden rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
				style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
				onclick={() => trackNavigation('Try Free Consultants Hero', 'https://app.meetinghero.ai/')}
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
				onclick={() => trackNavigation('See Demo Consultants', `${base}/demo`)}
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
			The Client-Juggling, Time-Sucking Scramble
		</h2>
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
			Deliver Impact From Day One
		</h2>
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
			Trusted by Professionals Who Bill by the Hour
		</h2>
		<div class="mx-auto max-w-2xl text-center">
			<blockquote class="mb-4 text-xl text-gray-300 italic">
				"As an independent consultant, my time is my most valuable asset. MeetingHero.ai saves me at
				least 3-4 hours of unpaid prep work a week. I walk into discovery calls more confident, ask
				better questions, and consistently impress new clients with how well-prepared I am. It paid
				for itself in the first week."
			</blockquote>
			<span class="text-lg font-semibold" style="color: var(--color-primary);"
				>— Jessica M., Management Consultant</span
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
			Effortless Prep in 3 Simple Steps
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
			Stop Prepping. Start Consulting.
		</h2>
		<p class="mb-8 max-w-2xl text-center text-xl text-gray-300">
			Your expertise is what clients pay for. Let MeetingHero.ai handle the busywork so you can
			focus on delivering incredible value. Reclaim your time, boost your profitability, and make
			every first impression count.
		</p>
		<a
			href="https://app.meetinghero.ai/"
			class="group relative overflow-hidden rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
			style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
			onclick={() => trackNavigation('Claim Free Trial Consultants', 'https://app.meetinghero.ai/')}
		>
			<span class="relative z-10">Start My Free 7-Day Trial — No Credit Card Required</span>
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
