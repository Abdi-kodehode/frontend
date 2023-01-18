
import React , {useEffect} from "react";
//Animation Library
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

const TextSlide = () => {
    gsap.registerEase(ScrollTrigger)
    useEffect(()=>{
        let tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".text-slide-container",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.1,
             
            }
          });
        
          tl.to(".text-slide-one", {
            xPercent: -80
          }).to(
            ".text-slide-two",
            {
              xPercent: 100
            },
            0
          );
         
    })
  return (
    <div className="text-slide-container grid gap-2 pt-40 pb-60 laptop:pt-20 laptop:pb-32 screen:pb-20 overflow-hidden uppercase font-bold  mobile:pt-10 mobile:pb-12">
      <span className="text-slide text-slide-one text-red-900/60 text-[10rem] whitespace-nowrap leading-[120px] screen:text-8xl mobile:text-7xl ">
        Playwell Playwell Playwell Playwell Playwell Playwell Playwell Playwell
        Playwell Playwell Playwell Playwell Playwell Playwell Playwell Playwell
        Playwell Playwell Playwell Playwell Playwell Playwell Playwell Playwell
        Playwell Playwell Playwell Playwell Playwell Playwell Playwell Playwell
        Playwell Playwell Playwell Playwell Playwell Playwell Playwell Playwell
        Playwell Playwell Playwell Playwell Playwell Playwell Playwell Playwell
      </span>
      <div className=" flex gap-2 relative text-slide-two uppercase font-bold">
      <h1 className="text-slide  whitespace-nowrap text-gray-200/20 leading-[120px] text-[10rem] screen:text-8xl mobile:text-7xl  ">
        ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE
        ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE
        ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE
        ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE
        ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE
        ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE
        ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE
        ONLINE ONLINE
      </h1>
      <h1 className="text-slide text-[10rem] text-gray-200/20  whitespace-nowrap leading-[120px] right-[100%] top-0 absolute screen:text-8xl mobile:text-7xl">
        ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE
        ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE
        ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE
        ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE
        ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE
        ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE
        ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE ONLINE
        ONLINE ONLINE
      </h1>
   
      </div>
    </div>
  );
};

export default TextSlide;
