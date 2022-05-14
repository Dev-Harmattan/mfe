import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createMemoryHistory, createBrowserHistory} from 'history';

const mount = (devRoot, {onNavigate, defaultHistory, initialPathname}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPathname]
  });
  if(onNavigate){
    history.listen(onNavigate);
  }
  ReactDOM.render(<App history={history} />, devRoot);

  return {
    onParentNavigate: ({pathname: nextPathname}) => {
      const {pathname} = history.location
      if(nextPathname !== pathname){
        history.push(nextPathname);
      }
    }
  }
}

//When running the remote on Dev and in Isolation.
//We should render the element immediately.
if(process.env.NODE_ENV === 'development'){
  const devRoot = document.getElementById('_auth_dev_root');
  if(devRoot){
    mount(devRoot, {defaultHistory: createBrowserHistory()});
  }
}

//When running by container (Host).
//We should export the mount function.
export { mount }