import Header from "../Components/Header";
import Footer from "../Components/Footer"
import FooterCTA from "../Components/FooterCTA"
import HeaderCTA from "../Components/HeaderCTA";

import { medicalProductData } from "../assets/JS/medical_products";

export default function Products() {
    return (
        <>
            <HeaderCTA />
            <Header />

            <div class="w-full bg-[url(/curemed-pharmacy/product-banner.png)] h-82 bg-cover bg-no-repeat">
                <div class="grid md:grid-cols-2">
                    <div className="m-12 md:mt-12">
                        <h1 className="text-3xl md:text-6xl text-white font-medium ff-poppins">Products</h1>
                        <p className="text-white text-lg mt-5 mb-0 pb-0 text-base md:text-[18px]">
                            Discover our wide range of pharmaceutical products, from prescription medications to over-the-counter drugs and wellness supplements. At CureMed, we prioritize quality and efficacy to support your healthcare needs.
                        </p>
                    </div>
                </div>
            </div>

            <div class="container-fluid mt-15 mb-15 md:mt-10 md:mb-30">
                <div class="md:w-1/2 mx-12 border border-gray-300 rounded-3xl flex justify-between bg-white">
                    <input type="text" name="product-name" placeholder="Search for product name" className="m-1 md:m-2 focus:outline-none rounded-3xl px-2 md:px-5 w-full" />
                    <button className="bg-[#0086FF] text-white px-5 py-2 rounded-3xl hover:bg-[#0E355D] m-2 hover:cursor-pointer">Search</button>
                </div>
            </div>

            <div class="container-fluid">
                <div class="w-full">
                    {medicalProductData.map((item, key) =>
                    (
                        <>
                            <div class="flex flex-col md:flex-row justify-start items-start mb-25 mx-12 ff-inter">
                                <div className="w-full md:w-1/6">
                                    <img src={item.imagePath} alt="" className="md:size-40 object-cover" />
                                </div>
                                <div className="w-full md:w-3/6 text-justify mr-5">
                                    <p className="font-semibold uppercase">{item.prodName}</p>
                                    <p className="text-[#494B4D] mt-2 md:mt-15">{item.productDesc}</p>
                                </div>
                                <div>
                                    <a href="" className="md:w-1/6 text-[#0086FF] font-semibold">Learn More</a>
                                </div>
                            </div>
                        </>
                    )

                    )}</div>
            </div>

            <FooterCTA />
            <Footer />
        </>
    )
}