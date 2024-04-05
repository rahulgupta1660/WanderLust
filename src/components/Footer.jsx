import React from "react";

const Footer = () => {
  return (
    <div className="border-t sticky bottom-0 w-full bg-white">
      <div className="container mx-auto px-10 py-3 font-light">
        &copy; {new Date().getFullYear()} WanderLust, Inc
      </div>
    </div>
  );
};

export default Footer;
