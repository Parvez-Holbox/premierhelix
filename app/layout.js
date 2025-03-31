import './globals.css'
import {
  ClerkProvider,
} from '@clerk/nextjs'

export const metadata = {
  title: 'PremierHelix Health',
  description: 'Specialized virtual consultations for epilepsy,<br>stroke recovery, headaches,<br>movement disorders, and dementia.',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>{children}</body>
    </html>
    </ClerkProvider>
  )
}