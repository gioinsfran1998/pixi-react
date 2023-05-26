import React, { useState } from 'react';
import * as S from './style';
import { useAnimation } from 'framer-motion';

const numberArray = [
  {
    value: 0.0,
    label: '00.00',
  },
  {
    value: 0.01,
    label: '0.01',
  },
  {
    value: 0.02,
    label: '0.02',
  },
  {
    value: 0.03,
    label: '0.03',
  },
  {
    value: 0.04,
    label: '0.04',
  },
  {
    value: 0.05,
    label: '0.05',
  },
  {
    value: 0.06,
    label: '0.06',
  },
  {
    value: 0.07,
    label: '0.07',
  },
  {
    value: 0.08,
    label: '0.08',
  },
  {
    value: 0.09,
    label: '0.09',
  },
];

const RangeNumbers = () => {
  const [number, setNumber] = useState(0.01);
  const length = 10;
  const WIDTH_BOX = 100;
  const WIDTH_RANGE_CONTAINER = length * WIDTH_BOX;

  const animationRange = useAnimation();

  const handleClick = async (number) => {
    const indexSet = numberArray.findIndex(
      (element) => element.value === number
    );

    await animationRange.start({
      translateX: indexSet ? indexSet * -100 + 100 : 100,
    });
  };

  return (
    <S.Wrapper>
      <S.Center>
        <S.Content animate={animationRange}>
          {numberArray.map((range, idx) => {
            return <S.Box key={range.value}>{range.value}</S.Box>;
          })}
        </S.Content>
      </S.Center>

      <button onClick={() => handleClick(number)}>Animate{number}</button>
      <input
        onChange={(ev) => setNumber(Number(ev.target.value))}
        type="number"
        minLength={1}
        maxLength={4}
      />
    </S.Wrapper>
  );
};

export default RangeNumbers;
