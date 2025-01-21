import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Correct import for Link

import yulduz from "../../assets/yulduz.svg";
import Button from "../../assets/Button.svg";

function Section2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="max-w-[1440px] m-auto px-24 mt-6">
        <h1 className="font-bold text-3xl">Mashhurlar {">"}</h1>

        <div className="mt-10 flex gap-5 flex-wrap">
          {data.map((item) => (
            <Cards key={item.id} product={item} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Cards({ product, handleDelete }) {
  return (
    <div className="w-[230px] p-1 rounded-xl">
      <Link to={`/about/${product.id}`}>
        <img
          width={200}
          height={300}
          className="rounded-lg"
          src={product.images?.[0] || ""}
          alt={"s"}
        />
      </Link>
      <div>
        <p className="mt-2">{product.title || "No Title"}</p>
        <p className="flex items-center gap-2 text-gray-400 text-sm">
          <img src={yulduz} alt="Yulduz" />
          4.8 (1646 sharsh)
        </p>
        <p className="bg-[#FFFF00] inline-block px-3 rounded-lg text-sm">
          {product.price ? `${product.price} so'm/oyiga` : "Narx mavjud emas"}
        </p>
        <br />
        <br />
        <div className="flex justify-between items-center">
          <div>
            <del className="text-gray-400">9000</del>
            <p className="text-xl font-semibold">
              {product.price ? `${product.price} so'm` : "Narx mavjud emas"}
            </p>
          </div>
          <button
            className= ""
            onClick={() => handleDelete(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
