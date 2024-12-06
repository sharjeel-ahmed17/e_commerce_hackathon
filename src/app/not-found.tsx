import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex justify-center flex-col h-[50vh] items-center gap-5'>
    <h1>404 Not Found</h1>
    <p> Your visited page not found. You may go home page.</p>
    <Link href='/'>Back to home page</Link>
  </div>
  
  )
}

export default NotFound