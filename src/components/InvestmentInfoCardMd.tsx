export const InvestmentInfoCardMd = () => {
  const amountRaised = "$579,383";
  const percentRaised = "46%";
  const maxGoal = "$1.24M";
  const investors = 338;
  const daysLeft = 69;
  return (
    <div className="p-4">
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
      <div className="flex justify-evenly mt-4">
        <div>
          <h2 className="text-3xl font-extrabold">{investors}</h2>
          <p className="text-lg text-gray-500">Investors</p>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold">{daysLeft} days</h2>
          <p className="text-lg text-gray-500">Days Left to Invest</p>
        </div>
      </div>
    </div>
  );
};
