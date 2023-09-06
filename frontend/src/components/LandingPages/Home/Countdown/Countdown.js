import React, { Component } from 'react';
import "./Countdown.css";

class CountdownTimer extends Component {
  constructor(props) {
    super(props);

    // Calculate the target date and time in IST (UTC+5:30)
    this.targetDate = new Date("2023-09-30T00:00:00Z"); // UTC time
    this.targetDate.setHours(this.targetDate.getHours() -5, this.targetDate.getMinutes()-30 );

    // Initialize the state with the initial time difference
    this.state = this.calculateTimeDifference();

    // Start the countdown when the component mounts
    this.timer = setInterval(this.updateTime, 1000);
  }

  // Calculate the time difference between now and the target date
  calculateTimeDifference = () => {
    const currentDate = new Date();
    const timeDifference = this.targetDate - currentDate;
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    
    return { hours, minutes, seconds };
  };

  // Define a function to update the timer
  updateTime = () => {
    const { hours, minutes, seconds } = this.calculateTimeDifference();
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearInterval(this.timer); // Stop the timer when it reaches zero
    } else {
      this.setState({ hours, minutes, seconds });
    }
  };

  render() {
    const { hours, minutes, seconds } = this.state;

    
    return (
        <div class="countdowntimer">
          <div class="countdown">
            <span class="hours">
              <div class="time">
                <div>{Math.floor((hours < 10 ? `0${this.state.hours}` : this.state.hours)/10)} </div>
                <div>{(hours < 10 ? `0${this.state.hours}` : this.state.hours)%10} </div>
            </div>
            <div class="value">HOURS</div>
              
            </span>
            <span class="colon">:</span>
            <span class="minutes">
              <div class="time">
                  <div>{(Math.floor((minutes < 10 ? `0${this.state.minutes}` : this.state.minutes)/10))}</div>
                  <div>{(minutes < 10 ? `0${this.state.minutes}` : this.state.minutes)%10}</div>
              </div>
              <div class="value">MINUTES</div>
              
            </span>
            <span className="colon">:</span>
            <span class="seconds">
              <div class="time">
                  <div>{Math.floor((seconds < 10 ? `0${this.state.seconds}` : this.state.seconds)/10)}</div>
                  <div>{(seconds < 10 ? `0${this.state.seconds}` : this.state.seconds)%10}</div>
              </div> 
              <div class="value">SECONDS</div>
            </span>
          </div>
          
        </div>
      );
  
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

export default CountdownTimer;

