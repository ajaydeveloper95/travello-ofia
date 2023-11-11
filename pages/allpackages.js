import PackageInfoElementCard from "@/component/PackageInfoElementCard";
import React from "react";

function tourpackages() {
  return (
    <div>
      {/* summer track */}
      <div className="w-11/12 m-auto">
        <h2 className="text-3xl font-medium title-font text-gray-900 mt-2 text-center">Summer Packages</h2>
        <div className="flex flex-wrap gap-6">
          <PackageInfoElementCard />
          <PackageInfoElementCard />
          <PackageInfoElementCard />
          <PackageInfoElementCard />
          <PackageInfoElementCard />
        </div>
      </div>
      <hr />
      {/* winter track */}
      <div className="w-11/12 m-auto">
        <h2 className="text-3xl font-medium title-font text-gray-900 mt-2 text-center">Winter Packages</h2>
        <div className="flex flex-wrap gap-6">
          <PackageInfoElementCard />
          <PackageInfoElementCard />
          <PackageInfoElementCard />
          <PackageInfoElementCard />
          <PackageInfoElementCard />
        </div>
      </div>
    </div>
  );
}

export default tourpackages;
