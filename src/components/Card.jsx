import React from "react";
import { Link } from "react-router-dom";

const Card = ({ listings }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-16">
        {listings.map((listing) => {
          return (
            <div key={listing._id}>
              <Link to={`rooms?id=${listing._id}`}>
                <div className="flex flex-col gap-4">
                  <div className="">
                    <img
                      src={listing.image}
                      className="w-full h-80 object-cover rounded-2xl"
                      loading="lazy"
                      alt="place"
                    />
                  </div>
                  <div>
                    <p>{listing.title}</p>
                    <p>₹{listing.price.toLocaleString("en-IN")}</p>
                    <p></p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
