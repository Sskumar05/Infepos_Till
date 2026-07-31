import { AuthState } from '../types';

/**
 * Placeholder hook for authentication state management.
 * No business logic is implemented yet.
 */
export function useAuth() {
  const dummyState: AuthState = {
    isAuthenticated: false,
    user: null,
    session: null,
    isLoading: false,
    error: null,
  };

  const login = async () => {};
  const logout = async () => {};

  return {
    ...dummyState,
    login,
    logout,
  };
}
