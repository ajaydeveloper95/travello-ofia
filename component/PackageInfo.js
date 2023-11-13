import React from "react";
import PackageInfoElementCard from "./PackageInfoElementCard";
import LogoImgr from "public/photo.jpg";

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
          packageImg="https://cdn.pixabay.com/photo/2018/10/08/17/38/nature-3733115_1280.jpg"
        />
        <PackageInfoElementCard
          packageName="test3"
          packagePrice="3,400"
          packageStartingDest="Delhi"
          packageEndDest="Jaipur"
          packageImg="https://cdn.pixabay.com/photo/2018/10/08/17/38/nature-3733115_1280.jpg"
        />
      </div>
    </div>
  );
}

export default PackageInfo;
