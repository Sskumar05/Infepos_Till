import { LoginRequest, PinLoginRequest, LoginResponse } from '../types';

/**
 * Placeholder authentication service for backend integration.
 * No real API calls are implemented yet.
 */
export const authService = {
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    console.log('Login attempt:', credentials);
    // Placeholder implementation
    return { success: false, error: 'Not implemented' };
  },

  async loginWithPin(credentials: PinLoginRequest): Promise<LoginResponse> {
    console.log('PIN Login attempt:', credentials);
    // Placeholder implementation
    return { success: false, error: 'Not implemented' };
  },

  async logout(): Promise<void> {
    // Placeholder implementation
  }
};
