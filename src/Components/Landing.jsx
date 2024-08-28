import { motion, stagger } from "framer-motion";
import { Power2, Power4 } from "gsap";
import React from "react";

const Landing = () => {
  return (
    <div className="w-full  h-[230vh] relative">
      <div className="picture w-full h-full overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
      </div>

      <div className="absolute mx-auto top-0 max-w-screen-2xl px-5 sm:px-10 h-full ">
        <div className="para mt-40 sm:mt-60 lg:mt-96 font-semibold ml-5 sm:ml-10 lg:ml-20 tracking-tight font-serif">
          {[
            "Global digital design studio partnering with",
            "brands and businesses that create exceptional",
            "experiences where people live, work, and unwind.",
          ].map((elem, i) => (
            <p
              key={i}
              className="text-white font-[TWK-Lausana-300] text-base sm:text-2xl overflow-hidden"
            >
              <motion.span
                className="inline-block origin-left"
                initial={{ rotate: 90, y: "40%", opacity: 0 }}
                whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{
                  ease: [0.22,1,0.36,1],
                  duration: 1,
                  delay: i * 0.3,
                }}
              >
                {elem}
              </motion.span>
            </p>
          ))}
        </div>
        <div className="headings  pt-12 sm:pt-32 ml-5 sm:ml-10 lg:ml-20 text-white">
          {["Digital", "Design", "Experince"].map((elem, i) => {
            return <h1  key={i} className="text-[14vw] h-- overflow-hidden sm:text-[12vw] sm:h-[14vw] h-[16vw] lg:text-[13vw] lg:h-[15vw] leading-none tracking-tighter ">
              
              <motion.span
                className="inline-block origin-left"
                initial={{ rotate: 90, y: "40%", opacity: 0 }}
                whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{
                  ease: [0.22,1,0.36,1],
                  duration: 1,
                  delay: i * 0.3,
                }}
              >
                {elem}
              </motion.span>
            </h1>;
          })}

        </div>
        <div className="para2 mt-10 sm:mt-20 ml-5 sm:ml-10 lg:ml-20 ">
          <p className="w-[90%] sm:w-[70%] lg:w-[45%]  text-white text-lg sm:text-2xl overflow-hidden">
          <motion.span
            className="inline-block origin-left"
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              ease: [0.22,1,0.36,1],
              duration: 3,
            }}
           
          
          >  We help experience-driven companies thrive by making their audience
            feel the refined intricacies of their brand and product in the
            digital space. Unforgettable journeys start with a click.</motion.span>
          </p>
        </div>
        <div className="bottom flex flex-col sm:flex-row items-start sm:items-center justify-between mt-10 sm:mt-20">
          <a
            className="text-white ml-5 pb-1 border-b-[1px] border-zinc-100 decoration-none no-underline sm:ml-10 lg:ml-20 mt-10 sm:mt-0 inline-block"
            href=""
          >
            The Studio
          </a>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-12 mt-5 sm:mt-0 sm:mr-10 lg:mr-20">
            <div className="links text-sm font-semibold flex flex-col items-start sm:items-center justify-center gap-2">
              {["Work", "Studio", "News", "Contact"].map((elem, i) => {
                return (
                  <a key={i} className="text-white" href="">
                    {elem}
                  </a>
                );
              })}
            </div>
            <div className="contact text-sm text-white font-semibold mt-5 sm:mt-0">
              <p>hello@exoape.com</p>
              <p>+91 99394 81959</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

