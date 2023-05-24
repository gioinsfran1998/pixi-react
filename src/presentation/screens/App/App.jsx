import {
  AnimatedSprite,
  Container,
  Sprite,
  Stage,
  Text,
  useTick,
} from '@pixi/react';
import './App.css';
import { useEffect, useMemo, useRef } from 'react';
import { BlurFilter, Texture } from 'pixi.js';
import * as PIXI from 'pixi.js';

const stageProps = {
  height: 500,
  width: 500,
  options: {
    backgroundColor: '#341f97',
    // backgroundAlpha: 0, // set background transparent
    antialias: true,
  },
};

const textPositionX = stageProps.width / 2;
const textPositionY = stageProps.height / 2;

function Canvas() {
  const blurFilter = useMemo(() => new BlurFilter(4), []);

  return (
    <Stage onMount={() => console.log('Lienzo Montado')} {...stageProps}>
      <Container
        x={textPositionX}
        y={textPositionY}
        width={250}
        height={100}
        clip={true}
      >
        <Sprite
          image="cover.png"
          width={250}
          height={250}
          anchor={{ x: 0.5, y: 0.5 }}
        />
      </Container>
      <Container x={textPositionX} y={textPositionY}>
        <Sprite
          image="numbers.png"
          width={100}
          height={900}
          anchor={{ x: 0.5, y: 0.5 }}
        />

        {/* <Text
          text="Hello World"
          anchor={{ x: 0.5, y: 0.5 }}
          filters={[blurFilter]}
        /> */}
      </Container>
    </Stage>
  );
}

function NumberSlotAnimation() {
  const numberSprites = useRef([]);
  const numbersCount = 10;
  const numbersTextures = [];

  for (let i = 0; i < numbersCount; i++) {
    const texture = Texture.from(`ruta/numero_${i}.png`);
    numbersTextures.push(texture);
  }

  useEffect(() => {
    numberSprites.current.forEach((sprite) => {
      sprite.animationSpeed = 0.2;
      sprite.loop = false;
      sprite.currentFrame = Math.floor(Math.random() * numbersCount);
    });
  }, []);

  useTick((delta) => {
    numberSprites.current.forEach((sprite) => {
      sprite.currentFrame =
        (sprite.currentFrame + delta * sprite.animationSpeed) % numbersCount;
    });
  });

  const handleSpriteRef = (sprite) => {
    if (sprite && !numberSprites.current.includes(sprite)) {
      numberSprites.current.push(sprite);
    }
  };

  return (
    <Stage>
      <Sprite ref={handleSpriteRef} image="cover.png" />
      {numberSprites.current.map((sprite, index) => (
        <Sprite
          key={index}
          ref={handleSpriteRef}
          texture={numbersTextures[0]}
        />
      ))}
    </Stage>
  );
}

function App() {
  return (
    <div className="container">
      <h1>ViteProject</h1>
      <NumberSlotAnimation />
    </div>
  );
}

export default App;
