"use client"

import { asyncSigninemploye } from "@/store/Actions/employeAction";
import Link from "next/link";
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


  const signinHandler = () => {
    const employe = {
      email: "vipul@gmail.com",
      password: "Vipul@7860"
    };
    dispatch(asyncSigninemploye(employe))

  }
  
  return (
    <>

      <button className="bg-red-900 mx-5" onClick={signinHandler}>signin</button>

      <Link href="/employe/forget" className="bg-red-900 mx-5" >forgot password</Link>
      
    </>
  )
}

export default page