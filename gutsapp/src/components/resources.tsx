import { ResourceLevels } from "@/types/resource";
import { FaFlag, FaPiggyBank, FaIndustry, FaShieldAlt, FaLeaf, FaBolt, FaBusinessTime, FaInfoCircle } from 'react-icons/fa'; // Importing relevant icons
import { GrResources } from "react-icons/gr";

interface ResourceMenuProps {
  countryName: string;
  playerResources: ResourceLevels;
  playerMoney: number;
}

export const ResourceMenu = ({ countryName, playerMoney, playerResources }: ResourceMenuProps) => {
  const getColor = (level: number) => {
    if (level < 33) {
      return "bg-red-500"; 
    } else if (level < 66) {
      return "bg-yellow-500"; 
    } else {
      return "bg-green-500"; 
    }
  };

  const getResourceIcon = (resourceName: string) => {
    switch (resourceName) {
      case "Manufacturing":
        return <FaIndustry className="text-gray-300" />; 
      case "Defence":
        return <FaShieldAlt className="text-gray-300" />;
      case "Agriculture":
        return <FaLeaf className="text-gray-300" />;
      case "Energy":
        return <FaBolt className="text-gray-300" />;
      case "Services":
        return <FaBusinessTime className="text-gray-300" />;
      default:
        return null;
    }
  };

  return (
    <div className="pb-5 w-[350px] bg-gray-800 text-gray-100 p-4 rounded-lg shadow-lg h-[45%] overflow-y-scroll custom-scrollbar">
      <div className="mb-2 italic underline flex items-center gap-x-2"><GrResources /><p>Resources</p></div>

      <div className="mb-4">
        <div className="flex items-center gap-2">
          <FaFlag className="text-blue-400" />
          <h2 className="text-xl font-bold">{countryName}</h2>
        </div>
        <div className="flex items-center gap-2">
          <FaPiggyBank className="text-green-400" /> 
          <p className="text-lg">Bank Balance: ${playerMoney}</p>
        </div>
        <div className="flex items-center gap-2 mt-1 text-gray-400">
          <FaInfoCircle className="text-red-400 ml-6" title="If your balance drops below 0, you lose the game." />
          <p className="text-sm italic">Negative balance means a loss.</p>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-700 mb-2"></div>

      <div className="space-y-4">
        {Object.entries(playerResources)
          .filter(([resourceName]) => resourceName !== "GDP") 
          .map(([resourceName, resourceLevel]) => (
            <div key={resourceName}>
              <div className="flex items-center">
                {getResourceIcon(resourceName)} 
                <p className="font-medium ml-2">{resourceName} - </p>
                <div className="mx-2">{resourceLevel}%</div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className={`${getColor(resourceLevel)} h-2 rounded-full`}
                  style={{ width: `${resourceLevel}%` }}
                >
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
