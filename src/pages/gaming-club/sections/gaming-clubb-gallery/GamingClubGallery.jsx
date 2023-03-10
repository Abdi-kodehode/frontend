import React, { useRef, useEffect } from "react";
//Components
import Header from "../../../../components/header/Header";
import StreamingChat from "../../../../components/streaming-chat/StreamingChat";
//Animation Library
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
//Images
import Instructor from "../../../../assets/playwell-teacher2.webp";
import GamingClub from "../../../../assets/gif/gamingklubb-gif.gif";
import Image1 from "../../../../assets/playwell-hero3.jpg";
import Image2 from "../../../../assets/gallery/playing-kid2.webp";
import Image3 from "../../../../assets/gallery/playing-kid3.webp";
import Image4 from "../../../../assets/gallery/playing-kid1.webp";
import Image5 from "../../../../assets/gallery/playing-kid4.webp";
import Image6 from "../../../../assets/gallery/playing-kid5.webp";

const MinecraftGallery = () => {
  //Atached Dom Elements
  const galleryContainer = useRef(null);
  const sideBoxLeft = useRef(null);
  const sideColumnLeft = useRef(null);
  const sideBoxRight = useRef(null);
  const sideColumnRight = useRef(null);
  const middleBox = useRef(null);

  //Gsap Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: middleBox.current,
        start: "center center",
        end: "bottom -=70%",
        pin: galleryContainer.current,
        scrub: 0.5,
      },
    });

    tl.to(middleBox.current, {
      scale: 1.2,
    })
      .to(
        [sideBoxLeft.current, sideColumnLeft.current],
        { x: "-50vw" },
        "<"
      )
      .to(
        [sideBoxRight.current, sideColumnRight.current],
        { x: "50vw" },
        "<"
      );

    return () => {
      tl.pause(0).kill(true);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="py-20 tablet:py-10 mobile:pt-10 mobile:pb-0">
        <Header header="La oss spile sammen !" />
      </div>
      <div
        className="grid gap-1 h-screen grid-cols-[1fr_1fr_3fr_1fr_1fr] items-center overflow-hidden screen:grid-cols-[1fr_1fr_5fr_1fr_1fr] screen:content-baseline screen:h-full tablet:grid-cols-1"
        ref={galleryContainer}
      >
        <div>
          <div
            className=" overflow-hidden rounded side-box__left tablet:hidden"
            ref={sideBoxLeft}
          >
            <img
              src={Image1}
              alt="player"
              className="w-full object-cover h-[200px] rounded  screen:h-[100px] "
            />
          </div>
        </div>
        <div
          className="flex flex-col gap-1 overflow-hidden two-column__left tablet:hidden"
          ref={sideColumnLeft}
        >
          <img
            src={Image2}
            alt="player"
            className="w-full object-cover h-[200px] rounded  screen:h-[100px]"
          />

          <img
            src={Image3}
            alt="player"
            className="w-full object-cover h-[200px] rounded  screen:h-[100px]"
          />
        </div>

        <div
          className="flex justify-center w-full z-20 tablet:py-10 mobile:px-10 "
          ref={middleBox}
        >
          <StreamingChat
            gif={GamingClub}
            instructor={Instructor}
            chat1="Hei alle sammen.I dag vi skal spile RL :)"
            chat2="Hei :) Ns , Vi er klar !"
          />
        </div>
        <div
          className="flex flex-col gap-1 two-column__right tablet:hidden"
          ref={sideColumnRight}
        >
          <img
            src={Image4}
            alt="player"
            className="w-full object-cover overflow-hidden rounded h-[200px]   screen:h-[100px]"
          />
          <img
            src={Image5}
            alt="player"
            className="w-full object-cover overflow-hidden rounded h-[200px]  screen:h-[100px]"
          />
        </div>
        <div
          className="side-box__right tablet:hidden"
          ref={sideBoxRight}
        >
          <img
            src={Image6}
            alt="player"
            className="w-full object-cover overflow-hidden rounded h-[200px]  screen:h-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MinecraftGallery;
