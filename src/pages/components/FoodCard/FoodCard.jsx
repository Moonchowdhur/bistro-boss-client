import React, { useContext } from "react";
import { Authcontext } from "../../provider/Authprovider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/UseCart";

const FoodCard = ({ items }) => {
  const navigate = useNavigate();
  const { name, image, price, recipe, _id } = items;
  const { user } = useContext(Authcontext);
  const location = useLocation();

  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    if (user && user.email) {
      const orderedItem = {
        fmenuItemId: _id,
        email: user?.email,
        name,
        image,
        price,
        recipe,
      };

      fetch("https://bistro-boss-restaurant-server-roan.vercel.app/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderedItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            // refetch cart to update the number of items in the food
            refetch();
            swal("Wow", "Item Added", "success");
          }
        });
    } else {
      swal("", "Please login to order the food", "warning");
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
        <p className="absolute top-14 right-14 bg-slate-900 p-2 text-white rounded-lg">
          ${price}
        </p>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(items)}
            className="btn bg-slate-100 my-3 btn-outline border-r-0 border-l-0 border-t-0 border-b-yellow-600 border-b-4 "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
