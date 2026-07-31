import { useState, useEffect } from 'react'
import { Button } from '../components/common/Button'
import { Badge } from '../components/common/Badge'
import { AuthLayout } from '../layouts/AuthLayout'

export function PinLogin({ onSwitchMode }: { onSwitchMode: () => void }) {
  const [pin, setPin] = useState('')
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handlePadClick = (val: string) => {
    if (pin.length < 6) setPin(prev => prev + val)
  }

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1))
  }

  const handleClear = () => {
    setPin('')
  }

  const handleLogin = () => {
    console.log('PIN Login attempt', { pin })
  }

  const dots = Array.from({ length: 6 }).map((_, i) => (
    <div 
      key={i} 
      className={`w-4 h-4 rounded-full mx-1.5 transition-all duration-200 ${
        i < pin.length 
          ? 'bg-[var(--color-brand-primary)] scale-110' 
          : 'bg-[var(--color-border-default)]'
      }`}
    />
  ))

  return (
    <AuthLayout>
      <div className="w-full flex flex-col items-center">
        {/* Environment Info specific to PIN Login */}
        <div className="w-full flex justify-between items-center mb-6">
          <Badge variant="neutral" className="px-3 py-1 text-sm font-medium">Terminal 01</Badge>
          <div className="text-right">
             <p className="text-lg font-mono text-[var(--color-text-primary)] font-semibold bg-[var(--color-action-focus)] px-2 py-0.5 rounded">
               {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
             </p>
          </div>
        </div>

        {/* Cashier Identity Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-[var(--color-bg-surface)] border-2 border-[var(--color-border-default)] rounded-full flex items-center justify-center text-2xl mb-3 shadow-sm text-[var(--color-brand-primary)] font-bold">
             JS
          </div>
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Jane Smith</h2>
          <div className="mt-2">
             <Badge variant="success">Cashier</Badge>
          </div>
        </div>

        {/* Secure PIN Display */}
        <div className="flex justify-center mb-8 h-8 items-center bg-[var(--color-bg-surface)] px-6 py-4 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] shadow-inner w-full">
          {dots}
        </div>

        {/* Numeric Keypad Grid */}
        <div className="grid grid-cols-3 gap-3 w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <Button 
              key={num} 
              variant="secondary" 
              className="h-16 text-2xl font-medium rounded-2xl shadow-sm bg-[var(--color-bg-surface)] hover:bg-[var(--color-action-hover)] hover:border-[var(--color-brand-primary)] transition-all"
              onClick={() => handlePadClick(num.toString())}
            >
              {num}
            </Button>
          ))}
          <Button 
            variant="ghost" 
            className="h-16 text-lg font-medium rounded-2xl text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-action-hover)]" 
            onClick={handleClear}
          >
            Clear
          </Button>
          <Button 
            variant="secondary" 
            className="h-16 text-2xl font-medium rounded-2xl shadow-sm bg-[var(--color-bg-surface)] hover:bg-[var(--color-action-hover)] hover:border-[var(--color-brand-primary)] transition-all" 
            onClick={() => handlePadClick('0')}
          >
            0
          </Button>
          <Button 
            variant="ghost" 
            className="h-16 text-xl font-medium rounded-2xl text-[var(--color-text-muted)] hover:text-[var(--color-brand-danger)] hover:bg-red-50" 
            onClick={handleBackspace}
          >
            ⌫
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="w-full mt-6 space-y-3">
          <Button 
            variant="primary" 
            className="w-full h-14 text-lg font-medium rounded-2xl shadow-md transition-all"
            onClick={handleLogin}
            disabled={pin.length !== 6}
          >
            Access Terminal
          </Button>
          <Button variant="ghost" onClick={onSwitchMode} className="w-full text-sm font-medium">
            Switch to Admin Login
          </Button>
        </div>
      </div>
    </AuthLayout>
  )
}
