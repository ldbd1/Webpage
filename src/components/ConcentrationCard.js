import React from 'react';

const ConcentrationCard = ({ name, description, extraInfo }) => {
    const extraInfoList = extraInfo.split(',').map(item => item.trim());
  return (
    <div className="concentration-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="concentration-card-extra-info">
        <ul>
            {extraInfoList.map((info, index) => (
                <li key={index}>{info}</li>
            ))}
            </ul>
        </div>
    </div>
  );
};

export default ConcentrationCard;