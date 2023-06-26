import React from "react";
import { SlBasket } from "react-icons/sl";

export default (props) => {
  return (
    <div>
      <div className="menu_card xl:max-w-[360px] xl:max-h-[443px] h-auto  bg-[#222831] rounded-xl mx-auto ">
        <div className="bg-[#f1f2f3] w-full h-[215px] p-[25px] flex justify-center items-center ourCardImg">
          <img src={props.img} className="w-[152px]" alt="" />
        </div>
        <div className="p-[25px]">
          {" "}
          <div className="text-[20px] text-white font-semibold">
            {props.title}
          </div>
          <div className="text-[16px] text-white font-medium mt-[10px]">
            {props.about}
          </div>
          <div className="flex justify-between items-center mt-[10px]">
            <p className="text-[16px] text-white">{props.price}</p>
            <button className="w-[40px] h-[40px] bg-[#ffbe33] flex justify-center items-center rounded-full text-[#fff] text-[16px] font-medium hover:bg-[#E69C00]">
              <SlBasket />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
