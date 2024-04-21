import TestimonialsCard from "../../Components/TestimonialsCard/TestimonialsCard";
import { useBannerContext } from "../../Contexts/BannerContext";


const Testimonials = () => {

    const {testimonials} = useBannerContext();
    console.log(testimonials);
    return (
        <div>
            <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial) => (
                <TestimonialsCard key={testimonial.id} testimonial={testimonial} />
            ))}
        </div>
        </div>
    );
};

export default Testimonials;