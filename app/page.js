"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

export const metadata = {
  title: 'Internshala | Home',
}

const page = () => {

  return (
    <>
    <div className='flex items-center gap-8 justify-center'>
      <Link  className='bg-blue-400 p-5 rounded-md' href="/student">Student</Link>
      <br />
      <br />
      <Link className='bg-blue-400 p-5 rounded-md' href="/employe">Employe</Link>
      </div>
    </>

    )
}

export default page