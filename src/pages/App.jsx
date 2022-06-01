import "./../styles/App.css";
import React from "react";
import {
  Header,
  MainHero,
  MainHeroImage,
  Product,
  Features,
  Pricing,
  About,
  Analytics,
  LazyShow,
  WhoProduct,
  Canvas,
  CallToPurchase
} from "./../components";

function App() {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden pt-10`}>
      <div className={`relative `}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-1  sm:pb-8 md:pb-1  lg:w-full lg:pb-8 xl:pb-1`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
      </div>
      <LazyShow>
        <>
          <WhoProduct />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Product />
        </>
      </LazyShow>
      <LazyShow>
        <CallToPurchase></CallToPurchase>
      </LazyShow>
      {/* <LazyShow>
        <>
          <Product />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow> */}
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
}

export default App;
