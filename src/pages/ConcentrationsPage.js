import React from 'react';
import ConcentrationList from '../components/ConcentrationList';

const ConcentrationsPage = () => {
  return (
    <div className="concentrations-page">
      <h1>Harvard College Fields, Courts, and Pools of Concentration</h1>
      <ConcentrationList />
    </div>
  );
};

export default ConcentrationsPage;