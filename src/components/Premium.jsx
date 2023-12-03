import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const Premium = () => {
  return (
    <>
      <main
        id="feat"
        className="w-full h-full  flex justify-center items-center pb-16"
      >
        <section className="lg:max-w-6xl w-full lg:p-0 px-8 pt-32">
          <div className="flex justify-center items-center flex-col gap-4">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.03 }}
              className="bg-white w-fit text-[#7d6da2] rounded-md text-sm px-3 py-1 font-medium"
            >
              <span className=" text-lg">🔥</span>PREMIER FEATURES
            </motion.p>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className=" lg:text-6xl text-5xl font-semibold text-center"
            >
              Discover our product's{" "}
              <span className="text-[#fe8162]">Capabilities</span>
            </motion.h1>
            <div className="lg:w-3/5 w-full p-2">
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 0 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.09 }}
                className="text-xl font-semibold text-gray-500 text-center"
              >
                Don't settle for mediocrity - embrace the future of management
                with Manage Wise.
              </motion.h2>
            </div>
            <div className="flex lg:flex-row lg:mx-0 items-center justify-center flex-col h-full gap-7 relative">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className=" lg:w-2/4 w-full h-full rounded-2xl bg-[#ededfa] pt-24 pb-14 px-8 lg:px-14"
              >
                <div className="bg-white p-3 mb-3 w-fit rounded-2xl">
                  <FaStar size={"1.7rem"} className="text-[#fcd53f]" />
                </div>
                <h1 className=" lg:text-4xl text-xl font-semibold">
                  Boost productivity and streamline workflow with us. Enjoy our
                  intuitive interface and robust features.
                </h1>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="lg:w-2/4 w-full flex flex-col border rounded-3xl"
              >
                <img
                  src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024"
                  className=" rounded-3xl"
                  alt="feature"
                />
                <div className="p-5 gap-1 flex flex-col relative">
                  <h1 className="text-2xl font-semibold">
                    Smart Task Management
                  </h1>
                  <p className="text-lg ">
                    Say goodbye to chaos with our smart task management system
                  </p>
                </div>
              </motion.div>
            </div>
            {/* cards */}
            <div className="w-full h-full relative grid lg:grid-cols-3 grid-rows-1 justify-center  py-10 gap-5">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.5 }}
                className="border rounded-3xl lg:w-full max-w-xl shadow flex flex-col justify-center items-center"
              >
                <img
                  src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512"
                  alt="flexible"
                />
                <div className="flex flex-col gap-1 px-5 pb-7">
                  <h1 className=" text-2xl font-semibold">
                    Flexible Scheduling
                  </h1>
                  <p className="text-base text-gray-500">
                    Stay productive with our flexible scheduling system
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.7 }}
                className="border rounded-3xl lg:w-full max-w-xl shadow flex flex-col justify-center items-center"
              >
                <img
                  src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512"
                  alt="flexible"
                />
                <div className="flex flex-col gap-1 px-5 pb-7">
                  <h1 className=" text-2xl font-semibold">
                    Easy Communication
                  </h1>
                  <p className="text-base text-gray-500">
                    Collaborate seamlessly with your team in real-time
                  </p>
                </div>
              </motion.div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.9 }}
                className="border rounded-3xl lg:w-full max-w-xl shadow flex flex-col justify-center items-center"
              >
                <img
                  src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512"
                  alt="flexible"
                />
                <div className="flex flex-col gap-1 px-5 pb-7">
                  <h1 className=" text-2xl font-semibold">Analytics</h1>
                  <p className="text-base text-gray-500">
                    Gain valuable insights with our advanced analytics feature
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Premium;
