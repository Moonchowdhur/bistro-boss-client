import { useQuery } from "@tanstack/react-query";
import React from "react";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import { AiFillDelete } from "react-icons/ai";
import { FaUserShield } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const Allusers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: user = [], refetch } = useQuery(["uesrs"], async () => {
    // const res = await fetch("http://localhost:5000/users");
    const res = await axiosSecure.get("/users");
    // return res.json();
    return res.data;
  });

  console.log(user);
  const handleMakeAdmin = (user) => {
    console.log(user._id);
    fetch(
      `https://bistro-boss-restaurant-server-roan.vercel.app/users/admin/${user._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          swal(`${user.name} is admin now`);
        }

        console.log(data);
      });
  };

  return (
    <div className="w-full h-full ">
      <Helmet>
        <title>Bistro Boss || Allusers</title>
      </Helmet>
      <SectionTitle
        heading={"MANAGE ALL USERS"}
        subheading={"How Many"}
      ></SectionTitle>
      <div className="p-4 mx-auto pt-3 ">
        <h2 className="text-center tracking-wider font-bold text-xl">
          TOTAL USERS:{user.length}
        </h2>
        <div>
          <div className="overflow-x-auto pt-3 w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th className="bg-[#E7B10A] text-lg font-bold">#</th>
                  <th className="bg-[#E7B10A] text-lg font-bold">Name</th>
                  <th className="bg-[#E7B10A] text-lg font-bold">Rmail</th>
                  <th className="bg-[#E7B10A] text-lg font-bold">Roll</th>
                  <th className="bg-[#E7B10A] text-lg font-bold">Action</th>
                </tr>
              </thead>
              <tbody>
                {user.map((u, index) => (
                  <tr key={u._id}>
                    <th>{index + 1}</th>
                    <td>{u.name}</td>
                    <td>
                      {u.email}
                      <br />
                    </td>
                    <td>
                      {u.roll === "admin" ? (
                        <p>admin</p>
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(u)}
                          className=" btn bg-orange-500 text-white btn-xs px-3 shadow-lg border-0 text-xl"
                        >
                          <FaUserShield />
                        </button>
                      )}
                    </td>
                    <th>
                      <button className=" btn bg-red-500 text-white btn-xs px-3 shadow-lg border-0 text-2xl">
                        <AiFillDelete />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allusers;
