import { useState } from "react";
import "./App.css";
import Paris from "./components/Paris";
import Sud from "./components/Sud";
import Smichel from "./components/Smichel";
import Colmar from "./components/Colmar";
import Brusl from "./components/Brusl";
import Tools from "./Tools";

const App = () => {
  const [activePage, setActivePage] = useState(null);

  const pages = {
    paris: <Paris />,
    sud: <Sud />,
    smichel: <Smichel />,
    colmar: <Colmar />,
    brusl: <Brusl />,
    tools: <Tools />,
  };

  const labelCn = {
    paris: "巴黎",
    sud: "普羅旺斯",
    smichel: "聖米歇爾",
    colmar: "科爾馬",
    brusl: "布魯塞爾",
    tools: "工具",
  };
  const labelFr = {
    paris: "Paris",
    sud: "Provence",
    smichel: "M. St-Michel",
    colmar: "Colmar",
    brusl: "Brussels",
    tools: "App",
  };

  return (
    <section id="center">
      <div>
        <h1> 法國脫團走透透 </h1>
      </div>
      <div className="menu">
        {Object.keys(pages).map((key) => (
          <button key={key} onClick={() => setActivePage(key)}>
            <span className="btn-cn">{labelCn[key]}</span>
            <span className="btn-fr">{labelFr[key]}</span>
          </button>
        ))}
      </div>
      {activePage && pages[activePage]}
    </section>
  );
};

export default App;
