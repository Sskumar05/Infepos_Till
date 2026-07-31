export interface NavItemConfig {
  id: string;
  label: string;
  path: string;
  icon?: string; // Placeholder for icon identifier
  isFooter?: boolean; // Distinguish between main nav and footer nav
}

export const NAVIGATION_CONFIG: NavItemConfig[] = [
  // Main Menu Items
  { id: 'home', label: 'Home', path: '/', icon: 'home' },
  { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
  { id: 'sales', label: 'Sales', path: '/sales', icon: 'cart' },
  { id: 'products', label: 'Products', path: '/products', icon: 'box' },
  { id: 'customers', label: 'Customers', path: '/customers', icon: 'users' },
  { id: 'inventory', label: 'Inventory', path: '/inventory', icon: 'archive' },
  { id: 'reports', label: 'Reports', path: '/reports', icon: 'chart' },
  
  // Footer Items
  { id: 'settings', label: 'Settings', path: '/settings', icon: 'settings', isFooter: true },
  { id: 'logout', label: 'Logout', path: '/login', icon: 'logout', isFooter: true },
];
