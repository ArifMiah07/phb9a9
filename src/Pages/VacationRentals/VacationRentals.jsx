import { useBannerContext } from "../../Contexts/BannerContext";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import 'animate.css';


const VacationRentals = () => {
    const {vacationData} = useBannerContext();
    console.log(vacationData);
    return (
        <div className="lg:w-[1170px] mx-auto my-12">
            <h1  className="text-center text-3xl tracking-wider text-[#222222] font-medium  animate__animated animate__bounce animate__delay-2s">Vacation Rentals Property</h1>
            <p className="text-[#5C727D] my-6 text-center leading-6 animate__animated animate__bounce animate__delay-2s ">These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.</p>
            
            <div className="p-6 flex justify-center">
                
                <Swiper
                modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                breakpoints={{
                    576: {
                      width: 576,
                      slidesPerView: 1,
                    },
                    768: {
                      width: 768,
                      slidesPerView: 2,
                    },
                  }}
                loop={true}
                autoplay = {{delay : 2610}}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    {vacationData.map((data) => (
                    <SwiperSlide className="flex flex-col md:flex md:flex-row" key={data.id}>
                        <div className="container lg:p-8">
                            <div className="">
                                <img className=" " src={data.imgUrl} alt="" />
                            </div>
                            <div>
                                <h1>{data.title}</h1>
                                <p>{data.price}</p>
                                <p>{data.description}</p>
                            </div>
                        
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                
            </div>
        </div>
    );
};

export default VacationRentals;