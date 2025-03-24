import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeaderCTA from "../Components/HeaderCTA";

export default function ContactUs() {
    return (
        <>
            <HeaderCTA />

            <Header />

            <div className="container-fluid flex flex-col md:flex-row justify-between items-start">
                <div className="w-80 mx-3 mb-10 mt-15 md:w-1/3 md:mx-10 md:mt-10 md:mb-28">
                    <p className="text-[#0E355D] font-semibold ff-plus-js">Contact Us</p>
                    <h1 className="text-2xl md:text-4xl ff-poppins font-semibold mt-5 md:animate-fadeIn">Get in touch</h1>
                    <p className="mt-10 mb-10 ff-inter text-[#494B4D] md:animate-fadeIn">We're here to answer your questions and provide the support you need. Feel free to reach out, and our team will get back to you as soon as possible.</p>
                    <div className="flex items-center ff-inter mb-10">
                        <div>
                            <img src="/phone.png" alt="phone icon" />
                        </div>
                        <div className="mx-4">
                            <p className="font-semibold">Phone</p>
                            <p className="text-[#494B4D]">92 3082491543</p>
                        </div>
                    </div>

                    <div className="flex items-center ff-inter mb-10">
                        <div>
                            <img src="/email.png" alt="email icon" />
                        </div>
                        <div className="mx-4">
                            <p className="font-semibold">Email</p>
                            <p className="text-[#494B4D]">info@curemed.com</p>
                        </div>
                    </div>

                    <div className="flex items-center ff-inter mb-10">
                        <div>
                            <img src="/location.png" alt="location icon" />
                        </div>
                        <div className="mx-4">
                            <p className="font-semibold">Location</p>
                            <p className="text-[#494B4D]">Canada, USA</p>
                        </div>
                    </div>
                </div>
                
                <div className="md:w-1/2 mx-3 mb-10 md:mx-10 md:mt-10 md:mb-28">
                    <div className="bg-[#F5F6FA] p-10 rounded-2xl">
                        <h3 className="text-2xl ff-poppins font-semibold">Send Message</h3>
                        <form action="" autoComplete="off">
                            <input name="name" required type="text" placeholder="Name" className="ff-inter text-[14px] font-medium w-full focus:outline-gray-400 border-2 border-gray-300 py-2 px-2 bg-[#FFFFFF] mt-5 rounded-lg"/>
                            <input name="email" required type="email" placeholder="Email" className="ff-inter text-[14px] font-medium w-full focus:outline-gray-400 border-2 border-gray-300 py-2 px-2 bg-[#FFFFFF] mt-5 rounded-lg"/>
                            <input name="phone" required type="text" placeholder="Phone Number" className="ff-inter text-[14px] font-medium w-full focus:outline-gray-400 border-2 border-gray-300 py-2 px-2 bg-[#FFFFFF] mt-5 rounded-lg" />
                            <textarea name="details" required placeholder="Details" rows="5" className="ff-inter text-[14px] font-medium w-full focus:outline-gray-400 border-2 border-gray-300 py-2 px-2 bg-[#FFFFFF] mt-5 rounded-lg resize-none"></textarea>
                            <input type="submit" value="Send Message" className="bg-[#0086FF] text-white rounded-4xl px-5 py-2 mt-5 hover:bg-[#0e355d] hover:cursor-pointer ff-inter font-semibold"/>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}