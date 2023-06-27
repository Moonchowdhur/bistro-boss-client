import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Authcontext } from "../pages/provider/Authprovider";
import useAxiosSecure from "./useAxiosSecure";

const useCart = (email) => {
  const { user, loading } = useContext(Authcontext);
  const [axiosSecure] = useAxiosSecure();

  const token = localStorage.getItem("access-token");
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    // enabled: user?.email,
    enabled: !loading,
    // queryFn: async () => {
    //   const response = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   );

    //   return response.json();
    // },
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);

      return res.data;
    },
  });

  return [cart, refetch];
};

export default useCart;
