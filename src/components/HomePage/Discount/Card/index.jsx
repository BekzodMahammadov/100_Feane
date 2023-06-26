import React from "react";
import { SlBasket } from "react-icons/sl";

export default (props) => {
  return (
    <div className="mx-auto">
      <div className="discount_card flex items-center mx-auto gap-5 w-auto bg-[#222831] px-[20px] py-[15px] rounded-md xl:pr-[200px] xl:pl-[20px] lg:pr-[70px] lg:pl-[20px] md:px-[70px]">
        <div
          style={{ overflow: "hidden" }}
          className="w-[175px] h-[175px] border-4 border-[#E69C00]  rounded-full flex justify-center items-center"
        >
          <div>
            <img src={props.img} className="rounded-full" alt="" />
          </div>
        </div>
        <div>
          <div className="text-[24px] text-[#fff] DancingFont">
            {props.title}
          </div>
          <div className="text-[40px] text-[#fff] DancingFont">
            {props.discount}{" "}
            <span className="text-[16px] text-[#fff] ">Off</span>
          </div>
          <button className="w-[157px] mt-[15px] h-[40px] bg-[#ffbe33]  rounded-full text-[#fff] text-[16px] font-medium hover:bg-[#E69C00] flex items-center justify-center">
            Order Now <SlBasket />
          </button>
        </div>
      </div>
    </div>
  );
};
