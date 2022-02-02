import { BrowserClient, defaultIntegrations, Hub } from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

const SENTRY_DSN_B = "<DSN_B>";

const client = new BrowserClient({
  dsn: SENTRY_DSN_B,
  integrations: [...defaultIntegrations, new BrowserTracing()],
  environment: "development",
  tracesSampleRate: 1.0,
});
const hub = new Hub(client);

export const doSomethingB: () => Promise<void> = async () => {
  const transaction = hub.startTransaction({ name: "test-transaction-B" });
  console.log(transaction);
  setTimeout(() => {
    transaction.setStatus("ok");
    transaction.finish();
  }, 2000);
};
