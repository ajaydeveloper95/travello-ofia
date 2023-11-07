import React from "react";
import PropTypes from "prop-types";

function PackageInfoElementCard(props) {
  const {
    packageName,
    packagePrice,
    packageStartingDest,
    packageEndDest,
    packageImg,
  } = props;
  return (
    <div className="my-5">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={packageImg} alt="packageImg" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {packageName}
            </h5>
          </a>
          <hr />
          <div className="flex justify-between mt-4">
            <p className="dark:text-white">
              Trip : <span>{packageStartingDest}</span> To{" "}
              <span>{packageEndDest}</span>
            </p>
            <div>
              <p className="dark:text-white">
                <span>&#8377; {packagePrice}</span>
              </p>
            </div>
          </div>
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
};

// set defaultprops
PackageInfoElementCard.defaultProps = {
  packageName: "Comming Soon",
  packagePrice: "00.00",
  packageStartingDest: "Wait... ",
  packageEndDest: "Wait...",
  packageImg:
    "https://cdn.pixabay.com/photo/2018/08/29/22/52/woman-3640935_1280.jpg",
};
