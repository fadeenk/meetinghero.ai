<script>
	// Placeholder for future interactivity (e.g., accordion)
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
			Need Help?
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">
			Find answers to common questions or contact our support team.
		</p>
	</section>

	<!-- FAQ Section -->
	<section class="relative mx-auto w-full max-w-4xl px-4 py-24">
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-5"
		></div>
		<div class="relative z-10">
			<!-- Getting Started -->
			<h2 class="mb-8 text-3xl font-semibold md:text-4xl" style="color: var(--color-primary);">
				Getting Started
			</h2>
			<div class="mb-12 space-y-4">
				<div
					class="group relative rounded-2xl border bg-[var(--color-bg-dark)] p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
					style="border-color: var(--color-primary);"
				>
					<p class="mb-2 text-xl font-bold">What calendars do you support?</p>
					<p class="text-gray-300">
						MeetingHero.AI supports Google Calendar and Microsoft Outlook.
					</p>
					<div
						class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[var(--color-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
					></div>
				</div>
			</div>

			<!-- Account & Privacy -->
			<h2 class="mb-8 text-3xl font-semibold md:text-4xl" style="color: var(--color-secondary);">
				Account & Privacy
			</h2>
			<div class="mb-12 space-y-4">
				{#each [{ question: 'How do you protect my data?', answer: 'We use industry-standard encryption and never share your data. You control which calendars and information are synced.', color: 'var(--color-secondary)' }, { question: 'Can I exclude internal colleagues?', answer: 'Yes, you can exclude specific domains (like your company email) from prep reports in your settings.', color: 'var(--color-secondary)' }, { question: 'Can I choose what information I receive?', answer: 'Absolutely! You can customize which types of information are included in your prep documents.', color: 'var(--color-secondary)' }] as faq}
					<div
						class="group relative rounded-2xl border bg-[var(--color-bg-dark)] p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
						style="border-color: {faq.color};"
					>
						<p class="mb-2 text-xl font-bold">{faq.question}</p>
						<p class="text-gray-300">{faq.answer}</p>
						<div
							class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[{faq.color}] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
						></div>
					</div>
				{/each}
			</div>

			<!-- Features -->
			<h2 class="mb-8 text-3xl font-semibold md:text-4xl" style="color: var(--color-accent);">
				Features
			</h2>
			<div class="mb-12 space-y-4">
				{#each [{ question: 'Where does the information come from?', answer: 'We gather publicly available information from trusted sources such as LinkedIn, company websites, and news articles.', color: 'var(--color-accent)' }, { question: 'How accurate is the information?', answer: 'We strive for accuracy by using reputable sources, but always recommend verifying critical details yourself.', color: 'var(--color-accent)' }] as faq}
					<div
						class="group relative rounded-2xl border bg-[var(--color-bg-dark)] p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
						style="border-color: {faq.color};"
					>
						<p class="mb-2 text-xl font-bold">{faq.question}</p>
						<p class="text-gray-300">{faq.answer}</p>
						<div
							class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[{faq.color}] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
						></div>
					</div>
				{/each}
			</div>

			<!-- Billing -->
			<h2 class="mb-8 text-3xl font-semibold md:text-4xl" style="color: var(--color-primary);">
				Billing
			</h2>
			<div class="mb-12 space-y-4">
				<div
					class="group relative rounded-2xl border bg-[var(--color-bg-dark)] p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
					style="border-color: var(--color-primary);"
				>
					<p class="mb-2 text-xl font-bold">How do I contact support?</p>
					<p class="text-gray-300">
						You can reach us anytime at <a
							href="mailto:support@meetinghero.ai"
							class="group relative inline-block text-[var(--color-secondary)] transition-all duration-300 hover:text-[var(--color-primary)]"
						>
							support@meetinghero.ai
							<span
								class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"
							></span>
						</a>.
					</p>
					<div
						class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[var(--color-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
					></div>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section
		class="relative flex w-full flex-col items-center justify-center px-4 py-24"
		style="background: var(--color-bg);"
	>
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-10"
		></div>
		<div class="relative z-10 text-center">
			<h2 class="mb-6 text-3xl font-semibold md:text-4xl" style="color: var(--color-primary);">
				Still need help?
			</h2>
			<p class="mb-4 text-center text-xl text-gray-300">
				Email us at <a
					href="mailto:support@meetinghero.ai"
					class="group relative inline-block text-[var(--color-secondary)] transition-all duration-300 hover:text-[var(--color-primary)]"
				>
					support@meetinghero.ai
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"
					></span>
				</a> and our team will get back to you promptly.
			</p>
		</div>
	</section>
</div>
