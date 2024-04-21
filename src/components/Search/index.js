import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BuyCard from '../BuyNow/BuyCard';

const Search = () => {
  const { product } = useSelector((s) => s.AddProduct);
  const {proName} = useParams()
  console.log(proName,"name");
  let FindProduct = product.find((el)=>el.name === proName)
  console.log(FindProduct,"pro");
  return (
        <div>
            {
              FindProduct?.map((el)=> <BuyCard el={el}/>)
            }
        </div>
    );
};

export default Search;