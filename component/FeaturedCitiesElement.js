import React from "react";
import Image from "next/image";
import SummerImg from "public/SummerTrack.jpg";
import Link from "next/link";

function FeaturedCitiesElement() {
  return (
    <div className="relative overflow-hidden max-w-xs my-5 ">
      <Link href="/">
        <Image
          className="opacity-80 hover:scale-150 hover:duration-1000 hover:ease-in z-0"
          src={SummerImg}
          width={400}
          height={400}
          alt="summer track"
        />
        <p className="text-4xl absolute top-1/2 left-10">Summer Track</p>
      </Link>
    </div>
  );
}

export default FeaturedCitiesElement;
