import PackageInfoElementCard from "./PackageInfoElementCard";
import React, { useEffect, useState } from "react";

function PackageInfo({ data }) {
  const [PackageData, setPackageData] = useState([]);
  useEffect(() => {
    let all = data.data;
    setPackageData(all);
  }, [PackageData]);
  return (
    <div className="my-5 mx-5">
      <div>
        <h2 className="text-2xl text-center my-5">Featured Trekking Tours</h2>
      </div>
      <div className="flex gap-x-6 justify-center flex-wrap">
        {/* start here */}
        {PackageData.map((item, key) => {
          if (item.isActive && item.isHomePage) {
            return (
              <PackageInfoElementCard
                key={key}
                packageName={item.title}
                packagePrice={`${item.price} /Per (Group Discount Available)`}
                packageStartingDest={item.pickup}
                packageEndDest={item.pickup}
                packageDuration={item.duration}
                packageInfoLink={item.redirectLink}
                packageImg={item.image}
              />
            );
          }
        })}
        {/* end  here */}
      </div>
    </div>
  );
}

export default PackageInfo;
