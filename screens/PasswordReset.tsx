'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Lock, Eye, EyeOff, Check } from 'lucide-react'

export default function PasswordReset() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the new password to your backend
    console.log('New password set:', password)
    // Redirect to login page or show success message
    router.push('/login')
  }

  const isPasswordValid = password.length >= 6

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4">
      <div className="max-w-md mx-auto">
        
        
        {/* Back button */}
        <button onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-3xl font-bold mb-2">Reset your password</h1>
        <p className="text-gray-600 mb-8">Please enter your new password</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••"
              className="w-full p-3 pl-10 pr-10 border rounded-lg"
              required
            />
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? <EyeOff className="text-gray-400" /> : <Eye className="text-gray-400" />}
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <Check className={`w-5 h-5 ${isPasswordValid ? 'text-blue-500' : 'text-gray-300'}`} />
            <span className={isPasswordValid ? 'text-blue-500' : 'text-gray-500'}>
              Your Password must contain:
            </span>
          </div>
          <div className="pl-7">
            <span className={isPasswordValid ? 'text-blue-500' : 'text-gray-500'}>
              at least 6 characters
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold"
            disabled={!isPasswordValid}
          >
            Done
          </button>
        </form>
      </div>
    </div>
  )
}