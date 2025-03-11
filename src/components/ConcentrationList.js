import React from 'react';
import ConcentrationCard from './ConcentrationCard';



const concentrations = [
  {
    name: 'Social Studies',
    description: 'Founded by a distinguished group of students who believed that the study of the social world requires us to be up close and personal.',
    extraInfo: 'Rowing track: Gently and merrily down the stream, Wrestling track: A warm hug'
  },
  {
    name: 'Pure Running',
    description: 'Run Forrest run!',
    extraInfo: 'Track track: x-axis running, Swimming track: y-axis running, Skiing track: z-axis running'
  },
  {
    name: 'Applied Running',
    description: 'Conditioning is the soul of statistics and these sports.',
    marginBottom: '10px',
    extraInfo: 'Breadth: Sprints and Stat 110, Depth: Hand or Foot Core, Soccer Focus: Turn good players to great players and good teams to champions -Jose c/o 25, Basketball Focus: Fans, Softball Focus: Better baseball, Rugby Focus: Better football, Squash Focus: Worse tennis, Anger Management Focus (Hockey track - Football track - Water Polo track - Lacrosse track)'
  },
  {
    name: 'Engineering Sciences (SB)',
    description: 'Measure twice, move once.',
    extraInfo: 'Golf track: "Bend and snap", Sailing track: Gone with the wind, Diving track: "Weeee", Fencing track: The Inigo T. Montoya fencing program was founded by a generous grant in the name of his father.'
  },
  // Add more fields as necessary
];

const ConcentrationList = () => {
  return (
    <div className="concentration-list">
      {concentrations.map((concentration, index) => (
        <ConcentrationCard
          key={index}
          name={concentration.name}
          description={concentration.description}
          extraInfo={concentration.extraInfo}
        />
      ))}
    </div>
  );
};

export default ConcentrationList;