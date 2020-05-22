import React from "react";
import "./CovidSummary.scss";

import { MDBDataTable } from "mdbreact";
export default class CovidSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const data = {
      columns: [
        {
          label: "Country",
          field: "name",
          sort: "asc",
          width: 150,
        },
        {
          label: "totalConfirmed",
          field: "totalConfirmed",
          sort: "desc",
          width: 100,
        },
        {
          label: "newConfirmed",
          field: "newConfirmed",
          sort: "desc",
          width: 100,
        },
        {
          label: "totalDeaths",
          field: "totalDeaths",
          sort: "desc",
          width: 100,
        },
        {
          label: "newDeaths",
          field: "newDeaths",
          sort: "desc",
          width: 100,
        },
        {
          label: "totalRecovered",
          field: "totalRecovered",
          sort: "desc",
          width: 100,
        },
        {
          label: "newRecovered",
          field: "newRecovered",
          sort: "desc",
          width: 100,
        },
        {
          label: "lastUpdate",
          field: "lastUpdate",
          sort: "desc",
          width: 150,
        },
      ],
      rows: [],
    };
    fetch("https://api.covid19api.com/summary")
      .then((response) => {
        return response.json();
      })
      .then((all) => {
        let global = {
          name: "Global",
          totalConfirmed: all.Global.TotalConfirmed,
          newConfirmed: all.Global.NewConfirmed,
          totalDeaths: all.Global.TotalDeaths,
          newDeaths: all.Global.NewDeaths,
          totalRecovered: all.Global.TotalRecovered,
          newRecovered: all.Global.NewRecovered,
          lastUpdate: "",
        };
        data.rows.push(global);
        all.Countries.forEach((element) => {
          let country_row = {
            name: element.Country,
            totalConfirmed: element.TotalConfirmed,
            newConfirmed: element.NewConfirmed,
            totalDeaths: element.TotalDeaths,
            newDeaths: element.NewDeaths,
            totalRecovered: element.TotalRecovered,
            newRecovered: element.NewRecovered,
            lastUpdate: element.Date,
          };
          data.rows.push(country_row);
        });

        this.setState({ data });
      });
  }
  render() {
    return (
      <React.Fragment>
        <div className="grid-container-summary">
          <div className="header-summary">
            <h1>Covid19 Summary Table</h1>
          </div>
          <div className="middle-summary">
            <MDBDataTable striped responsive hover data={this.state.data} />
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
