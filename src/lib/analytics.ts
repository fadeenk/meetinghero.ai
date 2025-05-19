declare global {
	interface Window {
		gtag: (...args: any[]) => void;
	}
}

export function trackPageView(path: string) {
	window.gtag('event', 'page_view', {
		page_path: path,
		page_title: document.title
	});
}

export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
	window.gtag('event', eventName, eventParams);
}
