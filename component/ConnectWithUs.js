import React from "react";

function ConnectWithUs() {
  return (
    <div>
      <div>
        <section className="text-gray-600 body-font">
          <h2 className="text-3xl font-medium title-font text-gray-900 text-center">
            Our Services
          </h2>
          <div className="container px-5 py-16 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  2.7K+
                </h2>
                <p className="leading-relaxed">Happy Users</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  1.8K+
                </h2>
                <p className="leading-relaxed">Followers</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  35+
                </h2>
                <p className="leading-relaxed">Active Package</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  4+
                </h2>
                <p className="leading-relaxed">Travel Partner</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ConnectWithUs;
