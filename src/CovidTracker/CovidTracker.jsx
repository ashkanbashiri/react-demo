import React from "react";
import "./CovidTracker.scss";
import { Line, Bar } from "react-chartjs-2";
import Select from "react-select";

// Change this value for the speed of the animations.

// Change this value for the number of bars (value) in the array.

// This is the main color of the array bars.

export default class CovidTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleCountryChange = this.handleCountryChange.bind(this);

    this.state = {
      isLoading: false,
      summary: [],
      countries: [],
      country_data: [],
      labels: [],
      datasets: [],
      selectedCountry: "",
      options: [],
      bar_data: {},
    };
  }
  handleCountryChange = (selectedOption) => {
    this.setState({ selectedCountry: selectedOption.value }, () => {
      const select_ = this.state.country_data.filter(
        (element) => element.country == this.state.selectedCountry
      );
      var bar_data = {
        labels: select_[0].dates,
        datasets: [
          {
            label: "#Confirmed",
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(33,47,61,1)",
            borderColor: "rgba(33,47,61,1)",
            borderWidth: 1,
            data: select_[0].confirmed.map(function (item, index) {
              // In this case item correspond to currentValue of array a,
              // using index to get value from array b
              return item - select_[0].confirmed[index - 1] || 0;
            }),
          },
          {
            label: "#Deaths",
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(205,92,92,1)",
            borderColor: "rgba(205,92,92,1)",
            borderWidth: 1,
            data: select_[0].deaths.map(function (item, index) {
              // In this case item correspond to currentValue of array a,
              // using index to get value from array b
              return item - select_[0].deaths[index - 1] || 0;
            }),
          },
          {
            label: "#Recovered",
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(72,201,176,1)",
            borderColor: "rgba(72,201,176,1)",
            borderWidth: 1,
            data: select_[0].recovered.map(function (item, index) {
              // In this case item correspond to currentValue of array a,
              // using index to get value from array b
              return item - select_[0].recovered[index - 1] || 0;
            }),
          },
        ],
      };
      var labels = select_[0].dates;
      var datasets = [
        {
          label: "#Confirmed",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(33,47,61,1)",
          borderColor: "rgba(33,47,61,1)",
          borderWidth: 1,
          data: select_[0].confirmed,
        },
        {
          label: "#Deaths",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(205,92,92,1)",
          borderColor: "rgba(205,92,92,1)",
          borderWidth: 1,
          data: select_[0].deaths,
        },
        {
          label: "#Recovered",
          fill: false,
          lineTension: 0.5,
          backgroundColor: "rgba(72,201,176,1)",
          borderColor: "rgba(72,201,176,1)",
          borderWidth: 1,
          data: select_[0].recovered,
        },
      ];
      this.setState(
        { labels: labels, datasets: datasets, bar_data: bar_data },
        () => {
          this.setState({
            labels: labels,
            datasets: datasets,
            bar_data: bar_data,
          });
        }
      );
    });
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    const options = [];
    const months = [
      "Jan ",
      "Feb ",
      "Mar ",
      "Apr ",
      "May ",
      "Jun ",
      "Jul ",
      "Aug ",
      "Sep ",
      "Oct ",
      "Nov ",
      "Dec ",
    ];
    fetch("https://api.covid19api.com/all")
      .then((response) => {
        return response.json();
      })
      .then((all) => {
        let countries = [];
        const country_data = [];
        all.forEach((element) => {
          if (!countries.includes(element.Country)) {
            countries.push(element.Country);
            let date_ = new Date(element.Date);
            country_data.push({
              country: element.Country,
              confirmed: [element.Confirmed],
              deaths: [element.Deaths],
              recovered: [element.Recovered],
              active: [element.Active],
              dates: [months[date_.getMonth()] + date_.getDate()],
            });
            options.push({ value: element.Country, label: element.Country });
          } else {
            let date_ = new Date(element.Date);

            if (
              !country_data
                .filter((data) => data.country === element.Country)[0]
                .dates.includes(months[date_.getMonth()] + date_.getDate())
            ) {
              country_data
                .filter((data) => data.country === element.Country)[0]
                .confirmed.push(element.Confirmed);
              country_data
                .filter((data) => data.country === element.Country)[0]
                .deaths.push(element.Deaths);
              country_data
                .filter((data) => data.country === element.Country)[0]
                .recovered.push(element.Recovered);
              country_data
                .filter((data) => data.country === element.Country)[0]
                .active.push(element.Active);
              country_data
                .filter((data) => data.country === element.Country)[0]
                .dates.push(months[date_.getMonth()] + date_.getDate());
            } else {
              country_data.filter(
                (data) => data.country === element.Country
              )[0].confirmed[
                country_data
                  .filter((data) => data.country === element.Country)[0]
                  .dates.indexOf(months[date_.getMonth()] + date_.getDate())
              ] += element.Confirmed;

              country_data.filter(
                (data) => data.country === element.Country
              )[0].deaths[
                country_data
                  .filter((data) => data.country === element.Country)[0]
                  .dates.indexOf(months[date_.getMonth()] + date_.getDate())
              ] += element.Deaths;

              country_data.filter(
                (data) => data.country === element.Country
              )[0].recovered[
                country_data
                  .filter((data) => data.country === element.Country)[0]
                  .dates.indexOf(months[date_.getMonth()] + date_.getDate())
              ] += element.Recovered;

              country_data.filter(
                (data) => data.country === element.Country
              )[0].active[
                country_data
                  .filter((data) => data.country === element.Country)[0]
                  .dates.indexOf(months[date_.getMonth()] + date_.getDate())
              ] += element.Active;
            }
          }
        });
        this.setState({ options });
        this.setState({ countries });
        this.setState({ country_data });
        this.setState({ isLoading: false });
        console.log(country_data);
      });
  }

  rnd_range(mn, mx) {
    return Math.random() * (mx - mn) + mn;
  }

  render() {
    if (this.state.isLoading) {
      return <p>Fetching Covid-19 data...</p>;
    }
    return (
      <React.Fragment>
        <div className="grid-container">
          <div className="header">
            <h1>Covid19 Tracker App</h1>
          </div>

          <p className="label">Select a Country (Daily Updates):</p>
          <div className="selector1">
            <Select
              onChange={this.handleCountryChange}
              options={this.state.options}
              autoFocus={true}
            />
          </div>

          <div className="middle">
            <Line
              data={this.state}
              options={{
                maintainAspectRatio: true,
                responsive: true,
                title: {
                  display: true,
                  text: "Statistics for " + this.state.selectedCountry,
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
            <br></br>
            <Line
              ref={this.chartReference}
              data={this.state.bar_data}
              options={{
                maintainAspectRatio: true,
                responsive: true,
                title: {
                  display: true,
                  text: "Daily statistics for " + this.state.selectedCountry,
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
          <div className="footer">
            <p>
              <b>
                Visualizing Covid19 data, Developed with React Framework.
                Written by Ashkan Bashiri.
              </b>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
