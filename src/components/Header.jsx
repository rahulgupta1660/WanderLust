import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="border-b">
      <div className="container mx-auto flex justify-between px-10 py-5 font-semibold">
        <div className="logo text-black text-2xl">
          <Link to="/">
            Wander<span className="text-green-500">Lust.</span>
          </Link>
        </div>
        <nav className="flex gap-10">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact us</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
