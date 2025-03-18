import Header from "../Components/Header";
import Footer from "../Components/Footer"
import HeaderCTA from "../Components/HeaderCTA"

export default function Career() {
    return (
        <>
            <HeaderCTA />
            <Header />

            <div class="w-full">
                <div className="w-80 md:w-1/3 mx-3 md:m-10">
                    <p className="text-[#0E355D] font-semibold ff-plus-js">Career</p>
                    <h1 className="text-2xl md:text-4xl ff-poppins font-semibold mt-2 md:mt-5">Open roles</h1>
                    <p className="mt-5 md:mt-10 mb-10 ff-inter text-[#494B4D]">
                        Explore exciting career opportunities with us and join a team dedicated to innovation and growth. Check out our open roles and take the next step in your professional journey.
                    </p>
                </div>
            </div>

            <Footer />
        </>
    )
}