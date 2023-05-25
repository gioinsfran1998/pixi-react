import { AnimatedSprite, Container, Sprite, Stage } from '@pixi/react';
import { Texture } from 'pixi.js';
import { useEffect, useState } from 'react';

const numberImages = [
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

const textPositionX = 380;
const textPositionY = 300;

function NumberDrawAnimation() {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => (prevNumber + 1) % 10);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const textures = numberImages.map((image) => Texture.from(image));

  return (
    <Stage>
      <Container x={textPositionX} y={textPositionY}>
        <Sprite anchor={0.5} image="roller.svg" height={200} />
      </Container>
      <Container x={220} y={textPositionY}>
        <Container
          anchor={0.5}
          scale={[0.8, 0.8]}
          y={20} // Posición arriba del número sorteado
        >
          <AnimatedSprite
            width={60}
            height={60}
            anchor={0.5}
            textures={textures}
            isPlaying={true}
            animationSpeed={0.0001}
            y={-100} // Posición arriba del número sorteado
            initialFrame={currentNumber === 0 ? 9 : currentNumber - 1}
          />
        </Container>
        <AnimatedSprite
          width={60}
          height={60}
          anchor={0.5}
          textures={textures}
          isPlaying={true}
          animationSpeed={0.0001}
          initialFrame={currentNumber}
        />
        <Container
          anchor={0.5}
          scale={[0.8, 0.8]} // Reducir el tamaño para la perspectiva
          y={-20} // Posición abajo del número sorteado
        >
          <AnimatedSprite
            width={60}
            height={60}
            anchor={0.5}
            textures={textures}
            isPlaying={true}
            animationSpeed={0.0001}
            y={100} // Posición abajo del número sorteado
            initialFrame={currentNumber === 9 ? 0 : currentNumber + 1}
          />
        </Container>
      </Container>
    </Stage>
  );
}

export default NumberDrawAnimation;
