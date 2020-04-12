import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './layout/Header';
import MachineLearning from './MachineLearning/MachineLearning'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route
          exact
          path="/react-demo" component={SortingVisualizer}
        />
        <Route path="/react-demo/ml" component={MachineLearning} />

      </Router>
    </div>
  );
}

export default App;
