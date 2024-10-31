'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Mail, Check, Send } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the reset request to your backend
    console.log('Password reset requested for:', email)
    // Show success message or redirect
    alert('Password reset instructions sent to your email.')
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4">
      <div className="max-w-md mx-auto">

        {/* Back button */}
        <button onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-3xl font-bold mb-2">Forgot your password</h1>
        <p className="text-gray-600 mb-8">
          Enter your registered email below<br />
          to receive password reset instructions
        </p>

        {/* Envelope illustration */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 border-2 border-gray-300 rounded-lg transform -rotate-6"></div>
            <div className="absolute inset-0 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center">
              <Check className="w-16 h-16 text-blue-500" />
            </div>
            <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2">
              <Send className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 pl-10 border rounded-lg"
              required
            />
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          <p className="text-center">
            Remember password?{' '}
            <Link href="/login" className="text-blue-500 font-semibold">
              Log In
            </Link>
          </p>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}