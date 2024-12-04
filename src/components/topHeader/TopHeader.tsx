import Link from 'next/link'
import React from 'react'

const TopHeader = () => {
  return (
    <div className='h-[48px] bg-black text-white flex justify-center items-center gap-4'>
        <p className='text-[14px] leading-[21px] font-normal font-poppins'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p> 
        <Link href={'/'} className='text-[14px] leading-[24px] font-semibold font-poppins underline capitalize'>shop now</Link>
         </div>
  )
}

export default TopHeader