"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const FoodCards = () => {
  const [foods, setFoods] = useState([]);

  const getApiData = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`)
      .then((res) => {
        console.log(res);
        setFoods(res.data.meals);
      });
  };
  
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <div className="px-2 bg-[#2F1893] text-slate-50 p-7">
        <h2 className="text-3xl text-slate-50 text-center mb-5">Latest Meals</h2>
        <div className="flex flex-wrap mx-2 sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {foods.map((item) => {
            return (
              <div key={item.idMeal} className="grid justify-center text-center place-content-center">
                <Link href={`/${item.idMeal}`}>
                  <Image
                    src={item.strMealThumb}
                    width={200}
                    height={100}
                    className="transform transition duration-500 hover:scale-110 rounded-lg mb-2"
                    alt="banner"
                    style={{ cursor: "pointer" }}
                  />
                </Link>

                <div className="h-12 flex justify-center place-content-center md:p-2 xs:justify-center sm:place-content-center">
                  {item.strMeal}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FoodCards;
