import React, { useState } from "react";

type TabName = "pitch" | "discussion" | "updates" | "reviews";

interface TabProps {
  name: TabName;
  count?: number;
  isSelected: boolean;
  onSelect: (tab: TabName) => void;
}

const Tab: React.FC<TabProps> = ({ name, count, isSelected, onSelect }) => {
  const countDisplay = count !== undefined ? ` ${count}` : "";
  return (
    <div
      className={`cursor-pointer px-4 py-2 ${
        isSelected
          ? "border-b-4 border-blue-600 text-blue-600"
          : "border-b-4 border-transparent text-gray-700 hover:text-blue-600"
      }`}
      onClick={() => onSelect(name)}
    >
      <span
        className={`text-lg font-medium${isSelected ? " font-extrabold" : ""}`}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </span>
      {name !== "pitch" ? (
        <span className="bg-gray-100 rounded-lg p-1 ml-1">{countDisplay}</span>
      ) : (
        <></>
      )}
    </div>
  );
};

export const TabsComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabName>("pitch");

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex space-x-4 ml-4">
        <Tab
          name="pitch"
          isSelected={selectedTab === "pitch"}
          onSelect={setSelectedTab}
        />
        <Tab
          name="discussion"
          count={95}
          isSelected={selectedTab === "discussion"}
          onSelect={setSelectedTab}
        />
        <Tab
          name="updates"
          count={2}
          isSelected={selectedTab === "updates"}
          onSelect={setSelectedTab}
        />
        <Tab
          name="reviews"
          count={14}
          isSelected={selectedTab === "reviews"}
          onSelect={setSelectedTab}
        />
      </div>
    </div>
  );
};
