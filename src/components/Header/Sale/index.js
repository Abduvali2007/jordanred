import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryMan, categorySale } from "../../../Redux/AddProductSlice";
import BuyCard from "../../BuyNow/BuyCard";

const Sale = () => {
  const { Sale } = useSelector((s) => s.AddProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categorySale());
  }, []);

  return (
    <div>
      <div className="container">
        <div className=" flex items-center justify-between py-[90px]">
          {Sale.map((el) => (
            <BuyCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;
