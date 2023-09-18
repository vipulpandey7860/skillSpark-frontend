"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const metadata = {
  title: 'Internshala | Student',
}
const page = () => {

  const router = useRouter();
  const { isAuthenticated } = useSelector(state => state.studentReducer)

  useEffect(() => {

    if (isAuthenticated) {
      router.push('/student/auth')
    }
  }, [isAuthenticated])


  return (
    <>

      <div className="container">

      <div className="text-center py-10 font-bold relative">
      <h3 className="text-5xl text-[#333333] relative z-10">
        Make your dream career a reality
      </h3>
      <img
        src="https://internshala.com/static/images/home/sprites/underline_fire.png" 
        alt="Image description"
        className="mt-4 mx-auto w-[20vw]  " 
      />
    </div>


      

        <div className="flex flex-col items-center  ">
          <div className='pb-10'>
            <p className='font-bold text-3xl text-[#333333]'>Trending on Internshala 🔥
            </p>
          </div>
          <div className='flex items-center justify-center gap-4'>

            <img
              src={'/slider_image1.png'}
              alt={"image"}
              className="max-w-full max-h-64"
            />
            <img
              src={'/slider_image2.png'}
              alt={"image"}
              className="max-w-full max-h-64"
            /> <img
              src={'/slider_image3.png'}
              alt={"image"}
              className="max-w-full max-h-64"
            />
          </div>

        </div>

        <div id="main_container" class="w-11/12 mx-auto my-20">
          <h1 class="text-4xl mb-4">Internships</h1>
          <div class="description flex justify-between items-center">
            <p class="text-base font-semibold text-gray-700">
              Apply to 10,000+ internships for free
            </p>
            <p id="view_more">
              <p class="text-blue-500 font-semibold hover:underline"
              >View all Internships
                <i class="fas fa-arrow-right ml-1"></i
                ></p>
            </p>
          </div>

          <div class="grid grid-cols-6 gap-4 mt-4">
            <div class="  card gap-2 font-semibold flex flex-col items-center">
              <div class="img">
                <img
                  src="https://internshala.com/static/images/home/internships/categories/work_from_home.svg"
                  alt=""
                />
              </div>
              <div class="title text-center">Work From Home</div>
            </div>
            <div class="  card gap-2 font-semibold flex flex-col items-center  ">
              <div class="img">
                <img
                  src="https://internshala.com/static/images/home/internships/categories/delhi_ncr.svg"
                  alt=""
                />
              </div>
              <div class="title text-center">Delhi/NCR</div>
            </div>
            <div class="  card gap-2 font-semibold flex flex-col items-center">
              <div class="img">
                <img
                  src="https://internshala.com/static/images/home/internships/categories/bangalore.svg"
                  alt=""
                />
              </div>
              <div class="title text-center">Bangalore</div>
            </div>
            <div class="  card gap-2 font-semibold flex flex-col items-center">
              <div class="img">
                <img
                  src="https://internshala.com/static/images/home/internships/categories/mumbai.svg"
                  alt=""
                />
              </div>
              <div class="title text-center">Mumbai</div>
            </div>

            <div class="  card gap-2 font-semibold flex flex-col items-center">
              <div class="img">
                <img
                  src="https://internshala.com/static/images/home/internships/categories/kolkata.svg"
                  alt=""
                />
              </div>
              <div class="title text-center">Kolkata</div>
            </div>

            <div class="  card gap-2 font-semibold flex flex-col items-center">
              <div class="img">
                <img
                  src="https://internshala.com/static/images/home/internships/categories/international.svg"
                  alt=""
                />
              </div>
              <div class="title text-center">International</div>
            </div>
          </div>
        </div>

        <div id="main_container" class="w-11/12 mx-auto my-20">
          <h1 class="text-4xl mb-4">Popular Categories</h1>
          <div class="description flex justify-between items-center">
            <p class="text-base font-semibold text-gray-700">Apply to 10,000+ internships for free</p>
            <p id="view_more">
              <p  class="text-blue-500 font-semibold hover:underline"
              >View all Internships
                <i class="fas fa-arrow-right ml-1"></i
                ></p>
            </p>
          </div>

          <div class="grid grid-cols-6 gap-4 mt-4">
            <div class="  card gap-2 font-semibold flex flex-col items-center">
              <div class="img">
                <img
                  src="https://internshala.com/static/images/home/internships/categories/part_time.svg"
                  alt=""
                />
              </div>
              <div class="title text-center">Part-Time</div>
            </div>
            <div class="  card gap-2 font-semibold flex flex-col items-center">
              <div class="img">
                <img
                  src="https://internshala.com/static/images/home/internships/categories/engineering.svg"
                  alt=""
                />
              </div>
              <div class="title text-center">Engineering</div>
            </div>
            <div class="  card gap-2 font-semibold flex flex-col items-center">
              <div class="img">
                <img
                  src="https://internshala.com/static/images/home/internships/categories/ngo.svg"
                  alt=""
                />
              </div>
              <div class="title text-center">NGO</div>
            </div>
            <div class="  card gap-2 font-semibold flex flex-col items-center">
              <div class="img">
                <img
                  src="https://internshala.com/static/images/home/internships/categories/media.svg"
                  alt=""
                />
              </div>
              <div class="title text-center">Media</div>
            </div>

            <div class="  card gap-2 font-semibold flex flex-col items-center">
              <div class="img">
                <img
                  src="https://internshala.com/static/images/home/internships/categories/design.svg"
                  alt=""
                />
              </div>
              <div class="title text-center">Design</div>
            </div>

            <div class="  card gap-2 font-semibold flex flex-col items-center">
              <div class="img">
                <img
                  src="https://internshala.com/static/images/home/internships/categories/science.svg"
                  alt=""
                />
              </div>
              <div class="title text-center">Science</div>
            </div>
          </div>
        </div>


      </div>



    </>
  )
}

export default page