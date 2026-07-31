export type LoginMethod = 'EMAIL' | 'PIN';
export type SessionStatus = 'ACTIVE' | 'IDLE' | 'EXPIRED';

export interface SessionMetadata {
  lastActivityAt: number;
  loginMethod: LoginMethod;
  deviceId: string;
}

export interface UserSession {
  token: string;
  userId: string;
  status: SessionStatus;
  metadata: SessionMetadata;
}
