import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeaderCTA from "../Components/HeaderCTA";
import ImageTextCard from "../Components/ImageTextCard";
import TextImageCard from "../Components/TextImageCard";

export default function Services() {
    return (
        <>
            <HeaderCTA />
            <Header />

            <div class="w-full bg-[url(/curemed-pharmacy/service-bg.png)] h-90 md:h-100 bg-cover bg-no-repeat">
                <div class="grid md:grid-cols-2">
                    <div className="m-20 md:mt-16">
                        <h1 className="text-3xl md:text-6xl text-white font-medium ff-poppins md:animate-fadeIn">Services</h1>
                        <p className="text-white text-lg mt-5 mb-0 pb-0 text-base md:text-lg ff-inter md:animate-slideIn">
                            We offer a comprehensive range of pharmaceutical services, including drug development, distribution, and customized healthcare solutions. Our expert team ensures that every product adheres to the highest medical and regulatory standards.
                        </p>
                    </div>
                </div>
            </div>

            <TextImageCard
                heading="Your Trusted Partner in Pharmaceutical Excellence"
                description="At Cure Med, we bring together expertise and innovation to deliver pharmaceutical solutions
                            that you can rely on. Our dedicated team works tirelessly to ensure the highest standards of
                            quality, safety, and effectiveness, providing you with the support you need to make informed
                            health choices."
                imagePath="/curemed-pharmacy/trusted-partner.png"
                pageName="Product Consultation"
                isNavigate={true}
            />

            <ImageTextCard
                heading="Your Health, Our Priority"
                description="Explore our wide range of trusted and effective medicines designed to meet diverse healthcare needs.
                            At Cure Med, we’re committed to providing safe, high-quality pharmaceutical products to help you live
                            healthier. Our selection includes treatments carefully crafted to address everything from everyday
                            ailments to complex conditions, ensuring the best care for you and your loved ones."
                imagePath="/curemed-pharmacy/health-priority.png"
                pageName="Product Consultation"
                isNavigate={true}
            />

            <TextImageCard
                heading="Excellence in Health Solutions"
                description="At Cure Med, we are dedicated to enhancing health and wellness through cutting-edge
                pharmaceutical solutions. Our team of skilled professionals is committed to delivering
                quality, integrity, and innovation in every product. Trust us to provide the support and
                expertise you need for optimal health outcomes."
                imagePath="/curemed-pharmacy/excellence-health-solutions.png"
                pageName="Product Consultation"
                isNavigate={true}
            />

            <ImageTextCard
                heading="Comprehensive Care, Right at Your Fingertips"
                description="At Cure Med, we understand the importance of accessible, reliable, and expert pharmaceutical guidance.
                            Our knowledgeable pharmacists are here to support you with high-quality medicines and personalized
                            consultations, ensuring you receive the best care every step of the way."
                imagePath="/curemed-pharmacy/fingertips-care.png"
                pageName="Product Consultation"
                isNavigate={true}
            />

            <Footer />
        </>
    )
}