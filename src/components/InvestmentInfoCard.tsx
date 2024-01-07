import React from "react";

export const InvestmentInfoCard: React.FC = () => {
  // Dummy data - replace with actual data from your backend or state management
  const amountRaised = "$579,383";
  const percentRaised = "46%";
  const maxGoal = "$1.24M";
  const investors = 338;
  const daysLeft = 69;

  return (
    <div className="bg-white rounded-lg p-6">
      <div className="space-y-20">
        <div className="flex flex-col space-y-12">
          <div>
            <h2 className="text-3xl font-extrabold">{amountRaised}</h2>
            <p className="text-lg mt-2 mb-4 text-gray-500">
              {percentRaised} raised of {maxGoal} max goal
            </p>
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-300">
              <div
                className="bg-green-600 h-1.5 rounded-full"
                style={{ width: percentRaised }}
              ></div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold">{investors}</h2>
            <p className="text-lg text-gray-500">Investors</p>
          </div>
          <div className="mt-2">
            <h2 className="text-3xl font-extrabold">{daysLeft} days</h2>
            <p className="text-lg text-gray-500">Days Left to Invest</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col items-center">
            <button className="w-full bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors">
              Invest in Peak Ski Company
            </button>
            <span className="text-sm text-gray-600 mt-2">
              $250 minimum investment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentInfoCard;
