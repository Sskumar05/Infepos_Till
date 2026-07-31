# Authentication Architecture

This module contains the foundational authentication infrastructure for the INFYPOS Till App.

## Structure
- `constants/`: Centralized authentication constants (e.g., storage keys, roles, status).
- `hooks/`: React hooks for accessing auth state and operations (`useAuth`).
- `services/`: API clients and service logic for backend auth integration.
- `types/`: Core TypeScript interfaces for User, Session, and requests.
- `utils/`: Helper functions for token validation and role checks.

## Future Integration
Currently, this module contains only placeholder interfaces and dummy implementations. 
In the future, this module will be connected to the backend API for real authentication, 
and state management will be wired up via Zustand. No UI or routing logic should exist within this folder.
