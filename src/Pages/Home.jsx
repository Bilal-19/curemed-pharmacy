import Footer from "../Components/Footer";
import FooterCTA from "../Components/FooterCTA";
import Header from "../Components/Header";
import HeaderCTA from "../Components/HeaderCTA";
import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <HeaderCTA />
            <Header />

            <div className="bg-[url(/curemed-pharmacy/home-bg-img.png)] h-120 md:h-150 w-full bg-no-repeat bg-cover absolute">
                <div class="grid md:grid-cols-2">
                    <div className="m-12 md:mt-12">
                        <h1 className="text-3xl md:text-6xl text-white font-medium">Innvoting Health, Improving Lives</h1>
                        <p className="text-white text-md mt-5 mb-0 pb-0 text-base md:text-[18px]">
                            We are a leading pharmaceutical company dedicated to developing high-quality healthcare solutions that enhance the well-being of individuals and communities worldwide. Explore our range of products and services designed with innovation and care.
                        </p>
                        <NavLink to="/services" className="block md:inline-block py-2 px-3 md:py-3 md:px-5 text-sm md:text-base bg-[#0086FF] rounded-4xl text-white mt-5 md:mt-20 hover:bg-white hover:text-[#0086FF] font-[600] mr-4">
                            Explore Our Services
                        </NavLink>
                        <NavLink to="/products" className="block md:inline-block py-2 px-3 md:py-3 md:px-5 text-sm md:text-base bg-white rounded-4xl text-[#0086FF] mt-5 md:mt-20 hover:bg-[#0086FF] hover:text-white font-[600]">
                            Explore Our Products
                        </NavLink>
                    </div>
                </div>

                <div class="relative container bg-white mx-auto h-100 top-0 md:-top-10 pb-100 ff-inter">
                    <div class="grid grid-cols-1 md:grid-cols-2 m-10 pt-10">
                        <div>
                            <h2 className="font-medium text-3xl ff-poppins">Our Services</h2>
                        </div>
                        <div>
                            <p className="text-md">
                                Our services are tailored to support healthcare professionals and clients alike. Whether it's product consultation, healthcare training, or patient support programs, we offer a range of services to enhance the healthcare experience.
                            </p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 m-8">
                        <div>
                            <img src="/curemed-pharmacy/service_1.png" alt="" />
                            <h5 className="font-medium text-lg mt-5">Product Consultation</h5>
                            <p>
                                Expert advice on choosing the right pharmaceuticals for your healthcare needs.
                            </p>
                        </div>

                        <div>
                            <img src="/curemed-pharmacy/service_2.png" alt="" />
                            <h5 className="font-medium text-lg mt-5">Healthcare Training Programs</h5>
                            <p>
                                Expert advice on choosing the right pharmaceuticals for your healthcare needs.
                            </p>
                        </div>

                        <div>
                            <img src="/curemed-pharmacy/service_3.png" alt="" />
                            <h5 className="font-medium text-lg mt-5">Patient Support Program</h5>
                            <p>
                                Expert advice on choosing the right pharmaceuticals for your healthcare needs.
                            </p>
                        </div>

                        <div>
                            <img src="/curemed-pharmacy/service_4.png" alt="" />
                            <h5 className="font-medium text-lg mt-5">Patient Support Program</h5>
                            <p>
                                Expert advice on choosing the right pharmaceuticals for your healthcare needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Products */}
            <div class="container mx-auto mt-50 md:mt-120 relative top-500 md:top-150 mb-500 md:mb-0 ff-inter">
                <div className="mx-10 flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                        <h2 className="font-medium text-3xl ff-poppins">Our Products</h2>
                        <p className="mt-5">Find out the description, usage and benefits</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                        <NavLink to="/products" className="py-2 px-3 md:py-3 md:px-5 text-sm md:text-base bg-[#0086FF] rounded-4xl text-white font-[600]">
                            Explore Products
                        </NavLink>
                    </div>
                </div>

                <div className="container mx-auto mb-20">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 m-8">
                        <div className="border-1 border-gray-300 p-2">
                            <img className="h-50 w-fit object-cover" src="/curemed-pharmacy/paracetamol.jpg" alt="" />
                            <h5 className="font-medium text-lg mt-5">Paracetamol</h5>
                            <p>
                                Relieves pain and reduces fever. Essential for everyday health.
                            </p>
                        </div>

                        <div className="border-1 border-gray-300 p-2">
                            <img className="h-50 w-fit object-cover" src="/curemed-pharmacy/Ibuprofen.jpg" alt="" />
                            <h5 className="font-medium text-lg mt-5">Ibuprofen</h5>
                            <p>
                                NSAID used for pain relief and to ease inflammation effectively.
                            </p>
                        </div>

                        <div className="border-1 border-gray-300 p-2">
                            <img className="h-50 w-fit object-cover" src="/curemed-pharmacy/Amoxicillin.jpeg" alt="" />
                            <h5 className="font-medium text-lg mt-5">Amoxicillin</h5>
                            <p>
                                Broad-spectrum antibiotic for treating bacterial infections.
                            </p>
                        </div>

                        <div className="border-1 border-gray-300 p-2">
                            <img className="h-50 w-fit object-cover" src="/curemed-pharmacy/risek.jpg" alt="" />
                            <h5 className="font-medium text-lg mt-5">Risek</h5>
                            <p>
                                Assists in managing stomach acidity and related discomfort.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto md:mt-180">
                <div class="flex flex-col md:flex-row justify-around items-center">
                    <div className="w-80 md:w-2/5">
                        <img src="/curemed-pharmacy/about.png" alt="about" className="w-150 h-150 object-contain" />
                    </div>
                    <div className="w-80 md:w-2/5">
                        <a href="" className="text-[#0D579B] font-semibold ff-plus-js">About Us</a>
                        <h3 className="text-3xl mt-5 font-semibold ff-poppins">Pioneering healthcare solutions for a healthier tomorrow. Transforming patient care with trust and innovation.</h3>
                        <p className="mt-5 font-light mb-5 ff-inter">
                            At Cure Med, we are dedicated to transforming healthcare and enhancing patient outcomes worldwide. With a strong foundation in trust, quality, and innovation, we strive to address the evolving challenges faced by healthcare providers and patients. Our team of experts is committed to developing safe, effective, and accessible pharmaceutical solutions that improve lives. Join us on our journey to foster a healthier world.
                        </p>
                        <a href="" className="text-white bg-[#0086FF] rounded-3xl px-5 py-3 font-semibold ff-inter">Learn More</a>
                    </div>
                </div>
            </div>

            <div class="container-fluid mt-10 bg-[url(/curemed-pharmacy/dot-pattern.png)] h-fit md:h-200">

                <div className="container mx-auto text-center">
                    <h2 className="pt-10 md:pt-25 text-[#0E355D] font-semibold ff-plus-js">Our Vision</h2>
                    <h3 className="w-80 md:w-full mx-auto text-lg md:text-2xl mt-3 md:mt-5 font-semibold">We Are The Most Trusted Pharmacy In This Town</h3>
                    <p className="w-80 md:w-3/5 mx-auto mt-3 md:mt-5 font-normal mb-5 text-center">At Cure Med, our mission is to improve the health and well-being of individuals and communities through innovative pharmaceutical solutions. We are committed to quality, integrity, and excellence in everything we do.</p>
                </div>


                <div class="container mx-auto mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-15">
                        <div className="bg-[#FFFFFF] text-center rounded-xl pt-3 pb-10 px-5 m-10 w-70">
                            <img src="/curemed-pharmacy/quality_assurance.png" alt="" className="h-45 pt-10 pb-5 mx-auto" />
                            <h5 className="text-lg font-bold mb-3">Quality Assurance</h5>
                            <p>Committed to providing top-quality pharmaceuticals.</p>
                        </div>

                        <div className="bg-[#FFFFFF] text-center rounded-xl pt-3 pb-10 px-5 m-10 w-70">
                            <img src="/curemed-pharmacy/expertise.png" alt="" className="h-45 pt-10 pb-5 mx-auto" />
                            <h5 className="text-lg font-bold mb-3">Expertise</h5>
                            <p>Decades of experience in the healthcare industry.</p>
                        </div>

                        <div className="bg-[#FFFFFF] text-center rounded-xl pt-3 pb-10 px-5 m-10 w-70">
                            <img src="/curemed-pharmacy/customer_support.png" alt="" className="h-45 pt-10 pb-5 mx-auto" />
                            <h5 className="text-lg font-bold mb-3">Customer Support</h5>
                            <p>Dedicated support for healthcare professionals and clients.</p>
                        </div>
                    </div>
                </div>

            </div>


            <div class="bg-white md:mt-50">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="mx-10 md:m-20">
                        <h2 className="pt-10 md:pt-25 text-[#0D579B] font-semibold ff-plus-js">Our Vision</h2>
                        <p>
                            With over 15 years of expertise, our team combines dedication and deep knowledge to drive advancements in healthcare. Our experience enables us to deliver innovative, reliable solutions tailored to meet the diverse needs of patients and healthcare providers alike.
                        </p>
                    </div>
                    <div className="m-10">
                        <img src="/curemed-pharmacy/year-of-experience.png" alt="" />
                    </div>
                </div>
            </div>

            <div class="w-full flex flex-col-reverse md:flex-row bg-[#F5F6FA] h-fit">
                <div class="m-10 md:m-0 md:p-0 md:w-1/2">
                    <img src="/curemed-pharmacy/family_medical.png" alt="" /></div>
                <div class="md:w-1/2 px-10 my-10 md:px-30 md:my-18">
                    <h4 className="text-xl md:text-3xl mt-5 font-semibold ff-poppins mb-5">
                        We care beyond what your doctors have prescribed
                    </h4>
                    <p>
                        At Cure Med Pharmas, we believe that true healthcare goes beyond prescriptions. Our commitment is to your overall well-being, ensuring that you receive not just the right medication but also the support, guidance, and care you deserve.
                    </p>
                    <div class="grid grid-cols-3 mt-10">
                        <div>
                            <h5 className="ff-poppins text-lg font-medium">20+</h5>
                            <p>Experience</p>
                        </div>

                        <div>
                            <h5 className="ff-poppins text-lg font-medium">50+</h5>
                            <p>Excellence</p>
                        </div>

                        <div>
                            <h5 className="ff-poppins text-lg font-medium">80</h5>
                            <p>Dedication</p>
                        </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 divide-x-1 border-1 border-gray-300 bg-gray-300">
                        <div className="border-1 border-[#0086FF]"></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>

           <FooterCTA/>

            {/* Footer */}
            <Footer />

        </>
    )
}