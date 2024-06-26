import { useReducer } from "react";

function DateCounter() {

  const [state, dispatch] = useReducer((state, action)=>{
    console.log(state)
    switch (action.type) {
      case 'inc':
        return {
          ...state,
          count: action.payload
        }

      case 'dec':
        return {
          ...state,
          count: action.payload
        }
      
      case 'setCount':
        return {
          ...state,
          count: action.payload
        }

      case 'setStep':
        return {
          ...state,
          step: action.payload
        }

      case 'reset':
        return {
            count: 0,
            step: 1
        }
      
      default:
        throw new Error('Unknown action')
    }
  }, {count: 0, step: 1})

  const date = new Date("june 21 2027");

  const dec = function () {
    dispatch({
      type: 'dec',
      payload: state.count - state.step
    })
  };

  const inc = function () {
    dispatch({
      type: 'inc',
      payload: state.count + state.step
    })
  };

  const defineCount = function (e) {
    dispatch({
      type: 'setCount',
      payload: Number(e.target.value)
    })
  };

  const defineStep = function (e) {
    dispatch({
      type: 'setStep',
      payload: Number(e.target.value)
    })
  };

  const reset = function () {
    dispatch({
      type: 'reset',
    })
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={state.step}
          onChange={defineStep}
        />
        <span>{state.step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
