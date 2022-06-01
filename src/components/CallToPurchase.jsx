import React from "react";
import Divider from "./Divider";
import config from "../config/index.json";

const CallToPurchase = () => {
  const { calltopurchase } = config;
  return (
    <section className={` py-8`} id="calltopurchase">
      <div
        className={`mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28`}
      >
        <h3
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-slate-50`}
        >
          {calltopurchase?.title}
        </h3>
        <Divider center={true}/>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
          <div className="rounded-md shadow ">
            <a
              href={calltopurchase?.action.href}
              className={`w-full flex items-center justify-center px-8 py-3  border-transparent text-base font-medium rounded-md text-background AppButtonCtr  md:py-4 md:text-lg md:px-10`}
            >
              {calltopurchase?.action.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToPurchase;
