import React, {useEffect, useState} from 'react'

const UseEffect = ({start}:{start: boolean}) => {
    
    const [val, valSet] = useState<number>(1);

    useEffect(() => {

        let timer: any;

        if(start){
            timer = window.setInterval(() => {
                valSet((val:number) => val + 1);
            }, 1000);
        }

        return () => window.clearInterval(timer)
    }, [])

    return (
        <div>TIMER - {val}</div>
    )
}

export default UseEffect