import React, {useEffect, useState} from 'react';
import './App.css';    
import SessionButton from './components/buttons/sessionButton';
import BreakButton from './components/buttons/breakButton';
import TimerLeft from './components/timer-left';
import beep from './assets/beep.mp3'

function App() { 
  const [breakTime, setBreakTime] = useState(60*5);   
  const [sessionTime, setSessionTime] = useState(60*25); 
  const [currentSessionType, setCurrentSessionType] = useState('Session')
  const [intervalId, setIntervalId] = useState(null);
  const [timerLeft, setTimerLeft] = useState(sessionTime); 
  const start = intervalId !== null;
  const timerDisplay = document.querySelector('#time-left');
  const timerLabel = document.querySelector('#timer-label'); 
 
  useEffect(()=>{
    setTimerLeft(sessionTime); 
  },[sessionTime]);

  useEffect(()=>{
    if(timerLeft === 0 && currentSessionType === 'Session'){
      setCurrentSessionType('Break'); 
      timerDisplay.style.color="#ac1a1ad5";
      timerLabel.style.color="#ac1a1ad5";
    }
    else if(timerLeft === 0 && currentSessionType === 'Break'){
      setCurrentSessionType('Session'); 
      timerDisplay.style.color="#000";
      timerLabel.style.color="#fff";
    } 
  },[timerLeft]);

  const increment = (type) => (time) => {
    const newTime = time + 60;
    if(newTime <= 60 * 60){
      if(type === "Session"){
        setSessionTime(newTime);  
      }
      else{
        setBreakTime(newTime);
      }
    }
  };

  const decrement = (type) => (time) => {
    const newTime = time - 60;
        
    if(newTime > 0 ){
      if(type === "Session"){
        setSessionTime(newTime); 
      }
      else{
        setBreakTime(newTime); 
      }
    }
  };

  const handleStartStop = () =>{
    if(start){
      clearInterval(intervalId);  
      setIntervalId(null);
    }
    else{
      const newIntervalId = setInterval(()=> {
        setTimerLeft(prevTimer =>{  
          const newTime = prevTimer - 1;

          if(newTime >= 0){
            return prevTimer - 1;
          } 

          document.querySelector('#beep').play();

          if( currentSessionType === 'Session'){  
            return breakTime;
          }
          else if( currentSessionType === 'Break'){  
            return sessionTime;
          }
        });
      }, 10000);
      setIntervalId(newIntervalId);
    }
  }; 

  const handleResetButton = () => {
    document.querySelector('#beep').load();
    clearInterval(intervalId);

    setIntervalId(null);

    setCurrentSessionType("Session");

    setSessionTime(60 * 25);

    setBreakTime(60 * 5);

    setTimerLeft(60 * 25);

  };

  return (
    <div className="App">  
    <h1 id='title'> Pomodoro </h1>
      <div className='timer'>
        <BreakButton 
          incrementBreak={increment("Break")}
          decrementBreak={decrement("Break")}
          currentBreakTime={breakTime}
        />
        <SessionButton
          incrementSession={increment("Session")}
          decrementSession={decrement("Session")}
          currentSessionTime={sessionTime}
        /> 
      </div>
      <TimerLeft  
        timerLeft={timerLeft} 
        handleStartStop={handleStartStop}
        start={start ? 'Stop' : 'Start'}
        timerLabel={currentSessionType}
        handleResetButton={handleResetButton}
        sessionTime={sessionTime}
      />
      
      <audio id="beep" src={beep}></audio>

    </div>  
  );
}

export default App;
