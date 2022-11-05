import React, { Component } from 'react';

import {
  Particles,
} from '../ui';
import {
  AppContainer,
  GlobalStyles,
} from '../../appStyles';

export class Home extends Component {
  render() {
    return (
      <> <AppContainer className="back">
      <GlobalStyles />
      <Particles />
    
        </AppContainer>
  </>
         );
  }
}
