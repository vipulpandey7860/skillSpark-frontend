"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

export const metadata = {
  title: 'Internshala | Home',
}

const page = () => {

  return (
    <>
    
      <Link href="/student">Student</Link>
      <br />
      <br />
      <Link href="/employe">Employe</Link>
    </>

    )
}

export default page