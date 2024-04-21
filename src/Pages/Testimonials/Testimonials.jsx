// import TestimonialsCard from "../../Components/TestimonialsCard/TestimonialsCard";
import TestimonialsCard from "../../Components/TestimonialsCard/TestimonialsCard";
import { useBannerContext } from "../../Contexts/BannerContext";


const Testimonials = () => {

    const {testimonials} = useBannerContext();
    console.log(testimonials);
    return (
        <div>
            <div className="flex flex-wrap justify-center">
            {testimonials.map((t) => (
                <TestimonialsCard key={t.id} t={t}></TestimonialsCard>
            ))}
        </div>
        </div>
    );
};

export default Testimonials;