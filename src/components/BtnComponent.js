import React from 'react';

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0)? 
        <button className="stopwatch__btn stopwatch__btn__gre"
        onClick={props.start}>Start</button> : ""
      }

      {(props.status === 1)? 
        <div>
          <button className="stopwatch__btn stopwatch__btn__red"
                  onClick={props.stop}>Stop</button>
          <button className="stopwatch__btn stopwatch__btn__yel"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <button className="stopwatch__btn stopwatch__btn__gre"
                  onClick={props.resume}>Resume</button>
          <button className="stopwatch__btn stopwatch__btn__yel"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }
     
    </div>
  );
}

export default BtnComponent;