"use client"

import { asyncAddEducation } from '@/store/Actions/studentAction'
import React from 'react'
import { useDispatch } from 'react-redux'
const page = () => {
    const dispatch = useDispatch()
    const addEduHandler = () => {

        const edu = {
            school: "cas",
            school: "cas",
            engineering: "sirt",
            status: "completed",
        }


        dispatch(asyncAddEducation(edu))
    }
    return (
        <>

            <button onClick={addEduHandler} className='bg-red-900'>
                add education
            </button>


        </>
    )
}

export default page