"use client";

import React, { useState } from "react";
import InfoSection from "./InfoSection";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { FaStar } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

const TopFlight = () => {
  const [viewAll, setviewAll] = useState(true);
  const t = useTranslations("Popular");
  const cityData = [
    {
      head: t("heading1"),
      images: [
        {
          image: "/Images/london.webp",
          title: "New York to London",
          description: t("des1"),
        },
        {
          image: "/Images/lose.webp",
          title: "Los Angeles to Tokyo",
          description: t("des2"),
        },
        {
          image: "/Images/tokyo.webp",
          title: " Sydney to Auckland",
          description: t("des3"),
        },
        {
          image: "/Images/rome.webp",
          title: "Paris to Rome",
          description: t("des4"),
        },
        {
          image: "/Images/dubai.webp",
          title: "Dubai to Mumbai",
          description: t("des5"),
        },
      ],
    },
    {
      head: t("heading2"),
      images: [
        {
          image: "/Images/europe.webp",
          title: "Explore the Wonders of Europe",
          description: t("desa1"),
        },
        {
          image: "/Images/getways.webp",
          title: "Exotic Getaways to the Caribbean",
          description: t("desa2"),
        },
        {
          image: "/Images/adventure.webp",
          title: "Adventure Awaits in Southeast Asia ",
          description: t("desa3"),
        },
        {
          image: "/Images/maldives.webp",
          title: "Serene Escapes to the Maldives",
          description: t("desa4"),
        },
        {
          image: "/Images/america2.webp",
          title: "Cultural Immersion in South America",
          description: t("desa5"),
        },
      ],
    },
    {
      head: t("heading3"),
      images: [
        {
          image: "/Images/car1.webp",
          title: "Luxury Comfort",
          description: t("desb1"),
        },
        {
          image: "/Images/24.webp",
          title: "24/7 Availability",
          description: t("desb2"),
        },
        {
          image: "/Images/wifi.webp",
          title: "Free Wi-Fi Access",
          description: t("desb3"),
        },
        {
          image: "/Images/safety-first.webp",
          title: "Safety First",
          description: t("desb4"),
        },
        {
          image: "/Images/businesswoman.webp",
          title: "Personalized Service",
          description: t("desb5"),
        },
      ],
    },
  ];

  const attractions = [
    {
      name: "Jaipur",
      icon: "🏰",
      isNew: true,
      link: "/FamousPlaces/InnerLakshadweep",
    },
    { name: "Bali", icon: "🏝️", link: "/FamousPlaces/Bali" },
    { name: "Goa ", icon: "🏖️", link: "/FamousPlaces/Andaman" },
    { name: "Australia ", icon: "🦘", link: "/FamousPlaces/Kashmir" },
    { name: "Dubai", icon: "🏢", link: "/FamousPlaces/Dubai" },
    { name: "Paris", icon: "🗼", link: "/FamousPlaces/Jaipur" },
    { name: "Kashmir", icon: "🏔️", link: "/FamousPlaces/Bengaluru" },
    { name: "Singapore", icon: "🛳️", link: "/FamousPlaces/Singapore" },
    { name: "Leh", icon: "🏯", link: "/FamousPlaces/Leh" },
    { name: "Singapore", icon: "🦁", link: "/FamousPlaces/Leh" },
    { name: "France", icon: "🌉", link: "/FamousPlaces/Leh" },

    { name: "Thar", icon: "🏜️", link: "/FamousPlaces/Kerala" },
  ];

  const Dubaiproperty = [
    {
      ImgPath: "/Images/PropertyImg.jpg",
      Name: "The Grand Hyatt",
      price: "12,500",
      reviews: 5,
    },
    {
      ImgPath: "/Images/PropertyImg.jpg",
      Name: "Marriott International",
      price: "10,200",
      reviews: 4,
    },
    {
      ImgPath: "/Images/PropertyImg.jpg",
      Name: "Hilton Garden Inn",
      price: "8,750",
      reviews: 4,
    },
    {
      ImgPath: "/Images/PropertyImg.jpg",
      Name: "Sheraton Hotels & Resorts",
      price: "9,300",
      reviews: 4,
    },
  ];
  
  const HongKongProperty = [
    {
      ImgPath: "/Images/PropertyImg.jpg",
      Name: "The Grand Hyatt Hong Kong",
      price: "15,000",
      reviews: 5,
    },
    {
      ImgPath: "/Images/PropertyImg.jpg",
      Name: "Hong Kong Marriott Hotel",
      price: "12,800",
      reviews: 4,
    },
    {
      ImgPath: "/Images/PropertyImg.jpg",
      Name: "Hilton Garden Inn Hong Kong",
      price: "10,500",
      reviews: 4,
    },
    {
      ImgPath: "/Images/PropertyImg.jpg",
      Name: "Sheraton Hong Kong  Towers",
      price: "11,300",
      reviews: 4,
    },
  ];
  
  const [activeFeacturePropertyLocation,setactiveFeacturePropertyLocation]=useState("Dubai")

  const [hoveredFeature, setHoveredFeature] = useState(null); // Tracks the hovered feature button

  const hoverFeatureHandler=(auth)=>{
    setHoveredFeature((preVal)=>preVal==auth?null:auth)
  }

  return (
    <>
      <div>
        <main className="flight pt-0 lg:pt-10 px-0 md:px-10  lg:px-40">
          <div className="">
            <div className="relative ">
              <div className="relative text-lg md:text-xl lg:text-3xl font-bold text-gray-900 flex justify-center items-center gap-2  mb-5 lg:mb-6">
                {t("mainheading")}
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3  xl:px-5 pb-5 justify-center gap-8 ">
            {cityData.map((city, index) => (
              <div
                className="bg-white border shadow-md my-5 lg:my-0  mx-auto lg:mx-2 rounded-xl overflow-hidden relative  w-full"
                key={index}
              >
                <div className="city-head bg-[#0291d2] text-center">
                  <h4 className="text-white text-lg font-semibold py-3">
                    {city.head}
                  </h4>
                </div>
                <div className=" ">
                  {city.images.map((imageData, i) => (
                    <div
                      className="items-center border-b px-4 flex hover:shadow-lg"
                      key={i}
                    >
                      <div className="city-image">
                        <img
                          src={imageData.image}
                          alt={imageData.title}
                          className="rounded-full h-9 object-cover w-9"
                        />
                      </div>
                      <div className="px-4 w-[80%]">
                        <h3 className="text-sm font-semibold mb-0 mt-4 ">
                          {imageData.title}
                        </h3>
                        <p className="text-[#525252] text-xs font-normal mb-5 pt-1">
                          {imageData.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <InfoSection />

      <div className="w-full mx-auto  md:md:px-10 lg:px-16 xl:px-32  pt:0 lg:pt-12 z-[-1] ">
        {/* featured property  */}

        <div className="featured-property bg-[#FCF9F6]  space-y-3 p-5 my-16">
          <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-700 py-3 ">
            Featured Properties
          </h5>

          <div className="space-y-5">
      {/* Display content on hover */}
     

        <div className={` ${hoveredFeature=="PriceMatch"?"block":"hidden"} bg-white py-5  text-black w-fit px-4 rounded-md`}>
        <p>
              We strive to provide the best prices. If you find a lower price elsewhere, we'll match it and refund the difference.
            </p>
        </div>
        <div className={` ${hoveredFeature=="HotelBooking"?"block":"hidden"} bg-white py-5  text-black w-fit px-4 rounded-md`}>
        <p>
        If modifications are needed after confirming your stay, Trip.com will do its best to coordinate and support you.

            </p>
        </div>
        <div className={` ${hoveredFeature=="HotelStay"?"block":"hidden"} bg-white py-5  text-black w-fit px-4 rounded-md`}>
        <p>
        In case the hotel cannot accommodate you on arrival, we’ll compensate you up to three times the room rate for the first night.
            </p>
        </div>

      {/* Buttons */}
      <div className="flex  gap-5 items-center justify-center sm:justify-start text-center sm:text-start">
        <button
          onClick={() => hoverFeatureHandler("PriceMatch")}
         
          className="flex PriceMatch flex-col sm:flex-row items-center gap-3 hover:text-red-500 transition"
        >
          <img src="/Images/pricing.webp" alt="Price Match" className="w-6" />
          <h6 className="text-sm font-medium">We Price Match</h6>
        </button>
        <button
          onClick={() => hoverFeatureHandler("HotelBooking")}
          className="flex flex-col sm:flex-row items-center gap-3 hover:text-red-500 transition"
        >
          <img src="/Images/review.webp" alt="Hotel Booking Guarantee" className="w-6" />
          <h6 className="text-sm font-medium">Hotel Booking Guarantee</h6>
        </button>
        <button
          onClick={() => hoverFeatureHandler("HotelStay")}
          className="flex flex-col sm:flex-row items-center gap-3 hover:text-red-500 transition"
        >
          <img src="/Images/outdoor-stay.webp" alt="Hotel Stay Guarantee" className="w-6" />
          <h6 className="text-sm font-medium">Hotel Stay Guarantee</h6>
        </button>
      </div>

   
    </div>


          <div className="flex gap-3 items-center">
            <button onClick={()=>setactiveFeacturePropertyLocation("Dubai")} className="bg-gray-800 text-white rounded-lg px-3 py-2 ">
              Dubai
            </button>
            <button onClick={()=>setactiveFeacturePropertyLocation("hongKong")} className="bg-gray-800 text-white rounded-lg px-3 py-2 ">
              hongKong
            </button>
          </div>
            {
              activeFeacturePropertyLocation=="Dubai"? <div className="grid md:grid-cols-2   lg:grid-cols-3 xl:grid-cols-4 gap-10"> 
          {Dubaiproperty.map((curElm,index)=>{
              return(
                <div key={index} className="card sm:w-72 border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={curElm.ImgPath}
                alt="Property Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-3">
                <h5 className="text-lg font-semibold text-gray-800">
                    {curElm.Name}
                </h5>
                <div className="flex items-center gap-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600 text-white rounded-full px-2 py-1 text-sm font-medium">
                    4.1 <span className="text-gray-300">/5</span>
                  </div>
                  <p className="text-sm text-blue-600 font-bold">340 Reviews</p>
                </div>
                <p className="text-sm text-green-600 font-medium">
                  Free Cancellation
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">From</span>
                  <div className="flex items-center text-blue-700 font-bold">
                    <FaRupeeSign className="text-sm" />
                    <p className="text-xl">{curElm.price}</p>
                  </div>
                </div>
              </div>
            </div>
              )
          })}
         
          </div>:<div className="grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10"> 
          {HongKongProperty.map((curElm,index)=>{
              return(
                <div key={index} className="card sm:w-72 border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={curElm.ImgPath}
                alt="Property Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-3">
                <h5 className="text-lg font-semibold text-gray-800">
                    {curElm.Name}
                </h5>
                <div className="flex items-center gap-1 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600 text-white rounded-full px-2 py-1 text-sm font-medium">
                    4.1 <span className="text-gray-300">/5</span>
                  </div>
                  <p className="text-sm text-blue-600 font-bold">340 Reviews</p>
                </div>
                <p className="text-sm text-green-600 font-medium">
                  Free Cancellation
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">From</span>
                  <div className="flex items-center text-blue-700 font-bold">
                    <FaRupeeSign className="text-sm" />
                    <p className="text-xl">{curElm.price}</p>
                  </div>
                </div>
              </div>
            </div>
              )
          })}
         
          </div>
            }
         
        </div>

        <div className="relative text-lg md:text-xl lg:text-4xl tracking-tighter	 gfont1  font-bold text-gray-900 flex justify-center items-center gap-2 mb-14">
          Tourist 💕<span className="text-[#521010]"> Love</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5 md:gap-y-8 ">
          {viewAll &&
            attractions.slice(0, 7).map((attraction, index) => (
              <div className="col-span-1 border-b-4 border-b-[#009dff] duration-200 text-xl shadow-md">
                <Link href={attraction.link}>
                  <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="icon-box">
                        <p className="text-3xl ">{attraction.icon}</p>
                      </div>
                      <div className="ml-4">
                        <h5 className="font-semibold text-lg">
                          {attraction.name}
                        </h5>
                        <span className="text-gray-500 text-[1rem]">
                          View All Pakage
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          {!viewAll &&
            attractions.map((attraction, index) => (
              <div className="col-span-1 border-b-4 border-b-[#009dff] duration-200 text-xl shadow-md">
                <Link href={attraction.link}>
                  <div className="bg-white shadow-md rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="icon-box">
                        <p className="text-3xl ">{attraction.icon}</p>
                      </div>
                      <div className="ml-4">
                        <h5 className="font-semibold text-lg">
                          {attraction.name}
                        </h5>
                        <span className="text-gray-500 text-[1rem]">
                          View All Pakage
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          {viewAll && (
            <div
              onClick={() => setviewAll(false)}
              className="col-span-1 border-b-4 hover:border-b-[#009dff] duration-200 text-xl shadow-md cursor-pointer"
            >
              <span>
                <div className="bg-white shadow-md rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="icon-box">
                      <p className="text-2xl ">🧾</p>
                    </div>
                    <div className="ml-4">
                      <h5 className="font-semibold text-lg">View All</h5>
                      <span className="text-gray-500 text-[1rem]">
                        Destination Pakage
                      </span>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          )}
        </div>

        <div className="view_btn my-10 flex justify-center">
          {/* <Link
            href="/FamousPlaces/Cities"
            className="bg-[#2196F3] text-white py-2 px-4 rounded-full"
          >
            View All
          </Link> */}
        </div>
      </div>

      <div className="bg-gray-100 p-5 lg:p-20 mt-12">
        <div className=" flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
          <div className="">
            <div className="p-4">
              <h3 className="text-4xl font-normal">
                {t("service")} <br />
              </h3>
              <p className="mt-4 mb-6">{t("serviceans")}</p>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <img
                    src="/Images/blog2.webp"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">{t("moreabout")}</h5>
                    <p className="mt-2">{t("moreaboutans")}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <img
                    src="/Images/shield.webp"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">
                      {t("serviceprovider")}
                    </h5>
                    <p className="mt-2">{t("serviceproviderans")}</p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <img
                    src="/Images/general.webp"
                    alt=""
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">
                      {t("happyservice")}
                    </h5>
                    <p className="mt-2">{t("happyserviceans")}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="p-4 my-5 lg:my-0">
            <img
              src="/Images/online-booking.webp"
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFlight;
