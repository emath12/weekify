import './App.css';
import InputForm from './input_form_base.js'
// import './debug.css';

function App() {
  return (
    <div className="App">
      <div className = "App-header">
        <h1> Weekify</h1>
      </div>

      <div className = "Calendar">

        <div className = "times">
          <time>8:00 AM</time>
          <time>9:00 AM</time>
          <time>10:00 AM</time>
          <time>11:00 AM</time>
          <time>12:00 PM</time>
          <time>1:00 PM</time>
          <time>2:00 PM</time>
          <time>3:00 PM</time>
          <time>4:00 PM</time>
          <time>5:00 PM</time>
          <time>6:00 PM</time>
          <time>7:00 PM</time>
          <time>8:00 PM</time>
        </div>

        <div className = "header">
          <div className = "day">
              <h1 style={{color: "#CCDBDC"}}>Monday</h1>
          </div>
          <div className = "day">
              <h1 style={{color: "#9AD1D4"}}>Tuesday</h1>
          </div>
          <div className = "day">
              <h1 style={{color: "#80CED7"}}>Wednesday</h1>
          </div>
          <div className = "day">
              <h1 style={{color: "#007EA7"}}>Thursday</h1>
          </div>
          <div className = "day">
              <h1 style={{color: "rgb(36, 98, 127)"}}>Friday</h1>
          </div>

        </div>

        <div className = "days">
          <div className = "day" style={{backgroundColor: "rgb(204, 219, 220, 0.5)"}}>
             <monday>Hello</monday>
             <monday>Hello</monday>
           </div>

          <div className = "day" style={{backgroundColor: "rgb(154, 209, 212,0.5)"}}>
            <tuesday>Hello</tuesday>
           </div>

          <div className = "day" style={{backgroundColor: "rgb(128, 206, 215, 0.5)"}}>
            <wednesday>Hello</wednesday>
          </div>

          <div className = "day" style={{backgroundColor: "rgb(0, 126, 167, 0.5)"}}>
            <thursday>Hello</thursday>
           </div>

          <div className = "day" style={{backgroundColor: "rgb(36, 98, 127, 0.5)"}}>
            <friday>Hello</friday>
          </div>
        </div>
      </div>


        <div className = "formPackage">
          <div></div>
          <div> <InputForm/></div>
         </div>



    </div>
  );
}

export default App;
