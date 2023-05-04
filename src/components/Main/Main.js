import React from 'react';
import CongratsCard from './CongratsCard/CongratsCard';
import Meetings from './Meetings/Meetings';
import SocialStats from './SocialStats/SocialStats';
import Target from './Target/Target';
import Views from './Views/Views';
import WelcomeCard from './WelcomeCard/WelcomeCard';
import './main.scss';

const Main = () => {
  return (
    <main className="main-container">
      <div className="coloums div1">
        <WelcomeCard />
        <CongratsCard />
      </div>
      <div className="coloums div2">
        <SocialStats />
        <Views />
      </div>
      <div className="coloums div3">
        <Target />
        <Meetings />
      </div>
    </main>
  );
};

export default Main;
