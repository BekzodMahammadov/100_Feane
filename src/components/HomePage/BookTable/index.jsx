import React from "react";

export default () => {
  return (
    <div>
      <div className="book_table pt-[100px] grid xl:grid-cols-2 xl:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2">
        <div className="mx-auto mt-[-60px] ">
          <div>
            <div className="title text-[40px] text-[#0c0c0c] DancingFont ">
              Book A Table
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="xl:w-[555px] h-[50px] lg:w-[450px] md:w-[330px] sm:w-[390px]  rounded-md pt-[6px] pr-[12px] pb-[6px] pl-[25px] mb-[25px] text-[16px]"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Your Phone"
                className="xl:w-[555px] h-[50px] lg:w-[450px] md:w-[330px] sm:w-[390px]  rounded-md pt-[6px] pr-[12px] pb-[6px] pl-[25px] mb-[25px] text-[16px]"
              />
            </div>
            <div>
              <select
                name=""
                id=""
                className="xl:w-[555px] h-[50px] lg:w-[450px] md:w-[330px] sm:w-[390px]  rounded-md pt-[6px] pr-[12px] pb-[6px] pl-[25px] mb-[25px] text-[16px]"
              >
                <option value="How many person ?">How many person ?</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <input
                type="date"
                className="xl:w-[555px] h-[50px] lg:w-[450px] md:w-[330px] sm:w-[390px] rounded-md pt-[6px] pr-[12px] pb-[6px] pl-[25px] mb-[25px] text-[16px]"
              />
            </div>
            <div>
              <button className="w-[157px] h-[40px] bg-[#ffbe33]  rounded-full text-[#fff] text-[16px] font-medium hover:bg-[#E69C00]">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <iframe
            className="xl:w-[555px] h-[345px] lg:w-[450px] md:w-[330px] sm:w-[390px]  rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.555347092461!2d71.26354881495746!3d40.37438277937005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bbab8025bced7d%3A0xc22cdf6b8ee85751!2sCodemy!5e0!3m2!1sru!2s!4v1670521584556!5m2!1sru!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
