import './App.css';
import { useState, useEffect } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList
} from "recharts";
import axios from 'axios'
import runtimeEnv from '@mars/heroku-js-runtime-env';


function App() {
  let [data, setData] = useState([]);

  useEffect(() => {
    submitImage();
  }, []);

  let sigPadRef;

  function clearPad() {
    sigPadRef.clear()
    setData([
      { name: "0", confidence: 0 },
      { name: "1", confidence: 0 },
      { name: "2", confidence: 0 },
      { name: "3", confidence: 0 },
      { name: "4", confidence: 0 },
      { name: "5", confidence: 0 },
      { name: "6", confidence: 0 },
      { name: "7", confidence: 0 },
      { name: "8", confidence: 0 },
      { name: "9", confidence: 0 },
    ])
  }

  function submitImage() {
    var dataURL = sigPadRef.toDataURL()
    if (!sigPadRef.isEmpty()) {
      const env = runtimeEnv();
      axios.post(
        env.REACT_APP_NUMBER_RECOGNISER_SERVICE_URL,
        { image: dataURL }
      )
        .then(response => {
          console.log("Response = " + JSON.stringify(response.data));
          setData([
            { name: "0", confidence: response.data["0"] },
            { name: "1", confidence: response.data["1"] },
            { name: "2", confidence: response.data["2"] },
            { name: "3", confidence: response.data["3"] },
            { name: "4", confidence: response.data["4"] },
            { name: "5", confidence: response.data["5"] },
            { name: "6", confidence: response.data["6"] },
            { name: "7", confidence: response.data["7"] },
            { name: "8", confidence: response.data["8"] },
            { name: "9", confidence: response.data["9"] },
          ])
        })
        .catch(error => {
          console.log("Error = " + error);
        })
    } else {
      setData([
        { name: "0", confidence: 0 },
        { name: "1", confidence: 0 },
        { name: "2", confidence: 0 },
        { name: "3", confidence: 0 },
        { name: "4", confidence: 0 },
        { name: "5", confidence: 0 },
        { name: "6", confidence: 0 },
        { name: "7", confidence: 0 },
        { name: "8", confidence: 0 },
        { name: "9", confidence: 0 },
      ])
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "280px", height: "280px", border: "1px solid #000" }}>
          <SignatureCanvas
            ref={ref => (sigPadRef = ref)}
            canvasProps={{
              width: 280,
              height: 280,
              className: "sigCanvas",
            }}
            backgroundColor="rgb(255, 255, 255)"
            minWidth={12}
            maxWidth={12}
            velocityFilterWeight={0}
          />
        </div>
        <p align="left">
          <input type="button" value="Clear" onClick={clearPad}/>
          <input type="button" value="Submit" onClick={submitImage}/>
        </p>

        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 25,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis 
            ticks={[20, 40, 60, 80, 100]}  
            domain={[0, 100]}  
          />
          <Tooltip />
          <Legend wrapperStyle={{bottom: -30, left: 50}} />
          <Bar dataKey="confidence" fill="#8884d8">
            <LabelList dataKey="confidence" position="top" />
          </Bar>
        </BarChart>
      </header>
    </div>
  );
}

export default App;
