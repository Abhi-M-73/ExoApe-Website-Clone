import gsap, { Power4, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Play = () => {
  const mainparent = useRef(null);
  const videoContainer = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    var tl= gsap.timeline(
      {
        scrollTrigger: {
          trigger: mainparent.current,
          start: "top top",
          pin: true,
          scrub:1
        },
      }
    )
    tl.to(videoContainer.current, {
      width: "100%",
      height: "100%",
      ease: Power4.easeInOut, // Optional: Add an easing effect
    })
    .to(play.current,{
      x: "-200%",
      scale: 1.5,
      ease: Power4
    }, 'a')
    .to(reel.current,{
      x: "200%",
      scale: 1.5,
      ease: Power4
    }, 'a')
  },); // Added an empty dependency array to ensure it runs only once

  return (
    <div
      ref={mainparent}
      className="max-w-screen-2xl mx-auto h-screen mt-32 bg-black text-white flex flex-col items-center justify-center relative py-20"
    >
      <div ref={videoContainer} className="video w-96 aspect-video absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full"
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        ></video>
      </div>

      <div className="w-full h-full flex items-center justify-between flex-col">
        <div className="title flex items-center justify-center gap-3">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <p>Work in motion</p>
        </div>

        <h1 className="play-heading flex items-center justify-center sm:gap-72 text-8xl absolute pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold font-sans z-40">
          <div ref={play} className="">Play</div>
          <div ref={reel} className="">Reel</div>
        </h1>
        <div className="para">
          Our work is best experienced in motion. Don’t forget to put on your
          headphones.
        </div>
      </div>
    </div>
  );
};

export default Play;