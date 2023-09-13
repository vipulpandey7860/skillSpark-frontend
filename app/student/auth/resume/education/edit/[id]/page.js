"use client"

import { asyncEditEducation } from "@/store/Actions/studentAction";
import { useDispatch } from "react-redux";
const page = ({params}) => {
    const dispatch = useDispatch()

    const editEducationHandler = () => {
        const edu = {
            school: "IIT",
            school: "IIT",
            engineering: "sirt",
            status: "completed",
        }
        dispatch(asyncEditEducation(params.id,edu))
    }


  return (
      <>
          edit the fileds you want
          
          <button onClick={editEducationHandler}   className="bg-red-900">edit education</button>
      </>
  )
}

export default page