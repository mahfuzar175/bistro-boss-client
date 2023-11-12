
const FoodCard = ({item}) => {
    const{name, image, recipe, price} = item;
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 mx-auto md:mx-0 md:col-span-1 lg:col-span-1 bg-clip-border">
          <div>
            <img className="w-[400px] h-[300px]" src={image} alt="" />
          </div>
          <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white px-2 py-1">${price}</p>
          <div className="p-6 text-center">
            <h2 className="py-2 font-semibold text-xl text-black">{name}</h2>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-black">
              {recipe}
            </p>
          </div>
          <div className="p-6 pt-0 flex justify-center items-center">
            <button
              className="block btn btn-outline border-0 border-orange-400 bg-slate-200 border-b-4 w-1/2 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-yellow-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Add to Cart
            </button>
          </div>
        </div>
    );
};

export default FoodCard;