"use client"

import { asyncCurrentStudent,asyncSignoutStudent } from "@/store/Actions/studentAction"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


const StudentLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector(state => state.studentReducer)
  

  useEffect(() => {

    dispatch(asyncCurrentStudent())
    
    if (isAuthenticated) {
      router.push('/student/auth')
    }
  }, [isAuthenticated])

  const signoutHandler = () => {
    dispatch(asyncSignoutStudent());
  }

  return (
    <>
      <nav className="bg-gray-800">

      <Link className="mx-5 bg-green-700" href={isAuthenticated ? "/student/auth":"/student"}>Home</Link>

        {isAuthenticated ? (

          <>
            <Link className="mx-5 bg-green-700" href="/student/auth/profile">Profile</Link>
            
            <Link className="mx-5 bg-green-700" href="/student/auth/resume">resume</Link>

            <Link className="mx-5 bg-green-700" href='/student/auth/applied'>applied to</Link>

            <Link onClick={signoutHandler} className="mx-5 bg-green-700" href="">Logout</Link>
          
          </>) :
          
          (<>
            
            <Link className="mx-5 bg-green-700" href="/student/signin">Signin</Link>
        <Link className="mx-5 bg-green-700" href="/student/signup">Signup</Link>
   
          
          </>)
        }
       
        

      </nav>
      {children}
    </>
  )
}

export default StudentLayout