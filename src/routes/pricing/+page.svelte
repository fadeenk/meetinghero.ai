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
		class="flex w-full flex-col items-center justify-center px-4 py-12"
		style="background: var(--color-bg-dark);"
	>
		<h1
			class="mb-4 text-center text-4xl font-bold md:text-5xl"
			style="color: var(--color-primary);"
		>
			Simple Pricing, Serious Value
		</h1>
	</section>

	<!-- Free Trial Section -->
	<section
		class="flex w-full flex-col items-center justify-center px-4 py-8"
		style="background: var(--color-bg);"
	>
		<div
			class="flex w-full max-w-xl flex-col items-center rounded-xl bg-[var(--color-bg-dark)] p-8 shadow-lg"
		>
			<h2 class="mb-2 text-2xl font-bold" style="color: var(--color-primary);">
				Try MeetingHero.AI Completely Free for 7 Days
			</h2>
			<p class="mb-2 text-lg text-gray-300">No Credit Card Required to Start.</p>
			<a
				href="/"
				class="rounded-full px-8 py-3 text-lg font-bold text-white shadow-lg transition-transform hover:scale-105"
				style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
			>
				Start Your Free Trial
			</a>
		</div>
	</section>

	<!-- Subscription Plans -->
	<section
		class="flex w-full flex-col items-center justify-center px-4 py-12"
		style="background: var(--color-bg-dark);"
	>
		<div class="mb-8 max-w-2xl text-center text-lg text-gray-300">
			Save hours of manual research for less than the cost of a coffee per month.
		</div>
		<div class="flex w-full max-w-5xl flex-col justify-center gap-8 md:flex-row">
			{#each pricingInfo as plan}
				<div
					class="flex-1 rounded-xl border-2 bg-[var(--color-bg)] p-6 shadow-lg transition-transform hover:scale-105 {plan.recommended
						? 'border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]'
						: 'border-[var(--color-bg-dark)]'} relative flex flex-col items-center"
				>
					{#if plan.recommended}
						<div
							class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-primary)] px-4 py-1 text-xs font-bold text-white shadow"
						>
							Most Popular
						</div>
					{/if}
					<h3 class="mb-2 text-2xl font-bold" style="color: var(--color-primary);">{plan.name}</h3>
					<div class="mb-1 text-3xl font-bold">
						${plan.monthlyPrice}<span class="text-base font-normal text-gray-400">/mo</span>
					</div>
					<div class="mb-4 text-sm text-gray-400">or ${plan.yearlyPlan}/yr</div>
					<ul class="mx-auto mb-6 w-full max-w-xs space-y-2 text-left text-gray-300">
						{#each plan.features as feature}
							<li>• {feature}</li>
						{/each}
					</ul>
					<a
						href="/"
						class="w-full rounded-full px-6 py-2 text-center text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
						style="background: linear-gradient(to right, var(--color-primary), var(--color-secondary));"
					>
						{plan.buttonText}
					</a>
				</div>
			{/each}
		</div>
	</section>

	<!-- Pricing FAQs -->
	<section class="mx-auto w-full max-w-3xl px-4 py-12">
		<h2 class="mb-6 text-2xl font-semibold" style="color: var(--color-primary);">Pricing FAQs</h2>
		<div class="space-y-4">
			<div class="rounded-lg bg-[var(--color-bg-dark)] p-4">
				<p class="font-bold">How do I start the free trial?</p>
				<p class="text-gray-300">
					Just click "Start Your Free Trial" above and follow the sign up steps. No credit card
					required.
				</p>
			</div>
			<div class="rounded-lg bg-[var(--color-bg-dark)] p-4">
				<p class="font-bold">Do I need a credit card for the trial?</p>
				<p class="text-gray-300">
					Nope! You can try MeetingHero.AI for 7 days without entering any payment info.
				</p>
			</div>
			<div class="rounded-lg bg-[var(--color-bg-dark)] p-4">
				<p class="font-bold">What happens after the trial?</p>
				<p class="text-gray-300">
					You'll have the option to subscribe to a paid plan. If you don't, your access will
					pause—no charges, no surprises.
				</p>
			</div>
			<div class="rounded-lg bg-[var(--color-bg-dark)] p-4">
				<p class="font-bold">How do I cancel?</p>
				<p class="text-gray-300">
					You can cancel anytime from your account dashboard. No questions asked.
				</p>
			</div>
		</div>
	</section>
</div>
