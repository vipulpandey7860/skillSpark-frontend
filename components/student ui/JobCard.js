import React from 'react';
import { MdLocationOn, MdAttachMoney } from 'react-icons/md'; 
              import {CiCircleInfo}  from 'react-icons/ci';                 

const JobCard = ({ job, student, ApplyJobHandler }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white p-4">
      <div className='flex items-center justify-between'>
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">{job.title}</h2>
          <p className="text-sm text-gray-600">{job.employe.organizationname}</p>
        </div>
        <img className='h-12 w-12' src={job.employe.organizationlogo.fileID || job.employe.organizationlogo.url} alt="company logo" />
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 gap-4">
        <p className="flex gap-2 items-center">
            <CiCircleInfo /> {job.skills}
          </p>
          <p className="flex gap-2 items-center">
            <MdLocationOn /> {job.jobtype}
          </p>
          
          <p className="flex gap-2 items-center">
            <MdAttachMoney /> {job.salary}
          </p>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        {!job.students.includes(student && student._id) ? (
          <button
            className="bg-blue-900 text-white py-2 px-4 rounded-md w-full"
            onClick={() => ApplyJobHandler(job._id)}
          >
            Apply Job
          </button>
        ) : (
          <h3 className="bg-red-900 text-white p-2 rounded-md text-center">Already Applied</h3>
        )}
      </div>
    </div>
  );
};

export default JobCard;
