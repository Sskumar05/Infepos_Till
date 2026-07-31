import { Outlet } from 'react-router-dom'
import { Header } from '../components/layout/Header'
import { Sidebar } from '../components/layout/Sidebar'

export function AppLayout() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[var(--color-bg-base)] font-sans text-[var(--color-text-main)]">
      {/* Top Header */}
      <Header />
      
      {/* Bottom section (Sidebar + Main Content) */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden bg-[var(--color-bg-base)]">
           {/* Responsive content container with proper padding */}
           <div className="max-w-[1600px] mx-auto w-full h-full p-4 md:p-6 lg:p-8">
             <Outlet />
           </div>
        </main>
      </div>
    </div>
  )
}
