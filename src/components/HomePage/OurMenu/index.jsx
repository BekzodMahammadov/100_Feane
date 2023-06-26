import React, { useState } from "react";
import Card from "./Card";
import img1 from "../../../assets/images/f1.png";
import img2 from "../../../assets/images/f2.png";
import img3 from "../../../assets/images/f3.png";
import img4 from "../../../assets/images/f4.png";
import img5 from "../../../assets/images/f5.png";
import img6 from "../../../assets/images/f6.png";
import img7 from "../../../assets/images/f7.png";
import img8 from "../../../assets/images/f8.png";
import img9 from "../../../assets/images/f9.png";

const data = [
  {
    id: 1,
    title: "Delicious Pizza",
    about:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$20",
    img: img1,
  },
  {
    id: 2,
    title: "Delicious Burger",
    about:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$15",
    img: img2,
  },
  {
    id: 3,
    title: "Delicious Pizza",
    about:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$17",
    img: img3,
  },
  {
    id: 4,
    title: "Delicious Pasta",
    about:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$18",
    img: img4,
  },
  {
    id: 5,
    title: "Delicious Fries",
    about:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$10",
    img: img5,
  },
  {
    id: 6,
    title: "Delicious Pizza",
    about:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$20",
    img: img6,
  },
  {
    id: 7,
    title: "Delicious Burger",
    about:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$12",
    img: img7,
  },
  {
    id: 8,
    title: "Delicious Burger",
    about:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$14",
    img: img8,
  },
  {
    id: 7,
    title: "Delicious Pasta",
    about:
      "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
    price: "$10",
    img: img9,
  },
];

export default () => {
  const [category, setCategory] = useState("All");

  const handleChange = (value) => {
    setCategory(value);
  };

  return (
    <div>
      <div className="our_menu pt-[100px]">
        <div className="title text-[40px] text-[#222831] DancingFont text-center">
          Our Menu
        </div>
        <div className="flex justify-center gap-[50px] menu_btn">
          <button
            className="actived py-[7px] text-[16px]"
            onClick={() => {
              setCategory("All");
            }}
          >
            All
          </button>
          <button
            className="actived py-[7px] text-[16px]"
            onClick={() => {
              setCategory("Burger");
            }}
          >
            Burger
          </button>
          <button
            className="actived py-[7px] text-[16px]"
            onClick={() => {
              setCategory("Pizza");
            }}
          >
            Pizza
          </button>
          <button
            className="actived py-[7px] text-[16px]"
            onClick={() => {
              setCategory("Pasta");
            }}
          >
            Pasta
          </button>
          <button
            className="actived py-[7px] text-[16px]"
            onClick={() => {
              setCategory("Fries");
            }}
          >
            Fries
          </button>
        </div>
        <div className="menu_container  mt-[30px] grid grid-col-3 grid-row-3 xl:grid-cols-3 xl:grid-rows-3 mx-auto gap-y-[40px] lg:grid-cols-3 lg:grid-rows-3 lg:gap-x-6 md:grid-cols-2 md:grid-rows-5 md:gap-x-7 md:px-[20px] sm:px-[40px]">
          {data
            .filter((item) => {
              if (category == "All") {
                return data;
              } else {
                return item.title.split(" ")[1] == category;
              }
            })
            .map((item) => (
              <Card
                key={item.id}
                title={item.title}
                about={item.about}
                price={item.price}
                img={item.img}
              />
            ))}
        </div>
        <div className="flex justify-center mt-[40px]">
          <button className="px-[55px] py-[10px] bg-[#ffbe33]  rounded-full text-[#fff] text-[16px] font-medium hover:bg-[#E69C00]">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};
