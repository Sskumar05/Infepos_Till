import { SidebarNavMenu } from '../navigation/SidebarNavMenu'

export function Sidebar() {
  // Collapsible architecture placeholder
  const isCollapsed = false

  return (
    <aside className={`flex flex-col bg-[var(--color-bg-sidebar)] border-r border-[var(--color-border-divider)] transition-all duration-300 z-10 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <SidebarNavMenu isCollapsed={isCollapsed} />
    </aside>
  )
}
