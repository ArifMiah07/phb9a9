import { useBannerContext } from "../../Contexts/BannerContext";
import SeniorLivingCard from "../../Components/SeniorLivingCard/SeniorLivingCard";
import 'animate.css';

const SeniorLivingCommunities = () => {

    const {seniorLC} = useBannerContext();
    console.log(seniorLC);
    return (
        <div className="lg:w-[1170px] mx-auto my-12">
            <h1  className="text-center text-3xl tracking-wider text-[#222222] font-medium animate__animated animate__bounce animate__delay-2s">Featured Properties for Senior Living Communities</h1>
            <p className="text-[#5C727D] my-6 text-center leading-6 animate__animated animate__bounce animate__delay-2s">Here are two listings displayed with the featured property shortcode, which you can use when you have some special properties to present.</p>
            <div className="gap-6 p-6 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
                {seniorLC.slice(0, 2).map((data, idx) => (
                    <SeniorLivingCard key={idx} data={data} />
                ))}
            </div>
        </div>
    );
};

export default SeniorLivingCommunities;