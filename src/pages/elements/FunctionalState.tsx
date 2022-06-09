import React, { ReactNode, ReactElement, useState } from 'react';

//Functional State manager Props & optional chaining

interface Functional {
    children?: (num: number) => ReactNode;
    header?: (num: number) => ReactNode;
}
  
export const FunctionalState = ({children, header} : Functional): ReactElement => {

    const [state, setState] = useState<number>(1);
    const [state1, setState1] = useState<number>(1);

    return (
        <>
            <div>
                <button onClick={() => setState1(state1+1)}>Add Header</button>
                <button onClick={() => setState(state+1)}>Add Title</button>
            </div>
            {header && <div> {header?.(state1)} </div>}
            {children && <div> {children?.(state)}</div>}
        </>
    )
}

export default FunctionalState