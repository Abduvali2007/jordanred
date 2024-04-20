import React from "react";
import { useSelector } from "react-redux";

const Basket = () => {
  const { basket } = useSelector((s) => s.main);
  console.log(basket, "basket");

  return (
    <div className="text-white py-6">
      <div className="container">
        <div className=" flex items-center justify-center ">
          <div className=" w-[800px] overflow-y-scroll h-[300px] border-2 border-solid rounded-lg flex justify-start items-center py-10 flex-col croll gap-8 df">
            {basket.map((el) => (
              <div className=" w-[600px] h-[300px] ">
                <a
                  href="#"
                  class="flex w-[600px] h-[200px] flex-col items-center  border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  "
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
                   <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {el.price}$
                    </p>
                    <button
                     
                      type="button"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Delete
                    </button>
                   </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
