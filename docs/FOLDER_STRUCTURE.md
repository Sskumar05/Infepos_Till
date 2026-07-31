# Folder Structure

The INFYPOS project follows a monorepo architecture. This centralized structure ensures seamless sharing of code, streamlined dependency management, and unified tooling across all parts of the application.

## Monorepo Layout

```text
INFYPOS/
├── apps/
│   └── till-app/       # Electron + React POS client
├── backend/            # NestJS API services
├── shared/             # Shared TypeScript types and utilities
├── database/           # Migrations, seeds, and schema definitions
├── docs/               # Project documentation
├── assets/             # Global static assets
├── screenshots/        # Application screenshots for docs/marketing
└── .github/            # CI/CD workflows and GitHub templates
```

## Description of Directories

### `apps/`
Contains all frontend client applications. 
- **`till-app/`**: The core Point of Sale (POS) application, built with Electron, React, and TypeScript. This application runs on the physical till machines in the store.

### `backend/`
Contains the server-side logic and API. Built using NestJS, it handles business operations, secure data processing, and communication between the till clients and the database.

### `shared/`
Holds shared code and configurations utilized by both the frontend apps and the backend services. This typically includes TypeScript interfaces, DTOs (Data Transfer Objects), utility functions, and constants. Centralizing these prevents code duplication and ensures consistency.

### `database/`
Dedicated to database-related resources. This includes schema definitions, ORM configuration files, database migrations (for applying structural changes), and seeders (for populating initial or test data).

### `docs/`
The central hub for all project documentation. It includes guides, architectural overviews, API plans, coding standards, and other critical information necessary for developers and stakeholders to understand and contribute to the project.

### `assets/`
Stores global static assets that are used across the project, such as logos, icons, fonts, and generic images that aren't specific to a single application module.

### `screenshots/`
Reserved for application screenshots. These images are primarily used within the documentation or for marketing and presentation purposes.

### `.github/`
Contains GitHub-specific configurations. This includes CI/CD workflows (GitHub Actions) for automated testing and deployment, issue templates, and pull request guidelines to standardize contributions.
