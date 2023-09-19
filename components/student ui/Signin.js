import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { asyncSigninStudent } from '@/store/Actions/studentAction';

import Link from 'next/link';

const Signin = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { isAuthenticated } = useSelector((state) => state.studentReducer);

    const [studentLoginForm, setStudentLoginForm] = useState({
        email: '',
        password: '',
    });

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/atudent/auth');
        }
    }, [isAuthenticated]);

    const signinStudentHandler = (e) => {
        e.preventDefault();
        dispatch(asyncSigninStudent(studentLoginForm));
        if (isAuthenticated) {

            router.push('/student/auth');
        }
    };


    const siginPageCloseHandler = () => {
        router.back();
    };


    const handleStudentInputChange = (e) => {
        const { name, value } = e.target;
        setStudentLoginForm({
            ...studentLoginForm,
            [name]: value,
        });
    };

    return (
        <div className="absolute top-0 left-0 h-screen w-screen bg-gray-800 bg-opacity-25 flex items-center justify-center">
            <div className="relative group overflow-hidden h-[70vh] w-[40vw] bg-white p-5 rounded-md shadow-lg">
                <h3 className="text-center text-xl text-blue-500 font-normal px-4 py-2 relative">
                    Login
                    <button
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        onClick={siginPageCloseHandler}
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </h3>



                <form onSubmit={signinStudentHandler}>
                    <>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Enter your email'
                                required
                                value={studentLoginForm.email}
                                onChange={handleStudentInputChange}
                                className="mt-1 px-3 py-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder='Enter your password'
                                required
                                value={studentLoginForm.password}
                                onChange={handleStudentInputChange}
                                className="mt-1 px-3 py-2 block w-full border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                    </>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-normal px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Login
                    </button>
                    <div className='flex flex-col gap-3 py-2'>
                        <Link href="/employe/forget" className="text-blue-400  ">
                            forgot password?
                        </Link>
                        <Link className="text-blue-400" href="/employe/signup">Create account?</Link>

                    </div>
                </form>


            </div>
        </div>
    );
};

export default Signin;
