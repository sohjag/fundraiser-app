// components/Dropdown.tsx
import React from "react";

export const DropdownInvestors: React.FC<{ isVisible: boolean }> = ({
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-11 left-0 w-screen bg-gray-100 shadow-lg rounded-md z-10">
      <div className="max-w-7xl mx-auto py-4" style={{ width: "70%" }}>
        <div className="flex justify-evenly items-center">
          <div className="space-y-2 mt-5">
            <p className="font-semibold text-md cursor-pointer p-2">
              All investors
            </p>
            <div className="cursor-pointer p-2">
              <p>Primary Market</p>
              <p className="text-sm text-gray-500">Invest in startups</p>
            </div>
            <div className="cursor-pointer p-2">
              <p>Secondary Market</p>
              <p className="text-sm text-gray-500">Buy and sell assets</p>
            </div>
            <div className="cursor-pointer p-2">
              <p>Republic Note</p>
              <p className="text-sm text-gray-500">
                Own a piece of Republic's upside
              </p>
            </div>
          </div>
          <div className="space-y-2 mt-5">
            <p className="font-semibold text-md cursor-pointer p-2">
              Accredited Only
            </p>
            <div className="cursor-pointer p-2">
              <p>Deal Room</p>
              <p className="text-sm text-gray-500">
                Opportunities for accredited investors only
              </p>
            </div>
            <div className="cursor-pointer p-2">
              <p>Platinum Membership</p>
              <p className="text-sm text-gray-500">
                Receive exclusive discounts
              </p>
            </div>
            <div className="cursor-pointer p-2">
              <p>Republic Note</p>
              <p className="text-sm text-gray-500">
                Own a piece of Republic's upside
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
