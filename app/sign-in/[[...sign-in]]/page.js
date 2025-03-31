import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return <div className='flex justify-center items-center h-screen w-full bg-blue-100'><SignIn /></div>
}