import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { RxPlus  } from "react-icons/rx";
import { motion } from "framer-motion";
const FAQ = () => {
  const faqs = [
    {
      que: "What is Manage Wise and what does it offer?",
      ans: "   Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
    },
    {
      que: " Is Manage Wise suitable for small businesses and larger enterprises alike?",
      ans: "Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.",
    },
    {
      que: "Can I access Manage Wise from different devices and platforms?",
      ans: "Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.",
    },
    {
      que: "What kind of support options do you offer to users?",
      ans: "We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.",
    },
    {
      que: "How secure is the data stored within Manage Wise?",
      ans: " Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.",
    },
  ];
  const [clickedItems, setClickedItems] = useState({});

  const handleItemClick = (index) => {
    setClickedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };


  return (
    <>
      <main id="FAQ" className="w-full h-full text-black flex justify-center items-center gap-3 pb-16">
        <div className="w-full max-w-6xl pt-32  relative gap-5">
          <div className="w-full flex lg:flex-row flex-col ">
            <div className="lg:w-2/4 w-full flex items-center justify-center text-center">
              <div className="flex flex-col  items-center justify-center gap-3 w-3/4">
                <motion.div variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.9 ,delay: 0.1 }} className="bg-white flex w-fit text-[#824dff] border rounded-md text-sm px-3 py-1 font-medium">
                  <h1>🙋‍♀️FAQ</h1>
                </motion.div>
                <motion.h1 variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.9 ,delay: 0.2 }} className="lg:text-6xl text-5xl font-semibold">
                  Need <span className="text-[#fe8162]">Answer?</span>
                </motion.h1>
                <motion.div variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration:0.9 ,delay: 0.3 }} className=" w-full p-2">
                  <h2 className="text-lg font-semibold text-gray-500 ">
                    Check out our most commonly asked questions below to find
                    the information you need.
                  </h2>
                </motion.div>
              </div>
            </div>
            <div className="w-full flex flex-col p-5 relative gap-4">
            {faqs.map((data, index) => (
        <motion.div key={index} variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration:0.5 ,delay: 0.2*index }} className="bg-[#f7f8fd] p-3 rounded-3xl">
          <Disclosure>
            <Disclosure.Button 
              onClick={() => handleItemClick(index)}
              className="py-2 p-4 w-full flex justify-between outline-none"
            >
              <h1 className= {`text-xl font-semibold ${clickedItems[index]? 'text-blue-500':'text-black'}`}>{data.que}</h1>
              <RxPlus 
                size={"2rem"}
                className={`transition-transform ${
                  clickedItems[index] ? 'text-blue-500 rotate-45 ' : 'text-black'
                }`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 p-4 w-full">
              {data.ans}
            </Disclosure.Panel>
          </Disclosure>
        </motion.div>
      ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FAQ;
