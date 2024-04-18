

const SingleFamilyHouseCard = ({card}) => {
    return (
        <div className="flex gap-4 text-black w-full h-fit bg-cover rounded-[32px] bg-center  ">
                <img src={card.imgUrl} className="w-[100px] h-[100px] bg-center bg-cover rounded-lg " alt="" />
            <div className="flex flex-col justify-evenly">
                <h1 className="flex text-lg text-[#222] font-semibold ">{card.location}</h1>
                <p className="font-medium  text-[#b5acac] ">{card.listing} listing</p>
            </div>
        </div>
    );
};

export default SingleFamilyHouseCard;