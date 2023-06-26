import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default () => {
  return (
    <div>
      <div className="header w-full h-[87.2vh]">
        <Carousel
          className="rounded-xl   xl:pl-[100px] lg:pl-[70px] md:pl-[50px]  h-[450px] pt-[50px]  "
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color=""
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 -translate-y-2/4 left-4 header_btn"
            >
              <ArrowLeftIcon strokeWidth={2} className="w-6 h-6" />
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color=""
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 -translate-y-2/4 !right-4 header_btn"
            >
              <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
            </IconButton>
          )}
        >
          <div className="carouselBug">
            <div className="DancingFont  text-[56px] text-[#fff] font-bold header_pad">
              Fast Food Restaurant
            </div>
            <div className="text-[14x] text-white mt-[15px] w-[590px] myText">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </div>
            <button className="w-[157px] mt-[15px] h-[40px] bg-[#ffbe33]  rounded-full text-[#fff] text-[16px] font-medium hover:bg-[#E69C00]">
              Order Now
            </button>
          </div>
          <div className="text-[#fff]  lg:pl-[70px] xl:pl-[100px] md:pl-[50px] carouselBug">
            <div className="DancingFont text-[56px] text-[#fff] font-bold">
              Fast Food Restaurant
            </div>
            <div className="text-[14x] text-white mt-[15px] w-[590px] myText">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </div>
            <button className="w-[157px] mt-[15px] h-[40px] bg-[#ffbe33]  rounded-full text-[#fff] text-[16px] font-medium hover:bg-[#E69C00]">
              Order Now
            </button>
          </div>
          <div className="text-[#fff] pl-[200px] xl:pl-[200px] lg:pl-[140px] md:pl-[100px] carouselBug">
            <div className="DancingFont text-[56px] text-[#fff] font-bold">
              Fast Food Restaurant
            </div>
            <div className="text-[14x] text-white mt-[15px] w-[590px] myText ">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </div>
            <button className="w-[157px] mt-[15px] h-[40px] bg-[#ffbe33]  rounded-full text-[#fff] text-[16px] font-medium hover:bg-[#E69C00]">
              Order Now
            </button>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
