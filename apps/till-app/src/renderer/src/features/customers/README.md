# Customers Module

## Module Overview

The Customers module is responsible for managing customer records, profiles, and associated metadata within the InfyPOS till application. It serves as the foundation for customer loyalty, order history, and CRM features, allowing cashiers to associate transactions with specific customer accounts.

This module implements the **Day 10 Architecture**, providing a strongly-typed domain model, static dummy data layer, asynchronous service abstraction, hook-based state management, and a complete suite of React presentational components.

---

## Component Hierarchy

```text
CustomersPage (Container — only component calling useCustomers)
│
└── CustomersContent (Layout)
    ├── CustomersHeader
    ├── CustomersToolbar (Self-contained local UI state)
    │   ├── CustomerSearchBar
    │   ├── CustomerTypeFilter
    │   ├── CustomerStatusFilter
    │   └── LoyaltyLevelFilter
    └── CustomerTable
        └── CustomerTableRow (mapped)

Standalone Reusable UI Components
├── CustomerForm
│   ├── CustomerBasicInfoSection
│   ├── CustomerContactSection
│   ├── CustomerAddressSection
│   └── CustomerLoyaltySection
│
└── CustomerDetailsPanel
    ├── CustomerProfileCard
    ├── CustomerContactCard
    ├── CustomerAddressCard
    ├── CustomerStatisticsCard
    └── CustomerActivityCard
```

---

## Data Flow & Architecture

```text
customersData.ts (DUMMY_CUSTOMERS & DUMMY_CUSTOMER_SUMMARY)
       ↓
CustomersService (Async Data Access Layer — Promise.resolve)
       ↓
useCustomers() (React State / Hook Layer — mounted guard)
       ↓
CustomersPage (Container Component — ONLY caller of useCustomers)
       ↓
CustomersContent → CustomersHeader / CustomersToolbar / CustomerTable → CustomerTableRow (Props only)
```

---

## Folder Structure

```text
features/customers/
├── README.md
├── components/
│   ├── CustomerActivityCard.tsx
│   ├── CustomerAddressCard.tsx
│   ├── CustomerAddressSection.tsx
│   ├── CustomerBasicInfoSection.tsx
│   ├── CustomerContactCard.tsx
│   ├── CustomerContactSection.tsx
│   ├── CustomerDetailsPanel.tsx
│   ├── CustomerForm.tsx
│   ├── CustomerLoyaltySection.tsx
│   ├── CustomerOptionsPanel.tsx
│   ├── CustomerProfileCard.tsx
│   ├── CustomerSearchBar.tsx
│   ├── CustomerStatisticsCard.tsx
│   ├── CustomerStatusFilter.tsx
│   ├── CustomerTable.tsx
│   ├── CustomerTableRow.tsx
│   ├── CustomerTypeFilter.tsx
│   ├── CustomersContent.tsx
│   ├── CustomersHeader.tsx
│   ├── CustomersPage.tsx
│   ├── CustomersToolbar.tsx
│   └── LoyaltyLevelFilter.tsx
├── constants/
│   └── index.ts
├── data/
│   └── customersData.ts
├── hooks/
│   └── useCustomers.ts
├── services/
│   └── CustomersService.ts
├── types/
│   └── index.ts
└── utils/
    └── README.md
```

---

## Future Integrations & Roadmap

| Feature | Description | Status |
|---|---|---|
| **Zustand Integration** | Expose `selectedCustomer` to global store for sales checkout linking | Planned |
| **SQLite Integration** | Offline-first database persistence for CRUD customer operations | Planned |
| **Electron IPC** | Proxy renderer requests to main process hardware and storage drivers | Planned |
| **Search & Filtering** | Connect toolbar local filters to `CustomersService` backend queries | Planned |
| **Form Mutations** | Connect `CustomerForm` save/cancel events to `createCustomer`/`updateCustomer` | Planned |

---

## Development Rules

1. **Clean Architecture:** `CustomersPage` is the sole consumer of `useCustomers()`.
2. **Prop-Driven Presentational UI:** All components receive data strictly via props; no direct import of `customersData.ts` or `CustomersService`.
3. **Performance:** `React.memo` and `displayName` applied to all presentational components.
4. **Shared Components Only:** Standard UI elements utilize shared components (`Card`, `Badge`, `Button`, `Divider`, `Input`, `Spinner`, `EmptyState`).
