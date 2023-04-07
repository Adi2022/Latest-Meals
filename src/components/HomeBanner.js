
"use client"
import React from "react";
import Image from "next/image";
import banner from "../assets/banner.jpg";
import {motion} from 'framer-motion'
const HomeBanner = () => {
  return (
    <motion.div   initial={{ opacity: 0.4 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}>
      <motion.div  animate={{ rotate: 360 }}
  transition={{
    repeat: 1,
    repeatType: "reverse",
    duration: 1,
    type: "tween",
    type: 'spring' 
  }}>
      <h1 className="text-center  text-4xl p-2 bg-[#2F1893] text-slate-100">
        Hotels & Restaurants Top Food Items
      </h1>
      </motion.div>
      

      <Image src={banner} className="w-full h-auto object-cover" alt="banner" />
    </motion.div>
  );
};

export default HomeBanner;
