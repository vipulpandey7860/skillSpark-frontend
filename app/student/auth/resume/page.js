"use client"

import { asyncDeleteEducation } from "@/store/Actions/studentAction"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
const page = () => {
    const dispatch = useDispatch();
    const { student } = useSelector(state => state.studentReducer)
    
    const edudeleteHandler = (id) => {
        
        dispatch(asyncDeleteEducation(id))
    }

  return (
      <>
      
      <h1>This is resume section </h1>
      
          <h4>Education <Link className="bg-blue-600" href='/student/auth/resume/education'>add education</Link> </h4>
          <ul>
              {student && student.resume.education.map((edu, index) => (
                  <div className="bg-yellow-300 m-5" key={edu.id}>
                      
                      {JSON.stringify(edu)}

                      <br />

                      <Link className="bg-blue-600" href={`/student/auth/resume/education/edit/${edu.id}`}>Edit education</Link>

                      <br />
                      <button onClick={()=>edudeleteHandler(edu.id)}
                      
                          className="bg-blue-600">
                          delete education
                      </button>
                  </div>
                ))}
          </ul>
      
      </>
  )
}

export default page