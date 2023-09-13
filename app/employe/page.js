"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const metadata = {
    title: 'Internshala | employe',
}
const page = () => {

  const router = useRouter();
  const { isAuthenticated } = useSelector(state => state.employeReducer)
  
  useEffect(() => {

    if (isAuthenticated) {
      router.push('/employe/auth')
    }
  }, [isAuthenticated])

  return (
      <>
        <Link  className='bg-red-600 mx-5' href="/employe/signin">signin</Link>

        <Link className='bg-red-600 mx-5' href="/employe/signup">signup</Link>
          
      </>
  )
}

export default page