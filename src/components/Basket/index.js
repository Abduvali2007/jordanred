import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delbtn, plus } from "../../Redux/AddToBasket";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const { basket } = useSelector((s) => s.main);
  const nav = useNavigate()
  console.log(basket, "basket");
  const dispatch = useDispatch();
  const PriceAll = basket.reduce((acc, el) => {
    return (acc = acc + +el.price);
  }, 0);

  return (
    <div className="text-white py-6">
      {basket.length ? (
        <div className="container">
          <div className=" flex items-center justify-center ">
            <div className=" w-[800px] overflow-y-scroll h-[300px] border-2 border-solid rounded-lg flex justify-start items-center py-10 flex-col croll gap-8  ">
              {basket.map((el) => (
                <div className="  w-[600px] h-[300px]  text-white ml-3  ">
                  <a
                    href="#"
                    class="flex w-[600px] h-[200px] df flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  "
                  >
                    <img
                      class="object-cover w-[145px] rounded-t-lg h-96 md:h-auto md:rounded-none md:rounded-s-lg"
                      src={el.img}
                      alt="img"
                    />
                    <div class="flex flex-col justify-between p-4 ml-11 leading-normal">
                      <div className=" flex items-center gap-[90px]">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {el.name}
                        </h5>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {el.category}
                        </h5>
                      </div>
                      <div className="flex gap-[90px] items-center">
                        <p class="mb-3 font-normal">{el.price.slice(0.3)}$</p>
                        <button
                          onClick={(e) => dispatch(delbtn(el))}
                          type="button"
                          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        >
                          Delete
                        </button>
                        <div className=" flex items-center justify-center flex-col mt-[-60px] text-3xl">
                          <button>-</button>
                          {el.quantity}
                          <button onClick={() => dispatch(plus(el))}>+</button>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div
            className=" relative overflow-hidden flex items-center justify-center bg-white ml-[400px] mt-[30px]"
            style={{
              width: "400px",
              height: "20px",
            }}
          >
            <div
              className=" absolute  left-0"
              style={{
                width: PriceAll ? `${(PriceAll / 100) * 30}px` : "30px",
                height: "23px",
                background: PriceAll ? "red" : "green",
              }}
            ></div>
          </div>
            <h1 className=" text-3xl text-white"> TotalPrice : {PriceAll}</h1>
        </div>
      ) : (
        <div className="container flex items-center justify-center">
          <h1 className=" text-3xl text-yellow-500 bg-green-900 w-[500px] h-[100px] text-center rounded-lg">
          у вас пока нету продуктов ,<br /> чтобы создать нажмите на "Х"
          <span onClick={()=> nav("/buynow")} className=" bg-red-900 px-4 rounded-lg ml-4">X</span> 
        </h1>

        </div>
      )}
    </div>
  );
};

export default Basket;
