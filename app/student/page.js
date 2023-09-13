"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const metadata = {
  title: 'Internshala | Student',
}
const page = () => {

  const router = useRouter();
  const { isAuthenticated } = useSelector(state => state.studentReducer)

  useEffect(() => {

    if (isAuthenticated) {
      router.push('/student/auth')
    }
  }, [isAuthenticated])

  return (
    <>
      <Link className='bg-red-600 mx-5' href="/student/signin">signin</Link>

      <Link className='bg-red-600 mx-5' href="/student/signup">signup</Link>

    </>
  )
}

export default page