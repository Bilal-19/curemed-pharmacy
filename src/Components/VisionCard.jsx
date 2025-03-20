import React from "react";

export default function VisionCard(props) {
    return (
        <>
            <div className="bg-[#FFFFFF] text-center rounded-xl pt-3 pb-10 px-5 m-2 md:m-0 w-70 text-[#1B1E21]">
                <img src={props.imgSrc} alt="" className="h-45 pt-10 pb-5 mx-auto" />
                <h5 className="text-lg font-bold mb-3 ff-plus-js">{props.heading}</h5>
                <p className="ff-inter">{props.description}</p>
            </div>
        </>
    )
}