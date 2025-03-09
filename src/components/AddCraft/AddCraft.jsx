import Swal from 'sweetalert2'


const AddCraft = () => {

    const handleAddCraft = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const subcategory = form.subcategory.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processingTime.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const photoURL = form.photoURL.value;
        const stockStatus = form.stockStatus.value;

        const addCraft = {name, subcategory, description, price, rating, customization, processingTime, userName, userEmail, photoURL, stockStatus}

        console.log(addCraft);
        fetch('http://localhost:5000/craft', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCraft)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft item added successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            };
            form.reset();
        })
    }


    return (
        <div className=" bg-[#f0f6fa]">
            <div className="w-[1200px] mx-auto">
                <div className="card-body">
                    <h2 className="text-3xl text-center mb-3 font-bold">Add Craft Item</h2>
                    {/* another */}
                    <form onSubmit={handleAddCraft} className='space-y-2'>
                        <fieldset className="flex items-center text-lg">
                            <div className=" ">
                                <label className="fieldset-label">Item Name</label>
                                <input type="text" name="name" className="input w-[500px]" placeholder="Item Name" />
                            </div>
                            <div className="ml-16">
                                <label className="fieldset-label">Subcategory Name</label>
                                <input type="text" name="subcategory" className="input w-[500px]" placeholder="Subcategory Name" />
                            </div>
                        </fieldset>
                        {/* another */}
                        <fieldset className="flex items-center text-lg">
                            <div className="">
                                <label className="fieldset-label">Short Description</label>
                                <input type="text" name="description" className="input w-[500px]" placeholder="Short Description" />
                            </div>
                            <div className="ml-16">
                                <label className="fieldset-label">Processing Time</label>
                                <input type="text" name="processingTime" className="input w-[500px]" placeholder="Processing Time" />
                            </div>
                        </fieldset>
                        {/* another */}
                        <fieldset className="flex items-center text-lg">
                            <div className="">
                                <label className="fieldset-label">Price</label>
                                <input type="text" name="price" className="input w-[500px]" placeholder="Price" />
                            </div>
                            <div className="ml-16">
                                <label className="fieldset-label">Rating</label>
                                <input type="text" name="rating" className="input w-[500px]" placeholder="Rating" />
                            </div>
                        </fieldset>
                        <fieldset className="flex items-center text-lg">
                            <div className="">
                                <label className="fieldset-label">Customization</label>
                                <input
                                    type="text"
                                    name="customization"
                                    className="input w-[500px]"
                                    placeholder="Yes/No"
                                    list="customization-options"
                                />
                                <datalist id="customization-options">
                                    <option value="Yes" />
                                    <option value="No" />
                                </datalist>
                            </div>
                            <div className="ml-16">
                                <div className="">
                                    <label className="fieldset-label">Stock Status</label>
                                    <input
                                        type="text"
                                        name="stockStatus"
                                        className="input w-[500px]"
                                        placeholder="In stock / Made to Order"
                                        list="stock-options"
                                    />
                                    <datalist id="stock-options">
                                        <option value="In stock" />
                                        <option value="Made to Order" />
                                    </datalist>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset className="flex items-center text-lg">
                            <div className="">
                                <label className="fieldset-label">User Name</label>
                                <input type="text" name="userName" className="input w-[500px]" placeholder="User Name" />
                            </div>
                            <div className="ml-16">
                                <label className="fieldset-label">User Email</label>
                                <input type="text" name="userEmail" className="input w-[500px]" placeholder="User Email" />
                            </div>
                        </fieldset>
                        <fieldset className="flex items-center text-lg">
                            <div className="">
                                <label className="fieldset-label">Photo URL</label>
                                <input type="text" name="photoURL" className="input w-[1070px]" placeholder="Photo URL" />
                            </div>
                        </fieldset>
                        <input type="submit" value="Add " className="btn w-[1070px] hover:bg-lime-500 bg-[#b1f315] mt-3" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCraft;