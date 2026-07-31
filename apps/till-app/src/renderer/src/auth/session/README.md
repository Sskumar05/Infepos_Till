# Session Management Infrastructure

This module manages the lifecycle, tracking, and metadata of active user sessions within the INFYPOS Till App.

## Structure
- `manager/`: Static service logic to handle session creation, validation, and storage clearing.
- `hooks/`: React hooks for components to observe session status (active, idle, expired).
- `types/`: Strong types for session structures.
- `constants/`: Global time bounds and enum literals for session tracking.

## Future Backend Integration
Currently, the session manager operates purely via console logs and dummy returns without any actual data persistence. 
In the future:
1. `sessionManager` will integrate securely with Zustand for reactive global state tracking.
2. Storage mechanisms (e.g., Secure Electron store or SQLite via IPC context) will persist active session tokens securely.
3. Keep-alive background polling endpoints and automatic idle lockouts will be implemented.
