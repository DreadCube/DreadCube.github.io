import React from 'react';

import './App.css'
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {DarkTheme, BaseProvider, styled} from 'baseui';

import Content from './Content'
const engine = new Styletron();
const Centered = styled('div', {
  /*display: 'flex',
  height: '100%',
  width: '100%'*/
});

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={DarkTheme}>
        <Centered>
          <Content />
        </Centered>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
