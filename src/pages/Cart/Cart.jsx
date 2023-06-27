import React from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import useCart from "../../hooks/UseCart";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cart, refetch] = useCart();

  const handleDeleteBtn = (id) => {
    swal({
      title: "Want To Delete?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        //   swal("Poof! Your imaginary file has been deleted!", {
        //     icon: "success",
        //   });

        fetch(
          `https://bistro-boss-restaurant-server-roan.vercel.app/carts/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            refetch();
            swal("Item has been deleted!", {
              icon: "success",
            });
          });
      }
    });
  };

  const totalAmount = cart?.reduce((totalPrice, currentProduct) => {
    return (totalPrice = totalPrice + currentProduct.price);
  }, 0);
  console.log(totalAmount);
  return (
    <div className="bg-[#F0F0F0] w-full h-full ">
      <div>
        {/* title */}
        <SectionTitle
          heading={"WANNA ADD MORE?"}
          subheading={"My Cart"}
        ></SectionTitle>
      </div>
      {/* orders */}
      <div className="bg-white my-5  mx-8 p-3">
        {/* first para */}
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-xl">Total orders:{cart.length} </h2>
          <h2 className="font-bold text-xl">Total Price:{totalAmount} </h2>
          <Link to="/dashboard/payment">
            <button className="bg-[#E7B10A] font-bold  px-3 rounded-lg ">
              Pay
            </button>
          </Link>
        </div>
        {/* first para  end*/}
        {/* table start */}
        <div className="overflow-x-auto w-full">
          <table className="table my-8 w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#E7B10A] text-xl font-bold"></th>
                <th className="bg-[#E7B10A] text-lg font-bold">Item image</th>
                <th className="bg-[#E7B10A] text-lg font-bold">Item name</th>
                <th className="bg-[#E7B10A] text-lg font-bold">Price</th>
                <th className="bg-[#E7B10A] text-lg font-bold">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={item.image}
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button
                      onClick={() => handleDeleteBtn(item._id)}
                      className="btn bg-red-500 border-0 "
                    >
                      <AiFillDelete className="text-2xl" />
                    </button>
                  </th>
                </tr>
              ))}
              {/* <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
