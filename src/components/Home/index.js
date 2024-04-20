import React from "react";
import bg from "../../Assets/Img/bg with shoe edited in photoshop.png";
import pink from "../../Assets/Img/Untitled-1.svg";
import green from "../../Assets/Img/neon green.svg";
import red from "../../Assets/Img/red.svg";
import {  useNavigate } from "react-router-dom";

const Home = () => {
    const nav = useNavigate()
  return (
    <div id="home ">
      <div className="home">
        <img className=" relative px-[50px]" src={bg} alt="img" />
        <div className=" absolute text-white text-3xl flex items-center gap-5  right-[290px]  bottom-[-40px]  ">
          <h1 className=" text-orange-700 text-[60px]">134$</h1>
          <h2>
            JORDAN <br /> JUMPMAN{" "}
          </h2>
          <p>2021 pf</p>
          <button className=" absolute right-[60px]  bottom-[70px] bg-orange-700 px-[10px] py-[4px] rounded-[20px] text-xl  flex items-center justify-center text-center">
            exclusive
          </button>
        </div>
        <div className="  flex items-center justify-between bottom-[-300px] text-white absolute gap-[80px]">
          <div className=" flex items-center flex-col ">
            <h2>CHOOSE COLOR : </h2>
            <div className=" flex">
              <img src={pink} alt="img" />
              <img src={green} alt="img" />
              <img src={red} alt="img" />
            </div>
          </div>
          <div className=" flex gap-3">
            <button  onClick={()=> nav("/addproduct")} className=" bg-white w-[90px] py-[8px] text-black text-xs text-center">
              ADD TO CART
            </button>
            <button 
            onClick={()=> nav('/buynow')} className=" bg-transparent  w-[90px] py-[8px] text-white border-solid border-2  text-xs text-center">
              BUY NOW
            </button>
          </div>
          <div className=" flex flex-col ">
            <h1 className=" text-xl">INSPIRATION</h1>
            <p className=" text-xs">
              Inspired by the design of the latest Air Jordan game shoe <br />,
              the Jordan Jumpman 2021 helps up-and-coming players <br /> level
              up their game.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
