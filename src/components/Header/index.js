import React, { useState } from "react";
import nike from "../../Assets/Img/Logo_NIKE 1.svg";
import jordan from "../../Assets/Img/Frame 1.svg";

import { IoIosSearch } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SearchProduct } from "../../Redux/AddProductSlice";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { product } = useSelector((s) => s.AddProduct);
  const { basket } = useSelector((s) => s.main);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const searchPro = () => {
    setOpen(!open);
    nav("/search");
  };
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
              <Link to="/">HOME</Link>
              <Link to="/man">MAN</Link>
              <Link to="/woman">WOMAN</Link>
              <Link to="/kid">KIDS</Link>
              <Link to="/sale">SALE</Link>
            </div>
            <div className=" flex gap-5">
              {open ? (
                <input
                  onChange={(e) => setValue(e.target.value)}
                  className=" py-2 px-4 text-black   rounded-lg bg-white"
                  placeholder=" search...."
                  type="text"
                />
              ) : null}

              <Link to={`/search/${value}`}>
                <h1 onClick={() => searchPro()}>
                  <IoIosSearch />
                </h1>
              </Link>
              <Link className=" relative" to={"/basket"}>
                {basket.length ? (
                  <h1 className=" absolute top-[-16px] right-[-17px] text-white text-xl flex items-center justify-center w-5 h-5 rounded-[50%] bg-red-500">{basket.length }</h1>
                ) : null}
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
