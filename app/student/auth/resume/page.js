"use client"

import ResumeEducation from "./ResumeEducation";
import ResumeJobs from "./ResumeJob";
import ResumeProfile from "./ResumeProfile";
const page = () => {
    return (
        <>

            <h1 className="text-center text-4xl font-bold py-5"> Resume </h1>

            <div class="container px-24 py-5 shadow-md">

                <ResumeProfile />
                <ResumeEducation />
                <ResumeJobs />
            </div>

            {/* <div class="container mx-auto px-4 sm:px-6 lg:px-8"> */}

                {/* <section class="section_right ml-0 sm:ml-4 p-4">

                    <h1 class="text-2xl font-semibold mt-4">PROFESSIONAL SKILLS</h1>
                    <table class="w-full mt-4">
                        <tr>
                            <td class="w-1/5 font-semibold">HTML</td>
                            <td>
                                <div class="bg-gray-300 h-2 rounded-full">
                                    <div class="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="w-1/5 font-semibold">HTML</td>
                            <td>
                                <div class="bg-gray-300 h-2 rounded-full">
                                    <div class="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="w-1/5 font-semibold">HTML</td>
                            <td>
                                <div class="bg-gray-300 h-2 rounded-full">
                                    <div class="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="w-1/5 font-semibold">HTML</td>
                            <td>
                                <div class="bg-gray-300 h-2 rounded-full">
                                    <div class="bg-blue-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </section> */}
            {/* </div> */}
        </>
    )
}

export default page