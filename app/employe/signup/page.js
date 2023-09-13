"use client"

import { asyncSignupemploye } from "@/store/Actions/employeAction";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export const metadata = {
    title: 'employe | Signup',
  }

const page = () => {
  const dispatch = useDispatch();
  

  const router = useRouter();
  const { isAuthenticated } = useSelector(state => state.employeReducer)
  
  useEffect(() => {

    if (isAuthenticated) {
      router.push('/employe/auth')
    }
  }, [isAuthenticated])


  const signupHandler = () => {
    const newemploye = {
      firstname:"vipul",
      lastname:"pandey",
      organizationname:"rapidops",
      email:"vipul10@gmail.com",
      contact:1234567840,
      city:"rewa",
      password:"Vipul@7860"
    };
dispatch(asyncSignupemploye(newemploye))

  }
  return (
    <>
    
      <button className="bg-red-900" onClick={signupHandler}>signup</button>
    </>
  )
}

export default page