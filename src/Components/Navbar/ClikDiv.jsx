import React, { useEffect, useState } from 'react'
import yulduz from "../../assets/yulduz.svg";
import Button from "../../assets/Button.svg";

function ClikDiv(open1) {
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

  return (
   
<div className='w-full h-[800px] bg-slate-200/50 fixed z-50 left-0' onClick={()=>{
  open1(false)
}}>
      
<div className=' z-40 bg-white t-0 fixed h-[100vh] w-[800px] opacity-100 overflow-auto scroll-m-0 ml-[350px] '>
      <div className=" m-auto px-24 mt-6">
        <h1 className="font-bold text-3xl">Mashhurlar {">"}</h1>

        <div className="mt-10 flex gap-5 flex-wrap">
          {data.map((item, index) => (
            <Cards key={index} product={item} />
          ))}
        </div>
      </div>
    </div>

</div>
    
  );
}

function Cards({product}) {
  return (
    <div className="w-[180px] p-1 rounded-xl">
      <img
        width={150}
        height={300}
        className="rounded-lg"
        src={product.images?.[0] || ""}
        alt={product.title || "Mahsulot rasmi"}
      />
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
          <button className="mr-4" onClick={()=>{

            product([])
          }}>
            <img src={Button} alt="Button" />
          </button>
        </div>
      </div>
    </div>
  );
}


export default ClikDiv