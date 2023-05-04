import React from 'react';
import './WelcomeCard.scss';
import Illustration from '../../../assets/img/png/illustration.png';

const WelcomeCard = () => {
  return (
    <div className="card tranparent">
      <h1>Hi John</h1>
      <h2>Welcome Back!</h2>
      <p>
        This Page is designed to give some important information about the application. Let's Make Something Together
      </p>
      <img src={Illustration} alt="Illustration" />
    </div>
  );
};

export default WelcomeCard;
