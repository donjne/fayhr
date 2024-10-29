'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, User, Mail, Lock, Eye, EyeOff } from 'lucide-react'

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    agreeTerms: false
  })
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Redirect to home page or show success message
    router.push('/home')
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4">
      <div className="max-w-md mx-auto">
        {/* Status bar */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm font-semibold">7:42</span>
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 20h22v2H1v-2zm0-2h22v-2H1v2zm0-4h22v-2H1v2zm0-4h22V8H1v2zm0-6v2h22V4H1z"/>
              </svg>
            </div>
            <div className="w-4 h-4">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
              </svg>
            </div>
            <div className="w-6 h-3 border border-current rounded-sm relative">
              <div className="absolute inset-0 bg-current m-0.5"></div>
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-0.5 h-2 bg-current"></div>
            </div>
          </div>
        </div>

        {/* Back button */}
        <button onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-4xl font-bold mb-2">Create Account.</h1>
        <p className="text-xl mb-8">Join a community<br />Let's fund together!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full p-3 pl-10 border rounded-lg"
              required
            />
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 pl-10 border rounded-lg"
              required
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
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

          <div className="flex items-center">
            <input
              type="checkbox"
              name="agreeTerms"
              id="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleInputChange}
              className="mr-2"
              required
            />
            <label htmlFor="agreeTerms" className="text-sm text-gray-600">
              I agree to the terms and conditions
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6">
          Already a member?{' '}
          <Link href="/login" className="text-blue-500 font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}