import SHSection from "../../Components/SHSection/SHSection";
import { useBannerContext } from "../../Contexts/BannerContext";


const StudentHousing = () => {


    const {bannerData} = useBannerContext();
    console.log(bannerData);
    return (
        <>
            <div className="lg:w-[1170px] mx-auto px-4 my-12">
                <h1 className="text-center text-3xl font-bold mb-6">Featured Properties For Student Housing</h1>
                <p className="text-center text-lg mb-8">Discover the latest properties available for sale. From stunning beach houses to cozy countryside cottages, find your dream home today!</p>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {bannerData.map((data) => (
                        <SHSection key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default StudentHousing;