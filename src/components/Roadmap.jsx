
import Heading from "./Heading";
import Section from "./Section";

import { roadmap } from "../constants";
import { grid} from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden w-full" id="roadmap">
    <div className="container md:pb-10 w-full">
      <Heading tag="" title="Wanna know more about us ?" />

      <div className="relative grid md:gap-4 md:pb-[7rem] w-full">
        {roadmap.map((item) => {
          // const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] w-full p-0.25 rounded-[2.5rem] justify-center ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15 w-full">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={528}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Roadmap;
