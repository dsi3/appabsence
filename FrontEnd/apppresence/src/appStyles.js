import styled, { createGlobalStyle } from 'styled-components';
import { SITE_WIDTH } from './constants';
import bitterBold from './assets/fonts/bitterBold.ttf';
import montserratMedium from './assets/fonts/montserratMedium.ttf';
import montserratSemiBold from './assets/fonts/montserratSemiBold.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Bitter;
    font-weight: 700;
    src: url(${bitterBold});
  }

  @font-face {
    font-family: Montserrat;
    font-weight: 500;
    src: url(${montserratMedium});
  }

  @font-face {
    font-family: Montserrat;
    font-weight: 600;
    src: url(${montserratSemiBold});
  }

  html, .back, #root {
    height: 100%;
  }

 .back{
  position: absolute;
  top: 0;
  left: 0;
    margin: 0;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 500;
    color: white;
    letter-spacing: 0.5px;
    max-width: 100%;
    overflow: hidden;
    
  }
`;

export const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  overflow-y: visible;
`;

export const AppContent = styled.div`
  max-width: ${SITE_WIDTH};
  width: 65%;
  margin: 0 auto;
  pointer-events: none;
  position: relative;
  min-height: calc(100% - 150px);
`;
