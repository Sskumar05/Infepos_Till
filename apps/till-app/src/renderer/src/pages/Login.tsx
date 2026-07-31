import { useState } from 'react'
import { Card, CardBody } from '../components/common/Card'
import { Button } from '../components/common/Button'
import { Input } from '../components/forms/Input'
import { Checkbox } from '../components/forms/Checkbox'
import { PinLogin } from './PinLogin'
import { AuthLayout } from '../layouts/AuthLayout'

export default function Login() {
  const [loginMode, setLoginMode] = useState<'EMAIL' | 'PIN'>('PIN')
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  if (loginMode === 'PIN') {
    return <PinLogin onSwitchMode={() => setLoginMode('EMAIL')} />
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt', { email, password })
  }

  return (
    <AuthLayout>
      <Card className="w-full shadow-[var(--shadow-xl)] border-[var(--color-border-default)]">
        <CardBody className="p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">Admin Login</h2>
            <p className="text-[var(--color-text-muted)] text-sm mt-1">Sign in to access the management dashboard.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
            <Input 
              label="Email Address" 
              type="email" 
              placeholder="admin@infypos.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            
            <div>
              <div className="relative">
                <Input 
                  label="Password" 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[34px] text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brand-primary)] font-medium transition-colors focus:outline-none focus-visible:underline"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <Checkbox label="Remember Me" />
              <a href="#" className="text-sm font-medium text-[var(--color-brand-primary)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] rounded">
                Forgot Password?
              </a>
            </div>

            <div className="pt-3 space-y-3">
              <Button type="submit" variant="primary" className="w-full h-11 text-base shadow-sm">
                Sign In
              </Button>
              <Button type="button" variant="ghost" className="w-full h-11 text-base" onClick={() => setLoginMode('PIN')}>
                Switch to PIN Login
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </AuthLayout>
  )
}
