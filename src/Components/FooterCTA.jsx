import { NavLink } from "react-router-dom"
export default function FooterCTA(){
    return (
        <>
         <div className="w-full bg-[url(/curemed-pharmacy/footer-cta-bg.png)] bg-cover bg-no-repeat h-fit md:h-80 pt-5 pb-5 md:pt-0 md:pb-0">
                <div className="w-4/5 md:w-1/2 text-white mx-10 md:mx-20">
                    <h4 className="text-lg md:text-3xl pt-10 md:pt-20 font-semibold ff-poppins mb-5">Your Wellness Starts Here</h4>
                    <p className="font-normal text-[#FFFFFF]">
                        We invite you to learn more about our products and services. For inquiries or more information, please reach out to us via our contact page
                    </p>
                    <NavLink to="/services" className="block md:inline-block py-2 px-3 md:py-3 md:px-5 text-sm md:text-base bg-[#0086FF] rounded-4xl text-white mt-10 hover:bg-white hover:text-[#0086FF] font-[600] mr-4">
                        Explore Our Services
                    </NavLink>
                    <NavLink to="/products" className="block md:inline-block py-2 px-3 md:py-3 md:px-5 text-sm md:text-base bg-white rounded-4xl text-[#0086FF] mt-10 hover:bg-[#0086FF] hover:text-white font-[600]">
                        Explore Our Products
                    </NavLink>
                </div>
            </div>
        </>
    )
}