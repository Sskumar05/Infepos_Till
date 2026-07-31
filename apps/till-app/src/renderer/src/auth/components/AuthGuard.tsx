import { ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import { ProtectedRoute } from '../guards/ProtectedRoute';
import { PublicRoute } from '../guards/PublicRoute';

interface AuthGuardProps {
  children: ReactNode;
  type?: 'public' | 'protected';
}

/**
 * AuthGuard acts as a generic wrapper that automatically applies the correct
 * route protection based on the provided type.
 */
export function AuthGuard({ children, type = 'protected' }: AuthGuardProps) {
  const { isLoading } = useAuth();

  // Show a blank/loading screen while checking authentication status
  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-[var(--color-bg-base)] text-[var(--color-text-main)]">
        Loading...
      </div>
    );
  }

  if (type === 'public') {
    return <PublicRoute>{children}</PublicRoute>;
  }

  return <ProtectedRoute>{children}</ProtectedRoute>;
}
