import React, { useState } from "react";
import kredit from "../../assets/kredit.svg";
import Katalog from "./Katalog";

function HeaderBottom() {
  const [mahsulotl, setMahsulot] = useState([
    {
      Elektronika: "Elektronika",
      MaishiyTexnika: "Maishiy texnika",
      Kiyim: "Kiyim",
      Poyabzallar: "Poyabzallar",
      Aksessuarlar: "Aksessuarlar",
      GoʻzallikVaParvarish: "Goʻzallik va parvarish",
      Salomatlik: "Salomatlik",
      UyRoʻzgʻorBuyumlari: "Uy-roʻzgʻor buyumlari",
      QurilishVaTaʼmirlash: "Qurilish va taʼmirlash",
    },
  ]);
  return (
    <>
      <div className="flex items-center justify-between max-w-[1440px] m-auto px-20 mt-3 text-[grey] relative">
        <Qism1 />

        <Qism2 mahsulotl={mahsulotl} />

        <Qism3 />
      </div>
    </>
  );
}

function Qism1() {
  return <img className="w-[130px] h-[40px]" src={kredit} alt="" />;
}

function Qism2({ mahsulotl }) {
  return (
    <div>
      {mahsulotl.map((item, index) => (
        <div key={index} className="flex gap-3 text-xm ">
          <p>{item.Elektronika}</p>
          <p>{item.MaishiyTexnika}</p>
          <p>{item.Kiyim}</p>
          <p>{item.Poyabzallar}</p>
          <p>{item.Aksessuarlar}</p>
          <p>{item.GoʻzallikVaParvarish}</p>
          <p>{item.Salomatlik}</p>
          <p>{item.UyRoʻzgʻorBuyumlari}</p>
          <p>{item.QurilishVaTaʼmirlash}</p>
        </div>
      ))}
    </div>
  );
}

function Qism3() {
  return (
    <select name="" id="" className="w-[60px]">
      <option value="">Yana </option>
      <option value="">Telefon </option>
      <option value="">Soatlar </option>
      <option value="">Televizor </option>
    </select>
  );
}

export default HeaderBottom;
