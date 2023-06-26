import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Wrapper = styled(motion.div)`
  position: relative;
  width: 60px;
  height: 80px;
  /* perspective: 50cm; */
  perspective: 5cm;
  /* background: red; */
`

export const Roll = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  font-size: 100px;
`

export const Label = styled(motion.label)`
  font-family: 'Koulen', cursive;
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 123px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.03em;

  background: linear-gradient(
    180deg,
    #ad0be7 30.08%,
    #c952f3 49.36%,
    #75039e 67.48%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* text-fill-color: transparent; */

  /* border: 1px solid #050505; */
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.25);
  -webkit-text-stroke: 3px solid #000000;
`
