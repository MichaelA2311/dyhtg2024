import React, { useState } from "react";
import { ResourceLevels } from "@/types/resource";
import { FaLeaf, FaIndustry, FaShieldAlt, FaBusinessTime, FaBolt, FaPiggyBank } from 'react-icons/fa'; 
import Confetti from 'react-confetti';

const resourceIcons: { [key in keyof ResourceLevels]: JSX.Element } = {
  Agriculture: <FaLeaf />,
  Manufacturing: <FaIndustry />,
  Defence: <FaShieldAlt />,
  Services: <FaBusinessTime />,
  Energy: <FaBolt />,
  GDP: <FaPiggyBank />,
};

interface TradingModalProps {
  countryName: string;

  playerResources: ResourceLevels;
  playerMoney: number;
  setPlayerMoney: React.Dispatch<React.SetStateAction<number>>;

  naResources: ResourceLevels;
  saResources: ResourceLevels;
  europeResources: ResourceLevels;
  asiaResources: ResourceLevels;
  oceaniaResources: ResourceLevels;
  africaResources: ResourceLevels;

  setPlayerResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setNAResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setSAResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setEuropeResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setAsiaResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setOceaniaResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setAfricaResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;

  closeModal: (completedTrade: boolean) => void;
}

export const TradingModal = ({
  countryName,
  playerResources,
  playerMoney,
  setPlayerMoney,

  naResources,
  saResources,
  europeResources,
  asiaResources,
  oceaniaResources,
  africaResources,

  setPlayerResources,
  setNAResources,
  setSAResources,
  setEuropeResources,
  setAsiaResources,
  setOceaniaResources,
  setAfricaResources,

  closeModal,
}: TradingModalProps) => {
  const [selectedResource, setSelectedResource] = useState<keyof ResourceLevels | null>(null);
  const [quantityToSell, setQuantityToSell] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const getBuyerResources = () => {
    switch (countryName) {
      case "North America":
        return { resources: naResources, setResources: setNAResources };
      case "South America":
        return { resources: saResources, setResources: setSAResources };
      case "Europe":
        return { resources: europeResources, setResources: setEuropeResources };
      case "Asia":
        return { resources: asiaResources, setResources: setAsiaResources };
      case "Oceania":
        return { resources: oceaniaResources, setResources: setOceaniaResources };
      case "Africa":
        return { resources: africaResources, setResources: setAfricaResources };
      default:
        return { resources: null, setResources: null };
    }
  };

  const buyer = getBuyerResources();

  if (!buyer.resources || !buyer.setResources) {
    return <div>Invalid buyer country.</div>;
  }

  const resourceList: (keyof ResourceLevels)[] = ["Manufacturing", "Energy", "Services", "Defence", "Agriculture"];

  const getPricePerUnit = (resource: keyof ResourceLevels) => {
    const buyerResourceLevel = buyer.resources[resource];
    const normalizedLevel = buyerResourceLevel / 100;
    const maxPrice = 10000;
    const minPrice = 1000;
    const price = minPrice + (1 - normalizedLevel) * (maxPrice - minPrice);
    return price;
  };

  const getMaxTradeQuantity = (resource: keyof ResourceLevels) => {
    const playerResourceAmount = playerResources[resource];
    const buyerCurrentAmount = buyer.resources[resource];
    const buyerMaxAcceptableAmount = Math.max(100 - buyerCurrentAmount, 0);

    return Math.min(playerResourceAmount, buyerMaxAcceptableAmount);
  };

  const handleTrade = () => {
    setErrorMessage(null);

    if (!selectedResource || quantityToSell <= 0) {
      setErrorMessage("Please select a resource and enter a valid quantity.");
      return;
    }

    if (playerResources[selectedResource] < quantityToSell) {
      setErrorMessage("You don't have enough of this resource to sell.");
      return;
    }

    const maxTradeQuantity = getMaxTradeQuantity(selectedResource);
    if (quantityToSell > maxTradeQuantity) {
      setErrorMessage(`You can only trade up to ${maxTradeQuantity} units because the country can't exceed a resource value of 100.`);
      return;
    }

    setPlayerResources((prevResources) => ({
      ...prevResources,
      [selectedResource]: prevResources[selectedResource] - quantityToSell,
    }));

    const pricePerUnit = getPricePerUnit(selectedResource);
    const totalPrice = pricePerUnit * quantityToSell;
    setPlayerMoney((prevMoney) => prevMoney + totalPrice);

    buyer.setResources((prevResources: ResourceLevels) => ({
      ...prevResources,
      [selectedResource]: prevResources[selectedResource] + quantityToSell,
    }));

    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 4000);
    closeModal(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={() => closeModal(false)}></div>

      <div className="bg-gray-900 text-gray-100 p-6 w-[400px] h-auto shadow-lg rounded-lg z-50 relative">
        <h2 className="text-2xl font-bold mb-4">Trade with {countryName}</h2>

        {showConfetti && (
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          </div>
        )}

        {errorMessage && (
          <div className="mb-4 text-red-500 font-bold">
            {errorMessage}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">Select Resource to Sell:</label>
          <select
            value={selectedResource || ""}
            onChange={(e) => setSelectedResource(e.target.value as keyof ResourceLevels)}
            className="w-full border border-gray-600 rounded-md p-2 bg-gray-800 text-gray-300"
          >
            <option value="" disabled>Select a resource</option>
            {resourceList.map((resource) => (
              <option key={resource} value={resource}>
                {resource}
              </option>
            ))}
          </select>
        </div>

        {selectedResource && (
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2">
              Quantity to Sell (Max: {getMaxTradeQuantity(selectedResource)}):
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="1"
                max={getMaxTradeQuantity(selectedResource)}
                value={quantityToSell}
                onChange={(e) => setQuantityToSell(parseInt(e.target.value))}
                className="w-full"
              />
              <span className="text-gray-300 font-bold">{quantityToSell}</span>
            </div>

            <div className="mt-2 text-sm text-gray-400">
              {playerResources[selectedResource] <= getMaxTradeQuantity(selectedResource) 
                ? `The trade is capped by the amount of ${selectedResource} you have (${playerResources[selectedResource]}).`
                : `The trade is capped because the country can't exceed a resource value of 100.`}
            </div>
          </div>
        )}

        {selectedResource && quantityToSell > 0 && (
          <div className="mb-4 text-gray-400">
            <p>Price per unit: ${getPricePerUnit(selectedResource).toFixed(2)}</p>
            <p>Total Price: ${(getPricePerUnit(selectedResource) * quantityToSell).toFixed(2)}</p>
          </div>
        )}

        <div className="flex justify-end">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2"
            onClick={handleTrade}
            disabled={!selectedResource || quantityToSell <= 0}
          >
            Sell
          </button>
          <button
            className="bg-gray-600 text-white py-2 px-4 rounded-lg"
            onClick={() => closeModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
