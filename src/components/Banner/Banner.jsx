import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";
import banner4 from "../../assets/banner4.png";
import banner5 from "../../assets/banner5.png";


const Banner = () => {
    return (
        <div className="bg-[#f0f6fa]">
            <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
                <img className="w-[500px] h-[500px] aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={banner1} alt="Image 1" />
                <img className="w-[500px] h-[500px] aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={banner2} alt="Image 1" />
                <img className="w-[500px] h-[500px] aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={banner3} alt="Image 1" />
                <img className="w-[500px] h-[500px] aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={banner4} alt="Image 1" />
                <img className="w-[500px] h-[500px] aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={banner5} alt="Image 1" />
            </div>
        </div>
    );
};

export default Banner;