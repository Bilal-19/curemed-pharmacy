import React from "react";

export default function ServiceCard(props) {
    return (
        <>
            <div>
                <img src={props.imgSrc} alt="" />
                <h5 className="font-medium text-lg mt-5">{props.heading}</h5>
                <p className="text-[#494B4D]">{props.description}</p>
            </div>
        </>
    )
}