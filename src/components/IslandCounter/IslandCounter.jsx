import React from "react";
import islandCounter from "../leetcode/IslandCounterAlgorithm.js";
import "./IslandCounter.scss";
import getIslandFinderAnimations from "../leetcode/IslandCounterAlgorithm.js";

const PRIMARY_COLOR = "#57a18b";
const NEUTRAL_COLOR = "#0000FF";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "orangered";

export default class IslandCounter extends React.Component {
  constructor(props) {
    super(props);
    let array = [];
    for (let i = 0; i < 10; i++) {
      const subArray = [];
      for (let j = 0; j < 20; j++) {
        subArray.push(Math.floor(Math.random() * 2).toString());
      }
      array.push(subArray);
    }
    this.state = {
      array: array,
      animation_speed: 50,
      n_islands: "???",
      islandFinderDisabled: false,
      resetButtonDisabled: false,
    };
  }
  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 3; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  disableResetButton() {
    this.setState(
      { resetButtonDisabled: true, islandFinderDisabled: true },
      () =>
        this.setState({ resetButtonDisabled: true, islandFinderDisabled: true })
    );
  }
  enbleResetButton() {
    this.setState({ resetButtonDisabled: false, islandFinderDisabled: false });
  }
  islandFinder() {
    this.disableResetButton();
    const arr = [];
    for (let i = 0; i < 10; i++) {
      const subArray = [];
      for (let j = 0; j < 20; j++) {
        subArray.push(this.state.array[i][j]);
      }
      arr.push(subArray);
    }
    const [animations, numIslands] = getIslandFinderAnimations(arr);
    console.log(this.state.array);
    this.setState({
      n_islands: numIslands
        .toString()
        .concat(`, Each island is in a different color.`),
    });
    const randColors = [];
    for (let i = 0; i < numIslands; i++) {
      randColors.push(this.getRandomColor());
    }
    for (let i = 0; i < animations.length; i++) {
      const nodes = document.getElementsByClassName("node");
      const [m, n, islandNumber] = animations[i];
      setTimeout(() => {
        nodes[m * 20 + n].classList.add("checked");
        nodes[m * 20 + n].style.backgroundColor = randColors[islandNumber];
        if (i == animations.length - 1) this.enbleResetButton();
      }, i * this.state.animation_speed);
    }
  }
  resetArray() {
    const nodes = document.getElementsByClassName("node");
    let array = [];
    for (let i = 0; i < 10; i++) {
      const subArray = [];
      for (let j = 0; j < 20; j++) {
        subArray.push(Math.floor(Math.random() * 2).toString());
        if (subArray[j] == "1") {
          nodes[i * 20 + j].style.backgroundColor = "#333";
        } else {
          nodes[i * 20 + j].style.backgroundColor = "#eee";
        }
        nodes[i * 20 + j].classList.remove("checked");
      }
      array.push(subArray);
    }
    this.setState({ array: array, n_islands: "???" });
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <button
            className="btn hvr-sweep-to-right"
            onClick={() => this.islandFinder()}
            disabled={this.state.islandFinderDisabled}
          >
            Find Islands
          </button>
          <button
            className="btn hvr-sweep-to-right"
            onClick={() => this.resetArray()}
            disabled={this.state.resetButtonDisabled}
          >
            Reset Array
          </button>
        </div>
        <br></br>
        <div className="container">
          {this.state.array.map((row, idx) =>
            row.map((value, idx2) => (
              <div
                className="node"
                key={idx2}
                style={{
                  backgroundColor: value == "1" ? `#333 ` : `#eee`,
                  color: value == "1" ? `white` : `black`,
                }}
              >
                <p>
                  <strong>{value}</strong>
                </p>
              </div>
            ))
          )}
        </div>
        <hr></hr>
        <h1>Number of Islands : {this.state.n_islands}</h1>
      </React.Fragment>
    );
  }
}
