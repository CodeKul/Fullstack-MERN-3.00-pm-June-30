import React, { useContext } from "react";
import { userContext } from "./ContextEx3";

export default function ContextEx32() {
  console.log(userContext);
  const user = useContext(userContext);

  return (
    <div>
      <userContext.Consumer>Hello</userContext.Consumer>
    </div>
  );
}
