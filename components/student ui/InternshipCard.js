import React from 'react';
import { MdLocationOn, MdAccessTime, MdAttachMoney } from 'react-icons/md';

const InternshipCard = ({ internship, student, ApplyInternshipHandler }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden p-4 bg-white">
      <div className='flex items-center justify-between'>

      <div className="p-4  border-b border-gray-200">
        <h2 className="text-xl font-semibold">{internship.profile}</h2>
        <p className="text-sm text-gray-600">{internship.employe.organizationname }</p>
        </div>
        <img className='h-12 w-12 ' src={internship.employe.organizationlogo.fileID || internship.employe.organizationlogo.url } alt="organization logo" />
      </div>


      <div className="p-4">
        <div className="grid grid-cols-1 gap-4">
          <p className="flex gap-2 items-center">
            <MdLocationOn />  {internship.internshiptype}
          </p>
          <p className="flex gap-2 items-center">
            <MdAccessTime />  {internship.duration}
          </p>
          <p className="flex gap-2 items-center">
            <MdAttachMoney />  {internship.stipend.amount}
          </p>
        </div>
      </div>

      <div className="p-4 border-t border-gray-200">
        {!internship.students.includes(student && student._id) ? (
          <button
            className="bg-blue-900 text-white py-2 px-4 rounded-md w-full"
            onClick={() => ApplyInternshipHandler(internship._id)}
          >
            Apply Internship
          </button>
        ) : (
          <h3 className="bg-red-900 text-white p-2 rounded-md text-center">Already Applied</h3>
        )}
      </div>
    </div>
  );
};

export default InternshipCard;
