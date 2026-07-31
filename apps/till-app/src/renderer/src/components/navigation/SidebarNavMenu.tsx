import { useLocation } from 'react-router-dom';
import { NAVIGATION_CONFIG } from '../../config/navigation';
import { SidebarNavItem } from './SidebarNavItem';

interface SidebarNavMenuProps {
  isCollapsed: boolean;
}

export function SidebarNavMenu({ isCollapsed }: SidebarNavMenuProps) {
  const location = useLocation();

  const mainNavItems = NAVIGATION_CONFIG.filter(item => !item.isFooter);
  const footerNavItems = NAVIGATION_CONFIG.filter(item => item.isFooter);

  return (
    <div className="flex flex-col h-full">
      {/* Main Navigation */}
      <div className="flex-1 overflow-y-auto py-4 scrollbar-thin">
        <nav className="flex flex-col gap-1 px-3" aria-label="Main Navigation">
          {mainNavItems.map((item) => (
            <SidebarNavItem 
              key={item.id}
              item={item} 
              isCollapsed={isCollapsed} 
              isActive={location.pathname === item.path} 
            />
          ))}
        </nav>
      </div>

      {/* Footer Navigation */}
      <div className="p-3 border-t border-[var(--color-border-divider)]">
        <nav className="flex flex-col gap-1" aria-label="Footer Navigation">
          {footerNavItems.map((item) => (
            <SidebarNavItem 
              key={item.id}
              item={item} 
              isCollapsed={isCollapsed} 
              isActive={location.pathname === item.path} 
            />
          ))}
        </nav>
      </div>
    </div>
  );
}
