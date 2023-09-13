"use client"


import { asyncCreateInternship } from "@/store/Actions/employeAction"
import { useDispatch } from "react-redux"
const page = () => {
    const dispatch = useDispatch()
    const createInternshipHandler = async () => {
        const internship = {

                profile:"kabadiwala",
                skills:"kabadi",
                internshiptype:"Remote",
                openings:"23",
                from:"01/07/23",
                to:"01/07/24",
                duration:"1 year",
                responsibilities:"kabad",
                stipend:{
                    mode:"Paid",
                    amount:"897"
                },
                perks:"maja",
                description:"nohting",
                assesments:"nothing",
                status:"Open"

        }
        dispatch(asyncCreateInternship(internship));
    }


    return (
        <>


            <button onClick={createInternshipHandler} className="bg-blue-200">create internship</button>

        </>
    )
}

export default page