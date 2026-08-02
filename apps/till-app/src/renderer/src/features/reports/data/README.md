# Reports Module — Data Architecture

## Purpose

The `data/` directory will contain static mock data generators and dummy report datasets during early development and testing phases before SQLite database integration and backend API connection.

---

## Dummy Report Strategy

The static data layer provides realistic mock datasets for UI preview, offline development, and unit testing across all reporting categories:

- **Sales Data**: Historical sales transactions, hourly breakdown, item-wise sales quantities, and average transaction values.
- **Revenue Data**: Financial revenue figures, gross profit calculations, discount allocations, refund counts, and net revenue statistics.
- **Inventory Data**: Stock valuation numbers, reorder alerts, turnover rates, top-selling product categories, and dead stock counts.
- **Customer Data**: Customer registration stats, top spending customer profiles, repeat purchase rates, and loyalty points summary.
- **Payment Data**: Breakdown of payment transactions by channel (Cash, Credit Card, Debit Card, Gift Card, Mobile Payment).
- **Tax Data**: Tax collected per rate bracket (Standard rate, reduced rate, zero rate) and net tax liabilities.

---

## Data Lifecycle

```text
Development Phase
└── Static dummy data in data/ (DUMMY_REPORTS) → ReportsService (Simulated async delays)

Testing Phase
└── Deterministic test fixtures in data/ → Unit & integration test suites

Production Phase
└── Direct SQLite local database queries & Electron IPC main process bridge
```

---

## Development Rules

1. **Strict Separation**: Dummy data must strictly match the TypeScript interfaces defined in `types/`.
2. **Read-Only**: Static dummy data structures must be frozen/immutable to prevent accidental mutation during runtime.
