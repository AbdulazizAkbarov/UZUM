import React, { useState } from "react";
import location from "../../assets/location.svg";
import uzb from "../../assets/ozbekiston.svg";

function HeaderTop() {
  return (
    <div>
      <div className="flex items-center justify-between px-20 py-5 bg-[#F2F4F7] max-w-[1440px] m-auto h-8">
        <Qisim1 />
        <Qism2 />

        <Qism3 />
      </div>
    </div>
  );
}

function Qisim1() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex">
        <img src={location} alt="" />

        <p>
          shahar : <a className="underline">Tashkent</a>
        </p>
      </div>
      <p>Topshirish punkitlari</p>
    </div>
  );
}

function Qism2() {
  return (
    <p className="text-gray-500">
      Buyurtmangizni 1 kunda bepul yetkazib beramiz!
    </p>
  );
}

function Qism3() {
  return (
    <div className="flex items-center gap-5">
      <p>Savol-javoblar </p>
      <p>Buyurtmalarim</p>
      <Qism4 />
    </div>
  );
}

function Qism4(parms) {
  const [change, setChange] = useState(false);

  const changeflag = () => {
    setChange((prev) => !prev);
  };
  return (
    <div onClick={changeflag} className="relative cursor-pointer">
      <p className="flex items-center ">
        {" "}
        <img src={uzb} alt="" /> O'zbekcha
      </p>

    {change&&(  <div className="">
    <p className="flex items-center gap-3 ">
        <img
          width={25}
          src={
            "https://static.vecteezy.com/system/resources/previews/016/328/914/non_2x/russia-flat-rounded-flag-icon-with-transparent-background-free-png.png"
          }
          alt=""
        />
        Ruscha</p>

        <p className="flex items-center gap-3 ">
        <img width={25} src={"https://static.vecteezy.com/system/resources/thumbnails/015/272/138/small/united-kingdom-3d-rounded-flag-with-transparent-background-free-png.png"} alt="" />
          English</p>
      </div> )}


    </div>
  );
}

export default HeaderTop;
