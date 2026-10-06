export type AnalyticsEventParams = Record<
  string,
  string | number | boolean | undefined
>;

export function trackEvent(
  eventName: string,
  params: AnalyticsEventParams = {}
) {
  if (typeof window === "undefined") return;

  const gtag = (
    window as Window & {
      gtag?: (
        command: "event",
        eventName: string,
        params?: AnalyticsEventParams
      ) => void;
    }
  ).gtag;

  if (typeof gtag === "function") {
    gtag("event", eventName, params);
  }
}

export function trackEstimateStarted(source: string, tier?: string) {
  trackEvent("estimate_started", {
    source,
    ...(tier ? { tier } : {}),
  });
}

export function trackBookingStarted(source: string, tier?: string) {
  trackEvent("booking_started", {
    source,
    ...(tier ? { tier } : {}),
  });
}