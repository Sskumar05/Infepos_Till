import { ReactNode } from 'react'
import { Divider } from '../components/common/Divider'

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="fixed inset-0 z-50 flex bg-[var(--color-bg-base)] text-[var(--color-text-main)]">
      {/* Electron drag region */}
      <div className="h-8 w-full absolute top-0 left-0 [-webkit-app-region:drag] z-50"></div>

      {/* Left side: Branding */}
      <div className="hidden md:flex w-[40%] flex-col justify-between bg-[var(--color-bg-surface)] border-r border-[var(--color-border-default)] p-10 relative z-10 shadow-[var(--shadow-lg)]">
        <div className="pt-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-[var(--radius-2xl)] bg-[var(--color-brand-primary)] text-[var(--color-bg-surface)] shadow-md mb-6">
            <span className="text-2xl font-bold tracking-tighter">IN</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-text-primary)]">INFYPOS</h1>
          <p className="text-[var(--color-text-muted)] mt-2 text-lg font-medium">Enterprise Retail System</p>
          <p className="mt-4 text-sm text-[var(--color-text-main)] max-w-sm leading-relaxed">
            Empowering modern retail with secure, scalable, and intuitive point of sale technology.
          </p>
        </div>

        <div className="pb-4">
           <p className="text-sm font-semibold text-[var(--color-text-main)] mb-1">INFYPOS Corporation</p>
           <p className="text-xs text-[var(--color-text-muted)]">Version 1.0.0-beta (Build 2026.07)</p>
        </div>
      </div>

      {/* Right side: Authentication Content */}
      <div className="flex-1 flex flex-col relative z-10">
        <div className="flex-1 flex items-center justify-center p-6 mt-8">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-[var(--color-text-muted)] px-6">
          <Divider className="max-w-md mx-auto mb-4" />
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
            <p className="font-medium">© 2026 INFYPOS Corporation. All rights reserved.</p>
            <span className="hidden md:inline text-[var(--color-border-default)]">|</span>
            <a href="#" className="hover:text-[var(--color-brand-primary)] transition-colors">Support Center</a>
          </div>
        </footer>
      </div>
    </div>
  )
}
