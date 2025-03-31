"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Calendar, ArrowRight, Phone, Download } from "lucide-react"

export default function ConfirmationPage() {
  const router = useRouter()

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const itemVariant = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-12 px-4">
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-md mx-auto">
        <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm overflow-hidden rounded-xl">
          <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-8">
            <div className="flex justify-center mb-4">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2,
                }}
                className="bg-white rounded-full p-3 shadow-lg"
              >
                <CheckCircle2 className="h-14 w-14 text-green-500" />
              </motion.div>
            </div>
            <CardTitle className="text-2xl font-bold">Payment Successful!</CardTitle>
            <p className="text-green-100 mt-2">Your appointment has been confirmed</p>
          </CardHeader>

          <CardContent className="p-6">
            <motion.div initial="hidden" animate="visible" className="space-y-6">
              <motion.div variants={itemVariant} className="text-center mb-4">
                <p className="text-gray-600">
                  Thank you for your payment. Your appointment has been scheduled. We've sent a confirmation email with
                  all the details.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariant}
                className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-5 shadow-inner border border-blue-200"
              >
                <h3 className="font-medium text-blue-800 mb-3 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Appointment Details
                </h3>

                <div className="space-y-3">

                  <div className="flex items-center space-x-3">
                    <div className="rounded-full bg-white p-2 shadow-sm">
                      <Phone className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Appointment Type</p>
                      <p className="font-medium text-gray-900">Virtual Consultation</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-blue-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Amount Paid:</span>
                    <span className="font-bold text-blue-800">$200.00</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Transaction ID: PHLX-2023-04152</div>
                </div>
              </motion.div>

              <motion.div variants={itemVariant} className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <h3 className="font-medium text-blue-800 mb-2">Important Information</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Please join your virtual appointment 5 minutes before the scheduled time.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Have any relevant medical records or information ready for the consultation.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    You'll receive a link to join your appointment via email and SMS.
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row justify-between p-5 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 gap-3">
           

            <div className="flex gap-3 w-full sm:w-auto">
              <Button
                onClick={() => window.open("https://calendly.com/harsh-langaliya-holbox/30min", "_blank")}
                className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white flex-1 sm:flex-none"
              >
                Book Time Slot
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

