import React from "react";
import "./Shimmer.css";

const CardShimmer = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-16">
        {Array.from({ length: 29 }).map((el, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <div className="bg-gray-300 w-full h-80 rounded-2xl shimmer"></div>
              <div>
                <p className="bg-gray-300 w-52 rounded-md shimmer">&nbsp;</p>
                <p className="bg-gray-300 w-20 rounded-md mt-3 shimmer">
                  &nbsp;
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardShimmer;
