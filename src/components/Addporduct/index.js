import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Redux/AddProductSlice";

const Addproduct = () => {
  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const { product } = useSelector((s) => s.AddProduct);
 

  const CreateProduct = () => {
    if (
      img.trim() === "" ||
      name.trim() === "" ||
      price.trim() === "" ||
      category.trim() === ""
    ) {
  alert( "заполните пустые ячейки!!!")
    }else if(product.find((el)=> el.name === name) ){
      alert(" такой продукт уже существуеть!!!")

    }
     else{

      let NewProduct = {
        id: product.length ? product[product.length-1].id+1 : 1 ,
        img,
        price,
        name,
        category,
      };
      alert("успешно добавлен")
      setCategory('')
      setImg('')
      setPrice('')
      setName('')
      return dispatch(addProduct(NewProduct));
    }
  };
  return (
    <div className=" flex items-center justify-center flex-col text-left   ">
      <div className=" w-[400px] py-[100px] ">
        <div class="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setImg(e.target.value)}
            type="email"
            value={img}
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Product url
          </label>
        </div>{" "}
        <div class="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
            
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>{" "}
        <div class="relative z-0 w-full mb-5 flex items-center gap-4 group">
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
           
            class="block py-2.5 px-0 w-[70%] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={price}
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Price
          </label>
          <div className="">
            <select
              onChange={(e) => setCategory(e.target.value)}
              className=" bg-transparent text-white"
            >
              <option value="" className=" text-black" selected> change category</option>
              <option className=" text-black" value="man">
                MAN
              </option>
              <option className=" text-black" value="woman">
                WOMAN
              </option>
              <option className=" text-black" value="kids">
                KIDS
              </option>
              <option className=" text-black" value="sale">
                sale
              </option>
            </select>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <button
            onClick={() => CreateProduct()}
            type="button"
            class="text-white  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Add to Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
