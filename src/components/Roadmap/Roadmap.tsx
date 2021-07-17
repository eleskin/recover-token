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
    <div className="Roadmap__row" key={i}>{
      row.map((item, i) => (
        <div className="Roadmap__item" key={i}>
          <div>
            <span>{item.title}</span>
            <p>{item.text}</p>
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
