import React from 'react';
import { useSelector } from 'react-redux';

const Basket = () => {
const {basket}  = useSelector((s)=>s.basket)
    return (
        <div>
            
        </div>
    );
};

export default Basket;