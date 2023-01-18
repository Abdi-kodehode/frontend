import React from "react";
import Header from "../../../../components/header/Header";
import {Adress} from "../../../../data/Data"

const VisitUs = () => {
  return (
    <div className="pt-20 tablet:pt-0 ">
      <Header header="Besøk Oss" />
      {Adress.map((adress,id)=>{
        return(
            <div className="flex justify-center w-2/3  gap-5 items-center m-auto pt-10 laptop:w-[90%] screen:w-[95%] tablet:gap-1 mobile:flex-col-reverse mobile:w-full mobile:px-4 mobile:pt-6" key={id}>
            <div className="w-1/2 flex flex-col gap-2 text-4xl laptop:text-3xl screen:text-2xl tablet:text-xl mobile:w-full mobile:pt-2 mobile:gap-0">
              <p>{adress.city}</p>
              <p>{adress.street}</p>
              <p>{adress.mobile}]</p>
              <p>{adress.email}</p>
            </div>
            <div className="w-1/2 tablet:w-2/3 mobile:w-full">
              <iframe
                title="home"
                src={adress.map}
                width="100%"
                height="500px"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                className=" rounded-xl mobile:h-[30vh]"
                loading="lazy"
                samesite="lax"
              />
            </div>
          </div>

        )
      })}
     
    </div>
  );
};

export default VisitUs;

