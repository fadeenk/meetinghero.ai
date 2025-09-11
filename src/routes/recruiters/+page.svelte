<script lang="ts">
	import { base } from '$app/paths';
	import SEO from '$lib/components/SEO.svelte';
	import { trackNavigation, trackFeatureInteraction, trackEngagement } from '$lib/analytics';
	import recruitersHeroDemo from '../sales/sales-hero-demo.jpg'; // TODO: Replace with actual recruiters demo image

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
			title: 'Time-Consuming Research',
			desc: "Jumping between a candidate's LinkedIn profile, resume, and portfolio for every screening call kills your productivity and pulls you away from sourcing top talent."
		},
		{
			icon: '💬',
			title: 'Generic Conversations',
			desc: "It's tough to build genuine rapport and stand out when you're talking to dozens of new people each week. Generic questions lead to generic answers."
		},
		{
			icon: '🚪',
			title: 'Poor Candidate Experience',
			desc: 'An unprepared interviewer makes top candidates feel undervalued. In a competitive market, this can lead to offer rejections and a damaged employer brand.'
		},
		{
			icon: '🧠',
			title: 'Information Overload',
			desc: "Trying to remember key details from a resume while you're in the middle of a high-stakes interview is stressful and can lead to embarrassing mix-ups."
		}
	];

	const features: Feature[] = [
		{
			icon: '📋',
			title: 'Automated Candidate Briefings',
			subtitle: 'Know Your Candidate, Instantly.',
			desc: "MeetingHero.ai syncs with your calendar and automatically gathers comprehensive, public information on every candidate you're scheduled to meet. Get their work history, education, and company background delivered to you—no manual research required."
		},
		{
			icon: '🤝',
			title: 'Build Instant, Meaningful Rapport',
			subtitle: 'Connect on a Deeper Level.',
			desc: 'Our AI generates personalized discussion points based on the candidate\'s unique profile. Go beyond "Tell me about yourself" and start conversations about a specific past project, a shared alma mater, or their previous company\'s industry, making candidates feel seen and understood.'
		},
		{
			icon: '🏢',
			title: 'Elevate Your Employer Brand',
			subtitle: 'Make Every Interaction Count.',
			desc: 'Every interaction is a reflection of your company. By being effortlessly prepared, you show candidates that you are professional, respectful of their time, and serious about finding the right fit. This builds trust and makes your offers more compelling.'
		}
	];

	const steps: Step[] = [
		{
			icon: '📅',
			title: 'Connect Your Calendar',
			desc: "Sync your Google or Outlook calendar in just two clicks. Setup takes less than 60 seconds, and we'll start monitoring your upcoming interviews."
		},
		{
			icon: '📬',
			title: 'Receive Your Automated Briefing',
			desc: "Before each interview, we'll automatically send a concise, powerful briefing on your candidate directly to your email or as a private calendar invite. Your choice."
		},
		{
			icon: '💪',
			title: 'Interview with Confidence',
			desc: "Walk into every conversation fully informed and ready to connect. Focus on assessing the candidate's skills and cultural fit, not on remembering their resume."
		}
	];

	const faqs: FAQ[] = [
		{
			question: 'Is MeetingHero.ai compliant with privacy regulations like GDPR and CCPA?',
			answer:
				'Absolutely. MeetingHero.ai only aggregates publicly available information from professional networking sites and business news sources. We do not access private data or information from your ATS.'
		},
		{
			question: 'Can I prevent it from creating briefings for my internal meetings?',
			answer:
				"Yes! In your settings, you can easily add your company's domain (e.g., *@mycompany.com) to an exclusion list. This ensures you only receive prep for external meetings like candidate interviews."
		},
		{
			question: 'Does this integrate with my Applicant Tracking System (ATS)?',
			answer:
				'Currently, MeetingHero.ai works directly with your calendar (Google or Outlook). Since most ATS platforms sync interview schedules to your calendar, MeetingHero will automatically pick them up from there. We are exploring direct ATS integrations for the future.'
		},
		{
			question: "Will the candidates know I'm using this?",
			answer:
				'No. All briefings are delivered privately to you via email or a private calendar invite that only you can see. To the candidate, you will just appear exceptionally well-prepared and engaged.'
		}
	];
</script>

<SEO image="/og-image.png" url="/recruiters" />

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
			Build Instant Rapport with Every Candidate
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-200 md:text-2xl">
			Stop the pre-interview scramble. MeetingHero.ai automatically delivers rich candidate profiles
			and smart talking points before every interview, so you can focus on what matters: creating an
			unforgettable candidate experience.
		</p>
		<!-- Visual Placeholder -->
		<div
			class="group relative mb-8 w-full max-w-2xl overflow-hidden rounded-2xl border shadow-xl transition-all duration-300 hover:shadow-2xl"
			style="background: var(--color-bg-dark); border-color: var(--color-primary);"
		>
			<img src={recruitersHeroDemo} alt="Recruiters Hero Demo" class="h-full w-full object-cover" />
		</div>
		<div class="flex flex-col gap-4 md:flex-row">
			<a
				href="https://app.meetinghero.ai/"
				class="group relative hidden overflow-hidden rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
				style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
				onclick={() => trackNavigation('Try Free Recruiters Hero', 'https://app.meetinghero.ai/')}
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
				onclick={() => trackNavigation('See Demo Recruiters', `${base}/demo`)}
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
			Tired of the Pre-Interview Juggle?
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
			Become the Most Prepared Recruiter They'll Meet
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
			Why Top Talent Teams Trust MeetingHero.ai
		</h2>
		<div class="mx-auto max-w-2xl text-center">
			<blockquote class="mb-4 text-xl text-gray-300 italic">
				"MeetingHero.ai is a game-changer. I used to spend 15-20 minutes prepping for each screening
				call. Now, the prep comes to me. I can walk into an interview and mention a specific project
				from their past or a recent article their previous company published. The difference in
				candidate engagement is night and day. It's my secret weapon for creating a standout
				candidate experience."
			</blockquote>
			<span class="text-lg font-semibold" style="color: var(--color-primary);"
				>— Sarah J., Senior Technical Recruiter</span
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
			Go from Scrambling to Confident in 3 Simple Steps
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
			Ready to Make Every Candidate Feel Valued?
		</h2>
		<p class="mb-8 max-w-2xl text-center text-xl text-gray-300">
			Stop wasting time on manual prep and start building relationships that lead to accepted
			offers. Give your candidates the experience they deserve and give yourself the gift of time
			and confidence.
		</p>
		<a
			href="https://app.meetinghero.ai/"
			class="group relative hidden overflow-hidden rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
			style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
			onclick={() => trackNavigation('Claim Free Trial Recruiters', 'https://app.meetinghero.ai/')}
		>
			<span class="relative z-10">Start My 7-Day Free Trial - No Credit Card Required</span>
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
