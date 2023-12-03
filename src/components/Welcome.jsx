import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowCircleRight,FaPlayCircle  } from "react-icons/fa";
const Welcome = () => {
    const [hoverd,setHoverd] = useState(false);
  return (
    <>
      <main className="w-full h-full  flex justify-center items-center">
        <section className="lg:max-w-6xl w-full lg:p-0  pt-24 ">
          <div className={`flex justify-center items-center p-2 flex-col gap-4`}>
            <motion.p variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.5 ,delay: 0.02 }} className="bg-white w-fit text-[#824dff] rounded-md text-sm px-3 py-1 font-medium">
              👋 WELCOME TO MANAGE WISE!
            </motion.p>
            <motion.h1 variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.5 ,delay: 0.08 }} className=" lg:text-6xl text-5xl  font-semibold  text-center">
              Empower your business with{" "}
              <span className="text-[#fe8162]">Strategic</span> insights
            </motion.h1>
            <div className=" lg:w-3/5 w-full p-2">
              <motion.h2 variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.5 ,delay: 0.1 }} className="text-xl font-semibold text-gray-500 text-center">
                Powerful management platform designed to streamline your
                business operations, boost productivity, and drive success
              </motion.h2>
            </div>
            <motion.div variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.5 ,delay: 0.15 }} className="flex lg:flex-row flex-col gap-8">
        <button  onMouseEnter={() => setHoverd(true)}
      onMouseLeave={() => setHoverd(false)}>
              <h1 className={`w-48 h-14  flex justify-center items-center  bg-[#824dff] text-xl font-semibold text-white rounded-2xl  hover:shadow-purple transition-all duration-300 `} >
                Get Started
                <FaArrowCircleRight
                  size={"1.3rem"}
                  className={` transition-all duration-1000 ${hoverd ? 'flex right-2' : 'hidden -right-10'}`}
                  />
              </h1>
                  </button>
              <button className=" w-48 h-14 flex justify-center items-center gap-2 bg-white text-xl font-semibold text-black rounded-2xl">
                Whatch Demo <FaPlayCircle  size={"1.3rem"} />
              </button>
            </motion.div>
            <motion.div  variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.02 }} className="w-full h-full py-10">
            <img src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048" className="h-full w-full rounded-3xl shadow-lg" alt="images" />
            </motion.div>
              
          </div>
        </section>
      </main>
    </>
  );
};

export default Welcome;
