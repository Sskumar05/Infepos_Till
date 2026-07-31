# Feature List

This document outlines all the planned features for the INFYPOS Till application, categorized by module.

---

## 1. Authentication
- **Purpose**: Secure access to the till interface and verify staff identity.
- **Main Features**:
  - Email and password login for managers/admins.
  - Quick PIN login for cashiers to switch users rapidly.
  - Secure session management and automatic timeout.
- **Future Enhancements**:
  - RFID or swipe card authentication.
  - Biometric login (fingerprint).

## 2. Dashboard
- **Purpose**: Provide a quick overview of current shift performance and quick links to main actions.
- **Main Features**:
  - Quick access buttons to start a sale, open the till drawer, or view reports.
  - Summary of current shift statistics (total sales, transactions).
- **Future Enhancements**:
  - Customizable dashboard widgets per user role.
  - Real-time notifications from the backend.

## 3. Sales
- **Purpose**: The core module for processing customer transactions.
- **Main Features**:
  - Start a new sale transaction.
  - Hold and retrieve sales for later processing.
  - Void a sale entirely.
  - Add custom discounts (percentage or fixed amount) to the entire sale.
- **Future Enhancements**:
  - Split billing functionality.
  - Tipping support.

## 4. Barcode Scanner
- **Purpose**: Enable rapid entry of products into the shopping cart.
- **Main Features**:
  - Direct integration with USB/Bluetooth barcode scanners.
  - Automatic product lookup and cart addition upon successful scan.
  - Audio feedback (beep) on successful/failed scans.
- **Future Enhancements**:
  - Support for 2D/QR code scanning.
  - Mobile device camera integration as a fallback scanner.

## 5. Product Search
- **Purpose**: Allow cashiers to find items manually if they cannot be scanned.
- **Main Features**:
  - Real-time search bar (by name, SKU, or barcode).
  - Visual grid of products grouped by categories.
- **Future Enhancements**:
  - Voice search.
  - AI-powered predictive search based on popular items.

## 6. Shopping Cart
- **Purpose**: Display and manage the items currently being purchased.
- **Main Features**:
  - List of added products with quantity, unit price, and total price.
  - Ability to increase/decrease quantity or remove items.
  - Add line-item discounts.
  - Real-time calculation of subtotal, tax, and grand total.
- **Future Enhancements**:
  - Mix-and-match promotional pricing (e.g., Buy One Get One Free).
  - Ability to scan coupons directly into the cart.

## 7. Payment
- **Purpose**: Process the financial settlement of the shopping cart.
- **Main Features**:
  - Multiple payment methods: Cash, Credit/Debit Card, Gift Card.
  - Exact cash quick-button.
  - Calculation of change due for cash payments.
- **Future Enhancements**:
  - Integrated card terminal communication (e.g., via Zettle or Stripe Terminal).
  - Support for digital wallets (Apple Pay, Google Pay).

## 8. Receipt Printing
- **Purpose**: Provide customers with a physical or digital record of their purchase.
- **Main Features**:
  - Integration with thermal receipt printers (ESC/POS protocol).
  - Customizable receipt headers and footers (store name, address, VAT number).
  - Option to reprint the last receipt.
- **Future Enhancements**:
  - Email and SMS digital receipts.
  - Dynamic QR codes on receipts for surveys or loyalty points.

## 9. Refund
- **Purpose**: Process returns and refund money to customers.
- **Main Features**:
  - Search past transactions by receipt number.
  - Issue full or partial refunds for specific line items.
  - Return items to inventory stock automatically.
- **Future Enhancements**:
  - Issue store credit instead of a cash/card refund.
  - Manager approval workflow for high-value refunds.

## 10. Inventory
- **Purpose**: Provide visibility into stock levels directly from the till.
- **Main Features**:
  - View current stock (`quantity_on_hand`) for any product.
  - Out-of-stock warnings when adding items to the cart.
- **Future Enhancements**:
  - Request stock transfers from other stores directly from the till.
  - Perform quick stock-takes or spot checks using the barcode scanner.

## 11. Products
- **Purpose**: Manage the catalog of items available for sale.
- **Main Features**:
  - View product details (price, description, tax rate).
  - Create and edit products locally (for managers).
- **Future Enhancements**:
  - Support for product variants (e.g., size, color).
  - Bulk price updates.

## 12. Categories
- **Purpose**: Organize products for easier manual navigation.
- **Main Features**:
  - Browse products by assigned categories.
  - Visual color-coding or icons for categories.
- **Future Enhancements**:
  - Nested sub-categories.
  - Smart categories (e.g., "Best Sellers" automatically populated).

## 13. Customers
- **Purpose**: Manage customer data for loyalty and record-keeping.
- **Main Features**:
  - Search and attach an existing customer to a sale.
  - Create a new customer profile from the till.
- **Future Enhancements**:
  - Loyalty point accumulation and redemption.
  - Customer purchase history view.

## 14. Shift Management
- **Purpose**: Track cash flow and staff responsibility during a working period.
- **Main Features**:
  - Open shift with a starting cash float.
  - Close shift with an end-of-day cash declaration.
  - Record manual petty cash pay-ins and pay-outs.
- **Future Enhancements**:
  - Blind close (cashiers enter cash amount without seeing the expected system total).
  - Integration with staff time and attendance systems.

## 15. Reports (X Report & Z Report)
- **Purpose**: Generate vital financial summaries directly on the till.
- **Main Features**:
  - **X Report**: Snapshot of current shift totals without closing the shift.
  - **Z Report**: Final summary printed upon closing a shift, detailing totals by payment method and taxes.
- **Future Enhancements**:
  - Detailed product sales breakdown report.
  - Export reports to PDF or CSV.

## 16. Settings
- **Purpose**: Configure the till application's local behavior.
- **Main Features**:
  - Hardware setup (select receipt printer, configure barcode scanner).
  - UI preferences (light/dark mode, button sizes).
- **Future Enhancements**:
  - Cloud-synced configuration profiles.
  - Language and localization settings.

## 17. Offline Database
- **Purpose**: Ensure the till can operate without an active internet connection.
- **Main Features**:
  - Local database storing products, settings, and users.
  - Ability to process sales, payments, and shifts completely offline.
- **Future Enhancements**:
  - Encrypted local storage for compliance.
  - Storage usage monitoring and automatic cleanup of old synced data.

## 18. Synchronization
- **Purpose**: Maintain data consistency between the local till and the cloud backend.
- **Main Features**:
  - Background queue that records all offline actions (sales, refunds).
  - Automatic pushing of the queue to the backend when the internet is restored.
  - Pulling down catalog updates (new products, price changes) from the server.
- **Future Enhancements**:
  - Manual force-sync button.
  - Visual sync status indicator with detailed conflict resolution UI.

## 19. Role-Based Access Control
- **Purpose**: Restrict access to sensitive features based on staff roles.
- **Main Features**:
  - Cashiers are restricted to basic sales functions.
  - Managers/Admins can access reports, refunds, and settings.
  - PIN prompt for overriding restricted actions (e.g., manager override for a void).
- **Future Enhancements**:
  - Highly granular, customizable permission sets defined from the backend.
  - Audit logging tied to specific override authorizations.
