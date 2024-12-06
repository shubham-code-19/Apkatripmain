"use client"
import { useState } from "react";

import Link from "next/link";
import { FaChevronRight, FaTimes } from "react-icons/fa";
// Sidebar.js
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";
import { IoAirplane } from "react-icons/io5";


const Sidebar = ({ isOpen, onClose }) => {
 
  const  topFeaturestopDropDown= [
      { 
        heading: "List Your Property",
        icon:<BsFillBuildingsFill />,
        list: [
          {
            link: "",
            listName: "Benefits of Booking Directly",
          },
          {
            link: "",
            listName: "Custom Travel Guidance with Experts",
          },
          {
            link: "",
            listName: "24-Hour Cancellation",
          },
        ],
      },
      {
        heading: "Business Associates",
        icon:<MdWorkHistory />,
        list: [
          {
            link: "",
            listName: "Benefits of Booking Directly",
          },
          {
            link: "",
            listName: "Custom Travel Guidance with Experts",
          },
          {
            link: "",
            listName: "24-Hour Cancellation",
          },
        ],
      },
      {
        heading: "Corporate Travel Desc",
        icon:<IoAirplane />,

        list: [
          {
            link: "",
            listName: "Benefits of Booking Directly",
          },
          {
            link: "",
            listName: "Custom Travel Guidance with Experts",
          },
          {
            link: "",
            listName: "24-Hour Cancellation",
          },
        ],
      },
    ]
  
  

  const [topDropdown, setTopDropdown] = useState(null);
  const dropFeatureHandler=(auth)=>{
    setTopDropdown((preVal)=>preVal==auth?null:auth)
  }
  return (
    <>
      <div
        className={`fixed top-0 -left-2 w-80 z-[9999] h-full bg-[#effbff] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500`}
      >
        <button
          onClick={onClose}
          className="absolute top-[30px] right-[25px] text-black"
        >
          <FaTimes />
        </button>
        <div className="flex items-center  pt-8 pb-4 px-5">
          <div className="_profico flex-none w-10 h-10  rounded-full"></div>
          <div className="">
            <div className="text-base font-semibold">User Name</div>
            <div className="text-sm text-gray-500">Apka Apna Profile</div>
          </div>
        </div>

        <div className="gap-4 border bg-white mx-3 px-3 rounded-lg">
          <Link
            href="/MyBooking/mybooking"
            className="flex py-2 items-center hover:bg-gray-100 transition relative"
          >
            <div className="flex items-center  gap-2">
              <div className=" p-2 rounded-full">
                <i className="apkaTripBooking"></i>
              </div>
              <div className="">
                <div className="font-bold text-sm">Your Booking</div>
                <p className="text-xs text-gray-600">
                  View and manage your bookings
                </p>
              </div>
            </div>
            <FaChevronRight className="right-icon absolute" />
          </Link>
          <div className="border-t border-gray-200"></div>
          <Link
            href="/maintenance_mode"
            className="flex py-2 items-center hover:bg-gray-100 transition relative"
          >
            <div className="flex items-center  gap-2">
              <div className=" p-2 rounded-full">
                <i className="apkaTripWallet"></i>
              </div>
              <div className="">
                <div className="font-bold text-sm">Apka Trip Wallet</div>
                <p className="text-xs text-gray-600">
                  Use your wallet for hassle-free bookings
                </p>
              </div>
            </div>
            <FaChevronRight className="right-icon absolute" />
          </Link>

          <div className="border-t border-gray-200"></div>
          <Link
            href="/condition/terms-condition"
            className="flex py-3 items-center hover:bg-gray-100 transition relative"
          >
            <div className="flex items-center  gap-2">
              <div className=" p-2 rounded-full">
                <i className="apkaTripDesk"></i> {/* Replace with your icon */}
              </div>
              <div className="">
                <div className="font-bold text-sm relative">
                  Terms & Condition
                  <span className="absolute text-xs bg-red-500 text-white rounded-full px-2 -top-1 -right-8">
                    New
                  </span>
                </div>
                <p className="text-xs text-gray-600">
                  Accept terms & conditions
                </p>
              </div>
            </div>
            <FaChevronRight className="right-icon absolute" />
          </Link>

          <div className="border-t border-gray-200"></div>
          <Link
             href="/condition/privacy-policy"
            className="flex py-3 items-center hover:bg-gray-100 transition relative"
          >
            <div className="flex items-center  gap-2">
              <div className=" p-2 rounded-full">
                <i className="apkaTripDiamond"></i>
              </div>
              <div className="">
                <div className="font-bold">Privacy Policy</div>
                <p className="text-xs text-gray-600">Accept our policies</p>
              </div>
            </div>
            <FaChevronRight className="right-icon absolute" />
          </Link>
        </div>
        <div className="gap-4 border bg-white mx-3 mt-2 px-3 rounded-lg">
          <Link
            href="/maintenance_mode"
            className="flex py-2 items-center hover:bg-gray-100 transition relative"
          >
            <div className="flex items-center  gap-2">
              <div className=" p-2 rounded-full">
                <i className="apkaTripKnow"></i>
              </div>
              <div className="">
                <div className="font-bold text-sm"> Help Center</div>
                <p className="text-xs text-gray-600">
                  Contact our customer support
                </p>
              </div>
            </div>
            <FaChevronRight className="right-icon absolute" />
          </Link>

          <div className="border-t border-gray-200"></div>
          <Link
            href="/maintenance_mode"
            className="flex py-2 items-center hover:bg-gray-100 transition relative"
          >
            <div className="flex items-center  gap-2">
              <div className=" p-2 rounded-full">
                <i className="apkaTripEarn"></i>
              </div>
              <div className="">
                <div className="font-bold text-sm"> Refer & Earn</div>
                <p className="text-xs text-gray-600">
                  {" "}
                  Refer Link friend and invite <br /> them to Sign Up
                </p>
              </div>
            </div>
            <FaChevronRight className="right-icon absolute" />
          </Link>
        </div>
        <div  className="gap-4 h lg:hidden border-t border-gray-200 text-black px-3 md:px-0 bg-white mx-3 mt-2 rounded-lg">
        <ul className="featuresListTopDropDown   w-full  shadow-lg flex flex-col  gap-3 md:px-3 rounded-b  ">
            {topFeaturestopDropDown.map((item, index) => (
              <li
                key={index}
                className="relative w-full  "
                onClick={() => dropFeatureHandler(index)}
              >
                <button className="flex w-full justify-between py-2   font-bold text-sm text-nowrap hover:text-blue-500  gap-1 items-center gap-  cursor-pointer ">
                  <span className="flex items-center gap-2">{item.icon}  {item.heading}</span>
                  <FaChevronRight
                    className={`text-lg  ${topDropdown === index ? "rotate-90" : ""}`}
                  />
                </button>

                {topDropdown === index && (
                  <ul
                   
                    className="absolute mt-1 left-0  bg-white shadow-lg rounded-lg w-60 z-40 py-2"
                  >
                    {item.list?.map((listItem, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 text-sm hover:bg-gray-100 hover:text-blue-500 cursor-pointer"
                      >
                        {listItem.listName}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="gap-4 border bg-white mx-3 mt-2 px-3 rounded-lg">
          <Link
            href="/maintenance_mode"
            className="flex py-2 items-center hover:bg-gray-100 transition relative"
          >
            <div className="flex items-center  gap-2">
              <div className=" p-2 rounded-full">
                <img src="/Images/flag_IN.svg" alt="" className="w-6" />
              </div>
              <div className="">
                <p className="text-xs text-gray-600">Country/Region</p>
                <div className="font-bold text-sm"> India</div>
              </div>
            </div>
            <FaChevronRight className="right-icon absolute" />
          </Link>
          <div className="border-t border-gray-200"></div>
          <Link
            href="/maintenance_mode"
            className="flex py-2 items-center hover:bg-gray-100 transition relative"
          >
            <div className="flex items-center  gap-2">
              <div className=" p-2 rounded-full">
                <i className="apkaTripCurrency currncyCD">₹</i>
              </div>
              <div className="">
                <p className="text-xs text-gray-600"> Currency</p>
                <div className="font-bold text-sm">Indian Rupee</div>
              </div>
            </div>
            <FaChevronRight className="right-icon absolute" />
          </Link>
        </div>


      
        
      </div>
    </>
  );
};

export default Sidebar;
