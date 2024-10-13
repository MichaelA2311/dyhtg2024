import React, { useState, useEffect } from "react";
import { ResourceLevels } from "@/types/resource";
import { eventList } from "@/events/events";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaIndustry,
  FaLeaf,
  FaBolt,
  FaShieldAlt,
  FaBusinessTime,
  FaCoins,
  FaHandshake,
} from "react-icons/fa";
import { EventNews } from "@/types/event-news";
import { GameOver } from "./GameOver";
import { GameState } from "@/types/gameState";

interface EventPopupProps {
  playerResources: ResourceLevels;
  naResources: ResourceLevels;
  saResources: ResourceLevels;
  europeResources: ResourceLevels;
  asiaResources: ResourceLevels;
  oceaniaResources: ResourceLevels;
  africaResources: ResourceLevels;
  daysComplete: number;
  playerMoney: number;
  eventNewsList: EventNews[];
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  setAllowedToTrade: React.Dispatch<React.SetStateAction<boolean>>;
  setEventNewsList: React.Dispatch<React.SetStateAction<EventNews[]>>;
  setShowEvent: React.Dispatch<React.SetStateAction<boolean>>;
  setPlayerResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setNAResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setSAResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setEuropeResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setAsiaResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setOceaniaResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setAfricaResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  setDaysComplete: React.Dispatch<React.SetStateAction<number>>;
  setPlayerMoney: React.Dispatch<React.SetStateAction<number>>;
  naRelationship: number;
  saRelationship: number;
  europeRelationship: number;
  asiaRelationship: number;
  oceaniaRelationship: number;
  africaRelationship: number;
  gameLengthDays: number;
  setNARelationship: React.Dispatch<React.SetStateAction<number>>;
  setSARelationship: React.Dispatch<React.SetStateAction<number>>;
  setEuropeRelationship: React.Dispatch<React.SetStateAction<number>>;
  setAsiaRelationship: React.Dispatch<React.SetStateAction<number>>;
  setOceaniaRelationship: React.Dispatch<React.SetStateAction<number>>;
  setAfricaRelationship: React.Dispatch<React.SetStateAction<number>>;
}

export const EventPopup: React.FC<EventPopupProps> = ({
  playerResources,
  playerMoney,
  setAllowedToTrade,
  naResources,
  saResources,
  europeResources,
  asiaResources,
  oceaniaResources,
  africaResources,
  daysComplete,
  gameLengthDays,
  setGameState,
  eventNewsList,
  setEventNewsList,
  setShowEvent,
  setPlayerResources,
  setNAResources,
  setSAResources,
  setEuropeResources,
  setAsiaResources,
  setOceaniaResources,
  setAfricaResources,
  setDaysComplete,
  setPlayerMoney,
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
}) => {
  const [randomEvent, setRandomEvent] = useState<any>(null);
  const [decisionMade, setDecisionMade] = useState(false);
  const [decision, setDecision] = useState<"Yes" | "No" | null>(null);

  const resourceIcons = {
    Manufacturing: <FaIndustry className="mr-2" />,
    Defence: <FaShieldAlt className="mr-2" />,
    Services: <FaBusinessTime className="mr-2" />,
    Energy: <FaBolt className="mr-2" />,
    Agriculture: <FaLeaf className="mr-2" />,
  };

  // Helper function to clamp values between min and max
  const clamp = (value: number, min: number, max: number) => {
    return Math.max(min, Math.min(value, max));
  };


  

  const updateEnemyResources = () => {
    const allRegions = ["NA", "SA", "Europe", "Asia", "Oceania", "Africa"];

    const involvedRegion = randomEvent.involvedCountry;

    const enemyRegions = allRegions.filter((region) => region !== involvedRegion);

    const getRandomResourceChange = () => ({
      GDP: Math.floor(Math.random() * 100000) - 50000,
      Manufacturing: Math.floor(Math.random() * 20) - 10,
      Defence: Math.floor(Math.random() * 10) - 5,
      Services: Math.floor(Math.random() * 20) - 10,
      Energy: Math.floor(Math.random() * 15) - 7,
      Agriculture: Math.floor(Math.random() * 20) - 10,
    });

    enemyRegions.forEach((region) => {
      switch (region) {
        case "NA":
          setNAResources((prevResources) =>
            getClampedImpact(prevResources, getRandomResourceChange())
          );
          break;
        case "SA":
          setSAResources((prevResources) =>
            getClampedImpact(prevResources, getRandomResourceChange())
          );
          break;
        case "Europe":
          setEuropeResources((prevResources) =>
            getClampedImpact(prevResources, getRandomResourceChange())
          );
          break;
        case "Asia":
          setAsiaResources((prevResources) =>
            getClampedImpact(prevResources, getRandomResourceChange())
          );
          break;
        case "Oceania":
          setOceaniaResources((prevResources) =>
            getClampedImpact(prevResources, getRandomResourceChange())
          );
          break;
        case "Africa":
          setAfricaResources((prevResources) =>
            getClampedImpact(prevResources, getRandomResourceChange())
          );
          break;
      }
    });
  };

  const updateEventNewsList = () => {
    if (!randomEvent) return;

    const newEventNews: EventNews = {
      title: randomEvent.eventName,
      description: randomEvent.eventDescription,
      order: daysComplete,
    };

    setEventNewsList((prevNewsList) => [...prevNewsList, newEventNews]);
  };

  useEffect(() => {
    const getRandomEvent = () => {
      if (eventList && eventList.length > 0) {
        const randomIndex = Math.floor(Math.random() * eventList.length);
        setRandomEvent(eventList[randomIndex]);
      }
    };

    getRandomEvent();
  }, []);

  const meetsRequirement = (playerValue: number, requiredValue: number) => {
    return playerValue >= requiredValue;
  };

  const allRequirementsMet = () => {
    const requirements = randomEvent?.eventRequirements;
    if (!requirements) return false;

    const resourceTypes: (keyof ResourceLevels)[] = [
      "Manufacturing",
      "Defence",
      "Services",
      "Energy",
      "Agriculture",
    ];

    const resourcesMet = resourceTypes.every((resource) => {
      const requiredValue = requirements[resource] || 0;
      return meetsRequirement(playerResources[resource], requiredValue);
    });

    const involvedRegion = randomEvent.involvedCountry;
    const requiredRelationship = randomEvent.requiredRelationship || 0;
    const playerRelationship = getRelationshipValue(involvedRegion);

    const relationshipMet = playerRelationship >= requiredRelationship;

    return resourcesMet && relationshipMet;
  };

  const getRelationshipValue = (region: string) => {
    switch (region) {
      case "NA":
        return naRelationship;
      case "SA":
        return saRelationship;
      case "Europe":
        return europeRelationship;
      case "Asia":
        return asiaRelationship;
      case "Oceania":
        return oceaniaRelationship;
      case "Africa":
        return africaRelationship;
      default:
        return 0;
    }
  };

  const updateRelationshipValue = (region: string, impact: number) => {
    switch (region) {
      case "NA":
        setNARelationship((prev) => clamp(prev + impact, 1, 100));
        break;
      case "SA":
        setSARelationship((prev) => clamp(prev + impact, 1, 100));
        break;
      case "Europe":
        setEuropeRelationship((prev) => clamp(prev + impact, 1, 100));
        break;
      case "Asia":
        setAsiaRelationship((prev) => clamp(prev + impact, 1, 100));
        break;
      case "Oceania":
        setOceaniaRelationship((prev) => clamp(prev + impact, 1, 100));
        break;
      case "Africa":
        setAfricaRelationship((prev) => clamp(prev + impact, 1, 100));
        break;
    }
  };

  const handleDecision = (choice: "Yes" | "No") => {
    setDecision(choice);
    setDecisionMade(true);
  };

  const getClampedImpact = (resources: ResourceLevels, impacts: any) => ({
    GDP: resources.GDP + (impacts?.GDP || 0),
    Manufacturing: clamp(
      resources.Manufacturing + (impacts?.Manufacturing || 0),
      0,
      100
    ),
    Defence: clamp(
      resources.Defence + (impacts?.Defence || 0),
      0,
      100
    ),
    Services: clamp(
      resources.Services + (impacts?.Services || 0),
      0,
      100
    ),
    Energy: clamp(
      resources.Energy + (impacts?.Energy || 0),
      0,
      100
    ),
    Agriculture: clamp(
      resources.Agriculture + (impacts?.Agriculture || 0),
      0,
      100
    ),
  });

  if (!randomEvent) {
    return <div>Loading event...</div>;
  }

  if (decisionMade) {
    const playerImpacts = randomEvent.eventImpacts[decision as "Yes" | "No"];
    const involvedCountryImpacts = randomEvent.involvedCountryImpacts[decision as "Yes" | "No"];

    const relationshipImpact =
      decision === "Yes"
        ? randomEvent.relationshipAgreeImpact || 0
        : randomEvent.relationshipDeclineImpact || 0;

    return (
      <div className="bg-gray-800 text-gray-100 p-6 w-[400px] h-auto shadow-lg rounded-lg z-[201]">
        <h2 className="text-2xl font-bold mb-2">{randomEvent.eventName}</h2>
        <div className="w-full h-[2px] bg-gray-200 mb-2"></div>
        <p className="text-lg mb-4 flex">
          {decision === "Yes"
            ? "You accepted. Your actions will have consequences."
            : "You declined. Your actions will have consequences."}
        </p>
        <div className="mt-4">
          <p className="text-md font-semibold">Player Impacts:</p>
          <div className="ml-2">
            <p
              className={
                playerImpacts.GDP > 0
                  ? "text-green-500"
                  : playerImpacts.GDP < 0
                  ? "text-red-500"
                  : "text-gray-100"
              }
            >
              <FaCoins className="inline mr-2" />
              GDP: {playerImpacts.GDP > 0 ? "+" : playerImpacts.GDP < 0 ? "-" : ""}
              ${Math.abs(playerImpacts.GDP).toLocaleString()}
            </p>
            <p
              className={
                playerImpacts.Manufacturing > 0
                  ? "text-green-500"
                  : playerImpacts.Manufacturing < 0
                  ? "text-red-500"
                  : "text-gray-100"
              }
            >
              <FaIndustry className="inline mr-2" />
              Manufacturing: {playerImpacts.Manufacturing > 0 ? "+" : playerImpacts.Manufacturing < 0 ? "-" : ""}
              {Math.abs(playerImpacts.Manufacturing)}%
            </p>
            <p
              className={
                playerImpacts.Defence > 0
                  ? "text-green-500"
                  : playerImpacts.Defence < 0
                  ? "text-red-500"
                  : "text-gray-100"
              }
            >
              <FaShieldAlt className="inline mr-2" />
              Defence: {playerImpacts.Defence > 0 ? "+" : playerImpacts.Defence < 0 ? "-" : ""}
              {Math.abs(playerImpacts.Defence)}%
            </p>
            <p
              className={
                playerImpacts.Services > 0
                  ? "text-green-500"
                  : playerImpacts.Services < 0
                  ? "text-red-500"
                  : "text-gray-100"
              }
            >
              <FaBusinessTime className="inline mr-2" />
              Services: {playerImpacts.Services > 0 ? "+" : playerImpacts.Services < 0 ? "-" : ""}
              {Math.abs(playerImpacts.Services)}%
            </p>
            <p
              className={
                playerImpacts.Energy > 0
                  ? "text-green-500"
                  : playerImpacts.Energy < 0
                  ? "text-red-500"
                  : "text-gray-100"
              }
            >
              <FaBolt className="inline mr-2" />
              Energy: {playerImpacts.Energy > 0 ? "+" : playerImpacts.Energy < 0 ? "-" : ""}
              {Math.abs(playerImpacts.Energy)}%
            </p>
            <p
              className={
                playerImpacts.Agriculture > 0
                  ? "text-green-500"
                  : playerImpacts.Agriculture < 0
                  ? "text-red-500"
                  : "text-gray-100"
              }
            >
              <FaLeaf className="inline mr-2" />
              Agriculture: {playerImpacts.Agriculture > 0 ? "+" : playerImpacts.Agriculture < 0 ? "-" : ""}
              {Math.abs(playerImpacts.Agriculture)}%
            </p>
          </div>
        </div>

        {randomEvent.involvedCountry !== "None" && (
          <div className="mt-4">
            <p className="text-md font-semibold">
              Impacts on {randomEvent.involvedCountry}:
            </p>
            <div className="ml-2">
              <p
                className={
                  involvedCountryImpacts.GDP > 0
                    ? "text-green-500"
                    : involvedCountryImpacts.GDP < 0
                    ? "text-red-500"
                    : "text-gray-100"
                }
              >
                <FaCoins className="inline mr-2" />
                GDP: {involvedCountryImpacts.GDP > 0 ? "+" : involvedCountryImpacts.GDP < 0 ? "-" : ""}
                ${Math.abs(involvedCountryImpacts.GDP).toLocaleString()}
              </p>
              <p
                className={
                  involvedCountryImpacts.Manufacturing > 0
                    ? "text-green-500"
                    : involvedCountryImpacts.Manufacturing < 0
                    ? "text-red-500"
                    : "text-gray-100"
                }
              >
                <FaIndustry className="inline mr-2" />
                Manufacturing: {involvedCountryImpacts.Manufacturing > 0 ? "+" : involvedCountryImpacts.Manufacturing < 0 ? "-" : ""}
                {Math.abs(involvedCountryImpacts.Manufacturing)}%
              </p>
              <p
                className={
                  involvedCountryImpacts.Defence > 0
                    ? "text-green-500"
                    : involvedCountryImpacts.Defence < 0
                    ? "text-red-500"
                    : "text-gray-100"
                }
              >
                <FaShieldAlt className="inline mr-2" />
                Defence: {involvedCountryImpacts.Defence > 0 ? "+" : involvedCountryImpacts.Defence < 0 ? "-" : ""}
                {Math.abs(involvedCountryImpacts.Defence)}%
              </p>
              <p
                className={
                  involvedCountryImpacts.Services > 0
                    ? "text-green-500"
                    : involvedCountryImpacts.Services < 0
                    ? "text-red-500"
                    : "text-gray-100"
                }
              >
                <FaBusinessTime className="inline mr-2" />
                Services: {involvedCountryImpacts.Services > 0 ? "+" : involvedCountryImpacts.Services < 0 ? "-" : ""}
                {Math.abs(involvedCountryImpacts.Services)}%
              </p>
              <p
                className={
                  involvedCountryImpacts.Energy > 0
                    ? "text-green-500"
                    : involvedCountryImpacts.Energy < 0
                    ? "text-red-500"
                    : "text-gray-100"
                }
              >
                <FaBolt className="inline mr-2" />
                Energy: {involvedCountryImpacts.Energy > 0 ? "+" : involvedCountryImpacts.Energy < 0 ? "-" : ""}
                {Math.abs(involvedCountryImpacts.Energy)}%
              </p>
              <p
                className={
                  involvedCountryImpacts.Agriculture > 0
                    ? "text-green-500"
                    : involvedCountryImpacts.Agriculture < 0
                    ? "text-red-500"
                    : "text-gray-100"
                }
              >
                <FaLeaf className="inline mr-2" />
                Agriculture: {involvedCountryImpacts.Agriculture > 0 ? "+" : involvedCountryImpacts.Agriculture < 0 ? "-" : ""}
                {Math.abs(involvedCountryImpacts.Agriculture)}%
              </p>
            </div>
          </div>
        )}

        {randomEvent.involvedCountry !== "None" && (
          <div className="mt-4">
            <p className="text-md font-semibold">
              Relationship Impact with {randomEvent.involvedCountry}:
            </p>
            <div className="ml-2">
              <p
                className={
                  relationshipImpact > 0
                    ? "text-green-500"
                    : relationshipImpact < 0
                    ? "text-red-500"
                    : "text-gray-100"
                }
              >
                <FaHandshake className="inline mr-2" />
                Relationship: {relationshipImpact > 0 ? "+" : relationshipImpact < 0 ? "-" : ""}
                {Math.abs(relationshipImpact)}%
              </p>
            </div>
          </div>
        )}

        <button
          className="bg-gray-500 text-white py-2 px-4 rounded-lg mx-auto mt-2"
          onClick={() => {
            setDaysComplete(daysComplete + 1);
            setShowEvent(false);

            if (decisionMade && decision && randomEvent) {
              const playerImpacts = randomEvent.eventImpacts[decision];
              const involvedCountryImpacts = randomEvent.involvedCountryImpacts[decision];

              setPlayerResources((prevResources) => getClampedImpact(prevResources, playerImpacts));
              setPlayerMoney(playerMoney - randomEvent.eventCosts[decision]);

              if (randomEvent.involvedCountry !== "None") {
                let setInvolvedRegionResources;
                switch (randomEvent.involvedCountry) {
                  case "NA":
                    setInvolvedRegionResources = setNAResources;
                    break;
                  case "SA":
                    setInvolvedRegionResources = setSAResources;
                    break;
                  case "Europe":
                    setInvolvedRegionResources = setEuropeResources;
                    break;
                  case "Asia":
                    setInvolvedRegionResources = setAsiaResources;
                    break;
                  case "Oceania":
                    setInvolvedRegionResources = setOceaniaResources;
                    break;
                  case "Africa":
                    setInvolvedRegionResources = setAfricaResources;
                    break;
                }
                if (setInvolvedRegionResources) {
                  setInvolvedRegionResources((prevResources) =>
                    getClampedImpact(prevResources, involvedCountryImpacts)
                  );
                }

                updateRelationshipValue(randomEvent.involvedCountry, relationshipImpact);
              }
            }

            updateEnemyResources();
            updateEventNewsList();

            setAllowedToTrade(true);

              // Check if the game is over
              if (daysComplete >= (gameLengthDays-1) || playerMoney < 0) {
                setGameState(GameState.END)
              }
          }}
        >
          Proceed...
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 text-gray-100 p-6 w-[400px] h-auto shadow-lg rounded-lg z-[3201]">
      <h2 className="text-2xl font-bold mb-2 text-gray-100">{randomEvent.eventName}</h2>
      <div className="w-full h-[2px] bg-gray-200 mb-2"></div>

      <p className="text-lg mb-4 text-gray-100">{randomEvent.eventDescription}</p>

      <p className="text-sm text-gray-100">
        Involved Region: {randomEvent.involvedCountry !== "None" ? randomEvent.involvedCountry : "None"}
      </p>
      <div className="w-full h-[2px] bg-gray-200 mb-2 mt-2"></div>

      <div className="mt-4">
        <p className="text-md font-semibold">Event Costs:</p>
        <div className="ml-2">
          <p>
            Accept: <strong>$</strong>
            {randomEvent.eventCosts.Yes.toLocaleString()}
          </p>
          <p>
            Decline: <strong>$</strong>
            {randomEvent.eventCosts.No.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-md font-semibold">Event Requirements:</p>
        {["Manufacturing", "Defence", "Services", "Energy", "Agriculture"].map((resource) => (
          <div
            key={resource}
            className={`flex items-center ${
              meetsRequirement(
                playerResources[resource as keyof ResourceLevels],
                randomEvent.eventRequirements[resource] || 0
              )
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {resourceIcons[resource as keyof typeof resourceIcons]}
            <span>
              {meetsRequirement(
                playerResources[resource as keyof ResourceLevels],
                randomEvent.eventRequirements[resource] || 0
              )
                ? "✓"
                : "✗"}
            </span>
            <p className="ml-2">
              {resource}: {randomEvent.eventRequirements[resource]}%
            </p>
          </div>
        ))}

        {randomEvent.involvedCountry !== "None" && (
          <div
            className={`flex items-center ${
              getRelationshipValue(randomEvent.involvedCountry) >=
              (randomEvent.requiredRelationship || 0)
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            <FaHandshake className="mr-2" />
            <span>
              {getRelationshipValue(randomEvent.involvedCountry) >=
              (randomEvent.requiredRelationship || 0)
                ? "✓"
                : "✗"}
            </span>
            <p className="ml-2">
              Relationship with {randomEvent.involvedCountry}:{" "}
              {randomEvent.requiredRelationship || 0}%
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 flex justify-between">
        <button
          className={`py-2 px-4 rounded-lg flex items-center ${
            allRequirementsMet()
              ? "bg-green-500 text-white"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          disabled={!allRequirementsMet()}
          onClick={() => handleDecision("Yes")}
        >
          <FaCheckCircle className="mr-2" /> Accept
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg flex items-center"
          onClick={() => handleDecision("No")}
        >
          <FaTimesCircle className="mr-2" /> Decline
        </button>
      </div>
    </div>
  );
};
