import {useRef} from 'react';

export const UseRef = () => {

    const ref = useRef<HTMLInputElement | null>(null);


    return (
        <div>
            <input ref={ref} />
        </div>
    )
}

export default UseRef