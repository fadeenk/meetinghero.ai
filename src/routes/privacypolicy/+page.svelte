<script>
	import SEO from '$lib/components/SEO.svelte';
	// Placeholder for future privacy policy content
</script>

<SEO
	title="Privacy Policy - MeetingHero.ai"
	description="Learn how MeetingHero.ai protects your privacy and handles your data. Our privacy policy covers data collection, usage, sharing, and security measures."
	image="/og-image.png"
	url="/privacypolicy"
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
			Privacy Policy
		</h1>
		<p class="mb-8 max-w-2xl text-center text-lg text-gray-300 md:text-xl">
			Last updated: January 22nd, 2025
		</p>
		<p class="mx-auto w-full max-w-3xl px-4 text-center text-gray-300">
			We at Internet Candy Corporation (the "Company", "we", "us", or "our") know you care about how
			your personal information is used and shared, and we take your privacy seriously. We consider
			it very important to limit who can see your personal information and to be transparent about
			how we use it.
		</p>
	</section>

	<!-- Main Content -->
	<section class="relative mx-auto w-full max-w-4xl px-4 py-24">
		<div
			class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_70%)] opacity-5"
		></div>
		<div class="relative z-10 space-y-12">
			<!-- Information Collection -->
			<div
				class="group relative rounded-2xl border bg-[var(--color-bg-dark)] p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
				style="border-color: var(--color-primary);"
			>
				<h2 class="mb-6 text-2xl font-semibold" style="color: var(--color-primary);">
					What information do we collect?
				</h2>
				<div class="space-y-6">
					<div>
						<p class="mb-4 text-lg font-semibold text-gray-300">Information you provide to us</p>
						<p class="text-gray-300">
							We receive and store any information you knowingly provide to us. For example, through
							the registration process and/or through your account settings, we may collect Personal
							Information such as your name, email address, phone number, etc. If you sign in to the
							Services through a third party site or service, you understand some content and/or
							information in those accounts ("Third Party Account Information") may be transmitted
							into your account with us if you authorize such transmissions.
						</p>
					</div>
					<div>
						<p class="mb-4 text-lg font-semibold text-gray-300">
							Information Collected Automatically
						</p>
						<p class="text-gray-300">
							Whenever you interact with our Services, we automatically receive and record
							information on our server logs from your browser or device, which may include your IP
							address, geolocation data, device identification, "cookie" information, and the type
							of browser and/or device you're using to access our Services.
						</p>
					</div>
				</div>
				<div
					class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[var(--color-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
				></div>
			</div>

			<!-- Data Usage -->
			<div
				class="group relative rounded-2xl border bg-[var(--color-bg-dark)] p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
				style="border-color: var(--color-secondary);"
			>
				<h2 class="mb-6 text-2xl font-semibold" style="color: var(--color-secondary);">
					How Is the Data Collected Being Used?
				</h2>
				<p class="mb-4 text-gray-300">
					We use the data we collect to provide, improve, and customize our services for you.
					Specifically:
				</p>
				<ul class="space-y-3 text-gray-300">
					<li class="flex items-center">
						<span class="mr-2 text-[var(--color-positive)]">•</span>
						Authentication: We use your name and email address to verify your identity and securely log
						you into our app.
					</li>
					<li class="flex items-center">
						<span class="mr-2 text-[var(--color-positive)]">•</span>
						Calendar Scanning: We access your calendar information to identify events and provide the
						services you have requested.
					</li>
					<li class="flex items-center">
						<span class="mr-2 text-[var(--color-positive)]">•</span>
						Calendar Updates: With your permission, we use write access to your calendar to deliver requested
						services.
					</li>
				</ul>
				<div
					class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[var(--color-secondary)] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
				></div>
			</div>

			<!-- Data Sharing -->
			<div
				class="group relative rounded-2xl border bg-[var(--color-bg-dark)] p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
				style="border-color: var(--color-accent);"
			>
				<h2 class="mb-6 text-2xl font-semibold" style="color: var(--color-accent);">
					Will you share any of the Personal Information?
				</h2>
				<p class="mb-4 text-gray-300">
					We will never disclose the data we collect from you to third parties unless it is for the
					delivery of the service. We may only disclose Personal Information that we collect as
					described in this privacy policy:
				</p>
				<ul class="space-y-3 text-gray-300">
					<li class="flex items-center">
						<span class="mr-2 text-[var(--color-positive)]">•</span>
						Subsidiaries and affiliates who are bound by our privacy standards
					</li>
					<li class="flex items-center">
						<span class="mr-2 text-[var(--color-positive)]">•</span>
						Service providers who support our business and are bound by confidentiality
					</li>
					<li class="flex items-center">
						<span class="mr-2 text-[var(--color-positive)]">•</span>
						To comply with legal obligations or protect our rights
					</li>
				</ul>
				<div
					class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[var(--color-accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
				></div>
			</div>

			<!-- Security -->
			<div
				class="group relative rounded-2xl border bg-[var(--color-bg-dark)] p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
				style="border-color: var(--color-primary);"
			>
				<h2 class="mb-6 text-2xl font-semibold" style="color: var(--color-primary);">
					Is Personal Information about me secure?
				</h2>
				<p class="mb-4 text-gray-300">
					For your privacy and security, your account is protected by authentication through your
					calendar provider. We do not store or have access to your calendar provider password.
					Unauthorized access to your account is directly tied to the security of your calendar
					provider account.
				</p>
				<p class="text-gray-300">
					We endeavor to protect the privacy of your account and other Personal Information we hold
					in our records, but unfortunately, no one can absolutely guarantee complete security.
				</p>
				<div
					class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[var(--color-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
				></div>
			</div>

			<!-- Contact -->
			<div
				class="group relative rounded-2xl border bg-[var(--color-bg-dark)] p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
				style="border-color: var(--color-secondary);"
			>
				<h2 class="mb-6 text-2xl font-semibold" style="color: var(--color-secondary);">
					Contact Us
				</h2>
				<p class="text-gray-300">
					If you have any questions about this Privacy Policy, please contact us at
					<a
						href="mailto:support@meetinghero.ai"
						class="group relative inline-block text-[var(--color-secondary)] transition-all duration-300 hover:text-[var(--color-primary)]"
					>
						support@meetinghero.ai
						<span
							class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"
						></span>
					</a>
				</p>
				<div
					class="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent to-[var(--color-secondary)] opacity-0 transition-opacity duration-300 group-hover:opacity-10"
				></div>
			</div>
		</div>
	</section>
</div>
