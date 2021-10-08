// import React, { createContext } from "react";
// import { Children } from "react";

// export default function ContextEx2() {
//   const data = createContext();
//   return (
//     <div>
//       <data.Provider value>
//         <Children />
//       </data.Provider>
//     </div>
//   );
// }

import React, { Component } from "react";

export default class ContextEx2 extends Component {
  data = createContext();
  render() {
    return (
      <div>
        <data.Provider>
          <data.Consumer>
              
          </data.Consumer>
        </data.Provider>
      </div>
    );
  }
}
