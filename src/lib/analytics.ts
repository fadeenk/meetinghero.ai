declare global {
	interface Window {
		gtag: (command: string, ...args: unknown[]) => void;
	}
}

interface EventParams {
	event_category?: string;
	event_label?: string;
	value?: number;
	[key: string]: unknown;
}

export function trackPageView(path: string) {
	window.gtag('event', 'page_view', {
		page_path: path,
		page_title: document.title,
		page_location: window.location.href
	});
}

export function trackEvent(eventName: string, eventParams?: EventParams) {
	window.gtag('event', eventName, eventParams);
}

// Navigation tracking
export function trackNavigation(linkText: string, linkUrl: string) {
	trackEvent('navigation_click', {
		event_category: 'Navigation',
		event_label: linkText,
		link_url: linkUrl
	});
}

// Feature interaction tracking
export function trackFeatureInteraction(featureName: string, action: string) {
	trackEvent('feature_interaction', {
		event_category: 'Feature',
		event_label: featureName,
		action: action
	});
}

// Form interaction tracking
export function trackFormInteraction(formName: string, action: string) {
	trackEvent('form_interaction', {
		event_category: 'Form',
		event_label: formName,
		action: action
	});
}

// Error tracking
export function trackError(errorType: string, errorMessage: string) {
	trackEvent('error', {
		event_category: 'Error',
		event_label: errorType,
		error_message: errorMessage
	});
}

// User engagement tracking
export function trackEngagement(action: string, contentId?: string) {
	trackEvent('engagement', {
		event_category: 'Engagement',
		event_label: action,
		content_id: contentId
	});
}
