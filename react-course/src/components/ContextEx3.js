import React, { Children, createContext, useContext, useState } from "react";


export const  userContext = createContext();

export default function ContextEx3() {


  const [userInfo, setUserInfo] = useState()

  return (
    <div>
      <userContext.Provider value={userInfo}>
      
      </userContext.Provider>
    </div>
  );
}


