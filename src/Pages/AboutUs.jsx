import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeaderCTA from "../Components/HeaderCTA";
import ImageTextCard from "../Components/ImageTextCard";
import TextImageCard from "../Components/TextImageCard";
import VisionCard from "../Components/VisionCard";

export default function AboutUs() {
    return (
        <>
            <HeaderCTA />
            <Header />

            <div className="w-full bg-[url(/about-bg.png)] md:h-[333px] bg-cover bg-no-repeat">
                <div className="grid md:grid-cols-2">
                    <div className="m-8 md:m-20 md:mt-12">
                        <h1 className="text-3xl md:text-6xl text-white font-medium ff-poppins md:animate-fadeIn">About Us</h1>
                        <p className="text-white mt-5 mb-0 pb-0 text-base md:text-lg ff-inter md:animate-slideIn">
                            At CureMed, we believe in the power of science and innovation to improve health and well-being. With a dedication to quality, safety, and affordability, we strive to provide cutting-edge pharmaceutical solutions that meet global healthcare standards.
                        </p>
                    </div>
                </div>
            </div>

            <TextImageCard
                pageName="About Us"
                heading="Your Health, Our Priority"
                description="At Cure Med, we are committed to delivering top-quality pharmaceutical care with a patient-first approach. Our expert team ensures access to trusted medications, personalized guidance, and innovative healthcare solutions for a healthier community."
                imagePath="/professional-doctors.png"
                isNavigate={false}
            />

            <ImageTextCard
                pageName="About Us"
                heading="Innovation in Every Prescription"
                description="We combine modern technology with pharmaceutical expertise to bring you the safest and most effective medications. From research to delivery, our focus remains on innovation, reliability, and patient well-being."
                imagePath="/microscope.png"
                isNavigate={false}
            />

            <div className="container-fluid mt-10 bg-[url(/dot-pattern.png)] pb-10 h-fit md:h-200">

                <div className="container mx-auto text-center">
                    <h2 className="pt-10 md:pt-25 text-[#0E355D] font-semibold ff-plus-js">Our Vision</h2>
                    <h3 className="w-80 md:w-2/5 mx-auto text-lg md:text-4xl mt-3 md:mt-5 font-semibold ff-poppins">We Are The Most Trusted Pharmacy In This Town</h3>
                    <p className="w-80 md:w-2/5 mx-auto mt-3 md:mt-5 text-[#494B4D] mb-5 text-center ff-inter">At Cure Med, our mission is to improve the health and well-being of individuals and communities through innovative pharmaceutical solutions.</p>
                </div>


                <div className="w-full mt-10">
                    <div className="flex flex-col md:flex-row justify-around items-center">
                        <VisionCard imgSrc="/quality.png" heading="Quality" description="Premium pharmaceuticals with strict safety standards." />
                        <VisionCard imgSrc="/integrity.png" heading="Integrity" description="Honest, transparent, and ethical healthcare service." />
                        <VisionCard imgSrc="/innovation.png" heading="Innovation" description="Modern solutions for better patient care." />
                        <VisionCard imgSrc="/quality.png" heading="Collaboration" description="Strong partnerships for improved healthcare." />
                    </div>
                </div>
            </div>

            <TextImageCard
                pageName="About Us"
                heading="Quality You Can Trust"
                description="With rigorous quality control and a dedication to excellence, Cure Med ensures that every product meets the highest safety standards. Your well-being is our mission, and we strive to be the pharmacy you can always rely on."
                imagePath="/inspection.png"
                isNavigate={false}
            />

            <div className="w-full mt-15 mb-15 md:mt-30 md:mb-30 text-center">
                <h3 className="text-2xl md:text-4xl ff-poppins font-semibold">Our Commitment to Community</h3>
                <p className="text-base ff-inter font-normal mx-10 md:mx-100 mt-10 mb-10">
                    We believe in giving back to the communities we serve. Through various initiatives,
                    we support health education, awareness campaigns, and access to essential.
                </p>
                <img src="/society.png" alt="" className="w-4/5 mx-auto" />
            </div>

            <Footer />
        </>
    )
}