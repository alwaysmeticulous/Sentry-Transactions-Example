import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

const SENTRY_DSN_A = "<DSN_A>";

Sentry.init({
  dsn: SENTRY_DSN_A,
  integrations: [new BrowserTracing()],
  environment: "development",
  tracesSampleRate: 1.0,
});

export const doSomethingA: () => Promise<void> = async () => {
  const transaction = Sentry.startTransaction({ name: "test-transaction-A" });
  console.log(transaction);
  setTimeout(() => {
    transaction.setStatus("ok");
    transaction.finish();
  }, 1000);
};
