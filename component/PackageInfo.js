import React from "react";
import PackageInfoElementCard from "./PackageInfoElementCard";

function PackageInfo() {
  return (
    <div className="my-5">
      <div>
        <h2 className="text-2xl text-center my-5">
        Featured Trekking Tours
        </h2>
      </div>
      <div className="flex gap-x-6 justify-center flex-wrap">
        <PackageInfoElementCard />
        <PackageInfoElementCard />
        <PackageInfoElementCard />
      </div>
    </div>
  );
}

export default PackageInfo;
