






// login m 


import Image from 'next/image'
import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LoginComponent() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Image Column */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="/login.png"
          alt="Login background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Form Column */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Log in to Exclusive</h2>
            <p className="mt-2 text-sm text-gray-600">Enter your details below</p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
          
              <Input
                type="email"
                placeholder="Email"
                className="border-t-0 border-x-0 border-b-2 border-gray-300 rounded-none px-0 placeholder-gray-400"
              />
              <Input
                type="password"
                placeholder="Password"
                className="border-t-0 border-x-0 border-b-2 border-gray-300 rounded-none px-0 placeholder-gray-400"
              />
            </div>

            <div className="space-y-4 flex justify-between">
              <Button className="" size="lg">
              Log in 
              </Button>
           <p className='text-secondRed hover:underline cursor-pointer'>fogot password</p>
            </div>
          </form>

         
        </div>
      </div>
    </div>
  )
}

