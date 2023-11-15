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
          packageName="Kedarkantha  Winter Trek"
          packagePrice="5,999 /Per (Group Discount Available)"
          packageStartingDest="Dehradun Railway Station"
          packageDuration="05 Day / 04 Night"
          packageInfoLink="https://drive.google.com/file/d/1b29tzoXNDRmRoJOEDKu0ojZaz_WM3SrW/view"
          packageImg="https://images.pexels.com/photos/7846563/pexels-photo-7846563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <PackageInfoElementCard
          packageName="Kasol Tosh"
          packagePrice="5,999 /Per (Group Discount Available)"
          packageStartingDest="Delhi"
          packageEndDest="Delhi"
          packageDuration="03 Day / 02 Night"
          packageInfoLink="https://drive.google.com/file/d/1B-Qn0DIcsoeApZPUybUdN8K-wezcvsbm/view"
          packageImg="https://cdn.pixabay.com/photo/2021/03/30/12/12/india-6136837_1280.jpg"
        />
        <PackageInfoElementCard
          packageName="Winter SPITI"
          packagePrice="16,000 /Per (Group Discount Available)"
          packageStartingDest="Delhi"
          packageEndDest="Delhi"
          packageDuration="08 Day / 07 Night"
          packageInfoLink="https://drive.google.com/file/d/1ppC-vPLjGw9l6Csv9PKIM5Mydjf62_BM/view"
          packageImg="https://cdn.pixabay.com/photo/2017/10/02/08/12/himalayas-2808131_1280.jpg"
        />
      </div>
    </div>
  );
}

export default PackageInfo;
