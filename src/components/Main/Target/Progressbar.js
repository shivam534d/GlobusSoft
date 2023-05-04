import './ProgressBar.scss';

function ProgressBar(props) {
  const { value, max, id } = props;

  return (
    <div
      className="progressbar"
      style={{ backgroundColor: id === 1 ? '#c2ceff' : id === 2 ? '#fceeb3' : id === 3 ? '#fcc6b3' : '#c2ceff' }}
    >
      <div
        className="bar"
        style={{
          width: `${(value / max) * 100}%`,
          backgroundColor: id === 1 ? '#4759ff' : id === 2 ? '#fac709' : id === 3 ? '#fa440a' : '#c2ceff',
        }}
      />
    </div>
  );
}

export default ProgressBar;
