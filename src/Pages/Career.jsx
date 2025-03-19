import Header from "../Components/Header";
import Footer from "../Components/Footer"
import HeaderCTA from "../Components/HeaderCTA"
import { medicalDeptVacancies } from "../assets/JS/vacancy";
import { useState } from "react";

export default function Career() {
    const [vacancyRecord, setVacancyRecord] = useState(null)
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
                            <a className="ff-plus-js font-semibold text-sm md:text-base text-[#0086FF] hover:cursor-pointer" onClick={() => setVacancyRecord(item)}>Details</a>
                        </div>
                        <hr className="w-80 md:w-2/3 mx-3 md:m-10 border border-gray-300" />
                    </>
                ))}

                {vacancyRecord && (
                    <>
                        <div className="fixed inset-0 z-50 bg-gray-300 bg-opacity-50">
                            <div className="w-80 md:w-4/5 mx-auto bg-white rounded-xl relative max-h-[80vh] mt-10 border border-gray-200 overflow-y-auto">
                                <div className="flex justify-between items-center p-10">
                                    <h4 className="ff-poppins font-semibold text-[#1B1E21] text-lg md:text-2xl">{vacancyRecord.vacancyName}</h4>
                                    <button className="rounded border-gray-500 hover:cursor-pointer" onClick={() => setVacancyRecord(null)}>
                                        <i className="fa-solid fa-circle-xmark fs-xl"></i>
                                    </button>
                                </div>

                                <div className="flex flex-col md:flex-row justify-around items-start p-5 md:p-10">
                                    <div className="w-70 md:w-1/3 border border-gray-300 rounded-xl ff-inter p-3 md:p-5">
                                        <p className="text-[#1B1E21] text-[12px]">Location</p>
                                        <p className="text-[#000000] font-medium text-[14px]">{vacancyRecord.location}</p>
                                        <hr className="border border-gray-300 md:w-full my-5" />

                                        <p className="text-[#1B1E21] text-[12px]">Type</p>
                                        <p className="text-[#000000] font-medium text-[14px]">{vacancyRecord.jobType}</p>
                                        <hr className="border border-gray-300 md:w-full my-5" />

                                        <p className="text-[#1B1E21] text-[12px]">Department</p>
                                        <p className="text-[#000000] font-medium text-[14px]">Pharmacy</p>
                                        <hr className="border border-gray-300 md:w-full my-5" />

                                        <p className="text-[#1B1E21] text-[12px]">Submission Deadline</p>
                                        <p className="text-[#000000] font-medium text-[14px]">{vacancyRecord.submissionDeadline}</p>
                                    </div>

                                    <div className="w-70 md:w-2/3 md:ml-10 ff-inter mt-5 md:mt-0">
                                        <div className="bg-[#eeeeee] p-1 rounded-xl">
                                            <button className="bg-[#1B1E21] w-1/2 px-1 py-2 rounded-xl text-[#FFFFFF] font-semibold hover:cursor-pointer">Overview</button>
                                            <button className="w-1/2 px-1 py-2 rounded-xl text-[#1B1E21] font-medium hover:cursor-pointer">Application</button>
                                        </div>

                                        <div className="my-10">
                                            <p><span className="font-bold">Job Title: </span>{vacancyRecord.vacancyName}</p>
                                            <p><span className="font-bold">Location: </span>{vacancyRecord.location}</p>
                                            <p><span className="font-bold">Job Type: </span>{vacancyRecord.jobType}</p>
                                        </div>

                                        <div className="my-10">
                                            <h4 className="font-bold">Overview:</h4>
                                            <p>{vacancyRecord.jobDesc}</p>
                                        </div>

                                        <div className="my-10">
                                            <h4 className="font-bold">Key Responsibilities:</h4>
                                            <ul className="ml-5">{vacancyRecord.keyResponsibilities.map((value, key) => <li key={key}><i className="fa-solid fa-check"></i> {value}</li>)}</ul>
                                        </div>

                                        <div className="my-10">
                                            <h4 className="font-bold">Qualifications:</h4>
                                            <ul className="ml-5">{vacancyRecord.qualification.map((value, key) => <li key={key}><i className="fa-solid fa-check"></i> {value}</li>)}</ul>
                                        </div>

                                        <div className="my-10">
                                            <h4 className="font-bold">Benefits:</h4>
                                            <ul className="ml-5">{vacancyRecord.benefits.map((value, key) => <li key={key}><i className="fa-solid fa-check"></i> {value}</li>)}</ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <Footer />
        </>
    )
}