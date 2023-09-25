import React from "react";

function PackageInfoElementCard() {
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://www.pathiktrips.com/uploads/tour-packages/4/1686905631Tirthan.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <hr />
          <div className="flex justify-between mt-4">
            <p>
              Starting from: <span>Delhi</span>
            </p>
            <div>
              <p>
                <span>&#8377; 5,999</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageInfoElementCard;
