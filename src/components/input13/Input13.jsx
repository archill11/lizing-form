import React from 'react';
import './Input13.scss';

function Input13(props) {

  const [focus, setFocus] = React.useState(false)

  const inputChangeHandler = (e) => {
    props.setValue(parseInt(e.target.value.replace(/\s/g, '')) || null);
  }

  const inputBlurHandler = () => {
    if (!props.initialValue || props.initialValue < props.min) {
      props.setValue(parseInt(props.min));
    }
    if (!props.initialValue || props.initialValue > props.max) {
      props.setValue(parseInt(props.max));
    }
    setFocus(false)
  }
  const inputFocusHandler = () => {
    setFocus(true)
  }

  
  return (
    <div className="Input">
     <div className='lizing-form' action="lizing">

        <div className='lizing-form__wrapper' disabled={props.fetching}>
          <div className='lizing-form__subtitle'>{props.title}</div> 
          <div className={"lizing-form__lable" + (focus ? ' fokus' : '')} disabled={props.fetching}>
            <div className="input__number-value__label13" disabled={props.fetching}>
              <input className='input__number-value' type="text" name="p5" id="p5" 
                disabled={props.fetching}
                value={props.initialValue?.toLocaleString() || ''} 
                onChange={e => inputChangeHandler(e)}
                onBlur={inputBlurHandler}
                onFocus={inputFocusHandler}
              />
            </div>

            <div className="right-input-wrapper13" disabled={props.fetching}>
              <span disabled={props.fetching}>{props.rightSpan}</span>
            </div>
            <input min={props.min} max={props.max} className='range' type="range" name="p3" id="p3" 
              value={props.initialValue } 
              onChange={e => inputChangeHandler(e)}
              disabled={props.fetching}
            />
          </div>
        </div>
 
      </div>
      
    </div>
  );
}

export { Input13 };
