import React from "react";
import nike from "../../Assets/Img/Logo_NIKE 1.svg";
import jordan from "../../Assets/Img/Frame 1.svg";

import { IoIosSearch } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header " className=" bg-black">
      <div className="container">
        <div className="header py-[50px] ">
          <div className=" text-white text-xl flex items-center justify-between">
            <div className=" flex items-center justify-around text-2xl">
              <img src={jordan} alt="img" />
              <img src={nike} alt="img" />
            </div>
            <div className=" flex gap-10  tracking-tighter	">
              <Link to="/" >HOME</Link>
              <Link to="/man" >MAN</Link>
              <Link to="/woman">WOMAN</Link>
              <Link to="/kid">KIDS</Link>
              <Link to="/sale">SALE</Link>
            </div>
            <div className=" flex gap-5">
              <h1>
                <IoIosSearch />
              </h1>
              <Link to={"/basket"}>
                 <HiShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
