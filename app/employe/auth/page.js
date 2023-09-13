"use client"
import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const metadata = {
  title: 'employe | Home',
}
const page = () => {
  const dispatch = useDispatch();
  const {  employe } = useSelector((state) => state.employeReducer);


  useEffect(() => {
  }, [employe])

  return (
    <>
      <h1>welcome to login</h1>

      <Link className="mx-5 bg-yellow-700" href='/employe/auth/create/job'>create job</Link>

      <Link className="mx-5 bg-yellow-700" href='/employe/auth/create/internship'>create internship</Link>
      </>
  )
}

export default page