import { ResourceLevels } from "@/types/resource";
import { Specialisations } from "@/types/specialisations";
import { Leaderboard } from "./leaderboard";
import { ResourceMenu } from "./resources";
import { Map } from "./map";
import { ProgressBar } from "./progressbar";
import { EventPopup } from "./eventpopup";
import { EventNews } from "@/types/event-news";
import { NewsTicker } from "./eventnews";
import { TradeOptions } from "./tradeoptions";
import { useState } from "react";
import { GameState } from "@/types/gameState";

interface MainGameProps {
  countryName: string;
  specialisation: Specialisations;

  playerResources: ResourceLevels;
  setPlayerResources: React.Dispatch<React.SetStateAction<ResourceLevels>>;
  playerMoney: number;
  setPlayerMoney: React.Dispatch<React.SetStateAction<number>>;
  
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  showEvent: boolean;
  setShowEvent: React.Dispatch<React.SetStateAction<boolean>>;
  daysComplete : number
  setDaysComplete: React.Dispatch<React.SetStateAction<number>>;
  gameLengthDays: number;
  eventNewsList: EventNews[];
  setEventNewsList: React.Dispatch<React.SetStateAction<EventNews[]>>;

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

  setNARelationship: React.Dispatch<React.SetStateAction<number>>;
  setSARelationship: React.Dispatch<React.SetStateAction<number>>;
  setEuropeRelationship: React.Dispatch<React.SetStateAction<number>>;
  setAsiaRelationship: React.Dispatch<React.SetStateAction<number>>;
  setOceaniaRelationship: React.Dispatch<React.SetStateAction<number>>;
  setAfircaRelationship: React.Dispatch<React.SetStateAction<number>>;
}

export const MainGame = ({
  countryName,

  playerResources,
  setPlayerResources,
  playerMoney,
  setPlayerMoney,

  showEvent,
  setShowEvent,
  daysComplete,
  setDaysComplete,
  gameLengthDays,
  eventNewsList,
  setEventNewsList,
  setGameState,

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

  setNARelationship,
  setSARelationship,
  setEuropeRelationship,
  setAsiaRelationship,
  setOceaniaRelationship,
  setAfircaRelationship,
}: MainGameProps) => {

  const [allowedToTrade, setAllowedToTrade] = useState(true);

  return (
    <div className="relative h-screen w-full flex bg-[#1e1e1e]">
      <div className="flex flex-col h-full">
        <div className="pl-4 py-4 h-full flex flex-col gap-y-2">
          <Leaderboard
            countryName={countryName}
            playerResources={playerResources}
            naResources={naResources}
            saResources={saResources}
            europeResources={europeResources}
            asiaResources={asiaResources}
            oceaniaResources={oceaniaResources}
            africaResources={africaResources}
            
            naRelationship={naRelationship}
            saRelationship={saRelationship}
            europeRelationship={europeRelationship}
            asiaRelationship={asiaRelationship}
            oceaniaRelationship={oceaniaRelationship}
            africaRelationship={africaRelationship}
  
            setNARelationship={setNARelationship}
            setSARelationship={setSARelationship}
            setEuropeRelationship={setEuropeRelationship}
            setAsiaRelationship={setAsiaRelationship}
            setOceaniaRelationship={setOceaniaRelationship}
            setAfricaRelationship={setAfircaRelationship}
          />
          <TradeOptions 
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

            naRelationship={naRelationship}
            saRelationship={saRelationship}
            europeRelationship={europeRelationship}
            asiaRelationship={asiaRelationship}
            oceaniaRelationship={oceaniaRelationship}
            africaRelationship={africaRelationship}

            allowedToTrade={allowedToTrade}
            setAllowedToTrade={setAllowedToTrade}
          />
        </div>
      </div>

      <Map
        playerResources={playerResources}
        naResources={naResources}
        saResources={saResources}
        europeResources={europeResources}
        asiaResources={asiaResources}
        oceaniaResources={oceaniaResources}
        africaResources={africaResources}
        naRelationship={naRelationship}
        saRelationship={saRelationship}
        europeRelationship={europeRelationship}
        asiaRelationship={asiaRelationship}
        oceaniaRelationship={oceaniaRelationship}
        africaRelationship={africaRelationship}
      />

      <div className="flex flex-col h-full">
        <div className="pr-4 py-4 h-full flex flex-col gap-y-2">
          <ResourceMenu
            countryName={countryName}
            playerMoney={playerMoney}
            playerResources={playerResources}
          />
          <NewsTicker newsEvents={eventNewsList} />
        </div>
      </div>

      <div className="absolute bottom-0 flex justify-between items-start z-10 w-full">
        <div className="p-4 w-full">
          <ProgressBar
            daysComplete={daysComplete}
            setDaysComplete={setDaysComplete}
            gameLengthDays={gameLengthDays}
            setShowEvent={setShowEvent}
          />
        </div>
      </div>

      {showEvent && (
        <div className="text-gray-800 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="p-4 w-full max-w-lg">
            <EventPopup
              gameLengthDays={gameLengthDays}
              setGameState={setGameState}
              setAllowedToTrade={setAllowedToTrade}
              eventNewsList={eventNewsList}
              playerMoney={playerMoney}
              daysComplete={daysComplete}
              playerResources={playerResources}

              setEventNewsList={setEventNewsList}
              setDaysComplete={setDaysComplete}
              setShowEvent={setShowEvent}

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

              setPlayerResources={setPlayerResources}
              setPlayerMoney={setPlayerMoney}

              naRelationship={naRelationship}
              saRelationship={saRelationship}
              europeRelationship={europeRelationship}
              asiaRelationship={asiaRelationship}
              oceaniaRelationship={oceaniaRelationship}
              africaRelationship={africaRelationship}
    
              setNARelationship={setNARelationship}
              setSARelationship={setSARelationship}
              setEuropeRelationship={setEuropeRelationship}
              setAsiaRelationship={setAsiaRelationship}
              setOceaniaRelationship={setOceaniaRelationship}
              setAfricaRelationship={setAfircaRelationship}
            />
          </div>
        </div>
      )}
    </div>
  );
};
