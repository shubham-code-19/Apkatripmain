"use client";

import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaEnvelope,
  FaEyeDropper,
  FaTimes,
} from "react-icons/fa";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./AllComponent/Navbar";
import Cookies from "js-cookie";
import { IoMdCall } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

const Topbar = () => {
  const router = useRouter();

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    // Set the initial state from cookies (if available)
    const localeFromCookie = Cookies.get("locale");
    if (localeFromCookie) setSelectedLang(localeFromCookie);
  }, []);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLang(newLang);
    Cookies.set("locale", newLang); // Save the selected language in cookies
    // router.reload(); // Reload to apply the new locale
    router.refresh();
  };

  const openNav3 = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const [showPopup, setShowPopup] = useState(null);
  const [hasNewNotification, setHasNewNotification] = useState(true);
  const dummyNotifications = [
    "You have a new message.",
    "Your booking is confirmed.",
    "Your flight has been delayed.",
  ];

  const togglePopup = (id) => {
    if (showPopup === id) {
      setShowPopup(null);
    } else {
      setShowPopup(id);
      setHasNewNotification(false);
    }
  };
  const [activeTab, setActiveTab] = useState("signup");

  const [countryOpner, setCounrtyOpner] = useState(false);
  const countryLanguages = [
    { name: "English (US)", image: "/images/flags/us.png" },
    { name: "Spanish (Spain)", image: "/images/flags/spain.png" },
    { name: "French (France)", image: "/images/flags/france.png" },
    { name: "German (Germany)", image: "/images/flags/germany.png" },
    { name: "Italian (Italy)", image: "/images/flags/italy.png" },
    { name: "Portuguese (Brazil)", image: "/images/flags/brazil.png" },
    { name: "Russian (Russia)", image: "/images/flags/russia.png" },
    { name: "Chinese (China)", image: "/images/flags/china.png" },
    { name: "Japanese (Japan)", image: "/images/flags/japan.png" },
    { name: "Korean (South Korea)", image: "/images/flags/south-korea.png" },
    { name: "Hindi (India)", image: "/images/flags/india.png" },
    { name: "Arabic (Saudi Arabia)", image: "/images/flags/saudi-arabia.png" },
    { name: "Turkish (Turkey)", image: "/images/flags/turkey.png" },
    { name: "Thai (Thailand)", image: "/images/flags/thailand.png" },
    { name: "Dutch (Netherlands)", image: "/images/flags/netherlands.png" },
    { name: "Swedish (Sweden)", image: "/images/flags/sweden.png" },
    { name: "Norwegian (Norway)", image: "/images/flags/norway.png" },
    { name: "Danish (Denmark)", image: "/images/flags/denmark.png" },
    { name: "Finnish (Finland)", image: "/images/flags/finland.png" },
    { name: "Polish (Poland)", image: "/images/flags/poland.png" },
    {
      name: "Czech (Czech Republic)",
      image: "/images/flags/czech-republic.png",
    },
    { name: "Greek (Greece)", image: "/images/flags/greece.png" },
    { name: "Vietnamese (Vietnam)", image: "/images/flags/vietnam.png" },
    { name: "Indonesian (Indonesia)", image: "/images/flags/indonesia.png" },
  ];


  return (
    <div className="bg-red-400 border-b py-3   lg:py-4 relative md:sticky top-0 navbar-main  border-blue-100 px-4  md:px-8 lg:px-16 xl:px-20">
      <div className="container mx-auto flex py-0  flex-row justify-between items-center">
        <div className="flex gap-2 items-center space-x-2">
          <div
            className="flex   lg:hidden flex-col  justify-center cursor-pointer"
            onClick={openNav3}
          >
            <div className="w-6 h-[3px] bg-gray-800 mb-1"></div>
            <div className="w-5 h-[2px] bg-gray-800 mb-1"></div>
            <div className="w-4 h-[2px] bg-gray-800"></div>
          </div>
          <Link href="/">
            <img
              src="/Images/newlogo.png"
              alt=""
              className="h-5 md:h-[30px]"
            />
          </Link>
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </div>

        {/* <Navbar /> */}

        <div className="Contact-county-login-singnup flex items-center gap-4">
          <a href="tel:+9877579319" className="hidden lg:block">
            <div className="border border-gray-300 rounded-full  text-white px-4 text-center shadow-md cursor-pointer transition duration-300 flex items-center gap-4 relative">
              {/* Ringing Call Icon */}
              <IoMdCall className="text-green-500  z-20 topPhoneRingingAnime absolute bottom-0 left-1  text-xl animate-pulse" />

              {/* User Image */}
              <div className="flex-shrink-0">
                <img
                  src="/Images/TopPhoneRing.webp"
                  alt="User"
                  className=" topPhoneRingingAnime rounded-full h-10 w-10 border-2 border-white"
                />
              </div>

              {/* Call Text */}
              <p className="text-sm  font-semibold">
                Book Now - Call us 24/7:{" "}
                <span className="font-bold text-[#2F80ED]">+91 9877579319</span>
              </p>
            </div>
          </a>
          <a
            href="tel:+9877579319"
            className="fixed topPhoneRingingAnime bottom-4 right-4 lg:hidden"
          >
            <div
              className="flex  relative items-center gap-4 p-2 bg-gradient-to-tr from-slate-100 via-sky-200
 text-white rounded-full shadow-lg cursor-pointer transition-all duration-300"
            >
              {/* Ringing Call Icon */}
              <IoMdCall className="text-green-500 text-3xl absolute  bottom-0 -translate-y-2  " />

              {/* User Image */}
              <div className="flex-shrink-0">
                <img
                  src="/Images/TopPhoneRing.webp"
                  alt="User"
                  className="rounded-full h-12 w-12 border-2 border-white"
                />
              </div>
            </div>
          </a>

          <div className="flex  justify-between items-center   ">
            <div className="flex items-center space-x-2">
              {/* <div
                className="relative hidden  "
                onMouseEnter={() => handleMouseEnter("support")}
              >
                <button className="flex items-center ">
                  <div className="supportusrico meuicowidth bg-gray-600 p-2 rounded-full"></div>
                  <FaChevronDown />
                </button>
                {openDropdown === "support" && (
                  <div
                    className="absolute w-72 z-[999] top-full right-0 mt-2 bg-white text-black rounded-lg shadow-two"
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex items-center  border-b p-3">
                      <span className="menuropos callsupport-roico w-10 h-10 rounded-lg"></span>
                      <Link href="tel:9877579319" className="">
                        <span className="font-semibold text-xs">
                          Call Support
                        </span>
                        <span className="block text-sm font-semibold text-blue-600">
                          Tel : 9877579319
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center p-3">
                      <span className="callsupport-roico mailsupport-roico w-10 h-10 bg-[#f9f8fa] rounded-lg"></span>
                      <Link href="mailto:care@apkatrip.com" className="">
                        <span className="font-semibold text-xs">
                          Mail Support
                        </span>
                        <span className="block text-sm font-semibold text-blue-600">
                          Care@apkatrip.com
                        </span>
                      </Link>
                    </div>
                  </div>
                )}
              </div> */}

              {/* <div
                className="country selection relative flex gap-3"
                onMouseEnter={() => handleMouseEnter("langSelect")}
              >
                <button className="flex items-center space-x-1">
                  <img src="/Images/flag_IN.svg" width="18" alt="" />
                  <span>India</span>
                  <FaChevronDown />
                </button>
                {openDropdown === "langSelect" && (
                  <div
                    className="absolute w-72 z-[999] p-2 top-full right-0 mt-2 bg-white text-black rounded-lg shadow-two"
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="flex justify-between">
                      <div className="">
                        <p className="font-semibold text-xs">Choose Country</p>
                        <div className="flex flex-col mt-2 space-y-2">
                          <div
                            className="flex items-center cursor-pointer"
                            onClick={() =>
                              console.log("SetCountryCode('IN','India')")
                            }
                          >
                            <img src="/Images/flag_INR.svg" width="18" alt="" />
                            <span className="ml-2 font-semibold text-sm">
                              India
                            </span>
                          </div>
                          <div
                            className="flex items-center cursor-pointer"
                            onClick={() =>
                              console.log("SetCountryCode('AE','UAE')")
                            }
                          >
                            <img src="/Images/flag_AED.svg" width="18" alt="" />
                            <span className="ml-2 font-semibold text-sm">
                              UAE
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <p className="font-semibold text-xs">Choose Currency</p>
                        <div className="mt-2">
                          <div className="flex flex-col space-y-2">
                            <div className="flex items-center cursor-pointer">
                              <span className="ml-2 font-semibold text-sm">
                                INR
                              </span>
                            </div>
                            <div className="flex items-center cursor-pointer">
                              <span className="ml-2 font-semibold text-sm">
                                AED
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 border-t border-gray-200">
                      <p className="font-semibold text-xs mt-2">
                        Choose Language
                      </p>
                      <div className="mt-2 h-16 overflow-hidden overflow-y-auto grid grid-cols-3 gap-1 justify-between">
                        {[
                          "en",
                          "hi",
                          "bn",
                          "ar",
                          "pa",
                          "gu",
                          "ru",
                          "sp",
                          "fr",
                          "ta",
                        ].map((langCode) => (
                          <label
                            key={langCode}
                            className="border flex items-center px-2 py-1 cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="optLang"
                              value={langCode}
                              checked={selectedLang === langCode}
                              onChange={handleLanguageChange}
                              className="mr-2"
                            />
                            <span className="font-semibold text-xs">
                              {langCode === "en"
                                ? "English"
                                : langCode === "hi"
                                ? "Hindi"
                                : langCode === "bn"
                                ? "Bengali"
                                : langCode === "ar"
                                ? "Arabic"
                                : langCode === "pa"
                                ? "Punjabi"
                                : langCode === "gu"
                                ? "Gujarati"
                                : langCode === "sp"
                                ? "Spanish"
                                : langCode === "fr"
                                ? "French"
                                : langCode === "ru"
                                ? "Russian"
                                : "Tamil"}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div> */}

              {/* counry selction  */}
              <div className="ContrySection">
                <button
                  onClick={() => setCounrtyOpner(!countryOpner)}
                  className="flex relative z-40 items-center space-x-1"
                >
                  <img src="/Images/flag_IN.svg" width="18" alt="" />
                  <span>India</span>
                  <FaChevronDown
                    className={`${countryOpner && "rotate-180"}`}
                  />
                </button>
                {countryOpner && (
                  <div className="fixed flex justify-center items-center bg-[rgba(0,0,0,0.5)] inset-0">
                    <div className="h-[600px] w-[800px] rounded-lg p-3 bg-white">
                      <div className="space-y-5 ">
                        <div className="flex justify-between">
                          <h4 className="font-extrabold text-lg">Languages</h4>
                          <button
                            onClick={() => setCounrtyOpner(false)}
                            className=""
                          >
                            <RxCross2 />
                          </button>
                        </div>
                        <p className="text-sm font-bold">Cureent Language</p>
                        <div className="flex items-center text-xs gap-3">
                          <img src="/Images/flag_INR.svg" width="18" alt="" />{" "}
                          <p>English (India)</p>
                        </div>
                      </div>
                      <div className="h-[2px] mt-5 bg-gray-200"></div>
                      <div className="Languages-choose">
                        <h4 className="font-bold text-sm">All Languages</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3  gap-4">
                          {countryLanguages.map((lang, index) => (
                            <div
                              key={index}
                              className="flex  text-xs items-center gap-2 p-2 "
                            >
                              <img
                                src={lang.image}
                                alt={lang.name}
                                className="w-6 h-6 rounded"
                              />
                              <span>{lang.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* below md screen  */}
              <div className="">
                <div
                  className="md:hidden relative top-[4px] flex ml-5"
                  onClick={() => togglePopup(2)} // Toggle popup with ID 2
                >
                  {hasNewNotification && (
                    <p className="w-2 h-2 bg-[#E91E63] rounded-full absolute top-0 right-0"></p>
                  )}
                  <span className="notibellico w-4 h-6 bg-cover bg-no-repeat"></span>
                </div>

                {showPopup === 2 && (
                  <div className="fixed top-0 -right-2 w-80 z-[9999] h-full bg-[#effbff] transform translate-x-0 transition-transform duration-500">
                    <button
                      onClick={() => togglePopup(2)} // Close popup
                      className="absolute top-[20px] right-[25px] text-black"
                    >
                      <FaTimes />
                    </button>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold mb-4">
                        Notifications
                      </h2>
                      {dummyNotifications.length > 0 ? (
                        <ul>
                          {dummyNotifications.map((notification, index) => (
                            <li
                              key={index}
                              className="p-2 mb-2 bg-gradient-to-b from-white via-[#fafdff] to-[#fafdff]"
                            >
                              {notification}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>No new notifications.</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* login and singup  */}
            <div className=" md:flex items-center justify-center space-x-4 mt-1  hidden ">
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("signUp")}
              >
                <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white px-6 py-2 font-semibold rounded-full text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-300 cursor-pointer">
                  Login or Signup
                </div>

                {openDropdown === "signUp" && (
                  <div
                    className="absolute w-72 z-[999] top-full right-0 mt-2 bg-white text-black rounded-lg shadow-two"
                    onMouseLeave={handleMouseLeave}
                  >
                    <div>
                      <div
                        className="flex items-center  border-b p-3"
                        onClick={() => togglePopup(1)}
                      >
                        <span
                          className="w-10 h-10 bg-[#f9f8fa] bg-center rounded-lg bg-no-repeat mr-2 custlog-roico"
                          style={{ backgroundSize: "100%" }}
                        ></span>
                        <div>
                          <span className="font-semibold text-xs">
                            Customer Login
                          </span>
                          <span className="block text-sm font-semibold">
                            Login & check bookings
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/admin-login"
                      className="flex items-center  border-b p-3"
                    >
                      <span
                        className="w-10 h-10 bg-[#f9f8fa] bg-center rounded-lg bg-no-repeat mr-2 corplog-roico"
                        style={{ backgroundSize: "100%" }}
                      ></span>
                      <div>
                        <span className="font-semibold text-xs">
                          Admin Login
                        </span>
                        <span className="block text-sm font-semibold">
                          Login your admin account
                        </span>
                      </div>
                    </Link>

                    <Link href="/profile" className="flex items-center p-3">
                      <span
                        className="w-10 h-10 bg-[#f9f8fa] bg-center rounded-lg bg-no-repeat mr-2 mybooking-roico"
                        style={{ backgroundSize: "100%" }}
                      ></span>
                      <div>
                        <span className="font-semibold text-xs">
                          My Booking
                        </span>
                        <span className="block text-sm font-semibold">
                          Manage your bookings here
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
                {showPopup === 1 ? (
                  <div className="fixed inset-0 flex z-[9999] items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg max-w-sm w-full">
                      <div className="flex items-center mb-4 justify-between">
                        <h2 className="text-lg font-bold">
                          {activeTab === "signup" ? "Sign Up" : "Login"}
                        </h2>
                        <button className="text-sm" onClick={togglePopup}>
                          <FaTimes />
                        </button>
                      </div>
                      <div className="mb-4">
                        <div className="flex border-b">
                          <button
                            className={`w-1/2 py-2 text-sm font-semibold ${
                              activeTab === "signup"
                                ? "border-b-2 border-blue-500"
                                : ""
                            }`}
                            onClick={() => setActiveTab("signup")}
                          >
                            Sign Up
                          </button>
                          <button
                            className={`w-1/2 py-2 text-sm font-semibold ${
                              activeTab === "login"
                                ? "border-b-2 border-blue-500"
                                : ""
                            }`}
                            onClick={() => setActiveTab("login")}
                          >
                            Login
                          </button>
                        </div>
                      </div>
                      <form>
                        {activeTab === "signup" ? (
                          <>
                            <div className="mb-4 ">
                              <label className="block text-sm relative font-semibold mb-2">
                                Email
                                <FaEnvelope className="absolute right-3 top-10" />
                              </label>
                              <input
                                type="email"
                                className="w-full p-2 border rounded-md"
                                placeholder="Enter your email"
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-semibold relative mb-2">
                                Password
                                <FaEyeDropper className="absolute right-3 top-10" />
                              </label>
                              <input
                                type="password"
                                className="w-full p-2 border rounded-md"
                                placeholder="Enter your password"
                              />
                            </div>
                            <button
                              type="submit"
                              className="w-full bg-blue-500 text-white py-2 rounded-md"
                            >
                              Sign Up
                            </button>
                          </>
                        ) : (
                          <>
                            <div className="mb-4">
                              <label className="block text-sm font-semibold relative mb-2">
                                Email
                                <FaEnvelope className="absolute right-3 top-10" />
                              </label>
                              <input
                                type="email"
                                className="w-full p-2 border rounded-md"
                                placeholder="Enter your email"
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-sm font-semibold relative mb-2">
                                Password
                                <FaEyeDropper className="absolute right-3 top-10" />
                              </label>
                              <input
                                type="password"
                                className="w-full p-2 border rounded-md"
                                placeholder="Enter your password"
                              />
                            </div>
                            <button
                              type="submit"
                              className="w-full bg-blue-500 text-white py-2 rounded-md"
                            >
                              Login
                            </button>
                          </>
                        )}
                      </form>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Topbar;
