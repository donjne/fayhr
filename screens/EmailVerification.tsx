'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export default function EmailVerification() {
  const [verificationCode, setVerificationCode] = useState(['', '', '', ''])
  const [timeLeft, setTimeLeft] = useState(192) // 3 minutes and 12 seconds
  const router = useRouter()

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timerId)
    }
  }, [timeLeft])

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...verificationCode]
    newCode[index] = value
    setVerificationCode(newCode)

    // Move focus to next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`code-${index + 1}`)
      nextInput?.focus()
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const code = verificationCode.join('')
    console.log('Verification code submitted:', code)
    // Here you would typically send the code to your backend for verification
    // If successful, redirect to password reset or confirmation page
    router.push('/reset-password')
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4">
      <div className="max-w-md mx-auto">

        {/* Back button */}
        <button onClick={() => router.back()} className="mb-6">
          <ArrowLeft className="w-6 h-6" />
        </button>

        <h1 className="text-3xl font-bold mb-2">Email has been sent!</h1>
        <p className="text-gray-600 mb-8">
          Please check your inbox and enter your<br />
          verification code to reset password
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-between">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                className="w-14 h-14 text-center text-2xl border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            ))}
          </div>

          <p className="text-center text-sm">
            Code expires in: <span className="font-semibold">{formatTime(timeLeft)}</span>
          </p>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold"
          >
            Verify
          </button>
        </form>

        <p className="text-center mt-6">
          Didn&apos;t receive the code?{' '}
          <button onClick={() => setTimeLeft(192)} className="text-blue-500 font-semibold">
            Resend
          </button>
        </p>
      </div>
    </div>
  )
}