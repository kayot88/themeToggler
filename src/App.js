import React, {useState} from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Toggle from '../src/components/Toggle';


const App = () => {
  const [theme, setTheme]= useState('light')
  const toggleTheme = () => {
    if (theme==='light') {
      setTheme('dark')
    } else {
      setTheme('light');
    }
  }
   
  return (
 
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
        <h1>{`Its a ${theme} theme`}</h1>
      </>
    </ThemeProvider>
  );
};

export default App;
