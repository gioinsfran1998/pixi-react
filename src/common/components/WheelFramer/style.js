import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled(motion.div)`
  position: relative;
  width: 100px;
  height: 100px;
  /* perspective: 50cm; */
  perspective: 50cm;
`;

export const Roll = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
`;
