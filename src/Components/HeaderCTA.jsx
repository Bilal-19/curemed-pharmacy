export default function HeaderCTA() {
    return (
        <>
            <div class="w-full flex justify-between items-center bg-[#0E355D] text-white h-10 text-sm md:text-base">
                <div className="ml-10">
                    <a className="mr-4"><i class="fa-solid fa-phone"></i> 03082491543</a>
                    <a><i class="fa-solid fa-envelope"></i> info@pharmas.com</a>
                </div>
                <div className="mr-10">
                    <a><i class="mr-2 fa-brands fa-facebook-f"></i></a>
                    <a><i class="mr-2 fa-brands fa-instagram"></i></a>
                    <a><i class="mr-2 fa-brands fa-twitter"></i></a>
                    <a><i class="mr-2 fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </>
    )
}