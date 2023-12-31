import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const UseMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);
  // return [menu, loading];

  const {
    data: menu = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch(
        "https://bistro-boss-restaurant-server-roan.vercel.app/menu"
      );

      return res.json();
    },
  });
  return [menu, loading, refetch];
};

export default UseMenu;
