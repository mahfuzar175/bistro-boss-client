import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTile from "../../../components/SectionTitle/SectionTile";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSercure from "../../../hooks/useAxiosSercure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSercure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted.`,
                        icon: "success",
                    });
                }
            }
        });
    }

  return (
    <div>
      <SectionTile
        subHeading="---Hurry Up!---"
        heading="MANAGE ALL ITEMS"
      ></SectionTile>
      <div>
      <div className="overflow-x-auto">
        <table className="table w-full ">
          {/* head */}
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
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
                  <Link to={`/dashboard/updateItem/${item._id}`}>
                  <button
                    className="btn btn-lg text-white bg-green-700 hover:text-black"
                  >
                    <FaEdit></FaEdit>{" "}
                  </button>
                  </Link>
                </th>
                <th>
                <button
                    onClick={() => handleDeleteItem(item)}
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
    </div>
  );
};

export default ManageItems;
