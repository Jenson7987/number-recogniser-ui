import './App.css';
import SignatureCanvas from 'react-signature-canvas'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  {
    name: "0",
    Confidence: 10,
    amt: 400
  },
  {
    name: "1",
    Confidence: 20,
    amt: 2210
  },
  {
    name: "2",
    Confidence: 30,
    amt: 2290
  },
  {
    name: "3",
    Confidence: 40,
    amt: 2000
  },
  {
    name: "4",
    Confidence: 50,
    amt: 2181
  },
  {
    name: "5",
    Confidence: 60,
    amt: 2500
  },
  {
    name: "6",
    Confidence: 70,
    amt: 2100
  },
  {
    name: "7",
    Confidence: 80,
    amt: 2100
  },
  {
    name: "8",
    Confidence: 90,
    amt: 2100
  },
  {
    name: "9",
    Confidence: 100,
    amt: 2100
  }
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "300px", height: "400px", border: "1px solid #000" }}>
          <SignatureCanvas
            canvasProps={{
              width: 300,
              height: 400,
              className: "sigCanvas"
            }}
          />
        </div>
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
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Confidence" fill="#8884d8" />
        </BarChart>
      </header>
    </div>
  );
}

export default App;
