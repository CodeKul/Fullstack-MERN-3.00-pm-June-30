import react from "react";
import React, { Children, createContext, useContext, useState } from "react";


export const  userContext = createContext();

export default function ContextEx3() {


  const [userInfo, setUserInfo] = useState()

  return (
    <div>
      <userContext.Provider value={userInfo}>
   {react.Children}
      </userContext.Provider>
    </div>
  );
}


