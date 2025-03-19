import Header from "../Components/Header";
import Footer from "../Components/Footer"
import HeaderCTA from "../Components/HeaderCTA"
import { medicalDeptVacancies } from "../assets/JS/vacancy";

export default function Career() {
    return (
        <>
            <HeaderCTA />
            <Header />

            <div class="w-full">
                <div className="w-80 md:w-1/3 mx-3 md:m-10">
                    <p className="text-[#0E355D] font-semibold ff-plus-js">Career</p>
                    <h1 className="text-2xl md:text-4xl ff-poppins font-semibold mt-2 md:mt-5">Open roles</h1>
                    <p className="mt-5 md:mt-10 mb-10 ff-inter text-[#494B4D]">
                        Explore exciting career opportunities with us and join a team dedicated to innovation and growth. Check out our open roles and take the next step in your professional journey.
                    </p>
                </div>
            </div>

            <div class="w-full text-[#1B1E21] mb-40">
                <div class="w-2/3 mx-3 md:m-10">
                    <h2 className="text-xl md:text-2xl ff-plus-js font-semibold mb-8 md:mb-0">Medical & Clinical Department</h2>
                </div>

                <div class="w-80 md:w-2/3 flex justify-between mx-3 md:m-10">
                    <p className="ff-plus-js font-semibold">Position</p>
                    <p className="ff-plus-js font-semibold mr-0 md:mr-5">Role</p>
                </div>

                {medicalDeptVacancies.map((item, key) => (
                    <>
                        <div class="w-80 md:w-2/3 flex justify-between mx-3 my-4 md:m-10">
                            <p className="ff-plus-js font-semibold text-md md:text-xl">{item.vacancyName}</p>
                            <a className="ff-plus-js font-semibold text-sm md:text-base text-[#0086FF] hover:cursor-pointer">Details</a>
                        </div>
                        <hr className="w-80 md:w-2/3 mx-3 md:m-10 border border-gray-300"/> 
                    </>
                ))}
            </div>

            <Footer />
        </>
    )
}