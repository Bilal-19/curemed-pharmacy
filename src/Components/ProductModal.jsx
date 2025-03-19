import React from "react";

export default function ProductModal(props) {
    console.log(props)
    return (
        <>
            <div
                className="w-85 md:w-1/2 max-h-[80vh] overflow-y-auto rounded-xl relative bg-white text-[#1B1E21] border-2 border-gray-300 shadow-lg"
                onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center m-5">
                    <h4 className="text-xl md:text-3xl ff-poppins">{props.product.prodName}</h4>
                    <button className="rounded border-gray-500 hover:cursor-pointer" onClick={() => props.setProduct(null)}>
                        <i className="fa-solid fa-circle-xmark fs-xl"></i>
                    </button>
                </div>
                <hr />

                {/* Modal Content */}
                <div className="m-5 ff-inter flex flex-col-reverse md:flex-row">
                    <div>
                        <h5 className="text-lg md:text-2xl">Description:</h5>
                        <p className="font-light">{props.product.productDesc}</p>

                        <div className="ff-inter">
                            <h5 className="text-lg md:text-2xl">Usage:</h5>
                            <ul className="font-light">
                                {props.product.usage.map((item, key) => (
                                    <li className="ml-5" key={key}><i className="fa-solid fa-circle-check"></i> {item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="ff-inter">
                            <h5 className="text-lg md:text-2xl">Benefits:</h5>
                            <ul className="font-light">
                                {props.product.benefits.map((item, key) => (
                                    <li className="ml-5" key={key}><i className="fa-solid fa-circle-check"></i> {item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="ff-inter">
                            <h5 className="text-lg md:text-2xl">Precautions:</h5>
                            <ul className="font-light">
                                {props.product.precautions.map((item, key) => (
                                    <li className="ml-5" key={key}><i className="fa-solid fa-circle-check"></i> {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src={props.product.imagePath} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}