import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryMan } from "../../../Redux/AddProductSlice";
import BuyCard from "../../BuyNow/BuyCard";

const Man = () => {
  const { Man } = useSelector((s) => s.AddProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryMan());
  }, []);

  return (
    <div>
      <div className="container">
        <div className=" flex items-center justify-between py-[90px]">
          {Man.map((el) => (
            <BuyCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Man;
