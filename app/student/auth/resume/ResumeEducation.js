import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaEdit,
  FaTrash,
  FaPlusCircle,
  FaGraduationCap,
  FaSchool,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import {
  asyncDeleteEducation,
  asyncAddEducation,
  asyncEditEducation,
} from "@/store/Actions/studentAction";

const ResumeEducation = () => {
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.studentReducer);

  const [editMode, setEditMode] = useState(false); // State for edit mode
  const [editedData, setEditedData] = useState({}); // State for edited data

  const eduDeleteHandler = (id) => {
    dispatch(asyncDeleteEducation(id));
  };

  const addEduHandler = () => {
    const newEducation = {
      schoolname: "",
      year: "",
      percentage: "",
    };
  
    const updatedEducations = [...student.resume.education, newEducation];
  
    dispatch(asyncAddEducation(updatedEducations));
  };

  const editEducationHandler = (id) => {
    const educationToEdit = student.resume.education.find((edu) => edu.id === id);
    if (educationToEdit) {
      setEditedData(educationToEdit);
      setEditMode(true);
    }
  };

  const saveEducationHandler = () => {
    if (editedData.id) {
      dispatch(asyncEditEducation(editedData.id, editedData));
    }
    setEditMode(false);
    setEditedData({});
  };

  return (
    <div className="container ">
      <section className="section_left border mx-5 flex flex-col p-4">
        <h5 className="text-lg w-1/4  font-semibold mt-4">
          Education{" "}
          {!editMode ? (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded ml-2"
              onClick={addEduHandler}
            >
              <FaPlusCircle className="mr-1" /> 
            </button>
          ) : (
            <>
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded ml-2"
                onClick={saveEducationHandler}
              >
                <FaSave className="mr-1" /> 
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 rounded ml-2"
                onClick={() => {
                  setEditMode(false);
                  setEditedData({});
                }}
              >
                <FaTimes className="mr-1" /> 
              </button>
            </>
          )}
        </h5>

        {student &&
          student.resume.education.map((edu, index) => (
            <div key={edu.id} className=" pl-48 flex flex-row-reverse items-start justify-between  p-4">
              <div className="flex items-center">
                {editMode && editedData.id === edu.id ? (
                  <></>
                ) : (
                  <>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded mr-2"
                      onClick={() => editEducationHandler(edu.id)}
                    >
                      <FaEdit className="mr-1" /> 
                    </button>
                    <button
                      onClick={() => eduDeleteHandler(edu.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                    >
                      <FaTrash className="mr-1" /> 
                    </button>
                  </>
                )}
              </div>
              <div className="pl-4 mt-2">
                <em className="opacity-50">
                  <FaSchool className="mr-1" /> 
                </em>
                {editMode && editedData.id === edu.id ? (
                  <input
                    type="text"
                    name="schoolname"
                    value={editedData.schoolname}
                    onChange={(e) =>
                      setEditedData({ ...editedData, schoolname: e.target.value })
                    }
                    className="border rounded w-full py-1 px-2"
                  />
                ) : (
                  <p>{edu.schoolname}</p>
                )}
                <em className="opacity-50">
                  <FaGraduationCap className="mr-1" /> 
                </em>
                {editMode && editedData.id === edu.id ? (
                  <input
                    type="text"
                    name="year"
                    value={editedData.year}
                    onChange={(e) =>
                      setEditedData({ ...editedData, year: e.target.value })
                    }
                    className="border rounded w-full py-1 px-2"
                  />
                ) : (
                  <p>{edu.year}</p>
                )}
                <em className="opacity-50">
                  <FaGraduationCap className="mr-1" /> 
                </em>
                {editMode && editedData.id === edu.id ? (
                  <input
                    type="text"
                    name="percentage"
                    value={editedData.percentage}
                    onChange={(e) =>
                      setEditedData({ ...editedData, percentage: e.target.value })
                    }
                    className="border rounded w-full py-1 px-2"
                  />
                ) : (
                  <p>{edu.percentage}</p>
                )}
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default ResumeEducation;
