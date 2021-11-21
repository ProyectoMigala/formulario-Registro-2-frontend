import React, { useEffect, useState } from 'react';

export function Header() {
  const [fullSize, setFullSize] = useState(true);

  const handleScroll = ()=>{
    setFullSize(false);
  }

  const initialize = ()=>{
    window.addEventListener('scroll', handleScroll);
  }

  useEffect(initialize, []);


  return (
    <header className={`App-header ${fullSize ? '' : 'minsize' }`}>
      <div>LOGO</div>
    </header>
  )

}