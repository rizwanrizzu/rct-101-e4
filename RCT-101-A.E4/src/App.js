import React, { useEffect, useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import "./styles.css";
import axios from "axios";
import CityRow from "./components/CityRow"

export default function App() {
  const [data, setData] = useState([{}]);

  const handleData = () => {
    axios.get("https://json-server-mocker-masai.herokuapp.com/cities").then((res)=>{
      setData(res.data)
    })
  }
  useEffect(()=>{
    handleData()
  }, [])

  return (
    <div className="App">
      <div id="loading-container"></div>
      <table>
        <tr>
          <th>
            ID
          </th>
          <th>
            CITY NAME
          </th>
          <th>
            COUNTRY NAME
          </th>
          <th>
            POPULATION
          </th>
          </tr>
          {
            <CityRow data={data}/>
         }
      </table>

      <div>
        <ButtonComponent id="SORT_BUTTON" title={`Sort by Increasing Population`} />
        <ButtonComponent title="PREV" id="PREV" />
        <ButtonComponent id="NEXT" title="NEXT" />
      </div>
    </div>
  );
}
