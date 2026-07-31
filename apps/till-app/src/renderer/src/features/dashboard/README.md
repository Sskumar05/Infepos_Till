# Dashboard Feature Module

This module contains the enterprise POS dashboard architecture. It relies on a scalable feature-based structure ensuring clear separation of concerns.

## Folder Structure

```
src/renderer/src/features/dashboard/
├── components/       # Reusable UI components (pure, presentation only)
├── hooks/            # Custom hooks (e.g., useDashboard)
├── services/         # API/Service integrations
├── types/            # TypeScript interfaces
├── constants/        # Centralized constants
├── utils/            # Helper functions
└── data/             # Dummy data configuration
```

## Component Hierarchy & Responsibilities

The Dashboard UI is constructed using single-responsibility components wrapped in `React.memo` for optimal rendering performance:

1. **DashboardPage**: The root container. Binds to `useDashboard()` and propagates data downwards.
2. **DashboardHeader**: Presents contextual store/shift information and primary actions.
3. **DashboardContent**: Handles layout structures, placing widgets and grids.
4. **DashboardSection**: A reusable, titled wrapper defining consistent spacing around feature sets.
5. **KPIGrid / KPICard**: Displays top-level key performance metrics.
6. **QuickActionsGrid / QuickActionCard**: Renders high-frequency task shortcuts.
7. **RecentSalesWidget / RecentSaleRow**: Displays a responsive table/list of recent transactions.
8. **LowStockWidget / LowStockRow**: Highlights inventory requiring attention.

## Data Flow

The flow of data is strictly top-down, completely decoupling UI components from direct data access:

`useDashboard() Hook` → `DashboardPage` → `DashboardContent` → `Specific Widgets/Grids`

- **Widgets NEVER import data directly** from `dashboardData.ts`.
- **All business logic** (when implemented) will reside within `services/` and will be exposed via custom hooks like `useDashboard()`.

## Future Extension Strategy

- Real data fetching will be implemented in `DashboardService` and invoked by `useDashboard()`.
- Additional widgets can be seamlessly integrated by creating a new `WidgetName.tsx` component and mounting it within `DashboardContent.tsx`.
- The current static layout can be transitioned into a configurable, drag-and-drop dashboard by storing layout preferences in the user's session metadata.
