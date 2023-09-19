"use client"
// import Signin from "@/components/common/Signin";
import Signin from "@/components/student ui/Signin";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {  useSelector } from "react-redux";
export const metadata = {
  title: 'Student | Signin',
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
      
      <Signin />

      
    </>
  )
}

export default page