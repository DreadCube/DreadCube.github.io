import React, { useEffect } from "react";

import Game from "./game";

function App() {
  useEffect(() => {
    new Game();
  }, []);
  return <></>;
}

export default App;
