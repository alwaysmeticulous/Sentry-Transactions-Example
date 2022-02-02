# Sentry Transactions Example

This repository shows how calling `hub.startTransaction()` can result in the
transaction being routed to the wrong Sentry DSN.

To get started:

```bash
yarn
```

Edit [src/part-a.ts](src/part-a.ts) and [src/part-b.ts](src/part-b.ts) with two
different DSNs.

Start the dev server:

```bash
yarn dev
```

Click on the buttons and observe with dev tools where the traces are being
routed.
