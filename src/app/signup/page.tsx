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
            <h2 className="text-3xl font-bold">Create an account</h2>
            <p className="mt-2 text-sm text-gray-600">Enter your details below</p>
          </div>

          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Name"
                className="border-t-0 border-x-0 border-b-2 border-gray-300 rounded-none px-0 placeholder-gray-400"
              />
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

            <div className="space-y-4">
              <Button className="w-full" size="lg">
                Create an account
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign up with Google
              </Button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="font-medium text-primary hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}