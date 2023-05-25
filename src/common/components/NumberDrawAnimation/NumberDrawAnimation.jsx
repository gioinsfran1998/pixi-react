import { useTick } from '@pixi/react';
import { AnimatedSprite, Container, Sprite, Stage } from '@pixi/react';
import { Texture, filters } from 'pixi.js';
import { Fragment, useEffect, useState } from 'react';

const numberImages = [
  'variant/0.png',
  'variant/1.png',
  'variant/2.png',
  'variant/3.png',
  'variant/4.png',
  'variant/5.png',
  'variant/6.png',
  'variant/7.png',
  'variant/8.png',
  'variant/9.png',
];

const textPositionX = 380;
const textPositionY = 300;

function NumberDrawAnimation() {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  // const [animationProgress, setAnimationProgress] = useState(0.8);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (isPlaying) {
  //       setCurrentNumber((prevNumber) => (prevNumber + 1) % 10);
  //     }
  //   }, 500);

  //   return () => clearInterval(interval);
  // }, [isPlaying]);

  // useEffect(() => {
  //   if (isPlaying) {
  //     setIsBlurred(true);

  //     const timeout = setTimeout(() => {
  //       setIsPlaying(false);
  //       setIsBlurred(false);
  //     }, 5000);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [isPlaying]);

  useEffect(() => {}, []);

  const blurFilter = new filters.BlurFilter();
  blurFilter.blur = 0;

  const handleAnimation = () => {
    setIsPlaying((prev) => !prev);
    setIsBlurred((prev) => !prev);
  };

  const textures = numberImages.map((image) => Texture.from(image));

  console.log('=>', textures);

  // console.log('->', animationProgress);
  return (
    <Fragment>
      <Stage>
        <Container x={textPositionX} y={textPositionY}>
          <Sprite anchor={0.5} image="roller.svg" height={200} />
        </Container>
        <Container x={220} y={textPositionY}>
          <AnimatedSprite
            width={80}
            height={180}
            anchor={0.5}
            textures={textures}
            isPlaying={true}
            initialFrame={1}
            // filters={isBlurred ? [blurFilter] : []}
            animationSpeed={0.5} // Velocidad inicial rápida
            // filters={isBlurred ? [blurFilter] : []}
          />
        </Container>
      </Stage>
      <button onClick={handleAnimation}>{isPlaying ? 'Stop' : 'Start'}</button>
    </Fragment>
  );
}

export default NumberDrawAnimation;
