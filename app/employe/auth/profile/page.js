"use client"
import { asyncorganizationLogoemploye, asyncResetPasswordemploye, asyncUpdateemploye } from "@/store/Actions/employeAction";
import { useDispatch, useSelector } from "react-redux";
const page = () => {
    const dispatch = useDispatch();
    const { employe } = useSelector(state => state.employeReducer)
    const employeUpdateHandler = () => {
        const employe = {
            firstname: "vipull",
            lastname: "pandeyy",
        };
        dispatch(asyncUpdateemploye(employe))

    }

    const organizationLogoHandler = (e) => {
      e.preventDefault();
        const formdata = new FormData();
        formdata.set("organizationlogo", e.target.organizationlogo.files[0]);

        dispatch(asyncorganizationLogoemploye(formdata))

    }

    const resetPasswordHandler = (e) => {
        e.preventDefault();

        const pwd = {
            password: "Vipul@7860",

        }
        dispatch(asyncResetPasswordemploye(pwd))
    }

    return (
        <>
            <img height={200} src={employe && employe?.organizationlogo.url} alt="" />

            <form onSubmit={organizationLogoHandler} encType=" multipart/form-data ">



                <input type="file" name="organizationlogo" />
                <button type="submit">Upload</button>

            </form>


            <button onClick={employeUpdateHandler} className="bg-red-900 mx-5">Update employe</button>

            
            <button onClick={resetPasswordHandler} className="bg-red-900 mx-5">reset password</button>


        </>
    )
}

export default page