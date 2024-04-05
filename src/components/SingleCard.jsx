import React from "react";
import { useLocation } from "react-router-dom";
import useFetch from "./customHooks/useFetch";
import { FaMapMarkedAlt } from "react-icons/fa";
import SingleCardShimmer from "./SingleCardShimmer";

const SingleCard = () => {
  const id = useLocation().search.substring(4);
  const { data, loading } = useFetch(
    `https://wanderlust-api-pynr.onrender.com/api/listings/${id}`
  );

  if (loading) {
    return <SingleCardShimmer />;
  }

  return (
    <div className="grid grid-cols-2">
      <div className="">
        <p className="text-2xl pb-5 font-semibold">{data.title}</p>
        <div className="flex flex-col gap-5">
          <div className="">
            <img
              src={data.image}
              className="w-full rounded-2xl h-[30rem] object-cover shadow-xl"
              loading="lazy"
              alt="place"
            />
          </div>
          <div>
            <p className="font-semibold text-xl">{data.description}</p>
            <div className="flex items-center gap-1 text-lg pt-5">
              <span className="pr-2">
                <FaMapMarkedAlt />
              </span>
              <span>{data.location},</span>
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
