import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeaderCTA from "../Components/HeaderCTA";

export default function Services() {
    return (
        <>
            <HeaderCTA />
            <Header />

            <div class="w-full bg-[url(/curemed-pharmacy/service-bg.png)] h-100 bg-cover bg-no-repeat">
                <div class="grid md:grid-cols-2">
                    <div className="m-12 md:mt-12">
                        <h1 className="text-3xl md:text-6xl text-white font-medium ff-poppins">Services</h1>
                        <p className="text-white text-lg mt-5 mb-0 pb-0 text-base md:text-[18px]">
                            We offer a comprehensive range of pharmaceutical services, including drug development, distribution, and customized healthcare solutions. Our expert team ensures that every product adheres to the highest medical and regulatory standards.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-15 mb-15 md:mt-30 md:mb-30">
                <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                    <div className="md:w-1/2 m-5 md:m-10">
                        <p className="text-base text-[#0E355D] font-semibold ff-plus-js mb-3">Product Consultation</p>
                        <h3 className="text-2xl md:text-4xl font-semibold mb-5 text-[#1B1E21] ff-poppins">
                            Your Trusted Partner in Pharmaceutical Excellence
                        </h3>
                        <p className="ff-inter mb-5">
                            At Cure Med, we bring together expertise and innovation to deliver pharmaceutical solutions
                            that you can rely on. Our dedicated team works tirelessly to ensure the highest standards of
                            quality, safety, and effectiveness, providing you with the support you need to make informed
                            health choices.
                        </p>
                        <a className="bg-[#0086FF] rounded-4xl px-8 py-3 text-white hover:bg-[#031E38] hover:cursor-pointer">Learn More</a>
                    </div>
                    <div className="md:w-1/2 m-5 md:m-10">
                        <img src="/curemed-pharmacy/trusted-partner.png" alt="" className="h-100 object-cover" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-15 mb-15 md:mt-30 md:mb-30">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="md:w-1/2 m-5 md:m-10">
                        <img src="/curemed-pharmacy/health-priority.png" alt="" className="h-100 object-cover" />
                    </div>
                    <div className="md:w-1/2 m-5 md:m-10">
                        <p className="text-base text-[#0E355D] font-semibold ff-plus-js mb-3">Product Consultation</p>
                        <h3 className="text-2xl md:text-4xl font-semibold mb-5 text-[#1B1E21] ff-poppins">
                            Your Health, Our Priority
                        </h3>
                        <p className="ff-inter mb-5">
                            Explore our wide range of trusted and effective medicines designed to meet diverse healthcare needs.
                            At Cure Med, we’re committed to providing safe, high-quality pharmaceutical products to help you live
                            healthier. Our selection includes treatments carefully crafted to address everything from everyday
                            ailments to complex conditions, ensuring the best care for you and your loved ones.
                        </p>
                        <a className="bg-[#0086FF] rounded-4xl px-8 py-3 text-white hover:bg-[#031E38] hover:cursor-pointer">Learn More</a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-15 mb-15 md:mt-30 md:mb-30">
                <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                    <div className="md:w-1/2 m-5 md:m-10">
                        <p className="text-base text-[#0E355D] font-semibold ff-plus-js mb-3">Product Consultation</p>
                        <h3 className="text-2xl md:text-4xl font-semibold mb-5 text-[#1B1E21] ff-poppins">
                            Excellence in Health Solutions
                        </h3>
                        <p className="ff-inter mb-5">
                            At Cure Med, we are dedicated to enhancing health and wellness through cutting-edge
                            pharmaceutical solutions. Our team of skilled professionals is committed to delivering
                            quality, integrity, and innovation in every product. Trust us to provide the support and
                            expertise you need for optimal health outcomes.
                        </p>
                        <a className="bg-[#0086FF] rounded-4xl px-8 py-3 text-white hover:bg-[#031E38] hover:cursor-pointer">Learn More</a>
                    </div>
                    <div className="md:w-1/2 m-5 md:m-10">
                        <img src="/curemed-pharmacy/excellence-health-solutions.png" alt="" className="h-100 object-cover" />
                    </div>
                </div>
            </div>

            <div className="w-full mt-15 mb-15 md:mt-30 md:mb-30">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="md:w-1/2 m-5 md:m-10 cols-">
                        <img src="/curemed-pharmacy/fingertips-care.png" alt="" className="h-100 object-cover" />
                    </div>
                    <div className="md:w-1/2 m-5 md:m-10">
                        <p className="text-base text-[#0E355D] font-semibold ff-plus-js mb-3">Product Consultation</p>
                        <h3 className="text-2xl md:text-4xl font-semibold mb-5 text-[#1B1E21] ff-poppins">
                            Comprehensive Care, Right at Your Fingertips
                        </h3>
                        <p className="ff-inter mb-5">
                            At Cure Med, we understand the importance of accessible, reliable, and expert pharmaceutical guidance.
                            Our knowledgeable pharmacists are here to support you with high-quality medicines and personalized
                            consultations, ensuring you receive the best care every step of the way.
                        </p>
                        <a className="bg-[#0086FF] rounded-4xl px-8 py-3 text-white hover:bg-[#031E38] hover:cursor-pointer">Learn More</a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}