<script>
	const pricingInfo = [
		{
			name: 'Lite',
			monthlyPrice: '4.20',
			yearlyPlan: '42.00',
			features: [
				'60 Individuals look ups',
				'Basic individual information',
				'Basic company information',
				'Recent company news',
				'Company financing information',
				'Basic analytics'
			],
			buttonText: 'Start trial',
			recommended: false,
			active: true
		},
		{
			name: 'Premium',
			monthlyPrice: 6.99,
			yearlyPlan: 69.99,
			features: [
				'100 Individuals lookups',
				'Basic individual information',
				'Basic company information',
				'Recent company news',
				'Company financing information',
				'Basic analytics'
			],
			buttonText: 'Start Trial',
			recommended: true,
			active: true
		},
		{
			name: 'Professional',
			monthlyPrice: 9.99,
			yearlyPlan: 99.99,
			features: [
				'200 Individuals lookups',
				'Basic individual information',
				'Basic company information',
				'Recent company news',
				'Company financing information',
				'Basic analytics'
			],
			buttonText: 'Start Trial',
			recommended: false,
			active: true
		}
	];
</script>

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
			Simple Pricing, Serious Value
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">
			Save hours of manual research for less than the cost of a coffee per month.
		</p>
	</section>

	<!-- Free Trial Section -->
	<section
		class="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-16"
		style="background: var(--color-bg);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-5"
		></div>
		<div
			class="relative z-10 flex w-full max-w-xl flex-col items-center rounded-2xl bg-[var(--color-bg-dark)] p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
		>
			<h2 class="mb-4 text-2xl font-bold" style="color: var(--color-primary);">
				Try MeetingHero.AI Completely Free for 7 Days
			</h2>
			<p class="mb-6 text-lg" style="color: var(--color-positive);">
				No Credit Card Required to Start.
			</p>
			<a
				href="https://app.meetinghero.ai/"
				class="group relative inline-block rounded-full bg-[var(--color-primary)] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
			>
				Start Your Free Trial
				<span
					class="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				></span>
			</a>
		</div>
	</section>

	<!-- Subscription Plans -->
	<section
		class="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-24"
		style="background: var(--color-bg-dark);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<div class="relative z-10 flex w-full max-w-6xl flex-col justify-center gap-8 md:flex-row">
			{#each pricingInfo as plan}
				<div
					class="group relative flex-1 rounded-2xl border-2 bg-[var(--color-bg)] p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl {plan.recommended
						? 'border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]'
						: 'border-[var(--color-bg-dark)]'} flex flex-col items-center"
				>
					<div
						class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[var(--color-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-5"
					></div>
					{#if plan.recommended}
						<div
							class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-primary)] px-4 py-1 text-sm font-bold text-white shadow-lg"
						>
							Most Popular
						</div>
					{/if}
					<h3 class="mb-4 text-3xl font-bold" style="color: var(--color-primary);">{plan.name}</h3>
					<div class="mb-2 text-4xl font-bold">
						${plan.monthlyPrice}<span class="text-lg font-normal text-gray-400">/mo</span>
					</div>
					<div class="mb-6 text-sm text-gray-400">or ${plan.yearlyPlan}/yr</div>
					<ul class="mx-auto mb-8 w-full max-w-xs space-y-3 text-left text-gray-300">
						{#each plan.features as feature}
							<li class="flex items-center">
								<span class="mr-2 text-[var(--color-positive)]">•</span>
								{feature}
							</li>
						{/each}
					</ul>
					<a
						href="https://app.meetinghero.ai/"
						class="group relative inline-block w-full rounded-full bg-[var(--color-primary)] px-6 py-3 text-center text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
					>
						{plan.buttonText}
						<span
							class="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
						></span>
					</a>
				</div>
			{/each}
		</div>
	</section>

	<!-- Pricing FAQs -->
	<section class="relative mx-auto w-full max-w-4xl px-4 py-24">
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-5"
		></div>
		<div class="relative z-10">
			<h2 class="mb-8 text-3xl font-semibold md:text-4xl" style="color: var(--color-primary);">
				Pricing FAQs
			</h2>
			<div class="space-y-4">
				{#each [{ question: 'How do I start the free trial?', answer: 'Just click "Start Your Free Trial" above and follow the sign up steps. No credit card required.' }, { question: 'Do I need a credit card for the trial?', answer: 'Nope! You can try MeetingHero.AI for 7 days without entering any payment info.' }, { question: 'What happens after the trial?', answer: "You'll have the option to subscribe to a paid plan. If you don't, your access will pause—no charges, no surprises." }, { question: 'How do I cancel?', answer: 'You can cancel anytime from your account dashboard. No questions asked.' }] as faq}
					<div
						class="group relative rounded-2xl border bg-[var(--color-bg-dark)] p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
						style="border-color: var(--color-primary);"
					>
						<p class="mb-2 text-xl font-bold">{faq.question}</p>
						<p class="text-gray-300">{faq.answer}</p>
						<div
							class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[var(--color-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
						></div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
