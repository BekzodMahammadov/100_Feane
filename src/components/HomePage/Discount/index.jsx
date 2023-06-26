import React from "react";
import Card from "./Card";
import Img1 from "../../../assets/images/o1.jpg";
import Img2 from "../../../assets/images/o2.jpg";

const data = [
  {
    id: 1,
    title: "Tasty Thursdays",
    discount: "20% ",
    img: Img1,
  },
  {
    id: 1,
    title: " Pizza Days",
    discount: "15% ",
    img: Img2,
  },
];

export default () => {
  return (
    <div>
      <div className="container grid  mx-auto mt-[100px] sm:grid-cols-1 sm:grid-rows-2 md:grid-cols-2 md:grid-rows-1  lg:grid-cols-2 lg:grid-rows-1 xl:grid-cols-2 grid-rows-1">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            discount={item.discount}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};
