"use client";
import InternshipCard from "@/components/student ui/InternshipCard";
import JobCard from "@/components/student ui/JobCard";
import { asyncApplyInternship, asyncApplyJob } from "@/store/Actions/studentAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const metadata = {
  title: 'Student | Home',
};

const page = () => {
  const dispatch = useDispatch();
  const { jobs, internships, student } = useSelector((state) => state.studentReducer);
  const [showInternships, setShowInternships] = useState(true);

  const ApplyJobHandler = (id) => {
    dispatch(asyncApplyJob(id));
  };

  const ApplyInternshipHandler = (id) => {
    dispatch(asyncApplyInternship(id));
  };

  useEffect(() => {
    // Add any necessary side effects here
  }, [student]);

  const toggleInternshipJob = () => {
    setShowInternships(!showInternships);
  };


  return (
    <>
      <div className="flex flex-col items-center gap-4 py-10">
        <h2 className="font-bold text-4xl">Hi, {student && student.firstname}👋</h2>
        <p className="text-2xl font-normal text-[#333333]">Let’s help you land your dream career</p>
      </div>

      <div className="flex justify-center my-4">
        <button
          className={`mx-2 py-2 px-4 rounded-md ${showInternships ? "bg-blue-900 text-white" : "bg-gray-300 text-gray-700"
            }`}
          onClick={toggleInternshipJob}
        >
          Internships
        </button>
        <button
          className={`mx-2 py-2 px-4 rounded-md ${!showInternships ? "bg-blue-900 text-white" : "bg-gray-300 text-gray-700"
            }`}
          onClick={toggleInternshipJob}
        >
          Jobs
        </button>
      </div>

        <p className="text-center text-xl text-semibold py-4">Available {showInternships ? "internships" : "jobs"} for {student && student.firstname}</p>
      <div className="bg-[#F0FBFF] flex flex-row items-center gap-4 w-screen p-5 overflow-hidden">
        {showInternships
          ? internships &&
          internships.map((internship) => (

            <InternshipCard key={internship._id} internship={internship} student={student}
            ApplyInternshipHandler={ApplyInternshipHandler}
              />
          ))
          : jobs &&
          jobs.map((job) => (
            <JobCard key={job._id} job={job} student={student}
              ApplyJobHandler={ApplyJobHandler} />
          ))}
      </div>
    </>
  );
};

export default page;
