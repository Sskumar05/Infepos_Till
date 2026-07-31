# Project Overview

## Project Introduction
INFYPOS is a modern, highly responsive, and robust Electronic Point of Sale (EPOS) system designed specifically for retail and hospitality environments. It centers around a powerful Till application that ensures fast, reliable, and seamless transactions at the checkout counter, supported by a scalable backend infrastructure.

## Objectives
- Deliver a lightning-fast checkout experience to reduce customer wait times.
- Ensure 100% operational uptime at the till, regardless of internet connectivity.
- Provide a user-friendly, intuitive interface requiring minimal staff training.
- Centralize data management for products, inventory, and reporting.

## Business Goals
- **Increase Sales Throughput:** Streamline the checkout process with barcode scanning and quick payment flows.
- **Data-Driven Decisions:** Offer real-time insights into sales trends and inventory levels.
- **Scalability:** Build a foundation that can easily scale from a single independent store to a multi-store retail chain.
- **Reduce Shrinkage:** Implement strict role-based access control and detailed audit logs.

## Target Users
- **Cashiers / Sales Associates:** Frontline staff whose primary need is speed, simplicity, and reliability during transaction processing.
- **Store Managers:** Need access to daily shift reports (X/Z reports), inventory levels, and the ability to perform managerial overrides (e.g., voids, refunds).
- **System Administrators / Owners:** Require high-level oversight, global configuration capabilities, and multi-store reporting.

## System Overview
The INFYPOS ecosystem consists of two primary components operating in tandem:
1. **The Till Application:** A desktop application running on local store hardware, interacting with peripherals (scanners, printers, cash drawers) and handling all customer-facing operations.
2. **The Backend Server:** A centralized cloud service that acts as the single source of truth for catalog data, global settings, and historical sales reporting.

## Technology Stack
- **Frontend (Till Application):**
  - Framework: React
  - Desktop Container: Electron
  - Language: TypeScript
  - Styling: Tailwind CSS
- **Backend (API Services):**
  - Framework: NestJS
  - Language: TypeScript
- **Database:**
  - Local (Till): SQLite or IndexedDB
  - Cloud (Backend): PostgreSQL

## Architecture Summary
The system utilizes a client-server architecture with an emphasis on edge resilience. The Till application is built as a thick client utilizing Electron to gain deep access to local hardware resources (like receipt printers and USB barcode scanners) while providing a modern React-based UI. The NestJS backend provides RESTful APIs for data synchronization, central authentication, and global reporting.

## Offline-First Concept
INFYPOS is designed with an "Offline-First" methodology. This means the Till application reads from and writes to a local database first. 
- **Resilience:** If the internet connection drops, the store continues to operate normally—processing sales, taking payments, and printing receipts.
- **Synchronization:** All offline actions are placed in a local Sync Queue. Once the connection is restored, the queue is processed automatically in the background, synchronizing the local data with the cloud backend without interrupting the cashier's workflow.

## Expected Workflow
1. **Shift Start:** A cashier logs in and opens a shift, declaring the starting float.
2. **Transaction Flow:** The cashier scans items, adds them to the cart, applies any necessary discounts, and processes payment.
3. **Fulfillment:** The till opens the cash drawer (if cash) and prints a receipt.
4. **Background Sync:** The till silently syncs the completed sale and updated inventory to the backend server.
5. **Shift End:** The cashier closes the shift, printing a Z-Report and declaring the final cash amount.

## Project Scope
- Development of the Electron/React Till Application.
- Implementation of the NestJS Backend APIs.
- Core POS functionality: Sales, Refunds, Receipts, and Shift Management.
- Offline-first data architecture and synchronization engine.
- Basic inventory tracking and reporting.

## Future Scope
- Integration with third-party integrated card payment terminals (e.g., Stripe Terminal, Zettle).
- Multi-store management and cross-store inventory checks.
- Customer loyalty programs and digital receipts (Email/SMS).
- Advanced AI-driven sales forecasting and automated stock reordering.
