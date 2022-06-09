import React, {useState, useContext} from 'react';

import UseContextStore, {InitalStateProps} from './UseContextStore';

const UseContext = () => {

    const [customValue, setCustomValue] = useState<InitalStateProps>({
        firstname: "John",
        lastname: "Doe",
    });

    return (
        <UseContextStore.Provider value={customValue}>
            <ConsumeContext setCustomValue={setCustomValue} />
        </UseContextStore.Provider>
    )
}

const ConsumeContext = ({setCustomValue}:{setCustomValue: Function}) => {
    
    const user = useContext(UseContextStore);

    return(
        <div>
            {user.firstname === "John" 
                ? <button onClick={() => setCustomValue({firstname: "Jane", lastname: "Bond"})}>Change name</button>
                : <button onClick={() => setCustomValue({firstname: "John", lastname: "Doe"})}>Change name</button>
            }
           <p> First name: {user.firstname} </p>
           <p> Last name: {user.lastname} </p>
        </div>
    )
}

export default UseContext