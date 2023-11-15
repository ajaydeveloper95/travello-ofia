import React from "react";
import { BsTrophyFill } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import { GrCertificate } from "react-icons/gr";
import { GiMeshNetwork, GiOnTarget, GiLifeSupport } from "react-icons/gi";

function WhyChooseUs() {
  return (
    <div className="bg-slate-100 py-5">
      <div className="lg:w-3/6 md:w-9/12 m-auto text-center">
        <h1 className="text-4xl my-4">Why Choose Us</h1>
        <p className="text-2xl my-4">
          Since 2014, we've helped more than 50,000 participants to get best
          trekking experience.{" "}
        </p>
      </div>
      <div className="w-4/5 m-auto flex justify-evenly flex-wrap gap-y-6">
        <div className="my-4 lg:w-1/3 md:w-5/12 w-9/12 text-center">
          <div className="flex justify-center">
            <BsTrophyFill className="text-4xl" />
          </div>
          <h1 className="text-3xl">Happy Trekkers</h1>
          <p className="text-xl">4.7 rating on 1000+ social media reviews</p>
        </div>
        <div className="my-4 lg:w-1/3 md:w-5/12 w-9/12 text-center">
          <div className="flex justify-center">
            <GrCertificate className="text-4xl" />
          </div>
          <h1 className="text-3xl">IMF affiliated</h1>
          <p className="text-xl">7+ years of experience</p>
        </div>
        <div className="my-4 lg:w-1/3 md:w-5/12 w-9/12 text-center">
          <div className="flex justify-center">
            <GiMeshNetwork className="text-4xl" />
          </div>
          <h1 className="text-3xl">No 3rd party involvement</h1>
          <p className="text-xl">No-Hassle after the Booking</p>
        </div>
        <div className="my-4 lg:w-1/3 md:w-5/12 w-9/12 text-center">
          <div className="flex justify-center">
            <GiOnTarget className="text-4xl" />
          </div>
          <h1 className="text-3xl">Expert Trek Support Team</h1>
          <p className="text-xl">Certified trek and camp leaders</p>
        </div>
        <div className="my-4 lg:w-1/3 md:w-5/12 w-9/12 text-center">
          <div className="flex justify-center">
            <BiSolidLike className="text-4xl" />
          </div>
          <h1 className="text-3xl">Best Equipments</h1>
          <p className="text-xl">High-Quality Alpine Tents and sleeping bags</p>
        </div>
        <div className="my-4 lg:w-1/3 md:w-5/12 w-9/12 text-center">
          <div className="flex justify-center">
            <GiLifeSupport className="text-4xl" />
          </div>
          <h1 className="text-3xl">Personal Insurance</h1>
          <p className="text-xl">All trekkers are insured for added safety.</p>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
