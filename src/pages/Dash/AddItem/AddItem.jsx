import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  console.log(img_hosting_url);
  const handleSubmitBtn = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const category = event.target.category.value;
    const price = event.target.price.value;
    const recipe = event.target.recipe.value;
    const img = event.target.img.files[0];

    // console.log(itemData);

    // image upload---
    const formData = new FormData();
    formData.append("image", img);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse) {
          const image = imgResponse.data.display_url;
          const itemData = {
            name,
            category,
            price: parseFloat(price),
            recipe,
            image,
          };
          console.log(itemData);
          axiosSecure.post("/menu", itemData).then((data) => {
            console.log("after posting", data.data);
            if (data.data.insertedId) {
              swal({
                title: "Item inserted",
                icon: "success",
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full mb-10">
      <div>
        <SectionTitle
          heading={"ADD AN ITEM"}
          subheading={"What's new?"}
        ></SectionTitle>
        <div className="md:mx-20 bg-slate-200 p-5">
          <form onSubmit={handleSubmitBtn}>
            <div className="form-control">
              <label class="label">
                <span class="label-text">Recipe name*</span>
              </label>
              <label class="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Recipe name"
                  class="input w-full input-bordered"
                />
              </label>
            </div>
            <div className="flex items-center mt-5  gap-4">
              <select
                defaultValue="Category"
                name="category"
                class="select md:w-1/2 select-bordered w-full max-w-xs"
              >
                <option disabled>Category</option>
                <option>Pizza</option>
                <option>Salad</option>
                <option>Soup</option>
                <option>Drinks</option>
              </select>
              <div class="form-control md:w-1/2  ">
                <label class="label">
                  <span class="label-text">Price*</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="Enter Price"
                    className="input w-full input-bordered"
                  />
                </label>
              </div>
            </div>
            <div>
              <textarea
                className="textarea w-full mt-5 textarea-success"
                placeholder="Recipe Details"
                name="recipe"
              ></textarea>
            </div>
            <div className="">
              <label className="label">
                <span className="label-text">Item Image</span>
              </label>
              <input
                type="file"
                name="img"
                accept="image/*"
                class="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <input
              type="submit"
              value="Add an item"
              className="btn-block btn text-black bg-yellow-500 border-0 mt-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
