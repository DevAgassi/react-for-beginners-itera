import React, {memo, useEffect, useState} from "react";

const LifeCircle: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(()=> {
    console.log('Mounted');
  })

  useEffect(()=> {
    console.log('Mounted []');
  }, [])

  useEffect(()=> {
    console.log('Mounted' + mounted);
  }, [mounted])
return (
    <button onClick={()=>setMounted(!mounted)}>
      Life Circle {'' + mounted}
    </button>);
}

export default memo(LifeCircle);
