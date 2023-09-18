import { asyncSignupemploye } from "@/store/Actions/employeAction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Signup = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.employeReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [organizationname, setorganizationname] = useState("");

  useEffect(() => {
    if (isAuthenticated) router.push("/employe/auth");
  }, [isAuthenticated]);

  const signupHandler = (e) => {
    e.preventDefault();
    const newEmploye = {
      email: email,
      password: password,
      firstname: firstName,
      lastname: lastName,
      contact: contact,
      city: city,
      organizationname: organizationname,
    };

    dispatch(asyncSignupemploye(newEmploye));
    if(isAuthenticated){
      router.push('/employe/auth')
    }
  };

  return (
    <div className="flex p-10 gap-5">
      <div 
        className=" bg-cover  p-5"
        style={{
          backgroundImage:
            'url("https://internshala.com/static/images/registration/employer/registration_new/images/banner/r1920_banner.png")', backgroundPosition:'30% 10%'
        }}
      >
        <h1 className="text-4xl text-gray-800 font-bold mb-1 flex items-center">
        
        Hire interns & freshers <span><img src="https://internshala.com/static/images/registration/employer/registration_new/images/banner/faster.svg" alt="" /></span>
        </h1>
        <p className="text-gray-800 font-semibold text-lg">
        Post jobs for free now
        </p>
       
      </div>
      <div className="w-30 bg-white shadow-md ml-5 p-5 mt-2">
        <form>
          <p>Email</p>
          <input
            type="text"
            placeholder="john@example.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-10 border border-gray-300 rounded px-2 focus:outline-none focus:border-blue-500"
          />
          <p className="text-gray-700 mt-3">Password</p>
          <input
            type="password"
            placeholder="Must be at least 6 characters"
            value={password}
            required

            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-10 border border-gray-300 rounded px-2 focus:outline-none focus:border-blue-500"
          />
          <div className="flex mt-3">
            <div className="w-1/2 pr-2">
              <p>First Name</p>
              <input
                type="text"
                placeholder="John"
                value={firstName}
            required

                onChange={(e) => setFirstName(e.target.value)}
                className="w-full h-10 border border-gray-300 rounded px-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-1/2 pl-2">
              <p>Last Name</p>
              <input
                type="text"
                placeholder="Doe"
                value={lastName}
            required

                onChange={(e) => setLastName(e.target.value)}
                className="w-full h-10 border border-gray-300 rounded px-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
         
          <p className="text-gray-700 mt-3">Contact</p>
          <input
            type="text"
            placeholder="1234567890"
            required

            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full h-10 border border-gray-300 rounded px-2 focus:outline-none focus:border-blue-500"
          />
          <p className="text-gray-700 mt-3">City</p>
          <input
            type="text"
            placeholder="City"
            required

            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full h-10 border border-gray-300 rounded px-2 focus:outline-none focus:border-blue-500"
          />
            <p className="text-gray-700 mt-3">Organization Name </p>
          <input
            type="text"
            placeholder="organization name"
            required
            value={organizationname}
            onChange={(e) => setorganizationname(e.target.value)}
            className="w-full h-10 border border-gray-300 rounded px-2 focus:outline-none focus:border-blue-500"
          />
          <p className="text-gray-700 mt-3">
            By signing up, you agree to our{" "}
            <Link className="text-blue-400" href="#">
              Terms and Conditions
            </Link>
          </p>
         
          <button
            onClick={signupHandler}
            className="bg-blue-500 text-white font-normal px-4 py-2 rounded-md mt-3 hover:bg-blue-700"
          >
            Sign Up
          </button>
          <p className="mt-3">
            Already Registered?{" "}
            <Link className="text-blue-500" href="/employe/signin">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
