"use client"

import { asyncCreateJob } from "@/store/Actions/employeAction"
import { useDispatch } from "react-redux"
const page = () => {
    const dispatch = useDispatch()
    const createJobHandler = async () => {
        const job = {

            title: "data scientist",
            skills: "python",
            jobtype: "Remote",
            openings: "00",
            salary: 69,
            perks: "kuch nahi",
            description: "nohting",
            assesments: "nothing",
            preferences: "preferences"

        }
        dispatch(asyncCreateJob(job));
    }


    return (
        <>


            <button onClick={createJobHandler} className="bg-blue-200">create job</button>

        </>
    )
}

export default page