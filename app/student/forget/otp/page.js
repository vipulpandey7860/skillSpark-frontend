"use client"
import { asyncOTPPasswordStudent } from "@/store/Actions/studentAction";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const page = () => {
const router = useRouter();
    const dispatch = useDispatch();
   const {errors} =  useSelector((state) => state.studentReducer)
    
   const sentotpHandler = async () => {
        const pwd = {
            email:"vipul2@gmail.com",
            otp: "8418",
            password:"Vipul@7860"
        };
        dispatch(asyncOTPPasswordStudent(pwd));
        if (errors.length ===1) {
            router.push("/student/signin")
        }
        else {
            toast.error(JSON.stringify(errors));
            return;
        }
    }

  return (
      <>
      <button onClick={sentotpHandler} className="m-5 bg-red-900">change password</button>
      </>
  )
}

export default page