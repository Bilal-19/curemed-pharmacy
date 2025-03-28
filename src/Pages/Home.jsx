import Footer from "../Components/Footer";
import FooterCTA from "../Components/FooterCTA";
import Header from "../Components/Header";
import HeaderCTA from "../Components/HeaderCTA";
import { Link, NavLink } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard";
import VisionCard from "../Components/VisionCard";

export default function Home() {
    return (
        <>
            <HeaderCTA />
            <Header />

            <div className="bg-[url(/home-bg-img.png)] h-120 md:h-180 w-full bg-no-repeat bg-cover absolute">
                <div className="grid md:grid-cols-2">
                    <div className="m-8 md:m-20 md:mt-12">
                        <h1 className="text-3xl md:text-5xl text-white font-semibold ff-poppins md:animate-fadeIn">Innvoting Health, Improving Lives</h1>
                        <p className="text-white text-md mt-5 mb-0 pb-0 text-base md:text-lg font-medium ff-inter md:animate-slideIn">
                            We are a leading pharmaceutical company dedicated to developing high-quality healthcare solutions that enhance the well-being of individuals and communities worldwide. Explore our range of products and services designed with innovation and care.
                        </p>
                        <div className="mt-5 ff-inter">
                            <NavLink to="/services" className="text-center w-fit md:w-2/5 md:inline-block py-2 px-3 md:py-3 md:px-5 text-sm md:text-base bg-[#0086FF] rounded-4xl text-white mt-5 mb-20 hover:bg-white hover:text-[#0086FF] font-[600] mr-4 transition duration-200 hover:scale-100">
                                Explore Our Services
                            </NavLink>
                            <NavLink to="/products" className="text-center block w-fit md:w-2/5 md:inline-block py-2 px-3 md:py-3 md:px-5 text-sm md:text-base bg-white rounded-4xl text-[#0086FF] mt-5 mb-20 hover:bg-[#0086FF] hover:text-white font-[600] transition duration-200 hover:scale-100">
                                Explore Our Products
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="relative container bg-white mx-auto h-100 top-0 md:-top-5 pb-100 ff-inter">
                    <div className="grid grid-cols-1 md:grid-cols-2 m-10 pt-10">
                        <div>
                            <h2 className="font-medium text-3xl ff-poppins transition animate-fadeIn duration-5000">Our Services</h2>
                        </div>
                        <div>
                            <p className="text-md text-[#494B4D]">
                                Our services are tailored to support healthcare professionals and clients alike. Whether it's product consultation, healthcare training, or patient support programs, we offer a range of services to enhance the healthcare experience.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-8">
                        <ServiceCard imgSrc="/service_1.png" heading="Personalized Consultation" description="Get tailored recommendations on prescription from our expert pharmacists."/>
                        <ServiceCard imgSrc="/service_2.png" heading="Professional Healthcare Training" description="Comprehensive training programs for healthcare professionals."/>
                        <ServiceCard imgSrc="/service_3.png" heading="Chronic Care & Patient Assistance" description="Ongoing support for patients managing chronic conditions."/>
                        <ServiceCard imgSrc="/service_4.png" heading="Home Delivery & Telepharmacy" description="Convenient home delivery services and virtual consultations."/>
                    </div>
                </div>
            </div>

            {/* Our Products */}
            <div className="container mx-auto mt-50 md:mt-120 relative top-500 md:top-150 mb-500 md:mb-0 ff-inter">
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
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 m-8">
                        <div className="border-1 border-gray-300 p-2 transition duration-200 hover:scale-105">
                            <img className="h-50 w-fit object-cover" src="/paracetamol.jpg" alt="paracetamol" />
                            <h5 className="font-medium text-lg mt-5">Paracetamol</h5>
                            <p className="text-[#494B4D]">
                                Relieves pain and reduces fever. Essential for everyday health.
                            </p>
                        </div>

                        <div className="border-1 border-gray-300 p-2 transition duration-200 hover:scale-105">
                            <img className="h-50 w-fit object-cover" src="/Ibuprofen.jpg" alt="Ibuprofen" />
                            <h5 className="font-medium text-lg mt-5">Ibuprofen</h5>
                            <p className="text-[#494B4D]">
                                NSAID used for pain relief and to ease inflammation effectively.
                            </p>
                        </div>

                        <div className="border-1 border-gray-300 p-2 transition duration-200 hover:scale-105">
                            <img className="h-50 w-fit object-cover" src="/Amoxicillin.jpeg" alt="Amoxicillin" />
                            <h5 className="font-medium text-lg mt-5">Amoxicillin</h5>
                            <p className="text-[#494B4D]">
                                Broad-spectrum antibiotic for treating bacterial infections.
                            </p>
                        </div>

                        <div className="border-1 border-gray-300 p-2 transition duration-200 hover:scale-105">
                            <img className="h-50 w-fit object-cover" src="/risek.jpg" alt="risek" />
                            <h5 className="font-medium text-lg mt-5">Risek</h5>
                            <p className="text-[#494B4D]">
                                Assists in managing stomach acidity and related discomfort.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto md:mt-180">
                <div className="flex flex-col md:flex-row justify-around items-center">
                    <div className="w-80 md:w-2/5">
                        <img src="/about.png" alt="about" className="w-150 h-150 object-contain transition duration-200 hover:scale-110" />
                    </div>
                    <div className="w-80 md:w-2/5">
                        <p className="text-[#0D579B] font-semibold ff-plus-js">About Us</p>
                        <h3 className="text-3xl mt-5 font-semibold ff-poppins">Pioneering healthcare solutions for a healthier tomorrow. Transforming patient care with trust and innovation.</h3>
                        <p className="mt-5 text-[#494B4D] mb-5 ff-inter">
                            At Cure Med, we are dedicated to transforming healthcare and enhancing patient outcomes worldwide. With a strong foundation in trust, quality, and innovation, we strive to address the evolving challenges faced by healthcare providers and patients. Our team of experts is committed to developing safe, effective, and accessible pharmaceutical solutions that improve lives. Join us on our journey to foster a healthier world.
                        </p>
                        <Link to="/about" target="_blank" className="text-white bg-[#0086FF] rounded-3xl px-5 py-3 font-semibold ff-inter">Learn More</Link>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-10 bg-[url(/dot-pattern.png)] pb-10 h-fit md:h-200">

                <div className="container mx-auto text-center">
                    <h2 className="pt-10 md:pt-25 text-[#0E355D] font-semibold ff-plus-js">Our Vision</h2>
                    <h3 className="w-80 md:w-2/5 mx-auto text-lg md:text-4xl mt-3 md:mt-5 font-semibold ff-poppins">We Are The Most Trusted Pharmacy In This Town</h3>
                    <p className="w-80 md:w-2/5 mx-auto mt-3 md:mt-5 text-[#494B4D] mb-5 text-center ff-inter">At Cure Med, our mission is to improve the health and well-being of individuals and communities through innovative pharmaceutical solutions.</p>
                </div>


                <div className="container mx-auto mt-10">
                    <div className="flex flex-col md:flex-row justify-around items-center">
                        <VisionCard imgSrc="/quality_assurance.png" heading="Quality Assurance" description="Committed to providing top-quality pharmaceuticals."/>
                        <VisionCard imgSrc="/expertise.png" heading="Expertise" description="Decades of experience in the healthcare industry."/>
                        <VisionCard imgSrc="/customer_support.png" heading="Quality Assurance" description="Dedicated support for healthcare professionals and clients."/>
                    </div>
                </div>

            </div>


            <div className="bg-white md:mt-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div className="mx-10 md:m-20">
                        <h2 className="pt-10 md:pt-25 text-[#0D579B] font-semibold ff-plus-js">Our Vision</h2>
                        <p className="text-[#1B1E21CC] ff-inter">
                            With over 15 years of expertise, our team combines dedication and deep knowledge to drive advancements in healthcare. Our experience enables us to deliver innovative, reliable solutions tailored to meet the diverse needs of patients and healthcare providers alike.
                        </p>
                    </div>
                    <div className="m-10">
                        <img src="/year-of-experience.png" alt="pharmacy-experience" className="transition duration-200 hover:scale-110" />
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col-reverse md:flex-row bg-[#F5F6FA] h-fit">
                <div className="m-10 md:m-0 md:p-0 md:w-1/2">
                    <img src="/family_medical.png" alt="Healthcare beyond prescriptions" className="transition duration-200 hover:scale-102" /></div>
                <div className="md:w-1/2 px-10 my-10 md:px-30 md:my-18">
                    <h4 className="text-xl md:text-3xl mt-5 font-semibold ff-poppins mb-5">
                        We care beyond what your doctors have prescribed
                    </h4>
                    <p className="text-[#1B1E21CC] ff-inter">
                        At Cure Med Pharmas, we believe that true healthcare goes beyond prescriptions. Our commitment is to your overall well-being, ensuring that you receive not just the right medication but also the support, guidance, and care you deserve.
                    </p>
                    <div className="grid grid-cols-3 mt-10 ff-poppins text-[#1B1E21CC]">
                        <div>
                            <h5 className="text-lg font-medium">20+</h5>
                            <p>Experience</p>
                        </div>

                        <div>
                            <h5 className="text-lg font-medium">50+</h5>
                            <p>Excellence</p>
                        </div>

                        <div>
                            <h5 className="text-lg font-medium">80</h5>
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

            <FooterCTA />

            {/* Footer */}
            <Footer />

        </>
    )
}