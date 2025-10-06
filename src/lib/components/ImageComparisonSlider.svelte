<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		beforeImage: string;
		afterImage: string;
		width?: string;
		height?: string;
	}

	let { beforeImage, afterImage, width = '100%', height = 'auto' }: Props = $props();

	let containerRef: HTMLDivElement;
	let isDragging = $state(false);
	let sliderPosition = $state(50);

	function handleMouseDown(event: MouseEvent) {
		isDragging = true;
		updateSliderPosition(event);
	}

	function handleMouseMove(event: MouseEvent) {
		if (!isDragging) return;
		updateSliderPosition(event);
	}

	function handleMouseUp() {
		isDragging = false;
	}

	function handleTouchStart(event: TouchEvent) {
		isDragging = true;
		updateSliderPosition(event.touches[0]);
	}

	function handleTouchMove(event: TouchEvent) {
		if (!isDragging) return;
		updateSliderPosition(event.touches[0]);
	}

	function handleTouchEnd() {
		isDragging = false;
	}

	function updateSliderPosition(event: MouseEvent | Touch) {
		if (!containerRef) return;

		const rect = containerRef.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const position = (x / rect.width) * 100;

		sliderPosition = Math.min(Math.max(position, 0), 100);
	}

	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('touchmove', handleTouchMove);
		window.addEventListener('touchend', handleTouchEnd);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
			window.removeEventListener('touchmove', handleTouchMove);
			window.removeEventListener('touchend', handleTouchEnd);
		};
	});
</script>

<div
	bind:this={containerRef}
	class="image-comparison-container"
	style="width: {width}; height: {height};"
	role="slider"
	aria-label="Image comparison slider"
	onmousedown={handleMouseDown}
	ontouchstart={handleTouchStart}
>
	<img src={afterImage} class="after-image" alt="After" />
	<div class="before-image-container" style="clip-path: inset(0 {100 - sliderPosition}% 0 0);">
		<img src={beforeImage} class="before-image" alt="Before" />
	</div>
	<div class="slider" style="left: {sliderPosition}%;">
		<div class="slider-line"></div>
		<div class="slider-handle">
			<svg
				class="chevron-left"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
			</svg>
			<svg
				class="chevron-right"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
			</svg>
		</div>
	</div>
</div>

<style>
	.image-comparison-container {
		position: relative;
		overflow: hidden;
		border-radius: 8px;
		cursor: ew-resize;
		background-color: #000000;
	}

	.after-image,
	.before-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		background-color: #000000;
	}

	.before-image-container {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		overflow: hidden;
		background-color: #000000;
		clip-path: inset(0 0 0 0);
		width: 100%;
	}

	.before-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
		background-color: #000000;
	}

	.slider {
		position: absolute;
		top: 0;
		height: 100%;
		width: 2px;
		background: white;
		transform: translateX(-50%);
		z-index: 2;
	}

	.slider-line {
		position: absolute;
		top: 0;
		left: 50%;
		height: 100%;
		width: 2px;
		background: white;
		transform: translateX(-50%);
	}

	.slider-handle {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 40px;
		height: 40px;
		background: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
	}

	.slider-handle .chevron-left,
	.slider-handle .chevron-right {
		color: #666;
	}

	.slider-handle .chevron-right {
		margin-left: -4px;
	}
</style>
