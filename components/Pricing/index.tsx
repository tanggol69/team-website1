"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="We offer Basic and Premium plans that cater to different budgets and goals. Our commitment to affordability means you get exceptional value without compromising on quality. Explore our pricing options to find the plan that best suits your requirements, and remember, we stand behind our work with a satisfaction guarantee."
          center
          width="665px"
        />

        <div className="w-full">
          <div className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16" data-wow-delay=".1s">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>

        <div className="w-full max-w-screen-xl mx-auto">
  {/* Center the pricing boxes horizontally and give them space or gap */}
  <div className="flex justify-center">
    <div className="flex space-x-4">
      <PricingBox
        packageName="Basic Plan"
        price={isMonthly ? "399" : "789"}
        duration={isMonthly ? "mo" : "yr"}
        subtitle="The Basic plan offers simplicity and directness. It acts as a digital presence for your company, delivering vital details. These platforms are simple to construct and sustain, providing a budget-friendly, established online existence."
      >
        <OfferList text="All UI Components" status="active" />
        <OfferList text="Use with Unlimited Projects" status="inactive" />
        <OfferList text="Commercial Use" status="active" />
        <OfferList text="Email Support" status="inactive" />
        <OfferList text="Lifetime Access" status="active" />
        <OfferList text="Free Lifetime Updates" status="inactive" />
      </PricingBox>
      <PricingBox
        packageName="Premium Plan"
        price={isMonthly ? "589" : "999"}
        duration={isMonthly ? "mo" : "yr"}
        subtitle="The Premium Plan is more sophisticated and engaging. It not only imparts information but also enables users to engage with your content. These websites may include elements such as contact forms, blog sections, and more."
      >
        <OfferList text="All UI Components" status="active" />
        <OfferList text="Use with Unlimited Projects" status="active" />
        <OfferList text="Commercial Use" status="active" />
        <OfferList text="Email Support" status="active" />
        <OfferList text="Lifetime Access" status="active" />
        <OfferList text="Free Lifetime Updates" status="active" />
      </PricingBox>
    </div>
  </div>
</div>


        <div className="absolute left-0 bottom-0 z-[-1]">
          <svg
            width="239"
            height="601"
            viewBox="0 0 239 601"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-184.451"
              y="600.973"
              width="196"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -184.451 600.973)"
              fill="url(#paint0_linear_93:235)"
            />
            <rect
              opacity="0.3"
              x="-188.201"
              y="385.272"
              width="59.7544"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -188.201 385.272)"
              fill="url(#paint1_linear_93:235)"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
