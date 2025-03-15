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
                        <h1 className="text-5xl md:text-6xl text-white font-medium ff-poppins">Services</h1>
                        <p className="text-white text-lg mt-5 mb-0 pb-0 text-base md:text-[18px]">
                            We offer a comprehensive range of pharmaceutical services, including drug development, distribution, and customized healthcare solutions. Our expert team ensures that every product adheres to the highest medical and regulatory standards.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-30 mb-30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="m-5 md:m-10">
                        <p className="text-base text-[#0E355D] font-semibold ff-plus-js mb-3">Product Consultation</p>
                        <h3 className="text-2xl md:text-4xl font-semibold mb-5 text-[#1B1E21] ff-poppins">
                            Your Trusted Partner in Pharmaceutical Excellence
                        </h3>
                        <p className="ff-inter mb-5">
                            At Cure Med, we bring together expertise and innovation to deliver pharmaceutical solutions that you can rely on. Our dedicated team works tirelessly to ensure the highest standards of quality, safety, and effectiveness, providing you with the support you need to make informed health choices.
                        </p>
                        <a className="bg-[#0086FF] rounded-4xl px-8 py-3 text-white hover:bg-[#031E38] hover:cursor-pointer">Learn More</a>
                    </div>
                    <div className="m-5 md:m-10">
                        <img src="/curemed-pharmacy/trusted-partner.png" alt="" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}