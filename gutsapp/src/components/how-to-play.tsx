export const HowToPlay = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-800 text-gray-100 p-6 my-4">
          <h1 className="text-3xl font-bold mb-4 underline">How to Play</h1>
  
          <ul className="list-disc ml-6 space-y-4">
            <li>
              The game involves making decisions on behalf of a country.
            </li>
            <li>
              You are left in charge with a sum of Money, along with 5 types of resources:
              <ul className="list-inside ml-6 space-y-2">
                <li>Manufacturing</li>
                <li>Energy</li>
                <li>Services</li>
                <li>Defence</li>
                <li>Agriculture</li>
              </ul>
            </li>
            <li>
              You play the game by making simple Yes/No decisions.
              <ul className="list-inside ml-6 space-y-2">
                <li>Every time you “Advance Time,” an event appears. These describe some world event in which you have to decide how to respond, in a way you believe would work out best for your country.</li>
                <li>Some events may require certain resource levels or relationships with other regions in order to Accept.</li>
                <li>The outcome of your decision has an impact on your:
                  <ul className="list-inside ml-6 space-y-2">
                    <li>resources</li>
                    <li>money</li>
                    <li>relationships with regions</li>
                    <li>GDP (which acts as a score metric)</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              In-between events, you unlock the ability to trade.
              <ul className="list-inside ml-6 space-y-2">
                <li>Since events may cost money to Accept, your way of making that money is trading your resources with other regions.</li>
                <li>Regions set their prices of a certain resource based on their supply, so aim to sell to regions with a shortage!</li>
                <li>But be careful, if your relationship with a region becomes too low, they will refuse to trade.</li>
              </ul>
            </li>
            <li>
              The aim of the game is simply to survive the duration of your playtime (don’t go bankrupt!), and aim for the highest score (GDP) as possible.
            </li>
          </ul>
        </div>
      </div>
    );
  };
  