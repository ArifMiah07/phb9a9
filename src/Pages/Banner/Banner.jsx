
import { useBannerContext } from "../../Contexts/BannerContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import './Banner.css'


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
                        <div>
                        <img className="relative z-0" src={data.url} alt="" />
                        <div className="absolute z-50 -right-1/2 -top-1/2 sm:-right-1/2 sm:-top-1/2 md:-right-0 md:-top-0  mx-auto">
                        <h1 className=" text-center elementor-heading-title  ">Find Your Dream Home</h1>
                        <p className="elementor-heading-para"> We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services to our worldwide clients.</p>    
                        </div>
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                
            </div>
        </>
    );
};

export default Banner;