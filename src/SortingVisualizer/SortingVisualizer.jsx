import React from "react";
import {
  getMergeSortAnimations,
  getquickSortAnimations,
  getBubbleSortAnimations,
  getHeapSortAnimations,
} from "../sortingAlgorithms/sortingAlgorithms.js";
import "./SortingVisualizer.scss";

const PRIMARY_COLOR = "#57a18b";
const NEUTRAL_COLOR = "#0000FF";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "orangered";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      showmsg: false,
      arr_size: 100,
      animation_speed: 10,
      quickSortDisabled: false,
      heapSortDisabled: false,
      mergeSortDisabled: false,
      bubbleSortDisabled: false,
      sliderDisabled: false,
      resetArrayDisabled: false,
      theme: "light",
    };
  }

  componentDidMount() {
    this.resetArray();
    document.body.classList.remove("darkmode");
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < this.state.arr_size; i++) {
      array.push(randomIntFromInterval(1, 400));
    }
    this.setState({ array: array });
    if (array.length >= 100) {
      this.setState({ animation_speed: 10 });
    } else {
      this.setState({ animation_speed: 15 });
    }
  }

  disableAll() {
    this.setState({
      quickSortDisabled: true,
      heapSortDisabled: true,
      mergeSortDisabled: true,
      bubbleSortDisabled: true,
      sliderDisabled: true,
      resetArrayDisabled: true,
    });
  }
  enableAll() {
    this.setState({
      quickSortDisabled: false,
      heapSortDisabled: false,
      mergeSortDisabled: false,
      bubbleSortDisabled: false,
      sliderDisabled: false,
      resetArrayDisabled: false,
    });
  }
  mergeSort() {
    console.log(this.state.animation_speed);
    this.disableAll();
    const [animations, temp] = getMergeSortAnimations(this.state.array.slice());
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const tooltips = document.getElementsByClassName("tooltiptext");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animation_speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const tooltip = tooltips[barOneIdx];
          barOneStyle.height = `${newHeight}px`;
          tooltip.innerHTML = newHeight;
          if (i == animations.length - 1) this.enableAll();
        }, i * this.state.animation_speed);
      }
    }
  }

  quickSort() {
    this.disableAll();
    const [animations, temp] = getquickSortAnimations(this.state.array.slice());
    console.log(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const tooltips = document.getElementsByClassName("tooltiptext");
      const isColorChange = i % 4 < 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animation_speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const tooltip = tooltips[barOneIdx];
          barOneStyle.height = `${newHeight}px`;
          tooltip.innerHTML = newHeight;
          if (i == animations.length - 1) this.enableAll();
        }, i * this.state.animation_speed);
      }
    }
  }

  afterSort() {}

  heapSort() {
    this.disableAll();
    const [animations, temp] = getHeapSortAnimations(
      this.state.array.slice(),
      this.state.arr_size
    );
    console.log(this.state.array);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const tooltips = document.getElementsByClassName("tooltiptext");
      const isColorChange = i % 4 < 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animation_speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const tooltip = tooltips[barOneIdx];
          barOneStyle.height = `${newHeight}px`;
          tooltip.innerHTML = newHeight;
          if (i == animations.length - 1) this.enableAll();
        }, i * this.state.animation_speed);
      }
    }
  }

  bubbleSort() {
    this.disableAll();
    this.setState({ showmsg: true });
    setTimeout(() => {
      this.setState({ showmsg: false });
    }, 3000);
    const [animations, temp] = getBubbleSortAnimations(
      this.state.array.slice()
    );
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const tooltips = document.getElementsByClassName("tooltiptext");
      const isColorChange = i % 4 < 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animation_speed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const tooltip = tooltips[barOneIdx];
          barOneStyle.height = `${newHeight}px`;
          tooltip.innerHTML = newHeight;
          if (i == animations.length - 1) this.enableAll();
        }, i * this.state.animation_speed);
      }
    }
  }

  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(40, 150);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(1, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const [tempArray3, sortedArray3] = getquickSortAnimations(array.slice());
      const [tempArray, sortedArray] = getMergeSortAnimations(array.slice());
      const [tempArray2, sortedArray2] = getHeapSortAnimations(
        array.slice(),
        array.length
      );

      if (arraysAreEqual(javaScriptSortedArray, sortedArray2) == false) {
        console.log(array.slice());
        console.log(sortedArray2);
      }
    }
  }

  handleSizeChange(e) {
    this.setState({ arr_size: e.target.value }, () => {
      const array = [];
      for (let i = 0; i < this.state.arr_size; i++) {
        array.push(randomIntFromInterval(1, 400));
      }
      this.setState({ array: array });
      console.log(this.state.arr_size);
    });
  }
  //<div className="tooltiptext">{this.state.arr_size}</div>

  render() {
    const { array } = this.state;

    return (
      <React.Fragment>
        <div className="grid-container-sort">
          <div className="header-sort">
            <div className>
              <div className="input-range">
                <p>
                  <b>Array Size: </b>
                </p>
                <input
                  type="range"
                  min="5"
                  max="200"
                  data-toggle="tooltip"
                  data-placement="left"
                  title={this.state.arr_size}
                  className="input-range"
                  disabled={this.state.sliderDisabled}
                  value={this.state.arr_size}
                  onChange={(e) => {
                    this.handleSizeChange(e);
                  }}
                  id="slider"
                />
              </div>
              <button
                id="resetArray"
                className="btn btn-dark hvr-sweep-to-right"
                disabled={this.state.resetArrayDisabled}
                type="button"
                onClick={() => this.resetArray()}
              >
                New Random List
              </button>
            </div>
            <div>
              <button
                id="mergeSort"
                disabled={this.state.mergeSortDisabled}
                className="btn hvr-sweep-to-right"
                onClick={() => this.mergeSort()}
              >
                Merge Sort
              </button>
            </div>
            <div>
              <button
                id="quickSort"
                disabled={this.state.quickSortDisabled}
                className="btn hvr-sweep-to-right"
                onClick={() => this.quickSort()}
              >
                Quick Sort
              </button>
            </div>
            <div>
              <button
                id="heapSort"
                disabled={this.state.heapSortDisabled}
                className="btn hvr-sweep-to-right"
                onClick={() => this.heapSort()}
              >
                Heap Sort
              </button>
            </div>
            <div>
              <button
                id="bubbleSort"
                disabled={this.state.bubbleSortDisabled}
                className="btn hvr-sweep-to-right"
                onClick={() => this.bubbleSort()}
              >
                Bubble Sort
              </button>
            </div>
            <button
              className="btn"
              style={{ display: "None" }}
              onClick={() => this.testSortingAlgorithms()}
            >
              Test
            </button>
          </div>
          <div className="middle-sort">
            <h1
              style={{
                fontFamily: `Montserrat, sans-serif`,
                background: `transparent`,
                fontSize: `14px`,
                margin: `0.4em 0`,
              }}
            >
              Technologies:
              <span
                className="txt-rotate"
                data-period="1000"
                data-rotate='[ " HTML5", " CSS3", " React", " Javascript" ]'
              ></span>
            </h1>
            <div
              id="bars"
              style={{
                position: "relative",
                height: "100%",
              }}
            >
              {array.map((value, idx) => (
                <div
                  className="array-bar"
                  key={idx}
                  style={{
                    backgroundColor: PRIMARY_COLOR,
                    height: `${value}px`,
                    width: `5px`,
                    margin: `0px 1px`,
                    overflow: `hidden`,
                  }}
                >
                  <div className="tooltiptext">{value}</div>
                </div>
              ))}
            </div>

            <div
              id="msg"
              style={{
                display: this.state.showmsg ? "block" : "None",
                position: `fixed`,
                width: `500px`,
                height: `100px`,
                top: `50%`,
                left: `50%`,
                color: `gray`,
                fontWeight: "bold",
                backgroundColor: "#fff",
                textAlign: "center",
                marginTop: `-100px`,
                marginLeft: `-250px`,
              }}
            >
              SPOILERS! BubbleSort is a bit slow --> O(N^2)
            </div>
          </div>
        </div>
        <div className="footer">
          <p>
            <b>
              Visualizing Sorting Algorithms, Developed with React Framework.
              Written by Ashkan Bashiri.
            </b>
          </p>
        </div>
      </React.Fragment>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
