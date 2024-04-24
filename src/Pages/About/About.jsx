// import NavBar from "../Shared/NavBar/NavBar";

import { Helmet } from "react-helmet-async";


const About = () => {
    return (
        <div>
            <Helmet>
                <title>About </title>
            </Helmet>
            <div className="about-page p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Introduction Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4">About Port-Land Real Estate</h1>
                    <p className="text-lg mb-6">
                    Welcome to Port-Land Real Estate, your premier destination for finding exquisite properties in the vibrant city of Portland. With years of experience in the real estate industry, we specialize in connecting homebuyers and sellers to their dream properties and investment opportunities.
                    </p>
                </div>

                {/* Vision Card */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
                    <p className="text-lg mb-6">
                    At Port-Land Real Estate, we envision a future where every individual finds their perfect home or investment property effortlessly. Our mission is to provide unparalleled service, expert guidance, and innovative solutions to make your real estate journey seamless and rewarding.
                    </p>
                </div>
                </div>

                {/* Why Choose Us Card */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-bold mb-3">Why Choose Port-Land Real Estate?</h2>
                <ul className="list-disc list-inside mb-6">
                    <li className="text-lg">Local Expertise: We have an in-depth understanding of the Portland real estate market, including neighborhoods, trends, and investment opportunities.</li>
                    <li className="text-lg">Personalized Approach: We believe in personalized service tailored to your unique needs and preferences.</li>
                    <li className="text-lg">Professional Integrity: Integrity is at the core of our business values. We prioritize transparency, honesty, and ethical practices in every transaction.</li>
                    <li className="text-lg">Comprehensive Services: From property listings to negotiations, we offer comprehensive real estate services.</li>
                    <li className="text-lg">Technology Integration: We leverage advanced technology for a seamless real estate experience.</li>
                </ul>
                </div>

                {/* Services Card */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-bold mb-3">Our Services</h2>
                <ul className="list-disc list-inside mb-6">
                    <li className="text-lg">Residential Sales: Explore a wide range of residential properties.</li>
                    <li className="text-lg">Commercial Properties: Discover lucrative commercial properties.</li>
                    <li className="text-lg">Investment Opportunities: Access exclusive investment opportunities.</li>
                    <li className="text-lg">Consultation and Advice: Benefit from expert consultation and advice.</li>
                </ul>
                </div>

                {/* Connect With Us Card */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-bold mb-3">Connect with Us</h2>
                <p className="text-lg mb-6">
                    Ready to embark on your real estate journey? Contact Port-Land Real Estate today to schedule a consultation with our experienced agents. Let us help you find your perfect place in the dynamic city of Portland. Welcome home!
                </p>
                <div className="flex items-center mb-3">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M17.707 5.293a1 1 0 010 1.414l-9 9a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L8 14.086l8.293-8.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                    </svg>
                    <p className="text-lg text-green-500 font-semibold">Expert Guidance</p>
                </div>
                <div className="flex items-center mb-3">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M17.707 5.293a1 1 0 010 1.414l-9 9a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L8 14.086l8.293-8.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                    </svg>
                    <p className="text-lg text-green-500 font-semibold">Personalized Service</p>
                </div>
                <div className="flex items-center mb-3">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M17.707 5.293a1 1 0 010 1.414l-9 9a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L8 14.086l8.293-8.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                    </svg>
                    <p className="text-lg text-green-500 font-semibold">Transparent Process</p>
                </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-bold mb-3">Contact Us</h2>
                <p className="text-lg mb-6">For inquiries and appointments, feel free to reach out to us:</p>
                <div className="flex items-center mb-3">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path
                        fillRule="evenodd"
                        d="M3 2a1 1 0 011-1h12a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V2zm1 1v14h10V3H4zm4 7h4v2H8v-2z"
                        clipRule="evenodd"
                    />
                    </svg>
                    <p className="text-lg text-blue-500 font-semibold">Phone: +1 (123) 456-7890</p>
                </div>
                <div className="flex items-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    >
                    <path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v2.586a1 1 0 01-.293.707l-7 7a1 1 0 01-1.414 0l-7-7A1 1 0 012 5.586V3zm2 2v9.586l5 5L17.586 7H4z" />
                    </svg>
                    <p className="text-lg text-blue-500 font-semibold">Email: info@portlandrealestate.com</p>
                </div>
                </div>

                {/* Mission Statement Card */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                <p className="text-lg mb-6">
                    Our mission at Port-Land Real Estate is to empower individuals and families in finding their dream homes, guiding investors towards profitable opportunities, and contributing positively to the growth and development of the Portland real estate market.
                </p>
                </div>

                {/* Team Card */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-bold mb-3">Meet Our Team</h2>
                <p className="text-lg mb-6">
                    Our dedicated team of experienced real estate professionals is here to assist you every step of the way. Meet our agents and advisors who are passionate about delivering exceptional service and helping you achieve your real estate goals.
                </p>
                {/* Add team member cards or information here */}
                </div>

                {/* Vision Card */}
                <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
                <p className="text-lg">
                    We envision a future where every person finds their ideal home or investment property, creating lasting memories, financial stability, and a sense of belonging in the beautiful city of Portland.
                </p>
                </div>
            </div>
        </div>
    );
};

export default About;