import React from 'react';
import ProgressBar from './Progressbar';
import './Target.scss';

const Target = () => {
  const data = [
    {
      id: 1,
      title: 'Views',
      data: 75,
    },
    {
      id: 2,
      title: 'Followers',
      data: 50,
    },
    {
      id: 3,
      title: 'Income',
      data: 25,
    },
  ];

  return (
    <div className="targets-container card">
      <h3 className="title-heading">Targets</h3>
      {data.map((el) => {
        return (
          <div className="progress-data" key={el.id}>
            <div className="title">
              <h4>{el.title}</h4>
              <h4>{el.data}%</h4>
            </div>
            <ProgressBar value={el.data} max={100} id={el.id} />
          </div>
        );
      })}
    </div>
  );
};

export default Target;
