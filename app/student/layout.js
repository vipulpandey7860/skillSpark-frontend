"use client"

import Footer from "@/components/student ui/Footer"
import Navbar from "@/components/student ui/Navbar"
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

 

  return (
    <>
      
      <Navbar/>

      {children}
      <Footer/>
    </>
  )
}

export default StudentLayout