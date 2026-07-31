# INFYPOS Coding Standards

This document outlines the coding standards, naming conventions, and best practices for the INFYPOS project. Following these guidelines ensures consistency, maintainability, and quality across the entire codebase.

## 1. Project Naming Convention
- **Project Name:** Always use uppercase `INFYPOS` for the main project name in documentation and overarching architecture contexts.
- **Repository/Monorepo Name:** Use kebab-case: `infypos` or `infypos-monorepo`.
- **Application Names:** Use kebab-case (e.g., `till-app`, `backend-service`).

## 2. Folder Naming Convention
- **Standard Folders:** Use `kebab-case` for all folder names (e.g., `components`, `utils`, `user-profile`).
- **Pages/Routes:** For routing architectures where file paths dictate the route, ensure folders match the intended URL path in `kebab-case`.

## 3. File Naming Convention
- **General Files:** Use `kebab-case` for standard files (e.g., `format-date.ts`, `user-service.ts`).
- **React Components:** Use `PascalCase` for React component files (e.g., `Button.tsx`, `UserProfile.tsx`).
- **Test Files:** Append `.test` or `.spec` before the extension (e.g., `format-date.test.ts`, `Button.spec.tsx`).

## 4. Component Naming Convention
- **Component Names:** Always use `PascalCase` (e.g., `ProductCard`, `CheckoutModal`).
- **Props Interfaces:** Name the props interface as `[ComponentName]Props` (e.g., `ProductCardProps`).
- **Higher-Order Components (HOCs):** Prefix with `with` in `camelCase` (e.g., `withAuthentication`).

## 5. TypeScript Standards
- **Strict Mode:** Always enable and adhere to `strict` mode in `tsconfig.json`.
- **Interfaces over Types:** Prefer `interface` over `type` for defining object structures, especially for props, to leverage better error messages and declaration merging. Use `type` for unions and primitives.
- **Explicit Returns:** Explicitly define return types for functions, especially for API endpoints and complex business logic.
- **Avoid `any`:** Under no circumstances should `any` be used. If the type is truly unknown, use `unknown` and assert/narrow it down safely.

## 6. React Best Practices
- **Functional Components:** Exclusively use functional components and hooks. Do not use class components.
- **Custom Hooks:** Extract complex state logic into custom hooks (e.g., `useCart`, `useAuth`). Prefix custom hooks with `use`.
- **Memoization:** Use `useMemo` and `useCallback` judiciously to prevent unnecessary re-renders, especially when passing props down to heavily memoized child components.
- **Fragment Usage:** Use `<React.Fragment>` or its shorthand `<>` to group multiple elements without adding extra nodes to the DOM.

## 7. Tailwind CSS Guidelines
- **Utility-First:** Embrace utility classes directly in the markup to style components.
- **Avoid Complex Classes:** If a component requires excessively long Tailwind class strings, consider extracting them using `@apply` in a CSS module or wrapping them in a helper function like `clsx` or `tailwind-merge` for dynamic classes.
- **Standard Colors/Spacings:** Adhere to the defined Tailwind theme configuration (e.g., spacing, colors, typography) rather than hardcoding arbitrary pixel values.

## 8. Reusable Component Rules
- **Pure and Dumb:** Reusable components (e.g., standard buttons, inputs, modals) should be "dumb." They should receive data and callbacks via props and should not be tied to specific global states (like Redux or Context API) unless strictly necessary.
- **Documentation:** Include a brief JSDoc comment or Storybook entry explaining the component's purpose and its required props.
- **Accessibility (a11y):** Ensure all reusable components include proper ARIA attributes, semantic HTML, and keyboard navigation support.

## 9. Folder Organization Rules
- **Component Colocation:** Group files by feature rather than type. A feature folder should contain its components, styles, tests, and specific utilities (e.g., `src/features/auth/`).
- **Shared Directory:** Place truly global utilities, types, and generic components in the root `shared/` directory to be accessed across applications.
- **Index Files:** Use `index.ts` files to cleanly export public interfaces of a folder (the "barrel" pattern).

## 10. Import Order
Group imports in the following order, separated by a blank line:
1. **External libraries:** React, NestJS, third-party packages.
2. **Absolute internal imports:** Shared modules, global stores, or utilities.
3. **Relative internal imports:** Sibling components, local utilities, or styles.
*Consider using `eslint-plugin-import` to automate this enforcement.*

## 11. Error Handling Standards
- **Global Error Handling:** Implement global error boundaries in React and global exception filters in NestJS to catch unhandled errors gracefully.
- **Specific Errors:** Create custom Error classes (e.g., `ValidationError`, `DatabaseError`) for specific failure points.
- **User Feedback:** Never expose raw stack traces to the end-user. Provide user-friendly, localized error messages in the UI.

## 12. Git Commit Message Convention
Adhere to the [Conventional Commits](https://www.conventionalcommits.org/) specification:
- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `test:` Adding missing tests or correcting existing tests
- `chore:` Changes to the build process or auxiliary tools and libraries

*Example:* `feat(cart): add support for discount codes`

## 13. Code Review Checklist
Before requesting a review, ensure:
- [ ] Code compiles without any warnings or TypeScript errors.
- [ ] All new and existing unit tests pass.
- [ ] Business logic is thoroughly tested and documented.
- [ ] No `console.log` or debugging statements are left behind.
- [ ] Naming conventions and folder structures align with this document.
- [ ] The feature meets all acceptance criteria.

## 14. General Development Rules
- **Keep it Simple:** Follow the KISS (Keep It Simple, Stupid) principle. Avoid premature optimization or over-engineering.
- **DRY Principle:** Don't Repeat Yourself. Refactor repeated code blocks into shared utilities or components.
- **Leave it Better:** Follow the Boy Scout Rule: always leave the code you're working on a little better than you found it.
