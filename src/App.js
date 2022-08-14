import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';

// import './debug.css';

var dict = {
  "Monday" : "0/1",  
  "Tuesday" : "1/2",
  "Wednesday": "2/3",
  "Thursday" : "3/4",
  "Friday" : "4/5",  
  "8:00AM" : "0",
  "8:30AM": "1",
  "9:00AM" : "2",
  "9:30AM": "3",
  "10:00AM" : "4",
  "10:30AM": "5",
  "11:00AM" : "6",
  "11:30AM": "7",
  "12:00PM" : "8",
  "12:30PM": "9",
  "1:00PM" : "10",
  "1:30PM": "11",
  "2:00PM" : "12",
  "2:30PM": "13",
  "3:00PM" : "14",
  "3:30PM": "15",
  "4:00PM" : "16",
  "4:30PM": "17",
  "5:00PM" : "18",
  "5:30PM": "19",
  "6:00PM" : "20",
  "6:30PM": "21",
  "7:00PM" : "22",
  "7:30PM": "23",
  "8:00PM": "24",
};


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        monday : [
          {
            day: '',
            start_time: '',
            end_time: '',
            task: ''
          }
        ],
        tuesday : [
          {
            day: '',
            start_time: '',
            end_time: '',
            task: ''
          }
        ],
        wednesday : [
          {
            day: '',
            start_time: '',
            end_time: '',
            task: ''
          }
        ],
        thursday : [
          {
            day: '',
            start_time: '',
            end_time: '',
            task: ''
          }
        ],
        friday : [
          {
            day: '',
            start_time: '',
            end_time: '',
            task: ''
          }
        ]
      }

    }
  
  onSubmit = event => {
    var pick;
    event.preventDefault();
    if (this.day.value == "Monday") {
      pick = this.state.monday;
      console.log("made it!");
    } else if (this.day.value == "Tuesday") {
      pick = this.state.tuesday;
    } else if (this.day.value == "Wednesday")  {
      pick = this.state.wednesday;   
    } else if (this.day.value == "Thursday") {
      pick = this.state.thursday;
    } else {
      pick = this.state.friday;
    }

    const day = this.day.value;
    const start_time = this.start_time.value;
    const end_time = this.end_time.value;
    const task = this.task.value;

    const info = {day: day, start_time: start_time, end_time: end_time, task: task};
    const data = pick.push(info);

    console.log(data);

    this.setState({
      pick: data
    })
  
   };

  render() {
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
                  {                      
                    this.state.monday.map((info, index) => {
                      console.log("info when passed: " + info.day);
                      if((info.day !== '') && (info.task !== '') && (info.start_time !== '') && (info.end_time !== '')) {
                          return (
                            <div style={{gridColumnStart: dict[info.start_time], gridColumnEnd: dict[info.end_time]}}>
                              <Card key={index} info={info}/>
                            </div>
                          )
                        }
                      } 
                    )
                  }
              </div>

              <div className = "day" style={{backgroundColor: "rgb(154, 209, 212,0.5)"}}>
                    {
                      
                      this.state.tuesday.map((info, index) => {
          
                        if((info.day !== '') && (info.task !== '') && (info.start_time !== '') && (info.end_time !== '')) {
                            return (
                              <div style={{gridColumnStart: dict[info.start_time], gridColumnEnd: dict[info.end_time]}}>
                                <Card key={index} info={info}/>
                              </div>
                            )
                          }
                        else {
                          console.log("invalid");
                        }
                        } 
                      )
                    }
              </div>

              <div className = "day" style={{backgroundColor: "rgb(128, 206, 215, 0.5)"}}>
                      {
                        this.state.wednesday.map((info, index) => {
                          if((info.day !== '') && (info.task !== '') && (info.start_time !== '') && (info.end_time !== '')) {
                              return (
                                <div style={{gridColumnStart: dict[info.start_time], gridColumnEnd: dict[info.end_time]}}>
                                  <Card key={index} info={info}/>
                                </div>
                              )
                            }
                          } 
                        )
                      }
              </div>

              <div className = "day" style={{backgroundColor: "rgb(0, 126, 167, 0.5)"}}>
                {      
                      this.state.thursday.map((info, index) => {
                        if((info.day !== '') && (info.task !== '') && (info.start_time !== '') && (info.end_time !== '')) {
                            return (
                              <div style={{gridColumnStart: dict[info.start_time], gridColumnEnd: dict[info.end_time]}}>
                                <Card key={index} info={info}/>
                              </div>
            
                            )
                          }
                        } 
                      )
                    }
              </div>

              <div className = "day" style={{backgroundColor: "rgb(36, 98, 127, 0.5)"}}>
                {
                    this.state.friday.map((info, index) => {
                      if((info.day !== '') && (info.task !== '') && (info.start_time !== '') && (info.end_time !== '')) {
                          console.log("dict test:" + dict[info.start_time]);
                          return (
                            <div style={{gridColumnStart: dict[info.start_time], gridColumnEnd: dict[info.end_time]}}>
                              <Card key={index} info={info}/>
                            </div>
                          )
                        }
                      } 
                    )
                  }
              </div>

            </div>
          </div>

          <div className="input-form">

            <hr/>

            <div className="row">
              <form className="form-inline" onSubmit={this.onSubmit}>
                  <select id="weekdays" name="days" ref={input => this.day = input}>
                    <option value="selectcard">--- Select a Day ---</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                  </select>
                  <br></br>
                  <div>
                    <select id="weekdays" name="days" ref={input => this.start_time = input}>
                      <option value="selectcard">--- Select a Start Time ---</option>
                      <option value="8:00AM">8:00AM</option>
                      <option value="8:30AM">8:30AM</option>
                      <option value="9:00AM">9:00AM</option>
                      <option value="9:30AM">9:30AM</option>
                      <option value="10:00AM">10:30AM</option>
                      <option value="10:30AM">11:00AM</option>
                      <option value="11:00AM">11:00AM</option>
                      <option value="11:30AM">11:30AM</option>
                      <option value="12:00PM">12:00PM</option>
                      <option value="12:30PM">12:30PM</option>
                      <option value="1:00PM">1:00PM</option>
                      <option value="1:30PM">1:30PM</option>
                      <option value="2:00PM">2:00PM</option>
                      <option value="2:30PM">2:30PM</option>
                      <option value="3:00PM">3:00PM</option>
                      <option value="3:30PM">3:30PM</option>
                      <option value="4:00PM">4:00PM</option>
                      <option value="4:30PM">4:30PM</option>
                      <option value="5:00PM">5:00PM</option>
                      <option value="5:30PM">5:30PM</option>
                      <option value="6:00PM">6:00PM</option>
                      <option value="6:30PM">6:30PM</option>
                      <option value="7:00PM">7:00PM</option>
                      <option value="7:30PM">7:30PM</option>
                      <option value="8:00PM">8:00PM</option>
                    </select>
                    <select id="weekdays" name="days" ref={input => this.end_time = input}>
                      <option value="selectcard">--- Select an End Time ---</option>
                      <option value="8:00AM">8:00AM</option>
                      <option value="8:30AM">8:30AM</option>
                      <option value="9:00AM">9:00AM</option>
                      <option value="9:30AM">9:30AM</option>
                      <option value="10:00AM">10:30AM</option>
                      <option value="10:30AM">11:00AM</option>
                      <option value="11:00AM">11:00AM</option>
                      <option value="11:30AM">11:30AM</option>
                      <option value="12:00PM">12:00PM</option>
                      <option value="12:30PM">12:30PM</option>
                      <option value="1:00PM">1:00PM</option>
                      <option value="1:30PM">1:30PM</option>
                      <option value="2:00PM">2:00PM</option>
                      <option value="2:30PM">2:30PM</option>
                      <option value="3:00PM">3:00PM</option>
                      <option value="3:30PM">3:30PM</option>
                      <option value="4:00PM">4:00PM</option>
                      <option value="4:30PM">4:30PM</option>
                      <option value="5:00PM">5:00PM</option>
                      <option value="5:30PM">5:30PM</option>
                      <option value="6:00PM">6:00PM</option>
                      <option value="6:30PM">6:30PM</option>
                      <option value="7:00PM">7:00PM</option>
                      <option value="7:30PM">7:30PM</option>
                      <option value="8:00PM">8:00PM</option>
                    </select>
                  </div>
                  <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="task"
                      ref={input => this.task = input}/>
                  </div>  
                  
                  <button 
                      type="submit" 
                      className="btn btn-primary">Submit
                  </button>
              </form>
          </div>
      <hr/>

    </div>
    </div>
      );
  }
}

const Card = props =>
  <div className="Calender">
    <div className="card">
      <div className="card mb-3">
        <div className="card-body">
          <p className="card-title"><span>Day: </span>{props.info.day}</p>
          <p className="card-text">
            <span>Time: </span>{props.info.start_time} - {props.info.end_time}
          </p>
          <p className="card-text">
            <span>Task: </span>{props.info.task}
          </p>
        </div>
      </div>
    </div>
  </div>;

export default App;
