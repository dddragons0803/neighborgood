import Section from "./Section";
import {  stars } from "../assets";
import Heading from "./Heading";
import { LeftLine, RightLine } from "./design/Pricing";
import postcard from '../assets/pricing/postcard.png'

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[5rem] lg:flex">
          <img
            src={postcard}
            width={700}
            className="relative z-1"
            alt="postcard"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          title="Our Postcards"
           tag=""
        />
        <Heading
          title=""
           tag="Explore our unique collection of postcards and share a slice of your world with your neighbors. Let's bridge distances one postcard at a time. Send a smile, share a story, and strengthen our community bonds. Pick your favorite, add a personal touch, and let the joy spread to every doorstep. Explore, connect, cherish!"
        />

        <div className="relative">
          {/* <PricingList /> */}
          <LeftLine />
          <RightLine />
        </div>

      </div>
    </Section>
  );
};

export default Pricing;
