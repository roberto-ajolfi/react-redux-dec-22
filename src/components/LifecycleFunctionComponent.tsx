import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';

const LifecycleFunctionComponent = () => {
  const [message, setMessage] = useState("Ciao");

  useEffect(()=>{
    console.log("[FUNCTION] Mount");
    // QUI VANNO LE CHIAMATE API per caricamento iniziale

    return () => console.log("[FUNCTION] Unmount");
  }, []);

  useEffect(()=>{
    console.log("[FUNCTION] Altra Operazione");
    
    return () => console.log("[FUNCTION] UnAltra Operazione");
  });

  useEffect(()=>{
    console.log("[FUNCTION] Message è Cambiato");
  }, [message]);

  return (<div>
    <div>LifecycleFunctionComponent { message }</div>
    <button onClick={() => setMessage(uuid())}>Click Me</button>
  </div>
  )
}

export default LifecycleFunctionComponent;