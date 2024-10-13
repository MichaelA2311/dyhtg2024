import { useState, useEffect } from "react";
import { Specialisations } from "@/types/specialisations";
import { GameState } from "@/types/gameState";
import { ResourceLevels } from "@/types/resource";
import { HowToPlay } from "./how-to-play";

interface IntroState {
  countryName: string;
  setCountryName: React.Dispatch<React.SetStateAction<string>>;
  specialisation: Specialisations;
  setSpecialisation: React.Dispatch<React.SetStateAction<Specialisations>>;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  playerResources: ResourceLevels;
  setPlayerResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  gameLengthDays: number;
  setGameLengthDays: React.Dispatch<React.SetStateAction<number>>;
}

export const IntroMenu = ({
  countryName,
  setCountryName,
  specialisation,
  setSpecialisation,
  setGameState,
  playerResources,
  setPlayerResources,
  gameLengthDays,
  setGameLengthDays
}: IntroState) => {
  const [error, setError] = useState<string>("");
  const [showHowToPlay, setShowHowToPlay] = useState<boolean>(false); 

  useEffect(() => {
    const getResourcesForSpecialisation = (spec: Specialisations): ResourceLevels => {
      switch (spec) {
        case Specialisations.AGRICULTURE:
          return {
            GDP: 1000000,
            Manufacturing: 60,
            Energy: 70,
            Services: 60,
            Defence: 40,
            Agriculture: 100,
          };
        case Specialisations.DEFENCE:
          return {
            GDP: 1000000,
            Manufacturing: 90,
            Energy: 80,
            Services: 50,
            Defence: 100,
            Agriculture: 60,
          };
        case Specialisations.MANUFACTURING:
          return {
            GDP: 1000000,
            Manufacturing: 100,
            Energy: 70,
            Services: 60,
            Defence: 70,
            Agriculture: 50,
          };
        case Specialisations.SERVICES:
          return {
            GDP: 1000000,
            Manufacturing: 60,
            Energy: 60,
            Services: 100,
            Defence: 50,
            Agriculture: 70,
          };
        case Specialisations.ENERGY:
          return {
            GDP: 1000000,
            Manufacturing: 40,
            Energy: 100,
            Services: 70,
            Defence: 60,
            Agriculture: 35,
          };
        default:
          return {
            GDP: 1000000,
            Manufacturing: 50,
            Energy: 50,
            Services: 50,
            Defence: 50,
            Agriculture: 50,
          };
      }
    };

    setPlayerResources(getResourcesForSpecialisation(specialisation));
  }, [specialisation, setPlayerResources]);

  const handleStartGame = () => {
    if (countryName.trim() === "") {
      setError("Country name is required.");
    } else {
      setError(""); 
      setGameState(GameState.GAME); 
    }
  };

  const getColor = (level: number) => {
    if (level < 33) {
      return "bg-red-600"; 
    } else if (level < 66) {
      return "bg-yellow-600"; 
    } else {
      return "bg-green-600";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-gray-100 p-6 rounded-lg shadow-md max-w-4xl w-full h-[100%] overflow-y-auto custom-scrollbar">
        
        <button
          className="bg-gray-700 text-white p-2 rounded-md hover:bg-gray-600 absolute top-4 right-4 z-50"
          onClick={() => setShowHowToPlay(true)}
        >
          How to Play
        </button>


        <div className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-md w-full h-[100%] overflow-y-auto custom-scrollbar">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-100 mb-2">
              "Team 13 - Unlucky Two Sum" Presents...
            </h2>
            <h1 className="text-2xl font-bold text-gray-100 mb-2">
              A World Simulation of Some Kind
            </h1>
            <div className="w-full h-[2px] mt-2 bg-gray-700"></div>
          </div>

          <div className="w-full mt-4">
            <label className="block text-gray-100 font-medium mb-2">
              Select a Country Name
            </label>
            <input
              type="text"
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
              className={`w-full p-2 bg-gray-700 text-gray-100 border ${
                error ? "border-red-500" : "border-gray-500"
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
              placeholder="Enter country name"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          
          <div className="w-full h-[2px] mt-4 bg-gray-700"></div>

          <div className="w-full mt-4">
            <label className="block text-gray-100 font-medium mb-2">
              Select Number of Days (10 - 100)
            </label>
            <input
              type="range"
              min="10"
              max="100"
              value={gameLengthDays}
              onChange={(e) => setGameLengthDays(parseInt(e.target.value))}
              className="w-full"
            />
            <p className="text-gray-400 mt-2">{gameLengthDays} days</p>
          </div>

          <div className="w-full h-[2px] mt-4 bg-gray-700"></div>

          <div className="w-full mt-4">
            <p className="text-gray-100 font-medium mb-2">Select a Specialisation</p>
            <form className="space-y-2">
              {Object.values(Specialisations).map((type, index) => (
                <div key={type} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id={`specType-${index}`} 
                    name="specType"
                    value={type}
                    checked={specialisation === type}
                    onChange={(e) =>
                      setSpecialisation(e.target.value as Specialisations)
                    }
                    className="form-radio h-4 w-4 text-blue-600 focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                  <label
                    htmlFor={`specType-${index}`} 
                    className="text-gray-400 cursor-pointer"
                  >
                    {type}
                  </label>
                </div>
              ))}
            </form>
          </div>

          <div className="w-full h-[2px] mt-4 bg-gray-700"></div>

          <div className="w-full mt-6 grid grid-cols-2 gap-x-10">
            <h3 className="text-lg font-bold text-gray-100 mb-2 col-span-2">
              Resource Levels:
            </h3>
            {Object.entries(playerResources)
              .filter(([resourceName]) => resourceName !== "GDP") 
              .map(([resourceName, resourceLevel]) => (
                <div key={resourceName} className="mb-4">
                  <p className="font-medium text-gray-100">{resourceName}</p>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`${getColor(resourceLevel)} h-2 rounded-full`}
                      style={{ width: `${resourceLevel}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">{resourceLevel}%</p>
                </div>
              ))}
          </div>
          <div className="w-full h-[2px] mt-1 bg-gray-700"></div>

          <div className="w-full text-center mt-6">
            <button
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
              onClick={handleStartGame}
            >
              Start Game
            </button>
          </div>
        </div>
      </div>

      {showHowToPlay && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="absolute inset-0 bg-black opacity-50" onClick={() => setShowHowToPlay(false)}></div>
          <div className="bg-gray-800 text-gray-100 p-6 rounded-lg shadow-md max-w-4xl w-full h-[80%] overflow-y-auto custom-scrollbar z-50">
            <HowToPlay />
            <button
              className="mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
              onClick={() => setShowHowToPlay(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
