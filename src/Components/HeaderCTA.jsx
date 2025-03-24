export default function HeaderCTA() {
    return (
        <>
            <div className="w-full flex justify-between items-center bg-[#0E355D] text-white h-10 text-sm md:text-base ff-inter">
                <div className="ml-2 md:ml-10">
                    <a className="mr-2 md:mr-4"><i className="fa-solid fa-phone"></i> <span className="hidden md:inline">03082491543</span></a>
                    <a><i className="fa-solid fa-envelope"></i> <span className="hidden md:inline">info@pharmas.com</span></a>
                </div>
                <div className="mr-2 md:mr-10">
                    <a><i className="mr-2 md:mr-3 fa-brands fa-facebook-f"></i></a>
                    <a><i className="mr-2 md:mr-3 fa-brands fa-instagram"></i></a>
                    <a><i className="mr-2 md:mr-3 fa-brands fa-twitter"></i></a>
                    <a><i className="mr-2 md:mr-2 fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </>
    )
}