import React from 'react';
import Confetti from 'react-confetti';
import { FaCheckCircle, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';

interface ProgressBarProps {
  setShowEvent: React.Dispatch<React.SetStateAction<boolean>>;
  daysComplete: number;
  setDaysComplete: React.Dispatch<React.SetStateAction<number>>;
  gameLengthDays: number;
}

export const ProgressBar = ({
  setShowEvent,
  daysComplete,
  gameLengthDays,
}: ProgressBarProps) => {

  const triggerEvent = () => {
    setShowEvent(true);
  };

  const ticks = Array.from({ length: gameLengthDays + 1 }, (_, i) => i);

  return (
    <div className="flex flex-col items-center gap-y-4 w-[50%] mx-auto p-4 rounded-lg">
      {daysComplete >= gameLengthDays && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}

      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[50%] bg-gray-300 rounded-full h-6 overflow-hidden shadow-[0_0_10px_rgba(72,255,0,0.3),_0_0_15px_rgba(72,255,0,0.2)]">
        <div
          className="bg-green-500 h-full rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${(daysComplete / gameLengthDays) * 100}%` }}
        />

        <div className="absolute inset-0 flex items-center">
          {ticks.map((tick, index) => (
            <div
              key={index}
              className="absolute top-1/2 transform -translate-y-1/2"
              style={{ left: `${(index / gameLengthDays) * 100}%` }}
            >
              <div
                className={`w-1 h-3 rounded-md ${
                  index <= daysComplete ? 'bg-green-600' : 'bg-gray-400'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between w-full'>
        <div className="flex items-center gap-2 text-gray-300 font-sm font-bold text-lg">
          <FaCalendarAlt /> 
          <span>{`DAYS REMAINING: ${gameLengthDays - daysComplete}`}</span>
        </div>
        <button
        className="opacity-70 px-6 py-3 text-white bg-green-700 hover:bg-green-600 active:bg-green-800 rounded-lg shadow-md transition-colors duration-200 ease-in-out flex items-center gap-2"
        onClick={triggerEvent}
        disabled={daysComplete >= gameLengthDays}
      >
        {daysComplete >= gameLengthDays ? (
          <>
            <FaCheckCircle /> Completed
          </>
        ) : (
          <>
            <FaArrowRight /> Advance Day
          </>
        )}
      </button>
          <div className='flex flex-row gap-x-3'>
            <div className='flex items-center gap-x-1'><div className='w-4 h-4 bg-[#2cf529] opacity-50 rounded-full'></div><p>Surplus</p></div>
            <div className='flex items-center gap-x-1'><div className='w-4 h-4 bg-[#00ccff] opacity-50 rounded-full'></div><p>Average</p></div>
            <div className='flex items-center gap-x-1'><div className='w-4 h-4 bg-[#f90101] opacity-50 rounded-full'></div><p>Low</p></div>
          </div>
      </div>
    </div>
  );
};
