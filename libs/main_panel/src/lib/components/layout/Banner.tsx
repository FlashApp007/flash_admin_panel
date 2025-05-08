// src/components/Banner.js
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="bg-[rgb(44,42,70)] text-center p-3 text-white fixed top-0 left-0 right-0 z-20 ">
      <p className="text-sm">
        This is a Demo. Buy genuine GamMart from our official link.
        <a href="#" className="text-[rgb(255,117,0)] ml-2">Click Now</a>
        <span className="bg-[rgb(255,117,0)] text-[rgb(44,42,70)] px-3 py-1 rounded-md ml-2">Buy Now</span>
      </p>
    </div>
  );
};

export default Banner;