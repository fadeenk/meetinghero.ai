<script lang="ts">
	import '../app.css';

	let { children } = $props();
	let mobileNavOpen = $state(false);
</script>

<nav
	class="sticky top-0 z-50 w-full border-b"
	style="background: var(--color-bg); border-color: var(--color-bg-dark);"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
		<a href="/" class="text-2xl font-bold tracking-tight" style="color: var(--color-primary);"
			>MeetingHero.AI</a
		>
		<div class="hidden gap-6 text-sm font-semibold md:flex">
			<a href="/" class="text-white transition-colors hover:text-[var(--color-primary)]">Home</a>
			<a href="/how-it-works" class="text-white transition-colors hover:text-[var(--color-primary)]"
				>How It Works</a
			>
			<a href="/features" class="text-white transition-colors hover:text-[var(--color-primary)]"
				>Features</a
			>
			<a href="/pricing" class="text-white transition-colors hover:text-[var(--color-primary)]"
				>Pricing</a
			>
			<a href="/faq" class="text-white transition-colors hover:text-[var(--color-primary)]"
				>Support / FAQ</a
			>
			<a href="/about" class="text-white transition-colors hover:text-[var(--color-primary)]"
				>About Us</a
			>
		</div>
		<!-- Mobile menu button -->
		<button
			class="flex items-center justify-center rounded p-2 focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none md:hidden"
			aria-label="Open navigation"
			onclick={() => (mobileNavOpen = !mobileNavOpen)}
		>
			<svg
				class="h-7 w-7 text-white"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>
	<!-- Mobile Nav Links -->
	{#if mobileNavOpen}
		<div
			class="animate-fade-in-down flex flex-col gap-4 border-b border-[var(--color-bg-dark)] bg-[var(--color-bg-dark)] px-4 pb-4 md:hidden"
		>
			<a
				href="/"
				class="text-white transition-colors hover:text-[var(--color-primary)]"
				onclick={() => (mobileNavOpen = false)}>Home</a
			>
			<a
				href="/how-it-works"
				class="text-white transition-colors hover:text-[var(--color-primary)]"
				onclick={() => (mobileNavOpen = false)}>How It Works</a
			>
			<a
				href="/features"
				class="text-white transition-colors hover:text-[var(--color-primary)]"
				onclick={() => (mobileNavOpen = false)}>Features</a
			>
			<a
				href="/pricing"
				class="text-white transition-colors hover:text-[var(--color-primary)]"
				onclick={() => (mobileNavOpen = false)}>Pricing</a
			>
			<a
				href="/faq"
				class="text-white transition-colors hover:text-[var(--color-primary)]"
				onclick={() => (mobileNavOpen = false)}>Support / FAQ</a
			>
			<a
				href="/about"
				class="text-white transition-colors hover:text-[var(--color-primary)]"
				onclick={() => (mobileNavOpen = false)}>About Us</a
			>
			<a
				href="/privacypolicy"
				class="text-white transition-colors hover:text-[var(--color-primary)]"
				onclick={() => (mobileNavOpen = false)}>Privacy Policy</a
			>
			<a
				href="/termsofservice"
				class="text-white transition-colors hover:text-[var(--color-primary)]"
				onclick={() => (mobileNavOpen = false)}>Terms of Service</a
			>
		</div>
	{/if}
</nav>

{@render children()}
