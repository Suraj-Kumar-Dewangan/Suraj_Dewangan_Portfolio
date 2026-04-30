import React, { useState, useEffect } from "react";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import ErrorBoundary from "./ErrorBoundary";

const Tech = () => {
  const [toottipTexts, setTooltipTexts] = useState({});
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseEnter = (index, technology) => {
    setTooltipTexts({ [index]: technology });
  };

  const handleMouseLeave = () => {
    setTooltipTexts({});
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div
          className="w-28 h-28 mb-2 relative"
          key={technology.name}
          onMouseEnter={() => handleMouseEnter(index, technology.name)}
          onMouseLeave={handleMouseLeave}
        >
          {isMobile ? (
            <div className="w-full h-full flex flex-col items-center justify-center bg-tertiary rounded-2xl p-2 shadow-card">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-12 h-12 object-contain"
              />
              <p className="text-secondary text-[10px] mt-1 text-center leading-tight">{technology.name}</p>
            </div>
          ) : (
            <ErrorBoundary
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <img src={technology.icon} alt={technology.name} className="w-16 h-16 object-contain" />
                </div>
              }
            >
              <BallCanvas icon={technology.icon} />
            </ErrorBoundary>
          )}

          {!isMobile && toottipTexts[index] && (
            <div className="absolute bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm z-10 bottom-[90%] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              {toottipTexts[index]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Tech;
