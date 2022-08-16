import React from 'react';
import './App.css';
import logo from "./Refresh.png"


var dict = {
  "Monday" : "0/1",
  "Tuesday" : "1/2",
  "Wednesday": "2/3",
  "Thursday" : "3/4",
  "Friday" : "4/5",
  "8:00AM" : "1",
  "8:30AM": "2",
  "9:00AM" : "3",
  "9:30AM": "4",
  "10:00AM" : "5",
  "10:30AM": "6",
  "11:00AM" : "7",
  "11:30AM": "8",
  "12:00PM" : "9",
  "12:30PM": "10",
  "1:00PM" : "11",
  "1:30PM": "12",
  "2:00PM" : "13",
  "2:30PM": "14",
  "3:00PM" : "15",
  "3:30PM": "16",
  "4:00PM" : "17",
  "4:30PM": "18",
  "5:00PM" : "19",
  "5:30PM": "20",
  "6:00PM" : "21",
  "6:30PM": "22",
  "7:00PM" : "23",
  "7:30PM": "24",
  "8:00PM": "25",
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
  
    resetCal = () => {
      var initial_state = {
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
  
      this.setState(
        initial_state
      );
      
  }

  onSubmit = event => {
    var pick;
    event.preventDefault();
    if (this.day.value == "Monday") {
      pick = this.state.monday;
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

    this.setState({
      pick: data
    })

   };

   

  render() {
      return (
        <div className="App">
          <div className = "App-header">
            <h1> Weekify
              <img src={logo} onClick={this.resetCal} style = {{width: "30px", filter:"brightness(0) invert(1) "}}/>
            </h1>

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
                    this.state.monday.map((info) => {
                      if((info.day !== '') && (info.task !== '') && (info.start_time !== '') && (info.end_time !== '')) {
                          return (
                            <monday style={{gridRow: "" +  dict[info.start_time] + "/" + dict[info.end_time]}}>
                              {info.task}
                            </monday>
                          )
                        }
                      }
                    )
                  }
              </div>

              <div className = "day" style={{backgroundColor: "rgb(154, 209, 212,0.5)"}}>
                    {

                      this.state.tuesday.map((info) => {

                        if((info.day !== '') && (info.task !== '') && (info.start_time !== '') && (info.end_time !== '')) {
                            return (
                              <tuesday style={{gridRow: "" +  dict[info.start_time] + "/" + dict[info.end_time]}}>
                                {info.task}
                              </tuesday>
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
                        this.state.wednesday.map((info) => {
                          if((info.day !== '') && (info.task !== '') && (info.start_time !== '') && (info.end_time !== '')) {
                              return (
                                <wednesday style={{gridRow: "" +  dict[info.start_time] + "/" + dict[info.end_time]}}>
                                  {info.start_time} - {info.end_time}
                                  <br></br>
                                  {info.task}
                                </wednesday>
                              )
                            }
                          }
                        )
                      }
              </div>

              <div className = "day" style={{backgroundColor: "rgb(0, 126, 167, 0.5)"}}>
                {
                      this.state.thursday.map((info) => {
                        if((info.day !== '') && (info.task !== '') && (info.start_time !== '') && (info.end_time !== '')) {
                            return (
                              <thursday style={{gridRow: "" +  dict[info.start_time] + "/" + dict[info.end_time]}}>
                                {info.task}
                              </thursday>

                            )
                          }
                        }
                      )
                    }
              </div>

              <div className = "day" style={{backgroundColor: "rgb(36, 98, 127, 0.5)"}}>
                {
                    this.state.friday.map((info) => {
                      if((info.day !== '') && (info.task !== '') && (info.start_time !== '') && (info.end_time !== '')) {
                          return (
                            <friday style={{gridRow: "" +  dict[info.start_time] + "/" + dict[info.end_time]}}>
                              {info.task}
                            </friday>
                          )
                        }
                      }
                    )
                  }
              </div>

            </div>
          </div>

          <div className="formPackage">
            <form onSubmit={this.onSubmit} style={{gridColumn: "2/3"}}>
      

              <div className = "thisform">
                <div className = "form-group" style={{gridRow: "1/2", gridColumn: "1/3"}}>
                  <select className = "data-get" id="weekdays" name="days" ref={input => this.day = input}>
                    <option value="selectcard">--- Select a Day ---</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                  </select>
                </div>
                <div className = "form-group" style={{gridRow: "2/3", gridColumn: "1/2"}}>
                    <select  className = "data-get" id="weekdays" name="days"  style={{width: "1fr"}} ref={input => this.start_time = input}>
                      <option value="selectcard">--- Start ---</option>
                      <option id="1" value="8:00AM">8:00AM</option>
                      <option id="2" value="8:30AM">8:30AM</option>
                      <option id="3 "value="9:00AM">9:00AM</option>
                      <option id="4" value="9:30AM">9:30AM</option>
                      <option id="5" value="10:00AM">10:00AM</option>
                      <option id="6" value="10:30AM">10:30AM</option>
                      <option id="7" value="11:00AM">11:00AM</option>
                      <option id="8" value="11:30AM">11:30AM</option>
                      <option id="9" value="12:00PM">12:00PM</option>
                      <option id="10" value="12:30PM">12:30PM</option>
                      <option id="11" value="1:00PM">1:00PM</option>
                      <option id="12" value="1:30PM">1:30PM</option>
                      <option id="13" value="2:00PM">2:00PM</option>
                      <option id="14" value="2:30PM">2:30PM</option>
                      <option id="15" value="3:00PM">3:00PM</option>
                      <option id="16" value="3:30PM">3:30PM</option>
                      <option id="17" value="4:00PM">4:00PM</option>
                      <option id="18" value="4:30PM">4:30PM</option>
                      <option id="19" value="5:00PM">5:00PM</option>
                      <option id="20" value="5:30PM">5:30PM</option>
                      <option id="21" value="6:00PM">6:00PM</option>
                      <option id="22" value="6:30PM">6:30PM</option>
                      <option id="23" value="7:00PM">7:00PM</option>
                      <option id="24" value="7:30PM">7:30PM</option>
                      <option id="25" value="8:00PM">8:00PM</option>
                    </select>
                  </div>
                  <div className = "form-group" style={{gridRow: "2/3", gridColumn: "2/3"}}>
                    <select  className = "data-get" id="weekdays" name="days" ref={input => this.end_time = input} style={{width: "1fr"}}>
                      <option className = "placeholder" value="selectcard">--- End ---</option>
                      <option id="26" value="8:00AM">8:00AM</option>
                      <option id="27" value="8:30AM">8:30AM</option>
                      <option id="28" value="9:00AM">9:00AM</option>
                      <option id="29" value="9:30AM">9:30AM</option>
                      <option id="30" value="10:00AM">10:00AM</option>
                      <option id="31" value="10:30AM">10:30AM</option>
                      <option id="32" value="11:00AM">11:00AM</option>
                      <option id="33" value="11:30AM">11:30AM</option>
                      <option id="34" value="12:00PM">12:00PM</option>
                      <option id="35" value="12:30PM">12:30PM</option>
                      <option id="36" value="1:00PM">1:00PM</option>
                      <option id="37" value="1:30PM">1:30PM</option>
                      <option id="38" value="2:00PM">2:00PM</option>
                      <option id="39" value="2:30PM">2:30PM</option>
                      <option id="40" value="3:00PM">3:00PM</option>
                      <option id="41" value="3:30PM">3:30PM</option>
                      <option id="42" value="4:00PM">4:00PM</option>
                      <option id="43" value="4:30PM">4:30PM</option>
                      <option id="44" value="5:00PM">5:00PM</option>
                      <option id="45"  value="5:30PM">5:30PM</option>
                      <option id="46" value="6:00PM">6:00PM</option>
                      <option id="47" value="6:30PM">6:30PM</option>
                      <option id="48" value="7:00PM">7:00PM</option>
                      <option id="49" value="7:30PM">7:30PM</option>
                      <option id="50" value="8:00PM">8:00PM</option>
                    </select>
                  </div>
                  <div className = "form-group" style={{gridRow: "3/4", gridColumn: "1/3", width: "97%"}}>
                    <div>
                      <input
                        type="text"
                        className="data-get"
                        placeholder="Task"
                        ref={input => this.task = input}
                        maxLength="30"
                        />   
                      </div>
                  </div>

                  <div className = "form-group" style={{gridRow: "4/5", gridColumn: "1/3"}}>
                    <button
                      className = "submit-button"
                      type="submit"
                      >Submit
                      </button>
                  </div>

                  <div style={{gridColumn: "1/3", gridRow: "5/6", opacity: "0.5"}}> By: Taimur Moolji and Ethan Matheiu </div>
                </div>

              </form>
            </div>
    </div>
      );
  }
}
export default App;
