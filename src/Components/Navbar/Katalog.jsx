import React from "react";

function Katalog() {
  return (
    <div className=" max-w-[1440px] m-auto px-20 z-50 flex">
      <div className="absolute left-20 top-[140px] z-60">
        <div className="flex items-center gap-2">
          <img
            width={"35px"}
            src={"https://static.uzum.uz/fast_categories/Ras2025.png"}
            alt="" 
          />
          <b>Qishki Savdo</b>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <img
            width={"35px"}
            src={"https://static.uzum.uz/fast_categories/%20vyg.png"}
            alt=""
          />
          <b>Har Kuni Savdo</b>
        </div>
      </div>
    

      <div className="border-l-2 border-black">

        <div className="absolute left-80 top-[140px] ">
            <h2 className="font-semibold">Elektronika</h2>
            <h3  className="font-semibold">Smartfonlar va telefonlar</h3> 
             <p>Smartfonlar alsessuarlar</p>
            <p>Smartfonlar</p>
            <p>Knopkali telefonlar</p>
            <p>Ehtiyot qisimlar va ta'minlash</p>
            <p>Statsionar telefonlar</p>
        </div>
      </div>
    </div>
  );
}

export default Katalog;
