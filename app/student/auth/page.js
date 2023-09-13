"use client"
import { asyncApplyInternship, asyncApplyJob } from "@/store/Actions/studentAction"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const metadata = {
  title: 'Student | Home',
}
const page = () => {
  const dispatch = useDispatch();
  const { jobs, internships, student } = useSelector((state) => state.studentReducer);

  const ApplyJobHandler = (id) => {
    dispatch(asyncApplyJob(id));
  };

  const ApplyInternshipHandler = (id) => {
    dispatch(asyncApplyInternship(id));
  };

  useEffect(() => {
  }, [student])

  return (
    <>
      <strong>available jobs for {student && student.firstname}</strong>
      <ul className="bg-yellow-500">
        {jobs &&
          jobs.map((job) => (
            <div className="m-5 bg-green-700" key={job._id}>
              {JSON.stringify(job)} <br />
              <br />
              {!job.students.includes(student && student._id) ? (
                <button className="bg-blue-900" onClick={() => ApplyJobHandler(job._id)}>
                  Apply Job
                </button>
              ) : (
                <h3 className="bg-red-900">Already Applied</h3>
              )}
            </div>
          ))}
      </ul>

      <hr />


      <strong>available internships for {student && student.firstname}</strong>
      <ul className="bg-yellow-500">
        {internships &&
          internships.map((internship) => (
            <div className="m-5 bg-green-700" key={internship._id}>
              {JSON.stringify(internship)} <br />
              <br />
              {!internship.students.includes(student && student._id) ? (
                <button className="bg-blue-900" onClick={() => ApplyInternshipHandler(internship._id)}>
                  Apply Internship
                </button>
              ) : (
                <h3 className="bg-red-900">Already Applied</h3>
              )}
            </div>
          ))}
      </ul>
    </>
  )
}

export default page