"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Loader2, CreditCard } from "lucide-react"

export default function StripeRedirectPage() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    // In a real implementation, this would redirect to Stripe Checkout
    // with a session ID from your backend
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Simulate successful payment and redirect to confirmation
          setTimeout(() => {
            router.push("/book-now/confirmation")
          }, 500)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-white to-blue-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full text-center"
      >
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-blue-100 p-4">
              <CreditCard className="h-10 w-10 text-blue-600" />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">Redirecting to Secure Payment</h1>
          <p className="text-gray-600 mb-6">
            You are being redirected to our secure payment processor. Please do not close this window.
          </p>

          <div className="flex justify-center mb-6">
            <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
          </div>

          <div className="text-sm text-gray-500">Redirecting in {countdown} seconds...</div>
        </div>
      </motion.div>
    </div>
  )
}

