import React, { useContext, useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineGithub, AiOutlineTwitter } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import img from "../../assets/others/authentication1.png";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Authcontext } from "../provider/Authprovider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signUser, resetPassword, googleSignIn, gitSignIn } =
    useContext(Authcontext);
  const emailRef = useRef();

  const location = useLocation();
  let navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [eye, setEye] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  let from = location.state?.from?.pathname || "/";

  const handleLoginbtn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signUser(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        swal("Good job!", "Login Successfull", "success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess("");
      });
  };

  const forgetPasswordbtn = (event) => {
    const email = emailRef.current.value;
    if (!email) {
      swal("Please provide your email", "", "warning");
      return;
    }
    resetPassword(email)
      .then(() => {
        toast("Please check your email to reset password");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess("");
      });
  };

  const googleSign = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const savedUser = { name: user.displayName, email: user.email };
        fetch("https://bistro-boss-restaurant-server-roan.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then(() => {
            console.log("inside googlelogin", from);
            navigate(from, { replace: true });
            // if (data.insertedId) {
            //   console.log(data);
            //   // refetch cart to update the number of items in the food
            //   // refetch();
            //   swal("Wow", "User Added", "success");
            //   navigate(from, { replace: true });
            // }
          });
        // swal("Google Login is successfull", "", "success");
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const gitSign = () => {
    gitSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        swal("GitHub Login successfull", "", "success");
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const HandlevalidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      {/* <div>
        <LoadCanvasTemplate />
      </div> */}

      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>

      <div className="md:flex py-5 items-center ">
        <div className="md:w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="  w-96 p-6 shadow-md bg-white rounded">
          <div className="text-center mb-3 font-bold text-3xl justify-center gap-3 flex items-center">
            <FaUser className="text-[#CBB279] " />
            <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black">
              Sign in to your account
            </h1>
          </div>

          <hr className="mt-3" />
          <form onSubmit={handleLoginbtn}>
            <div>
              {error && (
                <p className="text-center mt-4 text-red-500">{error}</p>
              )}
            </div>
            <div>
              {success && (
                <p className="text-center mt-4 text-xl text-green-500">
                  {success}
                </p>
              )}
            </div>
            {/* <div  className='mt-3'>
                <label htmlFor="username" className='block text-base mb-2'>Username</label>
                <input type="text" name="name" id="name" placeholder='Enter Username' className='border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded' />
              </div> */}
            <div className="mt-3">
              <label htmlFor="email" className="block text-base mb-2">
                Email
              </label>
              <input
                type="email"
                ref={emailRef}
                name="email"
                id="email"
                placeholder="Enter Email"
                className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="password" className="block text-base mb-2">
                Password
              </label>
              <div className="flex items-center">
                <input
                  type={eye ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
                />
                <span onClick={() => setEye(!eye)}>
                  {eye ? (
                    <AiFillEye className="text-4xl border focus:outline-none focus:ring-0 focus:border-gray-600 rounded " />
                  ) : (
                    <AiFillEyeInvisible className="text-4xl border focus:outline-none focus:ring-0 focus:border-gray-600   rounded " />
                  )}
                </span>
              </div>
            </div>
            <div className="mt-3">
              <label htmlFor="email" className="block text-base mb-2">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={HandlevalidateCaptcha}
                type="text"
                name="captcha"
                id="text"
                placeholder="Type the above captcha"
                className="border w-full px-2 focus:outline-none text-base py-1 focus:ring-0 focus:border-gray-600 rounded"
              />
            </div>
            <div className="mt-3 ">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Remember Me</span>
              </label>
            </div>
            <button
              type="submit"
              // disabled={disabled}
              className={`mt-5 font-semibold text-xl border-2 w-full px-3 py-2 rounded-lg border-[#CBB279] bg-[#CBB279] hover:bg-transparent hover:text-[#CBB279]  ${
                disabled ? "bg-slate-200 text-black" : "text-white"
              }`}
            >
              Sign in
            </button>
          </form>
          <button onClick={forgetPasswordbtn} className="mt-3">
            <small>
              forget password?
              <span className="text-black font-semibold underline ms-2">
                click here
              </span>
            </small>
          </button>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-b border-gray-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-500">Or</span>
            </div>
          </div>
          <div className="text-3xl flex items-center justify-center mt-4 gap-5">
            <button onClick={googleSign}>
              <FcGoogle />
            </button>
            <button onClick={gitSign}>
              <AiOutlineGithub className="text-blue-500" />
            </button>
          </div>
          <button className="mt-3">
            <small>
              Don’t have an account yet?{" "}
              <span className="text-black font-semibold underline">
                <Link to="/register">Sign up</Link>
              </span>
            </small>
          </button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
