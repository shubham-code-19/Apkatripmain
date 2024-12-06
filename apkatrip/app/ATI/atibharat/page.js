"use client";
import React, { useEffect, useState } from "react";



import "swiper/css";
import "swiper/css/pagination";

import { useTranslations } from "next-intl";
import { FaInstagram,FaFacebookSquare,FaPinterestSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";


export default function page() {
  const t=useTranslations("atibharat")
  const whyApkaTripDetails = [
    {
      title: "Tailor-Made Experiences for Every Explorer",
      description:
        "No two travelers are alike. The solo wanderer, the couple who yearns for romance, the family on an adventure, or the friends looking for a pinch of excitement; ApkaTrip opens the doors for you in tailor-made plans that bring out your passion, zest, and interest. Cultural immersion, adventurous escapades, or serene retreats - guaranteed to bring your dreams to life.",
    },
    {
      title: "Vast Global Reach, Endless Possibilities",
      description:
        "You can choose from iconic destinations like the majestic temples of Kyoto, the vibrant streets of Marrakech, or the untouched beauty of Patagonia - to crystal-clear waters of the Maldives. Every destination is accessible to you through our global network of partners.",
    },
    {
      title: "Authentic, Off-the-Beaten-Path Adventures",
      description:
        "While some agencies focus on popular spots, ApkaTrip helps you discover secret places. Imagine exploring a hidden waterfall in Bali, wandering the backstreets of Rome, or dining with locals in a remote Peruvian village, creating unforgettable off-the-beaten-path travel experiences.",
    },
    {
      title: "Experienced Travel Advisors to Guide You",
      description:
        "Our highly trained travel experts are passionate about travel - and it shows. Whether seeking advice on the best hiking trails in the Swiss Alps or recommendations for hidden cultural gems in India, our advisors guide you every step of the way with insider expertise.",
    },
  ];
  
  const travelCategories = [
    {
      category: "Adventure Travel",
      description:
        "For a dose of adrenaline? We'll help you get one - from trekking through the Amazon Rainforest to climbing the Andes or experiencing a safari in Kenya, our adventure travel experiences let you connect with nature.",
    },
    {
      category: "Cultural Immersions",
      description:
        "Discover different cultures. Participate in local festivals, explore old ruins, and intermingle with artisans in far-flung villages. ApkaTrip opens up experiences that allow you to understand and appreciate the richness of cultures.",
    },
    {
      category: "Luxury Escapes",
      description:
        "Luxe up your adventures with private villas, five-star resorts, and guided tours, making each journey an unforgettable experience.",
    },
    {
      category: "Eco and Sustainable Travel",
      description:
        "Travel responsibly with ApkaTrip’s eco-friendly options. Stay in eco-lodges, empower local communities, and visit nature reserves, ensuring your adventures have a positive impact on the planet.",
    },
    {
      category: "Family Adventures",
      description:
        "Travel with loved ones? Our family-friendly vacations offer activities for kids and relaxing downtime for adults, creating memories to cherish as you explore new destinations.",
    },
    {
      category: "Travelling Alone",
      description:
        "Whether a solo backpacking trip or a quiet retreat, ApkaTrip provides empowering solo experiences, letting you explore new destinations at your own pace.",
    },
  ];
  
  const journeySteps = [
    {
      step: "1. Share Your Dream Destination",
      description:
        "Please do share with us that dream destination or kind of experience you're looking for - whether it be a quiet retreat, a cultural immersion, or an adventurous exploration. We listen closely to your needs.",
    },
    {
      step: "2. Tailor-made touring itinerary",
      description:
        "Our travel experts will create a unique itinerary tailored to your desires. From flights and accommodations to guided tours and activities, every detail will be taken care of to make your trip unforgettable.",
    },
    {
      step: "3. Guard Your Book",
      description:
        "Relax and let us handle every aspect of your trip. We offer flexible booking policies, ensuring you’re covered if things don’t go as planned. Enjoy the anticipation, knowing every detail is managed.",
    },
    {
      step: "4. Take the Road of a Lifetime",
      description:
        "Your adventure awaits! We support you every step of the way, whether you’re exploring a new city or an adventurous terrain. Our dedicated team is here to cater to your needs throughout the journey.",
    },
  ];

  const communityDetails = [
    {
      title: "Join the ApkaTrip Travel Community",
      subtitle: "Share your story, move others.",
      description:
        "Get inspired by the travel experiences of our travelers. Discover hidden waterfalls in Iceland, street food markets in Bangkok, or other gems our explorers have found. Share your stories, photos, and travel tips with the ApkaTrip community. Inspire others to venture beyond the ordinary.",
    },
    {
      title: "Start Your Journey with ApkaTrip",
      subtitle: "Ready to travel with us?",
      description:
        "Adventure, culture, and breathtaking experiences await you. Begin your journey and let us make your dreams a reality.",
    },
    {
      title: "Get in Touch with Us",
      subtitle: "Let’s begin planning the adventure of a lifetime.",
      description:
        "Whether it’s a tropical island escape, a trek through the mountains, or a cultural immersion into a new country, we’ll ensure your journey is beyond what you’ve ever imagined.",
      cta: "Contact Us | Start Your Journey",
    },
    {
      title: "About ApkaTrip",
      description:
        "This is where inspiration comes from the power of discovery and the beauty of new places. At ApkaTrip, we connect travelers with hidden treasures and unforgettable adventures from all around the globe. Every journey is made unforgettable, whether it’s a luxury escape or an off-the-beaten-path exploration.",
    },
  ];
return (
<>
 <section className="h-screen   ">
  <div className="flex py-5 flex-col justify-center h-full items-center bg-gradient-to-br from-gray-400 via-slate-800 px-5 space-y-5 text-white">
    <h5 className="text-2xl text-center lg:text-3xl font-bold">
      Welcome to ApkaTrip - Your Gateway to Exploring the World
    </h5>
    <p className="text-center text-base lg:text-lg text-[#ffebeb] ">
      Uncover, Roam, and Have Fun Exploring the Wonders of the World with
      ApkaTrip Are you ready to experience the world in ways you never
      thought you'd experience? That's what ApkaTrip is committed to:
      traveling not for getting to any destination but to unveiling the real
      meaning of cultures, discovering the most hidden gems, and making
      memories forever. Whether you dream of crossing ancient cities, hiking
      through luscious forests, or exploring remote islands, we're here to
      make that happen. Be your trusted travel companion when you explore
      the world, ensuring unforgettable trips worldwide. The world is vast,
      and adventure awaits.
    </p>
  </div>
</section>
<section className="px-5 md:px-16 lg:px-20 py-12 space-y-12">
{/* Why ApkaTrip Section */}
<div className=" shadow-lg p-8 rounded-lg space-y-8">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
    Why ApkaTrip?
  </h2>
  {whyApkaTripDetails.map((item, index) => (
    <div key={index} className="space-y-2">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800">
        {item.title}
      </h3>
      <p className="text-base text-gray-600">{item.description}</p>
    </div>
  ))}
</div>

{/* Travel Categories Section */}
<div className=" shadow-lg rounded-lg p-8  space-y-8">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
    Discover our Signature Travel Categories
  </h2>
  {travelCategories.map((item, index) => (
    <div key={index} className="space-y-2">
      <h3 className="text-lg md:text-xl font-semibold text-gray-800">
        {item.category}
      </h3>
      <p className="text-base text-gray-600">{item.description}</p>
    </div>
  ))}
</div>
<div className=" shadow-lg p-8 rounded-lg space-y-8">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
    How It Works: Your Journey with ApkaTrip
  </h2>
  {journeySteps.map((item, index) => (
    <div key={index} className="space-y-2">
      <h3 className="text-xl  font-semibold text-gray-800">
        {item.step}
      </h3>
      <p className="text-base text-gray-600">{item.description}</p>
    </div>
  ))}
</div>

<div className="space-y-5 rounded-lg">
{communityDetails.map((section, index) => (
  <div key={index} className=" shadow-lg p-8 rounded-lg space-y-4">
    <h2 className="text-lg md:text-xl font-semibold text-gray-800">
      {section.title}
    </h2>
    {section.subtitle && (
      <h3 className="text-lg font-medium text-gray-700">{section.subtitle}</h3>
    )}
    <p className="text-base text-gray-600">{section.description}</p>
    {section.cta && (
      <button className="mt-4 text-blue-600 font-semibold hover:underline">
        {section.cta}
      </button>
    )}
  </div>
))}
<div className=" shadow-lg p-8 rounded-lg space-y-4">
  <h2 className="text-xl  font-semibold text-gray-800">
    Headquarter
  </h2>
  <p className="text-base text-gray-600">
    [Company Address]
    <br />
    City, Country
    <br />
    [+(91) 9877579319]
    <br />
    [apkatripindia@gmail.com]
  </p>
</div>
<div className=" shadow-lg p-8 rounded-lg space-y-4">
  <h2 className="text-xl  font-semibold text-gray-800">
    Follow Us on Social Media
  </h2>
  <p className="text-base text-gray-600">
    Stay inspired and updated about the latest travel trends, hidden gems, and unique experiences around the world.
  </p>
  <div className="flex space-x-4">
    <Link href="#" className=" font-semibold text-2xl"><FaInstagram /> </Link>
    <Link href="#" className=" font-semibold text-2xl"><FaFacebookSquare /> </Link>
    <Link href="#" className=" font-semibold text-2xl"><FaXTwitter /> </Link>
    <Link href="#" className=" font-semibold text-2xl"><FaPinterestSquare /> </Link>
  </div>
</div>
</div>
</section>
</>
);

 
}


