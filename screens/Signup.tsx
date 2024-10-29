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