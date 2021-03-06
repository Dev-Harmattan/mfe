import React, {lazy, Suspense} from 'react';
import Header from './components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import Progress from './components/Progress';

const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthLazy} />
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
