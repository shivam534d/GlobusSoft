import React from 'react';
import { Star } from 'react-feather';
import './CongratsCard.scss';

const CongratsCard = () => {
  return (
    <div className="congrats-card">
      <div className="icon">
        <Star color="#4759ff" size={30} fill="#4759ff" />
      </div>
      <h3>Congratulations John</h3>
      <p>You have Completed 75% of your profile. Your Current Progress is Great</p>
      <a href="/" className="btn">
        View Profile
      </a>
    </div>
  );
};

export default CongratsCard;
