


const AddCraft = () => {
    return (
        <div className=" bg-[#f0f6fa]">
            <form className="w-[1200px] mx-auto">
                <div className="card-body">
                    <h2 className="text-3xl text-center mb-3 font-bold">Add Craft Item</h2>
                    {/* another */}
                    <fieldset className="flex items-center text-lg">
                        <div className=" ">
                            <label className="fieldset-label">Item Name</label>
                            <input type="text" name="name" className="input w-[500px]" placeholder="Item Name" />
                        </div>
                        <div className="ml-16">
                            <label className="fieldset-label">Subcategory Name</label>
                            <input type="text" name="quantity" className="input w-[500px]" placeholder="Subcategory Name" />
                        </div>
                    </fieldset>
                    {/* another */}
                    <fieldset className="flex items-center text-lg">
                        <div className="">
                            <label className="fieldset-label">Short Description</label>
                            <input type="text" name="supplier" className="input w-[500px]" placeholder="Short Description" />
                        </div>
                        <div className="ml-16">
                            <label className="fieldset-label">Taste</label>
                            <input type="text" name="taste" className="input w-[500px]" placeholder="Taste" />
                        </div>
                    </fieldset>
                    {/* another */}
                    <fieldset className="flex items-center text-lg">
                        <div className="">
                            <label className="fieldset-label">Price</label>
                            <input type="text" name="category" className="input w-[500px]" placeholder="Price" />
                        </div>
                        <div className="ml-16">
                            <label className="fieldset-label">Rating</label>
                            <input type="text" name="details" className="input w-[500px]" placeholder="Rating" />
                        </div>
                    </fieldset>
                    <fieldset className="flex items-center text-lg">
                        <div className="">
                            <label className="fieldset-label">Customization</label>
                            <input
                                type="text"
                                name="category"
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
                            <label className="fieldset-label">Processing Time</label>
                            <input type="text" name="details" className="input w-[500px]" placeholder="Processing Time" />
                        </div>
                    </fieldset>
                    <fieldset className="flex items-center text-lg">
                        <div className="">
                            <label className="fieldset-label">User Name</label>
                            <input type="text" name="category" className="input w-[500px]" placeholder="User Name" />
                        </div>
                        <div className="ml-16">
                            <label className="fieldset-label">User Email</label>
                            <input type="text" name="details" className="input w-[500px]" placeholder="User Email" />
                        </div>
                    </fieldset>
                    <fieldset className="flex items-center text-lg">
                        <div className="">
                            <label className="fieldset-label">Photo URL</label>
                            <input type="text" name="category" className="input w-[500px]" placeholder="Photo URL" />
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

                    <input type="submit" value="Add " className="btn w-[1070px] bg-[#b1f315] mt-3" />
                </div>
            </form>
        </div>
    );
};

export default AddCraft;