import { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import FooterCTA from "../Components/FooterCTA";
import HeaderCTA from "../Components/HeaderCTA";
import { medicalProductData } from "../assets/JS/medical_products";
import ProductModal from "../Components/ProductModal";

export default function Products() {
    const [product, setProduct] = useState(null);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (product) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [product]);

    return (
        <>
            <HeaderCTA />
            <Header />

            {/* Banner */}
            <div className="w-full bg-[url(/product-banner.png)] h-82 bg-cover bg-no-repeat">
                <div className="grid md:grid-cols-2">
                    <div className="m-8 md:m-20 md:mt-12">
                        <h1 className="text-3xl md:text-6xl text-white font-medium ff-poppins md:animate-fadeIn">Products</h1>
                        <p className="text-white text-lg mt-5 mb-0 pb-0 text-base md:text-lg ff-inter md:animate-slideIn">
                            Discover our wide range of pharmaceutical products, from prescription medications to over-the-counter drugs and wellness supplements. At CureMed, we prioritize quality and efficacy to support your healthcare needs.
                        </p>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className="container-fluid mt-15 mb-15 md:mt-10 md:mb-30">
                <div className="md:w-1/2 mx-12 border border-gray-300 rounded-3xl flex justify-between bg-white">
                    <input
                        type="text"
                        name="product-name"
                        placeholder="Search for product name"
                        className="m-1 md:m-2 focus:outline-none rounded-4xl px-2 md:px-1 w-full text-[14px] ff-inter"
                    />
                    <button className="bg-[#0086FF] text-white px-5 py-2 rounded-3xl hover:bg-[#0E355D] m-2 hover:cursor-pointer">
                        Search
                    </button>
                </div>
            </div>

            {/* Product List */}
            <div className="container-fluid">
                <div className="w-full">
                    {medicalProductData.map((item, key) => (
                        <div className="flex flex-col md:flex-row justify-start items-start mb-25 mx-12 ff-inter" key={key}>
                            <div className="w-full md:w-1/6">
                                <img src={item.imagePath} alt={item.prodName} className="md:size-40 object-cover transition duration-200 hover:scale-110" />
                            </div>
                            <div className="w-full md:w-3/6 text-justify mr-5">
                                <p className="font-semibold uppercase">{item.prodName}</p>
                                <p className="text-[#494B4D] mt-2 md:mt-15">{item.productDesc}</p>
                            </div>
                            <div className="md:w-2/6">
                                <button className="text-[#0086FF] font-semibold hover:cursor-pointer" onClick={() => setProduct(item)}>
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {product && (
                <>
                    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-300 text-black bg-opacity-50"
                        onClick={() => setProduct(null)}>
                        <ProductModal product={product} setProduct={()=>setProduct(null)}/>
                    </div>
                </>
            )}

            <FooterCTA />
            <Footer />
        </>
    );
}
