import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as MoonIcon } from '../../src/logos/moon.svg';
import { ReactComponent as SunIcon } from '../../src/logos/sun.svg';

const Toggle = ({ theme, toggleTheme }) => {
  const ToggleContainer = styled.button`
    overflow: hidden;
    background: ${props => props.theme.gradient};
    margin: 0 auto;
    padding: 10px;
    border: ${props => props.theme.toggle};
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    font-size: 0.5rem;
    position: relative;
    width: 8rem;
    height: 4rem;
    border-radius: 30px;
    &:focus{
        outline:none;
      }
    svg {
      height: auto;
      width: 2.5rem;
      transition: all 1.3s linear;


      &:first-child {
        transform: ${({ theme }) => {
          if (theme.name === 'light') {
            return 'translateY(0)';
          }
          return 'translateY(-150px)';
        }};
      }

      &:nth-child(2) {
        transform: ${({ theme }) =>
          theme.name === 'light' ? 'translateY(-150px)' : 'translateY(0)'};
      }
    }
  }
  `;
  const isLight = theme === 'light';
  return (
    <ToggleContainer onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default Toggle;
