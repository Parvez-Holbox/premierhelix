"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Shield, CreditCard, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const BookNowPage = () => {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    dateOfBirth: "",
    gender: "",
    reason: "",
    emergencyContact: "",
    emergencyPhone: "",
    insuranceProvider: "",
    insuranceNumber: "",
    marketingConsent: false,
    termsConsent: false,
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleCheckboxChange = (id, checked) => {
    setFormData((prev) => ({ ...prev, [id]: checked }))
  }

  const handleSubmit = async () => {
    if (!formData.marketingConsent || !formData.termsConsent) {
      setError("Please agree to the terms and conditions to continue")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Send form data to your API
    //   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bookings`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   })

    //   if (!response.ok) {
    //     throw new Error("Failed to submit booking")
    //   }

      // Redirect to Stripe payment
      // In a real implementation, you would get a session ID from your backend
      // and redirect to Stripe checkout
      setTimeout(() => {
        setIsLoading(false)
        // Simulate redirect to Stripe
        router.push("/stripe-payment-redirect")
      }, 1500)
    } catch (err) {
      setError("Failed to submit booking. Please try again.")
      setIsLoading(false)
    }
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-3xl mx-auto mb-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent mb-3"
        >
          Book Your Appointment
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-600"
        >
          Schedule a consultation with our specialists
        </motion.p>
      </div>

      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="w-full max-w-3xl mx-auto">
        <Card className="border-0 shadow-lg bg-white/95 backdrop-blur-sm overflow-hidden rounded-xl">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-5">
            <CardTitle className="text-xl font-bold">Patient Information</CardTitle>
            <CardDescription className="text-blue-100">
              Please fill out the form below to schedule your consultation
            </CardDescription>
          </CardHeader>

          <CardContent className="p-6">
            {error && (
              <Alert variant="destructive" className="mb-6 bg-red-50 text-red-800 border-red-200">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700 text-sm font-medium">
                      First Name*
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      required
                      className="bg-gray-50 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 text-sm font-medium">
                      Last Name*
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      required
                      className="bg-gray-50 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-gray-700 text-sm font-medium">
                    Date of Birth*
                  </Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-50 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-gray-700 text-sm font-medium">
                    Gender*
                  </Label>
                  <Select value={formData.gender} onValueChange={(value) => handleSelectChange("gender", value)}>
                    <SelectTrigger className="bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700 text-sm font-medium">
                        Email Address*
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john.doe@example.com"
                        required
                        className="bg-gray-50 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-700 text-sm font-medium">
                        Phone Number*
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(123) 456-7890"
                        required
                        className="bg-gray-50 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-gray-700 text-sm font-medium">
                      Address*
                    </Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="123 Main St"
                      required
                      className="bg-gray-50 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                    <div className="space-y-2 col-span-2">
                      <Label htmlFor="city" className="text-gray-700 text-sm font-medium">
                        City*
                      </Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="New York"
                        required
                        className="bg-gray-50 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state" className="text-gray-700 text-sm font-medium">
                        State*
                      </Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="NY"
                        required
                        className="bg-gray-50 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip" className="text-gray-700 text-sm font-medium">
                        ZIP Code*
                      </Label>
                      <Input
                        id="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        placeholder="10001"
                        required
                        className="bg-gray-50 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Emergency Contact</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact" className="text-gray-700 text-sm font-medium">
                      Emergency Contact Name
                    </Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="bg-gray-50 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone" className="text-gray-700 text-sm font-medium">
                      Emergency Contact Phone
                    </Label>
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                      placeholder="(123) 456-7890"
                      className="bg-gray-50 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Insurance Information (Optional)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="insuranceProvider" className="text-gray-700 text-sm font-medium">
                      Insurance Provider
                    </Label>
                    <Input
                      id="insuranceProvider"
                      value={formData.insuranceProvider}
                      onChange={handleInputChange}
                      placeholder="Insurance Company"
                      className="bg-gray-50 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="insuranceNumber" className="text-gray-700 text-sm font-medium">
                      Policy/Member Number
                    </Label>
                    <Input
                      id="insuranceNumber"
                      value={formData.insuranceNumber}
                      onChange={handleInputChange}
                      placeholder="XXXXX-XXXXX"
                      className="bg-gray-50 border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason" className="text-gray-700 text-sm font-medium">
                  Reason for Visit*
                </Label>
                <Textarea
                  id="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="Please briefly describe your symptoms or reason for consultation"
                  required
                  className="bg-gray-50 border-gray-200 min-h-[100px] focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-5 shadow-inner">
                <h3 className="font-medium text-blue-800 mb-4">Appointment Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                    <span className="text-gray-700">Initial Consultation</span>
                    <span className="font-medium text-gray-900">$200.00</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                    <span className="text-gray-700">Service Fee</span>
                    <span className="font-medium text-gray-900">$0.00</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <span className="font-medium text-gray-900">Total</span>
                    <span className="font-bold text-blue-800 text-lg">$200.00</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Payment will be processed securely via Stripe after form submission
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="marketingConsent"
                    checked={formData.marketingConsent}
                    onCheckedChange={(checked) => handleCheckboxChange("marketingConsent", checked)}
                    className="mt-1"
                  />
                  <Label htmlFor="marketingConsent" className="text-sm text-gray-600">
                    I agree to receive marketing messages and follow-up visit reminders via SMS & email. Text STOP to
                    opt-out.
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="termsConsent"
                    checked={formData.termsConsent}
                    onCheckedChange={(checked) => handleCheckboxChange("termsConsent", checked)}
                    className="mt-1"
                  />
                  <Label htmlFor="termsConsent" className="text-sm text-gray-600">
                    I agree to the PremierHelix Health{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms of Use
                    </a>
                    ,{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    ,{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Terms and Conditions
                    </a>
                    ,{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Telehealth Consent
                    </a>
                    ,{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Refund Policy
                    </a>
                    , and to receive login and appointment links via SMS.
                  </Label>
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between p-5 bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
            <Button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="mr-2 h-5 w-5" />
                  Proceed to Payment - $200.00
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 bg-white rounded-xl shadow-md p-4 border border-gray-100"
        >
          <div className="flex items-start space-x-3">
            <div className="rounded-full bg-blue-100 p-2 flex-shrink-0">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Secure & Confidential</h3>
              <p className="mt-1 text-sm text-gray-600">
                Your information is protected with industry-standard encryption. All consultations are private and
                confidential in accordance with HIPAA regulations. Payment is securely processed through Stripe.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default BookNowPage

