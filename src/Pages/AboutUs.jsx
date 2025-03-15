import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeaderCTA from "../Components/HeaderCTA";

export default function AboutUs() {
    return (
        <>
        <HeaderCTA/>
        <Header/>

        <div class="w-full bg-[url(/curemed-pharmacy/about-bg.png)] h-[333px] bg-cover bg-no-repeat">
                <div class="grid md:grid-cols-2">
                    <div className="m-12 md:mt-12">
                        <h1 className="text-3xl md:text-6xl text-white font-medium ff-poppins">About Us</h1>
                        <p className="text-white text-lg mt-5 mb-0 pb-0 text-base md:text-[18px]">
                        At CureMed, we believe in the power of science and innovation to improve health and well-being. With a dedication to quality, safety, and affordability, we strive to provide cutting-edge pharmaceutical solutions that meet global healthcare standards.
                        </p>
                    </div>
                </div>
            </div>

        <Footer/>
        </>
    )
}