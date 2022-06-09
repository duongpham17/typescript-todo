import {useReducer} from 'react';

const initalState = {
    counter: 100,
    roll: true,
    add: (func: Function): Function => func()
}

type ACTION_COUNTER = 
    | {type: "increment", payload: number}
    | {type: "decrement", payload: number};

const counterReducer = (state: typeof initalState, action: ACTION_COUNTER) => {
    switch(action.type){
        case "increment":
            return{
                ...state,
                counter: state.counter + action.payload
            }

        case "decrement":
            return{
                ...state,
                counter: state.counter - action.payload
            }

        default:
            throw new Error("bad action");
    }
}


export const UseReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, initalState);

    return(
        <div>
            <button onClick={() => dispatch({type: "increment", payload: 10 })}>Increment</button>
            <button onClick={() => dispatch({type: "decrement", payload: 10 })}>Decrement</button>
            <button onClick={() => state.add(() => dispatch({type: "increment", payload: 100 }))}>func</button>
            <p>Counter {state.counter}</p>
        </div>
    )
}

export default UseReducer