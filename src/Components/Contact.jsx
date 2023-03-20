import React from "react";
import {MdOutlineContacts} from "react-icons/md";
import { useGeneralContext } from "../Context/GeneralContext";

export const Contact = () => {


  const {darkMode, lenguage} = useGeneralContext();


  return (
    <section id="contact" className={`relative flex flex-col justify-items-center ${darkMode ? "bg-gray-900 body-font" : "bg-green-200"}`}>
          <MdOutlineContacts className={`mx-auto inline-block w-10 h-32 mb-4 ${darkMode ? "text-white":"text-stone-900"}`} />
      <div className="container px-5 pb-10 mx-auto flex sm:flex-nowrap flex-wrap justify-around">
      
        <div className={`lg:w-2/4 md:w-full rounded-lg overflow-hidden sm:mr-0 p-10 flex items-end justify-start  ${darkMode ? "bg-gray-900" :  "bg-green-200"}`}>
          <iframe
            
            title="map"
            className="w-full"
            style={{ filter: "opacity(0.9)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Barcelona,+España&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
         
        </div>
        <div className={`lg:flex-col flex w-fit flex-wrap py-6 font-Lato rounded shadow-md ${darkMode ? "bg-[#2A303C]" :"bg-[#1F2937]"}`}>
            <div className="lg:w-1/2 px-10">
              <h2 className={`title-font font-semibold font-Lato tracking-widest text-xs ${darkMode ? "text-white":"text-white"}`}>
              {lenguage === 'ES' ? "UBICACIÓN":"LOCATION"}
              </h2>
              <p className={`mt-1 ${darkMode ? "text-white":"text-white"}`}>
                Barcelona <br />
                {lenguage === 'ES' ? "Cataluña, España":"Catalonia, Spain"}
              </p>
            </div>
            <div className="lg:w-1/2 lg:mt-6 px-10 mt-4">
              <h2 className={`title-font font-semibold tracking-widest text-xs ${darkMode ? "text-white":"text-white"}`}>
                EMAIL
              </h2>
              <a href="email" className={`leading-relaxed ${darkMode ? "text-white":"text-white"}`}>
                gcachab@gmail.com
              </a>
              
            </div>
          </div>
        
      </div>
    </section>
  );
};
