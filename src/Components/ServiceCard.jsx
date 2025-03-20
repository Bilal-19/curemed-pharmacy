import React from "react";

export default function ServiceCard(props) {
    return (
        <>
            <div className="transition duration-200 hover:scale-105">
                <img src={props.imgSrc} alt="" />
                <h5 className="font-medium text-lg mt-5">{props.heading}</h5>
                <p className="md:w-70 text-[#494B4D]">{props.description}</p>
            </div>
        </>
    )
}