import React, { Fragment } from 'react';
import * as S from './style';

const images = [
  'numbers/0.png',
  'numbers/1.png',
  'numbers/2.png',
  'numbers/3.png',
  'numbers/4.png',
  'numbers/5.png',
  'numbers/6.png',
  'numbers/7.png',
  'numbers/8.png',
  'numbers/9.png',
];

const WheelFramer = ({ target, idxRell }) => {
  const imgPositionInWheel = (idx) => -idx * (360 / images.length);

  return (
    <S.Container>
      <S.Wrapper>
        {images.map((url, idx) => {
          return (
            <S.Roll
              key={idx}
              src={url}
              style={{
                originZ: -150,
                rotateX: imgPositionInWheel(idx),
              }}
              animate={{
                rotateX:
                  -360 * (-target + 1) + imgPositionInWheel(idx - target),
              }}
              transition={{ type: 'tween', duration: 2, delay: 1 * idxRell }}
            />
          );
        })}
      </S.Wrapper>
    </S.Container>
  );
};

export default WheelFramer;
