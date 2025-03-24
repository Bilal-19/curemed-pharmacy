import React from "react";

export default function ImageTextCard(props) {
    return (
        <>
            <div className="container mx-auto mt-15 mb-15 md:mt-30 md:mb-30">
                <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                    <div className="md:w-1/2 m-5 md:m-10">
                        <img src={props.imagePath} alt={props.pageName} className="h-100 object-cover transition duration-200 hover:scale-110" />
                    </div>
                    <div className="md:w-1/2 m-5 md:m-10">
                        <p className="text-base text-[#0E355D] font-semibold ff-plus-js mb-3">{props.pageName}</p>
                        <h3 className="text-2xl md:text-4xl font-semibold mb-5 text-[#1B1E21] ff-poppins">{props.heading}</h3>
                        <p className="ff-inter mb-5 text-[#494B4D]">
                            {props.description}
                        </p>
                        {props.isNavigate && (
                            <>
                                <a className="bg-[#0086FF] rounded-4xl px-8 py-3 text-white hover:bg-[#031E38] hover:cursor-pointer ff-inter font-semibold">Learn More</a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}