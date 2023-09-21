"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

// export const metadata = {
//   title: 'Internshala | Home',
// }
const page = () => {

  const router = useRouter();

  useEffect(() => {
    router.push('/student/');
  }, []);

  return (
    <>
   
    </>

    )
}

export default page