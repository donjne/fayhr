'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
// import Image from 'next/image'
import { User, Camera } from 'lucide-react'

export default function ProfileCreation() {
  const [displayName, setDisplayName] = useState('')
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the profile data to your backend
    console.log('Profile created:', { displayName })
    // Redirect to the next step or home page
    router.push('/home')
  }

  const handleSkip = () => {
    // Handle skip logic here
    router.push('/home')
  }

  const handleImageClick = () => {
    fileInputRef.current?.click()
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Create a URL for preview
      const imageUrl = URL.createObjectURL(file)
      setProfileImage(imageUrl)
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4">
      <div className="max-w-md mx-auto">

        {/* Fayhr logo */}
        <h1 className="text-3xl font-semibold text-blue-500 mb-8">fayhr<sup className="text-xs">TM</sup></h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="displayName" className="block text-lg mb-2">
              What would you like others to call you?
            </label>
            <input
              type="text"
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Display Name"
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div>
            <p className="text-lg mb-2">Select a Profile Picture</p>
            <div 
              className="relative w-32 h-32 mx-auto cursor-pointer"
              onClick={handleImageClick}
            >
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
              <div className="absolute inset-0 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-16 h-16 text-gray-400" />
                )}
              </div>
              <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold"
          >
            Save and Continue
          </button>
        </form>

        <button
          onClick={handleSkip}
          className="w-full text-gray-500 py-3 mt-4"
        >
          Skip
        </button>
      </div>
    </div>
  )
}