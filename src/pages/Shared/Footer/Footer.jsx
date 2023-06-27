import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="footer p-10 text-center text-white">
        <div className="md:mx-20 text-center ">
          <span className="footer-title">CONTACT US</span>
          <a className="link link-hover">123 ABS Street, Uni 21, Park Street</a>
          <a className="link link-hover">+91 7877090857</a>
          <a className="link link-hover">Mon - Fri: 08:00 - 22:00</a>
          <a className="link link-hover">Sat - Sun: 10:00 - 23:00</a>
        </div>
        <div className="md:mx-20">
          <span className="footer-title uppercase">Follow US</span>
          <a className="link link-hover">Join us on social media</a>
          <div className="flex items-center text-3xl gap-3">
            <a className="link  link-hover">
              <BsFacebook />
            </a>
            <a className="link  text-4xl link-hover">
              <AiOutlineTwitter />
            </a>
            <a className="link link-hover text-4xl ">
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </footer>
      <p className="my-3 text-center text-white">
        Copyright © 2023 - All right reserved
      </p>
    </div>
  );
};

export default Footer;
