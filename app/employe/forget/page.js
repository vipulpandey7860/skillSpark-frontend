"use client"
import { asyncForgetPasswordemploye } from "@/store/Actions/employeAction"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
const page = () => {
    const dispatch = useDispatch();
    const router = useRouter();

   const {errors} =  useSelector((state) => state.employeReducer)

    const sendEmailHandler = async () => {
        const email = {
            email: "vipul10@gmail.com"
        };
        await dispatch(asyncForgetPasswordemploye(email));

        if (errors.length ===1) {
            router.push("/employe/forget/otp")
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