import './App.css';
import {useState} from 'react';
import cloneDeep from 'lodash/cloneDeep';

function InputForm() {

  const form_submitted = () => {
    // console.log(arrayDisplay(gotten_time))
    // console.log(arrayDisplay(gotten_tasks))

    // console.log(task);
    // console.log(time)
  }

  return (
    <div className="Form center">

      <form onSubmit={}>
        <div className="form-group">
          <p><strong>Day</strong></p>
          <input
              id="task"
              type="subject"
              className="data-get"
              placeholder="Input the day of your task"
              maxLength="30"
          />
        </div>
        <div className="form-group">
          <p><strong>Time</strong></p>
          <input
              id="time"
              type="subject"
              className="data-get"
              placeholder="Input the time of your task {Time:Time - Time:Time}"
              maxLength="30"
  
        />
        </div>
        <div className="form-group">
          <p><strong>Task</strong></p>
          <input
              id="time"
              type="subject"
              className="data-get"
              placeholder="Input your task in less than x characters"
              maxLength="30"

  
          />
        </div>
        <br/>
        <button type="submit" className="submit-button">Submit</button>
        
      </form>
    </div>
  );
}
