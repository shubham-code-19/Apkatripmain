"use client";
import React, { useEffect, useState } from "react";

import TravellerDropDownhotels from "../TravellerDropDownhotels";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AutoSearchcity from "../AutoSearchcity";
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";
import Navbar from "../Navbar";
import { IoIosArrowDown, IoIosCheckmark } from "react-icons/io";
import { MdOutlineMeetingRoom } from "react-icons/md";

import { IoLocationSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaArrowRightLong, FaUserLarge } from "react-icons/fa6";
import { FaCalendarWeek, FaChevronDown, FaCalendarAlt } from "react-icons/fa";

const HotelsComp = () => {
  const route = useRouter();
  const localTimeZone = getLocalTimeZone();
  const [isVisible, setIsVisible] = useState("");
  const defalinfo = JSON.parse(localStorage.getItem("hotelItems"));

  const [city, setcity] = useState(
    (defalinfo && defalinfo.place) || { Name: "delhi", Code: "130443" }
  );
  const currentDate = today(localTimeZone);
  const [arivitime, setarivetime] = useState(
    new Date((defalinfo && defalinfo.checkIntime) || Date.now())
  );
  const [checkOut, setcheckOut] = useState(
    new Date((defalinfo && defalinfo.checkouttime) || arivitime)
  );
  const [adultcount, setadultcount] = useState(1);
  const [childcount, setchildcount] = useState(0);
  const [numberOfRoom, setNumberOfRoom] = useState(1);

  const handleCitySelect = (city) => {
    setcity(city);

    setIsVisible("");
  };

  const handleVisibilityChange = (value) => {
    setIsVisible(value);
  };

  const handleClick = (option) => {
    setIsVisible(option);
  };

  const handelreturn = (newRange) => {
    const date = new Date(newRange.year, newRange.month - 1, newRange.day);

    setarivetime(date);
    setIsVisible("");
  };
  const handelreturn2 = (newRange) => {
    const date = new Date(newRange.year, newRange.month - 1, newRange.day);

    setcheckOut(date);
    setIsVisible("");
  };

  const handelhotelSearch = () => {
    localStorage.setItem(
      "hotelItems",
      JSON.stringify({
        place: { Name: city.Name, Code: city.Code },
        checkIntime: arivitime,
        checkouttime: checkOut,
      })
    );
    const offset = 6 * 60 * 55 * 1000;
    const check = new Date(arivitime);

    const r_localDate = new Date(check.getTime());
    const checkindate = r_localDate.toISOString().slice(0, 10);

    const checko = new Date(checkOut);

    const r_localDateo = new Date(checko.getTime());
    const checkoutdate = r_localDateo.toISOString().slice(0, 10);
    route.push(
      `/hotels/cityName=${city.Name}&citycode=${city.Code}&checkin=${checkindate}&checkout=${checkoutdate}&adult=${adultcount}&child=${childcount}&roomes=${numberOfRoom}&page=0&star=0`
    );
  };

  



  return (
    <div className="header    relative  md:px-5  lg:px-12 xl:px-24">
      <div className=" bg-[#002043] h-[15rem] absolute inset-0  -z-10" />
      <div className=" flex justify-start lg:justify-end">
        {/* <ul className="featuresListTopDropDown hidden  bg-white w-full md:w-fit shadow-lg lg:flex  gap-3 md:px-3 rounded-b  ">
        {topAndBottomDropDown.topFeaturestopDropDown.map((item, index) => (
          <li
            key={index}
            className="relative w-full  "
            onMouseEnter={() => setTopDropdown(index)}
            // onMouseLeave={onMouseLeaveHandler}
          >
            <button className="flex text-nowrap hover:text-blue-500  gap-1 items-center gap- text-xs md:text-sm cursor-pointer py-1">
              {item.heading}
              <IoIosArrowDown
                className={`${topDropdown === index ? "rotate-180" : ""}`}
              />
            </button>

            
            {topDropdown === index && (
              <ul
                onMouseLeave={() => setTopDropdown(null)}
                className="absolute mt-1 left-0  bg-white shadow-lg rounded-lg w-max z-40 py-2"
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
      </ul> */}
      </div>

      <h5 className="text-white font-bold text-xl lg:text-2xl py-3 px-2 text-center md:text-start mt-16">
        {/* {headings[currentHeadingIndex]} */}
      </h5>
      <div className="flex flex-col r  bg-white lg:block rounded-lg  text-white   ">
        <div className="bg-gray-200 rounded-sm shadow ">
          <Navbar />
        </div>

        <div className=" px-4 border-b-2 shadow-sm     space-y-1 py-1 ">
          <div className="tabs FromDateDeapt grid lg:grid-cols-5 gap-4z">
            <div className="relative">
              <div
                onClick={() => handleClick("city")}
                className="1stInput relative rounded 	 gap-3 h-full  flex items-center px-2 w-full truncate  border border-slate-400 text-black"
              >
                <IoLocationSharp className="text-xl" />

                <button
                  className="absolute rounded-full text-white  bg-gray-400 right-0 -top-1 bg"
                >
                  {" "}
                  <RxCross2 />
                </button>
                <div className="flex flex-col">
                  <span className="text-3x text-black font-bold">
                    {city.Name}
                  </span>
                </div>
              </div>
              {isVisible == "city" && (
                <div>
                  <AutoSearchcity
                    value="From"
                    handleClosed={handleVisibilityChange}
                    onSelect={handleCitySelect}
                    visible={setIsVisible}
                  />
                </div>
              )}
            </div>

            <div className="relative">
              <div
                onClick={() => handleClick("date")}
                className="flex items-center  gap-2 px-3 py-2 border-2 text-black border-slate-200  rounded-md"
              >
                <FaCalendarAlt className="" />
                <div className="text-slate-400">
                  {arivitime && (
                    <>
                      <div className="flex items-baseline text-black">
                        <span className="text-2xl py-1 pr-1 text-black font-bold">
                          {" "}
                          {arivitime.getDate()}
                        </span>
                        <span className="text-sm font-semibold">
                          {arivitime.toLocaleString("default", {
                            month: "short",
                          })}
                          '
                        </span>
                        <span className="text-sm font-semibold">
                          {" "}
                          {arivitime.getFullYear()}
                        </span>
                        <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                      </div>
                      <p className="text-black text-xs">Check In</p>
                    </>
                  )}
                </div>
              </div>

              {isVisible == "date" && (
                <div
                  className="bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10"
                  onMouseLeave={() => setIsVisible("")}
                >
                  <Calendar
                    aria-label="Select a date"
                    value={""}
                    onChange={handelreturn}
                    minValue={currentDate}
                    disabledDatesClassName="opacity-50"
                  />
                </div>
              )}
            </div>

            <div className="relative">
              <div
                onClick={() => handleClick("checkout")}
                className="flex items-center  gap-2 px-3 py-2 border-2 text-black border-slate-200  rounded-md"
                onMouseLeave={() => setIsVisible("")}
              >
                <FaCalendarAlt className="" />
                <div className="text-slate-400">
                  {checkOut && (
                    <>
                      <div className="flex items-baseline text-black">
                        <span className="text-2xl py-1 pr-1 text-black font-bold">
                          {" "}
                          {checkOut.getDate()}
                        </span>
                        <span className="text-sm font-semibold">
                          {checkOut.toLocaleString("default", {
                            month: "short",
                          })}
                          '
                        </span>
                        <span className="text-sm font-semibold">
                          {" "}
                          {checkOut.getFullYear()}
                        </span>
                        <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                      </div>
                      <p className="text-black text-xs">Check Out</p>
                    </>
                  )}
                </div>
              </div>

              {isVisible == "checkout" && (
                <div className="bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10">
                  <Calendar
                    aria-label="Select a date"
                    value={""}
                    onChange={handelreturn2}
                    minValue={currentDate}
                    disabledDatesClassName=" opacity-50"
                  />
                </div>
              )}
            
            </div>
            <div className="relative">
              <div  onClick={()=>setIsVisible("roomcheck")} className="flex items-center gap-2 px-3 py-2 border-2 text-black border-slate-200 h-full  rounded-md" >
               
               <div className="flex items-center gap-2">
                <FaUserLarge className="" />
                <div className="text-slate-400">
                  
                  <h5 className="font-bold text-lg text-black">{adultcount+childcount}</h5>

                  <p className="text-slate-400 text-xs">Travller</p>
                </div>
                </div>
                <div className="flex items-center gap-2">
                <MdOutlineMeetingRoom className="" />
                <div className="text-slate-400">
                  
                  <h5 className="font-bold text-lg text-black">{numberOfRoom}</h5>

                  <p className="text-slate-400 text-xs">Roome</p>
                </div>
                </div>
              </div>
              {isVisible == "roomcheck" &&
              <div className="absolute w-full  top-full p-4 bg-white rounded-lg shadow-md z-50" onMouseLeave={()=>setIsVisible("")}>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-black font-semibold">Adults</p>
                      <p className="text-xs mt-1 text-gray-600">(12+ Years)</p>
                    </div>
                    <div className="flex items-center ">
                      <span className=" text-gray-600 cursor-pointer px-2 border border-r-0 py-1 rounded-tl rounded-bl" onClick={()=>  {if(adultcount>1){setadultcount(adultcount-1)}}}>
                        -
                      </span>
                      <span className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-gray-300 ">
                      {adultcount}
                      </span>
                      <span className=" text-gray-600 cursor-pointer border border-l-0 px-2 py-1  rounded-tr rounded-br" onClick={()=>setadultcount(adultcount+1)}>
                        +
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-black font-semibold">Children</p>
                      <p className="text-xs mt-1 text-gray-600">(2-12 Years)</p>
                    </div>
                    <div className="flex items-center ">
                      <span className="text-gray-600 px-2 cursor-pointer border border-r-0 py-1 rounded-tl rounded-bl"    onClick={()=>  {if(childcount>0){setchildcount(childcount-1)}}} >
                        -
                      </span>
                      <span className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-gray-300 ">
                        {childcount}
                      </span>
                      <span className="text-gray-600 cursor-pointer border border-l-0 px-2 py-1  rounded-tr rounded-br"  onClick={()=>  setchildcount(childcount+1)}>
                        +
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-black font-semibold">Rooms</p>
                      <p className="text-xs mt-1 text-gray-600"></p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl cursor-pointer" onClick={()=>  {if(numberOfRoom>1){setNumberOfRoom(numberOfRoom-1)}}}   >
                        -
                      </span>
                      <span className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-gray-300 ">
                        {numberOfRoom}
                      </span>
                      <span className="text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br cursor-pointer"  onClick={()=>  setNumberOfRoom(numberOfRoom+1)}>
                        +
                      </span>
                    </div>
                  </div>
                  <button
                  onClick={()=>setIsVisible("")}
                    id="traveLer"
                    className="bg-white border border-[#2196f3] text-[#2196f3] hover:bg-[#2196f3] hover:text-white font-bold py-2 px-4 rounded mt-4"
                  >
                    Done
                  </button>
                </div>
              </div>
              }
            </div>

            <div className="flex justify-center items-center">
              <button
                 onClick={()=>handelhotelSearch()}
                className="bg-[#0A5EB0] w-full md:w-fit  py-3 px-3  font-semibold  text-lg rounded-md  text-white "
              >
                Search Hotels
              </button>
            </div>
          </div>

         
          </div>
        </div>

        
      </div>
  
  );
};

export default HotelsComp;
