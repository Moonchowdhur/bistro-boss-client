import React, { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { Link, useNavigate } from "react-router-dom";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import img from "../../assets/others/authentication2.png";
import { Helmet } from "react-helmet-async";
import { Authcontext } from "../provider/Authprovider";

const Register = () => {
  // const [, refetch] = useCart();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    // setError,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { createUser } = useContext(Authcontext);
  const [accepted, setAccepted] = useState(false);
  const [eye, setEye] = useState(false);
  const [success, setSuccess] = useState("");
  const [err, setErr] = useState("");

  // const handleRegisterbtn = (event) => {
  //   event.preventDefault();
  //   const name = event.target.name.value;
  //   const email = event.target.email.value;
  //   const password = event.target.password.value;
  //   const confirm = event.target.confirm.value;

  //   setError("");
  //   console.log(email, password, confirm);

  //   if (!/(?=.*[A-Z])/.test(password)) {
  //     setError("Password has to be uppercase letters.");
  //     return;
  //   } else if (!/(?=.*[!@#$&*])/.test(password)) {
  //     setError("Password has to be one special case letter.");
  //     return;
  //   } else if (!/.{8}/.test(password)) {
  //     setError("Password has to be length 8.");
  //     return;
  //   } else if (confirm !== password) {
  //     setError("Password don't match");
  //     return;
  //   }

  //   createUser(email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log(user);
  //       setError("");
  //       setSuccess("Registration Successfull");

  //       updateProfile(user, {
  //         displayName: name,
  //       })
  //         .then(() => {
  //           //
  //         })
  //         .catch((error) => {
  //           const errorMessage = error.message;
  //           setError(errorMessage);
  //           setSuccess("");
  //         });

  //       sendEmailVerification(user).then(() => {
  //         toast("Successfully registered! & verification email has been sent.");
  //       });
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       setError(errorMessage);
  //       setSuccess("");
  //     });
  // };

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        // Signed in
        const loggedUser = result.user;
        console.log(loggedUser);
        swal("Register successfull", "", "success");

        updateProfile(loggedUser, {
          displayName: data.name,
          photoURL: data.photo,
        })
          .then(() => {
            const savedUser = { name: data.name, email: loggedUser.email };
            console.log(savedUser);
            fetch(
              "https://bistro-boss-restaurant-server-roan.vercel.app/users",
              {
                method: "POST",
                headers: {
                  "content-Type": "application/json",
                },
                body: JSON.stringify(savedUser),
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.insertedId) {
                  // refetch cart to update the number of items in the food
                  // refetch();
                  swal("Wow", "User Added", "success");
                }
              }),
              // swal("User profile updated successfull", "", "success");
              reset();
            navigate("/");
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleChecked = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>

      <div className="md:flex justify-center items-center gap-8 py-10">
        <div className="w-96 p-6 shadow-md bg-white rounded">
          <div className="text-center mb-3 font-bold text-3xl justify-center gap-3 flex items-center">
            <FaUser className="text-[#CBB279]" />
            <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl font-black">
              Create an account
            </h1>
          </div>

          <hr className="mt-3" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {err && <p className="text-center mt-4 text-red-500">{err}</p>}
            </div>
            <div>
              {success && (
                <p className="text-center mt-4 text-xl text-green-500">
                  {success}
                </p>
              )}
            </div>

            <div className="mt-3">
              <label htmlFor="username" className="block text-base mb-2">
                Username
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true, maxLength: 20 })}
                id="name"
                placeholder="Enter Username"
                className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="username" className="block text-base mb-2">
                photoURL
              </label>
              <input
                type="url"
                name="photo"
                {...register("photo")}
                id="photo"
                placeholder="Enter Photo URL"
                className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
              />
              {errors.photo && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="email" className="block text-base mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                id="email"
                placeholder="Enter Email"
                className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="block text-base mb-2">
                Password
              </label>
              <div className="flex items-center">
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  })}
                  type={eye ? "text" : "password"}
                  name="password"
                  // onInput={setError("password", { type: "focus" })}
                  id="password"
                  placeholder="Enter Password"
                  className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
                />

                <span onClick={() => setEye(!eye)}>
                  {eye ? (
                    <AiFillEye className="text-4xl border focus:outline-none focus:ring-0 focus:border-gray-600 rounded " />
                  ) : (
                    <AiFillEyeInvisible className="text-4xl border focus:outline-none focus:ring-0 focus:border-gray-600  rounded " />
                  )}
                </span>
                <br />
              </div>
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">Password must be 6characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must have one uppercase, one special case letter and
                  one digits
                </p>
              )}
            </div>
            {/* <div className="mt-3">
            <label htmlFor="password" className="block text-base mb-2">
              Confirm password
            </label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              placeholder="Enter Password"
              className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
            />
          </div> */}
            <div className="mt-3 ">
              <label className="label cursor-pointer">
                <input
                  onClick={handleChecked}
                  type="checkbox"
                  className="checkbox"
                />
                <span className="label-text">
                  {
                    <>
                      I accept
                      <Link to="/terms" className="text-indigo-700 underline">
                        the Terms and Conditions
                      </Link>
                    </>
                  }
                </span>
              </label>
            </div>
            <button
              type="submit"
              disabled={!accepted}
              className="mt-5 disabled:bg-gray-200 disabled:text-black font-semibold text-xl border-2 w-full px-3 py-2 rounded-lg border-[#CBB279] bg-[#CBB279]
              hover:bg-transparent hover:text-[#CBB279] text-white "
            >
              Create an account
            </button>
          </form>
          <button className="mt-3">
            <small>
              Already have an account?
              <span className="text-indigo-700 font-semibold underline ms-2">
                <Link to="/login">login here</Link>
              </span>
            </small>
          </button>
        </div>
        <div className="md:w-1/2 pt-5">
          <img src={img} alt="" />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Register;

// 12FR$%

// @#RF$%r45
// mim@gmail.com
