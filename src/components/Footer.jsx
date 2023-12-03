import React from "react";
import { FaSquareXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <main className="w-full h-full  flex justify-center pb-10">
        <section className="flex flex-col justify-center items-center lg:max-w-6xl w-full lg:p-0 px-10 pt-0 md:pt-32">
          <div className="relative w-full flex md:flex-row flex-col md:gap-0 gap-10 items-center  justify-center md:justify-between ">
            <div className="text-xl">
              <img
                src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
                className="w-44"
                alt="logo"
              />
            </div>
            <div className="flex text-md font-medium gap-10 pr-8">
              <ul className="flex flex-col gap-2 items-center justify-center">
                <li>Features</li>
                <li>FAQ</li>
                <li>Pricing</li>
                <li>Testimonials</li>
              </ul>
            </div>
          </div>
          <div className="relatice w-full border-t mt-14 pt-10 flex justify-between">
            <div>
              <h1 className=" text-lg font-semibold">
                © 2022 ManageWise, Inc.
              </h1>
            </div>
            <div className="flex relative gap-5">
              <a href="https://www.instagram.com/">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com/home"><FaSquareXTwitter size={20} /></a>
              <a href="https://www.linkedin.com/feed/">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Footer;
