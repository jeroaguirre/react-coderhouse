import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, image, stock, name, price, description, category }) => {
  return (
    <div className="flex flex-col  justify-between my-4 mx-2 h-full lg:w-80 shadow-md rounded-md max-w-md w-full pb-2">
      <li className="relative h-full w-full">
        <Link to={`/details/${id}`}>
          <img
            src={image}
            placeholder="blurred"
            height={400}
            alt="item"
            className=" w-full h-80 rounded-t-md"
          />
        </Link>
      </li>
      <div className="ml-2">
        <h2 className="font-bold pt-2 text-xl">{name}</h2>
        <p className="tracking-normal">{description}</p>
        <h3 className="font-semibold ">
          {`$`}
          {price}
        </h3>
      </div>

      <div className="w-full pt-2 px-1 lg:px-2 space-y-2 flex flex-col items-center">
        <Link
          to={`/details/${id}`}
          className="py-2 px-4 bg-gray-200 text-gray-600 text-center shadow-md w-full max-w-xs"
        >
          Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
