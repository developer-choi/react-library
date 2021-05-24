import { Button } from '@components/atom/button/button-presets';
import React from 'react';
import styled, {css, keyframes} from 'styled-components';

/**
 * transition이랑 다르게 animation은 css속성이 사라질 때(= active class가 사라져서 active class로 선언했던 스타일들이 적용되지 않을 때)
 * 애니메이션이 작동되지않는다.
 */
export default function Page() {
  const [active, setActive] = React.useState(false);
  const toggle = React.useCallback(() => {
    setActive(prevState => !prevState);
  }, []);
  return (
      <Wrap>
        <Button onClick={toggle}>토글</Button>
        <TransitionBox className={active ? 'active' : ''}/>
        <AnimationBox className={active ? 'active' : ''}/>
      </Wrap>
  );
}

const Wrap = styled.div`
  * {
    margin-bottom: 20px;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
`;

const DURATION = 2;
const commonCss = css`
  background-color: blue;
`;

const TransitionBox = styled(Box)`
  ${commonCss};
  transition: background-color ${DURATION}s;
  &.active {
    background-color: red;
  }
`;

const animate = keyframes`
  to {
    background-color: red;
  }
`;

const AnimationBox = styled(Box)`
  ${commonCss};
  &.active {
    animation: ${animate} ${DURATION}s forwards;
  }
`;
