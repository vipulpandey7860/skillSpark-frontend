"use client"

import { useSelector } from "react-redux"

const page = () => {

    const {employe} = useSelector(state => state.employeReducer)
    return (
        <>
        
            <h1>applied jobs and intenships { employe && employe.firstname}</h1>
        
      <ul className="bg-yellow-500">
        {employe &&
          employe.jobs.map((job) => (
            <div className="m-5 bg-green-700" key={job._id}>
              {JSON.stringify(job)} <br />
              <br />
              
            </div>
          ))}
      </ul>

      <hr />


      <ul className="bg-yellow-500">
        {employe &&
          employe.internships.map((internship) => (
            <div className="m-5 bg-green-700" key={internship._id}>
              {JSON.stringify(internship)} <br />
              <br />
              
            </div>
          ))}
      </ul>
        
        </>
  )
}

export default page