# INFYPOS — Master Development Guidelines

This document serves as the **permanent development guideline** for the entire INFYPOS project. Every developer, contributor, and AI assistant working on this codebase must read, understand, and strictly adhere to these rules at all times.

---

## Core Principles

### 1. Never Modify Existing Functionality Unless Explicitly Requested
- Do not alter the behavior, structure, or logic of any existing feature unless the user or project lead has explicitly asked for it.
- If a change to existing functionality is necessary to implement a new feature, clearly explain the impact before proceeding.
- Treat existing, working code as trusted and stable unless proven otherwise.

### 2. Build Module by Module
- Develop the application one module at a time, fully completing each before moving on.
- A module is considered complete when it is functional, tested, and documented.
- Never begin a new module while a previous one is in an incomplete or broken state.

### 3. Follow Clean Architecture
- Maintain a clear separation of concerns: UI components, business logic, data access, and API communication must live in distinct layers.
- UI components should not contain business logic. Business logic should not contain database or API calls directly.
- Use services, hooks, and repositories to mediate between layers.

---

## Technology Rules

### 4. Use TypeScript Only
- All source files must be written in TypeScript (`.ts` or `.tsx`). Plain JavaScript files are not permitted in this project.
- Enable and respect strict TypeScript mode at all times.
- Never use the `any` type. Use `unknown` and narrow it safely if the type is genuinely uncertain.

### 5. Use React Functional Components Only
- All UI components must be written as React functional components.
- Class-based components are strictly prohibited.
- Use React hooks (`useState`, `useEffect`, `useCallback`, `useMemo`, `useRef`, etc.) for state and side-effect management.
- Extract complex or reusable logic into custom hooks prefixed with `use` (e.g., `useCart`, `useAuth`).

### 6. Use Tailwind CSS Only
- All styling must be done using Tailwind CSS utility classes.
- Do not write raw CSS files or use inline `style` props for layout and design.
- For complex or repetitive class combinations, use `clsx` or `tailwind-merge` to manage them cleanly.
- Adhere to the project's Tailwind theme configuration; do not introduce arbitrary values unless absolutely justified.

---

## Code Quality Rules

### 7. Write Production-Ready Code
- Every piece of code committed to this repository must be of production quality.
- Avoid placeholder logic (e.g., hardcoded values, `TODO` stubs, empty catch blocks) in deliverable files.
- Handle errors gracefully with meaningful user feedback and proper logging.

### 8. Keep Components Reusable
- Design UI components to be generic, data-driven, and free of hard-coded business-specific logic where possible.
- A reusable component receives all its data via props and emits events via callback props.
- Components that are shared across more than one screen or feature must live in a dedicated `components/` or `shared/` directory.

### 9. Write Maintainable and Scalable Code
- Prefer simple, readable solutions over clever, complex ones.
- Follow the DRY principle: if a piece of logic is used more than once, abstract it into a utility function or hook.
- Write code as if the next developer to read it has no prior context of your decisions.
- Add JSDoc comments to all exported functions, hooks, and complex logic blocks.

---

## Structure & Organisation Rules

### 10. Maintain Consistent Folder Structure
- All new files and directories must be placed in the locations defined in `FOLDER_STRUCTURE.md`.
- Do not create ad-hoc folders at the root level or within established feature modules without a clear justification.
- Feature code must be colocated: components, hooks, types, and tests for a feature live together in that feature's directory.

### 11. Use Clear Naming Conventions
- Follow the conventions defined in `CODING_STANDARDS.md` without exception.
- **Files:** `kebab-case` for general files; `PascalCase` for React component files.
- **Variables/Functions:** `camelCase`.
- **Components/Classes/Interfaces:** `PascalCase`.
- **Constants:** `UPPER_SNAKE_CASE`.
- Names must be self-descriptive. Avoid single-letter variables (except for standard loop indices) or ambiguous abbreviations.

---

## Development Process Rules

### 12. Explain Planned Changes Before Implementing Them
- Before making any significant change — especially one that touches existing code — provide a clear, concise explanation of what will change and why.
- If a change involves multiple files or has side effects, outline the full scope of the change before proceeding.
- This rule protects the project from unintended consequences and ensures all changes are intentional and understood.

### 13. Avoid Unnecessary Refactoring
- Do not refactor code unless it is directly related to the task at hand.
- Cosmetic or stylistic refactoring (e.g., renaming variables for personal preference) must not be mixed into feature branches.
- If a genuine refactoring opportunity is identified, log it and raise it separately rather than embedding it in unrelated work.

### 14. Preserve Backward Compatibility
- Any change to shared types, API contracts, or database schemas must be backward compatible unless a breaking change has been explicitly planned and communicated.
- Deprecate old patterns gradually rather than removing them abruptly.
- Document any breaking changes clearly in the relevant planning documents.

---

## Collaboration & Communication Rules

### 15. Document as You Build
- Every new module, component, service, or database entity must be documented at the point of creation.
- Keep `FEATURE_LIST.md`, `DATABASE_PLAN.md`, and `API_PLAN.md` updated as the implementation progresses.
- Use clear, concise language in all documentation — assume the reader is a capable developer unfamiliar with this specific project.

### 16. One Responsibility Per File
- Each file should have one clearly defined purpose.
- A React component file exports one primary component.
- A service file manages one resource or domain (e.g., `sale.service.ts` handles only sale-related logic).
- A utility file groups closely related helper functions.

### 17. No Dead Code
- Do not leave commented-out code, unused imports, or unreachable logic in committed files.
- Use version control (Git history) to recover old code if needed, not in-file comments.

---

## Enforcement
These guidelines are non-negotiable. Any pull request or contribution that violates these rules will be rejected during code review until the violations are resolved. When in doubt, refer to this document, the `CODING_STANDARDS.md`, or consult the project lead before proceeding.
