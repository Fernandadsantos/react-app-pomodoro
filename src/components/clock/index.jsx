import React, { useState } from 'react';
import './clock.css';
import Buttons from '../buttons/index';
import TimerLeft from '../timer-left';

export default function Clock(){   
    const [timerLeft, setTimerLeft] = useState();
    return(
      <div>
        <h1 id='title'> Pomodoro </h1>
        <div className='timer'>
          <Buttons 
            title='Break Length'
            initialValue={300} 
            idLabel='break-label'
            idIncrement='break-increment'
            idDecrement='break-decrement'
            idLength='break-length' 
            timeToProps={()=> setTimerLeft()}
            />
          <Buttons 
            title='Session Length'
            initialValue={1500}  
            idLabel='session-label'
            idIncrement='session-increment'
            idDecrement='session-decrement'
            idLength='session-length'
          />
        </div>
        
        <TimerLeft  
          currentTime={timerLeft}
        />
        
        <div className='btn-bottom'>
          <button id='start_stop'>
            <svg viewBox="0 0 448 512" width="50" title="play">
  <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
</svg>
            <svg viewBox="0 0 448 512" width="50" title="pause">
  <path d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />
</svg>
          </button>
           
          <button id='reset'>
            <svg viewBox="0 0 512 512" width="57" title="redo">
  <path d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z" />
</svg>
          </button>
        </div>
      </div>
    
    );
}
 