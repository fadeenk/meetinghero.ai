<script lang="ts">
	import ImageComparisonSlider from './ImageComparisonSlider.svelte';

	interface Props {
		content: string;
	}

	let { content }: Props = $props();

	// Simple function to check if content has image comparison
	function hasImageComparison(html: string): boolean {
		return html.includes('class="image-comparison"');
	}

	// Parse content into segments with image comparisons
	function parseContentWithComparisons(html: string): Array<{
		type: 'html' | 'comparison';
		content: string;
		beforeImage?: string;
		afterImage?: string;
	}> {
		const segments: Array<{
			type: 'html' | 'comparison';
			content: string;
			beforeImage?: string;
			afterImage?: string;
		}> = [];

		// Split content by image-comparison divs
		const parts = html.split(
			/<div class="image-comparison"[^>]*data-before="([^"]*)"[^>]*data-after="([^"]*)"[^>]*><\/div>/
		);

		for (let i = 0; i < parts.length; i++) {
			if (i % 3 === 0) {
				// HTML content
				if (parts[i].trim()) {
					segments.push({ type: 'html', content: parts[i] });
				}
			} else if (i % 3 === 1) {
				// Before image
				const beforeImage = parts[i];
				const afterImage = parts[i + 1];
				segments.push({
					type: 'comparison',
					content: '',
					beforeImage,
					afterImage
				});
				i++; // Skip the after image part
			}
		}

		return segments;
	}

	// Process content to handle image comparisons
	let contentSegments = $state<
		Array<{
			type: 'html' | 'comparison';
			content: string;
			beforeImage?: string;
			afterImage?: string;
		}>
	>([]);

	$effect(() => {
		if (hasImageComparison(content)) {
			contentSegments = parseContentWithComparisons(content);
		} else {
			contentSegments = [{ type: 'html', content }];
		}
	});
</script>

<div class="content-wrapper">
	{#each contentSegments as segment}
		{#if segment.type === 'html'}
			{@html segment.content}
		{:else if segment.type === 'comparison' && segment.beforeImage && segment.afterImage}
			<ImageComparisonSlider
				beforeImage={segment.beforeImage}
				afterImage={segment.afterImage}
				height="300px"
			/>
		{/if}
	{/each}
</div>

<style>
	:global(.content-wrapper img) {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
	}

	:global(.content-wrapper ul) {
		padding-left: 20px;
	}

	:global(.content-wrapper h6) {
		font-size: 1.25rem;
		margin-top: 0;
		margin-bottom: 16px;
		font-weight: bold;
	}

	:global(.content-wrapper .image-comparison) {
		margin: 20px 0;
		border-radius: 8px;
		overflow: hidden;
		position: relative;
		height: 300px;
	}

	:global(.content-wrapper .image-comparison-placeholder) {
		display: none;
	}

	:global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 8px;
	}

	:global(ul) {
		padding-left: 20px;
	}

	:global(h6) {
		font-size: 1.25rem;
		margin-top: 0;
		margin-bottom: 16px;
		font-weight: bold;
	}

	:global(.image-comparison) {
		margin: 20px 0;
		border-radius: 8px;
		overflow: hidden;
		position: relative;
		height: 300px;
	}

	:global(.image-comparison-placeholder) {
		display: none;
	}
</style>
