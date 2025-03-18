import Header from "../Components/Header";
import Footer from "../Components/Footer"
import FooterCTA from "../Components/FooterCTA"
import HeaderCTA from "../Components/HeaderCTA";
import { useState } from "react";

import { medicalProductData } from "../assets/JS/medical_products";

export default function Products() {
    const [product, setProduct] = useState(null);
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

                        <div class="flex flex-col md:flex-row justify-start items-start mb-25 mx-12 ff-inter" key={key}>
                            <div className="w-full md:w-1/6">
                                <img src={item.imagePath} alt="" className="md:size-40 object-cover" />
                            </div>
                            <div className="w-full md:w-3/6 text-justify mr-5">
                                <p className="font-semibold uppercase">{item.prodName}</p>
                                <p className="text-[#494B4D] mt-2 md:mt-15">{item.productDesc}</p>
                            </div>
                            <div className="md:w-2/6">
                                <button className="text-[#0086FF] font-semibold hover:cursor-pointer" onClick={() => setProduct(item)}>Learn More</button>
                            </div>
                        </div>

                    )
                    )}
                </div>
            </div>

            {product &&
                (
                    <div className="h-fit w-90 md:w-1/2 rounded-xl mx-auto mt-10 fixed inset-0 bg-[#FFFFFF] text-[#1B1E21] border-2 border-gray-300" key={product.id}>
                    <div class="flex justify-between m-5">
                        <h4 className="text-3xl ff-poppins">{product.prodName}</h4>
                        <button className="rounded border-gray-500 hover:cursor-pointer" onClick={() => setProduct(null)}>
                            <i class="fa-solid fa-circle-xmark fs-xl"></i>
                        </button>
                    </div>
                    <hr />

                    <div className="m-5 ff-inter">
                        <h5 className="text-2xl">Description:</h5>
                        <p className="font-light">{product.productDesc}</p>
                    </div>

                    <div className="m-5 ff-inter">
                        <h5 className="text-2xl">Usage:</h5>
                        <ul className="font-light">{product.usage.map((item,key) => (<li className="ml-5" key={key}>{item}</li>))}</ul>
                    </div>

                    <div className="m-5 ff-inter">
                        <h5 className="text-2xl">Benefits:</h5>
                        <ul className="font-light">{product.benefits.map((item,key) => (<li className="ml-5" key={key}>{item}</li>))}</ul>
                    </div>

                    <div className="m-5 ff-inter">
                        <h5 className="text-2xl">Precautions:</h5>
                        <ul className="font-light">{product.precautions.map((item,key) => (<li className="ml-5" key={key}>{item}</li>))}</ul>
                    </div>
                </div>
                )
            }

            <FooterCTA />
            <Footer />
        </>
    )
}