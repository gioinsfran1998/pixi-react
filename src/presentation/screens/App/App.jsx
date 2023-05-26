import './App.css';
import * as S from './style';

import WheelFramer from '../../../common/components/WheelFramer/WheelFramer';
import { useState } from 'react';
import { transform } from 'framer-motion';
import AnimatedNumbers from 'react-animated-numbers';
import RangeNumbers from '../../../common/components/RangeNumbers/RangeNumbers';

function App() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [numbersSort, setNumbersSort] = useState([1, 2, 3, 4]);
  const [inputValue, setInputValue] = useState('');
  const imgPositionInWheel = (idx) => -idx * (360 / 10);
  const [num, setNum] = useState(111);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue !== '') {
      const numberArray = inputValue.split('').map(Number);
      setNumbersSort(numberArray);
      setStartAnimation((prev) => !prev);
      // const number = parseInt(inputValue);
      // setNumbersSort([number]);
      // setInputValue('');
    }
  };

  return <RangeNumbers />;

  return (
    <div className="container">
      {/* <AnimatedNumbers
        includeComma
        animateToNumber={num}
        fontStyle={{ fontSize: 40 }}
        locale="en-US"
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers> */}

      <AnimatedNumbers
        animateToNumber={num}
        fontStyle={{ fontSize: 32 }}
        configs={(number, index) => {
          return { mass: 1, tension: 230 * (index + 1), friction: 140 };
        }}
      ></AnimatedNumbers>
      <div>
        <button onClick={() => setNum((state) => state + 1)}>+</button>
        {/* <button onClick={() => setNum((state) => state - 31234)}>-</button> */}
      </div>
    </div>
  );

  // return (
  //   <div className="container">
  //     <S.Wrapper>
  //       {numbersSort.map((number, idxRell) => {
  //         return (
  //           <WheelFramer
  //             key={idxRell}
  //             delay={number}
  //             target={number}
  //             idxRell={idxRell}
  //             start={startAnimation}
  //             setStartAnimation={setStartAnimation}
  //           />
  //         );
  //       })}
  //     </S.Wrapper>
  //     <S.Button onClick={handleButtonClick}>
  //       {startAnimation ? 'stop' : 'start'}
  //     </S.Button>
  //     <S.Input
  //       maxLength={4}
  //       type="number"
  //       value={inputValue}
  //       onChange={handleInputChange}
  //     />
  //   </div>
  // );
}

export default App;
