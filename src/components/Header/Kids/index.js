import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryKid, categoryMan } from "../../../Redux/AddProductSlice";
import BuyCard from "../../BuyNow/BuyCard";

const Kid = () => {
  const { Kid } = useSelector((s) => s.AddProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryKid());
  }, []);

  return (
    <div>
      <div className="container">
        <div className=" flex items-center justify-between py-[90px]">
          {Kid.map((el) => (
            <BuyCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kid;
