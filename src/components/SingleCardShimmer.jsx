import React from "react";
import "./Shimmer.css";

const SingleCardShimmer = () => {
  return (
    <div>
      {Array.from({ length: 1 }).map((el, index) => {
        return (
          <div key={index} className="grid grid-cols-2">
            <div>
              <p className="bg-gray-300 w-72 h-4 rounded-md shimmer mt-8">
                &nbsp;
              </p>
              <div className="flex flex-col gap-4 mt-3">
                <div className="w-full h-[30rem] rounded-xl bg-gray-300 shimmer"></div>
                <div>
                  <p className="bg-gray-300 w-[90%] h-4 rounded-md shimmer">
                    &nbsp;
                  </p>
                  <p className="bg-gray-300 w-52 h-4 rounded-md shimmer mt-3">
                    &nbsp;
                  </p>
                  <p className="bg-gray-300 w-80 h-4 rounded-md shimmer mt-8">
                    &nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleCardShimmer;
