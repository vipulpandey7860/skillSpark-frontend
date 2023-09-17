import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaEdit,
  FaTrash,
  FaPlusCircle,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import {
  asyncDeleteJob,
  asyncEditJob,
  asyncAddJob,
} from "@/store/Actions/studentAction";

const ResumeJobs = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.studentReducer);

  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    description: "",
    periodofwork: "",
  });
  const [editingJobId, setEditingJobId] = useState(null);

  const jobDeleteHandler = (id) => {
    dispatch(asyncDeleteJob(id));
  };

  const toggleEditMode = (id) => {
    setIsEditMode(!isEditMode);
    setEditingJobId(id);

    if (!isEditMode && student && student.resume.jobs.length > 0) {
      const currentJob = student.resume.jobs.find((job) => job.id === id);
      setFormData(currentJob);
    } else {
      setFormData({
        position: "",
        company: "",
        description: "",
        periodofwork: "",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (isEditMode && editingJobId !== null) {
      const editedJob = { ...formData };
      dispatch(asyncEditJob(editingJobId, editedJob));
    } else {
      // Dispatch new job data
      const newJob = { ...formData };
      dispatch(asyncAddJob(newJob));
    }
    setIsEditMode(false); // Exit edit mode after saving
    setEditingJobId(null); // Reset editing job ID
  };

  const addJobHandler = () => {
    setIsEditMode(true);
    setEditingJobId(null);
    setFormData({
      position: "",
      company: "",
      description: "",
      periodofwork: "",
    });
  };

  return (
    <div className="container  ">
      <section className="section_left border mx-5 flex flex-col p-4">
        <h5 className="text-lg w-1/4  font-semibold mt-4">
          Experience{" "}
          {!isEditMode ? (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded ml-2"
              onClick={addJobHandler}
            >
              <FaPlusCircle className="mr-1" />
            </button>
          ) : (
            <>
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded ml-2"
                onClick={handleSave}
              >
                <FaSave className="mr-1" />
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded ml-2"
                onClick={() => toggleEditMode(null)}
              >
                <FaTimes className="mr-1" />
              </button>
            </>
          )}
        </h5>

        {student &&
          student.resume.jobs.map((job, index) => (
            <div key={job.id} className="pl-48 flex flex-row-reverse items-start justify-between  p-4">
              <div className="flex items-center">
                {isEditMode && editingJobId === job.id ? (
                  <></>
                ) : (
                  <>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mr-2"
                      onClick={() => toggleEditMode(job.id)}
                    >
                      <FaEdit className="mr-1" />
                    </button>
                    <button
                      onClick={() => jobDeleteHandler(job.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                    >
                      <FaTrash className="mr-1" />
                    </button>
                  </>
                )}
              </div>
              <div className="pl-4 mt-2">
                <em className="opacity-50">Position</em>
                {isEditMode && editingJobId === job.id ? (
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="border rounded w-full py-1 px-2"
                  />
                ) : (
                  <h5 className="text-lg font-semibold">{job.position}</h5>
                )}
                <em className="opacity-50">Company</em>
                {isEditMode && editingJobId === job.id ? (
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="border rounded w-full py-1 px-2"
                  />
                ) : (
                  <p>{job.company}</p>
                )}
                <em className="opacity-50">Description</em>
                {isEditMode && editingJobId === job.id ? (
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="border rounded w-full py-1 px-2"
                  />
                ) : (
                  <p className="mt-2">{job.description}</p>
                )}
                <em className="opacity-50">Period of Work</em>
                {isEditMode && editingJobId === job.id ? (
                  <input
                    type="text"
                    name="periodofwork"
                    value={formData.periodofwork}
                    onChange={handleInputChange}
                    className="border rounded w-full py-1 px-2"
                  />
                ) : (
                  <em className="float-right">{job.periodofwork}</em>
                )}
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default ResumeJobs;
