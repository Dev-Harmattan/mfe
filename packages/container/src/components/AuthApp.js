import React, { useRef, useEffect } from 'react';
import { mount as AuthMount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

export default () => {
  const divRef = useRef(null);
  const history = useHistory();
  const initialPathname = history.location.pathname;
  useEffect(() => {
    const { onParentNavigate } = AuthMount(divRef.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      initialPathname,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={divRef}> </div>;
};
