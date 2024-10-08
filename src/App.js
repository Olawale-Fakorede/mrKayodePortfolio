
import { useState } from "react";
import Header from "./components/Header";


function App() {

   const [ darkMode, setDarkMode ] = useState(true);

  return (
    <div className={darkMode && "dark"}>

        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>

        <main className="">

        </main>
    </div>
  );
}

export default App;
