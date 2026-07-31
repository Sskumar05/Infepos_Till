import { UserSession, LoginMethod } from '../types';

/**
 * Placeholder session manager.
 * Real persistence and backend sync will be implemented in the future.
 */
export const sessionManager = {
  createSession(userId: string, method: LoginMethod): UserSession {
    console.log('Creating session dummy for:', userId, method);
    return {
      token: 'dummy-token',
      userId,
      status: 'ACTIVE',
      metadata: {
        lastActivityAt: Date.now(),
        loginMethod: method,
        deviceId: 'dummy-device'
      }
    };
  },

  getSession(): UserSession | null {
    console.log('Fetching dummy session');
    return null;
  },

  updateSession(session: Partial<UserSession>): void {
    console.log('Updating dummy session:', session);
  },

  clearSession(): void {
    console.log('Clearing dummy session');
  },

  isSessionValid(session: UserSession): boolean {
    console.log('Validating session dummy for:', session.userId);
    return false;
  }
};
