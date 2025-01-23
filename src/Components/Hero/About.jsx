import React from "react";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import  axios  from "axios";
import like from "../../assets/like.svg";

import yulduz from "../../assets/yulduz.svg";
function About() {
  const { id } = useParams();
  const [maxsulot, setMaxsulot] = useState();

  useEffect(() => {
    axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) => {
         setMaxsulot(res.data);
    });
  }, []);

  if (!maxsulot) {
    return <div>Yuklanmoqda</div>;
  }
  return (
    <div className="max-w-[1440px] mx-auto px-20 mt-8 flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-semibold mb-2">{maxsulot.title}</h2>
        <h2 className="text-[grey] flex items-center gap-3 mb-3">
          <img src={yulduz} alt="" />
          4.9 (2356 sharh) 682 fotosurat + 1400 buyurtma
        </h2>
        <div className="flex gap-1">
          <img
            width={380}
            className="rounded-lg"
            src={maxsulot.images}
            alt=""
          />
          <img
            width={350}
            className="rounded-lg"
            src={maxsulot.images}
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="border border-black p-6 w-[450px] h-[450px] rounded-xl">
          <h2 className="text-3xl font-bold">
            {maxsulot.price}.000 so'm{" "}
            <del className="text-[grey] text-xl">90.000 so'm</del>{" "}
            <p className="bg-[#7000FF] inline-block text-xl rounded-2xl text-white px-3 font-mono">
              -35%
            </p>
          </h2>

          <h2 className="bg-[#7000FF] inline-block text-white px-2 rounded-xl mt-3">
            Super narx
          </h2>

          <div className="flex items-center bg-slate-200 p-3 mt-4 rounded-lg">
            <h2 className="bg-[yellow] inline-block px-3 rounded-xl  text-black font-semibold">
              {" "}
              oyiga 3 550 so'mdan
            </h2>
            <p className="">muddatli to'lov</p>

            <p className="ml-20">{">"}</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="bg-slate-200 py-3 w-[340px] rounded-lg p-3">
              1 kilikda xarid qilish
            </div>
            <div className="bg-slate-200 p-3 rounded-lg">
              <img src={like} alt="" />
            </div>
          </div>

          <button className="bg-[#7000FF] py-3 w-full text-white mt-4 rounded-lg  && hover:opacity-80">
            Savatga Qo'shish
          </button>

          <div className="flex items-center gap-2 mt-4 mb-4">
            <img
              src={"https://uzum.uz/static/img/icons/checkmark.svg"}
              alt=""
            />
            <p>10 dona xarid qilish mumkin</p>
          </div>

          <div className="flex items-center gap-2">
            <img
              width={40}
              height={40}
              src={
                "https://ke-images.servicecdn.ru/static/product-action/badge_bought.png"
              }
              alt=""
            />

            <p>Bu haftada 6041 kishi sotib oldi</p>
          </div>

          {/* <p>{maxsulot.description}</p> */}
        </div>
      </div>
    </div>
  );
}

export default About;
