import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

function PackageInfoElementCard(props) {
  const {
    packageName,
    packagePrice,
    packageStartingDest,
    packageEndDest,
    packageImg,
    packageDuration,
    packageInfoLink,
  } = props;
  return (
    <div className="my-5">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Image
          className="rounded-t-lg"
          width={400}
          height={400}
          src={packageImg}
          alt="packageImg"
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {packageName}
          </h5>
          <hr />
          <div className="mb-4">
            {/* card down section */}
            <div className="flex justify-between mt-4">
              <p className="dark:text-white">
                Pickup : <span>{packageStartingDest}</span>
              </p>
            </div>
            {/* card down section */}
            {/* <div className="flex justify-between mt-4">
              <p className="dark:text-white">
                Location : <span>{packageLocationCoverd}</span>
              </p>
            </div> */}
            {/* card down section */}
            <div className="flex justify-between mt-4">
              <p className="dark:text-white">
                Drop : <span>{packageEndDest}</span>
              </p>
            </div>
            {/* card down section */}
            <div className="flex justify-between mt-4">
              <p className="dark:text-white">
                Duration : <span> {packageDuration}</span>
              </p>
            </div>
            {/* card down section */}
            <div className="flex justify-between mt-4">
              <p className="dark:text-white">
                Price : <span>&#8377; {packagePrice}</span>
              </p>
            </div>
          </div>
          <hr />
          <Link href={packageInfoLink} target="_blank">
            <div className="text-white dark:text-black bg-slate-700 rounded-lg dark:bg-green-400 dark:hover:bg-green-100 mt-2 p-1 text-center">
              Complete Information
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PackageInfoElementCard;

PackageInfoElementCard.propTypes = {
  packageName: PropTypes.string.isRequired,
  packagePrice: PropTypes.string.isRequired,
  packageStartingDest: PropTypes.string.isRequired,
  packageEndDest: PropTypes.string.isRequired,
  packageImg: PropTypes.string.isRequired,
  packageInfoLink: PropTypes.string.isRequired,
  packageDuration: PropTypes.string.isRequired,
};

// set defaultprops
PackageInfoElementCard.defaultProps = {
  packageName: "Comming Soon",
  packagePrice: "00.00",
  packageStartingDest: "Wait... ",
  packageEndDest: "Wait...",
  packageInfoLink: "https://teckiajay.com",
  packageDuration: "0 Day / 0 Night",
  packageImg:
    "https://cdn.pixabay.com/photo/2018/08/29/22/52/woman-3640935_1280.jpg",
};
