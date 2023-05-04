import React from 'react';
import { ChevronDown, ChevronRight, ChevronUp, Heart, Smile, ThumbsUp } from 'react-feather';
import './SocialStats.scss';

const SocialStats = () => {
  const data = [
    {
      id: 1,
      title: 'Likes',
      data: '26,789',
      growth: '2',
    },
    {
      id: 2,
      title: 'Love',
      data: '6,754',
      growth: '0',
    },
    {
      id: 3,
      title: 'Smile',
      data: '52,789',
      growth: '1',
    },
  ];

  const growhChevron = (a) => {
    const ans =
      a === '1' ? (
        <ChevronDown color="#FF4136" fill="#FF4136" size={25} />
      ) : a === '2' ? (
        <ChevronUp color="#2ECC40" fill="#2ECC40" size={25} />
      ) : (
        <ChevronRight color="#bdbdbd" fill="#bdbdbd" size={25} />
      );
    return ans;
  };

  const emoji = (a) => {
    let ans;
    if (a === 1) {
      ans = (
        <span className="icon-background" style={{ backgroundColor: '#4759ff' }}>
          <ThumbsUp color="#fff" size={25} />
        </span>
      );
    } else if (a === 2) {
      ans = (
        <span className="icon-background" style={{ backgroundColor: '#fa440a' }}>
          <Heart color="#fff" size={25} />
        </span>
      );
    } else {
      ans = (
        <span className="icon-background" style={{ backgroundColor: '#fac709' }}>
          <Smile color="#fff" size={25} />
        </span>
      );
    }
    return ans;
  };

  return (
    <div className="user-cards">
      {data.map((el) => {
        return (
          <a href="/" className="user-card card" key={el.id}>
            <div className="user-info-card">
              {emoji(el.id)}
              <div className="user-info">
                <h4 className="data">{el.data}</h4>
                <p className="title">{el.title}</p>
              </div>
            </div>
            {growhChevron(el.growth)}
          </a>
        );
      })}
    </div>
  );
};

export default SocialStats;
