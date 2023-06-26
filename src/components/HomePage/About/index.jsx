import React from "react";
import Img from "../../../assets/images/about-img.png";

export default () => {
  return (
    <div>
      <div className="about w-full h-[120vh] bg-[#222831] flex justify-center items-center gap-[10px] mt-[100px] ">
        <div className=" mx-auto py-[90px]">
          <img
            src={Img}
            className="xl:w-[445px] xl:h-[607px] md:w-[330px] md:h-[450px] sm:w-[395px] sm:h-[539px]"
            alt=""
          />
        </div>
        <div className="mx-auto about_Bug">
          <div className="text-[40px] text-white DancingFont">We Are Feane</div>
          <div className="text-[16px] text-white font-medium xl:w-[555px] md:w-[330px] mt-[15px] about_text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </div>
          <div className="mt-[30px]">
            <button className="w-[157px] h-[40px] bg-[#ffbe33]  rounded-full text-[#fff] text-[16px] font-medium hover:bg-[#E69C00]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
