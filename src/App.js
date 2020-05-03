import React, { useState } from "react";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import Header from "./layout/Header";
import MachineLearning from "./MachineLearning/MachineLearning";
import CovidTracker from "./CovidTracker/CovidTracker";
import CovidSummary from "./CovidSummary";

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
  const [theme, setTheme] = useState("light");
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
      </HashRouter>
    </div>
  );
}

export default App;
