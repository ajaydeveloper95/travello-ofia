import React from "react";
import PackageInfoElementCard from "./PackageInfoElementCard";

function PackageInfo() {
  return (
    <div className="my-5">
      <div>
        <h2 className="text-2xl text-center">
          Unleash Your inner wanderer - let Parthi be your guide to adventure.
        </h2>
      </div>
      <div className="flex gap-x-6 justify-center">
        <PackageInfoElementCard />
        <PackageInfoElementCard />
        <PackageInfoElementCard />
      </div>
    </div>
  );
}

export default PackageInfo;
