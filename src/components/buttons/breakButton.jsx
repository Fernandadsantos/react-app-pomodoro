import React from "react"; 
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration';
import './buttons.css';

dayjs.extend(duration);

export default function BreakButton({ 
    decrementBreak,
    incrementBreak,
    currentBreakTime
}){
    const breakLengthMinutes = dayjs.duration(currentBreakTime, 'seconds').asMinutes();
    return( 
        <div className='break-box'>
            <h3 id='break-label'>Break Length</h3>
            <div className='buttons-break'>
                <button id='break-decrement'
                    onClick={()=> decrementBreak(currentBreakTime)}  
                >
                <svg viewBox="0 0 320 512" width="40" title="angle-down">
    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
    </svg>
                </button>
                <span id='break-length'>{breakLengthMinutes}</span>
                <button  id='break-increment'
                    onClick={()=> incrementBreak(currentBreakTime)} 
                >
                <svg viewBox="0 0 320 512" width="40" title="angle-up">
    <path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z" />
    </svg>
                </button>
            </div>
          </div>
    )
}