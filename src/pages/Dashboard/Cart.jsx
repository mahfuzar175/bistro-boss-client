import { FaTrash } from "react-icons/fa";
import SectionTile from "../../components/SectionTitle/SectionTile";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSercure from "../../hooks/useAxiosSercure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSercure();

  const handleDeletedCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTile
        subHeading="---My Cart---"
        heading="WANNA ADD MORE?"
      ></SectionTile>
      <div className="flex justify-around mb-4">
        <h2 className="text-3xl font-semibold">TOTAL ITEMS: {cart.length}</h2>
        <h2 className="text-3xl font-semibold">TOTAL PRICE: {totalPrice}</h2>
        {cart.length ? <Link to='/dashboard/payment'>
          <button className="btn btn-primary bg-[#D1A054] border-none hover:bg-red-600">
            Pay
          </button>
        </Link> :
        <button disabled className="btn btn-primary bg-[#D1A054] border-none hover:bg-red-600">
        Pay
      </button>
        }
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>ITEM PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h2>{item.name}</h2>
                </td>
                <th>
                  <h2>${item.price}</h2>
                </th>
                <th>
                  <button
                    onClick={() => handleDeletedCart(item._id)}
                    className="btn btn-lg text-white bg-red-700 hover:text-black"
                  >
                    <FaTrash></FaTrash>{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
