import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as MoonIcon } from '../icons/moon.svg';
import { ReactComponent as SunIcon } from '../icons/sun.svg';

const ToggleContainer = styled.button`
  justify-content: space-between;
  background: ${({ theme }) => theme.gradient};
  width: 6rem;
  height: 2.5rem;
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  overflow: hidden;
  outline: none;

  svg {
    width: 1.5rem;
    height: auto;
    transition: all 0.3s linear;
    outline: none;

    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }

    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
}

export default Toggle;
