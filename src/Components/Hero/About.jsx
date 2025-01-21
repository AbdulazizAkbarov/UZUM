import React from "react";
import {  useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
function About() {
  const { id } = useParams();
  const [maxsulot, setMaxsulot] = useState();

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => res.json())
      .then((maxsulot) => {
        setMaxsulot(maxsulot);
      })

      .catch((e) => {
        console.error(e);
      });
  }, []);

  if (!maxsulot) {
    return <div>Yuklanmoqda</div>;
  }
  return (
    <div className="max-w-[1440px] mx-auto px-20">
      <img width={96} src={maxsulot.images} alt="" />

      <div>
        <h2>{maxsulot.title}</h2>
        <h2>{maxsulot.price}</h2>
        <h2>{maxsulot.description}</h2>
      </div>
    </div>
  );
}

export default About;
