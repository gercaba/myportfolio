import React, { useState } from "react";
import {MdOutlineContacts} from "react-icons/md";
import { useDarkModeContext } from "../Context/DarkModeContext";

export const Contact = () => {


  const {darkMode} = useDarkModeContext();

  //Para enviar EmailJS
  

  return (
    <section id="contact" className="relative flex flex-col justify-items-center ">
          <MdOutlineContacts className="mx-auto inline-block w-10 h-40 mb-4"/>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
      
        <div className={`lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative bg-gray-900" :"bg-green-200`}>
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            /* frameBorder={0}
            marginHeight={0}
            marginWidth={0} */
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=Barcelona,+España&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
         
        </div>
        <div className={`relative flex flex-wrap py-6 rounded shadow-md ${darkMode ? "bg-gray-900" :"bg-green-200"}`}>
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                Location
              </h2>
              <p className="mt-1">
                Barcelona <br />
                Cataluña, España
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                gcachab@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                TELEPHONE
              </h2>
              <p className="leading-relaxed">+34 630 27 58 71</p>
            </div>
          </div>
        
      </div>
    </section>
  );
};
