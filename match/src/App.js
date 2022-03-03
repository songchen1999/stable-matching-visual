import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Man">
          <div>
          Alex 
          <ul className="PreferList">
            <li style={{display:"inline"}}>F</li>
            <li style={{display:"inline"}}>G</li>
            <li style={{display:"inline"}}>H</li>
            <li style={{display:"inline"}}>I</li>
            <li style={{display:"inline"}}>J</li>
          </ul>
          </div>
          <div>Bob</div>
          <div>Chad</div>
          <div>Darius</div>
          <div>Eli</div>
          <div>Proposer</div>
      </div>
      
      <div className="Woman">
          <div>Felicia</div>
          <div>Grace</div>
          <div>Helen</div>
          <div>Ivy</div>
          <div>Judy</div>
          <div>Proposer</div>
      </div>
    </div>
  );
}

export default App;
