import React, {useRef, useEffect} from 'react';
import { mount as MarketingMount } from 'marketing/MarketingApp';



export default () => {
  const divRef = useRef(null);
  useEffect(() => {
    MarketingMount(divRef.current);
  }, [])

  return <div ref={divRef}> </div>;
}

