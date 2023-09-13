"use client"

import { asyncSigninStudent } from "@/store/Actions/studentAction";
import Link from "next/link";
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


  const signinHandler = () => {
    const student = {
      email: "vipul@gmail.com",
      password: "Vipul@7860"
    };
    dispatch(asyncSigninStudent(student))

  }
  
  return (
    <>

      <button className="bg-red-900 mx-5" onClick={signinHandler}>signin</button>

      <Link href="/student/forget" className="bg-red-900 mx-5" >forgot password</Link>
      
    </>
  )
}

export default page