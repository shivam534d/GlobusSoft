import React from 'react';
import { ChevronRight, Plus } from 'react-feather';
import user1 from '../../../assets/img/user1.webp';
import user2 from '../../../assets/img/user2.webp';
import user3 from '../../../assets/img/user3.webp';
import './Meetings.scss';

const Meetings = () => {
  const data = [
    {
      id: 1,
      image: user1,
      name: 'Emmy Anderson',
      time: '8:00 - 10:00',
    },
    {
      id: 2,
      image: user2,
      name: 'Joy McGlynn',
      time: '11:00 - 12:00',
    },
    {
      id: 3,
      image: user3,
      name: 'Mara Dach',
      time: '14:00 - 15:00',
    },
  ];

  return (
    <div className="meetings-container">
      <h3 className="title">Meetings</h3>
      <div className="user-cards">
        {data.map((el) => {
          return (
            <a href="/" className="user-card card" key={el.id}>
              <div className="user-info-card">
                <img className="user-image" src={el.image} alt="User" />
                <div className="user-info">
                  <h4 className="name">{el.name}</h4>
                  <p className="time">{el.time}</p>
                </div>
              </div>
              <ChevronRight size={25} color="#1f1f1f" />
            </a>
          );
        })}
        <a href="/" className="card add-user">
          <Plus color="#1e1e1e" size={25} />
        </a>
      </div>
    </div>
  );
};

export default Meetings;
