import React, { useContext } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'

import usePersistedState from './utils/usePersistedState'



import light from './styles/themes/light'
import dark from './styles/themes/dark'

import { PageContainer } from './styles';

import Header from './Header';
import PagePost from './PagePosts';

import GlobalStyle from './styles/global'

function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme} >
      <PageContainer>
      <GlobalStyle />
        <Header toggleTheme={toggleTheme} />   
        <PagePost />
      </PageContainer>
    </ThemeProvider>
    
  );
}

export default App;
