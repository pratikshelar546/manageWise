import { motion } from "framer-motion";
import React from "react";
import Marquee from "react-fast-marquee";

// import { NextArrow, PrevArrow } from "./Arrows";
const Testo = () => {
  const comments = [
    {
      coms: "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations",
      name: "Emily",
      prof: "Art Director",
      image:
        "https://framerusercontent.com/images/dgHsIQVrsxRxtadpghDWppPujE.jpg",
    },
    {
      coms: "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.",
      name: "Alex",
      prof: "IT manager",
      image:
        "https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg",
    },
    {
      coms: "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
      name: "Sarah",
      prof: "Project Manager",
      image:
        "https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg",
    },
    {
      coms: "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.",
      name: "David",
      prof: "Freelancer",
      image:
        "https://framerusercontent.com/images/mIAsKrgLvd7WbLFFsh6f6YobhSc.jpg",
    },
    {
      coms: "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks.",
      name: "Alex",
      prof: "IT manager",
      image:
        "https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg",
    },
    {
      coms: "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly.",
      name: "Sarah",
      prof: "Project Manager",
      image:
        "https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg",
    },
    {
      coms: "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.",
      name: "David",
      prof: "Freelancer",
      image:
        "https://framerusercontent.com/images/mIAsKrgLvd7WbLFFsh6f6YobhSc.jpg",
    },
  ];
  // const settings = {
  //   infinite: false,
  //   speed: 1000,
  //   slidesToShow: 3,
  //   nextArrow: <NextArrow />,
  //   prevArrow: <PrevArrow />,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 1,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <main
        id="testo"
        className="w-full h-full  flex flex-col justify-center items-center pb-16"
      >
        <section className="max-w-6xl pt-32">
          <div className="flex  flex-col gap-4 px-5">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="bg-white w-fit border text-[#7d6da2] rounded-md text-sm px-3 py-1 font-medium"
            >
              🧡TESTIMONIALS
            </motion.p>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="lg:text-6xl text-5xl font-semibold"
            >
              Hear from our <span className="text-[#fe8162]">Satisfied </span>{" "}
              clients
            </motion.h1>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.53 }}
              className="lg:text-6xl text-5xl p-2"
            >
              <h2 className="text-xl md:w-3/4 w-full font-semibold text-gray-500 ">
                Discover why our clients love working with us. Read their
                testimonials and learn how we has helped businesses.
              </h2>
            </motion.div>
          </div>
        </section>
        <Marquee
          direction="right"
          style={{ scrollSnapType: "x mandatory" }}
          gradient
          gradientColor="#fef9f7"
          className="w-full max-w-[90%] mt-10 "
        >
          <div className="flex gap-5 relative">
            {comments.map((data, i) => (
              <>
                <div className="w-80 border rounded-3xl p-5 shadow">
                  <h1 className="text-lg font-semibold p-4">{data.coms}</h1>

                  <div className="flex gap-3 relative">
                    <img
                      src={data.image}
                      className="w-14 h-14 "
                      alt={data.name}
                    />
                    <div className="flex flex-col ">
                      <h1>{data.name}</h1>
                      <h1 className="text-gray-500">{data.prof}</h1>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </Marquee>
      </main>
    </>
  );
};

export default Testo;
