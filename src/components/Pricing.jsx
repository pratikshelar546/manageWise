import { motion } from "framer-motion";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const prices = [
    {
      tag: "FREE",
      price: "$0",
      duration: "/month",
      d1: "Access to all basic features",
      d2: "Reporting and analytics",
      d3: "Up to 5 individual users",
      d4: "Chat and email support",
      color: "#ededfa",
    },
    {
      tag: "STANDARD",
      price: "$25",
      duration: "/month",
      d1: "Access to all basic features",
      d2: "Reporting and analytics",
      d3: "Up to 5 individual users",
      d4: "Chat and email support",
      d5: "3+ integrations",
      d6: "Account performance reporting",
      color: "#1c1c1c",
    },
    {
      tag: "BUSINESS",
      price: "$42",
      duration: "/month",
      d1: "Access to all basic features",
      d2: "Reporting and analytics",
      d3: "Up to 5 individual users",
      d4: "Chat and email support",
      d5: "3+ integrations",
      color: "#ededfa",
    },
  ];
  return (
    <>
      <main
        id="price"
        className="w-full h-full  flex justify-center items-center pb-16"
      >
        <section className="lg:max-w-6xl w-full lg:p-0 px-10 pt-32">
          <div className="flex justify-center items-center flex-col gap-4">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="bg-white w-fit text-[#8247ff] border rounded-xl shadow text-sm px-3 py-1 font-medium"
            >
              💲PRICING
            </motion.p>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="text-4xl lg:text-5xl font-semibold text-center"
            >
              Select your ideal <span className="text-[#fe8162]">Pricing</span>{" "}
              plan
            </motion.h1>
            <div className="w-full lg:w-2/4 p-2">
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="text-xl font-semibold text-gray-500 text-center"
              >
                At Manage Wise, we believe in providing you with pricing plans
                that adapt to your unique needs.
              </motion.h2>
            </div>
            <div className="w-full h-full relative flex lg:flex-row flex-col justify-center items-center py-10 gap-7">
              {prices.map((data, index) => (
                <>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 100 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.2 * index }}
                    key={index}
                    className={`w-full max-w-lg  border shadow rounded-3xl p-5 bg-[${data.color}] ${data.tag === 'STANDARD' ?'h-[420px]':'h-[386px] mt-8'}`}
                  >
                    <div className="bg-white text-orange-500 rounded-xl w-fit h-fit px-3 py-1 mb-4 font-semibold">
                      <h1>{data.tag}</h1>
                    </div>
                    <h1
                      className={` text-5xl font-bold ${
                        data.color === "#1c1c1c" ? "text-white" : "text-black"
                      }`}
                    >
                      {data.price}
                      <span className="text-lg font-medium">
                        {data.duration}
                      </span>
                    </h1>
                    <div className="flex flex-col gap-1 px-5 pb-7 pt-3">
                      <p className="text-base text-gray-500 flex">
                        <FaCheck size={20} color="lightgreen" />
                        {data.d1}
                      </p>
                      <p className="text-base text-gray-500 flex">
                        <FaCheck size={20} color="lightgreen" />
                        {data.d2}
                      </p>
                      <p className="text-base text-gray-500 flex">
                        <FaCheck size={20} color="lightgreen" />
                        {data.d3}
                      </p>
                      <p className="text-base text-gray-500 flex">
                        <FaCheck size={20} color="lightgreen" />
                        {data.d4}
                      </p>

                      {data.d5 ? (
                        <p className="text-base text-gray-500 flex">
                          <FaCheck size={20} color="lightgreen" />
                          {data.d5}
                        </p>
                      ) : (
                        ""
                      )}
                      {data.d6 ? (
                        <p className="text-base text-gray-500 flex">
                          <FaCheck size={20} color="lightgreen" />
                          {data.d6}
                        </p>
                      ) : (
                        ""
                      )}

                      <button
                        className={`py-2 w-fit px-6 mt-6 rounded-xl  bottom-0 left-0 relative ${
                          data.color === "#1c1c1c"
                            ? "bg-[#8247ff] text-white"
                            : "bg-white text-black"
                        }`}
                      >
                        Get Started
                      </button>
                    </div>
                  </motion.div>
                </>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Pricing;
