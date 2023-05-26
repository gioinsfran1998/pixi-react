import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  background: red;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Center = styled(motion.div)`
  background: blue;
  width: 100%;
  display: flex;
  align-items: center;

  height: 300px;
  width: 300px;
  overflow: hidden;
`;

export const Content = styled(motion.div)`
  background: beige;
  display: flex;
  align-items: center;
  min-width: 1000px;

  height: 200px;
  /* width: 300px; */
  /* overflow: hidden; */
`;

export const Box = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  /* max-width: 100px; */
  height: 100px;
  color: #000;
  /* border: 1px solid #000; */
  font-size: 2rem;
  background: yellow;
`;
