export const SESSION_CONFIG = {
  TIMEOUT_MS: 30 * 60 * 1000, // 30 minutes
  MAX_IDLE_TIME_MS: 15 * 60 * 1000, // 15 minutes
};

export const SESSION_STATUS = {
  ACTIVE: 'ACTIVE' as const,
  IDLE: 'IDLE' as const,
  EXPIRED: 'EXPIRED' as const,
};

export const LOGIN_METHOD = {
  EMAIL: 'EMAIL' as const,
  PIN: 'PIN' as const,
};
