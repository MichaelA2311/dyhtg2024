import React from "react";
import { EventNews } from "@/types/event-news";
import { FaGlobe, FaArrowRight, FaNewspaper } from "react-icons/fa"; // Importing icons

interface NewsTickerProps {
  newsEvents: EventNews[];
}

export const NewsTicker: React.FC<NewsTickerProps> = ({ newsEvents }) => {
  const recentNews = newsEvents
    .sort((a, b) => (a.order as number) - (b.order as number)) 
    .slice(0, 4); 

  return (
    <div className="bg-gray-800 w-[350px] rounded-lg shadow-lg p-6 overflow-y-scroll custom-scrollbar relative h-[55%]">
      <div className="flex items-center gap-2 mb-4">
        <FaGlobe className="text-blue-400" /> 
        <p className="text-gray-100 italic underline">Latest Global News</p> 
      </div>

      {recentNews.length > 0 ? (
        <div className="space-y-4">
          {recentNews.map((news, index) => (
            <div key={index}>
              <div className="flex items-center gap-2">
                <FaArrowRight className="text-green-400" /> 
                <div className="relative overflow-hidden w-full">
                  <div className="whitespace-nowrap overflow-hidden animate-marquee">
                    <h3 className="text-lg font-bold text-gray-100">{news.title}</h3>
                  </div>
                </div>
              </div>

              <div className="w-full bg-gray-700 h-12 overflow-hidden relative flex items-center rounded-lg">
                <FaNewspaper className="text-gray-300 ml-2" /> 
                <div className="ml-3 overflow-hidden w-full">
                  <div className="whitespace-nowrap animate-marquee">
                    <p className="text-gray-300">{news.description}</p> 
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 italic text-center">
          <p>No news available</p>
        </div>
      )}
    </div>
  );
};
