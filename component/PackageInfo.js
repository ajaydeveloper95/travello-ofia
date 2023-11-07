import React from "react";
import PackageInfoElementCard from "./PackageInfoElementCard";

function PackageInfo() {
  return (
    <div className="my-5">
      <div>
        <h2 className="text-2xl text-center my-5">Featured Trekking Tours</h2>
      </div>
      <div className="flex gap-x-6 justify-center flex-wrap">
        <PackageInfoElementCard
          packageName="test1"
          packagePrice="3,400"
          packageStartingDest="Delhi"
          packageEndDest="Jaipur"
          packageImg="https://cdn.pixabay.com/photo/2018/10/08/17/38/nature-3733115_1280.jpg"
        />
        <PackageInfoElementCard
          packageName="test2"
          packagePrice="3,400"
          packageStartingDest="Delhi"
          packageEndDest="Jaipur"
          packageImg="https://cdn.pixabay.com/photo/2020/04/05/07/25/sunset-5004905_1280.jpg"
        />
        <PackageInfoElementCard
          packageName="test3"
          packagePrice="3,400"
          packageStartingDest="Delhi"
          packageEndDest="Jaipur"
          packageImg="https://cdn.pixabay.com/photo/2012/07/16/10/09/bridal-veil-fall-52449_1280.jpg"
        />
      </div>
    </div>
  );
}

export default PackageInfo;
