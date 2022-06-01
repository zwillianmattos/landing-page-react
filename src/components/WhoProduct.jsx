import React from "react";
import Divider from "./Divider";
import config from "../config/index.json";

const WhoProduct = () => {
  const { praquem } = config;
  return (
    <section className={`py-8`} id="whoproduct">
      <div
        className={`mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28`}
      >
        <h3 className={`w-full my-2 font-bold leading-tight text-start text-gradient`}>{praquem?.subtitle}</h3>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-start text-slate-50`}
        >
          {praquem?.title}
        </h1>
        <p className={`text-slate-300 my-2 `}>{praquem?.description}</p>
        <Divider  />
        <div className="grid grid-cols-1  lg:grid-cols-4  justify-center">
          {praquem?.items?.map((item, index) => (
            <div key={index} className={`mt-2 pr-2 sm:mt-4 `}>
              <div className="AppCard p-6 min-h-full ">
                <img
                  className="p-1"
                  src={item?.img}
                  alt={item?.title}
                  width="64"
                />
                <p className={`text-slate-50 text-sm `}>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoProduct;
