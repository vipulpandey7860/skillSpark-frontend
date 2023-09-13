"use client"

import { asyncCurrentemploye,asyncSignoutemploye } from "@/store/Actions/employeAction"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


const employeLayout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector(state => state.employeReducer)
  

  useEffect(() => {

    dispatch(asyncCurrentemploye())
    
    if (isAuthenticated) {
      router.push('/employe/auth')
    }
  }, [isAuthenticated])

  const signoutHandler = () => {
    dispatch(asyncSignoutemploye());
  }

  return (
    <>
      <nav className="bg-gray-800">

      <Link className="mx-5 bg-green-700" href={isAuthenticated ? "/employe/auth":"/employe"}>Home</Link>

        {isAuthenticated ? (

          <>
            <Link className="mx-5 bg-green-700" href="/employe/auth/profile">Profile</Link>
            
            <Link className="mx-5 bg-green-700" href='/employe/auth/created'>created jobs and internships</Link>

            <Link onClick={signoutHandler} className="mx-5 bg-green-700" href="">Logout</Link>
          
          </>) :
          
          (<>
            
            <Link className="mx-5 bg-green-700" href="/employe/signin">Signin</Link>
        <Link className="mx-5 bg-green-700" href="/employe/signup">Signup</Link>
   
          
          </>)
        }
       
        

      </nav>
      {children}
    </>
  )
}

export default employeLayout