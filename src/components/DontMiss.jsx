import { motion } from "framer-motion";
import React from "react";

const DontMiss = () => {
  return (
    <>
      <main className="w-full h-full  flex justify-center  items-center pb-16 px-5">
        <section className="lg:max-w-6xl w-full lg:p-0 pt-32 bg-white lg:py-24 py-10 px-10 flex lg:flex-row flex-col border rounded-3xl lg:px-24">

          <div className="flex w-full lg:w-3/4 items-center justify-center rounded-3xl flex-col lg:py-0 py-10 gap-4">
            <motion.p  variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.9 ,delay: 0.1 }}  className="bg-white w-fit text-[#7d6da2] border rounded-md text-sm px-3 py-1 font-medium">
              👋 DON'T MISS OUT
            </motion.p>
            <motion.h1  variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.9 ,delay: 0.2 }}  className=" text-4xl text-center lg:text-5xl max-w-2xl font-semibold">
              Unleash your <span className="text-[#fe8162]">Potential </span>
              with us
            </motion.h1>
            <motion.div  variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.9 ,delay: 0.3 }}  className=" w p-2">
              <h2 className="text-xl font-semibold text-gray-500 ">
                Join our community of ambitious individuals and organizations
                eager to make a difference.
              </h2>
            </motion.div>
            <motion.button  variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.9 ,delay: 0.5 }}  className="w-fit h-fit px-10 py-3 text-xl bg-[#8247ff] rounded-2xl text-white font-semibold ">
              Try out now
            </motion.button>
          </div>
          <div className="w-full h-full flex flex-col justify-center lg:pt-10 items-center gap-7 ">
            <motion.div  variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.9 ,delay: 0.4 }}  className="border px-5 py-2 w-fit h-fit shadow-md rounded-xl">
              <h1 h1 className="text-blue-700 text-2xl font-bold">
                {" "}
                200+ <span className="text-black">Happy users</span>
              </h1>
            </motion.div>
           
            <motion.div  variants={{
                      hidden: { opacity: 0, scaleX: 0.9 },
                      visible: { opacity: 1, scaleX: 1 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.9 ,delay: 0.1 }}  className="relative w-11/12 ">
  <img
    className="w-full h-full object-cover relative overflow-auto"
    src="https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png?scale-down-to=1024"
    alt="users"
  />
  <img src="https://framerusercontent.com/images/584hzJDnWCS5SFABKjaCzgDspY.png?scale-down-to=512" className=" absolute w-full h-full inset-0" alt="banner" />
  {/* <div className="absolute inset-0 bg-gradient-to-r  from-transparent to-gray-200 opacity-50 " /> */}
  {/* <div className="absolute inset-0 bg-gradient-to-l w-1/3 from-transparent to-gray-200 opacity-50" /> */}

</motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default DontMiss;
