interface AnalyticsData {
	eventType: "pageview" | "click";
	eventPayload: {
		variationId: string;
		userUUID: string;
		page?: string;
		buttonId?: string;
	};
}

const sendEvent = async ({ eventType, eventPayload }: AnalyticsData) => {
	console.log(`Sending ${eventType} to analytics with payload:`, eventPayload);
	//imaginary scenerio to send analitics data to an api
	//const analyticsEndpoint = "https://imaginaryendpoint.com/action/metric";
	// try {
	// 	const response = await fetch(analyticsEndpoint, {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			eventType,
	// 			...eventPayload,
	// 		}),
	// 	});

	// Handle response...
	// 	console.log("Analytics event sent successfully:", await response.json());
	// } catch (error) {
	// 	console.error("Error sending analytics event:", error);
	// }
};

const analyticsStore: {
	[variationId: string]: {
		pageViews: Set<string>;
		clicks: Set<string>;
	};
} = {};

export const trackPageView = (
	page: string,
	userUUID: string,
	variationId: string
) => {
	sendEvent({
		eventType: "pageview",
		eventPayload: { page, userUUID, variationId },
	});
	updateAnalyticsData("pageview", variationId, userUUID);
};

export const trackClickEvent = (
	buttonId: string,
	variationId: string,
	userUUID: string
) => {
	sendEvent({
		eventType: "click",
		eventPayload: { buttonId, variationId, userUUID },
	});
	updateAnalyticsData("click", variationId, userUUID);
};

const calculateCTR = (clicksCount: number, pageViewsCount: number): number => {
	return pageViewsCount > 0 ? (clicksCount / pageViewsCount) * 100 : 0;
};

const updateAnalyticsData = (
	eventType: "pageview" | "click",
	variationId: string,
	userUUID: string
) => {
	if (!analyticsStore[variationId]) {
		analyticsStore[variationId] = { pageViews: new Set(), clicks: new Set() };
	}

	const data = analyticsStore[variationId];
	if (eventType === "pageview") {
		data.pageViews.add(userUUID);
	} else if (eventType === "click") {
		data.clicks.add(userUUID);
	}

	const pageViewsCount = data.pageViews.size;
	const clicksCount = data.clicks.size;

	const ctr = calculateCTR(clicksCount, pageViewsCount);
	console.log(`CTR for variation ${variationId}: ${ctr.toFixed(2)}%`);
};
