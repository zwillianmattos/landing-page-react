import React from "react";

import config from "../config/index.json";
import Divider from "./Divider";
import LazyShow from "./LazyShow";

const geraImagem = (item, criar) => {
  const { img } = item;

  return criar ? (
    <div className={`w-full sm:w-1/2 p-6`}>
      {img ? (
        <img className="h-6/6" src={item?.img} alt={item?.title} />
      ) : (
        <> </>
      )}
    </div>
  ) : (
    <> </>
  );
};

const Product = () => {
  const { product } = config;

  return (
    <section className={` py-2`} id="product">
      <div
        className={`mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-16`}
      >
        <h3
          className={`w-full my-2 font-bold leading-tight text-start text-gradient`}
        >
          {product?.subtitle}
        </h3>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-start text-primary`}
        >
          <span className="font-bold leading-tight text-start text-slate-50">
            {product.title}
          </span>
        </h1>
        <p className={`text-slate-300 my-2 `}>{product?.description}</p>
        <Divider />

        {product.items.map((item, index) => (
          <LazyShow>
            <div
              className={`flex flex-wrap ${
                index % 2 ? `flex-col-reverse sm:flex-row` : ``
              }`}
            >
              {geraImagem(item, index % 2)}
              <div
                className={` ${
                  index % 2
                    ? `AppCard w-5/6 sm:w-1/2 p-6 mt-20`
                    : `AppCard w-full sm:w-1/2 p-6 mt-20`
                }`}
              >
                <h4
                  className={`text-2xl text-slate-300 font-bold leading-none mb-3`}
                >
                  {item?.title}
                </h4>
                <p className={`text-slate-50 text-sm`}>{item?.description}</p>
              </div>
              {geraImagem(item, !index % 2)}
            </div>
          </LazyShow>
        ))}
      </div>
    </section>
  );
};

export default Product;
