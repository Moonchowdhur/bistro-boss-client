import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import UseMenu from "../../../hooks/UseMenu";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const [axiosSecure] = useAxiosSecure();
  const [menu, , refetch] = UseMenu();
  const handleDeleteBtn = (id) => {
    console.log(id);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        //   swal("Poof! Your imaginary file has been deleted!", {
        //     icon: "success",
        //   });
        axiosSecure.delete(`/menu/${id}`).then((data) => {
          console.log(data.data);

          if (data.data.deletedCount > 0) {
            refetch();
            swal("Item has been deleted!", {
              icon: "success",
            });
          }
        });
      }
    });
  };

  console.log(menu);
  return (
    <div className="w-full  ">
      <div>
        <SectionTitle
          heading={"MANAGE ALL ITEMS"}
          subheading={"Hurry Up"}
        ></SectionTitle>
        <div className="bg-white mx-auto text-center my-5 ">
          <h2 className="text-3xl font-medium">Total Items:{menu.length} </h2>
          {/* table start */}
          <div className="overflow-x-auto pt-3 md:mx-5 w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th className="bg-[#E7B10A] text-lg font-bold">#</th>
                  <th className="bg-[#E7B10A] text-lg font-bold">ITEM IMAGE</th>
                  <th className="bg-[#E7B10A] text-lg font-bold">ITEM NAMe</th>
                  <th className="bg-[#E7B10A] text-lg font-bold">PRICE</th>
                  <th className="bg-[#E7B10A] text-lg font-bold">Action</th>
                  <th className="bg-[#E7B10A] text-lg font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((u, index) => (
                  <tr key={u._id}>
                    <th>{index + 1}</th>
                    <td>
                      <img src={u.image} className="w-10 h-10" alt="" />
                    </td>
                    <td>
                      {u.name}
                      <br />
                    </td>
                    <td>{u.price}</td>
                    <th>
                      <button className=" btn bg-orange-500 text-white btn-xs px-3 shadow-lg border-0 text-2xl">
                        <BsFillPencilFill />
                      </button>
                    </th>
                    <th>
                      <button
                        onClick={() => handleDeleteBtn(u._id)}
                        className=" btn bg-red-500 text-white btn-xs px-3 shadow-lg border-0 text-2xl"
                      >
                        <AiFillDelete />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* table end */}
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
