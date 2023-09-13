"use client"

import { asyncSignupStudent } from "@/store/Actions/studentAction";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export const metadata = {
    title: 'Student | Signup',
  }

const page = () => {
  const dispatch = useDispatch();
  

  const router = useRouter();
  const { isAuthenticated } = useSelector(state => state.studentReducer)
  
  useEffect(() => {

    if (isAuthenticated) {
      router.push('/student/auth')
    }
  }, [isAuthenticated])


  const signupHandler = () => {
    const newStudent = {
      firstname: "vipul",
      lastname: "pandey",
      gender: "Male",
      email: "vipul2@gmail.com",
      contact: 1234564898,
      city: "rewa",
      address: "rewa",
      password: "Vipul@7860"
    };
dispatch(asyncSignupStudent(newStudent))

  }
  return (
    <>
    
      <button className="bg-red-900" onClick={signupHandler}>signup</button>
    </>
  )
}

export default page