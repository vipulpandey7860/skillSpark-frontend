"use client"
import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const metadata = {
  title: 'employe | Home',
}
const page = () => {
  const dispatch = useDispatch();
  const { employe } = useSelector((state) => state.employeReducer);

  useEffect(() => {
  }, [employe])

  return (
    <>


      <div className="container mx-auto text-center py-10">
        <div className="flex flex-col gap-3 items-center py-5">
        <h1 className="text-4xl font-semibold text-gray-800">Welcome, {employe?.firstname} {employe?.lastname}
          </h1>
          <p className="font-medium ">What's in your mind today!</p>
          </div>
        <div className="flex justify-center">
          <Link href="/employe/auth/create/job" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg mx-4 hover:bg-blue-700">
            Create Job

          </Link>
          <Link href="/employe/auth/create/internship" className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg mx-4 hover:bg-green-700">
            Create Internship

          </Link>
        </div>
      </div>
    </>
  )
}

export default page