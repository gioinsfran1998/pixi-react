import { AnimatedSprite, Container, Stage, useApp, useTick } from '@pixi/react';
import './App.css';
import { useEffect, useState } from 'react';
import { Texture } from 'pixi.js';
import Teste from '../../../../public/teste.json';
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

const spritesheetImage = 'numbersSheet.png';
const spritesheetMap = {
  frameWidth: 100,
  frameHeight: 100,
  frames: 10,
};

const [width, height] = [500, 500];
const spritesheet = Teste;

const JetFighter = () => {
  const [frames, setFrames] = useState([]);
  const [rot, setRot] = useState(0);

  useTick((delta) => setRot((r) => r + 0.01 * delta));

  let loader = PIXI.Loader.shared;

  console.log('=>', loader);

  // useEffect(() => {
  //   const textures = spritesheet.map((frame) => spritesheet.textures[frame]);
  //   setFrames(textures);
  // }, []);

  if (frames.length === 0) {
    return null;
  }

  return (
    <Stage width={400} height={400}>
      <Container rotation={rot} x={width / 2} y={height / 2}>
        <AnimatedSprite
          animationSpeed={0.5}
          isPlaying={true}
          textures={spritesheet}
          // currentFrame={currentFrame}
          anchor={0.5}
        />
      </Container>
    </Stage>
  );
};

function App() {
  return (
    <div className="container">
      <h1>Pixi React Animation</h1>
      <JetFighter />
    </div>
  );
}

export default App;
