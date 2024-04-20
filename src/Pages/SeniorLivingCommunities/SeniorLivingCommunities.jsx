import { useBannerContext } from "../../Contexts/BannerContext";


const SeniorLivingCommunities = () => {

    const {bannerData} = useBannerContext();
    console.log(bannerData);
    return (
        <div>
            <h1>Featured Properties for Senior Living Communities</h1>
            <p>Here are two listings displayed with the featured property shortcode, which you can use when you have some special properties to present.</p>
            <div className="p-5 gap-5 grid grid-cols-1 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2">
                {
                    bannerData.slice(0, 2).map(data=> (<>
                    <div key={data.id} className=" border border-red-500 ">
                        <div className="w-1/2 h-fit">
                            <img src={data.url} className="h-fit border border-red-500" alt="" />
                        </div>
                    </div>
                    </>))
                }
            </div>
        </div>
    );
};

export default SeniorLivingCommunities;