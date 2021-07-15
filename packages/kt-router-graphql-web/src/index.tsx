import React, { FC } from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import '@ui5/webcomponents/dist/Assets.js';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';

import '@ui5/webcomponents-fiori/dist/Assets.js';
import '@ui5/webcomponents-react/dist/Assets.js';
import '@ui5/webcomponents-icons/dist/Assets.js';
import * as serviceWorker from './serviceWorker';
import './index.css';

const Main: FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  );
};

render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
