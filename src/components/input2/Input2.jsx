import React from 'react';
import './Input2.scss';

function Input2(props) {

  const [focus, setFocus] = React.useState(false)

  const inputChangeHandler = (e) => {

    props.setValue(parseInt(e.target.value) || null);
  }

  const inputBlurHandler = (e) => {
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

        <div className='lizing-form__wrapper'>
          <div className='lizing-form__subtitle'>{props.title}</div> 
          <div className={"lizing-form__lable" + (focus ? ' fokus' : '')} disabled={props.fetching}>
            <div className="input__number-value__label">
              <input className='input__number-value' type="text" name="p5" id="p5" 
                readOnly
                value={props.initailPayment?.toLocaleString()} 
                disabled={props.fetching}
                onBlur={inputBlurHandler}
                onFocus={inputFocusHandler}
              />
            </div>
            <div className="right-input-wrapper" >
              <div className="right-input">
                <div className={"right-input__lable"+ (focus ? ' fokus' : '')}>
                  <input type="number" name="p4" id="p4" 
                    value={props.initialValue}  
                    onChange={e => inputChangeHandler(e)}
                    onBlur={inputBlurHandler}
                    disabled={props.fetching}
                    onFocus={inputFocusHandler}
                  />
                </div>
              </div>
            </div>
            <input className='range' type="range" name="p3" id="p3" 
              min={props.min} max={props.max}
              value={props.initialValue} 
               onChange={e => inputChangeHandler(e)}
               disabled={props.fetching}
            />
          </div>
        </div>

      </div>
      
    </div>
  );
}

export { Input2 };
