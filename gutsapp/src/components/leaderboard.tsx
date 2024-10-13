import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronRight,
  FaTrophy,
  FaIndustry,
  FaLeaf,
  FaShieldAlt,
  FaBolt,
  FaBusinessTime,
  FaDollarSign,
} from "react-icons/fa"; // Import icons
import { ResourceLevels } from "@/types/resource";

interface LeaderboardProps {
  countryName: string;
  playerResources: ResourceLevels;
  naResources: ResourceLevels;
  saResources: ResourceLevels;
  europeResources: ResourceLevels;
  asiaResources: ResourceLevels;
  oceaniaResources: ResourceLevels;
  africaResources: ResourceLevels;
  naRelationship: number;
  saRelationship: number;
  europeRelationship: number;
  asiaRelationship: number;
  oceaniaRelationship: number;
  africaRelationship: number;
  setNARelationship: React.Dispatch<React.SetStateAction<number>>;
  setSARelationship: React.Dispatch<React.SetStateAction<number>>;
  setEuropeRelationship: React.Dispatch<React.SetStateAction<number>>;
  setAsiaRelationship: React.Dispatch<React.SetStateAction<number>>;
  setOceaniaRelationship: React.Dispatch<React.SetStateAction<number>>;
  setAfricaRelationship: React.Dispatch<React.SetStateAction<number>>;
}

export const Leaderboard = ({
  countryName,
  playerResources,
  naResources,
  saResources,
  europeResources,
  asiaResources,
  oceaniaResources,
  africaResources,
  naRelationship,
  saRelationship,
  europeRelationship,
  asiaRelationship,
  oceaniaRelationship,
  africaRelationship,
  setNARelationship,
  setSARelationship,
  setEuropeRelationship,
  setAsiaRelationship,
  setOceaniaRelationship,
  setAfricaRelationship,
}: LeaderboardProps) => {
  const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>({});

  const toggleRow = (name: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [name]: !prev[name], 
    }));
  };

  const getRelationshipColor = (value: number | null | undefined) => {
    if (value === null || value === undefined) {
      return "transparent";
    }
    const hue = (value * 120) / 100; 
    return `hsla(${hue}, 100%, 50%, 0.2)`; 
  };

  const leaderboardData = [
    { name: countryName, GDP: playerResources.GDP, resources: playerResources, relationship: null },
    { name: "North America", GDP: naResources.GDP, resources: naResources, relationship: naRelationship },
    { name: "South America", GDP: saResources.GDP, resources: saResources, relationship: saRelationship },
    { name: "Europe", GDP: europeResources.GDP, resources: europeResources, relationship: europeRelationship },
    { name: "Asia", GDP: asiaResources.GDP, resources: asiaResources, relationship: asiaRelationship },
    { name: "Oceania", GDP: oceaniaResources.GDP, resources: oceaniaResources, relationship: oceaniaRelationship },
    { name: "Africa", GDP: africaResources.GDP, resources: africaResources, relationship: africaRelationship },
  ];

  const sortedLeaderboard = leaderboardData.sort((a, b) => b.GDP - a.GDP);

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "text-yellow-400";
      case 2:
        return "text-gray-300"; 
      case 3:
        return "text-orange-400";
      default:
        return "text-gray-500"; 
    }
  };

  const getGDPColor = (GDP: number) => {
    if (GDP >= 1000000) {
      return "text-green-400"; 
    } else if (GDP > 500000) {
      return "text-yellow-400"; 
    } else {
      return "text-red-400"; 
    }
  };

  const getColor = (level: number) => {
    if (level < 33) {
      return "bg-red-500"; 
    } else if (level < 66) {
      return "bg-yellow-500"; 
    } else {
      return "bg-green-500"; 
    }
  };

  const ResourceBar = ({
    label,
    value,
    icon,
  }: {
    label: string;
    value: number;
    icon: JSX.Element;
  }) => {
    return (
      <div className="mt-2">
        <div className="flex items-center gap-2">
          {icon}
          <p className="text-xs font-medium text-gray-300">{label}</p>
        </div>
        <div className="w-full bg-gray-600 h-2 rounded-lg">
          <div
            className={`${getColor(value)} h-2 rounded-lg`}
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-3 w-[350px] mx-auto bg-gray-800 rounded-lg shadow-lg h-[55%] overflow-y-auto overflow-x-hidden custom-scrollbar">
      <p className="text-gray-300 italic underline">Leaderboard</p>
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="text-gray-400 text-sm">
            <th className="px-4 py-2">Rank</th>
            <th className="px-4 py-2">Region</th>
            <th className="px-4 py-2">GDP (Score)</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {sortedLeaderboard.map((entry, index) => {
            const relationshipColor = getRelationshipColor(entry.relationship);
            const relationshipPercentage = entry.relationship || 0;

            return (
              <React.Fragment key={entry.name}>
                <tr
                  className="bg-gray-900 text-gray-300 cursor-pointer relative"
                  onClick={() => toggleRow(entry.name)}
                  style={{
                    background: `linear-gradient(to right, ${relationshipColor} 0%, ${relationshipColor} ${relationshipPercentage}%, transparent ${relationshipPercentage}%, transparent 100%)`,
                  }}
                >
                  <td
                    className={`px-4 py-2 font-medium flex items-center gap-2 ${getRankColor(
                      index + 1
                    )}`}
                  >
                    {index < 3 && (
                      <FaTrophy className={getRankColor(index + 1)} />
                    )}{" "}
                    {index + 1}
                  </td>
                  <td className="px-3 py-2 font-medium">{entry.name}</td>
                  <td
                    className={`px-4 py-2 font-medium flex items-center gap-2 ${getGDPColor(
                      entry.GDP
                    )}`}
                  >
                    <FaDollarSign /> 
                    {entry.GDP.toLocaleString()}
                  </td>
                  <td className="py-2">
                    {expandedRows[entry.name] ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </td>
                </tr>
                {expandedRows[entry.name] && (
                  <tr>
                    <td colSpan={4} className="px-4 py-2">
                      <div className="space-y-2">
                        <ResourceBar
                          label="Manufacturing"
                          value={entry.resources.Manufacturing}
                          icon={<FaIndustry />}
                        />
                        <ResourceBar
                          label="Energy"
                          value={entry.resources.Energy}
                          icon={<FaBolt />}
                        />
                        <ResourceBar
                          label="Services"
                          value={entry.resources.Services}
                          icon={<FaBusinessTime />}
                        />
                        <ResourceBar
                          label="Defence"
                          value={entry.resources.Defence}
                          icon={<FaShieldAlt />}
                        />
                        <ResourceBar
                          label="Agriculture"
                          value={entry.resources.Agriculture}
                          icon={<FaLeaf />}
                        />
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-400 mt-3">Relationship Legend:</p>
        <div className="flex gap-2 items-center text-xs text-gray-400">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <p>Poor (0-33)</p>
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <p>Neutral (34-66)</p>
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <p>Good (67-100)</p>
        </div>
      </div>
    </div>
  );
};
