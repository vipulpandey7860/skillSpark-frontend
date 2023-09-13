"use client"
import { asyncOTPPasswordemploye } from "@/store/Actions/employeAction";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const page = () => {
const router = useRouter();
    const dispatch = useDispatch();
   const {errors} =  useSelector((state) => state.employeReducer)
    
   const sentotpHandler = async () => {
        const pwd = {
            email:"vipul10@gmail.com",
            otp: "1479",
            password:"Vipul@1234"
        };
        dispatch(asyncOTPPasswordemploye(pwd));
        if (errors.length ===1) {
            router.push("/employe/signin")
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