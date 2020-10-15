import React, { useEffect, useState } from "react";
import { getAvengers } from "../Avenger.service";
import AvengerItem from "./AvengerItem/AvengerItem";

const AvengerList = () => {
  const [avengers, updateAvengers] = useState([]);

  useEffect(() => {
    getAvengers().then((data) => {
      updateAvengers(data);
    });
  }, []);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
            Avengers
          </p>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            A List of Powerful Avengers
          </h3>
          <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {avengers &&
              avengers.map((avenger) => (
                <AvengerItem avenger={avenger} key={avenger.id} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AvengerList;
