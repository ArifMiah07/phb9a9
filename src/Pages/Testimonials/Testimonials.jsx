// import TestimonialsCard from "../../Components/TestimonialsCard/TestimonialsCard";
import TestimonialsCard from "../../Components/TestimonialsCard/TestimonialsCard";
import { useBannerContext } from "../../Contexts/BannerContext";
import 'animate.css';

const Testimonials = () => {

    const {testimonials} = useBannerContext();
    console.log(testimonials);
    return (
        <div className="lg:w-[1170px] mx-auto my-12">
            <h1 className="text-center text-3xl tracking-wider text-[#222222] font-medium animate__animated animate__bounce animate__delay-2s">Testimonials</h1>
            <p className="text-[#5C727D] my-6 text-center leading-6 animate__animated animate__bounce animate__delay-2s">Publish the best of your client testimonials and let the world know what a great agent or real estate agency you are. Testimonials build trust.</p>
            <div className="flex flex-wrap justify-center">
            {testimonials.map((t) => (
                <TestimonialsCard key={t.id} t={t}></TestimonialsCard>
            ))}
        </div>
        </div>
    );
};

export default Testimonials;