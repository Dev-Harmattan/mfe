import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const mount = (devRoot) => {
  ReactDOM.render(<App />, devRoot);
}

//When running the remote on Dev and in Isolation.
//We should render the element immediately.
if(process.env.NODE_ENV === 'development'){
  const devRoot = document.getElementById('_marketing_dev_root');
  if(devRoot){
    mount(devRoot);
  }
}

//When running by container (Host).
//We should export the mount function.
export { mount }