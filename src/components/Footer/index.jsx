import React from "react";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall, IoMdMail, IoLocationSharp } from "react-icons/io";

export default () => {
  return (
    <div className="pt-[100px]">
      <div className="footer w-full h-[432px] bg-[#222831] py-[70px]">
        <div className="footer_cont flex justify-evenly items-center">
          <div>
            <div className="text-[28px] text-white DancingFont text-center">
              Contact Us
            </div>
            <div className="text-[16px] text-white text-center flex flex-col items-center gap-3 mt-[25px] w-[200px]">
              <a
                href="#"
                className="hover:text-[#ffbe33] flex items-center gap-2 "
              >
                <MdLocationOn />
                Location
              </a>
              <a
                href="#"
                className="hover:text-[#ffbe33] flex items-center gap-2"
              >
                <IoIosCall /> Call +01 1234567890
              </a>
              <a
                href="#"
                className="hover:text-[#ffbe33] flex items-center gap-2"
              >
                <IoMdMail /> demo@gmail.com
              </a>
            </div>
          </div>
          <div>
            <div className="text-[37px] text-white DancingFont text-center">
              Feane
            </div>
            <div className="footer_feane_text text-[16px] text-white text-center flex flex-col items-center gap-3 mt-[25px] w-[350px]">
              <div>
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with
              </div>
              <div></div>
            </div>
          </div>
          <div>
            <div className="text-[28px] text-white DancingFont text-center">
              Opening Hours
            </div>
            <div className="text-[16px] text-white text-center flex flex-col items-center gap-3 mt-[25px] w-[200px]">
              <div>Everyday</div>
              <div>10.00 Am -10.00 Pm</div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-[16px] text-white text-center mt-[60px]">
            © 2023 All Rights Reserved By Free Html Templates
          </div>
          <div className="text-[16px] text-white text-center mt-[30px]">
            © Distributed By ThemeWagon
          </div>
        </div>
      </div>
    </div>
  );
};
