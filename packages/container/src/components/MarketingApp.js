import React, {useRef, useEffect} from 'react';
import { mount as MarketingMount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';



export default () => {
  const divRef = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const {onParentNavigate} = MarketingMount(divRef.current, {
      onNavigate: ({pathname: nextPathname}) => {
        const {pathname} = history.location;
        if(pathname !== nextPathname) {
          history.push(nextPathname);
        }
      }
    });

    history.listen(onParentNavigate)
  }, [])

  return <div ref={divRef}> </div>;
}

