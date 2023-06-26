import { useAnimation } from 'framer-motion';
import React, { useState } from 'react';
import { generateArrayNumbers, generateRandomNumber } from '../../utils';
import * as S from './style';

const arrayFijo = [
  {
    value: 1000,
    label: '00.00',
  },
  {
    value: 1000,
    label: '0.01',
  },
  {
    value: 1000,
    label: '0.02',
  },
  {
    value: 1000,
    label: '0.03',
  },
  {
    value: 1000,
    label: '0.04',
  },
];

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

/* 
[] - Generar numeros aleatorios al entrar al app, para que quede
montado el range.
[] - Al empezar animar concatenar los numeros aleatorios,
con el numero generado al partir del numero seleccionado,
esto para poder animar al inicio y que luego caiga en el
valor deseado

*/

const RangeNumbers = () => {
  const [number, setNumber] = useState(0.01);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const length = 10;
  const WIDTH_BOX = 100;
  const WIDTH_RANGE_CONTAINER = length * WIDTH_BOX;

  const randomNumber = generateRandomNumber(0, 100);
  const [useRange, setUseRange] = React.useState(randomNumber);
  const arrNumbers = generateArrayNumbers(useRange, 11);

  const [rangeNumbers, setRangeNumbers] = useState(arrNumbers);
  console.log('=>', rangeNumbers);

  const animationRange = useAnimation();

  const handleClick = async (number) => {
    console.log('=>', number);
    setSelectedNumber(null);
    const indexSet = rangeNumbers.findIndex(
      (element) => element.value === number
    );

    await animationRange.start({
      translateX: 100,
      transition: {
        duration: 0,
      },
    });

    await animationRange.start({
      translateX: 1000 + indexSet ? indexSet * -100 + 100 : 100,
      transition: {
        duration: 0.3,
      },
    });

    setSelectedNumber(number);
  };

  return (
    <S.Wrapper>
      <S.Center>
        <S.Content
          length={numberArray.length * WIDTH_BOX}
          animate={animationRange}
        >
          {rangeNumbers.map((range) => {
            return (
              <S.Box
                initial={{ scale: 1 }}
                animate={{
                  scale: selectedNumber === range.value ? 1.5 : 1,
                }}
                key={range.value}
                translate={{
                  duration: 0.5,
                }}
              >
                {range.label}
              </S.Box>
            );
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
