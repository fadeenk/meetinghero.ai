<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';

	let { children } = $props();
	let mobileNavOpen = $state(false);
</script>

<nav
	class="sticky top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300"
	style="background: rgba(0, 0, 0, 0.3); border-color: var(--color-bg-dark);"
>
	<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
		<a
			href={base + '/'}
			class="group flex items-center gap-2 text-2xl font-bold tracking-tight transition-transform hover:scale-105"
			style="color: var(--color-primary);"
		>
			<span class="relative">
				MeetingHero.AI
				<span
					class="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] transition-all duration-300 group-hover:w-full"
				></span>
			</span>
		</a>
		<div class="hidden gap-8 text-sm font-medium md:flex">
			{#each ['Home', 'How It Works', 'Features', 'Tools', 'Pricing', 'FAQ', 'About Us'] as item}
				<a
					href={item === 'Home' ? base + '/' : base + '/' + item.toLowerCase().replace(/ /g, '-')}
					class="relative text-white transition-all duration-300 hover:text-[var(--color-primary)]"
				>
					{item}
					<span
						class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--color-primary)] transition-all duration-300 hover:w-full"
					></span>
				</a>
			{/each}
		</div>
		<!-- Mobile menu button -->
		<button
			class="flex items-center justify-center rounded-lg p-2 transition-all duration-300 hover:bg-[var(--color-bg-dark)] focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none md:hidden"
			aria-label="Open navigation"
			onclick={() => (mobileNavOpen = !mobileNavOpen)}
		>
			<svg
				class="h-7 w-7 text-white transition-transform duration-300"
				class:rotate-90={mobileNavOpen}
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
			class="animate-fade-in-down flex flex-col gap-4 border-b border-[var(--color-bg-dark)] bg-[var(--color-bg)] px-4 pb-4 md:hidden"
		>
			{#each ['Home', 'How It Works', 'Features', 'Tools', 'Pricing', 'Support / FAQ', 'About Us', 'Privacy Policy', 'Terms of Service'] as item}
				<a
					href={item === 'Home' ? base + '/' : base + '/' + item.toLowerCase().replace(/ /g, '-')}
					class="group flex items-center text-white transition-all duration-300 hover:text-[var(--color-primary)]"
					onclick={() => (mobileNavOpen = false)}
				>
					<span class="relative">
						{item}
						<span
							class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"
						></span>
					</span>
				</a>
			{/each}
		</div>
	{/if}
</nav>

{@render children()}

<!-- Footer -->
<footer
	class="flex w-full flex-col items-center justify-between border-t px-4 py-8 text-sm text-gray-400 md:flex-row"
	style="background: var(--color-bg); border-color: var(--color-bg-dark);"
>
	<div class="flex items-center gap-2">
		<span class="text-lg font-bold" style="color: var(--color-primary);">MeetingHero.AI</span>
		<span>© {new Date().getFullYear()}. All rights reserved.</span>
	</div>
	<div class="mt-4 flex gap-6 md:mt-0">
		<a
			href={base + '/privacypolicy'}
			class="group relative text-gray-400 transition-all duration-300 hover:text-[var(--color-primary)]"
		>
			Privacy Policy
			<span
				class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"
			></span>
		</a>
		<a
			href={base + '/termsofservice'}
			class="group relative text-gray-400 transition-all duration-300 hover:text-[var(--color-primary)]"
		>
			Terms of Service
			<span
				class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"
			></span>
		</a>
	</div>
</footer>
