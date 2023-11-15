import React from "react";
import FeaturedCitiesElement from "./FeaturedCitiesElement";

function FeaturedCitiesHomePage() {
  return (
    <div className="py-5">
      <h1 className="text-4xl text-center">Choose Your Hiking Style</h1>
      <div className="flex m-5 justify-evenly gap-x-6 flex-wrap z-0">
        <FeaturedCitiesElement StyleName="Winter" StylePhoto="https://images.pexels.com/photos/872498/pexels-photo-872498.jpeg?auto=compress&cs=tinysrgb&w=600"/>
        <FeaturedCitiesElement StyleName="Summer" StylePhoto="https://images.pexels.com/photos/3278939/pexels-photo-3278939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s"/>
        <FeaturedCitiesElement StyleName="Rainy" StylePhoto="https://images.pexels.com/photos/12909943/pexels-photo-12909943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      </div>
    </div>
  );
}

export default FeaturedCitiesHomePage;
