
import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <div className="max-w-screen-2xl mx-auto min-h-[310vh] pt-32 text-black">
      <div className="h-full   ">
        <h1 className="text-[15vw] font-semibold  pl-40 overflow-hidden">
          <motion.span
            className="inline-block origin-left"
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              ease: [0.22, 1, 0.36, 1],
              duration: 0.8,
            }}
          >
            Work
          </motion.span>
        </h1>

        <div className="images relative  mt-96 max-w-screen-xl min-h-[100vh] flex  left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] items-center justify-center gap-10 ">
          <div className="left-video-with-img-1 w-1/2 h-full absolute top-32 left-16 ">
            <motion.img
             initial={{opacity:1}}
             whileHover={{opacity:0}}

              className="w-[35rem] sm:absolute z-[2] sm:left-0 sm:top-0  object-cover"
              src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
              alt="sjhbsj"
            />
            <video
              autoPlay
              muted
              loop
              className="w-[34vw] sm:absolute scale-[1.2] z-[1] sm:top-[8.5%] sm:left-[7%]"
              src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
            ></video>
          </div>
          <div className="left-video-with-img-2 w-[20vw] h-full absolute top-[190%] left-7">
            <motion.img
             initial={{opacity:1}}
             whileHover={{opacity:0}}
              className="w-[20rem] sm:block sm:absolute sm:z-[2] object-cover"
              src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
              alt="sjhbsj"
            />
            <video
              autoPlay
              muted
              loop
              className="w-[20rem] absolute scale-[1] sm:absolute sm:z-1-[1]"
              src="https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076"
            ></video>
          </div>
          <div className="right  flex flex-col gap-40 justify-between h-full absolute top-32 left-[60%] w-1/2 ">
            <div className="flex flex-col  gap-2 items-start">
              <div className="prt-top flex gap-2">
                <span>
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4"
                    data-v-669b4a84=""
                  >
                    <path
                      d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                      fill="currentColor"
                      data-v-669b4a84=""
                    ></path>
                  </svg>
                </span>
                <p className="text-xs">Featured Projects</p>
              </div>
              <p className="w-[60%]">
                Highlights of cases that we passionately built with
                forward-thinking clients and friends over the years.
              </p>
            </div>
            <div className="right-video-with-img w-1/2 h-full ">
              <motion.img
             initial={{opacity:1}}
             whileHover={{opacity:0}}
                className="w-[30rem]  sm:absolute object-cover sm:block sm:z-[2]"
                src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
                alt="sjhbsj"
              />
              <video
                autoPlay
                muted
                loop
                className="w-[30rem]  absolute scale-[1] sm:absolute sm:z-1-[1] "
                src="https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b"
              ></video>
            </div>
          </div>
          <div className="right gap-40 justify-between h-full absolute top-[160%] left-[40%] w-1/2 ">
            <div className="right-video-with-img w-1/2 h-full ">
              <motion.img
             initial={{opacity:1}}
             whileHover={{opacity:0}}

                className="w-[30rem] sm:absolute object-cover sm:block sm:z-[2]"
                src="https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)"
                alt="sjhbsj"
              />
              <video
                autoPlay
                muted
                loop
                className="w-[30rem] absolute scale-[1] sm:absolute sm:z-1-[1]"
                src="https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
