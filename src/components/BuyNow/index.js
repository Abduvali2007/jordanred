import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BuyCard from "./BuyCard";

const BuyNow = () => {
  const { product } = useSelector((s) => s.AddProduct);
  const dispatch = useDispatch();
  console.log(product, "paoi");

  return (
    <div className="container ">
      <div className="flex items-center  justify-between flex-wrap">
        {product.map((el) => (
          <div className=" flex items-center justify-between  flex-wrap py-[90px]">
            <BuyCard el={el} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyNow;
