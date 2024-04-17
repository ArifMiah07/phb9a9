
import { useBannerContext } from "../../Contexts/BannerContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';


const Banner = () => {

    const { bannerData } = useBannerContext();

    console.log(bannerData[0]);

    return (
        <>
            <div className="border mx-auto border-red-950 w-10/12 flex justify-center">
                
                <Swiper
                modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay = {{delay : 2610}}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {bannerData.map((data) => (
                    <SwiperSlide key={data.id}>
                        <img src={data.url} alt="" />
                    </SwiperSlide>
                ))}
                </Swiper>
                
            </div>
        </>
    );
};

export default Banner;