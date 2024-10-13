import React from 'react';
import { FaHandshake, FaDollarSign, FaLeaf, FaIndustry, FaShieldAlt, FaBolt, FaBusinessTime } from 'react-icons/fa'; // Importing relevant icons
import { ResourceLevels } from '@/types/resource';
import Confetti from 'react-confetti';

interface GameOverProps {
  finalGDP: number;
  playerResources: ResourceLevels;
  playerMoney: number;
  relationships: {
    [key: string]: number;
  };
  onRestartGame: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({
  finalGDP,
  playerResources,
  playerMoney,
  relationships,
  onRestartGame,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-[50%] relative">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold">Game Over</h2>
          <div className="w-full h-[2px] mt-2 bg-gray-700"></div>
          <p className="mt-2 text-lg">
            Finishing GDP: <span className="text-yellow-400 font-bold">${finalGDP.toLocaleString()}</span>
          </p>
        </div>
        <div className="flex items-center justify-center text-lg mb-4">
          <p>
            Finishing Money: <span className="font-bold text-green-400">${playerMoney.toLocaleString()}</span>
          </p>
        </div>
        <div className="flex flex-col items-center align-center">
          <h3 className="text-2xl font-semibold mb-4 text-center">Final Resource Levels</h3>
          {/* Center the resource grid */}
          <div className="grid grid-cols-2 gap-1 w-full max-w-md mx-auto">
            {Object.entries(playerResources).map(([resourceName, resourceLevel]) => (
              <React.Fragment key={resourceName}>
                <div className="flex items-center justify-center">
                  {resourceName === 'Agriculture' && <FaLeaf className="text-green-500" />}
                  {resourceName === 'Manufacturing' && <FaIndustry className="text-blue-500" />}
                  {resourceName === 'Defence' && <FaShieldAlt className="text-red-500" />}
                  {resourceName === 'Energy' && <FaBolt className="text-yellow-500" />}
                  {resourceName === 'Services' && <FaBusinessTime className="text-purple-500" />}
                  <p className="ml-2">{resourceName}</p>
                </div>
                <p className="text-right">
                  {resourceName === 'GDP' ? `£${resourceLevel.toLocaleString()}` : `${resourceLevel}%`}
                </p>
              </React.Fragment>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mt-6 mb-4 text-center">Relationships with Regions</h3>
          {/* Center the relationships grid */}
          <div className="grid grid-cols-2 gap-1 w-full max-w-md mx-auto">
            {Object.entries(relationships).map(([region, relationshipLevel]) => (
              <React.Fragment key={region}>
                <div className="flex items-center justify-center">
                  <FaHandshake className="text-blue-500 mr-2" />
                  <p>{region}</p>
                </div>
                <p className="text-right">{relationshipLevel}%</p>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={onRestartGame}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};
