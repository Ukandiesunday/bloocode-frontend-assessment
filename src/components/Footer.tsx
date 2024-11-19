import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black h-[70px] text-white w-full text-center flex justify-center items-center font-bold text-[14px] px-[20px] py-[30px]">
      <p>&copy; Ukandie {year}</p>
    </div>
  );
};

export default Footer;
