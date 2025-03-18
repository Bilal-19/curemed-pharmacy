import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeaderCTA from "../Components/HeaderCTA";

export default function AboutUs() {
    return (
        <>
            <HeaderCTA />
            <Header />

            <div class="w-full bg-[url(/curemed-pharmacy/about-bg.png)] md:h-[333px] bg-cover bg-no-repeat">
                <div class="grid md:grid-cols-2">
                    <div className="m-5 md:mt-12">
                        <h1 className="text-3xl md:text-6xl text-white font-medium ff-poppins">About Us</h1>
                        <p className="text-white mt-5 mb-0 pb-0 text-base md:text-[18px]">
                            At CureMed, we believe in the power of science and innovation to improve health and well-being. With a dedication to quality, safety, and affordability, we strive to provide cutting-edge pharmaceutical solutions that meet global healthcare standards.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container mx-auto mt-15 mb-15 md:mt-30 md:mb-30">
                <div className="flex flex-col-reverse md:flex-row justify-around items-center">
                    <div class="md:w-2/5 m-5 md:m-10">
                        <p className="text-[#0E355D] font-semibold ff-plus-js">About Us</p>
                        <h2 className="text-2xl md:text-4xl ff-poppins font-semibold mt-5">We Are The Most Trusted Pharmacy In This Town</h2>
                        <p className="ff-inter font-normal mt-5">
                            At Cure Med, our mission is to improve the health and well-being of individuals and communities through innovative pharmaceutical solutions. We are committed to quality, integrity, and excellence in everything we do.
                        </p>
                    </div>

                    <div className="md:w-2/5 m-5 md:m-10">
                        <img src="/curemed-pharmacy/professional-doctors.png" alt="" />
                    </div>
                </div>
            </div>

            <div class="container mx-auto mt-15 mb-15 md:mt-30 md:mb-30">
                <div className="flex flex-col md:flex-row justify-around items-center">
                    <div className="md:w-2/5 m-5 md:m-10">
                        <img src="/curemed-pharmacy/microscope.png" alt="" />
                    </div>
                    <div class="md:w-2/5 m-5 md:m-10">
                        <p className="text-[#0E355D] font-semibold ff-plus-js">Our Vision</p>
                        <h2 className="text-2xl md:text-4xl ff-poppins font-semibold mt-5">We Are The Most Trusted Pharmacy In This Town</h2>
                        <p className="ff-inter font-normal mt-5">
                            At Cure Med, our mission is to improve the health and well-being of individuals and communities through innovative pharmaceutical solutions. We are committed to quality, integrity, and excellence in everything we do.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container-fluid mt-10 bg-[url(/curemed-pharmacy/dot-pattern.png)] pb-10 h-fit md:h-200">

                <div className="container mx-auto text-center">
                    <h2 className="pt-10 md:pt-25 text-[#0E355D] font-semibold ff-plus-js">Our Vision</h2>
                    <h3 className="w-80 md:w-full mx-auto text-lg md:text-2xl mt-3 md:mt-5 font-semibold">We Are The Most Trusted Pharmacy In This Town</h3>
                    <p className="w-80 md:w-3/5 mx-auto mt-3 md:mt-5 font-normal mb-5 text-center">At Cure Med, our mission is to improve the health and well-being of individuals and communities through innovative pharmaceutical solutions. We are committed to quality, integrity, and excellence in everything we do.</p>
                </div>


                <div class="w-full mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 mx-auto">
                        <div className="bg-[#FFFFFF] text-center rounded-xl pt-3 pb-10 px-5 mx-auto md:m-5 w-70">
                            <img src="/curemed-pharmacy/quality.png" alt="" className="h-45 pt-10 pb-5 mx-auto" />
                            <h5 className="text-lg font-bold mb-3">Quality</h5>
                            <p>Committed to providing top-quality pharmaceuticals.</p>
                        </div>

                        <div className="bg-[#FFFFFF] text-center rounded-xl pt-3 pb-10 px-5 mx-auto md:m-5 w-70">
                            <img src="/curemed-pharmacy/integrity.png" alt="" className="h-45 pt-10 pb-5 mx-auto" />
                            <h5 className="text-lg font-bold mb-3">Integrity</h5>
                            <p>Decades of experience in the healthcare industry.</p>
                        </div>

                        <div className="bg-[#FFFFFF] text-center rounded-xl pt-3 pb-10 px-5 mx-auto md:m-5 w-70">
                            <img src="/curemed-pharmacy/innovation.png" alt="" className="h-45 pt-10 pb-5 mx-auto" />
                            <h5 className="text-lg font-bold mb-3">Innovation</h5>
                            <p>Dedicated support for healthcare professionals and clients.</p>
                        </div>

                        <div className="bg-[#FFFFFF] text-center rounded-xl pt-3 pb-10 px-5 mx-auto md:m-5 w-70">
                            <img src="/curemed-pharmacy/quality.png" alt="" className="h-45 pt-10 pb-5 mx-auto" />
                            <h5 className="text-lg font-bold mb-3">Collaboration</h5>
                            <p>Dedicated support for healthcare professionals and clients.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mx-auto mt-15 mb-15 md:mt-30 md:mb-30">
                <div className="flex flex-col-reverse md:flex-row justify-around items-center">
                    <div class="md:w-2/5 m-5 md:m-10">
                        <p className="text-[#0E355D] font-semibold ff-plus-js">Our Vision</p>
                        <h2 className="text-2xl md:text-4xl ff-poppins font-semibold mt-5">We Are The Most Trusted Pharmacy In This Town</h2>
                        <p className="ff-inter font-normal mt-5">
                            At Cure Med, our mission is to improve the health and well-being of individuals and communities through innovative pharmaceutical solutions. We are committed to quality, integrity, and excellence in everything we do.
                        </p>
                    </div>
                    <div className="md:w-2/5 m-5 md:m-10">
                        <img src="/curemed-pharmacy/inspection.png" alt="" />
                    </div>
                </div>
            </div>

            <div class="w-full mt-15 mb-15 md:mt-30 md:mb-30 text-center">
                <h3 className="text-2xl md:text-4xl ff-poppins font-semibold">Our Commitment to Community</h3>
                <p className="text-base ff-inter font-normal mx-10 md:mx-100 mt-10 mb-10">
                    We believe in giving back to the communities we serve. Through various initiatives, 
                    we support health education, awareness campaigns, and access to essential.
                </p>
                <img src="/curemed-pharmacy/society.png" alt="" className="w-4/5 mx-auto"/>
            </div>

            <Footer />
        </>
    )
}