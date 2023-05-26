import React, { Fragment, useEffect } from 'react';
import * as S from './style';
import { useAnimation } from 'framer-motion';
const images = [
  'numbersBg/bg_0.png',
  'numbersBg/bg_1.png',
  'numbersBg/bg_2.png',
  'numbersBg/bg_3.png',
  'numbersBg/bg_4.png',
  'numbersBg/bg_5.png',
  'numbersBg/bg_6.png',
  'numbersBg/bg_7.png',
  'numbersBg/bg_8.png',
  'numbersBg/bg_9.png',
];

const WheelFramer = ({ target, idxRell, start, setStartAnimation }) => {
  const imgPositionInWheel = (idx) => -idx * (360 / images.length);
  // const reelsAnimation = useAnimation();
  const rellsAnimation = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleAnimationReels = async () => {
    for (let i = 0; i < 10; i++) {
      await rellsAnimation[i].start({
        rotateX: 360 * (target + 1) + imgPositionInWheel(i - target),
        transition: {
          duration: 0,
        },
      });
    }

    rellsAnimation.map(async (animation, idxRellAnimation) => {
      return await animation.start({
        rotateX:
          -360 * (target + 1) + imgPositionInWheel(idxRellAnimation - target),
        transition: {
          duration: 3,
          ease: [0.1, 0, 0.2, 1],
          type: 'easeInOut',
          stiffness: 50,
        },
      });
    });

    // setStartAnimation(false);
  };

  useEffect(() => {
    if (start) {
      handleAnimationReels();
    }
  }, [start]);
  return (
    <>
      {/* <button onClick={handleAnimationReels}>oiii</button> */}
      <S.Container>
        <S.Wrapper>
          {rellsAnimation.map((url, idx) => {
            return (
              <S.Roll
                key={idx}
                // src={url}
                initial={{
                  rotateX: imgPositionInWheel(idx),
                }}
                style={{
                  originZ: -150,
                  // rotateX: imgPositionInWheel(idx),
                }}
                // animate={{
                //   rotateX: start
                //     ?
                //     : imgPositionInWheel(idx),
                // }}
                animate={rellsAnimation[idx]}
                // transition={{
                //   // duration: idxRell ? 3 * idxRell : 1,
                //   duration: 3,
                //   ease: [0.1, 0, 0.2, 1],
                //   // type: 'easeInOut',
                //   // stiffness: 50,
                // }}
              >
                <S.Label>{idx}</S.Label>
              </S.Roll>
            );
          })}
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default WheelFramer;
