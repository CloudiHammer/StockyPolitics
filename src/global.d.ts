export {};

declare global {
  interface Window {
    trackEvent?: (eventName: string, parameters?: Record<string, string | number | undefined>) => void;
    dataLayer?: unknown[];
    closeComingSoonModal?: () => void;
  }
}
