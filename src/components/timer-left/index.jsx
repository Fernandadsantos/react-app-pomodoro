import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration';
import './timer-left.css'; 

dayjs.extend(duration);


export default function TimerLeft({timerLeft,timerLabel, handleStartStop, handleResetButton, start}){

  const formatted = (timerLeft) => {
    if(timerLeft === 3600){
      formattedTimerLeft = "60:00"; 
    } 
    else if(timerLeft === 0){
      formattedTimerLeft = "00:00";
    }
    return formattedTimerLeft;
  }

  var formattedTimerLeft = dayjs.duration(timerLeft, 'seconds').format('mm:ss', {trim: false});
  return(
    <div>
      <h2 id='timer-label'>{timerLabel}</h2>
      <h3 id='time-left'>{formatted(timerLeft)}</h3>
      <div className='btn-bottom'>
        <button id='start_stop' onClick={handleStartStop}>
          {start}
        </button>
        <button id='reset' onClick={handleResetButton}>
          Reset 
        </button>
      </div>
    </div>
  );
};