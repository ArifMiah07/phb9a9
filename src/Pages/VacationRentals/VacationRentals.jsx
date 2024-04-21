import { useBannerContext } from "../../Contexts/BannerContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';


const VacationRentals = () => {
    const {bannerData} = useBannerContext();
    console.log(bannerData);
    return (
        <div>
            <h1>Vacation Rentals Property</h1>
            <p>These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.</p>
            
            <div className="border mx-auto border-red-950 w-10/12 flex justify-center">
                
                <Swiper
                modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
            
                loop={true}
                autoplay = {{delay : 2610}}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {bannerData.map((data) => (
                    <SwiperSlide key={data.id}>
                        <div className="">
                            <div className="">
                                <img className=" " src={data.url} alt="" />
                            </div>
                            <div></div>
                        
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                
            </div>
        </div>
    );
};

export default VacationRentals;