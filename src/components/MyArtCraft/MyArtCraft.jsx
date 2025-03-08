import banner1 from "../../assets/banner1.png";

const MyArtCraft = () => {
    return (
        <div className="w-[1200px] mx-auto grid grid-cols-2 gap-x-10 gap-y-36 mt-10 mb-40">
            <div className="relative ">
                <div>
                    <img className="w-[1000px] border rounded-2xl border-gray-100 h-[350px]"
                        src={banner1}
                        alt="" />
                </div>
                <div className="absolute -mt-28 ml-14 px-10 py-10 space-y-2 bg-[#f0f6fa] rounded-xl">
                    <h3 className="text-2xl font-semibold">Handmade Wooden Jewelry Box</h3>
                    <div className="flex gap-10 text-gray-700 text-lg font-semibold">
                        <p>Price: $35</p>
                        <p>Rating: 4.8</p>
                    </div>
                    <div className="flex gap-10 text-gray-700 text-lg font-semibold">
                        <p>Customization: Yes</p>
                        <p>Stock Status: In stock</p>
                    </div>
                    <div className="flex justify-between">
                        <button className="btn bg-[#b1f315]">Update</button>
                        <button className="btn bg-[#f18148]">Delete</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default MyArtCraft;