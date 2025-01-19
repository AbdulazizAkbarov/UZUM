import React from "react";
import banner from "../../assets/banner.png";
import Carusel from "../Carusel";
function Section1() {
  return (
    <div className="max-w-[1440px] m-auto px-24 mt-6">
      <div className="mx-auto">
        <Carusel/>

      </div>

      <div className="flex justify-between mt-3">
        <button className="flex  items-center gap-3 bg-slate-200 px-20 py-3 font-semibold text-xm rounded-lg ">
          <img
            width={45}
            src={
              "https://static.uzum.uz/static/promo_images/c1f4ba8d-3d51-4ff8-86ee-759ce7fa4429"
            }
            alt=""
          />{" "}
          Isitgichlar
        </button>
        <button className="flex  items-center gap-3  bg-slate-200 px-20 py-3 font-semibold text-xm rounded-lg ">
          <img
            width={45}
            src={
              "https://static.uzum.uz/static/promo_images/d60d7d13-a51c-4652-9938-4ea8b69e2b28"
            }
            alt=""
          />{" "}
          Isitgichlar
        </button>
        <button className="flex  items-center gap-3 bg-slate-200 px-20 py-3 font-semibold text-xm rounded-lg">
          <img
            width={45}
            src={
              "https://static.uzum.uz/static/promo_images/7f3438b0-1e15-466f-9bf1-b275c3043feb"
            }
            alt=""
          />{" "}
          Isitgichlar
        </button>
        <button className="flex  items-center gap-3 bg-slate-200 px-20 py-3 font-semibold text-xm rounded-lg">
          <img
            width={45}
            src={
              "https://static.uzum.uz/static/promo_images/fadb7dfb-3be5-4781-b9d9-f5b390893014"
            }
            alt=""
          />{" "}
          Isitgichlar
        </button>
      </div>
    </div>
  );
}

export default Section1;
