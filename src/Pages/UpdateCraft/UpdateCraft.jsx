import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateCraft = () => {
  const loader = useLoaderData();
  const {
    _id,
    image,
    item_name,
    subcategory_name,
    short_description,
    price,
    rating,
    customization,
    processing_time,
    stock_status,
    user_name,
  } = loader;

  const handleUpdateCraft = (event) => {
    event.preventDefault();

    const form = event.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategory.value;
    const shortDescription = form.shortDescription.value;
    const price = parseFloat(form.price.value);
    const rating = parseFloat(form.rating.value);
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const name = form.name.value;

    const updateCraft = {
      image,
      item_name: itemName,
      subcategory_name: subcategoryName,
      short_description: shortDescription,
      price,
      rating,
      customization,
      processing_time: processingTime,
      stock_status: stockStatus,
      user_name: name,
    };
    console.log(updateCraft);

    fetch(`https://assignment-ten-server-lilac.vercel.app/items/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Item updated successfully",
            icon: "success",
            confirmButtonText: "Go Back",
          });
        }
      });
  };

  return (
    <div className='bg-[#F4F3F0] p-24 lg:w-1/2 mx-auto h-fit py-7 lg:py-3 lg:my-5 border border-yellow-700'>
      <h2 className='text-4xl font-extrabold mb-6 text-center mt-0'>
        Update Your Craft
      </h2>
      <form onSubmit={handleUpdateCraft}>
        {/* form - name and quantity row */}
        <div className='md:flex gap-4 md:mb-6'>
          <div className='form-control md:w-1/2'>
            <label className='label'>Image URL</label>
            <label className='input-group'>
              <input
                defaultValue={image}
                name='image'
                type='text'
                placeholder='image URL'
                className='input input-bordered w-full text-slate-400'
              />
            </label>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Craft Name</label>
            <label className='input-group'>
              <input
                defaultValue={item_name}
                name='itemName'
                type='text'
                placeholder='Item name'
                className='input input-bordered w-full text-slate-400'
              />
            </label>
          </div>
        </div>
        {/* form - supplier and taste row */}
        <div className='md:flex gap-4 md:mb-6'>
          <div className='form-control md:w-1/2'>
            <label className='form-control w-full'>
              {/* <div className='label'> */}
              <span className='label'>Subcategory Name</span>
              {/* </div> */}
              <select
                className='select select-bordered'
                name='subcategory'
                defaultValue={subcategory_name}
              >
                <option
                  disabled
                  selected
                >
                  Pick one subcategory
                </option>
                <option>Landscape Painting</option>
                <option>Portrait Drawing</option>
                <option>Watercolor Painting</option>
                <option>Oil Painting</option>
                <option>Charcoal Sketching</option>
                <option>Cartoon Drawing</option>
              </select>
            </label>
            {/* <label className='label'>Subcategory Name</label>
            <select
              name='subcategory'
              id='subcategory'
            >
              <option
                className='input input-bordered w-full input-group h-full'
                placeholder='Select Subcategory'
              >
                Landscape Painting
              </option>
              <option>Portrait Drawing</option>
              <option>Watercolor Painting</option>
              <option>Oil Painting</option>
              <option>Charcoal Sketching</option>
              <option>Cartoon Drawing</option>
            </select> */}
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Description</label>
            <label className='input-group'>
              <input
                defaultValue={short_description}
                name='shortDescription'
                type='text'
                placeholder='Description'
                className='input input-bordered w-full text-slate-400'
              />
            </label>
          </div>
        </div>
        {/* form - category and details row */}
        <div className='md:flex gap-4 md:mb-6'>
          <div className='form-control md:w-1/2'>
            <label className='label'>Price</label>
            <label className='input-group'>
              <input
                defaultValue={price}
                name='price'
                type='text'
                placeholder='Price'
                className='input input-bordered w-full text-slate-400'
              />
            </label>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Rating</label>
            <label className='input-group'>
              <input
                defaultValue={rating}
                name='rating'
                type='text'
                placeholder='Rating'
                className='input input-bordered w-full text-slate-400'
              />
            </label>
          </div>
        </div>
        {/* form - category and details row */}
        <div className='md:flex gap-4 md:mb-6'>
          <div className='form-control md:w-1/2'>
            <label className='form-control w-full'>
              {/* <div className='label'> */}
              <span className='label'>Customization option</span>
              {/* </div> */}
              <select
                className='select select-bordered'
                name='customization'
                defaultValue={customization}
              >
                <option
                  disabled
                  selected
                >
                  Pick one
                </option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </label>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Processing Time</label>
            <label className='input-group'>
              <input
                defaultValue={processing_time}
                name='processingTime'
                type='text'
                placeholder='Processing time'
                className='input input-bordered w-full text-slate-400'
              />
            </label>
          </div>
        </div>

        <div className='md:flex gap-4 md:mb-6'>
          <div className='form-control md:w-1/2'>
            <label className='form-control w-full'>
              {/* <div className='label'> */}
              <span className='label'>Stock Status</span>
              {/* </div> */}
              <select
                defaultValue={stock_status}
                className='select select-bordered'
                name='stockStatus'
              >
                <option
                  disabled
                  selected
                >
                  Pick one
                </option>
                <option>In stock</option>
                <option>Made to Order</option>
              </select>
            </label>
          </div>
          <div className='form-control md:w-1/2'>
            <label className='label'>Username</label>
            <label className='input-group'>
              <input
                defaultValue={user_name}
                name='name'
                type='text'
                placeholder='Username'
                className='input input-bordered w-full text-slate-400'
              />
            </label>
          </div>
        </div>
        <input
          type='submit'
          className='btn btn-block mt-8 md:mt-0 bg-orange-800 text-white md:px-4 md:py-2 text-sm rounded-xl hover:bg-yellow-400 border-2 border-white'
          value='Update Craft'
        />
      </form>
    </div>
  );
};

export default UpdateCraft;
