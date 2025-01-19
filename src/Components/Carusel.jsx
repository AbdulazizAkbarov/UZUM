import React, { useState } from "react";
import uzum_corusel from "../assets/uzum_carousel.png";
import uzum1 from "../assets/uzum1.png";
import uzum2 from "../assets/uzum2.png";
import uzum3 from "../assets/uzum3.png";
import ong from "../assets/onga_belgisi.svg";
import chap from "../assets/chapga_belgisi.svg";

function Carusel() {
  const url = [
    {
      rasm: uzum_corusel,
    },
    {
      rasm: uzum1,
    },

    {
      rasm: uzum2,
    },

    {
      rasm: uzum3,
    },
  ];

  const [index, setIndex] = useState(0);

  const Next = () => {
    if (index < url.length - 1) {
      setIndex(index + 1);
    }
  };

  const Back = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="cards">
      <div className="wrapper">
        {index > 0 && (
          <button
            className="btn absolute z-30 left-[150px] top-[380px] bg-slate-200 px-4 py-3 rounded-[50%]"
            onClick={Back}
          >
            <img src={chap} alt="" />
          </button>
        )}
        <img
          className="rasm relative`"
          onClick={Next}
          src={url[index]}
          alt=""
        />
        {index < url.length - 1 && (
          <button
            className="btn absolute z-20 left-[1320px] top-[380px] bg-slate-200 px-4 py-3 rounded-[50%]"
            onClick={Next}
          >
            <img src={ong} alt="" />
          </button>
        )}
      </div>
      <div className="rasm_wrapper">
        <img
          src={url[index].rasm}
          alt=""
          className={`w-full h-[450px] rounded-lg 
           relative`}
          onClick={() => setIndex(i)}
        />
      </div>
    </div>
  );
}

export default Carusel;
