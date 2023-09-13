"use client"
import { asyncForgetPasswordStudent } from "@/store/Actions/studentAction"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
const page = () => {
    const dispatch = useDispatch();
    const router = useRouter();

   const {errors} =  useSelector((state) => state.studentReducer)

    const sendEmailHandler = async () => {
        const email = {
            email: "vipul2@gmail.com"
        };
        await dispatch(asyncForgetPasswordStudent(email));

        if (errors.length ===1) {
            router.push("/student/forget/otp")
        }
        else {
            toast.error(JSON.stringify(errors));
            return;

        }
    }

    return (
        <>
            <button onClick={sendEmailHandler} className="m-5 bg-green-700">send mail</button>
        </>
    )
}

export default page