import React from "react";
import { FaMobile, FaBell, FaFireAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Mores = () => {
  return (
    <>
      <main className="w-full h-full bg-[#1c1c1c] px-5 pt-5 text-[#fdf2ec] flex justify-center items-center">
        <section className="w-full max-w-6xl h-full">
          <div className="w-full">
            <div className=" pt-28 relative flex gap-3 flex-col">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white flex w-fit text-[#824dff] rounded-md text-sm px-3 py-1 font-medium"
              >
                <h1>🤩 AND MORE...</h1>
              </motion.div>
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className=" text-4xl lg:text-5xl font-semibold"
              >
                Explore an array of features that elevate your{" "}
                <span className="text-[#fe8162]">Productivity</span> to new
                heights
              </motion.h1>
              <div className="w-full lg:w-2/5 p-2">
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg font-semibold text-gray-500 "
                >
                  Discover the tools that will revolutionize the way you manage
                  and optimize your operations
                </motion.h2>
              </div>
              {/* cards */}
              <div className="w-full h-full relative grid lg:grid-cols-3 grid-rows-1 py-10 gap-8">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.4 }}
                  className="py-10 relative gap-5 bg-[#212121] rounded-3xl flex flex-col justify-center items-center text-center"
                >
                  <div className="bg-[#8247ff] w-fit f-fit p-2 rounded-2xl">
                    <FaMobile size={"3rem"} />
                  </div>
                  <div className="flex flex-col gap-1 px-5 pb-5">
                    <h1 className=" text-2xl font-semibold">
                      Cross-Platform Compatibility
                    </h1>
                    <p className="text-base text-[#717070]">
                      Enjoy the flexibility of cross-platform compatibility. Our
                      product works seamlessly across desktop, web, and mobile
                      devices, allowing you to work from your preferred device.
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
                  transition={{ duration: 0.9, delay: 0.6 }}
                  className="py-10 relative gap-5 bg-[#212121] rounded-3xl flex flex-col justify-center items-center text-center"
                >
                  <div className="bg-[#8247ff] w-fit f-fit p-2 rounded-2xl">
                    <FaBell size={"3rem"} />
                  </div>
                  <div className="flex flex-col gap-1 px-5 pb-5">
                    <h1 className=" text-2xl font-semibold">
                      Stay Informed with Essential Notifications
                    </h1>
                    <p className="text-base text-[#717070]">
                      Automate support from first customer contact to closing
                      the ticket. Drastically improve time to
                      resolution.Automate support from first customer contact to
                      closing the ticket.
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
                  transition={{ duration: 0.9, delay: 0.8 }}
                  className="py-10 relative gap-5 bg-[#212121] rounded-3xl flex flex-col justify-center items-center text-center"
                >
                  <div className="bg-[#8247ff] w-fit f-fit p-2 rounded-2xl">
                    <FaFireAlt size={"3rem"} />
                  </div>
                  <div className="flex flex-col gap-1 px-5 pb-5">
                    <h1 className=" text-2xl font-semibold">
                      Secure Data Encryption at all times
                    </h1>
                    <p className="text-base text-[#717070]">
                      Trust in our robust data encryption to keep your sensitive
                      information safe and secure. Rest easy knowing your data
                      is protected at all times.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="flex  flex-col gap-4 justify-center items-center">
            <div>{/* animation */}</div>
            <div className="w-full max-w-2xl">
              <div className=" pt-28 relative flex justify-center items-center gap-3 flex-col">
                <motion.div variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.5 ,delay: 0.1 }} className="bg-white flex w-fit text-[#824dff] rounded-md text-sm px-3 py-1 font-medium">
                  <h1 >🛠 INTEGRATION</h1>
                </motion.div>
                <motion.h1 variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.5 ,delay: 0.2 }} className="lg:text-6xl text-4xl font-semibold text-center">
                  Enable <span className="text-[#fe8162]">integration</span>{" "}
                  with other popular tools and platforms
                </motion.h1>
                <motion.div variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.5 ,delay: 0.3 }} className="text-center w-full lg:w-3/5 p-2">
                  <h2 className="text-lg font-semibold text-gray-500 ">
                    Seamlessly connect and amplify your workflow by enabling
                    integration with a diverse array of widely-used tools and
                    platforms.
                  </h2>
                </motion.div>
                <motion.div variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.5 ,delay: 0.5 }} className="w-4/5">
                  <img
                    src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024"
                    alt="integration"
                  />
                </motion.div>
                {/* cards */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Mores;
