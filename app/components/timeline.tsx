import React from "react";
import { Separator } from "@/components/ui/separator";

const Timeline = () => {
  return (
    <div>
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-1 h-1 bg-gray-400    rounded-full"></div>
          <Separator className="w-5" />
          <div className="w-2 h-2 bg-gray-400    rounded-full"></div>
          <Separator className="w-5" />
          <div className="w-7 h-7 bg-white shadow-lg rounded-full flex justify-center items-center p-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-3  text-gray-400"
            >
              <path
                fill-rule="evenodd"
                d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <Separator className="w-5" />
          <div className="w-2 h-2 bg-gray-400    rounded-full"></div>
          <Separator className="w-5" />
          <div className="w-1 h-1 bg-gray-400    rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
