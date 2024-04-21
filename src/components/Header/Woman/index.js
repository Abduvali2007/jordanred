import React, { useEffect } from 'react';
import { categoryWoman } from '../../../Redux/AddProductSlice';
import { useDispatch, useSelector } from 'react-redux';
import BuyCard from '../../BuyNow/BuyCard';

const Woman = () => {
    const { Woman } = useSelector((s) => s.AddProduct);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(categoryWoman());
    }, []);
    return (
        <div>
        <div className="container">
          <div className=" flex items-center justify-between py-[90px]">
            {Woman.map((el) => (
              <BuyCard el={el} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Woman;