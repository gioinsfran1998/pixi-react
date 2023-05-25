import './App.css';

import WheelFramer from '../../../common/components/WheelFramer/WheelFramer';

function App() {
  const teste = [
    {
      option: '1',
      target: 3,
    },
    {
      option: '2',
      target: 7,
    },
    {
      option: '3',
      target: 6,
    },
    {
      option: '4',
      target: 9,
    },
  ];

  return (
    <div className="container">
      <h1>Pixi React Animation</h1>
      <div style={{ display: 'flex' }}>
        {teste.map((test, idxRell) => {
          return <WheelFramer target={test.target} idxRell={idxRell} />;
        })}
      </div>
    </div>
  );
}

export default App;
