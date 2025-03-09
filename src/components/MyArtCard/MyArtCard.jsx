import Swal from "sweetalert2";

const MyArtCard = ({ craft, handleUpdateModal, handleDelete }) => {
    const { _id, name, subcategory, description, price, rating, customization, processingTime, userName, userEmail, photoURL, stockStatus } = craft;

    return (
        <div className="relative ">
            <div>
                <img className="w-[1000px] border rounded-2xl border-gray-100 h-[350px]" src={photoURL} alt="" />
            </div>
            <div className="absolute -mt-28 ml-14 px-10 py-10 space-y-2 bg-[#f0f6fa] rounded-xl">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <div className="flex gap-10 text-gray-700 text-lg font-semibold">
                    <p>Price: <span>{price}</span></p>
                    <p>Rating: <span>{rating}</span></p>
                </div>
                <div className="flex gap-10 text-gray-700 text-lg font-semibold">
                    <p>Customization: {customization}</p>
                    <p>Stock Status: {stockStatus}</p>
                </div>
                <div className="flex justify-between">
                    <button className="btn hover:bg-[#c5ff33] bg-[#b1f315]" onClick={() => handleUpdateModal(craft)}>Update</button>
                    <button onClick={() => handleDelete(_id)} className="btn bg-[#f18148] hover:bg-amber-500">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyArtCard;
