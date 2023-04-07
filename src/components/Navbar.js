"use client";

import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";

const Navbar = () => {
  const [tab, setTab] = useState("Home");
  const [toggel, setToggel] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleToggel = () => {
    // setToggel(!toggel);
    setShowMenu(!showMenu);
  };

  

  return (
    <>
      <div className="flex  w-full  items-center justify-between p-4 bg-[#2F1893] text-slate-50">
        <span className="text-2xl font-bold">LOGO</span>
        <span className="flex md:hidden text-2xl menu " onClick={handleToggel}>
          <HiMenu />
        </span>
        <div className="hidden md:flex items-center justify-end space-x-4 navitems">
          <ul className="flex  items-center justify-end space-x-6">
            <li>
              {" "}
              <Link
                href="/"
                onClick={() => setTab("Home")}
                className={`${tab === "Home" ? "active" : "inactive"}`}
              >
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/about"
                className={`${tab === "About" ? "active" : ""}`}
                onClick={() => setTab("About")}
              >
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/services"
                className={`${tab === "Services" ? "active" : ""}`}
                onClick={() => setTab("Services")}
              >
                Services
              </Link>
            </li>
            <li>
              {" "}
              <Link
                href="/contact"
                className={`${tab === "Contact" ? "active" : ""}`}
                onClick={() => setTab("Contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* create a dropdown to toggel */}

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          showMenu ? "block" : "hidden"
        }`}
        onClick={handleToggel}
      ></div>
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-[#2F1893] p-10 bg-fixed text-slate-50 z-50 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        } transition-all delay-200 md:hidden`}
      >
        <ul className="flex flex-col items-start justify-center gap-4 p-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
