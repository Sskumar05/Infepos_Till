# Components

## Purpose
This folder contains all the UI components for the Sales module.

## Responsibility
These components handle the presentation layer only. They render data passed via props and trigger callbacks for user interactions.

## Future Implementation Plan
Will include components like `CartSection`, `ProductBrowser`, `PaymentModal`, and `ReceiptModal`. 

## Rules
- Future reusable UI only.
- No business logic. All logic must be handled in custom hooks or services.
- Follow the project's shared design system.

## Dependency Boundaries
Can import shared common components, constants, and types. Must not import services, hooks, or dummy data directly (except for the root container component).
