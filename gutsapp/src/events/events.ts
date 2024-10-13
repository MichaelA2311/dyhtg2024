export const eventList = [
  {
    eventName: "Global Financial Crisis",
    involvedCountry: "None",
    eventDescription: "A sudden global financial crisis has hit markets worldwide. Will you invest heavily to stabilize your economy, or ride out the storm and risk long-term damage?",
    eventCosts: { Yes: 225000, No: 0 },
    eventRequirements: { Manufacturing: 10, Defence: 0, Services: 40, Energy: 20, Agriculture: 10 },
    eventImpacts: {
      Yes: { GDP: -50000, Manufacturing: -10, Defence: 0, Services: -15, Energy: -5, Agriculture: -5, Stability: 30 },
      No: { GDP: -200000, Manufacturing: -25, Defence: 0, Services: -30, Energy: -10, Agriculture: -15, Stability: -20 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 0, Manufacturing: 0, Defence: 0, Services: 0, Energy: 0, Agriculture: 0, Stability: 0 },
      No: { GDP: 0, Manufacturing: 0, Defence: 0, Services: 0, Energy: 0, Agriculture: 0, Stability: 0 }
    },
    requiredRelationship: 0,  
    relationshipAgreeImpact: 0,
    relationshipDeclineImpact: 0,
    type: "B",
    newsTitle: "Global Financial Markets in Freefall",
    newsDescription: "Financial markets around the world have entered a period of unprecedented instability, leaving governments scrambling to restore confidence."
  },
  {
    eventName: "Technological Breakthrough in Europe",
    involvedCountry: "Europe",
    eventDescription: "Europe has made a major technological breakthrough in artificial intelligence. Will you invest in this emerging sector to gain a competitive edge?",
    eventCosts: { Yes: 250000, No: 0 },
    eventRequirements: { Manufacturing: 20, Defence: 0, Services: 50, Energy: 30, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 400000, Manufacturing: 0, Defence: 0, Services: 60, Energy: 5, Agriculture: 0, Innovation: 50 },
      No: { GDP: -50000, Manufacturing: 0, Defence: 0, Services: -10, Energy: 0, Agriculture: 0, Innovation: -20 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 300000, Manufacturing: 0, Defence: 0, Services: 40, Energy: 5, Agriculture: 0, Innovation: 40 },
      No: { GDP: -20000, Manufacturing: 0, Defence: 0, Services: -5, Energy: 0, Agriculture: 0, Innovation: -10 }
    },
    requiredRelationship: 50,
    relationshipAgreeImpact: 20,
    relationshipDeclineImpact: -10,
    type: "VG",
    newsTitle: "Europe Pioneers Major AI Advancements",
    newsDescription: "Europe unveils revolutionary advancements in artificial intelligence, positioning itself as a leader in global technological innovation."
  },
  {
    eventName: "Energy Partnership with Asia",
    involvedCountry: "Asia",
    eventDescription: "Asia is offering a strategic energy partnership, allowing access to renewable energy sources. Will you accept, despite potential disruptions in your existing energy market?",
    eventCosts: { Yes: 200000, No: 0 },
    eventRequirements: { Manufacturing: 0, Defence: 0, Services: 0, Energy: 60, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 150000, Manufacturing: 0, Defence: 0, Services: 10, Energy: 40, Agriculture: 0 },
      No: { GDP: -50000, Manufacturing: 0, Defence: 0, Services: -5, Energy: -15, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 100000, Manufacturing: 0, Defence: 0, Services: 5, Energy: 30, Agriculture: 0 },
      No: { GDP: -20000, Manufacturing: 0, Defence: 0, Services: -2, Energy: -10, Agriculture: 0 }
    },
    requiredRelationship: 40,
    relationshipAgreeImpact: 15,
    relationshipDeclineImpact: -5,
    type: "G",
    newsTitle: "Asia Secures Landmark Renewable Energy Agreement",
    newsDescription: "A new energy deal between Asia and global partners promises to expand renewable energy usage, with potential shifts in energy markets."
  },
  {
    eventName: "Agricultural Export Deal with South America",
    involvedCountry: "SA",
    eventDescription: "South America has offered a new agricultural export deal, which could boost your agricultural sector but may lead to over-reliance on foreign goods.",
    eventCosts: { Yes: 180000, No: 0 },
    eventRequirements: { Manufacturing: 10, Defence: 0, Services: 0, Energy: 0, Agriculture: 50 },
    eventImpacts: {
      Yes: { GDP: 200000, Manufacturing: 0, Defence: 0, Services: 0, Energy: 0, Agriculture: 60 },
      No: { GDP: -60000, Manufacturing: 0, Defence: 0, Services: 0, Energy: 0, Agriculture: -20 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 150000, Manufacturing: 0, Defence: 0, Services: 0, Energy: 0, Agriculture: 50 },
      No: { GDP: -30000, Manufacturing: 0, Defence: 0, Services: 0, Energy: 0, Agriculture: -10 }
    },
    requiredRelationship: 30,
    relationshipAgreeImpact: 10,
    relationshipDeclineImpact: -5,
    type: "N",
    newsTitle: "South America Strengthens Agricultural Trade",
    newsDescription: "A new agricultural export deal between South America and global partners is expected to reshape the global food supply chain."
  },
  {
    eventName: "Technological Exchange with Oceania",
    involvedCountry: "Oceania",
    eventDescription: "Oceania offers to share cutting-edge technological advancements in exchange for resources.",
    eventCosts: { Yes: 220000, No: 0 },
    eventRequirements: { Manufacturing: 30, Defence: 0, Services: 40, Energy: 20, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 250000, Manufacturing: -20, Defence: 0, Services: 60, Energy: 30, Agriculture: 0 },
      No: { GDP: -40000, Manufacturing: 0, Defence: 0, Services: -10, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 150000, Manufacturing: -10, Defence: 0, Services: 50, Energy: 20, Agriculture: 0 },
      No: { GDP: -20000, Manufacturing: 0, Defence: 0, Services: -5, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 40,
    relationshipAgreeImpact: 15,
    relationshipDeclineImpact: -10,
    type: "G",
    newsTitle: "Oceania to Collaborate on Technological Innovation",
    newsDescription: "Oceania proposes a groundbreaking partnership to share technological innovations, with a focus on mutual economic growth."
  },
  {
    eventName: "Defense Pact with North America",
    involvedCountry: "NA",
    eventDescription: "North America has proposed a defense pact, aiming to strengthen mutual military cooperation. Will you agree to this partnership, or maintain your independence?",
    eventCosts: { Yes: 150000, No: 0 },
    eventRequirements: { Manufacturing: 20, Defence: 60, Services: 0, Energy: 0, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 200000, Manufacturing: 10, Defence: 80, Services: 0, Energy: 5, Agriculture: 10 },
      No: { GDP: -50000, Manufacturing: -10, Defence: -20, Services: 0, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 150000, Manufacturing: 5, Defence: 70, Services: 0, Energy: 0, Agriculture: 0 },
      No: { GDP: -30000, Manufacturing: 0, Defence: -10, Services: 0, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 50,
    relationshipAgreeImpact: 20,
    relationshipDeclineImpact: -20,
    type: "G",
    newsTitle: "North America Seeks Military Alliance",
    newsDescription: "North America has extended an offer for a new defense pact aimed at increasing military cooperation and mutual security."
  },
  {
    eventName: "Pandemic Outbreak in Asia",
    involvedCountry: "Asia",
    eventDescription: "A serious pandemic has broken out in Asia, threatening global health and economic stability. Will you provide aid to contain the outbreak, or prioritize domestic needs?",
    eventCosts: { Yes: 100000, No: 0 },
    eventRequirements: { Manufacturing: 10, Defence: 0, Services: 35, Energy: 0, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: -100000, Manufacturing: 0, Defence: 0, Services: -10, Energy: 0, Agriculture: 0 },
      No: { GDP: -200000, Manufacturing: -10, Defence: 0, Services: -20, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: -50000, Manufacturing: 0, Defence: 0, Services: -10, Energy: 0, Agriculture: 0 },
      No: { GDP: -150000, Manufacturing: -10, Defence: 0, Services: -25, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 10,
    relationshipAgreeImpact: 20,
    relationshipDeclineImpact: -25,
    type: "B",
    newsTitle: "Pandemic Strikes Asia, Global Aid Requested",
    newsDescription: "A pandemic outbreak in Asia prompts global calls for aid to contain the virus and mitigate its worldwide economic and health impact."
  },
  {
    eventName: "Natural Disaster in Oceania",
    involvedCountry: "Oceania",
    eventDescription: "A major natural disaster has struck Oceania, devastating their infrastructure. Will you provide financial aid to assist in their recovery, or focus on your own economy?",
    eventCosts: { Yes: 250000, No: 0 },
    eventRequirements: { Manufacturing: 0, Defence: 0, Services: 30, Energy: 10, Agriculture: 10 },
    eventImpacts: {
      Yes: { GDP: -150000, Manufacturing: 0, Defence: 0, Services: -20, Energy: -10, Agriculture: -10 },
      No: { GDP: 0, Manufacturing: 0, Defence: 0, Services: 0, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 100000, Manufacturing: 10, Defence: 0, Services: 15, Energy: 5, Agriculture: 0 },
      No: { GDP: -50000, Manufacturing: -5, Defence: 0, Services: -10, Energy: -5, Agriculture: 0 }
    },
    requiredRelationship: 10,
    relationshipAgreeImpact: 40,
    relationshipDeclineImpact: -10,
    type: "N",
    newsTitle: "Natural Disaster Devastates Oceania, Global Aid Efforts Begin",
    newsDescription: "A catastrophic natural disaster has struck Oceania, leading to widespread damage. The world watches as aid efforts are mobilized."
  },
  {
    eventName: "Trade Dispute with North America",
    involvedCountry: "NA",
    eventDescription: "A trade dispute has escalated with North America, leading to tensions over tariffs and imports. Will you negotiate to ease tensions, or hold firm on your current policies?",
    eventCosts: { Yes: 0, No: 0 },
    eventRequirements: { Manufacturing: 40, Defence: 0, Services: 30, Energy: 10, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 100000, Manufacturing: 20, Defence: 0, Services: 15, Energy: 5, Agriculture: 0 },
      No: { GDP: -100000, Manufacturing: -15, Defence: 0, Services: -10, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 150000, Manufacturing: 10, Defence: 0, Services: 20, Energy: 10, Agriculture: 0 },
      No: { GDP: -80000, Manufacturing: -10, Defence: 0, Services: -15, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 40,
    relationshipAgreeImpact: 25,
    relationshipDeclineImpact: -20,
    type: "G",
    newsTitle: "Trade Dispute with North America Eases After Negotiations",
    newsDescription: "Tensions ease after successful negotiations in a trade dispute with North America, potentially leading to economic growth."
  },
  {
    eventName: "Scientific Collaboration with Europe",
    involvedCountry: "Europe",
    eventDescription: "Europe is proposing a joint scientific research initiative to accelerate innovation. Will you fund this collaboration, or focus on domestic projects?",
    eventCosts: { Yes: 180000, No: 0 },
    eventRequirements: { Manufacturing: 20, Defence: 0, Services: 50, Energy: 20, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 250000, Manufacturing: 0, Defence: 0, Services: 70, Energy: 10, Agriculture: 0 },
      No: { GDP: -50000, Manufacturing: 0, Defence: 0, Services: -20, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 200000, Manufacturing: 0, Defence: 0, Services: 60, Energy: 5, Agriculture: 0 },
      No: { GDP: -40000, Manufacturing: 0, Defence: 0, Services: -10, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 50,
    relationshipAgreeImpact: 25,
    relationshipDeclineImpact: -10,
    type: "VG",
    newsTitle: "Europe Announces Major Scientific Research Partnership",
    newsDescription: "A groundbreaking international scientific collaboration between Europe and key global players is set to begin, promising major advancements."
  },
  {
    eventName: "Environmental Agreement with South America",
    involvedCountry: "SA",
    eventDescription: "South America is proposing a joint environmental initiative to combat deforestation and promote sustainable energy. Will you join the effort, or continue your current policies?",
    eventCosts: { Yes: 250000, No: 0 },
    eventRequirements: { Manufacturing: 0, Defence: 0, Services: 20, Energy: 30, Agriculture: 40 },
    eventImpacts: {
      Yes: { GDP: 150000, Manufacturing: -10, Defence: 0, Services: 30, Energy: 20, Agriculture: 50 },
      No: { GDP: -50000, Manufacturing: 0, Defence: 0, Services: -10, Energy: -15, Agriculture: -10 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 100000, Manufacturing: 0, Defence: 0, Services: 20, Energy: 15, Agriculture: 40 },
      No: { GDP: -30000, Manufacturing: 0, Defence: 0, Services: -5, Energy: -10, Agriculture: -5 }
    },
    requiredRelationship: 40,
    relationshipAgreeImpact: 15,
    relationshipDeclineImpact: -10,
    type: "G",
    newsTitle: "South America Pushes for Global Environmental Agreement",
    newsDescription: "South America has initiated a major environmental agreement, with global leaders considering their participation in the efforts."
  },
  {
    eventName: "High-Tech Military Collaboration with North America",
    involvedCountry: "NA",
    eventDescription: "North America is offering an advanced military collaboration to jointly develop cutting-edge defense technologies. Will you accept their offer and bolster your defense capabilities?",
    eventCosts: { Yes: 500000, No: 0 },
    eventRequirements: { Manufacturing: 30, Defence: 70, Services: 0, Energy: 20, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 300000, Manufacturing: 20, Defence: 100, Services: 0, Energy: 10, Agriculture: 0 },
      No: { GDP: -75000, Manufacturing: -10, Defence: -30, Services: 0, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 200000, Manufacturing: 15, Defence: 90, Services: 0, Energy: 5, Agriculture: 0 },
      No: { GDP: -50000, Manufacturing: -5, Defence: -20, Services: 0, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 70,
    relationshipAgreeImpact: 30,
    relationshipDeclineImpact: -20,
    type: "VG",
    newsTitle: "Advanced Military Partnership Agreed Between North America and Allies",
    newsDescription: "A landmark military collaboration will see North America and its allies develop state-of-the-art defense technologies together."
  },
  {
    eventName: "Exclusive Trade Agreement with Europe",
    involvedCountry: "Europe",
    eventDescription: "Europe is proposing an exclusive trade agreement, offering preferential access to its markets in exchange for favorable terms. Will you sign this lucrative deal?",
    eventCosts: { Yes: 250000, No: 0 },
    eventRequirements: { Manufacturing: 40, Defence: 0, Services: 50, Energy: 30, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 500000, Manufacturing: 50, Defence: 0, Services: 60, Energy: 20, Agriculture: 0 },
      No: { GDP: -100000, Manufacturing: -20, Defence: 0, Services: -30, Energy: -5, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 350000, Manufacturing: 30, Defence: 0, Services: 50, Energy: 10, Agriculture: 0 },
      No: { GDP: -80000, Manufacturing: -15, Defence: 0, Services: -20, Energy: -5, Agriculture: 0 }
    },
    requiredRelationship: 65,
    relationshipAgreeImpact: 25,
    relationshipDeclineImpact: -15,
    type: "VG",
    newsTitle: "Europe Signs Exclusive Trade Deal with Key Global Partner",
    newsDescription: "An exclusive trade agreement has been finalized, granting preferential market access and fostering closer economic ties with Europe."
  },
  {
    eventName: "Humanitarian Aid Collaboration with Europe",
    involvedCountry: "Europe",
    eventDescription: "Europe is leading a global humanitarian aid effort and invites your nation to collaborate in providing support to disaster-stricken regions. Will you join the initiative?",
    eventCosts: { Yes: 0, No: 0 },
    eventRequirements: { Manufacturing: 0, Defence: 0, Services: 40, Energy: 0, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 100000, Manufacturing: 0, Defence: 0, Services: 20, Energy: 0, Agriculture: 0 },
      No: { GDP: -50000, Manufacturing: 0, Defence: 0, Services: -10, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 150000, Manufacturing: 0, Defence: 0, Services: 25, Energy: 0, Agriculture: 0 },
      No: { GDP: -30000, Manufacturing: 0, Defence: 0, Services: -5, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 60,
    relationshipAgreeImpact: 20,
    relationshipDeclineImpact: -10,
    type: "G",
    newsTitle: "Global Humanitarian Aid Initiative Gains Support from Key Nations",
    newsDescription: "A new global humanitarian initiative led by Europe sees increased collaboration in disaster relief efforts, strengthening international ties."
  },
  {
    eventName: "Free Technology Sharing Agreement with North America",
    involvedCountry: "NA",
    eventDescription: "North America offers a free technology sharing agreement, providing your nation access to cutting-edge technologies. Will you accept the offer and enhance your technological capabilities?",
    eventCosts: { Yes: 0, No: 0 },
    eventRequirements: { Manufacturing: 20, Defence: 0, Services: 30, Energy: 10, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 200000, Manufacturing: 30, Defence: 0, Services: 50, Energy: 20, Agriculture: 0 },
      No: { GDP: -75000, Manufacturing: -10, Defence: 0, Services: -20, Energy: -5, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 250000, Manufacturing: 25, Defence: 0, Services: 40, Energy: 15, Agriculture: 0 },
      No: { GDP: -50000, Manufacturing: -5, Defence: 0, Services: -10, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 70,
    relationshipAgreeImpact: 25,
    relationshipDeclineImpact: -15,
    type: "VG",
    newsTitle: "North America Offers Free Technology Sharing Agreement",
    newsDescription: "In a major diplomatic move, North America extends a free technology sharing agreement to strengthen international technological growth."
  },
  {
    eventName: "Military Base Agreement with Oceania",
    involvedCountry: "Oceania",
    eventDescription: "Oceania has proposed allowing you to build a military base on their land, strengthening your defense presence in the region. However, this may escalate regional tensions. Will you proceed?",
    eventCosts: { Yes: 300000, No: 0 },
    eventRequirements: { Manufacturing: 0, Defence: 50, Services: 0, Energy: 20, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 150000, Manufacturing: 0, Defence: 80, Services: 0, Energy: 10, Agriculture: 0 },
      No: { GDP: 50000, Manufacturing: 0, Defence: 0, Services: 10, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 100000, Manufacturing: 0, Defence: 70, Services: 0, Energy: 5, Agriculture: 0 },
      No: { GDP: 50000, Manufacturing: 0, Defence: 0, Services: 5, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 60,
    relationshipAgreeImpact: 20,
    relationshipDeclineImpact: -5,
    type: "N",
    newsTitle: "Proposal for New Military Base in Oceania Sparks Debate",
    newsDescription: "The proposal to build a military base in Oceania has raised concerns about rising regional tensions, but some see potential economic benefits elsewhere."
  },
  {
    eventName: "Energy Infrastructure Development with Asia",
    involvedCountry: "Asia",
    eventDescription: "Asia proposes a joint energy infrastructure development project. Accepting would modernize your energy sector, but declining could free up resources for other industries.",
    eventCosts: { Yes: 400000, No: 0 },
    eventRequirements: { Manufacturing: 0, Defence: 0, Services: 0, Energy: 50, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 300000, Manufacturing: 0, Defence: 0, Services: 0, Energy: 60, Agriculture: 0 },
      No: { GDP: 200000, Manufacturing: 20, Defence: 0, Services: 15, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 200000, Manufacturing: 0, Defence: 0, Services: 0, Energy: 50, Agriculture: 0 },
      No: { GDP: 100000, Manufacturing: 10, Defence: 0, Services: 10, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 50,
    relationshipAgreeImpact: 15,
    relationshipDeclineImpact: -5,
    type: "G",
    newsTitle: "Energy Development Deal with Asia Faces Mixed Reactions",
    newsDescription: "While Asia's proposal for joint energy development offers modernization, declining the deal may strengthen domestic industries instead."
  },
  {
    eventName: "Cultural Renaissance Movement in Europe",
    involvedCountry: "Europe",
    eventDescription: "Europe invites your nation to join a cultural renaissance movement, promoting arts and heritage on a global stage. While this could elevate global standing, it may distract from core economic concerns.",
    eventCosts: { Yes: 0, No: 0 },
    eventRequirements: { Manufacturing: 0, Defence: 0, Services: 30, Energy: 0, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 50000, Manufacturing: 0, Defence: 0, Services: 50, Energy: 0, Agriculture: 0 },
      No: { GDP: 200000, Manufacturing: 10, Defence: 0, Services: 20, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 70000, Manufacturing: 0, Defence: 0, Services: 40, Energy: 0, Agriculture: 0 },
      No: { GDP: 150000, Manufacturing: 15, Defence: 0, Services: 25, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 60,
    relationshipAgreeImpact: 20,
    relationshipDeclineImpact: -10,
    type: "N",
    newsTitle: "Europe Launches Global Cultural Renaissance Initiative",
    newsDescription: "Europe's new cultural movement is gaining momentum, inviting nations to showcase their heritage and arts."
  },
  {
    eventName: "Human Rights Coalition Proposal with North America",
    involvedCountry: "NA",
    eventDescription: "North America invites you to join a Human Rights Coalition to address global issues. Participation could strengthen diplomatic ties, but non-participation might allow you to focus on domestic stability.",
    eventCosts: { Yes: 0, No: 0 },
    eventRequirements: { Manufacturing: 0, Defence: 0, Services: 50, Energy: 0, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 50000, Manufacturing: 0, Defence: 0, Services: 40, Energy: 0, Agriculture: 0 },
      No: { GDP: 100000, Manufacturing: 20, Defence: 0, Services: 30, Energy: 10, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 80000, Manufacturing: 0, Defence: 0, Services: 50, Energy: 0, Agriculture: 0 },
      No: { GDP: 50000, Manufacturing: 15, Defence: 0, Services: 25, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 65,
    relationshipAgreeImpact: 30,
    relationshipDeclineImpact: -15,
    type: "G",
    newsTitle: "North America Pushes for Global Human Rights Coalition",
    newsDescription: "In a bid to tackle global human rights issues, North America spearheads the creation of an international coalition."
  },
  {
    eventName: "Space Exploration Alliance with South America",
    involvedCountry: "SA",
    eventDescription: "South America has invited your nation to collaborate on a space exploration mission. While this could boost scientific progress, declining could free up resources for immediate domestic needs.",
    eventCosts: { Yes: 300000, No: 0 },
    eventRequirements: { Manufacturing: 20, Defence: 0, Services: 30, Energy: 20, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 250000, Manufacturing: 15, Defence: 0, Services: 60, Energy: 10, Agriculture: 0 },
      No: { GDP: 150000, Manufacturing: -10, Defence: 0, Services: 20, Energy: -10, Agriculture: 5 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 200000, Manufacturing: 10, Defence: 0, Services: 50, Energy: 5, Agriculture: 0 },
      No: { GDP: 100000, Manufacturing: 15, Defence: 0, Services: 30, Energy: 5, Agriculture: 0 }
    },
    requiredRelationship: 70,
    relationshipAgreeImpact: 25,
    relationshipDeclineImpact: -10,
    type: "VG",
    newsTitle: "South America Proposes Joint Space Exploration Mission",
    newsDescription: "South America invites global partners to join a space exploration initiative aimed at pushing the boundaries of scientific discovery."
  },
  {
    eventName: "Global Sports Championship Bid with Asia",
    involvedCountry: "Asia",
    eventDescription: "Asia seeks your nation’s support in a bid to host an upcoming global sports championship. While participating may boost cultural exchange, declining could allow you to invest in infrastructure.",
    eventCosts: { Yes: 200000, No: 0 },
    eventRequirements: { Manufacturing: 10, Defence: 0, Services: 40, Energy: 0, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 200000, Manufacturing: 5, Defence: 0, Services: 50, Energy: 0, Agriculture: 0 },
      No: { GDP: 250000, Manufacturing: 30, Defence: 0, Services: 20, Energy: 10, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 150000, Manufacturing: 5, Defence: 0, Services: 60, Energy: 0, Agriculture: 0 },
      No: { GDP: 100000, Manufacturing: 25, Defence: 0, Services: 30, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 50,
    relationshipAgreeImpact: 20,
    relationshipDeclineImpact: -10,
    type: "G",
    newsTitle: "Asia Seeks Support for Global Sports Championship Bid",
    newsDescription: "Asia has initiated a bid to host the next global sports championship, looking for international partners to support the venture."
  },
  {
    eventName: "Historic Artifact Repatriation Agreement with Europe",
    involvedCountry: "Europe",
    eventDescription: "Europe proposes a historic artifact repatriation agreement to return cultural artifacts to their nations of origin. While this would improve global cultural relations, declining could preserve museum revenues.",
    eventCosts: { Yes: 0, No: 0 },
    eventRequirements: { Manufacturing: 0, Defence: 0, Services: 20, Energy: 0, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 50000, Manufacturing: 0, Defence: 0, Services: -10, Energy: 0, Agriculture: 10 },
      No: { GDP: 150000, Manufacturing: 10, Defence: 0, Services: 10, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 80000, Manufacturing: 0, Defence: 0, Services: 35, Energy: 0, Agriculture: 0 },
      No: { GDP: 100000, Manufacturing: 15, Defence: 0, Services: 25, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 65,
    relationshipAgreeImpact: 25,
    relationshipDeclineImpact: -15,
    type: "G",
    newsTitle: "Europe Proposes Global Repatriation of Historic Artifacts",
    newsDescription: "Europe has launched an initiative to return cultural artifacts to their countries of origin, seeking international support."
  },
  {
    eventName: "Global Health Initiative with North America",
    involvedCountry: "NA",
    eventDescription: "North America proposes a Global Health Initiative to combat rising health crises. While joining the initiative would require significant funding, refusing could lead to higher healthcare costs domestically.",
    eventCosts: { Yes: 300000, No: 150000 },
    eventRequirements: { Manufacturing: 0, Defence: 0, Services: 40, Energy: 0, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 200000, Manufacturing: 0, Defence: 0, Services: 50, Energy: 0, Agriculture: 0 },
      No: { GDP: -50000, Manufacturing: 0, Defence: 0, Services: -20, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 150000, Manufacturing: 0, Defence: 0, Services: 40, Energy: 0, Agriculture: 0 },
      No: { GDP: -75000, Manufacturing: 0, Defence: 0, Services: -10, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 60,
    relationshipAgreeImpact: 25,
    relationshipDeclineImpact: -10,
    type: "G",
    newsTitle: "North America Pushes for Global Health Initiative",
    newsDescription: "North America calls for a collaborative global health initiative to prevent future health crises, but failure to join may increase domestic healthcare costs."
  },
  {
    eventName: "International Education Program with Asia",
    involvedCountry: "Asia",
    eventDescription: "Asia invites your nation to join an International Education Program, promoting global student exchanges. While beneficial, declining could lead to increased domestic education funding to maintain competitiveness.",
    eventCosts: { Yes: 250000, No: 100000 },
    eventRequirements: { Manufacturing: 0, Defence: 0, Services: 50, Energy: 0, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 150000, Manufacturing: 0, Defence: 0, Services: 60, Energy: 0, Agriculture: 0 },
      No: { GDP: -75000, Manufacturing: 0, Defence: 0, Services: -30, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 100000, Manufacturing: 0, Defence: 0, Services: 40, Energy: 0, Agriculture: 0 },
      No: { GDP: -50000, Manufacturing: 0, Defence: 0, Services: -20, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 55,
    relationshipAgreeImpact: 20,
    relationshipDeclineImpact: -10,
    type: "N",
    newsTitle: "Asia Proposes International Education Exchange Program",
    newsDescription: "Asia launches an international student exchange initiative aimed at fostering global collaboration, though refusing could strain domestic education resources."
  },
  {
    eventName: "Global Wildlife Preservation Pact with South America",
    involvedCountry: "SA",
    eventDescription: "South America proposes a global pact to preserve endangered wildlife. Refusing to join could lead to increased environmental fines and damage costs as your nation struggles to manage its own wildlife crises.",
    eventCosts: { Yes: 200000, No: 100000 },
    eventRequirements: { Manufacturing: 0, Defence: 0, Services: 0, Energy: 10, Agriculture: 30 },
    eventImpacts: {
      Yes: { GDP: 100000, Manufacturing: 0, Defence: 0, Services: 30, Energy: 20, Agriculture: 40 },
      No: { GDP: -50000, Manufacturing: 0, Defence: 0, Services: -10, Energy: -10, Agriculture: -20 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 80000, Manufacturing: 0, Defence: 0, Services: 20, Energy: 15, Agriculture: 30 },
      No: { GDP: -40000, Manufacturing: 0, Defence: 0, Services: -5, Energy: -5, Agriculture: -10 }
    },
    requiredRelationship: 50,
    relationshipAgreeImpact: 15,
    relationshipDeclineImpact: -10,
    type: "G",
    newsTitle: "South America Leads Global Wildlife Preservation Efforts",
    newsDescription: "South America proposes a pact to save endangered species, but declining could lead to significant environmental penalties for your nation."
  },
  {
    eventName: "Historic Sites Restoration Collaboration with Europe",
    involvedCountry: "Europe",
    eventDescription: "Europe invites you to collaborate on a historic site restoration initiative to preserve cultural heritage globally. Refusing could force you to fund costly domestic restoration projects alone.",
    eventCosts: { Yes: 150000, No: 100000 },
    eventRequirements: { Manufacturing: 0, Defence: 0, Services: 20, Energy: 0, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 100000, Manufacturing: 0, Defence: 0, Services: 30, Energy: 0, Agriculture: 0 },
      No: { GDP: -50000, Manufacturing: 0, Defence: 0, Services: -10, Energy: 0, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 80000, Manufacturing: 0, Defence: 0, Services: 25, Energy: 0, Agriculture: 0 },
      No: { GDP: -30000, Manufacturing: 0, Defence: 0, Services: -5, Energy: 0, Agriculture: 0 }
    },
    requiredRelationship: 65,
    relationshipAgreeImpact: 20,
    relationshipDeclineImpact: -10,
    type: "G",
    newsTitle: "Europe Leads Global Historic Sites Restoration Effort",
    newsDescription: "Europe calls for international collaboration to preserve historic sites, but declining may result in high domestic restoration costs."
  },
  {
    eventName: "Maritime Security Agreement with Oceania",
    involvedCountry: "Oceania",
    eventDescription: "Oceania offers a maritime security pact to safeguard sea routes and combat piracy. Refusing could lead to increased security costs to protect your own shipping lanes.",
    eventCosts: { Yes: 250000, No: 150000 },
    eventRequirements: { Manufacturing: 0, Defence: 40, Services: 0, Energy: 10, Agriculture: 0 },
    eventImpacts: {
      Yes: { GDP: 150000, Manufacturing: 0, Defence: 80, Services: 0, Energy: 20, Agriculture: 0 },
      No: { GDP: -50000, Manufacturing: 0, Defence: -10, Services: 0, Energy: -10, Agriculture: 0 }
    },
    involvedCountryImpacts: {
      Yes: { GDP: 100000, Manufacturing: 0, Defence: 70, Services: 0, Energy: 15, Agriculture: 0 },
      No: { GDP: -40000, Manufacturing: 0, Defence: -5, Services: 0, Energy: -5, Agriculture: 0 }
    },
    requiredRelationship: 60,
    relationshipAgreeImpact: 25,
    relationshipDeclineImpact: -15,
    type: "G",
    newsTitle: "Oceania Proposes Joint Maritime Security Initiative",
    newsDescription: "Oceania offers a joint maritime security agreement to combat piracy and protect trade routes, but refusing could increase domestic security costs."
  }
];
