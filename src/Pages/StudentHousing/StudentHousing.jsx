import SHSection from "../../Components/SHSection/SHSection";
import { useBannerContext } from "../../Contexts/BannerContext";


const StudentHousing = () => {


    const {bannerData} = useBannerContext();
    console.log(bannerData);
    return (
        <>
            <h1>Gorgeous Home for Sale in Jersey</h1>
            <p>This property is mostly wooded and sits high on a hilltop overlooking the Mohawk River Valley. Located right in the heart of Upsta ...
                discover more
            </p>
            <div className="grid lg:grid-cols-3 lg:grid-rows-2">
            {
                bannerData.slice(0, 5).map((d)=> <SHSection key={d.id} d={d}></SHSection>)
            }
            </div>
        </>
    );
};

export default StudentHousing;