export function Header() {
  return (
    <header className="h-14 lg:h-16 bg-[var(--color-bg-header)] border-b border-[var(--color-border-divider)] flex items-center justify-between px-4 shrink-0 z-10 shadow-sm relative">
      {/* Electron drag region */}
      <div className="absolute inset-0 [-webkit-app-region:drag] pointer-events-none"></div>

      <div className="flex items-center gap-4 relative z-10 pointer-events-auto">
        {/* Application Title/Logo Placeholder */}
        <div className="text-xl font-bold text-[var(--color-brand-primary)] tracking-tight">
          INFYPOS
        </div>
      </div>
      
      <div className="flex items-center gap-4 lg:gap-6 relative z-10 pointer-events-auto">
        {/* Store Placeholder */}
        <div className="hidden md:flex items-center px-3 py-1.5 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border-default)]">
          <span className="text-sm font-medium text-[var(--color-text-main)]">
            Main Store (001)
          </span>
        </div>
        
        {/* User Placeholder */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-[var(--color-action-hover)] p-1.5 pr-3 rounded-full transition-colors">
          <div className="w-8 h-8 rounded-full bg-[var(--color-bg-surface)] border border-[var(--color-border-default)] flex items-center justify-center">
            <span className="text-xs font-bold text-[var(--color-text-muted)]">AD</span>
          </div>
          <div className="hidden sm:block text-sm font-medium text-[var(--color-text-main)]">
            Admin User
          </div>
        </div>

        {/* Window Controls Placeholder Area */}
        <div className="hidden md:flex items-center gap-2 pl-4 border-l border-[var(--color-border-divider)]">
          <div className="w-3.5 h-3.5 rounded-full bg-[var(--color-brand-warning)] opacity-80 hover:opacity-100 cursor-pointer transition-opacity"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[var(--color-brand-success)] opacity-80 hover:opacity-100 cursor-pointer transition-opacity"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[var(--color-brand-danger)] opacity-80 hover:opacity-100 cursor-pointer transition-opacity"></div>
        </div>
      </div>
    </header>
  )
}
