import { Link } from 'react-router-dom';
import { NavItemConfig } from '../../config/navigation';

interface SidebarNavItemProps {
  item: NavItemConfig;
  isActive: boolean;
  isCollapsed: boolean;
}

export function SidebarNavItem({ item, isActive, isCollapsed }: SidebarNavItemProps) {
  return (
    <Link 
      to={item.path}
      aria-current={isActive ? 'page' : undefined}
      className={`flex items-center px-3 py-2.5 rounded-[var(--radius-md)] outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] focus-visible:ring-offset-2 transition-colors ${
        isActive 
          ? 'bg-[var(--color-action-focus)] text-[var(--color-brand-primary)] font-semibold' 
          : 'text-[var(--color-text-main)] hover:bg-[var(--color-action-hover)] hover:text-[var(--color-text-primary)] font-medium'
      }`}
      title={isCollapsed ? item.label : undefined}
    >
      <div 
        className={`w-5 h-5 shrink-0 rounded-sm flex items-center justify-center ${
          isActive ? 'bg-[var(--color-brand-primary)] text-[var(--color-bg-surface)]' : 'bg-[var(--color-text-muted)] text-[var(--color-bg-surface)]'
        }`}
        aria-hidden="true"
      >
        {/* Placeholder Icon (future rendering spot) */}
      </div>
      {!isCollapsed && <span className="ml-3 text-sm tracking-wide">{item.label}</span>}
    </Link>
  );
}
