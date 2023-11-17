import { useForm } from "react-hook-form";
import SectionTile from "../../../components/SectionTitle/SectionTile";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSercure from "../../../hooks/useAxiosSercure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSercure();
  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile,{
        headers: {
            'Content-Type' : 'multipart/form-data'
        }
    });
    if(res.data.success){
        // now send the menu item data to the server with the image url
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: res.data.data.display_url

        }
        // 
        const menuRes = await axiosSecure.post('/menu', menuItem);
        console.log(menuRes.data);
        if(menuRes.data.insertedId){
            // show success popup
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the menu`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    }
    console.log('with image url', res.data);
  };
  return (
    <div>
      <SectionTile
        subHeading="---What's new?---"
        heading="MANAGE ADD AN ITEM"
      ></SectionTile>
      <form
        className="p-8 bg-slate-200"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", {required: true})}
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-6">
          {/* category */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
            defaultValue='default'
              {...register("category", {required: true})}
              className="select select-bordered w-full"
            >
              <option disabled value='default'>
                Select a category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>

          {/* price */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", {required: true})}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* recipe details */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
          {...register("recipe", {required: true})}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
          ></textarea>
        </div>
        <div className="mt-4">
        <input {...register("image", {required: true})} type="file" className="file-input w-full max-w-xs" />
        </div>
        <button className="btn mt-4 text-white  bg-[#B58130] hover:bg-green-800">Add Item <FaUtensils></FaUtensils> </button>
      </form>
    </div>
  );
};

export default AddItems;
