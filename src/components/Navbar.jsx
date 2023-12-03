import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  const controls = useAnimation();

  const animateDrop = async () => {
    await controls.start("visible");
  };

  useEffect(() => {
    if (clicked) {
      animateDrop();
    }
  }, []);
  const [clicked, setClicked] = useState(false);
  const showNav = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <section
        className={`w-full h-full p-4 shadow-sm ${
          clicked ? "bg-white md:bg-[#fcf2ed]" : "bg-[#fcf2ed]"
        }`}
      >
        <nav className="relative flex justify-between w-full  items-center">
          <div className="text-xl">
            <img
              src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512"
              className="w-44 lg:flex hidden"
              alt="logo"
            />

            <img
              src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"
              className="w-14 lg:hidden flex"
              alt="logo"
            />
          </div>
          <div className="md:flex hidden text-md font-medium gap-10 pr-8">
            <ul className="flex gap-14 items-center justify-center">
              <a href="#feat">
                {" "}
                <li>Features</li>
              </a>
              <a href="#FAQ">
                {" "}
                <li>FAQ</li>
              </a>
              <a href="#price">
                {" "}
                <li>Pricing</li>
              </a>
              <a href="#testo">
                {" "}
                <li>Testimonials</li>
              </a>
            </ul>
            <div>
              <button className="bg-white px-5 py-2 rounded-lg font-semibold">
                Buy Template
              </button>
            </div>
          </div>
          <div className="md:hidden flex pr-3">
            <FaBarsStaggered size={50} onClick={showNav} />
          </div>
        </nav>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0 }}
          className={` absolute justify-center items-center bg-white w-full h-screen top-20 ${
            clicked ? "flex md:hidden" : "hidden"
          }`}
        >
          <div className="flex flex-col text-3xl gap-14 -top-24 relative justify-center items-center">
            <ol className="flex flex-col text-[#824dff] gap-14 font-semibold justify-center">
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="list-disc list-inside"
              >
                <a href="#feat">Features</a>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="list-disc list-inside"
              >
                <a href="#FAQ">FAQ</a>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="list-disc list-inside"
              >
                <a href="#price">Pricing</a>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="list-disc list-inside"
              >
                <a href="#testo">Testimonials</a>
              </motion.li>
            </ol>
            <div>
              <motion.button  variants={{
                      hidden: { opacity: 0, x: -100 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    // viewport={{ once: true }}
                    transition={{ duration:0.5 ,delay: 1.2 }} className="bg-[#824dff] text-white w-full px-5 py-2 rounded-lg font-semibold">
                Buy Template
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Navbar;
