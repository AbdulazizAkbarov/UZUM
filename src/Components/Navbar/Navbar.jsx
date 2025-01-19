import React, { useState } from "react";
import uzum from "../../assets/uzum.svg";
import katalog from "../../assets/katalog.svg";
import search from "../../assets/search.svg";
import user from "../../assets/user.svg";
import like from "../../assets/like.svg";
import bag from "../../assets/bag.svg";
import Katalog from "../Navbar/Katalog";
import ClikDiv from "./ClikDiv";

function Navbar() {
  return (
    <div>
      <div className="flex items-center justify-between max-w-[1440px] m-auto mt-[17px] px-20 relative">
        <Qism1 />
        <Qism2 />
        <Qism3 />
      </div>
    </div>
  );
}

function Qism1() {
  return <img src={uzum} alt="" />;
}

function Qism2() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-3  rounded-md ">
        <div className="">
          <button
            className="flex bg-[#F0F0FF] text-[#7000FF] px-2 py-2 rounded-md font-semibold"
            onClick={() => {
              setOpen(open === false ? true : false);
            }}
          >
            <img src={katalog} alt="" />
            Katalog
          </button>
        </div>

        <div className="flex items-center border border-lightgrey w-[550px] rounded-md">
          <input
            className="outline-none ml-1"
            type="text"
            placeholder="Mahsulotlar va turkumlar izlash"
            onClick={() => {
              setOpen1(open1 === false ? true : false);
            }}
          />
          <button className=" bg-[#F2F4F7] ml-[320px]">
            <img src={search} alt="" />
          </button>
        </div>
      </div>
      {open && <Katalog />}
      {open1 && <ClikDiv />}
    </div>
  );
}

function Qism3() {
  return (
    <div className="flex items-center gap-4 ">
      <p className="flex items-center gap-1">
        <img src={user} alt="" />
        Kirish
      </p>
      <p className="flex items-center gap-1">
        <img src={like} alt="" />
        Saralanganlar
      </p>
      <p className="flex items-center gap-1">
        <img src={bag} alt="" />
        Savat
      </p>
    </div>
  );
}

export default Navbar;
