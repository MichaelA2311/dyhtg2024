import { useState } from "react";
import { ResourceLevels } from "@/types/resource";
import { GameState } from "@/types/gameState";
import { IntroMenu } from "./intro-menu";
import { Specialisations } from "@/types/specialisations";
import { MainGame } from "./main";
import { EventNews } from "@/types/event-news";
import { GameOver } from "./GameOver";

export const Game = () => {
  // Game State
  const [daysComplete, setDaysComplete] = useState<number>(0);
  const [gameLengthDays, setGameLengthDays] = useState<number>(14);
  const [gameState, setGameState] = useState<GameState>(GameState.INTRO);
  const [showEvent, setShowEvent] = useState<boolean>(false);

  // Event News List
  const [eventNewsList, setEventNewsList] = useState<EventNews[]>([

  ]);

  // Player Options
  const [countryName, setCountryName] = useState<string>("");
  const [specialisation, setSpecialisation] = useState<Specialisations>(Specialisations.AGRICULTURE);

  // Player money and resources
  const [playerMoney, setPlayerMoney] = useState<number>(500000);
  const [playerResources, setPlayerResources] = useState<ResourceLevels>({
    Manufacturing: 0,
    Energy: 0,
    Services: 0,
    Defence: 0,
    Agriculture: 0,
    GDP: 1000000, 
  });

  // Enemy Resources
  const [naResources, setNAResources] = useState<ResourceLevels>({
    GDP: 1000000,
    Agriculture: 40,     
    Manufacturing: 70,     
    Defence: 90,           
    Services: 100,          
    Energy: 60             
  });
  
  const [saResources, setSAResources] = useState<ResourceLevels>({
    GDP: 1000000,
    Agriculture: 90,      
    Manufacturing: 60,     
    Defence: 50,           
    Services: 60,          
    Energy: 80             
  });
  
  const [europeResources, setEuropeResources] = useState<ResourceLevels>({
    GDP: 1000000,
    Agriculture: 50,     
    Manufacturing: 80,     
    Defence: 70,           
    Services: 100,         
    Energy: 50            
  });
  
  const [asiaResources, setAsiaResources] = useState<ResourceLevels>({
    GDP: 1000000,
    Agriculture: 60,       
    Manufacturing: 90,    
    Defence: 60,           
    Services: 50,          
    Energy: 50             
  });
  
  const [oceaniaResources, setOceaniaResources] = useState<ResourceLevels>({
    GDP: 1000000,
    Agriculture: 70,      
    Manufacturing: 40,    
    Defence: 60,           
    Services: 80,         
    Energy: 60             
  });

  const [africaResources, setAfricaResources] = useState<ResourceLevels>({
    GDP: 1000000,
    Agriculture: 30,
    Manufacturing: 40,
    Defence: 30,
    Services: 80,
    Energy: 60,
  });

  const [naRelationship, setNARelationship] = useState<number>(75);
  const [saRelationship, setSARelationship] = useState<number>(75);
  const [europeRelationship, setEuropeRelationship] = useState<number>(75);
  const [asiaRelationship, setAsiaRelationship] = useState<number>(75);
  const [oceaniaRelationship, setOceaniaRelationship] = useState<number>(75);
  const [africaRelationship, setAfircaRelationship] = useState<number>(75);

  const relationships = {
    "North America": naRelationship,
    "South America": saRelationship,
    Europe: europeRelationship,
    Asia: asiaRelationship,
    Oceania: oceaniaRelationship,
    Africa: africaRelationship,
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#1e1e1e] overflow-y-hidden overflow-x-hidden select-none">
      {gameState === GameState.INTRO && (
        <IntroMenu
          countryName={countryName}
          setCountryName={setCountryName}
          specialisation={specialisation}
          setSpecialisation={setSpecialisation}
          setGameState={setGameState}
          playerResources={playerResources}
          setPlayerResources={setPlayerResources}
          gameLengthDays={gameLengthDays}
          setGameLengthDays={setGameLengthDays}
        />
      )}
      {gameState === GameState.GAME && (
        <MainGame
          countryName={countryName}
          specialisation={specialisation}

          setGameState={setGameState}
          showEvent={showEvent}
          setShowEvent={setShowEvent}
          daysComplete={daysComplete}
          setDaysComplete={setDaysComplete}
          gameLengthDays={gameLengthDays}
          eventNewsList={eventNewsList}
          setEventNewsList={setEventNewsList}

          playerResources={playerResources}
          setPlayerResources={setPlayerResources}
          playerMoney={playerMoney}
          setPlayerMoney={setPlayerMoney}

          naResources={naResources}
          saResources={saResources}
          europeResources={europeResources}
          asiaResources={asiaResources}
          oceaniaResources={oceaniaResources}
          africaResources={africaResources}

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

          setNARelationship={setNARelationship}
          setSARelationship={setSARelationship}
          setEuropeRelationship={setEuropeRelationship}
          setAsiaRelationship={setAsiaRelationship}
          setOceaniaRelationship={setOceaniaRelationship}
          setAfircaRelationship={setAfircaRelationship}
        />
      )}
      {gameState === GameState.END && (
        <GameOver
          finalGDP={playerResources.GDP}
          playerResources={playerResources}
          playerMoney={playerMoney}
          relationships={relationships}
          onRestartGame={()=>window.location.reload()}
        />
      )}
    </div>
  );
};
