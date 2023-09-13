"use client"
import { asyncAvatarStudent, asyncResetPasswordStudent, asyncUpdateStudent } from "@/store/Actions/studentAction";
import { useDispatch, useSelector } from "react-redux";
const page = () => {
    const dispatch = useDispatch();
    const { student } = useSelector(state => state.studentReducer)
    const studentUpdateHandler = () => {
        const student = {
            firstname: "pandey",
            lastname: "vipul",
        };
        dispatch(asyncUpdateStudent(student))

    }

    const avatarHandler = (e) => {
      e.preventDefault();
        const formdata = new FormData();
        formdata.set("avatar", e.target.avatar.files[0]);

        dispatch(asyncAvatarStudent(formdata))

    }

    const resetPasswordHandler = (e) => {
        e.preventDefault();

        const pwd = {
            password: "Vipul@1234",

        }
        dispatch(asyncResetPasswordStudent(pwd))
    }

    return (
        <>
            <img height={200} src={student && student?.avatar.url} alt="" />

            <form onSubmit={avatarHandler} encType=" multipart/form-data ">



                <input type="file" name="avatar" />
                <button type="submit">Upload</button>

            </form>


            <button onClick={studentUpdateHandler} className="bg-red-900 mx-5">Update student</button>

            
            <button onClick={resetPasswordHandler} className="bg-red-900 mx-5">reset password</button>


        </>
    )
}

export default page