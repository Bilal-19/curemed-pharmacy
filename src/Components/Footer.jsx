import { NavLink } from "react-router-dom"
export default function Footer(){
    return (
        <>
            {/* Footer */}
            <div class="w-full bg-[#031E38] ff-inter">
                <div class="grid grid-cols-2 md:grid-cols-6 text-white gap-4 p-10 md:p-20">
                    <div className="col-span-2">
                        <img src="/curemed-pharmacy/footer_logo.png" alt="" />
                        <p>
                            Explore our range of products and services designed with innovation and care.
                        </p>
                    </div>

                    <div className="hidden md:block"></div>

                    <div>
                        <h6 className="font-bold text-base md:mb-2">Explore</h6>
                        <NavLink className="block" to="/">Home</NavLink>
                        <NavLink className="block" to="/products">Products</NavLink>
                        <NavLink className="block" to="/services">Services</NavLink>
                    </div>


                    <div>
                        <h6 className="font-bold text-base md:mb-2">Company</h6>
                        <NavLink className="block" to="/about">About Us</NavLink>
                        <NavLink className="block" to="/career">Career</NavLink>
                    </div>

                    <div>
                        <h6 className="font-bold text-base md:mb-2">Contact</h6>
                        <a className="block">+923041234567</a>
                        <a className="block">favorite@doctor.com</a>
                        <p className="block">Glassplace, Near
                            Cool Avenue, Boson</p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#FFFFFF] ff-inter text-[#051527] font-medium">
                <div class="h-15 flex flex-col md:flex-row justify-between items-center">
                    <div className="md:ml-20">
                        <p>All Right Reserved. CureMed 2024</p>
                    </div>
                    <div className="flex flex-row justify-around md:mr-20">
                        <p className="mr-10">Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}