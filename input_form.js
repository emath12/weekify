import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';


class InputForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { // the dummy/default state
      data: [
        {
          day: '',
          time: '',
          task: ''
        },
      ]
    }
  }


  onSubmit = event => {
    event.preventDefault();
    const day = this.day.value;
    const time = this.time.value;
    const task = this.task.value;
    const info = {day: day, time: time, task: task};
    const data = [...this.state.data, info];
    this.setState({
      data: data
    });
   };

  render() {
    
    return (
        <div className="container">
          <h1>Render on Input DEMO (THATS WHY ITS UGLY)</h1>

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
              <select id="weekdays" name="days" ref={input => this.time = input}>
                <option value="selectcard">--- Select a Time ---</option>
                <option value="8:00AM-8:30AM">8:00AM-8:30AM</option>
                <option value="8:30AM-9:00AM">8:30AM-9:00AM</option>
                <option value="9:00AM-9:30AM">9:00AM-9:30AM</option>
                <option value="9:30AM-10:00AM<">9:30AM-10:00AM</option>
                <option value="10:30AM-11:00AM">10:30AM-11:00AM</option>
                <option value="11:30AM-12:00PM">11:30AM-12:00PM</option>
                <option value="12:30PM-1:00PM">12:30PM-1:00PM</option>
                <option value="1:30PM-2:00PM">1:30PM-2:00PM</option>
                <option value="2:30PM-3:00PM">2:30PM-3:00PM</option>
                <option value="3:30PM-4:00PM">3:30PM-4:00PM</option>
                <option value="4:30PM-5:00PM">4:30PM-5:00PM</option>
                <option value="5:30PM-6:00PM">5:30PM-6:00PM</option>
                <option value="5:30PM-6:00PM">5:30PM-6:00PM</option>
                <option value="6:30PM-7:00PM">6:30PM-7:00PM</option>
                <option value="7:30PM-8:00PM">7:30PM-8:00PM</option>
              </select>
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

          <div className="row">
            {
              // get the data from the state and mapping it to the card
              this.state.data.map((info, index) => {
                  if((info.day !== '') && (info.task !== '') && (info.time !== '')) {
                    return (
                      <div className="row-item">
                        <Card key={index} info={info}/>
                      </div>
                    )
                  }

              
                 } )
            }
            <br></br>
          </div>

        </div>
    )
  }
}
var dict = {};





const Card = props =>
  <div className="Calender">
    <div className="card">
      <div className="card mb-3">
        <div className="card-body">
          <p className="card-title"><span>Day: </span>{props.info.day}</p>
          <p className="card-text">
            <span>Time: </span>{props.info.time}
          </p>
          <p className="card-text">
            <span>Task: </span>{props.info.task}
          </p>
        </div>
      </div>
    </div>
  </div>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <InputForm />,

);
