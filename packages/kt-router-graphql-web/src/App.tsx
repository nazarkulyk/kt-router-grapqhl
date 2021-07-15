import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { Welcome } from './pages/Welcome';
import { Status } from './pages/Status';
import { Head } from './ui-components/Head';

// import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

const App: FC = () => {
  return (
    <>
      <Head />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/pages/status/:code" component={Status} />
        <Route exact path="/notfound" component={NotFound} />
        <Redirect to="/notfound" />
      </Switch>
    </>
  );
};

export default App;
