import './Roadmap.css';

interface IPoint {
  title: string;
  text: string;
}

interface IRoadmap {
  points: Array<IPoint>
}

const Roadmap = ({points}: IRoadmap) => {
  const formatPoints: Array<Array<IPoint>> = (() => {
    const arr = [];

    for (let i = 0; i < points.length; i += 3) {
      arr.push(points.slice(i, i + 3));
    }

    return arr;
  })();

  const pointsItems = formatPoints.map((row, i) => (
    <div
      style={{
        justifyContent: i % 2
          ? formatPoints[i].length !== 1 ? 'space-between' : 'flex-start'
          : formatPoints[i].length !== 1 ? 'space-between' : 'flex-end'
      }}
      className="Roadmap__row"
      key={i}
    >{
      row.map((item, j) => (
        <div className="Roadmap__item" key={j}>
          <div>
            <span className="Roadmap__count">{item.title}</span>
            <p
              style={{
                top: i === formatPoints.length - 1 ? '' : '0',
                bottom: i === formatPoints.length - 1 ? '0' : '',
                marginTop: i === formatPoints.length - 1 ? '' : '72px',
                marginBottom: i === formatPoints.length - 1 ? '72px' : '',
              }}
            >
              {item.text}
            </p>
          </div>
        </div>
      ))
    }</div>
  ));

  return (
    <div className="Roadmap">
      <div className="Roadmap__container">
        {pointsItems}
      </div>
    </div>
  );
};

export default Roadmap;
