import { FaEdit, FaTrash } from "react-icons/fa";
import SectionTile from "../../../components/SectionTitle/SectionTile";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
    const [menu] = useMenu();

    const handleDeletedItem = (item) =>{

    }

    const handleUpdateItem = (item) =>{

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
                  <button
                     onClick={() => handleUpdateItem(item)}
                    className="btn btn-lg text-white bg-green-700 hover:text-black"
                  >
                    <FaEdit></FaEdit>{" "}
                  </button>
                </th>
                <th>
                <button
                    onClick={() => handleDeletedItem(item)}
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
