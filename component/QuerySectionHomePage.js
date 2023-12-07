import React from "react";

function QuerySectionHomePage() {
  return (
    <div className="bg-slate-100 py-5 px-5">
      <div className="text-center">
        <h1 className="text-4xl">Any Query? Can't decide ?</h1>
        <p className="text-2xl">
          Don't hesitate & hand over all your requirement to our travel expert
          and let them assit you.
        </p>
        <p className="text-2xl">
          P.S: Your wanderlust fuels our enthusiasm! Don't hesitate to reach
          out-we're eagerly waiting to chat about your travel dreams.
        </p>
      </div>
      <div className="flex justify-center my-5">
        <a
          href="https://api.whatsapp.com/send?phone=918290405227&text=I%20am%20interested%20in%20this%20package"
          target="_blank"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-4 border-green-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          +91 82904 05227
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=918290405227&text=I%20am%20interested%20in%20this%20package"
          target="_blank"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-green-600 rounded-lg border-4 border-white hover:bg-green-500 hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          What's App
        </a>
      </div>
    </div>
  );
}

export default QuerySectionHomePage;
