import React from "react";
import FeaturedCitiesElement from "./FeaturedCitiesElement";

function FeaturedCitiesHomePage() {
  return (
    <div className="py-5">
      <h1 className="text-4xl text-center">Choose Your Hiking Style</h1>
      <div className="flex m-5 justify-evenly gap-x-6 flex-wrap z-0">
        <FeaturedCitiesElement />
        <FeaturedCitiesElement />
        <FeaturedCitiesElement />
        <FeaturedCitiesElement />
      </div>
    </div>
  );
}

export default FeaturedCitiesHomePage;
