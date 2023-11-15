import PackageInfoElementCard from "@/component/PackageInfoElementCard";
import React from "react";

function tourpackages() {
  return (
    <div>
      {/* winter track */}
      <div className="w-11/12 m-auto">
        <h2 className="text-3xl font-medium title-font text-gray-900 mt-2 text-center">
          Winter Packages
        </h2>
        <div className="flex flex-wrap gap-6">
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
          <PackageInfoElementCard
            packageName="Kashmir"
            packagePrice="16,000 /Per (Group Discount Available)"
            packageStartingDest="Srinagar Airport"
            packageEndDest="Srinagar Airport"
            packageDuration="06 Day / 05 Night"
            packageInfoLink="https://drive.google.com/file/d/1GxrQa6uhuG7kQUfFNTdhTRmezMkJa_0C/view"
            packageImg="https://cdn.pixabay.com/photo/2013/03/07/15/36/kashmir-91218_1280.jpg"
          />
          <PackageInfoElementCard
            packageName="Jaisalmer Longewala"
            packagePrice="5,799 /Per (Group Discount Available)"
            packageStartingDest="Delhi"
            packageEndDest="Delhi"
            packageDuration="05 Day / 04 Night"
            packageInfoLink="https://drive.google.com/file/d/1YFmsggciGn6P0xoEc4fTeJ4OL2_y8tTJ/view"
            packageImg="https://cdn.pixabay.com/photo/2019/03/29/08/14/forts-4088762_1280.jpg"
          />
        </div>
      </div>
      <hr />
      {/* summer track */}
      {/* <div className="w-11/12 m-auto">
        <h2 className="text-3xl font-medium title-font text-gray-900 mt-2 text-center">
          Summer Packages
        </h2>
        <div className="flex flex-wrap gap-6">
          <PackageInfoElementCard />
          <PackageInfoElementCard />
          <PackageInfoElementCard />
          <PackageInfoElementCard />
          <PackageInfoElementCard />
        </div>
      </div> */}
    </div>
  );
}

export default tourpackages;
