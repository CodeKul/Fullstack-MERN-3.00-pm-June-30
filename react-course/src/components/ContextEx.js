import React, { useState } from "react";

export default function ContextEx() {


    const [data, setData] = useState("10");

  const Child = () => {
   

    return <h1>Child Component {data}</h1>;
  };

  const GrandChild = () => {
    return <h1>Grand Child Component {data}</h1>;
  }

  return (
    <div data>
      <Child>
          <GrandChild/>
      </Child>
    </div>
  );
}
