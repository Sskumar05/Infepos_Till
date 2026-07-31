export type UserRole = 'ADMIN' | 'MANAGER' | 'CASHIER';

export interface User {
  id: string;
  username: string;
  fullName: string;
  role: UserRole;
  storeId: string;
}

export interface Session {
  token: string;
  user: User;
  expiresAt: number;
}

export interface LoginRequest {
  username: string;
  password?: string;
}

export interface PinLoginRequest {
  pin: string;
}

export interface LoginResponse {
  success: boolean;
  token?: string;
  user?: User;
  error?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  error: string | null;
}
