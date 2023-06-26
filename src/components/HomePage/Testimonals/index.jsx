import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Img from "../../../assets/images/client1.jpg";
import Img1 from "../../../assets/images/client2.jpg";

export default () => {
  return (
    <div>
      <div>
        <div className="text-[40px] text-[#0c0c0c] DancingFont text-center mt-[100px]">
          What Says Our Customers
        </div>
        <Carousel
          className="rounded-xl pt-[200px] pb-[120px]"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color=""
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 -translate-y-2/4 left-4 test_left_btn xl:mt-[250px] xl:ml-[600px] lg:mt-[200px]
              lg:ml-[430px] md:mt-[260px] md:ml-[300px]"
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
              className="!absolute top-2/4 -translate-y-2/4 !right-4 test_right_btn xl:mt-[250px] xl:mr-[600px] lg:mt-[200px] lg:mr-[430px] md:mt-[260px] md:mr-[300px]"
            >
              <ArrowRightIcon strokeWidth={2} className="w-6 h-6" />
            </IconButton>
          )}
        >
          <div className=" ">
            <div className="xl:flex xl:justify-center   lg:flex lg:justify-center md:flex md:justify-center gap-[40px] mt-[-100px]">
              <div>
                <div className="testimonails_card xl:w-[500px] xl:h-[181px] lg:max-w-[450px] lg:h-[200px] md:max-w-[300px] md:h-[250px] bg-[#222831] p-[25px] rounded-md">
                  <div className="text-[15px] font-medium text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </div>
                  <div className="text-[18px] font-semibold text-white mt-[15px]">
                    Moana Michell
                  </div>
                  <div className="text-[15px] font-medium text-white mt-[7px]">
                    magna aliqua
                  </div>
                </div>
                <div className=" testimomial_Img w-[115px] h-[115px] bg-[#222831] border-4 border-[#ffbe33] rounded-full mt-[35px]">
                  <img src={Img} className="w-[115px] rounded-full" alt="" />
                </div>
              </div>
              <div>
                <div className="testimonails_card xl:w-[500px] xl:h-[181px] lg:max-w-[450px] lg:h-[200px] md:max-w-[300px] md:h-[250px] bg-[#222831] p-[25px] rounded-md">
                  <div className="text-[15px] font-medium text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </div>
                  <div className="text-[18px] font-semibold text-white mt-[15px]">
                    Mike Hamell
                  </div>
                  <div className="text-[15px] font-medium text-white mt-[7px]">
                    magna aliqua
                  </div>
                </div>
                <div className="testimomial_Img w-[115px] h-[115px] bg-[#222831] border-4 border-[#ffbe33] rounded-full mt-[35px]">
                  <img src={Img1} className="w-[115px] rounded-full" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="xl:flex xl:justify-center lg:flex lg:justify-center md:flex md:justify-center gap-[40px] mt-[-150px]">
            <div>
              <div className="testimonails_card xl:w-[500px] xl:h-[181px] lg:max-w-[450px] lg:h-[200px] md:max-w-[300px] md:h-[250px] bg-[#222831] p-[25px] rounded-md">
                <div className="text-[15px] font-medium text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </div>
                <div className="text-[18px] font-semibold text-white mt-[15px]">
                  Moana Michell
                </div>
                <div className="text-[15px] font-medium text-white mt-[7px]">
                  magna aliqua
                </div>
              </div>
              <div className="testimomial_Img w-[115px] h-[115px] bg-[#222831] border-4 border-[#ffbe33] rounded-full mt-[35px]">
                <img src={Img1} className="w-[115px] rounded-full" alt="" />
              </div>
            </div>
            <div>
              <div className="testimonails_card xl:w-[500px] xl:h-[181px] lg:max-w-[450px] lg:h-[200px] md:max-w-[300px] md:h-[250px] bg-[#222831] p-[25px] rounded-md">
                <div className="text-[15px] font-medium text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </div>
                <div className="text-[18px] font-semibold text-white mt-[15px]">
                  Mike Hamell
                </div>
                <div className="text-[15px] font-medium text-white mt-[7px]">
                  magna aliqua
                </div>
              </div>
              <div className="testimomial_Img w-[115px] h-[115px] bg-[#222831] border-4 border-[#ffbe33] rounded-full mt-[35px]">
                <img src={Img} className="w-[115px] rounded-full" alt="" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
