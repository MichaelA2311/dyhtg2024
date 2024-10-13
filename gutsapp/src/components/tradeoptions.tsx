import { useState } from "react";
import { ResourceLevels } from "@/types/resource";
import { TradingModal } from "./trade";
import { FaHandshake, FaExchangeAlt } from 'react-icons/fa';

interface TradeOptionsProps {
  playerResources: ResourceLevels;
  setPlayerResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  playerMoney: number;
  setPlayerMoney: React.Dispatch<React.SetStateAction<number>>;

  naResources: ResourceLevels;
  saResources: ResourceLevels;
  europeResources: ResourceLevels;
  asiaResources: ResourceLevels;
  oceaniaResources: ResourceLevels;
  africaResources: ResourceLevels;

  setNAResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setSAResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setEuropeResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setAsiaResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setOceaniaResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setAfricaResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;

  naRelationship: number;
  saRelationship: number;
  europeRelationship: number;
  asiaRelationship: number;
  oceaniaRelationship: number;
  africaRelationship: number;

  allowedToTrade: boolean;
  setAllowedToTrade: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TradeOptions = ({
  playerResources,
  setPlayerResources,
  playerMoney,
  setPlayerMoney,

  naResources,
  saResources,
  europeResources,
  asiaResources,
  oceaniaResources,
  africaResources,

  setNAResources,
  setSAResources,
  setEuropeResources,
  setAsiaResources,
  setOceaniaResources,
  setAfricaResources,

  naRelationship,
  saRelationship,
  europeRelationship,
  asiaRelationship,
  oceaniaRelationship,
  africaRelationship,

  allowedToTrade,
  setAllowedToTrade,
}: TradeOptionsProps) => {
  const [showTrading, setShowTrading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const countries = [
    { name: "North America", resources: naResources, relationship: naRelationship },
    { name: "South America", resources: saResources, relationship: saRelationship },
    { name: "Europe", resources: europeResources, relationship: europeRelationship },
    { name: "Asia", resources: asiaResources, relationship: asiaRelationship },
    { name: "Oceania", resources: oceaniaResources, relationship: oceaniaRelationship },
    { name: "Africa", resources: africaResources, relationship: africaRelationship },
  ];

  const minRelationship = 30;

  const initiateTrade = (countryName: string, relationship: number) => {
    if (relationship >= minRelationship) {
      setSelectedCountry(countryName);
      setShowTrading(true);
      setErrorMessage(null);
    } else {
      setErrorMessage(`Relationship with ${countryName} is too low to trade.`);
      setShowTrading(false);
    }
  };

  return (
    <div className="pb-5 w-[350px] bg-gray-800 text-gray-200 p-4 rounded-lg shadow-md h-[45%] overflow-y-scroll custom-scrollbar z-[12]">
      <div className="flex justify-between items-center">
        <p className="mb-2 italic underline text-gray-300">Trade Options</p>
        {!allowedToTrade && (
          <span className="text-red-400 text-sm font-bold">
            Already traded today.
          </span>
        )}
      </div>

      <ul>
        {countries.map((country) => (
          <li key={country.name} className="flex justify-between items-center mb-4">
            <div className="flex gap-x-2">
              <p className="text-lg font-bold">{country.name}</p>
              {country.relationship < minRelationship && (
                <div className="text-xs text-red-400 mt-1 flex gap-x-2 items-center">
                  <FaHandshake /> <p>too low</p>
                </div>
              )}
            </div>
            <button
              className={`px-4 py-2 rounded-lg text-white shadow-lg ${
                country.relationship >= minRelationship && allowedToTrade
                  ? "bg-[#cfaf04] hover:bg-[#FFD700]"
                  : "bg-gray-600 cursor-not-allowed"
              }`}
              disabled={country.relationship < minRelationship || !allowedToTrade}
              onClick={() => initiateTrade(country.name, country.relationship)}
            >
              <FaExchangeAlt className="inline mr-2" /> Trade
            </button>
          </li>
        ))}
      </ul>

      {errorMessage && (
        <div className="mt-4 text-red-400 font-bold">
          {errorMessage}
        </div>
      )}

      {showTrading && selectedCountry && (
        <TradingModal
          countryName={selectedCountry}
          playerResources={playerResources}
          setPlayerResources={setPlayerResources}
          playerMoney={playerMoney}
          setPlayerMoney={setPlayerMoney}
          naResources={naResources}
          saResources={saResources}
          europeResources={europeResources}
          asiaResources={asiaResources}
          africaResources={africaResources}
          oceaniaResources={oceaniaResources}
          setNAResources={setNAResources}
          setSAResources={setSAResources}
          setEuropeResources={setEuropeResources}
          setAsiaResources={setAsiaResources}
          setOceaniaResources={setOceaniaResources}
          setAfricaResources={setAfricaResources}
          closeModal={(completedTrade: boolean) => {
            if (completedTrade) setAllowedToTrade(false);
            setShowTrading(false);
          }}
        />
      )}
    </div>
  );
};
