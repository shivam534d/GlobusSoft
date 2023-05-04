import { ChevronRight, Grid } from 'react-feather';
import Chart from './Chart/Chart';
import './Views.scss';

const Views = () => {
  return (
    <div className="views-card card">
      <p className="title">Views</p>
      <h2 className="view-count">6,964,431</h2>
      <div className="chart">
        <Chart label="windows" width={'100%'} height={300} />
      </div>
      <a href="/" className="view-card">
        <i className="icon-background">
          <Grid size={25} color="#465964" />
        </i>
        <div className="user-info-card">
          <h4 className="name">View Dashboard</h4>
        </div>
        <ChevronRight size={25} color="#1f1f1f" />
      </a>
    </div>
  );
};

export default Views;
