import './App.css';
import SignatureCanvas from 'react-signature-canvas'

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
      </header>
    </div>
  );
}

export default App;
