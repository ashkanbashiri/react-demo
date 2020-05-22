// @ts-ignore
import React, { useState } from "react";
// @ts-ignore
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// @ts-ignore
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
// @ts-ignore
import Header from "./components/layout/Header";
// @ts-ignore
import MachineLearning from "./components/MachineLearning/MachineLearning";
// @ts-ignore
import CovidTracker from "./components/CovidTracker/CovidTracker";
// @ts-ignore
import IslandCounter from "./components/IslandCounter/IslandCounter";
// @ts-ignore
import CovidSummary from "./components/CovidSummary";
import CssFun from "./components/CssFun/CssFun";
// @ts-ignore
import ToggleButton from "react-toggle-button";
/*
<ToggleButton
          id="dark-mode-toggle2"
          className="sticky_btn"
          value={themeValue}
          onToggle={() => {
            switch (theme) {
              case "light": {
                console.log("Changing theme from light to dark");
                document.body.classList.add("darkmode");
                setTheme("dark");
                setThemeValue(true);
                break;
              }
              case "dark": {
                console.log("Changing theme from dark to light");
                document.body.classList.remove("darkmode");
                setTheme("light");
                setThemeValue(false);
                break;
              }
            }
          }}
        />
*/
function App() {
  // @ts-ignore
  const [theme, setTheme] = useState("light");
  // @ts-ignore
  const [themeValue, setThemeValue] = useState(false);

  return (
    <div className="App">
      <script type="text/javascript" src="./particles.js"></script>

      <HashRouter>
        <Header />

        <Route exact path="/" component={SortingVisualizer} />
        <Route path="/sv" component={SortingVisualizer} />
        <Route path="/ml" component={MachineLearning} />
        <Route path="/covid19" component={CovidTracker} />
        <Route path="/covid_summary" component={CovidSummary} />
        <Route path="/leetcode" component={IslandCounter} />
        <Route path="/cssfun" component={CssFun} />
      </HashRouter>
    </div>
  );
}

export default App;
