// components/CompanyHighlightCard.tsx
import React from "react";
import YouTube from "react-youtube";
import InvestmentInfoCard from "./InvestmentInfoCard";
import { YoutubeThumbnail } from "./YoutubeThumbnail";
import { useState } from "react";

export const CompanyHighlightCard: React.FC = () => {
  const [vid, setVid] = useState("FgzT3P84ysE");
  // Options for the YouTube player
  const opts = {
    height: "405", // You can adjust these values to fit your design
    width: "720",
    playerVars: {
      autoplay: 0, // Auto-play the video on load
    },
  };
  const opts2 = {
    height: "360", // You can adjust these values to fit your design
    width: "640",
    playerVars: {
      autoplay: 0, // Auto-play the video on load
    },
  };

  const shareSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
      />
    </svg>
  );
  const starSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );

  // Video IDs extracted from the YouTube links
  const videoIds = ["FgzT3P84ysE", "VVFWFRFIdsI"];

  return (
    <div className="bg-white max-w-7xl mt-10 mx-auto p-6 space-y-4">
      <div className="flex justify-between">
        <h1 className="text-4xl font-extrabold">Peak Ski Company</h1>
        <div className="flex">
          <span>{starSVG}</span>
          <span className="ml-2">{shareSVG}</span>
        </div>
      </div>
      <p className="text-gray-600">
        Revolutionary skis with proprietary technology by Olympian Bode Miller
      </p>
      {/* Tags */}
      <div className="flex space-x-2">
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          D2C
        </span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          FITNESS
        </span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          B2C
        </span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          SPORTS
        </span>
      </div>
      {/* Video Gallery */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videoIds.map((id) => (
          <YouTube key={id} videoId={id} opts={opts} />
        ))}
      </div> */}

      <div className="md:flex w-full">
        <div className="w-2/3 mr-5">
          <div className="grid gap-4">
            <div className="hidden md:block">
              {/* This YouTube component will only be visible on screen sizes larger than 'md' */}
              <YouTube videoId={vid} opts={opts} />
            </div>
            <div className="block md:hidden">
              {/* This YouTube component will be visible on screen sizes smaller than 'md' */}
              <YouTube videoId={vid} opts={opts2} />
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div
                onClick={() => {
                  setVid("FgzT3P84ysE");
                }}
                className={`cursor-pointer rounded-lg ${
                  vid === "FgzT3P84ysE" ? "border-4 border-blue-800" : ""
                }`}
              >
                <YoutubeThumbnail videoId="FgzT3P84ysE" />
              </div>
              <div
                onClick={() => {
                  setVid("VVFWFRFIdsI");
                }}
                className={`cursor-pointer rounded-lg ${
                  vid === "VVFWFRFIdsI" ? "border-4 border-blue-800" : ""
                }`}
              >
                <YoutubeThumbnail videoId="VVFWFRFIdsI" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-1/3">
          <InvestmentInfoCard />
        </div>
      </div>
    </div>
  );
};
