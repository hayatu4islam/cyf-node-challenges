import React, { useState, useEffect } from "react";
import './App.css';


function App() {

  const [data, setData] = useState([]);
  const [city, setCity] = useState("harrow");
  const [category, setCategory] = useState("pharmacies");

  useEffect(() => {
    fetch(`http://localhost:3002/${city}/${category}`)
      .then((response) => response.json())
      .then((datas) => setData(datas))
      .catch(e => console.log(e));
  }, [city, category]);
  
  return (
    <div className="App">
      <h1>City Mini Guide</h1>
      <hr></hr>
      <div className="city-select">
        <label>Select a city</label>
        <select
          name="cities"
          defaultValue={{ value: "harrow" }}
          onChange={(event) => setCity(event.target.value.toLowerCase())}
        >
          <option value="select">Select a city</option>
          <option value="harrow">Harrow</option>
          <option value="heathrow">Heathrow</option>
          <option value="stratford">Stratford</option>
        </select>
      </div>
      <hr></hr>
      <div className="buttons">
        <button
          value="pharmacies"
          onClick={(event) => setCategory(event.target.value.toLowerCase())}
        >
          Pharmacies
        </button>
        <button
          value="colleges"
          onClick={(event) => setCategory(event.target.value.toLowerCase())}
        >
          Schools & Colleges
        </button>
        <button
          value="hospitals"
          onClick={(event) => setCategory(event.target.value.toLowerCase())}
        >
          Hospitals
        </button>
        <button
          value="doctors"
          onClick={(event) => setCategory(event.target.value.toLowerCase())}
        >
          Doctors
        </button>
      </div>
      <hr></hr>
      <div className="result-table">
        <table rules="rows">
          <thead>
            <tr>
              <td style={{ minWidth: 50 }}>
                <b>#</b>
              </td>
              <td style={{ minWidth: 120 }}>
                <b>Name</b>
              </td>
              <td style={{ minWidth: 120 }}>
                <b>Phone</b>
              </td>
              <td>
                <b>Address</b>
              </td>
              <td>
                <b>Website</b>
              </td>
            </tr>
          </thead>
          {data &&
            data.length > 0 &&
            data.map((obj, key) => {
              return (
                <tbody>
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{obj["name"]}</td>
                    <td>{obj["phone"]}</td>
                    <td>{obj["address"]}</td>
                    <td>{obj["website"]}</td>
                  </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default App;
