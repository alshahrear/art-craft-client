import { useLoaderData } from "react-router-dom";
import MyArtCard from "../MyArtCard/MyArtCard";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyArtCraft = () => {
    const [crafts, setCrafts] = useState(useLoaderData());  // Added state for crafts
    const [selectedCraft, setSelectedCraft] = useState(null);

    const handleUpdateModal = (craft) => {
        setSelectedCraft(craft);
        document.getElementById('my_modal_1').showModal();
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const updatedCraft = {
            name: form.name.value,
            subcategory: form.subcategory.value,
            description: form.description.value,
            processingTime: form.processingTime.value,
            price: form.price.value,
            rating: form.rating.value,
            customization: form.customization.value,
            stockStatus: form.stockStatus.value,
            userName: form.userName.value,
            userEmail: form.userEmail.value,
            photoURL: form.photoURL.value
        };

        fetch(`http://localhost:5000/craft/${selectedCraft._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedCraft)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire('Success!', 'Craft updated successfully!', 'success');
                    // Update the crafts list to reflect the updated craft
                    setCrafts(crafts.map(craft =>
                        craft._id === selectedCraft._id ? { ...craft, ...updatedCraft } : craft
                    ));
                    setSelectedCraft(null);
                }
            });
    };

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/craft/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your craft has been deleted.",
                                icon: "success"
                            });
                            // Update the crafts list to reflect the deletion
                            setCrafts(crafts.filter(craft => craft._id !== _id));
                        }
                    });
            }
        });
    };

    return (
        <div className="w-[1200px] mx-auto mt-10 mb-40">
            <Helmet>
                <title>My Art Craft</title>
            </Helmet>
            <p className="text-center -mt-5 mb-5"><span className="bg-[#b1f315] text-2xl font-semibold rounded-full px-4 py-2">My Art & Craft List</span></p>
            <div className="grid grid-cols-2 gap-x-10 gap-y-36">
                {crafts.map(craft => <MyArtCard key={craft._id} craft={craft} handleUpdateModal={handleUpdateModal} handleDelete={handleDelete} />)}
            </div>

            {/* Modal */}
            {selectedCraft && (
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box w-[800px] max-w-none">
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn text-2xl btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                        </div>
                        <h2 className="text-center text-2xl font-semibold mb-2">Update Your Craft</h2>
                        <form className="space-y-2 space-x-2" onSubmit={handleUpdate}>
                            <fieldset className="flex items-center text-lg">
                                <div><label>Item Name</label><input type="text" name="name" className="input w-[350px]" defaultValue={selectedCraft.name} /></div>
                                <div className="ml-12"><label>Subcategory</label><input type="text" name="subcategory" className="input w-[350px]" defaultValue={selectedCraft.subcategory} /></div>
                            </fieldset>
                            <fieldset className="flex items-center text-lg">
                                <div><label>Description</label><input type="text" name="description" className="input w-[350px]" defaultValue={selectedCraft.description} /></div>
                                <div className="ml-12"><label>Processing Time</label><input type="text" name="processingTime" className="input w-[350px]" defaultValue={selectedCraft.processingTime} /></div>
                            </fieldset>
                            <fieldset className="flex items-center text-lg">
                                <div><label>Price</label><input type="text" name="price" className="input w-[350px]" defaultValue={selectedCraft.price} /></div>
                                <div className="ml-12"><label>Rating</label><input type="text" name="rating" className="input w-[350px]" defaultValue={selectedCraft.rating} /></div>
                            </fieldset>
                            <fieldset className="flex items-center text-lg">
                                <div><label>Customization</label><input type="text" name="customization" className="input w-[350px]" defaultValue={selectedCraft.customization} /></div>
                                <div className="ml-12"><label>Stock Status</label><input type="text" name="stockStatus" className="input w-[350px]" defaultValue={selectedCraft.stockStatus} /></div>
                            </fieldset>
                            <fieldset className="flex items-center text-lg">
                                <div><label>User Name</label><input type="text" name="userName" className="input w-[350px]" defaultValue={selectedCraft.userName} /></div>
                                <div className="ml-12"><label>User Email</label><input type="text" name="userEmail" className="input w-[350px]" defaultValue={selectedCraft.userEmail} /></div>
                            </fieldset>
                            <fieldset className="flex items-center text-lg">
                                <div><label>Photo URL</label><input type="text" name="photoURL" className="input w-[750px]" defaultValue={selectedCraft.photoURL} /></div>
                            </fieldset>
                            <button className="btn mt-1 hover:bg-[#c5ff33] bg-[#b1f315] w-full" type="submit">Update</button>
                        </form>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default MyArtCraft;
