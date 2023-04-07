"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

const page = ({ params }) => {
  const [apiData, setApiData] = useState(null);

  const { singlefood } = params;
  const getApiData = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${singlefood}`)
      .then((res) => {
        console.log(res);
        setApiData(res.data);
      });
  };

  useEffect(() => {
    getApiData();
  }, [singlefood]);

  return (
    <div className=" bg-[#2F1893] text-slate-50 min-h-full p-32">
      {apiData && (
        <div>
          <Image
            src={apiData.meals[0].strMealThumb}
            width={200}
            height={100}
            className=" transform transition duration-500 hover:scale-110 rounded-lg mb-5"
            alt={apiData.meals[0].strMeal}
            style={{ cursor: "pointer" }}
          />
          <div className="flex gap-2 sm:gap-4 items-center">
         <h1 className="text-2xl text-slate-50 font-bold mb-5">
            {apiData.meals[0].strMeal}
          </h1>
          <h1 className="text-2xl text-slate-50 font-bold mb-5">
           {apiData.meals[0].strCategory}
          </h1>
         </div>
         <ol className="list-decimal text-xl text-slate-50">
            {apiData.meals[0].strInstructions.split(" \n").map((instr) => (
              <li key={instr}>{instr}</li>
            ))}
          </ol>

          <div className="flex flex-wrap gap-4">
            {Object.keys(apiData.meals[0]).map((key, index) => {
              if (key.startsWith("strIngredient") && apiData.meals[0][key]) {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Image
                      src={`https://www.themealdb.com/images/ingredients/${apiData.meals[0][key]}-Small.png`}
                      width={32}
                      height={32}
                      alt={apiData.meals[0][key]}
                    />
                    <span className="text-xl text-slate-50 font-bold">{apiData.meals[0][key]}</span>
                    <span className="text-xl text-slate-50">{apiData.meals[0][`strMeasure${key.slice(13)}`]}</span>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
