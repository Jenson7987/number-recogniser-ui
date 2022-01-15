import './App.css';
import SignatureCanvas from 'react-signature-canvas'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "500px", height: "500px", border: "1px solid #000" }}>
          <SignatureCanvas
            canvasProps={{
              width: 500, 
              height: 500, 
              className: "sigCanvas"
            }}
          />
        </div>        
      </header>
    </div>
  );
}

export default App;
